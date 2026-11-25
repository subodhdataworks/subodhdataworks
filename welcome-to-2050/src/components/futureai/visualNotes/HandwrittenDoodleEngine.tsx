import React from 'react';

/**
 * Universal Handwritten Pastel Doodle Engine
 *
 * Matches the mandatory master reference image (`What Is Data Analytics?`):
 * - Dark purple/slate hand-drawn outlines (`#2a174a` / `#1e293b`, strokeWidth 2.2)
 * - Soft pastel fills:
 *   - Pastel Sky Blue: `#7dd3fc` / `#bae6fd`
 *   - Pastel Yellow: `#fde047` / `#fef08a`
 *   - Pastel Pink/Rose: `#f472b6` / `#fbcfe8` / `#ffe4e6`
 *   - Pastel Lavender: `#c4b5fd` / `#ede6ff`
 *   - Pastel Mint Green: `#86efac` / `#bbf7d0`
 * - Topic-specific visual intelligence for Data Science, Python, SQL, Excel,
 *   Power BI, Machine Learning, Deep Learning, Generative AI, and Agentic AI.
 * - Guarantees sibling items never repeat the exact same doodle.
 */

export type DoodleKind =
  | 'database'
  | 'broom'
  | 'laptop-chart'
  | 'lightbulb'
  | 'target'
  | 'cart'
  | 'bank'
  | 'media'
  | 'hospital'
  | 'kirana-store'
  | 'guesswork-winter'
  | 'guided-forecast'
  | 'math-bell'
  | 'code-terminal'
  | 'recipe-tea'
  | 'warning-cross'
  | 'verified-shield'
  | 'brain-ml'
  | 'neural-net'
  | 'robot-agent'
  | 'spreadsheet'
  | 'join-tables'
  | 'memory-box'
  | 'decision-tree'
  | 'clock-eta'
  | 'rocket-deploy'
  | 'magnifying-glass';

const ALL_DOODLES: DoodleKind[] = [
  'database',
  'broom',
  'laptop-chart',
  'lightbulb',
  'target',
  'math-bell',
  'code-terminal',
  'hospital',
  'bank',
  'cart',
  'media',
  'brain-ml',
  'spreadsheet',
  'join-tables',
  'memory-box',
  'decision-tree',
  'clock-eta',
  'neural-net',
  'robot-agent',
  'rocket-deploy',
  'verified-shield',
  'warning-cross',
  'recipe-tea',
  'magnifying-glass',
];

export function resolveDoodleKind(
  title: string,
  body: string = '',
  fallbackIndex: number = 0
): DoodleKind {
  const t = title.toLowerCase();
  const full = `${title} ${body}`.toLowerCase();

  // 1. Specific scenario illustrations (Kirana store, Winter jackets guesswork, Seasonal forecast)
  if (/\b(kirana|supermarket|everyday example|shopkeeper|umbrella)\b/.test(full)) return 'kirana-store';
  if (/\b(winter jacket|unsold stock|guesswork)\b/.test(full)) return 'guesswork-winter';
  if (/\b(guided by data science|seasonal sales|local weather)\b/.test(full)) return 'guided-forecast';

  // 2. Title-first strict matching so headlines always get their exact doodle
  if (/\b(clean|cleaning|scrub|missing|duplicate|null|fix|broom|noise|dirty|combine)\b/.test(t)) return 'broom';
  if (/\b(recipe|tea|chai|cook|kitchen|sugar)\b/.test(t)) return 'recipe-tea';
  if (/\b(hospital|health|healthcare|clinic|patient|doctor|medicine)\b/.test(t)) return 'hospital';
  if (/\b(bank|banking|finance|loan|payment|payments|upi|fraud|card)\b/.test(t)) return 'bank';
  if (/\b(e-?commerce|shop|shopping|retail|store|cart|product|order|warehouse|inventory)\b/.test(t)) return 'cart';
  if (/\b(ott|media|video|movie|stream|youtube|netflix|content)\b/.test(t)) return 'media';
  if (/\b(without|mistake|wrong|myth|bad|error|fail|risk|overfit|underfit|pitfall)\b/.test(t)) return 'warning-cross';
  if (/\b(guided|evidence|best practice|pro habit|verified|reliable|accurate|solution|check|improve|monitor)\b/.test(t)) return 'verified-shield';
  if (/\b(math|stat|statistics|probability|average|mean|median|variance|distribution|bell|formula)\b/.test(t)) return 'math-bell';
  if (/\b(rule-based|if-then|condition|branch|decision tree|flowchart|policy)\b/.test(t)) return 'decision-tree';
  if (/\b(neural|deep learning|layer|neuron|cnn|rnn|transformer|pytorch|tensorflow)\b/.test(t)) return 'neural-net';
  if (/\b(agent|agentic|bot|llm|genai|generative|prompt|rag|langchain)\b/.test(t)) return 'robot-agent';
  if (/\b(machine learning|ml|model|train|predict|algorithm|classification|regression|cluster)\b/.test(t)) return 'brain-ml';
  if (/\b(join|merge|relation|schema|foreign key|primary key)\b/.test(t)) return 'join-tables';
  if (/\b(excel|spreadsheet|sheet|cell|pivot|vlookup|xlookup)\b/.test(t)) return 'spreadsheet';
  if (/\b(variable|variables|memory|box|type|int|float|str|bool|list|dict|tuple|array)\b/.test(t)) return 'memory-box';
  if (/\b(python|code|program|programming|script|function|loop|terminal|billing|computing|tool|tools)\b/.test(t)) return 'code-terminal';
  if (/\b(eta|time|clock|minute|hour|schedule|arrival|delay)\b/.test(t)) return 'clock-eta';
  if (/\b(deploy|deployment|cloud|docker|api|fastapi|production|launch|career)\b/.test(t)) return 'rocket-deploy';
  if (/\b(raw|data|database|sql|collect|gather|input|capture|signal|record|table|source)\b/.test(t)) return 'database';
  if (/\b(analy|explore|pattern|chart|visual|dashboard|power bi|compare|history)\b/.test(t)) return 'laptop-chart';
  if (/\b(insight|idea|meaning|understand|why|explain|summary|takeaway)\b/.test(t)) return 'lightbulb';
  if (/\b(decision|action|goal|target|outcome|result|output|share)\b/.test(t)) return 'target';
  if (/\b(domain|business|industry|operations)\b/.test(t)) return 'hospital';

  // 3. Body fallback
  if (/\b(python|sql|code)\b/.test(full)) return 'code-terminal';
  if (/\b(hospital|patient)\b/.test(full)) return 'hospital';
  if (/\b(bank|loan|fraud)\b/.test(full)) return 'bank';
  if (/\b(shop|store|jacket|order)\b/.test(full)) return 'cart';

  return ALL_DOODLES[fallbackIndex % ALL_DOODLES.length];
}

export const HandwrittenDoodle: React.FC<{
  kind?: DoodleKind;
  title?: string;
  body?: string;
  fallbackIndex?: number;
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
}> = ({
  kind,
  title = '',
  body = '',
  fallbackIndex = 0,
  size = 'md',
  isActive = false,
}) => {
  const resolved = kind || resolveDoodleKind(title, body, fallbackIndex);
  const px = size === 'sm' ? 44 : size === 'lg' ? 68 : 52;
  const activeCls = isActive
    ? 'scale-110 drop-shadow-[0_0_10px_rgba(139,92,246,0.55)]'
    : 'group-hover:scale-105';

  return (
    <div
      style={{ width: px, height: px, flexShrink: 0 }}
      className={`flex items-center justify-center shrink-0 transition-transform duration-200 ${activeCls}`}
    >
      {renderDoodleSvg(resolved)}
    </div>
  );
};

function renderDoodleSvg(kind: DoodleKind): React.ReactNode {
  switch (kind) {
    case 'database':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <ellipse cx="32" cy="17" rx="18" ry="7" fill="#7dd3fc" stroke="#2a174a" strokeWidth="2.3" />
          <path d="M 14 17 V 29 C 14 34 22 36 32 36 C 42 36 50 34 50 29 V 17" fill="#bae6fd" stroke="#2a174a" strokeWidth="2.3" />
          <path d="M 14 29 V 42 C 14 47 22 49 32 49 C 42 49 50 47 50 42 V 29" fill="#7dd3fc" stroke="#2a174a" strokeWidth="2.3" />
          <path d="M 14 29 C 14 34 22 36 32 36 C 42 36 50 34 50 29" fill="none" stroke="#2a174a" strokeWidth="2.3" />
          <circle cx="21" cy="28" r="1.6" fill="#2a174a" />
          <circle cx="21" cy="40" r="1.6" fill="#2a174a" />
        </svg>
      );

    case 'broom':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <path d="M 48 10 L 32 30" stroke="#7e22ce" strokeWidth="4.2" strokeLinecap="round" />
          <rect x="29" y="27" width="8" height="4" rx="1.5" transform="rotate(-52 29 27)" fill="#f472b6" stroke="#2a174a" strokeWidth="2" />
          <path
            d="M 30 30 Q 36 34 33 46 C 30 50 16 48 14 43 Q 18 34 30 30 Z"
            fill="#fde047"
            stroke="#2a174a"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M 18 41 Q 24 39 28 41" stroke="#ca8a04" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M 45 35 Q 45 38 48 38 Q 45 38 45 41 Q 45 38 42 38 Q 45 38 45 35 Z" fill="#fde047" stroke="#2a174a" strokeWidth="1.2" />
          <path d="M 12 28 Q 12 31 15 31 Q 12 31 12 34 Q 12 31 9 31 Q 12 31 12 28 Z" fill="#fde047" stroke="#2a174a" strokeWidth="1.2" />
        </svg>
      );

    case 'laptop-chart':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <rect x="10" y="14" width="38" height="25" rx="3" fill="#ffffff" stroke="#2a174a" strokeWidth="2.2" />
          <line x1="10" y1="19" x2="48" y2="19" stroke="#c4b5fd" strokeWidth="1.5" />
          <rect x="16" y="27" width="4.5" height="8" rx="1" fill="#f472b6" stroke="#2a174a" strokeWidth="1.4" />
          <rect x="23" y="22" width="4.5" height="13" rx="1" fill="#7dd3fc" stroke="#2a174a" strokeWidth="1.4" />
          <rect x="30" y="25" width="4.5" height="10" rx="1" fill="#c4b5fd" stroke="#2a174a" strokeWidth="1.4" />
          <path d="M 6 39 L 52 39 C 54 39 54 43 51 43 L 7 43 C 4 43 4 39 6 39 Z" fill="#7dd3fc" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="43" cy="27" r="7.5" fill="rgba(255,255,255,0.82)" stroke="#2a174a" strokeWidth="2.3" />
          <path d="M 48 32 L 55 39" stroke="#2a174a" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'lightbulb':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <line x1="32" y1="5" x2="32" y2="9" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="16" y1="11" x2="19" y2="14" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="48" y1="11" x2="45" y2="14" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="10" y1="26" x2="14" y2="26" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="54" y1="26" x2="50" y2="26" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round" />
          <path
            d="M 22 26 C 22 20 26 16 32 16 C 38 16 42 20 42 26 C 42 31 38 34 37 38 L 27 38 C 26 34 22 31 22 26 Z"
            fill="#fef08a"
            stroke="#2a174a"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M 29 27 L 32 23 L 35 27" stroke="#ca8a04" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="27" y="38" width="10" height="5" rx="1" fill="#c4b5fd" stroke="#2a174a" strokeWidth="1.8" />
          <path d="M 29 43 H 35 V 46 C 35 47.5 33.5 49 32 49 C 30.5 49 29 47.5 29 46 Z" fill="#2a174a" />
        </svg>
      );

    case 'target':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <circle cx="32" cy="32" r="19" fill="#fbcfe8" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="32" cy="32" r="13" fill="#ffffff" stroke="#2a174a" strokeWidth="2" />
          <circle cx="32" cy="32" r="7" fill="#f43f5e" stroke="#2a174a" strokeWidth="2" />
          <path d="M 48 16 L 33 31" stroke="#2a174a" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M 44 13 L 51 20" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'cart':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <circle cx="24" cy="49" r="3.5" fill="#fde047" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="44" cy="49" r="3.5" fill="#fde047" stroke="#2a174a" strokeWidth="2.2" />
          <path
            d="M 10 16 H 17 L 22 40 H 46 L 51 22 H 19"
            fill="#fbcfe8"
            stroke="#2a174a"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="29" y1="22" x2="29" y2="40" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="39" y1="22" x2="39" y2="40" stroke="#2a174a" strokeWidth="1.8" />
        </svg>
      );

    case 'bank':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <polygon points="32,10 10,23 54,23" fill="#fde047" stroke="#2a174a" strokeWidth="2.2" strokeLinejoin="round" />
          <rect x="12" y="23" width="40" height="4.5" fill="#bae6fd" stroke="#2a174a" strokeWidth="1.8" />
          <rect x="16" y="27.5" width="5" height="17" fill="#ffffff" stroke="#2a174a" strokeWidth="1.8" />
          <rect x="29.5" y="27.5" width="5" height="17" fill="#ffffff" stroke="#2a174a" strokeWidth="1.8" />
          <rect x="43" y="27.5" width="5" height="17" fill="#ffffff" stroke="#2a174a" strokeWidth="1.8" />
          <rect x="10" y="44.5" width="44" height="6" rx="2" fill="#fde047" stroke="#2a174a" strokeWidth="2.2" />
        </svg>
      );

    case 'media':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <rect x="12" y="24" width="40" height="26" rx="4" fill="#ede6ff" stroke="#2a174a" strokeWidth="2.2" />
          <polygon points="28,31 39,37 28,43" fill="#f472b6" stroke="#2a174a" strokeWidth="1.8" strokeLinejoin="round" />
          <g transform="rotate(-6 12 22)">
            <rect x="12" y="14" width="40" height="9" rx="2.5" fill="#7dd3fc" stroke="#2a174a" strokeWidth="2.2" />
            <line x1="22" y1="14" x2="26" y2="23" stroke="#2a174a" strokeWidth="2" />
            <line x1="34" y1="14" x2="38" y2="23" stroke="#2a174a" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'hospital':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <rect x="14" y="14" width="36" height="38" rx="4" fill="#bae6fd" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="32" cy="25" r="7.5" fill="#ffffff" stroke="#2a174a" strokeWidth="1.8" />
          <path d="M 32 21 V 29 M 28 25 H 36" stroke="#f43f5e" strokeWidth="2.8" strokeLinecap="round" />
          <rect x="27" y="40" width="10" height="12" rx="1.5" fill="#ede6ff" stroke="#2a174a" strokeWidth="1.8" />
          <rect x="19" y="34" width="5" height="5" rx="1" fill="#ffffff" stroke="#2a174a" strokeWidth="1.4" />
          <rect x="40" y="34" width="5" height="5" rx="1" fill="#ffffff" stroke="#2a174a" strokeWidth="1.4" />
        </svg>
      );

    case 'math-bell':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <rect x="8" y="12" width="48" height="40" rx="6" fill="#ede6ff" stroke="#2a174a" strokeWidth="2.2" />
          <path
            d="M 13 44 C 22 44, 26 20, 32 20 C 38 20, 42 44, 51 44"
            fill="#7dd3fc"
            fillOpacity="0.65"
            stroke="#2a174a"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <line x1="32" y1="20" x2="32" y2="44" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="32" cy="20" r="3" fill="#fde047" stroke="#2a174a" strokeWidth="1.8" />
        </svg>
      );

    case 'code-terminal':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <rect x="8" y="12" width="48" height="40" rx="6" fill="#ede6ff" stroke="#2a174a" strokeWidth="2.2" />
          <rect x="8" y="12" width="48" height="10" rx="5" fill="#c4b5fd" stroke="#2a174a" strokeWidth="2" />
          <circle cx="15" cy="17" r="2" fill="#f472b6" />
          <circle cx="22" cy="17" r="2" fill="#fde047" />
          <circle cx="29" cy="17" r="2" fill="#86efac" />
          <path d="M 18 31 L 24 36 L 18 41" stroke="#2a174a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="28" y1="41" x2="40" y2="41" stroke="#7c3aed" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      );

    case 'recipe-tea':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <path d="M 25 13 Q 23 18 27 21" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 35 11 Q 33 16 37 19" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 16 25 H 44 V 37 C 44 45 38 49 30 49 C 22 49 16 45 16 37 Z" fill="#fde047" stroke="#2a174a" strokeWidth="2.2" />
          <path d="M 44 28 H 49 C 53 28 53 38 49 38 H 44" stroke="#2a174a" strokeWidth="2.3" strokeLinecap="round" />
          <rect x="13" y="49" width="34" height="4" rx="2" fill="#fbcfe8" stroke="#2a174a" strokeWidth="2" />
        </svg>
      );

    case 'warning-cross':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <circle cx="32" cy="32" r="20" fill="#ffe4e6" stroke="#2a174a" strokeWidth="2.2" />
          <path d="M 24 24 L 40 40 M 40 24 L 24 40" stroke="#e11d48" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'verified-shield':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <circle cx="32" cy="32" r="20" fill="#dcfce7" stroke="#2a174a" strokeWidth="2.2" />
          <path d="M 22 33 L 29 40 L 43 24" stroke="#16a34a" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'brain-ml':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <circle cx="24" cy="26" r="10" fill="#fbcfe8" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="38" cy="26" r="10" fill="#c4b5fd" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="26" cy="37" r="9" fill="#fde047" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="38" cy="37" r="9" fill="#7dd3fc" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="32" cy="31" r="4" fill="#ffffff" stroke="#2a174a" strokeWidth="2" />
        </svg>
      );

    case 'neural-net':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <line x1="16" y1="20" x2="32" y2="16" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="16" y1="20" x2="32" y2="32" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="16" y1="44" x2="32" y2="32" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="16" y1="44" x2="32" y2="48" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="32" y1="16" x2="48" y2="32" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="32" y1="32" x2="48" y2="32" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="32" y1="48" x2="48" y2="32" stroke="#2a174a" strokeWidth="1.8" />
          <circle cx="16" cy="20" r="5" fill="#7dd3fc" stroke="#2a174a" strokeWidth="2" />
          <circle cx="16" cy="44" r="5" fill="#7dd3fc" stroke="#2a174a" strokeWidth="2" />
          <circle cx="32" cy="16" r="5" fill="#c4b5fd" stroke="#2a174a" strokeWidth="2" />
          <circle cx="32" cy="32" r="5" fill="#fde047" stroke="#2a174a" strokeWidth="2" />
          <circle cx="32" cy="48" r="5" fill="#c4b5fd" stroke="#2a174a" strokeWidth="2" />
          <circle cx="48" cy="32" r="5.5" fill="#86efac" stroke="#2a174a" strokeWidth="2" />
        </svg>
      );

    case 'robot-agent':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <line x1="32" y1="9" x2="32" y2="17" stroke="#2a174a" strokeWidth="2.3" />
          <circle cx="32" cy="9" r="3.5" fill="#fde047" stroke="#2a174a" strokeWidth="1.8" />
          <rect x="14" y="17" width="36" height="30" rx="8" fill="#ede6ff" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="25" cy="30" r="3.5" fill="#7dd3fc" stroke="#2a174a" strokeWidth="1.8" />
          <circle cx="39" cy="30" r="3.5" fill="#7dd3fc" stroke="#2a174a" strokeWidth="1.8" />
          <path d="M 24 39 Q 32 43 40 39" stroke="#2a174a" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'spreadsheet':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <rect x="10" y="12" width="44" height="40" rx="5" fill="#dcfce7" stroke="#2a174a" strokeWidth="2.2" />
          <rect x="10" y="12" width="44" height="11" rx="4" fill="#86efac" stroke="#2a174a" strokeWidth="2" />
          <line x1="26" y1="12" x2="26" y2="52" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="10" y1="32" x2="54" y2="32" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="10" y1="42" x2="54" y2="42" stroke="#2a174a" strokeWidth="1.8" />
        </svg>
      );

    case 'join-tables':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <circle cx="25" cy="32" r="14" fill="#7dd3fc" fillOpacity="0.7" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="39" cy="32" r="14" fill="#fbcfe8" fillOpacity="0.7" stroke="#2a174a" strokeWidth="2.2" />
        </svg>
      );

    case 'memory-box':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <rect x="12" y="18" width="40" height="30" rx="5" fill="#fde047" stroke="#2a174a" strokeWidth="2.2" />
          <rect x="20" y="12" width="24" height="10" rx="3" fill="#ede6ff" stroke="#2a174a" strokeWidth="2" />
          <text x="32" y="38" textAnchor="middle" fill="#2a174a" fontSize="13" fontWeight="900">x = 42</text>
        </svg>
      );

    case 'decision-tree':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <polygon points="32,10 46,20 32,30 18,20" fill="#fde047" stroke="#2a174a" strokeWidth="2.1" />
          <path d="M 23 26 L 16 42 M 41 26 L 48 42" stroke="#2a174a" strokeWidth="2.2" strokeLinecap="round" />
          <rect x="8" y="42" width="16" height="10" rx="3" fill="#86efac" stroke="#2a174a" strokeWidth="2" />
          <rect x="40" y="42" width="16" height="10" rx="3" fill="#fbcfe8" stroke="#2a174a" strokeWidth="2" />
        </svg>
      );

    case 'clock-eta':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <circle cx="32" cy="32" r="20" fill="#bae6fd" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="32" cy="32" r="16" fill="#ffffff" stroke="#2a174a" strokeWidth="1.6" />
          <path d="M 32 22 V 32 L 40 36" stroke="#2a174a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'kirana-store':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          {/* Shop Awning */}
          <path d="M 10 14 H 54 L 58 24 H 6 Z" fill="#f472b6" stroke="#2a174a" strokeWidth="2.1" strokeLinejoin="round" />
          <rect x="18" y="14" width="8" height="10" fill="#fde047" stroke="#2a174a" strokeWidth="1.5" />
          <rect x="38" y="14" width="8" height="10" fill="#fde047" stroke="#2a174a" strokeWidth="1.5" />
          {/* Storefront & Billing Register */}
          <rect x="12" y="24" width="40" height="28" rx="3" fill="#FFFDF9" stroke="#2a174a" strokeWidth="2.1" />
          <rect x="17" y="30" width="13" height="15" rx="2" fill="#bae6fd" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="20" y1="35" x2="27" y2="35" stroke="#2a174a" strokeWidth="1.5" />
          <line x1="20" y1="40" x2="27" y2="40" stroke="#2a174a" strokeWidth="1.5" />
          {/* Umbrella & Milk Bottle */}
          <path d="M 35 37 C 35 32 47 32 47 37 Z" fill="#c4b5fd" stroke="#2a174a" strokeWidth="1.8" />
          <line x1="41" y1="37" x2="41" y2="45" stroke="#2a174a" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'guesswork-winter':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <rect x="8" y="10" width="48" height="44" rx="7" fill="#ffe4e6" stroke="#2a174a" strokeWidth="2.1" />
          {/* Hot Sun in Warm City */}
          <circle cx="20" cy="22" r="5.5" fill="#fde047" stroke="#2a174a" strokeWidth="1.8" />
          {/* Unsold Box Stack & Downward Loss Line */}
          <rect x="33" y="20" width="15" height="13" rx="2" fill="#fcd34d" stroke="#2a174a" strokeWidth="1.8" />
          <path d="M 15 36 L 28 45 L 46 47" stroke="#e11d48" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 41 42 L 47 47 L 41 50" stroke="#e11d48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'guided-forecast':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <rect x="8" y="10" width="48" height="44" rx="7" fill="#dcfce7" stroke="#2a174a" strokeWidth="2.1" />
          {/* Weather Cloud + Seasonal Growth Bars */}
          <path d="M 16 25 C 16 21 22 20 24 23 C 27 21 31 23 30 27 H 16 Z" fill="#7dd3fc" stroke="#2a174a" strokeWidth="1.7" />
          <rect x="18" y="39" width="6" height="9" rx="1" fill="#86efac" stroke="#2a174a" strokeWidth="1.6" />
          <rect x="28" y="33" width="6" height="15" rx="1" fill="#7dd3fc" stroke="#2a174a" strokeWidth="1.6" />
          <rect x="38" y="25" width="6" height="23" rx="1" fill="#c4b5fd" stroke="#2a174a" strokeWidth="1.6" />
        </svg>
      );

    case 'rocket-deploy':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <path d="M 32 10 C 40 18 42 30 40 42 H 24 C 22 30 24 18 32 10 Z" fill="#c4b5fd" stroke="#2a174a" strokeWidth="2.2" />
          <circle cx="32" cy="26" r="4.5" fill="#fde047" stroke="#2a174a" strokeWidth="2" />
          <path d="M 24 34 L 16 42 H 24 Z" fill="#f472b6" stroke="#2a174a" strokeWidth="2" />
          <path d="M 40 34 L 48 42 H 40 Z" fill="#f472b6" stroke="#2a174a" strokeWidth="2" />
          <path d="M 28 42 L 32 52 L 36 42" fill="#fde047" stroke="#2a174a" strokeWidth="2" />
        </svg>
      );

    case 'magnifying-glass':
    default:
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <circle cx="28" cy="28" r="15" fill="#bae6fd" stroke="#2a174a" strokeWidth="2.3" />
          <path d="M 39 39 L 51 51" stroke="#2a174a" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
  }
}

/**
 * Hand-drawn dark-purple arrow with optional sparkle stars (explicitly bounded 30x26)
 */
export const HandwrittenArrow: React.FC<{ withSparkles?: boolean; isActive?: boolean }> = ({
  withSparkles = false,
  isActive = false,
}) => (
  <div
    style={{ width: 30, height: 26, flexShrink: 0 }}
    className="flex flex-col items-center justify-center px-0.5 shrink-0 select-none rotate-90 sm:rotate-0"
  >
    <svg
      viewBox="0 0 38 32"
      width={28}
      height={24}
      style={{ width: 28, height: 24, display: 'block' }}
      fill="none"
    >
      {withSparkles && (
        <>
          <path d="M 8 7 Q 8 10 11 10 Q 8 10 8 13 Q 8 10 5 10 Q 8 10 8 7 Z" fill="#2a174a" />
          <path d="M 28 6 Q 28 9 31 9 Q 28 9 28 12 Q 28 9 25 9 Q 28 9 28 6 Z" fill="#2a174a" />
        </>
      )}
      <path
        d="M 4 20 L 26 20 M 19 14 L 27 20 L 19 26"
        stroke={isActive ? '#7c3aed' : '#2a174a'}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
