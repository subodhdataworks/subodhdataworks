import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundEffects } from '../services/soundEffects';

export type AccentTheme = 'emerald-cyan' | 'cyber-purple' | 'solar-amber' | 'electric-blue' | 'quantum-mint';

export interface AccentConfig {
  id: AccentTheme;
  name: string;
  dotColor: string;
  btnGradient: string;
  btnHoverGradient: string;
  shadowClass: string;
  accentTextClass: string;
  borderClass: string;
}

export const ACCENT_PALETTES: Record<AccentTheme, AccentConfig> = {
  'emerald-cyan': {
    id: 'emerald-cyan',
    name: 'Future Emerald-Cyan (Official)',
    dotColor: '#00E599',
    btnGradient: 'from-[#00E599] via-[#00B4D8] to-[#1D4ED8]',
    btnHoverGradient: 'hover:from-[#00D089] hover:via-[#00A3C4] hover:to-[#1740B6]',
    shadowClass: 'shadow-cyan-500/25 hover:shadow-cyan-500/35',
    accentTextClass: 'text-[#0284C7]',
    borderClass: 'border-cyan-400/40',
  },
  'cyber-purple': {
    id: 'cyber-purple',
    name: 'Cyberpunk Neon Violet',
    dotColor: '#A855F7',
    btnGradient: 'from-[#A855F7] via-[#EC4899] to-[#3B82F6]',
    btnHoverGradient: 'hover:from-[#9333EA] hover:via-[#DB2777] hover:to-[#2563EB]',
    shadowClass: 'shadow-purple-500/25 hover:shadow-purple-500/35',
    accentTextClass: 'text-[#A855F7]',
    borderClass: 'border-purple-400/40',
  },
  'solar-amber': {
    id: 'solar-amber',
    name: 'Solar Plasma Orange',
    dotColor: '#F59E0B',
    btnGradient: 'from-[#F59E0B] via-[#EF4444] to-[#8B5CF6]',
    btnHoverGradient: 'hover:from-[#D97706] hover:via-[#DC2626] hover:to-[#7C3AED]',
    shadowClass: 'shadow-amber-500/25 hover:shadow-amber-500/35',
    accentTextClass: 'text-[#F59E0B]',
    borderClass: 'border-amber-400/40',
  },
  'electric-blue': {
    id: 'electric-blue',
    name: 'Hyper Electric Blue',
    dotColor: '#0072FF',
    btnGradient: 'from-[#00F0FF] via-[#0072FF] to-[#1D4ED8]',
    btnHoverGradient: 'hover:from-[#00D8E6] hover:via-[#005ED1] hover:to-[#1740B6]',
    shadowClass: 'shadow-blue-500/25 hover:shadow-blue-500/35',
    accentTextClass: 'text-[#0072FF]',
    borderClass: 'border-blue-400/40',
  },
  'quantum-mint': {
    id: 'quantum-mint',
    name: 'Quantum Matrix Mint',
    dotColor: '#10B981',
    btnGradient: 'from-[#10B981] via-[#06B6D4] to-[#3B82F6]',
    btnHoverGradient: 'hover:from-[#059669] hover:via-[#0891B2] hover:to-[#2563EB]',
    shadowClass: 'shadow-emerald-500/25 hover:shadow-emerald-500/35',
    accentTextClass: 'text-[#10B981]',
    borderClass: 'border-emerald-400/40',
  },
};

interface ThemeAccentContextType {
  accent: AccentTheme;
  accentConfig: AccentConfig;
  setAccent: (accent: AccentTheme) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  playHover: () => void;
  playClick: () => void;
  playCinema: () => void;
  activeVideoIndex: number;
  setActiveVideoIndex: (idx: number) => void;
  videoList: { id: number; title: string; subtitle: string; src: string; poster: string }[];
}

const ThemeAccentContext = createContext<ThemeAccentContextType | undefined>(undefined);

export const ThemeAccentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accent, setAccentState] = useState<AccentTheme>('emerald-cyan');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);

  const videoList = [
    {
      id: 1,
      title: 'Scene 01: 2050 Career Acceleration Studio',
      subtitle: 'Industry Mentorship & Guaranteed Placement',
      src: '/assets/videos/pap_new_video.mp4',
      poster: '/assets/videos/pap_snap_mid.jpg',
    },
    {
      id: 2,
      title: 'Scene 02: 2050 Data Analyst & GenAI Studio',
      subtitle: 'AI Robot Tutor & Holographic Intelligence',
      src: '/assets/videos/program_highlights_new.mp4',
      poster: '/assets/videos/new_ph_snap_mid.jpg',
    },
    {
      id: 3,
      title: 'Scene 03: Career Velocity Loop',
      subtitle: 'Industry Mentorship & Guaranteed Placement',
      src: '/assets/videos/cinematic_3.mp4',
      poster: '/assets/videos/frame_3.jpg',
    },
  ];

  useEffect(() => {
    const savedAccent = localStorage.getItem('future_ai_btn_accent') as AccentTheme | null;
    if (savedAccent && ACCENT_PALETTES[savedAccent]) {
      setAccentState(savedAccent);
    }
    setSoundEnabled(soundEffects.getSoundEnabled());
  }, []);

  const setAccent = (newAccent: AccentTheme) => {
    setAccentState(newAccent);
    localStorage.setItem('future_ai_btn_accent', newAccent);
    soundEffects.playColorChange();
  };

  const toggleSound = () => {
    const nextState = soundEffects.toggleSound();
    setSoundEnabled(nextState);
  };

  return (
    <ThemeAccentContext.Provider
      value={{
        accent,
        accentConfig: ACCENT_PALETTES[accent],
        setAccent,
        soundEnabled,
        toggleSound,
        playHover: () => soundEffects.playHover(),
        playClick: () => soundEffects.playClick(),
        playCinema: () => soundEffects.playCinema(),
        activeVideoIndex,
        setActiveVideoIndex,
        videoList,
      }}
    >
      {children}
    </ThemeAccentContext.Provider>
  );
};

export const useThemeAccent = (): ThemeAccentContextType => {
  const context = useContext(ThemeAccentContext);
  if (!context) {
    throw new Error('useThemeAccent must be used within a ThemeAccentProvider');
  }
  return context;
};
