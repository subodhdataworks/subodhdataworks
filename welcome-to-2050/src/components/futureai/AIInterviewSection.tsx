import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  BarChart2, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck, 
  Bot,
  Volume2
} from 'lucide-react';
import { SupportedLanguage, PowerGreenAI } from '../../services/powerGreenAIService';

interface AIInterviewSectionProps {
  currentLanguage: SupportedLanguage;
}

export const AIInterviewSection: React.FC<AIInterviewSectionProps> = ({ currentLanguage }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const sampleAnswerText =
    'Lists in Python are mutable, meaning their elements can be altered, appended, or removed after creation, and they use square brackets. Tuples are immutable, meaning they cannot be modified once defined, and they use parentheses. Because tuples are immutable, they are faster and use less memory.';

  const handleStartVoiceAnswer = () => {
    setIsRecording(true);
    PowerGreenAI.startListening(
      (transcript) => {
        setUserAnswer(transcript);
        setIsRecording(false);
        handleEvaluate(transcript);
      },
      () => {
        setIsRecording(false);
      }
    );
  };

  const handleUseSample = () => {
    setUserAnswer(sampleAnswerText);
    handleEvaluate(sampleAnswerText);
  };

  const handleEvaluate = (text: string) => {
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      setHasEvaluated(true);
      // Speak feedback
      PowerGreenAI.speakText(
        'Excellent response. You clearly highlighted mutability, bracket syntax, and memory performance differences.',
        currentLanguage
      );
    }, 800);
  };

  const handleReset = () => {
    setUserAnswer('');
    setHasEvaluated(false);
    setIsRecording(false);
  };

  return (
    <section id="interview" className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            <Bot className="w-4 h-4 text-indigo-600" />
            <span>TECHNICAL EVALUATION SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Meet Your AI Interviewer
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Prepare for real hiring loops. Practice answering live technical data questions with immediate voice feedback, scoring, and rubrics.
          </p>
        </div>

        {/* Futuristic Interview Interface Container */}
        <div className="max-w-4xl mx-auto rounded-3xl light-glass-card border border-slate-200/90 shadow-2xl p-6 sm:p-10">
          
          {/* Top Status Bar: Question Index & Progress */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold">
                Question 03 / 10
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Data Analyst • Python Data Structures
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-600">Interview Readiness:</span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                64% Current Score
              </span>
            </div>
          </div>

          {/* AI Interviewer Avatar & Question Box */}
          <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Animated AI Interviewer Avatar */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 p-[2.5px] shadow-xl shadow-indigo-500/20">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center relative overflow-hidden">
                  {/* Holographic Concentric Rings */}
                  <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-indigo-50/50" />
                  <Bot className="w-10 h-10 text-indigo-600 relative z-10" />
                  <span className="absolute bottom-1.5 inset-x-3 h-1 bg-indigo-400 rounded-full animate-pulse" />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white" />
            </div>

            {/* Question Card */}
            <div className="flex-1 text-left space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  PowerGreen AI Interviewer Asks:
                </span>
                <button
                  onClick={() =>
                    PowerGreenAI.speakText(
                      'Explain the difference between a list and a tuple in Python.',
                      currentLanguage
                    )
                  }
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-indigo-600 transition-colors"
                  title="Listen to question"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                &quot;Explain the difference between a list and a tuple in Python.&quot;
              </h3>

              <p className="text-xs text-slate-500 font-normal">
                Focus on mutability, syntax notation, runtime memory performance, and ideal use cases.
              </p>
            </div>
          </div>

          {/* User Answer Section: Voice or Text Fallback */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Your Answer (Voice or Text):
              </label>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleUseSample}
                  className="text-xs font-semibold text-sky-700 hover:text-sky-800 underline"
                >
                  Fill Model Answer
                </button>
                {userAnswer && (
                  <button
                    onClick={handleReset}
                    className="p-1 text-slate-400 hover:text-slate-600"
                    title="Reset Answer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Speak using the microphone below or type your technical explanation..."
              rows={4}
              className="w-full p-4 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm leading-relaxed"
            />

            {/* Answer Control Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleStartVoiceAnswer}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isRecording
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
                  }`}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  <span>{isRecording ? 'Listening (Speak now)...' : 'Record Voice Answer'}</span>
                </button>
              </div>

              <button
                onClick={() => handleEvaluate(userAnswer)}
                disabled={!userAnswer.trim() || isThinking}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs font-bold shadow transition-all flex items-center gap-2"
              >
                <span>{isThinking ? 'Analyzing with AI...' : 'Submit for Evaluation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Realtime Answer Evaluation & Score Rubrics (Shown on Submit) */}
          {hasEvaluated && (
            <div className="mt-8 p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-slate-900 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>AI Rubric Evaluation: 93 / 100</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-white px-2.5 py-1 rounded-full border border-emerald-200">
                  Strong Pass Grade
                </span>
              </div>

              {/* 3 Metric Progress Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-sm">
                  <div className="text-[11px] text-slate-500">Conceptual Clarity</div>
                  <div className="text-base font-bold text-slate-800">94%</div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                    <div className="w-[94%] h-full bg-emerald-500 rounded-full" />
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-sm">
                  <div className="text-[11px] text-slate-500">Syntax & Mutability</div>
                  <div className="text-base font-bold text-slate-800">96%</div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                    <div className="w-[96%] h-full bg-sky-500 rounded-full" />
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-sm">
                  <div className="text-[11px] text-slate-500">Communication</div>
                  <div className="text-base font-bold text-slate-800">90%</div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                    <div className="w-[90%] h-full bg-indigo-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Qualitative Feedback */}
              <p className="text-xs text-emerald-900 leading-relaxed font-medium bg-white/70 p-3 rounded-xl border border-emerald-100">
                <strong>Feedback from PowerGreen AI:</strong> &quot;Outstanding explanation. You correctly identified that lists are mutable with square brackets, while tuples are immutable with parentheses. Mentioning runtime memory optimization demonstrates senior analytical depth.&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
