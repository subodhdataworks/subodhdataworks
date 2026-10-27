import React from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  User,
  Briefcase,
  Code2,
} from 'lucide-react';

export interface MobileAtsResumeSectionProps {
  onOpenAts?: () => void;
}

export const MobileAtsResumeSection: React.FC<MobileAtsResumeSectionProps> = ({ onOpenAts }) => {
  const handleOpenChecker = () => {
    if (onOpenAts) {
      onOpenAts();
    } else {
      window.location.hash = '#ats';
    }
  };

  return (
    <section className="w-full px-3.5 sm:px-6 py-3 select-none">
      <div className="relative w-full rounded-3xl bg-gradient-to-b from-white via-blue-50/20 to-white border border-blue-200/80 shadow-md p-4 sm:p-5 overflow-hidden">
        {/* Subtle Ambient Background Accents */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Feature Pill */}
        <div className="flex items-center justify-center mb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-200/90 text-[10px] sm:text-[10.5px] font-black text-blue-700 tracking-wider uppercase shadow-2xs">
            <Zap className="w-3 h-3 text-blue-600 fill-blue-600 animate-pulse" />
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
        <p className="text-center text-xs sm:text-[13px] text-slate-600 font-semibold mt-1 max-w-sm mx-auto leading-relaxed">
          Check your resume ATS score capability, discover improvement areas and get job ready.
        </p>

        {/* ── TRANSPARENT RESUME SCANNING & FILTERING ANIMATION WIDGET ── */}
        <div
          onClick={handleOpenChecker}
          className="relative mt-3.5 rounded-2xl bg-gradient-to-b from-blue-50/60 via-white/80 to-indigo-50/50 border-2 border-blue-300/80 p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden group"
        >
          {/* ── Active Scanning Laser Beam (Moves Up and Down Continuously) ── */}
          <div
            className="absolute left-0 right-0 z-30 pointer-events-none"
            style={{
              animation: 'atsScanSweep 3.2s ease-in-out infinite',
            }}
          >
            {/* Bright Laser Line */}
            <div className="w-full h-[2.5px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_12px_#00E5FF,0_0_4px_#3b82f6]" />
            {/* Glowing Gradient Trail */}
            <div className="w-full h-10 bg-gradient-to-b from-[#00E5FF]/20 via-blue-500/10 to-transparent -translate-y-full pointer-events-none" />
          </div>

          {/* Floating Live ATS Score Badge (Top Right) */}
          <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/95 border border-emerald-300/90 shadow-sm backdrop-blur-xs">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <div className="text-left leading-none">
              <span className="text-[8px] font-black text-slate-400 block uppercase tracking-wider">
                ATS Score
              </span>
              <span className="text-xs font-black text-emerald-600">
                94<span className="text-[9px] text-emerald-500">/100</span>
              </span>
            </div>
          </div>

          {/* ── Simulated Resume Document Content ── */}
          <div className="relative z-10 space-y-2.5 text-left">
            {/* Resume Header: Candidate Info */}
            <div className="flex items-center gap-2.5 border-b border-blue-100 pb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-black text-xs shadow-xs shrink-0">
                <User className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight truncate">
                    Candidate Resume
                  </h4>
                  <span className="text-[8.5px] font-black text-blue-700 bg-blue-100/90 px-1.5 py-0.2 rounded-md">
                    ATS READY
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-semibold truncate">
                  Data Analyst • AI &amp; BI Specialist • B.Tech
                </p>
              </div>
            </div>

            {/* Keyword Matching & Filtering Chips */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9.5px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-blue-600" />
                  Matched Job Keywords
                </span>
                <span className="text-[9px] font-bold text-emerald-600 flex items-center gap-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  12/12 Matched
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {['Python', 'SQL', 'Power BI', 'Data Analytics', 'GenAI', 'Excel'].map((kw, i) => (
                  <span
                    key={kw}
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-md border flex items-center gap-0.5 ${
                      i % 2 === 0
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current" />
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience & Formatting Section Check */}
            <div className="bg-white/80 rounded-xl p-2 border border-blue-100/80 space-y-1.5">
              <div className="flex items-center justify-between text-[9px] font-semibold text-slate-600">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-2.5 h-2.5 text-indigo-600" />
                  Work Experience &amp; Projects
                </span>
                <span className="text-emerald-600 font-bold">100% Parsable</span>
              </div>
              {/* Animated document line bars simulating scanned text */}
              <div className="space-y-1">
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    style={{ width: '85%' }}
                  />
                </div>
                <div className="w-3/4 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full"
                    style={{ width: '68%' }}
                  />
                </div>
              </div>
            </div>

            {/* Live Scanner Status Bar */}
            <div className="flex items-center justify-between text-[9.5px] font-bold text-blue-900 bg-gradient-to-r from-blue-100/70 via-indigo-100/70 to-purple-100/70 px-2.5 py-1.5 rounded-lg border border-blue-200/70">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Live Filtering: 700+ Hiring Partner Standard</span>
              </span>
              <span className="text-emerald-700 font-extrabold flex items-center gap-0.5">
                <ShieldCheck className="w-3 h-3" />
                PASSED
              </span>
            </div>
          </div>

          {/* CSS Animation Keyframes for Laser Beam */}
          <style>{`
            @keyframes atsScanSweep {
              0% {
                top: 0%;
                opacity: 0.7;
              }
              50% {
                top: 88%;
                opacity: 1;
              }
              100% {
                top: 0%;
                opacity: 0.7;
              }
            }
          `}</style>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-3.5 space-y-1">
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
