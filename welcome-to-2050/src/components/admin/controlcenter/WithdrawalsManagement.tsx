import React, { useState } from 'react';
import {
  IndianRupee,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  XCircle,
  AlertTriangle,
  Send,
  Eye,
  FileText,
  ShieldCheck,
  CreditCard,
  Building,
  ArrowRight,
  X
} from 'lucide-react';
import { WithdrawalRequest, ReferralEngine } from '../../../services/referralEngine';
import { AdminDataService } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';

interface WithdrawalsManagementProps {
  withdrawals: WithdrawalRequest[];
  onRefresh: () => void;
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
        adminNotes: actionNotes.trim() || `Processed by finance administrator`,
        payoutRef: payoutRef.trim() || undefined,
      });

      if (res.success) {
        setFeedbackMsg(`Successfully marked request ${selectedReq.id} as ${targetStatus}!`);
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
    <div className="space-y-6 text-left">
      {/* Top Search & Filter Bar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search request ID, user, UPI ID or bank account..."
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-slate-300 font-semibold cursor-pointer"
          >
            <option value="all">All Request Statuses</option>
            <option value="REQUESTED">Requested (New)</option>
            <option value="UNDER_REVIEW">Under Review</option>
            <option value="APPROVED">Approved</option>
            <option value="PAID">Paid &amp; Settled</option>
            <option value="REJECTED">Rejected / Cancelled</option>
          </select>
        </div>
      </div>

      {feedbackMsg && (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{feedbackMsg}</span>
        </div>
      )}

      {/* Withdrawals Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/60 border-b border-slate-800 text-[11px] font-black text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Request ID / Date</th>
                <th className="py-3 px-4">Learner / Creator</th>
                <th className="py-3 px-4">Requested Amount</th>
                <th className="py-3 px-4">Payout Account Details</th>
                <th className="py-3 px-4">Current Status</th>
                <th className="py-3 px-4 text-right">Finance Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredWithdrawals.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500 text-xs">
                    No withdrawal requests matching current criteria found.
                  </td>
                </tr>
              ) : (
                filteredWithdrawals.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-800/40 transition-colors">
                    {/* ID & Date */}
                    <td className="py-3.5 px-4">
                      <div className="font-mono text-xs font-bold text-white">{req.id}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {new Date(req.requestedAt).toLocaleString()}
                      </div>
                    </td>

                    {/* Referrer User */}
                    <td className="py-3.5 px-4 space-y-0.5">
                      <div className="font-bold text-white">Learner / Partner</div>
                      <div className="text-[10px] text-slate-400 font-mono">{req.referrerId}</div>
                    </td>

                    {/* Amount */}
                    <td className="py-3.5 px-4">
                      <div className="text-sm font-black text-white">₹{req.amount.toLocaleString()}</div>
                      <span className="text-[10px] text-slate-500 font-semibold">Eligible Balance</span>
                    </td>

                    {/* Masked Account Details */}
                    <td className="py-3.5 px-4 space-y-0.5">
                      <div className="flex items-center gap-1.5 text-slate-200 font-bold">
                        {req.method === 'UPI' ? (
                          <>
                            <CreditCard className="w-3.5 h-3.5 text-purple-400" />
                            <span>UPI: {req.details.upiId}</span>
                          </>
                        ) : (
                          <>
                            <Building className="w-3.5 h-3.5 text-blue-400" />
                            <span>Bank: A/C {req.details.accountNumber ? `••••${req.details.accountNumber.slice(-4)}` : 'N/A'}</span>
                          </>
                        )}
                      </div>
                      {req.referenceNo && (
                        <div className="text-[10px] text-emerald-400 font-mono">
                          UTR: {req.referenceNo}
                        </div>
                      )}
                    </td>

                    {/* Status Badge */}
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black border ${
                        req.status === 'PAID'
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                          : req.status === 'APPROVED'
                          ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                          : req.status === 'REJECTED'
                          ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                          : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
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
                          className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs cursor-pointer transition-colors"
                        >
                          Process Payout ➔
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedReq(req)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs cursor-pointer"
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

      {/* ── Process Payout / Review Modal ── */}
      {selectedReq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => {
                setSelectedReq(null);
                setActionType(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-black text-white mb-1">
              Review Withdrawal Request
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-4">{selectedReq.id}</p>

            <div className="space-y-3 p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs mb-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Requested Amount:</span>
                <strong className="text-white text-sm">₹{selectedReq.amount.toLocaleString()}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Method:</span>
                <span className="text-white font-bold">{selectedReq.method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Target Details:</span>
                <span className="text-blue-400 font-mono font-bold">
                  {selectedReq.method === 'UPI' ? selectedReq.details.upiId : selectedReq.details.accountNumber}
                </span>
              </div>
              {selectedReq.details.bankName && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Bank:</span>
                  <span className="text-slate-300">{selectedReq.details.bankName} (IFSC: {selectedReq.details.ifsc})</span>
                </div>
              )}
            </div>

            {selectedReq.status !== 'PAID' && selectedReq.status !== 'REJECTED' && canPayout ? (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    Bank UTR / UPI Reference Number *
                  </label>
                  <input
                    type="text"
                    value={payoutRef}
                    onChange={(e) => setPayoutRef(e.target.value)}
                    placeholder="e.g. 529104812391 (Mandatory for Paid status)"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    Internal Processing Notes
                  </label>
                  <input
                    type="text"
                    value={actionNotes}
                    onChange={(e) => setActionNotes(e.target.value)}
                    placeholder="Reason or payout notes..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      setActionType('REJECT');
                      handleAction();
                    }}
                    className="py-2.5 px-4 bg-rose-600/20 border border-rose-500/30 hover:bg-rose-600/30 text-rose-300 font-bold rounded-xl cursor-pointer"
                  >
                    Reject &amp; Refund
                  </button>

                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      setActionType('PAY');
                      handleAction();
                    }}
                    className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md shadow-emerald-600/25 cursor-pointer"
                  >
                    {isProcessing ? 'Recording...' : 'Mark Paid ➔'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
                This request has been finalized as <strong className="text-white">{selectedReq.status}</strong>.
                {selectedReq.referenceNo && (
                  <div className="mt-1 text-emerald-400 font-mono">Bank UTR: {selectedReq.referenceNo}</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
