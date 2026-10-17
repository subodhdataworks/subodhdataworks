import React from 'react';
import { Cpu, FolderCheck, Briefcase, Infinity, Sparkles } from 'lucide-react';

export const WhyMentorAISection: React.FC = () => {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 border border-fuchsia-200/70 flex items-center justify-center text-fuchsia-600 shadow-xs">
          <Cpu className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
      title: 'AI-Powered Learning',
      description: 'Personalized guidance and support 24/7',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600 shadow-xs">
          <FolderCheck className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
      title: 'Real Projects',
      description: 'Build a portfolio that gets you hired',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/70 flex items-center justify-center text-purple-600 shadow-xs">
          <Briefcase className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
      title: 'Career Focused',
      description: 'Industry-relevant skills and interview prep',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200/70 flex items-center justify-center text-indigo-600 shadow-xs">
          <Infinity className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
      title: 'Lifetime Access',
      description: 'Learn at your pace, for life',
    },
  ];

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-3 border border-purple-200/70">
            <span>Why Choose Mentor AI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            More Than Just a Course
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl font-normal">
            We're not just another learning platform. We're your AI-powered career partner, designed to help you succeed.
          </p>
        </div>

        {/* 4-Feature Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all flex items-start gap-4"
            >
              <div className="shrink-0">{feature.icon}</div>
              <div className="flex flex-col text-left">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
