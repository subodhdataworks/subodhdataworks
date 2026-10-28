import assert from 'node:assert';

console.log('🚀 Running Comprehensive Rules Test Suite on Official Firestore Emulator...');
const host = process.env.FIRESTORE_EMULATOR_HOST || '127.0.0.1:8080';
const projectId = 'future-it-industry-f97af';
const baseUrl = `http://${host}/v1/projects/${projectId}/databases/(default)/documents`;

let passed = 0;

async function check(name, fn) {
  try {
    await fn();
    console.log(`✅ [OFFICIAL EMULATOR] ${name}`);
    passed++;
  } catch (err) {
    console.error(`❌ [OFFICIAL EMULATOR] FAILED: ${name}`);
    console.error(err);
    process.exit(1);
  }
}

async function runAll() {
  // Test 1: Unauthenticated read on affiliate_stats -> MUST BE 403
  await check('Unauthenticated read on affiliate_stats is blocked (403)', async () => {
    const res = await fetch(`${baseUrl}/affiliate_stats/ALICE100`);
    assert.strictEqual(res.status, 403);
  });

  // Test 2: Unauthenticated read on withdrawal_requests -> MUST BE 403
  await check('Unauthenticated read on withdrawal_requests is blocked (403)', async () => {
    const res = await fetch(`${baseUrl}/withdrawal_requests/wth_001`);
    assert.strictEqual(res.status, 403);
  });

  // Test 3: Unauthenticated read on course_enrollments -> MUST BE 403
  await check('Unauthenticated read on course_enrollments is blocked (403)', async () => {
    const res = await fetch(`${baseUrl}/course_enrollments/enr_001`);
    assert.strictEqual(res.status, 403);
  });

  // Test 4: Unauthenticated read on registered_users -> MUST BE 403
  await check('Unauthenticated read on registered_users is blocked (403)', async () => {
    const res = await fetch(`${baseUrl}/registered_users/usr_001`);
    assert.strictEqual(res.status, 403);
  });

  // Test 5: Client write to affiliate_stats -> MUST BE 403
  await check('Client write to affiliate_stats is blocked (403)', async () => {
    const res = await fetch(`${baseUrl}/affiliate_stats/ALICE100`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: { availableBalance: { integerValue: "99999" } } })
    });
    assert.strictEqual(res.status, 403);
  });

  // Test 6: Client write to withdrawal_requests -> MUST BE 403
  await check('Client write to withdrawal_requests is blocked (403)', async () => {
    const res = await fetch(`${baseUrl}/withdrawal_requests/wth_fake`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: { amount: { integerValue: "5000" } } })
    });
    assert.strictEqual(res.status, 403);
  });

  // Test 7: Client write to course_enrollments -> MUST BE 403
  await check('Client write to course_enrollments is blocked (403)', async () => {
    const res = await fetch(`${baseUrl}/course_enrollments/enr_fake`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: { status: { stringValue: "ACTIVE" } } })
    });
    assert.strictEqual(res.status, 403);
  });

  // Test 8: Arbitrary unknown collection access -> MUST BE 403 (Default Deny)
  await check('Arbitrary unapproved collection is blocked by default deny (403)', async () => {
    const res = await fetch(`${baseUrl}/server_secrets/env`);
    assert.strictEqual(res.status, 403);
  });

  console.log(`\n🎉 ALL ${passed}/${passed} OFFICIAL FIRESTORE EMULATOR RUNTIME CHECKS PASSED!\n`);
}

runAll().catch((err) => {
  console.error('Test runner fatal:', err);
  process.exit(1);
});
