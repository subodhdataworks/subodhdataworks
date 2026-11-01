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
  // Exact visual theme configuration matching reference image with subtle glow and 2-3px lift
  const themeConfig = {
    cyan: {
      cardBorder: 'border-[1.5px] border-[#16d5f7] hover:border-[#38e1fd]',
      cardShadow: '0 2px 10px rgba(22, 213, 247, 0.16)',
      hoverClass: 'hover:shadow-[0_6px_20px_rgba(22,213,247,0.30),0_0_10px_rgba(22,213,247,0.18)]',
      neonDivider: 'linear-gradient(90deg, rgba(22,213,247,0.15) 0%, #16d5f7 50%, rgba(22,213,247,0.15) 100%)',
      neonDividerGlow: '0 0 6px #16d5f7',
      bodyBg: 'bg-gradient-to-b from-[#f2faff] via-[#f8fcff] to-white',
      briefcaseBox: 'bg-cyan-50 text-cyan-600 border border-cyan-200',
      jobRolesLabel: 'text-cyan-600',
      salaryColor: 'text-emerald-600',
    },
    purple: {
      cardBorder: 'border-[1.5px] border-[#b845ff] hover:border-[#cf6fff]',
      cardShadow: '0 2px 10px rgba(184, 69, 255, 0.16)',
      hoverClass: 'hover:shadow-[0_6px_20px_rgba(184,69,255,0.30),0_0_10px_rgba(184,69,255,0.18)]',
      neonDivider: 'linear-gradient(90deg, rgba(184,69,255,0.15) 0%, #b845ff 50%, rgba(184,69,255,0.15) 100%)',
      neonDividerGlow: '0 0 6px #b845ff',
      bodyBg: 'bg-gradient-to-b from-[#fcf6ff] via-[#fbf8ff] to-white',
      briefcaseBox: 'bg-purple-50 text-purple-600 border border-purple-200',
      jobRolesLabel: 'text-purple-600',
      salaryColor: 'text-purple-600',
    },
    blue: {
      cardBorder: 'border-[1.5px] border-[#2f80ed] hover:border-[#4d97ff]',
      cardShadow: '0 2px 10px rgba(47, 128, 237, 0.16)',
      hoverClass: 'hover:shadow-[0_6px_20px_rgba(47,128,237,0.30),0_0_10px_rgba(47,128,237,0.18)]',
      neonDivider: 'linear-gradient(90deg, rgba(47,128,237,0.15) 0%, #2f80ed 50%, rgba(47,128,237,0.15) 100%)',
      neonDividerGlow: '0 0 6px #2f80ed',
      bodyBg: 'bg-gradient-to-b from-[#f2f7ff] via-[#f7faff] to-white',
      briefcaseBox: 'bg-blue-50 text-blue-600 border border-blue-200',
      jobRolesLabel: 'text-blue-600',
      salaryColor: 'text-blue-600',
    },
    pink: {
      cardBorder: 'border-[1.5px] border-[#ff4d94] hover:border-[#ff6fa8]',
      cardShadow: '0 2px 10px rgba(255, 77, 148, 0.16)',
      hoverClass: 'hover:shadow-[0_6px_20px_rgba(255,77,148,0.30),0_0_10px_rgba(255,77,148,0.18)]',
      neonDivider: 'linear-gradient(90deg, rgba(255,77,148,0.15) 0%, #ff4d94 50%, rgba(255,77,148,0.15) 100%)',
      neonDividerGlow: '0 0 6px #ff4d94',
      bodyBg: 'bg-gradient-to-b from-[#fff3f8] via-[#fff9fc] to-white',
      briefcaseBox: 'bg-pink-50 text-pink-600 border border-pink-200',
      jobRolesLabel: 'text-pink-600',
      salaryColor: 'text-pink-600',
    },
  }[theme] || {
    cardBorder: 'border-[1.5px] border-[#16d5f7] hover:border-[#38e1fd]',
    cardShadow: '0 2px 10px rgba(22, 213, 247, 0.16)',
    hoverClass: 'hover:shadow-[0_6px_20px_rgba(22,213,247,0.30)]',
    neonDivider: 'linear-gradient(90deg, rgba(22,213,247,0.15) 0%, #16d5f7 50%, rgba(22,213,247,0.15) 100%)',
    neonDividerGlow: '0 0 6px #16d5f7',
    bodyBg: 'bg-gradient-to-b from-[#f2faff] via-[#f8fcff] to-white',
    briefcaseBox: 'bg-cyan-50 text-cyan-600 border border-cyan-200',
    jobRolesLabel: 'text-cyan-600',
    salaryColor: 'text-emerald-600',
  };

  return (
    <article
      onClick={onClick}
      className={`group relative rounded-2xl ${themeConfig.cardBorder} flex flex-col overflow-hidden transition-all duration-200 ease-out hover:-translate-y-[2.5px] ${themeConfig.hoverClass} cursor-pointer select-none`}
      style={{
        boxShadow: themeConfig.cardShadow,
      }}
    >
      {/* 1. TOP ARTWORK (Futuristic Hologram Poster / Video across the top - slightly compact) */}
      <div className="relative w-full h-[114px] sm:h-[120px] overflow-hidden bg-slate-950 shrink-0">
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

      {/* Thin Neon Glow Separating Artwork from Card Information */}
      <div
        className="w-full h-[2px] relative z-10 shrink-0"
        style={{
          background: themeConfig.neonDivider,
          boxShadow: themeConfig.neonDividerGlow,
        }}
      />

      {/* 2. SOFT TRANSLUCENT WHITE / LIGHT-BLUE CARD BODY (Compact & Elegant Spacing) */}
      <div className={`p-2.5 sm:p-3 flex flex-col flex-1 justify-between gap-1.5 ${themeConfig.bodyBg}`}>
        
        {/* Compact, Bold Course Title */}
        <div className="text-center pt-0.5">
          <h3 className="font-black text-[13.5px] sm:text-[14px] text-slate-950 tracking-tight leading-snug">
            {title}
            {subtitle && <span className="font-bold text-slate-600 ml-1">({subtitle})</span>}
          </h3>
        </div>

        {/* One Horizontal Row of Technology Icons and Labels */}
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

        {/* Thin Divider Above the Job-Role Section */}
        <div className="w-full border-t border-slate-200/60 my-0.5" />

        {/* Job-Role Information on Left, Salary Information on Right */}
        <div className="flex items-center justify-between w-full">
          {/* Left: Job Roles */}
          <div className="flex items-center gap-1.5 min-w-0">
            <div className={`w-5.5 h-5.5 rounded-md flex items-center justify-center shrink-0 ${themeConfig.briefcaseBox}`}>
              <Briefcase className="w-3 h-3" />
            </div>
            <div className="flex flex-col min-w-0 text-left">
              <span className={`text-[9.5px] font-bold tracking-tight leading-none ${themeConfig.jobRolesLabel}`}>
                Job Roles
              </span>
              <span className="text-[9.5px] font-semibold text-slate-800 truncate max-w-[100px] sm:max-w-[120px] mt-0.5">
                {jobRoles}
              </span>
            </div>
          </div>

          {/* Right: Salary CTC */}
          <div className="flex flex-col items-end text-right shrink-0">
            <span className={`text-[12.5px] sm:text-[13px] font-black tracking-tight leading-none ${themeConfig.salaryColor}`}>
              {salary}
            </span>
            <span className="text-[8.5px] font-medium text-slate-400 mt-0.5">
              Average Package
            </span>
          </div>
        </div>

        {/* Rounded Price Pill at Bottom-Left & Dark Navy Unlock Course Button at Bottom-Right */}
        <div className="flex items-center gap-1.5 w-full pt-0.5">
          {/* Price or Enrolled Badge */}
          {isUnlocked ? (
            <div className="w-[30%] py-1 rounded-full font-bold text-[10px] text-center bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-2xs select-none flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
              <span>Enrolled</span>
            </div>
          ) : (
            <div className="w-[30%] py-1 rounded-full font-black text-xs sm:text-[12.5px] text-center bg-[#fffdeb] text-amber-900 border border-amber-300/90 shadow-2xs select-none">
              {price}
            </div>
          )}

          {/* Dark Navy Unlock Course Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className={`flex-1 py-1 px-3 rounded-full font-bold text-[11.5px] sm:text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer ${
              isUnlocked
                ? 'bg-[#0c1527] hover:bg-slate-800 text-white'
                : 'bg-[#0c1527] hover:bg-[#16223b] text-white'
            }`}
          >
            {isUnlocked ? (
              <>
                <span>Resume Course</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </>
            ) : (
              <>
                <Lock className="w-3 h-3 text-amber-400 shrink-0" />
                <span>Unlock Course</span>
              </>
            )}
          </button>
        </div>

      </div>
    </article>
  );
};
