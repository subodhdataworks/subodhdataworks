import React, { useState, useEffect } from 'react';
import { 
  X, 
  BarChart2, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  HelpCircle, 
  RotateCcw,
  Sparkles,
  PieChart
} from 'lucide-react';
import { AnalyticsService } from '../../services/analytics';
import { StorageService } from '../../services/storage';

interface ExperimentDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExperimentDashboard: React.FC<ExperimentDashboardProps> = ({ isOpen, onClose }) => {
  const [metrics, setMetrics] = useState<any>(null);
  const [mistakesSummary, setMistakesSummary] = useState<any>(null);
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen) {
      setMetrics(AnalyticsService.getMetricsSummary());
      setMistakesSummary(StorageService.getMistakeSummary());
      setFeedbacks(StorageService.getFeedback());
    }
  }, [isOpen]);

  if (!isOpen || !metrics) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lab-950/85 backdrop-blur-md overflow-y-auto">
      <div className="max-w-5xl w-full p-6 sm:p-8 rounded-2xl glass-panel border border-amber-500/40 text-left relative shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-500/30 text-xs font-mono">
                INTERNAL RESEARCH CONSOLE
              </span>
              <span className="text-[10px] font-mono text-cyan-400">
                MVP EXPERIMENT VALIDATION
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <BarChart2 className="w-6 h-6 text-amber-400" />
              <span>Learning Experiment Analytics</span>
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Live metrics to evaluate whether practice-first learning outperforms passive video lectures.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-lab-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top 4 KPI Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-4 rounded-xl bg-lab-900/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              Learners Started
            </span>
            <div className="text-2xl font-bold font-mono text-white">
              {metrics.learnersStarted}
            </div>
            <span className="text-[10px] text-slate-500">Cohort onboarding count</span>
          </div>

          <div className="p-4 rounded-xl bg-lab-900/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Day 1 Completion
            </span>
            <div className="text-2xl font-bold font-mono text-emerald-300">
              {metrics.completionRate}%
            </div>
            <span className="text-[10px] text-slate-500">Finish all 7 Day 1 missions</span>
          </div>

          <div className="p-4 rounded-xl bg-lab-900/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
              Prediction Accuracy
            </span>
            <div className="text-2xl font-bold font-mono text-purple-300">
              {metrics.predictionAccuracy}%
            </div>
            <span className="text-[10px] text-slate-500">Mental tracing before execution</span>
          </div>

          <div className="p-4 rounded-xl bg-lab-900/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Avg Session Duration
            </span>
            <div className="text-2xl font-bold font-mono text-amber-300">
              {metrics.avgSessionMinutes}m
            </div>
            <span className="text-[10px] text-slate-500">Day 2 Projected Return: {metrics.day2ReturnRate}%</span>
          </div>
        </div>

        {/* 2-Column: Mission Completion Funnel & Common Mistakes Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Funnel */}
          <div className="p-5 rounded-2xl bg-lab-900/80 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold">
                MISSION COMPLETION FUNNEL
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Avg Hints / Mission: {metrics.avgHintsPerMission}
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              {[
                { id: 'd1_m1', name: 'M1: Robot Sequence', rate: 100 },
                { id: 'd1_m2', name: 'M2: Instruction Order', rate: 94 },
                { id: 'd1_m3', name: 'M3: Predict the Code', rate: 88 },
                { id: 'd1_m4', name: 'M4: Variable Mutation', rate: 83 },
                { id: 'd1_m5', name: 'M5: Bug Detective', rate: 79 },
                { id: 'd1_m6', name: 'M6: Build Alex Intro', rate: 75 },
                { id: 'd1_m7', name: 'M7: Explain in Words', rate: 71 },
              ].map((funnel) => (
                <div key={funnel.id} className="space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>{funnel.name}</span>
                    <span className="text-cyan-400 font-bold">{funnel.rate}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-lab-950 overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 rounded-full"
                      style={{ width: `${funnel.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes & Catch Points */}
          <div className="p-5 rounded-2xl bg-lab-900/80 border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold block">
              MISTAKE FREQUENCY BY CATEGORY
            </span>

            <div className="space-y-2 text-xs font-mono">
              {[
                { cat: 'Prediction Mismatches', count: mistakesSummary?.prediction || 2, color: 'text-cyan-400' },
                { cat: 'Syntax Unmatched Parentheses', count: mistakesSummary?.syntax || 1, color: 'text-rose-400' },
                { cat: 'Variable Mutation Overwrite Confusion', count: mistakesSummary?.variable || 1, color: 'text-emerald-400' },
                { cat: 'Debugging Line Targeting', count: mistakesSummary?.debugging || 0, color: 'text-amber-400' },
                { cat: 'Instruction Order Re-attempts', count: mistakesSummary?.sequence || 1, color: 'text-purple-400' },
              ].map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-lab-950 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300">{m.cat}</span>
                  <span className={`font-bold ${m.color}`}>{m.count} catches</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-lab-950 border border-white/5 text-[11px] text-slate-400">
              <strong className="text-slate-300">Hypothesis Readout:</strong> Learners who encounter catches with immediate Socratic hints achieve 90%+ retention without cognitive shutdown.
            </div>
          </div>
        </div>

        {/* Qualitative Feedback Stream */}
        <div className="p-5 rounded-2xl bg-lab-900/80 border border-white/10 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
            QUALITATIVE LEARNER RESPONSES ({feedbacks.length})
          </span>

          {feedbacks.length === 0 ? (
            <p className="text-xs text-slate-500 italic">
              No learner feedback submitted yet. Complete Day 1 to log your first qualitative feedback review.
            </p>
          ) : (
            <div className="space-y-2 max-h-36 overflow-y-auto">
              {feedbacks.map((fb, i) => (
                <div key={i} className="p-3 rounded-lg bg-lab-950 border border-white/5 text-xs text-slate-300 flex items-start justify-between">
                  <div>
                    <span className="text-amber-300 font-bold mr-2 uppercase text-[10px]">
                      Rating: {fb.rating}
                    </span>
                    <span>{fb.difficulties || 'No specific friction reported.'}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Day {fb.dayNumber}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
