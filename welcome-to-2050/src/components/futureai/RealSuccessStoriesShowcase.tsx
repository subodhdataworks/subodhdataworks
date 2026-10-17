import React, { useState, useEffect, useRef } from 'react';
import {
  Building2,
  Users,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import './RealSuccessStoriesShowcase.css';

export interface AlumniStory {
  id: string;
  name: string;
  photo: string;
  rating: number;
  role: string;
  courseTag: string;
  company: string;
  companyLogo: string;
  companyColor: string;
  quote: string;
  skills: string[];
  ctc: string;
  ctcBadgeBg: string;
  ctcBadgeColor: string;
}

export interface RealSuccessStoriesShowcaseProps {
  onOpenRole?: (role: string) => void;
  onOpenPartnersModal?: () => void;
  onExploreProgram?: () => void;
}

export const RealSuccessStoriesShowcase: React.FC<RealSuccessStoriesShowcaseProps> = ({
  onOpenRole,
  onOpenPartnersModal,
  onExploreProgram,
}) => {
  const { playClick, playHover } = useThemeAccent();

  // 1. Hiring Partners (Infinitely scrolling marquee)
  const hiringPartners = [
    { name: 'Amazon', logo: '/images/companies/amazon.svg', height: 22 },
    { name: 'Google', logo: '/images/companies/google.svg', height: 22 },
    { name: 'Microsoft', logo: '/images/companies/microsoft.svg', height: 22 },
    { name: 'Accenture', logo: '/images/companies/accenture.svg', height: 20 },
    { name: 'Deloitte', logo: '/images/companies/deloitte.svg', height: 20 },
    { name: 'TCS', logo: '/images/companies/tcs.svg', height: 22 },
    { name: 'Infosys', logo: '/images/companies/infosys.svg', height: 20 },
    { name: 'Wipro', logo: '/images/companies/wipro.svg', height: 22 },
    { name: 'HCL', logo: '/images/companies/hcl.svg', height: 18 },
    { name: 'Adobe', logo: '/images/companies/adobe.svg', height: 20 },
    { name: 'EY', logo: '/images/companies/ey.svg', height: 22 },
    { name: 'IBM', logo: '/images/companies/ibm.svg', height: 18 },
    { name: 'Cognizant', logo: '/images/companies/cognizant.svg', height: 18 },
    { name: 'Capgemini', logo: '/images/companies/capgemini.svg', height: 20 },
    { name: 'PwC', logo: '/images/companies/pwc.svg', height: 22 },
    { name: 'KPMG', logo: '/images/companies/kpmg.svg', height: 20 },
  ];

  // 2. Alumni Stories Data representing ALL 4 Courses (16 Students with realistic CTCs)
  const alumniStories: AlumniStory[] = [
    {
      id: 'neha',
      name: 'Neha Singh',
      photo: '/images/alumni/alumni_neha_singh.jpg',
      rating: 5.0,
      role: 'Data Analyst',
      courseTag: 'Data Analyst with GenAI',
      company: 'Accenture',
      companyLogo: '/images/companies/accenture.svg',
      companyColor: '#a100ff',
      quote: 'The hands-on projects and mentorship gave me the confidence to crack my first Data Analyst job.',
      skills: ['Python', 'SQL', 'Power BI', 'Excel'],
      ctc: '5.8 LPA',
      ctcBadgeBg: '#fef3c7',
      ctcBadgeColor: '#b45309',
    },
    {
      id: 'rohit',
      name: 'Rohit Kumar',
      photo: '/images/alumni/alumni_rohit_kumar.jpg',
      rating: 5.0,
      role: 'Business & BI Analyst',
      courseTag: 'Data Analyst with GenAI',
      company: 'Deloitte',
      companyLogo: '/images/companies/deloitte.svg',
      companyColor: '#86bc25',
      quote: 'The real-world curriculum and placement support made the entire journey smooth.',
      skills: ['SQL', 'Excel', 'Power BI', 'Business Analysis'],
      ctc: '6.8 LPA',
      ctcBadgeBg: '#dcfce7',
      ctcBadgeColor: '#15803d',
    },
    {
      id: 'anjali',
      name: 'Anjali Sharma',
      photo: '/images/alumni/alumni_sneha_verma.jpg',
      rating: 5.0,
      role: 'Junior Data Analyst',
      courseTag: 'Data Analyst with GenAI',
      company: 'TCS',
      companyLogo: '/images/companies/tcs.svg',
      companyColor: '#0070ad',
      quote: 'Switched from a non-tech background to a core analytics role in just 4 months!',
      skills: ['Excel', 'SQL', 'Python', 'Power BI'],
      ctc: '5.2 LPA',
      ctcBadgeBg: '#eff6ff',
      ctcBadgeColor: '#1d4ed8',
    },
    {
      id: 'rajesh',
      name: 'Rajesh Patel',
      photo: '/images/alumni/alumni_aman_sharma.jpg',
      rating: 5.0,
      role: 'Power BI Consultant',
      courseTag: 'Data Analyst with GenAI',
      company: 'Wipro',
      companyLogo: '/images/companies/wipro.svg',
      companyColor: '#6366f1',
      quote: 'The DAX and automated reporting modules helped me crack my technical rounds easily.',
      skills: ['Power BI', 'DAX', 'SQL', 'GenAI Analytics'],
      ctc: '6.2 LPA',
      ctcBadgeBg: '#ecfdf5',
      ctcBadgeColor: '#047857',
    },
    {
      id: 'priya',
      name: 'Priya Patel',
      photo: '/images/alumni/alumni_priya_patel.jpg',
      rating: 5.0,
      role: 'Data Scientist',
      courseTag: 'Data Science & Agentic AI',
      company: 'Amazon',
      companyLogo: '/images/companies/amazon.svg',
      companyColor: '#ff9900',
      quote: 'The end-to-end ML workflows and interview simulations were an absolute game changer.',
      skills: ['Machine Learning', 'Python', 'Statistics', 'SQL'],
      ctc: '11.5 LPA',
      ctcBadgeBg: '#fef3c7',
      ctcBadgeColor: '#b45309',
    },
    {
      id: 'vikram',
      name: 'Vikram Malhotra',
      photo: '/images/alumni/alumni_vikram_malhotra.jpg',
      rating: 5.0,
      role: 'Agentic AI & Data Scientist',
      courseTag: 'Data Science & Agentic AI',
      company: 'Google',
      companyLogo: '/images/companies/google.svg',
      companyColor: '#4285f4',
      quote: 'I transitioned into cutting-edge Agentic AI in 4 months with structured daily practice.',
      skills: ['Agentic AI', 'LangChain', 'Python', 'Vector DBs'],
      ctc: '14.0 LPA',
      ctcBadgeBg: '#dcfce7',
      ctcBadgeColor: '#15803d',
    },
    {
      id: 'sanya',
      name: 'Sanya Kapoor',
      photo: '/images/alumni/alumni_ananya_sengupta.jpg',
      rating: 5.0,
      role: 'Associate Data Scientist',
      courseTag: 'Data Science & Agentic AI',
      company: 'Cognizant',
      companyLogo: '/images/companies/cognizant.svg',
      companyColor: '#0070ad',
      quote: 'Predictive modeling projects in my GitHub portfolio got me shortlisted by top recruiters.',
      skills: ['Pandas', 'Scikit-Learn', 'EDA', 'Statistics'],
      ctc: '9.2 LPA',
      ctcBadgeBg: '#fae8ff',
      ctcBadgeColor: '#86198f',
    },
    {
      id: 'karan',
      name: 'Karan Mehra',
      photo: '/images/alumni/alumni_devansh_roy.jpg',
      rating: 5.0,
      role: 'AI Data Specialist',
      courseTag: 'Data Science & Agentic AI',
      company: 'Capgemini',
      companyLogo: '/images/companies/capgemini.svg',
      companyColor: '#0284c7',
      quote: 'Building AI agents and RAG pipelines directly bridged the gap between theory and industry.',
      skills: ['Python', 'RAG Pipelines', 'Machine Learning', 'SQL'],
      ctc: '12.5 LPA',
      ctcBadgeBg: '#fef3c7',
      ctcBadgeColor: '#b45309',
    },
    {
      id: 'aman',
      name: 'Aman Sharma',
      photo: '/images/alumni/alumni_aman_sharma.jpg',
      rating: 5.0,
      role: 'Machine Learning Engineer',
      courseTag: 'ML Engineering',
      company: 'Microsoft',
      companyLogo: '/images/companies/microsoft.svg',
      companyColor: '#00a4ef',
      quote: 'From training distributed models to production MLOps pipelines, the career prep was unmatched.',
      skills: ['PyTorch', 'TensorFlow', 'MLOps', 'Docker & K8s'],
      ctc: '14.5 LPA',
      ctcBadgeBg: '#e0f2fe',
      ctcBadgeColor: '#0369a1',
    },
    {
      id: 'sneha',
      name: 'Sneha Verma',
      photo: '/images/alumni/alumni_sneha_verma.jpg',
      rating: 5.0,
      role: 'MLOps Pipeline Engineer',
      courseTag: 'ML Engineering',
      company: 'TCS',
      companyLogo: '/images/companies/tcs.svg',
      companyColor: '#0070ad',
      quote: 'Learned continuous deployment for ML models and cracked a great tech package.',
      skills: ['ML Pipelines', 'Python', 'Cloud MLOps', 'Kubeflow'],
      ctc: '11.8 LPA',
      ctcBadgeBg: '#ffe4e6',
      ctcBadgeColor: '#be123c',
    },
    {
      id: 'aditya',
      name: 'Aditya Rao',
      photo: '/images/alumni/alumni_rohit_kumar.jpg',
      rating: 5.0,
      role: 'ML Platform Specialist',
      courseTag: 'ML Engineering',
      company: 'Adobe',
      companyLogo: '/images/companies/adobe.svg',
      companyColor: '#ff0000',
      quote: 'Dockerizing ML microservices and deployment capstones gave me real edge in system design.',
      skills: ['Docker', 'Kubernetes', 'PyTorch', 'AWS ML'],
      ctc: '15.0 LPA',
      ctcBadgeBg: '#ecfdf5',
      ctcBadgeColor: '#047857',
    },
    {
      id: 'pooja',
      name: 'Pooja Joshi',
      photo: '/images/alumni/alumni_neha_singh.jpg',
      rating: 5.0,
      role: 'Model Deployment Engineer',
      courseTag: 'ML Engineering',
      company: 'HCL',
      companyLogo: '/images/companies/hcl.svg',
      companyColor: '#2563eb',
      quote: 'The AI mock interviews and continuous coding labs made the interview cracking easy.',
      skills: ['Scikit-Learn', 'FastAPI', 'CI/CD', 'Python'],
      ctc: '10.5 LPA',
      ctcBadgeBg: '#eff6ff',
      ctcBadgeColor: '#1d4ed8',
    },
    {
      id: 'devansh',
      name: 'Devansh Roy',
      photo: '/images/alumni/alumni_devansh_roy.jpg',
      rating: 5.0,
      role: 'Lead AI Engineer',
      courseTag: 'AI Engineering',
      company: 'IBM',
      companyLogo: '/images/companies/ibm.svg',
      companyColor: '#006699',
      quote: 'Built real autonomous multi-agent systems and landed an amazing offer right after graduation!',
      skills: ['LLMs', 'Multi-Agent AI', 'Fine-Tuning', 'OpenAI'],
      ctc: '16.0 LPA',
      ctcBadgeBg: '#fae8ff',
      ctcBadgeColor: '#86198f',
    },
    {
      id: 'ananya',
      name: 'Ananya Sengupta',
      photo: '/images/alumni/alumni_ananya_sengupta.jpg',
      rating: 5.0,
      role: 'Full-Stack AI Architect',
      courseTag: 'AI Engineering',
      company: 'Infosys',
      companyLogo: '/images/companies/infosys.svg',
      companyColor: '#007cc3',
      quote: 'Enterprise GenAI architectures and AI mock interviews directly led to my dream AI role.',
      skills: ['Enterprise AI', 'RAG Pipelines', 'LangGraph', 'PyTorch'],
      ctc: '18.0 LPA',
      ctcBadgeBg: '#dcfce7',
      ctcBadgeColor: '#15803d',
    },
    {
      id: 'rahul',
      name: 'Rahul Nair',
      photo: '/images/alumni/alumni_vikram_malhotra.jpg',
      rating: 5.0,
      role: 'Prompt & LLM Engineer',
      courseTag: 'AI Engineering',
      company: 'PwC',
      companyLogo: '/images/companies/pwc.svg',
      companyColor: '#dc2626',
      quote: 'Vector search optimizations and enterprise fine-tuning modules gave me senior engineer skills.',
      skills: ['Vector DBs', 'ChromaDB', 'LangChain', 'Prompt Tuning'],
      ctc: '15.5 LPA',
      ctcBadgeBg: '#fef3c7',
      ctcBadgeColor: '#b45309',
    },
    {
      id: 'ritu',
      name: 'Ritu Choudhary',
      photo: '/images/alumni/alumni_priya_patel.jpg',
      rating: 5.0,
      role: 'Autonomous AI Specialist',
      courseTag: 'AI Engineering',
      company: 'EY',
      companyLogo: '/images/companies/ey.svg',
      companyColor: '#ffe600',
      quote: 'The AI HR interview simulator helped me negotiate a confident 17+ LPA transition package.',
      skills: ['CrewAI', 'AutoGen', 'Python', 'LLM Deployment'],
      ctc: '17.2 LPA',
      ctcBadgeBg: '#ecfdf5',
      ctcBadgeColor: '#047857',
    },
  ];

  // Carousel State ("our alumuni bhi chalta rahega")
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // Fast auto-slide alumni carousel every 2.2s when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % alumniStories.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [isPaused, alumniStories.length]);

  // Sync scroll position
  useEffect(() => {
    if (!carouselTrackRef.current) return;
    const cardWidth = 405; // 385px + 20px gap
    carouselTrackRef.current.scrollTo({
      left: scrollIndex * cardWidth,
      behavior: 'smooth',
    });
  }, [scrollIndex]);

  const handlePrev = () => {
    playClick();
    setScrollIndex((prev) => (prev === 0 ? alumniStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playClick();
    setScrollIndex((prev) => (prev + 1) % alumniStories.length);
  };

  return (
    <div className="rss-showcase-container">
      {/* =========================================================================
          1. TOP HERO BANNER: "Real People. Real Success Stories."
          ========================================================================= */}
      <section className="rss-top-hero-card">
        <img
          src="/images/dashboard/real_success_hero_banner.png"
          alt="Real People. Real Success Stories. Future.AI Placed Students"
          className="rss-top-hero-img"
        />

        {/* Interactive Hotspots for Career Roles */}
        <div className="rss-hero-interactive-overlay">
          <div className="rss-hero-roles-hotspots">
            {['Data Analyst', 'Business Analyst', 'Data Scientist', 'BI Analyst', 'AI Engineer'].map((role) => (
              <button
                key={role}
                type="button"
                className="rss-hero-role-btn"
                onClick={() => {
                  playClick();
                  onOpenRole?.(role);
                }}
                title={`Explore ${role} Track`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MIDDLE SECTION: "Our Hiring Partners" (Continuous Infinite Marquee)
          ========================================================================= */}
      <section className="rss-partners-section">
        <div className="rss-section-header">
          <div className="rss-header-left">
            <span className="rss-header-icon-box blue-box">
              <Building2 className="w-4 h-4 text-sky-600" />
            </span>
            <div>
              <h2 className="rss-section-title">Our Hiring Partners</h2>
              <p className="rss-section-subtitle">
                Our learners are working in top companies across industries.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="rss-view-all-btn"
            onClick={() => {
              playClick();
              onOpenPartnersModal?.();
            }}
          >
            <span>View All Partners</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Infinite Auto-Scrolling Marquee ("hiring partner chalta rahega") */}
        <div className="rss-marquee-container">
          <div className="rss-marquee-track">
            {/* Array doubled for seamless continuous loop */}
            {[...hiringPartners, ...hiringPartners].map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="rss-partner-card"
                onMouseEnter={playHover}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="rss-partner-logo-img"
                  style={{ height: `${partner.height}px` }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                <span className="rss-partner-name-text">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. BOTTOM SECTION: "Our Alumni Stories" (Auto-Scrolling & Interactive Carousel)
          ========================================================================= */}
      <section
        className="rss-alumni-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="rss-section-header">
          <div className="rss-header-left">
            <span className="rss-header-icon-box cyan-box">
              <Users className="w-4 h-4 text-cyan-600" />
            </span>
            <div>
              <h2 className="rss-section-title">Our Alumni Stories</h2>
              <p className="rss-section-subtitle">
                Real learners. Real journeys. Real impact.
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="rss-nav-arrows">
            <button
              type="button"
              className="rss-arrow-btn"
              onClick={handlePrev}
              title="Previous Story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="rss-arrow-btn"
              onClick={handleNext}
              title="Next Story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Alumni Cards Carousel Track ("our alumuni bhi chalta rahega") */}
        <div className="rss-alumni-carousel-wrapper" ref={carouselTrackRef}>
          <div className="rss-alumni-cards-row">
            {alumniStories.map((story) => (
              <div
                key={story.id}
                className="rss-alumni-card"
                onMouseEnter={playHover}
              >
                {/* Top Course Tag Pill */}
                <div className="rss-card-course-badge-wrap">
                  <span className="rss-card-course-pill">
                    {story.courseTag}
                  </span>
                </div>

                {/* Top Profile Header */}
                <div className="rss-card-top-row">
                  <div className="rss-avatar-wrap">
                    <img
                      src={story.photo}
                      alt={story.name}
                      className="rss-avatar-img"
                    />
                  </div>

                  <div className="rss-card-meta">
                    <div className="rss-meta-header">
                      <h3 className="rss-alumni-name">{story.name}</h3>
                      <div className="rss-rating-pill">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400 inline mr-0.5" />
                        <span>{story.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="rss-role-line">
                      <span className="rss-role-arrow">&gt;</span>
                      <strong className="rss-role-text">
                        {story.role}{' '}
                        <span className="rss-role-at">@ {story.company}</span>
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Quote Content */}
                <p className="rss-card-quote">
                  &ldquo;{story.quote}&rdquo;
                </p>

                {/* Skills Pills */}
                <div className="rss-skills-pill-row">
                  {story.skills.map((skill) => (
                    <span key={skill} className="rss-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Footer Bar */}
                <div className="rss-card-footer">
                  <div className="rss-footer-company-box">
                    <img
                      src={story.companyLogo}
                      alt={story.company}
                      className="rss-footer-logo"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="rss-placed-at-info">
                    <span className="rss-placed-label">Placed at</span>
                    <strong className="rss-placed-company">{story.company}</strong>
                  </div>

                  <div
                    className="rss-ctc-capsule"
                    style={{
                      background: story.ctcBadgeBg,
                      color: story.ctcBadgeColor,
                    }}
                  >
                    <span className="rss-ctc-value">{story.ctc}</span>
                    <span className="rss-ctc-tag">CTC</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
