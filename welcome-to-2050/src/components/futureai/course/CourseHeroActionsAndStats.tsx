import React, { useMemo, useState, useEffect } from 'react';
import { Play, Sparkles, Search } from 'lucide-react';
import {
  CurriculumTabLike,
  computeCourseProgressSummary,
  getCoursePriceFromConfig,
  TOPIC_PROGRESS_UPDATED_EVENT,
} from '../../../services/topicProgressTracker';

export interface CourseHeroActionsProps {
  curriculum: CurriculumTabLike[];
  courseKey: string;
  courseTitle: string;
  isCoursePaid: boolean;
  onResumeLesson: (topicId: string, title: string, tabId: string) => void;
  onOpenEnrollModal: (courseTitle: string) => void;
  isTopicAccessible?: (courseKey: string, chapterNum: number, topicNum: number, tabId: string) => boolean;
}

export const CourseHeroActionButtons: React.FC<CourseHeroActionsProps> = ({
  curriculum,
  courseKey,
  courseTitle,
  isCoursePaid,
  onResumeLesson,
  onOpenEnrollModal,
  isTopicAccessible,
}) => {
  const [refreshTick, setRefreshTick] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setRefreshTick((t) => t + 1);
    window.addEventListener(TOPIC_PROGRESS_UPDATED_EVENT, handleUpdate);
    window.addEventListener('futureai_course_unlocked', handleUpdate);
    return () => {
      window.removeEventListener(TOPIC_PROGRESS_UPDATED_EVENT, handleUpdate);
      window.removeEventListener('futureai_course_unlocked', handleUpdate);
    };
  }, []);

  const summary = useMemo(
    () => computeCourseProgressSummary(curriculum, courseKey, isTopicAccessible),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [curriculum, courseKey, refreshTick]
  );

  const coursePrice = useMemo(() => getCoursePriceFromConfig(courseKey), [courseKey]);

  const handleResume = () => {
    if (summary.resumeTarget) {
      onResumeLesson(
        summary.resumeTarget.topicId,
        summary.resumeTarget.title,
        summary.resumeTarget.tabId
      );
    } else if (curriculum[0]?.chapters[0]?.topics[0]) {
      const t = curriculum[0].chapters[0].topics[0];
      onResumeLesson(t.id, t.title, curriculum[0].id);
    }
  };

  if (isCoursePaid) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      <button
        type="button"
        onClick={() => onOpenEnrollModal(courseTitle)}
        className="px-4 py-1.5 sm:py-2 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold text-xs sm:text-[13px] flex items-center gap-1.5 shadow-xs active:scale-95 transition-all cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
        <span>Enroll for {coursePrice}</span>
      </button>

      <button
        type="button"
        onClick={handleResume}
        className="px-3.5 py-1.5 sm:py-2 rounded-xl bg-white hover:bg-[#F5F3FF] border border-[#E9E5F5] text-[#6D28D9] font-semibold text-xs sm:text-[13px] flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer"
      >
        <Play className="w-3.5 h-3.5 fill-[#6D28D9] shrink-0" />
        <span>Free Preview</span>
      </button>
    </div>
  );
};
