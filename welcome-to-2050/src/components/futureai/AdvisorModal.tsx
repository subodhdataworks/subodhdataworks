import React, { useState } from 'react';
import { X, PhoneCall, CheckCircle, MessageSquare, ShieldAlert, Sparkles, Send } from 'lucide-react';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvisorModal: React.FC<AdvisorModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [preferredTrack, setPreferredTrack] = useState('Data Analyst with GenAI');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Soft Background Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-100/60 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-700 uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free 1-on-1 Career Counseling</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Talk to a Career Advisor
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Get personalized guidance on the Pay After Placement model, curriculum prerequisites, and hiring partner pipelines.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone / WhatsApp Number
                </label>
                <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-sky-500/20 focus-within:border-sky-500">
                  <span className="px-3 py-2.5 bg-slate-50 text-slate-500 text-xs font-semibold border-r border-slate-200 flex items-center">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Interested Program
                </label>
                <select
                  value={preferredTrack}
                  onChange={(e) => setPreferredTrack(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none bg-white font-medium text-slate-700"
                >
                  <option>Data Analyst with GenAI</option>
                  <option>Pay After Placement Track</option>
                  <option>Python & SQL Foundational</option>
                  <option>Executive Power BI & Analytics</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-600 hover:from-teal-500 hover:via-cyan-600 hover:to-sky-700 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 text-sm active:scale-[0.98] transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request Instant Callback</span>
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <span>🔒 Zero spam guarantee. 100% confidential.</span>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900">
              Request Received!
            </h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Thank you, <strong>{name || 'Learner'}</strong>. A FUTURE IT INDUSTRY career counselor will call you at <strong>+91 {phone}</strong> within 15 minutes.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
