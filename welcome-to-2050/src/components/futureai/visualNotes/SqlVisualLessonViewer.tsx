import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Lightbulb,
  BookOpen,
  Layers,
  Info,
  Database,
  Store,
  Search,
  Target,
  FileText,
  Table2,
} from 'lucide-react';
import { getSqlVisualLesson, getStructuredSqlVisualNote, SqlVisualScene } from './sqlVisualNotesData';
import { StructuredVisualNotesSheet } from './StructuredVisualNotesRenderer';
import { VisualNotesTopBar } from './VisualNotesTopBar';
import type { SectionRectInfo } from './PdfVisualNotesViewer';
import { M17Topic3VisualNotesSheet } from './M17Topic3VisualNotesSheet';
import { M17Topic4VisualNotesSheet } from './M17Topic4VisualNotesSheet';
import { M17Topic5VisualNotesSheet } from './M17Topic5VisualNotesSheet';
import { M17Topic6VisualNotesSheet } from './M17Topic6VisualNotesSheet';
import { M17Topic7VisualNotesSheet } from './M17Topic7VisualNotesSheet';
import { M17Topic8VisualNotesSheet } from './M17Topic8VisualNotesSheet';
import './SqlVisualLessonViewer.css';

export interface SqlVisualLessonViewerProps {
  topicId: number;
  language?: 'en' | 'hi';
  onLanguageChange?: (lang: 'en' | 'hi') => void;
  activeSectionId?: string | null;
  speechProgress?: number;
  liveTypedText?: string;
  isMentorSpeaking?: boolean;
  onSectionRectChange?: (rect: SectionRectInfo) => void;
  onScrollSettled?: () => void;
}

/**
 * Decorative Lavender Ribbon Banner matching Future IT Industry Visual Learning Notes
 */
const NoteRibbonBanner: React.FC<{
  title: string;
  subtitle: string;
  moduleTag?: string;
  pageTag?: string;
}> = ({ subtitle, pageTag }) => {
  if (pageTag && !/PAGE\s*1\b/i.test(pageTag)) return null;
  if (!subtitle) return null;
  return (
    <div className="flex justify-center">
      <span className="inline-block px-4 py-1 rounded-full bg-[#F3E8FF] border border-[#C4B5FD] text-[#3B0764] text-[11px] font-bold tracking-wider uppercase">
        {subtitle}
      </span>
    </div>
  );
};

const SectionPill: React.FC<{ label: string }> = ({ label }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] border border-[#C4B5FD] text-[#1E1B4B] text-[13.5px] font-bold shadow-2xs">
    <span className="w-2.5 h-2.5 rounded-full bg-[#9333EA] shrink-0" />
    <span>{label}</span>
  </div>
);

/**
 * Exact 2-Page Illustrated Visual Learning Notes Sheet for M17 Topic 1: What Is a Database?
 */
const M17Topic1VisualNotesSheet: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const isHi = lang === 'hi';

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 1 OF 2 — WHAT IS A DATABASE?
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title={isHi ? 'What Is a Database?' : 'What Is a Database?'}
          subtitle="DATABASE BASICS - START FROM ZERO"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 1"
          pageTag="PAGE 1 OF 2"
        />

        {/* Intro Lavender Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border-2 border-[#38BDF8]/60 flex items-center justify-center shrink-0">
            <Database className="w-8 h-8 text-[#0284C7]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1E1B4B] m-0">
              {isHi
                ? 'Database information ko organize karke rakhne ki jagah hai.'
                : 'A database is an organized place to keep information.'}
            </h3>
            <p className="text-[13px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  Socho ek shop mein hundreds of customers aur orders hain. Sab kuch notebook mein likhne se purane records dhoondhna ya mistakes sudharna mushkil ho jata hai. Ek <strong>database</strong> related information ko organized rakhta hai taaki hum use <strong>save, find, change aur use</strong> kar sakein.
                </>
              ) : (
                <>
                  Imagine a shop with hundreds of customers and orders. Writing everything in a notebook makes it hard to find old records or correct mistakes. A <strong>database</strong> keeps related information in an organized way so we can <strong>save, find, change and use</strong> it when needed. The same data can support daily work and later business reports.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Section: Think of a busy shop */}
        <div className="space-y-3">
          <SectionPill label={isHi ? 'Think of a busy shop' : 'Think of a busy shop'} />
          <p className="text-[13px] text-[#334155] leading-relaxed m-0">
            {isHi
              ? 'Roz ek shop record karti hai ki kisne kya kharida, kitna kharida aur price kya tha. Database purana order dhoondhne, address update karne aur top-selling items pata karne mein madad karta hai.'
              : 'Every day, a shop records who bought an item, what they bought, how many they bought, and the price. A database helps the shop find an old order, correct a customer address, and discover which items sell the most. It turns separate facts into useful answers.'}
          </p>

          {/* 4-Step Flow Card */}
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 grid grid-cols-1 sm:grid-cols-7 items-center gap-3 text-center">
            <div className="sm:col-span-1 flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#6D28D9]">
                <Store className="w-6 h-6" />
              </div>
              <span className="text-[12.5px] font-bold text-[#1E1B4B]">Daily shop data</span>
              <span className="text-[11px] text-[#64748B]">Customers, items, orders</span>
            </div>

            <div className="hidden sm:flex justify-center text-[#7C3AED] font-bold text-xl">→</div>

            <div className="sm:col-span-1 flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7]">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-[12.5px] font-bold text-[#1E1B4B]">Database</span>
              <span className="text-[11px] text-[#64748B]">Stores related records</span>
            </div>

            <div className="hidden sm:flex justify-center text-[#7C3AED] font-bold text-xl">→</div>

            <div className="sm:col-span-1 flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#7C3AED]">
                <Search className="w-6 h-6" />
              </div>
              <span className="text-[12.5px] font-bold text-[#1E1B4B]">Find answers</span>
              <span className="text-[11px] text-[#64748B]">Search or filter records</span>
            </div>

            <div className="hidden sm:flex justify-center text-[#7C3AED] font-bold text-xl">→</div>

            <div className="sm:col-span-1 flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-center text-[#D97706]">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-[12.5px] font-bold text-[#1E1B4B]">Better decisions</span>
              <span className="text-[11px] text-[#64748B]">See sales and demand</span>
            </div>
          </div>
        </div>

        {/* Section: Meet your first database table */}
        <div className="space-y-3">
          <SectionPill label="Meet your first database table" />
          <p className="text-[13px] text-[#334155] leading-relaxed m-0">
            {isHi ? (
              <>
                Ek <strong>table</strong> spreadsheet jaisi dikhti hai. Upar <strong>columns</strong> aur niche <strong>rows</strong> hoti hain. Har row ek customer ko dikhati hai. Do log same city mein reh sakte hain, par unki <code>customer_id</code> alag honi chahiye.
              </>
            ) : (
              <>
                A <strong>table</strong> looks like a spreadsheet. It has columns across the top and rows going down. Each row describes one customer. Two people may live in the same city, but their customer IDs must be different.
              </>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
            {/* Left Table */}
            <div className="md:col-span-7 rounded-2xl border-2 border-[#C4B5FD]/80 overflow-hidden bg-white">
              <table className="w-full text-left border-collapse text-[13px]">
                <thead>
                  <tr className="bg-[#F3E8FF] text-[#1E1B4B] border-b border-[#DDD6FE]">
                    <th className="py-2.5 px-3 font-bold">customer_id</th>
                    <th className="py-2.5 px-3 font-bold border-l border-[#DDD6FE]">name</th>
                    <th className="py-2.5 px-3 font-bold border-l border-[#DDD6FE]">city</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDE9FE] text-[#334155]">
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-semibold text-[#5B21B6]">101</td>
                    <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Rahul</td>
                    <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Patna</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-semibold text-[#5B21B6]">102</td>
                    <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Asha</td>
                    <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Delhi</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-semibold text-[#5B21B6]">103</td>
                    <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Neha</td>
                    <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Patna</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-semibold text-[#5B21B6]">104</td>
                    <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Aman</td>
                    <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Mumbai</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right Key Terms Card */}
            <div className="md:col-span-5 rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 flex flex-col justify-center gap-2.5 text-[12.5px] text-[#334155]">
              <p className="m-0">
                <strong className="text-[#1E1B4B]">Column:</strong> One kind of detail (<code>city</code>).
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">Row:</strong> One complete record (<code>101, Rahul, Patna</code>).
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">Primary Key:</strong> A unique ID (<code>customer_id</code>).
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">Data Type:</strong> Kind of value (number or text).
              </p>
            </div>
          </div>
        </div>

        {/* Section: Three words you should know */}
        <div className="space-y-3">
          <SectionPill label="Three words you should know" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 text-center space-y-1">
              <div className="text-[13.5px] font-extrabold text-[#0C4A6E] tracking-wide">DATABASE</div>
              <p className="text-[12px] text-[#334155] m-0 leading-snug">
                A collection of tables that stores related facts.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-3.5 text-center space-y-1">
              <div className="text-[13.5px] font-extrabold text-[#78350F] tracking-wide">DBMS</div>
              <p className="text-[12px] text-[#334155] m-0 leading-snug">
                Software like PostgreSQL that saves, updates and protects records.
              </p>
            </div>
            <div className="rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3.5 text-center space-y-1">
              <div className="text-[13.5px] font-extrabold text-[#14532D] tracking-wide">SQL</div>
              <p className="text-[12px] text-[#334155] m-0 leading-snug">
                The language used to read and work with stored data.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Why businesses use databases */}
        <div className="space-y-3">
          <SectionPill label="Why businesses use databases" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 text-[12.5px] text-[#334155] leading-relaxed space-y-1.5">
            <p className="m-0">
              <strong className="text-[#1E1B4B]">Fast search:</strong> Find an order quickly.{' '}
              <strong className="text-[#1E1B4B]">Accurate updates:</strong> Correct a record without rewriting a notebook.
            </p>
            <p className="m-0">
              <strong className="text-[#1E1B4B]">Team access:</strong> Authorized staff can work with the same data.{' '}
              <strong className="text-[#1E1B4B]">Useful reports:</strong> Study sales, costs and customer needs.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] font-bold text-[#64748B] border-t border-[#EDE9FE] pt-3">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>1 / 2</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 2 OF 2 — HOW DOES A DATABASE WORK?
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="How Does a Database Work?"
          subtitle="REAL-LIFE EXAMPLE + FIRST SQL QUERY"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 1"
          pageTag="PAGE 2 OF 2"
        />

        {/* Section: One shop can have many tables */}
        <div className="space-y-3">
          <SectionPill label="One shop can have many tables" />
          <p className="text-[13px] text-[#334155] leading-relaxed m-0">
            {isHi ? (
              <>
                Ek badi table mein saari details repeat karne ke bajay, shop <strong>Customers, Orders aur Products</strong> ko alag-alag tables mein rakhti hai. Ye tables ID values se judi hoti hain — ise <strong>relational database</strong> kehte hain.
              </>
            ) : (
              <>
                Instead of repeating all details in one huge table, a shop can keep <strong>Customers, Orders and Products</strong> separately. The tables connect through ID values. This is called a <strong>relational database</strong>.
              </>
            )}
          </p>

          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2.5 items-center">
              {/* CUSTOMERS TABLE */}
              <div className="md:col-span-3 space-y-1.5">
                <div className="rounded-xl bg-[#E0F2FE] border border-[#7DD3FC] py-1.5 text-center text-[12px] font-extrabold text-[#0C4A6E]">
                  CUSTOMERS
                </div>
                <div className="rounded-xl border border-[#C4B5FD] overflow-hidden text-[11.5px]">
                  <div className="grid grid-cols-2 bg-[#F3E8FF] font-bold text-[#1E1B4B] px-2 py-1.5 border-b border-[#DDD6FE]">
                    <span>customer_id</span>
                    <span>name</span>
                  </div>
                  <div className="grid grid-cols-2 px-2 py-1.5 border-b border-[#EDE9FE] text-[#334155]">
                    <span className="font-mono font-bold text-[#6D28D9]">101</span>
                    <span>Rahul</span>
                  </div>
                  <div className="grid grid-cols-2 px-2 py-1.5 text-[#334155]">
                    <span className="font-mono font-bold text-[#6D28D9]">102</span>
                    <span>Asha</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex md:col-span-1 justify-center text-[#7C3AED] font-black text-xl">→</div>

              {/* ORDERS TABLE */}
              <div className="md:col-span-3 space-y-1.5">
                <div className="rounded-xl bg-[#FCE7F3] border border-[#F9A8D4] py-1.5 text-center text-[12px] font-extrabold text-[#831843]">
                  ORDERS
                </div>
                <div className="rounded-xl border border-[#C4B5FD] overflow-hidden text-[11px]">
                  <div className="grid grid-cols-3 bg-[#F3E8FF] font-bold text-[#1E1B4B] px-1.5 py-1.5 border-b border-[#DDD6FE]">
                    <span>order_id</span>
                    <span>cust_id</span>
                    <span>prod_id</span>
                  </div>
                  <div className="grid grid-cols-3 px-1.5 py-1.5 border-b border-[#EDE9FE] font-mono text-[#334155]">
                    <span>501</span>
                    <span className="font-bold text-[#6D28D9]">101</span>
                    <span className="font-bold text-[#059669]">10</span>
                  </div>
                  <div className="grid grid-cols-3 px-1.5 py-1.5 font-mono text-[#334155]">
                    <span>502</span>
                    <span className="font-bold text-[#6D28D9]">102</span>
                    <span className="font-bold text-[#059669]">11</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex md:col-span-1 justify-center text-[#7C3AED] font-black text-xl">→</div>

              {/* PRODUCTS TABLE */}
              <div className="md:col-span-3 space-y-1.5">
                <div className="rounded-xl bg-[#DCFCE7] border border-[#86EFAC] py-1.5 text-center text-[12px] font-extrabold text-[#14532D]">
                  PRODUCTS
                </div>
                <div className="rounded-xl border border-[#C4B5FD] overflow-hidden text-[11.5px]">
                  <div className="grid grid-cols-2 bg-[#F3E8FF] font-bold text-[#1E1B4B] px-2 py-1.5 border-b border-[#DDD6FE]">
                    <span>product_id</span>
                    <span>item</span>
                  </div>
                  <div className="grid grid-cols-2 px-2 py-1.5 border-b border-[#EDE9FE] text-[#334155]">
                    <span className="font-mono font-bold text-[#059669]">10</span>
                    <span>Notebook</span>
                  </div>
                  <div className="grid grid-cols-2 px-2 py-1.5 text-[#334155]">
                    <span className="font-mono font-bold text-[#059669]">11</span>
                    <span>Pen</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
              <strong>101</strong> in Orders refers to <strong>customer_id 101</strong> in Customers. The{' '}
              <strong>product_id 10</strong> points to Notebook in Products. These are <strong>Foreign Keys</strong>, which connect tables. A <strong>Primary Key</strong> identifies a row in its own table. Keeping details in separate tables avoids repeating the same information in every order.
            </p>
          </div>
        </div>

        {/* Section: Ask the database a question using SQL */}
        <div className="space-y-3">
          <SectionPill label="Ask the database a question using SQL" />
          <p className="text-[13px] text-[#334155] leading-relaxed m-0">
            Suppose the manager asks: <strong>&ldquo;Which customers live in Patna?&rdquo;</strong> SQL can find the answer without checking every row by hand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 space-y-2">
              <div className="text-[11px] font-extrabold text-[#7C3AED] tracking-wider uppercase">SQL QUERY</div>
              <pre className="m-0 font-mono text-[13.5px] leading-relaxed text-[#1E1B4B] font-semibold whitespace-pre-wrap">
{`SELECT name, city
FROM customers
WHERE city = 'Patna';`}
              </pre>
            </div>

            <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 flex flex-col justify-center gap-2 text-[12.5px] text-[#334155]">
              <p className="m-0">
                <strong className="text-[#1E1B4B]">SELECT name, city</strong> — choose the columns to show.
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">FROM customers</strong> — use the Customers table.
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">WHERE city = &apos;Patna&apos;</strong> — keep only rows where the city is Patna.
              </p>
            </div>
          </div>

          {/* Result Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 pt-1">
            <span className="px-3.5 py-1.5 rounded-xl bg-[#DCFCE7] border border-[#86EFAC] text-[#14532D] text-xs font-extrabold tracking-wide shrink-0">
              RESULT
            </span>
            <div className="rounded-xl border border-[#C4B5FD] overflow-hidden min-w-[220px] bg-white text-[12.5px]">
              <div className="grid grid-cols-2 bg-[#DCFCE7]/70 font-bold text-[#14532D] px-3 py-1.5 border-b border-[#86EFAC]">
                <span>name</span>
                <span>city</span>
              </div>
              <div className="grid grid-cols-2 px-3 py-1.5 border-b border-[#EDE9FE] text-[#334155]">
                <span>Rahul</span>
                <span>Patna</span>
              </div>
              <div className="grid grid-cols-2 px-3 py-1.5 text-[#334155]">
                <span>Neha</span>
                <span>Patna</span>
              </div>
            </div>
            <p className="text-[12.5px] text-[#334155] leading-snug m-0 flex-1">
              SQL gives us the matching rows. <strong>SELECT</strong> only reads the data; it does not change the saved records.
            </p>
          </div>
        </div>

        {/* Section: Four useful database actions (CRUD) */}
        <div className="space-y-3">
          <SectionPill label="Four useful database actions (CRUD)" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#0C4A6E]">CREATE</div>
              <div className="text-[11.5px] text-[#334155]">Add a row (INSERT)</div>
            </div>
            <div className="rounded-2xl bg-[#F3E8FF]/90 border border-[#C4B5FD] p-3 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#4C1D95]">READ</div>
              <div className="text-[11.5px] text-[#334155]">Find rows (SELECT)</div>
            </div>
            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-3 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#78350F]">UPDATE</div>
              <div className="text-[11.5px] text-[#334155]">Change saved values</div>
            </div>
            <div className="rounded-2xl bg-[#FCE7F3]/85 border border-[#F9A8D4] p-3 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#831843]">DELETE</div>
              <div className="text-[11.5px] text-[#334155]">Remove a row</div>
            </div>
          </div>
        </div>

        {/* Section: Database or spreadsheet? */}
        <div className="space-y-3">
          <SectionPill label="Database or spreadsheet?" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 text-[12.5px] text-[#334155] leading-relaxed">
            A <strong>spreadsheet</strong> is useful for small lists and quick calculations. A <strong>database</strong> is better when data is large, connected, updated often, or shared by many users. Use clear IDs, correct data types, backups and access rules to keep records reliable.
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] font-bold text-[#64748B] border-t border-[#EDE9FE] pt-3">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>2 / 2</span>
        </div>
      </section>
    </div>
  );
};

/**
 * Exact 2-Page Illustrated Visual Learning Notes Sheet for M17 Topic 2:
 * Tables, Rows, Columns and Primary Keys
 */
const M17Topic2VisualNotesSheet: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const isHi = lang === 'hi';

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 1 OF 2 — TABLES, ROWS, COLUMNS AND PRIMARY KEYS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Tables, Rows, Columns and Primary Keys"
          subtitle="THE BUILDING BLOCKS OF A TABLE"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 2"
          pageTag="PAGE 1 OF 2"
        />

        {/* Intro Card: What is a database table? */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border-2 border-[#38BDF8]/60 flex items-center justify-center shrink-0">
            <Table2 className="w-8 h-8 text-[#4F46E5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1E1B4B] m-0">
              {isHi ? 'Database table kya hoti hai?' : 'What is a database table?'}
            </h3>
            <p className="text-[13px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  Ek <strong>table</strong> wo jagah hai jahan database ek type ki information ko organized form mein store karta hai. Example: ek shop <strong>Customers</strong> table mein customer details aur <strong>Orders</strong> table mein purchases rakhti hai. Har table ka apna name, columns aur rows hote hain.
                </>
              ) : (
                <>
                  A <strong>table</strong> is a place where a database stores one type of information in an organized form. For example, a shop may keep a <strong>Customers</strong> table for customer details and an <strong>Orders</strong> table for purchases. Each table has a name, columns and rows.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Section: Look inside a Customers table */}
        <div className="space-y-3">
          <SectionPill label="Look inside a Customers table" />
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 space-y-3.5">
            <p className="text-[13px] text-[#334155] leading-relaxed m-0">
              {isHi
                ? 'Pehle column headings padho. Phir ek customer ko samajhne ke liye kisi bhi row ko left se right padho.'
                : 'Read the column headings first. Then read across any row to understand one customer.'}
            </p>

            {/* 3 Pastel Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#7DD3FC] text-center text-[11.5px] font-bold text-[#0C4A6E]">
                COLUMNS = fields
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#FCE7F3] border border-[#F9A8D4] text-center text-[11.5px] font-bold text-[#831843]">
                ROWS = records
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FCD34D] text-center text-[11.5px] font-bold text-[#78350F]">
                CELL = one stored value
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
              {/* Customers Table (4 Columns) */}
              <div className="md:col-span-8 rounded-2xl border border-[#C4B5FD] overflow-x-auto bg-white">
                <table className="w-full text-left border-collapse text-[12.5px]">
                  <thead>
                    <tr className="bg-[#F3E8FF] text-[#1E1B4B] border-b border-[#DDD6FE]">
                      <th className="py-2.5 px-3 font-bold">customer_id</th>
                      <th className="py-2.5 px-3 font-bold border-l border-[#DDD6FE]">name</th>
                      <th className="py-2.5 px-3 font-bold border-l border-[#DDD6FE]">city</th>
                      <th className="py-2.5 px-3 font-bold border-l border-[#DDD6FE]">total_orders</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EDE9FE] text-[#334155]">
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#6D28D9] bg-[#FAF5FF]">101</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Rahul</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Patna</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE] font-mono">3</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#6D28D9] bg-[#FAF5FF]">102</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Asha</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Delhi</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE] font-mono">5</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#6D28D9] bg-[#FAF5FF]">103</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Rahul</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Patna</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE] font-mono">2</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#6D28D9] bg-[#FAF5FF]">104</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Neha</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE]">Jaipur</td>
                      <td className="py-2.5 px-3 border-l border-[#EDE9FE] font-mono">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Right Column + Row Callouts */}
              <div className="md:col-span-4 flex flex-col gap-2.5 justify-between">
                <div className="rounded-xl bg-[#FAF7FF] border border-[#C4B5FD] p-3 text-[12px] text-[#334155] leading-snug flex-1">
                  <strong className="text-[#1E1B4B]">Column:</strong> Every value under <strong>city</strong> tells us where a customer lives.
                </div>
                <div className="rounded-xl bg-[#FAF7FF] border border-[#C4B5FD] p-3 text-[12px] text-[#334155] leading-snug flex-1">
                  <strong className="text-[#1E1B4B]">Row:</strong> The second row describes one person: <strong>102, Asha, Delhi, 5</strong>.
                </div>
              </div>
            </div>

            <p className="text-[12px] text-[#475569] m-0 pt-1">
              <strong className="text-[#1E1B4B]">Notice:</strong> Rahul appears twice. Names can repeat, but each{' '}
              <code>customer_id</code> is different. We will use that idea on page 2.
            </p>
          </div>
        </div>

        {/* Section: Four words you must understand */}
        <div className="space-y-3">
          <SectionPill label="Four words you must understand" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#0C4A6E]">TABLE</div>
              <p className="text-[11.5px] text-[#334155] m-0 leading-snug">
                A group of related records, such as all customers.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F3E8FF]/90 border border-[#C4B5FD] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#4C1D95]">COLUMN</div>
              <p className="text-[11.5px] text-[#334155] m-0 leading-snug">
                One type of detail, such as city or name.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#78350F]">ROW</div>
              <p className="text-[11.5px] text-[#334155] m-0 leading-snug">
                One complete record, such as one customer.
              </p>
            </div>
            <div className="rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#14532D]">CELL</div>
              <p className="text-[11.5px] text-[#334155] m-0 leading-snug">
                One value where a row and column meet.
              </p>
            </div>
          </div>
        </div>

        {/* Section: How to read one record */}
        <div className="space-y-3">
          <SectionPill label="How to read one record" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#F5F0FF] border border-[#C4B5FD] p-3.5 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white border border-[#A78BFA] text-[#6D28D9] text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span className="text-[13px] font-bold text-[#1E1B4B]">Choose a row</span>
              </div>
              <p className="text-[12px] text-[#334155] m-0 leading-snug">
                Look at the record that starts with <code>customer_id 102</code>.
              </p>
            </div>

            <div className="rounded-2xl bg-[#E0F2FE]/70 border border-[#7DD3FC] p-3.5 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white border border-[#38BDF8] text-[#0284C7] text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span className="text-[13px] font-bold text-[#1E1B4B]">Read across</span>
              </div>
              <p className="text-[12px] text-[#334155] m-0 leading-snug">
                Name is Asha, city is Delhi and <code>total_orders</code> is 5.
              </p>
            </div>

            <div className="rounded-2xl bg-[#DCFCE7]/75 border border-[#86EFAC] p-3.5 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white border border-[#4ADE80] text-[#15803D] text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <span className="text-[13px] font-bold text-[#1E1B4B]">Understand the fact</span>
              </div>
              <p className="text-[12px] text-[#334155] m-0 leading-snug">
                All values on that row belong to the same customer.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Columns also have data types */}
        <div className="space-y-3">
          <SectionPill label="Columns also have data types" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 text-[12.5px] text-[#334155] leading-relaxed">
            <strong>customer_id</strong> and <strong>total_orders</strong> usually hold whole numbers (<strong>INTEGER</strong>).{' '}
            <strong>name</strong> and <strong>city</strong> hold text (<strong>VARCHAR</strong> or <strong>TEXT</strong>). A data type tells the database what kind of value belongs in each column.
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] font-bold text-[#64748B] border-t border-[#EDE9FE] pt-3">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>1 / 2</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 2 OF 2 — PRIMARY KEYS: ONE UNIQUE ID
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Primary Keys: One Unique ID"
          subtitle="IDENTIFY EACH RECORD CORRECTLY"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 2"
          pageTag="PAGE 2 OF 2"
        />

        {/* Intro Problem Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 space-y-2.5">
          <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1E1B4B] m-0">
            {isHi
              ? 'Problem: do customers ka same naam ho sakta hai.'
              : 'The problem: two customers can have the same name.'}
          </h3>
          <p className="text-[13px] text-[#334155] leading-relaxed m-0">
            {isHi ? (
              <>
                Do customers ka naam Rahul ho sakta hai. Agar sirf naam se record update karenge, to galat person ka data change ho sakta hai. Ek unique <code>customer_id</code> batata hai ki <strong>exactly kaunsi row</strong> use karni hai.
              </>
            ) : (
              <>
                Two customers can both be named Rahul. If we update a record using only the name, we might change the wrong person. A unique customer ID tells us <strong>exactly which row</strong> to use.
              </>
            )}
          </p>
          <span className="inline-block px-4 py-1 rounded-full bg-[#FCE7F3] border border-[#F9A8D4] text-[#831843] text-[11px] font-extrabold tracking-wide uppercase">
            A NAME IS NOT A UNIQUE ID
          </span>
        </div>

        {/* Section: What is a Primary Key? */}
        <div className="space-y-3">
          <SectionPill label="What is a Primary Key?" />
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 text-[13px] text-[#334155] leading-relaxed">
            A <strong>Primary Key</strong> is a column (or combination of columns) that uniquely identifies every row in a table. In our Customers table, <strong>customer_id</strong> is the Primary Key. It helps the database find the correct person even when names or cities are the same.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#0C4A6E]">UNIQUE</div>
              <p className="text-[11.5px] text-[#334155] m-0 leading-snug">
                No two customers can use the same customer_id.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#78350F]">NOT EMPTY</div>
              <p className="text-[11.5px] text-[#334155] m-0 leading-snug">
                Every customer row must have an ID (not NULL).
              </p>
            </div>
            <div className="rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#14532D]">RELIABLE</div>
              <p className="text-[11.5px] text-[#334155] m-0 leading-snug">
                Choose an ID that normally does not change.
              </p>
            </div>
          </div>
        </div>

        {/* Section: See why customer_id is better than name */}
        <div className="space-y-3">
          <SectionPill label="See why customer_id is better than name" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Pink: NOT A GOOD PRIMARY KEY */}
            <div className="rounded-2xl bg-[#FDF2F8] border-2 border-[#F9A8D4] p-4 space-y-2.5">
              <div className="text-center text-[12px] font-extrabold text-[#BE123C] tracking-wide uppercase">
                NOT A GOOD PRIMARY KEY
              </div>
              <div className="space-y-1.5 text-[12.5px] text-center">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-[#FBCFE8] rounded-lg py-1.5 font-bold text-[#1E1B4B]">name</div>
                  <div className="bg-white border border-[#FBCFE8] rounded-lg py-1.5 font-bold text-[#1E1B4B]">city</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-[#FBCFE8] rounded-lg py-1.5 text-[#334155]">Rahul</div>
                  <div className="bg-white border border-[#FBCFE8] rounded-lg py-1.5 text-[#334155]">Patna</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-[#FBCFE8] rounded-lg py-1.5 text-[#334155]">Rahul</div>
                  <div className="bg-white border border-[#FBCFE8] rounded-lg py-1.5 text-[#334155]">Delhi</div>
                </div>
              </div>
            </div>

            {/* Green: A GOOD PRIMARY KEY */}
            <div className="rounded-2xl bg-[#F0FDF4] border-2 border-[#86EFAC] p-4 space-y-2.5">
              <div className="text-center text-[12px] font-extrabold text-[#15803D] tracking-wide uppercase">
                A GOOD PRIMARY KEY
              </div>
              <div className="space-y-1.5 text-[12.5px] text-center">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-[#BBF7D0] rounded-lg py-1.5 font-bold text-[#1E1B4B]">customer_id</div>
                  <div className="bg-white border border-[#BBF7D0] rounded-lg py-1.5 font-bold text-[#1E1B4B]">name</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-[#BBF7D0] rounded-lg py-1.5 font-mono font-bold text-[#6D28D9]">101</div>
                  <div className="bg-white border border-[#BBF7D0] rounded-lg py-1.5 text-[#334155]">Rahul</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-[#BBF7D0] rounded-lg py-1.5 font-mono font-bold text-[#6D28D9]">103</div>
                  <div className="bg-white border border-[#BBF7D0] rounded-lg py-1.5 text-[#334155]">Rahul</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: How a Primary Key looks in SQL */}
        <div className="space-y-3">
          <SectionPill label="How a Primary Key looks in SQL" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="rounded-2xl bg-[#1E1B3A] p-4 font-mono text-[12.5px] leading-relaxed text-[#E2E8F0] shadow-sm">
              <pre className="m-0 whitespace-pre-wrap">
{`CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(50),
  city VARCHAR(50)
);`}
              </pre>
            </div>

            <div className="space-y-2 text-[12.5px] text-[#334155]">
              <p className="m-0">
                <strong className="text-[#1E1B4B]">CREATE TABLE</strong> makes a new table.
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">customer_id INT</strong> stores a whole-number ID.
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">PRIMARY KEY</strong> requires unique, non-empty IDs.
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">VARCHAR(50)</strong> stores text up to 50 characters.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Why this matters at work */}
        <div className="space-y-3">
          <SectionPill label="Why this matters at work" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 text-[12.5px] text-[#334155] leading-relaxed space-y-1.5">
            <p className="m-0">
              <strong className="text-[#1E1B4B]">Accurate updates:</strong> The shop can change customer 103 without changing customer 101, even if both are named Rahul.
            </p>
            <p className="m-0">
              <strong className="text-[#1E1B4B]">Connected tables:</strong> An Orders table can store <code>customer_id</code> to show who placed an order. That ID may repeat in Orders because one customer can place many orders.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] font-bold text-[#64748B] border-t border-[#EDE9FE] pt-3">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>2 / 2</span>
        </div>
      </section>
    </div>
  );
};

export const SqlVisualLessonViewer: React.FC<SqlVisualLessonViewerProps> = ({
  topicId,
  language: externalLang,
  onLanguageChange,
  activeSectionId,
  speechProgress,
  liveTypedText,
  isMentorSpeaking,
  onSectionRectChange,
  onScrollSettled,
}) => {
  const lesson = getSqlVisualLesson(topicId);
  const [internalLang, setInternalLang] = useState<'en' | 'hi'>(externalLang || 'en');
  const [activeSceneIdx, setActiveSceneIdx] = useState<number>(0);
  // Default to the gorgeous 2-Page Visual Notes Sheet for M17 Topic 1!
  const [viewMode, setViewMode] = useState<'notes-sheet' | 'scene' | 'all'>('notes-sheet');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const lang = externalLang || internalLang;

  const setLang = (next: 'en' | 'hi') => {
    setInternalLang(next);
    if (onLanguageChange) onLanguageChange(next);
  };

  const stopVoice = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    setActiveSceneIdx(0);
    setViewMode('notes-sheet');
    stopVoice();
  }, [topicId]);

  useEffect(() => {
    return () => stopVoice();
  }, []);

  const handleToggleVoice = (scene: SqlVisualScene) => {
    if (isSpeaking) {
      stopVoice();
      return;
    }
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const text = lang === 'hi' ? scene.narration_hi : scene.narration_en;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = lang === 'hi' ? 0.94 : 0.97;
    utter.pitch = 1.02;
    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find((v) =>
        lang === 'hi'
          ? /hi[-_]in/i.test(v.lang) || /hindi/i.test(v.name)
          : /en[-_]in/i.test(v.lang) || /india/i.test(v.name)
      ) || voices.find((v) => /en[-_]us|en[-_]gb/i.test(v.lang));
    if (preferred) utter.voice = preferred;
    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  const handleVisualClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const lineEl = target.closest('.code-line') as HTMLElement | null;
    if (!lineEl) return;

    const wrapper = lineEl.closest('.sql-vn-visual-box');
    if (!wrapper) return;

    wrapper.querySelectorAll('.code-line').forEach((el) => el.classList.remove('active-line'));
    lineEl.classList.add('active-line');

    const noteEl = wrapper.querySelector('.line-note');
    if (noteEl) {
      const meaning =
        lang === 'hi'
          ? lineEl.getAttribute('data-line-hi')
          : lineEl.getAttribute('data-line-en');
      if (meaning) {
        noteEl.textContent = meaning;
      }
    }
  };

  if (!lesson) {
    return (
      <div className="p-6 text-center text-slate-500 text-sm">
        Visual Learning Notes are being prepared for this SQL topic.
      </div>
    );
  }

  const totalScenes = lesson.scenes.length;
  const currentScene = lesson.scenes[Math.min(activeSceneIdx, totalScenes - 1)];
  const structuredSpec = getStructuredSqlVisualNote(topicId);
  const notesPageCount = structuredSpec
    ? structuredSpec.pageCount
    : [79, 175, 80, 176, 81, 177, 82, 178].includes(topicId)
    ? 3
    : 2;

  const renderSceneCard = (scene: SqlVisualScene) => (
    <article
      key={scene.step}
      className="bg-white rounded-2xl border border-[#EDE9FE] p-4 sm:p-5 shadow-2xs space-y-4"
    >
      <div className="flex items-start justify-between gap-3 border-b border-[#F1F5F9] pb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#6D28D9] to-[#7C3AED] text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-2xs">
            {scene.step}
          </span>
          <h3 className="text-[15.5px] sm:text-[17px] font-bold text-[#1E1B4B] leading-snug m-0">
            {scene.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => handleToggleVoice(scene)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all shrink-0 cursor-pointer ${
            isSpeaking
              ? 'bg-[#6D28D9] text-white border-[#6D28D9] shadow-sm'
              : 'bg-[#FAF8FF] text-[#6D28D9] border-[#DDD6FE] hover:bg-[#F3E8FF]'
          }`}
          title={isSpeaking ? 'Stop narration' : 'Listen to mentor narration'}
        >
          {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          <span>{isSpeaking ? 'Stop' : 'Narrate'}</span>
        </button>
      </div>

      <div
        className="sql-vn-prose"
        dangerouslySetInnerHTML={{ __html: lang === 'hi' ? scene.hi : scene.en }}
      />

      <div
        onClick={handleVisualClick}
        className="sql-vn-visual-box bg-[#FAF8FF] border border-[#EDE9FE] rounded-2xl p-3.5 sm:p-4"
        dangerouslySetInnerHTML={{ __html: scene.visual }}
      />

      <div className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-[12.5px] font-medium leading-snug">
        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-amber-800 mr-1">Key Takeaway:</span>
          <span>{lang === 'hi' ? scene.takeaway_hi : scene.takeaway_en}</span>
        </div>
      </div>
    </article>
  );

  return (
    <div className="sql-vn-root w-full space-y-4 pb-6 font-sans">
      {/* ── COMPACT STICKY TOOLBAR (DOCKS AI MENTOR CONTROLS WHEN ACTIVE) ── */}
      <VisualNotesTopBar
        pageCount={notesPageCount}
        lang={lang}
        onLangChange={(next) => {
          stopVoice();
          setLang(next);
        }}
        leftExtra={
          totalScenes > 0 ? (
            <>
              <button
                type="button"
                onClick={() => setViewMode('scene')}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1 transition-all cursor-pointer ${
                  viewMode === 'scene'
                    ? 'bg-[#6D28D9] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-[#1E1B4B]'
                }`}
              >
                <BookOpen className="w-3 h-3" />
                <span>Interactive Scenes ({totalScenes})</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('all')}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1 transition-all cursor-pointer ${
                  viewMode === 'all'
                    ? 'bg-[#6D28D9] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-[#1E1B4B]'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>All Notes</span>
              </button>
            </>
          ) : undefined
        }
      />

      {/* ── VIEW CONTENT ── */}
      {viewMode === 'notes-sheet' ? (
        structuredSpec ? (
          <StructuredVisualNotesSheet
            spec={structuredSpec}
            lang={lang}
            activeSectionId={activeSectionId}
            speechProgress={speechProgress}
            liveTypedText={liveTypedText}
            isMentorSpeaking={isMentorSpeaking}
            onSectionRectChange={onSectionRectChange}
            onScrollSettled={onScrollSettled}
          />
        ) : topicId === 84 || topicId === 180 ? (
          <M17Topic8VisualNotesSheet lang={lang} />
        ) : topicId === 83 || topicId === 179 ? (
          <M17Topic7VisualNotesSheet lang={lang} />
        ) : topicId === 82 || topicId === 178 ? (
          <M17Topic6VisualNotesSheet lang={lang} />
        ) : topicId === 81 || topicId === 177 ? (
          <M17Topic5VisualNotesSheet lang={lang} />
        ) : topicId === 80 || topicId === 176 ? (
          <M17Topic4VisualNotesSheet lang={lang} />
        ) : topicId === 79 || topicId === 175 ? (
          <M17Topic3VisualNotesSheet lang={lang} />
        ) : topicId === 78 || topicId === 174 ? (
          <M17Topic2VisualNotesSheet lang={lang} />
        ) : (
          <M17Topic1VisualNotesSheet lang={lang} />
        )
      ) : viewMode === 'scene' && currentScene ? (
        <>
          <div className="w-full h-1.5 rounded-full bg-[#EDE9FE] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#6D28D9] to-[#9333EA] transition-all duration-300"
              style={{ width: `${Math.round(((activeSceneIdx + 1) / totalScenes) * 100)}%` }}
            />
          </div>

          {renderSceneCard(currentScene)}

          <div className="flex items-center justify-between gap-3 bg-white border border-[#EDE9FE] rounded-2xl p-3 shadow-2xs">
            <button
              type="button"
              disabled={activeSceneIdx === 0}
              onClick={() => {
                stopVoice();
                setActiveSceneIdx((prev) => Math.max(0, prev - 1));
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white text-slate-700 hover:border-[#7C3AED] hover:text-[#6D28D9] disabled:opacity-45 disabled:cursor-not-allowed inline-flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-1 overflow-x-auto max-w-[55%] py-0.5 no-scrollbar">
              {lesson.scenes.map((sc, idx) => (
                <button
                  key={sc.step}
                  type="button"
                  onClick={() => {
                    stopVoice();
                    setActiveSceneIdx(idx);
                  }}
                  title={`Scene ${sc.step}: ${sc.title}`}
                  className={`w-6 h-6 rounded-lg text-[11px] font-semibold shrink-0 transition-all cursor-pointer ${
                    idx === activeSceneIdx
                      ? 'bg-[#6D28D9] text-white shadow-xs'
                      : idx < activeSceneIdx
                      ? 'bg-[#EDE9FE] text-[#6D28D9]'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {sc.step}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={activeSceneIdx >= totalScenes - 1}
              onClick={() => {
                stopVoice();
                setActiveSceneIdx((prev) => Math.min(totalScenes - 1, prev + 1));
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] text-white hover:brightness-110 disabled:opacity-45 disabled:cursor-not-allowed inline-flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <span>Next Scene</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-4">{lesson.scenes.map((sc) => renderSceneCard(sc))}</div>
      )}

      {/* ── SAMPLE DATA NOTICE ── */}
      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11.5px] text-slate-500 font-medium">
        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>{lesson.sampleDataNotice}</span>
      </div>
    </div>
  );
};
