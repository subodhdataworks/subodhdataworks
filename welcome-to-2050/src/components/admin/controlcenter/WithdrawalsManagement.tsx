import React, { useState } from 'react';
import {
  IndianRupee,
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  CreditCard,
  Building,
  RefreshCw,
  X
} from 'lucide-react';
import { WithdrawalRequest, ReferralEngine } from '../../../services/referralEngine';
import { AdminDataService } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';

interface WithdrawalsManagementProps {
  withdrawals: WithdrawalRequest[];
  onRefresh: () => void;
  isDark?: boolean;
}

export const WithdrawalsManagement: React.FC<WithdrawalsManagementProps> = ({ withdrawals, onRefresh }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedReq, setSelectedReq] = useState<WithdrawalRequest | null>(null);

  // Modal action state
  const [actionType, setActionType] = useState<'APPROVE' | 'PAY' | 'REJECT' | null>(null);
  const [actionNotes, setActionNotes] = useState('');
  const [payoutRef, setPayoutRef] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const canApprove = AdminAuthService.hasPermission('approve_withdrawals');
  const canPayout = AdminAuthService.hasPermission('manage_payouts');

  const filteredWithdrawals = withdrawals.filter((w) => {
    const q = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !q ||
      w.id.toLowerCase().includes(q) ||
      w.referrerId.toLowerCase().includes(q) ||
      (w.details.upiId && w.details.upiId.toLowerCase().includes(q)) ||
      (w.details.accountNumber && w.details.accountNumber.includes(q)) ||
      (w.referenceNo && w.referenceNo.toLowerCase().includes(q));

    const matchesStatus = statusFilter === 'all' || w.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAction = async () => {
    if (!selectedReq || !actionType) return;

    if (actionType === 'REJECT' && !actionNotes.trim()) {
      alert('Mandatory financial safeguard: A valid rejection reason must be provided.');
      return;
    }

    if (actionType === 'PAY' && !payoutRef.trim()) {
      alert('Mandatory banking verification: Enter Bank UTR / UPI Reference Number before marking Paid.');
      return;
    }

    setIsProcessing(true);
    try {
      let targetStatus: 'UNDER_REVIEW' | 'APPROVED' | 'PROCESSING' | 'PAID' | 'REJECTED' = 'UNDER_REVIEW';
      if (actionType === 'APPROVE') targetStatus = 'APPROVED';
      if (actionType === 'PAY') targetStatus = 'PAID';
      if (actionType === 'REJECT') targetStatus = 'REJECTED';

      const res = await AdminDataService.updateWithdrawalStatus({
        requestId: selectedReq.id,
        newStatus: targetStatus,
        adminNotes: actionNotes.trim() || `Status updated to ${targetStatus} by administrator.`,
        payoutRef: payoutRef.trim(),
      });

      if (res.success) {
        setFeedbackMsg(`✓ Withdrawal request #${selectedReq.id} marked as ${targetStatus}.`);
        setSelectedReq(null);
        setActionType(null);
        setActionNotes('');
        setPayoutRef('');
        onRefresh();
        setTimeout(() => setFeedbackMsg(''), 5000);
      } else {
        alert(res.error || 'Failed to update request status.');
      }
    } catch (e: any) {
      alert(e?.message || 'Error occurred while updating withdrawal.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6 text-left font-sans text-[#0F172A]">
      {/* Top Search & Filter Bar */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search request ID, user, UPI ID or bank account..."
            className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
          />
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] font-semibold cursor-pointer outline-none hover:border-[#CBD5E1]"
          >
            <option value="all">All Request Statuses</option>
            <option value="REQUESTED">Requested (New)</option>
            <option value="UNDER_REVIEW">Under Review</option>
            <option value="APPROVED">Approved</option>
            <option value="PAID">Paid &amp; Settled</option>
            <option value="REJECTED">Rejected / Cancelled</option>
          </select>

          <button
            type="button"
            onClick={onRefresh}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] border border-[#BFDBFE] rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 shadow-2xs"
            title="Refresh withdrawals from Firebase Cloud"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sync Live Cloud</span>
          </button>
        </div>
      </div>

      {feedbackMsg && (
        <div className="p-3 bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] font-bold text-xs rounded-xl flex items-center gap-2 shadow-2xs">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{feedbackMsg}</span>
        </div>
      )}

      {/* Withdrawals Table */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Request ID / Date</th>
                <th className="py-3 px-4">Learner / Creator</th>
                <th className="py-3 px-4">Requested Amount</th>
                <th className="py-3 px-4">Payout Account Details</th>
                <th className="py-3 px-4">Current Status</th>
                <th className="py-3 px-4 text-right">Finance Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {filteredWithdrawals.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-[#64748B] text-xs font-medium space-y-1">
                    <IndianRupee className="w-8 h-8 mx-auto text-[#94A3B8] mb-1" />
                    <p className="font-bold text-[#0F172A]">No withdrawal requests found</p>
                    <p className="text-[11px]">Affiliate partner payout requests will appear here live.</p>
                  </td>
                </tr>
              ) : (
                filteredWithdrawals.map((req) => (
                  <tr key={req.id} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-mono text-xs font-bold text-[#0F172A]">{req.id}</div>
                      <div className="text-[10px] text-[#64748B] mt-0.5">
                        {new Date(req.requestedAt).toLocaleString()}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 space-y-0.5">
                      <div className="font-bold text-[#0F172A]">{req.details.accountHolder || 'Learner'}</div>
                      <div className="text-[11px] text-[#64748B] font-mono">{req.referrerId}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="text-sm font-black text-[#0F172A]">₹{req.amount.toLocaleString()}</div>
                      <span className="text-[10px] text-[#059669] font-bold">Available balance reserved</span>
                    </td>

                    {/* Masked Account Details */}
                    <td className="py-3.5 px-4 space-y-0.5">
                      <div className="flex items-center gap-1.5 text-[#0F172A] font-bold">
                        {req.method === 'UPI' ? (
                          <>
                            <CreditCard className="w-3.5 h-3.5 text-[#9333EA]" />
                            <span>UPI: {req.details.upiId}</span>
                          </>
                        ) : (
                          <>
                            <Building className="w-3.5 h-3.5 text-[#2563EB]" />
                            <span>Bank: A/C {req.details.accountNumber ? `••••${req.details.accountNumber.slice(-4)}` : 'N/A'}</span>
                          </>
                        )}
                      </div>
                      {req.referenceNo && (
                        <div className="text-[10px] text-[#059669] font-mono">
                          UTR: {req.referenceNo}
                        </div>
                      )}
                    </td>

                    {/* Status Badge */}
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                        req.status === 'PAID'
                          ? 'bg-[#ECFDF5] border-[#A7F3D0] text-[#059669]'
                          : req.status === 'APPROVED'
                          ? 'bg-[#EFF6FF] border-[#BFDBFE] text-[#2563EB]'
                          : req.status === 'REJECTED'
                          ? 'bg-[#FEF2F2] border-[#FECACA] text-[#DC2626]'
                          : 'bg-[#FFFBEB] border-[#FDE68A] text-[#D97706]'
                      }`}>
                        {req.status === 'PAID' && <CheckCircle2 className="w-3 h-3" />}
                        {req.status === 'REJECTED' && <XCircle className="w-3 h-3" />}
                        {req.status !== 'PAID' && req.status !== 'REJECTED' && <Clock className="w-3 h-3" />}
                        <span>{req.status}</span>
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="py-3.5 px-4 text-right">
                      {req.status !== 'PAID' && req.status !== 'REJECTED' ? (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedReq(req);
                            setActionType('PAY');
                          }}
                          className="px-3 py-1.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs cursor-pointer transition-colors shadow-2xs"
                        >
                          Process Payout ➔
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedReq(req)}
                          className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] font-bold text-xs cursor-pointer"
                        >
                          View Details
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Process Action on Withdrawal */}
      {selectedReq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
          <div className="max-w-md w-full bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xl relative text-left space-y-4">
            <button
              type="button"
              onClick={() => {
                setSelectedReq(null);
                setActionType(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-bold text-[#0F172A]">
              Withdrawal Request #{selectedReq.id}
            </h3>

            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs space-y-1">
              <div><strong>Learner:</strong> {selectedReq.details.accountHolder}</div>
              <div><strong>Affiliate UID:</strong> {selectedReq.referrerId}</div>
              <div><strong>Amount:</strong> ₹{selectedReq.amount}</div>
              <div><strong>Method:</strong> {selectedReq.method}</div>
              {selectedReq.method === 'UPI' ? (
                <div><strong>UPI ID:</strong> {selectedReq.details.upiId}</div>
              ) : (
                <>
                  <div><strong>Account Number:</strong> {selectedReq.details.accountNumber}</div>
                  <div><strong>IFSC:</strong> {selectedReq.details.ifsc}</div>
                  <div><strong>Bank:</strong> {selectedReq.details.bankName}</div>
                </>
              )}
              {selectedReq.referenceNo && <div><strong>Payout Reference (UTR):</strong> {selectedReq.referenceNo}</div>}
              {selectedReq.paidAt && <div><strong>Paid At:</strong> {new Date(selectedReq.paidAt).toLocaleString()}</div>}
            </div>

            {selectedReq.status !== 'PAID' && selectedReq.status !== 'REJECTED' && (
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActionType('PAY')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      actionType === 'PAY'
                        ? 'bg-[#059669] text-white border-[#059669]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B]'
                    }`}
                  >
                    Mark Paid
                  </button>
                  <button
                    type="button"
                    onClick={() => setActionType('APPROVE')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      actionType === 'APPROVE'
                        ? 'bg-[#2563EB] text-white border-[#2563EB]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B]'
                    }`}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    onClick={() => setActionType('REJECT')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      actionType === 'REJECT'
                        ? 'bg-[#DC2626] text-white border-[#DC2626]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B]'
                    }`}
                  >
                    Reject
                  </button>
                </div>

                {actionType === 'PAY' && (
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">
                      Bank UTR / UPI Reference ID *
                    </label>
                    <input
                      type="text"
                      required
                      value={payoutRef}
                      onChange={(e) => setPayoutRef(e.target.value)}
                      placeholder="e.g. UTR4928172648 or UPI/2026/..."
                      className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] font-mono focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">
                    Admin Notes {actionType === 'REJECT' && '* (Mandatory for rejection)'}
                  </label>
                  <textarea
                    rows={2}
                    value={actionNotes}
                    onChange={(e) => setActionNotes(e.target.value)}
                    placeholder="Enter notes or audit justification..."
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedReq(null);
                      setActionType(null);
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#64748B] hover:text-[#0F172A]"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={handleAction}
                    className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs rounded-xl shadow-sm transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : 'Confirm Action'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
