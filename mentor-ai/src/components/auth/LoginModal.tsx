import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2, Phone, User, Sparkles, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BrandLogo } from '../common/BrandLogo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userData: { name: string; phone: string }) => void;
  initialTopic?: string | null;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialTopic
}) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [name, setName] = useState('Subodh Kumar');
  const [phone, setPhone] = useState('9876543210');
  const [otp, setOtp] = useState('1234');
  const [optInWhatsapp, setOptInWhatsapp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.length < 10) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
    }, 600);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      onSuccess({
        name: name.trim() || 'Learner',
        phone: `+91 ${phone}`
      });
      onClose();
    }, 500);
  };

  const handleQuickDemoLogin = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });
    onSuccess({
      name: name.trim() || 'Subodh Kumar',
      phone: `+91 ${phone}`
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Top Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <BrandLogo size="md" className="mb-4" />
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              {step === 'phone' ? 'Start Your Data Career' : 'Verify Your Number'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs">
              {initialTopic
                ? `Log in to start learning ${initialTopic} with your AI Mentor`
                : step === 'phone'
                ? 'Join 50,000+ learners mastering Python, SQL, Excel & Power BI.'
                : `We sent a 4-digit WhatsApp code to +91 ${phone}`}
            </p>
          </div>

          {step === 'phone' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              {/* Full Name Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Your Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Subodh Kumar"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* WhatsApp Mobile Number Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  WhatsApp Mobile Number
                </label>
                <div className="relative flex rounded-xl border border-slate-200 bg-slate-50 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
                  <span className="inline-flex items-center px-3.5 bg-slate-100/90 text-xs font-bold text-slate-700 border-r border-slate-200">
                    🇮🇳 +91
                  </span>
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="98765 43210"
                      className="w-full pl-9 pr-4 py-2.5 bg-transparent text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  We respect your privacy. No spam ever.
                </p>
              </div>

              {/* WhatsApp Opt-in */}
              <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={optInWhatsapp}
                  onChange={(e) => setOptInWhatsapp(e.target.checked)}
                  className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-[11px] text-slate-600 leading-tight">
                  Receive daily practice questions, streak alerts & AI mentor updates on WhatsApp
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !name.trim() || phone.length < 10}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] disabled:opacity-60"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Continue with WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Fast 1-Click Demo Login */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={handleQuickDemoLogin}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-2 flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Instant 1-Click Demo Access
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 text-center">
                  Enter 4-Digit OTP Code
                </label>
                <div className="flex justify-center gap-2.5">
                  {['1', '2', '3', '4'].map((digit, i) => (
                    <div
                      key={i}
                      className="w-12 h-13 rounded-xl bg-slate-50 border-2 border-blue-500/50 flex items-center justify-center text-lg font-black text-slate-900 shadow-inner"
                    >
                      {otp[i] || digit}
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Demo code <span className="font-bold text-slate-700">1234</span> is auto-filled for instant testing.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verify & Enter Dashboard</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-center text-xs font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                ← Change Phone Number
              </button>
            </form>
          )}

          {/* Trust Footer */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-400" /> 256-bit Encrypted
            </span>
            <span>•</span>
            <span>No Credit Card Required</span>
          </div>
        </div>
      </div>
    </div>
  );
};
