import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Crown, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Modal } from '../common/Modal';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const perks = [
    'Lifetime access to all 90+ comprehensive lessons',
    'Interactive SQL & Python cloud playgrounds',
    '12 End-to-End real world portfolio projects',
    'Unlimited 24/7 Mentor AI tutoring and code debugging',
    'AI Mock Interview Simulator with scorecards',
    'Verified Job-Ready Data Analyst Certificate'
  ];

  const handleCheckout = () => {
    setIsSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
    }, 2200);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Mentor AI Pro Lifetime" maxWidth="max-w-md">
      <div className="space-y-4">
        {/* Hero Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-amber-400/20 text-amber-400">
              <Crown className="w-5 h-5 fill-amber-400" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              One-Time Payment • No Subscription
            </span>
          </div>

          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-white">₹999</span>
            <span className="text-sm text-slate-400 line-through">₹4,999</span>
            <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full ml-auto">
              80% OFF
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Pay once, learn forever. Become a Data Analyst at your own pace.
          </p>
        </div>

        {/* Perks list */}
        <div className="space-y-2">
          {perks.map((perk, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{perk}</span>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-2.5 text-xs text-slate-600">
          <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>7-Day 100% Money Back Guarantee • No Questions Asked</span>
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          disabled={isSuccess}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-300/40 flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
        >
          {isSuccess ? (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Welcome to Pro Lifetime! 🎉</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 fill-current" />
              <span>Upgrade Now for ₹999</span>
            </>
          )}
        </button>
      </div>
    </Modal>
  );
};
