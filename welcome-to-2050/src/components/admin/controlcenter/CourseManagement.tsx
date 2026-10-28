import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Lock,
  Unlock,
  Play,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  Mic
} from 'lucide-react';
import { AdminDataService } from '../../../services/adminDataService';
import { AdminAuthService } from '../../../services/adminAuthService';
import { CourseModule } from '../../../types';

interface CourseManagementProps {
  courses: CourseModule[];
  onRefresh: () => void;
  isDark?: boolean;
}

export const CourseManagement: React.FC<CourseManagementProps> = ({ courses, onRefresh }) => {
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0]?.id || 'python');
  const [expandedTopicId, setExpandedTopicId] = useState<number | null>(1);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  const activeCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];
  const TOPICS = AdminDataService.getPythonTopics();
  const courseOverrides = AdminDataService.getCourseOverrides();

  const canManageCourse = AdminAuthService.hasPermission('manage_courses');

  const handleToggleTopicFreeStatus = async (topicId: number, currentlyFree: boolean) => {
    if (!canManageCourse) {
      alert('Permission denied: You do not have permission to modify course topics.');
      return;
    }

    const currentTopicStates = courseOverrides[selectedCourseId]?.topicFreeStatus || {};
    const updated = {
      ...currentTopicStates,
      [topicId]: !currentlyFree,
    };

    await AdminDataService.saveCourseOverride(selectedCourseId, {
      ...courseOverrides[selectedCourseId],
      topicFreeStatus: updated,
    });

    setSaveSuccessMsg(`Updated Topic ${topicId} access to ${!currentlyFree ? 'FREE' : 'PAID ENROLLMENT'}`);
    setTimeout(() => setSaveSuccessMsg(''), 4000);
    onRefresh();
  };

  return (
    <div className="space-y-6 text-left font-sans text-[#0F172A]">
      {/* Header and Course Selector */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#0F172A]">Course Curriculum &amp; Content Management</h3>
          <p className="text-xs text-[#64748B] font-medium mt-0.5">
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
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0]'
              }`}
            >
              {course.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {saveSuccessMsg && (
        <div className="p-3 bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-bold rounded-xl flex items-center gap-2 shadow-2xs">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* Selected Course Overview Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-[#E2E8F0] gap-4">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-[10px] font-bold uppercase mb-1.5">
              {activeCourse.badge || 'ACTIVE CURRICULUM'}
            </div>
            <h2 className="text-xl font-bold text-[#0F172A]">{activeCourse.title}</h2>
            <p className="text-xs text-[#64748B] font-medium max-w-2xl mt-1 leading-relaxed">
              {activeCourse.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`#${activeCourse.id === 'python' ? 'dashboard' : activeCourse.id}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Preview Live</span>
            </a>
          </div>
        </div>

        {/* ── Topics & Lessons List ── */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2">
            Curriculum Structure: Topics, Interactive Coding Game &amp; Mock Interview Questions
          </h4>

          {TOPICS.map((topic) => {
            const isExpanded = expandedTopicId === topic.id;
            const overrideFree = courseOverrides[selectedCourseId]?.topicFreeStatus?.[topic.id];
            const isFree = overrideFree !== undefined ? overrideFree : !!topic.free;

            return (
              <div
                key={topic.id}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl overflow-hidden transition-all"
              >
                {/* Topic Row Header */}
                <div
                  onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-[#F1F5F9] select-none transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center font-black text-xs text-[#2563EB]">
                      {topic.id}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F172A] flex items-center gap-2">
                        <span>{topic.title}</span>
                        {isFree ? (
                          <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-[9px] font-bold">
                            FREE PREVIEW
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] text-[9px] font-bold">
                            ₹987 ENROLLMENT LOCKED
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] text-[#64748B] font-medium line-clamp-1 mt-0.5">
                        {topic.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-[#64748B] font-semibold hidden sm:inline">
                      {topic.lessons.length} Video Lessons • Coding Game • Mock Interview
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-[#64748B]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#64748B]" />
                    )}
                  </div>
                </div>

                {/* Expanded Details: Access toggle + Lesson details */}
                {isExpanded && (
                  <div className="p-4 bg-white border-t border-[#E2E8F0] space-y-4">
                    {/* Access control row */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div>
                        <span className="text-xs font-bold text-[#0F172A] block">Topic Access Rule</span>
                        <span className="text-[11px] text-[#64748B]">
                          {isFree ? 'All students can watch without purchasing.' : 'Requires Super 30 Enrollment.'}
                        </span>
                      </div>

                      {canManageCourse && (
                        <button
                          type="button"
                          onClick={() => handleToggleTopicFreeStatus(topic.id, isFree)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                            isFree
                              ? 'bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] hover:bg-[#FEF3C7]'
                              : 'bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] hover:bg-[#D1FAE5]'
                          }`}
                        >
                          {isFree ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                          <span>{isFree ? 'Lock (Make Paid)' : 'Unlock (Make Free)'}</span>
                        </button>
                      )}
                    </div>

                    {/* Lessons list */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                        Included Stream Video Lessons (Bunny.net CDN Powered)
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {topic.lessons.map((lesson, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <Play className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                              <span className="text-[#0F172A] font-medium truncate">{lesson.title}</span>
                            </div>
                            <span className="text-[10px] text-[#64748B] font-mono shrink-0 ml-2">
                              {lesson.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Arena Integrations */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex items-center gap-2.5">
                        <Gamepad2 className="w-4 h-4 text-[#9333EA]" />
                        <div>
                          <div className="font-bold text-[#0F172A] text-[11px]">Coding Game Level</div>
                          <div className="text-[10px] text-[#64748B]">Interactive Concept Challenge</div>
                        </div>
                      </div>

                      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex items-center gap-2.5">
                        <Mic className="w-4 h-4 text-[#E11D48]" />
                        <div>
                          <div className="font-bold text-[#0F172A] text-[11px]">AI Mock Interview Room</div>
                          <div className="text-[10px] text-[#64748B]">Hindi &amp; English Avatar Mentors</div>
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
