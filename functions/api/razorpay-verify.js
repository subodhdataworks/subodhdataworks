/**
 * Cloudflare Pages Function — /api/razorpay-verify
 * Verifies Razorpay payment signature server-side.
 * Secret key is read exclusively from Cloudflare environment variables.
 */

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
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = body;

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

    // Generate server-signed entitlement proof token
    const verifiedTimestamp = Date.now();
    const entitlementProof = await hmacSha256Hex(
      keySecret,
      `VERIFIED_ENTITLEMENT:${razorpay_payment_id}:${razorpay_order_id}:${courseId || 'data_analyst'}:${verifiedTimestamp}`
    );

    return json({
      success: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      courseId: courseId || 'data_analyst',
      verifiedAt: verifiedTimestamp,
      entitlementProof,
    });
  } catch (err) {
    return json({ success: false, error: 'Internal verification error' }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
