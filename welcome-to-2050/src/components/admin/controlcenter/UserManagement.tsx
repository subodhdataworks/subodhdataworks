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
  X
} from 'lucide-react';
import { RegisteredUserRecord, exportUsersToCSV } from '../../../services/realAuthService';
import { AdminDataService, UserSuspensionRecord, UserSupportNote } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';

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

  return (
    <div className="space-y-6 text-left">
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
                        <button
                          type="button"
                          onClick={() => setSelectedUser(user)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer transition-colors"
                        >
                          View Details ➔
                        </button>
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
    </div>
  );
};
