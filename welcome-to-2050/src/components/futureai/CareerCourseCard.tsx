import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { ToolIcon } from './CourseToolIcons';

export interface CourseCardTool {
  name: string;
}

export interface CareerCourseCardProps {
  id: string;
  title: string;
  subtitle?: string;
  shortDesc: string;
  image: string;
  holoImage?: string;
  video?: string;
  theme: 'cyan' | 'purple' | 'blue' | 'pink';
  tools: CourseCardTool[];
  jobRoles: string;
  salary: string;
  price?: string;
  onClick: () => void;
}

export const CareerCourseCard: React.FC<CareerCourseCardProps> = ({
  title,
  subtitle,
  shortDesc,
  image,
  holoImage,
  video,
  theme,
  tools,
  jobRoles,
  salary,
  price = '₹987',
  onClick,
}) => {
  // Theme styles based on the 4 reference cards in the screenshot
  const themeStyles = {
    cyan: {
      border: 'border-2 border-cyan-400 shadow-[0_0_24px_rgba(6,182,212,0.22)]',
      briefcaseBg: 'bg-cyan-50 text-cyan-600 border border-cyan-200',
      jobRolesTitle: 'text-cyan-600',
      salaryColor: 'text-emerald-600',
      buttonBg: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-teal-600 text-white shadow-emerald-500/25',
      arrowText: 'text-emerald-600',
    },
    purple: {
      border: 'border-2 border-purple-400 shadow-[0_0_24px_rgba(168,85,247,0.22)]',
      briefcaseBg: 'bg-purple-50 text-purple-600 border border-purple-200',
      jobRolesTitle: 'text-purple-600',
      salaryColor: 'text-purple-600',
      buttonBg: 'bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white shadow-purple-500/25',
      arrowText: 'text-purple-600',
    },
    blue: {
      border: 'border-2 border-blue-400 shadow-[0_0_24px_rgba(59,130,246,0.22)]',
      briefcaseBg: 'bg-blue-50 text-blue-600 border border-blue-200',
      jobRolesTitle: 'text-blue-600',
      salaryColor: 'text-blue-600',
      buttonBg: 'bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 text-white shadow-blue-500/25',
      arrowText: 'text-blue-600',
    },
    pink: {
      border: 'border-2 border-pink-400 shadow-[0_0_24px_rgba(244,114,182,0.22)]',
      briefcaseBg: 'bg-pink-50 text-pink-600 border border-pink-200',
      jobRolesTitle: 'text-pink-600',
      salaryColor: 'text-pink-600',
      buttonBg: 'bg-gradient-to-r from-pink-500 via-rose-500 to-rose-600 text-white shadow-pink-500/25',
      arrowText: 'text-pink-600',
    },
  }[theme];

  return (
    <article
      onClick={onClick}
      className={`rounded-3xl bg-white/95 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer ${themeStyles.border}`}
    >
      {/* 1. TOP VIDEO / POSTER HEADER */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
        {video ? (
          <video
            src={video}
            poster={holoImage || image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={holoImage || image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. CARD CONTENT BODY */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        {/* Title & Description */}
        <div className="text-center">
          <h3 className="font-black text-base sm:text-[17px] text-[#0033cc] tracking-tight leading-snug">
            {title} {subtitle && <span className="text-slate-800">{subtitle}</span>}
          </h3>
          <p className="text-[11.5px] sm:text-xs text-slate-600 font-medium mt-1 line-clamp-2 leading-relaxed">
            {shortDesc}
          </p>
        </div>

        {/* 3. 5 TOOL ICONS WITH NAMES UNDERNEATH (Exact 1:1 Match with Screenshot) */}
        <div className="flex items-center justify-between gap-1 py-1 px-0.5">
          {tools.slice(0, 5).map((t, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 text-center min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50/90 border border-slate-200/80 p-1.5 flex items-center justify-center shadow-2xs hover:scale-110 transition-transform">
                <ToolIcon name={t.name} className="w-6 h-6 object-contain" />
              </div>
              <span className="text-[9px] sm:text-[9.5px] font-black text-slate-700 tracking-tight truncate w-full text-center mt-1">
                {t.name}
              </span>
            </div>
          ))}
        </div>

        {/* 4. JOB ROLES & SALARY PACKAGE ROW */}
        <div className="flex items-center justify-between pt-2.5 pb-1 border-t border-slate-100">
          {/* Left: Briefcase + Roles */}
          <div className="flex items-center gap-2 min-w-0">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${themeStyles.briefcaseBg}`}>
              <Briefcase className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col min-w-0 text-left">
              <span className={`text-[10.5px] font-black tracking-tight leading-none ${themeStyles.jobRolesTitle}`}>
                Job Roles
              </span>
              <span className="text-[9.5px] font-bold text-slate-600 truncate max-w-[125px] sm:max-w-[145px] mt-0.5">
                {jobRoles}
              </span>
            </div>
          </div>

          {/* Right: Salary & Label */}
          <div className="flex flex-col items-end text-right shrink-0">
            <span className={`text-sm sm:text-[15px] font-black tracking-tight leading-none ${themeStyles.salaryColor}`}>
              {salary}
            </span>
            <span className="text-[9px] font-semibold text-slate-400 mt-0.5">
              Average Package
            </span>
          </div>
        </div>

        {/* 5. DUAL ACTION BUTTONS (Left: ₹987 mint pill, Right: Start Learning arrow button) */}
        <div className="flex items-center gap-2 pt-1">
          {/* Price Button */}
          <div className="flex-1 py-2 rounded-full font-black text-base sm:text-[17px] text-center bg-[#dcfce7] text-[#15803d] border border-[#86efac] shadow-xs select-none">
            {price}
          </div>

          {/* Start Learning Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className={`flex-[2] py-2 px-3 rounded-full font-black text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer hover:brightness-105 ${themeStyles.buttonBg}`}
          >
            <span>Start Learning</span>
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
              <ArrowRight className={`w-3.5 h-3.5 stroke-[3] ${themeStyles.arrowText}`} />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};
