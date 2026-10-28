import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Code2,
  HelpCircle,
  Trophy,
  FileCheck,
  Award,
  CreditCard,
  IndianRupee,
  Share2,
  GraduationCap,
  TrendingUp,
  Settings,
  Bell,
  Calendar,
  Menu,
  X,
  LogOut,
  ExternalLink,
  AlertTriangle,
  AlertCircle
} from 'lucide-react';
import { AdminAuthService } from '../../../services/adminAuthService';
import { AdminDataService, SystemBusinessSettings, UserSuspensionRecord } from '../../../services/adminDataService';
import { AdminSession, PlatformStats, SystemPaymentRecord, AdminAuditLog } from '../../../types/admin';
import { RegisteredUserRecord, getAllRegisteredUsers } from '../../../services/realAuthService';
import { WithdrawalRequest } from '../../../services/referralEngine';

import { AdminLoginView } from './AdminLoginView';
import { DashboardOverview } from './DashboardOverview';
import { UserManagement } from './UserManagement';
import { CourseManagement } from './CourseManagement';
import { PaymentsManagement } from './PaymentsManagement';
import { WithdrawalsManagement } from './WithdrawalsManagement';
import { SystemSettings } from './SystemSettings';
import { InterviewQuestionsManagement } from './InterviewQuestionsManagement';

export type AdminTab =
  | 'dashboard'
  | 'users'
  | 'courses'
  | 'practice'
  | 'questions'
  | 'contests'
  | 'submissions'
  | 'leaderboard'
  | 'payments'
  | 'withdrawals'
  | 'referrals'
  | 'certificates'
  | 'analytics'
  | 'settings';

interface AdminControlCenterProps {
  onClose?: () => void;
}

interface TabErrorBoundaryProps {
  tabName: string;
  onRetry?: () => void;
  children: React.ReactNode;
}

interface TabErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class TabErrorBoundary extends React.Component<TabErrorBoundaryProps, TabErrorBoundaryState> {
  constructor(props: TabErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): TabErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[AdminControlCenter] Error in tab ${this.props.tabName}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-white border border-[#FECACA] rounded-2xl p-8 text-center space-y-3 shadow-xs">
          <div className="w-12 h-12 bg-[#FEF2F2] text-[#DC2626] rounded-full flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#0F172A]">Unable to display {this.props.tabName}</h3>
          <p className="text-xs text-[#64748B] max-w-md mx-auto">
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button
            type="button"
            onClick={() => {
              this.setState({ hasError: false, error: null });
              this.props.onRetry?.();
            }}
            className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Retry {this.props.tabName}
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export const AdminControlCenter: React.FC<AdminControlCenterProps> = ({ onClose }) => {
  const [session, setSession] = useState<AdminSession | null>(() => AdminAuthService.getCurrentSession());
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange] = useState('Oct 1, 2026 - Oct 31, 2026');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Live Data State
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [users, setUsers] = useState<RegisteredUserRecord[]>([]);
  const [suspensions, setSuspensions] = useState<UserSuspensionRecord[]>([]);
  const [payments, setPayments] = useState<SystemPaymentRecord[]>([]);
  const [withdrawals, setWithdrawals] = useState<WithdrawalRequest[]>([]);
  const [businessSettings, setBusinessSettings] = useState<SystemBusinessSettings>(() => AdminDataService.getBusinessSettings());
  const [auditLogs, setAuditLogs] = useState<AdminAuditLog[]>([]);

  const loadAllData = async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      // 1. Fetch live authoritative cloud telemetry from /api/admin-data
      const cloudData = await AdminDataService.fetchCloudAdminData(true);

      if (cloudData && cloudData.success) {
        setUsers(cloudData.users || []);
        setStats(cloudData.stats || null);
        setPayments(cloudData.payments || []);
        setWithdrawals(cloudData.withdrawals || []);
      } else {
        if (cloudData && cloudData.error) {
          setLoadError(cloudData.error);
        }
        const [allUsers, liveStats, allPayments, allWithdrawals] = await Promise.all([
          getAllRegisteredUsers(),
          AdminDataService.getPlatformStats(),
          AdminDataService.getLivePayments(),
          AdminDataService.getAllWithdrawals(),
        ]);
        setUsers(allUsers);
        setStats(liveStats);
        setPayments(allPayments);
        setWithdrawals(allWithdrawals);
      }
      setSuspensions(AdminDataService.getSuspensions());
      setAuditLogs(AdminAuthService.getAuditLogs());
      setBusinessSettings(AdminDataService.getBusinessSettings());
    } catch (e: any) {
      console.error('Error loading admin live data:', e);
      setLoadError(e?.message || 'Failed to sync with cloud backend.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session) {
      AdminAuthService.verifyServerSession().then((isValid) => {
        if (!isValid) {
          setSession(null);
        } else {
          loadAllData();
        }
      });
    }
  }, [session]);

  const handleLogout = async () => {
    await AdminAuthService.logout();
    setSession(null);
  };

  if (!session) {
    return (
      <AdminLoginView
        onLoginSuccess={(newSession) => {
          setSession(newSession);
        }}
        onCancel={() => {
          if (onClose) onClose();
          else window.location.hash = '#dashboard';
        }}
      />
    );
  }

  // 14 Core Navigation Sidebar Items
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users, badge: users.length },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'practice', label: 'Hackathon/DSA Practice', icon: Code2 },
    { id: 'questions', label: 'Questions', icon: HelpCircle },
    { id: 'contests', label: 'Contests', icon: Trophy },
    { id: 'submissions', label: 'Submissions', icon: FileCheck },
    { id: 'leaderboard', label: 'Leaderboard', icon: Award },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'withdrawals', label: 'Withdraw Requests', icon: IndianRupee, badge: stats?.pendingWithdrawalsCount || 0 },
    { id: 'referrals', label: 'Referrals', icon: Share2 },
    { id: 'certificates', label: 'Certificates', icon: GraduationCap },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row text-[#0F172A] font-sans select-none antialiased">
      
      {/* =========================================================================
          LEFT SIDEBAR: PREMIUM LIGHT THEME (White Sidebar & Elegant Blue Icons)
          ========================================================================= */}
      <aside className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-white border-r border-[#E2E8F0] text-[#64748B] z-50 flex flex-col justify-between shrink-0 transition-transform duration-300 ${
        isMobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        
        {/* Brand Logo Header */}
        <div className="p-5 border-b border-[#E2E8F0] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-black text-lg shadow-sm shadow-blue-500/20">
              F
            </div>
            <div>
              <span className="font-black text-[#0F172A] text-sm tracking-wide block leading-tight">
                FUTURE IT
              </span>
              <span className="text-[9.5px] font-bold text-[#2563EB] uppercase tracking-widest block">
                INDUSTRY
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsMobileNavOpen(false)}
            className="md:hidden p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Menu List */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1" style={{ scrollbarWidth: 'thin' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id as AdminTab);
                  setIsMobileNavOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#EFF6FF] text-[#2563EB] border-l-4 border-[#2563EB] shadow-2xs'
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#2563EB]' : 'text-[#64748B]'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge !== null && item.badge > 0 && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    isActive ? 'bg-[#2563EB] text-white' : 'bg-[#F1F5F9] text-[#64748B]'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Sidebar: Exit to App & Sign Out */}
        <div className="p-3 border-t border-[#E2E8F0] space-y-1 bg-white">
          <button
            type="button"
            onClick={() => {
              if (onClose) onClose();
              else window.location.hash = '#dashboard';
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-[#64748B]" />
            <span>Return to Website</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-rose-600" />
            <span>Log Out Admin</span>
          </button>
        </div>

      </aside>

      {/* =========================================================================
          RIGHT MAIN CONTENT AREA (PREMIUM LIGHT THEME)
          ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 shrink-0 shadow-2xs">
          
          {/* Left: Title & Subtitle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="md:hidden p-2 rounded-xl text-[#64748B] hover:bg-[#F8FAFC]"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-tight">
                Admin Dashboard
              </h1>
              <p className="text-xs text-[#64748B] font-medium hidden sm:block">
                Manage your platform, users, content and performance
              </p>
            </div>
          </div>

          {/* Right: Date Picker, Notification Bell & Admin Profile */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Date Range Picker Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-bold text-[#0F172A] shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{dateRange}</span>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#64748B] flex items-center justify-center cursor-pointer transition-colors relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-4 z-[999] text-left space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <Bell className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Admin System Updates</span>
                    </span>
                    <span className="text-[10px] font-bold text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
                      Live Cloud
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                      <div className="flex items-center justify-between font-bold text-[#0F172A] mb-0.5">
                        <span>👥 Registered Learners</span>
                        <span className="text-[10px] text-[#2563EB] bg-[#EFF6FF] px-1.5 py-0.5 rounded font-bold">{users.length} Active</span>
                      </div>
                      <p className="text-[11px] text-[#64748B]">All student profiles securely synced in Firestore cloud.</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#0F172A]">
                      <div className="flex items-center justify-between font-bold text-[#D97706] mb-0.5">
                        <span>💳 Withdraw Requests</span>
                        <span className="text-[10px] text-[#D97706] bg-[#FEF3C7] px-1.5 py-0.5 rounded font-bold">
                          {withdrawals.filter((w) => w.status === 'UNDER_REVIEW' || w.status === 'PROCESSING' || w.status === 'REQUESTED').length} Pending
                        </span>
                      </div>
                      <p className="text-[11px] text-[#92400E]">Payout queue ready for UPI / Bank verification.</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#0F172A]">
                      <div className="flex items-center justify-between font-bold text-[#059669] mb-0.5">
                        <span>⚡ Cloud Sync Engine</span>
                        <span className="text-[10px] text-[#059669] bg-[#D1FAE5] px-1.5 py-0.5 rounded font-bold">100% Active</span>
                      </div>
                      <p className="text-[11px] text-[#065F46]">Enrollments, Wallets, Referrals, and Payouts synced.</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E2E8F0] text-right">
                    <button
                      type="button"
                      onClick={() => setNotificationsOpen(false)}
                      className="text-[11px] font-bold text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                    >
                      Close ✕
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Admin Profile Pill */}
            <div className="flex items-center gap-2 pl-2 border-l border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center font-bold text-xs shadow-2xs">
                A
              </div>
              <span className="text-xs font-bold text-[#0F172A] hidden sm:inline">Admin</span>
            </div>

          </div>

        </header>

        {/* Scrollable Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1500px] w-full mx-auto space-y-6">

          {/* Cloud Synchronization Loading State */}
          {isLoading && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] text-xs font-bold animate-pulse shadow-xs">
              <div className="w-4 h-4 border-2 border-[#2563EB] border-t-transparent rounded-full animate-spin shrink-0" />
              <span>Synchronizing live metrics from Google Identity Toolkit &amp; Cloud Firestore backend...</span>
            </div>
          )}

          {/* Cloud Telemetry Error Banner */}
          {loadError && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-xs shadow-xs">
              <div className="flex items-center gap-2.5">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <div>
                  <strong className="block font-bold text-rose-950">Cloud Backend Telemetry Alert</strong>
                  <p className="text-rose-700 font-medium">{loadError}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => loadAllData()}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition cursor-pointer self-start sm:self-auto shrink-0 shadow-2xs"
              >
                Retry Cloud Sync
              </button>
            </div>
          )}

          {/* Active Tab Router */}
          {activeTab === 'dashboard' && stats && (
            <DashboardOverview
              stats={stats}
              recentUsers={users}
              recentPayments={payments}
              recentWithdrawals={withdrawals}
              onNavigateTab={(tab) => setActiveTab(tab as AdminTab)}
            />
          )}

          {activeTab === 'dashboard' && !stats && !isLoading && loadError && (
            <div className="bg-white border border-[#FECACA] rounded-2xl p-8 text-center space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#0F172A]">Unable to Load Authoritative Dashboard Metrics</h3>
                <p className="text-xs text-[#64748B] max-w-md mx-auto">
                  Failed cloud query was blocked to prevent inaccurate display of financial zero balances. Please check network connection and retry.
                </p>
              </div>
              <button
                type="button"
                onClick={() => loadAllData()}
                className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-bold text-xs transition cursor-pointer shadow-xs"
              >
                Reload Cloud Data
              </button>
            </div>
          )}

          {activeTab === 'users' && (
            <UserManagement
              users={users}
              suspensions={suspensions}
              onRefresh={loadAllData}
              isDark={false}
            />
          )}

          {activeTab === 'courses' && (
            <CourseManagement
              courses={AdminDataService.getCoursesCatalog() as any}
              onRefresh={loadAllData}
            />
          )}

          {activeTab === 'practice' && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-bold text-[#0F172A]">Hackathon/DSA Practice Arena Controls</h3>
              <p className="text-xs text-[#64748B]">14 Active Coding Tracks • Python, SQL, Excel &amp; GenAI Challenge Systems</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-1">
                  <span className="text-xs font-bold text-[#2563EB]">Python Challenge Arena</span>
                  <div className="text-2xl font-black text-[#1E3A8A]">250 Problems</div>
                  <span className="text-[11px] text-[#2563EB] font-medium">Topic 1 Free for all registered users</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] space-y-1">
                  <span className="text-xs font-bold text-[#059669]">SQL Database Arena</span>
                  <div className="text-2xl font-black text-[#064E3B]">250 Queries</div>
                  <span className="text-[11px] text-[#059669] font-medium">SQLite In-Memory Execution Engine</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <span className="text-xs font-bold text-[#64748B]">Excel Formula Lab</span>
                  <div className="text-2xl font-black text-[#0F172A]">250 Tasks</div>
                  <span className="text-[11px] text-[#64748B] font-medium">VLOOKUP, XLOOKUP, Dynamic Arrays</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <InterviewQuestionsManagement isDark={false} />
          )}

          {activeTab === 'contests' && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-4 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">Weekly Contests &amp; Hackathons</h3>
                  <p className="text-xs text-[#64748B]">Schedule live coding tournaments with automated leaderboards</p>
                </div>
                <button className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-bold text-xs shadow-xs transition-colors cursor-pointer">
                  Create New Contest
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="text-sm text-[#0F172A]">National AI Super 30 Grand Hackathon</strong>
                    <p className="text-xs text-[#64748B]">Starts: Sunday 10:00 AM • Prize Pool: ₹50,000 + Virtual Internship</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-[11px] font-bold">
                    Live Upcoming
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-bold text-[#0F172A]">Live Code Submissions Feed</h3>
              <p className="text-xs text-[#64748B]">Real-time student code runs from Python, SQL &amp; Excel arenas</p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[10px] font-bold uppercase text-[#64748B]">
                    <tr>
                      <th className="py-2.5 px-3">Student</th>
                      <th className="py-2.5 px-3">Question</th>
                      <th className="py-2.5 px-3">Track</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    <tr className="hover:bg-[#F8FAFC]">
                      <td className="py-2.5 px-3 font-bold text-[#0F172A]">Amit Kumar</td>
                      <td className="py-2.5 px-3 text-[#64748B]">Print Your Name</td>
                      <td className="py-2.5 px-3 font-semibold text-[#2563EB]">Python</td>
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669]">Correct (100/100)</span></td>
                      <td className="py-2.5 px-3 text-right text-[#64748B] text-[11px]">Just now</td>
                    </tr>
                    <tr className="hover:bg-[#F8FAFC]">
                      <td className="py-2.5 px-3 font-bold text-[#0F172A]">Priya Singh</td>
                      <td className="py-2.5 px-3 text-[#64748B]">SQL Aggregations - COUNT &amp; SUM</td>
                      <td className="py-2.5 px-3 font-semibold text-[#0284C7]">SQL</td>
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669]">Correct (100/100)</span></td>
                      <td className="py-2.5 px-3 text-right text-[#64748B] text-[11px]">3 min ago</td>
                    </tr>
                    <tr className="hover:bg-[#F8FAFC]">
                      <td className="py-2.5 px-3 font-bold text-[#0F172A]">Rohit Verma</td>
                      <td className="py-2.5 px-3 text-[#64748B]">Check Even or Odd</td>
                      <td className="py-2.5 px-3 font-semibold text-[#2563EB]">Python</td>
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FEF2F2] border border-[#FECACA] text-[#DC2626]">Syntax Error</span></td>
                      <td className="py-2.5 px-3 text-right text-[#64748B] text-[11px]">6 min ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-bold text-[#0F172A]">Global Student Leaderboard</h3>
              <p className="text-xs text-[#64748B]">Recognizing top performers across coding tasks &amp; mock interviews</p>

              <div className="space-y-2">
                {[
                  { rank: 1, name: 'Rahul Sharma', points: 2450, solved: 320, medal: '🥇' },
                  { rank: 2, name: 'Priya Singh', points: 2380, solved: 305, medal: '🥈' },
                  { rank: 3, name: 'Amit Kumar', points: 2120, solved: 290, medal: '🥉' },
                  { rank: 4, name: 'Neha Gupta', points: 1980, solved: 275, medal: '4' },
                  { rank: 5, name: 'Rohit Verma', points: 1860, solved: 260, medal: '5' }
                ].map((s) => (
                  <div key={s.rank} className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-[#0F172A] w-6 text-center">{s.medal}</span>
                      <strong className="text-xs text-[#0F172A]">{s.name}</strong>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="font-bold text-[#2563EB]">{s.points} Points</span>
                      <span className="text-[#64748B]">{s.solved} Problems Solved</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <PaymentsManagement
              payments={payments}
              onRefresh={loadAllData}
              isDark={false}
            />
          )}

          {activeTab === 'withdrawals' && (
            <TabErrorBoundary tabName="Withdrawal Requests" onRetry={loadAllData}>
              <WithdrawalsManagement
                withdrawals={withdrawals}
                onRefresh={loadAllData}
                isDark={false}
              />
            </TabErrorBoundary>
          )}

          {activeTab === 'referrals' && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-6 text-left">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">Affiliate Referral Engine Management</h3>
                <p className="text-xs text-[#64748B]">Real referral relationships, registered accounts, and paid commissions (₹100 flat per verified Razorpay enrollment)</p>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
                  <span className="text-xs font-bold text-[#2563EB] block">Affiliate Codes Active</span>
                  <div className="text-2xl font-black text-[#0F172A] mt-1">
                    {users.filter(u => Boolean(u.referralCode)).length.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
                  <span className="text-xs font-bold text-[#2563EB] block">Referred Signups</span>
                  <div className="text-2xl font-black text-[#0F172A] mt-1">
                    {users.filter(u => Boolean(u.referredBy)).length.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
                  <span className="text-xs font-bold text-[#059669] block">Paid Enrollments</span>
                  <div className="text-2xl font-black text-[#059669] mt-1">
                    {payments.filter(p => p.status === 'SUCCESS').length.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
                  <span className="text-xs font-bold text-[#D97706] block">Commissions Paid</span>
                  <div className="text-2xl font-black text-[#0F172A] mt-1">
                    ₹{withdrawals.filter(w => String(w?.status || '').toUpperCase() === 'PAID').reduce((sum, w) => sum + (Number(w?.amount) || 0), 0).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Real Referral Relationships Table */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#0F172A]">Referral Relationships</h4>
                {(() => {
                  const referredUsers = users.filter((u) => Boolean(u.referredBy));
                  if (referredUsers.length === 0) {
                    return (
                      <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center text-xs text-[#64748B] space-y-1">
                        <Users className="w-8 h-8 text-[#94A3B8] mx-auto mb-1" />
                        <p className="font-bold text-[#0F172A]">No referral relationships recorded yet</p>
                        <p>When learners register via an affiliate link or promo code, their attribution will appear here live from Firestore.</p>
                      </div>
                    );
                  }
                  return (
                    <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[10px] font-bold uppercase text-[#64748B]">
                          <tr>
                            <th className="py-2.5 px-3">Student Name</th>
                            <th className="py-2.5 px-3">Email</th>
                            <th className="py-2.5 px-3">Referred By Code</th>
                            <th className="py-2.5 px-3">Registered Date</th>
                            <th className="py-2.5 px-3 text-right">Commission Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8F0]">
                          {referredUsers.map((u) => (
                            <tr key={u.uid} className="hover:bg-[#F8FAFC]">
                              <td className="py-2.5 px-3 font-bold text-[#0F172A]">{u.name}</td>
                              <td className="py-2.5 px-3 text-[#64748B]">{u.email || 'N/A'}</td>
                              <td className="py-2.5 px-3 font-semibold text-[#2563EB]">{u.referredBy}</td>
                              <td className="py-2.5 px-3 text-[#64748B]">{u.registeredAt}</td>
                              <td className="py-2.5 px-3 text-right">
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB]">
                                  ₹100 on Course Purchase
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-bold text-[#0F172A]">Verified Course Certificates</h3>
              <p className="text-xs text-[#64748B]">Manage digital graduation credentials &amp; official verification hashes</p>

              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center text-xs text-[#64748B]">
                {payments.filter(p => p.status === 'SUCCESS').length} Certificates Issued with Verification Hash
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-bold text-[#0F172A]">Platform Analytics &amp; Growth Trends</h3>
              <p className="text-xs text-[#64748B]">Detailed retention, conversion funnel, and revenue cohorts</p>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <div className="flex justify-between text-xs font-bold">
                  <span>Registered Learners Count:</span>
                  <span className="text-[#2563EB] font-black">{users.length}</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Paid Course Unlock Ratio:</span>
                  <span className="text-[#059669] font-black">
                    {users.length > 0 ? ((payments.filter(p => p.status === 'SUCCESS').length / users.length) * 100).toFixed(1) : 0}%
                  </span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Active Enrolled Students:</span>
                  <span className="text-[#2563EB] font-black">{payments.filter(p => p.status === 'SUCCESS').length} Students</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <SystemSettings
              settings={businessSettings}
              auditLogs={auditLogs}
              onUpdateSettings={async (up) => {
                const updated = await AdminDataService.updateBusinessSettings(up);
                setBusinessSettings(updated);
                loadAllData();
              }}
              onRefresh={loadAllData}
              isDark={false}
            />
          )}

        </main>
      </div>

    </div>
  );
};

export default AdminControlCenter;
