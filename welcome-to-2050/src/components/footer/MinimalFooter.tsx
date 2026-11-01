import React from 'react';
import { FullFooter, FullFooterProps } from './FullFooter';

export interface MinimalFooterProps extends FullFooterProps {
  className?: string;
}

/**
 * MinimalFooter now renders the unified FullFooter per specification:
 * "without login and after login footer full kro"
 */
export const MinimalFooter: React.FC<MinimalFooterProps> = (props) => {
  return <FullFooter {...props} />;
};
