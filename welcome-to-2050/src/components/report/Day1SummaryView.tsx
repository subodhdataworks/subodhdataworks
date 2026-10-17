import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Brain, 
  Database, 
  Code2, 
  Award,
  Layers,
  MessageSquare,
  Volume2
} from 'lucide-react';
import { LearnerProfile, DayFeedback } from '../../types';
import { StorageService } from '../../services/storage';
import { AnalyticsService } from '../../services/analytics';
import { CapabilityMap } from '../skills/CapabilityMap';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import confetti from 'canvas-confetti';

interface Day1SummaryViewProps {
  profile: LearnerProfile;
  onContinueToDay2: () => void;
  onNavigateDashboard: () => void;
}

export const Day1SummaryView: React.FC<Day1SummaryViewProps> = ({
  profile,
  onContinueToDay2,
  onNavigateDashboard,
}) => {
  const [feedbackRating, setFeedbackRating] = useState<'loved' | 'good' | 'okay' | 'confusing' | null>(null);
  const [difficulties, setDifficulties] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  useEffect(() => {
    SoundEffects.playMissionComplete();
    Voice.speak("Today you didn't memorize Python. You taught a computer something.");
  }, []);

  const milestones = [
    { title: 'Python', desc: 'Gave the machine explicit instructions with print()' },
    { title: 'Variables', desc: 'Created digital memory containers in RAM' },
    { title: 'Prediction', desc: 'Built the mental execution model before running code' },
    { title: 'Debugging', desc: 'Isolated syntax mismatches and repaired them calmly' },
    { title: 'Data Thinking', desc: 'Calculated highest, lowest, and average over 10,000 records' },
  ];

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
    SoundEffects.playBreakthrough();
    setFeedbackSubmitted(true);
    confetti({ particleCount: 50, spread: 60 });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 text-left selection:bg-quantum-teal/20 selection:text-deep-space animate-fadeIn">
      {/* DAY 01 COMPLETE HERO */}
      <div className="p-8 rounded-3xl bg-white border border-lab-900/10 text-center relative overflow-hidden shadow-elevated">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lab-100 text-deep-space border border-lab-900/10 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-solar-gold" />
          <span className="font-semibold">DAY 01 COMPLETE</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-deep-space tracking-tight">
          YOU JUST CODED IN 2050
        </h1>

        <p className="text-sm text-lab-500 mt-2 max-w-md mx-auto">
          You didn't watch a lecture. You thought, predicted, repaired, and computed.
        </p>

        {/* Section 16 AI Quote */}
        <div className="mt-6 p-4 rounded-2xl bg-lab-50 border border-lab-900/5 max-w-md mx-auto text-center">
          <span className="text-[10px] font-mono tracking-widest text-quantum-teal uppercase font-semibold block">
            AI COMPANION REFLECTION
          </span>
          <p className="text-sm font-medium text-deep-space mt-1 italic">
            «“Today you didn't memorize Python. You taught a computer something.”»
          </p>
        </div>

        {/* Section 16 Progress Checkmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-6 text-left text-xs font-mono">
          {milestones.map((m) => (
            <div key={m.title} className="p-3 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{m.title}</span>
              </div>
              <p className="text-[11px] text-lab-500 font-sans leading-tight">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section 38 Learner Emotional Trajectory */}
        <div className="mt-8 pt-6 border-t border-lab-100 text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-quantum-teal font-semibold block mb-3">
            YOUR TRANSFORMATION TRAJECTORY
          </span>
          <div className="space-y-2 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-lab-100 text-lab-400 flex items-center justify-center text-[10px]">1</span>
              <span className="text-lab-400">YOU STARTED WITH:</span>
              <span className="text-deep-space font-medium">"Mujhe coding nahi aati / I don't know Python."</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-lab-100 text-lab-500 flex items-center justify-center text-[10px]">2</span>
              <span className="text-lab-400">YOU LEARNED:</span>
              <span className="text-deep-space font-medium">How computers follow exact instructions with print().</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-quantum-teal/10 text-quantum-teal flex items-center justify-center text-[10px]">3</span>
              <span className="text-quantum-teal font-semibold">YOU DISCOVERED:</span>
              <span className="text-deep-space font-bold">Named Memory Containers (Variables).</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-solar-gold/20 text-deep-space flex items-center justify-center text-[10px]">4</span>
              <span className="text-solar-gold font-bold">TODAY YOU SOLVED:</span>
              <span className="text-deep-space font-bold">Real Kirana store discount & 10,000 board exam results!</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2050 CAPABILITY MAP (No coins or gamer badges) */}
      <div className="p-6 rounded-3xl bg-white border border-lab-900/10 shadow-subtle">
        <CapabilityMap currentDay={1} completedDays={[1]} variant="expanded" />
      </div>

      {/* CONTINUATION TO DAY 2 */}
      <div className="p-6 rounded-3xl bg-deep-space text-future-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-elevated">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-quantum-teal font-semibold block">
            TOMORROW'S TRAJECTORY
          </span>
          <h3 className="text-xl font-bold tracking-tight mt-0.5">
            DAY 02 — TEACH THE COMPUTER TO DECIDE
          </h3>
          <p className="text-xs text-lab-300 mt-0.5">
            Learn Boolean logic, conditionals (`if`, `elif`, `else`), and decision branches.
          </p>
        </div>

        <button
          onClick={onContinueToDay2}
          className="px-6 py-3 rounded-full bg-quantum-teal text-white hover:bg-quantum-teal/90 text-xs font-semibold tracking-wide shadow-sm flex items-center gap-2 shrink-0 transition-transform active:scale-95"
        >
          <span>OPEN DAY 2 PREVIEW</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Qualitative Feedback Capture */}
      <div className="p-6 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-4">
        <div>
          <span className="text-xs font-mono text-quantum-teal font-semibold uppercase tracking-wider">
            EXPERIMENT LAB FEEDBACK
          </span>
          <h3 className="text-base font-bold text-deep-space mt-0.5">
            How did your Day 1 experience feel?
          </h3>
          <p className="text-xs text-lab-500">
            Your honest feedback refines the 2050 learning engine.
          </p>
        </div>

        {!feedbackSubmitted ? (
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'loved' as const, label: 'Loved it ✨' },
                { id: 'good' as const, label: 'Clear & Smooth 👍' },
                { id: 'okay' as const, label: 'Needed More Practice 🤔' },
                { id: 'confusing' as const, label: 'Had Questions ❓' },
              ].map((r) => (
                <button
                  type="button"
                  key={r.id}
                  onClick={() => setFeedbackRating(r.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all text-center ${
                    feedbackRating === r.id
                      ? 'bg-deep-space text-future-white border-deep-space shadow-subtle'
                      : 'bg-lab-50 text-lab-600 border-lab-200 hover:border-lab-400'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            <textarea
              value={difficulties}
              onChange={(e) => setDifficulties(e.target.value)}
              placeholder="Any moments that felt confusing, or concepts you'd like the AI mentor to explain differently? (Optional)"
              rows={2}
              className="w-full p-3 rounded-xl border border-lab-900/10 text-xs text-deep-space placeholder-lab-400 focus:outline-none focus:border-quantum-teal resize-none"
            />

            <button
              type="submit"
              disabled={!feedbackRating}
              className="px-5 py-2.5 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-medium disabled:opacity-30 transition-all"
            >
              Submit Feedback →
            </button>
          </form>
        ) : (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
            ✓ Thank you! Your signals have been recorded into our 2050 experiment telemetry.
          </div>
        )}
      </div>
    </div>
  );
};
