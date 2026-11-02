import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2, Minimize2 } from 'lucide-react';

/**
 * Desktop Logged-In Hero Video Banner
 * Compact panoramic cinematic banner (target height: 280–340px) matching the
 * user reference UI specification.
 *
 * Features:
 * - Wide 16:9 video source rendered inside a compact responsive panoramic banner (280–340px desktop).
 * - object-fit: cover with tuned object-position (center 36%) to prevent unnecessary cropping.
 * - Working video controls: Play/Pause, Live dynamic time indicator, Interactive scrubber seek bar,
 *   Mute/Unmute audio toggle, and Native Fullscreen toggle.
 * - IntersectionObserver to pause playback when out of view / tab hidden to save CPU/GPU.
 * - Respects prefers-reduced-motion media query.
 * - Full click accessibility to continue learning.
 */

const HERO_VIDEO_SRC = '/videos/mobile_hero_banner_v2.mp4';
const HERO_POSTER_SRC = '/images/dashboard/mobile_hero_banner_v2_poster.jpg';

export interface DesktopLoggedInHeroProps {
  onContinueLearning: () => void;
  playClick?: () => void;
}

export const DesktopLoggedInHero: React.FC<DesktopLoggedInHeroProps> = ({
  onContinueLearning,
  playClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Autoplay when visible, pause when off-screen / tab hidden to save battery & resources
  useEffect(() => {
    const vid = videoRef.current;
    const container = containerRef.current;
    if (!vid || !container) return;

    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    vid.setAttribute('muted', '');
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', 'true');

    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      vid.pause();
      setIsPlaying(false);
      return;
    }

    let isIntersecting = true;
    const tryPlay = () => {
      if (!isIntersecting || document.visibilityState === 'hidden') return;
      const p = vid.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      } else {
        setIsPlaying(true);
      }
    };

    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) => {
              isIntersecting = entry.isIntersecting;
              if (isIntersecting) {
                tryPlay();
              } else {
                vid.pause();
                setIsPlaying(false);
              }
            },
            { threshold: 0.2 }
          )
        : null;
    io?.observe(container);

    const onVis = () => {
      if (document.visibilityState === 'hidden') {
        vid.pause();
        setIsPlaying(false);
      } else {
        tryPlay();
      }
    };
    document.addEventListener('visibilitychange', onVis);

    const onTimeUpdate = () => {
      setCurrentTime(vid.currentTime);
      if (vid.duration && !isNaN(vid.duration)) {
        setDuration(vid.duration);
      }
    };

    const onLoadedMetadata = () => {
      if (vid.duration && !isNaN(vid.duration)) {
        setDuration(vid.duration);
      }
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    vid.addEventListener('timeupdate', onTimeUpdate);
    vid.addEventListener('loadedmetadata', onLoadedMetadata);
    vid.addEventListener('play', onPlay);
    vid.addEventListener('pause', onPause);

    tryPlay();

    return () => {
      io?.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      vid.removeEventListener('timeupdate', onTimeUpdate);
      vid.removeEventListener('loadedmetadata', onLoadedMetadata);
      vid.removeEventListener('play', onPlay);
      vid.removeEventListener('pause', onPause);
    };
  }, []);

  // Listen for fullscreen change
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick?.();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick?.();
    const vid = videoRef.current;
    if (!vid) return;
    const next = !muted;
    vid.muted = next;
    setMuted(next);
    if (!next && vid.paused) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick?.();
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const bar = progressBarRef.current;
    const vid = videoRef.current;
    if (!bar || !vid || !duration) return;
    const rect = bar.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    vid.currentTime = pos * duration;
    setCurrentTime(vid.currentTime);
  };

  const formatTime = (sec: number) => {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="w-full select-none" aria-label="Practical Learning Ecosystem Banner">
      <div
        ref={containerRef}
        role="button"
        tabIndex={0}
        aria-label="Continue Learning - World's First Practical Learning Ecosystem"
        onClick={() => {
          playClick?.();
          onContinueLearning();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            playClick?.();
            onContinueLearning();
          }
        }}
        className="group relative w-full h-[240px] sm:h-[265px] md:h-[290px] lg:h-[315px] xl:h-[335px] max-h-[345px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/90 bg-[#030712] cursor-pointer"
        style={{
          background: 'linear-gradient(90deg, #024da1 0%, #06318e 25%, #0b2278 50%, #171d79 75%, #58119c 100%)',
        }}
      >
        {/* Main Video (Cover with carefully tuned object-position center 36% so faces and graphics remain balanced) */}
        <video
          ref={videoRef}
          src={HERO_VIDEO_SRC}
          poster={HERO_POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-[center_36%] transition-transform duration-500 group-hover:scale-[1.01]"
          aria-label="World's First Practical Learning Ecosystem - Future IT Industry"
        />

        {/* Ambient Subtle Lighting Overlay */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.02] transition-colors pointer-events-none" />

        {/* Cinematic Video Player Bottom Controls Bar (Matches User Reference Image) */}
        <div
          className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between text-white text-xs z-20 backdrop-blur-[2px]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left: Play/Pause Toggle & Dynamic Time */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 active:scale-95 transition-all focus:outline-none"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>
            <span className="font-mono text-[11px] sm:text-xs text-white/90 select-none">
              {formatTime(currentTime)} / {formatTime(duration || 10)}
            </span>
          </div>

          {/* Center: Scrubber Track */}
          <div
            ref={progressBarRef}
            onClick={handleSeek}
            className="flex-1 mx-3 sm:mx-5 h-1.5 bg-white/30 hover:h-2 rounded-full overflow-hidden cursor-pointer relative group/track transition-all"
            title="Seek video"
            role="slider"
            aria-valuenow={currentTime}
            aria-valuemin={0}
            aria-valuemax={duration}
            tabIndex={0}
          >
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full relative transition-[width] duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Right: Sound Toggle & Fullscreen Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="p-1 rounded-full hover:bg-white/20 active:scale-95 transition-all focus:outline-none"
              onClick={toggleSound}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              title={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-300" />}
            </button>
            <button
              type="button"
              className="p-1 rounded-full hover:bg-white/20 active:scale-95 transition-all focus:outline-none"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopLoggedInHero;
