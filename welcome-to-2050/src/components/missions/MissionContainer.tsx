import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Lightbulb, 
  Globe2, 
  Bot, 
  ShieldCheck
} from 'lucide-react';
import { Mission, LearnerProfile, MistakeCategory } from '../../types';
import { Mission1Robot } from './Mission1Robot';
import { Mission2Order } from './Mission2Order';
import { Mission3Predict } from './Mission3Predict';
import { Mission4Variables } from './Mission4Variables';
import { Mission5BugDetective } from './Mission5BugDetective';
import { Mission6Build } from './Mission6Build';
import { Mission7Explain } from './Mission7Explain';
import { DAY1_MISSIONS } from '../../data/day1Missions';
import { AnalyticsService } from '../../services/analytics';

interface MissionContainerProps {
  currentMissionId: string;
  profile: LearnerProfile;
  onMissionComplete: (missionId: string, nextMissionId?: string) => void;
  onNavigateDashboard: () => void;
  onOpenTutor: () => void;
  onOpenReport: () => void;
  onRecordMistake: (category: MistakeCategory, desc: string) => void;
}

export const MissionContainer: React.FC<MissionContainerProps> = ({
  currentMissionId,
  profile,
  onMissionComplete,
  onNavigateDashboard,
  onOpenTutor,
  onOpenReport,
  onRecordMistake,
}) => {
  const currentMissionIndex = DAY1_MISSIONS.findIndex((m) => m.id === currentMissionId);
  const mission: Mission = DAY1_MISSIONS[currentMissionIndex >= 0 ? currentMissionIndex : 0];

  const [showHinglish, setShowHinglish] = useState(profile.preferredLanguage === 'hinglish');
  const [showHints, setShowHints] = useState(false);
  const [hintsUnlocked, setHintsUnlocked] = useState(1);

  const handleNextMission = () => {
    AnalyticsService.log('mission_completed', { missionId: mission.id, day: 1 });

    if (currentMissionIndex < DAY1_MISSIONS.length - 1) {
      const nextMission = DAY1_MISSIONS[currentMissionIndex + 1];
      setShowHints(false);
      setHintsUnlocked(1);
      onMissionComplete(mission.id, nextMission.id);
    } else {
      // Day 1 completed!
      onMissionComplete(mission.id);
      AnalyticsService.log('day_completed', { dayNumber: 1 });
      onOpenReport();
    }
  };

  const handleMistake = (description: string) => {
    let cat: MistakeCategory = 'sequence';
    if (mission.type === 'predict-code') cat = 'prediction';
    if (mission.type === 'variable-transformation') cat = 'variable';
    if (mission.type === 'bug-detective') cat = 'debugging';
    if (mission.type === 'block-builder') cat = 'syntax';

    onRecordMistake(cat, description);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Top Navigation & Status */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onNavigateDashboard}
          className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>MISSION CONTROL</span>
        </button>

        {/* 7-Step Progress Dots */}
        <div className="flex items-center gap-1.5">
          {DAY1_MISSIONS.map((m) => {
            const isCompleted = profile.completedMissions.includes(m.id);
            const isCurrent = m.id === mission.id;

            return (
              <div
                key={m.id}
                className={`h-2 rounded-full transition-all ${
                  isCurrent
                    ? 'w-7 bg-cyan-400 shadow-glow-cyan'
                    : isCompleted
                    ? 'w-4 bg-emerald-400'
                    : 'w-2 bg-slate-800'
                }`}
                title={m.title}
              />
            );
          })}
        </div>

        <button
          onClick={onOpenTutor}
          className="flex items-center gap-1 text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-lg hover:border-cyan-400 transition-all"
        >
          <Bot className="w-3.5 h-3.5" />
          <span>Ask Tutor</span>
        </button>
      </div>

      {/* Mission Title Header */}
      <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
            DAY 1 • MISSION {mission.missionNumber} OF 7
          </span>
          <span className="text-xs font-mono text-slate-400">
            Concept: <strong className="text-slate-200">{mission.concept}</strong>
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {mission.title}
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">{mission.description}</p>

        {/* Hinglish Toggle & Card */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={() => setShowHinglish(!showHinglish)}
            className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>{showHinglish ? 'Hide Hinglish Insight' : 'Need a Hinglish analogy? (हिन्दी)'}</span>
          </button>

          <button
            onClick={() => setShowHints(!showHints)}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>{showHints ? 'Close Hints' : 'Guided Hints'}</span>
          </button>
        </div>

        {/* Hinglish Insight Box */}
        {showHinglish && (
          <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200 font-sans leading-relaxed animate-fadeIn">
            <span className="font-semibold text-cyan-300 font-mono text-[11px] block mb-1">
              HINGLISH CONCEPT ANALOGY:
            </span>
            {mission.hinglishExplanation}
          </div>
        )}

        {/* Progressive Hint Drawer */}
        {showHints && (
          <div className="p-4 rounded-xl bg-lab-900 border border-amber-500/30 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-300 font-bold flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                GUIDED HINTS (PROGRESSIVE)
              </span>
              {hintsUnlocked < mission.hints.length && (
                <button
                  onClick={() => {
                    const next = hintsUnlocked + 1;
                    setHintsUnlocked(next);
                    AnalyticsService.log('hint_requested', { missionId: mission.id, count: next });
                  }}
                  className="text-[11px] font-mono text-cyan-400 hover:underline"
                >
                  Unlock next hint ({hintsUnlocked + 1}/{mission.hints.length})
                </button>
              )}
            </div>

            <div className="space-y-2 text-xs">
              {mission.hints.slice(0, hintsUnlocked).map((h, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-lab-950 text-slate-300 border border-white/5">
                  <span className="text-amber-400 font-mono font-bold mr-1.5">Hint {i + 1}:</span>
                  {h}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Interactive Mission Body */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10 shadow-2xl">
        {mission.type === 'robot-grid' && (
          <Mission1Robot
            mission={mission}
            onSuccess={handleNextMission}
            onMistake={handleMistake}
          />
        )}
        {mission.type === 'sequence-order' && (
          <Mission2Order
            mission={mission}
            onSuccess={handleNextMission}
            onMistake={handleMistake}
          />
        )}
        {mission.type === 'predict-code' && (
          <Mission3Predict
            mission={mission}
            onSuccess={handleNextMission}
            onMistake={handleMistake}
          />
        )}
        {mission.type === 'variable-transformation' && (
          <Mission4Variables
            mission={mission}
            onSuccess={handleNextMission}
            onMistake={handleMistake}
          />
        )}
        {mission.type === 'bug-detective' && (
          <Mission5BugDetective
            mission={mission}
            onSuccess={handleNextMission}
            onMistake={handleMistake}
          />
        )}
        {mission.type === 'block-builder' && (
          <Mission6Build
            mission={mission}
            onSuccess={handleNextMission}
            onMistake={handleMistake}
          />
        )}
        {mission.type === 'explain-program' && (
          <Mission7Explain
            mission={mission}
            onSuccess={handleNextMission}
            onMistake={handleMistake}
          />
        )}
      </div>

      {/* Bottom Takeaway Pill */}
      <div className="p-3.5 rounded-xl bg-lab-900/60 border border-white/5 text-xs text-slate-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Takeaway:</strong> {mission.keyTakeaway}
          </span>
        </div>
      </div>
    </div>
  );
};
