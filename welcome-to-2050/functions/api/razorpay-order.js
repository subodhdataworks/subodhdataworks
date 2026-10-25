/**
 * Cloudflare Pages Function — /api/razorpay-order
 * Creates a Razorpay Order server-side (credentials read exclusively from Cloudflare env).
 *
 * Environment variables required in Cloudflare Pages dashboard:
 *   RAZORPAY_KEY_ID
 *   RAZORPAY_KEY_SECRET
 */

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

function normalizeCourseKey(rawId = '') {
  const s = String(rawId).toLowerCase().trim();
  if (s.includes('analyst') || s.includes('analytics') || s.includes('tab-1')) return 'data_analyst';
  if (s.includes('data_science') || s.includes('data-science') || s.includes('tab-2')) return 'data_science';
  if (s.includes('ml_engineering') || s.includes('ml-eng') || s.includes('tab-3')) return 'ml_engineering';
  if (s.includes('deep_learning') || s.includes('deep-learning')) return 'deep_learning';
  if (s.includes('ai_engineering') || s.includes('ai-eng') || s.includes('tab-4')) return 'ai_engineering';
  if (s.includes('prompt') || s.includes('ai_tools') || s.includes('tab-5')) return 'ai_tools_prompt';
  if (s.includes('office') || s.includes('copilot') || s.includes('tab-6')) return 'ms_office_copilot';
  if (s.includes('mern') || s.includes('full_stack') || s.includes('tab-7')) return 'full_stack_mern';
  return 'data_analyst';
}

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
    const canonicalCourse = normalizeCourseKey(rawCourseId);

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
          courseId: canonicalCourse,
          courseTitle: String(body.courseTitle || canonicalCourse).slice(0, 200),
          email: String(body.email || '').slice(0, 200),
          refCode: String(body.refCode || '').slice(0, 50),
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
    });
  } catch (err) {
    return json({ success: false, error: 'Internal gateway error' }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
