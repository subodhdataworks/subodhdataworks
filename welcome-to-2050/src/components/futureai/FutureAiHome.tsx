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
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap
} from 'lucide-react';
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
    <div className="h-screen w-full bg-[#FBFDFF] text-slate-800 font-sans flex flex-col justify-between overflow-x-hidden overflow-y-auto lg:overflow-hidden selection:bg-blue-500 selection:text-white">
      
      {/* ─── 1. TOP NAVBAR (Exact Post-Login Header with Pre-Login Guard) ─── */}
      <div className="shrink-0">
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

      {/* ─── 2. MAIN HERO SECTION (Flex-1: Fits on 1 Screen without Scrolling) ─── */}
      <section className="relative flex-1 flex items-center min-h-0 w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#e8f2fe]/70 via-[#f0f6ff]/35 to-[#FBFDFF]">
        
        {/* Soft Ambient Aurora Lights */}
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center w-full">
            
            {/* LEFT COLUMN: Punchy Headline & CTAs (lg:col-span-6) */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-center lg:text-left z-10 pl-0 lg:pl-3">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-[11px] font-bold tracking-tight mb-2.5 shadow-2xs w-fit mx-auto lg:mx-0">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>India&apos;s #1 Practical AI & Data Learning Academy</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-black tracking-tight leading-[1.08] text-[#0f172a]">
                <span className="block">World&apos;s First</span>
                <span className="block text-[#1a73e8]">Affordable Easy</span>
                <span className="block text-[#0f172a]">
                  AI Learning <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent drop-shadow-xs">Platform</span>
                </span>
              </h1>

              {/* Tagline */}
              <div className="mt-2 text-xs sm:text-sm lg:text-[15px] font-semibold text-slate-600 leading-snug max-w-lg mx-auto lg:mx-0">
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
              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
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
              <div className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-[11px] text-slate-500 font-medium">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span><strong className="text-slate-900 font-bold">4.9/5</strong> rating trusted by 100K+ learners across India</span>
              </div>

            </div>

            {/* RIGHT COLUMN: Grand Center Visual Artwork (Student with Laptop & 7 Orbiting Badges) (lg:col-span-6) */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative z-10">
              <div className="relative w-full max-w-[500px] lg:max-w-[540px] flex items-center justify-center">
                
                {/* Glowing Radiant Backing Aura */}
                <div className="absolute inset-0 bg-radial from-cyan-400/25 via-blue-500/15 to-transparent rounded-full blur-2xl scale-105 pointer-events-none" />
                
                {/* Central Futuristic Tech Student Illustration */}
                <img
                  src="/images/hero_tech_orbit_blended.png"
                  alt="Future IT Industries AI Learning Platform"
                  className="relative z-10 w-full h-auto max-h-[260px] sm:max-h-[300px] lg:max-h-[340px] xl:max-h-[370px] object-contain drop-shadow-[0_20px_40px_rgba(26,115,232,0.20)] select-none pointer-events-none transform transition-transform hover:scale-102 duration-300"
                />

                {/* Floating Highlight Chips */}
                <div className="hidden sm:flex absolute -bottom-1 -left-2 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md text-[11px] font-bold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>3 Job Offers Today (₹8-14 LPA)</span>
                </div>

                <div className="hidden sm:flex absolute -top-1 -right-1 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-blue-200/80 shadow-md text-[11px] font-bold text-blue-900">
                  <Zap className="w-3.5 h-3.5 text-[#1a73e8]" />
                  <span>Topic 1 Free Practice Live</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. METRICS / TRUST STAT BADGES (Row of 4 Glass Cards - Compact Fit) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-1 shrink-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          
          {/* Card 1: 100K+ Students */}
          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:shadow-xs transition">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
                100K+
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5">
                Students
              </div>
            </div>
          </div>

          {/* Card 2: 700+ Hiring Partners */}
          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:shadow-xs transition">
            <div className="w-9 h-9 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
                700+
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5">
                Hiring Partners
              </div>
            </div>
          </div>

          {/* Card 3: 99% Placement Support */}
          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:shadow-xs transition">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
              <Trophy className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
                99%
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5">
                Placement Support
              </div>
            </div>
          </div>

          {/* Card 4: Industry Aligned Curriculum */}
          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:shadow-xs transition">
            <div className="w-9 h-9 rounded-lg bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
                Industry
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5">
                Aligned Curriculum
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 4. ACTION FEATURE CARDS (Row of 6 Horizontal Cards - Click prompts login) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-1 shrink-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
          
          {/* Action 1: Industry-Focused Courses */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-xl p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-300 transition-all cursor-pointer flex items-center justify-between gap-1.5"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight truncate">
                  Industry Courses
                </h3>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5 truncate hidden sm:block">
                  Job-ready curriculum
                </p>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 2: Coding Practice */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-xl p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-indigo-300 transition-all cursor-pointer flex items-center justify-between gap-1.5"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight truncate">
                  Coding Practice
                </h3>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5 truncate hidden sm:block">
                  Build skills & solve
                </p>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 3: ATS Resume Checker */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-xl p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between gap-1.5"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FileCheck className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight truncate">
                  ATS Resume
                </h3>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5 truncate hidden sm:block">
                  AI resume score
                </p>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 4: Earn Cash */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-xl p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-pink-300 transition-all cursor-pointer flex items-center justify-between gap-1.5"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Coins className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight truncate">
                  Earn Cash
                </h3>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5 truncate hidden sm:block">
                  Refer & earn money
                </p>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 5: Internship */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-xl p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-purple-300 transition-all cursor-pointer flex items-center justify-between gap-1.5"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight truncate">
                  Internship
                </h3>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5 truncate hidden sm:block">
                  Real experience
                </p>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 6: Placement Support */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-xl p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-rose-300 transition-all cursor-pointer flex items-center justify-between gap-1.5"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight truncate">
                  Placement
                </h3>
                <p className="text-[10px] text-slate-500 leading-none mt-0.5 truncate hidden sm:block">
                  Top hiring partners
                </p>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

        </div>
      </section>

      {/* ─── 5. HIRING PARTNERS TICKER ROW (Footer - Compact Fit) ─── */}
      <footer className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 shrink-0 pb-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
          
          {/* Label */}
          <div className="text-[11px] sm:text-xs font-extrabold text-slate-700 whitespace-nowrap">
            Our Hiring Partners
          </div>

          {/* Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 text-xs font-bold text-slate-500">
            {/* TCS */}
            <span className="text-rose-600 font-black text-xs sm:text-sm tracking-tighter">tcs</span>

            {/* Infosys */}
            <span className="text-[#007cc3] font-black text-xs sm:text-sm tracking-tight">Infosys</span>

            {/* Accenture */}
            <span className="text-purple-800 font-extrabold text-xs sm:text-sm tracking-tight flex items-center gap-0.5">
              accenture <span className="text-[#a100ff]">&gt;</span>
            </span>

            {/* Wipro */}
            <span className="text-slate-800 font-black text-xs sm:text-sm tracking-normal flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-blue-500" />
              wipro
            </span>

            {/* Google */}
            <span className="font-extrabold text-xs sm:text-sm tracking-tight flex items-center">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>

            {/* Microsoft */}
            <span className="text-slate-700 font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1">
              <span className="grid grid-cols-2 gap-0.5 w-2.5 h-2.5">
                <span className="bg-[#f25022]" />
                <span className="bg-[#7fba00]" />
                <span className="bg-[#00a4ef]" />
                <span className="bg-[#ffb900]" />
              </span>
              Microsoft
            </span>

            {/* Amazon */}
            <span className="text-slate-900 font-black text-xs sm:text-sm tracking-tight">
              amazon
            </span>

            {/* Deloitte */}
            <span className="text-slate-900 font-black text-xs sm:text-sm tracking-tight">
              Deloitte<span className="text-emerald-500">.</span>
            </span>

            {/* Capgemini */}
            <span className="text-[#0070ad] font-bold text-xs sm:text-sm tracking-tight flex items-center gap-0.5">
              Capgemini <span className="text-[#0070ad] text-[10px]">♠</span>
            </span>

            {/* IBM */}
            <span className="text-[#1f70c1] font-black text-xs sm:text-sm tracking-widest font-mono">
              IBM
            </span>

            {/* 700+ More */}
            <span className="text-slate-400 font-semibold text-[11px] whitespace-nowrap">
              and 700+ more...
            </span>
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
