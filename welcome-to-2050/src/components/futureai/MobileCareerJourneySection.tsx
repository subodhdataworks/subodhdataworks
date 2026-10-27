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
      numShadow: 'shadow-blue-500/25',
      badgeBorder: 'border-blue-400',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/90',
      pedestal: 'from-blue-500/30 via-blue-500/10 to-transparent',
      Icon: Laptop,
    },
    {
      step: 2,
      title: 'Learn In-Demand Skills',
      desc: 'Expert-led, structured learning.',
      numBg: 'bg-gradient-to-br from-purple-500 to-purple-700',
      numShadow: 'shadow-purple-500/25',
      badgeBorder: 'border-purple-400',
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200/90',
      pedestal: 'from-purple-500/30 via-purple-500/10 to-transparent',
      Icon: BookOpen,
    },
    {
      step: 3,
      title: 'Build Real Projects',
      desc: 'Work on industry-relevant projects.',
      numBg: 'bg-gradient-to-br from-emerald-500 to-teal-700',
      numShadow: 'shadow-emerald-500/25',
      badgeBorder: 'border-emerald-400',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/90',
      pedestal: 'from-emerald-500/30 via-emerald-500/10 to-transparent',
      Icon: Code2,
    },
    {
      step: 4,
      title: 'Get Job Ready',
      desc: 'Resume, mock interviews & placement support.',
      numBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      numShadow: 'shadow-amber-500/25',
      badgeBorder: 'border-amber-400',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200/90',
      pedestal: 'from-amber-500/30 via-amber-500/10 to-transparent',
      Icon: UserCheck,
    },
    {
      step: 5,
      title: 'Start Earning',
      desc: 'Land your dream job and grow your career.',
      numBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
      numShadow: 'shadow-pink-500/25',
      badgeBorder: 'border-pink-400',
      iconBg: 'bg-pink-50 text-pink-600 border-pink-200/90',
      pedestal: 'from-pink-500/30 via-pink-500/10 to-transparent',
      Icon: Briefcase,
      isFinal: true,
    },
  ];

  return (
    <section className="w-full px-2.5 sm:px-3.5 py-3.5 select-none box-border overflow-hidden">
      {/* ─── Premium Light Container (Light Color Theme) ─── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#EEF4FF] via-white to-[#F0F5FF] border border-blue-200/80 p-3.5 sm:p-4 shadow-sm">
        {/* Soft Ambient Glows */}
        <div className="absolute -top-16 -left-16 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-16 w-64 h-64 rounded-full bg-purple-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 left-1/4 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

        {/* ─── 1. HERO HEADER AREA ─── */}
        <div className="relative z-10">
          {/* Main Headings */}
          <h2 className="text-[23px] sm:text-[26px] font-black text-slate-900 tracking-tight leading-tight">
            Your Journey From{' '}
            <span className="block mt-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Learning to Earning
            </span>
          </h2>

          <p className="text-[11.5px] sm:text-[12.5px] text-slate-600 font-medium mt-1.5 leading-relaxed max-w-[340px]">
            Learn in-demand skills, build real projects, get industry ready and start your dream career — all in one place.
          </p>

          {/* CTA Row */}
          <div className="mt-3 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleScrollToCourses}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#4F46E5] text-white font-extrabold text-xs shadow-md shadow-blue-500/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0 border border-white/20"
            >
              <span>Explore Our Career Programs</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Student Banner Artwork Card */}
          <div className="relative mt-3.5 w-full rounded-2xl overflow-hidden border border-blue-100 shadow-sm bg-slate-950">
            <img
              src="/images/home_sections/journey_student_hero.png"
              alt="Indian Student Career Growth"
              className="w-full h-[175px] sm:h-[210px] object-cover object-[center_20%] select-none"
            />
            {/* Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10 pointer-events-none" />

            {/* Floating Dream Job Badge */}
            <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md border border-blue-200/90 rounded-xl px-2.5 py-1.5 text-right shadow-md flex items-center gap-2">
              <div className="leading-tight">
                <span className="block text-[9.5px] font-black tracking-wide text-blue-600 uppercase">Dream Job</span>
                <span className="block text-[11px] font-black text-slate-900">Higher Salary</span>
                <span className="block text-[9px] font-bold text-indigo-600">Better Future</span>
              </div>
              <div className="w-6.5 h-6.5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-2xs shrink-0">
                <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 2. FIVE-STEP CAREER JOURNEY (Light Vertical Roadmap) ─── */}
        <div className="relative z-10 mt-5">
          <div className="flex items-center justify-between mb-2.5 px-0.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-black tracking-wider uppercase text-blue-700">
                5-Step Progressive Roadmap
              </span>
            </div>
            <span className="text-[10px] font-bold text-slate-500">Goal-Oriented</span>
          </div>

          {/* Step Cards Stack connected by Glowing Timeline Path */}
          <div className="relative space-y-2.5">
            {/* Glowing Connector Line running behind numbers */}
            <div className="absolute left-[23px] top-5 bottom-5 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 via-amber-500 to-pink-500 opacity-30 pointer-events-none" />

            {steps.map((item) => {
              const StepIcon = item.Icon;

              return (
                <div
                  key={item.step}
                  className="relative flex items-start gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-200 transition-all shadow-2xs"
                >
                  {/* Step Number Circle Badge */}
                  <div
                    className={`relative z-10 w-7.5 h-7.5 rounded-full ${item.numBg} ${item.numShadow} border border-white flex items-center justify-center text-white font-black text-xs shrink-0 shadow-xs`}
                  >
                    {item.step}
                  </div>

                  {/* Step Details & Icon */}
                  <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-[13px] sm:text-sm font-black text-slate-900 tracking-tight leading-snug">
                          {item.title}
                        </h4>
                        {item.isFinal && (
                          <span className="text-[8.5px] font-black px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Goal
                          </span>
                        )}
                      </div>
                      <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>

                    {/* Pedestal Icon Box */}
                    <div className="relative flex flex-col items-center shrink-0">
                      <div
                        className={`w-8.5 h-8.5 rounded-xl ${item.iconBg} border flex items-center justify-center shadow-2xs relative z-10`}
                      >
                        <StepIcon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      {/* Pedestal Platform Glow */}
                      <div
                        className={`-mt-1 w-9 h-2 rounded-full bg-gradient-to-b ${item.pedestal} blur-[1px]`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── 3. STATISTICS BAR (Light Theme Grid) ─── */}
        <div className="relative z-10 mt-5 pt-3.5 border-t border-slate-200/80 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="w-7.5 h-7.5 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-black text-slate-900 leading-tight">7</span>
              <span className="block text-[9.5px] text-slate-500 font-medium truncate">Career Programs</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="w-7.5 h-7.5 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
              <FolderGit2 className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-black text-slate-900 leading-tight">100+</span>
              <span className="block text-[9.5px] text-slate-500 font-medium truncate">Real-World Projects</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="w-7.5 h-7.5 rounded-lg bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600 shrink-0">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-black text-slate-900 leading-tight">700+</span>
              <span className="block text-[9.5px] text-slate-500 font-medium truncate">Hiring Partners</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="w-7.5 h-7.5 rounded-lg bg-pink-50 border border-pink-200/80 flex items-center justify-center text-pink-600 shrink-0">
              <Trophy className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-black text-slate-900 leading-tight">High-Growth</span>
              <span className="block text-[9.5px] text-slate-500 font-medium truncate">Career Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
