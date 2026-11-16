import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic60VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic60ReadingCsvExcelLesson: React.FC<Topic60VisualLessonProps> = ({
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
  const secWhyCsvRef = useRef<HTMLDivElement>(null);
  const secReadCsvRef = useRef<HTMLDivElement>(null);
  const secReadExcelRef = useRef<HTMLDivElement>(null);
  const secChunkingUsecolsRef = useRef<HTMLDivElement>(null);
  const secTroubleshootingRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec60-title': secTitleRef,
      'sec60-why-csv': secWhyCsvRef,
      'sec60-read-csv': secReadCsvRef,
      'sec60-read-excel': secReadExcelRef,
      'sec60-chunking-usecols': secChunkingUsecolsRef,
      'sec60-troubleshooting': secTroubleshootingRef,
      'sec60-takeaway': secTakeawayRef,
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
      className="topic60-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={3}
        totalTopicsInModule={13}
        englishTitle="Reading CSV and Excel Files"
        hindiTitle="Reading CSV and Excel Files"
        subtitleEnglish="Loading CSV and Excel in Pandas"
        subtitleHindi="Loading CSV and Excel in Pandas"
        emoji="📂"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec60-title'}
        sectionRef={secTitleRef}
        sectionId="sec60-title"
      />

      {/* SECTION 1: WHY IMPORT CSV */}
      <div
        ref={secWhyCsvRef}
        data-mentor-target="sec60-why-csv"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'CSV क्या है? (Comma-Separated Values)' : 'What Is CSV and Why Ingest External Files?'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'मैन्युअली Data Type करने की जगह सीधे File से लोड करना' : 'Ingesting gigabytes of raw transaction records directly from disk'}
            </p>
          </div>
        </div>

        <p className="text-sm text-[#4A4768] leading-relaxed">
          {isHi ? (
            <>
              असली कंपनियों में Data कभी भी Code में हाथ से नहीं लिखा जाता। वह CSV फाइलों, Excel शीट्स या Database से आता है। CSV का मतलब है <strong>Comma-Separated Values</strong>, जहां पहली लाइन Column Header होती है और अगली लाइनें Data रिकॉर्ड्स होती हैं।
            </>
          ) : (
            <>
              In production analytics pipelines, data is never hardcoded. It is exported from point-of-sale systems or cloud data warehouses as CSV or Excel spreadsheets. CSV stands for <strong>Comma-Separated Values</strong>.
            </>
          )}
        </p>

        {/* RAW CSV PREVIEW */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-xs text-[#202033] shadow-inner space-y-1">
          <span className="text-[10px] font-bold text-[#7045E8] uppercase tracking-wider">Raw File on Disk: sales.csv</span>
          <div className="text-purple-700 font-bold">OrderID,Product,Price,Quantity</div>
          <div>101,Pen,10,5</div>
          <div>102,Book,50,2</div>
          <div>103,Bag,500,1</div>
        </div>
      </div>

      {/* SECTION 2: READ_CSV */}
      <div
        ref={secReadCsvRef}
        data-mentor-target="sec60-read-csv"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'CSV पढ़ना: `pd.read_csv()`' : 'Reading CSV: pd.read_csv()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'एक ही लाइन में पूरी File एक तैयार DataFrame में बदल जाती है' : 'Loads disk data directly into memory with auto-detected columns'}
            </p>
          </div>
        </div>

        <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed space-y-1">
          <span className="text-amber-400">import</span> pandas <span className="text-amber-400">as</span> pd<br /><br />
          df = pd.<span className="text-blue-400">read_csv</span>(<span className="text-emerald-300">&quot;sales.csv&quot;</span>)<br />
          print(df)
        </div>
      </div>

      {/* SECTION 3: READ_EXCEL */}
      <div
        ref={secReadExcelRef}
        data-mentor-target="sec60-read-excel"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Excel Files पढ़ना: `pd.read_excel()`' : 'Reading Excel Workbooks: pd.read_excel()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'विशिष्ट Worksheet चुनना: `sheet_name="January"`' : 'Targeting specific tabs inside multi-sheet workbooks'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          <span className="text-purple-300"># Read default first sheet:</span><br />
          df = pd.<span className="text-blue-400">read_excel</span>(<span className="text-emerald-300">&quot;sales.xlsx&quot;</span>)<br /><br />
          <span className="text-purple-300"># Read a specific named sheet:</span><br />
          jan_df = pd.<span className="text-blue-400">read_excel</span>(<span className="text-emerald-300">&quot;sales.xlsx&quot;</span>, sheet_name=<span className="text-emerald-300">&quot;January&quot;</span>)
        </div>
      </div>

      {/* SECTION 4: CHUNKING & USECOLS */}
      <div
        ref={secChunkingUsecolsRef}
        data-mentor-target="sec60-chunking-usecols"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'बड़ी Files के लिए: `usecols` और `chunksize`' : 'Pro Big Data Tips: usecols & chunksize'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'केवल आवश्यक Column लोड करें या 10 लाख Rows को टुकड़ों में पढ़ें' : 'Save RAM by filtering columns during import and streaming massive files'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">1. Selected Columns Only (`usecols`):</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              df = pd.read_csv(<br />
              &nbsp;&nbsp;<span className="text-emerald-300">&quot;huge_sales.csv&quot;</span>,<br />
              &nbsp;&nbsp;usecols=[<span className="text-emerald-300">&quot;Product&quot;</span>, <span className="text-emerald-300">&quot;Price&quot;</span>]<br />
              )
            </div>
            <p className="text-[11px] text-[#77758A]">बाकी के 50 बेकार Columns को रैम में लोड ही नहीं करता!</p>
          </div>

          <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">2. Chunking Stream (`chunksize`):</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              <span className="text-amber-400">for</span> chunk <span className="text-amber-400">in</span> pd.read_csv(<br />
              &nbsp;&nbsp;<span className="text-emerald-300">&quot;huge.csv&quot;</span>, chunksize=<span className="text-purple-300">1000</span><br />
              ):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;process(chunk)
            </div>
            <p className="text-[11px] text-[#77758A]">1000-1000 Rows के बैच में प्रोसेस करता है, कभी रैम क्रैश नहीं होती!</p>
          </div>
        </div>
      </div>

      {/* SECTION 5: TROUBLESHOOTING */}
      <div
        ref={secTroubleshootingRef}
        data-mentor-target="sec60-troubleshooting"
        className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <span>⚠️</span>
          <h3>{isHi ? 'आम समस्याएं और उनका समाधान' : 'Common Import Pitfalls & Quick Fixes'}</h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-1.5 list-disc list-inside">
          <li>
            <strong>FileNotFoundError:</strong> File पाथ सही नहीं है। File को उसी Folder में रखें या पूरा पाथ दें।
          </li>
          <li>
            <strong>Different Separator:</strong> यदि कॉमा की जगह सेमीकोलन हो तो <code>sep=&quot;;&quot;</code> लगाएं।
          </li>
          <li>
            <strong>Encoding Issue:</strong> यदि अजीब अक्षर आएं तो <code>encoding=&quot;utf-8&quot;</code> या <code>encoding=&quot;latin1&quot;</code> जोड़ें।
          </li>
        </ul>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec60-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 3 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>`pd.read_csv()`:</strong> CSV Files को तुरंत DataFrame में लोड करने का प्रमुख Function है।
          </li>
          <li>
            <strong>`pd.read_excel()`:</strong> Excel Spreadsheets और विशिष्ट शीट्स को लोड करने के लिए प्रयोग किया जाता है।
          </li>
          <li>
            <strong>`chunksize`:</strong> बड़े Datasets के लिए मेमोरी-फ्रेंडली स्ट्रीमिंग तकनीक है।
          </li>
        </ul>
      </div>
    </div>
  );
};
