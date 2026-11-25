import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FutureLogo } from './FutureLogo';
import { WalletWithdrawModal } from './WalletWithdrawModal';
import { DesktopAppleTopNav } from './navigation/DesktopAppleTopNav';
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
  PanelLeftClose,
  Code,
  Crown,
} from 'lucide-react';

const WA_SUPPORT_PHONE = '917632099528';
const WA_SUPPORT_MESSAGE = 'Hello Future IT Industry Support Team, I need help regarding my course or student account. Please assist me.';
const WA_SUPPORT_URL = `https://wa.me/${WA_SUPPORT_PHONE}?text=${encodeURIComponent(WA_SUPPORT_MESSAGE)}`;

export interface FutureAdvancedHeaderProps {
  userName?: string;
  userPhone?: string;
  userAvatar?: string;
  activeNavTab?: 'home' | 'learning' | 'practice' | 'ats' | 'earn' | 'internship' | 'placement' | 'hr_round';
  onNavigateHome: () => void;
  onNavigateLearning: () => void;
  onNavigatePractice: (track?: 'master' | 'python' | 'sql' | 'excel') => void;
  onOpenAtsResume: () => void;
  onNavigateHrRound?: () => void;
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
  showDesktopDock?: boolean;
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
  onNavigateHrRound,
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
  showDesktopDock,
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
  const avatarInputRef = useRef<HTMLInputElement>(null);

  // Dynamic student info state from localStorage, Firebase Auth & props
  const [studentName, setStudentName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const isUserLogged = isLoggedIn || localStorage.getItem('futureai_logged_in') === 'true';
      if (!isUserLogged) return '';
      const stored = localStorage.getItem('futureai_user_name');
      if (stored && stored !== 'Learner' && stored !== 'Rahul' && stored !== 'Student' && stored !== 'Rahul Sharma') {
        return stored;
      }
      if (auth.currentUser?.displayName) {
        return auth.currentUser.displayName;
      }
      return userName && userName !== 'Learner' && userName !== 'Rahul' && userName !== 'Student' && userName !== 'Rahul Sharma' ? userName : '';
    }
    return isLoggedIn && userName && userName !== 'Learner' && userName !== 'Rahul' && userName !== 'Student' && userName !== 'Rahul Sharma' ? userName : '';
  });

  const [studentEmail, setStudentEmail] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const isUserLogged = isLoggedIn || localStorage.getItem('futureai_logged_in') === 'true';
      if (!isUserLogged) return '';
      const stored = localStorage.getItem('futureai_user_email');
      if (stored && stored !== 'rahul.sharma@example.com') return stored;
      return auth.currentUser?.email || '';
    }
    return '';
  });
  const [editEmailInput, setEditEmailInput] = useState<string>(studentEmail);

  const [studentPhone, setStudentPhone] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const isUserLogged = isLoggedIn || localStorage.getItem('futureai_logged_in') === 'true';
      if (!isUserLogged) return '';
      return localStorage.getItem('futureai_user_phone') || auth.currentUser?.phoneNumber || userPhone || '';
    }
    return userPhone || '';
  });

  const [studentAvatar, setStudentAvatar] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const isUserLogged = isLoggedIn || localStorage.getItem('futureai_logged_in') === 'true';
      if (!isUserLogged) return '';
      const stored = localStorage.getItem('futureai_user_avatar');
      if (stored && !stored.includes('avatar-rahul-sharma.jpg')) return stored;
      return auth.currentUser?.photoURL || (userAvatar && !userAvatar.includes('avatar-rahul-sharma.jpg') ? userAvatar : '');
    }
    return userAvatar && !userAvatar.includes('avatar-rahul-sharma.jpg') ? userAvatar : '';
  });

  // Handle profile picture file upload
  const handleAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (result) {
        setStudentAvatar(result);
        if (typeof window !== 'undefined') {
          localStorage.setItem('futureai_user_avatar', result);
        }
        soundEffects.playCelebration();
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

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
    if (!isLoggedIn) {
      setStudentName('');
      setStudentAvatar('');
      setStudentEmail('');
      setStudentPhone('');
      setProfileDropdownOpen(false);
    } else {
      if (typeof window !== 'undefined') {
        const storedName = localStorage.getItem('futureai_user_name');
        const storedPhone = localStorage.getItem('futureai_user_phone');
        const storedAvatar = localStorage.getItem('futureai_user_avatar');
        const storedEmail = localStorage.getItem('futureai_user_email');
        if (storedName && storedName !== 'Rahul Sharma' && storedName !== 'Learner' && storedName !== 'Student') {
          setStudentName(storedName);
        } else if (userName && userName !== 'Rahul' && userName !== 'Learner' && userName !== 'Student') {
          setStudentName(userName);
        }
        if (storedPhone) setStudentPhone(storedPhone);
        if (storedAvatar && !storedAvatar.includes('avatar-rahul-sharma.jpg')) setStudentAvatar(storedAvatar);
        if (storedEmail && storedEmail !== 'rahul.sharma@example.com') setStudentEmail(storedEmail);
      }
    }
  }, [isLoggedIn, userName]);

  useEffect(() => {
    if (profileDropdownOpen && typeof window !== 'undefined') {
      const isUserLogged = isLoggedIn || localStorage.getItem('futureai_logged_in') === 'true';
      if (!isUserLogged) {
        setStudentName('');
        setStudentAvatar('');
        setStudentEmail('');
        setStudentPhone('');
        setProfileDropdownOpen(false);
        return;
      }
      const storedName = localStorage.getItem('futureai_user_name');
      const storedPhone = localStorage.getItem('futureai_user_phone');
      const storedAvatar = localStorage.getItem('futureai_user_avatar');
      if (storedName && storedName !== 'Rahul Sharma') setStudentName(storedName);
      if (storedPhone) setStudentPhone(storedPhone);
      if (storedAvatar && !storedAvatar.includes('avatar-rahul-sharma.jpg')) setStudentAvatar(storedAvatar);
    }
  }, [profileDropdownOpen, isLoggedIn]);

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

  // Close mobile notifications dropdown on outside click (only when mobile container is visible)
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        notificationsRef.current &&
        notificationsRef.current.offsetParent !== null &&
        !notificationsRef.current.contains(e.target as Node)
      ) {
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
        if (typeof window !== 'undefined') window.location.hash = '#learning';
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
      case 'ats':
        return activeNavTab === 'ats' || h.includes('#ats');
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

    setStudentName('');
    setStudentAvatar('');
    setStudentEmail('');
    setStudentPhone('');
    setProfileDropdownOpen(false);

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

  // Notification items state (preserving unread count, read/unread status, and actions)
  const [notificationState, setNotificationState] = useState([
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
  ]);

  const markNotificationRead = (id: number) => {
    setNotificationState((prev) =>
      prev.map((item) => (item.id === id ? { ...item, unread: false } : item))
    );
  };

  const markAllNotificationsRead = () => {
    setNotificationState((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  const notificationItems = notificationState.map((item) => ({
    ...item,
    action:
      item.id === 1
        ? () => {
            scrollToTop();
            onNavigatePractice('python');
          }
        : item.id === 3
        ? () => {
            scrollToTop();
            onNavigateEarn();
          }
        : undefined,
  }));

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

  // 8 Navigation Menu Rows for Drawer
  const mobileDrawerRows = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      subtitle: 'Overview & Progress',
      icon: Home,
      iconBg: 'bg-[#e0efff]',
      iconColor: 'text-[#0066ff]',
    },
    {
      id: 'learning',
      title: 'My Learning',
      subtitle: 'Continue Your Courses',
      icon: BookOpen,
      iconBg: 'bg-[#f3e8ff]',
      iconColor: 'text-[#9333ea]',
    },
    {
      id: 'practice',
      title: 'DSA Coding Practice',
      subtitle: 'Code • Practice • Improve',
      icon: Code2,
      iconBg: 'bg-[#ffedd5]',
      iconColor: 'text-[#ea580c]',
    },
    {
      id: 'ats',
      title: 'ATS Resume Analyser',
      subtitle: 'Check & Improve Your Resume',
      icon: FileCheck2,
      iconBg: 'bg-[#dcfce7]',
      iconColor: 'text-[#16a34a]',
    },
    {
      id: 'internship',
      title: 'Internship',
      subtitle: 'Hands-on Experience',
      icon: GraduationCap,
      iconBg: 'bg-[#dbeafe]',
      iconColor: 'text-[#2563eb]',
    },
    {
      id: 'certificate',
      title: 'Certificate',
      subtitle: 'Your Achievements',
      icon: Briefcase,
      iconBg: 'bg-[#fef3c7]',
      iconColor: 'text-[#d97706]',
    },
    {
      id: 'recommendation',
      title: 'Recommendation Letter',
      subtitle: 'Get Your LOR',
      icon: FileBadge,
      iconBg: 'bg-[#ede9fe]',
      iconColor: 'text-[#7c3aed]',
    },
    {
      id: 'placement',
      title: 'Job & Placement',
      subtitle: 'Opportunities & Support',
      icon: Target,
      iconBg: 'bg-[#ffe4e6]',
      iconColor: 'text-[#e11d48]',
    },
  ];

  // HeyGen Desktop Drawer Items
  const heygenDesktopItems = [
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
      {/* ─── PREMIUM APPLE-STYLE FLOATING TOP NAVIGATION (Desktop >= md) ─── */}
      {(showDesktopDock ?? true) && (
        <DesktopAppleTopNav
          isLoggedIn={isLoggedIn}
          onOpenLogin={onOpenLogin}
          onOpenSignUp={onOpenSignUp}
          activeNavTab={activeNavTab}
          walletBalance={walletBalance}
          studentName={studentName}
          studentAvatar={studentAvatar}
          notificationsOpen={notificationsOpen}
          notificationItems={notificationItems}
          onToggleNotifications={() => {
            setNotificationsOpen((prev) => !prev);
            setProfileDropdownOpen(false);
            setHamburgerDrawerOpen(false);
            if (onOpenNotifications) onOpenNotifications();
          }}
          onCloseNotifications={() => setNotificationsOpen(false)}
          onMarkNotificationRead={markNotificationRead}
          onMarkAllNotificationsRead={markAllNotificationsRead}
          onNavigateHome={() => {
            scrollToTop();
            onNavigateHome();
          }}
          onNavigateLearning={() => {
            scrollToTop();
            onNavigateLearning();
          }}
          onNavigatePractice={(track) => {
            scrollToTop();
            onNavigatePractice(track);
          }}
          onOpenAtsResume={() => {
            scrollToTop();
            onOpenAtsResume();
          }}
          onNavigateHrRound={(targetRoleKey) => {
            scrollToTop();
            if (typeof window !== 'undefined') {
              const rParam = targetRoleKey ? `?role=${targetRoleKey}` : '';
              window.location.hash = `#interview-prep${rParam}`;
              window.dispatchEvent(
                new CustomEvent('futureai_interview_role_change', {
                  detail: { role: targetRoleKey },
                })
              );
            }
          }}
          onNavigateEarn={() => {
            scrollToTop();
            onNavigateEarn();
          }}
          onOpenWallet={() => {
            if (onOpenWallet) onOpenWallet();
            else setHeaderWithdrawModalOpen(true);
          }}
          onNavigateInternship={() => {
            scrollToTop();
            onNavigateInternship();
          }}
          onNavigatePlacement={() => {
            scrollToTop();
            onNavigatePlacement();
          }}
          onNavigateCertificate={() => {
            scrollToTop();
            if (onNavigateCertificate) onNavigateCertificate();
            else if (typeof window !== 'undefined') window.location.hash = '#certificates';
          }}
          onNavigateRecommendation={() => {
            scrollToTop();
            if (onNavigateRecommendation) onNavigateRecommendation();
            else if (typeof window !== 'undefined') window.location.hash = '#recommendation';
          }}
          onOpenHelp={() => {
            if (onOpenHelp) onOpenHelp();
            else window.open(WA_SUPPORT_URL, '_blank', 'noopener,noreferrer');
          }}
          onOpenSearch={() => {
            if (onOpenSearch) onOpenSearch();
            else setSearchModalOpen(true);
          }}
          onToggleProfile={() => {
            if (!isLoggedIn) {
              if (onOpenLogin) onOpenLogin();
              else if (onOpenSignUp) onOpenSignUp();
              return;
            }
            setProfileDropdownOpen((prev) => !prev);
            setHamburgerDrawerOpen(false);
            setNotificationsOpen(false);
          }}
          onToggleHamburger={() => {
            setHamburgerDrawerOpen((prev) => !prev);
            setProfileDropdownOpen(false);
            setNotificationsOpen(false);
          }}
        />
      )}

      {/* ─── STICKY TOP HEADER BAR (Mobile < md when Desktop Apple Top Nav is active) ─── */}
      <header className={`${(showDesktopDock ?? true) ? 'md:hidden' : ''} sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#DDD6FE]/70 shadow-[0_2px_14px_rgba(109,40,217,0.04)] transition-all shrink-0`}>
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

          {/* ══════════ CENTER: DESKTOP ONLY HEYGEN-INSPIRED PILL NAV (>= 1024px, hidden when macOS Bottom Dock is active) ══════════ */}
          <nav className={`${(showDesktopDock ?? true) ? 'hidden' : 'hidden lg:flex'} items-center gap-1 lg:gap-1.5 shrink-0 text-[13px] font-semibold text-slate-700`}>
            {/* 1. Home */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop();
                onNavigateHome();
              }}
              className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'home'
                  ? 'bg-[#F5F3FF] text-[#6D28D9] font-bold border border-[#DDD6FE] shadow-2xs'
                  : 'text-[#344054] hover:text-[#6D28D9] hover:bg-[#F5F3FF]/70 border border-transparent'
              }`}
            >
              <Home className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'home' ? 'text-[#6D28D9]' : 'text-[#667085]'}`} />
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
              className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'learning'
                  ? 'bg-[#F5F3FF] text-[#6D28D9] font-bold border border-[#DDD6FE] shadow-2xs'
                  : 'text-[#344054] hover:text-[#6D28D9] hover:bg-[#F5F3FF]/70 border border-transparent'
              }`}
            >
              <BookOpen className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'learning' ? 'text-[#6D28D9]' : 'text-[#667085]'}`} />
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
              className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'practice'
                  ? 'bg-[#F5F3FF] text-[#6D28D9] font-bold border border-[#DDD6FE] shadow-2xs'
                  : 'text-[#344054] hover:text-[#6D28D9] hover:bg-[#F5F3FF]/70 border border-transparent'
              }`}
            >
              <Laptop className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'practice' ? 'text-[#6D28D9]' : 'text-[#667085]'}`} />
              <span>DSA Coding Practice</span>
            </button>

            {/* 4. ATS Resume Checker */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                onOpenAtsResume();
              }}
              className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'ats'
                  ? 'bg-[#F5F3FF] text-[#6D28D9] font-bold border border-[#DDD6FE] shadow-2xs'
                  : 'text-[#344054] hover:text-[#6D28D9] hover:bg-[#F5F3FF]/70 border border-transparent'
              }`}
            >
              <FileCheck2 className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'ats' ? 'text-[#6D28D9]' : 'text-[#667085]'}`} />
              <span>ATS Resume</span>
            </button>

            {/* 4.5 Interview Prep */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop();
                if (onNavigateHrRound) onNavigateHrRound();
                else if (typeof window !== 'undefined') {
                  window.location.hash = '#hr-round';
                }
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'hr_round'
                  ? 'bg-[#F5F3FF] text-[#6D28D9] font-bold border border-[#DDD6FE] shadow-2xs'
                  : 'text-[#344054] hover:text-[#6D28D9] hover:bg-[#F5F3FF]/70 border border-transparent'
              }`}
            >
              <Target className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'hr_round' ? 'text-[#6D28D9]' : 'text-[#667085]'}`} />
              <span>Interview Prep</span>
            </button>

            {/* 5. Earn Cash */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                scrollToTop();
                onNavigateEarn();
              }}
              className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'earn'
                  ? 'bg-[#F5F3FF] text-[#6D28D9] font-bold border border-[#DDD6FE] shadow-2xs'
                  : 'text-[#344054] hover:text-[#6D28D9] hover:bg-[#F5F3FF]/70 border border-transparent'
              }`}
            >
              <Coins className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'earn' ? 'text-[#6D28D9]' : 'text-[#667085]'}`} />
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
              className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
                activeNavTab === 'internship'
                  ? 'bg-[#F5F3FF] text-[#6D28D9] font-bold border border-[#DDD6FE] shadow-2xs'
                  : 'text-[#344054] hover:text-[#6D28D9] hover:bg-[#F5F3FF]/70 border border-transparent'
              }`}
            >
              <GraduationCap className={`w-4 h-4 stroke-[1.8] ${activeNavTab === 'internship' ? 'text-[#6D28D9]' : 'text-[#667085]'}`} />
              <span>Internship</span>
            </button>
          </nav>

          {/* ══════════ RIGHT: SEARCH | WALLET | NOTIFICATIONS | PROFILE | HAMBURGER ══════════ */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-2.5 shrink-0">
            {/* Subtle Divider (Desktop) */}
            <div className="hidden lg:block h-6 w-[1px] bg-slate-200/90 mx-0.5" />

            {/* 1. Search Icon Button (Desktop gets HeyGen Ctrl+K pill, Mobile gets clean icon) */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                if (onOpenSearch) onOpenSearch();
                else setSearchModalOpen(true);
              }}
              className="hidden lg:flex items-center gap-2 px-3 h-9 rounded-xl border border-[#EAECF0] bg-[#FAFBFC] hover:bg-white hover:border-[#D0D5DD] text-[#667085] hover:text-[#344054] text-xs font-medium transition-all cursor-pointer shadow-2xs"
              title="Search topics & courses (Ctrl+K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4 stroke-[2] text-[#667085]" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#EAECF0] text-[10px] text-[#98A2B3] font-mono">⌘K</kbd>
            </button>

            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                if (onOpenSearch) onOpenSearch();
                else setSearchModalOpen(true);
              }}
              className={`lg:hidden p-2 rounded-xl text-slate-600 hover:text-[#1a73e8] hover:bg-slate-100 transition-colors cursor-pointer ${
                !isLoggedIn ? 'hidden min-[480px]:block' : ''
              }`}
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
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/80 text-emerald-700 font-bold text-xs sm:text-[13px] transition-all active:scale-95 cursor-pointer shadow-2xs"
                title="Withdraw Earnings"
                aria-label="Wallet Balance - Withdraw Earnings"
              >
                <Wallet className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>₹{walletBalance.toLocaleString('en-IN')}</span>
              </button>
            )}

            {/* 3. Notification Bell with Red Badge Dot */}
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
                className="relative p-2 rounded-xl text-slate-600 hover:text-[#1a73e8] hover:bg-slate-100 transition-colors cursor-pointer"
                title="Notifications"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 text-slate-700" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
              </button>

              {/* Notifications Floating Card */}
              {notificationsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-[998] bg-slate-900/30 backdrop-blur-[2px] sm:hidden"
                    onClick={() => setNotificationsOpen(false)}
                    aria-hidden="true"
                  />
                  <div className="fixed sm:absolute inset-x-3 sm:inset-x-auto sm:right-0 top-16 sm:top-full sm:mt-2 sm:w-88 max-w-sm mx-auto sm:mx-0 bg-white rounded-2xl shadow-2xl border-2 border-slate-300/90 p-3.5 z-[999] text-left ring-1 ring-slate-900/10 max-h-[82vh] overflow-y-auto">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-slate-900 tracking-tight">Notifications</span>
                        <span className="text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full">2 New</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setNotificationsOpen(false)}
                        className="text-slate-400 hover:text-slate-700 text-xs font-bold px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Close notifications"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="mt-2.5 space-y-2.5">
                      {notificationItems.map((n) => (
                        <div
                          key={n.id}
                          className={`p-3 rounded-xl transition border text-left ${
                            n.unread
                              ? 'bg-blue-50/60 border-blue-200/80 shadow-2xs'
                              : 'bg-slate-50/70 border-slate-200/70'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <strong className="text-[12.5px] font-bold text-slate-900 leading-snug break-words">
                              {n.title}
                            </strong>
                            <span className="text-[10px] text-slate-400 shrink-0 font-medium whitespace-nowrap mt-0.5">
                              {n.time}
                            </span>
                          </div>
                          <p className="text-[11.5px] text-slate-600 mt-1 leading-relaxed break-words">
                            {n.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* 4. Desktop User Profile Icon (Shown on Desktop when Logged In, HeyGen Style) */}
            {isLoggedIn && (
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setProfileDropdownOpen((prev) => !prev);
                  setHamburgerDrawerOpen(false);
                  setNotificationsOpen(false);
                }}
                className="hidden lg:flex w-9 h-9 rounded-full border border-[#EAECF0] hover:border-[#16C5EA] ring-2 ring-transparent hover:ring-[#E4F5FA] transition-all overflow-hidden items-center justify-center cursor-pointer shadow-2xs relative shrink-0"
                title="My Profile & Account"
                aria-label="Student Profile"
              >
                {studentAvatar ? (
                  <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-[#E4F5FA] text-[#0891b2] font-bold text-xs">
                    {studentName ? studentName.charAt(0).toUpperCase() : 'S'}
                  </div>
                )}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-white" />
              </button>
            )}

            {/* 5. Free Login Button (When Not Logged In) */}
            {!isLoggedIn && (
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  if (onOpenSignUp) onOpenSignUp();
                  else onOpenLogin?.();
                }}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#7C3AED] active:scale-95 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-xs hover:shadow-md transition-all duration-200 shrink-0"
              >
                <span className="hidden md:inline">Free </span>
                <span>Login / Sign Up</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            )}

            {/* 6. Hamburger Menu Button (Mobile uses original #EEF4FF box, Desktop uses HeyGen dock icon) */}
            {/* Desktop HeyGen Toggle Button (>= 1024px) */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setHamburgerDrawerOpen((prev) => !prev);
                setProfileDropdownOpen(false);
                setNotificationsOpen(false);
              }}
              className="hidden lg:flex w-9 h-9 rounded-xl border border-[#EAECF0] bg-white hover:bg-[#E4F5FA] hover:border-[#16C5EA]/40 text-[#344054] hover:text-[#16C5EA] items-center justify-center transition-all duration-150 cursor-pointer shadow-2xs shrink-0"
              title="Open HeyGen Navigation Panel"
              aria-label="Open Navigation Panel"
            >
              <Menu className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Mobile Original Hamburger Button (< 1024px, 100% untouched) */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setHamburgerDrawerOpen((prev) => !prev);
                setProfileDropdownOpen(false);
                setNotificationsOpen(false);
              }}
              className="lg:hidden w-[42px] h-[42px] rounded-[12px] bg-[#EEF4FF] hover:bg-[#E0ECFF] text-[#10234A] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-105 active:scale-95 shrink-0"
              title="Open Navigation Drawer"
              aria-label="Open Navigation Drawer"
            >
              <Menu className="w-5 h-5 text-[#10234A]" />
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════════════
          NAVIGATION DRAWERS (DESKTOP: HEYGEN DUAL-PANEL DOCK | MOBILE: EXACT ORIGINAL)
      ═══════════════════════════════════════════════════════════════════════════ */}
      {typeof document !== 'undefined' && hamburgerDrawerOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex justify-end items-stretch animate-fadeIn">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-2xs transition-opacity"
            onClick={() => setHamburgerDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* ═════════════════════════════════════════════════════════════════
              A. DESKTOP ONLY: AUTHENTIC HEYGEN DUAL-RAIL FLOATING DOCK (>= lg)
              (Direct 1:1 Match to media_1793463563152_4241070e.png)
          ═════════════════════════════════════════════════════════════════ */}
          <aside
            onClick={(e) => e.stopPropagation()}
            className="hidden lg:flex relative z-10 w-[430px] my-auto mr-6 max-h-[88vh] bg-white shadow-[0_24px_64px_rgba(16,24,40,0.18)] rounded-[28px] border border-[#EAECF0] overflow-hidden text-left animate-slideInRight font-sans select-none"
            role="dialog"
            aria-label="HeyGen Navigation Panel"
          >
            {/* 1. LEFT NARROW ICON RAIL (HeyGen Exact Rail ~74px wide) */}
            <div className="w-[74px] bg-[#FAFBFC] border-r border-[#EAECF0] flex flex-col justify-between items-center py-4 px-2 shrink-0">
              {/* Top: HeyGen-style colorful diamond symbol */}
              <div className="flex flex-col items-center gap-4">
                <div
                  onClick={() => handleDrawerNavigate('dashboard')}
                  className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-500 flex items-center justify-center text-white shadow-xs cursor-pointer hover:scale-105 transition-transform"
                  title="Future IT Home"
                >
                  <Sparkles className="w-5 h-5 fill-white/30 stroke-[2]" />
                </div>

                {/* Vertical Stacked Icon Tiles */}
                <div className="flex flex-col items-center gap-3 pt-2">
                  {/* Home Tile */}
                  <button
                    type="button"
                    onClick={() => handleDrawerNavigate('dashboard')}
                    className={`flex flex-col items-center gap-1 p-1.5 rounded-xl cursor-pointer transition-all ${
                      isItemActive('dashboard') ? 'text-[#0891b2]' : 'text-[#667085] hover:text-[#344054]'
                    }`}
                    title="Dashboard"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isItemActive('dashboard') ? 'bg-[#E4F5FA] text-[#0891b2]' : 'hover:bg-[#F2F4F7]'
                    }`}>
                      <Home className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold">Home</span>
                  </button>

                  {/* Learning Tile (Vibrant Cyan Rounded Square like HeyGen Avatar in screenshot!) */}
                  <button
                    type="button"
                    onClick={() => handleDrawerNavigate('learning')}
                    className="flex flex-col items-center gap-1 p-1.5 rounded-xl cursor-pointer transition-all"
                    title="My Learning"
                  >
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-xs ${
                      isItemActive('learning')
                        ? 'bg-[#00D2FF] text-white shadow-[0_4px_12px_rgba(0,210,255,0.35)]'
                        : 'bg-[#E4F5FA] text-[#0891b2] hover:bg-[#d0f0fa]'
                    }`}>
                      <BookOpen className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className={`text-[10px] font-bold ${isItemActive('learning') ? 'text-[#00B4DB]' : 'text-[#667085]'}`}>
                      Learn
                    </span>
                  </button>

                  {/* Practice Tile */}
                  <button
                    type="button"
                    onClick={() => handleDrawerNavigate('practice')}
                    className={`flex flex-col items-center gap-1 p-1.5 rounded-xl cursor-pointer transition-all ${
                      isItemActive('practice') ? 'text-[#0891b2]' : 'text-[#667085] hover:text-[#344054]'
                    }`}
                    title="DSA Coding Practice"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isItemActive('practice') ? 'bg-[#E4F5FA] text-[#0891b2]' : 'hover:bg-[#F2F4F7]'
                    }`}>
                      <Code2 className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold">Practice</span>
                  </button>

                  {/* Wallet Tile */}
                  <button
                    type="button"
                    onClick={() => handleDrawerNavigate('earning')}
                    className={`flex flex-col items-center gap-1 p-1.5 rounded-xl cursor-pointer transition-all ${
                      isItemActive('earning') ? 'text-[#0891b2]' : 'text-[#667085] hover:text-[#344054]'
                    }`}
                    title="Earning & Wallet"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isItemActive('earning') ? 'bg-[#E4F5FA] text-[#0891b2]' : 'hover:bg-[#F2F4F7]'
                    }`}>
                      <Coins className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold">Wallet</span>
                  </button>
                </div>
              </div>

              {/* Bottom of Rail: Crown + Code Icon + User Photo (Matching HeyGen screenshot bottom rail) */}
              <div className="flex flex-col items-center gap-3 pt-4 border-t border-[#EAECF0]/80 w-full">
                <div className="w-8 h-8 rounded-full border border-cyan-400 p-0.5 flex items-center justify-center text-amber-500 shadow-2xs" title="Super 30 Pro">
                  <Crown className="w-4 h-4" />
                </div>

                {/* User avatar at very bottom */}
                <div
                  onClick={() => {
                    setProfileDropdownOpen(true);
                    setHamburgerDrawerOpen(false);
                  }}
                  className="relative cursor-pointer hover:scale-105 transition-transform"
                  title="View Profile"
                >
                  <div className="w-9 h-9 rounded-full border border-[#EAECF0] overflow-hidden bg-[#E4F5FA] flex items-center justify-center">
                    {studentAvatar ? (
                      <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#0891b2] font-bold text-xs">{studentName ? studentName.charAt(0) : 'S'}</span>
                    )}
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-white" />
                </div>
              </div>
            </div>

            {/* 2. RIGHT MAIN HEYGEN PANEL (HeyGen Pill Items & Manage Header) */}
            <div className="flex-1 bg-white flex flex-col justify-between p-4 overflow-y-auto no-scrollbar">
              <div>
                {/* Header: Manage & Quick Navigation + Dock Icon [ | ] + Close */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#EAECF0]">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-bold text-[#101828]">
                      Future IT Modules
                    </h3>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* HeyGen Dock Icon Button */}
                    <button
                      type="button"
                      onClick={() => setHamburgerDrawerOpen(false)}
                      className="w-7 h-7 rounded-lg text-[#667085] hover:text-[#344054] hover:bg-[#F2F4F7] flex items-center justify-center transition-colors"
                      title="Dock Panel"
                    >
                      <PanelLeftClose className="w-4 h-4 stroke-[1.8]" />
                    </button>
                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => setHamburgerDrawerOpen(false)}
                      className="w-7 h-7 rounded-lg text-[#667085] hover:text-[#344054] hover:bg-[#F2F4F7] flex items-center justify-center transition-colors"
                      title="Close"
                    >
                      <X className="w-4 h-4 stroke-[2]" />
                    </button>
                  </div>
                </div>

                {/* Section Header */}
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#98A2B3] px-2 mb-1.5">
                  Navigation
                </span>

                {/* HeyGen Wide Pills List */}
                <div className="space-y-1">
                  {heygenDesktopItems.map((item) => {
                    const ItemIcon = item.icon;
                    const active = isItemActive(item.id);

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleDrawerNavigate(item.id)}
                        className={`w-full rounded-2xl py-2 px-3 flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                          active
                            ? 'bg-[#EBF8FE] text-[#101828] font-semibold border border-[#16C5EA]/25 shadow-2xs'
                            : 'text-[#344054] hover:bg-[#FAFBFC] hover:text-[#101828] border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <ItemIcon
                            className={`w-4.5 h-4.5 shrink-0 stroke-[1.8] transition-colors ${
                              active ? 'text-[#00D2FF]' : 'text-[#667085] group-hover:text-[#344054]'
                            }`}
                          />
                          <span
                            className={`text-[13.5px] truncate ${
                              active ? 'font-bold text-[#101828]' : 'font-medium text-[#344054] group-hover:text-[#101828]'
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            active
                              ? 'text-[#00D2FF]'
                              : 'text-[#D0D5DD] group-hover:text-[#667085] group-hover:translate-x-0.5'
                          }`}
                        />
                      </button>
                    );
                  })}

                  {/* Help & Support (WhatsApp) */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setHamburgerDrawerOpen(false);
                      if (onOpenHelp) onOpenHelp();
                      else window.open(WA_SUPPORT_URL, '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full rounded-2xl py-2 px-3 flex items-center justify-between text-[#344054] hover:bg-[#FAFBFC] hover:text-[#101828] border border-transparent transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Headphones className="w-4.5 h-4.5 text-[#10B981] stroke-[1.8] shrink-0" />
                      <span className="text-[13.5px] font-medium text-[#344054] group-hover:text-[#101828]">
                        Help &amp; Support
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded-full">
                      WhatsApp
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom: Sign Out Action */}
              <div className="pt-3 mt-3 border-t border-[#EAECF0]">
                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={handleSignOutAction}
                    className="w-full h-9.5 rounded-xl bg-[#FEF3F2] hover:bg-[#FEE4E2] border border-[#FECDCA] px-3.5 flex items-center justify-between text-[#D92D20] font-semibold text-xs transition-all active:scale-[0.98] cursor-pointer shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
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
            </div>
          </aside>

          {/* ═════════════════════════════════════════════════════════════════
              B. MOBILE ONLY: SLEEK HEYGEN DUAL-RAIL NAVIGATION DOCK (< lg)
              (Mobile-friendly 1:1 match to Desktop HeyGen Navigation Dock)
          ═════════════════════════════════════════════════════════════════ */}
          <aside
            onClick={(e) => e.stopPropagation()}
            className="lg:hidden relative z-10 w-[92vw] max-w-[365px] h-full bg-white shadow-[-16px_0_40px_rgba(15,23,42,0.18)] rounded-l-[28px] border-l border-slate-100 flex overflow-hidden text-left animate-slideInRight font-sans select-none"
            role="dialog"
            aria-label="Navigation Drawer"
          >
            {/* 1. LEFT NARROW ICON RAIL (HeyGen Mobile Rail ~62px wide) */}
            <div className="w-[62px] bg-[#FAFBFC] border-r border-[#EAECF0] flex flex-col justify-between items-center py-3.5 px-1 shrink-0">
              {/* Top: Colorful diamond symbol */}
              <div className="flex flex-col items-center gap-3">
                <div
                  onClick={() => handleDrawerNavigate('dashboard')}
                  className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-500 flex items-center justify-center text-white shadow-xs cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                  title="Future IT Home"
                >
                  <Sparkles className="w-4.5 h-4.5 fill-white/30 stroke-[2]" />
                </div>

                {/* Vertical Stacked Icon Tiles */}
                <div className="flex flex-col items-center gap-2.5 pt-1">
                  {/* Home Tile */}
                  <button
                    type="button"
                    onClick={() => handleDrawerNavigate('dashboard')}
                    className={`flex flex-col items-center gap-0.5 p-1 rounded-xl cursor-pointer transition-all ${
                      isItemActive('dashboard') ? 'text-[#0891b2]' : 'text-[#667085] hover:text-[#344054]'
                    }`}
                    title="Dashboard"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isItemActive('dashboard') ? 'bg-[#E4F5FA] text-[#0891b2]' : 'hover:bg-[#F2F4F7]'
                    }`}>
                      <Home className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[9.5px] font-bold">Home</span>
                  </button>

                  {/* Learning Tile */}
                  <button
                    type="button"
                    onClick={() => handleDrawerNavigate('learning')}
                    className="flex flex-col items-center gap-0.5 p-1 rounded-xl cursor-pointer transition-all"
                    title="My Learning"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all shadow-xs ${
                      isItemActive('learning')
                        ? 'bg-[#00D2FF] text-white shadow-[0_4px_12px_rgba(0,210,255,0.35)]'
                        : 'bg-[#E4F5FA] text-[#0891b2] hover:bg-[#d0f0fa]'
                    }`}>
                      <BookOpen className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className={`text-[9.5px] font-bold ${isItemActive('learning') ? 'text-[#00B4DB]' : 'text-[#667085]'}`}>
                      Learn
                    </span>
                  </button>

                  {/* Practice Tile */}
                  <button
                    type="button"
                    onClick={() => handleDrawerNavigate('practice')}
                    className={`flex flex-col items-center gap-0.5 p-1 rounded-xl cursor-pointer transition-all ${
                      isItemActive('practice') ? 'text-[#0891b2]' : 'text-[#667085] hover:text-[#344054]'
                    }`}
                    title="DSA Coding Practice"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isItemActive('practice') ? 'bg-[#E4F5FA] text-[#0891b2]' : 'hover:bg-[#F2F4F7]'
                    }`}>
                      <Code2 className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[9.5px] font-bold">Practice</span>
                  </button>

                  {/* Wallet Tile */}
                  <button
                    type="button"
                    onClick={() => handleDrawerNavigate('earning')}
                    className={`flex flex-col items-center gap-0.5 p-1 rounded-xl cursor-pointer transition-all ${
                      isItemActive('earning') ? 'text-[#0891b2]' : 'text-[#667085] hover:text-[#344054]'
                    }`}
                    title="Earning & Wallet"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isItemActive('earning') ? 'bg-[#E4F5FA] text-[#0891b2]' : 'hover:bg-[#F2F4F7]'
                    }`}>
                      <Coins className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[9.5px] font-bold">Wallet</span>
                  </button>
                </div>
              </div>

              {/* Bottom of Rail: Crown + Student Avatar */}
              <div className="flex flex-col items-center gap-2.5 pt-3 border-t border-[#EAECF0]/80 w-full">
                <div className="w-7 h-7 rounded-full border border-cyan-400 p-0.5 flex items-center justify-center text-amber-500 shadow-2xs" title="Super 30 Pro">
                  <Crown className="w-3.5 h-3.5" />
                </div>

                <div
                  onClick={() => {
                    if (isLoggedIn) {
                      soundEffects.playClick();
                      setEditNameInput(studentName);
                      setEditPhoneInput(studentPhone);
                      setEditEmailInput(studentEmail);
                      setEditProfileModalOpen(true);
                      setHamburgerDrawerOpen(false);
                    } else {
                      soundEffects.playClick();
                      setHamburgerDrawerOpen(false);
                      if (onOpenSignUp) onOpenSignUp();
                      else onOpenLogin?.();
                    }
                  }}
                  className="relative cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                  title={isLoggedIn ? "Edit Profile" : "Login / Sign Up"}
                >
                  <div className="w-8 h-8 rounded-full border border-[#EAECF0] overflow-hidden bg-[#E4F5FA] flex items-center justify-center">
                    {studentAvatar ? (
                      <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#0891b2] font-bold text-xs">{studentName ? studentName.charAt(0).toUpperCase() : 'S'}</span>
                    )}
                  </div>
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#10B981] border border-white" />
                </div>
              </div>
            </div>

            {/* 2. RIGHT MAIN PANEL (HeyGen Pill Items & Actions) */}
            <div className="flex-1 bg-white flex flex-col justify-between p-3 min-w-0 overflow-y-auto no-scrollbar">
              <div className="min-w-0">
                {/* Header: Title + Close Button */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#EAECF0]">
                  <h3 className="text-[13.5px] font-bold text-[#101828] truncate">
                    Future IT Modules
                  </h3>

                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setHamburgerDrawerOpen(false);
                    }}
                    className="w-7 h-7 rounded-lg text-[#667085] hover:text-[#344054] hover:bg-[#F2F4F7] active:scale-90 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close navigation"
                  >
                    <X className="w-4 h-4 stroke-[2]" />
                  </button>
                </div>

                {/* If Logged In: Student Badge with Edit Button */}
                {isLoggedIn && (
                  <div className="mb-2 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-100/70 flex items-center justify-between gap-1.5">
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-slate-800 truncate">
                        Hi, {(studentName || 'Learner').trim().split(' ')[0]} 👋
                      </p>
                      <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-700 leading-none">
                        <ShieldCheck className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                        <span>{(typeof window !== 'undefined' ? localStorage.getItem('futureai_user_role') : null) || 'Student'}</span>
                      </span>
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
                      className="px-2 py-0.5 rounded-lg text-[9.5px] font-bold bg-white hover:bg-blue-50 text-[#0066ff] border border-blue-200/80 shadow-2xs transition active:scale-95 cursor-pointer shrink-0"
                    >
                      Edit
                    </button>
                  </div>
                )}

                {/* Section Header */}
                <span className="block text-[9.5px] font-bold uppercase tracking-wider text-[#98A2B3] px-1 mb-1">
                  Navigation
                </span>

                {/* HeyGen Wide Pills List */}
                <div className="space-y-1">
                  {heygenDesktopItems.map((item) => {
                    const ItemIcon = item.icon;
                    const active = isItemActive(item.id);

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleDrawerNavigate(item.id)}
                        className={`w-full rounded-xl py-1.5 px-2.5 flex items-center justify-between transition-all duration-150 cursor-pointer group ${
                          active
                            ? 'bg-[#EBF8FE] text-[#101828] font-semibold border border-[#16C5EA]/25 shadow-2xs'
                            : 'text-[#344054] hover:bg-[#FAFBFC] hover:text-[#101828] border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <ItemIcon
                            className={`w-4 h-4 shrink-0 stroke-[1.8] transition-colors ${
                              active ? 'text-[#00D2FF]' : 'text-[#667085] group-hover:text-[#344054]'
                            }`}
                          />
                          <span
                            className={`text-[12.5px] truncate ${
                              active ? 'font-bold text-[#101828]' : 'font-medium text-[#344054] group-hover:text-[#101828]'
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            active
                              ? 'text-[#00D2FF]'
                              : 'text-[#D0D5DD] group-hover:text-[#667085] group-hover:translate-x-0.5'
                          }`}
                        />
                      </button>
                    );
                  })}

                  {/* ATS Resume Analyser Pill */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setHamburgerDrawerOpen(false);
                      if (onOpenAtsResume) onOpenAtsResume();
                      else if (typeof window !== 'undefined') window.location.hash = '#ats';
                    }}
                    className="w-full rounded-xl py-1.5 px-2.5 flex items-center justify-between text-[#344054] hover:bg-[#FAFBFC] hover:text-[#101828] border border-transparent transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileCheck2 className="w-4 h-4 text-[#16a34a] stroke-[1.8] shrink-0" />
                      <span className="text-[12.5px] font-medium text-[#344054] group-hover:text-[#101828] truncate">
                        ATS Resume Analyser
                      </span>
                    </div>
                    <span className="text-[9px] font-semibold text-[#16a34a] bg-[#DCFCE7] border border-[#BBF7D0] px-1.5 py-0.5 rounded-full shrink-0">
                      AI Tool
                    </span>
                  </button>

                  {/* Help & Support (WhatsApp) */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setHamburgerDrawerOpen(false);
                      if (onOpenHelp) onOpenHelp();
                      else window.open(WA_SUPPORT_URL, '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full rounded-xl py-1.5 px-2.5 flex items-center justify-between text-[#344054] hover:bg-[#FAFBFC] hover:text-[#101828] border border-transparent transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Headphones className="w-4 h-4 text-[#10B981] stroke-[1.8] shrink-0" />
                      <span className="text-[12.5px] font-medium text-[#344054] group-hover:text-[#101828] truncate">
                        Help &amp; Support
                      </span>
                    </div>
                    <span className="text-[9.5px] font-semibold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded-full shrink-0">
                      WhatsApp
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom: Sign Out Action / Login Button */}
              <div className="pt-2 mt-2 border-t border-[#EAECF0] shrink-0">
                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={handleSignOutAction}
                    className="w-full h-9 rounded-xl bg-[#FEF3F2] hover:bg-[#FEE4E2] border border-[#FECDCA] px-3 flex items-center justify-between text-[#D92D20] font-semibold text-xs transition-all active:scale-[0.98] cursor-pointer shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <LogOut className="w-3.5 h-3.5 text-[#D92D20] stroke-[1.8] shrink-0" />
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
                    className="w-full h-9 rounded-xl bg-[#16C5EA] hover:bg-[#0ea5e9] text-white font-semibold text-xs px-3 flex items-center justify-between shadow-xs active:scale-[0.98] transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 stroke-[2] text-white shrink-0" />
                      <span>Login / Sign Up</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2] text-white" />
                  </button>
                )}
              </div>
            </div>
          </aside>
        </div>,
        document.body
      )}

      {/* Hidden File Input for Change Profile Picture */}
      <input
        ref={avatarInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleAvatarFileChange}
        aria-label="Upload Profile Picture"
      />

      {/* ─── HEYGEN-INSPIRED COMPACT MY PROFILE PANEL ─── */}
      {typeof document !== 'undefined' && profileDropdownOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex justify-end items-start animate-fadeIn">
          <div
            className="fixed inset-0 bg-[#0c111d]/25 backdrop-blur-2xs transition-opacity"
            onClick={() => setProfileDropdownOpen(false)}
            aria-hidden="true"
          />

          <aside
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-[86vw] max-w-[320px] h-auto self-start bg-white shadow-[0_16px_40px_rgba(16,24,40,0.14)] rounded-2xl border border-[#EAECF0] m-3 sm:mt-18 sm:mr-6 flex flex-col overflow-hidden text-left animate-slideInRight font-sans"
            role="dialog"
            aria-label="My Profile"
          >
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

            <div className="p-4 space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full border border-[#EAECF0] overflow-hidden bg-[#E4F5FA] flex items-center justify-center shadow-2xs">
                    {studentAvatar ? (
                      <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#0891b2] font-bold text-lg">
                        {studentName ? studentName.charAt(0).toUpperCase() : 'S'}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      avatarInputRef.current?.click();
                    }}
                    className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#16C5EA] hover:bg-[#0ea5e9] text-white flex items-center justify-center shadow-xs border-2 border-white cursor-pointer"
                    title="Change Profile Picture"
                    aria-label="Change Profile Picture"
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
                  <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded-md text-[10px] font-semibold bg-[#E4F5FA] text-[#0891b2] border border-[#16C5EA]/20">
                    Student
                  </span>
                </div>
              </div>

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

              {/* Quick Profile Actions: Change Profile Picture & Edit Profile */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    avatarInputRef.current?.click();
                  }}
                  className="py-2 px-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#EBF8FE] border border-[#EAECF0] hover:border-[#16C5EA]/40 text-[#344054] hover:text-[#0891b2] font-semibold text-[11.5px] flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-[#16C5EA] shrink-0" />
                  <span className="truncate">Change Photo</span>
                </button>
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
                  className="py-2 px-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#EBF8FE] border border-[#EAECF0] hover:border-[#16C5EA]/40 text-[#344054] hover:text-[#0891b2] font-semibold text-[11.5px] flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Pencil className="w-3.5 h-3.5 text-[#16C5EA] shrink-0" />
                  <span className="truncate">Edit Profile</span>
                </button>
              </div>

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

      {/* ─── REAL EDIT PROFILE MODAL ─── */}
      {editProfileModalOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#0c111d]/40 backdrop-blur-2xs animate-fadeIn font-sans"
          onClick={() => setEditProfileModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
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
              <div className="flex items-center gap-3 pb-2">
                <div className="w-12 h-12 rounded-full border border-[#EAECF0] overflow-hidden bg-[#E4F5FA] flex items-center justify-center shrink-0">
                  {studentAvatar ? (
                    <img src={studentAvatar} alt={studentName} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[#0891b2] font-bold text-lg">
                      {studentName ? studentName.charAt(0).toUpperCase() : 'S'}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => avatarInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-xl border border-[#EAECF0] hover:border-[#16C5EA] bg-[#FAFBFC] hover:bg-[#EBF8FE] text-xs font-semibold text-[#344054] hover:text-[#0891b2] flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-[#16C5EA]" />
                  <span>Change Profile Picture</span>
                </button>
              </div>

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
        <div
          className="fixed inset-0 z-[10000] flex items-start justify-center p-4 sm:p-6 pt-20 bg-[#0c111d]/40 backdrop-blur-2xs animate-fadeIn font-sans"
          onClick={() => setSearchModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl border border-[#EAECF0] max-w-xl w-full p-4 sm:p-5 shadow-2xl relative text-left"
          >
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
                      <strong className="text-xs font-bold text-[#344054] group-hover:text-[#0891b2] block">{item.title}</strong>
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
