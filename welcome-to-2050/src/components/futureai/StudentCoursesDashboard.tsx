import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  LayoutGrid,
  List,
  Laptop,
  Code2,
  MessageSquare,
  Video,
  Calendar,
  Zap,
  FileCheck,
  Briefcase,
  Target,
  ChevronRight,
  GraduationCap,
  ArrowLeftRight,
  Sparkles,
  TrendingUp,
  Gift,
  Award,
  Users,
  Rocket,
  ArrowRight
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import { RealSuccessStoriesShowcase } from './RealSuccessStoriesShowcase';
import { ALL_PLATFORM_COURSES, PlatformCourseItem } from '../../data/allPlatformCourses';
import { CareerCourseCard } from './CareerCourseCard';
import { CAREER_COURSES_12, CareerCourseItem } from '../../data/careerCourses12';
import { isCourseUnlocked, syncUserEnrollmentsFromServer } from '../../services/courseUnlockService';
import { MobileCompactDashboard } from './mobile/MobileCompactDashboard';
import { DesktopLoggedInHero } from './DesktopLoggedInHero';
import './LearnerHomeHub.css';

export interface StudentCoursesDashboardProps {
  userName: string;
  isNewStudentMode?: boolean;
  onOpenDataAnalystCourse: () => void;
  onOpenDataScienceCourse?: () => void;
  onOpenMlEngineeringCourse?: () => void;
  onOpenAiEngineeringCourse?: () => void;
  onOpenAiToolsPromptCourse?: () => void;
  onOpenMsOfficeCopilotCourse?: () => void;
  onOpenFullStackMernCourse?: () => void;
  onOpenAiWebsiteCourse?: () => void;
  onOpenAiAndroidCourse?: () => void;
  onOpenAiVideoCourse?: () => void;
  onOpenLockedCourse: (courseTitle: string) => void;
  onOpenPythonDirect?: () => void;
  onOpenMockInterview?: () => void;
  onOpenGameArena?: () => void;
  onOpenCodingPracticeHub?: () => void;
  onOpenPlacementSupport?: () => void;
  onOpenInternshipSupport?: () => void;
  onOpenCertificatesSupport?: () => void;
  onOpenWalletHub?: () => void;
  onOpenWithdrawModal?: () => void;
  onOpenAdvisor?: () => void;
  onOpenLogin?: () => void;
  onLogout?: () => void;
}

export type CourseFilterType = 'all' | 'in-progress' | 'not-started' | 'completed';
export type CourseViewModeType = 'grid' | 'list';

export const StudentCoursesDashboard: React.FC<StudentCoursesDashboardProps> = ({
  userName = 'Rahul Sharma',
  onOpenDataAnalystCourse,
  onOpenDataScienceCourse,
  onOpenMlEngineeringCourse,
  onOpenAiEngineeringCourse,
  onOpenAiToolsPromptCourse,
  onOpenMsOfficeCopilotCourse,
  onOpenFullStackMernCourse,
  onOpenAiWebsiteCourse,
  onOpenAiAndroidCourse,
  onOpenAiVideoCourse,
  onOpenLockedCourse,
  onOpenPythonDirect,
  onOpenMockInterview,
  onOpenGameArena,
  onOpenCodingPracticeHub,
  onOpenPlacementSupport,
  onOpenInternshipSupport,
  onOpenCertificatesSupport,
  onOpenWalletHub,
  onOpenWithdrawModal,
  onOpenAdvisor,
  onOpenLogin,
  onLogout,
}) => {
  const { playClick } = useThemeAccent();
  const [filter, setFilter] = useState<CourseFilterType>('all');
  const [categoryTab, setCategoryTab] = useState<'all' | 'flagship' | 'core' | 'ai'>('all');
  const [viewMode, setViewMode] = useState<CourseViewModeType>('grid');
  const [, setUnlockRefreshTick] = useState<number>(0);

  const rotatingCareerPhrases = [
    { text: 'Your Starting Point', color: '#ea580c', underline: '#fdba74' },
    { text: 'Non-IT Background', color: '#2563eb', underline: '#93c5fd' },
    { text: 'Career Gap', color: '#7c3aed', underline: '#d8b4fe' },
    { text: 'Career Switch', color: '#059669', underline: '#6ee7b7' },
  ];
  const [careerPhraseIdx, setCareerPhraseIdx] = useState<number>(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCareerPhraseIdx((prev) => (prev + 1) % 4);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const refreshUserCourseAccess = () => {
      setUnlockRefreshTick((t) => t + 1);
    };
    syncUserEnrollmentsFromServer().then(refreshUserCourseAccess).catch(() => {});
    window.addEventListener('futureai_course_unlocked', refreshUserCourseAccess);
    window.addEventListener('storage', refreshUserCourseAccess);
    return () => {
      window.removeEventListener('futureai_course_unlocked', refreshUserCourseAccess);
      window.removeEventListener('storage', refreshUserCourseAccess);
    };
  }, [userName]);

  const handleCourseClick = (c: { id: string; title?: string; fullName?: string }) => {
    playClick();

    if (c.id === 'data-analyst-genai') {
      onOpenDataAnalystCourse();
    } else if (c.id === 'data-science-agentic-ai') {
      if (onOpenDataScienceCourse) onOpenDataScienceCourse();
      else onOpenDataAnalystCourse();
    } else if (c.id === 'ml-engineering') {
      if (onOpenMlEngineeringCourse) onOpenMlEngineeringCourse();
      else onOpenDataAnalystCourse();
    } else if (c.id === 'ai-engineering') {
      if (onOpenAiEngineeringCourse) onOpenAiEngineeringCourse();
      else onOpenDataAnalystCourse();
    } else if (c.id === 'ai-tools-prompt' || c.id === 'ai-tools-prompt-mastery' || c.id === 'ai-tool-and-prompt') {
      if (onOpenAiToolsPromptCourse) onOpenAiToolsPromptCourse();
      else onOpenDataAnalystCourse();
    } else if (c.id === 'ms-office-copilot' || c.id === 'msoffice-365-copilot') {
      if (onOpenMsOfficeCopilotCourse) onOpenMsOfficeCopilotCourse();
      else onOpenDataAnalystCourse();
    } else if (c.id === 'full-stack-web-dev' || c.id === 'full-stack' || c.id === 'mern') {
      if (onOpenFullStackMernCourse) onOpenFullStackMernCourse();
      else onOpenDataAnalystCourse();
    } else if (c.id === 'ai-website-dev' || c.id === 'ai_website_dev') {
      if (onOpenAiWebsiteCourse) onOpenAiWebsiteCourse();
      else if (typeof window !== 'undefined') window.location.hash = '#ai-website-dev';
    } else if (c.id === 'ai-android-dev' || c.id === 'ai_android_dev') {
      if (onOpenAiAndroidCourse) onOpenAiAndroidCourse();
      else if (typeof window !== 'undefined') window.location.hash = '#ai-android-dev';
    } else if (c.id === 'ai-video-creation' || c.id === 'ai_video_creation') {
      if (onOpenAiVideoCourse) onOpenAiVideoCourse();
      else if (typeof window !== 'undefined') window.location.hash = '#ai-video-creation';
    } else {
      onOpenDataAnalystCourse();
    }
  };

  // Filter career courses according to category tab
  const filteredCareerCourses = CAREER_COURSES_12.filter((c) => {
    if (categoryTab === 'flagship') {
      return ['data-analyst-genai', 'data-science-agentic-ai', 'ml-engineering', 'ai-engineering', 'full-stack-web-dev'].includes(c.id);
    }
    if (categoryTab === 'core') {
      return c.id === 'data-analyst-genai' || c.id === 'ms-office-copilot';
    }
    if (categoryTab === 'ai') {
      return ['ai-engineering', 'ai-tools-prompt', 'ai-website-dev', 'ai-android-dev', 'ai-video-creation'].includes(c.id);
    }
    return true;
  });

  return (
    <div className="lhh-wrapper">
      {/* =========================================================================
          0. MOBILE APP-STYLE DASHBOARD BELOW HEADER (Mobile Only: < md)
          (100% PRESERVED PER STRICT SPECIFICATION)
          ========================================================================= */}
      <MobileCompactDashboard
        playClick={playClick}
        onCourseClick={(course) => handleCourseClick(course)}
        onOpenMyCourses={() => {
          onOpenDataAnalystCourse();
        }}
        onOpenCodingPractice={() => {
          if (onOpenCodingPracticeHub) {
            onOpenCodingPracticeHub();
          } else if (typeof window !== 'undefined') {
            window.location.hash = '#game';
          }
        }}
        onOpenMockInterview={() => {
          if (onOpenMockInterview) {
            onOpenMockInterview();
          } else if (typeof window !== 'undefined') {
            window.location.hash = '#mockinterview';
          }
        }}
        onOpenJobSupport={() => {
          if (onOpenPlacementSupport) {
            onOpenPlacementSupport();
          } else if (typeof window !== 'undefined') {
            window.location.hash = '#placement';
          }
        }}
      />

      {/* =========================================================================
          1. DASHBOARD V22 PREMIUM DESKTOP LAYOUT (Bento Hub + Full Width Content)
          ========================================================================= */}
      <div className="hidden md:flex flex-col gap-4 w-full">
        {/* ─── 1.1 HERO BANNER: Desktop Video Hero Banner (Preserved) ─── */}
        <DesktopLoggedInHero
          onContinueLearning={onOpenDataAnalystCourse}
          playClick={playClick}
          onOpenPlacement={onOpenPlacementSupport}
        />

        {/* ─── 1.2 SIX QUICK ACTION CARDS (GLOWING RADIANT PASTEL TABS) ─── */}
        <section className="w-full" aria-label="Quick Actions">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 w-full">
            
            {/* Card 1: Learn Coding — Glowing Ice Blue */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative bg-gradient-to-br from-[#eff6ff] via-[#f8faff] to-[#dbeafe]/70 rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-blue-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.18)] hover:border-blue-400 transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-blue-400/15 rounded-full blur-md pointer-events-none" />
              <div className="flex items-center gap-2.5 min-w-0 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-blue-100/90 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 shadow-2xs group-hover:scale-105 transition-transform">
                  <Laptop className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="text-[12px] xl:text-[13px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight truncate">
                    Learn Coding
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Build in-demand skills
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 2: DSA Practice — Glowing Rose Pink */}
            <div
              onClick={() => {
                playClick();
                if (onOpenCodingPracticeHub) onOpenCodingPracticeHub();
                else if (onOpenGameArena) onOpenGameArena();
                else if (typeof window !== 'undefined') window.location.hash = '#game';
              }}
              className="relative bg-gradient-to-br from-[#fff1f2] via-[#fffbfb] to-[#ffe4e6]/70 rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-rose-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(244,63,94,0.18)] hover:border-rose-400 transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-rose-400/15 rounded-full blur-md pointer-events-none" />
              <div className="flex items-center gap-2.5 min-w-0 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-rose-100/90 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200 shadow-2xs group-hover:scale-105 transition-transform">
                  <Code2 className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="text-[12px] xl:text-[13px] font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-tight truncate">
                    Coding Practice + DSA
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Solve & improve daily
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-rose-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 3: Mock Interviews — Glowing Emerald Mint */}
            <div
              onClick={() => {
                playClick();
                if (onOpenMockInterview) onOpenMockInterview();
                else if (typeof window !== 'undefined') window.location.hash = '#mockinterview';
              }}
              className="relative bg-gradient-to-br from-[#ecfdf5] via-[#f9fefb] to-[#d1fae5]/70 rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-emerald-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(16,185,129,0.18)] hover:border-emerald-400 transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-emerald-400/15 rounded-full blur-md pointer-events-none" />
              <div className="flex items-center gap-2.5 min-w-0 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-emerald-100/90 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 shadow-2xs group-hover:scale-105 transition-transform">
                  <Video className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="text-[12px] xl:text-[13px] font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight truncate">
                    Mock Interviews
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Practice with AI
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 4: ATS Resume Score — Glowing Cyan Sky */}
            <div
              onClick={() => {
                playClick();
                if (typeof window !== 'undefined') window.location.hash = '#ats';
              }}
              className="relative bg-gradient-to-br from-[#f0f9ff] via-[#f8fcff] to-[#e0f2fe]/70 rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-sky-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(14,165,233,0.18)] hover:border-sky-400 transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-sky-400/15 rounded-full blur-md pointer-events-none" />
              <div className="flex items-center gap-2.5 min-w-0 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-sky-100/90 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200 shadow-2xs group-hover:scale-105 transition-transform">
                  <FileCheck className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="text-[12px] xl:text-[13px] font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-tight truncate">
                    ATS Resume Score
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Check & improve resume
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-sky-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 5: Internships — Glowing Warm Amber */}
            <div
              onClick={() => {
                playClick();
                if (typeof window !== 'undefined') window.location.hash = '#internship';
              }}
              className="relative bg-gradient-to-br from-[#fffbeb] via-[#fffdf5] to-[#fef3c7]/70 rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-amber-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(245,158,11,0.18)] hover:border-amber-400 transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-amber-400/15 rounded-full blur-md pointer-events-none" />
              <div className="flex items-center gap-2.5 min-w-0 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-amber-100/90 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200 shadow-2xs group-hover:scale-105 transition-transform">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="text-[12px] xl:text-[13px] font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight truncate">
                    Internships
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Gain real experience
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 6: Placement — Glowing Violet Purple */}
            <div
              onClick={() => {
                playClick();
                if (onOpenPlacementSupport) onOpenPlacementSupport();
                else if (typeof window !== 'undefined') window.location.hash = '#placement';
              }}
              className="relative bg-gradient-to-br from-[#faf5ff] via-[#fcf9ff] to-[#f3e8ff]/70 rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-purple-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(168,85,247,0.18)] hover:border-purple-400 transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-purple-400/15 rounded-full blur-md pointer-events-none" />
              <div className="flex items-center gap-2.5 min-w-0 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-purple-100/90 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200 shadow-2xs group-hover:scale-105 transition-transform">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="text-[12px] xl:text-[13px] font-bold text-slate-900 group-hover:text-purple-600 transition-colors leading-tight truncate">
                    Placement
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Placement preparation
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

          </div>
        </section>

        {/* ─── 1.3 CAREER PATHWAY SECTION (GLOWING RADIANT PASTEL TABS) ─── */}
        <section className="w-full" aria-label="Career Pathways">
          <div className="grid grid-cols-1 lg:grid-cols-[195px_1fr] xl:grid-cols-[205px_1fr] gap-2 items-stretch w-full">
            
            {/* Left Heading Block — Glowing Ambient Ice Blue with 4-Text Dynamic Rotation */}
            <div className="relative bg-gradient-to-br from-[#f8faff] via-white to-[#eff6ff] rounded-xl lg:rounded-2xl p-3 xl:p-3.5 border border-blue-200/80 shadow-[0_2px_14px_rgba(59,130,246,0.10)] hover:shadow-[0_6px_22px_rgba(59,130,246,0.20)] hover:border-blue-300 transition-all duration-200 flex flex-col justify-center overflow-hidden text-left min-h-[105px]">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-blue-400/15 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-[14.5px] xl:text-[15.5px] font-black text-slate-900 leading-[1.28] tracking-tight relative z-10">
                Your IT Career,<br />
                No Matter<br />
                <span className="relative inline-block font-black mt-0.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={careerPhraseIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="relative z-10 inline-block whitespace-nowrap"
                      style={{ color: rotatingCareerPhrases[careerPhraseIdx].color }}
                    >
                      {rotatingCareerPhrases[careerPhraseIdx].text}
                    </motion.span>
                  </AnimatePresence>
                  <svg
                    className="absolute -bottom-1 -left-0.5 w-[104%] h-3 pointer-events-none z-0"
                    viewBox="0 0 120 16"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 11C35 4.5 85 3.5 117 8C85 13 35 14 3 11Z"
                      fill={rotatingCareerPhrases[careerPhraseIdx].underline}
                    />
                  </svg>
                </span>
              </h3>
            </div>

            {/* Right: Three Glowing Career Pathway Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
              
              {/* Card 1 — Non-IT Background? Glowing Ice-Blue */}
              <div
                onClick={() => {
                  playClick();
                  const el = document.getElementById('learning-modules-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative bg-gradient-to-br from-[#eff6ff] via-[#f8faff] to-[#dbeafe]/80 border border-blue-200/90 rounded-xl lg:rounded-2xl p-2.5 xl:p-3 shadow-[0_2px_14px_rgba(59,130,246,0.12)] hover:shadow-[0_6px_24px_rgba(59,130,246,0.26)] hover:border-blue-400 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 min-h-[105px]"
              >
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-400/15 rounded-full blur-xl pointer-events-none" />
                <div className="relative z-10 max-w-[66%] text-left">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-5 h-5 rounded-md bg-blue-100/90 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 shadow-2xs group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    </div>
                    <h4 className="text-[12px] xl:text-[12.5px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      Non-IT Background?
                    </h4>
                  </div>
                  <p className="text-[9.5px] xl:text-[10px] text-slate-600 font-medium leading-snug line-clamp-2 mt-0.5">
                    No coding experience? Start from basics and become job-ready.
                  </p>
                </div>

                <div className="relative z-10 mt-1 self-start">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[9.5px] shadow-sm shadow-blue-500/30 transition-all cursor-pointer group-hover:scale-102"
                  >
                    <span>Start Your IT Journey</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Original Generated Student Image Cutout */}
                <img
                  src="/images/dashboard/career_non_it_student_original.jpg"
                  alt="Non-IT Student"
                  className="absolute -right-1 -bottom-1 h-[106%] max-h-[108px] object-contain object-bottom pointer-events-none mix-blend-multiply drop-shadow-md transition-transform duration-300 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Card 2 — Career Gap? Glowing Lavender-Purple */}
              <div
                onClick={() => {
                  playClick();
                  const el = document.getElementById('learning-modules-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative bg-gradient-to-br from-[#faf5ff] via-[#fcf9ff] to-[#ede9fe]/80 border border-purple-200/90 rounded-xl lg:rounded-2xl p-2.5 xl:p-3 shadow-[0_2px_14px_rgba(168,85,247,0.12)] hover:shadow-[0_6px_24px_rgba(168,85,247,0.26)] hover:border-purple-400 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 min-h-[105px]"
              >
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-purple-400/15 rounded-full blur-xl pointer-events-none" />
                <div className="relative z-10 max-w-[66%] text-left">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-5 h-5 rounded-md bg-purple-100/90 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200 shadow-2xs group-hover:scale-105 transition-transform">
                      <Calendar className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    </div>
                    <h4 className="text-[12px] xl:text-[12.5px] font-bold text-slate-900 group-hover:text-purple-600 transition-colors leading-tight">
                      Career Gap?
                    </h4>
                  </div>
                  <p className="text-[9.5px] xl:text-[10px] text-slate-600 font-medium leading-snug line-clamp-2 mt-0.5">
                    Back to your career? Refresh skills, build projects and get hired.
                  </p>
                </div>

                <div className="relative z-10 mt-1 self-start">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-[9.5px] shadow-sm shadow-purple-500/30 transition-all cursor-pointer group-hover:scale-102"
                  >
                    <span>Restart Your Career</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Original Generated Professional Image Cutout */}
                <img
                  src="/images/dashboard/career_gap_professional_original.jpg"
                  alt="Career Gap Professional"
                  className="absolute -right-1 -bottom-1 h-[106%] max-h-[108px] object-contain object-bottom pointer-events-none mix-blend-multiply drop-shadow-md transition-transform duration-300 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Card 3 — Career Switch? Glowing Mint-Emerald */}
              <div
                onClick={() => {
                  playClick();
                  const el = document.getElementById('learning-modules-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative bg-gradient-to-br from-[#f0fdf4] via-[#f9fefb] to-[#dcfce7]/80 border border-emerald-200/90 rounded-xl lg:rounded-2xl p-2.5 xl:p-3 shadow-[0_2px_14px_rgba(16,185,129,0.12)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.26)] hover:border-emerald-400 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 min-h-[105px]"
              >
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-emerald-400/15 rounded-full blur-xl pointer-events-none" />
                <div className="relative z-10 max-w-[66%] text-left">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-5 h-5 rounded-md bg-emerald-100/90 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 shadow-2xs group-hover:scale-105 transition-transform">
                      <ArrowLeftRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <h4 className="text-[12px] xl:text-[12.5px] font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">
                      Career Switch?
                    </h4>
                  </div>
                  <p className="text-[9.5px] xl:text-[10px] text-slate-600 font-medium leading-snug line-clamp-2 mt-0.5">
                    Move to a high-growth IT career with the right skills and support.
                  </p>
                </div>

                <div className="relative z-10 mt-1 self-start">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-[9.5px] shadow-sm shadow-emerald-500/30 transition-all cursor-pointer group-hover:scale-102"
                  >
                    <span>Make the Switch</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Original Generated Switch Professional Image Cutout */}
                <img
                  src="/images/dashboard/career_switch_professional_original.jpg"
                  alt="Career Switch Professional"
                  className="absolute -right-1 -bottom-1 h-[106%] max-h-[108px] object-contain object-bottom pointer-events-none mix-blend-multiply drop-shadow-md transition-transform duration-300 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

            </div>
          </div></section>

      {/* =========================================================================
          2. ALL CAREER-FOCUSED INDUSTRY COURSES (7) (EXACT MATCH TO REFERENCE IMAGE)
          ========================================================================= */}
      <div className="w-full">
      <section className="lhh-modules-section scd-transparent-pots-section mt-2 lg:mt-3 pt-0" id="learning-modules-section">
        <div className="lhh-section-header flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 mb-3">
          <div className="lhh-section-left flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#6D28D9] shrink-0">
              <Layers className="w-4.5 h-4.5 text-[#6D28D9]" />
            </div>
            <div className="lhh-section-title-wrap">
              <h2 className="text-base sm:text-lg lg:text-[19px] font-black text-slate-900 tracking-tight leading-tight">
                Explore Career-Focused Courses
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5">
                Build practical skills through structured learning and real-world projects.
              </p>
            </div>
          </div>

          {/* Right Side: Category Filter Pills + Grid/List Toggle on the Same Header Row */}
          <div className="flex items-center justify-end gap-2.5 flex-wrap">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
              {[
                { id: 'all', label: `All (${CAREER_COURSES_12.length})` },
                { id: 'flagship', label: 'Flagship Tracks (5)' },
                { id: 'core', label: 'Core Analytics (2)' },
                { id: 'ai', label: 'AI & Live Classes (5)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    playClick();
                    setCategoryTab(tab.id as any);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    categoryTab === tab.id
                      ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-sm shadow-purple-500/25 scale-[1.02]'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-[#DDD6FE] hover:text-[#6D28D9]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle: Grid & List */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200 shrink-0">
              <button
                type="button"
                className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#6D28D9] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => {
                  playClick();
                  setViewMode('grid');
                }}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#6D28D9] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => {
                  playClick();
                  setViewMode('list');
                }}
                title="List View"
                aria-label="List View"
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* ─── 5 COLUMNS ON WIDE DESKTOP, 3-4 ON LAPTOP, 2 ON TABLET, 1-2 ON MOBILE ─── */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-3.5 w-full">
            {filteredCareerCourses.map((c) => {
              const unlocked = isCourseUnlocked(c.id);
              return (
                <CareerCourseCard
                  key={c.id}
                  {...c}
                  isUnlocked={unlocked}
                  onClick={() => handleCourseClick(c)}
                />
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="lhh-modules-list">
            {filteredCareerCourses.map((c) => (
              <div
                key={c.id}
                className="lhh-list-card"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="lhh-list-thumb"
                  onClick={() => handleCourseClick(c)}
                />
                <div className="lhh-list-info">
                  <h3 className="lhh-list-title">{c.title}</h3>
                  <p className="lhh-list-desc">
                    {c.shortDesc}
                  </p>
                  <div className="lhh-list-meta flex flex-wrap items-center gap-2">
                    {c.originalPrice && (
                      <span className="text-slate-400 font-bold text-xs line-through">
                        {c.originalPrice}
                      </span>
                    )}
                    {c.discountBadge && (
                      <span className="text-slate-950 font-black text-[10px] bg-yellow-400 px-1.5 py-0.5 rounded shadow-2xs uppercase">
                        {c.discountBadge}
                      </span>
                    )}
                    <span className="text-slate-900 font-black text-xs bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Now: {c.price}
                    </span>
                    <span>•</span>
                    <span className="text-slate-600 font-semibold text-xs">
                      CTC: {c.salary}
                    </span>
                    <span>•</span>
                    <span className="text-slate-500 font-medium text-xs">
                      Roles: {c.jobRoles}
                    </span>
                  </div>
                </div>
                <div className="lhh-list-actions">
                  <button
                    type="button"
                    className="py-1.5 px-3.5 rounded-full font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all duration-150 active:scale-95 cursor-pointer bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:to-indigo-700 border border-white/25"
                    onClick={() => handleCourseClick(c)}
                  >
                    {isCourseUnlocked(c.id) ? (
                      <>
                        <span>Resume Course</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                      </>
                    ) : (
                      <>
                        <Rocket className="w-3.5 h-3.5 text-white stroke-[2.3]" />
                        <span>Unlock Course</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
        </div>
      </div>


      {/* ============================================================
          WHAT WILL YOU GET? (Full Certificates, No Blur, No Cut — Slightly Compact)
         ============================================================ */}
      <section className="lhh-wyg-full-section !py-3.5 !px-4 sm:!px-5 !rounded-2xl">
        <div className="lhh-pcomb-header !mb-3 !gap-2.5">
          <div className="lhh-pcomb-icon-box lhh-pcomb-icon-blue !w-8 !h-8 !rounded-xl">
            <Gift size={17} color="#fff" />
          </div>
          <div>
            <h2 className="lhh-pcomb-title !text-base sm:!text-[18px]">What Will You Get?</h2>
            <p className="lhh-pcomb-subtitle !text-xs !mt-0.5">
              Not just a course, but a complete career experience with Future IT Industry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 w-full">
          <div className="rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-slate-200/90 group flex items-center justify-center">
            <img
              src="/images/dashboard/wyg_card_internship.png?v=3"
              alt="3 Month Internship"
              className="w-full max-h-[260px] object-contain block group-hover:scale-[1.01] transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/dashboard/internship_exact.jpg';
              }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-slate-200/90 group flex items-center justify-center">
            <img
              src="/images/dashboard/wyg_card_letter_rec.png?v=3"
              alt="Letter of Recommendation"
              className="w-full max-h-[260px] object-contain block group-hover:scale-[1.01] transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/dashboard/lor_exact.jpg';
              }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-slate-200/90 group flex items-center justify-center">
            <img
              src="/images/dashboard/wyg_card_cert_internship.png?v=3"
              alt="Industrial Training Certificate"
              className="w-full max-h-[260px] object-contain block group-hover:scale-[1.01] transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/dashboard/training_exact.jpg';
              }}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-slate-200/90 group flex items-center justify-center">
            <img
              src="/images/dashboard/wyg_card_cert_course.png?v=3"
              alt="Course Completion Certificate"
              className="w-full max-h-[260px] object-contain block group-hover:scale-[1.01] transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/dashboard/cert_completion_exact.jpg';
              }}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          REAL PEOPLE. REAL SUCCESS STORIES.
         ============================================================ */}
      <RealSuccessStoriesShowcase
        onOpenRole={(role) => onOpenLockedCourse(role)}
        onOpenPartnersModal={() => onOpenDataAnalystCourse()}
        onExploreProgram={() => onOpenDataAnalystCourse()}
      />
    </div>
  );
};
