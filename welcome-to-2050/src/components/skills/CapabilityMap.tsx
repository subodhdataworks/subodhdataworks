import React from 'react';

export interface CapabilityLevel {
  id: string;
  name: string;
  level: number; // 0 to 5
  description: string;
}

interface CapabilityMapProps {
  currentDay: number;
  completedDays?: number[];
  variant?: 'compact' | 'expanded';
}

export const CapabilityMap: React.FC<CapabilityMapProps> = ({
  currentDay,
  completedDays = [],
  variant = 'compact',
}) => {
  // Determine progression based on completed days and active day
  const effectiveDay = Math.max(currentDay, ...(completedDays.length ? completedDays : [1]));

  const capabilities: CapabilityLevel[] = [
    {
      id: 'python',
      name: 'Python',
      level: effectiveDay >= 1 ? Math.min(5, effectiveDay) : 1,
      description: 'Instructions, memory variables, script execution',
    },
    {
      id: 'logic',
      name: 'Logic',
      level: effectiveDay >= 2 ? Math.min(5, effectiveDay - 1) : 0,
      description: 'Conditionals, decision branches, control flow',
    },
    {
      id: 'automation',
      name: 'Automation',
      level: effectiveDay >= 3 ? Math.min(5, effectiveDay - 2) : 0,
      description: 'Loops, batch repetition, autonomous iteration',
    },
    {
      id: 'data',
      name: 'Data',
      level: effectiveDay >= 5 ? Math.min(5, effectiveDay - 3) : (effectiveDay >= 1 ? 1 : 0),
      description: 'Collections, lists, dictionaries, datasets',
    },
    {
      id: 'analysis',
      name: 'Analysis',
      level: effectiveDay >= 6 ? Math.min(5, effectiveDay - 4) : 0,
      description: 'Statistical questions, filtering, insight deduction',
    },
    {
      id: 'ai',
      name: 'AI',
      level: effectiveDay >= 7 ? 2 : 0,
      description: 'Intelligent decision patterns, predictive logic',
    },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 font-mono text-xs text-lab-600 bg-white/80 border border-lab-900/10 px-3 py-1.5 rounded-full shadow-sm">
        <span className="text-[10px] tracking-widest uppercase text-lab-400 font-sans font-semibold">Capabilities</span>
        <div className="flex items-center gap-3">
          {capabilities.slice(0, 4).map((cap) => (
            <div key={cap.id} className="flex items-center gap-1">
              <span className={`text-[11px] font-medium ${cap.level > 0 ? 'text-deep-space' : 'text-lab-400'}`}>
                {cap.name}
              </span>
              <span className="text-quantum-teal">
                {cap.level > 0 ? '●' : '○'}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-lab-900/10 rounded-2xl p-6 shadow-subtle max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-semibold text-quantum-teal tracking-widest uppercase font-mono">
            Cognitive Growth
          </span>
          <h3 className="text-lg font-semibold text-deep-space mt-0.5">
            Learner Capability Map
          </h3>
        </div>
        <span className="text-xs text-lab-400 font-mono">
          Day 0{currentDay} Active
        </span>
      </div>

      <div className="space-y-4">
        {capabilities.map((cap) => {
          const isUnlocked = cap.level > 0;
          return (
            <div key={cap.id} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className={`font-mono font-medium ${isUnlocked ? 'text-deep-space' : 'text-lab-400'}`}>
                  {cap.name}
                </span>
                <span className="font-mono text-lab-500">
                  {isUnlocked ? `Stage 0${cap.level}` : 'Pending'}
                </span>
              </div>

              {/* 2050 Minimal Progress Line: ●──────── */}
              <div className="flex items-center gap-1.5 py-1">
                {[1, 2, 3, 4, 5].map((stg) => {
                  const filled = stg <= cap.level;
                  return (
                    <div key={stg} className="flex-1 flex items-center">
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                          filled
                            ? 'bg-quantum-teal shadow-teal-glow ring-2 ring-quantum-teal/20'
                            : 'border border-lab-300 bg-white'
                        }`}
                      />
                      {stg < 5 && (
                        <div
                          className={`flex-1 h-[2px] mx-0.5 transition-all duration-500 ${
                            filled && stg < cap.level ? 'bg-quantum-teal' : 'bg-lab-200'
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-lab-500">
                {cap.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
