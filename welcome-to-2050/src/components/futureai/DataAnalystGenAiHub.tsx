import React, { useState, useRef, useEffect } from 'react';
import {
  CheckCircle2,
  Play,
  Lock,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Search,
  Sparkles,
  BarChart3,
  ArrowLeft,
  Briefcase,
  Flame,
  FileText,
  Target,
  Check,
  TrendingUp,
  RotateCcw,
  Code2,
  Mic
} from 'lucide-react';
import { DATA_ANALYST_CURRICULUM, TabItem, findTabAndChapterForTopic } from '../../data/dataAnalystCurriculum';
import { ToolIcon } from './CourseToolIcons';
import { SuccessPlanModal } from './SuccessPlanModal';
import { isCourseUnlocked, isTopicUnlocked } from '../../services/courseUnlockService';
import { UniversalMobileCourseView } from './UniversalMobileCourseView';
import './UniversalMobileCourseView.css';

interface DataAnalystGenAiHubProps {
  userName?: string;
  onBack?: () => void;
  onStartTopic?: (topicId: string, title: string, step?: 'learn' | 'play' | 'interview', tabId?: string) => void;
  initialTabId?: string;
  initialTopicId?: string;
  onTabChange?: (tabId: string) => void;
}

export const DataAnalystGenAiHub: React.FC<DataAnalystGenAiHubProps> = ({
  userName = 'RAHUL SHARMA',
  onBack,
  onStartTopic,
  initialTabId,
  initialTopicId,
  onTabChange,
}) => {
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Restore exact tab from props, URL hash, or sessionStorage
  const [activeTabId, setActiveTabId] = useState<string>(() => {
    if (initialTabId) return initialTabId;
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('?')) {
        const params = new URLSearchParams(hash.split('?')[1]);
        const tabParam = params.get('tab');
        if (tabParam) return tabParam;
        const topicParam = params.get('topic');
        if (topicParam) {
          const found = findTabAndChapterForTopic(topicParam);
          if (found) return found.tabId;
        }
      }
      try {
        const savedTab = sessionStorage.getItem('futureai_active_curriculum_tab');
        if (savedTab) return savedTab;
      } catch {}
    }
    return 'tab-1';
  });

  // Restore and expand exact chapter/module containing the active topic
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>(() => {
    const defaultState: Record<string, boolean> = { 'mod-1': true };
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      let targetTopic = initialTopicId;
      if (!targetTopic && hash.includes('?')) {
        const params = new URLSearchParams(hash.split('?')[1]);
        targetTopic = params.get('topic') || undefined;
      }
      if (!targetTopic) {
        try {
          targetTopic = sessionStorage.getItem('futureai_active_curriculum_topic') || undefined;
        } catch {}
      }
      if (targetTopic) {
        const found = findTabAndChapterForTopic(targetTopic);
        if (found) {
          return { ...defaultState, [found.chapterId]: true };
        }
      }
    }
    return defaultState;
  });

  // Highlight exact topic returned from
  const [highlightedTopicId, setHighlightedTopicId] = useState<string | null>(() => {
    if (initialTopicId) return initialTopicId.startsWith('t-') ? initialTopicId : `t-${initialTopicId}`;
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('?')) {
        const params = new URLSearchParams(hash.split('?')[1]);
        const t = params.get('topic');
        if (t) return t.startsWith('t-') ? t : `t-${t}`;
      }
      try {
        const saved = sessionStorage.getItem('futureai_active_curriculum_topic');
        if (saved) return saved.startsWith('t-') ? saved : `t-${saved}`;
      } catch {}
    }
    return null;
  });

  const [isSuccessPlanOpen, setIsSuccessPlanOpen] = useState<boolean>(false);
  const [selectedTargetTitle, setSelectedTargetTitle] = useState<string>('');
  const [isCoursePaid, setIsCoursePaid] = useState<boolean>(() => isCourseUnlocked('data_analyst'));

  // Sync state if initialTabId or initialTopicId prop updates
  useEffect(() => {
    if (initialTabId && initialTabId !== activeTabId) {
      setActiveTabId(initialTabId);
    }
  }, [initialTabId]);

  useEffect(() => {
    if (initialTopicId) {
      const formatted = initialTopicId.startsWith('t-') ? initialTopicId : `t-${initialTopicId}`;
      setHighlightedTopicId(formatted);
      const found = findTabAndChapterForTopic(formatted);
      if (found) {
        setActiveTabId(found.tabId);
        setExpandedChapters((prev) => ({ ...prev, [found.chapterId]: true }));
      }
    }
  }, [initialTopicId]);

  // Auto-scroll to restored topic and center active tab button
  useEffect(() => {
    if (highlightedTopicId) {
      const found = findTabAndChapterForTopic(highlightedTopicId);
      if (found) {
        if (found.tabId !== activeTabId) {
          setActiveTabId(found.tabId);
        }
        setExpandedChapters((prev) => ({ ...prev, [found.chapterId]: true }));
      }

      const timer = setTimeout(() => {
        const targetEl = document.getElementById(`topic-row-${highlightedTopicId}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (found?.tabId && tabButtonRefs.current[found.tabId]) {
          tabButtonRefs.current[found.tabId]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
          });
        }
      }, 350);

      const fadeTimer = setTimeout(() => {
        setHighlightedTopicId(null);
      }, 4000);

      return () => {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
      };
    }
  }, [highlightedTopicId]);

  useEffect(() => {
    const handleUpdate = () => {
      setIsCoursePaid(isCourseUnlocked('data_analyst'));
    };
    window.addEventListener('futureai_course_unlocked', handleUpdate);
    return () => window.removeEventListener('futureai_course_unlocked', handleUpdate);
  }, []);

  const handleOpenSuccessPlan = (title?: string) => {
    setSelectedTargetTitle(title || 'Data Analyst with GenAI');
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
    try {
      sessionStorage.setItem('futureai_active_curriculum_tab', activeTabId);
      sessionStorage.setItem('futureai_active_curriculum_topic', topic.id);
    } catch {}

    const isTopicFree = isTopicUnlocked('data_analyst', chapterNum, topic.topicNum || 1, activeTabId);

    if (!isTopicFree) {
      handleOpenSuccessPlan(topic.title);
    } else if (onStartTopic) {
      onStartTopic(topic.id, topic.title, 'learn', activeTabId);
    }
  };

  const activeTab: TabItem =
    DATA_ANALYST_CURRICULUM.find((t) => t.id === activeTabId) ||
    DATA_ANALYST_CURRICULUM[0];

  const handleSelectTab = (tabId: string) => {
    setActiveTabId(tabId);
    try {
      sessionStorage.setItem('futureai_active_curriculum_tab', tabId);
    } catch {}
    if (onTabChange) onTabChange(tabId);
    const targetTab = DATA_ANALYST_CURRICULUM.find((t) => t.id === tabId);
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
  const getTabRealIcon = (tabNum: number, iconName?: string) => {
    if (iconName === 'python') return '/images/icons3d/icon_01_python.png';
    if (iconName === 'excel') return '/images/icons3d/icon_03_excel.png';
    if (iconName === 'sql') return '/images/icons3d/icon_02_sql.png';
    if (iconName === 'powerbi') return '/images/icons3d/icon_04_powerbi.png';
    if (iconName === 'genai') return '/images/icons3d/icon_06_genai.png';
    if (iconName === 'chart') return '/images/icons3d/icon_08_bizanalytics.png';
    if (iconName === 'target') return '/images/icons3d/icon_goal_target.png';
    if (iconName === 'project') return '/images/icons3d/icon_10_capstone.png';

    switch (tabNum) {
      case 1:
        return '/images/icons3d/icon_08_bizanalytics.png';
      case 2:
        return '/images/icons3d/icon_01_python.png';
      case 3:
        return '/images/icons3d/icon_03_excel.png';
      case 4:
        return '/images/icons3d/icon_02_sql.png';
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
  };

  // Helper to render icon for tab
  const renderTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'excel':
        return <ToolIcon name="excel" className="w-5 h-5 object-contain" />;
      case 'sql':
        return <ToolIcon name="sql" className="w-5 h-5 object-contain" />;
      case 'python':
        return <ToolIcon name="python" className="w-5 h-5 object-contain" />;
      case 'powerbi':
        return <ToolIcon name="power bi" className="w-5 h-5 object-contain" />;
      case 'genai':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'target':
        return <Target className="w-5 h-5 text-rose-600" />;
      case 'project':
        return <Briefcase className="w-5 h-5 text-teal-600" />;
      default:
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 font-sans pb-16">
      
      {/* =========================================================================
          MAIN CONTAINER: STREAMLINED COMPACT TOP SPACING
          ========================================================================= */}
            {/* MOBILE APP-STYLE VIEW (<768px) */}
      <div className="course-mobile-only">
        <UniversalMobileCourseView
          courseId="data_analyst"
          courseTitle="Data Analyst"
          courseTitlePrefix="with "
          courseTitleHighlight="GenAI"
          courseDescription="Learn Excel, SQL, Python, Power BI and Generative AI to become a job-ready Data Analyst with real-world projects."
          courseBannerImage="/images/data_analyst_light_banner.jpg"
          courseBannerFallback="/images/future_it_industries_campus_banner.png"
          badgeText="Most Popular"
          featurePills={[
            '🔰 Beginner to Advanced',
            '🛠️ Hands-on Projects',
            '💬 Interview Preparation',
            '📜 Industry Certificate',
            '🤖 AI-Powered Learning',
          ]}
          enrollPriceText="Enroll for ₹4"
          isCoursePaid={isCoursePaid}
          onBack={onBack}
          onEnroll={() => handleOpenSuccessPlan('Data Analyst with GenAI')}
          onResumeLearning={() => onStartTopic && onStartTopic('t-1', 'What Is Data Analytics?')}
          tabs={DATA_ANALYST_CURRICULUM}
          activeTabId={activeTabId}
          onSelectTab={handleSelectTab}
          expandedChapters={expandedChapters}
          onToggleChapter={toggleChapter}
          onSelectTopic={handleTopicClick}
          getTabRealIcon={getTabRealIcon}
          customStats={{
            modulesCount: 43,
            topicsCount: 345,
            projectsCount: 8,
            certificatesCount: 1,
            jobReadySkillsCount: 'Job Ready Skills'
          }}
          techStackTags={['Python', 'Excel', 'SQL', 'Power BI', 'GenAI']}
          courseHighlightTag="GLOBAL OPPORTUNITIES"
        />
      </div>

      {/* DESKTOP VIEW (>=768px) - 100% UNCHANGED */}
      <div className="course-desktop-only">
        <main className="w-full pt-0 space-y-3">

        {/* =========================================================================
            1. TOP HERO BANNER: LIGHT EXECUTIVE THEME (HIGH-CONTRAST DAYLIGHT TECH CAMPUS)
            ========================================================================= */}
        <section className="w-full relative rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-white text-slate-900 md:h-[275px] md:min-h-[275px] md:max-h-[275px]">
          {/* Full Background Daylight Tech Campus Photo */}
          <img
            src="/images/data_analyst_light_banner.jpg"
            alt="Data Analyst Students Collaboration"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/future_it_industries_campus_banner.png';
            }}
          />
          {/* Soft Pearl Gradient: Left side is crisp white for clear black text, smoothly fading to transparent towards the right so the image is fully visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/80 to-transparent pointer-events-none w-full md:w-[58%] lg:w-[52%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none md:hidden" />

          <div className="relative z-10 px-4 py-2.5 sm:px-6 lg:px-7 lg:py-2.5 flex flex-col justify-between h-full">
            
            {/* Left Content Zone (Right side remains completely open so image is 100% visible) */}
            <div className="max-w-3xl space-y-1 min-w-0">
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
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[9.5px] sm:text-[11px] font-black text-orange-700 tracking-wide uppercase shadow-2xs min-w-0">
                  <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 shrink-0" />
                  <span className="truncate">Most Popular</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-xl min-[375px]:text-2xl sm:text-2xl lg:text-[28px] font-black tracking-tight text-slate-950 leading-tight">
                Data Analyst with{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  GenAI
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13.5px] text-slate-700 font-semibold leading-relaxed max-w-xl">
                Learn Excel, SQL, Python, Power BI and Generative AI to become a job-ready Data Analyst with real-world projects.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[10px] sm:text-[10.5px] font-bold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🔰 Beginner to Advanced
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🛠️ Hands-on Projects
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  💬 Interview Preparation
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  📜 Industry Certificate
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🤖 AI-Powered Learning
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5">
                <button
                  type="button"
                  onClick={() => onStartTopic && onStartTopic('t-1', 'What Is Data Analytics?')}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white shrink-0" />
                  <span>Learning</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenSuccessPlan('Data Analyst with GenAI')}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm shadow-emerald-600/25 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Enroll for ₹4</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('curriculum-tabs-map');
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
            <div className="mt-1 pt-1.5 border-t border-slate-200/70 bg-white/75 backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-7 -mb-2.5 px-4 sm:px-6 lg:px-7 py-1.5 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-black text-slate-800 rounded-b-2xl lg:rounded-b-3xl">
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-black text-[11px]">43</span>
                <span>Modules</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-black text-[11px]">345</span>
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
        <div id="curriculum-tabs-map" className="overflow-x-auto scroll-smooth scrollbar-none pb-1.5 pt-0.5 px-0.5">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            {DATA_ANALYST_CURRICULUM.map((tab) => {
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
                      ? 'bg-gradient-to-r from-[#7045E8] to-[#4C2A9A] text-white border-[#7045E8] shadow-md shadow-[#7045E8]/25 z-10'
                      : 'bg-white hover:bg-[#F6F2FF] text-[#202033] border-[#EAE5F5] hover:border-[#7045E8]/30 hover:shadow-2xs shadow-2xs'
                  }`}
                >
                  {/* Real 3D High-Definition Icon Tile */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 p-1 transition-all duration-200 ${
                      isActive
                        ? 'bg-white/20 backdrop-blur-xs border border-white/30'
                        : 'bg-[#F6F2FF] border border-[#EAE5F5] group-hover:border-[#7045E8]/30'
                    }`}
                  >
                    <img
                      src={getTabRealIcon(tab.tabNum, tab.iconName)}
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
                          : 'bg-[#F6F2FF] text-[#7045E8] border border-[#EAE5F5]'
                      }`}>
                        {tab.tabNum}
                      </span>
                      <span className={`text-xs sm:text-[13px] font-bold truncate leading-tight tracking-tight ${
                        isActive ? 'text-white' : 'text-[#202033]'
                      }`}>
                        {tab.shortTitle}
                      </span>
                    </div>

                    <span className={`text-[10px] sm:text-[10.5px] font-medium leading-none mt-1 flex items-center gap-1 ${
                      isActive ? 'text-white/80' : 'text-[#77758A]'
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

            {/* 3. ACTIVE TAB MAIN ACCORDION CONTAINER */}
            <section className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-[#EAE5F5] shadow-xs space-y-3">
              {/* Chapters List */}
              <div className="space-y-3">
                {activeTab.chapters.map((chapter) => {
                  const isExpanded = expandedChapters[chapter.id] ?? false;
                  const completedCount = chapter.topics.filter((t) => t.status === 'completed').length;
                  const totalCount = chapter.topics.length;
                  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

                  return (
                    <div
                      key={chapter.id}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isExpanded
                          ? 'border-[#7045E8]/40 bg-white shadow-xs ring-1 ring-[#7045E8]/10'
                          : 'border-[#EAE5F5] bg-white hover:border-[#7045E8]/30 hover:shadow-xs'
                      }`}
                    >
                      {/* Chapter / Module Accordion Header */}
                      <button
                        type="button"
                        onClick={() => handleModuleHeaderClick(chapter)}
                        className="group w-full p-3.5 sm:p-4.5 flex items-center justify-between gap-3 text-left transition-colors duration-200 cursor-pointer hover:bg-[#F6F2FF]/40"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Module Number in small light-purple circle */}
                          <div className="w-8 h-8 rounded-full bg-[#F6F2FF] text-[#7045E8] font-bold text-xs flex items-center justify-center shrink-0 border border-[#EAE5F5] group-hover:border-[#7045E8]/30 transition-colors duration-200">
                            {chapter.chapterNum}
                          </div>

                          {/* Title & Description */}
                          <div className="flex flex-col min-w-0">
                            <h3 className="text-sm sm:text-[15px] font-bold text-[#202033] truncate group-hover:text-[#7045E8] transition-colors duration-200">
                              {chapter.title}
                            </h3>
                            {chapter.subtitle && (
                              <p className="text-xs text-[#77758A] font-normal truncate mt-0.5">
                                {chapter.subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Chapter Stats & Animated Small Purple Chevron */}
                        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
                          <span className="text-xs font-medium text-[#77758A] hidden sm:inline">
                            {totalCount} Topics
                          </span>
                          <div className="w-16 sm:w-20 h-1.5 rounded-full bg-[#F6F2FF] border border-[#EAE5F5] overflow-hidden hidden sm:block">
                            <div
                              className="h-full bg-[#7045E8] rounded-full transition-all duration-300 ease-out"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-[#77758A] hidden sm:inline">
                            {completedCount}/{totalCount}
                          </span>
                          <span className="text-xs font-semibold text-[#7045E8]">
                            {percent}%
                          </span>
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                              isExpanded
                                ? 'bg-[#F6F2FF] text-[#7045E8] rotate-180'
                                : 'bg-transparent text-[#77758A] group-hover:bg-[#F6F2FF] group-hover:text-[#7045E8]'
                            }`}
                          >
                            <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                          </div>
                        </div>
                      </button>

                      {/* Smooth animated accordion collapse/expand container */}
                      <div
                        className={`grid transition-all duration-250 ease-in-out ${
                          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden divide-y divide-[#EAE5F5] border-t border-[#EAE5F5] bg-white">
                          {chapter.topics.map((topic, tIdx) => {
                            const isTopicFree = isTopicUnlocked('data_analyst', chapter.chapterNum, topic.topicNum || tIdx + 1, activeTabId);
                            const isLocked = !isTopicFree;
                            const isDone = topic.status === 'completed';
                            const isCurrent = isTopicFree && !isDone;
                            const isRowHighlighted = highlightedTopicId === topic.id;

                            return (
                              <div
                                key={topic.id}
                                id={`topic-row-${topic.id}`}
                                onClick={() => handleTopicClick(topic, chapter.chapterNum)}
                                className={`group/topic px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between gap-3 transition-all duration-300 cursor-pointer ${
                                  isRowHighlighted
                                    ? 'ring-2 ring-[#7045E8] bg-[#F6F2FF] shadow-md rounded-xl'
                                    : isCurrent
                                    ? 'bg-[#F6F2FF]/40 hover:bg-[#F6F2FF]'
                                    : 'bg-white hover:bg-[#F6F2FF]'
                                }`}
                              >
                                {/* LEFT: Small Numbered Circle + Topic Title */}
                                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                                  <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0 transition-colors duration-200 ${
                                      isDone
                                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                                        : isRowHighlighted || isCurrent
                                        ? 'bg-[#7045E8] text-white shadow-2xs'
                                        : 'bg-[#F6F2FF] text-[#77758A] border border-[#EAE5F5] group-hover/topic:text-[#7045E8] group-hover/topic:border-[#7045E8]/30'
                                    }`}
                                  >
                                    {isDone ? (
                                      <Check className="w-3 h-3 stroke-[2.5]" />
                                    ) : (
                                      topic.topicNum || tIdx + 1
                                    )}
                                  </div>

                                  <span
                                    className={`text-[13px] sm:text-sm truncate transition-colors duration-200 ${
                                      isRowHighlighted
                                        ? 'text-[#7045E8] font-bold'
                                        : isCurrent
                                        ? 'text-[#202033] font-semibold'
                                        : 'text-[#202033] font-normal group-hover/topic:text-[#7045E8]'
                                    }`}
                                  >
                                    {topic.title}
                                  </span>

                                  {activeTabId === 'tab-3' && (
                                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/90 shrink-0 hidden sm:inline-flex items-center gap-1 shadow-2xs">
                                      <span>📖</span>
                                      <span>Visual Notes</span>
                                    </span>
                                  )}

                                  {isRowHighlighted && (
                                    <span className="text-[10px] font-black text-[#7045E8] bg-[#ede6ff] px-2 py-0.5 rounded-full border border-purple-300 animate-pulse shrink-0">
                                      📍 Current
                                    </span>
                                  )}
                                </div>

                                {/* RIGHT: Actual lesson duration, Current learning status, Small purple chevron or Continue action */}
                                <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
                                  {topic.duration && (
                                    <span className="text-xs text-[#77758A] font-normal hidden sm:inline whitespace-nowrap">
                                      {topic.duration.replace(/^Video\s*•\s*/i, '')}
                                    </span>
                                  )}

                                  {isDone && (
                                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80 hidden md:inline">
                                      Completed
                                    </span>
                                  )}

                                  {isCurrent && (
                                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#F6F2FF] text-[#7045E8] border border-[#EAE5F5] hidden sm:inline">
                                      In Progress
                                    </span>
                                  )}

                                  {isLocked && (
                                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center gap-1 hidden sm:inline-flex">
                                      <Lock className="w-2.5 h-2.5" />
                                      <span>Locked</span>
                                    </span>
                                  )}

                                  {/* Minimal Action: Continue button or purple chevron */}
                                  {isCurrent ? (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onStartTopic && onStartTopic(topic.id, topic.title, 'learn', activeTabId);
                                      }}
                                      className="px-3 py-1 rounded-lg text-xs font-semibold text-white bg-[#7045E8] hover:bg-[#4C2A9A] transition-colors duration-200 cursor-pointer flex items-center gap-1 shadow-2xs shrink-0"
                                      title="Continue Lesson"
                                    >
                                      <span>Continue</span>
                                      <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                                    </button>
                                  ) : isLocked ? (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleTopicClick(topic, chapter.chapterNum);
                                      }}
                                      className="w-7 h-7 rounded-full flex items-center justify-center text-[#77758A] hover:text-[#7045E8] hover:bg-[#F6F2FF] transition-colors duration-200 cursor-pointer shrink-0"
                                      title="Enroll to Unlock"
                                    >
                                      <Lock className="w-3.5 h-3.5" />
                                    </button>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onStartTopic && onStartTopic(topic.id, topic.title, 'learn', activeTabId);
                                      }}
                                      className="w-7 h-7 rounded-full flex items-center justify-center text-[#77758A] hover:text-[#7045E8] hover:bg-[#F6F2FF] transition-colors duration-200 cursor-pointer shrink-0"
                                      title="Start Topic"
                                    >
                                      <ChevronRight className="w-4 h-4 text-[#7045E8]" />
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
                      strokeDashoffset={163.36 * (1 - 0.25)}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span className="absolute font-black text-sm text-slate-900">25%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-slate-900">
                    30 / 345 Lessons Completed
                  </span>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mt-1.5">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '25%' }} />
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
                    26
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
                    8
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">hrs Spent</span>
                  </div>
                </div>
              </div>
            </div>




            {/* 4. LEARNING PATH STEPPER */}
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
                      Python - Complete Basics
                    </span>
                    <span className="text-[10px] text-slate-400">7 / 15 lessons</span>
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
                      Excel - Start Learning
                    </span>
                    <span className="text-[10px] text-slate-400">0 / 15 lessons</span>
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
                      SQL - Locked
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
        courseTitle="Data Analyst with GenAI"
      />

    </div>
  );
};

export default DataAnalystGenAiHub;
