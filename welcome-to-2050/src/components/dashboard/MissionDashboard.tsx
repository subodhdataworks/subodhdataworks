import React from 'react';
import { 
  Play, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  Brain, 
  ChevronRight,
  Code2,
  Sparkles
} from 'lucide-react';
import { LearnerProfile, MistakeSummary } from '../../types';
import { DAYS_2_TO_7_MODULES } from '../../data/days2to7Missions';
import { DAY1_STEPS } from '../../data/day1PythonFlow';
import { CapabilityMap } from '../skills/CapabilityMap';

interface MissionDashboardProps {
  profile: LearnerProfile;
  mistakes: MistakeSummary;
  onSelectDay1Step: (stepIndex: number) => void;
  onOpenDayShell: (dayNumber: number) => void;
  onOpenReport: () => void;
  onToggleDevMode: () => void;
  onOpenMasteryHub?: () => void;
}

export const MissionDashboard: React.FC<MissionDashboardProps> = ({
  profile,
  mistakes,
  onSelectDay1Step,
  onOpenDayShell,
  onOpenReport,
  onToggleDevMode,
  onOpenMasteryHub,
}) => {
  const isDay1Complete = profile.completedDays.includes(1);
  const day1Progress = profile.completedSteps?.length || 0;

  const isDayUnlocked = (dayNum: number) => {
    if (dayNum === 1) return true;
    if (profile.devModeUnlocked) return true;
    if (dayNum === 2 && isDay1Complete) return true;
    return profile.completedDays.includes(dayNum - 1);
  };

  const daysList = [
    {
      num: 1,
      title: 'MAKE THE COMPUTER REMEMBER',
      subtitle: 'What is Python, First Code, Variables, Prediction, Debugging & Data',
      isDay1: true,
    },
    {
      num: 2,
      title: 'TEACH THE COMPUTER TO DECIDE',
      subtitle: DAYS_2_TO_7_MODULES[2].oneLinePurpose,
      isDay1: false,
    },
    {
      num: 3,
      title: 'TEACH THE COMPUTER TO REPEAT',
      subtitle: DAYS_2_TO_7_MODULES[3].oneLinePurpose,
      isDay1: false,
    },
    {
      num: 4,
      title: 'MASTER THE DEBUGGER',
      subtitle: DAYS_2_TO_7_MODULES[4].oneLinePurpose,
      isDay1: false,
    },
    {
      num: 5,
      title: 'THINK IN COLLECTIONS',
      subtitle: DAYS_2_TO_7_MODULES[5].oneLinePurpose,
      isDay1: false,
    },
    {
      num: 6,
      title: 'ASK QUESTIONS TO DATA',
      subtitle: DAYS_2_TO_7_MODULES[6].oneLinePurpose,
      isDay1: false,
    },
    {
      num: 7,
      title: 'THE DATA DETECTIVE CAPSTONE',
      subtitle: DAYS_2_TO_7_MODULES[7].oneLinePurpose,
      isDay1: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-left selection:bg-quantum-teal/20 selection:text-deep-space animate-fadeIn">
      {/* Dashboard Hero Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-lab-900/10 shadow-elevated">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono text-quantum-teal font-semibold uppercase tracking-wider">
              2050 LEARNING LABORATORY
            </span>
            <span className="text-[10px] font-mono text-lab-400">• MISSION OVERVIEW</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-space tracking-tight">
            Welcome back, {profile.name || 'Explorer'}
          </h1>
          <p className="text-xs text-lab-500 mt-0.5">
            Path: <span className="font-semibold text-deep-space capitalize">{profile.careerGoal?.replace('_', ' ') || 'Data Analyst'}</span> • Zero Jargon
          </p>
        </div>

        <div className="flex items-center gap-2">
          {isDay1Complete && (
            <button
              onClick={onOpenReport}
              className="px-4 py-2 rounded-xl bg-lab-100 hover:bg-lab-200 text-deep-space text-xs font-mono font-medium transition-colors"
            >
              Day 1 Summary →
            </button>
          )}

          <button
            onClick={onToggleDevMode}
            className={`px-3 py-2 rounded-xl text-xs font-mono border transition-all ${
              profile.devModeUnlocked
                ? 'bg-solar-gold/20 text-deep-space border-solar-gold/60 font-semibold'
                : 'text-lab-400 hover:text-deep-space border-lab-200'
            }`}
          >
            {profile.devModeUnlocked ? '⚡ DEV: ALL UNLOCKED' : 'DEV MODE'}
          </button>
        </div>
      </div>

      {/* Capability Map Display */}
      <div className="p-6 rounded-3xl bg-white border border-lab-900/10 shadow-subtle">
        <CapabilityMap currentDay={profile.currentDay || 1} completedDays={profile.completedDays} variant="expanded" />
      </div>

      {/* 2050 Python Mastery & Data Types Hub Banner */}
      {onOpenMasteryHub && (
        <div className="p-5 rounded-3xl bg-deep-space text-future-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-elevated animate-fadeIn">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-quantum-teal" />
              <span className="text-xs font-mono font-bold text-quantum-teal uppercase tracking-wider">
                2050 PYTHON MASTERY HUB
              </span>
              <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-white/10 text-lab-300">
                DATA ANALYST EDITION
              </span>
            </div>
            <p className="text-xs text-lab-300">
              30-second logic for every Python data type, live interactive type inspector, and 20s interview flashcards.
            </p>
          </div>
          <button
            onClick={onOpenMasteryHub}
            className="px-5 py-2.5 rounded-full bg-quantum-teal text-white hover:bg-quantum-teal/90 text-xs font-mono font-semibold shrink-0 transition-transform active:scale-95"
          >
            Open 2050 Hub →
          </button>
        </div>
      )}

      {/* 7-DAY MISSION CARDS */}
      <div className="space-y-3">
        <h2 className="text-xs font-mono uppercase tracking-widest text-quantum-teal font-semibold">
          7-DAY LEARNING REVOLUTION CURRICULUM
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {daysList.map((day) => {
            const unlocked = isDayUnlocked(day.num);
            const isCompleted = profile.completedDays.includes(day.num);

            return (
              <div
                key={day.num}
                className={`p-5 rounded-2xl border transition-all ${
                  day.num === 1
                    ? 'bg-white border-quantum-teal/30 shadow-subtle'
                    : unlocked
                    ? 'bg-white border-lab-900/10 hover:border-quantum-teal/40'
                    : 'bg-lab-50 border-lab-900/5 opacity-70'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800'
                        : unlocked
                        ? 'bg-deep-space text-future-white'
                        : 'bg-lab-200 text-lab-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : `0${day.num}`}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-quantum-teal font-semibold uppercase">
                          DAY 0{day.num}
                        </span>
                        {isCompleted && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono font-semibold">
                            COMPLETED
                          </span>
                        )}
                        {!unlocked && (
                          <span className="text-[10px] text-lab-400 font-mono flex items-center gap-1">
                            <Lock className="w-3 h-3" /> LOCKED
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-deep-space mt-0.5">
                        {day.title}
                      </h3>
                      <p className="text-xs text-lab-500 mt-0.5">
                        {day.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    {day.isDay1 ? (
                      <button
                        onClick={() => onSelectDay1Step(profile.currentStepIndex || 0)}
                        className="px-5 py-2.5 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-semibold shadow-subtle flex items-center gap-2 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>{isCompleted ? 'REVIEW DAY 1' : 'CONTINUE DAY 1'}</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => onOpenDayShell(day.num)}
                        disabled={!unlocked}
                        className="px-4 py-2 rounded-xl bg-lab-100 hover:bg-lab-200 disabled:opacity-40 text-deep-space text-xs font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <span>{unlocked ? 'Launch Prototype' : 'Preview'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Day 1 Sub-step chips */}
                {day.isDay1 && (
                  <div className="mt-4 pt-3 border-t border-lab-100 flex flex-wrap gap-1.5">
                    {DAY1_STEPS.map((s, idx) => {
                      const isStepDone = profile.completedSteps?.includes(idx);
                      const isCurrent = profile.currentStepIndex === idx;
                      return (
                        <button
                          key={s.id}
                          onClick={() => onSelectDay1Step(idx)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                            isCurrent
                              ? 'bg-deep-space text-future-white font-semibold'
                              : isStepDone
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : 'bg-lab-100 text-lab-500 hover:text-deep-space'
                          }`}
                        >
                          Step {s.stepNumber}: {s.title}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
