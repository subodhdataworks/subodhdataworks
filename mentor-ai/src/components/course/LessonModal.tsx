import React, { useState } from 'react';
import { X, Play, CheckCircle2, Bot, Sparkles, ArrowRight, ArrowLeft, Terminal } from 'lucide-react';

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: {
    id: number;
    title: string;
    description: string;
    duration: string;
  } | null;
  onOpenNextLesson?: () => void;
  onOpenAiHelp: (prompt: string) => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  isOpen,
  onClose,
  lesson,
  onOpenNextLesson,
  onOpenAiHelp
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string | null>(null);

  if (!isOpen || !lesson) return null;

  const sampleCodes: Record<number, string> = {
    1: `# Welcome to Python for Data Analysts!
print("Hello, Data World!")
name = "Subodh"
role = "Data Analyst"
print(f"{name} is training to be a {role} with Mentor AI!")`,
    2: `# Variables & Data Types
product_name = "Cloud Server"   # String (str)
monthly_cost = 49.99            # Float (float)
active_users = 1420             # Integer (int)
is_enterprise = True            # Boolean (bool)

total_revenue = monthly_cost * active_users
print("Total Monthly Revenue: $", round(total_revenue, 2))
print("Type of monthly_cost:", type(monthly_cost))`,
    3: `# Operators & Expressions
total_leads = 2500
converted_customers = 375

conversion_rate = (converted_customers / total_leads) * 100
is_high_performer = conversion_rate >= 12.0

print(f"Conversion Rate: {conversion_rate:.1f}%")
print(f"Target Met: {is_high_performer}")`,
    4: `# Control Flow: Finding High-Value Transactions
transactions = [120, 450, 980, 50, 1200, 310]
high_value_total = 0

for amount in transactions:
    if amount >= 400:
        high_value_total += amount
        print(f"Flagged VIP order: \${amount}")

print("Total High Value Volume: \${high_value_total}")`
  };

  const codeToRun = sampleCodes[lesson.id] || sampleCodes[1];

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      if (lesson.id === 1) {
        setOutput("Hello, Data World!\nSubodh is training to be a Data Analyst with Mentor AI!\n[Execution completed in 12ms]");
      } else if (lesson.id === 2) {
        setOutput("Total Monthly Revenue: $ 70985.8\nType of monthly_cost: <class 'float'>\n[Execution completed in 14ms]");
      } else if (lesson.id === 3) {
        setOutput("Conversion Rate: 15.0%\nTarget Met: True\n[Execution completed in 10ms]");
      } else {
        setOutput("Flagged VIP order: $450\nFlagged VIP order: $980\nFlagged VIP order: $1200\nTotal High Value Volume: $2630\n[Execution completed in 18ms]");
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-scaleUp flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 font-black text-xs flex items-center justify-center">
              {lesson.id}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                  {lesson.title}
                </h3>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                  FREE LESSON
                </span>
              </div>
              <p className="text-xs text-slate-500">{lesson.description}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body: Code Editor & Execution Output */}
        <div className="p-6 bg-slate-900 text-white overflow-y-auto flex-1 space-y-4">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
            <span className="text-slate-400 flex items-center gap-1.5 font-mono">
              <Terminal className="w-4 h-4 text-blue-400" />
              main.py — Interactive Python Sandbox
            </span>
            <button
              onClick={() => onOpenAiHelp(`Explain this concept from Lesson ${lesson.id}: ${lesson.title}`)}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Ask AI Mentor to Explain</span>
            </button>
          </div>

          {/* Code Window */}
          <div className="bg-black/80 rounded-2xl p-4 font-mono text-xs sm:text-sm text-emerald-300 border border-slate-800 leading-relaxed overflow-x-auto shadow-inner">
            <pre className="whitespace-pre-wrap">{codeToRun}</pre>
          </div>

          {/* Output Window */}
          <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-200 space-y-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Output Terminal:
            </div>
            {output ? (
              <pre className="text-emerald-400 whitespace-pre-wrap">{output}</pre>
            ) : (
              <span className="text-slate-500 italic">
                Click "Run Code" below to execute this Python script in real-time.
              </span>
            )}
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-4 px-6 bg-white border-t border-slate-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Progress automatically saved</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-xs transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>

            {onOpenNextLesson && lesson.id < 4 && (
              <button
                onClick={onOpenNextLesson}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
              >
                <span>Next Lesson</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
