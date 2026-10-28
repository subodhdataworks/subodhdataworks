/**
 * Course Unlock & User-Scoped Enrollment Service
 *
 * CRITICAL SECURITY & MULTI-USER ISOLATION:
 * - Every course has an independent unlock/enrollment status per authenticated user (userId + courseId).
 * - A course unlocked by User A NEVER appears unlocked for User B, User C, or anonymous visitors.
 * - Unlocking Course 1 for User A NEVER unlocks Courses 2–7 for User A.
 * - Legacy global localStorage keys ('futureai_unlocked_courses', 'futureai_course_enrolled',
 *   'futureai_unlocked_<course>') are permanently purged and ignored.
 */

export type CanonicalCourseId =
  | 'data_analyst'
  | 'data_science'
  | 'ml_engineering'
  | 'deep_learning'
  | 'ai_engineering'
  | 'ai_tools_prompt'
  | 'ms_office_copilot'
  | 'full_stack_mern';

export const ALL_7_DASHBOARD_COURSES: CanonicalCourseId[] = [
  'data_analyst',
  'data_science',
  'ml_engineering',
  'ai_engineering',
  'ai_tools_prompt',
  'ms_office_copilot',
  'full_stack_mern',
];

export const CANONICAL_COURSES = ALL_7_DASHBOARD_COURSES;

export interface CourseEnrollmentRecord {
  id: string;
  userId: string;
  courseId: CanonicalCourseId;
  enrollmentStatus: 'ACTIVE' | 'REVOKED' | 'PENDING';
  paymentStatus: 'CAPTURED' | 'ADMIN_GRANTED' | 'FAILED';
  paymentTransactionId: string;
  orderId?: string;
  unlockedAt: string;
  createdAt: string;
  updatedAt: string;
}

const USER_ENROLLMENTS_PREFIX = 'futureai_user_enrollments_v2_';
const MIGRATION_FLAG_KEY = 'futureai_course_unlock_user_isolation_v2_done';
const AMBIGUOUS_AUDIT_KEY = 'futureai_ambiguous_legacy_unlocks_audit';

// Legacy global keys that caused one user's unlock to affect all users on the browser
const LEGACY_GLOBAL_KEYS = [
  'futureai_unlocked_courses',
  'futureai_course_enrolled',
  'futureai_unlocked_data_analyst',
  'futureai_unlocked_data_science',
  'futureai_unlocked_ml_engineering',
  'futureai_unlocked_deep_learning',
  'futureai_unlocked_ai_engineering',
  'futureai_unlocked_ai_tools_prompt',
  'futureai_unlocked_ms_office_copilot',
  'futureai_unlocked_full_stack_mern',
];

/**
 * Normalizes any user identifier (email, UID, or phone) into a canonical lowercase key.
 * Returns '' if no authenticated user is present.
 */
export function normalizeUserId(rawUser?: string | null): string {
  const s = String(rawUser || '').trim().toLowerCase();
  if (!s || s === 'anonymous' || s === 'guest' || s === 'null' || s === 'undefined') {
    return '';
  }
  return s;
}

/**
 * Resolves the currently logged-in user's canonical ID from explicit parameter or active auth session.
 * Never returns a shared fallback ID.
 */
export function getCurrentAuthenticatedUserId(explicitUserId?: string | null): string {
  if (explicitUserId !== undefined && explicitUserId !== null) {
    return normalizeUserId(explicitUserId);
  }
  try {
    const isLoggedIn = localStorage.getItem('futureai_logged_in') === 'true';
    const email = normalizeUserId(localStorage.getItem('futureai_user_email'));
    const phone = normalizeUserId(localStorage.getItem('futureai_user_phone'));
    const uid = normalizeUserId(localStorage.getItem('futureai_user_uid'));

    if (!isLoggedIn && !email && !phone && !uid) {
      return '';
    }
    return email || phone || uid || '';
  } catch {
    return '';
  }
}

function getUserEnrollmentStorageKey(userId: string): string {
  const cleanUserId = normalizeUserId(userId);
  if (!cleanUserId) return '';
  return `${USER_ENROLLMENTS_PREFIX}${cleanUserId}`;
}

/**
 * Normalizes any course ID, slug, tab ID, or title into a canonical course ID.
 */
export function normalizeCourseId(rawId?: string | null): CanonicalCourseId {
  const s = (rawId || '').toLowerCase().trim();

  if (
    s === 'data_analyst' ||
    s === 'data-analyst-genai' ||
    s === 'tab-1' ||
    s === 'c1' ||
    (s.includes('data analyst') && !s.includes('science'))
  ) {
    return 'data_analyst';
  }
  if (
    s === 'data_science' ||
    s === 'data-science-agentic' ||
    s === 'data-science-agentic-ai' ||
    s === 'tab-2' ||
    s === 'c2' ||
    s.includes('data science') ||
    s.includes('agentic ai')
  ) {
    return 'data_science';
  }
  if (
    s === 'ml_engineering' ||
    s === 'ml-engineering' ||
    s === 'tab-3' ||
    s === 'c3' ||
    s.includes('machine learning') ||
    s.includes('mlops')
  ) {
    return 'ml_engineering';
  }
  if (
    s === 'deep_learning' ||
    s === 'deep-learning-genai' ||
    s.includes('deep learning')
  ) {
    return 'deep_learning';
  }
  if (
    s === 'ai_engineering' ||
    s === 'ai-engineering' ||
    s === 'tab-4' ||
    s === 'c4' ||
    (s.includes('ai engineering') && !s.includes('prompt'))
  ) {
    return 'ai_engineering';
  }
  if (
    s === 'ai_tools_prompt' ||
    s === 'ai-tools-prompt' ||
    s === 'tab-5' ||
    s === 'c5' ||
    s.includes('prompt engineering') ||
    s.includes('ai tools')
  ) {
    return 'ai_tools_prompt';
  }
  if (
    s === 'ms_office_copilot' ||
    s === 'ms-office-copilot' ||
    s === 'tab-6' ||
    s === 'c6' ||
    s.includes('office 365') ||
    s.includes('copilot') ||
    s.includes('microsoft office')
  ) {
    return 'ms_office_copilot';
  }
  if (
    s === 'full_stack_mern' ||
    s === 'full-stack-mern' ||
    s === 'full-stack-web-dev' ||
    s === 'tab-7' ||
    s === 'c7' ||
    s.includes('full stack') ||
    s.includes('mern')
  ) {
    return 'full_stack_mern';
  }

  return 'data_analyst';
}

/**
 * Purges all legacy global course unlock flags and migrates only verified user-owned
 * payment entitlements to their respective user-scoped storage keys.
 */
export function runCourseUnlockUserIsolationMigrationOnce(): void {
  try {
    const alreadyMigrated = localStorage.getItem(MIGRATION_FLAG_KEY) === 'true';

    // Always ensure legacy global keys are removed so they can never leak across accounts
    const foundLegacyGlobalValues: Record<string, string> = {};
    for (const key of LEGACY_GLOBAL_KEYS) {
      const val = localStorage.getItem(key);
      if (val !== null) {
        foundLegacyGlobalValues[key] = val;
        localStorage.removeItem(key);
      }
    }

    if (alreadyMigrated) return;

    // Inspect local backup of verified user entitlements (if any) and migrate strictly by verified owner
    const rawCloudBackup = localStorage.getItem('futureai_cloud_user_entitlements_v1');
    if (rawCloudBackup) {
      try {
        const parsed = JSON.parse(rawCloudBackup) as Record<
          string,
          {
            email?: string;
            phone?: string;
            unlockedCourses?: string[];
            lastPaymentId?: string;
            updatedAt?: string;
          }
        >;

        for (const [key, entry] of Object.entries(parsed || {})) {
          const ownerId = normalizeUserId(entry?.email || entry?.phone || key);
          const paymentId = String(entry?.lastPaymentId || '').trim();
          const hasVerifiedPaymentId = paymentId.startsWith('pay_') || paymentId.startsWith('ADMIN_');

          if (ownerId && hasVerifiedPaymentId && Array.isArray(entry?.unlockedCourses)) {
            for (const rawCourse of entry.unlockedCourses) {
              const canonical = normalizeCourseId(rawCourse);
              saveUserEnrollmentRecord({
                id: `ENR_${ownerId}_${canonical}_MIGRATED`,
                userId: ownerId,
                courseId: canonical,
                enrollmentStatus: 'ACTIVE',
                paymentStatus: paymentId.startsWith('ADMIN_') ? 'ADMIN_GRANTED' : 'CAPTURED',
                paymentTransactionId: `${paymentId}_${canonical}`,
                unlockedAt: entry.updatedAt || new Date().toISOString(),
                createdAt: entry.updatedAt || new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              });
            }
          }
        }
      } catch {
        // Ignore malformed legacy backup
      }
    }

    // Record any unattributed global flags for admin review without unlocking for all users
    if (Object.keys(foundLegacyGlobalValues).length > 0) {
      localStorage.setItem(
        AMBIGUOUS_AUDIT_KEY,
        JSON.stringify({
          purgedAt: new Date().toISOString(),
          note: 'Ambiguous global course flags purged during user-isolation migration; not granted globally.',
          legacyGlobalFlags: foundLegacyGlobalValues,
        })
      );
    }

    localStorage.setItem(MIGRATION_FLAG_KEY, 'true');
  } catch {
    // Ignore storage errors
  }
}

/**
 * Clears course enrollments for confirmed test accounts during the approved Fresh Cloud Start reset.
 * Does NOT affect genuine paying customers or non-test accounts.
 */
export function clearTestUserEnrollments(testUserIds: string[]): number {
  if (typeof window === 'undefined') return 0;
  let clearedCount = 0;
  try {
    for (const rawId of testUserIds) {
      const cleanId = normalizeUserId(rawId);
      if (!cleanId) continue;
      const key = getUserEnrollmentStorageKey(cleanId);
      if (key && localStorage.getItem(key)) {
        localStorage.removeItem(key);
        clearedCount++;
      }
    }
    localStorage.removeItem('futureai_cloud_user_entitlements_v1');
    localStorage.removeItem('futureai_unlocked_courses');
    localStorage.removeItem('futureai_unlocked_courses_v1');
    localStorage.removeItem('futureai_course_enrolled');
    for (const k of LEGACY_GLOBAL_KEYS) {
      localStorage.removeItem(k);
    }
  } catch {}
  return clearedCount;
}

function saveUserEnrollmentRecord(record: CourseEnrollmentRecord): boolean {
  const cleanUserId = normalizeUserId(record.userId);
  if (!cleanUserId) return false;
  if (record.enrollmentStatus !== 'ACTIVE') return false;
  if (record.paymentStatus !== 'CAPTURED' && record.paymentStatus !== 'ADMIN_GRANTED') return false;

  const storageKey = getUserEnrollmentStorageKey(cleanUserId);
  if (!storageKey) return false;

  try {
    const existing = getUserEnrollmentRecords(cleanUserId);
    // Prevent duplicate transaction IDs across different courses for the user
    const filtered = existing.filter(
      (r) => !(r.userId === cleanUserId && r.courseId === record.courseId)
    );
    filtered.push({
      ...record,
      userId: cleanUserId,
    });
    localStorage.setItem(storageKey, JSON.stringify(filtered));
    return true;
  } catch {
    return false;
  }
}

/**
 * Returns all validated, active CourseEnrollmentRecord items belonging strictly to `userId`.
 */
export function getUserEnrollmentRecords(explicitUserId?: string | null): CourseEnrollmentRecord[] {
  runCourseUnlockUserIsolationMigrationOnce();
  const cleanUserId = getCurrentAuthenticatedUserId(explicitUserId);
  if (!cleanUserId) return [];

  const storageKey = getUserEnrollmentStorageKey(cleanUserId);
  if (!storageKey) return [];

  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is CourseEnrollmentRecord =>
        Boolean(item) &&
        typeof item === 'object' &&
        normalizeUserId(item.userId) === cleanUserId &&
        typeof item.courseId === 'string' &&
        item.enrollmentStatus === 'ACTIVE' &&
        (item.paymentStatus === 'CAPTURED' || item.paymentStatus === 'ADMIN_GRANTED') &&
        Boolean(item.paymentTransactionId)
    );
  } catch {
    return [];
  }
}

/**
 * Returns the list of unlocked canonical course IDs for the specified (or currently logged-in) user.
 * A new or unauthenticated user always receives `[]`.
 */
export function getUnlockedCourses(explicitUserId?: string | null): CanonicalCourseId[] {
  const records = getUserEnrollmentRecords(explicitUserId);
  const unlockedSet = new Set<CanonicalCourseId>();
  for (const r of records) {
    unlockedSet.add(normalizeCourseId(r.courseId));
  }
  return Array.from(unlockedSet);
}

/**
 * Returns a map of all 7 canonical courses with their boolean unlock status for the specified user.
 */
export function getAll7CoursesStatusForUser(
  explicitUserId?: string | null
): Record<CanonicalCourseId, boolean> {
  const unlocked = new Set(getUnlockedCourses(explicitUserId));
  return {
    data_analyst: unlocked.has('data_analyst'),
    data_science: unlocked.has('data_science'),
    ml_engineering: unlocked.has('ml_engineering'),
    deep_learning: unlocked.has('deep_learning'),
    ai_engineering: unlocked.has('ai_engineering'),
    ai_tools_prompt: unlocked.has('ai_tools_prompt'),
    ms_office_copilot: unlocked.has('ms_office_copilot'),
    full_stack_mern: unlocked.has('full_stack_mern'),
  };
}

/**
 * Checks if a specific course is unlocked for the given (or currently authenticated) user.
 */
export function isCourseUnlocked(
  courseKeyOrTitle: string,
  explicitUserId?: string | null
): boolean {
  runCourseUnlockUserIsolationMigrationOnce();
  if (!courseKeyOrTitle || !String(courseKeyOrTitle).trim()) return false;

  const cleanUserId = getCurrentAuthenticatedUserId(explicitUserId);
  if (!cleanUserId) return false;

  const canonical = normalizeCourseId(courseKeyOrTitle);
  const records = getUserEnrollmentRecords(cleanUserId);
  return records.some(
    (r) =>
      normalizeUserId(r.userId) === cleanUserId &&
      normalizeCourseId(r.courseId) === canonical &&
      r.enrollmentStatus === 'ACTIVE' &&
      (r.paymentStatus === 'CAPTURED' || r.paymentStatus === 'ADMIN_GRANTED')
  );
}

/**
 * Checks whether the currently authenticated user has at least one active course enrollment.
 * NOTE: Does NOT unlock other courses — each course's access is checked via `isCourseUnlocked(courseId)`.
 */
export function isAnyCourseUnlocked(explicitUserId?: string | null): boolean {
  return getUnlockedCourses(explicitUserId).length > 0;
}

export interface UnlockCourseOptions {
  userId?: string;
  paymentId?: string;
  orderId?: string;
  paymentStatus?: 'CAPTURED' | 'ADMIN_GRANTED' | 'FAILED';
  enrollmentStatus?: 'ACTIVE' | 'REVOKED' | 'PENDING';
  unlockedAt?: string;
  source?: 'PAYMENT' | 'ADMIN' | 'CLOUD_SYNC';
}

/**
 * Unlocks a single specific course ONLY for the specified (or currently authenticated) user.
 * Never unlocks globally or for other courses.
 */
export function unlockCourse(
  courseKeyOrTitle: string,
  options?: UnlockCourseOptions
): CourseEnrollmentRecord | null {
  runCourseUnlockUserIsolationMigrationOnce();
  if (!courseKeyOrTitle || !String(courseKeyOrTitle).trim()) return null;

  const cleanUserId = getCurrentAuthenticatedUserId(options?.userId);
  if (!cleanUserId) {
    console.warn('[CourseUnlock] Refused to unlock course without an authenticated userId.');
    return null;
  }

  const paymentStatus = options?.paymentStatus || 'CAPTURED';
  const enrollmentStatus = options?.enrollmentStatus || 'ACTIVE';
  if (paymentStatus === 'FAILED' || enrollmentStatus !== 'ACTIVE') {
    return null;
  }

  const canonical = normalizeCourseId(courseKeyOrTitle);
  const nowIso = new Date().toISOString();
  const txId =
    options?.paymentId ||
    `SYNC_${cleanUserId}_${canonical}_${Date.now()}`;

  const record: CourseEnrollmentRecord = {
    id: `ENR_${cleanUserId}_${canonical}`,
    userId: cleanUserId,
    courseId: canonical,
    enrollmentStatus: 'ACTIVE',
    paymentStatus,
    paymentTransactionId: txId,
    orderId: options?.orderId || '',
    unlockedAt: options?.unlockedAt || nowIso,
    createdAt: nowIso,
    updatedAt: nowIso,
  };

  const saved = saveUserEnrollmentRecord(record);
  if (!saved) return null;

  try {
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(
        new CustomEvent('futureai_course_unlocked', {
          detail: {
            userId: cleanUserId,
            courseId: canonical,
            enrollment: record,
          },
        })
      );
    }
  } catch {
    // Ignore event dispatch errors in headless environments
  }

  return record;
}

/**
 * Replaces the cached enrollment list for a specific user with authoritative records from the server/cloud.
 */
export function replaceUserEnrollmentsCache(
  userId: string,
  courseIds: string[],
  paymentIdPrefix = 'CLOUD_VERIFIED'
): void {
  const cleanUserId = normalizeUserId(userId);
  if (!cleanUserId) return;

  const storageKey = getUserEnrollmentStorageKey(cleanUserId);
  if (!storageKey) return;

  const nowIso = new Date().toISOString();
  const uniqueCanonical = Array.from(
    new Set(
      (courseIds || [])
        .filter((c) => typeof c === 'string' && c.trim().length > 0)
        .map((c) => normalizeCourseId(c))
    )
  );

  const records: CourseEnrollmentRecord[] = uniqueCanonical.map((canonical) => ({
    id: `ENR_${cleanUserId}_${canonical}`,
    userId: cleanUserId,
    courseId: canonical,
    enrollmentStatus: 'ACTIVE',
    paymentStatus: 'CAPTURED',
    paymentTransactionId: `${paymentIdPrefix}_${cleanUserId}_${canonical}`,
    unlockedAt: nowIso,
    createdAt: nowIso,
    updatedAt: nowIso,
  }));

  try {
    localStorage.setItem(storageKey, JSON.stringify(records));
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(
        new CustomEvent('futureai_course_unlocked', {
          detail: { userId: cleanUserId, synced: true },
        })
      );
    }
  } catch {
    // Ignore storage errors
  }
}

/**
 * Clears any legacy global keys and dispatches a state refresh when a user logs out or switches accounts.
 */
export function clearActiveCourseSessionCacheOnLogout(currentUserId?: string): void {
  try {
    for (const key of LEGACY_GLOBAL_KEYS) {
      localStorage.removeItem(key);
    }
    localStorage.removeItem('futureai_cloud_user_entitlements_v1');
    localStorage.removeItem('futureai_user_wallet');
    localStorage.removeItem('futureai_entitlements_last_sync');

    if (currentUserId) {
      const cleanId = normalizeUserId(currentUserId);
      if (cleanId) {
        localStorage.removeItem(USER_ENROLLMENTS_PREFIX + cleanId);
        localStorage.removeItem('futureai_entitlements_last_sync_' + cleanId);
      }
    }

    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k) {
        if (
          k.startsWith(USER_ENROLLMENTS_PREFIX) ||
          k.startsWith('futureai_affiliate_hub_v5_') ||
          k.startsWith('futureai_enrollment_proof_') ||
          k.startsWith('futureai_entitlements_last_sync_')
        ) {
          keysToRemove.push(k);
        }
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));

    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(
        new CustomEvent('futureai_course_unlocked', {
          detail: { userId: '', loggedOut: true },
        })
      );
      window.dispatchEvent(new Event('futureai_wallet_updated'));
      window.dispatchEvent(new Event('futureai_affiliate_updated'));
    }
  } catch {
    // Ignore errors
  }
}

/**
 * Verifies a server-issued cryptographic entitlement proof via `/api/entitlements`
 * before unlocking the course for the specified authenticated user.
 */
export async function verifyAndUnlockWithProof(params: {
  userId?: string;
  paymentId: string;
  orderId: string;
  courseId: string;
  verifiedAt: number;
  entitlementProof: string;
}): Promise<boolean> {
  const cleanUserId = getCurrentAuthenticatedUserId(params.userId);
  if (!cleanUserId) {
    console.error('[CourseUnlock] Cannot verify entitlement proof without an authenticated userId.');
    return false;
  }

  try {
    const res = await fetch('/api/entitlements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...params,
        userId: cleanUserId,
      }),
    });

    if (!res.ok) {
      console.error('[CourseUnlock] Server rejected entitlement proof:', res.status);
      return false;
    }

    const data = await res.json();
    if (data.success && data.entitled) {
      unlockCourse(params.courseId, {
        userId: cleanUserId,
        paymentId: params.paymentId,
        orderId: params.orderId,
        paymentStatus: 'CAPTURED',
        enrollmentStatus: 'ACTIVE',
        source: 'PAYMENT',
      });
      return true;
    }
    return false;
  } catch (err) {
    console.error('[CourseUnlock] Failed to contact entitlement verification server:', err);
    return false;
  }
}

/**
 * Fetches the authenticated user's independent course enrollments from `/api/entitlements`.
 */
export async function syncUserEnrollmentsFromServer(explicitUserId?: string): Promise<CanonicalCourseId[]> {
  const cleanUserId = getCurrentAuthenticatedUserId(explicitUserId);
  if (!cleanUserId) return [];

  try {
    const res = await fetch(`/api/entitlements?userId=${encodeURIComponent(cleanUserId)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Id': cleanUserId,
      },
    });
    if (!res.ok) return getUnlockedCourses(cleanUserId);

    const data = await res.json();
    if (data?.success && Array.isArray(data.enrollments)) {
      for (const enr of data.enrollments) {
        if (
          normalizeUserId(enr.userId) === cleanUserId &&
          enr.enrollmentStatus === 'ACTIVE' &&
          (enr.paymentStatus === 'CAPTURED' || enr.paymentStatus === 'ADMIN_GRANTED')
        ) {
          unlockCourse(enr.courseId, {
            userId: cleanUserId,
            paymentId: enr.paymentTransactionId,
            orderId: enr.orderId,
            paymentStatus: enr.paymentStatus,
            enrollmentStatus: 'ACTIVE',
            unlockedAt: enr.unlockedAt,
            source: 'CLOUD_SYNC',
          });
        }
      }
    }
  } catch {
    // Offline or local dev without Pages Function running; rely on user-scoped local records
  }

  return getUnlockedCourses(cleanUserId);
}

/**
 * Checks whether a specific topic/lesson is unlocked for the given (or currently authenticated) user.
 * Rule:
 * - If the course is unlocked for this specific user -> ALL topics & tabs in that course are unlocked.
 * - Otherwise -> ONLY Chapter 1, Topic 1 in the first course tab ('tab-1' / 'video' / 'learn' / 1) is free;
 *   every subsequent topic, chapter, and tab is locked behind course enrollment/payment.
 */
export function isTopicUnlocked(
  courseKeyOrTitle: string,
  chapterIndexOrNumber: number,
  topicIndexOrNumber: number,
  tabId: string | number = 'video',
  isOneIndexed: boolean = true,
  explicitUserId?: string | null
): boolean {
  if (isCourseUnlocked(courseKeyOrTitle, explicitUserId)) {
    return true;
  }

  const ch = isOneIndexed ? chapterIndexOrNumber : chapterIndexOrNumber + 1;
  const tp = isOneIndexed ? topicIndexOrNumber : topicIndexOrNumber + 1;

  const isFirstTab =
    tabId === 'tab-1' ||
    tabId === 'video' ||
    tabId === 'learn' ||
    tabId === 'play' ||
    tabId === 'interview' ||
    tabId === 1 ||
    tabId === '1';

  if (ch === 1 && tp === 1 && isFirstTab) {
    return true;
  }

  return false;
}

/**
 * Checks if a practice problem or project is unlocked for the current user.
 * Only problem index 0 is free preview if the course is not unlocked for this user.
 */
export function isPracticeUnlocked(
  courseKeyOrTitle: string,
  problemZeroBasedIndex: number,
  explicitUserId?: string | null
): boolean {
  if (isCourseUnlocked(courseKeyOrTitle, explicitUserId)) {
    return true;
  }
  return problemZeroBasedIndex === 0;
}
