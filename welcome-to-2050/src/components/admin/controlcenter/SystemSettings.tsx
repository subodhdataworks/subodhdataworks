import React, { useState } from 'react';
import {
  Sliders,
  ShieldCheck,
  UserPlus,
  Save,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { SystemBusinessSettings } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';
import { AdminRole, AdminAuditLog } from '../../../types/admin';
import { getAffiliateMigrationStatus } from '../../../services/realAuthService';

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
}) => {
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
  const migrationStatus = getAffiliateMigrationStatus();

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
    <div className="space-y-6 text-left font-sans text-[#0F172A]">
      {/* ── 1. Referral & Financial Policy Settings ── */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs">
        <div className="flex items-center gap-3 pb-4 border-b border-[#E2E8F0] mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0F172A]">Platform Business Commission &amp; Payout Rules</h3>
            <p className="text-xs text-[#64748B] font-medium">
              Configure referral reward amounts, eligibility constraints, and payout thresholds
            </p>
          </div>
        </div>

        {configSuccess && (
          <div className="mb-4 p-3 bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-bold rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{configSuccess}</span>
          </div>
        )}

        <form onSubmit={handleSaveSettings} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Student Commission */}
            <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] space-y-2">
              <label className="block text-[#0F172A] font-bold">
                Student Referral Reward (₹)
              </label>
              <input
                type="number"
                disabled={!canManageSettings}
                value={studentComm}
                onChange={(e) => setStudentComm(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] font-black text-sm focus:outline-none focus:border-[#2563EB]"
              />
              <span className="text-[10px] text-[#64748B] block">
                Official Rule: Active upon verified student enrollment.
              </span>
            </div>

            {/* Creator Commission */}
            <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] space-y-2">
              <label className="block text-[#0F172A] font-bold">
                Creator / Influencer Reward (₹)
              </label>
              <input
                type="number"
                disabled={!canManageSettings}
                value={influencerComm}
                onChange={(e) => setInfluencerComm(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] font-black text-sm focus:outline-none focus:border-[#2563EB]"
              />
              <span className="text-[10px] text-[#64748B] block">
                Official Rule: Free registration, active immediately for partners.
              </span>
            </div>

            {/* Min Withdrawal */}
            <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] space-y-2">
              <label className="block text-[#0F172A] font-bold">
                Minimum Withdrawal Threshold (₹)
              </label>
              <input
                type="number"
                disabled={!canManageSettings}
                value={minWithdrawal}
                onChange={(e) => setMinWithdrawal(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] font-black text-sm focus:outline-none focus:border-[#2563EB]"
              />
              <span className="text-[10px] text-[#64748B] block">
                Minimum eligible wallet balance required before requesting payout.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-[#0F172A] font-bold">
              <input
                type="checkbox"
                disabled={!canManageSettings}
                checked={allowUpi}
                onChange={(e) => setAllowUpi(e.target.checked)}
                className="w-4 h-4 text-[#2563EB] rounded focus:ring-0 cursor-pointer"
              />
              <span>Enable UPI Payout Channel (Instant VPA)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-[#0F172A] font-bold">
              <input
                type="checkbox"
                disabled={!canManageSettings}
                checked={allowBank}
                onChange={(e) => setAllowBank(e.target.checked)}
                className="w-4 h-4 text-[#2563EB] rounded focus:ring-0 cursor-pointer"
              />
              <span>Enable Direct Bank Transfer (NEFT/IMPS)</span>
            </label>
          </div>

          {canManageSettings && (
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSavingConfig}
                className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>{isSavingConfig ? 'Saving Rules...' : 'Save Business Rules'}</span>
              </button>
            </div>
          )}
        </form>
      </div>

      {/* ── 2. Team Administrator Provisioning ── */}
      {canManageAdmins && (
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs">
          <div className="flex items-center gap-3 pb-4 border-b border-[#E2E8F0] mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F172A]">Provision Team Administrator</h3>
              <p className="text-xs text-[#64748B] font-medium">
                Create new operational admin accounts with restricted role-based privileges
              </p>
            </div>
          </div>

          {adminSuccess && (
            <div className="mb-4 p-3 bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-bold rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{adminSuccess}</span>
            </div>
          )}

          <form onSubmit={handleCreateAdmin} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div>
                <label className="block text-[#0F172A] font-bold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newAdminName}
                  onChange={(e) => setNewAdminName(e.target.value)}
                  placeholder="e.g. Ananya Patel"
                  className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-[#0F172A] font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  placeholder="staff@futureitindustry.com"
                  className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-[#0F172A] font-bold mb-1">Assigned Role</label>
                <select
                  value={newAdminRole}
                  onChange={(e: any) => setNewAdminRole(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[#0F172A] font-semibold focus:outline-none focus:border-[#2563EB] cursor-pointer"
                >
                  <option value="course_manager">Course Manager (Curriculum Only)</option>
                  <option value="finance_manager">Finance Manager (Payouts &amp; Payments)</option>
                  <option value="user_support">Support Agent (Directory &amp; Notes)</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0F172A] font-bold mb-1">Initial Password</label>
                <input
                  type="password"
                  required
                  value={newAdminPassword}
                  onChange={(e) => setNewAdminPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isCreatingAdmin}
              className="py-2.5 px-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer transition-colors"
            >
              {isCreatingAdmin ? 'Provisioning...' : 'Provision Administrator ➔'}
            </button>
          </form>
        </div>
      )}

      {/* ── 2B. Affiliate System v5 Reset & Migration Architecture ── */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold border border-[#A7F3D0]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F172A]">
                Affiliate System Status &amp; Reset Migration (v5)
              </h3>
              <p className="text-xs text-[#64748B] font-medium">
                Authoritative Firestore commission engine, ledger anti-forgery &amp; idempotency
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] text-xs font-bold self-start sm:self-auto">
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
            <span className="text-[#64748B] font-bold uppercase text-[10px] block">Processed Records</span>
            <strong className="text-[#0F172A] font-black text-sm mt-0.5 block">
              {migrationStatus.usersProcessed} Users Clean Reset
            </strong>
            <span className="text-[#64748B] font-semibold text-[11px]">
              {migrationStatus.legacyKeysArchived} Legacy Keys Safely Archived
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <span className="text-[#64748B] font-bold uppercase text-[10px] block">Commission Structure</span>
            <strong className="text-[#059669] font-black text-sm mt-0.5 block">
              Free: ₹0 • Paid Course: ₹100
            </strong>
            <span className="text-[#64748B] font-semibold text-[11px]">
              No Self-Referral • Unique Email Verification
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <span className="text-[#64748B] font-bold uppercase text-[10px] block">Payment Gateway Idempotency</span>
            <strong className="text-[#0F172A] font-black text-sm mt-0.5 block">
              {migrationStatus.paymentVerification}
            </strong>
            <span className="text-[#2563EB] font-semibold text-[11px]">HMAC-SHA256 Webhook Verification</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <span className="text-[#64748B] font-bold uppercase text-[10px] block">Payout &amp; Banking Isolation</span>
            <strong className="text-[#0F172A] font-black text-sm mt-0.5 block">
              {migrationStatus.payoutIntegrationStatus}
            </strong>
            <span className="text-[#D97706] font-semibold text-[11px]">Admin UTR Entry Mandatory Before Payout</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <span className="text-[#64748B] font-bold uppercase text-[10px] block">User Profile Integrity</span>
            <strong className="text-[#0F172A] font-black text-sm mt-0.5 block">
              Login &amp; Unlocks Preserved
            </strong>
            <span className="text-[#059669] font-semibold text-[11px]">0 Zero-Balance Hallucinations</span>
          </div>
        </div>
      </div>

      {/* ── 3. Security Audit Trail Log (Immutable Event Stream) ── */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs">
        <div className="flex items-center gap-3 pb-4 border-b border-[#E2E8F0] mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0F172A]">Immutable Security Audit Trail</h3>
            <p className="text-xs text-[#64748B] font-medium">
              Every sensitive login, financial action, suspension, and settings change is recorded
            </p>
          </div>
        </div>

        <div className="divide-y divide-[#E2E8F0] max-h-80 overflow-y-auto">
          {auditLogs.slice(0, 40).map((log) => (
            <div key={log.id} className="py-2.5 flex items-center justify-between text-xs gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] font-mono font-bold text-[10px]">
                    {log.action}
                  </span>
                  <span className="text-[#64748B] text-[11px] font-medium truncate">{log.details}</span>
                </div>
                <div className="text-[10px] text-[#64748B] mt-0.5">
                  By {log.adminName} ({log.adminEmail}) • Role: {log.role}
                </div>
              </div>
              <div className="text-right text-[10px] text-[#64748B] shrink-0 font-mono">
                {new Date(log.timestamp).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
