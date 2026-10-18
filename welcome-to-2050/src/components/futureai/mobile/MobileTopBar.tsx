import React from 'react';
import { Bell, Coins, Gem } from 'lucide-react';
import { LearnerTelemetry } from '../../../services/realAuthService';

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
  const avatarUrl =
    (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) ||
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces';

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/80 px-3.5 py-2.5 flex items-center justify-between shadow-2xs select-none">
      {/* Left: Android App Brand */}
      <div className="flex items-center gap-2">
        {/* Modern Stylized 'F' Emblem */}
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
          <svg className="w-7 h-7" viewBox="0 0 44 44" fill="none">
            <defs>
              <linearGradient id="mobLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="45%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="mobCyanBar" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path
              d="M10 6C10 4.89543 10.8954 4 12 4H30C34.4183 4 38 7.58172 38 12C38 14.7732 36.5912 17.2173 34.4534 18.636C33.4542 19.2991 32.2743 19.7212 31 19.8972V20H28C26.3431 20 25 21.3431 25 23C25 24.6569 26.3431 26 28 26H31C32.6569 26 34 27.3431 34 29C34 30.6569 32.6569 32 31 32H18V38C18 39.1046 17.1046 40 16 40H12C10.8954 40 10 39.1046 10 38V6Z"
              fill="url(#mobLogoGrad)"
            />
            <path
              d="M16 20H29C30.6569 20 32 21.3431 32 23C32 24.6569 30.6569 26 29 26H16V20Z"
              fill="url(#mobCyanBar)"
            />
          </svg>
        </div>

        <div className="leading-tight text-left">
          <div className="text-sm font-black tracking-tight flex items-center">
            <span className="text-slate-900">FUTURE&nbsp;</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              IT
            </span>
          </div>
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
            Android App
          </div>
        </div>
      </div>

      {/* Right: Coins, Gems & User Profile Chip */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Coins Pill */}
        <div className="flex items-center gap-1 bg-amber-50/90 border border-amber-200/90 text-amber-700 font-black text-[11px] px-2 py-1 rounded-full shadow-2xs">
          <Coins className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span>{telemetry.coins}</span>
        </div>

        {/* Gems Pill */}
        <div className="flex items-center gap-1 bg-purple-50/90 border border-purple-200/90 text-purple-700 font-black text-[11px] px-2 py-1 rounded-full shadow-2xs">
          <Gem className="w-3.5 h-3.5 text-purple-500 fill-purple-400" />
          <span>{telemetry.gems}</span>
        </div>

        {/* Notification Bell */}
        <button
          type="button"
          onClick={onOpenNotifications}
          className="relative p-1.5 rounded-full text-slate-600 hover:bg-slate-100 active:scale-95 transition-all"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
        </button>

        {/* Profile Avatar Chip (Taps to open Android Bottom Sheet) */}
        <button
          type="button"
          onClick={onOpenProfile}
          className="relative ml-0.5 rounded-full ring-2 ring-blue-500/80 ring-offset-1 active:scale-95 transition-all cursor-pointer"
          aria-label="User Profile"
        >
          <img
            src={avatarUrl}
            alt={userName}
            className="w-7 h-7 rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};
