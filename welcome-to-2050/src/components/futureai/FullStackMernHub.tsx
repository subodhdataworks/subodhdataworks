import React, { useState, useRef, useEffect } from 'react';
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
import { isCourseUnlocked, isTopicUnlocked } from '../../services/courseUnlockService';
import { UniversalMobileCourseView } from './UniversalMobileCourseView';
import './UniversalMobileCourseView.css';
import { CompactCurriculumAccordion } from './CompactCurriculumAccordion';
import { CourseHorizontalTrackNav } from './course/CourseHorizontalTrackNav';
import { CourseProgressSidebar } from './course/CourseProgressSidebar';
import { CourseHeroActionButtons } from './course/CourseHeroActionsAndStats';
import { getCoursePriceFromConfig } from '../../services/topicProgressTracker';

interface FullStackMernHubProps {
  userName?: string;
  onBack?: () => void;
  onStartTopic?: (topicId: string, title: string) => void;
}

export const FullStackMernHub: React.FC<FullStackMernHubProps> = ({
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
  const [isCoursePaid, setIsCoursePaid] = useState<boolean>(() => isCourseUnlocked('full_stack_mern'));

  useEffect(() => {
    const handleUpdate = () => {
      setIsCoursePaid(isCourseUnlocked('full_stack_mern'));
    };
    window.addEventListener('futureai_course_unlocked', handleUpdate);
    return () => window.removeEventListener('futureai_course_unlocked', handleUpdate);
  }, []);

  const handleOpenSuccessPlan = (title?: string) => {
    setSelectedTargetTitle(title || 'Full Stack MERN & Next.js');
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
    const isTopicFree = isTopicUnlocked('full_stack_mern', chapterNum, topic.topicNum || 1, activeTabId);

    if (!isTopicFree) {
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
    <div className="min-h-screen bg-transparent text-slate-900 font-sans pb-16">
      {/* MOBILE APP-STYLE VIEW (<768px) */}
      <div className="course-mobile-only">
        <UniversalMobileCourseView
          courseId="full_stack_mern"
          courseTitle="Full-Stack MERN"
          courseTitleHighlight="Development with AI"
          courseDescription="Master MongoDB, Express.js, React.js, Node.js, Tailwind CSS, REST APIs, Git, GitHub Copilot, and full-stack cloud deployment."
          courseBannerImage="/images/full_stack_web_development_poster.jpg"
          courseBannerFallback="/images/data_analyst_light_banner.jpg"
          badgeText="FULL-STACK MERN"
          featurePills={[
            '🔰 Beginner to Advanced',
            '⚛️ React 18 & Hooks',
            '🟢 Node.js & Express APIs',
            '🍃 MongoDB & JWT Auth',
            '🤖 GitHub Copilot & AI Tools',
          ]}
          enrollPriceText={`Enroll for ${getCoursePriceFromConfig('full_stack_mern')}`}
          isCoursePaid={isCoursePaid}
          onBack={onBack}
          onEnroll={() => handleOpenSuccessPlan('Full-Stack MERN Development with AI')}
          onResumeLearning={() => onStartTopic && onStartTopic('fs-t-1', 'What is web development?')}
          tabs={FULL_STACK_MERN_CURRICULUM}
          activeTabId={activeTabId}
          onSelectTab={handleSelectTab}
          expandedChapters={expandedChapters}
          onToggleChapter={toggleChapter}
          onSelectTopic={handleTopicClick}
          customStats={{ modulesCount: 40, topicsCount: 348, projectsCount: 8, certificatesCount: 1, jobReadySkillsCount: 'Job Ready Skills' }}
        />
      </div>

      {/* DESKTOP VIEW (>=768px) */}
      <div className="course-desktop-only">
        <main className="w-full pt-0 space-y-3">
          {/* 1. TOP HERO BANNER: SLIM FUTURE IT PURPLE-WHITE THEME */}
          <section className="w-full relative rounded-2xl overflow-hidden border border-[#E9E5F5] shadow-[0_4px_18px_rgba(109,40,217,0.06)] bg-white text-[#111827] md:h-[210px] md:min-h-[210px] md:max-h-[210px]">
            <img
              src="/images/full_stack_web_development_poster.jpg"
              alt="Full-Stack MERN Development with AI"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/data_analyst_light_banner.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-[#FAF8FF]/95 md:via-white/88 to-transparent pointer-events-none w-full md:w-[60%] lg:w-[54%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent pointer-events-none md:hidden" />

            <div className="relative z-10 px-4 py-3 sm:px-6 lg:px-7 flex flex-col justify-center h-full">
              <div className="max-w-2xl space-y-1.5 min-w-0 pt-3 sm:pt-4">
                <h1 className="text-lg sm:text-xl lg:text-[24px] font-bold tracking-tight text-[#111827] leading-tight m-0">
                  Full-Stack MERN{' '}
                  <span className="text-[#6D28D9]">Development with AI</span>
                </h1>
                <p className="text-xs sm:text-[13px] text-[#64748B] font-medium leading-snug max-w-xl m-0">
                  Master MongoDB, Express.js, React.js, Node.js, Tailwind CSS, REST APIs, Git, GitHub Copilot, and full-stack cloud deployment.
                </p>
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[11px] sm:text-xs font-medium text-slate-700">
                  <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                    🔰 Beginner to Advanced
                  </span>
                  <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                    ⚛️ React 18 &amp; Hooks
                  </span>
                  <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                    🟢 Node.js &amp; Express APIs
                  </span>
                  <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                    🍃 MongoDB &amp; JWT Auth
                  </span>
                  <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                    🤖 GitHub Copilot &amp; AI Tools
                  </span>
                </div>

                <CourseHeroActionButtons
                  curriculum={FULL_STACK_MERN_CURRICULUM}
                  courseKey="full_stack_mern"
                  courseTitle="Full-Stack MERN Development with AI"
                  isCoursePaid={isCoursePaid}
                  isTopicAccessible={isTopicUnlocked}
                  onOpenEnrollModal={handleOpenSuccessPlan}
                  onResumeLesson={(topicId, title, tabId) => {
                    recordTopicStarted(topicId, 'full_stack_mern', tabId, title);
                    if (onStartTopic) {
                      onStartTopic(topicId, title, 'learn', tabId);
                    }
                  }}
                />
              </div>
            </div>
          </section>

          <CourseHorizontalTrackNav
            tabs={FULL_STACK_MERN_CURRICULUM}
            activeTabId={activeTabId}
            onSelectTab={handleSelectTab}
            getTabIconSrc={getTabRealIcon}
          />

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

            {/* Chapters / Modules List (Compact, Ergonomic & Systematic) */}
            <CompactCurriculumAccordion
              chapters={activeTab.chapters}
              activeTabId={activeTabId}
              courseKey="full_stack_mern"
              courseName="Full Stack MERN"
              isCoursePaid={isCoursePaid}
              highlightedTopicId={null}
              onStartTopic={onStartTopic}
              onOpenUnlockModal={handleOpenSuccessPlan}
              isTopicUnlocked={isTopicUnlocked}
            />
          </div>

          {/* RIGHT 4 COLS: STATS, LEARNING PATH & ENROLLMENT CTA */}
          <CourseProgressSidebar
            curriculum={FULL_STACK_MERN_CURRICULUM}
            courseKey="full_stack_mern"
            activeTabId={activeTabId}
            onSelectTab={handleSelectTab}
            projectsCount={8}
            isTopicAccessible={isTopicUnlocked}
          />

        </div>
      </main>
      </div>

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
