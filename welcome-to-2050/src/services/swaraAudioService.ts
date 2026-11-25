/**
 * Universal Swara Audio Service (Exact DSA Coding Module 1 Visual Explanation Girl Voice)
 * Uses high-fidelity neural audio from /api/human-tts?voice=hi-IN-SwaraNeural
 * Permanently locked as the authoritative default voice across Future IT.
 * Integrates WebAudio Analyser for 100% physically synchronized real-time lip-sync.
 */

export const LOCKED_DEFAULT_VOICE = 'hi-IN-SwaraNeural';
export const LOCKED_DEFAULT_VOICE_LABEL = 'Indian Female Voice (Swara)';

let activeAudio: HTMLAudioElement | null = null;
let currentUtterance: SpeechSynthesisUtterance | null = null;
let sharedAudioContext: AudioContext | null = null;
let sharedAnalyser: AnalyserNode | null = null;
let currentMediaSource: MediaElementAudioSourceNode | null = null;
let isAudioElementPlaying = false;

const PRE_RENDERED_AUDIOS: Record<string, string> = {
  'Hey! Tap me to learn!': '/audio/swara_welcome.mp3',
  'Hey! Tap me to learn! 🚀': '/audio/swara_welcome.mp3',
  'Sahi jawab! Agle question par chalte hain.': '/audio/swara_game_correct.mp3',
  'Galat jawab, try again!': '/audio/swara_game_wrong.mp3',
};

export interface SwaraAudioOptions {
  onStart?: () => void;
  onWordBoundary?: (spokenTextSoFar: string, charIndex: number) => void;
  onEnd?: () => void;
  onSpeechEnd?: () => void;
  onError?: (err?: any) => void;
  volume?: number;
  gender?: string;
  language?: string;
}

function getSharedAudioContext(): { ctx: AudioContext; analyser: AnalyserNode } | null {
  if (typeof window === 'undefined') return null;
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return null;
    if (!sharedAudioContext) {
      sharedAudioContext = new AudioCtx();
    }
    if (sharedAudioContext.state === 'suspended') {
      sharedAudioContext.resume().catch(() => {});
    }
    if (!sharedAnalyser) {
      sharedAnalyser = sharedAudioContext.createAnalyser();
      sharedAnalyser.fftSize = 128;
      sharedAnalyser.smoothingTimeConstant = 0.35;
      sharedAnalyser.connect(sharedAudioContext.destination);
    }
    return { ctx: sharedAudioContext, analyser: sharedAnalyser };
  } catch {
    return null;
  }
}

/**
 * Returns the real-time physical vocal amplitude of the currently playing Swara voice (0.0 to 1.0).
 * Perfectly synchronized with the audio wave output; returns 0 during silence or before playback begins.
 */
export function getSwaraAudioAmplitude(): number {
  if (!isAudioElementPlaying || !sharedAnalyser) return 0;
  try {
    const data = new Uint8Array(sharedAnalyser.frequencyBinCount);
    sharedAnalyser.getByteFrequencyData(data);
    let sum = 0;
    // Lower to mid vocal frequency bins
    const count = Math.min(data.length, 24);
    for (let i = 0; i < count; i++) {
      sum += data[i];
    }
    const avg = sum / count;
    // Threshold and scale
    if (avg < 8) return 0;
    return Math.min(1.0, Math.max(0, (avg - 8) / 65));
  } catch {
    return 0;
  }
}

let activeWordSyncTimer: ReturnType<typeof setInterval> | null = null;

function clearWordSyncTimer() {
  if (activeWordSyncTimer) {
    clearInterval(activeWordSyncTimer);
    activeWordSyncTimer = null;
  }
}

export function pauseSwaraVoice(): boolean {
  let didPause = false;
  if (activeAudio && !activeAudio.paused) {
    try {
      activeAudio.pause();
      isAudioElementPlaying = false;
      didPause = true;
    } catch {}
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        didPause = true;
      }
    } catch {}
  }
  return didPause;
}

export function resumeSwaraVoice(): boolean {
  let didResume = false;
  if (activeAudio && activeAudio.paused && activeAudio.currentTime < (activeAudio.duration || Infinity)) {
    try {
      activeAudio.play().catch(() => {});
      isAudioElementPlaying = true;
      didResume = true;
    } catch {}
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        didResume = true;
      }
    } catch {}
  }
  return didResume;
}

export function setSwaraPlaybackRate(rate: number) {
  if (activeAudio) {
    try {
      activeAudio.playbackRate = rate;
    } catch {}
  }
}

export function stopSwaraVoice() {
  isAudioElementPlaying = false;
  clearWordSyncTimer();
  if (activeAudio) {
    try {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    } catch {}
    activeAudio = null;
  }
  if (currentMediaSource) {
    try {
      currentMediaSource.disconnect();
    } catch {}
    currentMediaSource = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
  currentUtterance = null;
}

/**
 * Helper: Slices text up to the end of the word at `targetCharIndex` so whole words appear as spoken.
 */
function sliceToWordEnd(fullText: string, targetCharIndex: number): string {
  if (targetCharIndex <= 0) return '';
  if (targetCharIndex >= fullText.length) return fullText;
  const nextSpace = fullText.indexOf(' ', targetCharIndex);
  return nextSpace === -1 ? fullText : fullText.slice(0, nextSpace);
}

export function playSwaraVoice(
  text: string,
  options?: SwaraAudioOptions
): Promise<boolean> {
  stopSwaraVoice();
  if (!text || !text.trim()) return Promise.resolve(false);

  const cleanText = text.trim();
  const preRendered = PRE_RENDERED_AUDIOS[cleanText];
  const audioUrl = preRendered || `/api/human-tts?voice=hi-IN-SwaraNeural&text=${encodeURIComponent(cleanText)}`;

  return new Promise((resolve) => {
    let hasResolved = false;
    let hasStartedActualAudio = false;

    const finalize = (success: boolean) => {
      if (!hasResolved) {
        hasResolved = true;
        isAudioElementPlaying = false;
        clearWordSyncTimer();
        if (success) {
          options?.onWordBoundary?.(cleanText, cleanText.length);
          options?.onEnd?.();
          options?.onSpeechEnd?.();
        } else {
          options?.onError?.();
          options?.onSpeechEnd?.();
        }
        resolve(success);
      }
    };

    try {
      const audio = new Audio();
      audio.crossOrigin = 'anonymous';
      audio.src = audioUrl;
      activeAudio = audio;
      audio.volume = options?.volume ?? 1.0;

      // Connect to WebAudio Analyser for live wave-level lip sync
      const webAudio = getSharedAudioContext();
      if (webAudio) {
        try {
          const source = webAudio.ctx.createMediaElementSource(audio);
          currentMediaSource = source;
          source.connect(webAudio.analyser);
        } catch {
          // If source node is already bound or cross-origin restricted, audio still plays
        }
      }

      // Only fire onStart & word-sync when actual decoded audio starts playing (never prematurely on onplay!)
      audio.onplaying = () => {
        if (!hasStartedActualAudio) {
          hasStartedActualAudio = true;
          isAudioElementPlaying = true;
          options?.onStart?.();
        }
        clearWordSyncTimer();
        const words = cleanText.split(/\s+/);
        let fallbackWordIdx = 1;
        options?.onWordBoundary?.(words.slice(0, 1).join(' '), words[0]?.length || 1);

        activeWordSyncTimer = setInterval(() => {
          if (!activeAudio || activeAudio.paused) return;
          const dur = activeAudio.duration;
          const cur = activeAudio.currentTime;
          if (dur && Number.isFinite(dur) && dur > 0.2) {
            const ratio = Math.min(1, Math.max(0, cur / (dur * 0.94)));
            const wordCountToShow = Math.max(1, Math.ceil(ratio * words.length));
            const spoken = words.slice(0, wordCountToShow).join(' ');
            options?.onWordBoundary?.(spoken, spoken.length);
          } else {
            fallbackWordIdx = Math.min(words.length, fallbackWordIdx + 1);
            const spoken = words.slice(0, fallbackWordIdx).join(' ');
            options?.onWordBoundary?.(spoken, spoken.length);
          }
        }, 120);
      };

      audio.onended = () => {
        isAudioElementPlaying = false;
        clearWordSyncTimer();
        activeAudio = null;
        finalize(true);
      };

      audio.onerror = () => {
        isAudioElementPlaying = false;
        clearWordSyncTimer();
        // Fallback to saved Indian Female Voice (Swara / Heera / Neerja)
        speakWebSpeechFallback(cleanText, options, finalize, hasStartedActualAudio);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          isAudioElementPlaying = false;
          clearWordSyncTimer();
          speakWebSpeechFallback(cleanText, options, finalize, hasStartedActualAudio);
        });
      }
    } catch {
      isAudioElementPlaying = false;
      clearWordSyncTimer();
      speakWebSpeechFallback(cleanText, options, finalize, hasStartedActualAudio);
    }
  });
}

function speakWebSpeechFallback(
  text: string,
  options?: SwaraAudioOptions,
  done?: (success: boolean) => void,
  alreadyNotifiedStart: boolean = false
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    done?.(false);
    return;
  }

  try {
    window.speechSynthesis.cancel();
    clearWordSyncTimer();
    const utterance = new SpeechSynthesisUtterance(text);
    currentUtterance = utterance;
    utterance.rate = 0.94;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices() || [];
    const swaraVoice =
      voices.find((v) => /swara/i.test(v.name)) ||
      voices.find((v) => /heera|neerja|kalpana|lekha|veena/i.test(v.name)) ||
      voices.find((v) => (/hi[-_]in/i.test(v.lang) || /en[-_]in/i.test(v.lang)) && /female|woman/i.test(v.name)) ||
      voices.find((v) => !/male|man|ravi|prabhat|hemant|madhav|david|mark/i.test(v.name) && (/hi[-_]in/i.test(v.lang) || /en[-_]in/i.test(v.lang))) ||
      voices[0];

    if (swaraVoice) {
      utterance.voice = swaraVoice;
      utterance.lang = swaraVoice.lang;
    } else {
      utterance.lang = 'hi-IN';
    }

    const words = text.split(/\s+/);
    let currentWordCount = 0;
    let boundarySupported = false;

    utterance.onstart = () => {
      isAudioElementPlaying = true;
      if (!alreadyNotifiedStart) {
        options?.onStart?.();
      }
      // Show first word immediately as she begins speaking
      currentWordCount = 1;
      const firstWord = words.slice(0, 1).join(' ');
      options?.onWordBoundary?.(firstWord, firstWord.length);

      // Paced word-by-word timer (~340ms/word matching rate 0.94) if browser doesn't fire onboundary
      clearWordSyncTimer();
      activeWordSyncTimer = setInterval(() => {
        if (boundarySupported) return;
        if (currentWordCount < words.length) {
          currentWordCount += 1;
          const spoken = words.slice(0, currentWordCount).join(' ');
          options?.onWordBoundary?.(spoken, spoken.length);
        }
      }, 340);
    };

    utterance.onboundary = (event: SpeechSynthesisEvent) => {
      if (typeof event.charIndex === 'number') {
        boundarySupported = true;
        const len = typeof event.charLength === 'number' && event.charLength > 0 ? event.charLength : 1;
        const spoken = sliceToWordEnd(text, event.charIndex + len);
        options?.onWordBoundary?.(spoken, spoken.length);
      }
    };

    utterance.onend = () => {
      isAudioElementPlaying = false;
      clearWordSyncTimer();
      currentUtterance = null;
      done?.(true);
    };
    utterance.onerror = () => {
      isAudioElementPlaying = false;
      clearWordSyncTimer();
      currentUtterance = null;
      done?.(false);
    };

    window.speechSynthesis.speak(utterance);
  } catch {
    isAudioElementPlaying = false;
    clearWordSyncTimer();
    done?.(false);
  }
}
