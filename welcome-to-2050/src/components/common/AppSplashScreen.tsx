import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';

interface AppSplashScreenProps {
  onFinish?: () => void;
}

export const AppSplashScreen: React.FC<AppSplashScreenProps> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Dismiss splash smoothly
  const handleDismiss = () => {
    if (isFadingOut || !isVisible) return;
    setIsFadingOut(true);
    try {
      sessionStorage.setItem('futureai_app_splash_shown', 'true');
    } catch {
      // ignore
    }
    // Also remove the raw HTML splash if still present
    const rawSplash = document.getElementById('pwa-launch-splash');
    if (rawSplash) {
      rawSplash.style.opacity = '0';
      rawSplash.style.pointerEvents = 'none';
      setTimeout(() => {
        try {
          rawSplash.remove();
        } catch {
          rawSplash.style.display = 'none';
        }
      }, 500);
    }
    setTimeout(() => {
      setIsVisible(false);
      onFinish?.();
    }, 550);
  };

  useEffect(() => {
    // Hide raw HTML splash when React component mounts and takes control
    const rawSplash = document.getElementById('pwa-launch-splash');
    if (rawSplash) {
      // Connect existing video if already playing in HTML splash
      const rawVideo = document.getElementById('pwa-splash-video') as HTMLVideoElement | null;
      if (rawVideo && videoRef.current && !rawVideo.paused) {
        try {
          videoRef.current.currentTime = rawVideo.currentTime;
        } catch {
          // ignore
        }
      }
      rawSplash.style.display = 'none';
    }

    // Try to play video
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay policy fallback: already muted
      });
    }

    // Safety fallback: auto-dismiss after 8.5 seconds in case of stall
    const timer = setTimeout(() => {
      handleDismiss();
    }, 8500);

    return () => clearTimeout(timer);
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      setProgress(pct);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-[#030712] flex items-center justify-center overflow-hidden transition-opacity duration-500 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ touchAction: 'none' }}
    >
      {/* ── Vertical 9:16 Android Video ── */}
      <video
        ref={videoRef}
        src="/videos/app_intro_splash.mp4"
        poster="/videos/app_intro_splash_poster.jpg"
        autoPlay
        muted={isMuted}
        playsInline
        webkit-playsinline="true"
        onEnded={handleDismiss}
        onError={handleDismiss}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover sm:object-contain object-center"
      />

      {/* ── Top Bar Controls: Mute/Unmute & Skip ── */}
      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between z-20 pointer-events-auto">
        {/* Sound Toggle Pill */}
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 hover:bg-slate-900/90 text-white/90 border border-white/15 backdrop-blur-md text-[11px] font-bold shadow-lg active:scale-95 transition-all cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sound On</span>
            </>
          )}
        </button>

        {/* Skip Button with progress ring */}
        <button
          type="button"
          onClick={handleDismiss}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-cyan-500/40 backdrop-blur-md text-xs font-black shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer group"
        >
          <span>Skip</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* ── Bottom Ambient Progress Line ── */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-150"
          style={{ width: `${Math.min(100, progress)}%` }}
        />
      </div>
    </div>
  );
};
