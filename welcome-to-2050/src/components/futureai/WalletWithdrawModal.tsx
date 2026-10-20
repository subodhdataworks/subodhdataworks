import React, { useState, useEffect } from 'react';
import {
  X,
  Wallet,
  Check,
  CheckCircle2,
  AlertCircle,
  Building2,
  ChevronDown,
  User,
  Phone,
  ShieldCheck,
  Copy,
  Clock,
  Info,
  ArrowRight,
  History,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ReferralEngine } from '../../services/referralEngine';

interface WalletWithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

type WithdrawalMethod = 'BANK' | 'PHONEPE' | 'UPI';

interface WithdrawalRecord {
  id: string;
  amount: number;
  method: WithdrawalMethod;
  bankName?: string;
  accountNumber?: string;
  upiId?: string;
  accountHolder: string;
  mobile: string;
  date: string;
  timestamp: number;
  status: 'Processing' | 'Completed' | 'Pending';
}

export const WalletWithdrawModal: React.FC<WalletWithdrawModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  // Current wallet balance
  const [balance, setBalance] = useState<number>(10250);
  const [method, setMethod] = useState<WithdrawalMethod>('BANK');
  const [amount, setAmount] = useState<string>('10000');

  // Bank fields
  const [bankName, setBankName] = useState<string>('State Bank of India (SBI)');
  const [accountNumber, setAccountNumber] = useState<string>('XXXX XXXX 1234');
  const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false);

  // UPI fields
  const [upiId, setUpiId] = useState<string>('');

  // Personal fields
  const [accountHolder, setAccountHolder] = useState<string>('Subodh Kumar');
  const [mobileNumber, setMobileNumber] = useState<string>('98765 43210');

  // UI state
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedTxn, setCopiedTxn] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [historyList, setHistoryList] = useState<WithdrawalRecord[]>([]);

  // Submitted receipt data
  const [submittedData, setSubmittedData] = useState<WithdrawalRecord | null>(null);

  // Sync balance whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setError(null);
      setSubmittedData(null);
      setIsSubmitting(false);
      setShowHistory(false);
      setCopiedTxn(false);

      if (typeof window !== 'undefined') {
        let currentBal = 10250; // default initial demo balance
        const customWallet = localStorage.getItem('futureai_user_wallet');
        if (customWallet !== null && !isNaN(parseInt(customWallet, 10))) {
          currentBal = parseInt(customWallet, 10);
        } else {
          // If no wallet saved yet, initialize with 10250 as shown in the user's reference mockup
          localStorage.setItem('futureai_user_wallet', '10250');
        }

        // Try getting user profile name if available
        const savedProfile = localStorage.getItem('futureai_user_profile');
        if (savedProfile) {
          try {
            const parsed = JSON.parse(savedProfile);
            if (parsed.name) setAccountHolder(parsed.name);
            if (parsed.phone) setMobileNumber(parsed.phone);
          } catch {}
        }

        // Load past withdrawal history
        const savedHistory = localStorage.getItem('futureai_withdrawals_history');
        if (savedHistory) {
          try {
            setHistoryList(JSON.parse(savedHistory));
          } catch {}
        }

        setBalance(currentBal);
        setAmount(currentBal >= 10000 ? '10000' : currentBal > 0 ? currentBal.toString() : '500');
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Format date helper: "19 Oct 2026, 05:38 PM"
  const formatDateTime = (dateObj: Date) => {
    const day = dateObj.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const strHours = hours.toString().padStart(2, '0');
    return `${day} ${month} ${year}, ${strHours}:${minutes} ${ampm}`;
  };

  // Generate Transaction ID: "WD" + YYYYMMDDHHMMSS
  const generateTxnId = (dateObj: Date) => {
    const y = dateObj.getFullYear();
    const m = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const d = dateObj.getDate().toString().padStart(2, '0');
    const h = dateObj.getHours().toString().padStart(2, '0');
    const min = dateObj.getMinutes().toString().padStart(2, '0');
    const s = dateObj.getSeconds().toString().padStart(2, '0');
    return `WD${y}${m}${d}${h}${min}${s}`;
  };

  const handleAllClick = () => {
    setAmount(balance.toString());
  };

  const handleCopyTransactionId = (txnId: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(txnId);
      setCopiedTxn(true);
      setTimeout(() => setCopiedTxn(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const numAmt = parseFloat(amount);
    if (isNaN(numAmt) || numAmt <= 0) {
      setError('Please enter a valid withdrawal amount.');
      return;
    }

    if (numAmt < 500) {
      setError('Minimum withdrawal amount is ₹500.');
      return;
    }

    if (numAmt > balance) {
      setError(`Amount exceeds your available wallet balance of ₹${balance.toLocaleString('en-IN')}.`);
      return;
    }

    if (method === 'BANK') {
      if (!accountHolder.trim()) {
        setError('Please enter account holder name.');
        return;
      }
      if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 10) {
        setError('Please enter a valid 10-digit registered mobile number.');
        return;
      }
    } else {
      const upiVal = (upiId || mobileNumber).trim();
      if (!upiVal) {
        setError('Please enter a valid UPI ID or PhonePe number.');
        return;
      }
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const now = new Date();
      const txnId = generateTxnId(now);
      const formattedDate = formatDateTime(now);

      const record: WithdrawalRecord = {
        id: txnId,
        amount: numAmt,
        method: method,
        bankName: bankName,
        accountNumber: accountNumber,
        upiId: upiId || `${mobileNumber.replace(/\s+/g, '')}@ybl`,
        accountHolder: accountHolder.trim() || 'Subodh Kumar',
        mobile: mobileNumber.trim() || '98765 43210',
        date: formattedDate,
        timestamp: now.getTime(),
        status: 'Processing',
      };

      // Deduct balance
      const newBal = Math.max(0, balance - numAmt);
      if (typeof window !== 'undefined') {
        localStorage.setItem('futureai_user_wallet', newBal.toString());

        // Update history
        const currentHist: WithdrawalRecord[] = historyList ? [...historyList] : [];
        currentHist.unshift(record);
        localStorage.setItem('futureai_withdrawals_history', JSON.stringify(currentHist));
        setHistoryList(currentHist);

        // Notify app
        window.dispatchEvent(new Event('futureai_wallet_updated'));
        window.dispatchEvent(new Event('storage'));
      }

      // ReferralEngine integration
      try {
        ReferralEngine.requestWithdrawal(numAmt, method === 'BANK' ? 'BANK_TRANSFER' : 'UPI', {
          accountHolder: record.accountHolder,
          accountNumber: record.accountNumber,
          upiId: record.upiId,
        });
      } catch {}

      setBalance(newBal);
      setIsSubmitting(false);
      setSubmittedData(record);

      // Trigger Confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.4 },
          colors: ['#22c55e', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'],
        });
      } catch {}

      onSuccess?.();
    }, 600);
  };

  const bankOptions = [
    { name: 'State Bank of India (SBI)', account: 'XXXX XXXX 1234' },
    { name: 'HDFC Bank', account: 'XXXX XXXX 5678' },
    { name: 'ICICI Bank', account: 'XXXX XXXX 9012' },
    { name: 'Punjab National Bank (PNB)', account: 'XXXX XXXX 3456' },
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      {/* Centered Modal Card */}
      <div className="relative w-full max-w-[460px] bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 shadow-2xl border border-slate-100 text-left transition-all duration-300 my-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer z-20"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* ══════════════════════════════════════════════════
            SCREEN 2: WITHDRAWAL REQUEST SUBMITTED!
           ══════════════════════════════════════════════════ */}
        {submittedData ? (
          <div className="pt-2 pb-1 animate-scaleUp">
            {/* Top Confetti & Green Check Badge */}
            <div className="relative flex justify-center items-center py-2">
              {/* Confetti Decorative Dots */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <span className="absolute top-0 left-12 w-2 h-2 rounded-full bg-rose-400 opacity-80" />
                <span className="absolute top-2 left-24 w-2.5 h-1 rounded-sm bg-purple-500 rotate-45 opacity-80" />
                <span className="absolute top-3 right-16 w-3 h-1 rounded-sm bg-yellow-400 -rotate-12 opacity-80" />
                <span className="absolute top-1 right-28 w-2 h-2 rounded-full bg-emerald-400 opacity-80" />
                <span className="absolute bottom-1 left-16 w-2.5 h-1 rounded-sm bg-blue-500 rotate-12 opacity-80" />
                <span className="absolute bottom-2 right-20 w-2 h-2 rounded-full bg-pink-400 opacity-80" />
              </div>

              {/* Glowing Outer Mint Circle */}
              <div className="w-20 h-20 rounded-full bg-[#dcfce7] flex items-center justify-center shadow-lg shadow-emerald-500/10">
                {/* Inner Emerald Circle */}
                <div className="w-14 h-14 rounded-full bg-[#10b981] flex items-center justify-center text-white shadow-md">
                  <Check className="w-8 h-8 stroke-[3.5]" />
                </div>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center mt-3 mb-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Withdrawal Request Submitted!
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-1.5 max-w-xs mx-auto leading-relaxed">
                Your withdrawal request has been successfully submitted. We will process it within 2-3 business days.
              </p>
            </div>

            {/* Request Details Card */}
            <div className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-4 text-xs space-y-2.5">
              {/* Card Header */}
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm pb-1 border-b border-blue-100/60">
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                </div>
                <span>Request Details</span>
              </div>

              {/* Rows */}
              <div className="flex items-center justify-between text-slate-500 pt-1">
                <span className="font-medium">Withdrawal Amount</span>
                <span className="text-slate-900 font-black text-sm">
                  ₹ {submittedData.amount.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-500">
                <span className="font-medium">Withdrawal Method</span>
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  {submittedData.method === 'BANK' ? (
                    <>
                      <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                        <Building2 className="w-2.5 h-2.5" />
                      </div>
                      <span>Bank Account</span>
                    </>
                  ) : submittedData.method === 'PHONEPE' ? (
                    <>
                      <div className="w-4 h-4 rounded-full bg-[#6739b7] text-white flex items-center justify-center text-[9px] font-black">
                        पे
                      </div>
                      <span>PhonePe</span>
                    </>
                  ) : (
                    <>
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white flex items-center justify-center text-[9px] font-black">
                        ▲
                      </div>
                      <span>Other UPI</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-start justify-between text-slate-500">
                <span className="font-medium">{submittedData.method === 'BANK' ? 'Bank Account' : 'UPI ID'}</span>
                <div className="text-right">
                  <div className="font-bold text-slate-900">
                    {submittedData.method === 'BANK' ? submittedData.bankName : submittedData.upiId}
                  </div>
                  {submittedData.method === 'BANK' && (
                    <div className="text-[11px] text-slate-400 font-mono">{submittedData.accountNumber}</div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-slate-500">
                <span className="font-medium">Account Holder Name</span>
                <span className="font-bold text-slate-900">{submittedData.accountHolder}</span>
              </div>

              <div className="flex items-center justify-between text-slate-500">
                <span className="font-medium">Registered Mobile Number</span>
                <span className="font-bold text-slate-900">{submittedData.mobile}</span>
              </div>

              <div className="flex items-center justify-between text-slate-500">
                <span className="font-medium">Request Date</span>
                <span className="font-bold text-slate-900">{submittedData.date}</span>
              </div>

              <div className="flex items-center justify-between text-slate-500">
                <span className="font-medium">Transaction ID</span>
                <div className="flex items-center gap-1.5 font-mono font-bold text-slate-900">
                  <span>{submittedData.id}</span>
                  <button
                    type="button"
                    onClick={() => handleCopyTransactionId(submittedData.id)}
                    className="p-1 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                    title={copiedTxn ? 'Copied!' : 'Copy Transaction ID'}
                  >
                    {copiedTxn ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-slate-500 pt-1 border-t border-blue-100/60">
                <span className="font-medium">Status</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fffbeb] border border-[#fef3c7] text-[#d97706] font-bold text-xs">
                  <Clock className="w-3 h-3 stroke-[2.5]" />
                  <span>Processing</span>
                </span>
              </div>
            </div>

            {/* Stepper Progress */}
            <div className="mt-5 px-1">
              <div className="flex items-center justify-between relative">
                {/* Step 1: Request Submitted */}
                <div className="flex flex-col items-center text-center z-10 w-24">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-900 mt-1.5 leading-tight">
                    Request<br />Submitted
                  </span>
                  <span className="text-[9px] text-slate-400 mt-0.5 leading-tight">
                    {submittedData.date.split(',')[0]}<br />
                    {submittedData.date.split(',')[1]?.trim()}
                  </span>
                </div>

                {/* Connector Line 1 */}
                <div className="flex-1 h-[2px] border-t-2 border-dashed border-slate-300 mx-1 -mt-7" />

                {/* Step 2: Processing */}
                <div className="flex flex-col items-center text-center z-10 w-28">
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">
                    <Clock className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 mt-1.5 leading-tight">
                    Processing
                  </span>
                  <span className="text-[9px] text-slate-400 mt-0.5 leading-tight">
                    (2-3 Business Days)
                  </span>
                </div>

                {/* Connector Line 2 */}
                <div className="flex-1 h-[2px] border-t-2 border-dashed border-slate-300 mx-1 -mt-7" />

                {/* Step 3: Amount Transferred */}
                <div className="flex flex-col items-center text-center z-10 w-24">
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 mt-1.5 leading-tight">
                    Amount<br />Transferred
                  </span>
                </div>
              </div>
            </div>

            {/* OK, Got it Button */}
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0066ff] to-[#4f46e5] hover:from-[#0055d4] hover:to-[#4338ca] text-white font-black text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all cursor-pointer active:scale-98"
            >
              OK, Got it
            </button>
          </div>
        ) : showHistory ? (
          /* ══════════════════════════════════════════════════
              TRANSACTION HISTORY VIEW
             ══════════════════════════════════════════════════ */
          <div className="animate-fadeIn">
            <div className="flex items-center gap-2 mb-4">
              <button
                type="button"
                onClick={() => setShowHistory(false)}
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer"
              >
                ←
              </button>
              <div>
                <h3 className="text-lg font-black text-slate-900 leading-tight">
                  Transaction History
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Past withdrawal requests and status
                </p>
              </div>
            </div>

            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {historyList.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <History className="w-10 h-10 mx-auto text-slate-300 mb-2 stroke-[1.5]" />
                  <p className="text-xs font-semibold">No withdrawal requests yet</p>
                  <p className="text-[11px] mt-0.5">Your past requests will appear here</p>
                </div>
              ) : (
                historyList.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-slate-400">{item.id}</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200">
                        <Clock className="w-2.5 h-2.5" /> {item.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800 text-sm">
                        ₹ {item.amount.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-slate-500">{item.date}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      To: <strong>{item.method === 'BANK' ? item.bankName : item.upiId}</strong> ({item.accountHolder})
                    </div>
                  </div>
                ))
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowHistory(false)}
              className="mt-4 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              Back to Withdraw Request
            </button>
          </div>
        ) : (
          /* ══════════════════════════════════════════════════
              SCREEN 1: WITHDRAW REQUEST FORM
             ══════════════════════════════════════════════════ */
          <div>
            {/* Header: 3D Blue Wallet Icon + Title */}
            <div className="flex items-start gap-3 mb-4 pr-7">
              <div className="relative w-12 h-12 shrink-0">
                {/* 3D Wallet SVG Graphic Matching Mockup */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0088ff] to-[#0055d4] p-2 flex items-center justify-center shadow-lg shadow-blue-500/30 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-full blur-xs" />
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-base font-black leading-none">₹</span>
                    <div className="w-4 h-1.5 bg-yellow-400 rounded-sm mt-0.5 shadow-xs" />
                  </div>
                  {/* Gold Coins Peeking */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-300 border border-white/60 shadow-xs flex items-center justify-center text-[9px] font-black text-amber-900">
                    ₹
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-black text-slate-900 leading-tight">
                  Withdraw Request
                </h2>
                <p className="text-[12px] text-slate-500 font-medium leading-snug mt-0.5">
                  Request to withdraw your available earnings to your bank account, UPI or wallet.
                </p>
              </div>
            </div>

            {/* Available Balance Box */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#f0f6ff] border border-blue-100/80 mb-4">
              <div className="flex items-center justify-between text-xs mb-1">
                <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                  <span>Available Balance</span>
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <button
                  type="button"
                  onClick={() => setShowHistory(true)}
                  className="text-blue-600 hover:text-blue-700 font-bold text-xs flex items-center gap-0.5 hover:underline cursor-pointer"
                >
                  <span>View Transaction History</span>
                  <span className="text-[11px]">&gt;</span>
                </button>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                ₹ {balance.toLocaleString('en-IN')}
              </div>
            </div>

            {/* Withdraw Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Withdrawal Amount Input */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Withdrawal Amount
                </label>
                <div className="relative flex items-center border border-slate-200 rounded-xl bg-white px-3 py-2.5 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-2xs">
                  <span className="text-sm font-bold text-slate-400 mr-2">₹</span>
                  <input
                    type="number"
                    min="500"
                    max={balance > 0 ? balance : undefined}
                    placeholder="Enter amount to withdraw"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none bg-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleAllClick}
                    className="text-xs font-black text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-2 py-0.5 rounded cursor-pointer transition-colors shrink-0"
                  >
                    All
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 font-medium mt-1">
                  Minimum withdrawal amount is ₹500
                </p>
              </div>

              {/* Select Withdrawal Method */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1.5">
                  Select Withdrawal Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {/* Bank Account */}
                  <button
                    type="button"
                    onClick={() => setMethod('BANK')}
                    className={`py-2 px-2 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                      method === 'BANK'
                        ? 'border-2 border-blue-600 bg-blue-50/20 text-slate-900 shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Building2 className={`w-3.5 h-3.5 ${method === 'BANK' ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="truncate">Bank Account</span>
                  </button>

                  {/* PhonePe */}
                  <button
                    type="button"
                    onClick={() => setMethod('PHONEPE')}
                    className={`py-2 px-2 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                      method === 'PHONEPE'
                        ? 'border-2 border-blue-600 bg-blue-50/20 text-slate-900 shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-[#6739b7] text-white flex items-center justify-center text-[9px] font-black">
                      पे
                    </div>
                    <span className="truncate">PhonePe</span>
                  </button>

                  {/* Other UPI */}
                  <button
                    type="button"
                    onClick={() => setMethod('UPI')}
                    className={`py-2 px-2 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                      method === 'UPI'
                        ? 'border-2 border-blue-600 bg-blue-50/20 text-slate-900 shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-3.5 h-3.5 flex items-center justify-center text-[10px]">
                      🔺
                    </div>
                    <span className="truncate">Other UPI</span>
                  </button>
                </div>
              </div>

              {/* Bank Details / Method Input */}
              {method === 'BANK' ? (
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Bank Details
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsBankDropdownOpen(!isBankDropdownOpen)}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 text-left cursor-pointer transition-all shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{bankName}</div>
                          <div className="text-[11px] text-slate-400 font-mono">{accountNumber}</div>
                        </div>
                      </div>
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    </button>

                    {/* Bank Selection Dropdown */}
                    {isBankDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-30 p-1.5 space-y-1">
                        {bankOptions.map((opt) => (
                          <button
                            key={opt.name}
                            type="button"
                            onClick={() => {
                              setBankName(opt.name);
                              setAccountNumber(opt.account);
                              setIsBankDropdownOpen(false);
                            }}
                            className="w-full p-2 text-left rounded-lg hover:bg-blue-50 flex items-center justify-between text-xs cursor-pointer"
                          >
                            <div>
                              <div className="font-bold text-slate-800">{opt.name}</div>
                              <div className="text-[10px] text-slate-400 font-mono">{opt.account}</div>
                            </div>
                            {bankName === opt.name && (
                              <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    {method === 'PHONEPE' ? 'PhonePe Mobile Number / UPI ID' : 'UPI ID (VPA)'}
                  </label>
                  <div className="relative flex items-center border border-slate-200 rounded-xl bg-white px-3 py-2.5 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-2xs">
                    <span className="text-xs font-black text-slate-400 mr-2">@</span>
                    <input
                      type="text"
                      placeholder={method === 'PHONEPE' ? 'e.g. 9876543210@ybl' : 'e.g. yourname@okhdfcbank'}
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Account Holder Name */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Account Holder Name
                </label>
                <div className="relative flex items-center border border-slate-200 rounded-xl bg-white px-3 py-2.5 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-2xs">
                  <User className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter account holder name (as per bank)"
                    value={accountHolder}
                    onChange={(e) => setAccountHolder(e.target.value)}
                    className="w-full text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Registered Mobile Number */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Registered Mobile Number
                </label>
                <div className="relative flex items-center border border-slate-200 rounded-xl bg-white px-3 py-2.5 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-2xs">
                  <Phone className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                  <input
                    type="tel"
                    placeholder="Enter 10 digit mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Green Assurance Banner */}
              <div className="p-3 rounded-xl bg-[#eefbf4] border border-[#d1fae5] flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <p className="text-[11px] sm:text-xs text-[#065f46] font-medium leading-snug">
                  Amount will be transferred to your registered bank account within 2-3 business days.
                </p>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 font-semibold">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Withdrawal Request Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0066ff] to-[#4f46e5] hover:from-[#0055d4] hover:to-[#4338ca] text-white font-black text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all cursor-pointer active:scale-98 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <span>Submit Withdrawal Request</span>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default WalletWithdrawModal;
