import React, { useState } from 'react';
import { ArrowUp, ArrowDown, CheckCircle2, AlertTriangle, Play, Sparkles, Shuffle } from 'lucide-react';
import { Mission } from '../../types';
import { AnalyticsService } from '../../services/analytics';
import confetti from 'canvas-confetti';

interface Mission2OrderProps {
  mission: Mission;
  onSuccess: () => void;
  onMistake: (desc: string) => void;
}

interface StepItem {
  id: string;
  text: string;
  logicalIndex: number;
}

export const Mission2Order: React.FC<Mission2OrderProps> = ({ mission, onSuccess, onMistake }) => {
  // Scrambled items
  const [items, setItems] = useState<StepItem[]>([
    { id: 'step_pour', text: 'Pour freshly brewed tea into your cup', logicalIndex: 3 },
    { id: 'step_water', text: 'Fill the kettle with fresh water', logicalIndex: 0 },
    { id: 'step_leaves', text: 'Add aromatic tea leaves and let it steep', logicalIndex: 2 },
    { id: 'step_boil', text: 'Switch on kettle heater and bring water to a boil', logicalIndex: 1 },
  ]);

  const [message, setMessage] = useState<{ type: 'info' | 'success' | 'error'; text: string }>({
    type: 'info',
    text: 'Use the Up/Down arrows to arrange the steps into the correct chronological order.',
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const moveUp = (index: number) => {
    if (index === 0 || isCompleted) return;
    const newItems = [...items];
    const temp = newItems[index - 1];
    newItems[index - 1] = newItems[index];
    newItems[index] = temp;
    setItems(newItems);
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1 || isCompleted) return;
    const newItems = [...items];
    const temp = newItems[index + 1];
    newItems[index + 1] = newItems[index];
    newItems[index] = temp;
    setItems(newItems);
  };

  const handleVerify = () => {
    AnalyticsService.log('answer_submitted', { missionId: mission.id, currentOrder: items.map(i => i.id) });

    const isCorrect = items.every((item, idx) => item.logicalIndex === idx);

    if (isCorrect) {
      setIsCompleted(true);
      setMessage({
        type: 'success',
        text: '⚡ Perfect sequence! Computers execute strictly from top to bottom. Order matters.',
      });
      AnalyticsService.log('answer_correct', { missionId: mission.id });
      confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
      setTimeout(() => {
        onSuccess();
      }, 1400);
    } else {
      // Find the first out-of-order element to give patient diagnostic clue
      let firstFaultIndex = -1;
      for (let i = 0; i < items.length; i++) {
        if (items[i].logicalIndex !== i) {
          firstFaultIndex = i;
          break;
        }
      }

      setMessage({
        type: 'error',
        text: `Great catch opportunity. Step ${firstFaultIndex + 1} looks out of sequence. Think: what prerequisite must occur before this step?`,
      });
      onMistake('Scrambled instruction order');
      AnalyticsService.log('answer_incorrect', { missionId: mission.id });
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="p-4 rounded-xl bg-lab-900 border border-white/10 text-xs text-slate-300">
        <p className="font-semibold text-cyan-300 mb-1">Scenario:</p>
        <p>
          A robotic food synthesizer received this recipe sequence during a memory glitch. If executed in this scrambled order, boiling water would be poured before water is even fetched!
        </p>
      </div>

      {/* Reorderable List */}
      <div className="space-y-2.5">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
              isCompleted && item.logicalIndex === idx
                ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                : 'bg-lab-900/80 border-white/10 text-slate-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-md bg-lab-950 border border-white/10 flex items-center justify-center font-mono text-xs text-cyan-400 font-bold">
                {idx + 1}
              </span>
              <span className="text-sm font-medium">{item.text}</span>
            </div>

            {/* Controls */}
            {!isCompleted && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveUp(idx)}
                  disabled={idx === 0}
                  className="p-1.5 rounded-lg bg-lab-950 border border-white/10 hover:border-cyan-400 disabled:opacity-20 text-slate-300 transition-all"
                  title="Move step up"
                >
                  <ArrowUp className="w-4 h-4 text-cyan-400" />
                </button>
                <button
                  onClick={() => moveDown(idx)}
                  disabled={idx === items.length - 1}
                  className="p-1.5 rounded-lg bg-lab-950 border border-white/10 hover:border-cyan-400 disabled:opacity-20 text-slate-300 transition-all"
                  title="Move step down"
                >
                  <ArrowDown className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        disabled={isCompleted}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 disabled:opacity-40 text-lab-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition-all"
      >
        <Play className="w-4 h-4 fill-lab-950" />
        <span>EXECUTE ORDER SEQUENCE</span>
      </button>

      {/* Status banner */}
      <div
        className={`p-3.5 rounded-xl border text-xs flex items-center gap-2.5 transition-all ${
          message.type === 'success'
            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-glow-emerald'
            : message.type === 'error'
            ? 'bg-rose-950/60 border-rose-500 text-rose-200'
            : 'bg-lab-900 border-white/10 text-slate-300'
        }`}
      >
        {message.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
        {message.type === 'error' && <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />}
        <span>{message.text}</span>
      </div>
    </div>
  );
};
