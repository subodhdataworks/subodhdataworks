import { 
  BookOpen, 
  Headphones, 
  FileText, 
  Leaf, 
  ChevronRight 
} from 'lucide-react';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface FutureFooterProps {
  currentLanguage: SupportedLanguage;
  onNavigateSection: (sectionId: string) => void;
}

export const FutureFooter: React.FC<FutureFooterProps> = ({
  onNavigateSection,
}) => {
  return (
    <footer className="relative w-full bg-white border-t border-slate-200/90 overflow-hidden font-sans">
      
      {/* 1. PHOTOREALISTIC CAMPUS BACKGROUND WITH SMOOTH VIGNETTE FADE */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/images/future_it_industries_campus_zoomed_out.jpg')",
          backgroundPosition: "center right",
        }}
      />

      {/* Top tree leaves decorative framing overlay matching media_1792206413094_2c4338ec.png */}
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none bg-cover bg-top opacity-85 hidden md:block"
        style={{
          backgroundImage: "url('/images/future_it_footer_bg.jpg')",
          backgroundPosition: "top center",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)"
        }}
      />

      {/* Left White Gradient Fade to ensure 100% crisp typography on all screens */}
      <div 
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background: "linear-gradient(90deg, #ffffff 0%, #ffffff 32%, rgba(255, 255, 255, 0.95) 44%, rgba(255, 255, 255, 0.72) 56%, rgba(255, 255, 255, 0.15) 75%, transparent 100%)"
        }}
      />

      {/* Mobile background fallback: soft clean gradient */}
      <div 
        className="absolute inset-0 pointer-events-none md:hidden bg-gradient-to-b from-white via-sky-50/20 to-white"
      />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT BRAND COLUMN (col-span-12 md:col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Brand Logo & Slogan */}
            <div className="flex items-center gap-3">
              <img
                src="/images/brand/future_it_logo.png"
                alt="FUTURE IT INDUSTRY"
                className="h-12 sm:h-14 w-auto object-contain cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed max-w-sm">
              FUTURE IT INDUSTRY is the career transformation platform providing hands-on project labs, AI-powered learning, and career support for aspiring technology and data professionals.
            </p>

            {/* Cyan/Blue Accent Bar */}
            <div className="w-12 h-1 bg-sky-500 rounded-full" />

            {/* Powered by Power Green Industries */}
            <div className="pt-1">
              <span className="text-xs text-slate-500 font-medium block mb-1">Powered by</span>
              <div className="inline-flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Leaf className="w-3 h-3 fill-white" />
                </div>
                <span className="text-sm font-extrabold text-emerald-800 tracking-tight">
                  Power Green Industries
                </span>
              </div>
            </div>

            {/* 4 Round Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0a66c2] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

          </div>

          {/* 3 RIGHT COLUMNS: EXPLORE, STUDENT SUPPORT, LEGAL (col-span-12 md:col-span-7) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 pt-2">
            
            {/* Column 1: Explore */}
            <div>
              {/* Header with Blue Badge */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
                  <BookOpen className="w-4 h-4 stroke-[2.4]" />
                </div>
                <h4 className="text-base font-black text-slate-900 tracking-tight">
                  Explore
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                <li>
                  <button
                    onClick={() => onNavigateSection('courses')}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                    <span>All Courses</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('courses')}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                    <span>Training Programs</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('placement-support')}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                    <span>Career Support</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('real-success')}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                    <span>Success Stories</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Student Support */}
            <div>
              {/* Header with Purple Badge */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#6366f1] text-white flex items-center justify-center shadow-xs shrink-0">
                  <Headphones className="w-4 h-4 stroke-[2.4]" />
                </div>
                <h4 className="text-base font-black text-slate-900 tracking-tight">
                  Student Support
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                <li>
                  <button
                    onClick={() => onNavigateSection('future-plan')}
                    className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
                    <span>FAQs</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('why-future-ai')}
                    className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
                    <span>Eligibility Guidelines</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('future-plan')}
                    className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
                    <span>Contact Us</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              {/* Header with Green Badge */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
                  <FileText className="w-4 h-4 stroke-[2.4]" />
                </div>
                <h4 className="text-base font-black text-slate-900 tracking-tight">
                  Legal
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                <li>
                  <a
                    href="#terms"
                    className="hover:text-emerald-600 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5" />
                    <span>Terms of Service</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-emerald-600 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5" />
                    <span>Privacy Policy</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT STRIP (1:1 with Reference) */}
      <div className="relative z-10 border-t border-slate-200/90 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-semibold text-slate-600">
          <div>
            © 2026 FUTURE IT INDUSTRY. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-300">|</span>
            <div>
              Learn Today. <span className="text-blue-600 font-extrabold">Earn Tomorrow.</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};
