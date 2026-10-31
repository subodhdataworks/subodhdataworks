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
} from 'lucide-react';

interface MobileWhyChooseSectionProps {
  onExploreCourses?: () => void;
}

export const MobileWhyChooseSection: React.FC<MobileWhyChooseSectionProps> = ({
  onExploreCourses,
}) => {
  // Mobile tab state: 'future' or 'others'
  const [activeTab, setActiveTab] = useState<'future' | 'others'>('future');

  const handleScrollToCourses = () => {
    if (onExploreCourses) {
      onExploreCourses();
      return;
    }
    const target =
      document.getElementById('career-programs') ||
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
      title: 'Unlimited Hackathons & DSA Practice',
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

  // Component for the Future IT Industry Card
  const FutureCard = () => (
    <div className="rounded-3xl border border-emerald-200/90 bg-white p-3.5 sm:p-5 lg:p-6 shadow-[0_2px_12px_rgba(16,185,129,0.06)] flex flex-col justify-between h-full">
      {/* Header Bar */}
      <div>
        <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-emerald-100/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <h3 className="text-xs sm:text-[13.5px] lg:text-[15px] font-black text-slate-900 uppercase tracking-wider">
              FUTURE IT INDUSTRY
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-200/70">
            8 Proven Advantages
          </span>
        </div>

        {/* Visual Banner */}
        <div className="relative mt-3 sm:mt-3.5 rounded-2xl overflow-hidden border border-emerald-100 shadow-2xs bg-slate-900 group">
          <img
            src="/images/why_choose/why_choose_success_desktop.jpg"
            alt="Future IT Industry Student Success"
            className="w-full h-[165px] sm:h-[195px] lg:h-[210px] object-cover select-none transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none" />

          {/* Floating Badge 1: Top-Left (Placed in Top Companies) */}
          <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 bg-white/95 backdrop-blur-md rounded-xl p-1 sm:p-1.5 shadow-md border border-white/90 flex items-center gap-1.5 pointer-events-none select-none">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div className="leading-tight text-left">
              <span className="block text-[8.5px] sm:text-[9.5px] font-black text-slate-900 leading-none">Placed</span>
              <span className="block text-[7.5px] sm:text-[8.5px] font-medium text-slate-500 leading-tight">in Top Companies</span>
            </div>
          </div>

          {/* Floating Badge 2: Bottom-Left (High Salary Better Future) */}
          <div className="absolute bottom-2 left-2 sm:bottom-2.5 sm:left-2.5 bg-white/95 backdrop-blur-md rounded-xl p-1 sm:p-1.5 shadow-md border border-white/90 flex items-center gap-1.5 pointer-events-none select-none">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div className="leading-tight text-left">
              <span className="block text-[8.5px] sm:text-[9.5px] font-black text-slate-900 leading-none">High Salary</span>
              <span className="block text-[7.5px] sm:text-[8.5px] font-medium text-emerald-600 leading-tight">Better Future</span>
            </div>
          </div>

          {/* Floating Badge 3: Top-Right (Real Projects Real Skills) */}
          <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 bg-white/95 backdrop-blur-md rounded-xl p-1 sm:p-1.5 shadow-md border border-white/90 flex items-center gap-1.5 pointer-events-none select-none">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div className="leading-tight text-left">
              <span className="block text-[8.5px] sm:text-[9.5px] font-black text-slate-900 leading-none">Real Projects</span>
              <span className="block text-[7.5px] sm:text-[8.5px] font-medium text-slate-500 leading-tight">Real Skills</span>
            </div>
          </div>

          {/* Floating Badge 4: Bottom-Right (Support Till You Get Placed) */}
          <div className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 bg-white/95 backdrop-blur-md rounded-xl p-1 sm:p-1.5 shadow-md border border-white/90 flex items-center gap-1.5 pointer-events-none select-none">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div className="leading-tight text-left">
              <span className="block text-[8.5px] sm:text-[9.5px] font-black text-slate-900 leading-none">Support</span>
              <span className="block text-[7.5px] sm:text-[8.5px] font-medium text-slate-500 leading-tight">Till You Get Placed</span>
            </div>
          </div>
        </div>

        {/* 8 Items List */}
        <div className="divide-y divide-emerald-50/90 mt-2 sm:mt-3">
          {futurePoints.map((item) => {
            const ItemIcon = item.Icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-2.5 sm:gap-3 py-2 sm:py-2.5 hover:bg-emerald-50/40 rounded-xl px-1 sm:px-1.5 transition-colors"
              >
                {/* Green Check Circle */}
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                </div>

                {/* Soft Green Rounded Icon Box */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/80">
                  <ItemIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-[12px] sm:text-[13px] lg:text-[13.5px] font-black text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] lg:text-[11.5px] text-slate-500 font-medium leading-snug mt-0.5">
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

  // Component for the Other Institutes Card
  const OthersCard = () => (
    <div className="rounded-3xl border border-rose-200/90 bg-white p-3.5 sm:p-5 lg:p-6 shadow-[0_2px_12px_rgba(244,63,94,0.06)] flex flex-col justify-between h-full">
      {/* Header Bar */}
      <div>
        <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-rose-100/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
            <h3 className="text-xs sm:text-[13.5px] lg:text-[15px] font-black text-slate-900 uppercase tracking-wider">
              OTHER INSTITUTES
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-rose-700 bg-rose-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-rose-200/70">
            8 Common Frustrations
          </span>
        </div>

        {/* Visual Banner */}
        <div className="relative mt-3 sm:mt-3.5 rounded-2xl overflow-hidden border border-rose-100 shadow-2xs bg-slate-900 group">
          <img
            src="/images/why_choose/why_choose_frustrated_desktop.jpg"
            alt="Other Institutes Common Frustrations"
            className="w-full h-[165px] sm:h-[195px] lg:h-[210px] object-cover select-none transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* 8 Items List */}
        <div className="divide-y divide-rose-50/90 mt-2 sm:mt-3">
          {otherPoints.map((item) => {
            const ItemIcon = item.Icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-2.5 sm:gap-3 py-2 sm:py-2.5 hover:bg-rose-50/40 rounded-xl px-1 sm:px-1.5 transition-colors"
              >
                {/* Red X Circle */}
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                </div>

                {/* Soft Red Rounded Icon Box */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 border border-rose-100/80">
                  <ItemIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-[12px] sm:text-[13px] lg:text-[13.5px] font-black text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] lg:text-[11.5px] text-slate-500 font-medium leading-snug mt-0.5">
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
    <section className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 select-none box-border">
      {/* ─── SECTION HEADER (Exact Match to Reference Screenshot) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-6 sm:mb-8 lg:mb-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Why Choose{' '}
          <span className="block mt-0.5 sm:mt-1 bg-gradient-to-r from-[#0066FF] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent font-black tracking-tight">
            FUTURE IT INDUSTRY?
          </span>
        </h2>
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-500 font-medium mt-1.5 sm:mt-2">
          Real Skills. Real Projects. Real Support. Real Careers.
        </p>
      </motion.div>

      {/* ─── MOBILE TAB TOGGLE (< lg) ─── */}
      <div className="block lg:hidden mb-4 sm:mb-5 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('future')}
            className={`py-2 px-3 rounded-xl text-xs sm:text-[13px] font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 truncate ${
              activeTab === 'future'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            <span>Future IT Industry (8)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('others')}
            className={`py-2 px-3 rounded-xl text-xs sm:text-[13px] font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 truncate ${
              activeTab === 'others'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <X className="w-3.5 h-3.5 stroke-[3]" />
            <span>Other Institutes (8)</span>
          </button>
        </div>
      </div>

      {/* ─── MOBILE VIEW (< lg): Active Tab Card ─── */}
      <div className="block lg:hidden">
        {activeTab === 'future' ? <FutureCard /> : <OthersCard />}
      </div>

      {/* ─── DESKTOP VIEW (>= lg): 2-Column Side-by-Side Comparison ─── */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-6 items-stretch">
        <FutureCard />
        <OthersCard />
      </div>

      {/* ─── BOTTOM CTA ─── */}
      <div className="mt-6 sm:mt-8 text-center">
        <button
          type="button"
          onClick={handleScrollToCourses}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#4F46E5] text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-white/20"
        >
          <span>Explore Our Career Programs</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};
