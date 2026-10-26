import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Code2,
  FileCheck,
  Coins,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Users,
  Building2,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  Brain,
  Database,
  BarChart3,
  FileSpreadsheet,
  Infinity as InfinityIcon,
  Laptop,
  FolderGit2,
  Cloud,
  Rocket,
  MessageSquare,
  Flame,
  Check,
  X,
  CreditCard,
  Frown,
  Video as VideoIcon,
  Clock,
  UserX,
  Gamepad2,
  Award,
  Sparkles,
  HelpCircle,
  Phone,
  ShieldCheck,
  Quote,
  Target,
  BadgeCheck,
  Zap,
  Play
} from 'lucide-react';

const YoutubeIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
);
import { soundEffects } from '../../services/soundEffects';
import { FutureAdvancedHeader } from './FutureAdvancedHeader';
import { FutureAuthModal } from './FutureAuthModal';
import { RealSuccessStoriesShowcase } from './RealSuccessStoriesShowcase';

// ─── Reusable Smooth Typewriter Heading Component ─────────────────────────────
interface TypewriterHeadingProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  words,
  className = '',
  cursorClassName = 'text-blue-600',
  typingSpeed = 80,
  deletingSpeed = 38,
  pauseTime = 2200,
}) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [typedText, setTypedText] = useState(words[0] || '');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[wordIdx];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentWord.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{typedText}</span>
      <span className={`inline-block ml-0.5 font-light animate-pulse ${cursorClassName}`}>|</span>
    </span>
  );
};

interface FutureAiHomeProps {
  profile?: any;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onStartLearning?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
  initialAuthOpen?: boolean;
  initialAuthMessage?: string;
  initialAuthRedirect?: string;
  onLoginSuccess?: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
  onOpenDashboard?: () => void;
  onLogout?: () => void;
}

// Hiring Partners list for continuous right-to-left marquee
const HIRING_PARTNERS = [
  {
    id: 'tcs',
    name: 'TCS',
    node: <span className="text-rose-600 font-black text-xs sm:text-sm tracking-tighter">tcs</span>
  },
  {
    id: 'infosys',
    name: 'Infosys',
    node: <span className="text-[#007cc3] font-black text-xs sm:text-sm tracking-tight">Infosys</span>
  },
  {
    id: 'accenture',
    name: 'Accenture',
    node: (
      <span className="text-purple-800 font-extrabold text-xs sm:text-sm tracking-tight flex items-center gap-0.5">
        accenture <span className="text-[#a100ff]">&gt;</span>
      </span>
    )
  },
  {
    id: 'wipro',
    name: 'Wipro',
    node: (
      <span className="text-slate-800 font-black text-xs sm:text-sm tracking-normal flex items-center gap-1">
        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-blue-500" />
        wipro
      </span>
    )
  },
  {
    id: 'google',
    name: 'Google',
    node: (
      <span className="font-extrabold text-xs sm:text-sm tracking-tight flex items-center">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
    )
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    node: (
      <span className="text-slate-700 font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1">
        <span className="grid grid-cols-2 gap-0.5 w-2.5 h-2.5">
          <span className="bg-[#f25022]" />
          <span className="bg-[#7fba00]" />
          <span className="bg-[#00a4ef]" />
          <span className="bg-[#ffb900]" />
        </span>
        Microsoft
      </span>
    )
  },
  {
    id: 'amazon',
    name: 'Amazon',
    node: <span className="text-slate-900 font-black text-xs sm:text-sm tracking-tight">amazon</span>
  },
  {
    id: 'deloitte',
    name: 'Deloitte',
    node: (
      <span className="text-slate-900 font-black text-xs sm:text-sm tracking-tight">
        Deloitte<span className="text-emerald-500">.</span>
      </span>
    )
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    node: (
      <span className="text-[#0070ad] font-bold text-xs sm:text-sm tracking-tight flex items-center gap-0.5">
        Capgemini <span className="text-[#0070ad] text-[10px]">♠</span>
      </span>
    )
  },
  {
    id: 'ibm',
    name: 'IBM',
    node: <span className="text-[#1f70c1] font-black text-xs sm:text-sm tracking-widest font-mono">IBM</span>
  },
  {
    id: 'more',
    name: '700+ More',
    node: <span className="text-slate-400 font-semibold text-[11px] whitespace-nowrap">and 700+ more...</span>
  }
];

export const FutureAiHome: React.FC<FutureAiHomeProps> = ({
  isLoggedIn = false,
  userName = '',
  initialAuthOpen = false,
  initialAuthMessage = '',
  initialAuthRedirect = '',
  onLoginSuccess,
}) => {
  // Full Auth Modal
  const [authModalOpen, setAuthModalOpen] = useState(initialAuthOpen);
  const [authMessage, setAuthMessage] = useState<string>(initialAuthMessage || 'Please login to continue.');
  const [authRedirect, setAuthRedirect] = useState<string>(initialAuthRedirect || '');

  useEffect(() => {
    if (initialAuthOpen) {
      setAuthModalOpen(true);
      if (initialAuthMessage) setAuthMessage(initialAuthMessage);
      if (initialAuthRedirect) setAuthRedirect(initialAuthRedirect);
    }
  }, [initialAuthOpen, initialAuthMessage, initialAuthRedirect]);

  // Prompt Login helper for any unauthenticated action
  const promptLogin = (customMessage?: string | React.MouseEvent, redirectHash?: string) => {
    soundEffects.playClick();
    const msg = typeof customMessage === 'string' && customMessage.trim().length > 0
      ? customMessage
      : 'Please login to continue.';
    setAuthMessage(msg);
    if (typeof redirectHash === 'string' && redirectHash.trim().length > 0) {
      setAuthRedirect(redirectHash);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('futureai_auth_redirect', redirectHash);
        localStorage.setItem('futureai_auth_redirect', redirectHash);
      }
    }
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F8FC] text-slate-800 font-sans flex flex-col justify-between overflow-x-hidden selection:bg-blue-500 selection:text-white">
      
      {/* ─── 1. TOP NAVBAR (Exact Post-Login Header with Pre-Login Guard) ─── */}
      <div className="shrink-0 sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <FutureAdvancedHeader
          userName={userName}
          activeNavTab="home"
          isLoggedIn={false}
          onNavigateHome={() => {
            if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateLearning={() => promptLogin('Please login to continue.', '#data-analyst')}
          onNavigatePractice={(track) => {
            const hash = track === 'python' ? '#python-challenges' : track === 'sql' ? '#sql-challenges' : track === 'excel' ? '#excel-challenges' : '#practice';
            promptLogin('Please login to continue.', hash);
          }}
          onOpenAtsResume={() => promptLogin('Please login to continue.', '#ats')}
          onNavigateEarn={() => promptLogin('Please login to continue.', '#income')}
          onNavigateInternship={() => promptLogin('Please login to continue.', '#internship')}
          onNavigatePlacement={() => promptLogin('Please login to continue.', '#placement')}
          onNavigateCertificate={() => promptLogin('Please login to continue.', '#certificates')}
          onNavigateRecommendation={() => promptLogin('Please login to continue.', '#recommendation')}
          onOpenHelp={() => { window.location.hash = '#contact-us'; }}
          onOpenContact={() => { window.location.hash = '#contact-us'; }}
          onOpenLogin={promptLogin}
          onOpenSignUp={promptLogin}
        />
      </div>

      {/* ─── 2. MAIN HERO SECTION (Color-Matched to Video Studio Background) ─── */}
      <section className="relative w-full px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8 overflow-hidden bg-gradient-to-r from-[#dce7f2] via-[#e5eef7] to-[#edf4fb]">
        
        {/* Soft Ambient Aurora Lights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-[#F4F8FC] pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center w-full">
            
            {/* LEFT COLUMN: Punchy Headline & CTAs (lg:col-span-6) */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-center lg:text-left z-10 pl-0 lg:pl-3 min-w-0">
              
              {/* Main Headline */}
              <h1 className="text-[25px] min-[375px]:text-3xl sm:text-5xl lg:text-[42px] xl:text-[48px] font-black tracking-tight leading-[1.08] sm:leading-[1.06] text-[#0f172a]">
                <span className="block">World&apos;s First</span>
                <span className="block text-[#1a73e8]">Learn Coding</span>
                <span className="block">
                  <TypewriterHeading
                    words={['with Playing Game']}
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent"
                    cursorClassName="text-amber-500"
                  />
                </span>
              </h1>

              {/* Tagline */}
              <div className="mt-2 sm:mt-2.5 text-xs sm:text-sm lg:text-[15px] font-semibold text-slate-600 leading-snug max-w-lg mx-auto lg:mx-0">
                <p>Real Practical Courses. Real Projects. Industry Guidance.</p>
                <p className="text-slate-900 font-bold mt-0.5">From Learning to Earning, We&apos;re With You.</p>
              </div>

              {/* Key Features Bullet points */}
              <div className="mt-2.5 sm:mt-3 space-y-1 text-[11px] sm:text-xs text-slate-600 font-semibold max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-left">100% Hands-On Coding Challenges &amp; Industry Datasets</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-left">AI Mock Interview Simulator with Live Scoring</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-left">700+ Hiring Partners • Pay Fee Only After Placement</span>
                </div>
              </div>

              {/* CTAs Row */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={promptLogin}
                  className="px-4 min-[375px]:px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 group"
                >
                  <span>Start Learning Free</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={promptLogin}
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 active:scale-95 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#1a73e8] shrink-0" />
                  <span>Explore Hackathon/DSA Practice</span>
                </button>
              </div>

              {/* Rating */}
              <div className="mt-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[11px] text-slate-500 font-medium">
                <div className="flex items-center text-amber-400 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span><strong className="text-slate-900 font-bold">4.9/5</strong> rating trusted by 100K+ learners across India</span>
              </div>

            </div>

            {/* RIGHT COLUMN: Transparent Video without Black Background */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative z-10">
              <div className="relative w-full max-w-[540px] lg:max-w-[600px] flex items-center justify-center">
                
                {/* Glowing Radiant Backing Aura */}
                <div className="absolute inset-0 bg-radial from-cyan-400/25 via-blue-500/15 to-transparent rounded-full blur-2xl scale-110 pointer-events-none" />
                
                {/* Transparent Video (No Black Background, True Alpha WebM/MP4) */}
                <div className="relative z-10 w-full flex items-center justify-center pointer-events-none select-none">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto max-h-[250px] min-[390px]:max-h-[290px] sm:max-h-[440px] lg:max-h-[480px] xl:max-h-[520px] object-contain pointer-events-none select-none drop-shadow-[0_20px_40px_rgba(26,115,232,0.22)]"
                  >
                    <source src="/videos/header_hero_transparent.webm" type="video/webm" />
                    <source src="/videos/header_transparent_video.mp4" type="video/mp4" />
                  </video>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. METRICS / TRUST STAT BADGES (Row of 4 Compact Badges - Shifted Up Higher) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20 shrink-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          
          {/* Card 1: 100K+ Students */}
          <div className="bg-white rounded-lg py-2 px-3 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
            <div className="w-7 h-7 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight leading-none">
                100K+
              </div>
              <div className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">
                Students
              </div>
            </div>
          </div>

          {/* Card 2: 700+ Hiring Partners */}
          <div className="bg-white rounded-lg py-2 px-3 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
            <div className="w-7 h-7 rounded-md bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
              <Building2 className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight leading-none">
                700+
              </div>
              <div className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">
                Hiring Partners
              </div>
            </div>
          </div>

          {/* Card 3: 99% Placement Support */}
          <div className="bg-white rounded-lg py-2 px-3 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
            <div className="w-7 h-7 rounded-md bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
              <Trophy className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight leading-none">
                99%
              </div>
              <div className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">
                Placement Support
              </div>
            </div>
          </div>

          {/* Card 4: Industry Aligned Curriculum */}
          <div className="bg-white rounded-lg py-2 px-3 border border-slate-200/80 shadow-2xs flex items-center gap-2.5 hover:shadow-xs transition">
            <div className="w-7 h-7 rounded-md bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
              <Star className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight leading-none">
                Industry
              </div>
              <div className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">
                Aligned Curriculum
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 4. HIRING PARTNERS CONTINUOUS TICKER ROW (Right to Left Scrolling Marquee) ─── */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 shrink-0">
        <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
          
          {/* Label */}
          <div className="text-[11px] sm:text-xs font-black text-slate-800 whitespace-nowrap shrink-0 flex items-center gap-1.5 border-r border-slate-200 pr-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Our Hiring Partners</span>
          </div>

          {/* Continuous Right-to-Left Infinite Marquee */}
          <div className="relative overflow-hidden flex-1 select-none">
            {/* Fade gradients at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <div className="animate-marquee-left flex items-center gap-7 sm:gap-9 text-xs font-bold text-slate-600">
              {[...HIRING_PARTNERS, ...HIRING_PARTNERS].map((partner, index) => (
                <div key={partner.id + '-' + index} className="shrink-0 flex items-center">
                  {partner.node}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 1: Explore Our Career Programs (Panoramic 3D Visual Banner + Video Cards)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-6 sm:pt-2 sm:pb-8">
        
        {/* Panoramic 3D Showcase Banner (Matching Reference Visual Style) */}
        <div className="relative mb-6 rounded-3xl overflow-hidden bg-gradient-to-r from-[#eaf2fb] via-[#f1f6fd] to-[#e4eef9] border border-blue-200/80 shadow-xs">
          
          {/* Subtle Ambient Aurora Light */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content (lg:col-span-7) */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-9 flex flex-col justify-center">
              
              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-900 tracking-tight leading-[1.12]">
                Explore Our{' '}
<TypewriterHeading
                  words={['Career Programs']}
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  cursorClassName="text-purple-600"
                />
              </h2>

              {/* Subtitle with High-End Formatting */}
              <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 font-medium mt-2 leading-relaxed max-w-xl">
                Choose an industry-curated program designed to take you from{' '}
                <span className="text-slate-900 font-bold underline decoration-blue-400 decoration-2 underline-offset-4">foundational basics</span>{' '}
                to{' '}
                <span className="text-blue-600 font-black">high-paying tech placements</span>.
              </p>

              {/* 4 Feature Badges Row */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-bold">
                <span className="px-3 py-1 rounded-lg bg-white/90 border border-slate-200/90 shadow-2xs flex items-center gap-1.5 text-slate-800">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Data Analyst with Gen AI</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/90 border border-slate-200/90 shadow-2xs flex items-center gap-1.5 text-slate-800">
                  <Brain className="w-3.5 h-3.5 text-purple-600" />
                  <span>Data Science &amp; Agentic AI</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/90 border border-slate-200/90 shadow-2xs flex items-center gap-1.5 text-slate-800">
                  <Cpu className="w-3.5 h-3.5 text-cyan-600" />
                  <span>AI Engineering</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/90 border border-slate-200/90 shadow-2xs flex items-center gap-1.5 text-slate-800">
                  <Rocket className="w-3.5 h-3.5 text-pink-600" />
                  <span>ML Engineering</span>
                </span>
              </div>

              {/* CTA Row */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={promptLogin}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all cursor-pointer flex items-center gap-2 group active:scale-95"
                >
                  <span>View All Courses</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200/80 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Placement Support Guard</span>
                </div>
              </div>

            </div>

            {/* Right Side: 3D Illustration Graphic (lg:col-span-5) */}
            <div className="lg:col-span-5 relative h-full flex items-center justify-center p-3 lg:p-0 overflow-hidden">
              <div className="relative w-full h-[220px] sm:h-[270px] lg:h-[320px] flex items-center justify-center overflow-hidden">
                <img
                  src="/images/home_sections/career_programs_hero_3d.jpg"
                  alt="Explore Our Career Programs Future AI 3D Mascot and Student"
                  className="w-full h-full object-cover object-right lg:object-center select-none pointer-events-none drop-shadow-sm"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent, black 12%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 100%)',
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* 4 Career Programs Cards Grid (Video + Course Name Only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Program Card 1: Data Analyst with Gen AI */}
          <div
            onClick={promptLogin}
            className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-[185px] sm:h-[200px] overflow-hidden bg-slate-900">
              <video
                src="/videos/data_analyst_genai_v2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                Data Analyst with Gen AI
              </h3>
              <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Program Card 2: Data Science & Agentic AI */}
          <div
            onClick={promptLogin}
            className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-purple-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-[185px] sm:h-[200px] overflow-hidden bg-slate-900">
              <video
                src="/videos/data_science_agentic_ai_course.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors">
                Data Science &amp; Agentic AI
              </h3>
              <div className="w-8 h-8 rounded-full bg-purple-50 group-hover:bg-purple-600 text-purple-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Program Card 3: AI Engineering */}
          <div
            onClick={promptLogin}
            className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-sky-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-[185px] sm:h-[200px] overflow-hidden bg-slate-900">
              <video
                src="/videos/ai_engineering_course.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                AI Engineering
              </h3>
              <div className="w-8 h-8 rounded-full bg-sky-50 group-hover:bg-sky-600 text-sky-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Program Card 4: ML Engineering */}
          <div
            onClick={promptLogin}
            className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-pink-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-[185px] sm:h-[200px] overflow-hidden bg-slate-900">
              <video
                src="/videos/ml_engineering_course.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-pink-600 transition-colors">
                ML Engineering
              </h3>
              <div className="w-8 h-8 rounded-full bg-pink-50 group-hover:bg-pink-600 text-pink-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </section>

{/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 3: Your Journey From Learning to Earning (Real Panoramic Banner)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
        <div className="bg-gradient-to-b from-white via-blue-50/25 to-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Your Journey From{' '}
                <TypewriterHeading
                words={['Learning to Earning']}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                cursorClassName="text-purple-600"
              />
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                A simple path to a successful career with Future IT Industry.
              </p>
            </div>

            <div className="self-end md:self-auto">
              <div className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-700 font-black italic tracking-wide text-xs sm:text-sm flex items-center gap-2 shadow-2xs">
                <span>Learn • Grow • Get Hired</span>
                <span className="text-base">↗</span>
              </div>
            </div>
          </div>

          {/* Real Horizontal Strip Career Roadmap Banner */}
          <div 
            onClick={promptLogin}
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 cursor-pointer group bg-slate-950"
          >
            <img
              src="/images/home_sections/journey_roadmap_real_strip.jpg"
              alt="Your Journey From Learning to Earning: Learn • Grow • Get Hired"
              className="w-full h-[160px] sm:h-[220px] md:h-[260px] lg:h-[300px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500 select-none"
            />
            {/* Ambient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/15 pointer-events-none" />

            {/* Horizontal Progression Strip Indicator */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-wrap items-center justify-between gap-2.5 bg-slate-900/85 backdrop-blur-md px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl border border-white/10 text-white shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-sm shadow-pink-500/50 shrink-0" />
                <span className="text-xs sm:text-sm font-black tracking-wide">01. Learn Skills</span>
                <span className="text-[11px] text-slate-400 hidden md:inline">• Industry curriculum & practical labs</span>
              </div>
              <span className="text-slate-500 hidden sm:inline font-bold">→</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500/50 shrink-0" />
                <span className="text-xs sm:text-sm font-black tracking-wide">02. Grow & Build</span>
                <span className="text-[11px] text-slate-400 hidden md:inline">• Real architecture & mock interviews</span>
              </div>
              <span className="text-slate-500 hidden sm:inline font-bold">→</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 shrink-0" />
                <span className="text-xs sm:text-sm font-black tracking-wide text-emerald-300">03. Get Hired</span>
                <span className="text-[11px] text-emerald-400/80 hidden md:inline">• Offer letters & direct placement</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 4: Why Choose Future IT Industry? (Ultra-Advanced Interactive Showcase)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        

        {/* Compact Real Comparison Showcase Banner */}
        <div 
          onClick={promptLogin}
          className="relative max-w-4xl sm:max-w-5xl mx-auto w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl border border-slate-200/90 hover:border-blue-300 transition-all duration-300 cursor-pointer group bg-white mb-6 sm:mb-8"
        >
          <img
            src="/images/why_choose/why_choose_comparison_banner_hd.jpg?v=5k"
            loading="eager"
            alt="Why Choose Future IT Industry? Real Skills • Real Projects • Career Support"
            className="w-full h-auto object-contain select-none group-hover:scale-[1.005] transition-transform duration-500"
          />
        </div>



        {/* 4 Core Value Pillars (Matching the High-Impact Trust Bar) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          <div 
            onClick={promptLogin}
            className="group/pillar p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-start gap-3.5"
          >
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/pillar:bg-blue-600 group-hover/pillar:text-white transition-colors duration-300 shadow-2xs">
              <Coins className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-black text-slate-900 group-hover/pillar:text-blue-600 transition-colors">
                Affordable Learning
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                High-Quality Education at the Right Price. No overpriced fee pressure.
              </p>
            </div>
          </div>

          <div 
            onClick={promptLogin}
            className="group/pillar p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-start gap-3.5"
          >
            <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover/pillar:bg-indigo-600 group-hover/pillar:text-white transition-colors duration-300 shadow-2xs">
              <InfinityIcon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-black text-slate-900 group-hover/pillar:text-indigo-600 transition-colors">
                Lifetime Course Access
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                Learn at Your Own Pace, Anytime, Anywhere with future curriculum updates.
              </p>
            </div>
          </div>

          <div 
            onClick={promptLogin}
            className="group/pillar p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-cyan-400 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-start gap-3.5"
          >
            <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover/pillar:bg-cyan-600 group-hover/pillar:text-white transition-colors duration-300 shadow-2xs">
              <Laptop className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-black text-slate-900 group-hover/pillar:text-cyan-600 transition-colors">
                Hands-on Practice
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                Live In-Browser Coding Sandbox, Real Cloud Tools &amp; Automated Evaluation.
              </p>
            </div>
          </div>

          <div 
            onClick={promptLogin}
            className="group/pillar p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-start gap-3.5"
          >
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover/pillar:bg-emerald-600 group-hover/pillar:text-white transition-colors duration-300 shadow-2xs">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-black text-slate-900 group-hover/pillar:text-emerald-600 transition-colors">
                Project Portfolio
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                Build Real Production Projects to showcase verifiable skills to recruiters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 5 & 6: Real Success Stories Showcase (Exact Post-Login Experience)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <RealSuccessStoriesShowcase
          onOpenRole={() => promptLogin()}
          onOpenPartnersModal={() => promptLogin()}
          onExploreProgram={() => promptLogin()}
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 8: Comprehensive Modern Footer (Campus Background with Soft White Tint)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <footer className="relative w-full border-t border-slate-200/90 overflow-hidden">
        
        {/* Full-Cover Campus Background Image */}
        <img
          src="/images/future_ai_campus_footer.png"
          alt="Future AI Innovation Headquarters & Tech Campus"
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        />

        {/* Soft White Frost Glass Tint Overlay ("halka white") */}
        <div className="absolute inset-0 bg-white/50 sm:bg-white/45 backdrop-blur-[0.5px] pointer-events-none" />

        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 pointer-events-none" />

        {/* Footer Content Container directly on top of the campus background */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
          
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-300/80">
            
            {/* Column 1: Brand & Logo */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 text-slate-950 font-black text-xl tracking-tight">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center font-mono text-base shadow-md shadow-blue-500/30">
                  F
                </span>
                <span>FUTURE IT</span>
                <span className="text-blue-600 font-bold text-xs tracking-widest">— INDUSTRIES —</span>
              </div>
              <p className="text-xs text-slate-900 mt-3 font-bold leading-relaxed max-w-sm drop-shadow-2xs">
                India&apos;s #1 AI &amp; Data Science Career Accelerator. Hands-on projects, real interview prep, and 100% placement support.
              </p>
              <div className="text-xs text-blue-700 font-black mt-2 flex items-center gap-1.5 drop-shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>Learn Today, Earn Tomorrow.</span>
              </div>
              
              {/* Verified Campus Badge */}
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-[11px] font-bold text-slate-700">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Headquarters &amp; Physical Tech Campus • Noida, India</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xs font-black text-slate-900 tracking-wider uppercase mb-3.5">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-extrabold text-slate-900 drop-shadow-2xs">
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">Courses</button></li>
                <li><button onClick={() => { window.location.hash = "#practice"; }} className="hover:text-blue-600 transition-colors cursor-pointer">Hackathon/DSA Practice</button></li>
                <li><button onClick={() => { window.location.hash = "#ats"; }} className="hover:text-blue-600 transition-colors cursor-pointer">ATS Resume Checker</button></li>
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">Internship</button></li>
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">Success Stories</button></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-xs font-black text-slate-900 tracking-wider uppercase mb-3.5">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs font-extrabold text-slate-900 drop-shadow-2xs">
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">About Us</button></li>
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">Contact Us</button></li>
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">Privacy Policy</button></li>
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">Terms &amp; Conditions</button></li>
              </ul>
            </div>

            {/* Column 4: Support & Follow Us */}
            <div>
              <h4 className="text-xs font-black text-slate-900 tracking-wider uppercase mb-3.5">
                Support
              </h4>
              <ul className="space-y-2.5 text-xs font-extrabold text-slate-900 drop-shadow-2xs">
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">Help Center</button></li>
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">FAQs</button></li>
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">Refund Policy</button></li>
                <li><button onClick={promptLogin} className="hover:text-blue-600 transition-colors">Career</button></li>
              </ul>

              {/* Social Media */}
              <div className="mt-5">
                <h5 className="text-[11px] font-bold text-slate-900 mb-2.5">Follow Us</h5>
                <div className="flex items-center gap-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs">
                    <YoutubeIcon />
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-8 h-8 rounded-xl bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs">
                    <LinkedinIcon />
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs">
                    <InstagramIcon />
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs">
                    <TwitterIcon />
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); promptLogin(); }} className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs">
                    <FacebookIcon />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-900 font-bold drop-shadow-2xs">
            <p>© 2026 Future IT Industry. All rights reserved.</p>
            <p className="text-[11px] text-slate-800 font-semibold">Empowering learners across India to learn, practice, and get placed.</p>
          </div>

        </div>
      </footer>

      {/* Clean Auth Modal for Sign Up / Full Login Options */}
      <FutureAuthModal
        isOpen={authModalOpen}
        message={authMessage}
        redirectUrl={authRedirect}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(name, email, avatar, role) => {
          setAuthModalOpen(false);
          onLoginSuccess?.(name, email, avatar, role);
        }}
      />

    </div>
  );
};
