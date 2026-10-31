import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FutureLogo } from './FutureLogo';
import { WalletWithdrawModal } from './WalletWithdrawModal';
import { soundEffects } from '../../services/soundEffects';
import { auth } from '../../services/firebase';
import { SessionService } from '../../services/sessionService';
import { clearActiveCourseSessionCacheOnLogout } from '../../services/courseUnlockService';
import {
  Home,
  BookOpen,
  Code2,
  Coins,
  Wallet,
  Award,
  GraduationCap,
  FileBadge,
  Briefcase,
  LogOut,
  Pencil,
  Phone,
  Camera,
  Search,
  Bell,
  User,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Laptop,
  FileCheck2,
  Target,
  Sparkles,
  Headphones,
} from 'lucide-react';

const WA_SUPPORT_PHONE = '917632099528';
const WA_SUPPORT_MESSAGE = 'Hello Future IT Industry Support Team, I need help regarding my course or student account. Please assist me.';
const WA_SUPPORT_URL = `https://wa.me/${WA_SUPPORT_PHONE}?text=${encodeURIComponent(WA_SUPPORT_MESSAGE)}`;

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

  const notificationsRef = useRef<HTMLDivElement>(null);

  // Dynamic student info state from localStorage & props
  const [studentName, setStudentName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('futureai_user_name');
      if (stored && stored !== 'Learner' && stored !== 'Rahul' && stored !== 'Rahul Sharma' && stored !== 'Student') {
        return stored;
      }
      return userName && userName !== 'Learner' && userName !== 'Rahul' && userName !== 'Rahul Sharma' && userName !== 'Subodh Kumar' && userName !== 'Student' ? userName : 'Rahul Sharma';
    }
    return userName && userName !== 'Learner' && userName !== 'Rahul' && userName !== 'Rahul Sharma' && userName !== 'Subodh Kumar' && userName !== 'Student' ? userName : '';
  });

  const [studentEmail, setStudentEmail] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_email') || 'rahul.sharma@example.com';
    }
    return 'rahul.sharma@example.com';
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
      return localStorage.getItem('futureai_user_avatar') || userAvatar || '/images/avatar-rahul-sharma.jpg';
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

  // Close notifications dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
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
      if (['dashboard', 'learning', 'practice', 'earning', 'internship', 'placement', 'certificate', 'recommendation'].includes(target)) {
        const redirectMap: Record<string, string> = {
          dashboard: '#dashboard',
          learning: '#data-analyst',
          practice: '#python-challenges',
          earning: '#earnings',
          internship: '#internship',
          placement: '#placement',
          certificate: '#certificates',
          recommendation: '#recommendation',
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
        onNavigatePractice('master');
        if (typeof window !== 'undefined') window.location.hash = '#python-challenges';
        break;
      case 'earning':
        onNavigateEarn();
        if (typeof window !== 'undefined') window.location.hash = '#earnings';
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
        return h.includes('#python-challenges') || h.includes('#sql-challenges') || h.includes('#excel-challenges') || h.includes('#dsa') || h.includes('#arena') || h.includes('#game') || h === '#practice' || h.includes('#codingpractice');
      case 'earning':
        return activeNavTab === 'earn' || h.includes('#earn') || h.includes('#wallet') || h.includes('#income') || h.includes('#referral') || h.includes('#withdraw');
      case 'internship':
        return activeNavTab === 'internship' || h.includes('#intern');
      case 'placement':
        return activeNavTab === 'placement' || h === '#placement' || h.includes('#job');
      case 'certificate':
        return h.includes('#cert');
      case 'recommendation':
        return h.includes('#recom') || h.includes('#lor');
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

  // Authoritative Sign Out Handler
  const handleSignOutAction = async (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    soundEffects.playClick();
    setProfileDropdownOpen(false);
    setHamburgerDrawerOpen(false);

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('futureai_logging_out', 'true');
    }

    try {
      const currentUid = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_uid') || '' : '';
      if (currentUid) {
        await SessionService.terminateSession(currentUid).catch(() => {});
      }
    } catch {}

    try {
      await Promise.race([
        auth.signOut(),
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);
    } catch (e) {
      console.warn('Firebase signout error:', e);
    }

    try {
      if (onLogout) {
        await onLogout();
      }
    } catch (err) {
      console.warn('onLogout error:', err);
    }

    if (typeof window !== 'undefined') {
      localStorage.removeItem('futureai_logged_in');
      localStorage.removeItem('futureai_user_name');
      localStorage.removeItem('futureai_user_email');
      localStorage.removeItem('futureai_user_phone');
      localStorage.removeItem('futureai_user_uid');
      localStorage.removeItem('futureai_user_avatar');
      localStorage.removeItem('futureai_user_role');
      localStorage.removeItem('futureai_user_wallet');
      localStorage.removeItem('futureai_user_coins');
      localStorage.removeItem('futureai_user_gems');
      localStorage.removeItem('futureai_payment_order_id');
      localStorage.removeItem('futureai_payment_txn_id');
      sessionStorage.removeItem('futureai_auth_redirect');
      localStorage.removeItem('futureai_auth_redirect');
      clearActiveCourseSessionCacheOnLogout();
      SessionService.clearSessionId();
      window.location.hash = '#home';
      setTimeout(() => {
        window.location.reload();
      }, 50);
    }
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

  // 10 HeyGen-Inspired Drawer Navigation Items
  const drawerNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'learning', label: 'My Learning', icon: BookOpen },
    { id: 'practice', label: 'DSA Coding Practice', icon: Code2 },
    { id: 'earning', label: 'Earning & Wallet', icon: Coins },
    { id: 'certificate', label: 'Certificate', icon: Award },
    { id: 'internship', label: 'Internship', icon: GraduationCap },
    { id: 'recommendation', label: 'Recommendation Letter', icon: FileBadge },
    { id: 'placement', label: 'Placement', icon: Target },
  ];

  return (
    <>
      {/* ─── HEYGEN-INSPIRED PURE WHITE STICKY TOP HEADER ─── */}
      <header className="sticky top-0 z-50 w-full bg-[#FFFFFF]/98 backdrop-blur-md border-b border-[#EAECF0] shadow-[0_1px_3px_rgba(16,24,40,0.05)] transition-all shrink-0">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 h-15 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* LEFT: Future IT Industries Official Brand Logo */}
          <div
            onClick={() => {
              soundEffects.playClick();
              scrollToTop();
              onNavigateHome();
            }}
            className="flex items-center gap-2 select-none cursor-pointer group min-w-0 shrink transition-opacity hover:opacity-90 active:scale-98"
            title="Future IT Industries - Learn Today, Earn Tomorrow."
          >
            <FutureLogo variant="full" size="md" />
          </div>

          {/* CENTER: Navigation Pill / Tab Bar (Desktop: 1024px and above) — HeyGen Soft Cyan Treatment */}
          <nav className="hidden lg:flex items-center gap-1.5 shrink-0 text-[13px] font-medium text-[#344054]">
            {/* 1. Home */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop();
                onNavigateHome();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'home'
                  ? 'bg-[#E4F5FA] text-[#0e7490] font-semibold border border-[#16C5EA]/25 shadow-2xs'
                  : 'text-[#344054] hover:text-[#0e7490] hover:bg-[#FAFBFC] border border-transparent'
              }`}
            >
              <Home className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'home' ? 'text-[#16C5EA]' : 'text-[#667085]'}`} />
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
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'learning'
                  ? 'bg-[#E4F5FA] text-[#0e7490] font-semibold border border-[#16C5EA]/25 shadow-2xs'
                  : 'text-[#344054] hover:text-[#0e7490] hover:bg-[#FAFBFC] border border-transparent'
              }`}
            >
              <BookOpen className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'learning' ? 'text-[#16C5EA]' : 'text-[#667085]'}`} />
              <span>My Learning</span>
            </button>

            {/* 3. DSA Coding Practice */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop();
                onNavigatePractice('master');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'practice'
                  ? 'bg-[#E4F5FA] text-[#0e7490] font-semibold border border-[#16C5EA]/25 shadow-2xs'
                  : 'text-[#344054] hover:text-[#0e7490] hover:bg-[#FAFBFC] border border-transparent'
              }`}
            >
              <Laptop className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'practice' ? 'text-[#16C5EA]' : 'text-[#667085]'}`} />
              <span>DSA Coding Practice</span>
            </button>

            {/* 4. ATS Resume Checker */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                onOpenAtsResume();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'ats'
                  ? 'bg-[#E4F5FA] text-[#0e7490] font-semibold border border-[#16C5EA]/25 shadow-2xs'
                  : 'text-[#344054] hover:text-[#0e7490] hover:bg-[#FAFBFC] border border-transparent'
              }`}
            >
              <FileCheck2 className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'ats' ? 'text-[#16C5EA]' : 'text-[#667085]'}`} />
              <span>ATS Resume</span>
            </button>

            {/* 5. Earn Cash */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop();
                onNavigateEarn();
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'earn'
                  ? 'bg-[#E4F5FA] text-[#0e7490] font-semibold border border-[#16C5EA]/25 shadow-2xs'
                  : 'text-[#344054] hover:text-[#0e7490] hover:bg-[#FAFBFC] border border-transparent'
              }`}
            >
              <Coins className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'earn' ? 'text-[#16C5EA]' : 'text-[#667085]'}`} />
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
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'internship'
                  ? 'bg-[#E4F5FA] text-[#0e7490] font-semibold border border-[#16C5EA]/25 shadow-2xs'
                  : 'text-[#344054] hover:text-[#0e7490] hover:bg-[#FAFBFC] border border-transparent'
              }`}
            >
              <GraduationCap className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'internship' ? 'text-[#16C5EA]' : 'text-[#667085]'}`} />
              <span>Internship</span>
            </button>
          </nav>

          {/* RIGHT: Search → Wallet → Notifications → Profile → Hamburger (☰) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-2.5 shrink-0">
            {/* Subtle Divider (Desktop) */}
            <div className="hidden lg:block h-6 w-[1px] bg-[#EAECF0] mx-0.5" />

            {/* 1. Search Icon Button */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                if (onOpenSearch) onOpenSearch();
                else setSearchModalOpen(true);
              }}
              className={`w-9 h-9 rounded-xl border border-[#EAECF0] bg-[#FFFFFF] hover:bg-[#FAFBFC] hover:border-[#D0D5DD] text-[#667085] hover:text-[#344054] flex items-center justify-center transition-all cursor-pointer shadow-2xs ${
                !isLoggedIn ? 'hidden min-[480px]:flex' : ''
              }`}
              title="Search topics, challenges & courses (Ctrl+K)"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5 stroke-[1.8]" />
            </button>

            {/* 2. Wallet Icon with Dynamic Balance Amount (When Logged In) */}
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F0FDF9] hover:bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-bold text-xs sm:text-[13px] transition-all active:scale-95 cursor-pointer shadow-2xs"
                title="Wallet Balance - Withdraw Earnings"
                aria-label="Wallet Balance - Withdraw Earnings"
              >
                <Wallet className="w-4 h-4 text-[#059669] stroke-[2] shrink-0" />
                <span>₹{walletBalance.toLocaleString('en-IN')}</span>
              </button>
            )}

            {/* 3. Notification Bell */}
            <div className={`relative ${!isLoggedIn ? 'hidden min-[480px]:block' : ''}`} ref={notificationsRef}>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setNotificationsOpen((prev) => !prev);
                  setProfileDropdownOpen(false);
                  setHamburgerDrawerOpen(false);
                  if (onOpenNotifications) onOpenNotifications();
                }}
                className="w-9 h-9 rounded-xl border border-[#EAECF0] bg-[#FFFFFF] hover:bg-[#FAFBFC] hover:border-[#D0D5DD] text-[#667085] hover:text-[#344054] flex items-center justify-center relative transition-all cursor-pointer shadow-2xs"
                title="Notifications"
                aria-label="Notifications"
              >
                <Bell className="w-4.5 h-4.5 stroke-[1.8]" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#F04438] rounded-full ring-2 ring-white" />
              </button>

              {/* Notifications Floating Card (HeyGen Clean White Style) */}
              {notificationsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-[998] bg-[#0c111d]/20 backdrop-blur-2xs sm:hidden"
                    onClick={() => setNotificationsOpen(false)}
                    aria-hidden="true"
                  />
                  <div className="fixed sm:absolute inset-x-3 sm:inset-x-auto sm:right-0 top-16 sm:top-full sm:mt-2 sm:w-88 max-w-sm mx-auto sm:mx-0 bg-white rounded-2xl shadow-[0_12px_32px_rgba(16,24,40,0.12)] border border-[#EAECF0] p-4 z-[999] text-left max-h-[82vh] overflow-y-auto">
                    <div className="flex items-center justify-between pb-3 border-b border-[#EAECF0]">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#344054]">Notifications</span>
                        <span className="text-[10px] font-semibold text-[#0e7490] bg-[#E4F5FA] border border-[#16C5EA]/20 px-2 py-0.5 rounded-full">2 New</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setNotificationsOpen(false)}
                        className="w-6 h-6 rounded-lg text-[#667085] hover:text-[#344054] hover:bg-[#F2F4F7] flex items-center justify-center transition-colors text-xs font-bold"
                        aria-label="Close notifications"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      {notificationItems.map((n) => (
                        <div
                          key={n.id}
                          className={`p-3 rounded-xl transition text-left border ${
                            n.unread
                              ? 'bg-[#E4F5FA]/40 border-[#16C5EA]/25'
                              : 'bg-[#FAFBFC] border-[#EAECF0]'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <strong className="text-xs font-bold text-[#344054] leading-snug break-words">
                              {n.title}
                            </strong>
                            <span className="text-[10px] text-[#667085] shrink-0 font-medium whitespace-nowrap mt-0.5">
                              {n.time}
                            </span>
                          </div>
                          <p className="text-[11.5px] text-[#667085] mt-1 leading-relaxed break-words">
                            {n.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* 4. User Profile (HeyGen Compact Avatar Button on Header) */}
            {isLoggedIn ? (
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setProfileDropdownOpen((prev) => !prev);
                  setHamburgerDrawerOpen(false);
                  setNotificationsOpen(false);
                }}
                className="w-9 h-9 rounded-full border border-[#EAECF0] hover:border-[#16C5EA] ring-2 ring-transparent hover:ring-[#E4F5FA] transition-all overflow-hidden flex items-center justify-center cursor-pointer shadow-2xs relative shrink-0"
                title="My Profile & Account"
                aria-label="Student Profile"
              >
                {studentAvatar ? (
                  <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-[#E4F5FA] text-[#0e7490] font-bold text-xs">
                    {studentName ? studentName.charAt(0).toUpperCase() : 'S'}
                  </div>
                )}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-white" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  if (onOpenSignUp) onOpenSignUp();
                  else onOpenLogin?.();
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#16C5EA] hover:bg-[#0ea5e9] active:scale-95 text-white font-semibold text-xs whitespace-nowrap shadow-xs transition-all duration-150 shrink-0"
              >
                <span>Login</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2] shrink-0" />
              </button>
            )}

            {/* 5. HeyGen-Inspired Hamburger Menu Button (☰) */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setHamburgerDrawerOpen((prev) => !prev);
                setProfileDropdownOpen(false);
                setNotificationsOpen(false);
              }}
              className="w-9 h-9 rounded-xl border border-[#EAECF0] bg-[#FFFFFF] hover:bg-[#E4F5FA] hover:border-[#16C5EA]/40 text-[#344054] hover:text-[#16C5EA] flex items-center justify-center transition-all duration-150 cursor-pointer shadow-2xs shrink-0"
              title="Open Navigation Menu"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── HEYGEN-INSPIRED PREMIUM NAVIGATION DRAWER (Slide-in From Right) ─── */}
      {typeof document !== 'undefined' && hamburgerDrawerOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex justify-end items-stretch animate-fadeIn">
          {/* Subtle Dark Backdrop */}
          <div
            className="fixed inset-0 bg-[#0c111d]/30 backdrop-blur-2xs transition-opacity"
            onClick={() => setHamburgerDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container (HeyGen Pure White `#FFFFFF` + `#FAFBFC` Background, Soft Grey Borders `#EAECF0`) */}
          <aside
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-[88vw] max-w-[340px] sm:max-w-[360px] h-full bg-[#FFFFFF] shadow-[-16px_0_48px_rgba(16,24,40,0.12)] rounded-l-[28px] border-l border-[#EAECF0] flex flex-col justify-between overflow-y-auto no-scrollbar text-left animate-slideInRight font-sans select-none"
            role="dialog"
            aria-label="Navigation Menu"
          >
            {/* Top Container: Header Title + Close Button */}
            <div className="flex flex-col">
              {/* Drawer Top Header Row */}
              <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-[#EAECF0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E4F5FA] flex items-center justify-center text-[#16C5EA]">
                    <Sparkles className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-[#344054] tracking-tight block">
                      Future IT Industry
                    </span>
                    <span className="text-[10px] font-medium text-[#667085] leading-none block">
                      Learn Today, Earn Tomorrow.
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setHamburgerDrawerOpen(false);
                  }}
                  className="w-8 h-8 rounded-xl bg-[#F2F4F7] hover:bg-[#EAECF0] text-[#667085] hover:text-[#344054] flex items-center justify-center transition-all cursor-pointer active:scale-90"
                  aria-label="Close navigation drawer"
                >
                  <X className="w-4 h-4 stroke-[2]" />
                </button>
              </div>

              {/* ─── Profile Section inside Drawer (HeyGen Compact Card) ─── */}
              <div className="px-4 py-3 border-b border-[#EAECF0]">
                {isLoggedIn ? (
                  <div className="p-3 rounded-2xl bg-[#FAFBFC] border border-[#EAECF0] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <div className="w-10 h-10 rounded-full border border-[#EAECF0] overflow-hidden bg-[#E4F5FA] flex items-center justify-center">
                          {studentAvatar ? (
                            <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-[#0e7490] font-bold text-sm">
                              {studentName ? studentName.charAt(0).toUpperCase() : 'S'}
                            </span>
                          )}
                        </div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-white" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-[13px] font-bold text-[#344054] truncate leading-tight">
                          {studentName || 'Student'}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-semibold bg-[#E4F5FA] text-[#0e7490] border border-[#16C5EA]/20">
                            <ShieldCheck className="w-2.5 h-2.5 text-[#16C5EA]" />
                            <span>{(typeof window !== 'undefined' ? localStorage.getItem('futureai_user_role') : null) || 'Student'}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        setEditNameInput(studentName);
                        setEditPhoneInput(studentPhone);
                        setEditEmailInput(studentEmail);
                        setEditProfileModalOpen(true);
                        setHamburgerDrawerOpen(false);
                      }}
                      className="p-1.5 rounded-lg border border-[#EAECF0] bg-white hover:bg-[#F2F4F7] text-[#667085] hover:text-[#344054] transition cursor-pointer shrink-0"
                      title="Edit Profile"
                      aria-label="Edit Profile"
                    >
                      <Pencil className="w-3.5 h-3.5 stroke-[1.8]" />
                    </button>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-[#FAFBFC] border border-[#EAECF0] text-center">
                    <h4 className="text-[13px] font-bold text-[#344054]">
                      Welcome to Future IT
                    </h4>
                    <p className="text-[11px] text-[#667085] mt-0.5 font-medium">
                      Login to continue courses and track placement.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        setHamburgerDrawerOpen(false);
                        if (onOpenSignUp) onOpenSignUp();
                        else onOpenLogin?.();
                      }}
                      className="mt-2.5 w-full py-2 px-3 rounded-xl bg-[#16C5EA] hover:bg-[#0ea5e9] text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition active:scale-98"
                    >
                      <span>Login / Sign Up</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                    </button>
                  </div>
                )}
              </div>

              {/* ─── 8 Primary Navigation Items (HeyGen Pill Styling: #E4F5FA Active State) ─── */}
              <div className="px-3 py-2 space-y-1">
                <span className="px-2 pt-1 pb-1 block text-[10.5px] font-bold uppercase tracking-wider text-[#98A2B3]">
                  Navigation
                </span>

                {drawerNavItems.map((item) => {
                  const ItemIcon = item.icon;
                  const active = isItemActive(item.id);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleDrawerNavigate(item.id)}
                      className={`w-full rounded-xl py-2 px-3 flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                        active
                          ? 'bg-[#E4F5FA] text-[#0e7490] font-semibold border border-[#16C5EA]/25 shadow-2xs'
                          : 'text-[#344054] hover:bg-[#FAFBFC] hover:text-[#101828] border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <ItemIcon
                          className={`w-4.5 h-4.5 shrink-0 stroke-[1.8] transition-colors ${
                            active ? 'text-[#16C5EA]' : 'text-[#667085] group-hover:text-[#344054]'
                          }`}
                        />
                        <span
                          className={`text-[13px] truncate ${
                            active ? 'font-bold text-[#0e7490]' : 'font-medium text-[#344054] group-hover:text-[#101828]'
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          active
                            ? 'text-[#16C5EA]'
                            : 'text-[#D0D5DD] group-hover:text-[#667085] group-hover:translate-x-0.5'
                        }`}
                      />
                    </button>
                  );
                })}

                {/* 9. Help & Support (WhatsApp Integration) */}
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setHamburgerDrawerOpen(false);
                    if (onOpenHelp) onOpenHelp();
                    else window.open(WA_SUPPORT_URL, '_blank', 'noopener,noreferrer');
                  }}
                  className="w-full rounded-xl py-2 px-3 flex items-center justify-between text-[#344054] hover:bg-[#FAFBFC] hover:text-[#101828] border border-transparent transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Headphones className="w-4.5 h-4.5 text-[#10B981] stroke-[1.8] shrink-0" />
                    <span className="text-[13px] font-medium text-[#344054] group-hover:text-[#101828]">
                      Help &amp; Support
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded-full">
                    Live Chat
                  </span>
                </button>
              </div>
            </div>

            {/* ─── Bottom Action Row: Sign Out (HeyGen Soft Red Treatment) ─── */}
            <div className="p-3.5 border-t border-[#EAECF0] bg-[#FAFBFC] shrink-0">
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={handleSignOutAction}
                  className="w-full h-9.5 rounded-xl bg-[#FEF3F2] hover:bg-[#FEE4E2] border border-[#FECDCA] px-3.5 flex items-center justify-between text-[#D92D20] font-semibold text-xs transition-all active:scale-[0.98] cursor-pointer shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <LogOut className="w-4 h-4 text-[#D92D20] stroke-[1.8] shrink-0" />
                    <span>Sign Out</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#FDA29B]" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setHamburgerDrawerOpen(false);
                    if (onOpenSignUp) onOpenSignUp();
                    else onOpenLogin?.();
                  }}
                  className="w-full h-9.5 rounded-xl bg-[#16C5EA] hover:bg-[#0ea5e9] text-white font-semibold text-xs px-3.5 flex items-center justify-between shadow-xs active:scale-[0.98] transition cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 stroke-[2] text-white shrink-0" />
                    <span>Login / Sign Up</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2] text-white" />
                </button>
              )}
            </div>
          </aside>
        </div>,
        document.body
      )}

      {/* ─── HEYGEN-INSPIRED COMPACT MY PROFILE PANEL ─── */}
      {typeof document !== 'undefined' && profileDropdownOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex justify-end items-start animate-fadeIn">
          {/* Subtle Dark Backdrop */}
          <div
            className="fixed inset-0 bg-[#0c111d]/25 backdrop-blur-2xs transition-opacity"
            onClick={() => setProfileDropdownOpen(false)}
            aria-hidden="true"
          />

          {/* Profile Card Modal */}
          <aside
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-[86vw] max-w-[320px] h-auto self-start bg-white shadow-[0_16px_40px_rgba(16,24,40,0.14)] rounded-2xl border border-[#EAECF0] m-3 sm:mt-18 sm:mr-6 flex flex-col overflow-hidden text-left animate-slideInRight font-sans"
            role="dialog"
            aria-label="My Profile"
          >
            {/* Header: Title + Close Button */}
            <div className="p-3.5 px-4 flex items-center justify-between border-b border-[#EAECF0] bg-white">
              <span className="text-sm font-bold text-[#344054]">My Profile</span>
              <button
                type="button"
                onClick={() => setProfileDropdownOpen(false)}
                className="w-7 h-7 rounded-lg bg-[#F2F4F7] hover:bg-[#EAECF0] text-[#667085] hover:text-[#344054] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close Profile"
              >
                <X className="w-3.5 h-3.5 stroke-[2]" />
              </button>
            </div>

            {/* Profile Content */}
            <div className="p-4 space-y-3.5">
              {/* Identity Header */}
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full border border-[#EAECF0] overflow-hidden bg-[#E4F5FA] flex items-center justify-center shadow-2xs">
                    {studentAvatar ? (
                      <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#0e7490] font-bold text-lg">
                        {studentName ? studentName.charAt(0).toUpperCase() : 'S'}
                      </span>
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
                    className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#16C5EA] hover:bg-[#0ea5e9] text-white flex items-center justify-center shadow-xs border-2 border-white cursor-pointer"
                    title="Change Photo"
                    aria-label="Change Photo"
                  >
                    <Camera className="w-2.5 h-2.5" />
                  </button>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[14px] font-bold text-[#344054] truncate leading-tight">
                      {studentName}
                    </h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded-md text-[10px] font-semibold bg-[#E4F5FA] text-[#0e7490] border border-[#16C5EA]/20">
                    Student
                  </span>
                </div>
              </div>

              {/* Personal Information Box */}
              <div className="bg-[#FAFBFC] border border-[#EAECF0] rounded-xl p-3 space-y-2 text-xs">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#EAECF0]">
                  <span className="font-bold text-[#344054]">Personal Details</span>
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setEditNameInput(studentName);
                      setEditPhoneInput(studentPhone);
                      setEditEmailInput(studentEmail);
                      setEditProfileModalOpen(true);
                      setProfileDropdownOpen(false);
                    }}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#16C5EA] hover:underline cursor-pointer"
                  >
                    <Pencil className="w-3 h-3 stroke-[2]" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#667085]">Name:</span>
                  <span className="font-semibold text-[#344054] truncate max-w-[170px]">{studentName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#667085]">Email:</span>
                  <span className="font-semibold text-[#344054] truncate max-w-[170px]">{studentEmail}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#667085]">Mobile:</span>
                  <span className="font-semibold text-[#344054]">{studentPhone}</span>
                </div>
              </div>

              {/* Sign Out Button */}
              <button
                type="button"
                onClick={handleSignOutAction}
                className="w-full py-2 px-3 rounded-xl bg-[#FEF3F2] hover:bg-[#FEE4E2] border border-[#FECDCA] text-[#D92D20] font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <LogOut className="w-4 h-4 stroke-[1.8]" />
                <span>Sign Out</span>
              </button>
            </div>
          </aside>
        </div>,
        document.body
      )}

      {/* ─── HEYGEN-STYLE EDIT PROFILE MODAL ─── */}
      {editProfileModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#0c111d]/40 backdrop-blur-2xs animate-fadeIn font-sans">
          <div
            className="bg-white rounded-2xl border border-[#EAECF0] max-w-md w-full p-6 shadow-2xl relative text-left"
            role="dialog"
            aria-label="Edit Student Profile"
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-[#EAECF0] mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#E4F5FA] text-[#16C5EA] flex items-center justify-center">
                  <Pencil className="w-4 h-4 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-[#344054]">Edit Profile</h3>
              </div>
              <button
                type="button"
                onClick={() => setEditProfileModalOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-[#F2F4F7] text-[#667085] hover:text-[#344054] flex items-center justify-center cursor-pointer transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#344054] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={editNameInput}
                  onChange={(e) => setEditNameInput(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAECF0] bg-white text-sm font-medium text-[#344054] outline-none focus:border-[#16C5EA] focus:ring-2 focus:ring-[#16C5EA]/15 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#344054] mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={editPhoneInput}
                  onChange={(e) => setEditPhoneInput(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAECF0] bg-white text-sm font-medium text-[#344054] outline-none focus:border-[#16C5EA] focus:ring-2 focus:ring-[#16C5EA]/15 transition"
                />
                <span className="text-[11px] text-[#667085] mt-1 block">
                  Used for internship &amp; certificate verification
                </span>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3.5 border-t border-[#EAECF0]">
                <button
                  type="button"
                  onClick={() => setEditProfileModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#667085] hover:bg-[#F2F4F7] transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-[#16C5EA] hover:bg-[#0ea5e9] shadow-xs transition cursor-pointer"
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
        <div className="fixed inset-0 z-[10000] flex items-start justify-center p-4 sm:p-6 pt-20 bg-[#0c111d]/40 backdrop-blur-2xs animate-fadeIn font-sans">
          <div className="bg-white rounded-2xl border border-[#EAECF0] max-w-xl w-full p-4 sm:p-5 shadow-2xl relative text-left">
            <div className="flex items-center gap-3 pb-3 border-b border-[#EAECF0]">
              <Search className="w-5 h-5 text-[#16C5EA] shrink-0 stroke-[2]" />
              <input
                type="text"
                autoFocus
                placeholder="Search challenges, topics, courses or career tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm font-medium text-[#344054] outline-none placeholder:text-[#98A2B3]"
              />
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-lg hover:bg-[#F2F4F7] text-[#667085] hover:text-[#344054] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-3 max-h-80 overflow-y-auto space-y-1">
              {searchResults.length === 0 ? (
                <p className="text-center py-6 text-xs text-[#667085]">No results found for "{searchQuery}"</p>
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
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#E4F5FA]/50 transition text-left cursor-pointer group"
                  >
                    <div>
                      <strong className="text-xs font-bold text-[#344054] group-hover:text-[#0e7490] block">{item.title}</strong>
                      <span className="text-[10px] text-[#667085]">{item.category}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#667085] group-hover:text-[#16C5EA] group-hover:translate-x-1 transition-all" />
                  </button>
                ))
              )}
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#EAECF0] flex items-center justify-between text-[11px] text-[#667085]">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#F2F4F7] text-[#344054] font-mono text-[10px] border border-[#EAECF0]">ESC</kbd> to close</span>
              <span className="font-medium text-[#16C5EA]">⚡ Fast AI Search</span>
            </div>
          </div>
        </div>
      )}

      {/* ─── HEADER WALLET WITHDRAW EARNINGS MODAL ─── */}
      <WalletWithdrawModal
        isOpen={headerWithdrawModalOpen}
        onClose={() => setHeaderWithdrawModalOpen(false)}
        onSuccess={() => setWalletBalance(readWalletBalance())}
      />
    </>
  );
};
