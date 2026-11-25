import React, { useState, useRef, useEffect, useMemo } from 'react';
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
import {
  getTopicProgressInfo,
  recordTopicStarted,
  computeCourseProgressSummary,
  TOPIC_PROGRESS_UPDATED_EVENT,
} from '../../services/topicProgressTracker';
import { UniversalMobileCourseView } from './UniversalMobileCourseView';
import { CompactCurriculumAccordion } from './CompactCurriculumAccordion';
import { CourseHorizontalTrackNav } from './course/CourseHorizontalTrackNav';
import { CourseProgressSidebar } from './course/CourseProgressSidebar';
import { CourseHeroActionButtons } from './course/CourseHeroActionsAndStats';
import { getCoursePriceFromConfig } from '../../services/topicProgressTracker';
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
    } else {
      recordTopicStarted(topic.id, 'data_analyst');
      if (onStartTopic) {
        onStartTopic(topic.id, topic.title, 'learn', activeTabId);
      }
    }
  };

  const [progressRefreshTick, setProgressRefreshTick] = useState(0);

  useEffect(() => {
    const refresh = () => setProgressRefreshTick((t) => t + 1);
    window.addEventListener(TOPIC_PROGRESS_UPDATED_EVENT, refresh);
    window.addEventListener('futureai_course_unlocked', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(TOPIC_PROGRESS_UPDATED_EVENT, refresh);
      window.removeEventListener('futureai_course_unlocked', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  // Sync selected category on browser Back / Forward navigation
  useEffect(() => {
    const handleHashSync = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash;
      if (hash.includes('?')) {
        const params = new URLSearchParams(hash.split('?')[1]);
        const tabParam = params.get('tab');
        if (tabParam && DATA_ANALYST_CURRICULUM.some((t) => t.id === tabParam)) {
          setActiveTabId(tabParam);
        }
      }
    };
    window.addEventListener('hashchange', handleHashSync);
    window.addEventListener('popstate', handleHashSync);
    return () => {
      window.removeEventListener('hashchange', handleHashSync);
      window.removeEventListener('popstate', handleHashSync);
    };
  }, []);

  const courseSummary = useMemo(
    () => computeCourseProgressSummary(DATA_ANALYST_CURRICULUM, 'data_analyst', isTopicUnlocked),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progressRefreshTick, isCoursePaid]
  );

  const activeTab: TabItem =
    DATA_ANALYST_CURRICULUM.find((t) => t.id === activeTabId) ||
    DATA_ANALYST_CURRICULUM[0];

  const activeTrackStat = useMemo(
    () => courseSummary.perTrack.find((t) => t.tabId === activeTab.id) || courseSummary.perTrack[0],
    [courseSummary.perTrack, activeTab.id]
  );

  const handleSafeBackToMyLearning = () => {
    if (onBack) {
      onBack();
    } else if (typeof window !== 'undefined') {
      window.location.hash = '#my-learning';
    }
  };

  const handleSelectTab = (tabId: string) => {
    setActiveTabId(tabId);
    try {
      sessionStorage.setItem('futureai_active_curriculum_tab', tabId);
      if (typeof window !== 'undefined') {
        const rawHash = window.location.hash || '#data-analyst';
        const [baseHash, queryStr] = rawHash.split('?');
        const params = new URLSearchParams(queryStr || '');
        params.set('tab', tabId);
        const nextHash = `${baseHash}?${params.toString()}`;
        if (window.location.hash !== nextHash) {
          window.history.pushState(null, '', nextHash);
        }
      }
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
          enrollPriceText={`Enroll for ${getCoursePriceFromConfig('data_analyst')}`}
          isCoursePaid={isCoursePaid}
          onBack={onBack}
          onEnroll={() => handleOpenSuccessPlan('Data Analyst with GenAI')}
          onResumeLearning={() => {
            const target = courseSummary.resumeTarget;
            if (target && onStartTopic) {
              recordTopicStarted(target.topicId, 'data_analyst', target.tabId, target.title);
              onStartTopic(target.topicId, target.title, target.nextActivityStep, target.tabId);
            }
          }}
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
            1. TOP HERO BANNER: COMPACT, HIGH-CONTRAST FUTURE IT PURPLE-WHITE THEME
            ========================================================================= */}
        <section className="w-full relative rounded-2xl overflow-hidden border border-[#E6E0F4] shadow-[0_2px_14px_rgba(109,40,217,0.05)] bg-white text-[#111827] md:h-[148px] md:min-h-[148px] md:max-h-[148px]">
          {/* Full Background Daylight Tech Campus Photo */}
          <img
            src="/images/data_analyst_light_banner.jpg"
            alt="Data Analyst Students Collaboration"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/future_it_industries_campus_banner.png';
            }}
          />
          {/* Subtle Pearl-White Gradient Overlay for Crisp Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/90 to-transparent pointer-events-none w-full md:w-[68%] lg:w-[60%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent pointer-events-none md:hidden" />

          <div className="relative z-10 px-4 py-2.5 sm:px-6 lg:px-7 flex flex-col justify-center h-full">
            
            {/* Left Content Zone */}
            <div className="max-w-2xl space-y-1.5 min-w-0">
              {/* Headline */}
              <h1 className="text-lg sm:text-xl lg:text-[21px] font-extrabold tracking-tight text-[#0F172A] leading-tight m-0">
                Data Analyst with{' '}
                <span className="text-[#6D28D9]">
                  GenAI
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] text-[#475569] font-medium leading-snug max-w-xl m-0">
                Learn Excel, SQL, Python, Power BI and Generative AI to become a job-ready Data Analyst with real-world projects.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                <span className="inline-flex items-center gap-1 bg-white/95 border border-[#E5E0F3] px-2.5 py-0.5 rounded-full shadow-2xs">
                  🔰 Beginner to Advanced
                </span>
                <span className="inline-flex items-center gap-1 bg-white/95 border border-[#E5E0F3] px-2.5 py-0.5 rounded-full shadow-2xs">
                  🛠️ Hands-on Projects
                </span>
                <span className="inline-flex items-center gap-1 bg-white/95 border border-[#E5E0F3] px-2.5 py-0.5 rounded-full shadow-2xs">
                  💬 Interview Preparation
                </span>
                <span className="inline-flex items-center gap-1 bg-white/95 border border-[#E5E0F3] px-2.5 py-0.5 rounded-full shadow-2xs">
                  📜 Industry Certificate
                </span>
                <span className="inline-flex items-center gap-1 bg-white/95 border border-[#E5E0F3] px-2.5 py-0.5 rounded-full shadow-2xs">
                  🤖 AI-Powered Learning
                </span>
              </div>

              {/* Action Buttons (Dynamic Enrollment & Continue Learning Logic) */}
              <div className="pt-0.5">
                <CourseHeroActionButtons
                  curriculum={DATA_ANALYST_CURRICULUM}
                  courseKey="data_analyst"
                  courseTitle="Data Analyst with GenAI"
                  isCoursePaid={isCoursePaid}
                  isTopicAccessible={isTopicUnlocked}
                  onOpenEnrollModal={handleOpenSuccessPlan}
                  onResumeLesson={(topicId, title, tabId) => {
                    recordTopicStarted(topicId, 'data_analyst', tabId, title);
                    if (onStartTopic) {
                      onStartTopic(topicId, title, 'learn', tabId);
                    }
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. FULL-WIDTH HORIZONTAL TABS (Compact, Real 3D Icons, No "Tab" text)
            ========================================================================= */}
        <CourseHorizontalTrackNav
          tabs={DATA_ANALYST_CURRICULUM}
          activeTabId={activeTabId}
          onSelectTab={handleSelectTab}
          getTabIconSrc={getTabRealIcon}
        />

        {/* =========================================================================
            3. LOWER SECTION: 2-COLUMN LAYOUT (LEFT: CHAPTER ACCORDION • RIGHT: SIDEBAR BELOW TABS)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
          
          {/* ─────────────────────────────────────────────────────────────────────
              LEFT COLUMN: ACTIVE TAB ACCORDION (Cols 1-8 / 1-9)
              ───────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-4">

            {/* 3. ACTIVE TAB MAIN ACCORDION CONTAINER (Compact, Ergonomic & Systematic) */}
            <CompactCurriculumAccordion
              chapters={activeTab.chapters}
              activeTabId={activeTabId}
              courseKey="data_analyst"
              courseName="Data Analyst"
              isCoursePaid={isCoursePaid}
              highlightedTopicId={highlightedTopicId}
              onStartTopic={onStartTopic}
              onOpenUnlockModal={handleOpenSuccessPlan}
              isTopicUnlocked={isTopicUnlocked}
              layout="split"
            />

          </div>


          {/* ─────────────────────────────────────────────────────────────────────
              RIGHT COLUMN: SIDEBAR WIDGETS (Cols 9-12 / 10-12)
              ───────────────────────────────────────────────────────────────────── */}
          <CourseProgressSidebar
            curriculum={DATA_ANALYST_CURRICULUM}
            courseKey="data_analyst"
            activeTabId={activeTabId}
            onSelectTab={handleSelectTab}
            projectsCount={8}
            isTopicAccessible={isTopicUnlocked}
            onResumeLesson={(topicId, title, step, tabId) => {
              try {
                sessionStorage.setItem('futureai_active_curriculum_tab', tabId);
                sessionStorage.setItem('futureai_active_curriculum_topic', topicId);
              } catch {}
              if (onStartTopic) {
                onStartTopic(topicId, title, step, tabId);
              }
            }}
          />

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
