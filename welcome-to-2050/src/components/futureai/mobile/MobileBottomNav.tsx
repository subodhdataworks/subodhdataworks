import React from 'react';
import { Home, BookOpen, Gamepad2, IndianRupee, User } from 'lucide-react';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

export type MobileTab = 'home' | 'learn' | 'arena' | 'earn' | 'profile';

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
    playClick();
    onSelectTab(tab);
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
      icon: BookOpen,
      badge: 'Python',
    },
    {
      id: 'arena' as MobileTab,
      label: 'Arena',
      icon: Gamepad2,
      badge: 'Games',
    },
    {
      id: 'earn' as MobileTab,
      label: 'Earn',
      icon: IndianRupee,
      highlightBadge: '₹100',
    },
    {
      id: 'profile' as MobileTab,
      label: 'Profile',
      icon: User,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-slate-200/90 px-2 py-1.5 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] select-none">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabClick(item.id)}
              className="relative flex flex-col items-center justify-center flex-1 py-1 cursor-pointer transition-all duration-200 group active:scale-90"
            >
              {/* Material You Style Pill Highlight */}
              <div
                className={`relative px-4 py-1 rounded-full transition-all duration-200 flex items-center justify-center ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />

                {/* Sub-badge on icon if applicable */}
                {item.highlightBadge && (
                  <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 rounded-full bg-emerald-500 text-white text-[9px] font-black shadow-xs animate-pulse">
                    {item.highlightBadge}
                  </span>
                )}
              </div>

              {/* Tab Label */}
              <span
                className={`text-[10px] mt-0.5 tracking-tight transition-colors duration-200 ${
                  isActive ? 'font-black text-blue-600' : 'font-semibold text-slate-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
