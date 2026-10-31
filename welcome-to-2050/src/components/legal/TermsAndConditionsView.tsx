import { FullFooter } from '../footer';
import { FutureAdvancedHeader } from '../futureai/FutureAdvancedHeader';
import React from 'react';
import { ArrowLeft, Scale, Clock, CheckCircle2 } from 'lucide-react';
import { FutureLogo } from '../futureai/FutureLogo';

interface TermsAndConditionsViewProps {
  onBack?: () => void;
}

const TERMS: { title: string; text: string }[] = [
  {
    title: 'Services',
    text: 'We provide IT-related products and services as described on our website.',
  },
  {
    title: 'Orders & Payments',
    text: 'All orders and services are subject to availability, confirmation, and successful payment.',
  },
  {
    title: 'Pricing',
    text: 'Prices and service charges may change without prior notice.',
  },
  {
    title: 'Cancellations & Refunds',
    text: 'Cancellations and refunds will be governed by the applicable policy displayed on our website.',
  },
  {
    title: 'User Responsibilities',
    text: 'Users must provide accurate information and must not misuse the website or its services.',
  },
  {
    title: 'Intellectual Property',
    text: 'Website content, logos, and materials may not be copied or used without prior permission.',
  },
  {
    title: 'Limitation of Liability',
    text: 'We are not liable for indirect losses arising from website use or service interruptions, to the extent permitted by law.',
  },
  {
    title: 'Privacy',
    text: 'Personal information will be handled in accordance with our Privacy Policy.',
  },
  {
    title: 'Changes to Terms',
    text: 'We reserve the right to update these terms at any time.',
  },
  {
    title: 'Governing Law',
    text: 'These terms are governed by the applicable laws of India.',
  },
];

export const TermsAndConditionsView: React.FC<TermsAndConditionsViewProps> = ({ onBack }) => {
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
            {/* Standardized Global Advanced Header */}
      <FutureAdvancedHeader
        activeNavTab="home"
        onNavigateHome={() => { window.location.hash = '#home'; }}
        onNavigateLearning={() => { window.location.hash = '#data-analyst'; }}
        onNavigatePractice={(track) => {
          const hash = track === 'python' ? '#python-challenges' : track === 'sql' ? '#sql-challenges' : track === 'excel' ? '#excel-challenges' : '#practice';
          window.location.hash = hash;
        }}
        onOpenAtsResume={() => { window.location.hash = '#ats'; }}
        onNavigateEarn={() => { window.location.hash = '#earnings'; }}
        onNavigateInternship={() => { window.location.hash = '#placement'; }}
        onNavigatePlacement={() => { window.location.hash = '#placement'; }}
      />

      {/* ─── Content ─── */}
      <main className="max-w-2xl mx-auto px-4 pt-6 space-y-5 text-left">

        {/* Title Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-blue-500/10 via-indigo-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black">
              <Scale className="w-3.5 h-3.5" />
              <span>Official Policy</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Terms &amp; Conditions</h1>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Last updated: <strong>23-10-2026</strong></span>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 text-sm text-blue-900 font-medium">
          By accessing and using <strong>Future IT Industry</strong>, you agree to the following terms and conditions:
        </div>

        {/* Terms List */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
          {TERMS.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center mt-0.5">
                {i + 1}
              </div>
              <div>
                <span className="font-black text-slate-900 text-sm">{item.title}:</span>{' '}
                <span className="text-sm text-slate-700 font-medium">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-black text-slate-900">Questions about these Terms?</h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              For questions or assistance, please contact us through the contact details provided on our website.
            </p>
          </div>
          <a
            href="#contact-us"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-sm transition-transform active:scale-95 whitespace-nowrap"
          >
            Contact Us →
          </a>
        </div>

        </main>
      <FullFooter />
    </div>
  );
};
