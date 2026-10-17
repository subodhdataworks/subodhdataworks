import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

interface VideoCinemaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoCinemaModal: React.FC<VideoCinemaModalProps> = ({ isOpen, onClose }) => {
  const { playHover, playClick } = useThemeAccent();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl flex flex-col">
        
        {/* Top Header Bar */}
        <div className="p-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Future.AI 2050 — Official Experience Video
            </span>
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            onMouseEnter={playHover}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            src="/future_ai_hero_video.mp4"
            poster="/images/hero-student-robot-poster.jpg"
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>

        {/* Subtitle / Footer */}
        <div className="px-5 py-3.5 bg-slate-900 text-xs text-slate-400 flex items-center justify-between border-t border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>AI Humanoid Mentorship · Holographic Career Path · 2050 Learning Tech</span>
          </div>
          <span className="text-cyan-400 font-semibold">Power Green Industries</span>
        </div>

      </div>
    </div>
  );
};
