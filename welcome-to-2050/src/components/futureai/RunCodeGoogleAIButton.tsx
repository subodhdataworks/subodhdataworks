import React from 'react';
import { Play } from 'lucide-react';

export interface RunCodeGoogleAIButtonProps {
  onClick: () => void;
  isRunning?: boolean;
  className?: string;
  isMobile?: boolean;
}

/**
 * Run Code Button with Google AI Mode / Gemini Search style continuous running rainbow light border on hover.
 * Google AI Colors: #4285F4 (Blue), #EA4335 (Red), #FBBC05 (Yellow), #34A853 (Green), #00f2fe (Cyan)
 */
export const RunCodeGoogleAIButton: React.FC<RunCodeGoogleAIButtonProps> = ({
  onClick,
  isRunning = false,
  className = '',
  isMobile = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`pca-run-code-wrapper ${isRunning ? 'is-running' : ''}`}
    >
      {/* ─── BASE RESTING BORDER (Fades out when hovered or running) ─── */}
      <div className="pca-run-code-resting-border" />

      {/* ─── GOOGLE AI MODE CONTINUOUS RUNNING RAINBOW BORDER LIGHT (BLUR GLOW) ─── */}
      <div className="pca-run-code-light-glow" />

      {/* ─── GOOGLE AI MODE CONTINUOUS RUNNING RAINBOW BORDER LIGHT (SHARP STREAM) ─── */}
      <div className="pca-run-code-light-stream" />

      {/* ─── INNER BUTTON CONTENT ─── */}
      <button
        type="button"
        disabled={isRunning}
        className={`relative z-10 w-full rounded-[9.5px] bg-white hover:bg-slate-50/95 active:scale-95 font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 text-[#1a73e8] hover:text-blue-600 ${
          isMobile ? 'py-[7px] px-2.5 text-xs' : 'py-2 px-3 text-xs sm:text-sm'
        } ${className}`}
      >
        <Play className={`w-3.5 h-3.5 fill-current text-blue-600 shrink-0 ${isRunning ? 'animate-spin' : ''}`} />
        <span className="truncate">{isRunning ? 'Running...' : 'Run Code'}</span>
      </button>
    </div>
  );
};

export default RunCodeGoogleAIButton;
