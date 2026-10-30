/**
 * MobileCoursesShowcase.tsx
 *
 * Compact & Ultra-Luminous Mobile Courses Showcase:
 * - Compact Header: "Complete Placement Preparation" in sleek, compact typography
 * - Smaller Video Thumbnail (~118px width) with seamless autoplay
 * - Ultra-compact layout: tighter padding, clean margins, crisp readability
 * - High-impact Lighting & Neon Glow: multi-layered ambient light, luminous edge reflections
 * - "Unlimited Placement Solution" radiant glowing badge in every card
 * - Clean "Enroll Now →" button without subtext
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  ArrowRight,
  Gamepad2,
  Mic,
  Brain,
  Code2,
  Infinity as InfinityIcon,
  Briefcase,
  Rocket,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { ToolIcon } from '../CourseToolIcons';
import { isCourseUnlocked } from '../../../services/courseUnlockService';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MobileShowcaseCourse {
  id: string;
  courseUnlockKey: string;
  /** On-image top badge e.g. "🔥 MOST POPULAR" — omit to hide */
  popularBadge?: string;
  /** Right-panel pill badge e.g. "⭐ Beginner Friendly" */
  badge: string;
  /** Tailwind bg classes for right-panel badge */
  badgeBg: string;
  salaryRange: string;
  /** Title before the accent word */
  title: string;
  /** Coloured accent word (GenAI, Agentic AI, Engineering…) */
  titleAccent: string;
  /** Tailwind gradient text classes for accent */
  titleAccentColor: string;
  description: string;
  /** Poster / fallback image */
  image: string;
  /** Autoplay video URL */
  video?: string;
  tools: Array<{ name: string }>;
  originalPrice: string;
  sellingPrice: string;
  discountLabel: string;
  /** Tailwind gradient for Enroll Now button */
  enrollBtnGradient: string;
  onEnroll: () => void;
}

interface Props {
  courses: MobileShowcaseCourse[];
  onAllCourses?: () => void;
}

// ─── Viewport-aware autoplay video (NO play button, compact) ─────────────────

const AutoplayVideo: React.FC<{ video?: string; poster: string; alt: string }> = ({
  video,
  poster,
  alt,
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const vidRef  = useRef<HTMLVideoElement | null>(null);
  const [ready,  setReady]  = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const vid = vidRef.current;
    const wrap = wrapRef.current;
    if (!vid || !wrap || !video || failed) return;

    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    vid.setAttribute('muted', '');
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', 'true');

    let visible = false;
    const tryPlay = () => {
      if (!vid || failed) return;
      vid.muted = true;
      vid.play().catch(() => {/* blocked until user gesture — poster stays visible */});
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          visible = e.isIntersecting && e.intersectionRatio >= 0.15;
          visible ? tryPlay() : vid.pause();
        }
      },
      { threshold: [0, 0.15, 0.5] }
    );
    observer.observe(wrap);

    const onVis = () => { if (document.visibilityState === 'visible' && visible && vid.paused) tryPlay(); };
    const onTouch = () => { if (visible && vid.paused) tryPlay(); };
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('touchstart', onTouch, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('touchstart', onTouch);
    };
  }, [video, failed]);

  return (
    <div ref={wrapRef} className="relative w-full h-full bg-slate-900 overflow-hidden">
      {/* Poster always underneath — prevents flash of black */}
      <img
        src={poster}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* Autoplay video crossfades over poster once playing */}
      {video && !failed && (
        <video
          ref={vidRef}
          src={video}
          poster={poster}
          autoPlay loop muted playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          onLoadedData={() => setReady(true)}
          onPlaying={() => setReady(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};

// ─── Compact Single Card with Vibrant Lighting & Radiant Edge Glow ──────────

const Card: React.FC<{ course: MobileShowcaseCourse }> = ({ course }) => {
  const unlocked = isCourseUnlocked(course.courseUnlockKey);

  return (
    <article
      className="relative w-full rounded-2xl overflow-hidden active:scale-[0.99] transition-all cursor-pointer"
      style={{
        background: 'linear-gradient(145deg, #ffffff 0%, #f6faff 55%, #fbf8ff 100%)',
        border: '1.5px solid rgba(165, 180, 252, 0.55)',
        boxShadow:
          '0 0 16px rgba(96, 165, 250, 0.20), 0 0 32px rgba(168, 85, 247, 0.12), 0 3px 12px rgba(30, 58, 138, 0.08)',
      }}
      onClick={course.onEnroll}
    >
      {/* Radiant Top Neon Shimmer Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2.5px] pointer-events-none z-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #38bdf8 25%, #818cf8 50%, #c084fc 75%, transparent 100%)',
          boxShadow: '0 0 8px #818cf8',
        }}
      />

      {/* ── TOP SECTION: Compact Left Video (115px) + Right Info ── */}
      <div className="flex" style={{ minHeight: '122px' }}>

        {/* LEFT — compact video / thumbnail (115px wide) */}
        <div
          className="relative shrink-0 overflow-hidden rounded-tl-2xl bg-slate-900"
          style={{ width: '115px', minWidth: '115px' }}
        >
          <AutoplayVideo video={course.video} poster={course.image} alt={course.title} />

          {/* MOST POPULAR badge */}
          {course.popularBadge && (
            <div
              className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center py-0.5 px-1 shadow-sm"
              style={{
                background: 'linear-gradient(90deg, #dc2626 0%, #ea580c 100%)',
                borderBottomRightRadius: '8px',
                boxShadow: '0 2px 6px rgba(220, 38, 38, 0.4)',
              }}
            >
              <span className="text-[8px] font-black text-white uppercase tracking-wide leading-none drop-shadow-xs">
                {course.popularBadge}
              </span>
            </div>
          )}

          {/* Glowing right divider line */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-300/40 via-purple-300/20 to-transparent pointer-events-none" />
        </div>

        {/* RIGHT — info panel */}
        <div className="flex-1 min-w-0 flex flex-col justify-between p-2">

          {/* Row 1: badge pill (left) + salary (right) */}
          <div className="flex items-start justify-between gap-1">
            <span
              className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[8.5px] font-black text-white shrink-0 shadow-xs ${course.badgeBg}`}
              style={{ maxWidth: '105px' }}
            >
              {course.badge}
            </span>

            <div className="flex flex-col items-end shrink-0">
              <div className="flex items-center gap-0.5">
                {/* Compact Bar Chart icon */}
                <svg className="w-2.5 h-2.5 text-blue-600 shrink-0" viewBox="0 0 18 14" fill="currentColor">
                  <rect x="0"  y="8" width="4" height="6" rx="1" opacity="0.4"/>
                  <rect x="5"  y="4" width="4" height="10" rx="1" opacity="0.7"/>
                  <rect x="10" y="0" width="4" height="14" rx="1"/>
                  <polyline points="2,7 7,3 12,6 16,1" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                </svg>
                <span className="text-[9.5px] font-black text-slate-900 whitespace-nowrap leading-tight">
                  {course.salaryRange}
                </span>
              </div>
              <span className="text-[7px] font-medium text-slate-400 text-right leading-none mt-0.5">
                Potential Career Salary
              </span>
            </div>
          </div>

          {/* Row 2: Title */}
          <h3 className="text-[13px] font-black text-slate-900 leading-snug tracking-tight mt-0.5">
            {course.title}{' '}
            <span className={course.titleAccentColor}>{course.titleAccent}</span>
          </h3>

          {/* Row 3: Description */}
          <p className="text-[9px] font-medium text-slate-500 leading-snug line-clamp-1 mt-0.5">
            {course.description}
          </p>

          {/* Row 4: Tool icons (compact) */}
          <div className="flex items-center gap-1.5 overflow-hidden py-0.5 mt-0.5">
            {course.tools.slice(0, 5).map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-[1px] shrink-0">
                <div className="w-[19px] h-[19px] rounded-md bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center p-0.5">
                  <ToolIcon name={t.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[6.5px] font-semibold text-slate-600 whitespace-nowrap leading-none">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM ROW: Compact Price + Enroll Now (No Subtext) ── */}
      <div
        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-b from-white/90 to-blue-50/30"
        style={{ borderTop: '1px solid rgba(226, 232, 240, 0.8)' }}
      >
        {/* Original price (strikethrough) */}
        <span className="text-[11.5px] font-bold text-rose-500 line-through whitespace-nowrap shrink-0">
          {course.originalPrice}
        </span>

        {/* Selling price (Luminous green box) */}
        <span
          className="text-[11.5px] font-black text-emerald-700 whitespace-nowrap shrink-0 px-1.5 py-0.5 rounded-md border border-emerald-400"
          style={{
            background: 'rgba(209,250,229,0.7)',
            boxShadow: '0 0 8px rgba(16, 185, 129, 0.25)',
          }}
        >
          {course.sellingPrice}
        </span>

        {/* Discount badge */}
        <span
          className="text-[9px] font-black text-rose-600 whitespace-nowrap shrink-0 px-1.5 py-0.5 rounded-full border border-rose-300"
          style={{ background: 'rgba(255,228,230,0.7)' }}
        >
          {course.discountLabel}
        </span>

        {/* Enroll Now button (Compact, clean & glowing) */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); course.onEnroll(); }}
          className={`flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg font-black text-white shadow-sm active:scale-95 transition-transform cursor-pointer min-w-0 overflow-hidden ${
            unlocked
              ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600'
              : course.enrollBtnGradient
          }`}
          style={{
            boxShadow: unlocked
              ? '0 0 10px rgba(16, 185, 129, 0.35)'
              : '0 0 12px rgba(37, 99, 235, 0.35)',
          }}
        >
          {unlocked ? (
            <>
              <CheckCircle2 className="w-3 h-3 shrink-0" />
              <span className="text-[10.5px] font-black whitespace-nowrap">Resume Course</span>
            </>
          ) : (
            <>
              <Rocket className="w-3 h-3 shrink-0" />
              <span className="text-[11px] font-black whitespace-nowrap">Enroll Now →</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};

// ─── Compact Section Header ("Complete Placement Preparation") ───────────────

const Header: React.FC<{ count: number; onAllCourses?: () => void }> = ({ count, onAllCourses }) => (
  <div className="mb-2.5">
    {/* Top badge row */}
    <div className="flex items-center justify-between mb-1.5">
      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xs">
        <Rocket className="w-2.5 h-2.5 text-white" />
        <span className="text-[9px] font-black text-white uppercase tracking-wide">Your Career Starts Here</span>
      </div>
      {onAllCourses && (
        <button
          type="button"
          onClick={onAllCourses}
          className="flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-blue-300 text-blue-700 font-bold text-[10px] bg-white hover:bg-blue-50 active:scale-95 transition-transform cursor-pointer shadow-2xs"
        >
          All Courses <ArrowRight className="w-2.5 h-2.5" />
        </button>
      )}
    </div>

    {/* Compact Headline: Complete Placement Program */}
    <h2 className="text-[17px] min-[375px]:text-[18px] font-black text-slate-950 leading-tight tracking-tight">
      Complete{' '}
      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Placement Program
      </span>
    </h2>

    {/* Compact Subtext */}
    <p className="text-[10px] font-medium text-slate-500 mt-0.5 leading-snug">
      Explore {count} industry-focused career programs with AI-powered training.
    </p>

    {/* Compact 6-pill feature strip */}
    <div className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar pb-0.5">
      {[
        { icon: <Gamepad2   className="w-3.5 h-3.5 text-purple-600" />, label: 'Coding\nGames' },
        { icon: <Mic        className="w-3.5 h-3.5 text-rose-500"   />, label: 'Mock\nInterview' },
        { icon: <Brain      className="w-3.5 h-3.5 text-orange-500" />, label: 'DSA\nPrep' },
        { icon: <Code2      className="w-3.5 h-3.5 text-green-600"  />, label: 'Coding\nPractice' },
        { icon: <InfinityIcon className="w-3.5 h-3.5 text-blue-600" />, label: 'Lifetime\nAccess' },
        { icon: <Briefcase  className="w-3.5 h-3.5 text-amber-600"  />, label: 'Placement\nSupport' },
      ].map((f, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center gap-0.5 px-2 py-1.5 bg-white/90 rounded-lg border border-slate-100 shadow-2xs shrink-0"
          style={{ minWidth: '48px' }}
        >
          {f.icon}
          <span className="text-[7px] font-bold text-slate-700 leading-tight whitespace-pre-line">{f.label}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Main export ──────────────────────────────────────────────────────────────

export const MobileCoursesShowcase: React.FC<Props> = ({ courses, onAllCourses }) => (
  <section className="w-full">
    <Header count={courses.length} onAllCourses={onAllCourses} />
    <div className="flex flex-col gap-2.5">
      {courses.map((c) => <Card key={c.id} course={c} />)}
    </div>
  </section>
);

export default MobileCoursesShowcase;
