import React, { useState } from 'react';
import { X, Network, CheckCircle2, Lock, Sparkles, Brain, Cpu, Database, ChevronRight } from 'lucide-react';
import { SKILL_GRAPH_DATA } from '../../data/skillGraph';
import { SkillNode, SkillCategory } from '../../types';

interface SkillGraphModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_LABELS: Record<SkillCategory, { label: string; color: string }> = {
  core_logic: { label: 'Core Computational Logic', color: 'text-cyan-400 border-cyan-500/30' },
  programming: { label: 'Programming & Syntax Foundations', color: 'text-emerald-400 border-emerald-500/30' },
  data_foundations: { label: 'Data Science & Analytical Mindset', color: 'text-purple-400 border-purple-500/30' },
  advanced_intelligence: { label: 'Machine Learning & AI Architectures', color: 'text-amber-400 border-amber-500/30' },
};

export const SkillGraphModal: React.FC<SkillGraphModalProps> = ({ isOpen, onClose }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(SKILL_GRAPH_DATA[0]);

  if (!isOpen) return null;

  const categories: SkillCategory[] = [
    'core_logic',
    'programming',
    'data_foundations',
    'advanced_intelligence',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lab-950/85 backdrop-blur-md overflow-y-auto">
      <div className="max-w-5xl w-full p-6 sm:p-8 rounded-2xl glass-panel border border-purple-500/40 text-left relative shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30 text-xs font-mono">
                COGNITIVE ARCHITECTURE MAP
              </span>
              <span className="text-[10px] font-mono text-cyan-400">
                5 ACTIVE DEMO NODES • 9 FUTURE NODES
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Network className="w-6 h-6 text-purple-400" />
              <span>Future Skill Graph (14 Core Dimensions)</span>
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              The complete continuum from Class 8 foundational thinking to autonomous AI systems.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-lab-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Column: Skill Cards Grid + Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Grid: Grouped by Category */}
          <div className="lg:col-span-2 space-y-5 max-h-[58vh] overflow-y-auto pr-1">
            {categories.map((cat) => {
              const skillsInCat = SKILL_GRAPH_DATA.filter((s) => s.category === cat);
              const meta = CATEGORY_LABELS[cat];

              return (
                <div key={cat} className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-400">
                    {meta.label}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {skillsInCat.map((s) => {
                      const isSelected = selectedSkill.id === s.id;

                      return (
                        <div
                          key={s.id}
                          onClick={() => setSelectedSkill(s)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-purple-950/70 border-purple-400 shadow-glow-purple'
                              : s.activeInDemo
                              ? 'bg-lab-900/80 border-cyan-500/30 hover:border-cyan-400'
                              : 'bg-lab-950/60 border-white/5 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-xs text-white truncate">{s.name}</span>
                            {s.activeInDemo ? (
                              <span className="px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-[9px] font-mono font-bold">
                                ACTIVE
                              </span>
                            ) : (
                              <span className="text-slate-600 flex items-center gap-1 text-[9px] font-mono">
                                <Lock className="w-2.5 h-2.5" /> FUTURE
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1">{s.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Skill Detail Panel */}
          <div className="p-5 rounded-2xl bg-lab-900/90 border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest">
                  SKILL NODE INSPECTION
                </span>
                {selectedSkill.activeInDemo ? (
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">
                    CALIBRATING IN 7-DAY DEMO
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/10 text-[10px] font-mono">
                    ROADMAP ARCHITECTURE
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white">{selectedSkill.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{selectedSkill.description}</p>

              {/* Mastery bar if active */}
              {selectedSkill.activeInDemo && (
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Mastery Calibration</span>
                    <span className="text-cyan-300 font-bold">{selectedSkill.mastery}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-lab-950 overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 rounded-full"
                      style={{ width: `${selectedSkill.mastery}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Prerequisites */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1.5">
                  PREREQUISITE DEPENDENCIES:
                </span>
                {!(selectedSkill.prerequisites && selectedSkill.prerequisites.length > 0) ? (
                  <span className="text-xs text-emerald-400 font-mono">None (Foundational Entrypoint)</span>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.prerequisites.map((prereq) => (
                      <span
                        key={prereq}
                        className="px-2 py-0.5 rounded bg-lab-950 border border-white/10 text-slate-300 text-[11px] font-mono"
                      >
                        {prereq.replace('_', ' ')}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-lab-950 border border-white/5 text-[11px] text-slate-400 italic">
              «Welcome to 2050 measures understanding through progressive mastery nodes rather than passive video watch time.»
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
