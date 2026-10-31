import { FullFooter } from '../footer';
import { FutureAdvancedHeader } from '../futureai/FutureAdvancedHeader';
import React from 'react';
import { ArrowLeft, ShieldCheck, Clock } from 'lucide-react';
import { FutureLogo } from '../futureai/FutureLogo';

interface PrivacyPolicyViewProps {
  onBack?: () => void;
}

const POINTS: { title: string; text: string }[] = [
  {
    title: 'Information We Collect',
    text: 'We may collect your name, email address, phone number, billing details, and other information necessary to provide our products and services.',
  },
  {
    title: 'Use of Information',
    text: 'Your information may be used to process orders, provide services, respond to queries, improve our website, and communicate important updates.',
  },
  {
    title: 'Payment Security',
    text: 'Payments are processed through authorised payment service providers. We do not store sensitive payment details unless required and permitted by applicable law.',
  },
  {
    title: 'Information Sharing',
    text: 'We do not sell your personal information. Information may be shared with service providers or authorities when necessary to deliver services or comply with legal obligations.',
  },
  {
    title: 'Cookies',
    text: 'Our website may use cookies to improve functionality and user experience.',
  },
  {
    title: 'Data Security',
    text: 'We take reasonable measures to protect personal information against unauthorised access, misuse, or disclosure.',
  },
  {
    title: 'Your Rights',
    text: 'You may request access to, correction of, or deletion of your personal information, subject to applicable legal requirements.',
  },
  {
    title: 'Third-Party Links',
    text: 'We are not responsible for the privacy practices of external websites linked from our website.',
  },
  {
    title: 'Policy Updates',
    text: 'We may update this Privacy Policy from time to time. Changes will be published on this page.',
  },
];

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onBack }) => {
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
          <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-emerald-500/10 via-teal-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Data Protection</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Last updated: <strong>23-10-2026</strong></span>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-sm text-emerald-900 font-medium">
          <strong>Future IT Industry</strong> respects your privacy and is committed to protecting your personal information.
        </div>

        {/* Points List */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
          {POINTS.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-100 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center mt-0.5">
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
            <h3 className="text-sm font-black text-slate-900">Privacy questions or requests?</h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              For privacy-related questions or requests, please contact us using the contact details provided on our website.
            </p>
          </div>
          <a
            href="#contact-us"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-sm transition-transform active:scale-95 whitespace-nowrap"
          >
            Contact Us →
          </a>
        </div>

        </main>
      <FullFooter />
    </div>
  );
};
