import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic54VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic54VectorizedOperationsLesson: React.FC<Topic54VisualLessonProps> = ({
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
  const secElementWiseMathRef = useRef<HTMLDivElement>(null);
  const secBroadcastingConceptRef = useRef<HTMLDivElement>(null);
  const secBroadcasting2DRef = useRef<HTMLDivElement>(null);
  const secStarVsAtRef = useRef<HTMLDivElement>(null);
  const secRevenueExampleRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec54-title': secTitleRef,
      'sec54-elementwise-math': secElementWiseMathRef,
      'sec54-broadcasting-concept': secBroadcastingConceptRef,
      'sec54-broadcasting-2d': secBroadcasting2DRef,
      'sec54-star-vs-at': secStarVsAtRef,
      'sec54-revenue-example': secRevenueExampleRef,
      'sec54-takeaway': secTakeawayRef,
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
      className="topic54-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={8}
        moduleName="NumPy for Numerical Analysis"
        topicNum={5}
        totalTopicsInModule={8}
        englishTitle="Vectorized Operations and Broadcasting"
        hindiTitle="Vectorized Operations and Broadcasting"
        subtitleEnglish="Vectorized Operations and Broadcasting"
        subtitleHindi="Vectorized Operations and Broadcasting"
        emoji="🚀"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec54-title'}
        sectionRef={secTitleRef}
        sectionId="sec54-title"
      />

      {/* SECTION 1: ELEMENT-WISE ARITHMETIC */}
      <div
        ref={secElementWiseMathRef}
        data-mentor-target="sec54-elementwise-math"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'तत्व-दर-तत्व गणनाएं (Element-Wise Arithmetic)' : 'Element-Wise Math: +, -, *, /'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'दो समान आकार के Array के बीच सीधे Operator चलाना' : 'Applying basic arithmetic operators directly between arrays of identical shape'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">Element-Wise Operations:</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white leading-relaxed">
              a = np.array([10, 20, 30])<br />
              b = np.array([1, 2, 3])<br /><br />
              print(a + b) <span className="text-emerald-300"># [11 22 33] (Addition)</span><br />
              print(a - b) <span className="text-emerald-300"># [ 9 18 27] (Subtraction)</span><br />
              print(a * b) <span className="text-emerald-300"># [10 40 90] (Multiplication)</span><br />
              print(a / b) <span className="text-emerald-300"># [10. 10. 10.] (True Division)</span>
            </div>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">Scalar Arithmetic (Broadcasting to all):</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white leading-relaxed">
              numbers = np.array([10, 20, 30])<br /><br />
              print(numbers * 2)   <span className="text-emerald-300"># [20 40 60]</span><br />
              print(numbers + 100) <span className="text-emerald-300"># [110 120 130]</span><br />
              print(numbers ** 2)  <span className="text-emerald-300"># [100 400 900] (Power)</span>
            </div>
            <p className="text-[11px] text-[#77758A]">
              {isHi ? 'एकल संख्या (Scalar) पूरे Array के प्रत्येक Value पर लागू हो जाती है।' : 'A single scalar value stretches conceptually across every single element.'}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: BROADCASTING CONCEPT & RULES */}
      <div
        ref={secBroadcastingConceptRef}
        data-mentor-target="sec54-broadcasting-concept"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'ब्रॉडकास्टिंग क्या है? (Broadcasting Rules)' : 'What Is Broadcasting? The Compatibility Rules'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'अलग-अलग आकारों के Array को बिना मेमोरी बर्बाद किए जोड़ना' : 'Performing operations between arrays of different shapes without memory duplication'}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-[#F6F2FF] to-white p-5 space-y-3">
          <div className="flex items-center gap-2 text-[#4C2A9A] font-bold text-sm">
            <span>📏</span>
            <h3>{isHi ? 'NumPy ब्रॉडकास्टिंग का स्वर्णिम नियम (Right-to-Left Check):' : 'The Golden Right-to-Left Dimension Compatibility Rule:'}</h3>
          </div>
          <p className="text-xs text-[#4A4768]">
            {isHi
              ? 'NumPy दोनों Array के शेप्स की तुलना दाएं से बाएं (Trailing dimensions) करता है। दो आयाम संगत (Compatible) होते हैं यदि:'
              : 'NumPy compares array shapes from rightmost dimension backwards. Two dimensions match if:'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded-lg border border-purple-100 shadow-2xs font-semibold text-[#202033]">
              1. वे बिल्कुल बराबर हों (They are identical, e.g. 3 == 3)
            </div>
            <div className="p-3 bg-white rounded-lg border border-purple-100 shadow-2xs font-semibold text-[#202033]">
              2. या उनमें से एक Value 1 हो (One of them is 1)
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: BROADCASTING 2D WITH 1D */}
      <div
        ref={secBroadcasting2DRef}
        data-mentor-target="sec54-broadcasting-2d"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '2D Matrix और 1D Vector का ब्रॉडकास्टिंग' : 'Broadcasting a 1D Vector Across a 2D Matrix'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Cells Matrix में हर Row पर बोनस जोड़ना' : 'Broadcasting monthly bonus vector across all product columns'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed overflow-x-auto space-y-1">
          sales = np.array([<br />
          &nbsp;&nbsp;[100, 200, 300], <span className="text-purple-300"># Row 0: Shape (2, 3)</span><br />
          &nbsp;&nbsp;[400, 500, 600]  <span className="text-purple-300"># Row 1</span><br />
          ])<br />
          bonus = np.array([10, 20, 30]) <span className="text-purple-300"># Shape (3,)</span><br /><br />
          result = sales + bonus<br />
          print(result)<br />
          <span className="text-emerald-300"># [[110 220 330]<br />#  [410 520 630]] (Bonus added across each row!)</span>
        </div>
      </div>

      {/* SECTION 4: STAR (*) VS AT (@) */}
      <div
        ref={secStarVsAtRef}
        data-mentor-target="sec54-star-vs-at"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '`*` vs `@`: तत्व-दर-तत्व गुणा बनाम Matrix गुणन' : 'Element-Wise (*) vs Matrix Multiplication (@)'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Data Analytics और Machine Learning का सबसे बड़ा अंतर' : 'Hadamard product vs linear algebra dot product'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">`a * b` (Element-Wise Multiplication):</span>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'आमने-सामने वाले Values का सीधा गुणा।' : 'Directly multiplies corresponding elements.'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              a = np.array([[1, 2], [3, 4]])<br />
              b = np.array([[5, 6], [7, 8]])<br />
              print(a * b)<br />
              <span className="text-purple-300"># [[ 5 12]<br />#  [21 32]]</span>
            </div>
          </div>

          <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
            <span className="text-xs font-bold text-emerald-700 font-mono">`a @ b` (Matrix Multiplication Dot Product):</span>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Row &times; Column का गणितीय डॉट प्रोडक्ट।' : 'Linear algebra dot product of row by column.'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              print(a @ b)<br />
              <span className="text-emerald-300"># [[19 22]<br />#  [43 50]]</span><br />
              <span className="text-[10px] text-purple-200"># (1*5 + 2*7 = 19)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: REAL LIFE REVENUE CALCULATION */}
      <div
        ref={secRevenueExampleRef}
        data-mentor-target="sec54-revenue-example"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
      >
        <div className="flex items-center gap-2 text-[#7045E8]">
          <span className="text-lg">💰</span>
          <h3 className="text-sm font-bold">
            {isHi ? 'रियल-लाइफ उदाहरण: प्रोडक्ट Revenue की Calculation' : 'Real-Life Retail Application: Product Revenue Vectorization'}
          </h3>
        </div>
        <p className="text-xs text-[#4A4768]">
          {isHi
            ? 'कीमतों और बेची गई मात्राओं का एक ही झटके में वेक्टराइज़्ड गुणन:'
            : 'Multiplying prices and unit volumes without writing a single line of loop:'}
        </p>
        <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
          prices = np.array([10, 50, 100])<br />
          quantities = np.array([5, 2, 3])<br />
          revenue = prices * quantities<br />
          print(<span className="text-emerald-300">&quot;Revenue per product: ₹&quot;</span>, revenue) <span className="text-emerald-300"># [ 50 100 300]</span>
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec54-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 5 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? 'शून्य Loops (Zero Loops):' : 'Zero Loops:'}</strong>{' '}
            {isHi ? 'वेक्टराइजेशन से Code छोटा, पठनीय और Hardware-ऑप्टिमाइज़्ड बनता है।' : 'Vectorization replaces multi-line loops with single, expressive math statements.'}
          </li>
          <li>
            <strong>{isHi ? 'ब्रॉडकास्टिंग अनुकूलता:' : 'Broadcasting Compatibility:'}</strong>{' '}
            {isHi ? 'आकार दाएं से बाएं जांचे जाते हैं; यदि आयाम बराबर हों या 1 हों तो वे संगत होते हैं।' : 'Shapes align right-to-left; dimensions must be equal or 1 to broadcast.'}
          </li>
          <li>
            <strong>{isHi ? '`*` vs `@` को याद रखें:' : 'Remember `*` vs `@`:'}</strong>{' '}
            {isHi ? '`*` एलिमेंट-वाइज गुणा है, जबकि `@` Matrix डॉट प्रोडक्ट है।' : '`*` performs element-by-element math; `@` performs true linear algebra matrix dot products.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
