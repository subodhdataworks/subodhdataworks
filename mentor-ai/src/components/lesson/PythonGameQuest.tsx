import React, { useState, useMemo, useEffect } from 'react';
import { Bot, Trophy, Sparkles, CheckCircle2, ChevronRight, Award, Flame, RefreshCw, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PythonGameQuestProps {
  onComplete: () => void;
  userName?: string;
  gameTitle?: string;
  gameType?: string;
  topicTitle?: string;
}

interface Level {
  id: number;
  levelTitle: string;
  badgeName: string;
  badgeIcon: string;
  codeSnippet?: string;
  question: string;
  options: { label: string; text: string; correct: boolean }[];
  hint: string;
}

export const PythonGameQuest: React.FC<PythonGameQuestProps> = ({
  onComplete,
  userName = 'Subodh',
  gameTitle,
  gameType,
  topicTitle
}) => {
  const levels: Level[] = useMemo(() => {
    if (gameType === 'type_sorter') {
      return [
        {
          id: 1,
          levelTitle: 'Level 1: Classify the float',
          badgeName: 'Type Sorter',
          badgeIcon: '🏷️',
          codeSnippet: 'price = 99.95',
          question: 'What is the data type of `price`?',
          options: [
            { label: 'A', text: 'float', correct: true },
            { label: 'B', text: 'int', correct: false },
            { label: 'C', text: 'str', correct: false },
            { label: 'D', text: 'bool', correct: false }
          ],
          hint: 'Numbers containing a decimal point are float instances.'
        },
        {
          id: 2,
          levelTitle: 'Level 2: Cast string to integer',
          badgeName: 'Casting Wizard',
          badgeIcon: '🪄',
          codeSnippet: 'num = int("42")',
          question: 'What is the value and type of num?',
          options: [
            { label: 'A', text: '42 as integer', correct: true },
            { label: 'B', text: '"42" as string', correct: false },
            { label: 'C', text: 'ValueError', correct: false },
            { label: 'D', text: '42.0 as float', correct: false }
          ],
          hint: 'int("42") converts the numeric string into a Python int.'
        },
        {
          id: 3,
          levelTitle: 'Level 3: Boolean Truthiness',
          badgeName: 'Logic Master',
          badgeIcon: '💡',
          codeSnippet: 'bool([1, 2])',
          question: 'What does an empty vs non-empty list evaluate to?',
          options: [
            { label: 'A', text: 'True because it is non-empty', correct: true },
            { label: 'B', text: 'False', correct: false },
            { label: 'C', text: 'None', correct: false },
            { label: 'D', text: 'TypeError', correct: false }
          ],
          hint: 'In Python, any non-empty container evaluates to True.'
        }
      ];
    }

    if (gameType === 'decision_maker' || gameType === 'conditional_challenge') {
      return [
        {
          id: 1,
          levelTitle: 'Level 1: If-Condition Check',
          badgeName: 'Branch Scout',
          badgeIcon: '🧭',
          codeSnippet: 'if score >= 90:\n    print("Grade A")',
          question: 'If score is 95, what will be printed?',
          options: [
            { label: 'A', text: 'Grade A', correct: true },
            { label: 'B', text: 'Nothing', correct: false },
            { label: 'C', text: 'Error', correct: false },
            { label: 'D', text: 'score', correct: false }
          ],
          hint: '95 >= 90 is True, so the condition body executes.'
        },
        {
          id: 2,
          levelTitle: 'Level 2: Elif Evaluation',
          badgeName: 'Flow Navigator',
          badgeIcon: '⚡',
          codeSnippet: 'if x > 10:\n    res = "High"\nelif x > 5:\n    res = "Mid"',
          question: 'When x = 8, what will res contain?',
          options: [
            { label: 'A', text: '"Mid"', correct: true },
            { label: 'B', text: '"High"', correct: false },
            { label: 'C', text: 'None', correct: false },
            { label: 'D', text: 'SyntaxError', correct: false }
          ],
          hint: '8 > 10 is False, but 8 > 5 is True, so the elif branch runs.'
        },
        {
          id: 3,
          levelTitle: 'Level 3: Ternary Choice',
          badgeName: 'Decision Ace',
          badgeIcon: '👑',
          codeSnippet: 'status = "Active" if is_logged_in else "Guest"',
          question: 'What is this inline expression called?',
          options: [
            { label: 'A', text: 'Ternary conditional expression', correct: true },
            { label: 'B', text: 'While loop', correct: false },
            { label: 'C', text: 'Lambda expression', correct: false },
            { label: 'D', text: 'Tuple comprehension', correct: false }
          ],
          hint: 'true_val if condition else false_val is Python’s ternary expression.'
        }
      ];
    }

    // Default Command Challenge
    return [
      {
        id: 1,
        levelTitle: 'Level 1: Choose the correct Python command',
        badgeName: 'Syntax Pioneer',
        badgeIcon: '🐍',
        codeSnippet: 'print("Hello")',
        question: 'What does this command do?',
        options: [
          { label: 'A', text: 'Output text', correct: true },
          { label: 'B', text: 'Create database', correct: false },
          { label: 'C', text: 'Start computer', correct: false },
          { label: 'D', text: 'Delete file', correct: false }
        ],
        hint: 'The print() function sends characters to the display screen or terminal.'
      },
      {
        id: 2,
        levelTitle: 'Level 2: Fix the variable',
        badgeName: 'Variable Master',
        badgeIcon: '⚙️',
        codeSnippet: `name = `,
        question: 'Choose the correct value to assign a valid text name:',
        options: [
          { label: 'A', text: `"${userName}"`, correct: true },
          { label: 'B', text: 'print', correct: false },
          { label: 'C', text: 'Python()', correct: false },
          { label: 'D', text: '#', correct: false }
        ],
        hint: 'Text in Python must be enclosed in quotes like "Subodh" or \'Subodh\'.'
      },
      {
        id: 3,
        levelTitle: 'Level 3: Complete the mission',
        badgeName: 'Code Champion',
        badgeIcon: '🚀',
        codeSnippet: `name = "${userName}"\n________(name)`,
        question: 'Fill in the blank to print the variable to the screen:',
        options: [
          { label: 'A', text: 'print', correct: true },
          { label: 'B', text: 'input', correct: false },
          { label: 'C', text: 'return', correct: false },
          { label: 'D', text: 'import', correct: false }
        ],
        hint: 'We call print(name) to output the value stored in the variable.'
      }
    ];
  }, [gameType, userName]);

  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [collectedBadges, setCollectedBadges] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [robotReaction, setRobotReaction] = useState<'idle' | 'happy' | 'think'>('idle');
  const [isGameFinished, setIsGameFinished] = useState(false);

  useEffect(() => {
    setCurrentLevel(0);
    setCollectedBadges([]);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setRobotReaction('idle');
    setIsGameFinished(false);
  }, [levels]);

  const current = levels[currentLevel];

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
    setIsAnswerChecked(true);

    const chosen = current.options[idx];
    if (chosen.correct) {
      setIsCorrect(true);
      setRobotReaction('happy');
      if (!collectedBadges.includes(current.badgeName)) {
        setCollectedBadges(prev => [...prev, current.badgeName]);
      }
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      setIsCorrect(false);
      setRobotReaction('think');
    }
  };

  const handleNextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
      setRobotReaction('idle');
    } else {
      setIsGameFinished(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }
  };

  const handleRetryCurrentLevel = () => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setRobotReaction('idle');
  };

  if (isGameFinished) {
    return (
      <div className="text-center py-8 px-4 space-y-6">
        {/* Animated Trophy Header */}
        <div className="relative inline-block mx-auto">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 flex items-center justify-center text-4xl shadow-xl shadow-amber-400/30 animate-bounce">
            🏆
          </div>
          <span className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-extrabold text-[10px] shadow-sm">
            ALL 3 UNLOCKED
          </span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Mission Complete!
          </h2>
          <p className="text-sm font-bold text-blue-600 mt-1">
            Python Explorer Badge Unlocked
          </p>
          <p className="text-xs text-slate-500 max-w-md mx-auto mt-2">
            Fantastic work, {userName}! You successfully helped the AI Robot navigate all 3 Python quests. Your coding challenge is now fully unlocked.
          </p>
        </div>

        {/* 3 Collected Badges Display */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto pt-2">
          {levels.map((lvl) => (
            <div
              key={lvl.id}
              className="p-3.5 rounded-2xl bg-gradient-to-b from-amber-50/80 to-white border border-amber-200 shadow-sm flex flex-col items-center text-center space-y-1.5"
            >
              <span className="text-3xl">{lvl.badgeIcon}</span>
              <span className="text-xs font-black text-slate-900">{lvl.badgeName}</span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                ✓ Collected
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button to Next Step */}
        <div className="pt-4 flex justify-center">
          <button
            data-testid="start-coding-btn"
            onClick={onComplete}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-all active:scale-95 group"
          >
            <span>Start Coding Challenge</span>
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
            <span className="text-2xl">🐍</span>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              {gameTitle || 'Python Code Quest'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Complete the Python mission and unlock your coding challenge.
          </p>
        </div>

        {/* Level Counter Pill */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
            Level {currentLevel + 1} of 3
          </span>
          <span className="text-xs font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            {collectedBadges.length} / 3 Badges
          </span>
        </div>
      </div>

      {/* Badges Ribbon Bar */}
      <div className="p-3 bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-purple-50/60 rounded-2xl border border-blue-100 flex items-center justify-between gap-2 overflow-x-auto">
        {levels.map((lvl, idx) => {
          const isCollected = collectedBadges.includes(lvl.badgeName);
          const isCurrent = idx === currentLevel;
          return (
            <div
              key={lvl.id}
              className={`flex-1 min-w-[110px] p-2 rounded-xl border flex items-center gap-2 transition-all ${
                isCollected
                  ? 'bg-white border-amber-300 shadow-xs text-slate-900'
                  : isCurrent
                  ? 'bg-white/90 border-blue-400 ring-2 ring-blue-400/20 text-blue-900'
                  : 'bg-white/50 border-slate-200/60 text-slate-400 opacity-60'
              }`}
            >
              <span className={`text-xl ${isCollected ? 'scale-110' : ''}`}>{lvl.badgeIcon}</span>
              <div className="text-left min-w-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 block leading-tight">
                  Badge {lvl.id}
                </span>
                <span className="text-[11px] font-extrabold truncate block">
                  {lvl.badgeName}
                </span>
              </div>
              {isCollected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 ml-auto" />}
            </div>
          );
        })}
      </div>

      {/* Main Interactive Quest Area */}
      <div className="bg-slate-50/80 rounded-3xl p-5 sm:p-6 border border-slate-200/80 space-y-5">
        {/* Robot Guidance Card */}
        <div className="flex items-start gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          {/* Animated Robot Avatar */}
          <div className="relative shrink-0">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-all duration-300 ${
              robotReaction === 'happy'
                ? 'bg-gradient-to-tr from-emerald-500 to-teal-500 scale-105 shadow-emerald-500/30'
                : robotReaction === 'think'
                ? 'bg-gradient-to-tr from-amber-500 to-rose-500'
                : 'bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-500/25'
            }`}>
              <Bot className="w-8 h-8" />
            </div>
            {robotReaction === 'happy' && (
              <span className="absolute -top-1 -right-1 text-sm animate-ping">✨</span>
            )}
          </div>

          <div className="flex-1 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-slate-900">{current.levelTitle}</span>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                Mission Challenge
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              {current.question}
            </p>
          </div>
        </div>

        {/* Code Snippet Box */}
        {current.codeSnippet && (
          <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-left font-mono text-xs sm:text-sm text-emerald-400 shadow-inner overflow-x-auto">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-500 text-[10px] font-sans">
              <span>Python Terminal Console</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Quest
              </span>
            </div>
            <pre className="whitespace-pre-wrap">{current.codeSnippet}</pre>
          </div>
        )}

        {/* 4 Interactive Choice Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {current.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            let btnClass = 'bg-white border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/30';

            if (isAnswerChecked) {
              if (opt.correct) {
                btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20';
              } else if (isSelected && !opt.correct) {
                btnClass = 'bg-rose-50 border-rose-400 text-rose-900';
              } else {
                btnClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                data-testid={`game-option-${idx}`}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswerChecked && isCorrect}
                className={`p-3.5 rounded-2xl border text-left font-bold text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer shadow-2xs active:scale-98 ${btnClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs ${
                    isSelected
                      ? opt.correct
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {opt.label}
                  </span>
                  <span>{opt.text}</span>
                </div>

                {isAnswerChecked && opt.correct && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback / Explanation Banner */}
        {isAnswerChecked && (
          <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-left transition-all ${
            isCorrect
              ? 'bg-emerald-50/90 border-emerald-200 text-emerald-900'
              : 'bg-amber-50/90 border-amber-200 text-amber-900'
          }`}>
            <div className="flex items-start gap-2.5 text-xs">
              <span className="text-xl shrink-0">{isCorrect ? '🎉' : '🤔'}</span>
              <div>
                <span className="font-extrabold block">
                  {isCorrect ? `Correct! You unlocked the ${current.badgeName} Badge!` : 'Not quite right!'}
                </span>
                <span className="text-[11px] text-slate-600 block mt-0.5">
                  {current.hint}
                </span>
              </div>
            </div>

            {isCorrect ? (
              <button
                data-testid="game-next-btn"
                onClick={handleNextLevel}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-1.5 cursor-pointer shrink-0 transition-transform active:scale-95"
              >
                <span>{currentLevel === levels.length - 1 ? 'Collect Final Trophy →' : 'Next Quest Level →'}</span>
              </button>
            ) : (
              <button
                onClick={handleRetryCurrentLevel}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1 cursor-pointer shrink-0"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
