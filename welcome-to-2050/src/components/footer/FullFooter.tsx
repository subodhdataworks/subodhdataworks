import React, { useState } from 'react';
import { ChevronDown, Zap, Building2, Headphones, ExternalLink, ArrowRight } from 'lucide-react';

export interface FullFooterProps {
  onOpenAuthModal?: () => void;
  className?: string;
}

export const FullFooter: React.FC<FullFooterProps> = ({ onOpenAuthModal, className = '' }) => {
  const [openSection, setOpenSection] = useState<'quick' | 'company' | 'support' | null>(null);

  const toggleSection = (section: 'quick' | 'company' | 'support') => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleNav = (hash: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = hash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHelpCenter = () => {
    const msg = 'Hello Future IT Industry Support Team, I need help regarding my course or student account. Please assist me.';
    window.open(`https://wa.me/917632099528?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* =========================================================================
          1. MOBILE FULL FOOTER (< md) (EXACT MATCH TO REFERENCE media_1793571609472_829d43c3.jpg)
          ========================================================================= */}
      <footer className={`block md:hidden relative w-full bg-gradient-to-b from-[#f2f7fd] via-[#ffffff] to-[#ffffff] text-slate-800 overflow-hidden select-none font-sans ${className}`}>
        
        {/* Top Header Card: Brand Logo + Tagline (Left) & Campus Building with Tree Leaves (Right) */}
        <div className="relative w-full h-[115px] sm:h-[125px] overflow-hidden">
          {/* Building image pinned right */}
          <div
            className="absolute inset-0 bg-no-repeat bg-right-top bg-cover"
            style={{
              backgroundImage: "url('/images/future_it_footer_bg.jpg')",
              backgroundSize: 'auto 100%',
              backgroundPosition: 'right top',
            }}
          />

          {/* White to transparent gradient fade on left */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 42%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.2) 80%, transparent 100%)',
            }}
          />

          {/* Left Brand Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-5">
            <img
              src="/images/brand/future_it_logo.png"
              alt="FUTURE IT INDUSTRY"
              className="h-8 sm:h-9 w-auto object-contain cursor-pointer self-start"
              onClick={() => handleNav('#home')}
            />
            <p className="text-[12px] sm:text-[13px] font-bold text-slate-900 tracking-tight mt-1.5">
              Learn Today. Earn Tomorrow.
            </p>
          </div>

          {/* Soft Flowing Wave Separator */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
            <svg viewBox="0 0 400 18" className="w-full h-3" preserveAspectRatio="none" fill="none">
              <path
                d="M0,8 C120,18 280,0 400,10 L400,18 L0,18 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>

        {/* Accordion Cards Container */}
        <div className="relative z-10 w-full px-3.5 sm:px-4 pt-2.5 pb-20 space-y-2.5">
          
          {/* ??? ACCORDION 1: QUICK LINKS ??? */}
          <div className="rounded-2xl bg-white border border-blue-100/90 shadow-[0_2px_8px_rgba(0,102,255,0.04)] overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => toggleSection('quick')}
              className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer active:bg-blue-50/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 fill-[#0066FF] stroke-[#0066FF]" />
                </div>
                <span className="text-[14.5px] font-bold text-slate-900 tracking-tight">
                  Quick Links
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-700 transition-transform duration-200 shrink-0 ${
                  openSection === 'quick' ? 'rotate-180 text-[#0066FF]' : ''
                }`}
              />
            </button>

            {openSection === 'quick' && (
              <div className="px-4 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/40">
                <div className="grid grid-cols-1 gap-1.5 text-xs font-semibold text-slate-700">
                  <button
                    type="button"
                    onClick={() => handleNav('#courses')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>Career Courses (7 Flagship Tracks)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#game')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>DSA Coding Practice &amp; Hackathon</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#ats')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>ATS Resume Checker</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#internship')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>3 Month Verified Internship</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#placement')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>Placement &amp; Job Support</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ??? ACCORDION 2: COMPANY ??? */}
          <div className="rounded-2xl bg-white border border-blue-100/90 shadow-[0_2px_8px_rgba(0,102,255,0.04)] overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => toggleSection('company')}
              className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer active:bg-blue-50/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 stroke-[2.3]" />
                </div>
                <span className="text-[14.5px] font-bold text-slate-900 tracking-tight">
                  Company
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-700 transition-transform duration-200 shrink-0 ${
                  openSection === 'company' ? 'rotate-180 text-[#0066FF]' : ''
                }`}
              />
            </button>

            {openSection === 'company' && (
              <div className="px-4 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/40">
                <div className="grid grid-cols-1 gap-1.5 text-xs font-semibold text-slate-700">
                  <button
                    type="button"
                    onClick={() => handleNav('#about-us')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>About Us</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#contact-us')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#privacy-policy')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>Privacy Policy</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#terms-and-conditions')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>Terms &amp; Conditions</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ??? ACCORDION 3: SUPPORT ??? */}
          <div className="rounded-2xl bg-white border border-blue-100/90 shadow-[0_2px_8px_rgba(0,102,255,0.04)] overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => toggleSection('support')}
              className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer active:bg-blue-50/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                  <Headphones className="w-4 h-4 stroke-[2.3]" />
                </div>
                <span className="text-[14.5px] font-bold text-slate-900 tracking-tight">
                  Support
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-700 transition-transform duration-200 shrink-0 ${
                  openSection === 'support' ? 'rotate-180 text-[#0066FF]' : ''
                }`}
              />
            </button>

            {openSection === 'support' && (
              <div className="px-4 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/40">
                <div className="grid grid-cols-1 gap-1.5 text-xs font-semibold text-slate-700">
                  <button
                    type="button"
                    onClick={handleHelpCenter}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors text-emerald-700"
                  >
                    <span>WhatsApp Help Center (+91 7632099528)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#contact-us')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>Frequently Asked Questions (FAQs)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#refund-policy')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>Refund Policy</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('#placement')}
                    className="py-1.5 px-2.5 rounded-lg hover:bg-blue-50 text-left flex items-center justify-between transition-colors"
                  >
                    <span>Placement Career Advisor</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Copyright & Slogan */}
          <div className="pt-3 pb-1 border-t border-slate-200/70 text-center space-y-1">
            <p className="text-[11.5px] font-semibold text-slate-800 tracking-tight">
              &copy; 2026 Future IT Industry. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-[10.5px] font-medium text-slate-500">
              Empowering learners across India to learn, practice, and get placed.
            </p>
          </div>

        </div>

        {/* Flowing Curved Bottom Gradient Wave (Blue -> Cyan -> Emerald) */}
        <div className="w-full overflow-hidden leading-none -mt-1 pointer-events-none">
          <svg viewBox="0 0 400 18" className="w-full h-3.5" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="fullWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="45%" stopColor="#00D2FF" />
                <stop offset="100%" stopColor="#00E599" />
              </linearGradient>
            </defs>
            <path
              d="M0,14 C110,4 260,16 400,2 L400,18 L0,18 Z"
              fill="url(#fullWaveGrad)"
            />
          </svg>
        </div>
      </footer>

      {/* =========================================================================
          2. DESKTOP FULL FOOTER (>= md) (100% UNCHANGED)
          ========================================================================= */}
      <footer
        className={`hidden md:block relative w-full border-t border-slate-700/60 overflow-hidden text-white select-none font-sans ${className}`}
        style={{
          backgroundImage: "url('/images/future_ai_campus_footer.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 55%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#030c1c]/95 via-[#041226]/80 to-[#041226]/40"
        />

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-[#00D2FF] to-indigo-500 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-7 lg:gap-8 items-start pb-7">
            
            {/* 1. BRAND (LEFT) */}
            <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 flex flex-col items-start text-left">
              <img
                src="/images/brand/future_it_logo_dark.png"
                alt="FUTURE IT INDUSTRIES"
                className="h-8 sm:h-9 w-auto object-contain cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => handleNav('#home')}
              />
              <p className="text-[13.5px] sm:text-[14px] text-slate-200 font-medium mt-3 leading-relaxed tracking-wide">
                India&apos;s #1 AI &amp; Data Science Career Accelerator.
                <br />
                <span className="text-white font-semibold">Learn Today, Earn Tomorrow.</span>
              </p>
            </div>

            {/* 2. QUICK LINKS */}
            <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start text-left">
              <h4 className="text-[16px] sm:text-[17px] font-bold text-white tracking-wide">
                Quick Links
              </h4>
              <div className="w-8 h-[2.5px] bg-[#00D2FF] rounded-full mt-1.5 mb-3" />
              <ul className="space-y-2 text-[13.5px] sm:text-[14px] font-medium text-slate-200">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#courses')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#game')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    DSA Coding Practice
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#ats')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    ATS Resume Checker
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#internship')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    Internship
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#placement')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    Placement Support
                  </button>
                </li>
              </ul>
            </div>

            {/* 3. COMPANY */}
            <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start text-left">
              <h4 className="text-[16px] sm:text-[17px] font-bold text-white tracking-wide">
                Company
              </h4>
              <div className="w-8 h-[2.5px] bg-[#00D2FF] rounded-full mt-1.5 mb-3" />
              <ul className="space-y-2 text-[13.5px] sm:text-[14px] font-medium text-slate-200">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#about-us')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#contact-us')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#privacy-policy')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#terms-and-conditions')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>
            </div>

            {/* 4. SUPPORT */}
            <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start text-left">
              <h4 className="text-[16px] sm:text-[17px] font-bold text-white tracking-wide">
                Support
              </h4>
              <div className="w-8 h-[2.5px] bg-[#00D2FF] rounded-full mt-1.5 mb-3" />
              <ul className="space-y-2 text-[13.5px] sm:text-[14px] font-medium text-slate-200">
                <li>
                  <button
                    type="button"
                    onClick={handleHelpCenter}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#contact-us')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#refund-policy')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    Refund Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('#placement')}
                    className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                  >
                    Career
                  </button>
                </li>
              </ul>
            </div>

            {/* 5. RIGHT SPACER */}
            <div className="hidden lg:block lg:col-span-2 pointer-events-none" />

          </div>

          <div className="border-t border-slate-700/60 pt-4 pb-1 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-xs sm:text-[13px] text-slate-300">
            <p className="font-normal text-slate-300">
              &copy; 2026 Future IT Industry. All rights reserved.
            </p>
            <p className="font-normal text-slate-300">
              Empowering learners across India to learn, practice, and get placed.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};
