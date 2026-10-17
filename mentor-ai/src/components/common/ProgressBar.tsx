import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  colorGradient?: string;
  heightClass?: string;
  trackBg?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  colorGradient = 'bg-indigo-600',
  heightClass = 'h-1.5',
  trackBg = 'bg-slate-100',
  className = ''
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`w-full ${trackBg} rounded-full overflow-hidden ${heightClass} ${className}`}>
      <div
        className={`h-full rounded-full transition-all duration-700 ease-out ${
          colorGradient.startsWith('bg-') || colorGradient.startsWith('from-')
            ? colorGradient.startsWith('from-')
              ? `bg-gradient-to-r ${colorGradient}`
              : colorGradient
            : ''
        }`}
        style={{
          width: `${clampedProgress}%`,
          ...(colorGradient.startsWith('#') ? { backgroundColor: colorGradient } : {})
        }}
      />
    </div>
  );
};
