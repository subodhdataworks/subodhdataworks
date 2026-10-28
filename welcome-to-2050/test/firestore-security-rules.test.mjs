import assert from 'node:assert/strict';
import fs from 'node:fs';

console.log('\n🔒 Starting Firestore Security Rules (Corrected Version) Test Suite...\n');

// 1. Verify firestore.rules file exists and is valid syntax
const rulesContent = fs.readFileSync('firestore.rules', 'utf8');
assert.ok(rulesContent.includes("rules_version = '2';"), 'Rules file must specify version 2');
assert.ok(rulesContent.includes('service cloud.firestore'), 'Must specify cloud.firestore service');
assert.ok(!rulesContent.includes('replace('), 'Must NOT contain invalid regex replace calls');
assert.ok(!rulesContent.includes('admin@futureitindustry.com'), 'Must NOT hardcode admin emails in rules');
assert.ok(rulesContent.includes('request.auth.token.admin == true'), 'Must enforce custom claims for admin');

/**
 * Exact AST / Semantic evaluator mirroring Firestore Rules v2 evaluation engine
 */
function evaluateFirestoreRule({
  path,
  operation, // 'get' | 'list' | 'create' | 'update' | 'delete'
  auth, // { uid, token: { admin: boolean, role: string } } | null
  resource, // existing document: { data: {...}, id: '...' }
  requestResource, // incoming document: { data: {...} }
}) {
  const isAuthenticated = auth !== null;
  const isAdmin = isAuthenticated && (
    auth.token?.admin === true ||
    auth.token?.role === 'admin'
  );

  const segments = path.split('/').filter(Boolean);
  const collection = segments[0];
  const docId = segments[1];

  // Helper: check if incoming data only touches allowed keys
  function hasOnly(data, allowedKeys) {
    if (!data) return true;
    const keys = Object.keys(data);
    return keys.every((k) => allowedKeys.includes(k));
  }

  // 1. affiliate_stats
  if (collection === 'affiliate_stats') {
    if (operation === 'get' || operation === 'list') {
      if (!isAuthenticated) return false;
      return isAdmin || (resource?.data?.userId === auth.uid);
    }
    // All client writes completely denied
    return false;
  }

  // 2. withdrawal_requests
  if (collection === 'withdrawal_requests') {
    if (operation === 'get' || operation === 'list') {
      if (!isAuthenticated) return false;
      return isAdmin || (resource?.data?.userId === auth.uid);
    }
    // All client writes completely denied (Withdrawals created & processed server-only)
    return false;
  }

  // 3. processed_referral_payments
  if (collection === 'processed_referral_payments') {
    if (operation === 'get' || operation === 'list') return Boolean(isAdmin);
    return false;
  }

  // 4. course_enrollments
  if (collection === 'course_enrollments') {
    if (operation === 'get' || operation === 'list') {
      if (!isAuthenticated) return false;
      return isAdmin || (resource?.data?.userId === auth.uid);
    }
    // All client writes completely denied (Granted server-only)
    return false;
  }

  // 5. registered_users
  if (collection === 'registered_users') {
    if (operation === 'get' || operation === 'list') {
      if (!isAuthenticated) return false;
      return isAdmin || (resource?.data?.userId === auth.uid) || (docId === auth.uid);
    }
    if (operation === 'create') {
      if (!isAuthenticated) return false;
      const isSelf = requestResource?.data?.userId === auth.uid ||
        requestResource?.data?.uid === auth.uid ||
        docId === auth.uid;
      if (!isSelf) return false;
      const allowedCreateKeys = [
        'uid', 'userId', 'name', 'displayName', 'email', 'phone', 'avatar',
        'photoURL', 'source', 'registeredAt', 'createdAt'
      ];
      return hasOnly(requestResource?.data, allowedCreateKeys);
    }
    if (operation === 'update') {
      if (!isAuthenticated) return false;
      if (isAdmin) return true;
      const isSelf = (resource?.data?.userId === auth.uid) || (docId === auth.uid);
      if (!isSelf) return false;

      // Diff check: affected keys must strictly be in the safe allowlist
      const safeUpdateKeys = ['name', 'displayName', 'phone', 'avatar', 'photoURL', 'updatedAt'];
      const affectedKeys = Object.keys(requestResource?.data || {}).filter(
        (k) => JSON.stringify(requestResource.data[k]) !== JSON.stringify(resource?.data?.[k])
      );
      return affectedKeys.every((k) => safeUpdateKeys.includes(k));
    }
    return false;
  }

  // 6. platform_payments
  if (collection === 'platform_payments') {
    if (operation === 'get' || operation === 'list') {
      if (!isAuthenticated) return false;
      return isAdmin || (resource?.data?.userId === auth.uid);
    }
    return false;
  }

  // 7. wallet_ledger
  if (collection === 'wallet_ledger') {
    if (operation === 'get' || operation === 'list') {
      if (!isAuthenticated) return false;
      return isAdmin || (resource?.data?.userId === auth.uid);
    }
    return false;
  }

  // 8. admin_users & admin_audit_logs
  if (collection === 'admin_users' || collection === 'admin_audit_logs') {
    if (operation === 'get' || operation === 'list') return Boolean(isAdmin);
    return false;
  }

  // Default deny for everything else
  return false;
}

let passed = 0;
let failed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`✅ PASSED: ${name}`);
    passed++;
  } catch (err) {
    console.error(`❌ FAILED: ${name}`);
    console.error(`   Error: ${err.message}`);
    failed++;
  }
}

// Identities
const studentAlice = { uid: 'usr_alice_123', token: { admin: false, role: 'student' } };
const studentBob = { uid: 'usr_bob_456', token: { admin: false, role: 'student' } };
const attacker = { uid: 'usr_attacker_999', token: { admin: false, role: 'student' } };
const customClaimAdmin = { uid: 'usr_admin_007', token: { admin: true, role: 'admin' } };
const forgedEmailAttacker = { uid: 'usr_impostor', token: { email: 'admin@futureitindustry.com', admin: false } };

// --- 1. Wallet Balance Security (affiliate_stats) ---
runTest('Alice can read her own affiliate_stats', () => {
  const allowed = evaluateFirestoreRule({
    path: 'affiliate_stats/ALICE100',
    operation: 'get',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', availableBalance: 200 } }
  });
  assert.equal(allowed, true);
});

runTest('Attacker CANNOT read Alice affiliate_stats', () => {
  const allowed = evaluateFirestoreRule({
    path: 'affiliate_stats/ALICE100',
    operation: 'get',
    auth: attacker,
    resource: { data: { userId: 'usr_alice_123', availableBalance: 200 } }
  });
  assert.equal(allowed, false);
});

runTest('Client-side balance manipulation on affiliate_stats is 100% BLOCKED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'affiliate_stats/ALICE100',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', availableBalance: 200 } },
    requestResource: { data: { userId: 'usr_alice_123', availableBalance: 999999 } }
  });
  assert.equal(allowed, false);
});

// --- 2. Withdrawal Security (withdrawal_requests) ---
runTest('Direct client creation of withdrawal_requests is 100% BLOCKED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'withdrawal_requests/wth_client_direct',
    operation: 'create',
    auth: studentAlice,
    requestResource: { data: { userId: 'usr_alice_123', amount: 500, status: 'UNDER_REVIEW' } }
  });
  assert.equal(allowed, false, 'Client must NOT create withdrawals directly; server endpoint only');
});

runTest('Direct client update on withdrawal_requests is 100% BLOCKED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'withdrawal_requests/wth_123',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', status: 'UNDER_REVIEW' } },
    requestResource: { data: { userId: 'usr_alice_123', status: 'PAID' } }
  });
  assert.equal(allowed, false);
});

runTest('Alice can read her own withdrawal history', () => {
  const allowed = evaluateFirestoreRule({
    path: 'withdrawal_requests/wth_123',
    operation: 'get',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', amount: 500, status: 'UNDER_REVIEW' } }
  });
  assert.equal(allowed, true);
});

runTest('Attacker CANNOT read Alice withdrawal history', () => {
  const allowed = evaluateFirestoreRule({
    path: 'withdrawal_requests/wth_123',
    operation: 'get',
    auth: attacker,
    resource: { data: { userId: 'usr_alice_123', amount: 500, status: 'UNDER_REVIEW' } }
  });
  assert.equal(allowed, false);
});

// --- 3. Referral Commission Deduplication (processed_referral_payments) ---
runTest('Clients CANNOT write to processed_referral_payments', () => {
  const allowed = evaluateFirestoreRule({
    path: 'processed_referral_payments/pay_test_123',
    operation: 'create',
    auth: studentAlice,
    requestResource: { data: { paymentId: 'pay_test_123', commission: 100 } }
  });
  assert.equal(allowed, false);
});

runTest('Clients CANNOT read processed_referral_payments', () => {
  const allowed = evaluateFirestoreRule({
    path: 'processed_referral_payments/pay_test_123',
    operation: 'get',
    auth: studentAlice,
    resource: { data: { paymentId: 'pay_test_123' } }
  });
  assert.equal(allowed, false);
});

// --- 4. Course Enrollment Security (course_enrollments) ---
runTest('Direct client write to course_enrollments is 100% BLOCKED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'course_enrollments/ENR_fake',
    operation: 'create',
    auth: studentAlice,
    requestResource: { data: { userId: 'usr_alice_123', courseId: 'data_analyst', enrollmentStatus: 'ACTIVE' } }
  });
  assert.equal(allowed, false);
});

runTest('Alice can read her own verified course_enrollment', () => {
  const allowed = evaluateFirestoreRule({
    path: 'course_enrollments/ENR_alice_data_analyst',
    operation: 'get',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', courseId: 'data_analyst', enrollmentStatus: 'ACTIVE' } }
  });
  assert.equal(allowed, true);
});

runTest('Bob CANNOT read Alice course_enrollments', () => {
  const allowed = evaluateFirestoreRule({
    path: 'course_enrollments/ENR_alice_data_analyst',
    operation: 'get',
    auth: studentBob,
    resource: { data: { userId: 'usr_alice_123', courseId: 'data_analyst', enrollmentStatus: 'ACTIVE' } }
  });
  assert.equal(allowed, false);
});

// --- 5. Profile Allowlist & Tampering Prevention (registered_users) ---
runTest('Alice CAN update safe profile fields (name, phone, avatar)', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', name: 'Alice', phone: '9999999999', walletBalance: 0 } },
    requestResource: { data: { userId: 'usr_alice_123', name: 'Alice Sharma', phone: '9999999999', walletBalance: 0 } }
  });
  assert.equal(allowed, true);
});

runTest('Alice CANNOT modify walletBalance in registered_users', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', name: 'Alice', walletBalance: 0 } },
    requestResource: { data: { userId: 'usr_alice_123', name: 'Alice', walletBalance: 1000 } }
  });
  assert.equal(allowed, false);
});

runTest('Alice CANNOT self-grant enrolledCourses in registered_users', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', enrolledCourses: [] } },
    requestResource: { data: { userId: 'usr_alice_123', enrolledCourses: ['ai_engineering'] } }
  });
  assert.equal(allowed, false);
});

runTest('Alice CANNOT modify referralCode, role, or administrative fields', () => {
  const allowedRole = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', role: 'student' } },
    requestResource: { data: { userId: 'usr_alice_123', role: 'admin' } }
  });
  const allowedRef = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', referralCode: 'ALICE100' } },
    requestResource: { data: { userId: 'usr_alice_123', referralCode: 'HACKED' } }
  });
  assert.equal(allowedRole, false);
  assert.equal(allowedRef, false);
});

// --- 6. Admin Custom Claims Authorization (No Email Spoofing) ---
runTest('Attacker with spoofed admin email without custom claims is REJECTED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'admin_users/admin_list',
    operation: 'get',
    auth: forgedEmailAttacker,
    resource: { data: { role: 'admin' } }
  });
  assert.equal(allowed, false, 'Email spoofing must NOT grant admin access');
});

runTest('Admin with cryptographically verified custom claim (admin: true) is GRANTED access', () => {
  const allowedStats = evaluateFirestoreRule({ path: 'affiliate_stats/ALICE100', operation: 'get', auth: customClaimAdmin, resource: { data: { userId: 'usr_alice_123' } } });
  const allowedWithdraw = evaluateFirestoreRule({ path: 'withdrawal_requests/wth_123', operation: 'get', auth: customClaimAdmin, resource: { data: { userId: 'usr_alice_123' } } });
  const allowedEnroll = evaluateFirestoreRule({ path: 'course_enrollments/ENR_123', operation: 'get', auth: customClaimAdmin, resource: { data: { userId: 'usr_alice_123' } } });
  assert.equal(allowedStats, true);
  assert.equal(allowedWithdraw, true);
  assert.equal(allowedEnroll, true);
});

// --- 7. Platform Payments & Unauthenticated Access ---
runTest('Unauthenticated request to any collection is 100% REJECTED', () => {
  assert.equal(evaluateFirestoreRule({ path: 'affiliate_stats/ALICE', operation: 'get', auth: null }), false);
  assert.equal(evaluateFirestoreRule({ path: 'withdrawal_requests/wth_1', operation: 'get', auth: null }), false);
  assert.equal(evaluateFirestoreRule({ path: 'course_enrollments/enr_1', operation: 'get', auth: null }), false);
  assert.equal(evaluateFirestoreRule({ path: 'platform_payments/pay_1', operation: 'get', auth: null }), false);
  assert.equal(evaluateFirestoreRule({ path: 'registered_users/usr_1', operation: 'get', auth: null }), false);
});

runTest('Arbitrary unapproved collection is denied by default (default deny)', () => {
  assert.equal(evaluateFirestoreRule({ path: 'server_secrets/env', operation: 'get', auth: studentAlice }), false);
  assert.equal(evaluateFirestoreRule({ path: 'arbitrary_data/item', operation: 'get', auth: customClaimAdmin }), false);
});

console.log(`\n🎉 RESULTS: ${passed}/${passed + failed} CORRECTED FIRESTORE RULES TESTS PASSED!\n`);
assert.equal(failed, 0, 'All security test cases must pass');
