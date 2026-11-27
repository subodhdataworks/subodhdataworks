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
import { DEEP_LEARNING_CURRICULUM, TabItem } from '../../data/deepLearningCurriculum';
import { SuccessPlanModal } from './SuccessPlanModal';
import { isCourseUnlocked, isTopicUnlocked } from '../../services/courseUnlockService';
import { CompactCurriculumAccordion } from './CompactCurriculumAccordion';

interface DeepLearningHubProps {
  userName?: string;
  onBack?: () => void;
  onStartTopic?: (topicId: string, title: string, step?: 'learn' | 'play' | 'interview') => void;
}

export const DeepLearningHub: React.FC<DeepLearningHubProps> = ({
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
  const [isCoursePaid, setIsCoursePaid] = useState<boolean>(() => isCourseUnlocked('deep_learning'));

  useEffect(() => {
    const handleUpdate = () => {
      setIsCoursePaid(isCourseUnlocked('deep_learning'));
    };
    window.addEventListener('futureai_course_unlocked', handleUpdate);
    return () => window.removeEventListener('futureai_course_unlocked', handleUpdate);
  }, []);

  const handleOpenSuccessPlan = (title?: string) => {
    setSelectedTargetTitle(title || 'Deep Learning & Neural Networks');
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
    const isTopicFree = isTopicUnlocked('deep_learning', chapterNum, topic.topicNum || 1, activeTabId);

    if (!isTopicFree) {
      handleOpenSuccessPlan(topic.title);
    } else if (onStartTopic) {
      onStartTopic(topic.id, topic.title);
    }
  };

  const activeTab: TabItem =
    DEEP_LEARNING_CURRICULUM.find((t) => t.id === activeTabId) ||
    DEEP_LEARNING_CURRICULUM[0];

  const handleSelectTab = (tabId: string) => {
    setActiveTabId(tabId);
    const targetTab = DEEP_LEARNING_CURRICULUM.find((t) => t.id === tabId);
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
        return '/images/icons3d/icon_05_stats.png';
      case 3:
        return '/images/icons3d/icon_01_python.png';
      case 4:
        return '/images/icons3d/icon_08_bizanalytics.png';
      case 5:
        return '/images/icons3d/icon_07_dataclean.png';
      case 6:
        return '/images/icons3d/icon_06_genai.png';
      case 7:
        return '/images/icons3d/icon_goal_target.png';
      case 8:
        return '/images/icons3d/icon_10_capstone.png';
      default:
        return '/images/icons3d/icon_06_genai.png';
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f7fd] text-slate-900 font-sans pb-16">
      
      {/* =========================================================================
          MAIN CONTAINER: STREAMLINED COMPACT TOP SPACING
          ========================================================================= */}
      <main className="max-w-[1520px] mx-auto px-4 sm:px-6 pt-0.5 sm:pt-1 space-y-3">

        {/* =========================================================================
            1. TOP HERO BANNER: LIGHT EXECUTIVE THEME (HIGH-CONTRAST TECH BACKDROP)
            ========================================================================= */}
        <section className="w-full relative rounded-2xl overflow-hidden border border-[#E6E0F4] shadow-[0_2px_14px_rgba(109,40,217,0.05)] bg-white text-[#111827] md:h-[148px] md:min-h-[148px] md:max-h-[148px]">
          {/* Full Background Daylight Tech Campus / Deep Learning Workspace Photo */}
          <img
            src="/images/hero-student-robot-poster.jpg"
            alt="Deep Learning Students Collaboration"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/data_analyst_light_banner.jpg';
            }}
          />
          {/* Soft Pearl Gradient: Left side is crisp white for clear black text, smoothly fading to transparent towards the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/98 md:via-white/95 to-transparent pointer-events-none w-full md:w-[75%] lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none md:hidden" />

          <div className="relative z-10 px-4 py-2.5 sm:px-6 lg:px-7 flex flex-col justify-center h-full">
            
            {/* Left Content Zone */}
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
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[9.5px] sm:text-[11px] font-black text-purple-800 tracking-wide uppercase shadow-2xs min-w-0">
                  <Flame className="w-3.5 h-3.5 fill-purple-500 text-purple-500 shrink-0" />
                  <span className="truncate">FUTURE IT INDUSTRY • PRACTICAL DEEP LEARNING</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-xl min-[375px]:text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#0F172A] leading-tight">
                Deep{' '}
                <span className="text-[#6D28D9]">
                  Learning
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13.5px] text-slate-700 font-semibold leading-relaxed max-w-xl">
                Master Neural Networks, PyTorch, Computer Vision, Transformers, Diffusion Models, and Multimodal AI with industry-ready projects.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[10px] sm:text-[10.5px] font-bold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🔰 Beginner to Advanced
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🧠 CNNs &amp; Computer Vision
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🤖 Transformers &amp; LLMs
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🎨 Diffusion &amp; Generative Models
                </span>
                <span className="flex items-center gap-1.5 bg-white/95 border border-slate-200/90 px-2.5 sm:px-3 py-1 rounded-full shadow-2xs">
                  🛠️ 5 Industry Capstones
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1.5">
                <button
                  type="button"
                  onClick={() => onStartTopic && onStartTopic('dl-t-4', 'AI vs Machine Learning vs Deep Learning')}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white shrink-0" />
                  <span>Learning</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenSuccessPlan('Deep Learning')}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm shadow-emerald-600/25 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Enroll for ₹987</span>
                </button>
              </div>
            </div>

            {/* Bottom Stats Bar inside Hero */}
            <div className="mt-5 pt-3 border-t border-slate-200/70 bg-white/75 backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-7 -mb-4 sm:-mb-6 lg:-mb-7 px-4 sm:px-6 lg:px-7 py-3 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-black text-slate-800 rounded-b-3xl">
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 flex items-center justify-center font-black text-[11px]">32</span>
                <span>Modules</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-black text-[11px]">370</span>
                <span>Topics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-black text-[11px]">5</span>
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
        <div id="dl-curriculum-tabs-map" className="overflow-x-auto scroll-smooth scrollbar-none pb-1.5 pt-0.5 px-0.5">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            {DEEP_LEARNING_CURRICULUM.map((tab) => {
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
                      ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white border-purple-500 shadow-md shadow-purple-500/25 z-10'
                      : 'bg-white hover:bg-slate-50/90 text-slate-800 border-slate-200 hover:border-purple-300 hover:shadow-sm shadow-2xs'
                  }`}
                >
                  {/* Real 3D High-Definition Icon Tile */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 p-1 transition-all duration-200 ${
                      isActive
                        ? 'bg-white/20 backdrop-blur-xs border border-white/30'
                        : 'bg-slate-100/80 border border-slate-200/70 group-hover:border-purple-200'
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

                  {/* Title & Chapter Subtitle */}
                  <div className="flex flex-col min-w-0 pr-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-black w-4 h-4 rounded-md flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-white/25 text-white border border-white/30'
                          : 'bg-purple-50 text-purple-800 border border-purple-200/80'
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
                      isActive ? 'text-purple-100' : 'text-slate-500'
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

            {/* ACTIVE TAB MAIN ACCORDION CONTAINER (Compact, Ergonomic & Systematic) */}
            <CompactCurriculumAccordion
              chapters={activeTab.chapters}
              activeTabId={activeTabId}
              courseKey="deep_learning"
              courseName="Deep Learning & Neural Networks"
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
          <aside className="lg:col-span-4 xl:col-span-3 space-y-4">
            
            {/* 1. YOUR PROGRESS CARD */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm text-slate-900">Your Progress</h3>
                <span className="text-[11px] font-bold text-purple-700 hover:underline cursor-pointer">
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
                      strokeDashoffset={163.36 * (1 - 0.18)}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span className="absolute font-black text-sm text-slate-900">18%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-slate-900">
                    28 / 370 Lessons Completed
                  </span>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mt-1.5">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '18%' }} />
                  </div>
                </div>
              </div>

              {/* 4-Grid Stat Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                    5
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Projects</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0">
                    32
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
                    16
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
                <span className="text-[11px] font-bold text-purple-700 hover:underline cursor-pointer">
                  View All →
                </span>
              </div>

              <div className="space-y-3 pt-1">
                {/* Step 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 truncate">
                      Deep Learning Foundations
                    </span>
                    <span className="text-[10px] text-slate-400">4 / 38 topics</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 truncate">
                      Neural Network Architecture
                    </span>
                    <span className="text-[10px] text-slate-400">0 / 47 topics</span>
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
                      PyTorch &amp; Computer Vision
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
        courseTitle="Deep Learning"
      />

    </div>
  );
};

export default DeepLearningHub;
