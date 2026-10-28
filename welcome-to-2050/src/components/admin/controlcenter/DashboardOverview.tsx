import React, { useState, useMemo } from 'react';
import {
  Users,
  IndianRupee,
  BookOpen,
  ShieldCheck,
  Calendar,
  ChevronDown,
  X,
  CreditCard,
  UserCheck,
  Briefcase,
  ArrowRight,
  Unlock,
  CheckCircle2,
  Clock,
  Building
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
}) => {
  const [dateRangeFilter, setDateRangeFilter] = useState<'30' | '7' | '365'>('30');
  const [unlockModalUser, setUnlockModalUser] = useState<RegisteredUserRecord | null>(null);
  const [unlockTargetCourse, setUnlockTargetCourse] = useState('data_analyst');
  const [unlockSuccessMsg, setUnlockSuccessMsg] = useState('');
  const [showMigrationDetails, setShowMigrationDetails] = useState(false);
  const migrationStatus = getAffiliateMigrationStatus();

  // Active Users metric: Verified sign-ins within 30-day activity window.
  const activeCount = useMemo(() => {
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    return recentUsers.filter((u: any) => {
      if (!u.lastLoginAt) return false;
      const t = new Date(u.lastLoginAt).getTime();
      return !isNaN(t) && t >= thirtyDaysAgo;
    }).length;
  }, [recentUsers]);

  // Real User Growth aggregated from real Firebase Auth registration timestamps, filtered by date range
  const userGrowthData = useMemo(() => {
    if (!recentUsers || recentUsers.length === 0) return [];
    
    const now = Date.now();
    const daysLimit = Number(dateRangeFilter) || 30;
    const cutoff = now - daysLimit * 24 * 60 * 60 * 1000;

    // Filter users within selected date range, parse dates, sort ascending
    const sorted = [...recentUsers]
      .filter((u) => {
        if (!u.registeredAt) return false;
        const regTime = new Date(u.registeredAt).getTime();
        return !isNaN(regTime) && regTime >= cutoff;
      })
      .sort((a, b) => new Date(a.registeredAt).getTime() - new Date(b.registeredAt).getTime());

    if (sorted.length === 0) return [];

    // Group by date (YYYY-MM-DD)
    const dateCounts: Record<string, number> = {};
    sorted.forEach((u) => {
      const d = u.registeredAt.slice(0, 10);
      dateCounts[d] = (dateCounts[d] || 0) + 1;
    });

    const entries = Object.entries(dateCounts);
    let runningTotal = 0;
    return entries.map(([dateStr, count]) => {
      runningTotal += count;
      const parsed = new Date(dateStr);
      const label = isNaN(parsed.getTime())
        ? dateStr
        : parsed.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      return {
        date: label,
        rawDate: dateStr,
        newUsers: count,
        total: runningTotal,
      };
    });
  }, [recentUsers, dateRangeFilter]);

  const handleQuickUnlock = async (user: RegisteredUserRecord, courseId: string) => {
    const studentIdentifier = user.email || user.phone || user.uid;
    const ok = await adminGrantCourseToStudent(studentIdentifier, courseId);
    if (ok) {
      setUnlockSuccessMsg(`🎉 Successfully unlocked ${courseId.replace(/_/g, ' ').toUpperCase()} for ${user.name}! Saved to cloud.`);
      setTimeout(() => setUnlockSuccessMsg(''), 4500);
      setUnlockModalUser(null);
    } else {
      alert('Failed to grant course unlock. Check admin privileges.');
    }
  };

  // Filter recent paid enrollments from verified payments
  const recentEnrollments = useMemo(() => {
    return recentPayments.filter((p) => p.status === 'SUCCESS');
  }, [recentPayments]);

  return (
    <div className="space-y-6 text-left font-sans text-[#0F172A]">
      
      {/* Success Notification Bar */}
      {unlockSuccessMsg && (
        <div className="p-4 rounded-2xl bg-[#059669] text-white font-bold text-xs flex items-center justify-between shadow-xs animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
            <span>{unlockSuccessMsg}</span>
          </div>
          <button onClick={() => setUnlockSuccessMsg('')} className="p-1 hover:bg-white/20 rounded-lg cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* =========================================================================
          1. TOP 4 KPI CARDS (PREMIUM LIGHT THEME)
          ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        
        {/* KPI 1: Total Registered Users */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-xs hover:shadow-sm transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
              Live from Firebase
            </span>
          </div>
          <span className="text-xs font-semibold text-[#64748B] block">Total Registered Users</span>
          <div className="text-3xl font-black text-[#0F172A] mt-1 tracking-tight">
            {stats.totalUsers.toLocaleString()}
          </div>
          <span className="text-[11px] text-[#64748B] font-medium mt-1 block">
            Authoritative Google Identity accounts
          </span>
        </div>

        {/* KPI 2: Active Users */}
        {(() => {
          const effectiveActive = typeof stats.activeUsers === 'number' ? stats.activeUsers : activeCount;
          return (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-xs hover:shadow-sm transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 rounded-full">
                  {effectiveActive} Active (30d)
                </span>
              </div>
              <span className="text-xs font-semibold text-[#64748B] block">Active Users (30-day Window)</span>
              <div className="text-3xl font-black text-[#0F172A] mt-1 tracking-tight">
                {effectiveActive.toLocaleString()}
              </div>
              <span className="text-[11px] text-[#64748B] font-medium mt-1 block">
                {effectiveActive > 0 ? 'Verified sign-ins in last 30 days' : 'No sign-ins in last 30 days'}
              </span>
            </div>
          );
        })()}

        {/* KPI 3: Paid Enrollments */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-xs hover:shadow-sm transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-0.5 rounded-full">
              Firestore cloud
            </span>
          </div>
          <span className="text-xs font-semibold text-[#64748B] block">Paid Enrollments</span>
          <div className="text-3xl font-black text-[#0F172A] mt-1 tracking-tight">
            {stats.enrolledStudents.toLocaleString()}
          </div>
          <span className="text-[11px] text-[#64748B] font-medium mt-1 block">
            Verified course purchases
          </span>
        </div>

        {/* KPI 4: Total Revenue */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-xs hover:shadow-sm transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] text-[#9333EA] flex items-center justify-center font-bold">
              <IndianRupee className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 rounded-full">
              Direct Razorpay
            </span>
          </div>
          <span className="text-xs font-semibold text-[#64748B] block">Total Revenue</span>
          <div className="text-3xl font-black text-[#0F172A] mt-1 tracking-tight">
            ₹{stats.totalRevenue.toLocaleString()}
          </div>
          <span className="text-[11px] text-[#64748B] font-medium mt-1 block">
            Captured gateway payments
          </span>
        </div>

      </div>

      {/* =========================================================================
          1B. AFFILIATE SYSTEM v5 RESET & COMPACT STATUS PANEL
          ========================================================================= */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] flex items-center gap-2">
              <span>Affiliate System v5 Cloud Synchronized</span>
              <span className="bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] text-[10px] font-black px-2 py-0.5 rounded-full">
                Active &amp; Idempotent
              </span>
            </h4>
            <p className="text-[11px] text-[#64748B] font-medium">
              Real-time Firestore commission &amp; balance reservation engine
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowMigrationDetails(!showMigrationDetails)}
          className="text-xs font-bold text-[#64748B] hover:text-[#0F172A] px-3 py-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F1F5F9] transition cursor-pointer flex items-center gap-1.5 self-start sm:self-auto shrink-0"
        >
          <span>{showMigrationDetails ? 'Hide Migration Details' : 'View Migration Details'}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showMigrationDetails ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {showMigrationDetails && (
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  Affiliate System Status &amp; Reset Migration (v5)
                </h3>
                <p className="text-xs text-[#64748B] font-medium">
                  Controlled one-time database reset &amp; server-verified commission engine
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Reset Completion: {migrationStatus.status}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#64748B] font-bold uppercase text-[10px] block">Reset Migration ID</span>
              <strong className="text-[#0F172A] font-black text-sm mt-0.5 block">{migrationStatus.migrationId}</strong>
              <span className="text-[#059669] font-semibold text-[11px]">One-Time Idempotent Execution ✓</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#64748B] font-bold uppercase text-[10px] block">Total Users Processed</span>
              <strong className="text-[#0F172A] font-black text-sm mt-0.5 block">
                {Math.max(stats.totalUsers, migrationStatus.usersProcessed)} Users Reset to ₹0
              </strong>
              <span className="text-[#64748B] font-semibold text-[11px]">
                {migrationStatus.legacyKeysArchived} Legacy Keys Safely Archived
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#64748B] font-bold uppercase text-[10px] block">New-System Commission Rules</span>
              <strong className="text-[#059669] font-black text-sm mt-0.5 block">
                Free Signup: ₹0 • Paid Enrollment: ₹100
              </strong>
              <span className="text-[#64748B] font-semibold text-[11px]">
                Failed Payment: ₹0 • Unique Email &amp; No Self-Referral
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#64748B] font-bold uppercase text-[10px] block">Payment Verification Status</span>
              <strong className="text-[#0F172A] font-black text-sm mt-0.5 block">
                {migrationStatus.paymentVerification}
              </strong>
              <span className="text-[#2563EB] font-semibold text-[11px]">Duplicate Webhook Idempotency Active</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#64748B] font-bold uppercase text-[10px] block">Affiliate Payout Integration</span>
              <strong className="text-[#0F172A] font-black text-sm mt-0.5 block">
                {migrationStatus.payoutIntegrationStatus}
              </strong>
              <span className="text-[#D97706] font-semibold text-[11px]">Old Bank/UPI Purged • Re-Verification Enforced</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#64748B] font-bold uppercase text-[10px] block">Audit &amp; Account Isolation</span>
              <strong className="text-[#0F172A] font-black text-sm mt-0.5 block">
                Login &amp; Course Unlocks Preserved
              </strong>
              <span className="text-[#059669] font-semibold text-[11px]">Sensitive Bank/UPI Redacted from Logs</span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          2. MIDDLE ROW: USER GROWTH (REAL SVG CHART) & COURSE ENROLLMENTS
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left: User Growth (8 of 12 cols) - 100% REAL DATA ONLY */}
        <div className="lg:col-span-8 bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A]">User Growth</h3>
              <p className="text-xs text-[#64748B] font-medium">Real registered student accounts from Firebase Authentication</p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={dateRangeFilter}
                onChange={(e: any) => setDateRangeFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-[#E2E8F0] text-xs font-bold text-[#0F172A] bg-[#F8FAFC] outline-none cursor-pointer hover:border-[#CBD5E1]"
              >
                <option value="30">Last 30 Days</option>
                <option value="7">Last 7 Days</option>
                <option value="365">This Year</option>
              </select>
            </div>
          </div>

          {/* Real SVG Curve or Clean Empty State */}
          {userGrowthData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-52 text-center">
              <Users className="w-8 h-8 text-[#94A3B8] mb-2" />
              <span className="text-xs font-bold text-[#0F172A]">No user registrations in selected period</span>
              <span className="text-[11px] text-[#64748B]">New student registrations will plot here live in real-time.</span>
            </div>
          ) : (
            <div className="relative w-full h-56 pt-2">
              <svg viewBox="0 0 700 200" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="userGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal reference grid lines */}
                <line x1="40" y1="30" x2="680" y2="30" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <text x="10" y="34" fontSize="10" fill="#94A3B8" fontWeight="bold">15</text>

                <line x1="40" y1="75" x2="680" y2="75" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <text x="10" y="79" fontSize="10" fill="#94A3B8" fontWeight="bold">10</text>

                <line x1="40" y1="125" x2="680" y2="125" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <text x="10" y="129" fontSize="10" fill="#94A3B8" fontWeight="bold">5</text>

                <line x1="40" y1="175" x2="680" y2="175" stroke="#E2E8F0" strokeWidth="1" />
                <text x="10" y="179" fontSize="10" fill="#94A3B8" fontWeight="bold">0</text>

                {/* Plot real coordinates */}
                {(() => {
                  const maxVal = Math.max(15, stats.totalUsers);
                  const count = userGrowthData.length;
                  const xStep = count > 1 ? (640 / (count - 1)) : 320;
                  
                  const points = userGrowthData.map((d, idx) => {
                    const x = count === 1 ? 360 : 40 + idx * xStep;
                    const y = 175 - (d.total / maxVal) * 145;
                    return { x, y, ...d };
                  });

                  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(' ');
                  const firstX = points[0]?.x || 40;
                  const lastX = points[points.length - 1]?.x || 680;
                  const polygonPoints = `${firstX},175 ${polylinePoints} ${lastX},175`;

                  return (
                    <g>
                      <polygon points={polygonPoints} fill="url(#userGrowthGrad)" />
                      <polyline
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={polylinePoints}
                      />
                      {points.map((p, idx) => (
                        <g key={idx}>
                          <circle cx={p.x} cy={p.y} r="4.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
                          <title>{`${p.date}: ${p.total} total registered students (+${p.newUsers})`}</title>
                        </g>
                      ))}
                    </g>
                  );
                })()}
              </svg>

              {/* X-axis real dates */}
              <div className="flex justify-between pl-10 pr-4 text-[10px] font-bold text-[#64748B] mt-2">
                {userGrowthData.slice(0, 6).map((d, i) => (
                  <span key={i}>{d.date}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Course Enrollments (4 of 12 cols) - 100% REAL DATA ONLY */}
        <div className="lg:col-span-4 bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A]">Course Enrollments</h3>
              <p className="text-xs text-[#64748B] font-medium">Verified student purchases</p>
            </div>
            <span className="text-[10px] font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-full">
              Real-time
            </span>
          </div>

          {/* Real Empty State if zero enrollments */}
          {stats.enrolledStudents === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center py-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-3">
                <BookOpen className="w-7 h-7" />
              </div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-1">No enrollments yet</h4>
              <p className="text-xs text-[#64748B] max-w-[200px]">
                Verified course purchases will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4 my-auto py-4">
              <div className="text-center">
                <div className="text-3xl font-black text-[#0F172A]">{stats.enrolledStudents}</div>
                <div className="text-xs text-[#64748B] font-medium">Active Enrolled Learners</div>
              </div>
              <div className="space-y-2 text-xs font-semibold">
                {Object.entries(stats.courseEnrollments || {}).map(([cName, count], idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-[#F8FAFC]">
                    <span className="text-[#0F172A] truncate max-w-[180px]">{cName}</span>
                    <span className="text-[#2563EB] font-bold">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
            <span>Total Enrolled</span>
            <strong className="text-[#0F172A] font-bold">{stats.enrolledStudents} Students</strong>
          </div>
        </div>

      </div>

      {/* =========================================================================
          3. RECENT ACTIVITY SECTIONS: 3 CLEAN CARDS (ENROLLMENTS, PAYMENTS, WITHDRAWALS)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Card 1: Recent Enrollments */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#2563EB]" />
                <span>Recent Enrollments</span>
              </h3>
              <button
                type="button"
                onClick={() => onNavigateTab('courses')}
                className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-0.5 cursor-pointer"
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs text-[#64748B]">Verified paid course unlocks</p>
          </div>

          <div className="overflow-x-auto">
            {recentEnrollments.length === 0 ? (
              <div className="py-8 text-center text-[#64748B] text-xs font-medium space-y-1">
                <BookOpen className="w-6 h-6 mx-auto text-[#94A3B8]" />
                <p className="font-bold text-[#0F172A]">No enrollments yet</p>
                <p className="text-[11px] text-[#64748B]">Verified course purchases will appear here live.</p>
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F8FAFC] text-[10px] uppercase font-bold text-[#64748B]">
                  <tr>
                    <th className="py-2 px-2.5">Course</th>
                    <th className="py-2 px-2.5">Learner</th>
                    <th className="py-2 px-2.5 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {recentEnrollments.slice(0, 5).map((e, idx) => (
                    <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                      <td className="py-2.5 px-2.5 font-bold text-[#0F172A] truncate max-w-[120px]">
                        {e.courseName || 'Course'}
                      </td>
                      <td className="py-2.5 px-2.5 text-[#64748B] truncate max-w-[100px]">
                        {e.userName || e.userEmail || 'Learner'}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-black text-[#0F172A]">
                        ₹{e.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Card 2: Recent Payments */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#2563EB]" />
                <span>Recent Payments</span>
              </h3>
              <button
                type="button"
                onClick={() => onNavigateTab('payments')}
                className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-0.5 cursor-pointer"
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs text-[#64748B]">Direct gateway transactions</p>
          </div>

          <div className="overflow-x-auto">
            {recentPayments.length === 0 ? (
              <div className="py-8 text-center text-[#64748B] text-xs font-medium space-y-1">
                <CreditCard className="w-6 h-6 mx-auto text-[#94A3B8]" />
                <p className="font-bold text-[#0F172A]">No payments recorded yet</p>
                <p className="text-[11px] text-[#64748B]">Live gateway payments will appear here.</p>
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F8FAFC] text-[10px] uppercase font-bold text-[#64748B]">
                  <tr>
                    <th className="py-2 px-2.5">Tx ID / Date</th>
                    <th className="py-2 px-2.5">Learner</th>
                    <th className="py-2 px-2.5 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {recentPayments.slice(0, 5).map((pay) => (
                    <tr key={pay.id} className="hover:bg-[#F8FAFC] transition-colors">
                      <td className="py-2.5 px-2.5">
                        <div className="font-mono text-[11px] font-bold text-[#0F172A] truncate max-w-[90px]">{pay.id}</div>
                        <div className="text-[10px] text-[#64748B]">{new Date(pay.date).toLocaleDateString()}</div>
                      </td>
                      <td className="py-2.5 px-2.5 font-medium text-[#64748B] truncate max-w-[100px]">
                        {pay.userName}
                      </td>
                      <td className="py-2.5 px-2.5 text-right">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          pay.status === 'SUCCESS'
                            ? 'bg-[#ECFDF5] text-[#059669]'
                            : 'bg-[#FFFBEB] text-[#D97706]'
                        }`}>
                          {pay.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Card 3: Withdrawal Requests */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-[#2563EB]" />
                <span>Withdrawal Requests</span>
              </h3>
              <button
                type="button"
                onClick={() => onNavigateTab('withdrawals')}
                className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-0.5 cursor-pointer"
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs text-[#64748B]">Affiliate payout queue</p>
          </div>

          <div className="overflow-x-auto">
            {recentWithdrawals.length === 0 ? (
              <div className="py-8 text-center text-[#64748B] text-xs font-medium space-y-1">
                <IndianRupee className="w-6 h-6 mx-auto text-[#94A3B8]" />
                <p className="font-bold text-[#0F172A]">No withdrawal requests yet</p>
                <p className="text-[11px] text-[#64748B]">Payout requests will appear here live.</p>
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F8FAFC] text-[10px] uppercase font-bold text-[#64748B]">
                  <tr>
                    <th className="py-2 px-2.5">Affiliate</th>
                    <th className="py-2 px-2.5">Amount</th>
                    <th className="py-2 px-2.5 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {recentWithdrawals.slice(0, 5).map((w) => (
                    <tr key={w.id} className="hover:bg-[#F8FAFC] transition-colors">
                      <td className="py-2.5 px-2.5">
                        <div className="font-bold text-[#0F172A] truncate max-w-[100px]">{w.referrerId}</div>
                        <div className="text-[10px] text-[#64748B] flex items-center gap-1">
                          {w.method === 'UPI' ? <CreditCard className="w-3 h-3 text-[#2563EB]" /> : <Building className="w-3 h-3 text-[#2563EB]" />}
                          <span>{w.method}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-2.5 font-black text-[#0F172A]">
                        ₹{w.amount}
                      </td>
                      <td className="py-2.5 px-2.5 text-right">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          w.status === 'PAID'
                            ? 'bg-[#ECFDF5] text-[#059669]'
                            : w.status === 'REJECTED'
                            ? 'bg-[#FEF2F2] text-[#DC2626]'
                            : 'bg-[#FFFBEB] text-[#D97706]'
                        }`}>
                          {w.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>

      {/* =========================================================================
          4. MODAL: 1-CLICK INSTANT COURSE UNLOCK FOR ANY STUDENT
          ========================================================================= */}
      {unlockModalUser && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] max-w-md w-full p-6 shadow-xl relative space-y-4">
            
            <button
              type="button"
              onClick={() => setUnlockModalUser(null)}
              className="absolute top-4 right-4 p-1 rounded-lg hover:bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                <Unlock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A]">Unlock Course for Student</h4>
                <p className="text-xs text-[#64748B]">Direct cloud database entitlement</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs space-y-1">
              <div><strong>Student Name:</strong> {unlockModalUser.name}</div>
              <div><strong>Email:</strong> {unlockModalUser.email || 'None'}</div>
              <div><strong>Phone:</strong> {unlockModalUser.phone || 'None'}</div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#64748B] block mb-1">Target Program</label>
              <select
                value={unlockTargetCourse}
                onChange={(e) => setUnlockTargetCourse(e.target.value)}
                className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] outline-none cursor-pointer"
              >
                <option value="data_analyst">Data Analyst with GenAI Flagship</option>
                <option value="data_science">Data Science &amp; Agentic AI</option>
                <option value="ml_engineering">Machine Learning Engineering</option>
                <option value="ai_engineering">AI Engineering &amp; LLMOps</option>
                <option value="full_stack">Full-Stack Web Development</option>
              </select>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setUnlockModalUser(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-[#64748B] hover:text-[#0F172A] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleQuickUnlock(unlockModalUser, unlockTargetCourse)}
                className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                Confirm Cloud Unlock
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
