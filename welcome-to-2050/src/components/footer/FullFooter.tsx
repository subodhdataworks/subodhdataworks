import React from 'react';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  FileCheck2,
  Phone,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Laptop,
  Terminal,
  Database,
  Layers,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

export interface FullFooterProps {
  onOpenAuthModal?: () => void;
}

export const FullFooter: React.FC<FullFooterProps> = ({ onOpenAuthModal }) => {
  const handleNav = (hash: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = hash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWhatsApp = (context: string) => {
    const msg = `Hello Future IT Industry Support, I want to inquire about: ${context}. Please guide me.`;
    window.open(`https://wa.me/917632099528?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative w-full bg-[#040816] text-white overflow-hidden select-none font-sans border-t border-slate-800/80">
      {/* ─── AMBIENT BACKGROUND GLOWS (Pure Luxury Gradient Lighting) ─── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent pointer-events-none opacity-80" />

      {/* ─── MAIN FOOTER CONTENT WRAPPER ─── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-8 sm:pb-12">
        
        {/* ═══════════════════════════════════════════════════════════════════
            ROW 1: BRAND HERO STATEMENT & ADVISOR CTA CARD
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 border-b border-slate-800/70">
          
          {/* Left Brand Summary (Col 1-7) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <img
                src="/images/brand/future_it_logo_dark.png"
                alt="Future IT Industry"
                className="h-10 sm:h-12 w-auto object-contain cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => handleNav('#home')}
              />
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-400/30">
                Official EdTech Platform
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-white tracking-tight leading-snug">
              Learn Today,{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Earn Tomorrow.
              </span>
            </h2>

            <p className="text-sm sm:text-[15px] text-slate-300 font-medium leading-relaxed max-w-2xl">
              Future IT Industry empowers passionate engineering students and graduates across India with hands-on coding practice, production-grade portfolio projects, virtual internships, and high-impact career placement pathways.
            </p>

            {/* 3 Quick Value Pillars */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300 font-semibold">
              <div className="flex items-center gap-1.5 text-cyan-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Job-Ready Industrial Curriculum</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-Time Code Verification</span>
              </div>
              <div className="flex items-center gap-1.5 text-sky-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>700+ Hiring Partner Network</span>
              </div>
            </div>
          </div>

          {/* Right Fast Support & Advisor Card (Col 8-12) */}
          <div className="lg:col-span-5 w-full">
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#0b142c] via-[#091124] to-[#060c1d] border border-cyan-500/25 shadow-[0_8px_32px_rgba(6,182,212,0.12)] text-left space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Counselors Online</span>
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white mt-2">
                    Need Guidance for Your Tech Career?
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Connect directly with our senior mentors for curriculum details, roadmap guidance, and scholarship eligibility.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => handleWhatsApp('General Admission & Career Roadmap')}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onOpenAuthModal) onOpenAuthModal();
                    else handleNav('#courses');
                  }}
                  className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            ROW 2: ORGANIZED 4-COLUMN FOOTER DIRECTORY (Sleek Modern Links)
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 py-12 text-left">
          
          {/* Column 1: Career Programs */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
              <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Career Programs</span>
            </div>
            <div className="w-8 h-[2px] bg-cyan-400 rounded-full" />
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#data-analyst')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Data Analyst with GenAI</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#data-science')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Data Science &amp; Agentic AI</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#ml-engineering')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Machine Learning Engineer</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#ai-engineering')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Artificial Intelligence Track</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#full-stack-web-dev')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Full Stack Web Development</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#courses')}
                  className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer text-left flex items-center gap-1 pt-1"
                >
                  <span>View All 7 Tracks</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Hands-on Practice */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
              <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Hands-on Practice</span>
            </div>
            <div className="w-8 h-[2px] bg-sky-400 rounded-full" />
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#python-challenges')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Python Challenges Lab</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#sql-challenges')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>SQL Query Arena</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#excel-challenges')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Excel Formula Simulator</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#game')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>DSA Coding Practice</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#arena')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Master Practice (14 Tracks)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#ats')}
                  className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer text-left flex items-center gap-1 pt-1"
                >
                  <span>AI ATS Resume Checker</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Career & Growth */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
              <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Career &amp; Growth</span>
            </div>
            <div className="w-8 h-[2px] bg-emerald-400 rounded-full" />
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#internship')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Virtual Internship Program</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#placement')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Job Placement Assistance</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#certificates')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Verified Skill Certificate</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#recommendation')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Letter of Recommendation (LOR)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#earnings')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Affiliate Partner Earnings</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#interview')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Mock Interview Drills</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Trust */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
              <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Company &amp; Legal</span>
            </div>
            <div className="w-8 h-[2px] bg-indigo-400 rounded-full" />
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#about-us')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#contact-us')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Contact Us</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleWhatsApp('Help Center Inquiry')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Help Center &amp; Support</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#privacy-policy')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#terms-and-conditions')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Terms &amp; Conditions</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#refund-policy')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Refund &amp; Cancellation</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            ROW 3: ELEGANT ULTRA-LUXURY BOTTOM BAR (Copyright & Verified Badges)
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          
          {/* Copyright & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="text-slate-300 font-semibold">
              © 2026 Future IT Industry. All rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400">
              Building Skills For A Brighter Tomorrow.
            </span>
          </div>

          {/* Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>100% Secure Platform</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Certificate</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>700+ Hiring Drives</span>
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};
