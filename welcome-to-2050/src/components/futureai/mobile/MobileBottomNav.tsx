import React from 'react';
import { Home, GraduationCap, Code2, Briefcase } from 'lucide-react';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

export type MobileTab = 'home' | 'learn' | 'game' | 'arena' | 'earn' | 'placement' | 'profile';

interface MobileBottomNavProps {
  currentTab: MobileTab;
  onSelectTab: (tab: MobileTab) => void;
  unreadEarnBadge?: boolean;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  onSelectTab,
  unreadEarnBadge = true,
}) => {
  const { playClick } = useThemeAccent();

  const handleTabClick = (tab: MobileTab) => {
    playClick?.();
    onSelectTab(tab);
  };

  const isTabActive = (tabId: MobileTab) => {
    if (tabId === 'game') return currentTab === 'game' || currentTab === 'arena';
    if (tabId === 'arena') return currentTab === 'game' || currentTab === 'arena';
    return currentTab === tabId;
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 select-none pb-[env(safe-area-inset-bottom,0px)] bg-white/95 backdrop-blur-2xl border-t border-slate-200/80 shadow-[0_-8px_32px_rgba(15,23,42,0.08)]">
      {/* Top subtle gloss highlight line */}
      <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-blue-500/35 to-transparent" />

      <nav className="max-w-md mx-auto px-2 pt-1.5 pb-1 flex items-center justify-between relative">
        {/* Tab 1: Home */}
        <button
          type="button"
          onClick={() => handleTabClick('home')}
          className="flex-1 flex flex-col items-center justify-center py-0.5 cursor-pointer active:scale-90 transition-transform duration-150 relative group"
        >
          <div
            className={`flex items-center justify-center w-10 h-7 rounded-2xl transition-all duration-200 ${
              isTabActive('home')
                ? 'bg-gradient-to-b from-blue-50 to-sky-100/80 text-blue-600 shadow-xs ring-1 ring-blue-200/70'
                : 'text-slate-400 group-hover:text-slate-600'
            }`}
          >
            <Home
              className={`w-[19px] h-[19px] transition-transform duration-200 ${
                isTabActive('home') ? 'scale-110 stroke-[2.4] fill-blue-600/15' : 'stroke-[1.8]'
              }`}
            />
          </div>
          <span
            className={`text-[9.5px] tracking-tight mt-0.5 transition-all duration-200 ${
              isTabActive('home')
                ? 'font-black text-blue-600'
                : 'font-semibold text-slate-500'
            }`}
          >
            Home
          </span>
          {isTabActive('home') ? (
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.9)] mt-0.5" />
          ) : (
            <span className="w-1.5 h-1.5 mt-0.5 opacity-0" />
          )}
        </button>

        {/* Tab 2: My Learning */}
        <button
          type="button"
          onClick={() => handleTabClick('learn')}
          className="flex-1 flex flex-col items-center justify-center py-0.5 cursor-pointer active:scale-90 transition-transform duration-150 relative group"
        >
          <div
            className={`flex items-center justify-center w-10 h-7 rounded-2xl transition-all duration-200 ${
              isTabActive('learn')
                ? 'bg-gradient-to-b from-indigo-50 to-purple-100/80 text-indigo-600 shadow-xs ring-1 ring-indigo-200/70'
                : 'text-slate-400 group-hover:text-slate-600'
            }`}
          >
            <GraduationCap
              className={`w-[20px] h-[20px] transition-transform duration-200 ${
                isTabActive('learn') ? 'scale-110 stroke-[2.4] fill-indigo-600/15' : 'stroke-[1.8]'
              }`}
            />
          </div>
          <span
            className={`text-[9.5px] tracking-tight mt-0.5 transition-all duration-200 ${
              isTabActive('learn')
                ? 'font-black text-indigo-600'
                : 'font-semibold text-slate-500'
            }`}
          >
            My Learning
          </span>
          {isTabActive('learn') ? (
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.9)] mt-0.5" />
          ) : (
            <span className="w-1.5 h-1.5 mt-0.5 opacity-0" />
          )}
        </button>

        {/* Tab 3: Center Game Button (Elevated Holographic 3D Gaming Orb) */}
        <div className="flex-1 flex flex-col items-center justify-center relative -top-3.5">
          <button
            type="button"
            onClick={() => handleTabClick('game')}
            className={`relative w-[50px] h-[50px] rounded-full p-0.5 cursor-pointer active:scale-90 transition-transform duration-150 flex items-center justify-center ${
              isTabActive('game')
                ? 'shadow-[0_8px_24px_rgba(37,99,235,0.45)]'
                : 'shadow-[0_6px_20px_rgba(15,23,42,0.18)]'
            }`}
            aria-label="Hackathon/DSA Practice"
          >
            {/* Shimmer Outer Ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 animate-pulse" />
            {/* White separator halo */}
            <span className="absolute inset-[2.5px] rounded-full bg-white" />
            {/* Inner Gradient Core */}
            <span className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center text-white overflow-hidden shadow-inner">
              {/* Gloss highlight */}
              <span className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-full pointer-events-none" />
              <Code2 className="w-6 h-6 stroke-[2.3] relative z-10 drop-shadow-sm" />
            </span>
          </button>
          <span
            className={`text-[9.5px] font-black tracking-tight mt-1 transition-colors ${
              isTabActive('game') ? 'text-purple-600' : 'text-slate-700'
            }`}
          >
            Hackathon/DSA Practice
          </span>
        </div>

        {/* Tab 4: Earn */}
        <button
          type="button"
          onClick={() => handleTabClick('earn')}
          className="flex-1 flex flex-col items-center justify-center py-0.5 cursor-pointer active:scale-90 transition-transform duration-150 relative group"
        >
          <div
            className={`flex items-center justify-center w-10 h-7 rounded-2xl transition-all duration-200 relative ${
              isTabActive('earn')
                ? 'bg-gradient-to-b from-amber-50 to-orange-100/80 text-amber-600 shadow-xs ring-1 ring-amber-200/70'
                : 'text-slate-400 group-hover:text-slate-600'
            }`}
          >
            {/* 3D Embossed Gold Coin */}
            <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 text-slate-950 flex items-center justify-center text-[10.5px] font-black shadow-[0_2px_6px_rgba(245,158,11,0.4)] border border-amber-200/90 leading-none">
              ₹
            </div>
            {/* Unread live badge */}
            {unreadEarnBadge && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
            )}
          </div>
          <span
            className={`text-[9.5px] tracking-tight mt-0.5 transition-all duration-200 ${
              isTabActive('earn')
                ? 'font-black text-amber-600'
                : 'font-semibold text-slate-500'
            }`}
          >
            Affiliate
          </span>
          {isTabActive('earn') ? (
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)] mt-0.5" />
          ) : (
            <span className="w-1.5 h-1.5 mt-0.5 opacity-0" />
          )}
        </button>

        {/* Tab 5: Placement */}
        <button
          type="button"
          onClick={() => handleTabClick('placement')}
          className="flex-1 flex flex-col items-center justify-center py-0.5 cursor-pointer active:scale-90 transition-transform duration-150 relative group"
        >
          <div
            className={`flex items-center justify-center w-10 h-7 rounded-2xl transition-all duration-200 ${
              isTabActive('placement')
                ? 'bg-gradient-to-b from-rose-50 to-pink-100/80 text-rose-600 shadow-xs ring-1 ring-rose-200/70'
                : 'text-slate-400 group-hover:text-slate-600'
            }`}
          >
            <Briefcase
              className={`w-[19px] h-[19px] transition-transform duration-200 ${
                isTabActive('placement') ? 'scale-110 stroke-[2.4] fill-rose-600/15' : 'stroke-[1.8]'
              }`}
            />
          </div>
          <span
            className={`text-[9.5px] tracking-tight mt-0.5 transition-all duration-200 ${
              isTabActive('placement')
                ? 'font-black text-rose-600'
                : 'font-semibold text-slate-500'
            }`}
          >
            Placement
          </span>
          {isTabActive('placement') ? (
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shadow-[0_0_8px_rgba(225,29,72,0.9)] mt-0.5" />
          ) : (
            <span className="w-1.5 h-1.5 mt-0.5 opacity-0" />
          )}
        </button>
      </nav>
    </div>
  );
};
