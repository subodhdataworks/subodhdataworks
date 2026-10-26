import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Volume2, VolumeX, RotateCcw, Zap, Check, Radio } from 'lucide-react';

export interface IndianVoiceProblemStatementProps {
  title?: string;
  problemStatement: string;
  highlightedKeyword?: string;
  suffix?: string;
  taskIndex?: number;
  theme?: 'blue' | 'emerald' | 'amber' | 'purple';
  className?: string;
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
  taskIndex,
  theme = 'blue',
  className = '',
}) => {
  const fullText = problemStatement || '';

  // ── 1. Automatic Gender Determination (Alternating Boy & Girl across questions) ──
  // Odd questions = Indian Boy (Male Voice)
  // Even questions = Indian Girl (Female Voice)
  const currentGender: 'boy' | 'girl' = useMemo(() => {
    if (taskIndex !== undefined) {
      return taskIndex % 2 !== 0 ? 'boy' : 'girl';
    }
    // Hash fallback if no taskIndex
    let hash = 0;
    for (let i = 0; i < fullText.length; i++) {
      hash = (hash << 5) - hash + fullText.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % 2 === 0 ? 'girl' : 'boy';
  }, [taskIndex, fullText]);

  // ── 2. Typewriter State ──
  const [typedChars, setTypedChars] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  // ── 3. Voice & Audio State ──
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Theme styling configurations
  const themeStyles = {
    blue: {
      border: 'border-blue-200/90 hover:border-blue-300',
      keywordBg: 'bg-blue-100/80 text-blue-700 border-blue-200',
      cardBg: 'bg-gradient-to-br from-white via-blue-50/20 to-white',
      accentDot: 'bg-blue-500',
      tagBoy: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      tagGirl: 'bg-pink-50 text-pink-700 border-pink-200',
    },
    emerald: {
      border: 'border-emerald-200/90 hover:border-emerald-300',
      keywordBg: 'bg-emerald-100/80 text-emerald-800 border-emerald-200',
      cardBg: 'bg-gradient-to-br from-white via-emerald-50/20 to-white',
      accentDot: 'bg-emerald-500',
      tagBoy: 'bg-teal-50 text-teal-700 border-teal-200',
      tagGirl: 'bg-rose-50 text-rose-700 border-rose-200',
    },
    amber: {
      border: 'border-amber-200/90 hover:border-amber-300',
      keywordBg: 'bg-amber-100/80 text-amber-800 border-amber-200',
      cardBg: 'bg-gradient-to-br from-white via-amber-50/20 to-white',
      accentDot: 'bg-amber-500',
      tagBoy: 'bg-amber-50 text-amber-700 border-amber-200',
      tagGirl: 'bg-pink-50 text-pink-700 border-pink-200',
    },
    purple: {
      border: 'border-purple-200/90 hover:border-purple-300',
      keywordBg: 'bg-purple-100/80 text-purple-700 border-purple-200',
      cardBg: 'bg-gradient-to-br from-white via-purple-50/20 to-white',
      accentDot: 'bg-purple-500',
      tagBoy: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      tagGirl: 'bg-purple-50 text-purple-700 border-purple-200',
    },
  }[theme];

  // ── 4. Initialize Speech Synthesis ──
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
      // Warm up voice list
      if (synthRef.current.getVoices().length === 0) {
        synthRef.current.onvoiceschanged = () => {
          // Cached
        };
      }
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // ── 5. Indian Voice Picker ──
  const getIndianVoice = useCallback((gender: 'boy' | 'girl'): {
    voice: SpeechSynthesisVoice | null;
    pitch: number;
    rate: number;
  } => {
    if (!synthRef.current) {
      return {
        voice: null,
        pitch: gender === 'girl' ? 1.18 : 0.92,
        rate: gender === 'girl' ? 0.96 : 0.94,
      };
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
        pitch: 1.18, // Bright, youthful Indian female pitch
        rate: 0.95, // Clear conversational Indian pace
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
        pitch: 0.92, // Warm, youthful Indian boy pitch
        rate: 0.93, // Conversational Indian pace
      };
    }
  }, []);

  // ── 6. Speak Logic ──
  const speakVoice = useCallback(
    (gender: 'boy' | 'girl') => {
      if (!synthRef.current || isMuted) return;

      try {
        synthRef.current.cancel();

        const textToSpeak = cleanTextForSpeech(fullText, highlightedKeyword, suffix);
        if (!textToSpeak) return;

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utteranceRef.current = utterance;
        const voiceConfig = getIndianVoice(gender);

        if (voiceConfig.voice) {
          utterance.voice = voiceConfig.voice;
        }
        utterance.pitch = voiceConfig.pitch;
        utterance.rate = voiceConfig.rate;
        utterance.lang = 'en-IN';
        utterance.volume = 1.0;

        utterance.onstart = () => {
          setIsSpeaking(true);
        };

        utterance.onend = () => {
          setIsSpeaking(false);
          utteranceRef.current = null;
        };

        utterance.onerror = () => {
          setIsSpeaking(false);
          utteranceRef.current = null;
        };

        if (synthRef.current.paused) {
          synthRef.current.resume();
        }
        synthRef.current.speak(utterance);
      } catch {
        setIsSpeaking(false);
      }
    },
    [fullText, highlightedKeyword, suffix, isMuted, getIndianVoice]
  );

  // ── 7. Automatic Typewriter & Automatic Voice on Load / Question Change ──
  // User Requirement: "randamly kabhi male question bolega to question type hoga to next question me femle queston bolegi ko type hoga button dabane pe voice nhi chahie"
  useEffect(() => {
    if (!fullText) {
      setTypedChars(0);
      setIsTyping(false);
      setIsSpeaking(false);
      return;
    }

    // Cancel any ongoing speech
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }

    // Reset typewriter
    setTypedChars(0);
    setIsTyping(true);

    let currentLen = 0;
    const totalLen = fullText.length;
    // Speed tuned so text types simultaneously with the speech
    const speedMs = 26;

    const timer = setInterval(() => {
      currentLen += 1;
      setTypedChars(currentLen);

      if (currentLen >= totalLen) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speedMs);

    // Speak automatically in current alternating gender (no button press needed!)
    const voiceTimer = setTimeout(() => {
      speakVoice(currentGender);
    }, 120);

    return () => {
      clearInterval(timer);
      clearTimeout(voiceTimer);
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, [fullText, highlightedKeyword, currentGender, speakVoice]);

  // Handle mute toggle
  const toggleMute = () => {
    if (!isMuted) {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      setIsSpeaking(false);
      setIsMuted(true);
    } else {
      setIsMuted(false);
      speakVoice(currentGender);
    }
  };

  // Skip typing instantly
  const handleSkipTyping = () => {
    setTypedChars(fullText.length);
    setIsTyping(false);
  };

  // Replay typing and voice
  const handleReplay = () => {
    setTypedChars(0);
    setIsTyping(true);
    let currentLen = 0;
    const totalLen = fullText.length;
    const speedMs = 26;
    const timer = setInterval(() => {
      currentLen += 1;
      setTypedChars(currentLen);
      if (currentLen >= totalLen) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speedMs);
    speakVoice(currentGender);
  };

  // Render text with typing effect
  const displayText = fullText.slice(0, typedChars);
  const showKeyword = typedChars >= fullText.length && highlightedKeyword;

  return (
    <div
      className={`rounded-2xl border ${themeStyles.border} ${themeStyles.cardBg} p-4 sm:p-5 shadow-xs transition-all duration-300 relative overflow-hidden group ${className}`}
    >
      {/* Top Header Row with Title, Voice Speaking Badge, and Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
            <span className={`w-2 h-2 rounded-full ${themeStyles.accentDot} animate-pulse`} />
            <span>{title}</span>
          </div>

          {/* Automatic Indian Voice Indicator Badge (Boy / Girl) */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border transition-all ${
              currentGender === 'boy' ? themeStyles.tagBoy : themeStyles.tagGirl
            }`}
            title={`Question voice: Indian ${currentGender === 'boy' ? 'Boy (Male)' : 'Girl (Female)'}`}
          >
            <span>{currentGender === 'boy' ? '👦' : '👧'}</span>
            <span>{currentGender === 'boy' ? 'Indian Boy Voice' : 'Indian Girl Voice'}</span>
            {isSpeaking && (
              <div className="flex items-center gap-0.5 ml-0.5" title="Speaking right now">
                <span className="w-1 h-2.5 bg-current rounded-full animate-pulse" />
                <span className="w-1 h-3.5 bg-current rounded-full animate-bounce" />
                <span className="w-1 h-2 bg-current rounded-full animate-pulse" />
              </div>
            )}
          </span>
        </div>

        {/* Right side controls: Sound Mute / Skip Typing / Replay */}
        <div className="flex items-center gap-1.5">
          {/* Mute / Unmute Button */}
          <button
            type="button"
            onClick={toggleMute}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              isMuted
                ? 'bg-rose-50 text-rose-600 border-rose-200'
                : 'bg-white text-slate-600 hover:text-blue-600 border-slate-200 shadow-2xs hover:bg-slate-50'
            }`}
            title={isMuted ? 'Unmute voice' : 'Mute voice'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Skip typing or replay */}
          {isTyping ? (
            <button
              type="button"
              onClick={handleSkipTyping}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-xl text-[11px] font-bold text-slate-500 hover:text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
              title="Skip typing animation and show full text immediately"
            >
              <Zap className="w-3 h-3 text-amber-500 fill-amber-400" />
              <span>Skip</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReplay}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
              title="Replay question voice and typing"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Typewriter Problem Statement Content (Types out automatically as voice speaks) ── */}
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
              className="inline-block w-0.5 h-4 ml-0.5 align-middle bg-blue-600 animate-pulse"
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

      {/* Live Audio Equalizer Wave status bar when speaking */}
      {isSpeaking && (
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-600 animate-fadeIn">
          <div className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>
              Speaking in pure Indian{' '}
              <strong className={currentGender === 'boy' ? 'text-cyan-700' : 'text-pink-700'}>
                {currentGender === 'boy' ? '👦 Boy Voice' : '👧 Girl Voice'}
              </strong>
            </span>
          </div>

          <button
            type="button"
            onClick={toggleMute}
            className="text-slate-400 hover:text-rose-600 text-[10.5px] cursor-pointer"
          >
            Mute
          </button>
        </div>
      )}
    </div>
  );
};
