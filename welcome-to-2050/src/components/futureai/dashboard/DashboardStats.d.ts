import React from 'react';

export interface StudentStatsData {
  enrolled?: number;
  enrolledChange?: number;
  completed?: number;
  completedChange?: number;
  dsaCompleted?: number;
  dsaTopicsSolved?: number;
  dsaChange?: number;
  certificates?: number;
  certificateChange?: number;
  internship?: number | string;
  job?: number | string;
}

export interface DashboardStatsProps {
  studentStats?: StudentStatsData;
  onCardClick?: (cardId: string) => void;
}

declare const DashboardStats: React.FC<DashboardStatsProps>;
export default DashboardStats;
