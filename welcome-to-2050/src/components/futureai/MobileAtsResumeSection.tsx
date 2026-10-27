import React, { useRef } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export interface MobileAtsResumeSectionProps {
  onOpenAts?: () => void;
}

export const MobileAtsResumeSection: React.FC<MobileAtsResumeSectionProps> = ({ onOpenAts }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenChecker = () => {
    if (onOpenAts) {
      onOpenAts();
    } else {
      window.location.hash = '#ats';
    }
  };

  return (
    <section className="w-full px-3.5 sm:px-6 py-4 select-none">
      <div className="relative w-full rounded-3xl bg-gradient-to-b from-white via-blue-50/25 to-white border border-blue-200/80 shadow-md p-4 sm:p-5 overflow-hidden">
        {/* Subtle Ambient Background Accents */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Feature Pill */}
        <div className="flex items-center justify-center mb-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-200/90 text-[10.5px] font-black text-blue-700 tracking-wider uppercase shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600 animate-pulse" />
            <span>AI-Powered Resume Scanner</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight uppercase">
          ATS RESUME{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ANALYSER
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-center text-xs sm:text-[13px] text-slate-600 font-semibold mt-1.5 max-w-sm mx-auto leading-relaxed">
          Check your resume ATS score capability, discover improvement areas and get job ready.
        </p>

        {/* Highlights Row */}
        <div className="flex items-center justify-center gap-2.5 mt-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Instant ATS Score
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-full">
            <ShieldCheck className="w-3 h-3 text-blue-600" />
            Keyword Analysis
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-200/80 px-2 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3 text-purple-600" />
            Formatting Fixes
          </span>
        </div>

        {/* Video Player Card */}
        <div className="relative mt-3.5 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-950 aspect-video group">
          <video
            ref={videoRef}
            src="/videos/ats_resume_analyser.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-3.5 space-y-1.5">
          <button
            type="button"
            onClick={handleOpenChecker}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-[0.99] text-white font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse" />
            <span className="uppercase tracking-wider">Free ATS Resume Checker</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-[10px] font-semibold text-slate-500">
            ✨ 100% Free • No Login Required • Direct Access
          </p>
        </div>
      </div>
    </section>
  );
};
