import React from 'react';
import { motion } from 'framer-motion';
import {
  Laptop,
  BookOpen,
  Code2,
  UserCheck,
  BarChart3,
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
    <section className="w-full px-3 sm:px-6 lg:px-8 py-4 sm:py-6 select-none box-border">
      {/* ─── Outer Container with Light Blue-White Background ─── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-[#f0f6ff] via-[#f8faff] to-[#eef4ff] border border-blue-100/90 p-3 sm:p-5 md:p-6 shadow-xs relative overflow-hidden"
      >
        {/* Soft Ambient Background Glows */}
        <div className="absolute -top-16 -left-16 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

        {/* ─── TITLE ABOVE IMAGE ─── */}
        <div className="mb-2.5 sm:mb-3 px-1 sm:px-1.5 relative z-10">
          <h2 className="text-[13px] sm:text-[15px] md:text-base font-black text-slate-900 tracking-tight leading-snug">
            A simple path to a successful career with{' '}
            <span className="text-[#1a73e8] font-black">Future IT Industry.</span>
          </h2>
        </div>

        {/* ─── 1. TOP STUDENT IMAGE (Large Rounded Rectangular with Subtle Shadow) ─── */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-200/70 bg-slate-900 group">
          <img
            src="/images/home_sections/journey_student_hero.png"
            alt="Indian Student Career Growth"
            className="w-full h-[180px] sm:h-[230px] md:h-[260px] lg:h-[280px] object-cover object-[center_20%] select-none transition-transform duration-700 group-hover:scale-[1.01]"
          />
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none" />

          {/* Floating Dream Job Badge (Top Right) */}
          <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 bg-white/95 backdrop-blur-md border border-white/90 rounded-2xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-right shadow-md flex items-center gap-2 select-none pointer-events-none">
            <div className="text-right leading-tight">
              <span className="block text-[8.5px] sm:text-[9.5px] font-black tracking-wider text-[#1a73e8] uppercase">
                DREAM JOB
              </span>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="text-[11px] sm:text-[13px] font-black text-slate-900 tracking-tight">
                  Higher Salary
                </span>
                <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/70">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </div>
              </div>
              <span className="block text-[9px] sm:text-[10px] font-bold text-[#7c3aed] mt-0.5">
                Better Future
              </span>
            </div>
          </div>
        </div>

        {/* ─── 2. HEADING ROW (Just below image) ─── */}
        <div className="flex items-center justify-between mt-3.5 sm:mt-4 mb-2.5 sm:mb-3 px-1 sm:px-1.5 relative z-10">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#1a73e8] fill-[#1a73e8]/20 shrink-0" />
            <h3 className="text-xs sm:text-[13px] font-black tracking-wider uppercase text-[#1a73e8]">
              5-STEP PROGRESSIVE ROADMAP
            </h3>
          </div>
          <span className="text-[10.5px] sm:text-xs font-bold text-slate-500">
            Goal-Oriented
          </span>
        </div>

        {/* ─── 3. FIVE VERTICALLY CONNECTED ROADMAP CARDS ─── */}
        <div className="relative z-10 flex flex-col">
          {steps.map((item, index) => {
            const StepIcon = item.Icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.06 }}
                className="relative flex items-stretch gap-2.5 sm:gap-3.5 py-1 sm:py-1.5 group"
              >
                {/* Left Column: Vertical Dashed Line & Number Circle */}
                <div className="relative flex flex-col items-center justify-center shrink-0 w-7 sm:w-8">
                  {/* Top Dashed Line Segment */}
                  <div
                    className={`w-0 flex-1 border-l-2 border-dashed ${
                      index === 4 ? 'border-rose-400' : 'border-sky-400'
                    } ${index === 0 ? 'opacity-90' : ''}`}
                  />

                  {/* Number Circle Badge */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${item.numBg} ${item.numShadow} text-white font-black text-xs sm:text-[13px] flex items-center justify-center shrink-0 my-0.5 relative z-10 shadow-xs transition-transform duration-200 group-hover:scale-105`}
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
                  className="flex-1 min-w-0 bg-white rounded-2xl p-2.5 sm:p-3.5 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-blue-200 transition-all cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <h4 className="text-[13px] sm:text-[14.5px] font-black text-[#08152F] tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      {item.isFinal && (
                        <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669] text-[9px] sm:text-[10px] font-black border border-[#a7f3d0]">
                          Goal
                        </span>
                      )}
                    </div>
                    <p className="text-[10.5px] sm:text-[11.5px] text-slate-500 font-medium mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right Icon Box */}
                  <div
                    className={`w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    <StepIcon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
