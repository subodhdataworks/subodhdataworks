/**
 * RealSuccessStoriesShowcase.tsx
 *
 * Ultra-Premium EdTech Placement & Success Stories Showcase
 * Exact 1:1 recreation of the reference design for both Desktop and Mobile.
 *
 * 1. HERO: "Real People. Real Career Growth."
 *    - Eyebrow: LEARN • PRACTICE • GET HIRED
 *    - Main headline with refined sapphire gradient
 *    - Supporting description
 *    - 4 verified platform statistics: 10,000+ Learners Trained | 700+ Hiring Partners | 99% Placement Success | 2X Salary Growth
 *    - Student with laptop against soft blue ambient arch
 *    - Handwritten annotation: "From Learning to Earning" with doodle arrow
 *    - Floating 4-item feature card: Industry-Relevant Courses, Real Projects, Mock Interviews, Placement Support
 *
 * 2. WHERE AMBITION MEETS OPPORTUNITY (Company Logo Grid):
 *    - Large luxurious white container with soft shadow
 *    - 18 high-contrast, authentic company logos in a clean 6-column grid (No moving marquee)
 *    - View All Companies button
 *
 * 3. REAL CAREER JOURNEYS. REAL IMPACT (Alumni Placement Results):
 *    - Photo-first placement cards
 *    - Student photograph, name, company logo, role & placement type, program badge
 *    - Zero clutter: no fake star ratings, no quotes, no repetitive skill chips
 *    - Responsive carousel track with smooth navigation arrows and View All Stories action
 */

import React, { useRef } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building2,
  TrendingUp,
  Briefcase,
  Shield,
  Laptop,
  Mic,
  Award,
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

export interface RealSuccessStoriesShowcaseProps {
  onOpenRole?: (role: string) => void;
  onOpenPartnersModal?: () => void;
  onExploreProgram?: () => void;
}

// ─── 18 Official Brand Logos Rendered with Crisp SVG ─────────────────────────
const CompanyLogo: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Amazon':
      return (
        <span className="text-[17px] font-black tracking-tight text-slate-900 flex items-center">
          amazon<span className="text-[#ff9900] text-lg leading-none ml-0.5">⌣</span>
        </span>
      );
    case 'Google':
      return (
        <span className="text-[17px] font-black tracking-tight font-sans">
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
        <span className="flex items-center gap-1.5 text-[15px] font-bold text-[#5e5e5e]">
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
        <span className="text-[13px] font-serif font-black tracking-tight text-slate-900 text-center leading-tight">
          Goldman<br />Sachs
        </span>
      );
    case 'PayPal':
      return (
        <span className="text-[17px] font-black italic tracking-tighter text-[#003087] flex items-center">
          <span className="text-[#0079c1]">Pay</span>Pal
        </span>
      );
    case 'Samsung':
      return (
        <span className="text-[16px] font-black tracking-widest text-[#0c2340] uppercase">
          SAMSUNG
        </span>
      );
    case 'Salesforce':
      return (
        <span className="flex items-center gap-1 text-[15px] font-black text-[#00a1e0]">
          <svg className="w-5 h-5 fill-[#00a1e0]" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <span>salesforce</span>
        </span>
      );
    case 'NetApp':
      return (
        <span className="flex items-center gap-1 text-[16px] font-black text-[#0067c5]">
          <span className="w-4 h-4 bg-[#0067c5] text-white text-[10px] flex items-center justify-center rounded-[2px] font-black">N</span>
          <span>NetApp</span>
        </span>
      );
    case 'Hitachi':
      return (
        <span className="text-[16px] font-black tracking-wider text-slate-900 uppercase">
          HITACHI
        </span>
      );
    case 'JPMorgan':
      return (
        <span className="text-[14px] font-serif font-black tracking-wider text-slate-900 uppercase">
          J.P.Morgan
        </span>
      );
    case 'IBM':
      return (
        <span className="text-[19px] font-black tracking-widest text-[#054ada] font-mono">
          IBM
        </span>
      );
    case 'Dell':
      return (
        <span className="flex items-center gap-1 text-[16px] font-black text-[#007db8]">
          <span className="w-5 h-5 rounded-full border-2 border-[#007db8] flex items-center justify-center text-[10px] font-black leading-none">
            DELL
          </span>
        </span>
      );
    case 'Deloitte':
      return (
        <span className="text-[17px] font-black tracking-tight text-slate-900 flex items-center">
          Deloitte<span className="text-[#86bc25] text-xl leading-none">.</span>
        </span>
      );
    case 'KPMG':
      return (
        <span className="text-[17px] font-black tracking-widest text-[#00338d]">
          KPMG
        </span>
      );
    case 'ISRO':
      return (
        <span className="flex items-center gap-1.5 text-[14px] font-black text-[#e8701a]">
          <span>🚀</span>
          <span className="text-slate-800">ISRO</span>
        </span>
      );
    case 'Mercedes-Benz':
      return (
        <span className="flex items-center gap-1.5 text-[13px] font-bold text-slate-800">
          <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[11px]">★</span>
          <span>Mercedes-Benz</span>
        </span>
      );
    case 'EY':
      return (
        <span className="flex items-center gap-0.5 text-[20px] font-black tracking-tighter text-slate-900">
          EY<span className="text-[#ffe600] text-2xl leading-none">/</span>
        </span>
      );
    case 'Airtel':
      return (
        <span className="flex items-center gap-1 text-[16px] font-black text-[#e40000]">
          <span className="w-3.5 h-3.5 rounded-full bg-[#e40000]" />
          <span>airtel</span>
        </span>
      );
    default:
      return <span className="text-[15px] font-black text-slate-800">{name}</span>;
  }
};

const COMPANIES_LIST = [
  'Amazon', 'Google', 'Microsoft', 'Goldman Sachs', 'PayPal', 'Samsung',
  'Salesforce', 'NetApp', 'Hitachi', 'JPMorgan', 'IBM', 'Dell',
  'Deloitte', 'KPMG', 'ISRO', 'Mercedes-Benz', 'EY', 'Airtel',
];

// ─── 6 Photo-First Placement Cards Matching the Reference ────────────────────
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

  const handlePrev = () => {
    playClick();
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    playClick();
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col font-sans select-none space-y-10 sm:space-y-14 py-2">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: HERO — "Real People. Real Career Growth."
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          
          {/* ── LEFT: Typography & Verified Stats ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="text-[11.5px] sm:text-xs font-black text-[#1a73e8] tracking-[0.2em] uppercase">
              LEARN • PRACTICE • GET HIRED
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-slate-900 leading-[1.08] tracking-tight mt-3">
              Real People.<br />
              Real{' '}
              <span className="bg-gradient-to-r from-[#1a73e8] via-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">
                Career Growth.
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-3.5 leading-relaxed max-w-xl">
              From learners to professionals — see how Future IT Industry helped thousands build skills, crack interviews and get placed in top companies.
            </p>

            {/* 4 Stats Row (Inline clean metrics matching reference) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-7 pt-1">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a73e8] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-lg sm:text-xl font-black text-slate-900 leading-none">10,000+</div>
                  <div className="text-[11px] font-bold text-slate-500 mt-1 leading-none truncate">Learners Trained</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a73e8] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-lg sm:text-xl font-black text-slate-900 leading-none">700+</div>
                  <div className="text-[11px] font-bold text-slate-500 mt-1 leading-none truncate">Hiring Partners</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-lg sm:text-xl font-black text-slate-900 leading-none">99%</div>
                  <div className="text-[11px] font-bold text-slate-500 mt-1 leading-none truncate">Placement Success</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-lg sm:text-xl font-black text-slate-900 leading-none">2X</div>
                  <div className="text-[11px] font-bold text-slate-500 mt-1 leading-none truncate">Salary Growth</div>
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT: Student with Ambient Arch + Handwritten Doodle + Floating Feature Card ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-2 lg:mt-0">
            
            {/* Luminous Blue Ambient Dome Backdrop */}
            <div
              className="absolute bottom-0 w-[270px] sm:w-[330px] h-[310px] sm:h-[370px] rounded-t-full pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(147, 197, 253, 0.75) 0%, rgba(191, 219, 254, 0.45) 55%, rgba(239, 246, 255, 0.1) 100%)',
              }}
            />

            {/* Handwritten Doodle Pointer: "From Learning to Earning" */}
            <div className="absolute top-4 -left-2 sm:left-2 z-20 flex flex-col items-center select-none pointer-events-none">
              <span
                className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight leading-tight text-center"
                style={{ fontFamily: '"Caveat", "Brush Script MT", cursive, sans-serif' }}
              >
                From<br />Learning<br />to<br />Earning
              </span>
              <svg className="w-6 h-6 text-slate-700 mt-0.5 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 4c4 4 10 7 15 6" strokeLinecap="round" />
                <path d="M14 6l5 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Student Photo */}
            <div className="relative z-10 w-[230px] sm:w-[270px] h-[300px] sm:h-[360px] overflow-hidden flex items-end justify-center">
              <img
                src="/images/dashboard/placement_hero_student.jpg"
                alt="Future IT Industry Student - Real People. Real Career Growth."
                className="w-full h-full object-cover object-top select-none"
              />
            </div>

            {/* Floating 4-Item Feature Card (Right Side) */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-3 sm:translate-x-6 w-[175px] sm:w-[200px] rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 p-2.5 sm:p-3 flex flex-col gap-2 shadow-[0_10px_30px_rgba(20,50,150,0.10)]"
            >
              {/* Item 1 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1a73e8] flex items-center justify-center shrink-0">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight">
                  Industry-Relevant Courses
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight">
                  Real Projects & Practice
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Mic className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight">
                  Unlimited Mock Interviews
                </span>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight">
                  Placement Support
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: COMPANY LOGOS — "Where Ambition Meets Opportunity."
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full rounded-[30px] bg-white border border-slate-200/70 shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-6 sm:p-9 lg:p-11">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="text-[10.5px] sm:text-[11px] font-black text-[#1a73e8] tracking-[0.18em] uppercase">
              TRUSTED BY LEARNERS. RECRUITED BY TOP COMPANIES.
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-900 leading-tight tracking-tight mt-1.5">
              Where Ambition Meets Opportunity.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Our learners are working in top companies across industries.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              playClick();
              onOpenPartnersModal?.();
            }}
            className="self-start sm:self-center shrink-0 px-4 py-2 rounded-full border border-blue-200 bg-[#eef4ff] text-[#1a73e8] hover:bg-blue-600 hover:text-white font-bold text-xs active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
          >
            <span>View All Companies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Clean, Spacious 6-Column Responsive Logo Grid */}
        <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
          {COMPANIES_LIST.map((comp) => (
            <div
              key={comp}
              className="h-16 sm:h-[72px] rounded-2xl bg-white border border-slate-100 hover:border-blue-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm p-3 flex items-center justify-center transition-all duration-200 group cursor-default"
            >
              <CompanyLogo name={comp} />
            </div>
          ))}
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: ALUMNI SUCCESS STORIES — "Real Career Journeys. Real Impact."
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="text-[10.5px] sm:text-[11px] font-black text-[#1a73e8] tracking-[0.18em] uppercase">
              OUR LEARNERS. THEIR STORIES.
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-900 leading-tight tracking-tight mt-1.5">
              Real Career Journeys. Real Impact.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Meet our learners who transformed their careers with Future IT Industry.
            </p>
          </div>

          {/* Right Action & Navigation Arrows */}
          <div className="flex items-center gap-2.5 self-start sm:self-center shrink-0">
            <button
              type="button"
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
              className="px-4 py-1.5 rounded-full border border-blue-200 bg-[#eef4ff] text-[#1a73e8] hover:bg-blue-600 hover:text-white font-bold text-xs active:scale-95 transition-all cursor-pointer shadow-2xs"
            >
              View All Stories
            </button>

            {/* Carousel Arrows */}
            <div className="flex items-center gap-1.5 ml-1">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-700 flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-2xs"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-700 flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-2xs"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Photo-First Placement Cards Track ── */}
        <div
          ref={trackRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-3 pt-1 scroll-smooth"
        >
          {PLACEMENT_LEARNERS.map((learner) => (
            <div
              key={learner.id}
              className="w-[180px] sm:w-[205px] shrink-0 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-3.5 flex flex-col items-center text-center cursor-pointer group"
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
            >
              {/* Photo on Top (Rounded Portrait) */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-xs">
                <img
                  src={learner.photo}
                  alt={learner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="text-[15px] font-black text-slate-900 leading-tight mt-3 line-clamp-1">
                {learner.name}
              </h3>

              {/* Company Logo Tile */}
              <div className="h-7 mt-2 flex items-center justify-center">
                <CompanyLogo name={learner.companyName} />
              </div>

              {/* Role & Placement Type */}
              <div className="mt-1 text-[11.5px] font-bold text-slate-700 leading-tight">
                {learner.role}
              </div>
              <div className="text-[10px] font-semibold text-slate-400 leading-none mt-0.5">
                {learner.type}
              </div>

              {/* Program Badge */}
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
