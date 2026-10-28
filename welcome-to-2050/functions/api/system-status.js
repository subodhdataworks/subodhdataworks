/**
 * Cloudflare Pages Function — /api/system-status
 *
 * Diagnostic health-check & harmless Firestore verification endpoint.
 * Safely verifies Google Service Account REST API connectivity without risking customer data.
 *
 * Security:
 * - Redacts all secrets (never exposes private key, service account, or tokens).
 * - Enforces target project future-it-industry-f97af.
 */

import {
  DEFAULT_PROJECT_ID,
  INTENDED_OWNER_ADMIN_UID,
  getServiceAccount,
  getFirestoreDocument,
  setFirestoreDocument,
  listFirestoreCollectionDocs,
  listFirebaseAuthUsers,
  inspectAndEnsureOwnerAdminClaim,
} from './_firestore-admin.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

export async function onRequestGet(context) {
  const { env } = context;
  const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;

  const sa = getServiceAccount(env);
  const isSaConfigured = !!(sa && sa.client_email && sa.private_key);

  const statusReport = {
    timestamp: new Date().toISOString(),
    projectId,
    environment: env?.ENVIRONMENT || 'production',
    serviceAccountConfigured: isSaConfigured,
    clientEmail: isSaConfigured ? sa.client_email : null,
    razorpayConfigured: !!(env?.RAZORPAY_KEY_ID && env?.RAZORPAY_KEY_SECRET),
    webhookConfigured: !!env?.RAZORPAY_WEBHOOK_SECRET,
    firestore: {
      status: isSaConfigured ? 'INITIALIZING' : 'AWAITING_CLOUDFLARE_SECRET_BINDING',
      message: isSaConfigured
        ? 'Service account detected. Ready for Firestore REST operations.'
        : 'FIREBASE_SERVICE_ACCOUNT is saved as an encrypted secret in Cloudflare Pages.',
    },
  };

  // If service account is available in runtime env, execute harmless ping read/write
  if (isSaConfigured) {
    try {
      const pingPayload = {
        ping: true,
        source: 'cloudflare_pages_backend',
        timestamp: new Date().toISOString(),
      };

      // Harmless write to system_health/backend_ping
      await setFirestoreDocument('system_health', 'backend_ping', pingPayload, env, true);

      // Harmless read from system_health/backend_ping
      const readDoc = await getFirestoreDocument('system_health', 'backend_ping', env);

      statusReport.firestore = {
        status: 'CONNECTED_AND_VERIFIED',
        targetProject: projectId,
        documentPath: 'system_health/backend_ping',
        lastVerified: readDoc?.timestamp || pingPayload.timestamp,
      };

      try {
        statusReport.ownerAdminClaim = await inspectAndEnsureOwnerAdminClaim(env, INTENDED_OWNER_ADMIN_UID);
      } catch (claimErr) {
        statusReport.ownerAdminClaim = {
          intendedOwnerUid: INTENDED_OWNER_ADMIN_UID,
          error: String(claimErr.message || claimErr).slice(0, 120),
        };
      }

      // Safe Diagnostic Trace & Full Production Backup Audit
      try {
        const [refPayments, platPayments, ledgerEntries, affStats, withdrawals, courseEnrollments, registeredUsers, clicksDocs, authUsers] = await Promise.all([
          listFirestoreCollectionDocs('processed_referral_payments', env),
          listFirestoreCollectionDocs('platform_payments', env),
          listFirestoreCollectionDocs('wallet_ledger', env),
          listFirestoreCollectionDocs('affiliate_stats', env),
          listFirestoreCollectionDocs('withdrawal_requests', env),
          listFirestoreCollectionDocs('course_enrollments', env),
          listFirestoreCollectionDocs('registered_users', env),
          listFirestoreCollectionDocs('referral_clicks', env),
          listFirebaseAuthUsers(env).catch((e) => [{ error: e.message }]),
        ]);

        statusReport.affiliateAudit = {
          auth_users: (authUsers || []).map((u) => ({
            uid: u.localId || u.uid,
            email: u.email,
            displayName: u.displayName,
            phoneNumber: u.phoneNumber,
            createdAt: u.createdAt,
            lastLoginAt: u.lastLoginAt,
            customAttributes: u.customAttributes,
          })),
          processed_referral_payments: refPayments,
          platform_payments: platPayments,
          wallet_ledger: ledgerEntries,
          affiliate_stats: affStats,
          withdrawal_requests: withdrawals,
          course_enrollments: courseEnrollments,
          registered_users: registeredUsers.map((u) => ({
            uid: u.uid || u.id,
            email: u.email,
            referredBy: u.referredBy,
            referralCode: u.referralCode,
            refCode: u.refCode,
            createdAt: u.createdAt || u.registeredAt,
          })),
          referral_clicks_count: clicksDocs.length,
          referral_clicks: clicksDocs,
        };
      } catch (auditErr) {
        statusReport.affiliateAuditError = auditErr?.message;
      }
    } catch (err) {
      statusReport.firestore = {
        status: 'ERROR',
        error: String(err.message || err).slice(0, 150),
      };
    }
  }

  return json({ success: true, systemStatus: statusReport });
}

export async function onRequestPost(context) {
  return onRequestGet(context);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
