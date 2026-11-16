import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic49VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic49ReusableCodeProjectsLesson: React.FC<Topic49VisualLessonProps> = ({
  activeSectionId,
  onSectionRectChange,
  onScrollSettled,
  language: externalLanguage = 'english',
  onLanguageChange,
}) => {
  const [currentLang, setCurrentLang] = useState<'hindi' | 'english'>(externalLanguage);
  const [activeProject, setActiveProject] = useState<'project1' | 'project2'>('project1');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  useEffect(() => {
    if (externalLanguage && externalLanguage !== currentLang) {
      setCurrentLang(externalLanguage);
    }
  }, [externalLanguage]);

  const containerRef = useRef<HTMLDivElement>(null);
  const secTitleRef = useRef<HTMLDivElement>(null);
  const secReusablePrinciplesRef = useRef<HTMLDivElement>(null);
  const secProject1Ref = useRef<HTMLDivElement>(null);
  const secProject2Ref = useRef<HTMLDivElement>(null);
  const secRevisionTableRef = useRef<HTMLDivElement>(null);
  const secQuizChallengeRef = useRef<HTMLDivElement>(null);
  const secNextModuleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec49-title': secTitleRef,
      'sec49-reusable-principles': secReusablePrinciplesRef,
      'sec49-project1': secProject1Ref,
      'sec49-project2': secProject2Ref,
      'sec49-revision-table': secRevisionTableRef,
      'sec49-quiz-challenge': secQuizChallengeRef,
      'sec49-next-module': secNextModuleRef,
    };

    const targetEl = refMap[activeSectionId]?.current;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const timer = setTimeout(() => {
        if (containerRef.current) {
          const cRect = containerRef.current.getBoundingClientRect();
          const tRect = targetEl.getBoundingClientRect();
          onSectionRectChange?.({
            top: tRect.top - cRect.top,
            left: tRect.left - cRect.left,
            width: tRect.width,
            height: tRect.height,
          });
        }
        onScrollSettled?.();
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

    const isHi = currentLang === 'hindi';

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic49-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={7}
        moduleName="Functions, Modules & Files"
        topicNum={9}
        totalTopicsInModule={9}
        englishTitle="Writing Reusable Code and Practical Projects"
        hindiTitle="Writing Reusable Code and Practical Projects"
        subtitleEnglish="Module 7 Capstone & Revision"
        subtitleHindi="Module 7 Capstone & Revision"
        emoji="🏗️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec49-title'}
        sectionRef={secTitleRef}
        sectionId="sec49-title"
      />

      {/* SECTION 1: REUSABLE CODE PRINCIPLES */}
      <div
        ref={secReusablePrinciplesRef}
        data-mentor-target="sec49-reusable-principles"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'पुन: प्रयोज्य Code (Reusable Code) के 4 सुनहरे नियम' : '4 Golden Rules of Reusable Production Code'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'एक अच्छा Software इंजीनियर और Data Analyst Code कैसे लिखता है?' : 'Writing clean, testable, and maintainable data functions'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/60 p-4 space-y-1">
            <span className="text-xl">🎯</span>
            <h4 className="text-xs font-bold text-[#4C2A9A]">
              {isHi ? '1. एक Function, एक काम' : '1. Single Responsibility'}
            </h4>
            <p className="text-[11px] text-[#4A4768]">
              {isHi ? 'हर Function सिर्फ एक विशिष्ट काम करे (जैसे केवल औसत निकालना)।' : 'A function should do one job and do it exceptionally well.'}
            </p>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/60 p-4 space-y-1">
            <span className="text-xl">↩️</span>
            <h4 className="text-xs font-bold text-[#4C2A9A]">
              {isHi ? '2. Return करें, केवल Print नहीं' : '2. Return, Don’t Just Print'}
            </h4>
            <p className="text-[11px] text-[#4A4768]">
              {isHi ? 'Value लौटाएं ताकि अन्य Code उस परिणाम को आगे इस्तेमाल कर सके।' : 'Return computed values so other modules and charts can reuse them.'}
            </p>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/60 p-4 space-y-1">
            <span className="text-xl">📝</span>
            <h4 className="text-xs font-bold text-[#4C2A9A]">
              {isHi ? '3. स्पष्ट Docstrings लिखें' : '3. Clear Docstrings'}
            </h4>
            <p className="text-[11px] text-[#4A4768]">
              {isHi ? 'Function क्या करता है, क्या Input लेता है, 3 उद्धरणों में बताएं।' : 'Document purpose, arguments, and return types with triple quotes.'}
            </p>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/60 p-4 space-y-1">
            <span className="text-xl">🧱</span>
            <h4 className="text-xs font-bold text-[#4C2A9A]">
              {isHi ? '4. Modular Files' : '4. Modular Separation'}
            </h4>
            <p className="text-[11px] text-[#4A4768]">
              {isHi ? 'लॉजिक को helper Modules में रखें और main File में Import करें।' : 'Separate business logic into helper modules imported into main.'}
            </p>
          </div>
        </div>
      </div>

      {/* PROJECT SELECTOR TABS */}
      <div className="flex items-center gap-3 border-b border-[#EAE5F5] pb-2">
        <button
          onClick={() => setActiveProject('project1')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            activeProject === 'project1'
              ? 'bg-[#7045E8] text-white shadow-sm'
              : 'bg-[#F6F2FF] text-[#77758A] hover:text-[#202033]'
          }`}
        >
          <span>📊</span> Project 1: Student Marks Analyzer
        </button>
        <button
          onClick={() => setActiveProject('project2')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            activeProject === 'project2'
              ? 'bg-[#7045E8] text-white shadow-sm'
              : 'bg-[#F6F2FF] text-[#77758A] hover:text-[#202033]'
          }`}
        >
          <span>📑</span> Project 2: Sales CSV Report Generator
        </button>
      </div>

      {/* PRACTICAL PROJECT 1: STUDENT MARKS ANALYZER */}
      {activeProject === 'project1' && (
        <div
          ref={secProject1Ref}
          data-mentor-target="sec49-project1"
          className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <h3 className="text-base font-bold text-[#202033]">
                  Project 1: Student Marks Analyzer Module
                </h3>
                <p className="text-xs text-[#77758A]">
                  {isHi
                    ? '3 मॉड्यूलर फंक्शन्स: calculate_total(), calculate_average(), check_result()'
                    : '3 Modular Functions: Total marks, percentage average, and Pass/Fail status'}
                </p>
              </div>
            </div>
            <span className="text-xs font-bold bg-purple-50 text-[#7045E8] px-3 py-1 rounded-full border border-purple-200">
              Complete Python Script
            </span>
          </div>

          <div className="rounded-xl bg-[#202033] p-5 font-mono text-xs text-white leading-relaxed overflow-x-auto shadow-inner">
            <span className="text-purple-300"># ==========================================</span><br />
            <span className="text-purple-300"># PROJECT 1: STUDENT MARKS ANALYZER</span><br />
            <span className="text-purple-300"># ==========================================</span><br /><br />
            <span className="text-amber-400">def</span> <span className="text-blue-400">calculate_total</span>(marks_dict: dict) -&gt; float:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;&quot;&quot;Returns the sum of all marks in the dictionary.&quot;&quot;&quot;</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">return</span> <span className="text-blue-400">sum</span>(marks_dict.values())<br /><br />
            <span className="text-amber-400">def</span> <span className="text-blue-400">calculate_average</span>(marks_dict: dict) -&gt; float:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;&quot;&quot;Returns average marks across all subjects.&quot;&quot;&quot;</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">if</span> <span className="text-amber-400">not</span> marks_dict:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">return</span> 0.0<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">return</span> <span className="text-blue-400">round</span>(calculate_total(marks_dict) / <span className="text-blue-400">len</span>(marks_dict), 2)<br /><br />
            <span className="text-amber-400">def</span> <span className="text-blue-400">check_result</span>(average_score: float, passing_threshold: float = 40.0) -&gt; str:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;&quot;&quot;Returns Pass with Distinction, Pass, or Needs Improvement.&quot;&quot;&quot;</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">if</span> average_score &gt;= 75.0:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">return</span> <span className="text-emerald-300">&quot;Distinction ⭐&quot;</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">elif</span> average_score &gt;= passing_threshold:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">return</span> <span className="text-emerald-300">&quot;Passed ✅&quot;</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">else</span>:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">return</span> <span className="text-rose-400">&quot;Failed ❌&quot;</span><br /><br />
            <span className="text-purple-300"># --- TESTING WITH REAL DATA ---</span><br />
            student_records = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;Rahul&quot;</span>: &#123;<span className="text-emerald-300">&quot;Math&quot;</span>: 88, <span className="text-emerald-300">&quot;Science&quot;</span>: 92, <span className="text-emerald-300">&quot;English&quot;</span>: 85&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;Pooja&quot;</span>: &#123;<span className="text-emerald-300">&quot;Math&quot;</span>: 38, <span className="text-emerald-300">&quot;Science&quot;</span>: 42, <span className="text-emerald-300">&quot;English&quot;</span>: 35&#125;<br />
            &#125;<br /><br />
            <span className="text-amber-400">for</span> name, marks <span className="text-amber-400">in</span> student_records.items():<br />
            &nbsp;&nbsp;&nbsp;&nbsp;avg = calculate_average(marks)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;status = check_result(avg)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-emerald-300">f&quot;[&#123;name&#125;] Total: &#123;calculate_total(marks)&#125; | Avg: &#123;avg&#125;% | Status: &#123;status&#125;&quot;</span>)
          </div>
        </div>
      )}

      {/* PRACTICAL PROJECT 2: SALES CSV REPORT GENERATOR */}
      {activeProject === 'project2' && (
        <div
          ref={secProject2Ref}
          data-mentor-target="sec49-project2"
          className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📑</span>
              <div>
                <h3 className="text-base font-bold text-[#202033]">
                  Project 2: Sales CSV Report Generator with Exception Handling
                </h3>
                <p className="text-xs text-[#77758A]">
                  {isHi
                    ? 'CSV पढ़ना, Revenue Calculate करना, क्रैश से बचाव और Output समरी File तैयार करना'
                    : 'Safe CSV ingestion, automated summary calculations, error prevention, and file output'}
                </p>
              </div>
            </div>
            <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
              End-to-End Pipeline
            </span>
          </div>

          <div className="rounded-xl bg-[#202033] p-5 font-mono text-xs text-white leading-relaxed overflow-x-auto shadow-inner">
            <span className="text-amber-400">import</span> csv<br />
            <span className="text-amber-400">from</span> datetime <span className="text-amber-400">import</span> datetime<br /><br />
            <span className="text-amber-400">def</span> <span className="text-blue-400">generate_sales_report</span>(csv_filepath: str, output_filepath: str):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;total_revenue = 0.0<br />
            &nbsp;&nbsp;&nbsp;&nbsp;total_items = 0<br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">try</span>:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">with</span> open(csv_filepath, <span className="text-emerald-300">&quot;r&quot;</span>, encoding=<span className="text-emerald-300">&quot;utf-8&quot;</span>) <span className="text-amber-400">as</span> file:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reader = csv.DictReader(file)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">for</span> row <span className="text-amber-400">in</span> reader:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qty = <span className="text-blue-400">int</span>(row[<span className="text-emerald-300">&quot;quantity&quot;</span>])<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price = <span className="text-blue-400">float</span>(row[<span className="text-emerald-300">&quot;price&quot;</span>])<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total_revenue += qty * price<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total_items += qty<br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">with</span> open(output_filepath, <span className="text-emerald-300">&quot;w&quot;</span>, encoding=<span className="text-emerald-300">&quot;utf-8&quot;</span>) <span className="text-amber-400">as</span> out:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;out.write(<span className="text-emerald-300">f&quot;SALES AUDIT REPORT - &#123;datetime.now().strftime(&apos;%Y-%m-%d&apos;)&#125;\n&quot;</span>)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;out.write(<span className="text-emerald-300">f&quot;Total Units Sold: &#123;total_items&#125;\n&quot;</span>)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;out.write(<span className="text-emerald-300">f&quot;Gross Revenue: INR &#123;total_revenue:,.2f&#125;\n&quot;</span>)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-emerald-300">f&quot;✅ Audit report written safely to &#123;output_filepath&#125;&quot;</span>)<br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">except</span> FileNotFoundError:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-rose-400">f&quot;❌ Error: Source file &#123;csv_filepath&#125; does not exist!&quot;</span>)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">except</span> KeyError <span className="text-amber-400">as</span> e:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-rose-400">f&quot;❌ Error: Missing column header &#123;e&#125; in CSV!&quot;</span>)<br /><br />
            <span className="text-purple-300"># Run the pipeline</span><br />
            generate_sales_report(<span className="text-emerald-300">&quot;store_sales.csv&quot;</span>, <span className="text-emerald-300">&quot;sales_summary.txt&quot;</span>)
          </div>
        </div>
      )}

      {/* SECTION 3: MODULE 7 COMPLETE REVISION TABLE */}
      <div
        ref={secRevisionTableRef}
        data-mentor-target="sec49-revision-table"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Module 7 महा-रिवीजन (All 9 Topics Quick Summary)' : 'Module 7 Master Revision Table'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Functions, Modules, Datetime, Files और Exceptions का 1 मिनट में रीकैप' : 'Complete snapshot of all core concepts learned across Topics 1 through 9'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Topic</th>
                <th className="py-3 px-4">Core Syntax / Feature</th>
                <th className="py-3 px-4">Key Takeaway</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">1. Intro to Functions</td>
                <td className="py-2.5 px-4 font-mono">def greet(): ...</td>
                <td className="py-2.5 px-4">DRY (Don’t Repeat Yourself) principle</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">2. Params & Return</td>
                <td className="py-2.5 px-4 font-mono">return a + b</td>
                <td className="py-2.5 px-4">Pass inputs, return values instead of printing</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">3. Default & Keyword</td>
                <td className="py-2.5 px-4 font-mono">def add(x, y=10): ...</td>
                <td className="py-2.5 px-4">Defaults go last; keywords prevent order mistakes</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">4. Scope & Built-ins</td>
                <td className="py-2.5 px-4 font-mono">LEGB Rule / sum(), max()</td>
                <td className="py-2.5 px-4">Local inside function, Global outside; avoid name collisions</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">5. Modules & Imports</td>
                <td className="py-2.5 px-4 font-mono">import math / random</td>
                <td className="py-2.5 px-4">Reuse Python standard library & custom .py toolboxes</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">6. Dates & Time</td>
                <td className="py-2.5 px-4 font-mono">datetime.now().strftime(&apos;%Y-%m-%d&apos;)</td>
                <td className="py-2.5 px-4">Parse logs and measure delivery deltas with timedelta</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">7. Files & CSV</td>
                <td className="py-2.5 px-4 font-mono">with open(...) / csv.DictReader</td>
                <td className="py-2.5 px-4">Auto-closing context manager; read tabular data rows</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">8. Exceptions</td>
                <td className="py-2.5 px-4 font-mono">try ... except ValueError</td>
                <td className="py-2.5 px-4">Catch crashes gracefully, else on success, finally on cleanup</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: INTERACTIVE KNOWLEDGE CHECK & CHALLENGE */}
      <div
        ref={secQuizChallengeRef}
        data-mentor-target="sec49-quiz-challenge"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Final Knowledge Check (अंतिम प्रश्नोत्तरी)' : 'Final Knowledge Check & Challenge'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'अपनी समझ जांचें और Module 7 में अपनी महारत सिद्ध करें!' : 'Test your comprehension before stepping into NumPy analysis'}
            </p>
          </div>
        </div>

        {/* QUIZ QUESTIONS */}
        <div className="space-y-4">
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <p className="text-xs font-bold text-[#202033]">
              Q1. Why is `with open(...)` preferred over `file = open(...)`?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setQuizAnswers((p) => ({ ...p, 1: 'A' }))}
                className={`p-2 rounded-lg text-left border transition-all ${
                  quizAnswers[1] === 'A'
                    ? 'border-[#7045E8] bg-purple-100 text-[#4C2A9A] font-bold'
                    : 'border-gray-200 bg-white text-[#4A4768]'
                }`}
              >
                A) It automatically closes the file even if errors occur ✅
              </button>
              <button
                onClick={() => setQuizAnswers((p) => ({ ...p, 1: 'B' }))}
                className={`p-2 rounded-lg text-left border transition-all ${
                  quizAnswers[1] === 'B'
                    ? 'border-[#7045E8] bg-purple-100 text-[#4C2A9A] font-bold'
                    : 'border-gray-200 bg-white text-[#4A4768]'
                }`}
              >
                B) It makes the file download faster
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <p className="text-xs font-bold text-[#202033]">
              Q2. When does the `finally` block execute in Python?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setQuizAnswers((p) => ({ ...p, 2: 'A' }))}
                className={`p-2 rounded-lg text-left border transition-all ${
                  quizAnswers[2] === 'A'
                    ? 'border-[#7045E8] bg-purple-100 text-[#4C2A9A] font-bold'
                    : 'border-gray-200 bg-white text-[#4A4768]'
                }`}
              >
                A) Only if no errors occur
              </button>
              <button
                onClick={() => setQuizAnswers((p) => ({ ...p, 2: 'B' }))}
                className={`p-2 rounded-lg text-left border transition-all ${
                  quizAnswers[2] === 'B'
                    ? 'border-[#7045E8] bg-purple-100 text-[#4C2A9A] font-bold'
                    : 'border-gray-200 bg-white text-[#4A4768]'
                }`}
              >
                B) Always, whether an exception occurs or not ✅
              </button>
            </div>
          </div>
        </div>

        {/* STUDENT CHALLENGE BOX */}
        <div className="rounded-xl border border-dashed border-[#7045E8] bg-[#F6F2FF]/50 p-5 space-y-2">
          <div className="flex items-center gap-2 text-[#7045E8] font-bold text-sm">
            <span>⚡</span>
            <h4>{isHi ? 'अंतिम छात्र चुनौती (Student Mission)' : 'Final Student Challenge'}</h4>
          </div>
          <p className="text-xs text-[#4A4768] leading-relaxed">
            {isHi ? (
              <>
                एक CSV File <code>&quot;employees.csv&quot;</code> से Data पढ़ें जिसमें <code>name,department,salary</code> Column हैं। एक Function <code>filter_high_earners(min_salary)</code> बनाएं जो 50,000 से अधिक वेतन पाने वाले कर्मचारियों की List लौटाए। यदि File न मिले, तो <code>FileNotFoundError</code> को सुरक्षित रूप से हैंडल करें!
              </>
            ) : (
              <>
                Build a function <code>filter_high_earners(filepath, min_salary=50000)</code> using <code>csv.DictReader</code> that reads <code>name, department, salary</code>. Catch any <code>FileNotFoundError</code> or <code>ValueError</code> gracefully and return a list of high-earning employee records!
              </>
            )}
          </p>
        </div>
      </div>

      {/* SECTION 5: NEXT MODULE PREVIEW */}
      <div
        ref={secNextModuleRef}
        data-mentor-target="sec49-next-module"
        className="rounded-2xl border border-purple-200 bg-gradient-to-r from-[#4C2A9A] to-[#7045E8] p-6 text-white shadow-lg space-y-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎉</span>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-purple-200">
                Module 7 Completed!
              </span>
              <h3 className="text-xl font-black">
                {isHi ? 'बधाई हो! अब आप Python Core में पारंगत हैं' : 'Congratulations! You Mastered Python Core'}
              </h3>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <span className="text-xs text-purple-200">Next Destination</span>
            <div className="text-sm font-bold text-emerald-300">Module 8: NumPy & Math</div>
          </div>
        </div>

        <p className="text-xs text-purple-100 leading-relaxed">
          {isHi
            ? 'आपने सिंटेक्स, Loops, कलेक्शन्स, फंक्शन्स, Files और Exception हैंडलिंग को पूरी तरह सीख लिया है। अगले Module में हम हाई-स्पीड न्यूमेरिकल कंप्यूटिंग और मल्टी-डायमेंशनल वेक्टर्स के लिए NumPy का अध्ययन करेंगे!'
            : 'You have conquered syntax, collections, reusable functions, file pipelines, and robust exception safety. In Module 8, we step into high-performance vector mathematics with NumPy!'}
        </p>
      </div>
    </div>
  );
};
