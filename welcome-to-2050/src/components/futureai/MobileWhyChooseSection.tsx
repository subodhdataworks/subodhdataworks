import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  IndianRupee,
  Laptop,
  Building,
  Trophy,
  Users,
  FolderKanban,
  MessagesSquare,
  Clock,
  Briefcase,
  Code,
  UserX,
  Folder,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

interface MobileWhyChooseSectionProps {
  onExploreCourses?: () => void;
}

export const MobileWhyChooseSection: React.FC<MobileWhyChooseSectionProps> = ({
  onExploreCourses,
}) => {
  // Mobile tab state: 'others' or 'future' (Other Institutes first)
  const [activeTab, setActiveTab] = useState<'others' | 'future'>('others');

  const handleScrollToCourses = () => {
    if (onExploreCourses) {
      onExploreCourses();
      return;
    }
    const target =
      document.getElementById('career-programs') ||
      document.getElementById('courses') ||
      document.querySelector('[data-course-id]');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const futurePoints = [
    {
      id: 1,
      title: 'Affordable Programs',
      desc: 'Budget-friendly learning with zero fee pressure or heavy EMIs',
      Icon: IndianRupee,
    },
    {
      id: 2,
      title: 'Practical & Engaging Learning',
      desc: 'Hands-on projects with live building, no dry boring lectures',
      Icon: Laptop,
    },
    {
      id: 3,
      title: 'Industry Internship',
      desc: 'Hands-on company internship experience & verified completion certificate',
      Icon: Building,
    },
    {
      id: 4,
      title: 'Unlimited DSA Coding Practice',
      desc: 'Compete in live coding hackathons & master DSA problems daily',
      Icon: Trophy,
    },
    {
      id: 5,
      title: 'Placement Support',
      desc: 'Resume reviews, employer referrals & direct hiring partner access',
      Icon: Users,
    },
    {
      id: 6,
      title: '100+ Real-World Projects',
      desc: 'Build a practical production portfolio to showcase to recruiters',
      Icon: FolderKanban,
    },
    {
      id: 7,
      title: 'Unlimited Mock Interviews',
      desc: '1-on-1 technical & HR mock interview sessions until you get placed',
      Icon: MessagesSquare,
    },
    {
      id: 8,
      title: 'Flexible Learning',
      desc: 'Study at your own schedule, anytime, anywhere on any device',
      Icon: Clock,
    },
  ];

  const otherPoints = [
    {
      id: 1,
      title: 'High Fees',
      desc: '₹1,00,000 to ₹2,00,000 course fees & heavy monthly EMI pressure',
      Icon: IndianRupee,
    },
    {
      id: 2,
      title: 'Boring Lectures',
      desc: 'Same old dry theory with little to no practical learning',
      Icon: Laptop,
    },
    {
      id: 3,
      title: 'No Internship Experience',
      desc: 'Only academic theory, zero company internship or verified work certificates',
      Icon: Briefcase,
    },
    {
      id: 4,
      title: 'No Hackathons or DSA Practice',
      desc: 'Zero competitive coding events or structured problem-solving practice',
      Icon: Code,
    },
    {
      id: 5,
      title: 'Limited Job Support',
      desc: 'Admission-focused experience with little guidance after payment',
      Icon: UserX,
    },
    {
      id: 6,
      title: 'Limited Projects',
      desc: 'Toy demos with no real-world deployment or portfolio exposure',
      Icon: Folder,
    },
    {
      id: 7,
      title: 'Zero Mock Interview Practice',
      desc: 'No 1-on-1 interview practice, students face real interviews unprepared',
      Icon: MessagesSquare,
    },
    {
      id: 8,
      title: 'One-Size-Fits-All',
      desc: 'Same rigid batch schedule for everyone regardless of pace',
      Icon: Clock,
    },
  ];

  // Component for the Future IT Industry Card (Animated & Premium)
  const FutureCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative rounded-2xl sm:rounded-3xl border border-emerald-300/90 bg-gradient-to-b from-white via-emerald-50/20 to-white p-3 sm:p-4 lg:p-4.5 shadow-[0_4px_20px_rgba(16,185,129,0.08)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.16)] flex flex-col justify-between h-full transition-all duration-300 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10">
        <div className="flex items-center justify-between pb-2 sm:pb-2.5 border-b border-emerald-100/90">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-xs" />
            </span>
            <h3 className="text-xs sm:text-[13px] lg:text-[14px] font-black text-slate-900 uppercase tracking-wider">
              FUTURE IT INDUSTRY
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-black text-emerald-700 bg-emerald-100/80 px-2.5 sm:px-3 py-0.5 rounded-full border border-emerald-300/70 shadow-2xs">
            <Sparkles className="w-2.5 h-2.5 text-emerald-600 animate-pulse" />
            <span>8 Proven Advantages</span>
          </span>
        </div>

        {/* Visual Banner */}
        <div className="relative mt-2.5 sm:mt-3 rounded-xl sm:rounded-2xl overflow-hidden border border-emerald-200/80 shadow-xs bg-slate-900 group">
          <img
            src="/images/why_choose/why_choose_success_desktop.jpg"
            alt="Future IT Industry Student Success"
            className="w-full h-[120px] sm:h-[135px] lg:h-[145px] object-cover select-none transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none" />

          {/* Floating Badge 1: Top-Left (Micro-Animated) */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-white/95 backdrop-blur-md rounded-lg p-0.5 sm:p-1 shadow-xs border border-white/90 flex items-center gap-1 pointer-events-none select-none"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <div className="leading-tight text-left pr-1">
              <span className="block text-[7.5px] sm:text-[8.5px] font-black text-slate-900 leading-none">Placed</span>
              <span className="block text-[6.5px] sm:text-[7.5px] font-medium text-slate-500 leading-tight">in Top MNCs</span>
            </div>
          </motion.div>

          {/* Floating Badge 2: Bottom-Left (Micro-Animated) */}
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 bg-white/95 backdrop-blur-md rounded-lg p-0.5 sm:p-1 shadow-xs border border-white/90 flex items-center gap-1 pointer-events-none select-none"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <div className="leading-tight text-left pr-1">
              <span className="block text-[7.5px] sm:text-[8.5px] font-black text-slate-900 leading-none">High Salary</span>
              <span className="block text-[6.5px] sm:text-[7.5px] font-medium text-emerald-600 leading-tight">Better Future</span>
            </div>
          </motion.div>

          {/* Floating Badge 3: Top-Right (Micro-Animated) */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-white/95 backdrop-blur-md rounded-lg p-0.5 sm:p-1 shadow-xs border border-white/90 flex items-center gap-1 pointer-events-none select-none"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Code className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <div className="leading-tight text-left pr-1">
              <span className="block text-[7.5px] sm:text-[8.5px] font-black text-slate-900 leading-none">Real Projects</span>
              <span className="block text-[6.5px] sm:text-[7.5px] font-medium text-slate-500 leading-tight">Real Skills</span>
            </div>
          </motion.div>

          {/* Floating Badge 4: Bottom-Right (Micro-Animated) */}
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-white/95 backdrop-blur-md rounded-lg p-0.5 sm:p-1 shadow-xs border border-white/90 flex items-center gap-1 pointer-events-none select-none"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <div className="leading-tight text-left pr-1">
              <span className="block text-[7.5px] sm:text-[8.5px] font-black text-slate-900 leading-none">100% Support</span>
              <span className="block text-[6.5px] sm:text-[7.5px] font-medium text-slate-500 leading-tight">Till Placement</span>
            </div>
          </motion.div>
        </div>

        {/* 8 Items List (Animated Stagger + Interactive Hover) */}
        <div className="divide-y divide-emerald-100/70 mt-1.5 sm:mt-2">
          {futurePoints.map((item, index) => {
            const ItemIcon = item.Icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10px' }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
                whileHover={{ x: 4, backgroundColor: 'rgba(236, 253, 245, 0.7)' }}
                className="group flex items-center gap-2 sm:gap-2.5 py-1.5 sm:py-1.8 rounded-lg px-1.5 transition-all duration-200 cursor-default"
              >
                {/* Green Check Circle (Animated on hover) */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs shadow-emerald-500/30 group-hover:bg-emerald-600 transition-colors"
                >
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                </motion.div>

                {/* Soft Green Rounded Icon Box */}
                <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/80 group-hover:bg-emerald-100/80 group-hover:scale-105 transition-all">
                  <ItemIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.2]" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-[11.5px] sm:text-[12px] lg:text-[12.5px] font-black text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[9.5px] sm:text-[10px] lg:text-[10.5px] text-slate-500 group-hover:text-slate-600 font-medium leading-snug mt-0.2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );

  // Component for the Other Institutes Card (Compact)
  const OthersCard = () => (
    <div className="rounded-2xl sm:rounded-3xl border border-rose-200/90 bg-white p-3 sm:p-4 lg:p-4.5 shadow-[0_2px_12px_rgba(244,63,94,0.06)] flex flex-col justify-between h-full">
      {/* Header Bar */}
      <div>
        <div className="flex items-center justify-between pb-2 sm:pb-2.5 border-b border-rose-100/80">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-500 shrink-0" />
            <h3 className="text-xs sm:text-[13px] lg:text-[14px] font-black text-slate-900 uppercase tracking-wider">
              OTHER INSTITUTES
            </h3>
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-rose-700 bg-rose-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-rose-200/70">
            8 Common Frustrations
          </span>
        </div>

        {/* Visual Banner */}
        <div className="relative mt-2.5 sm:mt-3 rounded-xl sm:rounded-2xl overflow-hidden border border-rose-100 shadow-2xs bg-slate-900 group">
          <img
            src="/images/why_choose/why_choose_frustrated_desktop.jpg"
            alt="Other Institutes Common Frustrations"
            className="w-full h-[120px] sm:h-[135px] lg:h-[145px] object-cover select-none transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* 8 Items List (Compact) */}
        <div className="divide-y divide-rose-50/90 mt-1.5 sm:mt-2">
          {otherPoints.map((item) => {
            const ItemIcon = item.Icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-2 sm:gap-2.5 py-1.5 sm:py-1.8 hover:bg-rose-50/40 rounded-lg px-1 transition-colors"
              >
                {/* Red X Circle */}
                <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                </div>

                {/* Soft Red Rounded Icon Box */}
                <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-md bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 border border-rose-100/80">
                  <ItemIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.2]" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-[11.5px] sm:text-[12px] lg:text-[12.5px] font-black text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[9.5px] sm:text-[10px] lg:text-[10.5px] text-slate-500 font-medium leading-snug mt-0.2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 select-none box-border">
      {/* ─── SECTION HEADER (Compact) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="text-center mb-4 sm:mb-5 lg:mb-6"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Why Choose{' '}
          <span className="block mt-0.5 bg-gradient-to-r from-[#0066FF] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent font-black tracking-tight">
            FUTURE IT INDUSTRY?
          </span>
        </h2>
        <p className="text-[11px] sm:text-xs md:text-[13px] text-slate-500 font-medium mt-1">
          Real Skills. Real Projects. Real Support. Real Careers.
        </p>
      </motion.div>

      {/* ─── MOBILE TAB TOGGLE (< lg) ─── */}
      <div className="block lg:hidden mb-3.5 sm:mb-4 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-1 p-0.8 bg-slate-100/90 rounded-xl border border-slate-200/80 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('others')}
            className={`py-1.5 px-2.5 rounded-lg text-xs sm:text-[12.5px] font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 truncate ${
              activeTab === 'others'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <X className="w-3 h-3 stroke-[3]" />
            <span>Other Institutes (8)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('future')}
            className={`py-1.5 px-2.5 rounded-lg text-xs sm:text-[12.5px] font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 truncate ${
              activeTab === 'future'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Check className="w-3 h-3 stroke-[3]" />
            <span>Future IT (8)</span>
          </button>
        </div>
      </div>

      {/* ─── MOBILE VIEW (< lg): Active Tab Card ─── */}
      <div className="block lg:hidden">
        {activeTab === 'others' ? <OthersCard /> : <FutureCard />}
      </div>

      {/* ─── DESKTOP VIEW (>= lg): 2-Column Side-by-Side Comparison (Other Institutes First, Then Future IT) ─── */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-4 lg:gap-5 items-stretch">
        <OthersCard />
        <FutureCard />
      </div>

      {/* ─── BOTTOM CTA (Compact) ─── */}
      <div className="mt-4 sm:mt-5 text-center">
        <button
          type="button"
          onClick={handleScrollToCourses}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#4F46E5] text-white font-black text-xs sm:text-[13px] shadow-sm shadow-blue-500/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-white/20"
        >
          <span>Explore Our Career Programs</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};
