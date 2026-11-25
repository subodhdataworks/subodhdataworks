import React, { useState } from 'react';
import {
  Database,
  Terminal,
  TrendingUp,
  TrendingDown,
  Activity,
  Cpu,
  Layers,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Building2,
  Clock,
  GitBranch,
  BarChart3,
  Sparkles,
  HeartPulse,
  CreditCard,
  Truck,
  Users,
  Workflow,
  BrainCircuit,
  Coffee,
  Code2,
  Table2,
  Bot,
  Rocket,
  Radio,
  Wand2,
  History,
  Target,
} from 'lucide-react';
import { ToolIcon } from '../CourseToolIcons';

/**
 * Registry of generated 16:9 realistic scene images placed in `public/images/ds-scenes/`.
 * Any card whose `imageUrl` is provided OR whose title slug matches an entry here
 * renders the full 16:9 realistic image with ZERO cropping (`object-contain`).
 */
export const DS_SCENE_IMAGE_REGISTRY: Record<string, string> = {
  'math-statistics': '/images/ds-scenes/math-statistics.jpg',
  'computing-data-tools': '/images/ds-scenes/computing-data-tools.jpg',
  'domain-business-knowledge': '/images/ds-scenes/domain-business-knowledge.jpg',
  'decisions-based-on-guesswork': '/images/ds-scenes/decisions-based-on-guesswork.jpg',
  'decisions-guided-by-data-science': '/images/ds-scenes/decisions-guided-by-data-science.jpg',
  'rule-based-logic-human-written': '/images/ds-scenes/rule-based-logic-human-written.jpg',
  'machine-learning-model-learned-from-data': '/images/ds-scenes/ml-model-learned-from-data.jpg',
};

export function slugifyVisualTitle(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/^\d+[\.\)]\s*/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface DetectedTechLogo {
  id: string;
  label: string;
  iconName: string;
  badgeColor: string;
}

const TECH_CATALOG: {
  id: string;
  label: string;
  iconName: string;
  regex: RegExp;
  badgeColor: string;
}[] = [
  {
    id: 'python',
    label: 'Python',
    iconName: 'Python',
    regex: /\b(python|py|\.py|pip|pep8)\b/i,
    badgeColor: 'bg-[#1E293B] text-sky-300 border-sky-500/40',
  },
  {
    id: 'sql',
    label: 'SQL',
    iconName: 'SQL',
    regex: /\b(sql|mysql|postgres|postgresql|sqlite|query|queries|select\s|join\s)\b/i,
    badgeColor: 'bg-[#0C4A6E] text-sky-200 border-sky-400/40',
  },
  {
    id: 'database',
    label: 'Database',
    iconName: 'Database',
    regex: /\b(database|databases|db|rdbms|warehouse|table|tables|schema)\b/i,
    badgeColor: 'bg-[#1E1B4B] text-indigo-200 border-indigo-400/40',
  },
  {
    id: 'excel',
    label: 'Excel / Sheets',
    iconName: 'Excel',
    regex: /\b(excel|spreadsheet|spreadsheets|xlsx|csv|pivot|vlookup|xlookup)\b/i,
    badgeColor: 'bg-[#064E3B] text-emerald-200 border-emerald-400/40',
  },
  {
    id: 'powerbi',
    label: 'Power BI',
    iconName: 'Power BI',
    regex: /\b(power\s*bi|dax|power\s*query|dashboard)\b/i,
    badgeColor: 'bg-[#451A03] text-amber-200 border-amber-400/40',
  },
  {
    id: 'pandas',
    label: 'Pandas',
    iconName: 'Pandas',
    regex: /\b(pandas|dataframe|dataframes|series|read_csv|groupby)\b/i,
    badgeColor: 'bg-[#1E1B4B] text-purple-200 border-purple-400/40',
  },
  {
    id: 'numpy',
    label: 'NumPy',
    iconName: 'NumPy',
    regex: /\b(numpy|ndarray|vectorized|matrix|matrices|array)\b/i,
    badgeColor: 'bg-[#0F172A] text-cyan-200 border-cyan-400/40',
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    iconName: 'Scikit-Learn',
    regex: /\b(machine\s*learning|ml|scikit|sklearn|regression|classification|clustering|random\s*forest|xgboost)\b/i,
    badgeColor: 'bg-[#431407] text-orange-200 border-orange-400/40',
  },
  {
    id: 'pytorch',
    label: 'PyTorch / DL',
    iconName: 'PyTorch',
    regex: /\b(pytorch|deep\s*learning|neural\s*network|tensor|cnn|rnn|transformer)\b/i,
    badgeColor: 'bg-[#450A0A] text-rose-200 border-rose-400/40',
  },
  {
    id: 'tensorflow',
    label: 'TensorFlow',
    iconName: 'TensorFlow',
    regex: /\b(tensorflow|keras)\b/i,
    badgeColor: 'bg-[#431407] text-amber-200 border-amber-400/40',
  },
  {
    id: 'langchain',
    label: 'LangChain',
    iconName: 'LangChain',
    regex: /\b(langchain|langgraph|agentic|agent|agents|tool\s*calling)\b/i,
    badgeColor: 'bg-[#064E3B] text-teal-200 border-teal-400/40',
  },
  {
    id: 'vectordb',
    label: 'Vector DB',
    iconName: 'Vector DB',
    regex: /\b(vector\s*db|vector\s*database|embeddings|pinecone|chromadb|faiss|qdrant)\b/i,
    badgeColor: 'bg-[#3B0764] text-fuchsia-200 border-fuchsia-400/40',
  },
  {
    id: 'rag',
    label: 'RAG',
    iconName: 'RAG',
    regex: /\b(rag|retrieval[\s-]augmented)\b/i,
    badgeColor: 'bg-[#1E1B4B] text-violet-200 border-violet-400/40',
  },
  {
    id: 'openai',
    label: 'GenAI / LLM',
    iconName: 'OpenAI',
    regex: /\b(openai|chatgpt|gpt|llm|llms|generative\s*ai|genai|prompt)\b/i,
    badgeColor: 'bg-[#064E3B] text-emerald-200 border-emerald-400/40',
  },
  {
    id: 'fastapi',
    label: 'FastAPI',
    iconName: 'FastAPI',
    regex: /\b(fastapi|rest\s*api|api\s*endpoint|uvicorn)\b/i,
    badgeColor: 'bg-[#042F2E] text-teal-200 border-teal-400/40',
  },
  {
    id: 'docker',
    label: 'Docker',
    iconName: 'Docker',
    regex: /\b(docker|container|containers|dockerfile)\b/i,
    badgeColor: 'bg-[#0C4A6E] text-sky-200 border-sky-400/40',
  },
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    iconName: 'Kubernetes',
    regex: /\b(kubernetes|k8s|orchestration)\b/i,
    badgeColor: 'bg-[#1E3A8A] text-blue-200 border-blue-400/40',
  },
  {
    id: 'git',
    label: 'Git / GitHub',
    iconName: 'GitHub',
    regex: /\b(git|github|version\s*control|commit|branch)\b/i,
    badgeColor: 'bg-[#1E293B] text-slate-200 border-slate-400/40',
  },
];

export const ExtendedTechLogo: React.FC<{ iconName: string; className?: string }> = ({
  iconName,
  className = 'w-5 h-5',
}) => {
  const norm = iconName.toLowerCase();
  if (norm === 'database') {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#312E81" />
        <ellipse cx="18" cy="11" rx="9" ry="3.5" fill="#818CF8" />
        <path d="M9 11v7c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-7" fill="none" stroke="#C7D2FE" strokeWidth="2" />
        <path d="M9 18v7c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-7" fill="none" stroke="#A5B4FC" strokeWidth="2" />
      </svg>
    );
  }
  if (norm === 'pandas') {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#1E1B4B" />
        <rect x="9" y="8" width="3.5" height="20" rx="1.5" fill="#A855F7" />
        <rect x="15" y="13" width="3.5" height="10" rx="1.5" fill="#F43F5E" />
        <rect x="15" y="8" width="3.5" height="3.5" rx="1" fill="#FACC15" />
        <rect x="21" y="8" width="3.5" height="20" rx="1.5" fill="#38BDF8" />
      </svg>
    );
  }
  if (norm === 'numpy') {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#0F172A" />
        <polygon points="18,6 29,12 18,18 7,12" fill="#38BDF8" />
        <polygon points="7,13.5 17,19.5 17,30 7,24" fill="#0284C7" />
        <polygon points="29,13.5 19,19.5 19,30 29,24" fill="#0369A1" />
      </svg>
    );
  }
  if (norm === 'scikit-learn') {
    return (
      <svg viewBox="0 0 36 36" className={className}>
        <rect width="36" height="36" rx="8" fill="#431407" />
        <circle cx="13" cy="20" r="6" fill="#F97316" />
        <circle cx="23" cy="14" r="5" fill="#38BDF8" />
        <path d="M17 17 L20 15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return <ToolIcon name={iconName} className={className} />;
};

function detectMentionedTechLogos(title: string, bodyEn: string): DetectedTechLogo[] {
  const combined = `${title} ${bodyEn}`;
  const found: DetectedTechLogo[] = [];
  for (const item of TECH_CATALOG) {
    if (item.regex.test(combined)) {
      found.push({
        id: item.id,
        label: item.label,
        iconName: item.iconName,
        badgeColor: item.badgeColor,
      });
    }
    if (found.length >= 5) break;
  }
  return found;
}

/**
 * Extracts key bold concepts (`**...**`), quoted examples (`*"..."*`), or key phrases from bodyEn
 * so any card's visual diagram displays the exact words & examples from that card!
 */
function extractCardClues(title: string, bodyEn: string): {
  quote: string | null;
  keywords: string[];
} {
  const quoteMatch = bodyEn.match(/\*?"([^"]{4,65})"\*?/);
  const quote = quoteMatch ? quoteMatch[1].trim() : null;

  const boldMatches = [...bodyEn.matchAll(/\*\*([^*]{2,32})\*\*/g)].map((m) => m[1].trim());
  const keywords = Array.from(new Set(boldMatches)).slice(0, 3);

  if (keywords.length < 2) {
    const cleanWords = bodyEn
      .replace(/\*\*/g, '')
      .replace(/\*?"[^"]+"\*?/g, '')
      .split(/[,.;—–\-]/)
      .map((s) => s.trim())
      .filter((s) => s.length >= 6 && s.length <= 36);
    for (const w of cleanWords) {
      if (keywords.length < 3 && !keywords.includes(w)) {
        keywords.push(w);
      }
    }
  }

  return { quote, keywords };
}

export interface PremiumVisualCardShowcaseProps {
  title: string;
  bodyEn: string;
  tone: 'lavender' | 'sky' | 'green' | 'amber' | 'pink';
  cardIndex: number;
  imageUrl?: string;
}

/**
 * Renders a word-accurate, self-explanatory visual scene for every Compare Card across all 427 topics:
 * 1. If a 16:9 realistic photo exists in `/images/ds-scenes/<slug>.jpg` (or explicit `imageUrl`),
 *    renders it in a full 16:9 No-Crop frame (`object-contain`) with official tech logos.
 * 2. Otherwise renders a rich, topic-and-headline-specific visual illustration scene so any student
 *    immediately understands the exact concept just by looking at the visual!
 */
export const PremiumVisualCardShowcase: React.FC<PremiumVisualCardShowcaseProps> = ({
  title,
  bodyEn,
  cardIndex,
  imageUrl,
}) => {
  const slug = slugifyVisualTitle(title);
  const resolvedImage = imageUrl || DS_SCENE_IMAGE_REGISTRY[slug];
  const [imgFailed, setImgFailed] = useState(false);

  const t = title.toLowerCase();
  const full = `${title} ${bodyEn}`.toLowerCase();
  const detectedLogos = detectMentionedTechLogos(title, bodyEn);
  const { quote, keywords } = extractCardClues(title, bodyEn);

  // ── 1. 16:9 NO-CROP REALISTIC PHOTO SLOT (WHEN PRESENT IN public/images/ds-scenes/) ──
  if (resolvedImage && !imgFailed) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0B1120] border border-slate-800/80 shadow-2xs flex items-center justify-center">
        <img
          src={resolvedImage}
          alt={title}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-contain select-none"
        />
        {detectedLogos.length > 0 && (
          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap items-center gap-1.5 bg-slate-950/85 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/15">
            {detectedLogos.map((logo) => (
              <span
                key={logo.id}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-white px-1.5 py-0.5 rounded bg-white/10"
              >
                <ExtendedTechLogo iconName={logo.iconName} className="w-3.5 h-3.5" />
                <span>{logo.label}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── 2. HEALTHCARE & HOSPITALS (PATIENT RUSH, MEDICINE STOCK, EARLY RISK) ──
  if (/\b(healthcare|hospital|hospitals|clinic|patient|doctor|medicine)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#052E22] via-[#0A4635] to-[#0F172A] border border-emerald-400/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
            <span>Hospital Smart Analytics</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 font-bold">
            Early Risk AI
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 bg-slate-950/65 rounded-lg p-2 border border-white/10 text-center">
          <div className="bg-white/5 rounded-md p-1.5 border border-white/10">
            <div className="text-[9px] text-slate-300 font-medium">OPD Rush Hour</div>
            <div className="text-[11px] font-extrabold text-amber-300 mt-0.5">10 AM – 1 PM</div>
            <div className="mt-1 flex items-end justify-center gap-0.5 h-3">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-t" />
              <span className="w-1.5 h-3 bg-amber-400 rounded-t" />
              <span className="w-1.5 h-2.5 bg-amber-400 rounded-t" />
              <span className="w-1.5 h-1 bg-emerald-400 rounded-t" />
            </div>
          </div>
          <div className="bg-white/5 rounded-md p-1.5 border border-white/10">
            <div className="text-[9px] text-slate-300 font-medium">Medicine Stock</div>
            <div className="text-[11px] font-extrabold text-emerald-300 mt-0.5">98.4% Ready</div>
            <div className="mt-1 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-[94%]" />
            </div>
          </div>
          <div className="bg-white/5 rounded-md p-1.5 border border-white/10">
            <div className="text-[9px] text-slate-300 font-medium">Patient Risk</div>
            <div className="text-[11px] font-extrabold text-rose-300 mt-0.5">Early Alert ✓</div>
            <svg viewBox="0 0 60 14" className="w-full h-3 mt-0.5">
              <polyline
                points="2,8 16,8 22,2 28,13 34,5 40,8 58,8"
                fill="none"
                stroke="#FB7185"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // ── 3. BANKING & PAYMENTS (CARD / UPI FRAUD DETECTION SHIELD) ──
  if (/\b(banking|bank|payments|payment|fraud|transaction|transactions|card|upi)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#271705] via-[#3F2408] to-[#0F172A] border border-amber-400/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-amber-300">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-amber-400" />
            <span>Live Payment Fraud Shield</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-400/30 font-bold">
            Real-Time Check
          </span>
        </div>
        <div className="space-y-1.5 bg-slate-950/65 rounded-lg p-2 border border-white/10 text-[10.5px] font-mono">
          <div className="flex items-center justify-between bg-emerald-950/50 border border-emerald-500/30 rounded px-2 py-1">
            <span className="text-emerald-200 truncate">UPI • ₹450 Local Grocery</span>
            <span className="text-emerald-400 font-bold shrink-0">✓ Normal</span>
          </div>
          <div className="flex items-center justify-between bg-rose-950/60 border border-rose-500/40 rounded px-2 py-1">
            <span className="text-rose-200 truncate">Card • ₹84,000 3:15 AM Unusual</span>
            <span className="text-rose-400 font-bold shrink-0">🛡️ Flagged!</span>
          </div>
        </div>
      </div>
    );
  }

  // ── 4. ONLINE SHOPPING & DELIVERY (ETA, RECOMMENDATIONS & WAREHOUSE STOCK) ──
  if (/\b(online shopping|shopping|delivery|e-commerce|warehouse|eta|order)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#1A103C] via-[#2B195C] to-[#0F172A] border border-purple-400/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-purple-200">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-purple-400" />
            <span>Smart E-Commerce &amp; Logistics</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-purple-500/25 text-purple-200 border border-purple-400/30 font-bold">
            Live ETA: 32m
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 bg-slate-950/65 rounded-lg p-2 border border-white/10 text-center text-[10px]">
          <div className="bg-white/5 rounded p-1.5 border border-white/10">
            <div className="text-slate-400 text-[8.5px]">1. Warehouse</div>
            <div className="font-bold text-emerald-300 mt-0.5">In-Stock ✓</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-white/10">
            <div className="text-slate-400 text-[8.5px]">2. Suggest Items</div>
            <div className="font-bold text-amber-300 mt-0.5">Top Match ★</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-white/10">
            <div className="text-slate-400 text-[8.5px]">3. Route ETA</div>
            <div className="font-bold text-sky-300 mt-0.5">30–35 Mins</div>
          </div>
        </div>
      </div>
    );
  }

  // ── 5. BUSINESS & OPERATIONS TEAM (TOPIC 2: DEFINING BUSINESS GOALS & AVOIDING LATE DELIVERIES) ──
  if (/\b(business & operations|operations team|stakeholder|business goal)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#2B1704] via-[#452608] to-[#0F172A] border border-amber-400/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-amber-300">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Business Goal &amp; SLA Priority</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-400/30 font-bold">
            Customer First
          </span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 bg-slate-950/65 rounded-lg p-2 border border-white/10 text-[10.5px]">
          <div className="bg-white/5 rounded px-2 py-1.5 border border-white/10">
            <div className="text-[9px] text-slate-400">Primary Target</div>
            <div className="font-bold text-amber-300 truncate">Avoid Late Orders</div>
          </div>
          <div className="bg-white/5 rounded px-2 py-1.5 border border-white/10">
            <div className="text-[9px] text-slate-400">Customer Trust</div>
            <div className="font-bold text-emerald-300 truncate">On-Time SLA 98%</div>
          </div>
        </div>
      </div>
    );
  }

  // ── 6. DATA ENGINEERS (TOPIC 2: PIPELINES FOR ORDER LOGS, GPS PINGS & WEATHER FEEDS) ──
  if (/\b(data engineer|data engineers|etl|data pipeline|pipelines)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#071A2F] via-[#0D2E52] to-[#0F172A] border border-sky-400/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-sky-300">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5 text-sky-400" />
            <span>Automated Data Pipeline</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-200 border border-sky-400/30 font-bold">
            Live Stream ✓
          </span>
        </div>
        <div className="flex items-center justify-between gap-1 bg-slate-950/65 rounded-lg p-2 border border-white/10 text-[10px] font-mono">
          <div className="bg-sky-950/80 border border-sky-500/30 rounded px-2 py-1 text-sky-200 truncate">
            Orders + GPS + Weather
          </div>
          <span className="text-sky-400 font-bold">➔</span>
          <div className="bg-indigo-950/80 border border-indigo-500/30 rounded px-2 py-1 text-indigo-200 truncate">
            Clean Pipeline
          </div>
          <span className="text-emerald-400 font-bold">➔</span>
          <div className="bg-emerald-950/80 border border-emerald-500/30 rounded px-2 py-1 text-emerald-300 font-bold shrink-0">
            Ready DB
          </div>
        </div>
      </div>
    );
  }

  // ── 7. DATA SCIENTISTS (TOPIC 2: ANALYZE PATTERNS, BUILD/EVALUATE MODELS & MONITOR ERROR) ──
  if (/\b(data scientist|data scientists)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#190D36] via-[#2B1659] to-[#0F172A] border border-purple-400/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-purple-200">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
            <span>Model Evaluation &amp; Drift Monitor</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-purple-500/25 text-purple-200 border border-purple-400/30 font-bold">
            MAE: ±1.8 min
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 bg-slate-950/65 rounded-lg p-2 border border-white/10 text-center text-[10px]">
          <div className="bg-white/5 rounded p-1.5 border border-white/10">
            <div className="text-slate-400 text-[8.5px]">1. Patterns</div>
            <div className="font-bold text-sky-300 mt-0.5">Rain + Queue</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-white/10">
            <div className="text-slate-400 text-[8.5px]">2. Train &amp; Test</div>
            <div className="font-bold text-purple-300 mt-0.5">94.6% Score</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-white/10">
            <div className="text-slate-400 text-[8.5px]">3. Post-Launch</div>
            <div className="font-bold text-emerald-300 mt-0.5">Monitor Error</div>
          </div>
        </div>
      </div>
    );
  }

  // ── 8. HUMAN RECIPE (MAKING TEA — TOPIC 32) ──
  if (/\b(recipe|tea|chai|cooking|human)\b/.test(t) && !/\b(rule-based)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#2B1805] via-[#452709] to-[#1E1B2E] border border-amber-400/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-amber-300">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span>Human Recipe (Flexible Intuition)</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-amber-500/25 text-amber-200 border border-amber-400/35 font-bold">
            English / Hindi
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 bg-slate-950/65 rounded-lg p-2 border border-amber-500/20 text-center text-[10px]">
          <div className="bg-white/5 rounded p-1.5 border border-white/10">
            <div className="text-amber-300 font-bold">1. Boil Water</div>
            <div className="text-[8.5px] text-slate-300 mt-0.5">+ Tea Leaves &amp; Milk</div>
          </div>
          <div className="bg-amber-500/15 rounded p-1.5 border border-amber-400/40">
            <div className="text-amber-200 font-bold">2. &quot;Pinch of Sugar&quot;</div>
            <div className="text-[8.5px] text-amber-300 mt-0.5">Human Guesses Qty!</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-white/10">
            <div className="text-emerald-300 font-bold">3. Ready Chai ☕</div>
            <div className="text-[8.5px] text-slate-300 mt-0.5">Context Understood</div>
          </div>
        </div>
      </div>
    );
  }

  // ── 9. COMPUTER PROGRAM (BILLING TOTAL — TOPIC 32) ──
  if (/\b(computer program|billing total|exact step)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#081A2E] via-[#0F2C4C] to-[#1E1B4B] border border-sky-400/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-sky-300">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <ExtendedTechLogo iconName="Python" className="w-3.5 h-3.5" />
            <span>Exact Python Program Execution</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-sky-500/25 text-sky-200 border border-sky-400/35 font-bold">
            Zero Guessing
          </span>
        </div>
        <div className="bg-slate-950/80 rounded-lg p-2 border border-sky-500/25 font-mono text-[10.5px] space-y-1">
          <div className="text-slate-300">
            <span className="text-sky-400">price</span> = <span className="text-amber-300">500</span>;{' '}
            <span className="text-sky-400">tax</span> = <span className="text-amber-300">0.18</span>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-1">
            <span className="text-purple-300">total = price * (1 + tax)</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
              Output: ₹590.0
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ── 10. OFFICIAL TECH LOGOS + WORD-MATCHED CONCEPT PREVIEW (Whenever tools/languages are mentioned) ──
  if (detectedLogos.length > 0 && !/\b(guesswork|without|wrong|mistake)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#13112C] via-[#1E1B4B] to-[#0F172A] border border-purple-400/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-purple-200">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>{title.replace(/^\d+[\.\)]\s*/, '')}</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-200 border border-purple-400/30 font-bold">
            Official Stack
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950/70 rounded-lg p-2 border border-white/10">
          {detectedLogos.map((logo) => (
            <div
              key={logo.id}
              className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[10.5px] font-bold shadow-2xs ${logo.badgeColor}`}
            >
              <ExtendedTechLogo iconName={logo.iconName} className="w-4 h-4 shrink-0" />
              <span>{logo.label}</span>
            </div>
          ))}
        </div>
        {(quote || keywords.length > 0) && (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-300 bg-white/5 rounded-md px-2 py-1 border border-white/10 truncate">
            <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
            <span className="truncate">{quote ? `"${quote}"` : keywords.join(' • ')}</span>
          </div>
        )}
      </div>
    );
  }

  // ── 11. GUESSWORK / WITHOUT DATA SCIENCE / MANUAL ERROR / MYTH / WRONG HABIT / RISK ──
  if (/\b(guesswork|without|wrong|mistake|bad|fail|myth|blind|manual|noisy|overfit|underfit|risk|broken|missing)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#2A0A18] via-[#3F1024] to-[#1E1B2E] border border-rose-500/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-rose-300">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>{title.replace(/^\d+[\.\)]\s*/, '')}</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-rose-500/25 text-rose-200 border border-rose-400/35 font-bold">
             Pitfall / Risk
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 bg-slate-950/65 rounded-lg px-2.5 py-2 border border-rose-500/25 text-[10.5px] font-mono">
          <div className="flex items-center gap-2 min-w-0">
            <TrendingDown className="w-4 h-4 text-rose-400 shrink-0" />
            <span className="text-rose-200 truncate">
              {quote ? `"${quote}"` : keywords[0] || 'Unverified Assumption'}
            </span>
          </div>
          <span className="text-rose-400 font-bold shrink-0">✗ Avoid</span>
        </div>
      </div>
    );
  }

  // ── 12. GUIDED BY DATA SCIENCE / VERIFIED EVIDENCE / PRO HABIT / SOLUTION / CLEAN ──
  if (/\b(guided|evidence|data-driven|verified|smart|pro habit|solution|clean|reliable|accurate|monitored|best practice)\b/.test(t)) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#062419] via-[#0A3626] to-[#0F172A] border border-emerald-500/35 p-3 text-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{title.replace(/^\d+[\.\)]\s*/, '')}</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/25 text-emerald-200 border border-emerald-400/35 font-bold">
            Verified Approach
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 bg-slate-950/65 rounded-lg px-2.5 py-2 border border-emerald-500/25 text-[10.5px] font-mono">
          <div className="flex items-center gap-2 min-w-0">
            <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-emerald-200 truncate">
              {quote ? `"${quote}"` : keywords[0] || 'Evidence-Backed Decision'}
            </span>
          </div>
          <span className="text-emerald-400 font-bold shrink-0">✓ Recommended</span>
        </div>
      </div>
    );
  }

  // ── 13. UNIVERSAL WORD-DRIVEN CONCEPT FLOW SCENE (Builds a custom visual diagram from the exact words of the card!) ──
  const themes = [
    {
      bg: 'from-[#0B1528] via-[#13284C] to-[#1E1B4B] border-sky-500/35',
      accent: 'text-sky-300',
      pillBg: 'bg-sky-500/20 text-sky-200 border-sky-400/30',
      Icon: Layers,
    },
    {
      bg: 'from-[#170F34] via-[#271854] to-[#1E1B4B] border-purple-500/35',
      accent: 'text-purple-300',
      pillBg: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
      Icon: Cpu,
    },
    {
      bg: 'from-[#06241B] via-[#0C3B2E] to-[#112233] border-emerald-500/35',
      accent: 'text-emerald-300',
      pillBg: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
      Icon: BarChart3,
    },
    {
      bg: 'from-[#271506] via-[#3E220B] to-[#1E1B2E] border-amber-500/35',
      accent: 'text-amber-300',
      pillBg: 'bg-amber-500/20 text-amber-200 border-amber-400/30',
      Icon: GitBranch,
    },
  ];
  const th = themes[cardIndex % themes.length];
  const ThIcon = th.Icon;
  const displayPills = keywords.length > 0 ? keywords : [title.replace(/^\d+[\.\)]\s*/, '')];

  return (
    <div className={`w-full rounded-xl bg-gradient-to-br ${th.bg} border p-3 text-white shadow-2xs space-y-2`}>
      <div className={`flex items-center justify-between text-[10px] font-mono ${th.accent}`}>
        <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider truncate">
          <ThIcon className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{title.replace(/^\d+[\.\)]\s*/, '')}</span>
        </span>
        <span className={`px-1.5 py-0.5 rounded border font-bold shrink-0 ${th.pillBg}`}>
          Concept #{cardIndex + 1}
        </span>
      </div>
      <div className="bg-slate-950/65 rounded-lg p-2 border border-white/10 space-y-1.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {displayPills.map((kw, kIdx) => (
            <React.Fragment key={kIdx}>
              <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10.5px] font-bold text-white truncate max-w-[180px]">
                {kw}
              </span>
              {kIdx < displayPills.length - 1 && (
                <span className={`text-[11px] font-bold ${th.accent}`}>➔</span>
              )}
            </React.Fragment>
          ))}
        </div>
        {quote && (
          <div className="text-[10px] font-mono text-amber-200/90 truncate pt-0.5">
            Example: &quot;{quote}&quot;
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Rich, word-matched mini visual badge for every step in a `flow` block
 * (e.g. "1. Capture Signals", "2. Clean & Combine", "3. Compare History", "4. Estimate ETA", "5. Check & Improve")
 */
export const FlowStepVisualBadge: React.FC<{
  title: string;
  bodyEn: string;
  stepIndex: number;
  isActive: boolean;
}> = ({ title, bodyEn, stepIndex, isActive }) => {
  const t = `${title} ${bodyEn}`.toLowerCase();
  const logos = detectMentionedTechLogos(title, bodyEn);

  // If the step explicitly mentions an official tool (Python, SQL, Excel, Power BI, Pandas, etc.), show its official logo!
  if (logos.length > 0) {
    return (
      <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-2xs">
        {logos.slice(0, 2).map((l) => (
          <ExtendedTechLogo key={l.id} iconName={l.iconName} className="w-5 h-5" />
        ))}
      </div>
    );
  }

  const badgeThemes = [
    { bg: 'bg-sky-100 border-sky-300 text-sky-700', activeBg: 'bg-sky-600 text-white border-sky-600' },
    { bg: 'bg-amber-100 border-amber-300 text-amber-700', activeBg: 'bg-amber-600 text-white border-amber-600' },
    { bg: 'bg-purple-100 border-purple-300 text-purple-700', activeBg: 'bg-purple-600 text-white border-purple-600' },
    { bg: 'bg-emerald-100 border-emerald-300 text-emerald-700', activeBg: 'bg-emerald-600 text-white border-emerald-600' },
    { bg: 'bg-rose-100 border-rose-300 text-rose-700', activeBg: 'bg-rose-600 text-white border-rose-600' },
  ];
  const th = badgeThemes[stepIndex % badgeThemes.length];
  const cls = 'w-5 h-5';

  let iconNode: React.ReactNode = <Sparkles className={cls} />;
  let tagText = 'STEP';

  if (/\b(signal|sensor|capture|gps|weather|live)\b/.test(t)) {
    iconNode = <Radio className={cls} />;
    tagText = 'LIVE SIGNALS';
  } else if (/\b(clean|fix|missing|broken|join|combine|prep)\b/.test(t)) {
    iconNode = <Wand2 className={cls} />;
    tagText = 'CLEAN & JOIN';
  } else if (/\b(history|past|compare|rainy|previous)\b/.test(t)) {
    iconNode = <History className={cls} />;
    tagText = 'PAST LOGS';
  } else if (/\b(eta|estimate|time|minute|window|predict|forecast)\b/.test(t)) {
    iconNode = <Clock className={cls} />;
    tagText = 'PREDICT ETA';
  } else if (/\b(check|improve|verify|output|result|monitor|share)\b/.test(t)) {
    iconNode = <CheckCircle2 className={cls} />;
    tagText = 'VERIFY';
  } else if (/\b(goal|understand|question|target|clarify)\b/.test(t)) {
    iconNode = <Target className={cls} />;
    tagText = 'GOAL';
  } else if (/\b(input|raw|gather|collect|record|source)\b/.test(t)) {
    iconNode = <Database className={cls} />;
    tagText = 'RAW DATA';
  } else if (/\b(explore|pattern|chart|table|average|trend)\b/.test(t)) {
    iconNode = <BarChart3 className={cls} />;
    tagText = 'PATTERNS';
  } else if (/\b(process|calculate|rule|model|analyze|train)\b/.test(t)) {
    iconNode = <Cpu className={cls} />;
    tagText = 'PROCESS';
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[10px] font-extrabold tracking-wider uppercase shadow-2xs transition-colors ${
        isActive ? th.activeBg : th.bg
      }`}
    >
      {iconNode}
      <span>{tagText}</span>
    </div>
  );
};
