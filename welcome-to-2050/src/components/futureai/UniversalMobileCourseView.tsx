import React, { useRef } from 'react';
import {
  ArrowLeft,
  Flame,
  Play,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Check,
  Lock,
  ListChecks,
  Box,
  Award,
  Briefcase,
  FileText,
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

  // Optional course-specific tags & highlight banner
  techStackTags?: string[];
  courseHighlightTag?: string;

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
    '💬 Interview Preparation',
    '📜 Industry Certificate',
    '🤖 AI-Powered Learning',
  ],
  enrollPriceText = 'Enroll for ₹499',
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
  techStackTags,
  courseHighlightTag,
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

  // Course-specific tech pills displayed on the right of hero banner
  const resolvedTechTags: string[] = React.useMemo(() => {
    if (techStackTags && techStackTags.length > 0) return techStackTags;
    // Derive from track titles
    const derived = tabs.map((t) => t.shortTitle || t.title.split(' ')[0]).filter(Boolean);
    if (derived.length > 0) return derived.slice(0, 5);

    switch (courseId) {
      case 'data_analyst':
      case 'data_analytics':
        return ['Excel', 'SQL', 'Python', 'Power BI', 'GenAI'];
      case 'data_science':
      case 'datascience':
        return ['Python', 'Agents', 'ML', 'PyTorch', 'GenAI'];
      case 'ml_engineering':
      case 'mlengineering':
        return ['PyTorch', 'MLOps', 'Neural Nets', 'Docker', 'FastAPI'];
      case 'ai_engineering':
      case 'aiengineering':
        return ['LLMs', 'LangChain', 'RAG', 'Vector DB', 'Agents'];
      case 'fullstack_mern':
      case 'full_stack':
        return ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js'];
      case 'msoffice_copilot':
      case 'copilot':
        return ['Excel AI', 'PowerPoint', 'Word AI', 'Outlook', 'Copilot'];
      default:
        return ['Hands-on', 'Live Code', 'AI Assisted', 'Real Projects', 'Certificate'];
    }
  }, [courseId, techStackTags, tabs]);

  // Resolves course-specific banner image ensuring zero broken/unrelated images
  const resolvedBannerImage = React.useMemo(() => {
    if (courseBannerImage && courseBannerImage !== '/images/future_it_industries_campus_banner.png') {
      return courseBannerImage;
    }
    switch (courseId) {
      case 'data_analyst':
      case 'data_analytics':
        return '/images/data_analyst_light_banner.jpg';
      case 'data_science':
      case 'datascience':
        return '/images/course_data_science_art.png';
      case 'ml_engineering':
      case 'mlengineering':
        return '/images/course_ml_eng_art.png';
      case 'ai_engineering':
      case 'aiengineering':
        return '/images/course_ai_eng_art.png';
      case 'fullstack_mern':
      case 'full_stack':
        return '/images/courses_hero_banner_bg.png';
      case 'msoffice_copilot':
      case 'copilot':
        return '/images/msoffice_365_copilot_poster.jpg';
      default:
        return courseBannerImage || '/images/data_analyst_light_banner.jpg';
    }
  }, [courseId, courseBannerImage]);

  // Default 3D icon resolver
  const resolveTabIcon = (tabNum: number, iconName?: string) => {
    if (getTabRealIcon) {
      return getTabRealIcon(tabNum, iconName);
    }
    const cleanName = (iconName || '').toLowerCase();
    if (cleanName.includes('excel')) return '/images/icons3d/icon_03_excel.png';
    if (cleanName.includes('sql')) return '/images/icons3d/icon_02_sql.png';
    if (cleanName.includes('python')) return '/images/icons3d/icon_01_python.png';
    if (cleanName.includes('powerbi') || cleanName.includes('power bi')) return '/images/icons3d/icon_04_powerbi.png';
    if (cleanName.includes('genai') || cleanName.includes('ai')) return '/images/icons3d/icon_06_genai.png';
    if (cleanName.includes('target') || cleanName.includes('foundations')) return '/images/icons3d/icon_goal_target.png';
    if (cleanName.includes('project') || cleanName.includes('capstone')) return '/images/icons3d/icon_10_capstone.png';

    switch (tabNum) {
      case 1:
        return '/images/icons3d/icon_goal_target.png';
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
        return '/images/icons3d/icon_08_bizanalytics.png';
      case 8:
        return '/images/icons3d/icon_10_capstone.png';
      default:
        return '/images/icons3d/icon_goal_target.png';
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
          1. UNIVERSAL MOBILE COURSE HERO (1:1 with Reference Design)
          ───────────────────────────────────────────────────────────────────── */}
      <section className="umc-hero-card">
        {/* Background photo positioned on right */}
        <img
          src={resolvedBannerImage}
          alt={courseTitle}
          className="absolute right-0 bottom-0 top-0 w-[55%] h-full object-cover object-right pointer-events-none z-0"
          onError={(e) => {
            if (courseBannerFallback) {
              (e.target as HTMLImageElement).src = courseBannerFallback;
            }
          }}
        />

        {/* Soft pearl / daylight white gradient overlay fading toward the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 pointer-events-none z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none z-1" />

        {/* Floating tech badges on top right (Matching reference) */}
        <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-1.5 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-blue-50/95 backdrop-blur-md border border-blue-200 text-[8.5px] font-black text-[#0066ff] shadow-xs uppercase tracking-wider">
            {courseHighlightTag || 'GLOBAL OPPORTUNITIES'}
          </span>
          {/* Floating Vertical Tech Stack Badge */}
          <div className="hidden min-[360px]:flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-blue-200/60 shadow-xs text-[8.5px] font-black text-[#0066ff] leading-tight">
            {resolvedTechTags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 p-3.5 min-[390px]:p-4 flex flex-col justify-between">
          <div className="space-y-2 max-w-[82%] min-[412px]:max-w-[85%]">
            {/* Top row: Back arrow + Most Popular Badge */}
            <div className="flex items-center gap-2">
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  title="Back to All Courses"
                  aria-label="Back"
                  className="w-7 h-7 shrink-0 rounded-full bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-200/90 shadow-2xs active:scale-95 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-800 stroke-[2.5]" />
                </button>
              )}
              {badgeText && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-black text-orange-600 tracking-wide uppercase shadow-2xs">
                  <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 shrink-0" />
                  <span>{badgeText}</span>
                </div>
              )}
            </div>

            {/* Course Title (2 lines style matching reference image) */}
            <h1 className="text-[21px] min-[390px]:text-[24px] font-black tracking-tight text-slate-950 leading-[1.15]">
              {courseTitle}
              {courseTitleHighlight && (
                <span className="text-[#0066ff] font-black block">
                  {courseTitlePrefix}{courseTitleHighlight}
                </span>
              )}
            </h1>

            {/* Course Description */}
            <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
              {courseDescription}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[9.5px] font-bold text-slate-700">
              {featurePills.map((pill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 bg-white/95 border border-slate-200/90 px-2 py-0.5 rounded-full shadow-2xs"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* 3 Action Buttons Matching Reference */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  if (onResumeLearning) onResumeLearning();
                  else if (activeTab?.chapters?.[0]?.topics?.[0]) {
                    onSelectTopic(activeTab.chapters[0].topics[0], activeTab.chapters[0].chapterNum);
                  }
                }}
                className="px-3.5 py-2 rounded-full bg-[#0066ff] hover:bg-blue-700 text-white font-black text-xs flex items-center gap-1.5 shadow-sm shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <Play className="w-3 h-3 fill-white shrink-0" />
                <span>Resume Learning</span>
                <span className="text-xs">›</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onEnroll) onEnroll();
                }}
                className={`px-3.5 py-2 rounded-full font-black text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer ${
                  isCoursePaid
                    ? 'bg-slate-900 text-white shadow-slate-900/20'
                    : 'bg-[#10b981] hover:bg-emerald-600 text-white shadow-emerald-500/25'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-200 shrink-0" />
                <span>{isCoursePaid ? 'Enrolled ✓' : enrollPriceText}</span>
                <span className="text-xs">›</span>
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
                className="px-3.5 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>View Course Overview</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          2. COURSE STATISTICS (5 SEPARATE COMPACT WHITE CARDS MATCHING REFERENCE)
          ───────────────────────────────────────────────────────────────────── */}
      <section className="mt-3">
        <div className="grid grid-cols-5 gap-1.5">
          {/* 1. Modules */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between text-center min-h-[76px]">
            <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0066ff] flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span className="text-[17px] font-black text-slate-900 leading-none">
              {totalModules}
            </span>
            <span className="text-[9.5px] font-bold text-slate-500 leading-tight">
              Modules
            </span>
          </div>

          {/* 2. Topics */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between text-center min-h-[76px]">
            <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <ListChecks className="w-3.5 h-3.5" />
            </div>
            <span className="text-[17px] font-black text-slate-900 leading-none">
              {totalTopics}
            </span>
            <span className="text-[9.5px] font-bold text-slate-500 leading-tight">
              Topics
            </span>
          </div>

          {/* 3. Projects */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between text-center min-h-[76px]">
            <div className="w-6 h-6 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Box className="w-3.5 h-3.5" />
            </div>
            <span className="text-[17px] font-black text-slate-900 leading-none">
              {totalProjects}
            </span>
            <span className="text-[9.5px] font-bold text-slate-500 leading-tight">
              Projects
            </span>
          </div>

          {/* 4. Certificate */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between text-center min-h-[76px]">
            <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Award className="w-3.5 h-3.5" />
            </div>
            <span className="text-[17px] font-black text-slate-900 leading-none">
              {certificateLabel}
            </span>
            <span className="text-[9.5px] font-bold text-slate-500 leading-tight">
              Certificate
            </span>
          </div>

          {/* 5. Job Ready Skills */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between text-center min-h-[76px]">
            <div className="w-6 h-6 rounded-lg bg-amber-100/70 text-amber-800 flex items-center justify-center">
              <Briefcase className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col items-center justify-center leading-none">
              <span className="text-[10px] font-black text-slate-900 leading-tight">Job</span>
              <span className="text-[10px] font-black text-slate-900 leading-tight">Ready Skills</span>
            </div>
            <span className="text-[7.5px] font-bold text-emerald-600 uppercase tracking-tight">Verified</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          3. HORIZONTAL LEARNING TRACK NAVIGATION (Matching Reference Image)
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
                className={`umc-track-card border flex items-center gap-2.5 text-left transition-all ${
                  isActive
                    ? 'bg-[#0066ff] text-white border-[#0066ff] shadow-md shadow-blue-500/25'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 shadow-2xs'
                }`}
              >
                {/* 3D Icon Container */}
                <div className="relative shrink-0">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center p-1.5 ${
                      isActive
                        ? 'bg-white shadow-xs'
                        : 'bg-slate-50 border border-slate-200/80 shadow-2xs'
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

                  {/* Red Notification dot badge on active icon */}
                  {isActive ? (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white font-black text-[9px] flex items-center justify-center border-2 border-white shadow-xs">
                      !
                    </span>
                  ) : (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-slate-100 text-slate-600 font-bold text-[8.5px] flex items-center justify-center border border-slate-200">
                      {tab.tabNum}
                    </span>
                  )}
                </div>

                {/* Track Details */}
                <div className="flex flex-col min-w-0 pr-1">
                  <span
                    className={`text-xs font-bold leading-tight tracking-tight line-clamp-2 ${
                      isActive ? 'text-white font-black' : 'text-slate-900 font-bold'
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
                    {isActive && topicCount > 0 && (
                      <>
                        <span className="opacity-60">•</span>
                        <span>{topicCount} Topics</span>
                      </>
                    )}
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
              className="h-full bg-[#0066ff] rounded-full transition-all duration-300"
              style={{
                width: `${Math.max(16, 100 / Math.max(tabs.length, 1))}%`,
                transform: `translateX(${activeTabIndex * 100}%)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          4. ACTIVE TRACK HEADER & MODULE ACCORDION (1:1 with Reference Design)
          ───────────────────────────────────────────────────────────────────── */}
      <section className="mt-3 space-y-2.5">
        {/* Track Title banner matching reference image */}
        <div className="px-1 pt-2 pb-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066ff]" />
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
                className="w-full p-3 flex items-center justify-between gap-2.5 text-left transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  {/* Circle Number */}
                  <div className="w-8 h-8 rounded-full bg-[#0066ff] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    {chapter.chapterNum}
                  </div>

                  {/* Purple Book Icon */}
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col min-w-0 pr-1">
                    <h3 className="text-xs font-black text-slate-900 truncate">
                      {chapter.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                      {chapter.subtitle || 'Core industry concepts and practical examples'}
                    </p>
                  </div>
                </div>

                {/* Right side: If collapsed, show metadata + chevron; If expanded, show chevronUp */}
                <div className="flex items-center gap-2 shrink-0">
                  {!isExpanded && (
                    <div className="hidden min-[360px]:flex flex-col items-end text-right leading-none">
                      <span className="text-[10px] font-bold text-slate-700">{totalCount} Topics</span>
                      <span className="text-[9px] font-semibold text-slate-500 mt-0.5">
                        {completedCount} / {totalCount} completed <strong className="text-emerald-600 font-bold">{percent}%</strong>
                      </span>
                    </div>
                  )}
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0066ff] flex items-center justify-center border border-blue-100 shadow-2xs">
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              </button>

              {/* Subheader Progress Bar inside Expanded Module Card */}
              {isExpanded && (
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
              )}

              {/* Module Topics / Lessons List */}
              {isExpanded && (
                <div className="relative divide-y divide-slate-100 bg-white">
                  {chapter.topics.map((topic, tIdx) => {
                    const isTopicFree = isTopicUnlocked(
                      courseId as any,
                      chapter.chapterNum,
                      topic.topicNum || tIdx + 1,
                      activeTabId
                    );
                    const isLocked = !isTopicFree;
                    const isDone = false;
                    const isCurrent = isTopicFree && !isDone && tIdx === 0;

                    const cleanDuration = topic.duration
                      ? topic.duration.replace(/^Video\s*•\s*/i, '')
                      : '11 min';

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

                        {/* Play / Lock / Check Icon Matching Reference */}
                        <div className="relative z-10 shrink-0">
                          {isDone && (
                            <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xs">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                          {!isDone && !isLocked && (
                            <div className="w-7 h-7 rounded-full bg-[#0066ff] text-white flex items-center justify-center shadow-2xs">
                              <Play className="w-3 h-3 fill-white ml-0.5" />
                            </div>
                          )}
                          {isLocked && (
                            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shadow-2xs">
                              <Lock className="w-3 h-3 text-amber-800" />
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

                        {/* Right: Status Pill + Action Button Matching Reference */}
                        <div className="flex items-center gap-1.5 shrink-0 ml-1">
                          {/* Status Pill */}
                          {isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-blue-50 text-[#0066ff] border border-blue-200">
                              In Progress
                            </span>
                          )}
                          {!isDone && !isCurrent && !isLocked && (
                            <span className="px-2.5 py-0.5 rounded-full text-[9px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                              Not Started
                            </span>
                          )}
                          {isLocked && (
                            <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
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
                              className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-[#0066ff] hover:bg-blue-700 shadow-2xs active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                            >
                              <span>Continue</span>
                              <span>→</span>
                            </button>
                          )}

                          {!isDone && !isCurrent && !isLocked && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectTopic(topic, chapter.chapterNum);
                              }}
                              className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-[#0066ff] hover:bg-blue-700 shadow-2xs active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                            >
                              <span>Start</span>
                              <span>→</span>
                            </button>
                          )}

                          {isLocked && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onEnroll) onEnroll();
                              }}
                              className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-[#d97706] hover:bg-amber-700 shadow-2xs active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                            >
                              <Lock className="w-3 h-3" />
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
