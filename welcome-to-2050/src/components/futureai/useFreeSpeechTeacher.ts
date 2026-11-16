import { useState, useEffect, useRef, useCallback } from 'react';
import { toPhoneticHinglish } from './visualHints/speechTransliteration';

export type PlaybackState = 'idle' | 'playing' | 'paused';
export type SpeechSpeed = 0.75 | 1.0 | 1.25 | 1.5;

export interface FreeSpeechTeacherOptions {
  narrationText: string;
}

/**
 * High-quality, 100% FREE Text-to-Speech hook using browser native Web Speech API.
 * Strict: ZERO paid TTS API calls (no Gemini, no ElevenLabs, no cloud billing).
 * Prefers Hindi (hi-IN) / Indian English male-sounding voices (e.g. Google हिन्दी, Microsoft Ravi, Microsoft Madhav).
 */
export function useFreeSpeechTeacher({ narrationText }: FreeSpeechTeacherOptions) {
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [speechSpeed, setSpeechSpeed] = useState<SpeechSpeed>(1.0);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isVoicePickerOpen, setIsVoicePickerOpen] = useState<boolean>(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isPausedRef = useRef<boolean>(false);

  // Load and rank available voices
  const refreshVoices = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    setAvailableVoices(voices);

    // Pick best natural Indian Female voice (e.g. Microsoft Heera, Swara, Kalpana, Neerja, Google हिन्दी Female)
    setSelectedVoice((prev) => {
      if (prev && voices.some((v) => v.name === prev.name)) return prev;

      const femaleKeywords = ['female', 'woman', 'heera', 'swara', 'kalpana', 'neerja', 'zira', 'kavya', 'priya', 'veena', 'sunita', 'shweta'];
      const maleKeywords = ['male', 'man', 'ravi', 'madhav', 'hemant', 'prabhat', 'david', 'mark', 'george'];

      // 1. Natural Indian Female Voice in Hindi (hi-IN, e.g. Swara, Kalpana, Google हिन्दी female)
      const hiFemale = voices.find((v) => {
        const lang = v.lang.toLowerCase();
        const name = v.name.toLowerCase();
        const isHi = lang.startsWith('hi') || name.includes('hindi');
        const isFemale = femaleKeywords.some((k) => name.includes(k)) || !maleKeywords.some((k) => name.includes(k));
        return isHi && isFemale;
      });
      if (hiFemale) return hiFemale;

      // 2. Natural Indian Female Voice in Indian English (en-IN, e.g. Microsoft Heera - English (India), Neerja)
      const enInFemale = voices.find((v) => {
        const lang = v.lang.toLowerCase();
        const name = v.name.toLowerCase();
        const isEnIn = lang === 'en-in' || lang.startsWith('en_in') || name.includes('india');
        const isFemale = femaleKeywords.some((k) => name.includes(k)) || !maleKeywords.some((k) => name.includes(k));
        return isEnIn && isFemale;
      });
      if (enInFemale) return enInFemale;

      // 3. Any Indian English voice that is explicitly female
      const anyEnInFemale = voices.find((v) => {
        const lang = v.lang.toLowerCase();
        const name = v.name.toLowerCase();
        return (
          (lang === 'en-in' || lang.startsWith('en_in') || name.includes('india')) &&
          femaleKeywords.some((k) => name.includes(k))
        );
      });
      if (anyEnInFemale) return anyEnInFemale;

      // 4. Any female voice (e.g. Microsoft Zira, Google UK English Female)
      const anyFemale = voices.find((v) => {
        const name = v.name.toLowerCase();
        return femaleKeywords.some((k) => name.includes(k));
      });
      if (anyFemale) return anyFemale;

      // 5. Any Hindi or Indian voice
      const anyIndian = voices.find((v) => v.lang.toLowerCase().startsWith('hi') || v.lang.toLowerCase().includes('in'));
      if (anyIndian) return anyIndian;

      // 6. Default browser voice or first available
      return voices.find((v) => v.default) || voices[0] || null;
    });
  }, []);

  // Listen for asynchronous voice loading
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    refreshVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = refreshVoices;
    }
    window.speechSynthesis.addEventListener('voiceschanged', refreshVoices);

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', refreshVoices);
    };
  }, [refreshVoices]);

  // Clean stop & cancellation
  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
    isPausedRef.current = false;
    setPlaybackState('idle');
  }, []);

  // On step or narration text change: Cancel previous speech and prepare for student to press Play.
  // STRICT: Do not autoplay speech!
  useEffect(() => {
    stop();
  }, [narrationText, stop]);

  // Component unmount cleanup
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  // Prepare technical Hinglish / Devanagari text for clear speech
  const getPreparedText = useCallback(
    (text: string, voice: SpeechSynthesisVoice | null): { text: string; lang: string } => {
      if (!text) return { text: '', lang: 'en-IN' };

      // Replace technical code symbols with friendly speech tokens
      const clean = text
        .replace(/input\(\)/gi, 'input function')
        .replace(/int\(\)/gi, 'int function')
        .replace(/print\(\)/gi, 'print function')
        .replace(/len\(\)/gi, 'length function')
        .replace(/\(\)/g, '')
        .replace(/=/g, ' equals ')
        .replace(/\+/g, ' plus ')
        .replace(/->/g, ' arrow ')
        .replace(/🐍/g, '')
        .replace(/👨‍🏫/g, '');

      const isNativeHindi =
        voice &&
        (voice.lang.toLowerCase().startsWith('hi') || voice.name.toLowerCase().includes('hindi'));

      if (isNativeHindi) {
        return { text: clean, lang: voice.lang || 'hi-IN' };
      }

      // If voice is Indian English (e.g. Microsoft Ravi) or default, use smart phonetic transliteration
      const phonetic = toPhoneticHinglish(clean);
      return { text: phonetic, lang: voice?.lang || 'en-IN' };
    },
    []
  );

  // Play narration (starts from beginning or resumes if paused)
  const play = useCallback(
    (customText?: string) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
      if (isMuted) return;

      const raw = customText || narrationText;
      if (!raw.trim()) return;

      // If paused, resume
      if (isPausedRef.current && window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        isPausedRef.current = false;
        setPlaybackState('playing');
        return;
      }

      // Cancel any ongoing utterance
      window.speechSynthesis.cancel();

      const { text: spokenText, lang } = getPreparedText(raw, selectedVoice);
      const utterance = new SpeechSynthesisUtterance(spokenText);

      utterance.lang = lang;
      utterance.rate = speechSpeed;
      utterance.pitch = 1.0;
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => {
        isPausedRef.current = false;
        setPlaybackState('playing');
      };

      utterance.onpause = () => {
        isPausedRef.current = true;
        setPlaybackState('paused');
      };

      utterance.onresume = () => {
        isPausedRef.current = false;
        setPlaybackState('playing');
      };

      utterance.onend = () => {
        isPausedRef.current = false;
        setPlaybackState('idle');
        // STRICT: Never automatically advance to the next visualization step!
      };

      utterance.onerror = (e) => {
        if (e.error === 'canceled' || e.error === 'interrupted') return;
        isPausedRef.current = false;
        setPlaybackState('idle');
      };

      utteranceRef.current = utterance;
      setPlaybackState('playing');
      window.speechSynthesis.speak(utterance);
    },
    [isMuted, narrationText, selectedVoice, speechSpeed, getPreparedText]
  );

  // Pause speech
  const pause = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      isPausedRef.current = true;
      setPlaybackState('paused');
    }
  }, []);

  // Resume speech
  const resume = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      isPausedRef.current = false;
      setPlaybackState('playing');
    } else if (playbackState === 'idle') {
      play();
    }
  }, [playbackState, play]);

  // Replay speech from beginning
  const replay = useCallback(() => {
    stop();
    setTimeout(() => {
      play();
    }, 60);
  }, [stop, play]);

  // Toggle Mute
  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      if (next) {
        stop();
      }
      return next;
    });
  }, [stop]);

  // Cycle speed (0.75x -> 1.0x -> 1.25x -> 1.5x -> 0.75x)
  const cycleSpeed = useCallback(() => {
    const speeds: SpeechSpeed[] = [0.75, 1.0, 1.25, 1.5];
    setSpeechSpeed((prev) => {
      const idx = speeds.indexOf(prev);
      return speeds[(idx + 1) % speeds.length];
    });
  }, []);

  return {
    playbackState,
    isMuted,
    speechSpeed,
    availableVoices,
    selectedVoice,
    isVoicePickerOpen,
    setIsVoicePickerOpen,
    play,
    pause,
    resume,
    replay,
    stop,
    toggleMute,
    setSpeechSpeed,
    cycleSpeed,
    setSelectedVoice,
  };
}
