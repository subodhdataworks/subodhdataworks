import React, { useState, useEffect, useMemo, useRef } from 'react';

export type TeacherMood = 'idle' | 'explaining' | 'celebrating' | 'loading' | 'error';

export interface HumanTeacherAvatarProps {
  isSpeaking: boolean;
  isPaused?: boolean;
  isExplanationStarted?: boolean;
  mood?: TeacherMood;
  currentStepIndex?: number;
  conceptKey?: string;
  activeWord?: string;
  size?: 'compact' | 'normal' | 'large';
  className?: string;
  language?: 'hi' | 'en';
}

type FrameKey = 'closed' | 'half' | 'open' | 'wide' | 'round' | 'blink';

// Pre-define all frames for Female (Hindi) and Male (English) Teacher personas
const FEMALE_FRAMES: Record<FrameKey, string> = {
  closed: '/teacher/frame_closed.jpg',
  half: '/teacher/frame_half.jpg',
  open: '/teacher/frame_open.jpg',
  wide: '/teacher/frame_wide.jpg',
  round: '/teacher/frame_round.jpg',
  blink: '/teacher/frame_blink.jpg',
};

const MALE_FRAMES: Record<FrameKey, string> = {
  closed: '/teacher/male_frame_closed.jpg',
  half: '/teacher/male_frame_half.jpg',
  open: '/teacher/male_frame_open.jpg',
  wide: '/teacher/male_frame_wide.jpg',
  round: '/teacher/male_frame_round.jpg',
  blink: '/teacher/male_frame_blink.jpg',
};

export const HumanTeacherAvatar: React.FC<HumanTeacherAvatarProps> = ({
  isSpeaking,
  isPaused = false,
  isExplanationStarted = false,
  mood = 'explaining',
  currentStepIndex = 0,
  conceptKey = 'print',
  activeWord = '',
  size = 'compact',
  className = '',
  language = 'hi',
}) => {
  // Active mouth frame state
  const [mouthFrame, setMouthFrame] = useState<'closed' | 'half' | 'open' | 'wide' | 'round'>('closed');
  // Eye blinking state
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  // Active persona frames based on language mode (Female for Hindi, Male for English)
  const activeFrameSet = language === 'en' ? MALE_FRAMES : FEMALE_FRAMES;

  // Preload all frames immediately to guarantee instant, zero-flicker transitions
  useEffect(() => {
    [...Object.values(FEMALE_FRAMES), ...Object.values(MALE_FRAMES)].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // 1. Natural Irregular Eye Blinking (Human timing: 3.2s to 5.2s, 120ms duration)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isMounted = true;

    const scheduleNextBlink = () => {
      // Natural human interval between 3200ms and 5200ms
      const delay = Math.floor(Math.random() * 2000) + 3200;
      timeoutId = setTimeout(() => {
        if (!isMounted) return;
        setIsBlinking(true);

        // Blink duration: 120ms (natural rapid eyelid closure)
        setTimeout(() => {
          if (!isMounted) return;
          setIsBlinking(false);

          // 12% probability of a quick natural double-blink
          if (Math.random() < 0.12) {
            setTimeout(() => {
              if (!isMounted) return;
              setIsBlinking(true);
              setTimeout(() => {
                if (!isMounted) return;
                setIsBlinking(false);
                scheduleNextBlink();
              }, 100);
            }, 80);
          } else {
            scheduleNextBlink();
          }
        }, 120);
      }, delay);
    };

    scheduleNextBlink();
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  // 2. Synchronized Lip Sync (voice & syllable matched, natural mouth closure during silence)
  useEffect(() => {
    // When not speaking or paused, mouth smoothly closes to natural warm smile
    if (!isSpeaking || isPaused) {
      setMouthFrame(mood === 'celebrating' ? 'open' : 'closed');
      return;
    }

    // Word-aware vowel/consonant phoneme detection
    if (activeWord) {
      const lower = activeWord.toLowerCase().trim();
      if (/[oou]|ko|ho|to|jo|kro|output/.test(lower)) {
        setMouthFrame('round');
      } else if (/[ei]|hai|mein|se|pe|yeh|is|if|print/.test(lower)) {
        setMouthFrame('wide');
      } else if (/[aá]|kya|ka|na|baat|pass|class/.test(lower)) {
        setMouthFrame('open');
      } else {
        setMouthFrame('half');
      }
    }

    // Syllable rhythm alternation matching natural conversational speech (~135ms per syllable)
    const rhythm: Array<'half' | 'open' | 'half' | 'wide' | 'half' | 'round' | 'open' | 'half'> = [
      'half',
      'open',
      'half',
      'wide',
      'half',
      'round',
      'open',
      'half',
    ];
    let idx = 0;
    const interval = setInterval(() => {
      setMouthFrame(rhythm[idx % rhythm.length]);
      idx++;
    }, 135);

    return () => clearInterval(interval);
  }, [isSpeaking, isPaused, activeWord, mood]);

  // Active displayed frame (blinking takes priority for 120ms, then current mouth frame)
  const currentFrameKey: FrameKey = isBlinking ? 'blink' : mouthFrame;

  // Status info for live badge
  const statusInfo = useMemo(() => {
    if (!isExplanationStarted) {
      return { label: 'READY TO TEACH', color: 'bg-emerald-500' };
    }
    if (isPaused) {
      return { label: 'PAUSED', color: 'bg-amber-500' };
    }
    if (isSpeaking) {
      return { label: 'EXPLAINING', color: 'bg-purple-600' };
    }
    if (mood === 'celebrating') {
      return { label: 'CHALLENGE PASSED!', color: 'bg-indigo-600' };
    }
    return { label: 'ATTENTIVE', color: 'bg-blue-500' };
  }, [isExplanationStarted, isPaused, isSpeaking, mood]);

  return (
    <div className={`relative flex flex-col items-center select-none w-full ${className}`}>
      {/* 
        Teacher Desk Classroom Card Container
        Frame is completely static (no sway, no nod, no shake).
        Only mouth & eyes change smoothly.
      */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-[#0F172A] border border-purple-200/90 shadow-[0_4px_24px_rgba(109,40,217,0.16)] transition-all duration-300 ${
          size === 'compact'
            ? 'max-w-[340px] sm:max-w-[370px] aspect-[16/9]'
            : 'max-w-[420px] aspect-[16/9]'
        }`}
      >
        {/* Full-Frame Matched Photographic Base - Completely Static Frame, Zero Black Lines */}
        <img
          src={activeFrameSet[currentFrameKey]}
          alt={language === 'en' ? 'AI Mentor Future IT Industry' : 'AI Teacher Future IT Industry'}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        />

        {/* Ambient Top & Bottom Vignette for Cinematic Classroom Realism */}
        <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-t from-black/35 via-transparent to-black/15" />

        {/* Top Left Studio Lighting & Status Indicator + Live Voice Waves */}
        <div className="absolute top-2 left-2 z-30 flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9.5px] font-semibold shadow-xs">
            <span className={`w-1.5 h-1.5 rounded-full ${statusInfo.color} ${isSpeaking && !isPaused ? 'animate-ping' : ''}`} />
            <span className="tracking-wider uppercase text-[8.5px] font-mono">{statusInfo.label}</span>
          </div>

          {isSpeaking && !isPaused && (
            <div className="px-2 py-0.5 rounded-full bg-purple-900/90 text-white text-[9px] font-bold flex items-center gap-1 shadow-lg border border-purple-400/80 backdrop-blur-xs animate-pulse">
              <span className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1 h-3 bg-emerald-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce" />
              <span className="font-mono text-[8px] text-purple-200 uppercase">Live Voice</span>
            </div>
          )}
        </div>

        {/* Bottom Bar: Teacher Identity & Desk Tag */}
        <div className="absolute bottom-1.5 inset-x-2 z-30 flex items-center justify-between px-2 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px]">
          <div className="flex items-center gap-1.5 font-bold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
            <span className="text-white drop-shadow-xs">{language === 'en' ? 'AI Mentor' : 'AI Teacher'}</span>
            <span className="text-purple-300 font-medium text-[9px]">· Future IT Industry</span>
          </div>
          <span className="text-[9px] font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded">
            Interactive Classroom
          </span>
        </div>
      </div>
    </div>
  );
};
