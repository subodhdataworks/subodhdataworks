import React, { useState } from 'react';
import {
  ArrowRight,
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
  Check,
  X,
  Sparkles,
} from 'lucide-react';

interface MobileWhyChooseSectionProps {
  onExploreCourses?: () => void;
}

export const MobileWhyChooseSection: React.FC<MobileWhyChooseSectionProps> = ({
  onExploreCourses,
}) => {
  // Only two clean views: 'future' (Our Approach) or 'others' (Other Institutes). Side-by-side deleted.
  const [activeTab, setActiveTab] = useState<'future' | 'others'>('future');

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

  const futurePoints = [
    {
      id: 1,
      title: 'Affordable Programs',
      desc: 'Budget-friendly learning with zero fee pressure or heavy EMIs',
      icon: Coins,
    },
    {
      id: 2,
      title: 'Practical & Engaging Learning',
      desc: 'Hands-on projects with live building, no dry boring lectures',
      icon: Laptop,
    },
    {
      id: 3,
      title: 'Latest Tools & Modern Curriculum',
      desc: 'Always updated with industry-relevant GenAI & cloud tech trends',
      icon: Cpu,
    },
    {
      id: 4,
      title: 'Short & Focused Videos',
      desc: 'Clear, structured explanations so you learn faster without fluff',
      icon: Video,
    },
    {
      id: 5,
      title: 'Placement Support',
      desc: 'Resume reviews, mock technical interviews & hiring partners',
      icon: ShieldCheck,
    },
    {
      id: 6,
      title: '100+ Real-World Projects',
      desc: 'Build a practical production portfolio to showcase to recruiters',
      icon: FolderGit2,
    },
    {
      id: 7,
      title: 'Industry Expert Guidance',
      desc: 'Learn directly from active working professionals and mentors',
      icon: Users,
    },
    {
      id: 8,
      title: 'Flexible Learning',
      desc: 'Study at your own schedule, anytime, anywhere on any device',
      icon: Clock,
    },
  ];

  const otherPoints = [
    {
      id: 1,
      title: 'High Fees',
      desc: '₹1,00,000 to ₹2,00,000 course fees & heavy monthly EMI pressure',
      icon: Coins,
    },
    {
      id: 2,
      title: 'Boring Lectures',
      desc: 'Same old dry theory with little to no practical learning',
      icon: Frown,
    },
    {
      id: 3,
      title: 'Old Teaching Methods',
      desc: 'Outdated legacy content and tools not used in modern jobs',
      icon: BookX,
    },
    {
      id: 4,
      title: 'Long & Sleepy Videos',
      desc: 'Hours of unfocused lectures that waste precious learning time',
      icon: Hourglass,
    },
    {
      id: 5,
      title: 'Limited Job Support',
      desc: 'Admission-focused experience with little guidance after payment',
      icon: UserX,
    },
    {
      id: 6,
      title: 'Limited Projects',
      desc: 'Toy demos with no real-world deployment or portfolio exposure',
      icon: Settings2,
    },
    {
      id: 7,
      title: 'Weak Industry Connections',
      desc: 'Hard to access real employers or get genuine career referrals',
      icon: Unlink2,
    },
    {
      id: 8,
      title: 'One-Size-Fits-All',
      desc: 'Same rigid batch schedule for everyone regardless of pace',
      icon: Split,
    },
  ];

  return (
    <section className="w-full px-2.5 sm:px-3.5 py-3.5 select-none box-border overflow-hidden">
      {/* ─── Luminous Light-Theme Container ─── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#EEF4FF] via-white to-[#F0F5FF] border border-blue-200/80 p-3.5 sm:p-4 shadow-sm">
        {/* Soft Ambient Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 bg-blue-400/10 blur-2xl pointer-events-none rounded-full" />

        {/* ─── 1. SECTION HEADER ─── */}
        <div className="text-center relative z-10">
          <h2 className="text-[22px] sm:text-[25px] font-black text-slate-900 tracking-tight leading-tight">
            Why Choose{' '}
            <span className="block mt-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              FUTURE IT INDUSTRY?
            </span>
          </h2>
          <p className="text-[11px] sm:text-[12px] text-slate-600 font-semibold mt-1">
            Real Skills. Real Projects. Real Support. Real Careers.
          </p>
        </div>

        {/* ─── 2. CENTER REAL HUMAN VISUAL (Same Course 10X Better Future) ─── */}
        <div className="relative z-10 mt-3.5 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50/70 to-indigo-50/50 border border-blue-200/60 p-2.5 shadow-2xs">
          <div className="relative flex flex-col items-center">
            {/* Real Human Student Photograph */}
            <div className="relative w-full max-w-[280px] h-[180px] sm:h-[200px] rounded-xl overflow-hidden shadow-sm bg-slate-900">
              <img
                src="/images/why_choose/why_choose_real_student.png"
                alt="Real Indian Student at Future IT Industry"
                className="w-full h-full object-cover object-[center_20%] select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glowing 10X Better Future Floating Badge */}
            <div className="absolute -top-1 right-2 sm:right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-2xl shadow-md shadow-blue-500/25 border border-white/40 text-center transform rotate-1">
              <span className="block text-[9.5px] font-black tracking-wide uppercase text-cyan-200">Same Course</span>
              <span className="block text-[11.5px] font-black leading-none">10X Better Future!</span>
            </div>
          </div>
        </div>

        {/* ─── 3. CLEAN 2-TAB TOGGLE (Side-by-Side Removed) ─── */}
        <div className="relative z-10 mt-4">
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('future')}
              className={`py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 truncate ${
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
              className={`py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 truncate ${
                activeTab === 'others'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <X className="w-3.5 h-3.5 stroke-[3]" />
              <span>Other Institutes (8)</span>
            </button>
          </div>
        </div>

        {/* ─── 4. COMPARISON CONTENT (Clear List) ─── */}
        <div className="relative z-10 mt-3.5">
          {/* TAB 1: FUTURE IT INDUSTRY (8 Proven Advantages) */}
          {activeTab === 'future' && (
            <div className="rounded-2xl border border-emerald-200 bg-white p-3 sm:p-3.5 shadow-2xs space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black text-emerald-950 uppercase tracking-wide">
                    Future IT Industry
                  </span>
                </div>
                <span className="text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  8 Proven Advantages
                </span>
              </div>

              <div className="space-y-2 pt-0.5">
                {futurePoints.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-2.5 p-2 rounded-xl bg-emerald-50/50 border border-emerald-200/70"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[12px] sm:text-xs font-black text-emerald-950 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-[10.5px] text-emerald-800 font-medium mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: OTHER INSTITUTES (8 Common Student Frustrations) */}
          {activeTab === 'others' && (
            <div className="rounded-2xl border border-red-200 bg-white p-3 sm:p-3.5 shadow-2xs space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-red-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-xs font-black text-red-950 uppercase tracking-wide">
                    Other Institutes
                  </span>
                </div>
                <span className="text-[10.5px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                  8 Common Frustrations
                </span>
              </div>

              <div className="space-y-2 pt-0.5">
                {otherPoints.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-2.5 p-2 rounded-xl bg-red-50/50 border border-red-200/70"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[12px] sm:text-xs font-bold text-red-950 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-[10.5px] text-red-700/80 font-medium mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ─── 5. BOTTOM CTA ─── */}
        <div className="relative z-10 mt-4 pt-2 text-center">
          <button
            type="button"
            onClick={handleScrollToCourses}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#4F46E5] text-white font-black text-xs shadow-md shadow-blue-500/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-white/20"
          >
            <span>Explore Our Career Programs</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
