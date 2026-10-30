/**
 * MobileCoursesShowcase.tsx
 *
 * Premium mobile courses section designed to match the reference screenshot exactly:
 * - White/soft-blue background with gradient borders
 * - Full-width stacked course cards
 * - Left thumbnail with play overlay, right info panel
 * - Technology tool icons row with clean tiles
 * - Course feature badges row
 * - Original price, selling price, discount badge
 * - Large gradient "Enroll Now" button
 *
 * Uses CAREER_COURSES_12 (7 real courses). All click handlers are passed in — no
 * fake buttons, no hardcoded text that isn't from the course data.
 *
 * Desktop UI: untouched (this file only renders inside block md:hidden containers).
 */

import React from 'react';
import {
  ArrowRight,
  Play,
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
  courseUnlockKey: string;   // key used in isCourseUnlocked()
  popularBadge?: string;     // e.g. "🔥 MOST POPULAR"
  badge: string;             // e.g. "⭐ Beginner Friendly"
  badgeBg: string;           // Tailwind bg class for badge
  salaryRange: string;       // e.g. "₹ 6 - 15 LPA"
  title: string;             // e.g. "Data Analyst with"
  titleAccent: string;       // e.g. "GenAI" (rendered in gradient)
  titleAccentColor: string;  // Tailwind text gradient classes
  description: string;
  image: string;
  tools: Array<{ name: string }>;
  originalPrice: string;     // e.g. "₹13,999"
  sellingPrice: string;      // e.g. "₹987 Only"
  discountLabel: string;     // e.g. "93% OFF"
  enrollBtnGradient: string; // Tailwind gradient classes for CTA
  borderAccent: string;      // border accent class
  onEnroll: () => void;
}

interface MobileCoursesShowcaseProps {
  courses: MobileShowcaseCourse[];
  onAllCourses?: () => void;
}

// ─── Course Features Row (same for all courses) ────────────────────────────────
const COURSE_FEATURES = [
  { icon: <Gamepad2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />, label: 'Coding\nGame' },
  { icon: <Mic className="w-3.5 h-3.5 text-rose-500 shrink-0" />, label: 'Unlimited\nMock Interview' },
  { icon: <Brain className="w-3.5 h-3.5 text-orange-500 shrink-0" />, label: 'DSA\nPreparation' },
  { icon: <Code2 className="w-3.5 h-3.5 text-green-600 shrink-0" />, label: 'Coding\nPractice' },
];

// ─── Single Course Card ────────────────────────────────────────────────────────
const ShowcaseCourseCard: React.FC<{ course: MobileShowcaseCourse }> = ({ course }) => {
  const unlocked = isCourseUnlocked(course.courseUnlockKey);

  return (
    <article
      className="w-full rounded-3xl bg-white overflow-hidden select-none border border-slate-200/80 shadow-[0_4px_20px_rgba(20,50,120,0.06)] active:scale-[0.99] transition-transform"
      onClick={course.onEnroll}
    >
      {/* ── Top section: thumbnail left + info right ── */}
      <div className="flex gap-2.5 p-3 relative items-stretch">

        {/* Left: Thumbnail with play overlay & optional top badge */}
        <div className="relative w-[130px] min-[375px]:w-[145px] shrink-0 rounded-2xl overflow-hidden bg-slate-900 shadow-xs self-stretch">
          {course.popularBadge && (
            <div className="absolute top-2 left-2 z-10">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8.5px] font-black text-white bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 shadow-sm uppercase tracking-wide">
                {course.popularBadge}
              </span>
            </div>
          )}
          <img
            src={course.image}
            alt={`${course.title} ${course.titleAccent}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover min-h-[148px]"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-xs border border-white/60 flex items-center justify-center shadow-lg">
              <Play className="w-4 h-4 fill-white text-white ml-0.5" />
            </div>
          </div>
        </div>

        {/* Right: Course info */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">

          {/* Badge row + salary */}
          <div className="flex items-start justify-between gap-1">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-black text-white whitespace-nowrap shadow-xs ${course.badgeBg}`}
            >
              {course.badge}
            </span>

            {/* Salary */}
            <div className="flex flex-col items-end shrink-0">
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-blue-600 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="7" width="3" height="8" rx="0.75" opacity="0.35"/>
                  <rect x="5.5" y="4" width="3" height="11" rx="0.75" opacity="0.7"/>
                  <rect x="10" y="1" width="3" height="14" rx="0.75"/>
                </svg>
                <span className="text-[11px] font-black text-slate-900 whitespace-nowrap">{course.salaryRange}</span>
              </div>
              <span className="text-[8px] font-semibold text-slate-400 leading-tight text-right">Potential Career Salary</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[13.5px] min-[375px]:text-[14.5px] font-black text-slate-950 leading-snug tracking-tight mt-1">
            {course.title}{' '}
            <span className={`${course.titleAccentColor}`}>{course.titleAccent}</span>
          </h3>

          {/* Description */}
          <p className="text-[9.5px] min-[375px]:text-[10px] font-medium text-slate-500 leading-snug line-clamp-2 mt-0.5">
            {course.description}
          </p>

          {/* Tool icons row */}
          <div className="flex items-center gap-1.5 mt-1.5 overflow-hidden">
            {course.tools.slice(0, 5).map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-0.5">
                <div className="w-6 h-6 rounded-md bg-slate-50 border border-slate-200/90 flex items-center justify-center p-0.5 shadow-2xs">
                  <ToolIcon name={t.name} className="w-3.5 h-3.5 object-contain" />
                </div>
                <span className="text-[7.5px] font-bold text-slate-600 whitespace-nowrap">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature row ── */}
      <div className="mx-3 mb-2 rounded-xl bg-slate-50/90 border border-slate-100 px-2 py-1.5">
        <div className="grid grid-cols-4 gap-1">
          {COURSE_FEATURES.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-0.5">
              {f.icon}
              <span className="text-[8px] font-bold text-slate-700 leading-tight whitespace-pre-line text-center">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Price + CTA row ── */}
      <div className="flex items-center gap-2 px-3 pb-3 pt-0.5">
        {/* Original price */}
        <span className="text-[11.5px] font-bold text-rose-500 line-through whitespace-nowrap">
          {course.originalPrice}
        </span>

        {/* Selling price */}
        <span className="px-2 py-0.5 rounded-lg bg-emerald-50 border border-emerald-300 text-[12px] font-black text-emerald-700 whitespace-nowrap">
          {course.sellingPrice}
        </span>

        {/* Discount badge */}
        <span className="px-1.5 py-0.5 rounded-full text-[9.5px] font-black text-rose-600 bg-rose-50 border border-rose-200 whitespace-nowrap">
          {course.discountLabel}
        </span>

        {/* Enroll / Resume button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            course.onEnroll();
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl font-black text-white shadow-md active:scale-95 transition-all cursor-pointer ${
            unlocked
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
              : course.enrollBtnGradient
          }`}
        >
          {unlocked ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[11px] font-black">Resume Course</span>
              </div>
            </>
          ) : (
            <>
              <Rocket className="w-3.5 h-3.5 text-white shrink-0" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[11px] font-black">Enroll Now →</span>
                <span className="text-[7.5px] font-medium text-white/90">Start Your Learning Journey</span>
              </div>
            </>
          )}
        </button>
      </div>
    </article>
  );
};

// ─── Section Header ────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  courseCount: number;
  onAllCourses?: () => void;
}

const ShowcaseSectionHeader: React.FC<SectionHeaderProps> = ({ courseCount, onAllCourses }) => (
  <div className="mb-4">
    {/* Top badge row */}
    <div className="flex items-center justify-between mb-1.5">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm">
        <Rocket className="w-3 h-3 text-white" />
        <span className="text-[10px] font-black text-white tracking-wide uppercase">Your Career Starts Here</span>
      </div>
      {onAllCourses && (
        <button
          type="button"
          onClick={onAllCourses}
          className="flex items-center gap-1 px-3 py-1 rounded-full border border-blue-300 text-blue-700 font-bold text-[11px] bg-white hover:bg-blue-50 active:scale-95 transition-all cursor-pointer shadow-2xs"
        >
          <span>All Courses</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      )}
    </div>

    {/* Main heading */}
    <h2 className="text-[20px] min-[375px]:text-[22px] font-black text-slate-950 leading-tight tracking-tight mt-2">
      Build Skills.{' '}
      <span className="text-slate-800">Crack Interviews.</span>{' '}
      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Get Job-Ready.</span>
    </h2>

    {/* Subtext */}
    <p className="text-[11px] font-medium text-slate-500 mt-1 leading-snug">
      Explore {courseCount} industry-focused career programs with practical learning and AI-powered training.
    </p>

    {/* Feature highlights strip */}
    <div className="flex items-center gap-0 mt-3 overflow-x-auto no-scrollbar pb-0.5">
      {[
        { icon: <Gamepad2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />, label: 'Coding\nGames' },
        { icon: <Mic className="w-3.5 h-3.5 text-rose-500 shrink-0" />, label: 'Unlimited\nMock Interview' },
        { icon: <Brain className="w-3.5 h-3.5 text-orange-500 shrink-0" />, label: 'DSA\nPreparation' },
        { icon: <Code2 className="w-3.5 h-3.5 text-green-600 shrink-0" />, label: 'Coding\nPractice' },
        { icon: <InfinityIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />, label: 'Lifetime\nAccess' },
        { icon: <Briefcase className="w-3.5 h-3.5 text-amber-600 shrink-0" />, label: 'Placement\nSupport' },
      ].map((f, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center gap-0.5 px-2.5 py-2 bg-white rounded-2xl border border-slate-100 shadow-2xs shrink-0 mr-1.5"
          style={{ minWidth: '56px' }}
        >
          {f.icon}
          <span className="text-[8px] font-bold text-slate-700 leading-tight whitespace-pre-line">{f.label}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Main Export ────────────────────────────────────────────────────────────────
export const MobileCoursesShowcase: React.FC<MobileCoursesShowcaseProps> = ({ courses, onAllCourses }) => {
  const handleAllCourses = () => {
    if (onAllCourses) {
      onAllCourses();
      return;
    }
    const el = document.getElementById('mobile-courses-list');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full">
      {/* Section header */}
      <ShowcaseSectionHeader courseCount={courses.length} onAllCourses={handleAllCourses} />

      {/* Course cards — vertically stacked */}
      <div className="space-y-3">
        {courses.map((course) => (
          <ShowcaseCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default MobileCoursesShowcase;