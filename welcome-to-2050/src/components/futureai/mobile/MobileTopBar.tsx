import React, { useState, useEffect } from 'react';
import { Search, Wallet, Bell, ArrowLeft } from 'lucide-react';
import { LearnerTelemetry } from '../../../services/realAuthService';
import { useThemeAccent } from '../../../context/ThemeAccentContext';
import { FutureLogo } from '../FutureLogo';

export interface MobileTopBarProps {
  userName?: string;
  telemetry?: LearnerTelemetry;
  showBack?: boolean;
  onBack?: () => void;
  title?: string;
  subtitle?: string;
  onOpenProfile: () => void;
  onOpenNotifications?: () => void;
  onOpenWallet?: () => void;
  onOpenSearch?: () => void;
  onOpenLogin?: () => void;
}

export const MobileTopBar: React.FC<MobileTopBarProps> = ({
  userName = 'Subodh Kumar',
  telemetry,
  showBack = false,
  onBack,
  title,
  subtitle,
  onOpenProfile,
  onOpenNotifications,
  onOpenWallet,
  onOpenSearch,
  onOpenLogin,
}) => {
  const { playClick } = useThemeAccent();

  // Read dynamic wallet balance
  const [walletBalance, setWalletBalance] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const customWallet = localStorage.getItem('futureai_user_wallet');
      if (customWallet) return parseInt(customWallet, 10);
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('futureai_affiliate_hub_v5_')) {
          try {
            const item = localStorage.getItem(k);
            if (item) {
              const p = JSON.parse(item);
              if (typeof p.availableBalance === 'number' && p.availableBalance > 0) {
                return p.availableBalance;
              }
            }
          } catch {}
        }
      }
    }
    return 0;
  });

  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    return (
      (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) ||
      '/images/profile_student_avatar.png'
    );
  });

  // Sync avatar and wallet updates in real time
  useEffect(() => {
    const syncData = () => {
      if (typeof window !== 'undefined') {
        const customAvatar = localStorage.getItem('futureai_user_avatar');
        if (customAvatar) setAvatarUrl(customAvatar);

        const customWallet = localStorage.getItem('futureai_user_wallet');
        if (customWallet) {
          setWalletBalance(parseInt(customWallet, 10));
          return;
        }
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith('futureai_affiliate_hub_v5_')) {
            try {
              const item = localStorage.getItem(k);
              if (item) {
                const p = JSON.parse(item);
                if (typeof p.availableBalance === 'number' && p.availableBalance > 0) {
                  setWalletBalance(p.availableBalance);
                  return;
                }
              }
            } catch {}
          }
        }
      }
    };
    window.addEventListener('storage', syncData);
    window.addEventListener('focus', syncData);
    window.addEventListener('futureai_avatar_updated', syncData);
    window.addEventListener('futureai_wallet_updated', syncData);
    return () => {
      window.removeEventListener('storage', syncData);
      window.removeEventListener('focus', syncData);
      window.removeEventListener('futureai_avatar_updated', syncData);
      window.removeEventListener('futureai_wallet_updated', syncData);
    };
  }, []);

  const handleProfileClick = () => {
    playClick?.();
    onOpenProfile();
  };

  const handleNotificationsClick = () => {
    playClick?.();
    if (onOpenNotifications) {
      onOpenNotifications();
    } else {
      alert('🔔 Welcome to FUTURE IT INDUSTRY!\nYou have 3 unread updates:\n1. 🐍 Python Chapter 1 Unlocked!\n2. 💼 24 New Hiring Drives Live today!\n3. 💰 Refer & Earn ₹100 per signup.');
    }
  };

  const handleWalletClick = () => {
    playClick?.();
    if (onOpenWallet) {
      onOpenWallet();
    } else {
      if (typeof window !== 'undefined') {
        window.location.hash = '#earnings';
      }
    }
  };

  const handleSearchClick = () => {
    playClick?.();
    if (onOpenSearch) {
      onOpenSearch();
    } else {
      const query = window.prompt('🔍 Search Courses & Topics:\n(e.g., Python, SQL, Excel, Jobs, Wallet)');
      if (query && query.trim()) {
        const q = query.toLowerCase();
        if (q.includes('py')) window.location.hash = '#python';
        else if (q.includes('sql') || q.includes('data')) window.location.hash = '#sql';
        else if (q.includes('excel')) window.location.hash = '#excel';
        else if (q.includes('power') || q.includes('bi')) window.location.hash = '#powerbi';
        else if (q.includes('job') || q.includes('placement')) window.location.hash = '#placement';
        else if (q.includes('earn') || q.includes('wallet') || q.includes('money')) window.location.hash = '#earnings';
        else window.location.hash = '#data-analyst';
      }
    }
  };

  return (
    <div className="sticky top-0 z-40 w-full select-none">
      {/* ── Main Mobile Header Bar ── */}
      <header className="w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/90 px-3 py-2 flex items-center justify-between shadow-xs transition-colors">
        
        {/* Left: Brand Logo or Back Button */}
        <div className="flex items-center gap-2 min-w-0 pr-1">
          {showBack && onBack ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  onBack();
                }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-90 transition-transform cursor-pointer shrink-0"
                aria-label="Back"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              {title ? (
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-black text-slate-900 leading-tight truncate">
                    {title}
                  </span>
                  {subtitle && (
                    <span className="text-[9.5px] font-semibold text-slate-500 leading-tight truncate">
                      {subtitle}
                    </span>
                  )}
                </div>
              ) : (
                <div
                  className="cursor-pointer active:scale-95 transition-transform"
                  onClick={() => {
                    playClick?.();
                    window.location.hash = '#dashboard';
                  }}
                >
                  <FutureLogo size="sm" />
                </div>
              )}
            </div>
          ) : (
            <div
              className="cursor-pointer active:scale-95 transition-transform shrink-0"
              onClick={() => {
                playClick?.();
                window.location.hash = '#dashboard';
              }}
            >
              <FutureLogo size="sm" />
            </div>
          )}
        </div>

        {/* Right: EXACT 4 Items: Search, Wallet with Amount, Notification, Profile Picture */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* 1. Search Icon */}
          <button
            type="button"
            onClick={handleSearchClick}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-90"
            aria-label="Search"
            title="Search courses & topics"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* 3. Notification Bell (Only show badge when unread > 0, default 0) */}
          <button
            type="button"
            onClick={handleNotificationsClick}
            className="relative w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            aria-label="Notifications"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
          </button>

          {/* 4. Profile Picture Avatar */}
          <button
            type="button"
            onClick={handleProfileClick}
            className="relative rounded-full p-0.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-xs active:scale-90 transition-all cursor-pointer ml-0.5"
            aria-label="User Profile"
            title="View Profile"
          >
            <img
              src={avatarUrl}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/profile_student_avatar.png';
              }}
              alt={userName}
              className="w-7 h-7 rounded-full object-cover border border-white"
            />
          </button>
        </div>
      </header>
    </div>
  );
};
