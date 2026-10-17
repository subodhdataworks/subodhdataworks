import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, AlertTriangle, Sparkles, Send, BookOpen } from 'lucide-react';
import { Mission } from '../../types';
import { AnalyticsService } from '../../services/analytics';
import confetti from 'canvas-confetti';

interface Mission7ExplainProps {
  mission: Mission;
  onSuccess: () => void;
  onMistake: (desc: string) => void;
}

export const Mission7Explain: React.FC<Mission7ExplainProps> = ({ mission, onSuccess, onMistake }) => {
  const [explanation, setExplanation] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'encourage'; text: string; breakdown?: string } | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!explanation.trim() || isCompleted) return;

    AnalyticsService.log('answer_submitted', { missionId: mission.id, explanation });

    const text = explanation.toLowerCase();
    
    // Semantic keywords (English & Hinglish friendly)
    const storeKeywords = ['store', 'save', 'name', 'alex', 'variable', 'box', 'rakh', 'dabba', 'holds', 'assign'];
    const outputKeywords = ['print', 'hello', 'display', 'screen', 'say', 'greet', 'output', 'dikhata', 'bolta', 'chalta'];

    const hasStore = storeKeywords.some((kw) => text.includes(kw));
    const hasOutput = outputKeywords.some((kw) => text.includes(kw));
    const wordCount = text.split(/\s+/).filter(Boolean).length;

    if (wordCount < 3) {
      setFeedback({
        type: 'encourage',
        text: 'Give a little more detail. What does the computer store on line 1, and what does it display on line 2?',
      });
      onMistake('Explanation was too brief (under 3 words)');
      return;
    }

    if (hasStore || hasOutput || wordCount >= 6) {
      setIsCompleted(true);
      setFeedback({
        type: 'success',
        text: 'Brilliant conceptual articulation! You explained the mental model accurately.',
        breakdown: 'Line 1 creates a container named `name` and stores "Alex" inside it. Line 2 calls the `print` instruction to retrieve that name and display "Hello Alex" on screen.',
      });
      AnalyticsService.log('answer_correct', { missionId: mission.id });
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      setTimeout(() => {
        onSuccess();
      }, 2400);
    } else {
      setFeedback({
        type: 'encourage',
        text: 'Great catch opportunity! Try describing: (1) What data is being held in memory, and (2) What is being printed on screen?',
      });
      onMistake('Explanation missed store or print concepts');
      AnalyticsService.log('answer_incorrect', { missionId: mission.id, text });
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Code Card */}
      <div className="rounded-xl overflow-hidden border border-white/10 bg-lab-900 shadow-xl">
        <div className="px-4 py-2 bg-lab-950/90 border-b border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>PROGRAM TO EXPLAIN</span>
          <span className="text-cyan-400">MISSION 7</span>
        </div>

        <div className="p-4 font-mono text-sm leading-loose">
          <div className="flex gap-4">
            <span className="text-slate-600 select-none">1</span>
            <span className="text-purple-300">name</span>
            <span className="text-slate-400">=</span>
            <span className="text-emerald-300">"Alex"</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none">2</span>
            <span className="text-cyan-300">print</span>
            <span className="text-slate-400">(</span>
            <span className="text-emerald-300">"Hello"</span>
            <span className="text-slate-400">,</span>
            <span className="text-purple-300">name</span>
            <span className="text-slate-400">)</span>
          </div>
        </div>
      </div>

      {/* Explanation Form */}
      <form onSubmit={handleSubmit} className="p-5 rounded-2xl glass-panel border border-cyan-500/30 space-y-4">
        <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-semibold">
          <MessageSquare className="w-4 h-4 text-cyan-400" />
          <span>EXPLAIN IN YOUR OWN WORDS</span>
        </div>

        <p className="text-sm font-semibold text-white">
          Explain what this program does in your own words. Simple English or Hinglish is completely welcome!
        </p>

        <textarea
          rows={3}
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          disabled={isCompleted}
          placeholder="e.g. It creates a variable called name with Alex, and then prints Hello Alex on screen..."
          className="w-full p-3.5 rounded-xl bg-lab-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm leading-relaxed"
        />

        <button
          type="submit"
          disabled={!explanation.trim() || isCompleted}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 disabled:opacity-40 text-lab-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition-all"
        >
          <Send className="w-4 h-4" />
          <span>SUBMIT EXPLANATION</span>
        </button>
      </form>

      {/* Feedback banner */}
      {feedback && (
        <div
          className={`p-4 rounded-xl border text-xs space-y-2 transition-all ${
            feedback.type === 'success'
              ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-glow-emerald'
              : 'bg-amber-950/50 border-amber-500/40 text-amber-200'
          }`}
        >
          <div className="flex items-center gap-2 font-semibold">
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            )}
            <span>{feedback.text}</span>
          </div>

          {feedback.breakdown && (
            <div className="p-3 rounded-lg bg-lab-900/90 text-slate-300 text-xs border border-white/5 space-y-1">
              <span className="font-semibold text-cyan-300 font-mono text-[10px] block">
                CORE INSIGHT SUMMARY:
              </span>
              <p>{feedback.breakdown}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
