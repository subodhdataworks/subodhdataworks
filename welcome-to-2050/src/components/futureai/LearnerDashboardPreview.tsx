import React from 'react';
import { 
  User, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Award, 
  Activity, 
  Target, 
  Sparkles,
  Info
} from 'lucide-react';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface LearnerDashboardPreviewProps {
  currentLanguage: SupportedLanguage;
  onContinueCurrentMission: () => void;
}

export const LearnerDashboardPreview: React.FC<LearnerDashboardPreviewProps> = ({
  currentLanguage,
  onContinueCurrentMission,
}) => {
  return (
    <section id="dashboard-preview" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4 text-sky-600" />
            <span>PERSONALIZED LEARNER INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Real-Time Learning Telemetry
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Track your exact conceptual progress, locked mastery milestones, and interview readiness with zero guesswork.
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Demonstration Preview • Sample Active Learner Telemetry</span>
          </div>
        </div>

        {/* Dashboard Preview Shell (Glassmorphic 2050 Command Center Card) */}
        <div className="max-w-4xl mx-auto rounded-3xl light-glass-card border border-slate-200/90 shadow-2xl p-6 sm:p-10">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                RK
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-base">Rajesh Kumar</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                    Cohort 2050
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Track: Data Analyst with GenAI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[11px] text-slate-500 font-semibold uppercase">Interview Readiness</div>
                <div className="text-xl font-extrabold text-sky-700 font-mono">64%</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                <Target className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Module Progress Grid: Python 72%, SQL Locked, Power BI Locked */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            {/* Python Active 72% */}
            <div className="p-5 rounded-2xl bg-white border-2 border-sky-300 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-sky-800 uppercase tracking-wide">
                    Module 1: Python
                  </span>
                  <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                    72%
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Syntax, Data Structures & Logic
                </p>
              </div>

              <div className="mt-4">
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="w-[72%] h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full" />
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Status: In Progress</span>
                  <span className="text-emerald-600 font-semibold">Active</span>
                </div>
              </div>
            </div>

            {/* SQL Locked */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 opacity-80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                    Module 2: SQL
                  </span>
                  <Lock className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500">
                  Relational Queries & Aggregations
                </p>
              </div>

              <div className="mt-4">
                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="w-0 h-full bg-slate-400" />
                </div>
                <div className="mt-2 text-[11px] text-slate-400 italic">
                  Unlocks upon Python completion (85%)
                </div>
              </div>
            </div>

            {/* Power BI Locked */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 opacity-80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                    Module 3: Power BI
                  </span>
                  <Lock className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500">
                  DAX & Executive Visual Dashboards
                </p>
              </div>

              <div className="mt-4">
                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="w-0 h-full bg-slate-400" />
                </div>
                <div className="mt-2 text-[11px] text-slate-400 italic">
                  Unlocks following SQL certification
                </div>
              </div>
            </div>
          </div>

          {/* Current Mission & Next Step Banner */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                Current Mission:
              </div>
              <h4 className="text-base font-extrabold text-slate-900">
                Python Basics &mdash; Data Containers
              </h4>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-semibold text-emerald-700">Next Step:</span>
                <span>Complete Practice Challenge (MCQ 7/10)</span>
              </div>
            </div>

            <button
              onClick={onContinueCurrentMission}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md shrink-0"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
