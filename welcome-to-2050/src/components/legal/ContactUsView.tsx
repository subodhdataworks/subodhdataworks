import { FullFooter } from '../footer';
import { FutureAdvancedHeader } from '../futureai/FutureAdvancedHeader';
import React, { useState } from 'react';
import {
  ArrowLeft,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { FutureLogo } from '../futureai/FutureLogo';

interface ContactUsViewProps {
  onBack?: () => void;
}

export const ContactUsView: React.FC<ContactUsViewProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course / Payment Query',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert(`Thank you ${formData.name}! Your message has been sent to POWER GREEN INDUSTRIES support team. We will contact you at ${formData.email} or ${formData.phone} within 2-4 hours.`);
      setFormData({ name: '', email: '', phone: '', subject: 'Course / Payment Query', message: '' });
      setSubmitted(false);
    }, 800);
  };

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard?.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

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

      {/* ─── Main Content Container ─── */}
      <main className="max-w-4xl mx-auto px-4 pt-6 sm:pt-10 space-y-6 text-left">
        
        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Merchant Contact Policy</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h1>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Last updated on: <strong>19-10-2026 11:42:55</strong></span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed pt-1">
              You may contact us using the information below:
            </p>
          </div>
        </div>

        {/* ─── Legal Entity & Address Cards (RBI Mandatory Info) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Merchant Legal Entity */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Legal Entity Name
                </span>
                <h3 className="text-base font-black text-slate-900">
                  POWER GREEN INDUSTRIES
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Merchant Legal Entity registered under applicable Indian commercial & digital commerce laws for providing education, software training, placement prep, and student mentorship services.
            </p>
          </div>

          {/* Customer Helpline & Quick Contacts */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Customer Support Phone
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:8210778369"
                    className="text-base font-black text-emerald-700 hover:underline"
                  >
                    +91 8210778369
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('8210778369', 'phone')}
                    className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-xs shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Official E-Mail ID
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:subodh.mscit@gmail.com"
                    className="text-sm font-black text-purple-700 hover:underline truncate"
                  >
                    subodh.mscit@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('subodh.mscit@gmail.com', 'email')}
                    className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Registered Address */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Official Registered Address
                </span>
                <h3 className="text-sm font-black text-slate-900">
                  Registered Office
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed pl-12">
              4, Varma house, Bakarpur, Bihar, PIN: 844127
            </p>
          </div>

          {/* Operational Address */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Official Operational Address
                </span>
                <h3 className="text-sm font-black text-slate-900">
                  Operations &amp; Student Center
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed pl-12">
              4, Varma house, Bakarpur, Bihar, PIN: 844127
            </p>
          </div>

        </div>

        {/* ─── Operational Hours & Support Availability ─── */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-black">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Support Active</span>
              </span>
              <h3 className="text-lg font-black tracking-tight">
                Operating &amp; Support Hours
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Monday to Saturday: 9:00 AM – 7:00 PM IST (Excluding National Holidays)
              </p>
              <p className="text-xs text-slate-400">
                Average Ticket Resolution Time: Within 2 to 4 business hours.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://wa.me/918210778369?text=Hello%20Subodh%20Kumar,%20I%20have%20a%20query%20regarding%20FUTURE%20IT%20INDUSTRY%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black flex items-center gap-2 shadow-md active:scale-95 transition-transform"
              >
                <span>WhatsApp Support</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:8210778369"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-black flex items-center gap-2 border border-white/20 active:scale-95 transition-transform"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── Direct Contact / Grievance Redressal Form ─── */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-600">
              <MessageSquare className="w-5 h-5" />
              <h3 className="text-lg font-black text-slate-900">
                Send Us a Message / Grievance Redressal
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Have questions regarding enrollment, course curriculum, payment receipts, or refunds? Submit your query directly to merchant.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your E-Mail ID *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Query Subject *</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white"
                >
                  <option value="Course / Payment Query">Course / Payment Query</option>
                  <option value="Placement Support">Placement / Job Guarantee Support</option>
                  <option value="Affiliate / Referral Payout">Affiliate / Referral Payout</option>
                  <option value="Technical Issue">Technical / Portal Access Issue</option>
                  <option value="Other / Feedback">Other / Feedback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Your Message / Query Details *</label>
              <textarea
                required
                rows={4}
                placeholder="Write your query or question here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Submitting Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Message to Support</span>
                </>
              )}
            </button>
          </form>
        </div>

        </main>
      <FullFooter />
    </div>
  );
};
