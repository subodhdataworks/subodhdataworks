import React, { useState, useEffect, useRef, useMemo } from 'react';
import { SqlChallengeTask } from './data/sqlCodingChallengesBank';
import {
  buildSqlTopic1Explanation,
  SqlTeachingStep,
  SqlQueryExplanationData,
} from './sqlVisualEngine';
import { soundEffects } from '../../services/soundEffects';
import {
  Play,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Sparkles,
  Database,
  Table,
  CheckCircle2,
  BookOpen,
  Layers,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

interface SqlVisualExplanationEngineProps {
  task: SqlChallengeTask;
}

export const SqlVisualExplanationEngine: React.FC<SqlVisualExplanationEngineProps> = ({ task }) => {
  const explanationData: SqlQueryExplanationData = useMemo(() => {
    return buildSqlTopic1Explanation(task);
  }, [task.id, task.solution, task.sampleInputHeaders, task.sampleInputRows, task.expectedOutputHeaders, task.expectedOutputRows]);

  const { query, steps, allColumns, tableName, sampleInputRows } = explanationData;

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const activeStep: SqlTeachingStep | undefined = isStarted ? steps[currentStepIndex] : undefined;
  const isLastStep = isStarted && currentStepIndex === steps.length - 1;

  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  // Stop speech helper (both HTML5 Audio and Web Speech)
  const stopSpeech = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.onplay = null;
      audioPlayerRef.current.onended = null;
      audioPlayerRef.current.onerror = null;
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  // Exact Module 1 Visual Explanation Girl Voice (hi-IN-SwaraNeural)
  const speakText = (text: string) => {
    if (isMuted) return;
    stopSpeech();

    // 1. Play high-fidelity Module 1 Girl Voice via /api/human-tts
    const liveSwaraUrl = `/api/human-tts?lang=hi&voice=hi-IN-SwaraNeural&text=${encodeURIComponent(text)}`;
    try {
      const audio = new Audio(liveSwaraUrl);
      audioPlayerRef.current = audio;

      audio.onplay = () => setIsSpeaking(true);
      audio.onended = () => setIsSpeaking(false);
      audio.onerror = () => {
        speakWebSpeechFallback(text);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          speakWebSpeechFallback(text);
        });
      }
    } catch {
      speakWebSpeechFallback(text);
    }
  };

  // Web Speech Fallback strictly selecting Indian Female Teacher Voice (Swara/Heera/Neerja/Kalpana)
  const speakWebSpeechFallback = (text: string) => {
    if (isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.94;
      utterance.pitch = 1.05;

      const voices = window.speechSynthesis.getVoices();
      const femaleVoice =
        voices.find((v) => /swara|heera|neerja|kalpana|lekha|veena|ananya|shruti|priya/i.test(v.name)) ||
        voices.find((v) => (/hi[-_]in/i.test(v.lang) || /en[-_]in/i.test(v.lang)) && /female|woman|zira/i.test(v.name)) ||
        voices.find((v) => !/male|man|ravi|madhav|hemant|prabhat|david|mark|george/i.test(v.name) && (/hi[-_]in/i.test(v.lang) || /en[-_]in/i.test(v.lang))) ||
        voices.find((v) => /female|woman|zira/i.test(v.name)) ||
        voices[0];

      if (femaleVoice) {
        utterance.voice = femaleVoice;
        utterance.lang = femaleVoice.lang;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
    }
  };

  // Reset to initial state when student switches challenges
  useEffect(() => {
    stopSpeech();
    setIsStarted(false);
    setCurrentStepIndex(0);
  }, [task.id]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  // Play narration whenever step changes after start
  useEffect(() => {
    if (isStarted && activeStep) {
      speakText(activeStep.explanationHinglish);
    }
  }, [isStarted, currentStepIndex]);

  // Actions
  const handleStart = () => {
    soundEffects.playClick?.();
    setIsStarted(true);
    setCurrentStepIndex(0);
  };

  const handleNext = () => {
    soundEffects.playClick?.();
    stopSpeech();
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    soundEffects.playClick?.();
    stopSpeech();
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    soundEffects.playClick?.();
    stopSpeech();
    setCurrentStepIndex(0);
  };

  const handleToggleMute = () => {
    if (!isMuted) {
      stopSpeech();
      setIsMuted(true);
    } else {
      setIsMuted(false);
      if (isStarted && activeStep) {
        speakText(activeStep.explanationHinglish);
      }
    }
  };

  const handleReplayVoice = () => {
    if (isStarted && activeStep) {
      speakText(activeStep.explanationHinglish);
    }
  };

  // Token highlighter helper for query box
  const renderHighlightedQuery = () => {
    if (!isStarted || !activeStep) {
      return <span className="text-slate-100">{query}</span>;
    }

    const [start, end] = activeStep.sourceRange;
    if (start === 0 && end === query.length) {
      // Full query execution step
      return (
        <span className="bg-purple-900/60 text-amber-300 font-bold px-1.5 py-0.5 rounded border border-amber-400/60 shadow-xs">
          {query}
        </span>
      );
    }

    const before = query.slice(0, start);
    const token = query.slice(start, end);
    const after = query.slice(end);

    return (
      <>
        <span className="text-slate-300">{before}</span>
        <span className="bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-black px-1.5 py-0.5 rounded shadow-sm ring-2 ring-amber-300/80 animate-pulse">
          {token}
        </span>
        <span className="text-slate-300">{after}</span>
      </>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-purple-200/90 shadow-sm flex flex-col overflow-hidden text-left transition-all duration-200">
      {/* ── CARD HEADER ── */}
      <div className="px-4 py-3 bg-gradient-to-r from-purple-50/90 via-white to-indigo-50/50 border-b border-purple-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-700 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-xs sm:text-[13px] font-black text-slate-900 tracking-tight">
                Visual Explanation
              </h2>
              <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 text-[9px] font-black uppercase tracking-wider">
                Topic 1
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-semibold leading-none mt-0.5">
              Beginner-friendly SQL breakdown
            </p>
          </div>
        </div>

        {/* Progress Badge & Voice Controls */}
        <div className="flex items-center gap-1.5">
          <span
            className={`px-2 py-0.5 rounded-full text-[10.5px] font-black transition-all ${
              !isStarted
                ? 'bg-slate-100 text-slate-600'
                : isLastStep
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-purple-100 text-purple-800 border border-purple-200'
            }`}
          >
            {!isStarted ? 'Ready to Start' : `Step ${currentStepIndex + 1} of ${steps.length}`}
          </span>

          {isStarted && (
            <>
              <button
                type="button"
                onClick={handleReplayVoice}
                className="w-7 h-7 rounded-lg bg-white border border-purple-200 text-purple-700 hover:bg-purple-50 flex items-center justify-center shadow-2xs transition-all cursor-pointer active:scale-95"
                title="Replay Voice Explanation"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-pulse text-purple-900' : ''}`} />
              </button>

              <button
                type="button"
                onClick={handleToggleMute}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center shadow-2xs transition-all cursor-pointer active:scale-95"
                title={isMuted ? 'Unmute Voice' : 'Mute Voice'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* ── CARD BODY ── */}
      <div className="p-3.5 flex flex-col gap-3">
        {/* Full Verified SQL Query (Visible from the start) */}
        <div className="rounded-xl bg-[#090d16] border border-slate-800 p-2.5 shadow-inner">
          <div className="flex items-center justify-between gap-1.5 pb-1.5 mb-1.5 border-b border-slate-800 text-[10px] font-mono">
            <div className="flex items-center gap-1.5 text-slate-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2 h-2 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-300 ml-1">reference_query.sql</span>
            </div>
            {isStarted && activeStep && (
              <span className="px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-300/40 text-[9px] font-bold">
                🎯 {activeStep.tokenType}
              </span>
            )}
          </div>
          <div className="font-mono text-xs text-slate-100 leading-relaxed overflow-x-auto whitespace-pre-wrap select-text">
            {renderHighlightedQuery()}
          </div>
        </div>

        {/* ── STATE 1: INITIAL READY TO START ── */}
        {!isStarted ? (
          <div className="flex flex-col gap-2.5 p-3 rounded-xl bg-gradient-to-br from-purple-50/80 via-white to-indigo-50/40 border border-purple-200/80 text-center items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-900 tracking-tight">
                Understand Every Part of This Query
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5 max-w-xs">
                Zero-to-hero step-by-step visual teacher. Click below to explain every Keyword, Table, Column, and Clause in natural Hinglish!
              </p>
            </div>

            {/* START EXPLANATION BUTTON (CRITICAL REQUIREMENT) */}
            <div className="relative inline-flex p-[2px] rounded-[11px] overflow-hidden group shadow-[0_4px_16px_rgba(109,40,217,0.25)] hover:shadow-[0_6px_22px_rgba(109,40,217,0.4)] transition-all duration-300 w-full mt-1">
              <div className="google-border-beam-glow pointer-events-none" />
              <div className="google-border-beam-spinner pointer-events-none" />
              <button
                type="button"
                onClick={handleStart}
                className="relative z-10 w-full h-[36px] rounded-[9px] bg-white hover:bg-slate-50 text-purple-900 font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-[#6D28D9] text-[#6D28D9]" />
                <span>Start Explanation</span>
              </button>
            </div>
          </div>
        ) : (
          /* ── STATE 2: ACTIVE TEACHING STEP ── */
          activeStep && (
            <div className="flex flex-col gap-2.5">
              {/* Teacher Explanation Speech Bubble */}
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50/95 via-white to-purple-50/40 border border-purple-200/90 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-purple-900 pb-1.5 mb-1.5 border-b border-purple-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Step {activeStep.stepNumber}: {activeStep.title}</span>
                  </div>
                  <span className="text-slate-400 font-semibold">
                    {activeStep.stepNumber} / {activeStep.totalSteps}
                  </span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  {activeStep.explanationHinglish}
                </p>
              </div>

              {/* Dynamic SQL Visualization Box */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-2.5 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Table className="w-3 h-3 text-purple-600" />
                    <span>Table View: {tableName}</span>
                  </span>
                  {activeStep.visualType === 'complete_execution' ? (
                    <span className="text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded font-black">
                      ✓ Result Set
                    </span>
                  ) : (
                    <span className="text-purple-700 bg-purple-100 px-1.5 py-0.2 rounded font-black">
                      Live Concept Visual
                    </span>
                  )}
                </div>

                {/* 1. SELECT KEYWORD VISUAL */}
                {activeStep.visualType === 'select_keyword' && (
                  <div className="p-2 rounded-lg bg-white border border-purple-200 text-center flex items-center justify-center gap-2 text-xs font-bold text-purple-900">
                    <Database className="w-4 h-4 text-purple-600 animate-bounce" />
                    <span>Database: &quot;Select and read columns from storage&quot;</span>
                  </div>
                )}

                {/* 2. ALL COLUMNS (*) VISUAL */}
                {activeStep.visualType === 'select_all_columns' && (
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1 flex-wrap">
                      {allColumns.map((col) => (
                        <span
                          key={col}
                          className="px-2 py-1 rounded-md bg-amber-100 border border-amber-300 text-amber-900 text-[10.5px] font-mono font-black flex items-center gap-1 shadow-2xs"
                        >
                          <span className="text-emerald-600 font-black">✓</span>
                          <span>{col}</span>
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 italic">
                      Star (*) selects all {allColumns.length} columns in the table.
                    </span>
                  </div>
                )}

                {/* 3. SPECIFIC OR MULTIPLE COLUMNS VISUAL */}
                {(activeStep.visualType === 'select_specific_column' ||
                  activeStep.visualType === 'select_multiple_columns') && (
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1 flex-wrap">
                      {allColumns.map((col) => {
                        const isSelected = activeStep.highlightedColumns?.includes(col);
                        return (
                          <span
                            key={col}
                            className={`px-2 py-0.5 rounded-md text-[10.5px] font-mono font-bold transition-all ${
                              isSelected
                                ? 'bg-amber-100 border-2 border-amber-400 text-amber-950 font-black shadow-xs scale-105'
                                : 'bg-slate-100 border border-slate-200 text-slate-400 opacity-60'
                            }`}
                          >
                            {isSelected && <span className="text-emerald-600 mr-1">✓</span>}
                            {col}
                          </span>
                        );
                      })}
                    </div>
                    <span className="text-[10px] text-slate-600 font-semibold">
                      Only highlighted column(s) are read into the output.
                    </span>
                  </div>
                )}

                {/* 4. FROM & TABLE REFERENCE VISUAL */}
                {(activeStep.visualType === 'from_clause' || activeStep.visualType === 'table_reference') && (
                  <div className="p-2 rounded-lg bg-white border-2 border-purple-400 text-xs font-bold text-purple-950 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Table className="w-4 h-4 text-purple-700" />
                      <span>Source Table: <span className="font-mono text-purple-700 font-black">{tableName}</span></span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-black">
                      5 Rows Available
                    </span>
                  </div>
                )}

                {/* 5. COLUMN ALIAS VISUAL (AS) */}
                {activeStep.visualType === 'column_alias' && activeStep.aliasMapping && (
                  <div className="p-2 rounded-lg bg-white border border-indigo-200 flex items-center justify-between text-xs font-bold">
                    <span className="font-mono text-slate-500 line-through">
                      {activeStep.aliasMapping.original}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="font-mono text-indigo-900 bg-indigo-50 border border-indigo-300 px-2 py-0.5 rounded font-black">
                      {activeStep.aliasMapping.alias}
                    </span>
                  </div>
                )}

                {/* 6. ARITHMETIC EXPRESSION VISUAL */}
                {activeStep.visualType === 'arithmetic_expression' && activeStep.arithmeticCalc && (
                  <div className="p-2 rounded-lg bg-white border border-amber-300 flex flex-col gap-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 font-bold">Calculation:</span>
                      <span className="font-mono text-amber-900 font-black bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {activeStep.arithmeticCalc.formula}
                      </span>
                    </div>
                    <span className="text-[10.5px] text-slate-500 font-mono">
                      Example: {activeStep.arithmeticCalc.resultExample}
                    </span>
                  </div>
                )}

                {/* 7. STRING LITERAL VISUAL */}
                {activeStep.visualType === 'string_literal' && (
                  <div className="p-2 rounded-lg bg-white border border-emerald-300 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-bold">Fixed Text:</span>
                    <span className="font-mono text-emerald-900 font-black bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      &apos;{activeStep.literalValue}&apos;
                    </span>
                  </div>
                )}

                {/* 8. DISTINCT VISUAL */}
                {activeStep.visualType === 'distinct_keyword' && (
                  <div className="p-2 rounded-lg bg-white border border-purple-300 flex flex-col gap-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700 font-bold">Duplicates Removed:</span>
                      <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-black text-[10.5px]">
                        4 Unique Departments
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500">
                      IT appears twice in table, but DISTINCT outputs it only once.
                    </span>
                  </div>
                )}

                {/* 9. SEMICOLON VISUAL */}
                {activeStep.visualType === 'semicolon' && (
                  <div className="p-2 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-700 flex items-center gap-2">
                    <span className="font-mono text-base text-purple-700 font-black">;</span>
                    <span>Statement Terminator: Marks the clean end of the SQL query.</span>
                  </div>
                )}

                {/* 10. COMPLETE EXECUTION & VERIFIED RESULT SET */}
                {activeStep.visualType === 'complete_execution' && activeStep.resultRows && (
                  <div className="flex flex-col gap-1 max-h-[140px] overflow-y-auto">
                    <table className="w-full text-left text-[11px] font-mono border-collapse">
                      <thead>
                        <tr className="bg-purple-100/90 text-purple-950 border-b border-purple-200">
                          {activeStep.resultHeaders?.map((h) => (
                            <th key={h} className="py-1 px-1.5 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {activeStep.resultRows.slice(0, 4).map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={`border-b border-slate-200 ${
                              rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                            }`}
                          >
                            {activeStep.resultHeaders?.map((h) => (
                              <td key={h} className="py-0.5 px-1.5 text-slate-700 truncate max-w-[120px]">
                                {String(row[h] !== undefined ? row[h] : '')}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {activeStep.resultRows.length > 4 && (
                      <span className="text-[9.5px] text-slate-400 italic text-center">
                        + {activeStep.resultRows.length - 4} more records retrieved
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* ── STEPPER CONTROLS ── */}
              <div className="flex items-center gap-1.5 pt-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStepIndex === 0}
                  className="h-[32px] px-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center gap-1 text-xs font-semibold shadow-2xs transition-all cursor-pointer active:scale-95"
                  title="Previous Concept Step"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                {!isLastStep ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 h-[32px] px-3 rounded-lg bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer active:scale-95"
                    title="Next Concept Step"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="flex-1 h-[32px] px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer active:scale-95"
                    title="Restart Explanation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restart Explanation</span>
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
