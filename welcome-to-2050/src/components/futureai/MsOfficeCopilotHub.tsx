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
  RotateCcw,
  Code2,
  Mic
} from 'lucide-react';
import { MS_OFFICE_COPILOT_CURRICULUM, TabItem } from '../../data/msOfficeCopilotCurriculum';
import { SuccessPlanModal } from './SuccessPlanModal';
import { isCourseUnlocked, isTopicUnlocked } from '../../services/courseUnlockService';
import { UniversalMobileCourseView } from './UniversalMobileCourseView';
import './UniversalMobileCourseView.css';
import { CompactCurriculumAccordion } from './CompactCurriculumAccordion';
import { CourseHorizontalTrackNav } from './course/CourseHorizontalTrackNav';
import { CourseProgressSidebar } from './course/CourseProgressSidebar';
import { CourseHeroActionButtons } from './course/CourseHeroActionsAndStats';
import { getCoursePriceFromConfig } from '../../services/topicProgressTracker';

interface MsOfficeCopilotHubProps {
  userName?: string;
  onBack?: () => void;
  onStartTopic?: (topicId: string, title: string, step?: 'learn' | 'play' | 'interview') => void;
}

export const MsOfficeCopilotHub: React.FC<MsOfficeCopilotHubProps> = ({
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
  const [isCoursePaid, setIsCoursePaid] = useState<boolean>(() => isCourseUnlocked('ms_office_copilot'));

  useEffect(() => {
    const handleUpdate = () => {
      setIsCoursePaid(isCourseUnlocked('ms_office_copilot'));
    };
    window.addEventListener('futureai_course_unlocked', handleUpdate);
    return () => window.removeEventListener('futureai_course_unlocked', handleUpdate);
  }, []);

  const handleOpenSuccessPlan = (title?: string) => {
    setSelectedTargetTitle(title || 'MS Office 365 with Copilot AI');
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
    const isTopicFree = isTopicUnlocked('ms_office_copilot', chapterNum, topic.topicNum || 1, activeTabId);

    if (!isTopicFree) {
      handleOpenSuccessPlan(topic.title);
    } else if (onStartTopic) {
      onStartTopic(topic.id, topic.title);
    }
  };

  const activeTab: TabItem =
    MS_OFFICE_COPILOT_CURRICULUM.find((t) => t.id === activeTabId) ||
    MS_OFFICE_COPILOT_CURRICULUM[0];

  const handleSelectTab = (tabId: string) => {
    setActiveTabId(tabId);
    const targetTab = MS_OFFICE_COPILOT_CURRICULUM.find((t) => t.id === tabId);
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
        return '/images/icons3d/icon_06_genai.png';
      case 2:
        return '/images/icons3d/icon_todays_toolbox.png';
      case 3:
        return '/images/icons3d/icon_03_excel.png';
      case 4:
        return '/images/icons3d/icon_04_powerbi.png';
      case 5:
        return '/images/icons3d/icon_todays_calendar.png';
      case 6:
        return '/images/icons3d/icon_08_bizanalytics.png';
      case 7:
        return '/images/icons3d/icon_02_sql.png';
      case 8:
        return '/images/icons3d/icon_10_capstone.png';
      default:
        return '/images/icons3d/icon_03_excel.png';
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
          courseId="ms_office_copilot"
          courseTitle="Microsoft 365"
          courseTitlePrefix="with "
          courseTitleHighlight="Copilot AI"
          courseDescription="Automate executive reports, financial models in Excel, PowerPoint presentations, Word documentation and corporate productivity."
          courseBannerImage="/images/msoffice_365_copilot_poster.jpg"
          courseBannerFallback="/images/data_analyst_light_banner.jpg"
          badgeText="ENTERPRISE READY"
          featurePills={[
            '📊 Beginner to Advanced',
            '🛠️ Hands-on Projects',
            '👥 Interview Preparation',
            '📜 Industry Certificate',
            '✨ AI-Powered Learning',
          ]}
          enrollPriceText={`Enroll for ${getCoursePriceFromConfig('ms_office_copilot')}`}
          isCoursePaid={isCoursePaid}
          onBack={onBack}
          onEnroll={() => handleOpenSuccessPlan('Microsoft 365 with Copilot AI')}
          onResumeLearning={() => onStartTopic && onStartTopic('mso-t-1', 'Introduction to Microsoft 365 Copilot')}
          tabs={MS_OFFICE_COPILOT_CURRICULUM}
          activeTabId={activeTabId}
          onSelectTab={handleSelectTab}
          expandedChapters={expandedChapters}
          onToggleChapter={toggleChapter}
          onSelectTopic={handleTopicClick}
          customStats={{"modulesCount":38,"topicsCount":295,"projectsCount":6,"certificatesCount":1,"jobReadySkillsCount":"Job Ready Skills"}}
        />
      </div>

      {/* DESKTOP VIEW (>=768px) - 100% UNCHANGED */}
      <div className="course-desktop-only">
        <main className="w-full pt-0 space-y-3">

        {/* =========================================================================
            1. TOP HERO BANNER: SLIM FUTURE IT PURPLE-WHITE THEME
            ========================================================================= */}
        <section className="w-full relative rounded-2xl overflow-hidden border border-[#E9E5F5] shadow-[0_4px_18px_rgba(109,40,217,0.06)] bg-white text-[#111827] md:h-[210px] md:min-h-[210px] md:max-h-[210px]">
          {/* Background Poster Image */}
          <img
            src="/images/msoffice_365_copilot_poster.jpg"
            alt="Microsoft 365 with Copilot AI Productivity"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/data_analyst_light_banner.jpg';
            }}
          />
          {/* Soft Pearl Lavender-White Gradient for Crisp Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-[#FAF8FF]/95 md:via-white/88 to-transparent pointer-events-none w-full md:w-[60%] lg:w-[54%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent pointer-events-none md:hidden" />

          <div className="relative z-10 px-4 py-3 sm:px-6 lg:px-7 flex flex-col justify-center h-full">
            
            {/* Left Content Zone */}
            <div className="max-w-2xl space-y-1.5 min-w-0 pt-3 sm:pt-4">
              {/* Headline */}
              <h1 className="text-lg sm:text-xl lg:text-[24px] font-bold tracking-tight text-[#111827] leading-tight m-0">
                Microsoft 365 with{' '}
                <span className="text-[#6D28D9]">
                  Copilot AI
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] text-[#64748B] font-medium leading-snug max-w-xl m-0">
                Automate executive reports, financial models in Excel, PowerPoint presentations, Teams summaries, and Power Automate workflows with Microsoft Copilot AI.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[11px] sm:text-xs font-medium text-slate-700">
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  🔰 Beginner to Advanced
                </span>
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  📄 Word &amp; Excel Copilot
                </span>
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  📊 PowerPoint AI Decks
                </span>
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  ⚡ Power Automate Flows
                </span>
                <span className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs">
                  🛠️ 3 Business Capstones
                </span>
              </div>

              {/* Action Buttons (Dynamic Enrollment & Continue Learning Logic) */}
              <CourseHeroActionButtons
                curriculum={MS_OFFICE_COPILOT_CURRICULUM}
                courseKey="ms_office_copilot"
                courseTitle="Microsoft 365 with Copilot AI"
                isCoursePaid={isCoursePaid}
                isTopicAccessible={isTopicUnlocked}
                onOpenEnrollModal={handleOpenSuccessPlan}
                onResumeLesson={(topicId, title, tabId) => {
                  recordTopicStarted(topicId, 'ms_office_copilot', tabId, title);
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
          tabs={MS_OFFICE_COPILOT_CURRICULUM}
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
              courseKey="ms_office_copilot"
              courseName="MS Office & Copilot"
              isCoursePaid={isCoursePaid}
              highlightedTopicId={null}
              onStartTopic={onStartTopic}
              onOpenUnlockModal={handleOpenSuccessPlan}
              isTopicUnlocked={isTopicUnlocked}
            />

          </div>


          {/* ─────────────────────────────────────────────────────────────────────
              RIGHT COLUMN: SIDEBAR WIDGETS (Cols 9-12 / 10-12)
              ───────────────────────────────────────────────────────────────────── */}
          <CourseProgressSidebar
            curriculum={MS_OFFICE_COPILOT_CURRICULUM}
            courseKey="ms_office_copilot"
            activeTabId={activeTabId}
            onSelectTab={handleSelectTab}
            projectsCount={5}
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
        courseTitle="Microsoft 365 with Copilot AI"
      />

    </div>
  );
};

export default MsOfficeCopilotHub;
