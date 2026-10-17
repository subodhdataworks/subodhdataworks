import React, { useState, useMemo, useEffect } from 'react';
import { Bot, Mic, MicOff, ChevronRight, CheckCircle2, Volume2, Sparkles, Send, RefreshCw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface CustomInterviewQuestion {
  id: number;
  question: string;
  context: string;
  defaultAnswer: string;
  suggestedPoints: string[];
}

interface AiInterviewSectionProps {
  onComplete: () => void;
  userName?: string;
  customQuestions?: CustomInterviewQuestion[];
}

interface InterviewQuestion {
  id: number;
  question: string;
  context: string;
  defaultAnswer: string;
  suggestedPoints: string[];
}

export const AiInterviewSection: React.FC<AiInterviewSectionProps> = ({
  onComplete,
  userName = 'Subodh',
  customQuestions
}) => {
  const defaultQuestions: InterviewQuestion[] = [
    {
      id: 1,
      question: `Hi ${userName}! Let's start with a foundational question: What is Python, and why is it so popular in modern data analytics?`,
      context: 'Language Fundamentals & Ecosystem',
      defaultAnswer: 'Python is a high-level, interpreted programming language known for clean, readable syntax and a massive ecosystem of data science packages like Pandas, NumPy, and Matplotlib.',
      suggestedPoints: ['High-level & interpreted', 'Readable & clean syntax', 'Pandas & NumPy ecosystem', 'Cross-platform & versatile']
    },
    {
      id: 2,
      question: 'Where is Python used in real-world industry applications?',
      context: 'Practical Applications',
      defaultAnswer: 'Python is used in automated data ETL pipelines, business intelligence dashboards, machine learning model deployment, backend APIs, and financial analytics.',
      suggestedPoints: ['ETL & Data Cleaning', 'Machine Learning & AI', 'Web APIs & Automation', 'Finance & Analytics']
    },
    {
      id: 3,
      question: 'In your own words, what is a variable in Python and how do you create one?',
      context: 'Variables & Memory Assignment',
      defaultAnswer: 'A variable is a named storage container in computer memory that holds data. In Python, you create one simply with the assignment operator, like name = "Subodh" or age = 25.',
      suggestedPoints: ['Named memory container', 'Assignment operator =', 'Dynamic typing', 'Stores values']
    },
    {
      id: 4,
      question: 'What does the print() function do in Python?',
      context: 'Standard I/O Functionality',
      defaultAnswer: 'The print() function sends data to the standard output stream, typically displaying text or evaluated variable values in the console or terminal.',
      suggestedPoints: ['Outputs to standard console', 'Takes multiple arguments', 'Evaluates expressions', 'Crucial for debugging']
    },
    {
      id: 5,
      question: 'How would you write and run your very first Python program from scratch?',
      context: 'Setup & Program Execution',
      defaultAnswer: 'I would install Python, create a file named script.py in an editor like VS Code, type print("Hello, World!"), and run it using the command `python script.py` in the terminal.',
      suggestedPoints: ['Create script.py file', 'Write print("Hello, World!")', 'Execute via terminal: python script.py', 'Use VS Code IDE']
    }
  ];

  const questions: InterviewQuestion[] = useMemo(() => {
    if (customQuestions && customQuestions.length > 0) {
      return customQuestions;
    }
    return defaultQuestions;
  }, [customQuestions]);

  const [activeQIndex, setActiveQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    const initAns: Record<number, string> = {};
    if (questions[0]) {
      initAns[0] = questions[0].defaultAnswer;
    }
    setAnswers(initAns);
    setActiveQIndex(0);
    setIsCompleted(false);
  }, [questions]);

  const [isRecording, setIsRecording] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = questions[activeQIndex] || questions[0];
  const currentAnswer = answers[activeQIndex] || (currentQ ? currentQ.defaultAnswer : '');

  const handleTextChange = (val: string) => {
    setAnswers(prev => ({ ...prev, [activeQIndex]: val }));
  };

  const handleAddChip = (chipText: string) => {
    const existing = answers[activeQIndex] || '';
    const updated = existing ? `${existing} ${chipText}.` : `${chipText}.`;
    handleTextChange(updated);
  };

  const handleToggleVoice = () => {
    if (!isRecording) {
      setIsRecording(true);
      // simulate speech-to-text recording
      setTimeout(() => {
        setIsRecording(false);
        if (!answers[activeQIndex]) {
          handleTextChange(currentQ.defaultAnswer);
        }
      }, 2500);
    } else {
      setIsRecording(false);
    }
  };

  const handleSubmitInterview = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setIsCompleted(true);
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
    }, 1400);
  };

  if (isCompleted) {
    return (
      <div className="text-center py-8 px-4 space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 text-white flex items-center justify-center mx-auto text-3xl shadow-xl shadow-purple-600/30 animate-bounce">
          🎤
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Interview Completed 🎉
          </h2>
          <p className="text-sm font-bold text-indigo-600 mt-1">
            AI Recruiter Evaluation: 82 / 100 • Strong Foundation
          </p>
          <p className="text-xs text-slate-500 max-w-md mx-auto mt-2">
            Superb job, {userName}! You clearly articulated Python core fundamentals, use cases, variable assignment, and execution logic. Your comprehensive Topic Score is now available.
          </p>
        </div>

        {/* 5 Evaluation Categories Result Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-xl mx-auto pt-2">
          {[
            { label: 'Concept Understanding', score: '92%' },
            { label: 'Accuracy', score: '88%' },
            { label: 'Clarity', score: '90%' },
            { label: 'Real-world Understanding', score: '85%' },
            { label: 'Confidence', score: '86%' }
          ].map((cat, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 text-center shadow-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">{cat.label}</span>
              <span className="text-sm font-black text-indigo-900 mt-0.5 block">{cat.score}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 flex justify-center">
          <button
            data-testid="view-topic-score-btn"
            onClick={onComplete}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-all active:scale-95 group"
          >
            <span>View Topic Score →</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🎤</span>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              AI Python Interview
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Answer like a real technical interview. Evaluated by AI recruiter across 5 dimensions.
          </p>
        </div>

        {/* Question Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {questions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setActiveQIndex(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeQIndex === idx
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : answers[idx]
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Q{q.id}
            </button>
          ))}
        </div>
      </div>

      {/* Recruiter Question Prompt Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white flex items-start gap-4 shadow-md text-left">
        <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-indigo-500/30">
          <Bot className="w-6 h-6" />
        </div>
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-indigo-300">AI Senior Interviewer</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                {currentQ.context}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              Question {activeQIndex + 1} of 5
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
            "{currentQ.question}"
          </p>
        </div>
      </div>

      {/* Answer Input Area (Text & Voice) */}
      <div className="space-y-3 text-left">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-700">
            Your Answer (Type or Speak):
          </label>
          <button
            onClick={handleToggleVoice}
            className={`text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer ${
              isRecording
                ? 'bg-rose-100 text-rose-700 animate-pulse border border-rose-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isRecording ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5 text-slate-500" />}
            <span>{isRecording ? 'Listening (Speaking...)' : 'Voice Answer'}</span>
          </button>
        </div>

        <textarea
          data-testid="interview-textarea"
          rows={4}
          value={currentAnswer}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder={`Type your answer here... (e.g. ${currentQ.defaultAnswer})`}
          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all leading-relaxed"
        />

        {/* Suggested Points Chips */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
          <span className="font-bold text-slate-700">Key suggested points:</span>
          {currentQ.suggestedPoints.map((pt, idx) => (
            <button
              key={idx}
              onClick={() => handleAddChip(pt)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 transition-colors cursor-pointer text-[10px] font-semibold"
            >
              + {pt}
            </button>
          ))}
        </div>
      </div>

      {/* 5 Evaluation Dimensions Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70 text-center">
        {[
          { label: 'Concept Understanding', score: '92%' },
          { label: 'Accuracy', score: '88%' },
          { label: 'Clarity', score: '90%' },
          { label: 'Real-world Understanding', score: '85%' },
          { label: 'Confidence', score: '86%' }
        ].map((cat, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase font-bold leading-tight">{cat.label}</span>
            <span className="text-xs sm:text-sm font-black text-slate-900 mt-0.5">{cat.score}</span>
          </div>
        ))}
      </div>

      {/* Submit Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <span className="text-xs text-slate-400">
          AI will evaluate your technical precision and response fluency.
        </span>

        <button
          data-testid="submit-interview-btn"
          onClick={() => {
            if (!currentAnswer.trim()) {
              handleTextChange(currentQ.defaultAnswer);
            }
            handleSubmitInterview();
          }}
          disabled={isEvaluating}
          className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
        >
          {isEvaluating ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>AI Evaluating Response...</span>
            </div>
          ) : (
            <>
              <span>Submit Answer & Complete Interview</span>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
