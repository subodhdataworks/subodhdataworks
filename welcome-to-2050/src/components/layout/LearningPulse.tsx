import React from 'react';
import { PulseState } from '../../types';

interface LearningPulseProps {
  state: PulseState;
  label?: string;
  className?: string;
}

export const LearningPulse: React.FC<LearningPulseProps> = ({
  state,
  label,
  className = '',
}) => {
  const getPulseVisual = () => {
    switch (state) {
      case 'ai-speaking':
        return (
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-quantum-teal animate-ping" />
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 bg-quantum-teal rounded-full animate-waveform" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 bg-quantum-teal rounded-full animate-waveform" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 bg-quantum-teal rounded-full animate-waveform" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-[10px] font-mono text-quantum-teal font-medium tracking-wide">
              {label || 'AI TEACHING'}
            </span>
          </div>
        );

      case 'learner-speaking':
        return (
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-quantum-teal"></span>
            </span>
            <span className="text-[10px] font-mono text-quantum-teal font-medium tracking-wide">
              {label || 'LISTENING TO YOU'}
            </span>
          </div>
        );

      case 'learner-thinking':
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-future-blue animate-pulse-subtle" />
            <span className="text-[10px] font-mono text-future-blue font-medium tracking-wide">
              {label || 'PONDERING CONTEXT'}
            </span>
          </div>
        );

      case 'prediction-submitted':
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-solar-gold" />
            <span className="text-[10px] font-mono text-solar-gold font-medium tracking-wide">
              {label || 'HYPOTHESIS LOCKED'}
            </span>
          </div>
        );

      case 'code-running':
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-quantum-teal animate-spin" />
            <span className="text-[10px] font-mono text-quantum-teal font-medium tracking-wide">
              {label || '0.002s RUNTIME'}
            </span>
          </div>
        );

      case 'breakthrough':
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-solar-gold ring-4 ring-solar-gold/30 animate-pulse" />
            <span className="text-[10px] font-mono text-solar-gold font-bold tracking-wide">
              {label || 'BREAKTHROUGH'}
            </span>
          </div>
        );

      case 'mission-completed':
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-teal-glow" />
            <span className="text-[10px] font-mono text-emerald-600 font-bold tracking-wide">
              {label || 'CAPABILITY UNLOCKED'}
            </span>
          </div>
        );

      case 'idle':
      default:
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-lab-400 animate-pulse-subtle" />
            <span className="text-[10px] font-mono text-lab-400 tracking-wide">
              {label || 'LEARNING PULSE ACTIVE'}
            </span>
          </div>
        );
    }
  };

  return (
    <div className={`inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-lab-900/10 shadow-sm transition-all duration-300 ${className}`}>
      {getPulseVisual()}
    </div>
  );
};
