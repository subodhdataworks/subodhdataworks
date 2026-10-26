import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';

interface LearningModulesProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetFeature?: 'Internship' | 'Certificate' | 'Placement' | string;
  onGoToModules?: () => void;
  onNavigateToModule?: (moduleId: string) => void;
  initialPythonCompleted?: boolean;
}

export const LearningModulesProgressModal: React.FC<LearningModulesProgressModalProps> = ({
  isOpen,
  onClose,
  onGoToModules,
}) => {
  // Sound and animated confetti burst on open
  useEffect(() => {
    if (isOpen) {
      try {
        soundEffects.playDiscovery();
      } catch {
        // audio policy fallback
      }

      try {
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.35 },
          colors: ['#0066ff', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'],
          disableForReducedMotion: true,
        });
      } catch {
        // ignore
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCtaClick = () => {
    soundEffects.playClick();
    onClose();
    if (onGoToModules) {
      onGoToModules();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3.5 sm:p-4 select-none animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[410px] bg-white rounded-[28px] sm:rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,40,130,0.45)] border border-blue-100 overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Top Hero Graphic (Robot Graduate, Trophy, Future IT Logo & Placement Shield) ── */}
        <div className="relative w-full overflow-hidden bg-[#ebf4ff]">
          <img
            src="/images/placement/placement_modal_hero_real.jpg"
            alt="Placement Guarantee"
            className="w-full h-auto block select-none pointer-events-none"
          />

          {/* Interactive Close Button */}
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-800 flex items-center justify-center shadow-md active:scale-90 transition-all cursor-pointer z-30"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-900 stroke-[2.5]" />
          </button>
        </div>

        {/* ── Middle Banner Pill: "Complete Any 1 Course 🚀" ── */}
        <div className="mx-4 sm:mx-5 -mt-3.5 relative z-10 bg-[#ebf4ff] border border-[#cfe4fc] rounded-[22px] py-3.5 px-4 text-center shadow-2xs">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-[17px] sm:text-[18px] font-black text-[#0f214d] tracking-tight leading-snug">
              Complete Any 1 Course 🚀
            </h3>
          </div>
          <p className="text-[12px] sm:text-[13px] font-bold text-[#1d52d8] mt-1 leading-snug">
            to Unlock Your Internship, Certificate &amp; Placement
          </p>
        </div>

        {/* ── 3 Benefits Columns Row ── */}
        <div className="grid grid-cols-3 divide-x divide-slate-200/90 px-3 sm:px-4 py-5 sm:py-6 text-center">
          {/* Benefit 1: Get Internship Opportunities */}
          <div className="px-1.5 flex flex-col items-center justify-start">
            <img
              src="/images/placement/icon_briefcase.png"
              alt="Internship"
              className="w-12 h-12 object-contain mb-2.5 drop-shadow-xs"
            />
            <div className="text-[11px] sm:text-xs font-black text-[#0f214d] leading-tight">
              Get Internship<br />Opportunities
            </div>
          </div>

          {/* Benefit 2: Earn Course Certificate */}
          <div className="px-1.5 flex flex-col items-center justify-start">
            <img
              src="/images/placement/icon_certificate.png"
              alt="Certificate"
              className="w-12 h-12 object-contain mb-2.5 drop-shadow-xs"
            />
            <div className="text-[11px] sm:text-xs font-black text-[#0f214d] leading-tight">
              Earn Course<br />Certificate
            </div>
          </div>

          {/* Benefit 3: Be Job-Ready for Better Placements */}
          <div className="px-1.5 flex flex-col items-center justify-start">
            <img
              src="/images/placement/icon_rocket.png"
              alt="Placement"
              className="w-12 h-12 object-contain mb-2.5 drop-shadow-xs"
            />
            <div className="text-[11px] sm:text-xs font-black text-[#0f214d] leading-tight">
              Be Job-Ready<br />for Better Placements
            </div>
          </div>
        </div>

        {/* ── Bottom Main CTA Button ── */}
        <div className="px-4 sm:px-5 pb-5 sm:pb-6 pt-1">
          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0062ff] to-[#0047e1] hover:from-[#0055e6] hover:to-[#003dc7] text-white font-black text-sm sm:text-base py-3.5 px-6 rounded-full shadow-[0_10px_24px_rgba(0,98,255,0.4)] active:scale-98 transition-all cursor-pointer"
          >
            <span>Continue to Your Learning Modules</span>
            <ArrowRight className="w-5 h-5 text-white stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningModulesProgressModal;
