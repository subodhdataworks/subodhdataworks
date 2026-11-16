import { isCourseUnlocked, normalizeCourseId } from './courseUnlockService';

export type LiveCourseCanonicalId = 'ai_website_dev' | 'ai_android_dev' | 'ai_video_creation';

export type LiveSessionStatus = 'UPCOMING' | 'SCHEDULED' | 'LIVE_NOW' | 'COMPLETED';

export interface LiveClassResourceItem {
  id: string;
  title: string;
  type: 'PDF' | 'Code' | 'Prompt Pack' | 'Link';
  url: string;
}

export interface LiveClassConfig {
  courseId: LiveCourseCanonicalId;
  sessionStatus: LiveSessionStatus;
  batchLabel: string;
  scheduleDateText: string;
  scheduleTimeText: string;
  instructorName: string;
  instructorDesignation: string;
  /** Protected meeting URL — never exposed in public state if user is not enrolled */
  meetingLink: string;
  announcements: string[];
  resources: LiveClassResourceItem[];
  /** Admin-configurable video asset URL for AI Video Creation course */
  videoDemoUrl?: string;
  updatedAt: string;
}

const STORAGE_KEY = 'futureai_live_class_configs_v1';

const DEFAULT_CONFIGS: Record<LiveCourseCanonicalId, LiveClassConfig> = {
  ai_website_dev: {
    courseId: 'ai_website_dev',
    sessionStatus: 'UPCOMING',
    batchLabel: 'Upcoming Live Cohort',
    scheduleDateText: 'Schedule announced in student dashboard upon batch confirmation',
    scheduleTimeText: 'Live Weekend & Evening Interactive Sessions (IST)',
    instructorName: 'Future IT Industry Live Engineering Mentor',
    instructorDesignation: 'Full-Stack & AI Product Architecture Lead',
    meetingLink: '',
    announcements: [
      'Welcome! Keep your laptop ready with Node.js, VS Code, and a modern browser before the live session.',
      'Live session joining link and starter repository will appear here once scheduled by your batch coordinator.',
    ],
    resources: [
      {
        id: 'res-web-1',
        title: 'AI Website Builder & E-Commerce Architecture Blueprint',
        type: 'Prompt Pack',
        url: '#ai-website-dev',
      },
      {
        id: 'res-web-2',
        title: 'Razorpay Checkout & Webhook Verification Checklist',
        type: 'Code',
        url: '#ai-website-dev',
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  ai_android_dev: {
    courseId: 'ai_android_dev',
    sessionStatus: 'UPCOMING',
    batchLabel: 'Upcoming Live Cohort',
    scheduleDateText: 'Schedule announced in student dashboard upon batch confirmation',
    scheduleTimeText: 'Live Weekend & Evening Interactive Sessions (IST)',
    instructorName: 'Future IT Industry Live Mobile Mentor',
    instructorDesignation: 'Android, Firebase & AI App Systems Lead',
    meetingLink: '',
    announcements: [
      'Ensure Android Studio or web preview environment and a Firebase account are ready prior to the live workshop.',
      'Live session link and APK signing guide will unlock here as soon as your batch schedule is published.',
    ],
    resources: [
      {
        id: 'res-and-1',
        title: 'AI Android UI/UX & Navigation Prompt Templates',
        type: 'Prompt Pack',
        url: '#ai-android-dev',
      },
      {
        id: 'res-and-2',
        title: 'Google Play Store AAB Signing & Release Checklist',
        type: 'PDF',
        url: '#ai-android-dev',
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  ai_video_creation: {
    courseId: 'ai_video_creation',
    sessionStatus: 'UPCOMING',
    batchLabel: 'Upcoming Live Cohort',
    scheduleDateText: 'Schedule announced in student dashboard upon batch confirmation',
    scheduleTimeText: 'Live Weekend & Evening Interactive Sessions (IST)',
    instructorName: 'Future IT Industry Generative Media Mentor',
    instructorDesignation: 'AI Video Production & Creative Direction Lead',
    meetingLink: '',
    announcements: [
      'In the live class, we cover end-to-end scripting, character consistency, voice cloning, lip-sync, and 4K export.',
      'Session joining details and prompt workbooks will be posted here once your batch schedule is finalized.',
    ],
    resources: [
      {
        id: 'res-vid-1',
        title: 'Cinematic Camera Prompts & Character Consistency Guide',
        type: 'Prompt Pack',
        url: '#ai-video-creation',
      },
      {
        id: 'res-vid-2',
        title: 'Commercial Usage & AI Video Licensing Handbook',
        type: 'PDF',
        url: '#ai-video-creation',
      },
    ],
    videoDemoUrl: '/videos/ai_engineering_course_v2.mp4',
    updatedAt: new Date().toISOString(),
  },
};

function readStoredConfigs(): Partial<Record<LiveCourseCanonicalId, Partial<LiveClassConfig>>> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function getLiveClassConfig(courseIdOrKey: string): Omit<LiveClassConfig, 'meetingLink'> & {
  hasConfiguredMeetingLink: boolean;
  protectedMeetingLink: string | null;
} {
  const canonical = normalizeCourseId(courseIdOrKey) as LiveCourseCanonicalId;
  const fallback = DEFAULT_CONFIGS[canonical] || DEFAULT_CONFIGS.ai_website_dev;
  const stored = readStoredConfigs()[canonical] || {};

  const merged: LiveClassConfig = {
    ...fallback,
    ...stored,
    courseId: fallback.courseId,
    announcements: Array.isArray(stored.announcements) ? stored.announcements : fallback.announcements,
    resources: Array.isArray(stored.resources) ? stored.resources : fallback.resources,
  };

  const enrolled = isCourseUnlocked(canonical);
  const cleanLink = String(merged.meetingLink || '').trim();
  const hasValidLink = cleanLink.startsWith('https://') || cleanLink.startsWith('http://');

  const { meetingLink: _hiddenLink, ...publicData } = merged;

  return {
    ...publicData,
    hasConfiguredMeetingLink: hasValidLink,
    // Strictly protect meeting link from unauthorized / non-enrolled users
    protectedMeetingLink: enrolled && hasValidLink ? cleanLink : null,
  };
}

export function updateLiveClassConfig(
  courseId: LiveCourseCanonicalId,
  updates: Partial<LiveClassConfig>
): void {
  if (typeof window === 'undefined') return;
  try {
    const current = readStoredConfigs();
    current[courseId] = {
      ...(current[courseId] || {}),
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent('futureai_live_config_updated', { detail: { courseId } }));
  } catch {
    // Ignore storage errors
  }
}
