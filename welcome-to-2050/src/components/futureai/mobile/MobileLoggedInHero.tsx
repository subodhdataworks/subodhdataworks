import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import './MobileLoggedInHero.css';

/**
 * Ultra-Premium Animated Hero Banner for LOGGED-IN Mobile Homepage.
 * - Based on the approved "Practical Learning ECOSYSTEM" design.
 * - Features the enthusiastic Indian student bursting through the torn poster & cute AI Robot.
 * - Layered with smooth CSS animations (shimmer sweep, twinkling stars, cyan aura).
 * - Interactive AI Robot Speech Bubble with live typewriter text.
 * - Optional user-activated robot voice (Web Speech API, muted by default).
 * - NO external Python/SQL cards (as requested: "python sql wala icon nhi hoga").
 * - Connects to the real learning/course routes.
 * - Zero backend queries, 100% frontend performance.
 */

const ROBOT_MESSAGES = [
  'Hey! Ready to learn coding? 🚀',
  'Play Games. Build Real Projects! 🎮',
  'Practice Python, SQL & AI! ⚡',
  "Let's Get You Job-Ready! 💼",
];

export interface MobileLoggedInHeroProps {
  onContinueLearning: () => void;
  playClick?: () => void;
}

export const MobileLoggedInHero: React.FC<MobileLoggedInHeroProps> = ({
  onContinueLearning,
  playClick,
}) => {
  const [msgIdx, setMsgIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const soundOnRef = useRef(false);

  // Typewriter animation loop (paused when tab is hidden)
  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const message = ROBOT_MESSAGES[msgIdx];
    let i = 0;

    const schedule = (fn: () => void, ms: number) => {
      timer = setTimeout(() => {
        if (cancelled) return;
        if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
          schedule(fn, 1000);
          return;
        }
        fn();
      }, ms);
    };

    const next = () => setMsgIdx((p) => (p + 1) % ROBOT_MESSAGES.length);

    // Optional user-enabled voice
    if (soundOnRef.current && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(message.replace(/[^\p{L}\p{N}\s.,!?&']/gu, ''));
        u.lang = 'en-IN';
        u.rate = 1.05;
        u.pitch = 1.25;
        window.speechSynthesis.speak(u);
      } catch {}
    }

    setTyped('');
    setIsTyping(true);
    const typeChar = () => {
      i += 1;
      setTyped(message.slice(0, i));
      if (i < message.length) {
        schedule(typeChar, 45);
      } else {
        setIsTyping(false);
        schedule(next, 2400);
      }
    };
    schedule(typeChar, 300);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [msgIdx]);

  // Clean up speech synthesis on unmount
  useEffect(
    () => () => {
      try {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
      } catch {}
    },
    []
  );

  const toggleSound = () => {
    const nextVal = !soundOn;
    setSoundOn(nextVal);
    soundOnRef.current = nextVal;
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        if (nextVal) {
          const u = new SpeechSynthesisUtterance(ROBOT_MESSAGES[msgIdx].replace(/[^\p{L}\p{N}\s.,!?&']/gu, ''));
          u.lang = 'en-IN';
          u.pitch = 1.25;
          window.speechSynthesis.speak(u);
        }
      }
    } catch {}
  };

  return (
    <div className="ple-hero-wrapper" aria-label="Practical Learning Ecosystem - Learn AI & Data Skills">
      {/* ─── Main Animated Hero Card (Poster Tear Reveal) ─── */}
      <section className="ple-banner-card">
        {/* Core Artwork Banner */}
        <img
          src="/images/dashboard/practical_learning_ecosystem_banner_hd.webp"
          alt="Practical Learning Ecosystem - Student in Future IT hoodie bursting through torn poster with friendly AI Robot"
          className="ple-banner-img"
          width={1080}
          height={620}
          loading="eager"
          decoding="async"
        />

        {/* Shimmer light sweep across the torn poster */}
        <div className="ple-shimmer" aria-hidden />

        {/* Twinkling Stars */}
        <i className="ple-star" style={{ top: '8%', left: '4%', width: 10, height: 10, animationDelay: '0s' }} aria-hidden />
        <i className="ple-star" style={{ top: '3%', right: '15%', width: 8, height: 8, animationDelay: '-1.2s' }} aria-hidden />
        <i className="ple-star" style={{ bottom: '12%', right: '4%', width: 9, height: 9, animationDelay: '-0.6s' }} aria-hidden />
        <i className="ple-star" style={{ top: '48%', left: '16%', width: 7, height: 7, animationDelay: '-2s' }} aria-hidden />

        {/* Cyan Robot Aura Glow */}
        <div className="ple-robot-glow" aria-hidden />
        {/* Thumbs-up Sparkle */}
        <i className="ple-robot-sparkle" aria-hidden />

        {/* Animated Typing Speech Bubble over AI Robot */}
        <div className="ple-speech-bubble" role="status" aria-live="polite">
          {typed}
          {isTyping && <span className="ple-caret" aria-hidden />}
        </div>

        {/* Optional Voice Toggle */}
        {typeof window !== 'undefined' && 'speechSynthesis' in window && (
          <button
            type="button"
            className="ple-sound-btn"
            aria-pressed={soundOn}
            aria-label={soundOn ? 'Mute AI robot voice' : 'Listen to AI robot voice'}
            title={soundOn ? 'Mute robot' : 'Listen to robot'}
            onClick={toggleSound}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        )}

        {/* Primary Call-to-Action Button */}
        <button
          type="button"
          onClick={() => {
            playClick?.();
            onContinueLearning();
          }}
          className="ple-cta-btn"
        >
          <span>Continue Learning</span>
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>
      </section>
    </div>
  );
};

export default MobileLoggedInHero;
