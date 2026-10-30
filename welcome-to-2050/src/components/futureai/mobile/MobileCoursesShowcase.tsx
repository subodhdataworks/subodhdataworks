/**
 * MobileCoursesShowcase.tsx
 *
 * Premium mobile courses showcase with radiant lighting and high-converting placement focus.
 * - Header headline: "Complete Placement Preparation"
 * - Card interior: 2×2 coding/interview/DSA pills replaced with "Unlimited Placement Solution"
 * - CTA Button: Clean, bold "Enroll Now →" with subtext removed
 * - Cards: Luminous lighting effect, soft purple/cyan glow, premium glassmorphism finish
 * - Video: Autoplay loop (muted, no play button) with poster fallback
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
  ShieldCheck,
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

// ─── Single course card with Luminous Lighting & Premium Polish ──────────────

const Card: React.FC<{ course: MobileShowcaseCourse }> = ({ course }) => {
  const unlocked = isCourseUnlocked(course.courseUnlockKey);

  return (
    <article
      className="relative w-full rounded-2xl overflow-hidden active:scale-[0.99] transition-all cursor-pointer group"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 100%)',
        border: '1.5px solid #e0e7ff',
        boxShadow: '0 4px 20px -2px rgba(99, 102, 241, 0.12), 0 0 0 1px rgba(199, 210, 254, 0.45), 0 0 16px rgba(129, 140, 248, 0.08)',
      }}
      onClick={course.onEnroll}
    >
      {/* Top ambient lighting shimmer bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-75 pointer-events-none z-20" />

      {/* ── TOP: left image + right info ────────────────────────────────── */}
      <div className="flex" style={{ minHeight: '185px' }}>

        {/* LEFT — thumbnail / video, fixed 145px wide */}
        <div
          className="relative shrink-0 overflow-hidden rounded-tl-2xl bg-slate-900"
          style={{ width: '145px' }}
        >
          <AutoplayVideo video={course.video} poster={course.image} alt={course.title} />

          {/* MOST POPULAR badge pinned to top of image */}
          {course.popularBadge && (
            <div
              className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center py-1 px-2 gap-1 shadow-sm"
              style={{
                background: 'linear-gradient(90deg, #dc2626 0%, #ea580c 100%)',
                borderBottomRightRadius: '10px',
              }}
            >
              <span className="text-[9px] font-black text-white uppercase tracking-wide leading-none drop-shadow-xs">
                {course.popularBadge}
              </span>
            </div>
          )}

          {/* Subtle edge light separator */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* RIGHT — info panel */}
        <div className="flex-1 min-w-0 flex flex-col justify-between px-2.5 pt-2.5 pb-2">

          {/* Row A: badge pill (left) + salary (right) */}
          <div className="flex items-start justify-between gap-1">
            <span
              className={`inline-flex items-center gap-0.5 px-2 py-[3px] rounded-full text-[9px] font-black text-white shrink-0 shadow-xs ${course.badgeBg}`}
              style={{ maxWidth: '115px' }}
            >
              {course.badge}
            </span>

            <div className="flex flex-col items-end shrink-0">
              <div className="flex items-center gap-0.5">
                {/* 3D bar-chart icon */}
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
          <h3 className="text-[14px] min-[375px]:text-[14.5px] font-black text-slate-900 leading-tight tracking-tight mt-0.5">
            {course.title}{' '}
            <span className={course.titleAccentColor}>{course.titleAccent}</span>
          </h3>

          {/* Row C: Description */}
          <p className="text-[9.5px] font-medium text-slate-500 leading-snug line-clamp-2">
            {course.description}
          </p>

          {/* Row D: Tool icons (icon image + name below) */}
          <div className="flex items-end gap-2 overflow-hidden py-0.5">
            {course.tools.slice(0, 5).map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-[2px] shrink-0">
                <div className="w-[22px] h-[22px] rounded-md bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-0.5">
                  <ToolIcon name={t.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[7px] font-semibold text-slate-600 whitespace-nowrap leading-none">
                  {t.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row E: UNLIMITED PLACEMENT SOLUTION (Replaced 4 pills with high-impact luminous placement badge) */}
          <div className="mt-1 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/90 shadow-[0_2px_8px_rgba(16,185,129,0.12)]">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Briefcase className="w-2.5 h-2.5" />
            </div>
            <div className="flex items-center gap-1 min-w-0">
              <span className="text-[10px] font-black bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-transparent whitespace-nowrap">
                Unlimited Placement Solution
              </span>
              <Sparkles className="w-2.5 h-2.5 text-amber-500 shrink-0" />
            </div>
            <span className="ml-auto flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          </div>
        </div>
      </div>

      {/* ── BOTTOM: price row + CTA (clean Enroll Now without subtext) ─────── */}
      <div
        className="flex items-center gap-2 px-3 py-2.5 bg-gradient-to-b from-white to-slate-50/70"
        style={{ borderTop: '1px solid #f1f5f9' }}
      >
        {/* original price — red strikethrough */}
        <span className="text-[12.5px] font-bold text-rose-500 line-through whitespace-nowrap shrink-0">
          {course.originalPrice}
        </span>

        {/* selling price — glowing green bordered box */}
        <span
          className="text-[12.5px] font-black text-emerald-700 whitespace-nowrap shrink-0 px-2 py-0.5 rounded-lg border border-emerald-400/90 shadow-[0_0_10px_rgba(16,185,129,0.15)]"
          style={{ background: 'rgba(209,250,229,0.65)' }}
        >
          {course.sellingPrice}
        </span>

        {/* discount badge — light pink/red pill */}
        <span
          className="text-[9.5px] font-black text-rose-600 whitespace-nowrap shrink-0 px-2 py-0.5 rounded-full border border-rose-300"
          style={{ background: 'rgba(255,228,230,0.65)' }}
        >
          {course.discountLabel}
        </span>

        {/* Enroll Now / Resume Course button (NO subtext, clean & high-converting) */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); course.onEnroll(); }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-black text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:scale-95 transition-transform cursor-pointer min-w-0 overflow-hidden ${
            unlocked
              ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600'
              : course.enrollBtnGradient
          }`}
        >
          {unlocked ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[11.5px] font-black whitespace-nowrap tracking-wide">Resume Course</span>
            </>
          ) : (
            <>
              <Rocket className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[12px] font-black whitespace-nowrap tracking-wide">Enroll Now →</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};

// ─── Section header ("Complete Placement Preparation") ────────────────────────

const Header: React.FC<{ count: number; onAllCourses?: () => void }> = ({ count, onAllCourses }) => (
  <div className="mb-4">
    {/* Badge row */}
    <div className="flex items-center justify-between mb-2">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-sm">
        <Rocket className="w-3 h-3 text-white" />
        <span className="text-[10px] font-black text-white uppercase tracking-wide">Your Career Starts Here</span>
      </div>
      {onAllCourses && (
        <button
          type="button"
          onClick={onAllCourses}
          className="flex items-center gap-1 px-3 py-1 rounded-full border border-blue-300 text-blue-700 font-bold text-[11px] bg-white hover:bg-blue-50 active:scale-95 transition-transform cursor-pointer shadow-2xs"
        >
          All Courses <ArrowRight className="w-3 h-3" />
        </button>
      )}
    </div>

    {/* Headline: Complete Placement Preparation */}
    <h2 className="text-[22px] min-[375px]:text-[24px] font-black text-slate-950 leading-tight tracking-tight">
      Complete{' '}
      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Placement Preparation
      </span>
    </h2>

    {/* Subtext */}
    <p className="text-[11px] font-medium text-slate-500 mt-1 leading-snug">
      Explore {count} industry-focused career programs with practical learning and AI-powered training.
    </p>

    {/* 6-pill feature strip with glowing styling */}
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
          className="flex flex-col items-center text-center gap-0.5 px-2.5 py-2 bg-white rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] shrink-0"
          style={{ minWidth: '56px' }}
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
    <div className="flex flex-col gap-3.5">
      {courses.map((c) => <Card key={c.id} course={c} />)}
    </div>
  </section>
);

export default MobileCoursesShowcase;
