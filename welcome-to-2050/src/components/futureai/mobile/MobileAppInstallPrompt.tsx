import React, { useState, useEffect } from 'react';
import {
  Download,
  X,
  Sparkles,
  ShieldCheck,
  Zap,
  Smartphone,
  Share2,
  PlusSquare,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import {
  isStandaloneMode,
  isIosDevice,
  canPromptInstall,
  isAppInstalled,
  subscribePwaState,
  triggerNativeInstall
} from '../../../services/pwaInstallService';

export const MobileAppInstallPrompt: React.FC = () => {
  const [isStandalone, setIsStandalone] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [hasPrompt, setHasPrompt] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [installing, setInstalling] = useState(false);

  useEffect(() => {
    // Initial check
    setIsStandalone(isStandaloneMode());
    setIsInstalled(isAppInstalled());
    setHasPrompt(canPromptInstall());

    // Check if dismissed in this session
    const dismissedSession = sessionStorage.getItem('futureai_install_dismissed') === 'true';
    setIsDismissed(dismissedSession);

    // Subscribe to PWA state changes (e.g. beforeinstallprompt or appinstalled)
    const unsubscribe = subscribePwaState(() => {
      setIsStandalone(isStandaloneMode());
      setIsInstalled(isAppInstalled());
      setHasPrompt(canPromptInstall());
    });

    return () => unsubscribe();
  }, []);

  // Do not show if already opened in standalone mode, already installed, dismissed, or during interview/workspace
  const isInterviewOrWorkspace =
    typeof window !== 'undefined' &&
    (window.location.hash.includes('interview') ||
      window.location.hash.includes('workspace') ||
      window.location.hash.includes('practice'));

  if (isStandalone || isInstalled || isDismissed || isInterviewOrWorkspace) {
    return null;
  }

  const handleInstallClick = async () => {
    setInstalling(true);
    try {
      if (canPromptInstall()) {
        const result = await triggerNativeInstall();
        if (result === 'accepted') {
          setIsDismissed(true);
        }
      } else {
        // Fallback for iOS Safari or browsers without beforeinstallprompt event
        setShowIosGuide(true);
      }
    } finally {
      setInstalling(false);
    }
  };

  const handleDismiss = () => {
    sessionStorage.setItem('futureai_install_dismissed', 'true');
    setIsDismissed(true);
  };

  return (
    <>
      {/* ── Slide-up Android PWA Install Card ── */}
      <div className="fixed bottom-20 left-3 right-3 z-50 md:hidden animate-slideUp">
        <div className="bg-slate-900/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 shadow-2xl text-left select-none relative overflow-hidden">
          {/* Neon ambient glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleDismiss}
            aria-label="Close"
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Header with App Icon */}
          <div className="flex items-start gap-3 mb-3 pr-6">
            <div className="relative flex-shrink-0">
              <img
                src="/pwa-192x192.png"
                alt="FUTURE AI App"
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-blue-500/40 shadow-lg"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h4 className="text-sm font-black text-white tracking-tight leading-tight">
                  FUTURE AI Android App
                </h4>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full tracking-wider uppercase">
                  App Mode
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                बिना ब्राउज़र URL बार के, 100% फुल स्क्रीन में चलाएं!
              </p>
            </div>
          </div>

          {/* Micro Features Badge Row */}
          <div className="grid grid-cols-3 gap-1.5 mb-3.5 text-[10px] text-slate-300 font-semibold">
            <div className="flex items-center gap-1 bg-slate-800/70 border border-slate-700/60 px-2 py-1 rounded-lg">
              <Smartphone className="w-3 h-3 text-blue-400 flex-shrink-0" />
              <span className="truncate">Full Screen</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-800/70 border border-slate-700/60 px-2 py-1 rounded-lg">
              <Zap className="w-3 h-3 text-amber-400 flex-shrink-0" />
              <span className="truncate">Ultra Fast</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-800/70 border border-slate-700/60 px-2 py-1 rounded-lg">
              <ShieldCheck className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span className="truncate">100% Safe</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleInstallClick}
              disabled={installing}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-xs py-2.5 px-4 rounded-xl shadow-lg shadow-blue-600/30 active:scale-98 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>{installing ? 'Opening Install...' : 'Install App (ऐप डाउनलोड करें)'}</span>
            </button>

            <button
              onClick={handleDismiss}
              className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold active:scale-98 transition-all cursor-pointer"
            >
              Later
            </button>
          </div>
        </div>
      </div>

      {/* ── Visual Guide Modal (For iOS / Browsers where prompt is manual) ── */}
      {showIosGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 max-w-sm w-full text-left select-none relative shadow-2xl">
            <button
              onClick={() => setShowIosGuide(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="/pwa-192x192.png"
                alt="App Icon"
                className="w-12 h-12 rounded-2xl ring-2 ring-blue-500"
              />
              <div>
                <h3 className="text-base font-black text-white">Add to Home Screen</h3>
                <p className="text-xs text-blue-400">होम स्क्रीन में ऐप जोड़ें</p>
              </div>
            </div>

            <div className="space-y-3.5 my-4">
              <div className="flex items-start gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-black text-xs flex-shrink-0">
                  1
                </div>
                <div className="text-xs text-slate-200">
                  {isIosDevice() ? (
                    <>
                      Safari ब्राउज़र के नीचे <strong>Share</strong> बटन{' '}
                      <Share2 className="w-3.5 h-3.5 inline text-blue-400" /> पर टैप करें।
                    </>
                  ) : (
                    <>
                      ब्राउज़र के ऊपर <strong>3 डॉट्स (⋮)</strong> मेनू पर टैप करें।
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                <div className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-black text-xs flex-shrink-0">
                  2
                </div>
                <div className="text-xs text-slate-200">
                  नीचे स्क्रॉल करके <strong>'Add to Home Screen' (होम स्क्रीन में जोड़ें)</strong>{' '}
                  <PlusSquare className="w-3.5 h-3.5 inline text-indigo-400" /> चुनें।
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                <div className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-black text-xs flex-shrink-0">
                  3
                </div>
                <div className="text-xs text-slate-200">
                  ऊपर <strong>'Add' (जोड़ें)</strong> पर टैप करें। ऐप आपके फोन की स्क्रीन पर इंस्टॉल हो जाएगा और बिना यूआरएल बार के खुलेगा!
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs active:scale-98 transition-all cursor-pointer"
            >
              Got it! (समझ गया)
            </button>
          </div>
        </div>
      )}
    </>
  );
};
