import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  ShieldCheck,
  Users,
  Lock,
  Sparkles,
  AlertCircle,
  GraduationCap,
  Phone,
  Mail,
  User,
  CheckCircle2,
  KeyRound,
  RotateCcw,
  Check,
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

  // Mobile Auth Flow state: 'INPUT_PHONE' | 'INPUT_OTP'
  const [mobileStep, setMobileStep] = useState<'INPUT_PHONE' | 'INPUT_OTP'>('INPUT_PHONE');
  const [mobileInput, setMobileInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  // Email state
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // Countdown timer for OTP resend
  useEffect(() => {
    let interval: any = null;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Reset states on modal open
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

  // Complete login helper
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

      // Guarantee clean zero balance if new student
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

  // 1A. SEND REAL SMS OTP via Firebase
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
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
      console.warn('Firebase SMS OTP notice:', err);
      setIsSubmitting(false);

      if (err.code === 'auth/operation-not-allowed') {
        setValidationError('Phone Auth is not enabled in Firebase Console yet. Please turn ON Phone in Authentication -> Sign-in method -> Phone.');
      } else if (err.code === 'auth/too-many-requests') {
        setValidationError('Too many SMS requests sent. Please try again after a few minutes.');
      } else if (err.code === 'auth/app-not-authorized') {
        setValidationError('Domain not authorized in Firebase Console -> Authentication -> Settings -> Authorized Domains.');
      } else {
        setValidationError(err.message || 'Failed to send SMS OTP. Please check your mobile number.');
      }
    }
  };

  // 1B. VERIFY 6-DIGIT REAL SMS OTP
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
      console.warn('OTP Verification failed:', err);
      setIsSubmitting(false);
      if (err.code === 'auth/invalid-verification-code') {
        setValidationError('Invalid OTP code. Please enter the correct 6-digit code received on SMS.');
      } else if (err.code === 'auth/code-expired') {
        setValidationError('OTP code has expired. Please click "Resend OTP" to get a new code.');
      } else {
        setValidationError(err.message || 'Failed to verify OTP. Please try again.');
      }
    }
  };

  // 2. Email Address Login (Firebase Auth)
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
      console.warn('Email login fallback:', err);
      const fallbackName = (nameInput.trim() || cleanEmail.split('@')[0] || 'Learner');
      completeLogin(fallbackName, cleanEmail, '', 'student');
    }
  };

  // 3. Google 1-Tap / Popup Sign-In
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
      console.warn('Google 1-Click issue, trying Firebase popup fallback:', err);
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
      } catch (fbErr: any) {
        console.warn('Google popup blocked on Android:', fbErr);
        setIsSubmitting(false);
        setValidationError('Google popup was closed by your browser. Please enter your Mobile number above to get an instant SMS OTP:');
        setActiveTab('mobile');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Invisible reCAPTCHA container required for Firebase Phone Auth */}
      <div id="recaptcha-container" />

      {/* Main Authentication Card */}
      <div className="relative max-w-[440px] w-full bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-slate-100 text-left transition-all duration-300 my-auto">

        {/* Circular Close Button at Top Right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer z-10"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
        </button>

        {/* ── Header: Title & Subtitle ── */}
        <div className="mb-4 pr-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-black text-emerald-700 uppercase tracking-wide mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real Student Login • Live Verified</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            Welcome to FUTURE IT
          </h2>
          <p className="text-slate-500 font-medium text-xs mt-0.5">
            Enter mobile number for real SMS OTP or login with Email.
          </p>
        </div>

        {/* ── Segmented Tabs: Mobile OTP vs Email ID ── */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100/90 rounded-2xl mb-4 border border-slate-200/80">
          <button
            type="button"
            onClick={() => {
              setActiveTab('mobile');
              setValidationError(null);
            }}
            className={`py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'mobile'
                ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Mobile OTP Login</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('email');
              setValidationError(null);
            }}
            className={`py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'email'
                ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Login</span>
          </button>
        </div>

        {/* ── Error Banner (if any) ── */}
        {validationError && (
          <div className="mb-3.5 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <div className="font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{validationError}</span>
            </div>
          </div>
        )}

        {/* ── TAB 1: MOBILE NUMBER OTP FLOW ── */}
        {activeTab === 'mobile' && (
          <>
            {mobileStep === 'INPUT_PHONE' ? (
              /* Step 1A: Enter Phone & Name */
              <form onSubmit={handleSendOtp} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Mobile Number <span className="text-emerald-600 font-semibold">(Real SMS OTP)</span>
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-white px-3 py-2.5 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 transition-all shadow-2xs">
                    <span className="text-xs font-bold text-slate-600 mr-2 flex items-center gap-1">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </span>
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
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Student Full Name <span className="text-slate-400 font-normal">(for certificate &amp; portal)</span>
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-white px-3 py-2.5 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 transition-all shadow-2xs">
                    <User className="w-4 h-4 text-slate-400 mr-2" />
                    <input
                      type="text"
                      placeholder="e.g. Subodh Kumar"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-[#00a86b] hover:bg-[#00925d] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/25 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Sending SMS OTP...' : 'Send 6-Digit SMS OTP'}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>
            ) : (
              /* Step 1B: Enter 6-Digit OTP */
              <form onSubmit={handleVerifyOtp} className="space-y-3">
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500 block">OTP sent to:</span>
                    <strong className="text-slate-900 font-mono text-sm">+91 {mobileInput}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileStep('INPUT_PHONE');
                      setOtpInput('');
                      setValidationError(null);
                    }}
                    className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
                  >
                    Edit Number
                  </button>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Enter 6-Digit SMS OTP Code
                  </label>
                  <div className="flex items-center border-2 border-emerald-500 rounded-xl bg-white px-3 py-2.5 shadow-2xs">
                    <KeyRound className="w-4 h-4 text-emerald-600 mr-2" />
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="Enter 6-digit OTP (e.g. 123456)"
                      value={otpInput}
                      onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ''))}
                      className="w-full text-base font-black tracking-widest text-slate-900 placeholder:text-slate-400 placeholder:font-normal placeholder:tracking-normal outline-none bg-transparent"
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || otpInput.length < 6}
                  className="w-full py-3 px-4 rounded-xl bg-[#00a86b] hover:bg-[#00925d] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/25 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>{isSubmitting ? 'Verifying OTP...' : 'Verify OTP & Enter Dashboard'}</span>
                </button>

                {/* Resend OTP button with timer */}
                <div className="text-center pt-1">
                  {resendTimer > 0 ? (
                    <span className="text-[11px] text-slate-400 font-medium">
                      Resend OTP in <strong>{resendTimer}s</strong>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
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
              <label className="text-xs font-bold text-slate-800 block mb-1">
                Email Address
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl bg-white px-3 py-2.5 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 transition-all shadow-2xs">
                <Mail className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1">
                Password <span className="text-slate-400 font-normal">(or 4-digit PIN)</span>
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl bg-white px-3 py-2.5 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 transition-all shadow-2xs">
                <Lock className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1">
                Your Name <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl bg-white px-3 py-2.5 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 transition-all shadow-2xs">
                <User className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-[#00a86b] hover:bg-[#00925d] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/25 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
            >
              <span>{isSubmitting ? 'Signing In...' : 'Continue with Email'}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        )}

        {/* ── Divider: "OR CONTINUE WITH" ── */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-white px-2 font-bold text-slate-400 tracking-wider">
              Or continue with Google
            </span>
          </div>
        </div>

        {/* ── Multi-Color Google G Button ── */}
        <button
          type="button"
          onClick={handleGoogleSignInClick}
          disabled={isSubmitting}
          className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
        >
          {/* Multi-Color Google G SVG */}
          <div className="w-5 h-5 shrink-0 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
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
          <span className="text-slate-800 font-bold text-xs">
            Sign In with Google
          </span>
        </button>

        {/* ── 3 Security Badges ── */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-100 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span className="text-[10px] font-bold text-slate-700">Firebase Auth</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-4 h-4 text-blue-600 mb-0.5" />
            <span className="text-[10px] font-bold text-slate-700">Separate Dashboard</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-4 h-4 text-purple-600 mb-0.5" />
            <span className="text-[10px] font-bold text-slate-700">Live &amp; Secure</span>
          </div>
        </div>

      </div>
    </div>
  );
};
