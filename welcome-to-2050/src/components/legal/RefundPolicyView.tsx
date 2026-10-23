import React from 'react';
import { ArrowLeft, RotateCcw, Clock } from 'lucide-react';
import { FutureLogo } from '../futureai/FutureLogo';

interface RefundPolicyViewProps {
  onBack?: () => void;
}

const POINTS: { title: string; text: React.ReactNode }[] = [
  {
    title: 'Cancellation',
    text: 'Customers may request cancellation before the order is processed or the service is initiated.',
  },
  {
    title: 'Refund Eligibility',
    text: 'Refunds may be provided for duplicate payments, failed transactions, or eligible cancellations, subject to verification.',
  },
  {
    title: 'Non-Refundable Services',
    text: 'Services that have been fully delivered or initiated may not be eligible for refunds, except where required by applicable law.',
  },
  {
    title: 'Refund Processing',
    text: (
      <>
        Approved refunds will be initiated within <strong>7–10 business days</strong>. The time taken for the amount to reflect depends on the bank or payment provider.
      </>
    ),
  },
  {
    title: 'Refund Requests',
    text: 'Customers must contact us with their order or transaction details to request a refund.',
  },
  {
    title: 'Failed Transactions',
    text: 'If an amount is debited but the order or service is not confirmed, the transaction will be verified and the refund processed as applicable.',
  },
];

export const RefundPolicyView: React.FC<RefundPolicyViewProps> = ({ onBack }) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (typeof window !== 'undefined') {
      window.history.length > 1 ? window.history.back() : (window.location.hash = '#dashboard');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-20 select-none">

      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 py-3 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-95 transition-all shadow-2xs cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="cursor-pointer" onClick={() => { if (typeof window !== 'undefined') window.location.hash = '#dashboard'; }}>
            <FutureLogo size="sm" />
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-[10px] font-black flex items-center gap-1">
          <RotateCcw className="w-3.5 h-3.5" />
          Refund
        </span>
      </header>

      {/* ─── Content ─── */}
      <main className="max-w-2xl mx-auto px-4 pt-6 space-y-5 text-left">

        {/* Title Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-black">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refund & Cancellation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Refund &amp; Cancellation Policy</h1>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Last updated: <strong>23-10-2026</strong></span>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 text-sm text-orange-900 font-medium">
          <strong>Future IT Industry</strong> aims to provide a smooth and transparent customer experience.
        </div>

        {/* Points List */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
          {POINTS.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-100 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center mt-0.5">
                {i + 1}
              </div>
              <div>
                <span className="font-black text-slate-900 text-sm">{item.title}:</span>{' '}
                <span className="text-sm text-slate-700 font-medium">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-start gap-3">
          <RotateCcw className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 font-medium">
            Refunds are processed within <strong>7–10 business days</strong> after verification. Contact us immediately for any payment issues.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-black text-slate-900">Need refund or cancellation help?</h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              For refund or cancellation assistance, please contact us using the contact details provided on our website.
            </p>
          </div>
          <a
            href="#contact-us"
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-black shadow-sm transition-transform active:scale-95 whitespace-nowrap"
          >
            Contact Us →
          </a>
        </div>

        {/* Footer */}
        <div className="text-center pt-2 pb-8 text-slate-400 text-xs font-medium">
          <p>© 2026 Future IT Industry. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
};
