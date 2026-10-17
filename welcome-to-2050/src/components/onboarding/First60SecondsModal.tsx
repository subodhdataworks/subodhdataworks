import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Bot, 
  Cog, 
  Sparkles, 
  Check, 
  Volume2,
  MapPin,
  Globe2
} from 'lucide-react';
import { CareerGoal, ExperienceLevel, LearnerProfile, LanguageMode } from '../../types';
import { AnalyticsService } from '../../services/analytics';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';

interface First60SecondsModalProps {
  initialProfile: LearnerProfile;
  onComplete: (profile: LearnerProfile) => void;
  onClose: () => void;
}

export const First60SecondsModal: React.FC<First60SecondsModalProps> = ({
  initialProfile,
  onComplete,
  onClose,
}) => {
  // Stage 1: Goal Selection ("What do you want to build?"), Stage 2: "Python can take you there" + City + Name & Launch
  const [stage, setStage] = useState<1 | 2>(1);
  const [name, setName] = useState(initialProfile.name === 'Explorer' ? '' : initialProfile.name);
  const [city, setCity] = useState(initialProfile.city || 'Patna');
  const [goal, setGoal] = useState<CareerGoal>('data_analyst');
  const [experience, setExperience] = useState<ExperienceLevel>('never');
  const [language, setLanguage] = useState<LanguageMode>(initialProfile.preferredLanguage || 'hinglish');

  useEffect(() => {
    // Section 20 Hero Voice Greeting
    Voice.speak(
      "Welcome to 2050. Yahan hum sirf lessons complete nahi karenge. Hum problems solve karenge, mistakes karenge, aur khud discover karenge. Tum computer se kya karwana chahoge?"
    );
  }, []);

  const goalChoices = [
    {
      id: 'data_analyst' as CareerGoal,
      title: 'ANALYZE DATA',
      tagline: 'Turn information into answers.',
      icon: BarChart3,
    },
    {
      id: 'ai_builder' as CareerGoal,
      title: 'BUILD AI',
      tagline: 'Teach machines to learn.',
      icon: Bot,
    },
    {
      id: 'tech_creator' as CareerGoal,
      title: 'AUTOMATE WORK',
      tagline: 'Make computers do repetitive work.',
      icon: Cog,
    },
    {
      id: 'data_scientist' as CareerGoal,
      title: 'CREATE SOMETHING NEW',
      tagline: 'Build your own idea.',
      icon: Sparkles,
    },
  ];

  const popularCities = ['Patna', 'Muzaffarpur', 'Delhi', 'Jaipur', 'Lucknow', 'Bengaluru'];

  const handleGoalSelect = (selectedGoal: CareerGoal) => {
    setGoal(selectedGoal);
    SoundEffects.playDiscovery();
    setStage(2);
    Voice.speak("Python can take you there. Let's begin Day 1.");
  };

  const handleLaunchDay1 = () => {
    SoundEffects.playBreakthrough();
    Voice.setLanguage(language);

    const updated: LearnerProfile = {
      ...initialProfile,
      name: name.trim() || 'Aarav',
      city: city.trim() || 'Patna',
      careerGoal: goal,
      experience,
      preferredLanguage: language,
    };
    AnalyticsService.log('onboarding_completed', { goal, experience, city, language });
    onComplete(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-space/60 backdrop-blur-md overflow-y-auto">
      <div className="max-w-md w-full bg-white border border-lab-900/10 rounded-3xl p-6 sm:p-8 text-center relative shadow-elevated space-y-5 animate-fadeIn">
        {/* Step Indicator & Language Switcher */}
        <div className="flex items-center justify-between border-b border-lab-900/5 pb-2.5">
          <div className="flex items-center gap-1.5">
            <div className={`h-1.5 rounded-full transition-all ${stage === 1 ? 'w-8 bg-quantum-teal' : 'w-3 bg-quantum-teal/40'}`} />
            <div className={`h-1.5 rounded-full transition-all ${stage === 2 ? 'w-8 bg-quantum-teal' : 'w-3 bg-lab-200'}`} />
          </div>

          {/* Tri-Language Toggle */}
          <div className="flex items-center bg-lab-100 p-0.5 rounded-full border border-lab-900/10 text-[10px] font-mono">
            {[
              { id: 'hinglish' as LanguageMode, label: 'Hinglish' },
              { id: 'hindi' as LanguageMode, label: 'हिंदी' },
              { id: 'en' as LanguageMode, label: 'English' },
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  setLanguage(l.id);
                  Voice.setLanguage(l.id);
                  SoundEffects.playDiscovery();
                }}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === l.id
                    ? 'bg-deep-space text-future-white font-semibold'
                    : 'text-lab-500 hover:text-deep-space'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* STAGE 1: What do you want to build? */}
        {stage === 1 && (
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-quantum-teal font-semibold block">
                WELCOME TO 2050 • INDIA EDITION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-deep-space mt-1">
                What do you want to build?
              </h2>
              <p className="text-xs text-lab-500 mt-0.5">
                {language === 'hindi' 
                  ? 'अपनी रुचि चुनें। 2050 आपकी गति से आपको सिखाएगा।' 
                  : 'Select your focus. We adapt 2050 directly to you.'}
              </p>
            </div>

            {/* 4 Interactive Goal Choices */}
            <div className="grid grid-cols-1 gap-2 text-left">
              {goalChoices.map((c) => {
                const Icon = c.icon;
                const isSelected = goal === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleGoalSelect(c.id)}
                    className={`flex items-center gap-3 p-3 rounded-2xl border transition-all text-left group ${
                      isSelected
                        ? 'border-quantum-teal bg-quantum-teal/5 shadow-subtle'
                        : 'border-lab-900/10 bg-white hover:border-quantum-teal/40 hover:bg-lab-50'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-lab-100 flex items-center justify-center text-quantum-teal group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-mono font-bold tracking-wider text-deep-space">
                        {c.title}
                      </div>
                      <div className="text-[11px] text-lab-500 truncate">
                        {c.tagline}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-lab-300 group-hover:text-quantum-teal group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STAGE 2: "Python can take you there." -> City + Experience + Launch */}
        {stage === 2 && (
          <div className="space-y-4 text-left">
            <div className="text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-quantum-teal font-semibold block">
                DAY 01 READY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-deep-space mt-0.5">
                Python can take you there.
              </h2>
              <p className="text-xs text-lab-500">
                {language === 'hindi'
                  ? 'शून्य से शुरुआत करें। कोई पुराना ज्ञान जरूरी नहीं है।'
                  : 'Zero prior coding knowledge assumed. Made for India.'}
              </p>
            </div>

            {/* City Selection */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono font-semibold text-deep-space flex items-center gap-1">
                <MapPin className="w-3 h-3 text-quantum-teal" />
                <span>YOUR HOMETOWN / CITY:</span>
              </label>
              <div className="flex flex-wrap gap-1 py-1">
                {popularCities.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCity(c)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                      city === c
                        ? 'bg-deep-space text-white font-semibold'
                        : 'bg-lab-100 text-lab-600 hover:text-deep-space'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Selection (Never / A little / Yes) */}
            <div className="space-y-1 bg-lab-50 p-3 rounded-2xl border border-lab-900/5">
              <label className="text-[11px] font-mono font-semibold text-deep-space block">
                PRIOR CODING EXPERIENCE:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'never' as ExperienceLevel, label: 'Never (0)' },
                  { id: 'little' as ExperienceLevel, label: 'A little' },
                  { id: 'yes' as ExperienceLevel, label: 'Yes' },
                ].map((exp) => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => {
                      setExperience(exp.id);
                      SoundEffects.playDiscovery();
                    }}
                    className={`py-1.5 px-1 text-center rounded-xl text-xs font-medium border transition-all ${
                      experience === exp.id
                        ? 'bg-deep-space text-white border-deep-space shadow-subtle'
                        : 'bg-white text-lab-600 border-lab-200 hover:border-lab-400'
                    }`}
                  >
                    {exp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Learner Name */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-lab-500">
                Your Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Aarav"
                className="w-full px-3.5 py-2 rounded-xl border border-lab-900/10 text-xs text-deep-space placeholder-lab-400 focus:outline-none focus:border-quantum-teal"
              />
            </div>

            {/* Launch Button */}
            <button
              onClick={handleLaunchDay1}
              className="w-full py-3 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-semibold tracking-wide shadow-elevated flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>BEGIN DAY 1 — MEET PYTHON</span>
              <ArrowRight className="w-3.5 h-3.5 text-quantum-teal" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
