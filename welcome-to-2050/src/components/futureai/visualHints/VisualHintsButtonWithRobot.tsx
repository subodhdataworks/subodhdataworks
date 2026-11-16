import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export interface VisualHintsGlowingButtonProps {
  onClick: () => void;
  size?: 'sm' | 'md';
}

/**
 * Visual Hints Button:
 * - Clean White background
 * - Hand pointing gesture removed
 * - Continuous Google AI Mode style rainbow running border light (runs 24/7 without hovering)
 *   Google AI Colors: #4285F4 (Blue), #EA4335 (Red), #FBBC05 (Yellow), #34A853 (Green), #00f2fe (Cyan)
 */
export const VisualHintsGlowingButton: React.FC<VisualHintsGlowingButtonProps> = ({
  onClick,
  size = 'md',
}) => {
  const isSm = size === 'sm';

  return (
    <div className="relative inline-flex items-center select-none">
      {/* ─── BUTTON CONTAINER WITH ALWAYS-RUNNING GOOGLE AI RAINBOW BORDER LIGHT ─── */}
      <div className="relative inline-flex p-[2.5px] rounded-xl overflow-hidden shadow-[0_0_14px_rgba(66,133,244,0.3)] hover:shadow-[0_0_20px_rgba(66,133,244,0.55)] transition-all duration-300">
        
        {/* Continuous Soft Ambient Rainbow Glow (Runs 24/7 without mouse hover) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -inset-[220%] pointer-events-none blur-[4px] opacity-80 bg-[conic-gradient(from_0deg,transparent_0_150deg,#4285F4_210deg,#EA4335_250deg,#FBBC05_285deg,#34A853_320deg,#00f2fe_360deg)]"
        />

        {/* Continuous Sharp Rainbow Light Stream (Runs 24/7 around all 4 edges) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -inset-[220%] pointer-events-none opacity-100 bg-[conic-gradient(from_0deg,transparent_0_150deg,#4285F4_210deg,#EA4335_250deg,#FBBC05_285deg,#34A853_320deg,#00f2fe_360deg)]"
        />

        {/* ─── THE WHITE BUTTON (CLEAN WHITE BACKGROUND, BOLD MODERN TEXT) ─── */}
        <button
          type="button"
          onClick={onClick}
          aria-label="Open Visual Hints"
          className={`relative z-10 inline-flex items-center gap-1.5 rounded-[9.5px] bg-white hover:bg-slate-50/95 active:scale-95 text-slate-900 font-black shadow-xs transition-all duration-200 cursor-pointer border border-slate-100 ${
            isSm ? 'px-3 py-1.5 text-[11px]' : 'px-3.5 py-1.5 text-xs'
          }`}
        >
          {/* Button Text */}
          <span className="tracking-wide text-slate-800 font-extrabold">
            Visual Hints
          </span>

          {/* Sparkles Icon with Google Blue Accent */}
          <Sparkles className={`${isSm ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-[#1a73e8] drop-shadow-[0_0_6px_rgba(66,133,244,0.5)] animate-pulse`} />
        </button>
      </div>
    </div>
  );
};

export const VisualHintsButtonWithRobot = VisualHintsGlowingButton;
export default VisualHintsGlowingButton;
