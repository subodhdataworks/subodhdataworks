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
import { getTopicProgressInfo, recordTopicStarted } from '../../services/topicProgressTracker';
import { UniversalMobileCourseView } from './UniversalMobileCourseView';
import './UniversalMobileCourseView.css';
import { CompactCurriculumAccordion } from './CompactCurriculumAccordion';
import { CourseHorizontalTrackNav } from './course/CourseHorizontalTrackNav';
import { CourseProgressSidebar } from './course/CourseProgressSidebar';
import { CourseHeroActionButtons } from './course/CourseHeroActionsAndStats';
import { getCoursePriceFromConfig } from '../../services/topicProgressTracker';

interface DataScienceAgenticAiHubProps {
  userName?: string;
  onBack?: () => void;
  onStartTopic?: (topicId: string, title: string, step?: 'learn' | 'play' | 'interview') => void;
}

export const DataScienceAgenticAiHub: React.FC<DataScienceAgenticAiHubProps> = ({
  userName = 'RAHUL SHARMA',
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
    } else {
      recordTopicStarted(topic.id, 'data_science');
      if (onStartTopic) {
        onStartTopic(topic.id, topic.title);
      }
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
    <div className="min-h-screen bg-transparent text-slate-900 font-sans pb-16">
      
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
          enrollPriceText={`Enroll for ${getCoursePriceFromConfig('data_science')}`}
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
        <main className="w-full pt-0 space-y-3">

        {/* =========================================================================
            1. TOP HERO BANNER: SLIM FUTURE IT PURPLE-WHITE THEME
            ========================================================================= */}
        <section className="w-full relative rounded-2xl overflow-hidden border border-[#E6E0F4] shadow-[0_2px_14px_rgba(109,40,217,0.05)] bg-white text-[#111827] md:h-[148px] md:min-h-[148px] md:max-h-[148px]">
          {/* Full Background Daylight Tech Campus / AI Workspace Photo */}
          <img
            src="/images/hero-student-robot-workspace-2050.jpg"
            alt="Data Science & Agentic AI Students Collaboration"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/data_analyst_light_banner.jpg';
            }}
          />
          {/* Soft Pearl Lavender-White Gradient for Crisp Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/98 md:via-white/95 to-transparent pointer-events-none w-full md:w-[75%] lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent pointer-events-none md:hidden" />

          <div className="relative z-10 px-4 py-2.5 sm:px-6 lg:px-7 flex flex-col justify-center h-full">
            
            {/* Left Content Zone */}
            <div className="max-w-2xl space-y-1.5 min-w-0">
              {/* Headline */}
              <h1 className="text-lg sm:text-xl lg:text-[24px] font-bold tracking-tight text-[#0F172A] leading-tight m-0">
                Data Science &{' '}
                <span className="text-[#6D28D9]">
                  Agentic AI
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug max-w-xl m-0">
                Master Machine Learning, Deep Learning, RAG architectures, and build Autonomous AI Agents with enterprise-grade Python frameworks.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[11px] sm:text-xs font-medium text-slate-700">
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  🔰 Beginner to Advanced
                </span>
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  🤖 Autonomous AI Agents
                </span>
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  🧠 Deep Learning & LLMs
                </span>
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  🛠️ 8 Industry Capstones
                </span>
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  📜 Certificate & Placement Support
                </span>
              </div>

              {/* Action Buttons (Dynamic Enrollment & Continue Learning Logic) */}
              <CourseHeroActionButtons
                curriculum={DATA_SCIENCE_CURRICULUM}
                courseKey="data_science"
                courseTitle="Data Science & Agentic AI"
                isCoursePaid={isCoursePaid}
                isTopicAccessible={isTopicUnlocked}
                onOpenEnrollModal={handleOpenSuccessPlan}
                onResumeLesson={(topicId, title, tabId) => {
                  recordTopicStarted(topicId, 'data_science', tabId, title);
                  if (onStartTopic) {
                    onStartTopic(topicId, title, 'learn', tabId);
                  }
                }}
              />
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. FULL-WIDTH HORIZONTAL TABS (Compact, Real 3D Icons, No "Tab" text)
            ========================================================================= */}
        <CourseHorizontalTrackNav
          tabs={DATA_SCIENCE_CURRICULUM}
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

            {/* ACTIVE TAB MAIN ACCORDION CONTAINER (Compact, Ergonomic & Systematic) */}
            <CompactCurriculumAccordion
              chapters={activeTab.chapters}
              activeTabId={activeTabId}
              courseKey="data_science"
              courseName="Data Science & Agentic AI"
              isCoursePaid={isCoursePaid}
              highlightedTopicId={null}
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
            curriculum={DATA_SCIENCE_CURRICULUM}
            courseKey="data_science"
            activeTabId={activeTabId}
            onSelectTab={handleSelectTab}
            projectsCount={10}
            isTopicAccessible={isTopicUnlocked}
            onResumeLesson={(topicId, title, step) => {
              if (onStartTopic) {
                onStartTopic(topicId, title, step);
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
        courseTitle="Data Science & Agentic AI"
      />

    </div>
  );
};

export default DataScienceAgenticAiHub;
