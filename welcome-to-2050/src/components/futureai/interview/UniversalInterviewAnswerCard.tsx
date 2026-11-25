import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Volume2,
  VolumeX,
  Copy,
  Check,
  ChevronDown,
  Lightbulb,
  Brain,
  Sparkles,
  ArrowRight,
  Code2,
  Mic,
} from 'lucide-react';
import { resolveUniversalAnswer, UniversalAnswerDetails } from './universalAnswerResolver';
import { playSwaraVoice, stopSwaraVoice } from '../../../services/swaraAudioService';
import { soundEffects } from '../../../services/soundEffects';

interface UniversalInterviewAnswerCardProps {
  question: any;
  roleKey?: string;
  isOpen: boolean;
  onToggle: () => void;
  onPracticeWithAi: () => void;
}

export const UniversalInterviewAnswerCard: React.FC<UniversalInterviewAnswerCardProps> = ({
  question,
  roleKey,
  isOpen,
  onToggle,
  onPracticeWithAi,
}) => {
  const details: UniversalAnswerDetails = useMemo(() => {
    return resolveUniversalAnswer(question, roleKey);
  }, [question, roleKey]);

  const [copiedAnswer, setCopiedAnswer] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  // Stop voice when question changes or card closes
  useEffect(() => {
    stopSwaraVoice();
    setIsPlayingVoice(false);
    setCopiedAnswer(false);
    setCopiedCode(false);
  }, [question?.id, isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSwaraVoice();
    };
  }, []);

  // Play exact female Swara voice saved in the website
  const togglePlayVoice = useCallback(() => {
    soundEffects.playClick();
    if (isPlayingVoice) {
      stopSwaraVoice();
      setIsPlayingVoice(false);
      return;
    }

    const textToSpeak = details.spokenAnswer;
    if (!textToSpeak) return;

    setIsPlayingVoice(true);
    playSwaraVoice(textToSpeak, {
      onStart: () => setIsPlayingVoice(true),
      onEnd: () => setIsPlayingVoice(false),
      onError: () => setIsPlayingVoice(false),
    });
  }, [isPlayingVoice, details.spokenAnswer]);

  const handleCopyAnswer = async () => {
    try {
      await navigator.clipboard.writeText(details.spokenAnswer);
      soundEffects.playClick();
      setCopiedAnswer(true);
      setTimeout(() => setCopiedAnswer(false), 2000);
    } catch {}
  };

  const handleCopyCode = async () => {
    if (!details.codeSnippet) return;
    try {
      await navigator.clipboard.writeText(details.codeSnippet.code);
      soundEffects.playClick();
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {}
  };

  return (
    <div className="border border-slate-200/90 bg-slate-50/50 rounded-xl overflow-hidden transition-colors">
      {/* Clean View Answer Accordion Header */}
      <button
        type="button"
        onClick={() => {
          soundEffects.playClick();
          onToggle();
        }}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-100/60 transition-colors cursor-pointer group"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-100 text-[#6D28D9] flex items-center justify-center">
            <Lightbulb className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-[13.5px] text-slate-900">View Answer</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#6D28D9]">
            {isOpen ? 'Hide Answer' : 'Expand Answer'}
          </span>
          <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-500">
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      </button>

      {/* Directly Expanded Answer Content */}
      {isOpen && (
        <div className="px-4 pb-4 pt-3 space-y-4 border-t border-slate-200/80 animate-fadeIn bg-white">
          {/* Main Benchmark Spoken Answer */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Ideal Interview Answer
            </div>
            <p className="text-[14px] text-slate-700 leading-relaxed font-normal m-0 pl-3 border-l-2 border-[#6D28D9]">
              {details.spokenAnswer}
            </p>
          </div>

          {/* Optional Code Snippet Block */}
          {details.codeSnippet && (
            <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 text-slate-100 text-xs font-mono">
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-bold uppercase tracking-wider">
                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>{details.codeSnippet.language} Code</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white px-2 py-0.5 rounded bg-slate-700 hover:bg-slate-600 transition cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3.5 overflow-x-auto text-[12.5px] leading-relaxed text-emerald-300 m-0">
                <code>{details.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Memory Cue Sequence */}
          <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200/80 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-900">
              <Brain className="w-3.5 h-3.5 text-purple-700" />
              <span>Easy to Remember (Memory Cue):</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {details.memoryCue.map((cue, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-purple-200 text-xs font-bold text-purple-950 shadow-2xs">
                    {cue}
                  </span>
                  {idx < details.memoryCue.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-purple-400 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Practical Example (when available) */}
          {details.simpleExample && (
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-[#6D28D9]" />
                <span>Real-World Example: {details.simpleExample.title}</span>
              </div>
              <p className="m-0 leading-relaxed font-normal">
                {details.simpleExample.scenario}
              </p>
            </div>
          )}

          {/* Action Buttons: Listen (Female Swara Voice), Copy, Practice */}
          <div className="pt-2 flex items-center justify-between gap-2.5 flex-wrap border-t border-purple-200/60">
            <div className="flex items-center gap-2">
              {/* Listen with exact female Swara voice */}
              <button
                type="button"
                onClick={togglePlayVoice}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shadow-2xs ${
                  isPlayingVoice
                    ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                    : 'bg-purple-700 hover:bg-purple-800 text-white'
                }`}
                title="Listen to answer in Indian Female Swara voice"
              >
                {isPlayingVoice ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isPlayingVoice ? 'Stop Voice' : 'Listen to Answer'}</span>
              </button>

              {/* Copy Answer */}
              <button
                type="button"
                onClick={handleCopyAnswer}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  copiedAnswer
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {copiedAnswer ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Answer</span>
                  </>
                )}
              </button>
            </div>

            {/* Practice with AI - White button with 4-side running light */}
            <div className="relative group overflow-hidden p-[2px] rounded-xl shadow-[0_0_16px_rgba(66,133,244,0.3),0_0_24px_rgba(139,92,246,0.25)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <div className="google-border-beam-glow pointer-events-none" />
              <div className="google-border-beam-spinner pointer-events-none" />
              <button
                type="button"
                onClick={() => {
                  stopSwaraVoice();
                  onPracticeWithAi();
                }}
                className="relative z-10 w-full h-full flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] text-xs font-bold bg-white hover:bg-slate-50 text-slate-900 hover:text-purple-700 transition cursor-pointer shadow-xs"
              >
                <span className="tracking-wide">Practice with AI →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
