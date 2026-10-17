import React, { useState } from 'react';
import './FuturePlanAndFaqSection.css';
import { 
  ArrowRight, 
  PhoneCall, 
  ChevronDown, 
  Rocket,
  Users,
  CheckCircle2,
  Handshake,
  Star
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

interface FuturePlanAndFaqSectionProps {
  onStartJourney: () => void;
  onTalkToAdvisor: () => void;
}

export const FuturePlanAndFaqSection: React.FC<FuturePlanAndFaqSectionProps> = ({
  onStartJourney,
  onTalkToAdvisor,
}) => {
  const { playHover, playClick } = useThemeAccent();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the eligibility for this program?',
      a: 'Graduates, current college students (any stream or background), and working professionals looking to transition into data analytics and AI. No prior coding experience is required.',
    },
    {
      q: 'How does the payment after placement work?',
      a: 'Start with just ₹987 enrollment to begin learning. You pay the remaining ₹18,000 only after you receive an eligible job offer letter, payable in easy monthly installments.',
    },
    {
      q: 'Will I get a certificate?',
      a: 'Yes, you will receive an industry-recognized certification upon completing the curriculum, hands-on projects, and internship simulation.',
    },
    {
      q: 'Do you provide placement support?',
      a: 'Yes, full 1-on-1 placement support is provided including AI mock interviews, resume optimization, portfolio reviews, and direct referrals to 700+ hiring partners.',
    },
    {
      q: 'Can I switch my career to Data Analyst with no prior experience?',
      a: 'Absolutely. Our curriculum starts from absolute fundamentals and takes you step-by-step through SQL, Excel, Python, Power BI, and GenAI.',
    },
  ];

  return (
    <section id="future-plan" className="future-hero-plan-section scroll-mt-24">
      <div id="faq-section" className="absolute -top-24" />
      
      {/* Soft localized backdrop behind left text for perfect legibility without washing out center robot */}
      <div className="hero-plan-left-glow" />

      {/* Script Callout directly positioned above center robot */}
      <div className="hero-script-callout">
        <div className="script-text">
          <span>Learn</span>
          <span>Build</span>
          <span>Practice</span>
          <span>Get Hired</span>
        </div>
        <svg className="script-arrow" width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 3C18 7 28 17 26 29C25 34 21 37 17 38M17 38L23 35M17 38L20 41" stroke="#0284c7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="hero-plan-container">
        
        {/* ================= 1. MAIN 3-COLUMN CONTENT GRID ================= */}
        <div className="hero-plan-main-grid">

          {/* LEFT COLUMN: BADGE + HEADLINE + SUBTITLE + BUTTONS */}
          <div className="hero-plan-left-col">
            
            {/* 2050 Career Acceleration Pill Badge */}
            <div className="plan-badge">
              <Rocket className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>2050 CAREER ACCELERATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="plan-heading">
              Your Future<br />
              Is Not a Dream.<br />
              <span className="plan-highlight">It's a Plan.</span>
            </h1>

            {/* Subtitle */}
            <p className="plan-subtitle">
              Join thousands of learners who are building brighter careers with FUTURE IT INDUSTRY.
            </p>

            {/* CTA Buttons */}
            <div className="plan-actions">
              <button
                onClick={() => {
                  playClick();
                  onStartJourney();
                }}
                onMouseEnter={playHover}
                className="btn-primary-journey"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  playClick();
                  onTalkToAdvisor();
                }}
                onMouseEnter={playHover}
                className="btn-secondary-advisor"
              >
                <PhoneCall className="w-4 h-4 text-[#0284c7]" />
                <span>Talk to an Advisor</span>
              </button>
            </div>
          </div>

          {/* CENTER SPACER: ALLOWS 3D AI ROBOT ON THE BACKGROUND TO SHINE THROUGH */}
          <div className="hero-plan-center-col" aria-hidden="true" />

          {/* RIGHT COLUMN: INTERACTIVE FAQ CARD */}
          <div className="hero-plan-right-col">
            <div className="faq-card-container">
              
              <div className="faq-card-header">
                <h3>Frequently Asked Questions</h3>
                <p>Got questions? We've got answers.</p>
              </div>

              <div className="faq-list">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index}
                      className={`faq-item ${isOpen ? 'faq-open' : ''}`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="faq-trigger"
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question-text">{faq.q}</span>
                        <ChevronDown className={`faq-icon-chevron ${isOpen ? 'rotate-180 text-[#0284c7]' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="faq-answer animate-fadeIn">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

        {/* ================= 2. BOTTOM 4-METRICS FLOATING PILL BAR ================= */}
        <div className="hero-metrics-bar">
          
          {/* Metric 1 */}
          <div className="metric-col">
            <div className="metric-icon-box bg-blue-solid">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="metric-text">
              <strong>50K+</strong>
              <span>Active Learners</span>
              <small>Building brighter careers</small>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="metric-col">
            <div className="metric-icon-box bg-green-solid">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div className="metric-text">
              <strong>95%</strong>
              <span>Placement Success</span>
              <small>Eligible Learners</small>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="metric-col">
            <div className="metric-icon-box bg-cyan-solid">
              <Handshake className="w-5 h-5 text-white" />
            </div>
            <div className="metric-text">
              <strong>700+</strong>
              <span>Hiring Partners</span>
              <small>Trusted by top companies</small>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="metric-col">
            <div className="metric-icon-box bg-yellow-soft">
              <Star className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
            </div>
            <div className="metric-text">
              <strong>4.8/5</strong>
              <span>Student Satisfaction</span>
              <small>Real learner reviews</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
