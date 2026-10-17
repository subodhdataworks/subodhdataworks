import React from 'react';
import './IndustryCertificationsSection.css';
import { 
  Award, 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Laptop, 
  Play 
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

interface IndustryCertificationsSectionProps {
  onExploreTracks?: () => void;
  onWatchRecording?: () => void;
}

export const IndustryCertificationsSection: React.FC<IndustryCertificationsSectionProps> = ({
  onExploreTracks,
  onWatchRecording,
}) => {
  const { playHover, playClick } = useThemeAccent();

  return (
    <section className="cert-section-wrapper" id="certifications">
      <div className="cert-banner-card">
        
        {/* ================= 1. LEFT COLUMN: TEXT & CTA ================= */}
        <div className="cert-left-content">
          
          {/* Eyebrow Badge (1:1 with media_1790580710342.png) */}
          <div className="cert-eyebrow-badge" onMouseEnter={playHover}>
            <Award className="w-3.5 h-3.5 text-sky-600 cert-badge-icon" />
            <span className="cert-eyebrow-text">INDUSTRY-RECOGNIZED CERTIFICATIONS</span>
          </div>

          {/* Main Headline */}
          <h2 className="cert-headline">
            <span className="cert-headline-top">Get Certified by</span>
            <span className="cert-headline-brands">
              <span className="brand-ibm">IBM &amp; </span>
              <span className="brand-msft">Microsoft</span>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="cert-description">
            Boost your learning, internship chances and career opportunities with industry-recognized certificates.
          </p>

          {/* CTA Button */}
          <div className="cert-action-box">
            <button
              onClick={() => {
                playClick();
                onExploreTracks?.();
              }}
              onMouseEnter={playHover}
              className="cert-cta-btn"
            >
              <span>Explore Certification Tracks</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

        {/* ================= 2. CENTER VISUAL: 3D ROBOT ON PEDESTAL WITH CERTIFICATES ================= */}
        <div className="cert-center-visual">
          <div className="cert-img-container">
            <img 
              src="/images/cert-robot-ibm-msft.jpg" 
              alt="3D AI Robot presenting IBM and Microsoft Professional Certificates on glowing cyber pedestal" 
              className="cert-robot-image"
            />
          </div>
        </div>

        {/* ================= 3. RIGHT COLUMN: 3 HIGHLIGHTS & LIVE SESSIONS BANNER ================= */}
        <div className="cert-right-content">
          
          {/* 3 Value Proposition Columns (1:1 with reference) */}
          <div className="cert-highlights-grid">
            
            {/* Highlight 1: Industry Recognized */}
            <div className="cert-highlight-col">
              <div className="cert-highlight-icon-wrap icon-wrap-blue">
                <BookOpen className="w-5 h-5 text-sky-600" />
              </div>
              <strong className="cert-highlight-title">Industry Recognized</strong>
              <span className="cert-highlight-sub">Certificates from IBM &amp; Microsoft</span>
            </div>

            {/* Highlight 2: Boost Your Profile */}
            <div className="cert-highlight-col">
              <div className="cert-highlight-icon-wrap icon-wrap-green">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <strong className="cert-highlight-title">Boost Your Profile</strong>
              <span className="cert-highlight-sub">Helps in learning, internships &amp; jobs</span>
            </div>

            {/* Highlight 3: Recorded Sessions */}
            <div className="cert-highlight-col">
              <div className="cert-highlight-icon-wrap icon-wrap-purple">
                <Laptop className="w-5 h-5 text-indigo-600" />
              </div>
              <strong className="cert-highlight-title">Recorded Sessions</strong>
              <span className="cert-highlight-sub">Access recordings later anytime</span>
            </div>

          </div>

          {/* Bottom Live Notice Box (1:1 with reference) */}
          <div 
            className="cert-recorded-notice-box"
            onClick={() => {
              playClick();
              onWatchRecording?.();
            }}
            onMouseEnter={playHover}
          >
            <div className="recorded-play-icon-box">
              <Play className="w-3.5 h-3.5 text-sky-600 fill-current ml-0.5" />
            </div>
            <div className="recorded-notice-text">
              <strong className="recorded-notice-title">Can't attend live?</strong>
              <span className="recorded-notice-desc">Don't worry — recorded sessions will be available later.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
