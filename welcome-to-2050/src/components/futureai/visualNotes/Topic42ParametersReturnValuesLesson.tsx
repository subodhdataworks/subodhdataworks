import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic42VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic42ParametersReturnValuesLesson: React.FC<Topic42VisualLessonProps> = ({
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
  const secParamsArgsRef = useRef<HTMLDivElement>(null);
  const secReturnConceptRef = useRef<HTMLDivElement>(null);
  const secPrintVsReturnRef = useRef<HTMLDivElement>(null);
  const secReuseReturnRef = useRef<HTMLDivElement>(null);
  const secMultipleReturnRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec42-title': secTitleRef,
      'sec42-params-args': secParamsArgsRef,
      'sec42-return-concept': secReturnConceptRef,
      'sec42-print-vs-return': secPrintVsReturnRef,
      'sec42-reuse-return': secReuseReturnRef,
      'sec42-multiple-return': secMultipleReturnRef,
      'sec42-takeaway': secTakeawayRef,
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
      className="topic42-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={7}
        moduleName="Functions, Modules & Files"
        topicNum={2}
        totalTopicsInModule={9}
        englishTitle="Function Parameters and Return Values"
        hindiTitle="Function Parameters and Return Values"
        subtitleEnglish="Parameters & Return values"
        subtitleHindi="Parameters & Return values"
        emoji="📥"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec42-title'}
        sectionRef={secTitleRef}
        sectionId="sec42-title"
      />

      {/* Section 1: Parameters vs Arguments */}
      <div ref={secParamsArgsRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'Parameters बनाम Arguments' : 'Parameters vs Arguments'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-1">
            <span className="font-bold text-purple-900 text-xs block">Parameter (परिभाषा का Variable)</span>
            <code className="block bg-slate-900 text-amber-300 p-2.5 rounded font-mono text-xs">
              def greet(name):
            </code>
            <p className="text-[11px] text-slate-600">
              `name` यहाँ Parameter है, जो आने वाले Value के इंतजार में बैठा Variable है।
            </p>
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
            <span className="font-bold text-emerald-900 text-xs block">Argument (कॉल करते वक्त दिया गया Value)</span>
            <code className="block bg-slate-900 text-emerald-300 p-2.5 rounded font-mono text-xs">
              greet("Rahul")
            </code>
            <p className="text-[11px] text-slate-600">
              `"Rahul"` यहाँ आर्गुमेंट है, जो `name` के अंदर चला जाता है।
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: What is return? */}
      <div ref={secReturnConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'return क्या है? (नतीजा वापस भेजना)' : 'What Is return? (Sending Value Back)'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? '`return` Keyword Function के अंदर हुई Calculation के अंतिम परिणाम को बाहर भेजता है, जिसे हम किसी Variable में स्टोर कर सकते हैं।'
            : 'The `return` statement hands the final computed product back to the calling code, enabling downstream calculations.'}
        </p>

        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`def add(a, b):
    total = a + b
    return total

result = add(10, 20)
print(result) # Output: 30`}
        </pre>
      </div>

      {/* Section 3: print() vs return */}
      <div ref={secPrintVsReturnRef} className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200 shadow-sm space-y-4">
        <h4 className="font-bold text-amber-900 text-base flex items-center gap-2">
          <span>⚠️</span> {isHi ? 'सबसे महत्वपूर्ण अंतर: print() बनाम return' : 'The Most Crucial Distinction: print() vs return'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-2">
            <span className="font-bold text-rose-700 block">❌ print() का जाल (None Return)</span>
            <code className="block bg-slate-900 text-rose-300 p-2.5 rounded font-mono">
              def add(a, b):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(a + b)<br />
              res = add(10, 20)<br />
              print(res) # ➔ 30, फिर None!
            </code>
            <p className="text-slate-500">print केवल स्क्रीन पर दिखाता है, कोई Value वापस नहीं देता!</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-emerald-200 space-y-2">
            <span className="font-bold text-emerald-700 block">✅ return का सही उपयोग (Value Stored)</span>
            <code className="block bg-slate-900 text-emerald-300 p-2.5 rounded font-mono">
              def add(a, b):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;return a + b<br />
              res = add(10, 20)<br />
              print(res * 2) # ➔ 60!
            </code>
            <p className="text-slate-500">return Value वापस देता है जिसे आगे किसी भी गणित में इस्तेमाल कर सकते हैं।</p>
          </div>
        </div>
      </div>

      {/* Section 4: Reusing Return Value in Billing */}
      <div ref={secReuseReturnRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'Return Value का गणित में आगे इस्तेमाल' : 'Using Returned Values in Pipelines'}</h3>
        </div>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`def calculate_total(price, quantity):
    return price * quantity

bill = calculate_total(200, 3)     # bill = 600
discount = bill * 0.10             # discount = 60
final_bill = bill - discount       # final_bill = 540

print("Final Bill:", final_bill)   # Output: 540.0`}
        </pre>
      </div>

      {/* Section 5: Multiple Return Values */}
      <div ref={secMultipleReturnRef} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>📦</span> {isHi ? 'Multiple Return Values (एक साथ कई Value लौटाना)' : 'Multiple Return Values (Tuple Unpacking)'}
        </h4>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`def calculate_marks(marks):
    total = sum(marks)
    average = total / len(marks)
    return total, average # Tuple returns

tot, avg = calculate_marks([80, 90, 70])
print("Total:", tot)     # 240
print("Average:", avg)   # 80.0`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Parameters Function के अंदर Data लाते हैं और return नतीजा बाहर भेजता है। स्क्रीन पर दिखाने के लिए print() और Calculation आगे बढ़ाने के लिए return का प्रयोग करें।'
            : 'Parameters inject data into functions; return hands values back to the program. Use print() for human viewing and return for reusable computational logic.'}
        </p>
      </div>
    </div>
  );
};
export default Topic42ParametersReturnValuesLesson;
