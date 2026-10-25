/**
 * courseUnlockService.ts
 * 
 * Manages per-course locking & entitlement.
 * Rule:
 * 1. For every course, ONLY the first 3 topics of Module 1 (chapterNum === 1, topicNum <= 3) are FREE.
 * 2. All subsequent topics (topicNum >= 4 in Module 1, and all topics in Module 2 onwards) are LOCKED.
 * 3. When payment is successful for a course, ONLY that specific course is unlocked!
 */

const STORAGE_KEY_UNLOCKED_COURSES = 'futureai_unlocked_courses';

export type CanonicalCourseId =
  | 'data_analyst'
  | 'data_science'
  | 'ml_engineering'
  | 'deep_learning'
  | 'ai_engineering'
  | 'ai_tools_prompt'
  | 'ms_office_copilot'
  | 'full_stack_mern';

export const CANONICAL_COURSES: Record<CanonicalCourseId, { id: CanonicalCourseId; title: string; defaultCourseId: string }> = {
  data_analyst: {
    id: 'data_analyst',
    title: 'Data Analyst with GenAI',
    defaultCourseId: 'data-analyst-genai',
  },
  data_science: {
    id: 'data_science',
    title: 'Data Science & Agentic AI',
    defaultCourseId: 'data-science-agentic-ai',
  },
  ml_engineering: {
    id: 'ml_engineering',
    title: 'Machine Learning Engineering',
    defaultCourseId: 'ml-engineering',
  },
  deep_learning: {
    id: 'deep_learning',
    title: 'Deep Learning & Neural Networks',
    defaultCourseId: 'deep-learning',
  },
  ai_engineering: {
    id: 'ai_engineering',
    title: 'AI Engineering & LLMOps',
    defaultCourseId: 'ai-engineering',
  },
  ai_tools_prompt: {
    id: 'ai_tools_prompt',
    title: 'AI Tools & Prompt Engineering',
    defaultCourseId: 'ai-tools-prompt',
  },
  ms_office_copilot: {
    id: 'ms_office_copilot',
    title: 'MS Office 365 with Copilot AI',
    defaultCourseId: 'ms-office-copilot',
  },
  full_stack_mern: {
    id: 'full_stack_mern',
    title: 'Full Stack MERN & Next.js',
    defaultCourseId: 'full-stack-web-dev',
  },
};

/**
 * Maps any variant of title or id to a canonical course key
 */
export function normalizeCourseId(raw: string = ''): CanonicalCourseId {
  const s = raw.toLowerCase().trim();
  if (!s) return 'data_analyst';

  if (s.includes('analyst') || s.includes('analytics') || s.includes('data-analyst') || s.includes('data_analyst') || s.includes('tab-1')) return 'data_analyst';
  if (s.includes('data science') || s.includes('data-science') || s.includes('data_science') || s.includes('agentic') || s.includes('tab-2')) return 'data_science';
  if (s.includes('machine learning') || s.includes('ml engineering') || s.includes('ml-eng') || s.includes('ml_eng') || s.includes('tab-3')) return 'ml_engineering';
  if (s.includes('deep learning') || s.includes('deep-learning') || s.includes('neural')) return 'deep_learning';
  if (s.includes('ai engineering') || s.includes('ai-engineering') || s.includes('ai_engineering') || s.includes('llmops') || s.includes('tab-4')) return 'ai_engineering';
  if (s.includes('prompt') || s.includes('ai tools') || s.includes('ai tool') || s.includes('ai-tool') || s.includes('ai_tool') || s.includes('tab-5')) return 'ai_tools_prompt';
  if (s.includes('office') || s.includes('copilot') || s.includes('microsoft') || s.includes('ms-office') || s.includes('ms_office') || s.includes('tab-6')) return 'ms_office_copilot';
  if (s.includes('mern') || s.includes('full stack') || s.includes('fullstack') || s.includes('full-stack') || s.includes('react') || s.includes('next') || s.includes('tab-7')) return 'full_stack_mern';
  
  // Practice code & modules associated with foundational analytics
  if (s.includes('python') || s.includes('sql') || s.includes('practice') || s.includes('arena') || s.includes('challenge')) return 'data_analyst';
  if (s.includes('excel')) return 'ms_office_copilot';

  return (s.replace(/[^a-z0-9_]/g, '_') as CanonicalCourseId) || 'data_analyst';
}

export function isAnyCourseUnlocked(): boolean {
  if (typeof window === 'undefined') return false;
  const list = getUnlockedCourses();
  if (list.length > 0) return true;
  if (localStorage.getItem('futureai_course_enrolled') === 'true') return true;
  return false;
}

/**
 * Get all unlocked courses for the current user
 */
export function getUnlockedCourses(): CanonicalCourseId[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_UNLOCKED_COURSES);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => normalizeCourseId(String(item)));
    }
  } catch (e) {
    console.warn('Failed to parse unlocked courses', e);
  }
  return [];
}

/**
 * Check if a course is currently unlocked for the user
 */
export function isCourseUnlocked(courseKeyOrTitle: string): boolean {
  if (typeof window === 'undefined') return false;
  const canonical = normalizeCourseId(courseKeyOrTitle);
  const list = getUnlockedCourses();
  if (list.includes(canonical)) return true;

  // Also check individual course flag
  const directKey = `futureai_unlocked_${canonical}`;
  if (localStorage.getItem(directKey) === 'true') {
    return true;
  }

  return false;
}

/**
 * Unlock a specific course after successful payment
 */
export function unlockCourse(courseKeyOrTitle: string): CanonicalCourseId {
  const canonical = normalizeCourseId(courseKeyOrTitle);
  if (typeof window === 'undefined') return canonical;

  try {
    const current = getUnlockedCourses();
    if (!current.includes(canonical)) {
      current.push(canonical);
      localStorage.setItem(STORAGE_KEY_UNLOCKED_COURSES, JSON.stringify(current));
    }
    localStorage.setItem(`futureai_unlocked_${canonical}`, 'true');
    localStorage.setItem('futureai_course_enrolled', 'true');

    // Dispatch event so live UI components update immediately
    window.dispatchEvent(
      new CustomEvent('futureai_course_unlocked', {
        detail: { courseId: canonical },
      })
    );
  } catch (e) {
    console.error('Failed to save course unlock', e);
  }

  return canonical;
}

/**
 * Core Rule Check: Is a specific topic unlocked?
 * 1. If course is unlocked -> TRUE (all topics unlocked)
 * 2. User requirement: "ai tool , microsoft office full stack ka saare topic lock kro"
 *    -> ai_tools_prompt, ms_office_copilot, full_stack_mern are 100% LOCKED until course fee is paid!
 * 3. For other courses: chapterNum === 1 and topicNum <= 3 -> TRUE (1st module first 3 topics are FREE)
 * 4. Otherwise -> FALSE (LOCKED)
 */
export function isTopicUnlocked(
  courseKeyOrTitle: string,
  chapterNum: number = 1,
  topicNum: number = 1
): boolean {
  if (isCourseUnlocked(courseKeyOrTitle)) {
    return true;
  }
  const canonical = normalizeCourseId(courseKeyOrTitle);
  // Strictly lock all topics for AI Tools, MS Office, and Full Stack
  if (
    canonical === 'ai_tools_prompt' ||
    canonical === 'ms_office_copilot' ||
    canonical === 'full_stack_mern'
  ) {
    return false;
  }

  return chapterNum === 1 && topicNum <= 3;
}


/**
 * Cryptographically verifies entitlement with server before granting course unlock
 */
export async function verifyAndUnlockWithProof(
  courseKeyOrTitle: string,
  proof: {
    paymentId: string;
    orderId: string;
    verifiedAt: number;
    entitlementProof: string;
  }
): Promise<{ success: boolean; canonicalCourse: CanonicalCourseId; error?: string }> {
  const canonical = normalizeCourseId(courseKeyOrTitle);
  try {
    const res = await fetch('/api/entitlements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        paymentId: proof.paymentId,
        orderId: proof.orderId,
        courseId: canonical,
        verifiedAt: proof.verifiedAt,
        entitlementProof: proof.entitlementProof,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.entitled) {
      return { success: false, canonicalCourse: canonical, error: data?.error || 'Server rejected course entitlement proof.' };
    }
    unlockCourse(canonical);
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_proof_' + canonical, JSON.stringify(proof));
    }
    return { success: true, canonicalCourse: canonical };
  } catch (err: any) {
    return { success: false, canonicalCourse: canonical, error: err?.message || 'Network error verifying entitlement.' };
  }
}
