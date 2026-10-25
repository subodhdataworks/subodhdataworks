/**
 * Cloudflare Pages Function — /api/entitlements
 *
 * Server-Side Course Entitlement Verification API:
 * 1. Verifies server-signed cryptographic payment entitlement proof tokens.
 * 2. Prevents the browser or malicious clients from arbitrarily unlocking paid courses.
 * 3. Enforces constant-time HMAC-SHA256 signature checks.
 *
 * Environment variables:
 *   RAZORPAY_KEY_SECRET  (Used to verify cryptographic entitlement signatures)
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
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
        error: 'Entitlement verification service unavailable: missing server key configuration.',
      },
      500
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: 'Invalid JSON request.' }, 400);
  }

  const { paymentId, orderId, courseId, verifiedAt, entitlementProof } = body;

  if (!paymentId || !orderId || !courseId || !verifiedAt || !entitlementProof) {
    return json(
      {
        success: false,
        error: 'Missing required entitlement parameters (paymentId, orderId, courseId, verifiedAt, entitlementProof).',
      },
      400
    );
  }

  // Validate that verification timestamp is within plausible bounds (not in future, not older than 1 year)
  const now = Date.now();
  const vTime = Number(verifiedAt);
  if (Number.isNaN(vTime) || vTime > now + 60000 || vTime < now - 365 * 24 * 3600 * 1000) {
    return json({ success: false, entitled: false, error: 'Entitlement token timestamp is invalid or expired.' }, 403);
  }

  // Cryptographically recompute expected entitlement HMAC-SHA256
  const expectedProof = await hmacSha256Hex(
    keySecret,
    `VERIFIED_ENTITLEMENT:${paymentId}:${orderId}:${courseId}:${vTime}`
  );

  const isValid = safeEqual(expectedProof, String(entitlementProof));

  if (!isValid) {
    return json(
      {
        success: false,
        entitled: false,
        error: 'Cryptographic proof verification failed. Course entitlement cannot be granted.',
      },
      403
    );
  }

  return json({
    success: true,
    entitled: true,
    courseId,
    paymentId,
    orderId,
    verifiedAt: vTime,
    status: 'verified_active',
  });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
