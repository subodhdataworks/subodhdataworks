import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Play, CheckCircle2, Lightbulb, Database, Sparkles } from 'lucide-react';
import { Mission } from '../../types';
import { Modal } from '../common/Modal';

interface MissionChallengeModalProps {
  mission: Mission;
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const MissionChallengeModal: React.FC<MissionChallengeModalProps> = ({
  mission,
  isOpen,
  onClose,
  onComplete
}) => {
  const [queryCode, setQueryCode] = useState(
    'SELECT product_name, SUM(unit_price * quantity) AS total_revenue\nFROM orders\nGROUP BY product_name\nORDER BY total_revenue DESC\nLIMIT 3;'
  );
  const [hasRun, setHasRun] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleRunQuery = () => {
    setHasRun(true);
    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    onComplete();
  };

  const sampleData = mission.sqlProblem?.sampleData || [];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={mission.title} maxWidth="max-w-lg">
      <div className="space-y-4">
        {/* Mission Goal */}
        <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              Dataset: orders table
            </span>
            <span className="text-xs font-bold text-indigo-900 bg-indigo-100/80 px-2 py-0.5 rounded-full">
              +{mission.xpReward} XP
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-800">
            {mission.description}
          </p>
        </div>

        {/* Sample Table Preview */}
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
            Table Preview (Top 3 records)
          </span>
          <div className="overflow-x-auto rounded-xl border border-slate-200 text-xs">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-100/90 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-1.5 px-2.5">order_id</th>
                  <th className="py-1.5 px-2.5">product_name</th>
                  <th className="py-1.5 px-2.5">unit_price</th>
                  <th className="py-1.5 px-2.5">quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 font-mono">
                {sampleData.slice(0, 3).map((row) => (
                  <tr key={row.order_id} className="hover:bg-slate-50">
                    <td className="py-1 px-2.5">{row.order_id}</td>
                    <td className="py-1 px-2.5 text-slate-900 font-sans font-medium">{row.product_name}</td>
                    <td className="py-1 px-2.5">${row.unit_price}</td>
                    <td className="py-1 px-2.5">{row.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Query Editor */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              SQL Query
            </label>
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{showHint ? 'Hide Hint' : 'Need Hint?'}</span>
            </button>
          </div>

          {showHint && (
            <div className="p-2.5 mb-2 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 leading-relaxed">
              💡 {mission.sqlProblem?.explanation}
            </div>
          )}

          <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-inner">
            <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400">
              <span>PostgreSQL 16 Editor</span>
              <span className="text-emerald-400 font-mono">Ready</span>
            </div>
            <textarea
              value={queryCode}
              onChange={(e) => setQueryCode(e.target.value)}
              rows={4}
              className="w-full p-3 font-mono text-xs text-emerald-300 bg-transparent focus:outline-none resize-none leading-relaxed"
            />
          </div>
        </div>

        {/* Query Result (if run) */}
        {hasRun && (
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 animate-fade-in">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Query Executed Successfully! Top 3 Found:</span>
            </div>
            <div className="space-y-1 text-xs text-emerald-950 font-mono">
              <div className="flex justify-between py-0.5 border-b border-emerald-100">
                <span>1. UltraBook Pro</span>
                <span className="font-bold">$4,800.00</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-emerald-100">
                <span>2. 4K Monitor 27"</span>
                <span className="font-bold">$2,700.00</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span>3. Ergonomic Chair</span>
                <span className="font-bold">$2,240.00</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleRunQuery}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
        >
          {hasRun ? (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Re-run Query & Claim XP</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Run SQL Query</span>
            </>
          )}
        </button>
      </div>
    </Modal>
  );
};
