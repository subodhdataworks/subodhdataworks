import React from 'react';
import { Table2 } from 'lucide-react';
import { NoteRibbonBanner, SectionPill, SqlEditorBox, NotePageFooter } from './SqlVisualNotesPrimitives';

/**
 * Exact 2-Page Illustrated Visual Learning Notes Sheet for
 * M17 Topic 8: Aliases with AS
 */
export const M17Topic8VisualNotesSheet: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const isHi = lang === 'hi';

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 1 OF 2 — GIVE QUERY RESULTS CLEAR, READABLE NAMES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Aliases with AS"
          subtitle="GIVE QUERY RESULTS CLEAR, READABLE NAMES"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 8"
          pageTag="PAGE 1 OF 2"
        />

        {/* Intro Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border-2 border-[#38BDF8]/60 flex items-center justify-center shrink-0">
            <Table2 className="w-8 h-8 text-[#0284C7]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1E1B4B] m-0">
              {isHi
                ? 'Alias SQL query mein use hone wala ek temporary name hai.'
                : 'An alias is a temporary name used in a SQL query.'}
            </h3>
            <p className="text-[13px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  Database columns ke aksar short technical names hote hain jaise <strong>customer_id</strong>. Report mein <strong>Customer ID</strong> jaisa clear label padhna aasan hota hai. Keyword <strong>AS</strong> query mein column ya table ko temporary name deta hai.
                </>
              ) : (
                <>
                  Database columns often have short technical names such as <strong>customer_id</strong>. In a report, a clearer label such as <strong>Customer ID</strong> is easier to read. The keyword <strong>AS</strong> gives a column or table a temporary name in the query.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Rename columns in the result */}
        <div className="space-y-3">
          <SectionPill label="Rename columns in the result" />
          <SqlEditorBox>
            <span className="text-[#C4B5FD] font-bold">SELECT</span> name <span className="text-[#C4B5FD] font-bold">AS</span> customer_name,{'\n'}
            city <span className="text-[#C4B5FD] font-bold">AS</span> customer_city{'\n'}
            <span className="text-[#C4B5FD] font-bold">FROM</span> customers;
          </SqlEditorBox>

          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:flex-1 rounded-2xl bg-[#FCE7F3]/65 border border-[#F9A8D4] p-3.5 space-y-2.5">
                <div className="text-center text-[11.5px] font-extrabold uppercase tracking-wider text-[#831843]">
                  ORIGINAL COLUMN NAMES
                </div>
                <div className="overflow-x-auto rounded-xl border border-[#C4B5FD] bg-white">
                  <table className="w-full text-left border-collapse text-[12.5px]">
                    <thead>
                      <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">name</th>
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">city</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#334155]">
                      <tr className="border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Asha</td>
                        <td className="py-2 px-3">Patna</td>
                      </tr>
                      <tr className="border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Ravi</td>
                        <td className="py-2 px-3">Delhi</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Neha</td>
                        <td className="py-2 px-3">Patna</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <span className="text-[#7C3AED] font-extrabold text-xl select-none rotate-90 md:rotate-0">→</span>

              <div className="w-full md:flex-1 rounded-2xl bg-[#DCFCE7]/70 border border-[#86EFAC] p-3.5 space-y-2.5">
                <div className="text-center text-[11.5px] font-extrabold uppercase tracking-wider text-[#166534]">
                  RENAMED RESULT COLUMNS
                </div>
                <div className="overflow-x-auto rounded-xl border border-[#C4B5FD] bg-white">
                  <table className="w-full text-left border-collapse text-[12.5px]">
                    <thead>
                      <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">customer_name</th>
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">customer_city</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#334155]">
                      <tr className="border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Asha</td>
                        <td className="py-2 px-3">Patna</td>
                      </tr>
                      <tr className="border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Ravi</td>
                        <td className="py-2 px-3">Delhi</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Neha</td>
                        <td className="py-2 px-3">Patna</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What does AS really do? */}
        <div className="space-y-3">
          <SectionPill label="What does AS really do?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-4 space-y-1">
              <div className="text-[13.5px] font-extrabold text-[#1E1B4B]">name</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi ? 'Database mein stored original column.' : 'Original column stored in the database.'}
              </p>
            </div>
            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-4 space-y-1">
              <div className="text-[13.5px] font-extrabold text-[#1E1B4B]">AS</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi ? 'Temporary display name introduce karta hai.' : 'Introduces the temporary display name.'}
              </p>
            </div>
            <div className="rounded-2xl bg-[#DCFCE7]/80 border border-[#86EFAC] p-4 space-y-1">
              <div className="text-[13.5px] font-extrabold text-[#1E1B4B]">customer_name</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi ? 'Result mein dikhne wali column heading.' : 'Column heading shown in the result.'}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F5F0FF] border border-[#C4B5FD] p-4 text-[12.5px] text-[#334155] leading-relaxed">
            {isHi ? (
              <>
                <strong className="text-[#1E1B4B]">Important:</strong> Alias sirf is query result ka naam badalta hai. Ye real database column ko rename <strong>nahi</strong> karta aur na hi koi stored record edit karta hai.
              </>
            ) : (
              <>
                <strong className="text-[#1E1B4B]">Important:</strong> An alias changes the name used in this query result. It does <strong>not</strong> rename the real database column or edit any stored records.
              </>
            )}
          </div>
        </div>

        {/* Remember the pattern */}
        <div className="space-y-2.5">
          <SectionPill label="Remember the pattern" />
          <div className="rounded-2xl bg-[#F5F0FF] border-2 border-[#C4B5FD] px-4 py-3 text-center font-mono text-[13px] font-bold text-[#6D28D9]">
            SELECT original_column AS readable_name FROM table_name;
          </div>
        </div>

        <NotePageFooter page="1 / 2" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 2 OF 2 — REPORT LABELS, CALCULATIONS, AND TABLE ALIASES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Aliases with AS"
          subtitle="REPORT LABELS, CALCULATIONS, AND TABLE ALIASES"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 8"
          pageTag="PAGE 2 OF 2"
        />

        {/* Use friendly headings in reports */}
        <div className="space-y-3">
          <SectionPill label="Use friendly headings in reports" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <SqlEditorBox>
              <span className="text-[#C4B5FD] font-bold">SELECT</span> name <span className="text-[#C4B5FD] font-bold">AS</span> &quot;Customer Name&quot;,{'\n'}
              city <span className="text-[#C4B5FD] font-bold">AS</span> &quot;Home City&quot;{'\n'}
              <span className="text-[#C4B5FD] font-bold">FROM</span> customers;
            </SqlEditorBox>
            <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  PostgreSQL mein <strong>double quotes</strong> alias mein spaces allow karte hain aur capitalization preserve rakhte hain. Single quotes text values ke liye hote hain, alias naming ke liye nahi.
                </>
              ) : (
                <>
                  In PostgreSQL, <strong>double quotes</strong> let an alias contain spaces and preserve capitalization. Single quotes are for text values, not for naming an alias.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Name a calculated result */}
        <div className="space-y-3">
          <SectionPill label="Name a calculated result" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <SqlEditorBox>
              <span className="text-[#C4B5FD] font-bold">SELECT</span> quantity * unit_price <span className="text-[#C4B5FD] font-bold">AS</span> total_price{'\n'}
              <span className="text-[#C4B5FD] font-bold">FROM</span> order_items;
            </SqlEditorBox>
            <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  Multiplication har row ke liye value calculate karta hai. <strong>AS total_price</strong> us calculated column ko useful heading deta hai. Original table mein total_price column hona zaroori nahi.
                </>
              ) : (
                <>
                  The multiplication calculates a value for each row. <strong>AS total_price</strong> gives that calculated column a useful heading. The original table does not need a total_price column.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Use short names for tables */}
        <div className="space-y-3">
          <SectionPill label="Use short names for tables" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <SqlEditorBox>
              <span className="text-[#C4B5FD] font-bold">SELECT</span> c.name, c.city{'\n'}
              <span className="text-[#C4B5FD] font-bold">FROM</span> customers <span className="text-[#C4B5FD] font-bold">AS</span> c;
            </SqlEditorBox>
            <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  <strong>c</strong> customers table ka short alias hai. <strong>c.name</strong> ka matlab us table ka name column hai. Ye tab bahut useful hota hai jab query kai related tables use kare.
                </>
              ) : (
                <>
                  <strong>c</strong> is a short alias for the <strong>customers</strong> table. <strong>c.name</strong> means the name column from that table. This becomes especially useful when a query uses several related tables.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Rules that prevent confusion */}
        <div className="space-y-2.5">
          <SectionPill label="Rules that prevent confusion" />
          <div className="rounded-2xl bg-[#DCFCE7]/65 border-2 border-[#86EFAC] p-4 space-y-2 text-[12.5px] text-[#1E1B4B] leading-relaxed">
            <p className="m-0">
              <strong>Use clear names:</strong>{' '}
              {isHi ? 'total_sales, x se behtar hai.' : 'total_sales is better than x.'}
            </p>
            <p className="m-0">
              <strong>AS is optional</strong>{' '}
              {isHi
                ? 'PostgreSQL mein kai column aur table aliases ke liye, par likhne se readability badhti hai.'
                : 'for many column and table aliases in PostgreSQL, but writing it often improves readability.'}
            </p>
            <p className="m-0">
              <strong>Do not expect a SELECT alias to work in WHERE</strong>{' '}
              {isHi
                ? 'PostgreSQL ke same query level par; WHERE, SELECT output aliases banne se pehle evaluate hota hai.'
                : 'at the same query level in PostgreSQL; WHERE is evaluated before the SELECT output aliases are available.'}
            </p>
          </div>
        </div>

        <NotePageFooter page="2 / 2" />
      </section>
    </div>
  );
};
