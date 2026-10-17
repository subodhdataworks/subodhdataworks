/**
 * 2050 Voice & Speech Interaction Engine (India Edition)
 * 
 * Provider Abstraction:
 * Voice Engine -> STT Provider -> Language Detector -> AI Reasoning -> Indian Natural TTS Provider
 * 
 * Prioritizes natural Indian English (en-IN) and Hindi (hi-IN) voices.
 * Graceful fallbacks so microphone issues never block learners.
 */

import { LanguageMode } from '../types';

export type CompanionState = 'idle' | 'speaking' | 'listening' | 'thinking';

export interface TTSProvider {
  speak(text: string, lang: LanguageMode, onEnd?: () => void): void;
  stop(): void;
  isAvailable(): boolean;
}

export interface STTProvider {
  start(onResult: (transcript: string) => void, onError?: (err: string) => void): void;
  stop(): void;
  isAvailable(): boolean;
}

/**
 * Native Web Speech API TTS Provider tuned for Indian Accent & Hindi/English
 */
class BrowserTTSProvider implements TTSProvider {
  private synth: SpeechSynthesis | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public isAvailable(): boolean {
    return this.synth !== null;
  }

  public speak(text: string, lang: LanguageMode, onEnd?: () => void) {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    try {
      this.synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95; // Slightly calmer, conversational pace
      utterance.pitch = 1.02; // Warm, approachable pitch

      const voices = this.synth.getVoices();

      // Look for Indian voices first: hi-IN, en-IN, Google Hindi, Lekha, Rishi, Veena, etc.
      let chosenVoice: SpeechSynthesisVoice | undefined;

      if (lang === 'hindi') {
        chosenVoice = voices.find(v => v.lang.includes('hi') || v.name.includes('Hindi') || v.name.includes('Lekha'));
      } else {
        // Hinglish or Indian English
        chosenVoice = voices.find(v => (v.lang.includes('en-IN') || v.name.includes('India') || v.name.includes('Rishi') || v.name.includes('Veena')));
      }

      // Fallback to high quality English natural voice if specific Indian voice not installed
      if (!chosenVoice) {
        chosenVoice = voices.find(v => (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')) && !v.name.includes('Bad'));
      }

      if (chosenVoice) {
        utterance.voice = chosenVoice;
      }

      utterance.onend = () => {
        if (onEnd) onEnd();
      };

      utterance.onerror = () => {
        if (onEnd) onEnd();
      };

      this.synth.speak(utterance);
    } catch {
      if (onEnd) onEnd();
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

/**
 * Web Speech API STT Provider
 */
class BrowserSTTProvider implements STTProvider {
  private recognition: any = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRec) {
        try {
          this.recognition = new SpeechRec();
          this.recognition.continuous = false;
          this.recognition.interimResults = false;
          this.recognition.lang = 'en-IN'; // Indian English / Hindi mix
        } catch {
          this.recognition = null;
        }
      }
    }
  }

  public isAvailable(): boolean {
    return this.recognition !== null;
  }

  public start(onResult: (transcript: string) => void, onError?: (err: string) => void) {
    if (!this.recognition) {
      if (onError) onError('Voice input is not natively supported in this browser. Please use Type or Tap mode.');
      return;
    }

    try {
      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        onResult(transcript);
      };

      this.recognition.onerror = (event: any) => {
        if (onError) onError(event.error || 'Voice input paused. Switching to Type mode.');
      };

      this.recognition.start();
    } catch (e: any) {
      if (onError) onError('Microphone access unavailable. Using keyboard fallback.');
    }
  }

  public stop() {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch {}
    }
  }
}

class VoiceEngine {
  private tts: TTSProvider;
  private stt: STTProvider;
  private isMuted: boolean = false;
  private activeLanguage: LanguageMode = 'en';
  private customAudio: HTMLAudioElement | null = null;
  private onStateChangeCallback?: (state: CompanionState) => void;
  private onLanguageDetectCallback?: (newLang: LanguageMode) => void;

  constructor() {
    this.tts = new BrowserTTSProvider();
    this.stt = new BrowserSTTProvider();
  }

  public setLanguage(lang: LanguageMode) {
    this.activeLanguage = lang;
  }

  public getLanguage(): LanguageMode {
    return this.activeLanguage;
  }

  public onStateChange(cb: (state: CompanionState) => void) {
    this.onStateChangeCallback = cb;
  }

  public onLanguageDetect(cb: (newLang: LanguageMode) => void) {
    this.onLanguageDetectCallback = cb;
  }

  private setState(state: CompanionState) {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(state);
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.tts.stop();
      this.stopCustomVoice();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Play Founder Subodh Voice Note
   */
  public playCustomVoice(audioPath = '/audio/subodh_intro.mp4', onEnd?: () => void) {
    if (this.isMuted) {
      if (onEnd) onEnd();
      return;
    }
    this.stopSpeaking();
    this.stopCustomVoice();

    try {
      this.customAudio = new Audio(audioPath);
      this.setState('speaking');

      this.customAudio.onended = () => {
        this.setState('idle');
        this.customAudio = null;
        if (onEnd) onEnd();
      };

      this.customAudio.onerror = () => {
        this.setState('idle');
        this.customAudio = null;
        if (onEnd) onEnd();
      };

      this.customAudio.play().catch(() => {
        this.setState('idle');
        this.customAudio = null;
        if (onEnd) onEnd();
      });
    } catch {
      this.setState('idle');
      if (onEnd) onEnd();
    }
  }

  public stopCustomVoice() {
    if (this.customAudio) {
      try {
        this.customAudio.pause();
        this.customAudio.currentTime = 0;
      } catch {}
      this.customAudio = null;
      this.setState('idle');
    }
  }

  public isPlayingCustomVoice(): boolean {
    return this.customAudio !== null && !this.customAudio.paused;
  }

  /**
   * AI Speaks text using English Natural Voice
   */
  public speak(text: string, customLang?: LanguageMode, onEnd?: () => void) {
    if (this.isMuted) {
      if (onEnd) onEnd();
      return;
    }

    this.stopCustomVoice();
    this.setState('speaking');
    this.tts.speak(text, customLang || this.activeLanguage, () => {
      this.setState('idle');
      if (onEnd) onEnd();
    });
  }

  public stopSpeaking() {
    this.tts.stop();
    this.stopCustomVoice();
    this.setState('idle');
  }

  /**
   * Listen to learner's voice with automatic language command detection
   */
  public listen(
    onResult: (transcript: string) => void,
    onError?: (err: string) => void
  ) {
    this.setState('listening');

    this.stt.start(
      (transcript) => {
        this.setState('thinking');

        // Check if learner commanded a language change
        const lower = transcript.toLowerCase();
        if (lower.includes('hindi mein samjhao') || lower.includes('hindi mein bolo') || lower.includes('speak in hindi')) {
          this.setLanguage('hindi');
          if (this.onLanguageDetectCallback) this.onLanguageDetectCallback('hindi');
        } else if (lower.includes('english mein batao') || lower.includes('explain in english') || lower.includes('speak in english')) {
          this.setLanguage('en');
          if (this.onLanguageDetectCallback) this.onLanguageDetectCallback('en');
        } else if (lower.includes('hinglish mein') || lower.includes('bilingual')) {
          this.setLanguage('hinglish');
          if (this.onLanguageDetectCallback) this.onLanguageDetectCallback('hinglish');
        }

        setTimeout(() => {
          this.setState('idle');
          onResult(transcript);
        }, 300);
      },
      (err) => {
        this.setState('idle');
        if (onError) onError(err);
      }
    );
  }

  public stopListening() {
    this.stt.stop();
    this.setState('idle');
  }
}

export const Voice = new VoiceEngine();
