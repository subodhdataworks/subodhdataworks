import React from 'react';
import {
  Home,
  BookOpen,
  Database,
  BarChart2,
  BarChart3,
  TrendingUp,
  Sparkles,
  FolderKanban,
  Mic,
  Briefcase,
  Gift,
  Users,
  Award,
  HelpCircle,
  Crown,
  ChevronRight
} from 'lucide-react';
import { useThemeAccent } from '../../../context/ThemeAccentContext';
import { FutureLogo } from '../FutureLogo';
import './GlobalNavigation.css';

export interface GlobalSidebarProps {
  currentActive: string; // 'dashboard' | 'learning' | 'python' | 'sql' | 'excel' | 'powerbi' | 'stats' | 'genai' | 'projects' | 'interview' | 'placement' | 'earnings' | 'community' | 'certificates' | 'help'
  onNavigate: (route: string) => void;
  onOpenUnlockModal: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
  showBrandHeader?: boolean;
}

export const GlobalSidebar: React.FC<GlobalSidebarProps> = ({
  currentActive,
  onNavigate,
  onOpenUnlockModal,
  onOpenAdvisor,
  showBrandHeader = false,
}) => {
  const { playClick } = useThemeAccent();

  const handleItemClick = (route: string) => {
    playClick();
    onNavigate(route);
  };

  return (
    <aside className="global-sidebar">
      {/* Brand header if requested */}
      {showBrandHeader && (
        <div className="global-sidebar-brand" onClick={() => handleItemClick('dashboard')} style={{ cursor: 'pointer' }}>
          <FutureLogo />
        </div>
      )}

      {/* Main Navigation Links (Strict Locked Order) */}
      <nav className="global-nav-list">
        {/* 1. Dashboard */}
        <button
          className={`global-nav-item ${currentActive === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleItemClick('dashboard')}
        >
          <Home className="global-nav-icon text-sky-400" />
          <span>Dashboard</span>
        </button>

        {/* 2. My Learning */}
        <button
          className={`global-nav-item ${currentActive === 'learning' ? 'active' : ''}`}
          onClick={() => handleItemClick('learning')}
        >
          <BookOpen className="global-nav-icon text-emerald-400" />
          <span>My Learning</span>
        </button>

        {/* 3. Python */}
        <button
          className={`global-nav-item ${currentActive === 'python' ? 'active' : ''}`}
          onClick={() => handleItemClick('python')}
        >
          <div className="global-nav-icon flex items-center justify-center shrink-0">
            <img src="/images/icons3d/icon_01_python.png" alt="Python" className="w-4 h-4 object-contain" />
          </div>
          <span>Python</span>
        </button>

        {/* 4. SQL */}
        <button
          className={`global-nav-item ${currentActive === 'sql' ? 'active' : ''}`}
          onClick={() => {
            playClick();
            onOpenUnlockModal('SQL & Databases');
          }}
        >
          <Database className="global-nav-icon text-purple-400" />
          <span>SQL</span>
        </button>

        {/* 5. Excel */}
        <button
          className={`global-nav-item ${currentActive === 'excel' ? 'active' : ''}`}
          onClick={() => {
            playClick();
            onOpenUnlockModal('Advanced Excel');
          }}
        >
          <BarChart2 className="global-nav-icon text-emerald-400" />
          <span>Excel</span>
        </button>

        {/* 6. Power BI */}
        <button
          className={`global-nav-item ${currentActive === 'powerbi' ? 'active' : ''}`}
          onClick={() => {
            playClick();
            onOpenUnlockModal('Power BI & Data Visualization');
          }}
        >
          <BarChart3 className="global-nav-icon text-amber-400" />
          <span>Power BI</span>
        </button>

        {/* 7. Statistics */}
        <button
          className={`global-nav-item ${currentActive === 'stats' ? 'active' : ''}`}
          onClick={() => {
            playClick();
            onOpenUnlockModal('Statistics for Data Analytics');
          }}
        >
          <TrendingUp className="global-nav-icon text-pink-400" />
          <span>Statistics</span>
        </button>

        {/* 8. GenAI */}
        <button
          className={`global-nav-item ${currentActive === 'genai' ? 'active' : ''}`}
          onClick={() => {
            playClick();
            onOpenUnlockModal('GenAI for Data Analytics');
          }}
        >
          <Sparkles className="global-nav-icon text-cyan-400" />
          <span>GenAI</span>
        </button>

        {/* 9. Projects */}
        <button
          className={`global-nav-item ${currentActive === 'projects' ? 'active' : ''}`}
          onClick={() => {
            playClick();
            onOpenUnlockModal('Real-World Capstone Projects');
          }}
        >
          <FolderKanban className="global-nav-icon text-indigo-400" />
          <span>Projects</span>
        </button>

        {/* 10. Mock Interview */}
        <button
          className={`global-nav-item ${currentActive === 'interview' ? 'active' : ''}`}
          onClick={() => handleItemClick('interview')}
        >
          <Mic className="global-nav-icon text-violet-400" />
          <span>Mock Interview</span>
        </button>

        {/* 11. Placement Support */}
        <button
          className={`global-nav-item ${currentActive === 'placement' ? 'active' : ''}`}
          onClick={() => handleItemClick('placement')}
        >
          <Briefcase className="global-nav-icon text-emerald-400" />
          <span>Placement Support</span>
        </button>

        {/* 12. Referral & Earn */}
        <button
          className={`global-nav-item ${currentActive === 'earnings' ? 'active' : ''}`}
          onClick={() => handleItemClick('earnings')}
        >
          <Gift className="global-nav-icon text-pink-400" />
          <span>Referral &amp; Earn</span>
        </button>

        {/* 13. Community */}
        <button
          className={`global-nav-item ${currentActive === 'community' ? 'active' : ''}`}
          onClick={() => handleItemClick('community')}
        >
          <Users className="global-nav-icon text-sky-400" />
          <span>Community</span>
        </button>

        {/* 14. Certificates */}
        <button
          className={`global-nav-item ${currentActive === 'certificates' ? 'active' : ''}`}
          onClick={() => handleItemClick('certificates')}
        >
          <Award className="global-nav-icon text-amber-400" />
          <span>Certificates</span>
        </button>

        {/* 15. Help & Support */}
        <button
          className={`global-nav-item ${currentActive === 'help' ? 'active' : ''}`}
          onClick={() => {
            playClick();
            onOpenAdvisor?.();
          }}
        >
          <HelpCircle className="global-nav-icon text-slate-400" />
          <span>Help &amp; Support</span>
        </button>
      </nav>

      {/* Upgrade to Pro Card at bottom */}
      <div className="global-upgrade-card-wrap">
        <div
          className="global-upgrade-card"
          onClick={() => {
            playClick();
            onOpenUnlockModal('All Modules (Pro Track)');
          }}
        >
          <div className="upgrade-crown-icon">
            <Crown className="w-5 h-5 text-slate-900 fill-slate-900" />
          </div>
          <div className="upgrade-text-col">
            <strong className="upgrade-title">Upgrade to Pro</strong>
            <span className="upgrade-sub">Unlock all modules + AI Mentor + Placement</span>
          </div>
          <ChevronRight className="w-4 h-4 text-amber-300 shrink-0" />
        </div>
      </div>
    </aside>
  );
};
