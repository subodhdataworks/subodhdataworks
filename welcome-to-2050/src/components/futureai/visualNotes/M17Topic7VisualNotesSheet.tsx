import React from 'react';
import { Table2 } from 'lucide-react';
import { NoteRibbonBanner, SectionPill, SqlEditorBox, NotePageFooter } from './SqlVisualNotesPrimitives';

/**
 * Exact 2-Page Illustrated Visual Learning Notes Sheet for
 * M17 Topic 7: DISTINCT and Unique Values
 */
export const M17Topic7VisualNotesSheet: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const isHi = lang === 'hi';

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 1 OF 2 — SHOW EACH DIFFERENT VALUE ONLY ONCE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="DISTINCT and Unique Values"
          subtitle="SHOW EACH DIFFERENT VALUE ONLY ONCE"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 7"
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
                ? 'DISTINCT query result se repeated rows hata deta hai.'
                : 'DISTINCT removes repeated rows from a query result.'}
            </h3>
            <p className="text-[13px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  Maan lo ek shop mein same city ke kai customers hain. Aap jaanna chahte hain ki <strong>kaun-kaun si cities</strong> aati hain, baar-baar same city nahi dekhna chahte. <strong>SELECT DISTINCT</strong> har different value ko sirf ek baar return karta hai.
                </>
              ) : (
                <>
                  Suppose a shop has many customers from the same city. You want to know <strong>which cities appear</strong>, not see the same city again and again. <strong>SELECT DISTINCT</strong> returns each different value once.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Without DISTINCT */}
        <div className="space-y-3">
          <SectionPill label="Without DISTINCT: repeated city names" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:flex-1 rounded-2xl bg-[#E0F2FE]/65 border border-[#93C5FD] p-3.5 space-y-2.5">
                <div className="text-center text-[11.5px] font-extrabold uppercase tracking-wider text-[#1E3A8A]">
                  CUSTOMERS TABLE
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
                      <tr className="border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Neha</td>
                        <td className="py-2 px-3">Patna</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Imran</td>
                        <td className="py-2 px-3">Mumbai</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <span className="text-[#7C3AED] font-extrabold text-xl select-none rotate-90 md:rotate-0">→</span>

              <div className="w-full md:flex-1 rounded-2xl bg-[#FCE7F3]/65 border border-[#F9A8D4] p-3.5 space-y-2.5">
                <div className="text-center text-[11.5px] font-extrabold uppercase tracking-wider text-[#831843]">
                  SELECT city
                </div>
                <div className="overflow-x-auto rounded-xl border border-[#C4B5FD] bg-white">
                  <table className="w-full text-left border-collapse text-[12.5px]">
                    <thead>
                      <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">city</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#334155]">
                      <tr className="bg-[#DCFCE7]/65 border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Patna</td>
                      </tr>
                      <tr className="border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Delhi</td>
                      </tr>
                      <tr className="bg-[#DCFCE7]/65 border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Patna</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Mumbai</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* With DISTINCT */}
        <div className="space-y-3">
          <SectionPill label="With DISTINCT: one row for each city" />
          <SqlEditorBox>
            <span className="text-[#C4B5FD] font-bold">SELECT DISTINCT</span> city{'\n'}
            <span className="text-[#C4B5FD] font-bold">FROM</span> customers;
          </SqlEditorBox>

          <div className="rounded-2xl bg-[#DCFCE7]/70 border-2 border-[#86EFAC] p-4 space-y-3">
            <div className="text-[12px] font-extrabold uppercase tracking-wider text-[#166534]">
              RESULT: UNIQUE CITY VALUES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-stretch">
              <div className="overflow-x-auto rounded-xl border border-[#C4B5FD] bg-white">
                <table className="w-full text-left border-collapse text-[12.5px]">
                  <thead>
                    <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                      <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">city</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#334155]">
                    <tr className="border-b border-[#EDE9FE]">
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">Patna</td>
                    </tr>
                    <tr className="border-b border-[#EDE9FE]">
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">Delhi</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">Mumbai</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl bg-[#FAF7FF] border border-[#C4B5FD] p-3.5 space-y-1.5 flex flex-col justify-center">
                <div className="text-[13px] font-bold text-[#1E1B4B]">What changed?</div>
                <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
                  {isHi ? (
                    <>
                      Patna original table mein <strong>do baar</strong> aaya tha par is result mein <strong>ek baar</strong> dikhta hai. Koi bhi customer record delete nahi hua.
                    </>
                  ) : (
                    <>
                      Patna appeared <strong>twice</strong> in the original table but appears <strong>once</strong> in this result. No customer record was deleted.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="text-[12.5px] font-bold text-[#6D28D9]">
              {isHi
                ? 'Key idea: DISTINCT returned result badalta hai, stored table ko nahi.'
                : 'Key idea: DISTINCT changes the returned result, not the stored table.'}
            </div>
          </div>
        </div>

        {/* Analyst use */}
        <div className="rounded-2xl bg-[#F5F0FF] border-2 border-[#C4B5FD] px-4 py-3 text-[12.5px] text-[#1E1B4B]">
          {isHi ? (
            <>
              <strong>Analyst use:</strong> Apne data mein maujood different cities, product categories, departments ya payment methods dhoondhne ke liye.
            </>
          ) : (
            <>
              <strong>Analyst use:</strong> Find the different cities, product categories, departments or payment methods present in your data.
            </>
          )}
        </div>

        <NotePageFooter page="1 / 2" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 2 OF 2 — UNIQUE COMBINATIONS, NULL, AND COUNTS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="DISTINCT and Unique Values"
          subtitle="UNIQUE COMBINATIONS, NULL, AND COUNTS"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 7"
          pageTag="PAGE 2 OF 2"
        />

        {/* DISTINCT with more than one column */}
        <div className="space-y-3">
          <SectionPill label="DISTINCT with more than one column" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3.5">
            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi ? (
                <>
                  Jab aap do columns select karte hain, to DISTINCT <strong>poore combination</strong> ko check karta hai — har column ko alag-alag nahi.
                </>
              ) : (
                <>
                  When you select two columns, DISTINCT checks the <strong>whole combination</strong> of values - not each column separately.
                </>
              )}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:flex-1 overflow-x-auto rounded-xl border border-[#C4B5FD]">
                <table className="w-full text-left border-collapse text-[12.5px]">
                  <thead>
                    <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                      <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">city</th>
                      <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">status</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#334155]">
                    <tr className="bg-[#DCFCE7]/65 border-b border-[#EDE9FE]">
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">Patna</td>
                      <td className="py-2 px-3">Active</td>
                    </tr>
                    <tr className="bg-[#DCFCE7]/65 border-b border-[#EDE9FE]">
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">Patna</td>
                      <td className="py-2 px-3">Active</td>
                    </tr>
                    <tr className="border-b border-[#EDE9FE]">
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">Patna</td>
                      <td className="py-2 px-3">Inactive</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-[#6D28D9]">Delhi</td>
                      <td className="py-2 px-3">Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <span className="text-[#7C3AED] font-extrabold text-xl select-none rotate-90 md:rotate-0">→</span>

              <div className="w-full md:flex-1 rounded-2xl bg-[#FAF7FF] border border-[#C4B5FD] p-3 space-y-2">
                <div className="text-center text-[11.5px] font-extrabold text-[#1E1B4B]">
                  SELECT DISTINCT city, status
                </div>
                <div className="overflow-x-auto rounded-xl border border-[#C4B5FD] bg-white">
                  <table className="w-full text-left border-collapse text-[12.5px]">
                    <thead>
                      <tr className="bg-[#F3E8FF] text-[#1E1B4B]">
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">city</th>
                        <th className="py-2 px-3 font-bold border-b border-[#DDD6FE]">status</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#334155]">
                      <tr className="border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Patna</td>
                        <td className="py-2 px-3">Active</td>
                      </tr>
                      <tr className="border-b border-[#EDE9FE]">
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Patna</td>
                        <td className="py-2 px-3">Inactive</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-[#6D28D9]">Delhi</td>
                        <td className="py-2 px-3">Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi ? (
                <>
                  Patna + Active ek baar aata hai. Patna + Inactive bana rehta hai kyunki wo ek <strong>alag pair</strong> hai.
                </>
              ) : (
                <>
                  Patna + Active appears once. Patna + Inactive stays because it is a <strong>different pair</strong>.
                </>
              )}
            </p>
          </div>
        </div>

        {/* What about missing values (NULL)? */}
        <div className="space-y-2.5">
          <SectionPill label="What about missing values (NULL)?" />
          <div className="rounded-2xl bg-[#FEF3C7]/85 border-2 border-[#FCD34D] p-4 space-y-2 text-[12.5px] text-[#334155]">
            <p className="font-bold text-[#1E1B4B] m-0">
              {isHi
                ? 'Socho city column mein values hain: Patna, Delhi, Patna, NULL, NULL.'
                : 'Imagine the city column contains: Patna, Delhi, Patna, NULL, NULL.'}
            </p>
            <p className="m-0 leading-relaxed">
              {isHi ? (
                <>
                  <strong>SELECT DISTINCT city</strong> PostgreSQL mein Patna, Delhi aur <strong>ek NULL</strong> entry return karta hai. NULL ka matlab missing ya unknown value hota hai, koi city name nahi.
                </>
              ) : (
                <>
                  <strong>SELECT DISTINCT city</strong> returns Patna, Delhi and <strong>one NULL</strong> entry in PostgreSQL. NULL means a missing or unknown value, not a city name.
                </>
              )}
            </p>
            <p className="font-bold text-[#6D28D9] m-0">
              {isHi
                ? 'Important: COUNT(DISTINCT city) sirf different non-NULL cities count karta hai. Is example mein count 2 hoga.'
                : 'Important: COUNT(DISTINCT city) counts different non-NULL cities. In this example, the count is 2.'}
            </p>
          </div>
        </div>

        {/* When should analysts use DISTINCT? */}
        <div className="space-y-3">
          <SectionPill label="When should analysts use DISTINCT?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-4 space-y-1">
              <div className="text-[13px] font-bold text-[#1E1B4B]">Find categories</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi ? 'Store ke sabhi different product categories list karo.' : 'List all different product categories in a store.'}
              </p>
            </div>
            <div className="rounded-2xl bg-[#FCE7F3]/80 border border-[#F9A8D4] p-4 space-y-1">
              <div className="text-[13px] font-bold text-[#1E1B4B]">Explore data</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi ? 'Dekho kaun se regions ya payment methods exist karte hain.' : 'See which regions or payment methods exist.'}
              </p>
            </div>
            <div className="rounded-2xl bg-[#DCFCE7]/80 border border-[#86EFAC] p-4 space-y-1">
              <div className="text-[13px] font-bold text-[#1E1B4B]">Check repeated values</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi ? 'Notice karo kya kisi column mein bahut repeated entries hain.' : 'Notice whether a column contains many repeated entries.'}
              </p>
            </div>
          </div>
        </div>

        {/* Important rules to remember */}
        <div className="space-y-2.5">
          <SectionPill label="Important rules to remember" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD] p-4 space-y-1.5 text-[12.5px] text-[#334155]">
            <p className="m-0">
              <strong className="text-[#1E1B4B]">1.</strong>{' '}
              {isHi ? 'DISTINCT poore selected row ya combination par apply hota hai.' : 'DISTINCT applies to the entire selected row or combination.'}
            </p>
            <p className="m-0">
              <strong className="text-[#1E1B4B]">2.</strong>{' '}
              {isHi ? 'DISTINCT duplicate records ko permanently delete nahi karta.' : 'DISTINCT does not permanently remove duplicate records.'}
            </p>
            <p className="m-0">
              <strong className="text-[#1E1B4B]">3.</strong>{' '}
              {isHi ? 'DISTINCT kisi specific result order ki guarantee nahi deta.' : 'DISTINCT does not guarantee any particular result order.'}
            </p>
            <p className="m-0">
              <strong className="text-[#1E1B4B]">4.</strong>{' '}
              {isHi
                ? 'DISTINCT tabhi use karo jab unique results chahiye; unexpected duplicates ko bina investigate kiye hide karne ke liye mat use karo.'
                : 'Use DISTINCT only when you need unique results; do not use it to hide unexpected duplicates without investigating them.'}
            </p>
          </div>
        </div>

        <NotePageFooter page="2 / 2" />
      </section>
    </div>
  );
};
