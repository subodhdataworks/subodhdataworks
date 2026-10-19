import React, { useState } from 'react';
import {
  Settings,
  ShieldCheck,
  UserPlus,
  Key,
  Save,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Mail,
  User,
  Sliders,
  DollarSign,
  FileText
} from 'lucide-react';
import { SystemBusinessSettings } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';
import { AdminRole, AdminAuditLog } from '../../../types/admin';

interface SystemSettingsProps {
  settings: SystemBusinessSettings;
  auditLogs: AdminAuditLog[];
  onUpdateSettings: (updates: Partial<SystemBusinessSettings>) => Promise<void>;
  onRefresh: () => void;
  isDark?: boolean;
}

export const SystemSettings: React.FC<SystemSettingsProps> = ({
  settings,
  auditLogs,
  onUpdateSettings,
  onRefresh,
  isDark = false,
}) => {
  const cardBg = isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90 shadow-sm';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';

  // Config state
  const [studentComm, setStudentComm] = useState(settings.studentReferralCommission.toString());
  const [influencerComm, setInfluencerComm] = useState(settings.influencerReferralCommission.toString());
  const [minWithdrawal, setMinWithdrawal] = useState(settings.minimumWithdrawalAmount.toString());
  const [allowBank, setAllowBank] = useState(settings.allowDirectBankPayout);
  const [allowUpi, setAllowUpi] = useState(settings.allowUpiPayout);
  const [isSavingConfig, setIsSavingConfig] = useState(false);
  const [configSuccess, setConfigSuccess] = useState('');

  // Team Admin creation state
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminRole, setNewAdminRole] = useState<AdminRole>('course_manager');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [isCreatingAdmin, setIsCreatingAdmin] = useState(false);
  const [adminSuccess, setAdminSuccess] = useState('');

  const canManageSettings = AdminAuthService.hasPermission('manage_settings');
  const canManageAdmins = AdminAuthService.hasPermission('manage_admins');

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canManageSettings) {
      alert('Permission denied: Only Super Admin can change business commission settings.');
      return;
    }

    setIsSavingConfig(true);
    try {
      await onUpdateSettings({
        studentReferralCommission: parseInt(studentComm, 10) || 125,
        influencerReferralCommission: parseInt(influencerComm, 10) || 100,
        minimumWithdrawalAmount: parseInt(minWithdrawal, 10) || 500,
        allowDirectBankPayout: allowBank,
        allowUpiPayout: allowUpi,
      });
      setConfigSuccess('Business commission and payout rules saved securely.');
      setTimeout(() => setConfigSuccess(''), 4500);
    } catch (e: any) {
      alert(e?.message || 'Failed to save settings.');
    } finally {
      setIsSavingConfig(false);
    }
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canManageAdmins) {
      alert('Permission denied: Only Super Admin can provision team administrators.');
      return;
    }

    setIsCreatingAdmin(true);
    try {
      const res = await AdminAuthService.createTeamAdmin({
        name: newAdminName.trim(),
        email: newAdminEmail.trim(),
        role: newAdminRole,
        passwordPlain: newAdminPassword.trim(),
      });

      if (res.success) {
        setAdminSuccess(`Administrator ${newAdminName} created successfully with role ${newAdminRole}.`);
        setNewAdminName('');
        setNewAdminEmail('');
        setNewAdminPassword('');
        setTimeout(() => setAdminSuccess(''), 5000);
        onRefresh();
      } else {
        alert(res.error || 'Failed to create administrator.');
      }
    } catch (e: any) {
      alert(e?.message || 'Error creating administrator.');
    } finally {
      setIsCreatingAdmin(false);
    }
  };

  return (
    <div className="space-y-6 text-left">
      {/* ── 1. Referral & Financial Policy Settings ── */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-white">Platform Business Commission &amp; Payout Rules</h3>
            <p className="text-xs text-slate-400 font-medium">
              Configure referral reward amounts, eligibility constraints, and payout thresholds
            </p>
          </div>
        </div>

        {configSuccess && (
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{configSuccess}</span>
          </div>
        )}

        <form onSubmit={handleSaveSettings} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Student Commission */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
              <label className="block text-slate-300 font-bold">
                Student Referral Reward (₹)
              </label>
              <input
                type="number"
                disabled={!canManageSettings}
                value={studentComm}
                onChange={(e) => setStudentComm(e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white font-black text-sm focus:outline-none"
              />
              <span className="text-[10px] text-slate-500 block">
                Official Rule: Active upon ₹987 / ₹999 verified student enrollment.
              </span>
            </div>

            {/* Creator Commission */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
              <label className="block text-slate-300 font-bold">
                Creator / Influencer Reward (₹)
              </label>
              <input
                type="number"
                disabled={!canManageSettings}
                value={influencerComm}
                onChange={(e) => setInfluencerComm(e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white font-black text-sm focus:outline-none"
              />
              <span className="text-[10px] text-slate-500 block">
                Official Rule: Free registration, active immediately for partners.
              </span>
            </div>

            {/* Min Withdrawal */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
              <label className="block text-slate-300 font-bold">
                Minimum Withdrawal Threshold (₹)
              </label>
              <input
                type="number"
                disabled={!canManageSettings}
                value={minWithdrawal}
                onChange={(e) => setMinWithdrawal(e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white font-black text-sm focus:outline-none"
              />
              <span className="text-[10px] text-slate-500 block">
                Minimum eligible wallet balance required before requesting payout.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-slate-300 font-bold">
              <input
                type="checkbox"
                disabled={!canManageSettings}
                checked={allowUpi}
                onChange={(e) => setAllowUpi(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 cursor-pointer"
              />
              <span>Enable Instant UPI Withdrawals</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-slate-300 font-bold">
              <input
                type="checkbox"
                disabled={!canManageSettings}
                checked={allowBank}
                onChange={(e) => setAllowBank(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 cursor-pointer"
              />
              <span>Enable Direct Bank NEFT / IMPS Transfers</span>
            </label>
          </div>

          {canManageSettings && (
            <button
              type="submit"
              disabled={isSavingConfig}
              className="py-2.5 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/25 cursor-pointer transition-colors"
            >
              {isSavingConfig ? 'Saving Settings...' : 'Save Business Settings ➔'}
            </button>
          )}
        </form>
      </div>

      {/* ── 2. Team Administrator RBAC Provisioning ── */}
      {canManageAdmins && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Administrator Provisioning &amp; RBAC Roles</h3>
              <p className="text-xs text-slate-400 font-medium">
                Super Admin only: Grant role-scoped administrative permissions
              </p>
            </div>
          </div>

          {adminSuccess && (
            <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{adminSuccess}</span>
            </div>
          )}

          <form onSubmit={handleCreateAdmin} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Admin Full Name *</label>
                <input
                  type="text"
                  required
                  value={newAdminName}
                  onChange={(e) => setNewAdminName(e.target.value)}
                  placeholder="e.g. Subodh Kumar"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  placeholder="team@futureitindustry.com"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Admin Role *</label>
                <select
                  value={newAdminRole}
                  onChange={(e: any) => setNewAdminRole(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-bold cursor-pointer"
                >
                  <option value="course_manager">Course Manager (Curriculum only)</option>
                  <option value="finance_manager">Finance Manager (Payouts &amp; Ledger)</option>
                  <option value="user_support">User Support (Notes &amp; Directory)</option>
                  <option value="super_admin">Super Admin (All Privileges)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Initial Password *</label>
                <input
                  type="password"
                  required
                  value={newAdminPassword}
                  onChange={(e) => setNewAdminPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isCreatingAdmin}
              className="py-2.5 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/25 cursor-pointer transition-colors"
            >
              {isCreatingAdmin ? 'Provisioning...' : 'Provision Administrator ➔'}
            </button>
          </form>
        </div>
      )}

      {/* ── 3. Security Audit Trail Log (Immutable Event Stream) ── */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-slate-800 text-slate-300 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-white">Immutable Security Audit Trail</h3>
            <p className="text-xs text-slate-400 font-medium">
              Every sensitive login, financial action, suspension, and settings change is recorded
            </p>
          </div>
        </div>

        <div className="divide-y divide-slate-800 max-h-80 overflow-y-auto">
          {auditLogs.slice(0, 40).map((log) => (
            <div key={log.id} className="py-2.5 flex items-center justify-between text-xs gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300 font-mono font-bold text-[10px]">
                    {log.action}
                  </span>
                  <span className="text-slate-400 text-[11px] font-medium truncate">{log.details}</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  By {log.adminName} ({log.adminEmail}) • Role: {log.role}
                </div>
              </div>
              <div className="text-right text-[10px] text-slate-500 shrink-0 font-mono">
                {new Date(log.timestamp).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
