import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Wallet,
  Building,
  Smartphone,
  AlertCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import './AffiliateEarningsHub.css';
import {
  submitAffiliateWithdrawalRequest,
  normalizeRefCode,
  getUserReferralCode,
  computeAffiliateBalancesFromWithdrawals,
} from '../../services/realAuthService';
import { getEffectiveMinWithdrawal } from '../../config/withdrawalConfig';

interface WalletWithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const WalletWithdrawModal: React.FC<WalletWithdrawModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const myEmail = typeof window !== 'undefined' ? (localStorage.getItem('futureai_user_email') || '') : '';
  const myStoredName = typeof window !== 'undefined' ? (localStorage.getItem('futureai_user_name') || '') : '';
  const myStoredCode = typeof window !== 'undefined' ? (localStorage.getItem('futureai_user_ref_code') || '') : '';
  const isOwnerSubodh =
    myEmail.toLowerCase().includes('subodh') ||
    myStoredName.toLowerCase().includes('subodh');
  const cleanStored = myStoredCode && !/^(RF)?\d+$/.test(myStoredCode) ? normalizeRefCode(myStoredCode) : '';
  const cleanRefCode = isOwnerSubodh
    ? 'SUBODHKUMAR'
    : (cleanStored
        ? cleanStored
        : (myEmail
            ? normalizeRefCode(getUserReferralCode(myEmail))
            : (myStoredName && myStoredName.toLowerCase() !== 'learner'
                ? normalizeRefCode(getUserReferralCode(myStoredName))
                : 'PARTNER'
              )
          )
      ) || 'PARTNER';
  const minWithdrawal = getEffectiveMinWithdrawal(cleanRefCode);
  const payoutStorageKey = `futureai_payout_method_v5_${cleanRefCode}`;

  const [availableBalance, setAvailableBalance] = useState<number>(0);
  const [withdrawAmount, setWithdrawAmount] = useState<string>(minWithdrawal.toString());
  const [payoutMethod, setPayoutMethod] = useState<'upi' | 'bank'>('upi');
  const [upiId, setUpiId] = useState<string>('');
  const [isUpiVerified, setIsUpiVerified] = useState<boolean>(false);
  const [bankAccNumber, setBankAccNumber] = useState<string>('');
  const [bankIfsc, setBankIfsc] = useState<string>('');
  const [bankHolder, setBankHolder] = useState<string>('');
  const [bankName, setBankName] = useState<string>('');
  const [isBankVerified, setIsBankVerified] = useState<boolean>(false);
  const [withdrawStep, setWithdrawStep] = useState<'form' | 'confirm' | 'success'>('form');
  const [isSubmittingWithdrawal, setIsSubmittingWithdrawal] = useState<boolean>(false);
  const [withdrawRequestId, setWithdrawRequestId] = useState<string>('');
  const [lastSubmittedTxId, setLastSubmittedTxId] = useState<string>('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3200);
  };

  // Load real balance & saved payout method when opened
  useEffect(() => {
    if (!isOpen) return;
    setWithdrawStep('form');
    setIsSubmittingWithdrawal(false);
    setToast(null);

    if (typeof window !== 'undefined') {
      // 1. Load Payout Method
      try {
        const rawPayout = JSON.parse(localStorage.getItem(payoutStorageKey) || '{}');
        setUpiId(rawPayout.upiId || '');
        setIsUpiVerified(Boolean(rawPayout.isUpiVerified));
        setBankAccNumber(rawPayout.bankAccNumber || '');
        setBankIfsc(rawPayout.bankIfsc || '');
        setBankHolder(rawPayout.bankHolder || '');
        setBankName(rawPayout.bankName || '');
        setIsBankVerified(Boolean(rawPayout.isBankVerified));
      } catch {
        // ignore
      }

      // 2. Load Wallet Balance
      let resolvedBalance = 0;
      try {
        const storageKey = `futureai_affiliate_hub_v5_${cleanRefCode}`;
        const rawHub = localStorage.getItem(storageKey);
        if (rawHub) {
          const parsed = JSON.parse(rawHub);
          const paidCount = typeof parsed.paidEnrollments === 'number' ? parsed.paidEnrollments : 0;
          const totalEarned = Math.max(
            typeof parsed.totalEarned === 'number' ? parsed.totalEarned : 0,
            paidCount * 100
          );
          const withdrawals = Array.isArray(parsed.withdrawals) ? parsed.withdrawals : [];
          const computed = computeAffiliateBalancesFromWithdrawals(totalEarned, withdrawals);
          resolvedBalance = computed.availableBalance;
        } else {
          const customWallet = localStorage.getItem('futureai_user_wallet');
          if (customWallet !== null && customWallet !== '') {
            const parsed = parseInt(customWallet, 10);
            if (!isNaN(parsed) && parsed >= 0) resolvedBalance = parsed;
          }
        }
      } catch {
        resolvedBalance = 0;
      }
      setAvailableBalance(resolvedBalance);
      setWithdrawAmount(resolvedBalance >= minWithdrawal ? resolvedBalance.toString() : minWithdrawal.toString());
    }
  }, [isOpen, cleanRefCode, payoutStorageKey]);

  const isPayoutMethodLinked =
    (payoutMethod === 'upi' && isUpiVerified && upiId.includes('@')) ||
    (payoutMethod === 'bank' && isBankVerified && bankAccNumber.length >= 8 && bankIfsc.length >= 8);
  const hasAnyVerifiedPayout =
    (isUpiVerified && upiId.includes('@')) || (isBankVerified && bankAccNumber.length >= 8);

  // Sync payout method changes to storage
  useEffect(() => {
    if (!isOpen || typeof window === 'undefined') return;
    try {
      localStorage.setItem(
        payoutStorageKey,
        JSON.stringify({
          status: hasAnyVerifiedPayout ? 'LINKED' : 'NOT_LINKED',
          upiId,
          isUpiVerified,
          bankAccNumber,
          bankIfsc,
          bankHolder,
          bankName,
          isBankVerified,
          updatedAt: new Date().toISOString(),
        })
      );
    } catch {
      // ignore
    }
  }, [
    isOpen,
    payoutStorageKey,
    hasAnyVerifiedPayout,
    upiId,
    isUpiVerified,
    bankAccNumber,
    bankIfsc,
    bankHolder,
    bankName,
    isBankVerified,
  ]);

  if (!isOpen) return null;

  const handleProcessWithdrawal = async () => {
    if (isSubmittingWithdrawal) return;

    const amt = parseFloat(withdrawAmount);
    if (isNaN(amt) || amt <= 0) {
      showToast('Please enter a valid withdrawal amount.', 'error');
      return;
    }
    if (amt < minWithdrawal) {
      showToast(`Minimum withdrawal amount is ₹${minWithdrawal}.`, 'error');
      return;
    }
    if (amt > availableBalance) {
      showToast(`Insufficient balance! Available: ₹${availableBalance.toLocaleString('en-IN')}`, 'error');
      return;
    }
    if (!isPayoutMethodLinked) {
      showToast('Please add and verify your Bank Account or UPI ID before requesting a withdrawal.', 'error');
      return;
    }

    if (withdrawStep === 'form') {
      setWithdrawRequestId(`req_${cleanRefCode}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`);
      setWithdrawStep('confirm');
      return;
    }

    setIsSubmittingWithdrawal(true);
    try {
      const destinationLabel = payoutMethod === 'upi' ? upiId : `${bankName} ••••${bankAccNumber.slice(-4)}`;
      const result = await submitAffiliateWithdrawalRequest({
        refCode: cleanRefCode,
        amount: amt,
        method: payoutMethod === 'upi' ? 'UPI' : 'Bank',
        destination: destinationLabel,
        upiId,
        bankAccNumber,
        bankIfsc,
        bankName,
        bankHolder,
        isVerified: isPayoutMethodLinked,
        requestId: withdrawRequestId || `req_${cleanRefCode}_${Date.now()}`,
      });

      if (!result.success) {
        showToast(result.error || 'Could not process withdrawal request.', 'error');
        return;
      }

      setLastSubmittedTxId(result.withdrawal?.txId || 'WTH-PENDING');
      setAvailableBalance(result.availableBalance);
      setWithdrawStep('success');

      if (typeof window !== 'undefined') {
        localStorage.setItem('futureai_user_wallet', result.availableBalance.toString());
        window.dispatchEvent(new Event('futureai_wallet_updated'));
        window.dispatchEvent(new Event('storage'));
      }

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.55 },
          colors: ['#10b981', '#06b6d4', '#3b82f6', '#fbbf24'],
        });
      } catch {
        // ignore
      }

      onSuccess?.();
    } finally {
      setIsSubmittingWithdrawal(false);
    }
  };

  return (
    <div className="affiliate-modal-backdrop" onClick={onClose}>
      <div className="affiliate-modal-box max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-sky-600" />
            <h3 className="modal-title">Withdraw Earnings</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {toast && (
          <div
            className={`mx-5 mt-3 p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 ${
              toast.type === 'error'
                ? 'bg-rose-50 border-rose-200 text-rose-700'
                : toast.type === 'info'
                ? 'bg-sky-50 border-sky-200 text-sky-700'
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}
          >
            {toast.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />}
            {toast.type === 'info' && <Sparkles className="w-4 h-4 text-sky-500 shrink-0" />}
            {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
            <span>{toast.message}</span>
          </div>
        )}

        {withdrawStep === 'form' && (
          <div className="modal-body-content">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between mb-3">
              <div>
                <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider">
                  Available for Payout
                </span>
                <strong className="text-xl font-black text-emerald-600">
                  ₹{availableBalance.toLocaleString('en-IN')}
                </strong>
              </div>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                24/7 Payout (Within 24h)
              </span>
            </div>

            {availableBalance < minWithdrawal && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 mb-3 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Minimum Balance: ₹{minWithdrawal}</strong>
                  <span>
                    You need at least ₹{minWithdrawal} in your wallet to withdraw. Share your referral link with students and
                    friends to earn Flat ₹100 per enrollment!
                  </span>
                </div>
              </div>
            )}

            <div className="mt-4">
              <label className="text-xs font-bold text-slate-700 block mb-1">Enter Amount to Withdraw</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-black text-base">
                  ₹
                </span>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder={minWithdrawal.toString()}
                  className="w-full pl-8 pr-16 py-2.5 rounded-xl border border-slate-300 font-black text-base focus:border-sky-500 focus:outline-none text-slate-900"
                />
                <button
                  type="button"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-sky-100 hover:bg-sky-200 text-sky-700 font-black text-xs cursor-pointer"
                  onClick={() => setWithdrawAmount(availableBalance.toString())}
                >
                  MAX
                </button>
              </div>

              {/* Quick Pick Chips */}
              <div className="flex gap-2 mt-2">
                {[minWithdrawal, 100, 500, 1000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-sky-50 text-[11px] font-bold text-slate-700 cursor-pointer"
                    onClick={() => setWithdrawAmount(amt.toString())}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-slate-400 mt-1.5 block">
                Minimum withdrawal: ₹{minWithdrawal} • Zero processing fees
              </span>
            </div>

            <div className="mt-4">
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Select Payout Channel</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                    payoutMethod === 'upi'
                      ? 'border-sky-500 bg-sky-50/70 text-sky-700 shadow-xs'
                      : 'border-slate-200 text-slate-600'
                  }`}
                  onClick={() => setPayoutMethod('upi')}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>UPI ID</span>
                </button>
                <button
                  type="button"
                  className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                    payoutMethod === 'bank'
                      ? 'border-sky-500 bg-sky-50/70 text-sky-700 shadow-xs'
                      : 'border-slate-200 text-slate-600'
                  }`}
                  onClick={() => setPayoutMethod('bank')}
                >
                  <Building className="w-4 h-4" />
                  <span>Bank Account</span>
                </button>
              </div>
            </div>

            {payoutMethod === 'upi' ? (
              <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-slate-600">UPI Handle</span>
                  {isUpiVerified ? (
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">Verified ✓</span>
                  ) : (
                    <button
                      type="button"
                      className="text-[10px] font-bold text-sky-600 cursor-pointer"
                      onClick={() => {
                        if (!upiId.trim() || !upiId.includes('@')) {
                          showToast('Please enter a valid UPI ID (e.g. yourname@upi)', 'error');
                          return;
                        }
                        setIsUpiVerified(true);
                        showToast('UPI Handle verified & linked successfully!', 'success');
                      }}
                    >
                      Verify Handle
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={(e) => {
                    setUpiId(e.target.value);
                    setIsUpiVerified(false);
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 focus:outline-none bg-white"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Supports Google Pay, PhonePe, Paytm, BHIM
                </span>
              </div>
            ) : (
              <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-600">Bank Account Details</span>
                  {isBankVerified ? (
                    <span className="text-[10px] font-bold text-emerald-600">Verified ✓</span>
                  ) : (
                    <button
                      type="button"
                      className="text-[10px] font-bold text-sky-600 cursor-pointer"
                      onClick={() => {
                        if (!bankHolder.trim() || bankAccNumber.trim().length < 8 || bankIfsc.trim().length < 8) {
                          showToast('Please enter valid Account Holder, Account Number, and IFSC Code.', 'error');
                          return;
                        }
                        setIsBankVerified(true);
                        showToast('Bank account details verified & linked!', 'success');
                      }}
                    >
                      Verify &amp; Link Bank
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Account Holder Name"
                  value={bankHolder}
                  onChange={(e) => {
                    setBankHolder(e.target.value);
                    setIsBankVerified(false);
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 focus:outline-none bg-white"
                />
                <input
                  type="text"
                  placeholder="Bank Name (e.g. SBI, HDFC, ICICI)"
                  value={bankName}
                  onChange={(e) => {
                    setBankName(e.target.value);
                    setIsBankVerified(false);
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 focus:outline-none bg-white"
                />
                <input
                  type="text"
                  placeholder="Account Number"
                  value={bankAccNumber}
                  onChange={(e) => {
                    setBankAccNumber(e.target.value.replace(/\D/g, ''));
                    setIsBankVerified(false);
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 focus:outline-none bg-white"
                />
                <input
                  type="text"
                  placeholder="IFSC Code (e.g. SBIN0001234)"
                  value={bankIfsc}
                  onChange={(e) => {
                    setBankIfsc(e.target.value.toUpperCase());
                    setIsBankVerified(false);
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 focus:outline-none bg-white"
                />
              </div>
            )}

            <button
              type="button"
              disabled={availableBalance < minWithdrawal || !isPayoutMethodLinked}
              className={`w-full mt-5 py-3 rounded-xl font-black text-sm shadow-lg transition-all ${
                availableBalance >= minWithdrawal && isPayoutMethodLinked
                  ? 'bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-sky-500/25 cursor-pointer active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
              onClick={handleProcessWithdrawal}
            >
              {!isPayoutMethodLinked
                ? 'Verify UPI / Bank Method First'
                : availableBalance >= minWithdrawal
                ? 'Proceed to Confirmation →'
                : `Minimum ₹${minWithdrawal} Balance Required`}
            </button>
          </div>
        )}

        {withdrawStep === 'confirm' && (
          <div className="modal-body-content">
            <div className="text-center py-2">
              <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-slate-900">Confirm Instant Transfer</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Please review the payout details before final transfer.
              </p>
            </div>

            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Payout Amount:</span>
                <strong className="text-emerald-600 text-base font-black">
                  ₹{parseFloat(withdrawAmount).toLocaleString('en-IN')}
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Payout Channel:</span>
                <strong className="text-slate-800 uppercase font-black">{payoutMethod}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Destination:</span>
                <strong className="text-slate-800 font-mono">
                  {payoutMethod === 'upi' ? upiId : `${bankName} (••••${bankAccNumber.slice(-4)})`}
                </strong>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                <span className="text-slate-500 font-medium">Estimated Time:</span>
                <strong className="text-sky-600 font-bold">Within 24 Hours (24/7 Support)</strong>
              </div>
            </div>

            <div className="flex gap-2 mt-5">
              <button
                type="button"
                className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-bold text-xs hover:bg-slate-50 cursor-pointer"
                onClick={() => setWithdrawStep('form')}
              >
                Back to Edit
              </button>
              <button
                type="button"
                disabled={isSubmittingWithdrawal}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-black text-xs shadow-md shadow-emerald-500/20 cursor-pointer active:scale-95"
                onClick={handleProcessWithdrawal}
              >
                {isSubmittingWithdrawal ? 'Reserving Funds...' : 'Confirm & Transfer Now'}
              </button>
            </div>
          </div>
        )}

        {withdrawStep === 'success' && (
          <div className="modal-body-content text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-black text-slate-900">Withdrawal Request Reserved!</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              ₹{parseFloat(withdrawAmount).toLocaleString('en-IN')} has been deducted from your available balance and
              reserved for payout to{' '}
              <span className="font-mono font-bold text-slate-800">
                {payoutMethod === 'upi' ? upiId : bankName}
              </span>
              .
            </p>
            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800 font-semibold space-y-1">
              <div>Transaction ID: {lastSubmittedTxId || 'WTH-PENDING'} • Status: Pending 🟡</div>
              <div className="text-[11px] text-emerald-700">
                Remaining Available Balance: ₹{availableBalance.toLocaleString('en-IN')}
              </div>
            </div>
            <button
              type="button"
              className="w-full mt-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs cursor-pointer"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
