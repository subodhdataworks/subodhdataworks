/**
 * RealSuccessStoriesShowcase.tsx
 *
 * Compact Hero ("Real People. Real Career Growth.") &
 * Apple-Inspired Premium Company Logo Wall ("OUR PLACED STUDENTS" / "Where Our Learners Build Their Careers")
 */

import React, { useRef, useEffect } from 'react';
import {
  ArrowRight,
  GraduationCap,
  Building2,
  TrendingUp,
  BarChart3,
  Briefcase,
  Shield,
  Laptop,
  Mic,
  BookOpen,
  Code2,
  ChevronRight,
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

export interface RealSuccessStoriesShowcaseProps {
  onOpenRole?: (role: string) => void;
  onOpenPartnersModal?: () => void;
  onExploreProgram?: () => void;
}

// ─── 18 Official Brand Logos Rendered with Crisp Authentic Brand Colors & Aspect Ratios ───
const CompanyLogo: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Amazon':
      return (
        <span className="text-[16.5px] font-black tracking-tight text-[#131921] flex items-center select-none font-sans">
          amazon
          <svg className="w-3.5 h-3 ml-0.5" viewBox="0 0 24 16" fill="none">
            <path d="M1 5c6 7 16 7 22 0" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
            <path d="M21 4.5l2 2-1 2.5" fill="#FF9900" />
          </svg>
        </span>
      );
    case 'Google':
      return (
        <span className="text-[16px] font-black tracking-tight font-sans select-none">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      );
    case 'Microsoft':
      return (
        <span className="flex items-center gap-1.5 text-[14.5px] font-bold text-[#5e5e5e] select-none">
          <span className="grid grid-cols-2 gap-[2px] w-3.5 h-3.5 shrink-0">
            <span className="bg-[#f25022] rounded-[1px]" />
            <span className="bg-[#7fba00] rounded-[1px]" />
            <span className="bg-[#00a4ef] rounded-[1px]" />
            <span className="bg-[#ffb900] rounded-[1px]" />
          </span>
          <span className="tracking-tight text-slate-800">Microsoft</span>
        </span>
      );
    case 'Goldman Sachs':
      return (
        <span className="text-[12.5px] font-serif font-black tracking-tight text-[#003594] text-center leading-tight select-none">
          Goldman<br />Sachs
        </span>
      );
    case 'PayPal':
      return (
        <span className="text-[16px] font-black italic tracking-tighter text-[#003087] flex items-center select-none">
          <span className="text-[#0079c1]">Pay</span>Pal
        </span>
      );
    case 'Samsung':
      return (
        <span className="text-[15px] font-black tracking-widest text-[#1428A0] uppercase select-none">
          SAMSUNG
        </span>
      );
    case 'Salesforce':
      return (
        <span className="flex items-center gap-1.5 text-[14.5px] font-black text-[#00A1E0] select-none">
          <svg className="w-5 h-5 fill-[#00A1E0] shrink-0" width="20" height="20" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <span>salesforce</span>
        </span>
      );
    case 'NetApp':
      return (
        <span className="flex items-center gap-1 text-[15px] font-black text-[#0067C5] select-none">
          <span className="w-4 h-4 bg-[#0067C5] text-white text-[9.5px] flex items-center justify-center rounded-[2px] font-black shrink-0">
            N
          </span>
          <span>NetApp</span>
        </span>
      );
    case 'Hitachi':
      return (
        <span className="text-[15px] font-black tracking-wider text-[#E60027] uppercase select-none">
          HITACHI
        </span>
      );
    case 'JPMorgan':
      return (
        <span className="text-[13.5px] font-serif font-black tracking-wider text-[#003087] uppercase select-none">
          J.P.Morgan
        </span>
      );
    case 'IBM':
      return (
        <span className="text-[18px] font-black tracking-widest text-[#054ADA] font-mono select-none">
          IBM
        </span>
      );
    case 'Dell':
      return (
        <span className="flex items-center gap-1 text-[15px] font-black text-[#007DB8] select-none">
          <span className="w-5 h-5 rounded-full border-2 border-[#007DB8] flex items-center justify-center text-[9.5px] font-black leading-none">
            DELL
          </span>
        </span>
      );
    case 'Deloitte':
      return (
        <span className="text-[16px] font-black tracking-tight text-slate-900 flex items-center select-none">
          Deloitte<span className="text-[#86BC25] text-xl leading-none">.</span>
        </span>
      );
    case 'KPMG':
      return (
        <span className="text-[16px] font-black tracking-widest text-[#00338D] select-none">
          KPMG
        </span>
      );
    case 'ISRO':
      return (
        <span className="flex items-center gap-1.5 text-[13.5px] font-black text-[#E8701A] select-none">
          <span>🚀</span>
          <span className="text-[#0B4F9F]">ISRO</span>
        </span>
      );
    case 'Mercedes-Benz':
      return (
        <span className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#0F172A] select-none">
          <span className="w-4 h-4 rounded-full border border-[#00ADEF] text-[#00ADEF] flex items-center justify-center text-[10px] shrink-0">
            ★
          </span>
          <span>Mercedes-Benz</span>
        </span>
      );
    case 'EY':
      return (
        <span className="flex items-center gap-0.5 text-[18px] font-black tracking-tighter text-slate-900 select-none">
          EY<span className="text-[#FFE600] text-xl leading-none">/</span>
        </span>
      );
    case 'Airtel':
      return (
        <span className="flex items-center gap-1 text-[15px] font-black text-[#E40000] select-none">
          <span className="w-3 h-3 rounded-full bg-[#E40000] shrink-0" />
          <span>airtel</span>
        </span>
      );
    default:
      return <span className="text-[14px] font-black text-slate-800">{name}</span>;
  }
};

const COMPANIES_LIST = [
  'Amazon', 'Google', 'Microsoft', 'Goldman Sachs', 'PayPal', 'Samsung',
  'Salesforce', 'NetApp', 'Hitachi', 'JPMorgan', 'IBM', 'Dell',
  'Deloitte', 'KPMG', 'ISRO', 'Mercedes-Benz', 'EY', 'Airtel',
];

const COMPANIES_ROW_1 = [
  'Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'Salesforce', 'PayPal', 'Samsung', 'Deloitte', 'IBM'
];

const COMPANIES_ROW_2 = [
  'JPMorgan', 'ISRO', 'Dell', 'Hitachi', 'KPMG', 'Mercedes-Benz', 'EY', 'Airtel', 'NetApp'
];

// ─── Photo-First Placement Cards ─────────────────────────────────────────────
interface PlacementLearner {
  id: string;
  name: string;
  photo: string;
  companyName: string;
  role: string;
  type: string;
  badge: string;
}

const PLACEMENT_LEARNERS: PlacementLearner[] = [
  {
    id: '1',
    name: 'Ritu Gupta',
    photo: '/images/alumni/alumni_priya_patel.jpg',
    companyName: 'Amazon',
    role: 'Data Analyst',
    type: 'Internship',
    badge: 'Prime 3.0',
  },
  {
    id: '2',
    name: 'Kartik Agarwal',
    photo: '/images/alumni/alumni_rohit_kumar.jpg',
    companyName: 'Microsoft',
    role: 'Business Analyst',
    type: 'Internship',
    badge: 'SigmaX',
  },
  {
    id: '3',
    name: 'Shivam Kumar',
    photo: '/images/alumni/alumni_devansh_roy.jpg',
    companyName: 'Google',
    role: 'Data Analyst',
    type: 'Internship',
    badge: 'Prime 3.0',
  },
  {
    id: '4',
    name: 'Naman Omar',
    photo: '/images/alumni/alumni_aman_sharma.jpg',
    companyName: 'Goldman Sachs',
    role: 'Data Analyst',
    type: 'Internship',
    badge: 'Alpha',
  },
  {
    id: '5',
    name: 'Kushal Tripathi',
    photo: '/images/alumni/alumni_vikram_malhotra.jpg',
    companyName: 'IBM',
    role: 'Data Analyst',
    type: 'Full Time',
    badge: 'SigmaX',
  },
  {
    id: '6',
    name: 'Shubhangi Raj',
    photo: '/images/alumni/alumni_neha_singh.jpg',
    companyName: 'EY',
    role: 'Business Analyst',
    type: 'Internship',
    badge: 'Alpha',
  },
  {
    id: '7',
    name: 'Sneha Verma',
    photo: '/images/alumni/alumni_sneha_verma.jpg',
    companyName: 'Deloitte',
    role: 'Data Analyst',
    type: 'Full Time',
    badge: 'Prime 3.0',
  },
  {
    id: '8',
    name: 'Ananya Sengupta',
    photo: '/images/alumni/alumni_ananya_sengupta.jpg',
    companyName: 'Salesforce',
    role: 'BI Engineer',
    type: 'Full Time',
    badge: 'SigmaX',
  },
];

export const RealSuccessStoriesShowcase: React.FC<RealSuccessStoriesShowcaseProps> = ({
  onOpenPartnersModal,
  onExploreProgram,
}) => {
  const { playClick } = useThemeAccent();
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll marquee: continuously moves left, pauses on hover
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animFrame: number;
    let paused = false;
    const speed = 0.6;

    const step = () => {
      if (!paused && track) {
        track.scrollLeft += speed;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll - 2) {
          track.scrollLeft = 0;
        }
      }
      animFrame = requestAnimationFrame(step);
    };

    animFrame = requestAnimationFrame(step);
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', resume);

    return () => {
      cancelAnimationFrame(animFrame);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
      track.removeEventListener('touchstart', pause);
      track.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <div className="w-full flex flex-col font-sans select-none space-y-5 sm:space-y-6 pt-1 pb-0">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: COMPACT HERO — "Real People. Real Career Growth."
          (~25–30% reduced height, zero wasted whitespace, preserved woman photo)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full relative" data-testid="real-people-compact-hero">
        {/* ─── MOBILE VIEW (< lg) ─── */}
        <div className="block lg:hidden space-y-2.5">
          {/* Compact Mobile Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#eef8ff] via-[#f3f9ff] to-[#f8fbff] border border-blue-100/90 p-3 sm:p-4 shadow-[0_2px_14px_rgba(20,50,150,0.04)] min-h-[168px] sm:min-h-[188px] flex items-center">
            {/* Left Content */}
            <div className="relative z-10 w-[58%] sm:w-[55%] flex flex-col justify-center pr-1">
              <div className="text-[9px] sm:text-[10px] font-black text-[#0066ff] tracking-[0.18em] uppercase">
                LEARN • PRACTICE • GET HIRED
              </div>

              <h1 className="text-[18px] sm:text-[21px] font-black text-slate-900 leading-[1.12] tracking-tight mt-1">
                Real People.<br />
                Real{' '}
                <span className="bg-gradient-to-r from-[#0066ff] via-[#1a73e8] to-[#00a3ff] bg-clip-text text-transparent">
                  Career Growth.
                </span>
              </h1>

              <p className="text-[9.5px] sm:text-[10.5px] text-slate-600 font-medium mt-1 leading-snug line-clamp-2">
                From learners to professionals — see how Future IT Industry helped thousands build skills, crack interviews and grow their careers.
              </p>

              <button
                type="button"
                onClick={() => {
                  playClick();
                  onExploreProgram?.();
                }}
                className="mt-2 px-3 py-1.5 rounded-lg bg-[#0066ff] hover:bg-[#0055dd] text-white font-bold text-[10.5px] active:scale-95 transition-all shadow-xs shadow-blue-500/20 flex items-center gap-1 cursor-pointer w-fit"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Right Student Photo Cutout — Preserved without cropping face */}
            <div className="absolute right-0 top-0 bottom-0 w-[48%] sm:w-[45%] pointer-events-none overflow-hidden flex items-end justify-end">
              <img
                src="/images/dashboard/mobile_hero_student_cutout.png"
                alt="Real People. Real Career Growth."
                className="h-full w-full object-contain object-right-top"
              />
            </div>
          </div>

          {/* 4 Compact Feature Cards (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-2">
            <div
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
              className="bg-white rounded-xl border border-slate-100 shadow-[0_1px_6px_rgba(0,0,0,0.03)] p-2 sm:p-2.5 flex items-center justify-between cursor-pointer transition-all active:scale-[0.98] group"
            >
              <div className="flex items-center gap-2 min-w-0 pr-1">
                <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg bg-[#0066ff] text-white flex items-center justify-center shrink-0">
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[10.5px] sm:text-xs font-black text-slate-900 leading-tight truncate">
                    Industry-Relevant Courses
                  </h3>
                  <p className="text-[9px] text-slate-500 font-medium leading-tight mt-0.5 line-clamp-1">
                    Job-ready skills & projects
                  </p>
                </div>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            </div>

            <div
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
              className="bg-white rounded-xl border border-slate-100 shadow-[0_1px_6px_rgba(0,0,0,0.03)] p-2 sm:p-2.5 flex items-center justify-between cursor-pointer transition-all active:scale-[0.98] group"
            >
              <div className="flex items-center gap-2 min-w-0 pr-1">
                <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg bg-[#00c07f] text-white flex items-center justify-center shrink-0">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[10.5px] sm:text-xs font-black text-slate-900 leading-tight truncate">
                    Real Projects & Practice
                  </h3>
                  <p className="text-[9px] text-slate-500 font-medium leading-tight mt-0.5 line-clamp-1">
                    Build a strong portfolio
                  </p>
                </div>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            </div>

            <div
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
              className="bg-white rounded-xl border border-slate-100 shadow-[0_1px_6px_rgba(0,0,0,0.03)] p-2 sm:p-2.5 flex items-center justify-between cursor-pointer transition-all active:scale-[0.98] group"
            >
              <div className="flex items-center gap-2 min-w-0 pr-1">
                <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg bg-[#8b3dff] text-white flex items-center justify-center shrink-0">
                  <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[10.5px] sm:text-xs font-black text-slate-900 leading-tight truncate">
                    Unlimited Mock Interviews
                  </h3>
                  <p className="text-[9px] text-slate-500 font-medium leading-tight mt-0.5 line-clamp-1">
                    AI & mentor interview prep
                  </p>
                </div>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            </div>

            <div
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
              className="bg-white rounded-xl border border-slate-100 shadow-[0_1px_6px_rgba(0,0,0,0.03)] p-2 sm:p-2.5 flex items-center justify-between cursor-pointer transition-all active:scale-[0.98] group"
            >
              <div className="flex items-center gap-2 min-w-0 pr-1">
                <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg bg-[#ff7a00] text-white flex items-center justify-center shrink-0">
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[10.5px] sm:text-xs font-black text-slate-900 leading-tight truncate">
                    Placement Support
                  </h3>
                  <p className="text-[9px] text-slate-500 font-medium leading-tight mt-0.5 line-clamp-1">
                    Resume & career guidance
                  </p>
                </div>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            </div>
          </div>

          {/* 4 Stats Bar (Single compact horizontal row) */}
          <div className="bg-[#f0f6ff]/80 border border-blue-100/90 rounded-xl py-2 px-2.5 grid grid-cols-4 divide-x divide-blue-200/60 text-center items-center">
            <div className="px-1">
              <GraduationCap className="w-3.5 h-3.5 text-[#0066ff] mx-auto mb-0.5" />
              <div className="text-[11px] sm:text-sm font-black text-slate-900 leading-none">10,000+</div>
              <div className="text-[8px] sm:text-[10px] font-bold text-slate-500 mt-0.5 leading-tight truncate">Learners Trained</div>
            </div>
            <div className="px-1">
              <Building2 className="w-3.5 h-3.5 text-[#0066ff] mx-auto mb-0.5" />
              <div className="text-[11px] sm:text-sm font-black text-slate-900 leading-none">700+</div>
              <div className="text-[8px] sm:text-[10px] font-bold text-slate-500 mt-0.5 leading-tight truncate">Career Tracks</div>
            </div>
            <div className="px-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500 mx-auto mb-0.5" />
              <div className="text-[11px] sm:text-sm font-black text-slate-900 leading-none">99%</div>
              <div className="text-[8px] sm:text-[10px] font-bold text-slate-500 mt-0.5 leading-tight truncate">Completion Rate</div>
            </div>
            <div className="px-1">
              <BarChart3 className="w-3.5 h-3.5 text-purple-600 mx-auto mb-0.5" />
              <div className="text-[11px] sm:text-sm font-black text-slate-900 leading-none">2X</div>
              <div className="text-[8px] sm:text-[10px] font-bold text-slate-500 mt-0.5 leading-tight truncate">Career Growth</div>
            </div>
          </div>
        </div>

        {/* ─── DESKTOP VIEW (≥ lg): Compact, Balanced 12-Column Layout (~28% shorter) ─── */}
        <div className="hidden lg:grid lg:grid-cols-12 items-center gap-6 xl:gap-8 bg-gradient-to-br from-white via-[#f8fbff] to-[#eef5ff]/70 rounded-[24px] border border-slate-200/80 px-6 xl:px-8 py-4 xl:py-5 shadow-[0_2px_18px_rgba(15,23,42,0.03)]">
          
          {/* ── LEFT (7 Cols): Compact Typography & Single-Row Horizontal Stats ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="text-[10.5px] font-black text-[#1a73e8] tracking-[0.18em] uppercase">
              LEARN • PRACTICE • GET HIRED
            </div>

            {/* Slightly Reduced Heading with Strong Visual Hierarchy */}
            <h1 className="text-3xl lg:text-[34px] xl:text-[38px] font-black text-slate-900 leading-[1.08] tracking-tight mt-1.5">
              Real People.{' '}
              <span className="bg-gradient-to-r from-[#1a73e8] via-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">
                Real Career Growth.
              </span>
            </h1>

            {/* Tighter Description */}
            <p className="text-xs xl:text-[13.5px] text-slate-600 font-medium mt-2 leading-relaxed max-w-xl">
              From learners to professionals — see how Future IT Industry helped thousands build practical skills, crack interviews and advance their careers.
            </p>

            {/* Statistics in One Compact Horizontal Row */}
            <div className="grid grid-cols-4 gap-2.5 xl:gap-3.5 mt-4 pt-3 border-t border-slate-200/70">
              {/* Stat 1 */}
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-lg bg-blue-50 text-[#1a73e8] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm xl:text-base font-black text-slate-900 leading-none">10,000+</div>
                  <div className="text-[10px] xl:text-[10.5px] font-bold text-slate-500 mt-0.5 leading-none truncate">Learners Trained</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-lg bg-blue-50 text-[#1a73e8] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm xl:text-base font-black text-slate-900 leading-none">700+</div>
                  <div className="text-[10px] xl:text-[10.5px] font-bold text-slate-500 mt-0.5 leading-none truncate">Industry Projects</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm xl:text-base font-black text-slate-900 leading-none">99%</div>
                  <div className="text-[10px] xl:text-[10.5px] font-bold text-slate-500 mt-0.5 leading-none truncate">Practical Mastery</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm xl:text-base font-black text-slate-900 leading-none">2X</div>
                  <div className="text-[10px] xl:text-[10.5px] font-bold text-slate-500 mt-0.5 leading-none truncate">Salary Growth</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT (5 Cols): Proportionally Reduced Woman Image + Compact Aligned Feature Card ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center pr-24 xl:pr-28">
            {/* Proportionally Scaled Ambient Blue Arch */}
            <div
              className="absolute bottom-0 w-[190px] xl:w-[215px] h-[205px] xl:h-[225px] rounded-t-full pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(147, 197, 253, 0.72) 0%, rgba(191, 219, 254, 0.42) 55%, rgba(239, 246, 255, 0.08) 100%)',
              }}
            />

            {/* Handwritten Doodle Pointer: "From Learning to Earning" */}
            <div className="absolute top-1 left-1 xl:left-3 z-20 flex flex-col items-center select-none pointer-events-none">
              <span
                className="text-[11px] xl:text-xs font-bold text-slate-800 tracking-tight leading-tight text-center"
                style={{ fontFamily: '"Caveat", "Brush Script MT", cursive, sans-serif' }}
              >
                From<br />Learning<br />to<br />Earning
              </span>
              <svg className="w-5 h-5 text-slate-700 mt-0.5 -rotate-12" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 4c4 4 10 7 15 6" strokeLinecap="round" />
                <path d="M14 6l5 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Woman Photo — Reduced Height (~225px vs 360px) Without Cropping Her Face */}
            <div className="relative z-10 w-[180px] xl:w-[205px] h-[215px] xl:h-[235px] rounded-2xl overflow-hidden flex items-start justify-center">
              <img
                src="/images/dashboard/placement_hero_student.jpg"
                alt="Future IT Industry Student - Real People. Real Career Growth."
                className="w-full h-full object-cover object-top select-none"
              />
            </div>

            {/* Compact Floating 4-Item Feature Card Aligned Beside Image */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[160px] xl:w-[174px] rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-2 xl:p-2.5 flex flex-col gap-1.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-blue-50 text-[#1a73e8] flex items-center justify-center shrink-0">
                  <Shield className="w-3 h-3" />
                </div>
                <span className="text-[9.5px] xl:text-[10px] font-extrabold text-slate-800 leading-tight">
                  Industry-Relevant Courses
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Laptop className="w-3 h-3" />
                </div>
                <span className="text-[9.5px] xl:text-[10px] font-extrabold text-slate-800 leading-tight">
                  Real Projects & Practice
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Mic className="w-3 h-3" />
                </div>
                <span className="text-[9.5px] xl:text-[10px] font-extrabold text-slate-800 leading-tight">
                  Unlimited Mock Interviews
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <Briefcase className="w-3 h-3" />
                </div>
                <span className="text-[9.5px] xl:text-[10px] font-extrabold text-slate-800 leading-tight">
                  Placement Support
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: COMPANY LOGOS — ANIMATED FULL-COLOR HIRING PARTNERS TICKER
          - Eyebrow: "OUR PLACED STUDENTS"
          - Heading: "Where Our Learners Build Their Careers"
          - 100% Full-Color Vibrant Authentic Brand Logos
          - Continuous Dual-Row Smooth Infinite Animation (Left & Right)
          - Interactive hover: Pauses on hover, smoothly elevates card
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="w-full rounded-[24px] bg-white border border-slate-200/80 shadow-[0_2px_20px_rgba(15,23,42,0.03)] px-4 py-4 sm:px-6 sm:py-5 lg:px-7 lg:py-6 overflow-hidden"
        data-testid="premium-company-logo-wall"
      >
        {/* Compact Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 sm:mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black text-[#1a73e8] tracking-[0.18em] uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OUR PLACED STUDENTS</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-bold">100+ Top Hiring Partners</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 leading-tight tracking-tight mt-1">
              Where Our Learners{' '}
              <span className="text-[#1a73e8]">Build Their Careers</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              playClick();
              onOpenPartnersModal?.();
            }}
            className="self-start sm:self-center shrink-0 px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-slate-50/80 text-slate-700 hover:border-blue-300 hover:bg-blue-50/60 hover:text-[#1a73e8] font-bold text-[11px] sm:text-xs active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
          >
            <span>Explore Career Tracks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ─── DUAL-ROW CONTINUOUS ANIMATED FULL-COLOR LOGO MARQUEE ─── */}
        <div className="logo-marquee-container relative overflow-hidden py-1 space-y-3 select-none">
          {/* Left & Right Edge Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Row 1: Sliding Smoothly to the Left */}
          <div className="animate-logo-marquee-left flex items-center gap-3 sm:gap-4">
            {[...COMPANIES_ROW_1, ...COMPANIES_ROW_1, ...COMPANIES_ROW_1].map((comp, idx) => (
              <div
                key={`r1-${comp}-${idx}`}
                className="group h-[50px] sm:h-[54px] min-w-[145px] sm:min-w-[165px] px-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-slate-50/60 hover:from-white hover:to-white border border-slate-200/80 hover:border-blue-300 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_20px_rgba(37,99,235,0.12)] flex items-center justify-center transition-all duration-250 ease-out hover:-translate-y-1 hover:scale-105 cursor-pointer shrink-0"
              >
                <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-108">
                  <CompanyLogo name={comp} />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Sliding Smoothly to the Right */}
          <div className="animate-logo-marquee-right flex items-center gap-3 sm:gap-4">
            {[...COMPANIES_ROW_2, ...COMPANIES_ROW_2, ...COMPANIES_ROW_2].map((comp, idx) => (
              <div
                key={`r2-${comp}-${idx}`}
                className="group h-[50px] sm:h-[54px] min-w-[145px] sm:min-w-[165px] px-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-slate-50/60 hover:from-white hover:to-white border border-slate-200/80 hover:border-blue-300 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_20px_rgba(37,99,235,0.12)] flex items-center justify-center transition-all duration-250 ease-out hover:-translate-y-1 hover:scale-105 cursor-pointer shrink-0"
              >
                <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-108">
                  <CompanyLogo name={comp} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: SELECTED STUDENTS — Auto-scrolling marquee (Preserved)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5 sm:mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 leading-tight tracking-tight">
              Our Placed Students
            </h2>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-center shrink-0">
            <button
              type="button"
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
              className="px-4 py-1.5 rounded-full border border-blue-200 bg-[#eef4ff] text-[#1a73e8] hover:bg-blue-600 hover:text-white font-bold text-xs active:scale-95 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
            >
              View All Placed Students
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Auto-Scrolling Photo-First Placement Cards (Marquee) */}
        <div
          ref={trackRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-3 pt-1"
          style={{ cursor: 'grab', scrollBehavior: 'auto' }}
        >
          {[...PLACEMENT_LEARNERS, ...PLACEMENT_LEARNERS].map((learner, idx) => (
            <div
              key={`${learner.id}-${idx}`}
              className="w-[175px] sm:w-[200px] shrink-0 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-3.5 flex flex-col items-center text-center cursor-pointer group"
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-xs">
                <img
                  src={learner.photo}
                  alt={learner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <h3 className="text-[15px] font-black text-slate-900 leading-tight mt-3 line-clamp-1">
                {learner.name}
              </h3>

              <div className="h-8 mt-2 px-3 py-1 rounded-lg bg-slate-50/90 border border-slate-100/90 flex items-center justify-center group-hover:scale-105 group-hover:bg-white group-hover:border-blue-200 group-hover:shadow-xs transition-all duration-300">
                <CompanyLogo name={learner.companyName} />
              </div>

              <div className="mt-1 text-[11.5px] font-bold text-slate-700 leading-tight">
                {learner.role}
              </div>
              <div className="text-[10px] font-semibold text-slate-400 leading-none mt-0.5">
                {learner.type}
              </div>

              <div className="mt-3 px-3 py-0.5 rounded-full text-[10px] font-black text-[#1a73e8] bg-[#e8f0fe] border border-blue-100">
                {learner.badge}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
export default RealSuccessStoriesShowcase;
