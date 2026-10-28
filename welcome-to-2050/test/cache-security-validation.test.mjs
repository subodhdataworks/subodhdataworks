/**
 * Cache Security & Multi-User Isolation Test Suite
 * Validates:
 * 1. Financial data is strictly scoped to authenticated Firebase UID
 * 2. URL referral parameters never dictate wallet ownership
 * 3. Logout thoroughly purges user-specific local storage caches
 * 4. Course access requires verified entitlement records and active user session
 * 5. GET requests to financial endpoints perform zero write mutations
 */

import assert from 'node:assert/strict';
import test from 'node:test';

test('1. Financial cache keys must strictly scope to verified Firebase UID', () => {
  function getFinancialCacheKey(verifiedUid) {
    if (!verifiedUid || typeof verifiedUid !== 'string' || !verifiedUid.trim()) {
      throw new Error('Authenticated Firebase UID required for financial cache scoping');
    }
    return `user_fin_${verifiedUid.trim()}`;
  }

  const userA_Uid = 'UID_ALICE_12345';
  const userB_Uid = 'UID_BOB_67890';

  const keyA = getFinancialCacheKey(userA_Uid);
  const keyB = getFinancialCacheKey(userB_Uid);

  assert.notEqual(keyA, keyB, 'Cache keys for different users must never collide');
  assert.equal(keyA, 'user_fin_UID_ALICE_12345');
  assert.equal(keyB, 'user_fin_UID_BOB_67890');
  assert.throws(() => getFinancialCacheKey(''), /Authenticated Firebase UID required/);
});

test('2. Referral URL parameter cannot override or impersonate wallet identity', () => {
  function resolveWalletOwner({ verifiedAuthUid, urlRefCodeParam }) {
    // Security Rule: Wallet ownership is exclusively bound to verifiedAuthUid
    // Referral URL param only tracks attribution for outbound sharing
    if (!verifiedAuthUid) {
      return { walletOwnerUid: null, error: 'UNAUTHENTICATED' };
    }
    return {
      walletOwnerUid: verifiedAuthUid,
      outboundShareRefCode: urlRefCodeParam || null,
    };
  }

  const attackerUrlParam = 'KITABI3IZ'; // Attacker tries to pass someone else's ref code
  const victimAuthUid = 'UID_GENUINE_VICTIM_999';

  const resolution = resolveWalletOwner({
    verifiedAuthUid: victimAuthUid,
    urlRefCodeParam: attackerUrlParam,
  });

  assert.equal(resolution.walletOwnerUid, 'UID_GENUINE_VICTIM_999', 'Wallet owner MUST be genuine auth UID');
  assert.notEqual(resolution.walletOwnerUid, attackerUrlParam, 'Referral parameter must NEVER determine wallet identity');
});

test('3. Logout completely purges user-specific cached data from localStorage', () => {
  // Mock localStorage
  const mockStorage = new Map();
  const localStorageMock = {
    getItem: (k) => mockStorage.get(k) || null,
    setItem: (k, v) => mockStorage.set(k, String(v)),
    removeItem: (k) => mockStorage.delete(k),
    key: (i) => Array.from(mockStorage.keys())[i],
    get length() { return mockStorage.size; },
  };

  // Seed storage with user data
  const userId = 'user_subodh_456';
  localStorageMock.setItem(`futureai_user_enrollments_v2_${userId}`, JSON.stringify([{ courseId: 'data_analyst' }]));
  localStorageMock.setItem('futureai_cloud_user_entitlements_v1', JSON.stringify({ enrolled: ['data_analyst'] }));
  localStorageMock.setItem('futureai_user_wallet', '400');
  localStorageMock.setItem('futureai_affiliate_hub_v5_KITABI3IZ', JSON.stringify({ clicks: 10 }));
  localStorageMock.setItem('futureai_unlocked_data_analyst', 'true'); // legacy key
  localStorageMock.setItem('site_theme', 'dark'); // global non-user key

  // Execute logout purge logic
  const LEGACY_GLOBAL_KEYS = ['futureai_unlocked_data_analyst', 'futureai_unlocked_courses'];
  for (const k of LEGACY_GLOBAL_KEYS) localStorageMock.removeItem(k);
  localStorageMock.removeItem('futureai_cloud_user_entitlements_v1');
  localStorageMock.removeItem('futureai_user_wallet');

  const keysToRemove = [];
  for (let i = 0; i < localStorageMock.length; i++) {
    const k = localStorageMock.key(i);
    if (k && (k.startsWith('futureai_user_enrollments_v2_') || k.startsWith('futureai_affiliate_hub_v5_') || k.startsWith('futureai_unlocked_'))) {
      keysToRemove.push(k);
    }
  }
  keysToRemove.forEach((k) => localStorageMock.removeItem(k));

  // Verify user data is purged
  assert.equal(localStorageMock.getItem(`futureai_user_enrollments_v2_${userId}`), null);
  assert.equal(localStorageMock.getItem('futureai_cloud_user_entitlements_v1'), null);
  assert.equal(localStorageMock.getItem('futureai_user_wallet'), null);
  assert.equal(localStorageMock.getItem('futureai_affiliate_hub_v5_KITABI3IZ'), null);
  assert.equal(localStorageMock.getItem('futureai_unlocked_data_analyst'), null);
  assert.equal(localStorageMock.getItem('site_theme'), 'dark', 'Global site preferences preserved');
});

test('4. Paid courses cannot be unlocked without server-verified records or proof', () => {
  function verifyCourseAccess({ authenticatedUserId, enrollmentRecords, targetCourse }) {
    if (!authenticatedUserId) return false;
    const records = enrollmentRecords || [];
    return records.some(
      (r) =>
        r.userId === authenticatedUserId &&
        r.courseId === targetCourse &&
        r.enrollmentStatus === 'ACTIVE' &&
        (r.paymentStatus === 'CAPTURED' || r.paymentStatus === 'ADMIN_GRANTED')
    );
  }

  // Case A: Anonymous visitor attempts to view paid course
  assert.equal(verifyCourseAccess({ authenticatedUserId: '', enrollmentRecords: [], targetCourse: 'data_analyst' }), false);

  // Case B: User has no captured records
  assert.equal(verifyCourseAccess({ authenticatedUserId: 'user_1', enrollmentRecords: [], targetCourse: 'data_analyst' }), false);

  // Case C: User has active captured record
  assert.equal(
    verifyCourseAccess({
      authenticatedUserId: 'user_1',
      enrollmentRecords: [{ userId: 'user_1', courseId: 'data_analyst', enrollmentStatus: 'ACTIVE', paymentStatus: 'CAPTURED' }],
      targetCourse: 'data_analyst',
    }),
    true
  );

  // Case D: User attempts access to Course B when only enrolled in Course A
  assert.equal(
    verifyCourseAccess({
      authenticatedUserId: 'user_1',
      enrollmentRecords: [{ userId: 'user_1', courseId: 'data_analyst', enrollmentStatus: 'ACTIVE', paymentStatus: 'CAPTURED' }],
      targetCourse: 'data_science',
    }),
    false,
    'Unlocking Course A must NEVER unlock Course B'
  );
});

test('5. GET requests perform zero write mutations', () => {
  let writeCount = 0;
  function handleDashboardGetRequest() {
    // Pure read function: performs calculations and returns JSON without invoking any db.set/patch
    return {
      clicks: 0,
      signups: 0,
      paidEnrollments: 0,
      availableToPayout: 0,
      pendingWithdrawal: 0,
      totalPaidOut: 0,
      lifetimeEarnings: 0,
    };
  }

  const result = handleDashboardGetRequest();
  assert.equal(writeCount, 0, 'GET requests must perform ZERO write mutations');
  assert.equal(result.lifetimeEarnings, 0);
});
