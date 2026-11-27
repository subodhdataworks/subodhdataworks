import React, { useMemo, useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, BookOpen } from 'lucide-react';
import {
  CurriculumTabLike,
  TopicActivityStep,
  computeCourseProgressSummary,
  recordTopicStarted,
  TOPIC_PROGRESS_UPDATED_EVENT,
} from '../../../services/topicProgressTracker';

export interface CourseProgressSidebarProps {
  curriculum: CurriculumTabLike[];
  courseKey: string;
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
  projectsCount: number;
  quizzesCount?: number;
  certificatesCount?: number;
  isTopicAccessible?: (courseKey: string, chapterNum: number, topicNum: number, tabId: string) => boolean;
  onResumeLesson?: (topicId: string, title: string, step: TopicActivityStep, tabId: string) => void;
}

export const CourseProgressSidebar: React.FC<CourseProgressSidebarProps> = ({
  curriculum,
  courseKey,
  activeTabId,
  onSelectTab,
  projectsCount,
  quizzesCount,
  certificatesCount = 1,
  isTopicAccessible,
  onResumeLesson,
}) => {
  const [refreshTick, setRefreshTick] = useState(0);

  // Listen for real-time lesson completion / start / enrollment updates (zero polling)
  useEffect(() => {
    const handleUpdate = () => setRefreshTick((t) => t + 1);
    window.addEventListener(TOPIC_PROGRESS_UPDATED_EVENT, handleUpdate);
    window.addEventListener('futureai_course_unlocked', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener(TOPIC_PROGRESS_UPDATED_EVENT, handleUpdate);
      window.removeEventListener('futureai_course_unlocked', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const summary = useMemo(
    () => computeCourseProgressSummary(curriculum, courseKey, isTopicAccessible),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [curriculum, courseKey, refreshTick]
  );

  const activeTrackStat = useMemo(
    () => summary.perTrack.find((t) => t.tabId === activeTabId) || summary.perTrack[0],
    [summary.perTrack, activeTabId]
  );

  const resolvedQuizzesCount = quizzesCount ?? summary.totalModules;
  const rawPercent =
    summary.totalLessons > 0 ? (summary.completedLessons / summary.totalLessons) * 100 : 0;
  const displayPercentLabel =
    summary.completedLessons > 0 && rawPercent < 1
      ? `${rawPercent.toFixed(1)}%`
      : `${Math.round(rawPercent)}%`;
  const visualPercent =
    summary.completedLessons > 0 ? Math.max(rawPercent, 3) : 0;

  const circumference = 2 * Math.PI * 28; // 175.93
  const strokeOffset = circumference * (1 - visualPercent / 100);
  const resume = summary.resumeTarget;

  const handleContinueClick = () => {
    if (!resume) return;
    recordTopicStarted(resume.topicId, courseKey, resume.tabId, resume.title);
    if (onResumeLesson) {
      onResumeLesson(resume.topicId, resume.title, resume.nextActivityStep, resume.tabId);
    } else {
      onSelectTab(resume.tabId);
    }
  };

  return (
    <aside className="lg:col-span-4 xl:col-span-3 space-y-4">
      {/* 1. YOUR PROGRESS CARD (Single Source of Truth across Course, Category & Modules) */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E6E0F4] shadow-[0_2px_12px_rgba(109,40,217,0.05)] space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-[15px] text-[#0F172A] m-0">Your Progress</h3>
          <span className="text-[11.5px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
            Course Overview
          </span>
        </div>

        {/* Circular Gauge Meter + Stronger Completed Topics Readout */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80">
          <div className="relative w-[72px] h-[72px] shrink-0 flex items-center justify-center">
            <svg className="w-[72px] h-[72px] -rotate-90" aria-hidden="true">
              <circle cx="36" cy="36" r="28" stroke="#E9E5F5" strokeWidth="6" fill="none" />
              <circle
                cx="36"
                cy="36"
                r="28"
                stroke={rawPercent >= 75 ? '#10B981' : '#6D28D9'}
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-500 ease-out"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-bold text-[14px] text-[#4C1D95] tabular-nums tracking-tight">
              {displayPercentLabel}
            </span>
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-[18px] font-bold text-[#0F172A] tabular-nums leading-none">
                {summary.completedLessons}
              </span>
              <span className="text-[12px] font-semibold text-slate-500 tabular-nums">
                / {summary.totalLessons} Topics Completed
              </span>
            </div>
            <span className="text-[11.5px] font-medium text-[#64748B] mt-1 leading-snug tabular-nums">
              {summary.inProgressLessons} in progress
              {activeTrackStat
                ? (() => {
                    const tRaw =
                      activeTrackStat.totalLessons > 0
                        ? (activeTrackStat.completedLessons / activeTrackStat.totalLessons) * 100
                        : 0;
                    const tPct =
                      activeTrackStat.completedLessons > 0 && tRaw < 10
                        ? `${tRaw.toFixed(1)}%`
                        : `${Math.round(tRaw)}%`;
                    return ` • ${activeTrackStat.shortTitle}: ${activeTrackStat.completedLessons}/${activeTrackStat.totalLessons} (${tPct})`;
                  })()
                : ''}
            </span>
            <div className="w-full h-1.5 rounded-full bg-white border border-[#EAE5F5] overflow-hidden mt-2">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  rawPercent >= 75 ? 'bg-emerald-500' : 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6]'
                }`}
                style={{ width: `${visualPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* 4-Grid Course-Specific Stat Boxes (Subtle, calm, professional colors) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 pt-0.5">
          <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#6D28D9] border border-purple-200/60 flex items-center justify-center font-bold text-xs shrink-0 tabular-nums">
              {projectsCount}
            </div>
            <span className="text-xs font-semibold text-slate-800 leading-tight">Projects</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80 flex items-center justify-center font-bold text-xs shrink-0 tabular-nums">
              {resolvedQuizzesCount}
            </div>
            <span className="text-xs font-semibold text-slate-800 leading-tight">Modules</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/70 flex items-center justify-center font-bold text-xs shrink-0 tabular-nums">
              {certificatesCount}
            </div>
            <span className="text-xs font-semibold text-slate-800 leading-tight">Certificate</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/70 flex items-center justify-center font-bold text-[11px] shrink-0 tabular-nums">
              {summary.hoursSpent}
            </div>
            <span className="text-xs font-semibold text-slate-800 leading-tight">hrs Spent</span>
          </div>
        </div>
      </div>

      {/* 2. CONTINUE LEARNING / START YOUR LEARNING JOURNEY CARD */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E6E0F4] shadow-[0_2px_12px_rgba(109,40,217,0.05)] space-y-3.5">
        {resume && resume.hasStarted ? (
          <>
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-bold text-[15px] text-[#111827] m-0 flex items-center gap-1.5">
                <Play className="w-4 h-4 text-[#6D28D9] fill-[#6D28D9]" />
                <span>Continue Learning</span>
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-[#6D28D9] text-[10.5px] font-bold">
                {resume.categoryName}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2">
              <p className="text-[11px] font-bold text-[#6D28D9] uppercase tracking-wide m-0 truncate">
                {resume.moduleTitle}
              </p>
              <h4 className="text-[13.5px] font-bold text-[#111827] leading-snug m-0">
                {resume.title}
              </h4>

              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between text-[11px] font-semibold">
                  <span className="text-[#64748B]">Next: {resume.nextActivityLabel}</span>
                  <span className="text-[#6D28D9] font-bold tabular-nums">{resume.topicPercent}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-purple-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#6D28D9] transition-all duration-300"
                    style={{ width: `${Math.max(8, resume.topicPercent)}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleContinueClick}
              className="w-full py-2.5 px-4 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[15px] text-[#111827] m-0">
                Start Your Learning Journey
              </h3>
            </div>

            {resume && (
              <div className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-1.5">
                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#6D28D9] uppercase tracking-wide">
                  <BookOpen className="w-3 h-3" />
                  <span>{resume.categoryName} • First Topic</span>
                </span>
                <p className="text-[11.5px] font-semibold text-[#64748B] m-0 truncate">
                  {resume.moduleTitle}
                </p>
                <h4 className="text-[13.5px] font-bold text-[#111827] leading-snug m-0">
                  {resume.title}
                </h4>
              </div>
            )}

            <button
              type="button"
              onClick={handleContinueClick}
              disabled={!resume}
              className="w-full py-2.5 px-4 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-50"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </>
        )}
      </div>
    </aside>
  );
};
