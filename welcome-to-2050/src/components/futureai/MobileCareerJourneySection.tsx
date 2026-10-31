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
      numBg: 'bg-[#0070f3]',
      numShadow: 'shadow-blue-500/25',
      iconBg: 'bg-[#eff6ff] text-[#2563eb]',
      Icon: Laptop,
      isFinal: false,
    },
    {
      step: 2,
      title: 'Learn In-Demand Skills',
      desc: 'Expert-led, structured learning.',
      numBg: 'bg-[#9333ea]',
      numShadow: 'shadow-purple-500/25',
      iconBg: 'bg-[#faf5ff] text-[#9333ea]',
      Icon: BookOpen,
      isFinal: false,
    },
    {
      step: 3,
      title: 'Build Real Projects',
      desc: 'Work on industry-relevant projects.',
      numBg: 'bg-[#10b981]',
      numShadow: 'shadow-emerald-500/25',
      iconBg: 'bg-[#ecfdf5] text-[#059669]',
      Icon: Code2,
      isFinal: false,
    },
    {
      step: 4,
      title: 'Get Job Ready',
      desc: 'Resume, mock interviews & placement support.',
      numBg: 'bg-[#f97316]',
      numShadow: 'shadow-orange-500/25',
      iconBg: 'bg-[#fff7ed] text-[#ea580c]',
      Icon: UserCheck,
      isFinal: false,
    },
    {
      step: 5,
      title: 'Launch Your Career',
      desc: 'Land your dream job and grow your career.',
      numBg: 'bg-[#f43f5e]',
      numShadow: 'shadow-pink-500/25',
      iconBg: 'bg-[#fff1f2] text-[#f43f5e]',
      Icon: BarChart3,
      isFinal: true,
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 select-none box-border">
      {/* ─── Outer Container with Light Blue-White Background ─── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full rounded-3xl bg-gradient-to-b from-[#f0f6ff] via-[#f8faff] to-[#eef4ff] border border-blue-100/90 p-4 sm:p-6 md:p-8 lg:p-10 shadow-xs relative overflow-hidden"
      >
        {/* Soft Ambient Background Glows */}
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

        {/* ─── MAIN TITLE AT TOP (Matches Desktop Mockup) ─── */}
        <div className="mb-4 sm:mb-6 lg:mb-8 relative z-10">
          <h2 className="text-[17px] sm:text-2xl md:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
            A simple path to a successful career with{' '}
            <span className="text-[#0066FF] font-black block sm:inline">Future IT Industry.</span>
          </h2>
        </div>

        {/* ─── RESPONSIVE LAYOUT: 2-Columns on Desktop, Stacked on Mobile ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch relative z-10">
          {/* Mobile-Only Student Image (< lg) */}
          <div className="block lg:hidden w-full mb-1">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/70 bg-white">
              <img
                src="/images/home_sections/journey_student_mobile.png"
                alt="Indian Student Career Growth"
                className="w-full h-auto object-cover select-none"
              />
            </div>
          </div>

          {/* ═══ LEFT COLUMN (Roadmap Cards): lg:col-span-7 ═══ */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* ── Heading Row with Horizontal Divider Line ── */}
            <div className="flex items-center justify-between mb-2.5 sm:mb-4 px-1">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF] fill-[#0066FF]/20 shrink-0" />
                <h3 className="text-xs sm:text-[13px] lg:text-sm font-black tracking-wider uppercase text-[#0066FF]">
                  5-STEP PROGRESSIVE ROADMAP
                </h3>
              </div>
              {/* Thin horizontal divider line in between (Exact 1:1 match to reference screenshot) */}
              <div className="hidden sm:block flex-1 mx-3 lg:mx-4 h-[1px] bg-slate-200/90" />
              <span className="text-[10.5px] sm:text-xs font-bold text-slate-500 shrink-0">
                Goal-Oriented
              </span>
            </div>

            {/* ── 5 Vertically Connected Roadmap Cards ── */}
            <div className="relative flex flex-col justify-between flex-1 space-y-1 sm:space-y-1.5 lg:space-y-2">
              {steps.map((item, index) => {
                const StepIcon = item.Icon;

                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
                    className="relative flex items-stretch gap-2.5 sm:gap-3.5 py-0.5 sm:py-1 group"
                  >
                    {/* Left Column: Vertical Dashed Line & Number Circle */}
                    <div className="relative flex flex-col items-center justify-center shrink-0 w-7 sm:w-8 lg:w-9">
                      {/* Top Dashed Line Segment */}
                      <div
                        className={`w-0 flex-1 border-l-2 border-dashed ${
                          index === 4 ? 'border-rose-400' : 'border-sky-400'
                        } ${index === 0 ? 'opacity-90' : ''}`}
                      />

                      {/* Number Circle Badge */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full ${item.numBg} ${item.numShadow} text-white font-black text-xs sm:text-[13px] lg:text-sm flex items-center justify-center shrink-0 my-0.5 relative z-10 shadow-xs transition-transform duration-200 group-hover:scale-105`}
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
                      className="flex-1 min-w-0 bg-white rounded-2xl p-2.5 sm:p-3.5 lg:p-4 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-blue-200 transition-all cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <h4 className="text-[13px] sm:text-[14.5px] lg:text-[16px] font-black text-[#08152F] tracking-tight leading-snug">
                            {item.title}
                          </h4>
                          {item.isFinal && (
                            <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669] text-[9px] sm:text-[10px] font-black border border-[#a7f3d0]">
                              Goal
                            </span>
                          )}
                        </div>
                        <p className="text-[10.5px] sm:text-[11.5px] lg:text-[13px] text-slate-500 font-medium mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>

                      {/* Right Icon Box */}
                      <div
                        className={`w-8.5 h-8.5 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                      >
                        <StepIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5 stroke-[2.2]" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ═══ RIGHT COLUMN (Student Photo on Desktop): lg:col-span-5 ═══ */}
          <div className="hidden lg:flex lg:col-span-5 flex-col h-full">
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-200/70 bg-white flex items-center justify-center">
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
