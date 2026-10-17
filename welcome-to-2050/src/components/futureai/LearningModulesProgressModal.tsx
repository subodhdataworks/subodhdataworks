import React, { useEffect, useState } from 'react';
import {
  X,
  Check,
  Lock,
  Briefcase,
  Award,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';
import './LearningModulesProgressModal.css';

export interface ModuleProgressItem {
  id: string;
  num: number;
  title: string;
  subtitle: string;
  icon: string;
  status: 'completed' | 'in_progress' | 'locked';
  progressPercent: number;
}

interface LearningModulesProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetFeature?: 'Internship' | 'Certificate' | 'Placement' | string;
  onGoToModules?: () => void;
  onNavigateToModule?: (moduleId: string) => void;
  initialPythonCompleted?: boolean;
}

const DEFAULT_MODULES: ModuleProgressItem[] = [
  {
    id: 'python',
    num: 1,
    title: 'Python',
    subtitle: 'Build your foundation',
    icon: '/images/icons3d/icon_01_python.png',
    status: 'in_progress',
    progressPercent: 0,
  },
  {
    id: 'sql',
    num: 2,
    title: 'SQL',
    subtitle: 'Work with data',
    icon: '/images/icons3d/icon_02_sql.png',
    status: 'locked',
    progressPercent: 0,
  },
  {
    id: 'excel',
    num: 3,
    title: 'Excel',
    subtitle: 'Analyze & solve',
    icon: '/images/icons3d/icon_03_excel.png',
    status: 'locked',
    progressPercent: 0,
  },
  {
    id: 'powerbi',
    num: 4,
    title: 'Power BI',
    subtitle: 'Create dashboards',
    icon: '/images/icons3d/icon_04_powerbi.png',
    status: 'locked',
    progressPercent: 0,
  },
  {
    id: 'statistics',
    num: 5,
    title: 'Statistics',
    subtitle: 'Understand data',
    icon: '/images/icons3d/icon_05_stats.png',
    status: 'locked',
    progressPercent: 0,
  },
  {
    id: 'genai',
    num: 6,
    title: 'GenAI',
    subtitle: 'Explore AI tools',
    icon: '/images/icons3d/icon_06_genai.png',
    status: 'locked',
    progressPercent: 0,
  },
];

export const LearningModulesProgressModal: React.FC<LearningModulesProgressModalProps> = ({
  isOpen,
  onClose,
  targetFeature = 'Placement',
  onGoToModules,
  onNavigateToModule,
  initialPythonCompleted = true,
}) => {
  const [modulesList, setModulesList] = useState<ModuleProgressItem[]>(() => {
    return DEFAULT_MODULES.map((m) =>
      m.id === 'python'
        ? {
            ...m,
            status: (initialPythonCompleted ? 'completed' : 'in_progress') as 'completed' | 'in_progress',
            progressPercent: initialPythonCompleted ? 100 : 0,
          }
        : m
    );
  });

  // Sound and animated entrance on open
  useEffect(() => {
    if (isOpen) {
      try {
        soundEffects.playDiscovery();
      } catch (e) {
        // audio policy fallback
      }

      // Celebratory sparkle confetti burst
      try {
        confetti({
          particleCount: 26,
          spread: 60,
          origin: { y: 0.32 },
          colors: ['#0284c7', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'],
          disableForReducedMotion: true,
        });
      } catch (e) {
        // ignore
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const completedCount = modulesList.filter((m) => m.status === 'completed').length;
  const overallPercent = Math.round((completedCount / 6) * 100);
  const allCompleted = completedCount === 6;

  const handleCtaClick = () => {
    soundEffects.playClick();
    onClose();
    if (onGoToModules) {
      onGoToModules();
    }
  };

  const handleCardClick = (mod: ModuleProgressItem) => {
    soundEffects.playClick();
    if (onNavigateToModule) {
      onClose();
      onNavigateToModule(mod.id);
    }
  };

  return (
    <div className="lmp-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lmp-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Animated Close Button */}
        <button
          className="lmp-close-btn"
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Top Header Section (1:1 with media_1791559094366.jpg) ── */}
        <div className="lmp-header-row">
          {/* Top Left: Single Clean Logo & Headlines (NO repetition) */}
          <div className="lmp-header-text">
            <div className="lmp-brand-badge">
              {/* Colorful Gradient 'F' Logo Mark */}
              <div className="lmp-brand-f-emblem">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M6 5C6 3.89543 6.89543 3 8 3H22C24.2091 3 26 4.79086 26 7C26 8.44141 25.2413 9.7042 24.1132 10.4079L13.8 13.5V16.5H20C21.6569 16.5 23 17.8431 23 19.5C23 21.1569 21.6569 22.5 20 22.5H13.8V29H7.5C6.67157 29 6 28.3284 6 27.5V5Z"
                    fill="url(#lmpRainbowGrad)"
                  />
                  <defs>
                    <linearGradient id="lmpRainbowGrad" x1="6" y1="3" x2="26" y2="29" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="35%" stopColor="#3b82f6" />
                      <stop offset="68%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="lmp-brand-info">
                <span className="lmp-brand-name">FUTURE IT INDUSTRY</span>
                <span className="lmp-brand-tagline">Learn Today, Earn Tomorrow</span>
              </div>
            </div>

            <h2 className="lmp-headline">
              <span className="lmp-blue-highlight">Complete All 6</span> Learning Modules
            </h2>
            <p className="lmp-subheadline">
              to Unlock Your <span className="lmp-pink-highlight">Internship, Certificate &amp; Placement</span>
            </p>
          </div>

          {/* Center/Right: 3D Robot Mascot & Badges Stack */}
          <div className="lmp-header-visual">
            <div className="lmp-robot-box">
              <img
                src="/images/popup_robot_graduate.jpg"
                alt="Graduate Robot Mascot"
                className="lmp-robot-img"
              />
            </div>

            <div className="lmp-feature-pills-stack">
              {/* Blue Capsule: INTERNSHIP */}
              <div className={`lmp-feat-pill pill-internship ${targetFeature === 'Internship' ? 'active-target' : ''}`}>
                <div className="lmp-pill-icon-box">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <span>INTERNSHIP</span>
              </div>

              {/* Gold Capsule: CERTIFICATE */}
              <div className={`lmp-feat-pill pill-cert ${targetFeature === 'Certificate' ? 'active-target' : ''}`}>
                <div className="lmp-pill-icon-box">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>CERTIFICATE</span>
              </div>

              {/* Coral Capsule: PLACEMENT */}
              <div className={`lmp-feat-pill pill-placement ${targetFeature === 'Placement' ? 'active-target' : ''}`}>
                <div className="lmp-pill-icon-box">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span>PLACEMENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 6 Module Cards Progression Row ── */}
        <div className="lmp-modules-section">
          <div className="lmp-modules-grid">
            {modulesList.map((mod, idx) => {
              const isCompleted = mod.status === 'completed';
              const isInProgress = mod.status === 'in_progress';
              const isLocked = mod.status === 'locked';
              const prevIsCompleted = idx > 0 && modulesList[idx - 1].status === 'completed';

              return (
                <React.Fragment key={mod.id}>
                  {/* Connector between cards (Tick ONLY between two completed modules) */}
                  {idx > 0 && (
                    <div className="lmp-connector-wrap">
                      <div className={`lmp-connector-line ${prevIsCompleted && isCompleted ? 'active' : ''}`} />
                      <div className={`lmp-connector-node ${prevIsCompleted && isCompleted ? 'node-done' : 'node-pending'}`}>
                        {prevIsCompleted && isCompleted ? (
                          <Check className="w-2.5 h-2.5 text-white" />
                        ) : (
                          <span className="lmp-connector-dot" />
                        )}
                      </div>
                      <div className={`lmp-connector-line ${prevIsCompleted && isCompleted ? 'active' : ''}`} />
                    </div>
                  )}

                  {/* Module Card */}
                  <div
                    className={`lmp-module-card ${isCompleted ? 'card-completed' : ''} ${isInProgress ? 'card-in-progress' : ''} ${isLocked ? 'card-locked' : ''}`}
                    onClick={() => handleCardClick(mod)}
                    style={{ animationDelay: `${idx * 0.04}s` }}
                  >
                    {/* Top Step Pill Badge: Green for done, Blue for in-progress, Grey for locked */}
                    <div
                      className={`lmp-card-step-badge ${isCompleted ? 'badge-completed' : isInProgress ? 'badge-in-progress' : 'badge-locked'}`}
                    >
                      {mod.num}
                    </div>

                    {/* Festive Confetti Sparks ONLY on completed module */}
                    {isCompleted && (
                      <div className="lmp-card-confetti-bg">
                        <span className="dot dot-1" />
                        <span className="dot dot-2" />
                        <span className="dot dot-3" />
                        <span className="dot dot-4" />
                      </div>
                    )}

                    {/* 3D Module Icon */}
                    <div className="lmp-card-icon-wrap">
                      <img src={mod.icon} alt={mod.title} className="lmp-card-icon-img" />
                    </div>

                    {/* Titles */}
                    <strong className="lmp-card-title">{mod.title}</strong>
                    <span className="lmp-card-sub">{mod.subtitle}</span>

                    {/* Status Pill Button: TICK ONLY ON COMPLETED! */}
                    <div
                      className={`lmp-card-status-btn ${isCompleted ? 'btn-done' : ''} ${isInProgress ? 'btn-in-progress' : ''} ${isLocked ? 'btn-locked' : ''}`}
                    >
                      {isCompleted ? (
                        <>
                          <div className="lmp-status-check-circle">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>Completed</span>
                        </>
                      ) : isInProgress ? (
                        <>
                          <span className="lmp-status-pulse-dot" />
                          <span>In Progress</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-2.5 h-2.5 opacity-60" />
                          <span>Locked</span>
                        </>
                      )}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ── Overall Learning Progress Bar ── */}
        <div className="lmp-progress-block">
          <div className="lmp-progress-meta-row">
            <span className="lmp-progress-label">Overall Learning Progress</span>
            <div className="lmp-progress-stats">
              <span className="lmp-progress-count">{completedCount} of 6 modules completed</span>
              <strong className="lmp-progress-pct">{overallPercent}%</strong>
            </div>
          </div>

          <div className="lmp-progress-track">
            <div
              className="lmp-progress-fill"
              style={{ width: `${Math.max(overallPercent, 12)}%` }}
            />
          </div>
        </div>

        {/* ── Bottom Gift Box & Benefits Banner ── */}
        <div className="lmp-bottom-banner">
          {/* 3D Gift Box Graphic with Golden Bow */}
          <div className="lmp-gift-wrap">
            <img
              src="/images/popup_gift_box.jpg"
              alt="Unlock Rewards Gift"
              className="lmp-gift-img"
            />
          </div>

          {/* Central Callout Message */}
          <div className="lmp-congrats-text">
            <div className="lmp-congrats-eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 inline mr-1" />
              <span>
                {allCompleted
                  ? '🎉 Congratulations!'
                  : completedCount > 0
                    ? '🎯 Great Progress!'
                    : '🚀 Start Your Journey!'}
              </span>
            </div>
            <h4 className="lmp-congrats-heading">
              {allCompleted ? (
                <>
                  You're Ready to Unlock Your{' '}
                  <span className="lmp-pink-callout">Internship, Certificate &amp; Placement!</span>
                </>
              ) : (
                <>
                  Complete all 6 modules to unlock your{' '}
                  <span className="lmp-pink-callout">Internship, Certificate &amp; Placement!</span>
                </>
              )}
            </h4>
          </div>

          {/* 3 Reward Feature Cards */}
          <div className="lmp-benefits-grid">
            <div className="lmp-benefit-item">
              <div className="lmp-benefit-icon-box bg-sky-50 text-sky-600 border border-sky-100">
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <span className="lmp-benefit-label">Get Internship Opportunities</span>
            </div>

            <div className="lmp-benefit-item">
              <div className="lmp-benefit-icon-box bg-purple-50 text-purple-600 border border-purple-100">
                <Award className="w-3.5 h-3.5" />
              </div>
              <span className="lmp-benefit-label">Earn Course Certificate</span>
            </div>

            <div className="lmp-benefit-item">
              <div className="lmp-benefit-icon-box bg-rose-50 text-rose-600 border border-rose-100">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <span className="lmp-benefit-label">Be Job-Ready for Better Placements</span>
            </div>
          </div>
        </div>

        {/* ── Bottom Main CTA Button ── */}
        <div className="lmp-footer-cta-row">
          <button className="lmp-primary-cta" onClick={handleCtaClick}>
            <span>
              {allCompleted
                ? 'Continue to Claim Your Rewards'
                : 'Continue to Your Learning Modules'}
            </span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
