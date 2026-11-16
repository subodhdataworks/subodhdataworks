import React from 'react';
import { motion } from 'framer-motion';
import {
  Laptop,
  BookOpen,
  Code2,
  UserCheck,
  BarChart3,
  Sparkles,
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
    const target = document.getElementById('career-programs') || document.getElementById('courses') || document.querySelector('[data-course-id]');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const steps = [
    {
      step: 1,
      title: 'Choose a Program',
      desc: 'Pick the course that matches your career goal.',
      numBg: 'bg-[#0070f3]',
      numShadow: 'shadow-blue-500/25',
      iconBg: 'bg-[#eff6ff] text-[#2563eb]',
      Icon: Laptop,
      isFinal: false,
    },
    {
      step: 2,
      title: 'Learn In-Demand Skills',
      desc: 'Expert-led, structured practical curriculum.',
      numBg: 'bg-[#9333ea]',
      numShadow: 'shadow-purple-500/25',
      iconBg: 'bg-[#faf5ff] text-[#9333ea]',
      Icon: BookOpen,
      isFinal: false,
    },
    {
      step: 3,
      title: 'Build Real Projects',
      desc: 'Production-grade industry projects with deployment.',
      numBg: 'bg-[#10b981]',
      numShadow: 'shadow-emerald-500/25',
      iconBg: 'bg-[#ecfdf5] text-[#059669]',
      Icon: Code2,
      isFinal: false,
    },
    {
      step: 4,
      title: 'Get Job Ready',
      desc: 'ATS resume, unlimited mock interviews & placement support.',
      numBg: 'bg-[#f97316]',
      numShadow: 'shadow-orange-500/25',
      iconBg: 'bg-[#fff7ed] text-[#ea580c]',
      Icon: UserCheck,
      isFinal: false,
    },
    {
      step: 5,
      title: 'Launch Your Career',
      desc: 'Land your high-paying tech placement and grow.',
      numBg: 'bg-[#f43f5e]',
      numShadow: 'shadow-pink-500/25',
      iconBg: 'bg-[#fff1f2] text-[#f43f5e]',
      Icon: BarChart3,
      isFinal: true,
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-5 select-none box-border">
      {/* ─── Outer Container with Light Blue-White Background ─── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#f0f6ff] via-[#f8faff] to-[#eef4ff] border border-blue-100/90 p-3.5 sm:p-5 md:p-6 lg:p-7 shadow-xs relative overflow-hidden"
      >
        {/* Soft Ambient Background Glows */}
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

        {/* ─── MAIN TITLE AT TOP (Compact) ─── */}
        <div className="mb-2.5 sm:mb-4 lg:mb-5 relative z-10">
          <h2 className="text-[16px] sm:text-xl md:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight leading-tight">
            A simple path to a successful career with{' '}
            <span className="text-[#0066FF] font-black block sm:inline">Future IT Industry.</span>
          </h2>
        </div>

        {/* ─── RESPONSIVE LAYOUT: 2-Columns on Desktop, Stacked on Mobile ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-6 items-stretch relative z-10">
          {/* Mobile-Only Student Image (< lg) */}
          <div className="block lg:hidden w-full mb-1">
            <div className="relative w-full max-h-[160px] rounded-xl overflow-hidden shadow-xs border border-slate-200/70 bg-white">
              <img
                src="/images/home_sections/journey_student_mobile.png"
                alt="Indian Student Career Growth"
                className="w-full h-full max-h-[160px] object-cover select-none"
              />
            </div>
          </div>

          {/* ═══ LEFT COLUMN (Roadmap Cards): lg:col-span-7 ═══ */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* ── Heading Row with Horizontal Divider Line ── */}
            <div className="flex items-center justify-between mb-1.5 sm:mb-2.5 px-1">
              <div className="flex items-center gap-1.5 shrink-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0066FF] fill-[#0066FF]/20 shrink-0" />
                <h3 className="text-[11px] sm:text-xs lg:text-[12.5px] font-black tracking-wider uppercase text-[#0066FF]">
                  5-STEP PROGRESSIVE ROADMAP
                </h3>
              </div>
              {/* Thin horizontal divider line in between */}
              <div className="hidden sm:block flex-1 mx-3 lg:mx-4 h-[1px] bg-slate-200/90" />
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 shrink-0">
                Goal-Oriented
              </span>
            </div>

            {/* ── 5 Vertically Connected Roadmap Cards (Compact) ── */}
            <div className="relative flex flex-col justify-between flex-1 space-y-1 sm:space-y-1.5">
              {steps.map((item, index) => {
                const StepIcon = item.Icon;

                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-15px' }}
                    transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
                    className="relative flex items-stretch gap-2 sm:gap-2.5 py-0.5 group"
                  >
                    {/* Left Column: Vertical Dashed Line & Number Circle */}
                    <div className="relative flex flex-col items-center justify-center shrink-0 w-6 sm:w-7 lg:w-7.5">
                      {/* Top Dashed Line Segment */}
                      <div
                        className={`w-0 flex-1 border-l-2 border-dashed ${
                          index === 4 ? 'border-rose-400' : 'border-sky-400'
                        } ${index === 0 ? 'opacity-90' : ''}`}
                      />

                      {/* Number Circle Badge */}
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-7.5 lg:h-7.5 rounded-full ${item.numBg} ${item.numShadow} text-white font-black text-[11px] sm:text-xs lg:text-[12.5px] flex items-center justify-center shrink-0 my-0.5 relative z-10 shadow-xs transition-transform duration-200 group-hover:scale-105`}
                      >
                        {item.step}
                      </div>

                      {/* Bottom Dashed Line Segment */}
                      <div
                        className={`w-0 flex-1 ${
                          index < steps.length - 1
                            ? `border-l-2 border-dashed ${
                                index === 3 ? 'border-rose-400' : 'border-sky-400'
                              }`
                            : ''
                        }`}
                      />
                    </div>

                    {/* Right: The White Rounded Card */}
                    <div
                      onClick={handleScrollToCourses}
                      className="flex-1 min-w-0 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 lg:p-3 border border-slate-100 shadow-[0_1px_6px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-blue-200 transition-all cursor-pointer flex items-center justify-between gap-2 sm:gap-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="text-[12px] sm:text-[13.5px] lg:text-[14.5px] font-black text-[#08152F] tracking-tight leading-snug">
                            {item.title}
                          </h4>
                          {item.isFinal && (
                            <span className="inline-flex items-center px-1.5 py-0.2 rounded-full bg-[#ecfdf5] text-[#059669] text-[8.5px] sm:text-[9.5px] font-black border border-[#a7f3d0]">
                              Goal
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] text-slate-500 font-medium mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>

                      {/* Right Icon Box */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                      >
                        <StepIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ═══ RIGHT COLUMN (Student Photo on Desktop): lg:col-span-5 ═══ */}
          <div className="hidden lg:flex lg:col-span-5 flex-col h-full max-h-[380px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xs border border-slate-200/70 bg-white flex items-center justify-center">
              <img
                src="/images/home_sections/journey_student_desktop.png"
                alt="Indian Student Career Growth"
                className="w-full h-full object-cover select-none transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
