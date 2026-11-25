// ============================================================================
// FUTURE IT INDUSTRY — UNIVERSAL SMART BACK & NAVIGATION SERVICE
// Predictable, ergonomic, smooth hierarchical navigation across all courses
// ============================================================================

import { soundEffects } from './soundEffects';

export interface CourseRouteConfig {
  key: string;
  tabId: number;
  hash: string;
  name: string;
  shortName: string;
}

export const COURSE_ROUTES: Record<number, CourseRouteConfig> = {
  1: {
    key: 'data_analyst',
    tabId: 1,
    hash: '#data-analyst',
    name: 'Data Analyst with GenAI',
    shortName: 'Data Analyst',
  },
  2: {
    key: 'data_science',
    tabId: 2,
    hash: '#data-science',
    name: 'Data Science & Agentic AI',
    shortName: 'Data Science',
  },
  3: {
    key: 'ml_engineering',
    tabId: 3,
    hash: '#ml-engineering',
    name: 'Machine Learning Engineering',
    shortName: 'ML Engineering',
  },
  4: {
    key: 'ai_engineering',
    tabId: 4,
    hash: '#ai-engineering',
    name: 'AI Engineering & LLMs',
    shortName: 'AI Engineering',
  },
  5: {
    key: 'ai_tools_prompt',
    tabId: 5,
    hash: '#ai-tools-chatgpt',
    name: 'AI Tools & Prompt Engineering',
    shortName: 'AI Tools',
  },
  6: {
    key: 'ms_office_copilot',
    tabId: 6,
    hash: '#ms-office-copilot',
    name: 'Microsoft 365 Copilot AI',
    shortName: 'MS Office',
  },
  7: {
    key: 'full_stack_mern',
    tabId: 7,
    hash: '#fullstack-developer',
    name: 'Full Stack MERN Development',
    shortName: 'Full Stack',
  },
};

// Course hash aliases map to canonical tabId
export const HASH_TO_TAB_MAP: Record<string, number> = {
  '#data-analyst': 1,
  '#data-analytics': 1,
  '#data-science': 2,
  '#data-science-agentic-ai': 2,
  '#datascience': 2,
  '#ml-engineering': 3,
  '#mlengineering': 3,
  '#ml-eng': 3,
  '#ml': 3,
  '#machine-learning': 3,
  '#ai-engineering': 4,
  '#aiengineering': 4,
  '#ai-eng': 4,
  '#ai': 4,
  '#ai-tools-prompt': 5,
  '#ai-tools-chatgpt': 5,
  '#ai-tools': 5,
  '#ms-office-copilot': 6,
  '#msoffice': 6,
  '#full-stack': 7,
  '#fullstack': 7,
  '#fullstack-mern': 7,
  '#full-stack-web-dev': 7,
  '#fullstack-developer': 7,
};

export class NavigationService {
  /**
   * Safely silence all speech synthesis and media audio
   */
  static silenceAllAudio(): void {
    if (typeof window === 'undefined') return;
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      document.querySelectorAll('video, audio').forEach((el) => {
        try {
          (el as HTMLMediaElement).pause();
        } catch {}
      });
      if ((window as any).__activeMockAudio) {
        try {
          (window as any).__activeMockAudio.pause();
          (window as any).__activeMockAudio.currentTime = 0;
        } catch {}
        (window as any).__activeMockAudio = null;
      }
    } catch {}
  }

  /**
   * Record current course visit in sessionStorage
   */
  static recordCourseVisit(tabId: number | string, courseKey?: string, hash?: string): void {
    if (typeof window === 'undefined') return;
    try {
      const numTab = typeof tabId === 'string' ? parseInt(tabId.replace(/\D/g, ''), 10) || 1 : tabId;
      sessionStorage.setItem('futureai_active_tab_id', String(numTab));
      if (courseKey) sessionStorage.setItem('futureai_active_course_key', courseKey);
      if (hash) sessionStorage.setItem('futureai_active_course_hash', hash);
    } catch {}
  }

  /**
   * Resolve current course info based on URL, query params, or sessionStorage
   */
  static getCurrentCourse(explicitTabId?: number | string | null): CourseRouteConfig {
    if (typeof window !== 'undefined') {
      // 1. Explicit argument
      if (explicitTabId) {
        const num = typeof explicitTabId === 'string' ? parseInt(explicitTabId.replace(/\D/g, ''), 10) : explicitTabId;
        if (num && COURSE_ROUTES[num]) return COURSE_ROUTES[num];
      }

      // 2. Query param in window.location.hash
      if (window.location.hash.includes('?')) {
        const params = new URLSearchParams(window.location.hash.split('?')[1]);
        const tabParam = params.get('tab');
        if (tabParam) {
          const num = parseInt(tabParam.replace(/\D/g, ''), 10);
          if (num && COURSE_ROUTES[num]) return COURSE_ROUTES[num];
        }
      }

      // 3. Base hash matching
      const baseHash = window.location.hash.split('?')[0].toLowerCase();
      if (HASH_TO_TAB_MAP[baseHash]) {
        const num = HASH_TO_TAB_MAP[baseHash];
        if (COURSE_ROUTES[num]) return COURSE_ROUTES[num];
      }

      // 4. Session storage fallback
      try {
        const savedTab = sessionStorage.getItem('futureai_active_tab_id');
        if (savedTab) {
          const num = parseInt(savedTab, 10);
          if (num && COURSE_ROUTES[num]) return COURSE_ROUTES[num];
        }
      } catch {}
    }

    // Default to Data Analyst
    return COURSE_ROUTES[1];
  }

  /**
   * Universal Back from inside a Lesson / Topic Workspace
   */
  static goBackFromWorkspace(topicId?: number | string, tabId?: number | string): void {
    this.silenceAllAudio();
    soundEffects.playClick();

    const course = this.getCurrentCourse(tabId);
    const numTopic = typeof topicId === 'string' ? parseInt(topicId.replace(/\D/g, ''), 10) || 1 : (topicId || 1);

    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('futureai_active_curriculum_tab', `tab-${course.tabId}`);
        sessionStorage.setItem('futureai_active_curriculum_topic', `t-${numTopic}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {}

      // Target hash with preserved tab and topic
      const targetHash = `${course.hash}?tab=tab-${course.tabId}&topic=${numTopic}`;
      window.location.hash = targetHash;
    }
  }

  /**
   * Universal Back from inside a Course Hub to All Courses / Home Dashboard
   */
  static goBackToAllCourses(): void {
    this.silenceAllAudio();
    soundEffects.playClick();

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Go to course catalog or dashboard
      window.location.hash = '#dashboard';
    }
  }

  /**
   * Smoothly switch sub-steps within a workspace (e.g. learn -> play) without polluting browser history
   */
  static setWorkspaceStep(step: string, topicId: number, tabId: number): void {
    if (typeof window === 'undefined') return;
    const targetUrl = `#${step}?topic=${topicId}&tab=${tabId}`;
    try {
      window.history.replaceState(null, '', targetUrl);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } catch {
      window.location.hash = targetUrl;
    }
  }
}

export default NavigationService;
