import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Lock,
  Unlock,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Zap,
  GraduationCap,
  Briefcase,
  Bot,
  Award,
  CreditCard,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import { startRazorpayCheckout, getCurrentUserForPayment } from '../../services/razorpayService';

interface PayToUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetModuleName?: string;
  onSimulateUnlock?: () => void;
  courseId?: string;
  courseTitle?: string;
  price?: number;
}

export const PayToUnlockModal: React.FC<PayToUnlockModalProps> = ({
  isOpen,
  onClose,
  targetModuleName = 'SQL & Databases',
  onSimulateUnlock,
  courseId = 'data-analyst-genai',
  courseTitle,
  price = 987,
}) => {
  const { playClick } = useThemeAccent();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);

  const displayTitle = courseTitle || targetModuleName;

  if (!isOpen) return null;

  const handleRazorpayPayment = async () => {
    playClick();
    setError(null);

    // Get user details
    const user = getCurrentUserForPayment();

    if (!user.isLoggedIn) {
      setError('Please login first to proceed with payment.');
      return;
    }

    setIsLoading(true);
    try {
      const result = await startRazorpayCheckout({
        amount: price,
        courseId,
        courseTitle: displayTitle,
        name: user.name,
        email: user.email,
        phone: phone.length === 10 ? phone : user.phone || undefined,
      });

      try {
        localStorage.setItem('futureai_student_enrolled', 'true');
        localStorage.setItem('futureai_payment_order_id', result.orderId);
        localStorage.setItem('futureai_payment_txn_id', result.paymentId);
      } catch {
        // ignore storage errors
      }

      onSimulateUnlock?.();
      onClose();
      // Show success modal (handled by PaymentResultModal)
      window.location.hash = `payment-success?txnid=${encodeURIComponent(result.paymentId)}&amount=${result.amount}`;
      window.location.reload();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Payment failed. Please try again.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
      <div
        className="max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-100 relative overflow-y-auto max-h-[90vh] text-left"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#c4b5fd #f5f3ff' }}
      >
        {/* Glow decoration */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Urgency Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-black tracking-wide border border-amber-200">
            <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>SUPER 30 BATCH • ONLY 30 SEATS</span>
          </span>
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Pay After Placement
          </span>
        </div>

        {/* Main Title & Locked Target */}
        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-2 text-sky-600 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selected Program: {displayTitle}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            Single Enrollment for <span className="text-sky-600">₹{price.toLocaleString('en-IN')}</span>
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Ek hi payment me <strong className="text-slate-900 font-extrabold">All 10 Modules Unlock</strong> honge! Complete Lifetime Access +{' '}
            <span className="text-emerald-600 font-bold">100% Placement Support with 700+ Hiring Partners!</span>
          </p>
        </div>

        {/* Clear Reassurance Pill */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 mb-4 flex items-center gap-2 text-xs font-bold text-emerald-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>No per-module fees! Single ₹{price.toLocaleString('en-IN')} unlocks entire course + all 10 modules + AI mentorship.</span>
        </div>

        {/* What You Get Grid */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2.5 mb-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            What You Unlock with Single ₹{price.toLocaleString('en-IN')} Enrollment:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>Unlock all 10 Modules (SQL, Excel, Power BI, GenAI, Capstone)</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>24/7 AI Mentor & 1-on-1 Doubt Solving</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>15+ Industry Real-World Projects on GitHub</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>700+ Hiring Partners Placement Assistance</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>IBM & Microsoft Course Certifications</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>AI Mock Interviews & Resume Optimization</span>
            </div>
          </div>
        </div>

        {/* ── SQL Course Content Preview (shown when SQL is the target) ── */}
        {targetModuleName?.toLowerCase().includes('sql') && (
          <div className="mb-4 border border-violet-200 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2.5 flex items-center gap-2">
              <span className="text-xs font-black text-white uppercase tracking-wider">Course Content</span>
            </div>
            <div className="bg-violet-50/60 px-4 py-2.5 border-b border-violet-200 flex items-center gap-2">
              <span className="text-[11px] font-black text-violet-700 uppercase tracking-wider bg-violet-100 px-2 py-0.5 rounded-md border border-violet-200">Chapter: 01</span>
              <span className="text-xs font-bold text-slate-700 ml-1">Introduction to SQL</span>
            </div>
            <ul className="divide-y divide-violet-100">
              {[
                '1.1 Basic Concepts of SQL',
                '1.2 Introduction to Databases',
                '1.3 SQL Syntax and Queries',
                '1.4 Data Manipulation Language (DML)',
                '1.5 Data Definition Language (DDL)',
                '1.6 Data Control Language (DCL)',
                '1.7 Transaction Management',
                '1.8 Joins and Subqueries',
                '1.9 Indexes and Performance Tuning',
              ].map((lesson, i) => (
                <li key={i} className="flex items-center gap-3 px-4 py-2 bg-white hover:bg-violet-50/40 transition-colors">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-black flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <Lock className="w-3 h-3 text-violet-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Optional Phone Number Input */}
        {showPhoneInput && (
          <div className="mb-4">
            <label className="text-xs font-bold text-slate-600 mb-1 block">Mobile Number (for OTP & receipt)</label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="10-digit mobile number"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Price Breakdown Summary */}
        <div className="flex items-center justify-between p-3.5 bg-gradient-to-r from-sky-50 to-teal-50 border border-sky-100 rounded-xl mb-6">
          <div>
            <span className="text-[11px] font-semibold text-slate-500 block">Enrollment Payment</span>
            <div className="flex items-baseline gap-1.5">
              <strong className="text-2xl font-black text-sky-900">₹{price.toLocaleString('en-IN')}</strong>
              <span className="text-xs text-slate-400 line-through">₹25,000</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-semibold text-emerald-600 block">100% Full Access</span>
            <strong className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
              Zero Hidden Charges
            </strong>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2.5">
          {/* Main Razorpay Button */}
          <button
            onClick={handleRazorpayPayment}
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-teal-500 to-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-sky-500/25 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Opening Secure Payment...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                <span>Pay ₹{price.toLocaleString('en-IN')} — UPI / Cards / NetBanking</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Add phone toggle */}
          {!showPhoneInput && (
            <button
              type="button"
              onClick={() => setShowPhoneInput(true)}
              className="w-full text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors py-1"
            >
              + Add mobile number for OTP verification
            </button>
          )}

          {/* Quick Demo Simulator for Instant Testing */}
          <button
            type="button"
            onClick={() => {
              playClick();
              onSimulateUnlock?.();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Unlock className="w-3.5 h-3.5 text-emerald-600" />
            <span>⚡ Demo Simulator: Unlock All 10 Modules (Test)</span>
          </button>
        </div>

        {/* Payment badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>256-bit SSL Secure</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <CreditCard className="w-3.5 h-3.5 text-sky-500" />
            <span>UPI • Cards • NetBanking • Wallets</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Powered by Razorpay</span>
          </div>
        </div>

        <p className="text-center text-[10px] text-slate-400 mt-2">
          Official FUTURE IT INDUSTRY Guarantee • Instant Course Access after Payment
        </p>
      </div>
    </div>
  );
};
