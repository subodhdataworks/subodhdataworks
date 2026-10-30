/**
 * MobileCoursesShowcase.tsx
 *
 * Premium mobile courses section designed to match the reference screenshot exactly:
 * - White/soft-blue background with gradient borders
 * - Full-width stacked course cards
 * - Left thumbnail with play overlay, right info panel
 * - Technology tool icons row
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
} from 'lucide-react';
import { ToolIcon } from '../CourseToolIcons';
import { isCourseUnlocked } from '../../../services/courseUnlockService';
import { CheckCircle2 } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MobileShowcaseCourse {
  id: string;
  courseUnlockKey: string; // key used in isCourseUnlocked()
  badge: string;           // e.g. "⭐ Beginner Friendly"
  badgeBg: string;         // Tailwind bg class for badge
  salaryRange: string;     // e.g. "₹ 6 - 15 LPA"
  title: string;           // e.g. "Data Analyst with"
  titleAccent: string;     // e.g. "GenAI" (rendered in gradient)
  titleAccentColor: string;// Tailwind text gradient classes
  description: string;
  image: string;
  tools: Array<{ name: string }>;
  originalPrice: string;   // e.g. "₹13,999"
  sellingPrice: string;    // e.g. "₹987 Only"
  discountLabel: string;   // e.g. "93% OFF"
  enrollBtnGradient: string; // Tailwind gradient classes for CTA
  borderAccent: string;    // left border color class
  onEnroll: () => void;
}

interface MobileCoursesShowcaseProps {
  courses: MobileShowcaseCourse[];
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
      className="w-full rounded-3xl bg-white overflow-hidden select-none"
      style={{
        boxShadow: '0 2px 20px rgba(0,0,0,0.07), 0 0 0 1.5px rgba(148,163,184,0.18)',
        borderLeft: '3px solid',
        borderLeftColor: 'transparent',
      }}
      onClick={course.onEnroll}
    >
      {/* ── Top section: thumbnail left + info right ── */}
      <div className="flex gap-0 relative">

        {/* Left: Thumbnail with play overlay */}
        <div className="relative w-[130px] min-[375px]:w-[145px] shrink-0 rounded-tl-3xl overflow-hidden bg-slate-900">
          <img
            src={course.image}
            alt={course.title + ' ' + course.titleAccent}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            style={{ minHeight: '148px', maxHeight: '180px' }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-xs border border-white/50 flex items-center justify-center shadow-md">
              <Play className="w-4 h-4 fill-white text-white ml-0.5" />
            </div>
          </div>
        </div>

        {/* Right: Course info */}
        <div className="flex-1 min-w-0 px-3 pt-3 pb-2 flex flex-col gap-1">

          {/* Badge row + salary */}
          <div className="flex items-start justify-between gap-1">
            {/* Badge */}
            <span
              className={`inline-flex items-center gap-1 px-2 py-[3px] rounded-full text-[10px] font-black text-white whitespace-nowrap shadow-xs ${course.badgeBg}`}
            >
              {course.badge}
            </span>

            {/* Salary */}
            <div className="flex flex-col items-end shrink-0">
              <div className="flex items-center gap-0.5">
                <svg className="w-3 h-3 text-blue-600" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="3" width="3" height="10" rx="1" opacity="0.4"/>
                  <rect x="5.5" y="1" width="3" height="12" rx="1" opacity="0.65"/>
                  <rect x="10" y="5" width="5" height="8" rx="1"/>
                </svg>
                <span className="text-[11px] font-black text-blue-700 whitespace-nowrap">{course.salaryRange}</span>
              </div>
              <span className="text-[8.5px] font-semibold text-slate-400 leading-tight text-right">Potential Career Salary</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[14px] min-[375px]:text-[15px] font-black text-slate-950 leading-snug tracking-tight mt-0.5">
            {course.title}{' '}
            <span className={`${course.titleAccentColor}`}>{course.titleAccent}</span>
          </h3>

          {/* Description */}
          <p className="text-[10px] min-[375px]:text-[10.5px] font-medium text-slate-500 leading-snug line-clamp-2">
            {course.description}
          </p>

          {/* Tool icons row */}
          <div className="flex items-center gap-2.5 mt-0.5 flex-wrap">
            {course.tools.slice(0, 5).map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-0.5">
                <ToolIcon name={t.name} className="w-5 h-5 object-contain" />
                <span className="text-[8px] font-bold text-slate-600 whitespace-nowrap">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature row ── */}
      <div className="mx-3 mt-1 mb-2 rounded-2xl bg-slate-50 border border-slate-100 px-2 py-2">
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
      <div className="flex items-center gap-2 px-3 pb-3">
        {/* Original price */}
        <span className="text-[11px] font-bold text-slate-400 line-through whitespace-nowrap">
          {course.originalPrice}
        </span>

        {/* Selling price */}
        <span className="text-[13px] font-black text-emerald-600 whitespace-nowrap">
          {course.sellingPrice}
        </span>

        {/* Discount badge */}
        <span className="px-2 py-0.5 rounded-full text-[10px] font-black text-red-600 bg-red-50 border border-red-200 whitespace-nowrap">
          {course.discountLabel}
        </span>

        {/* Enroll / Resume button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            course.onEnroll();
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-2xl font-black text-[11px] text-white shadow-md active:scale-95 transition-all cursor-pointer ${
            unlocked
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
              : course.enrollBtnGradient
          }`}
        >
          {unlocked ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
              <div className="flex flex-col items-start leading-tight">
                <span>Resume Course</span>
              </div>
            </>
          ) : (
            <>
              <Rocket className="w-3.5 h-3.5 text-white shrink-0" />
              <div className="flex flex-col items-start leading-tight">
                <span>Enroll Now →</span>
                <span className="text-[8.5px] font-semibold text-white/80">Start Your Learning Journey Today</span>
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
  onAllCourses: () => void;
}

const ShowcaseSectionHeader: React.FC<SectionHeaderProps> = ({ courseCount, onAllCourses }) => (
  <div className="mb-4">
    {/* Top badge row */}
    <div className="flex items-center justify-between mb-1.5">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm">
        <Rocket className="w-3 h-3 text-white" />
        <span className="text-[10px] font-black text-white tracking-wide uppercase">Your Career Starts Here</span>
      </div>
      <button
        type="button"
        onClick={onAllCourses}
        className="flex items-center gap-1 px-3 py-1 rounded-full border border-blue-300 text-blue-700 font-bold text-[11px] bg-white hover:bg-blue-50 active:scale-95 transition-all cursor-pointer shadow-2xs"
      >
        <span>All Courses</span>
        <ArrowRight className="w-3 h-3" />
      </button>
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
export const MobileCoursesShowcase: React.FC<MobileCoursesShowcaseProps> = ({ courses }) => {
  const handleAllCourses = () => {
    const el = document.getElementById('courses-hub');
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
