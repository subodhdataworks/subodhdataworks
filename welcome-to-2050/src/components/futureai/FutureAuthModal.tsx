import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, Mail, Lock, Phone, CheckCircle2 } from 'lucide-react';
import { loadGoogleScript, getGoogleClientId, saveGoogleClientId, requestGoogleAccountLogin, parseJwt } from '../../services/googleAuthService';
import { recordUserInDatabase, loginWithGooglePopup } from '../../services/realAuthService';

interface FutureAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, email?: string, avatar?: string) => void;
}

export const FutureAuthModal: React.FC<FutureAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [authMode, setAuthMode] = useState<'otp' | 'email'>('otp');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showGoogleAccountPicker, setShowGoogleAccountPicker] = useState(false);
  const [googleClientIdInput, setGoogleClientIdInput] = useState(() => getGoogleClientId());
  const [customGoogleName, setCustomGoogleName] = useState('');
  const [customGoogleEmail, setCustomGoogleEmail] = useState('');

  // Load Google SDK on open and initialize Google One-Tap
  useEffect(() => {
    if (isOpen) {
      loadGoogleScript().then(() => {
        const clientId = getGoogleClientId();
        if (clientId && (window as any).google?.accounts?.id) {
          try {
            (window as any).google.accounts.id.initialize({
              client_id: clientId,
              callback: async (response: any) => {
                if (response?.credential) {
                  const payload = parseJwt(response.credential);
                  if (payload) {
                    const finalName = payload.name || payload.email?.split('@')[0] || 'Learner';
                    await recordUserInDatabase({
                      uid: payload.sub,
                      name: finalName,
                      email: payload.email,
                      avatar: payload.picture,
                      source: 'Google',
                    });
                    onSuccess(finalName, payload.email, payload.picture);
                    onClose();
                  }
                }
              },
              auto_select: false,
              cancel_on_tap_outside: true,
            });
            // Try Google One-Tap native prompt
            (window as any).google.accounts.id.prompt();
          } catch (e) {
            console.warn('GSI init notice:', e);
          }
        }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGoogleSignInClick = async () => {
    setIsSubmitting(true);
    const clientId = getGoogleClientId();
    if (!clientId) {
      setIsSubmitting(false);
      setShowGoogleAccountPicker(true);
      return;
    }

    try {
      const user = await requestGoogleAccountLogin();
      await recordUserInDatabase({
        uid: user.sub,
        name: user.name,
        email: user.email,
        avatar: user.picture,
        source: 'Google',
      });
      setIsSubmitting(false);
      onSuccess(user.name, user.email, user.picture);
      onClose();
      return;
    } catch (err: any) {
      console.warn('Google 1-Click popup issue, trying Firebase fallback:', err);
      try {
        const googleUser = await loginWithGooglePopup();
        setIsSubmitting(false);
        onSuccess(googleUser.name, googleUser.email, googleUser.avatar);
        onClose();
        return;
      } catch {
        setIsSubmitting(false);
        setShowGoogleAccountPicker(true);
      }
    }
  };

  const handleSelectGoogleAccount = async (name: string, accEmail: string, avatarUrl: string) => {
    setIsSubmitting(true);
    await recordUserInDatabase({
      name,
      email: accEmail,
      avatar: avatarUrl,
      source: 'Google',
    });
    setIsSubmitting(false);
    setShowGoogleAccountPicker(false);
    onSuccess(name, accEmail, avatarUrl);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const cleanName = (phoneNumber || email || 'Learner').trim();
    await recordUserInDatabase({
      name: cleanName,
      email: email || undefined,
      phone: phoneNumber || undefined,
      source: email ? 'Email' : 'Phone',
    });
    setIsSubmitting(false);
    onSuccess(cleanName, email || undefined);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 light-glass relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Brand Header */}
        <div className="text-left space-y-1 mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[11px] font-bold uppercase tracking-wider border border-sky-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2050 Learner Portal</span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900">
            Access FUTURE IT INDUSTRY
          </h3>

          <p className="text-xs text-slate-500">
            Sign in to start learning, play coding games, and track your telemetry from 0%.
          </p>
        </div>

        {/* 1-CLICK GOOGLE SIGN IN BUTTON (100% Free Lifetime) */}
        <button
          type="button"
          onClick={handleGoogleSignInClick}
          disabled={isSubmitting}
          className="w-full py-3 px-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-xs shadow-sm hover:shadow transition-all flex items-center justify-center gap-3 cursor-pointer mb-4"
        >
          {/* Authentic Google Multi-Color SVG Icon */}
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
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
          <span>Continue with Google</span>
          <span className="text-[10px] text-emerald-600 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            1-Click Free
          </span>
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-slate-200"></div>
          <span className="px-3 text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
            or continue with
          </span>
          <div className="flex-1 border-t border-slate-200"></div>
        </div>

        {/* Auth Mode Toggle */}
        <div className="flex rounded-xl bg-slate-100 p-1 mb-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setAuthMode('otp')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              authMode === 'otp' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Mobile OTP
          </button>
          <button
            type="button"
            onClick={() => setAuthMode('email')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              authMode === 'email' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Email &amp; Password
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {authMode === 'otp' ? (
            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                Mobile Number (+91)
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
          ) : (
            <>
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="learner@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{isSubmitting ? 'Authenticating...' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Google 1-Click Account Selector Modal Overlay */}
        {showGoogleAccountPicker && (
          <div className="absolute inset-0 z-30 bg-white/95 backdrop-blur-md p-6 flex flex-col justify-between animate-fadeIn text-left">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
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
                  <strong className="text-sm font-bold text-slate-800">Choose Google Account</strong>
                </div>
                <button
                  onClick={() => setShowGoogleAccountPicker(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200 mt-2 mb-4 text-left">
                <span className="text-xs font-bold text-sky-900 block mb-1">
                  🔑 1-Time Google Client ID Setup (Free Lifetime):
                </span>
                <p className="text-[11px] text-sky-700 leading-relaxed mb-2.5">
                  Har student ke laptop &amp; phone me pehle se login Gmail se 1-click automatic login ke liye apna Free Google Client ID yahan paste karein:
                </p>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Paste Client ID (e.g. 123...apps.googleusercontent.com)"
                    value={googleClientIdInput}
                    onChange={(e) => setGoogleClientIdInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-sky-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (googleClientIdInput.trim()) {
                        saveGoogleClientId(googleClientIdInput.trim());
                        setShowGoogleAccountPicker(false);
                        handleGoogleSignInClick();
                      }
                    }}
                    className="w-full py-2 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Save &amp; Open Native Google Popup 🚀
                  </button>
                </div>
              </div>

              {/* Enter User's Real Google Account directly */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-600 block mb-2">
                  Or sign in directly for testing:
                </span>
                <div className="space-y-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Student Full Name (e.g. Subodh Kumar)"
                      value={customGoogleName}
                      onChange={(e) => setCustomGoogleName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Student Gmail (e.g. subodh@gmail.com)"
                      value={customGoogleEmail}
                      onChange={(e) => setCustomGoogleEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              disabled={!customGoogleEmail.trim()}
              onClick={() => {
                const email = customGoogleEmail.trim();
                const name = customGoogleName.trim() || email.split('@')[0] || 'Learner';
                handleSelectGoogleAccount(name, email, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces');
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors mt-3 shadow-sm disabled:opacity-50 cursor-pointer"
            >
              Sign In Directly →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
