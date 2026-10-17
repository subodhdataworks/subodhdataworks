import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroCoachCardProps {
  onContinueLearning: () => void;
}

export const HeroCoachCard: React.FC<HeroCoachCardProps> = ({ onContinueLearning }) => {
  return (
    <div className="relative w-full rounded-[24px] p-6 sm:p-7 lg:p-8 overflow-hidden border border-white/80 shadow-[0_10px_35px_rgba(215,228,252,0.65)] bg-gradient-to-br from-[#FAF5FF] via-[#F1F5FD] to-[#EAF2FF] min-h-[280px] lg:min-h-[300px] flex items-center justify-between">
      {/* Soft Ambient Ethereal Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none -mt-20" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-purple-200/25 rounded-full blur-3xl pointer-events-none -mb-16" />

      {/* Main Content Flex Row */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
        {/* LEFT SIDE: Hero Messaging */}
        <div className="flex-1 flex flex-col items-start pr-0 sm:pr-4">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-indigo-150/80 shadow-2xs mb-3.5">
            <Sparkles className="w-4 h-4 text-indigo-600 fill-indigo-600/30" />
            <span className="text-xs font-bold text-indigo-700 tracking-tight">
              Your AI Learning Coach
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            You're doing great, Subodh!
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-[15px] lg:text-base text-slate-600 mt-2.5 leading-relaxed max-w-md">
            You completed 3 lessons in Python.
            <br className="hidden sm:inline" />
            Ready to continue with Pandas?
          </p>

          {/* CTA Button */}
          <button
            onClick={onContinueLearning}
            type="button"
            className="mt-5 px-6 py-3 rounded-full bg-gradient-to-r from-[#FBC531] via-[#F8C127] to-[#F5CD44] hover:from-[#e8b21c] hover:to-[#e6ba2c] active:scale-95 text-slate-950 font-extrabold text-sm shadow-[0_6px_20px_rgba(251,197,49,0.38)] inline-flex items-center gap-2.5 transition-all cursor-pointer group"
          >
            <span>Continue Learning</span>
            <ArrowRight className="w-4 h-4 stroke-[2.8] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* RIGHT SIDE: Substantially Larger Futuristic Robot & Speech Bubble */}
        <div className="relative shrink-0 flex flex-col items-center justify-center">
          {/* Speech Bubble */}
          <div className="relative mb-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-indigo-100/70 text-center z-20">
            <p className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
              Let's build
              <br />
              your data analyst
              <br />
              future together!
            </p>
            {/* Bubble arrow pointer */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white" />
          </div>

          {/* Large Futuristic AI Robot Coach on Holographic Disc */}
          <div
            className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-3xl overflow-hidden"
            style={{
              maskImage: 'radial-gradient(circle at 50% 50%, black 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 70%, transparent 100%)'
            }}
          >
            <img
              src="/assets/hero-robot.jpg"
              alt="Mentor AI Robot Coach"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
