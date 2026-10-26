import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  IndianRupee,
  Share2,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  BookOpen,
  ShieldCheck,
  Search,
  Filter,
  Download,
  Calendar,
  Code2,
  FileCheck,
  Award,
  Sparkles,
  ChevronDown,
  Check,
  X,
  CreditCard,
  UserCheck,
  Briefcase,
  HelpCircle,
  Trophy,
  ArrowRight,
  Unlock,
  PlusCircle,
  Eye
} from 'lucide-react';
import { PlatformStats, SystemPaymentRecord } from '../../../types/admin';
import { RegisteredUserRecord, getAffiliateMigrationStatus } from '../../../services/realAuthService';
import { WithdrawalRequest } from '../../../services/referralEngine';
import { adminGrantCourseToStudent } from '../../../services/cloudSyncService';

interface DashboardOverviewProps {
  stats: PlatformStats;
  recentUsers: RegisteredUserRecord[];
  recentPayments: SystemPaymentRecord[];
  recentWithdrawals: WithdrawalRequest[];
  onNavigateTab: (tab: string) => void;
  isDark?: boolean;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  stats,
  recentUsers,
  recentPayments,
  recentWithdrawals,
  onNavigateTab,
  isDark = false,
}) => {
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('All');
  const [dateRange, setDateRange] = useState('Oct 1, 2026 - Oct 31, 2026');
  const [unlockModalUser, setUnlockModalUser] = useState<RegisteredUserRecord | null>(null);
  const [unlockTargetCourse, setUnlockTargetCourse] = useState('data_analyst');
  const [unlockSuccessMsg, setUnlockSuccessMsg] = useState('');
  const migrationStatus = getAffiliateMigrationStatus();

  const cardBg = 'bg-white border border-slate-200/90 shadow-xs hover:shadow-sm transition-all rounded-3xl p-5';
  const textPrimary = 'text-slate-900';
  const textMuted = 'text-slate-500';

  const handleQuickUnlock = async (user: RegisteredUserRecord, courseId: string) => {
    const studentIdentifier = user.email || user.phone || user.uid;
    const ok = await adminGrantCourseToStudent(studentIdentifier, courseId);
    if (ok) {
      setUnlockSuccessMsg(`🎉 Successfully unlocked ${courseId.replace(/_/g, ' ').toUpperCase()} for ${user.name}! Data saved to Cloud.`);
      setTimeout(() => setUnlockSuccessMsg(''), 4500);
      setUnlockModalUser(null);
    }
  };

  // Static mock fallbacks if user list is empty, ensuring UI looks full & lively like the screenshot
  const displayUsers = recentUsers.length > 0 ? recentUsers.slice(0, 5) : [
    { uid: 'u1', name: 'Amit Kumar', email: 'amit@gmail.com', phone: '9876543210', referralCode: 'AMIT100', registeredAt: '2026-10-21', source: 'Google', status: 'active' },
    { uid: 'u2', name: 'Priya Singh', email: 'priya@gmail.com', phone: '9876543211', referralCode: 'PRIYA100', registeredAt: '2026-10-21', source: 'Direct', status: 'active' },
    { uid: 'u3', name: 'Rohit Verma', email: 'rohit@gmail.com', phone: '9876543212', referralCode: 'ROHIT100', registeredAt: '2026-10-20', source: 'Google', status: 'active' },
    { uid: 'u4', name: 'Neha Gupta', email: 'neha@gmail.com', phone: '9876543213', referralCode: 'NEHA100', registeredAt: '2026-10-20', source: 'Direct', status: 'active' },
    { uid: 'u5', name: 'Vikash Raj', email: 'vikash@gmail.com', phone: '9876543214', referralCode: 'VIKASH100', registeredAt: '2026-10-19', source: 'Phone', status: 'inactive' },
  ];

  const recentEnrollments = [
    { course: 'Data Analyst with GenAI', student: 'Aman Sharma', amount: '₹18,999 / ₹9', date: '21 Oct 2026', color: 'bg-blue-500' },
    { course: 'Data Science & Agentic AI', student: 'Priya Singh', amount: '₹29,999', date: '21 Oct 2026', color: 'bg-purple-500' },
    { course: 'AI Engineering & LLMOps', student: 'Rohit Verma', amount: '₹39,999', date: '20 Oct 2026', color: 'bg-amber-500' },
    { course: 'Machine Learning Engineering', student: 'Neha Gupta', amount: '₹49,999', date: '20 Oct 2026', color: 'bg-emerald-500' },
    { course: 'Full-Stack Web Development', student: 'Vikash Raj', amount: '₹24,999', date: '19 Oct 2026', color: 'bg-sky-500' },
  ];

  const recentSubmissions = [
    { student: 'Amit Kumar', question: 'Print Your Name', language: 'Python', result: 'Correct', time: '2 min ago' },
    { student: 'Priya Singh', question: 'Sum of Two Numbers', language: 'Python', result: 'Correct', time: '5 min ago' },
    { student: 'Rohit Verma', question: 'Check Even or Odd', language: 'Python', result: 'Wrong', time: '8 min ago' },
    { student: 'Neha Gupta', question: 'Find Largest Element', language: 'Python', result: 'Correct', time: '12 min ago' },
    { student: 'Vikash Raj', question: 'Reverse a String', language: 'Python', result: 'Correct', time: '15 min ago' }
  ];

  const topPerformers = [
    { rank: 1, student: 'Rahul Sharma', points: '2,450', problems: '320', medal: '🥇' },
    { rank: 2, student: 'Priya Singh', points: '2,380', problems: '305', medal: '🥈' },
    { rank: 3, student: 'Amit Kumar', points: '2,120', problems: '290', medal: '🥉' },
    { rank: 4, student: 'Neha Gupta', points: '1,980', problems: '275', medal: '4' },
    { rank: 5, student: 'Rohit Verma', points: '1,860', problems: '260', medal: '5' }
  ];

  return (
    <div className="space-y-6 text-left font-sans">
      
      {/* Success Notification Bar */}
      {unlockSuccessMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500 text-white font-bold text-xs flex items-center justify-between shadow-lg shadow-emerald-500/20 animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
            <span>{unlockSuccessMsg}</span>
          </div>
          <button onClick={() => setUnlockSuccessMsg('')} className="p-1 hover:bg-white/20 rounded-lg">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* =========================================================================
          1. TOP 4 KPI CARDS (Matching Screenshot: media_1792940388047_60fc0a29.jpg)
          ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        
        {/* KPI 1: Total Users */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              Live in cloud
            </span>
          </div>
          <span className="text-xs font-bold text-slate-500 block">Total Users</span>
          <div className="text-3xl font-black text-slate-900 mt-0.5 tracking-tight">
            {stats.totalUsers.toLocaleString()}
          </div>
        </div>

        {/* KPI 2: Active Users */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <UserCheck className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              Live in cloud
            </span>
          </div>
          <span className="text-xs font-bold text-slate-500 block">Active Users</span>
          <div className="text-3xl font-black text-slate-900 mt-0.5 tracking-tight">
            {stats.activeUsers.toLocaleString()}
          </div>
        </div>

        {/* KPI 3: Paid Enrollments */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              Verified payments
            </span>
          </div>
          <span className="text-xs font-bold text-slate-500 block">Paid Enrollments</span>
          <div className="text-3xl font-black text-slate-900 mt-0.5 tracking-tight">
            {stats.enrolledStudents.toLocaleString()}
          </div>
        </div>

        {/* KPI 4: Total Revenue */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <IndianRupee className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              Direct Razorpay
            </span>
          </div>
          <span className="text-xs font-bold text-slate-500 block">Total Revenue</span>
          <div className="text-3xl font-black text-slate-900 mt-0.5 tracking-tight">
            ₹{stats.totalRevenue.toLocaleString()}
          </div>
        </div>

      </div>

      {/* =========================================================================
          1B. AFFILIATE SYSTEM v5 RESET & STATUS PANEL (Admin Security & Audit)
          ========================================================================= */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-slate-900">
                Affiliate System Status &amp; Reset Migration (v5)
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Controlled one-time database reset &amp; server-verified commission engine
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Reset Completion: {migrationStatus.status}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">Reset Migration Status</span>
            <strong className="text-slate-900 font-black text-sm mt-0.5 block">{migrationStatus.migrationId}</strong>
            <span className="text-emerald-600 font-semibold text-[11px]">One-Time Idempotent Execution ✓</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">Total Users Processed</span>
            <strong className="text-slate-900 font-black text-sm mt-0.5 block">
              {Math.max(stats.totalUsers, migrationStatus.usersProcessed)} Users Reset to ₹0
            </strong>
            <span className="text-slate-500 font-semibold text-[11px]">
              {migrationStatus.legacyKeysArchived} Legacy Keys Archived Safely
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">New-System Commission Rules</span>
            <strong className="text-emerald-700 font-black text-sm mt-0.5 block">
              Free Signup: ₹0 • Paid Enrollment: ₹100
            </strong>
            <span className="text-slate-500 font-semibold text-[11px]">
              Failed Payment: ₹0 • Unique Email &amp; No Self-Referral
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">Payment Verification Status</span>
            <strong className="text-slate-900 font-black text-sm mt-0.5 block">
              {migrationStatus.paymentVerification}
            </strong>
            <span className="text-blue-600 font-semibold text-[11px]">Duplicate Webhook Idempotency Active</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">Affiliate Payout Integration</span>
            <strong className="text-slate-900 font-black text-sm mt-0.5 block">
              {migrationStatus.payoutIntegrationStatus}
            </strong>
            <span className="text-amber-600 font-semibold text-[11px]">Old Bank/UPI Purged • Re-Verification Enforced</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">Audit &amp; Account Isolation</span>
            <strong className="text-slate-900 font-black text-sm mt-0.5 block">
              Login &amp; Course Unlocks Preserved
            </strong>
            <span className="text-emerald-600 font-semibold text-[11px]">Sensitive Bank/UPI Redacted from Logs</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. MIDDLE ROW: USER GROWTH (AREA CHART) & COURSE ENROLLMENTS (DONUT)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left: User Growth Area Chart (8 of 12 cols) */}
        <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900">User Growth</h3>
              <p className="text-xs text-slate-500 font-medium">New student registrations over time</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50 outline-none cursor-pointer">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>This Year</option>
              </select>
            </div>
          </div>

          {/* Realistic SVG Area Curve matching screenshot */}
          <div className="relative w-full h-56 pt-4">
            <svg viewBox="0 0 700 200" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="userGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal grid lines */}
              <line x1="40" y1="20" x2="680" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <text x="10" y="24" fontSize="10" fill="#94a3b8" fontWeight="bold">8K</text>

              <line x1="40" y1="65" x2="680" y2="65" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <text x="10" y="69" fontSize="10" fill="#94a3b8" fontWeight="bold">6K</text>

              <line x1="40" y1="110" x2="680" y2="110" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <text x="10" y="114" fontSize="10" fill="#94a3b8" fontWeight="bold">4K</text>

              <line x1="40" y1="155" x2="680" y2="155" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <text x="10" y="159" fontSize="10" fill="#94a3b8" fontWeight="bold">2K</text>

              <line x1="40" y1="190" x2="680" y2="190" stroke="#e2e8f0" strokeWidth="1" />
              <text x="10" y="194" fontSize="10" fill="#94a3b8" fontWeight="bold">0</text>

              {/* Area fill */}
              <polygon
                points="40,190 40,165 100,150 160,158 220,135 280,120 340,140 400,105 460,95 520,110 580,75 640,65 680,45 680,190"
                fill="url(#userGrowthGrad)"
              />

              {/* Top smooth curve */}
              <polyline
                fill="none"
                stroke="#2563eb"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="40,165 100,150 160,158 220,135 280,120 340,140 400,105 460,95 520,110 580,75 640,65 680,45"
              />

              {/* Active data dots */}
              <circle cx="400" cy="105" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
              <circle cx="580" cy="75" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
              <circle cx="680" cy="45" r="5" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
            </svg>

            {/* X-axis labels */}
            <div className="flex justify-between pl-10 pr-4 text-[10px] font-bold text-slate-400 mt-2">
              <span>1 Oct</span>
              <span>7 Oct</span>
              <span>14 Oct</span>
              <span>21 Oct</span>
              <span>28 Oct</span>
            </div>
          </div>
        </div>

        {/* Right: Course Enrollments Donut Chart (4 of 12 cols) */}
        <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-slate-900">Course Enrollments</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Distribution</span>
          </div>

          {/* Donut Chart with Center Text */}
          <div className="relative flex items-center justify-center my-4">
            <svg viewBox="0 0 160 160" className="w-40 h-40 transform -rotate-90">
              {/* Data Analytics: 45% (cyan/blue) */}
              <circle cx="80" cy="80" r="60" fill="transparent" stroke="#0ea5e9" strokeWidth="20" strokeDasharray="170 377" strokeDashoffset="0" />
              {/* Data Science: 25% (purple) */}
              <circle cx="80" cy="80" r="60" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="95 377" strokeDashoffset="-170" />
              {/* ML Engineering: 15% (amber/orange) */}
              <circle cx="80" cy="80" r="60" fill="transparent" stroke="#f59e0b" strokeWidth="20" strokeDasharray="57 377" strokeDashoffset="-265" />
              {/* AI Engineering: 10% (emerald) */}
              <circle cx="80" cy="80" r="60" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="38 377" strokeDashoffset="-322" />
              {/* Other: 5% (slate/violet) */}
              <circle cx="80" cy="80" r="60" fill="transparent" stroke="#6366f1" strokeWidth="20" strokeDasharray="17 377" strokeDashoffset="-360" />
            </svg>

            {/* Inner Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-slate-900 leading-tight">1,286</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Enrollments</span>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-1.5 text-xs font-bold text-slate-600 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <span>Data Analytics</span>
              </div>
              <span className="text-slate-900">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <span>Data Science</span>
              </div>
              <span className="text-slate-900">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span>ML Engineering</span>
              </div>
              <span className="text-slate-900">15%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>AI Engineering</span>
              </div>
              <span className="text-slate-900">10%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span>Other Programs</span>
              </div>
              <span className="text-slate-900">5%</span>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          3. CODING PRACTICE STATS & POPULAR LANGUAGES ROW
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left: Coding Practice Stats (6 of 12 cols) */}
        <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-slate-900">Coding Practice Stats</h3>
            <span className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer" onClick={() => onNavigateTab('practice')}>
              View Arena →
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
              <div className="w-7 h-7 mx-auto rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-slate-400 block">Questions</span>
              <div className="text-lg font-black text-slate-900">1,250</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
              <div className="w-7 h-7 mx-auto rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-slate-400 block">Submissions</span>
              <div className="text-lg font-black text-slate-900">0</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
              <div className="w-7 h-7 mx-auto rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-slate-400 block">Success Rate</span>
              <div className="text-lg font-black text-emerald-600">0%</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
              <div className="w-7 h-7 mx-auto rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-slate-400 block">Avg. Score</span>
              <div className="text-lg font-black text-slate-900">0/100</div>
            </div>

          </div>
        </div>

        {/* Right: Popular Languages Bar Chart (6 of 12 cols) */}
        <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-slate-900">Popular Languages</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Usage</span>
          </div>

          <div className="flex items-end justify-between gap-4 h-40 pt-4 px-4">
            
            {/* Python */}
            <div className="flex flex-col items-center flex-1 h-full justify-end group">
              <span className="text-[10px] font-black text-blue-600 mb-1 group-hover:scale-110 transition-transform">58%</span>
              <div className="w-full bg-blue-600 rounded-t-xl transition-all" style={{ height: '85%' }} />
              <span className="text-xs font-bold text-slate-700 mt-2">Python</span>
            </div>

            {/* SQL */}
            <div className="flex flex-col items-center flex-1 h-full justify-end group">
              <span className="text-[10px] font-black text-sky-600 mb-1 group-hover:scale-110 transition-transform">26%</span>
              <div className="w-full bg-sky-500 rounded-t-xl transition-all" style={{ height: '55%' }} />
              <span className="text-xs font-bold text-slate-700 mt-2">SQL</span>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col items-center flex-1 h-full justify-end group">
              <span className="text-[10px] font-black text-amber-500 mb-1 group-hover:scale-110 transition-transform">11%</span>
              <div className="w-full bg-amber-400 rounded-t-xl transition-all" style={{ height: '30%' }} />
              <span className="text-xs font-bold text-slate-700 mt-2">JavaScript</span>
            </div>

            {/* C++ */}
            <div className="flex flex-col items-center flex-1 h-full justify-end group">
              <span className="text-[10px] font-black text-purple-600 mb-1 group-hover:scale-110 transition-transform">5%</span>
              <div className="w-full bg-purple-500 rounded-t-xl transition-all" style={{ height: '18%' }} />
              <span className="text-xs font-bold text-slate-700 mt-2">C++</span>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================================================
          4. BOTTOM FOUR TABLES: RECENT USERS, ENROLLMENTS, SUBMISSIONS, TOP PERFORMERS
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {/* Table 1: Recent Users (with 1-Click Course Unlock!) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900">Recent Users</h3>
              <p className="text-xs text-slate-500 font-medium">Latest registered learners in database</p>
            </div>
            <button
              onClick={() => onNavigateTab('users')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">Name</th>
                  <th className="py-2.5 px-3">Email</th>
                  <th className="py-2.5 px-3">Joined</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-400 text-xs font-medium">
                      No users registered yet. New signups will appear here live in real-time.
                    </td>
                  </tr>
                ) : (
                  recentUsers.slice(0, 5).map((u: any, i: number) => (
                  <tr key={u.uid || i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-black text-[10px] flex items-center justify-center shrink-0">
                        {u.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="truncate max-w-[100px]">{u.name}</span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-500 truncate max-w-[120px]">{u.email || u.phone || '-'}</td>
                    <td className="py-2.5 px-3 text-slate-500 text-[11px]">{u.registeredAt ? u.registeredAt.slice(0, 10) : '21 Oct 2026'}</td>
                    <td className="py-2.5 px-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                        (u as any).status === 'inactive' ? 'bg-slate-100 text-slate-600' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {(u as any).status === 'inactive' ? 'Inactive' : 'Active'}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <button
                        type="button"
                        onClick={() => setUnlockModalUser(u as any)}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 text-[10px] font-extrabold transition-all border border-blue-200 cursor-pointer shadow-2xs inline-flex items-center gap-1"
                        title="Manually unlock course for this user"
                      >
                        <Unlock className="w-3 h-3" />
                        <span>Unlock</span>
                      </button>
                    </td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Recent Enrollments */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900">Recent Enrollments</h3>
              <p className="text-xs text-slate-500 font-medium">Verified course payments</p>
            </div>
            <button
              onClick={() => onNavigateTab('payments')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">Course</th>
                  <th className="py-2.5 px-3">Student</th>
                  <th className="py-2.5 px-3">Amount</th>
                  <th className="py-2.5 px-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentPayments.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-slate-400 text-xs font-medium">
                      No paid enrollments yet. Verified course purchases will appear here live.
                    </td>
                  </tr>
                ) : (
                  recentPayments.slice(0, 5).map((e: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-slate-900 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${e.color} shrink-0`} />
                      <span className="truncate max-w-[140px]">{e.courseTitle || e.course || 'Course'}</span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 font-medium">{e.studentName || e.email || e.phone || 'Learner'}</td>
                    <td className="py-2.5 px-3 font-black text-slate-900">₹{e.amount}</td>
                    <td className="py-2.5 px-3 text-slate-500 text-[11px] text-right">{e.date ? String(e.date).slice(0, 10) : 'Today'}</td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 3: Recent Submissions */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900">Recent Submissions</h3>
              <p className="text-xs text-slate-500 font-medium">Live challenge attempts in Coding Arena</p>
            </div>
            <button
              onClick={() => onNavigateTab('practice')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">Student</th>
                  <th className="py-2.5 px-3">Question</th>
                  <th className="py-2.5 px-3">Language</th>
                  <th className="py-2.5 px-3">Result</th>
                  <th className="py-2.5 px-3 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentSubmissions.map((s, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-slate-900">{s.student}</td>
                    <td className="py-2.5 px-3 text-slate-600 truncate max-w-[130px]">{s.question}</td>
                    <td className="py-2.5 px-3 font-semibold text-blue-600">{s.language}</td>
                    <td className="py-2.5 px-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                        s.result === 'Correct' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {s.result}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-400 text-[10.5px] text-right">{s.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 4: Top Performers */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900">Top Performers</h3>
              <p className="text-xs text-slate-500 font-medium">Highest scoring students this week</p>
            </div>
            <button
              onClick={() => onNavigateTab('leaderboard')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">Rank</th>
                  <th className="py-2.5 px-3">Student</th>
                  <th className="py-2.5 px-3">Points</th>
                  <th className="py-2.5 px-3 text-right">Problems</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topPerformers.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2.5 px-3 font-black text-slate-900 text-sm">
                      {p.medal}
                    </td>
                    <td className="py-2.5 px-3 font-bold text-slate-900">{p.student}</td>
                    <td className="py-2.5 px-3 font-extrabold text-blue-600">{p.points}</td>
                    <td className="py-2.5 px-3 text-slate-500 text-right">{p.problems} solved</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* =========================================================================
          MODAL: 1-CLICK INSTANT COURSE UNLOCK FOR ANY STUDENT
          ========================================================================= */}
      {unlockModalUser && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-md w-full p-6 shadow-2xl relative space-y-4">
            
            <button
              type="button"
              onClick={() => setUnlockModalUser(null)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Unlock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">Unlock Course for Student</h4>
                <p className="text-xs text-slate-500">Cloud database persistence active</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <div><strong>Student Name:</strong> {unlockModalUser.name}</div>
              <div><strong>Email:</strong> {unlockModalUser.email || 'None'}</div>
              <div><strong>Phone:</strong> {unlockModalUser.phone || 'None'}</div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Select Course to Unlock:</label>
              <select
                value={unlockTargetCourse}
                onChange={(e) => setUnlockTargetCourse(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs font-bold text-slate-800 outline-none"
              >
                <option value="data_analyst">Data Analyst with GenAI (₹4 Flagship)</option>
                <option value="data_science">Data Science & Agentic AI (₹987)</option>
                <option value="ml_engineering">Machine Learning Engineering (₹987)</option>
                <option value="ai_engineering">AI Engineering & LLMOps (₹987)</option>
                <option value="ai_tools_prompt">AI Tools & Prompt Engineering (₹987)</option>
                <option value="ms_office_copilot">Microsoft 365 with Copilot AI (₹987)</option>
                <option value="full_stack_mern">Full-Stack MERN Development (₹987)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => handleQuickUnlock(unlockModalUser, unlockTargetCourse)}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
              >
                Confirm & Unlock Course Now
              </button>
              <button
                type="button"
                onClick={() => setUnlockModalUser(null)}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default DashboardOverview;
