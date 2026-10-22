/**
 * Cloudflare Pages Function — /api/razorpay-order
 * Creates a Razorpay Order server-side (key_secret never leaves the server).
 *
 * Configure in Cloudflare Pages → Settings → Environment variables:
 *   RAZORPAY_KEY_ID      (e.g. rzp_test_xxx / rzp_live_xxx)
 *   RAZORPAY_KEY_SECRET
 * Test-mode fallbacks below are used only when env vars are missing.
 * ⚠️ Remove the fallbacks before switching to LIVE keys.
 */

const TEST_KEY_ID = 'rzp_test_TqpUS98jsKRR3R';
const TEST_KEY_SECRET = 'YZUJYrib6ndFXQXq38zoZsDC';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

export async function onRequestPost(context) {
  const { request, env } = context;
  const keyId = env.RAZORPAY_KEY_ID || TEST_KEY_ID;
  const keySecret = env.RAZORPAY_KEY_SECRET || TEST_KEY_SECRET;

  try {
    const body = await request.json().catch(() => ({}));
    const amountRupees = Number(body.amount);

    if (!Number.isFinite(amountRupees) || amountRupees < 1 || amountRupees > 500000) {
      return json({ success: false, error: 'Invalid amount' }, 400);
    }

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
          courseId: String(body.courseId || '').slice(0, 200),
          courseTitle: String(body.courseTitle || '').slice(0, 200),
          email: String(body.email || '').slice(0, 200),
        },
      }),
    });

    const data = await rzpRes.json();

    if (!rzpRes.ok || !data.id) {
      return json(
        { success: false, error: data?.error?.description || 'Failed to create Razorpay order' },
        rzpRes.status || 400
      );
    }

    return json({
      success: true,
      keyId, // public key — safe to expose
      orderId: data.id,
      amount: data.amount,
      currency: data.currency,
    });
  } catch (err) {
    return json({ success: false, error: 'Server error', message: String(err) }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
