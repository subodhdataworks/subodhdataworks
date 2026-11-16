import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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

interface FutureITMentorProps {
  topicId: number;
  isExcelTrack?: boolean;
  sectionRect?: SectionRectInfo | null;
  scrollSettled?: boolean;
  onActiveSectionChange?: (section: MentorLessonSection | null) => void;
  onUserManualScrollDetected?: boolean;
  onResetUserManualScroll?: () => void;
  language?: MentorLanguage;
  onLanguageChange?: (lang: MentorLanguage) => void;
  isVideoPlaying?: boolean;
  onPlayMentor?: () => void;
}

export const FutureITMentor: React.FC<FutureITMentorProps> = ({
  topicId,
  isExcelTrack = false,
  sectionRect,
  scrollSettled = true,
  onActiveSectionChange,
  onUserManualScrollDetected,
  onResetUserManualScroll,
  language: externalLanguage = 'english',
  onLanguageChange,
  isVideoPlaying,
  onPlayMentor,
}) => {
  const lessonData: MentorLessonData | null = useMemo(() => {
    return getMentorLessonData(topicId, isExcelTrack);
  }, [topicId, isExcelTrack]);

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
  const WELCOME_VOICE_TEXT = 'Hey! Ready to learn? Tap me and enjoy learning with interactive visualizations!';
  const WELCOME_DISPLAY_TEXT = 'Hey! Tap me to learn! 🚀';

  const [showWelcomeBubble, setShowWelcomeBubble] = useState(true);
  const [typedWelcomeText, setTypedWelcomeText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isWelcomeSpeaking, setIsWelcomeSpeaking] = useState(false);
  const [welcomeMouthShape, setWelcomeMouthShape] = useState<number>(0);
  const welcomeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const hasSpokenWelcomeInSessionRef = useRef(false);
  const lipSyncTimerRef = useRef<any>(null);

  // ── RESET STATE ON TOPIC/LESSON CHANGE ──
  // Next lesson starts from the very beginning, and robot only explains when launched!
  const prevTopicIdRef = useRef<number>(topicId);
  useEffect(() => {
    if (prevTopicIdRef.current !== topicId) {
      prevTopicIdRef.current = topicId;

      // 1. Stop any voice / audio playback
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
  }, [topicId, onActiveSectionChange]);

  // Typewriter effect for speech bubble
  useEffect(() => {
    let index = 0;
    setTypedWelcomeText('');
    setIsTypingComplete(false);

    const timer = setInterval(() => {
      index++;
      setTypedWelcomeText(WELCOME_DISPLAY_TEXT.slice(0, index));
      if (index >= WELCOME_DISPLAY_TEXT.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 45);

    return () => clearInterval(timer);
  }, [topicId]);

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

  // Select best natural female English teacher voice on the device
  const getBestFemaleEnglishVoice = (): SpeechSynthesisVoice | null => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices || voices.length === 0) return null;

    // High priority natural English female voices (Windows, Mac, Android, Chrome)
    const priorityKeywords = [
      'heera',
      'zira',
      'aria',
      'jenny',
      'google us english',
      'samantha',
      'karen',
      'victoria',
      'veena',
      'neerja',
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

  // Play Native Welcome Voice
  const playWelcomeVoice = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();
    } catch {}

    // Give browser speech synthesis a tick after cancel() to clear internal queue cleanly
    setTimeout(() => {
      try {
        const utterance = new SpeechSynthesisUtterance(WELCOME_VOICE_TEXT);
        utterance.rate = 0.98;
        utterance.pitch = 1.15; // Cheerful natural female teacher pitch

        const voice = getBestFemaleEnglishVoice();
        if (voice) {
          utterance.voice = voice;
          utterance.lang = voice.lang;
        } else {
          utterance.lang = 'en-US';
        }

        utterance.onstart = () => {
          setIsWelcomeSpeaking(true);
          hasSpokenWelcomeInSessionRef.current = true;
          try {
            sessionStorage.setItem('futureai_robot_welcome_voice_session_v1', 'true');
          } catch {}
          startLipSyncAnimation();
        };

        utterance.onend = () => {
          stopLipSyncAnimation();
        };

        utterance.onerror = (e) => {
          console.warn('Welcome voice speech notice:', e);
          stopLipSyncAnimation();
        };

        // Retain strong reference on window to prevent Chrome V8 garbage collection
        (window as any).__robot_welcome_utterance = utterance;
        welcomeUtteranceRef.current = utterance;

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn('SpeechSynthesis speak error:', err);
        stopLipSyncAnimation();
      }
    }, 50);
  }, []);

  // Silent welcome bubble on mount (NO auto-speech: voice explains ONLY when robot is launched)
  useEffect(() => {
    setShowWelcomeBubble(true);
    setIsWelcomeSpeaking(false);
  }, [topicId]);

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
          ? 'Shabash! Visual Notes complete ho gaye! Ab chaliye Practice Challenge solve karein!'
          : 'Outstanding! Visual Notes is complete! Now proceed to the practice challenge!';
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
        setIsSpeaking(true);
      },
      onBoundary: () => {
        // Dynamic syllable/word lip-sync variety
        setMouthShape((prev) => (prev + 1) % 4);
        // 18% chance of an expressive syllable blink/squeeze during speech
        if (Math.random() < 0.18) {
          setIsBlinking(true);
          setTimeout(() => setIsBlinking(false), 120);
        }
      },
      onEnd: () => {
        setIsSpeaking(false);
        setMouthShape(0);
        // Automatically advance to the next section
        handleSectionComplete();
      },
      onError: (err) => {
        console.warn('Mentor voice notice:', err);
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
    voiceControllerRef.current.speak(narration);
  }, [currentSection]);

  // Trigger narration whenever section changes or resumes, after scroll settles
  useEffect(() => {
    if (!isOpen || !isPlaying || !currentSection) return;

    // Small delay to ensure PDF has smoothly scrolled and settled
    const timer = setTimeout(() => {
      playCurrentSectionNarration();
    }, 450);

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

    // Desktop: Position robot along the LEFT side of the visual notes panel
    // Robot faces inward to the right and explains the content without blocking it!
    let targetY = 190;
    if (sectionRect && sectionRect.top > 0) {
      targetY = Math.max(140, Math.min(window.innerHeight - 240, sectionRect.centerY - 50));
    } else {
      if (currentSection.robotTarget === 'top-right' || currentSection.robotTarget === 'top-left') targetY = 180;
      else if (currentSection.robotTarget === 'mid-right' || currentSection.robotTarget === 'mid-left') targetY = 320;
      else targetY = 520;
    }

    // Place robot comfortably on the left side (~16px to 28px)
    const targetX = 20;

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
    setIsPlaying(true);
    if (voiceControllerRef.current) {
      voiceControllerRef.current.resume();
    } else {
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

  const handleToggleLanguage = (newLang: MentorLanguage) => {
    soundEffects.playClick();
    const isSameLang = languageRef.current === newLang;
    setLanguage(newLang);
    languageRef.current = newLang;
    if (onLanguageChange) onLanguageChange(newLang);
    if (voiceControllerRef.current) {
      voiceControllerRef.current.setLanguage(newLang);
      voiceControllerRef.current.stop();
    }

    // Reset explaining from the very beginning (Step 1)
    const wasAlreadyZero = currentSectionIndexRef.current === 0;
    currentSectionIndexRef.current = 0;
    setCurrentSectionIndex(0);
    isUserPausedRef.current = false;
    isPlayingRef.current = true;
    setIsPlaying(true);
    setIsOpen(true);
    if (onResetUserManualScroll) onResetUserManualScroll();

    if (lessonData && lessonData.sections[0]) {
      setSpeechBubbleText(newLang === 'hindi' ? languageEngine.standardizeHinglish(lessonData.sections[0].hindiSummary) : lessonData.sections[0].englishSummary);
    }

    // If language was already the same AND section was already 0, the useEffect will not re-run,
    // so in this case only, manually trigger narration. Otherwise, useEffect([..., language]) triggers cleanly.
    if (isSameLang && wasAlreadyZero) {
      setTimeout(() => {
        playCurrentSectionNarration();
      }, 350);
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
    const newX = Math.max(10, Math.min(window.innerWidth - 170, e.clientX - dragStartOffset.current.x));
    const newY = Math.max(70, Math.min(window.innerHeight - 200, e.clientY - dragStartOffset.current.y));
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

          {/* Clickable 3D Robot Mascot (With Soft Purple Glow & Animated Lip-Sync) */}
          <button
            type="button"
            onClick={handleRobotTap}
            aria-label="Launch Visual Learning Classroom with Future IT Mentor"
            title="Tap me to launch Visual Learning Classroom!"
            className="relative w-32 h-22 sm:w-44 sm:h-30 md:w-48 md:h-32 p-0 bg-transparent border-none cursor-pointer group transition-transform duration-300 transform hover:scale-105 active:scale-95 focus:outline-hidden"
          >
            {/* Soft Purple Glow behind the robot */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-500/25 via-indigo-500/20 to-purple-600/25 blur-xl pointer-events-none animate-pulse" />

            {/* The 3D Robot Mascot Body with Articulated Gesturing Hand */}
            <div className="w-full h-full relative animate-float-subtle group-hover:drop-shadow-[0_10px_25px_rgba(147,51,234,0.45)] transition-all">
              <img
                src="/images/future_it_mentor_robot_body.png"
                alt="Future IT Mentor Robot"
                className="w-full h-full object-contain filter drop-shadow-2xl"
                draggable={false}
              />
              {/* Natural Articulated Hand Gesture (Pivots smoothly up and down around elbow) */}
              <img
                src="/images/future_it_mentor_robot_hand.png"
                alt=""
                className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                  isWelcomeSpeaking ? 'animate-mentor-hand-speaking' : 'animate-mentor-hand-float'
                }`}
                draggable={false}
              />

              {/* Synchronized Real Mouth Lip-Sync Overlay when Welcome Voice is Speaking */}
              {(isWelcomeSpeaking || welcomeMouthShape > 0) && (
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
                  viewBox="0 0 1024 682"
                >
                  <defs>
                    <filter id="welcomeMouthGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="1.5" result="b1" />
                      <feGaussianBlur stdDeviation="3.5" result="b2" />
                      <feMerge>
                        <feMergeNode in="b2" />
                        <feMergeNode in="b1" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Micro-precise tiny mask covering EXACT mouth at y: 144-156 */}
                  <ellipse cx="429" cy="151" rx="20" ry="9" fill="#080e1b" opacity="0.98" />

                  {welcomeMouthShape === 0 && (
                    <path
                      d="M 413 144 Q 429 157 447 150"
                      fill="none"
                      stroke="#00ffff"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      filter="url(#welcomeMouthGlow)"
                    />
                  )}
                  {welcomeMouthShape === 1 && (
                    <path
                      d="M 413 144 Q 429 161 447 150 Q 429 147 413 144 Z"
                      fill="#041a24"
                      stroke="#00ffff"
                      strokeWidth="5.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      filter="url(#welcomeMouthGlow)"
                    />
                  )}
                  {welcomeMouthShape === 2 && (
                    <path
                      d="M 413 144 Q 429 167 447 150 Q 429 146 413 144 Z"
                      fill="#041a24"
                      stroke="#00ffff"
                      strokeWidth="5.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      filter="url(#welcomeMouthGlow)"
                    />
                  )}
                  {welcomeMouthShape === 3 && (
                    <path
                      d="M 413 144 Q 429 163 447 150 Q 429 143 413 144 Z"
                      fill="#041a24"
                      stroke="#00ffff"
                      strokeWidth="5.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      filter="url(#welcomeMouthGlow)"
                    />
                  )}
                </svg>
              )}
            </div>

            {/* Glowing "Tap Me!" Pill directly on the robot */}
            <div className="absolute -bottom-2 sm:-bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-extrabold text-[10px] sm:text-[11px] shadow-lg shadow-purple-500/40 flex items-center gap-1.5 border border-purple-300 animate-pulse whitespace-nowrap z-30">
              <Sparkles className="w-3 h-3 text-amber-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Tap to Launch! 🚀</span>
            </div>
          </button>
        </div>
      )}

      {/* ── 3. FLOATING 3D ROBOT MASCOT & DYNAMIC ORIENTATION ── */}
      {isOpen && (
        <div
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            transition: isDraggingRef.current ? 'none' : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          className="fixed top-0 left-0 z-50 pointer-events-auto select-none"
        >
          <div className="relative flex flex-col items-center">
            {/* The 3D Robot Image with Hovering, Dynamic Head Tilt & Facing */}
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              style={{
                // Tilt dynamically towards the explained concept
                transform: `rotate(${tiltDeg}deg)`,
                transition: 'transform 0.4s ease-out',
              }}
              className="relative w-36 h-24 sm:w-48 sm:h-32 cursor-grab active:cursor-grabbing group"
              title="Drag me anywhere or use Arrow Keys / D-pad!"
            >
              {/* 
                ROBOT MASCOT CONTAINER:
                Robot naturally faces and gestures to the RIGHT (face right, hand pointing right).
                When on left side of notes (!isTargetToLeft), scaleX(1) keeps it facing right into notes.
                If dragged to the right of the notes (isTargetToLeft), scaleX(-1) turns it back left.
              */}
              <div
                style={{
                  transform: isTargetToLeft ? 'scaleX(-1)' : 'scaleX(1)',
                  transition: 'transform 0.3s ease-out',
                }}
                className="w-full h-full relative"
              >
                {/* 3D Robot Mascot Body */}
                <img
                  src="/images/future_it_mentor_robot_body.png"
                  alt="Future IT Mentor Robot"
                  className={`w-full h-full object-contain filter drop-shadow-xl ${
                    isSpeaking ? 'animate-bounce-subtle' : 'animate-float-subtle'
                  }`}
                  draggable={false}
                />

                {/* Articulated Hand Gesture (Pivots up and down like a real robot teaching) */}
                <img
                  src="/images/future_it_mentor_robot_hand.png"
                  alt=""
                  className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                    isSpeaking ? 'animate-mentor-hand-speaking' : 'animate-mentor-hand-float'
                  }`}
                  draggable={false}
                />

                {/* 
                  EXACT REAL MOUTH LIP-SYNC (Active only when speaking):
                  Positioned pixel-accurately on the robot's real mouth (cx: 431, cy: 140, w: 41px).
                  Eyes remain 100% untouched, authentic, and natural.
                */}
                {isSpeaking && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
                    viewBox="0 0 1024 682"
                  >
                    <defs>
                      <filter id="realMouthGlow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="1.5" result="b1" />
                        <feGaussianBlur stdDeviation="3.5" result="b2" />
                        <feMerge>
                          <feMergeNode in="b2" />
                          <feMergeNode in="b1" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Micro-precise tiny mask covering EXACT mouth at y: 144-156 */}
                    <ellipse cx="429" cy="151" rx="20" ry="9" fill="#080e1b" opacity="0.98" />

                    {mouthShape === 0 && (
                      // Resting / closed smile
                      <path
                        d="M 413 144 Q 429 157 447 150"
                        fill="none"
                        stroke="#00ffff"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        filter="url(#realMouthGlow)"
                      />
                    )}
                    {mouthShape === 1 && (
                      // Parted talking smile
                      <path
                        d="M 413 144 Q 429 161 447 150 Q 429 147 413 144 Z"
                        fill="#041a24"
                        stroke="#00ffff"
                        strokeWidth="5.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        filter="url(#realMouthGlow)"
                      />
                    )}
                    {mouthShape === 2 && (
                      // Open vowel talking smile
                      <path
                        d="M 413 144 Q 429 167 447 150 Q 429 146 413 144 Z"
                        fill="#041a24"
                        stroke="#00ffff"
                        strokeWidth="5.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        filter="url(#realMouthGlow)"
                      />
                    )}
                    {mouthShape === 3 && (
                      // Syllable talking smile
                      <path
                        d="M 413 144 Q 429 163 447 150 Q 429 147 413 144 Z"
                        fill="#041a24"
                        stroke="#00ffff"
                        strokeWidth="5.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        filter="url(#realMouthGlow)"
                      />
                    )}
                  </svg>
                )}

                {/* Counter-flipped chest badge layer only when mirrored, so branding is NEVER reversed */}
                {isTargetToLeft && (
                  <div
                    style={{ transform: 'scaleX(-1)' }}
                    className="absolute top-[42%] left-[38%] -translate-x-1/2 -translate-y-1/2 bg-slate-950/90 border border-cyan-400/60 rounded-full px-1.5 py-0.5 shadow-xs pointer-events-none"
                  >
                    <span className="text-[7px] font-black text-cyan-300 tracking-tight leading-none">
                      Future AI
                    </span>
                  </div>
                )}
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

      {/* ── 4. FLOATING MENTOR CONTROLS PANEL (WITH ROTATING GOOGLE AI COLOR BORDER) ── */}
      {isOpen && (
        <div className="fixed bottom-7 sm:bottom-9 md:bottom-11 left-1/2 -translate-x-1/2 z-[9999] w-[94%] max-w-md sm:max-w-lg rounded-3xl p-[2.5px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 pointer-events-auto">
          {/* Google Multi-Color Rotating Gradient Border ("patli sa round color") */}
          <div
            className={`absolute -inset-[150%] pointer-events-none ${
              isPlaying ? 'animate-google-spin-fast opacity-100' : 'animate-google-spin opacity-75'
            }`}
            style={{
              background:
                'conic-gradient(from 0deg, #4285F4 0deg, #9b72cb 60deg, #EA4335 120deg, #FBBC05 180deg, #34A853 240deg, #00d2ff 300deg, #4285F4 360deg)',
            }}
          />

          {/* Inner Card Content */}
          <div className="relative w-full h-full bg-white/95 backdrop-blur-xl rounded-[22px] px-3.5 py-2.5 sm:px-4 sm:py-3 flex flex-col gap-2">
            {/* Top Row: Section Title & Language Switcher & Close */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="text-xs font-black text-slate-900 truncate flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-[10.5px] shadow-xs shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>{currentSectionIndex + 1}/{lessonData.sections.length}</span>
                  </span>
                  <span className="truncate font-black text-slate-900">{currentSection?.title}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Language Switcher: ONLY English | हिंदी (English First) */}
                <div className="inline-flex rounded-full bg-purple-50 border border-purple-200 p-0.5 text-[11px] font-bold">
                  <button
                    type="button"
                    onClick={() => handleToggleLanguage('english')}
                    className={`px-2.5 py-0.5 rounded-full transition cursor-pointer ${
                      language === 'english'
                        ? 'bg-purple-600 text-white shadow-xs font-black'
                        : 'text-purple-800 hover:text-purple-950'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggleLanguage('hindi')}
                    className={`px-2.5 py-0.5 rounded-full transition cursor-pointer ${
                      language === 'hindi'
                        ? 'bg-purple-600 text-white shadow-xs font-black'
                        : 'text-purple-800 hover:text-purple-950'
                    }`}
                  >
                    हिंदी
                  </button>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
                  title="Close Mentor"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Voice Fallback Notice if device lacks Indian voice pack */}
            {!voiceStatus.isAuthenticIndian && (
              <div className="flex items-center gap-1.5 text-[10px] text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-xl border border-amber-200/60 font-semibold">
                <Info className="w-3 h-3 shrink-0 text-amber-600" />
                <span className="truncate">Device Indian voice pack not installed — using default system voice.</span>
              </div>
            )}

            {/* Bottom Row: Playback Controls */}
            <div className="flex items-center justify-between gap-2">
              {/* Step navigation & Play/Pause */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevSection}
                  disabled={currentSectionIndex === 0}
                  className="p-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer border border-slate-200"
                  title="Previous Section"
                >
                  <SkipBack className="w-3.5 h-3.5" />
                </button>

                {isPlaying ? (
                  <button
                    type="button"
                    onClick={handlePause}
                    className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-black flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                    title="Pause Teaching"
                  >
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleResume}
                    className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-black flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                    title="Resume Teaching"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Resume</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleNextSection}
                  disabled={currentSectionIndex === lessonData.sections.length - 1}
                  className="p-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer border border-slate-200"
                  title="Next Section"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleReplay}
                  className="p-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 transition cursor-pointer border border-slate-200"
                  title="Replay Current Section"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Speed & Mute controls */}
              <div className="flex items-center gap-1.5">
                {/* Speed Button */}
                <button
                  type="button"
                  onClick={handleCycleSpeed}
                  className="px-2 py-1 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-[11px] font-mono font-bold transition cursor-pointer border border-slate-200"
                  title="Speech Speed"
                >
                  {playbackSpeed}x
                </button>

                {/* Mute Button */}
                <button
                  type="button"
                  onClick={() => setIsMuted((prev) => !prev)}
                  className="p-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 transition cursor-pointer border border-slate-200"
                  title={isMuted ? 'Unmute Voice' : 'Mute Voice'}
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 text-red-500" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-purple-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
