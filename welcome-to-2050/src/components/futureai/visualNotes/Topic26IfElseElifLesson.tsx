import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic26VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic26IfElseElifLesson: React.FC<Topic26VisualLessonProps> = ({
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
  const secElseRef = useRef<HTMLDivElement>(null);
  const secEvenOddRef = useRef<HTMLDivElement>(null);
  const secElifRef = useRef<HTMLDivElement>(null);
  const secOrderRef = useRef<HTMLDivElement>(null);
  const secDeliveryRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec26-title': secTitleRef,
      'sec26-else': secElseRef,
      'sec26-even-odd': secEvenOddRef,
      'sec26-elif': secElifRef,
      'sec26-order': secOrderRef,
      'sec26-delivery': secDeliveryRef,
      'sec26-takeaway': secTakeawayRef,
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
      className="topic26-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={5}
        moduleName="Conditions, Loops & Problem-Solving"
        topicNum={2}
        totalTopicsInModule={8}
        englishTitle="if-else and elif Statements"
        hindiTitle="if-else and elif Statements"
        subtitleEnglish="Multi-way branching with else and elif."
        subtitleHindi="if-else aur elif se bahu-vikalpi nirnay."
        emoji="🚦"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec26-title'}
        sectionRef={secTitleRef}
        sectionId="sec26-title"
      />

      {/* Section 1: Why else? Visual Decision Tree */}
      <div ref={secElseRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'else की आवश्यकता क्यों है? (दोतरफा रास्ता)' : 'Why Do We Need else? (Two-Way Fork)'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-xs md:text-sm text-slate-600 mb-3">
              {isHi
                ? '`if` केवल सच होने पर चलता है। जब शर्त गलत हो और हमें कोई दूसरा काम कराना हो, तब हम `else` लगाते हैं।'
                : '`if` only runs on True. When false and we need an alternate path, we use `else`.'}
            </p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`marks = 32

if marks >= 40:
    print("Pass")
else:
    print("Fail")

# Output: Fail`}
            </pre>
          </div>

          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 text-center space-y-2">
            <span className="text-xs font-bold text-purple-800 uppercase tracking-wider block">
              {isHi ? 'विज़ुअल डिसीज़न ट्री' : 'Visual Decision Tree'}
            </span>
            <div className="font-mono text-xs space-y-1">
              <div className="p-1.5 bg-white rounded border border-purple-200 font-bold">marks = 32</div>
              <div>↓</div>
              <div className="p-1.5 bg-amber-100 rounded border border-amber-300 font-bold">marks &gt;= 40 ?</div>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2 bg-emerald-100 text-emerald-800 rounded border border-emerald-300 opacity-40">
                  True ➔ Pass
                </div>
                <div className="p-2 bg-rose-100 text-rose-800 rounded border border-rose-300 font-bold shadow-sm">
                  False ➔ Fail 🎯
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Even or Odd Example */}
      <div ref={secEvenOddRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'सम या विषम संख्या (Even or Odd)?' : 'Even or Odd Number Example'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'अगर संख्या 2 से पूरी तरह कट जाए (रिमाइंडर 0 हो, यानी `number % 2 == 0`), तो Even है, वरना Odd।'
            : 'If divided by 2 with no remainder (`number % 2 == 0`), it is Even, otherwise Odd.'}
        </p>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`number = 7

if number % 2 == 0:
    print("Even")
else:
    print("Odd")

# 7 % 2 = 1 ➔ 1 == 0 is False ➔ Output: Odd`}
        </pre>
      </div>

      {/* Section 3: elif and Student Grades */}
      <div ref={secElifRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'elif (Else If) — कई विकल्प जांचना' : 'elif (Else If) — Multi-Way Decision'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'जब 2 से ज्यादा रास्ते हों, तो Python ऊपर से नीचे एक-एक शर्त जांचता है। जो पहली शर्त सच होगी केवल वही चलेगी, बाकी सब स्किप हो जाएंगे!'
            : 'For more than 2 outcomes, Python evaluates top-to-bottom. The first True block runs and skips all subsequent branches!'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-purple-100 text-purple-900 font-bold">
                  <th className="p-2">Marks Range</th>
                  <th className="p-2 text-right">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-50 text-slate-700">
                <tr><td className="p-2">90 – 100</td><td className="p-2 text-right font-bold text-purple-700">Grade A</td></tr>
                <tr className="bg-emerald-50 font-bold"><td className="p-2">75 – 89</td><td className="p-2 text-right text-emerald-600">Grade B (82 falls here)</td></tr>
                <tr><td className="p-2">60 – 74</td><td className="p-2 text-right font-bold text-indigo-700">Grade C</td></tr>
                <tr><td className="p-2">40 – 59</td><td className="p-2 text-right font-bold text-amber-700">Grade D</td></tr>
                <tr><td className="p-2">Below 40</td><td className="p-2 text-right font-bold text-rose-600">Grade F</td></tr>
              </tbody>
            </table>
          </div>

          <pre className="bg-slate-900 text-purple-200 p-3 rounded-xl font-mono text-xs overflow-x-auto">
{`marks = 82

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 60:
    print("Grade C")
elif marks >= 40:
    print("Grade D")
else:
    print("Grade F")

# Output: Grade B`}
          </pre>
        </div>
      </div>

      {/* Section 4: Order of Conditions Matters */}
      <div ref={secOrderRef} className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200 shadow-sm space-y-3">
        <h4 className="font-bold text-amber-900 flex items-center gap-2 text-sm">
          <span>⚠️</span> {isHi ? 'सावधानी: शर्तों का क्रम (Order) क्यों मायने रखता है?' : 'Crucial: Why Order of Conditions Matters'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-rose-300">
            <span className="font-bold text-rose-700 block mb-1">❌ गलत क्रम (Wrong Order)</span>
            <code className="block bg-slate-900 text-rose-300 p-2 rounded">
              if marks &gt;= 40:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Pass")<br />
              elif marks &gt;= 90:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Excellent")
            </code>
            <p className="text-slate-500 mt-1">95 पर भी "Pass" छप जाएगा क्योंकि पहली ही शर्त सच हो गई!</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-emerald-300">
            <span className="font-bold text-emerald-700 block mb-1">✅ सही क्रम (Correct Order)</span>
            <code className="block bg-slate-900 text-emerald-300 p-2 rounded">
              if marks &gt;= 90:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Excellent")<br />
              elif marks &gt;= 40:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Pass")
            </code>
            <p className="text-slate-500 mt-1">हमेशा बड़े और विशिष्ट Condition पहले रखें।</p>
          </div>
        </div>
      </div>

      {/* Section 5: Delivery Charges Real-Life */}
      <div ref={secDeliveryRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            04
          </div>
          <h3>{isHi ? 'रियल-लाइफ उदाहरण: ऑनलाइन डिलीवरी चार्ज' : 'Real-Life: Online Delivery Charges'}</h3>
        </div>
        <pre className="bg-slate-900 text-indigo-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`order_amount = 750

if order_amount >= 1000:
    delivery_charge = 0
elif order_amount >= 500:
    delivery_charge = 30
else:
    delivery_charge = 60

print("Delivery Charge:", delivery_charge) # Output: 30`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? '`if-else` दो विपरीत रास्तों के लिए है। `elif` कई संभावित विकल्पों के लिए है। Python ऊपर से नीचे जांचता है और पहली मैच होने वाली शर्त रन करके बाकी छोड़ देता है।'
            : '`if-else` handles two opposite paths. `elif` manages multi-tier branching. Python evaluates sequentially and executes strictly the first matching block.'}
        </p>
      </div>
    </div>
  );
};
export default Topic26IfElseElifLesson;
