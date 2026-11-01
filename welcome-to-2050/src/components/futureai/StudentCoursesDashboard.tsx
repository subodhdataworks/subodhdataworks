import React, { useState, useEffect } from 'react';
import {
  Layers,
  LayoutGrid,
  List,
  Laptop,
  Code2,
  MessageSquare,
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
  onOpenLockedCourse: (courseTitle: string) => void;
  onOpenPythonDirect?: () => void;
  onOpenMockInterview?: () => void;
  onOpenGameArena?: () => void;
  onOpenCodingPracticeHub?: () => void;
  onOpenPlacementSupport?: () => void;
  onOpenAdvisor?: () => void;
  onOpenLogin?: () => void;
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
  onOpenLockedCourse,
  onOpenPythonDirect,
  onOpenMockInterview,
  onOpenGameArena,
  onOpenCodingPracticeHub,
  onOpenPlacementSupport,
  onOpenAdvisor,
  onOpenLogin,
}) => {
  const { playClick } = useThemeAccent();
  const [filter, setFilter] = useState<CourseFilterType>('all');
  const [categoryTab, setCategoryTab] = useState<'all' | 'flagship' | 'core' | 'ai'>('all');
  const [viewMode, setViewMode] = useState<CourseViewModeType>('grid');
  const [, setUnlockRefreshTick] = useState<number>(0);

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
    } else {
      onOpenDataAnalystCourse();
    }
  };

  // Filter 7 career courses according to category tab
  const filteredCareerCourses = CAREER_COURSES_12.filter((c) => {
    if (categoryTab === 'flagship') {
      return ['data-analyst-genai', 'data-science-agentic-ai', 'ml-engineering', 'ai-engineering', 'full-stack-web-dev'].includes(c.id);
    }
    if (categoryTab === 'core') {
      return c.id === 'data-analyst-genai';
    }
    if (categoryTab === 'ai') {
      return c.id === 'ai-engineering';
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
          1. PIXEL-PERFECT DESKTOP DASHBOARD (>= md, MATCHING MASTER SPECIFICATION)
          ========================================================================= */}
      <div className="hidden md:flex flex-col gap-3.5 w-full">
        
        {/* ─── 1.1 HERO BANNER: "Get Placement Ready" ─── */}
        <section
          className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-slate-700/30 select-none text-white min-h-[160px] sm:h-[170px] lg:h-[185px] transition-all"
          style={{
            background: 'linear-gradient(90deg, #033a82 0%, #082d8c 28%, #101c7d 62%, #58129e 100%)',
          }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 left-1/4 w-[380px] h-[380px] bg-cyan-400/20 rounded-full blur-3xl pointer-events-none dash-pulse-glow" />
          <div className="absolute bottom-0 right-16 w-[320px] h-[320px] bg-purple-500/25 rounded-full blur-3xl pointer-events-none dash-pulse-glow" />

          {/* LEFT: Student Portrait Integrated Seamlessly (Edge-to-Edge Flush with Zero Border Box) */}
          <img
            src="/images/dashboard/placement_student_seamless.png"
            alt="Placement Ready Student"
            className="absolute left-0 top-0 bottom-0 h-full w-auto object-cover object-left pointer-events-none select-none z-10"
          />

          {/* MAIN BANNER CONTENT (Center Journey + Right Checklist & 3D Rocket) */}
          <div className="relative z-20 flex items-center justify-between w-full h-full pl-[260px] sm:pl-[290px] lg:pl-[330px] pr-3 sm:pr-4 lg:pr-5">
            
            {/* CENTER: Headline + Subtitle + 4-Step Connected Journey */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-1 min-w-0">
              
              {/* Prominent Headline with Cyan Glow and Yellow Celebration Sparks */}
              <div className="relative inline-flex items-center justify-center">
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black tracking-tight text-white leading-tight">
                  Get Placement{' '}
                  <span className="relative inline-block text-[#00D2FF]">
                    Ready
                    {/* Yellow Celebration Sparks / Flares */}
                    <span
                      className="absolute -top-3.5 -right-5 pointer-events-none select-none text-[#FFD700]"
                      aria-hidden="true"
                    >
                      <svg className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(255,215,0,0.6)] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="2" x2="12" y2="6" />
                        <line x1="19" y1="5" x2="16" y2="8" />
                        <line x1="22" y1="12" x2="18" y2="12" />
                      </svg>
                    </span>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm lg:text-[13.5px] text-white/95 font-medium mt-1 tracking-wide">
                Learn • Practice • Build Projects • Get Hired
              </p>

              {/* Horizontal 4-Step Connected Visual Journey */}
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2.5 mt-2.5">
                {/* Step 1: Learn */}
                <div
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById('learning-modules-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-4 h-4 text-blue-600 stroke-[2.5]" />
                  </div>
                  <span className="text-[10px] sm:text-[10.5px] font-bold text-white mt-0.5">Learn</span>
                </div>

                {/* Connector 1 */}
                <div className="flex items-center -mt-3 text-cyan-300">
                  <div className="w-3.5 sm:w-5 lg:w-6 h-[1.5px] border-t border-dashed border-cyan-300/80" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-1 text-cyan-300 shrink-0" />
                </div>

                {/* Step 2: Practice */}
                <div
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => {
                    if (onOpenCodingPracticeHub) onOpenCodingPracticeHub();
                    else if (typeof window !== 'undefined') window.location.hash = '#game';
                  }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Code2 className="w-4 h-4 text-indigo-600 stroke-[2.5]" />
                  </div>
                  <span className="text-[10px] sm:text-[10.5px] font-bold text-white mt-0.5">Practice</span>
                </div>

                {/* Connector 2 */}
                <div className="flex items-center -mt-3 text-cyan-300">
                  <div className="w-3.5 sm:w-5 lg:w-6 h-[1.5px] border-t border-dashed border-cyan-300/80" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-1 text-cyan-300 shrink-0" />
                </div>

                {/* Step 3: Build */}
                <div
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById('learning-modules-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Laptop className="w-4 h-4 text-purple-600 stroke-[2.5]" />
                  </div>
                  <span className="text-[10px] sm:text-[10.5px] font-bold text-white mt-0.5">Build</span>
                </div>

                {/* Connector 3 */}
                <div className="flex items-center -mt-3 text-cyan-300">
                  <div className="w-3.5 sm:w-5 lg:w-6 h-[1.5px] border-t border-dashed border-cyan-300/80" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-1 text-cyan-300 shrink-0" />
                </div>

                {/* Step 4: Get Placed (Mint Green Pill) */}
                <div
                  className="flex items-center -mt-3 cursor-pointer group"
                  onClick={() => {
                    if (onOpenPlacementSupport) onOpenPlacementSupport();
                    else if (typeof window !== 'undefined') window.location.hash = '#placement';
                  }}
                >
                  <div className="px-2.5 sm:px-3 py-1 rounded-full bg-[#d1fae5] border border-[#a7f3d0] flex items-center gap-1.5 shadow-md group-hover:shadow-emerald-400/50 group-hover:scale-105 transition-all">
                    <Briefcase className="w-3.5 h-3.5 text-[#065f46] stroke-[2.5] shrink-0" />
                    <span className="text-[10.5px] sm:text-xs font-black text-[#065f46] whitespace-nowrap">
                      Get Placed
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT: Benefits Checklist + 3D Animated Illustration */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
              <div className="flex flex-col gap-1 text-white text-[10px] sm:text-[11px] lg:text-[11.5px] font-semibold text-left">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-[9px] font-black shrink-0 shadow-sm">
                    ✓
                  </div>
                  <span className="whitespace-nowrap">Industry-Ready Courses</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-[9px] font-black shrink-0 shadow-sm">
                    ✓
                  </div>
                  <span className="whitespace-nowrap">Real Projects &amp; Case Studies</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-[9px] font-black shrink-0 shadow-sm">
                    ✓
                  </div>
                  <span className="whitespace-nowrap">Unlimited Mock Interviews</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-[9px] font-black shrink-0 shadow-sm">
                    ✓
                  </div>
                  <span className="whitespace-nowrap">Placement Preparation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-[9px] font-black shrink-0 shadow-sm">
                    ✓
                  </div>
                  <span className="whitespace-nowrap">Internship &amp; Job Support</span>
                </div>
              </div>

              {/* 3D Animated Illustration with Rising Career Graph & Rocket */}
              <div className="hidden xl:flex items-center shrink-0 pl-1">
                <img
                  src="/images/dashboard/hero_3d_laptop_rocket.jpg"
                  alt="Career Launch 3D"
                  className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl object-cover shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-white/20 dash-float-anim"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ─── 1.2 SIX CAREER ACTION CARDS (ANIMATED & ELEVATED) ─── */}
        <section className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 w-full">
            
            {/* Card 1: Learn Coding */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group active:scale-[0.98] min-h-[96px]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1 min-w-0">
                    <h3 className="text-[12.5px] sm:text-[13px] font-black text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      Learn Coding
                    </h3>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
                <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-tight mt-1.5 text-left line-clamp-2">
                  Master in-demand skills with 7 industry-ready courses.
                </p>
              </div>
              <span className="mt-2 inline-block self-start px-2.5 py-0.5 rounded-full text-[9.5px] font-bold bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200/80 shadow-[0_2px_8px_rgba(59,130,246,0.22)] group-hover:shadow-[0_4px_12px_rgba(59,130,246,0.38)] transition-all">
                7 Courses
              </span>
            </div>

            {/* Card 2: DSA Practice */}
            <div
              onClick={() => {
                playClick();
                if (onOpenCodingPracticeHub) onOpenCodingPracticeHub();
                else if (onOpenGameArena) onOpenGameArena();
                else if (typeof window !== 'undefined') window.location.hash = '#game';
              }}
              className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group active:scale-[0.98] min-h-[96px]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1 min-w-0">
                    <h3 className="text-[12.5px] sm:text-[13px] font-black text-slate-900 group-hover:text-purple-600 transition-colors truncate">
                      DSA Practice
                    </h3>
                    <ChevronRight className="w-3.5 h-3.5 text-purple-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
                <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-tight mt-1.5 text-left line-clamp-2">
                  Solve coding problems and build strong logic.
                </p>
              </div>
              <span className="mt-2 inline-block self-start px-2.5 py-0.5 rounded-full text-[9.5px] font-bold bg-gradient-to-r from-purple-50 to-fuchsia-50 text-purple-700 border border-purple-200/80 shadow-[0_2px_8px_rgba(168,85,247,0.22)] group-hover:shadow-[0_4px_12px_rgba(168,85,247,0.38)] transition-all">
                Practice &amp; Improve
              </span>
            </div>

            {/* Card 3: Mock Interviews */}
            <div
              onClick={() => {
                playClick();
                if (onOpenMockInterview) onOpenMockInterview();
                else if (typeof window !== 'undefined') window.location.hash = '#mockinterview';
              }}
              className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 hover:border-emerald-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group active:scale-[0.98] min-h-[96px]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1 min-w-0">
                    <h3 className="text-[12.5px] sm:text-[13px] font-black text-slate-900 group-hover:text-emerald-600 transition-colors truncate">
                      Mock Interviews
                    </h3>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
                <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-tight mt-1.5 text-left line-clamp-2">
                  Practice real interview questions with AI &amp; experts.
                </p>
              </div>
              <span className="mt-2 inline-block self-start px-2.5 py-0.5 rounded-full text-[9.5px] font-bold bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border border-emerald-200/80 shadow-[0_2px_8px_rgba(16,185,129,0.22)] group-hover:shadow-[0_4px_12px_rgba(16,185,129,0.38)] transition-all">
                Unlimited Practice
              </span>
            </div>

            {/* Card 4: ATS Resume Score */}
            <div
              onClick={() => {
                playClick();
                if (typeof window !== 'undefined') window.location.hash = '#ats';
              }}
              className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 hover:border-sky-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group active:scale-[0.98] min-h-[96px]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1 min-w-0">
                    <h3 className="text-[12.5px] sm:text-[13px] font-black text-slate-900 group-hover:text-sky-600 transition-colors truncate">
                      ATS Resume Score
                    </h3>
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
                <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-tight mt-1.5 text-left line-clamp-2">
                  Check your resume score and get improvement tips.
                </p>
              </div>
              <span className="mt-2 inline-block self-start px-2.5 py-0.5 rounded-full text-[9.5px] font-bold bg-gradient-to-r from-sky-50 to-cyan-50 text-sky-700 border border-sky-200/80 shadow-[0_2px_8px_rgba(14,165,233,0.22)] group-hover:shadow-[0_4px_12px_rgba(14,165,233,0.38)] transition-all">
                AI-Powered Analysis
              </span>
            </div>

            {/* Card 5: Internships */}
            <div
              onClick={() => {
                playClick();
                if (typeof window !== 'undefined') window.location.hash = '#internship';
              }}
              className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group active:scale-[0.98] min-h-[96px]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1 min-w-0">
                    <h3 className="text-[12.5px] sm:text-[13px] font-black text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                      Internships
                    </h3>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
                <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-tight mt-1.5 text-left line-clamp-2">
                  Gain real-world experience and build your profile.
                </p>
              </div>
              <span className="mt-2 inline-block self-start px-2.5 py-0.5 rounded-full text-[9.5px] font-bold bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 border border-amber-200/80 shadow-[0_2px_8px_rgba(245,158,11,0.22)] group-hover:shadow-[0_4px_12px_rgba(245,158,11,0.38)] transition-all">
                Apply &amp; Build Experience
              </span>
            </div>

            {/* Card 6: Placement */}
            <div
              onClick={() => {
                playClick();
                if (onOpenPlacementSupport) onOpenPlacementSupport();
                else if (typeof window !== 'undefined') window.location.hash = '#placement';
              }}
              className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 hover:border-rose-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group active:scale-[0.98] min-h-[96px]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                    <Target className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1 min-w-0">
                    <h3 className="text-[12.5px] sm:text-[13px] font-black text-slate-900 group-hover:text-rose-600 transition-colors truncate">
                      Get Job
                    </h3>
                    <ChevronRight className="w-3.5 h-3.5 text-rose-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
                <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-tight mt-1.5 text-left line-clamp-2">
                  Complete preparation for your dream job.
                </p>
              </div>
              <span className="mt-2 inline-block self-start px-2.5 py-0.5 rounded-full text-[9.5px] font-bold bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700 border border-rose-200/80 shadow-[0_2px_8px_rgba(244,63,94,0.22)] group-hover:shadow-[0_4px_12px_rgba(244,63,94,0.38)] transition-all">
                Get Job Ready
              </span>
            </div>

          </div>
        </section>

        {/* ─── 1.3 CAREER TARGETING SECTION: "Your IT Career, No Matter Your Starting Point" ─── */}
        <section className="w-full mt-0.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 px-0.5">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>Your IT Career, No Matter Your Starting Point</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 text-blue-700 border border-blue-200">
                  Personalized Paths
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Personalized roadmaps designed for your unique background and goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            
            {/* Card 1: Non-IT Background? */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#041a38] via-[#072d63] to-[#0c4a8e] border border-blue-500/30 text-white p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group active:scale-[0.99] flex flex-col justify-between min-h-[145px]"
            >
              {/* Background 3D Art Overlay on Right */}
              <div className="absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden pointer-events-none opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                <img
                  src="/images/dashboard/career_non_it_student.jpg"
                  alt="Non-IT Background"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#041a38] via-[#072d63]/70 to-transparent" />
              </div>

              <div className="relative z-10 max-w-[65%]">
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 mb-2">
                  Zero to Tech Pro
                </span>
                <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-sm">
                  Non-IT Background?
                </h3>
                <p className="text-[11px] text-blue-100/90 font-normal mt-1 leading-snug">
                  No coding experience? Start from basics and build job-ready skills.
                </p>
              </div>

              <div className="relative z-10 mt-3 pt-2 flex items-center gap-1.5 text-xs font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                <span>Start Your IT Journey</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Career Gap? */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1b0a38] via-[#2f1163] to-[#581c9e] border border-purple-500/30 text-white p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group active:scale-[0.99] flex flex-col justify-between min-h-[145px]"
            >
              {/* Background 3D Art Overlay on Right */}
              <div className="absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden pointer-events-none opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                <img
                  src="/images/dashboard/career_gap_professional.jpg"
                  alt="Career Gap"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1b0a38] via-[#2f1163]/70 to-transparent" />
              </div>

              <div className="relative z-10 max-w-[65%]">
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-purple-400/20 text-purple-300 border border-purple-400/30 mb-2">
                  Confidence Restart
                </span>
                <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-sm">
                  Career Gap?
                </h3>
                <p className="text-[11px] text-purple-100/90 font-normal mt-1 leading-snug">
                  Ready to return? Refresh your skills and rebuild your career confidence.
                </p>
              </div>

              <div className="relative z-10 mt-3 pt-2 flex items-center gap-1.5 text-xs font-bold text-fuchsia-300 group-hover:text-fuchsia-200 transition-colors">
                <span>Restart Your Career</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Career Switch? */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#03291e] via-[#064235] to-[#0c6b54] border border-emerald-500/30 text-white p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group active:scale-[0.99] flex flex-col justify-between min-h-[145px]"
            >
              {/* Background 3D Art Overlay on Right */}
              <div className="absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden pointer-events-none opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                <img
                  src="/images/dashboard/career_switch_professional.jpg"
                  alt="Career Switch"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#03291e] via-[#064235]/70 to-transparent" />
              </div>

              <div className="relative z-10 max-w-[65%]">
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 mb-2">
                  High-Growth Shift
                </span>
                <h3 className="text-base sm:text-lg font-black text-white leading-tight drop-shadow-sm">
                  Career Switch?
                </h3>
                <p className="text-[11px] text-emerald-100/90 font-normal mt-1 leading-snug">
                  Move toward a career in IT with practical skills, projects and guidance.
                </p>
              </div>

              <div className="relative z-10 mt-3 pt-2 flex items-center gap-1.5 text-xs font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors">
                <span>Make the Switch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </section>

        {/* ─── 1.4 PROMOTIONAL DISCOVERY STRIP (HIGH CONVERSION) ─── */}
        <section
          onClick={() => {
            playClick();
            const el = document.getElementById('learning-modules-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full rounded-xl p-2.5 sm:px-4 sm:py-2.5 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 border border-amber-300/40 hover:border-amber-400/70 shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-between gap-3 group mt-0.5"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-6 px-2 items-center justify-center rounded-md bg-amber-500 text-slate-950 text-[10.5px] font-black uppercase tracking-wider shrink-0 shadow-sm animate-pulse">
              🚀 Launch Offer
            </span>
            <p className="text-xs sm:text-[13px] font-bold text-slate-800 truncate">
              Enroll in Any Track Today: Get Free Access to AI Mock Interviews, ATS Resume Score &amp; Internship Support!
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs font-extrabold text-blue-600 group-hover:text-blue-700 shrink-0 whitespace-nowrap">
            <span>Explore 7 Programs Below</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </section>

      </div>


      {/* =========================================================================
          2. ALL CAREER-FOCUSED INDUSTRY COURSES (7) (EXACT MATCH TO REFERENCE IMAGE 1)
          ========================================================================= */}
      <section className="lhh-modules-section scd-transparent-pots-section mt-2 lg:mt-3 pt-0" id="learning-modules-section">
        <div className="lhh-section-header">
          <div className="lhh-section-left">
            <div className="lhh-layer-icon-box">
              <Layers className="w-5 h-5 text-blue-600" />
            </div>
            <div className="lhh-section-title-wrap">
              <h2 className="lhh-section-title">Your Future Starts Here.</h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Explore 7 industry-focused courses designed to help you build real-world tech skills.</p>
            </div>
          </div>

          <div className="lhh-controls-group">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
              {[
                { id: 'all', label: 'All (7)' },
                { id: 'flagship', label: 'Flagship Tracks (5)' },
                { id: 'core', label: 'Core Analytics (1)' },
                { id: 'ai', label: 'AI & Next-Gen (1)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    playClick();
                    setCategoryTab(tab.id as any);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    categoryTab === tab.id
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Grid / List View Toggle */}
            <div className="lhh-view-toggle-capsule">
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setViewMode('grid');
                }}
                className={`lhh-view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setViewMode('list');
                }}
                className={`lhh-view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                aria-label="List view"
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* ─── 4 COLUMNS ON DESKTOP ROW 1, 3 ON ROW 2 ─── */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-4 w-full">
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
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector<HTMLVideoElement>('video');
                  if (vid) vid.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector<HTMLVideoElement>('video');
                  if (vid) vid.pause();
                }}
              >
                {c.video ? (
                  <video
                    src={c.video}
                    poster={c.image}
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="lhh-list-thumb"
                    onClick={() => handleCourseClick(c)}
                  />
                ) : (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="lhh-list-thumb"
                    onClick={() => handleCourseClick(c)}
                  />
                )}
                <div className="lhh-list-info">
                  <h3 className="lhh-list-title">{c.title}</h3>
                  <p className="lhh-list-desc">
                    {c.shortDesc}
                  </p>
                  <div className="lhh-list-meta flex flex-wrap items-center gap-2">
                    <span className="text-slate-400 font-bold text-xs line-through">
                      ₹12,999
                    </span>
                    <span className="text-emerald-700 font-extrabold text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      {c.price === '₹4' ? '99% OFF' : '92% OFF'}
                    </span>
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


      {/* ============================================================
          WHAT WILL YOU GET? (Full Certificates, No Blur, No Cut)
         ============================================================ */}
      <section className="lhh-wyg-full-section">
        <div className="lhh-pcomb-header">
          <div className="lhh-pcomb-icon-box lhh-pcomb-icon-blue">
            <Gift size={22} color="#fff" />
          </div>
          <div>
            <h2 className="lhh-pcomb-title">What Will You Get?</h2>
            <p className="lhh-pcomb-subtitle">
              Not just a course, but a complete career experience with Future IT Industry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-slate-200/90 group">
            <img
              src="/images/dashboard/wyg_card_internship.png?v=3"
              alt="3 Month Internship"
              className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/dashboard/internship_exact.jpg';
              }}
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-slate-200/90 group">
            <img
              src="/images/dashboard/wyg_card_letter_rec.png?v=3"
              alt="Letter of Recommendation"
              className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/dashboard/lor_exact.jpg';
              }}
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-slate-200/90 group">
            <img
              src="/images/dashboard/wyg_card_cert_internship.png?v=3"
              alt="Industrial Training Certificate"
              className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/dashboard/training_exact.jpg';
              }}
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-slate-200/90 group">
            <img
              src="/images/dashboard/wyg_card_cert_course.png?v=3"
              alt="Course Completion Certificate"
              className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
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
