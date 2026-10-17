import React from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { Heart, ShieldCheck, Mail, MessageCircle } from 'lucide-react';

interface LandingFooterProps {
  onOpenLogin: () => void;
  onNavigateSection?: (id: string) => void;
}

export const LandingFooter: React.FC<LandingFooterProps> = ({ onOpenLogin, onNavigateSection }) => {
  const scrollTo = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="dark" size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-normal leading-relaxed">
              Your Personal AI Mentor for becoming a Data Analyst. Master Python, SQL, Excel, and Power BI with continuous AI coaching, interactive practice, and verified portfolio projects.
            </p>
            <div className="flex items-center gap-3 text-slate-400 pt-2">
              <span className="text-xs font-semibold">Join 50,000+ data learners</span>
            </div>
          </div>

          {/* Quick Links 1: Learning */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Curriculum
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Python for Data Analysis
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  SQL Mastery & Joins
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Advanced Excel & Formulas
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Power BI & DAX Modeling
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: Career & Practice */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Career & Practice
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('practice')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Interactive Practice Sandbox
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Portfolio Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('interview')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Interview Question Bank
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Lifetime Pro Deal
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links 3: Account & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Support & Access
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenLogin} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Login with WhatsApp
                </button>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% Privacy First
                </span>
              </li>
              <li>
                <span className="text-slate-400">WhatsApp Support: +91 98765 43210</span>
              </li>
              <li>
                <span className="text-slate-400">support@mentorai.pro</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Mentor AI Pro. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Honor Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
