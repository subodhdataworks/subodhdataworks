import React, { useState } from "react";
import "./FutureAIProgramSection.css";

/* ========================================================
   Clean Vector SVG Tool Icons (Pixel-matched to Reference)
   ======================================================== */
const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8">
    <path fill="#387EB8" d="M63.5 13c-23.7 0-22.2 10.3-22.2 10.3l.1 10.7h22.6v3.2H32.4S17 35.4 17 59.2c0 23.7 13.5 22.9 13.5 22.9h8.1v-11.4s-.4-13.5 13.3-13.5h22.8v-3.2H51.8s-13.1.2-13.1-12.8c0-13 11.4-12.6 11.4-12.6h38.2s10.3.3 10.3-9.9c0-10.2-11.6-10.7-11.6-10.7H63.5zm-12.4 7c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z"/>
    <path fill="#FFE052" d="M64.5 115c23.7 0 22.2-10.3 22.2-10.3l-.1-10.7H64v-3.2h31.6s15.4 1.8 15.4-22c0-23.7-13.5-22.9-13.5-22.9h-8.1v11.4s.4 13.5-13.3 13.5H53.3v3.2h22.9s13.1-.2 13.1 12.8c0 13-11.4 12.6-11.4 12.6H39.7s-10.3-.3-10.3 9.9c0 10.2 11.6 10.7 11.6 10.7h35.1zm12.4-7c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1z"/>
  </svg>
);

const SqlIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <ellipse cx="32" cy="14" rx="20" ry="7" fill="#007ACC"/>
    <path d="M12 14v10c0 3.9 9 7 20 7s20-3.1 20-7V14" fill="#008BE3"/>
    <ellipse cx="32" cy="24" rx="20" ry="7" fill="#0098FF"/>
    <path d="M12 24v10c0 3.9 9 7 20 7s20-3.1 20-7V24" fill="#008BE3"/>
    <ellipse cx="32" cy="34" rx="20" ry="7" fill="#29B6F6"/>
    <path d="M12 34v10c0 3.9 9 7 20 7s20-3.1 20-7V34" fill="#0288D1"/>
    <ellipse cx="32" cy="44" rx="20" ry="7" fill="#007ACC"/>
    <path d="M28 20c-3 0-5 1.5-5 3.5 0 3 8 2.5 8 5.5 0 1.2-1 2-3 2s-4-1-4-2.5h-3c0 3 2.5 4.5 7 4.5s6-1.5 6-3.5c0-3-8-2.5-8-5.5 0-1 1-1.8 3-1.8s3.5.8 3.5 2h3c0-2.5-2.5-4.2-6.5-4.2z" fill="#FFFFFF"/>
  </svg>
);

const ExcelIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <rect x="18" y="10" width="34" height="44" rx="4" fill="#107C41"/>
    <path d="M26 18h20v6H26zm0 10h20v6H26zm0 10h20v6H26z" fill="#21A366"/>
    <rect x="10" y="18" width="22" height="28" rx="4" fill="#185C37"/>
    <path d="M16 26l4 6-4 6h3.5l2.2-3.8 2.2 3.8H27l-4-6 4-6h-3.5L21.3 30 19.1 26z" fill="#FFFFFF"/>
  </svg>
);

const PowerBiIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <rect x="14" y="32" width="9" height="22" rx="2.5" fill="#E6AD10"/>
    <rect x="27" y="22" width="9" height="32" rx="2.5" fill="#F2C811"/>
    <rect x="40" y="12" width="9" height="42" rx="2.5" fill="#F9DE5A"/>
  </svg>
);

const ChatGptIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <rect width="64" height="64" rx="14" fill="#10A37F"/>
    <path d="M47.7 26.2c-.6-3.8-3.4-6.8-7.1-7.8-1.5-.4-3-.4-4.5-.1-1.3-1.8-3.3-3-5.5-3.3-3.8-.6-7.5 1.1-9.6 4.3-1.8.2-3.5 1.1-4.8 2.5-3 3-3.6 7.6-1.5 11.2-.5 1.5-.6 3.1-.3 4.6.6 3.8 3.4 6.8 7.1 7.8 1.5.4 3 .4 4.5.1 1.3 1.8 3.3 3 5.5 3.3 3.8.6 7.5-1.1 9.6-4.3 1.8-.2 3.5-1.1 4.8-2.5 3-3 3.6-7.6 1.5-11.2.5-1.5.6-3.1.3-4.7z" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 23v18M23 27l18 10M23 37l18-10" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

const TableauIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <rect x="30" y="8" width="4" height="48" fill="#EB6A2D"/>
    <rect x="8" y="30" width="48" height="4" fill="#EB6A2D"/>
    <rect x="29" y="14" width="6" height="36" fill="#E8762D"/>
    <rect x="14" y="29" width="36" height="6" fill="#E8762D"/>
    <rect x="28" y="22" width="8" height="20" fill="#2A5885"/>
    <rect x="22" y="28" width="20" height="8" fill="#2A5885"/>
    <circle cx="21" cy="21" r="3" fill="#5C8EB9"/>
    <circle cx="43" cy="21" r="3" fill="#D32431"/>
    <circle cx="21" cy="43" r="3" fill="#5C8EB9"/>
    <circle cx="43" cy="43" r="3" fill="#F1A22C"/>
    <circle cx="32" cy="11" r="3.5" fill="#E8762D"/>
    <circle cx="32" cy="53" r="3.5" fill="#1F497D"/>
    <circle cx="11" cy="32" r="3.5" fill="#759E3F"/>
    <circle cx="53" cy="32" r="3.5" fill="#AE1C28"/>
  </svg>
);

const MoreIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <circle cx="32" cy="32" r="22" fill="#EAF6FF"/>
    <circle cx="22" cy="32" r="3.5" fill="#087DF5"/>
    <circle cx="32" cy="32" r="3.5" fill="#087DF5"/>
    <circle cx="42" cy="32" r="3.5" fill="#087DF5"/>
  </svg>
);

/* ========================================================
   Clean Vector SVG Journey Icons (Pixel-matched to Reference)
   ======================================================== */
const JourneyEnrollIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7">
    <path d="M12 6h16l10 10v26H12z" fill="#087DF5"/>
    <path d="M28 6v10h10" fill="#0561C2"/>
    <rect x="17" y="22" width="16" height="2.5" rx="1.2" fill="#FFFFFF"/>
    <rect x="17" y="28" width="16" height="2.5" rx="1.2" fill="#FFFFFF"/>
    <rect x="17" y="34" width="10" height="2.5" rx="1.2" fill="#FFFFFF"/>
  </svg>
);

const JourneyLearnIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7">
    <rect x="10" y="10" width="28" height="20" rx="3" fill="#7B55E8"/>
    <polygon points="22,15 30,20 22,25" fill="#FFFFFF"/>
    <rect x="6" y="32" width="36" height="4" rx="2" fill="#5E38C9"/>
  </svg>
);

const JourneyPlacedIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7">
    <rect x="8" y="16" width="32" height="24" rx="4" fill="#00B67B"/>
    <path d="M18 16V12a3 3 0 013-3h6a3 3 0 013 3v4" fill="none" stroke="#008C5E" strokeWidth="3"/>
    <rect x="21" y="22" width="6" height="6" rx="1.5" fill="#FFFFFF"/>
    <line x1="8" y1="25" x2="40" y2="25" stroke="#008C5E" strokeWidth="2"/>
  </svg>
);

const JourneyPayIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7">
    <circle cx="24" cy="24" r="18" fill="#F6A623"/>
    <text x="24" y="31" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="sans-serif">₹</text>
  </svg>
);

/* ========================================================
   Clean Vector SVG Benefit Icons (Pixel-matched to Reference)
   ======================================================== */
const ShieldCheckIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6">
    <path d="M24 6l16 6v12c0 10-7 19-16 22C15 43 8 34 8 24V12z" fill="#00B67B"/>
    <polyline points="16,24 22,30 32,18" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UsersGroupIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6">
    <circle cx="24" cy="16" r="6" fill="#7B55E8"/>
    <path d="M12 36c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="#7B55E8"/>
    <circle cx="13" cy="18" r="4.5" fill="#A88BFA"/>
    <path d="M4 36c0-4.5 3.5-8.5 8-9.5" fill="none" stroke="#A88BFA" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="35" cy="18" r="4.5" fill="#A88BFA"/>
    <path d="M44 36c0-4.5-3.5-8.5-8-9.5" fill="none" stroke="#A88BFA" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const TargetBullseyeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6">
    <circle cx="22" cy="26" r="16" fill="none" stroke="#087DF5" strokeWidth="3.5"/>
    <circle cx="22" cy="26" r="9" fill="none" stroke="#087DF5" strokeWidth="3.5"/>
    <circle cx="22" cy="26" r="3.5" fill="#087DF5"/>
    <line x1="24" y1="24" x2="40" y2="8" stroke="#087DF5" strokeWidth="3.5" strokeLinecap="round"/>
    <polygon points="36,8 40,8 40,12" fill="#087DF5"/>
  </svg>
);

/* ========================================================
   Clean Vector SVG Highlight Icons
   ======================================================== */
const AiPoweredIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#7B55E8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3" fill="#7B55E8"/>
  </svg>
);

const RealWorldProjectsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#00B67B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="3"/>
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
  </svg>
);

const IndustryToolsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#087DF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);

const InterviewPrepIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#7B55E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const journey = [
  {
    number: "1",
    icon: <JourneyEnrollIcon />,
    title: "Enroll",
    text: "Start with just",
    highlight: "₹999",
    color: "blue",
  },
  {
    number: "2",
    icon: <JourneyLearnIcon />,
    title: "Learn",
    text: "Gain in-demand",
    highlight: "skills with AI",
    color: "purple",
  },
  {
    number: "3",
    icon: <JourneyPlacedIcon />,
    title: "Get Placed",
    text: "Apply, interview",
    highlight: "and get a job offer",
    color: "green",
  },
  {
    number: "4",
    icon: <JourneyPayIcon />,
    title: "Career Track",
    highlight: "Placement",
    text: "₹28,000",
    subtext: "(Easy installments)",
    color: "orange",
  },
];

const benefits = [
  {
    icon: <ShieldCheckIcon />,
    title: "Eligible Learners",
    text: "No upfront fees\n(for eligible learners)",
  },
  {
    icon: <UsersGroupIcon />,
    title: "Dedicated Support",
    text: "1:1 mentorship &\ncareer guidance",
  },
  {
    icon: <TargetBullseyeIcon />,
    title: "Job-Ready Skills",
    text: "Learn what companies\nactually need",
  },
];

const tools = [
  { name: "Python", icon: <PythonIcon /> },
  { name: "SQL", icon: <SqlIcon /> },
  { name: "Excel", icon: <ExcelIcon /> },
  { name: "Power BI", icon: <PowerBiIcon /> },
  { name: "ChatGPT", icon: <ChatGptIcon /> },
  { name: "Tableau", icon: <TableauIcon /> },
  { name: "and more...", icon: <MoreIcon /> },
];

const highlights = [
  { icon: <AiPoweredIcon />, text: "AI-Powered Learning" },
  { icon: <RealWorldProjectsIcon />, text: "Real-World Projects" },
  { icon: <IndustryToolsIcon />, text: "Industry Tools" },
  { icon: <InterviewPrepIcon />, text: "Interview Preparation" },
];

interface FutureAIProgramSectionProps {
  onKnowMorePAP?: () => void;
  onExploreCurriculum?: () => void;
  onSelectModule?: (moduleName: string) => void;
}

export default function FutureAIProgramSection({
  onKnowMorePAP,
  onExploreCurriculum,
}: FutureAIProgramSectionProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section id="career-programs-section" className="future-program scroll-mt-20">

      <div className="future-program-container">

        {/* ================= LEFT COLUMN ================= */}
        <div className="placement-column">

          {/* 1. Top Card: CAREER PROGRAM TRACK Hero Card (Pure Code + AI Generated Photo) */}
          <article 
            className="placement-card"
            onClick={onKnowMorePAP}
            role="region"
            aria-label="Career Acceleration Program Program Details"
          >
            <div className="placement-image">
              <img
                src="/images/placed-student-celebration.jpg"
                alt="Career Acceleration Program Learner"
                className="placement-bg-photo"
                loading="eager"
              />
              <div className="placement-overlay" />
              
              {/* Badge */}
              <div className="placement-label">
                CAREER PROGRAM TRACK
              </div>

              {/* Offer Card Badge */}
              <div className="job-offer-card">
                <span className="job-check">✓</span>
                <div>
                  <strong>Job Offer</strong>
                  <small>Congratulations!</small>
                </div>
              </div>

              {/* Headings */}
              <h3 className="placement-heading">
                Because<br />
                <span>Your Success</span><br />
                Matters.
              </h3>

              {/* Description */}
              <p className="placement-description">
                No upfront fees for eligible learners.<br />
                Pay only when you get placed in a job.
              </p>

              {/* Pricing Cards */}
              <div className="placement-pricing">
                <div 
                  className="price-mini price-mini-interactive"
                  onClick={(e) => {
                    e.stopPropagation();
                    onKnowMorePAP?.();
                  }}
                  title="Click to view ₹999 enrollment details"
                >
                  <div className="price-icon blue-icon">₹</div>
                  <div>
                    <strong>₹999</strong>
                    <span>Enrollment Payment</span>
                    <small>to start learning</small>
                  </div>
                </div>

                <div 
                  className="price-mini price-mini-interactive"
                  onClick={(e) => {
                    e.stopPropagation();
                    onKnowMorePAP?.();
                  }}
                  title="Click to view ₹28,000 Program details"
                >
                  <div className="price-icon purple-icon">💼</div>
                  <div>
                    <strong>₹28,000</strong>
                    <span>After eligible job offer letter</span>
                    <small>(Easy installments)</small>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* 2. Bottom Card: Your Journey with FUTURE IT INDUSTRY */}
          <article className="journey-card">

            <div className="journey-header">
              <h3>Your Journey with FUTURE IT INDUSTRY</h3>

              <span>
                A simple, transparent path to a brighter career.
              </span>
            </div>

            <div className="journey-flow">

              {journey.map((item, index) => (
                <React.Fragment key={item.number}>

                  <div className="journey-step">

                    <div className={`journey-icon ${item.color}`}>
                      <b>{item.number}</b>
                      <span>{item.icon}</span>
                    </div>

                    <strong>{item.title}</strong>

                    <p>{item.text}</p>

                    <em>{item.highlight}</em>

                    {item.subtext && (
                      <small style={{ color: "#687890", fontSize: "10px", marginTop: "2px", display: "block" }}>
                        {item.subtext}
                      </small>
                    )}

                  </div>

                  {index < journey.length - 1 && (
                    <div className="journey-arrow">›</div>
                  )}

                </React.Fragment>
              ))}

            </div>

            <div className="benefits-grid">

              {benefits.map((item) => (
                <div className="benefit-card" key={item.title}>

                  <div className="benefit-icon">
                    {item.icon}
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <p style={{ whiteSpace: "pre-line" }}>{item.text}</p>
                  </div>

                </div>
              ))}

            </div>

          </article>
        </div>


        {/* ================= RIGHT COLUMN ================= */}
        <div className="program-column">

          {/* 3. Top Card: Program Highlights & Robot Video */}
          <article className="program-card">

            <span className="program-badge">
              PROGRAM HIGHLIGHTS
            </span>

            <h2>
              Data Analyst with{" "}
              <span>GenAI</span>
            </h2>

            <p className="program-subtitle">
              A complete, job-focused program designed by industry
              experts to make you job-ready.
            </p>

            {/* Highlights */}
            <div className="highlight-row">

              {highlights.map((item) => (
                <div className="highlight-item" key={item.text}>
                  <div>{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}

            </div>


            {/* Video / Robot */}
            <div className="genai-video">

              {isPlayingVideo ? (
                <video
                  src="/assets/videos/program_highlights_new.mp4"
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <img
                    src="/images/student-robot-project-hero.jpg"
                    alt="FUTURE IT INDUSTRY GenAI and Analytics Studio"
                  />

                  <div className="video-overlay" />

                  <div className="studio-label">
                    <span />
                    2050 GenAI & Analytics Studio
                  </div>

                  <button
                    className="video-play"
                    aria-label="Play video"
                    onClick={() => setIsPlayingVideo(true)}
                  >
                    ▶
                  </button>
                </>
              )}

            </div>

          </article>

          {/* 4. Bottom Card: Learn with the Latest Tools Used in Top Companies */}
          <article className="tools-card">

            <div className="tools-header">

              <div>
                <h3>
                  Learn with the{" "}
                  <span>Latest Tools</span>
                  <br />
                  Used in Top Companies
                </h3>

                <p>
                  Master the complete data analytics stack —
                  powered by GenAI.
                  <br />
                  Work on real datasets and industry-style projects.
                </p>
              </div>

              <button 
                className="curriculum-button"
                onClick={onExploreCurriculum}
              >
                View Curriculum
                <span>→</span>
              </button>

            </div>


            <div className="tools-grid">

              {tools.map((tool) => (
                <div className="tool-item" key={tool.name}>

                  <div className="tool-icon">
                    {tool.icon}
                  </div>

                  <strong>{tool.name}</strong>

                </div>
              ))}

            </div>

          </article>

        </div>

      </div>

    </section>
  );
}

export { FutureAIProgramSection };
