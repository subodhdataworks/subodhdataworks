import React from 'react';
import { SuccessPlanModal } from './SuccessPlanModal';

export interface PayToUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetModuleName?: string;
  onSimulateUnlock?: () => void;
  courseId?: string;
  courseTitle?: string;
  price?: number;
}

export const PayToUnlockModal: React.FC<PayToUnlockModalProps> = ({
  isOpen,
  onClose,
  targetModuleName,
  courseId,
  courseTitle
}) => {
  return (
    <SuccessPlanModal
      isOpen={isOpen}
      onClose={onClose}
      targetTopicTitle={targetModuleName}
      courseTitle={courseTitle || targetModuleName}
      courseId={courseId}
    />
  );
};

export default PayToUnlockModal;
