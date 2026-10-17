import React from 'react';
import { ExternalLink, Database, BarChart3, LineChart, Layers, ArrowRight } from 'lucide-react';

interface ProjectsShowcaseSectionProps {
  onStartLearning: () => void;
}

export const ProjectsShowcaseSection: React.FC<ProjectsShowcaseSectionProps> = ({ onStartLearning }) => {
  const projects = [
    {
      id: 'p1',
      title: 'E-Commerce Sales & Cohort Retention',
      description: 'Analyze 120,000+ online orders to calculate Customer Lifetime Value (CLV), repurchase cohorts, and basket sizes.',
      tools: ['SQL', 'Python', 'Power BI'],
      category: 'Commercial Analytics',
      metric: '$4.2M Volume Analyzed',
      accentColor: 'border-blue-200 hover:border-blue-400',
      badgeColor: 'bg-blue-50 text-blue-700'
    },
    {
      id: 'p2',
      title: 'Customer Churn Risk Diagnostic',
      description: 'Clean messy telecommunications customer usage logs to identify high-risk churn indicators before accounts cancel.',
      tools: ['Python', 'Pandas', 'EDA'],
      category: 'Predictive Modeling',
      metric: '89.4% Churn Detection',
      accentColor: 'border-purple-200 hover:border-purple-400',
      badgeColor: 'bg-purple-50 text-purple-700'
    },
    {
      id: 'p3',
      title: 'Executive Financial Health Dashboard',
      description: 'Build an automated multi-currency dashboard calculating gross margins, EBITDA, and runway with scenario controls.',
      tools: ['Advanced Excel', 'Power BI', 'DAX'],
      category: 'Financial Analytics',
      metric: '100% Dynamic Model',
      accentColor: 'border-emerald-200 hover:border-emerald-400',
      badgeColor: 'bg-emerald-50 text-emerald-700'
    },
    {
      id: 'p4',
      title: 'Logistics Fleet & Delivery SLA Optimization',
      description: 'Leverage SQL Window functions and CTEs to locate delivery bottlenecks, driver delay patterns, and regional variance.',
      tools: ['PostgreSQL', 'CTEs', 'Window Functions'],
      category: 'Operations Analytics',
      metric: '32% Delay Reduction',
      accentColor: 'border-amber-200 hover:border-amber-400',
      badgeColor: 'bg-amber-50 text-amber-700'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 bg-[#F8F9FD]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3 border border-emerald-200/70">
              <span>Resume-Ready Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Build Real Projects Recruiters Actually Value
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl font-normal">
              Generic Iris and Titanic datasets won't get you hired in 2050. Build production-grade dashboards with realistic enterprise datasets.
            </p>
          </div>

          <button
            onClick={onStartLearning}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer self-start sm:self-auto shrink-0 group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={onStartLearning}
              className={`bg-white rounded-3xl p-6 sm:p-7 border ${proj.accentColor} shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all cursor-pointer flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg ${proj.badgeColor}`}>
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {proj.metric}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-5">
                  {proj.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Start Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
