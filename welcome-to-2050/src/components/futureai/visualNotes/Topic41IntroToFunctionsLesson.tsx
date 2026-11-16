import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic41VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic41IntroToFunctionsLesson: React.FC<Topic41VisualLessonProps> = ({
  activeSectionId,
  onSectionRectChange,
  onScrollSettled,
  language: externalLanguage = 'english',
  onLanguageChange,
}) => {
  const [currentLang, setCurrentLang] = useState<'hindi' | 'english'>(externalLanguage);

  useEffect(() => {
    if (externalLanguage && externalLanguage !== currentLang) {
      setCurrentLang(externalLanguage);
    }
  }, [externalLanguage]);

  const containerRef = useRef<HTMLDivElement>(null);
  const secTitleRef = useRef<HTMLDivElement>(null);
  const secConceptRef = useRef<HTMLDivElement>(null);
  const secBenefitsRef = useRef<HTMLDivElement>(null);
  const secSyntaxRef = useRef<HTMLDivElement>(null);
  const secFlowchartRef = useRef<HTMLDivElement>(null);
  const secNamingVsLoopRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec41-title': secTitleRef,
      'sec41-concept': secConceptRef,
      'sec41-benefits': secBenefitsRef,
      'sec41-syntax': secSyntaxRef,
      'sec41-flowchart': secFlowchartRef,
      'sec41-naming-vs-loop': secNamingVsLoopRef,
      'sec41-takeaway': secTakeawayRef,
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
      className="topic41-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={7}
        moduleName="Functions, Modules & Files"
        topicNum={1}
        totalTopicsInModule={9}
        englishTitle="Introduction to Functions"
        hindiTitle="Introduction to Functions"
        subtitleEnglish="Functions: Reusable code block"
        subtitleHindi="Functions: Reusable code block"
        emoji="🧩"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec41-title'}
        sectionRef={secTitleRef}
        sectionId="sec41-title"
      />

      {/* Section 1: Concept & Calculator Analogy */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'Function क्या है? (Calculator Button का उदाहरण)' : 'What Is a Function?'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'जब आप कैलकुलेटर में `+` दबाते हैं, तो वह जोड़ने का काम कर देता है। आपको हर बार जोड़ने का सर्किट नहीं बनाना पड़ता। Function भी एक बार बना Code है जिसे जब चाहें बुलाया (Call) जा सकता है।'
            : 'When you press addition on a calculator, it performs math without rebuilding the internal circuit. A Python function bundles instructions once for infinite re-use.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200">
            <span className="font-bold text-rose-800 text-xs block mb-1">❌ बिना Function के (Repeating Code)</span>
            <pre className="bg-slate-900 text-rose-300 p-2.5 rounded font-mono text-xs">
{`print("Welcome to Python!")
print("Welcome to Python!")
print("Welcome to Python!")`}
            </pre>
          </div>

          <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200">
            <span className="font-bold text-emerald-800 text-xs block mb-1">✅ Function के साथ (Clean & Reusable)</span>
            <pre className="bg-slate-900 text-emerald-300 p-2.5 rounded font-mono text-xs">
{`def welcome():
    print("Welcome to Python!")

welcome() # Call 1
welcome() # Call 2
welcome() # Call 3`}
            </pre>
          </div>
        </div>
      </div>

      {/* Section 2: 5 Major Benefits */}
      <div ref={secBenefitsRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>🌟</span> {isHi ? 'फ़ंक्शन्स के 5 सबसे बड़े फायदे' : '5 Major Benefits of Functions'}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
            <span className="font-bold text-purple-900 block">1. Reusable</span>
            <span className="text-[11px] text-slate-600">बार-बार उपयोग</span>
          </div>
          <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
            <span className="font-bold text-purple-900 block">2. Readable</span>
            <span className="text-[11px] text-slate-600">साफ-सुथरा Code</span>
          </div>
          <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
            <span className="font-bold text-purple-900 block">3. Easy Fix</span>
            <span className="text-[11px] text-slate-600">एक जगह बदलाव</span>
          </div>
          <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
            <span className="font-bold text-purple-900 block">4. Testing</span>
            <span className="text-[11px] text-slate-600">आसान Testing</span>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <span className="font-bold text-emerald-900 block">5. Modular</span>
            <span className="text-[11px] text-slate-600">संगठित Project</span>
          </div>
        </div>
      </div>

      {/* Section 3: Anatomy & Defining vs Calling */}
      <div ref={secSyntaxRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'Syntax Anatomy & Defining vs Calling' : 'Syntax Anatomy: Defining vs Calling'}</h3>
        </div>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-sm relative overflow-hidden space-y-1">
          <div><span className="text-amber-400 font-bold">def</span> <span className="text-cyan-300 font-bold">function_name</span><span className="text-emerald-300">()</span><span className="text-rose-400 font-bold">:</span></div>
          <div className="pl-8 text-emerald-300">
            <span className="text-slate-500">└── 4 spaces ──►</span> print("Hello!")
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
          ⚠️ <strong>याद रखें:</strong> <code>def say_hello():</code> लिखने से स्क्रीन पर कुछ नहीं छपेगा! यह सिर्फ Function को मेमोरी में तैयार करता है। जब तक आप <code>say_hello()</code> लिखकर उसे बुलाएंगे नहीं, Code नहीं चलेगा।
        </div>
      </div>

      {/* Section 4: Visual Flowchart */}
      <div ref={secFlowchartRef} className="bg-gradient-to-br from-purple-50 to-indigo-50/70 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>🗺️</span> {isHi ? 'Function कॉल का विज़ुअल निष्पादन चक्र' : 'Visual Function Call Lifecycle'}
        </h4>
        <div className="max-w-md mx-auto grid grid-cols-5 gap-1 items-center text-center font-mono text-xs">
          <div className="p-2 bg-white rounded border border-purple-200">Main Code</div>
          <div>➔</div>
          <div className="p-2 bg-purple-200 text-purple-900 font-bold rounded">Jump to def</div>
          <div>➔</div>
          <div className="p-2 bg-emerald-200 text-emerald-900 font-bold rounded">Return Back</div>
        </div>
      </div>

      {/* Section 5: Naming Rules vs Loops */}
      <div ref={secNamingVsLoopRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-2">
          <span className="font-bold text-purple-900 block text-sm">🐍 Function Naming Rules</span>
          <p className="text-slate-600">हमेशा snake_case का प्रयोग करें और काम को दर्शाने वाला नाम दें:</p>
          <div className="font-mono text-slate-700 space-y-1">
            <span className="text-emerald-600 font-bold">✅ calculate_total()</span><br />
            <span className="text-emerald-600 font-bold">✅ check_eligibility()</span><br />
            <span className="text-rose-500">❌ a(), xyz(), do_something()</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-2">
          <span className="font-bold text-purple-900 block text-sm">🔄 Functions vs Loops</span>
          <p className="text-slate-600">
            <strong>Loop:</strong> अपने नियमों के आधार पर खुद को लगातार दोहराता है।<br />
            <strong>Function:</strong> Code को एक बक्से में बंद करता है, जिसे हम जब चाहें तब बुला सकते हैं।
          </p>
        </div>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Function बार-बार दोहराए जाने वाले Code को एक नाम के तहत सुरक्षित करता है। def से बनता है, () से बुलाया जाता है, और Program को मॉड्यूलर बनाता है।'
            : 'Functions package repeatable instructions under descriptive names. Define once with def, invoke anytime with (), and maintain code cleanly.'}
        </p>
      </div>
    </div>
  );
};
export default Topic41IntroToFunctionsLesson;
