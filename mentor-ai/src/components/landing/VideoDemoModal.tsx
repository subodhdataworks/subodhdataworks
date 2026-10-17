import React, { useState } from 'react';
import { X, Play, Sparkles, CheckCircle2, Terminal, BarChart3, Database, ArrowRight } from 'lucide-react';

interface VideoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartLearning: () => void;
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({
  isOpen,
  onClose,
  onStartLearning
}) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'practice' | 'dashboard'>('ai');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <Play className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                Mentor AI Platform Tour (2050 Edition)
              </h3>
              <p className="text-xs text-slate-500">
                Experience how your AI Mentor coaches you step-by-step
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-100 overflow-x-auto">
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'ai'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>1. 24/7 AI Mentor Tutor</span>
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'practice'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>2. Hands-On SQL & Python Arena</span>
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'dashboard'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>3. Real Business Portfolios</span>
          </button>
        </div>

        {/* Interactive Preview Body */}
        <div className="p-6 bg-slate-900 text-white min-h-[360px] flex flex-col justify-between">
          {activeTab === 'ai' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  U
                </div>
                <div className="text-xs space-y-1">
                  <span className="font-bold text-blue-300">You asked:</span>
                  <p className="text-slate-200">
                    "I get confused between WHERE and HAVING in SQL. Can you explain with a simple example?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-indigo-950/50 p-4 rounded-2xl border border-indigo-500/30">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-indigo-300">Mentor AI Tutor</span>
                    <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">
                      Instant Feedback
                    </span>
                  </div>
                  <p className="text-slate-200">
                    Think of it this way: <strong className="text-amber-300">WHERE</strong> filters individual rows <em>before</em> grouping. <strong className="text-teal-300">HAVING</strong> filters groups <em>after</em> aggregation!
                  </p>
                  <div className="bg-black/60 p-3 rounded-xl font-mono text-[11px] text-emerald-400 border border-slate-800">
                    <div>SELECT department, AVG(salary)</div>
                    <div>FROM employees</div>
                    <div className="text-amber-400">WHERE status = 'Active' -- row level filter</div>
                    <div>GROUP BY department</div>
                    <div className="text-teal-300">HAVING AVG(salary) &gt; 75000; -- aggregate filter</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'practice' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Live SQL Execution Sandbox
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                  Status: 100% Passed
                </span>
              </div>
              <div className="bg-black/70 p-4 rounded-2xl font-mono text-xs text-slate-300 border border-slate-800 space-y-1">
                <div className="text-slate-500">-- Challenge: Find top 3 customers by total purchase volume</div>
                <div>SELECT c.customer_name, SUM(o.total_amount) AS total_spent</div>
                <div>FROM customers c</div>
                <div>JOIN orders o ON c.customer_id = o.customer_id</div>
                <div>GROUP BY c.customer_name</div>
                <div>ORDER BY total_spent DESC</div>
                <div>LIMIT 3;</div>
              </div>
              <div className="bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs text-emerald-200">
                  <span className="font-bold">Correct Output!</span> Query execution time: 14ms. +40 XP awarded to your streak!
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="text-[10px] text-slate-400">Total Revenue Analyzed</div>
                  <div className="text-lg font-bold text-white mt-1">$4,289,120</div>
                  <div className="text-[10px] text-emerald-400 mt-1">↑ 18.4% vs last quarter</div>
                </div>
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="text-[10px] text-slate-400">Churn Risk Cohort</div>
                  <div className="text-lg font-bold text-amber-400 mt-1">3.2%</div>
                  <div className="text-[10px] text-slate-400 mt-1">420 accounts flagged</div>
                </div>
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="text-[10px] text-slate-400">Portfolio Status</div>
                  <div className="text-lg font-bold text-indigo-400 mt-1">Job Ready</div>
                  <div className="text-[10px] text-indigo-300 mt-1">LinkedIn Verified</div>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                You will build 4 end-to-end data analytics projects using real datasets from retail, SaaS, finance, and logistics that you can showcase directly on your resume.
              </p>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <span className="text-xs text-slate-400">
              Ready to learn with AI? No prior coding experience required.
            </span>
            <button
              onClick={() => {
                onClose();
                onStartLearning();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <span>Start Learning Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
