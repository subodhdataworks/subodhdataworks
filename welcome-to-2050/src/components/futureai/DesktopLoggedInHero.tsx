import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Desktop Logged-In Hero Video Banner
 * Displays the "World's First Practical Learning Ecosystem" promotional video banner
 * matching the mobile logged-in experience, optimized with:
 * - Autoplay, loop, muted by default with sound toggle
 * - IntersectionObserver to save GPU/CPU when out of viewport or hidden
 * - 16:9 aspect ratio centered card with elegant border and shadow
 * - Full keyboard & click accessibility
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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  // Autoplay when visible, pause when off-screen / tab hidden to save battery & resources
  useEffect(() => {
    const vid = videoRef.current;
    const card = cardRef.current;
    if (!vid || !card) return;

    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    vid.setAttribute('muted', '');
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', 'true');

    let visible = true;
    const tryPlay = () => {
      if (!visible || document.visibilityState === 'hidden') return;
      const p = vid.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) => {
              visible = entry.isIntersecting;
              if (visible) tryPlay();
              else vid.pause();
            },
            { threshold: 0.25 }
          )
        : null;
    io?.observe(card);

    const onVis = () => (document.visibilityState === 'hidden' ? vid.pause() : tryPlay());
    document.addEventListener('visibilitychange', onVis);
    tryPlay();

    return () => {
      io?.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    const next = !muted;
    vid.muted = next;
    setMuted(next);
    if (!next) {
      const p = vid.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }
  };

  return (
    <section className="w-full flex justify-center select-none" aria-label="Practical Learning Ecosystem Banner">
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        aria-label="Continue Learning - Practical Learning Ecosystem"
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
        className="group relative w-full max-w-5xl rounded-2xl lg:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/90 aspect-video bg-white cursor-pointer"
      >
        <video
          ref={videoRef}
          src={HERO_VIDEO_SRC}
          poster={HERO_POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          aria-label="World's First Practical Learning Ecosystem - Future IT Industry"
        />

        {/* Subtle ambient lighting sweep */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.02] transition-colors pointer-events-none" />

        {/* Audio Toggle Control */}
        <button
          type="button"
          className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/85 active:scale-95 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg border border-white/20 flex items-center justify-center z-10"
          aria-pressed={!muted}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          title={muted ? 'Unmute' : 'Mute'}
          onClick={toggleSound}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </section>
  );
};

export default DesktopLoggedInHero;
