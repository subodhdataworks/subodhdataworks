import React from 'react';
import {
  Laptop,
  BookOpen,
  Code2,
  UserCheck,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Users,
  Trophy,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface MobileCareerJourneySectionProps {
  onExploreCourses?: () => void;
}

export const MobileCareerJourneySection: React.FC<MobileCareerJourneySectionProps> = ({
  onExploreCourses,
}) => {
  const handleScrollToCourses = () => {
    if (onExploreCourses) {
      onExploreCourses();
      return;
    }
    const target = document.getElementById('career-programs') || document.querySelector('[data-course-id]');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const steps = [
    {
      step: 1,
      title: 'Choose a Program',
      desc: 'Pick the course that matches your career goal.',
      numBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
      numShadow: 'shadow-blue-500/50',
      badgeBorder: 'border-blue-400/40',
      glowColor: 'rgba(0, 102, 255, 0.15)',
      activeBorder: 'border-blue-500/30',
      iconBg: 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      pedestal: 'from-blue-600/40 via-blue-500/20 to-transparent',
      pedestalGlow: 'bg-blue-500/30',
      Icon: Laptop,
    },
    {
      step: 2,
      title: 'Learn In-Demand Skills',
      desc: 'Expert-led, structured learning.',
      numBg: 'bg-gradient-to-br from-purple-500 to-purple-700',
      numShadow: 'shadow-purple-500/50',
      badgeBorder: 'border-purple-400/40',
      glowColor: 'rgba(168, 85, 247, 0.15)',
      activeBorder: 'border-purple-500/30',
      iconBg: 'bg-purple-500/20 text-purple-400 border-purple-400/30',
      pedestal: 'from-purple-600/40 via-purple-500/20 to-transparent',
      pedestalGlow: 'bg-purple-500/30',
      Icon: BookOpen,
    },
    {
      step: 3,
      title: 'Build Real Projects',
      desc: 'Work on industry-relevant projects.',
      numBg: 'bg-gradient-to-br from-emerald-500 to-teal-700',
      numShadow: 'shadow-emerald-500/50',
      badgeBorder: 'border-emerald-400/40',
      glowColor: 'rgba(16, 185, 129, 0.15)',
      activeBorder: 'border-emerald-500/30',
      iconBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30',
      pedestal: 'from-emerald-600/40 via-emerald-500/20 to-transparent',
      pedestalGlow: 'bg-emerald-500/30',
      Icon: Code2,
    },
    {
      step: 4,
      title: 'Get Job Ready',
      desc: 'Resume, mock interviews & placement support.',
      numBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      numShadow: 'shadow-amber-500/50',
      badgeBorder: 'border-amber-400/40',
      glowColor: 'rgba(245, 158, 11, 0.15)',
      activeBorder: 'border-amber-500/30',
      iconBg: 'bg-amber-500/20 text-amber-400 border-amber-400/30',
      pedestal: 'from-amber-600/40 via-amber-500/20 to-transparent',
      pedestalGlow: 'bg-amber-500/30',
      Icon: UserCheck,
    },
    {
      step: 5,
      title: 'Start Earning',
      desc: 'Land your dream job and grow your career.',
      numBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
      numShadow: 'shadow-pink-500/50',
      badgeBorder: 'border-pink-400/40',
      glowColor: 'rgba(236, 72, 153, 0.15)',
      activeBorder: 'border-pink-500/30',
      iconBg: 'bg-pink-500/20 text-pink-400 border-pink-400/30',
      pedestal: 'from-pink-600/40 via-pink-500/20 to-transparent',
      pedestalGlow: 'bg-pink-500/30',
      Icon: Briefcase,
      isFinal: true,
    },
  ];

  return (
    <section className="w-full px-3.5 py-4 select-none">
      {/* ─── Premium Dark Navy Container (Matching Reference) ─── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#060B1E] via-[#0A1333] to-[#05091A] border border-blue-500/25 p-4 sm:p-5 shadow-2xl">
        {/* Ambient Glows */}
        <div className="absolute -top-16 -left-16 w-60 h-60 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 -right-16 w-64 h-64 rounded-full bg-purple-600/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 left-1/4 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />

        {/* ─── 1. HERO HEADER AREA ─── */}
        <div className="relative z-10">
          {/* Main Headings */}
          <h2 className="text-[25px] sm:text-[28px] font-black text-white tracking-tight leading-tight">
            Your Journey From{' '}
            <span className="block mt-0.5 bg-gradient-to-r from-[#00F2FE] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent drop-shadow-sm">
              Learning to Earning
            </span>
          </h2>

          <p className="text-[12px] sm:text-[13px] text-slate-300/90 font-normal mt-2 leading-relaxed max-w-[340px]">
            Learn in-demand skills, build real projects, get industry ready and start your dream career — all in one place.
          </p>

          {/* CTA & Hero Visual Row */}
          <div className="mt-3.5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleScrollToCourses}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#4F46E5] text-white font-extrabold text-xs sm:text-[13px] shadow-lg shadow-blue-500/35 hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0 border border-white/20"
            >
              <span>Explore Our Career Programs</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Student Banner Artwork Card */}
          <div className="relative mt-4 w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-slate-950/70">
            <img
              src="/images/home_sections/journey_student_hero.png"
              alt="Indian Student Career Growth"
              className="w-full h-[180px] sm:h-[220px] object-cover object-[center_20%] select-none"
            />
            {/* Ambient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B1E] via-transparent to-black/20 pointer-events-none" />

            {/* Floating Dream Job Badge (Exact Match to Reference) */}
            <div className="absolute top-3 right-3 bg-blue-950/85 backdrop-blur-md border border-cyan-400/40 rounded-xl px-3 py-2 text-right shadow-lg shadow-cyan-950/50 flex items-center gap-2">
              <div className="leading-tight">
                <span className="block text-[10px] font-black tracking-wide text-cyan-300 uppercase">Dream Job</span>
                <span className="block text-[11px] font-black text-white">Higher Salary</span>
                <span className="block text-[9px] font-bold text-pink-400">Better Future</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-400 shadow-sm shrink-0">
                <TrendingUp className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 2. FIVE-STEP CAREER JOURNEY (Mobile Responsive Vertical Timeline) ─── */}
        <div className="relative z-10 mt-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-black tracking-wider uppercase text-cyan-300">
                5-Step Progressive Roadmap
              </span>
            </div>
            <span className="text-[10px] font-bold text-slate-400">Goal-Oriented</span>
          </div>

          {/* Step Cards Stack connected by Glowing Timeline Path */}
          <div className="relative space-y-3">
            {/* Glowing Connector Line running behind numbers */}
            <div className="absolute left-[26px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-400 via-amber-400 to-pink-500 opacity-60 pointer-events-none" />

            {steps.map((item) => {
              const StepIcon = item.Icon;

              return (
                <div
                  key={item.step}
                  className="relative flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all shadow-sm"
                  style={{
                    boxShadow: `0 4px 20px -6px ${item.glowColor}`,
                  }}
                >
                  {/* Step Number Circle Badge */}
                  <div
                    className={`relative z-10 w-8 h-8 rounded-full ${item.numBg} ${item.numShadow} border ${item.badgeBorder} flex items-center justify-center text-white font-black text-xs shrink-0 shadow-md`}
                  >
                    {item.step}
                  </div>

                  {/* Step Details & 3D Pedestal Icon */}
                  <div className="flex-1 min-w-0 flex items-center justify-between gap-2.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-black text-white tracking-tight leading-snug">
                          {item.title}
                        </h4>
                        {item.isFinal && (
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40">
                            Goal
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300/80 font-medium mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>

                    {/* 3D Platform Styled Icon Box */}
                    <div className="relative flex flex-col items-center shrink-0">
                      <div
                        className={`w-9 h-9 rounded-xl ${item.iconBg} border flex items-center justify-center shadow-inner relative z-10`}
                      >
                        <StepIcon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      {/* 3D Pedestal Platform Glow */}
                      <div
                        className={`-mt-1.5 w-10 h-2.5 rounded-full bg-gradient-to-b ${item.pedestal} blur-[1px]`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── 3. STATISTICS BAR (Matching Reference) ─── */}
        <div className="relative z-10 mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-2.5">
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-black text-white leading-tight">7</span>
              <span className="block text-[10px] text-slate-400 font-medium truncate">Career Programs</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
              <FolderGit2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-black text-white leading-tight">100+</span>
              <span className="block text-[10px] text-slate-400 font-medium truncate">Real-World Projects</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-black text-white leading-tight">700+</span>
              <span className="block text-[10px] text-slate-400 font-medium truncate">Hiring Partners</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-400 shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-black text-white leading-tight">High-Growth</span>
              <span className="block text-[10px] text-slate-400 font-medium truncate">Career Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
