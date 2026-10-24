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
  const themeClass = `scd-pot-${theme}`;

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
          <span className="scd-pt p4" />
          <span className="scd-pt p5" />
          <span className="scd-pt p6" />
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

      {/* 2. 3D CYLINDRICAL METALLIC POT WRAP (THE POT BOX) */}
      <div className="scd-pot-cylinder-wrap w-full flex flex-col items-center">
        {/* Glowing Elliptical Mouth / Rim */}
        <div className="scd-pot-top-rim">
          <div className="scd-pot-mouth-vortex" />
          <div className="scd-pot-rim-neon-ring" />
        </div>

        {/* 3D Cylindrical Pot Body */}
        <div className="scd-pot-cylinder-body w-full">
          <span className="scd-pot-side-rib left" />
          <span className="scd-pot-side-rib right" />

          {/* A. Course Title & Subtitle */}
          <h3 className="scd-pot-title text-center px-1">
            <span className="text-white font-black">{title}</span>{' '}
            {subtitle && (
              <span className="font-extrabold" style={{ color: 'var(--pot-neon-bright)' }}>
                {subtitle}
              </span>
            )}
          </h3>

          {/* B. Short Description */}
          <p className="text-[11px] sm:text-[11.5px] text-slate-200/90 font-medium line-clamp-2 leading-relaxed text-center px-1">
            {shortDesc}
          </p>

          {/* C. 5 Tool Icons with names directly underneath */}
          <div className="flex items-center justify-between gap-1 py-1 w-full px-1">
            {tools.slice(0, 5).map((t, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 text-center min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900/80 border border-white/20 p-1 flex items-center justify-center shadow-inner hover:scale-110 transition-transform">
                  <ToolIcon name={t.name} className="w-5 h-5 object-contain" />
                </div>
                <span className="text-[8.5px] sm:text-[9px] font-bold text-slate-200 tracking-tight truncate w-full text-center mt-1">
                  {t.name}
                </span>
              </div>
            ))}
          </div>

          {/* D. Job Roles & Salary Package Row */}
          <div className="flex items-center justify-between w-full pt-2 pb-1 border-t border-white/15 px-1">
            {/* Left: Briefcase + Roles */}
            <div className="flex items-center gap-1.5 min-w-0">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-white/10 border border-white/20 text-white">
                <Briefcase className="w-3 h-3 text-cyan-300" />
              </div>
              <div className="flex flex-col min-w-0 text-left">
                <span className="text-[10px] font-black tracking-tight leading-none text-cyan-300">
                  Job Roles
                </span>
                <span className="text-[9px] font-semibold text-slate-200 truncate max-w-[105px] sm:max-w-[125px] mt-0.5">
                  {jobRoles}
                </span>
              </div>
            </div>

            {/* Right: Salary & Label */}
            <div className="flex flex-col items-end text-right shrink-0">
              <span className="text-xs sm:text-[13.5px] font-black tracking-tight leading-none text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">
                {salary}
              </span>
              <span className="text-[8.5px] font-medium text-slate-400 mt-0.5">
                Average Package
              </span>
            </div>
          </div>

          {/* E. Dual Action Buttons */}
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
              className="flex-[2] py-1.5 px-3 rounded-full font-black text-xs sm:text-[12.5px] flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:brightness-110"
            >
              <span>Start Learning</span>
              <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                <ArrowRight className="w-2.5 h-2.5 text-indigo-700 stroke-[3]" />
              </span>
            </button>
          </div>
        </div>

        {/* 3. 3D STEPPED METALLIC PEDESTAL BASE & BOTTOM NEON RING */}
        <div className="scd-pot-bottom-base">
          <div className="scd-pot-bottom-neon-ring" />
          <div className="scd-pot-metallic-plinth" />
          <div className="scd-pot-floor-glow" />
        </div>
      </div>
    </article>
  );
};
