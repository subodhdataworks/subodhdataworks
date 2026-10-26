import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  Edit2,
  Trash2,
  Eye,
  CheckCircle2,
  Lock,
  Unlock,
  Sliders,
  Play,
  HelpCircle,
  Gamepad2,
  Mic,
  Save,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { CourseModule } from '../../../types';
import { TOPICS, Topic } from '../../futureai/PythonChapterView';
import { AdminDataService } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';

interface CourseManagementProps {
  courses: CourseModule[];
  onRefresh: () => void;
  isDark?: boolean;
}

export const CourseManagement: React.FC<CourseManagementProps> = ({ courses, onRefresh, isDark = false }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(courses[0]?.id || 'python');
  const [expandedTopicId, setExpandedTopicId] = useState<number | null>(1);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  const cardBg = isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90 shadow-sm';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';

  // Course overrides state
  const courseOverrides = AdminDataService.getCourseOverrides();
  const activeCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];

  const canManageCourse = AdminAuthService.hasPermission('manage_courses');

  const handleToggleTopicFreeStatus = async (topicId: number, currentlyFree?: boolean) => {
    if (!canManageCourse) {
      alert('Permission denied to modify course topics.');
      return;
    }

    const currentTopics = courseOverrides[selectedCourseId]?.topicFreeStatus || {};
    const updated = {
      ...currentTopics,
      [topicId]: !currentlyFree,
    };

    await AdminDataService.saveCourseOverride(selectedCourseId, {
      topicFreeStatus: updated,
    });

    setSaveSuccessMsg(`Updated Topic ${topicId} access to ${!currentlyFree ? 'FREE' : 'PAID ENROLLMENT'}`);
    setTimeout(() => setSaveSuccessMsg(''), 4000);
    onRefresh();
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header and Course Selector */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-black text-white">Course Curriculum &amp; Content Management</h3>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Configure videos, free/paid access, challenge questions, and mock interview setups
          </p>
        </div>

        {/* Course selection pills */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full">
          {courses.map((course) => (
            <button
              key={course.id}
              type="button"
              onClick={() => setSelectedCourseId(course.id)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCourseId === course.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {course.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {saveSuccessMsg && (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* Selected Course Overview Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase mb-1.5">
              {activeCourse.badge || 'ACTIVE CURRICULUM'}
            </div>
            <h2 className="text-xl font-black text-white">{activeCourse.title}</h2>
            <p className="text-xs text-slate-400 font-medium max-w-2xl mt-1 leading-relaxed">
              {activeCourse.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`#${activeCourse.id === 'python' ? 'dashboard' : activeCourse.id}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Preview Live</span>
            </a>
          </div>
        </div>

        {/* ── Python Topics & Lessons List ── */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">
            Curriculum Structure: Topics, Interactive Hackathon/DSA Practice &amp; Mock Interview Questions
          </h4>

          {TOPICS.map((topic) => {
            const isExpanded = expandedTopicId === topic.id;
            const overrideFree = courseOverrides[selectedCourseId]?.topicFreeStatus?.[topic.id];
            const isFree = overrideFree !== undefined ? overrideFree : !!topic.free;

            return (
              <div
                key={topic.id}
                className="bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden transition-all"
              >
                {/* Topic Row Header */}
                <div
                  onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-900/40 select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center font-black text-xs text-blue-400">
                      {topic.id}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-2">
                        <span>{topic.title}</span>
                        {isFree ? (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-black">
                            FREE PREVIEW
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[9px] font-black">
                            ₹987 ENROLLMENT LOCKED
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                        {topic.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-slate-400 font-semibold hidden sm:inline">
                      {topic.lessons.length} Video Lessons • Hackathon/DSA Practice • Mock Interview
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Details: Access toggle + Lesson details */}
                {isExpanded && (
                  <div className="p-4 bg-slate-900/40 border-t border-slate-800 space-y-4">
                    {/* Access control row */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div>
                        <span className="text-xs font-bold text-white block">Topic Access Rule</span>
                        <span className="text-[11px] text-slate-400">
                          {isFree ? 'All students can watch without purchasing.' : 'Requires ₹987 Super 30 Enrollment.'}
                        </span>
                      </div>

                      {canManageCourse && (
                        <button
                          type="button"
                          onClick={() => handleToggleTopicFreeStatus(topic.id, isFree)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                            isFree
                              ? 'bg-amber-600/20 border border-amber-500/30 text-amber-300 hover:bg-amber-600/30'
                              : 'bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30'
                          }`}
                        >
                          {isFree ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                          <span>{isFree ? 'Lock (Make Paid)' : 'Unlock (Make Free)'}</span>
                        </button>
                      )}
                    </div>

                    {/* Lessons list */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">
                        Included Stream Video Lessons (Bunny.net CDN Powered)
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {topic.lessons.map((lesson, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <Play className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                              <span className="text-slate-300 font-medium truncate">{lesson.title}</span>
                            </div>
                            <span className="text-[10px] text-slate-500 font-mono shrink-0 ml-2">
                              {lesson.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Arena Integrations */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2.5">
                        <Gamepad2 className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className="font-bold text-white text-[11px]">Hackathon/DSA Practice Level</div>
                          <div className="text-[10px] text-slate-400">Interactive Concept Challenge</div>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2.5">
                        <Mic className="w-4 h-4 text-rose-400" />
                        <div>
                          <div className="font-bold text-white text-[11px]">AI Mock Interview Room</div>
                          <div className="text-[10px] text-slate-400">Hindi &amp; English Avatar Mentors</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
