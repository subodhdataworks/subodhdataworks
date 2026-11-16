import React from 'react';

// =========================================================================
// 14 3D ISOMETRIC ILLUSTRATIONS MATCHING THE REFERENCE IMAGE EXACTLY
// =========================================================================

export const Dsa3DIllustration: React.FC<{ topicKey: string; className?: string }> = ({ topicKey, className = "w-16 h-14 md:w-20 md:h-16" }) => {
  const uid = React.useId().replace(/:/g, '');
  switch (topicKey) {
    case 'python':
      // 3D purple isometric laptop with glowing coding screen
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`py-laptop-screen-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
            <linearGradient id={`py-laptop-base-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c7d2fe" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
            <filter id={`py-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#8b5cf6" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#py-glow-${uid})`}>
            {/* Screen */}
            <polygon points="35,12 85,2 92,42 42,52" fill={`url(#py-laptop-screen-${uid})`} rx="3" stroke="#a5b4fc" strokeWidth="1.5" />
            {/* Code lines */}
            <line x1="45" y1="18" x2="68" y2="13" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <line x1="47" y1="25" x2="78" y2="19" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
            <line x1="49" y1="32" x2="65" y2="29" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
            <line x1="51" y1="39" x2="82" y2="33" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
            <line x1="53" y1="46" x2="72" y2="42" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
            {/* Keyboard Base */}
            <polygon points="12,50 62,40 88,56 38,68" fill={`url(#py-laptop-base-${uid})`} stroke="#6366f1" strokeWidth="1.5" />
            <polygon points="12,50 38,68 38,72 12,54" fill="#4f46e5" />
            <polygon points="38,68 88,56 88,60 38,72" fill="#4338ca" />
            {/* Trackpad */}
            <polygon points="36,60 48,56 54,60 42,64" fill="#a5b4fc" opacity="0.8" />
          </g>
        </svg>
      );

    case 'sql':
      // 3D blue database cylinder with "SQL" badge
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`sql-grad-1-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id={`sql-top-grad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <filter id={`sql-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0284c7" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#sql-glow-${uid})`}>
            {/* Main Big Cylinder */}
            <ellipse cx="62" cy="62" rx="26" ry="10" fill="#0369a1" />
            <path d="M36,36 v26 c0,5.52 11.64,10 26,10 s26,-4.48 26,-10 v-26 Z" fill={`url(#sql-grad-1-${uid})`} />
            {/* Ring separators */}
            <ellipse cx="62" cy="46" rx="26" ry="9" fill="none" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.6" />
            <ellipse cx="62" cy="56" rx="26" ry="9" fill="none" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.6" />
            {/* Top Ellipse */}
            <ellipse cx="62" cy="36" rx="26" ry="10" fill={`url(#sql-top-grad-${uid})`} stroke="#bae6fd" strokeWidth="1.5" />
            {/* Secondary smaller cylinder behind/beside */}
            <ellipse cx="28" cy="45" rx="16" ry="6" fill="#075985" />
            <path d="M12,28 v17 c0,3.31 7.16,6 16,6 s16,-2.69 16,-6 v-17 Z" fill={`url(#sql-grad-1-${uid})`} />
            <ellipse cx="28" cy="28" rx="16" ry="6" fill={`url(#sql-top-grad-${uid})`} stroke="#bae6fd" strokeWidth="1.2" />
            {/* "SQL" Badge on cylinder */}
            <text x="62" y="55" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="13" letterSpacing="1" fontFamily="sans-serif">SQL</text>
          </g>
        </svg>
      );

    case 'excel':
      // 3D green Excel spreadsheet sheet with 'X'
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`xl-sheet-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient id={`xl-grid-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
            <filter id={`xl-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#16a34a" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#xl-glow-${uid})`}>
            {/* 3D Spreadsheet back panel */}
            <polygon points="50,14 88,24 88,64 50,54" fill={`url(#xl-grid-grad-${uid})`} stroke="#86efac" strokeWidth="1.5" />
            {/* Grid lines inside back panel */}
            <line x1="50" y1="24" x2="88" y2="34" stroke="#bbf7d0" strokeWidth="1" opacity="0.7" />
            <line x1="50" y1="34" x2="88" y2="44" stroke="#bbf7d0" strokeWidth="1" opacity="0.7" />
            <line x1="50" y1="44" x2="88" y2="54" stroke="#bbf7d0" strokeWidth="1" opacity="0.7" />
            <line x1="62" y1="17" x2="62" y2="57" stroke="#bbf7d0" strokeWidth="1" opacity="0.7" />
            <line x1="75" y1="20" x2="75" y2="60" stroke="#bbf7d0" strokeWidth="1" opacity="0.7" />

            {/* Front floating 3D X box */}
            <polygon points="18,28 46,20 46,54 18,62" fill={`url(#xl-sheet-grad-${uid})`} stroke="#86efac" strokeWidth="1.5" />
            <polygon points="46,20 54,23 54,57 46,54" fill="#14532d" />
            <polygon points="18,62 46,54 54,57 26,65" fill="#052e16" />
            {/* White X symbol */}
            <path d="M26,34 L38,48 M38,34 L26,48" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'powerbi':
      // 3D desktop monitor with golden bar chart
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`pb-screen-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id={`pb-bar-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <filter id={`pb-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#eab308" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#pb-glow-${uid})`}>
            {/* Monitor screen */}
            <rect x="25" y="14" width="60" height="42" rx="4" fill={`url(#pb-screen-${uid})`} stroke="#475569" strokeWidth="1.8" />
            {/* Stand */}
            <rect x="52" y="56" width="6" height="12" fill="#334155" />
            <ellipse cx="55" cy="69" rx="15" ry="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            {/* Golden 3D Bar Chart */}
            <rect x="33" y="38" width="8" height="13" rx="1.5" fill={`url(#pb-bar-${uid})`} />
            <rect x="44" y="30" width="8" height="21" rx="1.5" fill={`url(#pb-bar-${uid})`} />
            <rect x="55" y="24" width="8" height="27" rx="1.5" fill={`url(#pb-bar-${uid})`} />
            <rect x="66" y="34" width="8" height="17" rx="1.5" fill={`url(#pb-bar-${uid})`} />
            {/* Trend line */}
            <path d="M37,35 L48,27 L59,20 L70,30" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="59" cy="20" r="2.5" fill="#facc15" stroke="#ffffff" strokeWidth="1" />
          </g>
        </svg>
      );

    case 'pandas':
      // 3D colorful vertical bar chart blocks
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`pd-bar-pink-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <linearGradient id={`pd-bar-purple-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
            <linearGradient id={`pd-bar-blue-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <filter id={`pd-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#db2777" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#pd-glow-${uid})`}>
            {/* Bar 1 - Pink */}
            <polygon points="26,38 38,32 38,65 26,71" fill={`url(#pd-bar-pink-${uid})`} stroke="#fbcfe8" strokeWidth="1" />
            <polygon points="38,32 46,36 46,69 38,65" fill="#be185d" />
            <polygon points="26,38 38,32 46,36 34,42" fill="#f472b6" />

            {/* Bar 2 - Purple (Tallest) */}
            <polygon points="44,20 56,14 56,58 44,64" fill={`url(#pd-bar-purple-${uid})`} stroke="#e9d5ff" strokeWidth="1" />
            <polygon points="56,14 64,18 64,62 56,58" fill="#7e22ce" />
            <polygon points="44,20 56,14 64,18 52,24" fill="#c084fc" />

            {/* Bar 3 - Blue */}
            <polygon points="62,28 74,22 74,53 62,59" fill={`url(#pd-bar-blue-${uid})`} stroke="#bfdbfe" strokeWidth="1" />
            <polygon points="74,22 82,26 82,57 74,53" fill="#1d4ed8" />
            <polygon points="62,28 74,22 82,26 70,32" fill="#60a5fa" />
          </g>
        </svg>
      );

    case 'numpy':
      // 3D blue isometric cubes
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`np-cube-top-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <filter id={`np-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3b82f6" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#np-glow-${uid})`}>
            {/* Top Cube */}
            <g transform="translate(48, 12)">
              <polygon points="0,10 14,3 28,10 14,17" fill={`url(#np-cube-top-${uid})`} stroke="#dbeafe" strokeWidth="1" />
              <polygon points="0,10 14,17 14,31 0,24" fill="#3b82f6" />
              <polygon points="14,17 28,10 28,24 14,31" fill="#1d4ed8" />
            </g>
            {/* Bottom-left Cube */}
            <g transform="translate(32, 28)">
              <polygon points="0,10 14,3 28,10 14,17" fill={`url(#np-cube-top-${uid})`} stroke="#dbeafe" strokeWidth="1" />
              <polygon points="0,10 14,17 14,31 0,24" fill="#3b82f6" />
              <polygon points="14,17 28,10 28,24 14,31" fill="#1d4ed8" />
            </g>
            {/* Bottom-right Cube */}
            <g transform="translate(60, 28)">
              <polygon points="0,10 14,3 28,10 14,17" fill={`url(#np-cube-top-${uid})`} stroke="#dbeafe" strokeWidth="1" />
              <polygon points="0,10 14,17 14,31 0,24" fill="#3b82f6" />
              <polygon points="14,17 28,10 28,24 14,31" fill="#1d4ed8" />
            </g>
          </g>
        </svg>
      );

    case 'matplotlib':
      // 3D cyan/blue laptop with multi-colored line chart graph
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`mpl-screen-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#082f49" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <filter id={`mpl-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#06b6d4" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#mpl-glow-${uid})`}>
            {/* Isometric laptop */}
            <polygon points="32,15 84,6 90,44 38,53" fill={`url(#mpl-screen-${uid})`} stroke="#38bdf8" strokeWidth="1.5" />
            {/* Line graphs on screen */}
            <path d="M42,42 L52,32 L64,36 L74,20 L84,24" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M44,46 L55,40 L66,28 L78,32 L86,16" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            {/* Points */}
            <circle cx="74" cy="20" r="2" fill="#fbbf24" />
            <circle cx="86" cy="16" r="2" fill="#34d399" />
            {/* Keyboard base */}
            <polygon points="12,51 64,41 88,57 36,68" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
            <polygon points="12,51 36,68 36,72 12,55" fill="#0284c7" />
            <polygon points="36,68 88,57 88,61 36,72" fill="#0369a1" />
          </g>
        </svg>
      );

    case 'statistics':
      // 3D magenta bell curve / Gaussian distribution
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`stat-curve-fill-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d946ef" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>
            <filter id={`stat-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#a855f7" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#stat-glow-${uid})`}>
            {/* Grid baseline */}
            <polygon points="15,62 85,62 80,68 10,68" fill="#e9d5ff" opacity="0.6" />
            {/* Bell Curve Filled Area */}
            <path d="M16,62 C28,62 38,58 44,38 C47,28 50,16 54,16 C58,16 61,28 64,38 C70,58 80,62 92,62 Z" fill={`url(#stat-curve-fill-${uid})`} />
            {/* Bell Curve Stroke */}
            <path d="M16,62 C28,62 38,58 44,38 C47,28 50,16 54,16 C58,16 61,28 64,38 C70,58 80,62 92,62" stroke="#c026d3" strokeWidth="3" strokeLinecap="round" />
            {/* Standard deviation dashed line */}
            <line x1="54" y1="16" x2="54" y2="62" stroke="#a21caf" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="54" cy="16" r="3" fill="#f43f5e" />
          </g>
        </svg>
      );

    case 'ml_engineering':
      // 3D glowing orange AI chip & neural brain processor
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`ml-chip-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <filter id={`ml-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#f97316" floodOpacity="0.4" />
            </filter>
          </defs>
          <g filter={`url(#ml-glow-${uid})`}>
            {/* Isometric Chip Plate */}
            <polygon points="50,18 84,34 50,50 16,34" fill={`url(#ml-chip-grad-${uid})`} stroke="#fed7aa" strokeWidth="1.5" />
            <polygon points="16,34 50,50 50,58 16,42" fill="#c2410c" />
            <polygon points="50,50 84,34 84,42 50,58" fill="#9a3412" />
            {/* Chip core */}
            <polygon points="50,26 70,36 50,44 30,36" fill="#7c2d12" stroke="#fbbf24" strokeWidth="1.2" />
            {/* Circuit glowing lines */}
            <circle cx="50" cy="35" r="4.5" fill="#fef08a" />
            <line x1="38" y1="28" x2="44" y2="31" stroke="#fef08a" strokeWidth="1.5" />
            <line x1="62" y1="28" x2="56" y2="31" stroke="#fef08a" strokeWidth="1.5" />
            <line x1="38" y1="42" x2="44" y2="39" stroke="#fef08a" strokeWidth="1.5" />
            <line x1="62" y1="42" x2="56" y2="39" stroke="#fef08a" strokeWidth="1.5" />
          </g>
        </svg>
      );

    case 'deep_learning':
      // 3D blue connected neural network spheres cluster
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id={`dl-sphere-1-${uid}`} cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </radialGradient>
            <radialGradient id={`dl-sphere-2-${uid}`} cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="60%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </radialGradient>
            <filter id={`dl-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0284c7" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#dl-glow-${uid})`}>
            {/* Connecting lines */}
            <line x1="28" y1="28" x2="52" y2="18" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 1" />
            <line x1="28" y1="28" x2="52" y2="44" stroke="#38bdf8" strokeWidth="2" />
            <line x1="28" y1="56" x2="52" y2="44" stroke="#38bdf8" strokeWidth="2" />
            <line x1="28" y1="56" x2="52" y2="66" stroke="#38bdf8" strokeWidth="2" />
            <line x1="52" y1="18" x2="78" y2="38" stroke="#60a5fa" strokeWidth="2" />
            <line x1="52" y1="44" x2="78" y2="38" stroke="#60a5fa" strokeWidth="2.5" />
            <line x1="52" y1="66" x2="78" y2="38" stroke="#60a5fa" strokeWidth="2" />

            {/* Input layer spheres */}
            <circle cx="28" cy="28" r="7" fill={`url(#dl-sphere-1-${uid})`} stroke="#bae6fd" strokeWidth="1" />
            <circle cx="28" cy="56" r="7" fill={`url(#dl-sphere-1-${uid})`} stroke="#bae6fd" strokeWidth="1" />

            {/* Hidden layer spheres */}
            <circle cx="52" cy="18" r="8" fill={`url(#dl-sphere-2-${uid})`} stroke="#bfdbfe" strokeWidth="1" />
            <circle cx="52" cy="44" r="9" fill={`url(#dl-sphere-2-${uid})`} stroke="#bfdbfe" strokeWidth="1.2" />
            <circle cx="52" cy="66" r="8" fill={`url(#dl-sphere-2-${uid})`} stroke="#bfdbfe" strokeWidth="1" />

            {/* Output sphere (Large glow) */}
            <circle cx="78" cy="38" r="11" fill={`url(#dl-sphere-1-${uid})`} stroke="#e0f2fe" strokeWidth="1.5" />
            <circle cx="78" cy="38" r="4" fill="#ffffff" opacity="0.7" />
          </g>
        </svg>
      );

    case 'ai_engineering':
      // 3D emerald Generative AI holographic pedestal & spark
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`gen-pedestal-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id={`gen-glow-grad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
            <filter id={`gen-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#10b981" floodOpacity="0.4" />
            </filter>
          </defs>
          <g filter={`url(#gen-glow-${uid})`}>
            {/* Hologram Light Column */}
            <polygon points="50,14 74,44 26,44" fill={`url(#gen-glow-grad-${uid})`} />
            {/* Floating Spark Core */}
            <circle cx="50" cy="22" r="7" fill="#6ee7b7" />
            <path d="M50,10 L53,19 L62,22 L53,25 L50,34 L47,25 L38,22 L47,19 Z" fill="#ffffff" />
            {/* Isometric Pedestal */}
            <polygon points="50,42 80,54 50,66 20,54" fill={`url(#gen-pedestal-${uid})`} stroke="#a7f3d0" strokeWidth="1.5" />
            <polygon points="20,54 50,66 50,72 20,60" fill="#047857" />
            <polygon points="50,66 80,54 80,60 50,72" fill="#065f46" />
          </g>
        </svg>
      );

    case 'data_science':
      // 3D Agentic AI cute white AI robot avatar
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`bot-body-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id={`bot-visor-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <filter id={`bot-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#f43f5e" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#bot-glow-${uid})`}>
            {/* Antenna */}
            <line x1="56" y1="12" x2="56" y2="20" stroke="#94a3b8" strokeWidth="2.5" />
            <circle cx="56" cy="11" r="3.5" fill="#f43f5e" />
            {/* Robot Head */}
            <rect x="34" y="20" width="44" height="34" rx="12" fill={`url(#bot-body-${uid})`} stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Dark Visor */}
            <rect x="40" y="27" width="32" height="18" rx="8" fill={`url(#bot-visor-${uid})`} />
            {/* Cute Glowing Blue Eyes */}
            <ellipse cx="49" cy="36" rx="3.5" ry="4.5" fill="#38bdf8" />
            <ellipse cx="63" cy="36" rx="3.5" ry="4.5" fill="#38bdf8" />
            {/* Floating Body */}
            <ellipse cx="56" cy="62" rx="16" ry="6" fill={`url(#bot-body-${uid})`} stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Small floating hands */}
            <circle cx="32" cy="46" r="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="80" cy="46" r="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          </g>
        </svg>
      );

    case 'javascript':
      // 3D yellow/amber JavaScript code editor / brackets
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`js-box-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <filter id={`js-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#eab308" floodOpacity="0.35" />
            </filter>
          </defs>
          <g filter={`url(#js-glow-${uid})`}>
            {/* Isometric JS Box */}
            <polygon points="50,18 84,34 50,50 16,34" fill={`url(#js-box-grad-${uid})`} stroke="#fef9c3" strokeWidth="1.5" />
            <polygon points="16,34 50,50 50,60 16,44" fill="#ca8a04" />
            <polygon points="50,50 84,34 84,44 50,60" fill="#a16207" />
            {/* Curly Brackets or JS */}
            <text x="50" y="38" textAnchor="middle" fill="#713f12" fontWeight="900" fontSize="16" fontFamily="sans-serif">&#123; JS &#125;</text>
          </g>
        </svg>
      );

    case 'react':
      // 3D glowing React cyan atom orbitals
      return (
        <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`rc-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <filter id={`rc-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0ea5e9" floodOpacity="0.4" />
            </filter>
          </defs>
          <g filter={`url(#rc-glow-${uid})`} transform="translate(50, 40)">
            {/* Orbital 1 */}
            <ellipse rx="32" ry="12" fill="none" stroke="#38bdf8" strokeWidth="2.5" transform="rotate(30)" />
            {/* Orbital 2 */}
            <ellipse rx="32" ry="12" fill="none" stroke="#38bdf8" strokeWidth="2.5" transform="rotate(-30)" />
            {/* Orbital 3 */}
            <ellipse rx="32" ry="12" fill="none" stroke="#0284c7" strokeWidth="2" transform="rotate(90)" />
            {/* Center Nucleus */}
            <circle cx="0" cy="0" r="6.5" fill={`url(#rc-grad-${uid})`} stroke="#e0f2fe" strokeWidth="1.5" />
            {/* Electrons */}
            <circle cx="28" cy="10" r="2.5" fill="#ffffff" />
            <circle cx="-24" cy="14" r="2.5" fill="#ffffff" />
            <circle cx="0" cy="-28" r="2.5" fill="#ffffff" />
          </g>
        </svg>
      );

    default:
      return null;
  }
};
