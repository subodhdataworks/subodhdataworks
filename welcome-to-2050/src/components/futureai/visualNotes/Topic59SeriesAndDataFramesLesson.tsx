import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic59VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic59SeriesAndDataFramesLesson: React.FC<Topic59VisualLessonProps> = ({
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
  const secSeriesConceptRef = useRef<HTMLDivElement>(null);
  const secCustomIndexRef = useRef<HTMLDivElement>(null);
  const secDataFrameConceptRef = useRef<HTMLDivElement>(null);
  const secSeriesVsDfRef = useRef<HTMLDivElement>(null);
  const secSingleVsDoubleBracketRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec59-title': secTitleRef,
      'sec59-series-concept': secSeriesConceptRef,
      'sec59-custom-index': secCustomIndexRef,
      'sec59-dataframe-concept': secDataFrameConceptRef,
      'sec59-series-vs-df': secSeriesVsDfRef,
      'sec59-single-vs-double': secSingleVsDoubleBracketRef,
      'sec59-takeaway': secTakeawayRef,
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
      className="topic59-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={2}
        totalTopicsInModule={13}
        englishTitle="Series and DataFrames"
        hindiTitle="Series and DataFrames"
        subtitleEnglish="Core data structures in Pandas"
        subtitleHindi="Core data structures in Pandas"
        emoji="📊"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec59-title'}
        sectionRef={secTitleRef}
        sectionId="sec59-title"
      />

      {/* SECTION 1: WHAT IS A SERIES */}
      <div
        ref={secSeriesConceptRef}
        data-mentor-target="sec59-series-concept"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Series क्या है? (The 1D Column)' : 'What Is a Series? (1D Labeled Column)'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Excel शीट का केवल एक अकेला Column जिसमें Index जुड़ा हो' : 'A single column of values paired with index positions'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed">
            <span className="text-amber-400">import</span> pandas <span className="text-amber-400">as</span> pd<br /><br />
            marks = pd.<span className="text-blue-400">Series</span>([70, 80, 90])<br />
            print(marks)
          </div>

          <div className="border border-purple-200 rounded-xl bg-[#F6F2FF]/40 p-4 font-mono text-xs text-[#202033] space-y-1">
            <span className="text-[10px] text-[#7045E8] font-bold uppercase tracking-wide">Output View:</span>
            <div className="flex justify-between border-b border-purple-100 py-1">
              <span className="text-[#77758A]">0 (Index)</span>
              <span className="font-bold">70</span>
            </div>
            <div className="flex justify-between border-b border-purple-100 py-1">
              <span className="text-[#77758A]">1 (Index)</span>
              <span className="font-bold">80</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#77758A]">2 (Index)</span>
              <span className="font-bold">90</span>
            </div>
            <div className="text-[10px] text-purple-700 pt-1">dtype: int64</div>
          </div>
        </div>
      </div>

      {/* SECTION 2: CUSTOM SERIES INDEX */}
      <div
        ref={secCustomIndexRef}
        data-mentor-target="sec59-custom-index"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'कस्टम Index (Custom Labels)' : 'Custom Series Index Labels'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '0, 1, 2 की जगह इंसानों के नाम या उत्पाद Code को लेबल बनाएं' : 'Replacing numbers with meaningful business keys'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          marks = pd.<span className="text-blue-400">Series</span>(<br />
          &nbsp;&nbsp;[70, 80, 90],<br />
          &nbsp;&nbsp;index=[<span className="text-emerald-300">&quot;Rahul&quot;</span>, <span className="text-emerald-300">&quot;Aman&quot;</span>, <span className="text-emerald-300">&quot;Priya&quot;</span>]<br />
          )<br /><br />
          print(marks[<span className="text-emerald-300">&quot;Aman&quot;</span>]) <span className="text-purple-300"># Output: 80 (Accessed directly by name!)</span>
        </div>
      </div>

      {/* SECTION 3: WHAT IS A DATAFRAME */}
      <div
        ref={secDataFrameConceptRef}
        data-mentor-target="sec59-dataframe-concept"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'DataFrame क्या है? (2D Labeled Table)' : 'What Is a DataFrame? (2D Labeled Table)'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Rows और Columns का पूरा Grid (Multiple Columns)' : 'Full tabular spreadsheet structure holding multiple heterogeneous columns'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          df = pd.<span className="text-blue-400">DataFrame</span>(&#123;<br />
          &nbsp;&nbsp;<span className="text-emerald-300">&quot;Name&quot;</span>: [<span className="text-emerald-300">&quot;Rahul&quot;</span>, <span className="text-emerald-300">&quot;Aman&quot;</span>, <span className="text-emerald-300">&quot;Priya&quot;</span>],<br />
          &nbsp;&nbsp;<span className="text-emerald-300">&quot;Marks&quot;</span>: [<span className="text-purple-300">70</span>, <span className="text-purple-300">80</span>, <span className="text-purple-300">90</span>],<br />
          &nbsp;&nbsp;<span className="text-emerald-300">&quot;City&quot;</span>: [<span className="text-emerald-300">&quot;Patna&quot;</span>, <span className="text-emerald-300">&quot;Delhi&quot;</span>, <span className="text-emerald-300">&quot;Mumbai&quot;</span>]<br />
          &#125;)<br /><br />
          print(df.shape) <span className="text-emerald-300"># (3, 3) &rarr; 3 Rows, 3 Columns</span>
        </div>
      </div>

      {/* SECTION 4: SERIES VS DATAFRAME */}
      <div
        ref={secSeriesVsDfRef}
        data-mentor-target="sec59-series-vs-df"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Series बनाम DataFrame तुलना' : 'Series vs DataFrame Comparison'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '1D vs 2D: संरचनात्मक अंतर' : 'One-dimensional column vs two-dimensional table'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">Series</th>
                <th className="py-3 px-4">DataFrame</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Dimensions</td>
                <td className="py-2.5 px-4">1D (One dimension)</td>
                <td className="py-2.5 px-4 font-semibold text-emerald-700">2D (Rows &amp; Columns)</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Real-life Analogy</td>
                <td className="py-2.5 px-4">A single spreadsheet column</td>
                <td className="py-2.5 px-4 font-semibold text-emerald-700">A full multi-column spreadsheet table</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Creation Syntax</td>
                <td className="py-2.5 px-4 font-mono">pd.Series()</td>
                <td className="py-2.5 px-4 font-mono font-bold text-[#7045E8]">pd.DataFrame()</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: SINGLE VS DOUBLE BRACKET */}
      <div
        ref={secSingleVsDoubleBracketRef}
        data-mentor-target="sec59-single-vs-double"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            05
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '`df["Col"]` vs `df[["Col"]]`: ब्रैकेट का रहस्य' : 'Single vs Double Bracket Selection Mystery'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'एक ब्रैकेट = Series (1D), दो ब्रैकेट = DataFrame (2D)' : 'Single bracket returns a Series; double brackets return a DataFrame'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">Single Bracket: `df["Marks"]`</span>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'केवल 1 Column को 1D Series के रूप में निकालता है।' : 'Extracts a single column as a 1D Series.'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              type(df[<span className="text-emerald-300">&quot;Marks&quot;</span>])<br />
              <span className="text-purple-300"># Output: pandas.core.series.Series</span>
            </div>
          </div>

          <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-emerald-700">Double Bracket: `df[["Marks"]]`</span>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Column को 2D DataFrame Table बनाकर निकालता है।' : 'Extracts as a 2D single-column DataFrame.'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              type(df[[<span className="text-emerald-300">&quot;Marks&quot;</span>]])<br />
              <span className="text-emerald-300"># Output: pandas.core.frame.DataFrame</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec59-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 2 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? 'Series = 1D:' : 'Series = 1D:'}</strong>{' '}
            {isHi ? 'एक ही Column का Data जो अपने Index से जुड़ा होता है।' : 'Single labeled column of data paired with index values.'}
          </li>
          <li>
            <strong>{isHi ? 'DataFrame = 2D:' : 'DataFrame = 2D:'}</strong>{' '}
            {isHi ? 'Rows और Columns का पूरा Grid जिसमें अनेक Columns हो सकते हैं।' : 'Two-dimensional tabular matrix of labeled rows and columns.'}
          </li>
          <li>
            <strong>{isHi ? 'ब्रैकेट का ध्यान रखें:' : 'Bracket Discipline:'}</strong>{' '}
            {isHi ? 'अगर आपको Table (DataFrame) चाहिए, तो हमेशा डबल ब्रैकेट `df[["Col1", "Col2"]]` का इस्तेमाल करें।' : 'Use double brackets `df[["Col"]]` whenever you need the result as a DataFrame.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
