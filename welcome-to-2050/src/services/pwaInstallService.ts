// PWA Installation & Standalone Detection Service
// Handles 'beforeinstallprompt', standalone display-mode detection, and native Android install prompts.

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

type PwaListener = () => void;

let deferredPrompt: BeforeInstallPromptEvent | null = null;
const listeners: Set<PwaListener> = new Set();
let isInstalledState = false;

// Check if running in standalone mode (no browser URL bar, installed as PWA)
export function isStandaloneMode(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
    document.referrer.includes('android-app://') ||
    window.location.search.includes('source=pwa')
  );
}

// Check if iOS Safari
export function isIosDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua);
}

// Check if Android device
export function isAndroidDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /android/.test(window.navigator.userAgent.toLowerCase());
}

export function canPromptInstall(): boolean {
  return deferredPrompt !== null;
}

export function isAppInstalled(): boolean {
  return isInstalledState || isStandaloneMode();
}

export function subscribePwaState(callback: PwaListener): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function notifyListeners() {
  listeners.forEach((cb) => {
    try {
      cb();
    } catch (e) {
      console.error('[PWA Service] listener error', e);
    }
  });
}

// Initialize listeners immediately
if (typeof window !== 'undefined') {
  isInstalledState = isStandaloneMode();

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent default mini-infobar so our custom high-converting Android sheet shows
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    console.log('[PWA] beforeinstallprompt event captured and ready.');
    notifyListeners();
  });

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] App successfully installed!');
    deferredPrompt = null;
    isInstalledState = true;
    localStorage.setItem('futureai_pwa_installed', 'true');
    notifyListeners();
  });
}

// Trigger native prompt
export async function triggerNativeInstall(): Promise<'accepted' | 'dismissed' | 'unsupported'> {
  if (!deferredPrompt) {
    return 'unsupported';
  }

  try {
    await deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    console.log('[PWA] User response to install prompt:', choiceResult.outcome);
    if (choiceResult.outcome === 'accepted') {
      deferredPrompt = null;
      isInstalledState = true;
      notifyListeners();
    }
    return choiceResult.outcome;
  } catch (err) {
    console.warn('[PWA] Error triggering install prompt:', err);
    return 'unsupported';
  }
}
