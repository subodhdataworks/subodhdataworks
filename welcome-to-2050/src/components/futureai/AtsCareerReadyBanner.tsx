import React from 'react';
import {
  Crown,
  ArrowRight,
  GraduationCap,
  FileText,
  Code2,
  Users,
  TrendingUp,
  Brain,
} from 'lucide-react';

export interface AtsCareerReadyBannerProps {
  onExploreCourses?: () => void;
}

export const AtsCareerReadyBanner: React.FC<AtsCareerReadyBannerProps> = ({
  onExploreCourses,
}) => {
  const handleCtaClick = () => {
    if (onExploreCourses) {
      onExploreCourses();
    } else {
      window.location.hash = '#home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full my-6 select-none">
      {/* ── MAIN CONTAINER: Light SaaS Banner matching reference ── */}
      <div className="relative w-full rounded-[22px] sm:rounded-[26px] overflow-hidden border-2 border-sky-300/80 bg-gradient-to-r from-[#F0F7FF] via-white to-[#F5F3FF] shadow-[0_12px_40px_rgba(59,130,246,0.12)]">
        {/* Subtle Ambient Glow Accents */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        {/* ═════════════════════════════════════════════════════════════
            1. TOP TIER: DESKTOP & MOBILE CONTENT
            ═════════════════════════════════════════════════════════════ */}
        <div className="relative z-10 p-4 sm:p-6 lg:p-7">
          {/* ── DESKTOP LAYOUT (>= 768px) ── */}
          <div className="hidden md:flex items-center justify-between gap-6">
            {/* Left Column: Badge, Heading, Subtitle */}
            <div className="flex-1 min-w-0 text-left">
              {/* Top Badge with Crown */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-[10.5px] font-black tracking-wider uppercase shadow-xs mb-3">
                <Crown className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" />
                <span>WORLD&apos;S FIRST AI-POWERED LEARNING PLATFORM</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl lg:text-[28px] font-black tracking-tight leading-tight">
                <span className="text-[#0F172A]">Learn AI. Build Real Skills.</span>{' '}
                <span className="text-[#0066FF]">Get Career-Ready.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13.5px] text-slate-600 font-medium mt-1.5 max-w-xl leading-relaxed">
                Explore industry-focused courses in Data Analytics, Data Science, AI, Machine Learning and more.
              </p>
            </div>

            {/* Center Column: 3D Laptop with AI Dashboard & Floating Badges */}
            <div className="relative shrink-0 flex items-center justify-center px-4">
              {/* Floating Analytics Card (Left) */}
              <div
                className="absolute -left-3 lg:-left-5 top-2 z-20 p-2 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center animate-bounce pointer-events-none"
                style={{ animationDuration: '4.5s' }}
              >
                <div className="w-6 h-6 flex items-end justify-center gap-1 p-0.5">
                  <div className="w-1.5 h-2.5 bg-blue-400 rounded-xs" />
                  <div className="w-1.5 h-4 bg-blue-600 rounded-xs" />
                  <div className="w-1.5 h-5.5 bg-cyan-400 rounded-xs" />
                </div>
              </div>

              {/* Laptop Body Mockup */}
              <div className="relative w-44 lg:w-52 flex flex-col items-center">
                <div className="w-full aspect-[16/10] bg-slate-900 rounded-t-xl p-1.5 border-2 border-slate-700 shadow-xl relative overflow-hidden flex flex-col">
                  {/* Camera dot */}
                  <div className="w-1 h-1 rounded-full bg-slate-500 mx-auto mb-1" />
                  {/* Screen Content: AI Learning Video Dashboard */}
                  <div className="w-full flex-1 rounded-xs bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-1.5 flex gap-1.5 overflow-hidden border border-slate-700/60">
                    <div className="w-1/4 h-full bg-slate-800/80 rounded-2xs p-1 flex flex-col gap-1">
                      <div className="w-full h-1 bg-blue-400 rounded-full" />
                      <div className="w-3/4 h-1 bg-slate-600 rounded-full" />
                      <div className="w-4/5 h-1 bg-slate-600 rounded-full" />
                    </div>
                    <div className="flex-1 h-full bg-slate-950 rounded-2xs border border-blue-500/30 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 via-transparent to-purple-600/25" />
                      {/* Play Button */}
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.8)] border border-white/40 pl-0.5">
                        <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <div className="absolute bottom-1 left-1.5 right-1.5 h-0.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-cyan-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="w-[115%] h-2.5 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b-lg shadow-md flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-slate-300 rounded-full mb-0.5" />
                </div>
              </div>

              {/* Floating Python Logo (Right) */}
              <div
                className="absolute -right-3 lg:-right-4 -top-1 z-20 p-1.5 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center animate-bounce pointer-events-none"
                style={{ animationDuration: '4s' }}
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 128 128">
                  <path
                    fill="#387EB8"
                    d="M63.7 3.5c-30.8 0-28.9 13.4-28.9 13.4l.1 13.9h29.5v4.2H21.2S3.5 32.8 3.5 63.8c0 31.1 15.5 30 15.5 30h9.2v-12.9s-.5-15.5 15.2-15.5h29.4s14.4.2 14.4-14.1V18.1s2.2-14.6-23.5-14.6zm-16.5 9.4c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3z"
                  />
                  <path
                    fill="#FFE873"
                    d="M64.3 124.5c30.8 0 28.9-13.4 28.9-13.4l-.1-13.9H63.6v-4.2h43.2s17.7 2.2 17.7-28.8c0-31.1-15.5-30-15.5-30h-9.2v12.9s.5 15.5-15.2 15.5H35.4s-14.4-.2-14.4 14.1v31.2s-2.2 14.6 23.5 14.6zm16.5-9.4c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z"
                  />
                </svg>
              </div>

              {/* Floating AI Brain Badge (Bottom Right) */}
              <div
                className="absolute right-0 lg:right-1 -bottom-2 z-20 p-2 rounded-xl bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center animate-bounce pointer-events-none"
                style={{ animationDuration: '3.6s' }}
              >
                <Brain className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Right Column: CTA Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={handleCtaClick}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#0066FF] via-[#2563EB] to-[#7C3AED] hover:from-[#0052cc] hover:to-[#6d28d9] text-white font-black text-xs lg:text-sm tracking-wide shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore All Career Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ── MOBILE LAYOUT (< 768px, Exact match to reference) ── */}
          <div className="block md:hidden text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-[10px] font-black tracking-wider uppercase shadow-xs mb-2.5">
              <Crown className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" />
              <span>WORLD&apos;S FIRST AI-POWERED LEARNING PLATFORM</span>
            </div>

            {/* Content Row: Text on Left, Laptop Illustration on Right */}
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h2 className="text-lg sm:text-xl font-black tracking-tight leading-tight text-slate-900">
                  <span className="block text-[#0F172A]">Learn AI. Build Real Skills.</span>
                  <span className="block text-[#0066FF] mt-0.5">Get Career-Ready.</span>
                </h2>
                <p className="text-[11px] text-slate-600 font-medium mt-1 leading-snug">
                  Explore industry-focused courses in Data Analytics, Data Science, AI, Machine Learning and more.
                </p>
              </div>

              {/* Compact 3D Laptop with Badges */}
              <div className="relative shrink-0 flex items-center justify-center pr-3 pt-1">
                {/* Floating Analytics Card */}
                <div
                  className="absolute -left-3 top-1 z-20 p-1 rounded-md bg-white shadow-md border border-slate-100 flex items-center justify-center animate-bounce pointer-events-none"
                  style={{ animationDuration: '4s' }}
                >
                  <div className="w-4 h-4 flex items-end justify-center gap-0.5 p-0.5">
                    <div className="w-1 h-2 bg-blue-400 rounded-2xs" />
                    <div className="w-1 h-3 bg-blue-600 rounded-2xs" />
                    <div className="w-1 h-4 bg-cyan-400 rounded-2xs" />
                  </div>
                </div>

                {/* Laptop Body */}
                <div className="relative w-28 sm:w-32 flex flex-col items-center">
                  <div className="w-full aspect-[16/10] bg-slate-900 rounded-t-lg p-1 border border-slate-700 shadow-md relative overflow-hidden flex flex-col">
                    <div className="w-full flex-1 rounded-2xs bg-slate-950 p-1 flex items-center justify-center relative overflow-hidden">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-xs pl-0.5">
                        <svg className="w-2 h-2 fill-white" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-[115%] h-2 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b-md shadow-xs flex items-center justify-center">
                    <div className="w-6 h-0.5 bg-slate-300 rounded-full" />
                  </div>
                </div>

                {/* Floating Python Logo */}
                <div
                  className="absolute -right-1 -top-2 z-20 p-1 rounded-md bg-white shadow-md border border-slate-100 flex items-center justify-center animate-bounce pointer-events-none"
                  style={{ animationDuration: '3.8s' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 128 128">
                    <path
                      fill="#387EB8"
                      d="M63.7 3.5c-30.8 0-28.9 13.4-28.9 13.4l.1 13.9h29.5v4.2H21.2S3.5 32.8 3.5 63.8c0 31.1 15.5 30 15.5 30h9.2v-12.9s-.5-15.5 15.2-15.5h29.4s14.4.2 14.4-14.1V18.1s2.2-14.6-23.5-14.6zm-16.5 9.4c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3z"
                    />
                    <path
                      fill="#FFE873"
                      d="M64.3 124.5c30.8 0 28.9-13.4 28.9-13.4l-.1-13.9H63.6v-4.2h43.2s17.7 2.2 17.7-28.8c0-31.1-15.5-30-15.5-30h-9.2v12.9s.5 15.5-15.2 15.5H35.4s-14.4-.2-14.4 14.1v31.2s-2.2 14.6 23.5 14.6zm16.5-9.4c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z"
                    />
                  </svg>
                </div>

                {/* Floating Brain Icon */}
                <div
                  className="absolute right-1 -bottom-2 z-20 p-1.5 rounded-lg bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] text-white shadow-md flex items-center justify-center animate-bounce pointer-events-none"
                  style={{ animationDuration: '3.4s' }}
                >
                  <Brain className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            {/* Mobile Full-Width CTA Button */}
            <div className="mt-3.5">
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#2563EB] to-[#7C3AED] hover:from-[#0052cc] hover:to-[#6d28d9] text-white font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore All Career Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            2. BOTTOM TIER: DOCKED DARK NAVY STRIP (5 Feature Pillars)
            ═════════════════════════════════════════════════════════════ */}
        <div className="bg-[#060D1E] border-t border-slate-800 text-white px-3 sm:px-6 py-2.5 sm:py-3">
          <div className="flex items-center justify-between gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
            {/* Pillar 1: Industry-Focused Courses */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              </div>
              <div className="text-left leading-none">
                <span className="text-[10px] sm:text-xs font-black text-white block">
                  Industry-Focused
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 font-medium mt-0.5 block">
                  Courses
                </span>
              </div>
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden md:block w-px h-6 bg-slate-800 shrink-0" />

            {/* Pillar 2: Real-World Projects */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-pink-950/80 border border-pink-500/40 text-pink-400 flex items-center justify-center shadow-xs">
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              </div>
              <div className="text-left leading-none">
                <span className="text-[10px] sm:text-xs font-black text-white block">
                  Real-World
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 font-medium mt-0.5 block">
                  Projects
                </span>
              </div>
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden md:block w-px h-6 bg-slate-800 shrink-0" />

            {/* Pillar 3: Coding & DSA Practice */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-xs">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              </div>
              <div className="text-left leading-none">
                <span className="text-[10px] sm:text-xs font-black text-white block">
                  Coding &amp; DSA
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 font-medium mt-0.5 block">
                  Practice
                </span>
              </div>
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden md:block w-px h-6 bg-slate-800 shrink-0" />

            {/* Pillar 4: AI Mock Interviews */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow-xs">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              </div>
              <div className="text-left leading-none">
                <span className="text-[10px] sm:text-xs font-black text-white block">
                  AI Mock
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 font-medium mt-0.5 block">
                  Interviews
                </span>
              </div>
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden md:block w-px h-6 bg-slate-800 shrink-0" />

            {/* Pillar 5: Placement Support */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-950/80 border border-blue-500/40 text-blue-400 flex items-center justify-center shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              </div>
              <div className="text-left leading-none">
                <span className="text-[10px] sm:text-xs font-black text-white block">
                  Placement
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 font-medium mt-0.5 block">
                  Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
