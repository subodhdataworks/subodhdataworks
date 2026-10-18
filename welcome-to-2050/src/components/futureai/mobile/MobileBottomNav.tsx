import React from 'react';
import { Home, GraduationCap, Gamepad2, IndianRupee, Briefcase } from 'lucide-react';
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
  unreadEarnBadge = false,
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

  const navItems = [
    {
      id: 'home' as MobileTab,
      label: 'Home',
      icon: Home,
    },
    {
      id: 'learn' as MobileTab,
      label: 'Learn',
      icon: GraduationCap,
    },
    {
      id: 'game' as MobileTab,
      label: 'Game',
      icon: Gamepad2,
    },
    {
      id: 'earn' as MobileTab,
      label: 'Earn',
      icon: IndianRupee,
      badge: '₹100',
    },
    {
      id: 'placement' as MobileTab,
      label: 'Placement',
      icon: Briefcase,
    },
  ];

  return (
    <div className="fixed bottom-3 left-3 right-3 max-w-md mx-auto z-50 select-none pb-[env(safe-area-inset-bottom,0px)]">
      {/* Soft Ambient Cyan/Blue Backlight */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-400/20 via-sky-300/30 to-indigo-400/20 blur-xl pointer-events-none" />

      {/* 03 Glass Capsule Dock (1:1 with Next-Gen Reference Design) */}
      <nav className="relative w-full bg-white/90 backdrop-blur-2xl border-[1.5px] border-white/95 rounded-full px-2 py-1.5 shadow-[0_12px_36px_rgba(0,100,250,0.16),0_4px_16px_rgba(0,0,0,0.04)] flex items-center justify-between gap-1">
        {navItems.map((item) => {
          const active = isTabActive(item.id);
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabClick(item.id)}
              className={`relative flex items-center justify-center cursor-pointer transition-all duration-300 rounded-full ${
                active
                  ? 'flex-1 py-2 px-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-md shadow-blue-500/35 scale-[1.03]'
                  : 'flex-1 py-1.5 px-1.5 text-slate-600 hover:text-slate-900 active:scale-90'
              }`}
            >
              {active ? (
                // Active Capsule Pill: Icon + Label side-by-side with smooth glow
                <div className="flex items-center justify-center gap-1.5">
                  <Icon className="w-4 h-4 stroke-[2.5] flex-shrink-0" />
                  <span className="text-xs font-black tracking-tight">{item.label}</span>
                </div>
              ) : (
                // Inactive: Clean Icon + Label Stacked
                <div className="flex flex-col items-center justify-center">
                  <div className="relative">
                    <Icon className="w-5 h-5 stroke-[1.8] text-slate-600" />
                    {item.badge && (
                      <span className="absolute -top-1.5 -right-2 px-1 py-0.2 rounded-full bg-emerald-500 text-white text-[8px] font-black shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 mt-0.5 tracking-tight">
                    {item.label}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
