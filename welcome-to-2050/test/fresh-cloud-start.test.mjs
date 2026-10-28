import assert from 'node:assert/strict';

// Mock browser environment for Fresh Cloud Start testing
class MockLocalStorage {
  constructor() {
    this.store = new Map();
  }
  getItem(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }
  setItem(key, value) {
    this.store.set(String(key), String(value));
  }
  removeItem(key) {
    this.store.delete(String(key));
  }
  clear() {
    this.store.clear();
  }
  get length() {
    return this.store.size;
  }
  key(i) {
    return Array.from(this.store.keys())[i] || null;
  }
}

globalThis.localStorage = new MockLocalStorage();
globalThis.sessionStorage = new MockLocalStorage();
globalThis.window = {
  dispatchEvent: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
};
globalThis.Event = class Event { constructor(type) { this.type = type; } };
globalThis.CustomEvent = class CustomEvent { constructor(type, init) { this.type = type; this.detail = init?.detail; } };

console.log('\n🚀 Starting Fresh Cloud Start (v6_clean_cloud) Verification Test Suite...\n');

// 1. Setup pre-reset state with test accounts and simulated historical data
const ownerTestEmail = 'subodhkumar@gmail.com';
const ownerTestName = 'Subodh Kumar';
const ownerTestRefCode = 'SUBODHKUMAR';
const ownerTestUid = 'user_subodh_123';

// Setup legitimate user identity and learning progress that MUST BE PRESERVED
localStorage.setItem('futureai_logged_in', 'true');
localStorage.setItem('futureai_user_email', ownerTestEmail);
localStorage.setItem('futureai_user_name', ownerTestName);
localStorage.setItem('futureai_user_uid', ownerTestUid);
localStorage.setItem('futureai_python_challenges_progress_SUBODHKUMAR', JSON.stringify({ completed: 5, score: 95 }));
localStorage.setItem('futureai_ats_last_score', '88');
localStorage.setItem('futureai_activity_lang', 'en');

// Setup obsolete test data that MUST BE RESET
localStorage.setItem('futureai_user_wallet', '450');
localStorage.setItem('futureai_unlocked_courses', JSON.stringify(['data_analyst', 'python-ai']));
localStorage.setItem('futureai_unlocked_data_analyst', 'true');
localStorage.setItem('futureai_course_enrolled', 'true');
localStorage.setItem('futureai_cloud_user_entitlements_v1', JSON.stringify({
  [ownerTestUid]: {
    email: ownerTestEmail,
    unlockedCourses: ['data_analyst'],
    lastPaymentId: 'pay_test_123'
  }
}));
localStorage.setItem('futureai_user_enrollments_v2_user_subodh_123', JSON.stringify([
  { id: 'enr_test', userId: ownerTestUid, courseId: 'data_analyst', enrollmentStatus: 'ACTIVE', paymentStatus: 'CAPTURED' }
]));

// Setup test affiliate hubs with mock earnings
localStorage.setItem('futureai_affiliate_hub_v5_SUBODHKUMAR', JSON.stringify({
  availableBalance: 450,
  pendingBalance: 100,
  totalEarned: 550,
  totalPaid: 0,
  clicks: 12,
  signups: 3,
  paidEnrollments: 4,
  withdrawals: [{ id: 'wth_test_1', amount: 200, status: 'UNDER_REVIEW' }]
}));

// Setup registered user registry
localStorage.setItem('futureai_master_user_registry_v1', JSON.stringify([
  {
    uid: ownerTestUid,
    name: ownerTestName,
    email: ownerTestEmail,
    enrolledCourses: ['data_analyst'],
    isEnrolled: true,
  },
  {
    uid: 'real_student_456',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    enrolledCourses: ['ms_office_copilot'],
    isEnrolled: true,
  }
]));

// Dynamically test the migration function
const { runFreshCloudStartResetMigrationOnce, FRESH_CLOUD_EPOCH, FRESH_CLOUD_REPORT_KEY, ARCHIVED_TEST_WITHDRAWALS_KEY } =
  await import('../src/services/realAuthService.ts');

const { clearTestUserEnrollments } = await import('../src/services/courseUnlockService.ts');

// Execute migration
const report = runFreshCloudStartResetMigrationOnce();

// Check 1: Return status and epoch
assert.equal(report.epoch, FRESH_CLOUD_EPOCH, 'Report epoch must match v6 epoch');
assert.equal(report.status, 'COMPLETED', 'Migration report must return COMPLETED on first run');
console.log('✅ PASS 1: Fresh Cloud Start migration executed and returned COMPLETED status.');

// Check 2: Wallet balance reset to 0
const walletBalance = localStorage.getItem('futureai_user_wallet');
assert.equal(walletBalance, '0', 'Wallet balance must be set to 0');
const subodhHub = JSON.parse(localStorage.getItem('futureai_affiliate_hub_v5_SUBODHKUMAR'));
assert.equal(subodhHub.availableBalance, 0, 'SUBODHKUMAR availableBalance must be 0');
assert.equal(subodhHub.pendingBalance, 0, 'SUBODHKUMAR pendingBalance must be 0');
assert.equal(subodhHub.totalEarned, 0, 'SUBODHKUMAR totalEarned must be 0');
assert.equal(subodhHub.clicks, 0, 'SUBODHKUMAR clicks must be 0');
assert.equal(subodhHub.paidEnrollments, 0, 'SUBODHKUMAR paidEnrollments must be 0');
console.log('✅ PASS 2: Test wallet balances, lifetime earnings, and metrics successfully reset to ₹0.');

// Check 3: Historical test withdrawals archived and cleared from active queue
assert.equal(subodhHub.withdrawals.length, 0, 'Active withdrawal list in hub must be empty (0)');
const archivedRaw = localStorage.getItem(ARCHIVED_TEST_WITHDRAWALS_KEY);
assert.ok(archivedRaw, 'Archived test withdrawals must exist');
console.log('✅ PASS 3: Historical test withdrawals safely archived for audit and active queue cleared to 0.');

// Check 4: Course enrollments and local unlock flags removed for test user
assert.equal(localStorage.getItem('futureai_unlocked_courses'), null, 'Legacy unlocked courses key must be purged');
assert.equal(localStorage.getItem('futureai_unlocked_data_analyst'), null, 'Individual unlock flag must be purged');
assert.equal(localStorage.getItem('futureai_course_enrolled'), null, 'Generic enrolled flag must be purged');
assert.equal(localStorage.getItem('futureai_cloud_user_entitlements_v1'), null, 'Legacy entitlement cache must be purged');
assert.equal(localStorage.getItem('futureai_user_enrollments_v2_user_subodh_123'), null, 'Test user enrollment cache must be purged');
console.log('✅ PASS 4: Test course enrollments and obsolete local unlock flags completely purged.');

// Check 5: Genuine customer records strictly preserved
const registry = JSON.parse(localStorage.getItem('futureai_master_user_registry_v1'));
const testUserInReg = registry.find(u => u.uid === ownerTestUid);
const realUserInReg = registry.find(u => u.uid === 'real_student_456');
assert.deepEqual(testUserInReg.enrolledCourses, [], 'Test user course list must be reset to []');
assert.equal(testUserInReg.isEnrolled, false, 'Test user isEnrolled must be false');
assert.deepEqual(realUserInReg.enrolledCourses, ['ms_office_copilot'], 'Genuine user courses must remain completely untouched');
assert.equal(realUserInReg.isEnrolled, true, 'Genuine user enrollment flag must remain untouched');
console.log('✅ PASS 5: Genuine customer records preserved untouched; only confirmed test accounts reset.');

// Check 6: User authentication, session, profile & learning progress strictly preserved
assert.equal(localStorage.getItem('futureai_logged_in'), 'true', 'User login session must remain active');
assert.equal(localStorage.getItem('futureai_user_email'), ownerTestEmail, 'User email must remain intact');
assert.equal(localStorage.getItem('futureai_user_name'), ownerTestName, 'User name must remain intact');
assert.equal(localStorage.getItem('futureai_user_uid'), ownerTestUid, 'User UID must remain intact');
const pyProgress = JSON.parse(localStorage.getItem('futureai_python_challenges_progress_SUBODHKUMAR'));
assert.equal(pyProgress.completed, 5, 'Python challenge progress must remain intact');
assert.equal(localStorage.getItem('futureai_ats_last_score'), '88', 'ATS Resume scores must remain intact');
console.log('✅ PASS 6: User login session, identity, Python challenges progress, and ATS data 100% preserved.');

// Check 7: Sentinel flag written and idempotency guaranteed
assert.equal(localStorage.getItem(FRESH_CLOUD_EPOCH), 'true', 'Sentinel flag must be written');
const secondRunReport = runFreshCloudStartResetMigrationOnce();
assert.equal(secondRunReport.status, 'ALREADY_COMPLETED', 'Second run must be idempotent (ALREADY_COMPLETED)');
console.log('✅ PASS 7: Version-based sentinel flag verified; repeated executions are 100% idempotent.');

console.log('\n🎉 ALL 7/7 FRESH CLOUD START SYSTEM VERIFICATION TESTS PASSED SUCCESSFULLY!\n');
