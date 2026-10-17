import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Course } from '../../types';
import { PythonIcon, SqlIcon, ExcelIcon, PowerBiIcon } from '../common/TechIcons';
import { ProgressBar } from '../common/ProgressBar';

interface LearningCardProps {
  course: Course;
  onClick: () => void;
}

export const LearningCard: React.FC<LearningCardProps> = ({ course, onClick }) => {
  const renderIcon = () => {
    switch (course.iconType) {
      case 'python':
        return <PythonIcon className="w-6 h-6" />;
      case 'sql':
        return <SqlIcon className="w-6 h-6" />;
      case 'excel':
        return <ExcelIcon className="w-6 h-6" />;
      case 'powerbi':
        return <PowerBiIcon className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col justify-between p-3 sm:p-3.5 bg-white rounded-[20px] border border-slate-200/60 shadow-[0_4px_20px_rgba(220,230,248,0.5)] hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer active:scale-97 select-none h-[130px] sm:h-[135px]"
    >
      {/* Top Row: Tech Logo + Subtle Chevron */}
      <div className="flex items-center justify-between">
        <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
          {renderIcon()}
        </div>
        <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.4]" />
        </div>
      </div>

      {/* Middle: Course Name & Progress Percentage */}
      <div>
        <h3 className="text-xs sm:text-[13px] font-bold text-slate-800 tracking-tight leading-tight truncate">
          {course.title}
        </h3>
        <p className={`text-xs sm:text-[12.5px] font-extrabold mt-1 leading-none ${course.accentText}`}>
          {course.progress}%
        </p>
      </div>

      {/* Bottom: Progress Bar */}
      <div>
        <ProgressBar
          progress={course.progress}
          colorGradient={course.gradientClass}
          heightClass="h-1.5"
        />
      </div>
    </div>
  );
};
