import React, { useRef } from 'react';
import {
  ArrowLeft,
  Flame,
  Play,
  Sparkles,
  Search,
  BookOpen,
  ChevronDown,
  Check,
  Lock,
  BarChart3,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { isTopicUnlocked } from '../../services/courseUnlockService';
import './UniversalMobileCourseView.css';

export interface UniversalTopicItem {
  id: string;
  topicNum?: number;
  title: string;
  duration?: string;
  type?: string;
  status?: string;
}

export interface UniversalChapterItem {
  id: string;
  chapterNum: number;
  title: string;
  subtitle?: string;
  topics: UniversalTopicItem[];
}

export interface UniversalTabItem {
  id: string;
  tabNum: number;
  title: string;
  shortTitle?: string;
  subtitle?: string;
  iconName?: string;
  isFree?: boolean;
  chapters: UniversalChapterItem[];
}

export interface UniversalMobileCourseViewProps {
  courseId: string;
  courseTitle: string;
  courseTitlePrefix?: string;
  courseTitleHighlight?: string;
  courseDescription: string;
  courseBannerImage: string;
  courseBannerFallback?: string;
  badgeText?: string;
  featurePills?: string[];
  enrollPriceText?: string;
  isCoursePaid: boolean;
  onBack?: () => void;
  onEnroll?: () => void;
  onResumeLearning?: () => void;
  onViewOverview?: () => void;

  // Curriculum data
  tabs: UniversalTabItem[];
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
  expandedChapters: Record<string, boolean>;
  onToggleChapter: (chapterId: string) => void;
  onSelectTopic: (topic: UniversalTopicItem, chapterNum: number) => void;
  onStartTopicAction?: (topicId: string, title: string, step?: 'learn' | 'play' | 'interview') => void;

  // Stats override or auto-calculated
  customStats?: {
    modulesCount?: number;
    topicsCount?: number;
    projectsCount?: number;
    certificatesCount?: number | string;
    jobReadySkillsCount?: string;
  };

  // Icon getter for tabs
  getTabRealIcon?: (tabNum: number, iconName?: string) => string;
}

export const UniversalMobileCourseView: React.FC<UniversalMobileCourseViewProps> = ({
  courseId,
  courseTitle,
  courseTitlePrefix = '',
  courseTitleHighlight,
  courseDescription,
  courseBannerImage,
  courseBannerFallback = '/images/future_it_industries_campus_banner.png',
  badgeText = 'Most Popular',
  featurePills = [
    '📊 Beginner to Advanced',
    '🛠️ Hands-on Projects',
    '👥 Interview Preparation',
    '📜 Industry Certificate',
    '✨ AI-Powered Learning',
  ],
  enrollPriceText = 'Enroll for ₹4',
  isCoursePaid,
  onBack,
  onEnroll,
  onResumeLearning,
  onViewOverview,
  tabs,
  activeTabId,
  onSelectTab,
  expandedChapters,
  onToggleChapter,
  onSelectTopic,
  onStartTopicAction,
  customStats,
  getTabRealIcon,
}) => {
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Active track item
  const activeTab: UniversalTabItem = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const activeTabIndex = Math.max(0, tabs.findIndex((t) => t.id === activeTabId));

  // Auto-calculated stats across entire course
  const totalModules = customStats?.modulesCount ?? tabs.reduce((acc, t) => acc + t.chapters.length, 0);
  const totalTopics =
    customStats?.topicsCount ??
    tabs.reduce((acc, t) => acc + t.chapters.reduce((a, c) => a + c.topics.length, 0), 0);
  const totalProjects = customStats?.projectsCount ?? 8;
  const certificateLabel = customStats?.certificatesCount ?? '1';

  // Default 3D icon resolver if not provided
  const resolveTabIcon = (tabNum: number, iconName?: string) => {
    if (getTabRealIcon) {
      return getTabRealIcon(tabNum, iconName);
    }
    switch (iconName) {
      case 'excel':
        return '/images/icons3d/icon_03_excel.png';
      case 'sql':
        return '/images/icons3d/icon_02_sql.png';
      case 'python':
        return '/images/icons3d/icon_01_python.png';
      case 'powerbi':
        return '/images/icons3d/icon_04_powerbi.png';
      case 'genai':
        return '/images/icons3d/icon_06_genai.png';
      case 'target':
        return '/images/icons3d/icon_goal_target.png';
      case 'project':
        return '/images/icons3d/icon_10_capstone.png';
      default:
        switch (tabNum) {
          case 1:
            return '/images/icons3d/icon_08_bizanalytics.png';
          case 2:
            return '/images/icons3d/icon_03_excel.png';
          case 3:
            return '/images/icons3d/icon_02_sql.png';
          case 4:
            return '/images/icons3d/icon_01_python.png';
          case 5:
            return '/images/icons3d/icon_04_powerbi.png';
          case 6:
            return '/images/icons3d/icon_06_genai.png';
          case 7:
            return '/images/icons3d/icon_goal_target.png';
          case 8:
            return '/images/icons3d/icon_10_capstone.png';
          default:
            return '/images/icons3d/icon_08_bizanalytics.png';
        }
    }
  };

  const handleTabClick = (tabId: string) => {
    onSelectTab(tabId);
    setTimeout(() => {
      const btn = tabButtonRefs.current[tabId];
      if (btn) {
        btn.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }, 50);
  };

  return (
    <div className="umc-container">
      {/* ─────────────────────────────────────────────────────────────────────
          1. UNIVERSAL MOBILE COURSE HERO
          ───────────────────────────────────────────────────────────────────── */}
      <section className="umc-hero-card">
        {/* Background photo */}
        <img
          src={courseBannerImage}
          alt={courseTitle}
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
          onError={(e) => {
            if (courseBannerFallback) {
              (e.target as HTMLImageElement).src = courseBannerFallback;
            }
          }}
        />

        {/* Soft pearl / daylight white overlay fading gracefully toward the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent pointer-events-none" />

        {/* Floating tech badges on top right */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 pointer-events-none">
          <div className="w-9 h-9 rounded-xl bg-blue-600/90 backdrop-blur-md shadow-md border border-white/40 flex flex-col items-center justify-center text-white">
            <Cpu className="w-3.5 h-3.5 text-blue-100" />
            <span className="text-[8px] font-black tracking-wider leading-none mt-0.5">AI</span>
          </div>
          <div className="w-9 h-9 rounded-xl bg-emerald-600/90 backdrop-blur-md shadow-md border border-white/40 flex items-center justify-center text-white">
            <BarChart3 className="w-4 h-4 text-emerald-100" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 p-4 flex flex-col justify-between">
          <div className="space-y-2.5 max-w-[85%] min-[412px]:max-w-[88%]">
            {/* Top row: Back arrow + Badge */}
            <div className="flex items-center gap-2">
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  title="Back to All Courses"
                  aria-label="Back"
                  className="w-8 h-8 shrink-0 rounded-full bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-200/90 shadow-2xs active:scale-95 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-800 stroke-[2.5]" />
                </button>
              )}
              {badgeText && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[10.5px] font-black text-orange-700 tracking-wide uppercase shadow-2xs">
                  <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 shrink-0" />
                  <span>{badgeText}</span>
                </div>
              )}
            </div>

            {/* Course Title (2 lines style matching reference image) */}
            <h1 className="text-2xl min-[375px]:text-[26px] font-black tracking-tight text-slate-950 leading-[1.15]">
              {courseTitle}
              {courseTitleHighlight && (
                <>
                  <br />
                  {courseTitlePrefix && (
                    <span className="text-slate-900 font-black">{courseTitlePrefix}</span>
                  )}
                  <span className="text-[#1a73e8] font-black">
                    {courseTitleHighlight}
                  </span>
                </>
              )}
            </h1>

            {/* Course Description */}
            <p className="text-xs text-slate-700 font-semibold leading-relaxed">
              {courseDescription}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[10px] font-bold text-slate-700">
              {featurePills.map((pill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 bg-white/95 border border-slate-200/90 px-2.5 py-1 rounded-full shadow-2xs"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* 3 Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  if (onResumeLearning) onResumeLearning();
                  else if (activeTab?.chapters?.[0]?.topics?.[0]) {
                    onSelectTopic(activeTab.chapters[0].topics[0], activeTab.chapters[0].chapterNum);
                  }
                }}
                className="px-4 py-2.5 rounded-full bg-[#1a73e8] hover:bg-blue-700 text-white font-black text-xs flex items-center gap-2 shadow-sm shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>Resume Learning</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onEnroll) onEnroll();
                }}
                className={`px-4 py-2.5 rounded-full font-black text-xs flex items-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer ${
                  isCoursePaid
                    ? 'bg-slate-900 text-white shadow-slate-900/20'
                    : 'bg-[#0f9d58] hover:bg-emerald-700 text-white shadow-emerald-600/25'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>{isCoursePaid ? 'Enrolled ✓' : enrollPriceText}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onViewOverview) {
                    onViewOverview();
                  } else {
                    const el = document.getElementById('mobile-curriculum-tracks');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>View Course Overview</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          2. COURSE STATISTICS (5 SEPARATE COMPACT WHITE CARDS)
          ───────────────────────────────────────────────────────────────────── */}
      <section className="mt-3">
        <div className="grid grid-cols-5 gap-1.5">
          {/* 1. Modules */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-center text-center">
            <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-black">
              {totalModules}
            </span>
            <span className="text-[10px] font-bold text-slate-700 mt-1 leading-tight">
              Modules
            </span>
          </div>

          {/* 2. Topics */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-center text-center">
            <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-black">
              {totalTopics}
            </span>
            <span className="text-[10px] font-bold text-slate-700 mt-1 leading-tight">
              Topics
            </span>
          </div>

          {/* 3. Projects */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-center text-center">
            <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs font-black">
              {totalProjects}
            </span>
            <span className="text-[10px] font-bold text-slate-700 mt-1 leading-tight">
              Projects
            </span>
          </div>

          {/* 4. Certificate */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-center text-center">
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-black">
              {certificateLabel}
            </span>
            <span className="text-[10px] font-bold text-slate-700 mt-1 leading-tight">
              Certificate
            </span>
          </div>

          {/* 5. Job Ready Skills */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-center text-center">
            <span className="w-6 h-6 rounded-md bg-amber-100/70 text-amber-800 flex items-center justify-center text-xs">
              💼
            </span>
            <span className="text-[9.5px] font-bold text-slate-700 mt-1 leading-tight">
              Job Ready Skills
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          3. HORIZONTAL LEARNING TRACK NAVIGATION
          ───────────────────────────────────────────────────────────────────── */}
      <section id="mobile-curriculum-tracks" className="mt-3">
        <div className="umc-horizontal-tracks">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            const moduleCount = tab.chapters.length;
            const topicCount = tab.chapters.reduce((acc, c) => acc + c.topics.length, 0);

            return (
              <button
                key={tab.id}
                type="button"
                ref={(el) => {
                  tabButtonRefs.current[tab.id] = el;
                }}
                onClick={() => handleTabClick(tab.id)}
                className={`umc-track-card border flex items-center gap-3 text-left ${
                  isActive
                    ? 'bg-[#1a73e8] text-white border-blue-600 shadow-md shadow-blue-500/25'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 shadow-2xs'
                }`}
              >
                {/* 3D Icon container with number badge in corner */}
                <div className="relative shrink-0">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center p-1.5 ${
                      isActive
                        ? 'bg-white shadow-xs'
                        : 'bg-white border border-slate-200/80 shadow-2xs'
                    }`}
                  >
                    <img
                      src={resolveTabIcon(tab.tabNum, tab.iconName)}
                      alt={tab.title}
                      className="w-8 h-8 object-contain drop-shadow-xs"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Corner Number Badge */}
                  <span
                    className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-black flex items-center justify-center shadow-xs border ${
                      isActive
                        ? 'bg-red-500 text-white border-white'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}
                  >
                    {tab.tabNum}
                  </span>
                </div>

                {/* Track Details */}
                <div className="flex flex-col min-w-0 pr-1">
                  <span
                    className={`text-xs font-bold leading-tight tracking-tight line-clamp-2 ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {tab.shortTitle || tab.title}
                  </span>

                  <span
                    className={`text-[10px] font-medium leading-none mt-1 flex items-center gap-1 ${
                      isActive ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    <span>{moduleCount} Modules</span>
                    <span className="opacity-40">•</span>
                    <span>{topicCount} Topics</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Subtle Horizontal Track Scroll Indicator */}
        <div className="w-full px-1 pt-1.5 pb-0.5">
          <div className="w-full h-1 rounded-full bg-slate-200/80 overflow-hidden relative">
            <div
              className="h-full bg-[#1a73e8] rounded-full transition-all duration-300"
              style={{
                width: `${Math.max(16, 100 / Math.max(tabs.length, 1))}%`,
                transform: `translateX(${activeTabIndex * 100}%)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          4. ACTIVE TRACK HEADER & MODULE ACCORDION
          ───────────────────────────────────────────────────────────────────── */}
      <section className="mt-3 space-y-3">
        {/* Track Title banner matching reference image */}
        <div className="px-1 pt-1 pb-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1a73e8]" />
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider">
              {activeTab?.title || 'Data Analytics Foundations'}
            </h2>
          </div>
          <span className="text-[11px] font-bold text-slate-500">
            {activeTab?.chapters?.length || 0} Modules
          </span>
        </div>

        {/* Modules list */}
        {activeTab?.chapters?.map((chapter) => {
          const isExpanded = !!expandedChapters[chapter.id];
          const totalCount = chapter.topics.length;
          const completedCount = 0;
          const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

          return (
            <div key={chapter.id} className="umc-module-card">
              {/* Module Header Button */}
              <button
                type="button"
                onClick={() => onToggleChapter(chapter.id)}
                className="w-full p-3.5 flex items-center justify-between gap-3 text-left transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* Circle Number */}
                  <div className="w-8 h-8 rounded-full bg-[#1a73e8] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    {chapter.chapterNum}
                  </div>

                  {/* Purple Book Icon */}
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-xs font-black text-slate-900 truncate">
                      {chapter.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                      {chapter.subtitle}
                    </p>
                  </div>
                </div>

                {/* Animated Chevron */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isExpanded
                      ? 'bg-blue-50 text-blue-600 rotate-180 shadow-2xs'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                </div>
              </button>

              {/* Subheader Progress Bar inside Module Card */}
              <div className="px-3.5 pb-2.5 flex items-center justify-between gap-3 text-[10px] font-bold text-slate-500 border-b border-slate-100">
                <span className="shrink-0">{totalCount} Topics</span>
                <div className="flex-1 h-1.5 rounded-full bg-blue-100/70 overflow-hidden mx-1">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="shrink-0 text-slate-700 font-semibold">
                  {completedCount} / {totalCount} completed
                </span>
                <span className="shrink-0 text-emerald-600 font-black">
                  {percent}%
                </span>
              </div>

              {/* Module Topics / Lessons List */}
              {isExpanded && (
                <div className="relative divide-y divide-slate-100 bg-white">
                  {/* Subtle vertical timeline connecting play icons */}
                  <div className="absolute left-[38px] top-4 bottom-4 w-[1.5px] bg-blue-100 pointer-events-none -z-0" />

                  {chapter.topics.map((topic, tIdx) => {
                    const isTopicFree = isTopicUnlocked(
                      courseId as any,
                      chapter.chapterNum,
                      topic.topicNum || tIdx + 1,
                      activeTabId
                    );
                    const isLocked = !isTopicFree;
                    const isDone = false;
                    const isCurrent = isTopicFree && !isDone && tIdx < 2;

                    const cleanDuration = topic.duration
                      ? topic.duration.replace(/^Video\s*•\s*/i, '')
                      : '10 min';

                    return (
                      <div
                        key={topic.id}
                        onClick={() => {
                          if (isLocked) {
                            if (onEnroll) onEnroll();
                          } else {
                            onSelectTopic(topic, chapter.chapterNum);
                          }
                        }}
                        className={`umc-lesson-row relative z-10 cursor-pointer ${
                          isCurrent ? 'bg-blue-50/30' : 'hover:bg-slate-50'
                        }`}
                      >
                        {/* Left: Number + Icon */}
                        <span className="text-[11px] font-bold text-slate-400 w-4 shrink-0 text-left">
                          {topic.topicNum || tIdx + 1}.
                        </span>

                        {/* Play / Lock / Check Icon */}
                        <div className="relative z-10 shrink-0">
                          {isDone && (
                            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xs">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                          {!isDone && !isLocked && (
                            <div className="w-6 h-6 rounded-full bg-[#1a73e8] text-white flex items-center justify-center shadow-2xs">
                              <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                            </div>
                          )}
                          {isLocked && (
                            <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shadow-2xs">
                              <Lock className="w-2.5 h-2.5" />
                            </div>
                          )}
                        </div>

                        {/* Title & Duration (Two-line Column with line-clamp-2) */}
                        <div className="flex flex-col min-w-0 flex-1 ml-1.5 pr-1">
                          <span
                            className={`text-xs font-bold leading-snug line-clamp-2 ${
                              isCurrent
                                ? 'text-slate-900 font-extrabold'
                                : isLocked
                                ? 'text-slate-700'
                                : 'text-slate-800'
                            }`}
                          >
                            {topic.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                            Video • {cleanDuration}
                          </span>
                        </div>

                        {/* Right: Status Pill + Action Button */}
                        <div className="flex items-center gap-1.5 shrink-0 ml-1">
                          {/* Status Pill */}
                          {isCurrent && (
                            <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-blue-50 text-[#1a73e8] border border-blue-200">
                              In Progress
                            </span>
                          )}
                          {!isDone && !isCurrent && !isLocked && (
                            <span className="px-2 py-0.5 rounded-full text-[9.5px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                              Not Started
                            </span>
                          )}
                          {isLocked && (
                            <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                              Enroll to Unlock
                            </span>
                          )}

                          {/* Action Button */}
                          {isCurrent && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectTopic(topic, chapter.chapterNum);
                              }}
                              className="px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-[#1a73e8] hover:bg-blue-700 shadow-2xs active:scale-95 transition-all flex items-center gap-1"
                            >
                              <span>Continue</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          )}

                          {!isDone && !isCurrent && !isLocked && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectTopic(topic, chapter.chapterNum);
                              }}
                              className="px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-[#1a73e8] hover:bg-blue-700 shadow-2xs active:scale-95 transition-all flex items-center gap-1"
                            >
                              <span>Start</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          )}

                          {isLocked && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onEnroll) onEnroll();
                              }}
                              className="px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-2xs active:scale-95 transition-all flex items-center gap-1"
                            >
                              <Lock className="w-2.5 h-2.5" />
                              <span>Unlock</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default UniversalMobileCourseView;
