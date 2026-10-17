import React, { useState } from 'react';
import { Crown, ArrowRight } from 'lucide-react';
import { PremiumModal } from './PremiumModal';

export const PremiumBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-full rounded-[22px] overflow-hidden bg-gradient-to-r from-[#0A0E1A] via-[#11192A] to-[#1E293B] p-4 sm:p-5 text-white shadow-lg border border-slate-800/80 min-h-[115px] flex items-center justify-between">
        {/* Mountain illustration background graphic */}
        <div className="absolute right-28 top-0 bottom-0 w-44 opacity-50 pointer-events-none mix-blend-screen overflow-hidden">
          <img
            src="/assets/mountain-summit.jpg"
            alt="Career summit"
            className="w-full h-full object-cover object-center filter saturate-120"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-between gap-4 w-full">
          {/* Left: Crown + Text */}
          <div className="flex items-start gap-3 flex-1 min-w-0 pr-1">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <Crown className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-[15px] font-extrabold text-white tracking-tight leading-tight">
                Unlock Your Full Potential
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                Get access to 90+ lessons, real projects, AI tutor and more.
              </p>
            </div>
          </div>

          {/* Right: Golden CTA Button */}
          <div className="shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="group px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308] hover:brightness-105 active:scale-95 text-slate-950 shadow-[0_4px_16px_rgba(250,204,21,0.35)] flex items-center gap-2.5 transition-all cursor-pointer"
            >
              <div className="text-left flex flex-col leading-tight">
                <span className="text-xs sm:text-[13px] font-black tracking-tight text-slate-900">
                  ₹999
                </span>
                <span className="text-[9px] sm:text-[9.5px] font-bold text-slate-800 -mt-0.5 whitespace-nowrap">
                  Lifetime Access
                </span>
              </div>
              <ArrowRight className="w-4 h-4 stroke-[2.8] text-slate-900 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Upgrade Modal */}
      <PremiumModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
