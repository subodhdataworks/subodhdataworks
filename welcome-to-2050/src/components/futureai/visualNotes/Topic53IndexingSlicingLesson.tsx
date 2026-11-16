import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic53VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic53IndexingSlicingLesson: React.FC<Topic53VisualLessonProps> = ({
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
  const secIndexing1D2DRef = useRef<HTMLDivElement>(null);
  const secRowsColsRef = useRef<HTMLDivElement>(null);
  const secSlicingSubmatrixRef = useRef<HTMLDivElement>(null);
  const secViewsVsCopyRef = useRef<HTMLDivElement>(null);
  const secSalesSelectionRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec53-title': secTitleRef,
      'sec53-indexing-1d-2d': secIndexing1D2DRef,
      'sec53-rows-cols': secRowsColsRef,
      'sec53-slicing-submatrix': secSlicingSubmatrixRef,
      'sec53-views-vs-copy': secViewsVsCopyRef,
      'sec53-sales-selection': secSalesSelectionRef,
      'sec53-takeaway': secTakeawayRef,
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
      className="topic53-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={8}
        moduleName="NumPy for Numerical Analysis"
        topicNum={4}
        totalTopicsInModule={8}
        englishTitle="Indexing and Slicing Arrays"
        hindiTitle="Indexing and Slicing Arrays"
        subtitleEnglish="Indexing & Slicing Arrays"
        subtitleHindi="Indexing & Slicing Arrays"
        emoji="✂️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec53-title'}
        sectionRef={secTitleRef}
        sectionId="sec53-title"
      />

      {/* SECTION 1: 1D & 2D INDEXING */}
      <div
        ref={secIndexing1D2DRef}
        data-mentor-target="sec53-indexing-1d-2d"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '1D और 2D Indexing: स्थिति के अनुसार Value निकालना' : '1D and 2D Coordinate Indexing'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '0-Based Indexing और `arr[row, col]` सिंटेक्स' : 'Zero-based positional coordinates for multidimensional navigation'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1D Indexing */}
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">1D Array Indexing:</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              nums = np.array([10, 20, 30, 40])<br />
              print(nums[0])  <span className="text-emerald-300"># 10 (First)</span><br />
              print(nums[2])  <span className="text-emerald-300"># 30</span><br />
              print(nums[-1]) <span className="text-emerald-300"># 40 (Last)</span>
            </div>
          </div>

          {/* 2D Indexing */}
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">2D Matrix Indexing: `arr[row, col]`</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              matrix = np.array([<br />
              &nbsp;&nbsp;[10, 20, 30], <span className="text-purple-300"># Row 0</span><br />
              &nbsp;&nbsp;[40, 50, 60]  <span className="text-purple-300"># Row 1</span><br />
              ])<br />
              print(matrix[1, 2]) <span className="text-emerald-300"># 60 (Row 1, Col 2)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ENTIRE ROWS & COLUMNS WITH : */}
      <div
        ref={secRowsColsRef}
        data-mentor-target="sec53-rows-cols"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'पूरी Row (Row) या Column (Column) चुनना: `:` Operator' : 'Selecting Full Rows & Columns using Colon `:`'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '`matrix[0, :]` (पूरी Row) और `matrix[:, 1]` (पूरा Column)' : 'Slice entire axes instantly without writing column extract loops'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#4C2A9A]">Select Complete Row: `matrix[0, :]`</span>
              <span className="text-[10px] bg-purple-50 text-[#7045E8] px-2 py-0.5 rounded font-bold">Row 0</span>
            </div>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Row 0 को चुनें, और `:` का मतलब है सभी Columns शामिल करें।' : 'Selects row index 0, with `:` extracting every column.'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              print(matrix[0, :]) <span className="text-emerald-300"># [10 20 30]</span>
            </div>
          </div>

          <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#4C2A9A]">Select Complete Column: `matrix[:, 1]`</span>
              <span className="text-[10px] bg-purple-50 text-[#7045E8] px-2 py-0.5 rounded font-bold">Col 1</span>
            </div>
            <p className="text-xs text-[#77758A]">
              {isHi ? '`:` का मतलब सभी Rows, और `1` का मतलब केवल Column 1।' : '`:` takes all rows, and `1` filters down to column index 1.'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              print(matrix[:, 1]) <span className="text-emerald-300"># [20 50]</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: 2D SLICING SUB-MATRIX */}
      <div
        ref={secSlicingSubmatrixRef}
        data-mentor-target="sec53-slicing-submatrix"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '2D Slicing: सब-Matrix (Sub-Matrix) काटना' : '2D Slicing: Extracting Sub-Matrices'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Rows और Columns दोनों की रेंज देना: `arr[0:2, 1:3]`' : 'Simultaneous row slicing and column windowing'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white overflow-x-auto leading-relaxed space-y-1">
          grid = np.array([<br />
          &nbsp;&nbsp;[10, 20, 30],<br />
          &nbsp;&nbsp;[40, 50, 60],<br />
          &nbsp;&nbsp;[70, 80, 90]<br />
          ])<br /><br />
          <span className="text-purple-300"># Rows 0 to 1, Columns 1 to 2 (Excluding end index!)</span><br />
          sub = grid[0:2, 1:3]<br />
          print(sub)<br />
          <span className="text-emerald-300"># [[20 30]<br />#  [50 60]]</span>
        </div>
      </div>

      {/* SECTION 4: VIEWS VS COPY (CRITICAL WARNING) */}
      <div
        ref={secViewsVsCopyRef}
        data-mentor-target="sec53-views-vs-copy"
        className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 shadow-sm space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-xl font-bold text-rose-600">
            ⚠️
          </div>
          <div>
            <h2 className="text-lg font-bold text-rose-900">
              {isHi ? 'गंभीर चेतावनी: NumPy Slices दृश्य (Views) होते हैं!' : 'Crucial Warning: NumPy Slices Return Views, Not Copies!'}
            </h2>
            <p className="text-xs text-rose-700">
              {isHi ? 'स्लाइस को बदलने से मूल Array भी बदल जाता है!' : 'Modifying a sliced subarray directly mutates the original parent array!'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white space-y-1">
            <span className="text-rose-400"># DANGEROUS MUTATION:</span><br />
            nums = np.array([10, 20, 30, 40])<br />
            view = nums[1:3] <span className="text-purple-300"># Just a VIEW!</span><br />
            view[0] = 99<br />
            print(nums) <span className="text-rose-400"># [10 99 30 40] 💥 Mutated!</span>
          </div>

          <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white space-y-1">
            <span className="text-emerald-400"># SAFE DECOUPLED COPY:</span><br />
            nums = np.array([10, 20, 30, 40])<br />
            safe_copy = nums[1:3].<span className="text-blue-400">copy</span>()<br />
            safe_copy[0] = 99<br />
            print(nums) <span className="text-emerald-300"># [10 20 30 40] ✅ Original Safe!</span>
          </div>
        </div>
      </div>

      {/* SECTION 5: REAL-LIFE SALES SELECTION */}
      <div
        ref={secSalesSelectionRef}
        data-mentor-target="sec53-sales-selection"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
      >
        <div className="flex items-center gap-2 text-[#7045E8]">
          <span className="text-lg">🛒</span>
          <h3 className="text-sm font-bold">
            {isHi ? 'बिजनेस उदाहरण: Cells Data का चयन' : 'Business Application: Department Sales Slice'}
          </h3>
        </div>
        <p className="text-xs text-[#4A4768]">
          {isHi
            ? '3 दिनों में 3 प्रोडक्ट्स की बिक्री: पहले 2 दिनों का Data या केवल प्रोडक्ट 2 की बिक्री निकालना।'
            : '3 days of 3 products: Extracting first 2 days or isolating product #2 performance across all days.'}
        </p>
        <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
          sales = np.array([[100, 200, 300], [150, 250, 350], [120, 220, 320]])<br />
          first_two_days = sales[:2, :]<br />
          product_two_all_days = sales[:, 1]<br />
          print(product_two_all_days) <span className="text-emerald-300"># [200 250 220]</span>
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec53-takeaway"
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
            <strong>{isHi ? '2D निर्देशांक `arr[r, c]`:' : '2D Coordinate Syntax:'}</strong>{' '}
            {isHi ? 'पहले Row का Index, फिर कॉमा, फिर Column का Index लिखें।' : 'First index selects row, comma, second index selects column.'}
          </li>
          <li>
            <strong>{isHi ? 'View vs Copy का नियम:' : 'The View vs Copy Rule:'}</strong>{' '}
            {isHi ? 'NumPy स्लाइस मेमोरी में नया Data नहीं बनाता, केवल मूल Data की खिड़की (View) दिखाता है। बदलाव से बचने के लिए `.copy()` लगाएं!' : 'NumPy slices share base memory! Use `.copy()` to protect original datasets.'}
          </li>
          <li>
            <strong>{isHi ? '`:` का जादू:' : 'Power of Colon `:`:'}</strong>{' '}
            {isHi ? 'बिना Loop चलाए पूरे Column या पूरी Row को तुरंत अलग करें।' : 'Extract entire dimension slices cleanly in constant time.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
