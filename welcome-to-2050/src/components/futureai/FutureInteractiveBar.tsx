import React, { useState } from 'react';
import { Volume2, VolumeX, Palette, ChevronDown, Check } from 'lucide-react';
import { useThemeAccent, ACCENT_PALETTES, AccentTheme } from '../../context/ThemeAccentContext';

interface FutureInteractiveBarProps {
  onOpenCinema?: () => void;
}

export const FutureInteractiveBar: React.FC<FutureInteractiveBarProps> = () => {
  const {
    accent,
    accentConfig,
    setAccent,
    soundEnabled,
    toggleSound,
    playHover,
    playClick,
  } = useThemeAccent();

  const [paletteOpen, setPaletteOpen] = useState(false);
  const accentsList = Object.values(ACCENT_PALETTES);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2">
      
      {/* 1. Popover: Accent Color Switcher */}
      {paletteOpen && (
        <div className="p-3.5 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-sky-900/20 w-64 sm:w-72 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Palette className="w-3.5 h-3.5 text-sky-600" />
              <span>Button Color Theme</span>
            </div>
            <span className="text-[10px] font-semibold text-slate-400">Interactive</span>
          </div>

          <div className="mt-2.5 space-y-1">
            {accentsList.map((item) => {
              const isSelected = item.id === accent;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setAccent(item.id as AccentTheme);
                    playClick();
                  }}
                  onMouseEnter={playHover}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-slate-100/90 font-bold text-slate-900 ring-1 ring-slate-300'
                      : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full shadow-xs border border-white shrink-0"
                      style={{ backgroundColor: item.dotColor }}
                    />
                    <span className="text-xs truncate">{item.name}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Floating Control Pill */}
      <div className="flex items-center gap-1.5 p-1 sm:p-1.5 rounded-full bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10">
        
        {/* Button Color Switcher Toggle */}
        <button
          onClick={() => {
            playClick();
            setPaletteOpen(!paletteOpen);
          }}
          onMouseEnter={playHover}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            paletteOpen
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
          title="Change Button Color"
        >
          <span
            className="w-3.5 h-3.5 rounded-full border border-white shadow-xs"
            style={{ backgroundColor: accentConfig.dotColor }}
          />
          <span className="hidden sm:inline font-bold">Button Color</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </button>

        {/* Sound Toggle (with button sound) */}
        <button
          onClick={() => {
            toggleSound();
            playClick();
          }}
          onMouseEnter={playHover}
          className={`p-2 rounded-full transition-all cursor-pointer ${
            soundEnabled
              ? 'bg-sky-50 text-sky-600 hover:bg-sky-100'
              : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
          }`}
          title={soundEnabled ? 'Button Sound: Enabled' : 'Button Sound: Muted'}
          aria-label="Toggle Sound"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-sky-600 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}
        </button>

      </div>

    </div>
  );
};
