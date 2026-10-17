import { TabType } from '../types';

export interface NavItemConfig {
  id: TabType;
  label: string;
  isCenterOrb?: boolean;
}

export const navigationItems: NavItemConfig[] = [
  { id: 'home', label: 'Home' },
  { id: 'learn', label: 'Learn' },
  { id: 'ai', label: 'AI', isCenterOrb: true },
  { id: 'progress', label: 'Progress' },
  { id: 'profile', label: 'Profile' }
];
