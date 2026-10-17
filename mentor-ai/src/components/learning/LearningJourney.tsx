import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { LearningCard } from './LearningCard';
import { CourseDetailModal } from './CourseDetailModal';
import { learningCourses } from '../../data/courses';
import { Course } from '../../types';

interface LearningJourneyProps {
  onStartLesson?: (title: string) => void;
  onViewAll?: () => void;
  onSelectCourse?: (courseId: string) => void;
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({
  onStartLesson = () => {},
  onViewAll,
  onSelectCourse
}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCardClick = (course: Course) => {
    if (course.id === 'python' && onSelectCourse) {
      onSelectCourse('python');
    } else {
      setSelectedCourse(course);
    }
  };

  return (
    <section className="w-full">
      <SectionHeader
        title="Your Learning Journey"
        icon={<TrendingUp className="w-4 h-4 text-slate-800" />}
        actionText="View All"
        onActionClick={onViewAll || (() => setSelectedCourse(learningCourses[0]))}
        className="mb-2.5"
      />

      {/* 4 Cards Grid - Comfortable, readable cards with 130-135px height */}
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        {learningCourses.map((course) => (
          <LearningCard
            key={course.id}
            course={course}
            onClick={() => handleCardClick(course)}
          />
        ))}
      </div>

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onStartLesson={onStartLesson}
      />
    </section>
  );
};
