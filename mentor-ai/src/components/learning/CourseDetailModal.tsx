import React from 'react';
import { Course } from '../../types';
import { Modal } from '../common/Modal';
import { ProgressBar } from '../common/ProgressBar';
import { BookOpen, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { PythonIcon, SqlIcon, ExcelIcon, PowerBiIcon } from '../common/TechIcons';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onStartLesson: (lessonTitle: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onStartLesson
}) => {
  if (!course) return null;

  const renderIcon = () => {
    switch (course.iconType) {
      case 'python':
        return <PythonIcon className="w-8 h-8" />;
      case 'sql':
        return <SqlIcon className="w-8 h-8" />;
      case 'excel':
        return <ExcelIcon className="w-8 h-8" />;
      case 'powerbi':
        return <PowerBiIcon className="w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${course.title} Mastery Track`}>
      <div className="space-y-4">
        {/* Course Header */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
          <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-150 flex items-center justify-center p-2">
            {renderIcon()}
          </div>
          <div className="flex-1">
            <h4 className="text-base font-bold text-slate-900">{course.title} for Data Analysts</h4>
            <p className="text-xs text-slate-500 mt-0.5">{course.completedLessons} of {course.totalLessons} lessons completed</p>
          </div>
          <span className={`text-base font-extrabold ${course.accentText}`}>
            {course.progress}%
          </span>
        </div>

        {/* Progress Bar */}
        <div>
          <ProgressBar
            progress={course.progress}
            colorGradient={course.gradientClass}
            heightClass="h-2"
          />
        </div>

        {/* Overview */}
        <p className="text-xs text-slate-600 leading-relaxed">
          {course.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {course.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Next Up Lesson */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/60 to-purple-50/60 border border-indigo-100/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider">Up Next</span>
            </div>
            <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full">Recommended</span>
          </div>
          <p className="text-sm font-bold text-slate-800 mt-1.5">{course.nextLessonTitle}</p>
          <button
            onClick={() => {
              onStartLesson(course.nextLessonTitle);
              onClose();
            }}
            className="mt-3 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow cursor-pointer active:scale-98 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Start Next Lesson</span>
          </button>
        </div>

        {/* Recent Lessons List */}
        <div>
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Track Outline</h5>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Core Fundamentals & Syntax</span>
              </div>
              <span className="text-emerald-600 font-semibold">Done</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Aggregations & Group Operations</span>
              </div>
              <span className="text-emerald-600 font-semibold">Done</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs">
              <div className="flex items-center gap-2 text-indigo-900 font-medium">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>{course.nextLessonTitle}</span>
              </div>
              <span className="text-indigo-600 font-bold">In Progress</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
