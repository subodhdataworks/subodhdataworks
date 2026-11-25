import React from 'react';

export type VisualizationCategory =
  | 'computer-fundamentals'
  | 'python-variables'
  | 'python-data-types'
  | 'python-loops'
  | 'python-conditions'
  | 'python-functions'
  | 'lists-and-dictionaries'
  | 'pandas-dataframes'
  | 'excel-formulas'
  | 'excel-features'
  | 'sql-filtering'
  | 'sql-joins'
  | 'sql-aggregation'
  | 'sql-window-functions'
  | 'power-query'
  | 'power-bi'
  | 'data-modeling'
  | 'dax'
  | 'generative-ai'
  | 'statistics'
  | 'eda'
  | 'business-reporting'
  | 'projects-portfolio'
  | 'interview-preparation'
  | 'capstone'
  | 'generic-structured';

export interface VisualOptionProps {
  title: string;
  subtitle?: string;
  category?: VisualizationCategory;
  iconType?: string;
  topicTitle?: string;
  topicKey?: string;
  stepNumber?: number;
}

/**
 * Automatically resolves the most precise visualization category based on the option title,
 * topic context, and semantics.
 */
export function resolveOptionCategory(
  title: string,
  subtitle: string = '',
  topicTitle: string = '',
  topicKey: string = ''
): VisualizationCategory {
  const t = title.toLowerCase();
  const s = subtitle.toLowerCase();
  const top = topicTitle.toLowerCase();
  const tk = String(topicKey || '');
  const combined = `${t} ${s} ${top}`;

  // 1. Excel Features (WordArt, Page Layout, PivotTable, Ribbons, conditional formatting, data validation)
  if (
    t.includes('wordart') ||
    t.includes('page layout') ||
    t.includes('pivottable') ||
    t.includes('pivot table') ||
    t.includes('margins') ||
    t.includes('conditional formatting') ||
    t.includes('data validation') ||
    t.includes('freeze panes') ||
    t.includes('split panes') ||
    t.includes('text box') ||
    (t.includes('insert') && t.includes('table')) ||
    (top.includes('excel') && (t.includes('layout') || t.includes('ribbon') || t.includes('format')))
  ) {
    return 'excel-features';
  }

  // 2. Excel Formulas
  if (
    title.startsWith('=') ||
    t.includes('xlookup(') ||
    t.includes('vlookup(') ||
    t.includes('sum(') ||
    t.includes('average(') ||
    t.includes('countif(') ||
    t.includes('sumif(') ||
    t.includes('if(') ||
    t.includes('index(') ||
    t.includes('match(') ||
    t.includes('concat(') ||
    t.includes('textjoin(')
  ) {
    return 'excel-formulas';
  }

  // 3. Power Query
  if (
    combined.includes('power query') ||
    t.includes('applied steps') ||
    t.includes('unpivot') ||
    t.includes('split column') ||
    t.includes('merge queries') ||
    t.includes('append queries')
  ) {
    return 'power-query';
  }

  // 4. DAX
  if (
    t.includes('calculate(') ||
    t.includes('sumx(') ||
    t.includes('related(') ||
    t.includes('filter(') ||
    t.includes('dax') ||
    t.includes('measure') ||
    t.includes('time intelligence')
  ) {
    return 'dax';
  }

  // 5. Data Modeling
  if (
    combined.includes('star schema') ||
    combined.includes('data modeling') ||
    t.includes('relationship') ||
    t.includes('cardinality') ||
    t.includes('fact table') ||
    t.includes('dimension table') ||
    t.includes('primary key') ||
    t.includes('foreign key') ||
    t.includes('schema')
  ) {
    return 'data-modeling';
  }

  // 6. Power BI Visuals & Dashboards
  if (
    combined.includes('power bi') ||
    t.includes('pbix') ||
    t.includes('slicer') ||
    t.includes('kpi card') ||
    t.includes('matrix visual') ||
    t.includes('drill-through') ||
    t.includes('dashboard') ||
    t.includes('report canvas')
  ) {
    return 'power-bi';
  }

  // 7. SQL Window Functions
  if (
    t.includes('row_number(') ||
    t.includes('rank(') ||
    t.includes('dense_rank(') ||
    t.includes('partition by') ||
    t.includes('lead(') ||
    t.includes('lag(') ||
    t.includes('over (')
  ) {
    return 'sql-window-functions';
  }

  // 8. SQL Joins
  if (
    t.includes('inner join') ||
    t.includes('left join') ||
    t.includes('right join') ||
    t.includes('full outer join') ||
    t.includes('cross join') ||
    (t.includes('join') && !t.includes('textjoin'))
  ) {
    return 'sql-joins';
  }

  // 9. SQL Aggregation
  if (
    t.includes('group by') ||
    t.includes('having') ||
    t.includes('count(') ||
    t.includes('sum(') ||
    t.includes('avg(') ||
    t.includes('min(') ||
    t.includes('max(')
  ) {
    return 'sql-aggregation';
  }

  // 10. SQL Filtering & Queries
  if (
    t.includes('select ') ||
    t.includes('from ') ||
    t.includes('where ') ||
    t.includes('order by') ||
    t.includes('limit ') ||
    t.includes('distinct') ||
    t.includes('database') ||
    t.includes('sql')
  ) {
    return 'sql-filtering';
  }

  // 11. Generative AI
  if (
    /\b(ai|genai|llm|gpt|token|tokens|prompt|prompts|hallucination|agent|agents)\b/i.test(combined) ||
    combined.includes('artificial intelligence') ||
    combined.includes('few-shot') ||
    combined.includes('zero-shot') ||
    combined.includes('system prompt')
  ) {
    return 'generative-ai';
  }

  // 12. Python Variables
  if (
    t.includes('variable') ||
    (t.includes('=') && !t.includes('==') && !t.includes('select') && !t.startsWith('=')) ||
    t.includes('assignment') ||
    t.includes('memory address')
  ) {
    return 'python-variables';
  }

  // 13. Python Data Types
  if (
    t === 'int' ||
    t === 'str' ||
    t === 'bool' ||
    t === 'float' ||
    t.includes('(integer)') ||
    t.includes('(string)') ||
    t.includes('(boolean)') ||
    t.includes('(float)') ||
    t.includes('type conversion') ||
    t.includes('int(') ||
    t.includes('str(')
  ) {
    return 'python-data-types';
  }

  // 14. Python Loops
  if (
    t.includes('for ') ||
    t.includes('while ') ||
    t.includes('loop') ||
    t.includes('iteration') ||
    t.includes('range(') ||
    t.includes('break') ||
    t.includes('continue')
  ) {
    return 'python-loops';
  }

  // 15. Python Conditions
  if (
    t.includes('if ') ||
    t.includes('elif') ||
    t.includes('else:') ||
    t.includes('==') ||
    t.includes('!=') ||
    t.includes('condition') ||
    t.includes('boolean expression')
  ) {
    return 'python-conditions';
  }

  // 16. Python Functions
  if (
    t.includes('def ') ||
    t.includes('function') ||
    t.includes('return ') ||
    t.includes('parameter') ||
    t.includes('argument') ||
    t.includes('lambda')
  ) {
    return 'python-functions';
  }

  // 17. Lists and Dictionaries
  if (
    t.includes('list') ||
    t.includes('dictionary') ||
    t.includes('dict') ||
    t.includes('array') ||
    t.includes('keys()') ||
    t.includes('values()') ||
    t.includes('append(') ||
    t.includes('[')
  ) {
    return 'lists-and-dictionaries';
  }

  // 18. Pandas DataFrames
  if (
    t.includes('dataframe') ||
    t.includes('series') ||
    t.includes('df.') ||
    t.includes('read_csv') ||
    t.includes('groupby') ||
    t.includes('dropna') ||
    t.includes('fillna') ||
    t.includes('pandas')
  ) {
    return 'pandas-dataframes';
  }

  // 19. Statistics
  if (
    combined.includes('statistic') ||
    combined.includes('distribution') ||
    combined.includes('percentile') ||
    combined.includes('quartile') ||
    combined.includes('standard deviation') ||
    combined.includes('normal distribution') ||
    combined.includes('variance') ||
    combined.includes('hypothesis')
  ) {
    return 'statistics';
  }

  // 20. EDA
  if (
    combined.includes('eda') ||
    combined.includes('correlation') ||
    combined.includes('scatter') ||
    combined.includes('histogram') ||
    combined.includes('outlier') ||
    combined.includes('exploratory')
  ) {
    return 'eda';
  }

  // 21. Business Reporting
  if (
    combined.includes('reporting') ||
    combined.includes('stakeholder') ||
    combined.includes('executive summary') ||
    combined.includes('kpi') ||
    combined.includes('recommendation')
  ) {
    return 'business-reporting';
  }

  // 22. Interview Preparation
  if (
    combined.includes('interview') ||
    combined.includes('star framework') ||
    combined.includes('mock interview') ||
    combined.includes('hr question') ||
    combined.includes('technical screen')
  ) {
    return 'interview-preparation';
  }

  // 23. Capstone
  if (
    combined.includes('capstone') ||
    combined.includes('end-to-end') ||
    combined.includes('production pipeline') ||
    tk.startsWith('41.')
  ) {
    return 'capstone';
  }

  // 24. Projects & Portfolio
  if (
    combined.includes('project') ||
    combined.includes('portfolio') ||
    combined.includes('case study') ||
    tk.startsWith('38.') ||
    tk.startsWith('39.')
  ) {
    return 'projects-portfolio';
  }

  // 25. Computer & Data Fundamentals
  if (
    combined.includes('hardware') ||
    combined.includes('binary') ||
    combined.includes('data vs info') ||
    combined.includes('operating system') ||
    combined.includes('fundamentals') ||
    combined.includes('printer') ||
    combined.includes('installer') ||
    tk.startsWith('1.') ||
    tk.startsWith('2.')
  ) {
    return 'computer-fundamentals';
  }

  return 'generic-structured';
}

/**
 * Universal Dynamic Visualization Registry Component
 * Renders high-fidelity, neutral-prior-to-submission visual illustrations for all 25 categories!
 */
export const UniversalOptionVisual: React.FC<VisualOptionProps> = ({
  title,
  subtitle = '',
  category,
  iconType,
  topicTitle = '',
  topicKey = '',
}) => {
  const resolvedCategory = category || resolveOptionCategory(title, subtitle, topicTitle, topicKey);
  const t = title.toLowerCase();

  // ═══════════════════════════════════════════════════════════════════════════
  // 1. EXCEL FEATURES (WordArt, Page Layout, PivotTable, Ribbons, Dialogs)
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'excel-features') {
    const isWordArt = t.includes('wordart') || t.includes('text box');
    const isPageLayout = t.includes('page layout') || t.includes('margin') || t.includes('print');
    const isPivot = t.includes('pivot') || (!isWordArt && !isPageLayout);

    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        {/* Excel Green Header Ribbon */}
        <div className="w-full h-7 bg-[#107C41] flex items-center justify-between px-2 text-white">
          <div className="flex items-center gap-1.5 text-[11px] font-bold">
            <span className="px-1.5 py-0.5 rounded-xs bg-[#0B5C2F] text-[10.5px] font-black">X</span>
            <span className={`px-1 py-0.5 rounded-xs ${isPivot || isWordArt ? 'bg-white/20' : 'opacity-80'}`}>Insert</span>
            <span className={`px-1 py-0.5 rounded-xs ${isPageLayout ? 'bg-white/20' : 'opacity-80'}`}>Page Layout</span>
            <span className="opacity-70 hidden sm:inline">Formulas</span>
            <span className="opacity-70 hidden sm:inline">Data</span>
          </div>
          <span className="text-[10.5px] font-semibold opacity-90 truncate max-w-[90px]">Excel Workbook</span>
        </div>

        {/* Ribbon Tools Sub-bar */}
        <div className="w-full h-7 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center px-2 gap-3 text-[10.5px] font-semibold text-[#475569]">
          {isWordArt ? (
            <>
              <span className="text-[#6D28D9] font-black underline flex items-center gap-0.5">
                <span className="text-[11px]">A</span> WordArt
              </span>
              <span>Text Box</span>
              <span>Shapes</span>
            </>
          ) : isPageLayout ? (
            <>
              <span className="text-[#0284C7] font-black underline">Margins</span>
              <span>Orientation</span>
              <span>Size</span>
              <span>Print Area</span>
            </>
          ) : (
            <>
              <span className="text-[#107C41] font-black underline">PivotTable</span>
              <span>Table</span>
              <span>Recommended</span>
            </>
          )}
        </div>

        {/* Main Canvas Illustration Area */}
        <div className="flex-1 bg-white p-3 flex items-center justify-center relative overflow-hidden">
          {isWordArt ? (
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <div className="px-4 py-2 rounded-md border-2 border-dashed border-[#A855F7] bg-[#FAF5FF] shadow-2xs">
                <span className="text-[18px] sm:text-[20px] font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#EC4899] italic">
                  Sales Report
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#64748B]">Stylized Header Text Effect</span>
            </div>
          ) : isPageLayout ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-1">
              <div className="w-full max-w-[175px] h-24 border-2 border-dashed border-[#64748B] rounded-sm bg-[#F8FAFC] p-2 flex flex-col justify-between">
                <div className="flex justify-between text-[10.5px] font-semibold text-[#475569]">
                  <span>Top: 1.0"</span>
                  <span>Header</span>
                </div>
                <div className="w-full text-center text-[9.5px] font-bold text-[#334155]">
                  [ Page Setup: Portrait ]
                </div>
                <div className="flex justify-between text-[10.5px] font-semibold text-[#475569]">
                  <span>Left: 0.75"</span>
                  <span>Right: 0.75"</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-center">
              <div className="border border-[#CBD5E1] rounded-sm overflow-hidden text-[11px] sm:text-[9.5px]">
                <div className="grid grid-cols-2 bg-[#E2E8F0] font-black text-[#1E293B] px-2 py-1 border-b border-[#CBD5E1]">
                  <span>Row Labels</span>
                  <span className="text-right">Sum of Sales</span>
                </div>
                <div className="grid grid-cols-2 px-2 py-1 border-b border-slate-100 text-[#475569]">
                  <span>Store A</span>
                  <span className="text-right font-mono">₹2,50,000</span>
                </div>
                <div className="grid grid-cols-2 px-2 py-1 border-b border-slate-100 text-[#475569]">
                  <span>Store B</span>
                  <span className="text-right font-mono">₹1,80,000</span>
                </div>
                <div className="grid grid-cols-2 px-2 py-1 bg-[#F1F5F9] font-bold text-[#1E293B]">
                  <span>Grand Total</span>
                  <span className="text-right font-mono">₹4,30,000</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. EXCEL FORMULAS (=XLOOKUP, =SUM, =IF, etc.)
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'excel-formulas') {
    const displayFormula = title.length > 24 ? title.slice(0, 22) + '...' : title;
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#107C41] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="flex items-center gap-1">
            <span className="bg-[#0B5C2F] px-1 rounded-xs">fx</span> Formula Bar
          </span>
          <span className="text-[10.5px] opacity-80 font-mono">Cell: D2</span>
        </div>
        <div className="w-full bg-[#F1F5F9] border-b border-[#CBD5E1] px-2 py-1 flex items-center gap-1.5">
          <span className="text-[10.5px] font-bold text-[#107C41] italic font-serif">fx</span>
          <span className="text-[11px] font-mono font-bold text-[#0F172A] bg-white px-2 py-0.5 rounded-xs border border-[#CBD5E1] w-full truncate">
            {displayFormula}
          </span>
        </div>
        <div className="flex-1 p-2 flex flex-col justify-center">
          <div className="border border-[#CBD5E1] rounded-xs text-[10px]">
            <div className="grid grid-cols-4 bg-[#E2E8F0] font-bold text-[#334155] px-1 py-0.5 text-center">
              <span>A</span>
              <span>B</span>
              <span>C</span>
              <span>D (Result)</span>
            </div>
            <div className="grid grid-cols-4 px-1 py-1 text-center font-mono text-[#334155]">
              <span>101</span>
              <span>Prod A</span>
              <span>450</span>
              <span className="font-bold text-[#0F766E] bg-[#CCFBF1] rounded-xs">Formula</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. SQL FILTERING (WHERE, SELECT, LIMIT)
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'sql-filtering') {
    const displayTitle = title.length > 22 ? title.slice(0, 20) + '...' : title;
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#1E293B] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="font-mono">SQL :: Query Filter</span>
          <span className="text-[10.5px] text-[#38BDF8] font-mono">pg_catalog</span>
        </div>
        <div className="bg-[#0F172A] px-2 py-1 text-[10.5px] font-mono text-[#38BDF8] truncate border-b border-[#334155]">
          SELECT * WHERE {displayTitle}
        </div>
        <div className="flex-1 p-2 flex items-center justify-between gap-1 text-[10px]">
          <div className="flex-1 border border-[#E2E8F0] rounded-xs p-1">
            <span className="font-bold text-[#64748B] block mb-0.5">Initial: 500 rows</span>
            <div className="h-1.5 w-full bg-[#E2E8F0] rounded-xs mb-1" />
            <div className="h-1.5 w-3/4 bg-[#E2E8F0] rounded-xs" />
          </div>
          <span className="text-[#0284C7] font-bold">→</span>
          <div className="flex-1 border border-[#38BDF8] rounded-xs p-1 bg-[#F0F9FF]">
            <span className="font-bold text-[#0369A1] block mb-0.5">Filtered Records</span>
            <div className="h-1.5 w-full bg-[#38BDF8] rounded-xs mb-1" />
            <div className="h-1.5 w-2/3 bg-[#38BDF8] rounded-xs" />
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. SQL JOINS (INNER, LEFT, RIGHT, FULL)
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'sql-joins') {
    const isLeft = t.includes('left');
    const isRight = t.includes('right');
    const isInner = t.includes('inner') || (!isLeft && !isRight);
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#1E293B] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="font-mono">SQL :: Table Relationships</span>
          <span className="text-[10.5px] text-[#A78BFA] font-mono">PK ↔ FK</span>
        </div>
        <div className="flex-1 p-2 flex items-center justify-center gap-3">
          <svg className="w-28 h-14" viewBox="0 0 120 60" fill="none">
            {/* Table A Circle */}
            <circle
              cx="42"
              cy="30"
              r="24"
              fill={isLeft ? "#C4B5FD" : isInner ? "#EDE9FE" : "#F1F5F9"}
              stroke="#6D28D9"
              strokeWidth="1.5"
              fillOpacity={isLeft ? "0.7" : "0.5"}
            />
            {/* Table B Circle */}
            <circle
              cx="78"
              cy="30"
              r="24"
              fill={isRight ? "#C4B5FD" : isInner ? "#EDE9FE" : "#F1F5F9"}
              stroke="#6D28D9"
              strokeWidth="1.5"
              fillOpacity={isRight ? "0.7" : "0.5"}
            />
            {/* Overlap Intersect */}
            <path
              d="M60 14.5 C66 20 66 40 60 45.5 C54 40 54 20 60 14.5 Z"
              fill={isInner || isLeft || isRight ? "#7C3AED" : "none"}
              fillOpacity="0.85"
            />
            <text x="25" y="33" fill="#1E1B4B" fontSize="7" fontWeight="bold">Orders</text>
            <text x="75" y="33" fill="#1E1B4B" fontSize="7" fontWeight="bold">Users</text>
          </svg>
          <div className="text-[10.5px] text-[#475569] font-medium leading-tight">
            <span className="font-bold text-[#6D28D9] block">{title}</span>
            <span>Matched on key id</span>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 5. SQL AGGREGATION & WINDOW FUNCTIONS
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'sql-aggregation' || resolvedCategory === 'sql-window-functions') {
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#1E293B] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="font-mono">SQL :: Aggregation Engine</span>
          <span className="text-[10.5px] text-[#34D399] font-mono">GROUP BY</span>
        </div>
        <div className="flex-1 p-2 flex items-center justify-around text-[10.5px]">
          <div className="border border-[#CBD5E1] rounded-xs p-1 text-center bg-[#F8FAFC]">
            <span className="font-bold text-[#475569] block">Category A</span>
            <span className="font-mono text-[#059669] font-bold text-[11px]">SUM: 420</span>
          </div>
          <div className="border border-[#CBD5E1] rounded-xs p-1 text-center bg-[#F8FAFC]">
            <span className="font-bold text-[#475569] block">Category B</span>
            <span className="font-mono text-[#059669] font-bold text-[11px]">SUM: 680</span>
          </div>
          <div className="border border-[#CBD5E1] rounded-xs p-1 text-center bg-[#F8FAFC]">
            <span className="font-bold text-[#475569] block">Rank #1</span>
            <span className="font-mono text-[#7C3AED] font-bold text-[11px]">Partition</span>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 6. POWER BI & DAX
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'power-bi' || resolvedCategory === 'dax' || resolvedCategory === 'data-modeling') {
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#18181B] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="flex items-center gap-1 text-[#F2C811]">
            <span className="w-2 h-2 rounded-xs bg-[#F2C811]" /> Power BI Canvas
          </span>
          <span className="text-[10px] text-[#A1A1AA] font-mono">Report.pbix</span>
        </div>
        <div className="flex-1 p-2 grid grid-cols-3 gap-1.5 items-center">
          <div className="border border-[#FDE047] rounded-xs p-1 bg-[#FEFCE8] text-center">
            <span className="text-[9.5px] font-bold text-[#854D0E] block">KPI METRIC</span>
            <span className="text-[10px] font-black text-[#1E293B] font-mono">$184K</span>
          </div>
          <div className="border border-[#E4E4E7] rounded-xs p-1 bg-[#FAFAFA] flex flex-col justify-end h-14">
            <div className="flex items-end justify-around h-10 w-full">
              <div className="w-1.5 h-4 bg-[#F2C811] rounded-xs" />
              <div className="w-1.5 h-7 bg-[#F59E0B] rounded-xs" />
              <div className="w-1.5 h-9 bg-[#D97706] rounded-xs" />
            </div>
            <span className="text-[9.5px] text-center text-[#71717A] mt-0.5">Bar Visual</span>
          </div>
          <div className="border border-[#E4E4E7] rounded-xs p-1 bg-[#FAFAFA] text-center">
            <span className="text-[9.5px] font-bold text-[#71717A] block">SLICER</span>
            <div className="w-full bg-[#F2C811]/30 text-[#854D0E] text-[9.5px] font-bold py-0.5 rounded-xs mt-1">
              Active Region
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 7. POWER QUERY
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'power-query') {
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#0369A1] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span>Power Query Editor</span>
          <span className="text-[10px] text-[#BAE6FD]">ETL Pipeline</span>
        </div>
        <div className="flex-1 flex">
          <div className="w-1/3 bg-[#F8FAFC] border-r border-[#E2E8F0] p-1 text-[9.5px] text-[#475569] space-y-0.5">
            <span className="font-bold text-[#0369A1] block">APPLIED STEPS</span>
            <span className="block truncate">1. Source</span>
            <span className="block truncate">2. Filter Rows</span>
            <span className="block font-bold text-[#0284C7] truncate">3. Transform</span>
          </div>
          <div className="flex-1 p-1 flex flex-col justify-center text-[10px]">
            <div className="border border-[#E2E8F0] rounded-xs">
              <div className="grid grid-cols-2 bg-[#F1F5F9] font-bold text-[#334155] px-1 py-0.5">
                <span>Column 1</span>
                <span>Column 2</span>
              </div>
              <div className="grid grid-cols-2 px-1 py-0.5 text-[#475569]">
                <span>Cleaned</span>
                <span>Typed Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 8. GENERATIVE AI & LLMS
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'generative-ai') {
    const displayTitle = title.length > 22 ? title.slice(0, 20) + '...' : title;
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#2E1065] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="flex items-center gap-1 text-[#C084FC]">
            <span>✦</span> AI Intelligence Studio
          </span>
          <span className="text-[10px] text-[#DDD6FE]">LLM Context</span>
        </div>
        <div className="flex-1 p-2 flex flex-col justify-between">
          <div className="border border-[#DDD6FE] rounded-xs bg-[#FAF5FF] p-1 text-[10.5px]">
            <span className="font-bold text-[#6D28D9] block text-[9.5px]">PROMPT INPUT</span>
            <span className="font-mono text-[#4C1D95] truncate block">{displayTitle}</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-[#64748B]">
            <span>Tokens: 32</span>
            <span className="px-1.5 py-0.5 rounded-full bg-[#EDE9FE] text-[#6D28D9] font-bold">
              Structured Output
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 9. PYTHON VARIABLES (Memory Box, Pointer, Stored Value)
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'python-variables') {
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#1E1B4B] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="font-mono">Python :: Variable Memory</span>
          <span className="text-[10.5px] text-[#A78BFA] font-mono">0x7ffee4</span>
        </div>
        <div className="flex-1 p-2 flex items-center justify-around">
          <div className="border border-[#7C3AED] rounded-md p-1.5 bg-[#FAF5FF] text-center w-20">
            <span className="text-[9.5px] font-bold text-[#6D28D9] block">IDENTIFIER</span>
            <span className="text-[11px] font-black font-mono text-[#1E1B4B]">
              {title.includes('=') ? title.split('=')[0].trim() : title}
            </span>
          </div>
          <span className="text-[12px] font-black text-[#7C3AED]">←</span>
          <div className="border border-[#10B981] rounded-md p-1.5 bg-[#ECFDF5] text-center w-20">
            <span className="text-[9.5px] font-bold text-[#059669] block">STORED VALUE</span>
            <span className="text-[11px] font-black font-mono text-[#064E3B]">
              {title.includes('=') ? title.split('=')[1].trim() : 'value'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 10. PYTHON DATA TYPES (<class 'int'>, <class 'str'>, etc.)
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'python-data-types') {
    const isInt = t.startsWith('int') || t.includes('integer');
    const isStr = t.startsWith('str') || t.includes('string');
    const isBool = t.startsWith('bool') || t.includes('boolean');

    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#1E1B4B] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="font-mono">Python :: Data Type</span>
          <span className="text-[10.5px] text-[#38BDF8] font-mono">type()</span>
        </div>
        <div className="flex-1 p-2 flex items-center justify-center gap-3">
          <div className="border border-[#64748B] rounded-md p-2 bg-[#F8FAFC] text-center">
            <span className="text-[10px] font-bold text-[#64748B] block">PYTHON CLASS</span>
            <span className="text-[11px] font-black font-mono text-[#0F172A]">
              {isInt ? "<class 'int'>" : isStr ? "<class 'str'>" : isBool ? "<class 'bool'>" : title}
            </span>
          </div>
          <div className="text-[10.5px] text-[#475569] leading-tight">
            <span className="font-bold text-[#6D28D9] block">{title}</span>
            <span>{isInt ? 'Whole numbers' : isStr ? 'Text in quotes' : isBool ? 'True or False' : 'Representation'}</span>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 11. PYTHON CONDITIONS & LOOPS
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'python-conditions' || resolvedCategory === 'python-loops') {
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#1E1B4B] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="font-mono">Python :: Control Flow</span>
          <span className="text-[10.5px] text-[#F59E0B] font-mono">Branching</span>
        </div>
        <div className="flex-1 p-1.5 flex items-center justify-around text-[10.5px]">
          <div className="border border-[#F59E0B] rounded-xs px-2 py-1 bg-[#FFFBEB] font-mono font-bold text-[#B45309] text-center">
            Condition?
          </div>
          <div className="flex flex-col gap-1 text-[10px]">
            <span className="px-1.5 py-0.5 rounded-xs bg-[#ECFDF5] text-[#059669] font-bold">True ➔ Branch A</span>
            <span className="px-1.5 py-0.5 rounded-xs bg-[#FEF2F2] text-[#DC2626] font-bold">False ➔ Branch B</span>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 12. PANDAS DATAFRAMES & NUMPY
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'pandas-dataframes' || resolvedCategory === 'lists-and-dictionaries') {
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#047857] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="font-mono">pandas :: DataFrame</span>
          <span className="text-[10.5px] text-[#A7F3D0] font-mono">2D Tabular Array</span>
        </div>
        <div className="flex-1 p-1.5 flex flex-col justify-center text-[10px]">
          <div className="border border-[#CBD5E1] rounded-xs overflow-hidden">
            <div className="grid grid-cols-3 bg-[#E2E8F0] font-bold text-[#1E293B] px-1 py-0.5">
              <span>idx</span>
              <span>col_a</span>
              <span>col_b</span>
            </div>
            <div className="grid grid-cols-3 px-1 py-0.5 text-[#475569] font-mono">
              <span>0</span>
              <span>100</span>
              <span>"Item 1"</span>
            </div>
            <div className="grid grid-cols-3 px-1 py-0.5 text-[#475569] font-mono bg-[#F8FAFC]">
              <span>1</span>
              <span>250</span>
              <span>"Item 2"</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 13. BUSINESS REPORTING, STATISTICS & EDA
  // ═══════════════════════════════════════════════════════════════════════════
  if (resolvedCategory === 'business-reporting' || resolvedCategory === 'statistics' || resolvedCategory === 'eda') {
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#0F172A] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="font-sans text-[#38BDF8]">Executive Insights Deck</span>
          <span className="text-[10px] text-[#475569]">Analytics</span>
        </div>
        <div className="flex-1 p-2 flex items-center justify-between gap-2">
          <div className="border border-[#E2E8F0] rounded-xs p-1.5 bg-[#F8FAFC] flex-1 text-center">
            <span className="text-[9.5px] font-bold text-[#64748B] block">METRIC DELTA</span>
            <span className="text-[12px] font-black text-[#0F172A] font-mono">+18.4%</span>
          </div>
          <div className="border border-[#38BDF8] rounded-xs p-1.5 bg-[#F0F9FF] flex-1 text-center">
            <span className="text-[9.5px] font-bold text-[#0369A1] block">ACTION</span>
            <span className="text-[10.5px] font-semibold text-[#0C4A6E] truncate block">{title}</span>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 14. PROJECTS, CAPSTONE & INTERVIEW PREP
  // ═══════════════════════════════════════════════════════════════════════════
  if (
    resolvedCategory === 'projects-portfolio' ||
    resolvedCategory === 'capstone' ||
    resolvedCategory === 'interview-preparation'
  ) {
    return (
      <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
        <div className="w-full h-7 bg-[#064E3B] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
          <span className="text-[#A7F3D0]">Portfolio & Technical Deliverable</span>
          <span className="text-[10px] text-[#6EE7B7]">Production</span>
        </div>
        <div className="flex-1 p-2 flex items-center justify-between gap-1.5 text-[10px]">
          <div className="border border-[#CBD5E1] rounded-xs p-1 flex-1 text-center bg-[#F8FAFC]">
            <span className="font-bold text-[#065F46] block">STEP</span>
            <span className="font-semibold text-[#334155] truncate block">{title}</span>
          </div>
          <span className="text-[#059669] font-bold">➔</span>
          <div className="border border-[#10B981] rounded-xs p-1 flex-1 text-center bg-[#ECFDF5]">
            <span className="font-bold text-[#047857] block">DELIVERABLE</span>
            <span className="font-semibold text-[#065F46] block">Documented</span>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 15. DEFAULT / COMPUTER FUNDAMENTALS / FALLBACK STRUCTURED DIAGRAM
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <div className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl bg-white border border-[#CBD5E1] relative overflow-hidden flex flex-col shadow-2xs">
      <div className="w-full h-7 bg-[#334155] flex items-center justify-between px-2 text-white text-[10.5px] font-bold">
        <span>Concept Architecture</span>
        <span className="text-[10px] text-[#CBD5E1]">Factual Preview</span>
      </div>
      <div className="flex-1 p-2 flex items-center justify-center gap-2">
        <div className="border border-[#CBD5E1] rounded-xs p-2 bg-[#F8FAFC] text-center w-full">
          <span className="text-[10px] font-bold text-[#64748B] block">SYSTEM ELEMENT</span>
          <span className="text-[9.5px] font-black text-[#1E293B] truncate block mt-0.5">{title}</span>
          <span className="text-[9.5px] text-[#64748B] block mt-0.5">Operational Interface</span>
        </div>
      </div>
    </div>
  );
};
