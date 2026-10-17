import React, { useState } from 'react';
import {
  Search,
  Bot,
  Bell,
  ChevronDown,
  Lock,
  Unlock,
  SlidersHorizontal,
  Zap,
  LogOut,
  Settings
} from 'lucide-react';
import { FutureLogo } from '../FutureLogo';
import { useThemeAccent } from '../../../context/ThemeAccentContext';
import './GlobalNavigation.css';

export interface GlobalTopNavProps {
  userName?: string;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onOpenAdvisor?: () => void;
  onLogout?: () => void;
  isNewStudentMode?: boolean;
  onToggleNewStudentMode?: () => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  onLogoClick?: () => void;
  onOpenAdminHrSettings?: () => void;
}

export const GlobalTopNav: React.FC<GlobalTopNavProps> = ({
  userName = 'Subodh Kumar',
  searchQuery = '',
  onSearchChange,
  onOpenAdvisor,
  onLogout,
  isNewStudentMode = true,
  onToggleNewStudentMode,
  onOpenUnlockModal,
  onLogoClick,
  onOpenAdminHrSettings,
}) => {
  const { playClick, playHover } = useThemeAccent();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <header className="global-top-navbar">
      <div className="global-navbar-left">
        {/* Brand Logo */}
        <div
          className="global-logo-wrapper"
          onClick={() => {
            playClick();
            if (onLogoClick) onLogoClick();
            else if (typeof window !== 'undefined') window.location.hash = '#dashboard';
          }}
          title="FUTURE IT INDUSTRY Dashboard"
        >
          <FutureLogo />
        </div>

        {/* Search Input Box */}
        <div className="global-search-box">
          <Search className="w-4 h-4 global-search-icon" />
          <input
            type="text"
            placeholder="Search for topics, modules, projects, interview questions or anything..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="global-search-input"
          />
          <span className="global-search-kbd">Ctrl K</span>
        </div>

        {/* Quick Demo Mode Toggle (New Student 0% ↔ Full Demo) */}
        {onToggleNewStudentMode && (
          <button
            onClick={() => {
              playClick();
              onToggleNewStudentMode();
            }}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border transition-all cursor-pointer"
            style={{
              backgroundColor: isNewStudentMode ? '#f0fdf4' : '#eff6ff',
              borderColor: isNewStudentMode ? '#86efac' : '#93c5fd',
              color: isNewStudentMode ? '#15803d' : '#1d4ed8'
            }}
            title="Toggle between New Student 0% (Python only) and Full Unlocked Access"
          >
            {isNewStudentMode ? (
              <>
                <Lock className="w-3 h-3 text-amber-500" />
                <span>New Student (Python Unlocked • 9 Locked)</span>
              </>
            ) : (
              <>
                <Unlock className="w-3 h-3 text-emerald-500" />
                <span>Full Access Unlocked (Demo 68%)</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Navbar Right Actions */}
      <div className="global-navbar-right">
        {/* Ask AI Mentor Pill Button */}
        <button
          className="global-ask-ai-btn"
          onClick={() => {
            playClick();
            onOpenAdvisor?.();
          }}
          onMouseEnter={playHover}
        >
          <div className="global-ai-icon-circle">
            <Bot className="w-3.5 h-3.5 text-white" />
          </div>
          <span>Ask AI Mentor</span>
        </button>

        {/* Notifications Bell */}
        <button className="global-bell-btn" title="3 new notifications">
          <Bell className="w-4 h-4 text-slate-600" />
          <span className="global-bell-dot">3</span>
        </button>

        {/* User Profile Pill */}
        <div className="global-profile-pill-wrap">
          <div
            className="global-profile-pill"
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
          >
            <img
              src="/images/avatar-subodh-kumar.jpg"
              alt={userName}
              className="global-avatar-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/why-placed-student.jpg';
              }}
            />
            <div className="global-user-meta">
              <strong className="global-user-name">{userName}</strong>
              <span className="global-user-role">Learner</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Profile Dropdown Menu */}
          {profileDropdownOpen && (
            <div className="global-profile-dropdown">
              <div className="global-dropdown-header">
                <strong>{userName}</strong>
                <span>ID: FA-2050-994</span>
              </div>
              <div className="global-dropdown-divider" />

              {onToggleNewStudentMode && (
                <button
                  className="global-dropdown-item"
                  onClick={() => {
                    onToggleNewStudentMode();
                    setProfileDropdownOpen(false);
                  }}
                >
                  <SlidersHorizontal className="w-4 h-4 text-sky-500" />
                  <span>Toggle New Student Mode ({isNewStudentMode ? 'Active' : 'Off'})</span>
                </button>
              )}

              <button
                className="global-dropdown-item"
                onClick={() => {
                  onOpenUnlockModal?.('All Modules');
                  setProfileDropdownOpen(false);
                }}
              >
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Unlock ₹999 Program</span>
              </button>

              <button
                className="global-dropdown-item"
                onClick={() => {
                  setProfileDropdownOpen(false);
                  onOpenAdminHrSettings?.();
                }}
              >
                <Settings className="w-4 h-4 text-sky-500" />
                <span>Admin HR Settings (Avatar & Voice)</span>
              </button>

              <div className="global-dropdown-divider" />
              <button
                className="global-dropdown-item text-red-600 hover:bg-red-50"
                onClick={() => {
                  setProfileDropdownOpen(false);
                  onLogout?.();
                }}
              >
                <LogOut className="w-4 h-4 text-red-500" />
                <span>Sign Out / Switch to Home</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
