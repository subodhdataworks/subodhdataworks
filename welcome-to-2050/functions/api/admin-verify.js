import { INTENDED_OWNER_ADMIN_UID, inspectAndEnsureOwnerAdminClaim } from './_firestore-admin.js';

/**
 * Cloudflare Pages Function — /api/admin-verify
 * Cryptographically verifies Firebase ID Token and enforces trusted admin allowlist.
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  'Pragma': 'no-cache',
  'Expires': '0',
  'Vary': 'Authorization, Cookie, Accept-Encoding',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

const GOOGLE_JWKS_URL =
  'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';

let cachedJwks = null;
let jwksCacheTime = 0;

async function getGooglePublicJwks() {
  const now = Date.now();
  if (cachedJwks && now - jwksCacheTime < 3600000) {
    return cachedJwks;
  }
  try {
    const res = await fetch(GOOGLE_JWKS_URL);
    if (!res.ok) throw new Error('Failed to fetch Google JWKs');
    const data = await res.json();
    cachedJwks = data.keys || [];
    jwksCacheTime = now;
    return cachedJwks;
  } catch (err) {
    if (cachedJwks) return cachedJwks;
    throw err;
  }
}

function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4 !== 0) base64 += '=';
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function verifyFirebaseIdToken(token, expectedProjectId) {
  if (!token || typeof token !== 'string') {
    return { valid: false, error: 'Token is missing or not a string' };
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    return { valid: false, error: 'JWT must have 3 segments' };
  }

  let header, payload;
  try {
    header = JSON.parse(new TextDecoder().decode(base64UrlDecode(parts[0])));
    payload = JSON.parse(new TextDecoder().decode(base64UrlDecode(parts[1])));
  } catch {
    return { valid: false, error: 'Failed to decode JWT segments' };
  }

  if (header.alg !== 'RS256' || !header.kid) {
    return { valid: false, error: 'Invalid token header algorithm or missing kid' };
  }

  const now = Math.floor(Date.now() / 1000);
  if (!payload.exp || payload.exp < now) {
    return { valid: false, error: 'Token has expired' };
  }

  const projectId = expectedProjectId || 'future-it-industry-f97af';
  if (payload.aud !== projectId) {
    return { valid: false, error: 'Token audience does not match project ID' };
  }

  if (payload.iss !== `https://securetoken.google.com/${projectId}`) {
    return { valid: false, error: 'Token issuer is invalid' };
  }

  if (!payload.sub || typeof payload.sub !== 'string') {
    return { valid: false, error: 'Token subject is invalid' };
  }

  // Cryptographic Signature Check
  try {
    const keys = await getGooglePublicJwks();
    const matchedKey = keys.find((k) => k.kid === header.kid);
    if (!matchedKey) {
      return { valid: false, error: 'No matching Google public key found for kid' };
    }

    const cryptoKey = await crypto.subtle.importKey(
      'jwk',
      matchedKey,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const signedData = new TextEncoder().encode(`${parts[0]}.${parts[1]}`);
    const signature = base64UrlDecode(parts[2]);

    const isValid = await crypto.subtle.verify(
      'RSASSA-PKCS1-v1_5',
      cryptoKey,
      signature,
      signedData
    );

    if (!isValid) {
      return { valid: false, error: 'Cryptographic signature verification failed' };
    }

    return { valid: true, payload };
  } catch (cryptoErr) {
    return { valid: false, error: 'Crypto verification error: ' + String(cryptoErr.message || cryptoErr) };
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const authHeader = request.headers.get('Authorization') || '';
  if (!authHeader.startsWith('Bearer ')) {
    return json({ success: false, error: 'Unauthorized: Bearer token required in Authorization header' }, 401);
  }

  const token = authHeader.slice(7).trim();
  const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || 'future-it-industry-f97af';

  const verification = await verifyFirebaseIdToken(token, projectId);
  if (!verification.valid) {
    return json({ success: false, error: `Unauthorized: ${verification.error}` }, 401);
  }

  const payload = verification.payload;
  const userEmail = (payload.email || '').toLowerCase().trim();

  // Enforce explicit custom claims; email alone does not grant admin access (no email-only bypass)
  const hasAdminClaim = payload.admin === true || payload.role === 'admin';

  if (!hasAdminClaim) {
    if (payload.sub === INTENDED_OWNER_ADMIN_UID) {
      try {
        await inspectAndEnsureOwnerAdminClaim(env, INTENDED_OWNER_ADMIN_UID);
      } catch {}
      return json(
        {
          success: false,
          authorized: false,
          code: 'STALE_ADMIN_TOKEN_REFRESH_REQUIRED',
          requiresTokenRefresh: true,
          uid: payload.sub,
          error: 'Stale ID token detected for owner admin account. Please refresh token via getIdToken(true).',
        },
        403
      );
    }

    return json(
      {
        success: false,
        authorized: false,
        code: 'FORBIDDEN_NOT_ADMIN',
        uid: payload.sub,
        expectedOwnerUid: INTENDED_OWNER_ADMIN_UID,
        error: `Forbidden: Account (${userEmail || payload.sub}, UID: ${payload.sub}) does not have administrative privileges. Firebase Custom Claim { admin: true } required.`,
      },
      403
    );
  }

  return json({
    success: true,
    authorized: true,
    admin: {
      uid: payload.sub,
      email: userEmail,
      name: payload.name || userEmail.split('@')[0],
      role: 'super_admin',
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
