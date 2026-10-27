import React, { useState, useEffect, useRef } from 'react';
import {
  FutureLogo } from './FutureLogo';
import { WalletWithdrawModal } from './WalletWithdrawModal';
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
  Laptop,
  Users,
  Star,
  FileText,
  ChevronLeft,
} from 'lucide-react';

const WA_SUPPORT_PHONE = '917632099528';
const WA_SUPPORT_MESSAGE = 'Hello Future IT Industry Support Team, I need help regarding my course or student account. Please assist me.';
const WA_SUPPORT_URL = `https://wa.me/${WA_SUPPORT_PHONE}?text=${encodeURIComponent(WA_SUPPORT_MESSAGE)}`;

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.41-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29" />
  </svg>
);

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
  userName = '',
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
  isLoggedIn = false,
  onOpenLogin,
  onOpenSignUp,
}) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [hamburgerDrawerOpen, setHamburgerDrawerOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [headerWithdrawModalOpen, setHeaderWithdrawModalOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Dynamic student info state from localStorage & props
  const [studentName, setStudentName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('futureai_user_name');
      if (stored && stored !== 'Learner' && stored !== 'Rahul' && stored !== 'Rahul Sharma' && stored !== 'Student') {
        return stored;
      }
      return userName && userName !== 'Learner' && userName !== 'Rahul' && userName !== 'Rahul Sharma' && userName !== 'Student' ? userName : 'Subodh Kumar';
    }
    return userName && userName !== 'Learner' && userName !== 'Rahul' && userName !== 'Rahul Sharma' && userName !== 'Student' ? userName : '';
  });

  const [studentEmail, setStudentEmail] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_email') || 'subodhkumar@gmail.com';
    }
    return 'subodhkumar@gmail.com';
  });
  const [editEmailInput, setEditEmailInput] = useState<string>(studentEmail);

  const [studentPhone, setStudentPhone] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_phone') || userPhone || '+91 98765 43210';
    }
    return userPhone || '';
  });

  const [studentAvatar, setStudentAvatar] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_avatar') || userAvatar || '/images/avatar-subodh-kumar.jpg';
    }
    return userAvatar || '';
  });

  // Dynamic Wallet Balance State
  const readWalletBalance = (): number => {
    if (typeof window === 'undefined') return 0;
    try {
      const loggedIn = isLoggedIn || localStorage.getItem('futureai_logged_in') === 'true';
      if (!loggedIn) return 0;
      const customWallet = localStorage.getItem('futureai_user_wallet');
      if (customWallet !== null && customWallet !== '') {
        const parsed = parseInt(customWallet, 10);
        if (!isNaN(parsed) && parsed >= 0) return parsed;
      }
      const email = (localStorage.getItem('futureai_user_email') || '').trim().toLowerCase();
      const phone = (localStorage.getItem('futureai_user_phone') || '').trim();
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('futureai_affiliate_hub_v5_')) {
          if ((email && k.toLowerCase().includes(email)) || (phone && k.includes(phone))) {
            const item = localStorage.getItem(k);
            if (item) {
              const p = JSON.parse(item);
              if (typeof p.availableBalance === 'number' && p.availableBalance >= 0) {
                return p.availableBalance;
              }
            }
          }
        }
      }
    } catch {
      // ignore
    }
    return 0;
  };

  const [walletBalance, setWalletBalance] = useState<number>(readWalletBalance);

  useEffect(() => {
    const syncWallet = () => setWalletBalance(readWalletBalance());
    syncWallet();
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', syncWallet);
      window.addEventListener('focus', syncWallet);
      window.addEventListener('futureai_wallet_updated', syncWallet);
      return () => {
        window.removeEventListener('storage', syncWallet);
        window.removeEventListener('focus', syncWallet);
        window.removeEventListener('futureai_wallet_updated', syncWallet);
      };
    }
  }, [isLoggedIn, userName]);

  // Edit form state
  const [editNameInput, setEditNameInput] = useState(studentName);
  const [editPhoneInput, setEditPhoneInput] = useState(studentPhone);

  // Sync state if props or localStorage change
  useEffect(() => {
    if (userName && userName !== 'Rahul' && userName !== 'Learner' && userName !== 'Student') {
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

    if (!isLoggedIn) {
      if (['dashboard', 'learning', 'practice', 'mock-interview', 'coding-practice', 'internship', 'placement', 'certificate', 'recommendation', 'placement-support'].includes(target)) {
        const redirectMap: Record<string, string> = {
          dashboard: '#dashboard',
          learning: '#data-analyst',
          practice: '#python-challenges',
          'mock-interview': '#mockinterview',
          'coding-practice': '#game',
          internship: '#internship',
          placement: '#placement',
          certificate: '#certificates',
          recommendation: '#recommendation',
          'placement-support': '#placement',
        };
        const targetHash = redirectMap[target] || '#dashboard';
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('futureai_auth_redirect', targetHash);
          localStorage.setItem('futureai_auth_redirect', targetHash);
        }
        if (onOpenLogin) onOpenLogin();
        return;
      }
    }

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
        onNavigatePractice('python');
        if (typeof window !== 'undefined') window.location.hash = '#python-challenges';
        break;
      case 'mock-interview':
        if (typeof window !== 'undefined') window.location.hash = '#mockinterview';
        break;
      case 'coding-practice':
        onNavigatePractice('master');
        if (typeof window !== 'undefined') window.location.hash = '#game';
        break;
      case 'internship':
        onNavigateInternship();
        if (typeof window !== 'undefined') window.location.hash = '#internship';
        break;
      case 'placement':
        onNavigatePlacement();
        if (typeof window !== 'undefined') window.location.hash = '#placement';
        break;
      case 'certificate':
        if (onNavigateCertificate) onNavigateCertificate();
        else if (typeof window !== 'undefined') window.location.hash = '#certificates';
        break;
      case 'recommendation':
        if (onNavigateRecommendation) onNavigateRecommendation();
        else if (typeof window !== 'undefined') window.location.hash = '#recommendation';
        break;
      case 'placement-support':
        onNavigatePlacement();
        if (typeof window !== 'undefined') window.location.hash = '#placement';
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
        return h.includes('#python-challenges') || h.includes('#sql-challenges') || h.includes('#excel-challenges') || h.includes('#dsa') || h.includes('#arena');
      case 'mock-interview':
        return h.includes('#interview') || h.includes('#mockinterview');
      case 'coding-practice':
        return h.includes('#game') || h === '#practice' || h.includes('#codingpractice');
      case 'internship':
        return activeNavTab === 'internship' || h.includes('#intern');
      case 'placement':
        return activeNavTab === 'placement' || h === '#placement' || h.includes('#job');
      case 'certificate':
        return h.includes('#cert');
      case 'recommendation':
        return h.includes('#recom') || h.includes('#lor');
      case 'placement-support':
        return h.includes('#placement-support');
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

            {/* 3. Hackathon / DSA Practice (Single Direct Link - NO dropdown, NO arrow) */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop();
                onNavigatePractice('master');
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                activeNavTab === 'practice'
                  ? 'bg-[#eef5fe] text-[#1a73e8] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50'
              }`}
            >
              <Code2 className={`w-4 h-4 ${activeNavTab === 'practice' ? 'text-[#1a73e8]' : 'text-slate-500'}`} />
              <span>Hackathon / DSA Practice</span>
            </button>

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
          </nav>

          {/* RIGHT: Search → Wallet + Amount → Notification → Profile Picture → Hamburger Menu (☰) */}
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

            {/* 2. Wallet Icon with Dynamic Balance Amount (Only Shown When Logged In) */}
            {isLoggedIn && (
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  if (onOpenWallet) {
                    onOpenWallet();
                  } else {
                    setHeaderWithdrawModalOpen(true);
                  }
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/80 text-emerald-700 font-bold text-xs sm:text-[13px] transition-all active:scale-95 cursor-pointer shadow-2xs"
                title="Withdraw Earnings"
                aria-label="Wallet Balance - Withdraw Earnings"
              >
                <Wallet className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>₹{walletBalance.toLocaleString('en-IN')}</span>
              </button>
            )}

            {/* 3. Notification Bell with Red Badge Dot */}
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
                      {studentName ? studentName.charAt(0).toUpperCase() : 'S'}
                    </div>
                  )}
                </button>
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

          {/* Drawer Container (Width 82-86vw, max 340px, rounded left corners) */}
          <aside
            className="relative z-10 w-[84vw] max-w-[340px] h-[100dvh] bg-white shadow-[-12px_0_40px_rgba(15,23,42,0.18)] rounded-l-[28px] flex flex-col justify-between overflow-hidden text-left animate-slideInRight"
            role="dialog"
            aria-label="Navigation Drawer"
          >
            {/* Header: FUTURE IT INDUSTRY Logo on left + Close X on right */}
            <div className="px-5 py-4 flex items-center justify-between shrink-0 bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FutureLogo variant="full" size="md" />
              </div>

              {/* Circular Close Button */}
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setHamburgerDrawerOpen(false);
                }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 border border-slate-200/60"
                aria-label="Close navigation drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Navigation Menu (Exact 10 Items in Specified Order) */}
            <div className="flex-1 overflow-y-auto px-3.5 py-2 space-y-1">
              {/* 1. Dashboard */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('dashboard')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('dashboard')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <House className={`w-5 h-5 shrink-0 ${isItemActive('dashboard') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">Dashboard</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('dashboard') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>

              {/* 2. My Learning */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('learning')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('learning')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className={`w-5 h-5 shrink-0 ${isItemActive('learning') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">My Learning</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('learning') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>

              {/* 3. Hackathon / DSA Practice */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('practice')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('practice')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CodeXml className={`w-5 h-5 shrink-0 ${isItemActive('practice') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">Hackathon / DSA Practice</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('practice') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>

              {/* 4. Unlimited Mock Interview */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('mock-interview')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('mock-interview')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Users className={`w-5 h-5 shrink-0 ${isItemActive('mock-interview') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">Unlimited Mock Interview</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('mock-interview') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>

              {/* 5. Coding Practice */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('coding-practice')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('coding-practice')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Laptop className={`w-5 h-5 shrink-0 ${isItemActive('coding-practice') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">Coding Practice</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('coding-practice') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>

              {/* 6. Internship */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('internship')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('internship')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className={`w-5 h-5 shrink-0 ${isItemActive('internship') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">Internship</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('internship') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>

              {/* 7. Job & Placement */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('placement')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('placement')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Briefcase className={`w-5 h-5 shrink-0 ${isItemActive('placement') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">Job &amp; Placement</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('placement') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>

              {/* 8. Certificate */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('certificate')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('certificate')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Award className={`w-5 h-5 shrink-0 ${isItemActive('certificate') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">Certificate</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('certificate') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>

              {/* 9. Recommendation Letter */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('recommendation')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('recommendation')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FileText className={`w-5 h-5 shrink-0 ${isItemActive('recommendation') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">Recommendation Letter</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('recommendation') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>

              {/* 10. Placement Support */}
              <button
                type="button"
                onClick={() => handleDrawerNavigate('placement-support')}
                className={`w-full h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                  isItemActive('placement-support')
                    ? 'bg-[#EEF4FF] text-[#1a73e8] font-bold shadow-xs'
                    : 'text-[#10234A] hover:bg-[#EEF4FF] hover:text-[#1a73e8] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Star className={`w-5 h-5 shrink-0 ${isItemActive('placement-support') ? 'text-[#1a73e8]' : 'text-slate-700 group-hover:text-[#1a73e8]'}`} />
                  <span className="text-[13.5px] leading-none">Placement Support</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isItemActive('placement-support') ? 'text-[#1a73e8]' : 'text-slate-400 group-hover:text-[#1a73e8]'}`} />
              </button>
            </div>

            {/* Bottom Sign Out Button */}
            <div className="p-4 pt-2 border-t border-slate-100 bg-white shrink-0">
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
                className="w-full h-12 px-4 rounded-2xl bg-rose-50/80 hover:bg-rose-100/90 text-rose-600 border border-rose-100/80 flex items-center justify-between font-bold text-sm transition-all duration-200 cursor-pointer active:scale-[0.98] group"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="w-5 h-5 text-rose-600 shrink-0" />
                  <span className="font-extrabold text-[15px]">Sign Out</span>
                </div>
                <ChevronRight className="w-4 h-4 text-rose-500 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* ─── PREMIUM COMPACT MY PROFILE PANEL (Matches Reference 1:1) ─── */}
      {profileDropdownOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end animate-fadeIn">
          {/* Dark Translucent Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setProfileDropdownOpen(false)}
            aria-hidden="true"
          />

          {/* Profile Drawer Panel */}
          <aside
            className="relative z-10 w-[84vw] max-w-[340px] h-[100dvh] bg-white shadow-[-12px_0_40px_rgba(15,23,42,0.18)] rounded-l-[28px] flex flex-col justify-between overflow-hidden text-left animate-slideInRight"
            role="dialog"
            aria-label="My Profile"
          >
            {/* Header: Back Button + My Profile + Edit Button */}
            <div className="p-4 px-5 flex items-center justify-between shrink-0 border-b border-slate-100 bg-white">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setProfileDropdownOpen(false);
                }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 border border-slate-200/60"
                aria-label="Back"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700 -ml-0.5" />
              </button>

              <h2 className="text-base font-extrabold text-[#10234A]">My Profile</h2>

              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setEditNameInput(studentName);
                  setEditPhoneInput(studentPhone);
                  setEditEmailInput(studentEmail);
                  setEditProfileModalOpen(true);
                }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 border border-slate-200/60"
                aria-label="Edit Profile"
              >
                <Pencil className="w-4 h-4 text-slate-700" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              {/* 1. Profile Identity Header */}
              <div className="flex items-center gap-3 pt-1">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full border-2 border-blue-200 overflow-hidden bg-gradient-to-tr from-blue-50 to-indigo-100 flex items-center justify-center shadow-xs">
                    {studentAvatar ? (
                      <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#EEF4FF] text-[#1a73e8] font-black text-xl">
                        {studentName ? studentName.charAt(0).toUpperCase() : 'S'}
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEditNameInput(studentName);
                      setEditPhoneInput(studentPhone);
                      setEditEmailInput(studentEmail);
                      setEditProfileModalOpen(true);
                    }}
                    className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#1a73e8] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs border-2 border-white cursor-pointer"
                    title="Change Photo"
                    aria-label="Change Photo"
                  >
                    <Camera className="w-2.5 h-2.5" />
                  </button>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-extrabold text-[#10234A] truncate leading-tight">
                      {studentName}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 fill-emerald-50" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                    Student • Data Analyst with GenAI
                  </p>
                </div>
              </div>

              {/* 2. Gamification Summary (3 Pills + XP Bar) */}
              <div className="space-y-2.5 pt-1">
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg bg-amber-50/80 border border-amber-200/60 text-amber-800 text-[10px] font-bold">
                    <span>👑</span>
                    <span>Level 3</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg bg-orange-50/80 border border-orange-200/60 text-orange-700 text-[10px] font-bold">
                    <span>🔥</span>
                    <span>7 Days</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg bg-yellow-50/80 border border-yellow-200/60 text-yellow-800 text-[10px] font-bold">
                    <span>⭐</span>
                    <span>12 Badges</span>
                  </div>
                </div>

                {/* XP Progress */}
                <div>
                  <div className="flex items-center justify-between text-[10.5px] mb-1">
                    <span className="font-extrabold text-[#10234A]">1,250 / 1,600 XP</span>
                    <span className="font-bold text-[#0284c7]">78% to Level 4</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-[#1a73e8] to-cyan-400"
                      style={{ width: '78%' }}
                    />
                  </div>
                </div>
              </div>

              {/* 3. Personal Information Card */}
              <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-[#10234A]">Personal Information</span>
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setEditNameInput(studentName);
                      setEditPhoneInput(studentPhone);
                      setEditEmailInput(studentEmail);
                      setEditProfileModalOpen(true);
                    }}
                    className="flex items-center gap-1 text-[11px] font-bold text-[#1a73e8] hover:underline cursor-pointer"
                  >
                    <Pencil className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Full Name</span>
                    <span className="text-[#10234A] font-bold">{studentName}</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Email</span>
                    <span className="text-[#10234A] font-bold truncate max-w-[170px]">{studentEmail}</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Phone</span>
                    <span className="text-[#10234A] font-bold">{studentPhone}</span>
                  </div>
                </div>
              </div>

              {/* 4. Learning Information Card */}
              <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-3">
                <div className="mb-2">
                  <span className="text-xs font-extrabold text-[#10234A]">Learning Information</span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Current Course</span>
                    <span className="text-[#10234A] font-bold">Data Analyst with GenAI</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Enrolled Since</span>
                    <span className="text-[#10234A] font-bold">26 Oct 2026</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Total Courses</span>
                    <span className="text-[#10234A] font-bold">3</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Completed Courses</span>
                    <span className="text-[#10234A] font-bold">1</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Certificates Earned</span>
                    <span className="text-[#10234A] font-bold">1</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Internship Status</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-200/70 text-slate-700 text-[10px] font-semibold">
                      Not Started
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-slate-500 font-medium">Job Assistance</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-200/70 text-slate-700 text-[10px] font-semibold">
                      Not Started
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action: View My Progress */}
            <div className="p-4 pt-2 border-t border-slate-100 bg-white shrink-0">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setProfileDropdownOpen(false);
                  onNavigateLearning();
                  if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
                }}
                className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View My Progress</span>
                <ChevronRight className="w-3.5 h-3.5" />
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

      {/* ─── HEADER WALLET WITHDRAW EARNINGS MODAL (Matches Earn Cash Wallet Withdraw) ─── */}
      <WalletWithdrawModal
        isOpen={headerWithdrawModalOpen}
        onClose={() => setHeaderWithdrawModalOpen(false)}
        onSuccess={() => setWalletBalance(readWalletBalance())}
      />
    </>
  );
};
