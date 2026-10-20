import React, { useRef, useEffect, useState } from 'react';
import './HeroReference.css';
import {
  Play,
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  Code,
  Users,
  Briefcase,
  ListChecks,
  Star,
  Sparkles,
  Award,
  FileCheck2
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

// Configurable Video URLs
export const HERO_VIDEO_DRIVE_URL = 'https://drive.google.com/file/d/1cLoi9CNdYvgzq4PQFTWJS3joCSnAXMbo/view?usp=sharing';
export const HERO_VIDEO_DIRECT_URL = 'https://drive.google.com/uc?export=download&id=1cLoi9CNdYvgzq4PQFTWJS3joCSnAXMbo';
export const HERO_VIDEO_LOCAL_FALLBACK = '/videos/hero_background.mp4';
export const HERO_VIDEO_POSTER = '/images/hero_video_poster.jpg';

// Configurable Badge Text
export const WORLD_FIRST_BADGE_TITLE = "WORLD'S FIRST";
export const WORLD_FIRST_BADGE_SUB = "Game Learning Platform";

interface HeroReferenceProps {
  onStartJourney: () => void;
  onWatchVideo: () => void;
  onOpenAtsChecker?: () => void;
  onPayAfterPlacementClick?: () => void;
  onSelectSkill?: (skill: string) => void;
  isLoggedIn?: boolean;
}

export const HeroReference: React.FC<HeroReferenceProps> = ({
  onStartJourney: _onStartJourney,
  onWatchVideo,
  onOpenAtsChecker,
  isLoggedIn: _isLoggedIn = false,
}) => {
  const { playHover, playClick, playCinema } = useThemeAccent();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Attempt autoplay immediately
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until user gesture, poster displays gracefully
      });
    }
  }, []);

  // Continuous Typewriter effect for "Get Your Dream Job."
  const targetHeadline = "Get Your Dream Job.";
  const [typedText, setTypedText] = useState("Get Your Dream Job.");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(targetHeadline.length);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIndex <= targetHeadline.length) {
      setTypedText(targetHeadline.slice(0, charIndex));
      if (charIndex === targetHeadline.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3200);
      } else {
        timeout = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, 90);
      }
    } else if (isDeleting && charIndex >= 0) {
      setTypedText(targetHeadline.slice(0, charIndex));
      if (charIndex === 0) {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 450);
      } else {
        timeout = setTimeout(() => {
          setCharIndex(prev => prev - 1);
        }, 40);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, targetHeadline]);

  const learningJourneyItems = [
    {
      id: 'smart-video',
      icon: (
        <div className="journey-icon-img-wrap">
          <img src="/images/icon_smart_video.png" alt="Smart Video" className="journey-pill-icon-img" />
        </div>
      ),
      title: 'Smart Video',
      subtitle: 'Learn Step-by-Step'
    },
    {
      id: 'mcq-practice',
      icon: (
        <div className="journey-icon-img-wrap">
          <img src="/images/icon_mcq.png" alt="MCQ Practice" className="journey-pill-icon-img" />
        </div>
      ),
      title: 'MCQ Practice',
      subtitle: 'Test & Improve'
    },
    {
      id: 'play-game',
      icon: (
        <div className="journey-icon-img-wrap">
          <img src="/images/icon_game.png" alt="Play Game" className="journey-pill-icon-img" />
        </div>
      ),
      title: 'Play Game',
      subtitle: 'Learn with Fun'
    },
    {
      id: 'practice-code',
      icon: (
        <div className="journey-icon-img-wrap">
          <img src="/images/icon_code.png" alt="Practice Code" className="journey-pill-icon-img" />
        </div>
      ),
      title: 'Practice Code',
      subtitle: 'Write & Solve'
    },
    {
      id: 'mock-interview',
      icon: (
        <div className="journey-icon-img-wrap">
          <img src="/images/icon_smart_video.png" alt="Mock Interview" className="journey-pill-icon-img" />
        </div>
      ),
      title: 'Mock Interview',
      subtitle: 'Real Questions'
    },
    {
      id: 'get-job',
      icon: (
        <div className="journey-icon-img-wrap get-job-icon">
          <span className="journey-job-emoji">💼</span>
        </div>
      ),
      title: 'Get Job',
      subtitle: '6 LPA → 15 LPA'
    }
  ];

  return (
    <section id="hero" className="hero-2050-section" aria-label="Future.AI Hero">
      
      {/* ── BACKGROUND VIDEO CONTAINER ── */}
      <div className="hero-bg-video-wrapper hidden md:block">
        <video
          ref={videoRef}
          className={`hero-bg-video ${videoLoaded ? 'loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_VIDEO_POSTER}
          aria-hidden="true"
          onLoadedData={() => setVideoLoaded(true)}
        >
          {/* Local ultra-fast 1080p stream */}
          <source src={HERO_VIDEO_LOCAL_FALLBACK} type="video/mp4" />
          {/* Direct Google Drive stream link */}
          <source src={HERO_VIDEO_DIRECT_URL} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Subtle Gradient Overlay: Keeps text 100% readable while student/robot/dashboard remain vibrant */}
        <div className="hero-video-gradient-overlay" />
      </div>

      {/* ── MAIN CONTENT CONTAINER (LEFT 40-45%) ── */}
      <div className="hero-2050-container">
        <div className="hero-2050-content">
          
          {/* 1. World First Game Learning Platform Badge & Shifted 1-Min Tour Video */}
          <div className="hero-badge-wrap">
            <div className="hero-world-first-badge" onMouseEnter={playHover}>
              <img
                src="/images/worlds_first_badge.png"
                alt="World's First Game Learning Platform"
                className="hero-badge-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = document.getElementById('badge-svg-fallback');
                  if (fallback) fallback.style.display = 'inline-flex';
                }}
              />

              {/* Accessible and Configurable Fallback */}
              <div id="badge-svg-fallback" className="hero-badge-fallback">
                <span className="badge-crown">👑</span>
                <div className="badge-text-group">
                  <span className="badge-top-title">{WORLD_FIRST_BADGE_TITLE}</span>
                  <span className="badge-sub-title">{WORLD_FIRST_BADGE_SUB}</span>
                </div>
                <Gamepad2 className="w-4 h-4 text-sky-400 ml-1" />
              </div>
                        </div>


            {/* Shifted Watch 1-Min Tour to an attractive header spot */}
            <button
              onClick={() => {
                playCinema();
                onWatchVideo();
              }}
              onMouseEnter={playHover}
              className="hero-header-tour-btn"
              aria-label="Watch 1-Min Tour"
            >
              <div className="tour-play-circle-small">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-blue-600" />
              </div>
              <span>Watch 1-Min Tour</span>
              <span className="tour-badge-pill">VIDEO</span>
            </button>
                    </div>

          {/* 1B. Value Banner: "Learn. Practice. Build. Get Placed. No Need to Spend ₹2 Lakh" */}
          <div
            onClick={() => {
              playClick();
              if (typeof window !== 'undefined') {
                window.location.hash = '#courses';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="hero-top-guarantee-banner w-full max-w-[440px] cursor-pointer active:scale-[0.98] transition-transform select-none rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-amber-200/60"
            title="Learn. Practice. Build. Get Placed."
          >
            <img
              src="/images/banner_learn_practice_get_placed.png"
              alt="Learn. Practice. Build. Get Placed. No Need to Spend ₹2 Lakh"
              className="w-full h-auto block rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* 2. Main Headline */}
          <h1 className="hero-2050-headline">
            <span className="headline-gradient">Play Coding Games. 🎮</span>
            <span className="headline-dark">Build Real Skills. 🚀</span>
            <span className="headline-dream-job-wrap">
              <span className="headline-dream-job-animated">{typedText || '\u00A0'}</span>
              <span className="headline-typewriter-caret">|</span>
              <span className="headline-dream-job-emoji">💼</span>
            </span>
          </h1>

          {/* 3. Description */}
          <p className="hero-2050-description">
            Master Python, SQL, Excel, Power BI &amp; Statistics with AI-powered learning,
            real projects, games, coding practice and mock interviews — all in one platform.
          </p>

          {/* 4. Six Learning Journey Feature Pills */}
          <div className="hero-journey-pills-row">
            {learningJourneyItems.map(item => (
              <div key={item.id} className="journey-pill-card" onMouseEnter={playHover}>
                {item.icon}
                <div className="journey-pill-text">
                  <strong className="journey-pill-title">{item.title}</strong>
                  <span className="journey-pill-sub">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 5. CTA Buttons Row */}
          <div className="hero-cta-buttons-row">
            {/* ── 1. PRIMARY HIGH-CONVERTING "START YOUR JOURNEY TODAY" BUTTON (PREMIUM 3D YELLOW) ── */}
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
              {/* India's Most Affordable AI Learning Platform Badge Directly Above Button */}
              <div className="hero-cta-affordable-pill mb-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-200 border border-amber-300/90 shadow-xs">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-2xs">🇮🇳</span>
                <span className="text-[11px] sm:text-xs font-black text-amber-950 tracking-tight leading-none">
                  India's Most Affordable AI Learning Platform
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
              </div>

              <div className="hero-3d-btn-wrap hero-get-started-wrap w-full sm:w-auto">
              <span className="btn3d-get-started-aura-yellow" aria-hidden="true" />
              <button
                onClick={() => {
                  playClick();
                  _onStartJourney();
                }}
                onMouseEnter={playHover}
                className="hero-3d-game-btn hero-get-started-3d-btn"
                aria-label="Start Your Journey Today"
              >
                <span className="btn3d-shine" />
                <span className="btn3d-border-glow glow-yellow" aria-hidden="true" />
                <span className="btn3d-content btn3d-content-premium-yellow">
                  <span className="btn3d-icon-sparkle-box-yellow" aria-hidden="true">
                    <Sparkles className="w-4 h-4 text-amber-950" />
                  </span>
                  <span className="btn3d-label btn3d-label-premium-yellow">Start Your Journey Today</span>
                  <span className="btn3d-arrow-pill btn3d-arrow-pill-yellow" aria-hidden="true">
                    <ArrowRight className="btn3d-arrow w-4 h-4 text-amber-300" />
                  </span>
                </span>
                <span className="btn3d-bottom btn3d-bottom-premium-yellow" />
              </button>
            </div>
            </div>

            {/* ── 2. ANIMATED ATTENTION-GRABBING FREE ATS RESUME CHECKER CTA BUTTON ── */}
            <div className="hero-3d-btn-wrap">
              {/* Outer pulsing neon aura */}
              <span className="btn3d-ats-aura" aria-hidden="true" />

              {/* Floating Live Attention Pill Badge */}
              <span className="btn3d-ats-floating-badge" aria-hidden="true">
                <span className="btn3d-live-dot" />
                <span>⚡ 100% FREE AI SCAN</span>
              </span>

              <button
                onClick={() => {
                  playClick();
                  if (onOpenAtsChecker) {
                    onOpenAtsChecker();
                  } else if (typeof window !== 'undefined') {
                    window.location.hash = '#ats-resume-checker';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                onMouseEnter={playHover}
                className="hero-3d-game-btn hero-ats-checker-btn"
                aria-label="Free ATS Resume Checker"
              >
                <span className="btn3d-shine" />
                <span className="btn3d-border-glow glow-purple" aria-hidden="true" />
                <span className="btn3d-content btn3d-content-ats">
                  <span className="btn3d-scanner-box" aria-hidden="true">
                    <FileCheck2 className="w-4 h-4 text-white relative z-10" />
                    <span className="btn3d-laser-line" />
                  </span>
                  <span className="btn3d-label font-bold text-[15px]">Free ATS Resume Checker</span>
                  <span className="btn3d-arrow-pill" aria-hidden="true">
                    <ArrowRight className="btn3d-arrow w-4 h-4" />
                  </span>
                </span>
                <span className="btn3d-bottom btn3d-bottom-purple" />
              </button>
            </div>
          </div>

          {/* 6. Benefit Checklist Row */}
          <div className="hero-benefits-checklist">
            <div className="benefit-item">
              <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
              <span>Beginner Friendly</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
              <span>Hands-on Projects</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
              <span>Game-Based Learning</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
              <span>AI Mentor Support</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── 7. TRUSTED BY 50,000+ LEARNERS LOGOS BAR ── */}
      <div className="hero-trust-strip">
        <div className="trust-strip-inner">
          
          <div className="trust-left-group">
            <span className="trust-title">Trusted by 50,000+ Learners</span>
            <div className="trust-marquee-wrapper overflow-hidden w-full relative">
              <div className="trust-marquee-track">
                {/* 1st Loop */}
                <span className="logo-text google">Google</span>
                <span className="logo-text msft">Microsoft</span>
                <span className="logo-text amazon">amazon</span>
                <span className="logo-text deloitte">Deloitte.</span>
                <span className="logo-text accenture">accenture</span>
                <span className="logo-text tcs">TCS</span>
                <span className="logo-text infosys">Infosys</span>
                <span className="logo-text ibm">IBM</span>
                <span className="logo-text wipro">wipro</span>
                <span className="logo-text meta">Meta</span>
                {/* 2nd Loop for Seamless Infinite Marquee Scroll */}
                <span className="logo-text google">Google</span>
                <span className="logo-text msft">Microsoft</span>
                <span className="logo-text amazon">amazon</span>
                <span className="logo-text deloitte">Deloitte.</span>
                <span className="logo-text accenture">accenture</span>
                <span className="logo-text tcs">TCS</span>
                <span className="logo-text infosys">Infosys</span>
                <span className="logo-text ibm">IBM</span>
                <span className="logo-text wipro">wipro</span>
                <span className="logo-text meta">Meta</span>
              </div>
            </div>
          </div>

          <div className="trust-metrics-group">
            <div className="trust-metric-pill">
              <Users className="w-4 h-4 text-blue-600" />
              <div>
                <strong>50K+</strong>
                <span>Learners</span>
              </div>
            </div>

            <div className="trust-metric-pill">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <div>
                <strong>4.8/5</strong>
                <span>Student Rating</span>
              </div>
            </div>

            <div className="trust-metric-pill">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <div>
                <strong>Industry</strong>
                <span>Relevant Curriculum</span>
              </div>
            </div>

            <div className="trust-metric-pill">
              <Award className="w-4 h-4 text-blue-600" />
              <div>
                <strong>Career</strong>
                <span>Support</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
