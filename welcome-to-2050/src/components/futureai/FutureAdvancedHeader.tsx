import React, { useState, useEffect, useRef } from 'react';
import { FutureLogo } from './FutureLogo';
import { soundEffects } from '../../services/soundEffects';
import {
  House,
  Home,
  BookOpen,
  CodeXml,
  Code2,
  Wallet,
  Coins,
  Award,
  GraduationCap,
  FileBadge,
  BriefcaseBusiness,
  Briefcase,
  CircleHelp,
  MessageCircle,
  LogOut,
  Pencil,
  Phone,
  Camera,
  Search,
  Bell,
  User,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  FileCheck2,
} from 'lucide-react';

export interface FutureAdvancedHeaderProps {
  userName?: string;
  userPhone?: string;
  userAvatar?: string;
  activeNavTab?: 'home' | 'learning' | 'practice' | 'ats' | 'earn' | 'internship' | 'placement';
  onNavigateHome: () => void;
  onNavigateLearning: () => void;
  onNavigatePractice: (track?: 'master' | 'python' | 'sql' | 'excel') => void;
  onOpenAtsResume: () => void;
  onNavigateEarn: () => void;
  onNavigateInternship: () => void;
  onNavigatePlacement: () => void;
  onNavigateCertificate?: () => void;
  onNavigateRecommendation?: () => void;
  onOpenHelp?: () => void;
  onOpenContact?: () => void;
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
  userPhone = '',
  userAvatar = '',
  activeNavTab = 'home',
  onNavigateHome,
  onNavigateLearning,
  onNavigatePractice,
  onOpenAtsResume,
  onNavigateEarn,
  onNavigateInternship,
  onNavigatePlacement,
  onNavigateCertificate,
  onNavigateRecommendation,
  onOpenHelp,
  onOpenContact,
  onOpenProfile,
  onOpenWallet,
  onOpenNotifications,
  onOpenSearch,
  onLogout,
  isLoggedIn = true,
  onOpenLogin,
  onOpenSignUp,
}) => {
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [hamburgerDrawerOpen, setHamburgerDrawerOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);

  const practiceRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Dynamic student info state from localStorage & props
  const [studentName, setStudentName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_name') || userName || 'Rahul Sharma';
    }
    return userName || 'Rahul Sharma';
  });

  const [studentPhone, setStudentPhone] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_phone') || userPhone || '';
    }
    return userPhone || '';
  });

  const [studentAvatar, setStudentAvatar] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_avatar') || userAvatar || '';
    }
    return userAvatar || '';
  });

  // Edit form state
  const [editNameInput, setEditNameInput] = useState(studentName);
  const [editPhoneInput, setEditPhoneInput] = useState(studentPhone);

  // Sync state if props or localStorage change
  useEffect(() => {
    if (userName && userName !== 'Rahul') {
      setStudentName(userName);
    }
  }, [userName]);

  useEffect(() => {
    if (profileDropdownOpen && typeof window !== 'undefined') {
      const storedName = localStorage.getItem('futureai_user_name');
      const storedPhone = localStorage.getItem('futureai_user_phone');
      const storedAvatar = localStorage.getItem('futureai_user_avatar');
      if (storedName) setStudentName(storedName);
      if (storedPhone) setStudentPhone(storedPhone);
      if (storedAvatar) setStudentAvatar(storedAvatar);
    }
  }, [profileDropdownOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (hamburgerDrawerOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [hamburgerDrawerOpen]);

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

  // Keyboard shortcut Ctrl+K to open search & Escape to close all
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
        setHamburgerDrawerOpen(false);
        setEditProfileModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  // Drawer Navigation Handler
  const handleDrawerNavigate = (target: string) => {
    soundEffects.playClick();
    setHamburgerDrawerOpen(false);
    scrollToTop();

    switch (target) {
      case 'dashboard':
        onNavigateHome();
        if (typeof window !== 'undefined') window.location.hash = '#dashboard';
        break;
      case 'learning':
        onNavigateLearning();
        if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
        break;
      case 'practice':
        onNavigatePractice('master');
        if (typeof window !== 'undefined') window.location.hash = '#practice';
        break;
      case 'earn':
        if (onOpenWallet) onOpenWallet();
        else onNavigateEarn();
        if (typeof window !== 'undefined') window.location.hash = '#income';
        break;
      case 'certificate':
        if (onNavigateCertificate) onNavigateCertificate();
        else if (typeof window !== 'undefined') window.location.hash = '#certificates';
        break;
      case 'internship':
        onNavigateInternship();
        if (typeof window !== 'undefined') window.location.hash = '#internship';
        break;
      case 'recommendation':
        if (onNavigateRecommendation) onNavigateRecommendation();
        else if (typeof window !== 'undefined') window.location.hash = '#recommendation';
        break;
      case 'placement':
        onNavigatePlacement();
        if (typeof window !== 'undefined') window.location.hash = '#placement';
        break;
      case 'help':
        if (onOpenHelp) onOpenHelp();
        else if (typeof window !== 'undefined') window.location.hash = '#contact-us';
        break;
      case 'contact':
        if (onOpenContact) onOpenContact();
        else if (typeof window !== 'undefined') window.location.hash = '#contact-us';
        break;
      default:
        break;
    }
  };

  // Determine active drawer item based on activeNavTab and URL hash
  const isItemActive = (id: string): boolean => {
    if (typeof window === 'undefined') return false;
    const h = (window.location.hash || '').toLowerCase().split('?')[0];
    switch (id) {
      case 'dashboard':
        return activeNavTab === 'home' || h === '#dashboard' || h === '#welcome' || h === '#home' || h === '';
      case 'learning':
        return activeNavTab === 'learning' || h.includes('#data') || h.includes('#learn') || h.includes('#course');
      case 'practice':
        return activeNavTab === 'practice' || h.includes('#practice') || h.includes('#challenge') || h.includes('#game') || h.includes('#arena');
      case 'earn':
        return activeNavTab === 'earn' || h.includes('#income') || h.includes('#wallet') || h.includes('#earn') || h.includes('#referral');
      case 'certificate':
        return h.includes('#cert');
      case 'internship':
        return activeNavTab === 'internship' || h.includes('#intern');
      case 'recommendation':
        return h.includes('#recom') || h.includes('#lor');
      case 'placement':
        return activeNavTab === 'placement' || h.includes('#place');
      case 'help':
        return h.includes('#help');
      case 'contact':
        return h.includes('#contact');
      default:
        return false;
    }
  };

  // Profile save action
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = editNameInput.trim() || 'Learner';
    const cleanPhone = editPhoneInput.trim();
    setStudentName(cleanName);
    setStudentPhone(cleanPhone);
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_user_name', cleanName);
      if (cleanPhone) {
        localStorage.setItem('futureai_user_phone', cleanPhone);
      } else {
        localStorage.removeItem('futureai_user_phone');
      }
    }
    soundEffects.playCelebration();
    setEditProfileModalOpen(false);
    if (onOpenProfile) onOpenProfile();
  };

  // Notification items
  const notificationItems = [
    {
      id: 1,
      title: 'Topic 1 Free Challenges Unlocked!',
      desc: 'Python, SQL & Excel first topics are now open for live coding practice.',
      time: 'Just now',
      unread: true,
    },
    {
      id: 2,
      title: 'Daily Streak Active 🔥',
      desc: 'You completed exercises today. Keep up the great work!',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Affiliate Partner Program Active',
      desc: 'Earn 30% instant commission on every student referral with payout to UPI.',
      time: '1 day ago',
      unread: false,
    },
  ];

  // Quick search suggestions
  const searchResults = [
    { title: 'Python Coding Challenges (Topic 1 Free)', category: 'Practice', action: () => { scrollToTop(); onNavigatePractice('python'); } },
    { title: 'SQL Query Arena (Topic 1 Free)', category: 'Practice', action: () => { scrollToTop(); onNavigatePractice('sql'); } },
    { title: 'Excel Formula Simulator (Topic 1 Free)', category: 'Practice', action: () => { scrollToTop(); onNavigatePractice('excel'); } },
    { title: 'Master Practice Hub (14 Tracks)', category: 'Practice', action: () => { scrollToTop(); onNavigatePractice('master'); } },
    { title: 'Data Analyst with Generative AI Track', category: 'Course', action: onNavigateLearning },
    { title: 'ATS Resume Checker & Optimizer', category: 'Career Tool', action: onOpenAtsResume },
    { title: 'Affiliate Earnings & Wallet Dashboard', category: 'Finance', action: onNavigateEarn },
    { title: 'Placement & Job Drive Assistance', category: 'Career', action: onNavigatePlacement },
  ].filter((item) => !searchQuery.trim() || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      {/* ─── STICKY ULTRA-ADVANCED TOP HEADER BAR ─── */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all shrink-0">
        <div className="max-w-[1440px] mx-auto px-2.5 sm:px-5 lg:px-7 h-14 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-2 lg:gap-5">
          {/* LEFT: Future IT Industries Official Brand Logo */}
          <div
            onClick={() => {
              soundEffects.playClick();
              scrollToTop();
              onNavigateHome();
            }}
            className="flex items-center gap-2 select-none cursor-pointer group min-w-0 shrink transition-transform hover:scale-[1.01] active:scale-98"
            title="Future IT Industries - Learn Today, Earn Tomorrow."
          >
            <FutureLogo variant="full" size="md" />
          </div>

          {/* CENTER: Navigation Pill / Tab Bar (Desktop: 1024px and above) */}
          <nav className="hidden lg:flex items-center gap-1 lg:gap-1.5 shrink-0 text-[13px] font-semibold text-slate-700">
            {/* 1. Home */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop();
                onNavigateHome();
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
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
                scrollToTop();
                onNavigateLearning();
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'learning'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${activeNavTab === 'learning' ? 'text-[#1a73e8]' : 'text-slate-500'}`} />
              <span>My Learning</span>
            </button>

            {/* 3. Hackathon / DSA Practice ⌵ */}
            <div className="relative" ref={practiceRef}>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setPracticeDropdownOpen(false);
                    scrollToTop();
                    onNavigatePractice('master');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-l-xl transition-all duration-200 cursor-pointer ${
                    activeNavTab === 'practice'
                      ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                      : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
                  }`}
                  title="Open Hackathon / DSA Practice Full Page (All 14 Tracks)"
                >
                  <Code2 className={`w-4 h-4 ${activeNavTab === 'practice' ? 'text-[#1a73e8]' : 'text-slate-500'}`} />
                  <span>Hackathon / DSA Practice</span>
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

              {/* Hackathon / DSA Practice Floating Dropdown */}
              {practiceDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 py-2 px-2 z-50 animate-fadeIn text-left">
                  <div className="px-3 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Coding Tracks</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">1st Topic Free</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setPracticeDropdownOpen(false);
                      scrollToTop();
                      onNavigatePractice('master');
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

                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setPracticeDropdownOpen(false);
                      scrollToTop();
                      onNavigatePractice('python');
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

                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setPracticeDropdownOpen(false);
                      scrollToTop();
                      onNavigatePractice('sql');
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

                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setPracticeDropdownOpen(false);
                      scrollToTop();
                      onNavigatePractice('excel');
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
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
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
                scrollToTop();
                onNavigateEarn();
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'earn'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <Coins className={`w-4 h-4 ${activeNavTab === 'earn' ? 'text-amber-500' : 'text-slate-500'}`} />
              <span>Earn Cash</span>
            </button>

            {/* 6. Internship */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop();
                onNavigateInternship();
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
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
                scrollToTop();
                onNavigatePlacement();
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'placement'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeNavTab === 'placement' ? 'text-[#1a73e8]' : 'text-slate-500'}`} />
              <span>Placement</span>
            </button>
          </nav>

          {/* RIGHT: Search → Notification → Profile Picture → Hamburger Menu (☰) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-2.5 shrink-0">
            {/* Subtle Divider (Desktop) */}
            <div className="hidden lg:block h-6 w-[1px] bg-slate-200/90 mx-0.5" />

            {/* 1. Search Icon Button */}
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
              <Search className="w-5 h-5 text-slate-700" />
            </button>

            {/* 2. Notification Bell with Red Badge Dot */}
            <div className="relative" ref={notificationsRef}>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setNotificationsOpen((prev) => !prev);
                  setProfileDropdownOpen(false);
                  setHamburgerDrawerOpen(false);
                  if (onOpenNotifications) onOpenNotifications();
                }}
                className="relative p-2 rounded-xl text-slate-600 hover:text-[#1a73e8] hover:bg-slate-100 transition-colors cursor-pointer"
                title="Notifications"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 text-slate-700" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
              </button>

              {/* Notifications Floating Card */}
              {notificationsOpen && (
                <div className="absolute right-0 top-full mt-2 w-[calc(100vw-24px)] max-w-80 sm:w-80 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 py-3 px-3 z-50 animate-fadeIn text-left">
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

            {/* 3. Circular Student Profile Picture */}
            {!isLoggedIn ? (
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    if (onOpenSignUp) onOpenSignUp();
                    else onOpenLogin?.();
                  }}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white font-normal text-xs sm:text-sm whitespace-nowrap shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <span>Free Login / Sign Up</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            ) : (
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setProfileDropdownOpen((prev) => !prev);
                    setHamburgerDrawerOpen(false);
                    setNotificationsOpen(false);
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#DCE8FC] bg-gradient-to-tr from-blue-50 to-indigo-100 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer select-none overflow-hidden shrink-0"
                  title={`Logged in as ${studentName}`}
                  aria-label="Student Profile"
                >
                  {studentAvatar ? (
                    <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#EEF4FF] text-[#1a73e8] font-bold text-xs sm:text-sm">
                      {studentName.charAt(0).toUpperCase() || 'S'}
                    </div>
                  )}
                </button>

                {/* ─── PREMIUM STUDENT PROFILE DROPDOWN CARD (Exact Visual Specification) ─── */}
                {profileDropdownOpen && (
                  <div
                    className="absolute right-0 top-full mt-2.5 w-[360px] max-w-[calc(100vw-24px)] bg-white rounded-[20px] border border-[#E5EDF8] shadow-[0_15px_45px_rgba(20,50,100,0.15)] p-6 z-50 text-left transition-all duration-200 transform origin-top-right animate-fadeIn"
                    role="dialog"
                    aria-label="Student Profile Card"
                  >
                    {/* Top Profile Section: Large 100px x 100px circular photo with camera badge */}
                    <div className="relative mx-auto w-[100px] h-[100px] mb-3">
                      <div className="w-[100px] h-[100px] rounded-full border-[3px] border-[#DCE8FC] overflow-hidden bg-gradient-to-tr from-blue-50 to-indigo-100 flex items-center justify-center shadow-xs">
                        {studentAvatar ? (
                          <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#EEF4FF] text-[#1a73e8] font-black text-3xl">
                            {studentName.charAt(0).toUpperCase() || 'S'}
                          </div>
                        )}
                      </div>

                      {/* Small decorative blue camera icon at bottom-right */}
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          setEditNameInput(studentName);
                          setEditPhoneInput(studentPhone);
                          setEditProfileModalOpen(true);
                        }}
                        className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#1a73e8] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs border-2 border-white cursor-pointer transition-transform hover:scale-105 active:scale-95"
                        title="Change profile picture"
                        aria-label="Change profile picture"
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Student Name: Center aligned, 22px, font-weight 700, #10234A */}
                    <h3 className="text-[22px] font-bold text-[#10234A] text-center leading-tight">
                      {studentName}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium text-center mt-0.5">
                      Student
                    </p>

                    {/* Mobile Number Section */}
                    <div className="border-t border-[#E5EDF8] pt-4 mt-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1a73e8] shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1 text-left">
                          <span className="text-xs text-slate-500 font-medium block">Mobile Number</span>
                          <span className="text-sm font-bold text-[#10234A] block truncate mt-0.5">
                            {studentPhone && studentPhone.trim() ? studentPhone : 'Not provided'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Edit Profile Button: Full width, 52px height, #EEF4FF bg, thin blue border */}
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        setProfileDropdownOpen(false);
                        setEditNameInput(studentName);
                        setEditPhoneInput(studentPhone);
                        setEditProfileModalOpen(true);
                        if (onOpenProfile) onOpenProfile();
                      }}
                      className="w-full h-[52px] mt-5 px-4 rounded-[12px] bg-[#EEF4FF] hover:bg-[#E0ECFF] border border-[#C8DCFC] flex items-center justify-between text-[#1a73e8] font-bold text-sm transition-all duration-200 cursor-pointer active:scale-[0.99] shadow-2xs group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Pencil className="w-4 h-4 text-[#1a73e8]" />
                        <span>Edit Profile</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 4. Hamburger Menu (☰) immediately to the RIGHT of the profile picture */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setHamburgerDrawerOpen((prev) => !prev);
                setProfileDropdownOpen(false);
                setNotificationsOpen(false);
              }}
              className="w-[42px] h-[42px] rounded-[12px] bg-[#EEF4FF] hover:bg-[#E0ECFF] text-[#10234A] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-105 active:scale-95 shrink-0"
              title="Open Navigation Drawer"
              aria-label="Open Navigation Drawer"
            >
              <Menu className="w-5 h-5 text-[#10234A]" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── PREMIUM RIGHT-SIDE NAVIGATION DRAWER (Slide-in From Right) ─── */}
      {hamburgerDrawerOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end animate-fadeIn">
          {/* Dark Translucent Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setHamburgerDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <aside
            className="relative z-10 w-[88vw] max-w-[340px] md:w-[340px] h-[100dvh] bg-white shadow-[-10px_0_40px_rgba(20,50,100,0.15)] md:rounded-l-[24px] flex flex-col justify-between overflow-hidden text-left animate-slideInRight"
            role="dialog"
            aria-label="Quick Navigation Drawer"
          >
            {/* Drawer Header */}
            <div className="p-5 pb-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-gradient-to-b from-slate-50/70 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] border border-[#DCE8FC] flex items-center justify-center text-[#1a73e8] font-black text-sm shadow-xs shrink-0">
                  ⚡
                </div>
                <div>
                  <h2 className="text-base font-black text-[#10234A] tracking-tight leading-tight">
                    FUTURE IT INDUSTRY
                  </h2>
                  <p className="text-xs text-slate-500 font-medium leading-none mt-0.5">
                    Quick Navigation
                  </p>
                </div>
              </div>

              {/* Close (X) Button */}
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setHamburgerDrawerOpen(false);
                }}
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Close navigation drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Navigation Menu Items (Exact 11 Items in Specified Order) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              {/* 1. Dashboard — House */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('dashboard')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('dashboard')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <House className={`w-5 h-5 shrink-0 ${isItemActive('dashboard') ? 'text-[#1a73e8]' : 'text-slate-500 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-sm">Dashboard</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 2. My Learning — BookOpen */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('learning')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('learning')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className={`w-5 h-5 shrink-0 ${isItemActive('learning') ? 'text-[#1a73e8]' : 'text-slate-500 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-sm">My Learning</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 3. Hackathon / DSA Practice — CodeXml */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('practice')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('practice')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CodeXml className={`w-5 h-5 shrink-0 ${isItemActive('practice') ? 'text-[#1a73e8]' : 'text-slate-500 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-sm">Hackathon / DSA Practice</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 4. Earning & Wallet — Wallet */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('earn')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('earn')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Wallet className={`w-5 h-5 shrink-0 ${isItemActive('earn') ? 'text-amber-500' : 'text-slate-500 group-hover:text-amber-500'}`} />
                  <span className="text-sm">Earning &amp; Wallet</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 5. Certificate — Award */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('certificate')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('certificate')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Award className={`w-5 h-5 shrink-0 ${isItemActive('certificate') ? 'text-[#1a73e8]' : 'text-slate-500 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-sm">Certificate</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 6. Internship — GraduationCap */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('internship')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('internship')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className={`w-5 h-5 shrink-0 ${isItemActive('internship') ? 'text-[#1a73e8]' : 'text-slate-500 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-sm">Internship</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 7. Recommendation Letter — FileBadge */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('recommendation')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('recommendation')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FileBadge className={`w-5 h-5 shrink-0 ${isItemActive('recommendation') ? 'text-[#1a73e8]' : 'text-slate-500 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-sm">Recommendation Letter</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 8. Placement — BriefcaseBusiness */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('placement')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('placement')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className={`w-5 h-5 shrink-0 ${isItemActive('placement') ? 'text-[#1a73e8]' : 'text-slate-500 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-sm">Placement</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Thin Divider */}
              <div className="my-2 border-t border-slate-100" />

              {/* 9. Help and Support — CircleHelp */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('help')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('help')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CircleHelp className={`w-5 h-5 shrink-0 ${isItemActive('help') ? 'text-[#1a73e8]' : 'text-slate-500 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-sm">Help and Support</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 10. Contact Support — MessageCircle */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('contact')}
                className={`w-full h-[50px] px-3.5 rounded-[12px] flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                  isItemActive('contact')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold border-l-4 border-[#1a73e8] shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className={`w-5 h-5 shrink-0 ${isItemActive('contact') ? 'text-[#1a73e8]' : 'text-slate-500 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-sm">Contact Support</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a73e8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Thin Divider */}
              <div className="my-2 border-t border-slate-100" />

              {/* 11. Sign Out — LogOut */}
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setHamburgerDrawerOpen(false);
                  if (onLogout) {
                    onLogout();
                  } else {
                    localStorage.removeItem('futureai_logged_in');
                    window.location.hash = '#home';
                    window.location.reload();
                  }
                }}
                className="w-full h-[50px] px-3.5 rounded-[12px] bg-rose-50 hover:bg-rose-100/90 text-rose-600 border border-rose-100/80 flex items-center justify-between font-bold text-sm transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Sign Out</span>
                </div>
                <ChevronRight className="w-4 h-4 text-rose-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* ─── REAL EDIT PROFILE MODAL ─── */}
      {editProfileModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div
            className="bg-white rounded-3xl border border-slate-200 max-w-md w-full p-6 shadow-2xl relative text-left"
            role="dialog"
            aria-label="Edit Student Profile"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#EEF4FF] text-[#1a73e8] flex items-center justify-center font-bold">
                  <Pencil className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#10234A]">Edit Profile</h3>
              </div>
              <button
                type="button"
                onClick={() => setEditProfileModalOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#10234A] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={editNameInput}
                  onChange={(e) => setEditNameInput(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#10234A] mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={editPhoneInput}
                  onChange={(e) => setEditPhoneInput(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 transition"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Used for internship &amp; certificate verification
                </span>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditProfileModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1a73e8] hover:bg-blue-600 shadow-xs transition cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
