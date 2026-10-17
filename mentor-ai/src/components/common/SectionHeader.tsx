import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  actionText?: string;
  onActionClick?: () => void;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon,
  actionText,
  onActionClick,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-between px-1 mb-3.5 ${className}`}>
      <div className="flex items-center gap-2">
        {icon && <span className="text-slate-800">{icon}</span>}
        <h2 className="text-[17px] sm:text-lg font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      {actionText && (
        <button
          onClick={onActionClick}
          type="button"
          className="group text-[13px] font-semibold text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-0.5 cursor-pointer active:scale-95"
        >
          <span>{actionText}</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-slate-400 group-hover:text-indigo-600" />
        </button>
      )}
    </div>
  );
};
