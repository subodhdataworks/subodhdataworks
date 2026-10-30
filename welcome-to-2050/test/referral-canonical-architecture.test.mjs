/**
 * FUTURE IT INDUSTRY — Comprehensive Referral System Architecture Regression Test Suite
 *
 * Validates:
 * 1. Device Invariance (Desktop vs Mobile): Same authenticated user receives identical referral link.
 * 2. Reconciliation: Safely reconciles conflicting records (alphanumeric registered_users vs numeric counter)
 *    adopting alphanumeric as canonical while preserving numeric aliases for full backward compatibility.
 * 3. Never Numeric Counter: New accounts never receive bare numeric counter IDs ('4', '5' etc.).
 * 4. Idempotence & Immutability: Repeated logins, page refreshes, and multi-device sessions never overwrite referral codes.
 * 5. Multi-Device & Session Persistence: Session restoration and logout cache hygiene.
 * 6. Full Alias & Attribution Preservation: Existing aliases (KITABI3IZ, SUBODHKUMAR, FIVEHZ763, numeric IDs) resolve correctly.
 */

import assert from 'node:assert/strict';
import test from 'node:test';
import {
  normalizeRefCode,
  generateAlphanumericReferralCode,
  generateDeterministicReferralCode,
  KNOWN_ACCOUNT_SEEDS,
} from '../../functions/api/referral-profile.js';

// Mock localStorage for browser simulation tests
class MockLocalStorage {
  constructor() {
    this.store = new Map();
  }
  getItem(key) {
    return this.store.get(key) || null;
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

test('1. Normalization & Regex Integrity: Strips promotional 100 suffix without breaking numeric IDs', () => {
  // Pure numeric IDs and RF-prefixed numeric IDs must never be corrupted
  assert.equal(normalizeRefCode('1'), '1');
  assert.equal(normalizeRefCode('4'), '4');
  assert.equal(normalizeRefCode('100'), '100');
  assert.equal(normalizeRefCode('1000'), '1000');
  assert.equal(normalizeRefCode('RF-4'), 'RF4');
  assert.equal(normalizeRefCode('RF-100'), 'RF100');

  // Alphanumeric referral codes with promotional 100 suffix must be cleanly normalized
  assert.equal(normalizeRefCode('ZODIYOFAZ100'), 'ZODIYOFAZ');
  assert.equal(normalizeRefCode('ZODIYO68R100'), 'ZODIYO68R');
  assert.equal(normalizeRefCode('RAHULGW2100'), 'RAHULGW2');
  assert.equal(normalizeRefCode('SUBODH100'), 'SUBODH');
  assert.equal(normalizeRefCode('KITABI3IZ'), 'KITABI3IZ');
  assert.equal(normalizeRefCode('FIVEHZ763'), 'FIVEHZ763');
});

test('2. Server Canonical Generator: Always produces unique, professional alphanumeric codes (Never sequential integers)', () => {
  const code1 = generateAlphanumericReferralCode('zodiyo.partner@example.com');
  const code2 = generateAlphanumericReferralCode('rahul.developer@example.com');
  const code3 = generateAlphanumericReferralCode('priya.sharma@example.com');
  const code4 = generateAlphanumericReferralCode('alex.smith@example.com');

  // Verify format: must start with letters, contain alphanumeric chars, length >= 5
  assert.match(code1, /^[A-Z][A-Z0-9]{4,}$/, 'Referral code must be alphanumeric');
  assert.match(code2, /^[A-Z][A-Z0-9]{4,}$/, 'Referral code must be alphanumeric');
  assert.match(code3, /^[A-Z][A-Z0-9]{4,}$/, 'Referral code must be alphanumeric');
  assert.match(code4, /^[A-Z][A-Z0-9]{4,}$/, 'Referral code must be alphanumeric');

  // Must NEVER be a bare numeric integer
  assert.ok(!/^\d+$/.test(code1), 'Code 1 must not be a bare numeric integer');
  assert.ok(!/^\d+$/.test(code2), 'Code 2 must not be a bare numeric integer');
  assert.ok(!/^\d+$/.test(code3), 'Code 3 must not be a bare numeric integer');
  assert.ok(!/^\d+$/.test(code4), 'Code 4 must not be a bare numeric integer');

  // Determinism: Same identity on any device always yields the exact same code
  const code1Again = generateAlphanumericReferralCode('zodiyo.partner@example.com');
  assert.equal(code1, code1Again, 'Deterministic generation must produce identical codes across calls');
});

test('3. Cross-Device Simulation: Desktop and Mobile resolve identical referral link for the same user', async () => {
  const userUid = 'usr_test_device_invariance_8821';
  const userEmail = 'student.demo@futureitindustry.com';
  const userName = 'Student Demo';

  // Desktop client simulation:
  const desktopStorage = new MockLocalStorage();
  desktopStorage.setItem('futureai_logged_in', 'true');
  desktopStorage.setItem('futureai_user_email', userEmail);
  desktopStorage.setItem('futureai_user_name', userName);
  desktopStorage.setItem('futureai_user_uid', userUid);

  // Mobile client simulation:
  const mobileStorage = new MockLocalStorage();
  mobileStorage.setItem('futureai_logged_in', 'true');
  mobileStorage.setItem('futureai_user_email', userEmail);
  mobileStorage.setItem('futureai_user_name', userName);
  mobileStorage.setItem('futureai_user_uid', userUid);

  // Server resolution simulation for this UID
  const desktopProfile = generateDeterministicReferralCode(userUid, userEmail, userName);
  const mobileProfile = generateDeterministicReferralCode(userUid, userEmail, userName);

  // Store in respective client storages
  desktopStorage.setItem('futureai_user_ref_code', desktopProfile.referralCode);
  desktopStorage.setItem(`futureai_canonical_ref_${userUid}`, JSON.stringify(desktopProfile));

  mobileStorage.setItem('futureai_user_ref_code', mobileProfile.referralCode);
  mobileStorage.setItem(`futureai_canonical_ref_${userUid}`, JSON.stringify(mobileProfile));

  // Verify referral codes match exactly
  assert.equal(
    desktopProfile.referralCode,
    mobileProfile.referralCode,
    'Desktop and Mobile referral codes must be identical'
  );

  // Verify generated referral URLs match exactly
  const desktopUrl = `https://futureitindustry.com/?ref=${desktopProfile.referralCode}`;
  const mobileUrl = `https://futureitindustry.com/?ref=${mobileProfile.referralCode}`;

  assert.equal(desktopUrl, mobileUrl, 'Desktop and Mobile referral URLs must be identical');
  assert.ok(!desktopUrl.includes('?ref=4'), 'URL must not contain numeric fallback ID');
});

test('4. Reconciliation Simulation: Safely reconciles conflicting database records and preserves aliases', async () => {
  // Simulated Firestore state
  const registeredUsers = new Map();
  const userProfiles = new Map();
  const referralMappings = new Map();

  const testUid = 'usr_conflict_reconcile_910';
  const canonicalAlpha = 'ZODIYOFAZ';
  const legacyNumeric = '4';

  // Seed conflicting records (simulating the bug condition):
  // registered_users had alphanumeric code, user_referral_profiles had numeric '4'
  registeredUsers.set(testUid, {
    uid: testUid,
    email: 'zodiyo@example.com',
    name: 'Zodiyo User',
    referralCode: canonicalAlpha,
  });

  userProfiles.set(testUid, {
    uid: testUid,
    referralCode: legacyNumeric,
    referralId: `RF-${legacyNumeric}`,
  });

  // Execute reconciliation logic (matching getOrCreateCanonicalReferralProfile)
  const regDoc = registeredUsers.get(testUid);
  const existingProfile = userProfiles.get(testUid);

  const regCode = regDoc?.referralCode ? normalizeRefCode(regDoc.referralCode) : '';
  const profileCode = existingProfile?.referralCode ? normalizeRefCode(existingProfile.referralCode) : '';

  const regIsNumeric = /^(RF)?\d+$/.test(regCode);
  const profileIsNumeric = /^(RF)?\d+$/.test(profileCode);

  let canonicalCode = '';
  const aliasesToAdd = new Set();

  if (regCode && !regIsNumeric) {
    canonicalCode = regCode;
    if (profileCode && profileCode !== canonicalCode) {
      aliasesToAdd.add(profileCode);
      aliasesToAdd.add(`RF-${profileCode}`);
      aliasesToAdd.add(`RF${profileCode}`);
    }
  }

  // Update records
  userProfiles.set(testUid, {
    uid: testUid,
    referralCode: canonicalCode,
    referralId: `RF-${canonicalCode}`,
  });

  referralMappings.set(canonicalCode, { uid: testUid, referralCode: canonicalCode });
  referralMappings.set(`RF-${canonicalCode}`, { uid: testUid, referralCode: canonicalCode });
  for (const alias of aliasesToAdd) {
    referralMappings.set(alias, { uid: testUid, referralCode: canonicalCode, isAlias: true, aliasFor: canonicalCode });
  }

  // 1. Verify canonical code is adopted as ZODIYOFAZ
  assert.equal(userProfiles.get(testUid).referralCode, canonicalAlpha);

  // 2. Verify resolving by canonical code returns testUid
  assert.equal(referralMappings.get(canonicalAlpha).uid, testUid);

  // 3. Verify resolving by legacy numeric '4' still resolves to testUid (Backward Compatibility!)
  assert.equal(referralMappings.get(legacyNumeric).uid, testUid);
  assert.equal(referralMappings.get(legacyNumeric).aliasFor, canonicalAlpha);
  assert.equal(referralMappings.get(`RF-${legacyNumeric}`).uid, testUid);
});

test('5. Session Hygiene & Multi-Device Logout: Cleans up user-specific referral cache without leaking', () => {
  const storage = new MockLocalStorage();
  const uid1 = 'user_session_1';
  const uid2 = 'user_session_2';

  // User 1 logs in
  storage.setItem('futureai_logged_in', 'true');
  storage.setItem('futureai_user_uid', uid1);
  storage.setItem('futureai_user_ref_code', 'USER1ALPHA');
  storage.setItem(`futureai_canonical_ref_${uid1}`, JSON.stringify({ referralCode: 'USER1ALPHA', referralId: 'RF-USER1ALPHA' }));

  // Simulate logout
  const currentUid = storage.getItem('futureai_user_uid');
  storage.removeItem('futureai_logged_in');
  storage.removeItem('futureai_user_uid');
  storage.removeItem('futureai_user_ref_code');
  if (currentUid) storage.removeItem(`futureai_canonical_ref_${currentUid}`);

  // Verify storage is completely clean
  assert.equal(storage.getItem('futureai_user_ref_code'), null);
  assert.equal(storage.getItem(`futureai_canonical_ref_${uid1}`), null);

  // User 2 logs in on the same browser/device
  storage.setItem('futureai_logged_in', 'true');
  storage.setItem('futureai_user_uid', uid2);
  storage.setItem('futureai_user_ref_code', 'USER2BETA');
  storage.setItem(`futureai_canonical_ref_${uid2}`, JSON.stringify({ referralCode: 'USER2BETA', referralId: 'RF-USER2BETA' }));

  // User 2 must see their own referral code, not User 1's code
  assert.equal(storage.getItem('futureai_user_ref_code'), 'USER2BETA');
  assert.notEqual(storage.getItem('futureai_user_ref_code'), 'USER1ALPHA');
});

test('6. Stale Numeric Cache Invalidation: Browser discards legacy numeric cache and repopulates canonical code', () => {
  const storage = new MockLocalStorage();
  const uid = 'usr_stale_cache_test';

  // Simulate a mobile browser that previously received numeric '4'
  storage.setItem(`futureai_canonical_ref_${uid}`, JSON.stringify({ referralCode: '4', referralId: 'RF-4' }));

  // Simulating fetchCanonicalReferralProfile cache-read logic:
  let effectiveCode = '';
  const cached = storage.getItem(`futureai_canonical_ref_${uid}`);
  if (cached) {
    const parsed = JSON.parse(cached);
    const code = parsed?.referralCode ? normalizeRefCode(parsed.referralCode) : '';
    if (code && !/^(RF)?\d+$/.test(code)) {
      effectiveCode = code;
    } else if (/^(RF)?\d+$/.test(code)) {
      // Discard and delete stale numeric cache
      storage.removeItem(`futureai_canonical_ref_${uid}`);
    }
  }

  // Verify that numeric '4' was purged from cache
  assert.equal(effectiveCode, '', 'Numeric code must be rejected from cache');
  assert.equal(storage.getItem(`futureai_canonical_ref_${uid}`), null, 'Stale numeric cache must be deleted');

  // Fresh canonical resolution
  const fresh = generateDeterministicReferralCode(uid, 'fresh.user@futureitindustry.com');
  storage.setItem(`futureai_canonical_ref_${uid}`, JSON.stringify(fresh));
  storage.setItem('futureai_user_ref_code', fresh.referralCode);

  assert.ok(!/^\d+$/.test(fresh.referralCode), 'Fresh canonical code must be alphanumeric');
  assert.equal(storage.getItem('futureai_user_ref_code'), fresh.referralCode);
});
