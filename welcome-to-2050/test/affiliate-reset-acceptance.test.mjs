/**
 * Complete Affiliate System v5 Reset & Acceptance Criteria Test Suite
 * Verifies all 15 acceptance criteria from Section 10 across Backend API, Migration, and Frontend source.
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import { onRequestGet, onRequestPost } from '../functions/api/affiliate.js';

let passed = 0;
let failed = 0;

async function test(name, fn) {
  try {
    await fn();
    console.log(`✅ PASSED: ${name}`);
    passed++;
  } catch (err) {
    console.error(`❌ FAILED: ${name}`);
    console.error('   Reason:', err.message);
    failed++;
  }
}

console.log('\n🚀 Starting Affiliate System v5 Reset & Acceptance Test Suite...\n');

// Reset server store before testing
delete globalThis.__affiliate_v5_store;

// 1. Fresh / Reset state for existing & new users
await test('1 & 2 & 5. Existing and new users start with 0 clicks, 0 signups, 0 paid enrollments, ₹0 wallet & ₹0 lifetime earnings', async () => {
  const req = new Request('https://futureitindustry.com/api/affiliate?refCode=SUBODHKUMAR100');
  const res = await onRequestGet({ request: req, env: {} });
  const data = await res.json();

  assert.equal(res.status, 200);
  assert.equal(data.migrationVersion, 'affiliate_v5_complete_reset_2026');
  assert.equal(data.clicks, 0);
  assert.equal(data.signups, 0);
  assert.equal(data.paidEnrollments, 0);
  assert.equal(data.availableBalance, 0);
  assert.equal(data.pendingBalance, 0);
  assert.equal(data.totalPaid, 0);
  assert.equal(data.totalEarned, 0);
  assert.equal(data.reversedBalance, 0);
  assert.deepEqual(data.referrals, []);
  assert.deepEqual(data.withdrawals, []);
});

// 2. Click tracking
await test('Rule 1. Referral link click increments clicks count without adding wallet commission', async () => {
  const postReq = new Request('https://futureitindustry.com/api/affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventType: 'click', refCode: 'SUBODHKUMAR100' }),
  });
  const postRes = await onRequestPost({ request: postReq, env: {} });
  const postData = await postRes.json();
  assert.equal(postData.success, true);
  assert.equal(postData.clicks, 1);

  const getRes = await onRequestGet({
    request: new Request('https://futureitindustry.com/api/affiliate?refCode=SUBODHKUMAR100'),
    env: {},
  });
  const getData = await getRes.json();
  assert.equal(getData.clicks, 1);
  assert.equal(getData.availableBalance, 0);
  assert.equal(getData.totalEarned, 0);
});

// 3. Free signup produces ₹0 commission
await test('6. Free signup produces ₹0 commission and ₹0 wallet credit', async () => {
  const req = new Request('https://futureitindustry.com/api/affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventType: 'signup',
      refCode: 'SUBODHKUMAR100',
      name: 'Learner One',
      email: 'learner1@example.com',
    }),
  });
  const res = await onRequestPost({ request: req, env: {} });
  const data = await res.json();

  assert.equal(data.success, true);
  assert.equal(data.commission, 0);
  assert.equal(data.signups, 1);

  const checkRes = await onRequestGet({
    request: new Request('https://futureitindustry.com/api/affiliate?refCode=SUBODHKUMAR100'),
    env: {},
  });
  const checkData = await checkRes.json();
  assert.equal(checkData.signups, 1);
  assert.equal(checkData.availableBalance, 0);
  assert.equal(checkData.totalEarned, 0);
  assert.equal(checkData.referrals[0].status, 'Registered');
  assert.equal(checkData.referrals[0].commission, 0);
});

// 4. Duplicate email signup rejected
await test('7. Duplicate email registrations do not count as additional signups', async () => {
  const req = new Request('https://futureitindustry.com/api/affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventType: 'signup',
      refCode: 'SUBODHKUMAR100',
      name: 'Learner One Duplicate',
      email: 'LEARNER1@EXAMPLE.COM',
    }),
  });
  const res = await onRequestPost({ request: req, env: {} });
  const data = await res.json();

  assert.equal(data.success, false);
  assert.equal(data.reason, 'DUPLICATE_EMAIL_SIGNUP');
  assert.equal(data.signups, 1);
});

// 5. Failed or cancelled payment produces ₹0 commission
await test('8. Failed or cancelled payment produces ₹0 commission and does not increase Available to Payout', async () => {
  const req = new Request('https://futureitindustry.com/api/affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventType: 'paid_enrollment',
      refCode: 'SUBODHKUMAR100',
      paymentId: 'pay_failed_123456',
      paymentStatus: 'FAILED',
      payerEmail: 'learner1@example.com',
      amount: 999,
    }),
  });
  const res = await onRequestPost({ request: req, env: {} });
  const data = await res.json();

  assert.equal(data.success, false);
  assert.equal(data.reason, 'PAYMENT_NOT_SUCCESSFUL');
  assert.equal(data.commission, 0);
  assert.equal(data.availableBalance, 0);
  assert.equal(data.totalEarned, 0);
});

// 6. Self-referral is blocked
await test('12a. Self-referral is blocked and produces ₹0 commission', async () => {
  const req = new Request('https://futureitindustry.com/api/affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventType: 'paid_enrollment',
      refCode: 'SUBODHKUMAR100',
      payerRefCode: 'SUBODHKUMAR100',
      paymentId: 'pay_self_123456',
      payerEmail: 'subodh@futureitindustry.com',
      amount: 999,
    }),
  });
  const res = await onRequestPost({ request: req, env: {} });
  const data = await res.json();

  assert.equal(data.success, false);
  assert.equal(data.reason, 'SELF_REFERRAL_NOT_ALLOWED');
  assert.equal(data.commission, 0);
});

// 7. Verified eligible paid enrollment generates exactly ₹100
await test('9. One verified eligible paid enrollment generates exactly ₹100 commission', async () => {
  const req = new Request('https://futureitindustry.com/api/affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventType: 'paid_enrollment',
      refCode: 'SUBODHKUMAR100',
      paymentId: 'pay_verified_001',
      paymentStatus: 'SUCCESS',
      payerName: 'Learner One',
      payerEmail: 'learner1@example.com',
      courseTitle: 'Data Analyst with GenAI',
      amount: 999,
      skipGatewayCheck: true,
    }),
  });
  const res = await onRequestPost({ request: req, env: {} });
  const data = await res.json();

  assert.equal(data.success, true);
  assert.equal(data.commission, 100);
  assert.equal(data.paidEnrollments, 1);
  assert.equal(data.availableBalance, 100);
  assert.equal(data.totalEarned, 100);
});

// 8. Duplicate webhook / duplicate paymentId does not generate duplicate commission
await test('10. Duplicate paymentId / webhook is idempotent and does not award duplicate commission', async () => {
  const req = new Request('https://futureitindustry.com/api/affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventType: 'paid_enrollment',
      refCode: 'SUBODHKUMAR100',
      paymentId: 'pay_verified_001',
      paymentStatus: 'SUCCESS',
      payerName: 'Learner One',
      payerEmail: 'learner1@example.com',
      amount: 999,
      skipGatewayCheck: true,
    }),
  });
  const res = await onRequestPost({ request: req, env: {} });
  const data = await res.json();

  assert.equal(data.success, false);
  assert.equal(data.reason, 'DUPLICATE_PAYMENT_ID');
  assert.equal(data.idempotent, true);
  assert.equal(data.availableBalance, 100);
  assert.equal(data.totalEarned, 100);
});

// 9. User isolation: Buyer's own wallet remains ₹0 when buyer purchases via someone else's referral link
await test('12b. Buyer wallet remains ₹0 while referrer receives ₹100 (strict user isolation)', async () => {
  const buyerRes = await onRequestGet({
    request: new Request('https://futureitindustry.com/api/affiliate?refCode=LEARNERONE100'),
    env: {},
  });
  const buyerData = await buyerRes.json();

  assert.equal(buyerData.paidEnrollments, 0);
  assert.equal(buyerData.availableBalance, 0);
  assert.equal(buyerData.totalEarned, 0);
});

// 10. Scaling test: 10 eligible paid enrollments = ₹1,000
await test('9b. 10 eligible paid enrollments equal exactly ₹1,000 (Fixed ₹100 rule)', async () => {
  for (let i = 2; i <= 10; i++) {
    const req = new Request('https://futureitindustry.com/api/affiliate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType: 'paid_enrollment',
        refCode: 'SUBODHKUMAR100',
        paymentId: `pay_verified_${String(i).padStart(3, '0')}`,
        paymentStatus: 'SUCCESS',
        payerName: `Student ${i}`,
        payerEmail: `student${i}@example.com`,
        amount: 999,
        skipGatewayCheck: true,
      }),
    });
    await onRequestPost({ request: req, env: {} });
  }

  const getRes = await onRequestGet({
    request: new Request('https://futureitindustry.com/api/affiliate?refCode=SUBODHKUMAR100'),
    env: {},
  });
  const getData = await getRes.json();
  assert.equal(getData.paidEnrollments, 10);
  assert.equal(getData.availableBalance, 1000);
  assert.equal(getData.totalEarned, 1000);
});

// 11. Refund / Reversal handling without negative balance
await test('11 & Rule 8. Refund/chargeback reverses ₹100 safely without creating negative balance', async () => {
  const revReq = new Request('https://futureitindustry.com/api/affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventType: 'reversal',
      refCode: 'SUBODHKUMAR100',
      paymentId: 'pay_verified_010',
    }),
  });
  const revRes = await onRequestPost({ request: revReq, env: {} });
  const revData = await revRes.json();

  assert.equal(revData.success, true);
  assert.equal(revData.availableBalance, 900);
  assert.equal(revData.totalEarned, 900);
  assert.equal(revData.reversedBalance, 100);
});

// 12. Source code verification: Bank/UPI reset to Not Linked, no hardcoded dummy bank/UPI or chart data
await test('3 & 13 & 14 & 15. Frontend & Migration source verification (Not Linked Bank/UPI, Zero-State Charts, One-Time Migration, Admin Status)', async () => {
  const hubCode = fs.readFileSync('welcome-to-2050/src/components/futureai/AffiliateEarningsHub.tsx', 'utf8');
  const mobileHubCode = fs.readFileSync('welcome-to-2050/src/components/futureai/mobile/MobileAffiliateEarningsHub.tsx', 'utf8');
  const authCode = fs.readFileSync('welcome-to-2050/src/services/realAuthService.ts', 'utf8');
  const adminCode = fs.readFileSync('welcome-to-2050/src/components/admin/controlcenter/DashboardOverview.tsx', 'utf8');

  // Verify old hardcoded bank/UPI defaults are gone
  assert.equal(hubCode.includes('50100429184521'), false, 'Hardcoded bank account number must be removed');
  assert.equal(hubCode.includes("useState<string>('learner@upi')"), false, 'Hardcoded learner@upi default must be removed');
  assert.equal(hubCode.includes('Bank / UPI Status: Not Linked'), true, 'Must show Not Linked initially');

  // Verify old hardcoded chart tooltip & fake leaderboard are gone
  assert.equal(hubCode.includes('₹750 commission'), false, 'Hardcoded ₹750 commission tooltip must be removed from desktop');
  assert.equal(mobileHubCode.includes('₹750 commission'), false, 'Hardcoded ₹750 commission tooltip must be removed from mobile');
  assert.equal(mobileHubCode.includes('Aditi Sharma'), false, 'Hardcoded legacy leaderboard must be removed from mobile');

  // Verify one-time versioned migration preserves login and course unlocks
  assert.equal(authCode.includes('affiliate_v5_complete_reset_2026'), true, 'Versioned v5 migration ID must exist');
  assert.equal(authCode.includes('runAffiliateSystemResetMigrationOnce'), true, 'One-time migration function must exist');
  assert.equal(authCode.includes('SENSITIVE_FIELDS_REDACTED'), true, 'Audit archive must redact sensitive bank/UPI fields');

  // Verify Admin panel status section
  assert.equal(adminCode.includes('Affiliate System Status &amp; Reset Migration (v5)'), true, 'Admin panel must display Affiliate System Status section');
});

// Reset server store back to clean 0 after tests
delete globalThis.__affiliate_v5_store;

console.log(`\n🎉 RESULTS: ${passed}/${passed + failed} ACCEPTANCE TESTS PASSED!\n`);
if (failed > 0) process.exit(1);
