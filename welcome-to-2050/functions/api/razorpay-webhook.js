/**
 * Cloudflare Pages Function — /api/razorpay-webhook
 *
 * Secure Razorpay Webhook Handler:
 * 1. Cryptographic HMAC-SHA256 signature verification (x-razorpay-signature header)
 * 2. Idempotent processing with duplicate-event & duplicate-paymentTransactionId protection
 * 3. Canonical amount, currency (INR), userId, and courseId entitlement verification
 * 4. Rejects failed/cancelled payments without creating any course unlock
 * 5. Safe mode toggle (ENABLE_LIVE_WEBHOOK) for staging/dry-run safety
 */

import {
  normalizeCourseKey,
  normalizeUserId,
  upsertVerifiedEnrollment,
} from './entitlements.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Razorpay-Signature',
  'Content-Type': 'application/json',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

// In-memory sets for deduplication / idempotency (scoped to function instance)
const processedEventIds = new Set();
const processedPaymentIds = new Map(); // paymentId -> { userId, courseId, enrollmentId }

// Canonical course prices in INR
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

// Constant-time string equality check to avoid timing attacks
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
  const webhookSecret = env?.RAZORPAY_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return json(
      {
        success: false,
        error: 'Webhook configuration error: RAZORPAY_WEBHOOK_SECRET is not configured on server.',
      },
      500
    );
  }

  const signatureHeader = request.headers.get('x-razorpay-signature');
  if (!signatureHeader) {
    return json(
      {
        success: false,
        error: 'Missing required x-razorpay-signature header.',
      },
      400
    );
  }

  let rawBody;
  let eventPayload;
  try {
    rawBody = await request.text();
    eventPayload = JSON.parse(rawBody);
  } catch (err) {
    return json({ success: false, error: 'Malformed JSON payload.' }, 400);
  }

  // 1. Verify cryptographic signature over raw request body
  const expectedSignature = await hmacSha256Hex(webhookSecret, rawBody);
  const isSignatureValid = safeEqual(expectedSignature, signatureHeader);

  if (!isSignatureValid) {
    return json(
      {
        success: false,
        error: 'Invalid webhook signature.',
      },
      400
    );
  }

  // 2. Duplicate Event / Idempotency Check
  const eventId = eventPayload?.id || eventPayload?.event_id;
  if (eventId) {
    if (processedEventIds.has(eventId)) {
      return json({
        success: true,
        idempotent: true,
        message: 'Event already processed. Duplicate skipped cleanly.',
        eventId,
      });
    }
    if (processedEventIds.size > 10000) {
      const firstKey = processedEventIds.keys().next().value;
      if (firstKey) processedEventIds.delete(firstKey);
    }
    processedEventIds.add(eventId);
  }

  const eventType = eventPayload?.event;

  // Explicitly handle failed/cancelled payments: NEVER create an enrollment or unlock a course
  if (eventType === 'payment.failed' || eventType === 'order.failed' || eventType === 'payment.cancelled') {
    const failedEntity =
      eventPayload?.payload?.payment?.entity || eventPayload?.payload?.order?.entity || {};
    return json({
      success: true,
      verified: true,
      event: eventType,
      eventId,
      paymentId: failedEntity.id || null,
      entitled: false,
      enrollmentCreated: false,
      message: 'Failed/cancelled payment logged; no course access or enrollment granted.',
    });
  }

  // 3. Handle Supported Events: payment.captured, order.paid
  if (eventType === 'payment.captured' || eventType === 'order.paid') {
    const paymentEntity =
      eventPayload?.payload?.payment?.entity || eventPayload?.payload?.order?.entity;

    if (!paymentEntity) {
      return json({ success: false, error: 'Payment entity missing from event payload.' }, 400);
    }

    const { id: paymentId, order_id: orderId, amount, currency, notes, status: entityStatus } = paymentEntity;

    // Reject if entity status is explicitly failed or refunded
    if (
      entityStatus &&
      ['failed', 'cancelled', 'refunded'].includes(String(entityStatus).toLowerCase())
    ) {
      return json(
        {
          success: false,
          entitled: false,
          enrollmentCreated: false,
          error: `Payment status '${entityStatus}' is not eligible for course enrollment.`,
        },
        400
      );
    }

    // Validate currency
    if (currency && currency.toUpperCase() !== 'INR') {
      return json({ success: false, error: `Unsupported currency: ${currency}` }, 400);
    }

    const rawCourseId = notes?.courseId || 'data_analyst';
    const courseId = normalizeCourseKey(rawCourseId) || rawCourseId;
    const canonicalPrice = CANONICAL_COURSE_PRICES_INR[courseId];
    const amountInRupees = amount ? Math.round(amount / 100) : 0;

    // Validate price if canonical price exists
    if (canonicalPrice && amountInRupees !== canonicalPrice) {
      return json(
        {
          success: false,
          error: `Payment amount ₹${amountInRupees} does not match canonical price ₹${canonicalPrice} for ${courseId}.`,
        },
        400
      );
    }

    // Extract user-specific identity from notes or payment entity
    const cleanUserId = normalizeUserId(
      notes?.userId || notes?.email || paymentEntity?.email || paymentEntity?.contact || ''
    );

    // Check paymentId idempotency even if delivered under a different webhook eventId
    if (paymentId && processedPaymentIds.has(paymentId)) {
      const prior = processedPaymentIds.get(paymentId);
      return json({
        success: true,
        idempotent: true,
        verified: true,
        event: eventType,
        eventId,
        paymentId,
        orderId,
        userId: prior.userId,
        courseId: prior.courseId,
        enrollment: prior.record || undefined,
        message: 'Payment already fulfilled idempotently.',
      });
    }

    // 4. Safe Mode Check (Do not activate live mutations in staging)
    const isLiveEnabled = env?.ENABLE_LIVE_WEBHOOK === 'true';

    if (!isLiveEnabled) {
      return json({
        success: true,
        mode: 'staging_dry_run',
        verified: true,
        event: eventType,
        eventId,
        paymentId,
        orderId,
        userId: cleanUserId || undefined,
        courseId,
        amount: amountInRupees,
        message: 'Webhook signature and payload validated successfully in staging safe-mode.',
      });
    }

    // Live fulfillment mode: create user-specific enrollment when userId is present
    let enrollmentRecord = null;
    let idempotentEnrollment = false;

    if (cleanUserId && paymentId) {
      const enrollRes = upsertVerifiedEnrollment({
        userId: cleanUserId,
        courseId,
        paymentTransactionId: paymentId,
        orderId: orderId || '',
        paymentStatus: 'CAPTURED',
        enrollmentStatus: 'ACTIVE',
      });
      if (!enrollRes.ok) {
        return json({ success: false, error: enrollRes.error }, enrollRes.status || 409);
      }
      enrollmentRecord = enrollRes.record;
      idempotentEnrollment = enrollRes.idempotent;
      processedPaymentIds.set(paymentId, {
        userId: cleanUserId,
        courseId,
        record: enrollmentRecord,
      });
    }

    return json({
      success: true,
      mode: 'live_fulfilled',
      verified: true,
      idempotent: idempotentEnrollment,
      event: eventType,
      eventId,
      paymentId,
      orderId,
      userId: cleanUserId || undefined,
      courseId,
      amount: amountInRupees,
      enrollment: enrollmentRecord || undefined,
    });
  }

  // Fallback for other events
  return json({
    success: true,
    message: `Event type ${eventType} acknowledged.`,
    eventId,
  });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
