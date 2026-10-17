import React, { useState } from 'react';
import { 
  GraduationCap, 
  Code2, 
  Layers, 
  Briefcase, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface CareerJourneyProps {
  currentLanguage: SupportedLanguage;
  onSelectStage?: (stageId: number) => void;
}

export const CareerJourney: React.FC<CareerJourneyProps> = ({
  currentLanguage,
  onSelectStage,
}) => {
  const [activeStage, setActiveStage] = useState<number>(3); // 1 to 5

  const stages = [
    {
      step: 1,
      title: 'Learn Skills',
      hindiTitle: 'कौशल सीखें',
      icon: GraduationCap,
      color: 'from-sky-500 to-blue-600',
      description: 'Master core tools: Python programming, advanced SQL querying, Excel models, Power BI analytics, and applied GenAI.',
      deliverable: 'Core Concept Certification',
      details: 'Structured foundational modules with daily interactive concept checks and AI tutor guidance.',
    },
    {
      step: 2,
      title: 'Practice',
      hindiTitle: 'अभ्यास और सिमुलेशन',
      icon: Code2,
      color: 'from-cyan-500 to-sky-600',
      description: 'Solve real-world coding challenges and micro-missions with real-time feedback and diagnostic error detection.',
      deliverable: '100+ Coding Sandbox Drills',
      details: 'Hands-on practice game missions, dynamic syntax debugging, and spaced repetition workouts.',
    },
    {
      step: 3,
      title: 'Build Real Projects',
      hindiTitle: 'वास्तविक प्रोजेक्ट्स निर्माण',
      icon: Layers,
      color: 'from-emerald-500 to-teal-600',
      description: 'Work with production datasets: design end-to-end ETL pipelines, conduct exploratory data analysis, and build interactive dashboards.',
      deliverable: '3 Production Portfolio Projects',
      details: 'Retail e-commerce revenue analysis, customer churn predictive model, and executive KPI dashboard.',
    },
    {
      step: 4,
      title: 'Internship',
      hindiTitle: 'व्यावहारिक इंटर्नशिप अनुभव',
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-600',
      description: 'Gain practical experience by collaborating on simulated corporate projects, sprint deadlines, and stakeholder review meetings.',
      deliverable: 'Internship Experience Report',
      details: 'Team standups, GitHub version control workflows, and business presentation reviews.',
    },
    {
      step: 5,
      title: 'Career Preparation',
      hindiTitle: 'करियर की तैयारी',
      icon: Target,
      color: 'from-purple-600 to-pink-600',
      description: 'Conduct AI-powered voice mock interviews, refine your resume and GitHub profile, and prepare for industry technical evaluations.',
      deliverable: 'Interview Readiness Score',
      details: 'Rubric-based feedback on technical answers, problem formulation, and communication clarity.',
    },
  ];

  return (
    <section id="journey" className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>5-STAGE PROGRESSION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            From First Line of Code to Career-Ready
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A comprehensive, hands-on path engineered to bridge the gap between academic theory and real-world analytics.
          </p>

          <div className="pt-1 text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Honest education: Real skills and portfolio preparation. No unrealistic guarantee claims.</span>
          </div>
        </div>

        {/* Futuristic Animated Progressive Track */}
        <div className="relative mb-12 hidden md:block">
          {/* Background Track Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-1/2 z-0 rounded-full" />
          
          {/* Active Progress Beam */}
          <div 
            className="absolute top-1/2 left-8 h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 -translate-y-1/2 z-0 rounded-full transition-all duration-700"
            style={{ width: `${((activeStage - 1) / 4) * 88}%` }}
          />

          {/* 5 Milestone Nodes */}
          <div className="relative z-10 flex justify-between">
            {stages.map((st) => {
              const Icon = st.icon;
              const isActive = st.step <= activeStage;
              const isSelected = st.step === activeStage;

              return (
                <button
                  key={st.step}
                  onClick={() => {
                    setActiveStage(st.step);
                    if (onSelectStage) onSelectStage(st.step);
                  }}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-tr from-sky-600 to-emerald-600 text-white scale-110 shadow-lg shadow-sky-500/30 ring-4 ring-sky-100'
                        : isActive
                        ? 'bg-white border-2 border-sky-500 text-sky-600 shadow-md'
                        : 'bg-white border border-slate-300 text-slate-400 group-hover:border-slate-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className={`mt-3 text-xs font-bold transition-colors ${
                    isSelected ? 'text-sky-700' : 'text-slate-600'
                  }`}>
                    {st.step}. {currentLanguage === 'hi' ? st.hindiTitle : st.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5 Stages Cards Grid (Interactive on Mobile & Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stages.map((st) => {
            const Icon = st.icon;
            const isSelected = st.step === activeStage;

            return (
              <div
                key={st.step}
                onClick={() => {
                  setActiveStage(st.step);
                  if (onSelectStage) onSelectStage(st.step);
                }}
                className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'light-glass border-2 border-sky-400 shadow-xl bg-sky-50/30 -translate-y-1'
                    : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 text-xs font-mono font-bold flex items-center justify-center">
                      0{st.step}
                    </span>
                    <div className={`p-2 rounded-xl bg-gradient-to-tr ${st.color} text-white shadow-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {currentLanguage === 'hi' ? st.hindiTitle : st.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {st.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-sky-700">
                    Milestone:
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {st.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Spotlight Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl light-glass-card border border-sky-200/80 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Active Stage Focus: Stage {activeStage}
            </div>
            <h4 className="text-xl font-extrabold text-slate-900">
              {stages[activeStage - 1].title} — In-Depth Execution
            </h4>
            <p className="text-sm text-slate-600 max-w-2xl">
              {stages[activeStage - 1].details}
            </p>
          </div>

          <button
            onClick={() => setActiveStage(activeStage < 5 ? activeStage + 1 : 1)}
            className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>Next Stage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
