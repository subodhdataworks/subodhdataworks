import React, { useState } from 'react';
import {
  Play,
  Lock,
  ChevronDown,
  Search,
  Sparkles,
  ArrowLeft,
  Flame,
  FileText,
  Check,
  RotateCcw
} from 'lucide-react';
import { FULL_STACK_MERN_CURRICULUM, TabItem } from '../../data/fullStackMernCurriculum';
import { SuccessPlanModal } from './SuccessPlanModal';

interface FullStackMernHubProps {
  userName?: string;
  onBack?: () => void;
  onStartTopic?: (topicId: string, title: string) => void;
}

export const FullStackMernHub: React.FC<FullStackMernHubProps> = ({
  userName = 'SUBODH KUMAR',
  onBack,
  onStartTopic,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('tab-1');
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    'mod-1': true,
  });
  const [isSuccessPlanOpen, setIsSuccessPlanOpen] = useState<boolean>(false);
  const [selectedTargetTitle, setSelectedTargetTitle] = useState<string>('');

  const handleOpenSuccessPlan = (title?: string) => {
    setSelectedTargetTitle(title || 'Full-Stack MERN Development with AI');
    setIsSuccessPlanOpen(true);
  };

  const handleModuleHeaderClick = (chapter: { id: string; title: string; chapterNum: number }) => {
    toggleChapter(chapter.id);
    if (chapter.chapterNum >= 2) {
      handleOpenSuccessPlan(chapter.title);
    }
  };

  const handleTopicClick = (topic: { id: string; title: string; topicNum?: number; status?: string }) => {
    const isLockedTopic =
      topic.status === 'locked' ||
      (topic.topicNum !== undefined && topic.topicNum >= 5);

    if (isLockedTopic) {
      handleOpenSuccessPlan(topic.title);
    } else if (onStartTopic) {
      onStartTopic(topic.id, topic.title);
    }
  };

  const activeTab: TabItem =
    FULL_STACK_MERN_CURRICULUM.find((t) => t.id === activeTabId) ||
    FULL_STACK_MERN_CURRICULUM[0];

  const handleSelectTab = (tabId: string) => {
    setActiveTabId(tabId);
    const targetTab = FULL_STACK_MERN_CURRICULUM.find((t) => t.id === tabId);
    if (targetTab && targetTab.chapters.length > 0) {
      setExpandedChapters((prev) => ({
        ...prev,
        [targetTab.chapters[0].id]: true,
      }));
    }
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
        return '/images/icons3d/icon_todays_toolbox.png';
      case 3:
        return '/images/icons3d/icon_04_powerbi.png';
      case 4:
        return '/images/icons3d/icon_01_python.png';
      case 5:
        return '/images/icons3d/icon_06_genai.png';
      case 6:
        return '/images/icons3d/icon_goal_target.png';
      case 7:
        return '/images/icons3d/icon_02_sql.png';
      case 8:
        return '/images/icons3d/icon_10_capstone.png';
      default:
        return '/images/icons3d/icon_01_python.png';
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f7fd] text-slate-900 font-sans pb-16">
      
      {/* =========================================================================
          MAIN CONTAINER: STREAMLINED COMPACT TOP SPACING
          ========================================================================= */}
      <main className="max-w-[1520px] mx-auto px-4 sm:px-6 pt-2 sm:pt-3 space-y-3">

        {/* =========================================================================
            1. TOP HERO BANNER: LIGHT EXECUTIVE THEME (HIGH-CONTRAST TECH BACKDROP)
            ========================================================================= */}
        <section className="w-full relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-white text-slate-900">
          {/* Background Poster Image */}
          <img
            src="/images/full_stack_web_development_poster.jpg"
            alt="Full-Stack MERN Development with AI"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/data_analyst_light_banner.jpg';
            }}
          />
          {/* Soft Pearl Gradient: Left side is crisp white for clear black text, smoothly fading to transparent towards the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/80 to-transparent pointer-events-none w-full md:w-[58%] lg:w-[52%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none md:hidden" />

          <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">
            
            {/* Left Content Zone */}
            <div className="max-w-2xl space-y-2.5">
              {/* Back Arrow + Eyebrow Pill */}
              <div className="flex items-center gap-2.5">
                {onBack && (
                  <button
                    type="button"
                    onClick={onBack}
                    title="Back to All Courses"
                    aria-label="Back"
                    className="w-8 h-8 rounded-full bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-200 shadow-2xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 text-slate-800 stroke-[2.5]" />
                  </button>
                )}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-black text-emerald-800 tracking-wide uppercase shadow-2xs">
                  <Flame className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                  <span>FUTURE IT INDUSTRY • FULL-STACK MERN &amp; AI CODING</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-slate-950 leading-tight">
                Full-Stack MERN{' '}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                  Development with AI
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13.5px] text-slate-700 font-semibold leading-relaxed max-w-xl">
                Master MongoDB, Express.js, React.js, Node.js, Tailwind CSS, REST APIs, Git, GitHub Copilot, and full-stack cloud deployment.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[10.5px] font-bold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-3 py-1 rounded-full shadow-2xs">
                  🔰 Beginner to Advanced
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-3 py-1 rounded-full shadow-2xs">
                  ⚛️ React 18 &amp; Hooks
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-3 py-1 rounded-full shadow-2xs">
                  🟢 Node.js &amp; Express APIs
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-3 py-1 rounded-full shadow-2xs">
                  🍃 MongoDB &amp; JWT Auth
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-3 py-1 rounded-full shadow-2xs">
                  🤖 GitHub Copilot &amp; AI Tools
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1.5">
                <button
                  type="button"
                  onClick={() => onStartTopic && onStartTopic('fs-t-4', 'Full-stack development overview')}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm shadow-emerald-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Resume Learning</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenSuccessPlan('Full-Stack MERN Development with AI')}
                  className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm shadow-emerald-600/25 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Enroll for ₹987</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('mern-curriculum-tabs-map');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
                >
                  <Search className="w-3.5 h-3.5 text-slate-500" />
                  <span>View Course Overview</span>
                </button>
              </div>
            </div>

            {/* Bottom Stats Bar inside Hero */}
            <div className="mt-5 pt-3 border-t border-slate-200/70 bg-white/75 backdrop-blur-sm -mx-5 sm:-mx-6 lg:-mx-7 -mb-5 sm:-mb-6 lg:-mb-7 px-5 sm:px-6 lg:px-7 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-black text-slate-800 rounded-b-3xl">
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-black text-[11px]">40</span>
                <span>Chapters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center font-black text-[11px]">348</span>
                <span>Topics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-black text-[11px]">60+</span>
                <span>Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center font-black text-[11px]">15+</span>
                <span>Real-World Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-black text-[11px]">100%</span>
                <span>Job Assistance</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. HORIZONTAL TAB MAPPER (EXECUTIVE WHITE CAROUSEL / PILL BAR)
            ========================================================================= */}
        <section
          id="mern-curriculum-tabs-map"
          className="bg-white rounded-2xl p-2 sm:p-2.5 border border-slate-200/90 shadow-2xs overflow-hidden"
        >
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-thin scrollbar-thumb-slate-300">
            {FULL_STACK_MERN_CURRICULUM.map((tab) => {
              const isActive = tab.id === activeTabId;
              const realIcon = getTabRealIcon(tab.tabNum);

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleSelectTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-left transition-all shrink-0 border cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-600/20'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <img
                    src={realIcon}
                    alt={tab.shortTitle}
                    className="w-5 h-5 object-contain shrink-0"
                  />
                  <div className="flex flex-col min-w-0 pr-1">
                    <div className="flex items-center gap-1">
                      <span className={`text-[10px] font-black uppercase tracking-wider ${
                        isActive ? 'text-emerald-100' : 'text-slate-700'
                      }`}>
                        {tab.tabNum}
                      </span>
                      {tab.isFree && (
                        <span className={`text-[8.5px] px-1.5 py-0.2 rounded-full font-black uppercase tracking-wider ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          FREE
                        </span>
                      )}
                    </div>
                    <span className={`text-xs font-black truncate max-w-[130px] sm:max-w-[155px] ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}>
                      {tab.shortTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            3. TAB CONTENT WORKSPACE (LEFT CURRICULUM + RIGHT DASHBOARD)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          
          {/* LEFT 8 COLS: TAB CURRICULUM ACCORDIONS */}
          <div className="lg:col-span-8 space-y-3">
            
            {/* Active Tab Banner Card */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {activeTab.tabNum}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-slate-950">
                    {activeTab.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 font-semibold max-w-xl">
                  {activeTab.subtitle}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-slate-700">
                <span className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                  {activeTab.chapters.length} Chapters
                </span>
                <span className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                  {activeTab.chapters.reduce((acc, c) => acc + c.topics.length, 0)} Topics
                </span>
              </div>
            </div>

            {/* Chapters / Modules List */}
            <div className="space-y-2.5">
              {activeTab.chapters.map((chapter) => {
                const isExpanded = !!expandedChapters[chapter.id];

                return (
                  <div
                    key={chapter.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
                  >
                    {/* Chapter Header */}
                    <button
                      type="button"
                      onClick={() => handleModuleHeaderClick(chapter)}
                      className="w-full p-4 sm:p-4.5 flex items-center justify-between gap-3 text-left hover:bg-slate-50/80 transition-colors cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-black text-xs shrink-0 shadow-2xs">
                          {chapter.chapterNum}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-extrabold text-sm sm:text-[14.5px] text-slate-900 truncate">
                            {chapter.title}
                          </h3>
                          <p className="text-[11px] text-slate-600 truncate mt-0.5">
                            {chapter.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px] font-bold text-slate-600 hidden sm:inline-block">
                          {chapter.topics.length} topics
                        </span>
                        <div className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      </div>
                    </button>

                    {/* Chapter Topics Accordion Drawer */}
                    {isExpanded && (
                      <div className="border-t border-slate-100 bg-[#fbfcfe] px-3 sm:px-4 py-2 space-y-1.5 divide-y divide-slate-100/70">
                        {chapter.topics.map((topic) => {
                          const isDone = topic.status === 'completed';
                          const isInProg = topic.status === 'in-progress';
                          const isLocked =
                            topic.status === 'locked' ||
                            (topic.topicNum !== undefined && topic.topicNum >= 5);

                          return (
                            <div
                              key={topic.id}
                              onClick={() => handleTopicClick(topic)}
                              className={`pt-2 pb-1 px-2.5 rounded-xl flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                                isInProg
                                  ? 'bg-emerald-50/60 border border-emerald-200/60'
                                  : 'hover:bg-slate-100/70'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                {isDone ? (
                                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 stroke-[3]" />
                                  </div>
                                ) : isInProg ? (
                                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                                    <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                                  </div>
                                ) : (
                                  <div className="w-5 h-5 rounded-full bg-slate-200/80 text-slate-500 flex items-center justify-center shrink-0">
                                    <Lock className="w-2.5 h-2.5" />
                                  </div>
                                )}

                                <div className="min-w-0 flex items-baseline gap-2">
                                  <span className="text-[11px] font-black text-slate-600 shrink-0">
                                    {topic.topicNum}.
                                  </span>
                                  <span className={`text-xs sm:text-[13px] font-semibold truncate ${
                                    isDone
                                      ? 'text-slate-800'
                                      : isInProg
                                      ? 'text-emerald-950 font-bold'
                                      : 'text-slate-600'
                                  }`}>
                                    {topic.title}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <span className="text-[10px] text-slate-600 font-bold hidden sm:inline-block">
                                  {topic.duration}
                                </span>
                                {isLocked ? (
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleOpenSuccessPlan(topic.title);
                                    }}
                                    className="px-2 py-0.5 rounded-md bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-black flex items-center gap-1 transition-all"
                                  >
                                    <Lock className="w-2.5 h-2.5" />
                                    <span>Unlock</span>
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleTopicClick(topic);
                                    }}
                                    className="px-2 py-0.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black flex items-center gap-1 transition-all"
                                  >
                                    <Play className="w-2.5 h-2.5 fill-white" />
                                    <span>{isInProg ? 'Continue' : 'Watch'}</span>
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
            </div>

          </div>

          {/* RIGHT 4 COLS: STATS, LEARNING PATH & ENROLLMENT CTA */}
          <aside className="lg:col-span-4 space-y-3">
            
            {/* 1. PROGRESS OVERVIEW CARD */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm text-slate-900">Your Progress</h3>
                <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                  1% Done
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full w-[1.5%]" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-600 font-bold">
                  <span>3 of 348 Completed</span>
                  <span>1 in Progress</span>
                </div>
              </div>

              {/* Quick Stat Tiles */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                    40
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Chapters</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                    348
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Topics</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                    15
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Projects</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0">
                    40
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

                <div className="p-2.5 rounded-xl bg-cyan-50/70 border border-cyan-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                    60
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
                <span className="text-[11px] font-bold text-emerald-700 hover:underline cursor-pointer">
                  View All →
                </span>
              </div>

              <div className="space-y-3 pt-1">
                {/* Step 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 truncate">
                      Web &amp; Internet Foundations
                    </span>
                    <span className="text-[10px] text-slate-400">4 / 41 topics</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 truncate">
                      HTML5, CSS3 &amp; Modern Frameworks
                    </span>
                    <span className="text-[10px] text-slate-400">0 / 69 topics</span>
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
                      React, Node, Express, MongoDB &amp; AI
                    </span>
                    <span className="text-[10px] text-slate-400">Complete previous tabs to unlock</span>
                  </div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </main>

      {/* Choose Your Success Plan Modal Popup */}
      <SuccessPlanModal
        isOpen={isSuccessPlanOpen}
        onClose={() => setIsSuccessPlanOpen(false)}
        targetTopicTitle={selectedTargetTitle}
        courseTitle="Full-Stack MERN Development with AI"
      />

    </div>
  );
};

export default FullStackMernHub;
