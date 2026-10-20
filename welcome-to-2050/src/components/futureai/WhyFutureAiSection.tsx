import React from 'react';
import './WhyFutureAiSection.css';
import { 
  GraduationCap,
  Building2,
  Coins,
  BookOpen,
  FileText,
  HelpCircle,
  Frown,
  X,
  Zap, 
  Database, 
  Gamepad2, 
  BarChart3, 
  Video, 
  Users, 
  Check,
  ArrowRight, 
  Briefcase, 
  ShieldCheck, 
  Clock,
  Laptop,
  Rocket
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import { BRAND } from '../../config/brand';

interface WhyFutureAiSectionProps {
  onLearnMore?: () => void;
  onSelectSkill?: (skill: string) => void;
  onOpenAdvisor?: () => void;
  onOpenCurriculum?: () => void;
}

export const WhyFutureAiSection: React.FC<WhyFutureAiSectionProps> = ({
  onLearnMore,
  onOpenAdvisor,
}) => {
  const { playHover, playClick } = useThemeAccent();

  const handleAction = () => {
    playClick();
    if (onOpenAdvisor) onOpenAdvisor();
    else if (onLearnMore) onLearnMore();
  };

  return (
    <section id="why-future-ai" className="why-compare-section scroll-mt-24">
      <div className="why-compare-container">

        {/* ================= MASTER COMPARISON POSTER CARD (DESKTOP) ================= */}
        <div className="hidden md:block">
          <div className="why-compare-card">

          {/* MAIN COMPARISON STAGE (EXACT 1:1 RECREATION OF media_1790572423666.jpg) */}
          <div className="why-stage-grid">
            
            {/* 1. PHOTOREALISTIC CLEAN BACKGROUND PLATE */}
            <div className="stage-unified-backdrop-wrap">
              <img 
                src="/images/why-comparison-backdrop-2050.jpg" 
                alt="Comparison of traditional high-fee learning versus modern FUTURE IT INDUSTRY learning"
                className="stage-unified-backdrop-img"
              />
              <div className="stage-unified-overlay" />
            </div>

            {/* Glowing Logo on Happy Student's Laptop Lid */}
            <div className="laptop-lid-logo">
              <span className="laptop-f-mark">⚡</span>
            </div>

            {/* Left Side Floating Holograms (from media_1790577964129.png) */}
            <div className="holo-badge-left holo-expensive-courses">
              <span className="holo-badge-title">EXPENSIVE<br />COURSES</span>
              <svg className="holo-chart-svg" width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M2 4 L14 10 L26 7 L40 18 L56 22" stroke="#ff3b30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M56 22 L50 22 M56 22 L56 16" stroke="#ff3b30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="holo-badge-left holo-no-exposure">
              <span className="holo-badge-title">NO<br />PRACTICAL<br />EXPOSURE</span>
              <div className="holo-stagnant-bars">
                <span style={{ height: '7px' }} />
                <span style={{ height: '14px' }} />
                <span style={{ height: '10px' }} />
                <span style={{ height: '6px' }} />
              </div>
            </div>

            {/* 2. LEFT OVERLAY COLUMN: OTHER INSTITUTES */}
            <div className="stage-content-col left-content-col">
              
              {/* Top Dark Header Card */}
              <div className="others-header-card">
                <div className="others-header-title-row">
                  <GraduationCap className="w-5 h-5 text-white shrink-0" />
                  <span className="others-title-text">Other Institutes</span>
                </div>
                <div className="others-price-highlight">
                  ₹50,000 – ₹1,00,000+
                </div>
                <div className="others-subtitle-text">
                  Pay Karke Bhi Tension...
                </div>
              </div>

              {/* 5 Negative Points Card */}
              <div className="comparison-card-box left-negative-card">
                
                {/* 1. High Fees */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-neutral">
                    <Clock className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title">High Fees</strong>
                    <span className="comp-item-desc">₹50,000 – ₹1,00,000+<br />Often on EMI.</span>
                  </div>
                  <div className="comp-badge-status badge-cross">
                    <X className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

                {/* 2. Mostly Theory */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-neutral">
                    <BookOpen className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title">Mostly Theory</strong>
                    <span className="comp-item-desc">More time on concepts,<br />less hands-on practice.</span>
                  </div>
                  <div className="comp-badge-status badge-cross">
                    <X className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

                {/* 3. Limited Real-World Projects */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-neutral">
                    <FileText className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title">Limited Real-World Projects</strong>
                    <span className="comp-item-desc">Few industry-style projects,<br />often outdated datasets.</span>
                  </div>
                  <div className="comp-badge-status badge-cross">
                    <X className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

                {/* 4. Guidance Issues */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-neutral">
                    <HelpCircle className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title">Guidance Issues</strong>
                    <span className="comp-item-desc">Doubts not solved properly,<br />you're on your own.</span>
                  </div>
                  <div className="comp-badge-status badge-cross">
                    <X className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

                {/* 5. Still Uncertain */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-neutral">
                    <Frown className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title">Still Uncertain</strong>
                    <span className="comp-item-desc">No clear interview practice<br />or career support.</span>
                  </div>
                  <div className="comp-badge-status badge-cross">
                    <X className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

              </div>

            </div>

            {/* Desk Book Spines Tags (Positioned cleanly on the bottom-left desk books) */}
            <div className="desk-left-books">
              <div className="book-tag tag-dark">THEORY</div>
              <div className="book-tag tag-dark">OLD CONTENT</div>
              <div className="book-tag tag-dark">NO SUPPORT</div>
              <div className="book-tag tag-dark">STILL UNEMPLOYED</div>
            </div>

            {/* 3. CENTER DIAGONAL ELECTRIC LIGHTNING DIVIDER */}
            <div className="stage-vs-lightning-diagonal">
              <svg className="diagonal-slash-svg" viewBox="0 0 1000 680" preserveAspectRatio="none">
                <defs>
                  <filter id="lightning-cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Wide soft outer electric cyan glow */}
                <path 
                  d="M525 0 L512 200 L500 290 L480 370 L465 440 L445 540 L425 680" 
                  stroke="rgba(0, 201, 255, 0.4)" 
                  strokeWidth="8" 
                  vectorEffect="non-scaling-stroke"
                  fill="none" 
                />
                {/* Vivid cyan lightning core */}
                <path 
                  d="M525 0 L512 200 L500 290 L480 370 L465 440 L445 540 L425 680" 
                  stroke="#00c9ff" 
                  strokeWidth="3.5" 
                  vectorEffect="non-scaling-stroke"
                  filter="url(#lightning-cyan-glow)"
                  fill="none" 
                />
                {/* White intense core line */}
                <path 
                  d="M525 0 L512 200 L500 290 L480 370 L465 440 L445 540 L425 680" 
                  stroke="#ffffff" 
                  strokeWidth="1.5" 
                  vectorEffect="non-scaling-stroke"
                  fill="none" 
                />
              </svg>
              
              {/* Circular VS Badge */}
              <div className="vs-center-badge">
                <div className="vs-radar-ring" />
                <span>VS</span>
              </div>
            </div>

            {/* Center Floating Hologram Cluster (from media_1790577964129.png) */}
            <div className="center-hologram-cluster">
              <div className="holo-learning-path-card">
                <div className="holo-lp-title">AI-Powered<br />Learning Path</div>
                <div className="holo-lp-items">
                  <div className="holo-lp-item"><span className="lp-tick">✓</span> Learn</div>
                  <div className="holo-lp-item"><span className="lp-tick">✓</span> Practice</div>
                  <div className="holo-lp-item"><span className="lp-tick">✓</span> Build Projects</div>
                  <div className="holo-lp-item"><span className="lp-tick">✓</span> Get Job-Ready</div>
                </div>
              </div>

              <div className="holo-tech-stack-col">
                <div className="holo-tech-pill tech-python">
                  <span className="tech-badge-dot bg-blue-500" />
                  <span className="tech-badge-name">Python</span>
                </div>
                <div className="holo-tech-pill tech-sql">
                  <span className="tech-badge-dot bg-cyan-500" />
                  <span className="tech-badge-name">SQL</span>
                </div>
                <div className="holo-tech-pill tech-powerbi">
                  <span className="tech-badge-dot bg-amber-500" />
                  <span className="tech-badge-name">Power BI</span>
                </div>
                <div className="holo-tech-pill tech-genai">
                  <span className="tech-badge-dot bg-indigo-500" />
                  <span className="tech-badge-name">GenAI</span>
                </div>
              </div>
            </div>

            {/* Far Right Floating Holograms (from media_1790577964129.png) */}
            <div className="holo-badge-right holo-career-growth">
              <div className="holo-cg-title">6–15 LPA</div>
              <div className="holo-cg-sub">Career Growth</div>
              <div className="holo-growth-bars">
                <span style={{ height: '8px' }} />
                <span style={{ height: '14px' }} />
                <span style={{ height: '20px' }} />
                <span style={{ height: '28px' }} />
                <span style={{ height: '36px' }} />
              </div>
            </div>

            <div className="holo-badge-right holo-vertical-actions">
              <div className="action-step"><GraduationCap className="w-3.5 h-3.5 text-cyan-400" /><span>Learn</span></div>
              <div className="action-step"><Laptop className="w-3.5 h-3.5 text-cyan-400" /><span>Build</span></div>
              <div className="action-step"><Gamepad2 className="w-3.5 h-3.5 text-cyan-400" /><span>Practice</span></div>
              <div className="action-step"><Rocket className="w-3.5 h-3.5 text-cyan-400" /><span>Grow</span></div>
            </div>

            {/* 4. RIGHT OVERLAY COLUMN: FUTURE.AI */}
            <div className="stage-content-col right-content-col">
              
              {/* Top FUTURE IT INDUSTRY Brand Logo */}
              <div className="future-brand-row">
                <img
                  src={BRAND.logo}
                  alt={`${BRAND.name} — ${BRAND.tagline}`}
                  className="h-10 w-auto object-contain"
                />
              </div>

              {/* Main Price Banner Card: ₹987 to Start */}
              <div className="future-price-banner">
                <div className="price-banner-main-row">
                  <span className="price-big-green">₹987</span>
                  <span className="price-label-navy">to Start</span>
                </div>
                <div className="price-banner-sub-row">
                  <span className="text-hightech">High-Tech Padhai, </span>
                  <span className="text-tension-free">
                    Tension Free!
                    <svg className="curved-underline-svg" width="105" height="10" viewBox="0 0 105 10" fill="none">
                      <path d="M2 7C35 2 70 2 103 6.5" stroke="#00c06d" strokeWidth="3.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </div>
              </div>

              {/* 6 Positive Points Card */}
              <div className="comparison-card-box right-positive-card">
                
                {/* 1. AI-Powered Learning */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-amber">
                    <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title title-navy">AI-Powered Learning</strong>
                    <span className="comp-item-desc">Get instant doubt solving,<br />explanations like a personal tutor.</span>
                  </div>
                  <div className="comp-badge-status badge-tick">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

                {/* 2. Real Datasets & Projects */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-blue">
                    <Database className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title title-navy">Real Datasets & Projects</strong>
                    <span className="comp-item-desc">Work on industry-style projects<br />and build a portfolio.</span>
                  </div>
                  <div className="comp-badge-status badge-tick">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

                {/* 3. Practice Games & Quizzes */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-cyan">
                    <Gamepad2 className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title title-navy">Practice Games & Quizzes</strong>
                    <span className="comp-item-desc">Learn by doing. Make practice<br />fun and engaging.</span>
                  </div>
                  <div className="comp-badge-status badge-tick">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

                {/* 4. In-Demand Skills */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-emerald">
                    <BarChart3 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title title-navy">In-Demand Skills</strong>
                    <span className="comp-item-desc">Python, SQL, Excel, Power BI, GenAI<br />with hands-on practice.</span>
                  </div>
                  <div className="comp-badge-status badge-tick">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

                {/* 5. Interview Practice */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-royal">
                    <Video className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title title-navy">Interview Practice</strong>
                    <span className="comp-item-desc">Mock interviews, AI feedback<br />and real questions.</span>
                  </div>
                  <div className="comp-badge-status badge-tick">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

                {/* 6. Career Support */}
                <div className="comp-item-row" onMouseEnter={playHover}>
                  <div className="comp-item-icon-wrap icon-green">
                    <Users className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="comp-item-text">
                    <strong className="comp-item-title title-navy">Career Support</strong>
                    <span className="comp-item-desc">Resume building, guidance<br />and job preparation.</span>
                  </div>
                  <div className="comp-badge-status badge-tick">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
        </div>

        {/* ================= MOBILE / ANDROID APP COMPARISON (NATIVE GENERATED UI) ================= */}
        <div className="block md:hidden mb-8 px-1">
          <div className="why-mobile-generated-comparison space-y-3.5">
            
            {/* ── CARD 1: OTHER INSTITUTES (PAIN POINTS & TENSION) ── */}
            <div className="rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#111827] border-1.5 border-red-500/35 shadow-xl text-white relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
              
              {/* Header */}
              <div className="flex items-start justify-between gap-2 pb-3.5 border-b border-red-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 shadow-xs">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-100 tracking-tight leading-none">Other Institutes</h4>
                    <span className="text-[11px] text-red-400 font-bold tracking-tight">Pay Karke Bhi Tension...</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-red-400 line-through tracking-tight">₹50,000 – ₹1,00,000+</span>
                  <div className="text-[9px] text-slate-400 font-medium">Often on EMI</div>
                </div>
              </div>

              {/* 5 Negative Comparison Points */}
              <div className="space-y-2 mt-3.5">
                {[
                  { icon: Clock, title: 'High Fees', desc: '₹50,000 – ₹1,00,000+ Often on EMI.' },
                  { icon: BookOpen, title: 'Mostly Theory', desc: 'More time on concepts, less hands-on practice.' },
                  { icon: FileText, title: 'Limited Real-World Projects', desc: 'Few industry-style projects, often outdated datasets.' },
                  { icon: HelpCircle, title: 'Guidance Issues', desc: 'Doubts not solved properly, you are on your own.' },
                  { icon: Frown, title: 'Still Uncertain', desc: 'No clear interview practice or career support.' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors">
                      <div className="w-6 h-6 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <strong className="text-xs font-black text-slate-200 block tracking-tight leading-snug">{item.title}</strong>
                        <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">{item.desc}</span>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-400 stroke-[3]" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Negative Tags */}
              <div className="grid grid-cols-2 gap-1.5 mt-3.5 pt-3 border-t border-white/[0.08]">
                {['THEORY', 'OLD CONTENT', 'NO SUPPORT', 'STILL UNEMPLOYED'].map((tag) => (
                  <div key={tag} className="text-[9px] font-mono font-black py-1 px-2 rounded-lg bg-red-950/70 border border-red-500/30 text-red-300 text-center flex items-center justify-center gap-1">
                    <span>❌</span>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CENTER 3D VS BADGE ── */}
            <div className="flex items-center justify-center -my-3 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-black text-xs shadow-lg shadow-blue-500/35 border-2 border-white tracking-widest animate-pulse">
                <span>⚡</span>
                <span className="text-sm">VS</span>
                <span>⚡</span>
              </div>
            </div>

            {/* ── CARD 2: FUTURE IT INDUSTRY (HIGH-TECH SOLUTION & TENSION FREE) ── */}
            <div className="rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-white via-sky-50/70 to-emerald-50/60 border-2 border-sky-400/70 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between gap-2 pb-3.5 border-b border-sky-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-sky-500 via-teal-500 to-emerald-500 text-white flex items-center justify-center font-black text-base shadow-md shadow-sky-500/30 shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-950 tracking-tight leading-none">FUTURE IT INDUSTRY</h4>
                    <span className="text-[11px] text-teal-700 font-extrabold tracking-tight">High-Tech Padhai, Tension Free!</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-emerald-700 bg-emerald-100/90 px-2.5 py-1 rounded-xl border border-emerald-300 shadow-xs block">
                    ₹987 to Start
                  </span>
                  <span className="text-[9px] text-slate-500 font-medium">Learn Today. Earn Tomorrow.</span>
                </div>
              </div>

              {/* AI-Powered Learning Path Strip */}
              <div className="flex items-center justify-between gap-1 p-2 rounded-2xl bg-gradient-to-r from-sky-500/15 via-teal-500/15 to-emerald-500/15 border border-sky-300/60 text-[10px] font-black text-sky-950 my-3 shadow-2xs">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Learn</span>
                <span className="text-sky-300">•</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Practice</span>
                <span className="text-sky-300">•</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Build Projects</span>
                <span className="text-sky-300">•</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Get Job-Ready</span>
              </div>

              {/* 6 Positive Comparison Points */}
              <div className="space-y-2 mt-2">
                {[
                  { icon: Zap, title: 'AI-Powered Learning', desc: 'Get instant doubt solving, explanations like a personal tutor.' },
                  { icon: Database, title: 'Real Datasets & Projects', desc: 'Work on industry-style projects and build a portfolio.' },
                  { icon: Gamepad2, title: 'Practice Games & Quizzes', desc: 'Learn by doing. Make practice fun and engaging.' },
                  { icon: BarChart3, title: 'In-Demand Skills', desc: 'Python, SQL, Excel, Power BI, GenAI with hands-on practice.' },
                  { icon: Video, title: 'Interview Practice', desc: 'Mock interviews, AI feedback and real questions.' },
                  { icon: Users, title: 'Career Support', desc: 'Resume building, guidance and job preparation.' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-2xl bg-white border border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                      <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-teal-50 to-sky-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <strong className="text-xs font-black text-slate-900 block tracking-tight leading-snug">{item.title}</strong>
                        <span className="text-[10px] text-slate-600 leading-tight block mt-0.5">{item.desc}</span>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom In-Demand Skills Pill Row */}
              <div className="flex flex-wrap gap-1.5 mt-3.5 pt-3 border-t border-sky-100">
                {['Python', 'SQL', 'Excel', 'Power BI', 'GenAI'].map((skill) => (
                  <span key={skill} className="text-[10px] font-bold px-2.5 py-0.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 shadow-2xs">
                    ✓ {skill}
                  </span>
                ))}
              </div>

              {/* Call-to-Action Button */}
              <button
                onClick={handleAction}
                className="w-full mt-3 py-3 rounded-2xl font-black text-xs text-white bg-gradient-to-r from-teal-500 via-sky-600 to-blue-600 shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 active:scale-98 transition-transform cursor-pointer"
              >
                <span>Start Learning for Just ₹987</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>
        </div>

        {/* ================= 2-TAB / 40PX SEPARATION SPACING ================= */}
        <div className="why-section-spacer" />

        {/* ================= EXACT 1:1 RECREATION OF media_1790576623550.png ================= */}
        <div className="why-futuristic-enroll-banner">
          
          {/* Left Segment: Headline + Subtitle */}
          <div className="banner-left-segment">
            <div className="banner-badge-pill">
              <span className="badge-fire-icon">🔥</span>
              <span className="badge-text-purple">LIMITED TIME ENROLLMENT</span>
            </div>

            <h3 className="banner-main-headline">
              Start Today for Just{" "}
              <span className="text-cyan-gradient">
                ₹987
                <svg className="banner-curved-underline" width="85" height="8" viewBox="0 0 85 8" fill="none">
                  <path d="M2 6C28 1.5 56 1.5 83 5.5" stroke="#00d5a6" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h3>

            <p className="banner-sub-statement">
              Pay remaining <strong className="text-highlight-green">₹18,000</strong> only after you get a <strong className="text-highlight-blue">6–15 LPA job!</strong>
            </p>
          </div>

          {/* Center Segment: Cute 3D AI Robot pointing to 6-15 LPA Hologram */}
          <div className="banner-center-segment">
            <div className="robot-hologram-visual-wrap">
              <img 
                src="/images/banner-robot-hologram.jpg" 
                alt="AI Robot pointing to 6-15 LPA career growth hologram"
                className="robot-hologram-img"
              />
              <div className="floating-hologram-badge">
                <span>6–15 LPA</span>
              </div>
            </div>
          </div>

          {/* Right Segment: 4 Trust Pillars + Cyan/Blue Pill Button */}
          <div className="banner-right-segment">
            
            {/* 4 Trust Pillars Row */}
            <div className="banner-trust-four-row">
              
              {/* 1. SUPER 30 */}
              <div className="trust-four-item" onMouseEnter={playHover}>
                <div className="trust-four-icon icon-bg-purple">
                  <Users className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <div className="trust-four-text">
                  <strong className="trust-title-dark">SUPER 30</strong>
                  <span className="trust-sub-grey">Only 30 Seats<br />Exclusive cohort size</span>
                </div>
              </div>

              {/* 2. Job-Oriented Curriculum */}
              <div className="trust-four-item" onMouseEnter={playHover}>
                <div className="trust-four-icon icon-bg-sky">
                  <BarChart3 className="w-3.5 h-3.5 text-sky-600" />
                </div>
                <div className="trust-four-text">
                  <strong className="trust-title-dark">Job-Oriented<br />Curriculum</strong>
                  <span className="trust-sub-grey">For 6 – 15 LPA Roles</span>
                </div>
              </div>

              {/* 3. Secure Payment */}
              <div className="trust-four-item" onMouseEnter={playHover}>
                <div className="trust-four-icon icon-bg-emerald">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="trust-four-text">
                  <strong className="trust-title-dark">Secure<br />Payment</strong>
                  <span className="trust-sub-grey">100% Encrypted<br />& Safe</span>
                </div>
              </div>

              {/* 4. Pay Remaining ₹18,000 */}
              <div className="trust-four-item" onMouseEnter={playHover}>
                <div className="trust-four-icon icon-bg-amber">
                  <Coins className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div className="trust-four-text">
                  <strong className="trust-title-dark">Pay Remaining<br />₹18,000</strong>
                  <span className="trust-sub-grey">Only After You Get<br />a 6–15 LPA Job</span>
                </div>
              </div>

            </div>

            {/* Cyan to Royal Blue Gradient Pill CTA Button */}
            <div className="banner-cta-btn-wrap">
              <button 
                className="banner-reserve-btn cursor-pointer"
                onClick={handleAction}
                onMouseEnter={playHover}
              >
                <span>Reserve Your Seat Today for ₹987</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>

              <div className="banner-lock-assurance">
                <span className="lock-icon">🔒</span>
                <span>Instant Confirmation • 100% Risk-Free Placement Assurance</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
