import React from 'react';
import { BookOpen, Terminal, FolderGit2, Trophy, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onStartLearning: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onStartLearning }) => {
  const steps = [
    {
      step: '01',
      title: 'Learn Foundations',
      description: 'Master core concepts in Python, SQL, Excel, and Power BI with bite-sized, distraction-free visual modules.',
      icon: BookOpen,
      color: 'from-blue-600 to-cyan-500',
      badge: 'Bite-Sized Lessons'
    },
    {
      step: '02',
      title: 'Hands-On Practice',
      description: 'Solve real data problems directly in your browser. Get instant AI hints when stuck — never get frustrated.',
      icon: Terminal,
      color: 'from-cyan-500 to-emerald-500',
      badge: 'Interactive Sandbox'
    },
    {
      step: '03',
      title: 'Build Portfolio Projects',
      description: 'Work on actual messy datasets: analyze e-commerce orders, forecast store revenue, and model customer retention.',
      icon: FolderGit2,
      color: 'from-emerald-500 to-indigo-600',
      badge: 'Portfolio Ready'
    },
    {
      step: '04',
      title: 'Crack Interviews',
      description: 'Rehearse realistic technical & behavioral interview questions with AI feedback to negotiate top offers.',
      icon: Trophy,
      color: 'from-indigo-600 to-purple-600',
      badge: 'Job Ready'
    },
  ];

  return (
    <section id="practice" className="py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200/70">
            <span>Structured Path</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            How Mentor AI Takes You from Zero to Job-Ready
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl font-normal">
            No random YouTube playlists. Follow a proven, linear roadmap designed specifically for aspiring Data Analysts.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-500/30 transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md shadow-blue-500/20`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 mb-2 inline-block">
                    {item.badge}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Explore step</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
