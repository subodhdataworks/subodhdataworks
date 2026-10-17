import { QuickActionItem } from '../types';

export const quickActionItems: QuickActionItem[] = [
  {
    id: 'ai-teacher',
    title: 'AI Teacher',
    subtitle: 'Learn with AI',
    iconName: 'graduation-cap',
    bgColor: 'bg-[#FEF8EC]', // Soft warm yellow
    borderColor: 'border-[#FDE8B3]',
    iconColor: 'text-[#D97706]',
    textColor: 'text-slate-800',
    hasChevron: true
  },
  {
    id: 'practice',
    title: 'Practice',
    subtitle: 'Solve & Improve',
    iconName: 'code',
    bgColor: 'bg-[#EFF6FF]', // Soft pastel blue
    borderColor: 'border-[#BFDBFE]',
    iconColor: 'text-[#2563EB]',
    textColor: 'text-slate-800',
    hasChevron: false
  },
  {
    id: 'projects',
    title: 'Projects',
    subtitle: 'Build Real Skills',
    iconName: 'folder',
    bgColor: 'bg-[#ECFDF5]', // Soft pastel emerald/mint
    borderColor: 'border-[#A7F3D0]',
    iconColor: 'text-[#059669]',
    textColor: 'text-slate-800',
    hasChevron: false
  },
  {
    id: 'interview',
    title: 'Interview',
    subtitle: 'Get Job Ready',
    iconName: 'users',
    bgColor: 'bg-[#F5F3FF]', // Soft pastel purple/violet
    borderColor: 'border-[#DDD6FE]',
    iconColor: 'text-[#7C3AED]',
    textColor: 'text-slate-800',
    hasChevron: true
  }
];
