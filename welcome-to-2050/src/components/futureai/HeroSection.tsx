import React from 'react';
import { ArrowRight, Sparkles, Compass, Shield, Database, Cpu, Bot, CheckCircle2 } from 'lucide-react';
import { HeroVisual3D } from './HeroVisual3D';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface HeroSectionProps {
  currentLanguage: SupportedLanguage;
  onStartJourney: () => void;
  onExplore: () => void;
  onSelectNode: (nodeName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLanguage,
  onStartJourney,
  onExplore,
  onSelectNode,
}) => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden">
      {/* Soft Volumetric Background Gradients (2050 Light Aesthetic) */}
      <div className="absolute top-0 inset-x-0 h-[600px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-sky-100/60 via-cyan-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 -left-20 w-[450px] h-[450px] bg-emerald-50/50 rounded-full blur-3xl" />
        <div className="absolute top-32 -right-20 w-[450px] h-[450px] bg-indigo-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Content & Typography */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200/80 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                AI-POWERED CAREER PLATFORM
              </span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Learn Today.<br />
              Build Tomorrow.<br />
              <span className="text-gradient-future drop-shadow-sm">
                Become Future-Ready.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Master in-demand skills, build real-world projects, learn with AI, and prepare for your next career opportunity.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onStartJourney}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-500/20 hover:shadow-sky-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplore}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-sky-600" />
                <span>Explore Future.AI</span>
              </button>
            </div>

            {/* Credibility & Core Values (Zero fake claims, realistic values) */}
            <div className="pt-4 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-800">Real Project Labs</div>
                  <div className="text-[11px] text-slate-500">Industry datasets</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-800">PowerGreen AI</div>
                  <div className="text-[11px] text-slate-500">24/7 Voice & Chat</div>
                </div>
              </div>

              <div className="flex items-start gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-800">Career Preparation</div>
                  <div className="text-[11px] text-slate-500">AI Mock Interviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual — Original 2050 World */}
          <div className="lg:col-span-6 w-full">
            <HeroVisual3D onSelectNode={onSelectNode} />
          </div>
        </div>
      </div>
    </section>
  );
};
