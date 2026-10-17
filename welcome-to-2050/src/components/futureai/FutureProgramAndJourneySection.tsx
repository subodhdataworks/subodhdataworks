import React from 'react';
import './FutureProgramAndJourneySection.css';
import { 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Wallet, 
  Briefcase, 
  CheckCircle2, 
  Zap, 
  Activity, 
  Sparkles, 
  Database, 
  Wrench, 
  MessageSquare,
  FileText,
  Laptop,
  FolderGit2,
  Users,
  IndianRupee
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

interface FutureProgramAndJourneyProps {
  onStartJourney: () => void;
  onWatchVideo: () => void;
  onExploreCurriculum: () => void;
}

export const FutureProgramAndJourneySection: React.FC<FutureProgramAndJourneyProps> = ({
  onStartJourney,
  onWatchVideo,
  onExploreCurriculum,
}) => {
  const { playHover, playClick, playCinema } = useThemeAccent();

  return (
    <section className="fpj-section-wrapper" id="pay-after-placement">
      <div className="fpj-container">
        
        {/* =========================================================================
            ROW 1: TWO SIDE-BY-SIDE LARGE CARDS (1:1 with media_1790581785404.jpg)
            ========================================================================= */}
        <div className="fpj-cards-grid">
          
          {/* ---------------- CARD A (LEFT): PAY AFTER PLACEMENT ---------------- */}
          <div className="fpj-card fpj-card-pap">
            
            {/* Background Photographic Plate */}
            <div className="card-pap-bg-layer" />

            {/* Left Column Content */}
            <div className="card-pap-content">
              
              {/* Eyebrow Badge */}
              <div className="card-pap-badge" onMouseEnter={playHover}>
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>PAY AFTER PLACEMENT</span>
              </div>

              {/* Main Headline */}
              <h2 className="card-pap-title">
                <span className="title-because">Because</span>
                <span className="title-success-gradient">Your Success</span>
                <span className="title-matters">Matters.</span>
              </h2>

              {/* Subtitle */}
              <p className="card-pap-subtext">
                No upfront fees for eligible learners.<br />
                Pay only when you get placed in a job.
              </p>

              {/* Two Floating Pricing Cards */}
              <div className="card-pap-pricing-row">
                
                {/* Price Box 1: ₹999 */}
                <div className="pap-price-box">
                  <div className="pap-price-icon-wrap bg-sky-100 text-sky-600">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div className="pap-price-info">
                    <strong className="pap-price-amount">₹999</strong>
                    <span className="pap-price-label">Enrollment Payment</span>
                    <span className="pap-price-note">to start learning</span>
                  </div>
                </div>

                {/* Price Box 2: ₹18,000 */}
                <div className="pap-price-box">
                  <div className="pap-price-icon-wrap bg-emerald-100 text-emerald-600">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="pap-price-info">
                    <strong className="pap-price-amount">₹18,000</strong>
                    <span className="pap-price-label">After you get job</span>
                    <span className="pap-price-note">(Easy installments)</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="card-pap-actions">
                <button
                  onClick={() => {
                    playClick();
                    onStartJourney();
                  }}
                  onMouseEnter={playHover}
                  className="pap-primary-btn"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>

                <button
                  onClick={() => {
                    playCinema();
                    onWatchVideo();
                  }}
                  onMouseEnter={playHover}
                  className="pap-watch-btn"
                >
                  <div className="pap-play-circle">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span>Watch Video</span>
                </button>
              </div>

            </div>

            {/* Right Side Floating Holographic Badges (Over Student) */}
            <div className="card-pap-holograms">
              
              {/* Job Offer Badge */}
              <div className="pap-holo-job-offer">
                <div className="job-offer-icon">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="job-offer-text">
                  <strong className="job-offer-title">Job Offer</strong>
                  <span className="job-offer-sub">Congratulations!</span>
                </div>
              </div>

              {/* Checklist Card */}
              <div className="pap-holo-checklist">
                <div className="checklist-item">
                  <span className="checklist-cyan-tick">✓</span>
                  <span>Learn In-Demand Skills</span>
                </div>
                <div className="checklist-item">
                  <span className="checklist-cyan-tick">✓</span>
                  <span>Work on Real Projects</span>
                </div>
                <div className="checklist-item">
                  <span className="checklist-cyan-tick">✓</span>
                  <span>Get Interview Ready</span>
                </div>
                <div className="checklist-item">
                  <span className="checklist-cyan-tick">✓</span>
                  <span>Land Your Dream Job</span>
                </div>
              </div>

              {/* Script Caption with Dotted Arrow */}
              <div className="pap-holo-arrow-script">
                <span>From Learning to a Better Career</span>
              </div>

            </div>

          </div>

          {/* ---------------- CARD B (RIGHT): PROGRAM HIGHLIGHTS ---------------- */}
          <div className="fpj-card fpj-card-highlights" id="program-highlights">
            
            {/* Top Eyebrow Badges Row */}
            <div className="fpj-highlights-top-row">
              <div className="highlights-eyebrow-badge" onMouseEnter={playHover}>
                <Zap className="w-3.5 h-3.5 text-sky-600" />
                <span>PROGRAM HIGHLIGHTS</span>
              </div>
              <div className="studio-pill-tag">
                <Activity className="w-3.5 h-3.5 text-slate-500" />
                <span>2050 GenAI Learning Studio</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="fpj-highlights-title">
              <span>Data Analyst with </span>
              <span className="title-genai-gradient">GenAI</span>
            </h2>

            {/* Subtitle */}
            <p className="fpj-highlights-subtext">
              A complete, job-focused program designed by industry experts to make you job-ready.
            </p>

            {/* 4 Feature Badges Row */}
            <div className="fpj-feature-pills-row">
              <div className="feature-pill pill-purple">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <div className="pill-text-wrap">
                  <strong>AI-Powered</strong>
                  <span>Learning</span>
                </div>
              </div>
              <div className="feature-pill pill-cyan">
                <Database className="w-3.5 h-3.5 text-cyan-600" />
                <div className="pill-text-wrap">
                  <strong>Real-World</strong>
                  <span>Projects</span>
                </div>
              </div>
              <div className="feature-pill pill-blue">
                <Wrench className="w-3.5 h-3.5 text-blue-600" />
                <div className="pill-text-wrap">
                  <strong>Industry</strong>
                  <span>Tools</span>
                </div>
              </div>
              <div className="feature-pill pill-violet">
                <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                <div className="pill-text-wrap">
                  <strong>Interview</strong>
                  <span>Preparation</span>
                </div>
              </div>
            </div>

            {/* Studio Video / Visual Box */}
            <div className="fpj-studio-video-box">
              <img 
                src="/images/studio-student-robot-card.jpg" 
                alt="Student coding with 3D AI Robot in GenAI analytics studio"
                className="studio-video-bg-img" 
              />

              {/* Glowing Center Play Button */}
              <div 
                className="studio-center-play-btn"
                onClick={() => {
                  playCinema();
                  onWatchVideo();
                }}
              >
                <div className="studio-play-circle">
                  <Play className="w-6 h-6 text-sky-600 fill-current ml-1" />
                </div>
              </div>

              {/* Floating Top Right Tech Stack */}
              <div className="studio-holo-tech-chips">
                <div className="studio-tech-chip">
                  <span className="tech-chip-icon">🐍</span>
                  <span>Python</span>
                </div>
                <div className="studio-tech-chip">
                  <span className="tech-chip-icon">🗄️</span>
                  <span>SQL</span>
                </div>
                <div className="studio-tech-chip">
                  <span className="tech-chip-icon">📊</span>
                  <span>Power BI</span>
                </div>
                <div className="studio-tech-chip">
                  <span className="tech-chip-icon">🤖</span>
                  <span>GenAI</span>
                </div>
              </div>

              {/* Floating Bottom Right Checklist */}
              <div className="studio-holo-checklist">
                <div className="studio-check-row">
                  <span className="studio-check-tick">✓</span>
                  <span>Data Cleaning</span>
                </div>
                <div className="studio-check-row">
                  <span className="studio-check-tick">✓</span>
                  <span>Data Visualization</span>
                </div>
                <div className="studio-check-row">
                  <span className="studio-check-tick">✓</span>
                  <span>Dashboard Building</span>
                </div>
                <div className="studio-check-row">
                  <span className="studio-check-tick">✓</span>
                  <span>GenAI for Analysis</span>
                </div>
                <div className="studio-check-row">
                  <span className="studio-check-tick">✓</span>
                  <span>Real-World Projects</span>
                </div>
              </div>

              {/* Floating Bottom Left Overview Button */}
              <button 
                className="studio-overview-btn"
                onClick={() => {
                  playCinema();
                  onWatchVideo();
                }}
              >
                <Play className="w-3 h-3 fill-current ml-0.5" />
                <span>Watch Program Overview</span>
              </button>

            </div>

          </div>

        </div>

        {/* =========================================================================
            ROW 2: "YOUR JOURNEY WITH FUTURE.AI" (1:1 with media_1790581785404.jpg)
            6-Step Connected Visual Roadmap with Undulating Cyan Wave Line
            ========================================================================= */}
        <div className="fpj-journey-card" id="career-journey">
          
          {/* Header Row (No dividing border line) */}
          <div className="fpj-journey-header">
            <h3 className="fpj-journey-title">
              <span>Your Journey with </span>
              <span className="title-future-blue">FUTURE IT INDUSTRY</span>
            </h3>
            <span className="fpj-journey-sub">A simple, transparent path to a brighter career.</span>
          </div>

          {/* Connected Steps Track with Background Cyan Wave */}
          <div className="fpj-steps-container">
            
            {/* Background Undulating Cyan Wave SVG */}
            <svg className="fpj-steps-wave-svg" viewBox="0 0 1000 40" preserveAspectRatio="none" fill="none">
              <path 
                d="M 15 22 C 100 8, 170 32, 260 22 C 350 8, 420 32, 510 22 C 600 8, 670 32, 760 22 C 850 8, 920 32, 985 22" 
                stroke="#bae6fd" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />
            </svg>

            <div className="fpj-steps-track">
              
              {/* Step 1: Enroll */}
              <div className="journey-step-col">
                <div className="step-icon-row">
                  <span className="step-num-circle num-blue">1</span>
                  <div className="step-icon-circle icon-blue">
                    <FileText className="w-5 h-5 text-sky-600" />
                  </div>
                </div>
                <div className="step-text-wrap">
                  <strong className="step-title">Enroll</strong>
                  <span className="step-desc">Start with just</span>
                  <strong className="step-val-black">₹999</strong>
                </div>
              </div>

              {/* Chevron 1 -> 2 */}
              <div className="journey-chevron-wrap">
                <span>›</span>
              </div>

              {/* Step 2: Learn */}
              <div className="journey-step-col">
                <div className="step-icon-row">
                  <span className="step-num-circle num-purple">2</span>
                  <div className="step-icon-circle icon-purple">
                    <Laptop className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="step-text-wrap">
                  <strong className="step-title">Learn</strong>
                  <span className="step-desc">Gain in-demand</span>
                  <span className="step-desc">skills with <strong className="text-sky-600 font-bold">GenAI</strong></span>
                </div>
              </div>

              {/* Chevron 2 -> 3 */}
              <div className="journey-chevron-wrap">
                <span>›</span>
              </div>

              {/* Step 3: Build */}
              <div className="journey-step-col">
                <div className="step-icon-row">
                  <span className="step-num-circle num-teal">3</span>
                  <div className="step-icon-circle icon-teal">
                    <FolderGit2 className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <div className="step-text-wrap">
                  <strong className="step-title">Build</strong>
                  <span className="step-desc">Work on real projects</span>
                  <span className="step-desc">and create a portfolio</span>
                </div>
              </div>

              {/* Chevron 3 -> 4 */}
              <div className="journey-chevron-wrap">
                <span>›</span>
              </div>

              {/* Step 4: Interview & Job Support */}
              <div className="journey-step-col">
                <div className="step-icon-row">
                  <span className="step-num-circle num-orange">4</span>
                  <div className="step-icon-circle icon-orange">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
                <div className="step-text-wrap">
                  <strong className="step-title">Interview &amp; Job Support</strong>
                  <span className="step-desc">Get mock interviews,</span>
                  <span className="step-desc">resume support and guidance</span>
                </div>
              </div>

              {/* Chevron 4 -> 5 */}
              <div className="journey-chevron-wrap">
                <span>›</span>
              </div>

              {/* Step 5: Get a Job */}
              <div className="journey-step-col">
                <div className="step-icon-row">
                  <span className="step-num-circle num-green">5</span>
                  <div className="step-icon-circle icon-green">
                    <Briefcase className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
                <div className="step-text-wrap">
                  <strong className="step-title">Get a Job</strong>
                  <span className="step-desc">Start your career with</span>
                  <strong className="step-val-blue">6 LPA to 15 LPA</strong>
                </div>
              </div>

              {/* Chevron 5 -> 6 */}
              <div className="journey-chevron-wrap">
                <span>›</span>
              </div>

              {/* Step 6: Pay After Placement */}
              <div className="journey-step-col">
                <div className="step-icon-row">
                  <span className="step-num-circle num-emerald">6</span>
                  <div className="step-icon-circle icon-emerald">
                    <IndianRupee className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <div className="step-text-wrap">
                  <strong className="step-title">Pay After Placement</strong>
                  <strong className="step-val-large-blue">₹18,000</strong>
                  <span className="step-desc-small">(Only after you get job)</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
