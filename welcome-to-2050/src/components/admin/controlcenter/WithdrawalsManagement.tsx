import React, { useState, useMemo } from 'react';
import {
  IndianRupee,
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  CreditCard,
  Building,
  RefreshCw,
  X,
  AlertCircle,
  Info
} from 'lucide-react';
import { WithdrawalRequest, ReferralEngine } from '../../../services/referralEngine';
import { AdminDataService } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';

interface WithdrawalsManagementProps {
  withdrawals: WithdrawalRequest[] | any[];
  onRefresh: () => void;
  isDark?: boolean;
}

interface NormalizedWithdrawal {
  id: string;
  txId: string;
  userId: string;
  referrerId: string;
  amount: number;
  method: 'UPI' | 'BANK_TRANSFER' | 'BANK';
  destination: string;
  upiId: string;
  accountNumber: string;
  accountHolder: string;
  ifsc: string;
  bankName: string;
  status: string;
  requestedAt: string;
  paidAt?: string | null;
  referenceNo: string;
  adminNotes?: string;
  raw: any;
}

function normalizeItem(w: any): NormalizedWithdrawal {
  const id = String(w?.id || w?.txId || 'REQ');
  const txId = String(w?.txId || w?.id || '');
  const userId = String(w?.userId || w?.referrerId || '');
  const referrerId = String(w?.referrerId || w?.userId || w?.refCode || w?.userEmail || 'Learner');
  const rawMethod = String(w?.method || '').toUpperCase();
  const hasBankFields = Boolean(w?.details?.accountNumber || w?.bankAccNumber || w?.accountNumber);
  const isBank = rawMethod === 'BANK' || rawMethod === 'BANK_TRANSFER' || hasBankFields;
  const method: 'UPI' | 'BANK_TRANSFER' | 'BANK' = isBank ? 'BANK_TRANSFER' : 'UPI';

  const destination = String(
    w?.destination ||
    w?.details?.upiId ||
    w?.details?.accountNumber ||
    w?.bankAccNumber ||
    w?.upiId ||
    ''
  );

  const upiId = String(w?.details?.upiId || w?.upiId || (!isBank ? destination : ''));
  const accountNumber = String(w?.details?.accountNumber || w?.bankAccNumber || w?.accountNumber || (isBank ? destination : ''));
  const accountHolder = String(
    w?.details?.accountHolder ||
    w?.accountHolder ||
    w?.userName ||
    w?.name ||
    referrerId ||
    'Learner'
  );
  const ifsc = String(w?.details?.ifsc || w?.ifsc || w?.bankIfsc || '');
  const bankName = String(w?.details?.bankName || w?.bankName || 'Bank');
  const amount = Number(w?.amount) || 0;

  const rawStatus = String(w?.status || 'UNDER_REVIEW').toUpperCase();
  const status =
    rawStatus === 'PAID'
      ? 'PAID'
      : rawStatus === 'APPROVED'
      ? 'APPROVED'
      : rawStatus === 'REJECTED' || rawStatus === 'CANCELLED'
      ? 'REJECTED'
      : rawStatus === 'PROCESSING'
      ? 'PROCESSING'
      : 'UNDER_REVIEW';

  const requestedAt = String(w?.requestedAt || w?.createdAt || w?.date || new Date().toISOString());
  const referenceNo = String(w?.referenceNo || w?.txId || w?.payoutRef || '');
  const paidAt = w?.paidAt || null;
  const adminNotes = w?.adminNotes || '';

  return {
    id,
    txId,
    userId,
    referrerId,
    amount,
    method,
    destination,
    upiId,
    accountNumber,
    accountHolder,
    ifsc,
    bankName,
    status,
    requestedAt,
    paidAt,
    referenceNo,
    adminNotes,
    raw: w,
  };
}

function safeFormatDate(val?: string | null): string {
  if (!val) return 'Recently';
  try {
    const d = new Date(val);
    if (isNaN(d.getTime())) return String(val);
    return d.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return String(val);
  }
}

export const WithdrawalsManagement: React.FC<WithdrawalsManagementProps> = ({ withdrawals = [], onRefresh }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedReq, setSelectedReq] = useState<NormalizedWithdrawal | null>(null);

  // Modal action state
  const [actionType, setActionType] = useState<'APPROVE' | 'PAY' | 'REJECT' | null>(null);
  const [actionNotes, setActionNotes] = useState('');
  const [payoutRef, setPayoutRef] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [actionError, setActionError] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Safe normalized array
  const safeList = useMemo(() => {
    if (!Array.isArray(withdrawals)) return [];
    return withdrawals.map(normalizeItem);
  }, [withdrawals]);

  const filteredWithdrawals = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return safeList.filter((w) => {
      const matchesSearch =
        !q ||
        w.id.toLowerCase().includes(q) ||
        w.referrerId.toLowerCase().includes(q) ||
        w.accountHolder.toLowerCase().includes(q) ||
        w.upiId.toLowerCase().includes(q) ||
        w.accountNumber.toLowerCase().includes(q) ||
        w.destination.toLowerCase().includes(q) ||
        w.referenceNo.toLowerCase().includes(q);

      const matchesStatus = statusFilter === 'all' || w.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [safeList, searchTerm, statusFilter]);

  const openActionModal = (req: NormalizedWithdrawal, defaultAction: 'APPROVE' | 'PAY' | 'REJECT' | null = null) => {
    setSelectedReq(req);
    setActionType(defaultAction);
    setActionNotes('');
    setPayoutRef('');
    setActionError('');
    setActionSuccess('');
  };

  const closeModal = () => {
    if (isProcessing) return;
    setSelectedReq(null);
    setActionType(null);
    setActionNotes('');
    setPayoutRef('');
    setActionError('');
    setActionSuccess('');
  };

  const handleAction = async () => {
    if (!selectedReq || !actionType) return;
    setActionError('');
    setActionSuccess('');

    // 1. Validation for Reject
    if (actionType === 'REJECT') {
      if (!actionNotes.trim()) {
        setActionError('Mandatory financial safeguard: A valid rejection reason must be provided in Admin Notes.');
        return;
      }
    }

    // 2. Validation for Mark Paid
    if (actionType === 'PAY') {
      const cleanRef = payoutRef.trim();
      if (!cleanRef) {
        setActionError('Mandatory banking verification: Enter Bank UTR / UPI Reference Number before marking Paid.');
        return;
      }

      const upperRef = cleanRef.toUpperCase();
      if (
        upperRef === selectedReq.id.toUpperCase() ||
        upperRef.startsWith('WREQ-') ||
        upperRef.startsWith('WTX-') ||
        upperRef.startsWith('REQ-')
      ) {
        setActionError(
          'Invalid Payout Reference: You entered the internal system withdrawal ID. Please enter the actual Bank UTR or UPI Reference Number (e.g. 12-digit UPI RRN or Bank UTR from your net banking app).'
        );
        return;
      }

      const DUMMY_WORDS = ['TEST', 'PENDING', 'PAID', 'DONE', 'OK', '123', '1234', '12345', '123456', 'CASH', 'NA', 'NULL', 'UNDEFINED', 'TRANSFER'];
      if (DUMMY_WORDS.includes(upperRef) || cleanRef.length < 6 || cleanRef.length > 35) {
        setActionError(
          'Invalid Payout Reference: A valid external Bank UTR or UPI Reference Number (6-35 alphanumeric characters) is required as proof of transfer.'
        );
        return;
      }
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
        const msg = res.message || `✓ Withdrawal request #${selectedReq.id} marked as ${targetStatus}.`;
        setActionSuccess(msg);
        setFeedbackMsg(msg);
        onRefresh();
        setTimeout(() => {
          closeModal();
          setTimeout(() => setFeedbackMsg(''), 5000);
        }, 1200);
      } else {
        setActionError(res.error || 'Failed to update request status on server.');
      }
    } catch (e: any) {
      setActionError(e?.message || 'Unexpected error occurred while updating withdrawal status.');
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
            <option value="UNDER_REVIEW">Under Review (New)</option>
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
                    <p className="text-[11px]">Affiliate partner payout requests will appear here live from Cloud Firestore.</p>
                  </td>
                </tr>
              ) : (
                filteredWithdrawals.map((req) => (
                  <tr key={req.id} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-mono text-xs font-bold text-[#0F172A]">{req.id}</div>
                      <div className="text-[10px] text-[#64748B] mt-0.5">
                        {safeFormatDate(req.requestedAt)}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 space-y-0.5">
                      <div className="font-bold text-[#0F172A]">{req.accountHolder}</div>
                      <div className="text-[11px] text-[#64748B] font-mono">{req.referrerId}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="text-sm font-black text-[#0F172A]">₹{req.amount.toLocaleString('en-IN')}</div>
                      <span className="text-[10px] text-[#059669] font-bold">Available balance reserved</span>
                    </td>

                    {/* Masked Account Details */}
                    <td className="py-3.5 px-4 space-y-0.5">
                      <div className="flex items-center gap-1.5 text-[#0F172A] font-bold">
                        {req.method === 'UPI' ? (
                          <>
                            <CreditCard className="w-3.5 h-3.5 text-[#9333EA] shrink-0" />
                            <span>UPI: {req.upiId || req.destination || 'Not Specified'}</span>
                          </>
                        ) : (
                          <>
                            <Building className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                            <span>Bank: A/C {req.accountNumber ? `••••${req.accountNumber.slice(-4)}` : (req.destination ? `••••${req.destination.slice(-4)}` : 'N/A')}</span>
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
                          onClick={() => openActionModal(req, 'PAY')}
                          className="px-3 py-1.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs cursor-pointer transition-colors shadow-2xs"
                        >
                          Process Payout ➔
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => openActionModal(req, null)}
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
              disabled={isProcessing}
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] cursor-pointer disabled:opacity-40"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-bold text-[#0F172A]">
              Withdrawal Request #{selectedReq.id}
            </h3>

            {/* Inline Error Banner */}
            {actionError && (
              <div className="p-3 bg-[#FEF2F2] border border-[#FECACA] rounded-xl text-xs text-[#DC2626] font-semibold flex items-start gap-2 shadow-2xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div className="flex-1">{actionError}</div>
              </div>
            )}

            {/* Inline Success Banner */}
            {actionSuccess && (
              <div className="p-3 bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl text-xs text-[#059669] font-bold flex items-center gap-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <div className="flex-1">{actionSuccess}</div>
              </div>
            )}

            {/* Details Summary Box */}
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs space-y-1">
              <div><strong>Learner / Creator:</strong> {selectedReq.accountHolder}</div>
              <div><strong>Affiliate UID:</strong> {selectedReq.referrerId}</div>
              <div><strong>Amount:</strong> ₹{selectedReq.amount}</div>
              <div><strong>Method:</strong> {selectedReq.method}</div>
              {selectedReq.method === 'UPI' ? (
                <div><strong>UPI ID:</strong> {selectedReq.upiId || selectedReq.destination}</div>
              ) : (
                <>
                  <div><strong>Account Number:</strong> {selectedReq.accountNumber || selectedReq.destination}</div>
                  <div><strong>IFSC:</strong> {selectedReq.ifsc || 'N/A'}</div>
                  <div><strong>Bank:</strong> {selectedReq.bankName || 'Bank'}</div>
                </>
              )}
              <div>
                <strong>Current Status:</strong>{' '}
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  selectedReq.status === 'PAID'
                    ? 'bg-[#ECFDF5] text-[#059669]'
                    : selectedReq.status === 'APPROVED'
                    ? 'bg-[#EFF6FF] text-[#2563EB]'
                    : selectedReq.status === 'REJECTED'
                    ? 'bg-[#FEF2F2] text-[#DC2626]'
                    : 'bg-[#FFFBEB] text-[#D97706]'
                }`}>
                  {selectedReq.status}
                </span>
              </div>
              {selectedReq.referenceNo && <div><strong>Payout Reference (UTR):</strong> {selectedReq.referenceNo}</div>}
              {selectedReq.paidAt && <div><strong>Paid At:</strong> {safeFormatDate(selectedReq.paidAt)}</div>}
              {selectedReq.adminNotes && <div><strong>Admin Notes:</strong> {selectedReq.adminNotes}</div>}
            </div>

            {selectedReq.status !== 'PAID' && selectedReq.status !== 'REJECTED' && (
              <div className="space-y-3">
                {/* Workflow Guidance for UNDER_REVIEW requests */}
                {selectedReq.status === 'UNDER_REVIEW' && (
                  <div className="p-3 bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl text-xs text-[#1E40AF] space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                      <span>Standard Payout Sequence</span>
                    </div>
                    <p className="text-[11px] text-[#3B82F6] leading-relaxed">
                      1. Click <strong>Approve</strong> to verify affiliate legitimacy.<br />
                      2. Execute external bank transfer/UPI of ₹{selectedReq.amount} to <strong>{selectedReq.upiId || selectedReq.destination}</strong>.<br />
                      3. Select <strong>Mark Paid</strong> and enter the external Bank UTR / UPI Ref to finalize settlement.
                    </p>
                  </div>
                )}

                {/* Action Selector */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      setActionType('PAY');
                      setActionError('');
                    }}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer disabled:opacity-50 ${
                      actionType === 'PAY'
                        ? 'bg-[#059669] text-white border-[#059669]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    Mark Paid
                  </button>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      setActionType('APPROVE');
                      setActionError('');
                    }}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer disabled:opacity-50 ${
                      actionType === 'APPROVE'
                        ? 'bg-[#2563EB] text-white border-[#2563EB]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      setActionType('REJECT');
                      setActionError('');
                    }}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer disabled:opacity-50 ${
                      actionType === 'REJECT'
                        ? 'bg-[#DC2626] text-white border-[#DC2626]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    Reject
                  </button>
                </div>

                {/* Payout Reference Field (Mandatory for PAID) */}
                {actionType === 'PAY' && (
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">
                      Bank UTR / UPI Reference ID * (from external transfer)
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isProcessing}
                      value={payoutRef}
                      onChange={(e) => {
                        setPayoutRef(e.target.value);
                        setActionError('');
                      }}
                      placeholder="e.g. 12-digit UPI RRN (202610281234) or Bank UTR (UTR4928172648)"
                      className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] font-mono focus:outline-none focus:border-[#2563EB]"
                    />
                    <p className="text-[10px] text-[#64748B] mt-1">
                      Do not enter the internal ID #{selectedReq.id}. Enter genuine bank/UPI UTR received after completing payment.
                    </p>
                  </div>
                )}

                {/* Admin Notes */}
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">
                    Admin Notes {actionType === 'REJECT' && '* (Mandatory for rejection)'}
                  </label>
                  <textarea
                    rows={2}
                    disabled={isProcessing}
                    value={actionNotes}
                    onChange={(e) => {
                      setActionNotes(e.target.value);
                      setActionError('');
                    }}
                    placeholder={
                      actionType === 'REJECT'
                        ? 'State reason for rejection (refunds reserved funds back to user wallet)...'
                        : 'Enter internal notes or audit justification...'
                    }
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={closeModal}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#64748B] hover:text-[#0F172A] cursor-pointer disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={isProcessing || !actionType}
                    onClick={handleAction}
                    className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Processing Payout...</span>
                      </>
                    ) : (
                      <span>Confirm {actionType ? (actionType === 'PAY' ? 'Mark Paid' : actionType === 'APPROVE' ? 'Approval' : 'Rejection') : 'Action'}</span>
                    )}
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
