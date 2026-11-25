import React from 'react';
import { Table2 } from 'lucide-react';
import { NoteRibbonBanner, SectionPill, SqlEditorBox, NotePageFooter } from './SqlVisualNotesPrimitives';

/**
 * Exact 3-Page Illustrated Visual Learning Notes Sheet for
 * M17 Topic 6: SELECT and Choosing Columns
 */
export const M17Topic6VisualNotesSheet: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const isHi = lang === 'hi';

  const anatomyParts = [
    {
      token: 'SELECT',
      bg: 'bg-[#E0F2FE] border-[#93C5FD]',
      descEn: 'Starts the query and introduces the columns to return.',
      descHi: 'Query start karta hai aur batata hai kaun se columns return karne hain.',
    },
    {
      token: 'customer_id, name',
      bg: 'bg-[#FCE7F3] border-[#F9A8D4]',
      descEn: 'Two column names. The comma separates them.',
      descHi: 'Do column names. Comma unhe separate karta hai.',
    },
    {
      token: 'FROM',
      bg: 'bg-[#FEF3C7] border-[#FCD34D]',
      descEn: 'Introduces the table where the data comes from.',
      descHi: 'Batata hai data kis table se aayega.',
    },
    {
      token: 'customers',
      bg: 'bg-[#DCFCE7] border-[#86EFAC]',
      descEn: 'The name of the table that SQL will read.',
      descHi: 'Us table ka naam jise SQL read karega.',
    },
    {
      token: ';',
      bg: 'bg-[#F3E8FF] border-[#C4B5FD]',
      descEn: 'Ends the SQL statement. It is useful when writing multiple statements.',
      descHi: 'SQL statement ko end karta hai. Multiple statements likhte waqt useful hota hai.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 1 OF 3 — ASK THE DATABASE FOR EXACTLY THE FIELDS YOU NEED
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="SELECT and Choosing Columns"
          subtitle="ASK THE DATABASE FOR EXACTLY THE FIELDS YOU NEED"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 6"
          pageTag="PAGE 1 OF 3"
        />

        {/* Intro Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border-2 border-[#38BDF8]/60 flex items-center justify-center shrink-0">
            <Table2 className="w-8 h-8 text-[#0284C7]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1E1B4B] m-0">
              {isHi
                ? 'SELECT SQL ko batata hai ki kaun se columns show karne hain.'
                : 'SELECT tells SQL which columns to show.'}
            </h3>
            <p className="text-[13px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  Ek database table mein kai columns ho sakte hain. Data Analyst ko aksar kuch hi columns chahiye hote hain. <strong>SELECT</strong> statement aapko fields choose karne deta hai, jabki <strong>FROM</strong> batata hai kis table ko read karna hai.
                </>
              ) : (
                <>
                  A database table may contain many columns. A Data Analyst often needs only a few. The <strong>SELECT</strong> statement lets you choose the fields you want to see, while <strong>FROM</strong> tells SQL which table to read.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Meet the Customers table */}
        <div className="space-y-3">
          <SectionPill label="Meet the Customers table" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <p className="text-[13px] text-[#334155] m-0">
              {isHi
                ? 'Hamari shop har customer ke liye ek row aur customer details ke liye kai columns rakhti hai.'
                : 'Our shop keeps one row for each customer and several columns for customer details.'}
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#C4B5FD]">
              <table className="w-full text-left border-collapse text-[12.5px]">
                <thead>
                  <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                    <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">customer_id</th>
                    <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">name</th>
                    <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">city</th>
                    <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">age</th>
                  </tr>
                </thead>
                <tbody className="text-[#334155]">
                  <tr className="border-b border-[#EDE9FE]">
                    <td className="py-2 px-3 font-bold text-[#6D28D9]">101</td>
                    <td className="py-2 px-3">Asha</td>
                    <td className="py-2 px-3">Patna</td>
                    <td className="py-2 px-3">29</td>
                  </tr>
                  <tr className="border-b border-[#EDE9FE]">
                    <td className="py-2 px-3 font-bold text-[#6D28D9]">102</td>
                    <td className="py-2 px-3">Ravi</td>
                    <td className="py-2 px-3">Delhi</td>
                    <td className="py-2 px-3">34</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-[#6D28D9]">103</td>
                    <td className="py-2 px-3">Neha</td>
                    <td className="py-2 px-3">Patna</td>
                    <td className="py-2 px-3">25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi
                ? 'Har column ek tarah ki information store karta hai. Aapko har report mein chaaro columns ki zaroorat nahi hoti.'
                : 'Each column stores one kind of information. You do not always need all four columns in your report.'}
            </p>
          </div>
        </div>

        {/* Choose two columns with SELECT */}
        <div className="space-y-3">
          <SectionPill label="Choose two columns with SELECT" />
          <SqlEditorBox>
            <span className="text-[#C4B5FD] font-bold">SELECT</span> name, city{'\n'}
            <span className="text-[#C4B5FD] font-bold">FROM</span> customers;
          </SqlEditorBox>

          <div className="rounded-2xl bg-[#DCFCE7]/70 border-2 border-[#86EFAC] p-4 space-y-2.5">
            <div className="text-[12px] font-extrabold uppercase tracking-wider text-[#166534]">
              RESULT: ONLY TWO COLUMNS
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
        </div>

        {/* What happened to the other columns? */}
        <div className="space-y-2.5">
          <SectionPill label="What happened to the other columns?" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD] p-4 space-y-2.5 text-[12.5px] text-[#334155]">
            <p className="m-0 leading-relaxed">
              {isHi ? (
                <>
                  SQL <strong>customers</strong> table read karta hai aur sirf <strong>name</strong> aur <strong>city</strong> return karta hai. Original table mein abhi bhi customer_id aur age maujood hain. SELECT query columns delete nahi karti aur na hi stored data change karti hai.
                </>
              ) : (
                <>
                  SQL reads the <strong>customers</strong> table and returns only <strong>name</strong> and <strong>city</strong>. The original table still contains customer_id and age. A SELECT query does <strong>not</strong> delete columns or change stored data.
                </>
              )}
            </p>
            <p className="m-0 font-bold text-[#6D28D9]">
              {isHi
                ? 'SELECT ko display choose karne ke liye samjho, database edit karne ke liye nahi.'
                : 'Think of SELECT as choosing what to display, not editing the database.'}
            </p>
          </div>
        </div>

        <NotePageFooter page="1 / 3" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 2 OF 3 — READ EACH PART OF A SQL QUERY
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="SELECT and Choosing Columns"
          subtitle="READ EACH PART OF A SQL QUERY"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 6"
          pageTag="PAGE 2 OF 3"
        />

        {/* Understand every word and symbol */}
        <div className="space-y-3">
          <SectionPill label="Understand every word and symbol" />
          <SqlEditorBox>
            <span className="text-[#C4B5FD] font-bold">SELECT</span> customer_id, name{'\n'}
            <span className="text-[#C4B5FD] font-bold">FROM</span> customers;
          </SqlEditorBox>

          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-2.5">
            {anatomyParts.map((part) => (
              <div key={part.token} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div
                  className={`sm:w-52 px-4 py-2 rounded-xl border ${part.bg} text-center font-mono text-[13px] font-bold text-[#1E1B4B] shrink-0`}
                >
                  {part.token}
                </div>
                <div className="text-[12.5px] text-[#334155] leading-snug">
                  {isHi ? part.descHi : part.descEn}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Change the column order */}
        <div className="space-y-3">
          <SectionPill label="Change the column order" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <SqlEditorBox>
              <span className="text-[#C4B5FD] font-bold">SELECT</span> city, name{'\n'}
              <span className="text-[#C4B5FD] font-bold">FROM</span> customers;
            </SqlEditorBox>
            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi ? (
                <>
                  Ab output mein <strong>city</strong> pehle aur <strong>name</strong> baad mein dikhega. SELECT displayed columns ka order control karta hai.
                </>
              ) : (
                <>
                  The output now shows <strong>city first</strong> and <strong>name second</strong>. SELECT controls the order of the displayed columns.
                </>
              )}
            </p>
          </div>
        </div>

        {/* One column or many columns? */}
        <div className="space-y-3">
          <SectionPill label="One column or many columns?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-4 space-y-2">
              <div className="text-[12.5px] font-extrabold uppercase tracking-wide text-[#1E1B4B]">ONE COLUMN</div>
              <div className="font-mono text-[12.5px] text-[#1E1B4B]">
                <strong>SELECT name</strong>
                <br />
                FROM customers;
              </div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi ? 'Sirf customer names return karta hai.' : 'Returns only customer names.'}
              </p>
            </div>

            <div className="rounded-2xl bg-[#FCE7F3]/80 border border-[#F9A8D4] p-4 space-y-2">
              <div className="text-[12.5px] font-extrabold uppercase tracking-wide text-[#1E1B4B]">MULTIPLE COLUMNS</div>
              <div className="font-mono text-[12.5px] text-[#1E1B4B]">
                <strong>SELECT name, city, age</strong>
                <br />
                FROM customers;
              </div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi ? 'Teen selected fields return karta hai.' : 'Returns three selected fields.'}
              </p>
            </div>
          </div>
        </div>

        <NotePageFooter page="2 / 3" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 3 OF 3 — SELECT * AND COMMON BEGINNER MISTAKES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="SELECT and Choosing Columns"
          subtitle="SELECT * AND COMMON BEGINNER MISTAKES"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 6"
          pageTag="PAGE 3 OF 3"
        />

        {/* What does the star (*) mean? */}
        <div className="space-y-3">
          <SectionPill label="What does the star (*) mean?" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <SqlEditorBox>
              <span className="text-[#C4B5FD] font-bold">SELECT</span> *{'\n'}
              <span className="text-[#C4B5FD] font-bold">FROM</span> customers;
            </SqlEditorBox>
            <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  <strong>* ka matlab hai saare columns.</strong> Ye query example table se customer_id, name, city aur age sab return karti hai. Chhote table explore karne ke liye useful hai, par reports tab zyada clear aur efficient hoti hain jab aap sirf zaroori columns list karein.
                </>
              ) : (
                <>
                  <strong>* means all columns.</strong> The query returns customer_id, name, city and age from the example table. It is useful when exploring a small table, but reports are often clearer and more efficient when you list only the columns you need.
                </>
              )}
            </p>
          </div>
        </div>

        {/* See the difference visually */}
        <div className="space-y-3">
          <SectionPill label="See the difference visually" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="w-full sm:flex-1 rounded-2xl bg-[#FCE7F3]/75 border border-[#F9A8D4] p-4 text-center space-y-1">
                <div className="text-[14px] font-extrabold text-[#1E1B4B]">SELECT *</div>
                <div className="text-[12.5px] text-[#334155]">customer_id | name | city | age</div>
              </div>

              <span className="text-[#7C3AED] font-extrabold text-xl select-none rotate-90 sm:rotate-0">→</span>

              <div className="w-full sm:flex-1 rounded-2xl bg-[#DCFCE7]/80 border border-[#86EFAC] p-4 text-center space-y-1">
                <div className="text-[14px] font-extrabold text-[#1E1B4B]">SELECT name, city</div>
                <div className="text-[12.5px] text-[#334155]">name | city</div>
              </div>
            </div>
            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi
                ? 'Kam columns choose karne se result aapke business question par focused rehta hai.'
                : 'Choosing fewer columns keeps the result focused on your business question.'}
            </p>
          </div>
        </div>

        {/* Fix three common mistakes */}
        <div className="space-y-3">
          <SectionPill label="Fix three common mistakes" />
          <div className="space-y-2.5 text-[12.5px]">
            <div className="rounded-2xl bg-[#FCE7F3]/75 border border-[#F9A8D4] p-4 space-y-1">
              <div className="font-mono font-semibold text-[#1E1B4B]">WRONG: SELECT name, FROM customers;</div>
              <div className="font-mono font-bold text-[#6D28D9]">BETTER: SELECT name, city FROM customers;</div>
              <p className="text-[#334155] m-0">
                {isHi ? 'Agle column name ke bina comma mat chhodo.' : 'Do not leave a comma without another column name.'}
              </p>
            </div>

            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-4 space-y-1">
              <div className="font-mono font-semibold text-[#1E1B4B]">WRONG: SELECT name FROM customer;</div>
              <div className="font-mono font-bold text-[#6D28D9]">BETTER: SELECT name FROM customers;</div>
              <p className="text-[#334155] m-0">
                {isHi ? 'Exact table name use karo jo database mein exist karta hai.' : 'Use the exact table name that exists.'}
              </p>
            </div>

            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-4 space-y-1">
              <div className="font-mono font-semibold text-[#1E1B4B]">WRONG: SELECT city FORM customers;</div>
              <div className="font-mono font-bold text-[#6D28D9]">BETTER: SELECT city FROM customers;</div>
              <p className="text-[#334155] m-0">
                {isHi ? 'Keyword FROM hona chahiye, FORM nahi.' : 'The keyword must be FROM, not FORM.'}
              </p>
            </div>
          </div>
        </div>

        {/* Next lesson callout */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD] p-4 text-[12.5px] text-[#334155] leading-relaxed">
          {isHi ? (
            <>
              <strong className="text-[#1E1B4B]">Next lesson:</strong> SELECT columns choose karta hai; DISTINCT aapko repeated values hatane mein madad karega. <strong>Row order guaranteed nahi hota</strong> jab tak query mein ORDER BY use na ho.
            </>
          ) : (
            <>
              <strong className="text-[#1E1B4B]">Next lesson:</strong> SELECT chooses columns; DISTINCT will help you remove repeated values from the displayed result. <strong>Row order is not guaranteed</strong> unless a query uses ORDER BY.
            </>
          )}
        </div>

        <NotePageFooter page="3 / 3" />
      </section>
    </div>
  );
};
