import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './LearnerDashboard.css';
import { 
  Home, 
  LayoutDashboard,
  BookOpen, 
  FileCheck, 
  Award, 
  Briefcase, 
  Users, 
  FileText, 
  HelpCircle, 
  Search, 
  Bell, 
  ChevronDown, 
  Bot, 
  Flame, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Target, 
  Building2, 
  Sparkles,
  BarChart3,
  Dumbbell,
  Check,
  LogOut,
  ChevronRight,
  Database,
  Lock,
  Unlock,
  Send,
  Calendar,
  Layers,
  Clock,
  IndianRupee,
  ShieldCheck,
  Zap,
  TrendingUp,
  SlidersHorizontal,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Gift,
  Wallet,
  FolderKanban,
  BarChart2,
  Crown,
  Gamepad2,
  GraduationCap,
  Coins,
  Gem,
  X,
  Smartphone,
  Monitor
} from 'lucide-react';
import { FutureLogo } from './FutureLogo';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import { PayToUnlockModal } from './PayToUnlockModal';
import { PythonChapterView } from './PythonChapterView';
import { SqlChapterView } from './SqlChapterView';
import { ExcelChapterView } from './ExcelChapterView';
import { PowerBiChapterView } from './PowerBiChapterView';
import { StatsChapterView } from './StatsChapterView';
import { GenAiChapterView } from './GenAiChapterView';
import { PythonTopicWorkspace, WorkspaceStepId } from './PythonTopicWorkspace';
import { PowerGreenAI } from '../../services/powerGreenAIService';
import { ReferralDashboard } from './referral/ReferralDashboard';
import { GlobalSidebar } from './navigation/GlobalSidebar';
import { GlobalTopNav } from './navigation/GlobalTopNav';
import './navigation/GlobalNavigation.css';
import { AffiliateEarningsHub } from './AffiliateEarningsHub';
import { GameArenaHub } from './GameArenaHub';
import { LearnerHomeHub } from './LearnerHomeHub';
import { StudentCoursesDashboard } from './StudentCoursesDashboard';
import { PythonIntroGameWorkspace } from './PythonIntroGameWorkspace';
import { LearningModulesProgressModal } from './LearningModulesProgressModal';
import { LiquidFloatingNavBar } from './LiquidFloatingNavBar';
import { getLearnerTelemetry } from '../../services/realAuthService';
import { MobileTopBar } from './mobile/MobileTopBar';
import { MobileBottomNav, MobileTab } from './mobile/MobileBottomNav';
import { MobileProfileSheet } from './mobile/MobileProfileSheet';
import { MobileDashboardHome } from './mobile/MobileDashboardHome';
import { MobilePlacementHub } from './mobile/MobilePlacementHub';
import { MobilePythonChapterView } from './mobile/MobilePythonChapterView';
import { MobileTopicWorkspace } from './mobile/MobileTopicWorkspace';
import { MobileSqlChapterView } from './mobile/MobileSqlChapterView';
import { MobileExcelChapterView } from './mobile/MobileExcelChapterView';
import { MobileGameArenaHub } from './mobile/MobileGameArenaHub';
import { MobileDataAnalystHub } from './mobile/MobileDataAnalystHub';
import { FutureAuthModal } from './FutureAuthModal';
import { WalletWithdrawModal } from './WalletWithdrawModal';
import { CurriculumModal } from './CurriculumModal';
import { CourseDetailPopupModal } from './CourseDetailPopupModal';

// =========================================================================
// 10 AUTHENTIC 3D-STYLE VECTOR ICONS MATCHING media_1790589591068.jpg
// =========================================================================

// 1. Python 3D
const Python3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="pyBlue" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="pyYellow" x1="24" y1="24" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
      <filter id="shadowPy" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0284c7" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#shadowPy)">
      <path
        d="M23.8 4C17.3 4 17.5 6.8 17.5 6.8L17.5 10.4H24.3V11.5H10.5C10.5 11.5 4 11.1 4 18.9C4 26.7 9.7 26.3 9.7 26.3H12.9V22.5C12.9 17.7 16.9 17.7 16.9 17.7H24.1V16.7C24.1 16.7 24.3 9.5 17.1 9.5H23.8V4Z"
        fill="url(#pyBlue)"
      />
      <circle cx="14" cy="8.5" r="1.6" fill="#ffffff" />
      <path
        d="M24.2 44C30.7 44 30.5 41.2 30.5 41.2L30.5 37.6H23.7V36.5H37.5C37.5 36.5 44 36.9 44 29.1C44 21.3 38.3 21.7 38.3 21.7H35.1V25.5C35.1 30.3 31.1 30.3 31.1 30.3H23.9V31.3C23.9 31.3 23.7 38.5 30.9 38.5H24.2V44Z"
        fill="url(#pyYellow)"
      />
      <circle cx="34" cy="39.5" r="1.6" fill="#ffffff" />
    </g>
  </svg>
);

// 2. SQL & Databases 3D (Purple cylinders with SQL badge)
const Sql3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="sqlPurple" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#6b21a8" />
      </linearGradient>
      <linearGradient id="sqlTop" x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
      <linearGradient id="sqlBadge" x1="0" y1="0" x2="30" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    {/* Base Disks */}
    <ellipse cx="24" cy="38" rx="16" ry="6" fill="#581c87" />
    <path d="M8 26C8 26 8 38 8 38C8 41.3 15.2 44 24 44C32.8 44 40 41.3 40 38V26C40 29.3 32.8 32 24 32C15.2 32 8 29.3 8 26Z" fill="url(#sqlPurple)" />
    
    <ellipse cx="24" cy="24" rx="16" ry="6" fill="#7e22ce" />
    <path d="M8 12C8 12 8 24 8 24C8 27.3 15.2 30 24 30C32.8 30 40 27.3 40 24V12C40 15.3 32.8 18 24 18C15.2 18 8 15.3 8 12Z" fill="url(#sqlPurple)" />
    
    <ellipse cx="24" cy="10" rx="16" ry="6" fill="url(#sqlTop)" />
    
    {/* SQL Badge */}
    <rect x="14" y="24" width="20" height="12" rx="4" fill="url(#sqlBadge)" />
    <text x="24" y="33" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="900" fontFamily="sans-serif">SQL</text>
  </svg>
);

// 3. Advanced Excel 3D (Green Isometric Cube with X)
const Excel3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="xlGreenTop" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id="xlGreenSide" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>
    {/* 3D Isometric Cube */}
    <rect x="6" y="8" width="36" height="32" rx="8" fill="url(#xlGreenTop)" />
    <path d="M6 24H42V32C42 36.4 38.4 40 34 40H14C9.6 40 6 36.4 6 32V24Z" fill="url(#xlGreenSide)" />
    {/* Grid Lines */}
    <line x1="20" y1="8" x2="20" y2="40" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.6" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.6" />
    {/* Big X Letter in white badge */}
    <rect x="8" y="12" width="16" height="16" rx="4" fill="#047857" />
    <path d="M12 16L20 24M20 16L12 24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 4. Power BI & Data Visualization 3D (Golden rising bars)
const PowerBi3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="pbiGold" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    {/* Bar 1 */}
    <rect x="8" y="28" width="7" height="14" rx="2" fill="url(#pbiGold)" />
    {/* Bar 2 */}
    <rect x="17" y="20" width="7" height="22" rx="2" fill="url(#pbiGold)" />
    {/* Bar 3 */}
    <rect x="26" y="13" width="7" height="29" rx="2" fill="url(#pbiGold)" />
    {/* Bar 4 */}
    <rect x="35" y="6" width="7" height="36" rx="2" fill="url(#pbiGold)" />
    {/* Glow Highlight */}
    <path d="M8 29L42 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
  </svg>
);

// 5. Statistics for Data Analytics 3D (Colorful gradient bars)
const Statistics3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="statBar1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
      <linearGradient id="statBar2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#db2777" />
      </linearGradient>
      <linearGradient id="statBar3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <rect x="8" y="22" width="8" height="20" rx="3" fill="url(#statBar1)" />
    <rect x="19" y="10" width="8" height="32" rx="3" fill="url(#statBar2)" />
    <rect x="30" y="18" width="8" height="24" rx="3" fill="url(#statBar3)" />
    {/* Smooth Gaussian Bell Curve */}
    <path d="M6 38C12 36 17 8 23 8C29 8 34 34 42 38" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 6. GenAI for Data Analytics 3D (Microchip with AI core)
const GenAi3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="chipBg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    {/* Chip Body */}
    <rect x="10" y="10" width="28" height="28" rx="7" fill="url(#chipBg)" stroke="#38bdf8" strokeWidth="1.5" />
    {/* Pins */}
    <line x1="16" y1="5" x2="16" y2="10" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="5" x2="24" y2="10" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="5" x2="32" y2="10" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="38" x2="16" y2="43" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="38" x2="24" y2="43" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="38" x2="32" y2="43" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    {/* Glowing AI Core Text */}
    <text x="24" y="28" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif">AI</text>
  </svg>
);

// 7. Data Cleaning & Preparation 3D (Database with broom)
const DataCleaning3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <ellipse cx="20" cy="34" rx="13" ry="5" fill="#0369a1" />
    <path d="M7 22V34C7 36.8 12.8 39 20 39C27.2 39 33 36.8 33 34V22C33 24.8 27.2 27 20 27C12.8 27 7 24.8 7 22Z" fill="#0284c7" />
    <ellipse cx="20" cy="20" rx="13" ry="5" fill="#38bdf8" />
    {/* Sweeping Broom */}
    <g transform="rotate(-30 32 20)">
      <rect x="30" y="6" width="3" height="20" rx="1.5" fill="#78350f" />
      <path d="M26 26C26 26 28 34 31.5 34C35 34 37 26 37 26H26Z" fill="#f59e0b" />
    </g>
    {/* Clean sparkles */}
    <path d="M38 12L39 14L41 15L39 16L38 18L37 16L35 15L37 14Z" fill="#fbbf24" />
  </svg>
);

// 8. Business & Product Analytics 3D (Red & White Dartboard Target)
const ProductAnalytics3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="18" fill="#ef4444" />
    <circle cx="24" cy="24" r="13" fill="#ffffff" />
    <circle cx="24" cy="24" r="8" fill="#ef4444" />
    <circle cx="24" cy="24" r="3" fill="#ffffff" />
    {/* Dart arrow */}
    <line x1="36" y1="8" x2="25" y2="23" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
    <polygon points="36,8 39,5 41,11" fill="#38bdf8" />
  </svg>
);

// 9. AI Interview & Career Preparation 3D (Speech bubbles)
const AiInterview3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="bubbleBlue" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="bubblePurple" x1="16" y1="16" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <rect x="6" y="8" width="22" height="17" rx="6" fill="url(#bubbleBlue)" />
    <circle cx="12" cy="16.5" r="1.5" fill="#ffffff" />
    <circle cx="17" cy="16.5" r="1.5" fill="#ffffff" />
    <circle cx="22" cy="16.5" r="1.5" fill="#ffffff" />
    
    <rect x="18" y="20" width="24" height="18" rx="6" fill="url(#bubblePurple)" />
    <circle cx="25" cy="29" r="1.5" fill="#ffffff" />
    <circle cx="30" cy="29" r="1.5" fill="#ffffff" />
    <circle cx="35" cy="29" r="1.5" fill="#ffffff" />
  </svg>
);

// 10. Final Capstone Project 3D (Golden Champion Trophy)
const Capstone3DIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="trophyGold" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
    {/* Base Stand */}
    <rect x="16" y="38" width="16" height="4" rx="1.5" fill="#78350f" />
    <rect x="20" y="32" width="8" height="6" fill="#b45309" />
    {/* Cup Body */}
    <path d="M14 10H34V22C34 27.5 29.5 32 24 32C18.5 32 14 27.5 14 22V10Z" fill="url(#trophyGold)" />
    {/* Handles */}
    <path d="M14 13H10C8.3 13 7 14.3 7 16V18C7 20.8 9.2 23 12 23H14" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M34 13H38C39.7 13 41 14.3 41 16V18C41 20.8 38.8 23 36 23H34" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
    {/* Star inside cup */}
    <path d="M24 16L25.5 19.5L29 20L26.5 22.5L27 26L24 24.2L21 26L21.5 22.5L19 20L22.5 19.5Z" fill="#ffffff" />
  </svg>
);

// =========================================================================
// MAIN COMPONENT
// =========================================================================

interface LearnerDashboardProps {
  userName?: string;
  onLogout?: () => void;
  onOpenAdvisor?: () => void;
  onLoginSuccess?: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
}

export const LearnerDashboard: React.FC<LearnerDashboardProps> = ({
  userName = 'Subodh Kumar',
  onLogout,
  onOpenAdvisor,
  onLoginSuccess,
}) => {
  const { playHover, playClick, playCinema } = useThemeAccent();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'learning' | 'assessments' | 'certificates' | 'placement' | 'community' | 'resources'>('dashboard');
  const [moduleFilter, setModuleFilter] = useState<'all' | 'in-progress' | 'not-started' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [curriculumModalOpen, setCurriculumModalOpen] = useState(false);
  const [selectedDetailCourseId, setSelectedDetailCourseId] = useState<string | null>(null);

  const handleOpenCourseDetail = (courseIdOrTitle: string) => {
    playClick();
    const t = (courseIdOrTitle || '').toLowerCase();
    let resolvedId = 'react-frontend-dev';
    if (t.includes('react') || t.includes('front')) resolvedId = 'react-frontend-dev';
    else if (t.includes('data analyst') || t.includes('analyst')) resolvedId = 'data-analyst-genai';
    else if (t.includes('python') || t.includes('dsa')) resolvedId = 'python-dsa';
    else if (t.includes('sql') || t.includes('database')) resolvedId = 'sql-databases';
    else if (t.includes('power') || t.includes('bi')) resolvedId = 'powerbi-analytics';
    else if (t.includes('data science') || t.includes('agent')) resolvedId = 'data-science-agentic-ai';
    else if (t.includes('ml') || t.includes('machine')) resolvedId = 'ml-engineering';
    else if (t.includes('full stack') || t.includes('web')) resolvedId = 'full-stack-web-dev';
    else if (t.includes('ui') || t.includes('ux') || t.includes('figma')) resolvedId = 'ui-ux-design-ai';
    else if (t.includes('office') || t.includes('copilot') || t.includes('msoffice')) resolvedId = 'msoffice-365-copilot';
    else if (t.includes('career') || t.includes('accelerator')) resolvedId = 'ai-career-accelerator';
    else if (t.includes('sprint') || t.includes('30 day') || t.includes('techies')) resolvedId = 'ai-for-techies-30days';
    setSelectedDetailCourseId(resolvedId);
  };
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [currentUserName, setCurrentUserName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_name') || userName || 'Learner';
    }
    return userName || 'Learner';
  });

  useEffect(() => {
    if (userName && userName !== 'Learner') {
      setCurrentUserName(userName);
    }
  }, [userName]);

  const handleAuthSuccess = (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => {
    setCurrentUserName(name);
    setTelemetry(getLearnerTelemetry());
    onLoginSuccess?.(name, email, avatar, role);
  };

  // Check if user specifically requested mobile size testing link (?mobile=true, #mobile=true, etc.)
  const isMobileSizeTesting = (): boolean => {
    if (typeof window === 'undefined') return false;
    const searchStr = (window.location.search || '').toLowerCase();
    const hashStr = (window.location.hash || '').toLowerCase();
    return (
      searchStr.includes('mobile=true') ||
      searchStr.includes('mode=mobile') ||
      searchStr.includes('mobile=1') ||
      hashStr.includes('mobile=true') ||
      hashStr.includes('mode=mobile') ||
      hashStr.includes('mobile=1')
    );
  };
  const [mobileTestingFrame, setMobileTestingFrame] = useState<boolean>(() => isMobileSizeTesting());

  const isMobileViewport = (): boolean => {
    if (typeof window === 'undefined') return false;
    return (
      window.innerWidth < 768 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  };
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(() => isMobileViewport());

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(isMobileViewport());
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleCheckMobileParam = () => {
      if (isMobileSizeTesting()) {
        setMobileTestingFrame(true);
      }
    };
    window.addEventListener('hashchange', handleCheckMobileParam);
    window.addEventListener('popstate', handleCheckMobileParam);
    return () => {
      window.removeEventListener('hashchange', handleCheckMobileParam);
      window.removeEventListener('popstate', handleCheckMobileParam);
    };
  }, []);


  const [dockTab, setDockTab] = useState<'home' | 'game' | 'income' | 'referral' | 'wallet' | 'withdraw' | 'placement'>(() => {
    if (typeof window !== 'undefined') {
      const h = window.location.hash;
      if (h === '#game' || h === '#games' || h === '#arena' || h === '#gamearena') return 'game';
      if (h === '#income' || h === '#earnings' || h === '#myearnings' || h === '#myearning' || h === '#earning') return 'income';
      if (h === '#placement' || h === '#jobs' || h === '#placements') return 'placement';
      if (h === '#referral') return 'referral';
      if (h === '#wallet') return 'wallet';
      if (h === '#withdraw') return 'withdraw';
    }
    return 'home';
  });
  const [copiedLink, setCopiedLink] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('1000');
  const [withdrawSuccess, setWithdrawSuccess] = useState<string | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileProfileSheetOpen, setMobileProfileSheetOpen] = useState(false);

  // Live Learner Telemetry (Coins, Gems, Completed Topics) starting at 0
  const [telemetry, setTelemetry] = useState(getLearnerTelemetry);

  useEffect(() => {
    const handleUpdate = () => {
      setTelemetry(getLearnerTelemetry());
    };
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('focus', handleUpdate);
    const interval = setInterval(handleUpdate, 2500);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('focus', handleUpdate);
      clearInterval(interval);
    };
  }, []);

  // Student Enrollment State:
  // "koi bhi new studend join krega to uska sab kuch 0 se start hoga and abhi sirf python unlock hoga baaki sab lock hoga click krne pr 999 wala page aa jayega"
  const [isNewStudentMode, setIsNewStudentMode] = useState<boolean>(true);
  const [unlockModalOpen, setUnlockModalOpen] = useState(false);
  const [selectedLockedModule, setSelectedLockedModule] = useState<string>('SQL & Databases');

  // Placement / Internship / Certificate Lock:
  // Placement is now unlocked as requested by user ("placment wala unlock kro")
  // Internship & Certificate remain locked until all learning modules are completed.
  const [isPlacementLocked, setIsPlacementLocked] = useState<boolean>(false);
  const [placementLockOpen, setPlacementLockOpen] = useState(false);
  const [lockedSectionTarget, setLockedSectionTarget] = useState<string>('Internship');

  // Single guard: any route into Placement (dock click, #placement hash, internal links)
  // is intercepted → user stays on Home and sees the "Complete modules first" popup.
  useLayoutEffect(() => {
    if (dockTab === 'placement' && isPlacementLocked) {
      setDockTab('home');
      setPlacementLockOpen(true);
      if (typeof window !== 'undefined' && window.location.hash !== '#dashboard') {
        window.history.replaceState(null, '', '#dashboard');
      }
    }
  }, [dockTab, isPlacementLocked]);

  const goToLearningModules = () => {
    setPlacementLockOpen(false);
    setSelectedModuleView(null);
    setActiveTopicWs(null);
    setDockTab('home');
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', '#dashboard');
      setTimeout(() => {
        const el = document.getElementById('learning-modules-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el.classList.add('modules-highlight-pulse');
          setTimeout(() => el.classList.remove('modules-highlight-pulse'), 2200);
        }
      }, 120);
    }
  };

  // Sub-view: null = 4-Course Student Dashboard (#dashboard), 'data_analyst' = Data Analyst with GenAI 6-Module Hub (#data-analyst), 'python' = Python Module Detail Page, 'python_intro_game' = Python Introduction & Setup Game Workspace, 'sql' = SQL Chapter View, 'excel' = Excel Chapter View, 'powerbi' = Power BI Chapter View, 'stats' = Statistics Chapter View, 'genai' = GenAI Chapter View
  const [selectedModuleView, setSelectedModuleView] = useState<'data_analyst' | 'python' | 'python_intro_game' | 'sql' | 'excel' | 'powerbi' | 'stats' | 'genai' | null>(() => {
    if (typeof window !== 'undefined') {
      const h = window.location.hash;
      const baseH = h.split('?')[0];
      if (baseH === '#data-analyst' || baseH === '#data-analytics') {
        return 'data_analyst';
      }
      if (baseH === '#intro-game' || baseH === '#intro-games' || baseH === '#pyintro') {
        return 'python_intro_game';
      }
      if (baseH === '#sql') {
        return 'sql';
      }
      if (baseH === '#excel') {
        return 'excel';
      }
      if (baseH === '#powerbi') {
        return 'powerbi';
      }
      if (baseH === '#stats') {
        return 'stats';
      }
      if (baseH === '#genai') {
        return 'genai';
      }
      if (baseH === '#python' || baseH === '#practice' || baseH === '#mcq' || baseH === '#play' || baseH === '#codequest' || baseH === '#workspace' || baseH === '#code' || baseH === '#codepractice' || baseH === '#interview' || baseH === '#mockinterview' || baseH === '#score' || baseH === '#scorecard' || baseH === '#learn' || baseH === '#video') {
        return 'python';
      }
    }
    return null;
  });

  // Active Topic Workspace for hands-on practice (Video, MCQ, Game, Code, Interview, Score)
  const [activeTopicWs, setActiveTopicWs] = useState<number | null>(() => {
    if (typeof window === 'undefined') return null;
    const baseH = window.location.hash.split('?')[0];
    const isStep = ['#practice','#mcq','#play','#codequest','#workspace','#code','#codepractice','#interview','#mockinterview','#score','#scorecard','#learn','#video'].includes(baseH);
    if (!isStep) return null;
    const params = new URLSearchParams(window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
    const t = params.get('topic');
    return t ? parseInt(t, 10) : 1;
  });
  const [targetStep, setTargetStep] = useState<WorkspaceStepId>(() => {
    if (typeof window === 'undefined') return 'learn';
    const baseH = window.location.hash.split('?')[0];
    if (baseH === '#practice' || baseH === '#mcq') return 'practice';
    if (baseH === '#play' || baseH === '#codequest') return 'play';
    if (baseH === '#code' || baseH === '#codepractice' || baseH === '#workspace') return 'code';
    if (baseH === '#interview' || baseH === '#mockinterview') return 'interview';
    if (baseH === '#score' || baseH === '#scorecard') return 'score';
    return 'learn';
  });

  const [introGameInitialId, setIntroGameInitialId] = useState<number>(() => {
    if (typeof window === 'undefined') return 1;
    const h = window.location.hash;
    if (h.includes('#intro-game') || h.includes('#pyintro')) {
      const params = new URLSearchParams(h.includes('?') ? h.split('?')[1] : '');
      const g = params.get('game');
      return g ? parseInt(g, 10) : 1;
    }
    return 1;
  });

  const [introGameLevelId, setIntroGameLevelId] = useState<number>(() => {
    if (typeof window === 'undefined') return 1;
    const h = window.location.hash;
    if (h.includes('#intro-game') || h.includes('#pyintro')) {
      const params = new URLSearchParams(h.includes('?') ? h.split('?')[1] : '');
      const lvl = params.get('level');
      return lvl ? parseInt(lvl, 10) : 1;
    }
    return 1;
  });

  const currentMobileTab: MobileTab =
    dockTab === 'game'
      ? 'game'
      : dockTab === 'placement'
      ? 'placement'
      : dockTab === 'income' || dockTab === 'referral' || dockTab === 'wallet' || dockTab === 'withdraw'
      ? 'earn'
      : selectedModuleView === 'data_analyst' || selectedModuleView === 'python' || selectedModuleView === 'sql' || selectedModuleView === 'excel' || selectedModuleView === 'powerbi' || selectedModuleView === 'genai' || selectedModuleView === 'stats'
      ? 'learn'
      : 'home';

  const handleMobileTabSelect = (tab: MobileTab) => {
    if (tab === 'home') {
      setSelectedModuleView(null);
      setActiveTopicWs(null);
      setDockTab('home');
      if (typeof window !== 'undefined') window.location.hash = '#dashboard';
    } else if (tab === 'learn') {
      setSelectedModuleView('data_analyst');
      setActiveTopicWs(null);
      setDockTab('home');
      if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
    } else if (tab === 'game' || tab === 'arena') {
      setSelectedModuleView(null);
      setActiveTopicWs(null);
      setDockTab('game');
      if (typeof window !== 'undefined') window.location.hash = '#game';
    } else if (tab === 'earn') {
      setSelectedModuleView(null);
      setActiveTopicWs(null);
      setDockTab('income');
      if (typeof window !== 'undefined') window.location.hash = '#earnings';
    } else if (tab === 'placement') {
      setPlacementLockOpen(true);
    } else if (tab === 'profile') {
      setMobileProfileSheetOpen(true);
    }
  };

  // Sync hash changes
  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash;
      const baseH = h.split('?')[0];
      if (baseH === '#data-analyst' || baseH === '#data-analytics') {
        setSelectedModuleView('data_analyst');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#intro-game' || baseH === '#intro-games' || baseH === '#pyintro') {
        const params = new URLSearchParams(h.includes('?') ? h.split('?')[1] : '');
        const g = params.get('game');
        const lvl = params.get('level');
        if (g) setIntroGameInitialId(parseInt(g, 10));
        if (lvl) setIntroGameLevelId(parseInt(lvl, 10));
        setSelectedModuleView('python_intro_game');
        setActiveTopicWs(null);
      } else if (h === '#game' || h === '#games' || h === '#arena' || h === '#gamearena') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('game');
      } else if (h === '#income' || h === '#earnings' || h === '#myearnings' || h === '#myearning' || h === '#earning') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('income');
      } else if (h === '#placement' || h === '#jobs' || h === '#placements') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setLockedSectionTarget('Placement');
        setPlacementLockOpen(true);
      } else if (h === '#internship' || h === '#internships') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setLockedSectionTarget('Internship');
        setPlacementLockOpen(true);
      } else if (h === '#certificate' || h === '#certificates') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setLockedSectionTarget('Certificate');
        setPlacementLockOpen(true);
      } else if (h === '#referral') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('referral');
      } else if (h === '#wallet') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('wallet');
      } else if (h === '#withdraw') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('withdraw');
      } else if (h === '#dashboard' || h === '#courses' || h === '#home' || !h) {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (['#practice','#mcq','#play','#codequest','#workspace','#code','#codepractice','#interview','#mockinterview','#score','#scorecard','#learn','#video'].includes(baseH)) {
        setSelectedModuleView('python');
        const params = new URLSearchParams(h.includes('?') ? h.split('?')[1] : '');
        const hashTopicId = params.get('topic');
        if (hashTopicId) {
          setActiveTopicWs(parseInt(hashTopicId, 10));
        } else {
          setActiveTopicWs(prev => prev ?? 1);
        }
        if (baseH === '#practice' || baseH === '#mcq') setTargetStep('practice');
        else if (baseH === '#play' || baseH === '#codequest') setTargetStep('play');
        else if (baseH === '#code' || baseH === '#codepractice' || baseH === '#workspace') setTargetStep('code');
        else if (baseH === '#interview' || baseH === '#mockinterview') setTargetStep('interview');
        else if (baseH === '#score' || baseH === '#scorecard') setTargetStep('score');
        else setTargetStep('learn');
      } else if (baseH === '#python') {
        setSelectedModuleView('python');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#sql') {
        setSelectedModuleView('sql');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#excel') {
        setSelectedModuleView('excel');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#powerbi') {
        setSelectedModuleView('powerbi');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#stats') {
        setSelectedModuleView('stats');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#genai') {
        setSelectedModuleView('genai');
        setActiveTopicWs(null);
        setDockTab('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Interactive AI Mentor Chat state in bottom right widget
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    { sender: 'ai', text: 'Ask me anything about your courses, concepts, career or placement.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAiListening, setIsAiListening] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);

  // Hover preview popup state for Module Cards
  const [hoveredModuleId, setHoveredModuleId] = useState<string | null>(null);
  const [hoverPopupPos, setHoverPopupPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const modulePreviewData: Record<string, {
    title: string;
    tagline: string;
    coverImg: string;
    benefits: string[];
    ctaText: string;
  }> = {
    'mod-1': {
      title: 'Python for Data Analysis',
      tagline: 'Learn Python from basics to real-world data analysis projects.',
      coverImg: '/images/module_python_dome.jpg',
      benefits: ['Video Lessons', 'Hands-on Coding Practice', 'Quizzes & Mini Projects', 'Real-world Datasets'],
      ctaText: 'Continue Learning →'
    },
    'mod-2': {
      title: 'SQL & Databases',
      tagline: 'Query, analyze and manage data using SQL with industry schemas.',
      coverImg: '/images/module_sql_dome.jpg',
      benefits: ['Interactive Queries', 'Complex SQL Joins', 'Schema Design', 'Industry Datasets'],
      ctaText: 'Explore SQL →'
    },
    'mod-3': {
      title: 'Advanced Excel',
      tagline: 'Master data analysis with formulas, Pivot Tables, XLOOKUP & dashboards.',
      coverImg: '/images/module_excel_dome.jpg',
      benefits: ['Advanced Formulas', 'Pivot Tables & Charts', 'Financial Modeling', 'Data Cleaning Labs'],
      ctaText: 'Explore Excel →'
    },
    'mod-4': {
      title: 'Power BI & Data Analytics',
      tagline: 'Build interactive executive dashboards and business analytics reports.',
      coverImg: '/images/module_powerbi_dome.jpg',
      benefits: ['DAX Calculations', 'Executive Dashboards', 'Power Query ETL', 'Data Storytelling'],
      ctaText: 'Explore Power BI →'
    },
    'mod-5': {
      title: 'Statistics for Data Analysis',
      tagline: 'Learn key statistical concepts to analyze distributions and test hypotheses.',
      coverImg: '/images/module_stats_dome.jpg',
      benefits: ['Probability Theory', 'Hypothesis Testing', 'A/B Testing Scenarios', 'Statistical Models'],
      ctaText: 'Explore Statistics →'
    },
    'mod-6': {
      title: 'GenAI for Data Analytics',
      tagline: 'Use next-gen AI tools and LLMs to accelerate data analytics workflows.',
      coverImg: '/images/module_genai_dome.jpg',
      benefits: ['LLM Orchestration', 'Prompt Engineering', 'AI Data Analysts', 'Autonomous Workflows'],
      ctaText: 'Explore GenAI →'
    }
  };

  const handleModuleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, moduleId: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    const popupWidth = 320;
    const popupHeight = 380;
    
    let left = rect.right + 12;
    let top = rect.top - 10;

    // Flip to left if overflowing viewport right
    if (left + popupWidth > window.innerWidth - 16) {
      left = rect.left - popupWidth - 12;
    }
    // Clamp top
    if (top + popupHeight > window.innerHeight - 16) {
      top = window.innerHeight - popupHeight - 16;
    }
    if (top < 70) {
      top = 70;
    }

    setHoverPopupPos({ top, left });
    setHoveredModuleId(moduleId);
  };

  const handleModuleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredModuleId(null);
    }, 250);
  };

  // 10 Detailed Learning Modules with SAME-TO-SAME 3D Icons from reference image
  const modules = [
    {
      id: 'mod-1',
      code: '01',
      title: 'Python for Data Analysis',
      desc: 'Learn Python with real-world data analysis examples.',
      progress: telemetry.completedTopics.length > 0 ? Math.min(100, Math.round((telemetry.completedTopics.length / 26) * 100)) : 0,
      lessons: '260 Lessons',
      exercises: '26 Quizzes',
      project: '8 Projects',
      icon: <img src="/images/icons3d/icon_01_python.png" alt="Python 3D" className="w-full h-full object-contain" />,
      isLocked: false, // Always unlocked for new student!
      tag: 'Core Track',
      color: '#0284c7'
    },
    {
      id: 'mod-2',
      code: '02',
      title: 'SQL & Databases',
      desc: 'Query, analyze and manage data using SQL.',
      progress: 0,
      lessons: '280 Lessons',
      exercises: '28 Quizzes',
      project: '7 Projects',
      icon: <img src="/images/icons3d/icon_02_sql.png" alt="SQL 3D" className="w-full h-full object-contain" />,
      isLocked: false,
      tag: 'Database',
      color: '#7c3aed'
    },
    {
      id: 'mod-3',
      code: '03',
      title: 'Advanced Excel',
      desc: 'Master data analysis with formulas, Pivot Tables & more.',
      progress: 0,
      lessons: '280 Lessons',
      exercises: '28 Quizzes',
      project: '7 Projects',
      icon: <img src="/images/icons3d/icon_03_excel.png" alt="Advanced Excel 3D" className="w-full h-full object-contain" />,
      isLocked: false,
      tag: 'Spreadsheet',
      color: '#10b981'
    },
    {
      id: 'mod-4',
      code: '04',
      title: 'Power BI & Data Visualization',
      desc: 'Create interactive dashboards and business insights.',
      progress: 0,
      lessons: '240 Lessons',
      exercises: '24 Quizzes',
      project: '6 Projects',
      icon: <img src="/images/icons3d/icon_04_powerbi.png" alt="Power BI 3D" className="w-full h-full object-contain" />,
      isLocked: false,
      tag: 'BI & Dashboards',
      color: '#f59e0b'
    },
    {
      id: 'mod-5',
      code: '05',
      title: 'Statistics for Data Analytics',
      desc: 'Learn key statistical concepts to analyze data effectively.',
      progress: 0,
      lessons: '8 Lessons',
      exercises: '4 Exercises',
      project: '1 Project',
      icon: <img src="/images/icons3d/icon_05_stats.png" alt="Statistics 3D" className="w-full h-full object-contain" />,
      isLocked: false,
      tag: 'Math & Stats',
      color: '#ec4899'
    },
    {
      id: 'mod-6',
      code: '06',
      title: 'GenAI for Data Analytics',
      desc: 'Use AI tools to work smarter and solve real problems.',
      progress: 0,
      lessons: '8 Lessons',
      exercises: '5 Exercises',
      project: '1 Project',
      icon: <img src="/images/icons3d/icon_06_genai.png" alt="GenAI 3D" className="w-full h-full object-contain" />,
      isLocked: false,
      tag: 'Next-Gen AI',
      color: '#06b6d4'
    },
    {
      id: 'mod-7',
      code: '07',
      title: 'Data Cleaning & Preparation',
      desc: 'Clean, transform and prepare data for analysis.',
      progress: 0,
      lessons: '8 Lessons',
      exercises: '5 Exercises',
      project: '1 Project',
      icon: <img src="/images/icons3d/icon_07_dataclean.png" alt="Data Cleaning 3D" className="w-full h-full object-contain" />,
      isLocked: false,
      tag: 'ETL & Prep',
      color: '#0284c7'
    },
    {
      id: 'mod-8',
      code: '08',
      title: 'Business & Product Analytics',
      desc: 'Learn how to solve real business and product problems.',
      progress: 0,
      lessons: '8 Lessons',
      exercises: '5 Exercises',
      project: '1 Project',
      icon: <img src="/images/icons3d/icon_08_bizanalytics.png" alt="Business Analytics 3D" className="w-full h-full object-contain" />,
      isLocked: false,
      tag: 'Strategy',
      color: '#ef4444'
    },
    {
      id: 'mod-9',
      code: '09',
      title: 'AI Interview & Career Preparation',
      desc: 'Mock interviews, resume building and career guidance.',
      progress: 0,
      lessons: '8 Lessons',
      exercises: '5 Exercises',
      project: '1 Project',
      icon: <img src="/images/icons3d/icon_09_interview.png" alt="AI Interview 3D" className="w-full h-full object-contain" />,
      isLocked: false,
      tag: 'Placement',
      color: '#8b5cf6',
      spanCol: true // Span across 2 columns in row 3!
    },
    {
      id: 'mod-10',
      code: '10',
      title: 'Final Capstone Project',
      desc: 'Work on a complete end-to-end data analytics project.',
      progress: 0,
      lessons: '6 Lessons',
      project: '1 Project',
      icon: <img src="/images/icons3d/icon_10_capstone.png" alt="Capstone Trophy 3D" className="w-full h-full object-contain" />,
      isLocked: false,
      tag: 'Portfolio',
      color: '#eab308',
      spanCol: true // Span across 2 columns in row 3!
    }
  ];

  // Filtering
  const filteredModules = modules.filter(m => {
    if (searchQuery.trim().length > 0) {
      return m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             m.desc.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (moduleFilter === 'in-progress') {
      return m.progress > 0 && m.progress < 100 && !m.isLocked;
    }
    if (moduleFilter === 'not-started') {
      return m.progress === 0 || m.isLocked;
    }
    if (moduleFilter === 'completed') {
      return m.progress === 100;
    }
    return true;
  });

  const handleModuleClick = (m: typeof modules[0]) => {
    playClick();
    playCinema();
    const titleLower = (m.title || '').toLowerCase();
    if (m.id === 'mod-1' || titleLower.includes('python') || titleLower.includes('data clean')) {
      setSelectedModuleView('python');
      if (typeof window !== 'undefined') window.location.hash = '#python';
    } else if (m.id === 'mod-2' || titleLower.includes('sql')) {
      setSelectedModuleView('sql');
      if (typeof window !== 'undefined') window.location.hash = '#sql';
    } else if (m.id === 'mod-3' || titleLower.includes('excel') || titleLower.includes('business')) {
      setSelectedModuleView('excel');
      if (typeof window !== 'undefined') window.location.hash = '#excel';
    } else if (m.id === 'mod-4' || titleLower.includes('power bi') || titleLower.includes('powerbi')) {
      setSelectedModuleView('powerbi');
      if (typeof window !== 'undefined') window.location.hash = '#powerbi';
    } else if (m.id === 'mod-5' || titleLower.includes('stat')) {
      setSelectedModuleView('stats');
      if (typeof window !== 'undefined') window.location.hash = '#stats';
    } else if (m.id === 'mod-6' || titleLower.includes('genai') || titleLower.includes('ai')) {
      setSelectedModuleView('genai');
      if (typeof window !== 'undefined') window.location.hash = '#genai';
    } else if (m.id === 'mod-9' || titleLower.includes('interview')) {
      setSelectedModuleView('python');
      if (typeof window !== 'undefined') window.location.hash = '#mockinterview';
    } else if (m.id === 'mod-10' || titleLower.includes('capstone') || titleLower.includes('project')) {
      setSelectedModuleView('python');
      if (typeof window !== 'undefined') window.location.hash = '#projects';
    } else {
      setSelectedModuleView('python');
      if (typeof window !== 'undefined') window.location.hash = '#python';
    }
  };

  const handleToggleAiMic = () => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      alert('Browser native Web Speech API is not supported in this browser. Please use Chrome, Safari or Edge.');
      return;
    }
    if (isAiListening) {
      setIsAiListening(false);
      return;
    }
    try {
      const rec = new SpeechRec();
      rec.lang = 'en-US';
      rec.continuous = false;
      rec.interimResults = false;
      setIsAiListening(true);
      rec.onresult = (e: any) => {
        const spoken = e.results[0][0].transcript;
        setChatInput(spoken);
        setIsAiListening(false);
        handleSendChat(spoken);
      };
      rec.onerror = () => setIsAiListening(false);
      rec.onend = () => setIsAiListening(false);
      rec.start();
    } catch {
      setIsAiListening(false);
    }
  };

  const handleToggleAiSpeak = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isAiSpeaking) {
      window.speechSynthesis.cancel();
      setIsAiSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const clean = text.replace(/[*_#`[\]()]/g, ' ').replace(/\s+/g, ' ').trim();
    const utt = new SpeechSynthesisUtterance(clean);
    utt.lang = 'en-US';
    utt.rate = 0.95;
    utt.onstart = () => setIsAiSpeaking(true);
    utt.onend = () => setIsAiSpeaking(false);
    utt.onerror = () => setIsAiSpeaking(false);
    window.speechSynthesis.speak(utt);
  };

  const handleSendChat = async (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    playClick();
    const newMsgs = [...chatMessages, { sender: 'user' as const, text }];
    setChatMessages(newMsgs);
    setChatInput('');

    // 100% Client-Side AI Response using local reasoning provider with zero API costs
    setTimeout(async () => {
      const response = await PowerGreenAI.askText(text, 'en');
      setChatMessages(prev => [...prev, { sender: 'ai', text: response.text }]);
    }, 300);
  };

  const handleGlobalNavigate = (route: string) => {
    playClick();
    if (route === 'dashboard') {
      setSelectedModuleView(null);
      setActiveTab('dashboard');
      if (typeof window !== 'undefined') window.location.hash = '#dashboard';
    } else if (route === 'learning') {
      setSelectedModuleView(null);
      setActiveTab('learning');
      if (typeof window !== 'undefined') window.location.hash = '#learning';
    } else if (route === 'python') {
      setSelectedModuleView('python');
      if (typeof window !== 'undefined') window.location.hash = '#python';
    } else if (route === 'sql') {
      setSelectedModuleView('sql');
      if (typeof window !== 'undefined') window.location.hash = '#sql';
    } else if (route === 'excel') {
      setSelectedModuleView('excel');
      if (typeof window !== 'undefined') window.location.hash = '#excel';
    } else if (route === 'powerbi') {
      setSelectedModuleView('powerbi');
      if (typeof window !== 'undefined') window.location.hash = '#powerbi';
    } else if (route === 'stats') {
      setSelectedModuleView('stats');
      if (typeof window !== 'undefined') window.location.hash = '#stats';
    } else if (route === 'genai') {
      setSelectedModuleView('genai');
      if (typeof window !== 'undefined') window.location.hash = '#genai';
    } else if (route === 'projects') {
      setSelectedLockedModule('Real-World Capstone Projects');
      setUnlockModalOpen(true);
    } else if (route === 'interview') {
      setSelectedModuleView('python');
      if (typeof window !== 'undefined') window.location.hash = '#mockinterview';
    } else if (route === 'placement') {
      setSelectedModuleView(null);
      setActiveTab('placement');
      if (typeof window !== 'undefined') window.location.hash = '#placement';
    } else if (route === 'earnings') {
      setSelectedModuleView(null);
      setDockTab('income');
      if (typeof window !== 'undefined') window.location.hash = '#income';
    } else if (route === 'community') {
      setSelectedModuleView(null);
      setActiveTab('community');
      if (typeof window !== 'undefined') window.location.hash = '#community';
    } else if (route === 'certificates') {
      setSelectedModuleView(null);
      setActiveTab('certificates');
      if (typeof window !== 'undefined') window.location.hash = '#certificates';
    } else if (route === 'help') {
      onOpenAdvisor?.();
    }
  };

  // Reusable Sidebar using Approved Global Navigation Design Lock
  const renderNavigationSidebar = (currentActive: string) => (
    <GlobalSidebar
      currentActive={selectedModuleView ? selectedModuleView : currentActive}
      onNavigate={handleGlobalNavigate}
      onOpenUnlockModal={(mod) => {
        setSelectedLockedModule(mod || 'All Modules (Pro Track)');
        setUnlockModalOpen(true);
      }}
      onOpenAdvisor={onOpenAdvisor}
    />
  );

  // Render Python Introduction & Setup 8-Game Learning Workspace (media_1791550568170.jpg)
  if (selectedModuleView === 'python_intro_game') {
    return (
      <>
        {/* Mobile (< 768px): Native Android Mobile Game Arena Hub */}
        <div className="md:hidden min-h-screen bg-slate-50">
          <MobileGameArenaHub
            userName={userName}
            onPlayPython={() => {}}
            onLockedGame={(gameName: string) => {
              setSelectedLockedModule(gameName);
              setUnlockModalOpen(true);
            }}
            onNavigateBack={() => {
              setSelectedModuleView(null);
              setDockTab('game');
            }}
            onOpenAdvisor={onOpenAdvisor}
          />
          <MobileBottomNav
            currentTab="arena"
            onSelectTab={handleMobileTabSelect}
            unreadEarnBadge={true}
          />
        </div>

        {/* Desktop (>= 768px): Full 2050 Game Workspace */}
        <div className="hidden md:block py-intro-game-view-container">
          <PythonIntroGameWorkspace
            userName={userName}
            levelId={introGameLevelId}
            initialGameId={introGameInitialId}
            onBackToArena={() => {
              setSelectedModuleView(null);
              setDockTab('game');
              if (typeof window !== 'undefined') window.location.hash = '#game';
            }}
            onNavigateDock={(tab) => {
              if (tab === 'coding_game' || tab === 'game_intro') {
                return;
              }
              setSelectedModuleView(null);
              if (tab === 'home' || tab === 'dashboard') {
                setDockTab('home');
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              } else if (tab === 'game') {
                setDockTab('game');
                if (typeof window !== 'undefined') window.location.hash = '#game';
              } else if (tab === 'earning' || tab === 'income') {
                setDockTab('income');
                if (typeof window !== 'undefined') window.location.hash = '#earnings';
              } else if (tab === 'learn' || tab === 'learning') {
                setSelectedModuleView('python');
                if (typeof window !== 'undefined') window.location.hash = '#python';
              } else if (tab === 'internship') {
                setLockedSectionTarget('Internship');
                setPlacementLockOpen(true);
              } else if (tab === 'certificate' || tab === 'certificates') {
                setLockedSectionTarget('Certificate');
                setPlacementLockOpen(true);
              } else if (tab === 'placement') {
                setLockedSectionTarget('Placement');
                setPlacementLockOpen(true);
              } else {
                setDockTab(tab as any);
                if (typeof window !== 'undefined') window.location.hash = '#' + tab;
              }
            }}
            onOpenAdvisor={onOpenAdvisor}
            onOpenUnlockModal={(mod) => {
              setSelectedLockedModule(mod || 'Guaranteed Virtual Internship');
              setUnlockModalOpen(true);
            }}
          />
          <PayToUnlockModal
            isOpen={unlockModalOpen}
            onClose={() => setUnlockModalOpen(false)}
            targetModuleName={selectedLockedModule}
            courseId={selectedLockedModule.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
            courseTitle={selectedLockedModule}
            price={987}
            onSimulateUnlock={() => {
              setIsNewStudentMode(false);
              setUnlockModalOpen(false);
            }}
          />
          <MobileProfileSheet
            isOpen={mobileProfileSheetOpen}
            onClose={() => setMobileProfileSheetOpen(false)}
            userName={currentUserName}
            telemetry={telemetry}
            onLogout={onLogout}
            onOpenEarn={() => {
              setSelectedModuleView(null);
              setActiveTopicWs(null);
              setDockTab('income');
              if (typeof window !== 'undefined') window.location.hash = '#earnings';
            }}
            onOpenLogin={() => setAuthModalOpen(true)}
          />
          <FutureAuthModal
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
            onSuccess={handleAuthSuccess}
          />
        </div>
      </>
    );
  }

  // Render Hands-on Python Lab Workspace when an interactive step is active
  if (selectedModuleView === 'python' && activeTopicWs !== null) {
    if (mobileTestingFrame) {
      return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-start py-4 px-2 sm:px-4">
          {/* Top Control Bar for Mobile Testing */}
          <div className="w-full max-w-[420px] mb-3 bg-slate-900 border border-slate-700/80 rounded-2xl px-4 py-2.5 shadow-xl flex items-center justify-between text-xs backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
              <span className="font-bold text-slate-100 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                Mobile Testing Size (390px)
              </span>
            </div>
            <button
              onClick={() => setMobileTestingFrame(false)}
              className="px-2.5 py-1 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white font-medium text-[11px] flex items-center gap-1 transition-all cursor-pointer"
              title="Switch to full desktop IDE view"
            >
              <Monitor className="w-3 h-3" />
              Desktop IDE
            </button>
          </div>

          {/* Centered Realistic Mobile Phone Frame (Scrollable on Desktop) */}
          <div className="w-full max-w-[420px] max-h-[90vh] overflow-y-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-slate-700 bg-white relative">
            <MobileTopicWorkspace
              userName={currentUserName}
              topicId={activeTopicWs}
              initialStep={targetStep}
              onBack={() => {
                setActiveTopicWs(null);
                if (typeof window !== 'undefined') {
                  window.location.hash = '#python';
                }
              }}
              onOpenUnlockModal={(mod?: string) => {
                setSelectedLockedModule(mod || 'Python Advanced Track');
                setUnlockModalOpen(true);
              }}
              onOpenAdvisor={onOpenAdvisor}
              onOpenProfile={() => setMobileProfileSheetOpen(true)}
            />
            <MobileProfileSheet
              isOpen={mobileProfileSheetOpen}
              onClose={() => setMobileProfileSheetOpen(false)}
              userName={currentUserName}
              telemetry={telemetry}
              onLogout={onLogout}
              onOpenEarn={() => {
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                setDockTab('income');
                if (typeof window !== 'undefined') window.location.hash = '#earnings';
              }}
              onOpenPlacement={() => {
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                setDockTab('placement');
                if (typeof window !== 'undefined') window.location.hash = '#placement';
              }}
              onOpenLogin={() => setAuthModalOpen(true)}
              onOpenAdvisor={onOpenAdvisor}
            />
          </div>
        </div>
      );
    }

    if (isMobileScreen || mobileTestingFrame) {
      return (
        <div className="min-h-screen bg-slate-50">
          <MobileTopicWorkspace
            userName={currentUserName}
            topicId={activeTopicWs}
            initialStep={targetStep}
            onBack={() => {
              setActiveTopicWs(null);
              if (typeof window !== 'undefined') {
                window.location.hash = '#python';
              }
            }}
            onOpenUnlockModal={(mod?: string) => {
              setSelectedLockedModule(mod || 'Python Advanced Track');
              setUnlockModalOpen(true);
            }}
            onOpenAdvisor={onOpenAdvisor}
            onOpenProfile={() => setMobileProfileSheetOpen(true)}
          />
          <MobileProfileSheet
            isOpen={mobileProfileSheetOpen}
            onClose={() => setMobileProfileSheetOpen(false)}
            userName={currentUserName}
            telemetry={telemetry}
            onLogout={onLogout}
            onOpenEarn={() => {
              setSelectedModuleView(null);
              setActiveTopicWs(null);
              setDockTab('income');
              if (typeof window !== 'undefined') window.location.hash = '#earnings';
            }}
            onOpenPlacement={() => {
              setSelectedModuleView(null);
              setActiveTopicWs(null);
              setDockTab('placement');
              if (typeof window !== 'undefined') window.location.hash = '#placement';
            }}
            onOpenLogin={() => setAuthModalOpen(true)}
            onOpenAdvisor={onOpenAdvisor}
          />
        </div>
      );
    }

    return (
      <div className="relative dock-dashboard-page">
        <button
          onClick={() => setMobileTestingFrame(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold border-2 border-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Open in Mobile Size Phone Container"
        >
          <Smartphone className="w-4 h-4 text-emerald-300 animate-pulse" />
          <span>📱 Test in Mobile View (390px)</span>
        </button>

        <PythonTopicWorkspace
          userName={userName}
          topicId={activeTopicWs}
          initialStep={targetStep}
          onBack={() => {
            setActiveTopicWs(null);
            setTargetStep('learn');
            if (typeof window !== 'undefined') window.location.hash = '#python';
          }}
          onNavigateDock={(tab) => {
            setActiveTopicWs(null);
            if (tab === 'game') {
              setSelectedModuleView(null);
              setDockTab('game');
              if (typeof window !== 'undefined') window.location.hash = '#game';
            } else if (tab === 'home' || tab === 'dashboard') {
              setSelectedModuleView(null);
              setDockTab('home');
              if (typeof window !== 'undefined') window.location.hash = '#dashboard';
            } else if (tab === 'learn' || tab === 'learning') {
              setSelectedModuleView('python');
              setActiveTopicWs(null);
              if (typeof window !== 'undefined') window.location.hash = '#python';
            } else if (tab === 'earning' || tab === 'income') {
              setSelectedModuleView(null);
              setDockTab('income');
              if (typeof window !== 'undefined') window.location.hash = '#earnings';
            } else if (tab === 'internship') {
              setLockedSectionTarget('Internship');
              setPlacementLockOpen(true);
            } else if (tab === 'certificate' || tab === 'certificates') {
              setLockedSectionTarget('Certificate');
              setPlacementLockOpen(true);
            } else if (tab === 'placement') {
              setLockedSectionTarget('Placement');
              setPlacementLockOpen(true);
            } else {
              setSelectedModuleView(null);
              setDockTab(tab as any);
              if (typeof window !== 'undefined') window.location.hash = '#' + tab;
            }
          }}
          onOpenUnlockModal={(mod) => {
            setSelectedLockedModule(mod || 'Python Hands-on Lab');
            setUnlockModalOpen(true);
          }}
          onOpenAdvisor={onOpenAdvisor}
          onNavigateNextTopic={() => {
            setActiveTopicWs(2);
            setTargetStep('learn');
            if (typeof window !== 'undefined') window.location.hash = '#learn';
          }}
        />
        <PayToUnlockModal
          isOpen={unlockModalOpen}
          onClose={() => setUnlockModalOpen(false)}
          targetModuleName={selectedLockedModule}
          courseId={selectedLockedModule.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
          courseTitle={selectedLockedModule}
          price={987}
          onSimulateUnlock={() => {
            setIsNewStudentMode(false);
            setUnlockModalOpen(false);
          }}
        />
        <MobileProfileSheet
          isOpen={mobileProfileSheetOpen}
          onClose={() => setMobileProfileSheetOpen(false)}
          userName={currentUserName}
          telemetry={telemetry}
          onLogout={onLogout}
          onOpenEarn={() => {
            setSelectedModuleView(null);
            setActiveTopicWs(null);
            setDockTab('income');
            if (typeof window !== 'undefined') window.location.hash = '#earnings';
          }}
          onOpenPlacement={() => {
            setSelectedModuleView(null);
            setActiveTopicWs(null);
            setDockTab('placement');
            if (typeof window !== 'undefined') window.location.hash = '#placement';
          }}
          onOpenLogin={() => setAuthModalOpen(true)}
          onOpenAdvisor={onOpenAdvisor}
        />
        <FutureAuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          onSuccess={handleAuthSuccess}
        />
      </div>
    );
  }

  // (Referral & Earnings now render seamlessly inside the same dashboard container with the 2050 glass theme)

  return (
    <div className="dock-dashboard-page">
      
      {/* ── Android Native Top App Bar on Mobile (< 768px) (Hidden on Game Zone to prevent duplicate header) ── */}
      {dockTab !== 'game' && (
        <div className="md:hidden">
          <MobileTopBar
            userName={currentUserName}
            telemetry={telemetry}
            onOpenProfile={() => setMobileProfileSheetOpen(true)}
            onOpenWallet={() => setIsWithdrawModalOpen(true)}
            onOpenNotifications={() => {
              alert('🔔 Welcome to FUTURE IT INDUSTRY Android App Portal! Continue learning Python & earning commissions.');
            }}
            onOpenLogin={() => setAuthModalOpen(true)}
          />
        </div>
      )}

      {/* =========================================================================
          1. TOP APP HEADER BAR (Desktop only >= 768px)
          ========================================================================= */}
      <header className="dock-top-navbar hidden md:flex">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => {
            setSelectedModuleView(null);
            if (typeof window !== 'undefined') window.location.hash = '#dashboard';
          }}
        >
          <FutureLogo size="md" />
        </div>

        {/* Center Search Pill */}
        <div className="dock-search-pill">
          <Search className="w-4 h-4 text-sky-500 shrink-0" />
          <input
            type="text"
            placeholder={dockTab === 'game' ? 'Search Python games, challenges, or skills...' : 'Search for topics, modules, projects, interview questions or anything...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="dock-search-input"
          />
          <span className="dock-kbd-hint">Ctrl K</span>
        </div>

        {/* Right Actions: Notifications + User Profile (media_1791313375552.jpg) */}
        <div className="flex items-center gap-3">
          {/* Notifications bell */}
          <div className="relative cursor-pointer p-1.5 rounded-full hover:bg-sky-50 text-slate-600 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
              1
            </span>
          </div>

          {/* User Profile & Dropdown Menu */}
          <div className="relative">
            <div 
              className="dock-user-profile hover:opacity-90 transition-opacity select-none cursor-pointer" 
              onClick={(e) => {
                e.stopPropagation();
                setProfileDropdownOpen((prev) => !prev);
              }}
            >
              <img 
                src={(typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"} 
                alt={userName} 
                className="dock-avatar-img" 
              />
              <div className="hidden sm:flex flex-col text-left">
                <strong className="text-xs font-black text-slate-800 leading-tight">{userName}</strong>
                <span className="text-[10px] text-slate-500 font-semibold">Level 1 • New Learner</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Profile Dropdown Menu */}
            {profileDropdownOpen && (
              <>
                {/* Backdrop overlay to close on outside click */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setProfileDropdownOpen(false)} 
                />
                
                <div className="absolute right-0 top-full mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 py-3 px-3 z-50 animate-fadeIn text-left">
                  {/* User Profile Header */}
                  <div className="flex items-center gap-3 p-2 bg-slate-50/80 rounded-xl mb-2">
                    <img 
                      src={(typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"} 
                      alt={userName} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-extrabold text-slate-900 truncate">{userName}</div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {(typeof window !== 'undefined' ? localStorage.getItem('futureai_user_email') || localStorage.getItem('futureai_user_phone') : null) || 'Student Account'}
                      </div>
                      <div className="inline-flex items-center gap-1 mt-0.5 px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold">
                        <span>Level 1 • New Learner</span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-2 p-2 bg-slate-50/60 rounded-xl text-center">
                    <div className="flex items-center justify-center gap-1.5 text-amber-600 font-bold text-xs">
                      <Coins className="w-4 h-4 text-amber-500" />
                      <span>{telemetry.coins} Coins</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-purple-600 font-bold text-xs">
                      <Gem className="w-4 h-4 text-purple-500" />
                      <span>{telemetry.gems} Gems</span>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => {
                        setDockTab('home');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <LayoutDashboard className="w-4 h-4 text-blue-500" />
                      <span>My Learning Dashboard</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setDockTab('game');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <Gamepad2 className="w-4 h-4 text-purple-500" />
                      <span>Coding Games Arena</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setDockTab('income');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <IndianRupee className="w-4 h-4 text-emerald-500" />
                      <span>Affiliate & Earnings Hub</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setDockTab('placement');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <Briefcase className="w-4 h-4 text-sky-500" />
                      <span>Job & Placement Portal</span>
                    </button>
                  </div>

                  <div className="my-2 border-t border-slate-100" />

                  {/* Dedicated Logout Button (Only logs out when user explicitly clicks this button) */}
                  <button
                    type="button"
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      onLogout?.();
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 text-rose-500" />
                    <span>Log Out</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. MAIN DASHBOARD CONTENT GRID (media_1790998423618.jpg)
          ========================================================================= */}
      <div className="dock-main-container">

        {/* ─── TAB: PYTHON COURSE DETAIL VIEW (Exact match to media_1791029953384.jpg) ─── */}
        {dockTab === 'home' && selectedModuleView === 'python' && (
          <div className="col-span-full">
            {/* Mobile View (< 768px) */}
            <div className="md:hidden min-h-screen bg-slate-50">
              <MobilePythonChapterView
                userName={currentUserName}
                onBack={() => {
                  setSelectedModuleView(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                }}
                onOpenTopic={(topicId, step = 'learn') => {
                  setTargetStep(step);
                  setActiveTopicWs(topicId);
                  const map: Record<WorkspaceStepId, string> = {
                    learn: '#learn',
                    practice: '#practice',
                    play: '#play',
                    code: '#code',
                    interview: '#interview',
                    score: '#score',
                  };
                  const stepHash = map[step] || '#learn';
                  if (typeof window !== 'undefined') window.location.hash = `${stepHash}?topic=${topicId}`;
                }}
                onOpenUnlockModal={(mod) => {
                  setSelectedLockedModule(mod || 'Python Advanced Track');
                  setUnlockModalOpen(true);
                }}
                onOpenAdvisor={onOpenAdvisor}
              />
            </div>

            {/* Desktop View (>= 768px) */}
            <div className="hidden md:block">
              <PythonChapterView
                userName={userName}
                onBack={() => {
                  setSelectedModuleView('data_analyst');
                  if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
                }}
                onOpenTopic={(topicId, step = 'learn') => {
                  setTargetStep(step);
                  setActiveTopicWs(topicId);
                  const map: Record<WorkspaceStepId, string> = {
                    learn: '#learn',
                    practice: '#practice',
                    play: '#play',
                    code: '#code',
                    interview: '#interview',
                    score: '#score',
                  };
                  const stepHash = map[step] || '#learn';
                  if (typeof window !== 'undefined') window.location.hash = `${stepHash}?topic=${topicId}`;
                }}
                onOpenUnlockModal={(mod) => {
                  setSelectedLockedModule(mod || 'Python Advanced Track');
                  setUnlockModalOpen(true);
                }}
                onOpenAdvisor={onOpenAdvisor}
              />
            </div>
          </div>
        )}

        {/* ─── TAB: SQL COURSE CHAPTER VIEW ─── */}
        {dockTab === 'home' && selectedModuleView === 'sql' && (
          <div className="col-span-full">
            {/* Mobile View (< 768px) */}
            <div className="md:hidden min-h-screen bg-slate-50">
              <MobileSqlChapterView
                userName={currentUserName}
                onBack={() => {
                  setSelectedModuleView(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                }}
                onOpenUnlockModal={(mod) => {
                  setSelectedLockedModule(mod || 'SQL & Databases');
                  setUnlockModalOpen(true);
                }}
                onOpenAdvisor={onOpenAdvisor}
              />
            </div>

            {/* Desktop View (>= 768px) */}
            <div className="hidden md:block">
              <SqlChapterView
                userName={userName}
                onBack={() => {
                  setSelectedModuleView('data_analyst');
                  if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
                }}
                onOpenUnlockModal={(mod) => {
                  setSelectedLockedModule(mod || 'SQL & Databases');
                  setUnlockModalOpen(true);
                }}
                onOpenAdvisor={onOpenAdvisor}
              />
            </div>
          </div>
        )}

        {/* ─── TAB: EXCEL COURSE CHAPTER VIEW ─── */}
        {dockTab === 'home' && selectedModuleView === 'excel' && (
          <div className="col-span-full">
            {/* Mobile View (< 768px) */}
            <div className="md:hidden min-h-screen bg-slate-50">
              <MobileExcelChapterView
                userName={currentUserName}
                onBack={() => {
                  setSelectedModuleView(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                }}
                onOpenUnlockModal={(mod) => {
                  setSelectedLockedModule(mod || 'Advanced Excel');
                  setUnlockModalOpen(true);
                }}
                onOpenAdvisor={onOpenAdvisor}
              />
            </div>

            {/* Desktop View (>= 768px) */}
            <div className="hidden md:block">
              <ExcelChapterView
                userName={userName}
                onBack={() => {
                  setSelectedModuleView('data_analyst');
                  if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
                }}
                onOpenUnlockModal={(mod) => {
                  setSelectedLockedModule(mod || 'Advanced Excel');
                  setUnlockModalOpen(true);
                }}
                onOpenAdvisor={onOpenAdvisor}
              />
            </div>
          </div>
        )}

        {/* ─── TAB: POWER BI COURSE CHAPTER VIEW ─── */}
        {dockTab === 'home' && selectedModuleView === 'powerbi' && (
          <div className="col-span-full">
            <PowerBiChapterView
              userName={userName}
              onBack={() => {
                setSelectedModuleView('data_analyst');
                if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
              }}
              onOpenUnlockModal={(mod) => {
                setSelectedLockedModule(mod || 'Power BI & Data Visualization');
                setUnlockModalOpen(true);
              }}
              onOpenAdvisor={onOpenAdvisor}
            />
          </div>
        )}

        {/* ─── TAB: STATISTICS COURSE CHAPTER VIEW ─── */}
        {dockTab === 'home' && selectedModuleView === 'stats' && (
          <div className="col-span-full">
            <StatsChapterView
              userName={userName}
              onBack={() => {
                setSelectedModuleView('data_analyst');
                if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
              }}
              onOpenUnlockModal={(mod) => {
                setSelectedLockedModule(mod || 'Statistics for Data Analytics');
                setUnlockModalOpen(true);
              }}
              onOpenAdvisor={onOpenAdvisor}
            />
          </div>
        )}

        {/* ─── TAB: GENAI COURSE CHAPTER VIEW ─── */}
        {dockTab === 'home' && selectedModuleView === 'genai' && (
          <div className="col-span-full">
            <GenAiChapterView
              userName={userName}
              onBack={() => {
                setSelectedModuleView('data_analyst');
                if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
              }}
              onOpenUnlockModal={(mod) => {
                setSelectedLockedModule(mod || 'GenAI for Data Analytics');
                setUnlockModalOpen(true);
              }}
              onOpenAdvisor={onOpenAdvisor}
            />
          </div>
        )}

        {/* ─── COURSE 01 SUB-HUB: DATA ANALYST WITH GENAI (6 MODULES) (#data-analyst) ─── */}
        {dockTab === 'home' && selectedModuleView === 'data_analyst' && (
          <div className="col-span-full">
            {/* Native Android Mobile Feed (< 768px): Data Analyst with GenAI 9-Module Hub */}
            <div className="md:hidden">
              <MobileDataAnalystHub
                userName={currentUserName}
                onOpenPython={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('python');
                  if (typeof window !== 'undefined') window.location.hash = '#python';
                }}
                onOpenSql={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('sql');
                  if (typeof window !== 'undefined') window.location.hash = '#sql';
                }}
                onOpenExcel={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('excel');
                  if (typeof window !== 'undefined') window.location.hash = '#excel';
                }}
                onOpenPowerBi={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('powerbi');
                  if (typeof window !== 'undefined') window.location.hash = '#powerbi';
                }}
                onOpenStats={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('stats');
                  if (typeof window !== 'undefined') window.location.hash = '#stats';
                }}
                onOpenGenAi={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('genai');
                  if (typeof window !== 'undefined') window.location.hash = '#genai';
                }}
                onOpenMockInterview={() => {
                  playClick();
                  if (typeof window !== 'undefined') window.location.hash = '#interview?topic=1';
                }}
                onOpenLockedModule={(title) => {
                  playClick();
                  playCinema();
                  const t = (title || '').toLowerCase();
                  if (t.includes('sql')) {
                    setSelectedModuleView('sql');
                    if (typeof window !== 'undefined') window.location.hash = '#sql';
                  } else if (t.includes('excel') || t.includes('copilot')) {
                    setSelectedModuleView('excel');
                    if (typeof window !== 'undefined') window.location.hash = '#excel';
                  } else if (t.includes('power') || t.includes('bi')) {
                    setSelectedModuleView('powerbi');
                    if (typeof window !== 'undefined') window.location.hash = '#powerbi';
                  } else if (t.includes('stat')) {
                    setSelectedModuleView('stats');
                    if (typeof window !== 'undefined') window.location.hash = '#stats';
                  } else if (t.includes('genai')) {
                    setSelectedModuleView('genai');
                    if (typeof window !== 'undefined') window.location.hash = '#genai';
                  } else {
                    setSelectedModuleView('python');
                    if (typeof window !== 'undefined') window.location.hash = '#python';
                  }
                }}
                onNavigateHome={() => {
                  playClick();
                  setSelectedModuleView(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                }}
                onOpenArena={() => {
                  playClick();
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  setDockTab('game');
                  if (typeof window !== 'undefined') window.location.hash = '#game';
                }}
                onOpenEarn={() => {
                  playClick();
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  setDockTab('income');
                  if (typeof window !== 'undefined') window.location.hash = '#earnings';
                }}
                onOpenPlacement={() => {
                  playClick();
                  setPlacementLockOpen(true);
                }}
              />
            </div>

            {/* Desktop Experience (>= 768px) */}
            <div className="hidden md:block">
              <LearnerHomeHub
                userName={userName}
                isNewStudentMode={isNewStudentMode}
                onBackToCourses={() => {
                  playClick();
                  setSelectedModuleView(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                }}
                onOpenPython={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('python');
                  if (typeof window !== 'undefined') window.location.hash = '#python';
                }}
                onOpenLockedModule={(modTitle) => {
                  playClick();
                  if (modTitle === '__sql__') {
                    playCinema();
                    setSelectedModuleView('sql');
                    if (typeof window !== 'undefined') window.location.hash = '#sql';
                  } else if (modTitle === '__excel__') {
                    playCinema();
                    setSelectedModuleView('excel');
                    if (typeof window !== 'undefined') window.location.hash = '#excel';
                  } else if (modTitle === '__powerbi__') {
                    playCinema();
                    setSelectedModuleView('powerbi');
                    if (typeof window !== 'undefined') window.location.hash = '#powerbi';
                  } else if (modTitle === '__stats__') {
                    playCinema();
                    setSelectedModuleView('stats');
                    if (typeof window !== 'undefined') window.location.hash = '#stats';
                  } else if (modTitle === '__genai__') {
                    playCinema();
                    setSelectedModuleView('genai');
                    if (typeof window !== 'undefined') window.location.hash = '#genai';
                  } else {
                    setSelectedLockedModule(modTitle);
                    setUnlockModalOpen(true);
                  }
                }}
                onOpenMockInterview={() => {
                  playClick();
                  setSelectedModuleView('python');
                  if (typeof window !== 'undefined') window.location.hash = '#mockinterview';
                }}
                onOpenAdvisor={onOpenAdvisor}
                onOpenVideo={(modId) => {
                  playClick();
                  if (modId === 'python' || !modId) {
                    setSelectedModuleView('python');
                    setActiveTopicWs(1);
                    setTargetStep('learn');
                    if (typeof window !== 'undefined') window.location.hash = '#learn';
                  } else {
                    setSelectedLockedModule(modId.toUpperCase());
                    setUnlockModalOpen(true);
                  }
                }}
                onOpenGame={(modId) => {
                  playClick();
                  if (modId === 'python' || !modId) {
                    setSelectedModuleView('python_intro_game');
                    if (typeof window !== 'undefined') window.location.hash = '#coding_game';
                  } else {
                    setSelectedLockedModule(modId.toUpperCase());
                    setUnlockModalOpen(true);
                  }
                }}
                onOpenQuiz={(modId) => {
                  playClick();
                  if (modId === 'python' || !modId) {
                    setSelectedModuleView('python');
                    setActiveTopicWs(1);
                    setTargetStep('practice');
                    if (typeof window !== 'undefined') window.location.hash = '#practice';
                  } else {
                    setSelectedLockedModule(modId.toUpperCase());
                    setUnlockModalOpen(true);
                  }
                }}
                onOpenProject={(modId) => {
                  playClick();
                  if (modId === 'python' || !modId) {
                    setSelectedModuleView('python');
                    setActiveTopicWs(1);
                    setTargetStep('code');
                    if (typeof window !== 'undefined') window.location.hash = '#code';
                  } else {
                    setSelectedLockedModule(modId.toUpperCase());
                    setUnlockModalOpen(true);
                  }
                }}
              />
            </div>
          </div>
        )}

        {/* ─── TAB 1: TOP-LEVEL 4-COURSE STUDENT DASHBOARD (#dashboard) ─── */}
        {dockTab === 'home' && selectedModuleView === null && (
          <div className="col-span-full">
            {/* Native Android Mobile Dashboard Feed (< 768px) */}
            <div className="md:hidden">
              <MobileDashboardHome
                userName={currentUserName}
                telemetry={telemetry}
                onStartPython={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('data_analyst');
                  if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
                }}
                onOpenDataAnalyst={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('data_analyst');
                  if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
                }}
                onOpenSql={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('sql');
                  if (typeof window !== 'undefined') window.location.hash = '#sql';
                }}
                onOpenExcel={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('excel');
                  if (typeof window !== 'undefined') window.location.hash = '#excel';
                }}
                onOpenPowerBi={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('powerbi');
                  if (typeof window !== 'undefined') window.location.hash = '#powerbi';
                }}
                onOpenGenAi={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('genai');
                  if (typeof window !== 'undefined') window.location.hash = '#genai';
                }}
                onOpenPlacement={() => {
                  playClick();
                  setSelectedModuleView(null);
                  setDockTab('placement');
                  if (typeof window !== 'undefined') window.location.hash = '#placement';
                }}
                onOpenArena={() => {
                  playClick();
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  setDockTab('game');
                  if (typeof window !== 'undefined') window.location.hash = '#game';
                }}
                onOpenEarn={() => {
                  playClick();
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  setDockTab('income');
                  if (typeof window !== 'undefined') window.location.hash = '#earnings';
                }}
                onOpenAdvisor={onOpenAdvisor}
                                onOpenLockedModule={(courseTitle) => {
                  handleOpenCourseDetail(courseTitle);
                }}
              />
            </div>

            {/* Desktop Courses Dashboard (>= 768px) */}
            <div className="hidden md:block">
              <StudentCoursesDashboard
                userName={userName}
                isNewStudentMode={isNewStudentMode}
                onOpenDataAnalystCourse={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('data_analyst');
                  if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
                }}
                onOpenLockedCourse={(courseTitle) => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('data_analyst');
                  if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
                }}
                onOpenPythonDirect={() => {
                  playClick();
                  setSelectedModuleView('python');
                  setActiveTopicWs(1);
                  setTargetStep('code');
                  if (typeof window !== 'undefined') window.location.hash = '#code?topic=1';
                }}
                onOpenMockInterview={() => {
                  playClick();
                  setSelectedModuleView('python');
                  setActiveTopicWs(1);
                  setTargetStep('interview');
                  if (typeof window !== 'undefined') window.location.hash = '#interview?topic=1';
                }}
                onOpenAdvisor={onOpenAdvisor}
                onOpenGameArena={() => {
                  playClick();
                  setSelectedModuleView('python_intro_game');
                  if (typeof window !== 'undefined') window.location.hash = '#coding_game';
                }}
              />
            </div>
          </div>
        )}

        {/* ─── TAB: GAME ARENA HUB (1:1 with media_1791313375552.jpg) ─── */}
        {dockTab === 'game' && selectedModuleView === null && (
          <div className="col-span-full">
            {/* Mobile (< 768px): Exact Match to Reference Image (media_1792498440204_03b1cee0.jpg) */}
            <div className="md:hidden">
              <MobileGameArenaHub
                userName={userName}
                onPlayPython={(topicId) => {
                  setIntroGameLevelId(topicId || 1);
                  setSelectedModuleView('python_intro_game');
                  if (typeof window !== 'undefined') window.location.hash = `#intro-game?level=${topicId || 1}`;
                }}
                onLockedGame={(gameName) => {
                  setSelectedLockedModule(gameName);
                  setUnlockModalOpen(true);
                }}
                onNavigateBack={() => {
                  setDockTab('home');
                  setSelectedModuleView(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                }}
                onOpenAdvisor={onOpenAdvisor}
                onOpenLogin={() => setAuthModalOpen(true)}
              />
            </div>

            {/* Desktop (>= 768px): GameArenaHub */}
            <div className="hidden md:block">
              <GameArenaHub
              userName={userName}
              isNewStudentMode={isNewStudentMode}
              onPlayPython={(topicId) => {
                if (topicId === 1 || topicId === 2) {
                  setIntroGameLevelId(topicId);
                  setSelectedModuleView('python_intro_game');
                  if (typeof window !== 'undefined') window.location.hash = `#intro-game?level=${topicId}`;
                } else {
                  setSelectedModuleView('python');
                  setActiveTopicWs(topicId || 1);
                  setTargetStep('play');
                  if (typeof window !== 'undefined') window.location.hash = '#play';
                }
              }}
              onLockedGame={(gameName) => {
                setSelectedLockedModule(gameName);
                setUnlockModalOpen(true);
              }}
              onNavigateTab={(tab) => {
                if (tab === 'home') {
                  setDockTab('home');
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                } else if (tab === 'placement') {
                  setDockTab('placement');
                  if (typeof window !== 'undefined') window.location.hash = '#placement';
                }
              }}
              onOpenAdvisor={onOpenAdvisor}
            />
            </div>
          </div>
        )}

        {/* ─── TAB: AFFILIATE PARTNER PROGRAM & MY EARNING HUB (1:1 with media_1791306323854.jpg) ─── */}
        {(dockTab === 'income' || dockTab === 'referral' || dockTab === 'wallet' || dockTab === 'withdraw') && (
          <div className="col-span-full">
            <AffiliateEarningsHub
              userName={userName}
              onNavigateTab={(tab) => {
                if (tab === 'home') {
                  setDockTab('home');
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                } else if (tab === 'game') {
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  setDockTab('game');
                  if (typeof window !== 'undefined') window.location.hash = '#game';
                } else if (tab === 'earning') {
                  setDockTab('income');
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  if (typeof window !== 'undefined') window.location.hash = '#earnings';
                } else if (tab === 'placement') {
                  setDockTab('placement');
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  if (typeof window !== 'undefined') window.location.hash = '#placement';
                }
              }}
            />
          </div>
        )}

        {/* ─── TAB: PLACEMENT & CAREER HUB (6 LPA - 15 LPA Guarantee) ─── */}
        {dockTab === 'placement' && (
          <div className="col-span-full">
            {/* Native Android Mobile Placement Portal (< 768px) */}
            <div className="md:hidden">
              <MobilePlacementHub
                userName={userName}
                onStartMockInterview={() => {
                  playClick();
                  setSelectedModuleView('python');
                  setActiveTopicWs(1);
                  setTargetStep('interview');
                  if (typeof window !== 'undefined') window.location.hash = '#interview';
                }}
                onPlayGames={() => {
                  playClick();
                  setSelectedModuleView('python');
                  setActiveTopicWs(1);
                  setTargetStep('play');
                  if (typeof window !== 'undefined') window.location.hash = '#play';
                }}
                onNavigateBack={() => {
                  playClick();
                  setDockTab('home');
                  setSelectedModuleView(null);
                  setActiveTopicWs(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                }}
                onOpenAdvisor={onOpenAdvisor}
              />
            </div>

            {/* Desktop Experience (>= 768px) */}
            <div className="hidden md:block dock-subview-container">
              {/* Header Card */}
              <div className="dock-view-header-card" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,247,255,0.95) 100%)' }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-slate-800 tracking-tight">Placement &amp; Career Hub</h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wider uppercase bg-emerald-500 text-white shadow-sm">
                      6 LPA – 15 LPA Guarantee
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    100% Placement Assistance • 700+ Hiring Partners • AI Mock Interviews • Pay ₹987 After Placement
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    playClick();
                    setSelectedModuleView('python');
                    setActiveTopicWs(1);
                    setTargetStep('interview');
                    if (typeof window !== 'undefined') window.location.hash = '#interview';
                  }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-black text-xs shadow-md shadow-sky-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start AI Mock Interview</span>
                </button>
              </div>
            </div>

            {/* 4 Stats Cards */}
            <div className="dock-sub-stats-grid">
              <div className="dock-stat-box">
                <span className="dock-stat-box-label">Target Package</span>
                <strong className="dock-stat-box-num text-slate-800">₹6 - 15 LPA</strong>
                <span className="text-[10px] font-semibold text-emerald-600">Pay ₹999 only after joining</span>
              </div>
              <div className="dock-stat-box">
                <span className="dock-stat-box-label">Hiring Partners</span>
                <strong className="dock-stat-box-num text-sky-600">150+ Companies</strong>
                <span className="text-[10px] font-semibold text-slate-400">MNCs, Startups &amp; Unicorns</span>
              </div>
              <div className="dock-stat-box">
                <span className="dock-stat-box-label">Placement Readiness</span>
                <strong className="dock-stat-box-num text-indigo-600">0% Ready</strong>
                <span className="text-[10px] font-semibold text-indigo-500">Complete Modules to Boost</span>
              </div>
              <div className="dock-stat-box">
                <span className="dock-stat-box-label">ATS Resume Score</span>
                <strong className="dock-stat-box-num text-emerald-600">0 / 100</strong>
                <span className="text-[10px] font-semibold text-slate-400">Scan Resume via ATS Tool</span>
              </div>
            </div>

            {/* ─── 5-STAGE REFERRED LEARNERS CAREER FUNNEL (Point 21 & 22) ─── */}
            <div className="dock-subview-panel mt-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  <div>
                    <strong className="text-sm font-black text-slate-800 block">Referred Learners Career Funnel</strong>
                    <span className="text-xs text-slate-500">Track career &amp; placement stages of learners joined through your referral link</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  3 Job Offers Secured (₹6 - 15 LPA)
                </span>
              </div>

              {/* Funnel Flow Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 mb-4">
                {[
                  { stage: 'Referred', count: 24, icon: '🔗', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                  { stage: 'Enrolled', count: 18, icon: '🎓', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
                  { stage: 'Training', count: 12, icon: '💻', color: 'bg-sky-50 border-sky-200 text-sky-700' },
                  { stage: 'Internship', count: 9, icon: '⚡', color: 'bg-amber-50 border-amber-200 text-amber-700' },
                  { stage: 'Interview', count: 7, icon: '🎤', color: 'bg-purple-50 border-purple-200 text-purple-700' },
                  { stage: 'Placed', count: 3, icon: '🏆', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
                ].map((st, idx) => (
                  <div key={st.stage} className={`p-3 rounded-xl border ${st.color} flex flex-col items-center text-center relative`}>
                    <span className="text-base mb-1">{st.icon}</span>
                    <strong className="text-lg font-black leading-tight">{st.count}</strong>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">{st.stage}</span>
                    {idx < 5 && (
                      <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-300 font-black z-10">›</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Student Placement Progress Table (Point 22) */}
              <div className="rounded-xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-50/80 px-4 py-2 border-b border-slate-100 flex justify-between items-center">
                  <strong className="text-xs font-bold text-slate-700">Referred Students Active Placement Status</strong>
                  <span className="text-[10px] text-slate-400 font-medium">Privacy Protected • Stage Progress Only</span>
                </div>
                <div className="divide-y divide-slate-100 text-xs">
                  {[
                    { student: 'Rahul V.', course: 'Data Analyst with GenAI', stage: 'Training (Module 4)', status: 'Active', badge: 'bg-sky-50 text-sky-700 border-sky-200' },
                    { student: 'Neha G.', course: 'Business Analytics (Power BI)', stage: 'AI Mock Interview', status: 'Active', badge: 'bg-purple-50 text-purple-700 border-purple-200' },
                    { student: 'Aman K.', course: 'Python Foundation Lab', stage: 'Hands-on Coding', status: 'Active', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
                    { student: 'Vikram M.', course: 'Data Analyst with GenAI', stage: 'Job Offer (₹9.5 LPA)', status: 'Completed', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                    { student: 'Divya N.', course: 'Data Analyst with GenAI', stage: 'Placed @ Infosys (₹8.5 LPA)', status: 'Completed', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                  ].map((row, i) => (
                    <div key={i} className="px-4 py-2.5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                          {row.student[0]}
                        </div>
                        <div>
                          <strong className="text-slate-800 block text-xs">{row.student}</strong>
                          <span className="text-[10px] text-slate-400">{row.course}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-slate-600">{row.stage}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${row.badge}`}>
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Split Content: Active Drives + Roadmap */}
            <div className="dock-subview-split mt-4">
              {/* Left Panel: Active Hiring Drives */}
              <div className="flex flex-col gap-4">
                <div className="dock-subview-panel">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <strong className="text-sm font-black text-slate-800 block">Featured Job Openings &amp; Placement Drives</strong>
                      <span className="text-xs text-slate-500">Exclusive roles curated for FUTURE IT INDUSTRY Tech &amp; Data learners</span>
                    </div>
                    <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg">
                      12 Drives Active Today
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    {[
                      {
                        title: 'Python & AI Engineer',
                        company: 'Swiggy / Tech Partner',
                        package: '₹8.5 – 12.0 LPA',
                        location: 'Bengaluru / Remote',
                        skills: ['Python', 'FastAPI', 'LLMs', 'Problem Solving'],
                        badge: 'High Match 94%'
                      },
                      {
                        title: 'Junior Data Analyst',
                        company: 'Fractal Analytics',
                        package: '₹6.5 – 9.0 LPA',
                        location: 'Hyderabad / Hybrid',
                        skills: ['Python', 'SQL', 'Data Cleaning', 'Power BI'],
                        badge: 'Immediate Join'
                      },
                      {
                        title: 'Full Stack Python Developer',
                        company: 'Tech Mahindra',
                        package: '₹7.0 – 11.0 LPA',
                        location: 'Pune / Noida',
                        skills: ['Python', 'Django/Flask', 'PostgreSQL', 'APIs'],
                        badge: 'Direct Drive'
                      },
                      {
                        title: 'AI Automation Specialist',
                        company: 'GrowthX Innovations',
                        package: '₹10.0 – 15.0 LPA',
                        location: 'Remote (Pan India)',
                        skills: ['GenAI', 'Python Scripting', 'API Integration'],
                        badge: 'Dream Role'
                      }
                    ].map((job, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-slate-100 hover:border-sky-300 hover:shadow-md transition-all bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-black text-sm text-slate-800">{job.title}</h4>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              {job.badge}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                            <span className="font-semibold text-slate-700">{job.company}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                            <span>•</span>
                            <span className="text-emerald-600 font-bold">{job.package}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {job.skills.map((sk) => (
                              <span key={sk} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center gap-2 sm:self-center">
                          <button
                            onClick={() => {
                              playClick();
                              setSelectedModuleView('python');
                              setActiveTopicWs(1);
                              setTargetStep('interview');
                              if (typeof window !== 'undefined') window.location.hash = '#interview';
                            }}
                            className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs shadow-sm transition-all whitespace-nowrap cursor-pointer"
                          >
                            Practice Mock →
                          </button>
                          <span className="text-[10px] text-slate-400 font-medium">Eligible &amp; Ready</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Col: Placement Pipeline Roadmap & NOVA Tips */}
              <div className="flex flex-col gap-4">
                <div className="dock-subview-panel">
                  <strong className="text-sm font-black text-slate-800 block mb-2">4-Step Placement Roadmap</strong>
                  <div className="flex flex-col gap-3">
                    {[
                      { step: '1', title: 'Python & Foundation Mastery', status: 'Completed', color: 'bg-emerald-500' },
                      { step: '2', title: '5-Level Coding Game & Projects', status: 'In Progress (Level 4)', color: 'bg-sky-500' },
                      { step: '3', title: 'NOVA AI Mock Interview Clearance', status: 'Next Step', color: 'bg-amber-500' },
                      { step: '4', title: 'Direct Partner Hiring & Offer Letter', status: 'Locked', color: 'bg-slate-300' }
                    ].map((st) => (
                      <div key={st.step} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full ${st.color} text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5`}>
                          {st.step}
                        </div>
                        <div>
                          <strong className="text-xs text-slate-800 block leading-tight">{st.title}</strong>
                          <span className="text-[10px] font-bold text-slate-400">{st.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      playClick();
                      setSelectedModuleView('python');
                      setActiveTopicWs(1);
                      setTargetStep('play');
                      if (typeof window !== 'undefined') window.location.hash = '#play';
                    }}
                    className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Gamepad2 className="w-4 h-4" />
                    <span>Level Up with Python Games →</span>
                  </button>
                </div>

                <div className="dock-subview-panel">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Sparkles className="w-4 h-4" />
                    <strong className="text-xs font-black text-slate-800">Placement Guarantee Terms</strong>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1">
                    Zero upfront fees for training! You only pay the nominal ₹999 platform fee once you receive your offer letter of ₹6 LPA or above.
                  </p>
                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>100% Refundable Guarantee</span>
                    <span className="text-emerald-600">Verified ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )}

      </div>

      {/* =========================================================================
          3. NAVIGATION: LIQUID DOCK ON DESKTOP & NATIVE ANDROID BOTTOM BAR ON MOBILE
          ========================================================================= */}
      {/* Desktop (>= 768px): 8-Section Liquid Floating Glass Dock */}
      <div className="hidden md:block">
        <LiquidFloatingNavBar
          activeTab={
            selectedModuleView === 'data_analyst' || selectedModuleView === 'python' || selectedModuleView === 'sql' || selectedModuleView === 'excel' || selectedModuleView === 'powerbi' || selectedModuleView === 'stats' || selectedModuleView === 'genai'
              ? 'learning'
              : dockTab === 'game'
              ? 'coding_game'
              : dockTab === 'income' || dockTab === 'referral' || dockTab === 'wallet' || dockTab === 'withdraw'
              ? 'earning'
              : dockTab === 'placement'
              ? 'placement'
              : 'dashboard'
          }
          onSelectTab={(tabId) => {
            if (tabId === 'dashboard') {
              setDockTab('home');
              setSelectedModuleView(null);
              setActiveTopicWs(null);
              if (typeof window !== 'undefined') window.location.hash = '#dashboard';
            } else if (tabId === 'learning') {
              setDockTab('home');
              setSelectedModuleView('data_analyst');
              setActiveTopicWs(null);
              if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
            } else if (tabId === 'earning') {
              setSelectedModuleView(null);
              setActiveTopicWs(null);
              setDockTab('income');
              if (typeof window !== 'undefined') window.location.hash = '#earnings';
            } else if (tabId === 'coding_game') {
              setSelectedModuleView(null);
              setActiveTopicWs(null);
              setDockTab('game');
              if (typeof window !== 'undefined') window.location.hash = '#game';
            } else if (tabId === 'industrial_training' || tabId === 'internship' || tabId === 'job' || tabId === 'placement') {
              setLockedSectionTarget(tabId === 'industrial_training' ? 'Industrial Training' : tabId === 'internship' ? 'Internship' : 'Placement & Job Assistance');
              setPlacementLockOpen(true);
            }
          }}
          onOpenLockedModal={(featureTitle) => {
            setLockedSectionTarget(featureTitle);
            setPlacementLockOpen(true);
          }}
        />
      </div>

      {/* Mobile (< 768px): Native Android 5-Tab Bottom Navigation Bar */}
      <div className="md:hidden">
        <MobileBottomNav
          currentTab={currentMobileTab}
          onSelectTab={handleMobileTabSelect}
          unreadEarnBadge={true}
        />
      </div>

      {/* Android Mobile Profile Bottom Sheet Dialog */}
      <MobileProfileSheet
        isOpen={mobileProfileSheetOpen}
        onClose={() => setMobileProfileSheetOpen(false)}
        userName={currentUserName}
        telemetry={telemetry}
        onLogout={onLogout}
        onOpenEarn={() => {
          setSelectedModuleView(null);
          setActiveTopicWs(null);
          setDockTab('income');
          if (typeof window !== 'undefined') window.location.hash = '#earnings';
        }}
        onOpenPlacement={() => {
          setSelectedModuleView(null);
          setActiveTopicWs(null);
          setDockTab('placement');
          if (typeof window !== 'undefined') window.location.hash = '#placement';
        }}
        onOpenLogin={() => setAuthModalOpen(true)}
        onOpenAdvisor={onOpenAdvisor}
      />

      {/* ─── REACT FRONT END & FULL CURRICULUM MODAL ─── */}
      <CurriculumModal
        isOpen={curriculumModalOpen}
        onClose={() => setCurriculumModalOpen(false)}
        onEnroll={() => {
          setCurriculumModalOpen(false);
          setSelectedModuleView('data_analyst');
          if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
        }}
      />

      {/* Course Detail Popup Modal: Headline, Subject Covered, Course Content, Download Syllabus & Unlock Now Rs 987 */}
      <CourseDetailPopupModal
        isOpen={Boolean(selectedDetailCourseId)}
        courseId={selectedDetailCourseId || 'react-frontend-dev'}
        onClose={() => setSelectedDetailCourseId(null)}
        onUnlock={() => {
          const cId = selectedDetailCourseId || 'course';
          setSelectedDetailCourseId(null);
          setSelectedLockedModule(cId.toUpperCase());
          setUnlockModalOpen(true);
        }}
      />

      {/* ─── WALLET WITHDRAWAL MODAL (CENTER POPUP) ─── */}
      <WalletWithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        onSuccess={() => setTelemetry(getLearnerTelemetry())}
      />

      {/* ─── EMAIL-ONLY / GOOGLE AUTH MODAL ─── */}
      <FutureAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      {/* ─── LEARNING MODULES PROGRESS MODAL (1:1 with media_1791557550984.jpg) ─── */}
      <LearningModulesProgressModal
        isOpen={placementLockOpen}
        onClose={() => setPlacementLockOpen(false)}
        targetFeature={lockedSectionTarget}
        onGoToModules={() => {
          goToLearningModules();
        }}
        onNavigateToModule={(modId) => {
          if (modId === 'python') {
            setSelectedModuleView('python');
            if (typeof window !== 'undefined') window.location.hash = '#python';
          } else {
            setSelectedLockedModule(modId.toUpperCase());
            setUnlockModalOpen(true);
          }
        }}
        initialPythonCompleted={false}
      />


      {/* ₹987 Pay to Unlock Modal — Real PayU Payment */}
      <PayToUnlockModal
        isOpen={unlockModalOpen}
        onClose={() => setUnlockModalOpen(false)}
        targetModuleName={selectedLockedModule}
        courseId={selectedLockedModule.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
        courseTitle={selectedLockedModule}
        price={987}
        onSimulateUnlock={() => {
          setIsNewStudentMode(false);
          alert('🎉 Congratulations! All 10 Modules have been unlocked in your dashboard.');
        }}
      />

      {/* 3D Floating Luminous Blue Marble Sphere (Bottom Left - media_1791029953384.jpg) */}
      <div className="hidden md:block dock-floating-sphere-bl" />

    </div>
  );
};
