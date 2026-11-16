import React from 'react';
import {
  FileCode,
  Copy,
  Check,
  Play,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Code2,
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';

interface FullPythonCodePanelProps {
  referenceCode: string;
  activeLineNumber?: number;
  isStarted: boolean;
  onStartExplanation: () => void;
  onPrevLine: () => void;
  onNextLine: () => void;
  onReplayLine: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  onNowWriteYourCode: () => void;
  onNextQuestion?: () => void;
  hasNextQuestion?: boolean;
  questionNumber: number;
  totalQuestions: number;
  completedCount: number;
}

// ── Pure Python Syntax Tokenizer ──
const renderSyntaxHighlightedLine = (line: string) => {
  const regex =
    /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b(?:def|return|for|in|while|if|else|elif|import|from|as|class|try|except|pass|break|continue|and|or|not|is|in|lambda|yield|finally|raise|with)\b)|(\b(?:print|input|int|str|float|len|range|type|list|dict|set|tuple|sum|min|max|abs|round|sorted|open|enumerate|zip)\b)|(\b\d+\b)|([=+\-*/%&|^~<>!,:;()[\]{}])|([a-zA-Z_]\w*)/g;

  const tokens: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(line.slice(lastIndex, match.index));
    }
    const [full, str, kw, builtin, num, op, ident] = match;
    if (str) {
      tokens.push(
        <span key={match.index} className="text-emerald-400">
          {str}
        </span>
      );
    } else if (kw) {
      tokens.push(
        <span key={match.index} className="text-pink-400 font-bold">
          {kw}
        </span>
      );
    } else if (builtin) {
      tokens.push(
        <span key={match.index} className="text-cyan-400 font-semibold">
          {builtin}
        </span>
      );
    } else if (num) {
      tokens.push(
        <span key={match.index} className="text-amber-400 font-semibold">
          {num}
        </span>
      );
    } else if (op) {
      tokens.push(
        <span key={match.index} className="text-purple-300 font-bold">
          {op}
        </span>
      );
    } else if (ident) {
      tokens.push(
        <span key={match.index} className="text-slate-200">
          {ident}
        </span>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < line.length) {
    tokens.push(line.slice(lastIndex));
  }
  return tokens;
};

export const FullPythonCodePanel: React.FC<FullPythonCodePanelProps> = ({
  referenceCode,
  activeLineNumber,
  isStarted,
  onStartExplanation,
  onPrevLine,
  onNextLine,
  onReplayLine,
  isFirstStep,
  isLastStep,
  onNowWriteYourCode,
  onNextQuestion,
  hasNextQuestion,
  questionNumber,
  totalQuestions,
  completedCount,
}) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  // Normalize code string
  const normalizedCode = React.useMemo(() => {
    return (referenceCode || '').replace(/\\n/g, '\n').replace(/\\r/g, '');
  }, [referenceCode]);

  const codeLines = React.useMemo(() => {
    return normalizedCode.split('\n');
  }, [normalizedCode]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(normalizedCode);
      setHasCopied(true);
      soundEffects.playClick?.();
      setTimeout(() => setHasCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="w-full rounded-2xl bg-[#090d16] border border-slate-800 shadow-md flex flex-col overflow-hidden h-full min-h-[540px]">
      {/* ── Top Header Bar ── */}
      <div className="px-4 py-3 bg-[#0d131f] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <FileCode className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-bold text-white tracking-tight">Full Python Code</h3>
          <span className="px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-300 border border-purple-700/50 text-[10px] font-black uppercase tracking-wider">
            Read Only
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="px-2 py-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition text-xs font-mono flex items-center gap-1.5 cursor-pointer"
          title="Copy Reference Code"
        >
          {hasCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-bold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* ── Dark Code Editor with Syntax Highlighting & Line Numbers ── */}
      <div
        className="flex-1 p-3.5 sm:p-4 font-mono text-xs sm:text-[13px] leading-6 sm:leading-7 overflow-y-auto bg-[#070b14] select-text"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#334155 #070b14' }}
      >
        <div className="space-y-1">
          {codeLines.map((line, idx) => {
            const lineNum = idx + 1;
            const isSelected = isStarted && lineNum === activeLineNumber;

            return (
              <div
                key={idx}
                className={`flex items-start rounded-lg px-2.5 py-1 transition-all ${
                  isSelected
                    ? 'bg-purple-950/80 border border-purple-500 shadow-sm ring-1 ring-purple-400/40 text-white'
                    : 'opacity-85 hover:opacity-100 text-slate-300'
                }`}
              >
                {/* Line number gutter */}
                <span
                  className={`w-7 shrink-0 text-right pr-3 select-none text-xs font-mono font-bold ${
                    isSelected ? 'text-purple-300 font-black' : 'text-slate-600'
                  }`}
                >
                  {lineNum}
                </span>

                {/* Indentation preserved code text */}
                <span className="flex-1 whitespace-pre font-semibold break-normal">
                  {renderSyntaxHighlightedLine(line)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom Step Navigation Action Bar ── */}
      <div className="p-3.5 bg-[#0d131f] border-t border-slate-800 flex flex-col gap-2.5">
        {/* Main Step Navigation: Start Explanation or Previous | Next Line */}
        <div className="flex items-center gap-2">
          {!isStarted ? (
            <button
              type="button"
              onClick={onStartExplanation}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition cursor-pointer active:scale-98"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Start Explanation</span>
            </button>
          ) : (
            <div className="grid grid-cols-3 gap-2 w-full">
              <button
                type="button"
                onClick={onPrevLine}
                disabled={isFirstStep}
                className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 disabled:text-slate-500 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer disabled:cursor-not-allowed border border-slate-700"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={onReplayLine}
                className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer border border-slate-700"
                title="Replay Voice for this line"
              >
                <RotateCcw className="w-3.5 h-3.5 text-purple-400" />
                <span>Replay</span>
              </button>

              <button
                type="button"
                onClick={onNextLine}
                disabled={isLastStep}
                className="py-2 px-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer disabled:cursor-not-allowed shadow-xs active:scale-98"
              >
                <span>Next Line</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Secondary Actions: Now Write Your Code & Next Question */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-800/80">
          <button
            type="button"
            onClick={onNowWriteYourCode}
            className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-purple-200 hover:text-white border border-purple-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-98"
          >
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Now Write Your Code</span>
          </button>

          {hasNextQuestion && onNextQuestion && (
            <button
              type="button"
              onClick={onNextQuestion}
              className="py-2 px-3 rounded-xl bg-purple-900/60 hover:bg-purple-800/70 text-purple-200 hover:text-white border border-purple-700/60 text-xs font-bold flex items-center gap-1 transition cursor-pointer shrink-0"
              title="Next Question"
            >
              <span>Next Q</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Dynamic Question Progress Indicator */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
          <span>
            Question <strong className="text-purple-300 font-bold">{questionNumber}</strong> of {totalQuestions}
          </span>
          <span>
            {completedCount} Completed
          </span>
        </div>
      </div>
    </div>
  );
};
