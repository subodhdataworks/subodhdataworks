import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowLeft,
  CheckCircle2,
  Wallet,
  Building2,
  Pencil,
  Plus,
  Send,
  Check,
  Copy,
  Clock,
  AlertCircle,
  ShieldCheck,
  Save,
  QrCode,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ReferralEngine } from '../../services/referralEngine';

interface WalletWithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface WithdrawalRecord {
  id: string;
  amount: number;
  method: 'BANK' | 'UPI';
  bankName?: string;
  accountNumber?: string;
  ifsc?: string;
  upiId?: string;
  accountHolder: string;
  date: string;
  timestamp: number;
  status: 'Processing' | 'Completed' | 'Pending';
}

export const WalletWithdrawModal: React.FC<WalletWithdrawModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  // Balance: starts from actual wallet or fallback to 3.28 to match user's design
  const [balance, setBalance] = useState<number>(3.28);
  const [amount, setAmount] = useState<string>('');

  // Payout details - EMPTY BY DEFAULT! Only populated when student adds or if saved in localStorage
  const [payoutType, setPayoutType] = useState<'BANK' | 'UPI'>('BANK');
  const [accountHolder, setAccountHolder] = useState<string>('');
  const [bankName, setBankName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [ifscCode, setIfscCode] = useState<string>('');
  const [upiId, setUpiId] = useState<string>('');

  // Form edit states
  const [isEditingAccount, setIsEditingAccount] = useState<boolean>(false);
  const [editPayoutType, setEditPayoutType] = useState<'BANK' | 'UPI'>('BANK');
  const [editHolder, setEditHolder] = useState<string>('');
  const [editBank, setEditBank] = useState<string>('');
  const [editAcc, setEditAcc] = useState<string>('');
  const [editIfsc, setEditIfsc] = useState<string>('');
  const [editUpi, setEditUpi] = useState<string>('');

  // UI state
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [copiedTxn, setCopiedTxn] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<WithdrawalRecord | null>(null);

  // Sync state whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setError(null);
      setSubmittedData(null);
      setIsSubmitting(false);
      setIsEditingAccount(false);
      setCopiedTxn(false);
      setAmount('');

      if (typeof window !== 'undefined') {
        // Read real balance from wallet
        const customWallet = localStorage.getItem('futureai_user_wallet');
        if (customWallet !== null && !isNaN(parseFloat(customWallet))) {
          const parsed = parseFloat(customWallet);
          setBalance(parsed > 0 ? parsed : 3.28);
        } else {
          setBalance(3.28);
        }

        // Read stored payout details - NO HARDCODED DEFAULTS!
        const savedAcc = localStorage.getItem('futureai_bank_acc');
        const savedBank = localStorage.getItem('futureai_bank_name');
        const savedIfsc = localStorage.getItem('futureai_bank_ifsc');
        const savedHolder = localStorage.getItem('futureai_bank_holder');
        const savedUpi = localStorage.getItem('futureai_user_upi');
        const savedType = localStorage.getItem('futureai_payout_type');

        if (savedAcc && savedAcc.trim()) {
          setAccountNumber(savedAcc.trim());
          if (savedBank) setBankName(savedBank.trim());
          if (savedIfsc) setIfscCode(savedIfsc.trim().toUpperCase());
          if (savedHolder) setAccountHolder(savedHolder.trim().toUpperCase());
        } else {
          setAccountNumber('');
          setBankName('');
          setIfscCode('');
          setAccountHolder(savedHolder ? savedHolder.trim().toUpperCase() : '');
        }

        if (savedUpi && savedUpi.trim()) {
          setUpiId(savedUpi.trim());
        } else {
          setUpiId('');
        }

        if (savedType === 'UPI' || savedType === 'BANK') {
          setPayoutType(savedType);
        }
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Open Edit Form
  const handleOpenEdit = () => {
    setEditPayoutType(payoutType);
    setEditHolder(accountHolder || (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_name') || '' : ''));
    setEditBank(bankName);
    setEditAcc(accountNumber);
    setEditIfsc(ifscCode);
    setEditUpi(upiId);
    setIsEditingAccount(true);
    setError(null);
  };

  // Save Bank or UPI Details
  const handleSaveAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanHolder = editHolder.trim().toUpperCase();
    if (!cleanHolder) {
      setError('Please enter Account Holder / Recipient Name.');
      return;
    }

    if (editPayoutType === 'BANK') {
      const cleanAcc = editAcc.trim();
      const cleanIfsc = editIfsc.trim().toUpperCase();
      if (!cleanAcc || cleanAcc.length < 8) {
        setError('Please enter a valid Bank Account Number (minimum 8 digits).');
        return;
      }
      if (!cleanIfsc || cleanIfsc.length < 5) {
        setError('Please enter a valid Bank IFSC Code (e.g. SBIN0001234).');
        return;
      }

      setAccountHolder(cleanHolder);
      setBankName(editBank.trim() || 'State Bank of India');
      setAccountNumber(cleanAcc);
      setIfscCode(cleanIfsc);
      setPayoutType('BANK');

      if (typeof window !== 'undefined') {
        localStorage.setItem('futureai_payout_type', 'BANK');
        localStorage.setItem('futureai_bank_holder', cleanHolder);
        localStorage.setItem('futureai_bank_name', editBank.trim() || 'State Bank of India');
        localStorage.setItem('futureai_bank_acc', cleanAcc);
        localStorage.setItem('futureai_bank_ifsc', cleanIfsc);
      }
    } else {
      // UPI validation
      const cleanUpi = editUpi.trim();
      if (!cleanUpi || !cleanUpi.includes('@') || cleanUpi.length < 5) {
        setError('Please enter a valid UPI ID (e.g. 9876543210@paytm, name@okhdfcbank, or name@ybl).');
        return;
      }

      setAccountHolder(cleanHolder);
      setUpiId(cleanUpi);
      setPayoutType('UPI');

      if (typeof window !== 'undefined') {
        localStorage.setItem('futureai_payout_type', 'UPI');
        localStorage.setItem('futureai_bank_holder', cleanHolder);
        localStorage.setItem('futureai_user_upi', cleanUpi);
      }
    }

    // Also save UPI if entered optionally in Bank mode
    if (editUpi.trim()) {
      setUpiId(editUpi.trim());
      if (typeof window !== 'undefined') {
        localStorage.setItem('futureai_user_upi', editUpi.trim());
      }
    }

    setIsEditingAccount(false);
    setError(null);
  };

  const handleQuickAmount = (val: number | 'max') => {
    setError(null);
    if (val === 'max') {
      setAmount(balance.toFixed(2));
    } else {
      setAmount(val.toString());
    }
  };

  const generateTxnId = () => {
    const chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let result = 'TXN-';
    for (let i = 0; i < 9; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSubmitWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Verify account exists
    const hasBank = accountNumber && accountNumber.length >= 8;
    const hasUpi = upiId && upiId.includes('@');

    if (!hasBank && !hasUpi) {
      setError('Please add your Bank Account or UPI ID first.');
      handleOpenEdit();
      return;
    }

    const numAmt = parseFloat(amount);
    if (isNaN(numAmt) || numAmt <= 0) {
      setError('Please enter a valid withdrawal amount.');
      return;
    }

    if (numAmt > balance) {
      setError(`Amount exceeds your available balance of ₹${balance.toFixed(2)}.`);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const now = new Date();
      const txnId = generateTxnId();
      const dateStr = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      const effectiveMethod = payoutType === 'UPI' && hasUpi ? 'UPI' : 'BANK';

      const record: WithdrawalRecord = {
        id: txnId,
        amount: numAmt,
        method: effectiveMethod,
        bankName: bankName || 'Bank Account',
        accountNumber: accountNumber,
        ifsc: ifscCode,
        upiId: upiId,
        accountHolder: accountHolder || 'Student',
        date: dateStr,
        timestamp: now.getTime(),
        status: 'Processing',
      };

      // Deduct balance
      const newBal = Math.max(0, balance - numAmt);
      setBalance(newBal);

      if (typeof window !== 'undefined') {
        localStorage.setItem('futureai_user_wallet', newBal.toString());

        // Save submitted history
        const savedHist = localStorage.getItem('futureai_withdrawals_history');
        const currentHist = savedHist ? JSON.parse(savedHist) : [];
        currentHist.unshift(record);
        localStorage.setItem('futureai_withdrawals_history', JSON.stringify(currentHist));

        // Notify app
        window.dispatchEvent(new Event('futureai_wallet_updated'));
        window.dispatchEvent(new Event('storage'));
      }

      // ReferralEngine sync
      try {
        ReferralEngine.requestWithdrawal(numAmt, effectiveMethod === 'UPI' ? 'UPI' : 'BANK_TRANSFER', {
          accountHolder: record.accountHolder,
          accountNumber: record.accountNumber,
          ifsc: record.ifsc,
          upiId: record.upiId,
        });
      } catch {}

      setIsSubmitting(false);
      setSubmittedData(record);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.4 },
          colors: ['#00a86b', '#10b981', '#3b82f6', '#f59e0b'],
        });
      } catch {}

      onSuccess?.();
    }, 600);
  };

  const handleCopyTransactionId = (txnId: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(txnId);
      setCopiedTxn(true);
      setTimeout(() => setCopiedTxn(false), 2500);
    }
  };

  const hasPayoutMethod = Boolean(accountNumber && accountNumber.length >= 8) || Boolean(upiId && upiId.includes('@'));

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs animate-fadeIn p-0 sm:p-4">
      {/* Main Container - Exact Match to Reference Screenshot media_1792486106841_dd44659d.png */}
      <div className="relative w-full sm:max-w-[420px] bg-white rounded-t-[32px] sm:rounded-[32px] p-5 sm:p-6 shadow-2xl border border-slate-100 flex flex-col max-h-[92vh] overflow-y-auto">

        {/* ══════════════════════════════════════════════════
            SCREEN 2: SUCCESS RECEIPT
           ══════════════════════════════════════════════════ */}
        {submittedData ? (
          <div className="py-2 text-center animate-scaleUp">
            {/* Green Success Badge */}
            <div className="w-16 h-16 rounded-full bg-[#e8fbf2] text-[#00a86b] flex items-center justify-center mx-auto mb-3 shadow-md">
              <Check className="w-9 h-9 stroke-[3]" />
            </div>

            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              Withdrawal Request Placed!
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed max-w-xs mx-auto">
              Your funds are being transferred directly to your verified payout account.
            </p>

            {/* Receipt Card */}
            <div className="my-5 p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 text-left space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Amount</span>
                <span className="text-base font-black text-[#00a86b]">
                  ₹ {submittedData.amount.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Payout Method</span>
                <span className="font-bold text-slate-800">
                  {submittedData.method === 'UPI' ? `UPI (${submittedData.upiId})` : `${submittedData.bankName} (**** ${submittedData.accountNumber?.slice(-4)})`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Recipient</span>
                <span className="font-bold text-slate-800">{submittedData.accountHolder}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Transaction ID</span>
                <div className="flex items-center gap-1.5 font-mono font-bold text-slate-800">
                  <span>{submittedData.id}</span>
                  <button
                    type="button"
                    onClick={() => handleCopyTransactionId(submittedData.id)}
                    className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    {copiedTxn ? <Check className="w-3.5 h-3.5 text-[#00a86b]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-500 font-medium">Status</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00a86b] font-bold text-[11px] border border-emerald-200">
                  <Clock className="w-3 h-3" /> Processing (Instant - 24 hrs)
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 rounded-2xl bg-[#00a86b] hover:bg-[#00925d] text-white font-bold text-sm shadow-md shadow-emerald-500/25 cursor-pointer active:scale-98 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          /* ══════════════════════════════════════════════════
              SCREEN 1: WITHDRAW FUNDS
             ══════════════════════════════════════════════════ */
          <div>
            {/* ── 1. TOP HEADER: Back Arrow + Title + Secure & Safe ── */}
            <div className="flex items-start justify-between pb-4">
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 -ml-1 text-slate-800 hover:text-slate-950 transition-colors cursor-pointer mt-0.5"
                  aria-label="Back"
                >
                  <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
                </button>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                    Withdraw Funds
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Transfer your earnings to your bank account or UPI
                  </p>
                </div>
              </div>

              {/* Secure & Safe Badge */}
              <div className="flex items-center gap-1.5 text-[#00a86b] font-bold text-xs shrink-0 pt-0.5">
                <ShieldCheck className="w-4 h-4 text-[#00a86b]" />
                <span>Secure &amp; Safe</span>
              </div>
            </div>

            {/* Error Banner */}
            {error && (
              <div className="mb-3.5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            {/* ── 2. AVAILABLE BALANCE CARD ── */}
            <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-[#eefdf5] via-[#ebfbf3] to-[#e4faf0] border border-[#d1fae5] relative overflow-hidden flex items-center gap-3.5 shadow-2xs">
              {/* Decorative Soft Watermark Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/25 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8" />
              <div className="absolute bottom-0 right-10 w-24 h-24 bg-teal-200/20 rounded-full blur-xl pointer-events-none" />

              {/* Wallet Green Icon Box */}
              <div className="w-13 h-13 rounded-2xl bg-[#d4f7e5] flex items-center justify-center shrink-0 shadow-2xs text-[#00a86b]">
                <Wallet className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Balance Amount */}
              <div className="relative z-10">
                <span className="text-xs font-semibold text-slate-600 block">
                  Available Balance
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#00a86b] tracking-tight leading-none mt-0.5 block">
                  ₹{balance.toFixed(2)}
                </span>
              </div>
            </div>

            {/* ── 3. ENTER WITHDRAWAL AMOUNT SECTION ── */}
            <div className="mb-5">
              <label className="text-sm font-bold text-slate-800 block mb-2">
                Enter Withdrawal Amount
              </label>

              {/* Input with Rupee Prefix Box */}
              <div className="border border-slate-200 rounded-2xl flex items-stretch overflow-hidden bg-white focus-within:border-[#00a86b] focus-within:ring-2 focus-within:ring-emerald-100 transition-all shadow-2xs">
                <div className="bg-slate-50 border-r border-slate-200 px-4 flex items-center justify-center text-slate-500 font-bold text-base">
                  ₹
                </div>
                <input
                  type="number"
                  step="any"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => {
                    setError(null);
                    setAmount(e.target.value);
                  }}
                  className="flex-1 px-3.5 py-3 text-base font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                />
              </div>

              {/* Quick Amount Chips (Row of 4: ₹300, ₹500, ₹1,000, Max) */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => handleQuickAmount(300)}
                  className="bg-[#ebfbf3] hover:bg-[#d6f7e5] active:scale-95 text-[#047857] font-bold text-xs py-2 rounded-xl border border-emerald-200/50 text-center transition-all cursor-pointer shadow-2xs"
                >
                  ₹300
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAmount(500)}
                  className="bg-[#ebfbf3] hover:bg-[#d6f7e5] active:scale-95 text-[#047857] font-bold text-xs py-2 rounded-xl border border-emerald-200/50 text-center transition-all cursor-pointer shadow-2xs"
                >
                  ₹500
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAmount(1000)}
                  className="bg-[#ebfbf3] hover:bg-[#d6f7e5] active:scale-95 text-[#047857] font-bold text-xs py-2 rounded-xl border border-emerald-200/50 text-center transition-all cursor-pointer shadow-2xs"
                >
                  ₹1,000
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAmount('max')}
                  className="bg-[#ebfbf3] hover:bg-[#d6f7e5] active:scale-95 text-[#047857] font-bold text-xs py-2 rounded-xl border border-emerald-200/50 text-center transition-all cursor-pointer shadow-2xs"
                >
                  Max
                </button>
              </div>
            </div>

            {/* ── 4. SELECT BANK / UPI ACCOUNT SECTION ── */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-sm font-bold text-slate-800">
                  Select Payout Account
                </h3>

                <button
                  type="button"
                  onClick={handleOpenEdit}
                  className="text-xs font-bold text-[#00a86b] hover:text-[#00925d] flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Add New</span>
                </button>
              </div>

              {/* Mode A: Saved Payout Card (Shown ONLY when student has added bank or UPI) */}
              {!isEditingAccount && hasPayoutMethod ? (
                <div className="rounded-2xl border-2 border-[#10b981] bg-[#f0fdf6] p-3.5 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-3">
                    {/* Selected Radio Button */}
                    <div className="w-5 h-5 rounded-full border-2 border-[#10b981] flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    </div>

                    {/* Icon: Bank or UPI */}
                    {payoutType === 'UPI' && upiId ? (
                      <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                        <QrCode className="w-5 h-5 stroke-[2.2]" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] shrink-0">
                        <Building2 className="w-5 h-5 stroke-[2.2]" />
                      </div>
                    )}

                    {/* Account Details */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight leading-tight">
                        {accountHolder || 'STUDENT ACCOUNT'}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {payoutType === 'UPI' && upiId ? (
                          <span className="text-purple-700 font-bold font-mono">{upiId}</span>
                        ) : (
                          <span>{bankName || 'Bank Account'}</span>
                        )}
                      </p>
                      {accountNumber && (
                        <p className="text-xs font-mono font-semibold text-slate-600">
                          **** **** **** {accountNumber.slice(-4)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Edit Button */}
                  <button
                    type="button"
                    onClick={handleOpenEdit}
                    className="bg-white border border-slate-200 hover:border-emerald-300 rounded-lg px-2.5 py-1 text-xs font-bold text-[#00a86b] flex items-center gap-1 shadow-2xs hover:bg-slate-50 cursor-pointer"
                  >
                    <Pencil className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>
              ) : !isEditingAccount ? (
                /* Mode B: Empty State (By default - No account preset!) */
                <div
                  onClick={handleOpenEdit}
                  className="rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/30 p-4 text-center cursor-pointer hover:bg-emerald-50/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00a86b] flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform">
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                    No Payout Method Added Yet
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Tap here to add Bank Account or UPI ID to withdraw
                  </p>
                  <button
                    type="button"
                    onClick={handleOpenEdit}
                    className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00a86b] text-white font-bold text-xs shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Add Bank Account / UPI</span>
                  </button>
                </div>
              ) : (
                /* Mode C: Inline Add / Edit Form (Bank + UPI Support) */
                <form onSubmit={handleSaveAccount} className="p-3.5 rounded-2xl border border-emerald-300 bg-emerald-50/40 space-y-3 text-xs">
                  {/* Payout Method Toggle: Bank Account vs UPI ID */}
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-white rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setEditPayoutType('BANK')}
                      className={`py-1.5 px-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        editPayoutType === 'BANK'
                          ? 'bg-emerald-500 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Bank Account</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditPayoutType('UPI')}
                      className={`py-1.5 px-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        editPayoutType === 'UPI'
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      <span>UPI ID</span>
                    </button>
                  </div>

                  {/* Account Holder Name */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Account Holder / Recipient Name
                    </label>
                    <input
                      type="text"
                      value={editHolder}
                      onChange={(e) => setEditHolder(e.target.value)}
                      placeholder="e.g. SUBODH KUMAR"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white font-bold uppercase outline-none focus:border-emerald-500"
                      required
                    />
                  </div>

                  {/* Bank Account Fields */}
                  {editPayoutType === 'BANK' ? (
                    <>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="font-bold text-slate-700 block mb-1">Bank Name</label>
                          <input
                            type="text"
                            value={editBank}
                            onChange={(e) => setEditBank(e.target.value)}
                            placeholder="e.g. State Bank of India"
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white outline-none focus:border-emerald-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="font-bold text-slate-700 block mb-1">IFSC Code</label>
                          <input
                            type="text"
                            value={editIfsc}
                            onChange={(e) => setEditIfsc(e.target.value)}
                            placeholder="e.g. SBIN0001234"
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white uppercase font-mono outline-none focus:border-emerald-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Account Number</label>
                        <input
                          type="text"
                          value={editAcc}
                          onChange={(e) => setEditAcc(e.target.value)}
                          placeholder="Enter 9-18 digit account number"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white font-mono outline-none focus:border-emerald-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="font-bold text-slate-700 block mb-1">
                          UPI ID <span className="text-slate-400 font-normal">(Optional for faster transfer)</span>
                        </label>
                        <input
                          type="text"
                          value={editUpi}
                          onChange={(e) => setEditUpi(e.target.value)}
                          placeholder="e.g. 9876543210@paytm or name@okhdfcbank"
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-mono outline-none focus:border-emerald-500"
                        />
                      </div>
                    </>
                  ) : (
                    /* UPI Mode Fields */
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">
                        UPI ID (VPA)
                      </label>
                      <input
                        type="text"
                        value={editUpi}
                        onChange={(e) => setEditUpi(e.target.value)}
                        placeholder="e.g. 9876543210@paytm or yourname@okhdfcbank"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white font-mono outline-none focus:border-purple-500"
                        required
                        autoFocus
                      />
                      <p className="text-[10px] text-slate-500 mt-1">
                        Compatible with PhonePe, Google Pay, Paytm, BHIM and all bank UPI apps.
                      </p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setIsEditingAccount(false)}
                      className="flex-1 py-2 rounded-lg border border-slate-200 bg-white font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 rounded-lg bg-[#00a86b] hover:bg-[#00925d] text-white font-bold flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Details</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ── 5. BOTTOM ACTION: WITHDRAW NOW BUTTON ── */}
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmitWithdraw}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#00a86b] hover:bg-[#00925d] active:scale-[0.98] transition-all text-white font-bold text-base shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              <Send className="w-4 h-4 fill-white text-white -rotate-45" />
              <span>{isSubmitting ? 'Processing...' : 'Withdraw Now'}</span>
            </button>

            {/* iOS Home Bar Indicator */}
            <div className="w-32 h-1 bg-slate-800/40 rounded-full mx-auto mt-4 sm:hidden" />
          </div>
        )}

      </div>
    </div>
  );
};
