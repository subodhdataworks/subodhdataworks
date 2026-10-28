/**
 * Comprehensive Acceptance Test Suite — Affiliate Withdrawal Balance Deduction,
 * Atomic Status Lifecycle, Concurrency, Idempotency & Wallet Ledger
 *
 * Run with: node welcome-to-2050/test/withdrawal-lifecycle.test.mjs
 */

import assert from 'node:assert/strict';
import { onRequestGet, onRequestPost } from '../functions/api/affiliate.js';

let passed = 0;
let failed = 0;

async function runTest(name, fn) {
  try {
    await fn();
    console.log(`  ✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     ${err.message}`);
    failed++;
  }
}

function makeGetContext(query = '') {
  return {
    request: new Request(`https://futureitindustry.com/api/affiliate${query}`, {
      method: 'GET',
    }),
    env: {},
  };
}

function makePostContext(body) {
  return {
    request: new Request('https://futureitindustry.com/api/affiliate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
    env: {},
  };
}

console.log('\n================================================================');
console.log('🏦 WITHDRAWAL LIFECYCLE, ATOMIC DEDUCTION & LEDGER TEST SUITE');
console.log('================================================================\n');

// Reset global store before starting suite
globalThis.__affiliate_v5_store = undefined;
const TEST_USER = 'PARTNER2200';

// Seed 22 verified paid enrollments = ₹2,200 balance
await runTest('Setup: Credit 22 verified paid enrollments (₹2,200) -> Available to Payout & Withdraw = ₹2,200', async () => {
  for (let i = 1; i <= 22; i++) {
    const res = await onRequestPost(
      makePostContext({
        eventType: 'paid_enrollment',
        refCode: TEST_USER,
        paymentId: `pay_valid_seed_${String(i).padStart(3, '0')}`,
        paymentStatus: 'CAPTURED',
        payerEmail: `student${i}@college.edu`,
        payerName: `Student ${i}`,
        amount: 999,
        skipGatewayCheck: true,
      })
    );
    const data = await res.json();
    assert.equal(data.success, true);
  }

  const getRes = await onRequestGet(makeGetContext(`?refCode=${TEST_USER}`));
  const state = await getRes.json();
  assert.equal(state.paidEnrollments, 22);
  assert.equal(state.totalEarned, 2200, 'Lifetime Earnings must be ₹2,200');
  assert.equal(state.availableBalance, 2200, 'Available Balance must be ₹2,200');
  assert.equal(state.availableToPayout, 2200, 'Available to Payout must be ₹2,200');
  assert.equal(state.availableToWithdraw, 2200, 'Available to Withdraw must be ₹2,200');
  assert.equal(state.pendingBalance, 0);
  assert.equal(state.totalPaid, 0);
});

let firstWithdrawalId = '';

// Scenario 1: Request ₹1,000 from a ₹2,200 balance -> both available balances become ₹1,200
await runTest('Scenario 1: Request ₹1,000 from ₹2,200 balance -> Available to Payout & Withdraw immediately become ₹1,200, Status = Pending', async () => {
  const res = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_request',
      refCode: TEST_USER,
      requestId: 'req_1000_initial',
      amount: 1000,
      method: 'UPI',
      upiId: 'partner2200@okaxis',
      isVerified: true,
    })
  );
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.equal(data.availableBalance, 1200, 'availableBalance must immediately become ₹1,200');
  assert.equal(data.availableToPayout, 1200, 'Available to Payout must immediately become ₹1,200');
  assert.equal(data.availableToWithdraw, 1200, 'Available to Withdraw must immediately become ₹1,200');
  assert.equal(data.pendingBalance, 1000, '₹1,000 must be reserved in pendingBalance');
  assert.equal(data.totalEarned, 2200, 'Lifetime Earnings must remain ₹2,200');
  assert.equal(data.withdrawal.amount, 1000);
  assert.equal(data.withdrawal.status, 'Pending', 'Request status must be Pending');
  assert.equal(data.ledgerEntry.type, 'WITHDRAWAL_REQUESTED');
  assert.equal(data.ledgerEntry.amount, -1000);
  assert.equal(data.ledgerEntry.balanceBefore, 2200);
  assert.equal(data.ledgerEntry.balanceAfter, 1200);

  firstWithdrawalId = data.withdrawal.id;
});

// Scenario 2: Attempt another withdrawal exceeding ₹1,200 -> reject it
await runTest('Scenario 2: Attempt another withdrawal exceeding ₹1,200 (e.g. ₹1,500 or ₹2,200) -> rejected with 400', async () => {
  const res1500 = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_request',
      refCode: TEST_USER,
      requestId: 'req_exceed_1500',
      amount: 1500,
      method: 'UPI',
      upiId: 'partner2200@okaxis',
      isVerified: true,
    })
  );
  assert.equal(res1500.status, 400);
  const data1500 = await res1500.json();
  assert.equal(data1500.success, false);
  assert.equal(data1500.reason, 'INSUFFICIENT_AVAILABLE_BALANCE');
  assert.equal(data1500.availableBalance, 1200, 'Available balance must remain ₹1,200');

  const res2200 = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_request',
      refCode: TEST_USER,
      requestId: 'req_exceed_2200',
      amount: 2200,
      method: 'UPI',
      upiId: 'partner2200@okaxis',
      isVerified: true,
    })
  );
  assert.equal(res2200.status, 400);
});

// Scenario 3: Approve / Pay the first request -> do NOT deduct ₹1,000 again
await runTest('Scenario 3: Approve & Pay the ₹1,000 request -> do NOT deduct ₹1,000 again (Available stays ₹1,200, Paid becomes ₹1,000)', async () => {
  // Move to Processing first
  const procRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_status_update',
      refCode: TEST_USER,
      withdrawalId: firstWithdrawalId,
      newStatus: 'Processing',
    })
  );
  const procData = await procRes.json();
  assert.equal(procData.success, true);
  assert.equal(procData.availableBalance, 1200, 'Processing keeps funds reserved; available stays ₹1,200');
  assert.equal(procData.pendingBalance, 1000);

  // Approve the request
  const appRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_status_update',
      refCode: TEST_USER,
      withdrawalId: firstWithdrawalId,
      newStatus: 'Approved',
      payoutRef: 'UTR123456789',
    })
  );
  const appData = await appRes.json();
  assert.equal(appData.success, true);
  assert.equal(appData.availableBalance, 1200, 'Approving MUST NOT deduct ₹1,000 a second time');
  assert.equal(appData.availableToPayout, 1200);
  assert.equal(appData.availableToWithdraw, 1200);
  assert.equal(appData.pendingBalance, 1000, 'Approved keeps funds reserved in Pending Withdrawal until external transfer is Paid');
  assert.equal(appData.totalPaid, 0, 'Total Paid remains ₹0 until marked Paid');

  // Mark Paid & repeat call to verify idempotency
  const paidRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_status_update',
      refCode: TEST_USER,
      withdrawalId: firstWithdrawalId,
      newStatus: 'Paid',
      payoutRef: 'UTR123456789',
    })
  );
  const paidData = await paidRes.json();
  assert.equal(paidData.success, true);
  assert.equal(paidData.availableBalance, 1200, 'Marking Paid MUST NOT deduct ₹1,000 again');
  assert.equal(paidData.pendingBalance, 0, 'Pending reservation cleared on Paid');
  assert.equal(paidData.totalPaid, 1000);

  const repeatPaidRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_status_update',
      refCode: TEST_USER,
      withdrawalId: firstWithdrawalId,
      newStatus: 'Paid',
      payoutRef: 'UTR123456789',
    })
  );
  const repeatPaidData = await repeatPaidRes.json();
  assert.equal(repeatPaidData.idempotent, true);
  assert.equal(repeatPaidData.availableBalance, 1200);
});

// Scenario 4: Reject / Cancel a pending request -> restore reserved amount exactly once (no duplicate refunds)
await runTest('Scenario 4: Reject a pending ₹500 request -> restores ₹500 to Available Balance (₹700 -> ₹1,200) exactly once', async () => {
  // Request ₹500 from ₹1,200 available
  const reqRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_request',
      refCode: TEST_USER,
      requestId: 'req_500_to_reject',
      amount: 500,
      method: 'Bank',
      bankName: 'HDFC Bank',
      bankAccNumber: '50100234567890',
      bankIfsc: 'HDFC0001234',
      isVerified: true,
    })
  );
  const reqData = await reqRes.json();
  assert.equal(reqData.success, true);
  assert.equal(reqData.availableBalance, 700, 'Available balance deducted to ₹700');
  assert.equal(reqData.pendingBalance, 500, 'Pending balance is ₹500');

  const secondWithdrawalId = reqData.withdrawal.id;

  // Reject the ₹500 request
  const rejRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_status_update',
      refCode: TEST_USER,
      withdrawalId: secondWithdrawalId,
      newStatus: 'Rejected',
      reason: 'Bank account number mismatch',
    })
  );
  const rejData = await rejRes.json();
  assert.equal(rejData.success, true);
  assert.equal(rejData.availableBalance, 1200, 'Available balance restored to ₹1,200');
  assert.equal(rejData.availableToPayout, 1200);
  assert.equal(rejData.availableToWithdraw, 1200);
  assert.equal(rejData.pendingBalance, 0);
  assert.equal(rejData.ledgerEntry.type, 'WITHDRAWAL_REFUNDED');
  assert.equal(rejData.ledgerEntry.amount, 500);
  assert.equal(rejData.ledgerEntry.reason, 'Bank account number mismatch');

  // Call Reject a second time -> must NOT refund a second time!
  const dupRejRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_status_update',
      refCode: TEST_USER,
      withdrawalId: secondWithdrawalId,
      newStatus: 'Rejected',
      reason: 'Duplicate webhook retry',
    })
  );
  const dupRejData = await dupRejRes.json();
  assert.equal(dupRejData.success, true);
  assert.equal(dupRejData.alreadyRefunded, true);
  assert.equal(dupRejData.availableBalance, 1200, 'Duplicate rejection MUST NOT double-refund');
});

// Scenario 5: Submit the same request twice -> do not create duplicate deductions
await runTest('Scenario 5: Submit the same withdrawal request twice (idempotency key) -> deducts ₹400 only once', async () => {
  const payload = {
    eventType: 'withdrawal_request',
    refCode: TEST_USER,
    requestId: 'idempotent_req_400_xyz',
    amount: 400,
    method: 'UPI',
    upiId: 'partner2200@okaxis',
    isVerified: true,
  };

  const firstRes = await onRequestPost(makePostContext(payload));
  const firstData = await firstRes.json();
  assert.equal(firstData.success, true);
  assert.equal(firstData.availableBalance, 800, '1200 - 400 = 800');

  // Retry the exact same request
  const secondRes = await onRequestPost(makePostContext(payload));
  const secondData = await secondRes.json();
  assert.equal(secondData.success, true);
  assert.equal(secondData.idempotent, true, 'Second submission must be flagged idempotent');
  assert.equal(secondData.availableBalance, 800, 'Available balance must remain ₹800, not ₹400');
  assert.equal(secondData.pendingBalance, 400, 'Pending balance must remain ₹400');
});

// Scenario 6: Submit simultaneous requests -> total reservations must never exceed available balance
await runTest('Scenario 6: Submit simultaneous requests exceeding remaining ₹800 balance -> total reservations never exceed balance', async () => {
  // Currently availableBalance = ₹800. Fire 3 concurrent requests of ₹500 each (total ₹1,500 > ₹800).
  const results = await Promise.all([
    onRequestPost(
      makePostContext({
        eventType: 'withdrawal_request',
        refCode: TEST_USER,
        requestId: 'concurrent_req_1',
        amount: 500,
        method: 'UPI',
        upiId: 'partner2200@okaxis',
        isVerified: true,
      })
    ).then((r) => r.json()),
    onRequestPost(
      makePostContext({
        eventType: 'withdrawal_request',
        refCode: TEST_USER,
        requestId: 'concurrent_req_2',
        amount: 500,
        method: 'UPI',
        upiId: 'partner2200@okaxis',
        isVerified: true,
      })
    ).then((r) => r.json()),
    onRequestPost(
      makePostContext({
        eventType: 'withdrawal_request',
        refCode: TEST_USER,
        requestId: 'concurrent_req_3',
        amount: 500,
        method: 'UPI',
        upiId: 'partner2200@okaxis',
        isVerified: true,
      })
    ).then((r) => r.json()),
  ]);

  const succeeded = results.filter((r) => r.success);
  const rejected = results.filter((r) => !r.success);
  assert.equal(succeeded.length, 1, 'Exactly 1 of the ₹500 requests can succeed from ₹800 available');
  assert.equal(rejected.length, 2, 'The other 2 requests must be rejected');

  const checkRes = await onRequestGet(makeGetContext(`?refCode=${TEST_USER}`));
  const state = await checkRes.json();
  assert.equal(state.availableBalance, 300, '800 - 500 = 300 available');
  assert.ok(state.availableBalance >= 0, 'Available balance must never be negative');
  assert.equal(state.pendingBalance, 900, '400 + 500 = 900 pending');
  assert.equal(state.totalPaid, 1000, '1000 paid');
  assert.equal(
    state.availableBalance + state.pendingBalance + state.totalPaid,
    state.totalEarned,
    'availableBalance + pendingBalance + totalPaid must equal totalEarned (₹2,200)'
  );
});

// Scenario 7: Refresh dashboard / log out and back in -> balances remain correct
await runTest('Scenario 7: Refresh dashboard (GET /api/affiliate) -> balances remain ₹300 available, ₹900 pending, ₹1,000 paid', async () => {
  const res = await onRequestGet(makeGetContext(`?refCode=${TEST_USER}`));
  const data = await res.json();
  assert.equal(data.availableBalance, 300);
  assert.equal(data.availableToPayout, 300);
  assert.equal(data.availableToWithdraw, 300);
  assert.equal(data.pendingBalance, 900);
  assert.equal(data.totalPaid, 1000);
});

// Scenario 8: Lifetime Earnings invariance + Security & Input Validation
await runTest('Scenario 8: Lifetime Earnings remains ₹2,200 & invalid/unverified withdrawal requests are blocked', async () => {
  const res = await onRequestGet(makeGetContext(`?refCode=${TEST_USER}`));
  const data = await res.json();
  assert.equal(data.totalEarned, 2200, 'Lifetime Earnings must remain unchanged at ₹2,200');

  // Zero / negative amount rejected
  const zeroRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_request',
      refCode: TEST_USER,
      amount: 0,
      method: 'UPI',
      upiId: 'partner2200@okaxis',
      isVerified: true,
    })
  );
  assert.equal(zeroRes.status, 400);

  // Below ₹1 minimum rejected
  const minRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_request',
      refCode: TEST_USER,
      amount: 0.5,
      method: 'UPI',
      upiId: 'partner2200@okaxis',
      isVerified: true,
    })
  );
  assert.equal(minRes.status, 400);

  // Unverified payout details rejected
  const unverifiedRes = await onRequestPost(
    makePostContext({
      eventType: 'withdrawal_request',
      refCode: TEST_USER,
      amount: 100,
      method: 'UPI',
      upiId: 'partner2200@okaxis',
      isVerified: false,
    })
  );
  assert.equal(unverifiedRes.status, 400);
  const unvData = await unverifiedRes.json();
  assert.equal(unvData.reason, 'PAYOUT_METHOD_NOT_VERIFIED');
});

console.log('\n----------------------------------------------------------------');
console.log(`Total Tests: ${passed + failed} | Passed: ${passed} | Failed: ${failed}`);
console.log('----------------------------------------------------------------\n');

if (failed > 0) {
  process.exit(1);
}
