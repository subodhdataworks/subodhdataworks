/**
 * Shared Strict CORS Utility for Future IT Industry Cloudflare Pages Functions.
 * Note: Leading underscore keeps this file private (not exposed as an HTTP route).
 *
 * Security Policy:
 * - Never emits wildcard Access-Control-Allow-Origin: * on sensitive APIs.
 * - Allows only official Future IT Industry production origins by default.
 * - Allows localhost / 127.0.0.1 origins ONLY during local development.
 * - Rejects unauthorized cross-origin browser requests with 403 Forbidden.
 * - Allows requests without an Origin header (same-origin / server-to-server webhooks);
 *   authentication, authorization, and HMAC signature checks remain mandatory.
 */

const PRODUCTION_ALLOWED_ORIGINS = [
  'https://futureitindustry.com',
  'https://www.futureitindustry.com',
];

const LOCALHOST_ORIGIN_REGEX = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d{1,5})?$/i;

function isLocalDevRequest(request, env) {
  if (env?.ENVIRONMENT === 'development' || env?.ALLOW_LOCALHOST_CORS === 'true') {
    return true;
  }
  try {
    const reqHost = new URL(request.url).hostname.toLowerCase();
    return reqHost === 'localhost' || reqHost === '127.0.0.1';
  } catch {
    return false;
  }
}

export function getAllowedOrigins(env) {
  const allowed = new Set(PRODUCTION_ALLOWED_ORIGINS);
  const extra = typeof env?.ALLOWED_ORIGINS === 'string' ? env.ALLOWED_ORIGINS : '';
  for (const raw of extra.split(',')) {
    const trimmed = raw.trim().replace(/\/+$/, '');
    if (trimmed && /^https?:\/\//i.test(trimmed)) {
      allowed.add(trimmed);
    }
  }
  return allowed;
}

export function validateCorsOrigin(request, env) {
  const originHeader = request?.headers?.get?.('Origin') || request?.headers?.get?.('origin') || '';
  const origin = originHeader.trim().replace(/\/+$/, '');

  // No Origin header => same-origin navigation or server-to-server call (e.g. Razorpay webhook)
  if (!origin) {
    return { allowed: true, origin: null, isCrossOrigin: false };
  }

  const allowedOrigins = getAllowedOrigins(env);
  if (allowedOrigins.has(origin)) {
    return { allowed: true, origin, isCrossOrigin: true };
  }

  // Allow localhost origins strictly in local development environments
  if (isLocalDevRequest(request, env) && LOCALHOST_ORIGIN_REGEX.test(origin)) {
    return { allowed: true, origin, isCrossOrigin: true };
  }

  return { allowed: false, origin, isCrossOrigin: true };
}

export function buildCorsHeaders(
  request,
  env,
  {
    methods = 'GET, POST, OPTIONS',
    headers = 'Content-Type, Authorization',
    noStore = true,
  } = {}
) {
  const check = validateCorsOrigin(request, env);
  const out = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': methods,
    'Access-Control-Allow-Headers': headers,
    Vary: 'Origin, Authorization, Cookie, Accept-Encoding',
  };

  if (check.allowed && check.origin) {
    out['Access-Control-Allow-Origin'] = check.origin;
  }

  if (noStore) {
    out['Cache-Control'] = 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
    out.Pragma = 'no-cache';
    out.Expires = '0';
  }

  return out;
}

export function rejectUnauthorizedOrigin(request, env, options = {}) {
  const check = validateCorsOrigin(request, env);
  if (!check.allowed) {
    const headers = {
      'Content-Type': 'application/json',
      Vary: 'Origin',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    };
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Cross-origin request blocked by CORS policy.',
      }),
      { status: 403, headers }
    );
  }
  return null;
}

export function createJsonResponder(request, env, options = {}) {
  const corsHeaders = buildCorsHeaders(request, env, options);
  return (data, status = 200) =>
    new Response(JSON.stringify(data), { status, headers: corsHeaders });
}

export function handleCorsPreflight(context, options = {}) {
  const { request, env } = context || {};
  const blocked = rejectUnauthorizedOrigin(request, env, options);
  if (blocked) return blocked;

  const headers = buildCorsHeaders(request, env, options);
  headers['Access-Control-Max-Age'] = '86400';
  delete headers['Content-Type'];
  return new Response(null, { status: 204, headers });
}
