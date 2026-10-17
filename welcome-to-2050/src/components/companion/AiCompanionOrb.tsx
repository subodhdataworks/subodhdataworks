import React, { useState, useEffect } from 'react';
import { Voice, CompanionState } from '../../services/voiceService';
import { SoundEffects } from '../../services/soundEffects';

interface AiCompanionOrbProps {
  message?: string;
  subMessage?: string;
  onCompanionClick?: () => void;
  inputMode?: 'speak' | 'type' | 'tap';
  isMuted?: boolean;
  onToggleMute?: () => void;
}

export const AiCompanionOrb: React.FC<AiCompanionOrbProps> = ({
  message,
  subMessage,
  onCompanionClick,
  isMuted = false,
  onToggleMute,
}) => {
  const [state, setState] = useState<CompanionState>('idle');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  useEffect(() => {
    Voice.onStateChange((newState) => {
      setState(newState);
    });
  }, []);

  // When a new message arrives, speak it if not muted
  useEffect(() => {
    if (message && !isMuted) {
      Voice.speak(message);
    }
  }, [message, isMuted]);

  const handleOrbClick = () => {
    if (state === 'speaking') {
      Voice.stopSpeaking();
    } else if (message) {
      Voice.speak(message);
    }
    if (onCompanionClick) {
      onCompanionClick();
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* 2050 Intelligent Floating Orb */}
      <div className="relative group cursor-pointer" onClick={handleOrbClick} title="2050 AI Mentor Presence">
        {/* State: Listening expanding rings */}
        {state === 'listening' && (
          <div className="absolute inset-0 rounded-full border-2 border-quantum-teal/60 animate-ring-expand pointer-events-none" />
        )}

        {/* State: Thinking subtle pulse */}
        {state === 'thinking' && (
          <div className="absolute -inset-1 rounded-full bg-solar-gold/20 animate-pulse pointer-events-none" />
        )}

        {/* Ambient intelligent glow */}
        <div 
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${
            state === 'speaking'
              ? 'bg-deep-space text-quantum-teal shadow-teal-glow ring-2 ring-quantum-teal/40'
              : state === 'listening'
              ? 'bg-quantum-teal text-white shadow-teal-glow ring-4 ring-quantum-teal/30'
              : state === 'thinking'
              ? 'bg-deep-space text-solar-gold ring-2 ring-solar-gold/40'
              : 'bg-white text-deep-space border border-lab-900/10 hover:border-quantum-teal/50'
          }`}
        >
          {/* Animated visual state inside orb */}
          {state === 'speaking' ? (
            /* Soft Waveform */
            <div className="flex items-center gap-0.5 h-4">
              <span className="w-0.5 bg-quantum-teal rounded-full animate-waveform" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 bg-quantum-teal rounded-full animate-waveform" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 bg-quantum-teal rounded-full animate-waveform" style={{ animationDelay: '300ms' }} />
              <span className="w-0.5 bg-quantum-teal rounded-full animate-waveform" style={{ animationDelay: '450ms' }} />
            </div>
          ) : state === 'listening' ? (
            /* Pulsing center for mic */
            <span className="w-3 h-3 rounded-full bg-white animate-ping" />
          ) : state === 'thinking' ? (
            /* Subtle pulse dot */
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-solar-gold animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-solar-gold animate-bounce" style={{ animationDelay: '150ms' }} />
            </div>
          ) : (
            /* Idle: Calm Intelligent Core */
            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-quantum-teal animate-pulse-subtle" />
              <div className="absolute w-5 h-5 rounded-full border border-quantum-teal/30" />
            </div>
          )}
        </div>
      </div>

      {/* Floating Minimal AI Message Capsule */}
      {message && isExpanded && (
        <div className="hidden sm:flex flex-col bg-white border border-lab-900/10 rounded-2xl px-4 py-2.5 shadow-subtle max-w-md animate-fadeIn">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-semibold text-quantum-teal tracking-wider uppercase font-mono">
              2050 AI Companion
            </span>
            <div className="flex items-center gap-1">
              {onToggleMute && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleMute();
                  }}
                  className="text-lab-400 hover:text-deep-space text-xs px-1"
                  title={isMuted ? 'Unmute voice' : 'Mute voice'}
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>
              )}
              <button
                onClick={() => setIsExpanded(false)}
                className="text-lab-400 hover:text-deep-space text-xs"
              >
                ✕
              </button>
            </div>
          </div>
          <p className="text-sm text-deep-space font-medium mt-0.5 leading-snug">
            {message}
          </p>
          {subMessage && (
            <p className="text-xs text-lab-500 mt-0.5">
              {subMessage}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
