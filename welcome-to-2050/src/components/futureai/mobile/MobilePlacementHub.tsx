import React, { useState } from 'react';
import {
  ArrowLeft,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Building2,
  MapPin,
  IndianRupee,
  ChevronRight,
  Bot,
  Gamepad2,
  CheckCircle2,
  Award,
  TrendingUp,
  FileText,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';

export interface MobilePlacementHubProps {
  userName?: string;
  onStartMockInterview: () => void;
  onPlayGames: () => void;
  onNavigateBack: () => void;
  onOpenAdvisor?: () => void;
}

export const MobilePlacementHub: React.FC<MobilePlacementHubProps> = ({
  userName = 'Learner',
  onStartMockInterview,
  onPlayGames,
  onNavigateBack,
  onOpenAdvisor,
}) => {
  const [activeJobTab, setActiveJobTab] = useState<'all' | 'python' | 'analytics' | 'remote'>('all');

  const playTactile = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.exponentialRampToValueAtTime(350, now + 0.05);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // fallback
    }
  };

  const jobDrives = [
    {
      id: 1,
      title: 'Python & AI Engineer',
      company: 'Swiggy / Tech Partner',
      package: '₹8.5 – 12.0 LPA',
      location: 'Bengaluru / Remote',
      type: 'remote',
      skills: ['Python', 'FastAPI', 'LLMs', 'Problem Solving'],
      badge: 'High Match 94%',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    },
    {
      id: 2,
      title: 'Junior Data Analyst',
      company: 'Fractal Analytics',
      package: '₹6.5 – 9.0 LPA',
      location: 'Hyderabad / Hybrid',
      type: 'analytics',
      skills: ['Python', 'SQL', 'Data Cleaning', 'Power BI'],
      badge: 'Immediate Join',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    },
    {
      id: 3,
      title: 'Full Stack Python Developer',
      company: 'Tech Mahindra',
      package: '₹7.0 – 11.0 LPA',
      location: 'Pune / Noida',
      type: 'python',
      skills: ['Python', 'Django/Flask', 'PostgreSQL', 'APIs'],
      badge: 'Direct Drive',
      badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    },
    {
      id: 4,
      title: 'AI Automation Specialist',
      company: 'GrowthX Innovations',
      package: '₹10.0 – 15.0 LPA',
      location: 'Remote (Pan India)',
      type: 'remote',
      skills: ['GenAI', 'Python Scripting', 'API Integration'],
      badge: 'Dream Role',
      badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    },
  ];

  const filteredJobs = activeJobTab === 'all'
    ? jobDrives
    : jobDrives.filter((j) => j.type === activeJobTab || (activeJobTab === 'python' && j.title.toLowerCase().includes('python')));

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 pb-36 select-none">

      {/* ─── 1. ANDROID TOP APP BAR ─── */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              playTactile();
              onNavigateBack();
            }}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-200 active:scale-95 transition-all"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-black text-white leading-tight flex items-center gap-1.5">
              <span>Placement Portal</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/30">
                100% JOB
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 font-semibold">
              ₹6 – 15 LPA Guarantee • 700+ Partners
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>PAP Verified</span>
        </div>
      </header>

      {/* ─── MAIN CONTENT SCROLL AREA ─── */}
      <div className="px-4 pt-3.5 space-y-4">

        {/* ─── 2. FINTECH / EXECUTIVE CAREER GUARANTEE HERO CARD ─── */}
        <div className="relative overflow-hidden rounded-3xl p-5 bg-gradient-to-br from-slate-900 via-sky-950/60 to-slate-900 border border-sky-500/30 shadow-2xl">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-3 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400">
                  Guaranteed Placement Track
                </span>
                <h2 className="text-sm font-black text-white">Pay After Placement (PAP)</h2>
              </div>
            </div>

            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black">
              Zero Upfront Fee
            </span>
          </div>

          {/* Big CTC Number */}
          <div className="my-3 relative z-10">
            <span className="text-[11px] font-semibold text-slate-400">Target Minimum Package</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-3xl font-black text-white tracking-tight">
                ₹6.0 – 15.0 LPA
              </span>
            </div>
            <p className="text-[11px] text-emerald-400 font-bold mt-1">
              ✓ Pay nominal platform fee only after receiving your offer letter!
            </p>
          </div>

          {/* 4 Stats Matrix Row */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800/80 mt-2 text-xs relative z-10">
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 font-medium">Hiring Partners</span>
              <div className="font-extrabold text-white text-sm mt-0.5">150+ Companies</div>
              <span className="text-[9px] text-slate-500">MNCs, Startups &amp; Unicorns</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 font-medium">ATS Resume Score</span>
              <div className="font-extrabold text-emerald-400 text-sm mt-0.5">0 / 100 Ready</div>
              <span className="text-[9px] text-slate-500">Scan via in-app tool</span>
            </div>
          </div>

          {/* Direct Mock Interview CTA */}
          <div className="pt-3.5 relative z-10">
            <button
              type="button"
              onClick={() => {
                playTactile();
                onStartMockInterview();
              }}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-black text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Launch AI Mock Interview with NOVA</span>
            </button>
          </div>
        </div>

        {/* ─── 3. ACTIVE JOB OPENINGS & PLACEMENT DRIVES ─── */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider">
                Active Job Openings
              </h3>
              <span className="text-[10px] text-slate-500">Curated for FUTURE IT learners</span>
            </div>
            <span className="text-[10px] text-sky-400 font-bold bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
              12 Drives Today
            </span>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs font-bold">
            {[
              { id: 'all', label: 'All Jobs' },
              { id: 'python', label: 'Python Dev' },
              { id: 'analytics', label: 'Data Analyst' },
              { id: 'remote', label: '100% Remote' },
            ].map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => {
                  playTactile();
                  setActiveJobTab(tab.id as any);
                }}
                className={`px-3 py-1.5 rounded-full flex-shrink-0 text-xs transition-all border ${
                  activeJobTab === tab.id
                    ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="space-y-2.5">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 rounded-3xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 space-y-2.5 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-xs font-black text-white leading-tight">{job.title}</h4>
                    <span className="text-[11px] text-slate-400 font-semibold mt-0.5 block">
                      {job.company}
                    </span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border ${job.badgeColor}`}>
                    {job.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-1 text-emerald-400 font-extrabold">
                    <IndianRupee className="w-3.5 h-3.5" />
                    <span>{job.package}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span className="truncate">{job.location}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {job.skills.map((sk) => (
                    <span
                      key={sk}
                      className="px-2 py-0.5 rounded-lg bg-slate-950 text-slate-400 text-[10px] font-bold border border-slate-800"
                    >
                      {sk}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-semibold">Eligible &amp; Ready</span>
                  <button
                    type="button"
                    onClick={() => {
                      playTactile();
                      onStartMockInterview();
                    }}
                    className="py-1.5 px-3 rounded-xl bg-sky-600/90 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-1 active:scale-95 transition-all shadow-sm"
                  >
                    <span>Practice Mock</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 4. 4-STEP PLACEMENT ROADMAP (Interactive Stepper) ─── */}
        <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3.5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-white uppercase tracking-wider">
              4-Step Placement Roadmap
            </h3>
            <span className="text-[10px] text-cyan-400 font-bold">Fast-Track</span>
          </div>

          <div className="space-y-3">
            {[
              {
                step: '1',
                title: 'Python & Foundation Mastery',
                desc: '26 comprehensive chapters, code exercises and syntax drills',
                status: 'Unlocked (Free)',
                color: 'bg-emerald-500',
              },
              {
                step: '2',
                title: 'Coding Games & 8 Projects',
                desc: 'Build real-world automation, Pandas and SQL projects',
                status: 'In Progress',
                color: 'bg-sky-500',
              },
              {
                step: '3',
                title: 'NOVA AI Mock Interview Clearance',
                desc: 'Simulate real technical interviews for Google and Swiggy rounds',
                status: 'Next Step',
                color: 'bg-amber-500',
              },
              {
                step: '4',
                title: 'Direct Partner Hiring & Offer Letter',
                desc: 'Get placed with ₹6 – 15 LPA salary and pay only after joining',
                status: 'Final Goal',
                color: 'bg-slate-700',
              },
            ].map((st) => (
              <div key={st.step} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full ${st.color} text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                  {st.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs font-bold text-white block leading-tight">
                      {st.title}
                    </strong>
                    <span className="text-[9px] font-extrabold text-cyan-400 ml-1">
                      {st.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              playTactile();
              onPlayGames();
            }}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all border border-slate-700"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Level Up with Python Games →</span>
          </button>
        </div>

        {/* ─── 5. REFERRED LEARNERS CAREER FUNNEL ─── */}
        <div className="p-4 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-white uppercase tracking-wider">
              Referred Career Funnel
            </h3>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              3 Offers Secured
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { stage: 'Referred', count: 24, icon: '🔗' },
              { stage: 'Enrolled', count: 18, icon: '🎓' },
              { stage: 'Training', count: 12, icon: '💻' },
              { stage: 'Internship', count: 9, icon: '⚡' },
              { stage: 'Interview', count: 7, icon: '🎤' },
              { stage: 'Placed', count: 3, icon: '🏆' },
            ].map((st) => (
              <div key={st.stage} className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-sm block">{st.icon}</span>
                <strong className="text-sm font-black text-white block mt-0.5">{st.count}</strong>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">{st.stage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 6. PLACEMENT GUARANTEE TERMS ─── */}
        <div className="p-4 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 space-y-2">
          <div className="flex items-center gap-2 text-indigo-400">
            <Sparkles className="w-4 h-4" />
            <strong className="text-xs font-black text-white">Placement Guarantee Terms</strong>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
            Zero upfront fees for training! You only pay the nominal ₹999 platform fee once you receive your offer letter of ₹6 LPA or above.
          </p>
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-bold text-slate-400">
            <span>100% Refundable Guarantee</span>
            <span className="text-emerald-400">Verified ✓</span>
          </div>
        </div>

      </div>

    </div>
  );
};
