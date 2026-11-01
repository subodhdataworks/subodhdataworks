import React from 'react';
import { ArrowRight, Briefcase, Rocket, CheckCircle2 } from 'lucide-react';
import { ToolIcon } from './CourseToolIcons';

export interface CourseCardTool {
  name: string;
}

export interface CareerCourseCardProps {
  id: string;
  title: string;
  subtitle?: string;
  shortDesc?: string;
  image: string;
  holoImage?: string;
  video?: string;
  theme: 'emerald' | 'purple' | 'blue' | 'orange' | 'dark' | 'teal' | 'pink' | 'cyan';
  topBadge?: {
    icon: string;
    text: string;
  };
  tools: CourseCardTool[];
  jobRoles: string;
  salary: string;
  price?: string;
  originalPrice?: string;
  discountBadge?: string;
  isUnlocked?: boolean;
  onClick: () => void;
}

export const CareerCourseCard: React.FC<CareerCourseCardProps> = ({
  title,
  subtitle,
  image,
  holoImage,
  video,
  theme,
  topBadge,
  tools,
  jobRoles,
  salary,
  price = '₹987',
  originalPrice = '₹12,999',
  discountBadge,
  isUnlocked = false,
  onClick,
}) => {
  const origPrice = originalPrice || '₹12,999';
  const calculateDiscount = (orig: string, curr: string) => {
    const o = parseInt(orig.replace(/\D/g, ''), 10) || 12999;
    const c = parseInt(curr.replace(/\D/g, ''), 10) || 987;
    if (o <= c) return '0% OFF';
    const rawPct = Math.round(((o - c) / o) * 100);
    const pct = c > 0 && rawPct >= 100 ? 99 : rawPct;
    return `${pct}% OFF`;
  };
  const finalDiscount = discountBadge || calculateDiscount(origPrice, price);

  // Theme configuration matching reference image 1:1
  const themeConfig = {
    emerald: {
      shadowClass: 'shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:shadow-[0_12px_28px_rgba(16,185,129,0.30)]',
      borderClass: 'border-slate-200/90 hover:border-emerald-300',
      briefcaseBox: 'bg-blue-50 text-blue-600 border border-blue-100',
      salaryPill: 'bg-emerald-50 border border-emerald-100 text-emerald-700',
      unlockBtn: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-[0_2px_8px_rgba(16,185,129,0.35)]',
    },
    purple: {
      shadowClass: 'shadow-[0_8px_24px_rgba(168,85,247,0.18)] hover:shadow-[0_12px_28px_rgba(168,85,247,0.30)]',
      borderClass: 'border-slate-200/90 hover:border-purple-300',
      briefcaseBox: 'bg-purple-50 text-purple-600 border border-purple-100',
      salaryPill: 'bg-purple-50 border border-purple-100 text-purple-700',
      unlockBtn: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-[0_2px_8px_rgba(168,85,247,0.35)]',
    },
    blue: {
      shadowClass: 'shadow-[0_8px_24px_rgba(37,99,235,0.18)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.30)]',
      borderClass: 'border-slate-200/90 hover:border-blue-300',
      briefcaseBox: 'bg-blue-50 text-blue-600 border border-blue-100',
      salaryPill: 'bg-emerald-50 border border-emerald-100 text-emerald-700',
      unlockBtn: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-[0_2px_8px_rgba(37,99,235,0.35)]',
    },
    orange: {
      shadowClass: 'shadow-[0_8px_24px_rgba(249,115,22,0.18)] hover:shadow-[0_12px_28px_rgba(249,115,22,0.30)]',
      borderClass: 'border-slate-200/90 hover:border-orange-300',
      briefcaseBox: 'bg-blue-50 text-blue-600 border border-blue-100',
      salaryPill: 'bg-emerald-50 border border-emerald-100 text-emerald-700',
      unlockBtn: 'bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white shadow-[0_2px_8px_rgba(249,115,22,0.35)]',
    },
    dark: {
      shadowClass: 'shadow-[0_8px_24px_rgba(15,23,42,0.16)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.26)]',
      borderClass: 'border-slate-200/90 hover:border-slate-400',
      briefcaseBox: 'bg-purple-50 text-purple-600 border border-purple-100',
      salaryPill: 'bg-purple-50 border border-purple-100 text-purple-700',
      unlockBtn: 'bg-slate-900 hover:bg-slate-800 text-white shadow-[0_2px_8px_rgba(15,23,42,0.35)]',
    },
    teal: {
      shadowClass: 'shadow-[0_8px_24px_rgba(13,148,136,0.18)] hover:shadow-[0_12px_28px_rgba(13,148,136,0.30)]',
      borderClass: 'border-slate-200/90 hover:border-teal-300',
      briefcaseBox: 'bg-blue-50 text-blue-600 border border-blue-100',
      salaryPill: 'bg-teal-50 border border-teal-100 text-teal-700',
      unlockBtn: 'bg-gradient-to-r from-teal-700 to-cyan-700 hover:from-teal-800 hover:to-cyan-800 text-white shadow-[0_2px_8px_rgba(13,148,136,0.35)]',
    },
    pink: {
      shadowClass: 'shadow-[0_8px_24px_rgba(225,29,72,0.18)] hover:shadow-[0_12px_28px_rgba(225,29,72,0.30)]',
      borderClass: 'border-slate-200/90 hover:border-pink-300',
      briefcaseBox: 'bg-pink-50 text-pink-600 border border-pink-100',
      salaryPill: 'bg-rose-50 border border-rose-100 text-rose-700',
      unlockBtn: 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white shadow-[0_2px_8px_rgba(225,29,72,0.35)]',
    },
    cyan: {
      shadowClass: 'shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:shadow-[0_12px_28px_rgba(16,185,129,0.30)]',
      borderClass: 'border-slate-200/90 hover:border-emerald-300',
      briefcaseBox: 'bg-blue-50 text-blue-600 border border-blue-100',
      salaryPill: 'bg-emerald-50 border border-emerald-100 text-emerald-700',
      unlockBtn: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-[0_2px_8px_rgba(16,185,129,0.35)]',
    },
  }[theme] || {
    shadowClass: 'shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:shadow-[0_12px_28px_rgba(16,185,129,0.30)]',
    borderClass: 'border-slate-200/90 hover:border-emerald-300',
    briefcaseBox: 'bg-blue-50 text-blue-600 border border-blue-100',
    salaryPill: 'bg-emerald-50 border border-emerald-100 text-emerald-700',
    unlockBtn: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-[0_2px_8px_rgba(16,185,129,0.35)]',
  };

  return (
    <article
      onClick={onClick}
      className={`group relative rounded-2xl bg-white border ${themeConfig.borderClass} ${themeConfig.shadowClass} flex flex-col overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 cursor-pointer select-none`}
    >
      {/* 1. TOP ARTWORK */}
      <div className="relative w-full h-[115px] sm:h-[122px] overflow-hidden bg-slate-950 shrink-0">
        {/* Top-Left Category Badge */}
        {topBadge && (
          <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-slate-800 text-[10px] font-black shadow-sm border border-slate-100">
            <span>{topBadge.icon}</span>
            <span>{topBadge.text}</span>
          </div>
        )}

        {video ? (
          <video
            src={video}
            poster={holoImage || image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <img
            src={holoImage || image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      {/* 2. CARD BODY */}
      <div className="p-2.5 sm:p-3 flex flex-col flex-1 justify-between gap-1.5 bg-white">
        
        {/* Course Title */}
        <div className="text-center pt-0.5">
          <h3 className="font-black text-[13.5px] sm:text-[14.5px] text-slate-950 tracking-tight leading-snug">
            {title}
            {subtitle && <span className="font-bold text-slate-600 ml-1">({subtitle})</span>}
          </h3>
        </div>

        {/* 5 Technology Icons & Labels */}
        <div className="flex items-center justify-between w-full px-0.5 py-0.5">
          {tools.slice(0, 5).map((t, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 text-center min-w-0">
              <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ToolIcon name={t.name} className="w-4.5 h-4.5 sm:w-5 sm:h-5 object-contain" />
              </div>
              <span className="text-[9px] font-bold text-slate-700 tracking-tight truncate w-full text-center mt-0.5">
                {t.name}
              </span>
            </div>
          ))}
        </div>

        {/* Thin Divider */}
        <div className="w-full border-t border-slate-100 my-0.5" />

        {/* Job Roles (Left) & Salary Package (Right) */}
        <div className="flex items-center justify-between w-full gap-1.5">
          {/* Left: Job Roles */}
          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <div className={`w-5.5 h-5.5 rounded-md flex items-center justify-center shrink-0 ${themeConfig.briefcaseBox}`}>
              <Briefcase className="w-3 h-3" />
            </div>
            <div className="flex flex-col min-w-0 text-left">
              <span className="text-[9px] font-bold tracking-tight text-slate-700 leading-none">
                Job Roles
              </span>
              <span className="text-[9.5px] font-semibold text-slate-800 truncate max-w-[105px] sm:max-w-[125px] mt-0.5">
                {jobRoles}
              </span>
            </div>
          </div>

          {/* Right: Salary Pill Container */}
          <div className={`flex flex-col items-end text-right shrink-0 px-2 py-0.5 rounded-lg ${themeConfig.salaryPill}`}>
            <span className="text-[11.5px] sm:text-[12px] font-black tracking-tight leading-none">
              {salary}
            </span>
            <span className="text-[8px] font-medium text-slate-500 mt-0.5">
              Average Package
            </span>
          </div>
        </div>

        {/* 3. BOTTOM ROW: Strikethrough & % Off (Left) | Unlock Course Button (Center) | Bold Green Price (Right) */}
        <div className="flex items-center justify-between gap-1 w-full pt-1.5 border-t border-slate-50">
          {/* Left: Original Price & Discount Badge */}
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-700 line-through tracking-tight">
              {origPrice}
            </span>
            <span className="text-[8px] sm:text-[8.5px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/90 px-1 py-0.5 rounded tracking-tight">
              {finalDiscount}
            </span>
          </div>

          {/* Center: Premium Unlock Course Pill Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className={`shrink-0 py-1 px-2.5 sm:px-3 rounded-full font-bold text-[10px] sm:text-[10.5px] flex items-center justify-center gap-1 shadow-sm transition-all duration-150 active:scale-95 cursor-pointer whitespace-nowrap ${themeConfig.unlockBtn}`}
          >
            {isUnlocked ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-white shrink-0" />
                <span>Resume</span>
                <ArrowRight className="w-2.5 h-2.5 ml-0.5" />
              </>
            ) : (
              <>
                <Rocket className="w-3 h-3 text-white stroke-[2.2] shrink-0" />
                <span>Unlock Course</span>
                <ArrowRight className="w-2.5 h-2.5 text-white stroke-[2.2] shrink-0" />
              </>
            )}
          </button>

          {/* Right: Bold Green Current Price */}
          <span className="text-[15px] sm:text-[16px] font-black text-emerald-600 tracking-tight shrink-0 text-right">
            {price}
          </span>
        </div>

      </div>
    </article>
  );
};
