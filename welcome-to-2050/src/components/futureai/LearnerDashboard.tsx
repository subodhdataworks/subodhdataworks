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
  Code2,
  Trophy,
  Settings
} from 'lucide-react';
import { FutureLogo } from './FutureLogo';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import { PayToUnlockModal } from './PayToUnlockModal';
import { isCourseUnlocked, isAnyCourseUnlocked } from '../../services/courseUnlockService';
import { PythonChapterView } from './PythonChapterView';
import { SqlChapterView } from './SqlChapterView';
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
import { CodingPracticeMasterHub } from './CodingPracticeMasterHub';
import { PythonChallengesPracticeHub } from './PythonChallengesPracticeHub';
import { SqlChallengesPracticeHub } from './SqlChallengesPracticeHub';
import { ExcelChallengesPracticeHub } from './ExcelChallengesPracticeHub';
import { LearnerHomeHub } from './LearnerHomeHub';
import { DataAnalystGenAiHub } from './DataAnalystGenAiHub';
import { DataScienceAgenticAiHub } from './DataScienceAgenticAiHub';
import { MlEngineeringHub } from './MlEngineeringHub';
import { AiEngineeringHub } from './AiEngineeringHub';
import { AiToolsPromptHub } from './AiToolsPromptHub';
import { MsOfficeCopilotHub } from './MsOfficeCopilotHub';
import { FullStackMernHub } from './FullStackMernHub';
import { StudentCoursesDashboard } from './StudentCoursesDashboard';
import { PythonIntroGameWorkspace } from './PythonIntroGameWorkspace';
import { LearningModulesProgressModal } from './LearningModulesProgressModal';
import { getLearnerTelemetry } from '../../services/realAuthService';
import { FutureAuthModal } from './FutureAuthModal';
import { WalletWithdrawModal } from './WalletWithdrawModal';
import { CurriculumModal } from './CurriculumModal';
import { CourseDetailPopupModal } from './CourseDetailPopupModal';
import { SuccessPlanModal } from './SuccessPlanModal';
import { FutureAdvancedHeader } from './FutureAdvancedHeader';
import { AtsResumeCheckerModal } from './AtsResumeCheckerModal';

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
  isLoggedIn?: boolean;
  onOpenLogin?: () => void;
  onLogout?: () => void;
  onOpenAdvisor?: () => void;
  onLoginSuccess?: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
}

export const LearnerDashboard: React.FC<LearnerDashboardProps> = ({
  userName = '',
  isLoggedIn = false,
  onOpenLogin,
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
    const raw = (courseIdOrTitle || '').trim();
    setSelectedLockedModule(raw || 'Data Analyst with GenAI');
    setSelectedDetailCourseId(null);
    setUnlockModalOpen(true);
  };
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [currentUserName, setCurrentUserName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('futureai_user_name');
      if (stored && stored !== 'Learner' && stored !== 'Subodh Kumar' && stored !== 'Student') {
        return stored;
      }
      return userName && userName !== 'Learner' && userName !== 'Subodh Kumar' && userName !== 'Student' ? userName : '';
    }
    return userName && userName !== 'Learner' && userName !== 'Subodh Kumar' && userName !== 'Student' ? userName : '';
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



  const [dockTab, setDockTab] = useState<'home' | 'game' | 'income' | 'referral' | 'wallet' | 'withdraw' | 'placement'>(() => {
    if (typeof window !== 'undefined') {
      const h = window.location.hash;
      if (h === '#game' || h === '#games' || h === '#arena' || h === '#gamearena' || h.startsWith('#python-challenges') || h.startsWith('#pythonchallenges') || h.startsWith('#sql-challenges') || h.startsWith('#sqlchallenges')) return 'game';
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
  const [isAtsResumeModalOpen, setIsAtsResumeModalOpen] = useState(false);

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

  // Student Enrollment State & Real Course Unlock Synchronization
  const [isNewStudentMode, setIsNewStudentMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      if (isCourseUnlocked('data_analyst') || isAnyCourseUnlocked()) {
        return false;
      }
    }
    return true;
  });

  // Keep enrollment state synced when courses are unlocked
  useEffect(() => {
    const handleUnlockSync = () => {
      setIsNewStudentMode(false);
    };
    window.addEventListener('futureai_course_unlocked', handleUnlockSync);
    return () => window.removeEventListener('futureai_course_unlocked', handleUnlockSync);
  }, []);
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
  const [selectedModuleView, setSelectedModuleView] = useState<'data_analyst' | 'data_science' | 'ml_engineering' | 'ai_engineering' | 'ai_tools_prompt' | 'ms_office_copilot' | 'full_stack_mern' | 'python' | 'python_intro_game' | 'python_challenges' | 'sql_challenges' | 'excel_challenges' | 'sql' | 'excel' | 'powerbi' | 'stats' | 'genai' | null>(() => {
    if (typeof window !== 'undefined') {
      const h = window.location.hash;
      const baseH = h.split('?')[0];
      if (baseH === '#data-analyst' || baseH === '#data-analytics') {
        return 'data_analyst';
      }
      if (baseH === '#data-science' || baseH === '#data-science-agentic-ai' || baseH === '#datascience') {
        return 'data_science';
      }
      if (baseH === '#ml-engineering' || baseH === '#mlengineering' || baseH === '#ml-eng' || baseH === '#ml') {
        return 'ml_engineering';
      }
      if (baseH === '#ai-engineering' || baseH === '#aiengineering' || baseH === '#ai-eng' || baseH === '#ai') {
        return 'ai_engineering';
      }
      if (baseH === '#intro-game' || baseH === '#intro-games' || baseH === '#pyintro') {
        return 'python_intro_game';
      }
      if (baseH === '#sql') {
        return 'sql';
      }
      if (baseH === '#excel') {
        return 'python';
      }
      if (baseH === '#powerbi') {
        return 'powerbi';
      }
      if (baseH === '#python-challenges' || baseH === '#pythonchallenges') {
        return 'python_challenges';
      }
      if (baseH === '#sql-challenges' || baseH === '#sqlchallenges') {
        return 'sql_challenges';
      }
      if (baseH === '#excel-challenges' || baseH === '#excelchallenges') {
        return 'excel_challenges';
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

  // Disable browser auto scroll restoration so every page open starts at top (0, 0)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Always scroll to top upon any tab, module view, or topic workspace transition
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const dockPage = document.querySelector('.dock-dashboard-page');
      if (dockPage) dockPage.scrollTop = 0;
      const mainContainer = document.querySelector('.dock-main-container');
      if (mainContainer) mainContainer.scrollTop = 0;
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    }
  }, [dockTab, selectedModuleView, activeTopicWs]);

  // Sync hash changes
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        const dockPage = document.querySelector('.dock-dashboard-page');
        if (dockPage) dockPage.scrollTop = 0;
        const mainContainer = document.querySelector('.dock-main-container');
        if (mainContainer) mainContainer.scrollTop = 0;
        requestAnimationFrame(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        });
      }
      const h = window.location.hash;
      const baseH = h.split('?')[0];
      if (baseH === '#data-analyst' || baseH === '#data-analytics') {
        setSelectedModuleView('data_analyst');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#data-science' || baseH === '#data-science-agentic-ai' || baseH === '#datascience') {
        setSelectedModuleView('data_science');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#ml-engineering' || baseH === '#mlengineering' || baseH === '#ml-eng' || baseH === '#ml') {
        setSelectedModuleView('ml_engineering');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#ai-engineering' || baseH === '#aiengineering' || baseH === '#ai-eng' || baseH === '#ai') {
        setSelectedModuleView('ai_engineering');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#full-stack' || baseH === '#fullstack' || baseH === '#fullstack-mern') {
        setSelectedModuleView('full_stack_mern');
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
      } else if (baseH === '#python-challenges' || baseH === '#pythonchallenges') {
        setSelectedModuleView('python_challenges');
        setActiveTopicWs(null);
        setDockTab('game');
      } else if (baseH === '#sql-challenges' || baseH === '#sqlchallenges') {
        setSelectedModuleView('sql_challenges');
        setActiveTopicWs(null);
        setDockTab('game');
      } else if (baseH === '#excel-challenges' || baseH === '#excelchallenges') {
        setSelectedModuleView('excel_challenges');
        setActiveTopicWs(null);
        setDockTab('game');
      } else if (baseH === '#game' || baseH === '#games' || baseH === '#arena' || baseH === '#gamearena' || baseH === '#practice' || baseH === '#codingpractice' || baseH === '#coding-practice') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('game');
      } else if (baseH === '#income' || baseH === '#earnings' || baseH === '#myearnings' || baseH === '#myearning' || baseH === '#earning') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('income');
      } else if (baseH === '#placement' || baseH === '#jobs' || baseH === '#placements') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setLockedSectionTarget('Placement');
        setPlacementLockOpen(true);
      } else if (baseH === '#internship' || baseH === '#internships') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setLockedSectionTarget('Internship');
        setPlacementLockOpen(true);
      } else if (baseH === '#certificate' || baseH === '#certificates') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setLockedSectionTarget('Certificate');
        setPlacementLockOpen(true);
      } else if (baseH === '#recommendation' || baseH === '#recommendations' || baseH === '#lor') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setLockedSectionTarget('Recommendation Letter');
        setPlacementLockOpen(true);
      } else if (baseH === '#referral') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('referral');
      } else if (baseH === '#wallet') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('wallet');
      } else if (baseH === '#withdraw') {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('withdraw');
      } else if (baseH === '#dashboard' || baseH === '#courses' || baseH === '#home' || !baseH) {
        setSelectedModuleView(null);
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (['#mcq','#play','#codequest','#workspace','#code','#codepractice','#interview','#mockinterview','#score','#scorecard','#learn','#video'].includes(baseH)) {
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
        setActiveTopicWs(1);
        setTargetStep('learn');
        setDockTab('home');
      } else if (baseH === '#sql') {
        setSelectedModuleView('sql');
        setActiveTopicWs(null);
        setDockTab('home');
      } else if (baseH === '#excel') {
        setSelectedModuleView('python');
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
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
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
      benefits: ['Video Lessons', 'Hands-on Hackathon/DSA Practice', 'Quizzes & Mini Projects', 'Real-world Datasets'],
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
      setSelectedModuleView('python');
      if (typeof window !== 'undefined') window.location.hash = '#python';
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
      setSelectedModuleView('python');
      if (typeof window !== 'undefined') window.location.hash = '#python';
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
        <div className="py-intro-game-view-container">
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
            price={9}
            onSimulateUnlock={() => {
              setIsNewStudentMode(false);
              setUnlockModalOpen(false);
            }}
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
  if (selectedModuleView === 'python') {
    return (
      <div className="relative dock-dashboard-page">
        <PythonTopicWorkspace
          userName={userName}
          topicId={activeTopicWs || 1}
          initialStep={targetStep}
          onBack={() => {
            setSelectedModuleView('data_analyst');
            setActiveTopicWs(null);
            setTargetStep('learn');
            if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
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
          price={9}
          onSimulateUnlock={() => {
            setIsNewStudentMode(false);
            setUnlockModalOpen(false);
          }}
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
      
{/* ─── ULTRA-ADVANCED NEW HEADER (Exact 1:1 Reference media_1792902949292_fb98d943.png) ─── */}
      <FutureAdvancedHeader
        isLoggedIn={isLoggedIn}
        userName={currentUserName || userName}
        onOpenLogin={onOpenLogin}
        onOpenSignUp={onOpenLogin}
        activeNavTab={
          isAtsResumeModalOpen
            ? 'ats'
            : dockTab === 'placement'
            ? 'placement'
            : dockTab === 'income' || dockTab === 'referral' || dockTab === 'wallet' || dockTab === 'withdraw'
            ? 'earn'
            : dockTab === 'game' || selectedModuleView === 'python_challenges' || selectedModuleView === 'sql_challenges' || selectedModuleView === 'excel_challenges'
            ? 'practice'
            : selectedModuleView !== null
            ? 'learning'
            : 'home'
        }
        onNavigateHome={() => {
          setDockTab('home');
          setSelectedModuleView(null);
          setActiveTopicWs(null);
          if (typeof window !== 'undefined') window.location.hash = '#dashboard';
        }}
        onNavigateLearning={() => {
          setDockTab('home');
          setSelectedModuleView('data_analyst');
          setActiveTopicWs(null);
          if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
        }}
        onNavigatePractice={(track) => {
          if (track === 'python') {
            setSelectedModuleView('python_challenges');
            setActiveTopicWs(null);
            if (typeof window !== 'undefined') window.location.hash = '#python-challenges';
          } else if (track === 'sql') {
            setSelectedModuleView('sql_challenges');
            setActiveTopicWs(null);
            if (typeof window !== 'undefined') window.location.hash = '#sql-challenges';
          } else if (track === 'excel') {
            setSelectedModuleView('excel_challenges');
            setActiveTopicWs(null);
            if (typeof window !== 'undefined') window.location.hash = '#excel-challenges';
          } else {
            setSelectedModuleView(null);
            setActiveTopicWs(null);
            setDockTab('game');
            if (typeof window !== 'undefined') window.location.hash = '#game';
          }
        }}
        onOpenAtsResume={() => {
          if (typeof window !== 'undefined') window.location.hash = '#ats';
        }}
        onNavigateEarn={() => {
          setSelectedModuleView(null);
          setActiveTopicWs(null);
          setDockTab('income');
          if (typeof window !== 'undefined') window.location.hash = '#income';
        }}
        onNavigateInternship={() => {
          setLockedSectionTarget('Internship');
          setPlacementLockOpen(true);
        }}
        onNavigatePlacement={() => {
          if (isPlacementLocked) {
            setLockedSectionTarget('Placement');
            setPlacementLockOpen(true);
          } else {
            setSelectedModuleView(null);
            setActiveTopicWs(null);
            setDockTab('placement');
            if (typeof window !== 'undefined') window.location.hash = '#placement';
          }
        }}
        onNavigateCertificate={() => {
          setSelectedModuleView(null);
          setActiveTopicWs(null);
          setLockedSectionTarget('Certificate');
          setPlacementLockOpen(true);
        }}
        onNavigateRecommendation={() => {
          setSelectedModuleView(null);
          setActiveTopicWs(null);
          setLockedSectionTarget('Recommendation Letter');
          setPlacementLockOpen(true);
        }}
        onOpenHelp={() => {
          if (onOpenAdvisor) onOpenAdvisor();
          else window.location.hash = '#contact-us';
        }}
        onOpenContact={() => {
          window.location.hash = '#contact-us';
        }}
        onOpenWallet={() => setIsWithdrawModalOpen(true)}
        onLogout={onLogout}
      />

            {/* =========================================================================
          2. MAIN DASHBOARD CONTENT GRID (media_1790998423618.jpg)
          ========================================================================= */}
      <div className="dock-main-container">

{/* PythonChapterView removed as requested - direct workspace access */}

        {/* ─── TAB: SQL COURSE CHAPTER VIEW ─── */}
        {dockTab === 'home' && selectedModuleView === 'sql' && (
          <div className="col-span-full">
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
        )}

        {/* ExcelChapterView removed as requested - direct workspace access */}

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
            <DataAnalystGenAiHub
                userName={currentUserName || userName}
                onBack={() => {
                  playClick();
                  setSelectedModuleView(null);
                  if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                }}
                onStartTopic={(topicId, title, step = 'learn') => {
                  playClick();
                  const numericTopicId = parseInt(topicId.replace(/\D/g, ''), 10) || 1;

                  if (topicId.startsWith('t-7') || topicId.startsWith('t-8') || topicId.startsWith('t-9')) {
                    playCinema();
                    setSelectedModuleView('sql');
                    if (typeof window !== 'undefined') window.location.hash = '#sql';
                  } else if (topicId.startsWith('t-13') || topicId.startsWith('t-14') || topicId.startsWith('t-15')) {
                    playCinema();
                    setSelectedModuleView('powerbi');
                    if (typeof window !== 'undefined') window.location.hash = '#powerbi';
                  } else if (topicId.startsWith('t-16') || topicId.startsWith('t-17') || topicId.startsWith('t-18')) {
                    playCinema();
                    setSelectedModuleView('genai');
                    if (typeof window !== 'undefined') window.location.hash = '#genai';
                  } else {
                    playCinema();
                    setSelectedModuleView('python');
                    setActiveTopicWs(numericTopicId);
                    setTargetStep(step as any);
                    if (typeof window !== 'undefined') window.location.hash = `#${step}?topic=${numericTopicId}`;
                  }
                }}
              />
          </div>
        )}


        {/* ─── COURSE 02 SUB-HUB: DATA SCIENCE & AGENTIC AI (#data-science) ─── */}
        {dockTab === 'home' && selectedModuleView === 'data_science' && (
          <div className="col-span-full">
            <DataScienceAgenticAiHub
              userName={currentUserName || userName}
              onBack={() => {
                playClick();
                setSelectedModuleView(null);
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              onStartTopic={(topicId, title, step = 'learn') => {
                playClick();
                playCinema();
                const numericTopicId = parseInt(topicId.replace(/\D/g, ''), 10) || 1;
                setSelectedModuleView('python');
                setActiveTopicWs(numericTopicId);
                setTargetStep(step as any);
                if (typeof window !== 'undefined') window.location.hash = `#${step}?topic=${numericTopicId}&tab=2`;
              }}
            />
          </div>
        )}

        
        {/* ─── COURSE 03 SUB-HUB: MACHINE LEARNING ENGINEERING (#ml-engineering) ─── */}
        {dockTab === 'home' && selectedModuleView === 'ml_engineering' && (
          <div className="col-span-full">
            <MlEngineeringHub
              userName={currentUserName || userName}
              onBack={() => {
                playClick();
                setSelectedModuleView(null);
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              onStartTopic={(topicId, title, step = 'learn') => {
                playClick();
                playCinema();
                const numericTopicId = parseInt(topicId.replace(/\D/g, ''), 10) || 1;
                setSelectedModuleView('python');
                setActiveTopicWs(numericTopicId);
                setTargetStep(step as any);
                if (typeof window !== 'undefined') window.location.hash = `#${step}?topic=${numericTopicId}&tab=3`;
              }}
            />
          </div>
        )}

        
        {/* ─── COURSE 04 SUB-HUB: AI ENGINEERING (#ai-engineering) ─── */}
        {dockTab === 'home' && selectedModuleView === 'ai_engineering' && (
          <div className="col-span-full">
            <AiEngineeringHub
              userName={currentUserName || userName}
              onBack={() => {
                playClick();
                setSelectedModuleView(null);
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              onStartTopic={(topicId, title, step = 'learn') => {
                playClick();
                playCinema();
                const numericTopicId = parseInt(topicId.replace(/\D/g, ''), 10) || 1;
                setSelectedModuleView('python');
                setActiveTopicWs(numericTopicId);
                setTargetStep(step as any);
                if (typeof window !== 'undefined') window.location.hash = `#${step}?topic=${numericTopicId}&tab=4`;
              }}
            />
          </div>
        )}

        
        {/* ─── COURSE 06 SUB-HUB: AI TOOLS & PROMPT ENGINEERING (#ai-tools-prompt) ─── */}
        {dockTab === 'home' && selectedModuleView === 'ai_tools_prompt' && (
          <div className="col-span-full">
            <AiToolsPromptHub
              userName={currentUserName || userName}
              onBack={() => {
                playClick();
                setSelectedModuleView(null);
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              onStartTopic={(topicId, title, step = 'learn') => {
                playClick();
                playCinema();
                const numericTopicId = parseInt(topicId.replace(/\D/g, ''), 10) || 1;
                setSelectedModuleView('python');
                setActiveTopicWs(numericTopicId);
                setTargetStep(step as any);
                if (typeof window !== 'undefined') window.location.hash = `#${step}?topic=${numericTopicId}&tab=5`;
              }}
            />
          </div>
        )}

        
        {/* ─── COURSE 07 SUB-HUB: MICROSOFT 365 WITH COPILOT AI (#ms-office-copilot) ─── */}
        {dockTab === 'home' && selectedModuleView === 'ms_office_copilot' && (
          <div className="col-span-full">
            <MsOfficeCopilotHub
              userName={currentUserName || userName}
              onBack={() => {
                playClick();
                setSelectedModuleView(null);
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              onStartTopic={(topicId, title, step = 'learn') => {
                playClick();
                playCinema();
                const numericTopicId = parseInt(topicId.replace(/\D/g, ''), 10) || 1;
                setSelectedModuleView('python');
                setActiveTopicWs(numericTopicId);
                setTargetStep(step as any);
                if (typeof window !== 'undefined') window.location.hash = `#${step}?topic=${numericTopicId}&tab=6`;
              }}
            />
          </div>
        )}

        {/* ─── COURSE 08 SUB-HUB: FULL-STACK MERN DEVELOPMENT WITH AI (#full-stack-web-dev) ─── */}
        {dockTab === 'home' && selectedModuleView === 'full_stack_mern' && (
          <div className="col-span-full">
            <FullStackMernHub
              userName={currentUserName || userName}
              onBack={() => {
                playClick();
                setSelectedModuleView(null);
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              onStartTopic={(topicId, title, step = 'learn') => {
                playClick();
                playCinema();
                const numericTopicId = parseInt(topicId.replace(/\D/g, ''), 10) || 1;
                setSelectedModuleView('python');
                setActiveTopicWs(numericTopicId);
                setTargetStep(step as any);
                if (typeof window !== 'undefined') window.location.hash = `#${step}?topic=${numericTopicId}&tab=7`;
              }}
            />
          </div>
        )}

        {/* ─── TAB 1: TOP-LEVEL 4-COURSE STUDENT DASHBOARD (#dashboard) ─── */}
        {dockTab === 'home' && selectedModuleView === null && (
          <div className="col-span-full">
            <StudentCoursesDashboard
                userName={userName}
                isNewStudentMode={isNewStudentMode}
                onOpenDataAnalystCourse={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('data_analyst');
                  if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
                }}
                onOpenDataScienceCourse={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('data_science');
                  if (typeof window !== 'undefined') window.location.hash = '#data-science';
                }}
                onOpenMlEngineeringCourse={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('ml_engineering');
                  if (typeof window !== 'undefined') window.location.hash = '#ml-engineering';
                }}
                onOpenAiEngineeringCourse={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('ai_engineering');
                  if (typeof window !== 'undefined') window.location.hash = '#ai-engineering';
                }}
                onOpenAiToolsPromptCourse={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('ai_tools_prompt');
                  if (typeof window !== 'undefined') window.location.hash = '#ai-tools-prompt';
                }}
                onOpenMsOfficeCopilotCourse={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('ms_office_copilot');
                  if (typeof window !== 'undefined') window.location.hash = '#ms-office-copilot';
                }}
                onOpenFullStackMernCourse={() => {
                  playClick();
                  playCinema();
                  setSelectedModuleView('full_stack_mern');
                  if (typeof window !== 'undefined') window.location.hash = '#full-stack-web-dev';
                }}
                onOpenLockedCourse={(courseTitle) => {
                  playClick();
                  handleOpenCourseDetail(courseTitle);
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
        )}

        {/* ─── TAB: CODING PRACTICE MASTER HUB (Exact 1:1 with media_1792862844688_4a7e1cf6.jpg) ─── */}
        {dockTab === 'game' && selectedModuleView === null && (
          <div className="col-span-full">
            <CodingPracticeMasterHub
              userName={userName}
              isEnrolled={!isNewStudentMode || isCourseUnlocked('data_analyst') || isAnyCourseUnlocked()}
              isLoggedIn={isLoggedIn}
              onOpenLogin={() => setAuthModalOpen(true)}
              onNavigateToCourses={() => {
                setDockTab('home');
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                if (typeof window !== 'undefined') window.location.hash = '#courses';
              }}
              onUnlockAll={() => {
                setIsNewStudentMode(false);
                if (typeof window !== 'undefined') {
                  setUnlockModalOpen(true);
                }
              }}
              onOpenPython={(topicId) => {
                setSelectedModuleView('python_challenges');
                setActiveTopicWs(null);
                if (typeof window !== 'undefined') window.location.hash = '#python-challenges';
              }}
              onOpenSql={() => {
                setSelectedModuleView('sql_challenges');
                setActiveTopicWs(null);
                if (typeof window !== 'undefined') window.location.hash = '#sql-challenges';
              }}
              onOpenExcel={() => {
                setSelectedModuleView('excel_challenges');
                setActiveTopicWs(null);
                if (typeof window !== 'undefined') window.location.hash = '#excel-challenges';
              }}
              onOpenDataAnalyst={() => {
                setSelectedModuleView('data_analyst');
                setActiveTopicWs(1);
                if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
              }}
              onOpenDataScience={() => {
                setSelectedModuleView('data_science');
                setActiveTopicWs(1);
                if (typeof window !== 'undefined') window.location.hash = '#data-science';
              }}
              onOpenMlEngineering={() => {
                setSelectedModuleView('ml_engineering');
                setActiveTopicWs(1);
                if (typeof window !== 'undefined') window.location.hash = '#ml-engineering';
              }}
              onOpenAiEngineering={() => {
                setSelectedModuleView('ai_engineering');
                setActiveTopicWs(1);
                if (typeof window !== 'undefined') window.location.hash = '#ai-engineering';
              }}
              onOpenFullStack={() => {
                setSelectedModuleView('full_stack_mern');
                setActiveTopicWs(1);
                if (typeof window !== 'undefined') window.location.hash = '#full-stack';
              }}
              onOpenGenericPractice={(courseName) => {
                alert(`🚀 ${courseName} Practice is active! Jump directly into hands-on code challenges.`);
              }}
              onOpenAdvisor={onOpenAdvisor}
            />
          </div>
        )}

        {/* ─── TAB: PYTHON CODING PRACTICE CHALLENGES (Exact 1:1 with media_1792864596408_8910eb47.png) ─── */}
        {selectedModuleView === 'python_challenges' && (
          <div className="col-span-full">
            <PythonChallengesPracticeHub
              userName={userName}
              isEnrolled={!isNewStudentMode || isCourseUnlocked('data_analyst') || isAnyCourseUnlocked()}
              onNavigateToCourses={() => {
                setDockTab('home');
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                if (typeof window !== 'undefined') window.location.hash = '#courses';
              }}
              onUnlockAll={() => {
                setIsNewStudentMode(false);
                if (typeof window !== 'undefined') {
                  setUnlockModalOpen(true);
                }
              }}
              onBackToPractice={() => {
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                setDockTab('game');
                if (typeof window !== 'undefined') window.location.hash = '#game';
              }}
              onBackToDashboard={() => {
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                setDockTab('home');
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              onSolveChallenge={(challengeId, title) => {
                setSelectedModuleView('python');
                setActiveTopicWs(challengeId || 1);
                setTargetStep('play');
                if (typeof window !== 'undefined') window.location.hash = `#python?topic=${challengeId || 1}`;
              }}
            />
          </div>
        )}

        {/* ─── TAB: SQL CODING PRACTICE CHALLENGES (Exact 1:1 with Reference Design) ─── */}
        {selectedModuleView === 'sql_challenges' && (
          <div className="col-span-full">
            <SqlChallengesPracticeHub
              userName={userName}
              isEnrolled={!isNewStudentMode || isCourseUnlocked('data_analyst') || isAnyCourseUnlocked()}
              onNavigateToCourses={() => {
                setDockTab('home');
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                if (typeof window !== 'undefined') window.location.hash = '#courses';
              }}
              onUnlockAll={() => {
                setIsNewStudentMode(false);
                if (typeof window !== 'undefined') {
                  setUnlockModalOpen(true);
                }
              }}
              onBackToPractice={() => {
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                setDockTab('game');
                if (typeof window !== 'undefined') window.location.hash = '#game';
              }}
              onBackToDashboard={() => {
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                setDockTab('home');
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              onSolveChallenge={(challengeId, title) => {
                // Handled in arena
              }}
            />
          </div>
        )}

        {/* ─── TAB: EXCEL CODING PRACTICE CHALLENGES ─── */}
        {selectedModuleView === 'excel_challenges' && (
          <div className="col-span-full">
            <ExcelChallengesPracticeHub
              userName={userName}
              isEnrolled={!isNewStudentMode || isCourseUnlocked('data_analyst') || isAnyCourseUnlocked()}
              onNavigateToCourses={() => {
                setDockTab('home');
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                if (typeof window !== 'undefined') window.location.hash = '#courses';
              }}
              onUnlockAll={() => {
                setIsNewStudentMode(false);
                if (typeof window !== 'undefined') {
                  setUnlockModalOpen(true);
                }
              }}
              onBackToPractice={() => {
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                setDockTab('game');
                if (typeof window !== 'undefined') window.location.hash = '#game';
              }}
              onBackToDashboard={() => {
                setSelectedModuleView(null);
                setActiveTopicWs(null);
                setDockTab('home');
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              onSolveChallenge={(challengeId, title) => {
                // Handled in arena
              }}
            />
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


      </div>

{/* ─── AI ATS RESUME CHECKER MODAL ─── */}
      <AtsResumeCheckerModal
        isOpen={isAtsResumeModalOpen}
        onClose={() => setIsAtsResumeModalOpen(false)}
        userName={currentUserName}
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

      {/* Modern Future AI Super 30 Success Plan Modal (Razorpay Live Unlock) */}
      <SuccessPlanModal
        isOpen={unlockModalOpen || Boolean(selectedDetailCourseId)}
        onClose={() => {
          setUnlockModalOpen(false);
          setSelectedDetailCourseId(null);
        }}
        courseId={selectedDetailCourseId || selectedLockedModule}
        courseTitle={selectedLockedModule || selectedDetailCourseId || 'Data Analyst with GenAI'}
        targetTopicTitle={selectedLockedModule}
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
        onOpenLogin={() => setAuthModalOpen(true)}
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


      {/* ₹9 Pay to Unlock Modal — Razorpay Payment */}
{/* Replaced by SuccessPlanModal above */}

      {/* 3D Floating Luminous Blue Marble Sphere (Bottom Left - media_1791029953384.jpg) */}
      <div className="hidden md:block dock-floating-sphere-bl" />

    </div>
  );
};
