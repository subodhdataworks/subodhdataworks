import React from 'react';
import { Home, GraduationCap, Gamepad2, Users } from 'lucide-react';
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
    <div className="fixed bottom-0 inset-x-0 z-50 select-none pb-[env(safe-area-inset-bottom,0px)] bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
      <nav className="max-w-md mx-auto px-2 py-1.5 flex items-center justify-between relative">
        {/* Tab 1: Home */}
        <button
          type="button"
          onClick={() => handleTabClick('home')}
          className="flex-1 flex flex-col items-center justify-center py-1 cursor-pointer active:scale-95 transition-all relative"
        >
          <Home
            className={`w-5 h-5 transition-colors ${
              isTabActive('home') ? 'text-blue-600 fill-blue-600' : 'text-slate-400'
            }`}
          />
          <span
            className={`text-[10px] font-black mt-0.5 ${
              isTabActive('home') ? 'text-blue-600' : 'text-slate-500'
            }`}
          >
            Home
          </span>
          {isTabActive('home') && (
            <span className="w-5 h-0.5 rounded-full bg-blue-600 mt-0.5" />
          )}
        </button>

        {/* Tab 2: Learn */}
        <button
          type="button"
          onClick={() => handleTabClick('learn')}
          className="flex-1 flex flex-col items-center justify-center py-1 cursor-pointer active:scale-95 transition-all relative"
        >
          <GraduationCap
            className={`w-5 h-5 transition-colors ${
              isTabActive('learn') ? 'text-blue-600 fill-blue-600' : 'text-slate-500'
            }`}
          />
          <span
            className={`text-[10px] font-bold mt-0.5 ${
              isTabActive('learn') ? 'text-blue-600 font-black' : 'text-slate-500'
            }`}
          >
            My Learning
          </span>
          {isTabActive('learn') && (
            <span className="w-5 h-0.5 rounded-full bg-blue-600 mt-0.5" />
          )}
        </button>

        {/* Tab 3: Game (Center Elevated Glowing Button matching Reference Design) */}
        <div className="flex-1 flex flex-col items-center justify-center relative -top-3">
          <button
            type="button"
            onClick={() => handleTabClick('game')}
            className="w-13 h-13 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/35 border-[3.5px] border-white flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            aria-label="Coding Games"
          >
            <Gamepad2 className="w-6 h-6 stroke-[2.2]" />
          </button>
          <span
            className={`text-[10px] font-black mt-0.5 ${
              isTabActive('game') ? 'text-blue-600' : 'text-slate-600'
            }`}
          >
            Game
          </span>
        </div>

        {/* Tab 4: Earn */}
        <button
          type="button"
          onClick={() => handleTabClick('earn')}
          className="flex-1 flex flex-col items-center justify-center py-1 cursor-pointer active:scale-95 transition-all relative"
        >
          <div className="w-5 h-5 rounded-md bg-amber-400 text-white flex items-center justify-center text-[11px] font-black shadow-xs">
            ₹
          </div>
          <span
            className={`text-[10px] font-bold mt-0.5 ${
              isTabActive('earn') ? 'text-blue-600 font-black' : 'text-slate-500'
            }`}
          >
            Earn
          </span>
          {isTabActive('earn') && (
            <span className="w-5 h-0.5 rounded-full bg-blue-600 mt-0.5" />
          )}
        </button>

        {/* Tab 5: Placement */}
        <button
          type="button"
          onClick={() => handleTabClick('placement')}
          className="flex-1 flex flex-col items-center justify-center py-1 cursor-pointer active:scale-95 transition-all relative"
        >
          <Users
            className={`w-5 h-5 transition-colors ${
              isTabActive('placement') ? 'text-rose-600' : 'text-orange-500'
            }`}
          />
          <span
            className={`text-[10px] font-bold mt-0.5 ${
              isTabActive('placement') ? 'text-blue-600 font-black' : 'text-slate-500'
            }`}
          >
            Placement
          </span>
          {isTabActive('placement') && (
            <span className="w-5 h-0.5 rounded-full bg-blue-600 mt-0.5" />
          )}
        </button>
      </nav>
    </div>
  );
};
