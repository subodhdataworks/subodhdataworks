import React, { useState, useEffect } from 'react';
import { ArrowRight, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Voice } from '../../services/voiceService';
import { SoundEffects } from '../../services/soundEffects';

interface LandingPageProps {
  onEnterFuture: () => void;
  onExploreDayShell?: (dayNum: number) => void;
  onOpenMasteryHub?: () => void;
  onOpenWhatsAppLogin?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ 
  onEnterFuture, 
  onOpenMasteryHub,
  onOpenWhatsAppLogin
}) => {
  const [selectedTrajectoryNode, setSelectedTrajectoryNode] = useState<number>(0);
  const [hasPlayedVoice, setHasPlayedVoice] = useState(false);

  // Trajectory Nodes (Python -> Automation -> Data Analysis -> Machine Learning -> AI -> Data Science)
  const trajectoryNodes = [
    {
      id: 'python',
      title: 'Python',
      subtitle: 'The Foundation',
      example: 'Give precise instructions to any machine in plain English-like syntax.',
    },
    {
      id: 'automation',
      title: 'Automation',
      subtitle: 'Effortless Speed',
      example: 'Process 50,000 monthly invoices in 3 seconds instead of 40 manual hours.',
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      subtitle: 'Clarity in Chaos',
      example: 'Scan hospital patient vitals to spot early signs of infection before symptoms appear.',
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      subtitle: 'Self-Improving Code',
      example: 'Train weather prediction algorithms that update automatically with daily radar feeds.',
    },
    {
      id: 'ai',
      title: 'AI',
      subtitle: 'Intelligent Systems',
      example: 'Build autonomous agents that draft code, reason through anomalies, and assist humans.',
    },
    {
      id: 'data-science',
      title: 'Data Science',
      subtitle: 'Answering Hard Questions',
      example: 'Investigate complex planetary climate telemetry to forecast renewable energy yields.',
    },
  ];

  const handleVoiceIntro = () => {
    SoundEffects.playDiscovery();
    if (Voice.isPlayingCustomVoice()) {
      Voice.stopCustomVoice();
      setHasPlayedVoice(false);
    } else {
      Voice.playCustomVoice('/audio/subodh_intro.mp4', () => {
        setHasPlayedVoice(true);
      });
    }
  };

  const handleEnterClick = () => {
    SoundEffects.playBreakthrough();
    onEnterFuture();
  };

  return (
    <div className="relative min-h-[calc(100vh-60px)] flex flex-col items-center justify-between px-4 py-12 md:py-16 selection:bg-quantum-teal/20 selection:text-deep-space">
      {/* Calm 2050 Intelligent Atmosphere */}
      <div className="max-w-3xl mx-auto w-full text-center flex flex-col items-center">
        {/* Founder Voice Note Audio Cue */}
        <button
          onClick={handleVoiceIntro}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-solar-gold/40 text-xs font-mono text-deep-space hover:text-solar-gold hover:border-solar-gold shadow-subtle mb-8 transition-all active:scale-95"
          title="Play Founder Welcome Note"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-solar-gold animate-pulse-subtle" />
          <span className="font-bold">🎙️ LISTEN: FOUNDER VOICE NOTE (WELCOME TO 2050)</span>
          <Volume2 className="w-3.5 h-3.5 text-solar-gold" />
        </button>

        {/* Minimal Hero Center */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-deep-space leading-tight mb-3">
          WELCOME TO 2050
        </h1>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-teal/15 border border-quantum-teal/40 text-deep-space text-xs font-mono font-bold mb-4">
          <span>THE FUTURE OF LEARNING — DATA ANALYST ACADEMY</span>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-lab-500 font-normal max-w-xl mx-auto mb-8 leading-relaxed">
          Master Python, SQL, Advanced Excel & Power BI through active cognitive simulation engines, daily spaced retrieval drills, and real-time AI mock interviews.
        </p>

        {/* Single Primary Action: ENTER THE FUTURE → */}
        <button
          onClick={handleEnterClick}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-sm font-semibold tracking-wide shadow-elevated transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>ENTER THE FUTURE</span>
          <ArrowRight className="w-4 h-4 text-quantum-teal group-hover:translate-x-1 transition-transform" />
        </button>

        {onOpenWhatsAppLogin && (
          <button
            onClick={() => {
              SoundEffects.playDiscovery();
              onOpenWhatsAppLogin();
            }}
            className="mt-2.5 text-xs font-mono text-quantum-teal hover:underline flex items-center gap-1 font-semibold"
          >
            <span>📱 Direct WhatsApp Login (Name & Number) →</span>
          </button>
        )}

        {onOpenMasteryHub && (
          <button
            onClick={() => {
              SoundEffects.playDiscovery();
              onOpenMasteryHub();
            }}
            className="mt-2.5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-quantum-teal/30 hover:border-quantum-teal text-xs font-mono font-semibold text-deep-space shadow-subtle transition-all active:scale-95 hover:bg-lab-50"
          >
            <Sparkles className="w-3.5 h-3.5 text-quantum-teal" />
            <span>⚡ 2050 Python Mastery Hub (Data Types & Interview Sprint)</span>
          </button>
        )}

        <p className="text-xs text-lab-400 font-mono mt-5 max-w-md">
          Built for aspiring Data Analysts worldwide • Zero prior coding experience assumed
        </p>
      </div>

      {/* Section 11: Python → Real World Interactive Visual Flow */}
      <div className="w-full max-w-4xl mx-auto mt-16 pt-10 border-t border-lab-900/10">
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono tracking-widest uppercase text-quantum-teal font-semibold">
            The Learning Continuum
          </span>
          <p className="text-xs text-lab-500 mt-0.5">
            Click any node to see how Python connects to real-world capability.
          </p>
        </div>

        {/* Horizontal Pipeline of Interactive Nodes */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
          {trajectoryNodes.map((node, idx) => {
            const isSelected = selectedTrajectoryNode === idx;
            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => {
                    setSelectedTrajectoryNode(idx);
                    SoundEffects.playDiscovery();
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    isSelected
                      ? 'bg-deep-space text-white shadow-elevated ring-2 ring-quantum-teal/50'
                      : 'bg-white text-lab-600 border border-lab-900/10 hover:border-quantum-teal/40 hover:text-deep-space'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-quantum-teal' : 'bg-lab-300'}`} />
                  <span className="font-semibold">{node.title}</span>
                </button>

                {idx < trajectoryNodes.length - 1 && (
                  <span className="text-lab-300 font-mono text-xs hidden sm:inline">
                    →
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Tiny Real-World Example Box for selected node */}
        <div className="mt-4 max-w-lg mx-auto bg-white border border-lab-900/10 rounded-2xl p-4 shadow-subtle text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-quantum-teal font-semibold">
            <span>{trajectoryNodes[selectedTrajectoryNode].title}</span>
            <span>•</span>
            <span className="text-lab-400 font-normal">{trajectoryNodes[selectedTrajectoryNode].subtitle}</span>
          </div>
          <p className="text-xs text-deep-space font-medium mt-1">
            "{trajectoryNodes[selectedTrajectoryNode].example}"
          </p>
        </div>
      </div>

      {/* Subtle Footer Disclaimer */}
      <div className="text-center text-[11px] text-lab-400 font-mono mt-12">
        «Make today's learning feel like the future.»
      </div>
    </div>
  );
};
