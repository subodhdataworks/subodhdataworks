import React from 'react';
import { Database } from 'lucide-react';

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
 * Exact 3-Page Illustrated Visual Learning Notes Sheet for
 * M17 Topic 4: Understanding a Relational Database
 */
export const M17Topic4VisualNotesSheet: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const isHi = lang === 'hi';

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 1 OF 3 — UNDERSTANDING A RELATIONAL DATABASE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Understanding a Relational Database"
          subtitle="HOW CONNECTED TABLES KEEP DATA ORGANIZED"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 4"
          pageTag="PAGE 1 OF 3"
        />

        {/* Intro Lavender Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border-2 border-[#38BDF8]/60 flex items-center justify-center shrink-0">
            <Database className="w-8 h-8 text-[#0284C7]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1E1B4B] m-0">
              {isHi
                ? 'Relational database connected information ko tables mein store karta hai.'
                : 'A relational database stores connected information in tables.'}
            </h3>
            <p className="text-[13px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  Ek online shop socho. Use customer details aur order details dono chahiye. Ek <strong>relational database</strong> inhe <strong>separate tables</strong> mein rakhta hai aur matching ID values se connect karta hai. Isse information manage, find aur analyze karna aasan ho jata hai.
                </>
              ) : (
                <>
                  Imagine an online shop. It needs customer details and order details. A <strong>relational database</strong> keeps these in <strong>separate tables</strong> and uses matching ID values to connect them. This makes information easier to manage, find and analyze.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Section 1: Start with a real shop example */}
        <div className="space-y-3">
          <SectionPill label="Start with a real shop example" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-4">
            <p className="text-[13px] text-[#334155] m-0">
              {isHi ? (
                <>
                  <strong>Customers</strong> table <strong>people</strong> ko describe karta hai. <strong>Orders</strong> table <strong>purchases</strong> ko describe karta hai.
                </>
              ) : (
                <>
                  The Customers table describes <strong>people</strong>. The Orders table describes <strong>purchases</strong>.
                </>
              )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Customers Table */}
              <div className="space-y-2">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#93C5FD] text-[#1E3A8A] text-[11px] font-bold uppercase tracking-wider">
                  CUSTOMERS TABLE
                </div>
                <div className="overflow-x-auto rounded-xl border border-[#C4B5FD]">
                  <table className="w-full text-left border-collapse text-[12.5px]">
                    <thead>
                      <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">customer_id</th>
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">name</th>
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">city</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#334155]">
                      <tr className="bg-[#DCFCE7]/60 border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">101</td>
                        <td className="py-2 px-3 font-medium">Asha</td>
                        <td className="py-2 px-3">Patna</td>
                      </tr>
                      <tr className="bg-white border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">102</td>
                        <td className="py-2 px-3 font-medium">Rahul</td>
                        <td className="py-2 px-3">Delhi</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">103</td>
                        <td className="py-2 px-3 font-medium">Neha</td>
                        <td className="py-2 px-3">Patna</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Orders Table */}
              <div className="space-y-2">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#FCE7F3] border border-[#F9A8D4] text-[#831843] text-[11px] font-bold uppercase tracking-wider">
                  ORDERS TABLE
                </div>
                <div className="overflow-x-auto rounded-xl border border-[#C4B5FD]">
                  <table className="w-full text-left border-collapse text-[12.5px]">
                    <thead>
                      <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">order_id</th>
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">customer_id</th>
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">amount</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#334155]">
                      <tr className="bg-[#DCFCE7]/60 border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">501</td>
                        <td className="py-2 px-3 font-semibold text-[#1E1B4B]">101</td>
                        <td className="py-2 px-3">1200</td>
                      </tr>
                      <tr className="bg-[#DCFCE7]/60 border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">502</td>
                        <td className="py-2 px-3 font-semibold text-[#1E1B4B]">101</td>
                        <td className="py-2 px-3">450</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">503</td>
                        <td className="py-2 px-3 font-semibold text-[#1E1B4B]">102</td>
                        <td className="py-2 px-3">900</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#F5F0FF] border border-[#DDD6FE] px-3.5 py-2.5 text-[12.5px] text-[#4C1D95]">
              {isHi ? (
                <>
                  <strong>Link:</strong> Dono tables mein <strong>customer_id</strong> hai. Matching values batati hain ki kis customer ne kaun sa order place kiya.
                </>
              ) : (
                <>
                  <strong>Link:</strong> Both tables have <strong>customer_id</strong>. The matching values tell us which customer placed each order.
                </>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Follow one customer across both tables */}
        <div className="space-y-3">
          <SectionPill label="Follow one customer across both tables" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="w-full sm:flex-1 rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-3.5 text-center space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A]">CUSTOMER</div>
                <div className="text-[15px] font-extrabold text-[#1E1B4B]">101 | Asha</div>
              </div>

              <span className="text-[#7C3AED] font-extrabold text-xl select-none rotate-90 sm:rotate-0">→</span>

              <div className="w-full sm:flex-1 rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-3.5 text-center space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#92400E]">MATCH THE ID</div>
                <div className="text-[14px] font-extrabold text-[#1E1B4B]">customer_id = 101</div>
              </div>

              <span className="text-[#7C3AED] font-extrabold text-xl select-none rotate-90 sm:rotate-0">→</span>

              <div className="w-full sm:flex-1 rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-3.5 text-center space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#166534]">ASHA&apos;S ORDERS</div>
                <div className="text-[15px] font-extrabold text-[#1E1B4B]">501 and 502</div>
              </div>
            </div>

            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi ? (
                <>
                  Asha Customers table mein <strong>ek baar</strong> aati hai, lekin uski ID Orders mein <strong>do baar</strong> aati hai kyunki usne do orders kiye.
                </>
              ) : (
                <>
                  Asha appears <strong>once</strong> in Customers, but her ID appears <strong>twice</strong> in Orders because she placed two orders.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Section 3: Why not store everything in one large table? */}
        <div className="space-y-3">
          <SectionPill label="Why not store everything in one large table?" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-2xl bg-[#FCE7F3]/75 border border-[#F9A8D4] p-4 text-center space-y-1.5">
                <div className="text-[12.5px] font-extrabold text-[#1E1B4B] uppercase tracking-wide">ONE BIG TABLE</div>
                <div className="text-[12.5px] text-[#334155]">Asha | Patna | Order 501</div>
                <div className="text-[12.5px] text-[#334155]">Asha | Patna | Order 502</div>
              </div>

              <div className="rounded-2xl bg-[#DCFCE7]/75 border border-[#86EFAC] p-4 text-center space-y-1.5">
                <div className="text-[12.5px] font-extrabold text-[#1E1B4B] uppercase tracking-wide">RELATED TABLES</div>
                <div className="text-[12.5px] text-[#334155]">Customers: Asha | Patna (once)</div>
                <div className="text-[12.5px] text-[#334155]">Orders: 501 and 502 | customer 101</div>
              </div>
            </div>

            <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  Separate tables <strong>repeated customer details ko kam karte hain</strong>. Agar Asha apni city change kare, to shop sirf uska customer record update karegi—har order row ko correct nahi karna padega.
                </>
              ) : (
                <>
                  Separate tables <strong>reduce repeated customer details</strong>. If Asha changes her city, the shop updates her customer record instead of correcting every order row.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Section 4: Remember the main idea */}
        <div className="space-y-2.5">
          <SectionPill label="Remember the main idea" />
          <div className="rounded-2xl bg-[#F5F0FF] border-2 border-[#C4B5FD] px-4 py-3 text-[13px] text-[#1E1B4B]">
            {isHi ? (
              <>
                <strong>Relational database = Tables + Keys + Relationships.</strong> Connection matching values ke through banta hai.
              </>
            ) : (
              <>
                <strong>Relational database = Tables + Keys + Relationships.</strong> The connection is created using matching values.
              </>
            )}
          </div>
        </div>

        <div className="pt-2 border-t border-[#EDE9FE] flex items-center justify-between text-[10.5px] font-semibold text-slate-400 tracking-wider uppercase">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>1 / 3</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 2 OF 3 — KEYS AND RELATIONSHIPS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Keys and Relationships"
          subtitle="HOW TABLES ARE LINKED CORRECTLY"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 4"
          pageTag="PAGE 2 OF 3"
        />

        {/* Intro Lavender Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 space-y-1.5">
          <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1E1B4B] m-0">
            {isHi
              ? 'Key ek column (ya columns ka group) hai jo records ko identify ya link karta hai.'
              : 'A key is a column (or group of columns) used to identify or link records.'}
          </h3>
          <p className="text-[13px] text-[#334155] leading-relaxed m-0">
            {isHi ? (
              <>
                Hamari shop mein <strong>customer_id</strong> database ko customer identify karne aur us customer ko orders se connect karne mein madad karta hai. Ek hi column alag tables mein alag role play kar sakta hai.
              </>
            ) : (
              <>
                In our shop, <strong>customer_id</strong> helps the database identify a customer and connect that customer to orders. The same column can play different roles in different tables.
              </>
            )}
          </p>
        </div>

        {/* Section 1: Primary Key vs Foreign Key */}
        <div className="space-y-3">
          <SectionPill label="Primary Key vs Foreign Key" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-4 text-center space-y-2">
                <div className="text-[13px] font-extrabold text-[#1E1B4B] uppercase tracking-wide">
                  PRIMARY KEY (PK)
                </div>
                <p className="text-[12.5px] text-[#334155] leading-snug m-0">
                  {isHi ? (
                    <>
                      <strong>Customers</strong> table mein, <strong>customer_id</strong> har customer ko uniquely identify karta hai.
                    </>
                  ) : (
                    <>
                      In the <strong>Customers</strong> table, <strong>customer_id</strong> identifies each customer.
                    </>
                  )}
                </p>
                <div className="text-[15px] font-extrabold text-[#6D28D9] tracking-widest pt-1">
                  101 &nbsp; 102 &nbsp; 103
                </div>
              </div>

              <div className="rounded-2xl bg-[#FCE7F3]/80 border border-[#F9A8D4] p-4 text-center space-y-2">
                <div className="text-[13px] font-extrabold text-[#1E1B4B] uppercase tracking-wide">
                  FOREIGN KEY (FK)
                </div>
                <p className="text-[12.5px] text-[#334155] leading-snug m-0">
                  {isHi ? (
                    <>
                      <strong>Orders</strong> table mein, <strong>customer_id</strong> us customer ki taraf point karta hai.
                    </>
                  ) : (
                    <>
                      In the <strong>Orders</strong> table, <strong>customer_id</strong> points to a customer.
                    </>
                  )}
                </p>
                <div className="text-[15px] font-extrabold text-[#6D28D9] tracking-widest pt-1">
                  101 &nbsp; 101 &nbsp; 102
                </div>
              </div>
            </div>

            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi ? (
                <>
                  <strong>Primary Key:</strong> Unique aur NULL nahi hoti. <strong>Foreign Key:</strong> Repeat ho sakti hai kyunki ek customer kai orders place kar sakta hai.
                </>
              ) : (
                <>
                  <strong>Primary Key:</strong> Unique and not NULL. <strong>Foreign Key:</strong> Can repeat because one customer can place many orders.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Section 2: The most common relationship: One-to-Many */}
        <div className="space-y-3">
          <SectionPill label="The most common relationship: One-to-Many" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3.5">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:w-52 rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-4 text-center space-y-1 shrink-0">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A]">ONE CUSTOMER</div>
                <div className="text-[16px] font-extrabold text-[#6D28D9]">Asha (101)</div>
              </div>

              {/* Branching Arrow SVG */}
              <div className="hidden sm:flex items-center justify-center w-16 shrink-0" aria-hidden="true">
                <svg viewBox="0 0 64 80" className="w-16 h-20 overflow-visible">
                  <path d="M 0 40 L 24 40" stroke="#7C3AED" strokeWidth="2.5" fill="none" />
                  <path d="M 24 18 L 24 62" stroke="#7C3AED" strokeWidth="2.5" fill="none" />
                  <path d="M 24 18 L 58 18" stroke="#7C3AED" strokeWidth="2.5" fill="none" />
                  <path d="M 52 13 L 59 18 L 52 23" stroke="#7C3AED" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 24 62 L 58 62" stroke="#7C3AED" strokeWidth="2.5" fill="none" />
                  <path d="M 52 57 L 59 62 L 52 67" stroke="#7C3AED" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="sm:hidden text-[#7C3AED] font-extrabold text-lg select-none">↓</div>

              <div className="w-full flex-1 space-y-2.5">
                <div className="rounded-xl bg-[#DCFCE7]/85 border border-[#86EFAC] px-4 py-3 text-center text-[13.5px] font-bold text-[#1E1B4B]">
                  Order 501 | customer_id 101
                </div>
                <div className="rounded-xl bg-[#FEF3C7]/85 border border-[#FCD34D] px-4 py-3 text-center text-[13.5px] font-bold text-[#1E1B4B]">
                  Order 502 | customer_id 101
                </div>
              </div>
            </div>

            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi ? (
                <>
                  <strong>1 side</strong> Customers hai. <strong>Many side</strong> Orders hai. Ek single customer ke zero, ek, ya kai orders ho sakte hain.
                </>
              ) : (
                <>
                  The <strong>1 side</strong> is Customers. The <strong>many side</strong> is Orders. A single customer may have zero, one or many orders.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Section 3: Other relationship patterns */}
        <div className="space-y-3">
          <SectionPill label="Other relationship patterns" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-4 text-center space-y-1.5">
              <div className="text-[12.5px] font-extrabold text-[#1E1B4B] uppercase tracking-wide">ONE-TO-ONE</div>
              <p className="text-[12.5px] text-[#334155] leading-snug m-0">
                {isHi
                  ? 'Ek employee ke paas ek assigned security badge ho sakta hai.'
                  : 'One employee may have one assigned security badge.'}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F3E8FF]/85 border border-[#C4B5FD] p-4 text-center space-y-1.5">
              <div className="text-[12.5px] font-extrabold text-[#1E1B4B] uppercase tracking-wide">ONE-TO-MANY</div>
              <p className="text-[12.5px] text-[#334155] leading-snug m-0">
                {isHi
                  ? 'Ek customer kai orders place kar sakta hai.'
                  : 'One customer can place many orders.'}
              </p>
            </div>

            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-4 text-center space-y-1.5">
              <div className="text-[12.5px] font-extrabold text-[#1E1B4B] uppercase tracking-wide">MANY-TO-MANY</div>
              <p className="text-[12.5px] text-[#334155] leading-snug m-0">
                {isHi
                  ? 'Students kai courses le sakte hain; courses mein kai students ho sakte hain.'
                  : 'Students can take many courses; courses can have many students.'}
              </p>
            </div>
          </div>

          <p className="text-[12.5px] text-[#334155] m-0 px-1">
            {isHi ? (
              <>
                Many-to-many relationship aam taur par ek teesre <strong>link table</strong> ke through store hota hai, jaise Enrollments.
              </>
            ) : (
              <>
                A many-to-many relationship is usually stored through a third <strong>link table</strong>, such as Enrollments.
              </>
            )}
          </p>
        </div>

        {/* Section 4: Keep relationships reliable */}
        <div className="space-y-2.5">
          <SectionPill label="Keep relationships reliable" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD] p-4 space-y-2 text-[12.5px] text-[#334155] leading-relaxed">
            <p className="m-0">
              {isHi ? (
                <>
                  <strong className="text-[#1E1B4B]">Referential integrity:</strong> Har order ek aise customer ko point karna chahiye jo exist karta ho. Foreign Key constraint unknown <code className="px-1 py-0.5 rounded bg-purple-100 text-purple-900 font-semibold">customer_id</code> (jaise 999) wale order ko reject kar sakta hai.
                </>
              ) : (
                <>
                  <strong className="text-[#1E1B4B]">Referential integrity:</strong> An order should point to a customer that exists. A Foreign Key constraint can reject an order with an unknown customer_id, such as 999.
                </>
              )}
            </p>
            <p className="m-0">
              {isHi ? (
                <>
                  <strong className="text-[#1E1B4B]">Good design:</strong> Consistent ID data types, clear table names aur har table mein ek main subject rakho.
                </>
              ) : (
                <>
                  <strong className="text-[#1E1B4B]">Good design:</strong> Use consistent ID data types, clear table names and one main subject per table.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#EDE9FE] flex items-center justify-between text-[10.5px] font-semibold text-slate-400 tracking-wider uppercase">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>2 / 3</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 3 OF 3 — CONNECT TABLES USING SQL
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Connect Tables Using SQL"
          subtitle="SEE HOW A JOIN RETURNS RELATED RECORDS"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 4"
          pageTag="PAGE 3 OF 3"
        />

        {/* Business Question Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 space-y-1.5">
          <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1E1B4B] m-0">
            {isHi
              ? 'Business question: Kis customer ne kaun sa order place kiya?'
              : 'Business question: Which customer placed each order?'}
          </h3>
          <p className="text-[13px] text-[#334155] leading-relaxed m-0">
            {isHi ? (
              <>
                Customer names <strong>Customers</strong> table mein hain, aur order amounts <strong>Orders</strong> table mein. SQL dono tables ko unki matching <strong>customer_id</strong> values se connect kar sakta hai.
              </>
            ) : (
              <>
                The customer names are stored in <strong>Customers</strong>, while order amounts are in <strong>Orders</strong>. SQL can connect both tables using their matching <strong>customer_id</strong> values.
              </>
            )}
          </p>
        </div>

        {/* Step 1: Look at the source tables */}
        <div className="space-y-3">
          <SectionPill label="Step 1: Look at the source tables" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="overflow-x-auto rounded-xl border border-[#C4B5FD]">
                <table className="w-full text-left border-collapse text-[12.5px]">
                  <thead>
                    <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                      <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">customer_id</th>
                      <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">name</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#334155]">
                    <tr className="border-b border-[#EDE9FE]">
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">101</td>
                      <td className="py-2 px-3">Asha</td>
                    </tr>
                    <tr className="border-b border-[#EDE9FE]">
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">102</td>
                      <td className="py-2 px-3">Rahul</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">103</td>
                      <td className="py-2 px-3">Neha</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#C4B5FD]">
                <table className="w-full text-left border-collapse text-[12.5px]">
                  <thead>
                    <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                      <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">order_id</th>
                      <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">customer_id</th>
                      <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#334155]">
                    <tr className="border-b border-[#EDE9FE]">
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">501</td>
                      <td className="py-2 px-3">101</td>
                      <td className="py-2 px-3">1200</td>
                    </tr>
                    <tr className="border-b border-[#EDE9FE]">
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">502</td>
                      <td className="py-2 px-3">101</td>
                      <td className="py-2 px-3">450</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">503</td>
                      <td className="py-2 px-3">102</td>
                      <td className="py-2 px-3">900</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi ? (
                <>
                  Customer <strong>103 (Neha)</strong> ka sample data mein koi matching order nahi hai.
                </>
              ) : (
                <>
                  Customer <strong>103 (Neha)</strong> has no matching order in the sample data.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Step 2: Write an INNER JOIN query */}
        <div className="space-y-3">
          <SectionPill label="Step 2: Write an INNER JOIN query" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <pre className="rounded-2xl bg-[#1E1B3A] text-[#F8FAFC] p-4 text-[12.5px] leading-relaxed font-mono overflow-x-auto m-0 shadow-xs">
              <code>
                <span className="text-[#C4B5FD] font-bold">SELECT</span> c.name, o.order_id,{'\n'}
                {'       '}o.amount{'\n'}
                <span className="text-[#C4B5FD] font-bold">FROM</span> customers <span className="text-[#C4B5FD] font-bold">AS</span> c{'\n'}
                <span className="text-[#C4B5FD] font-bold">INNER JOIN</span> orders <span className="text-[#C4B5FD] font-bold">AS</span> o{'\n'}
                {'  '}<span className="text-[#C4B5FD] font-bold">ON</span> c.customer_id ={'\n'}
                {'     '}o.customer_id;
              </code>
            </pre>

            <div className="space-y-2.5 text-[12.5px] text-[#334155] leading-snug">
              <p className="m-0">
                <strong className="text-[#1E1B4B]">SELECT</strong>{' '}
                {isHi
                  ? 'batata hai ki name, order ID aur amount show karna hai.'
                  : 'chooses the name, order ID and amount to show.'}
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">FROM customers AS c</strong>{' '}
                {isHi
                  ? 'Customers table se start karta hai. c ek short alias hai.'
                  : 'starts with the Customers table. c is a short alias.'}
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">INNER JOIN orders AS o</strong>{' '}
                {isHi
                  ? 'Orders table se matching rows le kar aata hai.'
                  : 'brings in matching rows from Orders.'}
              </p>
              <p className="m-0">
                <strong className="text-[#1E1B4B]">ON</strong>{' '}
                {isHi ? (
                  <>
                    SQL ko dono tables ki <strong>customer_id</strong> values match karne ke liye bolta hai.
                  </>
                ) : (
                  <>
                    tells SQL to match the <strong>customer_id</strong> values in both tables.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Read the joined result */}
        <div className="space-y-3">
          <SectionPill label="Step 3: Read the joined result" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <div className="max-w-lg mx-auto overflow-x-auto rounded-xl border border-[#C4B5FD]">
              <table className="w-full text-left border-collapse text-[12.5px]">
                <thead>
                  <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                    <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">name</th>
                    <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">order_id</th>
                    <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">amount</th>
                  </tr>
                </thead>
                <tbody className="text-[#334155]">
                  <tr className="bg-[#DCFCE7]/60 border-b border-[#EDE9FE]">
                    <td className="py-2 px-3 font-bold text-[#6D28D9]">Asha</td>
                    <td className="py-2 px-3">501</td>
                    <td className="py-2 px-3">1200</td>
                  </tr>
                  <tr className="bg-[#DCFCE7]/60 border-b border-[#EDE9FE]">
                    <td className="py-2 px-3 font-bold text-[#6D28D9]">Asha</td>
                    <td className="py-2 px-3">502</td>
                    <td className="py-2 px-3">450</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-3 font-bold text-[#6D28D9]">Rahul</td>
                    <td className="py-2 px-3">503</td>
                    <td className="py-2 px-3">900</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi ? (
                <>
                  Asha do baar aati hai kyunki uske do orders hain. <strong>Neha show nahi hui</strong> kyunki INNER JOIN sirf matching rows rakhta hai.
                </>
              ) : (
                <>
                  Asha appears twice because she has two orders. <strong>Neha is not shown</strong> because INNER JOIN keeps only matching rows.
                </>
              )}
            </p>
          </div>
        </div>

        {/* What if we want every customer? */}
        <div className="space-y-2.5">
          <SectionPill label="What if we want every customer?" />
          <div className="rounded-2xl bg-[#DCFCE7]/65 border-2 border-[#86EFAC] p-4 text-[13px] text-[#1E1B4B] leading-relaxed">
            {isHi ? (
              <>
                Customers se Orders par <strong>LEFT JOIN</strong> use karo. Ye Neha ko bhi rakhta hai, aur uske missing order details ke liye <strong>NULL</strong> dikhata hai. Analysts customer orders, product sales aur connected business data study karne ke liye joins use karte hain.
              </>
            ) : (
              <>
                Use a <strong>LEFT JOIN</strong> from Customers to Orders. It keeps Neha too, with <strong>NULL</strong> for her missing order details. Analysts use joins to study customer orders, product sales and other connected business data.
              </>
            )}
          </div>
        </div>

        <div className="pt-2 border-t border-[#EDE9FE] flex items-center justify-between text-[10.5px] font-semibold text-slate-400 tracking-wider uppercase">
          <span>VISUAL LEARNING NOTES | READ + SEE + UNDERSTAND</span>
          <span>3 / 3</span>
        </div>
      </section>
    </div>
  );
};
