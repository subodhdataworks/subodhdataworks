import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic31VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic31ErrorsAndDebuggingLesson: React.FC<Topic31VisualLessonProps> = ({
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
  const secErrorsGridRef = useRef<HTMLDivElement>(null);
  const secLogicalRef = useRef<HTMLDivElement>(null);
  const secFlowchartRef = useRef<HTMLDivElement>(null);
  const secPrintDebugRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec31-title': secTitleRef,
      'sec31-concept': secConceptRef,
      'sec31-errors-grid': secErrorsGridRef,
      'sec31-logical': secLogicalRef,
      'sec31-flowchart': secFlowchartRef,
      'sec31-print-debug': secPrintDebugRef,
      'sec31-takeaway': secTakeawayRef,
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
      className="topic31-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={5}
        moduleName="Conditions, Loops & Problem-Solving"
        topicNum={7}
        totalTopicsInModule={8}
        englishTitle="Common Python Errors and Debugging"
        hindiTitle="Common Python Errors and Debugging"
        subtitleEnglish="Introduction to debugging and error types."
        subtitleHindi="Python errors aur debugging ka introduction."
        emoji="🐞"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec31-title'}
        sectionRef={secTitleRef}
        sectionId="sec31-title"
      />

      {/* Section 1: Concept */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'डिबगिंग (Debugging) क्या है?' : 'What Is Debugging?'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'दुनिया का हर कोडर गलतियाँ करता है। असली स्किल Error मेसेज को पढ़कर तुरंत पहचानना है कि गलती किस लाइन पर और क्यों हुई है।'
            : 'Every programmer encounters errors. The true skill is reading the traceback to pinpoint the exact line and cause.'}
        </p>
      </div>

      {/* Section 2: 6 Major Python Built-in Errors */}
      <div ref={secErrorsGridRef} className="space-y-4">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>⚠️</span> {isHi ? 'Python के 6 सबसे आम Errors' : '6 Most Common Python Errors'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* SyntaxError */}
          <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm space-y-2">
            <span className="font-bold text-rose-700 text-sm block">1. SyntaxError</span>
            <p className="text-slate-600">जब व्याकरण (Grammar) के नियम टूटते हैं (जैसे कोट्स या ब्रैकेट बंद न करना)।</p>
            <div className="bg-slate-900 p-2.5 rounded font-mono text-slate-100">
              <span className="text-rose-400">❌ print("Hello"</span><br />
              <span className="text-emerald-400">✅ print("Hello")</span>
            </div>
          </div>

          {/* IndentationError */}
          <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm space-y-2">
            <span className="font-bold text-rose-700 text-sm block">2. IndentationError</span>
            <p className="text-slate-600">जब if, for या while के अंदर 4 स्पेस छोड़ना भूल जाएं।</p>
            <div className="bg-slate-900 p-2.5 rounded font-mono text-slate-100">
              <span className="text-rose-400">❌ if 10 &gt; 5: print("Yes")</span><br />
              <span className="text-emerald-400">✅ if 10 &gt; 5:<br />&nbsp;&nbsp;&nbsp;&nbsp;print("Yes")</span>
            </div>
          </div>

          {/* NameError */}
          <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm space-y-2">
            <span className="font-bold text-rose-700 text-sm block">3. NameError</span>
            <p className="text-slate-600">जब ऐसे Variable का नाम use करें जिसे पहले कभी बनाया ही नहीं गया।</p>
            <div className="bg-slate-900 p-2.5 rounded font-mono text-slate-100">
              <span className="text-rose-400">❌ print(student_name)</span><br />
              <span className="text-emerald-400">✅ student_name = "Rahul"<br />&nbsp;&nbsp;&nbsp;print(student_name)</span>
            </div>
          </div>

          {/* TypeError */}
          <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm space-y-2">
            <span className="font-bold text-rose-700 text-sm block">4. TypeError</span>
            <p className="text-slate-600">जब दो असंगत Data Types (जैसे String और Integer) को जोड़ने की कोशिश करें।</p>
            <div className="bg-slate-900 p-2.5 rounded font-mono text-slate-100">
              <span className="text-rose-400">❌ "Age: " + 20</span><br />
              <span className="text-emerald-400">✅ "Age: " + str(20) # या f"Age: {'{20}'}"</span>
            </div>
          </div>

          {/* ValueError */}
          <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm space-y-2">
            <span className="font-bold text-rose-700 text-sm block">5. ValueError</span>
            <p className="text-slate-600">जब किसी अक्षरों वाले शब्द को जबरदस्ती नंबर में बदलने की कोशिश करें।</p>
            <div className="bg-slate-900 p-2.5 rounded font-mono text-slate-100">
              <span className="text-rose-400">❌ int("hello")</span><br />
              <span className="text-emerald-400">✅ int("20")</span>
            </div>
          </div>

          {/* ZeroDivisionError */}
          <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm space-y-2">
            <span className="font-bold text-rose-700 text-sm block">6. ZeroDivisionError</span>
            <p className="text-slate-600">गणित में किसी संख्या को 0 से भाग नहीं दिया जा सकता।</p>
            <div className="bg-slate-900 p-2.5 rounded font-mono text-slate-100">
              <span className="text-rose-400">❌ 10 / 0</span><br />
              <span className="text-emerald-400">✅ if divisor != 0: 10 / divisor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Logical Errors */}
      <div ref={secLogicalRef} className="bg-amber-50 rounded-2xl p-6 border border-amber-200 shadow-sm space-y-3">
        <h4 className="font-bold text-amber-900 text-sm md:text-base flex items-center gap-2">
          <span>🧠</span> {isHi ? 'Logical Errors — सबसे खतरनाक गलतियाँ!' : 'Logical Errors — The Silent Bugs!'}
        </h4>
        <p className="text-xs md:text-sm text-slate-700">
          {isHi
            ? 'Program बिना किसी लाल Error के चलेगा, लेकिन नतीजा गलत देगा! जैसे कीमत ₹100 और क्वांटिटी 3 होने पर गुणा (*) करने के बजाय जोड़ (+) देना:'
            : 'Program runs without crashing, but produces incorrect output! E.g. adding (+) instead of multiplying (*) price by quantity:'}
        </p>
        <div className="bg-slate-900 p-3 rounded-xl font-mono text-xs text-slate-100 flex flex-col md:flex-row justify-between gap-2">
          <div>
            <span className="text-rose-400">total = price + quantity</span> ➔ Output: 103 ❌ (गलत बिल!)
          </div>
          <div>
            <span className="text-emerald-400">total = price * quantity</span> ➔ Output: 300 ✅ (सही बिल!)
          </div>
        </div>
      </div>

      {/* Section 4: Flowchart */}
      <div ref={secFlowchartRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>🗺️</span> {isHi ? 'डिबगिंग का सही तरीका (Step-by-Step Flow)' : 'Systematic Debugging Workflow'}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center font-mono text-xs">
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <span className="font-bold text-purple-800 block">1. Read Error</span>
            <span className="text-slate-500">लाइन नंबर देखें</span>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <span className="font-bold text-purple-800 block">2. Inspect</span>
            <span className="text-slate-500">ब्रैकेट/स्पेस जांचें</span>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <span className="font-bold text-purple-800 block">3. Print Values</span>
            <span className="text-slate-500">बीच के Value देखें</span>
          </div>
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
            <span className="font-bold text-emerald-800 block">4. Re-test</span>
            <span className="text-slate-500">पुनः चलाकर जांचें</span>
          </div>
        </div>
      </div>

      {/* Section 5: Debugging with print */}
      <div ref={secPrintDebugRef} className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-200 shadow-sm space-y-2">
        <h4 className="font-bold text-indigo-900 text-sm flex items-center gap-2">
          <span>🖨️</span> {isHi ? 'print() से डिबग करना' : 'Debugging with print() Statements'}
        </h4>
        <pre className="bg-slate-900 text-indigo-200 p-3 rounded-lg font-mono text-xs overflow-x-auto">
{`price = 100
quantity = 3

print("DEBUG price:", price, "quantity:", quantity)
total = price * quantity
print("DEBUG total:", total)`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'गलतियाँ सीखने का हिस्सा हैं। Error मेसेज को शांत मन से पढ़ें, लाइन नंबर खोजें, और print() लगाकर Data का प्रवाह देखें।'
            : 'Errors are normal milestones in programming. Read tracebacks calmly, locate the failing line, and print intermediate variables.'}
        </p>
      </div>
    </div>
  );
};
export default Topic31ErrorsAndDebuggingLesson;
