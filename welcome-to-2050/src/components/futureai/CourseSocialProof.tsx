import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface CourseSocialProofConfig {
  /** Pool of 8 distinct student portrait URLs unique to this course/card */
  avatarPool: string[];
  /** Compact enrollment or activity text */
  enrollmentText: string;
  /** Assigned star rating between 4.8 and 5.0 */
  rating: string;
  /** Independent rotation interval in ms (between 3200 and 4800ms) */
  intervalMs: number;
  /** Initial stagger delay in ms so cards rotate asynchronously */
  initialDelayMs: number;
}

const AVATAR = (n: number) => `/images/avatars/student_${String(n).padStart(2, '0')}.jpg`;

/**
 * Authoritative social-proof configuration for all 10 Career Courses.
 */
export const COURSE_SOCIAL_PROOF_MAP: Record<string, CourseSocialProofConfig> = {
  'data-analyst-genai': {
    avatarPool: [AVATAR(1), AVATAR(2), AVATAR(9), AVATAR(4), AVATAR(10), AVATAR(6), AVATAR(13), AVATAR(12)],
    enrollmentText: '2.4K+ students enrolled',
    rating: '4.9',
    intervalMs: 3400,
    initialDelayMs: 400,
  },
  'data-science-agentic-ai': {
    avatarPool: [AVATAR(3), AVATAR(11), AVATAR(5), AVATAR(14), AVATAR(7), AVATAR(16), AVATAR(1), AVATAR(18)],
    enrollmentText: '1.8K+ students enrolled',
    rating: '5.0',
    intervalMs: 3900,
    initialDelayMs: 1100,
  },
  'ml-engineering': {
    avatarPool: [AVATAR(8), AVATAR(15), AVATAR(2), AVATAR(17), AVATAR(9), AVATAR(19), AVATAR(4), AVATAR(20)],
    enrollmentText: '1.2K+ students enrolled',
    rating: '4.8',
    intervalMs: 4300,
    initialDelayMs: 750,
  },
  'ai-engineering': {
    avatarPool: [AVATAR(10), AVATAR(13), AVATAR(6), AVATAR(18), AVATAR(11), AVATAR(3), AVATAR(15), AVATAR(7)],
    enrollmentText: '1.9K+ students enrolled',
    rating: '4.9',
    intervalMs: 3600,
    initialDelayMs: 1650,
  },
  'ai-tools-prompt': {
    avatarPool: [AVATAR(12), AVATAR(1), AVATAR(14), AVATAR(8), AVATAR(19), AVATAR(5), AVATAR(16), AVATAR(11)],
    enrollmentText: '3.1K+ students enrolled',
    rating: '4.9',
    intervalMs: 4100,
    initialDelayMs: 900,
  },
  'ms-office-copilot': {
    avatarPool: [AVATAR(4), AVATAR(16), AVATAR(7), AVATAR(20), AVATAR(2), AVATAR(13), AVATAR(9), AVATAR(17)],
    enrollmentText: '2.1K+ students enrolled',
    rating: '4.8',
    intervalMs: 4500,
    initialDelayMs: 1400,
  },
  'full-stack-web-dev': {
    avatarPool: [AVATAR(6), AVATAR(18), AVATAR(12), AVATAR(3), AVATAR(15), AVATAR(10), AVATAR(1), AVATAR(19)],
    enrollmentText: '1.6K+ students enrolled',
    rating: '5.0',
    intervalMs: 3750,
    initialDelayMs: 600,
  },
  'ai-website-dev': {
    avatarPool: [AVATAR(17), AVATAR(9), AVATAR(18), AVATAR(5), AVATAR(11), AVATAR(14), AVATAR(2), AVATAR(20)],
    enrollmentText: '1.5K+ students enrolled',
    rating: '4.9',
    intervalMs: 3500,
    initialDelayMs: 1250,
  },
  'ai-android-dev': {
    avatarPool: [AVATAR(19), AVATAR(4), AVATAR(13), AVATAR(16), AVATAR(8), AVATAR(1), AVATAR(17), AVATAR(10)],
    enrollmentText: '1.1K+ students enrolled',
    rating: '4.8',
    intervalMs: 4200,
    initialDelayMs: 1850,
  },
  'ai-video-creation': {
    avatarPool: [AVATAR(20), AVATAR(14), AVATAR(3), AVATAR(12), AVATAR(7), AVATAR(15), AVATAR(6), AVATAR(18)],
    enrollmentText: '1.7K+ students enrolled',
    rating: '4.9',
    intervalMs: 3850,
    initialDelayMs: 1050,
  },
};

/**
 * Authoritative social-proof configuration for all 14 DSA Coding Practice cards.
 * Each card has a distinct avatar pool and a 1K to 5K+ "New users in last 7 days 🚀" count.
 */
export const DSA_SOCIAL_PROOF_MAP: Record<string, CourseSocialProofConfig> = {
  python: {
    avatarPool: [AVATAR(2), AVATAR(9), AVATAR(14), AVATAR(6), AVATAR(18), AVATAR(1), AVATAR(12), AVATAR(19)],
    enrollmentText: '4.8K+ New users in last 7 days 🚀',
    rating: '4.9',
    intervalMs: 3350,
    initialDelayMs: 350,
  },
  sql: {
    avatarPool: [AVATAR(4), AVATAR(11), AVATAR(7), AVATAR(15), AVATAR(20), AVATAR(3), AVATAR(16), AVATAR(8)],
    enrollmentText: '3.9K+ New users in last 7 days 🚀',
    rating: '4.9',
    intervalMs: 3800,
    initialDelayMs: 850,
  },
  excel: {
    avatarPool: [AVATAR(6), AVATAR(13), AVATAR(2), AVATAR(17), AVATAR(10), AVATAR(5), AVATAR(19), AVATAR(11)],
    enrollmentText: '3.4K+ New users in last 7 days 🚀',
    rating: '4.8',
    intervalMs: 4150,
    initialDelayMs: 1200,
  },
  powerbi: {
    avatarPool: [AVATAR(8), AVATAR(1), AVATAR(16), AVATAR(12), AVATAR(4), AVATAR(18), AVATAR(7), AVATAR(14)],
    enrollmentText: '2.8K+ New users in last 7 days 🚀',
    rating: '4.9',
    intervalMs: 3600,
    initialDelayMs: 600,
  },
  pandas: {
    avatarPool: [AVATAR(10), AVATAR(15), AVATAR(3), AVATAR(19), AVATAR(6), AVATAR(13), AVATAR(20), AVATAR(2)],
    enrollmentText: '2.3K+ New users in last 7 days 🚀',
    rating: '4.8',
    intervalMs: 4400,
    initialDelayMs: 1450,
  },
  numpy: {
    avatarPool: [AVATAR(12), AVATAR(5), AVATAR(18), AVATAR(9), AVATAR(1), AVATAR(16), AVATAR(11), AVATAR(17)],
    enrollmentText: '1.9K+ New users in last 7 days 🚀',
    rating: '4.9',
    intervalMs: 3950,
    initialDelayMs: 700,
  },
  matplotlib: {
    avatarPool: [AVATAR(14), AVATAR(7), AVATAR(20), AVATAR(4), AVATAR(15), AVATAR(8), AVATAR(13), AVATAR(3)],
    enrollmentText: '1.4K+ New users in last 7 days 🚀',
    rating: '4.8',
    intervalMs: 4600,
    initialDelayMs: 1600,
  },
  statistics: {
    avatarPool: [AVATAR(16), AVATAR(9), AVATAR(1), AVATAR(18), AVATAR(11), AVATAR(6), AVATAR(19), AVATAR(10)],
    enrollmentText: '1.7K+ New users in last 7 days 🚀',
    rating: '4.9',
    intervalMs: 3700,
    initialDelayMs: 950,
  },
  ml_engineering: {
    avatarPool: [AVATAR(18), AVATAR(3), AVATAR(12), AVATAR(7), AVATAR(20), AVATAR(14), AVATAR(2), AVATAR(15)],
    enrollmentText: '4.2K+ New users in last 7 days 🚀',
    rating: '5.0',
    intervalMs: 3450,
    initialDelayMs: 500,
  },
  deep_learning: {
    avatarPool: [AVATAR(20), AVATAR(11), AVATAR(4), AVATAR(16), AVATAR(9), AVATAR(1), AVATAR(17), AVATAR(6)],
    enrollmentText: '2.6K+ New users in last 7 days 🚀',
    rating: '4.9',
    intervalMs: 4250,
    initialDelayMs: 1350,
  },
  ai_engineering: {
    avatarPool: [AVATAR(1), AVATAR(14), AVATAR(8), AVATAR(19), AVATAR(5), AVATAR(12), AVATAR(15), AVATAR(10)],
    enrollmentText: '5K+ New users in last 7 days 🚀',
    rating: '5.0',
    intervalMs: 3500,
    initialDelayMs: 750,
  },
  data_science: {
    avatarPool: [AVATAR(3), AVATAR(17), AVATAR(10), AVATAR(2), AVATAR(13), AVATAR(18), AVATAR(7), AVATAR(20)],
    enrollmentText: '4.5K+ New users in last 7 days 🚀',
    rating: '4.9',
    intervalMs: 4050,
    initialDelayMs: 1150,
  },
  javascript: {
    avatarPool: [AVATAR(5), AVATAR(19), AVATAR(12), AVATAR(6), AVATAR(14), AVATAR(9), AVATAR(1), AVATAR(16)],
    enrollmentText: '3.1K+ New users in last 7 days 🚀',
    rating: '4.8',
    intervalMs: 3850,
    initialDelayMs: 1500,
  },
  react: {
    avatarPool: [AVATAR(7), AVATAR(13), AVATAR(18), AVATAR(11), AVATAR(3), AVATAR(20), AVATAR(8), AVATAR(15)],
    enrollmentText: '3.6K+ New users in last 7 days 🚀',
    rating: '4.9',
    intervalMs: 3650,
    initialDelayMs: 1000,
  },
};

const FALLBACK_COURSE_KEYS = Object.keys(COURSE_SOCIAL_PROOF_MAP);
const FALLBACK_DSA_KEYS = Object.keys(DSA_SOCIAL_PROOF_MAP);

function resolveConfig(courseId: string, variant: 'course' | 'dsa'): CourseSocialProofConfig {
  if (variant === 'dsa') {
    if (DSA_SOCIAL_PROOF_MAP[courseId]) {
      return DSA_SOCIAL_PROOF_MAP[courseId];
    }
    let hash = 0;
    for (let i = 0; i < courseId.length; i++) {
      hash = (hash * 31 + courseId.charCodeAt(i)) >>> 0;
    }
    return DSA_SOCIAL_PROOF_MAP[FALLBACK_DSA_KEYS[hash % FALLBACK_DSA_KEYS.length]];
  }

  if (COURSE_SOCIAL_PROOF_MAP[courseId]) {
    return COURSE_SOCIAL_PROOF_MAP[courseId];
  }
  let hash = 0;
  for (let i = 0; i < courseId.length; i++) {
    hash = (hash * 31 + courseId.charCodeAt(i)) >>> 0;
  }
  return COURSE_SOCIAL_PROOF_MAP[FALLBACK_COURSE_KEYS[hash % FALLBACK_COURSE_KEYS.length]];
}

// Track preloaded avatar URLs globally so each portrait is only preloaded once per session
const preloadedAvatars = new Set<string>();

interface CourseSocialProofProps {
  courseId: string;
  /** 'course' (default) shows enrollment + star rating; 'dsa' shows 1K-5K+ New users in last 7 days 🚀 */
  variant?: 'course' | 'dsa';
  /** Number of visible overlapping avatars (3, 4, or 5; default 4) */
  visibleCount?: 3 | 4 | 5;
  /** Compact variant for smaller mobile cards */
  compact?: boolean;
  /** Optional override to hide or show star rating */
  showRating?: boolean;
  className?: string;
}

export const CourseSocialProof: React.FC<CourseSocialProofProps> = React.memo(({
  courseId,
  variant = 'course',
  visibleCount = 4,
  compact = false,
  showRating,
  className = '',
}) => {
  const config = resolveConfig(courseId, variant);
  const { avatarPool, enrollmentText, rating, intervalMs, initialDelayMs } = config;
  const shouldShowRating = showRating !== undefined ? showRating : variant === 'course';

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(
    typeof document !== 'undefined' ? document.visibilityState === 'visible' : true
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // 1. Preload this course's avatar pool once to prevent any flicker on rotation
  useEffect(() => {
    avatarPool.forEach((src) => {
      if (!preloadedAvatars.has(src)) {
        preloadedAvatars.add(src);
        const img = new Image();
        img.src = src;
      }
    });
  }, [avatarPool]);

  // 2. Respect prefers-reduced-motion media query
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mq.addEventListener?.('change', handleChange);
    return () => mq.removeEventListener?.('change', handleChange);
  }, []);

  // 3. Pause animations when card is off-screen using IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsInView(entry.isIntersecting);
        }
      },
      { rootMargin: '40px 0px', threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 4. Pause when browser tab is in background
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const onVisChange = () => setIsPageVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVisChange);
    return () => document.removeEventListener('visibilitychange', onVisChange);
  }, []);

  // 5. Staggered, independent avatar rotation every 3.3–4.6s when visible & motion allowed
  useEffect(() => {
    if (!isInView || !isPageVisible || prefersReducedMotion) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % avatarPool.length);
      intervalId = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % avatarPool.length);
      }, intervalMs);
    }, initialDelayMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, isPageVisible, prefersReducedMotion, avatarPool.length, intervalMs, initialDelayMs]);

  // Compute the visible avatars. Since avatarPool has 8 unique portraits,
  // any contiguous window of 3–5 items has zero duplicates or adjacent repeats.
  const visibleAvatars: string[] = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleAvatars.push(avatarPool[(startIndex + i) % avatarPool.length]);
  }

  const avatarSizePx = compact ? (variant === 'dsa' ? 14 : 16) : 19;
  const overlapPx = compact ? (variant === 'dsa' ? 4 : 5) : 6;
  const stackWidthPx = avatarSizePx + (visibleCount - 1) * (avatarSizePx - overlapPx);

  return (
    <div
      ref={containerRef}
      data-testid={`course-social-proof-${variant}-${courseId}`}
      className={`flex items-center justify-between gap-1 w-full select-none ${
        compact
          ? variant === 'dsa'
            ? 'px-1 py-0.5 rounded-md bg-slate-50/90 border border-slate-100'
            : 'px-1.5 py-1 rounded-lg bg-slate-50/90 border border-slate-100'
          : 'px-2 py-1 rounded-lg bg-slate-50/85 border border-slate-100/90'
      } ${className}`}
    >
      {/* Left: Overlapping Animated Student Avatars + Enrollment / New Users Text */}
      <div className={`flex items-center ${compact && variant === 'dsa' ? 'gap-1' : 'gap-1.5'} min-w-0 flex-1`}>
        {/* Fixed-dimension avatar track prevents any layout shift during slide/fade transitions */}
        <div
          className="relative flex items-center shrink-0"
          style={{
            width: `${stackWidthPx}px`,
            height: `${avatarSizePx}px`,
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visibleAvatars.map((avatarUrl, idx) => (
              <motion.div
                key={avatarUrl}
                layout={!prefersReducedMotion}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, x: 8, scale: 0.82 }
                }
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -8, scale: 0.82 }
                }
                transition={{
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  width: `${avatarSizePx}px`,
                  height: `${avatarSizePx}px`,
                  marginLeft: idx === 0 ? '0px' : `-${overlapPx}px`,
                  zIndex: idx + 1,
                }}
                className="relative rounded-full ring-[1.5px] ring-white bg-slate-200 overflow-hidden shadow-2xs shrink-0"
              >
                <img
                  src={avatarUrl}
                  alt={`User ${idx + 1}`}
                  width={avatarSizePx}
                  height={avatarSizePx}
                  loading="eager"
                  decoding="sync"
                  draggable={false}
                  className="w-full h-full object-cover block"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Compact Enrollment / New Users Count */}
        <span
          className={`${
            compact
              ? variant === 'dsa'
                ? 'text-[6.8px] min-[390px]:text-[7.2px] sm:text-[8.5px]'
                : 'text-[8px] sm:text-[8.5px]'
              : variant === 'dsa'
              ? 'text-[9.5px] sm:text-[10px]'
              : 'text-[8.5px] xl:text-[9px]'
          } font-bold text-slate-600 tracking-tight truncate leading-none`}
        >
          {enrollmentText}
        </span>
      </div>

      {/* Right: Compact Star Rating Pill ("★ 4.9") when enabled */}
      {shouldShowRating && (
        <div
          className={`inline-flex items-center gap-0.5 shrink-0 ${
            compact ? 'px-1.5 py-0.5 text-[8.5px]' : 'px-1.5 py-0.5 text-[9px]'
          } rounded-md bg-amber-50/95 border border-amber-200/80 text-amber-900 font-black leading-none shadow-2xs`}
          aria-label={`Rated ${rating} out of 5 stars`}
        >
          <span className="text-amber-500 text-[9.5px] leading-none">★</span>
          <span>{rating}</span>
        </div>
      )}
    </div>
  );
});

CourseSocialProof.displayName = 'CourseSocialProof';
export default CourseSocialProof;
