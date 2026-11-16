import React from 'react';
import { HumanTeacherAvatar, TeacherMood } from './HumanTeacherAvatar';

interface TalkingRobotProps {
  isSpeaking: boolean;
  mood?: 'happy' | 'explaining' | 'celebrating' | 'idle';
  size?: 'compact' | 'normal' | 'large';
  isPaused?: boolean;
  isExplanationStarted?: boolean;
  currentStepIndex?: number;
  conceptKey?: string;
  activeWord?: string;
  className?: string;
}

export const TalkingRobotAvatar: React.FC<TalkingRobotProps> = ({
  isSpeaking,
  mood = 'explaining',
  size = 'compact',
  isPaused = false,
  isExplanationStarted = false,
  currentStepIndex = 0,
  conceptKey = 'print',
  activeWord = '',
  className = '',
}) => {
  const teacherMood: TeacherMood = mood === 'happy' ? 'celebrating' : mood;

  return (
    <HumanTeacherAvatar
      isSpeaking={isSpeaking}
      isPaused={isPaused}
      isExplanationStarted={isExplanationStarted}
      mood={teacherMood}
      currentStepIndex={currentStepIndex}
      conceptKey={conceptKey}
      activeWord={activeWord}
      size={size}
      className={className}
    />
  );
};

export { HumanTeacherAvatar };
