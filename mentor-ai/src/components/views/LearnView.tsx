import React, { useState } from 'react';
import { learningCourses } from '../../data/courses';
import { Course } from '../../types';
import { CourseDetailModal } from '../learning/CourseDetailModal';
import { ProgressBar } from '../common/ProgressBar';
import { BookOpen, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { PythonIcon, SqlIcon, ExcelIcon, PowerBiIcon } from '../common/TechIcons';

interface LearnViewProps {
  onSelectCourse?: (courseId: string) => void;
}

export const LearnView: React.FC<LearnViewProps> = ({ onSelectCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'python': return <PythonIcon className="w-8 h-8" />;
      case 'sql': return <SqlIcon className="w-8 h-8" />;
      case 'excel': return <ExcelIcon className="w-8 h-8" />;
      case 'powerbi': return <PowerBiIcon className="w-8 h-8" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 pb-28 pt-2">
      {/* Top Banner */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
          <span>Curated Career Path</span>
        </div>
        <h2 className="text-xl font-extrabold tracking-tight">Data Analyst Curriculum</h2>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          Master the four pillars of modern business intelligence: Python, SQL, Excel & Power BI.
        </p>
      </div>

      {/* Course List */}
      <div className="space-y-3">
        {learningCourses.map((c) => (
          <div
            key={c.id}
            onClick={() => {
              if (c.id === 'python' && onSelectCourse) {
                onSelectCourse('python');
              } else {
                setSelectedCourse(c);
              }
            }}
            className="p-4 bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all cursor-pointer group active:scale-98"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                {getIcon(c.iconType)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {c.title}
                  </h3>
                  <span className={`text-xs font-bold ${c.accentText}`}>{c.progress}%</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{c.completedLessons} of {c.totalLessons} lessons completed</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
            </div>

            <div className="mt-3">
              <ProgressBar progress={c.progress} colorGradient={c.gradientClass} heightClass="h-1.5" />
            </div>
          </div>
        ))}
      </div>

      <CourseDetailModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onStartLesson={() => {}}
      />
    </div>
  );
};
