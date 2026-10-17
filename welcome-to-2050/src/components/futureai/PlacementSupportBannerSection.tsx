import React, { useRef } from 'react';
import './PlacementSupportBannerSection.css';
import { 
  Users, 
  ArrowRight, 
  Play, 
  Briefcase, 
  FileCheck, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

interface PlacementSupportBannerProps {
  onStartLearning?: () => void;
  onWatchStories?: () => void;
}

export const PlacementSupportBannerSection: React.FC<PlacementSupportBannerProps> = ({
  onStartLearning,
  onWatchStories,
}) => {
  const { playHover, playClick, playCinema } = useThemeAccent();
  const marqueeRef = useRef<HTMLDivElement>(null);

  const scrollMarquee = (direction: 'left' | 'right') => {
    if (marqueeRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      marqueeRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const partnerLogos = [
    { name: 'Google', color: '#4285F4', font: 'font-semibold' },
    { name: 'Microsoft', color: '#00A4EF', font: 'font-semibold' },
    { name: 'amazon', color: '#FF9900', font: 'font-bold' },
    { name: 'IBM', color: '#0F62FE', font: 'font-extrabold tracking-wider' },
    { name: 'Infosys', color: '#007CC3', font: 'font-bold' },
    { name: 'TATA', color: '#0052CC', font: 'font-extrabold tracking-widest' },
    { name: 'accenture', color: '#A100FF', font: 'font-bold' },
    { name: 'Deloitte.', color: '#86BC25', font: 'font-bold' },
    { name: 'wipro', color: '#F36F21', font: 'font-medium' },
    { name: 'HCL', color: '#0055A5', font: 'font-extrabold' },
    { name: 'Adobe', color: '#FA0F00', font: 'font-bold' },
    { name: 'PayPal', color: '#003087', font: 'font-bold' },
    { name: 'intel', color: '#0071C5', font: 'font-bold' },
    { name: 'Capgemini', color: '#0070AD', font: 'font-semibold' },
    { name: 'cognizant', color: '#0033A0', font: 'font-semibold' },
    { name: 'ZOHO', color: '#E1251B', font: 'font-bold' },
    { name: 'zomato', color: '#CB202D', font: 'font-bold italic' },
    { name: 'Swiggy', color: '#FC8019', font: 'font-extrabold' },
    { name: 'Flipkart', color: '#2874F0', font: 'font-bold italic' },
    { name: 'OLA', color: '#00B140', font: 'font-extrabold tracking-wider' },
    { name: 'PhonePe', color: '#5F259F', font: 'font-bold' },
    { name: 'BYJU\'S', color: '#813588', font: 'font-bold' }
  ];

  return (
    <section className="placement-section-wrapper" id="placement-support">
      <div className="placement-banner-card">
        
        {/* Background Visual Plate */}
        <div className="placement-bg-layer" />

        {/* Content Layer */}
        <div className="placement-main-content">
          
          {/* ================= 1. LEFT COLUMN ================= */}
          <div className="placement-left-col">
            
            {/* Eyebrow Badge */}
            <div className="placement-eyebrow-badge" onMouseEnter={playHover}>
              <Users className="w-3.5 h-3.5 text-sky-600" />
              <span>PLACEMENT SUPPORT</span>
            </div>

            {/* Headline */}
            <h2 className="placement-title">
              <span className="placement-title-line">You Will Get Job From</span>
              <span className="placement-title-highlight">
                <span className="highlight-count">700+ </span>
                <span className="highlight-companies">Companies</span>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="placement-subtext">
              Our learners are working at top product, service-based and startup companies across India and globally.
            </p>

            {/* CTA Buttons */}
            <div className="placement-actions">
              <button
                onClick={() => {
                  playClick();
                  onStartLearning?.();
                }}
                onMouseEnter={playHover}
                className="placement-primary-btn"
              >
                <span>Start Learning Today</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={() => {
                  playCinema();
                  onWatchStories?.();
                }}
                onMouseEnter={playHover}
                className="placement-watch-btn"
              >
                <div className="placement-play-circle">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Success Stories</span>
              </button>
            </div>

          </div>

          {/* ================= 2. 4 FLOATING STAT CARDS ================= */}
          <div className="placement-stats-row">
            
            {/* Stat 1: 700+ Hiring Partners */}
            <div className="placement-stat-card" onMouseEnter={playHover}>
              <div className="stat-card-icon-wrap icon-wrap-blue">
                <Briefcase className="w-5 h-5 text-sky-600" />
              </div>
              <strong className="stat-card-number">700+</strong>
              <span className="stat-card-label">Hiring Partners</span>
            </div>

            {/* Stat 2: 6 - 15 LPA Expected Salary */}
            <div className="placement-stat-card" onMouseEnter={playHover}>
              <div className="stat-card-icon-wrap icon-wrap-cyan">
                <Users className="w-5 h-5 text-cyan-600" />
              </div>
              <strong className="stat-card-number">6 - 15 LPA</strong>
              <span className="stat-card-label">Expected Salary Range</span>
            </div>

            {/* Stat 3: Dedicated Placement Support */}
            <div className="placement-stat-card" onMouseEnter={playHover}>
              <div className="stat-card-icon-wrap icon-wrap-indigo">
                <FileCheck className="w-5 h-5 text-indigo-600" />
              </div>
              <strong className="stat-card-number">Dedicated</strong>
              <span className="stat-card-label">Placement Support</span>
            </div>

            {/* Stat 4: Resume & Interview Prep */}
            <div className="placement-stat-card" onMouseEnter={playHover}>
              <div className="stat-card-icon-wrap icon-wrap-green">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <strong className="stat-card-number">Resume &amp; Interview Prep</strong>
              <span className="stat-card-label">Till You Get Placed</span>
            </div>

          </div>

        </div>

        {/* ================= 3. BOTTOM FLOATING PARTNERS MARQUEE DOCK ================= */}
        <div className="placement-partners-dock">
          
          <button 
            className="marquee-nav-btn prev-btn" 
            onClick={() => scrollMarquee('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-slate-500" />
          </button>

          <div className="marquee-scroll-container" ref={marqueeRef}>
            <div className="marquee-track">
              {partnerLogos.concat(partnerLogos).map((company, index) => (
                <div key={index} className="partner-logo-item" title={company.name}>
                  <span 
                    className={`partner-brand-text ${company.font}`}
                    style={{ color: company.color }}
                  >
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="marquee-nav-btn next-btn" 
            onClick={() => scrollMarquee('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </button>

        </div>

      </div>
    </section>
  );
};
