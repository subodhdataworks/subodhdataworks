/**
 * Cloudflare Pages Function — /api/entitlements
 *
 * User-Wise Course Entitlement & Enrollment Verification API:
 * 1. Maintains user-scoped course enrollment records keyed strictly by (userId, courseId).
 * 2. Prevents global/shared course unlocking across users or across courses.
 * 3. Verifies server-signed cryptographic payment entitlement proof tokens (HMAC-SHA256).
 * 4. Enforces unique paymentTransactionId constraints and idempotent fulfillment.
 * 5. Protects course content access via GET /api/entitlements?userId=...&courseId=... (401/403 on unauthorized access).
 *
 * Environment variables:
 *   RAZORPAY_KEY_SECRET  (Used to verify cryptographic entitlement signatures)
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-User-Id',
  'Content-Type': 'application/json',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

export const ALL_7_CANONICAL_COURSES = [
  'data_analyst',
  'data_science',
  'ml_engineering',
  'ai_engineering',
  'ai_tools_prompt',
  'ms_office_copilot',
  'full_stack_mern',
];

export function normalizeCourseKey(rawId = '') {
  const s = String(rawId || '').toLowerCase().trim();
  if (!s) return '';
  if (s === 'data_analyst' || s.includes('analyst') || s.includes('analytics') || s.includes('tab-1')) return 'data_analyst';
  if (s === 'data_science' || s.includes('data_science') || s.includes('data-science') || s.includes('agentic') || s.includes('tab-2')) return 'data_science';
  if (s === 'ml_engineering' || s.includes('ml_engineering') || s.includes('ml-eng') || s.includes('machine learning') || s.includes('tab-3')) return 'ml_engineering';
  if (s === 'deep_learning' || s.includes('deep_learning') || s.includes('deep-learning')) return 'deep_learning';
  if (s === 'ai_engineering' || s.includes('ai_engineering') || s.includes('ai-eng') || s === 'ai engineering' || s.includes('tab-4')) return 'ai_engineering';
  if (s === 'ai_tools_prompt' || s.includes('prompt') || s.includes('ai_tools') || s.includes('ai-tools') || s.includes('tab-5')) return 'ai_tools_prompt';
  if (s === 'ms_office_copilot' || s.includes('office') || s.includes('copilot') || s.includes('365') || s.includes('tab-6')) return 'ms_office_copilot';
  if (s === 'full_stack_mern' || s.includes('mern') || s.includes('full_stack') || s.includes('full-stack') || s.includes('web dev') || s.includes('tab-7')) return 'full_stack_mern';
  return '';
}

export function normalizeUserId(rawUser = '') {
  const s = String(rawUser || '').trim().toLowerCase();
  if (!s || s === 'anonymous' || s === 'guest' || s === 'null' || s === 'undefined') return '';
  return s;
}

/**
 * Authoritative server-side enrollment store.
 * Each enrollment belongs strictly to one userId and one courseId.
 */
export function getEnrollmentStore() {
  if (!globalThis.__course_enrollments_store_v2) {
    globalThis.__course_enrollments_store_v2 = {
      enrollmentsById: new Map(), // id -> EnrollmentRecord
      userCourseIndex: new Map(), // `${userId}::${courseId}` -> id
      transactionIndex: new Map(), // paymentTransactionId -> id
    };
  }
  return globalThis.__course_enrollments_store_v2;
}

export function resetEnrollmentStoreForTests() {
  globalThis.__course_enrollments_store_v2 = {
    enrollmentsById: new Map(),
    userCourseIndex: new Map(),
    transactionIndex: new Map(),
  };
}

/**
 * Creates or updates a user-specific course enrollment with uniqueness constraints
 * on (userId, courseId) and paymentTransactionId.
 */
export function upsertVerifiedEnrollment({
  userId,
  courseId,
  paymentTransactionId,
  orderId = '',
  paymentStatus = 'CAPTURED',
  enrollmentStatus = 'ACTIVE',
  unlockedAt = null,
}) {
  const cleanUserId = normalizeUserId(userId);
  const canonicalCourseId = normalizeCourseKey(courseId);
  const cleanTxId = String(paymentTransactionId || '').trim();

  if (!cleanUserId) {
    return { ok: false, status: 400, error: 'Valid authenticated userId is required for enrollment.' };
  }
  if (!canonicalCourseId) {
    return { ok: false, status: 400, error: `Invalid courseId: ${courseId}` };
  }
  if (!cleanTxId) {
    return { ok: false, status: 400, error: 'Valid paymentTransactionId is required for enrollment.' };
  }
  if (paymentStatus !== 'CAPTURED' && paymentStatus !== 'ADMIN_GRANTED') {
    return {
      ok: false,
      status: 400,
      error: `Cannot unlock course with non-captured paymentStatus: ${paymentStatus}`,
    };
  }

  const store = getEnrollmentStore();

  // 1. Check unique constraint on paymentTransactionId
  const existingTxEnrollmentId = store.transactionIndex.get(cleanTxId);
  if (existingTxEnrollmentId) {
    const existingRecord = store.enrollmentsById.get(existingTxEnrollmentId);
    if (existingRecord) {
      if (existingRecord.userId === cleanUserId && existingRecord.courseId === canonicalCourseId) {
        return {
          ok: true,
          idempotent: true,
          record: existingRecord,
        };
      }
      return {
        ok: false,
        status: 409,
        error: 'Payment transaction ID has already been used for another user or course.',
      };
    }
  }

  // 2. Check unique constraint on (userId, courseId)
  const compositeKey = `${cleanUserId}::${canonicalCourseId}`;
  const existingUserCourseId = store.userCourseIndex.get(compositeKey);
  const nowIso = new Date().toISOString();

  if (existingUserCourseId) {
    const existingRecord = store.enrollmentsById.get(existingUserCourseId);
    if (existingRecord && existingRecord.enrollmentStatus === 'ACTIVE') {
      // Already enrolled in this course; bind transaction idempotently if same user+course
      store.transactionIndex.set(cleanTxId, existingRecord.id);
      return {
        ok: true,
        idempotent: true,
        record: existingRecord,
      };
    }
  }

  const enrollmentId = existingUserCourseId || `ENR_${cleanUserId}_${canonicalCourseId}_${Date.now()}`;
  const record = {
    id: enrollmentId,
    userId: cleanUserId,
    courseId: canonicalCourseId,
    enrollmentStatus,
    paymentStatus,
    paymentTransactionId: cleanTxId,
    orderId: String(orderId || ''),
    unlockedAt: unlockedAt || nowIso,
    createdAt: nowIso,
    updatedAt: nowIso,
  };

  store.enrollmentsById.set(enrollmentId, record);
  store.userCourseIndex.set(compositeKey, enrollmentId);
  store.transactionIndex.set(cleanTxId, enrollmentId);

  return {
    ok: true,
    idempotent: false,
    record,
  };
}

/**
 * Checks whether a specific user has active access to a specific course.
 */
export function isUserEntitledToCourse(userId, courseId) {
  const cleanUserId = normalizeUserId(userId);
  const canonicalCourseId = normalizeCourseKey(courseId);
  if (!cleanUserId || !canonicalCourseId) return { entitled: false, record: null };

  const store = getEnrollmentStore();
  const compositeKey = `${cleanUserId}::${canonicalCourseId}`;
  const enrollmentId = store.userCourseIndex.get(compositeKey);
  if (!enrollmentId) return { entitled: false, record: null };

  const record = store.enrollmentsById.get(enrollmentId);
  if (
    !record ||
    record.userId !== cleanUserId ||
    record.courseId !== canonicalCourseId ||
    record.enrollmentStatus !== 'ACTIVE' ||
    (record.paymentStatus !== 'CAPTURED' && record.paymentStatus !== 'ADMIN_GRANTED')
  ) {
    return { entitled: false, record: null };
  }

  return { entitled: true, record };
}

/**
 * Returns all active enrollments and the 7-course lock/unlock status map for a specific user.
 */
export function getUserEnrollmentsSummary(userId) {
  const cleanUserId = normalizeUserId(userId);
  const courseStatusMap = {};
  for (const cid of ALL_7_CANONICAL_COURSES) {
    courseStatusMap[cid] = false;
  }

  if (!cleanUserId) {
    return {
      userId: '',
      enrolledCourses: [],
      enrollments: [],
      courseStatusMap,
    };
  }

  const store = getEnrollmentStore();
  const enrollments = [];
  const enrolledCourses = [];

  for (const record of store.enrollmentsById.values()) {
    if (
      record.userId === cleanUserId &&
      record.enrollmentStatus === 'ACTIVE' &&
      (record.paymentStatus === 'CAPTURED' || record.paymentStatus === 'ADMIN_GRANTED')
    ) {
      enrollments.push(record);
      if (!enrolledCourses.includes(record.courseId)) {
        enrolledCourses.push(record.courseId);
      }
      if (Object.prototype.hasOwnProperty.call(courseStatusMap, record.courseId)) {
        courseStatusMap[record.courseId] = true;
      }
    }
  }

  return {
    userId: cleanUserId,
    enrolledCourses,
    enrollments,
    courseStatusMap,
  };
}

async function hmacSha256Hex(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

/**
 * GET /api/entitlements
 * - ?userId=<userId> -> Returns that user's independent enrollment status for all 7 courses.
 * - ?userId=<userId>&courseId=<courseId> -> Verifies whether that user is entitled to access that course/lesson.
 */
export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const rawUserId = url.searchParams.get('userId') || request.headers.get('x-user-id') || '';
  const rawCourseId = url.searchParams.get('courseId') || '';
  const lessonId = url.searchParams.get('lessonId') || '';

  const cleanUserId = normalizeUserId(rawUserId);

  if (!cleanUserId) {
    const emptySummary = getUserEnrollmentsSummary('');
    return json(
      {
        success: false,
        entitled: false,
        accessGranted: false,
        error: 'Authentication required: missing userId.',
        ...emptySummary,
      },
      401
    );
  }

  // Specific course or lesson content protection check
  if (rawCourseId) {
    const canonicalCourseId = normalizeCourseKey(rawCourseId);
    if (!canonicalCourseId) {
      return json(
        {
          success: false,
          entitled: false,
          accessGranted: false,
          userId: cleanUserId,
          courseId: rawCourseId,
          error: 'Unknown course identifier.',
        },
        400
      );
    }

    const { entitled, record } = isUserEntitledToCourse(cleanUserId, canonicalCourseId);
    if (!entitled) {
      return json(
        {
          success: false,
          entitled: false,
          accessGranted: false,
          userId: cleanUserId,
          courseId: canonicalCourseId,
          lessonId: lessonId || null,
          enrollmentStatus: 'LOCKED',
          error: `Forbidden: User '${cleanUserId}' does not have an active enrollment for course '${canonicalCourseId}'.`,
        },
        403
      );
    }

    return json({
      success: true,
      entitled: true,
      accessGranted: true,
      userId: cleanUserId,
      courseId: canonicalCourseId,
      lessonId: lessonId || null,
      enrollmentStatus: 'ACTIVE',
      enrollment: record,
    });
  }

  // Dashboard summary for all 7 courses for this user
  const summary = getUserEnrollmentsSummary(cleanUserId);
  return json({
    success: true,
    ...summary,
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const keySecret = env?.RAZORPAY_KEY_SECRET;

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: 'Invalid JSON request.' }, 400);
  }

  // Support admin-granted user-specific entitlement
  if (body?.action === 'admin_grant') {
    const adminSecret = env?.ADMIN_API_SECRET;
    const authHeader = request.headers.get('Authorization') || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
    if (!adminSecret || !safeEqual(token, adminSecret)) {
      return json({ success: false, entitled: false, error: 'Unauthorized admin entitlement grant.' }, 401);
    }
    const cleanUserId = normalizeUserId(body.userId);
    const canonicalCourseId = normalizeCourseKey(body.courseId);
    const txId = body.paymentTransactionId || `ADMIN_GRANT_${cleanUserId}_${canonicalCourseId}_${Date.now()}`;
    const result = upsertVerifiedEnrollment({
      userId: cleanUserId,
      courseId: canonicalCourseId,
      paymentTransactionId: txId,
      orderId: 'ADMIN_ORDER',
      paymentStatus: 'ADMIN_GRANTED',
      enrollmentStatus: 'ACTIVE',
    });
    if (!result.ok) {
      return json({ success: false, entitled: false, error: result.error }, result.status);
    }
    return json({
      success: true,
      entitled: true,
      userId: cleanUserId,
      courseId: canonicalCourseId,
      enrollment: result.record,
    });
  }

  if (!keySecret) {
    return json(
      {
        success: false,
        error: 'Entitlement verification service unavailable: missing server key configuration.',
      },
      500
    );
  }

  // Reject failed, cancelled, or pending payments immediately
  if (
    body.paymentStatus &&
    ['FAILED', 'CANCELLED', 'PENDING', 'CREATED', 'REFUNDED'].includes(String(body.paymentStatus).toUpperCase())
  ) {
    return json(
      {
        success: false,
        entitled: false,
        error: `Course cannot be unlocked because payment status is ${body.paymentStatus}.`,
      },
      400
    );
  }

  const { paymentId, orderId, courseId, verifiedAt, entitlementProof, userId } = body;

  if (!paymentId || !orderId || !courseId || !verifiedAt || !entitlementProof) {
    return json(
      {
        success: false,
        error: 'Missing required entitlement parameters (paymentId, orderId, courseId, verifiedAt, entitlementProof).',
      },
      400
    );
  }

  const canonicalCourseId = normalizeCourseKey(courseId) || String(courseId);
  const cleanUserId = normalizeUserId(userId);

  // Validate that verification timestamp is within plausible bounds (not in future, not older than 1 year)
  const now = Date.now();
  const vTime = Number(verifiedAt);
  if (Number.isNaN(vTime) || vTime > now + 60000 || vTime < now - 365 * 24 * 3600 * 1000) {
    return json({ success: false, entitled: false, error: 'Entitlement token timestamp is invalid or expired.' }, 403);
  }

  // Cryptographically recompute expected entitlement HMAC-SHA256
  // If userId is provided, verify user-bound proof; also support legacy proof format only when userId was not bound
  const expectedUserBoundProof = cleanUserId
    ? await hmacSha256Hex(
        keySecret,
        `VERIFIED_ENTITLEMENT:${cleanUserId}:${paymentId}:${orderId}:${canonicalCourseId}:${vTime}`
      )
    : null;

  const expectedLegacyProof = await hmacSha256Hex(
    keySecret,
    `VERIFIED_ENTITLEMENT:${paymentId}:${orderId}:${courseId}:${vTime}`
  );

  let isValid = false;
  if (cleanUserId && expectedUserBoundProof) {
    isValid = safeEqual(expectedUserBoundProof, String(entitlementProof));
  } else {
    isValid = safeEqual(expectedLegacyProof, String(entitlementProof));
  }

  if (!isValid) {
    return json(
      {
        success: false,
        entitled: false,
        error: 'Cryptographic proof verification failed. Course entitlement cannot be granted.',
      },
      403
    );
  }

  // Persist user-scoped enrollment record (if userId is present, bind to that user; otherwise isolate to paymentId)
  const effectiveUserId = cleanUserId || `tx_isolated_${paymentId}`;
  const upsertResult = upsertVerifiedEnrollment({
    userId: effectiveUserId,
    courseId: canonicalCourseId,
    paymentTransactionId: paymentId,
    orderId,
    paymentStatus: 'CAPTURED',
    enrollmentStatus: 'ACTIVE',
    unlockedAt: new Date(vTime).toISOString(),
  });

  if (!upsertResult.ok) {
    return json(
      {
        success: false,
        entitled: false,
        error: upsertResult.error,
      },
      upsertResult.status || 409
    );
  }

  return json({
    success: true,
    entitled: true,
    userId: cleanUserId || undefined,
    courseId: canonicalCourseId,
    paymentId,
    orderId,
    verifiedAt: vTime,
    status: 'verified_active',
    idempotent: upsertResult.idempotent,
    enrollment: upsertResult.record,
  });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
