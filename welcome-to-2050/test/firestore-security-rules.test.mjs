import assert from 'node:assert';

console.log('🔒 Starting Comprehensive Firestore Security Rules Test Suite...\n');

// Mock Auth Contexts
const studentAlice = {
  uid: 'usr_alice_123',
  token: { email: 'alice@example.com', admin: false }
};

const studentBob = {
  uid: 'usr_bob_456',
  token: { email: 'bob@example.com', admin: false }
};

const forgedEmailAttacker = {
  uid: 'usr_attacker_789',
  token: { email: 'admin@futureitindustry.com', admin: false } // Spoofed email without custom claim
};

const customClaimAdmin = {
  uid: 'usr_admin_001',
  token: { email: 'admin@futureitindustry.com', admin: true, role: 'admin' }
};

function hasOnlyKeys(dataObj, allowedKeyArray) {
  if (!dataObj || typeof dataObj !== 'object') return true;
  const keys = Object.keys(dataObj);
  return keys.every((k) => allowedKeyArray.includes(k));
}

function getAffectedKeys(afterData, beforeData) {
  const affected = new Set();
  const allKeys = new Set([...Object.keys(afterData || {}), ...Object.keys(beforeData || {})]);
  for (const k of allKeys) {
    if (afterData[k] !== beforeData[k]) {
      affected.add(k);
    }
  }
  return Array.from(affected);
}

/**
 * Semantic evaluator simulating the exact logic of the proposed firestore.rules
 */
function evaluateFirestoreRule({ path, operation, auth, resource = {}, requestResource = {} }) {
  const isAuthenticated = auth !== null && auth !== undefined;
  const isAdmin = isAuthenticated && (auth.token?.admin === true || auth.token?.role === 'admin');
  const pathParts = path.split('/').filter(Boolean);
  const collection = pathParts[0];
  const docId = pathParts[1] || '';

  // 1. affiliate_stats
  if (collection === 'affiliate_stats') {
    if (operation === 'get' || operation === 'list') {
      return isAuthenticated && (isAdmin || resource.data?.userId === auth.uid);
    }
    return false; // write always denied
  }

  // 2. withdrawal_requests
  if (collection === 'withdrawal_requests') {
    if (operation === 'get' || operation === 'list') {
      return isAuthenticated && (isAdmin || resource.data?.userId === auth.uid);
    }
    return false; // write always denied
  }

  // 3. processed_referral_payments
  if (collection === 'processed_referral_payments') {
    if (operation === 'get' || operation === 'list') {
      return isAuthenticated && isAdmin;
    }
    return false;
  }

  // 4. course_enrollments
  if (collection === 'course_enrollments') {
    if (operation === 'get' || operation === 'list') {
      return isAuthenticated && (isAdmin || resource.data?.userId === auth.uid);
    }
    return false; // write always denied
  }

  // 5. registered_users (Strict Ownership Model)
  if (collection === 'registered_users') {
    if (operation === 'get' || operation === 'list') {
      return isAuthenticated && (isAdmin || docId === auth.uid || resource.data?.userId === auth.uid);
    }

    if (operation === 'create') {
      if (!isAuthenticated) return false;
      const reqData = requestResource.data || {};
      
      // Strict document ID & uid match
      const docMatch = docId === auth.uid;
      const uidMatch = reqData.uid === auth.uid;
      const userIdMatch = !('userId' in reqData) || reqData.userId === auth.uid;
      const emailMatch = !auth.token?.email || reqData.email === auth.token.email;
      
      const safeKeys = hasOnlyKeys(reqData, [
        'uid', 'userId', 'name', 'displayName', 'email', 'phone', 'avatar',
        'photoURL', 'source', 'registeredAt', 'createdAt'
      ]);

      return docMatch && uidMatch && userIdMatch && emailMatch && safeKeys;
    }

    if (operation === 'update') {
      if (!isAuthenticated) return false;
      const isOwnerOrAdmin = isAdmin || docId === auth.uid || resource.data?.userId === auth.uid;
      if (!isOwnerOrAdmin) return false;

      const affected = getAffectedKeys(requestResource.data || {}, resource.data || {});
      const onlySafeKeys = hasOnlyKeys(affected.reduce((acc, k) => ({ ...acc, [k]: true }), {}), [
        'name', 'displayName', 'phone', 'avatar', 'photoURL', 'updatedAt'
      ]);

      const reqData = requestResource.data || {};
      const resData = resource.data || {};
      const uidPreserved = !('uid' in reqData) || reqData.uid === resData.uid;
      const userIdPreserved = !('userId' in reqData) || reqData.userId === resData.userId;

      return onlySafeKeys && uidPreserved && userIdPreserved;
    }

    return false;
  }

  // 6. platform_payments
  if (collection === 'platform_payments') {
    if (operation === 'get' || operation === 'list') {
      return isAuthenticated && (isAdmin || resource.data?.userId === auth.uid);
    }
    return false;
  }

  // 7. wallet_ledger
  if (collection === 'wallet_ledger') {
    if (operation === 'get' || operation === 'list') {
      return isAuthenticated && (isAdmin || resource.data?.userId === auth.uid);
    }
    return false;
  }

  // 8. admin_users & admin_audit_logs
  if (collection === 'admin_users' || collection === 'admin_audit_logs') {
    return isAuthenticated && isAdmin && (operation === 'get' || operation === 'list');
  }

  // Default Deny
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
    console.error(err.message);
    failed++;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. Strict registered_users Ownership & Forgery Prevention
// ─────────────────────────────────────────────────────────────────────────────
runTest('Legitimate user creates their own registered_users document with matching uid and email', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'create',
    auth: studentAlice,
    requestResource: {
      data: {
        uid: 'usr_alice_123',
        name: 'Alice',
        email: 'alice@example.com',
        phone: '9876543210',
        createdAt: new Date().toISOString()
      }
    }
  });
  assert.strictEqual(allowed, true);
});

runTest('User CANNOT create document with mismatched docId (attacker creating victim profile)', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_bob_456',
    operation: 'create',
    auth: studentAlice, // Alice trying to create Bob's doc
    requestResource: {
      data: {
        uid: 'usr_bob_456',
        name: 'Bob Victim'
      }
    }
  });
  assert.strictEqual(allowed, false);
});

runTest('User CANNOT create document with forged uid payload', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'create',
    auth: studentAlice,
    requestResource: {
      data: {
        uid: 'usr_bob_456', // forged UID
        name: 'Alice'
      }
    }
  });
  assert.strictEqual(allowed, false);
});

runTest('User CANNOT create document with forged email (impersonating admin email)', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'create',
    auth: studentAlice, // alice has alice@example.com
    requestResource: {
      data: {
        uid: 'usr_alice_123',
        email: 'admin@futureitindustry.com' // forged email
      }
    }
  });
  assert.strictEqual(allowed, false);
});

runTest('User CANNOT inject financial or role fields during registration (walletBalance, role, admin)', () => {
  const allowedWallet = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'create',
    auth: studentAlice,
    requestResource: {
      data: {
        uid: 'usr_alice_123',
        email: 'alice@example.com',
        walletBalance: 10000 // Injected!
      }
    }
  });
  assert.strictEqual(allowedWallet, false);

  const allowedRole = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'create',
    auth: studentAlice,
    requestResource: {
      data: {
        uid: 'usr_alice_123',
        email: 'alice@example.com',
        role: 'admin' // Injected!
      }
    }
  });
  assert.strictEqual(allowedRole, false);
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. Strict Profile Update Controls (Preventing Admin & User Financial Overwrites)
// ─────────────────────────────────────────────────────────────────────────────
runTest('User CAN update safe profile fields (displayName, phone, avatar)', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { uid: 'usr_alice_123', name: 'Alice', phone: '111', walletBalance: 0 } },
    requestResource: { data: { uid: 'usr_alice_123', name: 'Alice New', phone: '222', walletBalance: 0 } }
  });
  assert.strictEqual(allowed, true);
});

runTest('User CANNOT overwrite walletBalance or enrolledCourses via profile update', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { uid: 'usr_alice_123', walletBalance: 0 } },
    requestResource: { data: { uid: 'usr_alice_123', walletBalance: 5000 } }
  });
  assert.strictEqual(allowed, false);
});

runTest('Admin CANNOT overwrite walletBalance via profile update (strict allowlist enforced even for admin)', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'update',
    auth: customClaimAdmin,
    resource: { data: { uid: 'usr_alice_123', walletBalance: 0 } },
    requestResource: { data: { uid: 'usr_alice_123', walletBalance: 5000 } }
  });
  assert.strictEqual(allowed, false);
});

runTest('User CANNOT reassign uid during profile update', () => {
  const allowed = evaluateFirestoreRule({
    path: 'registered_users/usr_alice_123',
    operation: 'update',
    auth: studentAlice,
    resource: { data: { uid: 'usr_alice_123', name: 'Alice' } },
    requestResource: { data: { uid: 'usr_bob_456', name: 'Alice' } }
  });
  assert.strictEqual(allowed, false);
});

// ─────────────────────────────────────────────────────────────────────────────
// 3. Owner-Scoped Collection Queries Compatibility
// ─────────────────────────────────────────────────────────────────────────────
runTest('Alice owner-scoped query on affiliate_stats (where userId == alice.uid) is ALLOWED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'affiliate_stats/ALICE100',
    operation: 'list',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', availableBalance: 0 } }
  });
  assert.strictEqual(allowed, true);
});

runTest('Bob CANNOT query or read Alice affiliate_stats', () => {
  const allowed = evaluateFirestoreRule({
    path: 'affiliate_stats/ALICE100',
    operation: 'list',
    auth: studentBob,
    resource: { data: { userId: 'usr_alice_123', availableBalance: 0 } }
  });
  assert.strictEqual(allowed, false);
});

runTest('Alice owner-scoped query on withdrawal_requests is ALLOWED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'withdrawal_requests/wth_001',
    operation: 'list',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', amount: 500, status: 'UNDER_REVIEW' } }
  });
  assert.strictEqual(allowed, true);
});

runTest('Bob CANNOT query or read Alice withdrawal_requests', () => {
  const allowed = evaluateFirestoreRule({
    path: 'withdrawal_requests/wth_001',
    operation: 'list',
    auth: studentBob,
    resource: { data: { userId: 'usr_alice_123', amount: 500, status: 'UNDER_REVIEW' } }
  });
  assert.strictEqual(allowed, false);
});

runTest('Alice owner-scoped query on course_enrollments is ALLOWED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'course_enrollments/ENR_alice_data_analyst',
    operation: 'list',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', courseId: 'data_analyst' } }
  });
  assert.strictEqual(allowed, true);
});

runTest('Bob CANNOT read Alice course_enrollments', () => {
  const allowed = evaluateFirestoreRule({
    path: 'course_enrollments/ENR_alice_data_analyst',
    operation: 'list',
    auth: studentBob,
    resource: { data: { userId: 'usr_alice_123', courseId: 'data_analyst' } }
  });
  assert.strictEqual(allowed, false);
});

runTest('Alice owner-scoped query on platform_payments is ALLOWED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'platform_payments/pay_123',
    operation: 'list',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', amount: 4 } }
  });
  assert.strictEqual(allowed, true);
});

runTest('Alice owner-scoped query on wallet_ledger is ALLOWED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'wallet_ledger/led_123',
    operation: 'list',
    auth: studentAlice,
    resource: { data: { userId: 'usr_alice_123', amount: 100 } }
  });
  assert.strictEqual(allowed, true);
});

// ─────────────────────────────────────────────────────────────────────────────
// 4. Admin Access & Claims Enforcement
// ─────────────────────────────────────────────────────────────────────────────
runTest('Admin with verified custom claim (admin: true) CAN read cross-user collections', () => {
  const allowedStats = evaluateFirestoreRule({ path: 'affiliate_stats/ALICE100', operation: 'list', auth: customClaimAdmin, resource: { data: { userId: 'usr_alice_123' } } });
  const allowedWithdraw = evaluateFirestoreRule({ path: 'withdrawal_requests/wth_001', operation: 'list', auth: customClaimAdmin, resource: { data: { userId: 'usr_alice_123' } } });
  const allowedEnroll = evaluateFirestoreRule({ path: 'course_enrollments/ENR_alice', operation: 'list', auth: customClaimAdmin, resource: { data: { userId: 'usr_alice_123' } } });
  assert.strictEqual(allowedStats, true);
  assert.strictEqual(allowedWithdraw, true);
  assert.strictEqual(allowedEnroll, true);
});

runTest('Attacker with spoofed admin email WITHOUT custom claim is REJECTED', () => {
  const allowed = evaluateFirestoreRule({
    path: 'admin_users/admin_registry',
    operation: 'get',
    auth: forgedEmailAttacker,
    resource: { data: { role: 'admin' } }
  });
  assert.strictEqual(allowed, false);
});

// ─────────────────────────────────────────────────────────────────────────────
// 5. Client Financial Write Blocking
// ─────────────────────────────────────────────────────────────────────────────
runTest('Direct client write to affiliate_stats is 100% BLOCKED', () => {
  assert.strictEqual(evaluateFirestoreRule({ path: 'affiliate_stats/ALICE100', operation: 'create', auth: studentAlice }), false);
  assert.strictEqual(evaluateFirestoreRule({ path: 'affiliate_stats/ALICE100', operation: 'update', auth: studentAlice }), false);
});

runTest('Direct client write to withdrawal_requests is 100% BLOCKED', () => {
  assert.strictEqual(evaluateFirestoreRule({ path: 'withdrawal_requests/wth_001', operation: 'create', auth: studentAlice }), false);
  assert.strictEqual(evaluateFirestoreRule({ path: 'withdrawal_requests/wth_001', operation: 'update', auth: studentAlice }), false);
});

runTest('Direct client write to processed_referral_payments is 100% BLOCKED', () => {
  assert.strictEqual(evaluateFirestoreRule({ path: 'processed_referral_payments/pay_123', operation: 'create', auth: studentAlice }), false);
});

runTest('Direct client write to course_enrollments is 100% BLOCKED', () => {
  assert.strictEqual(evaluateFirestoreRule({ path: 'course_enrollments/ENR_123', operation: 'create', auth: studentAlice }), false);
});

// ─────────────────────────────────────────────────────────────────────────────
// 6. Unauthenticated & Default Deny
// ─────────────────────────────────────────────────────────────────────────────
runTest('Unauthenticated access to any collection is 100% REJECTED', () => {
  assert.strictEqual(evaluateFirestoreRule({ path: 'registered_users/usr_alice_123', operation: 'get', auth: null }), false);
  assert.strictEqual(evaluateFirestoreRule({ path: 'affiliate_stats/ALICE100', operation: 'get', auth: null }), false);
  assert.strictEqual(evaluateFirestoreRule({ path: 'withdrawal_requests/wth_001', operation: 'get', auth: null }), false);
});

runTest('Arbitrary unapproved collection is denied by default (default deny)', () => {
  assert.strictEqual(evaluateFirestoreRule({ path: 'system_secrets/keys', operation: 'get', auth: customClaimAdmin }), false);
  assert.strictEqual(evaluateFirestoreRule({ path: 'internal_logs/debug', operation: 'get', auth: studentAlice }), false);
});

console.log(`\n🎉 RESULTS: ${passed}/${passed + failed} COMPREHENSIVE SECURITY TESTS PASSED!\n`);
assert.strictEqual(failed, 0, 'All security test cases must pass without error');
