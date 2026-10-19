import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  IndianRupee,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  RefreshCw,
  FileText,
  Video,
  HelpCircle,
  Sun,
  Moon
} from 'lucide-react';
import { AdminAuthService } from '../../../services/adminAuthService';
import { AdminDataService, SystemBusinessSettings, UserSuspensionRecord } from '../../../services/adminDataService';
import { AdminSession, PlatformStats, SystemPaymentRecord, AdminAuditLog } from '../../../types/admin';
import { RegisteredUserRecord, getAllRegisteredUsers } from '../../../services/realAuthService';
import { WithdrawalRequest } from '../../../services/referralEngine';
import { COURSES_CATALOG } from '../../../data/coursesCatalog';

import { AdminLoginView } from './AdminLoginView';
import { DashboardOverview } from './DashboardOverview';
import { UserManagement } from './UserManagement';
import { CourseManagement } from './CourseManagement';
import { PaymentsManagement } from './PaymentsManagement';
import { WithdrawalsManagement } from './WithdrawalsManagement';
import { SystemSettings } from './SystemSettings';
import { BunnyVideoManagement } from './BunnyVideoManagement';
import { InterviewQuestionsManagement } from './InterviewQuestionsManagement';

interface AdminControlCenterProps {
  onClose?: () => void;
}

export const AdminControlCenter: React.FC<AdminControlCenterProps> = ({ onClose }) => {
  const [session, setSession] = useState<AdminSession | null>(() => AdminAuthService.getCurrentSession());
  const [activeTab, setActiveTab] = useState<
    'overview' | 'users' | 'bunny' | 'interviews' | 'courses' | 'payments' | 'withdrawals' | 'settings'
  >('overview');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Theme state: Default is Light Theme ('light'), stored in localStorage
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_admin_theme') === 'dark';
    }
    return false;
  });

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_admin_theme', next ? 'dark' : 'light');
    }
  };

  // Live Data State
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [users, setUsers] = useState<RegisteredUserRecord[]>([]);
  const [suspensions, setSuspensions] = useState<UserSuspensionRecord[]>([]);
  const [payments, setPayments] = useState<SystemPaymentRecord[]>([]);
  const [withdrawals, setWithdrawals] = useState<WithdrawalRequest[]>([]);
  const [businessSettings, setBusinessSettings] = useState<SystemBusinessSettings>(() => AdminDataService.getBusinessSettings());
  const [auditLogs, setAuditLogs] = useState<AdminAuditLog[]>([]);

  // Load all central live database records
  const loadAllData = async () => {
    setIsLoading(true);
    try {
      const [allUsers, liveStats, allPayments, allWithdrawals, suspList, logs] = await Promise.all([
        getAllRegisteredUsers(),
        AdminDataService.getPlatformStats(),
        Promise.resolve(AdminDataService.getAllPayments()),
        Promise.resolve(AdminDataService.getAllWithdrawals()),
        Promise.resolve(AdminDataService.getSuspensions()),
        Promise.resolve(AdminAuthService.getAuditLogs()),
      ]);

      setUsers(allUsers);
      setStats(liveStats);
      setPayments(allPayments);
      setWithdrawals(allWithdrawals);
      setSuspensions(suspList);
      setAuditLogs(logs);
      setBusinessSettings(AdminDataService.getBusinessSettings());
    } catch (e) {
      console.error('Error loading admin live data:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session) {
      loadAllData();
    }
  }, [session]);

  const handleLogout = async () => {
    await AdminAuthService.logout();
    setSession(null);
  };

  const handleUpdateSettings = async (updates: Partial<SystemBusinessSettings>) => {
    const updated = await AdminDataService.updateBusinessSettings(updates);
    setBusinessSettings(updated);
    loadAllData();
  };

  // If unauthenticated, render the secure admin login portal
  if (!session) {
    return (
      <AdminLoginView
        onLoginSuccess={(newSession) => {
          setSession(newSession);
        }}
        onCancel={() => {
          if (onClose) {
            onClose();
          } else {
            window.location.hash = '#dashboard';
          }
        }}
      />
    );
  }

  const roleName = session.admin.role.replace('_', ' ').toUpperCase();

  return (
    <div
      className={`min-h-screen flex flex-col font-sans select-auto transition-colors duration-200 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* ── Top Header ── */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b transition-colors shadow-sm ${
          isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200 shadow-slate-200/50'
        }`}
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className={`md:hidden p-2 rounded-xl cursor-pointer ${
              isDark ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-700 hover:text-slate-900'
            }`}
          >
            {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className={`font-black text-sm tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Future IT Industry
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-wider uppercase">
                Control Center
              </span>
            </div>
            <p className={`text-[10px] font-medium hidden sm:block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Authenticated as <strong className={isDark ? 'text-slate-200' : 'text-slate-700'}>{session.admin.name}</strong> ({roleName})
            </p>
          </div>
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2">
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer border transition-colors ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-amber-400 border-slate-700'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            <span className="hidden sm:inline">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          {/* Refresh Live Data */}
          <button
            type="button"
            onClick={loadAllData}
            title="Refresh Live Data"
            disabled={isLoading}
            className={`p-2 rounded-xl cursor-pointer transition-colors ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-blue-500' : ''}`} />
          </button>

          {/* Student Site Link */}
          <a
            href="#home"
            target="_blank"
            rel="noreferrer"
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Student Site</span>
          </a>

          {/* Logout Button */}
          <button
            type="button"
            onClick={handleLogout}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
              isDark
                ? 'bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border-rose-500/30'
                : 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200'
            }`}
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* ── Main Layout: Sidebar + Content Body ── */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        {/* Sidebar Navigation */}
        <aside
          className={`${
            isMobileNavOpen ? 'block' : 'hidden'
          } md:block w-64 border-r p-4 space-y-1.5 shrink-0 transition-colors ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Core Operations
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveTab('overview');
              setIsMobileNavOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Main Dashboard</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('users');
              setIsMobileNavOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'users'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>User Directory ({users.length})</span>
          </button>

          <div className={`text-[10px] font-black uppercase tracking-wider px-3 pt-4 pb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Video &amp; AI Content Controls
          </div>

          {/* Bunny Stream Video Manager */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('bunny');
              setIsMobileNavOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'bunny'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Video className="w-4 h-4 text-orange-500" />
            <span>Bunny Stream Videos</span>
          </button>

          {/* Mock Interview Questions Manager */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('interviews');
              setIsMobileNavOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'interviews'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-emerald-500" />
            <span>Mock Interview Bank</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('courses');
              setIsMobileNavOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'courses'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Courses &amp; Curriculum</span>
          </button>

          <div className={`text-[10px] font-black uppercase tracking-wider px-3 pt-4 pb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Finance &amp; Payouts
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveTab('payments');
              setIsMobileNavOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'payments'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Payments &amp; Ledger</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('withdrawals');
              setIsMobileNavOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'withdrawals'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <IndianRupee className="w-4 h-4" />
              <span>Withdrawal Requests</span>
            </div>
            {withdrawals.filter((w) => w.status === 'REQUESTED' || w.status === 'UNDER_REVIEW').length > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-[10px]">
                {withdrawals.filter((w) => w.status === 'REQUESTED' || w.status === 'UNDER_REVIEW').length}
              </span>
            )}
          </button>

          <div className={`text-[10px] font-black uppercase tracking-wider px-3 pt-4 pb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Administration
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveTab('settings');
              setIsMobileNavOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'settings'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>System Rules &amp; RBAC</span>
          </button>
        </aside>

        {/* ── Content Area ── */}
        <main className={`flex-1 p-4 md:p-8 overflow-y-auto transition-colors ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
          {activeTab === 'overview' && stats && (
            <DashboardOverview
              stats={stats}
              recentUsers={users}
              recentPayments={payments}
              recentWithdrawals={withdrawals}
              onNavigateTab={(t: any) => setActiveTab(t)}
              isDark={isDark}
            />
          )}

          {activeTab === 'users' && (
            <UserManagement
              users={users}
              suspensions={suspensions}
              onRefresh={loadAllData}
              isDark={isDark}
            />
          )}

          {activeTab === 'bunny' && (
            <BunnyVideoManagement
              onRefresh={loadAllData}
              isDark={isDark}
            />
          )}

          {activeTab === 'interviews' && (
            <InterviewQuestionsManagement
              onRefresh={loadAllData}
              isDark={isDark}
            />
          )}

          {activeTab === 'courses' && (
            <CourseManagement
              courses={COURSES_CATALOG}
              onRefresh={loadAllData}
              isDark={isDark}
            />
          )}

          {activeTab === 'payments' && (
            <PaymentsManagement
              payments={payments}
              onRefresh={loadAllData}
              isDark={isDark}
            />
          )}

          {activeTab === 'withdrawals' && (
            <WithdrawalsManagement
              withdrawals={withdrawals}
              onRefresh={loadAllData}
              isDark={isDark}
            />
          )}

          {activeTab === 'settings' && (
            <SystemSettings
              settings={businessSettings}
              auditLogs={auditLogs}
              onUpdateSettings={handleUpdateSettings}
              onRefresh={loadAllData}
              isDark={isDark}
            />
          )}
        </main>
      </div>
    </div>
  );
};
