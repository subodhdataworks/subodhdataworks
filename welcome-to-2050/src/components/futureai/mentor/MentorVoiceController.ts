/**
 * Future IT Mentor Voice Controller
 * Web Speech Synthesis engine specifically calibrated for:
 * 1. Natural Indian Hindi (hi-IN)
 * 2. Natural Indian English (en-IN)
 * Zero external paid API required. Free, instant, privacy-friendly.
 */

import {
  playSwaraVoice,
  stopSwaraVoice,
  pauseSwaraVoice,
  resumeSwaraVoice,
  setSwaraPlaybackRate,
} from '../../../services/swaraAudioService';

export type MentorLanguage = 'hindi' | 'english';

export interface VoiceStatus {
  voiceName: string;
  isAuthenticIndian: boolean;
  langCode: string;
}

export class MentorVoiceController {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking = false;
  private isPaused = false;
  private currentLanguage: MentorLanguage = 'hindi';
  private playbackSpeed = 1.0;
  private isMuted = false;
  private watchdogTimer: any = null;
  private keepAliveTimer: any = null;

  private onSpeechStart?: () => void;
  private onSpeechEnd?: () => void;
  private onSpeechError?: (err: any) => void;
  private onSpeechBoundary?: (event: SpeechSynthesisEvent & { spokenTextSoFar?: string }) => void;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => {};
      }
    }
  }

  public setCallbacks(callbacks: {
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (err: any) => void;
    onBoundary?: (event: SpeechSynthesisEvent & { spokenTextSoFar?: string }) => void;
  }) {
    this.onSpeechStart = callbacks.onStart;
    this.onSpeechEnd = callbacks.onEnd;
    this.onSpeechError = callbacks.onError;
    this.onSpeechBoundary = callbacks.onBoundary;
  }

  public setLanguage(lang: MentorLanguage) {
    this.currentLanguage = lang;
  }

  public setSpeed(speed: number) {
    this.playbackSpeed = speed;
    setSwaraPlaybackRate(speed);
    if (this.currentUtterance) {
      this.currentUtterance.rate = speed;
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && this.isSpeaking) {
      this.stop();
    }
  }

  /**
   * Check voice status and determine if an authentic Indian voice is available on device
   */
  public getVoiceStatus(lang: MentorLanguage = this.currentLanguage): VoiceStatus {
    if (!this.synth) {
      return { voiceName: 'None', isAuthenticIndian: false, langCode: 'none' };
    }
    const voices = this.synth.getVoices() || [];
    const bestVoice = this.getBestVoice(lang);

    if (!bestVoice) {
      return {
        voiceName: 'Default Browser Voice',
        isAuthenticIndian: false,
        langCode: lang === 'hindi' ? 'hi-IN' : 'en-IN',
      };
    }

    const name = bestVoice.name.toLowerCase();
    const voiceLang = bestVoice.lang.toLowerCase();

    const isIndian =
      voiceLang.includes('hi-in') ||
      voiceLang.includes('hi_in') ||
      voiceLang.includes('en-in') ||
      voiceLang.includes('en_in') ||
      name.includes('hindi') ||
      name.includes('india') ||
      name.includes('hemant') ||
      name.includes('ravi') ||
      name.includes('prabhat') ||
      name.includes('neerja') ||
      name.includes('kalpana') ||
      name.includes('lekha');

    return {
      voiceName: bestVoice.name,
      isAuthenticIndian: isIndian,
      langCode: bestVoice.lang,
    };
  }

  /**
   * Find best matching Indian female / teacher voice
   */
  private getBestVoice(lang: MentorLanguage): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return null;

    const femaleKeywords = [
      'female', 'swara', 'kalpana', 'neerja', 'heera', 'zira', 'samantha',
      'victoria', 'karen', 'lekha', 'veena', 'ananya', 'shruti', 'priya',
      'kanya', 'susan', 'catherine', 'jenny', 'aria', 'woman', 'girl'
    ];
    const maleKeywords = ['male', 'hemant', 'ravi', 'prabhat', 'david', 'george', 'mark', 'man', 'boy'];

    const isFemale = (v: SpeechSynthesisVoice) => {
      const name = v.name.toLowerCase();
      return femaleKeywords.some((k) => name.includes(k)) && !maleKeywords.some((k) => name.includes(k));
    };

    if (lang === 'hindi') {
      // 1. Look for Hindi (India) Female voice (e.g. Swara, Kalpana, Lekha, Hindi Female)
      const femaleHindi = voices.find(
        (v) =>
          (v.lang.toLowerCase().includes('hi-in') ||
            v.lang.toLowerCase().includes('hi_in') ||
            v.name.toLowerCase().includes('hindi')) &&
          isFemale(v)
      );
      if (femaleHindi) return femaleHindi;

      // 2. Any Hindi voice that isn't explicitly male
      const anyHindiNonMale = voices.find(
        (v) =>
          (v.lang.toLowerCase().includes('hi-in') ||
            v.lang.toLowerCase().includes('hi_in') ||
            v.name.toLowerCase().includes('hindi')) &&
          !maleKeywords.some((k) => v.name.toLowerCase().includes(k))
      );
      if (anyHindiNonMale) return anyHindiNonMale;

      // 3. Any Hindi voice
      const anyHindi = voices.find(
        (v) =>
          v.lang.toLowerCase().includes('hi-in') ||
          v.lang.toLowerCase().includes('hi_in') ||
          v.name.toLowerCase().includes('hindi')
      );
      if (anyHindi) return anyHindi;

      // 4. Fallback for systems without Hindi voice installed:
      // Use Indian English Female voice (e.g. Microsoft Heera, en-IN) which handles Indian phonetics gracefully
      const indianFemale = voices.find(
        (v) =>
          (v.lang.toLowerCase().includes('en-in') ||
            v.lang.toLowerCase().includes('en_in') ||
            v.name.toLowerCase().includes('heera') ||
            v.name.toLowerCase().includes('india')) &&
          isFemale(v)
      );
      if (indianFemale) return indianFemale;

      const anyIndian = voices.find(
        (v) =>
          v.lang.toLowerCase().includes('en-in') ||
          v.lang.toLowerCase().includes('en_in') ||
          v.name.toLowerCase().includes('india')
      );
      if (anyIndian) return anyIndian;
    }

    if (lang === 'english') {
      // 1. Look for Swara or Indian Female voice (Swara, Heera, Neerja, Kalpana, Veena)
      const swaraIndianFemale = voices.find(
        (v) =>
          (/swara|heera|neerja|kalpana|lekha|veena|ananya|shruti|priya/i.test(v.name) ||
            v.lang.toLowerCase().includes('en-in') ||
            v.lang.toLowerCase().includes('en_in') ||
            v.name.toLowerCase().includes('india')) &&
          isFemale(v)
      );
      if (swaraIndianFemale) return swaraIndianFemale;

      // 2. Any English Female voice (e.g. Zira, Samantha, Jenny, Aria, Google UK Female)
      const anyEnglishFemale = voices.find(
        (v) => v.lang.toLowerCase().startsWith('en') && isFemale(v)
      );
      if (anyEnglishFemale) return anyEnglishFemale;

      // 3. Any English voice that isn't explicitly male
      const anyEnglishNonMale = voices.find(
        (v) => v.lang.toLowerCase().startsWith('en') && !maleKeywords.some((k) => v.name.toLowerCase().includes(k))
      );
      if (anyEnglishNonMale) return anyEnglishNonMale;
    }

    // Fallback: any female voice across all languages
    const fallbackFemale = voices.find((v) => isFemale(v));
    if (fallbackFemale) return fallbackFemale;

    const fallbackNonMale = voices.find((v) => !maleKeywords.some((k) => v.name.toLowerCase().includes(k)));
    if (fallbackNonMale) return fallbackNonMale;

    return voices[0] || null;
  }

  private startKeepAlive() {
    this.stopKeepAlive();
    this.keepAliveTimer = setInterval(() => {
      if (this.synth && this.isSpeaking && !this.isPaused) {
        try {
          this.synth.pause();
          this.synth.resume();
        } catch {}
      }
    }, 8000);
  }

  private stopKeepAlive() {
    if (this.keepAliveTimer) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
  }

  public speak(text: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.clearWatchdog();

      if (this.isMuted) {
        const words = text.split(' ').length;
        const duration = Math.max(2500, (words / 2.6) * 1000 * (1 / this.playbackSpeed));
        if (this.onSpeechStart) this.onSpeechStart();
        this.watchdogTimer = setTimeout(() => {
          if (this.onSpeechEnd) this.onSpeechEnd();
          resolve(true);
        }, duration);
        return;
      }

      this.stop();
      this.isSpeaking = false;
      this.isPaused = false;

      // Only trigger onStart (lips + voice wave) when REAL decoded audio begins playing!
      playSwaraVoice(text, {
        onStart: () => {
          this.isSpeaking = true;
          this.isPaused = false;
          setSwaraPlaybackRate(this.playbackSpeed);
          if (this.onSpeechStart) this.onSpeechStart();
        },
        onWordBoundary: (spokenSoFar, charIndex) => {
          if (this.onSpeechBoundary) {
            this.onSpeechBoundary({
              charIndex,
              spokenTextSoFar: spokenSoFar,
            } as SpeechSynthesisEvent & { spokenTextSoFar?: string });
          }
        },
        onEnd: () => {
          this.isSpeaking = false;
          this.isPaused = false;
          if (this.onSpeechEnd) this.onSpeechEnd();
          resolve(true);
        },
        onError: () => {
          this.isSpeaking = false;
          this.isPaused = false;
          if (this.onSpeechEnd) this.onSpeechEnd();
          resolve(false);
        },
      });
    });
  }

  public pause() {
    this.clearWatchdog();
    this.stopKeepAlive();
    pauseSwaraVoice();
    this.isPaused = true;
    this.isSpeaking = false;
    if (this.synth) {
      try {
        this.synth.pause();
      } catch {}
    }
  }

  public resume(): boolean {
    const resumed = resumeSwaraVoice();
    if (this.synth && this.synth.paused) {
      try {
        this.synth.resume();
      } catch {}
    }
    this.isPaused = false;
    this.isSpeaking = resumed;
    return resumed;
  }

  public stop() {
    this.clearWatchdog();
    this.stopKeepAlive();
    stopSwaraVoice();
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch {}
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      if (typeof window !== 'undefined') {
        delete (window as any).__mentor_utterance;
      }
    }
  }

  private clearWatchdog() {
    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }
  }
}
