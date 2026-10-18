import React, { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  Gift,
  ArrowRight,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Gamepad2,
  Users,
  FileCheck,
  CheckCircle2,
  Sparkles,
  Lock,
  Building2,
  TrendingUp,
  BarChart3,
  Bell,
  Cpu,
  Bot,
  Brain,
  ShieldCheck,
  Bookmark,
  Award,
  ChevronRight,
  Layers,
  LayoutGrid,
  List,
} from 'lucide-react';
import { LearnerTelemetry } from '../../../services/realAuthService';
import { useThemeAccent } from '../../../context/ThemeAccentContext';
import '../LearnerHomeHub.css';

interface MobileDashboardHomeProps {
  userName: string;
  telemetry: LearnerTelemetry;
  onStartPython: () => void;
  onOpenSql?: () => void;
  onOpenExcel?: () => void;
  onOpenPowerBi?: () => void;
  onOpenGenAi?: () => void;
  onOpenPlacement?: () => void;
  onOpenArena: () => void;
  onOpenEarn: () => void;
  onOpenAdvisor?: () => void;
  onOpenLockedModule: (moduleName: string) => void;
}

export const MobileDashboardHome: React.FC<MobileDashboardHomeProps> = ({
  userName,
  telemetry,
  onStartPython,
  onOpenSql,
  onOpenExcel,
  onOpenPowerBi,
  onOpenGenAi,
  onOpenPlacement,
  onOpenArena,
  onOpenEarn,
  onOpenAdvisor,
  onOpenLockedModule,
}) => {
  const { playClick, playHover } = useThemeAccent();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'explore' | 'completed'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // 4 Flagship Industry Courses matching the mobile reference design exactly
  const flagshipCourses = [
    {
      id: 'data-analyst-genai',
      badgeNum: 1,
      statusTag: 'ENROLLED • ACTIVE',
      badgeIcon: '🔥',
      badgeGradient: 'from-rose-500 via-pink-500 to-rose-600',
      title: 'Data Analyst',
      subtitle: 'with GenAI',
      shortDesc: 'Master Python, SQL, Power BI, Excel & GenAI Analytics.',
      salaryRange: '₹6 LPA - ₹15 LPA',
      courseFee: '₹18,999',
      image: '/images/pot1_sharp_poster.jpg',
      holoImage: '/images/pot1_sharp_poster.jpg',
      video: '/videos/data_analyst_genai_v2.mp4',
      potTheme: 'blue' as const,
      skillsList: ['Python', 'SQL', 'Excel', 'Power BI', 'GenAI'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(0,180,255,0.22)]',
        cardBorder: 'border-sky-300',
        trayBg: 'bg-gradient-to-r from-sky-50/95 via-white to-cyan-50/95',
        trayBorder: 'border-sky-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(0,210,255,0.3)]',
        neonLip: 'bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400',
        btnClass: 'bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-blue-500/30',
        priceBorder: 'border-sky-400',
      },
      action: onStartPython,
    },
    {
      id: 'data-science-agentic-ai',
      badgeNum: 2,
      statusTag: 'HIGH DEMAND',
      badgeIcon: '📊',
      badgeGradient: 'from-purple-600 via-indigo-600 to-purple-700',
      title: 'Data Science &',
      subtitle: 'Agentic AI',
      shortDesc: 'Explore Machine Learning, Deep Learning, RAG & AI Agents.',
      salaryRange: '₹10 LPA - ₹22 LPA',
      courseFee: '₹29,999',
      image: '/images/pot2_sharp_poster.jpg',
      holoImage: '/images/pot2_sharp_poster.jpg',
      video: '/videos/data_science_agentic_ai_course.mp4',
      potTheme: 'purple' as const,
      skillsList: ['Data Science', 'ML', 'Deep Learning', 'RAG', 'Agentic AI'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(168,85,247,0.22)]',
        cardBorder: 'border-purple-300',
        trayBg: 'bg-gradient-to-r from-purple-50/95 via-white to-fuchsia-50/95',
        trayBorder: 'border-purple-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(168,85,247,0.3)]',
        neonLip: 'bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400',
        btnClass: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/30',
        priceBorder: 'border-purple-400',
      },
      action: () => (onOpenGenAi ? onOpenGenAi() : onOpenLockedModule('Data Science & Agentic AI')),
    },
    {
      id: 'ml-engineering',
      badgeNum: 3,
      statusTag: 'ADVANCED TECH',
      badgeIcon: '👑',
      badgeGradient: 'from-amber-500 via-orange-500 to-amber-600',
      title: 'ML',
      subtitle: 'Engineering',
      shortDesc: 'Build & deploy scalable ML models, PyTorch & MLOps pipelines.',
      salaryRange: '₹12 LPA - ₹28 LPA',
      courseFee: '₹39,999',
      image: '/images/pot3_sharp_poster.jpg',
      holoImage: '/images/pot3_sharp_poster.jpg',
      video: '/videos/ml_engineering_course.mp4',
      potTheme: 'gold' as const,
      skillsList: ['PyTorch', 'TensorFlow', 'MLOps', 'Docker', 'Cloud AI'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(245,158,11,0.22)]',
        cardBorder: 'border-amber-300',
        trayBg: 'bg-gradient-to-r from-amber-50/95 via-white to-orange-50/95',
        trayBorder: 'border-amber-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(245,158,11,0.3)]',
        neonLip: 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400',
        btnClass: 'bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-amber-500/30',
        priceBorder: 'border-amber-400',
      },
      action: () => (onOpenPowerBi ? onOpenPowerBi() : onOpenLockedModule('ML Engineering')),
    },
    {
      id: 'ai-engineering',
      badgeNum: 4,
      statusTag: 'FLAGSHIP 2050',
      badgeIcon: '⭐',
      badgeGradient: 'from-emerald-500 via-teal-500 to-emerald-600',
      title: 'AI',
      subtitle: 'Engineering',
      shortDesc: 'Design intelligent systems, LLMs, Vector DBs & Multi-Agents.',
      salaryRange: '₹15 LPA - ₹35 LPA',
      courseFee: '₹49,999',
      image: '/images/pot4_sharp_poster.jpg',
      holoImage: '/images/pot4_sharp_poster.jpg',
      video: '/videos/ai_engineering_course.mp4',
      potTheme: 'emerald' as const,
      skillsList: ['LLMs', 'LangChain', 'Vector DBs', 'Fine-Tuning', 'OpenAI'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(16,185,129,0.22)]',
        cardBorder: 'border-emerald-300',
        trayBg: 'bg-gradient-to-r from-emerald-50/95 via-white to-teal-50/95',
        trayBorder: 'border-emerald-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(16,185,129,0.3)]',
        neonLip: 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400',
        btnClass: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/30',
        priceBorder: 'border-emerald-400',
      },
      action: () => onOpenLockedModule('Full-Stack AI Engineering'),
    },
  ];

  const visibleCourses = flagshipCourses.filter((c) => {
    if (filter === 'in-progress') return c.id === 'data-analyst-genai';
    if (filter === 'explore') return c.id !== 'data-analyst-genai';
    if (filter === 'completed') return false;
    return true;
  });

  return (
    <div className="w-full pb-32 pt-2 px-3 sm:px-4 space-y-4 text-left select-none max-w-md mx-auto">
      
      {/* =========================================================================
          1. SEARCH BAR WITH FILTER SLIDER (Exact match to Reference)
          ========================================================================= */}
      <div className="relative w-full bg-white border border-sky-200/90 rounded-2xl shadow-xs px-3.5 py-2.5 flex items-center gap-2.5 focus-within:border-blue-500 transition-all">
        <Search className="w-4 h-4 text-sky-500 shrink-0" />
        <input
          type="text"
          placeholder="Search for topics, modules, projects, interview questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full text-xs font-semibold text-slate-800 placeholder:text-slate-400 bg-transparent outline-none"
        />
        <button
          type="button"
          onClick={() => playClick?.()}
          className="shrink-0 p-1 text-slate-500 hover:text-slate-800 cursor-pointer active:scale-95"
          aria-label="Filter"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* =========================================================================
          2. HERO BANNER: "Learn AI & Data Skills. Get Job-Ready. Pay After Placement."
          ========================================================================= */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-md border border-sky-200/90 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
        {/* Background Building Image */}
        <img
          src="/images/future_it_university_hero.jpg"
          alt="Future IT Industries Campus"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        
        {/* Crisp Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" />

        {/* Content Container */}
        <div className="relative p-4 sm:p-5 flex flex-col justify-between min-h-[175px]">
          <div className="max-w-[70%]">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
              Learn AI &amp;<br />
              Data Skills.<br />
              <span className="text-slate-900">Get Job-Ready.</span><br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Pay After Placement.
              </span>
            </h1>

            {/* Red Limited-Time Offer pill */}
            <div className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full bg-rose-500 text-white text-[9px] font-black shadow-xs uppercase tracking-wider">
              <Gift className="w-3 h-3 text-white" />
              <span>LIMITED-TIME OFFER</span>
            </div>

            {/* White Enroll Pill Button */}
            <button
              type="button"
              onClick={() => {
                playClick?.();
                onOpenLockedModule('All 4 Courses Bundle');
              }}
              className="mt-2.5 bg-white hover:bg-slate-50 border border-sky-300 shadow-sm rounded-full py-1.5 px-3 flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <div className="text-left leading-none">
                <div className="text-[9px] font-bold text-slate-500">Enroll in All 4 Courses for Just</div>
                <div className="text-sm font-black text-blue-600 mt-0.5">₹987</div>
              </div>
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>

          {/* Right Floating Card: Pay After Job Offer ₹18,000 */}
          <div className="absolute right-3 bottom-3 bg-white/95 backdrop-blur-md border border-white/95 rounded-2xl p-2.5 shadow-md text-right max-w-[130px]">
            <div className="flex items-center justify-end gap-1 text-[9px] font-bold text-amber-900">
              <Briefcase className="w-3 h-3 text-amber-700 shrink-0" />
              <span className="leading-tight">Pay After Job Offer</span>
            </div>
            <div className="text-base font-black text-rose-600 leading-none mt-1">₹18,000</div>
            <div className="text-[8px] font-semibold text-slate-400 mt-0.5 leading-tight">Remaining Program Fee</div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. QUICK COURSE PILLS & FEATURE BADGES (Exact 2 Rows from Screenshot)
          ========================================================================= */}
      <div className="space-y-2">
        {/* Row 1: 4 Course Price Cards */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
          {/* 1. Data Analyst with GenAI */}
          <div
            onClick={() => {
              playClick?.();
              onStartPython();
            }}
            className="p-1.5 sm:p-2 rounded-2xl bg-sky-50/90 border border-sky-200/90 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-2xs"
          >
            <div className="w-7 h-7 rounded-xl bg-sky-100 flex items-center justify-center shrink-0 text-sky-600">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[9px] font-black text-slate-900 leading-tight truncate">Data Analyst</div>
              <div className="text-[8px] text-slate-500 font-semibold leading-tight truncate">with GenAI</div>
              <div className="text-[10px] font-black text-rose-600 leading-tight mt-0.5">₹18,999</div>
            </div>
          </div>

          {/* 2. Data Science & Agentic AI */}
          <div
            onClick={() => {
              playClick?.();
              if (onOpenGenAi) onOpenGenAi();
              else onOpenLockedModule('Data Science & Agentic AI');
            }}
            className="p-1.5 sm:p-2 rounded-2xl bg-purple-50/90 border border-purple-200/90 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-2xs"
          >
            <div className="w-7 h-7 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 text-purple-600">
              <Brain className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[9px] font-black text-slate-900 leading-tight truncate">Data Science</div>
              <div className="text-[8px] text-slate-500 font-semibold leading-tight truncate">&amp; Agentic AI</div>
              <div className="text-[10px] font-black text-rose-600 leading-tight mt-0.5">₹29,999</div>
            </div>
          </div>

          {/* 3. ML Engineering */}
          <div
            onClick={() => {
              playClick?.();
              if (onOpenPowerBi) onOpenPowerBi();
              else onOpenLockedModule('ML Engineering');
            }}
            className="p-1.5 sm:p-2 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-2xs"
          >
            <div className="w-7 h-7 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[9px] font-black text-slate-900 leading-tight truncate">ML</div>
              <div className="text-[8px] text-slate-500 font-semibold leading-tight truncate">Engineering</div>
              <div className="text-[10px] font-black text-rose-600 leading-tight mt-0.5">₹39,999</div>
            </div>
          </div>

          {/* 4. AI Engineering */}
          <div
            onClick={() => {
              playClick?.();
              onOpenLockedModule('Full-Stack AI Engineering');
            }}
            className="p-1.5 sm:p-2 rounded-2xl bg-emerald-50/90 border border-emerald-200/90 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-2xs"
          >
            <div className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
              <Bot className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[9px] font-black text-slate-900 leading-tight truncate">AI</div>
              <div className="text-[8px] text-slate-500 font-semibold leading-tight truncate">Engineering</div>
              <div className="text-[10px] font-black text-rose-600 leading-tight mt-0.5">₹49,999</div>
            </div>
          </div>
        </div>

        {/* Row 2: 4 Feature Pills */}
        <div className="grid grid-cols-4 gap-1.5">
          <div className="bg-white border border-slate-200 rounded-xl py-1.5 px-2 flex items-center justify-center gap-1 shadow-2xs">
            <FolderKanban className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="text-[9px] font-bold text-slate-700 truncate">28 Projects</span>
          </div>

          <div
            onClick={() => {
              playClick?.();
              onOpenArena();
            }}
            className="bg-white border border-slate-200 rounded-xl py-1.5 px-2 flex items-center justify-center gap-1 shadow-2xs cursor-pointer active:scale-95"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="text-[9px] font-bold text-slate-700 truncate">Coding Games</span>
          </div>

          <div
            onClick={() => {
              playClick?.();
              window.location.hash = '#mockinterview';
            }}
            className="bg-white border border-slate-200 rounded-xl py-1.5 px-2 flex items-center justify-center gap-1 shadow-2xs cursor-pointer active:scale-95"
          >
            <Users className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span className="text-[9px] font-bold text-slate-700 truncate">AI Mock Prep</span>
          </div>

          <div
            onClick={() => {
              playClick?.();
              if (onOpenPlacement) onOpenPlacement();
              else window.location.hash = '#placement';
            }}
            className="bg-white border border-slate-200 rounded-xl py-1.5 px-2 flex items-center justify-center gap-1 shadow-2xs cursor-pointer active:scale-95"
          >
            <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="text-[9px] font-bold text-slate-700 truncate">Job Support</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. "4 High-Paying Industry Courses" (Exact Match to User Reference Screenshot)
          ========================================================================= */}
      <div className="w-full space-y-3.5">
        {/* Section Header */}
        <div>
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
              <Layers className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                4 High-Paying Industry Courses
              </h2>
              <p className="text-xs font-semibold text-slate-500">
                Job-Ready Skills for a Brighter Tomorrow
              </p>
            </div>
          </div>

          {/* Filter Pills & View Switcher */}
          <div className="flex items-center justify-between gap-2 pt-2.5">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setFilter('all');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                All (4)
              </button>
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setFilter('in-progress');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  filter === 'in-progress'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                In Progress (1)
              </button>
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setFilter('explore');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  filter === 'explore'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                Explore (3)
              </button>
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setFilter('completed');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  filter === 'completed'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                Completed
              </button>
            </div>

            {/* View Mode Toggle (Grid / List) */}
            <div className="flex items-center bg-white border border-slate-200/90 rounded-full p-0.5 shrink-0 shadow-2xs">
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setViewMode('grid');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setViewMode('list');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Course Cards List (Vertical Stack of Futuristic Capsule Stage Cards) */}
        {visibleCourses.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-slate-200/80 shadow-xs">
            <GraduationCap className="w-8 h-8 text-blue-500 mx-auto mb-2 opacity-80" />
            <h4 className="text-sm font-black text-slate-800">No completed courses yet</h4>
            <p className="text-xs text-slate-500 mt-1">Start learning your active course to unlock completed certification!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {visibleCourses.map((c) => (
              <div
                key={c.id}
                className={`relative rounded-3xl transition-all duration-300 ${c.themeStyles.cardGlow}`}
                onClick={() => {
                  playClick?.();
                  c.action();
                }}
              >
                {/* 1. Upper Card: Media Box + Course Details */}
                <div className={`relative bg-white rounded-t-3xl border-t-2 border-x-2 ${c.themeStyles.cardBorder} p-3 sm:p-3.5 flex items-start gap-2.5 sm:gap-3`}>
                  {/* Left Column: Course Video Playing in Loop with Top-Left Badge */}
                  <div className="relative w-[115px] sm:w-[130px] h-[115px] sm:h-[125px] rounded-2xl overflow-hidden shrink-0 shadow-xs border border-slate-100 bg-slate-950">
                    {/* Top-left Badge over the video */}
                    <div className="absolute top-1.5 left-1.5 z-10 pointer-events-none">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] sm:text-[8.5px] font-black text-white shadow-xs uppercase tracking-wide bg-gradient-to-r ${c.badgeGradient}`}>
                        <span>{c.badgeIcon}</span>
                        <span>{c.statusTag}</span>
                      </span>
                    </div>

                    {/* Autoplaying Course Video */}
                    <video
                      src={c.video}
                      poster={c.holoImage}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Column: Course Info, CTC, Description & Skills */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
                    {/* Top Right: CTC Salary Range Pill */}
                    <div className="flex items-center justify-end">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                        <span className="text-[10px] font-black">₹</span>
                        <span>{c.salaryRange}</span>
                      </span>
                    </div>

                    {/* Course Title (Title in Blue, Subtitle in Purple) */}
                    <h3 className="text-[13px] sm:text-sm font-black tracking-tight leading-snug mt-1">
                      <span className="text-blue-600">{c.title}</span>{' '}
                      <span className="text-purple-600">{c.subtitle}</span>
                    </h3>

                    {/* Short Description */}
                    <p className="text-[10.5px] font-medium text-slate-600 line-clamp-2 leading-relaxed my-1">
                      {c.shortDesc}
                    </p>

                    {/* Skills Row */}
                    <div className="flex flex-wrap items-center gap-1 mt-auto pt-1">
                      {c.skillsList.map((skill) => (
                        <span
                          key={skill}
                          className="text-[8.5px] font-bold text-purple-700 bg-purple-50/90 border border-purple-200/80 rounded px-1.5 py-0.5 leading-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Lower Pedestal / Base Bar: Features + Slashed Price + Start Learning Button */}
                <div className={`relative rounded-b-3xl border-b-2 border-x-2 ${c.themeStyles.trayBorder} ${c.themeStyles.trayBg} ${c.themeStyles.trayGlow} px-2.5 sm:px-3 py-2 flex items-center justify-between gap-1.5`}>
                  {/* Neon Glow divider lip line between upper card & tray */}
                  <div className={`absolute -top-[1.5px] left-2 right-2 h-[2px] rounded-full ${c.themeStyles.neonLip} shadow-xs pointer-events-none`} />

                  {/* Left: 28 Real-World Projects & Coding Games */}
                  <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-bold text-slate-700 min-w-0">
                    <div className="inline-flex items-center gap-1 shrink-0">
                      <Briefcase className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">28 Real-World Projects</span>
                    </div>
                    <div className="inline-flex items-center gap-1 shrink-0">
                      <Gamepad2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span className="truncate">Coding Games</span>
                    </div>
                  </div>

                  {/* Right: Slashed Fee & Start Learning Button */}
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <span className="scd-pot-slashed-daam !text-[11px] sm:!text-xs !py-0.5 !px-2 shrink-0">
                      Rs {c.courseFee.replace('₹', '')}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        playClick?.();
                        c.action();
                      }}
                      className={`py-1.5 px-3 sm:px-3.5 rounded-full font-black text-[10.5px] sm:text-[11px] text-white shadow-md flex items-center gap-1 cursor-pointer active:scale-95 transition-all shrink-0 ${c.themeStyles.btnClass}`}
                    >
                      <span>Start Learning</span>
                      <ArrowRight className="w-3 h-3 stroke-[2.8]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================================
          5. PROMO STRIP BANNER: "Get All 4 Courses for Just ₹987"
          ========================================================================= */}
      <div className="relative p-3.5 rounded-3xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-200 shadow-xs flex items-center justify-between gap-2">
        {/* 3D Gift Box Left */}
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-md text-xl">
          🎁
        </div>

        {/* Text Center */}
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full bg-rose-500 text-white text-[8px] font-black uppercase tracking-wider">
            <span>LIMITED-TIME OFFER</span>
          </div>
          <div className="text-xs font-black text-slate-900 leading-tight mt-0.5">
            Get All 4 Courses for Just
          </div>
          <div className="text-[9px] text-slate-500 font-semibold truncate leading-tight">
            Access Data Analyst, Data Science, ML &amp; AI Engineering
          </div>
        </div>

        {/* Right Action: ₹987 Yellow Button */}
        <button
          type="button"
          onClick={() => {
            playClick?.();
            onOpenLockedModule('All 4 Courses Bundle');
          }}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-[10px] px-3 py-2 rounded-2xl shadow-sm active:scale-95 transition-all flex items-center gap-1 shrink-0 cursor-pointer"
        >
          <Lock className="w-3 h-3 text-slate-950" />
          <span>UNLOCK ALL ₹987</span>
          <ArrowRight className="w-3 h-3 text-slate-950" />
        </button>
      </div>

      {/* =========================================================================
          6. "What Will You Get?" (2x2 Grid with Exact Certificates & Letters)
          ========================================================================= */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Gift className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-black text-slate-900 tracking-tight">
              What Will You Get?
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              playClick?.();
              onOpenLockedModule('Course Offerings & Credentials');
            }}
            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2x2 Grid of 4 Items */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* 1. 3 Month Internship */}
          <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-200/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>3 Month Internship</span>
                </div>
              </div>
              <p className="text-[9px] text-slate-600 font-medium leading-relaxed">
                Work on real projects, gain industry experience and learn from mentors.
              </p>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-sky-200/60 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-black">
                3 Months
              </span>
              <img
                src="/images/dashboard/wyg_card_internship.png"
                alt="Internship"
                className="w-10 h-7 rounded object-cover shadow-2xs border border-white"
              />
            </div>
          </div>

          {/* 2. Internship Certificate */}
          <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Internship Certificate</span>
                </div>
              </div>
              <p className="text-[9px] text-slate-600 font-medium leading-relaxed">
                Receive an official internship certificate after successful completion.
              </p>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-emerald-200/60 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-black">
                Verified
              </span>
              <img
                src="/images/dashboard/wyg_card_cert_internship.png"
                alt="Certificate"
                className="w-10 h-7 rounded object-cover shadow-2xs border border-white"
              />
            </div>
          </div>

          {/* 3. Recommendation Letter */}
          <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-200/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <Bookmark className="w-4 h-4 text-purple-600" />
                  <span>Recommendation Letter</span>
                </div>
              </div>
              <p className="text-[9px] text-slate-600 font-medium leading-relaxed">
                Get a professional recommendation letter based on your performance.
              </p>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-purple-200/60 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-black">
                Official LOR
              </span>
              <img
                src="/images/dashboard/wyg_card_letter_rec.png"
                alt="LOR"
                className="w-10 h-7 rounded object-cover shadow-2xs border border-white"
              />
            </div>
          </div>

          {/* 4. Course Completion Certificate */}
          <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Course Certificate</span>
                </div>
              </div>
              <p className="text-[9px] text-slate-600 font-medium leading-relaxed">
                Complete the course and receive a verified certificate from Future IT.
              </p>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-amber-200/60 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-black">
                Accredited
              </span>
              <img
                src="/images/dashboard/wyg_card_cert_course.png"
                alt="Course Certificate"
                className="w-10 h-7 rounded object-cover shadow-2xs border border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          7. STATS ROW (4 Metric Chips from Screenshot)
          ========================================================================= */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
        {/* Metric 1 */}
        <div className="p-2 rounded-2xl bg-sky-50/80 border border-sky-200/80 text-center flex flex-col items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-black text-blue-700 leading-tight">10,000+</div>
          <div className="text-[8px] font-bold text-slate-500 leading-tight">Learners</div>
        </div>

        {/* Metric 2 */}
        <div className="p-2 rounded-2xl bg-purple-50/80 border border-purple-200/80 text-center flex flex-col items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-1">
            <Briefcase className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-black text-purple-700 leading-tight">500+</div>
          <div className="text-[8px] font-bold text-slate-500 leading-tight">Hiring Partners</div>
        </div>

        {/* Metric 3 */}
        <div className="p-2 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-center flex flex-col items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1">
            <Bell className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-black text-emerald-700 leading-tight">70%+</div>
          <div className="text-[8px] font-bold text-slate-500 leading-tight">Transitions</div>
        </div>

        {/* Metric 4 */}
        <div className="p-2 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-center flex flex-col items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-1">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-black text-amber-700 leading-tight">2X</div>
          <div className="text-[8px] font-bold text-slate-500 leading-tight">Salary Growth</div>
        </div>
      </div>

      {/* =========================================================================
          8. "Our Hiring Partners" (Exact Brand Logo Grid from Screenshot)
          ========================================================================= */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-black text-slate-900 tracking-tight">
              Our Hiring Partners
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              playClick?.();
              if (onOpenPlacement) onOpenPlacement();
              else window.location.hash = '#placement';
            }}
            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
          >
            <span>View All Partners</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Hiring Partner Logo Badges (9 Companies matching Screenshot) */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
          {/* Adobe */}
          <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1.5 shrink-0">
            <span className="text-rose-600 font-black text-xs tracking-tight">Adobe</span>
          </div>

          {/* EY */}
          <div className="px-3 py-1.5 rounded-xl bg-slate-950 text-amber-400 font-black text-xs shrink-0 shadow-2xs">
            EY
          </div>

          {/* IBM */}
          <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1 shrink-0">
            <span className="text-blue-600 font-black text-xs tracking-widest">IBM</span>
          </div>

          {/* Cognizant */}
          <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1 shrink-0">
            <span className="text-blue-800 font-bold text-xs">cognizant</span>
          </div>

          {/* Capgemini */}
          <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1 shrink-0">
            <span className="text-sky-600 font-bold text-xs">Capgemini</span>
          </div>

          {/* PwC */}
          <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1 shrink-0">
            <span className="text-orange-600 font-extrabold text-xs">pwc</span>
          </div>

          {/* KPMG */}
          <div className="px-3 py-1.5 rounded-xl bg-blue-900 text-white font-black text-xs px-2.5 shrink-0 shadow-2xs">
            KPMG
          </div>

          {/* Amazon */}
          <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1 shrink-0">
            <span className="text-slate-900 font-bold text-xs">amazon</span>
          </div>

          {/* Google */}
          <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1 shrink-0">
            <span className="font-bold text-xs">
              <span className="text-blue-500">G</span>
              <span className="text-rose-500">o</span>
              <span className="text-amber-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-emerald-500">l</span>
              <span className="text-rose-500">e</span>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};
