import React, { useState } from 'react';
import { Search, Wallet, Bell, ArrowLeft, X, Sparkles, ChevronRight } from 'lucide-react';
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const avatarUrl =
    (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) ||
    '/images/profile_student_avatar.png';

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
      setSearchOpen((prev) => !prev);
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase();
    setSearchOpen(false);
    if (q.includes('py') || q.includes('python')) {
      window.location.hash = '#python';
    } else if (q.includes('sql') || q.includes('data')) {
      window.location.hash = '#sql';
    } else if (q.includes('excel')) {
      window.location.hash = '#excel';
    } else if (q.includes('power') || q.includes('bi')) {
      window.location.hash = '#powerbi';
    } else if (q.includes('job') || q.includes('placement')) {
      window.location.hash = '#placement';
    } else if (q.includes('earn') || q.includes('wallet') || q.includes('money')) {
      window.location.hash = '#earnings';
    } else {
      window.location.hash = '#data-analyst';
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

        {/* Right: EXACT 4 Items: Search, Wallet, Notification, Profile Picture */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          
          {/* 1. Search Icon */}
          <button
            type="button"
            onClick={handleSearchClick}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-90 ${
              searchOpen
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
            aria-label="Search"
            title="Search courses & topics"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* 2. Wallet Icon */}
          <button
            type="button"
            onClick={handleWalletClick}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-700 flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            aria-label="Wallet & Earnings"
            title="Wallet & Earnings"
          >
            <Wallet className="w-4 h-4" />
          </button>

          {/* 3. Notification Bell with Badge 3 */}
          <button
            type="button"
            onClick={handleNotificationsClick}
            className="relative w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            aria-label="Notifications"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[8.5px] font-black flex items-center justify-center ring-1.5 ring-white">
              3
            </span>
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

      {/* ── Expandable Instant Search Bar (Opens on tapping Search Icon) ── */}
      {searchOpen && (
        <div className="bg-white border-b border-slate-200 px-3 py-2 animate-fadeIn shadow-md">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Python, SQL, Excel, Jobs, Wallet..."
                className="w-full bg-slate-100 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black cursor-pointer active:scale-95 transition-all"
            >
              Go
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </form>
          {/* Quick Search Chips */}
          <div className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar pb-0.5">
            {['Python', 'SQL', 'Excel', 'Power BI', 'Placement', 'Wallet'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSearchQuery(item);
                  setSearchOpen(false);
                  if (item === 'Python') window.location.hash = '#python';
                  else if (item === 'SQL') window.location.hash = '#sql';
                  else if (item === 'Excel') window.location.hash = '#excel';
                  else if (item === 'Power BI') window.location.hash = '#powerbi';
                  else if (item === 'Placement') window.location.hash = '#placement';
                  else if (item === 'Wallet') window.location.hash = '#earnings';
                }}
                className="px-2 py-0.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 text-[10px] font-bold shrink-0 border border-slate-200 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
