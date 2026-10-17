import React from 'react';
import { Check, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import { 
  IconStepLearn, 
  IconStepProjects, 
  IconStepMentorship, 
  IconStepPlacement 
} from './FutureIcons';
import { useThemeAccent } from '../../context/ThemeAccentContext';

interface CareerPathwayStepsSectionProps {
  onStartJourney?: () => void;
  onOpenCurriculum?: () => void;
  onOpenAdvisor?: () => void;
  onOpenAuth?: () => void;
}

export const CareerPathwayStepsSection: React.FC<CareerPathwayStepsSectionProps> = ({
  onStartJourney,
  onOpenCurriculum,
  onOpenAdvisor,
  onOpenAuth,
}) => {
  const { accentConfig, playHover, playClick } = useThemeAccent();
  const steps = [
    {
      num: '01',
      title: 'Learn Skills',
      desc: 'Python, SQL, Excel & GenAI fundamentals',
      icon: IconStepLearn,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      action: onOpenCurriculum || onStartJourney,
    },
    {
      num: '02',
      title: 'Build Projects',
      desc: 'Work on real-world industry datasets',
      icon: IconStepProjects,
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200',
      action: onOpenCurriculum || onStartJourney,
    },
    {
      num: '03',
      title: '1:1 Mentorship',
      desc: 'Weekly code reviews & expert guidance',
      icon: IconStepMentorship,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
      action: onOpenAdvisor || onStartJourney,
    },
    {
      num: '04',
      title: 'Get Placed',
      desc: 'Mock interviews & partner job referrals',
      icon: IconStepPlacement,
      iconBg: 'bg-teal-50 text-teal-600 border-teal-200',
      action: onOpenAdvisor || onStartJourney,
    },
  ];

  return (
    <section id="career-pathway" className="py-12 bg-white border-t border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left + Center: 4-Step Process (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="text-[11px] font-bold text-[#0284C7] uppercase tracking-widest">
                STRUCTURED CAREER PATHWAY
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight mt-1">
                From Learning to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00B4D8] to-[#00D2B4]">
                  Landing Your Dream Job
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl font-normal">
                A proven, step-by-step career framework engineered to take you from foundational concepts to job-ready mastery.
              </p>
            </div>

            {/* 4 Steps in a Row with Connectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="relative group cursor-pointer"
                    onClick={() => {
                      playClick();
                      step.action && step.action();
                    }}
                    onMouseEnter={playHover}
                  >
                    <div className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${step.iconBg}`}>
                            <Icon size={20} />
                          </div>
                          <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-sky-600 transition-colors">
                            {step.num}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1 leading-tight font-medium">
                          {step.desc}
                        </p>
                      </div>

                      {/* Forward Arrow Indicator between steps */}
                      {idx < 3 && (
                        <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white border border-slate-200 text-slate-400 items-center justify-center text-[10px] shadow-2xs pointer-events-none">
                          <ChevronRight className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Sleek Card: Fast Track to Your Real Career (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-gradient-to-br from-[#0B1528] via-slate-800 to-sky-950 text-white p-5 sm:p-6 border border-sky-500/20 shadow-xl relative overflow-hidden flex flex-col justify-between">
              
              {/* Top Row: Title + Package Badge */}
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Fast Track Program</span>
                  </div>
                  <h4 className="text-base font-black text-white mt-0.5">
                    Fast Track to Your Real Career
                  </h4>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-extrabold shrink-0">
                  ₹8.5 LPA Avg
                </div>
              </div>

              {/* Checklist & Student Graphic */}
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7 space-y-2">
                  {[
                    '100% Practical Curriculum',
                    'Live 1:1 Mentorship',
                    'Real-World Projects',
                    'Placement Assistance',
                  ].map((item, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-[11px] font-semibold text-slate-200">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}

                  <button
                    onClick={() => {
                      playClick();
                      if (onOpenAuth) onOpenAuth();
                      else if (onStartJourney) onStartJourney();
                    }}
                    onMouseEnter={playHover}
                    className={`mt-3 inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${accentConfig.btnGradient} ${accentConfig.btnHoverGradient} transition-all shadow-md ${accentConfig.shadowClass} active:scale-95 cursor-pointer`}
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="col-span-5 flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-md">
                    <img
                      src="/images/placed-student-celebration.jpg"
                      alt="Student Placed"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
