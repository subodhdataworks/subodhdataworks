import React, { useState } from 'react';
import { Share2, Gift, Copy, Check, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface ReferralSectionProps {
  currentLanguage: SupportedLanguage;
}

export const ReferralSection: React.FC<ReferralSectionProps> = ({ currentLanguage }) => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const referralLink = 'https://future.ai/invite/future2050';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="referral" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Referral Glassmorphic Banner Card */}
        <div className="max-w-4xl mx-auto rounded-3xl light-glass-card border border-emerald-200/80 shadow-xl p-6 sm:p-8 relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
                <Gift className="w-6 h-6" />
              </div>

              <div className="space-y-1 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>COMMUNITY REWARDS</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Share Future.AI. Earn Rewards.
                </h3>

                <p className="text-base font-bold text-emerald-700">
                  ₹100 for every successful enrollment
                </p>

                <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
                  Share your referral link with friends and earn rewards when a new learner successfully enrolls.
                </p>
              </div>
            </div>

            {/* Referral Action & Link Copy */}
            <div className="w-full sm:w-auto flex flex-col sm:items-end gap-3 shrink-0">
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <span className="px-2 font-mono text-[11px] text-slate-500 truncate max-w-[150px]">
                  {referralLink}
                </span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Policy Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 light-glass space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Referral Reward Terms</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
              <p>
                <strong>Reward Amount:</strong> You receive a flat reward of ₹100 for each individual who enrolls into a paid program using your unique invite link.
              </p>
              <p>
                <strong>Qualification:</strong> A successful enrollment is validated once the referee completes program onboarding.
              </p>
              <p>
                <strong>Transparency:</strong> No arbitrary tier systems or deceptive earnings calculators. Straightforward peer referral.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
