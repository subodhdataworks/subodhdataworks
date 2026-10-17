import React from 'react';
import { Users2, CheckCircle2, MessageSquareText, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

interface InterviewSectionProps {
  onStartLearning: () => void;
}

export const InterviewSection: React.FC<InterviewSectionProps> = ({ onStartLearning }) => {
  const rounds = [
    {
      round: 'Round 1',
      title: 'SQL Live Coding Challenge',
      desc: 'Top 50 frequently asked SQL query problems: ranking, rolling averages, conditional aggregation, and self-joins.',
      badge: 'Technical Screen'
    },
    {
      round: 'Round 2',
      title: 'Python & Pandas Analysis',
      desc: 'Cleaning messy CSVs, parsing date columns, merging datasets, and building descriptive visualizations.',
      badge: 'Take-Home / Live'
    },
    {
      round: 'Round 3',
      title: 'Business Case Study & BI',
      desc: 'Explaining a sudden drop in product metrics to non-technical stakeholders using intuitive visuals.',
      badge: 'Executive Presentation'
    },
    {
      round: 'Round 4',
      title: 'Behavioral & STAR Method',
      desc: 'Crafting compelling narratives about managing tight deadlines, messy data, and conflicting stakeholder priorities.',
      badge: 'Hiring Manager'
    }
  ];

  return (
    <section id="interview" className="py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-3 border border-purple-200/70">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Career Readiness</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              From Learning to Interview Ready
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
              Most students get stuck in tutorial hell. We bridge the gap between solving exercises and passing rigorous technical interview loops at top data-driven companies.
            </p>

            <div className="space-y-3.5 w-full">
              {[
                'Instant AI grading on your SQL query efficiency & syntax',
                'Curated question bank with solutions from real tech & finance interviews',
                'Realistic mock interview timer with live hint escalation',
                'Portfolio resume review checklist with ATS keyword optimization'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onStartLearning}
              className="mt-8 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>Practice Free Interview Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: 4 Interview Rounds Card Stack */}
          <div className="lg:col-span-6 space-y-3">
            {rounds.map((r, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-purple-700 font-black text-xs flex items-center justify-center shrink-0 border border-purple-200/60">
                  {r.round.slice(6)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-black text-slate-900">{r.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {r.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
