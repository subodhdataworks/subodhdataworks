import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  Shield,
  Ban,
  RotateCcw,
  Eye,
  FileText,
  DollarSign,
  ChevronRight,
  ExternalLink,
  X,
  Zap,
  Wallet,
  Sparkles,
  BookOpen,
  PlusCircle,
  MinusCircle
} from 'lucide-react';
import { RegisteredUserRecord, exportUsersToCSV } from '../../../services/realAuthService';
import { AdminDataService, UserSuspensionRecord, UserSupportNote } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';
import { adminGrantCourseToStudent, adminAdjustStudentWallet } from '../../../services/cloudSyncService';
import { CANONICAL_COURSES, CanonicalCourseId } from '../../../services/courseUnlockService';

interface UserManagementProps {
  users: RegisteredUserRecord[];
  suspensions: UserSuspensionRecord[];
  onRefresh: () => void;
  isDark?: boolean;
}

export const UserManagement: React.FC<UserManagementProps> = ({ users, suspensions, onRefresh, isDark = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'student' | 'influencer'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'suspended'>('all');
  const [selectedUser, setSelectedUser] = useState<RegisteredUserRecord | null>(null);
  const [suspensionReason, setSuspensionReason] = useState('');
  const [isSuspending, setIsSuspending] = useState(false);
  const [newNoteText, setNewNoteText] = useState('');
  const [noteCategory, setNoteCategory] = useState<'GENERAL' | 'PAYMENT' | 'WITHDRAWAL' | 'REFERRAL'>('GENERAL');
  const [exportNotice, setExportNotice] = useState('');
  
  // Quick Unlock & Wallet States
  const [quickStudentId, setQuickStudentId] = useState('');
  const [quickCourse, setQuickCourse] = useState<string>('data_analyst');
  const [isQuickUnlocking, setIsQuickUnlocking] = useState(false);
  const [quickNotice, setQuickNotice] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  // Modal for individual user course unlock
  const [unlockModalUser, setUnlockModalUser] = useState<RegisteredUserRecord | null>(null);
  const [targetCourseToUnlock, setTargetCourseToUnlock] = useState<string>('data_analyst');
  const [isGrantingCourse, setIsGrantingCourse] = useState(false);

  // Modal for wallet adjustment
  const [walletModalUser, setWalletModalUser] = useState<RegisteredUserRecord | null>(null);
  const [walletAmountDelta, setWalletAmountDelta] = useState<number>(100);
  const [walletReason, setWalletReason] = useState('Referral reward credit');
  const [isAdjustingWallet, setIsAdjustingWallet] = useState(false);

  const cardBg = isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90 shadow-sm';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';
  const inputBg = isDark
    ? 'bg-slate-950 border-slate-700/80 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500'
    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 shadow-sm';
  const tableHead = isDark ? 'bg-slate-950/60 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600';
  const tableBorder = isDark ? 'divide-slate-800' : 'divide-slate-100';

  const canSuspend = AdminAuthService.hasPermission('suspend_users');
  const canExport = AdminAuthService.hasPermission('export_users');

  const suspensionMap = new Map<string, UserSuspensionRecord>();
  suspensions.forEach((s) => suspensionMap.set(s.userId, s));

  // Filter users
  const filteredUsers = users.filter((u) => {
    const q = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !q ||
      u.name.toLowerCase().includes(q) ||
      (u.email && u.email.toLowerCase().includes(q)) ||
      (u.phone && u.phone.includes(q)) ||
      (u.referralCode && u.referralCode.toLowerCase().includes(q)) ||
      u.uid.toLowerCase().includes(q);

    const matchesRole = roleFilter === 'all' || (u.role || 'student') === roleFilter;

    const isSuspended = suspensionMap.get(u.uid)?.isSuspended || false;
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'suspended' && isSuspended) ||
      (statusFilter === 'active' && !isSuspended);

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleToggleSuspend = async (user: RegisteredUserRecord) => {
    if (!canSuspend) {
      alert('Permission denied: You do not have authority to suspend users.');
      return;
    }

    const currentSuspended = suspensionMap.get(user.uid)?.isSuspended || false;
    const targetSuspended = !currentSuspended;

    if (targetSuspended && !suspensionReason.trim()) {
      alert('Mandatory audit requirement: Please state a clear reason for suspension.');
      return;
    }

    setIsSuspending(true);
    try {
      await AdminDataService.toggleUserSuspension(
        user.uid,
        targetSuspended,
        targetSuspended ? suspensionReason.trim() : 'Account restored by administrator.'
      );
      setSuspensionReason('');
      onRefresh();
    } catch (e: any) {
      alert(e?.message || 'Failed to update suspension status.');
    } finally {
      setIsSuspending(false);
    }
  };

  const handleAddSupportNote = async (userId: string) => {
    if (!newNoteText.trim()) return;
    try {
      await AdminDataService.addSupportNote({
        userId,
        content: newNoteText.trim(),
        category: noteCategory,
      });
      setNewNoteText('');
      onRefresh();
    } catch (e: any) {
      alert(e?.message || 'Failed to add note');
    }
  };

  const handleExportCSV = async () => {
    if (!canExport) {
      alert('Permission denied to export user data.');
      return;
    }
    const res = await exportUsersToCSV();
    setExportNotice(`Exported ${res.count} verified user records to ${res.filename}`);
    setTimeout(() => setExportNotice(''), 5000);
  };

  const handleQuickUnlock = async () => {
    if (!quickStudentId.trim()) {
      setQuickNotice({ type: 'error', msg: 'Please enter student email or mobile number.' });
      return;
    }
    setIsQuickUnlocking(true);
    setQuickNotice(null);
    try {
      await adminGrantCourseToStudent(quickStudentId.trim(), quickCourse);
      const courseTitle = quickCourse === 'data_analyst' ? 'Data Analyst with GenAI' : quickCourse === 'data_science' ? 'Data Science & Agentic AI' : quickCourse;
      setQuickNotice({
        type: 'success',
        msg: `Successfully unlocked and synced '${courseTitle}' in cloud for ${quickStudentId.trim()}!`
      });
      setQuickStudentId('');
      onRefresh();
    } catch (e: any) {
      setQuickNotice({ type: 'error', msg: e?.message || 'Failed to unlock course in cloud.' });
    } finally {
      setIsQuickUnlocking(false);
    }
  };

  const handleGrantCourseForUser = async () => {
    if (!unlockModalUser) return;
    setIsGrantingCourse(true);
    try {
      const identifier = unlockModalUser.email || unlockModalUser.phone || unlockModalUser.uid;
      await adminGrantCourseToStudent(identifier, targetCourseToUnlock);
      alert(`Success! Course permanently unlocked for ${unlockModalUser.name} in cloud.`);
      setUnlockModalUser(null);
      onRefresh();
    } catch (e: any) {
      alert(e?.message || 'Failed to grant course.');
    } finally {
      setIsGrantingCourse(false);
    }
  };

  const handleAdjustWalletForUser = async () => {
    if (!walletModalUser) return;
    setIsAdjustingWallet(true);
    try {
      const identifier = walletModalUser.email || walletModalUser.phone || walletModalUser.uid;
      const newBal = await adminAdjustStudentWallet(identifier, walletAmountDelta, walletReason.trim());
      alert(`Wallet updated successfully! New balance: ₹${newBal}`);
      setWalletModalUser(null);
      onRefresh();
    } catch (e: any) {
      alert(e?.message || 'Failed to adjust wallet.');
    } finally {
      setIsAdjustingWallet(false);
    }
  };

  return (
    <div className="space-y-6 text-left">
      {/* ── ⚡ 1-CLICK INSTANT COURSE UNLOCK & CLOUD PERSISTENCE TOOL ── */}
      <div className="bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900 border border-blue-500/30 rounded-3xl p-5 shadow-lg relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[10px] font-black tracking-wide uppercase flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Instant Student Recovery</span>
              </span>
              <span className="text-xs text-blue-300 font-semibold">Firestore Cloud Sync</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
              ⚡ Instant 1-Click Course Unlock Tool
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
              Agar kisi student ka course refresh karne ya device change karne par lock dikha raha ho, to uska Email ya Mobile daal kar yahan se 1-click me permanent unlock karein. Data direct Firestore cloud me safe ho jayega!
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2.5">
            <input
              type="text"
              value={quickStudentId}
              onChange={(e) => setQuickStudentId(e.target.value)}
              placeholder="Enter Student Email or Mobile Number..."
              className="w-full sm:w-64 px-3.5 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 font-medium"
            />
            <select
              value={quickCourse}
              onChange={(e) => setQuickCourse(e.target.value)}
              className="w-full sm:w-56 px-3 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-xs text-slate-200 font-bold cursor-pointer focus:outline-none focus:border-blue-500"
            >
              <option value="data_analyst">Data Analyst with GenAI (₹9)</option>
              <option value="data_science">Data Science &amp; Agentic AI (₹987)</option>
              <option value="ml_engineering">Machine Learning Engineering</option>
              <option value="deep_learning">Deep Learning &amp; Neural Nets</option>
              <option value="ai_engineering">AI Engineering &amp; LLMOps</option>
              <option value="full_stack_mern">Full Stack MERN &amp; Next.js</option>
              <option value="all">🌟 VIP All Courses Full Unlock</option>
            </select>
            <button
              type="button"
              disabled={isQuickUnlocking || !quickStudentId.trim()}
              onClick={handleQuickUnlock}
              className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 shrink-0"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{isQuickUnlocking ? 'Unlocking & Saving...' : '⚡ Unlock in Cloud'}</span>
            </button>
          </div>
        </div>

        {quickNotice && (
          <div className={`mt-3.5 p-3 rounded-xl text-xs flex items-center gap-2 ${
            quickNotice.type === 'success'
              ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300'
              : 'bg-rose-500/20 border border-rose-500/30 text-rose-300'
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span className="font-bold">{quickNotice.msg}</span>
          </div>
        )}
      </div>

      {/* Top Action & Search Bar */}
      <div className={`${cardBg} border rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4`}>
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, email, phone, user ID or referral..."
            className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs ${inputBg}`}
          />
        </div>

        {/* Filters and CSV Export */}
        <div className="flex items-center gap-2.5 w-full md:w-auto overflow-x-auto">
          {/* Role filter */}
          <select
            value={roleFilter}
            onChange={(e: any) => setRoleFilter(e.target.value)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer ${inputBg}`}
          >
            <option value="all">All Roles</option>
            <option value="student">Student Learners</option>
            <option value="influencer">Affiliate Creators</option>
          </select>

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e: any) => setStatusFilter(e.target.value)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer ${inputBg}`}
          >
            <option value="all">All Statuses</option>
            <option value="active">Active Only</option>
            <option value="suspended">Suspended Only</option>
          </select>

          {/* Export Button */}
          {canExport && (
            <button
              type="button"
              onClick={handleExportCSV}
              className="px-3.5 py-2 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-700 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          )}
        </div>
      </div>

      {exportNotice && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{exportNotice}</span>
        </div>
      )}

      {/* Directory Table */}
      <div className={`${cardBg} border rounded-3xl overflow-hidden shadow-sm`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className={`${tableHead} border-b text-[11px] font-black uppercase tracking-wider`}>
              <tr>
                <th className="py-3 px-4">Learner Profile</th>
                <th className="py-3 px-4">Contact Info</th>
                <th className="py-3 px-4">Role &amp; Referral</th>
                <th className="py-3 px-4">Registered Date</th>
                <th className="py-3 px-4">Account Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500 text-xs font-medium">
                    No users matching current filters found in database.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                  const isSusp = suspensionMap.get(user.uid)?.isSuspended || false;
                  return (
                    <tr key={user.uid} className={isDark ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50/80 transition-colors'}>
                      {/* Name & ID */}
                      <td className="py-3.5 px-4">
                        <div className={`font-bold ${textPrimary} text-xs`}>{user.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">{user.uid}</div>
                      </td>

                      {/* Contact */}
                      <td className="py-3.5 px-4 space-y-0.5">
                        <div className="text-slate-300 font-medium flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-slate-500" />
                          <span>{user.email || 'No email registered'}</span>
                        </div>
                        {user.phone && (
                          <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                            <Phone className="w-3 h-3 text-slate-500" />
                            <span>{user.phone}</span>
                          </div>
                        )}
                      </td>

                      {/* Role & Referral */}
                      <td className="py-3.5 px-4 space-y-0.5">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                          user.role === 'influencer'
                            ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                            : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                        }`}>
                          {user.role === 'influencer' ? 'Creator (₹100)' : 'Student (₹125)'}
                        </span>
                        <div className="text-[10px] text-slate-400">
                          Code: <strong className="text-slate-200">{user.referralCode}</strong>
                        </div>
                        {user.referredBy && (
                          <div className="text-[9.5px] text-slate-500">
                            Referred by: {user.referredBy}
                          </div>
                        )}
                      </td>

                      {/* Registration Date */}
                      <td className="py-3.5 px-4 text-slate-400 text-[11px]">
                        {user.registeredAt ? new Date(user.registeredAt).toLocaleDateString() : 'N/A'}
                        <div className="text-[10px] text-slate-500">{user.source || 'Direct'}</div>
                      </td>

                      {/* Account Status */}
                      <td className="py-3.5 px-4">
                        {isSusp ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black">
                            <Ban className="w-3 h-3" />
                            <span>Suspended</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Active</span>
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5 flex-wrap">
                          <button
                            type="button"
                            onClick={() => {
                              setUnlockModalUser(user);
                              setTargetCourseToUnlock('data_analyst');
                            }}
                            title="Unlock Course for Student"
                            className="px-2.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-[11px] cursor-pointer transition-colors flex items-center gap-1"
                          >
                            <Zap className="w-3 h-3 text-amber-400" />
                            <span>Unlock</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setWalletModalUser(user);
                              setWalletAmountDelta(100);
                              setWalletReason('Referral reward credit');
                            }}
                            title="Adjust / Credit Wallet"
                            className="px-2.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-[11px] cursor-pointer transition-colors flex items-center gap-1"
                          >
                            <Wallet className="w-3 h-3 text-emerald-400" />
                            <span>Wallet</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setSelectedUser(user)}
                            className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-[11px] cursor-pointer transition-colors"
                          >
                            Details ➔
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── User Profile Drawer Modal ── */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedUser(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-black text-lg">
                {selectedUser.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{selectedUser.name}</h3>
                <p className="text-xs text-slate-400 font-mono">{selectedUser.uid}</p>
              </div>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-2 gap-3.5 mb-6 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] font-bold uppercase block">Email Address</span>
                <span className="text-white font-medium">{selectedUser.email || 'None'}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] font-bold uppercase block">Mobile Phone</span>
                <span className="text-white font-medium">{selectedUser.phone || 'None'}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] font-bold uppercase block">Referral Code</span>
                <span className="text-blue-400 font-bold">{selectedUser.referralCode}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] font-bold uppercase block">Referred By</span>
                <span className="text-slate-300 font-medium">{selectedUser.referredBy || 'Organic / Direct'}</span>
              </div>
            </div>

            {/* Suspension Control Section */}
            {canSuspend && (
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 mb-6 space-y-3">
                <h4 className="text-xs font-black text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>Account Status &amp; Suspension Controls</span>
                </h4>

                {suspensionMap.get(selectedUser.uid)?.isSuspended ? (
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
                      <strong>Currently Suspended:</strong> {suspensionMap.get(selectedUser.uid)?.reason}
                    </div>
                    <button
                      type="button"
                      disabled={isSuspending}
                      onClick={() => handleToggleSuspend(selectedUser)}
                      className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl cursor-pointer transition-colors"
                    >
                      {isSuspending ? 'Reactivating...' : 'Reactivate Account'}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={suspensionReason}
                      onChange={(e) => setSuspensionReason(e.target.value)}
                      placeholder="Reason for suspension (audit required)..."
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      disabled={isSuspending || !suspensionReason.trim()}
                      onClick={() => handleToggleSuspend(selectedUser)}
                      className="w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl cursor-pointer transition-colors disabled:opacity-40"
                    >
                      {isSuspending ? 'Suspending...' : 'Suspend This Account'}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Support Notes Section */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Internal Support Notes</span>
              </h4>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Add an internal support note..."
                  className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none"
                />
                <select
                  value={noteCategory}
                  onChange={(e: any) => setNoteCategory(e.target.value)}
                  className="px-2.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 font-semibold cursor-pointer"
                >
                  <option value="GENERAL">General</option>
                  <option value="PAYMENT">Payment</option>
                  <option value="WITHDRAWAL">Withdrawal</option>
                  <option value="REFERRAL">Referral</option>
                </select>
                <button
                  type="button"
                  onClick={() => handleAddSupportNote(selectedUser.uid)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl cursor-pointer"
                >
                  Post Note
                </button>
              </div>

              {/* Notes list */}
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {AdminDataService.getSupportNotes(selectedUser.uid).map((n) => (
                  <div key={n.id} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                      <span className="font-bold text-blue-400">{n.category} • by {n.authorName}</span>
                      <span>{new Date(n.date).toLocaleString()}</span>
                    </div>
                    <p>{n.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── UNLOCK COURSE MODAL ── */}
      {unlockModalUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => setUnlockModalUser(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-3 border-b border-slate-800 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center font-black">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-white">Unlock Course for Learner</h3>
                <p className="text-xs text-slate-400 font-medium">{unlockModalUser.name} ({unlockModalUser.email || unlockModalUser.phone || unlockModalUser.uid})</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Select Course to Grant Access
                </label>
                <select
                  value={targetCourseToUnlock}
                  onChange={(e) => setTargetCourseToUnlock(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white font-bold cursor-pointer focus:outline-none focus:border-amber-500"
                >
                  <option value="data_analyst">Data Analyst with GenAI (₹9)</option>
                  <option value="data_science">Data Science &amp; Agentic AI (₹987)</option>
                  <option value="ml_engineering">Machine Learning Engineering</option>
                  <option value="deep_learning">Deep Learning &amp; Neural Nets</option>
                  <option value="ai_engineering">AI Engineering &amp; LLMOps</option>
                  <option value="full_stack_mern">Full Stack MERN &amp; Next.js</option>
                  <option value="all">🌟 VIP All Courses Full Unlock</option>
                </select>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] text-amber-200 leading-relaxed">
                ℹ️ Clicking confirm will write this course entitlement permanently to Firebase Firestore <code>registered_users</code> collection and sync with the student's browser immediately.
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setUnlockModalUser(null)}
                  className="w-1/2 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isGrantingCourse}
                  onClick={handleGrantCourseForUser}
                  className="w-1/2 py-2.5 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>{isGrantingCourse ? 'Granting...' : 'Confirm Unlock'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── WALLET ADJUSTMENT MODAL ── */}
      {walletModalUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => setWalletModalUser(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-3 border-b border-slate-800 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-black">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-white">Adjust Student Wallet</h3>
                <p className="text-xs text-slate-400 font-medium">{walletModalUser.name} ({walletModalUser.email || walletModalUser.phone || walletModalUser.uid})</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Amount (₹) — Positive to Credit, Negative to Deduct
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setWalletAmountDelta(100)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold ${walletAmountDelta === 100 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                  >
                    +₹100 (Referral)
                  </button>
                  <button
                    type="button"
                    onClick={() => setWalletAmountDelta(125)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold ${walletAmountDelta === 125 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                  >
                    +₹125 (Student)
                  </button>
                  <button
                    type="button"
                    onClick={() => setWalletAmountDelta(500)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold ${walletAmountDelta === 500 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                  >
                    +₹500
                  </button>
                </div>
                <input
                  type="number"
                  value={walletAmountDelta}
                  onChange={(e) => setWalletAmountDelta(Number(e.target.value))}
                  placeholder="Enter amount (e.g. 100)"
                  className="w-full mt-2 px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white font-bold focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Audit Reason / Note
                </label>
                <input
                  type="text"
                  value={walletReason}
                  onChange={(e) => setWalletReason(e.target.value)}
                  placeholder="e.g. Verified referral payment commission"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setWalletModalUser(null)}
                  className="w-1/2 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isAdjustingWallet}
                  onClick={handleAdjustWalletForUser}
                  className="w-1/2 py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:opacity-95 text-white font-black text-xs rounded-xl cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1.5"
                >
                  <Wallet className="w-3.5 h-3.5" />
                  <span>{isAdjustingWallet ? 'Saving...' : 'Apply Adjustment'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
