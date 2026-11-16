import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic50VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic50WhatIsNumpyLesson: React.FC<Topic50VisualLessonProps> = ({
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
  const secStoryRef = useRef<HTMLDivElement>(null);
  const secWhatIsRef = useRef<HTMLDivElement>(null);
  const secImportFirstRef = useRef<HTMLDivElement>(null);
  const secVectorizedCalcRef = useRef<HTMLDivElement>(null);
  const secListVsArrayRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec50-title': secTitleRef,
      'sec50-story': secStoryRef,
      'sec50-whatis': secWhatIsRef,
      'sec50-import-first': secImportFirstRef,
      'sec50-vectorized-calc': secVectorizedCalcRef,
      'sec50-list-vs-array': secListVsArrayRef,
      'sec50-takeaway': secTakeawayRef,
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
      className="topic50-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={8}
        moduleName="NumPy for Numerical Analysis"
        topicNum={1}
        totalTopicsInModule={8}
        englishTitle="What Is NumPy? (Numerical Python)"
        hindiTitle="What Is NumPy? (Numerical Python)"
        subtitleEnglish="NumPy: High-Speed Numerical Computing"
        subtitleHindi="NumPy: High-Speed Numerical Computing"
        emoji="⚡"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec50-title'}
        sectionRef={secTitleRef}
        sectionId="sec50-title"
      />

      {/* SECTION 1: REAL LIFE STORY */}
      <div
        ref={secStoryRef}
        data-mentor-target="sec50-story"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'दुकानदार की कहानी: 10 लाख कीमतों में ₹50 की बढ़ोतरी' : 'The Retail Store Story: Adding ₹50 to 1,000,000 Prices'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Python List vs NumPy: Loop की सुस्ती vs NumPy की सुपरफास्ट स्पीड' : 'Why regular Python lists struggle with massive numeric operations'}
            </p>
          </div>
        </div>

        <p className="text-sm text-[#4A4768] leading-relaxed">
          {isHi ? (
            <>
              Value लीजिए आप एक स्टोर में काम करते हैं जहां 5 प्रोडक्ट्स की कीमतें हैं: <strong>₹100, ₹200, ₹300, ₹400, ₹500</strong>। स्टोर मालिक हर प्रोडक्ट पर <strong>₹50</strong> बढ़ाना चाहता है। Python List में हमें एक-एक करके <code>for</code> Loop चलाना पड़ता है। 5 आइटम्स पर तो ठीक है, लेकिन अगर 10 लाख प्रोडक्ट्स हों, तो Loop बहुत धीमा हो जाएगा!
            </>
          ) : (
            <>
              Imagine a retail store with product prices: <strong>₹100, ₹200, ₹300, ₹400, ₹500</strong>. The manager wants to increase all prices by <strong>₹50</strong>. With Python lists, you must loop item-by-item with <code>.append()</code>. That works for 5 items, but with 1,000,000 prices, standard loops waste massive memory and CPU time!
            </>
          )}
        </p>

        {/* COMPARISON BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-4 space-y-2">
            <span className="text-xs font-bold text-[#77758A]">
              {isHi ? 'कछुआ तरीका: Python List Loop (Slow)' : 'Method 1: Python List Loop (Slow)'}
            </span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white leading-relaxed">
              prices = [100, 200, 300, 400, 500]<br />
              new_prices = []<br />
              <span className="text-amber-400">for</span> p <span className="text-amber-400">in</span> prices:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;new_prices.append(p + 50)<br />
              print(new_prices) <span className="text-purple-300"># [150, 250, 350, 450, 550]</span>
            </div>
            <p className="text-[11px] text-[#77758A]">
              {isHi ? '⚠️ 10 लाख आइटम्स पर 10 लाख बार अपेंड और मेमोरी री-एलोकेशन!' : '⚠️ Allocates dynamic references in memory on every single append.'}
            </p>
          </div>

          <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/60 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">
              {isHi ? 'चीता तरीका: NumPy Vectorization (Superfast ⚡)' : 'Method 2: NumPy Vectorization (Superfast ⚡)'}
            </span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white leading-relaxed">
              <span className="text-amber-400">import</span> numpy <span className="text-amber-400">as</span> np<br /><br />
              prices = np.array([100, 200, 300, 400, 500])<br />
              new_prices = prices + 50<br />
              print(new_prices) <span className="text-emerald-300"># [150 250 350 450 550]</span>
            </div>
            <p className="text-[11px] text-emerald-700 font-semibold">
              {isHi ? '✨ शून्य Loop! C-लेवल पर समानांतर (Parallel) सुपर-स्पीड Calculation!' : '✨ Zero loops! Lightning-fast C-level parallel execution in hardware memory!'}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: WHAT IS NUMPY */}
      <div
        ref={secWhatIsRef}
        data-mentor-target="sec50-whatis"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'NumPy क्या है? (Numerical Python)' : 'What Is NumPy and ndarray?'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'N-Dimensional Array: आधुनिक Data Science की नींव' : 'The N-Dimensional Array data structure behind Pandas, Scikit-Learn & PyTorch'}
            </p>
          </div>
        </div>

        <p className="text-sm text-[#4A4768] leading-relaxed">
          {isHi ? (
            <>
              <strong>NumPy</strong> का मतलब है <strong>Numerical Python</strong>। यह Python की सबसे शक्तिशाली Library है जो <strong>ndarray</strong> (N-Dimensional Array) प्रदान करती है। इसमें Data मेमोरी के एक ही ब्लॉक (contiguous memory) में स्टोर होता है, जिससे गणनाएं 50x से 100x तक तेज होती हैं।
            </>
          ) : (
            <>
              <strong>NumPy</strong> stands for <strong>Numerical Python</strong>. Its core foundation is the <strong>ndarray</strong> (N-dimensional array), which stores homogeneous numeric values in contiguous blocks of memory, allowing blazing fast SIMD CPU vectorization.
            </>
          )}
        </p>

        {/* DOMAINS BADGES */}
        <div className="flex flex-wrap gap-2 pt-2">
          {['Data Analytics', 'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Financial Modeling', 'Statistics', 'Deep Learning'].map((domain) => (
            <span key={domain} className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-100">
              ✓ {domain}
            </span>
          ))}
        </div>
      </div>

      {/* SECTION 3: IMPORT & FIRST ARRAY */}
      <div
        ref={secImportFirstRef}
        data-mentor-target="sec50-import-first"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'स्थापना, Import और पहला NumPy Array' : 'Installation, Import & First NumPy Array'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'हर शब्द और प्रतीक की आसान व्याख्या' : 'Line-by-line and symbol-by-symbol breakdown'}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/40 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#4C2A9A]">Terminal / Shell Installation:</span>
            <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-purple-200">One-time setup</span>
          </div>
          <div className="bg-[#202033] p-2.5 rounded font-mono text-xs text-white">
            <span className="text-amber-400">pip</span> install numpy
          </div>
        </div>

        {/* EXPLAIN EVERY WORD TABLE */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-bold text-[#7045E8] uppercase tracking-wider">
            {isHi ? '`import numpy as np` का मतलब:' : 'Every Word in `import numpy as np` Explained:'}
          </h4>
          <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold">
                <tr>
                  <th className="py-2.5 px-4">Code</th>
                  <th className="py-2.5 px-4">{isHi ? 'अर्थ (Meaning)' : 'Meaning'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE5F5] font-mono text-[#202033]">
                <tr>
                  <td className="py-2 px-4 font-bold text-[#7045E8]">import</td>
                  <td className="py-2 px-4 font-sans">{isHi ? 'Library या टूलबॉक्स को लोड करो' : 'Load an external library into current script'}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-bold text-[#7045E8]">numpy</td>
                  <td className="py-2 px-4 font-sans">{isHi ? 'Library का वास्तविक नाम' : 'The exact name of the numerical library'}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-bold text-[#7045E8]">as</td>
                  <td className="py-2 px-4 font-sans">{isHi ? 'छोटा उपनाम (Alias) देने के लिए' : 'Keyword to assign a convenient alias'}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-bold text-[#7045E8]">np</td>
                  <td className="py-2 px-4 font-sans">{isHi ? 'ग्लोबल स्टैंडर्ड शॉर्टकट (`numpy.array` की जगह `np.array`)' : 'Worldwide standard shorthand nickname for NumPy'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 4: VECTORIZED CALCULATION VISUAL */}
      <div
        ref={secVectorizedCalcRef}
        data-mentor-target="sec50-vectorized-calc"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Vector Calculation (Vectorized Calculation) का Visual जादू' : 'Visual Representation of Vectorized Math'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'कैसे एक ही झटके में हर एलिमेंट पर +50 लागू होता है' : 'Element-wise application of scalar mathematics across continuous memory'}
            </p>
          </div>
        </div>

        {/* VISUAL ASCII/SVG STYLE DIAGRAM */}
        <div className="rounded-xl border border-purple-200 bg-gradient-to-b from-[#F6F2FF]/60 to-white p-6 space-y-4">
          <div className="text-center font-bold text-xs text-[#4C2A9A]">
            Original Array: prices = np.array([100, 200, 300, 400, 500])
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { idx: 0, val: 100, res: 150 },
              { idx: 1, val: 200, res: 250 },
              { idx: 2, val: 300, res: 350 },
              { idx: 3, val: 400, res: 450 },
              { idx: 4, val: 500, res: 550 },
            ].map((item) => (
              <div key={item.idx} className="flex flex-col items-center space-y-1">
                <span className="text-[10px] font-mono text-[#77758A]">Index {item.idx}</span>
                <div className="w-16 h-12 rounded-lg bg-white border border-purple-300 shadow-xs flex items-center justify-center font-mono font-bold text-sm text-[#202033]">
                  ₹{item.val}
                </div>
                <span className="text-xs font-bold text-[#7045E8]">+50</span>
                <div className="w-16 h-12 rounded-lg bg-[#7045E8] text-white shadow-xs flex items-center justify-center font-mono font-bold text-sm">
                  ₹{item.res}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-[#77758A] pt-2">
            {isHi
              ? '👉 ध्यान दें: NumPy Output में एलिमेंट्स के बीच कॉमा `,` नहीं होता! [150 250 350 450 550]'
              : '👉 Notice: NumPy prints clean whitespace between array elements, not commas: [150 250 350 450 550]'}
          </div>
        </div>
      </div>

      {/* SECTION 5: PYTHON LIST VS NUMPY ARRAY */}
      <div
        ref={secListVsArrayRef}
        data-mentor-target="sec50-list-vs-array"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            05
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Python List बनाम NumPy Array (The Crucial Differences)' : 'Python List vs NumPy Array Comparison'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '`+` Operator का व्यवहार: जोड़ना (Addition) बनाम चिपकाना (Concatenation)' : 'Concatenation vs element-wise mathematical addition'}
            </p>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">फ़ीचर (Feature)</th>
                <th className="py-3 px-4">Python List</th>
                <th className="py-3 px-4">NumPy Array</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">{isHi ? 'Data Type' : 'Data Types'}</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'मिश्रित (Heterogeneous: int, str, float)' : 'Mixed types supported'}</td>
                <td className="py-2.5 px-4 font-sans font-semibold text-emerald-700">{isHi ? 'समान (Homogeneous: single dtype)' : 'Single common dtype for max speed'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]"><code>arr + arr</code></td>
                <td className="py-2.5 px-4 font-mono text-amber-700">[10, 20] + [10, 20] &rarr; [10, 20, 10, 20]</td>
                <td className="py-2.5 px-4 font-mono text-emerald-700 font-bold">[10, 20] + [10, 20] &rarr; [20, 40] ⚡</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">{isHi ? 'स्पीड व मेमोरी' : 'Speed & Memory'}</td>
                <td className="py-2.5 px-4 font-sans text-rose-600">{isHi ? 'धीमी, अधिक रैम खपत (Pointers)' : 'Slower, extra pointer overhead'}</td>
                <td className="py-2.5 px-4 font-sans font-semibold text-emerald-700">{isHi ? '50x-100x तेज़, कॉम्पैक्ट C-मेमोरी' : '50x-100x faster, continuous C memory'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">{isHi ? 'गणितीय ऑपरेशन्स' : 'Math Operations'}</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'Loop या List Comprehension अनिवार्य' : 'Requires explicit loops'}</td>
                <td className="py-2.5 px-4 font-sans font-semibold text-emerald-700">{isHi ? 'वेक्टराइज़्ड ऑपरेशन्स (Zero Loop)' : 'Vectorized operations native support'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec50-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 1 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? 'NumPy = Numerical Python:' : 'NumPy = Numerical Python:'}</strong>{' '}
            {isHi ? 'यह बड़े संख्यात्मक Data पर तेज़ गणितीय गणनाएं करने के लिए बनी Library है।' : 'Specialized library for fast mathematical calculations on numerical datasets.'}
          </li>
          <li>
            <strong>{isHi ? 'वेक्टराइजेशन का लाभ:' : 'Vectorization Advantage:'}</strong>{' '}
            {isHi ? 'बिना Python Loop लिखे सीधे पूरे Array पर गणितीय ऑपरेशन्स जैसे `prices + 50` करें।' : 'Apply math directly to the whole array without writing slow loops.'}
          </li>
          <li>
            <strong>{isHi ? 'समान Data Type (Homogeneous dtype):' : 'Homogeneous Memory:'}</strong>{' '}
            {isHi ? 'NumPy Array के सभी एलिमेंट्स समान Data Type के होते हैं जिससे सीपीयू ऑप्टिमाइज़ेशन मिलता है।' : 'All elements share a common data type for extreme speed and low RAM footprint.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
