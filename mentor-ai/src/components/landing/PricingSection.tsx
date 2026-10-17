import React from 'react';
import { Check, Sparkles, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (plan: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-12 sm:py-18 bg-gradient-to-b from-[#F8F9FD] to-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200/70">
            <span>Honest & Transparent</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Start Learning Free. Upgrade When Ready.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
            No sneaky auto-debits. No hidden renewal surprises. Free tier gives you full access to beginner foundations forever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* FREE PLAN */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
                  Free Starter
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  Always Free
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-slate-900 tracking-tight">₹0</span>
                <span className="text-xs text-slate-400 font-semibold">/ forever</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 mb-6 font-normal">
                Perfect for exploring data fundamentals and understanding how the AI Mentor works.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                {[
                  'Beginner modules for Python, SQL, Excel & Power BI',
                  '10 AI Mentor questions per day',
                  '15+ Interactive practice coding challenges',
                  'Community forum access',
                  'Browser-based sandbox environment'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('free')}
              className="mt-8 w-full py-3 rounded-2xl border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-xs sm:text-sm transition-all hover:bg-slate-50 cursor-pointer"
            >
              Start Free (No Credit Card)
            </button>
          </div>

          {/* PRO LIFETIME PLAN */}
          <div className="relative bg-gradient-to-b from-[#0F172A] to-[#1E293B] rounded-3xl p-7 sm:p-8 border-2 border-blue-500/60 shadow-2xl text-white flex flex-col justify-between overflow-hidden">
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-[10px] font-extrabold tracking-wider uppercase text-white shadow-md">
              75% OFF • LIFETIME ACCESS
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-extrabold text-blue-400 uppercase tracking-wider">
                  Pro Lifetime Deal
                </span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">₹999</span>
                <span className="text-sm text-slate-400 line-through font-semibold">₹3,999</span>
                <span className="text-xs text-blue-300 font-bold">one-time payment</span>
              </div>

              <p className="text-xs text-slate-300 mb-6 font-normal">
                Everything you need to become job-ready, forever. One single payment, zero recurring bills.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-700">
                {[
                  'Complete curriculum: Python, SQL, Excel & Power BI',
                  'Unlimited 24/7 AI Mentor assistance with step-by-step hints',
                  '4 Production-grade portfolio projects for your resume',
                  '100+ Real technical interview questions with grading',
                  'Verified Certificate of Completion for LinkedIn',
                  'Lifetime updates & new exercises added automatically',
                  '7-Day 100% Money-Back Guarantee (No questions asked)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => onSelectPlan('pro')}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Get Lifetime Access for ₹999</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Secure 256-bit payment • Instant dashboard unlock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
