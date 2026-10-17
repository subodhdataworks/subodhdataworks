import React from 'react';
import { BarChart3, Flame, Trophy, Award, TrendingUp, Calendar } from 'lucide-react';
import { currentUser } from '../../data/user';
import { learningCourses } from '../../data/courses';
import { ProgressBar } from '../common/ProgressBar';

export const ProgressView: React.FC = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const activityHours = [45, 60, 30, 75, 90, 40, 20]; // minutes

  const badges = [
    { title: 'SQL Aggregator', desc: 'Solved 10 group by queries', icon: '⚡' },
    { title: '5-Day Streak', desc: 'Maintained consecutive daily practice', icon: '🔥' },
    { title: 'Pandas Novice', desc: 'Loaded and cleaned 5 datasets', icon: '🐼' },
    { title: 'Pivot Power', desc: 'Built 8 multi-level pivot tables', icon: '📊' }
  ];

  return (
    <div className="flex flex-col gap-4 pb-28 pt-2">
      {/* Top Banner */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Trophy className="w-4 h-4" />
            Level {currentUser.level} • {currentUser.levelTitle}
          </span>
          <span className="text-xs text-slate-300 font-semibold">
            {currentUser.currentXp} XP Total
          </span>
        </div>

        <h2 className="text-xl font-extrabold tracking-tight">Your Learning Analytics</h2>
        <div className="mt-3">
          <ProgressBar progress={78} colorGradient="from-amber-400 via-teal-400 to-sky-400" heightClass="h-2" />
          <div className="flex justify-between text-[11px] text-slate-300 mt-1.5">
            <span>Progress to Level 8</span>
            <span>{currentUser.xpToNextLevel} XP remaining</span>
          </div>
        </div>
      </div>

      {/* Weekly Activity Chart */}
      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>Weekly Study Time</span>
          </h3>
          <span className="text-xs font-bold text-indigo-600">6.0 hrs this week</span>
        </div>

        <div className="flex items-end justify-between gap-2 h-28 pt-4">
          {activityHours.map((mins, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div
                className="w-full rounded-lg bg-gradient-to-t from-indigo-600 to-cyan-400 transition-all"
                style={{ height: `${(mins / 90) * 100}%` }}
              />
              <span className="text-[10px] text-slate-400 font-medium">{daysOfWeek[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Mastery Breakdown */}
      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-slate-900">Skill Competency Breakdown</h3>
        <div className="space-y-2.5">
          {learningCourses.map((c) => (
            <div key={c.id}>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-700">{c.title}</span>
                <span className={c.accentText}>{c.progress}%</span>
              </div>
              <ProgressBar progress={c.progress} colorGradient={c.gradientClass} heightClass="h-1.5" />
            </div>
          ))}
        </div>
      </div>

      {/* Badges Earned */}
      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 mb-2.5">Earned Badges</h3>
        <div className="grid grid-cols-2 gap-2">
          {badges.map((b, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
              <span className="text-xl">{b.icon}</span>
              <div>
                <h4 className="text-xs font-bold text-slate-800 leading-tight">{b.title}</h4>
                <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
