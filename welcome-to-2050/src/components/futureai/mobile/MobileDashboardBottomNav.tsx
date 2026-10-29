import React from 'react';
import { Home, LayoutGrid, Code2, Coins, Briefcase } from 'lucide-react';

export type MobileDashNavTab = 'home' | 'learning' | 'practice' | 'earn' | 'job' | 'profile';

export interface MobileDashboardBottomNavProps {
  active: MobileDashNavTab;
  onHome: () => void;
  onLearning: () => void;
  onPractice: () => void;
  onEarn: () => void;
  onJob?: () => void;
  onProfile?: () => void;
}

/**
 * Mobile-only (below md) fixed app-style bottom navigation.
 * Reuses the existing dashboard navigation handlers passed from LearnerDashboard.
 */
export const MobileDashboardBottomNav: React.FC<MobileDashboardBottomNavProps> = ({
  active,
  onHome,
  onLearning,
  onPractice,
  onEarn,
  onJob,
  onProfile,
}) => {
  const item = (tab: MobileDashNavTab, label: string, icon: React.ReactNode, onClick: () => void) => {
    const isActive = active === tab;
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-current={isActive ? 'page' : undefined}
        className={`flex flex-col items-center justify-center gap-0.5 pt-1.5 pb-1 transition-colors ${
          isActive ? 'text-[#1a6bff]' : 'text-slate-500'
        }`}
      >
        {icon}
        <span className={`text-[10.5px] leading-none ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>
        <span className={`mt-0.5 w-1 h-1 rounded-full ${isActive ? 'bg-[#1a6bff]' : 'bg-transparent'}`} />
      </button>
    );
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-[60] bg-white/95 backdrop-blur-xl border-t border-slate-200/80 shadow-[0_-6px_24px_rgba(15,40,90,0.08)] rounded-t-[22px]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Mobile dashboard navigation"
    >
      <div className="relative grid grid-cols-5 items-end max-w-md mx-auto h-[62px] px-1">
        {item('home', 'Home', <Home className="w-[22px] h-[22px]" />, onHome)}
        {item('learning', 'My Learning', <LayoutGrid className="w-[22px] h-[22px]" />, onLearning)}

        {/* Center floating Practice button */}
        <button
          type="button"
          onClick={onPractice}
          aria-label="Practice"
          aria-current={active === 'practice' ? 'page' : undefined}
          className="flex flex-col items-center justify-end pb-1"
        >
          <span
            className={`-mt-7 w-14 h-14 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#2b7bff] to-[#0b5cf0] border-4 border-white shadow-[0_8px_20px_rgba(26,107,255,0.45)] active:scale-95 transition-transform ${
              active === 'practice' ? 'ring-2 ring-[#1a6bff]/30' : ''
            }`}
          >
            <Code2 className="w-6 h-6" />
          </span>
          <span className={`mt-0.5 text-[10.5px] leading-none ${active === 'practice' ? 'font-bold text-[#1a6bff]' : 'font-medium text-slate-500'}`}>
            Practice
          </span>
          <span className="mt-0.5 w-1 h-1" />
        </button>

        {item('earn', 'Earn Cash', <Coins className="w-[22px] h-[22px] text-amber-500" />, onEarn)}
        {item('job', 'Get Job', <Briefcase className="w-[22px] h-[22px]" />, onJob || onProfile || (() => {}))}
      </div>
    </nav>
  );
};
