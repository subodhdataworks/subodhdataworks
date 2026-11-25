import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  Move,
  Info,
} from 'lucide-react';
import {
  MentorLessonData,
  MentorLessonSection,
  getMentorLessonData,
} from './mentorLessonRegistry';
import {
  MentorVoiceController,
  MentorLanguage,
  VoiceStatus,
} from './MentorVoiceController';
import { SectionRectInfo } from '../visualNotes/PdfVisualNotesViewer';
import { soundEffects } from '../../../services/soundEffects';
import { languageEngine } from '../../../services/visualLearningLanguageEngine';
import { playSwaraVoice, stopSwaraVoice } from '../../../services/swaraAudioService';
import { StableMouthLipSyncAvatar } from '../interview/StableMouthLipSyncAvatar';

interface FutureITMentorProps {
  topicId: number;
  isExcelTrack?: boolean;
  isSqlTrack?: boolean;
  isDataScienceCourse?: boolean;
  isMlEngineeringCourse?: boolean;
  isAiEngineeringCourse?: boolean;
  isAiToolsPromptCourse?: boolean;
  isMsOfficeCourse?: boolean;
  isFullStackMernCourse?: boolean;
  sectionRect?: SectionRectInfo | null;
  scrollSettled?: boolean;
  onActiveSectionChange?: (section: MentorLessonSection | null) => void;
  onSpeechProgressChange?: (progress: number) => void;
  onLiveTypedTextChange?: (text: string, isSpeaking: boolean) => void;
  onUserManualScrollDetected?: boolean;
  onResetUserManualScroll?: () => void;
  language?: MentorLanguage;
  onLanguageChange?: (lang: MentorLanguage) => void;
  isVideoPlaying?: boolean;
  onPlayMentor?: () => void;
}

/**
 * Pixel-calibrated Full-Body Female AI Mentor with natural Eye Blink & Voice-Synced Lip Movement
 * Native image dimensions: 682 x 1024 (Left Eye: 275,86 | Right Eye: 313,81 | Mouth: 300,123)
 */
const AnimatedFullBodyMentor: React.FC<{
  isSpeaking: boolean;
  isBlinking: boolean;
  mouthShape: number;
  className?: string;
}> = ({ isSpeaking, isBlinking, mouthShape, className = '' }) => {
  const activeMouth = isSpeaking ? (mouthShape || 1) : 0;

  return (
    <div className={`relative h-full aspect-[682/1024] mx-auto select-none pointer-events-none ${className}`}>
      <img
        src="/images/future_it_mentor_girl_fullbody.png?v=2"
        alt="Future IT Full-Body Female AI Mentor"
        draggable={false}
        style={{ imageRendering: 'auto' }}
        className="w-full h-full object-contain pointer-events-none select-none"
      />

      {/* Exact 682x1024 SVG Facial Animation Overlay (Eyes Blink + Voice Lip-Sync) */}
      <svg
        viewBox="0 0 682 1024"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        {/* ── NATURAL EYE BLINK OVERLAY (Left Eye: 275,86 | Right Eye: 313,81) ── */}
        <g
          style={{
            opacity: isBlinking ? 1 : 0,
            transition: 'opacity 65ms ease-in-out',
          }}
        >
          {/* Left closed eyelid */}
          <ellipse cx="275" cy="85.5" rx="12.5" ry="6.5" fill="#e2b49b" />
          <path
            d="M 263 86.5 Q 275 91.5 287 86"
            fill="none"
            stroke="#2f1c16"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Right closed eyelid */}
          <ellipse cx="313" cy="80.5" rx="12.5" ry="6.5" fill="#e2b49b" />
          <path
            d="M 301 81.5 Q 313 86.5 325 81"
            fill="none"
            stroke="#2f1c16"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>

        {/* Subtle expressive eye sparkle while speaking */}
        {isSpeaking && !isBlinking && (
          <g opacity="0.65">
            <circle cx="272" cy="84" r="1.4" fill="#ffffff" />
            <circle cx="310" cy="79" r="1.4" fill="#ffffff" />
          </g>
        )}

        {/* ── VOICE-SYNCED NATURAL ROSE LIP ANIMATION (Mouth Center: 300, 123 — ZERO dark/black fill!) ── */}
        {activeMouth > 0 && (
          <g style={{ transition: 'all 85ms ease-out' }}>
            {activeMouth === 1 && (
              <>
                {/* Soft natural closed-smile rose lip highlight */}
                <path
                  d="M 285 122.5 Q 300 120 315 122 Q 300 126.5 285 122.5 Z"
                  fill="#d27481"
                  opacity="0.72"
                />
                <path
                  d="M 291 122.8 Q 300 123.8 309 122.8"
                  stroke="#fff5f5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </>
            )}

            {activeMouth === 2 && (
              <>
                {/* Gentle warm open vowel — soft rose pink, never black */}
                <path
                  d="M 284 121.8 Q 300 117.5 316 121.2 Q 300 123.2 284 121.8 Z"
                  fill="#cf6e7b"
                  opacity="0.82"
                />
                <ellipse cx="300" cy="124.2" rx="10.5" ry="3.2" fill="#9c4252" opacity="0.78" />
                <path
                  d="M 290 122.2 Q 300 123.3 310 122.2"
                  stroke="#ffffff"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  opacity="0.92"
                />
                <path
                  d="M 285 124 Q 300 130.2 315 123.5 Q 300 127 285 124 Z"
                  fill="#dc8490"
                  opacity="0.82"
                />
              </>
            )}

            {activeMouth === 3 && (
              <>
                {/* Expressive warm speaking syllable — soft rose & pearl teeth */}
                <path
                  d="M 284 121.2 Q 300 116.5 316 120.8 Q 300 122.8 284 121.2 Z"
                  fill="#cf6e7b"
                  opacity="0.85"
                />
                <ellipse cx="300" cy="125" rx="11.5" ry="4.4" fill="#a24858" opacity="0.8" />
                <path
                  d="M 289.5 121.8 Q 300 123.2 310.5 121.8"
                  stroke="#ffffff"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  opacity="0.95"
                />
                <path
                  d="M 285 124.5 Q 300 132 315 124 Q 300 128.5 285 124.5 Z"
                  fill="#de8894"
                  opacity="0.85"
                />
              </>
            )}
          </g>
        )}
      </svg>
      {/* Subtle Animated Purple Voice Wave beside Mentor's face when speaking (stays inside avatar bounds) */}
      {isSpeaking && (
        <div
          className="absolute top-[7%] right-[14%] flex items-center gap-[2px] px-1.5 py-1 rounded-full bg-white/95 border border-[#DDD6FE] shadow-xs pointer-events-none"
          aria-hidden="true"
        >
          {[8, 14, 19, 12, 16, 9].map((h, idx) => (
            <span
              key={idx}
              className="w-[2px] rounded-full bg-gradient-to-t from-[#6D28D9] to-[#A78BFA] animate-pulse"
              style={{
                height: `${Math.max(5, ((h + mouthShape * 4 + idx * 3) % 16) + 5)}px`,
                transition: 'height 110ms ease-out',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const FutureITMentor: React.FC<FutureITMentorProps> = ({
  topicId,
  isExcelTrack = false,
  isSqlTrack = false,
  isDataScienceCourse = false,
  isMlEngineeringCourse = false,
  isAiEngineeringCourse = false,
  isAiToolsPromptCourse = false,
  isMsOfficeCourse = false,
  isFullStackMernCourse = false,
  sectionRect,
  scrollSettled = true,
  onActiveSectionChange,
  onSpeechProgressChange,
  onLiveTypedTextChange,
  onUserManualScrollDetected,
  onResetUserManualScroll,
  language: externalLanguage = 'english',
  onLanguageChange,
  isVideoPlaying,
  onPlayMentor,
}) => {
  const lessonData: MentorLessonData | null = useMemo(() => {
    return getMentorLessonData(
      topicId,
      isExcelTrack,
      isSqlTrack,
      isDataScienceCourse,
      isMlEngineeringCourse,
      isAiEngineeringCourse,
      isAiToolsPromptCourse,
      isMsOfficeCourse,
      isFullStackMernCourse
    );
  }, [topicId, isExcelTrack, isSqlTrack, isDataScienceCourse, isMlEngineeringCourse, isAiEngineeringCourse, isAiToolsPromptCourse, isMsOfficeCourse, isFullStackMernCourse]);

  // Mentor state
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [language, setLanguage] = useState<MentorLanguage>(externalLanguage);

  useEffect(() => {
    if (externalLanguage && externalLanguage !== languageRef.current) {
      handleToggleLanguage(externalLanguage);
    }
  }, [externalLanguage]);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [sectionProgressDisplay, setSectionProgressDisplay] = useState<number>(0);
  const [liveTypedExplanation, setLiveTypedExplanation] = useState<string>('');
  const [isMuted, setIsMuted] = useState(false);
  const [speechBubbleText, setSpeechBubbleText] = useState<string>('');
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>({
    voiceName: '',
    isAuthenticIndian: true,
    langCode: 'hi-IN',
  });

  // Natural Eye Blinking & Mouth Lip-Sync states
  const [isBlinking, setIsBlinking] = useState(false);
  const [mouthShape, setMouthShape] = useState<number>(0);

  // ── Native Female Welcome Voice & Live Lip-Sync Engine ──
  const WELCOME_VOICE_TEXT = 'Hey! Tap me to learn!';
  const WELCOME_DISPLAY_TEXT = 'Hey! Tap me to learn! 🚀';

  const [showWelcomeBubble, setShowWelcomeBubble] = useState(true);
  const [typedWelcomeText, setTypedWelcomeText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isWelcomeSpeaking, setIsWelcomeSpeaking] = useState(false);
  const [welcomeMouthShape, setWelcomeMouthShape] = useState<number>(0);
  const welcomeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const hasSpokenWelcomeInSessionRef = useRef(false);
  const lipSyncTimerRef = useRef<any>(null);

  // Notify VisualNotesTopBar whenever Mentor opens or closes so it can dock cleanly at the top
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('futureai_mentor_open_state', { detail: { isOpen } }));
    return () => {
      window.dispatchEvent(new CustomEvent('futureai_mentor_open_state', { detail: { isOpen: false } }));
    };
  }, [isOpen]);

  // ── RESET STATE ON TOPIC/LESSON OR COURSE CHANGE ──
  // Next lesson starts from the very beginning, and robot only explains when launched!
  const prevTopicKeyRef = useRef<string>(
    `${topicId}:${isDataScienceCourse}:${isMlEngineeringCourse}:${isExcelTrack}:${isSqlTrack}`
  );
  useEffect(() => {
    const nextTopicKey = `${topicId}:${isDataScienceCourse}:${isMlEngineeringCourse}:${isExcelTrack}:${isSqlTrack}`;
    if (prevTopicKeyRef.current !== nextTopicKey) {
      prevTopicKeyRef.current = nextTopicKey;

      // 1. Stop any voice / audio playback
      stopSwaraVoice();
      if (voiceControllerRef.current) {
        voiceControllerRef.current.stop();
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
        } catch {}
      }

      // 2. Close explanation and reset playback so it only explains when tapped to launch
      isPlayingRef.current = false;
      isUserPausedRef.current = false;
      setIsPlaying(false);
      setIsSpeaking(false);
      setIsOpen(false);
      setLiveTypedExplanation('');

      // 3. Reset section index to 0 (very beginning)
      currentSectionIndexRef.current = 0;
      setCurrentSectionIndex(0);
      setMouthShape(0);

      // 4. Reset welcome bubble for the new lesson
      setShowWelcomeBubble(true);
      setIsWelcomeSpeaking(false);
      setWelcomeMouthShape(0);

      // 5. Clear active card highlight in the workspace
      if (onActiveSectionChange) {
        onActiveSectionChange(null);
      }
    }
  }, [topicId, isDataScienceCourse, isMlEngineeringCourse, isExcelTrack, isSqlTrack, onActiveSectionChange]);

  // Lip-Sync Animation Driver (Cycles mouth shapes 1, 2, 3 while speaking)
  const startLipSyncAnimation = () => {
    if (lipSyncTimerRef.current) clearInterval(lipSyncTimerRef.current);
    let shape = 1;
    setWelcomeMouthShape(1);
    setIsWelcomeSpeaking(true);

    lipSyncTimerRef.current = setInterval(() => {
      shape = (shape % 3) + 1; // 1 -> 2 -> 3 -> 1 -> 2 -> 3
      setWelcomeMouthShape(shape);
    }, 110);
  };

  const stopLipSyncAnimation = () => {
    if (lipSyncTimerRef.current) {
      clearInterval(lipSyncTimerRef.current);
      lipSyncTimerRef.current = null;
    }
    setWelcomeMouthShape(0);
    setIsWelcomeSpeaking(false);
  };

  // Select best natural female Indian teacher voice on the device (matching DSA Module 1 Swara)
  const getBestFemaleEnglishVoice = (): SpeechSynthesisVoice | null => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices || voices.length === 0) return null;

    // Strict priority: Authentic Indian Female Teacher Voice (Swara, Heera, Neerja, Kalpana, Veena)
    const priorityKeywords = [
      'swara',
      'heera',
      'neerja',
      'kalpana',
      'lekha',
      'veena',
      'ananya',
      'shruti',
      'priya',
      'zira',
      'aria',
      'jenny',
      'female',
    ];

    for (const key of priorityKeywords) {
      const match = voices.find(
        (v) =>
          v.name.toLowerCase().includes(key) &&
          (v.lang.toLowerCase().startsWith('en') || v.lang.toLowerCase().startsWith('hi'))
      );
      if (match) return match;
    }

    // Any English voice that is not male
    const anyFemaleEnglish = voices.find(
      (v) =>
        v.lang.toLowerCase().startsWith('en') &&
        !v.name.toLowerCase().includes('david') &&
        !v.name.toLowerCase().includes('mark') &&
        !v.name.toLowerCase().includes('ravi')
    );
    if (anyFemaleEnglish) return anyFemaleEnglish;

    return voices.find((v) => v.lang.toLowerCase().startsWith('en')) || voices[0] || null;
  };

  // Play Native Welcome Voice — ONLY animate lips & voice wave once real audio starts playing!
  const playWelcomeVoice = useCallback(() => {
    stopSwaraVoice();
    stopLipSyncAnimation();
    hasSpokenWelcomeInSessionRef.current = true;
    try {
      sessionStorage.setItem('futureai_robot_welcome_voice_session_v1', 'true');
    } catch {}

    playSwaraVoice(WELCOME_VOICE_TEXT, {
      onStart: () => {
        startLipSyncAnimation();
        setIsWelcomeSpeaking(true);
      },
      onEnd: () => {
        setIsWelcomeSpeaking(false);
        stopLipSyncAnimation();
      },
      onError: () => {
        setIsWelcomeSpeaking(false);
        stopLipSyncAnimation();
      },
    });
  }, []);


  // Slower, comfortable typewriter effect synchronized with voice & mouth lip-sync (~85ms per char)
  useEffect(() => {
    let index = 0;
    setTypedWelcomeText('');
    setIsTypingComplete(false);
    setShowWelcomeBubble(true);

    let timer: any = null;
    const startTimeout = setTimeout(() => {
      // 1. Play natural welcome voice & trigger lip-sync
      playWelcomeVoice();

      // 2. Type character-by-character comfortably slow in sync with voice
      timer = setInterval(() => {
        index++;
        setTypedWelcomeText(WELCOME_DISPLAY_TEXT.slice(0, index));
        if (index >= WELCOME_DISPLAY_TEXT.length) {
          clearInterval(timer);
          setIsTypingComplete(true);
        }
      }, 85);
    }, 400);

    return () => {
      clearTimeout(startTimeout);
      if (timer) clearInterval(timer);
    };
  }, [topicId, playWelcomeVoice]);

  // User gesture fallback for autoplay policies: if browser blocked speech on first load, play on first interaction
  useEffect(() => {
    const handleFirstGesture = () => {
      if (!hasSpokenWelcomeInSessionRef.current && showWelcomeBubble && !isOpen) {
        playWelcomeVoice();
      }
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });
    return () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, [playWelcomeVoice, showWelcomeBubble, isOpen]);

  // Cleanup welcome voice and timers on unmount
  useEffect(() => {
    return () => {
      if (lipSyncTimerRef.current) {
        clearInterval(lipSyncTimerRef.current);
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
        } catch {}
      }
    };
  }, []);;

  // Natural Eye Blinking Loop (fires every 2.5s - 5s with occasional double-blink)
  useEffect(() => {
    let blinkTimer: any = null;
    let isCancelled = false;

    const scheduleNextBlink = () => {
      const delay = Math.random() * 2600 + 2400; // 2.4s to 5.0s
      blinkTimer = setTimeout(() => {
        if (isCancelled) return;
        setIsBlinking(true);

        setTimeout(() => {
          if (isCancelled) return;
          setIsBlinking(false);

          // 25% chance of an immediate cute double blink
          if (Math.random() < 0.25) {
            setTimeout(() => {
              if (isCancelled) return;
              setIsBlinking(true);
              setTimeout(() => {
                if (isCancelled) return;
                setIsBlinking(false);
                scheduleNextBlink();
              }, 110);
            }, 90);
          } else {
            scheduleNextBlink();
          }
        }, 130);
      }, delay);
    };

    scheduleNextBlink();

    return () => {
      isCancelled = true;
      if (blinkTimer) clearTimeout(blinkTimer);
    };
  }, []);

  // Voice Lip-Sync Animation (cycles mouth shapes while speaking)
  useEffect(() => {
    if (!isSpeaking) {
      setMouthShape(0);
      return;
    }

    const interval = setInterval(() => {
      setMouthShape((prev) => (prev + 1) % 4);
    }, 115);

    return () => clearInterval(interval);
  }, [isSpeaking]);

  // State refs to prevent stale closure bugs in SpeechSynthesis callbacks
  const isPlayingRef = useRef(false);
  const currentSectionIndexRef = useRef(0);
  const languageRef = useRef<MentorLanguage>(externalLanguage);
  const isUserPausedRef = useRef(false);
  const resumingFromPauseRef = useRef(false);
  const narrationLengthRef = useRef<number>(120);
  const currentNarrationTextRef = useRef<string>('');
  const speechProgressRef = useRef<number>(0);
  const speechProgressTimerRef = useRef<any>(null);
  const playbackSpeedRef = useRef<number>(1.0);
  const onSpeechProgressChangeRef = useRef(onSpeechProgressChange);
  const onLiveTypedTextChangeRef = useRef(onLiveTypedTextChange);

  useEffect(() => {
    onSpeechProgressChangeRef.current = onSpeechProgressChange;
  }, [onSpeechProgressChange]);

  useEffect(() => {
    onLiveTypedTextChangeRef.current = onLiveTypedTextChange;
  }, [onLiveTypedTextChange]);

  useEffect(() => {
    onLiveTypedTextChangeRef.current?.(liveTypedExplanation, isSpeaking);
  }, [liveTypedExplanation, isSpeaking]);

  useEffect(() => {
    playbackSpeedRef.current = playbackSpeed;
  }, [playbackSpeed]);

  const stopSpeechProgressSweep = useCallback(() => {
    if (speechProgressTimerRef.current) {
      clearInterval(speechProgressTimerRef.current);
      speechProgressTimerRef.current = null;
    }
  }, []);

  const startSpeechProgressSweep = useCallback(
    (charCount: number) => {
      stopSpeechProgressSweep();
      narrationLengthRef.current = Math.max(20, charCount);
      speechProgressRef.current = 0.04;
      onSpeechProgressChangeRef.current?.(0.04);

      const estWords = Math.max(8, Math.round(charCount / 5.2));
      const tickMs = 200;
      setSectionProgressDisplay(0.05);

      speechProgressTimerRef.current = setInterval(() => {
        if (!isPlayingRef.current) return;
        const liveEstMs = Math.max(2400, (estWords / (2.3 * playbackSpeedRef.current)) * 1000);
        const liveStep = (0.94 * tickMs) / liveEstMs;
        const next = Math.min(0.98, speechProgressRef.current + liveStep);
        const prevBucket = Math.floor(speechProgressRef.current * 24);
        const nextBucket = Math.floor(next * 24);
        speechProgressRef.current = next;
        if (nextBucket !== prevBucket) {
          setSectionProgressDisplay(next);
          onSpeechProgressChangeRef.current?.(next);
          if (currentNarrationTextRef.current) {
            const words = currentNarrationTextRef.current.split(/\s+/);
            const count = Math.max(1, Math.ceil(next * words.length));
            setLiveTypedExplanation((prev) => {
              const candidate = words.slice(0, count).join(' ');
              return candidate.length >= prev.length ? candidate : prev;
            });
          }
        }
      }, tickMs);
    },
    [stopSpeechProgressSweep]
  );

  useEffect(() => {
    return () => stopSpeechProgressSweep();
  }, [stopSpeechProgressSweep]);

  // Sync refs with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    currentSectionIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  useEffect(() => {
    languageRef.current = language;
  }, [language]);

  // Draggable position of the robot
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: typeof window !== 'undefined' ? Math.min(window.innerWidth - 160, 520) : 500,
    y: 190,
  });
  const isDraggingRef = useRef(false);
  const dragStartOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Voice controller reference
  const voiceControllerRef = useRef<MentorVoiceController | null>(null);

  // Current active section
  const currentSection: MentorLessonSection | undefined =
    lessonData?.sections[currentSectionIndex];

  // 1. Advance to Next Section (called on audio narration completion)
  const handleSectionComplete = useCallback(() => {
    if (!lessonData || !isPlayingRef.current) return;

    const nextIndex = currentSectionIndexRef.current + 1;
    if (nextIndex < lessonData.sections.length) {
      currentSectionIndexRef.current = nextIndex;
      setCurrentSectionIndex(nextIndex);
    } else {
      // Entire lesson completed!
      setIsPlaying(false);
      isPlayingRef.current = false;
      setIsSpeaking(false);
      soundEffects.playCelebration();
      const finishMsg =
        languageRef.current === 'hindi'
          ? 'शाबाश! आपने इस टॉपिक के Visual Notes को बहुत अच्छे से समझ लिया है। अब चलिए नीचे Practice Challenge हल करते हैं!'
          : 'Outstanding! You have mastered the Visual Notes for this topic. Now let us try the Practice Challenge!';
      setSpeechBubbleText(finishMsg);
    }
  }, [lessonData]);

  // 2. Initialize Voice Controller
  useEffect(() => {
    const vc = new MentorVoiceController();
    vc.setLanguage(language);
    vc.setSpeed(playbackSpeed);
    vc.setMuted(isMuted);

    vc.setCallbacks({
      onStart: () => {
        setIsSpeaking(!isMuted);
        if (!speechProgressTimerRef.current) {
          startSpeechProgressSweep(narrationLengthRef.current);
        }
      },
      onBoundary: (ev) => {
        // Dynamic syllable/word lip-sync variety
        setMouthShape((prev) => ((prev % 3) + 1));
        // SINGLE TIMELINE: Drive both Live Voice-Synced Typing and Visual Highlights from real audio clock
        if (ev?.spokenTextSoFar) {
          setLiveTypedExplanation(ev.spokenTextSoFar);
        } else if (ev && typeof ev.charIndex === 'number' && currentNarrationTextRef.current) {
          const text = currentNarrationTextRef.current;
          const endIdx = text.indexOf(' ', ev.charIndex + 1);
          setLiveTypedExplanation(endIdx === -1 ? text : text.slice(0, endIdx));
        }

        if (ev && typeof ev.charIndex === 'number' && narrationLengthRef.current > 0) {
          const exactRatio = Math.min(
            0.99,
            Math.max(speechProgressRef.current, (ev.charIndex + 4) / narrationLengthRef.current)
          );
          const prevBucket = Math.floor(speechProgressRef.current * 24);
          const nextBucket = Math.floor(exactRatio * 24);
          speechProgressRef.current = exactRatio;
          if (nextBucket !== prevBucket) {
            setSectionProgressDisplay(exactRatio);
            onSpeechProgressChangeRef.current?.(exactRatio);
          }
        }
        // 18% chance of an expressive syllable blink/squeeze during speech
        if (Math.random() < 0.18) {
          setIsBlinking(true);
          setTimeout(() => setIsBlinking(false), 120);
        }
      },
      onEnd: () => {
        stopSpeechProgressSweep();
        speechProgressRef.current = 1;
        setSectionProgressDisplay(1);
        if (currentNarrationTextRef.current) {
          setLiveTypedExplanation(currentNarrationTextRef.current);
        }
        onSpeechProgressChangeRef.current?.(1);
        setIsSpeaking(false);
        setMouthShape(0);
        // Automatically advance to the next section
        handleSectionComplete();
      },
      onError: (err) => {
        console.warn('Mentor voice notice:', err);
        stopSpeechProgressSweep();
        setIsSpeaking(false);
        setMouthShape(0);
        // If an unexpected error occurs during playback, wait 3.5s for user to read then advance
        if (isPlayingRef.current) {
          setTimeout(() => {
            if (isPlayingRef.current) {
              handleSectionComplete();
            }
          }, 3500);
        }
      },
    });

    voiceControllerRef.current = vc;

    // Check voice availability
    const status = vc.getVoiceStatus(language);
    setVoiceStatus(status);

    return () => {
      vc.stop();
    };
  }, [handleSectionComplete]);

  // Update voice settings when language/speed/mute changes
  useEffect(() => {
    if (voiceControllerRef.current) {
      voiceControllerRef.current.setLanguage(language);
      voiceControllerRef.current.setSpeed(playbackSpeed);
      voiceControllerRef.current.setMuted(isMuted);
      const status = voiceControllerRef.current.getVoiceStatus(language);
      setVoiceStatus(status);
    }
  }, [language, playbackSpeed, isMuted]);

  // 3. Handle user manual scroll gesture: Pause guided lesson politely
  useEffect(() => {
    if (onUserManualScrollDetected && isPlaying) {
      handlePause();
    }
  }, [onUserManualScrollDetected]);

  // Stop robot immediately when video starts playing or media event detected
  useEffect(() => {
    if (isVideoPlaying) {
      if (voiceControllerRef.current) {
        voiceControllerRef.current.stop();
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      isPlayingRef.current = false;
      isUserPausedRef.current = true;
      setIsPlaying(false);
      setIsSpeaking(false);
      setMouthShape(0);
    }
  }, [isVideoPlaying]);

  useEffect(() => {
    const handleMediaPlay = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'VIDEO' || target.tagName === 'AUDIO')) {
        if (voiceControllerRef.current) {
          voiceControllerRef.current.stop();
        }
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
        isPlayingRef.current = false;
        isUserPausedRef.current = true;
        setIsPlaying(false);
        setIsSpeaking(false);
        setMouthShape(0);
      }
    };

    window.addEventListener('play', handleMediaPlay, true);
    return () => {
      window.removeEventListener('play', handleMediaPlay, true);
    };
  }, []);

  // 4. Notify parent of active section change for PDF highlight & auto-scroll
  useEffect(() => {
    if (isOpen && currentSection && onActiveSectionChange) {
      onActiveSectionChange(currentSection);
    } else if (!isOpen && onActiveSectionChange) {
      onActiveSectionChange(null);
    }
  }, [isOpen, currentSectionIndex, onActiveSectionChange]);

  // 5. Play narration for current section (waits for scroll to settle)
  const playCurrentSectionNarration = useCallback(() => {
    if (!currentSection || !voiceControllerRef.current || !isPlayingRef.current) return;

    const narration =
      languageRef.current === 'hindi'
        ? languageEngine.getSpeechText(currentSection.hindiNarration, 'hindi')
        : currentSection.englishNarration;

    const summary =
      languageRef.current === 'hindi'
        ? languageEngine.standardizeHinglish(currentSection.hindiSummary)
        : currentSection.englishSummary;

    setSpeechBubbleText(summary);
    currentNarrationTextRef.current = narration;
    narrationLengthRef.current = Math.max(20, narration.length);
    setLiveTypedExplanation('');
    setIsSpeaking(false);
    setMouthShape(0);
    voiceControllerRef.current.speak(narration);
  }, [currentSection]);

  // Trigger narration whenever section changes or opens/switches language
  useEffect(() => {
    if (!isOpen || !isPlaying || !currentSection) return;
    // If resuming from user pause, handleResume() already resumed the exact audio position
    if (resumingFromPauseRef.current) {
      resumingFromPauseRef.current = false;
      return;
    }

    // Small delay to ensure Visual Notes has smoothly scrolled and settled
    const timer = setTimeout(() => {
      playCurrentSectionNarration();
    }, 380);

    return () => clearTimeout(timer);
  }, [currentSectionIndex, isPlaying, isOpen, language]);

  // 6. Intelligent Non-Obstructive Robot Positioning
  useEffect(() => {
    if (!isOpen || !currentSection || isDraggingRef.current) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobile) {
      // Mobile: Dock near upper-left edge of screen
      const mobX = 10;
      setPosition({ x: mobX, y: 155 });
      return;
    }

    // Desktop: Position mentor straight upright along the LEFT edge of the visual notes panel
    // Automatically glides vertically to align with the exact highlighted section/line!
    let targetY = 120;
    const maxSafeY = typeof window !== 'undefined' ? Math.max(80, window.innerHeight - 310) : 460;
    if (sectionRect && (typeof sectionRect.centerY === 'number' || sectionRect.height > 0)) {
      const cy =
        typeof sectionRect.centerY === 'number'
          ? sectionRect.centerY
          : sectionRect.top + sectionRect.height / 2;
      targetY = Math.max(76, Math.min(maxSafeY, cy - 135));
    } else {
      if (currentSection.robotTarget === 'top-right' || currentSection.robotTarget === 'top-left') targetY = 110;
      else if (currentSection.robotTarget === 'mid-right' || currentSection.robotTarget === 'mid-left') targetY = 230;
      else targetY = Math.min(maxSafeY, 390);
    }

    // Place mentor cleanly on the left side (~12px) so she never covers the visual notes text
    const targetX = 12;

    setPosition({ x: targetX, y: targetY });
  }, [currentSectionIndex, isOpen, sectionRect]);

  // 7. Calculate Head/Body Orientation and Dynamic Tilt
  // Target concept coordinates
  const targetX = sectionRect?.centerX ?? 300;
  const targetY = sectionRect?.centerY ?? 300;

  // Is target to the left of the robot?
  // Robot image naturally gestures/points to the LEFT!
  const isTargetToLeft = position.x >= targetX;

  // Compute angle for dynamic 3D tilt
  const dx = targetX - (position.x + 60);
  const dy = targetY - (position.y + 60);
  const angleRad = Math.atan2(dy, Math.abs(dx));
  const tiltDeg = Math.max(-12, Math.min(12, angleRad * (180 / Math.PI) * 0.45));

  // Keyboard arrow keys for manual flight anywhere (Up, Down, Left, Right)
  const flyRobot = (direction: 'up' | 'down' | 'left' | 'right') => {
    const step = 45;
    setPosition((prev) => {
      const maxX = typeof window !== 'undefined' ? window.innerWidth - 180 : 800;
      const maxY = typeof window !== 'undefined' ? window.innerHeight - 150 : 600;
      switch (direction) {
        case 'up':
          return { ...prev, y: Math.max(10, prev.y - step) };
        case 'down':
          return { ...prev, y: Math.min(maxY, prev.y + step) };
        case 'left':
          return { ...prev, x: Math.max(10, prev.x - step) };
        case 'right':
          return { ...prev, x: Math.min(maxX, prev.x + step) };
        default:
          return prev;
      }
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        flyRobot('up');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        flyRobot('down');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        flyRobot('left');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        flyRobot('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // 8. Player Controls
  const handleRobotTap = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    setIsWelcomeSpeaking(false);
    setWelcomeMouthShape(0);
    setShowWelcomeBubble(false);
    handleStartExplain();
  };

  const handleStartExplain = () => {
    soundEffects.playClick();
    if (onPlayMentor) onPlayMentor();
    if (onResetUserManualScroll) onResetUserManualScroll();
    isUserPausedRef.current = false;
    isPlayingRef.current = true;
    setIsPlaying(true);
    setIsOpen(true);
    if (!currentSection) {
      currentSectionIndexRef.current = 0;
      setCurrentSectionIndex(0);
    }
  };

  const handlePause = () => {
    soundEffects.playClick();
    isPlayingRef.current = false;
    isUserPausedRef.current = true;
    setIsPlaying(false);
    setIsSpeaking(false);
    setMouthShape(0);
    if (voiceControllerRef.current) {
      voiceControllerRef.current.pause();
    }
  };

  const handleResume = () => {
    soundEffects.playClick();
    if (onPlayMentor) onPlayMentor();
    if (onResetUserManualScroll) onResetUserManualScroll();
    isPlayingRef.current = true;
    isUserPausedRef.current = false;
    if (voiceControllerRef.current) {
      const resumed = voiceControllerRef.current.resume();
      if (resumed) {
        resumingFromPauseRef.current = true;
        setIsPlaying(true);
        setIsSpeaking(true);
      } else {
        resumingFromPauseRef.current = false;
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(true);
      playCurrentSectionNarration();
    }
  };

  const handleNextSection = () => {
    soundEffects.playClick();
    if (!lessonData) return;
    if (voiceControllerRef.current) {
      voiceControllerRef.current.stop();
    }
    const currentIdx = currentSectionIndexRef.current;
    if (currentIdx < lessonData.sections.length - 1) {
      const nextIdx = currentIdx + 1;
      currentSectionIndexRef.current = nextIdx;
      setCurrentSectionIndex(nextIdx);
      isPlayingRef.current = true;
      setIsPlaying(true);
    }
  };

  const handlePrevSection = () => {
    soundEffects.playClick();
    if (voiceControllerRef.current) {
      voiceControllerRef.current.stop();
    }
    const currentIdx = currentSectionIndexRef.current;
    if (currentIdx > 0) {
      const prevIdx = currentIdx - 1;
      currentSectionIndexRef.current = prevIdx;
      setCurrentSectionIndex(prevIdx);
      isPlayingRef.current = true;
      setIsPlaying(true);
    }
  };

  const handleReplay = () => {
    soundEffects.playClick();
    if (voiceControllerRef.current) {
      voiceControllerRef.current.stop();
    }
    isPlayingRef.current = true;
    setIsPlaying(true);
    playCurrentSectionNarration();
  };

  const handleRestartFromBeginning = () => {
    soundEffects.playClick();
    stopSpeechProgressSweep();
    stopSwaraVoice();
    if (voiceControllerRef.current) {
      voiceControllerRef.current.stop();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    if (onPlayMentor) onPlayMentor();
    if (onResetUserManualScroll) onResetUserManualScroll();

    setLiveTypedExplanation('');
    currentNarrationTextRef.current = '';
    speechProgressRef.current = 0;
    setSectionProgressDisplay(0);
    onSpeechProgressChangeRef.current?.(0);
    setIsSpeaking(false);
    setMouthShape(0);

    const wasAtStart = currentSectionIndexRef.current === 0;
    currentSectionIndexRef.current = 0;
    setCurrentSectionIndex(0);
    isUserPausedRef.current = false;
    resumingFromPauseRef.current = false;
    isPlayingRef.current = true;
    setIsPlaying(true);
    setIsOpen(true);

    const firstSec = lessonData?.sections[0];
    if (firstSec && onActiveSectionChange) {
      onActiveSectionChange(firstSec);
    }

    if (wasAtStart) {
      setTimeout(() => {
        playCurrentSectionNarration();
      }, 280);
    }
  };

  const handleToggleLanguage = (newLang: MentorLanguage) => {
    soundEffects.playClick();
    const isSameLang = languageRef.current === newLang;

    // 1. Immediately halt any previous language audio, timer, and typed text so English & Hindi NEVER mix
    stopSpeechProgressSweep();
    stopSwaraVoice();
    if (voiceControllerRef.current) {
      voiceControllerRef.current.stop();
      voiceControllerRef.current.setLanguage(newLang);
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    setIsWelcomeSpeaking(false);
    setWelcomeMouthShape(0);
    setShowWelcomeBubble(false);
    setLiveTypedExplanation('');
    currentNarrationTextRef.current = '';
    speechProgressRef.current = 0;
    setSectionProgressDisplay(0);
    onSpeechProgressChangeRef.current?.(0);
    setIsSpeaking(false);
    setMouthShape(0);

    // 2. Commit new language cleanly
    setLanguage(newLang);
    languageRef.current = newLang;
    if (onLanguageChange) onLanguageChange(newLang);

    // 3. Stay on the current section and replay it cleanly in the newly chosen language
    isUserPausedRef.current = false;
    resumingFromPauseRef.current = false;
    isPlayingRef.current = true;
    setIsPlaying(true);
    setIsOpen(true);
    if (onResetUserManualScroll) onResetUserManualScroll();

    const activeSec = lessonData?.sections[currentSectionIndexRef.current];
    if (activeSec) {
      setSpeechBubbleText(
        newLang === 'hindi'
          ? languageEngine.standardizeHinglish(activeSec.hindiSummary)
          : activeSec.englishSummary
      );
    }

    // If language was already the same, trigger clean replay manually (otherwise useEffect([..., language]) fires)
    if (isSameLang) {
      setTimeout(() => {
        playCurrentSectionNarration();
      }, 260);
    }
  };

  const handleCycleSpeed = () => {
    soundEffects.playClick();
    const speeds = [1.0, 1.25, 1.5];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const newSpeed = speeds[nextIdx];
    setPlaybackSpeed(newSpeed);
    if (voiceControllerRef.current) {
      voiceControllerRef.current.setSpeed(newSpeed);
    }
  };

  const handleClose = () => {
    soundEffects.playClick();
    if (voiceControllerRef.current) {
      voiceControllerRef.current.stop();
    }
    isPlayingRef.current = false;
    setIsPlaying(false);
    setIsSpeaking(false);
    setIsOpen(false);
    if (onActiveSectionChange) onActiveSectionChange(null);
  };

  // Robot Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const newX = Math.max(10, Math.min(window.innerWidth - 130, e.clientX - dragStartOffset.current.x));
    const newY = Math.max(76, Math.min(window.innerHeight - 250, e.clientY - dragStartOffset.current.y));
    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  if (!lessonData) return null;

  return (
    <>
      {/* ── 1. LAUNCHER: 3D ROBOT ON LEFT SIDE WITH WELCOME SPEECH BUBBLE & LIP-SYNC ── */}
      {!isOpen && (
        <div className="fixed bottom-20 md:bottom-8 left-3 sm:left-6 md:left-8 z-[70] flex flex-col items-start sm:items-center pointer-events-auto select-none">
          {/* Ultra-Compact Animated Welcome Speech Bubble with Typewriter Text */}
          {showWelcomeBubble && (
            <div
              onClick={handleRobotTap}
              className="mb-2 max-w-[205px] sm:max-w-[225px] px-3 py-2 sm:px-3 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-purple-300 shadow-[0_8px_30px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-[1.03] cursor-pointer group relative z-30 animate-float-subtle"
            >
              {/* Header inside bubble: Tiny badge + Dismiss */}
              <div className="flex items-center justify-between gap-1.5 mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9.5px] font-black uppercase tracking-wider text-purple-700">
                    AI Mentor
                  </span>
                  {isWelcomeSpeaking && (
                    <span className="text-[8.5px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded-full border border-emerald-200 animate-pulse">
                      ● Speaking
                    </span>
                  )}
                </div>

                {/* Dismiss button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                      try {
                        window.speechSynthesis.cancel();
                      } catch {}
                    }
                    setIsWelcomeSpeaking(false);
                    setWelcomeMouthShape(0);
                    setShowWelcomeBubble(false);
                  }}
                  className="text-slate-400 hover:text-slate-700 p-0.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
                  title="Dismiss message"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              {/* Ultra-Short Typed Text Message */}
              <p className="text-xs sm:text-[13px] text-slate-800 leading-tight font-extrabold flex items-center">
                <span>{typedWelcomeText}</span>
                {!isTypingComplete && (
                  <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-purple-600 animate-pulse align-middle rounded-xs" />
                )}
              </p>

              {/* Speech Bubble Tail pointing down towards Robot */}
              <div
                className="absolute -bottom-2.5 left-8 sm:left-12 w-0 h-0"
                style={{
                  borderLeft: '7px solid transparent',
                  borderRight: '7px solid transparent',
                  borderTop: '8px solid #d8b4fe',
                }}
              />
              <div
                className="absolute -bottom-2 left-8 sm:left-12 w-0 h-0"
                style={{
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '7px solid #ffffff',
                }}
              />
            </div>
          )}

          {/* Clickable Full-Body Female AI Mentor (Slightly Larger, Crisp HD, Head-to-Shoes Visible) */}
          <button
            type="button"
            onClick={handleRobotTap}
            aria-label="Open Visual Learning Classroom with Future IT Mentor"
            title="Tap me to learn with AI Mentor!"
            className="relative w-[108px] h-[220px] sm:w-[126px] sm:h-[256px] md:w-[136px] md:h-[272px] p-0 bg-transparent border-none cursor-pointer group transition-transform duration-300 hover:scale-[1.03] active:scale-95 focus:outline-hidden"
          >
            {/* Full-Body Female AI Mentor (Head, Hands, Legs & Shoes 100% Visible + Live Eyes & Lip-Sync, Zero Blur) */}
            <div className="w-full h-full relative">
              <AnimatedFullBodyMentor
                isSpeaking={isWelcomeSpeaking}
                isBlinking={isBlinking}
                mouthShape={welcomeMouthShape}
              />
            </div>
          </button>
        </div>
      )}

      {/* ── 3. FLOATING FULL-BODY FEMALE AI MENTOR & DYNAMIC ORIENTATION ── */}
      {isOpen && (
        <div
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            transition: isDraggingRef.current ? 'none' : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          className="fixed top-0 left-0 z-50 pointer-events-auto select-none"
        >
          <div className="relative flex flex-col items-center">
            {/* The Full-Body Female AI Mentor — Slightly Larger Compact HD, Straight Upright */}
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="relative w-[122px] h-[250px] sm:w-[142px] sm:h-[284px] cursor-grab active:cursor-grabbing group"
              title="Drag me anywhere or use Arrow Keys!"
            >
              <div
                style={{
                  transform: isTargetToLeft ? 'scaleX(-1)' : 'scaleX(1)',
                  transition: 'transform 0.3s ease-out',
                }}
                className="w-full h-full relative"
              >
                <AnimatedFullBodyMentor
                  isSpeaking={isSpeaking}
                  isBlinking={isBlinking}
                  mouthShape={mouthShape}
                />
              </div>

              {/* Drag indicator badge on hover */}
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition px-1.5 py-0.5 rounded-full bg-slate-900/80 text-white text-[9px] font-mono flex items-center gap-0.5 pointer-events-none">
                <Move className="w-2.5 h-2.5" />
                <span>drag</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 4. FLOATING VOICE PLAYER (BOTTOM-CENTER COMPACT BAR WITH SYNC TIMELINE) ── */}
      {isOpen && (
        <div className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center max-w-[96vw] pointer-events-none">
          <div
            className="relative w-auto max-w-[96vw] rounded-full p-[2px] shadow-[0_12px_32px_-6px_rgba(76,29,149,0.24)] overflow-hidden transition-all duration-300 pointer-events-auto"
          >
            {/* Subtle Gradient Border */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#4F46E5]"
            />

            {/* Inner Card Content — Ultra-Slim Single-Line Bottom-Center Pill + Sleek Progress Track */}
            <div
              className="relative w-full h-full bg-white/95 backdrop-blur-xl rounded-full px-3.5 pt-1.5 pb-2.5 flex items-center justify-between gap-2 flex-nowrap"
            >
              {/* Sleek Bottom Progress Track with Purple Scrubber Dot */}
              {(() => {
                const pct = Math.min(
                  100,
                  Math.max(
                    2,
                    Math.round(
                      ((currentSectionIndex + sectionProgressDisplay) /
                        Math.max(1, lessonData.sections.length)) *
                        100
                    )
                  )
                );
                return (
                  <div
                    className="absolute bottom-1 left-5 right-5 h-[3px] bg-gradient-to-r from-[#EDE9FE] via-[#E0E7FF] to-[#FEF3C7] rounded-full pointer-events-none"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6366F1] transition-all duration-200 relative"
                      style={{ width: `${pct}%` }}
                    >
                      <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#6D28D9] border-2 border-white shadow-xs" />
                    </div>
                  </div>
                );
              })()}
              {/* Left: Step Badge + Section Title */}
              <div className="flex items-center gap-1.5 overflow-hidden min-w-0 flex-1">
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-[10px] shadow-2xs shrink-0 tabular-nums">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{currentSectionIndex + 1}/{lessonData.sections.length}</span>
                </span>
                <span className="truncate text-[11.5px] font-bold text-slate-900">
                  {currentSection?.title}
                </span>
              </div>

              {/* Center: Compact Playback Controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handlePrevSection}
                  disabled={currentSectionIndex === 0}
                  className="p-1 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer border border-slate-200"
                  title="Previous Section"
                >
                  <SkipBack className="w-3 h-3" />
                </button>

                {isPlaying ? (
                  <button
                    type="button"
                    onClick={handlePause}
                    className="px-2.5 py-1 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold flex items-center gap-1 shadow-2xs transition cursor-pointer"
                    title="Pause Teaching"
                  >
                    <Pause className="w-2.5 h-2.5 fill-current" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleResume}
                    className="px-2.5 py-1 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold flex items-center gap-1 shadow-2xs transition cursor-pointer"
                    title="Resume Teaching"
                  >
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>Resume</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleNextSection}
                  disabled={currentSectionIndex === lessonData.sections.length - 1}
                  className="p-1 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer border border-slate-200"
                  title="Next Section"
                >
                  <SkipForward className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={handleReplay}
                  className="p-1 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 transition cursor-pointer border border-slate-200"
                  title="Replay Current Section"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={handleRestartFromBeginning}
                  className="px-2 py-1 rounded-md bg-purple-50 hover:bg-purple-100 text-purple-700 hover:text-purple-900 text-[10.5px] font-bold flex items-center gap-1 transition cursor-pointer border border-purple-200 shadow-2xs"
                  title="Start Lesson From the Very Beginning (1/16)"
                >
                  <RotateCcw className="w-2.5 h-2.5 text-purple-600" />
                  <span>Start</span>
                </button>
              </div>

              {/* Right: Speed + Mute + Language + Close */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleCycleSpeed}
                  className="px-1.5 py-0.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 text-[10.5px] font-mono font-bold transition cursor-pointer border border-slate-200"
                  title="Speech Speed"
                >
                  {playbackSpeed}x
                </button>

                <button
                  type="button"
                  onClick={() => setIsMuted((prev) => !prev)}
                  className="p-1 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 transition cursor-pointer border border-slate-200"
                  title={isMuted ? 'Unmute Voice' : 'Mute Voice'}
                >
                  {isMuted ? (
                    <VolumeX className="w-3 h-3 text-red-500" />
                  ) : (
                    <Volume2 className="w-3 h-3 text-purple-600" />
                  )}
                </button>

                <div className="inline-flex rounded-full bg-purple-50 border border-purple-200 p-0.5 text-[10px] font-bold">
                  <button
                    type="button"
                    onClick={() => handleToggleLanguage('english')}
                    className={`px-2 py-0.5 rounded-full transition cursor-pointer ${
                      language === 'english'
                        ? 'bg-purple-600 text-white shadow-2xs'
                        : 'text-purple-800 hover:text-purple-950'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggleLanguage('hindi')}
                    className={`px-2 py-0.5 rounded-full transition cursor-pointer ${
                      language === 'hindi'
                        ? 'bg-purple-600 text-white shadow-2xs'
                        : 'text-purple-800 hover:text-purple-950'
                    }`}
                  >
                    हिंदी
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-5.5 h-5.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
                  title="Close Mentor"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
