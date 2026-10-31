import React from 'react';
import {
  Users,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Building,
  BookOpen,
  Headphones,
  Lock,
  Award,
  Sparkles,
} from 'lucide-react';

export interface FullFooterProps {
  onOpenAuthModal?: () => void;
}

export const FullFooter: React.FC<FullFooterProps> = () => {
  const handleNav = (hash: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = hash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSupportClick = () => {
    const msg = 'Hello Future IT Industry Support Team, I need help regarding my course or student account. Please assist me.';
    window.open(`https://wa.me/917632099528?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer
      className="relative w-full bg-[#020c1b] border-t border-slate-800 text-white overflow-hidden select-none font-sans"
      style={{
        backgroundImage: "url('/images/footer/full_footer_clean_backdrop.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'cover',
      }}
    >
      {/* Subtle Top Electric-Cyan Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-[#00D2FF] to-indigo-500 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-9 sm:pt-11 pb-7 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ══════════ LEFT COLUMN: BRAND INFO & STATS ══════════ */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/brand/future_it_logo_dark.png"
                alt="FUTURE IT INDUSTRY"
                className="h-10 sm:h-11 w-auto object-contain cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => handleNav('#home')}
              />
            </div>

            {/* Tagline & Subtitle */}
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-black text-white tracking-wide">
                Learn Today, Earn Tomorrow.
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 font-medium leading-relaxed max-w-md">
                Empowering learners across India to learn, practice, and get placed.
              </p>
            </div>

            {/* 4 Stats Cards Row (50K+ Students | 700+ Hiring Partners | 90%+ Placement Support | 4.8/5 Rating) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 max-w-lg">
              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl py-2 px-2 border border-white/10 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-black text-white">50K+</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Students</span>
              </div>

              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl py-2 px-2 border border-cyan-400/20 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-black text-cyan-200">700+</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Hiring Partners</span>
              </div>

              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl py-2 px-2 border border-emerald-400/20 text-center">
                <div className="flex items-center justify-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-black text-emerald-300">90%+</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Placement Support</span>
              </div>

              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl py-2 px-2 border border-amber-400/20 text-center">
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-black text-amber-300">4.8/5</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Student Rating</span>
              </div>
            </div>
          </div>

          {/* ══════════ RIGHT COLUMNS: COMPANY | EXPLORE | SUPPORT ══════════ */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-4 sm:gap-8 text-left">
            
            {/* Column 1: Company */}
            <div>
              <div className="flex items-center gap-1.5 text-white font-bold text-[14px] sm:text-base">
                <Building className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Company</span>
              </div>
              <div className="w-7 h-[2px] bg-cyan-400 rounded-full mt-1.5 mb-3" />
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#about-us')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#about-us')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Our Mission
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#about-us')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Our Team
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#contact-us')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Career
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#courses')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#contact-us')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Explore */}
            <div>
              <div className="flex items-center gap-1.5 text-white font-bold text-[14px] sm:text-base">
                <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Explore</span>
              </div>
              <div className="w-7 h-[2px] bg-cyan-400 rounded-full mt-1.5 mb-3" />
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#courses')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    All Courses
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#practice')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    DSA Practice
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#practice')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Hackathons
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#interview')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Mock Interviews
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#internship')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Internship
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#placement')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Placement Prep
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#certificates')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Certificates
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <div className="flex items-center gap-1.5 text-white font-bold text-[14px] sm:text-base">
                <Headphones className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Support</span>
              </div>
              <div className="w-7 h-[2px] bg-cyan-400 rounded-full mt-1.5 mb-3" />
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300">
                <li>
                  <button
                    type="button"
                    onClick={handleSupportClick}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#contact-us')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#privacy-policy')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#terms-and-conditions')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#refund-policy')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Refund Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleSupportClick}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Report an Issue
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#contact-us')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    Help &amp; Support
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* ══════════ BOTTOM BAR: COPYRIGHT & 4 TRUST BADGES ══════════ */}
      <div className="relative z-10 w-full py-3 px-4 sm:px-6 lg:px-8 bg-[#010915] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-xs text-slate-400">
          
          {/* Copyright */}
          <div>
            <p className="font-medium text-slate-300">
              &copy; 2026 Future IT Industry. All rights reserved.
            </p>
          </div>

          {/* 4 Trust Badges */}
          <div className="hidden lg:flex items-center gap-5 text-[11px] font-semibold text-slate-300">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Secure Learning Environment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-sky-400" />
              <span>Trusted by 50K+ Students</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Hassle Learning</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Career Focused Programs</span>
            </div>
          </div>

          {/* Mission statement */}
          <div>
            <p className="text-[11px] text-slate-400">
              Empowering learners across India to learn, practice, and get placed.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
