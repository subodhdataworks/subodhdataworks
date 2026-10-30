import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './MobileLoggedInHero.css';

/**
 * Hero Banner for LOGGED-IN Mobile Homepage.
 * - Plays the approved "Practical Learning Ecosystem" promo video (replaces the static poster image).
 * - Autoplays muted + inline + looped (Android Chrome / iOS Safari compliant).
 * - Pauses when scrolled out of view or tab hidden to save battery/CPU.
 * - Optional user-activated sound toggle.
 * - Whole banner is tappable and connects to the real learning/course route.
 * - Zero backend queries, 100% frontend.
 */

const HERO_VIDEO_SRC = '/videos/mobile_hero_banner_v2.mp4';
const HERO_POSTER_SRC = '/images/dashboard/mobile_hero_banner_v2_poster.jpg';

export interface MobileLoggedInHeroProps {
  onContinueLearning: () => void;
  playClick?: () => void;
}

export const MobileLoggedInHero: React.FC<MobileLoggedInHeroProps> = ({
  onContinueLearning,
  playClick,
}) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  // Autoplay when visible, pause when off-screen / tab hidden
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
    <div className="ple-hero-wrapper" aria-label="Practical Learning Ecosystem - Learn AI & Data Skills">
      <section
        ref={cardRef}
        className="ple-banner-card ple-banner-card--video"
        role="button"
        tabIndex={0}
        aria-label="Continue Learning"
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
      >
        <video
          ref={videoRef}
          className="ple-banner-img"
          src={HERO_VIDEO_SRC}
          poster={HERO_POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Practical Learning Ecosystem - Student in Future IT hoodie with friendly AI Robot"
        />

        {/* Sound toggle */}
        <button
          type="button"
          className="ple-sound-btn"
          aria-pressed={!muted}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          title={muted ? 'Unmute' : 'Mute'}
          onClick={toggleSound}
        >
          {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </section>
    </div>
  );
};

export default MobileLoggedInHero;
