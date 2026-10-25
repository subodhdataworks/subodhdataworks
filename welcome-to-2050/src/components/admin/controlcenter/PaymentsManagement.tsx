import React, { useState } from 'react';
import {
  IndianRupee,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  Calendar,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  RefreshCw,
  Plus,
  X
} from 'lucide-react';
import { SystemPaymentRecord } from '../../../types/admin';
import { AdminDataService } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';
import { recordReferralPayment } from '../../../services/realAuthService';

interface PaymentsManagementProps {
  payments: SystemPaymentRecord[];
  onRefresh: () => void;
  isDark?: boolean;
}

export const PaymentsManagement: React.FC<PaymentsManagementProps> = ({ payments, onRefresh, isDark = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'SUCCESS' | 'PENDING' | 'FAILED' | 'REFUNDED'>('all');
  const [providerFilter, setProviderFilter] = useState<string>('all');
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [creditReferralModal, setCreditReferralModal] = useState<{
    open: boolean;
    payment: SystemPaymentRecord | null;
    code: string;
    isSubmitting: boolean;
    message: string | null;
  }>({
    open: false,
    payment: null,
    code: '',
    isSubmitting: false,
    message: null,
  });

  const handleCreditReferralCommission = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!creditReferralModal.payment || !creditReferralModal.code.trim()) {
      return;
    }
    setCreditReferralModal((prev) => ({ ...prev, isSubmitting: true, message: null }));
    try {
      const res = await recordReferralPayment({
        paymentId: creditReferralModal.payment.paymentRef || creditReferralModal.payment.id,
        orderId: creditReferralModal.payment.orderId || '',
        amount: creditReferralModal.payment.amount,
        payerEmail: creditReferralModal.payment.userEmail,
        payerPhone: creditReferralModal.payment.userPhone,
        payerName: creditReferralModal.payment.userName,
        courseTitle: creditReferralModal.payment.courseName,
        refCode: creditReferralModal.code.trim(),
      });
      if (res.success) {
        setCreditReferralModal((prev) => ({
          ...prev,
          isSubmitting: false,
          message: `Success! ₹100 referral commission credited to affiliate ${prev.code.trim()}`,
        }));
        setTimeout(() => {
          setCreditReferralModal({ open: false, payment: null, code: '', isSubmitting: false, message: null });
          onRefresh();
        }, 1200);
      } else {
        setCreditReferralModal((prev) => ({
          ...prev,
          isSubmitting: false,
          message: `Could not credit: ${res.reason || 'Failed'}`,
        }));
      }
    } catch (err: any) {
      setCreditReferralModal((prev) => ({
        ...prev,
        isSubmitting: false,
        message: err?.message || 'Error crediting referral',
      }));
    }
  };

  const cardBg = isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90 shadow-sm';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';

  // New manual verified payment form state
  const [newPayName, setNewPayName] = useState('');
  const [newPayEmail, setNewPayEmail] = useState('');
  const [newPayPhone, setNewPayPhone] = useState('');
  const [newPayAmount, setNewPayAmount] = useState('987');
  const [newPayProvider, setNewPayProvider] = useState<'UPI' | 'Razorpay' | 'DirectBank'>('UPI');
  const [newPayRef, setNewPayRef] = useState('');
  const [isSubmittingPay, setIsSubmittingPay] = useState(false);

  const canManageFinance = AdminAuthService.hasPermission('view_finance');

  const filteredPayments = payments.filter((p) => {
    const q = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.userName.toLowerCase().includes(q) ||
      (p.userEmail && p.userEmail.toLowerCase().includes(q)) ||
      (p.userPhone && p.userPhone.includes(q)) ||
      p.paymentRef.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q);

    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    const matchesProvider = providerFilter === 'all' || p.provider === providerFilter;

    return matchesSearch && matchesStatus && matchesProvider;
  });

  const totalCollected = payments
    .filter((p) => p.status === 'SUCCESS')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const handleCreatePaymentRecord = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPayName || !newPayRef || !newPayAmount) {
      alert('Please fill out all required payment confirmation details.');
      return;
    }

    setIsSubmittingPay(true);
    try {
      await AdminDataService.recordPayment({
        userId: `usr_manual_${Date.now()}`,
        userName: newPayName.trim(),
        userEmail: newPayEmail.trim() || undefined,
        userPhone: newPayPhone.trim() || undefined,
        amount: parseFloat(newPayAmount) || 987,
        courseId: 'python',
        courseName: 'Data Analytics & AI Super 30 Flagship',
        status: 'SUCCESS',
        provider: newPayProvider,
        paymentRef: newPayRef.trim(),
        orderId: `MANUAL_ORD_${Date.now().toString().slice(-6)}`,
        verifiedBy: `Admin Manual Verification (${AdminAuthService.getCurrentSession()?.admin.email})`,
        refundStatus: 'NONE',
      });

      setIsRecordModalOpen(false);
      setNewPayName('');
      setNewPayEmail('');
      setNewPayPhone('');
      setNewPayRef('');
      onRefresh();
    } catch (e: any) {
      alert(e?.message || 'Error recording payment.');
    } finally {
      setIsSubmittingPay(false);
    }
  };

  return (
    <div className="space-y-6 text-left">
      {/* Financial Summary Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm">
          <span className="text-xs font-bold text-slate-400 block mb-1">Total Verified Collections</span>
          <div className="text-2xl font-black text-white">₹{totalCollected.toLocaleString()}</div>
          <span className="text-[11px] font-medium text-emerald-400 mt-1 block">
            100% Audited Payment Gateways
          </span>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm">
          <span className="text-xs font-bold text-slate-400 block mb-1">Successful Enrollments</span>
          <div className="text-2xl font-black text-emerald-400">
            {payments.filter((p) => p.status === 'SUCCESS').length}
          </div>
          <span className="text-[11px] font-medium text-slate-400 mt-1 block">
            ₹987 / Student Plan
          </span>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm">
          <span className="text-xs font-bold text-slate-400 block mb-1">Pending / Reconciling</span>
          <div className="text-2xl font-black text-amber-400">
            {payments.filter((p) => p.status === 'PENDING').length}
          </div>
          <span className="text-[11px] font-medium text-slate-400 mt-1 block">
            Awaiting bank confirmation
          </span>
        </div>
      </div>

      {/* Top Search & Filter Bar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search transaction ID, UTR, student or phone..."
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto overflow-x-auto">
          {/* Status selector */}
          <select
            value={statusFilter}
            onChange={(e: any) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-slate-300 font-semibold cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="SUCCESS">Verified Success</option>
            <option value="PENDING">Pending</option>
            <option value="FAILED">Failed</option>
            <option value="REFUNDED">Refunded</option>
          </select>

          {/* Provider selector */}
          <select
            value={providerFilter}
            onChange={(e) => setProviderFilter(e.target.value)}
            className="px-3 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-slate-300 font-semibold cursor-pointer"
          >
            <option value="all">All Providers</option>
            <option value="UPI">UPI Transfer</option>
            <option value="Razorpay">Razorpay Gateway</option>
            <option value="DirectBank">Direct Bank NEFT/IMPS</option>
          </select>

          {/* Record manual payment button */}
          {canManageFinance && (
            <button
              type="button"
              onClick={() => setIsRecordModalOpen(true)}
              className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Record Offline/Bank Payment</span>
            </button>
          )}
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/60 border-b border-slate-800 text-[11px] font-black text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Transaction / Date</th>
                <th className="py-3 px-4">Learner Details</th>
                <th className="py-3 px-4">Course Program</th>
                <th className="py-3 px-4">Gateway &amp; Reference (UTR)</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4 text-center">Payment Status</th>
                <th className="py-3 px-4 text-right">Referral Commission</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredPayments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500 text-xs">
                    No payment transactions matching filter found.
                  </td>
                </tr>
              ) : (
                filteredPayments.map((pay) => (
                  <tr key={pay.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-mono text-xs font-bold text-white">{pay.id}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {new Date(pay.date).toLocaleString()}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 space-y-0.5">
                      <div className="font-bold text-white">{pay.userName}</div>
                      <div className="text-[11px] text-slate-400">{pay.userEmail || pay.userPhone || 'Registered Student'}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="text-slate-300 font-semibold">{pay.courseName}</span>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5 font-bold text-slate-200">
                        <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                        <span>{pay.provider}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {pay.paymentRef}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-black text-white text-sm">
                      ₹{pay.amount.toLocaleString()}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black border ${
                        pay.status === 'SUCCESS'
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                          : pay.status === 'PENDING'
                          ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                          : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                      }`}>
                        {pay.status === 'SUCCESS' && <CheckCircle2 className="w-3 h-3" />}
                        {pay.status === 'PENDING' && <Clock className="w-3 h-3" />}
                        {pay.status === 'FAILED' && <AlertCircle className="w-3 h-3" />}
                        <span>{pay.status}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          setCreditReferralModal({
                            open: true,
                            payment: pay,
                            code: '',
                            isSubmitting: false,
                            message: null,
                          })
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-blue-500/15 hover:bg-blue-500/25 text-blue-400 border border-blue-500/30 transition-all cursor-pointer"
                        title="Credit ₹100 Referral Commission to an affiliate"
                      >
                        <IndianRupee className="w-3 h-3" />
                        <span>Credit ₹100</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Record Payment Modal ── */}
      {isRecordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => setIsRecordModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-black text-white mb-1">Record Verified Payment</h3>
            <p className="text-xs text-slate-400 mb-4">
              Enter bank reference details for offline UPI or Direct Bank student enrollment
            </p>

            <form onSubmit={handleCreatePaymentRecord} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  value={newPayName}
                  onChange={(e) => setNewPayName(e.target.value)}
                  placeholder="e.g. Subodh Kumar"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Email / Phone *</label>
                <input
                  type="text"
                  value={newPayEmail}
                  onChange={(e) => setNewPayEmail(e.target.value)}
                  placeholder="learner@gmail.com or 9876543210"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Amount (₹) *</label>
                  <input
                    type="number"
                    required
                    value={newPayAmount}
                    onChange={(e) => setNewPayAmount(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none font-bold"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Payment Method</label>
                  <select
                    value={newPayProvider}
                    onChange={(e: any) => setNewPayProvider(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-bold cursor-pointer"
                  >
                    <option value="UPI">UPI Transfer</option>
                    <option value="DirectBank">Direct Bank NEFT</option>
                    <option value="Razorpay">Razorpay</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Bank Reference (UTR / UPI Ref ID) *</label>
                <input
                  type="text"
                  required
                  value={newPayRef}
                  onChange={(e) => setNewPayRef(e.target.value)}
                  placeholder="e.g. UPI/2026/8947265819 or UTR123456"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingPay}
                className="w-full mt-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl shadow-lg shadow-emerald-600/25 cursor-pointer transition-colors"
              >
                {isSubmittingPay ? 'Recording in Ledger...' : 'Verify & Record in Ledger ➔'}
              </button>
            </form>
          </div>
        </div>
      )}
      {/* ── Credit Referral Commission Modal ── */}
      {creditReferralModal.open && creditReferralModal.payment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => setCreditReferralModal({ open: false, payment: null, code: '', isSubmitting: false, message: null })}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-mono font-bold mb-3">
              <IndianRupee className="w-3 h-3" />
              <span>Affiliate Commission Dispatch</span>
            </div>

            <h3 className="text-base font-black text-white mb-1">Credit ₹100 Referral Commission</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Assign this payment of <strong className="text-white font-mono">₹{creditReferralModal.payment.amount}</strong> from <strong className="text-white">{creditReferralModal.payment.userName}</strong> to an affiliate partner.
            </p>

            {creditReferralModal.message && (
              <div className="mb-4 p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                {creditReferralModal.message}
              </div>
            )}

            <form onSubmit={handleCreditReferralCommission} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1.5">
                  Affiliate Referral Code or Partner Name *
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={creditReferralModal.code}
                  onChange={(e) => setCreditReferralModal((prev) => ({ ...prev, code: e.target.value }))}
                  placeholder="e.g. SUBODH100 or SUBODH"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 font-mono text-sm uppercase"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">
                  The ₹100 will immediately reflect in the partner's Available Balance and Total Earned.
                </span>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCreditReferralModal({ open: false, payment: null, code: '', isSubmitting: false, message: null })}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creditReferralModal.isSubmitting}
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl shadow-lg shadow-blue-600/25 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {creditReferralModal.isSubmitting ? 'Crediting...' : 'Confirm Credit ₹100 ➔'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
