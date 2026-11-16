import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic80VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic80RetailSalesMiniProjectLesson: React.FC<Topic80VisualLessonProps> = ({
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
  const secProjectOverviewRef = useRef<HTMLDivElement>(null);
  const secPipelineCodeRef = useRef<HTMLDivElement>(null);
  const secKeyBusinessInsightRef = useRef<HTMLDivElement>(null);
  const secQuickRevisionRef = useRef<HTMLDivElement>(null);
  const secKnowledgeCheckRef = useRef<HTMLDivElement>(null);
  const secStudentChallengeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec80-title': secTitleRef,
      'sec80-project-overview': secProjectOverviewRef,
      'sec80-pipeline-code': secPipelineCodeRef,
      'sec80-key-business-insight': secKeyBusinessInsightRef,
      'sec80-quick-revision': secQuickRevisionRef,
      'sec80-knowledge-check': secKnowledgeCheckRef,
      'sec80-student-challenge': secStudentChallengeRef,
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
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic80-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={10}
        moduleName="Python Data Visualization & Analytics"
        topicNum={10}
        totalTopicsInModule={10}
        englishTitle="Retail Sales Performance Mini Project"
        hindiTitle="Retail Sales Performance Mini Project"
        subtitleEnglish="Capstone project overview"
        subtitleHindi="Capstone project overview"
        emoji="🏆"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec80-title'}
        sectionRef={secTitleRef}
        sectionId="sec80-title"
      />

      {/* Business Questions Overview */}
      <div ref={secProjectOverviewRef} id="sec80-project-overview" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🎯</span>
          {currentLang === 'english' ? 'Seven Executive Inquiries' : '7 Executive Business Inquiries'}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700">
          <div className="bg-white p-3 rounded-xl border border-purple-100">1. What is the overall gross revenue generated?</div>
          <div className="bg-white p-3 rounded-xl border border-purple-100">2. Which product generates the highest gross revenue?</div>
          <div className="bg-white p-3 rounded-xl border border-purple-100">3. Which regional territory leads total sales?</div>
          <div className="bg-white p-3 rounded-xl border border-purple-100">4. How did revenue trend across Jan, Feb, and March?</div>
          <div className="bg-white p-3 rounded-xl border border-purple-100">5. What is the average invoice transaction size?</div>
          <div className="bg-white p-3 rounded-xl border border-purple-100">6. Which item sold the greatest total volume units?</div>
        </div>
      </div>

      {/* Pipeline Code */}
      <div ref={secPipelineCodeRef} id="sec80-pipeline-code" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
            <span>💻</span>
            {currentLang === 'english' ? 'Complete End-to-End Python Pipeline' : 'End-to-End Python Analytics Pipeline Code'}
          </h2>
          <span className="text-xs bg-[#7045E8] text-white px-3 py-1 rounded-full font-bold">16 Steps Script</span>
        </div>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs leading-relaxed overflow-x-auto shadow-sm max-h-[500px]">
          <pre>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Step 1: Create the Retail Sales Dataset
data = {
    "Month": ["Jan", "Jan", "Jan", "Feb", "Feb", "Feb", "Mar", "Mar", "Mar"],
    "Product": ["Pen", "Book", "Bag", "Pen", "Book", "Bag", "Pen", "Book", "Bag"],
    "Region": ["North", "South", "East", "North", "South", "East", "North", "South", "East"],
    "Price": [10, 50, 500, 10, 50, 500, 10, 50, 500],
    "Quantity": [100, 50, 10, 120, 60, 12, 150, 70, 15]
}
df = pd.DataFrame(data)

# Step 2: Quality Inspection
print("Dataset Shape:", df.shape)
print("Missing Values:", df.isna().sum().sum())
print("Duplicate Rows:", df.duplicated().sum())

# Step 3: Feature Engineering - Revenue
df["Revenue"] = df["Price"] * df["Quantity"]

# Step 4: Executive Aggregations
total_revenue = df["Revenue"].sum()
average_revenue = df["Revenue"].mean()

monthly_revenue = df.groupby("Month")["Revenue"].sum().reindex(["Jan", "Feb", "Mar"])
product_revenue = df.groupby("Product")["Revenue"].sum().sort_values(ascending=False)
region_revenue = df.groupby("Region")["Revenue"].sum().sort_values(ascending=False)
product_quantity = df.groupby("Product")["Quantity"].sum().sort_values(ascending=False)

print("Total Revenue: ₹", total_revenue)
print("Average Ticket: ₹", round(average_revenue, 2))
print("Top Revenue Product:", product_revenue.idxmax())
print("Top Volume Product:", product_quantity.idxmax())

# Step 5: Monthly Revenue Line Chart
fig, ax = plt.subplots(figsize=(7, 3.5))
ax.plot(monthly_revenue.index, monthly_revenue.values, marker="o", color="#7045E8", linewidth=2.5)
ax.set_title("Monthly Revenue Trajectory (Q1)")
ax.set_ylabel("Revenue (₹)")
ax.grid(True, linestyle="--", alpha=0.35)
fig.tight_layout()
fig.savefig("monthly_revenue_report.png", dpi=150)
plt.show()

# Step 6: Product Revenue Bar Chart with Labels
fig, ax = plt.subplots(figsize=(7, 3.5))
bars = ax.bar(product_revenue.index, product_revenue.values, color=["#7045E8", "#A78BFA", "#C4B5FD"])
ax.bar_label(bars, padding=3, fontweight="bold")
ax.set_title("Gross Revenue by Product")
ax.set_ylabel("Revenue (₹)")
fig.tight_layout()
fig.savefig("product_revenue_report.png", dpi=150)
plt.show()

# Step 7: Export Multi-Sheet Executive Workbook
summary = pd.DataFrame({
    "Metric": ["Total Revenue", "Average Revenue", "Top Product (Value)", "Top Product (Volume)"],
    "Result": [total_revenue, round(average_revenue, 2), product_revenue.idxmax(), product_quantity.idxmax()]
})

with pd.ExcelWriter("retail_sales_executive_report.xlsx") as writer:
    df.to_excel(writer, sheet_name="Raw Data", index=False)
    monthly_revenue.to_excel(writer, sheet_name="Monthly Revenue")
    product_revenue.to_excel(writer, sheet_name="Product Revenue")
    region_revenue.to_excel(writer, sheet_name="Region Revenue")
    summary.to_excel(writer, sheet_name="Executive Summary", index=False)

print("✅ Capstone Analysis & Multi-Sheet Excel Export Complete!")`}</pre>
        </div>
      </div>

      {/* Key Business Insight */}
      <div ref={secKeyBusinessInsightRef} id="sec80-key-business-insight" className="border border-purple-200 rounded-2xl p-6 bg-[#FAF8FF] space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? 'Key Business Takeaway: Volume vs Value Disconnect' : 'Key Business Insight: Volume vs Value Disconnect'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'The highest-selling product in volume (Pen = 370 units) generated the least revenue (₹3,700). Meanwhile, the lowest-volume product (Bag = 37 units) generated 60% of company revenue (₹18,500) due to its ₹500 price point! Always analyze both Volume and Value.'
            : 'Sales Volume में top-selling product (Pen = 370 units) ने lowest Revenue (₹3,700) generate किया। जबकि lowest volume product (Bag = 37 units) ने ₹500 price point के कारण total Revenue का 60% (₹18,500) provide किया! Professional Data Analysts हमेशा Sales Volume और Revenue Value दोनों को evaluate करते हैं।'}
        </p>
      </div>

      {/* Module 10 Quick Revision */}
      <div ref={secQuickRevisionRef} id="sec80-quick-revision" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📋</span>
          {currentLang === 'english' ? 'Module 10 Quick Revision Cheat Sheet' : 'Module 10 Quick Revision Cheat Sheet'}
        </h2>
        <div className="border border-purple-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#4C2A9A] text-white">
              <tr>
                <th className="p-3">Concept</th>
                <th className="p-3">Function / Syntax</th>
                <th className="p-3">Business Analyst Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 text-slate-700">
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Line Chart</td>
                <td className="p-3 font-mono">plt.plot(x, y, marker="o")</td>
                <td className="p-3">Track trends, seasonality, and growth over time</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Bar Chart</td>
                <td className="p-3 font-mono">plt.bar(cats, vals)</td>
                <td className="p-3">Compare discrete categories with zero baseline</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Histogram</td>
                <td className="p-3 font-mono">plt.hist(vals, bins=[...])</td>
                <td className="p-3">Inspect distributions, skewness, and outliers</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Scatter Plot</td>
                <td className="p-3 font-mono">plt.scatter(x, y)</td>
                <td className="p-3">Measure correlation and pairwise relationships</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Subplots Setup</td>
                <td className="p-3 font-mono">fig, ax = plt.subplots(figsize=(8, 4))</td>
                <td className="p-3">Object-oriented canvas for publication-grade exports</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Save Visuals</td>
                <td className="p-3 font-mono">fig.savefig("chart.png", dpi=150)</td>
                <td className="p-3">Export high-res charts for PowerPoint presentations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Knowledge Check */}
      <div ref={secKnowledgeCheckRef} id="sec80-knowledge-check" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🎯</span>
          {currentLang === 'english' ? 'Final Knowledge Check Quiz' : 'Final Knowledge Check Quiz'}
        </h3>
        <div className="space-y-3 text-xs text-slate-700">
          <div className="bg-white p-3.5 rounded-xl border border-purple-100 shadow-sm">
            <p className="font-semibold text-slate-900 mb-1">
              Q1: What is the primary difference between a Figure and an Axes?
            </p>
            <p className="text-emerald-700 bg-emerald-50 p-2 rounded mt-1">
              <strong>Answer:</strong> The Figure is the entire drawing canvas; the Axes is the actual plot area containing coordinates, ticks, labels, and chart data.
            </p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-purple-100 shadow-sm">
            <p className="font-semibold text-slate-900 mb-1">
              Q2: If correlation between study hours and exam scores is 0.95, does that alone prove causation?
            </p>
            <p className="text-emerald-700 bg-emerald-50 p-2 rounded mt-1">
              <strong>Answer:</strong> No! Correlation measures linear relationship only; confounding variables (prior knowledge, sleep, study methods) must also be accounted for.
            </p>
          </div>
        </div>
      </div>

      {/* Final Student Challenge & Celebration */}
      <div ref={secStudentChallengeRef} id="sec80-student-challenge" className="bg-gradient-to-r from-[#7045E8] to-[#4C2A9A] text-white rounded-2xl p-6 shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-bold bg-white/20 px-3 py-1 rounded-full">
            Course Milestone Complete!
          </span>
          <span className="text-2xl">🎓 🚀</span>
        </div>
        <h3 className="text-2xl font-black">
          {currentLang === 'english'
            ? 'Congratulations! You Have Mastered Data Analytics with Python!'
            : 'Congratulations! आपने Python Data Visualization & Analytics Module 10 successfully complete kar liya hai!'}
        </h3>
        <p className="text-purple-100 text-sm leading-relaxed">
          {currentLang === 'english'
            ? 'From programming fundamentals and NumPy ndarrays to Pandas data cleaning and Matplotlib visual storytelling, you now possess the complete toolkit of an industry-ready Data Analyst!'
            : 'Core Python programming, NumPy arrays, Pandas Data Cleaning से लेकर Matplotlib Visualizations तक, आपने Industry-Ready Data Analyst के सभी essential tools master कर लिए हैं!'}
        </p>
        <div className="bg-white/10 rounded-xl p-4 text-xs space-y-2 border border-white/20">
          <strong className="text-white block text-sm">Student Challenge: Student Performance System</strong>
          <p className="text-purple-100">
            Build a dataset with Student Name, Study Hours, Math, Science, and Attendance. Calculate averages, plot a bar chart of top scorers, generate a scatter plot of Hours vs Marks, and export a multi-sheet Excel report!
          </p>
        </div>
      </div>
    </div>
  );
};
