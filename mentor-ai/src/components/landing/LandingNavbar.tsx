import React, { useState } from 'react';
import { Search, Bell, Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

interface LandingNavbarProps {
  onOpenLogin: () => void;
  onOpenGetStarted: () => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  unreadCount?: number;
  activeSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({
  onOpenLogin,
  onOpenGetStarted,
  onOpenSearch,
  onOpenNotifications,
  unreadCount = 1,
  activeSection = 'home',
  onNavigateSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Curriculum' },
    { id: 'practice', label: 'Practice' },
    { id: 'projects', label: 'Projects' },
    { id: 'interview', label: 'Interview' },
    { id: 'pricing', label: 'Progress' },
  ];

  const handleNavClick = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_14px_rgba(0,0,0,0.03)] h-[74px] sm:h-[80px] transition-all">
      <div className="max-w-[1440px] w-full px-4 sm:px-6 lg:px-8 mx-auto h-full flex items-center justify-between gap-4">
        {/* LEFT: Brand Identity */}
        <div className="flex items-center gap-6 xl:gap-8 shrink-0">
          <BrandLogo
            size="md"
            onClick={() => handleNavClick('home')}
          />

          {/* Desktop Nav Links Pill Bar */}
          <nav className="hidden lg:flex items-center gap-1.5 pl-4 xl:pl-6 border-l border-slate-200/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* RIGHT: Search, Notifications, Login, Get Started */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Search Box with Shortcut */}
          <button
            onClick={onOpenSearch}
            className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200/70 border border-slate-200/80 text-xs text-slate-500 transition-all cursor-pointer group w-44 lg:w-56"
          >
            <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <span className="flex-1 text-left truncate text-slate-400">Search courses, topics...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded text-slate-400 font-mono shadow-3xs">
              ⌘K
            </kbd>
          </button>

          {/* Mobile/Tablet Search Button */}
          <button
            onClick={onOpenSearch}
            className="md:hidden w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/70 border border-slate-200/80 flex items-center justify-center text-slate-600 transition-all cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Notifications Button */}
          <button
            onClick={onOpenNotifications}
            aria-label="Notifications"
            className="relative w-9 h-9 rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-blue-600 shadow-3xs transition-all cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
            )}
          </button>

          {/* Login Button (Outline Pill) */}
          <button
            onClick={onOpenLogin}
            className="px-4 sm:px-5 py-2 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 text-xs font-bold transition-all cursor-pointer hover:bg-slate-50"
          >
            Login
          </button>

          {/* Get Started Button (Gradient Blue Pill) */}
          <button
            onClick={onOpenGetStarted}
            className="px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3 h-3 hidden sm:inline" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 cursor-pointer ml-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-4 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 font-bold text-xs"
            >
              Login with WhatsApp
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-500/20"
            >
              Start Free Learning
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
