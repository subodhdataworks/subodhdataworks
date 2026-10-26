import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  Phone,
  Mail,
  KeyRound,
  RotateCcw,
  Check,
  AlertCircle,
  ShieldCheck,
  Zap,
  Lock,
  ChevronDown,
} from 'lucide-react';
import { ConfirmationResult } from 'firebase/auth';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { loadGoogleScript, requestGoogleAccountLogin } from '../../services/googleAuthService';
import {
  recordUserInDatabase,
  loginWithGooglePopup,
  findExistingUser,
  loginWithEmailFirebase,
} from '../../services/realAuthService';
import { sendOtpToPhone, verifyOtpAndLogin } from '../../services/firebasePhoneAuth';
import { BRAND } from '../../config/brand';

export interface FutureAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
  message?: string;
  redirectUrl?: string;
}

// 4-Point Classic Star Sparkle Component matching Figma / Design Reference
const SparkleStar: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#FFAA00',
}) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
      fill={color}
    />
  </svg>
);

export const FutureAuthModal: React.FC<FutureAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  message,
  redirectUrl,
}) => {
  // Primary flow: 'email' (as requested) with option to switch to 'mobile' (OTP)
  const [authMode, setAuthMode] = useState<'email' | 'mobile'>('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Email & Password Auth Flow
  const [emailStep, setEmailStep] = useState<'EMAIL' | 'PASSWORD'>('EMAIL');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Mobile Auth Flow: 'INPUT_PHONE' | 'INPUT_OTP'
  const [mobileStep, setMobileStep] = useState<'INPUT_PHONE' | 'INPUT_OTP'>('INPUT_PHONE');
  const [mobileInput, setMobileInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  // Resend Countdown timer for OTP
  useEffect(() => {
    let interval: any = null;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Reset state on open
  useEffect(() => {
    if (isOpen) {
      setValidationError(null);
      setIsSubmitting(false);
      setIsGoogleLoading(false);
      setAuthMode('email');
      setEmailStep('EMAIL');
      setEmailInput('');
      setPasswordInput('');
      setShowPassword(false);
      setMobileStep('INPUT_PHONE');
      setMobileInput('');
      setOtpInput('');
      setConfirmationResult(null);
      loadGoogleScript().catch(() => {});
    }
  }, [isOpen]);

  // Handle Android redirect result
  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        if (!result?.user) return;
        const user = result.user;
        const name = user.displayName || user.email?.split('@')[0] || 'Learner';
        const email = user.email || '';
        const avatar = user.photoURL || '';
        const uid = user.uid;
        const existing = await findExistingUser(email, uid);
        const finalName = existing?.name || name;
        const finalRole = existing?.role || 'student';
        await recordUserInDatabase({ uid, name: finalName, email, avatar, role: finalRole, source: 'Google' });
        completeLogin(finalName, email, avatar, finalRole);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      const targetHash = redirectUrl || sessionStorage.getItem('futureai_auth_redirect') || localStorage.getItem('futureai_auth_redirect');
      if (targetHash) {
        sessionStorage.removeItem('futureai_auth_redirect');
        localStorage.removeItem('futureai_auth_redirect');
        window.location.hash = targetHash;
      } else if (userRole === 'influencer') {
        window.location.hash = '#income';
      } else {
        window.location.hash = '#dashboard';
      }
    }
    setIsSubmitting(false);
    setIsGoogleLoading(false);
    onSuccess(name, userEmail, avatar, userRole);
    onClose();
  };

  // 1. Email Step 1: Validate email and move to password step
  const handleEmailNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    const cleanEmail = emailInput.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    setEmailStep('PASSWORD');
  };

  // 2. Email Step 2: Submit password & login
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    const cleanEmail = emailInput.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setValidationError('Please enter a valid email address.');
      setEmailStep('EMAIL');
      return;
    }
    if (!passwordInput || passwordInput.trim().length < 6) {
      setValidationError('Password must be at least 6 characters.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await loginWithEmailFirebase(cleanEmail, passwordInput.trim());
      completeLogin(res.name, res.email, res.avatar, 'student');
    } catch (err: any) {
      setIsSubmitting(false);
      setValidationError(err.message || 'Email login failed. Please check credentials.');
    }
  };

  // 3. Google 1-Click Login (Official OAuth flow)
  const handleGoogleSignInClick = async () => {
    setIsSubmitting(true);
    setIsGoogleLoading(true);
    setValidationError(null);
    try {
      const user = await requestGoogleAccountLogin();
      const existing = await findExistingUser(user.email, user.sub);
      const finalName = existing?.name || user.name || user.email?.split('@')[0] || 'Learner';
      const finalRole = existing?.role || 'student';
      const finalAvatar = user.picture || existing?.avatar || '';
      await recordUserInDatabase({
        uid: user.sub,
        name: finalName,
        email: user.email,
        avatar: finalAvatar,
        role: finalRole,
        source: 'Google',
      });
      completeLogin(finalName, user.email, finalAvatar, finalRole);
    } catch (err: any) {
      try {
        const fbUser = await loginWithGooglePopup();
        if (fbUser) {
          const existing = await findExistingUser(fbUser.email, fbUser.uid);
          const finalName = existing?.name || fbUser.name || fbUser.email?.split('@')[0] || 'Learner';
          const finalRole = existing?.role || 'student';
          const finalAvatar = fbUser.avatar || existing?.avatar || '';
          await recordUserInDatabase({
            uid: fbUser.uid,
            name: finalName,
            email: fbUser.email,
            avatar: finalAvatar,
            role: finalRole,
            source: 'Google',
          });
          completeLogin(finalName, fbUser.email, finalAvatar, finalRole);
        }
      } catch (fbErr: any) {
        if (fbErr?.message === 'REDIRECT_INITIATED') {
          setValidationError('Redirecting to Google... Please wait ⏳');
          return;
        }
        setIsSubmitting(false);
        setIsGoogleLoading(false);
        setValidationError('Google sign-in closed. Please continue with Email below.');
      }
    }
  };

  // 4. Mobile OTP Submit
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
        setValidationError('Phone OTP is activating. Please use Google or Email Login.');
      } else if (err.code === 'auth/too-many-requests') {
        setValidationError('Too many requests. Please wait a few minutes.');
      } else if (err.code === 'auth/app-not-authorized') {
        setValidationError('Domain not authorized. Please try Google or Email Login.');
      } else if (err.code === 'auth/quota-exceeded') {
        setValidationError('SMS limit reached. Please use Google or Email Login.');
      } else {
        setValidationError(err.message || 'Failed to send OTP. Please try Email or Google Login.');
      }
    }
  };

  // 5. Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    const cleanOtp = otpInput.replace(/\D/g, '');
    if (cleanOtp.length < 6) {
      setValidationError('Please enter the 6-digit OTP code.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await verifyOtpAndLogin(cleanOtp, undefined, confirmationResult || undefined);
      const studentEmail = `student_${res.phone.slice(-4)}@futureitindustry.com`;
      completeLogin(res.name, studentEmail, '', 'student');
    } catch (err: any) {
      setIsSubmitting(false);
      if (err.code === 'auth/invalid-verification-code') {
        setValidationError('Invalid OTP. Please enter the correct 6-digit code.');
      } else if (err.code === 'auth/code-expired') {
        setValidationError('OTP expired. Click "Resend OTP".');
      } else {
        setValidationError(err.message || 'OTP verification failed. Please try again.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Invisible reCAPTCHA container for Phone OTP */}
      <div id="recaptcha-container" />

      {/* Outer Anchor Container for 3D Elements & Sparkles */}
      <div className="relative w-full max-w-[460px] my-auto">

        {/* ── Desktop Floating 3D Elements matching media_1793031987828_3fa6a1de.png ── */}
        {/* 1. Left 3D Laptop sitting on glowing books with desk plant */}
        <div className="hidden md:block absolute -left-20 -bottom-8 w-44 h-auto pointer-events-none z-20 drop-shadow-[0_15px_30px_rgba(0,180,255,0.35)] select-none">
          <img
            src="/images/auth_3d_laptop_clean.png"
            alt="Laptop 3D"
            className="w-full h-auto object-contain animate-floatSlow"
          />
        </div>

        {/* 2. Right 3D Graduation Cap on stacked learning books */}
        <div className="hidden md:block absolute -right-16 -bottom-6 w-36 h-auto pointer-events-none z-20 drop-shadow-[0_15px_30px_rgba(30,60,150,0.3)] select-none">
          <img
            src="/images/auth_3d_grad_clean.png"
            alt="Graduation Cap 3D"
            className="w-full h-auto object-contain animate-floatSlowReverse"
          />
        </div>

        {/* 3. Golden Sparkle on left */}
        <div className="hidden sm:block absolute -left-3 top-[52%] -translate-y-1/2 pointer-events-none z-20 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]">
          <SparkleStar className="w-6 h-6 animate-pulse" color="#F59E0B" />
        </div>

        {/* 4. Golden Sparkle on right */}
        <div className="hidden sm:block absolute -right-3 top-[44%] -translate-y-1/2 pointer-events-none z-20 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]">
          <SparkleStar className="w-7 h-7 animate-pulse" color="#F59E0B" />
        </div>

        {/* 5. Cyan Sparkle on right */}
        <div className="hidden sm:block absolute -right-5 top-[56%] pointer-events-none z-20 drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]">
          <SparkleStar className="w-4 h-4" color="#00D2FF" />
        </div>

        {/* ── CARD: Clean, Premium, Single-Column Modal (460px) ── */}
        <div className="relative w-full bg-white rounded-[24px] shadow-[0_25px_60px_-15px_rgba(16,35,74,0.2),0_0_0_1px_rgba(220,232,252,0.9)] p-6 sm:p-7 text-center border border-[#DCE8FC] animate-scaleUp overflow-hidden">
          
          {/* Subtle Pastel-Blue Ambient Glow Gradients in Card Corners */}
          <div className="absolute -top-16 -left-16 w-44 h-44 bg-sky-100/70 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-blue-100/60 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-50/80 rounded-full blur-2xl pointer-events-none" />

          {/* Top-Right Close (X) Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100/90 hover:bg-slate-200 active:scale-95 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer z-30 shadow-xs border border-slate-200/50"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* ── POPUP HEADER ── */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Existing Future IT Industries Logo from Project Assets */}
            <div className="h-10 sm:h-11 flex items-center justify-center">
              <img
                src={BRAND.logo}
                alt="FUTURE IT INDUSTRY"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>

            {/* Welcome Back! 👋 */}
            <h2 className="text-2xl sm:text-[26px] font-black text-[#10234A] tracking-tight mt-3 flex items-center justify-center gap-1.5">
              <span>Welcome</span>
              <span className="text-[#1A73E8]">Back!</span>
              <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13px] text-slate-500 font-normal max-w-[360px] mx-auto mt-1.5 leading-relaxed">
              Login to continue your learning journey and unlock your internship, certificate and career opportunities.
            </p>
          </div>

          {/* Notice Message Banner (if redirected from a protected navbar or route) */}
          {message && (
            <div className="relative z-10 mt-3.5 p-3 rounded-2xl bg-blue-50/90 border border-blue-200/80 text-blue-950 text-xs font-semibold flex items-center gap-2.5 text-left shadow-2xs animate-fadeIn">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Lock className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 flex-1 leading-snug">
                <span className="text-blue-950 block font-bold text-xs sm:text-[13px]">{message}</span>
                <span className="text-[10px] text-blue-700/80 font-medium">Please sign in to access this feature</span>
              </div>
            </div>
          )}

          {/* Validation / Error Banner */}
          {validationError && (
            <div className="relative z-10 mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 text-left shadow-2xs animate-fadeIn">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="font-semibold leading-snug">{validationError}</span>
            </div>
          )}

          {/* ── GOOGLE LOGIN BUTTON (Exact Visual Specification) ── */}
          <div className="relative z-10 mt-5">
            <button
              type="button"
              onClick={handleGoogleSignInClick}
              disabled={isSubmitting}
              className="w-full h-[54px] px-5 rounded-[14px] bg-white hover:bg-slate-50/90 active:scale-[0.99] border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between cursor-pointer disabled:opacity-60 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-[14px] sm:text-[15px] text-[#10234A]">
                  {isGoogleLoading ? 'Connecting with Google...' : 'Continue with Google'}
                </span>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#10234A] group-hover:translate-x-0.5 transition-all stroke-[2.5]" />
            </button>
          </div>

          {/* ── OR DIVIDER ── */}
          <div className="relative my-4 z-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-[11px] font-bold text-slate-400 tracking-wider">
                OR
              </span>
            </div>
          </div>

          {/* ── EMAIL LOGIN CONTAINER (SaaS EdTech Card) ── */}
          <div className="relative z-10 bg-[#F2F6FC]/90 border border-[#E1ECF9] rounded-[20px] p-4 text-left shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  {authMode === 'email' ? <Mail className="w-3.5 h-3.5" /> : <Phone className="w-3.5 h-3.5" />}
                </div>
                <span className="text-sm font-bold text-[#10234A]">
                  {authMode === 'email' ? 'Login with Email' : 'Login with Mobile Number'}
                </span>
              </div>

              {authMode === 'email' && emailStep === 'PASSWORD' && (
                <button
                  type="button"
                  onClick={() => { setEmailStep('EMAIL'); setValidationError(null); }}
                  className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer"
                >
                  Change Email
                </button>
              )}

              {authMode === 'mobile' && mobileStep === 'INPUT_OTP' && (
                <button
                  type="button"
                  onClick={() => { setMobileStep('INPUT_PHONE'); setOtpInput(''); setValidationError(null); }}
                  className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer"
                >
                  Change Number
                </button>
              )}
            </div>

            {authMode === 'email' ? (
              emailStep === 'EMAIL' ? (
                /* Step 1: Email Input */
                <form onSubmit={handleEmailNextStep} className="space-y-3">
                  <div className="flex items-center border border-slate-200 focus-within:border-blue-500 rounded-xl bg-white px-3.5 h-[48px] transition-all shadow-2xs">
                    <Mail className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                      required
                      autoFocus
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !emailInput || !emailInput.includes('@')}
                    className="w-full h-[50px] px-4 rounded-xl text-white font-bold text-sm shadow-md shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, #0080FF 0%, #0055FF 100%)',
                    }}
                  >
                    <span>Continue with Email</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              ) : (
                /* Step 2: Password Input */
                <form onSubmit={handleEmailSubmit} className="space-y-3 animate-fadeIn">
                  <div className="px-3 py-2 rounded-lg bg-white/80 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
                    <span className="font-medium truncate">{emailInput}</span>
                    <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-1.5 py-0.5 rounded">Verified</span>
                  </div>

                  <div className="flex items-center border border-slate-200 focus-within:border-blue-500 rounded-xl bg-white px-3.5 h-[48px] transition-all shadow-2xs">
                    <Lock className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                      required
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="text-xs text-slate-400 hover:text-slate-600 font-medium ml-1 shrink-0 cursor-pointer"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || passwordInput.length < 6}
                    className="w-full h-[50px] px-4 rounded-xl text-white font-bold text-sm shadow-md shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, #0080FF 0%, #0055FF 100%)',
                    }}
                  >
                    <span>{isSubmitting ? 'Signing In...' : 'Continue with Email'}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )
            ) : (
              /* Mobile Phone OTP Flow */
              mobileStep === 'INPUT_PHONE' ? (
                <form onSubmit={handleSendOtp} className="space-y-3">
                  <div className="flex items-center border border-slate-200 focus-within:border-blue-500 rounded-xl bg-white px-3.5 h-[48px] transition-all shadow-2xs">
                    <Phone className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800 mr-1">+91</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
                    <div className="w-[1px] h-5 bg-slate-200 mr-2.5" />
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="Enter 10-digit mobile number"
                      value={mobileInput}
                      onChange={(e) => setMobileInput(e.target.value.replace(/\D/g, ''))}
                      className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                      required
                      autoFocus
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || mobileInput.length < 10}
                    className="w-full h-[50px] px-4 rounded-xl text-white font-bold text-sm shadow-md shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, #0080FF 0%, #0055FF 100%)',
                    }}
                  >
                    <span>{isSubmitting && !isGoogleLoading ? 'Sending OTP...' : 'Continue with Mobile Number'}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-3">
                  <div className="px-3 py-2 rounded-lg bg-white/80 border border-slate-200/80 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-slate-400 text-[10px] block">OTP sent to:</span>
                      <strong className="text-slate-800 font-mono">+91 {mobileInput}</strong>
                    </div>
                  </div>

                  <div className="flex items-center border-2 border-blue-500 rounded-xl bg-white px-3.5 h-[48px] shadow-2xs">
                    <KeyRound className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="• • • • • •"
                      value={otpInput}
                      onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ''))}
                      className="w-full text-base font-black tracking-[0.3em] text-slate-900 placeholder:text-slate-300 outline-none bg-transparent text-center"
                      required
                      autoFocus
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || otpInput.length < 6}
                    className="w-full h-[50px] px-4 rounded-xl text-white font-bold text-sm shadow-md shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, #0080FF 0%, #0055FF 100%)',
                    }}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>{isSubmitting ? 'Verifying OTP...' : 'Verify OTP & Enter'}</span>
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
                        <RotateCcw className="w-3 h-3" />
                        <span>Resend OTP</span>
                      </button>
                    )}
                  </div>
                </form>
              )
            )}
          </div>

          {/* Toggle between Email Login and Mobile OTP */}
          <div className="relative z-10 mt-3 text-center">
            {authMode === 'email' ? (
              <button
                type="button"
                onClick={() => { setAuthMode('mobile'); setValidationError(null); }}
                className="text-xs text-slate-500 hover:text-blue-600 font-semibold cursor-pointer inline-flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>Or log in with Mobile Number (OTP)</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => { setAuthMode('email'); setValidationError(null); }}
                className="text-xs text-slate-500 hover:text-blue-600 font-semibold cursor-pointer inline-flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Or log in with Email</span>
              </button>
            )}
          </div>

          {/* ── 3 TRUST BADGES (Matching Reference Image) ── */}
          <div className="relative z-10 grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-1 text-blue-600 shadow-2xs">
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-bold text-[#10234A] leading-tight">Secure &amp; Safe</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-7 h-7 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center mb-1 text-purple-600 shadow-2xs">
                <Zap className="w-4 h-4 fill-purple-600 stroke-[1.5]" />
              </div>
              <span className="text-[11px] font-bold text-[#10234A] leading-tight">Quick Access</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-1 text-emerald-600 shadow-2xs">
                <Lock className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-bold text-[#10234A] leading-tight">Your Data is Safe</span>
            </div>
          </div>

          {/* ── FOOTER TERMS & PRIVACY NOTICE ── */}
          <p className="relative z-10 mt-4 text-[11px] text-slate-400 font-medium text-center leading-relaxed">
            By continuing, you agree to our{' '}
            <a
              href="#terms"
              onClick={(e) => { e.preventDefault(); window.location.hash = '#terms'; onClose(); }}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="#privacy"
              onClick={(e) => { e.preventDefault(); window.location.hash = '#privacy'; onClose(); }}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Privacy Policy
            </a>.
          </p>

        </div>
      </div>
    </div>
  );
};
