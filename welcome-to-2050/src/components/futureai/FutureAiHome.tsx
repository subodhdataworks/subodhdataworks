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
  Zap,
  TrendingUp,
  ShieldCheck
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
    <div className="min-h-screen bg-[#FBFDFF] text-slate-800 font-sans flex flex-col selection:bg-blue-500 selection:text-white">
      
      {/* ─── 1. EXACT POST-LOGIN HEADER (Reused with isLoggedIn={false} prompting login on click) ─── */}
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

      {/* ─── 2. MAIN HERO SECTION (Grand, Spacious, High-Converting Hero Banner) ─── */}
      <section className="relative w-full pt-6 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 overflow-hidden bg-gradient-to-b from-[#e8f2fe]/80 via-[#f0f6ff]/40 to-[#FBFDFF]">
        
        {/* Soft Ambient Aurora Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Grand Headline, Value Props & CTAs (lg:col-span-6 xl:col-span-6) */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-center lg:text-left z-10 pl-0 lg:pl-3">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-tight mb-4 shadow-2xs w-fit mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>India&apos;s #1 Practical AI & Data Learning Hub</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-black tracking-tight leading-[1.08] text-[#0f172a]">
                <span className="block">World&apos;s First</span>
                <span className="block text-[#1a73e8]">Affordable Easy</span>
                <span className="block text-[#0f172a]">
                  AI Learning <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent drop-shadow-xs">Platform</span>
                </span>
              </h1>

              {/* Subheadline & Tagline */}
              <div className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg font-medium text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p className="font-semibold text-slate-700">Real Practical Courses. Real Projects. Industry Guidance.</p>
                <p className="text-slate-900 font-bold mt-1 text-base sm:text-lg">From Learning to Earning, We&apos;re With You.</p>
              </div>

              {/* 3 Key Benefits Points */}
              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-600 font-semibold max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Hands-On Coding Challenges & Industry Datasets</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AI Mock Interview Simulator with Live Scoring</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>700+ Hiring Partners • Pay Fee Only After Placement</span>
                </div>
              </div>

              {/* High-Converting CTA Buttons Row */}
              <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <button
                  type="button"
                  onClick={promptLogin}
                  className="px-7 py-3.5 rounded-2xl bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all cursor-pointer flex items-center gap-2 group"
                >
                  <span>Start Learning Free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={promptLogin}
                  className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 active:scale-95 text-slate-800 font-bold text-sm sm:text-base border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4 text-[#1a73e8]" />
                  <span>Explore Coding Practice</span>
                </button>
              </div>

              {/* Social Proof Star Rating */}
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-500 font-medium">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span><strong className="text-slate-900 font-bold">4.9/5</strong> rating trusted by 100K+ learners across India</span>
              </div>

            </div>

            {/* RIGHT COLUMN: Grand Hero Visual Artwork (Student with Laptop & 7 Orbiting Badges) (lg:col-span-6 xl:col-span-6) */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative z-10">
              <div className="relative w-full max-w-[580px] lg:max-w-[620px] flex items-center justify-center">
                
                {/* Glowing Radiant Backing Aura */}
                <div className="absolute inset-0 bg-radial from-cyan-400/30 via-blue-500/20 to-transparent rounded-full blur-3xl scale-110 pointer-events-none" />
                
                {/* Central Futuristic Tech Student Illustration */}
                <img
                  src="/images/hero_tech_orbit_blended.png"
                  alt="Future IT Industries AI Learning Platform"
                  className="relative z-10 w-full h-auto max-h-[440px] sm:max-h-[500px] object-contain drop-shadow-[0_25px_50px_rgba(26,115,232,0.22)] select-none pointer-events-none transform transition-transform hover:scale-102 duration-300"
                />

                {/* Floating Highlight Badges */}
                <div className="hidden sm:flex absolute -bottom-2 -left-4 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg text-xs font-bold text-slate-800 animate-bounce duration-1000">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span>3 Job Offers Secured Today (₹8-14 LPA)</span>
                </div>

                <div className="hidden sm:flex absolute -top-2 -right-2 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-200/80 shadow-md text-xs font-bold text-blue-900">
                  <Zap className="w-4 h-4 text-[#1a73e8]" />
                  <span>Topic 1 Free Practice Live</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. METRICS / TRUST STAT BADGES (Row of 4 Glass Cards) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Card 1: 100K+ Students */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3.5 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                100K+
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Students
              </div>
            </div>
          </div>

          {/* Card 2: 700+ Hiring Partners */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3.5 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                700+
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Hiring Partners
              </div>
            </div>
          </div>

          {/* Card 3: 99% Placement Support */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3.5 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                99%
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Placement Support
              </div>
            </div>
          </div>

          {/* Card 4: Industry Aligned Curriculum */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3.5 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                Industry
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Aligned Curriculum
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 4. ACTION FEATURE CARDS (Row of 6 Horizontal Cards - Click prompts login) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
          
          {/* Action 1: Industry-Focused Courses */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Industry-Focused Courses
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Job-ready curriculum with real projects
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 2: Coding Practice */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Coding Practice
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Practice, build skills and solve problems
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 3: ATS Resume Checker */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  ATS Resume Checker
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Get AI-powered resume score
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 4: Earn Cash */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-pink-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Coins className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Earn Cash
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Refer & earn real money
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 5: Internship */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Internship
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Gain real-world experience
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 6: Placement Support */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Placement Support
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Get hired with top companies
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

        </div>
      </section>

      {/* ─── 5. HIRING PARTNERS TICKER ROW (Exact 1:1 Reference Design) ─── */}
      <footer className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Label */}
          <div className="text-xs sm:text-sm font-extrabold text-slate-700 whitespace-nowrap">
            Our Hiring Partners
          </div>

          {/* Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs font-bold text-slate-500">
            {/* TCS */}
            <span className="text-rose-600 font-black text-sm tracking-tighter">tcs</span>

            {/* Infosys */}
            <span className="text-[#007cc3] font-black text-sm tracking-tight">Infosys</span>

            {/* Accenture */}
            <span className="text-purple-800 font-extrabold text-sm tracking-tight flex items-center gap-0.5">
              accenture <span className="text-[#a100ff]">&gt;</span>
            </span>

            {/* Wipro */}
            <span className="text-slate-800 font-black text-sm tracking-normal flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-blue-500" />
              wipro
            </span>

            {/* Google */}
            <span className="font-extrabold text-sm tracking-tight flex items-center">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>

            {/* Microsoft */}
            <span className="text-slate-700 font-bold text-sm tracking-tight flex items-center gap-1.5">
              <span className="grid grid-cols-2 gap-0.5 w-3 h-3">
                <span className="bg-[#f25022]" />
                <span className="bg-[#7fba00]" />
                <span className="bg-[#00a4ef]" />
                <span className="bg-[#ffb900]" />
              </span>
              Microsoft
            </span>

            {/* Amazon */}
            <span className="text-slate-900 font-black text-sm tracking-tight">
              amazon
            </span>

            {/* Deloitte */}
            <span className="text-slate-900 font-black text-sm tracking-tight">
              Deloitte<span className="text-emerald-500">.</span>
            </span>

            {/* Capgemini */}
            <span className="text-[#0070ad] font-bold text-sm tracking-tight flex items-center gap-1">
              Capgemini <span className="text-[#0070ad] text-xs">♠</span>
            </span>

            {/* IBM */}
            <span className="text-[#1f70c1] font-black text-sm tracking-widest font-mono">
              IBM
            </span>

            {/* 700+ More */}
            <span className="text-slate-400 font-semibold text-xs whitespace-nowrap">
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
