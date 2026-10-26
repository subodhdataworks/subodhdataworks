/**
 * Cloudflare Pages Function — /api/razorpay-order
 * Creates a Razorpay Order server-side (credentials read exclusively from Cloudflare env).
 * Binds both userId and courseId into the order notes for strict user-wise course unlocking.
 *
 * Environment variables required in Cloudflare Pages dashboard:
 *   RAZORPAY_KEY_ID
 *   RAZORPAY_KEY_SECRET
 */

import { normalizeCourseKey, normalizeUserId } from './entitlements.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

// Canonical Server-Side Course Price Validation (Rupees)
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

export async function onRequestPost(context) {
  const { request, env } = context;

  // Read credentials exclusively from Cloudflare environment bindings
  const keyId = env?.RAZORPAY_KEY_ID;
  const keySecret = env?.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return json(
      {
        success: false,
        error: 'Payment gateway configuration is missing. Configure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in Cloudflare Pages dashboard.',
      },
      500
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const rawCourseId = String(body.courseId || 'data_analyst');
    const canonicalCourse = normalizeCourseKey(rawCourseId) || 'data_analyst';
    const cleanUserId = normalizeUserId(body.userId || body.email || body.phone || '');

    // Server enforces canonical price so malicious clients cannot underpay
    const canonicalPrice = CANONICAL_COURSE_PRICES_INR[canonicalCourse] || 987;
    const clientAmount = Number(body.amount);
    const amountRupees = Number.isFinite(clientAmount) && clientAmount === canonicalPrice
      ? clientAmount
      : canonicalPrice;

    const receipt = `FII_${Date.now().toString(36).toUpperCase()}`.slice(0, 40);

    const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(`${keyId}:${keySecret}`),
      },
      body: JSON.stringify({
        amount: Math.round(amountRupees * 100), // paise
        currency: 'INR',
        receipt,
        notes: {
          userId: cleanUserId.slice(0, 200),
          courseId: canonicalCourse,
          courseTitle: String(body.courseTitle || canonicalCourse).slice(0, 200),
          email: String(body.email || cleanUserId || '').slice(0, 200),
          refCode: String(body.refCode || '').slice(0, 50),
          affiliateEpoch: 'v5_clean',
        },
      }),
    });

    const data = await rzpRes.json();

    if (!rzpRes.ok || !data.id) {
      return json(
        { success: false, error: data?.error?.description || 'Failed to create payment order' },
        rzpRes.status || 400
      );
    }

    return json({
      success: true,
      keyId, // public identifier required by Razorpay Checkout modal
      orderId: data.id,
      amount: data.amount,
      currency: data.currency,
      courseId: canonicalCourse,
      userId: cleanUserId || undefined,
    });
  } catch (err) {
    return json({ success: false, error: 'Internal gateway error' }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
