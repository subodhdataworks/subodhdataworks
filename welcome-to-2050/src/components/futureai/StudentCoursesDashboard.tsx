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

        {/* ─── 1.2 SIX QUICK ACTION CARDS (SOFT, COHESIVE PURPLE BRAND PALETTE) ─── */}
        <section className="w-full" aria-label="Quick Actions">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 w-full">
            
            {/* Card 1: Learn Coding */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative bg-white hover:bg-[#FAF8FF] rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-[#E7E2F3] shadow-[0_2px_8px_rgba(109,40,217,0.03)] hover:shadow-[0_8px_20px_rgba(109,40,217,0.10)] hover:border-[#8B5CF6]/60 transition-all duration-200 cursor-pointer flex items-center justify-between gap-1.5 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center shrink-0 border border-[#E9E5F5] shadow-2xs group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  <Laptop className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left flex-1">
                  <h4 className="text-[12px] xl:text-[13px] font-semibold text-[#111827] group-hover:text-[#6D28D9] transition-colors leading-tight truncate">
                    Learn Coding
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Build in-demand skills
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#A78BFA] group-hover:text-[#6D28D9] group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 2: Coding & DSA */}
            <div
              onClick={() => {
                playClick();
                if (onOpenCodingPracticeHub) onOpenCodingPracticeHub();
                else if (onOpenGameArena) onOpenGameArena();
                else if (typeof window !== 'undefined') window.location.hash = '#game';
              }}
              className="relative bg-white hover:bg-[#FAF8FF] rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-[#E7E2F3] shadow-[0_2px_8px_rgba(109,40,217,0.03)] hover:shadow-[0_8px_20px_rgba(109,40,217,0.10)] hover:border-[#8B5CF6]/60 transition-all duration-200 cursor-pointer flex items-center justify-between gap-1.5 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 shadow-2xs group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  <Code2 className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left flex-1">
                  <h4 className="text-[12px] xl:text-[13px] font-semibold text-[#111827] group-hover:text-[#6D28D9] transition-colors leading-tight truncate">
                    Coding &amp; DSA
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Solve &amp; improve daily
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#A78BFA] group-hover:text-[#6D28D9] group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 3: Mock Interviews */}
            <div
              onClick={() => {
                playClick();
                if (onOpenMockInterview) onOpenMockInterview();
                else if (typeof window !== 'undefined') window.location.hash = '#mockinterview';
              }}
              className="relative bg-white hover:bg-[#FAF8FF] rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-[#E7E2F3] shadow-[0_2px_8px_rgba(109,40,217,0.03)] hover:shadow-[0_8px_20px_rgba(109,40,217,0.10)] hover:border-[#8B5CF6]/60 transition-all duration-200 cursor-pointer flex items-center justify-between gap-1.5 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center shrink-0 border border-[#E9E5F5] shadow-2xs group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  <Video className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left flex-1">
                  <h4 className="text-[12px] xl:text-[13px] font-semibold text-[#111827] group-hover:text-[#6D28D9] transition-colors leading-tight truncate">
                    Mock Interviews
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Practice with AI
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#A78BFA] group-hover:text-[#6D28D9] group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 4: ATS Resume Score */}
            <div
              onClick={() => {
                playClick();
                if (typeof window !== 'undefined') window.location.hash = '#ats';
              }}
              className="relative bg-white hover:bg-[#FAF8FF] rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-[#E7E2F3] shadow-[0_2px_8px_rgba(109,40,217,0.03)] hover:shadow-[0_8px_20px_rgba(109,40,217,0.10)] hover:border-[#8B5CF6]/60 transition-all duration-200 cursor-pointer flex items-center justify-between gap-1.5 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 shadow-2xs group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  <FileCheck className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left flex-1">
                  <h4 className="text-[12px] xl:text-[13px] font-semibold text-[#111827] group-hover:text-[#6D28D9] transition-colors leading-tight truncate">
                    ATS Resume Score
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Check &amp; improve resume
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#A78BFA] group-hover:text-[#6D28D9] group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 5: Internships */}
            <div
              onClick={() => {
                playClick();
                if (typeof window !== 'undefined') window.location.hash = '#internship';
              }}
              className="relative bg-white hover:bg-[#FAF8FF] rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-[#E7E2F3] shadow-[0_2px_8px_rgba(109,40,217,0.03)] hover:shadow-[0_8px_20px_rgba(109,40,217,0.10)] hover:border-[#8B5CF6]/60 transition-all duration-200 cursor-pointer flex items-center justify-between gap-1.5 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center shrink-0 border border-[#E9E5F5] shadow-2xs group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left flex-1">
                  <h4 className="text-[12px] xl:text-[13px] font-semibold text-[#111827] group-hover:text-[#6D28D9] transition-colors leading-tight truncate">
                    Internships
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Gain real experience
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#A78BFA] group-hover:text-[#6D28D9] group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

            {/* Card 6: Placement */}
            <div
              onClick={() => {
                playClick();
                if (onOpenPlacementSupport) onOpenPlacementSupport();
                else if (typeof window !== 'undefined') window.location.hash = '#placement';
              }}
              className="relative bg-white hover:bg-[#FAF8FF] rounded-[16px] lg:rounded-[18px] p-3 sm:p-3.5 border border-[#E7E2F3] shadow-[0_2px_8px_rgba(109,40,217,0.03)] hover:shadow-[0_8px_20px_rgba(109,40,217,0.10)] hover:border-[#8B5CF6]/60 transition-all duration-200 cursor-pointer flex items-center justify-between gap-1.5 group hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] text-[#7C3AED] flex items-center justify-center shrink-0 border border-indigo-100 shadow-2xs group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left flex-1">
                  <h4 className="text-[12px] xl:text-[13px] font-semibold text-[#111827] group-hover:text-[#6D28D9] transition-colors leading-tight truncate">
                    Placement
                  </h4>
                  <p className="text-[10px] xl:text-[10.5px] text-slate-500 font-normal truncate mt-0.5">
                    Job preparation
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#A78BFA] group-hover:text-[#6D28D9] group-hover:translate-x-0.5 transition-all shrink-0 relative z-10" />
            </div>

          </div>
        </section>

        {/* ─── 1.3 STRUCTURED LEARNING ROADMAPS (DISTINCT FROM HERO BANNER MESSAGING) ─── */}
        <section className="w-full" aria-label="Guided Learning Roadmaps">
          <div className="grid grid-cols-1 lg:grid-cols-[195px_1fr] xl:grid-cols-[205px_1fr] gap-2.5 items-stretch w-full">
            
            {/* Left Heading Block — Cohesive Brand Lavender-White */}
            <div className="relative bg-gradient-to-br from-[#FAF8FF] via-white to-[#F5F3FF] rounded-xl lg:rounded-2xl p-3 xl:p-3.5 border border-[#E9E5F5] shadow-[0_2px_12px_rgba(109,40,217,0.06)] hover:border-[#C4B5FD] transition-all duration-200 flex flex-col justify-center overflow-hidden text-left min-h-[105px]">
              <h3 className="text-[14.5px] xl:text-[15.5px] font-extrabold text-[#111827] leading-[1.28] tracking-tight relative z-10">
                Guided Tracks,<br />
                Tailored For<br />
                <span className="relative inline-block font-extrabold mt-0.5">
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

            {/* Right: Three Distinct Outcome-Focused Track Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 w-full">
              
              {/* Card 1 — Zero-to-Job Foundation */}
              <div
                onClick={() => {
                  playClick();
                  const el = document.getElementById('learning-modules-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative bg-gradient-to-br from-white via-[#FAF8FF] to-[#F5F3FF] border border-[#E9E5F5] rounded-xl lg:rounded-2xl p-3 shadow-[0_2px_10px_rgba(109,40,217,0.05)] hover:shadow-[0_6px_20px_rgba(109,40,217,0.12)] hover:border-[#C4B5FD] transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 min-h-[105px]"
              >
                <div className="relative z-10 max-w-[66%] text-left">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-5.5 h-5.5 rounded-md bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center shrink-0 border border-[#E9E5F5]">
                      <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                    </div>
                    <h4 className="text-[12.5px] xl:text-[13px] font-bold text-[#111827] group-hover:text-[#6D28D9] transition-colors leading-tight">
                      Zero-to-Job Foundation
                    </h4>
                  </div>
                  <p className="text-[10px] xl:text-[10.5px] text-[#64748B] font-medium leading-snug line-clamp-2 mt-0.5">
                    Start from Excel, SQL &amp; core logic with guided beginner lessons.
                  </p>
                </div>

                <div className="relative z-10 mt-1.5 self-start">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold text-[10px] shadow-xs transition-all cursor-pointer"
                  >
                    <span>View Foundation Track</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                <img
                  src="/images/dashboard/career_non_it_student_original.jpg"
                  alt="Foundation Learner"
                  className="absolute -right-1 -bottom-1 h-[104%] max-h-[106px] object-contain object-bottom pointer-events-none mix-blend-multiply drop-shadow-sm transition-transform duration-300 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Card 2 — Skill Refresh & Portfolio */}
              <div
                onClick={() => {
                  playClick();
                  const el = document.getElementById('learning-modules-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative bg-gradient-to-br from-white via-[#FAF8FF] to-[#F5F3FF] border border-[#E9E5F5] rounded-xl lg:rounded-2xl p-3 shadow-[0_2px_10px_rgba(109,40,217,0.05)] hover:shadow-[0_6px_20px_rgba(109,40,217,0.12)] hover:border-[#C4B5FD] transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 min-h-[105px]"
              >
                <div className="relative z-10 max-w-[66%] text-left">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-5.5 h-5.5 rounded-md bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center shrink-0 border border-[#E9E5F5]">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                    </div>
                    <h4 className="text-[12.5px] xl:text-[13px] font-bold text-[#111827] group-hover:text-[#6D28D9] transition-colors leading-tight">
                      Skill Refresh &amp; Portfolio
                    </h4>
                  </div>
                  <p className="text-[10px] xl:text-[10.5px] text-[#64748B] font-medium leading-snug line-clamp-2 mt-0.5">
                    Rebuild momentum with industry capstones, ATS resume &amp; mentor feedback.
                  </p>
                </div>

                <div className="relative z-10 mt-1.5 self-start">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-[10px] shadow-xs transition-all cursor-pointer"
                  >
                    <span>Build Your Portfolio</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                <img
                  src="/images/dashboard/career_gap_professional_original.jpg"
                  alt="Portfolio Builder"
                  className="absolute -right-1 -bottom-1 h-[104%] max-h-[106px] object-contain object-bottom pointer-events-none mix-blend-multiply drop-shadow-sm transition-transform duration-300 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Card 3 — Fast-Track Role Transition */}
              <div
                onClick={() => {
                  playClick();
                  const el = document.getElementById('learning-modules-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative bg-gradient-to-br from-white via-[#FAF8FF] to-[#F5F3FF] border border-[#E9E5F5] rounded-xl lg:rounded-2xl p-3 shadow-[0_2px_10px_rgba(109,40,217,0.05)] hover:shadow-[0_6px_20px_rgba(109,40,217,0.12)] hover:border-[#C4B5FD] transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5 active:translate-y-0 min-h-[105px]"
              >
                <div className="relative z-10 max-w-[66%] text-left">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-5.5 h-5.5 rounded-md bg-[#EEF2FF] text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                      <ArrowLeftRight className="w-3.5 h-3.5 shrink-0" />
                    </div>
                    <h4 className="text-[12.5px] xl:text-[13px] font-bold text-[#111827] group-hover:text-[#6D28D9] transition-colors leading-tight">
                      Fast-Track Role Transition
                    </h4>
                  </div>
                  <p className="text-[10px] xl:text-[10.5px] text-[#64748B] font-medium leading-snug line-clamp-2 mt-0.5">
                    Flexible projects &amp; 1-on-1 mock interviews to step into Data or AI roles.
                  </p>
                </div>

                <div className="relative z-10 mt-1.5 self-start">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-600 hover:bg-[#6D28D9] text-white font-semibold text-[10px] shadow-xs transition-all cursor-pointer"
                  >
                    <span>Explore Fast-Track</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                <img
                  src="/images/dashboard/career_switch_professional_original.jpg"
                  alt="Fast-Track Professional"
                  className="absolute -right-1 -bottom-1 h-[104%] max-h-[106px] object-contain object-bottom pointer-events-none mix-blend-multiply drop-shadow-sm transition-transform duration-300 group-hover:scale-103"
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
