import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  FileCheck,
  Coins,
  GraduationCap,
  Briefcase,
  Search,
  Bell,
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronRight,
  Users,
  Building2,
  Trophy,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';
import { loginWithGooglePopup, loginWithMobileFirebase } from '../../services/realAuthService';
import { soundEffects } from '../../services/soundEffects';
import { FutureAuthModal } from './FutureAuthModal';

interface FutureAiHomeProps {
  profile?: any;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onStartLearning?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
  onLoginSuccess?: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
  onOpenDashboard?: () => void;
  onLogout?: () => void;
}

export const FutureAiHome: React.FC<FutureAiHomeProps> = ({
  isLoggedIn = false,
  userName = 'Learner',
  onLoginSuccess,
  onOpenDashboard,
}) => {
  // Login Form States
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Interactive UI States
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle direct login from hero card
  const handleDirectLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoginError(null);

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      soundEffects.playLock();
      setLoginError('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      setLoginLoading(true);
      soundEffects.playClick();
      const user = await loginWithMobileFirebase(cleanPhone);
      soundEffects.playSuccess();
      if (onLoginSuccess) {
        onLoginSuccess(user.name || 'Learner', user.email, user.avatar || '', 'student');
      }
      if (typeof window !== 'undefined') {
        window.location.hash = '#dashboard';
      }
    } catch (err: any) {
      soundEffects.playLock();
      setLoginError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle Google Sign In
  const handleGoogleSignIn = async () => {
    setLoginError(null);
    try {
      setLoginLoading(true);
      soundEffects.playClick();
      const res = await loginWithGooglePopup();
      soundEffects.playSuccess();
      if (onLoginSuccess) {
        onLoginSuccess(res.name || 'Learner', res.email, res.avatar, 'student');
      }
      if (typeof window !== 'undefined') {
        window.location.hash = '#dashboard';
      }
    } catch (err: any) {
      soundEffects.playLock();
      setLoginError(err.message || 'Google sign in was cancelled or failed.');
    } finally {
      setLoginLoading(false);
    }
  };

  const courseList = [
    { title: 'Data Analyst with GenAI', tag: 'Flagship', hash: '#data-analyst' },
    { title: 'Data Science & Agentic AI', tag: 'Popular', hash: '#data-science' },
    { title: 'Machine Learning Engineering', tag: 'High Package', hash: '#ml-engineering' },
    { title: 'AI Engineering & LLMOps', tag: 'Trending', hash: '#ai-engineering' },
    { title: 'Full Stack MERN Developer', tag: 'Comprehensive', hash: '#full-stack' },
    { title: 'Power BI & Advanced Analytics', tag: 'Business', hash: '#powerbi' },
  ];

  const searchItems = [
    { name: 'Python Coding Challenges (Topic 1 Free)', hash: '#python-challenges' },
    { name: 'SQL Query Arena (Topic 1 Free)', hash: '#sql-challenges' },
    { name: 'Excel Formula Lab (Topic 1 Free)', hash: '#excel-challenges' },
    { name: 'Coding Practice Master Hub (14 Tracks)', hash: '#practice' },
    { name: 'ATS Resume Checker & Score Calculator', hash: '#ats-resume-checker' },
    { name: 'Affiliate Partner Program & Earn Cash', hash: '#earnings' },
    { name: 'Placement & Job Drive Guarantee', hash: '#placement' },
  ];

  return (
    <div className="min-h-screen bg-[#FBFDFF] text-slate-800 font-sans flex flex-col selection:bg-blue-500 selection:text-white">
      
      {/* ─── 1. TOP NAVBAR (Exact 1:1 Reference Header) ─── */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3">
          
          {/* LEFT: Future IT Industries Official Brand Logo */}
          <div 
            onClick={() => {
              if (typeof window !== 'undefined') window.location.hash = '#home';
            }}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#1a73e8] via-[#0284c7] to-[#0ea5e9] flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-black text-2xl tracking-tighter italic">F</span>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black text-slate-900 tracking-tight leading-none">
                FUTURE IT
              </span>
              <span className="text-[10px] sm:text-xs font-black text-[#1a73e8] tracking-widest leading-tight mt-0.5">
                INDUSTRIES
              </span>
              <span className="text-[9px] text-slate-400 font-semibold leading-none mt-0.5 hidden sm:block">
                Learn Today, Earn Tomorrow.
              </span>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-bold text-slate-700">
            
            {/* Courses Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-blue-600 transition cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Courses</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {coursesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setCoursesDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                    Explore Career Programs
                  </div>
                  {courseList.map((course) => (
                    <div
                      key={course.title}
                      onClick={() => {
                        setCoursesDropdownOpen(false);
                        window.location.hash = course.hash;
                      }}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-blue-50 text-slate-800 hover:text-blue-600 transition cursor-pointer text-xs font-semibold"
                    >
                      <span>{course.title}</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded-full">
                        {course.tag}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Coding Practice */}
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#practice';
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-blue-600 transition cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-indigo-600" />
              <span>Coding Practice</span>
            </button>

            {/* ATS Resume Checker */}
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#ats-resume-checker';
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-blue-600 transition cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>ATS Resume Checker</span>
            </button>

            {/* Earn Cash */}
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#earnings';
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-blue-600 transition cursor-pointer"
            >
              <Coins className="w-4 h-4 text-amber-500" />
              <span>Earn Cash</span>
            </button>

            {/* Internship */}
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#internship';
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-blue-600 transition cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>Internship</span>
            </button>

            {/* Placement */}
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#placement';
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-blue-600 transition cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-rose-600" />
              <span>Placement</span>
            </button>
          </nav>

          {/* RIGHT: Search, Notifications, Login & Sign Up */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search */}
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              className="p-2 sm:p-2.5 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition cursor-pointer"
              title="Search topics & courses"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Bell Notifications */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 sm:p-2.5 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition cursor-pointer"
                title="Notifications"
              >
                <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
              </button>

              {notificationsOpen && (
                <div 
                  className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 animate-in fade-in"
                  onMouseLeave={() => setNotificationsOpen(false)}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                    <span className="text-xs font-bold text-slate-900">Notifications</span>
                    <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">New</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-blue-50/70 text-slate-700">
                      <strong className="block text-blue-900 font-bold">Topic 1 Free Coding Challenges</strong>
                      Python, SQL & Excel introductory challenges are 100% unlocked for everyone.
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50/70 text-slate-700">
                      <strong className="block text-emerald-900 font-bold">700+ Hiring Partners Active</strong>
                      Direct placement drives active for Data Analyst & AI roles.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setAuthModalOpen(true);
              }}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-xs sm:text-sm transition cursor-pointer"
            >
              Login
            </button>

            {/* Sign Up Button */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setAuthModalOpen(true);
              }}
              className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#1a73e8] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition shadow-sm cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* ─── 2. MAIN HERO SECTION (3 Columns: Left Text, Center Artwork, Right Login Card) ─── */}
      <section className="relative w-full pt-6 sm:pt-10 pb-8 sm:pb-12 overflow-hidden bg-gradient-to-b from-[#e8f2fe]/60 via-[#f0f6ff]/40 to-white">
        
        {/* Ambient Decorative Light Orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* LEFT COLUMN: Headline & Subheadline (lg:col-span-4 xl:col-span-4) */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center text-center lg:text-left z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-black tracking-tight leading-[1.12] text-slate-950">
                <span>World&apos;s First</span>
                <span className="block text-[#1a73e8]">Affordable Easy</span>
                <span className="block">
                  AI Learning <span className="text-[#f59e0b] drop-shadow-xs">Platform</span>
                </span>
              </h1>

              <div className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg font-medium text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                <p className="font-semibold text-slate-700">Real Practical Courses. Real Projects.</p>
                <p>Industry Guidance.</p>
                <p className="text-slate-800 font-bold mt-1">From Learning to Earning, We&apos;re With You.</p>
              </div>

              {/* Mobile CTA (Hidden on desktop because right card has login) */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:hidden">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('login-card-container');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl bg-[#1a73e8] text-white font-bold text-sm shadow-md"
                >
                  Start Learning Now
                </button>
                <button
                  type="button"
                  onClick={() => {
                    window.location.hash = '#practice';
                  }}
                  className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-sm"
                >
                  Free Coding Practice
                </button>
              </div>
            </div>

            {/* CENTER COLUMN: Hero Visual Artwork (Student with Laptop & Orbiting Tech Badges) (lg:col-span-4 xl:col-span-5) */}
            <div className="lg:col-span-4 xl:col-span-5 flex items-center justify-center relative z-10">
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                {/* Glowing Aura Rings behind Artwork */}
                <div className="absolute inset-0 bg-radial from-cyan-400/20 via-blue-500/10 to-transparent rounded-full blur-2xl scale-110 pointer-events-none" />
                
                {/* 1:1 Feathered Character with Orbiting Badges */}
                <img
                  src="/images/hero_student_orbit_feathered.png"
                  alt="Future IT Student with Orbiting AI Badges"
                  className="relative z-10 w-full h-auto max-h-[380px] object-contain drop-shadow-[0_20px_40px_rgba(26,115,232,0.22)] select-none pointer-events-none transform transition-transform hover:scale-102 duration-300"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Embedded Welcome Back Login Card (lg:col-span-4 xl:col-span-3) */}
            <div id="login-card-container" className="lg:col-span-4 xl:col-span-3 flex justify-center lg:justify-end z-10">
              <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_45px_rgba(26,115,232,0.12)] border border-slate-200/90 transition-all hover:shadow-[0_16px_55px_rgba(26,115,232,0.18)]">
                
                {/* Card Header */}
                <div className="text-center mb-5">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Welcome Back
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Login to continue your learning journey
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleDirectLogin} className="space-y-3.5">
                  {/* Mobile Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-xs sm:text-sm font-semibold placeholder:text-slate-400 outline-none transition"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-xs sm:text-sm font-semibold placeholder:text-slate-400 outline-none transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Error Notification */}
                  {loginError && (
                    <div className="text-[11px] text-rose-600 bg-rose-50 border border-rose-200 rounded-lg p-2 font-semibold text-center">
                      {loginError}
                    </div>
                  )}

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={loginLoading}
                    className="w-full py-3 rounded-xl bg-[#1a73e8] hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loginLoading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span>Login</span>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="relative my-4 flex items-center justify-center">
                  <div className="h-px bg-slate-200 w-full" />
                  <span className="absolute bg-white px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    or continue with
                  </span>
                </div>

                {/* Google Sign In Button */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={loginLoading}
                  className="w-full py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-all shadow-2xs hover:shadow-xs flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. METRICS / TRUST STAT BADGES (Row of 4 Glass Cards) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          
          {/* Card 1: 100K+ Students */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3.5 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                100K+
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Students
              </div>
            </div>
          </div>

          {/* Card 2: 700+ Hiring Partners */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3.5 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                700+
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Hiring Partners
              </div>
            </div>
          </div>

          {/* Card 3: 99% Placement Support */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3.5 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                99%
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Placement Support
              </div>
            </div>
          </div>

          {/* Card 4: Industry Aligned Curriculum */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3.5 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                Industry
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Aligned Curriculum
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 4. ACTION FEATURE CARDS (Row of 6 Horizontal Cards) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
          
          {/* Action 1: Industry-Focused Courses */}
          <div
            onClick={() => {
              soundEffects.playClick();
              window.location.hash = '#courses';
            }}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Industry-Focused Courses
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Job-ready curriculum with real projects
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 2: Coding Practice */}
          <div
            onClick={() => {
              soundEffects.playClick();
              window.location.hash = '#practice';
            }}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Coding Practice
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Practice, build skills and solve problems
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 3: ATS Resume Checker */}
          <div
            onClick={() => {
              soundEffects.playClick();
              window.location.hash = '#ats-resume-checker';
            }}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  ATS Resume Checker
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Get AI-powered resume score
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 4: Earn Cash */}
          <div
            onClick={() => {
              soundEffects.playClick();
              window.location.hash = '#earnings';
            }}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-pink-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Coins className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Earn Cash
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Refer & earn real money
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 5: Internship */}
          <div
            onClick={() => {
              soundEffects.playClick();
              window.location.hash = '#internship';
            }}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Internship
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Gain real-world experience
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* Action 6: Placement Support */}
          <div
            onClick={() => {
              soundEffects.playClick();
              window.location.hash = '#placement';
            }}
            className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Placement Support
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                  Get hired with top companies
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>

        </div>
      </section>

      {/* ─── 5. HIRING PARTNERS TICKER ROW (Exact 1:1 Reference Design) ─── */}
      <footer className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Label */}
          <div className="text-xs sm:text-sm font-extrabold text-slate-700 whitespace-nowrap">
            Our Hiring Partners
          </div>

          {/* Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs font-bold text-slate-500">
            {/* TCS */}
            <span className="text-rose-600 font-black text-sm tracking-tighter">tcs</span>

            {/* Infosys */}
            <span className="text-[#007cc3] font-black text-sm tracking-tight">Infosys</span>

            {/* Accenture */}
            <span className="text-purple-800 font-extrabold text-sm tracking-tight flex items-center gap-0.5">
              accenture <span className="text-[#a100ff]">&gt;</span>
            </span>

            {/* Wipro */}
            <span className="text-slate-800 font-black text-sm tracking-normal flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-blue-500" />
              wipro
            </span>

            {/* Google */}
            <span className="font-extrabold text-sm tracking-tight flex items-center">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>

            {/* Microsoft */}
            <span className="text-slate-700 font-bold text-sm tracking-tight flex items-center gap-1.5">
              <span className="grid grid-cols-2 gap-0.5 w-3 h-3">
                <span className="bg-[#f25022]" />
                <span className="bg-[#7fba00]" />
                <span className="bg-[#00a4ef]" />
                <span className="bg-[#ffb900]" />
              </span>
              Microsoft
            </span>

            {/* Amazon */}
            <span className="text-slate-900 font-black text-sm tracking-tight">
              amazon
            </span>

            {/* Deloitte */}
            <span className="text-slate-900 font-black text-sm tracking-tight">
              Deloitte<span className="text-emerald-500">.</span>
            </span>

            {/* Capgemini */}
            <span className="text-[#0070ad] font-bold text-sm tracking-tight flex items-center gap-1">
              Capgemini <span className="text-[#0070ad] text-xs">♠</span>
            </span>

            {/* IBM */}
            <span className="text-[#1f70c1] font-black text-sm tracking-widest font-mono">
              IBM
            </span>

            {/* 700+ More */}
            <span className="text-slate-400 font-semibold text-xs whitespace-nowrap">
              and 700+ more...
            </span>
          </div>

        </div>
      </footer>

      {/* Quick Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-start justify-center pt-24 px-4">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Search className="w-4 h-4 text-blue-600" />
                <span>Search Future IT Industries</span>
              </div>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-3">
              <input
                type="text"
                placeholder="Type course, skill, or tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold outline-none focus:border-blue-500"
              />
            </div>

            <div className="mt-4 space-y-1.5 max-h-60 overflow-y-auto">
              {searchItems
                .filter((item) => !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item) => (
                  <div
                    key={item.name}
                    onClick={() => {
                      setSearchModalOpen(false);
                      window.location.hash = item.hash;
                    }}
                    className="p-2.5 rounded-xl hover:bg-blue-50 text-slate-800 text-xs font-semibold cursor-pointer flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Clean Auth Modal for Sign Up / Full Login Options */}
      <FutureAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(name, email, avatar, role) => {
          setAuthModalOpen(false);
          onLoginSuccess?.(name, email, avatar, role);
        }}
      />

    </div>
  );
};
