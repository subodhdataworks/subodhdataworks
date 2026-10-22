/**
 * Cloudflare Pages Function — /api/razorpay-verify
 * Verifies Razorpay payment signature:
 *   HMAC_SHA256(order_id + "|" + payment_id, key_secret) === razorpay_signature
 */

const TEST_KEY_SECRET = 'YZUJYrib6ndFXQXq38zoZsDC';

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

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const keySecret = env.RAZORPAY_KEY_SECRET || TEST_KEY_SECRET;

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return json({ success: false, error: 'Missing payment fields' }, 400);
    }

    const expected = await hmacSha256Hex(keySecret, `${razorpay_order_id}|${razorpay_payment_id}`);
    const verified = safeEqual(expected, String(razorpay_signature));

    return json(
      verified
        ? { success: true, orderId: razorpay_order_id, paymentId: razorpay_payment_id }
        : { success: false, error: 'Signature verification failed' },
      verified ? 200 : 400
    );
  } catch (err) {
    return json({ success: false, error: 'Server error', message: String(err) }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
