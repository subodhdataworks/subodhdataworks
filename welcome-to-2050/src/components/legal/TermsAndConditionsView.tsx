import React from 'react';
import {
  ArrowLeft,
  FileText,
  Clock,
  ShieldCheck,
  Scale,
  Building2,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { FutureLogo } from '../futureai/FutureLogo';

interface TermsAndConditionsViewProps {
  onBack?: () => void;
}

export const TermsAndConditionsView: React.FC<TermsAndConditionsViewProps> = ({ onBack }) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (typeof window !== 'undefined') {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.hash = '#dashboard';
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 pb-20 select-none">
      
      {/* ─── Top Navigation Header ─── */}
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

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>RBI Mandated Policy</span>
          </span>
        </div>
      </header>

      {/* ─── Main Content Container ─── */}
      <main className="max-w-4xl mx-auto px-4 pt-6 sm:pt-10 space-y-6 text-left">
        
        {/* Title Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 via-indigo-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Merchant Agreement</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Terms &amp; Conditions
            </h1>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Last updated on: <strong>19-10-2026 11:52:26</strong></span>
            </div>
          </div>
        </div>

        {/* ─── Full Policy Legal Text ─── */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 leading-relaxed text-sm text-slate-700">
          
          {/* Preamble */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800 space-y-3">
            <p>
              These Terms and Conditions, along with privacy policy or other terms (<strong>“Terms”</strong>) constitute a binding agreement by and between <strong>SUBODH KUMAR</strong>, (<strong>“Website Owner”</strong> or <strong>“we”</strong> or <strong>“us”</strong> or <strong>“our”</strong>) and you (<strong>“you”</strong> or <strong>“your”</strong>) and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, <strong>“Services”</strong>).
            </p>
            <p>
              By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              The use of this website or availing of our Services is subject to the following terms of use:
            </h2>

            <ul className="space-y-3.5 list-none">
              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  You agree to pay us the charges associated with availing the Services.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the us for the Services.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, than this would make you ineligible for a refund.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-blue-950">
                <Scale className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold">
                  All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Bakarpur, Bihar
                </span>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Contact Info Card (Direct Link to Contact Policy) ─── */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-black text-slate-900">
              Questions regarding these Terms?
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Merchant: SUBODH KUMAR • 4, Varma house, Bakarpur, Bihar, PIN: 844127
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact-us"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-sm transition-transform active:scale-95"
            >
              Contact Us Policy →
            </a>
          </div>
        </div>

        {/* ─── Footer Disclaimer ─── */}
        <div className="text-center pt-4 pb-8 space-y-1 text-slate-400 text-xs font-medium">
          <p>© 2026 SUBODH KUMAR. All rights reserved.</p>
          <p className="text-[11px]">
            FUTURE IT INDUSTRY • 4, Varma house, Bakarpur, Bihar, PIN: 844127 • Tel: 8210778369
          </p>
        </div>

      </main>
    </div>
  );
};
