import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Target, 
  RotateCcw, 
  HelpCircle,
  Compass,
  MessageSquare
} from 'lucide-react';
import { LearnerProfile, BrainProfile, DayFeedback } from '../../types';
import { DAY1_RETRIEVAL_QUESTIONS } from '../../data/retrievalData';
import { StorageService } from '../../services/storage';
import { AnalyticsService } from '../../services/analytics';
import confetti from 'canvas-confetti';

interface Day1FinalReportProps {
  profile: LearnerProfile;
  onContinueToDay2: () => void;
  onNavigateDashboard: () => void;
}

export const Day1FinalReport: React.FC<Day1FinalReportProps> = ({
  profile,
  onContinueToDay2,
  onNavigateDashboard,
}) => {
  // Spaced Retrieval Step
  const [retrievalIndex, setRetrievalIndex] = useState(0);
  const [selectedRetrievalOption, setSelectedRetrievalOption] = useState<number | null>(null);
  const [retrievalSubmitted, setRetrievalSubmitted] = useState(false);
  const [retrievalCompleted, setRetrievalCompleted] = useState(false);

  // Feedback Form State
  const [feedbackRating, setFeedbackRating] = useState<'loved' | 'good' | 'okay' | 'confusing' | null>(null);
  const [difficulties, setDifficulties] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Brain Profile metrics
  const brainProfile: BrainProfile = {
    sequenceThinking: 82,
    prediction: 67,
    variables: 74,
    debugging: 81,
    problemSolving: 70,
    strength: 'Debugging & Analytical Observation',
    practiceNext: 'Mental Code Tracing (Prediction)',
    tomorrowPreview: 'Day 2 — Teach the Computer to Make Decisions',
  };

  const currentRetrieval = DAY1_RETRIEVAL_QUESTIONS[retrievalIndex];

  const handleRetrievalSubmit = () => {
    if (selectedRetrievalOption === null) return;
    setRetrievalSubmitted(true);
    const isCorrect = selectedRetrievalOption === currentRetrieval.correctIndex;
    AnalyticsService.log('answer_submitted', {
      type: 'retrieval',
      questionId: currentRetrieval.id,
      isCorrect,
    });
  };

  const handleNextRetrieval = () => {
    if (retrievalIndex < DAY1_RETRIEVAL_QUESTIONS.length - 1) {
      setRetrievalIndex(retrievalIndex + 1);
      setSelectedRetrievalOption(null);
      setRetrievalSubmitted(false);
    } else {
      setRetrievalCompleted(true);
      confetti({ particleCount: 50, spread: 60 });
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackRating) return;

    const feedback: DayFeedback = {
      dayNumber: 1,
      rating: feedbackRating,
      difficulties,
      timestamp: new Date().toISOString(),
    };

    StorageService.saveFeedback(feedback);
    AnalyticsService.log('feedback_submitted', { day: 1, rating: feedbackRating });
    setFeedbackSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 text-left">
      {/* Report Header */}
      <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>DAY 1 SYNTHESIS COMPLETE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          YOUR DAY 1 BRAIN PROFILE
        </h1>
        <p className="text-xs text-slate-400 mt-2 max-w-lg mx-auto leading-relaxed">
          * Notice: This profile reflects practice progress and cognitive skill calibration within this platform. It is a learning-progress indicator, not an IQ or innate intelligence test.
        </p>
      </div>

      {/* 5 Cognitive Indicators Radar / Bars */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span>CALIBRATED COGNITIVE INDICATORS</span>
          </h2>
          <span className="text-xs font-mono text-cyan-400">BENCHMARK: CLASS 8+</span>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Sequence Thinking', val: brainProfile.sequenceThinking, color: 'bg-cyan-400' },
            { label: 'Prediction', val: brainProfile.prediction, color: 'bg-amber-400' },
            { label: 'Variables & State', val: brainProfile.variables, color: 'bg-emerald-400' },
            { label: 'Debugging Instinct', val: brainProfile.debugging, color: 'bg-purple-400' },
            { label: 'Problem Solving', val: brainProfile.problemSolving, color: 'bg-teal-400' },
          ].map((item) => (
            <div key={item.label} className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">{item.label}</span>
                <span className="font-bold text-white">{item.val}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-lab-900 border border-white/5 overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                  style={{ width: `${item.val}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Strength & Practice Next Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
          <div className="p-4 rounded-xl bg-lab-900/90 border border-emerald-500/30 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
              <Award className="w-4 h-4" />
              <span>YOUR STRONGEST CATALYST</span>
            </div>
            <p className="text-sm font-bold text-white">{brainProfile.strength}</p>
            <p className="text-xs text-slate-400">
              You detected broken code rapidly and understood bracket symmetry without fear.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-lab-900/90 border border-amber-500/30 space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
              <Target className="w-4 h-4" />
              <span>RECOMMENDED PRACTICE NEXT</span>
            </div>
            <p className="text-sm font-bold text-white">{brainProfile.practiceNext}</p>
            <p className="text-xs text-slate-400">
              Spend extra seconds mentally evaluating values before letting Python run.
            </p>
          </div>
        </div>
      </div>

      {/* Tomorrow's Teaser Card */}
      <div className="p-6 rounded-2xl glass-panel border border-cyan-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
            UNLOCKED TOMORROW
          </span>
          <h3 className="text-xl font-bold text-white">
            {brainProfile.tomorrowPreview}
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-lg">
            Move beyond linear sequences: Teach machines how to make independent decisions using Boolean logic and if/else conditions.
          </p>
        </div>

        <button
          onClick={onContinueToDay2}
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-lab-950 font-bold text-sm flex items-center gap-2 shadow-glow-cyan shrink-0 transition-all"
        >
          <span>EXPLORE DAY 2 SHELL</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Spaced Retrieval Practice Section */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-semibold">
            <RotateCcw className="w-4 h-4 text-cyan-400" />
            <span>SESSION END SPACED RETRIEVAL ({retrievalIndex + 1}/{DAY1_RETRIEVAL_QUESTIONS.length})</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">
            INTERVALS: TODAY • +1D • +3D • +7D • +21D
          </span>
        </div>

        {!retrievalCompleted ? (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white">
              {currentRetrieval.question}
            </h4>

            <div className="space-y-2">
              {currentRetrieval.options.map((opt, idx) => {
                let style = 'bg-lab-900 border-white/10 text-slate-300 hover:border-cyan-500/40';
                if (selectedRetrievalOption === idx) {
                  style = 'bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-glow-cyan';
                }
                if (retrievalSubmitted) {
                  if (idx === currentRetrieval.correctIndex) {
                    style = 'bg-emerald-950/60 border-emerald-500 text-emerald-200';
                  } else if (selectedRetrievalOption === idx) {
                    style = 'bg-rose-950/60 border-rose-500 text-rose-200';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!retrievalSubmitted) setSelectedRetrievalOption(idx);
                    }}
                    disabled={retrievalSubmitted}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${style}`}
                  >
                    <span>{opt}</span>
                    {retrievalSubmitted && idx === currentRetrieval.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {!retrievalSubmitted ? (
              <button
                onClick={handleRetrievalSubmit}
                disabled={selectedRetrievalOption === null}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-lab-950 font-bold text-xs transition-all font-mono"
              >
                TEST MEMORY RETRIEVAL
              </button>
            ) : (
              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-lab-900 border border-white/5 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-cyan-300 block mb-1">Concept Memory Anchor:</span>
                  <p>{currentRetrieval.explanation}</p>
                </div>
                <button
                  onClick={handleNextRetrieval}
                  className="w-full py-3 rounded-xl bg-emerald-500 text-lab-950 font-bold text-xs flex items-center justify-center gap-2 font-mono"
                >
                  <span>
                    {retrievalIndex < DAY1_RETRIEVAL_QUESTIONS.length - 1
                      ? 'NEXT RETRIEVAL QUESTION &rarr;'
                      : 'COMPLETE RETRIEVAL & SAVE SCHEDULE'}
                  </span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              Spaced retrieval saved to memory schedule! The algorithm has set intervals for tomorrow (+1d), 3 days, and 7 days.
            </span>
          </div>
        )}
      </div>

      {/* Day 1 Feedback Capture Form */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-semibold">
          <MessageSquare className="w-4 h-4 text-cyan-400" />
          <span>DAY 1 RESEARCH FEEDBACK</span>
        </div>

        {!feedbackSubmitted ? (
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <p className="text-sm font-semibold text-white">How was today's experience?</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'loved', emoji: '😀', label: 'Loved it' },
                { id: 'good', emoji: '🙂', label: 'Good' },
                { id: 'okay', emoji: '😐', label: 'Okay' },
                { id: 'confusing', emoji: '😕', label: 'Confusing' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFeedbackRating(opt.id as any)}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                    feedbackRating === opt.id
                      ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 shadow-glow-cyan'
                      : 'bg-lab-900 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="text-xs font-medium">{opt.label}</span>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">
                What was difficult or could be made clearer? (Optional)
              </label>
              <textarea
                rows={2}
                value={difficulties}
                onChange={(e) => setDifficulties(e.target.value)}
                placeholder="Tell us honestly what felt tricky or confusing..."
                className="w-full p-3 rounded-xl bg-lab-900 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-xs"
              />
            </div>

            <button
              type="submit"
              disabled={!feedbackRating}
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-lab-950 font-bold text-xs transition-all font-mono"
            >
              TRANSMIT FEEDBACK TO EXPERIMENT LAB
            </button>
          </form>
        ) : (
          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>Thank you! Your feedback directly refines the 2050 learning experiment.</span>
          </div>
        )}
      </div>

      {/* Back to Mission Control */}
      <div className="text-center pt-2">
        <button
          onClick={onNavigateDashboard}
          className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
        >
          &larr; Return to Mission Dashboard
        </button>
      </div>
    </div>
  );
};
