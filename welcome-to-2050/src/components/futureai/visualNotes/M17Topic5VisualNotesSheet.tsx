import React from 'react';
import { Database } from 'lucide-react';
import { NoteRibbonBanner, SectionPill, SqlEditorBox, NotePageFooter } from './SqlVisualNotesPrimitives';

/**
 * Exact 3-Page Illustrated Visual Learning Notes Sheet for
 * M17 Topic 5: Connecting to PostgreSQL with a SQL Client
 */
export const M17Topic5VisualNotesSheet: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const isHi = lang === 'hi';

  const connectionDetails = [
    { field: 'Host', example: 'localhost', descEn: 'Where the server is running', descHi: 'Jahan server chal raha hai' },
    { field: 'Port', example: '5432', descEn: 'Common PostgreSQL default port', descHi: 'Common PostgreSQL default port' },
    { field: 'Database', example: 'sample_shop', descEn: 'The database you want to open', descHi: 'Jo database aapko open karna hai' },
    { field: 'Username', example: 'analyst', descEn: 'Account allowed to connect', descHi: 'Connect karne wala user account' },
    { field: 'Password', example: 'Your secret password', descEn: 'Used to verify the account', descHi: 'Account verify karne ke liye' },
  ];

  const setupSteps = [
    {
      num: '1',
      badgeBg: 'bg-[#E0F2FE] border-[#93C5FD]',
      titleEn: 'Open the SQL client',
      titleHi: 'SQL client open karo',
      descEn: 'Start DBeaver or pgAdmin on your computer.',
      descHi: 'Apne computer par DBeaver ya pgAdmin start karo.',
    },
    {
      num: '2',
      badgeBg: 'bg-[#FCE7F3] border-[#F9A8D4]',
      titleEn: 'Choose a PostgreSQL connection',
      titleHi: 'PostgreSQL connection choose karo',
      descEn: 'Create a new connection and select PostgreSQL.',
      descHi: 'Naya connection create karo aur PostgreSQL select karo.',
    },
    {
      num: '3',
      badgeBg: 'bg-[#FEF3C7] border-[#FCD34D]',
      titleEn: 'Enter server information',
      titleHi: 'Server information enter karo',
      descEn: 'Add host, port, database and username.',
      descHi: 'Host, port, database aur username fill karo.',
    },
    {
      num: '4',
      badgeBg: 'bg-[#DCFCE7] border-[#86EFAC]',
      titleEn: 'Enter your password',
      titleHi: 'Apna password enter karo',
      descEn: 'Use the account password supplied to you.',
      descHi: 'Jo account password aapko diya gaya hai wo use karo.',
    },
    {
      num: '5',
      badgeBg: 'bg-[#F3E8FF] border-[#C4B5FD]',
      titleEn: 'Test, then connect',
      titleHi: 'Test karo, phir connect karo',
      descEn: 'Confirm that the connection succeeds.',
      descHi: 'Confirm karo ki connection succeed ho gaya.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 1 OF 3 — FROM YOUR COMPUTER TO A REAL DATABASE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Connecting to PostgreSQL with a SQL Client"
          subtitle="FROM YOUR COMPUTER TO A REAL DATABASE"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 5"
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
                ? 'SQL client wo tool hai jisse aap database se baat karte hain.'
                : 'A SQL client is the tool you use to talk to a database.'}
            </h3>
            <p className="text-[13px] text-[#334155] leading-relaxed m-0">
              {isHi ? (
                <>
                  <strong>PostgreSQL</strong> ek database management system hai jo data store aur manage karta hai. <strong>SQL client</strong> ek application hai jisse aap PostgreSQL se connect karte hain, SQL likhte hain, queries run karte hain aur results dekhte hain. Client ko apna workspace samjho aur PostgreSQL ko data rakhne wala system.
                </>
              ) : (
                <>
                  <strong>PostgreSQL</strong> is a database management system that stores and manages data. A <strong>SQL client</strong> is an application that lets you connect to PostgreSQL, write SQL, run queries and see results. Think of the client as your workspace and PostgreSQL as the system holding the data.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Section 1: Understand the connection first */}
        <div className="space-y-3">
          <SectionPill label="Understand the connection first" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="w-full sm:flex-1 rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-4 text-center space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A]">YOUR COMPUTER</div>
                <div className="text-[13px] text-[#334155]">SQL Client</div>
                <div className="text-[13.5px] font-extrabold text-[#1E1B4B]">pgAdmin / DBeaver</div>
              </div>

              <span className="text-[#7C3AED] font-extrabold text-xl select-none rotate-90 sm:rotate-0">→</span>

              <div className="w-full sm:flex-1 rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-4 text-center space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#92400E]">CONNECTION</div>
                <div className="text-[13px] text-[#334155]">Host + Port</div>
                <div className="text-[13px] font-semibold text-[#1E1B4B]">Login details</div>
              </div>

              <span className="text-[#7C3AED] font-extrabold text-xl select-none rotate-90 sm:rotate-0">→</span>

              <div className="w-full sm:flex-1 rounded-2xl bg-[#DCFCE7]/85 border border-[#86EFAC] p-4 text-center space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#166534]">POSTGRESQL</div>
                <div className="flex justify-center">
                  <Database className="w-7 h-7 text-[#6D28D9]" />
                </div>
              </div>
            </div>

            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi
                ? 'Aap client mein query likhte hain. PostgreSQL use run karta hai aur result aapki screen par wapas bhejta hai.'
                : 'You write a query in the client. PostgreSQL runs it and sends the result back to your screen.'}
            </p>
          </div>
        </div>

        {/* Section 2: What must be installed? */}
        <div className="space-y-3">
          <SectionPill label="What must be installed?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="rounded-2xl bg-[#E0F2FE]/75 border border-[#93C5FD] p-4 space-y-1.5">
              <div className="text-[13.5px] font-extrabold text-[#1E1B4B]">1. PostgreSQL Server</div>
              <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
                {isHi
                  ? 'Databases store karta hai aur SQL run karta hai. Ye aapke computer par ya remote server par ho sakta hai.'
                  : 'Stores databases and runs SQL. It can be on your own computer or on a remote server.'}
              </p>
            </div>
            <div className="rounded-2xl bg-[#FCE7F3]/75 border border-[#F9A8D4] p-4 space-y-1.5">
              <div className="text-[13.5px] font-extrabold text-[#1E1B4B]">2. SQL Client</div>
              <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
                {isHi
                  ? 'Connection window, SQL editor aur results dikhata hai. pgAdmin aur DBeaver common examples hain.'
                  : 'Shows a connection window, SQL editor and results. pgAdmin and DBeaver are common examples.'}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Five details a client may ask for */}
        <div className="space-y-3">
          <SectionPill label="Five details a client may ask for" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-3 sm:p-4 space-y-2">
            {connectionDetails.map((item, idx) => (
              <div
                key={item.field}
                className={`grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-3 items-center px-3.5 py-2.5 rounded-xl text-[12.5px] ${
                  idx % 2 === 0 ? 'bg-[#FAF7FF]' : 'bg-white'
                }`}
              >
                <div className="sm:col-span-3 font-bold text-[#1E1B4B]">{item.field}</div>
                <div className="sm:col-span-4 font-mono font-semibold text-[#6D28D9]">{item.example}</div>
                <div className="sm:col-span-5 text-[#334155]">{isHi ? item.descHi : item.descEn}</div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#475569] px-1 m-0">
            {isHi ? (
              <>
                Ye <strong>illustrative settings</strong> hain, real credentials nahi. Apne instructor ya administrator dwara di gayi values use karo.
              </>
            ) : (
              <>
                These are <strong>illustrative settings</strong>, not real credentials. Use the values provided by your instructor or administrator.
              </>
            )}
          </p>
        </div>

        <NotePageFooter page="1 / 3" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 2 OF 3 — CONNECT, RUN A QUERY, AND READ THE RESULT
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Connecting to PostgreSQL with a SQL Client"
          subtitle="CONNECT, RUN A QUERY, AND READ THE RESULT"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 5"
          pageTag="PAGE 2 OF 3"
        />

        {/* Intro Card */}
        <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD]/80 p-4 sm:p-5 space-y-1">
          <h3 className="text-[15.5px] font-bold text-[#1E1B4B] m-0">
            {isHi ? 'Kuch aasan steps mein connect karo' : 'Connect in a few clear steps'}
          </h3>
          <p className="text-[13px] text-[#334155] leading-relaxed m-0">
            {isHi ? (
              <>
                Is example mein graphical SQL client jaise <strong>DBeaver</strong> use hua hai. pgAdmin ke menu names thode alag ho sakte hain, par connection details aur basic workflow same hota hai.
              </>
            ) : (
              <>
                This example uses a graphical SQL client such as <strong>DBeaver</strong>. pgAdmin uses different menu names, but the same connection information and basic workflow.
              </>
            )}
          </p>
        </div>

        {/* Step-by-step */}
        <div className="space-y-3">
          <SectionPill label="Step-by-step: create a connection" />
          <div className="space-y-2.5">
            {setupSteps.map((st) => (
              <div
                key={st.num}
                className="rounded-2xl border border-[#DDD6FE] bg-white px-4 py-3 flex items-center gap-3.5 shadow-2xs"
              >
                <div
                  className={`w-10 h-10 rounded-xl border ${st.badgeBg} flex items-center justify-center font-extrabold text-[#4C1D95] text-[15px] shrink-0`}
                >
                  {st.num}
                </div>
                <div className="space-y-0.5">
                  <div className="text-[13.5px] font-bold text-[#1E1B4B]">{isHi ? st.titleHi : st.titleEn}</div>
                  <div className="text-[12.5px] text-[#475569]">{isHi ? st.descHi : st.descEn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Try a safe first query */}
        <div className="space-y-3">
          <SectionPill label="Try a safe first query" />
          <SqlEditorBox label="POSTGRESQL SQL EDITOR">
            <span className="text-[#C4B5FD] font-bold">SELECT</span> current_database();{'\n'}
            <span className="text-[#C4B5FD] font-bold">SELECT</span> current_user;
          </SqlEditorBox>

          <div className="rounded-2xl bg-[#DCFCE7]/70 border-2 border-[#86EFAC] p-4 space-y-1">
            <div className="text-[13.5px] font-bold text-[#1E1B4B]">What should happen?</div>
            <p className="text-[12.5px] text-[#334155] leading-relaxed m-0">
              {isHi
                ? 'Pehli query us database ka naam dikhati hai jisse aap connected hain. Doosri query aapke current session ka PostgreSQL user dikhati hai. Values aapke actual connection par depend karti hain.'
                : 'The first query shows the name of the database you connected to. The second shows the PostgreSQL user for your current session. The values depend on your actual connection.'}
            </p>
          </div>

          <div className="rounded-2xl bg-[#F5F0FF] border border-[#C4B5FD] px-4 py-3 text-[12.5px] text-[#1E1B4B]">
            {isHi ? (
              <>
                <strong>Remember:</strong> Successful connection ka matlab ye nahi ki aap har table read kar sakte hain. Access permissions par depend karta hai.
              </>
            ) : (
              <>
                <strong>Remember:</strong> A successful connection does not automatically mean you can read every table. Access depends on permissions.
              </>
            )}
          </div>
        </div>

        <NotePageFooter page="2 / 3" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 3 OF 3 — RESULTS, ERRORS, AND SAFE WORK HABITS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white rounded-3xl border-2 border-[#E5DEFF] p-4 sm:p-6 shadow-xs space-y-5">
        <NoteRibbonBanner
          title="Connecting to PostgreSQL with a SQL Client"
          subtitle="RESULTS, ERRORS, AND SAFE WORK HABITS"
          moduleTag="FUTURE IT INDUSTRY | M17 | TOPIC 5"
          pageTag="PAGE 3 OF 3"
        />

        {/* See how a SQL client works */}
        <div className="space-y-3">
          <SectionPill label="See how a SQL client works" />
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-white p-4 space-y-3">
            <div className="rounded-xl bg-[#F5F0FF] border border-[#C4B5FD] px-4 py-2 text-center text-[12.5px] font-bold text-[#1E1B4B]">
              Database Navigator / SQL Editor / Results
            </div>

            <SqlEditorBox label="QUERY EDITOR - EXAMPLE">
              <span className="text-[#C4B5FD] font-bold">SELECT</span> * <span className="text-[#C4B5FD] font-bold">FROM</span> customers;
            </SqlEditorBox>

            <p className="text-[12.5px] text-[#334155] m-0">
              {isHi ? (
                <>
                  Jab aap ye query run karte hain, to neeche result grid dikhta hai <strong>agar customers table exist karta hai aur aapke account ko read permission hai</strong>.
                </>
              ) : (
                <>
                  When you run this query, the result grid appears below <strong>if a customers table exists and your account can read it</strong>.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Read common connection errors */}
        <div className="space-y-3">
          <SectionPill label="Read common connection errors" />
          <div className="space-y-2.5">
            <div className="rounded-2xl bg-[#FCE7F3]/75 border border-[#F9A8D4] p-4 space-y-1">
              <div className="text-[13.5px] font-bold text-[#1E1B4B]">Connection refused</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi
                  ? 'Server stopped ho sakta hai, host/port galat ho sakta hai, ya network access block kar raha hoga.'
                  : 'The server may be stopped, the host/port may be wrong, or the network may block access.'}
              </p>
            </div>

            <div className="rounded-2xl bg-[#FEF3C7]/85 border border-[#FCD34D] p-4 space-y-1">
              <div className="text-[13.5px] font-bold text-[#1E1B4B]">Password authentication failed</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi
                  ? 'Username aur password check karo; passwords ko chat ya screenshots mein kabhi share mat karo.'
                  : 'Check the username and password; do not share passwords in chat or screenshots.'}
              </p>
            </div>

            <div className="rounded-2xl bg-[#E0F2FE]/80 border border-[#93C5FD] p-4 space-y-1">
              <div className="text-[13.5px] font-bold text-[#1E1B4B]">Database does not exist</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi
                  ? 'Database name confirm karo. Server se connect hone se missing database apne aap create nahi hota.'
                  : 'Confirm the database name. Connecting to a server does not create a missing database.'}
              </p>
            </div>

            <div className="rounded-2xl bg-[#DCFCE7]/75 border border-[#86EFAC] p-4 space-y-1">
              <div className="text-[13.5px] font-bold text-[#1E1B4B]">Permission denied</div>
              <p className="text-[12.5px] text-[#334155] m-0">
                {isHi
                  ? 'Aapka account connect ho sakta hai par kisi particular table ko read karne ki permission nahi hogi.'
                  : 'Your account may connect but may not be allowed to read a particular table.'}
              </p>
            </div>
          </div>
        </div>

        {/* Good habits for real analysts */}
        <div className="space-y-2.5">
          <SectionPill label="Good habits for real analysts" />
          <div className="rounded-2xl bg-[#FAF7FF] border-2 border-[#C4B5FD] p-4 space-y-2 text-[12.5px] text-[#334155]">
            <p className="m-0">
              <strong className="text-[#1E1B4B]">Use a read-only account</strong>{' '}
              {isHi ? 'jab data explore kar rahe ho, agar available ho.' : 'when exploring data, if one is available.'}
            </p>
            <p className="m-0">
              <strong className="text-[#1E1B4B]">Keep passwords private</strong>{' '}
              {isHi ? 'aur team ke secure connection settings use karo.' : 'and use secure connection settings required by your team.'}
            </p>
            <p className="m-0">
              <strong className="text-[#1E1B4B]">Check the selected database</strong>{' '}
              {isHi ? 'koi bhi query run karne se pehle.' : 'before running a query.'}
            </p>
            <p className="m-0">
              <strong className="text-[#1E1B4B]">Start with small results</strong>{' '}
              {isHi ? 'jab kisi bade table ko explore kar rahe ho.' : 'when exploring a large table.'}
            </p>
          </div>
        </div>

        <NotePageFooter page="3 / 3" />
      </section>
    </div>
  );
};
