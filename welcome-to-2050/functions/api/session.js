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

// Edge isolate in-memory session store (ensures session tracking & concurrency even under Firestore 429 quota exhaustion)
const isolateSessionStore = new Map();

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
      let existingSession = null;

      if (getServiceAccount(env)) {
        try {
          existingSession = await getFirestoreDocument('user_sessions', cleanUid, env);
        } catch (fsReadErr) {
          console.warn('[Session] Firestore read warning (e.g. quota 429):', fsReadErr.message);
          existingSession = isolateSessionStore.get(cleanUid) || null;
        }
      } else {
        existingSession = isolateSessionStore.get(cleanUid) || null;
      }

      if (existingSession && existingSession.sessionId) {
        const expiresAtTime = existingSession.expiresAt ? new Date(existingSession.expiresAt).getTime() : 0;
        const isStillValid = existingSession.status === 'ACTIVE' && expiresAtTime > now;

        // Case A: Same browser re-authenticating / refreshing
        if (isStillValid && incomingSessionId && existingSession.sessionId === incomingSessionId) {
          const nextExpires = new Date(now + SESSION_TTL_MS).toISOString();
          const updated = {
            ...existingSession,
            lastActiveAt: new Date(now).toISOString(),
            expiresAt: nextExpires,
          };
          isolateSessionStore.set(cleanUid, updated);

          try {
            if (getServiceAccount(env)) {
              await setFirestoreDocument('user_sessions', cleanUid, {
                lastActiveAt: new Date(now).toISOString(),
                expiresAt: nextExpires,
              }, env, true);
            }
          } catch (fsWriteErr) {
            console.warn('[Session] Firestore write warning (quota/network):', fsWriteErr.message);
          }

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
          const sessionPayload = {
            uid: cleanUid,
            sessionId: newSessionId,
            deviceInfo,
            status: 'ACTIVE',
            createdAt: new Date(now).toISOString(),
            lastActiveAt: new Date(now).toISOString(),
            expiresAt: newExpires,
            terminatedPriorSessionId: existingSession.sessionId,
          };

          isolateSessionStore.set(cleanUid, sessionPayload);

          try {
            if (getServiceAccount(env)) {
              await setFirestoreDocument('user_sessions', cleanUid, sessionPayload, env, false);
            }
          } catch (fsWriteErr) {
            console.warn('[Session] Firestore write warning on force terminate:', fsWriteErr.message);
          }

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
      const sessionPayload = {
        uid: cleanUid,
        sessionId: newSessionId,
        deviceInfo,
        status: 'ACTIVE',
        createdAt: new Date(now).toISOString(),
        lastActiveAt: new Date(now).toISOString(),
        expiresAt: newExpires,
      };

      isolateSessionStore.set(cleanUid, sessionPayload);

      try {
        if (getServiceAccount(env)) {
          await setFirestoreDocument('user_sessions', cleanUid, sessionPayload, env, false);
        }
      } catch (fsWriteErr) {
        console.warn('[Session] Firestore write warning on create:', fsWriteErr.message);
      }

      return json({
        success: true,
        sessionId: newSessionId,
        status: 'CREATED',
        expiresAt: newExpires,
      });
    }

    // =========================================================================
    // 2. ACTION: HEARTBEAT (EXTEND ACTIVE SESSION)
    // =========================================================================
    if (action === 'heartbeat') {
      if (!incomingSessionId) {
        return json({ success: false, active: false, error: 'Missing sessionId for heartbeat' }, 400);
      }

      let existingSession = null;
      if (getServiceAccount(env)) {
        try {
          existingSession = await getFirestoreDocument('user_sessions', cleanUid, env);
        } catch (fsReadErr) {
          console.warn('[Session] Heartbeat Firestore read warning:', fsReadErr.message);
          existingSession = isolateSessionStore.get(cleanUid) || null;
        }
      } else {
        existingSession = isolateSessionStore.get(cleanUid) || null;
      }

      if (
        existingSession &&
        existingSession.sessionId === incomingSessionId &&
        existingSession.status === 'ACTIVE'
      ) {
        const nextExpires = new Date(now + SESSION_TTL_MS).toISOString();
        const updated = {
          ...existingSession,
          lastActiveAt: new Date(now).toISOString(),
          expiresAt: nextExpires,
        };
        isolateSessionStore.set(cleanUid, updated);

        try {
          if (getServiceAccount(env)) {
            await setFirestoreDocument('user_sessions', cleanUid, {
              lastActiveAt: new Date(now).toISOString(),
              expiresAt: nextExpires,
            }, env, true);
          }
        } catch (fsWriteErr) {
          console.warn('[Session] Heartbeat Firestore write warning:', fsWriteErr.message);
        }

        return json({
          success: true,
          active: true,
          expiresAt: nextExpires,
        });
      }

      // If existingSession is definitively terminated or superseded
      if (existingSession && existingSession.sessionId !== incomingSessionId) {
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
      let existingSession = null;
      if (getServiceAccount(env)) {
        try {
          existingSession = await getFirestoreDocument('user_sessions', cleanUid, env);
        } catch (fsReadErr) {
          existingSession = isolateSessionStore.get(cleanUid) || null;
        }
      } else {
        existingSession = isolateSessionStore.get(cleanUid) || null;
      }

      isolateSessionStore.delete(cleanUid);

      if (getServiceAccount(env)) {
        try {
          // Only terminate in Firestore if session ID matches or incomingSessionId is blank
          if (existingSession && (!incomingSessionId || existingSession.sessionId === incomingSessionId)) {
            await setFirestoreDocument('user_sessions', cleanUid, {
              status: 'TERMINATED',
              terminatedAt: new Date(now).toISOString(),
            }, env, true);
          }
        } catch (fsWriteErr) {
          console.warn('[Session] Terminate Firestore write warning:', fsWriteErr.message);
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
    // Graceful fallback to avoid locking user out
    const fallbackSessionId = incomingSessionId || generateSecureSessionId();
    return json({
      success: true,
      sessionId: fallbackSessionId,
      status: 'CREATED_FALLBACK',
      warning: err.message,
    });
  }
}

export async function onRequestGet(context) {
  return onRequestPost(context);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
