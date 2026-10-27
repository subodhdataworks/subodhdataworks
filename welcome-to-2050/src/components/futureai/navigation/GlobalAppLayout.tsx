import React from 'react';
import { GlobalTopNav } from './GlobalTopNav';
import { GlobalSidebar } from './GlobalSidebar';
import './GlobalNavigation.css';

export interface GlobalAppLayoutProps {
  children: React.ReactNode;
  currentActive: string;
  userName?: string;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
  onNavigate: (route: string) => void;
  onOpenUnlockModal: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
  onLogout?: () => void;
  isNewStudentMode?: boolean;
  onToggleNewStudentMode?: () => void;
  onLogoClick?: () => void;
}

export const GlobalAppLayout: React.FC<GlobalAppLayoutProps> = ({
  children,
  currentActive,
  userName = 'Rahul Sharma',
  searchQuery = '',
  onSearchChange,
  onNavigate,
  onOpenUnlockModal,
  onOpenAdvisor,
  onLogout,
  isNewStudentMode = true,
  onToggleNewStudentMode,
  onLogoClick,
}) => {
  return (
    <div className="global-app-container">
      {/* ── 1. GLOBAL TOP NAVBAR (White/Light-Blue Glass) ── */}
      <GlobalTopNav
        userName={userName}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onOpenAdvisor={onOpenAdvisor}
        onLogout={onLogout}
        isNewStudentMode={isNewStudentMode}
        onToggleNewStudentMode={onToggleNewStudentMode}
        onOpenUnlockModal={onOpenUnlockModal}
        onLogoClick={onLogoClick}
      />

      {/* ── 2. GLOBAL BODY WITH DEEP NAVY SIDEBAR + CONTENT VIEWPORT ── */}
      <div className="global-body-layout">
        <GlobalSidebar
          currentActive={currentActive}
          onNavigate={onNavigate}
          onOpenUnlockModal={onOpenUnlockModal}
          onOpenAdvisor={onOpenAdvisor}
        />

        <div className="global-main-content-viewport">
          {children}
        </div>
      </div>
    </div>
  );
};
