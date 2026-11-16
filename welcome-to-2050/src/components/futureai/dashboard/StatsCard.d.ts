import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface StatsCardProps {
  title: string;
  value: number | string;
  change?: number;
  subtitle?: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  gradient?: string;
  onClick?: () => void;
}

declare const StatsCard: React.FC<StatsCardProps>;
export default StatsCard;
