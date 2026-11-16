import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic70VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic70ExportingCleanDataProjectLesson: React.FC<Topic70VisualLessonProps> = ({
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
  const secExportCsvExcelRef = useRef<HTMLDivElement>(null);
  const secCapstoneProjectRef = useRef<HTMLDivElement>(null);
  const secRevisionTableRef = useRef<HTMLDivElement>(null);
  const secKnowledgeCheckRef = useRef<HTMLDivElement>(null);
  const secNextModuleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec70-title': secTitleRef,
      'sec70-export-csv-excel': secExportCsvExcelRef,
      'sec70-capstone-project': secCapstoneProjectRef,
      'sec70-revision-table': secRevisionTableRef,
      'sec70-knowledge-check': secKnowledgeCheckRef,
      'sec70-next-module': secNextModuleRef,
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
      className="topic70-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={13}
        totalTopicsInModule={13}
        englishTitle="Exporting Clean Data & Final Project"
        hindiTitle="Exporting Clean Data & Final Project"
        subtitleEnglish="Module 9 Capstone project overview"
        subtitleHindi="Module 9 Capstone project overview"
        emoji="💾"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec70-title'}
        sectionRef={secTitleRef}
        sectionId="sec70-title"
      />

      {/* Exporting CSV & Excel */}
      <div ref={secExportCsvExcelRef} id="sec70-export-csv-excel" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>💾</span>
          {currentLang === 'english' ? '1. Exporting Data: to_csv() and to_excel()' : '1. Data एक्सपोर्ट करना: to_csv() और to_excel()'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl space-y-2">
            <h4 className="font-bold text-[#4C2A9A] text-sm">Export to CSV</h4>
            <p className="text-xs text-slate-600">
              Always set <code>index=False</code> so Pandas does not add an extra Unnamed index column.
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs">
              <pre>{`df.to_csv("clean_sales.csv", index=False)`}</pre>
            </div>
          </div>
          <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl space-y-2">
            <h4 className="font-bold text-[#4C2A9A] text-sm">Export to Multi-Sheet Excel</h4>
            <p className="text-xs text-slate-600">
              Save executive reports with multiple summary tabs using ExcelWriter.
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs">
              <pre>{`with pd.ExcelWriter("Report.xlsx") as writer:
    df_clean.to_excel(writer, sheet_name="Data", index=False)
    summary.to_excel(writer, sheet_name="Summary")`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Capstone Project */}
      <div ref={secCapstoneProjectRef} id="sec70-capstone-project" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#2D1B69] flex items-center gap-2">
            <span>🏆</span>
            {currentLang === 'english'
              ? 'FINAL CAPSTONE: Retail Sales Cleaning & Insights'
              : 'फाइनल Project: रिटेल Cells Data Cleaning और इनसाइट्स'}
          </h2>
          <span className="text-xs bg-[#7045E8] text-white px-3 py-1 rounded-full font-bold">14 Steps Pipeline</span>
        </div>

        <div className="border border-purple-200 rounded-2xl p-6 bg-[#FAF8FF] space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            {currentLang === 'english'
              ? 'This script demonstrates a real-world enterprise pipeline: handling dirty headers, deduplication, imputation, string sanitation, feature engineering, business grouping, and professional multi-tab Excel export.'
              : 'यह पूरा Code इंडस्ट्री स्तर की Data पाइपलाइन दिखाता है: गंदे Column नाम ठीक करना, डुप्लिकेट्स हटाना, missing values भरना, टेक्स्ट क्लीनिंग, डेट्स और Revenue निकालना, ग्रुपिंग और मल्टी-शीट Excel में सेव करना।'}
          </p>

          <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs leading-relaxed overflow-x-auto shadow-sm max-h-[500px]">
            <pre>{`import pandas as pd
import numpy as np

# 1. Load Raw Dirty Dataset
raw_data = {
    "Order_ID": [1001, 1002, 1003, 1002, 1004, 1005],
    "Cust_Name": ["  aman sharma ", "riya verma", "karan", "riya verma", " POOJA ", "vikas "],
    "Region": ["north", "south", "NORTH", "south", "west", "NORTH"],
    "Order_Date": ["2026-01-10", "2026-01-11", "2026-01-12", "2026-01-11", "2026-01-15", "invalid"],
    "Product": ["Laptop", "Phone", "Tablet", "Phone", "Laptop", "Headphones"],
    "Price": [60000, np.nan, 25000, np.nan, 58000, 3000],
    "Qty": [1, 2, 3, 2, 1, 4]
}
df = pd.DataFrame(raw_data)

# Step 2: Deduplication
df = df.drop_duplicates(subset=["Order_ID"]).reset_index(drop=True)

# Step 3: Text Sanitization
df["Cust_Name"] = df["Cust_Name"].str.strip().str.title()
df["Region"] = df["Region"].str.strip().str.upper()

# Step 4: Missing Value Imputation (Median Price)
median_price = df["Price"].median()
df["Price"] = df["Price"].fillna(median_price)

# Step 5: Datetime Conversion with errors='coerce'
df["Order_Date"] = pd.to_datetime(df["Order_Date"], errors="coerce")

# Step 6: Feature Engineering (Revenue)
df["Revenue"] = df["Price"] * df["Qty"]

# Step 7: Business Insights - Regional Performance
regional_summary = df.groupby("Region", as_index=False).agg(
    TotalRevenue=("Revenue", "sum"),
    OrderCount=("Order_ID", "count")
).sort_values(by="TotalRevenue", ascending=False)

# Step 8: Business Insights - Product Performance
product_summary = df.groupby("Product", as_index=False).agg(
    TotalQty=("Qty", "sum"),
    TotalRevenue=("Revenue", "sum")
)

# Step 9: Export clean data and summaries to Excel
with pd.ExcelWriter("Retail_Sales_Insights.xlsx") as writer:
    df.to_excel(writer, sheet_name="Clean_Orders", index=False)
    regional_summary.to_excel(writer, sheet_name="Region_Summary", index=False)
    product_summary.to_excel(writer, sheet_name="Product_Summary", index=False)

print("✅ Capstone Pipeline Completed Successfully!")`}</pre>
          </div>
        </div>
      </div>

      {/* Module 9 Quick Revision Table */}
      <div ref={secRevisionTableRef} id="sec70-revision-table" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📋</span>
          {currentLang === 'english' ? 'Module 9: Quick Revision Cheat Sheet' : 'Module 9: त्वरित रिवीजन चीटशीट'}
        </h2>
        <div className="border border-purple-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#4C2A9A] text-white">
              <tr>
                <th className="p-3">Topic / Operation</th>
                <th className="p-3">Pandas Code</th>
                <th className="p-3">Business Analyst Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 bg-white text-slate-700">
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Import &amp; Inspect</td>
                <td className="p-3 font-mono">pd.read_csv(), df.info(), df.describe()</td>
                <td className="p-3">Understand row counts, null values &amp; summary stats</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Filter &amp; Select</td>
                <td className="p-3 font-mono">df.loc[condition, ["ColA", "ColB"]]</td>
                <td className="p-3">Filter high-value customers or specific regions</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Clean &amp; Impute</td>
                <td className="p-3 font-mono">df.isna().sum(), df.fillna(median)</td>
                <td className="p-3">Fix incomplete forms without corrupting distribution</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Deduplicate</td>
                <td className="p-3 font-mono">df.drop_duplicates(subset=["ID"])</td>
                <td className="p-3">Prevent duplicate order revenue and false billing</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Summarize</td>
                <td className="p-3 font-mono">df.groupby("Category").agg(...)</td>
                <td className="p-3">Generate executive KPI tables and category totals</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Combine &amp; Export</td>
                <td className="p-3 font-mono">pd.merge(), df.to_excel(index=False)</td>
                <td className="p-3">Join customer profiles and export final reports</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Knowledge Check */}
      <div ref={secKnowledgeCheckRef} id="sec70-knowledge-check" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🎯</span>
          {currentLang === 'english' ? 'Final Knowledge Check' : 'फाइनल टेस्ट क्विज़'}
        </h3>
        <div className="space-y-3 text-sm text-slate-700">
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <p className="font-semibold text-slate-900 mb-1">
              Q1: Why should you pass <code>index=False</code> when calling <code>to_csv()</code>?
            </p>
            <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded mt-1">
              <strong>Answer:</strong> To prevent Pandas from writing an extra, unwanted row index column (e.g. "Unnamed: 0") into your clean CSV file.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <p className="font-semibold text-slate-900 mb-1">
              Q2: Which method is preferred for merging tables on a shared Customer ID?
            </p>
            <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded mt-1">
              <strong>Answer:</strong> <code>pd.merge(orders, customers, on="CustomerID", how="left")</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Next Module Preview */}
      <div ref={secNextModuleRef} id="sec70-next-module" className="bg-gradient-to-r from-[#7045E8] to-[#4C2A9A] text-white rounded-2xl p-6 shadow-md space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-bold bg-white/20 px-3 py-1 rounded-full">
            Next Milestone
          </span>
          <span className="text-2xl">📊 🚀</span>
        </div>
        <h3 className="text-2xl font-black">
          {currentLang === 'english'
            ? 'Congratulations! You Have Mastered Pandas!'
            : 'बधाई हो! आपने Pandas पूरी तरह सीख लिया है!'}
        </h3>
        <p className="text-purple-100 text-sm leading-relaxed">
          {currentLang === 'english'
            ? 'In Module 10, you will bring all this clean data to life using Python Visualizations (Matplotlib & Seaborn) — creating executive bar charts, heatmaps, scatter plots, and interactive dashboards.'
            : 'अगले Module (Module 10) में आप इस साफ Data को Visualize करेंगे (Matplotlib और Seaborn) — Charts, हीटमैप्स और एग्जीक्यूटिव Dashboards बनाना सीखेंगे!'}
        </p>
      </div>
    </div>
  );
};
