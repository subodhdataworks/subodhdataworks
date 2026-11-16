import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic27VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic27NestedConditionsLesson: React.FC<Topic27VisualLessonProps> = ({
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
  const secDecisionTreeRef = useRef<HTMLDivElement>(null);
  const secIndentRef = useRef<HTMLDivElement>(null);
  const secVsLogicalRef = useRef<HTMLDivElement>(null);
  const secShoppingRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec27-title': secTitleRef,
      'sec27-concept': secConceptRef,
      'sec27-decision-tree': secDecisionTreeRef,
      'sec27-indent': secIndentRef,
      'sec27-vs-logical': secVsLogicalRef,
      'sec27-shopping': secShoppingRef,
      'sec27-takeaway': secTakeawayRef,
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
      className="topic27-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={5}
        moduleName="Conditions, Loops & Problem-Solving"
        topicNum={3}
        totalTopicsInModule={8}
        englishTitle="Nested Conditions"
        hindiTitle="Nested Conditions"
        subtitleEnglish="Introduction to nested conditions."
        subtitleHindi="Nested conditions (if ke andar if) ka introduction."
        emoji="🏢"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec27-title'}
        sectionRef={secTitleRef}
        sectionId="sec27-title"
      />

      {/* Section 1: Concept & Exam Hall Entry */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'Nested Condition क्या है? (Exam Hall Entry)' : 'What Is a Nested Condition?'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'परीक्षा हॉल में प्रवेश के लिए दो जांचें होती हैं: पहले अटेंडेंस 75% से ज्यादा है या नहीं। अगर हाँ, तो फीस भरी है या नहीं। अगर पहली ही जांच फेल हो जाए, तो दूसरी जांच की जरूरत ही नहीं पड़ती!'
            : 'To enter an exam hall: Stage 1 checks Attendance >= 75%. If True, Stage 2 checks Fees Paid. If Stage 1 fails, Stage 2 is skipped completely!'}
        </p>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`attendance = 85
fees_paid = True

if attendance >= 75:
    if fees_paid:
        print("Allowed to enter")
    else:
        print("Please pay the fees")
else:
    print("Attendance is too low")

# Output: Allowed to enter`}
        </pre>
      </div>

      {/* Section 2: Visual Decision Tree */}
      <div ref={secDecisionTreeRef} className="bg-gradient-to-br from-purple-50 to-indigo-50/60 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-4">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>🌳</span> {isHi ? 'विज़ुअल डिसीज़न ट्री (Visual Decision Flow)' : 'Visual Decision Tree'}
        </h4>
        <div className="max-w-md mx-auto text-center font-mono text-xs space-y-2">
          <div className="p-2 bg-white rounded-lg border border-purple-200 font-bold shadow-sm">
            START ➔ Attendance &gt;= 75%?
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-emerald-700 font-bold">YES (True) ↓</span>
              <div className="p-2 bg-purple-100 rounded-lg border border-purple-300 font-bold">
                Fees Paid?
              </div>
              <div className="grid grid-cols-2 gap-1 pt-1">
                <div className="p-2 bg-emerald-200 text-emerald-900 rounded font-bold shadow-sm">
                  Yes ➔ Allowed ✅
                </div>
                <div className="p-2 bg-amber-200 text-amber-900 rounded font-bold shadow-sm">
                  No ➔ Pay Fees ⚠️
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-rose-600 font-bold">NO (False) ↓</span>
              <div className="p-3 bg-rose-100 text-rose-800 rounded-lg border border-rose-300 font-bold shadow-sm h-full flex items-center justify-center">
                Attendance Too Low ❌
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Indentation Levels Visual */}
      <div ref={secIndentRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'इंडेंटेशन के लेवल्स (Indentation Levels)' : 'Understanding Indentation Levels'}</h3>
        </div>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs md:text-sm space-y-1">
          <div><span className="text-amber-400 font-bold">if</span> condition_one: <span className="text-slate-500"># Level 0 (Outer)</span></div>
          <div className="pl-6"><span className="text-cyan-400 font-bold">if</span> condition_two: <span className="text-slate-500"># Level 1 (4 spaces - Inner)</span></div>
          <div className="pl-12 text-emerald-300">print("Both passed") <span className="text-slate-500"># Level 2 (8 spaces)</span></div>
        </div>
      </div>

      {/* Section 4: Nested vs Logical Operators */}
      <div ref={secVsLogicalRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'Nested Conditions बनाम Logical AND' : 'Nested vs Logical Operators'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? '`if attendance >= 75 and fees_paid:` Code छोटा तो होता है, लेकिन जब कोई फेल होता है तो पता नहीं चलता कि अटेंडेंस कम थी या फीस नहीं दी थी! Nested Condition हर समस्या का अलग-अलग संदेश देने में मददगार है।'
            : 'Using `and` makes code short, but cannot give specific feedback on WHICH requirement failed. Nested conditions allow exact diagnostics.'}
        </p>
      </div>

      {/* Section 5: Online Shopping Case Study */}
      <div ref={secShoppingRef} className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-200 shadow-sm space-y-3">
        <h4 className="font-bold text-indigo-900 text-sm md:text-base flex items-center gap-2">
          <span>🛒</span> {isHi ? 'रियल-लाइफ: ऑनलाइन शॉपिंग स्टॉक और बैलेंस' : 'Real-Life: Online Shopping Checkout'}
        </h4>
        <pre className="bg-slate-900 text-indigo-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`in_stock = True
wallet_balance = 500
product_price = 350

if in_stock:
    if wallet_balance >= product_price:
        print("Order placed successfully")
    else:
        print("Insufficient balance")
else:
    print("Product out of stock")

# Output: Order placed successfully`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Nested Conditions का उपयोग तब करें जब अगला फैसला पिछले फैसले के सच होने पर निर्भर करता हो और हर स्टेज पर अलग Output देना हो।'
            : 'Use nested conditions when next decision depends on the previous step passing, and distinct feedback is needed at each level.'}
        </p>
      </div>
    </div>
  );
};
export default Topic27NestedConditionsLesson;
