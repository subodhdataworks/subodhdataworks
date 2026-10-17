import React from 'react';
import { ArrowRight, Sparkles, Bot, Code2, FolderKanban, Users2, Database } from 'lucide-react';
import { PythonIcon, SqlIcon, ExcelIcon, PowerBiIcon } from '../common/TechIcons';

interface SkillsSectionProps {
  onSelectSkill: (skillTitle: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectSkill }) => {
  const skillCards = [
    {
      id: 'python',
      title: 'Python',
      action: 'Learn →',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center p-2 shadow-xs group-hover:scale-110 transition-transform">
          <PythonIcon className="w-8 h-8" />
        </div>
      ),
      actionColor: 'text-blue-600 group-hover:text-blue-700',
      description: 'Pandas, NumPy, data cleaning & automation',
    },
    {
      id: 'sql',
      title: 'SQL',
      action: 'Learn →',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center p-2 shadow-xs group-hover:scale-110 transition-transform">
          <SqlIcon className="w-8 h-8" />
        </div>
      ),
      actionColor: 'text-blue-600 group-hover:text-blue-700',
      description: 'Joins, aggregations, CTEs & window functions',
    },
    {
      id: 'excel',
      title: 'Excel',
      action: 'Learn →',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center p-2 shadow-xs group-hover:scale-110 transition-transform">
          <ExcelIcon className="w-8 h-8" />
        </div>
      ),
      actionColor: 'text-emerald-600 group-hover:text-emerald-700',
      description: 'XLOOKUP, Pivot Tables, power formulas',
    },
    {
      id: 'powerbi',
      title: 'Power BI',
      action: 'Learn →',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center p-2 shadow-xs group-hover:scale-110 transition-transform">
          <PowerBiIcon className="w-8 h-8" />
        </div>
      ),
      actionColor: 'text-amber-600 group-hover:text-amber-700',
      description: 'DAX measures, interactive storytelling',
    },
    {
      id: 'practice',
      title: 'Practice',
      action: 'Solve →',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200/60 flex items-center justify-center text-cyan-600 shadow-xs group-hover:scale-110 transition-transform">
          <Code2 className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
      actionColor: 'text-cyan-600 group-hover:text-cyan-700',
      description: '150+ interactive coding challenges with AI hints',
    },
    {
      id: 'projects',
      title: 'Projects',
      action: 'Build →',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shadow-xs group-hover:scale-110 transition-transform">
          <FolderKanban className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
      actionColor: 'text-emerald-600 group-hover:text-emerald-700',
      description: '4 industry-grade portfolio projects',
    },
    {
      id: 'interview',
      title: 'Interview',
      action: 'Prepare →',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600 shadow-xs group-hover:scale-110 transition-transform">
          <Users2 className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
      actionColor: 'text-purple-600 group-hover:text-purple-700',
      description: 'Real technical & behavioral interview rounds',
    },
    {
      id: 'ai-mentor',
      title: 'AI Mentor',
      action: 'Get Guidance →',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-110 transition-transform">
          <Bot className="w-6 h-6" />
        </div>
      ),
      actionColor: 'text-blue-600 group-hover:text-blue-700',
      description: 'Instant answers, code debugging & motivation',
    },
  ];

  return (
    <section id="skills" className="py-10 sm:py-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200/70">
            <span>What You'll Learn</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Master In-Demand Skills
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl font-normal">
            Build a strong foundation and become job-ready with industry-relevant tools and real-world projects.
          </p>
        </div>

        {/* 8-Card Grid matching the reference screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {skillCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectSkill(card.title)}
              className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col items-center text-center justify-between min-h-[160px] sm:min-h-[175px]"
            >
              {/* Card Icon */}
              <div className="mb-3 flex items-center justify-center">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>

              {/* Action Link with Arrow */}
              <div className={`mt-2 text-xs font-bold flex items-center gap-1 ${card.actionColor}`}>
                <span>{card.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
