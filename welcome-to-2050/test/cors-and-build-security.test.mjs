import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  validateCorsOrigin,
  handleCorsPreflight,
  rejectUnauthorizedOrigin,
  buildCorsHeaders,
} from '../functions/api/_cors.js';
import * as razorpayOrder from '../functions/api/razorpay-order.js';
import * as razorpayVerify from '../functions/api/razorpay-verify.js';
import * as adminVerify from '../functions/api/admin-verify.js';

test('1. Production domain https://futureitindustry.com is allowed with exact origin (no wildcard)', () => {
  const req = new Request('https://futureitindustry.com/api/razorpay-order', {
    method: 'POST',
    headers: { Origin: 'https://futureitindustry.com' },
  });
  const check = validateCorsOrigin(req, {});
  assert.equal(check.allowed, true);
  assert.equal(check.origin, 'https://futureitindustry.com');

  const hdrs = buildCorsHeaders(req, {}, { methods: 'POST, OPTIONS' });
  assert.equal(hdrs['Access-Control-Allow-Origin'], 'https://futureitindustry.com');
  assert.notEqual(hdrs['Access-Control-Allow-Origin'], '*');
  assert.match(hdrs.Vary, /Origin/i);
});

test('2. Official www subdomain https://www.futureitindustry.com is allowed', () => {
  const req = new Request('https://futureitindustry.com/api/admin-verify', {
    method: 'OPTIONS',
    headers: { Origin: 'https://www.futureitindustry.com' },
  });
  const res = handleCorsPreflight({ request: req, env: {} }, { methods: 'POST, OPTIONS' });
  assert.equal(res.status, 204);
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), 'https://www.futureitindustry.com');
});

test('3. Unauthorized cross-origin preflight and POST are rejected with 403 and no ACAO header', async () => {
  const preflightReq = new Request('https://futureitindustry.com/api/admin-verify', {
    method: 'OPTIONS',
    headers: { Origin: 'https://evil-site.example' },
  });
  const preRes = await adminVerify.onRequestOptions({ request: preflightReq, env: {} });
  assert.equal(preRes.status, 403);
  assert.equal(preRes.headers.get('Access-Control-Allow-Origin'), null);

  const postReq = new Request('https://futureitindustry.com/api/razorpay-verify', {
    method: 'POST',
    headers: { Origin: 'https://evil-site.example', 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  const postRes = await razorpayVerify.onRequestPost({ request: postReq, env: {} });
  assert.equal(postRes.status, 403);
  assert.equal(postRes.headers.get('Access-Control-Allow-Origin'), null);
});

test('4. Localhost origin is REJECTED on production URL, ALLOWED only in local dev', () => {
  const prodReq = new Request('https://futureitindustry.com/api/razorpay-order', {
    method: 'POST',
    headers: { Origin: 'http://localhost:5173' },
  });
  const prodBlocked = rejectUnauthorizedOrigin(prodReq, {});
  assert.ok(prodBlocked);
  assert.equal(prodBlocked.status, 403);

  const devReq = new Request('http://localhost:8788/api/razorpay-order', {
    method: 'POST',
    headers: { Origin: 'http://localhost:5173' },
  });
  const devBlocked = rejectUnauthorizedOrigin(devReq, {});
  assert.equal(devBlocked, null);
});

test('5. Server-to-server requests without Origin header pass CORS (auth/HMAC still enforced)', async () => {
  const req = new Request('https://futureitindustry.com/api/razorpay-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ courseId: 'data_analyst' }),
  });
  const res = await razorpayOrder.onRequestPost({ request: req, env: {} });
  // Without Razorpay env credentials, reaches gateway check (500), NOT 403 CORS block
  assert.equal(res.status, 500);
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), null);
});

test('6. Zero wildcard Access-Control-Allow-Origin headers remain in functions/api/*.js', () => {
  const apiDir = path.resolve(process.cwd(), 'functions/api');
  for (const f of fs.readdirSync(apiDir)) {
    if (!f.endsWith('.js')) continue;
    const txt = fs.readFileSync(path.join(apiDir, f), 'utf8');
    assert.equal(
      /['"]Access-Control-Allow-Origin['"]\s*:\s*['"]\*['"]/.test(txt),
      false,
      `Wildcard CORS found in functions/api/${f}`
    );
  }
});
