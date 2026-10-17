import React, { useState } from 'react';
import { Bot, Sparkles, Send, CheckCircle2, ArrowRight, CornerDownRight } from 'lucide-react';

interface PromptPreset {
  id: string;
  label: string;
  userQuery: string;
  aiResponse: string;
  codeSnippet?: string;
  topic: string;
}

export const InteractiveAIMentorSection: React.FC<{ onStartFree: () => void }> = ({ onStartFree }) => {
  const presets: PromptPreset[] = [
    {
      id: 'joins',
      label: '💡 Explain SQL JOINs simply',
      topic: 'SQL Mastery',
      userQuery: 'Can you explain the difference between INNER JOIN and LEFT JOIN with a simple real-life example?',
      aiResponse: 'Think of two lists: Customers and Orders. An INNER JOIN gives you ONLY customers who have placed at least one order. A LEFT JOIN gives you ALL customers, even if their orders list is completely empty (showing NULL)!',
      codeSnippet: `-- 1. INNER JOIN: Only customers with active orders\nSELECT c.name, o.order_id\nFROM customers c\nINNER JOIN orders o ON c.id = o.customer_id;\n\n-- 2. LEFT JOIN: All customers, active or not\nSELECT c.name, o.order_id\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id;`
    },
    {
      id: 'powerbi',
      label: '📊 Calculate MoM Growth in DAX',
      topic: 'Power BI & DAX',
      userQuery: 'How do I write a clean DAX measure to calculate Month-over-Month (MoM) Sales Growth?',
      aiResponse: 'To calculate MoM growth in Power BI, first calculate Previous Month Sales using DATEADD or PREVIOUSMONTH, then divide the difference by the previous month sales using the safe DIVIDE function:',
      codeSnippet: `Sales MoM Growth % =\nVAR CurrentSales = [Total Sales]\nVAR PrevMonthSales = CALCULATE([Total Sales], DATEADD('Calendar'[Date], -1, MONTH))\nRETURN\nDIVIDE(CurrentSales - PrevMonthSales, PrevMonthSales, 0)`
    },
    {
      id: 'pandas',
      label: '🐍 Fix Python Pandas KeyError',
      topic: 'Python Data Analysis',
      userQuery: "Why do I get KeyError: 'Revenue' in my pandas dataframe when I clearly see it in the CSV?",
      aiResponse: 'This is the most common beginner gotcha! Usually there is a hidden trailing space in the column name (e.g. "Revenue " instead of "Revenue"). You can strip column whitespace instantly:',
      codeSnippet: `# Clean all column headers at once:\ndf.columns = df.columns.str.strip()\n\n# Or inspect exact column names with repr:\nprint([repr(c) for c in df.columns])`
    },
    {
      id: 'interview',
      label: '🎯 Top Interview Window Functions',
      topic: 'Interview Prep',
      userQuery: 'Which SQL Window functions are tested in 90% of Data Analyst interviews?',
      aiResponse: 'Every interviewer will test you on ROW_NUMBER(), RANK(), and DENSE_RANK() to find the "Nth highest salary", and LEAD()/LAG() to compare month-over-month user metrics. Here is the canonical Nth highest query:',
      codeSnippet: `WITH RankedSalaries AS (\n  SELECT employee_id, salary,\n         DENSE_RANK() OVER (ORDER BY salary DESC) as rank_pos\n  FROM employees\n)\nSELECT salary FROM RankedSalaries WHERE rank_pos = 2; -- 2nd highest!`
    }
  ];

  const [activePreset, setActivePreset] = useState<PromptPreset>(presets[0]);
  const [customInput, setCustomInput] = useState('');

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    onStartFree();
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200/70">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Live Simulation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Meet Your 24/7 AI Mentor
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
            Stuck on a tricky SQL query? Unsure about DAX formulas or Python syntax? Your AI Mentor explains concepts clearly, provides step-by-step hints, and guides you without giving away the direct answers.
          </p>
        </div>

        {/* Interactive Chat Sandbox Container */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-left">
          {/* Top Terminal Bar */}
          <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-4 w-px bg-slate-700 mx-1" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-extrabold text-white">
                  Mentor AI Assistant
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full">
                  Online 24/7
                </span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 hidden sm:block">
              Topic: <span className="text-blue-400 font-bold">{activePreset.topic}</span>
            </div>
          </div>

          {/* Quick Preset Selector Buttons */}
          <div className="p-4 bg-slate-900/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[11px] font-bold text-slate-400 shrink-0 hidden sm:inline">
              Try asking:
            </span>
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xl shrink-0 transition-all cursor-pointer ${
                  activePreset.id === preset.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Live Message Exchange */}
          <div className="p-5 sm:p-7 space-y-5 min-h-[300px] bg-slate-950">
            {/* User Message */}
            <div className="flex items-start gap-3 justify-end animate-fadeIn">
              <div className="bg-blue-600 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-lg shadow-md">
                {activePreset.userQuery}
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-700">
                You
              </div>
            </div>

            {/* AI Mentor Response */}
            <div className="flex items-start gap-3 animate-fadeIn">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/25">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-sm p-4 sm:p-5 text-xs sm:text-sm text-slate-200 space-y-3 max-w-2xl">
                <p className="leading-relaxed">{activePreset.aiResponse}</p>

                {activePreset.codeSnippet && (
                  <div className="bg-black/80 rounded-xl p-3.5 border border-slate-800 font-mono text-[11.5px] text-emerald-300 overflow-x-auto">
                    <pre className="whitespace-pre-wrap">{activePreset.codeSnippet}</pre>
                  </div>
                )}

                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>AI Mentor explains step-by-step without giving away homework answers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Input Bar */}
          <form onSubmit={handleCustomSubmit} className="p-3.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask anything about Python, SQL, Excel, Power BI or interview prep..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
            >
              <span>Ask AI</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Section Bottom Banner */}
        <div className="text-center mt-6">
          <button
            onClick={onStartFree}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 cursor-pointer group"
          >
            <span>Ask unlimited questions with 24/7 AI Mentor — Start Free</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
