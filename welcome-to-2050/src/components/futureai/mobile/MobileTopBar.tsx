import React from 'react';
import { Bell, Coins, Gem, Download, Flame } from 'lucide-react';
import { LearnerTelemetry } from '../../../services/realAuthService';
import { isStandaloneMode, triggerNativeInstall } from '../../../services/pwaInstallService';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

interface MobileTopBarProps {
  userName: string;
  telemetry: LearnerTelemetry;
  onOpenProfile: () => void;
  onOpenNotifications?: () => void;
}

export const MobileTopBar: React.FC<MobileTopBarProps> = ({
  userName,
  telemetry,
  onOpenProfile,
  onOpenNotifications,
}) => {
  const { playClick } = useThemeAccent();
  const avatarUrl =
    (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) ||
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces';

  const handleProfileClick = () => {
    playClick?.();
    onOpenProfile();
  };

  const handleNotificationsClick = () => {
    playClick?.();
    if (onOpenNotifications) {
      onOpenNotifications();
    } else {
      alert('🔔 Welcome to FUTURE IT INDUSTRY! Complete lessons to earn gems and unlock job placement guarantee.');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-2xl border-b border-white/90 px-3.5 py-2.5 flex items-center justify-between shadow-[0_4px_24px_rgba(0,110,255,0.06)] select-none">
      {/* Left: Futuristic Brand Emblem */}
      <div
        className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
        onClick={() => {
          playClick?.();
          window.location.hash = '#dashboard';
        }}
      >
        {/* 3D Gradient F Emblem with Cyan Glow */}
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 p-0.5 shadow-md shadow-blue-500/25 flex items-center justify-center">
          <div className="w-full h-full bg-white/10 rounded-[10px] flex items-center justify-center">
            <span className="text-white font-black text-base tracking-tighter drop-shadow-xs">F</span>
          </div>
        </div>

        <div className="leading-tight text-left">
          <div className="text-sm font-black tracking-tight flex items-center">
            <span className="text-slate-900">FUTURE&nbsp;</span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              IT
            </span>
          </div>
          <div className="text-[9px] font-extrabold text-blue-600/80 uppercase tracking-wider flex items-center gap-1">
            <span>2050</span>
            <span className="w-1 h-1 rounded-full bg-blue-500" />
            <span>AI Learning</span>
          </div>
        </div>
      </div>

      {/* Right: Streak, Coins, Gems, Notifications & Profile Avatar */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Android PWA Install Pill (if not already installed) */}
        {!isStandaloneMode() && (
          <button
            type="button"
            onClick={() => {
              playClick?.();
              triggerNativeInstall();
            }}
            className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-[10px] px-2.5 py-1 rounded-full shadow-xs active:scale-90 transition-all cursor-pointer mr-0.5"
            title="Install Android App"
          >
            <Download className="w-3 h-3 animate-bounce" />
            <span>App</span>
          </button>
        )}

        {/* Coins Pill */}
        <div className="flex items-center gap-1 bg-amber-50/90 border border-amber-200/90 text-amber-800 font-black text-[11px] px-2.5 py-1 rounded-full shadow-2xs">
          <Coins className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span>{telemetry.coins}</span>
        </div>

        {/* Gems Pill */}
        <div className="flex items-center gap-1 bg-purple-50/90 border border-purple-200/90 text-purple-800 font-black text-[11px] px-2.5 py-1 rounded-full shadow-2xs">
          <Gem className="w-3.5 h-3.5 text-purple-500 fill-purple-400" />
          <span>{telemetry.gems}</span>
        </div>

        {/* Notification Bell */}
        <button
          type="button"
          onClick={handleNotificationsClick}
          className="relative p-1.5 rounded-full text-slate-600 hover:bg-slate-100/80 active:scale-90 transition-all cursor-pointer"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
        </button>

        {/* User Profile Avatar with glowing gradient ring */}
        <button
          type="button"
          onClick={handleProfileClick}
          className="relative ml-0.5 rounded-full p-0.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-xs active:scale-90 transition-all cursor-pointer"
          aria-label="User Profile"
        >
          <img
            src={avatarUrl}
            alt={userName}
            className="w-7 h-7 rounded-full object-cover border border-white"
          />
        </button>
      </div>
    </header>
  );
};
