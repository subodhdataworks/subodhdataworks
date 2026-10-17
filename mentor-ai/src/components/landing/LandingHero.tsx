import React from 'react';
import { ArrowRight, Play, Clock, Briefcase, MessageSquare, Target, Sparkles, CheckCircle2 } from 'lucide-react';

interface LandingHeroProps {
  onStartLearning: () => void;
  onWatchDemo: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onStartLearning,
  onWatchDemo
}) => {
  const trustPills = [
    { icon: Clock, label: 'Learn at Your Pace' },
    { icon: Briefcase, label: 'Hands-on Projects' },
    { icon: MessageSquare, label: 'AI Tutor Support' },
    { icon: Target, label: 'Job Ready Skills' },
  ];

  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-12 lg:pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: Hero Copy & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-blue-700 text-xs font-bold mb-5 shadow-3xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Learn • Practice • Build • Grow</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12] mb-4">
              Your Personal AI Mentor
              <span className="block mt-1 sm:mt-1.5 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold text-slate-800">
                Become a{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Data Analyst
                </span>{' '}
                with AI-Powered Learning
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-7 max-w-xl font-normal">
              Get step-by-step guidance, hands-on practice, real projects and AI support — all in one place. Build your skills, gain confidence and unlock your dream career in data.
            </p>

            {/* Primary & Secondary Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-9 w-full sm:w-auto">
              <button
                onClick={onStartLearning}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Learning Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onWatchDemo}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/90 hover:bg-slate-50 border border-slate-300/80 text-slate-800 font-bold text-sm shadow-xs flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:border-slate-400 group"
              >
                <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Feature Pills */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 pt-2 border-t border-slate-200/60 w-full">
              {trustPills.map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/70 border border-slate-200/60 text-slate-700 text-xs font-semibold"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">{pill.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Futuristic 2050 Learner + Robot Visual */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end z-0">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 via-indigo-300/20 to-purple-300/20 rounded-3xl blur-2xl -z-10" />

            {/* Visual Container */}
            <div className="relative w-full max-w-[620px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(30,58,138,0.18)] border border-blue-200/60 bg-gradient-to-b from-blue-900/10 to-indigo-950/20 group">
              <img
                src="/assets/landing-hero-scene.jpg"
                alt="2050 Data Analyst Learner with AI Robot Mentor"
                className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-[1.01] transition-transform duration-500"
              />

              {/* Interactive Floating Micro-Chip 1: Active Learner Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center gap-2.5 animate-bounce-subtle">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-slate-900 leading-tight">Live AI Assistance</span>
                  <span className="text-[9.5px] text-slate-500 font-medium">SQL & Python Sandbox Ready</span>
                </div>
              </div>

              {/* Interactive Floating Micro-Chip 2: Accuracy Rating */}
              <div className="hidden sm:flex absolute top-4 right-4 px-3 py-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white shadow-lg items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10.5px] font-bold">100% Industry Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
