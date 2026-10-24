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
  if (s.includes('analyst') || s.includes('analytics') || s.includes('tab-1')) return 'data_analyst';
  if (s.includes('data science') || s.includes('agentic')) return 'data_science';
  if (s.includes('machine learning') || s.includes('ml engineering') || s.includes('ml-eng')) return 'ml_engineering';
  if (s.includes('deep learning') || s.includes('neural')) return 'deep_learning';
  if (s.includes('ai engineering') || s.includes('llmops')) return 'ai_engineering';
  if (s.includes('prompt') || s.includes('ai tools')) return 'ai_tools_prompt';
  if (s.includes('office') || s.includes('copilot') || s.includes('excel')) return 'ms_office_copilot';
  if (s.includes('mern') || s.includes('full stack') || s.includes('react') || s.includes('next')) return 'full_stack_mern';
  
  return 'data_analyst';
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
 * 2. If chapterNum === 1 and topicNum <= 3 -> TRUE (1st module first 3 topics are FREE)
 * 3. Otherwise -> FALSE (LOCKED)
 */
export function isTopicUnlocked(
  courseKeyOrTitle: string,
  chapterNum: number = 1,
  topicNum: number = 1
): boolean {
  if (isCourseUnlocked(courseKeyOrTitle)) {
    return true;
  }
  return chapterNum === 1 && topicNum <= 3;
}
