import React, { useState } from 'react';
import { Terminal, Database, FileSpreadsheet, CheckCircle2, Play, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PracticeView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'sql' | 'python' | 'excel'>('sql');
  const [solved, setSolved] = useState<number[]>([1]);

  const challenges = [
    { id: 1, title: 'Top 3 Products by Revenue', diff: 'Beginner', time: '10 min', xp: 120, category: 'sql' },
    { id: 2, title: 'Customer Cohort Retention Rate', diff: 'Intermediate', time: '25 min', xp: 250, category: 'sql' },
    { id: 3, title: 'Clean Inconsistent Date Formats with Pandas', diff: 'Beginner', time: '15 min', xp: 150, category: 'python' },
    { id: 4, title: 'Calculate Rolling 7-Day Moving Averages', diff: 'Intermediate', time: '20 min', xp: 200, category: 'python' },
    { id: 5, title: 'Two-Way Lookup using XLOOKUP & MATCH', diff: 'Beginner', time: '10 min', xp: 100, category: 'excel' },
  ];

  const filtered = challenges.filter(c => c.category === activeCategory);

  const handleSolve = (id: number) => {
    if (!solved.includes(id)) {
      setSolved([...solved, id]);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    }
  };

  return (
    <div className="flex flex-col gap-4 pb-28 pt-2">
      <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-md">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold w-max mb-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive Code Sandbox</span>
        </div>
        <h2 className="text-xl font-extrabold tracking-tight">Solve Real Data Challenges</h2>
        <p className="text-xs text-slate-300 mt-1">
          Sharpen your query logic with real company business datasets.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1 bg-slate-100/80 rounded-2xl">
        <button
          onClick={() => setActiveCategory('sql')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeCategory === 'sql' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
          }`}
        >
          SQL Drills
        </button>
        <button
          onClick={() => setActiveCategory('python')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeCategory === 'python' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
          }`}
        >
          Python Sandboxes
        </button>
        <button
          onClick={() => setActiveCategory('excel')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeCategory === 'excel' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
          }`}
        >
          Excel Formulas
        </button>
      </div>

      {/* Challenge Cards */}
      <div className="space-y-2.5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-3.5 bg-white rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between gap-3"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {item.diff}
                </span>
                <span className="text-[10px] font-bold text-amber-600">+{item.xp} XP</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mt-1">{item.title}</h4>
              <span className="text-[11px] text-slate-400 mt-0.5 block">{item.time} estimated</span>
            </div>

            <button
              onClick={() => handleSolve(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer active:scale-95 ${
                solved.includes(item.id)
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {solved.includes(item.id) ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Solved</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current" />
                  <span>Solve</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
