import React from 'react';

/**
 * Concept-specific, crystal-clear visual badges for Flow Steps & Compare Cards.
 * - Matches `title` FIRST using strict word boundaries so body words never hijack the icon!
 * - Accepts `fallbackIndex` so two sibling steps/cards NEVER show the exact same fallback icon!
 * - Zero opaque white-box PNGs!
 */
export const ConceptCardVisual: React.FC<{
  title: string;
  body?: string;
  size?: 'sm' | 'md';
  fallbackIndex?: number;
}> = ({ title, body = '', size = 'md', fallbackIndex = 0 }) => {
  const t = title.toLowerCase();
  const full = `${title} ${body}`.toLowerCase();
  const dim = size === 'sm' ? 'w-12 h-12' : 'w-14 h-14';

  // 1. Clean / Prep / Scrub -> Broom (Jharu) sweeping sparkles
  if (/\b(clean|cleaning|prep|scrub|wash|missing|duplicate|deduplicate|standardize)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FEF3C7" />
        <line x1="46" y1="12" x2="26" y2="36" stroke="#B45309" strokeWidth="5" strokeLinecap="round" />
        <rect x="18" y="33" width="16" height="6" rx="3" transform="rotate(-40 26 36)" fill="#F43F5E" />
        <path d="M22 36 L10 48 L22 54 L32 42 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
        <path d="M48 34 L50 39 L55 41 L50 43 L48 48 L46 43 L41 41 L46 39 Z" fill="#10B981" />
        <circle cx="16" cy="20" r="3" fill="#38BDF8" />
        <circle cx="52" cy="22" r="2.5" fill="#F43F5E" />
      </svg>
    );
  }

  // 2. Recipe / Tea / Cooking / Food / Kitchen
  if (/\b(recipe|tea|chai|cook|cooking|food|meal|coffee|kitchen|bakery|cake)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FEF3C7" />
        {/* Steam waves */}
        <path d="M24 14 Q22 19 26 22" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 12 Q32 17 36 20" fill="none" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
        {/* Warm Tea Cup */}
        <path d="M16 26 H44 V38 C44 46 38 50 30 50 C22 50 16 46 16 38 Z" fill="#D97706" />
        <path d="M44 29 H49 C52 29 52 39 49 39 H44" fill="none" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="14" y="50" width="32" height="4" rx="2" fill="#92400E" />
      </svg>
    );
  }

  // 3. Wrong / Delete / Mistake / Guesswork / Bug / Error -> Red Cross (X)
  if (/\b(delete|remove|wrong|guesswork|mistake|bad|without|fail|error|myth|bug|invalid|noisy|weak)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FFE4E6" />
        <circle cx="32" cy="32" r="21" fill="#F43F5E" />
        <path d="M23 23 L41 41 M41 23 L23 41" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 4. Output / Result / Print / Receipt / Console / Verify / Guided / Pro Habit -> Green Tick / Output Screen
  if (/\b(output|result|results|print|receipt|console|display)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#DCFCE7" />
        <rect x="12" y="14" width="40" height="36" rx="7" fill="#0F172A" stroke="#10B981" strokeWidth="2.5" />
        <path d="M20 28 L26 34 L38 22" fill="none" stroke="#34D399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="20" y1="41" x2="44" y2="41" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // 5. Share / Monitor / Check / Verify / Guided / Pro Habit / Strong -> Green Tick (✓)
  if (/\b(share|monitor|check|verify|verified|valid|guided|pro habit|pass|smart|decide|strong|clean!)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#DCFCE7" />
        <circle cx="32" cy="32" r="21" fill="#10B981" />
        <path d="M21 33 L29 41 L44 24" fill="none" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 6. Input / Collect / Gather / Fetch / Read / Import / Capture
  if (/\b(input|inputs|collect|gather|fetch|read|import|enter|raw)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#E0F2FE" />
        <rect x="14" y="30" width="36" height="22" rx="6" fill="#0284C7" />
        <line x1="32" y1="10" x2="32" y2="34" stroke="#F43F5E" strokeWidth="4.5" strokeLinecap="round" />
        <polyline points="23,26 32,35 41,26" fill="none" stroke="#F43F5E" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 7. Process / CPU / Execute / Calculate / Run / Interpreter
  if (/\b(process|processing|cpu|execute|calculate|run|interpreter|compile|step)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#EDE9FE" />
        <rect x="18" y="18" width="28" height="28" rx="6" fill="#7C3AED" />
        <rect x="25" y="25" width="14" height="14" rx="3" fill="#FDE047" />
        {/* CPU pins */}
        <line x1="26" y1="11" x2="26" y2="18" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="11" x2="38" y2="18" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
        <line x1="26" y1="46" x2="26" y2="53" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="46" x2="38" y2="53" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
        <line x1="11" y1="26" x2="18" y2="26" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
        <line x1="11" y1="38" x2="18" y2="38" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="26" x2="53" y2="26" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="38" x2="53" y2="38" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // 8. Capture Signals / Live GPS Pin
  if (/\b(capture|signal|signals|gps|live|location)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#E0F2FE" />
        <path d="M32 12 C22 12 16 19 16 28 C16 40 32 54 32 54 C32 54 48 40 48 28 C48 19 42 12 32 12 Z" fill="#0284C7" />
        <circle cx="32" cy="27" r="7" fill="#FFFFFF" />
        <circle cx="32" cy="27" r="3" fill="#F43F5E" />
      </svg>
    );
  }

  // 9. Compare History / Past Records (Clock)
  if (/\b(history|compare|past|time|schedule)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#EDE9FE" />
        <circle cx="32" cy="32" r="19" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="4" />
        <line x1="32" y1="32" x2="32" y2="20" stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="32" y1="32" x2="42" y2="36" stroke="#F43F5E" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="3" fill="#0F172A" />
      </svg>
    );
  }

  // 10. Estimate ETA / Stopwatch Timer
  if (/\b(eta|estimate|timer|minutes|delivery)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#DCFCE7" />
        <rect x="26" y="10" width="12" height="5" rx="2" fill="#059669" />
        <circle cx="32" cy="35" r="18" fill="#10B981" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="32" y1="35" x2="32" y2="24" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="32" y1="35" x2="41" y2="35" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 11. Goal / Target / Understand
  if (/\b(goal|target|objective|understand)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FFE4E6" />
        <circle cx="32" cy="32" r="20" fill="#F43F5E" />
        <circle cx="32" cy="32" r="13" fill="#FFFFFF" />
        <circle cx="32" cy="32" r="6" fill="#F43F5E" />
      </svg>
    );
  }

  // 12. Explore / Pattern / EDA / Search
  if (/\b(explore|pattern|patterns|eda|visual|discover|find|search|inspect)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#EDE9FE" />
        <circle cx="28" cy="28" r="14" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="4" />
        <line x1="39" y1="39" x2="52" y2="52" stroke="#7C3AED" strokeWidth="5.5" strokeLinecap="round" />
        <rect x="21" y="28" width="4" height="7" rx="1" fill="#38BDF8" />
        <rect x="27" y="24" width="4" height="11" rx="1" fill="#F43F5E" />
        <rect x="33" y="20" width="4" height="15" rx="1" fill="#10B981" />
      </svg>
    );
  }

  // 13. Computer Program / Python / Code / Script / Tools
  if (/\b(program|programming|python|code|script|editor|ide|function|loop|variable|syntax)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#E0F2FE" />
        <rect x="10" y="14" width="44" height="30" rx="6" fill="#1E1B4B" stroke="#0284C7" strokeWidth="2.5" />
        <path d="M22 25 L16 29 L22 33" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 25 L48 29 L42 33" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="34" y1="22" x2="29" y2="36" stroke="#FDE047" strokeWidth="2.8" strokeLinecap="round" />
        <rect x="6" y="46" width="52" height="5" rx="2.5" fill="#0284C7" />
      </svg>
    );
  }

  // 14. Math / Statistics / Average
  if (/\b(math|statistics|probability|average|mean|median|number|numerical)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#E0F2FE" />
        <rect x="14" y="38" width="8" height="14" rx="2" fill="#38BDF8" />
        <rect x="28" y="24" width="8" height="28" rx="2" fill="#0284C7" />
        <rect x="42" y="14" width="8" height="38" rx="2" fill="#6366F1" />
        <path d="M14 28 Q32 8 50 22" fill="none" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // 15. Analyze / Model / ML / AI / Neural
  if (/\b(model|analyze|train|predict|neural|ml|ai|machine learning|agent|llm)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#F3E8FF" />
        <line x1="18" y1="22" x2="34" y2="32" stroke="#A78BFA" strokeWidth="2.5" />
        <line x1="18" y1="42" x2="34" y2="32" stroke="#A78BFA" strokeWidth="2.5" />
        <line x1="34" y1="32" x2="48" y2="32" stroke="#EC4899" strokeWidth="3" />
        <circle cx="18" cy="22" r="6" fill="#38BDF8" />
        <circle cx="18" cy="42" r="6" fill="#38BDF8" />
        <circle cx="34" cy="32" r="8" fill="#7C3AED" />
        <circle cx="48" cy="32" r="7" fill="#F43F5E" />
      </svg>
    );
  }

  // 16. Healthcare / Hospital
  if (/\b(health|healthcare|hospital|hospitals|clinic|doctor|patient|medical)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#DCFCE7" />
        <rect x="14" y="14" width="36" height="36" rx="8" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
        <rect x="28" y="21" width="8" height="22" rx="2" fill="#EF4444" />
        <rect x="21" y="28" width="22" height="8" rx="2" fill="#EF4444" />
      </svg>
    );
  }

  // 17. Bank / Finance / Payment / Fraud
  if (/\b(bank|banking|payment|payments|fraud|finance|loan|credit)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FEF3C7" />
        <path d="M32 10 L50 18 V34 C50 45 42 52 32 56 C22 52 14 45 14 34 V18 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
        <path d="M24 33 L30 39 L41 26" fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 18. Shopping / Delivery / Store / Retail
  if (/\b(shop|shopping|delivery|e-commerce|store|cart|retail|order)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FCE7F3" />
        <path d="M12 18 H20 L25 40 H47 L51 24 H22" fill="none" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="27" cy="48" r="4" fill="#1E1B4B" />
        <circle cx="44" cy="48" r="4" fill="#1E1B4B" />
        <rect x="29" y="20" width="12" height="10" rx="2" fill="#FBBF24" />
      </svg>
    );
  }

  // 19. Domain / Business / Company / Operations
  if (/\b(domain|business|operations|company|industry|team)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#DCFCE7" />
        <rect x="16" y="14" width="32" height="38" rx="5" fill="#059669" />
        <rect x="22" y="21" width="6" height="6" rx="1.5" fill="#ECFDF5" />
        <rect x="36" y="21" width="6" height="6" rx="1.5" fill="#ECFDF5" />
        <rect x="22" y="31" width="6" height="6" rx="1.5" fill="#ECFDF5" />
        <rect x="36" y="31" width="6" height="6" rx="1.5" fill="#ECFDF5" />
        <rect x="28" y="42" width="8" height="10" rx="1.5" fill="#FDE047" />
      </svg>
    );
  }

  // 20. Rule-Based / IF-THEN
  if (/\b(rule-based|human-written|rule|rules)\b/.test(t)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#E0F2FE" />
        <polygon points="32,12 46,26 32,40 18,26" fill="#0284C7" />
        <line x1="18" y1="26" x2="12" y2="48" stroke="#F43F5E" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="46" y1="26" x2="52" y2="48" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="12" cy="50" r="4" fill="#F43F5E" />
        <circle cx="52" cy="50" r="4" fill="#10B981" />
      </svg>
    );
  }

  // Secondary check on body for Clean
  if (/\b(clean|scrub)\b/.test(full)) {
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FEF3C7" />
        <line x1="46" y1="12" x2="26" y2="36" stroke="#B45309" strokeWidth="5" strokeLinecap="round" />
        <path d="M22 36 L10 48 L22 54 L32 42 Z" fill="#F59E0B" />
      </svg>
    );
  }

  // Distinct non-repeating fallback icons by fallbackIndex (0..4) so sibling steps NEVER repeat!
  const variant = fallbackIndex % 5;
  if (variant === 1) {
    // Gear / Process
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FEF3C7" />
        <circle cx="32" cy="32" r="15" fill="none" stroke="#D97706" strokeWidth="6" strokeDasharray="8 5" />
        <circle cx="32" cy="32" r="6" fill="#0F172A" />
      </svg>
    );
  }
  if (variant === 2) {
    // Chart / Pattern
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#EDE9FE" />
        <rect x="16" y="34" width="7" height="16" rx="2" fill="#A78BFA" />
        <rect x="28" y="24" width="7" height="26" rx="2" fill="#7C3AED" />
        <rect x="40" y="16" width="7" height="34" rx="2" fill="#EC4899" />
      </svg>
    );
  }
  if (variant === 3) {
    // Lightbulb / Insight
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#DCFCE7" />
        <circle cx="32" cy="27" r="13" fill="#FBBF24" />
        <rect x="26" y="40" width="12" height="7" rx="3" fill="#475569" />
      </svg>
    );
  }
  if (variant === 4) {
    // Checkmark / Result
    return (
      <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#FFE4E6" />
        <circle cx="32" cy="32" r="18" fill="#10B981" />
        <path d="M23 32 L29 38 L42 25" fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Variant 0: Database Cylinder
  return (
    <svg viewBox="0 0 64 64" className={`${dim} shrink-0`} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#E0F2FE" />
      <ellipse cx="32" cy="18" rx="16" ry="6" fill="#38BDF8" />
      <path d="M16 18 v28 a16 6 0 0 0 32 0 v-28" fill="#0284C7" />
      <ellipse cx="32" cy="18" rx="16" ry="6" fill="#7DD3FC" />
      <path d="M16 32 a16 6 0 0 0 32 0" fill="none" stroke="#E0F2FE" strokeWidth="2" />
    </svg>
  );
};
