import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic61VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic61InspectingDataLesson: React.FC<Topic61VisualLessonProps> = ({
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
  const secHeadTailRef = useRef<HTMLDivElement>(null);
  const secShapeDtypesRef = useRef<HTMLDivElement>(null);
  const secInfoDeepDiveRef = useRef<HTMLDivElement>(null);
  const secDescribeStatsRef = useRef<HTMLDivElement>(null);
  const secWorkflowRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec61-title': secTitleRef,
      'sec61-head-tail': secHeadTailRef,
      'sec61-shape-dtypes': secShapeDtypesRef,
      'sec61-info-deepdive': secInfoDeepDiveRef,
      'sec61-describe-stats': secDescribeStatsRef,
      'sec61-workflow': secWorkflowRef,
      'sec61-takeaway': secTakeawayRef,
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
      className="topic61-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={4}
        totalTopicsInModule={13}
        englishTitle="Inspecting Data with head(), info() and describe()"
        hindiTitle="Inspecting Data with head(), info() and describe()"
        subtitleEnglish="First steps in EDA and inspection"
        subtitleHindi="First steps in EDA and inspection"
        emoji="🔍"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec61-title'}
        sectionRef={secTitleRef}
        sectionId="sec61-title"
      />

      {/* SECTION 1: HEAD AND TAIL */}
      <div
        ref={secHeadTailRef}
        data-mentor-target="sec61-head-tail"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'शुरुआती और अंतिम Rows देखना: `head()` व `tail()`' : 'Viewing Boundaries: head() and tail()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'डिफ़ॉल्ट रूप से 5 Rows या अपनी पसंद की संख्या (e.g. head(3))' : 'Quick visual checks for column alignment and formatting'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed space-y-1">
            <span className="text-purple-300"># First 3 rows:</span><br />
            print(df.<span className="text-blue-400">head</span>(3))<br /><br />
            <span className="text-purple-300"># Last 2 rows:</span><br />
            print(df.<span className="text-blue-400">tail</span>(2))
          </div>

          <div className="border border-purple-200 rounded-xl bg-[#F6F2FF]/40 p-4 text-xs text-[#4A4768] space-y-2">
            <span className="font-bold text-[#4C2A9A]">Analyst टिप:</span>
            <p>
              हमेशा File लोड करने के बाद सबसे पहले <code>df.head()</code> चलाएं ताकि पुष्टि हो सके कि Header सही आए हैं और Data सही Columns में मैप हुआ है।
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: SHAPE, COLUMNS & DTYPES */}
      <div
        ref={secShapeDtypesRef}
        data-mentor-target="sec61-shape-dtypes"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'आकार और Data Type: `shape` और `dtypes`' : 'Shape, Columns, and Data Types'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Rows की कुल संख्या और हर Column का Data Type' : 'Dimensions tuple and column data types'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/50 p-3 space-y-1">
            <span className="text-[10px] font-mono font-bold text-[#7045E8]">df.shape</span>
            <div className="text-xs font-bold text-[#202033]">(5, 3)</div>
            <p className="text-[11px] text-[#77758A]">5 Rows और 3 Columns</p>
          </div>
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/50 p-3 space-y-1">
            <span className="text-[10px] font-mono font-bold text-[#7045E8]">df.columns</span>
            <div className="text-xs font-bold text-[#202033]">[&apos;Name&apos;, &apos;Age&apos;, ...]</div>
            <p className="text-[11px] text-[#77758A]">सभी Column नामों की List</p>
          </div>
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/50 p-3 space-y-1">
            <span className="text-[10px] font-mono font-bold text-[#7045E8]">df.dtypes</span>
            <div className="text-xs font-bold text-[#202033]">object, int64</div>
            <p className="text-[11px] text-[#77758A]">टेक्स्ट vs न्यूमेरिकल Columns</p>
          </div>
        </div>
      </div>

      {/* SECTION 3: INFO DEEP DIVE */}
      <div
        ref={secInfoDeepDiveRef}
        data-mentor-target="sec61-info-deepdive"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '`df.info()`: संपूर्ण ढांचागत सारांश' : 'df.info(): Full Structural Architecture'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'गैर-शून्य Value (Non-null counts) और मेमोरी उपयोग' : 'Checking for missing nulls and memory consumption at a glance'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          df.<span className="text-blue-400">info</span>()<br /><br />
          <span className="text-purple-300"># Output:</span><br />
          &lt;class &apos;pandas.core.frame.DataFrame&apos;&gt;<br />
          RangeIndex: 5 entries, 0 to 4<br />
          Data columns (total 3 columns):<br />
          &nbsp;#&nbsp;&nbsp;Column&nbsp;&nbsp;Non-Null Count&nbsp;&nbsp;Dtype<br />
          ---&nbsp;------&nbsp;&nbsp;--------------&nbsp;&nbsp;-----<br />
          &nbsp;0&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;5 non-null&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;object<br />
          &nbsp;1&nbsp;&nbsp;Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 non-null&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int64<br />
          &nbsp;2&nbsp;&nbsp;Marks&nbsp;&nbsp;&nbsp;5 non-null&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int64<br />
          dtypes: int64(2), object(1)<br />
          memory usage: 248.0+ bytes
        </div>
      </div>

      {/* SECTION 4: DESCRIBE STATS */}
      <div
        ref={secDescribeStatsRef}
        data-mentor-target="sec61-describe-stats"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '`df.describe()`: सांख्यिकीय 5-नंबर सारांश' : 'df.describe(): 5-Number Statistical Summary'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'मीन, मानक विचलन, चतुर्थक (25%, 50%, 75%), और सीमाएं' : 'Automated distribution profile for all numeric columns'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold">
              <tr>
                <th className="py-2.5 px-4 font-sans">Statistic</th>
                <th className="py-2.5 px-4 font-sans">{isHi ? 'अर्थ' : 'Meaning'}</th>
                <th className="py-2.5 px-4">Age</th>
                <th className="py-2.5 px-4">Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] text-[#202033]">
              <tr><td className="py-2 px-4 font-bold text-[#7045E8]">count</td><td className="py-2 px-4 font-sans">गैर-मिसिंग Values की संख्या</td><td>5.0</td><td>5.0</td></tr>
              <tr><td className="py-2 px-4 font-bold text-[#7045E8]">mean</td><td className="py-2 px-4 font-sans">औसत Value</td><td>22.0</td><td>80.0</td></tr>
              <tr><td className="py-2 px-4 font-bold text-[#7045E8]">std</td><td className="py-2 px-4 font-sans">मानक विचलन (Spread)</td><td>1.58</td><td>7.90</td></tr>
              <tr><td className="py-2 px-4 font-bold text-[#7045E8]">min</td><td className="py-2 px-4 font-sans">न्यूनतम Value</td><td>20.0</td><td>70.0</td></tr>
              <tr><td className="py-2 px-4 font-bold text-[#7045E8]">50%</td><td className="py-2 px-4 font-sans">मीडियन (मध्यम Value)</td><td>22.0</td><td>80.0</td></tr>
              <tr><td className="py-2 px-4 font-bold text-[#7045E8]">max</td><td className="py-2 px-4 font-sans">अधिकतम Value</td><td>24.0</td><td>90.0</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: RECOMMENDED WORKFLOW */}
      <div
        ref={secWorkflowRef}
        data-mentor-target="sec61-workflow"
        className="rounded-2xl border border-purple-200 bg-gradient-to-r from-[#F6F2FF] to-white p-5 space-y-3"
      >
        <span className="text-xs font-bold text-[#4C2A9A] uppercase tracking-wider flex items-center gap-1.5">
          <span>🎯</span> {isHi ? 'Data Analyst का अनुशंसित इंस्पेक्शन क्रम:' : 'Recommended 6-Step Initial Exploration Workflow:'}
        </span>
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="bg-white px-2.5 py-1 rounded border border-purple-200 text-[#7045E8] font-bold">1. head()</span>
          <span>&rarr;</span>
          <span className="bg-white px-2.5 py-1 rounded border border-purple-200 text-[#7045E8] font-bold">2. shape</span>
          <span>&rarr;</span>
          <span className="bg-white px-2.5 py-1 rounded border border-purple-200 text-[#7045E8] font-bold">3. info()</span>
          <span>&rarr;</span>
          <span className="bg-white px-2.5 py-1 rounded border border-purple-200 text-[#7045E8] font-bold">4. describe()</span>
          <span>&rarr;</span>
          <span className="bg-white px-2.5 py-1 rounded border border-purple-200 text-[#7045E8] font-bold">5. isna().sum()</span>
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec61-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 4 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>`head()` और `tail()`:</strong> Dataset के ऊपरी और निचले हिस्सों की तुरंत बनावट जांचते हैं।
          </li>
          <li>
            <strong>`info()`:</strong> Data Types और मिसिंग Values का सटीक ब्योरा देता है।
          </li>
          <li>
            <strong>`describe()`:</strong> न्यूमेरिकल Columns का त्वरित सांख्यिकीय विश्लेषण प्रदान करता है।
          </li>
        </ul>
      </div>
    </div>
  );
};
