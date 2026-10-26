import React from 'react';
import { LearnerTelemetry } from '../../../services/realAuthService';

export interface MobileProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  telemetry?: LearnerTelemetry;
  onLogout?: () => void;
  onOpenEarn?: () => void;
  onOpenLogin?: () => void;
  onOpenPlacement?: () => void;
  onOpenAdvisor?: () => void;
}

/**
 * MobileProfileSheet has been decommissioned as requested.
 * All user actions and navigation are handled via standard header navigation and dropdowns.
 */
export const MobileProfileSheet: React.FC<MobileProfileSheetProps> = () => {
  return null;
};
