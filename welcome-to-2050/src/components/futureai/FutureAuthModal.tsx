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
  Users,
  Lock,
  ChevronDown,
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
  const [authMethod, setAuthMethod] = useState<'mobile' | 'email'>('mobile');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Mobile Auth Flow: 'INPUT_PHONE' | 'INPUT_OTP'
  const [mobileStep, setMobileStep] = useState<'INPUT_PHONE' | 'INPUT_OTP'>('INPUT_PHONE');
  const [mobileInput, setMobileInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  // Email & Password Auth Flow
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // Resend Countdown timer
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
      setAuthMethod('mobile');
      setMobileStep('INPUT_PHONE');
      setMobileInput('');
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
        setValidationError('Phone Auth is activating on server. Please use Google Login or Email Login.');
      } else if (err.code === 'auth/too-many-requests') {
        setValidationError('Too many requests. Please wait a few minutes and try again.');
      } else if (err.code === 'auth/app-not-authorized') {
        setValidationError('Domain not authorized. Please try Google or Email Login.');
      } else if (err.code === 'auth/captcha-check-failed' || err.code === 'auth/recaptcha-not-enabled') {
        setValidationError('Verification failed. Please refresh and try again.');
      } else if (err.code === 'auth/quota-exceeded') {
        setValidationError('SMS quota reached for today. Please use Email Login.');
      } else {
        setValidationError(err.message || 'Failed to send OTP. Please try Email Login.');
      }
    }
  };

  // Verify OTP
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

  // Email & Password Submit
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    const cleanEmail = emailInput.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setValidationError('Please enter a valid email address.');
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

  // Google 1-Click Login
  const handleGoogleSignInClick = async () => {
    setIsSubmitting(true);
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
      } catch {
        setIsSubmitting(false);
        setValidationError('Google sign-in closed. Please continue with your Mobile Number below.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-950/65 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      {/* Invisible reCAPTCHA */}
      <div id="recaptcha-container" />

      {/* ── CARD: 1:1 Matching User Reference Design ── */}
      <div className="relative w-full max-w-[410px] bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.22)] p-6 sm:p-7 text-center border border-slate-100 my-auto animate-scaleUp">

        {/* Circular Close Button at Top-Right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer z-20"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* ── 3D Floating Google Plate & Education Elements ── */}
        <div className="relative mb-2 flex justify-center items-center">
          <img
            src="/images/auth_welcome_illustration.png"
            alt="Welcome to Future IT Industry"
            className="w-52 sm:w-56 h-auto object-contain select-none pointer-events-none drop-shadow-sm"
          />
        </div>

        {/* ── Greeting Typography ── */}
        <div className="mb-4">
          <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none mb-1">
            Welcome to
          </div>
          <h2 className="text-2xl sm:text-[28px] font-black tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0066FF] to-[#7928CA]">
            Future IT Industry
          </h2>
          <div className="text-xs font-semibold text-slate-500 tracking-wide mt-1">
            Learn • Play • Build • Grow
          </div>
          <p className="text-xs font-medium text-slate-400 mt-1">
            Sign in to access your learning dashboard
          </p>
        </div>

        {/* ── Error Banner (if any) ── */}
        {validationError && (
          <div className="mb-3.5 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-1.5 text-left shadow-2xs">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="font-semibold leading-snug">{validationError}</span>
          </div>
        )}

        {/* ── Continue with Google Button (1:1 Pill with G Logo & Arrow) ── */}
        <button
          type="button"
          onClick={handleGoogleSignInClick}
          disabled={isSubmitting}
          className="w-full mb-3.5 py-3 px-4 rounded-2xl bg-white hover:bg-slate-50/80 active:scale-[0.98] border border-slate-200 hover:border-slate-300 shadow-xs transition-all flex items-center justify-between cursor-pointer disabled:opacity-60"
        >
          {/* Multi-Color Google G */}
          <div className="flex items-center gap-3">
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
            <div className="w-[1px] h-5 bg-slate-200" />
            <span className="font-bold text-xs sm:text-sm text-slate-800">
              Continue with Google
            </span>
          </div>

          <ArrowRight className="w-4 h-4 text-slate-700 stroke-[2.5]" />
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

        {/* ── CONDITIONAL: MOBILE NUMBER vs EMAIL LOGIN ── */}
        {authMethod === 'mobile' ? (
          <>
            {/* ── MOBILE PHONE INPUT FLOW ── */}
            {mobileStep === 'INPUT_PHONE' ? (
              <form onSubmit={handleSendOtp} className="space-y-3">
                {/* Input Box matching reference: [ 📞 +91 ▾ | Enter your mobile number ] */}
                <div className="flex items-center border border-slate-200 focus-within:border-blue-500 rounded-2xl bg-white px-3.5 py-2.5 transition-all shadow-2xs">
                  <Phone className="w-4 h-4 text-slate-600 mr-2 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 mr-1">
                    +91
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
                  <div className="w-[1px] h-5 bg-slate-200 mr-3" />
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Enter your mobile number"
                    value={mobileInput}
                    onChange={(e) => setMobileInput(e.target.value.replace(/\D/g, ''))}
                    className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent text-left"
                    required
                    autoFocus
                  />
                </div>

                {/* Blue Pill Button: Continue with Mobile Number → */}
                <button
                  type="submit"
                  disabled={isSubmitting || mobileInput.length < 10}
                  className="w-full py-3 px-4 rounded-2xl text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, #0080FF 0%, #0066FF 100%)',
                  }}
                >
                  <span>{isSubmitting ? 'Sending OTP...' : 'Continue with Mobile Number'}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                {/* Switch to Email Login Link */}
                <div className="text-center pt-0.5">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMethod('email');
                      setValidationError(null);
                    }}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors"
                  >
                    ✉️ Login with Email &amp; Password instead
                  </button>
                </div>
              </form>
            ) : (
              /* Step 1B: Enter 6-Digit OTP */
              <form onSubmit={handleVerifyOtp} className="space-y-3">
                <div className="p-2.5 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs">
                  <div className="text-left">
                    <span className="text-slate-500 block text-[10px]">OTP sent to:</span>
                    <strong className="text-slate-900 font-mono text-xs">+91 {mobileInput}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setMobileStep('INPUT_PHONE'); setOtpInput(''); setValidationError(null); }}
                    className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                  >
                    Change Number
                  </button>
                </div>

                <div className="flex items-center border-2 border-blue-500 rounded-2xl bg-white px-3.5 py-2.5 shadow-2xs">
                  <KeyRound className="w-4 h-4 text-blue-600 mr-2.5 shrink-0" />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="• • • • • •"
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ''))}
                    className="w-full text-lg font-black tracking-[0.35em] text-slate-900 placeholder:text-slate-300 outline-none bg-transparent text-center"
                    required
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || otpInput.length < 6}
                  className="w-full py-3 px-4 rounded-2xl text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, #0080FF 0%, #0066FF 100%)',
                  }}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>{isSubmitting ? 'Verifying...' : 'Verify OTP & Enter'}</span>
                </button>

                <div className="text-center pt-0.5">
                  {resendTimer > 0 ? (
                    <span className="text-[11px] text-slate-400 font-medium">
                      Resend in <strong>{resendTimer}s</strong>
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
            )}
          </>
        ) : (
          /* ── EMAIL & PASSWORD LOGIN FLOW ── */
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            {/* Email Input */}
            <div className="flex items-center border border-slate-200 focus-within:border-blue-500 rounded-2xl bg-white px-3.5 py-2.5 transition-all shadow-2xs">
              <Mail className="w-4 h-4 text-slate-600 mr-2.5 shrink-0" />
              <input
                type="email"
                placeholder="name@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent text-left"
                required
                autoFocus
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center border border-slate-200 focus-within:border-blue-500 rounded-2xl bg-white px-3.5 py-2.5 transition-all shadow-2xs">
              <Lock className="w-4 h-4 text-slate-600 mr-2.5 shrink-0" />
              <input
                type="password"
                placeholder="Enter your password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent text-left"
                required
              />
            </div>

            {/* Continue with Email Button */}
            <button
              type="submit"
              disabled={isSubmitting || !emailInput || passwordInput.length < 6}
              className="w-full py-3 px-4 rounded-2xl text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              style={{
                background: 'linear-gradient(135deg, #0080FF 0%, #0066FF 100%)',
              }}
            >
              <span>{isSubmitting ? 'Signing In...' : 'Continue with Email'}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Switch back to Mobile */}
            <div className="text-center pt-0.5">
              <button
                type="button"
                onClick={() => {
                  setAuthMethod('mobile');
                  setValidationError(null);
                }}
                className="text-[11px] font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors"
              >
                📱 Back to Mobile Login
              </button>
            </div>
          </form>
        )}

        {/* ── 3 Value Props with Vertical Dividers (1:1 Exact Match) ── */}
        <div className="grid grid-cols-3 gap-0 mt-5 pt-4 border-t border-slate-100">
          {/* Column 1: Fast & Secure */}
          <div className="flex flex-col items-center text-center px-1">
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center mb-1 text-[#0070F3]">
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="text-xs font-bold text-slate-800 leading-tight">
              Fast &amp; Secure
            </div>
            <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              One click login
            </div>
          </div>

          {/* Column 2: No Extra Steps (with left & right border lines) */}
          <div className="flex flex-col items-center text-center px-1 border-x border-slate-100">
            <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center mb-1 text-[#7928CA]">
              <Users className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="text-xs font-bold text-slate-800 leading-tight">
              No Extra Steps
            </div>
            <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Quick access
            </div>
          </div>

          {/* Column 3: Your Data is Safe */}
          <div className="flex flex-col items-center text-center px-1">
            <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center mb-1 text-[#00CC88]">
              <Lock className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="text-xs font-bold text-slate-800 leading-tight">
              Your Data is Safe
            </div>
            <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              We never share your information
            </div>
          </div>
        </div>

        {/* ── Footer Terms Notice ── */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium leading-relaxed">
          By continuing, you agree to our{' '}
          <a href="#terms" className="text-blue-600 hover:underline">Terms of Service</a>{' '}
          and{' '}
          <a href="#terms" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </div>

      </div>
    </div>
  );
};
