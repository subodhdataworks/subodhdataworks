import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  FileCheck,
  Coins,
  GraduationCap,
  Briefcase,
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  Users,
  Building2,
  Trophy,
  Star
} from 'lucide-react';
import { loginWithGooglePopup, loginWithMobileFirebase } from '../../services/realAuthService';
import { soundEffects } from '../../services/soundEffects';
import { FutureAdvancedHeader } from './FutureAdvancedHeader';
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
}) => {
  // Direct Login Card States
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Full Auth Modal
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Prompt Login helper for any unauthenticated action
  const promptLogin = () => {
    soundEffects.playClick();
    setAuthModalOpen(true);
  };

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

  return (
    <div className="min-h-screen bg-[#FBFDFF] text-slate-800 font-sans flex flex-col selection:bg-blue-500 selection:text-white">
      
      {/* ─── 1. EXACT POST-LOGIN HEADER (Reused with isLoggedIn={false} prompting login on click) ─── */}
      <FutureAdvancedHeader
        userName={userName}
        activeNavTab="home"
        isLoggedIn={false}
        onNavigateHome={() => {
          if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateLearning={promptLogin}
        onNavigatePractice={promptLogin}
        onOpenAtsResume={promptLogin}
        onNavigateEarn={promptLogin}
        onNavigateInternship={promptLogin}
        onNavigatePlacement={promptLogin}
        onOpenLogin={promptLogin}
        onOpenSignUp={promptLogin}
      />

      {/* ─── 2. MAIN HERO SECTION (Exact 1:1 Reference media_1792906774972_43c15f9e.jpg) ─── */}
      <section className="relative w-full pt-4 sm:pt-6 pb-6 sm:pb-8 overflow-hidden bg-gradient-to-b from-[#e8f2fe]/70 via-[#f0f6ff]/40 to-white">
        
        {/* Soft Ambient Aurora Lights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
            
            {/* LEFT COLUMN: Headline & Subheadline (lg:col-span-4) */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center text-center lg:text-left z-10 pl-0 lg:pl-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-black tracking-tight leading-[1.08] text-[#0f172a]">
                <span className="block">World&apos;s First</span>
                <span className="block text-[#1a73e8]">Affordable Easy</span>
                <span className="block">
                  AI Learning <span className="text-[#f59e0b] drop-shadow-xs">Platform</span>
                </span>
              </h1>

              <div className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] font-semibold text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                <p>Real Practical Courses. Real Projects.</p>
                <p>Industry Guidance.</p>
                <p className="text-slate-800 font-bold mt-1">From Learning to Earning, We&apos;re With You.</p>
              </div>
            </div>

            {/* CENTER COLUMN: Hero Visual Artwork (Student + Glowing Laptop + 7 Orbiting Badges + Skyline) (lg:col-span-4 xl:col-span-5) */}
            <div className="lg:col-span-4 xl:col-span-5 flex items-center justify-center relative z-10 px-0">
              <div className="relative w-full max-w-[520px] flex items-center justify-center">
                {/* Glowing Backdrop Aura */}
                <div className="absolute inset-0 bg-radial from-cyan-400/25 via-blue-500/15 to-transparent rounded-full blur-2xl scale-110 pointer-events-none" />
                
                {/* 1:1 Blended Center Artwork from Reference Mockup */}
                <img
                  src="/images/hero_tech_orbit_blended.png"
                  alt="Future IT Industries AI Learning Platform"
                  className="relative z-10 w-full h-auto max-h-[360px] sm:max-h-[400px] object-contain drop-shadow-[0_20px_45px_rgba(26,115,232,0.22)] select-none pointer-events-none transform transition-transform hover:scale-102 duration-300"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Embedded Welcome Back Direct Login Card (lg:col-span-4 xl:col-span-3) */}
            <div className="lg:col-span-4 xl:col-span-3 flex justify-center lg:justify-end z-10 pr-0 lg:pr-2">
              <div className="w-full max-w-[340px] sm:max-w-[360px] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_12px_45px_rgba(26,115,232,0.12)] border border-slate-200/90 transition-all hover:shadow-[0_16px_55px_rgba(26,115,232,0.18)]">
                
                {/* Card Header */}
                <div className="text-center mb-4 sm:mb-5">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Welcome Back
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Login to continue your learning journey
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleDirectLogin} className="space-y-3">
                  {/* Mobile Number Input */}
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
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-[#1a73e8] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loginLoading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span>Login</span>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="relative my-3.5 flex items-center justify-center">
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
                  className="w-full py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-all shadow-2xs hover:shadow-xs flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98]"
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
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-1 sm:mt-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Card 1: 100K+ Students */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                100K+
              </div>
              <div className="text-[11px] text-slate-500 font-semibold mt-1">
                Students
              </div>
            </div>
          </div>

          {/* Card 2: 700+ Hiring Partners */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                700+
              </div>
              <div className="text-[11px] text-slate-500 font-semibold mt-1">
                Hiring Partners
              </div>
            </div>
          </div>

          {/* Card 3: 99% Placement Support */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                99%
              </div>
              <div className="text-[11px] text-slate-500 font-semibold mt-1">
                Placement Support
              </div>
            </div>
          </div>

          {/* Card 4: Industry Aligned Curriculum */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-3 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                Industry
              </div>
              <div className="text-[11px] text-slate-500 font-semibold mt-1">
                Aligned Curriculum
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 4. ACTION FEATURE CARDS (Row of 6 Horizontal Cards - Click prompts login) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-3.5">
          
          {/* Action 1: Industry-Focused Courses */}
          <div
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen className="w-4 h-4" />
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
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Code2 className="w-4 h-4" />
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
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FileCheck className="w-4 h-4" />
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
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-pink-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Coins className="w-4 h-4" />
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
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-4 h-4" />
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
            onClick={promptLogin}
            className="group bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-300 transition-all cursor-pointer flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Briefcase className="w-4 h-4" />
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
      <footer className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 pb-8 sm:pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Label */}
          <div className="text-xs sm:text-sm font-extrabold text-slate-700 whitespace-nowrap">
            Our Hiring Partners
          </div>

          {/* Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-bold text-slate-500">
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
