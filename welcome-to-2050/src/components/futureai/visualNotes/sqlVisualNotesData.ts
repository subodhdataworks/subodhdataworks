// ═════════════════════════════════════════════════════════════════════════════
// SQL VISUAL LEARNING NOTES DATA (M17 – M22)
// Structured JSON-driven Visual Learning Notes • EN & Hinglish • Interactive Code Lines
// ═════════════════════════════════════════════════════════════════════════════

import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import {
  M18_T1_WHERE_CLAUSE,
  M18_T2_COMPARISON_OPERATORS,
  M18_T3_AND_OR_NOT,
  M18_T4_IN_BETWEEN_LIKE,
  M18_T5_ORDER_BY,
} from './m18Part1Data';
import {
  M18_T6_LIMIT_TOP,
  M18_T7_NULL_VALUES,
  M18_T8_COALESCE,
  M18_T9_ARITHMETIC,
} from './m18Part2Data';
import { M19_VISUAL_NOTES_BY_ID } from './m19VisualNotesData';
import { M20_VISUAL_NOTES_BY_ID } from './m20VisualNotesData';
import { M21_VISUAL_NOTES_BY_ID } from './m21VisualNotesData';
import { M22_VISUAL_NOTES_BY_ID } from './m22VisualNotesData';

export interface SqlVisualScene {
  step: number;
  title: string;
  en: string;
  hi: string;
  visual: string;
  takeaway_en: string;
  takeaway_hi: string;
  narration_en: string;
  narration_hi: string;
}

export interface SqlVisualLessonData {
  module: string;
  moduleTitle: string;
  topic: string;
  kind: string;
  audience: string;
  videoRequired: boolean;
  sampleDataNotice: string;
  scenes: SqlVisualScene[];
}

export const M17_T1_WHAT_IS_A_DATABASE: SqlVisualLessonData = {
  module: 'M17',
  moduleTitle: 'Databases and SQL Fundamentals',
  topic: 'What Is a Database?',
  kind: 'visual-learning-notes-only',
  audience: 'absolute beginners',
  videoRequired: false,
  sampleDataNotice: 'All example customer and order data are illustrative, not real records.',
  scenes: [
    {
      step: 1,
      title: 'A shop without a database',
      en: '<p>Imagine a retail shop receiving customers, payments and orders every day. If customer details are written in one notebook and orders in another, answering a simple question like “Which orders belong to Rahul?” becomes slow and error-prone.</p><p>A database helps keep related information <strong>organized and searchable</strong>. The goal is not to make a fancy screen; the goal is to make information useful when it is needed.</p>',
      hi: '<p>Socho tumhari ek retail shop hai. Roz customers aate hain, products bikte hain aur orders bante hain. Customer details ek notebook mein aur orders doosri notebook mein hon, to “Rahul ne kaun-kaun se orders diye?” dhoondhna mushkil ho sakta hai.</p><p><strong>Database</strong> related information ko organized aur searchable rakhta hai. Matlab zaroorat padne par data easily mil sake.</p>',
      visual: '<div class="flow"><div class="flow-node">🏪 Retail Shop</div><span class="flow-arrow">→</span><div class="flow-node">🧾 Customer & Order Records</div><span class="flow-arrow">→</span><div class="flow-node">🗄️ Organized Database</div><span class="flow-arrow">→</span><div class="flow-node">📊 Useful Information</div></div>',
      takeaway_en: 'Why we need a database: reliable organization and retrieval of related data.',
      takeaway_hi: 'Database ka purpose hai related data ko organized rakhna aur zaroorat par dhoondhna.',
      narration_en: 'Imagine a shop with hundreds of orders. When records are scattered, searching is difficult. A database organizes related records so they can be found and managed.',
      narration_hi: 'Socho ek shop mein hundreds of orders hain. Alag notebooks se information dhoondhna mushkil hai. Database records ko organize karta hai, jisse search aur management easy hota hai.',
    },
    {
      step: 2,
      title: 'What exactly is a database?',
      en: '<p>A <strong>database</strong> is an organized collection of related data, usually stored electronically, that can be accessed and managed. For example, a shop database may hold customers, products and orders.</p><p>A database is <strong>not simply a single table</strong>. A relational database can contain many related tables, along with other objects and rules.</p>',
      hi: '<p><strong>Database</strong> related data ka organized collection hota hai, jise usually electronically store aur manage kiya jata hai. Shop ke database mein customers, products aur orders ka data ho sakta hai.</p><p>Yaad rakho: Database ka matlab sirf ek Table nahi. Ek relational database mein multiple related Tables ho sakti hain.</p>',
      visual: '<div class="compare"><div class="compare-card"><div class="big-symbol">📄</div><b>One loose record</b><small>Only a few facts, not an organized system</small></div><div class="compare-card highlight-card"><div class="big-symbol">🗄️</div><b>Shop Database</b><small>Customers · Products · Orders · Relationships</small></div></div>',
      takeaway_en: 'Database = organized collection of related data.',
      takeaway_hi: 'Database = related data ka organized collection.',
      narration_en: 'A database is an organized collection of related data, usually stored electronically, that can be accessed and managed. For example, a shop database may hold customers, products and orders. A database is not simply a single table. A relational database can contain many related tables, along with other objects and rules.',
      narration_hi: 'Database related data ka organized collection hota hai, jise usually electronically store aur manage kiya jata hai. Shop ke database mein customers, products aur orders ka data ho sakta hai. Yaad rakho: Database ka matlab sirf ek Table nahi. Ek relational database mein multiple related Tables ho sakti hain.',
    },
    {
      step: 3,
      title: 'Data versus information',
      en: '<p><strong>Data</strong> means raw facts: a customer name, a city, an order amount or a date. <strong>Information</strong> is a meaningful result created from those facts.</p><p>Example: individual orders of ₹1,200 and ₹450 are data. Saying “Rahul purchased ₹1,650 in total” is information obtained by combining the records.</p>',
      hi: '<p><strong>Data</strong> raw facts hote hain—jaise customer name, city, amount aur date. Jab in facts se meaningful result milta hai, use <strong>Information</strong> kehte hain.</p><p>Example: ₹1,200 aur ₹450 ke do orders raw data hain. Inko add karke “Rahul ki total purchase ₹1,650 hai” bolna useful information hai.</p>',
      visual: '<div class="calc-row"><div class="calc-pill">Order 1 <b>₹1,200</b></div><div class="plus">+</div><div class="calc-pill">Order 2 <b>₹450</b></div><div class="equals">=</div><div class="calc-pill total">Total <b>₹1,650</b></div></div>',
      takeaway_en: 'Data is the input; information is the interpreted result.',
      takeaway_hi: 'Data input hai; information uska meaningful result hai.',
      narration_en: 'Data means raw facts: a customer name, a city, an order amount or a date. Information is a meaningful result created from those facts. Example: individual orders of 1,200 rupees and 450 rupees are data. Saying Rahul purchased 1,650 rupees in total is information obtained by combining the records.',
      narration_hi: 'Data raw facts hote hain—jaise customer name, city, amount aur date. Jab in facts se meaningful result milta hai, use Information kehte hain. Example: 1,200 aur 450 ke do orders raw data hain. Inko add karke Rahul ki total purchase 1,650 hai bolna useful information hai.',
    },
    {
      step: 4,
      title: 'From scattered files to organized records',
      en: '<p>Scattered notes often repeat names, mix unrelated details and make corrections difficult. In a structured database, related records are stored in defined places so applications and analysts can retrieve them consistently.</p><p>Databases do not automatically guarantee perfect data quality: good design, validation and maintenance still matter.</p>',
      hi: '<p>Alag-alag notebooks ya files mein same name baar-baar likha ja sakta hai aur correction karna difficult hota hai. Database mein records ko defined structure mein rakhte hain, jisse consistent retrieval possible hota hai.</p><p>Important: Database apne aap data ko 100% correct nahi bana deta. Validation aur proper maintenance zaroori hain.</p>',
      visual: '<div class="compare"><div class="compare-card"><div class="stacked-notes"><span>Rahul — ₹1200</span><span>Priya — Delhi</span><span>Rahul — ₹450</span></div><b>Scattered notes</b><small>Mixed details and repeated records</small></div><div class="compare-card highlight-card"><div class="mini-table">Customers: 101 → Rahul<br>Orders: 5001 → 101 → ₹1200<br>Orders: 5003 → 101 → ₹450</div><b>Organized records</b><small>Customer and orders can be connected</small></div></div>',
      takeaway_en: 'Structure makes data easier to maintain, but quality checks remain essential.',
      takeaway_hi: 'Structured records useful hain, lekin data quality check bhi zaroori hai.',
      narration_en: 'Scattered notes often repeat names, mix unrelated details and make corrections difficult. In a structured database, related records are stored in defined places so applications and analysts can retrieve them consistently. Databases do not automatically guarantee perfect data quality: good design, validation and maintenance still matter.',
      narration_hi: 'Alag-alag notebooks ya files mein same name baar-baar likha ja sakta hai aur correction karna difficult hota hai. Database mein records ko defined structure mein rakhte hain, jisse consistent retrieval possible hota hai. Important: Database apne aap data ko 100% correct nahi bana deta. Validation aur proper maintenance zaroori hain.',
    },
    {
      step: 5,
      title: 'Database, Table and DBMS are different',
      en: '<p>These three terms are related, but not interchangeable:</p><p><strong>Database:</strong> the organized collection of data. <strong>Table:</strong> a structure containing rows and columns. <strong>DBMS (Database Management System):</strong> software that creates, accesses and manages databases.</p><p><strong>PostgreSQL</strong> is an example of a relational DBMS. A database called <code>shop_analytics</code> might contain a table called <code>customers</code>.</p>',
      hi: '<p>Ye teen words same nahi hain:</p><p><strong>Database:</strong> organized data collection. <strong>Table:</strong> Rows aur Columns mein records. <strong>DBMS:</strong> software jo Database ko create, access aur manage karta hai.</p><p><strong>PostgreSQL</strong> ek relational DBMS hai. Uske andar <code>shop_analytics</code> Database ho sakta hai aur uske andar <code>customers</code> Table.</p>',
      visual: '<div class="nested"><div class="nested-outer"><b>⚙️ PostgreSQL — DBMS</b><div class="nested-mid"><b>🗄️ shop_analytics — Database</b><div class="nested-inner"><b>📋 customers — Table</b><small>Rows + Columns</small></div></div></div></div>',
      takeaway_en: 'PostgreSQL is DBMS software, not the name of every database inside it.',
      takeaway_hi: 'PostgreSQL DBMS hai; shop_analytics Database aur customers Table hai.',
      narration_en: 'These three terms are related, but not interchangeable: Database is the organized collection of data. Table is a structure containing rows and columns. DBMS, or Database Management System, is software that creates, accesses and manages databases. PostgreSQL is an example of a relational DBMS. A database called shop_analytics might contain a table called customers.',
      narration_hi: 'Ye teen words same nahi hain: Database organized data collection hai. Table Rows aur Columns mein records hai. DBMS software hai jo Database ko create, access aur manage karta hai. PostgreSQL ek relational DBMS hai. Uske andar shop_analytics Database ho sakta hai aur uske andar customers Table.',
    },
    {
      step: 6,
      title: 'Tables, rows and columns',
      en: '<p>A relational table organizes records in <strong>rows</strong> and <strong>columns</strong>. Each row represents one record, and each column represents one attribute or field.</p><p>In the example below, <code>name</code> is a column; the record <code>102 | Priya | Delhi</code> is a row. A table may have many more rows than this sample.</p>',
      hi: '<p>Relational Table mein data <strong>Rows</strong> aur <strong>Columns</strong> mein hota hai. Har Row ek record hai. Har Column ek field ya attribute hai.</p><p>Niche <code>name</code> ek Column hai aur <code>102 | Priya | Delhi</code> ek Row. Real database mein bahut saari Rows ho sakti hain.</p>',
      visual: '<div class="table-wrap"><table><thead><tr><th class="accent">customer_id</th><th class="">name</th><th class="">city</th></tr></thead><tbody><tr><td class="accent">101</td><td class="">Rahul</td><td class="">Patna</td></tr><tr><td class="accent">102</td><td class="">Priya</td><td class="">Delhi</td></tr><tr><td class="accent">103</td><td class="">Aman</td><td class="">Patna</td></tr></tbody></table><div class="visual-caption">Customers table • Sample data only</div></div>',
      takeaway_en: 'Row = one record; column = one attribute.',
      takeaway_hi: 'Row = ek record; Column = ek field.',
      narration_en: 'A relational table organizes records in rows and columns. Each row represents one record, and each column represents one attribute or field. In the example below, name is a column; the record 102 Priya Delhi is a row. A table may have many more rows than this sample.',
      narration_hi: 'Relational Table mein data Rows aur Columns mein hota hai. Har Row ek record hai. Har Column ek field ya attribute hai. Niche name ek Column hai aur 102 Priya Delhi ek Row. Real database mein bahut saari Rows ho sakti hain.',
    },
    {
      step: 7,
      title: 'Why a unique customer ID matters',
      en: '<p>Names are not guaranteed to be unique. Two people can both be named Rahul. A <strong>Primary Key</strong> identifies each row uniquely in a table.</p><p>In the sample, <code>customer_id</code> is the Primary Key. Values 101, 102 and 103 identify different customers. A Primary Key must be unique and not NULL.</p>',
      hi: '<p>Do customers ka naam same ho sakta hai. Isliye naam se record identify karna reliable nahi. <strong>Primary Key</strong> har Row ko uniquely identify karti hai.</p><p>Example mein <code>customer_id</code> Primary Key hai. 101, 102, 103 alag customers hain. Primary Key unique hoti hai aur NULL nahi ho sakti.</p>',
      visual: '<div class="table-wrap"><table><thead><tr><th class="accent">customer_id 🔑</th><th class="">name</th><th class="">city</th></tr></thead><tbody><tr><td class="accent">101</td><td class="">Rahul</td><td class="">Patna</td></tr><tr><td class="accent">102</td><td class="">Rahul</td><td class="">Delhi</td></tr><tr><td class="accent">103</td><td class="">Aman</td><td class="">Patna</td></tr></tbody></table><div class="visual-caption">Same name is allowed; Primary Key stays unique</div></div>',
      takeaway_en: 'Use a unique identifier instead of assuming names are unique.',
      takeaway_hi: 'Name repeat ho sakta hai, lekin Primary Key unique honi chahiye.',
      narration_en: 'Names are not guaranteed to be unique. Two people can both be named Rahul. A Primary Key identifies each row uniquely in a table. In the sample, customer_id is the Primary Key. Values 101, 102 and 103 identify different customers. A Primary Key must be unique and not NULL.',
      narration_hi: 'Do customers ka naam same ho sakta hai. Isliye naam se record identify karna reliable nahi. Primary Key har Row ko uniquely identify karti hai. Example mein customer_id Primary Key hai. 101, 102, 103 alag customers hain. Primary Key unique hoti hai aur NULL nahi ho sakti.',
    },
    {
      step: 8,
      title: 'Different types of stored values',
      en: '<p>Columns use <strong>data types</strong> to describe what values they store. Typical examples include integers, text, decimal numbers, dates and Boolean values.</p><p>Data types help the DBMS validate and process values. For example, an order amount should be numeric so totals can be calculated. The exact type names depend on the DBMS.</p>',
      hi: '<p>Har Column ka ek <strong>Data Type</strong> ho sakta hai, jo batata hai ki kis tarah ki value store hogi. Jaise Integer, Text, Decimal, Date aur Boolean.</p><p>Order amount numeric hona chahiye, tabhi sum nikalna easy hoga. Data Type ke exact names DBMS ke hisaab se badal sakte hain.</p>',
      visual: '<div class="type-grid"><div><b>101</b><small>INTEGER</small></div><div><b>Rahul</b><small>TEXT</small></div><div><b>1200.50</b><small>NUMERIC</small></div><div><b>2026-11-23</b><small>DATE</small></div><div><b>TRUE</b><small>BOOLEAN</small></div></div>',
      takeaway_en: 'Data types help store and calculate values appropriately.',
      takeaway_hi: 'Data Type batata hai ki Column mein kaunsi value store hogi.',
      narration_en: 'Columns use data types to describe what values they store. Typical examples include integers, text, decimal numbers, dates and Boolean values. Data types help the DBMS validate and process values. For example, an order amount should be numeric so totals can be calculated. The exact type names depend on the DBMS.',
      narration_hi: 'Har Column ka ek Data Type ho sakta hai, jo batata hai ki kis tarah ki value store hogi. Jaise Integer, Text, Decimal, Date aur Boolean. Order amount numeric hona chahiye, tabhi sum nikalna easy hoga. Data Type ke exact names DBMS ke hisaab se badal sakte hain.',
    },
    {
      step: 9,
      title: 'How a DBMS works',
      en: '<p>A user or application sends a request to a <strong>DBMS</strong>. The DBMS checks the request and applicable permissions, accesses stored data and returns a result or performs an allowed change.</p><p>It also offers features such as transactions, access control and backup support. Security and reliability still require correct configuration and operations.</p>',
      hi: '<p>User ya Application request bhejta hai. <strong>DBMS</strong> request aur permissions check karke stored data access karta hai, phir result deta hai ya allowed change karta hai.</p><p>DBMS mein transactions, access control aur backup support jaise features hote hain. Lekin correct setup zaroori hai.</p>',
      visual: '<div class="flow"><div class="flow-node">👩‍💼 Analyst / App</div><span class="flow-arrow">→</span><div class="flow-node">⚙️ DBMS</div><span class="flow-arrow">→</span><div class="flow-node">🗄️ Database Tables</div><span class="flow-arrow">→</span><div class="flow-node">📄 Result</div></div>',
      takeaway_en: 'DBMS is the software layer that manages access to stored data.',
      takeaway_hi: 'DBMS request ko process karke data access/manage karta hai.',
      narration_en: 'A user or application sends a request to a DBMS. The DBMS checks the request and applicable permissions, accesses stored data and returns a result or performs an allowed change. It also offers features such as transactions, access control and backup support. Security and reliability still require correct configuration and operations.',
      narration_hi: 'User ya Application request bhejta hai. DBMS request aur permissions check karke stored data access karta hai, phir result deta hai ya allowed change karta hai. DBMS mein transactions, access control aur backup support jaise features hote hain. Lekin correct setup zaroori hai.',
    },
    {
      step: 10,
      title: 'The four basic data actions: CRUD',
      en: '<p>Applications commonly perform four operations, often called <strong>CRUD</strong>:</p><p><strong>Create</strong> a new record, <strong>Read</strong> existing records, <strong>Update</strong> a record, and <strong>Delete</strong> a record when authorized.</p><p>SQL commonly uses <code>INSERT</code>, <code>SELECT</code>, <code>UPDATE</code> and <code>DELETE</code> for these actions. You will learn their syntax later; today understand the purpose.</p>',
      hi: '<p>Database par chaar common actions ko <strong>CRUD</strong> kehte hain:</p><p><strong>Create</strong> naya record add karna, <strong>Read</strong> data dekhna, <strong>Update</strong> value badalna aur <strong>Delete</strong> authorized record remove karna.</p><p>SQL mein inke liye generally <code>INSERT</code>, <code>SELECT</code>, <code>UPDATE</code>, <code>DELETE</code> use hote hain. Abhi sirf purpose samjho.</p>',
      visual: '<div class="crud"><div><span>＋</span><b>Create</b><small>INSERT</small></div><div><span>⌕</span><b>Read</b><small>SELECT</small></div><div><span>✎</span><b>Update</b><small>UPDATE</small></div><div><span>×</span><b>Delete</b><small>DELETE</small></div></div>',
      takeaway_en: 'CRUD = Create, Read, Update, Delete.',
      takeaway_hi: 'CRUD = Create, Read, Update, Delete.',
      narration_en: 'Applications commonly perform four operations, often called CRUD: Create a new record, Read existing records, Update a record, and Delete a record when authorized. SQL commonly uses INSERT, SELECT, UPDATE and DELETE for these actions. You will learn their syntax later; today understand the purpose.',
      narration_hi: 'Database par chaar common actions ko CRUD kehte hain: Create naya record add karna, Read data dekhna, Update value badalna aur Delete authorized record remove karna. SQL mein inke liye generally INSERT, SELECT, UPDATE, DELETE use hote hain. Abhi sirf purpose samjho.',
    },
    {
      step: 11,
      title: 'SQL: the language to ask questions',
      en: '<p><strong>SQL (Structured Query Language)</strong> lets analysts ask relational databases for information. For example, a manager may ask for the names and cities of customers.</p><p>This query reads two columns from the <code>customers</code> table. It does not modify any records.</p>',
      hi: '<p><strong>SQL (Structured Query Language)</strong> se analyst relational Database se information maang sakta hai. Jaise manager ko customers ke name aur city dekhne hain.</p><p>Ye query <code>customers</code> Table se do Columns read karegi. Isse data change nahi hota.</p>',
      visual: '<div class="code-window"><div class="code-head"><span>SQL • PostgreSQL</span><span>Click a line to understand it</span></div><div class="code-line" data-line-en="SELECT chooses the columns to return." data-line-hi="SELECT batata hai kaunse Columns chahiye."><span class="line-num">1</span><code>SELECT name, city</code></div><div class="code-line" data-line-en="FROM specifies the source table." data-line-hi="FROM batata hai kis Table se data lena hai."><span class="line-num">2</span><code>FROM customers;</code></div></div><div class="line-note">Select any SQL line to see its meaning.</div>',
      takeaway_en: 'SELECT reads requested columns; FROM names the table.',
      takeaway_hi: 'SELECT Columns choose karta hai; FROM Table batata hai.',
      narration_en: 'SQL, Structured Query Language, lets analysts ask relational databases for information. For example, a manager may ask for the names and cities of customers. This query reads two columns from the customers table. It does not modify any records.',
      narration_hi: 'SQL, Structured Query Language, se analyst relational Database se information maang sakta hai. Jaise manager ko customers ke name aur city dekhne hain. Ye query customers Table se do Columns read karegi. Isse data change nahi hota.',
    },
    {
      step: 12,
      title: 'See the result of a SQL query',
      en: '<p>When the query runs successfully, the DBMS returns a <strong>result set</strong>. This is the data that matches the request.</p><p>The query below selects <code>name</code> and <code>city</code>, so the result contains those two columns. Without <code>ORDER BY</code>, row order is not guaranteed.</p>',
      hi: '<p>SQL query run hone par DBMS <strong>Result Set</strong> return karta hai. Matlab requested data ka output.</p><p>Humne <code>name</code> aur <code>city</code> select kiya, isliye output mein wahi do Columns hain. <code>ORDER BY</code> na ho to Rows ka order guaranteed nahi hota.</p>',
      visual: '<div class="table-wrap"><table><thead><tr><th class="">name</th><th class="">city</th></tr></thead><tbody><tr><td class="">Rahul</td><td class="">Patna</td></tr><tr><td class="">Priya</td><td class="">Delhi</td></tr><tr><td class="">Aman</td><td class="">Patna</td></tr></tbody></table><div class="visual-caption">Illustrative SELECT name, city FROM customers result</div></div>',
      takeaway_en: 'SQL results contain the columns requested in the query.',
      takeaway_hi: 'Query mein jo Columns maange, Result Set mein wahi milenge.',
      narration_en: 'When the query runs successfully, the DBMS returns a result set. This is the data that matches the request. The query below selects name and city, so the result contains those two columns. Without ORDER BY, row order is not guaranteed.',
      narration_hi: 'SQL query run hone par DBMS Result Set return karta hai. Matlab requested data ka output. Humne name aur city select kiya, isliye output mein wahi do Columns hain. ORDER BY na ho to Rows ka order guaranteed nahi hota.',
    },
    {
      step: 13,
      title: 'Filter data to answer a business question',
      en: '<p>Suppose the manager asks, “Which customers live in Patna?” The <code>WHERE</code> clause filters rows according to a condition.</p><p>Read this example as: choose name and city from customers, but only where the city equals Patna. This is a preview; filtering is taught in detail in the next module.</p>',
      hi: '<p>Manager poochta hai, “Patna ke customers kaun hain?” <code>WHERE</code> condition ke basis par Rows filter karta hai.</p><p>Is query ka matlab: customers Table se name aur city lao, lekin sirf un Rows ko jahan city Patna hai. Filtering aage detail mein seekhenge.</p>',
      visual: '<div class="code-window"><div class="code-head"><span>SQL • PostgreSQL</span><span>Click a line to understand it</span></div><div class="code-line" data-line-en="Choose the name and city columns." data-line-hi="name aur city Columns choose karo."><span class="line-num">1</span><code>SELECT name, city</code></div><div class="code-line" data-line-en="Read from the customers table." data-line-hi="customers Table se data lo."><span class="line-num">2</span><code>FROM customers</code></div><div class="code-line" data-line-en="Return only rows where city equals Patna." data-line-hi="Sirf wahi Rows lo jahan city Patna hai."><span class="line-num">3</span><code>WHERE city = \'Patna\';</code></div></div><div class="line-note">Select any SQL line to see its meaning.</div><div class="table-wrap"><table><thead><tr><th class="">name</th><th class="">city</th></tr></thead><tbody><tr><td class="">Rahul</td><td class="">Patna</td></tr><tr><td class="">Aman</td><td class="">Patna</td></tr></tbody></table><div class="visual-caption">Expected rows for the sample data; ordering not guaranteed</div></div>',
      takeaway_en: 'WHERE filters rows based on a condition.',
      takeaway_hi: 'WHERE condition ke hisaab se Rows filter karta hai.',
      narration_en: 'Suppose the manager asks, Which customers live in Patna? The WHERE clause filters rows according to a condition. Read this example as: choose name and city from customers, but only where the city equals Patna. This is a preview; filtering is taught in detail in the next module.',
      narration_hi: 'Manager poochta hai, Patna ke customers kaun hain? WHERE condition ke basis par Rows filter karta hai. Is query ka matlab: customers Table se name aur city lao, lekin sirf un Rows ko jahan city Patna hai. Filtering aage detail mein seekhenge.',
    },
    {
      step: 14,
      title: 'Related tables tell a bigger story',
      en: '<p>One database can contain multiple related tables. A <code>customers</code> table stores customer details; an <code>orders</code> table stores purchases. The <code>customer_id</code> in orders refers to the corresponding customer.</p><p>This is a preview of a <strong>relationship</strong>. In a relational design, a Foreign Key can enforce that reference. We will explore keys and relationships in later topics.</p>',
      hi: '<p>Ek Database mein multiple related Tables ho sakti hain. <code>customers</code> Table mein customer details aur <code>orders</code> Table mein purchases hoti hain. Orders ka <code>customer_id</code> batata hai ki order kis customer ka hai.</p><p>Is connection ko <strong>Relationship</strong> kehte hain. <strong>Foreign Key</strong> is reference ko enforce kar sakti hai. Aage detail mein padhenge.</p>',
      visual: '<div class="relation"><div><b>Customers</b><span>🔑 customer_id</span><span>name</span><span>city</span></div><div class="relation-link"><b>1 → many</b><small>customer_id</small></div><div><b>Orders</b><span>🔑 order_id</span><span>customer_id ↗</span><span>amount</span></div></div>',
      takeaway_en: 'One customer may have many orders; IDs connect the tables.',
      takeaway_hi: 'Ek customer ke multiple orders ho sakte hain; ID se Tables connect hoti hain.',
      narration_en: 'One database can contain multiple related tables. A customers table stores customer details; an orders table stores purchases. The customer_id in orders refers to the corresponding customer. This is a preview of a relationship. In a relational design, a Foreign Key can enforce that reference. We will explore keys and relationships in later topics.',
      narration_hi: 'Ek Database mein multiple related Tables ho sakti hain. customers Table mein customer details aur orders Table mein purchases hoti hain. Orders ka customer_id batata hai ki order kis customer ka hai. Is connection ko Relationship kehte hain. Foreign Key is reference ko enforce kar sakti hai. Aage detail mein padhenge.',
    },
    {
      step: 15,
      title: 'Spreadsheet versus relational database',
      en: '<p>Excel is useful for worksheets, formulas and smaller manual analysis. A relational DBMS is useful when applications need structured records, multiple related tables, permissions and repeatable queries.</p><p>They are <strong>complementary</strong>, not enemies. Analysts often retrieve data with SQL and create reports in Excel or Power BI. The right tool depends on the job.</p>',
      hi: '<p>Excel Worksheets, formulas aur small manual analysis ke liye useful hai. Relational DBMS structured records, multiple Tables, permissions aur repeatable queries ke liye useful hai.</p><p>Dono ek saath use ho sakte hain: SQL se data nikalo aur Excel ya Power BI mein report banao. Har kaam ke liye same tool best nahi hota.</p>',
      visual: '<div class="compare"><div class="compare-card"><div class="big-symbol">📗</div><b>Excel</b><small>Cells · Formulas · Manual analysis</small></div><div class="compare-card highlight-card"><div class="big-symbol">🗄️</div><b>Relational DBMS</b><small>Related tables · SQL · Managed access</small></div></div>',
      takeaway_en: 'Excel and databases often work together in analytics.',
      takeaway_hi: 'Excel aur Database analytics workflow mein saath kaam kar sakte hain.',
      narration_en: 'Excel is useful for worksheets, formulas and smaller manual analysis. A relational DBMS is useful when applications need structured records, multiple related tables, permissions and repeatable queries. They are complementary, not enemies. Analysts often retrieve data with SQL and create reports in Excel or Power BI. The right tool depends on the job.',
      narration_hi: 'Excel Worksheets, formulas aur small manual analysis ke liye useful hai. Relational DBMS structured records, multiple Tables, permissions aur repeatable queries ke liye useful hai. Dono ek saath use ho sakte hain: SQL se data nikalo aur Excel ya Power BI mein report banao. Har kaam ke liye same tool best nahi hota.',
    },
    {
      step: 16,
      title: 'Access, quality, backups and safety',
      en: '<p>Business databases may contain personal or sensitive information. Organizations should use appropriate <strong>access permissions</strong>, validation, backups and recovery plans.</p><p>Not everyone should be allowed to view or delete every record. A DBMS supports controls, but secure use also depends on people, policies and configuration.</p>',
      hi: '<p>Business Database mein personal ya sensitive information ho sakti hai. Isliye <strong>Access Permissions</strong>, data validation, backups aur recovery plan important hain.</p><p>Har user ko saare records dekhne ya delete karne ka permission nahi hona chahiye. DBMS features deta hai, lekin safe use ke liye policies aur correct configuration bhi chahiye.</p>',
      visual: '<div class="safety"><div>🔐<b>Permissions</b><small>Only approved access</small></div><div>✓<b>Validation</b><small>Check incoming values</small></div><div>↻<b>Backup</b><small>Plan for recovery</small></div></div>',
      takeaway_en: 'A database needs good security, validation and recovery practices.',
      takeaway_hi: 'Database ko secure rakhne ke liye permissions, validation aur backup chahiye.',
      narration_en: 'Business databases may contain personal or sensitive information. Organizations should use appropriate access permissions, validation, backups and recovery plans. Not everyone should be allowed to view or delete every record. A DBMS supports controls, but secure use also depends on people, policies and configuration.',
      narration_hi: 'Business Database mein personal ya sensitive information ho sakti hai. Isliye Access Permissions, data validation, backups aur recovery plan important hain. Har user ko saare records dekhne ya delete karne ka permission nahi hona chahiye. DBMS features deta hai, lekin safe use ke liye policies aur correct configuration bhi chahiye.',
    },
    {
      step: 17,
      title: 'Complete real-life analytics flow',
      en: '<p>Now connect everything. A shop application records a purchase. The DBMS stores the order in the database. Later an analyst runs SQL to retrieve relevant records and prepares a sales report for the manager.</p><p>This is the practical reason databases matter in Data Analytics: they make business records available for reliable, repeatable analysis.</p>',
      hi: '<p>Ab poora flow samjho. Shop mein purchase hoti hai. Application order record karti hai. DBMS us order ko Database mein store karta hai. Analyst SQL se relevant data nikalta hai aur manager ke liye sales report banata hai.</p><p>Data Analytics mein Database important hai kyunki business records ko organized rakhkar repeatable analysis possible banata hai.</p>',
      visual: '<div class="flow"><div class="flow-node">🛒 Purchase</div><span class="flow-arrow">→</span><div class="flow-node">💻 Shop App</div><span class="flow-arrow">→</span><div class="flow-node">⚙️ DBMS</div><span class="flow-arrow">→</span><div class="flow-node">🗄️ Orders Table</div><span class="flow-arrow">→</span><div class="flow-node">🔎 SQL Query</div><span class="flow-arrow">→</span><div class="flow-node">📈 Sales Report</div></div>',
      takeaway_en: 'Business event → stored record → SQL result → business report.',
      takeaway_hi: 'Business event → Database record → SQL result → business report.',
      narration_en: 'Now connect everything. A shop application records a purchase. The DBMS stores the order in the database. Later an analyst runs SQL to retrieve relevant records and prepares a sales report for the manager. This is the practical reason databases matter in Data Analytics: they make business records available for reliable, repeatable analysis.',
      narration_hi: 'Ab poora flow samjho. Shop mein purchase hoti hai. Application order record karti hai. DBMS us order ko Database mein store karta hai. Analyst SQL se relevant data nikalta hai aur manager ke liye sales report banata hai. Data Analytics mein Database important hai kyunki business records ko organized rakhkar repeatable analysis possible banata hai.',
    },
    {
      step: 18,
      title: 'Final concept map — remember these terms',
      en: '<p><strong>Data</strong> is a fact. A <strong>Database</strong> organizes related data. A <strong>Table</strong> stores records in rows and columns. A <strong>DBMS</strong> manages database access. <strong>SQL</strong> is a language used to work with relational data.</p><p>When these five terms are clear, the next lessons—tables, keys, PostgreSQL, SELECT, DISTINCT and aliases—will be much easier to understand.</p>',
      hi: '<p><strong>Data</strong> raw fact hai. <strong>Database</strong> related data ko organize karta hai. <strong>Table</strong> Rows aur Columns mein records rakhta hai. <strong>DBMS</strong> Database manage karta hai. <strong>SQL</strong> relational data ke saath kaam karne ki language hai.</p><p>Ye five terms clear ho gaye, to aage Tables, Keys, PostgreSQL, SELECT, DISTINCT aur AS samajhna easy hoga.</p>',
      visual: '<div class="glossary"><div><b>Data</b><span>Raw facts</span></div><div><b>Database</b><span>Organized collection</span></div><div><b>Table</b><span>Rows & columns</span></div><div><b>DBMS</b><span>Management software</span></div><div><b>SQL</b><span>Query language</span></div></div>',
      takeaway_en: 'Foundation complete: Data → Database → Table; DBMS manages; SQL queries.',
      takeaway_hi: 'Foundation clear: Data → Database → Table; DBMS manage karta hai; SQL query karta hai.',
      narration_en: 'Data is a fact. A Database organizes related data. A Table stores records in rows and columns. A DBMS manages database access. SQL is a language used to work with relational data. When these five terms are clear, the next lessons—tables, keys, PostgreSQL, SELECT, DISTINCT and aliases—will be much easier to understand.',
      narration_hi: 'Data raw fact hai. Database related data ko organize karta hai. Table Rows aur Columns mein records rakhta hai. DBMS Database manage karta hai. SQL relational data ke saath kaam karne ki language hai. Ye five terms clear ho gaye, to aage Tables, Keys, PostgreSQL, SELECT, DISTINCT aur AS samajhna easy hoga.',
    },
  ],
};

export const M17_T2_TABLES_ROWS_COLUMNS_PK: SqlVisualLessonData = {
  module: 'M17',
  moduleTitle: 'Databases and SQL Fundamentals',
  topic: 'Tables, Rows, Columns and Primary Keys',
  kind: 'visual-learning-notes-only',
  audience: 'absolute beginners',
  videoRequired: false,
  sampleDataNotice: 'All example customer and order data are illustrative, not real records.',
  scenes: [],
};

export const M17_T3_WHAT_IS_SQL: SqlVisualLessonData = {
  module: 'M17',
  moduleTitle: 'Databases and SQL Fundamentals',
  topic: 'What Is SQL?',
  kind: 'visual-learning-notes-only',
  audience: 'absolute beginners',
  videoRequired: false,
  sampleDataNotice: 'All example customer and order data are illustrative, not real records.',
  scenes: [],
};

export const M17_T4_RELATIONAL_DATABASE: SqlVisualLessonData = {
  module: 'M17',
  moduleTitle: 'Databases and SQL Fundamentals',
  topic: 'Understanding a Relational Database',
  kind: 'visual-learning-notes-only',
  audience: 'absolute beginners',
  videoRequired: false,
  sampleDataNotice: 'All example customer and order data are illustrative, not real records.',
  scenes: [],
};

export const M17_T5_CONNECTING_POSTGRESQL: SqlVisualLessonData = {
  module: 'M17',
  moduleTitle: 'Databases and SQL Fundamentals',
  topic: 'Connecting to PostgreSQL with a SQL Client',
  kind: 'visual-learning-notes-only',
  audience: 'absolute beginners',
  videoRequired: false,
  sampleDataNotice: 'All example connection settings and credentials are illustrative, not real accounts.',
  scenes: [],
};

export const M17_T6_SELECT_COLUMNS: SqlVisualLessonData = {
  module: 'M17',
  moduleTitle: 'Databases and SQL Fundamentals',
  topic: 'SELECT and Choosing Columns',
  kind: 'visual-learning-notes-only',
  audience: 'absolute beginners',
  videoRequired: false,
  sampleDataNotice: 'All example customer records are illustrative, not real records.',
  scenes: [],
};

export const M17_T7_DISTINCT_UNIQUE: SqlVisualLessonData = {
  module: 'M17',
  moduleTitle: 'Databases and SQL Fundamentals',
  topic: 'DISTINCT and Unique Values',
  kind: 'visual-learning-notes-only',
  audience: 'absolute beginners',
  videoRequired: false,
  sampleDataNotice: 'All example customer records are illustrative, not real records.',
  scenes: [],
};

export const M17_T8_ALIASES_AS: SqlVisualLessonData = {
  module: 'M17',
  moduleTitle: 'Databases and SQL Fundamentals',
  topic: 'Aliases with AS',
  kind: 'visual-learning-notes-only',
  audience: 'absolute beginners',
  videoRequired: false,
  sampleDataNotice: 'All example customer and order item records are illustrative, not real records.',
  scenes: [],
};

// Structured visual note specs (M18–M22: all 42 topics, completing all 50 SQL topics with M17)
export const STRUCTURED_SQL_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  85: M18_T1_WHERE_CLAUSE,
  181: M18_T1_WHERE_CLAUSE,
  86: M18_T2_COMPARISON_OPERATORS,
  182: M18_T2_COMPARISON_OPERATORS,
  87: M18_T3_AND_OR_NOT,
  183: M18_T3_AND_OR_NOT,
  88: M18_T4_IN_BETWEEN_LIKE,
  184: M18_T4_IN_BETWEEN_LIKE,
  89: M18_T5_ORDER_BY,
  185: M18_T5_ORDER_BY,
  90: M18_T6_LIMIT_TOP,
  186: M18_T6_LIMIT_TOP,
  91: M18_T7_NULL_VALUES,
  187: M18_T7_NULL_VALUES,
  92: M18_T8_COALESCE,
  188: M18_T8_COALESCE,
  93: M18_T9_ARITHMETIC,
  189: M18_T9_ARITHMETIC,
  ...M19_VISUAL_NOTES_BY_ID,
  ...M20_VISUAL_NOTES_BY_ID,
  ...M21_VISUAL_NOTES_BY_ID,
  ...M22_VISUAL_NOTES_BY_ID,
};

function makeNotesOnlyMeta(spec: StructuredVisualNoteTopic): SqlVisualLessonData {
  return {
    module: spec.module,
    moduleTitle: spec.moduleTitle,
    topic: spec.topic,
    kind: 'visual-learning-notes-only',
    audience: 'absolute beginners',
    videoRequired: false,
    sampleDataNotice: spec.sampleDataNotice,
    scenes: [],
  };
}

// Map curriculum IDs (77–93) and sequential IDs (173–189) for SQL Visual Notes
export const SQL_VISUAL_LESSONS_BY_ID: Record<number, SqlVisualLessonData> = {
  77: M17_T1_WHAT_IS_A_DATABASE,
  173: M17_T1_WHAT_IS_A_DATABASE,
  78: M17_T2_TABLES_ROWS_COLUMNS_PK,
  174: M17_T2_TABLES_ROWS_COLUMNS_PK,
  79: M17_T3_WHAT_IS_SQL,
  175: M17_T3_WHAT_IS_SQL,
  80: M17_T4_RELATIONAL_DATABASE,
  176: M17_T4_RELATIONAL_DATABASE,
  81: M17_T5_CONNECTING_POSTGRESQL,
  177: M17_T5_CONNECTING_POSTGRESQL,
  82: M17_T6_SELECT_COLUMNS,
  178: M17_T6_SELECT_COLUMNS,
  83: M17_T7_DISTINCT_UNIQUE,
  179: M17_T7_DISTINCT_UNIQUE,
  84: M17_T8_ALIASES_AS,
  180: M17_T8_ALIASES_AS,
  ...Object.fromEntries(
    Object.entries(STRUCTURED_SQL_VISUAL_NOTES_BY_ID).map(([id, spec]) => [
      Number(id),
      makeNotesOnlyMeta(spec),
    ])
  ),
};

export function getStructuredSqlVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  return STRUCTURED_SQL_VISUAL_NOTES_BY_ID[topicId] || null;
}

export function getSqlVisualLesson(topicId: number): SqlVisualLessonData | null {
  return SQL_VISUAL_LESSONS_BY_ID[topicId] || null;
}

export function hasSqlVisualNotes(topicId: number): boolean {
  return Boolean(SQL_VISUAL_LESSONS_BY_ID[topicId]);
}
