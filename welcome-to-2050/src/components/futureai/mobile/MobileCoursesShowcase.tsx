/**
 * MobileCoursesShowcase.tsx — exact pixel-match to reference screenshot
 *
 * Card anatomy (top→bottom):
 *   TOP SECTION (flex-row):
 *     LEFT  ~148px — autoplay video (no play button), MOST POPULAR badge at top
 *     RIGHT flex-1 — badge pill + salary, title+accent, description, tool icons (icon+name),
 *                    2×2 feature pill grid
 *   BOTTOM FULL-WIDTH ROW:
 *     strikethrough price | ₹987 Only green box | % OFF pill | large Enroll Now button
 *
 *  Card border: soft purple/pink glow (matching reference)
 *  Video: viewport-aware autoplay, muted, loop — NO play button overlay
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

// ─── Viewport-aware autoplay video (NO play button) ──────────────────────────

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
    <div ref={wrapRef} className="relative w-full h-full bg-slate-900">
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

// ─── 4 Feature pills (inside right panel) ────────────────────────────────────

const FEATURES = [
  {
    icon: <Gamepad2 className="w-3 h-3 text-purple-600 shrink-0" />,
    label: 'Coding\nGame',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    icon: <Mic className="w-3 h-3 text-rose-500 shrink-0" />,
    label: 'Unlimited\nMock Interview',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
  },
  {
    icon: <Brain className="w-3 h-3 text-orange-500 shrink-0" />,
    label: 'DSA\nPreparation',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
  },
  {
    icon: <Code2 className="w-3 h-3 text-green-600 shrink-0" />,
    label: 'Coding\nPractice',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
];

// ─── Single course card ───────────────────────────────────────────────────────

const Card: React.FC<{ course: MobileShowcaseCourse }> = ({ course }) => {
  const unlocked = isCourseUnlocked(course.courseUnlockKey);

  return (
    <article
      className="w-full rounded-2xl bg-white overflow-hidden"
      style={{
        border: '1.5px solid #ede9fe',
        boxShadow: '0 2px 18px rgba(139,92,246,0.08), 0 0 0 1px rgba(221,214,254,0.5)',
      }}
      onClick={course.onEnroll}
    >
      {/* ── TOP: left image + right info ────────────────────────────────── */}
      <div className="flex" style={{ minHeight: '195px' }}>

        {/* LEFT — thumbnail / video, fixed 148 px wide */}
        <div
          className="relative shrink-0 overflow-hidden rounded-tl-2xl"
          style={{ width: '148px' }}
        >
          <AutoplayVideo video={course.video} poster={course.image} alt={course.title} />

          {/* MOST POPULAR badge pinned to very top of image, full-width stripe */}
          {course.popularBadge && (
            <div
              className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center py-1 px-2 gap-1"
              style={{
                background: 'linear-gradient(90deg,#dc2626 0%,#ea580c 100%)',
                borderBottomRightRadius: '10px',
              }}
            >
              <span className="text-[9px] font-black text-white uppercase tracking-wide leading-none">
                {course.popularBadge}
              </span>
            </div>
          )}
        </div>

        {/* RIGHT — info panel */}
        <div className="flex-1 min-w-0 flex flex-col gap-1.5 px-2.5 pt-2.5 pb-2">

          {/* Row A: badge pill (left) + salary (right) */}
          <div className="flex items-start justify-between gap-1">
            <span
              className={`inline-flex items-center gap-0.5 px-2 py-[3px] rounded-full text-[9px] font-black text-white shrink-0 ${course.badgeBg}`}
              style={{ maxWidth: '110px' }}
            >
              {course.badge}
            </span>

            <div className="flex flex-col items-end shrink-0">
              <div className="flex items-center gap-0.5">
                {/* bar-chart icon matching reference */}
                <svg className="w-3 h-3 text-blue-600 shrink-0" viewBox="0 0 18 14" fill="currentColor">
                  <rect x="0"  y="8" width="4" height="6" rx="1" opacity="0.35"/>
                  <rect x="5"  y="4" width="4" height="10" rx="1" opacity="0.65"/>
                  <rect x="10" y="0" width="4" height="14" rx="1"/>
                  <polyline points="2,7 7,3 12,6 16,1" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                </svg>
                <span className="text-[10.5px] font-black text-slate-900 whitespace-nowrap leading-tight">
                  {course.salaryRange}
                </span>
              </div>
              <span className="text-[7.5px] font-medium text-slate-400 text-right leading-tight">
                Potential Career Salary
              </span>
            </div>
          </div>

          {/* Row B: Title */}
          <h3 className="text-[14.5px] font-black text-slate-900 leading-tight tracking-tight">
            {course.title}{' '}
            <span className={course.titleAccentColor}>{course.titleAccent}</span>
          </h3>

          {/* Row C: Description */}
          <p className="text-[9.5px] font-medium text-slate-500 leading-snug line-clamp-2">
            {course.description}
          </p>

          {/* Row D: Tool icons (icon image + name below) */}
          <div className="flex items-end gap-2 overflow-hidden">
            {course.tools.slice(0, 5).map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-[2px] shrink-0">
                <div className="w-[22px] h-[22px] flex items-center justify-center">
                  <ToolIcon name={t.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[7px] font-semibold text-slate-600 whitespace-nowrap leading-none">
                  {t.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row E: 2×2 feature pill grid */}
          <div className="grid grid-cols-2 gap-1 mt-auto">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className={`flex items-center gap-1 px-1.5 py-1 rounded-md border ${f.border} ${f.bg}`}
              >
                {f.icon}
                <span className="text-[7.5px] font-bold text-slate-700 leading-tight whitespace-pre-line">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM: price row + CTA ──────────────────────────────────────── */}
      <div
        className="flex items-center gap-1.5 px-3 py-2.5"
        style={{ borderTop: '1px solid #f1f5f9' }}
      >
        {/* original price — red strikethrough, larger */}
        <span className="text-[13px] font-bold text-rose-500 line-through whitespace-nowrap shrink-0">
          {course.originalPrice}
        </span>

        {/* selling price — green bordered box */}
        <span
          className="text-[13px] font-black text-emerald-700 whitespace-nowrap shrink-0 px-1.5 py-0.5 rounded-lg border border-emerald-400"
          style={{ background: 'rgba(209,250,229,0.55)' }}
        >
          {course.sellingPrice}
        </span>

        {/* discount badge — pink pill */}
        <span
          className="text-[9.5px] font-black text-rose-600 whitespace-nowrap shrink-0 px-1.5 py-0.5 rounded-full border border-rose-300"
          style={{ background: 'rgba(255,228,230,0.6)' }}
        >
          {course.discountLabel}
        </span>

        {/* Enroll Now / Resume Course button */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); course.onEnroll(); }}
          className={`flex-1 flex items-center justify-center gap-1 py-[9px] rounded-xl font-black text-white shadow-md active:scale-95 transition-transform cursor-pointer min-w-0 overflow-hidden ${
            unlocked
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
              : course.enrollBtnGradient
          }`}
        >
          {unlocked ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[11px] font-black">Resume Course</span>
            </>
          ) : (
            <div className="flex flex-col items-center leading-none overflow-hidden">
              <div className="flex items-center gap-1">
                <Rocket className="w-3 h-3 shrink-0" />
                <span className="text-[11px] font-black whitespace-nowrap">Enroll Now →</span>
              </div>
              <span className="text-[7.5px] font-medium text-white/85 whitespace-nowrap">
                Start Your Learning Journey Today
              </span>
            </div>
          )}
        </button>
      </div>
    </article>
  );
};

// ─── Section header (matches reference exactly) ───────────────────────────────

const Header: React.FC<{ count: number; onAllCourses?: () => void }> = ({ count, onAllCourses }) => (
  <div className="mb-4">
    {/* Badge row */}
    <div className="flex items-center justify-between mb-2">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
        <Rocket className="w-3 h-3 text-white" />
        <span className="text-[10px] font-black text-white uppercase tracking-wide">Your Career Starts Here</span>
      </div>
      {onAllCourses && (
        <button
          type="button"
          onClick={onAllCourses}
          className="flex items-center gap-1 px-3 py-1 rounded-full border border-blue-300 text-blue-700 font-bold text-[11px] bg-white active:scale-95 transition-transform cursor-pointer"
        >
          All Courses <ArrowRight className="w-3 h-3" />
        </button>
      )}
    </div>

    {/* Headline */}
    <h2 className="text-[21px] font-black text-slate-950 leading-tight tracking-tight">
      Build Skills. Crack Interviews.{' '}
      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Get Job-Ready.
      </span>
    </h2>

    {/* Subtext */}
    <p className="text-[11px] font-medium text-slate-500 mt-1 leading-snug">
      Explore {count} industry-focused career programs with practical learning and AI-powered training.
    </p>

    {/* 6-pill feature strip */}
    <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar pb-0.5">
      {[
        { icon: <Gamepad2   className="w-4 h-4 text-purple-600" />, label: 'Coding\nGames' },
        { icon: <Mic        className="w-4 h-4 text-rose-500"   />, label: 'Unlimited\nMock Interview' },
        { icon: <Brain      className="w-4 h-4 text-orange-500" />, label: 'DSA\nPreparation' },
        { icon: <Code2      className="w-4 h-4 text-green-600"  />, label: 'Coding\nPractice' },
        { icon: <InfinityIcon className="w-4 h-4 text-blue-600" />, label: 'Lifetime\nAccess' },
        { icon: <Briefcase  className="w-4 h-4 text-amber-600"  />, label: 'Placement\nSupport' },
      ].map((f, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center gap-0.5 px-2 py-2 bg-white rounded-xl border border-slate-100 shadow-sm shrink-0"
          style={{ minWidth: '54px' }}
        >
          {f.icon}
          <span className="text-[7.5px] font-bold text-slate-700 leading-tight whitespace-pre-line">{f.label}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Main export ──────────────────────────────────────────────────────────────

export const MobileCoursesShowcase: React.FC<Props> = ({ courses, onAllCourses }) => (
  <section className="w-full">
    <Header count={courses.length} onAllCourses={onAllCourses} />
    <div className="flex flex-col gap-3">
      {courses.map((c) => <Card key={c.id} course={c} />)}
    </div>
  </section>
);

export default MobileCoursesShowcase;
