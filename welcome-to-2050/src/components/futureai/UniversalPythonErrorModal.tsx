import React, { useState } from 'react';
import { X, Volume2, AlertCircle, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import type { ErrorDiagnostic } from './smartClassroomV5Engine';

export interface UniversalPythonErrorModalProps {
  isOpen: boolean;
  diagnostic: ErrorDiagnostic | null;
  onClose: () => void;
  onListen: () => void;
  isPlayingVoice?: boolean;
  language?: 'hi' | 'en';
  fullStudentCode?: string;
}

export const UniversalPythonErrorModal: React.FC<UniversalPythonErrorModalProps> = ({
  isOpen,
  diagnostic,
  onClose,
  onListen,
  isPlayingVoice = false,
  language = 'hi',
  fullStudentCode = '',
}) => {
  const [showFullContext, setShowFullContext] = useState<boolean>(false);

  if (!isOpen || !diagnostic) return null;

  // Format clean error type (e.g. SyntaxError, NameError, TypeError, OutputMismatch)
  const rawType = diagnostic.type || 'RuntimeError';
  const displayErrorType = rawType.includes('quote')
    ? 'SyntaxError'
    : rawType.includes('bracket')
    ? 'SyntaxError'
    : rawType.includes('indent')
    ? 'IndentationError'
    : rawType.includes('name') || rawType.includes('print_case')
    ? 'NameError'
    : rawType.includes('type')
    ? 'TypeError'
    : rawType.includes('zero')
    ? 'ZeroDivisionError'
    : rawType.includes('empty')
    ? 'EmptyCode'
    : rawType.includes('output') || rawType.includes('wrong')
    ? 'OutputMismatch'
    : rawType.charAt(0).toUpperCase() + rawType.slice(1).replace(/_/g, ' ');

  const lineNumber = diagnostic.lineNumber || 1;
  const lineSnippet = diagnostic.lineSnippet?.trim() || '';

  // Get combined 2-3 sentence Teacher's Tip (no repeated explanations)
  const tipExplanation = language === 'hi'
    ? diagnostic.explanationHinglish
    : diagnostic.explanationEnglish;

  const tipFix = language === 'hi'
    ? diagnostic.fixSuggestionHinglish
    : diagnostic.fixSuggestionEnglish;

  const codeLines = fullStudentCode ? fullStudentCode.split('\n') : [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="error-modal-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
    >
      <div className="bg-white rounded-2xl max-w-[480px] w-full p-5 shadow-2xl border border-purple-100 flex flex-col gap-3.5 animate-in zoom-in-95 duration-200 select-text">
        {/* ── SECTION 1: ERROR HEADER ── */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4 text-rose-600" />
            </div>
            <div>
              <h3 id="error-modal-title" className="text-base font-black text-slate-900 tracking-tight">
                Let's Fix Your Code
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-50 border border-rose-200 text-rose-700 font-mono text-[11px] font-bold">
                  <span>{displayErrorType}</span>
                  {lineNumber > 0 && (
                    <>
                      <span className="text-rose-400">·</span>
                      <span>Line {lineNumber}</span>
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Error Diagnostic"
            className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-purple-50 text-slate-400 hover:text-purple-700 transition flex items-center justify-center cursor-pointer border border-transparent hover:border-purple-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── SECTION 2: YOUR CODE ── */}
        <div className="rounded-xl bg-[#090D16] border border-slate-800 p-3 font-mono text-xs flex flex-col gap-2 shadow-inner">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold border-b border-slate-800/80 pb-1.5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="text-amber-400 font-bold">💻</span> Your Code
            </span>
            <div className="flex items-center gap-2">
              {lineNumber > 0 && (
                <span className="text-amber-400 text-[10.5px]">Line {lineNumber}</span>
              )}
              {codeLines.length > 1 && (
                <button
                  type="button"
                  onClick={() => setShowFullContext(!showFullContext)}
                  className="text-[10px] text-purple-400 hover:text-purple-300 flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{showFullContext ? 'Collapse' : 'Context'}</span>
                  {showFullContext ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              )}
            </div>
          </div>

          {showFullContext && codeLines.length > 1 ? (
            <div className="flex flex-col gap-1 max-h-36 overflow-y-auto pr-1">
              {codeLines.map((line, idx) => {
                const currentLineNum = idx + 1;
                const isErrorLine = currentLineNum === lineNumber;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-2 px-2 py-0.5 rounded text-[11px] font-mono ${
                      isErrorLine
                        ? 'bg-rose-950/60 border border-rose-500/50 text-rose-200 font-bold'
                        : 'text-slate-400'
                    }`}
                  >
                    <span className="text-slate-600 select-none w-5 text-right shrink-0">{currentLineNum}</span>
                    <span className="whitespace-pre overflow-x-auto">{line || ' '}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-rose-950/40 border border-rose-500/40 rounded-lg px-2.5 py-1.5 text-rose-200 overflow-x-auto whitespace-pre">
              <span className="text-slate-600 select-none font-bold text-[11px] shrink-0">{lineNumber} |</span>
              <span className="font-bold text-rose-200 break-all">{lineSnippet || '[Empty Line]'}</span>
            </div>
          )}
        </div>

        {/* ── SECTION 3: TEACHER'S TIP ── */}
        <div className="rounded-xl bg-purple-50/80 border border-purple-200/80 p-3.5 text-xs text-slate-800 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-purple-950 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              Teacher's Tip
            </span>
            {isPlayingVoice && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-bold animate-pulse">
                <Volume2 className="w-3 h-3" /> Speaking...
              </span>
            )}
          </div>

          <div className="text-[12px] text-slate-700 leading-relaxed font-medium space-y-1.5">
            <p>{tipExplanation}</p>
            {tipFix && tipFix !== tipExplanation && (
              <p className="text-purple-900 font-semibold bg-white/70 p-2 rounded-lg border border-purple-200/50">
                👉 {tipFix}
              </p>
            )}
          </div>
        </div>

        {/* ── BUTTONS: Listen | Got It, Try Again ── */}
        <div className="flex items-center justify-between gap-2.5 pt-1 border-t border-slate-100">
          <button
            type="button"
            onClick={onListen}
            className={`h-[38px] px-3.5 rounded-xl font-bold text-xs border flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
              isPlayingVoice
                ? 'bg-purple-600 text-white border-purple-600 ring-2 ring-purple-300'
                : 'bg-purple-50 hover:bg-purple-100 text-[#6D28D9] border-purple-200 hover:-translate-y-[1px]'
            }`}
            title="Listen to Teacher's Tip"
          >
            <Volume2 className="w-4 h-4" />
            <span>{isPlayingVoice ? 'Speaking...' : 'Listen'}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="h-[38px] px-5 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] active:bg-[#4C1D95] text-white font-bold text-xs transition-all duration-200 cursor-pointer shadow-sm hover:-translate-y-[1px] active:scale-98"
          >
            Got It, Try Again
          </button>
        </div>
      </div>
    </div>
  );
};
