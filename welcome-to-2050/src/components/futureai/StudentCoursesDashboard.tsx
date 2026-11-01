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
  Users
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
          1. PIXEL-PERFECT DESKTOP DASHBOARD (>= md, MATCHING REFERENCE IMAGE 1)
          ========================================================================= */}
      <div className="hidden md:flex flex-col gap-4 w-full">
        
        {/* ─── 1.1 HERO BANNER: "Get Placement Ready" ─── */}
        <section
          className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-md border border-slate-700/30 select-none text-white"
          style={{
            background: 'linear-gradient(90deg, #0246a3 0%, #082d8c 35%, #101c7d 65%, #6a0dad 100%)',
          }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-purple-500/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between w-full h-[155px] lg:h-[165px] px-2 sm:px-4 lg:px-6">
            
            {/* LEFT: Celebrating Student with Laptop & Future IT Hoodie */}
            <div className="relative h-full w-[200px] lg:w-[250px] shrink-0 flex items-end justify-start">
              {/* Cyan Radiant Aura behind student */}
              <div className="absolute bottom-2 left-6 w-32 h-32 bg-cyan-400/35 rounded-full blur-xl pointer-events-none" />
              <img
                src="/images/dashboard/placement_hero_student_transparent.png"
                alt="Placement Ready Student"
                className="relative z-10 h-full max-h-[160px] lg:max-h-[165px] w-auto object-contain object-bottom pointer-events-none select-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* CENTER: Headline + Subtitle + 4-Step Connected Journey */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-2 min-w-0">
              
              {/* Headline with Yellow Celebration Sparks */}
              <div className="relative inline-flex items-center justify-center">
                <h1 className="text-xl sm:text-2xl lg:text-[29px] font-black tracking-tight text-white leading-tight">
                  Get Placement{' '}
                  <span className="relative inline-block text-[#00D2FF]">
                    Ready
                    {/* Yellow Celebration Sparks / Flares */}
                    <span
                      className="absolute -top-3.5 -right-5 pointer-events-none select-none text-[#FFD700]"
                      aria-hidden="true"
                    >
                      <svg className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(255,215,0,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="2" x2="12" y2="6" />
                        <line x1="19" y1="5" x2="16" y2="8" />
                        <line x1="22" y1="12" x2="18" y2="12" />
                      </svg>
                    </span>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] text-white/90 font-medium mt-0.5 tracking-wide">
                Your complete career preparation journey
              </p>

              {/* Horizontal 4-Step Connected Visual Journey */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 mt-3">
                {/* Step 1: Learn */}
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-md">
                    <GraduationCap className="w-4 h-4 text-blue-600 stroke-[2.5]" />
                  </div>
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-white mt-1">Learn</span>
                </div>

                {/* Connector 1 */}
                <div className="flex items-center -mt-4 text-white/50">
                  <div className="w-4 sm:w-6 lg:w-8 h-[2px] border-t border-dashed border-white/60" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-1 text-white/70 shrink-0" />
                </div>

                {/* Step 2: Practice */}
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-md">
                    <Code2 className="w-4 h-4 text-blue-600 stroke-[2.5]" />
                  </div>
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-white mt-1">Practice</span>
                </div>

                {/* Connector 2 */}
                <div className="flex items-center -mt-4 text-white/50">
                  <div className="w-4 sm:w-6 lg:w-8 h-[2px] border-t border-dashed border-white/60" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-1 text-white/70 shrink-0" />
                </div>

                {/* Step 3: Prepare */}
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-md">
                    <Users className="w-4 h-4 text-purple-600 stroke-[2.5]" />
                  </div>
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-white mt-1">Prepare</span>
                </div>

                {/* Connector 3 */}
                <div className="flex items-center -mt-4 text-white/50">
                  <div className="w-4 sm:w-6 lg:w-8 h-[2px] border-t border-dashed border-white/60" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-1 text-white/70 shrink-0" />
                </div>

                {/* Step 4: Get Placed (Mint Green Pill) */}
                <div className="flex items-center -mt-4">
                  <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#d1fae5] border border-[#a7f3d0] flex items-center gap-1.5 shadow-md">
                    <Briefcase className="w-3.5 h-3.5 text-[#065f46] stroke-[2.5] shrink-0" />
                    <span className="text-[10.5px] sm:text-xs font-black text-[#065f46] whitespace-nowrap">
                      Get Placed
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT: Benefits Checklist + Upward Growth Chart */}
            <div className="flex items-center gap-3 lg:gap-5 pr-2 lg:pr-5 shrink-0">
              {/* Checklist */}
              <div className="flex flex-col gap-1.5 text-white text-[11px] sm:text-xs font-semibold text-left">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-[10px] font-black shrink-0">
                    ✓
                  </div>
                  <span className="whitespace-nowrap">Industry-Ready Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-[10px] font-black shrink-0">
                    ✓
                  </div>
                  <span className="whitespace-nowrap">Real Projects &amp; Practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-[10px] font-black shrink-0">
                    ✓
                  </div>
                  <span className="whitespace-nowrap">Mock Interviews with AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-[10px] font-black shrink-0">
                    ✓
                  </div>
                  <span className="whitespace-nowrap">Internship &amp; Placement Support</span>
                </div>
              </div>

              {/* Upward Growth Chart Illustration */}
              <div className="hidden xl:flex items-end gap-1 h-16 pl-2 opacity-85 shrink-0 relative">
                <div className="w-2.5 h-5 bg-white/25 rounded-t" />
                <div className="w-2.5 h-8 bg-white/35 rounded-t" />
                <div className="w-2.5 h-11 bg-white/50 rounded-t" />
                <div className="w-2.5 h-14 bg-white/70 rounded-t relative">
                  <TrendingUp className="w-6 h-6 text-white absolute -top-5 -right-3" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 1.2 SIX CAREER FEATURE CARDS (1 ROW ON DESKTOP) ─── */}
        <section className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 w-full">
            
            {/* Card 1: Learn Coding */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="text-[13px] sm:text-[13.5px] font-black text-slate-900 mt-2.5 text-left group-hover:text-purple-600 transition-colors">
                  Learn Coding
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium leading-snug mt-1 text-left">
                  Master in-demand skills with 7 industry-ready courses.
                </p>
              </div>
              <span className="mt-3 inline-block self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f3e8ff] text-[#7e22ce] border border-[#e9d5ff]">
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
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="text-[13px] sm:text-[13.5px] font-black text-slate-900 mt-2.5 text-left group-hover:text-purple-600 transition-colors">
                  DSA Practice
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium leading-snug mt-1 text-left">
                  Solve coding problems and build strong logic.
                </p>
              </div>
              <span className="mt-3 inline-block self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f3e8ff] text-[#7e22ce] border border-[#e9d5ff]">
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
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="text-[13px] sm:text-[13.5px] font-black text-slate-900 mt-2.5 text-left group-hover:text-purple-600 transition-colors">
                  Mock Interviews
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium leading-snug mt-1 text-left">
                  Practice real interview questions with AI &amp; experts.
                </p>
              </div>
              <span className="mt-3 inline-block self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f3e8ff] text-[#7e22ce] border border-[#e9d5ff]">
                Unlimited Practice
              </span>
            </div>

            {/* Card 4: ATS Resume Score */}
            <div
              onClick={() => {
                playClick();
                if (typeof window !== 'undefined') window.location.hash = '#ats';
              }}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="text-[13px] sm:text-[13.5px] font-black text-slate-900 mt-2.5 text-left group-hover:text-purple-600 transition-colors">
                  ATS Resume Score
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium leading-snug mt-1 text-left">
                  Check your resume score and get improvement tips.
                </p>
              </div>
              <span className="mt-3 inline-block self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f3e8ff] text-[#7e22ce] border border-[#e9d5ff]">
                AI-Powered Analysis
              </span>
            </div>

            {/* Card 5: Internships */}
            <div
              onClick={() => {
                playClick();
                if (typeof window !== 'undefined') window.location.hash = '#internship';
              }}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="text-[13px] sm:text-[13.5px] font-black text-slate-900 mt-2.5 text-left group-hover:text-purple-600 transition-colors">
                  Internships
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium leading-snug mt-1 text-left">
                  Gain real-world experience and build your profile.
                </p>
              </div>
              <span className="mt-3 inline-block self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f3e8ff] text-[#7e22ce] border border-[#e9d5ff]">
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
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="text-[13px] sm:text-[13.5px] font-black text-slate-900 mt-2.5 text-left group-hover:text-purple-600 transition-colors">
                  Placement
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium leading-snug mt-1 text-left">
                  Complete preparation for your dream job.
                </p>
              </div>
              <span className="mt-3 inline-block self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f3e8ff] text-[#7e22ce] border border-[#e9d5ff]">
                Get Job Ready
              </span>
            </div>

          </div>
        </section>

        {/* ─── 1.3 CAREER SUPPORT STRIP (3 PASTEL CARDS) ─── */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            
            {/* Card 1: Non-IT Background? */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-2xl p-3 sm:p-3.5 flex items-center gap-3.5 hover:shadow-md hover:border-emerald-400 transition-all cursor-pointer active:scale-[0.98] group"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-[#059669] shrink-0">
                <GraduationCap className="w-5 h-5 text-[#059669]" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h3 className="text-[13.5px] sm:text-sm font-black text-slate-900 leading-tight">
                  Non-IT Background?
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight mt-0.5">
                  No Problem! Start from Zero.
                </p>
              </div>
            </div>

            {/* Card 2: Career Gap? */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#f5f3ff] border border-[#ddd6fe] rounded-2xl p-3 sm:p-3.5 flex items-center gap-3.5 hover:shadow-md hover:border-purple-400 transition-all cursor-pointer active:scale-[0.98] group"
            >
              <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-[#7c3aed] shrink-0">
                <Target className="w-5 h-5 text-[#7c3aed]" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h3 className="text-[13.5px] sm:text-sm font-black text-slate-900 leading-tight">
                  Career Gap?
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight mt-0.5">
                  Get Back to Your Career with New Skills.
                </p>
              </div>
            </div>

            {/* Card 3: Career Switch? */}
            <div
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#fff7ed] border border-[#fed7aa] rounded-2xl p-3 sm:p-3.5 flex items-center gap-3.5 hover:shadow-md hover:border-orange-400 transition-all cursor-pointer active:scale-[0.98] group"
            >
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-[#ea580c] shrink-0">
                <ArrowLeftRight className="w-5 h-5 text-[#ea580c]" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h3 className="text-[13.5px] sm:text-sm font-black text-slate-900 leading-tight">
                  Career Switch?
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight mt-0.5">
                  Move to a High-Growth IT Career with Confidence.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* =========================================================================
          2. ALL CAREER-FOCUSED INDUSTRY COURSES (7) (EXACT MATCH TO REFERENCE IMAGE 1)
          ========================================================================= */}
      <section className="lhh-modules-section scd-transparent-pots-section mt-4 lg:mt-6 pt-2" id="learning-modules-section">
        <div className="lhh-section-header">
          <div className="lhh-section-left">
            <div className="lhh-layer-icon-box">
              <Layers className="w-5 h-5 text-blue-600" />
            </div>
            <div className="lhh-section-title-wrap">
              <h2 className="lhh-section-title">All Career-Focused Industry Courses (7)</h2>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
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
                    <span className="text-emerald-600 font-black text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
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
                    className="lhh-action-btn lhh-list-btn"
                    onClick={() => handleCourseClick(c)}
                  >
                    {isCourseUnlocked(c.id) ? 'Resume Course →' : 'Unlock Course'}
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

        <div className="lhh-wyg-exact-grid">
          <div className="lhh-wyg-exact-card lhh-wyg-card-intern">
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/internship_exact.jpg"
                alt="Internship Certificate"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>

          <div className="lhh-wyg-exact-card lhh-wyg-card-lor">
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/lor_exact.jpg"
                alt="Letter of Recommendation"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>

          <div className="lhh-wyg-exact-card lhh-wyg-card-training">
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/training_exact.jpg"
                alt="Industrial Training Certificate"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>

          <div className="lhh-wyg-exact-card lhh-wyg-card-complete">
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/cert_completion_exact.jpg"
                alt="Course Completion Certificate"
                className="lhh-wyg-cert-full"
              />
            </div>
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
