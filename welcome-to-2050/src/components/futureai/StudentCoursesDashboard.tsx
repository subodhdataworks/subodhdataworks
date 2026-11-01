import { IndiasMostAffordableBanner } from './IndiasMostAffordableBanner';
import React, { useState, useEffect } from 'react';
import {
  Layers,
  LayoutGrid,
  List,
  Play,
  Gamepad2,
  FileText,
  Folder,
  BookOpen,
  Gift,
  Award,
  Scroll,
  ShieldCheck,
  FileCheck,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Brain,
  BarChart3,
  Bot,
  Lock,
  Briefcase,
  GraduationCap,
  Users,
  Star,
  Building2,
  Trophy,
  Clock,
  ArrowLeftRight,
  Code2
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import { RealSuccessStoriesShowcase } from './RealSuccessStoriesShowcase';
import { ALL_PLATFORM_COURSES, PlatformCourseItem } from '../../data/allPlatformCourses';
import { CareerCourseCard } from './CareerCourseCard';
import { CAREER_COURSES_12 } from '../../data/careerCourses12';
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

interface FlagshipCourseItem {
  id: string;
  badgeNum: number;
  statusTag: string;
  title: string;
  fullName: string;
  descLine1: string;
  descLine2: string;
  salaryRange: string;
  courseFee: string;
  marketPrice?: string;
  payAfterJob?: string;
  modulesCount: string;
  lessonsText: string;
  image: string;
  video?: string;
  progress: number;
  btnText: string;
  isUnlocked: boolean;
  themeColor: string;
  btnGradient: string;
  badgeBg: string;
  skillsList: string[];
}

// ─── Dual-Gradient Typewriter for "Playing Games" in Hero Line 3 ───────────────
const HeroPlayingGamesTypewriter: React.FC = () => {
  const fullText = 'Playing Games';
  const [displayText, setDisplayText] = useState(fullText);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 95);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2600);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 45);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 450);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  const playingPart = displayText.slice(0, 7);
  const hasSpace = displayText.length > 7;
  const gamesPart = displayText.slice(8);

  return (
    <span className="inline-flex items-baseline">
      {playingPart && (
        <span className="bg-gradient-to-r from-[#0866FF] to-[#A100E8] bg-clip-text text-transparent">
          {playingPart}
        </span>
      )}
      {hasSpace && (
        <span className="inline-block select-none whitespace-pre">
          {'\u00A0'}
        </span>
      )}
      {gamesPart && (
        <span className="bg-gradient-to-r from-[#F02C62] to-[#FF8A00] bg-clip-text text-transparent">
          {gamesPart}
        </span>
      )}
      <span className="inline-block ml-0.5 text-[#F02C62] font-light animate-pulse select-none">
        |
      </span>
    </span>
  );
};

// Hiring Partners list for continuous marquee
const HIRING_PARTNERS = [
  {
    id: 'tcs',
    name: 'TCS',
    node: <span className="text-rose-600 font-black text-xs sm:text-sm tracking-tighter">tcs</span>
  },
  {
    id: 'infosys',
    name: 'Infosys',
    node: <span className="text-[#007cc3] font-black text-xs sm:text-sm tracking-tight">Infosys</span>
  },
  {
    id: 'accenture',
    name: 'Accenture',
    node: (
      <span className="text-purple-800 font-extrabold text-xs sm:text-sm tracking-tight flex items-center gap-0.5">
        accenture <span className="text-[#a100ff]">&gt;</span>
      </span>
    )
  },
  {
    id: 'wipro',
    name: 'Wipro',
    node: (
      <span className="text-slate-800 font-black text-xs sm:text-sm tracking-normal flex items-center gap-1">
        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-blue-500" />
        wipro
      </span>
    )
  },
  {
    id: 'google',
    name: 'Google',
    node: (
      <span className="font-extrabold text-xs sm:text-sm tracking-tight flex items-center">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
    )
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    node: (
      <span className="text-slate-700 font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1">
        <span className="grid grid-cols-2 gap-0.5 w-2.5 h-2.5">
          <span className="bg-[#f25022]" />
          <span className="bg-[#7fba00]" />
          <span className="bg-[#00a4ef]" />
          <span className="bg-[#ffb900]" />
        </span>
        Microsoft
      </span>
    )
  },
  {
    id: 'amazon',
    name: 'Amazon',
    node: <span className="text-slate-900 font-black text-xs sm:text-sm tracking-tight">amazon</span>
  },
  {
    id: 'deloitte',
    name: 'Deloitte',
    node: (
      <span className="text-slate-900 font-black text-xs sm:text-sm tracking-tight">
        Deloitte<span className="text-emerald-500">.</span>
      </span>
    )
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    node: (
      <span className="text-[#0070ad] font-bold text-xs sm:text-sm tracking-tight flex items-center gap-0.5">
        Capgemini <span className="text-[#0070ad] text-[10px]">♠</span>
      </span>
    )
  },
  {
    id: 'ibm',
    name: 'IBM',
    node: <span className="text-[#1f70c1] font-black text-xs sm:text-sm tracking-widest font-mono">IBM</span>
  },
  {
    id: 'more',
    name: '700+ More',
    node: <span className="text-slate-400 font-semibold text-[11px] whitespace-nowrap">and 700+ more...</span>
  }
];

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

  // Continuous Typewriter effect for "Get Career-Ready."
  const careerReadyTargetText = 'Get Career-Ready.';
  const [typewriterText, setTypewriterText] = useState(careerReadyTargetText);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(careerReadyTargetText.length);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIndex < careerReadyTargetText.length) {
      timeout = setTimeout(() => {
        setTypewriterText(careerReadyTargetText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (!isDeleting && charIndex === careerReadyTargetText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypewriterText(careerReadyTargetText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 450);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, careerReadyTargetText]);

  const visibleCourses = ALL_PLATFORM_COURSES.filter((c) => {
    if (categoryTab !== 'all' && c.category !== categoryTab) return false;
    if (filter === 'in-progress') return c.progress > 0;
    if (filter === 'not-started') return c.progress === 0;
    if (filter === 'completed') return c.progress === 100;
    return true;
  });

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

  const handleSubAction = (
    c: PlatformCourseItem,
    type: 'modules' | 'games' | 'interview' | 'project'
  ) => {
    playClick();
    if (c.id === 'data-analyst-genai') {
      if (type === 'modules') onOpenDataAnalystCourse();
      else if (type === 'games') onOpenGameArena ? onOpenGameArena() : onOpenDataAnalystCourse();
      else if (type === 'interview') onOpenMockInterview ? onOpenMockInterview() : onOpenDataAnalystCourse();
      else if (type === 'project') onOpenDataAnalystCourse();
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

  return (
    <div className="lhh-wrapper">
      {/* =========================================================================
          0. MOBILE APP-STYLE DASHBOARD BELOW HEADER (Mobile Only: < md)
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
          1. PRE-LOGIN EXACT HERO SECTION + STATS + MARQUEE + 3 CARDS (Desktop Only: >= md)
          ========================================================================= */}
      <div className="hidden md:flex flex-col gap-4 w-full">
        
        {/* ─── 1.1 MAIN HERO SECTION (Color-Matched to Video Studio Background) ─── */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 py-5 sm:py-7 overflow-hidden bg-gradient-to-r from-[#dce7f2] via-[#e5eef7] to-[#edf4fb] rounded-2xl md:rounded-3xl border border-slate-200/80 shadow-xs">
          
          {/* Soft Ambient Aurora Lights */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-[#F4F8FC] pointer-events-none" />

          <div className="max-w-[1440px] w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center w-full">
              
              {/* LEFT COLUMN: Punchy Headline & CTAs */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left z-10 pl-0 lg:pl-3 min-w-0">
                
                {/* Main Headline */}
                <h1 className="flex flex-col items-start text-left font-poppins">
                  
                  {/* Line 1: Your Ultimate (with Crown, Cyan Accents & Curved Underline) */}
                  <div className="relative inline-block mt-2 sm:mt-3 mb-1">
                    
                    {/* Golden Crown */}
                    <span
                      className="absolute -top-3.5 sm:-top-4 left-0.5 -rotate-12 z-20 pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB800] drop-shadow-[0_2px_4px_rgba(255,184,0,0.45)]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                        <circle cx="3" cy="5" r="1.2" fill="#FFE580" />
                        <circle cx="12" cy="4" r="1.4" fill="#FFE580" />
                        <circle cx="21" cy="5" r="1.2" fill="#FFE580" />
                      </svg>
                    </span>

                    {/* Three small cyan accent strokes */}
                    <span
                      className="absolute -top-1 sm:-top-1.5 -right-4 sm:-right-5 pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D2FF]"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      >
                        <line x1="10" y1="2" x2="10" y2="7" />
                        <line x1="17" y1="6" x2="13" y2="9.5" />
                        <line x1="17" y1="15" x2="13" y2="12.5" />
                      </svg>
                    </span>

                    {/* Line 1 Text */}
                    <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[46px] font-black tracking-[-1.5px] leading-[1.08] bg-gradient-to-r from-[#0866FF] to-[#5727E8] bg-clip-text text-transparent block select-text">
                      Your Ultimate
                    </span>

                    {/* Thin curved blue-purple underline */}
                    <svg
                      className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2 sm:h-2.5 overflow-visible pointer-events-none select-none"
                      viewBox="0 0 300 16"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="heroCurvedUnderlineDashboard" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0866FF" />
                          <stop offset="100%" stopColor="#5727E8" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 4,12 Q 150,2 296,10"
                        stroke="url(#heroCurvedUnderlineDashboard)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Line 2: Placement Solution */}
                  <span className="text-[34px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] font-black text-[#08152F] leading-[1.08] tracking-[-1.5px] block mt-1 text-left select-text">
                    Placement{' '}
                    <span className="bg-gradient-to-r from-[#00A3FF] via-[#0866FF] to-[#7C3AED] bg-clip-text text-transparent">
                      Solution
                    </span>
                  </span>
                </h1>

                {/* Tagline */}
                <div className="mt-2 sm:mt-2.5 text-xs sm:text-sm lg:text-[15px] font-semibold text-slate-600 leading-snug max-w-lg mx-auto lg:mx-0">
                  <p className="inline-block px-3 sm:px-4 py-1 rounded-full text-slate-900 font-black bg-[#ffedea] border border-[#ffd5cc] tracking-tight">
                    For Non-IT, Career Gap &amp; Career Switchers
                  </p>
                  <p className="mt-1.5 hidden sm:block">
                    Learn industry-relevant skills with hands-on projects and get career ready.
                  </p>
                </div>

                {/* CTAs Row */}
                <div className="flex mt-3.5 flex-wrap items-center justify-start gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      playClick();
                      const el = document.getElementById('learning-modules-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 min-[375px]:px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 group"
                  >
                    <span>Start Learning Free</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      playClick();
                      if (onOpenCodingPracticeHub) onOpenCodingPracticeHub();
                      else if (onOpenGameArena) onOpenGameArena();
                      else if (typeof window !== 'undefined') window.location.hash = '#game';
                    }}
                    className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 active:scale-95 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2"
                  >
                    <Code2 className="w-3.5 h-3.5 text-[#1a73e8] shrink-0" />
                    <span>Explore DSA Coding Practice</span>
                  </button>
                </div>

                {/* Rating */}
                <div className="flex mt-2.5 flex-wrap items-center justify-start gap-1.5 sm:gap-2 text-[11px] text-slate-500 font-medium">
                  <div className="flex items-center text-amber-400 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span>
                    <strong className="text-slate-900 font-bold">4.9/5</strong> rating trusted by 100K+ learners across India
                  </span>
                </div>

              </div>

              {/* RIGHT COLUMN: Transparent Video */}
              <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative z-10">
                <div className="relative w-full max-w-[540px] lg:max-w-[600px] flex items-center justify-center">
                  
                  {/* Glowing Radiant Backing Aura */}
                  <div className="absolute inset-0 bg-radial from-cyan-400/25 via-blue-500/15 to-transparent rounded-full blur-2xl scale-110 pointer-events-none" />
                  
                  {/* Transparent Video */}
                  <div className="relative z-10 w-full flex items-center justify-center pointer-events-none select-none">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto max-h-[250px] min-[390px]:max-h-[290px] sm:max-h-[420px] lg:max-h-[460px] object-contain pointer-events-none select-none drop-shadow-[0_20px_40px_rgba(26,115,232,0.22)]"
                    >
                      <source src="/videos/header_hero_transparent.webm" type="video/webm" />
                      <source src="/videos/header_transparent_video.mp4" type="video/mp4" />
                    </video>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── 1.2 METRICS / TRUST STAT BADGES (Row of 4 Compact Badges) ─── */}
        <section className="w-full max-w-[1440px] mx-auto px-1 sm:px-2 relative z-20 shrink-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            
            {/* Card 1: 100K+ Students */}
            <div className="bg-white rounded-xl py-2.5 px-3.5 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight leading-none">
                  100K+
                </div>
                <div className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">
                  Students
                </div>
              </div>
            </div>

            {/* Card 2: 700+ Hiring Partners */}
            <div className="bg-white rounded-xl py-2.5 px-3.5 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
              <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight leading-none">
                  700+
                </div>
                <div className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">
                  Hiring Partners
                </div>
              </div>
            </div>

            {/* Card 3: 99% Placement Support */}
            <div className="bg-white rounded-xl py-2.5 px-3.5 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight leading-none">
                  99%
                </div>
                <div className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">
                  Placement Support
                </div>
              </div>
            </div>

            {/* Card 4: Industry Aligned Curriculum */}
            <div className="bg-white rounded-xl py-2.5 px-3.5 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
              <div className="w-8 h-8 rounded-lg bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight leading-none">
                  Industry
                </div>
                <div className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">
                  Aligned Curriculum
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 1.3 HIRING PARTNERS CONTINUOUS TICKER ROW (Right to Left Scrolling Marquee) ─── */}
        <div className="w-full max-w-[1440px] mx-auto px-1 sm:px-2 py-1 shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
            
            {/* Label */}
            <div className="text-[11px] sm:text-xs font-black text-slate-800 whitespace-nowrap shrink-0 flex items-center gap-1.5 border-r border-slate-200 pr-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Our Placed Students</span>
            </div>

            {/* Continuous Right-to-Left Infinite Marquee */}
            <div className="relative overflow-hidden flex-1 select-none">
              <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee-left flex items-center gap-7 sm:gap-9 text-xs font-bold text-slate-600">
                {[...HIRING_PARTNERS, ...HIRING_PARTNERS].map((partner, index) => (
                  <div key={partner.id + '-' + index} className="shrink-0 flex items-center">
                    {partner.node}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ─── 1.4 For Non-IT, Career Gap & Career Switchers Section (3 Compact Cards) ─── */}
        <section className="w-full max-w-[1440px] mx-auto px-1 sm:px-2 pt-1 pb-1">
          <div className="w-full">
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
              
              {/* Card 1: Non-IT Background? */}
              <div
                onClick={() => {
                  playClick();
                  const el = document.getElementById('learning-modules-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#ecfdf5] border border-[#d1fae5] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col min-[520px]:flex-row items-start min-[520px]:items-center gap-2 sm:gap-3.5 hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer active:scale-[0.98] group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-100/70 text-[#059669] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#059669]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[11px] sm:text-sm font-black text-slate-900 leading-tight">
                    Non-IT Background?
                  </h3>
                  <p className="text-[9.5px] sm:text-xs text-slate-600 font-medium leading-tight mt-0.5 sm:mt-1">
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
                className="bg-[#f5f3ff] border border-[#ede9fe] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col min-[520px]:flex-row items-start min-[520px]:items-center gap-2 sm:gap-3.5 hover:shadow-md hover:border-purple-300 transition-all cursor-pointer active:scale-[0.98] group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-100/70 text-[#7c3aed] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[11px] sm:text-sm font-black text-slate-900 leading-tight">
                    Career Gap?
                  </h3>
                  <p className="text-[9.5px] sm:text-xs text-slate-600 font-medium leading-tight mt-0.5 sm:mt-1">
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
                className="bg-[#fff7ed] border border-[#ffedd5] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col min-[520px]:flex-row items-start min-[520px]:items-center gap-2 sm:gap-3.5 hover:shadow-md hover:border-orange-300 transition-all cursor-pointer active:scale-[0.98] group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-orange-100/70 text-[#ea580c] flex items-center justify-center shrink-0">
                  <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#ea580c]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[11px] sm:text-sm font-black text-slate-900 leading-tight">
                    Career Switch?
                  </h3>
                  <p className="text-[9.5px] sm:text-xs text-slate-600 font-medium leading-tight mt-0.5 sm:mt-1">
                    Move to a High-Growth IT Career with Confidence.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* =========================================================================
          2. "YOUR CAREER COURSES (4 FLAGSHIP PROGRAMS)" HEADER & CONTROLS
          ========================================================================= */}
      <section className="lhh-modules-section scd-transparent-pots-section mt-8 lg:mt-12 pt-2" id="learning-modules-section">
        <div className="lhh-section-header">
          <div className="lhh-section-left">
            <div className="lhh-layer-icon-box">
              <Layers className="w-5 h-5 text-blue-600" />
            </div>
            <div className="lhh-section-title-wrap">
              <h2 className="lhh-section-title">All Career-Focused Industry Courses ({visibleCourses.length})</h2>

            </div>
          </div>

          <div className="lhh-controls-group">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
              {[
                { id: 'all', label: `All (${ALL_PLATFORM_COURSES.length})` },
                { id: 'flagship', label: `Flagship Tracks (${ALL_PLATFORM_COURSES.filter(c => c.category === 'flagship').length})` },
                { id: 'core', label: `Core Analytics (${ALL_PLATFORM_COURSES.filter(c => c.category === 'core').length})` },
                { id: 'ai', label: `AI & Next-Gen (${ALL_PLATFORM_COURSES.filter(c => c.category === 'ai').length})` },
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
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-sm shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

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

        {/* =========================================================================
            3. 4 FLAGSHIP COURSES — 3D CYLINDRICAL GLOWING NEON POTS (NO WHITE BG)
            ========================================================================= */}
        {viewMode === 'grid' ? (
          <div className="scd-pots-4grid">
            {CAREER_COURSES_12.map((c) => {
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
            {visibleCourses.map((c) => (
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
                    {c.descLine1} • {c.descLine2}
                  </p>
                  <div className="lhh-list-meta flex flex-wrap items-center gap-2">
                    <span style={{ color: c.themeColor }}>
                      {c.modulesCount} ({c.lessonsText})
                    </span>
                    <span>•</span>
                    <span className="line-through text-slate-400 font-semibold text-xs">{c.marketPrice}</span>
                    <span>•</span>
                    <span className="text-orange-500 font-semibold text-xs">PAJ: {c.payAfterJob}</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-black text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Now: {c.courseFee}</span>
                    <span>•</span>
                    <span className="text-slate-600 font-semibold text-xs">CTC: {c.salaryRange}</span>
                    <span>•</span>
                    <span style={{ color: c.progress > 0 ? c.themeColor : '#94a3b8' }}>
                      Progress: {c.progress}%
                    </span>
                  </div>
                </div>
                <div className="lhh-list-actions">
                  <button
                    type="button"
                    className="lhh-action-btn lhh-list-btn"
                    style={{ background: c.btnGradient }}
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
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-blue">
                <Award size={18} />
                <span>3 Month Internship</span>
              </div>
              <p className="lhh-wyg-exact-desc">
                Work on real projects, gain industry experience and learn from mentors.
              </p>
              <div className="lhh-wyg-pill-badge lhh-pill-blue">3 Months</div>
            </div>
            <div className="lhh-wyg-exact-img-box">
              <img
                src="/images/dashboard/internship_student.jpg"
                alt="3 Month Internship"
                className="lhh-wyg-photo"
              />
            </div>
          </div>

          <div className="lhh-wyg-exact-card lhh-wyg-card-cert-green">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-green">
                <FileCheck size={18} />
                <span>Internship Certificate</span>
              </div>
              <p className="lhh-wyg-exact-desc">
                Receive an official internship certificate from Future IT Industry after successful completion.
              </p>
            </div>
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/cert_internship_exact.jpg"
                alt="Internship Certificate"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>

          <div className="lhh-wyg-exact-card lhh-wyg-card-letter-purple">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-purple">
                <Scroll size={18} />
                <span>Recommendation Letter</span>
              </div>
              <p className="lhh-wyg-exact-desc">
                Get a professional recommendation letter based on your performance during the internship.
              </p>
            </div>
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/letter_recommendation_exact.jpg"
                alt="Recommendation Letter"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>

          <div className="lhh-wyg-exact-card lhh-wyg-card-cert-gold">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-gold">
                <ShieldCheck size={18} />
                <span>Course Completion Certificate</span>
              </div>
              <p className="lhh-wyg-exact-desc">
                Complete the course successfully and receive a verified certificate from Future IT Industry.
              </p>
            </div>
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
