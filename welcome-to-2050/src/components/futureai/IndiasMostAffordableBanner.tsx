import React from 'react';
import {
  GraduationCap,
  FileText,
  Code2,
  Users,
  Briefcase,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Flame,
} from 'lucide-react';

interface IndiasMostAffordableBannerProps {
  onAction?: () => void;
}

export const IndiasMostAffordableBanner: React.FC<IndiasMostAffordableBannerProps> = ({
  onAction,
}) => {
  return (
    <div
      onClick={onAction}
      className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 cursor-pointer group my-6 bg-[#000d26]"
    >
      {/* ─── 1. LUXURY LIGHTING & CYBERNETIC BACKDROP ─── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000d26] via-[#001740] to-[#00225c] pointer-events-none" />
      
      {/* Radial Atmospheric Spotlight Flares */}
      <div className="absolute -left-20 -top-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] bg-gradient-to-tl from-cyan-500/25 via-blue-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Precision Tech Dot-Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)] [background-size:22px_22px] opacity-15 pointer-events-none" />

      {/* Top Subtle Neon Edge Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

      {/* ─── 2. MAIN BANNER CONTENT CONTAINER ─── */}
      <div className="relative z-10 px-4 py-5 sm:px-7 sm:py-6 lg:px-9 lg:py-7 flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-8">
        
        {/* LEFT COLUMN: 3D Cute AI Robot Mascot with Holographic Halo */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <div className="relative w-22 h-22 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-3xl p-1.5 bg-gradient-to-br from-cyan-400/50 via-blue-500/25 to-slate-900 border border-cyan-400/50 shadow-[0_0_35px_rgba(6,182,212,0.45)] shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(6,182,212,0.6)] transition-all duration-300">
            <img
              src="/images/ai_robot_graduate_mascot.jpg"
              alt="India's Most Affordable AI Learning Mascot"
              className="w-full h-full object-cover rounded-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/auth_robot_mascot.jpg';
              }}
            />
            {/* Holographic Glowing Pedestal Disk */}
            <div className="absolute -bottom-2.5 inset-x-2 h-4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-xs rounded-full pointer-events-none" />
            
            {/* Live Online Pulse Tag */}
            <div className="absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-[9px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1 border border-emerald-300/40">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Mobile Headline (visible beside mascot on small phones) */}
          <div className="block md:hidden min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-400/15 border border-cyan-400/35 text-[10px] font-black text-cyan-300 uppercase tracking-wider mb-1.5">
              <Flame className="w-3 h-3 text-cyan-400 fill-cyan-400" />
              <span>INDIA'S #1 AI LEARNING PLATFORM</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              India’s Most Affordable{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-400 bg-clip-text text-transparent">
                AI Learning
              </span>{' '}
              Platform
            </h2>
          </div>
        </div>

        {/* CENTER COLUMN: Executive Headline, Subtitle & 4 Luxury Glass Badges */}
        <div className="flex-1 space-y-3.5 text-center md:text-left min-w-0">
          
          {/* Eyebrow Pill + Desktop Headline */}
          <div className="hidden md:block space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/40 text-[11px] font-extrabold text-cyan-300 uppercase tracking-widest shadow-2xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>INDIA’S #1 MOST TRUSTED AI LEARNING ECOSYSTEM</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white tracking-tight leading-snug">
              India’s Most Affordable{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
                AI Learning
              </span>{' '}
              Platform
            </h2>

            <p className="text-xs sm:text-[13.5px] text-slate-300 font-medium leading-relaxed max-w-2xl">
              Learn in-demand skills, build real projects and get career-ready — at an affordable price with real industrial mentorship.
            </p>
          </div>

          {/* Mobile Subtitle */}
          <p className="block md:hidden text-xs text-slate-300 font-medium leading-relaxed">
            Learn in-demand skills, build real projects and get career-ready — at an affordable price with real industrial mentorship.
          </p>

          {/* 4 Ultra-Crisp Interactive Luxury Feature Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5 pt-1">
            
            {/* 1. Beginner Friendly */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-emerald-400/40 hover:border-emerald-400 text-xs font-bold text-slate-100 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5">
              <span className="w-5 h-5 rounded-full bg-emerald-500/25 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30">
                <GraduationCap className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>Beginner Friendly</span>
            </div>

            {/* 2. Hands-on Projects */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-fuchsia-400/40 hover:border-fuchsia-400 text-xs font-bold text-slate-100 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5">
              <span className="w-5 h-5 rounded-full bg-fuchsia-500/25 text-fuchsia-300 flex items-center justify-center shrink-0 border border-fuchsia-400/30">
                <FileText className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>Hands-on Projects</span>
            </div>

            {/* 3. Coding Practice */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-cyan-400/40 hover:border-cyan-400 text-xs font-bold text-slate-100 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5">
              <span className="w-5 h-5 rounded-full bg-cyan-500/25 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-400/30">
                <Code2 className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>Coding Practice</span>
            </div>

            {/* 4. AI Mentor Support */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-amber-400/40 hover:border-amber-400 text-xs font-bold text-slate-100 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/25 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                <Users className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>AI Mentor Support</span>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: EXECUTIVE CAREER HIGHLIGHTS (REPLACES THE BUTTON) */}
        <div className="shrink-0 flex items-center gap-3 sm:gap-4 w-full md:w-auto justify-center md:justify-end pt-2 md:pt-0">
          
          {/* Card 1: 700+ Hiring Partners */}
          <div className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-gradient-to-b from-blue-900/40 to-slate-900/70 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg backdrop-blur-md flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-cyan-500/30">
              <Briefcase className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <div className="text-lg sm:text-xl font-black text-white leading-tight flex items-center gap-1.5">
                <span>700+</span>
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400 stroke-[3]" />
              </div>
              <span className="text-[11px] font-bold text-cyan-200/80 uppercase tracking-wide block">
                Hiring Partners
              </span>
            </div>
          </div>

          {/* Card 2: 100% Placement Assistance */}
          <div className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-gradient-to-b from-emerald-900/40 to-slate-900/70 border border-emerald-400/30 hover:border-emerald-400/60 shadow-lg backdrop-blur-md flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/30">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <div className="text-lg sm:text-xl font-black text-white leading-tight flex items-center gap-1">
                <span>100%</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
              </div>
              <span className="text-[11px] font-bold text-emerald-200/80 uppercase tracking-wide block">
                Job Assistance
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* ─── 3. BOTTOM GLOWING NEON LIP ─── */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 opacity-90 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
    </div>
  );
};
