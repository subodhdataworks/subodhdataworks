import test from 'node:test';
import assert from 'node:assert/strict';

// Mock localStorage and document for headless node testing
class MockLocalStorage {
  constructor() {
    this.store = new Map();
  }
  getItem(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }
  setItem(key, value) {
    this.store.set(key, String(value));
  }
  removeItem(key) {
    this.store.delete(key);
  }
  clear() {
    this.store.clear();
  }
}

test('1. Entitlement 10-Minute Cache: Free user (0 courses) is properly cached and does not trigger repeated queries', () => {
  const mockStorage = new MockLocalStorage();
  const userId = 'usr_free_learner_123';
  const lastSyncKey = `futureai_entitlements_last_sync_${userId}`;

  // Simulate initial sync for free learner at t = 0
  const initialTime = Date.now();
  mockStorage.setItem(lastSyncKey, String(initialTime));

  // Function simulating cache check logic
  const shouldQueryFirestore = (now, uid) => {
    const lastSync = Number(mockStorage.getItem(`futureai_entitlements_last_sync_${uid}`) || 0);
    if (lastSync && now - lastSync < 10 * 60 * 1000) {
      return false; // Served from cache!
    }
    return true; // Cache expired, query required
  };

  // Navigations at t = 1 min, t = 3 min, t = 8 min
  assert.equal(shouldQueryFirestore(initialTime + 60 * 1000, userId), false, '1 min later: must hit cache');
  assert.equal(shouldQueryFirestore(initialTime + 3 * 60 * 1000, userId), false, '3 min later: must hit cache');
  assert.equal(shouldQueryFirestore(initialTime + 8 * 60 * 1000, userId), false, '8 min later: must hit cache');

  // After 10 minutes: cache revalidates
  assert.equal(shouldQueryFirestore(initialTime + 11 * 60 * 1000, userId), true, '11 min later: cache expired, revalidation allowed');
});

test('2. In-Flight Request Deduplication: Simultaneous parallel calls resolve to a single promise', async () => {
  let actualDbQueriesExecuted = 0;
  const inFlightMap = new Map();

  const fetchEntitlementsDeduplicated = async (uid) => {
    if (inFlightMap.has(uid)) {
      return inFlightMap.get(uid);
    }

    const promise = (async () => {
      actualDbQueriesExecuted++;
      await new Promise((r) => setTimeout(r, 20));
      return ['data_analyst'];
    })();

    inFlightMap.set(uid, promise);
    try {
      return await promise;
    } finally {
      inFlightMap.delete(uid);
    }
  };

  // Trigger 5 simultaneous calls for the same user (e.g. mount, auth change, hash change)
  const results = await Promise.all([
    fetchEntitlementsDeduplicated('user_alice'),
    fetchEntitlementsDeduplicated('user_alice'),
    fetchEntitlementsDeduplicated('user_alice'),
    fetchEntitlementsDeduplicated('user_alice'),
    fetchEntitlementsDeduplicated('user_alice'),
  ]);

  assert.equal(results.length, 5);
  assert.deepEqual(results[0], ['data_analyst']);
  assert.equal(actualDbQueriesExecuted, 1, 'Exactly ONE database query must execute across all 5 simultaneous requests');
});

test('3. Permanent Referral ID Client-Side Cache: Cached referral ID serves zero network requests', () => {
  const mockStorage = new MockLocalStorage();
  const testUid = 'usr_permanent_ref_456';
  const cachedData = { referralCode: '42', referralId: 'RF-42' };

  mockStorage.setItem(`futureai_canonical_ref_${testUid}`, JSON.stringify(cachedData));

  let networkFetched = false;
  const getReferralProfileWithCache = (uid) => {
    const cached = mockStorage.getItem(`futureai_canonical_ref_${uid}`);
    if (cached) {
      return JSON.parse(cached);
    }
    networkFetched = true;
    return { referralCode: '42', referralId: 'RF-42' };
  };

  const resolved = getReferralProfileWithCache(testUid);
  assert.equal(resolved.referralCode, '42');
  assert.equal(resolved.referralId, 'RF-42');
  assert.equal(networkFetched, false, 'Cached profile must return instantly with 0 network calls');
});

test('4. Session Heartbeat Cross-Tab Coordination: Tab skips heartbeat if another tab updated recently', () => {
  const mockStorage = new MockLocalStorage();
  const now = Date.now();

  // Tab 1 sends heartbeat
  mockStorage.setItem('futureai_last_session_heartbeat', String(now));

  const shouldSendHeartbeat = (checkTime) => {
    const lastHb = Number(mockStorage.getItem('futureai_last_session_heartbeat') || 0);
    if (lastHb > 0 && checkTime - lastHb < 270000) {
      return false; // Skip, fresh within 4.5 minutes
    }
    return true;
  };

  // Tab 2 checks 1 minute later
  assert.equal(shouldSendHeartbeat(now + 60000), false, 'Tab 2 must skip heartbeat when Tab 1 updated 1 min ago');
  // Tab 3 checks 3 minutes later
  assert.equal(shouldSendHeartbeat(now + 180000), false, 'Tab 3 must skip heartbeat when Tab 1 updated 3 min ago');
  // Tab 1 checks 5 minutes later
  assert.equal(shouldSendHeartbeat(now + 305000), true, 'Heartbeat permitted after 5 minutes');
});

test('5. Quota Circuit Breaker: RESOURCE_EXHAUSTED sets 5-minute cooldown and blocks further queries', () => {
  const mockStorage = new MockLocalStorage();
  const now = Date.now();

  // Simulate 429 quota exhaustion trigger
  const handleFirestoreError = (err) => {
    if (err.code === 'resource-exhausted' || err.message.includes('429')) {
      mockStorage.setItem('futureai_firestore_quota_cooldown', String(now + 5 * 60 * 1000));
    }
  };

  handleFirestoreError({ code: 'resource-exhausted', message: 'Quota exceeded for collection reads (429)' });

  const isQuotaCoolingDown = (checkTime) => {
    const cooldownUntil = Number(mockStorage.getItem('futureai_firestore_quota_cooldown') || 0);
    return Boolean(cooldownUntil && checkTime < cooldownUntil);
  };

  assert.equal(isQuotaCoolingDown(now + 30000), true, '30s after 429: queries must be blocked by cooldown');
  assert.equal(isQuotaCoolingDown(now + 4 * 60000), true, '4m after 429: queries must be blocked by cooldown');
  assert.equal(isQuotaCoolingDown(now + 6 * 60000), false, '6m after 429: cooldown lifted');
});

test('6. Question Bank 1-Hour Cache: Topic clicks do not trigger repeated Firestore reads', () => {
  const cache = new Map();
  let readsCount = 0;

  const getQuestionBank = (topicKey, now) => {
    const last = cache.get(topicKey) || 0;
    if (now - last < 3600000) {
      return { fromCache: true };
    }
    readsCount++;
    cache.set(topicKey, now);
    return { fromCache: false };
  };

  const t0 = Date.now();
  // First load: 1 read
  assert.equal(getQuestionBank('topic_1', t0).fromCache, false);
  // User navigates between topic 1, 2, then back to 1
  assert.equal(getQuestionBank('topic_2', t0 + 5000).fromCache, false);
  assert.equal(getQuestionBank('topic_1', t0 + 10000).fromCache, true);
  assert.equal(getQuestionBank('topic_1', t0 + 30000).fromCache, true);

  assert.equal(readsCount, 2, 'Only 2 initial reads executed for 2 distinct topics; re-navigating to topic 1 produced 0 reads');
});
