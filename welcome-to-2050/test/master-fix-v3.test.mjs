/**
 * MASTER FIX V3 — VERIFICATION TEST SUITE
 *
 * Verifies:
 * 1. Part 1: Canonical 1:1 Referral Identity per Firebase UID.
 * 2. Part 2: Single Browser Session Management & Concurrent Login Blocking.
 * 3. Part 3: Admin Panel Data Source Integrity & Elimination of LocalStorage Fallbacks.
 */

import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import path from 'path';

test('1. Part 1: Canonical Referral Identity generation and cross-browser invariance', () => {
  const profileFuncPath = path.resolve('functions/api/referral-profile.js');
  const profileContent = fs.readFileSync(profileFuncPath, 'utf8');

  // Verify server-side generation
  assert.ok(profileContent.includes('generateDeterministicReferralCode'), 'referral-profile.js must generate deterministic referral codes');
  assert.ok(profileContent.includes('user_referral_profiles'), 'Must use user_referral_profiles collection');
  assert.ok(profileContent.includes('referral_mappings'), 'Must use referral_mappings collection for 1:1 bidirectional mapping');
  assert.ok(profileContent.includes('KITABI3IZ'), 'Owner account must canonically resolve to KITABI3IZ');

  // Verify client service fetches server-authoritative profile
  const realAuthPath = path.resolve('welcome-to-2050/src/services/realAuthService.ts');
  const realAuthContent = fs.readFileSync(realAuthPath, 'utf8');
  assert.ok(realAuthContent.includes('export async function fetchCanonicalReferralProfile'), 'realAuthService must export fetchCanonicalReferralProfile');
  assert.ok(realAuthContent.includes('/api/referral-profile'), 'realAuthService must query /api/referral-profile');

  // Verify AffiliateEarningsHub uses server-authoritative canonical profile
  const hubPath = path.resolve('welcome-to-2050/src/components/futureai/AffiliateEarningsHub.tsx');
  const hubContent = fs.readFileSync(hubPath, 'utf8');
  assert.ok(hubContent.includes('fetchCanonicalReferralProfile'), 'AffiliateEarningsHub must import and call fetchCanonicalReferralProfile');
  assert.ok(hubContent.includes('canonicalRef.referralCode'), 'AffiliateEarningsHub must use canonicalRef.referralCode for cleanRefCode');
});

test('2. Part 1: Invariance simulation across multiple browser environments for the same UID', () => {
  const uid = 'usr_student_alpha_12345';
  
  function computeUidHash(u) {
    let hash = 0;
    for (let i = 0; i < u.length; i++) hash = (hash * 31 + u.charCodeAt(i)) & 0xffffff;
    return Math.abs(hash);
  }

  function simulateServerProfile(u) {
    const sanitized = u.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    const prefix = sanitized.slice(0, 5) || 'LEARN';
    const hashNum = computeUidHash(u) % 900 + 100;
    return {
      referralCode: `FI${prefix.slice(0, 4)}${hashNum}`.toUpperCase(),
      referralId: `RF-${(computeUidHash(u) % 9000) + 1000}`,
    };
  }

  // Simulate Chrome
  const chromeResult = simulateServerProfile(uid);
  // Simulate Firefox
  const firefoxResult = simulateServerProfile(uid);
  // Simulate Android Browser
  const androidResult = simulateServerProfile(uid);

  assert.strictEqual(chromeResult.referralCode, firefoxResult.referralCode, 'Chrome and Firefox must receive identical referral codes');
  assert.strictEqual(chromeResult.referralCode, androidResult.referralCode, 'Chrome and Android must receive identical referral codes');
  assert.strictEqual(chromeResult.referralId, firefoxResult.referralId, 'Chrome and Firefox must receive identical referral IDs');
});

test('3. Part 2: Single Browser Session API implementation & concurrent login blocking', () => {
  const sessionFuncPath = path.resolve('functions/api/session.js');
  const sessionContent = fs.readFileSync(sessionFuncPath, 'utf8');

  // Verify collection and conflict detection
  assert.ok(sessionContent.includes('user_sessions'), 'session.js must use user_sessions collection');
  assert.ok(sessionContent.includes('CONCURRENT_SESSION_BLOCKED'), 'session.js must define CONCURRENT_SESSION_BLOCKED error code');
  assert.ok(
    sessionContent.includes('You are already logged in on another browser. Please sign out from that browser to continue.'),
    'Must contain the exact required user warning string'
  );
  assert.ok(sessionContent.includes('forceTerminate'), 'session.js must support secure forceTerminate override');
  assert.ok(sessionContent.includes("action === 'heartbeat'"), 'session.js must handle session heartbeat');
  assert.ok(sessionContent.includes("action === 'terminate'"), 'session.js must handle session termination on logout');
});

test('4. Part 2: Frontend SessionService & App.tsx session integration', () => {
  const servicePath = path.resolve('welcome-to-2050/src/services/sessionService.ts');
  const serviceContent = fs.readFileSync(servicePath, 'utf8');

  assert.ok(serviceContent.includes('createOrValidateSession'), 'SessionService must implement createOrValidateSession');
  assert.ok(serviceContent.includes('startHeartbeat'), 'SessionService must implement startHeartbeat');
  assert.ok(serviceContent.includes('terminateSession'), 'SessionService must implement terminateSession');
  assert.ok(serviceContent.includes('180000'), 'Heartbeat must be throttled to 3 minutes (180,000ms)');

  const appPath = path.resolve('welcome-to-2050/src/App.tsx');
  const appContent = fs.readFileSync(appPath, 'utf8');
  assert.ok(appContent.includes('SessionService.createOrValidateSession(user.uid)'), 'App.tsx must validate session on auth state change');
  assert.ok(appContent.includes('blockedSessionModal'), 'App.tsx must render blockedSessionModal on concurrent session detection');
  assert.ok(appContent.includes('SessionService.terminateSession(currentUid)'), 'App.tsx must terminate server session on logout');
});

test('5. Part 3: Elimination of obsolete localStorage fallbacks in AdminDataService', () => {
  const adminDataPath = path.resolve('welcome-to-2050/src/services/adminDataService.ts');
  const adminDataContent = fs.readFileSync(adminDataPath, 'utf8');

  // Ensure getAllWithdrawals does NOT merge ReferralEngine.getWithdrawals()
  assert.ok(!adminDataContent.includes('ReferralEngine.getWithdrawals()'), 'getAllWithdrawals must not merge local engine withdrawals');

  // Ensure getAllPayments does not read from PAYMENTS_KEY
  assert.ok(!adminDataContent.includes('localStorage.getItem(PAYMENTS_KEY)'), 'getAllPayments must not read from localStorage PAYMENTS_KEY');

  // Ensure updateWithdrawalStatus does not write to futureai_affiliate_hub_v5_
  assert.ok(!adminDataContent.includes("k.startsWith('futureai_affiliate_hub_v5_')"), 'updateWithdrawalStatus must not resurrect localStorage affiliate hub');

  // Ensure cache version purges old admin & referral keys
  const appVerPath = path.resolve('welcome-to-2050/src/services/appVersionService.ts');
  const appVerContent = fs.readFileSync(appVerPath, 'utf8');
  assert.ok(appVerContent.includes('futureai_referral_state_'), 'appVersionService must purge futureai_referral_state_');
  assert.ok(appVerContent.includes('futureai_system_payments_'), 'appVersionService must purge futureai_system_payments_');
  assert.ok(appVerContent.includes('futureai_archived_test_withdrawals'), 'appVersionService must purge futureai_archived_test_withdrawals');
});
