import React, { useState } from 'react';
import { Bot, RotateCw, RotateCcw, ArrowUp, Play, Trash2, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { Mission } from '../../types';
import { AnalyticsService } from '../../services/analytics';
import confetti from 'canvas-confetti';

interface Mission1RobotProps {
  mission: Mission;
  onSuccess: () => void;
  onMistake: (desc: string) => void;
}

type Direction = 'up' | 'right' | 'down' | 'left';
type Command = 'FORWARD' | 'TURN_LEFT' | 'TURN_RIGHT';

export const Mission1Robot: React.FC<Mission1RobotProps> = ({ mission, onSuccess, onMistake }) => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [robotState, setRobotState] = useState<{ x: number; y: number; dir: Direction }>({
    x: 0,
    y: 3,
    dir: 'up',
  });
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState<{ type: 'info' | 'success' | 'error'; text: string }>({
    type: 'info',
    text: 'Formulate instructions to navigate around obstacles to the Energy Core.',
  });
  const [isCompleted, setIsCompleted] = useState(false);

  // Target and obstacles
  const target = { x: 3, y: 0 };
  const obstacles = [
    { x: 0, y: 2 },
    { x: 1, y: 1 },
    { x: 2, y: 2 }
  ];

  const addCommand = (cmd: Command) => {
    if (isRunning || isCompleted) return;
    if (commands.length >= 10) return;
    setCommands([...commands, cmd]);
  };

  const removeLastCommand = () => {
    if (isRunning || isCompleted) return;
    setCommands(commands.slice(0, -1));
  };

  const clearCommands = () => {
    if (isRunning || isCompleted) return;
    setCommands([]);
    setRobotState({ x: 0, y: 3, dir: 'up' });
    setMessage({
      type: 'info',
      text: 'Instructions cleared. Try another sequence.',
    });
  };

  const runSimulation = async () => {
    if (commands.length === 0 || isRunning) return;
    setIsRunning(true);
    AnalyticsService.log('answer_submitted', { missionId: mission.id, commands });

    let current = { x: 0, y: 3, dir: 'up' as Direction };
    setRobotState(current);

    const dirOffsets: Record<Direction, { dx: number; dy: number }> = {
      up: { dx: 0, dy: -1 },
      right: { dx: 1, dy: 0 },
      down: { dx: 0, dy: 1 },
      left: { dx: -1, dy: 0 },
    };

    const turnRightMap: Record<Direction, Direction> = {
      up: 'right',
      right: 'down',
      down: 'left',
      left: 'up',
    };

    const turnLeftMap: Record<Direction, Direction> = {
      up: 'left',
      left: 'down',
      down: 'right',
      right: 'up',
    };

    for (let i = 0; i < commands.length; i++) {
      await new Promise((res) => setTimeout(res, 450));
      const cmd = commands[i];

      if (cmd === 'TURN_LEFT') {
        current.dir = turnLeftMap[current.dir];
      } else if (cmd === 'TURN_RIGHT') {
        current.dir = turnRightMap[current.dir];
      } else if (cmd === 'FORWARD') {
        const offset = dirOffsets[current.dir];
        const nx = current.x + offset.dx;
        const ny = current.y + offset.dy;

        // Check grid boundary (4x4)
        if (nx < 0 || nx > 3 || ny < 0 || ny > 3) {
          setRobotState({ ...current });
          setMessage({
            type: 'error',
            text: '💥 Rover hit the grid boundary! Remember: Computers stop when encountering limits.',
          });
          onMistake('Rover moved out of bounds');
          setIsRunning(false);
          return;
        }

        // Check obstacle collision
        const hitObstacle = obstacles.some((o) => o.x === nx && o.y === ny);
        if (hitObstacle) {
          setRobotState({ ...current });
          setMessage({
            type: 'error',
            text: '🚨 Collision with obstacle tile! Re-plan your sequence to steer around it.',
          });
          onMistake('Rover collided with barrier tile');
          setIsRunning(false);
          return;
        }

        current.x = nx;
        current.y = ny;
      }

      setRobotState({ ...current });
    }

    setIsRunning(false);

    // Check if reached destination
    if (current.x === target.x && current.y === target.y) {
      setIsCompleted(true);
      setMessage({
        type: 'success',
        text: '⚡ Target Reached! Computers follow explicit instructions perfectly.',
      });
      AnalyticsService.log('answer_correct', { missionId: mission.id });
      confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
      setTimeout(() => {
        onSuccess();
      }, 1400);
    } else {
      setMessage({
        type: 'error',
        text: 'The sequence finished, but the rover has not reached the Energy Core yet. Check your path.',
      });
      onMistake('Sequence ended before reaching target');
      AnalyticsService.log('answer_incorrect', { missionId: mission.id });
    }
  };

  const getRotationClass = (dir: Direction) => {
    switch (dir) {
      case 'up': return 'rotate-0';
      case 'right': return 'rotate-90';
      case 'down': return 'rotate-180';
      case 'left': return '-rotate-90';
    }
  };

  return (
    <div className="space-y-6">
      {/* Visual Instruction Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* 4x4 Grid Board */}
        <div className="flex flex-col items-center">
          <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between w-full max-w-[280px]">
            <span>ROVER TELEMETRY GRID</span>
            <span className="text-cyan-400">4 × 4 SECTOR</span>
          </div>

          <div className="grid grid-cols-4 gap-2 p-3 rounded-2xl bg-lab-900 border border-white/10 shadow-inner max-w-[300px] w-full aspect-square">
            {Array.from({ length: 16 }).map((_, index) => {
              const x = index % 4;
              const y = Math.floor(index / 4);
              const isRobot = robotState.x === x && robotState.y === y;
              const isTarget = target.x === x && target.y === y;
              const isObstacle = obstacles.some((o) => o.x === x && o.y === y);

              return (
                <div
                  key={index}
                  className={`relative rounded-xl border flex items-center justify-center transition-all ${
                    isTarget
                      ? 'bg-emerald-950/70 border-emerald-500 shadow-glow-emerald animate-pulse'
                      : isObstacle
                      ? 'bg-rose-950/60 border-rose-500/40 text-rose-400'
                      : 'bg-lab-950/70 border-white/5'
                  }`}
                >
                  {isObstacle && (
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[10px] font-mono text-rose-300 font-bold">WALL</span>
                    </div>
                  )}

                  {isTarget && (
                    <div className="flex flex-col items-center justify-center">
                      <Sparkles className="w-5 h-5 text-emerald-400 animate-spin" />
                      <span className="text-[9px] font-mono text-emerald-300">CORE</span>
                    </div>
                  )}

                  {isRobot && (
                    <div
                      className={`absolute inset-0 flex items-center justify-center text-cyan-300 transition-transform duration-300 ${getRotationClass(
                        robotState.dir
                      )}`}
                    >
                      <div className="p-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400 shadow-glow-cyan">
                        <Bot className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Command Construction Deck */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-lab-900/90 border border-white/10">
            <div className="text-xs font-mono text-slate-300 mb-2 flex items-center justify-between">
              <span>INSTRUCTION QUEUE ({commands.length}/10)</span>
              <button
                onClick={clearCommands}
                disabled={isRunning || commands.length === 0}
                className="text-slate-400 hover:text-rose-400 disabled:opacity-30 text-[11px] flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                Clear
              </button>
            </div>

            {/* Sequence Pills */}
            <div className="min-h-[50px] p-2 rounded-lg bg-lab-950 border border-white/5 flex flex-wrap gap-1.5 items-center">
              {commands.length === 0 ? (
                <span className="text-xs text-slate-500 italic pl-1">
                  Click buttons below to add step-by-step commands...
                </span>
              ) : (
                commands.map((cmd, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-[11px] flex items-center gap-1 shadow-sm"
                  >
                    <span className="text-slate-500 text-[9px]">{i + 1}.</span>
                    {cmd === 'FORWARD' && 'FORWARD'}
                    {cmd === 'TURN_LEFT' && 'TURN_L'}
                    {cmd === 'TURN_RIGHT' && 'TURN_R'}
                  </span>
                ))
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => addCommand('TURN_LEFT')}
              disabled={isRunning || isCompleted}
              className="p-3 rounded-xl bg-lab-900 border border-white/10 hover:border-cyan-400 text-slate-200 text-xs font-mono flex flex-col items-center gap-1 transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4 text-cyan-400" />
              <span>Turn Left</span>
            </button>

            <button
              onClick={() => addCommand('FORWARD')}
              disabled={isRunning || isCompleted}
              className="p-3 rounded-xl bg-lab-900 border border-white/10 hover:border-cyan-400 text-slate-200 text-xs font-mono flex flex-col items-center gap-1 transition-all active:scale-95"
            >
              <ArrowUp className="w-4 h-4 text-emerald-400" />
              <span>Forward</span>
            </button>

            <button
              onClick={() => addCommand('TURN_RIGHT')}
              disabled={isRunning || isCompleted}
              className="p-3 rounded-xl bg-lab-900 border border-white/10 hover:border-cyan-400 text-slate-200 text-xs font-mono flex flex-col items-center gap-1 transition-all active:scale-95"
            >
              <RotateCw className="w-4 h-4 text-cyan-400" />
              <span>Turn Right</span>
            </button>
          </div>

          {/* Run Sequence */}
          <button
            onClick={runSimulation}
            disabled={isRunning || commands.length === 0 || isCompleted}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 disabled:opacity-40 text-lab-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition-all"
          >
            <Play className="w-4 h-4 fill-lab-950" />
            <span>{isRunning ? 'EXECUTING INSTRUCTIONS...' : 'RUN INSTRUCTIONS'}</span>
          </button>
        </div>
      </div>

      {/* Status banner */}
      <div
        className={`p-3.5 rounded-xl border text-xs flex items-center gap-2.5 transition-all ${
          message.type === 'success'
            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-glow-emerald'
            : message.type === 'error'
            ? 'bg-rose-950/60 border-rose-500 text-rose-200'
            : 'bg-lab-900 border-white/10 text-slate-300'
        }`}
      >
        {message.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
        {message.type === 'error' && <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />}
        <span>{message.text}</span>
      </div>
    </div>
  );
};
