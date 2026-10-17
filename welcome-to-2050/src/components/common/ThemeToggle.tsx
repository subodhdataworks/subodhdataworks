import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { SoundEffects } from '../../services/soundEffects';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = '',
  showLabel = false,
}) => {
  return (
    <button
      onClick={() => {
        SoundEffects.playDiscovery();
        onToggle();
      }}
      data-testid="theme-toggle-btn"
      className={`relative p-2 rounded-xl transition-all flex items-center gap-2 font-mono text-xs cursor-pointer select-none ${
        theme === 'dark'
          ? 'bg-white/10 hover:bg-white/20 border border-white/15 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.25)] hover:shadow-[0_0_18px_rgba(251,191,36,0.4)]'
          : 'bg-slate-100 hover:bg-slate-200 border border-slate-300/80 text-indigo-600 shadow-sm hover:shadow'
      } ${className}`}
      title={theme === 'dark' ? 'Switch to Light Mode ☀️' : 'Switch to Dark Mode 🌙'}
      aria-label="Toggle Dark and Light Mode"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
        ) : (
          <Moon className="w-4 h-4 fill-indigo-500 text-indigo-600" />
        )}
      </div>

      {showLabel && (
        <span className="font-bold hidden sm:inline">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
