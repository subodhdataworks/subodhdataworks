import React, { useState } from 'react';
import { Sparkles, Shield, User, Globe2, Compass, Target } from 'lucide-react';
import { LearnerProfile, LanguageMode } from '../../types';
import { DiagnosticQuiz } from './DiagnosticQuiz';
import { AnalyticsService } from '../../services/analytics';

interface OnboardingModalProps {
  initialProfile: LearnerProfile;
  onSaveProfile: (profile: LearnerProfile) => void;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  initialProfile,
  onSaveProfile,
  onClose,
}) => {
  const [step, setStep] = useState<'profile' | 'diagnostic'>('profile');
  const [name, setName] = useState(initialProfile.name === 'Explorer' ? '' : initialProfile.name);
  const [experience, setExperience] = useState<any>(initialProfile.experience || 'zero');
  const [language, setLanguage] = useState<LanguageMode>(initialProfile.preferredLanguage);
  const [goal, setGoal] = useState(initialProfile.goal || 'Understand how code works without fear');

  const goals = [
    'Understand how code works without fear',
    'Learn programming logic from the ground up',
    'Prepare to explore data analysis and AI',
    'Experience a better alternative to boring video lectures'
  ];

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    AnalyticsService.log('onboarding_started', { name: name.trim() || 'Explorer', experience, language, goal });
    setStep('diagnostic');
  };

  const handleDiagnosticComplete = (diagnosticScore: number) => {
    const updatedProfile: LearnerProfile = {
      ...initialProfile,
      name: name.trim() || 'Explorer',
      experience,
      preferredLanguage: language,
      goal,
    };
    AnalyticsService.log('diagnostic_completed', { score: diagnosticScore });
    AnalyticsService.log('onboarding_completed', { profile: updatedProfile });
    onSaveProfile(updatedProfile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lab-950/85 backdrop-blur-md overflow-y-auto">
      {step === 'profile' ? (
        <div className="max-w-lg w-full p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 text-left relative shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>LEARNER CALIBRATION PROTOCOL</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Welcome to 2050</h2>
          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
            We only ask what is necessary to customize your practice pace. No passwords, no unnecessary personal details.
          </p>

          <form onSubmit={handleProfileSubmit} className="space-y-4">
            {/* Name / Nickname */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>What should the lab call you? (Name or Nickname)</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex, Maya, or Explorer"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-lab-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm font-sans"
              />
            </div>

            {/* Experience level */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Your programming background:</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'zero', label: 'Zero Coding', desc: 'Complete beginner' },
                  { id: 'curious', label: 'Curious', desc: 'Tried tutorials once' },
                  { id: 'beginner', label: 'Beginner', desc: 'Knows few concepts' },
                ].map((exp) => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setExperience(exp.id as any)}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      experience === exp.id
                        ? 'border-cyan-400 bg-cyan-950/60 text-cyan-200 shadow-glow-cyan'
                        : 'border-white/10 bg-lab-900/60 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold text-slate-200">{exp.label}</div>
                    <div className="text-[10px] text-slate-400">{exp.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Language */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Preferred Language Mode:</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    language === 'en'
                      ? 'border-cyan-400 bg-cyan-950/60 text-cyan-200'
                      : 'border-white/10 bg-lab-900/60 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-semibold text-slate-200">English</div>
                  <div className="text-[10px] text-slate-400">Clear, simple international English</div>
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('hinglish')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    language === 'hinglish'
                      ? 'border-cyan-400 bg-cyan-950/60 text-cyan-200'
                      : 'border-white/10 bg-lab-900/60 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-semibold text-slate-200">Hinglish Assisted</div>
                  <div className="text-[10px] text-slate-400">English with intuitive Hindi analogies</div>
                </button>
              </div>
            </div>

            {/* Learning Goal */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>What is your primary goal?</span>
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-lab-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs font-sans"
              >
                {goals.map((g, i) => (
                  <option key={i} value={g} className="bg-lab-900 text-slate-200">
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-lab-950 font-bold text-sm shadow-glow-cyan transition-all"
            >
              INITIALIZE LOGIC CALIBRATION &rarr;
            </button>
          </form>
        </div>
      ) : (
        <DiagnosticQuiz
          learnerName={name.trim() || 'Explorer'}
          onComplete={handleDiagnosticComplete}
        />
      )}
    </div>
  );
};
