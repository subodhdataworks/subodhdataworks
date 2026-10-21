import React, { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, Loader2, ArrowRight, Home } from 'lucide-react';

type PaymentStatus = 'success' | 'failure' | 'pending' | null;

interface PaymentResultModalProps {
  onGoHome: () => void;
}

/**
 * Handles PayU redirect back to our app after payment.
 * PayU redirects to:
 *   Success: /#payment-success?txnid=...&status=success&amount=...
 *   Failure: /#payment-failure?txnid=...&status=failure
 */
export const PaymentResultModal: React.FC<PaymentResultModalProps> = ({ onGoHome }) => {
  const [status, setStatus] = useState<PaymentStatus>(null);
  const [txnId, setTxnId] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  useEffect(() => {
    const hash = window.location.hash || '';
    const searchStr = (hash.split('?')[1] || '') || (window.location.search ? window.location.search.replace(/^\?/, '') : '');
    const params = new URLSearchParams(searchStr);

    if (hash.includes('payment-success') || params.get('status') === 'TXN_SUCCESS' || params.get('status') === 'success') {
      setStatus('success');
      const resolvedTxn = params.get('txnid') || params.get('txnId') || params.get('TXNID') || params.get('mihpayid') || params.get('orderId') || params.get('ORDERID') || '';
      const resolvedAmt = params.get('amount') || params.get('TXNAMOUNT') || '987';
      setTxnId(resolvedTxn);
      setAmount(resolvedAmt);
      try {
        localStorage.setItem('futureai_student_enrolled', 'true');
      } catch (e) {}
      setTimeout(() => { window.history.replaceState(null, '', window.location.pathname); }, 2500);
    } else if (hash.includes('payment-failure') || hash.includes('payment-failed') || params.get('status') === 'TXN_FAILURE' || params.get('status') === 'failure') {
      setStatus('failure');
      const resolvedTxn = params.get('txnid') || params.get('txnId') || params.get('TXNID') || params.get('orderId') || params.get('ORDERID') || '';
      setTxnId(resolvedTxn);
    }
  }, []);

  if (!status) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
      <div className="max-w-sm w-full bg-white rounded-3xl p-8 shadow-2xl text-center">
        {status === 'success' ? (
          <>
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-1">Payment Successful! 🎉</h2>
            <p className="text-sm font-semibold text-slate-600 mb-4">
              Congratulations! Your enrollment is confirmed. All modules are now unlocked.
            </p>
            {txnId && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 mb-4 text-xs font-bold text-emerald-700">
                Transaction ID: {txnId}
                {amount && <span className="block text-emerald-600 mt-0.5">Amount Paid: ₹{parseFloat(amount).toLocaleString('en-IN')}</span>}
              </div>
            )}
            <p className="text-xs text-slate-500 mb-6">
              A confirmation email has been sent. Welcome to FUTURE IT INDUSTRY! 🚀
            </p>
            <button
              onClick={() => { onGoHome(); setStatus(null); }}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold rounded-xl flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" /> Start Learning Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-1">Payment Failed</h2>
            <p className="text-sm font-semibold text-slate-600 mb-4">
              Koi baat nahi! Payment process nahi ho paya. Dobara try karo.
            </p>
            {txnId && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 mb-4 text-xs font-bold text-red-700">
                Reference: {txnId}
              </div>
            )}
            <div className="space-y-2">
              <button
                onClick={() => setStatus(null)}
                className="w-full py-3 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-extrabold rounded-xl flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-4 h-4" /> Try Again
              </button>
              <button
                onClick={() => { onGoHome(); setStatus(null); }}
                className="w-full py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl text-sm"
              >
                Go to Home
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
