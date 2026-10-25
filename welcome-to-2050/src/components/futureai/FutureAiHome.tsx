import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  FileCheck,
  Coins,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Users,
  Building2,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  Brain,
  Database,
  BarChart3,
  FileSpreadsheet,
  Infinity as InfinityIcon,
  Cloud,
  Rocket,
  MessageSquare,
  Flame,
  Check,
  X,
  CreditCard,
  Frown,
  Video as VideoIcon,
  Clock,
  UserX,
  Gamepad2,
  Award,
  Sparkles,
  HelpCircle,
  Phone,
  ShieldCheck
} from 'lucide-react';

const YoutubeIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
);
import { soundEffects } from '../../services/soundEffects';
import { FutureAdvancedHeader } from './FutureAdvancedHeader';
import { FutureAuthModal } from './FutureAuthModal';

interface FutureAiHomeProps {
  profile?: any;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onStartLearning?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
  onLoginSuccess?: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
  onOpenDashboard?: () => void;
  onLogout?: () => void;
}

// Hiring Partners list for continuous right-to-left marquee
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

export const FutureAiHome: React.FC<FutureAiHomeProps> = ({
  isLoggedIn = false,
  userName = 'Learner',
  onLoginSuccess,
}) => {
  // Full Auth Modal
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Prompt Login helper for any unauthenticated action
  const promptLogin = () => {
    soundEffects.playClick();
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F8FC] text-slate-800 font-sans flex flex-col justify-between overflow-x-hidden selection:bg-blue-500 selection:text-white">
      
      {/* ─── 1. TOP NAVBAR (Exact Post-Login Header with Pre-Login Guard) ─── */}
      <div className="shrink-0 sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <FutureAdvancedHeader
          userName={userName}
          activeNavTab="home"
          isLoggedIn={false}
          onNavigateHome={() => {
            if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateLearning={promptLogin}
          onNavigatePractice={promptLogin}
          onOpenAtsResume={promptLogin}
          onNavigateEarn={promptLogin}
          onNavigateInternship={promptLogin}
          onNavigatePlacement={promptLogin}
          onOpenLogin={promptLogin}
          onOpenSignUp={promptLogin}
        />
      </div>

      {/* ─── 2. MAIN HERO SECTION (Color-Matched to Video Studio Background) ─── */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-hidden bg-gradient-to-r from-[#dce7f2] via-[#e5eef7] to-[#edf4fb]">
        
        {/* Soft Ambient Aurora Lights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-[#F4F8FC] pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center w-full">
            
            {/* LEFT COLUMN: Punchy Headline & CTAs (lg:col-span-6) */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-center lg:text-left z-10 pl-0 lg:pl-3">
              
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[42px] xl:text-[48px] font-black tracking-tight leading-[1.06] text-[#0f172a]">
                <span className="block">World&apos;s First</span>
                <span className="block text-[#1a73e8]">Affordable Easy</span>
                <span className="block text-[#0f172a]">
                  AI Learning <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent drop-shadow-xs">Platform</span>
                </span>
              </h1>

              {/* Tagline */}
              <div className="mt-2.5 text-xs sm:text-sm lg:text-[15px] font-semibold text-slate-600 leading-snug max-w-lg mx-auto lg:mx-0">
                <p>Real Practical Courses. Real Projects. Industry Guidance.</p>
                <p className="text-slate-900 font-bold mt-0.5">From Learning to Earning, We&apos;re With You.</p>
              </div>

              {/* Key Features Bullet points */}
              <div className="mt-3 space-y-1 text-[11px] sm:text-xs text-slate-600 font-semibold max-w-md mx-auto lg:mx-0 hidden sm:block">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Hands-On Coding Challenges & Industry Datasets</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>AI Mock Interview Simulator with Live Scoring</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>700+ Hiring Partners • Pay Fee Only After Placement</span>
                </div>
              </div>

              {/* CTAs Row */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={promptLogin}
                  className="px-6 py-2.5 sm:py-3 rounded-xl bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all cursor-pointer flex items-center gap-2 group"
                >
                  <span>Start Learning Free</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={promptLogin}
                  className="px-5 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 active:scale-95 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#1a73e8]" />
                  <span>Explore Coding Practice</span>
                </button>
              </div>

              {/* Rating */}
              <div className="mt-2.5 flex items-center justify-center lg:justify-start gap-2 text-[11px] text-slate-500 font-medium">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span><strong className="text-slate-900 font-bold">4.9/5</strong> rating trusted by 100K+ learners across India</span>
              </div>

            </div>

            {/* RIGHT COLUMN: Video Scaled Down & Balanced (Chota & Sleek Kiya) */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative z-10">
              <div className="relative w-full max-w-[500px] lg:max-w-[540px] flex items-center justify-center">
                
                {/* Glowing Radiant Backing Aura */}
                <div className="absolute inset-0 bg-radial from-cyan-400/20 via-blue-500/12 to-transparent rounded-full blur-2xl scale-105 pointer-events-none" />
                
                {/* Seamless Floating Animation Video (Balanced Size, No Cutting, Feathered Boundary) */}
                <div 
                  className="relative z-10 w-full flex items-center justify-center pointer-events-none select-none"
                  style={{
                    maskImage: 'radial-gradient(ellipse 85% 82% at 50% 50%, black 65%, transparent 98%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 82% at 50% 50%, black 65%, transparent 98%)',
                  }}
                >
                  <video
                    src="/videos/hero_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto max-h-[340px] sm:max-h-[390px] lg:max-h-[430px] xl:max-h-[460px] object-contain pointer-events-none select-none drop-shadow-[0_15px_35px_rgba(26,115,232,0.18)]"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. METRICS / TRUST STAT BADGES (Row of 4 Compact Badges) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 shrink-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          
          {/* Card 1: 100K+ Students */}
          <div className="bg-white rounded-lg py-2 px-3 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
            <div className="w-7 h-7 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-3.5 h-3.5 stroke-[2.2]" />
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
          <div className="bg-white rounded-lg py-2 px-3 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
            <div className="w-7 h-7 rounded-md bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
              <Building2 className="w-3.5 h-3.5 stroke-[2.2]" />
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
          <div className="bg-white rounded-lg py-2 px-3 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
            <div className="w-7 h-7 rounded-md bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
              <Trophy className="w-3.5 h-3.5 stroke-[2.2]" />
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
          <div className="bg-white rounded-lg py-2 px-3 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
            <div className="w-7 h-7 rounded-md bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
              <Star className="w-3.5 h-3.5 stroke-[2.2]" />
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

      {/* ─── 4. HIRING PARTNERS CONTINUOUS TICKER ROW (Right to Left Scrolling Marquee) ─── */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 shrink-0">
        <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
          
          {/* Label */}
          <div className="text-[11px] sm:text-xs font-black text-slate-800 whitespace-nowrap shrink-0 flex items-center gap-1.5 border-r border-slate-200 pr-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Our Hiring Partners</span>
          </div>

          {/* Continuous Right-to-Left Infinite Marquee */}
          <div className="relative overflow-hidden flex-1 select-none">
            {/* Fade gradients at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
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

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 1: Explore Our Career Programs
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Career Programs
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              Choose a program and start your journey towards a successful career.
            </p>
          </div>

          <button
            type="button"
            onClick={promptLogin}
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-blue-600 font-extrabold text-xs sm:text-sm border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all cursor-pointer flex items-center gap-1.5 group"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Career Programs Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Program Card 1: Data Analyst (Most Popular) */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[140px] sm:h-[155px] overflow-hidden bg-slate-900">
                <img
                  src="/images/home_sections/card_da_banner.jpg"
                  alt="Data Analyst Program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[10px] tracking-wide flex items-center gap-1 shadow-md">
                  <Flame className="w-3 h-3 fill-white" />
                  <span>Most Popular</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  Data Analyst
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                  Turn data into insights and build a career in analytics.
                </p>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100 flex items-center gap-1">
                  <FileSpreadsheet className="w-2.5 h-2.5" />
                  Excel
                </span>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100 flex items-center gap-1">
                  <Database className="w-2.5 h-2.5" />
                  SQL
                </span>
                <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 flex items-center gap-1">
                  <BarChart3 className="w-2.5 h-2.5" />
                  Power BI
                </span>
              </div>

              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-700 transition-all shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Program Card 2: Data Scientist */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-purple-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[140px] sm:h-[155px] overflow-hidden bg-slate-900">
                <img
                  src="/images/home_sections/card_ds_banner.jpg"
                  alt="Data Scientist Program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors">
                  Data Scientist
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                  Work with data, build AI models and solve real-world problems.
                </p>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100 flex items-center gap-1">
                  <Code2 className="w-2.5 h-2.5" />
                  Python
                </span>
                <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100 flex items-center gap-1">
                  <Brain className="w-2.5 h-2.5" />
                  ML
                </span>
                <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 text-[10px] font-bold border border-rose-100 flex items-center gap-1">
                  <BarChart3 className="w-2.5 h-2.5" />
                  Statistics
                </span>
              </div>

              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-700 transition-all shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Program Card 3: AI Engineering */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[140px] sm:h-[155px] overflow-hidden bg-slate-900">
                <img
                  src="/images/home_sections/card_ai_banner.jpg"
                  alt="AI Engineering Program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                  AI Engineering
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                  Build AI applications with real-world projects and industry tools.
                </p>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100 flex items-center gap-1">
                  <Code2 className="w-2.5 h-2.5" />
                  Python
                </span>
                <span className="px-2 py-0.5 rounded-md bg-cyan-50 text-cyan-700 text-[10px] font-bold border border-cyan-100 flex items-center gap-1">
                  <Cpu className="w-2.5 h-2.5" />
                  GenAI
                </span>
                <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 text-[10px] font-bold border border-sky-100 flex items-center gap-1">
                  <Layers className="w-2.5 h-2.5" />
                  LLMs
                </span>
              </div>

              <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-sky-700 transition-all shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Program Card 4: ML Engineering */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-pink-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[140px] sm:h-[155px] overflow-hidden bg-slate-900">
                <img
                  src="/images/home_sections/card_ml_banner.jpg"
                  alt="ML Engineering Program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-pink-600 transition-colors">
                  ML Engineering
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                  Design, deploy and scale ML systems for real-world impact.
                </p>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100 flex items-center gap-1">
                  <InfinityIcon className="w-2.5 h-2.5" />
                  MLOps
                </span>
                <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 text-[10px] font-bold border border-sky-100 flex items-center gap-1">
                  <Cloud className="w-2.5 h-2.5" />
                  Cloud
                </span>
                <span className="px-2 py-0.5 rounded-md bg-pink-50 text-pink-700 text-[10px] font-bold border border-pink-100 flex items-center gap-1">
                  <Rocket className="w-2.5 h-2.5" />
                  Deployment
                </span>
              </div>

              <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-pink-700 transition-all shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 2: Learn by Doing – Real Skills for Real Jobs
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Learn by Doing –{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Real Skills for Real Jobs
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
            Not just theory. Practice, build, and apply your skills with real-world projects.
          </p>
        </div>

        {/* 6 Feature Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          
          {/* Card 1: Industry-Focused Courses */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col items-start gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/home_sections/icon_laptop.jpg"
                alt="Industry-Focused Courses"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                Industry-Focused Courses
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Learn from basics to advanced with structured curriculum.
              </p>
            </div>
          </div>

          {/* Card 2: Coding Practice */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex flex-col items-start gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/home_sections/icon_code.jpg"
                alt="Coding Practice"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                Coding Practice
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Practice, build skills and solve real problems.
              </p>
            </div>
          </div>

          {/* Card 3: Real Projects */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col items-start gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/home_sections/icon_folder.jpg"
                alt="Real Projects"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-black text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">
                Real Projects
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Work on industry-relevant projects and build portfolio.
              </p>
            </div>
          </div>

          {/* Card 4: ATS Resume Checker */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer flex flex-col items-start gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/home_sections/icon_ats.jpg"
                alt="ATS Resume Checker"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-black text-slate-900 group-hover:text-sky-600 transition-colors leading-tight">
                ATS Resume Checker
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Get AI-powered resume score and improvement tips.
              </p>
            </div>
          </div>

          {/* Card 5: Interview Preparation */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer flex flex-col items-start gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/home_sections/icon_interview.jpg"
                alt="Interview Preparation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-black text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                Interview Preparation
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Practice real interview questions with AI.
              </p>
            </div>
          </div>

          {/* Card 6: Get Job */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col items-start gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/home_sections/icon_briefcase.jpg"
                alt="Get Job"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                Get Job
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Target roles: <strong className="text-blue-600">₹6 – 15 LPA</strong>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 3: Your Journey From Learning to Earning
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="bg-gradient-to-b from-white to-[#f0f6ff]/60 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm relative overflow-hidden">
          
          {/* Section Header with 'Learn Grow Get Hired' badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Your Journey From{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Learning to Earning
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                A simple path to a successful career with Future IT Industry.
              </p>
            </div>

            <div className="self-end md:self-auto text-right">
              <div className="inline-flex items-center gap-1.5 text-blue-700 font-black italic tracking-wide text-xs sm:text-sm">
                <span>Learn • Grow • Get Hired</span>
                <span className="text-lg">↗</span>
              </div>
            </div>
          </div>

          {/* 6 Step Roadmap Connected Line */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-3 relative z-10">
            
            {/* Step 1: Learn */}
            <div
              onClick={promptLogin}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-7 h-7 rounded-full bg-pink-500 text-white font-black text-xs flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 transition-transform">
                01
              </div>
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2">
                <BookOpen className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-pink-600 transition-colors">
                Learn
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Industry-focused courses with practical approach.
              </p>
            </div>

            {/* Step 2: Practice */}
            <div
              onClick={promptLogin}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-7 h-7 rounded-full bg-purple-600 text-white font-black text-xs flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 transition-transform">
                02
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                <Code2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-purple-600 transition-colors">
                Practice
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Solve problems and work on real projects.
              </p>
            </div>

            {/* Step 3: Mock Interview */}
            <div
              onClick={promptLogin}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-7 h-7 rounded-full bg-sky-500 text-white font-black text-xs flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 transition-transform">
                03
              </div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                <MessageSquare className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                Mock Interview
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Practice with real interview questions.
              </p>
            </div>

            {/* Step 4: Build Portfolio */}
            <div
              onClick={promptLogin}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 transition-transform">
                04
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <FileCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                Build Portfolio
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Showcase your skills with real projects.
              </p>
            </div>

            {/* Step 5: Internship */}
            <div
              onClick={promptLogin}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-7 h-7 rounded-full bg-orange-500 text-white font-black text-xs flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 transition-transform">
                05
              </div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-2">
                <GraduationCap className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                Internship
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Get real-world experience with industry projects.
              </p>
            </div>

            {/* Step 6: Get Job */}
            <div
              onClick={promptLogin}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 transition-transform">
                06
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                <Briefcase className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                Get Job
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 leading-snug">
                Get recruitment letter and start your career.
              </p>
            </div>

          </div>

          <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 max-w-[320px] overflow-hidden">
            <img
              src="/images/home_sections/mountain_bg.jpg"
              alt="Career Summit"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 4: Why Choose Future IT Industry? (Other Institutes VS Future IT)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Future IT Industry?
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1.5">
            Same goal — different experience. Choose the right path for your career.
          </p>
        </div>

        {/* Comparison Stage Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* ─── LEFT CARD: Other Institutes (Red Negative Tone) (lg:col-span-5) ─── */}
          <div className="lg:col-span-5 bg-gradient-to-br from-red-50/70 via-white to-red-50/40 rounded-3xl p-5 sm:p-6 border-2 border-red-200/80 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-red-100">
                <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-black shadow-xs shrink-0">
                  <X className="w-5 h-5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">
                    Other Institutes
                  </h3>
                  <p className="text-[11px] font-bold text-red-600 mt-0.5">
                    High Fees, Less Support, No Real Results
                  </p>
                </div>
              </div>

              {/* Graphic + 7 Pain Points List */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-5 items-center">
                
                {/* Stressed Student Illustration (sm:col-span-5) */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center relative">
                  <div className="relative w-full max-w-[180px] rounded-2xl overflow-hidden shadow-xs border border-slate-200">
                    <img
                      src="/images/why_choose/stressed_student.jpg"
                      alt="Other Institutes High Fees Stress"
                      className="w-full h-auto object-cover grayscale contrast-125"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[9px] font-bold">
                      High Fees
                    </div>
                    <div className="absolute top-8 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[9px] font-bold">
                      No Internship
                    </div>
                    <div className="absolute top-14 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[9px] font-bold">
                      No Job
                    </div>
                  </div>
                </div>

                {/* 7 Red Pain Points (sm:col-span-7) */}
                <div className="sm:col-span-7 space-y-2.5">
                  
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Coins className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">High Fee</div>
                      <div className="text-[10px] text-slate-500 font-medium">₹ 1 Lakh – ₹ 2 Lakh</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CreditCard className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">EMI Tention</div>
                      <div className="text-[10px] text-slate-500 font-medium">Long EMI, financial pressure</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Frown className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">Boring Lecture</div>
                      <div className="text-[10px] text-slate-500 font-medium">Theoretical and boring classes</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <VideoIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">Sleepy Video</div>
                      <div className="text-[10px] text-slate-500 font-medium">Long and uninteresting videos</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">Old Learning Method</div>
                      <div className="text-[10px] text-slate-500 font-medium">Outdated content and teaching style</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <UserX className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">No Internship</div>
                      <div className="text-[10px] text-slate-500 font-medium">No real industry exposure</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">No Job Support</div>
                      <div className="text-[10px] text-slate-500 font-medium">No placement or career guidance</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ─── CENTER: Glowing 3D "VS" Shield Badge (Hidden on mobile or centered) ─── */}
          <div className="hidden lg:flex absolute left-[41.6%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 text-white font-black text-base flex items-center justify-center shadow-xl shadow-blue-500/40 border-4 border-white transform hover:scale-110 transition-transform">
              VS
            </div>
          </div>

          {/* ─── RIGHT CARD: Future IT Industry (Bright Blue / Winner Theme) (lg:col-span-7) ─── */}
          <div className="lg:col-span-7 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/50 rounded-3xl p-5 sm:p-6 border-2 border-blue-400 shadow-md relative overflow-hidden flex flex-col justify-between">
            
            {/* Top Right Yellow Fee Ribbon */}
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs tracking-tight shadow-sm flex items-center gap-1.5 z-10">
              <Flame className="w-3.5 h-3.5 fill-slate-950" />
              <span>Affordable Fee Only ₹987</span>
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-blue-100">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shadow-xs shrink-0">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">
                    Future IT Industry
                  </h3>
                  <p className="text-[11px] font-bold text-blue-600 mt-0.5">
                    Practical Learning. Real Support. 100% Job Placement.
                  </p>
                </div>
              </div>

              {/* Graphic + 10 Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-5 items-center">
                
                {/* 3D Robot Mascot + Student Graphic (sm:col-span-5) */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-[210px] rounded-2xl overflow-hidden shadow-sm border border-blue-200">
                    <img
                      src="/images/why_choose/future_mascot_student.jpg"
                      alt="Future IT Industry Robot Mascot and Student"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-2 left-2 right-2 px-2 py-1 rounded-lg bg-blue-600/90 backdrop-blur-xs text-white text-[9.5px] font-black text-center shadow-xs">
                      👑 World&apos;s First Coding Game Platform 🎮
                    </div>
                  </div>
                </div>

                {/* 10 Benefit Cards in 2 Columns (sm:col-span-7) */}
                <div className="sm:col-span-7 grid grid-cols-2 gap-2">
                  
                  {/* Item 1 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Gamepad2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">Coding Game</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">Play & practice</div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <FileCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">Real Projects</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">Industry portfolio</div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">Modern Method</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">Updated tools</div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <FileCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">ATS Resume</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">AI score checker</div>
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Coins className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">Only ₹987</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">No EMI pressure</div>
                    </div>
                  </div>

                  {/* Item 6 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">Internship</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">Real experience</div>
                    </div>
                  </div>

                  {/* Item 7 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <InfinityIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">Mock Interview</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">Unlimited practice</div>
                    </div>
                  </div>

                  {/* Item 8 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">LOR Letter</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">Recommendation</div>
                    </div>
                  </div>

                  {/* Item 9 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">Coding Practice</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">Build skills & solve</div>
                    </div>
                  </div>

                  {/* Item 10 */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0">
                      <Trophy className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-slate-900 truncate">100% Placement</div>
                      <div className="text-[8.5px] text-slate-500 leading-none truncate">Our goal success</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 5: Success Stories (3 Testimonial Cards)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Success{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              Real people. Real skills. Real careers.
            </p>
          </div>

          <button
            type="button"
            onClick={promptLogin}
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-blue-600 font-extrabold text-xs sm:text-sm border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all cursor-pointer flex items-center gap-1.5 group"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          
          {/* Testimonial 1 */}
          <div
            onClick={promptLogin}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer flex gap-3.5 items-start group"
          >
            <div className="w-13 h-13 rounded-xl overflow-hidden shrink-0 border border-slate-200">
              <img
                src="/images/why_choose/avatar_1.jpg"
                alt="Student placed as Data Analyst"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-600 italic leading-relaxed">
                &ldquo;The practical projects and mentorship helped me build real skills. The platform is easy to use and very helpful for my career.&rdquo;
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
                <span className="text-blue-700">Placed as Data Analyst</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-600 font-black">7.5 LPA</span>
                <div className="flex items-center text-amber-400 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            onClick={promptLogin}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer flex gap-3.5 items-start group"
          >
            <div className="w-13 h-13 rounded-xl overflow-hidden shrink-0 border border-slate-200">
              <img
                src="/images/why_choose/avatar_2.jpg"
                alt="Student placed as BI Analyst"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-600 italic leading-relaxed">
                &ldquo;I loved the hands-on projects and interview practice. It helped me gain confidence and improve my skills.&rdquo;
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
                <span className="text-blue-700">Placed as BI Analyst</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-600 font-black">8 LPA</span>
                <div className="flex items-center text-amber-400 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            onClick={promptLogin}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer flex gap-3.5 items-start group"
          >
            <div className="w-13 h-13 rounded-xl overflow-hidden shrink-0 border border-slate-200">
              <img
                src="/images/why_choose/avatar_3.jpg"
                alt="Student placed as Data Analyst"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-600 italic leading-relaxed">
                &ldquo;The industry guidance and resume support were very useful. I got to learn real-world skills at my own pace.&rdquo;
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
                <span className="text-blue-700">Placed as Data Analyst</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-600 font-black">6.5 LPA</span>
                <div className="flex items-center text-amber-400 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 6: Our Students Work At (Hiring Partners Strip)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
          <div className="text-xs font-black text-slate-800 mb-3 tracking-tight">
            Our Students Work At
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-600">
            <span className="text-rose-600 font-black text-xs sm:text-sm tracking-tighter">tcs</span>
            <span className="text-[#007cc3] font-black text-xs sm:text-sm tracking-tight">Infosys</span>
            <span className="text-purple-800 font-extrabold text-xs sm:text-sm tracking-tight flex items-center gap-0.5">
              accenture <span className="text-[#a100ff]">&gt;</span>
            </span>
            <span className="text-slate-800 font-black text-xs sm:text-sm tracking-normal flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-blue-500" />
              wipro
            </span>
            <span className="font-extrabold text-xs sm:text-sm tracking-tight flex items-center">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="text-slate-700 font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1">
              <span className="grid grid-cols-2 gap-0.5 w-2.5 h-2.5">
                <span className="bg-[#f25022]" />
                <span className="bg-[#7fba00]" />
                <span className="bg-[#00a4ef]" />
                <span className="bg-[#ffb900]" />
              </span>
              Microsoft
            </span>
            <span className="text-slate-900 font-black text-xs sm:text-sm tracking-tight">amazon</span>
            <span className="text-slate-900 font-black text-xs sm:text-sm tracking-tight">
              Deloitte<span className="text-emerald-500">.</span>
            </span>
            <span className="text-[#0070ad] font-bold text-xs sm:text-sm tracking-tight flex items-center gap-0.5">
              Capgemini <span className="text-[#0070ad] text-[10px]">♠</span>
            </span>
            <span className="text-[#1f70c1] font-black text-xs sm:text-sm tracking-widest font-mono">IBM</span>
            <span className="text-slate-400 font-semibold text-[11px] whitespace-nowrap">and 700+ more...</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 7: Ready to Start Your Learning Journey? (Bottom CTA Banner)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-blue-500/30">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Robot Mascot Graphic */}
            <div className="shrink-0 flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md">
                <img
                  src="/images/why_choose/cta_robot.png"
                  alt="Future IT Robot Mascot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Headline & Badges */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
                Ready to Start{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">
                  Your Learning Journey?
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
                Join thousands of learners and build your future with Future IT Industry.
              </p>

              {/* 4 Feature Badges */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] font-bold">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Lifetime Access</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Certificate</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Real Projects</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>Industry Guidance</span>
                </span>
              </div>
            </div>

            {/* CTA Button + Learn Grow Flag */}
            <div className="shrink-0 flex flex-col items-center lg:items-end gap-2">
              <button
                type="button"
                onClick={promptLogin}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black text-sm shadow-xl shadow-blue-500/30 transition-all cursor-pointer flex items-center gap-2 group active:scale-95"
              >
                <span>Sign Up Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-[11px] text-cyan-300 font-bold italic tracking-wide">
                Learn • Grow • Get Hired ↗
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 8: Comprehensive Modern Footer
      ═══════════════════════════════════════════════════════════════════════════ */}
      <footer className="w-full bg-[#070b15] text-slate-400 pt-12 pb-8 border-t border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800/80">
            
            {/* Column 1: Brand & Logo */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-white font-black text-lg tracking-tight">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-mono text-sm">
                  F
                </span>
                <span>FUTURE IT</span>
                <span className="text-cyan-400 font-semibold text-xs tracking-widest">— INDUSTRIES —</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed max-w-sm">
                India&apos;s #1 AI & Data Science Career Accelerator. Hands-on projects, real interview prep, and 100% placement support.
              </p>
              <div className="text-[11px] text-slate-500 font-bold mt-2">
                Learn Today, Earn Tomorrow.
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xs font-black text-white tracking-wider uppercase mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Courses</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Coding Practice</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">ATS Resume Checker</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Internship</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Success Stories</button></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-xs font-black text-white tracking-wider uppercase mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">About Us</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Contact Us</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Terms & Conditions</button></li>
              </ul>
            </div>

            {/* Column 4: Support & Follow Us */}
            <div>
              <h4 className="text-xs font-black text-white tracking-wider uppercase mb-3">
                Support
              </h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Help Center</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">FAQs</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Refund Policy</button></li>
                <li><button onClick={promptLogin} className="hover:text-cyan-400 transition-colors">Career</button></li>
              </ul>

              {/* Social Media */}
              <div className="mt-5">
                <h5 className="text-[11px] font-bold text-white mb-2">Follow Us</h5>
                <div className="flex items-center gap-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <YoutubeIcon />
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <LinkedinIcon />
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <InstagramIcon />
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-7 h-7 rounded-lg bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <TwitterIcon />
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <FacebookIcon />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
            <p>© 2026 Future IT Industry. All rights reserved.</p>
            <p className="text-[11px]">Empowering learners across India to learn, practice, and get placed.</p>
          </div>

        </div>
      </footer>

      {/* Clean Auth Modal for Sign Up / Full Login Options */}
      <FutureAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(name, email, avatar, role) => {
          setAuthModalOpen(false);
          onLoginSuccess?.(name, email, avatar, role);
        }}
      />

    </div>
  );
};
