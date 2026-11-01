import React from 'react';
import { ArrowRight, Briefcase, Lock, CheckCircle2 } from 'lucide-react';
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
  theme: 'cyan' | 'purple' | 'blue' | 'pink';
  tools: CourseCardTool[];
  jobRoles: string;
  salary: string;
  price?: string;
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
  tools,
  jobRoles,
  salary,
  price = '₹987',
  isUnlocked = false,
  onClick,
}) => {
  // Theme configuration matching Reference Image 1 exactly
  const themeConfig = {
    cyan: {
      cardBorder: 'border-[1.5px] border-cyan-400 shadow-[0_4px_20px_rgba(6,182,212,0.18)] hover:border-cyan-500 hover:shadow-[0_8px_28px_rgba(6,182,212,0.30)]',
      briefcaseBox: 'bg-cyan-50 text-cyan-600 border border-cyan-200/90',
      jobRolesLabel: 'text-cyan-600',
      salaryColor: 'text-emerald-600',
      activeBtn: 'bg-cyan-600 hover:bg-cyan-700 text-white',
    },
    purple: {
      cardBorder: 'border-[1.5px] border-purple-400 shadow-[0_4px_20px_rgba(168,85,247,0.18)] hover:border-purple-500 hover:shadow-[0_8px_28px_rgba(168,85,247,0.30)]',
      briefcaseBox: 'bg-purple-50 text-purple-600 border border-purple-200/90',
      jobRolesLabel: 'text-purple-600',
      salaryColor: 'text-purple-600',
      activeBtn: 'bg-purple-600 hover:bg-purple-700 text-white',
    },
    blue: {
      cardBorder: 'border-[1.5px] border-blue-400 shadow-[0_4px_20px_rgba(59,130,246,0.18)] hover:border-blue-500 hover:shadow-[0_8px_28px_rgba(59,130,246,0.30)]',
      briefcaseBox: 'bg-blue-50 text-blue-600 border border-blue-200/90',
      jobRolesLabel: 'text-blue-600',
      salaryColor: 'text-blue-600',
      activeBtn: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    pink: {
      cardBorder: 'border-[1.5px] border-pink-400 shadow-[0_4px_20px_rgba(236,72,153,0.18)] hover:border-pink-500 hover:shadow-[0_8px_28px_rgba(236,72,153,0.30)]',
      briefcaseBox: 'bg-pink-50 text-pink-600 border border-pink-200/90',
      jobRolesLabel: 'text-pink-600',
      salaryColor: 'text-pink-600',
      activeBtn: 'bg-pink-600 hover:bg-pink-700 text-white',
    },
  }[theme] || {
    cardBorder: 'border-[1.5px] border-cyan-400 shadow-[0_4px_20px_rgba(6,182,212,0.18)]',
    briefcaseBox: 'bg-cyan-50 text-cyan-600 border border-cyan-200/90',
    jobRolesLabel: 'text-cyan-600',
    salaryColor: 'text-emerald-600',
    activeBtn: 'bg-cyan-600 text-white',
  };

  return (
    <article
      onClick={onClick}
      className={`group relative bg-white rounded-2xl ${themeConfig.cardBorder} flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none`}
    >
      {/* 1. TOP ARTWORK (Holographic Cyber Poster / Video) */}
      <div className="relative w-full h-[135px] sm:h-[142px] overflow-hidden bg-slate-950 shrink-0">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. CARD CONTENT BODY */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between gap-2 bg-white">
        
        {/* Course Title */}
        <div className="text-center pt-0.5">
          <h3 className="font-extrabold text-[14.5px] sm:text-[15px] text-slate-950 tracking-tight leading-snug">
            {title}
            {subtitle && <span className="font-bold text-slate-600 ml-1">({subtitle})</span>}
          </h3>
        </div>

        {/* 5 Tool Icons Row */}
        <div className="flex items-center justify-between w-full px-1 py-0.5">
          {tools.slice(0, 5).map((t, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 text-center min-w-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ToolIcon name={t.name} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
              </div>
              <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 tracking-tight truncate w-full text-center mt-0.5">
                {t.name}
              </span>
            </div>
          ))}
        </div>

        {/* Subtle Divider Line */}
        <div className="w-full border-t border-slate-100 my-0.5" />

        {/* Job Roles & CTC Package Row */}
        <div className="flex items-center justify-between w-full">
          {/* Left: Job Roles */}
          <div className="flex items-center gap-1.5 min-w-0">
            <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${themeConfig.briefcaseBox}`}>
              <Briefcase className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col min-w-0 text-left">
              <span className={`text-[10px] font-bold tracking-tight leading-none ${themeConfig.jobRolesLabel}`}>
                Job Roles
              </span>
              <span className="text-[10px] font-semibold text-slate-800 truncate max-w-[105px] sm:max-w-[125px] mt-0.5">
                {jobRoles}
              </span>
            </div>
          </div>

          {/* Right: Package CTC */}
          <div className="flex flex-col items-end text-right shrink-0">
            <span className={`text-[13px] sm:text-[13.5px] font-black tracking-tight leading-none ${themeConfig.salaryColor}`}>
              {salary}
            </span>
            <span className="text-[9px] font-medium text-slate-400 mt-0.5">
              Average Package
            </span>
          </div>
        </div>

        {/* Bottom Action Row (Price Pill + Unlock/Resume Button) */}
        <div className="flex items-center gap-2 w-full pt-0.5">
          {/* Price or Enrolled Badge */}
          {isUnlocked ? (
            <div className="w-[30%] py-1.5 rounded-full font-bold text-[10.5px] text-center bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-2xs select-none flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>Enrolled</span>
            </div>
          ) : (
            <div className="w-[30%] py-1.5 rounded-full font-black text-xs sm:text-[13px] text-center bg-[#fffbeb] text-amber-900 border border-amber-300 shadow-2xs select-none">
              {price}
            </div>
          )}

          {/* Unlock / Resume Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className={`flex-1 py-1.5 px-3 rounded-full font-bold text-xs sm:text-[12.5px] flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer ${
              isUnlocked
                ? 'bg-slate-900 hover:bg-slate-800 text-white'
                : 'bg-slate-950 hover:bg-slate-800 text-white'
            }`}
          >
            {isUnlocked ? (
              <>
                <span>Resume Course</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Unlock Course</span>
              </>
            )}
          </button>
        </div>

      </div>
    </article>
  );
};
