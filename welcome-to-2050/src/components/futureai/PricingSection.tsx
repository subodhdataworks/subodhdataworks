import React from 'react';
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  HelpCircle, 
  Sparkles, 
  Lock, 
  AlertCircle 
} from 'lucide-react';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface PricingSectionProps {
  currentLanguage: SupportedLanguage;
  onStartWith999: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  currentLanguage,
  onStartWith999,
}) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>TRANSPARENT ENTRY MODEL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Invest in Your Future with Confidence
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Start learning today with low upfront risk. Complete the foundational curriculum and align fee payments with real milestones.
          </p>
        </div>

        {/* Premium Pricing Card (Centered & Elevated) */}
        <div className="max-w-2xl mx-auto rounded-3xl light-glass-card border-2 border-sky-300 shadow-2xl p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-sky-400/10 via-emerald-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Program Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/80">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700">
                Flagship Career Track
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Data Analyst with GenAI
              </h3>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Offer-Linked Balance</span>
            </div>
          </div>

          {/* Pricing Numbers Hierarchy */}
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            {/* Pay Now Spotlight */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 via-white to-emerald-50 border border-sky-200 shadow-sm text-left">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                Pay Now (Upfront Entry)
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2 font-mono">
                ₹999
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Unlocks full platform access, Python modules, and PowerGreen AI companion.
              </p>
            </div>

            {/* Total Fee & Remaining Logic */}
            <div className="space-y-4 text-left">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Total Course Fee:
                </span>
                <div className="text-2xl font-bold text-slate-700 font-mono">
                  ₹29,999
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900">Remaining Balance: </span>
                ₹28,000 after receiving an eligible job offer letter, according to the applicable payment terms.
              </div>
            </div>
          </div>

          {/* What's Included Checkpoints */}
          <div className="space-y-3 pb-8 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Included in Your ₹999 Registration:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'Full 9-Stage Curriculum Access',
                '24/7 PowerGreen AI Voice Tutor',
                '2050 Interactive Coding Missions',
                'Real-Time Diagnostic Error Checkers',
                'AI Technical Mock Interview Loop',
                'Production Portfolio Project Specs',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={onStartWith999}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-extrabold text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/35 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 group"
          >
            <span>Start with ₹999</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Explicit Compliance & Terms Disclaimer (Strict adherence to prompt) */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 text-left space-y-2">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                <strong>Important Notice &amp; Terms:</strong> Future.AI does not promise guaranteed placement or fixed salary compensation. The remaining balance of ₹28,000 is payable exclusively upon receiving an eligible job offer letter, strictly subject to the defined program eligibility criteria and payment agreement terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
