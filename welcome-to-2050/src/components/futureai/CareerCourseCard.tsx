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
  shortDesc?: string;
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
  const themeClass = `scd-pot-${theme}`;

  // Premium color styling according to pot theme + deep black text
  const themeStyles = {
    cyan: {
      titleAccent: 'text-cyan-600',
      jobRolesLabel: 'text-cyan-700',
      briefcaseBg: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
      salaryColor: 'text-emerald-700',
      buttonBg: 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-teal-500/25',
      arrowText: 'text-teal-700',
    },
    purple: {
      titleAccent: 'text-purple-600',
      jobRolesLabel: 'text-purple-700',
      briefcaseBg: 'bg-purple-50 text-purple-700 border border-purple-200',
      salaryColor: 'text-purple-700',
      buttonBg: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-500/25',
      arrowText: 'text-purple-700',
    },
    blue: {
      titleAccent: 'text-blue-600',
      jobRolesLabel: 'text-blue-700',
      briefcaseBg: 'bg-blue-50 text-blue-700 border border-blue-200',
      salaryColor: 'text-blue-700',
      buttonBg: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25',
      arrowText: 'text-blue-700',
    },
    pink: {
      titleAccent: 'text-pink-600',
      jobRolesLabel: 'text-pink-700',
      briefcaseBg: 'bg-pink-50 text-pink-700 border border-pink-200',
      salaryColor: 'text-pink-700',
      buttonBg: 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-pink-500/25',
      arrowText: 'text-pink-700',
    },
  }[theme];

  return (
    <article
      onClick={onClick}
      className={`scd-pot-card ${themeClass} cursor-pointer w-full group`}
    >
      {/* 1. TOP 3D HOLOGRAM / VIDEO DOME FLOWING UP OUT OF THE POT */}
      <div className="scd-pot-flow-stage">
        <div className="scd-pot-rising-energy" />
        <div className="scd-pot-particles">
          <span className="scd-pt p1" />
          <span className="scd-pt p2" />
          <span className="scd-pt p3" />
        </div>

        <div className="scd-pot-holo-dome">
          {video ? (
            <video
              src={video}
              poster={holoImage || image}
              autoPlay
              loop
              muted
              playsInline
              className="scd-pot-holo-img w-full h-full object-cover"
            />
          ) : (
            <img
              src={holoImage || image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="scd-pot-holo-img w-full h-full object-cover"
            />
          )}
          <div className="scd-pot-holo-glass-frame" />
        </div>
      </div>

      {/* 2. 3D CYLINDRICAL POT WRAP (PREMIUM PORCELAIN GLASS & METALLIC SHAPE) */}
      <div className="scd-pot-cylinder-wrap w-full flex flex-col items-center">
        {/* Soft Glowing Rim */}
        <div className="scd-pot-top-rim">
          <div className="scd-pot-mouth-vortex" />
          <div className="scd-pot-rim-neon-ring" />
        </div>

        {/* 3D Cylindrical Pot Body - Ultra Premium Light Porcelain with Black & Pot Themed Text */}
        <div className="scd-pot-cylinder-body w-full">
          <span className="scd-pot-side-rib left" />
          <span className="scd-pot-side-rib right" />

          {/* A. Course Title & Subtitle - Black + Themed Color (NO White Text) */}
          <div className="text-center px-1">
            <h3 className="font-black text-sm sm:text-[15.5px] leading-snug tracking-tight text-slate-950">
              <span>{title}</span>{' '}
              {subtitle && (
                <span className={`font-extrabold ${themeStyles.titleAccent}`}>
                  {subtitle}
                </span>
              )}
            </h3>
          </div>

          {/* B. 5 Tool Icons DIRECTLY BELOW TITLE WITHOUT BACKGROUND CONTAINER */}
          <div className="flex items-center justify-between gap-1 py-1 w-full px-1">
            {tools.slice(0, 5).map((t, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 text-center min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:scale-120 transition-transform">
                  <ToolIcon name={t.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                </div>
                <span className="text-[10px] sm:text-[10.5px] font-black text-slate-900 tracking-tight truncate w-full text-center mt-1">
                  {t.name}
                </span>
              </div>
            ))}
          </div>

          {/* C. Job Roles & Salary Package Row - Black & Pot Themed Text */}
          <div className="flex items-center justify-between w-full pt-2.5 pb-1 border-t border-slate-200/90 px-1">
            {/* Left: Briefcase + Roles */}
            <div className="flex items-center gap-1.5 min-w-0">
              <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${themeStyles.briefcaseBg}`}>
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0 text-left">
                <span className={`text-[10.5px] font-black tracking-tight leading-none ${themeStyles.jobRolesLabel}`}>
                  Job Roles
                </span>
                <span className="text-[10px] font-extrabold text-slate-900 truncate max-w-[110px] sm:max-w-[135px] mt-0.5">
                  {jobRoles}
                </span>
              </div>
            </div>

            {/* Right: Salary & Label */}
            <div className="flex flex-col items-end text-right shrink-0">
              <span className={`text-[13.5px] sm:text-sm font-black tracking-tight leading-none ${themeStyles.salaryColor}`}>
                {salary}
              </span>
              <span className="text-[9px] font-bold text-slate-500 mt-0.5">
                Average Package
              </span>
            </div>
          </div>

          {/* D. Dual Action Buttons */}
          <div className="flex items-center gap-2 pt-1 w-full px-1">
            {/* Left: ₹987 mint pill */}
            <div className="flex-1 py-1.5 rounded-full font-black text-xs sm:text-sm text-center bg-[#dcfce7] text-[#15803d] border border-[#86efac] shadow-xs select-none">
              {price}
            </div>

            {/* Right: Start Learning Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className={`flex-[2] py-2 px-3 rounded-full font-black text-xs sm:text-[13px] flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer hover:brightness-105 ${themeStyles.buttonBg}`}
            >
              <span>Start Learning</span>
              <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                <ArrowRight className={`w-2.5 h-2.5 stroke-[3] ${themeStyles.arrowText}`} />
              </span>
            </button>
          </div>
        </div>

        {/* 3. 3D METALLIC PEDESTAL BASE & BOTTOM NEON RING */}
        <div className="scd-pot-bottom-base">
          <div className="scd-pot-bottom-neon-ring" />
          <div className="scd-pot-metallic-plinth" />
          <div className="scd-pot-floor-glow" />
        </div>
      </div>
    </article>
  );
};
