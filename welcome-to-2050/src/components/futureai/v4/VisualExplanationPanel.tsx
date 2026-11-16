import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Volume2,
  VolumeX,
  RotateCcw,
  Terminal,
  Database,
  GitBranch,
  Repeat,
  CheckCircle2,
  BookOpen,
  Code2,
} from 'lucide-react';
import { ExecutionTraceStep } from '../pythonTraceEngine';
import { UniversalConceptVisualizer } from './UniversalConceptVisualizer';
import { languageEngine } from '../../../services/visualLearningLanguageEngine';

interface VisualExplanationPanelProps {
  step: ExecutionTraceStep;
  isStarted: boolean;
  language: 'en' | 'hi';
  onLanguageChange: (lang: 'en' | 'hi') => void;
  playbackState: 'idle' | 'playing' | 'paused';
  isMuted: boolean;
  onPlaySpeech: () => void;
  onPauseSpeech: () => void;
  onReplaySpeech: () => void;
  onToggleMute: () => void;
  questionTitle: string;
  questionSubtitle?: string;
  totalSteps: number;
  customTitle?: string;
  customExplanation?: string;
  customNarration?: string;
}

export const VisualExplanationPanel: React.FC<VisualExplanationPanelProps> = ({
  step,
  isStarted,
  language,
  onLanguageChange,
  playbackState,
  isMuted,
  onPlaySpeech,
  onPauseSpeech,
  onReplaySpeech,
  onToggleMute,
  questionTitle,
  questionSubtitle,
  totalSteps,
  customTitle,
  customExplanation,
  customNarration,
}) => {
  const isHi = language === 'hi';

  // Format natural explanation based on language
  const explanationText = React.useMemo(() => {
    if (customExplanation) {
      return isHi
        ? languageEngine.standardizeHinglish(customExplanation)
        : customExplanation;
    }
    if (!step) return '';
    const baseText = step.explanation || '';
    if (isHi) {
      return languageEngine.standardizeHinglish(baseText);
    }
    // Professional English description
    return (
      step.keyTakeaway ||
      `Python executes this line: "${step.lineContent.trim()}". It updates the internal execution state and prepares for the next instruction.`
    );
  }, [step, isHi, customExplanation]);

  // Determine runtime result to display in Section D
  const runtimeResult = React.useMemo(() => {
    if (!step) return null;
    const { opType, diagram, consoleOutput, variables } = step;

    if (opType === 'print' || diagram.printText) {
      return {
        type: 'console',
        icon: <Terminal className="w-3.5 h-3.5 text-emerald-400" />,
        label: isHi ? 'Console Output' : 'Console Output',
        content: diagram.printText || consoleOutput || 'None',
        badgeColor: 'bg-[#090d16] text-emerald-400 border-slate-800',
      };
    }

    if (diagram.targetVar && diagram.computedValue !== undefined) {
      return {
        type: 'memory',
        icon: <Database className="w-3.5 h-3.5 text-purple-600" />,
        label: isHi ? 'Memory Updated' : 'Variable Updated in RAM',
        content: `${diagram.targetVar} = ${String(diagram.computedValue)}`,
        badgeColor: 'bg-amber-50 text-slate-900 border-amber-300',
      };
    }

    if (opType === 'condition' && diagram.conditionResult !== undefined) {
      return {
        type: 'branch',
        icon: <GitBranch className="w-3.5 h-3.5 text-amber-600" />,
        label: isHi ? 'Branch Decision' : 'Branch Decision',
        content: diagram.conditionResult
          ? (isHi ? 'True -> if-block execute hoga' : 'Evaluated True -> Executing if-block')
          : (isHi ? 'False -> else-block execute hoga' : 'Evaluated False -> Skipping if-block'),
        badgeColor: diagram.conditionResult
          ? 'bg-emerald-50 text-emerald-950 border-emerald-300'
          : 'bg-rose-50 text-rose-950 border-rose-300',
      };
    }

    if (opType === 'loop_header' || opType === 'loop_body') {
      return {
        type: 'loop',
        icon: <Repeat className="w-3.5 h-3.5 text-purple-700" />,
        label: isHi ? 'Loop Iteration State' : 'Loop Iteration State',
        content: `${diagram.loopVar || 'i'} is now ${diagram.currentValue !== undefined ? diagram.currentValue : 0}`,
        badgeColor: 'bg-purple-50 text-purple-950 border-purple-200',
      };
    }

    // Default variable check if any variable was modified
    const modifiedVar = variables.find((v) => v.isModified);
    if (modifiedVar) {
      return {
        type: 'memory',
        icon: <Database className="w-3.5 h-3.5 text-purple-600" />,
        label: isHi ? 'Memory Slot' : 'Memory Slot',
        content: `${modifiedVar.name} = ${String(modifiedVar.value)} (${modifiedVar.type})`,
        badgeColor: 'bg-purple-50 text-purple-950 border-purple-200',
      };
    }

    return null;
  }, [step, isHi]);

  return (
    <div className="w-full rounded-2xl bg-white border border-purple-100 shadow-md flex flex-col justify-between overflow-hidden h-full min-h-[540px]">
      {/* ── Top Header: Title, Step Indicator, Language Switcher, Audio Controls ── */}
      <div className="px-4 py-3 bg-gradient-to-r from-purple-50/80 via-white to-purple-50/50 border-b border-purple-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-4 h-4 text-purple-700" />
          <h3 className="text-sm font-black text-slate-900 tracking-tight">Visual Explanation</h3>
          {isStarted ? (
            <span className="px-2.5 py-0.5 rounded-full bg-purple-700 text-white font-mono text-xs font-bold shadow-2xs">
              Step {step.stepNumber} of {totalSteps}
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-mono text-xs font-bold border border-purple-200">
              Overview
            </span>
          )}
        </div>

        {/* Right Header: Language Switcher & Voice Controls */}
        <div className="flex items-center gap-2">
          {/* Language Toggle: English | हिंदी */}
          <div className="flex items-center rounded-xl bg-purple-100/70 p-0.5 border border-purple-200/80 shadow-2xs text-xs font-bold">
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                language === 'en'
                  ? 'bg-purple-700 text-white shadow-2xs font-black'
                  : 'text-purple-900 hover:text-purple-950'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('hi')}
              className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                language === 'hi'
                  ? 'bg-purple-700 text-white shadow-2xs font-black'
                  : 'text-purple-900 hover:text-purple-950'
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Voice Narration Buttons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                if (playbackState === 'playing') onPauseSpeech();
                else onPlaySpeech();
              }}
              className="p-1.5 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-800 transition cursor-pointer"
              title={playbackState === 'playing' ? 'Pause Voice' : 'Play Voice Narration'}
            >
              <Volume2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onToggleMute}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                isMuted
                  ? 'bg-rose-100 text-rose-700'
                  : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
              }`}
              title={isMuted ? 'Unmute' : 'Mute Voice'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-600" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between gap-3.5 overflow-y-auto">
        {!isStarted ? (
          /* ── Welcome / Initial State (Before User Clicks Start Explanation) ── */
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl shadow-sm border border-purple-200">
              💡
            </div>

            <div className="space-y-1.5 max-w-md">
              <h4 className="text-base font-black text-slate-900">
                {questionTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {questionSubtitle || 'Understand this Python solution line by line with visual memory and step-by-step logic.'}
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold">
              👈 Click <strong className="text-purple-700">"Start Explanation"</strong> on the left code editor to begin!
            </div>
          </div>
        ) : (
          /* ── Active Teaching Step Structure (Sections A, B, C, D) ── */
          <>
            {/* ── A. Selected Code Line ── */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {isHi ? 'Selected Code Line' : 'Active Executed Line'}
                </span>
                {customTitle && (
                  <span className="text-[11px] font-black text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200/70 truncate max-w-[340px]">
                    {customTitle}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#090d16] border border-slate-800 shadow-2xs font-mono text-xs sm:text-[13px] text-white">
                <span className="px-2 py-0.5 rounded-md bg-purple-900 text-purple-300 font-bold text-[11px] shrink-0">
                  Line {step.lineNumber}
                </span>
                <span className="text-purple-200 font-bold whitespace-pre overflow-x-auto select-all">
                  {step.lineContent.trim()}
                </span>
              </div>
            </div>

            {/* ── B. Concept-Specific Animated Visualization ── */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-600" />
                <span>{isHi ? 'Visual Execution Pipeline' : 'Interactive Concept Pipeline'}</span>
              </span>
              <UniversalConceptVisualizer step={step} language={language} />
            </div>

            {/* ── C. Natural Teaching Explanation ── */}
            <div className="flex flex-col gap-1.5 rounded-xl bg-purple-50/60 border border-purple-100 p-3.5 sm:p-4">
              <span className="text-[10px] font-bold text-purple-800 uppercase tracking-wider">
                {isHi ? 'Teacher Explanation (Hinglish)' : 'Line Explanation & Purpose'}
              </span>
              <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-medium">
                {explanationText}
              </p>
            </div>

            {/* ── D. Runtime Result When Relevant (Incorporated Inline) ── */}
            {runtimeResult && (
              <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2">
                  {runtimeResult.icon}
                  <span className="text-xs font-bold text-slate-700">
                    {runtimeResult.label}:
                  </span>
                </div>
                <div
                  className={`px-3 py-1 rounded-lg border font-mono text-xs font-bold ${runtimeResult.badgeColor}`}
                >
                  {runtimeResult.content}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
