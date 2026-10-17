import React, { useState } from 'react';
import { 
  Play, 
  HelpCircle, 
  Gamepad2, 
  Mic, 
  Trophy, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  RotateCcw
} from 'lucide-react';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface LearningExperienceFlowProps {
  currentLanguage: SupportedLanguage;
  onContinueLearning: () => void;
}

export const LearningExperienceFlow: React.FC<LearningExperienceFlowProps> = ({
  currentLanguage,
  onContinueLearning,
}) => {
  const [activeStep, setActiveStep] = useState<number>(2); // 0 to 6

  const steps = [
    { name: 'WATCH', hindiName: 'देखें', desc: '5-min high-impact concept breakdown' },
    { name: 'UNDERSTAND', hindiName: 'समझें', desc: 'Mental models & PowerGreen AI analogies' },
    { name: 'PRACTICE', hindiName: 'अभ्यास', desc: 'Immediate browser-based coding sandbox' },
    { name: 'PLAY', hindiName: 'खेलें', desc: '2050 interactive coding mission games' },
    { name: 'INTERVIEW', hindiName: 'इंटरव्यू', desc: 'Real-time AI voice technical interviews' },
    { name: 'ANALYZE', hindiName: 'विश्लेषण', desc: 'Diagnostic evaluation of error patterns' },
    { name: 'IMPROVE', hindiName: 'सुधारें', desc: 'Spaced repetition workouts targeting gaps' },
  ];

  const pillarCards = [
    {
      title: 'Video',
      icon: Play,
      color: 'from-sky-500 to-blue-600',
      description: 'Cinematic, ultra-focused concept introductions that respect your time. Zero fluff, pure intuition.',
    },
    {
      title: 'MCQ',
      icon: HelpCircle,
      color: 'from-cyan-500 to-teal-500',
      description: 'Diagnostic multiple-choice questions that identify why you chose an option and explain the misconception.',
    },
    {
      title: 'Practice Game',
      icon: Gamepad2,
      color: 'from-emerald-500 to-green-600',
      description: 'Futuristic coding simulations where you fix real syntax bugs, optimize data models, and earn XP.',
    },
    {
      title: 'Interview',
      icon: Mic,
      color: 'from-indigo-500 to-purple-600',
      description: 'Voice-enabled AI interviewer that asks technical questions and scores clarity, syntax, and business logic.',
    },
    {
      title: 'Scoreboard',
      icon: Trophy,
      color: 'from-amber-500 to-orange-600',
      description: 'Comprehensive readiness radar tracking your accuracy, streak, and career readiness quotient.',
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>THE 2050 PEDAGOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            How Learning Works on Future.AI
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            No passive lectures. You progress through a continuous cycle of understanding, doing, playing, and instant diagnostic feedback.
          </p>
        </div>

        {/* 1. Visual Interactive Flow: WATCH → UNDERSTAND → PRACTICE → PLAY → INTERVIEW → ANALYZE → IMPROVE */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl light-glass-card border border-slate-200/90 shadow-xl">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mb-6">
            The 7-Step Mastery Loop
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {steps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              return (
                <button
                  key={step.name}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 min-w-[120px] p-3 rounded-2xl border text-center transition-all ${
                    isCurrent
                      ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-500/20 scale-105 border-transparent'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="text-xs font-bold tracking-wide">
                    {currentLanguage === 'hi' ? step.hindiName : step.name}
                  </div>
                  <div className={`text-[10px] mt-1 ${isCurrent ? 'text-sky-100' : 'text-slate-500'}`}>
                    Step {idx + 1}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sky-700">{steps[activeStep].name}:</span>
              <span>{steps[activeStep].desc}</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">Active Loop Phase</span>
          </div>
        </div>

        {/* 2. The 5 Pillar Cards: Video, MCQ, Practice Game, Interview, Scoreboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {pillarCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center mb-3 shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">{card.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{card.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-sky-600 flex items-center gap-1">
                  <span>Phase {idx + 1}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. System Remembers Learner Progress (Specified in Section 11) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-slate-950 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-md">
              <Clock className="w-3.5 h-3.5" />
              <span>Learner Memory Engine Active</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Welcome back.
            </h3>

            <p className="text-sm sm:text-base text-slate-300">
              You stopped at <span className="font-semibold text-sky-400">Python — MCQ Question 7/10</span>.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400 font-mono">
              <span>Time Spent: 42 mins</span>
              <span>•</span>
              <span>Streak: 4 Days</span>
              <span>•</span>
              <span>Retention: 92%</span>
            </div>
          </div>

          <div className="z-10 shrink-0">
            <button
              onClick={onContinueLearning}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 hover:from-sky-300 hover:to-emerald-300 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2 group"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
