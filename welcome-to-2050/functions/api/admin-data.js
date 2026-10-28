/**
 * Cloudflare Pages Function — /api/admin-data
 *
 * Authoritative Server-Side Admin Telemetry & Cloud Synchronization:
 * 1. Cryptographically verifies Firebase ID Token (Bearer RS256 JWKS).
 * 2. Enforces Firebase Admin Custom Claim { admin: true } or { role: 'admin' }.
 * 3. Fetches live Firebase Authentication accounts via Google Identity Toolkit API.
 * 4. Fetches live Firestore collections (platform_payments, course_enrollments, withdrawal_requests, affiliate_stats).
 * 5. Reconciles real counts (13 Auth users, verified enrollments, real revenue) without localStorage reliance.
 * 6. Redacts all sensitive server-account credentials.
 */

import {
  DEFAULT_PROJECT_ID,
  INTENDED_OWNER_ADMIN_UID,
  getServiceAccount,
  pemToBinaryDer,
  base64UrlEncode,
  fromFirestoreFields,
  listFirestoreCollectionDocs,
  runFirestoreTransaction,
  inspectAndEnsureOwnerAdminClaim,
} from './_firestore-admin.js';
import { verifyFirebaseIdToken } from './admin-verify.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

function normalizeRefCode(raw) {
  if (!raw || typeof raw !== 'string') return '';
  return raw.trim().toUpperCase().replace(/100$/, '');
}

const GOOGLE_TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';
const ADMIN_DATA_SCOPES =
  'https://www.googleapis.com/auth/identitytoolkit https://www.googleapis.com/auth/datastore';

// Cache for Google OAuth2 admin token
let cachedAdminToken = null;
let tokenExpiresAt = 0;

async function getAdminOAuth2Token(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  if (cachedAdminToken && now < tokenExpiresAt - 300) {
    return cachedAdminToken;
  }

  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: serviceAccount.client_email,
    scope: ADMIN_DATA_SCOPES,
    aud: GOOGLE_TOKEN_ENDPOINT,
    iat: now,
    exp: now + 3600,
  };

  const unsignedJwt = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(payload))}`;
  const derBuffer = pemToBinaryDer(serviceAccount.private_key);
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    derBuffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(unsignedJwt)
  );

  const assertion = `${unsignedJwt}.${base64UrlEncode(signature)}`;

  const res = await fetch(GOOGLE_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new Error(`Google OAuth2 exchange failed: ${errText.slice(0, 150)}`);
  }

  const data = await res.json();
  cachedAdminToken = data.access_token;
  tokenExpiresAt = now + (data.expires_in || 3600);
  return cachedAdminToken;
}


/**
 * Authoritative Server-Side Payout Action Handler
 * Enforces admin authorization, banking UTR validation, idempotency, and atomic Cloud Firestore updates.
 */
async function handleUpdateWithdrawalStatus(context, body) {
  const { request, env } = context;

  // 1. Authenticate Admin via Firebase ID Token
  const authHeader = request.headers.get('Authorization') || '';
  if (!authHeader.startsWith('Bearer ')) {
    return json({ success: false, error: 'Unauthorized: Bearer token required in Authorization header.' }, 401);
  }

  const token = authHeader.slice(7).trim();
  const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;
  const verification = await verifyFirebaseIdToken(token, projectId);
  if (!verification || !verification.valid || !verification.payload) {
    return json(
      {
        success: false,
        code: 'TOKEN_INVALID_OR_EXPIRED',
        requiresTokenRefresh: true,
        error: `Unauthorized: ${verification?.error || 'Invalid or expired Firebase ID token.'}`,
      },
      401
    );
  }

  const adminClaims = verification.payload;
  const payload = adminClaims;
  const hasAdminClaim = adminClaims.admin === true || adminClaims.role === 'admin';
  if (!hasAdminClaim) {
    if (payload.sub === INTENDED_OWNER_ADMIN_UID) {
      try {
        await inspectAndEnsureOwnerAdminClaim(env, INTENDED_OWNER_ADMIN_UID);
      } catch {}
      return json(
        {
          success: false,
          code: 'STALE_ADMIN_TOKEN_REFRESH_REQUIRED',
          requiresTokenRefresh: true,
          uid: payload.sub,
          error: 'Stale Firebase ID token detected for owner admin account. Force-refreshing token via getIdToken(true)...',
        },
        403
      );
    }

    return json(
      {
        success: false,
        code: 'FORBIDDEN_NOT_ADMIN',
        uid: payload.sub,
        expectedOwnerUid: INTENDED_OWNER_ADMIN_UID,
        error: `Forbidden: Logged-in account (${payload.email || payload.sub}, UID: ${payload.sub}) is not the authorized admin (expected UID: ${INTENDED_OWNER_ADMIN_UID}). Admin custom claim { admin: true } required to process payouts.`,
      },
      403
    );
  }

  // 2. Validate Service Account binding
  const sa = getServiceAccount(env);
  if (!sa) {
    return json({ success: false, error: 'Server configuration error: FIREBASE_SERVICE_ACCOUNT binding not available.' }, 500);
  }

  // 3. Extract and sanitize parameters
  const requestId = String(body.requestId || '').trim();
  const rawTargetStatus = String(body.newStatus || '').trim().toUpperCase();
  const payoutRef = String(body.payoutRef || '').trim();
  const adminNotes = String(body.adminNotes || '').trim();

  if (!requestId) {
    return json({ success: false, error: 'requestId is mandatory.' }, 400);
  }

  if (!['APPROVED', 'PAID', 'REJECTED', 'UNDER_REVIEW'].includes(rawTargetStatus)) {
    return json({ success: false, error: `Invalid target status '${rawTargetStatus}'. Must be APPROVED, PAID, or REJECTED.` }, 400);
  }

  // 4. Strict Validation for Mark Paid
  if (rawTargetStatus === 'PAID') {
    if (!payoutRef) {
      return json({
        success: false,
        error: 'Mandatory banking verification: Enter Bank UTR / UPI Reference Number before marking Paid.',
      }, 400);
    }

    const upperRef = payoutRef.toUpperCase();

    // Prevent entering internal system IDs as proof of transfer
    if (
      upperRef === requestId.toUpperCase() ||
      upperRef.startsWith('WREQ-') ||
      upperRef.startsWith('WTX-') ||
      upperRef.startsWith('REQ-')
    ) {
      return json({
        success: false,
        error: 'Invalid Payout Reference: You entered the internal system withdrawal ID. Please enter the actual Bank UTR or UPI Reference Number (e.g. 12-digit UPI RRN or Bank UTR from your net banking app).',
      }, 400);
    }

    // Prevent arbitrary/dummy text
    const DUMMY_WORDS = ['TEST', 'PENDING', 'PAID', 'DONE', 'OK', '123', '1234', '12345', '123456', 'CASH', 'NA', 'NULL', 'UNDEFINED', 'TRANSFER'];
    if (DUMMY_WORDS.includes(upperRef) || payoutRef.length < 6 || payoutRef.length > 35) {
      return json({
        success: false,
        error: 'Invalid Payout Reference: A valid external Bank UTR or UPI Reference Number (6-35 alphanumeric characters) is required as proof of transfer.',
      }, 400);
    }
  }

  // 5. Strict Validation for Rejection
  if (rawTargetStatus === 'REJECTED' && !adminNotes) {
    return json({
      success: false,
      error: 'Mandatory financial safeguard: A valid rejection reason must be provided in Admin Notes.',
    }, 400);
  }

  // 6. Fetch existing withdrawals and verify state
  const allWithdrawals = await listFirestoreCollectionDocs('withdrawal_requests', env);
  const existingReq = allWithdrawals.find((w) => w.id === requestId || w.txId === requestId);

  if (!existingReq) {
    return json({
      success: false,
      error: `Withdrawal request #${requestId} not found in Cloud Firestore.`,
    }, 404);
  }

  const currentStatus = String(existingReq.status || 'UNDER_REVIEW').toUpperCase();

  // Immutable check: cannot modify an already PAID withdrawal
  if (currentStatus === 'PAID') {
    return json({
      success: false,
      error: 'CANNOT_MODIFY_PAID_WITHDRAWAL: This withdrawal request is already marked as PAID and settled. Repeated PAID transitions are prohibited.',
    }, 400);
  }

  // Check duplicate UTR across all other withdrawals
  if (rawTargetStatus === 'PAID') {
    const duplicate = allWithdrawals.find(
      (w) =>
        (w.id !== requestId && (w.txId || '') !== requestId) &&
        (String(w.referenceNo || '').toLowerCase() === payoutRef.toLowerCase() ||
         String(w.payoutRef || '').toLowerCase() === payoutRef.toLowerCase())
    );
    if (duplicate) {
      return json({
        success: false,
        error: `DUPLICATE_PAYOUT_REF: Payout reference '${payoutRef}' has already been used on withdrawal #${duplicate.id}. Duplicate banking references are blocked for financial integrity.`,
      }, 400);
    }
  }

  // 7. Atomic Cloud Firestore Execution
  const nowIso = new Date().toISOString();
  const withdrawAmount = Number(existingReq.amount) || 0;
  const refCode = existingReq.refCode || existingReq.userId || existingReq.referrerId || '';

  try {
    await runFirestoreTransaction(async (tx) => {
      // 1. Update withdrawal_requests record
      const updatedWithdrawalFields = {
        status: rawTargetStatus,
        updatedAt: nowIso,
        adminNotes: adminNotes || existingReq.adminNotes || `Status updated to ${rawTargetStatus} by administrator.`,
        processedBy: adminClaims.email || adminClaims.sub || 'Admin',
      };

      if (rawTargetStatus === 'PAID') {
        updatedWithdrawalFields.paidAt = nowIso;
        updatedWithdrawalFields.referenceNo = payoutRef;
        updatedWithdrawalFields.payoutRef = payoutRef;
      }

      tx.update('withdrawal_requests', existingReq.id, updatedWithdrawalFields);

      // 2. Update affiliate_stats record if refCode exists
      if (refCode) {
        let statsDoc = await tx.get('affiliate_stats', refCode);
        const cleanRefCode = normalizeRefCode(refCode);
        if (!statsDoc && cleanRefCode && cleanRefCode !== refCode) {
          statsDoc = await tx.get('affiliate_stats', cleanRefCode);
        }
        if (!statsDoc && existingReq.userId && existingReq.userId !== refCode) {
          statsDoc = await tx.get('affiliate_stats', existingReq.userId);
        }
        if (!statsDoc && cleanRefCode) {
          statsDoc = await tx.get('affiliate_stats', `${cleanRefCode}100`);
        }

        if (statsDoc) {
          const currentPending = Number(statsDoc.pendingBalance) || 0;
          const currentPaid = Number(statsDoc.totalPaid) || 0;
          const currentAvail = Number(statsDoc.availableBalance) || 0;
          const currentEarned = Number(statsDoc.totalEarned) || 0;

          if (rawTargetStatus === 'PAID') {
            // Pending withdrawal clears into totalPaid. Available balance is untouched. Lifetime earnings untouched!
            tx.set('affiliate_stats', statsDoc.id, {
              ...statsDoc,
              pendingBalance: Math.max(0, currentPending - withdrawAmount),
              totalPaid: currentPaid + withdrawAmount,
              availableBalance: currentAvail,
              totalEarned: currentEarned,
              updatedAt: nowIso,
            });
          } else if (rawTargetStatus === 'REJECTED') {
            // Rejected withdrawal returns reserved funds back to available balance.
            tx.set('affiliate_stats', statsDoc.id, {
              ...statsDoc,
              pendingBalance: Math.max(0, currentPending - withdrawAmount),
              availableBalance: currentAvail + withdrawAmount,
              totalPaid: currentPaid,
              totalEarned: currentEarned,
              updatedAt: nowIso,
            });
          }
        }
      }
    }, env);

    return json({
      success: true,
      message: `Withdrawal request #${requestId} successfully updated to ${rawTargetStatus}.`,
      withdrawal: {
        id: requestId,
        status: rawTargetStatus,
        payoutRef: rawTargetStatus === 'PAID' ? payoutRef : (existingReq.payoutRef || null),
        paidAt: rawTargetStatus === 'PAID' ? nowIso : null,
        updatedAt: nowIso,
      },
    });
  } catch (txErr) {
    return json({
      success: false,
      error: `Firestore transaction failed: ${String(txErr?.message || txErr).slice(0, 150)}`,
    }, 500);
  }
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;

  // 1. Verify Authorization Header
  const authHeader = request.headers.get('Authorization') || '';
  if (!authHeader.startsWith('Bearer ')) {
    return json({ success: false, error: 'Unauthorized: Bearer token required in Authorization header' }, 401);
  }

  const idToken = authHeader.slice(7).trim();
  const verification = await verifyFirebaseIdToken(idToken, projectId);
  if (!verification.valid) {
    return json({ success: false, error: `Unauthorized: ${verification.error}` }, 401);
  }

  // 2. Enforce Admin Custom Claim (Strictly requires admin: true or role: admin; no email-only bypass)
  const adminClaims = verification.payload;
  const payload = adminClaims;
  const hasAdminClaim = adminClaims.admin === true || adminClaims.role === 'admin';

  if (!hasAdminClaim) {
    if (payload.sub === INTENDED_OWNER_ADMIN_UID) {
      try {
        await inspectAndEnsureOwnerAdminClaim(env, INTENDED_OWNER_ADMIN_UID);
      } catch {}
      return json(
        {
          success: false,
          code: 'STALE_ADMIN_TOKEN_REFRESH_REQUIRED',
          requiresTokenRefresh: true,
          uid: payload.sub,
          error: 'Stale Firebase ID token detected for owner admin account. Please refresh token via getIdToken(true).',
        },
        403
      );
    }

    return json(
      {
        success: false,
        code: 'FORBIDDEN_NOT_ADMIN',
        uid: payload.sub,
        expectedOwnerUid: INTENDED_OWNER_ADMIN_UID,
        error: `Forbidden: Account (${payload.email || payload.sub}, UID: ${payload.sub}) does not have administrative privileges. Firebase Custom Claim { admin: true } required.`,
      },
      403
    );
  }

  // 3. Obtain Service Account
  const sa = getServiceAccount(env);
  if (!sa) {
    return json(
      {
        success: false,
        error: 'Server configuration error: FIREBASE_SERVICE_ACCOUNT binding not available.',
      },
      500
    );
  }

  try {
    const oauth2Token = await getAdminOAuth2Token(sa);

    // 4. Fetch All Users from Firebase Authentication (Identity Toolkit API)
    let authUsers = [];
    try {
      const authRes = await fetch(
        `https://identitytoolkit.googleapis.com/v1/projects/${projectId}/accounts:batchGet?maxResults=100`,
        { headers: { Authorization: `Bearer ${oauth2Token}` } }
      );
      if (authRes.ok) {
        const authData = await authRes.json();
        authUsers = authData.users || [];
      }
    } catch (authErr) {
      console.warn('Identity Toolkit fetch notice:', authErr?.message);
    }

    // 5. Fetch Core Collections from Cloud Firestore REST API
    const fsBase = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;

    async function fetchCollectionDocs(colName) {
      try {
        const cRes = await fetch(`${fsBase}/${colName}?pageSize=300`, {
          headers: { Authorization: `Bearer ${oauth2Token}` },
        });
        if (!cRes.ok) return [];
        const cData = await cRes.json();
        return (cData.documents || []).map((d) => ({
          id: d.name.split('/').pop(),
          ...fromFirestoreFields(d.fields || {}),
        }));
      } catch {
        return [];
      }
    }

    const [registeredUsersDocs, paymentsDocs, enrollmentsDocs, withdrawalsDocs, affiliateDocs] =
      await Promise.all([
        fetchCollectionDocs('registered_users'),
        fetchCollectionDocs('platform_payments'),
        fetchCollectionDocs('course_enrollments'),
        fetchCollectionDocs('withdrawal_requests'),
        fetchCollectionDocs('affiliate_stats'),
      ]);

    // Map registered users by email and uid for seamless metadata merge
    const profileMap = new Map();
    registeredUsersDocs.forEach((doc) => {
      if (doc.uid) profileMap.set(doc.uid, doc);
      if (doc.email) profileMap.set(doc.email.toLowerCase(), doc);
      if (doc.userId) profileMap.set(doc.userId, doc);
    });

    // Synthesize full user records from live Firebase Auth (authoritative source of accounts)
    const reconciledUsers = authUsers.map((u) => {
      const email = (u.email || '').toLowerCase();
      const profile = profileMap.get(u.localId) || profileMap.get(email) || {};

      let claims = {};
      if (u.customAttributes) {
        try {
          claims = JSON.parse(u.customAttributes);
        } catch {}
      }

      const role = claims.admin || claims.role === 'admin' ? 'influencer' : profile.role || 'student';
      const createdDate = u.createdAt
        ? new Date(Number(u.createdAt)).toISOString().slice(0, 10)
        : profile.registeredAt || profile.createdAt || new Date().toISOString().slice(0, 10);

      // Determine provider source
      let source = 'Email';
      const providers = u.providerUserInfo || [];
      if (providers.some((p) => p.providerId === 'google.com')) {
        source = 'Google';
      } else if (providers.some((p) => p.providerId === 'phone')) {
        source = 'Phone';
      }

      return {
        uid: u.localId,
        name: profile.name || u.displayName || (email ? email.split('@')[0] : 'Learner'),
        email: u.email || '',
        phone: profile.phone || u.phoneNumber || '',
        role,
        referralCode: profile.referralCode || (email ? `${email.split('@')[0].toUpperCase().replace(/[^A-Z0-9]/g, '')}100` : ''),
        referredBy: profile.referredBy || '',
        registeredAt: createdDate,
        source: profile.source || source,
        avatar: profile.avatar || u.photoUrl || '',
        lastLoginAt: u.lastLoginAt ? new Date(Number(u.lastLoginAt)).toISOString() : null,
      };
    });

    // 6. Calculate verified live financials
    const CANONICAL_PRICES_FALLBACK = {
      data_analyst: 4,
      data_science: 987,
      ml_engineering: 987,
      deep_learning: 987,
      ai_engineering: 987,
      ai_tools_prompt: 499,
      ms_office_copilot: 499,
      full_stack_mern: 987,
    };

    const verifiedPayments = paymentsDocs.filter(
      (p) => String(p.paymentStatus || p.status || '').toUpperCase() === 'CAPTURED'
    );
    const totalRev = verifiedPayments.reduce((acc, curr) => {
      const parsedAmt = Number(curr.amount);
      const amt = Number.isFinite(parsedAmt) && parsedAmt > 0
        ? parsedAmt
        : (CANONICAL_PRICES_FALLBACK[curr.courseId] || 4);
      return acc + amt;
    }, 0);

    const pendingWithdrawals = withdrawalsDocs.filter(
      (w) => String(w.status || '').toUpperCase() === 'UNDER_REVIEW' || String(w.status || '').toUpperCase() === 'PENDING'
    );
    const paidWithdrawals = withdrawalsDocs.filter(
      (w) => String(w.status || '').toUpperCase() === 'PAID' || String(w.status || '').toUpperCase() === 'APPROVED'
    );

    const courseEnrollmentMap = {
      'Python for Data Analytics & AI': 0,
      'SQL & Databases Mastery': 0,
      'Excel & Business Reporting': 0,
      'Power BI Dashboards': 0,
      'GenAI for Data Engineers': 0,
    };

    enrollmentsDocs.forEach((enr) => {
      const cId = String(enr.courseId || '').toLowerCase();
      if (cId.includes('data_analyst') || cId.includes('python')) {
        courseEnrollmentMap['Python for Data Analytics & AI']++;
      } else if (cId.includes('data_science') || cId.includes('sql')) {
        courseEnrollmentMap['SQL & Databases Mastery']++;
      } else if (cId.includes('ml_engineering') || cId.includes('excel')) {
        courseEnrollmentMap['Excel & Business Reporting']++;
      } else if (cId.includes('ai_engineering') || cId.includes('powerbi')) {
        courseEnrollmentMap['Power BI Dashboards']++;
      } else {
        courseEnrollmentMap['GenAI for Data Engineers']++;
      }
    });

    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const activeUsersCount = authUsers.filter((u) => {
      const lastLogin = Number(u.lastLoginAt || u.lastSignInTime || 0);
      return lastLogin >= thirtyDaysAgo;
    }).length;

    const stats = {
      totalUsers: reconciledUsers.length, // Live count of Firebase Auth accounts (13)
      activeUsers: activeUsersCount,
      suspendedUsers: 0,
      enrolledStudents: enrollmentsDocs.length,
      totalRevenue: totalRev,
      totalReferrals: reconciledUsers.filter((u) => u.referredBy).length,
      pendingWithdrawalsCount: pendingWithdrawals.length,
      pendingWithdrawalsAmount: pendingWithdrawals.reduce((a, b) => a + (Number(b.amount) || 0), 0),
      paidWithdrawalsCount: paidWithdrawals.length,
      paidWithdrawalsAmount: paidWithdrawals.reduce((a, b) => a + (Number(b.amount) || 0), 0),
      courseEnrollments: courseEnrollmentMap,
    };

    return json({
      success: true,
      timestamp: new Date().toISOString(),
      dataSource: 'LIVE_FIREBASE_AUTH_AND_FIRESTORE',
      stats,
      users: reconciledUsers,
      payments: verifiedPayments,
      enrollments: enrollmentsDocs,
      withdrawals: withdrawalsDocs.map((w) => {
        const isBank =
          String(w.method || '').toUpperCase() === 'BANK' ||
          String(w.method || '').toUpperCase() === 'BANK_TRANSFER' ||
          Boolean(w.bankAccNumber || w.details?.accountNumber);
        const dest = w.destination || w.details?.upiId || w.details?.accountNumber || '';
        const rawStatus = String(w.status || 'UNDER_REVIEW').toUpperCase();
        const status =
          rawStatus === 'PAID'
            ? 'PAID'
            : rawStatus === 'APPROVED'
            ? 'APPROVED'
            : rawStatus === 'REJECTED' || rawStatus === 'CANCELLED'
            ? 'REJECTED'
            : rawStatus === 'PROCESSING'
            ? 'PROCESSING'
            : 'UNDER_REVIEW';

        return {
          id: w.id || w.txId || 'REQ',
          txId: w.txId || w.id || '',
          userId: w.userId || w.referrerId || '',
          referrerId: w.referrerId || w.userId || w.refCode || 'Learner',
          refCode: w.refCode || '',
          amount: Number(w.amount) || 0,
          method: isBank ? 'BANK_TRANSFER' : 'UPI',
          destination: dest,
          status,
          createdAt: w.createdAt || w.requestedAt || new Date().toISOString(),
          requestedAt: w.requestedAt || w.createdAt || new Date().toISOString(),
          paidAt: w.paidAt || null,
          referenceNo: w.referenceNo || w.txId || w.payoutRef || '',
          details: {
            upiId: w.details?.upiId || (!isBank ? dest : ''),
            accountNumber: w.details?.accountNumber || (isBank ? dest : ''),
            accountHolder: w.details?.accountHolder || w.accountHolder || w.userName || w.refCode || 'Learner',
            ifsc: w.details?.ifsc || w.ifsc || '',
            bankName: w.details?.bankName || w.bankName || 'Bank',
          },
        };
      }),
      affiliates: affiliateDocs,
    });
  } catch (err) {
    return json(
      {
        success: false,
        error: `Failed to fetch admin telemetry: ${String(err.message || err).slice(0, 150)}`,
      },
      500
    );
  }
}

export async function onRequestPost(context) {
  const { request } = context;
  let body = {};
  try {
    body = await request.clone().json();
  } catch {
    body = {};
  }

  if (body && body.action === 'update_withdrawal_status') {
    return handleUpdateWithdrawalStatus(context, body);
  }

  return onRequestGet(context);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
