import React from 'react';
import { 
  BookOpen, 
  Brain, 
  Mic, 
  Briefcase, 
  Sparkles 
} from 'lucide-react';
import { SoundEffects } from '../../services/soundEffects';

interface MobileBottomNavProps {
  activeTab: 'landing' | 'choose_path' | 'python_overview' | 'python_mission' | 'python_intro_world' | 'courses' | 'dashboard' | 'mission' | 'report';
  onNavigate: (tab: 'landing' | 'choose_path' | 'python_overview' | 'python_mission' | 'python_intro_world' | 'courses' | 'dashboard' | 'mission' | 'report') => void;
  onOpenRecallWorkout: () => void;
  onOpenInterviewSim: () => void;
  onOpenResumeProjects: () => void;
  onOpenMasteryHub: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onNavigate,
  onOpenRecallWorkout,
  onOpenInterviewSim,
  onOpenResumeProjects,
  onOpenMasteryHub,
}) => {
  // On FUTURE IT INDUSTRY views, the screens provide their own dedicated navigation
  if (['landing', 'choose_path', 'python_overview', 'python_mission'].includes(activeTab)) {
    return null;
  }

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-lab-900/10 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] safe-area-bottom">
      <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
        
        {/* Tab 1: Courses */}
        <button
          onClick={() => {
            SoundEffects.playSubtleClick();
            onNavigate('courses');
          }}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            activeTab === 'courses' 
              ? 'text-deep-space font-bold' 
              : 'text-lab-400 hover:text-deep-space'
          }`}
        >
          <div className={`p-1 rounded-lg transition-transform ${
            activeTab === 'courses' ? 'bg-deep-space text-white scale-105' : ''
          }`}>
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono mt-0.5 tracking-tight">Courses</span>
        </button>

        {/* Tab 2: 2-Min Recall */}
        <button
          onClick={() => {
            SoundEffects.playDiscovery();
            onOpenRecallWorkout();
          }}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-lab-400 hover:text-quantum-teal transition-all active:scale-95"
        >
          <div className="p-1 rounded-lg hover:bg-quantum-teal/15 text-quantum-teal">
            <Brain className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono mt-0.5 tracking-tight">Recall</span>
        </button>

        {/* Tab 3: AI Interviewer */}
        <button
          onClick={() => {
            SoundEffects.playDiscovery();
            onOpenInterviewSim();
          }}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-lab-400 hover:text-future-blue transition-all active:scale-95 relative"
        >
          <div className="p-1 rounded-lg bg-future-blue/15 text-future-blue">
            <Mic className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono mt-0.5 tracking-tight font-semibold text-future-blue">AI Mock</span>
          <span className="absolute top-1 right-3 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </button>

        {/* Tab 4: Portfolio Projects */}
        <button
          onClick={() => {
            SoundEffects.playDiscovery();
            onOpenResumeProjects();
          }}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-lab-400 hover:text-emerald-700 transition-all active:scale-95"
        >
          <div className="p-1 rounded-lg hover:bg-emerald-50 text-emerald-700">
            <Briefcase className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono mt-0.5 tracking-tight">Resume</span>
        </button>

        {/* Tab 5: Python 2050 Hub */}
        <button
          onClick={() => {
            SoundEffects.playDiscovery();
            onOpenMasteryHub();
          }}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-lab-400 hover:text-quantum-teal transition-all active:scale-95"
        >
          <div className="p-1 rounded-lg hover:bg-quantum-teal/10 text-quantum-teal">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono mt-0.5 tracking-tight">2050 Hub</span>
        </button>

      </div>
    </div>
  );
};
