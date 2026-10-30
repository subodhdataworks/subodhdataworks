/**
 * RealSuccessStoriesShowcase.tsx
 *
 * Premium EdTech Placement & Success Stories Section:
 * 1. Large Hero: "Real People. Real Career Growth." + Verified stats + Student with laptop + 4 Floating Feature Cards
 * 2. Company Logo Grid: "Where Ambition Meets Opportunity." in clean, spacious, white container (No continuous marquee)
 * 3. Photo-First Alumni Results: "Real Career Journeys. Real Impact." with clean verified student placement cards
 *
 * 100% faithful to the desktop and mobile reference design.
 */

import React, { useState, useRef } from 'react';
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
  Sparkles,
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

export interface RealSuccessStoriesShowcaseProps {
  onOpenRole?: (role: string) => void;
  onOpenPartnersModal?: () => void;
  onExploreProgram?: () => void;
}

// ─── 18 Verified Partner & Employer Logos ─────────────────────────────────────
const HIRING_COMPANIES = [
  { name: 'Amazon', logo: '/images/companies/amazon.svg' },
  { name: 'Google', logo: '/images/companies/google.svg' },
  { name: 'Microsoft', logo: '/images/companies/microsoft.svg' },
  { name: 'Deloitte', logo: '/images/companies/deloitte.svg' },
  { name: 'EY', logo: '/images/companies/ey.svg' },
  { name: 'IBM', logo: '/images/companies/ibm.svg' },
  { name: 'Accenture', logo: '/images/companies/accenture.svg' },
  { name: 'Adobe', logo: '/images/companies/adobe.svg' },
  { name: 'TCS', logo: '/images/companies/tcs.svg' },
  { name: 'Infosys', logo: '/images/companies/infosys.svg' },
  { name: 'Wipro', logo: '/images/companies/wipro.svg' },
  { name: 'KPMG', logo: '/images/companies/kpmg.svg' },
  { name: 'PwC', logo: '/images/companies/pwc.svg' },
  { name: 'Cognizant', logo: '/images/companies/cognizant.svg' },
  { name: 'Capgemini', logo: '/images/companies/capgemini.svg' },
  { name: 'Tech Mahindra', logo: '/images/companies/techmahindra.svg' },
  { name: 'HCL', logo: '/images/companies/hcl.svg' },
  { name: 'Tata Motors', logo: '/images/companies/tcs.svg' },
];

// ─── Verified Photo-First Student Placement Records ───────────────────────────
interface PlacementStory {
  id: string;
  name: string;
  photo: string;
  companyName: string;
  companyLogo: string;
  role: string;
  type: string;
  badge: string;
}

const PLACEMENT_STORIES: PlacementStory[] = [
  {
    id: 'p1',
    name: 'Ritu Gupta',
    photo: '/images/alumni/alumni_priya_patel.jpg',
    companyName: 'Amazon',
    companyLogo: '/images/companies/amazon.svg',
    role: 'Data Analyst',
    type: 'Internship',
    badge: 'Prime 3.0',
  },
  {
    id: 'p2',
    name: 'Kartik Agarwal',
    photo: '/images/alumni/alumni_rohit_kumar.jpg',
    companyName: 'Microsoft',
    companyLogo: '/images/companies/microsoft.svg',
    role: 'Business Analyst',
    type: 'Internship',
    badge: 'SigmaX',
  },
  {
    id: 'p3',
    name: 'Shivam Kumar',
    photo: '/images/alumni/alumni_devansh_roy.jpg',
    companyName: 'Google',
    companyLogo: '/images/companies/google.svg',
    role: 'Data Analyst',
    type: 'Internship',
    badge: 'Prime 3.0',
  },
  {
    id: 'p4',
    name: 'Naman Omar',
    photo: '/images/alumni/alumni_aman_sharma.jpg',
    companyName: 'Deloitte',
    companyLogo: '/images/companies/deloitte.svg',
    role: 'Data Analyst',
    type: 'Internship',
    badge: 'Alpha',
  },
  {
    id: 'p5',
    name: 'Kushal Tripathi',
    photo: '/images/alumni/alumni_vikram_malhotra.jpg',
    companyName: 'IBM',
    companyLogo: '/images/companies/ibm.svg',
    role: 'Data Analyst',
    type: 'Full Time',
    badge: 'SigmaX',
  },
  {
    id: 'p6',
    name: 'Shubhangi Raj',
    photo: '/images/alumni/alumni_neha_singh.jpg',
    companyName: 'EY',
    companyLogo: '/images/companies/ey.svg',
    role: 'Business Analyst',
    type: 'Internship',
    badge: 'Alpha',
  },
  {
    id: 'p7',
    name: 'Sneha Verma',
    photo: '/images/alumni/alumni_sneha_verma.jpg',
    companyName: 'Accenture',
    companyLogo: '/images/companies/accenture.svg',
    role: 'Data Analyst',
    type: 'Full Time',
    badge: 'Prime 3.0',
  },
  {
    id: 'p8',
    name: 'Ananya Sengupta',
    photo: '/images/alumni/alumni_ananya_sengupta.jpg',
    companyName: 'Infosys',
    companyLogo: '/images/companies/infosys.svg',
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
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    playClick();
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    playClick();
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col font-sans select-none space-y-8 sm:space-y-12">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: HERO — "Real People. Real Career Growth."
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full rounded-3xl bg-gradient-to-b from-[#f9fbff] via-white to-white border border-slate-200/80 shadow-xs p-5 sm:p-8 lg:p-12 relative overflow-hidden">
        
        {/* Soft background ambient gradient glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* ── LEFT COLUMN: Text & Verified Metrics ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-black text-blue-600 tracking-widest uppercase">
                LEARN • PRACTICE • GET HIRED
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-950 leading-[1.12] tracking-tight mt-2.5">
              Real People. <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Real Career Growth.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 font-medium mt-3 leading-relaxed max-w-xl">
              From learners to professionals — discover real career journeys powered by skills, projects, and interview preparation.
            </p>

            {/* Verified Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-6 sm:mt-8">
              
              {/* Stat 1 */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-black text-slate-900 leading-none">10,000+</div>
                  <div className="text-[10px] font-bold text-slate-500 leading-tight mt-0.5 truncate">Learners Trained</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-black text-slate-900 leading-none">700+</div>
                  <div className="text-[10px] font-bold text-slate-500 leading-tight mt-0.5 truncate">Hiring Partners</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-black text-slate-900 leading-none">99%</div>
                  <div className="text-[10px] font-bold text-slate-500 leading-tight mt-0.5 truncate">Placement Success</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-black text-slate-900 leading-none">2X</div>
                  <div className="text-[10px] font-bold text-slate-500 leading-tight mt-0.5 truncate">Salary Growth</div>
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT COLUMN: Student Hero Graphic + 4 Floating Feature Cards ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
            
            {/* Soft Ambient Circular Backdrop */}
            <div className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-gradient-to-tr from-blue-100 via-sky-50 to-indigo-100 pointer-events-none" />

            {/* Handwritten annotation: "From Learning to Earning" */}
            <div className="absolute -top-3 left-0 sm:left-4 z-20 flex flex-col items-center select-none pointer-events-none">
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight italic" style={{ fontFamily: 'cursive, "Brush Script MT", sans-serif' }}>
                From Learning<br />to Earning
              </span>
              <svg className="w-6 h-6 text-slate-700 mt-0.5 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4c4 4 10 7 15 6" strokeLinecap="round" />
                <path d="M14 6l5 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Student Photo */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] aspect-[4/4.2] rounded-3xl overflow-hidden shadow-lg border border-white">
              <img
                src="/images/dashboard/placement_hero_student.jpg"
                alt="Future IT Industry Student - From Learning to Earning"
                className="w-full h-full object-cover object-top select-none"
              />
            </div>

            {/* 4 Floating Feature Cards on the Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 translate-x-2 sm:translate-x-4 max-w-[170px] sm:max-w-[200px]">
              
              {/* Feature 1 */}
              <div className="px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_4px_14px_rgba(20,50,140,0.08)] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight">
                  Industry Courses
                </span>
              </div>

              {/* Feature 2 */}
              <div className="px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_4px_14px_rgba(20,50,140,0.08)] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight">
                  Real Projects
                </span>
              </div>

              {/* Feature 3 */}
              <div className="px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_4px_14px_rgba(20,50,140,0.08)] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Mic className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight">
                  Mock Interviews
                </span>
              </div>

              {/* Feature 4 */}
              <div className="px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_4px_14px_rgba(20,50,140,0.08)] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
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
      <section className="w-full rounded-3xl bg-white border border-slate-200/80 shadow-xs p-5 sm:p-8 lg:p-10">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-2 border-b border-slate-100">
          <div>
            <div className="text-[10px] sm:text-[11px] font-black text-blue-600 tracking-wider uppercase">
              TRUSTED BY LEARNERS. RECRUITED BY TOP COMPANIES.
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-slate-900 leading-tight tracking-tight mt-1">
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
            className="self-start sm:self-center shrink-0 px-4 py-1.5 rounded-full border border-blue-200 text-blue-700 font-bold text-xs bg-white hover:bg-blue-50 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
          >
            <span>View All Companies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Clean, Spacious Responsive Logo Grid (No Moving Marquee) */}
        <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 sm:gap-3.5">
          {HIRING_COMPANIES.map((comp, idx) => (
            <div
              key={`${comp.name}-${idx}`}
              className="h-14 sm:h-16 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 shadow-2xs hover:shadow-xs p-3 flex items-center justify-center transition-all duration-200 group"
            >
              <img
                src={comp.logo}
                alt={comp.name}
                className="max-h-6 sm:max-h-7 max-w-[85px] sm:max-w-[105px] object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
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
            <div className="text-[10px] sm:text-[11px] font-black text-blue-600 tracking-wider uppercase">
              OUR LEARNERS. THEIR STORIES.
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-slate-900 leading-tight tracking-tight mt-1">
              Real Career Journeys. Real Impact.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Meet our learners who transformed their careers with Future IT Industry.
            </p>
          </div>

          {/* Right Navigation & View All Action */}
          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
            <button
              type="button"
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
              className="px-3.5 py-1.5 rounded-full border border-blue-200 text-blue-700 font-bold text-xs bg-white hover:bg-blue-50 active:scale-95 transition-all cursor-pointer shadow-2xs"
            >
              View All Stories
            </button>

            {/* Arrows */}
            <div className="flex items-center gap-1 ml-1">
              <button
                type="button"
                onClick={scrollLeft}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 active:scale-90 text-slate-700 flex items-center justify-center transition-transform cursor-pointer shadow-2xs"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={scrollRight}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 active:scale-90 text-slate-700 flex items-center justify-center transition-transform cursor-pointer shadow-2xs"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Photo-First Placement Cards Track ── */}
        <div
          ref={scrollTrackRef}
          className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar pb-3 pt-1 scroll-smooth"
        >
          {PLACEMENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="w-[170px] sm:w-[195px] shrink-0 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-3 flex flex-col items-center text-center cursor-pointer group"
              onClick={() => {
                playClick();
                onExploreProgram?.();
              }}
            >
              {/* Photo on top (Square portrait matching reference) */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-xs">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="text-[14px] font-black text-slate-900 leading-tight mt-2.5 line-clamp-1">
                {story.name}
              </h3>

              {/* Verified Company Logo */}
              <div className="h-6 mt-1.5 flex items-center justify-center">
                <img
                  src={story.companyLogo}
                  alt={story.companyName}
                  className="max-h-5 max-w-[70px] object-contain opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Role & Placement Type */}
              <div className="mt-1 text-[11px] font-bold text-slate-700 leading-tight">
                {story.role}
              </div>
              <div className="text-[9.5px] font-semibold text-slate-400 leading-none mt-0.5">
                {story.type}
              </div>

              {/* Program Badge at Bottom */}
              <div className="mt-2.5 px-2.5 py-0.5 rounded-full text-[9.5px] font-black text-blue-600 bg-blue-50 border border-blue-100">
                {story.badge}
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default RealSuccessStoriesShowcase;
