import React, { useState } from 'react';
import { Users, Bot, Mic, MessageSquare, Award, Sparkles } from 'lucide-react';

export const InterviewView: React.FC = () => {
  const [sessionStarted, setSessionStarted] = useState(false);

  const rounds = [
    { title: 'Technical SQL Live Round', questions: '5 queries', duration: '30 min', match: '92% Job Alignment' },
    { title: 'Business Case Study & Metrics', questions: '3 problems', duration: '45 min', match: '88% Job Alignment' },
    { title: 'Behavioral & STAR Scenario', questions: '6 scenarios', duration: '20 min', match: '95% Job Alignment' },
  ];

  return (
    <div className="flex flex-col gap-4 pb-28 pt-2">
      <div className="p-5 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white shadow-md">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-semibold w-max mb-2">
          <Bot className="w-3.5 h-3.5" />
          <span>AI Interview Simulator</span>
        </div>
        <h2 className="text-xl font-extrabold tracking-tight">Ace Your Data Analyst Interview</h2>
        <p className="text-xs text-slate-300 mt-1">
          Practice realistic hiring rounds with AI interviewer feedback & instant scoring.
        </p>
      </div>

      <div className="space-y-3">
        {rounds.map((r, i) => (
          <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                {r.match}
              </span>
              <span className="text-xs text-slate-400 font-medium">{r.duration}</span>
            </div>
            <h3 className="text-sm font-bold text-slate-900">{r.title}</h3>
            <p className="text-xs text-slate-500">Includes {r.questions} with real-time feedback and rubric analysis.</p>
            <button
              onClick={() => setSessionStarted(true)}
              className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all cursor-pointer"
            >
              {sessionStarted && i === 0 ? 'Resume Interview' : 'Start Simulation'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
