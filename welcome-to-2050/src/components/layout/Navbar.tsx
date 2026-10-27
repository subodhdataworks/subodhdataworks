import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Sliders, 
  RotateCcw,
  Sparkles,
  BookOpen,
  HelpCircle,
  Code2,
  Brain,
  Mic,
  Briefcase
} from 'lucide-react';
import { LearnerProfile, LanguageMode } from '../../types';
import { CapabilityMap } from '../skills/CapabilityMap';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import { ThemeToggle } from '../common/ThemeToggle';

interface NavbarProps {
  profile: LearnerProfile;
  activeTab: 'landing' | 'choose_path' | 'python_overview' | 'python_mission' | 'python_intro_world' | 'courses' | 'dashboard' | 'mission' | 'report';
  currentDayNumber?: number;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onNavigate: (tab: 'landing' | 'choose_path' | 'python_overview' | 'python_mission' | 'python_intro_world' | 'courses' | 'dashboard' | 'mission' | 'report') => void;
  onOpenTutor: () => void;
  onOpenPlayground: () => void;
  onOpenSkillGraph: () => void;
  onOpenExperimentLab: () => void;
  onOpenMasteryHub: () => void;
  onOpenSubscription: () => void;
  onOpenRecallWorkout?: () => void;
  onOpenInterviewSim?: () => void;
  onOpenResumeProjects?: () => void;
  onToggleDevMode: () => void;
  onLanguageChange: (lang: LanguageMode) => void;
  onReset: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeTab,
  currentDayNumber = 1,
  theme = 'light',
  onToggleTheme,
  onNavigate,
  onOpenTutor,
  onOpenPlayground,
  onOpenSkillGraph,
  onOpenExperimentLab,
  onOpenMasteryHub,
  onOpenSubscription,
  onOpenRecallWorkout,
  onOpenInterviewSim,
  onOpenResumeProjects,
  onToggleDevMode,
  onLanguageChange,
  onReset,
}) => {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleSound = () => {
    const muted = SoundEffects.toggleMute();
    Voice.setMuted(muted);
    setIsMuted(muted);
  };

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b px-4 py-2.5 transition-colors ${
      theme === 'dark' ? 'bg-[#08101E]/95 border-white/10 text-white' : 'bg-white/90 border-lab-900/10 text-deep-space'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* FUTURE IT INDUSTRY Brand */}
        <div 
          onClick={() => onNavigate('landing')} 
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <img
            src="/images/brand/future_it_logo.png"
            alt="FUTURE IT INDUSTRY - Learn Today. Earn Tomorrow."
            className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </div>

        {/* Center: Courses & Day Navigation */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => onNavigate('choose_path')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
              activeTab === 'choose_path' || activeTab === 'python_overview' || activeTab === 'python_mission'
                ? 'bg-deep-space text-white shadow-subtle' 
                : 'bg-quantum-teal/15 text-deep-space hover:bg-quantum-teal/25'
            }`}
          >
            🚀 FUTURE IT 3D
          </button>

          <button
            onClick={() => onNavigate('courses')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
              activeTab === 'courses' 
                ? 'bg-deep-space text-white shadow-subtle' 
                : 'bg-lab-100 text-deep-space hover:bg-lab-200'
            }`}
          >
            📚 4 Courses
          </button>

          <button
            onClick={() => onNavigate('mission')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
              activeTab === 'mission' 
                ? 'bg-deep-space text-white shadow-subtle' 
                : 'bg-lab-100 text-deep-space hover:bg-lab-200'
            }`}
          >
            🚀 Day 01 Mission
          </button>
        </div>

        {/* Right Minimal Controls */}
        <div className="flex items-center gap-2">
          {/* Founder Voice Note */}
          <button
            onClick={() => {
              if (Voice.isPlayingCustomVoice()) {
                Voice.stopCustomVoice();
              } else {
                Voice.playCustomVoice('/audio/subodh_intro.mp4');
                SoundEffects.playDiscovery();
              }
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-solar-gold/20 hover:bg-solar-gold/30 text-deep-space border border-solar-gold/50 transition-all shadow-subtle"
            title="Listen to Founder Intro Voice"
          >
            <Sparkles className="w-3.5 h-3.5 text-solar-gold" />
            <span className="hidden sm:inline">Founder Voice</span>
          </button>

          {/* ₹999 Lifetime Master Pass Button */}
          {profile.isSubscribed || profile.devModeUnlocked ? (
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-solar-gold/20 text-deep-space border border-solar-gold/60 text-[10px] font-mono font-bold">
              ⭐ VIP PASS ACTIVE
            </span>
          ) : (
            <button
              onClick={onOpenSubscription}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-solar-gold/20 hover:bg-solar-gold/30 text-deep-space border border-solar-gold/60 transition-all shadow-subtle animate-pulse-subtle"
              title="Unlock All 4 Courses for ₹999"
            >
              <span>🔥 Unlock ₹999</span>
            </button>
          )}

          {/* 2050 Python Mastery Hub (Data Types & Interview Flashcards) */}
          <button
            onClick={onOpenMasteryHub}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-quantum-teal/15 hover:bg-quantum-teal/25 text-deep-space border border-quantum-teal/40 transition-all shadow-subtle"
            title="Open 2050 Python Mastery Hub (Data Types & Interview Flashcards)"
          >
            <span className="text-quantum-teal font-mono">⚡</span>
            <span className="font-mono">Python 2050</span>
          </button>

          {/* 2-Min Daily Memory Recall Workout */}
          {onOpenRecallWorkout && (
            <button
              onClick={onOpenRecallWorkout}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-lab-100 hover:bg-quantum-teal/15 text-deep-space border border-lab-900/10 transition-colors"
              title="2-Minute Daily Memory Recall Workout (Spaced Retrieval Drills)"
            >
              <Brain className="w-3.5 h-3.5 text-quantum-teal" />
              <span>Recall</span>
            </button>
          )}

          {/* AI Mock Interview Simulator */}
          {onOpenInterviewSim && (
            <button
              onClick={onOpenInterviewSim}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-lab-100 hover:bg-future-blue/15 text-deep-space border border-lab-900/10 transition-colors"
              title="AI Mock Interview Simulator (Speak or type with 2050 AI Coach)"
            >
              <Mic className="w-3.5 h-3.5 text-future-blue" />
              <span>Interview</span>
            </button>
          )}

          {/* Resume & LinkedIn Project Generator */}
          {onOpenResumeProjects && (
            <button
              onClick={onOpenResumeProjects}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-lab-100 hover:bg-emerald-500/15 text-deep-space border border-lab-900/10 transition-colors"
              title="Resume & LinkedIn Project Generator (Verified Portfolio Cards)"
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
              <span>Projects</span>
            </button>
          )}

          {/* Socratic Mentor shortcut */}
          <button
            onClick={onOpenTutor}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-lab-100 hover:bg-lab-200 text-deep-space border border-lab-900/10 transition-colors"
            title="Ask AI Companion"
          >
            <Sparkles className="w-3.5 h-3.5 text-quantum-teal" />
            <span className="hidden sm:inline">AI Tutor</span>
          </button>

          {/* Standalone Python Playground */}
          <button
            onClick={onOpenPlayground}
            className="p-1.5 rounded-full text-lab-500 hover:text-deep-space hover:bg-lab-100 transition-colors"
            title="Open Python Sandbox Editor"
          >
            <Code2 className="w-4 h-4" />
          </button>

          {/* Sound / Voice Mute Toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-1.5 rounded-full transition-colors ${
              isMuted ? 'text-signal-coral hover:bg-signal-coral/10' : 'text-lab-500 hover:text-deep-space hover:bg-lab-100'
            }`}
            title={isMuted ? 'Unmute Audio & Voice' : 'Mute Audio & Voice'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Dark / Light Mode Switcher */}
          {onToggleTheme && (
            <ThemeToggle 
              theme={theme} 
              onToggle={onToggleTheme} 
            />
          )}

          {/* Dev Mode quick toggle */}
          <button
            onClick={onToggleDevMode}
            className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
              profile.devModeUnlocked 
                ? 'bg-solar-gold/20 text-deep-space border-solar-gold/60 font-semibold' 
                : 'text-lab-400 hover:text-deep-space border-lab-200'
            }`}
            title="Developer Mode: Unlock all 7 days for instant inspection"
          >
            {profile.devModeUnlocked ? '⚡ DEV ON' : 'DEV MODE'}
          </button>

          {/* Reset */}
          <button
            onClick={onReset}
            className="p-1.5 rounded-full text-lab-400 hover:text-signal-coral hover:bg-signal-coral/10 transition-colors"
            title="Reset All Progress"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
