import React from 'react';
import { Database, Table2 } from 'lucide-react';

const NoteRibbonBanner: React.FC<{
  title: string;
  subtitle: string;
  moduleTag?: string;
  pageTag?: string;
}> = ({ title, subtitle, pageTag }) => {
  if (pageTag && !/PAGE\s*1\b/i.test(pageTag)) return null;
  return (
  <div className="space-y-2.5">
    <div className="relative flex items-center justify-center py-0.5">
      <span className="hidden sm:inline-flex items-center justify-center text-lg mr-2 select-none" aria-hidden="true">
        🌸
      </span>
      <div className="flex-1 max-w-xl bg-gradient-to-b from-[#F5F0FF] to-[#EDE5FF] border-2 border-[#7C3AED]/70 rounded-2xl px-5 py-3 text-center shadow-[0_4px_14px_rgba(124,58,237,0.08)]">
        <h2 className="text-[20px] sm:text-[24px] font-extrabold text-[#1E1B4B] tracking-tight m-0 leading-tight">
          {title}
        </h2>
      </div>
      <span className="hidden sm:inline-flex items-center justify-center text-lg ml-2 select-none" aria-hidden="true">
        🌸
      </span>
    </div>

    {subtitle && (
      <div className="flex justify-center">
        <span className="inline-block px-4 py-1 rounded-full bg-[#F3E8FF] border border-[#C4B5FD] text-[#3B0764] text-[11px] font-bold tracking-wider uppercase">
          {subtitle}
        </span>
      </div>
    )}
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
 * Exact 3-Page Illustrated Visual Learning Notes Sheet for M17 Topic 3: What Is SQL?
 */
export const M17Topic3VisualNotesSheet: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const isHi = lang === 'hi';

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 1 OF 3 — WHAT IS SQL?
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="What Is SQL?"
          subtitle="THE LANGUAGE THAT TALKS TO DATA"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 3"
          pageTag="PAGE 1 OF 3"
        />

        {/* Intro Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border-2 border-[#38BDF8]/60 flex items-center justify-center shrink-0">
            <Database className="w-8 h-8 text-[#4F46E5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1E1B4B] m-0">
              SQL stands for Structured Query Language.
            </h3>
            <p className="text-[13px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  <strong>SQL</strong> wo language hai jisse hum database mein stored data se <strong>questions poochte hain</strong>. Thousands of records ko ek-ek karke padhne ke bajay, hum ek chhota SQL command likhte hain aur database exact information return kar deta hai.
                </>
              ) : (
                <>
                  SQL is a language we use to <strong>ask questions about data stored in a database</strong>. Instead of reading thousands of records one by one, we write a short SQL command and the database returns the information we need.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Section: Imagine a busy retail shop */}
        <div className="space-y-3">
          <SectionPill label="Imagine a busy retail shop" />
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 space-y-3.5">
            <p className="text-[13px] text-[#334155] m-0">
              A manager wants to know: <strong>&ldquo;Which customers placed large orders?&rdquo;</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-7 items-center gap-2.5 text-center">
              <div className="sm:col-span-2 rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 flex flex-col items-center gap-1.5">
                <Table2 className="w-7 h-7 text-[#4F46E5]" />
                <span className="text-[13px] font-bold text-[#1E1B4B]">Orders data</span>
                <span className="text-[11px] text-[#64748B]">Many stored records</span>
              </div>

              <div className="hidden sm:flex sm:col-span-1 justify-center text-[#7C3AED] font-bold text-xl">→</div>

              <div className="sm:col-span-2 rounded-2xl bg-[#F3E8FF]/90 border border-[#C4B5FD] p-3.5 flex flex-col items-center gap-1.5">
                <span className="px-3 py-0.5 rounded-full bg-white border border-[#C4B5FD] text-[10.5px] font-extrabold text-[#1E1B4B]">
                  SQL QUERY
                </span>
                <span className="text-[11.5px] text-[#334155] leading-snug">
                  Ask for orders above a chosen amount.
                </span>
              </div>

              <div className="hidden sm:flex sm:col-span-1 justify-center text-[#7C3AED] font-bold text-xl">→</div>

              <div className="sm:col-span-1 rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3 flex flex-col items-center gap-1">
                <Table2 className="w-6 h-6 text-[#15803D]" />
                <span className="text-[12px] font-bold text-[#1E1B4B] leading-tight">Matching results</span>
                <span className="text-[10.5px] text-[#64748B]">Only useful rows</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Database, DBMS and SQL are different */}
        <div className="space-y-3">
          <SectionPill label="Database, DBMS and SQL are different" />
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 text-center space-y-1">
                <div className="text-[13px] font-extrabold text-[#0C4A6E]">DATABASE</div>
                <p className="text-[12px] text-[#334155] m-0 leading-snug">
                  Stores organized information such as customers and orders.
                </p>
              </div>
              <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-3.5 text-center space-y-1">
                <div className="text-[13px] font-extrabold text-[#78350F]">DBMS</div>
                <p className="text-[12px] text-[#334155] m-0 leading-snug">
                  Software that manages the database and runs queries.
                </p>
              </div>
              <div className="rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3.5 text-center space-y-1">
                <div className="text-[13px] font-extrabold text-[#14532D]">SQL</div>
                <p className="text-[12px] text-[#334155] m-0 leading-snug">
                  The language used to request or change information.
                </p>
              </div>
            </div>
            <p className="text-[12px] text-[#334155] m-0">
              <strong className="text-[#1E1B4B]">Example:</strong> PostgreSQL is a DBMS. The database holds shop records. SQL is the language an analyst uses to work with them.
            </p>
          </div>
        </div>

        {/* Section: How SQL gives an analyst an answer */}
        <div className="space-y-3">
          <SectionPill label="How SQL gives an analyst an answer" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="rounded-2xl bg-[#F3E8FF]/90 border border-[#C4B5FD] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#4C1D95]">1. Ask</div>
              <p className="text-[11.5px] text-[#334155] m-0">What do I want to know?</p>
            </div>
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#0C4A6E]">2. Write</div>
              <p className="text-[11.5px] text-[#334155] m-0">Create a SQL query.</p>
            </div>
            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#78350F]">3. Run</div>
              <p className="text-[11.5px] text-[#334155] m-0">The DBMS processes it.</p>
            </div>
            <div className="rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#14532D]">4. Read</div>
              <p className="text-[11.5px] text-[#334155] m-0">Study the result table.</p>
            </div>
          </div>
        </div>

        {/* Section: SQL can answer many business questions */}
        <div className="space-y-3">
          <SectionPill label="SQL can answer many business questions" />
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="rounded-xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3 text-center space-y-1">
              <div className="text-[12.5px] font-extrabold text-[#0C4A6E]">FIND</div>
              <p className="text-[11.5px] text-[#334155] m-0">Which orders belong to Asha?</p>
            </div>
            <div className="rounded-xl bg-[#FCE7F3]/85 border border-[#F9A8D4] p-3 text-center space-y-1">
              <div className="text-[12.5px] font-extrabold text-[#831843]">FILTER</div>
              <p className="text-[11.5px] text-[#334155] m-0">Which orders are over 500?</p>
            </div>
            <div className="rounded-xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-3 text-center space-y-1">
              <div className="text-[12.5px] font-extrabold text-[#78350F]">SORT</div>
              <p className="text-[11.5px] text-[#334155] m-0">Which sales are highest?</p>
            </div>
            <div className="rounded-xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3 text-center space-y-1">
              <div className="text-[12.5px] font-extrabold text-[#14532D]">SUMMARIZE</div>
              <p className="text-[11.5px] text-[#334155] m-0">What is the total sales amount?</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] font-bold text-[#64748B] border-t border-[#EDE9FE] pt-3">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>1 / 3</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 2 OF 3 — YOUR FIRST SQL QUERY
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Your First SQL Query"
          subtitle="SEE HOW A QUESTION BECOMES AN ANSWER"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 3"
          pageTag="PAGE 2 OF 3"
        />

        {/* Intro Business Question */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 space-y-1">
          <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1E1B4B] m-0">
            Business question: Which orders are above 500, with the largest amount first?
          </h3>
          <p className="text-[13px] text-[#334155] m-0">
            {isHi
              ? 'Hum full Orders table se start karenge, ek SQL query likhenge aur dekhenge ki result kaise change hota hai.'
              : 'We will start with the full Orders table, write a SQL query and see exactly how the result changes.'}
          </p>
        </div>

        {/* Step 1: Look at the Orders table */}
        <div className="space-y-3">
          <SectionPill label="Step 1: Look at the Orders table" />
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 space-y-3">
            <p className="text-[12.5px] text-[#334155] m-0">
              This sample table has <strong>6 orders</strong>. Each row is one order. The <code>amount</code> column stores the value of that order.
            </p>
            <div className="rounded-xl border border-[#C4B5FD] overflow-x-auto">
              <table className="w-full text-left border-collapse text-[12.5px]">
                <thead>
                  <tr className="bg-[#F3E8FF] text-[#1E1B4B] border-b border-[#DDD6FE]">
                    <th className="py-2 px-3 font-bold">order_id</th>
                    <th className="py-2 px-3 font-bold border-l border-[#DDD6FE]">customer</th>
                    <th className="py-2 px-3 font-bold border-l border-[#DDD6FE]">amount</th>
                    <th className="py-2 px-3 font-bold border-l border-[#DDD6FE]">order_date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDE9FE] text-[#334155]">
                  {[
                    ['501', 'Asha', '1200', '2026-11-01'],
                    ['502', 'Rahul', '350', '2026-11-02'],
                    ['503', 'Neha', '800', '2026-11-03'],
                    ['504', 'Aman', '450', '2026-11-04'],
                    ['505', 'Asha', '650', '2026-11-05'],
                    ['506', 'Isha', '1500', '2026-11-06'],
                  ].map(([id, cust, amt, dt]) => (
                    <tr key={id}>
                      <td className="py-2 px-3 font-mono font-bold text-[#6D28D9]">{id}</td>
                      <td className="py-2 px-3 border-l border-[#EDE9FE]">{cust}</td>
                      <td className="py-2 px-3 border-l border-[#EDE9FE] font-mono">{amt}</td>
                      <td className="py-2 px-3 border-l border-[#EDE9FE] font-mono text-[#64748B]">{dt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Step 2: Write a short SQL query */}
        <div className="space-y-3">
          <SectionPill label="Step 2: Write a short SQL query" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="rounded-2xl bg-[#1E1B3A] p-4 font-mono text-[12.5px] leading-relaxed text-[#E2E8F0] shadow-sm">
              <pre className="m-0 whitespace-pre-wrap">
{`SELECT order_id, customer, amount
FROM orders
WHERE amount > 500
ORDER BY amount DESC;`}
              </pre>
            </div>
            <div className="space-y-2 text-[12.5px] text-[#334155]">
              <p className="m-0">
                <strong className="text-[#1E1B4B]">SELECT</strong> — choose the columns to show.
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">FROM</strong> — choose the source table.
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">WHERE</strong> — keep only orders above 500.
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">ORDER BY</strong> — sort by amount; <strong>DESC</strong> means highest first.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Read the result table */}
        <div className="space-y-3">
          <SectionPill label="Step 3: Read the result table" />
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 space-y-3">
            <p className="text-[12.5px] text-[#334155] m-0">
              The query returns <strong>4 rows</strong>. Orders 502 and 504 are removed because their amounts are not above 500.
            </p>
            <div className="max-w-lg mx-auto rounded-xl border border-[#C4B5FD] overflow-hidden">
              <table className="w-full text-left border-collapse text-[12.5px]">
                <thead>
                  <tr className="bg-[#F3E8FF] text-[#1E1B4B] border-b border-[#DDD6FE]">
                    <th className="py-2 px-3 font-bold">order_id</th>
                    <th className="py-2 px-3 font-bold border-l border-[#DDD6FE]">customer</th>
                    <th className="py-2 px-3 font-bold border-l border-[#DDD6FE]">amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDE9FE] text-[#334155]">
                  <tr className="bg-[#DCFCE7]/60">
                    <td className="py-2 px-3 font-mono font-bold text-[#15803D]">506</td>
                    <td className="py-2 px-3 border-l border-[#BBF7D0] font-semibold">Isha</td>
                    <td className="py-2 px-3 border-l border-[#BBF7D0] font-mono font-bold text-[#15803D]">1500</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-mono font-bold text-[#6D28D9]">501</td>
                    <td className="py-2 px-3 border-l border-[#EDE9FE]">Asha</td>
                    <td className="py-2 px-3 border-l border-[#EDE9FE] font-mono">1200</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-mono font-bold text-[#6D28D9]">503</td>
                    <td className="py-2 px-3 border-l border-[#EDE9FE]">Neha</td>
                    <td className="py-2 px-3 border-l border-[#EDE9FE] font-mono">800</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-mono font-bold text-[#6D28D9]">505</td>
                    <td className="py-2 px-3 border-l border-[#EDE9FE]">Asha</td>
                    <td className="py-2 px-3 border-l border-[#EDE9FE] font-mono">650</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section: Follow the transformation */}
        <div className="space-y-3">
          <SectionPill label="Follow the transformation" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#0C4A6E]">6 original orders</div>
              <p className="text-[11.5px] text-[#334155] m-0">All rows are available.</p>
            </div>
            <div className="rounded-2xl bg-[#FCE7F3]/85 border border-[#F9A8D4] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#831843]">4 orders above 500</div>
              <p className="text-[11.5px] text-[#334155] m-0">WHERE removes 2 rows.</p>
            </div>
            <div className="rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3.5 text-center space-y-1">
              <div className="text-[13px] font-extrabold text-[#14532D]">Largest amount first</div>
              <p className="text-[11.5px] text-[#334155] m-0">ORDER BY sorts 4 rows.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] font-bold text-[#64748B] border-t border-[#EDE9FE] pt-3">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>2 / 3</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 3 OF 3 — WHY ANALYSTS USE SQL
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Why Analysts Use SQL"
          subtitle="TURN STORED DATA INTO BUSINESS INSIGHTS"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 3"
          pageTag="PAGE 3 OF 3"
        />

        {/* Intro Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 space-y-1">
          <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1E1B4B] m-0">
            Analysts use SQL to answer business questions with real data.
          </h3>
          <p className="text-[13px] text-[#334155] leading-relaxed m-0">
            {isHi
              ? 'Sales team ko top products jaanne hote hain, bank ko transactions study karni hoti hain, aur support team ko delayed requests dhoondhni hoti hain. SQL analysts ko in reports ke liye exact records nikalne mein help karta hai.'
              : 'A sales team may want to know its top products, a bank may need to study transactions, and a support team may want to find delayed requests. SQL helps analysts get the right records for these reports.'}
          </p>
        </div>

        {/* Section: Six everyday uses of SQL */}
        <div className="space-y-3">
          <SectionPill label="Six everyday uses of SQL" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 space-y-1">
              <div className="text-[13px] font-bold text-[#0C4A6E]">1. Retrieve records</div>
              <p className="text-[12px] text-[#334155] m-0">Show customer names and order amounts.</p>
            </div>
            <div className="rounded-2xl bg-[#F3E8FF]/90 border border-[#C4B5FD] p-3.5 space-y-1">
              <div className="text-[13px] font-bold text-[#4C1D95]">2. Filter data</div>
              <p className="text-[12px] text-[#334155] m-0">Keep orders from a chosen city or date.</p>
            </div>
            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-3.5 space-y-1">
              <div className="text-[13px] font-bold text-[#78350F]">3. Sort results</div>
              <p className="text-[12px] text-[#334155] m-0">List the biggest sales first.</p>
            </div>
            <div className="rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3.5 space-y-1">
              <div className="text-[13px] font-bold text-[#14532D]">4. Calculate totals</div>
              <p className="text-[12px] text-[#334155] m-0">Find total sales or average order value.</p>
            </div>
            <div className="rounded-2xl bg-[#FCE7F3]/85 border border-[#F9A8D4] p-3.5 space-y-1">
              <div className="text-[13px] font-bold text-[#831843]">5. Connect tables</div>
              <p className="text-[12px] text-[#334155] m-0">Combine customers with their orders.</p>
            </div>
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 space-y-1">
              <div className="text-[13px] font-bold text-[#0C4A6E]">6. Repeat a report</div>
              <p className="text-[12px] text-[#334155] m-0">Run a saved query with fresh data.</p>
            </div>
          </div>
        </div>

        {/* Section: SQL and Excel often work together */}
        <div className="space-y-3">
          <SectionPill label="SQL and Excel often work together" />
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 text-center space-y-1">
                <div className="text-[13px] font-extrabold text-[#0C4A6E]">EXCEL / SPREADSHEETS</div>
                <p className="text-[12px] text-[#334155] m-0 leading-snug">
                  Great for quick calculations, small reports, checking data and sharing simple worksheets.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F3E8FF]/90 border border-[#C4B5FD] p-3.5 text-center space-y-1">
                <div className="text-[13px] font-extrabold text-[#4C1D95]">SQL / DATABASES</div>
                <p className="text-[12px] text-[#334155] m-0 leading-snug">
                  Great for selecting, filtering and combining stored records using repeatable queries.
                </p>
              </div>
            </div>
            <p className="text-[12px] text-[#334155] m-0">
              <strong className="text-[#1E1B4B]">Common workflow:</strong> Use SQL to prepare the data, then Excel or Power BI to explore it and present a report.
            </p>
          </div>
        </div>

        {/* Section: From database records to a dashboard */}
        <div className="space-y-3">
          <SectionPill label="From database records to a dashboard" />
          <div className="rounded-2xl bg-white border-2 border-[#C4B5FD]/80 p-4 grid grid-cols-1 sm:grid-cols-7 items-center gap-2 text-center">
            <div className="sm:col-span-1 rounded-xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-2.5">
              <div className="text-[11.5px] font-extrabold text-[#0C4A6E]">DATABASE</div>
              <div className="text-[10.5px] text-[#334155]">Stored orders</div>
            </div>
            <div className="hidden sm:flex justify-center text-[#7C3AED] font-bold text-lg">→</div>
            <div className="sm:col-span-1 rounded-xl bg-[#F3E8FF]/90 border border-[#C4B5FD] p-2.5">
              <div className="text-[11.5px] font-extrabold text-[#4C1D95]">SQL QUERY</div>
              <div className="text-[10.5px] text-[#334155]">Selected data</div>
            </div>
            <div className="hidden sm:flex justify-center text-[#7C3AED] font-bold text-lg">→</div>
            <div className="sm:col-span-1 rounded-xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-2.5">
              <div className="text-[11.5px] font-extrabold text-[#78350F]">RESULT TABLE</div>
              <div className="text-[10.5px] text-[#334155]">Clean answer</div>
            </div>
            <div className="hidden sm:flex justify-center text-[#7C3AED] font-bold text-lg">→</div>
            <div className="sm:col-span-1 rounded-xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-2.5">
              <div className="text-[11.5px] font-extrabold text-[#14532D]">REPORT</div>
              <div className="text-[10.5px] text-[#334155]">Useful insight</div>
            </div>
          </div>
        </div>

        {/* Section: Three good habits from day one */}
        <div className="space-y-3">
          <SectionPill label="Three good habits from day one" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#F3E8FF]/90 border border-[#C4B5FD] p-3.5 text-center space-y-1">
              <div className="text-[12.5px] font-extrabold text-[#4C1D95]">START WITH SELECT</div>
              <p className="text-[11.5px] text-[#334155] m-0">Read data before learning to change it.</p>
            </div>
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#7DD3FC] p-3.5 text-center space-y-1">
              <div className="text-[12.5px] font-extrabold text-[#0C4A6E]">CHECK YOUR RESULTS</div>
              <p className="text-[11.5px] text-[#334155] m-0">Review filters, row counts and totals.</p>
            </div>
            <div className="rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3.5 text-center space-y-1">
              <div className="text-[12.5px] font-extrabold text-[#14532D]">PROTECT PRIVATE DATA</div>
              <p className="text-[11.5px] text-[#334155] m-0">Follow access rules and use only needed fields.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] font-bold text-[#64748B] border-t border-[#EDE9FE] pt-3">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>3 / 3</span>
        </div>
      </section>
    </div>
  );
};
