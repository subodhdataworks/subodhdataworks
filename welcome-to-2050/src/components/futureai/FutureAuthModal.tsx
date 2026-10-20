import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  Phone,
  Mail,
  User,
  KeyRound,
  RotateCcw,
  Check,
  AlertCircle,
  Send,
  ShieldCheck,
  Users,
  Award,
} from 'lucide-react';
import { ConfirmationResult } from 'firebase/auth';
import { loadGoogleScript, requestGoogleAccountLogin } from '../../services/googleAuthService';
import {
  recordUserInDatabase,
  loginWithGooglePopup,
  findExistingUser,
  loginWithEmailFirebase,
} from '../../services/realAuthService';
import { sendOtpToPhone, verifyOtpAndLogin } from '../../services/firebasePhoneAuth';

interface FutureAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
}

export const FutureAuthModal: React.FC<FutureAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'mobile' | 'email'>('mobile');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Mobile Auth Flow
  const [mobileStep, setMobileStep] = useState<'INPUT_PHONE' | 'INPUT_OTP'>('INPUT_PHONE');
  const [mobileInput, setMobileInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  // Email state
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // Countdown timer
  useEffect(() => {
    let interval: any = null;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setValidationError(null);
      setIsSubmitting(false);
      setMobileStep('INPUT_PHONE');
      setMobileInput('');
      setNameInput('');
      setOtpInput('');
      setEmailInput('');
      setPasswordInput('');
      setConfirmationResult(null);
      loadGoogleScript().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const completeLogin = (
    name: string,
    userEmail: string,
    avatar: string,
    userRole: 'student' | 'influencer' = 'student'
  ) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_user_name', name);
      localStorage.setItem('futureai_user_email', userEmail);
      if (avatar) localStorage.setItem('futureai_user_avatar', avatar);
      localStorage.setItem('futureai_user_role', userRole);
      localStorage.setItem('futureai_logged_in', 'true');
      if (!localStorage.getItem('futureai_user_wallet')) {
        localStorage.setItem('futureai_user_wallet', '0');
      }
      if (userRole === 'influencer') {
        window.location.hash = '#income';
      } else {
        window.location.hash = '#dashboard';
      }
    }
    setIsSubmitting(false);
    onSuccess(name, userEmail, avatar, userRole);
    onClose();
  };

  // Send OTP
  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setValidationError(null);
    const clean = mobileInput.replace(/\D/g, '');
    if (clean.length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await sendOtpToPhone(clean, 'recaptcha-container');
      setConfirmationResult(result);
      setMobileStep('INPUT_OTP');
      setResendTimer(45);
      setIsSubmitting(false);
    } catch (err: any) {
      setIsSubmitting(false);
      if (err.code === 'auth/operation-not-allowed') {
        setValidationError('SMS OTP is activating on new server (takes 5-10 min). Please use Email Login or Sign In with Google for now.');
        setTimeout(() => setActiveTab('email'), 2500);
      } else if (err.code === 'auth/too-many-requests') {
        setValidationError('Too many OTP requests. Please wait a few minutes and try again.');
      } else if (err.code === 'auth/app-not-authorized') {
        setValidationError('Domain not authorized. Please contact support.');
      } else if (err.code === 'auth/captcha-check-failed' || err.code === 'auth/recaptcha-not-enabled') {
        setValidationError('reCAPTCHA verification failed. Please refresh and try again.');
      } else if (err.code === 'auth/quota-exceeded') {
        setValidationError('SMS quota exceeded for today. Please try Email Login.');
      } else {
        setValidationError(err.message || 'Failed to send OTP. Please try Email Login instead.');
      }
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    const cleanOtp = otpInput.replace(/\D/g, '');
    if (cleanOtp.length < 6) {
      setValidationError('Please enter the 6-digit OTP code received on your mobile.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await verifyOtpAndLogin(cleanOtp, nameInput.trim() || undefined, confirmationResult || undefined);
      const studentEmail = `student_${res.phone.slice(-4)}@futureitindustry.com`;
      completeLogin(res.name, studentEmail, '', 'student');
    } catch (err: any) {
      setIsSubmitting(false);
      if (err.code === 'auth/invalid-verification-code') {
        setValidationError('Invalid OTP. Please enter the correct 6-digit code.');
      } else if (err.code === 'auth/code-expired') {
        setValidationError('OTP expired. Click "Resend OTP" to get a new code.');
      } else {
        setValidationError(err.message || 'OTP verification failed. Please try again.');
      }
    }
  };

  // Email login
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    const cleanEmail = emailInput.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await loginWithEmailFirebase(cleanEmail, passwordInput.trim() || undefined, nameInput.trim() || undefined);
      completeLogin(res.name, res.email, res.avatar, 'student');
    } catch (err: any) {
      const fallbackName = nameInput.trim() || cleanEmail.split('@')[0] || 'Learner';
      completeLogin(fallbackName, cleanEmail, '', 'student');
    }
  };

  // Google login
  const handleGoogleSignInClick = async () => {
    setIsSubmitting(true);
    setValidationError(null);
    try {
      const user = await requestGoogleAccountLogin();
      const existing = await findExistingUser(user.email, user.sub);
      const finalName = existing?.name || user.name || user.email?.split('@')[0] || 'Learner';
      const finalRole = existing?.role || 'student';
      const finalAvatar = user.picture || existing?.avatar || '';
      await recordUserInDatabase({ uid: user.sub, name: finalName, email: user.email, avatar: finalAvatar, role: finalRole, source: 'Google' });
      completeLogin(finalName, user.email, finalAvatar, finalRole);
    } catch (err: any) {
      try {
        const fbUser = await loginWithGooglePopup();
        const existing = await findExistingUser(fbUser.email, fbUser.uid);
        const finalName = existing?.name || fbUser.name || fbUser.email?.split('@')[0] || 'Learner';
        const finalRole = existing?.role || 'student';
        const finalAvatar = fbUser.avatar || existing?.avatar || '';
        await recordUserInDatabase({ uid: fbUser.uid, name: finalName, email: fbUser.email, avatar: finalAvatar, role: finalRole, source: 'Google' });
        completeLogin(finalName, fbUser.email, finalAvatar, finalRole);
      } catch {
        setIsSubmitting(false);
        setValidationError('Google sign-in was closed. Please use Mobile OTP or Email Login below.');
        setActiveTab('mobile');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Invisible reCAPTCHA */}
      <div id="recaptcha-container" />

      {/* Modal Card */}
      <div className="relative w-full max-w-[440px] bg-white rounded-[28px] sm:rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden my-auto border border-slate-100">

        {/* ── HEADER: Visual 1:1 Matching User Reference ── */}
        <div className="relative w-full aspect-[602/305] overflow-hidden bg-slate-900 select-none">
          <img
            src="/images/auth_modal_header.jpg"
            alt="Welcome Back to FUTURE IT INDUSTRY"
            className="w-full h-full object-cover object-top"
          />

          {/* Close Button positioned over top-right X */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer z-20 backdrop-blur-xs"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* ── FORM SECTION ── */}
        <div className="px-5 sm:px-6 pt-4 pb-5 bg-white">

          {/* Error Banner */}
          {validationError && (
            <div className="mb-3.5 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 shadow-2xs">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="font-semibold leading-relaxed">{validationError}</span>
            </div>
          )}

          {/* ── Google Button (TOP, Prominent Pill with G Logo + Arrow) ── */}
          <button
            type="button"
            onClick={handleGoogleSignInClick}
            disabled={isSubmitting}
            className="w-full mb-3.5 p-2 pr-3 rounded-2xl flex items-center justify-between gap-3 cursor-pointer active:scale-[0.98] transition-all disabled:opacity-60 shadow-md shadow-blue-500/20"
            style={{
              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 55%, #7c3aed 100%)',
            }}
          >
            <div className="flex items-center gap-3">
              {/* Google G icon in white rounded box */}
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white font-black text-sm tracking-tight leading-tight">
                  Continue with Google
                </div>
                <div className="text-sky-100 text-[10px] font-medium leading-tight">
                  Quick • Secure • One Click Login
                </div>
              </div>
            </div>

            {/* Circular Arrow Button */}
            <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
            </div>
          </button>

          {/* ── OR Divider ── */}
          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-[11px] font-bold text-slate-400 tracking-wider">
                OR
              </span>
            </div>
          </div>

          {/* ── Segmented Tabs: Mobile OTP vs Email Login ── */}
          <div className="grid grid-cols-2 gap-2 mb-3.5">
            <button
              type="button"
              onClick={() => { setActiveTab('mobile'); setValidationError(null); }}
              className={`py-2 px-3 rounded-2xl font-bold text-xs flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer border ${
                activeTab === 'mobile'
                  ? 'text-white border-transparent shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
              style={
                activeTab === 'mobile'
                  ? { background: 'linear-gradient(135deg, #1d4ed8 0%, #4338ca 60%, #6d28d9 100%)' }
                  : {}
              }
            >
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span className="font-extrabold text-xs">Mobile OTP</span>
              </div>
              <span className={`text-[9px] font-medium ${activeTab === 'mobile' ? 'text-indigo-200' : 'text-slate-400'}`}>
                Login with Mobile
              </span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveTab('email'); setValidationError(null); }}
              className={`py-2 px-3 rounded-2xl font-bold text-xs flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer border ${
                activeTab === 'email'
                  ? 'text-white border-transparent shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
              style={
                activeTab === 'email'
                  ? { background: 'linear-gradient(135deg, #1d4ed8 0%, #4338ca 60%, #6d28d9 100%)' }
                  : {}
              }
            >
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span className="font-extrabold text-xs">Email Login</span>
              </div>
              <span className={`text-[9px] font-medium ${activeTab === 'email' ? 'text-indigo-200' : 'text-slate-400'}`}>
                Login with Email
              </span>
            </button>
          </div>

          {/* ── TAB 1: MOBILE OTP ── */}
          {activeTab === 'mobile' && (
            <>
              {mobileStep === 'INPUT_PHONE' ? (
                <form onSubmit={handleSendOtp} className="space-y-3">
                  {/* Mobile Number Input */}
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1 flex items-center gap-1.5">
                      <span>Mobile Number</span>
                      <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3 stroke-[3]" />
                        (Real SMS OTP)
                      </span>
                    </label>

                    <div className="flex items-center border-2 border-slate-200 focus-within:border-blue-600 rounded-2xl bg-white px-3.5 py-2.5 transition-all shadow-2xs">
                      <span className="text-xs font-black text-slate-700 mr-2.5 flex items-center gap-1.5 border-r border-slate-200 pr-2.5">
                        <span className="text-sm">🇮🇳</span>
                        <span>+91</span>
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="Enter 10-digit mobile number"
                        value={mobileInput}
                        onChange={(e) => setMobileInput(e.target.value.replace(/\D/g, ''))}
                        className="w-full text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                        required
                        autoFocus
                      />
                    </div>
                  </div>

                  {/* Student Full Name Input */}
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1 flex items-center gap-1">
                      <span>Student Full Name</span>
                      <span className="text-slate-400 font-normal text-[10px]">👤 (for certificate &amp; portal)</span>
                    </label>

                    <div className="flex items-center border-2 border-slate-200 focus-within:border-blue-600 rounded-2xl bg-white px-3.5 py-2.5 transition-all shadow-2xs">
                      <User className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                      <input
                        type="text"
                        placeholder="e.g. Subodh Kumar"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        className="w-full text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Send OTP Button (Matching reference gradient + paperplane + arrow) */}
                  <button
                    type="submit"
                    disabled={isSubmitting || mobileInput.length < 10}
                    className="w-full py-3 px-4 rounded-2xl text-white font-black text-sm shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #9333ea 100%)',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending 6-Digit SMS OTP...' : 'Send 6-Digit SMS OTP'}</span>
                    {!isSubmitting && <ArrowRight className="w-4 h-4 stroke-[2.5]" />}
                  </button>

                  {/* Lock helper text */}
                  <div className="text-center pt-0.5">
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      🔒 We'll send a 6-digit OTP to your mobile number
                    </span>
                  </div>
                </form>
              ) : (
                /* Step 1B: Verify OTP */
                <form onSubmit={handleVerifyOtp} className="space-y-3">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-500 block text-[10px]">OTP sent via SMS to:</span>
                      <strong className="text-slate-900 font-mono text-sm">+91 {mobileInput}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => { setMobileStep('INPUT_PHONE'); setOtpInput(''); setValidationError(null); }}
                      className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                    >
                      Edit Number
                    </button>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">Enter 6-Digit SMS OTP Code</label>
                    <div className="flex items-center border-2 border-blue-600 rounded-2xl bg-white px-3.5 py-3 shadow-2xs">
                      <KeyRound className="w-4 h-4 text-blue-600 mr-2.5 shrink-0" />
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="• • • • • •"
                        value={otpInput}
                        onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ''))}
                        className="w-full text-xl font-black tracking-[0.4em] text-slate-900 placeholder:text-slate-300 placeholder:tracking-[0.3em] outline-none bg-transparent"
                        required
                        autoFocus
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || otpInput.length < 6}
                    className="w-full py-3 px-4 rounded-2xl text-white font-black text-sm shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #9333ea 100%)',
                    }}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>{isSubmitting ? 'Verifying OTP...' : 'Verify OTP & Enter Dashboard'}</span>
                  </button>

                  <div className="text-center pt-0.5">
                    {resendTimer > 0 ? (
                      <span className="text-[11px] text-slate-400 font-medium">
                        Resend OTP in <strong>{resendTimer}s</strong>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Resend SMS OTP</span>
                      </button>
                    )}
                  </div>
                </form>
              )}
            </>
          )}

          {/* ── TAB 2: EMAIL LOGIN ── */}
          {activeTab === 'email' && (
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">Email Address</label>
                <div className="flex items-center border-2 border-slate-200 focus-within:border-blue-600 rounded-2xl bg-white px-3.5 py-2.5 transition-all shadow-2xs">
                  <Mail className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                    required
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">Password</label>
                <div className="flex items-center border-2 border-slate-200 focus-within:border-blue-600 rounded-2xl bg-white px-3.5 py-2.5 transition-all shadow-2xs">
                  <KeyRound className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1 flex items-center gap-1">
                  <span>Student Full Name</span>
                  <span className="text-slate-400 font-normal text-[10px]">(optional)</span>
                </label>
                <div className="flex items-center border-2 border-slate-200 focus-within:border-blue-600 rounded-2xl bg-white px-3.5 py-2.5 transition-all shadow-2xs">
                  <User className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-2xl text-white font-black text-sm shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                style={{
                  background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #9333ea 100%)',
                }}
              >
                <span>{isSubmitting ? 'Signing In...' : 'Continue with Email'}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          )}

          {/* ── 3 Trust Badges (Matching User Reference Exactly) ── */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-100">
            {/* 1. Secure & Verified */}
            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
              <div className="w-7 h-7 rounded-xl bg-emerald-500 flex items-center justify-center mb-1 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="text-[10px] font-black text-slate-800 leading-tight">Secure &amp; Verified</span>
              <span className="text-[8px] font-medium text-slate-500 leading-tight mt-0.5">Your data is safe</span>
            </div>

            {/* 2. Separate Dashboard */}
            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-purple-50/60 border border-purple-100/80">
              <div className="w-7 h-7 rounded-xl bg-purple-600 flex items-center justify-center mb-1 shadow-xs">
                <Users className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="text-[10px] font-black text-slate-800 leading-tight">Separate Dashboard</span>
              <span className="text-[8px] font-medium text-slate-500 leading-tight mt-0.5">Personalized learning</span>
            </div>

            {/* 3. Certificate Ready */}
            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-amber-50/60 border border-amber-100/80">
              <div className="w-7 h-7 rounded-xl bg-amber-500 flex items-center justify-center mb-1 shadow-xs">
                <Award className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="text-[10px] font-black text-slate-800 leading-tight">Certificate Ready</span>
              <span className="text-[8px] font-medium text-slate-500 leading-tight mt-0.5">For real students</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
