import React from 'react';
import { GraduationCap, FileText, Code2, Users, ArrowRight, TrendingUp } from 'lucide-react';

interface IndiasMostAffordableBannerProps {
  onAction?: () => void;
}

export const IndiasMostAffordableBanner: React.FC<IndiasMostAffordableBannerProps> = ({
  onAction,
}) => {
  return (
    <div
      onClick={onAction}
      className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-blue-500/40 hover:border-cyan-400/80 transition-all duration-300 cursor-pointer group my-6 bg-[#00102e]"
    >
      {/* Background Lighting Gradients & Cyber Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001438] via-[#001d52] to-[#002b78] pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Main Banner Flex Grid */}
      <div className="relative z-10 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        
        {/* Left: 3D Cute AI Robot Mascot */}
        <div className="flex items-center gap-4 sm:gap-5 shrink-0">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-cyan-400/40 via-blue-500/20 to-transparent border border-cyan-400/30 shadow-[0_0_25px_rgba(6,182,212,0.35)] shrink-0 group-hover:scale-105 transition-transform duration-300">
            <img
              src="/images/ai_robot_graduate_mascot.jpg"
              alt="AI Graduate Mascot"
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/auth_robot_mascot.jpg';
              }}
            />
            {/* Soft cyan bottom pedestal glow */}
            <div className="absolute -bottom-2 inset-x-0 h-4 bg-cyan-400/60 blur-xs rounded-full pointer-events-none" />
          </div>

          {/* Mobile Headline (visible on small mobile screens beside mascot) */}
          <div className="block md:hidden min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] font-black text-cyan-300 uppercase tracking-wider mb-1">
              ✨ 100% Career Focused
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white leading-tight">
              India’s Most Affordable{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                AI Learning
              </span>{' '}
              Platform
            </h2>
          </div>
        </div>

        {/* Center / Primary Content Zone */}
        <div className="flex-1 space-y-3 sm:space-y-3.5 text-center md:text-left min-w-0">
          
          {/* Desktop Headline */}
          <div className="hidden md:block space-y-1">
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-white tracking-tight leading-snug">
              India’s Most Affordable{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-sky-400 bg-clip-text text-transparent drop-shadow-sm">
                AI Learning
              </span>{' '}
              Platform
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-2xl">
              Learn in-demand skills, build real projects and get career-ready — at an affordable price.
            </p>
          </div>

          {/* Mobile Subtitle */}
          <p className="block md:hidden text-xs text-slate-300 font-medium leading-relaxed">
            Learn in-demand skills, build real projects and get career-ready — at an affordable price.
          </p>

          {/* 4 Feature Badges (Pills) */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5 pt-0.5">
            {/* 1. Beginner Friendly */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/60 border border-emerald-500/40 text-[11px] sm:text-xs font-bold text-slate-200 shadow-2xs backdrop-blur-xs">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
              <span>Beginner Friendly</span>
            </div>

            {/* 2. Hands-on Projects */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/60 border border-fuchsia-500/40 text-[11px] sm:text-xs font-bold text-slate-200 shadow-2xs backdrop-blur-xs">
              <span className="w-4 h-4 rounded-full bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center shrink-0">
                <FileText className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
              <span>Hands-on Projects</span>
            </div>

            {/* 3. Coding Practice */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/60 border border-cyan-500/40 text-[11px] sm:text-xs font-bold text-slate-200 shadow-2xs backdrop-blur-xs">
              <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <Code2 className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
              <span>Coding Practice</span>
            </div>

            {/* 4. AI Mentor Support */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/60 border border-amber-500/40 text-[11px] sm:text-xs font-bold text-slate-200 shadow-2xs backdrop-blur-xs">
              <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Users className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
              <span>AI Mentor Support</span>
            </div>
          </div>

        </div>

        {/* Right: Ascending Chart & Glossy CTA Button */}
        <div className="shrink-0 flex items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
          
          {/* Subtle Ascending Growth Chart Visual (hidden on smallest screens) */}
          <div className="hidden lg:flex items-end gap-1.5 h-14 px-3 py-2 rounded-xl bg-blue-950/40 border border-cyan-500/20 shadow-inner">
            <div className="w-2.5 h-4 bg-cyan-500/30 rounded-t-xs" />
            <div className="w-2.5 h-6 bg-cyan-500/50 rounded-t-xs" />
            <div className="w-2.5 h-8 bg-cyan-500/70 rounded-t-xs" />
            <div className="w-2.5 h-10 bg-cyan-400 rounded-t-xs" />
            <div className="w-2.5 h-12 bg-gradient-to-t from-cyan-400 to-sky-300 rounded-t-xs shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
            <TrendingUp className="w-4 h-4 text-cyan-300 stroke-[3] ml-1 self-start drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          </div>

          {/* Crisp Glossy White Pill CTA Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onAction) onAction();
            }}
            className="w-full md:w-auto px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-blue-700 hover:text-blue-800 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_32px_rgba(56,189,248,0.45)] group-hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
          >
            <span>Create Free Account</span>
            <ArrowRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform stroke-[3]" />
          </button>
        </div>

      </div>

      {/* Subtle bottom neon lip line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />
    </div>
  );
};
