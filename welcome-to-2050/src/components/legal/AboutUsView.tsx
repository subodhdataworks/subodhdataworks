import React from 'react';
import {
  ArrowLeft,
  Building2,
  Leaf,
  Target,
  Compass,
  Award,
  CheckCircle2,
  Users,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Sparkles,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { FutureLogo } from '../futureai/FutureLogo';

interface AboutUsViewProps {
  onBack?: () => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({ onBack }) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (typeof window !== 'undefined') {
      window.history.length > 1 ? window.history.back() : (window.location.hash = '#dashboard');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-20 select-none">
      {/* ─── Top Sticky Header ─── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 py-3 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-95 transition-all shadow-2xs cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div
            className="cursor-pointer"
            onClick={() => {
              if (typeof window !== 'undefined') window.location.hash = '#dashboard';
            }}
          >
            <FutureLogo size="sm" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-black flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Company Profile</span>
          </span>
        </div>
      </header>

      {/* ─── Main Content Container ─── */}
      <main className="max-w-4xl mx-auto px-4 pt-6 sm:pt-10 space-y-6 text-left">
        {/* Hero Banner Card */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-500/20 via-sky-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-bold">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Parent Enterprise: POWER GREEN INDUSTRIES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              About <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">Us</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Welcome to <strong className="text-white">FUTURE IT INDUSTRY</strong>, the flagship next-generation digital skill development &amp; career acceleration platform operated by <strong className="text-white">POWER GREEN INDUSTRIES</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Learn Today. Earn Tomorrow.</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>Registered &amp; Certified Entity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Entity & Business Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Official Business Details */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                  Full Business Name
                </span>
                <h2 className="text-lg font-black text-slate-900">
                  POWER GREEN INDUSTRIES
                </h2>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-900">Operating Brand:</strong>{' '}
                  FUTURE IT INDUSTRY (www.futureitindustry.com)
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-900">Nature of Business:</strong>{' '}
                  Information Technology Education, Computer Training, AI &amp; Software Development Courses, Technical Skill Certification &amp; Career Placement Services.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-900">Registered Office:</strong>{' '}
                  4, Varma house, Bakarpur, Bihar, PIN: 844127, India
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-900">Governing Law:</strong> Republic of India
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                  Our Purpose
                </span>
                <h2 className="text-lg font-black text-slate-900">
                  Mission &amp; Vision
                </h2>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <div className="flex items-center gap-2 text-blue-900 font-bold mb-1">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Our Mission</span>
                </div>
                <p className="text-blue-950/80 leading-relaxed text-xs sm:text-[13px]">
                  To empower every passionate student with high-demand tech skills, real industrial project experience, and accessible education regardless of geographical or financial barriers.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-900 font-bold mb-1">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Our Vision</span>
                </div>
                <p className="text-emerald-950/80 leading-relaxed text-xs sm:text-[13px]">
                  To build India's premier gamified EdTech ecosystem where students learn practical software engineering, build real portfolio projects, and secure rewarding placements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer / Key Pillars */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Core Offerings
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              What We Deliver to Learners
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Industrial IT Programs</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hands-on courses in Python Mastery, Data Analytics, Full Stack Web Development, Machine Learning, and Agentic AI designed to align with current industry demands.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Gamified Practice Arena</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn-by-doing coding labs, interactive MCQ challenges, automated test evaluations, and milestone achievements that keep learners engaged and motivated.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <Briefcase className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Placement &amp; Career Prep</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Smart ATS resume scoring and optimization, real-time AI mock interview rooms with live voice feedback, and dedicated referral partnerships.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Learn &amp; Earn Ecosystem</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent student reward model where active learners and community ambassadors earn verified incentives while helping peers upskill.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Values */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-black text-slate-900">
            Our Core Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-slate-900">Transparency</h5>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Clear curricula, upfront pricing, and verified learning outcomes with no hidden surprises.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-slate-900">Student First</h5>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Every lecture, lab challenge, and mentor interaction is tailored for learner employability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-slate-900">Data Security</h5>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Safe payments, encrypted user sessions, and strict compliance with Indian digital regulations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact & Policies Link Card */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 rounded-3xl p-6 border border-emerald-200/80 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                Official Inquiries &amp; Support
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Have questions or need assistance?
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Contact POWER GREEN INDUSTRIES support desk directly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#contact-us"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-xs transition-transform active:scale-95"
              >
                Contact Support →
              </a>
              <a
                href="#terms"
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold shadow-2xs transition-all"
              >
                Terms &amp; Policies
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-emerald-200/60 flex flex-wrap gap-4 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>+91 8210778369</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>4, Varma house, Bakarpur, Bihar - 844127</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center pt-2 pb-8 text-slate-400 text-xs font-medium space-y-1">
          <p>© 2026 POWER GREEN INDUSTRIES. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            FUTURE IT INDUSTRY • Learn Today. Earn Tomorrow.
          </p>
        </div>
      </main>
    </div>
  );
};
