import React from 'react';

export const ToolIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-6 h-6' }) => {
  const norm = name.toLowerCase().trim();

  // Python
  if (norm.includes('python')) {
    return (
      <svg viewBox="0 0 48 48" className={className}>
        <path d="M23.6 2c-11.4 0-10.7 4.9-10.7 4.9l.01 5.1h10.9v1.6H8.5S2 12.9 2 24.3s5.7 11.2 5.7 11.2h3.4v-4.8s-.2-5.7 5.6-5.7h9.7s5.4.1 5.4-5.3V8.8S32.6 2 23.6 2zM19.1 5.8a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6z" fill="#387EB8" />
        <path d="M24.4 46c11.4 0 10.7-4.9 10.7-4.9l-.01-5.1H24.2v-1.6h15.3s6.5.7 6.5-10.7-5.7-11.2-5.7-11.2h-3.4v4.8s.2 5.7-5.6 5.7h-9.7s-5.4-.1-5.4 5.3v10.9s-.8 6.8 8.2 6.8zm4.5-3.8a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6z" fill="#FFD43B" />
      </svg>
    );
  }

  // SQL
  if (norm === 'sql') {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#0284C7" />
        <text x="18" y="23" fill="#FFFFFF" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">SQL</text>
      </svg>
    );
  }

  // Power BI
  if (norm.includes('power bi')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect x="5" y="19" width="7" height="13" rx="2" fill="#FBBF24" />
        <rect x="14" y="12" width="7" height="20" rx="2" fill="#F59E0B" />
        <rect x="23" y="4" width="7" height="28" rx="2" fill="#D97706" />
      </svg>
    );
  }

  // Excel
  if (norm.includes('excel')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#107C41" />
        <path d="M11 11 L25 25 M25 11 L11 25" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  // DAX
  if (norm.includes('dax')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#1E3A8A" />
        <path d="M8 10h20M8 18h20M8 26h20M14 6v24M22 6v24" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Power Query
  if (norm.includes('power query')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#16A34A" />
        <path d="M10 26V18c0-3.3 2.7-6 6-6h10m-4-4l4 4-4 4" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  // OpenAI / ChatGPT
  if (norm.includes('openai') || norm.includes('chatgpt') || norm.includes('genai')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#10A37F" />
        <circle cx="18" cy="18" r="9" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="18" cy="18" r="3.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // LangChain
  if (norm.includes('langchain')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#00A67E" fillOpacity="0.15" />
        <circle cx="12" cy="18" r="5" fill="#00A67E" />
        <circle cx="24" cy="18" r="5" fill="#F59E0B" />
        <path d="M12 18h12" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // Hugging Face
  if (norm.includes('hugging face') || norm.includes('transformers')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <circle cx="18" cy="18" r="15" fill="#FFD21E" />
        <circle cx="13" cy="15" r="2" fill="#111" />
        <circle cx="23" cy="15" r="2" fill="#111" />
        <path d="M12 21s2 4 6 4 6-4 6-4" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // Vector DB
  if (norm.includes('vector db') || norm.includes('vectordb')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#EF4444" fillOpacity="0.15" />
        <rect x="8" y="8" width="20" height="4" rx="1.5" fill="#EF4444" />
        <rect x="8" y="14" width="20" height="4" rx="1.5" fill="#EF4444" opacity="0.8" />
        <rect x="8" y="20" width="20" height="4" rx="1.5" fill="#EF4444" opacity="0.6" />
        <rect x="8" y="26" width="20" height="4" rx="1.5" fill="#EF4444" opacity="0.4" />
      </svg>
    );
  }

  // RAG / Agentic AI
  if (norm.includes('rag') || norm.includes('agentic')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#6366F1" fillOpacity="0.15" />
        <rect x="9" y="8" width="18" height="20" rx="3" stroke="#6366F1" strokeWidth="2" fill="#FFFFFF" />
        <path d="M13 13h10M13 18h10M13 23h6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // FastAPI
  if (norm.includes('fastapi')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <circle cx="18" cy="18" r="16" fill="#009688" />
        <path d="M19 6L9 20h8l-2 10 10-14h-8l2-10z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#0284C7" />
        <rect x="8" y="15" width="4" height="4" rx="1" fill="#FFFFFF" />
        <rect x="13" y="15" width="4" height="4" rx="1" fill="#FFFFFF" />
        <rect x="18" y="15" width="4" height="4" rx="1" fill="#FFFFFF" />
        <rect x="13" y="10" width="4" height="4" rx="1" fill="#FFFFFF" />
        <rect x="18" y="10" width="4" height="4" rx="1" fill="#FFFFFF" />
        <path d="M6 21c2 5 8 7 14 7 7 0 10-4 10-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // Kubernetes
  if (norm.includes('kubernetes')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#326CE5" />
        <circle cx="18" cy="18" r="8" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
        <path d="M18 6v4M18 26v4M6 18h4M26 18h4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Cloud / AWS
  if (norm.includes('cloud') || norm.includes('aws')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <path d="M10 24h16a6 6 0 000-12 8 8 0 00-15-2 6 6 0 00-1 14z" fill="#EA4335" />
        <path d="M10 24h16a6 6 0 000-12 8 8 0 00-15-2" fill="#4285F4" />
        <path d="M19 10a8 8 0 017 4 6 6 0 01-2 10H10" fill="#FBBC05" />
      </svg>
    );
  }

  // PyTorch
  if (norm.includes('pytorch')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#EE4C2C" fillOpacity="0.15" />
        <path d="M20 7l-2.5 2.5 5 5-5 5 2.5 2.5 7.5-7.5-7.5-7.5z" fill="#EE4C2C" />
        <circle cx="23" cy="9" r="2" fill="#EE4C2C" />
        <path d="M16 11A10 10 0 1026 21h-3.5a6.5 6.5 0 11-6.5-6.5V11z" fill="#EE4C2C" />
      </svg>
    );
  }

  // TensorFlow
  if (norm.includes('tensorflow')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#FF6F00" />
        <path d="M18 6l10 5.8v11.6L18 29 8 23.4V11.8L18 6z" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
        <path d="M18 6v23m10-17.4l-10 5.8m10 5.8l-10 5.8M8 11.8l10 5.8M8 17.6l10 5.8" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    );
  }

  // React
  if (norm.includes('react')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#20232A" />
        <ellipse cx="18" cy="18" rx="4.5" ry="12" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(30 18 18)" fill="none" />
        <ellipse cx="18" cy="18" rx="4.5" ry="12" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(90 18 18)" fill="none" />
        <ellipse cx="18" cy="18" rx="4.5" ry="12" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(150 18 18)" fill="none" />
        <circle cx="18" cy="18" r="2" fill="#00D8FF" />
      </svg>
    );
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#333333" />
        <path d="M18 6l11 6.5v13L18 32 7 25.5v-13L18 6z" fill="#5FA04E" />
        <text x="18" y="22" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle">JS</text>
      </svg>
    );
  }

  // TypeScript
  if (norm.includes('typescript')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#3178C6" />
        <text x="18" y="24" fill="#FFFFFF" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">TS</text>
      </svg>
    );
  }

  // GitHub
  if (norm.includes('github') || norm.includes('git')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#24292E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18 7a11 11 0 00-3.5 21.4c.5.1.7-.2.7-.5v-2c-3.1.7-3.7-1.5-3.7-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5-1.2-5-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3.1 1.1a10.6 10.6 0 015.6 0c2.1-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.7.1 3 .7.8 1.2 1.8 1.2 3 0 4.3-2.6 5.2-5.1 5.5.4.4.8 1.1.8 2.1v3.1c0 .3.2.6.8.5A11 11 0 0018 7z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Microsoft Copilot
  if (norm.includes('copilot') || norm.includes('coptgpt')) {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#0D9488" />
        <path d="M12 18 C12 14.7 14.7 12 18 12 C21.3 12 24 14.7 24 18 C24 21.3 21.3 24 18 24 C14.7 24 12 21.3 12 18 Z" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="18" cy="18" r="3" fill="#FFFFFF" />
      </svg>
    );
  }

  // Default fallback icon
  return (
    <svg viewBox="0 0 36 36" className={className}>
      <rect width="36" height="36" rx="8" fill="#6366F1" />
      <circle cx="18" cy="18" r="6" fill="#FFFFFF" />
    </svg>
  );
};
