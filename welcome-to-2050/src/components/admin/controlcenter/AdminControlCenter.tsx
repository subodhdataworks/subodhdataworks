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
  FileText
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

interface AdminControlCenterProps {
  onClose?: () => void;
}

export const AdminControlCenter: React.FC<AdminControlCenterProps> = ({ onClose }) => {
  const [session, setSession] = useState<AdminSession | null>(() => AdminAuthService.getCurrentSession());
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'courses' | 'payments' | 'withdrawals' | 'settings'>('overview');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-auto">
      {/* ── Top Header ── */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
          >
            {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-sm text-white tracking-tight">Future IT Industry</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-wider uppercase">
                Control Center
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
              Authenticated as <strong className="text-slate-200">{session.admin.name}</strong> ({roleName})
            </p>
          </div>
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={loadAllData}
            title="Refresh Live Data"
            disabled={isLoading}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-blue-400' : ''}`} />
          </button>

          <a
            href="#home"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Student Site</span>
          </a>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 text-xs font-bold transition-colors cursor-pointer"
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
          } md:block w-64 bg-slate-900/60 border-r border-slate-800 p-4 space-y-1.5 shrink-0`}
        >
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-wider px-3 py-1">
            Core Modules
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
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
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
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>User Directory ({users.length})</span>
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
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Courses &amp; Curriculum</span>
          </button>

          <div className="text-[10px] font-black text-slate-500 uppercase tracking-wider px-3 pt-4 pb-1">
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
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
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
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <div className="flex items-center gap-3">
              <IndianRupee className="w-4 h-4" />
              <span>Withdrawal Requests</span>
            </div>
            {withdrawals.filter((w) => w.status === 'REQUESTED' || w.status === 'UNDER_REVIEW').length > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-[10px]">
                {withdrawals.filter((w) => w.status === 'REQUESTED' || w.status === 'UNDER_REVIEW').length}
              </span>
            )}
          </button>

          <div className="text-[10px] font-black text-slate-500 uppercase tracking-wider px-3 pt-4 pb-1">
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
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>System Rules &amp; RBAC</span>
          </button>
        </aside>

        {/* ── Content Area ── */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {activeTab === 'overview' && stats && (
            <DashboardOverview
              stats={stats}
              recentUsers={users}
              recentPayments={payments}
              recentWithdrawals={withdrawals}
              onNavigateTab={(t: any) => setActiveTab(t)}
            />
          )}

          {activeTab === 'users' && (
            <UserManagement
              users={users}
              suspensions={suspensions}
              onRefresh={loadAllData}
            />
          )}

          {activeTab === 'courses' && (
            <CourseManagement
              courses={COURSES_CATALOG}
              onRefresh={loadAllData}
            />
          )}

          {activeTab === 'payments' && (
            <PaymentsManagement
              payments={payments}
              onRefresh={loadAllData}
            />
          )}

          {activeTab === 'withdrawals' && (
            <WithdrawalsManagement
              withdrawals={withdrawals}
              onRefresh={loadAllData}
            />
          )}

          {activeTab === 'settings' && (
            <SystemSettings
              settings={businessSettings}
              auditLogs={auditLogs}
              onUpdateSettings={handleUpdateSettings}
              onRefresh={loadAllData}
            />
          )}
        </main>
      </div>
    </div>
  );
};
