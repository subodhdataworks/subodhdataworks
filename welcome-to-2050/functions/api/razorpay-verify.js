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
} from './_firestore-admin.js';

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

    // Generate server-signed entitlement proof token (bound to userId when provided)
    const verifiedTimestamp = Date.now();
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
        unlockedAt: new Date(verifiedTimestamp).toISOString(),
      });
      if (!enrollRes.ok) {
        return json({ success: false, error: enrollRes.error }, enrollRes.status || 409);
      }
      enrollmentRecord = enrollRes.record;

      // Sync to Cloud Firestore when service account credentials are bound in Cloudflare runtime
      if (getServiceAccount(env)) {
        try {
          const enrDocId = `ENR_${cleanUserId}_${canonicalCourseId}`;
          await setFirestoreDocument(
            'course_enrollments',
            enrDocId,
            {
              userId: cleanUserId,
              courseId: canonicalCourseId,
              paymentTransactionId: razorpay_payment_id,
              orderId: razorpay_order_id,
              enrollmentStatus: 'ACTIVE',
              paymentStatus: 'CAPTURED',
              enrolledAt: new Date(verifiedTimestamp).toISOString(),
            },
            env,
            true
          );

          await setFirestoreDocument(
            'platform_payments',
            razorpay_payment_id,
            {
              paymentId: razorpay_payment_id,
              orderId: razorpay_order_id,
              userId: cleanUserId,
              courseId: canonicalCourseId,
              paymentStatus: 'CAPTURED',
              verifiedAt: new Date(verifiedTimestamp).toISOString(),
            },
            env,
            true
          );
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
