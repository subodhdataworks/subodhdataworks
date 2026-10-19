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
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  stats,
  recentUsers,
  recentPayments,
  recentWithdrawals,
  onNavigateTab,
}) => {
  return (
    <div className="space-y-6 text-left">
      {/* ── 1. Top Highlights Grid (6 Cards) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
        {/* Total Users */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Total Learners</span>
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white">{stats.totalUsers.toLocaleString()}</div>
          <div className="text-[11px] font-medium text-emerald-400 mt-1 flex items-center gap-1">
            <span>● {stats.activeUsers} Active</span>
            <span className="text-slate-500">•</span>
            <span className="text-rose-400">{stats.suspendedUsers} Suspended</span>
          </div>
        </div>

        {/* Total Enrolled */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Enrolled Students</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white">{stats.enrolledStudents.toLocaleString()}</div>
          <div className="text-[11px] font-medium text-slate-400 mt-1">
            Super 30 &amp; 10 Modules
          </div>
        </div>

        {/* Verified Revenue */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Verified Revenue</span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <IndianRupee className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white">₹{stats.totalRevenue.toLocaleString()}</div>
          <div className="text-[11px] font-medium text-emerald-400 mt-1">
            100% Real Gateway
          </div>
        </div>

        {/* Total Referrals */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Referrals Generated</span>
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white">{stats.totalReferrals.toLocaleString()}</div>
          <div className="text-[11px] font-medium text-purple-400 mt-1">
            ₹125/100 Commission
          </div>
        </div>

        {/* Pending Withdrawals */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm hover:border-slate-700 transition-all cursor-pointer" onClick={() => onNavigateTab('withdrawals')}>
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Pending Payouts</span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-amber-400">{stats.pendingWithdrawalsCount}</div>
          <div className="text-[11px] font-medium text-slate-400 mt-1">
            ₹{stats.pendingWithdrawalsAmount.toLocaleString()} awaiting review
          </div>
        </div>

        {/* Paid Withdrawals */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Settled Payouts</span>
            <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-400">₹{stats.paidWithdrawalsAmount.toLocaleString()}</div>
          <div className="text-[11px] font-medium text-slate-400 mt-1">
            {stats.paidWithdrawalsCount} requests completed
          </div>
        </div>
      </div>

      {/* ── 2. Course-wise Enrollment Distribution Bar Charts ── */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-black text-white">Course Curriculum Enrollment Metrics</h3>
            <p className="text-xs text-slate-400 font-medium">Real student distribution across active training pillars</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab('courses')}
            className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
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
                  <span className="font-bold text-slate-300">{courseName}</span>
                  <span className="font-black text-white">{count} Students</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
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
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Recent Learner Registrations</span>
            </h3>
            <button
              type="button"
              onClick={() => onNavigateTab('users')}
              className="text-xs font-bold text-blue-400 hover:text-blue-300 cursor-pointer"
            >
              View All Users ➔
            </button>
          </div>

          <div className="divide-y divide-slate-800">
            {recentUsers.slice(0, 5).map((user) => (
              <div key={user.uid} className="py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-white shrink-0">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{user.name}</div>
                    <div className="text-[11px] text-slate-400 truncate">{user.email || user.phone || 'Direct'}</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-bold text-slate-300 border border-slate-700">
                    {user.source}
                  </span>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {user.registeredAt ? new Date(user.registeredAt).toLocaleDateString() : 'Today'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Recent Financial Transactions */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-emerald-400" />
              <span>Recent Verified Transactions</span>
            </h3>
            <button
              type="button"
              onClick={() => onNavigateTab('payments')}
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
            >
              View Ledger ➔
            </button>
          </div>

          <div className="divide-y divide-slate-800">
            {recentPayments.slice(0, 5).map((pay) => (
              <div key={pay.id} className="py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                    ₹
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{pay.userName}</div>
                    <div className="text-[11px] text-slate-400 truncate">{pay.paymentRef}</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-black text-white">₹{pay.amount}</div>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-black border ${
                    pay.status === 'SUCCESS'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                      : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                  }`}>
                    {pay.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
