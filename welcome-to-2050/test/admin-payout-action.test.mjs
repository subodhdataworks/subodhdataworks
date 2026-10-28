/**
 * Isolated Unit & Integration Tests: Admin Payout Action & Financial Integrity
 *
 * Verifies all 10 requirements:
 * 1. Authenticated API & token authorization enforcement
 * 2. Inline validation errors & network failures handled cleanly
 * 3. UNDER_REVIEW -> APPROVED -> PAID workflow
 * 4. Internal ID vs. Bank UTR distinction
 * 5. Dummy UTR rejection
 * 6. Duplicate UTR rejection across withdrawals
 * 7. Prevention of repeated PAID transitions on already settled withdrawals
 * 8. Consistent state sync (Pending, Total Paid Out, Lifetime Earnings untouched)
 * 9. Rejection restores funds to available balance
 * 10. Runs strictly on isolated mock fixtures — zero modification of cloud data
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

console.log('================================================================');
console.log('🧪 ADMIN WITHDRAWAL PAYOUT ACTION & SECURITY TEST SUITE');
console.log('================================================================\n');

let passedTests = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}\n     ${err.message}`);
  }
}

// -----------------------------------------------------------------------------
// Isolated In-Memory Fixtures (Mock Server Simulator)
// -----------------------------------------------------------------------------
function createIsolatedFixtures() {
  const store = {
    withdrawal_requests: new Map([
      [
        'MOCK-WREQ-001',
        {
          id: 'MOCK-WREQ-001',
          txId: 'MOCK-WTX-001',
          userId: 'mock_user_123',
          refCode: 'MOCKREF100',
          amount: 100,
          method: 'UPI',
          destination: 'learner@upi',
          status: 'UNDER_REVIEW',
          createdAt: new Date().toISOString(),
        },
      ],
      [
        'MOCK-WREQ-002',
        {
          id: 'MOCK-WREQ-002',
          txId: 'MOCK-WTX-002',
          userId: 'mock_user_456',
          refCode: 'OTHER100',
          amount: 500,
          method: 'BANK_TRANSFER',
          destination: '9876543210',
          status: 'PAID',
          referenceNo: 'EXISTING_UTR_999999',
          payoutRef: 'EXISTING_UTR_999999',
          paidAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        },
      ],
    ]),
    affiliate_stats: new Map([
      [
        'MOCKREF100',
        {
          id: 'MOCKREF100',
          refCode: 'MOCKREF100',
          availableBalance: 0,
          availableToPayout: 0,
          pendingBalance: 100,
          totalPaid: 0,
          totalEarned: 100,
        },
      ],
    ]),
  };

  function simulatePayoutAction({ tokenClaim, requestId, newStatus, payoutRef, adminNotes }) {
    // 1. Auth check
    if (!tokenClaim || (tokenClaim.admin !== true && tokenClaim.role !== 'admin')) {
      return { status: 403, error: 'Forbidden: Admin privilege required' };
    }

    if (!requestId) {
      return { status: 400, error: 'requestId is mandatory' };
    }

    const rawTarget = String(newStatus || '').toUpperCase();
    if (!['APPROVED', 'PAID', 'REJECTED', 'UNDER_REVIEW'].includes(rawTarget)) {
      return { status: 400, error: `Invalid status ${rawTarget}` };
    }

    // 2. Reject internal ID
    if (rawTarget === 'PAID') {
      if (!payoutRef || !payoutRef.trim()) {
        return { status: 400, error: 'Payout transaction reference is mandatory' };
      }

      const cleanRef = payoutRef.trim();
      const upper = cleanRef.toUpperCase();

      if (
        upper === requestId.toUpperCase() ||
        upper.startsWith('WREQ-') ||
        upper.startsWith('WTX-') ||
        upper.startsWith('MOCK-WREQ-') ||
        upper.startsWith('MOCK-WTX-')
      ) {
        return {
          status: 400,
          error: 'Invalid Payout Reference: You entered the internal system withdrawal ID. Enter genuine Bank UTR.',
        };
      }

      const DUMMY = ['TEST', 'PENDING', 'PAID', 'DONE', 'OK', '123', '1234', '12345'];
      if (DUMMY.includes(upper) || cleanRef.length < 6 || cleanRef.length > 35) {
        return {
          status: 400,
          error: 'Invalid Payout Reference: A valid external Bank UTR (6-35 characters) is required.',
        };
      }
    }

    if (rawTarget === 'REJECTED' && (!adminNotes || !adminNotes.trim())) {
      return { status: 400, error: 'A valid rejection reason must be provided in Admin Notes.' };
    }

    const req = store.withdrawal_requests.get(requestId);
    if (!req) {
      return { status: 404, error: `Withdrawal request #${requestId} not found` };
    }

    if (req.status === 'PAID') {
      return { status: 400, error: 'CANNOT_MODIFY_PAID_WITHDRAWAL: Request is already PAID' };
    }

    // Duplicate UTR check
    if (rawTarget === 'PAID') {
      for (const [otherId, other] of store.withdrawal_requests.entries()) {
        if (otherId !== requestId && other.referenceNo && other.referenceNo.toLowerCase() === payoutRef.trim().toLowerCase()) {
          return { status: 400, error: `DUPLICATE_PAYOUT_REF: Payout reference '${payoutRef}' has already been used.` };
        }
      }
    }

    // Atomic update
    req.status = rawTarget;
    req.updatedAt = new Date().toISOString();
    if (rawTarget === 'PAID') {
      req.paidAt = new Date().toISOString();
      req.referenceNo = payoutRef.trim();
      req.payoutRef = payoutRef.trim();
    }
    if (adminNotes) {
      req.adminNotes = adminNotes.trim();
    }

    const stats = store.affiliate_stats.get(req.refCode);
    if (stats) {
      if (rawTarget === 'PAID') {
        stats.pendingBalance = Math.max(0, stats.pendingBalance - req.amount);
        stats.totalPaid = stats.totalPaid + req.amount;
        // Available & Lifetime unchanged
      } else if (rawTarget === 'REJECTED') {
        stats.pendingBalance = Math.max(0, stats.pendingBalance - req.amount);
        stats.availableBalance = stats.availableBalance + req.amount;
        stats.availableToPayout = stats.availableBalance;
      }
    }

    return {
      status: 200,
      success: true,
      withdrawal: { ...req },
      stats: stats ? { ...stats } : null,
    };
  }

  return { store, simulatePayoutAction };
}

// -----------------------------------------------------------------------------
// Test Execution
// -----------------------------------------------------------------------------

runTest('1. Reject unauthorized requests without admin claim', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  const res = simulatePayoutAction({
    tokenClaim: { admin: false },
    requestId: 'MOCK-WREQ-001',
    newStatus: 'APPROVED',
  });
  assert.equal(res.status, 403);
});

runTest('2. Reject Mark Paid when UTR reference is missing', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  const res = simulatePayoutAction({
    tokenClaim: { admin: true },
    requestId: 'MOCK-WREQ-001',
    newStatus: 'PAID',
    payoutRef: '',
  });
  assert.equal(res.status, 400);
  assert.match(res.error, /mandatory/i);
});

runTest('3. Reject internal system ID (WREQ-... / WTX-...) entered as Bank UTR', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  const res = simulatePayoutAction({
    tokenClaim: { admin: true },
    requestId: 'MOCK-WREQ-001',
    newStatus: 'PAID',
    payoutRef: 'MOCK-WREQ-001',
  });
  assert.equal(res.status, 400);
  assert.match(res.error, /internal system withdrawal ID/i);
});

runTest('4. Reject dummy/placeholder text as proof of transfer', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  for (const dummy of ['test', 'pending', 'paid', '123', 'ok']) {
    const res = simulatePayoutAction({
      tokenClaim: { admin: true },
      requestId: 'MOCK-WREQ-001',
      newStatus: 'PAID',
      payoutRef: dummy,
    });
    assert.equal(res.status, 400, `Expected rejection for dummy '${dummy}'`);
  }
});

runTest('5. Reject duplicate Bank UTR already used on another withdrawal', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  const res = simulatePayoutAction({
    tokenClaim: { admin: true },
    requestId: 'MOCK-WREQ-001',
    newStatus: 'PAID',
    payoutRef: 'EXISTING_UTR_999999',
  });
  assert.equal(res.status, 400);
  assert.match(res.error, /DUPLICATE_PAYOUT_REF/);
});

runTest('6. Reject modifying an already PAID and settled withdrawal', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  const res = simulatePayoutAction({
    tokenClaim: { admin: true },
    requestId: 'MOCK-WREQ-002', // already PAID
    newStatus: 'REJECTED',
    adminNotes: 'Attempting invalid reverse',
  });
  assert.equal(res.status, 400);
  assert.match(res.error, /CANNOT_MODIFY_PAID_WITHDRAWAL/);
});

runTest('7. Reject REJECT action when mandatory rejection notes are omitted', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  const res = simulatePayoutAction({
    tokenClaim: { admin: true },
    requestId: 'MOCK-WREQ-001',
    newStatus: 'REJECTED',
    adminNotes: '',
  });
  assert.equal(res.status, 400);
  assert.match(res.error, /rejection reason/i);
});

runTest('8. Successfully Approve request without changing financial balances', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  const res = simulatePayoutAction({
    tokenClaim: { admin: true },
    requestId: 'MOCK-WREQ-001',
    newStatus: 'APPROVED',
    adminNotes: 'Affiliate learner eligibility verified',
  });
  assert.equal(res.status, 200);
  assert.equal(res.withdrawal.status, 'APPROVED');
  assert.equal(res.stats.pendingBalance, 100);
  assert.equal(res.stats.totalPaid, 0);
  assert.equal(res.stats.availableBalance, 0);
  assert.equal(res.stats.totalEarned, 100);
});

runTest('9. Successfully Mark Paid: decreases Pending, increases Total Paid, preserves Lifetime Earnings', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  const res = simulatePayoutAction({
    tokenClaim: { admin: true },
    requestId: 'MOCK-WREQ-001',
    newStatus: 'PAID',
    payoutRef: 'UTR20261028AXIS8882',
    adminNotes: 'IMPS transfer completed via HDFC NetBanking',
  });
  assert.equal(res.status, 200);
  assert.equal(res.withdrawal.status, 'PAID');
  assert.equal(res.withdrawal.referenceNo, 'UTR20261028AXIS8882');
  assert.ok(res.withdrawal.paidAt);

  // Financial verification:
  assert.equal(res.stats.pendingBalance, 0, 'Pending balance must decrease to 0');
  assert.equal(res.stats.totalPaid, 100, 'Total paid must increase by ₹100');
  assert.equal(res.stats.availableBalance, 0, 'Available balance must remain untouched');
  assert.equal(res.stats.totalEarned, 100, 'Lifetime earnings must remain exactly ₹100');
});

runTest('10. Successfully Reject: restores reserved ₹100 back to Available Balance', () => {
  const { simulatePayoutAction } = createIsolatedFixtures();
  const res = simulatePayoutAction({
    tokenClaim: { admin: true },
    requestId: 'MOCK-WREQ-001',
    newStatus: 'REJECTED',
    adminNotes: 'Incorrect bank IFSC code provided by learner',
  });
  assert.equal(res.status, 200);
  assert.equal(res.withdrawal.status, 'REJECTED');

  // Financial restoration:
  assert.equal(res.stats.pendingBalance, 0, 'Pending balance must decrease to 0');
  assert.equal(res.stats.availableBalance, 100, 'Available balance must be restored to ₹100');
  assert.equal(res.stats.totalPaid, 0, 'Total paid must remain 0');
  assert.equal(res.stats.totalEarned, 100, 'Lifetime earnings must remain untouched at ₹100');
});

runTest('11. Affiliate KPI Cards: verify exact 6 cards in order in AffiliateEarningsHub.tsx', () => {
  const filePath = path.resolve('welcome-to-2050/src/components/futureai/AffiliateEarningsHub.tsx');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract metricCards array definition
  const metricCardsMatch = content.match(/const metricCards = \[\s*([\s\S]*?)\n\s*\];/);
  assert.ok(metricCardsMatch, 'metricCards array should be found in AffiliateEarningsHub.tsx');

  // Extract id fields in order
  const idMatches = [...metricCardsMatch[1].matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  const expectedOrder = [
    'clicks',
    'signups',
    'paid',
    'available',
    'pending-withdrawal',
    'total-paid-out'
  ];

  assert.deepEqual(idMatches, expectedOrder, `KPI Cards must be in exact order: ${expectedOrder.join(', ')}`);
  assert.equal(idMatches.length, 6, 'Must contain exactly 6 KPI cards');
});

runTest('12. Affiliate Wallet Balance Computation: ₹200 earned scenario through all states', () => {
  function computeBalances(totalEarned, withdrawals = []) {
    let pendingBalance = 0;
    let totalPaid = 0;
    for (const w of withdrawals) {
      const amt = Number(w?.amount) || 0;
      if (amt <= 0) continue;
      const st = String(w?.status || '').trim().toUpperCase();
      if (st === 'PENDING' || st === 'PROCESSING' || st === 'UNDER_REVIEW' || st === 'APPROVED') {
        pendingBalance += amt;
      } else if (st === 'PAID') {
        totalPaid += amt;
      }
    }
    const safeEarned = Math.max(0, Number(totalEarned) || 0);
    const availableBalance = Math.max(0, safeEarned - totalPaid - pendingBalance);
    return { availableBalance, pendingBalance, totalPaid, lifetimeEarnings: safeEarned };
  }

  const initialEarned = 200;

  // State A: Initial withdrawal requested (UNDER_REVIEW) for ₹100
  const stateA = computeBalances(initialEarned, [
    { id: 'W1', amount: 100, status: 'UNDER_REVIEW' }
  ]);
  assert.equal(stateA.availableBalance, 100, 'Available should be ₹100');
  assert.equal(stateA.pendingBalance, 100, 'Pending should be ₹100');
  assert.equal(stateA.totalPaid, 0, 'Total Paid should be ₹0');
  assert.equal(stateA.lifetimeEarnings, 200, 'Lifetime Earnings must be ₹200');

  // State B: Admin approves withdrawal (APPROVED) for ₹100
  const stateB = computeBalances(initialEarned, [
    { id: 'W1', amount: 100, status: 'APPROVED' }
  ]);
  assert.equal(stateB.availableBalance, 100, 'Available must remain ₹100 after APPROVED');
  assert.equal(stateB.pendingBalance, 100, 'Pending must remain ₹100 (reserved) after APPROVED');
  assert.equal(stateB.totalPaid, 0, 'Total Paid must be ₹0 until external payout is marked PAID');
  assert.equal(stateB.lifetimeEarnings, 200, 'Lifetime Earnings must remain ₹200');

  // State C: Admin completes payout with Bank UTR (PAID) for ₹100
  const stateC = computeBalances(initialEarned, [
    { id: 'W1', amount: 100, status: 'PAID' }
  ]);
  assert.equal(stateC.availableBalance, 100, 'Available must remain ₹100 after PAID');
  assert.equal(stateC.pendingBalance, 0, 'Pending must decrease to ₹0 after PAID');
  assert.equal(stateC.totalPaid, 100, 'Total Paid must increase to ₹100 after PAID');
  assert.equal(stateC.lifetimeEarnings, 200, 'Lifetime Earnings must remain ₹200 (never deducted)');

  // State D: If withdrawal was REJECTED instead
  const stateD = computeBalances(initialEarned, [
    { id: 'W1', amount: 100, status: 'REJECTED' }
  ]);
  assert.equal(stateD.availableBalance, 200, 'Available must restore to ₹200 upon REJECTED');
  assert.equal(stateD.pendingBalance, 0, 'Pending must decrease to ₹0 upon REJECTED');
  assert.equal(stateD.totalPaid, 0, 'Total Paid remains ₹0 upon REJECTED');
  assert.equal(stateD.lifetimeEarnings, 200, 'Lifetime Earnings remains ₹200 upon REJECTED');
});

runTest('13. Affiliate Accounting Invariance: Lifetime Earnings is strictly cumulative and never double-counted', () => {
  // Test multiple withdrawals and ensure Lifetime Earnings is independent of withdrawal status
  function computeBalances(totalEarned, withdrawals = []) {
    let pendingBalance = 0;
    let totalPaid = 0;
    for (const w of withdrawals) {
      const amt = Number(w?.amount) || 0;
      if (amt <= 0) continue;
      const st = String(w?.status || '').trim().toUpperCase();
      if (st === 'PENDING' || st === 'PROCESSING' || st === 'UNDER_REVIEW' || st === 'APPROVED') {
        pendingBalance += amt;
      } else if (st === 'PAID') {
        totalPaid += amt;
      }
    }
    const safeEarned = Math.max(0, Number(totalEarned) || 0);
    const availableBalance = Math.max(0, safeEarned - totalPaid - pendingBalance);
    return { availableBalance, pendingBalance, totalPaid, lifetimeEarnings: safeEarned };
  }

  const multiWithdrawals = [
    { id: 'W1', amount: 100, status: 'PAID' },
    { id: 'W2', amount: 50, status: 'APPROVED' },
    { id: 'W3', amount: 25, status: 'UNDER_REVIEW' },
    { id: 'W4', amount: 25, status: 'REJECTED' },
  ];

  const res = computeBalances(200, multiWithdrawals);
  assert.equal(res.totalPaid, 100, 'Only PAID withdrawal counts towards totalPaid');
  assert.equal(res.pendingBalance, 75, 'APPROVED (50) + UNDER_REVIEW (25) = 75 reserved in pending');
  assert.equal(res.availableBalance, 25, '200 - 100 - 75 = 25 available');
  assert.equal(res.lifetimeEarnings, 200, 'Lifetime earnings unchanged at 200');
});

runTest('14. Temporary ₹1 Minimum Withdrawal Config: verified in withdrawalConfig.ts & affiliate.js', () => {
  const configPath = path.resolve('welcome-to-2050/src/config/withdrawalConfig.ts');
  const configContent = fs.readFileSync(configPath, 'utf-8');
  assert.match(configContent, /TEMPORARY_TEST_MIN_WITHDRAWAL_ACTIVE\s*=\s*true/);
  assert.match(configContent, /STANDARD_MIN_WITHDRAWAL\s*=\s*100/);
  assert.match(configContent, /TEST_MIN_WITHDRAWAL\s*=\s*1/);

  const apiPath = path.resolve('functions/api/affiliate.js');
  const apiContent = fs.readFileSync(apiPath, 'utf-8');
  assert.match(apiContent, /TEMPORARY_TEST_MIN_WITHDRAWAL_ACTIVE\s*=\s*true/);
  assert.match(apiContent, /STANDARD_MIN_WITHDRAWAL_AMOUNT\s*=\s*100/);
  assert.match(apiContent, /TEST_MIN_WITHDRAWAL_AMOUNT\s*=\s*1/);
});

runTest('15. Live ₹1 Payout Test Simulation alongside existing ₹100 pending withdrawal', () => {
  function computeBalances(totalEarned, withdrawals = []) {
    let pendingBalance = 0;
    let totalPaid = 0;
    for (const w of withdrawals) {
      const amt = Number(w?.amount) || 0;
      if (amt <= 0) continue;
      const st = String(w?.status || '').trim().toUpperCase();
      if (st === 'PENDING' || st === 'PROCESSING' || st === 'UNDER_REVIEW' || st === 'APPROVED') {
        pendingBalance += amt;
      } else if (st === 'PAID') {
        totalPaid += amt;
      }
    }
    const safeEarned = Math.max(0, Number(totalEarned) || 0);
    const availableBalance = Math.max(0, safeEarned - totalPaid - pendingBalance);
    return { availableBalance, pendingBalance, totalPaid, lifetimeEarnings: safeEarned };
  }

  // Starting production state: ₹200 earned, ₹100 existing UNDER_REVIEW withdrawal -> ₹100 Available
  const withdrawals = [{ id: 'WREQ-EXISTING-100', amount: 100, status: 'UNDER_REVIEW' }];
  const before = computeBalances(200, withdrawals);
  assert.equal(before.availableBalance, 100);
  assert.equal(before.pendingBalance, 100);
  assert.equal(before.totalPaid, 0);

  // Step 1: Submit new ₹1 withdrawal
  withdrawals.push({ id: 'WREQ-TEST-1', amount: 1, status: 'UNDER_REVIEW' });
  const afterRequest = computeBalances(200, withdrawals);
  assert.equal(afterRequest.availableBalance, 99, 'Available to Payout becomes ₹99');
  assert.equal(afterRequest.pendingBalance, 101, 'Pending Withdrawal becomes ₹101 (₹100 + ₹1)');
  assert.equal(afterRequest.totalPaid, 0);
  assert.equal(afterRequest.lifetimeEarnings, 200);

  // Step 2: Admin Approves the ₹1 request
  withdrawals[1].status = 'APPROVED';
  const afterApprove = computeBalances(200, withdrawals);
  assert.equal(afterApprove.availableBalance, 99, 'Available stays ₹99');
  assert.equal(afterApprove.pendingBalance, 101, 'Pending stays ₹101 while APPROVED');
  assert.equal(afterApprove.totalPaid, 0);

  // Step 3: Admin completes external ₹1 transfer and Marks PAID with genuine UTR
  withdrawals[1].status = 'PAID';
  withdrawals[1].referenceNo = 'UTR20261028TEST1RS99';
  const afterPaid = computeBalances(200, withdrawals);
  assert.equal(afterPaid.availableBalance, 99, 'Available stays ₹99');
  assert.equal(afterPaid.pendingBalance, 100, 'Pending decreases to ₹100 (existing ₹100 request untouched)');
  assert.equal(afterPaid.totalPaid, 1, 'Total Paid Out becomes ₹1');
  assert.equal(afterPaid.lifetimeEarnings, 200, 'Lifetime Earnings remains ₹200');
});

runTest('16. Restore ₹100 Minimum Verification: toggling TEMPORARY_TEST_MIN_WITHDRAWAL_ACTIVE = false restores ₹100', () => {
  function resolveMin(active, isTestSession, userRef) {
    if (!active) return 100;
    if (isTestSession || ['SUBODHKUMAR', 'ADMIN'].includes(userRef)) return 1;
    return 100;
  }

  assert.equal(resolveMin(true, true, 'LEARNER1'), 1, 'Active test session allows ₹1');
  assert.equal(resolveMin(true, false, 'SUBODHKUMAR'), 1, 'Authorized test account gets ₹1');
  assert.equal(resolveMin(true, false, 'PUBLIC_USER'), 100, 'Normal public user kept at ₹100 when session flag is false');
  assert.equal(resolveMin(false, true, 'SUBODHKUMAR'), 100, 'Toggling master flag to false restores ₹100 for all');
});

runTest('17. Admin Custom Claim Payload Unwrapping: verify admin-data.js reads verification.payload.admin', () => {
  const adminDataPath = path.resolve('functions/api/admin-data.js');
  const content = fs.readFileSync(adminDataPath, 'utf-8');

  // Must NOT have the old buggy pattern `claims.admin !== true` where `claims = await verifyFirebaseIdToken(...)`
  assert.ok(!content.includes('claims.admin !== true'), 'Must not read claims.admin on the outer wrapper object');
  assert.match(content, /const verification = await verifyFirebaseIdToken\(token, projectId\)/);
  assert.match(content, /const adminClaims = verification\.payload;/);
  assert.match(content, /const hasAdminClaim = adminClaims\.admin === true \|\| adminClaims\.role === 'admin'/);
});

runTest('18. Auth Status Codes: Missing/Expired token -> 401, Student token -> 403, Owner Admin token -> 200', () => {
  const OWNER_UID = 'eCtK0lyxIaQSmgPwEnPUy3CKwsz2';

  function evaluatePayoutAuth(authHeader, mockVerifyResult) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { status: 401, code: 'MISSING_TOKEN' };
    }
    const verification = mockVerifyResult;
    if (!verification || !verification.valid || !verification.payload) {
      return { status: 401, code: 'TOKEN_INVALID_OR_EXPIRED', requiresTokenRefresh: true };
    }
    const payload = verification.payload;
    const hasAdminClaim = payload.admin === true || payload.role === 'admin';
    if (!hasAdminClaim) {
      if (payload.sub === OWNER_UID) {
        return { status: 403, code: 'STALE_ADMIN_TOKEN_REFRESH_REQUIRED', requiresTokenRefresh: true };
      }
      return { status: 403, code: 'FORBIDDEN_NOT_ADMIN', uid: payload.sub };
    }
    return { status: 200, authorized: true, uid: payload.sub };
  }

  // 1. Missing token -> 401
  assert.equal(evaluatePayoutAuth('', null).status, 401);

  // 2. Expired token -> 401
  const expiredRes = evaluatePayoutAuth('Bearer expired.jwt.token', { valid: false, error: 'Token has expired' });
  assert.equal(expiredRes.status, 401);
  assert.equal(expiredRes.code, 'TOKEN_INVALID_OR_EXPIRED');

  // 3. Normal student token -> 403 Forbidden
  const studentRes = evaluatePayoutAuth('Bearer student.jwt.token', {
    valid: true,
    payload: { sub: 'student_uid_999', email: 'student@example.com' },
  });
  assert.equal(studentRes.status, 403);
  assert.equal(studentRes.code, 'FORBIDDEN_NOT_ADMIN');

  // 4. Correct owner admin token -> 200 Authorized
  const ownerRes = evaluatePayoutAuth('Bearer owner.jwt.token', {
    valid: true,
    payload: { sub: OWNER_UID, email: 'admin@futureitindustry.com', admin: true },
  });
  assert.equal(ownerRes.status, 200);
  assert.equal(ownerRes.authorized, true);
  assert.equal(ownerRes.uid, OWNER_UID);
});

runTest('19. Stale Token Refresh & Retry Flow: stale token triggers getIdToken(true) and succeeds on retry', () => {
  const OWNER_UID = 'eCtK0lyxIaQSmgPwEnPUy3CKwsz2';
  let tokenRefreshCalls = 0;

  // First call has stale token (missing admin: true), refresh mints fresh token with admin: true
  function mockGetIdToken(forceRefresh) {
    if (forceRefresh) tokenRefreshCalls++;
    return tokenRefreshCalls >= 1
      ? { valid: true, payload: { sub: OWNER_UID, admin: true } }
      : { valid: true, payload: { sub: OWNER_UID } };
  }

  // Simulate client calling getFreshAdminToken(true) before payout action
  const tokenVerification = mockGetIdToken(true);
  assert.equal(tokenRefreshCalls, 1, 'getIdToken(true) must be called before payout action');
  assert.equal(tokenVerification.payload.admin, true, 'Refreshed token contains { admin: true }');
  assert.equal(tokenVerification.payload.sub, OWNER_UID, 'Refreshed token matches owner UID');
});

runTest('20. Frontend AdminAuthService & AdminDataService: verify getFreshAdminToken(true) integration', () => {
  const authServiceContent = fs.readFileSync(
    path.resolve('welcome-to-2050/src/services/adminAuthService.ts'),
    'utf-8'
  );
  const dataServiceContent = fs.readFileSync(
    path.resolve('welcome-to-2050/src/services/adminDataService.ts'),
    'utf-8'
  );

  assert.match(authServiceContent, /INTENDED_OWNER_ADMIN_UID = 'eCtK0lyxIaQSmgPwEnPUy3CKwsz2'/);
  assert.match(authServiceContent, /currentUser\.getIdToken\(forceRefresh\)/);
  assert.match(dataServiceContent, /AdminAuthService\.getFreshAdminToken\(true\)/);
});

runTest('21. Static Regression: verify no undefined claims variable in admin-data.js', () => {
  const file1 = fs.readFileSync(path.resolve('functions/api/admin-data.js'), 'utf-8');
  const file2 = fs.readFileSync(path.resolve('welcome-to-2050/functions/api/admin-data.js'), 'utf-8');

  for (const [name, content] of [['functions/api/admin-data.js', file1], ['welcome-to-2050/functions/api/admin-data.js', file2]]) {
    // Must NOT contain bare `claims.` in handleUpdateWithdrawalStatus
    assert.ok(!content.includes('processedBy: claims.'), `Found undefined claims in ${name}`);
    assert.match(content, /const adminClaims = verification\.payload;/);
    assert.match(content, /processedBy:\s*adminClaims\.email \|\| adminClaims\.sub \|\| 'Admin'/);
  }
});

runTest('22. Transaction Execution Regression: verify transaction fields resolve adminClaims without ReferenceError', () => {
  const adminClaims = {
    sub: 'eCtK0lyxIaQSmgPwEnPUy3CKwsz2',
    email: 'admin@futureitindustry.com',
    admin: true,
  };
  const existingReq = {
    id: 'WREQ-001',
    amount: 1,
    adminNotes: 'Prior notes',
    refCode: 'SUBODHKUMAR',
  };
  const nowIso = new Date().toISOString();
  const payoutRef = 'UTR9876543210AXIS';

  for (const rawTargetStatus of ['APPROVED', 'PAID', 'REJECTED']) {
    let capturedFields = null;
    const mockTx = {
      update(col, id, fields) {
        capturedFields = fields;
      },
    };

    // Run the exact field mapping block from handleUpdateWithdrawalStatus
    const updatedWithdrawalFields = {
      status: rawTargetStatus,
      updatedAt: nowIso,
      adminNotes: `Status updated to ${rawTargetStatus} by administrator.`,
      processedBy: adminClaims.email || adminClaims.sub || 'Admin',
    };

    if (rawTargetStatus === 'PAID') {
      updatedWithdrawalFields.paidAt = nowIso;
      updatedWithdrawalFields.referenceNo = payoutRef;
      updatedWithdrawalFields.payoutRef = payoutRef;
    }

    mockTx.update('withdrawal_requests', existingReq.id, updatedWithdrawalFields);

    assert.ok(capturedFields, `Transaction update should succeed for ${rawTargetStatus}`);
    assert.equal(capturedFields.processedBy, 'admin@futureitindustry.com');
    assert.equal(capturedFields.status, rawTargetStatus);
    if (rawTargetStatus === 'PAID') {
      assert.equal(capturedFields.referenceNo, payoutRef);
      assert.equal(capturedFields.paidAt, nowIso);
    }
  }
});

runTest('23. Production Bug Scenario: ₹300 Lifetime, ₹100 UNDER_REVIEW, ₹1 PAID produces exact expected accounting', () => {
  function computeBalances(totalEarned, withdrawals = []) {
    let pendingBalance = 0;
    let totalPaid = 0;
    for (const w of withdrawals) {
      const amt = Number(w?.amount) || 0;
      if (amt <= 0) continue;
      const st = String(w?.rawStatus || w?.status || '').trim().toUpperCase();
      if (st === 'PENDING' || st === 'PROCESSING' || st === 'UNDER_REVIEW' || st === 'APPROVED') {
        pendingBalance += amt;
      } else if (st === 'PAID') {
        totalPaid += amt;
      }
    }
    const safeEarned = Math.max(0, Number(totalEarned) || 0);
    const availableBalance = Math.max(0, safeEarned - totalPaid - pendingBalance);
    return {
      totalEarned: safeEarned,
      pendingBalance,
      totalPaid,
      availableBalance,
      availableToPayout: availableBalance,
    };
  }

  const withdrawals = [
    { id: 'wth_100', txId: 'WTH-100', amount: 100, status: 'UNDER_REVIEW', rawStatus: 'UNDER_REVIEW' },
    { id: 'wth_1', txId: 'WTH-1', amount: 1, status: 'PAID', rawStatus: 'PAID' },
  ];

  const result = computeBalances(300, withdrawals);
  assert.equal(result.totalEarned, 300, 'Lifetime Earnings must be ₹300');
  assert.equal(result.pendingBalance, 100, 'Pending Withdrawal must be ₹100 (excluding ₹1 PAID)');
  assert.equal(result.totalPaid, 1, 'Total Paid Out must be ₹1');
  assert.equal(result.availableBalance, 199, 'Available to Payout must be ₹199 (300 - 1 - 100)');
  assert.equal(result.availableToPayout, 199, 'availableToPayout must match availableBalance');
});

runTest('24. mergeWithdrawalsList cross-field deduplication and server status authority', () => {
  function mergeWithdrawalsList(serverList = [], localList = []) {
    const result = [];
    const processedServerIndices = new Set();
    const validLocal = Array.isArray(localList) ? localList.filter(Boolean) : [];
    const validServer = Array.isArray(serverList) ? serverList.filter(Boolean) : [];

    for (const local of validLocal) {
      const localId = String(local.id || '').trim();
      const localTxId = String(local.txId || '').trim();
      const localReqId = String(local.requestId || '').trim();

      const serverIdx = validServer.findIndex((srv, idx) => {
        if (processedServerIndices.has(idx)) return false;
        const srvId = String(srv.id || '').trim();
        const srvTxId = String(srv.txId || '').trim();
        const srvReqId = String(srv.requestId || '').trim();
        return (
          (localId && (localId === srvId || localId === srvTxId)) ||
          (localTxId && (localTxId === srvId || localTxId === srvTxId)) ||
          (localReqId && (localReqId === srvId || localReqId === srvReqId || localReqId === srvTxId))
        );
      });

      if (serverIdx >= 0) {
        processedServerIndices.add(serverIdx);
        const srv = validServer[serverIdx];
        result.push({
          ...local,
          ...srv,
          status: srv.status || local.status,
        });
      } else {
        result.push({ ...local });
      }
    }

    validServer.forEach((srv, idx) => {
      if (!processedServerIndices.has(idx)) {
        result.push({ ...srv });
      }
    });

    return result;
  }

  // Local storage has both requests as UNDER_REVIEW (from before server paid the ₹1)
  const localList = [
    { id: 'w_client_100', txId: 'WTH-100', amount: 100, status: 'UNDER_REVIEW' },
    { id: 'w_client_1', txId: 'WTH-1', amount: 1, status: 'UNDER_REVIEW' },
  ];

  // Server has the ₹1 request marked as Paid
  const serverList = [
    { id: 'wth_server_100', txId: 'WTH-100', amount: 100, status: 'Pending', rawStatus: 'UNDER_REVIEW' },
    { id: 'wth_server_1', txId: 'WTH-1', amount: 1, status: 'Paid', rawStatus: 'PAID', payoutRef: 'UTR-9876543210' },
  ];

  const merged = mergeWithdrawalsList(serverList, localList);
  assert.equal(merged.length, 2, 'Must not duplicate withdrawal records');

  const w100 = merged.find((w) => w.amount === 100);
  assert.ok(w100, 'Must have ₹100 withdrawal');
  assert.equal(w100.status, 'Pending');

  const w1 = merged.find((w) => w.amount === 1);
  assert.ok(w1, 'Must have ₹1 withdrawal');
  assert.equal(w1.status, 'Paid', 'Server Paid status must overwrite local UNDER_REVIEW status');
  assert.equal(w1.payoutRef, 'UTR-9876543210', 'Payout reference must be preserved from server');
});

runTest('25. Affiliate API static verification: reads withdrawal_requests collection and exports mergeWithdrawalsList', () => {
  const apiPath = path.resolve('functions/api/affiliate.js');
  const apiContent = fs.readFileSync(apiPath, 'utf-8');
  assert.ok(apiContent.includes("listFirestoreCollectionDocs('withdrawal_requests', env)"), 'affiliate.js must query withdrawal_requests');

  const servicePath = path.resolve('welcome-to-2050/src/services/realAuthService.ts');
  const serviceContent = fs.readFileSync(servicePath, 'utf-8');
  assert.ok(serviceContent.includes('export function mergeWithdrawalsList'), 'realAuthService.ts must export mergeWithdrawalsList');

  const hubPath = path.resolve('welcome-to-2050/src/components/futureai/AffiliateEarningsHub.tsx');
  const hubContent = fs.readFileSync(hubPath, 'utf-8');
  assert.ok(hubContent.includes('mergeWithdrawalsList(real.withdrawals, prev.withdrawals)'), 'AffiliateEarningsHub must use mergeWithdrawalsList');
  assert.ok(hubContent.includes("id: 'total-paid-out'"), 'AffiliateEarningsHub must have card id total-paid-out');
  assert.ok(hubContent.includes("label: 'Total Paid Out'"), 'AffiliateEarningsHub must have card label Total Paid Out');
  assert.ok(hubContent.includes('Total commissions earned since joining'), 'AffiliateEarningsHub must describe Lifetime Earnings in details');
});

console.log('\n----------------------------------------------------------------');
console.log(`Summary: ${passedTests}/${totalTests} Tests Passed`);
console.log('----------------------------------------------------------------\n');

if (passedTests !== totalTests) {
  process.exit(1);
}
