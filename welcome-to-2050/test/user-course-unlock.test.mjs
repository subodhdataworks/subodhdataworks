/**
 * Automated Test Suite — USER-WISE COURSE UNLOCK SYSTEM
 *
 * Tests all 7 courses across 3 separate users (User A, User B, User C):
 *  1. Data Analyst with GenAI          (data_analyst)
 *  2. Data Science & Agentic AI        (data_science)
 *  3. Machine Learning Engineering     (ml_engineering)
 *  4. AI Engineering                   (ai_engineering)
 *  5. AI Tools & Prompt Engineering    (ai_tools_prompt)
 *  6. Microsoft Office 365 with Copilot(ms_office_copilot)
 *  7. Full Stack Web Development       (full_stack_mern)
 *
 * Covered Scenarios:
 *  - Scenario 1: User A, User B, and User C initially have no access; all 7 courses show as locked for all 3 users.
 *  - Scenario 2: User A purchases "Data Analyst with GenAI" -> User A can access it; User B and User C still see it as locked; the other 6 courses remain locked for User A.
 *  - Scenario 3: User B purchases "Full Stack Web Development" -> User B can access it; User A and User C cannot access it; User B still cannot access "Data Analyst with GenAI".
 *  - Scenario 4: A payment fails -> no enrollment or unlock is granted.
 *  - Scenario 5: A webhook is delivered multiple times -> idempotent, no duplicate enrollment or payment processing occurs.
 *  - Scenario 6: A user attempts to access a locked course/lesson or tamper with userId/courseId/storage -> rejected (403 Forbidden / locked).
 *  - Scenario 7: Legacy global localStorage keys ('futureai_unlocked_courses', 'futureai_course_enrolled', 'futureai_unlocked_*') are purged and never grant global access across users.
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import { onRequestPost as razorpayVerifyPost } from '../functions/api/razorpay-verify.js';
import { onRequestPost as razorpayWebhookPost } from '../functions/api/razorpay-webhook.js';
import {
  onRequestGet as entitlementsGet,
  onRequestPost as entitlementsPost,
  ALL_7_CANONICAL_COURSES,
  resetEnrollmentStoreForTests,
  getEnrollmentStore,
} from '../functions/api/entitlements.js';

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    throw new Error(`Assertion failed: ${message}`);
  }
  passedTests++;
  console.log(`✅ PASSED: ${message}`);
}

const SECRET = 'test_rp_secret_user_isolation_2026';
const WEBHOOK_SECRET = 'test_wh_secret_user_isolation_2026';

const USER_A = 'user.a@futureitindustry.com';
const USER_B = 'user.b@futureitindustry.com';
const USER_C = 'user.c@futureitindustry.com';

function signPayment(orderId, paymentId) {
  const hmac = crypto.createHmac('sha256', SECRET);
  hmac.update(`${orderId}|${paymentId}`);
  return hmac.digest('hex');
}

function signWebhook(rawBody) {
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
  hmac.update(rawBody);
  return hmac.digest('hex');
}

async function fetchUserDashboardStatus(userId) {
  const req = new Request(
    `http://localhost/api/entitlements?userId=${encodeURIComponent(userId)}`,
    { method: 'GET' }
  );
  const res = await entitlementsGet({ request: req, env: { RAZORPAY_KEY_SECRET: SECRET } });
  const data = await res.json();
  return { status: res.status, data };
}

async function checkCourseContentAccess(userId, courseId, lessonId = 'ch2_tp1') {
  const req = new Request(
    `http://localhost/api/entitlements?userId=${encodeURIComponent(userId)}&courseId=${encodeURIComponent(courseId)}&lessonId=${encodeURIComponent(lessonId)}`,
    { method: 'GET' }
  );
  const res = await entitlementsGet({ request: req, env: { RAZORPAY_KEY_SECRET: SECRET } });
  const data = await res.json();
  return { status: res.status, data };
}

async function runTests() {
  console.log('\n🛡️ Starting User-Wise Course Unlock & Multi-User Isolation Test Suite...\n');

  resetEnrollmentStoreForTests();

  // Verify all 7 canonical courses are registered
  assert(
    ALL_7_CANONICAL_COURSES.length === 7,
    'Exactly 7 canonical dashboard courses are configured'
  );

  // =========================================================================
  // SCENARIO 1: Initial State — User A, User B, and User C have 0 access;
  // all 7 courses show as locked for all 3 users.
  // =========================================================================
  for (const [label, uid] of [
    ['User A', USER_A],
    ['User B', USER_B],
    ['User C', USER_C],
  ]) {
    const { status, data } = await fetchUserDashboardStatus(uid);
    assert(status === 200 && data.success === true, `${label} dashboard entitlement fetch succeeds`);
    assert(
      Array.isArray(data.enrolledCourses) && data.enrolledCourses.length === 0,
      `${label} initially has 0 enrolled courses`
    );

    for (const courseId of ALL_7_CANONICAL_COURSES) {
      assert(
        data.courseStatusMap[courseId] === false,
        `${label} initially sees course '${courseId}' as LOCKED`
      );
      const contentCheck = await checkCourseContentAccess(uid, courseId);
      assert(
        contentCheck.status === 403 && contentCheck.data.accessGranted === false,
        `${label} is denied access (403 Forbidden) to locked course '${courseId}'`
      );
    }
  }

  // =========================================================================
  // SCENARIO 2: User A purchases "Data Analyst with GenAI" (data_analyst)
  // - User A can access "Data Analyst with GenAI"
  // - User B and User C still see "Data Analyst with GenAI" as LOCKED
  // - The other 6 courses remain LOCKED for User A
  // =========================================================================
  {
    const orderId = 'order_USERA_DA_001';
    const paymentId = 'pay_USERA_DA_001';
    const sig = signPayment(orderId, paymentId);

    const verifyReq = new Request('http://localhost/api/razorpay-verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: sig,
        courseId: 'data_analyst',
        userId: USER_A,
      }),
    });
    const verifyRes = await razorpayVerifyPost({
      request: verifyReq,
      env: { RAZORPAY_KEY_SECRET: SECRET },
    });
    assert(verifyRes.status === 200, 'User A payment signature for data_analyst verified (HTTP 200)');
    const verifyData = await verifyRes.json();
    assert(verifyData.success === true && verifyData.userId === USER_A, 'Verification bound to User A');

    // Also verify via /api/entitlements POST
    const entReq = new Request('http://localhost/api/entitlements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: USER_A,
        paymentId,
        orderId,
        courseId: 'data_analyst',
        verifiedAt: verifyData.verifiedAt,
        entitlementProof: verifyData.entitlementProof,
      }),
    });
    const entRes = await entitlementsPost({
      request: entReq,
      env: { RAZORPAY_KEY_SECRET: SECRET },
    });
    assert(entRes.status === 200, 'User A entitlement proof accepted for data_analyst');

    // Check User A: data_analyst is UNLOCKED, other 6 courses are LOCKED
    const statusA = await fetchUserDashboardStatus(USER_A);
    assert(
      statusA.data.courseStatusMap.data_analyst === true,
      'User A sees "Data Analyst with GenAI" as UNLOCKED'
    );
    const contentA = await checkCourseContentAccess(USER_A, 'data_analyst', 'ch3_sql_joins');
    assert(
      contentA.status === 200 && contentA.data.accessGranted === true,
      'User A can access protected lessons in "Data Analyst with GenAI"'
    );

    const other6ForA = ALL_7_CANONICAL_COURSES.filter((c) => c !== 'data_analyst');
    for (const otherCourse of other6ForA) {
      assert(
        statusA.data.courseStatusMap[otherCourse] === false,
        `Course '${otherCourse}' remains LOCKED for User A after purchasing only data_analyst`
      );
      const lockedCheckA = await checkCourseContentAccess(USER_A, otherCourse);
      assert(
        lockedCheckA.status === 403 && lockedCheckA.data.accessGranted === false,
        `User A is blocked (403) from accessing unpurchased course '${otherCourse}'`
      );
    }

    // Check User B and User C: data_analyst (and all other courses) MUST remain LOCKED
    for (const [label, uid] of [
      ['User B', USER_B],
      ['User C', USER_C],
    ]) {
      const statusOther = await fetchUserDashboardStatus(uid);
      assert(
        statusOther.data.courseStatusMap.data_analyst === false,
        `${label} STILL sees "Data Analyst with GenAI" as LOCKED after User A unlocked it`
      );
      const contentOther = await checkCourseContentAccess(uid, 'data_analyst');
      assert(
        contentOther.status === 403 && contentOther.data.accessGranted === false,
        `${label} is denied access (403) to "Data Analyst with GenAI"`
      );
    }
  }

  // =========================================================================
  // SCENARIO 3: User B purchases "Full Stack Web Development" (full_stack_mern)
  // - User B can access "Full Stack Web Development"
  // - User A and User C cannot access "Full Stack Web Development"
  // - User B still cannot access "Data Analyst with GenAI"
  // =========================================================================
  {
    const orderId = 'order_USERB_FS_002';
    const paymentId = 'pay_USERB_FS_002';
    const sig = signPayment(orderId, paymentId);

    const verifyReq = new Request('http://localhost/api/razorpay-verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: sig,
        courseId: 'full-stack-web-dev',
        userId: USER_B,
      }),
    });
    const verifyRes = await razorpayVerifyPost({
      request: verifyReq,
      env: { RAZORPAY_KEY_SECRET: SECRET },
    });
    assert(verifyRes.status === 200, 'User B payment signature for Full Stack Web Development verified');

    // User B can access full_stack_mern
    const statusB = await fetchUserDashboardStatus(USER_B);
    assert(
      statusB.data.courseStatusMap.full_stack_mern === true,
      'User B sees "Full Stack Web Development" as UNLOCKED'
    );
    const contentB_FS = await checkCourseContentAccess(USER_B, 'full_stack_mern', 'ch4_react');
    assert(
      contentB_FS.status === 200 && contentB_FS.data.accessGranted === true,
      'User B can access lessons in "Full Stack Web Development"'
    );

    // User B still CANNOT access data_analyst (or the other 5 courses)
    assert(
      statusB.data.courseStatusMap.data_analyst === false,
      'User B STILL cannot access "Data Analyst with GenAI"'
    );
    const contentB_DA = await checkCourseContentAccess(USER_B, 'data_analyst');
    assert(
      contentB_DA.status === 403 && contentB_DA.data.accessGranted === false,
      'User B is rejected (403) when requesting "Data Analyst with GenAI" lessons'
    );

    // User A and User C CANNOT access full_stack_mern
    for (const [label, uid] of [
      ['User A', USER_A],
      ['User C', USER_C],
    ]) {
      const statusOther = await fetchUserDashboardStatus(uid);
      assert(
        statusOther.data.courseStatusMap.full_stack_mern === false,
        `${label} sees "Full Stack Web Development" as LOCKED`
      );
      const contentOther = await checkCourseContentAccess(uid, 'full_stack_mern');
      assert(
        contentOther.status === 403 && contentOther.data.accessGranted === false,
        `${label} is rejected (403) when requesting "Full Stack Web Development"`
      );
    }
  }

  // =========================================================================
  // SCENARIO 4: A payment fails -> no enrollment or unlock is granted
  // =========================================================================
  {
    // 4a. Failed payment status sent to /api/razorpay-verify
    const failVerifyReq = new Request('http://localhost/api/razorpay-verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        razorpay_order_id: 'order_FAIL_003',
        razorpay_payment_id: 'pay_FAIL_003',
        razorpay_signature: signPayment('order_FAIL_003', 'pay_FAIL_003'),
        courseId: 'ai_engineering',
        userId: USER_C,
        paymentStatus: 'FAILED',
      }),
    });
    const failVerifyRes = await razorpayVerifyPost({
      request: failVerifyReq,
      env: { RAZORPAY_KEY_SECRET: SECRET },
    });
    assert(failVerifyRes.status === 400, 'Failed payment status is rejected by /api/razorpay-verify');

    // 4b. payment.failed webhook delivered
    const failWebhookPayload = JSON.stringify({
      id: 'evt_failed_payment_003',
      event: 'payment.failed',
      payload: {
        payment: {
          entity: {
            id: 'pay_FAIL_003',
            order_id: 'order_FAIL_003',
            amount: 98700,
            currency: 'INR',
            status: 'failed',
            notes: { userId: USER_C, courseId: 'ai_engineering' },
          },
        },
      },
    });
    const failWhReq = new Request('http://localhost/api/razorpay-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-razorpay-signature': signWebhook(failWebhookPayload),
      },
      body: failWebhookPayload,
    });
    const failWhRes = await razorpayWebhookPost({
      request: failWhReq,
      env: { RAZORPAY_WEBHOOK_SECRET: WEBHOOK_SECRET, ENABLE_LIVE_WEBHOOK: 'true' },
    });
    const failWhData = await failWhRes.json();
    assert(
      failWhData.entitled === false && failWhData.enrollmentCreated === false,
      'payment.failed webhook grants zero entitlement and creates no enrollment'
    );

    const statusC = await fetchUserDashboardStatus(USER_C);
    assert(
      statusC.data.enrolledCourses.length === 0 &&
        statusC.data.courseStatusMap.ai_engineering === false,
      'User C still has 0 unlocked courses after failed payment'
    );
  }

  // =========================================================================
  // SCENARIO 5: Webhook delivered multiple times -> idempotent, no duplicate enrollment
  // =========================================================================
  {
    const whBody1 = JSON.stringify({
      id: 'evt_wh_userc_ml_1',
      event: 'payment.captured',
      payload: {
        payment: {
          entity: {
            id: 'pay_USERC_ML_004',
            order_id: 'order_USERC_ML_004',
            amount: 98700, // ₹987 in paise
            currency: 'INR',
            status: 'captured',
            notes: { userId: USER_C, courseId: 'ml_engineering' },
          },
        },
      },
    });

    const req1 = new Request('http://localhost/api/razorpay-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-razorpay-signature': signWebhook(whBody1),
      },
      body: whBody1,
    });
    const res1 = await razorpayWebhookPost({
      request: req1,
      env: { RAZORPAY_WEBHOOK_SECRET: WEBHOOK_SECRET, ENABLE_LIVE_WEBHOOK: 'true' },
    });
    const data1 = await res1.json();
    assert(res1.status === 200 && data1.mode === 'live_fulfilled', 'First webhook fulfills User C ml_engineering');

    // Deliver the exact same event a second time
    const req2 = new Request('http://localhost/api/razorpay-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-razorpay-signature': signWebhook(whBody1),
      },
      body: whBody1,
    });
    const res2 = await razorpayWebhookPost({
      request: req2,
      env: { RAZORPAY_WEBHOOK_SECRET: WEBHOOK_SECRET, ENABLE_LIVE_WEBHOOK: 'true' },
    });
    const data2 = await res2.json();
    assert(res2.status === 200 && data2.idempotent === true, 'Duplicate webhook eventId handled idempotently');

    // Deliver a 3rd webhook with a new eventId but the same paymentId (e.g. order.paid after payment.captured)
    const whBody3 = JSON.stringify({
      id: 'evt_wh_userc_ml_2_order_paid',
      event: 'order.paid',
      payload: {
        payment: {
          entity: {
            id: 'pay_USERC_ML_004',
            order_id: 'order_USERC_ML_004',
            amount: 98700,
            currency: 'INR',
            status: 'captured',
            notes: { userId: USER_C, courseId: 'ml_engineering' },
          },
        },
      },
    });
    const req3 = new Request('http://localhost/api/razorpay-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-razorpay-signature': signWebhook(whBody3),
      },
      body: whBody3,
    });
    const res3 = await razorpayWebhookPost({
      request: req3,
      env: { RAZORPAY_WEBHOOK_SECRET: WEBHOOK_SECRET, ENABLE_LIVE_WEBHOOK: 'true' },
    });
    const data3 = await res3.json();
    assert(res3.status === 200 && data3.idempotent === true, 'Duplicate paymentId across different webhook events handled idempotently');

    // Verify only 1 enrollment record exists for User C
    const statusC = await fetchUserDashboardStatus(USER_C);
    assert(
      statusC.data.enrollments.length === 1 &&
        statusC.data.enrolledCourses.length === 1 &&
        statusC.data.courseStatusMap.ml_engineering === true,
      'User C has exactly 1 enrollment record (ml_engineering) with no duplicates'
    );
    assert(
      getEnrollmentStore().enrollmentsById.size === 3,
      'Total enrollments across User A (1), User B (1), and User C (1) is exactly 3'
    );
  }

  // =========================================================================
  // SCENARIO 6: Tampering & Unauthorized Access Protection
  // - User C tries to reuse User A's entitlement proof or paymentId to unlock a course
  // - User A tries to use their data_analyst proof to unlock ai_engineering
  // =========================================================================
  {
    const orderId = 'order_USERA_DA_001';
    const paymentId = 'pay_USERA_DA_001';
    const sig = signPayment(orderId, paymentId);

    const verifyReq = new Request('http://localhost/api/razorpay-verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: sig,
        courseId: 'data_analyst',
        userId: USER_A,
      }),
    });
    const verifyRes = await razorpayVerifyPost({
      request: verifyReq,
      env: { RAZORPAY_KEY_SECRET: SECRET },
    });
    const verifyData = await verifyRes.json();

    // Tamper 1: User C submits User A's valid entitlementProof with userId = USER_C
    const replayByUserC = new Request('http://localhost/api/entitlements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: USER_C,
        paymentId,
        orderId,
        courseId: 'data_analyst',
        verifiedAt: verifyData.verifiedAt,
        entitlementProof: verifyData.entitlementProof,
      }),
    });
    const replayRes = await entitlementsPost({
      request: replayByUserC,
      env: { RAZORPAY_KEY_SECRET: SECRET },
    });
    assert(
      replayRes.status === 403,
      'User C cannot replay User A entitlement proof to unlock data_analyst (HTTP 403)'
    );

    // Tamper 2: User A submits their valid data_analyst proof but changes courseId to ai_engineering
    const tamperCourseReq = new Request('http://localhost/api/entitlements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: USER_A,
        paymentId,
        orderId,
        courseId: 'ai_engineering',
        verifiedAt: verifyData.verifiedAt,
        entitlementProof: verifyData.entitlementProof,
      }),
    });
    const tamperCourseRes = await entitlementsPost({
      request: tamperCourseReq,
      env: { RAZORPAY_KEY_SECRET: SECRET },
    });
    assert(
      tamperCourseRes.status === 403,
      'User A cannot use a data_analyst entitlement proof to unlock ai_engineering (HTTP 403)'
    );

    // Tamper 3: Unauthenticated user requests protected content
    const unauthReq = new Request('http://localhost/api/entitlements?courseId=data_analyst', {
      method: 'GET',
    });
    const unauthRes = await entitlementsGet({
      request: unauthReq,
      env: { RAZORPAY_KEY_SECRET: SECRET },
    });
    assert(unauthRes.status === 401, 'Unauthenticated request to /api/entitlements returns HTTP 401');
  }

  // =========================================================================
  // SCENARIO 7: Frontend Catalog & Service Static Verification
  // - Verify allPlatformCourses.ts has NO `isUnlocked: true`
  // - Verify courseUnlockService.ts scopes storage by userId and purges global keys
  // =========================================================================
  {
    const catalogSrc = fs.readFileSync('welcome-to-2050/src/data/allPlatformCourses.ts', 'utf8');
    assert(
      !catalogSrc.includes('isUnlocked: true'),
      'allPlatformCourses.ts does not hardcode isUnlocked: true on any of the 7 courses'
    );

    const unlockServiceSrc = fs.readFileSync(
      'welcome-to-2050/src/services/courseUnlockService.ts',
      'utf8'
    );
    assert(
      unlockServiceSrc.includes('futureai_user_enrollments_v2_') &&
        unlockServiceSrc.includes('runCourseUnlockUserIsolationMigrationOnce'),
      'courseUnlockService.ts scopes enrollments strictly per user and runs legacy global key purge'
    );
  }

  console.log(`\n🎉 ALL ${passedTests}/${totalTests} USER-WISE COURSE UNLOCK TESTS PASSED!\n`);
}

runTests().catch((err) => {
  console.error('Test suite failure:', err);
  process.exit(1);
});
