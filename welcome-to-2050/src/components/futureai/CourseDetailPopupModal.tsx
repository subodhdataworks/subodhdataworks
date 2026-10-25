import React from 'react';
import { SuccessPlanModal } from './SuccessPlanModal';

export interface CourseDetailPopupModalProps {
  isOpen: boolean;
  courseId: string;
  onClose: () => void;
  onUnlock?: () => void;
}

export const CourseDetailPopupModal: React.FC<CourseDetailPopupModalProps> = ({
  isOpen,
  courseId,
  onClose
}) => {
  return (
    <SuccessPlanModal
      isOpen={isOpen}
      onClose={onClose}
      courseId={courseId}
      courseTitle={courseId}
    />
  );
};

export default CourseDetailPopupModal;
