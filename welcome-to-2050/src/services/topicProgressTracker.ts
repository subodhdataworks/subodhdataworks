/**
 * Universal Course & Topic Progress Tracker Service
 *
 * - Strictly isolates progress by BOTH authenticated userId AND canonical courseKey.
 * - Computes consistent, real lesson completion counts & percentages (0-100%)
 *   directly from the selected course's actual curriculum.
 * - Never fabricates progress, never leaks progress across courses or users.
 */

import { getLearnerTelemetry } from './realAuthService';
import { getSyncedTopicProgress } from '../components/futureai/data/questionBankRegistry';
import { getCurrentAuthenticatedUserId, normalizeCourseId } from './courseUnlockService';
import { CAREER_COURSES_12 } from '../data/careerCourses12';

export type TopicLearningStatus = 'completed' | 'in-progress' | 'unstarted';
export type TopicActivityStep = 'learn' | 'play' | 'interview';

export interface TopicProgressInfo {
  status: TopicLearningStatus;
  percent: number; // 0 to 100
  isCompleted: boolean;
  isInProgress: boolean;
  isUnstarted: boolean;
  nextActivityStep: TopicActivityStep;
  nextActivityLabel: string;
}

export interface CurriculumTopicLike {
  id: string;
  title: string;
  topicNum?: number;
  duration?: string;
}

export interface CurriculumChapterLike {
  id: string;
  chapterNum: number;
  title: string;
  subtitle?: string;
  topics: CurriculumTopicLike[];
}

export interface CurriculumTabLike {
  id: string;
  tabNum: number;
  title: string;
  shortTitle: string;
  iconName?: string;
  chapters: CurriculumChapterLike[];
}

export interface TrackProgressStat {
  tabId: string;
  tabNum: number;
  title: string;
  shortTitle: string;
  totalModules: number;
  totalLessons: number;
  completedLessons: number;
  inProgressLessons: number;
  percent: number;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface CourseProgressSummary {
  courseKey: string;
  totalModules: number;
  totalLessons: number;
  completedLessons: number;
  inProgressLessons: number;
  percent: number; // Exact: Math.round((completedLessons / totalLessons) * 100)
  hoursSpent: number;
  perTrack: TrackProgressStat[];
  resumeTarget: {
    tabId: string;
    categoryName: string;
    moduleTitle: string;
    topicId: string;
    title: string;
    topicPercent: number;
    nextActivityStep: TopicActivityStep;
    nextActivityLabel: string;
    hasStarted: boolean;
  } | null;
}

export const TOPIC_PROGRESS_UPDATED_EVENT = 'futureai_topic_progress_updated';

function getScopedUserSegment(): string {
  const uid = getCurrentAuthenticatedUserId();
  return uid ? uid.replace(/[^a-z0-9@._-]/gi, '_') : 'guest';
}

function getStartedKey(userSeg: string, canonicalCourse: string, topicId: string): string {
  return `futureai_v2_started_${userSeg}_${canonicalCourse}_${topicId}`;
}

function getCompletedKey(userSeg: string, canonicalCourse: string, topicId: string): string {
  return `futureai_v2_completed_${userSeg}_${canonicalCourse}_${topicId}`;
}

function getLastTopicKey(userSeg: string, canonicalCourse: string): string {
  return `futureai_v2_last_topic_${userSeg}_${canonicalCourse}`;
}

export function getTopicProgressInfo(
  tabId: string | number,
  topicId: string,
  topicNum: number,
  courseKey: string = 'data_analyst'
): TopicProgressInfo {
  if (typeof window === 'undefined') {
    return {
      status: 'unstarted',
      percent: 0,
      isCompleted: false,
      isInProgress: false,
      isUnstarted: true,
      nextActivityStep: 'learn',
      nextActivityLabel: 'Visual Learning',
    };
  }

  const canonicalCourse = normalizeCourseId(courseKey);
  const userSeg = getScopedUserSegment();
  const isAuthenticated = userSeg !== 'guest';

  const numericId =
    typeof topicNum === 'number' && topicNum > 0
      ? topicNum
      : parseInt(String(topicId).replace(/\D+/g, ''), 10) || 1;

  const rawTabId =
    typeof tabId === 'string'
      ? parseInt(tabId.replace(/\D+/g, ''), 10) || 1
      : Number(tabId) || 1;

  // 1. Check strictly user-scoped + course-scoped completion first
  let isExplicitCompleted = false;
  try {
    isExplicitCompleted =
      localStorage.getItem(getCompletedKey(userSeg, canonicalCourse, topicId)) === 'true';

    // Legacy fallback ONLY for authenticated users on data_analyst (prevents cross-course & cross-user leaks)
    if (!isExplicitCompleted && isAuthenticated && canonicalCourse === 'data_analyst') {
      const telemetry = getLearnerTelemetry();
      const completedTopicsList: number[] = Array.isArray(telemetry.completedTopics)
        ? telemetry.completedTopics
        : [];
      if (
        completedTopicsList.includes(numericId) ||
        localStorage.getItem(`futureai_topic_completed_${canonicalCourse}_${topicId}`) === 'true'
      ) {
        isExplicitCompleted = true;
      }
    }
  } catch {}

  // Check cloud-synced per-user, per-course learning state across ALL 7 courses
  const synced = isAuthenticated
    ? getSyncedTopicProgress(rawTabId, numericId, canonicalCourse)
    : { topicState: null };
  const topicState = synced.topicState;

  if (
    isExplicitCompleted ||
    topicState?.missionDone === true ||
    (topicState?.unlockedGame && topicState.unlockedGame >= 4)
  ) {
    return {
      status: 'completed',
      percent: 100,
      isCompleted: true,
      isInProgress: false,
      isUnstarted: false,
      nextActivityStep: 'learn',
      nextActivityLabel: 'Completed (Review)',
    };
  }

  // 2. Check In-Progress State
  let started = false;
  let calcPercent = 0;
  let nextActivityStep: TopicActivityStep = 'learn';
  let nextActivityLabel = 'Visual Learning';

  if (topicState) {
    if (
      topicState.quizIdx > 0 ||
      topicState.unlockedGame > 1 ||
      topicState.puzzleIdx > 0 ||
      (topicState.interviewCurrentQIdx && topicState.interviewCurrentQIdx > 0)
    ) {
      started = true;
      if (topicState.interviewCurrentQIdx && topicState.interviewCurrentQIdx > 0) {
        calcPercent = 90;
        nextActivityStep = 'interview';
        nextActivityLabel = 'Topic Interview';
      } else if (topicState.unlockedGame >= 3) {
        calcPercent = 80;
        nextActivityStep = 'play';
        nextActivityLabel = 'Real-World Challenge';
      } else if (topicState.unlockedGame === 2) {
        calcPercent = Math.min(75, Math.max(50, 50 + Math.round(((topicState.puzzleIdx || 1) / 3) * 25)));
        nextActivityStep = 'play';
        nextActivityLabel = 'Puzzle Challenge';
      } else {
        calcPercent = Math.min(45, Math.max(20, Math.round(((topicState.quizIdx || 1) / 5) * 45)));
        nextActivityStep = 'play';
        nextActivityLabel = 'MCQ Practice';
      }
    }
  }

  if (!started) {
    try {
      const isStartedFlag =
        localStorage.getItem(getStartedKey(userSeg, canonicalCourse, topicId)) === 'true';
      if (isStartedFlag) {
        started = true;
        calcPercent = 20;
        nextActivityStep = 'learn';
        nextActivityLabel = 'Visual Learning';
      }
    } catch {}
  }

  if (started) {
    const finalPct = Math.max(15, Math.min(90, calcPercent || 20));
    return {
      status: 'in-progress',
      percent: finalPct,
      isCompleted: false,
      isInProgress: true,
      isUnstarted: false,
      nextActivityStep,
      nextActivityLabel,
    };
  }

  // 3. Unstarted State
  return {
    status: 'unstarted',
    percent: 0,
    isCompleted: false,
    isInProgress: false,
    isUnstarted: true,
    nextActivityStep: 'learn',
    nextActivityLabel: 'Visual Learning',
  };
}

/**
 * Mark a topic as started and save it as the user's last accessed lesson for this course
 */
export function recordTopicStarted(
  topicId: string,
  courseKey: string = 'data_analyst',
  tabId?: string,
  topicTitle?: string
) {
  if (typeof window === 'undefined') return;
  const canonicalCourse = normalizeCourseId(courseKey);
  const userSeg = getScopedUserSegment();
  try {
    localStorage.setItem(getStartedKey(userSeg, canonicalCourse, topicId), 'true');
    if (tabId && topicTitle) {
      localStorage.setItem(
        getLastTopicKey(userSeg, canonicalCourse),
        JSON.stringify({ tabId, topicId, title: topicTitle })
      );
    }
    window.dispatchEvent(
      new CustomEvent(TOPIC_PROGRESS_UPDATED_EVENT, {
        detail: { courseKey: canonicalCourse, topicId },
      })
    );
  } catch {}
}

/**
 * Mark a topic as completed for the current authenticated user & specific course
 */
export function recordTopicCompleted(topicId: string, courseKey: string = 'data_analyst') {
  if (typeof window === 'undefined') return;
  const canonicalCourse = normalizeCourseId(courseKey);
  const userSeg = getScopedUserSegment();
  try {
    localStorage.setItem(getCompletedKey(userSeg, canonicalCourse, topicId), 'true');
    localStorage.setItem(getStartedKey(userSeg, canonicalCourse, topicId), 'true');
    window.dispatchEvent(
      new CustomEvent(TOPIC_PROGRESS_UPDATED_EVENT, {
        detail: { courseKey: canonicalCourse, topicId },
      })
    );
  } catch {}
}

/**
 * Compute consistent, real-time course progress from actual curriculum data
 */
export function computeCourseProgressSummary(
  curriculum: CurriculumTabLike[],
  courseKey: string,
  isTopicAccessible?: (courseKey: string, chapterNum: number, topicNum: number, tabId: string) => boolean
): CourseProgressSummary {
  const canonicalCourse = normalizeCourseId(courseKey);
  const userSeg = getScopedUserSegment();

  let totalModules = 0;
  let totalLessons = 0;
  let completedLessons = 0;
  let inProgressLessons = 0;
  const perTrack: TrackProgressStat[] = [];

  type ResumeCandidate = {
    tabId: string;
    categoryName: string;
    moduleTitle: string;
    topicId: string;
    title: string;
    topicPercent: number;
    nextActivityStep: TopicActivityStep;
    nextActivityLabel: string;
  };

  let firstAccessibleLesson: ResumeCandidate | null = null;
  let firstUncompletedAccessible: ResumeCandidate | null = null;
  let firstInProgressAccessible: ResumeCandidate | null = null;
  const candidateByTopicId = new Map<string, ResumeCandidate>();

  for (const tab of curriculum) {
    let trackLessons = 0;
    let trackCompleted = 0;
    let trackInProgress = 0;

    for (const ch of tab.chapters) {
      totalModules++;
      for (let i = 0; i < ch.topics.length; i++) {
        const t = ch.topics[i];
        const topicNum = t.topicNum || i + 1;
        totalLessons++;
        trackLessons++;

        const info = getTopicProgressInfo(tab.id, t.id, topicNum, canonicalCourse);
        if (info.isCompleted) {
          completedLessons++;
          trackCompleted++;
        } else if (info.isInProgress) {
          inProgressLessons++;
          trackInProgress++;
        }

        const candidate: ResumeCandidate = {
          tabId: tab.id,
          categoryName: tab.shortTitle || tab.title,
          moduleTitle: ch.title,
          topicId: t.id,
          title: t.title,
          topicPercent: info.percent,
          nextActivityStep: info.nextActivityStep,
          nextActivityLabel: info.nextActivityLabel,
        };
        candidateByTopicId.set(String(t.id), candidate);

        const accessible = isTopicAccessible
          ? isTopicAccessible(canonicalCourse, ch.chapterNum, topicNum, tab.id)
          : true;

        if (accessible) {
          if (!firstAccessibleLesson) {
            firstAccessibleLesson = candidate;
          }
          if (info.isInProgress && !firstInProgressAccessible) {
            firstInProgressAccessible = candidate;
          }
          if (!info.isCompleted && !firstUncompletedAccessible) {
            firstUncompletedAccessible = candidate;
          }
        }
      }
    }

    const trackPercent = trackLessons > 0 ? Math.round((trackCompleted / trackLessons) * 100) : 0;
    perTrack.push({
      tabId: tab.id,
      tabNum: tab.tabNum,
      title: tab.title,
      shortTitle: tab.shortTitle,
      totalModules: tab.chapters.length,
      totalLessons: trackLessons,
      completedLessons: trackCompleted,
      inProgressLessons: trackInProgress,
      percent: trackPercent,
      status:
        trackLessons > 0 && trackCompleted === trackLessons
          ? 'completed'
          : trackCompleted > 0 || trackInProgress > 0
          ? 'in-progress'
          : 'upcoming',
    });
  }

  // Resolve resume target: 1) Saved last accessed lesson (if still incomplete), 2) First in-progress lesson, 3) First uncompleted lesson, 4) First accessible lesson
  let savedLast: ResumeCandidate | null = null;
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(getLastTopicKey(userSeg, canonicalCourse));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.topicId) {
          const matched = candidateByTopicId.get(String(parsed.topicId));
          if (matched && matched.topicPercent < 100) {
            savedLast = matched;
          }
        }
      }
    } catch {}
  }

  const chosenResume =
    savedLast || firstInProgressAccessible || firstUncompletedAccessible || firstAccessibleLesson;

  const percent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  // Estimate hours spent from actual completed (~20 min) & in-progress (~8 min) lessons
  const hoursSpent = Number(((completedLessons * 20 + inProgressLessons * 8) / 60).toFixed(1));

  return {
    courseKey: canonicalCourse,
    totalModules,
    totalLessons,
    completedLessons,
    inProgressLessons,
    percent,
    hoursSpent,
    perTrack,
    resumeTarget: chosenResume
      ? {
          ...chosenResume,
          hasStarted: completedLessons > 0 || inProgressLessons > 0 || Boolean(savedLast),
        }
      : null,
  };
}

/**
 * Retrieve authoritative course price from CAREER_COURSES_12 config (no hardcoded prices in hubs)
 */
export function getCoursePriceFromConfig(courseKey: string): string {
  const canonical = normalizeCourseId(courseKey);
  const idMap: Record<string, string> = {
    data_analyst: 'data-analyst-genai',
    data_science: 'data-science-agentic-ai',
    ml_engineering: 'ml-engineering',
    ai_engineering: 'ai-engineering',
    ai_tools_prompt: 'ai-tools-prompt',
    ms_office_copilot: 'ms-office-copilot',
    full_stack_mern: 'full-stack-web-dev',
    ai_website_dev: 'ai-website-dev',
    ai_android_dev: 'ai-android-dev',
    ai_video_creation: 'ai-video-creation',
  };
  const targetId = idMap[canonical];
  const found = CAREER_COURSES_12.find((c) => c.id === targetId);
  return found?.price || '₹1,199';
}
