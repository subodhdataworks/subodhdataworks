import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, RotateCcw, Zap, Sparkles, Check, Radio } from 'lucide-react';

export interface IndianVoiceProblemStatementProps {
  title?: string;
  problemStatement: string;
  highlightedKeyword?: string;
  suffix?: string;
  theme?: 'blue' | 'emerald' | 'amber' | 'purple';
  className?: string;
  autoSpeakOnLoad?: boolean;
}

// Clean text for speech synthesis so symbols and code read aloud naturally in Indian English
function cleanTextForSpeech(text: string, keyword?: string, suffix?: string): string {
  let combined = text || '';
  if (keyword) combined += ` ${keyword}`;
  if (suffix) combined += ` ${suffix}`;

  return combined
    .replace(/\\n/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*+/g, '')
    .replace(/==/g, ' equals ')
    .replace(/!=/g, ' not equal to ')
    .replace(/<=/g, ' less than or equal to ')
    .replace(/>=/g, ' greater than or equal to ')
    .replace(/₹/g, ' rupees ')
    .replace(/print\(\)/gi, ' print function ')
    .replace(/([A-Z0-9_]+)\.([A-Z0-9_]+)/gi, '$1 dot $2')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const IndianVoiceProblemStatement: React.FC<IndianVoiceProblemStatementProps> = ({
  title = 'Problem Statement',
  problemStatement = '',
  highlightedKeyword = '',
  suffix = '',
  theme = 'blue',
  className = '',
  autoSpeakOnLoad = false,
}) => {
  // ── 1. Typewriter State ──
  const fullText = problemStatement || '';
  const [typedChars, setTypedChars] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  // ── 2. Speech Synthesis State ──
  const [speakingGender, setSpeakingGender] = useState<'boy' | 'girl' | null>(null);
  const [speechSupported, setSpeechSupported] = useState<boolean>(true);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Theme styling configurations
  const themeStyles = {
    blue: {
      border: 'border-blue-200/90 hover:border-blue-300',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      keywordBg: 'bg-blue-100/80 text-blue-700 border-blue-200',
      iconColor: 'text-blue-600',
      activeBoyBg: 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-blue-500/25',
      activeGirlBg: 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-purple-500/25',
      cardBg: 'bg-gradient-to-br from-white via-blue-50/20 to-white',
      accentDot: 'bg-blue-500',
      cursorColor: 'border-blue-600',
    },
    emerald: {
      border: 'border-emerald-200/90 hover:border-emerald-300',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      keywordBg: 'bg-emerald-100/80 text-emerald-800 border-emerald-200',
      iconColor: 'text-emerald-600',
      activeBoyBg: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-emerald-500/25',
      activeGirlBg: 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md shadow-rose-500/25',
      cardBg: 'bg-gradient-to-br from-white via-emerald-50/20 to-white',
      accentDot: 'bg-emerald-500',
      cursorColor: 'border-emerald-600',
    },
    amber: {
      border: 'border-amber-200/90 hover:border-amber-300',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      keywordBg: 'bg-amber-100/80 text-amber-800 border-amber-200',
      iconColor: 'text-amber-600',
      activeBoyBg: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-orange-500/25',
      activeGirlBg: 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-pink-500/25',
      cardBg: 'bg-gradient-to-br from-white via-amber-50/20 to-white',
      accentDot: 'bg-amber-500',
      cursorColor: 'border-amber-600',
    },
    purple: {
      border: 'border-purple-200/90 hover:border-purple-300',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      keywordBg: 'bg-purple-100/80 text-purple-700 border-purple-200',
      iconColor: 'text-purple-600',
      activeBoyBg: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-purple-500/25',
      activeGirlBg: 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-purple-500/25',
      cardBg: 'bg-gradient-to-br from-white via-purple-50/20 to-white',
      accentDot: 'bg-purple-500',
      cursorColor: 'border-purple-600',
    },
  }[theme];

  // ── 3. Initialize Speech Synthesis ──
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
      setSpeechSupported(true);

      // Preload voices
      if (synthRef.current.getVoices().length === 0) {
        synthRef.current.onvoiceschanged = () => {
          // Trigger voice refresh
        };
      }
    } else {
      setSpeechSupported(false);
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // ── 4. Typewriter Typing Animation Loop ──
  useEffect(() => {
    if (!fullText) {
      setTypedChars(0);
      setIsTyping(false);
      return;
    }

    setTypedChars(0);
    setIsTyping(true);

    let currentLen = 0;
    const totalLen = fullText.length;
    const speedMs = totalLen > 200 ? 12 : 18; // Fast, smooth cadence

    const timer = setInterval(() => {
      currentLen += 1;
      setTypedChars(currentLen);

      if (currentLen >= totalLen) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speedMs);

    return () => {
      clearInterval(timer);
    };
  }, [fullText, highlightedKeyword]);

  // Skip typing instantly
  const handleSkipTyping = () => {
    setTypedChars(fullText.length);
    setIsTyping(false);
  };

  // Replay typing animation
  const handleReplayTyping = () => {
    setTypedChars(0);
    setIsTyping(true);
    let currentLen = 0;
    const totalLen = fullText.length;
    const speedMs = totalLen > 200 ? 12 : 18;
    const timer = setInterval(() => {
      currentLen += 1;
      setTypedChars(currentLen);
      if (currentLen >= totalLen) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speedMs);
  };

  // ── 5. Indian Voice Picker & Synthesizer ──
  const getIndianVoice = useCallback((gender: 'boy' | 'girl'): {
    voice: SpeechSynthesisVoice | null;
    pitch: number;
    rate: number;
  } => {
    if (!synthRef.current) {
      return { voice: null, pitch: gender === 'girl' ? 1.18 : 0.92, rate: gender === 'girl' ? 0.96 : 0.94 };
    }
    const voices = synthRef.current.getVoices();

    // Look for Indian English (en-IN) or Hindi (hi-IN)
    const indianVoices = voices.filter(
      (v) =>
        v.lang === 'en-IN' ||
        v.lang.startsWith('en-IN') ||
        v.lang === 'hi-IN' ||
        v.lang.startsWith('hi-IN') ||
        v.name.includes('India') ||
        v.name.includes('Hindi')
    );

    let selectedVoice: SpeechSynthesisVoice | undefined;

    if (gender === 'girl') {
      // Pure Indian Girl Voice Selection
      selectedVoice =
        indianVoices.find(
          (v) =>
            v.name.toLowerCase().includes('female') ||
            v.name.toLowerCase().includes('neerja') ||
            v.name.toLowerCase().includes('heera') ||
            v.name.toLowerCase().includes('veena') ||
            v.name.toLowerCase().includes('kalpana') ||
            v.name.toLowerCase().includes('swara') ||
            v.name.toLowerCase().includes('lekha')
        ) ||
        indianVoices.find((v) => !v.name.toLowerCase().includes('male')) ||
        indianVoices[0] ||
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.toLowerCase().includes('female') ||
              v.name.toLowerCase().includes('zira') ||
              v.name.toLowerCase().includes('samantha') ||
              v.name.toLowerCase().includes('natural'))
        );

      return {
        voice: selectedVoice || null,
        pitch: 1.18, // Bright, clear young Indian female pitch
        rate: 0.96, // Natural storytelling pace
      };
    } else {
      // Pure Indian Boy Voice Selection
      selectedVoice =
        indianVoices.find(
          (v) =>
            v.name.toLowerCase().includes('male') ||
            v.name.toLowerCase().includes('prabhat') ||
            v.name.toLowerCase().includes('ravi') ||
            v.name.toLowerCase().includes('rishi') ||
            v.name.toLowerCase().includes('madhur') ||
            v.name.toLowerCase().includes('hemant') ||
            v.name.toLowerCase().includes('madhav')
        ) ||
        indianVoices.find((v) => v.name.toLowerCase().includes('male')) ||
        indianVoices[indianVoices.length > 1 ? 1 : 0] ||
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.toLowerCase().includes('male') ||
              v.name.toLowerCase().includes('david') ||
              v.name.toLowerCase().includes('george') ||
              v.name.toLowerCase().includes('guy'))
        );

      return {
        voice: selectedVoice || null,
        pitch: 0.92, // Clear, confident Indian boy pitch
        rate: 0.94, // Conversational Indian pace
      };
    }
  }, []);

  // Stop any active speech
  const stopVoice = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setSpeakingGender(null);
  }, []);

  // Speak with chosen Indian voice
  const speakVoice = useCallback(
    (gender: 'boy' | 'girl') => {
      if (!synthRef.current) return;

      // Toggle off if already speaking this gender
      if (speakingGender === gender) {
        stopVoice();
        return;
      }

      synthRef.current.cancel();

      const textToSpeak = cleanTextForSpeech(fullText, highlightedKeyword, suffix);
      if (!textToSpeak) return;

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      const voiceConfig = getIndianVoice(gender);

      if (voiceConfig.voice) {
        utterance.voice = voiceConfig.voice;
      }
      utterance.pitch = voiceConfig.pitch;
      utterance.rate = voiceConfig.rate;
      utterance.lang = 'en-IN';
      utterance.volume = 1.0;

      utterance.onstart = () => {
        setSpeakingGender(gender);
      };

      utterance.onend = () => {
        setSpeakingGender(null);
      };

      utterance.onerror = () => {
        setSpeakingGender(null);
      };

      utteranceRef.current = utterance;
      synthRef.current.speak(utterance);
    },
    [fullText, highlightedKeyword, suffix, speakingGender, stopVoice, getIndianVoice]
  );

  // Auto-speak on initial load if requested
  useEffect(() => {
    if (autoSpeakOnLoad && fullText) {
      const t = setTimeout(() => {
        speakVoice('boy');
      }, 600);
      return () => clearTimeout(t);
    }
  }, [autoSpeakOnLoad, fullText]);

  // Cancel speech whenever the question changes
  useEffect(() => {
    stopVoice();
  }, [fullText, stopVoice]);

  // Render text with typing effect
  const displayText = fullText.slice(0, typedChars);
  const showKeyword = typedChars >= fullText.length && highlightedKeyword;

  return (
    <div
      className={`rounded-2xl border ${themeStyles.border} ${themeStyles.cardBg} p-4 sm:p-5 shadow-xs transition-all duration-300 relative overflow-hidden group ${className}`}
    >
      {/* Top Header Row with Title, Badges, and Voice Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
            <span className={`w-2 h-2 rounded-full ${themeStyles.accentDot} animate-pulse`} />
            <span>{title}</span>
          </div>

          {/* Typing status badge */}
          {isTyping ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              Typing...
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Check className="w-3 h-3 stroke-[3]" />
              Ready
            </span>
          )}
        </div>

        {/* ── Voice & Typewriter Action Buttons Bar ── */}
        <div className="flex items-center flex-wrap gap-1.5">
          {speechSupported && (
            <>
              {/* 👦 Indian Boy Voice Button */}
              <button
                type="button"
                onClick={() => speakVoice('boy')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer select-none border ${
                  speakingGender === 'boy'
                    ? themeStyles.activeBoyBg
                    : 'bg-white hover:bg-cyan-50/70 text-slate-700 hover:text-cyan-700 border-slate-200 shadow-2xs'
                }`}
                title="Listen in pure Indian Boy voice"
              >
                <span>👦</span>
                <span>Boy Voice</span>
                {speakingGender === 'boy' ? (
                  <div className="flex items-center gap-0.5 ml-0.5">
                    <span className="w-1 h-3 bg-white rounded-full animate-pulse" />
                    <span className="w-1 h-4 bg-white rounded-full animate-bounce" />
                    <span className="w-1 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-cyan-600" />
                )}
              </button>

              {/* 👧 Indian Girl Voice Button */}
              <button
                type="button"
                onClick={() => speakVoice('girl')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer select-none border ${
                  speakingGender === 'girl'
                    ? themeStyles.activeGirlBg
                    : 'bg-white hover:bg-pink-50/70 text-slate-700 hover:text-pink-700 border-slate-200 shadow-2xs'
                }`}
                title="Listen in pure Indian Girl voice"
              >
                <span>👧</span>
                <span>Girl Voice</span>
                {speakingGender === 'girl' ? (
                  <div className="flex items-center gap-0.5 ml-0.5">
                    <span className="w-1 h-3 bg-white rounded-full animate-pulse" />
                    <span className="w-1 h-4 bg-white rounded-full animate-bounce" />
                    <span className="w-1 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-pink-600" />
                )}
              </button>

              {/* ⏹️ Stop Voice Button (visible when speaking) */}
              {speakingGender !== null && (
                <button
                  type="button"
                  onClick={stopVoice}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-bold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 shadow-2xs transition-all cursor-pointer"
                  title="Stop voice narration"
                >
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Stop</span>
                </button>
              )}
            </>
          )}

          {/* Typewriter Speed Skip / Replay */}
          {isTyping ? (
            <button
              type="button"
              onClick={handleSkipTyping}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-xl text-[11px] font-bold text-slate-500 hover:text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
              title="Skip typing animation and show full text"
            >
              <Zap className="w-3 h-3 text-amber-500 fill-amber-400" />
              <span>Skip</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReplayTyping}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
              title="Replay typing animation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Typewriter Problem Statement Content ── */}
      <div
        onClick={() => {
          if (isTyping) handleSkipTyping();
        }}
        className="cursor-pointer select-text"
        title={isTyping ? 'Click to show full text immediately' : ''}
      >
        <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
          <span className="text-slate-900 font-semibold">{displayText}</span>

          {/* Typing Cursor */}
          {isTyping && (
            <span
              className={`inline-block w-0.5 h-4 ml-0.5 align-middle bg-blue-600 animate-pulse`}
              aria-hidden="true"
            />
          )}

          {/* Highlighted keyword (appears once typed) */}
          {showKeyword && (
            <>
              {' '}
              <span
                className={`px-1.5 py-0.5 font-mono text-xs rounded-md font-bold inline-block border ${themeStyles.keywordBg}`}
              >
                {highlightedKeyword}
              </span>
            </>
          )}

          {/* Suffix (e.g. "table.", "to the output.") */}
          {showKeyword && suffix && (
            <span className="text-slate-800 font-medium"> {suffix}</span>
          )}
        </p>
      </div>

      {/* Voice Status Pill when Audio is Speaking */}
      {speakingGender !== null && (
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
          <div className="flex items-center gap-1.5 text-slate-700">
            <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>
              Speaking in pure Indian{' '}
              <strong className={speakingGender === 'boy' ? 'text-blue-700' : 'text-pink-700'}>
                {speakingGender === 'boy' ? '👦 Boy Voice' : '👧 Girl Voice'}
              </strong>
            </span>
          </div>

          <button
            type="button"
            onClick={stopVoice}
            className="text-slate-400 hover:text-rose-600 text-[10.5px] cursor-pointer"
          >
            Stop
          </button>
        </div>
      )}
    </div>
  );
};
