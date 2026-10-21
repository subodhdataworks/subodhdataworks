import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Check, 
  X, 
  Flame, 
  Coins, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Play, 
  FileText, 
  Gamepad2, 
  Code, 
  Mic, 
  ArrowRight, 
  RotateCcw, 
  Lightbulb, 
  Star, 
  Lock, 
  Unlock, 
  Award, 
  Target, 
  ChevronRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import { FutureLogo } from '../FutureLogo';
import './TopicMasteryScoreLab.css';

export interface TopicMasteryScoreLabProps {
  userName?: string;
  onBack?: () => void;
  onNavigateNextTopic?: () => void;
  onReviewStep?: (step: 'learn' | 'practice' | 'play' | 'code' | 'interview') => void;
}

export const TopicMasteryScoreLab: React.FC<TopicMasteryScoreLabProps> = ({
  userName = 'Subodh Kumar',
  onBack,
  onNavigateNextTopic,
  onReviewStep
}) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [confettiActive, setConfettiActive] = useState<boolean>(true);

  // Play celebration fanfare on mount
  useEffect(() => {
    try {
      soundEffects.playCelebration();
    } catch {
      // ignore
    }

    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const handleNextTopic = () => {
    if (soundEnabled) soundEffects.playClick();
    if (onNavigateNextTopic) {
      onNavigateNextTopic();
    } else {
      window.location.hash = '#python';
    }
  };

  const handleReview = () => {
    if (soundEnabled) soundEffects.playClick();
    if (onReviewStep) {
      onReviewStep('practice');
    } else if (onBack) {
      onBack();
    } else {
      window.location.hash = '#python-topic';
    }
  };

  return (
    <div className="fai-score-page">
      {/* Confetti Animation Effect */}
      {confettiActive && (
        <div className="fai-score-confetti-container" aria-hidden="true">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="fai-score-confetti-piece"
              style={{
                left: `${(i * 2.1) % 100}%`,
                animationDelay: `${(i % 12) * 0.18}s`,
                backgroundColor: [
                  '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', 
                  '#10b981', '#06b6d4', '#6366f1', '#e11d48'
                ][i % 8],
                transform: `rotate(${i * 25}deg)`
              }}
            />
          ))}
        </div>
      )}

      {/* =========================================================================
          1. TOP NAVIGATION BAR (Exact media_1790651278659.jpg)
          ========================================================================= */}
      <header className="fai-score-topbar">
        {/* Left: FUTURE IT INDUSTRY Brand */}
        <div className="fai-score-brand cursor-pointer" onClick={onBack} role="button" tabIndex={0}>
          <FutureLogo size="sm" />
        </div>

        {/* Center: Breadcrumb Path */}
        <div className="fai-score-breadcrumb">
          <span className="fai-score-bc-parent">Python for Beginners</span>
          <span className="fai-score-bc-sep">/</span>
          <span className="fai-score-bc-current">1. Introduction to Python</span>
        </div>

        {/* Right: Streak, XP & Learner Avatar */}
        <div className="fai-score-topbar-right">
          {/* 5 Day Streak */}
          <div className="fai-score-metric-badge streak" title="5 Day Streak">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="fai-score-metric-text">5 Day Streak</span>
          </div>

          {/* 250 XP */}
          <div className="fai-score-metric-badge xp" title="Earned 250 XP">
            <Coins className="w-4 h-4 text-amber-500" />
            <span className="fai-score-metric-text">250 XP</span>
          </div>

          {/* Sound Toggle */}
          <button 
            className="fai-score-sound-btn"
            onClick={() => {
              const res = soundEffects.toggleSound();
              setSoundEnabled(res);
            }}
            title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-slate-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Learner Avatar */}
          <div className="fai-score-avatar" title={userName}>
            <img 
              src="/images/powergreen_ai_bot.png" 
              alt={userName} 
              className="fai-score-avatar-img"
            />
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. MAIN 3-COLUMN WORKSPACE
          ========================================================================= */}
      <div className="fai-score-layout">

        {/* =======================================================================
            LEFT SIDEBAR: Steps Progression & Celebratory Robot Mascot
            ======================================================================= */}
        <aside className="fai-score-left-sidebar">
          {/* Module Title */}
          <div className="fai-score-sidebar-header">
            <div className="fai-score-py-badge">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                alt="Python" 
                className="w-4 h-4"
              />
            </div>
            <div className="fai-score-sidebar-title-wrap">
              <h2 className="fai-score-sidebar-title">Python for Beginners</h2>
              <span className="fai-score-sidebar-subtitle">Topic 1 of 6 Completed</span>
            </div>
          </div>

          {/* Steps List */}
          <nav className="fai-score-steps-nav" aria-label="Topic Learning Steps">
            {[
              { id: 'learn', num: '1', title: 'Video', isDone: true, isActive: false },
              { id: 'practice', num: '2', title: 'MCQ', isDone: true, isActive: false },
              { id: 'play', num: '3', title: 'Practice', isDone: true, isActive: false },
              { id: 'code', num: '4', title: 'Code Practice', isDone: true, isActive: false },
              { id: 'interview', num: '5', title: 'Interview', isDone: true, isActive: false },
              { id: 'score', num: '6', title: 'Score & Next', isDone: false, isActive: true },
            ].map(step => (
              <div 
                key={step.id}
                className={`fai-score-step-row ${step.isActive ? 'active' : ''} ${step.isDone ? 'completed' : ''}`}
                onClick={() => {
                  if (step.id !== 'score' && onReviewStep) {
                    if (soundEnabled) soundEffects.playClick();
                    onReviewStep(step.id as any);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="fai-score-step-indicator">
                  {step.isDone ? (
                    <div className="fai-score-check-dot">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                  ) : step.isActive ? (
                    <div className="fai-score-active-dot">
                      <div className="fai-score-active-inner" />
                    </div>
                  ) : (
                    <span className="fai-score-num-dot">{step.num}</span>
                  )}
                </div>
                <span className="fai-score-step-name">{step.num}. {step.title}</span>
                {step.isActive && <ChevronRight className="w-3.5 h-3.5 text-blue-600 ml-auto" />}
              </div>
            ))}
          </nav>

          {/* Celebratory 3D Robot Mascot Card (Exact 1:1 with media_1790651278659.jpg) */}
          <div className="fai-score-mascot-card">
            <div className="fai-score-mascot-visual">
              {/* Confetti burst around mascot */}
              <div className="fai-score-mascot-confetti">🎉</div>
              <img 
                src="/images/powergreen_ai_bot.png" 
                alt="AI Celebrator Robot" 
                className="fai-score-mascot-img"
              />
            </div>
            <div className="fai-score-speech-bubble">
              <p className="fai-score-speech-text">
                Great job! You have completed this topic. Here is your performance summary.
              </p>
            </div>
          </div>
        </aside>

        {/* =======================================================================
            CENTER MAIN STAGE: Celebration Banner, Scores, Metrics & Insights
            ======================================================================= */}
        <main className="fai-score-center-stage">
          
          {/* 1. HERO CELEBRATION BANNER (Gradient Blue/Purple with Trophy & Mastery Badge) */}
          <section className="fai-score-hero-banner">
            <div className="fai-score-hero-sparkles" aria-hidden="true">
              <span className="fai-sparkle sp1">✨</span>
              <span className="fai-sparkle sp2">⭐</span>
              <span className="fai-sparkle sp3">✨</span>
            </div>

            <div className="fai-score-hero-left">
              {/* Golden Trophy Graphic */}
              <div className="fai-score-trophy-wrap">
                <svg className="fai-score-trophy-svg" viewBox="0 0 100 100" fill="none">
                  {/* Cup Base & Pedestal */}
                  <path d="M30 85 L70 85 L65 72 L35 72 Z" fill="#b45309" />
                  <rect x="24" y="85" width="52" height="9" rx="3" fill="#78350f" />
                  <path d="M46 54 L54 54 L55 72 L45 72 Z" fill="#f59e0b" />
                  {/* Main Golden Goblet */}
                  <path d="M25 18 C25 44 40 54 50 54 C60 54 75 44 75 18 L25 18 Z" fill="url(#goldGradient)" />
                  <ellipse cx="50" cy="18" rx="25" ry="5.5" fill="#fef08a" />
                  {/* Handles */}
                  <path d="M25 24 C14 24 12 36 21 44 C24 47 26 47 27 46" stroke="#fbbf24" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                  <path d="M75 24 C86 24 88 36 79 44 C76 47 74 47 73 46" stroke="#fbbf24" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                  {/* Center Star on Cup */}
                  <polygon points="50,28 53,34 60,35 55,40 56,46 50,43 44,46 45,40 40,35 47,34" fill="#ffffff" />
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Title & Status */}
              <div className="fai-score-hero-text">
                <span className="fai-score-hero-pill">
                  <Check className="w-3 h-3 text-emerald-300 stroke-[3]" />
                  Topic Completed!
                </span>
                <h1 className="fai-score-hero-title">Introduction to Python</h1>
                <p className="fai-score-hero-sub">You have successfully completed this topic.</p>
              </div>
            </div>

            {/* Right Gold Mastery Ribbon */}
            <div className="fai-score-hero-right">
              <div className="fai-score-mastery-ribbon">
                <div className="fai-score-ribbon-tag">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span>Mastery Level: Mastered</span>
                </div>
                <div className="fai-score-ribbon-score">
                  81/100
                </div>
              </div>
            </div>
          </section>

          {/* 2. OVERALL SCORE CARD (Large Gauge & 2 Feedback Messages) */}
          <section className="fai-score-overall-card">
            {/* Left: Donut Gauge 81/100 */}
            <div className="fai-score-gauge-col">
              <div className="fai-score-gauge-box">
                <svg className="fai-score-gauge-svg" viewBox="0 0 120 120">
                  {/* Background Track */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    className="fai-gauge-bg"
                    strokeWidth="10"
                    fill="none"
                  />
                  {/* Animated Filled Arc (81%) */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    className="fai-gauge-fill"
                    strokeWidth="10"
                    strokeDasharray={`${(81 / 100) * 301.59} 301.59`}
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-90 60 60)"
                  />
                </svg>
                <div className="fai-score-gauge-center">
                  <div className="fai-score-gauge-val">81/100</div>
                  <div className="fai-score-gauge-lbl">OVERALL SCORE</div>
                </div>
              </div>
            </div>

            {/* Right: 2 Feedback Insight Cards */}
            <div className="fai-score-feedback-col">
              {/* Green Congratulations Card */}
              <div className="fai-feedback-box success">
                <div className="fai-fb-icon success">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="fai-fb-content">
                  <h3 className="fai-fb-title success">Congratulations!</h3>
                  <p className="fai-fb-desc">
                    You have a solid understanding of the core concepts. You are ready to move to the next topic.
                  </p>
                </div>
              </div>

              {/* Yellow Keep Going Card */}
              <div className="fai-feedback-box warning">
                <div className="fai-fb-icon warning">
                  <Lightbulb className="w-4 h-4 fill-amber-500" />
                </div>
                <div className="fai-fb-content">
                  <h3 className="fai-fb-title warning">Keep going!</h3>
                  <p className="fai-fb-desc">
                    Focus on improving your coding accuracy and interview answers to reach Expert level.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. SECTION-WISE PERFORMANCE (5 Metric Cards) */}
          <section className="fai-score-sectionwise">
            <h2 className="fai-sectionwise-heading">Section-wise Performance</h2>

            <div className="fai-sectionwise-grid">
              {/* 1. Video Card */}
              <div className="fai-section-card">
                <div className="fai-section-gauge">
                  <svg viewBox="0 0 80 80" className="w-16 h-16">
                    <circle cx="40" cy="40" r="32" className="fai-mini-bg" strokeWidth="6" fill="none" />
                    <circle 
                      cx="40" cy="40" r="32" 
                      className="fai-mini-fill blue" 
                      strokeWidth="6" 
                      strokeDasharray={`${(100 / 100) * 201.06} 201.06`}
                      strokeLinecap="round" 
                      fill="none" 
                      transform="rotate(-90 40 40)" 
                    />
                  </svg>
                  <div className="fai-section-gauge-label">100%</div>
                </div>

                <div className="fai-section-icon-row">
                  <div className="fai-section-type-icon blue">
                    <Play className="w-3.5 h-3.5 fill-current text-blue-600 ml-0.5" />
                  </div>
                  <span className="fai-section-name">Video</span>
                </div>

                <div className="fai-section-score">10/10</div>
                <div className="fai-section-weight">Weightage: 10%</div>
                <div className="fai-section-badge green">✓ Completed</div>
              </div>

              {/* 2. MCQ Card */}
              <div className="fai-section-card">
                <div className="fai-section-gauge">
                  <svg viewBox="0 0 80 80" className="w-16 h-16">
                    <circle cx="40" cy="40" r="32" className="fai-mini-bg" strokeWidth="6" fill="none" />
                    <circle 
                      cx="40" cy="40" r="32" 
                      className="fai-mini-fill indigo" 
                      strokeWidth="6" 
                      strokeDasharray={`${(80 / 100) * 201.06} 201.06`}
                      strokeLinecap="round" 
                      fill="none" 
                      transform="rotate(-90 40 40)" 
                    />
                  </svg>
                  <div className="fai-section-gauge-label">80%</div>
                </div>

                <div className="fai-section-icon-row">
                  <div className="fai-section-type-icon indigo">
                    <FileText className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                  <span className="fai-section-name">MCQ</span>
                </div>

                <div className="fai-section-score">20/25</div>
                <div className="fai-section-weight">Weightage: 25%</div>
                <div className="fai-section-badge green">✓ Good</div>
              </div>

              {/* 3. Game Card */}
              <div className="fai-section-card">
                <div className="fai-section-gauge">
                  <svg viewBox="0 0 80 80" className="w-16 h-16">
                    <circle cx="40" cy="40" r="32" className="fai-mini-bg" strokeWidth="6" fill="none" />
                    <circle 
                      cx="40" cy="40" r="32" 
                      className="fai-mini-fill purple" 
                      strokeWidth="6" 
                      strokeDasharray={`${(90 / 100) * 201.06} 201.06`}
                      strokeLinecap="round" 
                      fill="none" 
                      transform="rotate(-90 40 40)" 
                    />
                  </svg>
                  <div className="fai-section-gauge-label">90%</div>
                </div>

                <div className="fai-section-icon-row">
                  <div className="fai-section-type-icon purple">
                    <Gamepad2 className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  <span className="fai-section-name">Coding Practice</span>
                </div>

                <div className="fai-section-score">18/20</div>
                <div className="fai-section-weight">Weightage: 20%</div>
                <div className="fai-section-badge green">✓ Excellent</div>
              </div>

              {/* 4. Code Practice Card */}
              <div className="fai-section-card">
                <div className="fai-section-gauge">
                  <svg viewBox="0 0 80 80" className="w-16 h-16">
                    <circle cx="40" cy="40" r="32" className="fai-mini-bg" strokeWidth="6" fill="none" />
                    <circle 
                      cx="40" cy="40" r="32" 
                      className="fai-mini-fill amber" 
                      strokeWidth="6" 
                      strokeDasharray={`${(72 / 100) * 201.06} 201.06`}
                      strokeLinecap="round" 
                      fill="none" 
                      transform="rotate(-90 40 40)" 
                    />
                  </svg>
                  <div className="fai-section-gauge-label">72%</div>
                </div>

                <div className="fai-section-icon-row">
                  <div className="fai-section-type-icon amber">
                    <Code className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <span className="fai-section-name">Code Practice</span>
                </div>

                <div className="fai-section-score">18/25</div>
                <div className="fai-section-weight">Weightage: 25%</div>
                <div className="fai-section-badge green">✓ Good</div>
              </div>

              {/* 5. Interview Card */}
              <div className="fai-section-card">
                <div className="fai-section-gauge">
                  <svg viewBox="0 0 80 80" className="w-16 h-16">
                    <circle cx="40" cy="40" r="32" className="fai-mini-bg" strokeWidth="6" fill="none" />
                    <circle 
                      cx="40" cy="40" r="32" 
                      className="fai-mini-fill teal" 
                      strokeWidth="6" 
                      strokeDasharray={`${(78 / 100) * 201.06} 201.06`}
                      strokeLinecap="round" 
                      fill="none" 
                      transform="rotate(-90 40 40)" 
                    />
                  </svg>
                  <div className="fai-section-gauge-label">78%</div>
                </div>

                <div className="fai-section-icon-row">
                  <div className="fai-section-type-icon teal">
                    <Mic className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <span className="fai-section-name">Interview</span>
                </div>

                <div className="fai-section-score">16/20</div>
                <div className="fai-section-weight">Weightage: 20%</div>
                <div className="fai-section-badge green">✓ Good</div>
              </div>
            </div>
          </section>

          {/* 4. STRENGTHS & AREAS TO IMPROVE (2 Columns) */}
          <section className="fai-score-insights-grid">
            {/* Left: Your Strengths */}
            <div className="fai-insight-card strengths">
              <div className="fai-insight-head strengths">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <h3 className="fai-insight-title">Your Strengths</h3>
              </div>
              <ul className="fai-insight-list">
                <li className="fai-insight-item strengths">
                  <span className="fai-bullet-check">✓</span>
                  <span>Good understanding of Python basics</span>
                </li>
                <li className="fai-insight-item strengths">
                  <span className="fai-bullet-check">✓</span>
                  <span>High accuracy in MCQ and Practice</span>
                </li>
                <li className="fai-insight-item strengths">
                  <span className="fai-bullet-check">✓</span>
                  <span>Comfortable with basic coding</span>
                </li>
                <li className="fai-insight-item strengths">
                  <span className="fai-bullet-check">✓</span>
                  <span>Clear explanation of key concepts</span>
                </li>
              </ul>
            </div>

            {/* Right: Areas to Improve */}
            <div className="fai-insight-card improve">
              <div className="fai-insight-head improve">
                <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                <h3 className="fai-insight-title">Areas to Improve</h3>
              </div>
              <ul className="fai-insight-list">
                <li className="fai-insight-item improve">
                  <span className="fai-bullet-cross">✗</span>
                  <span>Code Practice: Improve handling edge cases and logic building</span>
                </li>
                <li className="fai-insight-item improve">
                  <span className="fai-bullet-cross">✗</span>
                  <span>Interview: Add more real-world examples</span>
                </li>
                <li className="fai-insight-item improve">
                  <span className="fai-bullet-cross">✗</span>
                  <span>Work on describing key features like &quot;interpreted&quot; and &quot;high-level language&quot;</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 5. UNLOCK REQUIREMENTS (MET) PILL STRIP */}
          <section className="fai-score-requirements-strip">
            <div className="fai-req-label-row">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="fai-req-title">Unlock Requirements (Met)</span>
            </div>
            <div className="fai-req-pills-wrap">
              {[
                '✓ Video 100%',
                '✓ MCQ ≥ 60%',
                '✓ Practice ≥ 60%',
                '✓ Code ≥ 60%',
                '✓ Interview ≥ 60%',
                '✓ Overall ≥ 70%'
              ].map((pill, idx) => (
                <span key={idx} className="fai-req-pill">
                  {pill}
                </span>
              ))}
            </div>
          </section>
        </main>

        {/* =======================================================================
            RIGHT SIDEBAR: Next Topic Unlocked, Mastery Ladder & Badges
            ======================================================================= */}
        <aside className="fai-score-right-sidebar">
          
          {/* Card 1: Next Topic Unlocked */}
          <div className="fai-next-topic-card">
            <div className="fai-next-topic-badge">
              <Unlock className="w-3.5 h-3.5 text-blue-600" />
              <span>Next Topic Unlocked!</span>
            </div>

            <div className="fai-next-topic-content">
              <div className="fai-next-topic-header">
                <div className="fai-next-py-icon">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                    alt="Python" 
                    className="w-5 h-5"
                  />
                </div>
                <h3 className="fai-next-topic-title">2. Variables in Python</h3>
              </div>
              <p className="fai-next-topic-desc">
                Learn about variable naming, data types, type casting, and dynamic typing in Python.
              </p>
            </div>

            <button 
              className="fai-continue-next-btn"
              onClick={handleNextTopic}
            >
              <span>Continue to Next Topic</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Mastery Levels Ladder */}
          <div className="fai-mastery-levels-card">
            <h3 className="fai-card-title">Mastery Levels</h3>

            <div className="fai-mastery-list">
              <div className="fai-mastery-item">
                <span className="fai-mastery-range">90 – 100:</span>
                <span className="fai-mastery-name">Expert</span>
              </div>

              {/* Active level 81/100 */}
              <div className="fai-mastery-item active">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="fai-mastery-range">80 – 89:</span>
                <span className="fai-mastery-name highlight">Mastered (81/100)</span>
              </div>

              <div className="fai-mastery-item">
                <span className="fai-mastery-range">70 – 79:</span>
                <span className="fai-mastery-name">Passed</span>
              </div>

              <div className="fai-mastery-item">
                <span className="fai-mastery-range">60 – 69:</span>
                <span className="fai-mastery-name">Almost There</span>
              </div>

              <div className="fai-mastery-item">
                <span className="fai-mastery-range">&lt; 60:</span>
                <span className="fai-mastery-name">Needs Practice</span>
              </div>
            </div>
          </div>

          {/* Card 3: Badges Earned */}
          <div className="fai-badges-earned-card">
            <div className="fai-badges-card-head">
              <h3 className="fai-card-title">Badges Earned</h3>
              <span 
                className="fai-view-all-link"
                onClick={() => {
                  if (soundEnabled) soundEffects.playClick();
                  window.location.hash = '#portfolio';
                }}
              >
                View All →
              </span>
            </div>

            <div className="fai-badges-row">
              {/* Badge 1: First Mission Completed */}
              <div className="fai-badge-col" title="First Mission Completed">
                <div className="fai-badge-hexagon blue">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="fai-badge-caption">First Mission Completed</span>
              </div>

              {/* Badge 2: Concept Master */}
              <div className="fai-badge-col" title="Concept Master">
                <div className="fai-badge-hexagon gold">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="fai-badge-caption">Concept Master</span>
              </div>

              {/* Badge 3: Precision Player */}
              <div className="fai-badge-col" title="Precision Player (MCQ 80%+)">
                <div className="fai-badge-hexagon purple">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="fai-badge-caption">Precision Player</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* =========================================================================
          3. BOTTOM BAR (Review This Topic & Next Topic Button)
          ========================================================================= */}
      <footer className="fai-score-bottom-bar">
        <button 
          className="fai-review-topic-btn"
          onClick={handleReview}
        >
          <RotateCcw className="w-4 h-4" />
          <span>Review This Topic</span>
        </button>

        <button 
          className="fai-next-topic-main-btn"
          onClick={handleNextTopic}
        >
          <span>Next Topic</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};
