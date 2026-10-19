import React from 'react';
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
  Calendar
} from 'lucide-react';
import { PlatformStats, SystemPaymentRecord } from '../../../types/admin';
import { RegisteredUserRecord } from '../../../services/realAuthService';
import { WithdrawalRequest } from '../../../services/referralEngine';

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
  const cardBg = isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90 shadow-sm hover:shadow-md';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';
  const dividerClass = isDark ? 'divide-slate-800' : 'divide-slate-100';
  const barBg = isDark ? 'bg-slate-800' : 'bg-slate-100';

  return (
    <div className="space-y-6 text-left">
      {/* ── 1. Top Highlights Grid (6 Cards) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
        {/* Total Users */}
        <div className={`${cardBg} border rounded-2xl p-4 transition-all`}>
          <div className={`flex items-center justify-between ${textMuted} mb-2`}>
            <span className="text-xs font-bold">Total Learners</span>
            <div className={`w-8 h-8 rounded-xl ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'} flex items-center justify-center`}>
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className={`text-2xl font-black ${textPrimary}`}>{stats.totalUsers.toLocaleString()}</div>
          <div className="text-[11px] font-medium text-emerald-600 mt-1 flex items-center gap-1">
            <span>● {stats.activeUsers} Active</span>
            <span className={isDark ? 'text-slate-500' : 'text-slate-300'}>•</span>
            <span className="text-rose-600">{stats.suspendedUsers} Suspended</span>
          </div>
        </div>

        {/* Total Enrolled */}
        <div className={`${cardBg} border rounded-2xl p-4 transition-all`}>
          <div className={`flex items-center justify-between ${textMuted} mb-2`}>
            <span className="text-xs font-bold">Enrolled Students</span>
            <div className={`w-8 h-8 rounded-xl ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'} flex items-center justify-center`}>
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className={`text-2xl font-black ${textPrimary}`}>{stats.enrolledStudents.toLocaleString()}</div>
          <div className={`text-[11px] font-medium ${textMuted} mt-1`}>
            Super 30 &amp; 10 Modules
          </div>
        </div>

        {/* Verified Revenue */}
        <div className={`${cardBg} border rounded-2xl p-4 transition-all`}>
          <div className={`flex items-center justify-between ${textMuted} mb-2`}>
            <span className="text-xs font-bold">Verified Revenue</span>
            <div className={`w-8 h-8 rounded-xl ${isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'} flex items-center justify-center`}>
              <IndianRupee className="w-4 h-4" />
            </div>
          </div>
          <div className={`text-2xl font-black ${textPrimary}`}>₹{stats.totalRevenue.toLocaleString()}</div>
          <div className="text-[11px] font-medium text-emerald-600 mt-1">
            100% Real Gateway
          </div>
        </div>

        {/* Total Referrals */}
        <div className={`${cardBg} border rounded-2xl p-4 transition-all`}>
          <div className={`flex items-center justify-between ${textMuted} mb-2`}>
            <span className="text-xs font-bold">Referrals Generated</span>
            <div className={`w-8 h-8 rounded-xl ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'} flex items-center justify-center`}>
              <Share2 className="w-4 h-4" />
            </div>
          </div>
          <div className={`text-2xl font-black ${textPrimary}`}>{stats.totalReferrals.toLocaleString()}</div>
          <div className={`text-[11px] font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'} mt-1`}>
            ₹125/100 Commission
          </div>
        </div>

        {/* Pending Withdrawals */}
        <div className={`${cardBg} border rounded-2xl p-4 transition-all cursor-pointer`} onClick={() => onNavigateTab('withdrawals')}>
          <div className={`flex items-center justify-between ${textMuted} mb-2`}>
            <span className="text-xs font-bold">Pending Payouts</span>
            <div className={`w-8 h-8 rounded-xl ${isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'} flex items-center justify-center`}>
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-amber-500">{stats.pendingWithdrawalsCount}</div>
          <div className={`text-[11px] font-medium ${textMuted} mt-1`}>
            ₹{stats.pendingWithdrawalsAmount.toLocaleString()} awaiting review
          </div>
        </div>

        {/* Paid Withdrawals */}
        <div className={`${cardBg} border rounded-2xl p-4 transition-all`}>
          <div className={`flex items-center justify-between ${textMuted} mb-2`}>
            <span className="text-xs font-bold">Settled Payouts</span>
            <div className={`w-8 h-8 rounded-xl ${isDark ? 'bg-teal-500/10 text-teal-400' : 'bg-teal-50 text-teal-600'} flex items-center justify-center`}>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-600">₹{stats.paidWithdrawalsAmount.toLocaleString()}</div>
          <div className={`text-[11px] font-medium ${textMuted} mt-1`}>
            {stats.paidWithdrawalsCount} requests completed
          </div>
        </div>
      </div>

      {/* ── 2. Course-wise Enrollment Distribution Bar Charts ── */}
      <div className={`${cardBg} border rounded-3xl p-6 shadow-sm`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className={`text-base font-black ${textPrimary}`}>Course Curriculum Enrollment Metrics</h3>
            <p className={`text-xs ${textMuted} font-medium`}>Real student distribution across active training pillars</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab('courses')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            <span>Manage Courses</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-3.5">
          {Object.entries(stats.courseEnrollments).map(([courseName, count]) => {
            const maxVal = Math.max(...Object.values(stats.courseEnrollments), 1);
            const pct = Math.round((count / maxVal) * 100);
            return (
              <div key={courseName} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{courseName}</span>
                  <span className={`font-black ${textPrimary}`}>{count} Students</span>
                </div>
                <div className={`w-full h-2.5 ${barBg} rounded-full overflow-hidden`}>
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 3. Two-Column Live Activity Feeds ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Recent Student Registrations */}
        <div className={`${cardBg} border rounded-3xl p-6 shadow-sm`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-sm font-black ${textPrimary} flex items-center gap-2`}>
              <Users className="w-4 h-4 text-blue-600" />
              <span>Recent Learner Registrations</span>
            </h3>
            <button
              type="button"
              onClick={() => onNavigateTab('users')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              View All Users ➔
            </button>
          </div>

          <div className={`divide-y ${dividerClass}`}>
            {recentUsers.length === 0 ? (
              <div className={`py-8 text-center text-xs ${textMuted} font-medium`}>
                No registered learners in database yet. New student signups will appear here automatically.
              </div>
            ) : (
              recentUsers.slice(0, 5).map((user) => (
                <div key={user.uid} className="py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-xl ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-100 border-slate-200 text-slate-800'} border flex items-center justify-center font-bold text-xs shrink-0`}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-xs font-bold ${textPrimary} truncate`}>{user.name}</div>
                      <div className={`text-[11px] ${textMuted} truncate`}>{user.email || user.phone || 'Direct'}</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`inline-block px-2 py-0.5 rounded-full ${isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-600 border-slate-200'} text-[10px] font-bold border`}>
                      {user.source}
                    </span>
                    <div className={`text-[10px] ${textMuted} mt-0.5`}>
                      {user.registeredAt ? new Date(user.registeredAt).toLocaleDateString() : 'Today'}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Recent Financial Transactions */}
        <div className={`${cardBg} border rounded-3xl p-6 shadow-sm`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-sm font-black ${textPrimary} flex items-center gap-2`}>
              <IndianRupee className="w-4 h-4 text-emerald-600" />
              <span>Recent Verified Transactions</span>
            </h3>
            <button
              type="button"
              onClick={() => onNavigateTab('payments')}
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer"
            >
              View Ledger ➔
            </button>
          </div>

          <div className={`divide-y ${dividerClass}`}>
            {recentPayments.length === 0 ? (
              <div className={`py-8 text-center text-xs ${textMuted} font-medium`}>
                ₹0 collected. No student payment transactions recorded yet. Real gateway payments will appear here.
              </div>
            ) : (
              recentPayments.slice(0, 5).map((pay) => (
                <div key={pay.id} className="py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                      ₹
                    </div>
                    <div className="min-w-0">
                      <div className={`text-xs font-bold ${textPrimary} truncate`}>{pay.userName}</div>
                      <div className={`text-[11px] ${textMuted} truncate`}>{pay.paymentRef}</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-xs font-black ${textPrimary}`}>₹{pay.amount}</div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-black border ${
                      pay.status === 'SUCCESS'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        : 'bg-amber-50 border-amber-200 text-amber-700'
                    }`}>
                      {pay.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
