import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const PythonIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M63.5 12C36.8 12 38.5 23.5 38.5 23.5L38.6 35.5H64.2V39H25.3C12.3 39 12 51.5 12 51.5C12 64.5 19.5 64.7 19.5 64.7H27.5V53.2C27.5 39.7 39.2 40 39.2 40H63.8C75.3 40 76.5 28.5 76.5 28.5C76.5 15.5 68.3 12 63.5 12ZM51.3 20.3C53.8 20.3 55.8 22.3 55.8 24.8C55.8 27.3 53.8 29.3 51.3 29.3C48.8 29.3 46.8 27.3 46.8 24.8C46.8 22.3 48.8 20.3 51.3 20.3Z"
      fill="#387EB8"
    />
    <path
      d="M64.5 116C91.2 116 89.5 104.5 89.5 104.5L89.4 92.5H63.8V89H102.7C115.7 89 116 76.5 116 76.5C116 63.5 108.5 63.3 108.5 63.3H100.5V74.8C100.5 88.3 88.8 88 88.8 88H64.2C52.7 88 51.5 99.5 51.5 99.5C51.5 112.5 59.7 116 64.5 116ZM76.7 107.7C74.2 107.7 72.2 105.7 72.2 103.2C72.2 100.7 74.2 98.7 76.7 98.7C79.2 98.7 81.2 100.7 81.2 103.2C81.2 105.7 79.2 107.7 76.7 107.7Z"
      fill="#FFE052"
    />
  </svg>
);

export const SqlIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="11" rx="16" ry="6" fill="#2563EB" />
    <ellipse cx="24" cy="11" rx="13" ry="4.5" fill="#60A5FA" />
    
    <path d="M8 11V23C8 26.5 15.2 29 24 29C32.8 29 40 26.5 40 23V11" stroke="#1D4ED8" strokeWidth="2.5" fill="#3B82F6" />
    <ellipse cx="24" cy="23" rx="16" ry="5" fill="#2563EB" />
    <ellipse cx="24" cy="23" rx="13" ry="3.8" fill="#60A5FA" />
    
    <path d="M8 23V35C8 38.5 15.2 41 24 41C32.8 41 40 38.5 40 35V23" stroke="#1D4ED8" strokeWidth="2.5" fill="#3B82F6" />
    <ellipse cx="24" cy="35" rx="16" ry="5" fill="#1D4ED8" />
    <ellipse cx="24" cy="35" rx="13" ry="3.8" fill="#3B82F6" />
  </svg>
);

export const ExcelIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="36" height="32" rx="6" fill="#107C41" />
    <rect x="8" y="10" width="32" height="28" rx="4" fill="#185C37" opacity="0.3" />
    <rect x="4" y="12" width="22" height="24" rx="4" fill="#21A366" />
    <text x="11" y="29" fill="white" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16">X</text>
    <path d="M26 15H38M26 21H38M26 27H38M26 33H38" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
  </svg>
);

export const PowerBiIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="8" width="10" height="32" rx="3" fill="#F2C811" />
    <rect x="19" y="16" width="10" height="24" rx="3" fill="#F4AC12" />
    <rect x="8" y="24" width="10" height="16" rx="3" fill="#E87C1E" />
  </svg>
);

export const CrownIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 19h14a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm0-4h14l-2.5-8-4 5-2.5-6-2.5 6-4-5L5 15z" />
  </svg>
);
