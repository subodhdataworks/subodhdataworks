import React from 'react';
import { Sparkles, Search, Bell, Monitor, Smartphone, Flame, LogOut } from 'lucide-react';
import { currentUser } from '../../data/user';
import { CrownIcon } from '../common/TechIcons';
import { BrandLogo } from '../common/BrandLogo';
import { TabType } from '../../types';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenAiChat: () => void;
  viewMode: 'fullscreen' | 'mobile';
  onToggleViewMode: (mode: 'fullscreen' | 'mobile') => void;
  unreadCount?: number;
  userName?: string;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onOpenSearch,
  onOpenNotifications,
  onOpenAiChat,
  viewMode,
  onToggleViewMode,
  unreadCount = 1,
  userName,
  onLogout
}) => {
  const navLinks: { id: TabType | 'practice' | 'projects' | 'interview'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'learn', label: 'Curriculum' },
    { id: 'practice', label: 'Practice' },
    { id: 'projects', label: 'Projects' },
    { id: 'interview', label: 'Interview' },
    { id: 'progress', label: 'Progress' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_2px_12px_rgba(0,0,0,0.03)] h-[76px] transition-all">
      <div className="max-w-[1440px] w-[calc(100%-48px)] mx-auto h-full flex items-center justify-between gap-6">
        {/* LEFT: Brand Identity */}
        <div className="flex items-center gap-8 shrink-0">
          <BrandLogo
            size="md"
            onClick={() => onTabChange('home')}
          />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 pl-6 border-l border-slate-200/80">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onTabChange(link.id as TabType)}
                  className={`px-3.5 py-2 rounded-xl text-[13px] font-bold tracking-tight transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* RIGHT: Search, Notifications, Ask AI, Toggle, Profile */}
        <div className="flex items-center gap-3.5 shrink-0">
          {/* Search Box with Shortcut */}
          <button
            onClick={onOpenSearch}
            className="hidden xl:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-100/80 hover:bg-slate-100 border border-slate-200/70 text-xs text-slate-500 transition-all cursor-pointer group w-48"
          >
            <Search className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            <span className="flex-1 text-left">Search topics...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded text-slate-400 font-mono shadow-3xs">
              ⌘K
            </kbd>
          </button>

          {/* Search icon button on smaller desktop/tablet */}
          <button
            onClick={onOpenSearch}
            className="xl:hidden w-9.5 h-9.5 rounded-xl bg-slate-100/80 hover:bg-slate-100 border border-slate-200/70 flex items-center justify-center text-slate-600 transition-all cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Notifications Button */}
          <button
            onClick={onOpenNotifications}
            aria-label="Notifications"
            className="relative w-9.5 h-9.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-indigo-600 shadow-3xs transition-all cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
            )}
          </button>

          {/* Ask AI Mentor CTA Button */}
          <button
            onClick={onOpenAiChat}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-700 active:scale-95 text-white font-bold text-xs shadow-md shadow-indigo-500/20 cursor-pointer transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask AI Mentor</span>
          </button>

          {/* Viewport Toggle (Desktop vs Mobile Preview) */}
          <div className="hidden lg:flex items-center p-1 rounded-xl bg-slate-100/90 border border-slate-200/70">
            <button
              onClick={() => onToggleViewMode('fullscreen')}
              title="Full Screen Dashboard"
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'fullscreen'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onToggleViewMode('mobile')}
              title="Mobile Device Mockup View"
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'mobile'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* User Profile Pill */}
          <div
            onClick={() => onTabChange('profile')}
            className="flex items-center gap-2.5 pl-1.5 pr-3 py-1 rounded-2xl hover:bg-slate-100/70 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-xs ring-1 ring-slate-200">
              <img
                src={currentUser.avatar}
                alt={userName || currentUser.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-slate-900">{userName || currentUser.name}</span>
                <CrownIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[10.5px] text-orange-500 font-bold flex items-center">
                  🔥 {currentUser.streakDays}d
                </span>
                <span className="text-[10px] text-slate-400 font-medium">• Lv7</span>
              </div>
            </div>
          </div>

          {/* Logout / Switch to Landing Page Button */}
          {onLogout && (
            <button
              onClick={onLogout}
              title="Logout to Landing Page"
              className="w-9 h-9 rounded-xl bg-slate-100/80 hover:bg-rose-50 hover:text-rose-600 border border-slate-200/70 flex items-center justify-center text-slate-500 transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
