import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, Lightbulb, Sparkles } from 'lucide-react';

interface DiagnosticQuizProps {
  learnerName: string;
  onComplete: (score: number) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ learnerName, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const question = {
    title: 'Baseline Spatial Logic Test',
    prompt: `Greetings, ${learnerName}! Before we begin Day 1, here is a 30-second logic challenge to establish your baseline:`,
    scenario: 'A laser rover starts at coordinate (0, 0) facing North. It receives instructions in this exact order:',
    steps: [
      '1. Step Forward 1 unit (now at 0, 1)',
      '2. Turn Right 90 degrees (now facing East)',
      '3. Step Forward 2 units'
    ],
    questionText: 'Where does the rover end up?',
    options: [
      { text: 'Coordinate (2, 1) facing East', correct: true },
      { text: 'Coordinate (1, 2) facing North', correct: false },
      { text: 'Coordinate (0, 3) facing South', correct: false },
      { text: 'Coordinate (3, 3) facing West', correct: false },
    ],
    encouragement: 'Computers think in exact coordinates and orientation. You just verified your mental execution engine!'
  };

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
  };

  const handleFinish = () => {
    const isCorrect = selectedOption !== null && question.options[selectedOption].correct;
    onComplete(isCorrect ? 100 : 75);
  };

  return (
    <div className="max-w-xl w-full mx-auto p-6 rounded-2xl glass-panel border border-cyan-500/30 text-left shadow-2xl relative">
      <div className="flex items-center gap-2 mb-4 text-cyan-400 font-mono text-xs uppercase tracking-wider">
        <Compass className="w-4 h-4 text-cyan-400" />
        <span>PRE-DAY 1 DIAGNOSTIC CALIBRATION</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{question.title}</h3>
      <p className="text-sm text-slate-300 mb-4">{question.prompt}</p>

      <div className="bg-lab-900/90 p-4 rounded-xl border border-white/5 mb-5 space-y-2">
        <p className="text-xs text-slate-400">{question.scenario}</p>
        <ul className="space-y-1 text-xs font-mono text-cyan-200 pl-2">
          {question.steps.map((st, i) => (
            <li key={i}>{st}</li>
          ))}
        </ul>
      </div>

      <p className="text-sm font-semibold text-slate-200 mb-3">{question.questionText}</p>

      {/* Options */}
      <div className="space-y-2 mb-6">
        {question.options.map((opt, idx) => {
          let style = 'border-white/10 hover:border-cyan-500/40 bg-lab-900/60 text-slate-300';
          if (selectedOption === idx) {
            style = 'border-cyan-400 bg-cyan-950/70 text-cyan-200 shadow-glow-cyan';
          }
          if (submitted) {
            if (opt.correct) {
              style = 'border-emerald-500 bg-emerald-950/60 text-emerald-200';
            } else if (selectedOption === idx) {
              style = 'border-rose-500 bg-rose-950/60 text-rose-200';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={submitted}
              className={`w-full p-3 rounded-lg border text-left text-xs font-mono transition-all flex items-center justify-between ${style}`}
            >
              <span>{opt.text}</span>
              {submitted && opt.correct && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </button>
          );
        })}
      </div>

      {/* Feedback & Proceed */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-lab-950 font-bold text-sm transition-all"
        >
          SUBMIT REASONING
        </button>
      ) : (
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-cyan-950/50 border border-cyan-500/20 text-xs text-cyan-200 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>{question.encouragement}</span>
          </div>

          <button
            onClick={handleFinish}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-lab-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-emerald transition-all"
          >
            <span>PROCEED TO MISSION CONTROL (DAY 1)</span>
            <ArrowRight className="w-4 h-4 text-lab-950" />
          </button>
        </div>
      )}
    </div>
  );
};
