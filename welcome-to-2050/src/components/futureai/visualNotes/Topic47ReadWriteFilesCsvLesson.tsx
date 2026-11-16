import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic47VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic47ReadWriteFilesCsvLesson: React.FC<Topic47VisualLessonProps> = ({
  activeSectionId,
  onSectionRectChange,
  onScrollSettled,
  language: externalLanguage = 'english',
  onLanguageChange,
}) => {
  const [currentLang, setCurrentLang] = useState<'hindi' | 'english'>(externalLanguage);
  const [activeTab, setActiveTab] = useState<'text' | 'csv' | 'pathlib'>('text');

  useEffect(() => {
    if (externalLanguage && externalLanguage !== currentLang) {
      setCurrentLang(externalLanguage);
    }
  }, [externalLanguage]);

  const containerRef = useRef<HTMLDivElement>(null);
  const secTitleRef = useRef<HTMLDivElement>(null);
  const secConceptRef = useRef<HTMLDivElement>(null);
  const secModesWithRef = useRef<HTMLDivElement>(null);
  const secReadWriteRef = useRef<HTMLDivElement>(null);
  const secCsvDictReaderRef = useRef<HTMLDivElement>(null);
  const secPathlibBestPracticesRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec47-title': secTitleRef,
      'sec47-concept': secConceptRef,
      'sec47-modes-with': secModesWithRef,
      'sec47-read-write': secReadWriteRef,
      'sec47-csv-dictreader': secCsvDictReaderRef,
      'sec47-pathlib-bestpractices': secPathlibBestPracticesRef,
      'sec47-takeaway': secTakeawayRef,
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
      className="topic47-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={7}
        moduleName="Functions, Modules & Files"
        topicNum={7}
        totalTopicsInModule={9}
        englishTitle="Reading and Writing Files and CSVs"
        hindiTitle="Reading and Writing Files and CSVs"
        subtitleEnglish="File I/O and CSV Processing"
        subtitleHindi="File I/O and CSV Processing"
        emoji="📂"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec47-title'}
        sectionRef={secTitleRef}
        sectionId="sec47-title"
      />

      {/* SECTION 1: CONCEPT ANALOGY */}
      <div
        ref={secConceptRef}
        data-mentor-target="sec47-concept"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'File I/O क्या है? (The Notebook Analogy)' : 'What is File I/O? The Digital Notebook'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'RAM (अस्थायी मेमोरी) vs Hard Drive (स्थायी स्टोरेज)' : 'Temporary RAM vs Permanent Hard Drive Storage'}
            </p>
          </div>
        </div>

        <p className="text-sm text-[#4A4768] leading-relaxed">
          {isHi ? (
            <>
              जब आपका Python Program बंद होता है, तो RAM के सारे Variables मिट जाते हैं! यदि आपको Data को सुरक्षित रखना है (जैसे Customer का Order या Cells Report), तो आपको उसे डिस्क की <strong>File</strong> में सहेजना होता है।
            </>
          ) : (
            <>
              When your Python script finishes running, all variables stored in RAM vanish! To make information persist across days, sessions, and analytics pipelines, you store it permanently in a file on disk.
            </>
          )}
        </p>

        {/* 3 Step Lifecycle Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/60 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7045E8]">Step 1</span>
              <span className="text-lg">🔓</span>
            </div>
            <h4 className="text-sm font-bold text-[#202033]">
              {isHi ? '1. File खोलो (Open)' : '1. Open the File'}
            </h4>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Python को बताओ कि कौन सी File किस काम (read/write) के लिए खोलनी है।' : 'Tell Python which file path and what mode (read or write) you need.'}
            </p>
            <div className="rounded bg-white p-2 font-mono text-[11px] text-[#4C2A9A] border border-purple-100">
              file = open("data.txt", "r")
            </div>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/60 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7045E8]">Step 2</span>
              <span className="text-lg">✍️</span>
            </div>
            <h4 className="text-sm font-bold text-[#202033]">
              {isHi ? '2. Data पढ़ो / लिखो' : '2. Read or Write Data'}
            </h4>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'डिस्क से Data मेमोरी में लाओ या नया Data File में लिखो।' : 'Extract text into Python strings or write computed results back to disk.'}
            </p>
            <div className="rounded bg-white p-2 font-mono text-[11px] text-[#4C2A9A] border border-purple-100">
              content = file.read()
            </div>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/60 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7045E8]">Step 3</span>
              <span className="text-lg">🔒</span>
            </div>
            <h4 className="text-sm font-bold text-[#202033]">
              {isHi ? '3. File बंद करो (Close)' : '3. Close the File'}
            </h4>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'मेमोरी को खाली करो और File को सिस्टम लॉक से आज़ाद करो।' : 'Release OS handles and flush buffered writes safely.'}
            </p>
            <div className="rounded bg-white p-2 font-mono text-[11px] text-[#4C2A9A] border border-purple-100">
              file.close()
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: FILE MODES & THE WITH STATEMENT */}
      <div
        ref={secModesWithRef}
        data-mentor-target="sec47-modes-with"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'File Modes और जादुई `with` Statement' : 'File Modes & The Automatic `with` Statement'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'भूलने की झंझट खत्म: context manager अपने आप File क्लोज़ कर देता है' : 'Context Managers guarantee automatic closing even if errors occur'}
            </p>
          </div>
        </div>

        {/* MODES TABLE */}
        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Mode</th>
                <th className="py-3 px-4">{isHi ? 'काम (Purpose)' : 'Action'}</th>
                <th className="py-3 px-4">{isHi ? 'अगर File न मिले?' : 'If File Missing?'}</th>
                <th className="py-3 px-4">{isHi ? 'अगर File पहले से हो?' : 'If File Exists?'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] font-mono text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">&quot;r&quot;</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'Read Only (पढ़ना)' : 'Read Only (Default)'}</td>
                <td className="py-2.5 px-4 font-sans text-rose-600 font-semibold">FileNotFoundError</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'शुरुआत से पढ़ना चालू करता है' : 'Reads from top'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">&quot;w&quot;</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'Write (पुराना Data मिटाकर नया लिखता है)' : 'Write (Overwrites entire content!)'}</td>
                <td className="py-2.5 px-4 font-sans text-emerald-600">{isHi ? 'नई File बना देता है' : 'Creates new file'}</td>
                <td className="py-2.5 px-4 font-sans text-amber-600 font-semibold">{isHi ? '⚠️ पुराना Data DELETE (Erase)!' : '⚠️ Overwrites / Erases all old text!'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">&quot;a&quot;</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'Append (File के अंत में जोड़ता है)' : 'Append (Adds to end of file)'}</td>
                <td className="py-2.5 px-4 font-sans text-emerald-600">{isHi ? 'नई File बना देता है' : 'Creates new file'}</td>
                <td className="py-2.5 px-4 font-sans text-emerald-600">{isHi ? 'पुराना Data बचा रहता है, नीचे जुड़ता है' : 'Preserves old text, adds at bottom'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">&quot;x&quot;</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'Exclusive Creation (केवल नई File)' : 'Exclusive creation'}</td>
                <td className="py-2.5 px-4 font-sans text-emerald-600">{isHi ? 'नई File बना देता है' : 'Creates new file'}</td>
                <td className="py-2.5 px-4 font-sans text-rose-600">{isHi ? 'FileExistsError उठाएगा' : 'Raises FileExistsError'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GOLD STANDARD: THE WITH STATEMENT */}
        <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-[#F6F2FF] to-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-[#4C2A9A] flex items-center gap-2">
              <span>💎</span>
              {isHi ? 'Industry Best Practice: `with open(...)` का इस्तेमाल' : 'Industry Standard: `with open(...) as file:`'}
            </h4>
            <span className="text-[11px] font-bold text-[#7045E8] bg-white px-2 py-0.5 rounded-full border border-purple-200">
              Never forget .close()
            </span>
          </div>
          <p className="text-xs text-[#4A4768]">
            {isHi ? (
              <>
                पुराने तरीके में <code>file.close()</code> भूलने पर File करप्ट हो सकती थी। <code>with</code> ब्लॉक से Code बाहर निकलते ही Python खुद-ब-खुद File को सुरक्षित तरीके से क्लोज़ कर देता है!
              </>
            ) : (
              <>
                Without <code>with</code>, an unexpected crash can leave files open and corrupt your data. The <code>with</code> statement handles closing automatically even if an error occurs.
              </>
            )}
          </p>
          <div className="rounded-lg bg-[#202033] p-4 text-xs font-mono text-white overflow-x-auto shadow-inner">
            <span className="text-purple-300"># Golden pattern for robust File I/O</span>
            <br />
            <span className="text-amber-400">with</span>{' '}
            <span className="text-blue-400">open</span>(
            <span className="text-emerald-300">&quot;sales_log.txt&quot;</span>,{' '}
            <span className="text-emerald-300">&quot;a&quot;</span>, encoding=
            <span className="text-emerald-300">&quot;utf-8&quot;</span>) <span className="text-amber-400">as</span> file:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;file.<span className="text-blue-400">write</span>(
            <span className="text-emerald-300">&quot;Order #1029: Laptop ₹55000\n&quot;</span>)
            <br />
            <span className="text-purple-300"># Outside this block, file is ALREADY closed safely!</span>
          </div>
        </div>
      </div>

      {/* SECTION 3: READING METHODS (read, readline, readlines, iterator) */}
      <div
        ref={secReadWriteRef}
        data-mentor-target="sec47-read-write"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'File पढ़ने के 4 तरीके (Reading Methods)' : '4 Ways to Read Files in Python'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'बड़ी Files के लिए लाइन-बाय-लाइन Loop सबसे तेज़ और मेमोरी-फ्रेंडली है' : 'Memory-efficient streaming vs reading entire contents at once'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-[#EAE5F5] bg-white p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">Method 1: file.read()</span>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'पूरी File को एक ही String में लोड करता है।' : 'Reads the entire file into a single string.'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              <span className="text-amber-400">with</span> open(<span className="text-emerald-300">&quot;story.txt&quot;</span>, <span className="text-emerald-300">&quot;r&quot;</span>) <span className="text-amber-400">as</span> f:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;content = f.read()<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(len(content))
            </div>
          </div>

          <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-emerald-600">Method 2: for line in file (Pro Best Practice! ⭐)</span>
            <p className="text-xs text-[#77758A]">
              {isHi ? '1-1 लाइन करके पढ़ता है; 10GB की File पर भी RAM क्रैश नहीं होगी!' : 'Memory-efficient stream loop; handles gigabyte files without crashing RAM!'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              <span className="text-amber-400">with</span> open(<span className="text-emerald-300">&quot;huge_log.txt&quot;</span>, <span className="text-emerald-300">&quot;r&quot;</span>) <span className="text-amber-400">as</span> f:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">for</span> line <span className="text-amber-400">in</span> f:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clean_line = line.strip()<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(clean_line)
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: CSV PROCESSING WITH CSV & DICTREADER */}
      <div
        ref={secCsvDictReaderRef}
        data-mentor-target="sec47-csv-dictreader"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Data Analytics का राजा: CSV और `csv.DictReader`' : 'Data Analytics Heartbeat: CSV & `csv.DictReader`'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'कॉमा सेपरेटेड Values (CSV) को आसानी से Python Dictionary में बदलें' : 'Turn tabular rows directly into clean Python dictionary mappings'}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 text-xs text-amber-900 flex items-start gap-3">
          <span className="text-lg">⚠️</span>
          <div>
            <strong>{isHi ? 'Data Analyst Caution:' : 'Crucial Data Analyst Tip:'}</strong>{' '}
            {isHi
              ? 'CSV से पढ़े गए सारे Value (Values) डिफ़ॉल्ट रूप से `str` (String) होते हैं! गणित करने से पहले उन्हें `int()` या `float()` में टाइपकास्ट करना कभी न भूलें।'
              : 'All numbers read from CSV files come as strings (`"45000"`, not `45000`). Always convert numeric columns using `int()` or `float()` before doing math!'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CSV File on Disk Preview */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">
              {isHi ? 'डिस्क पर File: sales.csv' : 'File on Disk: sales.csv'}
            </span>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-xs text-[#202033] shadow-inner space-y-1">
              <div className="text-purple-600 font-bold">product,quantity,price</div>
              <div>Laptop,5,55000</div>
              <div>Mouse,20,500</div>
              <div>Keyboard,10,1200</div>
            </div>
          </div>

          {/* Python DictReader Code */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">
              {isHi ? 'Python Code: DictReader से Revenue निकालना' : 'Python Code: Calculate Total Revenue with DictReader'}
            </span>
            <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white shadow-inner leading-relaxed overflow-x-auto">
              <span className="text-amber-400">import</span> csv<br /><br />
              total_revenue = <span className="text-purple-300">0</span><br /><br />
              <span className="text-amber-400">with</span> open(<span className="text-emerald-300">&quot;sales.csv&quot;</span>, <span className="text-emerald-300">&quot;r&quot;</span>, encoding=<span className="text-emerald-300">&quot;utf-8&quot;</span>) <span className="text-amber-400">as</span> f:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;reader = csv.<span className="text-blue-400">DictReader</span>(f)<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">for</span> row <span className="text-amber-400">in</span> reader:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qty = <span className="text-blue-400">int</span>(row[<span className="text-emerald-300">&quot;quantity&quot;</span>])<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price = <span className="text-blue-400">float</span>(row[<span className="text-emerald-300">&quot;price&quot;</span>])<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total_revenue += qty * price<br /><br />
              print(<span className="text-emerald-300">f&quot;Total Revenue: ₹&#123;total_revenue&#125;&quot;</span>)
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: MODERN PATHS WITH PATHLIB */}
      <div
        ref={secPathlibBestPracticesRef}
        data-mentor-target="sec47-pathlib-bestpractices"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            05
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Modern Path Handling: `pathlib.Path`' : 'Modern Path Handling: `pathlib.Path`'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Windows और Mac/Linux के स्लैश (\\ vs /) की समस्या का हमेशा के लिए हल' : 'Cross-platform file paths that work seamlessly on Windows, Mac, and Linux'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white overflow-x-auto space-y-1">
          <span className="text-amber-400">from</span> pathlib <span className="text-amber-400">import</span> Path<br /><br />
          <span className="text-purple-300"># Check if file exists before processing</span><br />
          data_file = Path(<span className="text-emerald-300">&quot;data&quot;</span>) / <span className="text-emerald-300">&quot;customers.csv&quot;</span><br /><br />
          <span className="text-amber-400">if</span> data_file.<span className="text-blue-400">exists</span>():<br />
          &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-emerald-300">f&quot;Found file! Size: &#123;data_file.stat().st_size&#125; bytes&quot;</span>)<br />
          <span className="text-amber-400">else</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-rose-400">&quot;Warning: File missing!&quot;</span>)
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec47-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 7 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? 'हमेशा `with open(...)` का प्रयोग करें' : 'Always use `with open(...)`:'}</strong>{' '}
            {isHi ? 'यह ऑटोमैटिकली File को क्लोज़ करता है और मेमोरी लीक रोकता है।' : 'Guarantees automatic cleanup and prevents memory leaks.'}
          </li>
          <li>
            <strong>{isHi ? 'CSV को `DictReader` से पढ़ें' : 'Use `csv.DictReader` for datasets:'}</strong>{' '}
            {isHi ? 'Header के नाम से Columns को पढ़ना आसान और Error-फ्री होता है।' : 'Accesses values directly by column headers like `row["price"]`.'}
          </li>
          <li>
            <strong>{isHi ? 'टाइप कन्वर्जन न भूलें' : 'Cast numeric columns:'}</strong>{' '}
            {isHi ? 'CSV Strings को गणित के लिए `int()` या `float()` में कन्वर्ट करें।' : 'Remember that CSV files read everything as text strings.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
