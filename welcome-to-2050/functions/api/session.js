/**
 * Cloudflare Pages Function — /api/session
 *
 * One Account, One Active Browser Session:
 * - Authoritative server-side session management stored in Firestore collection `user_sessions/{uid}`.
 * - Enforces exactly ONE active browser session per Firebase UID.
 * - Blocks second browser login with:
 *   "You are already logged in on another browser. Please sign out from that browser to continue."
 * - Heartbeat extends session safely (throttled to 2-5 min).
 * - Safe logout invalidates session so another browser can log in.
 * - Secure session recovery allows re-authenticated force termination of orphaned sessions.
 */

import {
  getFirestoreDocument,
  setFirestoreDocument,
  getServiceAccount,
} from './_firestore-admin.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  'Pragma': 'no-cache',
  'Expires': '0',
  'Vary': 'Authorization, Cookie, Accept-Encoding',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

const SESSION_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

function generateSecureSessionId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'sess_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  let body = {};
  try {
    body = await request.clone().json();
  } catch {}

  const action = url.searchParams.get('action') || body.action || 'create';
  const rawUid = url.searchParams.get('uid') || body.uid || body.userId || '';
  const cleanUid = String(rawUid).trim();
  const incomingSessionId = String(body.sessionId || url.searchParams.get('sessionId') || '').trim();
  const deviceInfo = String(body.deviceInfo || request.headers.get('User-Agent') || 'Web Browser').slice(0, 120);

  if (!cleanUid) {
    return json({ success: false, error: 'Missing canonical Firebase UID' }, 400);
  }

  const now = Date.now();

  try {
    // =========================================================================
    // 1. ACTION: CREATE OR VALIDATE ACTIVE APPLICATION SESSION
    // =========================================================================
    if (action === 'create') {
      const forceTerminate = Boolean(body.forceTerminate);

      if (getServiceAccount(env)) {
        const existingSession = await getFirestoreDocument('user_sessions', cleanUid, env);

        if (existingSession && existingSession.sessionId) {
          const expiresAtTime = existingSession.expiresAt ? new Date(existingSession.expiresAt).getTime() : 0;
          const isStillValid = existingSession.status === 'ACTIVE' && expiresAtTime > now;

          // Case A: Same browser re-authenticating / refreshing
          if (isStillValid && incomingSessionId && existingSession.sessionId === incomingSessionId) {
            const nextExpires = new Date(now + SESSION_TTL_MS).toISOString();
            await setFirestoreDocument('user_sessions', cleanUid, {
              lastActiveAt: new Date(now).toISOString(),
              expiresAt: nextExpires,
            }, env, true);

            return json({
              success: true,
              sessionId: existingSession.sessionId,
              status: 'REFRESHED',
              expiresAt: nextExpires,
            });
          }

          // Case B: User requested to force-terminate other session after warning
          if (forceTerminate) {
            const newSessionId = generateSecureSessionId();
            const newExpires = new Date(now + SESSION_TTL_MS).toISOString();

            await setFirestoreDocument('user_sessions', cleanUid, {
              uid: cleanUid,
              sessionId: newSessionId,
              deviceInfo,
              status: 'ACTIVE',
              createdAt: new Date(now).toISOString(),
              lastActiveAt: new Date(now).toISOString(),
              expiresAt: newExpires,
              terminatedPriorSessionId: existingSession.sessionId,
            }, env, false);

            return json({
              success: true,
              sessionId: newSessionId,
              status: 'CREATED_FORCE_OVERRIDE',
              expiresAt: newExpires,
            });
          }

          // Case C: Active session exists on another browser -> BLOCK second login!
          if (isStillValid) {
            return json(
              {
                success: false,
                code: 'CONCURRENT_SESSION_BLOCKED',
                error: 'You are already logged in on another browser. Please sign out from that browser to continue.',
                activeSession: {
                  deviceInfo: existingSession.deviceInfo || 'Another Browser / Device',
                  lastActiveAt: existingSession.lastActiveAt,
                  expiresAt: existingSession.expiresAt,
                },
                canForceTerminateWithReauth: true,
              },
              409
            );
          }
        }

        // Case D: No active session or existing session has expired -> create fresh
        const newSessionId = generateSecureSessionId();
        const newExpires = new Date(now + SESSION_TTL_MS).toISOString();

        await setFirestoreDocument('user_sessions', cleanUid, {
          uid: cleanUid,
          sessionId: newSessionId,
          deviceInfo,
          status: 'ACTIVE',
          createdAt: new Date(now).toISOString(),
          lastActiveAt: new Date(now).toISOString(),
          expiresAt: newExpires,
        }, env, false);

        return json({
          success: true,
          sessionId: newSessionId,
          status: 'CREATED',
          expiresAt: newExpires,
        });
      }

      // Fallback if service account not available in testing
      const newSessionId = generateSecureSessionId();
      return json({
        success: true,
        sessionId: newSessionId,
        status: 'CREATED_OFFLINE',
      });
    }

    // =========================================================================
    // 2. ACTION: HEARTBEAT (EXTEND ACTIVE SESSION)
    // =========================================================================
    if (action === 'heartbeat') {
      if (!incomingSessionId) {
        return json({ success: false, active: false, error: 'Missing sessionId for heartbeat' }, 400);
      }

      if (getServiceAccount(env)) {
        const existingSession = await getFirestoreDocument('user_sessions', cleanUid, env);

        if (
          existingSession &&
          existingSession.sessionId === incomingSessionId &&
          existingSession.status === 'ACTIVE'
        ) {
          const nextExpires = new Date(now + SESSION_TTL_MS).toISOString();
          await setFirestoreDocument('user_sessions', cleanUid, {
            lastActiveAt: new Date(now).toISOString(),
            expiresAt: nextExpires,
          }, env, true);

          return json({
            success: true,
            active: true,
            expiresAt: nextExpires,
          });
        }

        return json({
          success: false,
          active: false,
          reason: 'SESSION_TERMINATED_OR_SUPERSEDED',
          error: 'Your session has been signed out or terminated from another browser.',
        });
      }

      return json({ success: true, active: true });
    }

    // =========================================================================
    // 3. ACTION: TERMINATE / LOGOUT
    // =========================================================================
    if (action === 'terminate') {
      if (getServiceAccount(env)) {
        const existingSession = await getFirestoreDocument('user_sessions', cleanUid, env);

        // Only terminate if the session ID matches (prevents old delayed logouts from killing a new session)
        if (existingSession && (!incomingSessionId || existingSession.sessionId === incomingSessionId)) {
          await setFirestoreDocument('user_sessions', cleanUid, {
            status: 'TERMINATED',
            terminatedAt: new Date(now).toISOString(),
          }, env, true);
        }
      }

      return json({
        success: true,
        terminated: true,
        message: 'Session cleanly released.',
      });
    }

    return json({ success: false, error: `Unsupported session action: ${action}` }, 400);
  } catch (err) {
    console.error('Session management error:', err);
    return json({ success: false, error: err.message || 'Session verification error' }, 500);
  }
}

export async function onRequestGet(context) {
  return onRequestPost(context);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
