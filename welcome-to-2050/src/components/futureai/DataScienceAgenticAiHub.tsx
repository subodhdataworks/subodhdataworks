import React, { useState, useRef, useEffect } from 'react';
import {
  CheckCircle2,
  Play,
  Lock,
  ChevronDown,
  Search,
  Sparkles,
  ArrowLeft,
  Flame,
  FileText,
  Check,
  RotateCcw,
  Code2,
  Mic
} from 'lucide-react';
import { DATA_SCIENCE_CURRICULUM, TabItem } from '../../data/dataScienceAgenticAiCurriculum';
import { SuccessPlanModal } from './SuccessPlanModal';
import { isCourseUnlocked, isTopicUnlocked } from '../../services/courseUnlockService';
import { UniversalMobileCourseView } from './UniversalMobileCourseView';
import './UniversalMobileCourseView.css';

interface DataScienceAgenticAiHubProps {
  userName?: string;
  onBack?: () => void;
  onStartTopic?: (topicId: string, title: string, step?: 'learn' | 'play' | 'interview') => void;
}

export const DataScienceAgenticAiHub: React.FC<DataScienceAgenticAiHubProps> = ({
  userName = 'SUBODH KUMAR',
  onBack,
  onStartTopic,
}) => {
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [activeTabId, setActiveTabId] = useState<string>('tab-1');
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    'mod-1': true,
  });
  const [isSuccessPlanOpen, setIsSuccessPlanOpen] = useState<boolean>(false);
  const [selectedTargetTitle, setSelectedTargetTitle] = useState<string>('');
  const [isCoursePaid, setIsCoursePaid] = useState<boolean>(() => isCourseUnlocked('data_science'));

  useEffect(() => {
    const handleUpdate = () => {
      setIsCoursePaid(isCourseUnlocked('data_science'));
    };
    window.addEventListener('futureai_course_unlocked', handleUpdate);
    return () => window.removeEventListener('futureai_course_unlocked', handleUpdate);
  }, []);

  const handleOpenSuccessPlan = (title?: string) => {
    setSelectedTargetTitle(title || 'Data Science & Agentic AI');
    setIsSuccessPlanOpen(true);
  };

  const handleModuleHeaderClick = (chapter: { id: string; title: string; chapterNum: number }) => {
    toggleChapter(chapter.id);
    if (chapter.chapterNum >= 2 && !isCoursePaid) {
      handleOpenSuccessPlan(chapter.title);
    }
  };

  const handleTopicClick = (
    topic: { id: string; title: string; topicNum?: number; status?: string },
    chapterNum: number = 1
  ) => {
    const isTopicFree = isTopicUnlocked('data_science', chapterNum, topic.topicNum || 1, activeTabId);

    if (!isTopicFree) {
      handleOpenSuccessPlan(topic.title);
    } else if (onStartTopic) {
      onStartTopic(topic.id, topic.title);
    }
  };

  const activeTab: TabItem =
    DATA_SCIENCE_CURRICULUM.find((t) => t.id === activeTabId) ||
    DATA_SCIENCE_CURRICULUM[0];

  const handleSelectTab = (tabId: string) => {
    setActiveTabId(tabId);
    const targetTab = DATA_SCIENCE_CURRICULUM.find((t) => t.id === tabId);
    if (targetTab && targetTab.chapters.length > 0) {
      setExpandedChapters((prev) => ({
        ...prev,
        [targetTab.chapters[0].id]: true,
      }));
    }
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

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  // Helper to get real 3D high-resolution icon for each tab
  const getTabRealIcon = (tabNum: number) => {
    switch (tabNum) {
      case 1:
        return '/images/icons3d/icon_08_bizanalytics.png';
      case 2:
        return '/images/icons3d/icon_01_python.png';
      case 3:
        return '/images/icons3d/icon_05_stats.png';
      case 4:
        return '/images/icons3d/icon_02_sql.png';
      case 5:
        return '/images/icons3d/icon_07_dataclean.png';
      case 6:
        return '/images/icons3d/icon_06_genai.png';
      case 7:
        return '/images/icons3d/icon_goal_target.png';
      case 8:
        return '/images/icons3d/icon_10_capstone.png';
      default:
        return '/images/icons3d/icon_08_bizanalytics.png';
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f7fd] text-slate-900 font-sans pb-16">
      
      {/* =========================================================================
          MAIN CONTAINER: STREAMLINED COMPACT TOP SPACING
          ========================================================================= */}
            {/* MOBILE APP-STYLE VIEW (<768px) */}
      <div className="course-mobile-only">
        <UniversalMobileCourseView
          courseId="data_science"
          courseTitle="Data Science &"
          courseTitleHighlight="Agentic AI"
          courseDescription="Master Python, Machine Learning, Deep Learning, Generative AI & Autonomous AI Agents to launch your high-paying Data Science career."
          courseBannerImage="/images/datascience_agentic_ai_poster.jpg"
          courseBannerFallback="/images/data_analyst_light_banner.jpg"
          badgeText="MOST ADVANCED"
          featurePills={[
            '📊 Beginner to Advanced',
            '🛠️ Hands-on Projects',
            '👥 Interview Preparation',
            '📜 Industry Certificate',
            '✨ AI-Powered Learning',
          ]}
          enrollPriceText="Enroll for ₹9"
          isCoursePaid={isCoursePaid}
          onBack={onBack}
          onEnroll={() => handleOpenSuccessPlan('Data Science & Agentic AI')}
          onResumeLearning={() => onStartTopic && onStartTopic('ds-t-1', 'What Is Data Science?')}
          tabs={DATA_SCIENCE_CURRICULUM}
          activeTabId={activeTabId}
          onSelectTab={handleSelectTab}
          expandedChapters={expandedChapters}
          onToggleChapter={toggleChapter}
          onSelectTopic={handleTopicClick}
          customStats={{"modulesCount":48,"topicsCount":380,"projectsCount":10,"certificatesCount":1,"jobReadySkillsCount":"Job Ready Skills"}}
        />
      </div>

      {/* DESKTOP VIEW (>=768px) - 100% UNCHANGED */}
      <div className="course-desktop-only">
        <main className="max-w-[1520px] mx-auto px-4 sm:px-6 pt-2 sm:pt-3 space-y-3">

        {/* =========================================================================
            1. TOP HERO BANNER: LIGHT EXECUTIVE THEME (HIGH-CONTRAST TECH BACKDROP)
            ========================================================================= */}
        <section className="w-full relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-white text-slate-900">
          {/* Full Background Daylight Tech Campus / AI Workspace Photo */}
          <img
            src="/images/hero-student-robot-workspace-2050.jpg"
            alt="Data Science & Agentic AI Students Collaboration"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/data_analyst_light_banner.jpg';
            }}
          />
          {/* Soft Pearl Gradient: Left side is crisp white for clear black text, smoothly fading to transparent towards the right so the image is fully visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/80 to-transparent pointer-events-none w-full md:w-[58%] lg:w-[52%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none md:hidden" />

          <div className="relative z-10 p-4 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">
            
            {/* Left Content Zone (Right side remains completely open so image is 100% visible) */}
            <div className="max-w-2xl space-y-2.5 min-w-0">
              {/* Back Arrow + Eyebrow Pill */}
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                {onBack && (
                  <button
                    type="button"
                    onClick={onBack}
                    title="Back to All Courses"
                    aria-label="Back"
                    className="w-8 h-8 shrink-0 rounded-full bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-200 shadow-2xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 text-slate-800 stroke-[2.5]" />
                  </button>
                )}
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[9.5px] sm:text-[11px] font-black text-blue-700 tracking-wide uppercase shadow-2xs min-w-0">
                  <Flame className="w-3.5 h-3.5 fill-blue-500 text-blue-500 shrink-0" />
                  <span className="truncate">FUTURE IT INDUSTRY • NEXT-GEN AI</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-xl min-[375px]:text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-slate-950 leading-tight">
                Data Science &{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Agentic AI
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13.5px] text-slate-700 font-semibold leading-relaxed max-w-xl">
                Master Machine Learning, Deep Learning, RAG architectures, and build Autonomous AI Agents with enterprise-grade Python frameworks.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[10px] sm:text-[10.5px] font-bold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🔰 Beginner to Advanced
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🤖 Autonomous AI Agents
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🧠 Deep Learning & LLMs
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🛠️ 8 Industry Capstones
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  📜 Certificate & Placement Support
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1.5">
                <button
                  type="button"
                  onClick={() => onStartTopic && onStartTopic('ds-t-1', 'What Is Data Science?')}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white shrink-0" />
                  <span>Resume Learning</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenSuccessPlan('Data Science & Agentic AI')}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm shadow-emerald-600/25 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Enroll for ₹987</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('ds-curriculum-tabs-map');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
                >
                  <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>View Course Overview</span>
                </button>
              </div>
            </div>

            {/* Bottom Stats Bar inside Hero (Translucent glass footer anchored at bottom) */}
            <div className="mt-5 pt-3 border-t border-slate-200/70 bg-white/75 backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-7 -mb-4 sm:-mb-6 lg:-mb-7 px-4 sm:px-6 lg:px-7 py-3 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-black text-slate-800 rounded-b-3xl">
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-black text-[11px]">39</span>
                <span>Modules</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-black text-[11px]">427</span>
                <span>Topics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center font-black text-[11px]">8</span>
                <span>Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center font-black text-[11px]">📜</span>
                <span>Certificate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-black text-[11px]">🎯</span>
                <span>Job Ready Skills</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. FULL-WIDTH HORIZONTAL TABS (Compact, Real 3D Icons, No "Tab" text)
            ========================================================================= */}
        <div id="ds-curriculum-tabs-map" className="overflow-x-auto scroll-smooth scrollbar-none pb-1.5 pt-0.5 px-0.5">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            {DATA_SCIENCE_CURRICULUM.map((tab) => {
              const isActive = tab.id === activeTabId;
              const moduleCount = tab.chapters.length;
              const topicCount = tab.chapters.reduce((acc, c) => acc + c.topics.length, 0);

              return (
                <button
                  key={tab.id}
                  type="button"
                  ref={(el) => { tabButtonRefs.current[tab.id] = el; }}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`group relative py-2 px-3 sm:py-2 sm:px-3 rounded-xl flex items-center gap-2.5 text-left transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer border ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border-blue-500 shadow-md shadow-blue-500/25 z-10'
                      : 'bg-white hover:bg-slate-50/90 text-slate-800 border-slate-200 hover:border-blue-300 hover:shadow-sm shadow-2xs'
                  }`}
                >
                  {/* Real 3D High-Definition Icon Tile */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 p-1 transition-all duration-200 ${
                      isActive
                        ? 'bg-white/20 backdrop-blur-xs border border-white/30'
                        : 'bg-slate-100/80 border border-slate-200/70 group-hover:border-blue-200'
                    }`}
                  >
                    <img
                      src={getTabRealIcon(tab.tabNum)}
                      alt={tab.title}
                      className="w-7 h-7 sm:w-7.5 sm:h-7.5 object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Title & Chapter Subtitle (No "Tab" text, just clean number and title) */}
                  <div className="flex flex-col min-w-0 pr-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-black w-4 h-4 rounded-md flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-white/25 text-white border border-white/30'
                          : 'bg-blue-50 text-blue-700 border border-blue-200/80'
                      }`}>
                        {tab.tabNum}
                      </span>
                      <span className={`text-xs sm:text-[13px] font-bold truncate leading-tight tracking-tight ${
                        isActive ? 'text-white' : 'text-slate-900'
                      }`}>
                        {tab.shortTitle}
                      </span>
                    </div>

                    <span className={`text-[10px] sm:text-[10.5px] font-medium leading-none mt-1 flex items-center gap-1 ${
                      isActive ? 'text-blue-100' : 'text-slate-500'
                    }`}>
                      <span>{moduleCount} Modules</span>
                      <span className="opacity-40">•</span>
                      <span>{topicCount} Topics</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            3. LOWER SECTION: 2-COLUMN LAYOUT (LEFT: CHAPTER ACCORDION • RIGHT: SIDEBAR BELOW TABS)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
          
          {/* ─────────────────────────────────────────────────────────────────────
              LEFT COLUMN: ACTIVE TAB ACCORDION (Cols 1-8 / 1-9)
              ───────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-4">

            {/* ACTIVE TAB MAIN ACCORDION CONTAINER */}
            <section className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-sm space-y-3">
              {/* Modules List for current active tab */}
              <div className="space-y-3">
                {activeTab.chapters.map((chapter) => {
                  const isExpanded = expandedChapters[chapter.id] ?? false;
                  const completedCount = chapter.topics.filter((t) => t.status === 'completed').length;
                  const totalCount = chapter.topics.length;
                  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

                  return (
                    <div
                      key={chapter.id}
                      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                        isExpanded
                          ? 'border-blue-300/90 bg-white shadow-md shadow-blue-500/5 ring-1 ring-blue-500/10'
                          : 'border-slate-200/90 bg-slate-50/40 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                      }`}
                    >
                      {/* Chapter / Module Accordion Header */}
                      <button
                        type="button"
                        onClick={() => handleModuleHeaderClick(chapter)}
                        className="group w-full p-4 sm:p-4.5 flex items-center justify-between gap-4 text-left transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Circle Number */}
                          <div className={`w-8 h-8 rounded-full font-black text-xs flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 group-hover:scale-105 ${
                            chapter.chapterNum <= 4 ? 'bg-blue-600 text-white' : 'bg-purple-600 text-white'
                          }`}>
                            {chapter.chapterNum}
                          </div>

                          {/* Doc/Code Icon */}
                          <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                            <FileText className="w-4 h-4" />
                          </div>

                          {/* Title & Description */}
                          <div className="flex flex-col min-w-0">
                            <h3 className="text-xs sm:text-sm font-black text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                              {chapter.title}
                            </h3>
                            <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                              {chapter.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Chapter Stats & Animated Chevron */}
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">
                            {totalCount} Topics
                          </span>
                          <div className="w-20 h-1.5 rounded-full bg-slate-200 overflow-hidden hidden sm:block">
                            <div
                              className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-black text-slate-700 hidden sm:inline">
                            {completedCount} / {totalCount} completed
                          </span>
                          <span className="text-xs font-black text-emerald-600">
                            {percent}%
                          </span>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isExpanded
                              ? 'bg-blue-50 text-blue-600 rotate-180 shadow-2xs'
                              : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600'
                          }`}>
                            <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                          </div>
                        </div>
                      </button>

                      {/* Smooth animated accordion collapse/expand container */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden divide-y divide-slate-100 border-t border-slate-200/80 bg-white">
                          {chapter.topics.map((topic, tIdx) => {
                            const isTopicFree = isTopicUnlocked('data_science', chapter.chapterNum, topic.topicNum || tIdx + 1, activeTabId);
                            const isLocked = !isTopicFree;
                            const isDone = false;
                            const isCurrent = isTopicFree && !isDone;

                            return (
                              <div
                                key={topic.id}
                                onClick={() => handleTopicClick(topic, chapter.chapterNum)}
                                className={`group/topic p-3 sm:px-4 sm:py-3.5 flex items-center justify-between gap-3 text-xs transition-all duration-200 cursor-pointer ${
                                  isCurrent ? 'bg-blue-50/60' : 'hover:bg-slate-50/90'
                                }`}
                              >
                                {/* Left: Number + Status Icon + Title */}
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <span className="text-[11px] sm:text-xs font-black text-slate-400 w-7 sm:w-8 shrink-0 text-left group-hover/topic:text-slate-600 transition-colors">
                                    {topic.topicNum}.
                                  </span>

                                  {isDone && (
                                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/topic:scale-110 transition-transform duration-200">
                                      <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                  )}
                                  {isCurrent && (
                                    <span className="relative flex h-5 w-5 shrink-0">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
                                      <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-600 text-white items-center justify-center shadow-xs">
                                        <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                                      </span>
                                    </span>
                                  )}
                                  {isLocked && (
                                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover/topic:scale-110 transition-transform">
                                      <Lock className="w-2.5 h-2.5" />
                                    </div>
                                  )}

                                  <span className={`font-bold truncate transition-colors duration-150 ${
                                    isCurrent
                                      ? 'text-blue-900 font-extrabold'
                                      : isLocked
                                      ? 'text-slate-700 group-hover/topic:text-blue-600'
                                      : 'text-slate-800 group-hover/topic:text-blue-600'
                                  }`}>
                                    {topic.title}
                                  </span>
                                </div>

                                {/* Right: Duration + Status Pill + Action Button (Desktop Only: hidden on mobile so topic title is fully visible) */}
                                <div className="hidden sm:flex items-center gap-2.5 shrink-0">
                                  <span className="text-[11px] font-medium text-slate-400 hidden sm:inline">
                                    {topic.duration}
                                  </span>

                                  {/* Status Pill */}
                                  {isDone && (
                                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs" title="Completed">
                                      <Check className="w-3 h-3 stroke-[3]" />
                                    </span>
                                  )}
                                  {isCurrent && (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 transition-colors">
                                      In Progress
                                    </span>
                                  )}
                                  {isLocked && (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-50 text-amber-800 border border-amber-200">
                                      Enroll to Unlock
                                    </span>
                                  )}

                                  {/* Action Buttons (Smooth & Animated) */}
                                  {isDone && (
                                    <div className="flex items-center gap-1.5">
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          onStartTopic && onStartTopic(topic.id, topic.title, 'learn');
                                        }}
                                        className="px-2.5 py-1 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200 hover:border-blue-600 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1"
                                        title="Watch Video"
                                      >
                                        <Play className="w-3 h-3 fill-current" />
                                        <span>Video</span>
                                      </button>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          onStartTopic && onStartTopic(topic.id, topic.title, 'play');
                                        }}
                                        className="px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200 hover:border-emerald-600 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1"
                                        title="Practice Code"
                                      >
                                        <Code2 className="w-3 h-3" />
                                        <span>Practice Code</span>
                                      </button>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          onStartTopic && onStartTopic(topic.id, topic.title, 'interview');
                                        }}
                                        className="px-2.5 py-1 rounded-lg text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-600 hover:text-white border border-purple-200 hover:border-purple-600 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1"
                                        title="Mock Interview"
                                      >
                                        <Mic className="w-3 h-3" />
                                        <span>Mock Interview</span>
                                      </button>
                                    </div>
                                  )}
                                  {isCurrent && (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onStartTopic && onStartTopic(topic.id, topic.title);
                                      }}
                                      className="group/btn px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:shadow-md hover:shadow-blue-500/30 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
                                    >
                                      <span>Continue</span>
                                      <Play className="w-2.5 h-2.5 fill-white group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                                    </button>
                                  )}
                                  {isLocked && (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleTopicClick(topic);
                                      }}
                                      className="group/btn px-3.5 py-1.5 rounded-lg text-xs font-black text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 hover:shadow-md hover:shadow-amber-500/30 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-xs"
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
                      </div>
                    </div>
                  );
                })}
              </div>

            </section>

          </div>


          {/* ─────────────────────────────────────────────────────────────────────
              RIGHT COLUMN: SIDEBAR WIDGETS (Cols 9-12 / 10-12)
              ───────────────────────────────────────────────────────────────────── */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-4">
            
            {/* 1. YOUR PROGRESS CARD */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm text-slate-900">Your Progress</h3>
                <span className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">
                  View Details →
                </span>
              </div>

              {/* Circular Gauge Meter */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <svg className="w-16 h-16 -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="6" fill="none" />
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      stroke="#10b981"
                      strokeWidth="6"
                      strokeDasharray={163.36}
                      strokeDashoffset={163.36 * (1 - 0.15)}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span className="absolute font-black text-sm text-slate-900">15%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-slate-900">
                    30 / 427 Lessons Completed
                  </span>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mt-1.5">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>
              </div>

              {/* 4-Grid Stat Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                    8
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Projects</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0">
                    35
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Quizzes</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center font-black text-xs shrink-0">
                    1
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Certificate</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                    12
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">hrs Spent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. LEARNING PATH STEPPER */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm text-slate-900">Learning Path</h3>
                <span className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">
                  View All →
                </span>
              </div>

              <div className="space-y-3 pt-1">
                {/* Step 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 truncate">
                      Data Science Foundations
                    </span>
                    <span className="text-[10px] text-slate-400">4 / 31 lessons</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 truncate">
                      Python for Data Science
                    </span>
                    <span className="text-[10px] text-slate-400">0 / 80 lessons</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                    <Lock className="w-2.5 h-2.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-slate-400 truncate">
                      Mathematics & Statistics - Locked
                    </span>
                    <span className="text-[10px] text-slate-400">Complete previous tabs to unlock</span>
                  </div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </main>
      </div>

      {/* Choose Your Success Plan Modal Popup */}
      <SuccessPlanModal
        isOpen={isSuccessPlanOpen}
        onClose={() => setIsSuccessPlanOpen(false)}
        targetTopicTitle={selectedTargetTitle}
        courseTitle="Data Science & Agentic AI"
      />

    </div>
  );
};

export default DataScienceAgenticAiHub;
