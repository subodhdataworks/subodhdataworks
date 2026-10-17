import { NotificationItem } from '../types';

export const mockNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Streak Protected! 🔥',
    message: "You're on a 5-day streak! Complete today's SQL challenge to keep it alive.",
    time: '20m ago',
    read: false,
    type: 'streak'
  },
  {
    id: 'notif-2',
    title: 'AI Coach Feedback Ready',
    message: 'Mentor AI evaluated your Python Pandas exercise with 95% accuracy score.',
    time: '2h ago',
    read: false,
    type: 'ai'
  },
  {
    id: 'notif-3',
    title: 'New Power BI Chapter Unlocked',
    message: 'Explore DAX functions & dynamic visual filters in Module 3.',
    time: '1d ago',
    read: true,
    type: 'lesson'
  }
];
