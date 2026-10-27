import React from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Search,
  Filter,
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

        {/* ── REALISTIC ANIMATED RESUME DOCUMENT SHEET (100% TRANSPARENT CONTAINER, NO VIDEO, NO BLACK) ── */}
        <div
          onClick={handleOpenChecker}
          className="relative mt-3.5 w-full rounded-2xl bg-white shadow-md border border-slate-200/90 p-3 sm:p-4 cursor-pointer hover:border-blue-400 transition-all overflow-hidden group"
        >
          {/* ── Laser Scanning Beam Animation (Sweeps continuously top to bottom) ── */}
          <div
            className="absolute left-0 right-0 z-30 pointer-events-none"
            style={{
              animation: 'resumeLaserSweep 3.4s ease-in-out infinite',
            }}
          >
            {/* Glowing Laser Line */}
            <div className="w-full h-[2.5px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_14px_#00E5FF,0_0_4px_#2563eb]" />
            {/* Laser Gradient Trail */}
            <div className="w-full h-12 bg-gradient-to-b from-[#00E5FF]/20 via-blue-500/10 to-transparent -translate-y-full pointer-events-none" />
          </div>

          {/* Floating Live ATS Score Stamp (Top-Right of Resume Sheet) */}
          <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-50/95 border border-emerald-300 shadow-sm backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <div className="text-left leading-none">
              <span className="text-[8px] font-black text-emerald-800 uppercase tracking-wider block">
                ATS SCORE
              </span>
              <span className="text-xs sm:text-sm font-black text-emerald-600">
                94<span className="text-[9px] text-emerald-500 font-bold">/100</span>
              </span>
            </div>
          </div>

          {/* ── Authentic Resume Paper Layout ── */}
          <div className="space-y-2.5 text-left text-slate-800">
            {/* 1. Resume Header */}
            <div className="border-b border-slate-200 pb-2 pr-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-xs shrink-0">
                  RS
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-none">
                    RAHUL SHARMA
                  </h3>
                  <p className="text-[10px] font-bold text-blue-600 mt-0.5 leading-none">
                    Data Analyst &amp; AI Specialist
                  </p>
                </div>
              </div>
              {/* Contact Icons Row */}
              <div className="flex items-center gap-2.5 mt-1.5 text-[8.5px] font-medium text-slate-500 flex-wrap">
                <span className="flex items-center gap-0.5">
                  <Mail className="w-2.5 h-2.5 text-slate-400" />
                  rahul.sharma@example.com
                </span>
                <span className="flex items-center gap-0.5">
                  <Phone className="w-2.5 h-2.5 text-slate-400" />
                  +91 98765 43210
                </span>
                <span className="flex items-center gap-0.5">
                  <MapPin className="w-2.5 h-2.5 text-slate-400" />
                  Bengaluru, India
                </span>
              </div>
            </div>

            {/* 2. Key Technical Skills (Highlighted & Filtered by ATS) */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1">
                  <Filter className="w-2.5 h-2.5 text-blue-600" />
                  ATS Matched Competencies
                </span>
                <span className="text-[8.5px] font-bold text-emerald-600 flex items-center gap-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  100% Keywords Found
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {[
                  { name: 'Python', match: '98%' },
                  { name: 'SQL', match: '96%' },
                  { name: 'Power BI', match: '95%' },
                  { name: 'Data Analytics', match: '94%' },
                  { name: 'Machine Learning', match: '92%' },
                  { name: 'GenAI & LLMs', match: '90%' },
                ].map((skill, idx) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1 text-[8.5px] font-bold px-2 py-0.5 rounded-md border transition-all ${
                      idx < 4
                        ? 'bg-blue-50 text-blue-700 border-blue-200 shadow-2xs'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    <span>{skill.name}</span>
                    <span className="text-[7.5px] opacity-70">({skill.match})</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Professional Experience (Parsable Structure) */}
            <div className="bg-slate-50/80 rounded-xl p-2 border border-slate-200/70 space-y-1">
              <div className="flex items-center justify-between text-[9px] font-bold text-slate-800">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-2.5 h-2.5 text-blue-600" />
                  Data Analyst Intern • TechCorp Labs
                </span>
                <span className="text-[8px] text-slate-400 font-normal">2024 - Present</span>
              </div>
              {/* Simulated text lines with gradient */}
              <div className="space-y-1 pt-0.5">
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }} />
                </div>
                <div className="w-4/5 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
            </div>

            {/* 4. Education & Certification Row */}
            <div className="flex items-center justify-between text-[8.5px] font-semibold text-slate-600 px-1 pt-0.5">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3 h-3 text-purple-600" />
                B.Tech in Computer Science &amp; Engineering
              </span>
              <span className="flex items-center gap-0.5 text-emerald-700 font-bold">
                <Award className="w-3 h-3 text-emerald-600" />
                Verified
              </span>
            </div>

            {/* 5. Live Scanner Filter Status Bar */}
            <div className="flex items-center justify-between text-[9px] font-bold text-blue-900 bg-gradient-to-r from-blue-100/70 via-indigo-100/70 to-purple-100/70 px-2.5 py-1.5 rounded-lg border border-blue-200/80 mt-1">
              <span className="flex items-center gap-1">
                <Search className="w-3 h-3 text-blue-600 animate-pulse" />
                <span>Automated ATS Filter: Passed for 700+ Partners</span>
              </span>
              <span className="text-emerald-700 font-black tracking-wider flex items-center gap-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                READY
              </span>
            </div>
          </div>

          {/* Keyframe animation for laser scanning sweep */}
          <style>{`
            @keyframes resumeLaserSweep {
              0% {
                top: 0%;
                opacity: 0.7;
              }
              50% {
                top: 90%;
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
