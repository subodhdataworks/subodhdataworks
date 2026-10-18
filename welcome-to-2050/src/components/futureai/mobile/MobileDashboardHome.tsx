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
  const [coursesViewMode, setCoursesViewMode] = useState<'grid' | 'swipe'>('grid');
  const [coursesFilter, setCoursesFilter] = useState<'all' | 'in-progress' | 'explore'>('all');

  // 4 Core Courses (1:1 Exact Match with Website 3D Glowing Neon Pots, Scaled Down for Mobile)
  const flagshipCourses = [
    {
      id: 'data-analyst-genai',
      badgeNum: 1,
      statusTag: 'ENROLLED',
      title: 'Data Analyst',
      subtitle: 'with GenAI',
      shortDesc: 'Master Python, SQL, Power BI, Excel & GenAI Analytics.',
      salaryRange: '₹6L - ₹12L',
      courseFee: 'Rs 18,999',
      image: '/images/pot1_sharp_poster.jpg',
      holoImage: '/images/pot1_sharp_poster.jpg',
      video: '/videos/data_analyst_genai_v2.mp4',
      potTheme: 'blue' as const,
      skillsList: ['Python', 'SQL', 'Power BI', 'Excel', 'GenAI'],
      action: onStartPython,
      isInProgress: true,
    },
    {
      id: 'data-science-agentic-ai',
      badgeNum: 2,
      statusTag: 'HIGH DEMAND',
      title: 'Data Science',
      subtitle: '& Agentic AI',
      shortDesc: 'Explore Machine Learning, Deep Learning, RAG & AI Agents.',
      salaryRange: '₹10L - ₹22L',
      courseFee: 'Rs 29,999',
      image: '/images/pot2_sharp_poster.jpg',
      holoImage: '/images/pot2_sharp_poster.jpg',
      video: '/videos/data_science_agentic_ai_course.mp4',
      potTheme: 'purple' as const,
      skillsList: ['ML', 'Deep Learning', 'RAG', 'Agentic AI'],
      action: () => (onOpenGenAi ? onOpenGenAi() : onOpenLockedModule('Data Science & Agentic AI')),
      isInProgress: false,
    },
    {
      id: 'ml-engineering',
      badgeNum: 3,
      statusTag: 'ADVANCED TECH',
      title: 'ML',
      subtitle: 'Engineering',
      shortDesc: 'Build & deploy scalable ML models, PyTorch & MLOps pipelines.',
      salaryRange: '₹12L - ₹28L',
      courseFee: 'Rs 39,999',
      image: '/images/pot3_sharp_poster.jpg',
      holoImage: '/images/pot3_sharp_poster.jpg',
      video: '/videos/ml_engineering_course.mp4',
      potTheme: 'gold' as const,
      skillsList: ['PyTorch', 'MLOps', 'Docker', 'Cloud AI'],
      action: () => (onOpenPowerBi ? onOpenPowerBi() : onOpenLockedModule('ML Engineering')),
      isInProgress: false,
    },
    {
      id: 'ai-engineering',
      badgeNum: 4,
      statusTag: 'FLAGSHIP 2050',
      title: 'AI',
      subtitle: 'Engineering',
      shortDesc: 'Design intelligent systems, LLMs, Vector DBs & Multi-Agents.',
      salaryRange: '₹15L - ₹35L',
      courseFee: 'Rs 49,999',
      image: '/images/pot4_sharp_poster.jpg',
      holoImage: '/images/pot4_sharp_poster.jpg',
      video: '/videos/ai_engineering_course.mp4',
      potTheme: 'emerald' as const,
      skillsList: ['LLMs', 'Vector DB', 'Multi-Agent', 'OpenAI'],
      action: () => onOpenLockedModule('Full-Stack AI Engineering'),
      isInProgress: false,
    },
  ];

  const visibleCourses = flagshipCourses.filter((c) => {
    if (coursesFilter === 'in-progress') return c.isInProgress;
    if (coursesFilter === 'explore') return !c.isInProgress;
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
          4. "4 High-Paying Industry Courses" (1:1 with Website 3D Glowing Neon Pots, Scaled Down)
          ========================================================================= */}
      <div className="w-full">
        {/* Header & Controls Row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
              4 High-Paying Industry Courses
            </h2>
          </div>

          {/* Grid / Swipe View Mode Capsule */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200">
            <button
              type="button"
              onClick={() => {
                playClick?.();
                setCoursesViewMode('grid');
              }}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                coursesViewMode === 'grid'
                  ? 'bg-white text-blue-600 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Grid</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playClick?.();
                setCoursesViewMode('swipe');
              }}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                coursesViewMode === 'swipe'
                  ? 'bg-white text-blue-600 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <List className="w-3 h-3" />
              <span>Swipe</span>
            </button>
          </div>
        </div>

        {/* Filter Pills Row (All, In Progress, Explore) */}
        <div className="flex items-center gap-1.5 mb-2.5 overflow-x-auto scrollbar-none pb-0.5">
          <button
            type="button"
            onClick={() => {
              playClick?.();
              setCoursesFilter('all');
            }}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 transition-all ${
              coursesFilter === 'all'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            All (4)
          </button>
          <button
            type="button"
            onClick={() => {
              playClick?.();
              setCoursesFilter('in-progress');
            }}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 transition-all ${
              coursesFilter === 'in-progress'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            In Progress (1)
          </button>
          <button
            type="button"
            onClick={() => {
              playClick?.();
              setCoursesFilter('explore');
            }}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 transition-all ${
              coursesFilter === 'explore'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            Explore (3)
          </button>
        </div>

        {/* Course Cards Container: Grid (2-column) or Swipe (horizontal) */}
        <div
          className={
            coursesViewMode === 'grid'
              ? 'grid grid-cols-2 gap-2.5 sm:gap-3 items-end'
              : 'flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory'
          }
        >
          {visibleCourses.map((c) => (
            <article
              key={c.id}
              className={`scd-pot-card is-mobile-compact scd-pot-${c.potTheme} ${
                coursesViewMode === 'swipe' ? 'min-w-[195px] max-w-[215px] shrink-0 snap-start' : 'w-full'
              }`}
              onClick={() => {
                playClick?.();
                c.action();
              }}
            >
              {/* TOP HOLOGRAM / VIDEO DOME FLOWING UP OUT OF THE POT */}
              <div className="scd-pot-flow-stage">
                <div className="scd-pot-rising-energy" />
                <div className="scd-pot-particles">
                  <span className="scd-pt p1" />
                  <span className="scd-pt p2" />
                  <span className="scd-pt p3" />
                  <span className="scd-pt p4" />
                </div>

                <div className="scd-pot-holo-dome">
                  {c.video ? (
                    <video
                      src={c.video}
                      poster={c.holoImage}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="scd-pot-holo-video is-always-on"
                    />
                  ) : (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="scd-pot-holo-glass-frame" />
                </div>
              </div>

              {/* BOTTOM 3D CYLINDRICAL NEON POT */}
              <div className="scd-pot-cylinder-wrap">
                <div className="scd-pot-top-rim">
                  <div className="scd-pot-mouth-vortex" />
                  <div className="scd-pot-rim-neon-ring" />
                </div>

                <div className="scd-pot-cylinder-body">
                  <span className="scd-pot-side-rib left" />
                  <span className="scd-pot-side-rib right" />

                  {/* Status & CTC Tag Pill */}
                  <div className="scd-pot-top-tags">
                    <span className="scd-pot-status-pill">{c.statusTag}</span>
                    <span className="scd-pot-ctc-pill">{c.salaryRange}</span>
                  </div>

                  {/* Two-Tone Title */}
                  <h3 className="scd-pot-title">
                    <span className="scd-title-brighter">{c.title}</span>{' '}
                    <span className="scd-title-future">{c.subtitle}</span>
                  </h3>

                  {/* Centered Short Description */}
                  <p className="scd-pot-desc">{c.shortDesc}</p>

                  {/* Skills Mini Row */}
                  <div className="scd-pot-skills-row">
                    {c.skillsList.slice(0, 3).map((s) => (
                      <span key={s} className="scd-pot-skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Slashed Daam + Start Learning Button */}
                  <div className="scd-pot-bottom-actions-row">
                    <div className="scd-pot-slashed-price-wrap">
                      <span className="scd-pot-slashed-daam">{c.courseFee}</span>
                    </div>

                    <button
                      type="button"
                      className="scd-pot-circle-arrow-btn cursor-pointer active:scale-95 transition-all"
                      aria-label="Start Learning"
                      onClick={(e) => {
                        e.stopPropagation();
                        playClick?.();
                        c.action();
                      }}
                    >
                      <span className="scd-pot-unlock-text">Start</span>
                      <span className="scd-pot-arrow-icon-circle">
                        <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* 3D Base Plinth */}
                <div className="scd-pot-bottom-base">
                  <div className="scd-pot-bottom-neon-ring" />
                  <div className="scd-pot-metallic-plinth" />
                  <div className="scd-pot-floor-glow" />
                </div>
              </div>
            </article>
          ))}
        </div>
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
