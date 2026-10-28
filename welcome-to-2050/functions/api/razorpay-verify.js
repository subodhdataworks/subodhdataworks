/**
 * Cloudflare Pages Function — /api/razorpay-verify
 * Verifies Razorpay payment signature server-side and generates user-bound entitlement proofs.
 * Secret key is read exclusively from Cloudflare environment variables.
 * Securely syncs verified enrollment & payment records to Cloud Firestore when credentials are present.
 */

import {
  normalizeCourseKey,
  normalizeUserId,
  upsertVerifiedEnrollment,
} from './entitlements.js';
import {
  getServiceAccount,
  setFirestoreDocument,
  runFirestoreTransaction,
} from './_firestore-admin.js';

const CANONICAL_COURSE_PRICES_INR = {
  data_analyst: 4,
  data_science: 987,
  ml_engineering: 987,
  deep_learning: 987,
  ai_engineering: 987,
  ai_tools_prompt: 499,
  ms_office_copilot: 499,
  full_stack_mern: 987,
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

async function hmacSha256Hex(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Constant-time string comparison to prevent timing attacks
function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const keySecret = env?.RAZORPAY_KEY_SECRET;

  if (!keySecret) {
    return json(
      {
        success: false,
        error: 'Payment verification secret is missing from environment configuration.',
      },
      500
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      courseId,
      userId,
      email,
      amount,
      refCode,
      paymentStatus,
    } = body;

    // Never verify or unlock if payment status is explicitly failed/cancelled/pending
    if (
      paymentStatus &&
      ['FAILED', 'CANCELLED', 'PENDING', 'CREATED', 'REFUNDED'].includes(
        String(paymentStatus).toUpperCase()
      )
    ) {
      return json(
        {
          success: false,
          error: `Payment verification rejected: payment status is ${paymentStatus}`,
        },
        400
      );
    }

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return json({ success: false, error: 'Missing required payment verification fields' }, 400);
    }

    const expectedSignature = await hmacSha256Hex(
      keySecret,
      `${razorpay_order_id}|${razorpay_payment_id}`
    );

    const isSignatureValid = safeEqual(expectedSignature, String(razorpay_signature));

    if (!isSignatureValid) {
      return json({ success: false, error: 'Payment signature verification failed' }, 400);
    }

    const canonicalCourseId = normalizeCourseKey(courseId || 'data_analyst') || String(courseId || 'data_analyst');
    const cleanUserId = normalizeUserId(userId || email || '');

    // Canonical price & amount resolution
    const fallbackPrice = CANONICAL_COURSE_PRICES_INR[canonicalCourseId] || 4;
    let amountInRupees = Number(amount);
    if (!Number.isFinite(amountInRupees) || amountInRupees <= 0) {
      amountInRupees = fallbackPrice;
    }

    // Resolve refCode from request body or Razorpay API notes
    let rawRef = String(refCode || body.ref || '').trim();

    // Query Razorpay API for official order notes & captured amount if API keys exist
    const keyId = env?.RAZORPAY_KEY_ID;
    if (keyId && keySecret) {
      try {
        const rzpAuth = 'Basic ' + btoa(`${keyId}:${keySecret}`);
        const rzpPayRes = await fetch(
          `https://api.razorpay.com/v1/payments/${encodeURIComponent(razorpay_payment_id)}`,
          { headers: { Authorization: rzpAuth } }
        );
        if (rzpPayRes.ok) {
          const pInfo = await rzpPayRes.json();
          if (pInfo.amount && Number.isFinite(pInfo.amount)) {
            amountInRupees = Math.round(pInfo.amount / 100);
          }
          if (!rawRef && pInfo.notes?.refCode) {
            rawRef = String(pInfo.notes.refCode).trim();
          }
          if (!rawRef && pInfo.notes?.ref) {
            rawRef = String(pInfo.notes.ref).trim();
          }
        }
      } catch (rzpErr) {
        console.warn('Razorpay payment info lookup notice:', rzpErr?.message);
      }
    }

    const cleanRef = rawRef.toUpperCase().replace(/100$/, '').replace(/[^A-Z0-9]/g, '');

    // Self-referral protection: learner cannot refer themselves
    const payerEmail = String(email || cleanUserId || '').trim().toLowerCase();
    const payerEmailPrefix = payerEmail.split('@')[0].toUpperCase().replace(/[^A-Z0-9]/g, '');
    const payerUserIdClean = cleanUserId.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const isSelfReferral = Boolean(
      cleanRef &&
      (cleanRef === payerEmailPrefix ||
       cleanRef === payerUserIdClean ||
       cleanRef === 'PARTNER' ||
       cleanRef === 'LEARNER' ||
       cleanRef === 'STUDENT')
    );

    // Generate server-signed entitlement proof token (bound to userId when provided)
    const verifiedTimestamp = Date.now();
    const nowIso = new Date(verifiedTimestamp).toISOString();
    const proofPayload = cleanUserId
      ? `VERIFIED_ENTITLEMENT:${cleanUserId}:${razorpay_payment_id}:${razorpay_order_id}:${canonicalCourseId}:${verifiedTimestamp}`
      : `VERIFIED_ENTITLEMENT:${razorpay_payment_id}:${razorpay_order_id}:${courseId || 'data_analyst'}:${verifiedTimestamp}`;

    const entitlementProof = await hmacSha256Hex(keySecret, proofPayload);

    // If an authenticated userId is provided, record the enrollment immediately and atomically for that user & course
    let enrollmentRecord = null;
    if (cleanUserId) {
      const enrollRes = upsertVerifiedEnrollment({
        userId: cleanUserId,
        courseId: canonicalCourseId,
        paymentTransactionId: razorpay_payment_id,
        orderId: razorpay_order_id,
        paymentStatus: 'CAPTURED',
        enrollmentStatus: 'ACTIVE',
        unlockedAt: nowIso,
      });
      if (!enrollRes.ok) {
        return json({ success: false, error: enrollRes.error }, enrollRes.status || 409);
      }
      enrollmentRecord = enrollRes.record;

      // Sync to Cloud Firestore when service account credentials are bound in Cloudflare runtime
      if (getServiceAccount(env)) {
        try {
          const enrDocId = `ENR_${cleanUserId}_${canonicalCourseId}`;
          const activeRef = (!isSelfReferral && cleanRef) ? cleanRef : '';

          // 1. Course Enrollment Record (with verified amount & attribution)
          await setFirestoreDocument(
            'course_enrollments',
            enrDocId,
            {
              userId: cleanUserId,
              courseId: canonicalCourseId,
              paymentTransactionId: razorpay_payment_id,
              orderId: razorpay_order_id,
              amount: amountInRupees,
              enrollmentStatus: 'ACTIVE',
              paymentStatus: 'CAPTURED',
              referredBy: activeRef,
              enrolledAt: nowIso,
            },
            env,
            true
          );

          // 2. Platform Payment Record (ensures amount is present for total revenue computation)
          await setFirestoreDocument(
            'platform_payments',
            razorpay_payment_id,
            {
              paymentId: razorpay_payment_id,
              orderId: razorpay_order_id,
              userId: cleanUserId,
              courseId: canonicalCourseId,
              amount: amountInRupees,
              paymentStatus: 'CAPTURED',
              status: 'CAPTURED',
              payerEmail,
              referredBy: activeRef,
              verifiedAt: nowIso,
            },
            env,
            true
          );

          // 3. Referral Commission Crediting (Flat ₹100, Idempotent, Self-Referral Protected)
          if (activeRef) {
            await runFirestoreTransaction(async (tx) => {
              // Deduplication check: prevent multiple credits for the same paymentId
              const processed = await tx.get('processed_referral_payments', razorpay_payment_id);
              if (processed) {
                return; // Already processed idempotently
              }

              // Get existing affiliate stats for this referral code
              const affiliateDoc = (await tx.get('affiliate_stats', activeRef)) || {};
              const totalEarned = (Number(affiliateDoc.totalEarned) || 0) + 100;
              const totalPaid = Number(affiliateDoc.totalPaid) || 0;
              const pendingBalance = Number(affiliateDoc.pendingBalance) || 0;
              const availableBalance = Math.max(0, totalEarned - totalPaid - pendingBalance);
              const paidEnrollments = (Number(affiliateDoc.paidEnrollments) || 0) + 1;

              // Atomically update affiliate_stats
              tx.set('affiliate_stats', activeRef, {
                refCode: activeRef,
                paidEnrollments,
                totalEarned,
                availableBalance,
                availableToPayout: availableBalance,
                availableToWithdraw: availableBalance,
                pendingBalance,
                totalPaid,
                updatedAt: nowIso,
              });

              // Atomically record in processed_referral_payments
              tx.set('processed_referral_payments', razorpay_payment_id, {
                paymentId: razorpay_payment_id,
                orderId: razorpay_order_id,
                refCode: activeRef,
                payerUserId: cleanUserId,
                payerEmail,
                courseId: canonicalCourseId,
                commission: 100,
                creditedAt: nowIso,
              });

              // Atomically record immutable ledger entry in wallet_ledger
              const ledgerId = `led_comm_${razorpay_payment_id}`;
              tx.set('wallet_ledger', ledgerId, {
                id: ledgerId,
                paymentId: razorpay_payment_id,
                userId: activeRef,
                type: 'COMMISSION_CREDITED',
                amount: 100,
                balanceBefore: Number(affiliateDoc.availableBalance) || 0,
                balanceAfter: availableBalance,
                status: 'Credited',
                timestamp: nowIso,
                description: `Verified paid course enrollment commission (${razorpay_payment_id})`,
              });
            }, env);
          }
        } catch (fsErr) {
          console.warn('Firestore server sync notice:', fsErr?.message);
        }
      }
    }

    return json({
      success: true,
      userId: cleanUserId || undefined,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      courseId: canonicalCourseId,
      verifiedAt: verifiedTimestamp,
      entitlementProof,
      enrollment: enrollmentRecord || undefined,
    });
  } catch (err) {
    return json({ success: false, error: 'Internal verification error' }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
