import React from 'react';
import { FolderGit2, Star, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';

export const ProjectsView: React.FC = () => {
  const projects = [
    {
      id: 'p1',
      title: 'E-Commerce Churn & Customer Lifetime Value',
      tools: ['Python', 'SQL', 'Pandas', 'Power BI'],
      level: 'Advanced',
      status: 'In Progress (60%)',
      desc: 'Build an end-to-end churn prediction pipeline, cohort heatmap, and executive retention dashboard.'
    },
    {
      id: 'p2',
      title: 'Global Supply Chain & Logistics Performance',
      tools: ['SQL', 'Power BI', 'DAX'],
      level: 'Intermediate',
      status: 'Ready to Start',
      desc: 'Analyze delivery delays, vendor lead times, and optimize warehousing safety stock levels.'
    },
    {
      id: 'p3',
      title: 'Financial Health & Cash Flow Forecasting',
      tools: ['Excel', 'Power Query', 'Financial Modeling'],
      level: 'Intermediate',
      status: 'Ready to Start',
      desc: 'Automate multi-scenario financial 3-statement models with interactive sensitivity tables.'
    }
  ];

  return (
    <div className="flex flex-col gap-4 pb-28 pt-2">
      <div className="p-5 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white shadow-md">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold w-max mb-2">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Resume & Portfolio Builders</span>
        </div>
        <h2 className="text-xl font-extrabold tracking-tight">Real-World Portfolio Projects</h2>
        <p className="text-xs text-slate-300 mt-1">
          Prove your skills to hiring managers with end-to-end business case studies.
        </p>
      </div>

      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p.id} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                {p.level}
              </span>
              <span className="text-xs font-semibold text-slate-500">{p.status}</span>
            </div>

            <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {p.tools.map((t, idx) => (
                <span key={idx} className="text-[10.5px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                  {t}
                </span>
              ))}
            </div>

            <button className="w-full mt-2 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer">
              <span>Continue Project Workspace</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
