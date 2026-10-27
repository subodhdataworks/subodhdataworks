import React, { useState } from 'react';
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Coins,
  Laptop,
  Cpu,
  Video,
  ShieldCheck,
  FolderGit2,
  Users,
  Clock,
  Frown,
  BookX,
  Hourglass,
  UserX,
  Settings2,
  Unlink2,
  Split,
  Layers,
  Flame,
  Check,
  X,
} from 'lucide-react';

interface MobileWhyChooseSectionProps {
  onExploreCourses?: () => void;
}

export const MobileWhyChooseSection: React.FC<MobileWhyChooseSectionProps> = ({
  onExploreCourses,
}) => {
  const [activeTab, setActiveTab] = useState<'both' | 'future' | 'others'>('both');

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

  const comparisonPoints = [
    {
      id: 1,
      topic: 'Course Fees',
      otherTitle: 'High Fees',
      otherDesc: '₹1,00,000 to ₹2,00,000 fees & heavy EMI pressure',
      otherIcon: Coins,
      futureTitle: 'Affordable Programs',
      futureDesc: 'Budget-friendly learning with zero fee pressure',
      futureIcon: Coins,
    },
    {
      id: 2,
      topic: 'Learning Style',
      otherTitle: 'Boring Lectures',
      otherDesc: 'Too much theory, little practical learning',
      otherIcon: Frown,
      futureTitle: 'Practical & Engaging Learning',
      futureDesc: 'Hands-on projects with live building',
      futureIcon: Laptop,
    },
    {
      id: 3,
      topic: 'Curriculum & Tools',
      otherTitle: 'Old Teaching Methods',
      otherDesc: 'Outdated content and legacy tools',
      otherIcon: BookX,
      futureTitle: 'Latest Tools & Modern Curriculum',
      futureDesc: 'Industry-relevant technologies & GenAI',
      futureIcon: Cpu,
    },
    {
      id: 4,
      topic: 'Lesson Format',
      otherTitle: 'Long & Sleepy Videos',
      otherDesc: 'Hours of unfocused lessons and fluff',
      otherIcon: Hourglass,
      futureTitle: 'Short & Focused Videos',
      futureDesc: 'Clear, structured explanations & fast learning',
      futureIcon: Video,
    },
    {
      id: 5,
      topic: 'Career Support',
      otherTitle: 'Limited Job Support',
      otherDesc: 'Admission-focused experience, no guidance',
      otherIcon: UserX,
      futureTitle: 'Placement Support',
      futureDesc: 'Resume & mock interview preparation',
      futureIcon: ShieldCheck,
    },
    {
      id: 6,
      topic: 'Project Exposure',
      otherTitle: 'Limited Projects',
      otherDesc: 'Less real-world exposure and toy demos',
      otherIcon: Settings2,
      futureTitle: '100+ Real-World Projects',
      futureDesc: 'Build a practical portfolio for top jobs',
      futureIcon: FolderGit2,
    },
    {
      id: 7,
      topic: 'Industry Network',
      otherTitle: 'Weak Industry Connections',
      otherDesc: 'Limited employer access & referrals',
      otherIcon: Unlink2,
      futureTitle: 'Industry Expert Guidance',
      futureDesc: 'Learn directly from working professionals',
      futureIcon: Users,
    },
    {
      id: 8,
      topic: 'Learning Pace',
      otherTitle: 'One-Size-Fits-All',
      otherDesc: 'Same rigid approach for every learner',
      otherIcon: Split,
      futureTitle: 'Flexible Learning',
      futureDesc: 'Study at your own pace anytime, anywhere',
      futureIcon: Clock,
    },
  ];

  return (
    <section className="w-full px-3.5 py-4 select-none">
      {/* ─── Luminous Light-Theme Container (Matching Reference) ─── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#EEF4FF] via-white to-[#F0F5FF] border border-blue-200/80 p-4 sm:p-5 shadow-sm">
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 bg-blue-400/15 blur-2xl pointer-events-none rounded-full" />

        {/* ─── 1. SECTION HEADER ─── */}
        <div className="text-center relative z-10">
          <h2 className="text-[24px] sm:text-[27px] font-black text-slate-900 tracking-tight leading-tight">
            Why Choose{' '}
            <span className="block mt-0.5 bg-gradient-to-r from-[#0066FF] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              FUTURE IT INDUSTRY?
            </span>
          </h2>
          <p className="text-[12px] sm:text-[13px] text-slate-600 font-semibold mt-1">
            Real Skills. Real Projects. Real Support. Real Careers.
          </p>
        </div>

        {/* ─── 2. CENTER CHARACTER VISUAL (10X Better Future) ─── */}
        <div className="relative z-10 mt-4 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50/70 to-indigo-50/50 border border-blue-200/60 p-3 shadow-sm">
          <div className="relative flex flex-col items-center">
            {/* 3D Student Artwork */}
            <div className="relative w-full max-w-[280px] h-[190px] rounded-xl overflow-hidden shadow-inner">
              <img
                src="/images/why_choose/why_choose_center_student.png"
                alt="Student 10X Better Future"
                className="w-full h-full object-cover object-center select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glowing 10X Better Future Circular/Pill Badge */}
            <div className="absolute -top-1 right-2 sm:right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-2xl shadow-lg shadow-blue-500/35 border border-white/30 text-center transform rotate-2">
              <span className="block text-[10px] font-black tracking-wide uppercase text-cyan-200">Same Course</span>
              <span className="block text-[12px] font-black leading-none">10X Better Future!</span>
            </div>
          </div>
        </div>

        {/* ─── 3. INTERACTIVE VIEW TOGGLE TABS ─── */}
        <div className="relative z-10 mt-5">
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100/90 rounded-2xl border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`py-1.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer truncate ${
                activeTab === 'both'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side (8)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('future')}
              className={`py-1.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer truncate ${
                activeTab === 'future'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Our Approach (8)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('others')}
              className={`py-1.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer truncate ${
                activeTab === 'others'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Other Institutes (8)
            </button>
          </div>
        </div>

        {/* ─── 4. COMPARISON CONTENT ─── */}
        <div className="relative z-10 mt-4 space-y-3">
          {/* A. SIDE-BY-SIDE PAIRED CARDS (Default View) */}
          {activeTab === 'both' && (
            <div className="space-y-3">
              {comparisonPoints.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs space-y-2.5"
                >
                  {/* Item Topic Header */}
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Comparison #{item.id} • {item.topic}
                    </span>
                  </div>

                  {/* Other Institutes (Red Theme) */}
                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-red-50/60 border border-red-200/70">
                    <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-bold text-red-900 leading-snug">
                        {item.otherTitle}
                      </span>
                      <span className="block text-[11px] text-red-700/80 font-medium leading-snug mt-0.5">
                        {item.otherDesc}
                      </span>
                    </div>
                  </div>

                  {/* Future IT Industry (Green Theme) */}
                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-300/80 shadow-2xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-black text-emerald-950 leading-snug">
                        {item.futureTitle}
                      </span>
                      <span className="block text-[11px] text-emerald-800 font-medium leading-snug mt-0.5">
                        {item.futureDesc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* B. FUTURE IT INDUSTRY ONLY (Green/Blue Theme - 8 items) */}
          {activeTab === 'future' && (
            <div className="rounded-2xl border border-emerald-200 bg-white p-3.5 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-100">
                <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-[11px] font-black tracking-wide uppercase">
                  FUTURE IT INDUSTRY
                </span>
                <span className="text-xs font-bold text-emerald-700">8 Proven Advantages</span>
              </div>

              <div className="space-y-2">
                {comparisonPoints.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-2.5 p-2 rounded-xl bg-emerald-50/50 border border-emerald-200/70"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-emerald-950">{item.futureTitle}</h4>
                      <p className="text-[11px] text-emerald-800 font-medium mt-0.5 leading-snug">
                        {item.futureDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* C. OTHER INSTITUTES ONLY (Red/Dark Grey Theme - 8 items) */}
          {activeTab === 'others' && (
            <div className="rounded-2xl border border-red-200 bg-white p-3.5 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 pb-2 border-b border-red-100">
                <span className="px-2.5 py-1 rounded-full bg-slate-800 text-white text-[11px] font-black tracking-wide uppercase">
                  Other Institutes
                </span>
                <span className="text-xs font-bold text-red-700">8 Common Student Frustrations</span>
              </div>

              <div className="space-y-2">
                {comparisonPoints.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-2.5 p-2 rounded-xl bg-red-50/50 border border-red-200/70"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-red-950">{item.otherTitle}</h4>
                      <p className="text-[11px] text-red-700/80 font-medium mt-0.5 leading-snug">
                        {item.otherDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ─── 5. BOTTOM CTA (Matching Reference) ─── */}
        <div className="relative z-10 mt-5 pt-3 text-center">
          <button
            type="button"
            onClick={handleScrollToCourses}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#4F46E5] text-white font-black text-xs sm:text-[13px] shadow-lg shadow-blue-500/35 hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-white/20"
          >
            <span>Explore Our Career Programs</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
