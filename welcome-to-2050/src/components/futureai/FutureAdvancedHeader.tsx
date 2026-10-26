import React, { useState, useEffect, useRef } from 'react';
import { FutureLogo } from './FutureLogo';
import { soundEffects } from '../../services/soundEffects';
import {
  Home,
  BookOpen,
  Code2,
  FileCheck2,
  Coins,
  GraduationCap,
  Briefcase,
  Search,
  Bell,
  User,
  ChevronDown,
  Sparkles,
  Menu,
  X,
  ExternalLink,
  CheckCircle2,
  Lock,
  ArrowRight,
  FolderCode,
  Terminal,
  Database,
  FileSpreadsheet
} from 'lucide-react';

export interface FutureAdvancedHeaderProps {
  userName?: string;
  activeNavTab?: 'home' | 'learning' | 'practice' | 'ats' | 'earn' | 'internship' | 'placement';
  onNavigateHome: () => void;
  onNavigateLearning: () => void;
  onNavigatePractice: (track?: 'master' | 'python' | 'sql' | 'excel') => void;
  onOpenAtsResume: () => void;
  onNavigateEarn: () => void;
  onNavigateInternship: () => void;
  onNavigatePlacement: () => void;
  onOpenProfile?: () => void;
  onOpenWallet?: () => void;
  onOpenNotifications?: () => void;
  onOpenSearch?: () => void;
  onLogout?: () => void;
  isLoggedIn?: boolean;
  onOpenLogin?: () => void;
  onOpenSignUp?: () => void;
}

export const FutureAdvancedHeader: React.FC<FutureAdvancedHeaderProps> = ({
  userName = 'Rahul',
  activeNavTab = 'home',
  onNavigateHome,
  onNavigateLearning,
  onNavigatePractice,
  onOpenAtsResume,
  onNavigateEarn,
  onNavigateInternship,
  onNavigatePlacement,
  onOpenProfile,
  onOpenWallet,
  onOpenNotifications,
  onOpenSearch,
  onLogout,
  isLoggedIn = true,
  onOpenLogin,
  onOpenSignUp
}) => {
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const practiceRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (practiceRef.current && !practiceRef.current.contains(e.target as Node)) {
        setPracticeDropdownOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileDropdownOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Keyboard shortcut Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSearchModalOpen(false);
        setPracticeDropdownOpen(false);
        setProfileDropdownOpen(false);
        setNotificationsOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mock Notification Items
  const notificationItems = [
    {
      id: 1,
      title: 'Topic 1 Free Challenges Unlocked!',
      desc: 'Python, SQL & Excel first topics are now open for live coding practice.',
      time: 'Just now',
      unread: true
    },
    {
      id: 2,
      title: 'Daily Streak Active 🔥',
      desc: 'You completed 3 exercises today. Keep up the great work!',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 3,
      title: 'Affiliate Partner Program Active',
      desc: 'Earn 30% instant commission on every student referral with payout to UPI.',
      time: '1 day ago',
      unread: false
    }
  ];

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  // Quick search suggestions
  const searchResults = [
    { title: 'Python Coding Challenges (Topic 1 Free)', category: 'Practice', action: () => { scrollToTop(); onNavigatePractice('python'); } },
    { title: 'SQL Query Arena (Topic 1 Free)', category: 'Practice', action: () => { scrollToTop(); onNavigatePractice('sql'); } },
    { title: 'Excel Formula Simulator (Topic 1 Free)', category: 'Practice', action: () => { scrollToTop(); onNavigatePractice('excel'); } },
    { title: 'Master Practice Hub (14 Tracks)', category: 'Practice', action: () => { scrollToTop(); onNavigatePractice('master'); } },
    { title: 'Data Analyst with Generative AI Track', category: 'Course', action: onNavigateLearning },
    { title: 'ATS Resume Checker & Optimizer', category: 'Career Tool', action: onOpenAtsResume },
    { title: 'Affiliate Earnings & Wallet Dashboard', category: 'Finance', action: onNavigateEarn },
    { title: 'Placement & Job Drive Assistance', category: 'Career', action: onNavigatePlacement }
  ].filter(item => !searchQuery.trim() || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
            {/* ─── REFERRAL ACTIVE TOP NOTIFICATION BAR ─── */}
      <div className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700 text-white px-3 sm:px-6 py-2 text-xs font-black flex items-center justify-between shadow-md z-[60] relative">
        <div className="flex items-center gap-2">
          <span className="text-base animate-bounce">💰</span>
          <span>
            Referral Partner Active: <strong className="text-amber-300">SUBODHKUMAR100</strong> • Live Available Wallet Balance: <strong className="text-emerald-200 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-400/30">₹100</strong>
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            scrollToTop();
            onNavigateEarn();
          }}
          className="px-3 py-1 rounded-lg bg-white text-emerald-900 font-extrabold text-xs hover:bg-emerald-50 active:scale-95 transition-all shadow-xs cursor-pointer flex items-center gap-1 shrink-0 ml-2"
        >
          <span>Open Wallet (₹100) →</span>
        </button>
      </div>

      {/* ─── STICKY ULTRA-ADVANCED TOP HEADER BAR (Exact 1:1 Reference Design) ─── */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all shrink-0">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-7 h-15 sm:h-16 flex items-center justify-between gap-2 lg:gap-5">
          
          {/* LEFT: Future IT Industries Official Brand Logo */}
          <div 
            onClick={() => {
              soundEffects.playClick();
              scrollToTop(); onNavigateHome();
            }}
            className="flex items-center gap-2 select-none cursor-pointer group shrink-0 transition-transform hover:scale-[1.01] active:scale-98"
            title="Future IT Industries - Learn Today, Earn Tomorrow."
          >
            <FutureLogo variant="full" size="md" />
          </div>

          {/* CENTER: Navigation Pill / Tab Bar (Exact 1:1 with media_1792902949292_fb98d943.png) */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5 shrink-0 text-[13px] font-semibold text-slate-700">
            
            {/* 1. Home */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop(); onNavigateHome();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'home'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <Home className={`w-4 h-4 ${activeNavTab === 'home' ? 'text-[#1a73e8] fill-[#1a73e8]/20' : 'text-slate-500'}`} />
              <span>Home</span>
            </button>

            {/* 2. My Learning */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop(); onNavigateLearning();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'learning'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${activeNavTab === 'learning' ? 'text-[#1a73e8]' : 'text-slate-500'}`} />
              <span>My Learning</span>
            </button>

            {/* 3. Coding Practice ⌵ (Dropdown with Python, SQL, Excel, Master) */}
            <div className="relative" ref={practiceRef}>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setPracticeDropdownOpen(false);
                    scrollToTop(); onNavigatePractice('master');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-l-xl transition-all duration-200 cursor-pointer ${
                    activeNavTab === 'practice'
                      ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                      : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
                  }`}
                  title="Open Coding Practice Full Page (All 14 Tracks)"
                >
                  <Code2 className={`w-4 h-4 ${activeNavTab === 'practice' ? 'text-[#1a73e8]' : 'text-slate-500'}`} />
                  <span>Coding Practice</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundEffects.playClick();
                    setPracticeDropdownOpen((prev) => !prev);
                  }}
                  className={`px-1.5 py-1.5 rounded-r-xl transition-all duration-200 cursor-pointer ${
                    activeNavTab === 'practice' || practiceDropdownOpen
                      ? 'bg-[#eef5fe] text-[#1a73e8]'
                      : 'text-slate-400 hover:text-[#1a73e8] hover:bg-slate-50'
                  }`}
                  title="Quick coding tracks dropdown"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${practiceDropdownOpen ? 'rotate-180 text-[#1a73e8]' : ''}`} />
                </button>
              </div>

              {/* Coding Practice Floating Dropdown */}
              {practiceDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 py-2 px-2 z-50 animate-fadeIn text-left">
                  <div className="px-3 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Coding Tracks</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">1st Topic Free</span>
                  </div>

                  {/* Direct Full Page Link */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setPracticeDropdownOpen(false);
                      scrollToTop(); onNavigatePractice('master');
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-blue-50/70 hover:bg-blue-100/70 text-blue-700 transition group text-left cursor-pointer mb-1 border border-blue-200/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      🚀
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-black text-blue-900 block">Full Practice Page (14 Tracks)</span>
                      <p className="text-[11px] text-blue-700/80 truncate">Python, SQL, Excel, AI, ML, React...</p>
                    </div>
                  </button>

                  {/* Python Track */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setPracticeDropdownOpen(false);
                      scrollToTop(); onNavigatePractice('python');
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-sky-50 text-slate-800 hover:text-[#1a73e8] transition group text-left cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-100/70 text-sky-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                      🐍
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#1a73e8]">Python Challenges</span>
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Free T1</span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">25 Topics • 250 Questions</p>
                    </div>
                  </button>

                  {/* SQL Track */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setPracticeDropdownOpen(false);
                      scrollToTop(); onNavigatePractice('sql');
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-sky-50 text-slate-800 hover:text-[#1a73e8] transition group text-left cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                      🗄️
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#1a73e8]">SQL Query Arena</span>
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Free T1</span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">SELECT to Optimization • 250 Queries</p>
                    </div>
                  </button>

                  {/* Excel Track */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setPracticeDropdownOpen(false);
                      scrollToTop(); onNavigatePractice('excel');
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 transition group text-left cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                      📊
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">Excel Formula Simulator</span>
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Free T1</span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">VLOOKUP, XLOOKUP, Arrays • 250 Tasks</p>
                    </div>
                  </button>

                  <div className="my-1 border-t border-slate-100" />

                  {/* Master Practice Hub */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setPracticeDropdownOpen(false);
                      scrollToTop(); onNavigatePractice('master');
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-indigo-50 text-slate-800 hover:text-indigo-600 transition group text-left cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-100/70 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                      🚀
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 block">All 14 Practice Tracks</span>
                      <p className="text-[11px] text-slate-500 truncate">Power BI, ML, Deep Learning, React...</p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 4. ATS Resume Checker */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                onOpenAtsResume();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'ats'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <FileCheck2 className={`w-4 h-4 ${activeNavTab === 'ats' ? 'text-[#1a73e8]' : 'text-slate-500'}`} />
              <span>ATS Resume Checker</span>
            </button>

            {/* 5. Earn Cash */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop(); onNavigateEarn();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'earn'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <Coins className={`w-4 h-4 ${activeNavTab === 'earn' ? 'text-amber-500' : 'text-slate-500'}`} />
              <span>Earn Cash</span>
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-white shadow-xs">₹100</span>
            </button>

            {/* 6. Internship */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop(); onNavigateInternship();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'internship'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${activeNavTab === 'internship' ? 'text-[#1a73e8]' : 'text-slate-500'}`} />
              <span>Internship</span>
            </button>

            {/* 7. Placement */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop(); onNavigatePlacement();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'placement'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeNavTab === 'placement' ? 'text-[#1a73e8]' : 'text-slate-500'}`} />
              <span>Placement</span>
            </button>

          </nav>

          {/* RIGHT: Divider + Search + Bell + Profile Avatar + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Subtle Divider (Desktop) */}
            <div className="hidden xl:block h-6 w-[1px] bg-slate-200/90 mx-1" />

            {/* Search Icon Button */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                if (onOpenSearch) onOpenSearch();
                else setSearchModalOpen(true);
              }}
              className="p-2 rounded-xl text-slate-600 hover:text-[#1a73e8] hover:bg-slate-100 transition-colors cursor-pointer"
              title="Search topics, challenges & courses (Ctrl+K)"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications Bell with Red Badge Dot */}
            <div className="relative" ref={notificationsRef}>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setNotificationsOpen((prev) => !prev);
                  if (onOpenNotifications) onOpenNotifications();
                }}
                className="relative p-2 rounded-xl text-slate-600 hover:text-[#1a73e8] hover:bg-slate-100 transition-colors cursor-pointer"
                title="Notifications"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {/* Red Dot Badge (Exact like reference image) */}
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white"></span>
              </button>

              {/* Notifications Floating Card */}
              {notificationsOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 py-3 px-3 z-50 animate-fadeIn text-left">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-black text-slate-800">Notifications</span>
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">2 New</span>
                  </div>

                  <div className="mt-2 space-y-2">
                    {notificationItems.map((n) => (
                      <div key={n.id} className="p-2.5 rounded-xl hover:bg-slate-50 transition border border-slate-100">
                        <div className="flex items-center justify-between">
                          <strong className="text-xs font-bold text-slate-800 block truncate">{n.title}</strong>
                          <span className="text-[10px] text-slate-400 shrink-0">{n.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Avatar Circle OR Single Free Login / Sign Up Button */}
            {!isLoggedIn ? (
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    if (onOpenSignUp) onOpenSignUp();
                    else onOpenLogin?.();
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white font-normal text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span>Free Login / Sign Up</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setProfileDropdownOpen((prev) => !prev);
                    if (onOpenProfile) onOpenProfile();
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-blue-50 to-indigo-50 border border-blue-200/90 text-blue-600 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer select-none overflow-hidden"
                  title={`Logged in as ${userName}`}
                  aria-label="User Profile"
                >
                  <User className="w-5 h-5 text-[#1a73e8]" />
                </button>

                {/* Profile Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 py-2.5 px-2 z-50 animate-fadeIn text-left space-y-0.5">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <strong className="text-xs font-black text-slate-900 block truncate">{userName || 'Rahul Sharma'}</strong>
                      <span className="text-[11px] text-slate-500">Student • Tech & AI Track</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        setProfileDropdownOpen(false);
                        scrollToTop(); onNavigateHome();
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition cursor-pointer"
                    >
                      <Home className="w-4 h-4 text-slate-500" />
                      <span>Dashboard Home</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        setProfileDropdownOpen(false);
                        scrollToTop(); onNavigatePractice('master');
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition cursor-pointer"
                    >
                      <Code2 className="w-4 h-4 text-slate-500" />
                      <span>Practice Master Hub</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        setProfileDropdownOpen(false);
                        onOpenAtsResume();
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition cursor-pointer"
                    >
                      <FileCheck2 className="w-4 h-4 text-slate-500" />
                      <span>ATS Resume Checker</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        setProfileDropdownOpen(false);
                        if (onOpenWallet) onOpenWallet();
                        else scrollToTop(); onNavigateEarn();
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition cursor-pointer"
                    >
                      <Coins className="w-4 h-4 text-amber-500" />
                      <span>Earnings & Wallet</span>
                    </button>

                    {onLogout && (
                      <>
                        <div className="my-1 border-t border-slate-100" />
                        <button
                          type="button"
                          onClick={() => {
                            soundEffects.playClick();
                            setProfileDropdownOpen(false);
                            onLogout();
                          }}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                        >
                          <X className="w-4 h-4 text-rose-500" />
                          <span>Sign Out</span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Mobile / Tablet Hamburger Button (< 1280px) */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setMobileMenuOpen((prev) => !prev);
              }}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-[#1a73e8] hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* ─── MOBILE SLIDE-DOWN DRAWER MENU (< 1280px) ─── */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-xl px-4 py-4 space-y-2 animate-fadeIn text-left">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              {/* Home */}
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setMobileMenuOpen(false);
                  scrollToTop(); onNavigateHome();
                }}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs ${
                  activeNavTab === 'home' ? 'bg-[#eef5fe] text-[#1a73e8]' : 'text-slate-700 bg-slate-50'
                }`}
              >
                <Home className="w-4 h-4 text-[#1a73e8]" />
                <span>Home</span>
              </button>

              {/* My Learning */}
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setMobileMenuOpen(false);
                  scrollToTop(); onNavigateLearning();
                }}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs ${
                  activeNavTab === 'learning' ? 'bg-[#eef5fe] text-[#1a73e8]' : 'text-slate-700 bg-slate-50'
                }`}
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>My Learning</span>
              </button>
            </div>

            {/* Coding Practice Links */}
            <div className="py-2 space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
                Coding Practice (Topic 1 Free)
              </span>

              {/* Full Page Button on Mobile */}
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setMobileMenuOpen(false);
                  scrollToTop(); onNavigatePractice('master');
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs shadow-md shadow-blue-500/20 active:scale-98 transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-white" />
                  <span>Full Coding Practice Page (All 14 Tracks)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setMobileMenuOpen(false);
                    scrollToTop(); onNavigatePractice('python');
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-sky-50/70 border border-sky-100 text-xs font-bold text-slate-800"
                >
                  <span className="flex items-center gap-2">🐍 Python</span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-100/60 px-1.5 py-0.5 rounded font-bold">Free T1</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setMobileMenuOpen(false);
                    scrollToTop(); onNavigatePractice('sql');
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-sky-50/70 border border-sky-100 text-xs font-bold text-slate-800"
                >
                  <span className="flex items-center gap-2">🗄️ SQL</span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-100/60 px-1.5 py-0.5 rounded font-bold">Free T1</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setMobileMenuOpen(false);
                    scrollToTop(); onNavigatePractice('excel');
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs font-bold text-slate-800"
                >
                  <span className="flex items-center gap-2">📊 Excel</span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-100/60 px-1.5 py-0.5 rounded font-bold">Free T1</span>
                </button>
              </div>
            </div>

            {/* ATS Resume Checker */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setMobileMenuOpen(false);
                onOpenAtsResume();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-xs font-bold text-slate-800 transition"
            >
              <div className="flex items-center gap-2.5">
                <FileCheck2 className="w-4 h-4 text-emerald-600" />
                <span>ATS Resume Checker</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Earn Cash */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setMobileMenuOpen(false);
                scrollToTop(); onNavigateEarn();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-50 hover:bg-amber-50 text-xs font-bold text-slate-800 transition"
            >
              <div className="flex items-center gap-2.5">
                <Coins className="w-4 h-4 text-amber-500" />
                <span>Earn Cash (30% Commission)</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Internship */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setMobileMenuOpen(false);
                scrollToTop(); onNavigateInternship();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-xs font-bold text-slate-800 transition"
            >
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Internship</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Placement */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setMobileMenuOpen(false);
                scrollToTop(); onNavigatePlacement();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-xs font-bold text-slate-800 transition"
            >
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-sky-600" />
                <span>Placement Support</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        )}
      </header>

      {/* ─── SPOTLIGHT SEARCH MODAL (Ctrl + K) ─── */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-xl w-full p-4 sm:p-5 shadow-2xl relative text-left">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <Search className="w-5 h-5 text-sky-500 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search challenges, topics, courses or career tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-3 max-h-80 overflow-y-auto space-y-1">
              {searchResults.length === 0 ? (
                <p className="text-center py-6 text-xs text-slate-400">No results found for "{searchQuery}"</p>
              ) : (
                searchResults.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setSearchModalOpen(false);
                      item.action();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 transition text-left cursor-pointer group"
                  >
                    <div>
                      <strong className="text-xs font-bold text-slate-800 group-hover:text-blue-600 block">{item.title}</strong>
                      <span className="text-[10px] text-slate-400">{item.category}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))
              )}
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[10px]">ESC</kbd> to close</span>
              <span>⚡ Fast AI Search</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
