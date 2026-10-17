import React, { useState } from 'react';
import { X, Crown, Check, Zap, ShieldCheck, Sparkles, ArrowRight, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CourseUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockSuccess: () => void;
  lessonTitle?: string;
}

export const CourseUpgradeModal: React.FC<CourseUpgradeModalProps> = ({
  isOpen,
  onClose,
  onUnlockSuccess,
  lessonTitle
}) => {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleUnlock = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      onUnlockSuccess();
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Top Accent */}
        <div className="h-2 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-400/30 mb-3">
              <Crown className="w-7 h-7 fill-slate-950" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-extrabold mb-1">
              <span>SPECIAL 60% LAUNCH DISCOUNT</span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Unlock Complete Python Course
            </h3>

            {lessonTitle && (
              <p className="text-xs font-semibold text-indigo-600 mt-1 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                Lesson "{lessonTitle}" is part of Python Pro
              </p>
            )}

            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Get instant lifetime access to all 20 lessons, practice sandboxes, real projects, and 24/7 AI tutor guidance.
            </p>
          </div>

          {/* Pricing Highlight Card */}
          <div className="bg-gradient-to-br from-amber-50/70 via-yellow-50/40 to-slate-50 border-2 border-amber-300/80 rounded-2xl p-5 mb-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
                ₹999
              </span>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm text-slate-400 line-through font-semibold">₹2,499</span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-rose-500 text-white">
                  60% OFF
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-900/90 block mt-1">
              One-time payment • Lifetime access • Zero monthly fees
            </span>
          </div>

          {/* Value Checklist */}
          <div className="space-y-2.5 mb-7">
            {[
              'All 20+ lessons unlocked instantly',
              'Hands-on interactive practice exercises & quizzes',
              'Real-world portfolio projects for your resume',
              'Downloadable notes, Jupyter notebooks & code files',
              '24/7 AI Mentor assistance with step-by-step hints',
              'Verified Course Completion Certificate for LinkedIn',
              '100% 7-day money-back guarantee'
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={handleUnlock}
            disabled={isLoading}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-400/35 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
            ) : (
              <>
                <Crown className="w-4 h-4 fill-slate-950" />
                <span>Unlock All Lessons Now for ₹999</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* 1-Click Demo Instant Unlock for testing */}
          <div className="pt-3 text-center">
            <button
              onClick={handleUnlock}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-2 flex items-center justify-center gap-1 mx-auto cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              1-Click Instant Demo Unlock
            </button>
          </div>

          {/* Trust Footer */}
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              256-bit Secure Checkout
            </span>
            <span>•</span>
            <span>Instant Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};
