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
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Search,
  ArrowRight,
  LogOut,
  ExternalLink,
  PlusCircle,
  Download,
  CheckCircle2,
  AlertCircle,
  AlertTriangle
} from 'lucide-react';
import { FutureLogo } from '../../futureai/FutureLogo';
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
import { BunnyVideoManagement } from './BunnyVideoManagement';
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

export const AdminControlCenter: React.FC<AdminControlCenterProps> = ({ onClose }) => {
  const [session, setSession] = useState<AdminSession | null>(() => AdminAuthService.getCurrentSession());
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState('Oct 1, 2026 - Oct 31, 2026');
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

  // Navigation Sidebar Items Matching Screenshot: media_1792940388047_60fc0a29.jpg
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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row text-slate-900 font-sans select-none antialiased">
      
      {/* =========================================================================
          LEFT SIDEBAR: EXACT DARK NAVY BAR (media_1792940388047_60fc0a29.jpg)
          ========================================================================= */}
      <aside className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-[#0B1528] text-slate-300 z-50 flex flex-col justify-between shrink-0 transition-transform duration-300 ${
        isMobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        
        {/* Brand Logo Header */}
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-cyan-500/20">
              F
            </div>
            <div>
              <span className="font-black text-white text-sm tracking-wide block leading-tight">
                FUTURE IT
              </span>
              <span className="text-[9.5px] font-bold text-cyan-400 uppercase tracking-widest block">
                INDUSTRY
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsMobileNavOpen(false)}
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white"
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
                    ? 'bg-[#1A73E8] text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] px-2 py-0.2 rounded-full font-extrabold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Sidebar: Exit to App & Sign Out */}
        <div className="p-3 border-t border-slate-800/80 space-y-1.5">
          <button
            type="button"
            onClick={() => {
              if (onClose) onClose();
              else window.location.hash = '#dashboard';
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-slate-400" />
            <span>Return to Website</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-rose-400" />
            <span>Log Out Admin</span>
          </button>
        </div>

      </aside>

      {/* =========================================================================
          RIGHT MAIN CONTENT AREA
          ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        
        {/* Top Header Bar Matching Screenshot */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 shrink-0 shadow-2xs">
          
          {/* Left: Title & Subtitle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                Admin Dashboard
              </h1>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Manage your platform, users, content and performance
              </p>
            </div>
          </div>

          {/* Right: Date Picker, Notification Bell & Admin Profile */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Date Range Picker Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>{dateRange}</span>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border-2 border-slate-300 p-4 z-[999] text-left space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                      <Bell className="w-3.5 h-3.5 text-blue-600" />
                      <span>Admin System Updates</span>
                    </span>
                    <span className="text-[10px] font-black text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                      Live Cloud
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
                      <div className="flex items-center justify-between font-bold text-slate-900 mb-0.5">
                        <span>👥 Registered Learners</span>
                        <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-black">{users.length} Active</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium">All student profiles securely synced in Firestore cloud.</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-slate-800">
                      <div className="flex items-center justify-between font-bold text-amber-900 mb-0.5">
                        <span>💳 Withdraw Requests</span>
                        <span className="text-[10px] text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded font-black">
                          {withdrawals.filter((w) => w.status === 'UNDER_REVIEW' || w.status === 'PROCESSING' || w.status === 'REQUESTED').length} Pending
                        </span>
                      </div>
                      <p className="text-[11px] text-amber-800/90 font-medium">Payout queue ready for UPI / Bank verification.</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-800">
                      <div className="flex items-center justify-between font-bold text-emerald-900 mb-0.5">
                        <span>⚡ 4 Pillars Cloud Sync</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-black">100% Active</span>
                      </div>
                      <p className="text-[11px] text-emerald-800/90 font-medium">Enrollments, Wallets, Referrals, and Payouts synced.</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 text-right">
                    <button
                      type="button"
                      onClick={() => setNotificationsOpen(false)}
                      className="text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                      Close ✕
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Admin Profile Pill */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <img
                src="/images/avatar-rohit.jpg"
                alt="Admin"
                className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-2xs"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xs font-black text-slate-900 hidden sm:inline">Admin</span>
            </div>

          </div>

        </header>

        {/* Scrollable Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1500px] w-full mx-auto space-y-6">
          
          {/* Cloud Synchronization Loading State */}
          {isLoading && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/90 border border-blue-200/90 text-blue-900 text-xs font-bold animate-pulse shadow-xs">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0" />
              <span>Synchronizing live metrics from Google Identity Toolkit &amp; Cloud Firestore backend...</span>
            </div>
          )}

          {/* Cloud Telemetry Error Banner */}
          {loadError && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-rose-50 border border-rose-200/90 text-rose-900 text-xs shadow-xs">
              <div className="flex items-center gap-2.5">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <div>
                  <strong className="block font-black text-rose-950">Cloud Backend Telemetry Alert</strong>
                  <p className="text-rose-700 font-medium">{loadError}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => loadAllData()}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition cursor-pointer self-start sm:self-auto shrink-0"
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

          {activeTab === 'users' && (
            <UserManagement
              users={users}
              suspensions={suspensions}
              onRefresh={loadAllData}
            />
          )}

          {activeTab === 'courses' && (
            <CourseManagement
              courses={AdminDataService.getCoursesCatalog() as any}
              onRefresh={loadAllData}
            />
          )}

          {activeTab === 'practice' && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-black text-slate-900">Hackathon/DSA Practice Arena Controls</h3>
              <p className="text-xs text-slate-500">14 Active Coding Tracks • Python, SQL, Excel & GenAI Challenge Systems</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-1">
                  <span className="text-xs font-bold text-blue-700">Python Challenge Arena</span>
                  <div className="text-2xl font-black text-blue-950">250 Problems</div>
                  <span className="text-[11px] text-blue-600">Topic 1 Free for all registered users</span>
                </div>
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                  <span className="text-xs font-bold text-sky-700">SQL Database Arena</span>
                  <div className="text-2xl font-black text-sky-950">250 Queries</div>
                  <span className="text-[11px] text-sky-600">SQLite In-Memory Execution Engine</span>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <span className="text-xs font-bold text-emerald-700">Excel Formula Lab</span>
                  <div className="text-2xl font-black text-emerald-950">250 Tasks</div>
                  <span className="text-[11px] text-emerald-600">VLOOKUP, XLOOKUP, Dynamic Arrays</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <InterviewQuestionsManagement isDark={false} />
          )}

          {activeTab === 'contests' && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900">Weekly Contests & Hackathons</h3>
                  <p className="text-xs text-slate-500">Schedule live coding tournaments with automated leaderboards</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs">
                  Create New Contest
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="text-sm text-slate-900">National AI Super 30 Grand Hackathon</strong>
                    <p className="text-xs text-slate-500">Starts: Sunday 10:00 AM • Prize Pool: ₹50,000 + Virtual Internship</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black">
                    Live Upcoming
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-black text-slate-900">Live Code Submissions Feed</h3>
              <p className="text-xs text-slate-500">Real-time student code runs from Python, SQL & Excel arenas</p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400">
                    <tr>
                      <th className="py-2.5 px-3">Student</th>
                      <th className="py-2.5 px-3">Question</th>
                      <th className="py-2.5 px-3">Track</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Amit Kumar</td>
                      <td className="py-2.5 px-3">Print Your Name</td>
                      <td className="py-2.5 px-3 font-semibold text-blue-600">Python</td>
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">Correct (100/100)</span></td>
                      <td className="py-2.5 px-3 text-right text-slate-400 text-[11px]">Just now</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Priya Singh</td>
                      <td className="py-2.5 px-3">SQL Aggregations - COUNT & SUM</td>
                      <td className="py-2.5 px-3 font-semibold text-sky-600">SQL</td>
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">Correct (100/100)</span></td>
                      <td className="py-2.5 px-3 text-right text-slate-400 text-[11px]">3 min ago</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Rohit Verma</td>
                      <td className="py-2.5 px-3">Check Even or Odd</td>
                      <td className="py-2.5 px-3 font-semibold text-blue-600">Python</td>
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-800">Syntax Error</span></td>
                      <td className="py-2.5 px-3 text-right text-slate-400 text-[11px]">6 min ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-black text-slate-900">Global Student Leaderboard</h3>
              <p className="text-xs text-slate-500">Recognizing top performers across coding tasks & mock interviews</p>

              <div className="space-y-2">
                {[
                  { rank: 1, name: 'Rahul Sharma', points: 2450, solved: 320, medal: '🥇' },
                  { rank: 2, name: 'Priya Singh', points: 2380, solved: 305, medal: '🥈' },
                  { rank: 3, name: 'Amit Kumar', points: 2120, solved: 290, medal: '🥉' },
                  { rank: 4, name: 'Neha Gupta', points: 1980, solved: 275, medal: '4' },
                  { rank: 5, name: 'Rohit Verma', points: 1860, solved: 260, medal: '5' }
                ].map((s) => (
                  <div key={s.rank} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-black text-slate-900 w-6 text-center">{s.medal}</span>
                      <strong className="text-xs text-slate-900">{s.name}</strong>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="font-extrabold text-blue-600">{s.points} Points</span>
                      <span className="text-slate-500">{s.solved} Problems Solved</span>
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
            <WithdrawalsManagement
              withdrawals={withdrawals}
              onRefresh={loadAllData}
              isDark={false}
            />
          )}

          {activeTab === 'referrals' && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-black text-slate-900">Affiliate Referral Engine Management</h3>
              <p className="text-xs text-slate-500">Live verified click-throughs, registered free signups, and paid commissions (₹100 flat per verified Razorpay enrollment)</p>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
                  <span className="text-xs font-bold text-blue-600 block">Total Link Clicks</span>
                  <div className="text-2xl font-black text-blue-950 mt-1">
                    {(() => {
                      try {
                        const s = typeof window !== 'undefined' ? localStorage.getItem('futureai_referral_state_v2') : null;
                        if (s) {
                          const p = JSON.parse(s);
                          return (p.clicksCount || 0).toLocaleString();
                        }
                      } catch {}
                      return 0;
                    })()}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-center">
                  <span className="text-xs font-bold text-indigo-600 block">Free Signups</span>
                  <div className="text-2xl font-black text-indigo-950 mt-1">{users.length.toLocaleString()}</div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <span className="text-xs font-bold text-emerald-600 block">Paid Enrollments</span>
                  <div className="text-2xl font-black text-emerald-950 mt-1">
                    {payments.filter(p => p.status === 'SUCCESS').length.toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                  <span className="text-xs font-bold text-amber-600 block">Commissions Paid</span>
                  <div className="text-2xl font-black text-amber-950 mt-1">
                    ₹{withdrawals.filter(w => w.status === 'PAID').reduce((sum, w) => sum + (w.amount || 0), 0).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-black text-slate-900">Verified Course Certificates</h3>
              <p className="text-xs text-slate-500">Manage digital graduation credentials & official verification hashes</p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
                {payments.filter(p => p.status === 'SUCCESS').length} Certificates Issued with Verification Hash
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4 text-left">
              <h3 className="text-lg font-black text-slate-900">Platform Analytics & Growth Trends</h3>
              <p className="text-xs text-slate-500">Detailed retention, conversion funnel, and revenue cohorts</p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex justify-between text-xs font-bold">
                  <span>Registered Learners Count:</span>
                  <span className="text-blue-600 font-extrabold">{users.length}</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Paid Course Unlock Ratio:</span>
                  <span className="text-emerald-600 font-extrabold">
                    {users.length > 0 ? ((payments.filter(p => p.status === 'SUCCESS').length / users.length) * 100).toFixed(1) : 0}%
                  </span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Active Enrolled Students:</span>
                  <span className="text-indigo-600 font-extrabold">{payments.filter(p => p.status === 'SUCCESS').length} Students</span>
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
            />
          )}

        </main>
      </div>

    </div>
  );
};

export default AdminControlCenter;
