import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

export const M18_T1_WHERE_CLAUSE: StructuredVisualNoteTopic = {
  module: 'M18',
  moduleTitle: 'Filtering, Sorting and Expressions',
  topic: 'WHERE Clause',
  pageCount: 3,
  sampleDataNotice: 'All example order records and dates are illustrative, not real records.',
  pages: [
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 1',
      pageTag: 'PAGE 1 OF 3',
      footerPage: '1 / 3',
      title: 'WHERE Clause',
      subtitle: 'FIND ONLY THE ROWS YOU NEED',
      intro: {
        bodyEn:
          '**WHERE** is a SQL clause that filters rows. Imagine a shop with thousands of orders. Instead of reading every order, you can ask the database to show only the records that meet a condition, such as orders from Patna or orders above a certain amount.',
        bodyHi:
          '**WHERE** ek SQL clause hai jo rows filter karta hai. Socho ek shop mein hazaaron orders hain. Har order padhne ke bajay aap database se sirf wahi records maang sakte hain jo condition poori karein, jaise Patna ke orders ya kisi amount se bade orders.',
      },
      sections: [
        {
          pill: 'How filtering works',
          blocks: [
            {
              type: 'flow',
              items: [
                {
                  title: 'Orders table',
                  bodyEn: 'Start with all saved orders.',
                  bodyHi: 'Sabhi saved orders se start karo.',
                  tone: 'lavender',
                },
                {
                  title: 'WHERE condition',
                  bodyEn: 'Check each row against the rule.',
                  bodyHi: 'Har row ko rule ke against check karo.',
                  tone: 'sky',
                },
                {
                  title: 'Matching rows',
                  bodyEn: 'Return only rows where the rule is TRUE.',
                  bodyHi: 'Sirf wahi rows return karo jahan rule TRUE ho.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
        {
          pill: 'Meet the Orders table',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'city', 'status', 'amount'],
              rows: [
                ['501', 'Patna', 'Delivered', '1200'],
                ['502', 'Delhi', 'Pending', '800'],
                ['503', 'Patna', 'Delivered', '2500'],
                ['504', 'Mumbai', 'Cancelled', '600'],
                ['505', 'Delhi', 'Delivered', '1500'],
              ],
              noteEn: 'Each row is one order. The amount is a number, while city and status contain text.',
              noteHi: 'Har row ek order hai. amount ek number hai, jabki city aur status mein text hai.',
            },
          ],
        },
        {
          pill: 'Filter orders from Patna',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, city, amount\nFROM orders\nWHERE city = 'Patna';`,
              captionEn:
                "**SELECT** chooses the columns. **FROM** names the table. **WHERE city = 'Patna'** keeps rows whose city matches the text exactly.",
              captionHi:
                "**SELECT** columns choose karta hai. **FROM** table ka naam batata hai. **WHERE city = 'Patna'** sirf wahi rows rakhta hai jahan city exactly Patna ho.",
            },
          ],
        },
        {
          pill: 'Output: only matching orders',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'city', 'amount'],
              rows: [
                ['501', 'Patna', '1200'],
                ['503', 'Patna', '2500'],
              ],
              noteEn:
                'Delhi and Mumbai orders are hidden from this result, but they remain safely stored in the original table.',
              noteHi:
                'Delhi aur Mumbai ke orders is result se hide ho gaye hain, par original table mein safely stored rehte hain.',
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 1',
      pageTag: 'PAGE 2 OF 3',
      footerPage: '2 / 3',
      title: 'WHERE Clause',
      subtitle: 'FILTER NUMBERS, DATES AND TEXT',
      intro: {
        bodyEn:
          'A WHERE condition can compare numbers, dates and text. The correct comparison depends on the data type and the business question. SQL does not require you to change the original table to answer a different question.',
        bodyHi:
          'WHERE condition numbers, dates aur text sab compare kar sakti hai. Sahi comparison data type aur business question par depend karta hai. Naye sawal ka jawab dene ke liye original table badalne ki zaroorat nahi hoti.',
      },
      sections: [
        {
          pill: 'Example 1: high-value orders',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, amount\nFROM orders\nWHERE amount >= 1200;`,
              captionEn:
                'The symbol **>=** means greater than or equal to. Orders with amount 1200, 1500 and 2500 match. An order worth 800 does not match.',
              captionHi:
                'Symbol **>=** ka matlab greater than or equal to hota hai. 1200, 1500 aur 2500 wale orders match karte hain; 800 wala match nahi karta.',
            },
          ],
        },
        {
          pill: 'High-value order result',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'amount'],
              rows: [
                ['501', '1200'],
                ['503', '2500'],
                ['505', '1500'],
              ],
              noteEn: 'The order of these rows is not guaranteed unless ORDER BY is also used.',
              noteHi: 'In rows ka order guaranteed nahi hota jab tak ORDER BY bhi use na kiya jaye.',
            },
          ],
        },
        {
          pill: 'Example 2: orders on or after a date',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, order_date\nFROM orders\nWHERE order_date >= DATE '2026-04-03';`,
              captionEn:
                '**DATE** makes the intended date value clear in PostgreSQL. The condition includes 3 April 2026 and later dates. Use the actual date column type for reliable comparisons.',
              captionHi:
                '**DATE** PostgreSQL mein date value ko clear banata hai. Isme 3 April 2026 aur uske baad ki dates include hoti hain. Reliable comparison ke liye proper date column type use karo.',
            },
          ],
        },
        {
          pill: 'Text and numbers are different',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: 'Text values',
                  bodyEn:
                    "Write a text value in single quotes: **WHERE status = 'Delivered'**. This checks a category stored as text.",
                  bodyHi:
                    "Text value single quotes mein likho: **WHERE status = 'Delivered'**. Ye text category check karta hai.",
                  tone: 'sky',
                },
                {
                  title: 'Numeric values',
                  bodyEn:
                    'Write numbers without text quotes: **WHERE amount > 1000**. This compares numeric amounts, not alphabetical text.',
                  bodyHi:
                    'Numbers bina quotes ke likho: **WHERE amount > 1000**. Ye numeric amounts compare karta hai, alphabetical text nahi.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 1',
      pageTag: 'PAGE 3 OF 3',
      footerPage: '3 / 3',
      title: 'WHERE Clause',
      subtitle: 'WRITE ACCURATE BUSINESS FILTERS',
      intro: {
        bodyEn:
          'Data Analysts use WHERE to prepare focused reports: recent orders, one city, high-value customers or pending deliveries. A clear filter makes the result easier to understand and helps avoid reporting the wrong records.',
        bodyHi:
          'Data Analysts focused reports banane ke liye WHERE use karte hain: recent orders, ek city, high-value customers ya pending deliveries. Clear filter se galat records report hone se bachte hain.',
      },
      sections: [
        {
          pill: 'Combine WHERE with sorting',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, city, amount\nFROM orders\nWHERE status = 'Delivered'\nORDER BY amount DESC;`,
              captionEn:
                'First keep only Delivered orders, then sort those matching rows from highest to lowest amount. **ORDER BY** controls the display order; it does not change saved data.',
              captionHi:
                'Pehle sirf Delivered orders rakho, phir un matching rows ko highest se lowest amount tak sort karo. **ORDER BY** sirf display order badalta hai, saved data nahi.',
            },
          ],
        },
        {
          pill: 'Delivered orders, highest amount first',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'city', 'amount'],
              rows: [
                ['503', 'Patna', '2500'],
                ['505', 'Delhi', '1500'],
                ['501', 'Patna', '1200'],
              ],
              noteEn: 'The cancelled and pending orders do not appear because they fail the WHERE condition.',
              noteHi: 'Cancelled aur pending orders show nahi hue kyunki wo WHERE condition fail kar dete hain.',
            },
          ],
        },
        {
          pill: 'Important WHERE rules',
          blocks: [
            {
              type: 'bullets',
              tone: 'amber',
              items: [
                {
                  en: '**Use = for equality:** SQL uses =, not ==, when comparing values in a WHERE condition.',
                  hi: '**Equality ke liye = use karo:** SQL WHERE condition mein = use karta hai, == nahi.',
                },
                {
                  en: '**Use IS NULL for missing values:** WHERE phone = NULL does not find missing phones. Use **WHERE phone IS NULL**.',
                  hi: '**Missing values ke liye IS NULL use karo:** WHERE phone = NULL kaam nahi karta. **WHERE phone IS NULL** use karo.',
                },
                {
                  en: '**Exact text matters:** In PostgreSQL, ordinary text equality can distinguish **Patna** from **patna**. Check data quality before filtering.',
                  hi: '**Exact text zaroori hai:** PostgreSQL mein text equality **Patna** aur **patna** ko alag maanti hai.',
                },
                {
                  en: '**WHERE filters rows:** For conditions on grouped totals, analysts later learn the **HAVING** clause.',
                  hi: '**WHERE rows filter karta hai:** Grouped totals par condition ke liye aage **HAVING** clause use hota hai.',
                },
              ],
            },
          ],
        },
        {
          pill: 'Remember the query workflow',
          blocks: [
            {
              type: 'flow',
              items: [
                { title: 'FROM', bodyEn: 'Read the source table.', bodyHi: 'Source table read karo.', tone: 'lavender' },
                { title: 'WHERE', bodyEn: 'Keep matching rows.', bodyHi: 'Matching rows rakho.', tone: 'sky' },
                { title: 'SELECT', bodyEn: 'Show requested columns.', bodyHi: 'Requested columns dikhao.', tone: 'green' },
                { title: 'ORDER BY', bodyEn: 'Arrange the final result.', bodyHi: 'Final result arrange karo.', tone: 'amber' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const M18_T2_COMPARISON_OPERATORS: StructuredVisualNoteTopic = {
  module: 'M18',
  moduleTitle: 'Filtering, Sorting and Expressions',
  topic: 'Comparison Operators',
  pageCount: 2,
  sampleDataNotice: 'All example order records and amounts are illustrative, not real records.',
  pages: [
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 2',
      pageTag: 'PAGE 1 OF 2',
      footerPage: '1 / 2',
      title: 'Comparison Operators',
      subtitle: 'COMPARE VALUES WITH SIMPLE SYMBOLS',
      intro: {
        bodyEn:
          'Comparison operators tell SQL how to test a value. They answer questions such as "Is this order greater than 1000?" or "Is this status different from Delivered?" The result of a normal comparison is **TRUE** or **FALSE**, or **UNKNOWN** when NULL is involved.',
        bodyHi:
          'Comparison operators SQL ko batate hain value kaise test karni hai — jaise "Kya ye order 1000 se bada hai?" ya "Kya status Delivered se alag hai?" Normal comparison ka result **TRUE**, **FALSE**, ya NULL hone par **UNKNOWN** hota hai.',
      },
      sections: [
        {
          pill: 'Six comparison operators to remember',
          blocks: [
            {
              type: 'table',
              headers: ['Operator', 'Meaning', 'Example condition'],
              rows: [
                ['=', 'Equal to', 'amount = 1000'],
                ['<>', 'Not equal to', "status <> 'Pending'"],
                ['>', 'Greater than', 'amount > 1000'],
                ['<', 'Less than', 'amount < 1000'],
                ['>=', 'Greater than or equal', 'amount >= 1000'],
                ['<=', 'Less than or equal', 'amount <= 1000'],
              ],
              noteEn:
                'PostgreSQL also accepts != for not equal, but <> is the standard SQL form. The equality operator is =, not ==.',
              noteHi:
                'PostgreSQL not equal ke liye != bhi accept karta hai, par <> standard SQL form hai. Equality operator = hai, == nahi.',
            },
          ],
        },
        {
          pill: 'Example amounts',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'amount'],
              rows: [
                ['501', '800'],
                ['502', '1000'],
                ['503', '1250'],
                ['504', '2000'],
              ],
              noteEn: 'Look at the boundary value 1000: it is excluded by > 1000, but included by >= 1000.',
              noteHi: 'Boundary value 1000 par dhyan do: > 1000 mein ye exclude hoti hai, par >= 1000 mein include hoti hai.',
            },
          ],
        },
        {
          pill: 'Greater than versus greater than or equal',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, amount\nFROM orders\nWHERE amount >= 1000;`,
              captionEn:
                '**Output:** orders 502 (1000), 503 (1250), and 504 (2000). The row with amount 800 is excluded. The equal sign is what includes the boundary value.',
              captionHi:
                '**Output:** orders 502 (1000), 503 (1250), aur 504 (2000). 800 wali row exclude ho jati hai. Equal sign boundary value ko include karta hai.',
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 2',
      pageTag: 'PAGE 2 OF 2',
      footerPage: '2 / 2',
      title: 'Comparison Operators',
      subtitle: 'COMPARE TEXT, DATES AND MISSING VALUES',
      intro: {
        bodyEn:
          'The same operators can compare different kinds of data, but you must use suitable values. Numbers are compared by size; dates by time order; and text according to the database collation and comparison rules.',
        bodyHi:
          'Yahi operators alag-alag data types compare kar sakte hain. Numbers size ke hisaab se, dates time order ke hisaab se, aur text database collation rules ke hisaab se compare hota hai.',
      },
      sections: [
        {
          pill: 'Compare text values',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, status\nFROM orders\nWHERE status <> 'Cancelled';`,
              captionEn:
                '**<>** means "not equal." This returns orders with a non-NULL status different from Cancelled. If status is NULL, the comparison is UNKNOWN, so the row is not returned by WHERE.',
              captionHi:
                '**<>** ka matlab "not equal" hai. Ye non-NULL status jo Cancelled nahi hain unhe return karta hai. Agar status NULL ho, to comparison UNKNOWN hota hai aur row return nahi hoti.',
            },
          ],
        },
        {
          pill: 'Compare dates',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, order_date\nFROM orders\nWHERE order_date < DATE '2026-05-01';`,
              captionEn:
                'This selects orders before 1 May 2026. Dates should be stored in proper DATE or TIMESTAMP columns, not as random text formats.',
              captionHi:
                'Ye 1 May 2026 se pehle ke orders select karta hai. Dates ko proper DATE ya TIMESTAMP columns mein store karna chahiye, random text format mein nahi.',
            },
          ],
        },
        {
          pill: 'Be careful with boundary values',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: 'amount > 1000',
                  bodyEn: 'The value **1000 is excluded**. Only amounts strictly larger than 1000 match.',
                  bodyHi: 'Value **1000 exclude** hoti hai. Sirf 1000 se strictly bade amounts match karte hain.',
                  tone: 'sky',
                },
                {
                  title: 'amount >= 1000',
                  bodyEn: 'The value **1000 is included**. This is useful for a "1000 or more" business rule.',
                  bodyHi: 'Value **1000 include** hoti hai. Ye "1000 ya usse zyada" business rule ke liye useful hai.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
        {
          pill: 'Common comparison mistakes',
          blocks: [
            {
              type: 'bullets',
              tone: 'amber',
              items: [
                {
                  en: '**NULL is not an ordinary value:** use IS NULL and IS NOT NULL, not = NULL or <> NULL.',
                  hi: '**NULL ordinary value nahi hai:** IS NULL aur IS NOT NULL use karo, = NULL ya <> NULL nahi.',
                },
                {
                  en: '**Check data types:** a numeric amount stored as text may produce incorrect ordering or comparisons.',
                  hi: '**Data types check karo:** agar numeric amount text mein store ho to galat ordering ya comparison ho sakta hai.',
                },
                {
                  en: '**Check the business wording:** "more than 1000" means > 1000; "at least 1000" means >= 1000.',
                  hi: '**Business wording par dhyan do:** "more than 1000" matlab > 1000; "at least 1000" matlab >= 1000.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const M18_T3_AND_OR_NOT: StructuredVisualNoteTopic = {
  module: 'M18',
  moduleTitle: 'Filtering, Sorting and Expressions',
  topic: 'AND, OR and NOT',
  pageCount: 3,
  sampleDataNotice: 'All example order records are illustrative, not real records.',
  pages: [
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 3',
      pageTag: 'PAGE 1 OF 3',
      footerPage: '1 / 3',
      title: 'AND, OR and NOT',
      subtitle: 'COMBINE MORE THAN ONE CONDITION',
      intro: {
        bodyEn:
          'Sometimes one WHERE condition is not enough. **AND**, **OR** and **NOT** are logical operators that help you combine or reverse conditions. They are important when a business question contains words such as "both," "either," or "not."',
        bodyHi:
          'Kabhi-kabhi ek WHERE condition kaafi nahi hoti. **AND**, **OR** aur **NOT** logical operators hain jo conditions ko combine ya reverse karte hain — jab business question mein "both", "either", ya "not" aaye.',
      },
      sections: [
        {
          pill: 'Three logical ideas',
          blocks: [
            {
              type: 'flow',
              items: [
                { title: 'AND', bodyEn: 'Both conditions must be TRUE.', bodyHi: 'Dono conditions TRUE honi chahiye.', tone: 'lavender' },
                { title: 'OR', bodyEn: 'At least one condition must be TRUE.', bodyHi: 'Kam se kam ek condition TRUE honi chahiye.', tone: 'sky' },
                { title: 'NOT', bodyEn: 'Reverse TRUE and FALSE.', bodyHi: 'TRUE aur FALSE ko reverse karta hai.', tone: 'green' },
              ],
            },
          ],
        },
        {
          pill: 'Small order list',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'city', 'status', 'amount'],
              rows: [
                ['501', 'Patna', 'Delivered', '1200'],
                ['502', 'Delhi', 'Pending', '800'],
                ['503', 'Patna', 'Pending', '2500'],
                ['504', 'Delhi', 'Delivered', '1500'],
              ],
              noteEn: 'We will use these same four orders to understand how the operators behave.',
              noteHi: 'Hum inhi chaar orders ka use karke operators ka behavior samjhenge.',
            },
          ],
        },
        {
          pill: 'AND: both rules must match',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, city, amount\nFROM orders\nWHERE city = 'Patna' AND amount > 1500;`,
              captionEn:
                'Order **503** is the only match: its city is Patna and its amount is 2500. Order 501 is from Patna, but 1200 is not greater than 1500.',
              captionHi:
                'Sirf order **503** match karta hai: iski city Patna hai aur amount 2500 hai. Order 501 Patna se hai par 1200, 1500 se bada nahi.',
            },
          ],
        },
        {
          pill: 'What AND does',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: 'Condition 1',
                  bodyEn: 'The order must belong to **Patna**.',
                  bodyHi: 'Order **Patna** ka hona chahiye.',
                  tone: 'sky',
                },
                {
                  title: 'Condition 2',
                  bodyEn: 'The amount must be **above 1500**. Both conditions must pass.',
                  bodyHi: 'Amount **1500 se zyada** hona chahiye. Dono conditions pass honi chahiye.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 3',
      pageTag: 'PAGE 2 OF 3',
      footerPage: '2 / 3',
      title: 'AND, OR and NOT',
      subtitle: 'OR FINDS ALTERNATIVES; NOT EXCLUDES',
      intro: {
        bodyEn:
          'Use **OR** when either condition is acceptable. Use **NOT** when you want to exclude records matching a condition. Be careful: a row can satisfy both sides of OR and still appears only once in a simple SELECT from one table.',
        bodyHi:
          'Jab koi bhi ek condition chale to **OR** use karo. Jab matching records exclude karne ho to **NOT** use karo. Agar koi row OR ki dono sides satisfy kare tab bhi wo result mein ek hi baar aati hai.',
      },
      sections: [
        {
          pill: 'OR: match either condition',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, city, status\nFROM orders\nWHERE city = 'Patna' OR status = 'Pending';`,
              captionEn: 'Matching orders are **501** (Patna), **502** (Pending), and **503** (both). Order 504 matches neither rule.',
              captionHi: 'Matching orders hain **501** (Patna), **502** (Pending), aur **503** (dono). Order 504 koi bhi rule match nahi karta.',
            },
          ],
        },
        {
          pill: 'OR result',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'city', 'status'],
              rows: [
                ['501', 'Patna', 'Delivered'],
                ['502', 'Delhi', 'Pending'],
                ['503', 'Patna', 'Pending'],
              ],
              noteEn: 'A single row is not duplicated just because both sides of OR are TRUE.',
              noteHi: 'Ek row duplicate nahi hoti sirf isliye ki OR ki dono sides TRUE hain.',
            },
          ],
        },
        {
          pill: 'NOT: reverse a condition',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, status\nFROM orders\nWHERE NOT (status = 'Pending');`,
              captionEn:
                'This keeps the Delivered rows, orders **501** and **504**. The parentheses make the condition easy to read. If status is NULL, NOT UNKNOWN remains UNKNOWN.',
              captionHi:
                'Ye Delivered rows (orders **501** aur **504**) rakhta hai. Parentheses condition ko readable banate hain. Agar status NULL ho, to NOT UNKNOWN bhi UNKNOWN hi rehta hai.',
            },
          ],
        },
        {
          pill: 'Logical truth table (without NULL)',
          blocks: [
            {
              type: 'table',
              headers: ['A', 'B', 'A AND B', 'A OR B'],
              rows: [
                ['TRUE', 'TRUE', 'TRUE', 'TRUE'],
                ['TRUE', 'FALSE', 'FALSE', 'TRUE'],
                ['FALSE', 'TRUE', 'FALSE', 'TRUE'],
                ['FALSE', 'FALSE', 'FALSE', 'FALSE'],
              ],
              noteEn: 'NOT TRUE becomes FALSE; NOT FALSE becomes TRUE. NULL adds a third result called UNKNOWN.',
              noteHi: 'NOT TRUE, FALSE ban jata hai; NOT FALSE, TRUE ban jata hai. NULL teesra result UNKNOWN add karta hai.',
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 3',
      pageTag: 'PAGE 3 OF 3',
      footerPage: '3 / 3',
      title: 'AND, OR and NOT',
      subtitle: 'USE PARENTHESES TO AVOID WRONG FILTERS',
      intro: {
        bodyEn:
          'SQL has an operator precedence order: **NOT** is evaluated before **AND**, and **AND** before **OR**. Parentheses let you show your intended business logic clearly, just like in arithmetic.',
        bodyHi:
          'SQL ka operator precedence order hota hai: **NOT** pehle, phir **AND**, aur sabse baad mein **OR**. Parentheses aapki exact business logic clear dikhate hain, bilkul maths ki tarah.',
      },
      sections: [
        {
          pill: 'Example: correct grouping',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, city, status\nFROM orders\nWHERE (city = 'Patna' OR city = 'Delhi')\n  AND status = 'Delivered';`,
              captionEn: 'First check whether the city is Patna or Delhi. Then require Delivered status. Only orders **501** and **504** match.',
              captionHi: 'Pehle check karo ki city Patna ya Delhi hai, phir Delivered status require karo. Sirf orders **501** aur **504** match karte hain.',
            },
          ],
        },
        {
          pill: 'Removing parentheses changes the meaning',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, city, status\nFROM orders\nWHERE city = 'Patna'\n   OR city = 'Delhi' AND status = 'Delivered';`,
              captionEn:
                'Because AND has higher precedence, this means **Patna OR (Delhi AND Delivered)**. It returns **501, 503 and 504**, including Patna order 503 even though it is Pending.',
              captionHi:
                'Kyunki AND ki precedence zyada hai, iska matlab **Patna OR (Delhi AND Delivered)** ho jata hai. Ye **501, 503 aur 504** return karta hai, jisme Pending order 503 bhi aa jata hai.',
            },
          ],
        },
        {
          pill: 'The difference is important',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: 'With parentheses',
                  bodyEn: '**501, 504** - only Delivered orders in either of the two cities.',
                  bodyHi: '**501, 504** - dono cities ke sirf Delivered orders.',
                  tone: 'sky',
                },
                {
                  title: 'Without parentheses',
                  bodyEn: '**501, 503, 504** - every Patna order plus Delivered Delhi orders.',
                  bodyHi: '**501, 503, 504** - Patna ke saare orders + Delhi ke Delivered orders.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
        {
          pill: 'Practical rules',
          blocks: [
            {
              type: 'bullets',
              tone: 'amber',
              items: [
                {
                  en: '**Write the business rule in plain English** before building a complex WHERE clause.',
                  hi: 'Complex WHERE clause likhne se pehle **business rule ko simple words mein likho**.',
                },
                {
                  en: '**Use parentheses** whenever AND and OR appear together; this makes code easier to review.',
                  hi: 'Jab bhi AND aur OR saath aayein, **parentheses zaroor use karo**.',
                },
                {
                  en: '**Remember UNKNOWN:** SQL conditions involving NULL may not behave like ordinary TRUE/FALSE logic. WHERE keeps only rows whose final condition is TRUE.',
                  hi: '**UNKNOWN yaad rakho:** NULL wali conditions ordinary TRUE/FALSE ki tarah behave nahi karti; WHERE sirf TRUE rows rakhta hai.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const M18_T4_IN_BETWEEN_LIKE: StructuredVisualNoteTopic = {
  module: 'M18',
  moduleTitle: 'Filtering, Sorting and Expressions',
  topic: 'IN, BETWEEN and LIKE',
  pageCount: 3,
  sampleDataNotice: 'All example customer, product and order records are illustrative, not real records.',
  pages: [
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 4',
      pageTag: 'PAGE 1 OF 3',
      footerPage: '1 / 3',
      title: 'IN, BETWEEN and LIKE',
      subtitle: 'MATCH A LIST OF ALLOWED VALUES',
      intro: {
        bodyEn:
          '**IN**, **BETWEEN** and **LIKE** are useful SQL filters. IN checks membership in a list; BETWEEN checks an inclusive range; and LIKE searches text patterns. Each solves a different kind of business question.',
        bodyHi:
          '**IN**, **BETWEEN** aur **LIKE** useful SQL filters hain. IN list mein match check karta hai; BETWEEN inclusive range check karta hai; aur LIKE text patterns search karta hai.',
      },
      sections: [
        {
          pill: 'Example Customers table',
          blocks: [
            {
              type: 'table',
              headers: ['customer_id', 'name', 'city'],
              rows: [
                ['101', 'Asha', 'Patna'],
                ['102', 'Ravi', 'Delhi'],
                ['103', 'Neha', 'Mumbai'],
                ['104', 'Aman', 'Patna'],
                ['105', 'Sara', 'Pune'],
              ],
              noteEn: 'The city field contains repeated text values. An analyst may need customers from several cities.',
              noteHi: 'city field mein repeated text values hain. Analyst ko kai cities ke customers chahiye ho sakte hain.',
            },
          ],
        },
        {
          pill: 'IN: choose several cities',
          blocks: [
            {
              type: 'sql',
              code: `SELECT name, city\nFROM customers\nWHERE city IN ('Patna', 'Delhi');`,
              captionEn:
                'IN checks whether the city is one of the values inside parentheses. The matching names are **Asha, Ravi and Aman**.',
              captionHi:
                'IN check karta hai ki city parentheses ke andar di gayi values mein se ek hai ya nahi. Matching names hain **Asha, Ravi aur Aman**.',
            },
          ],
        },
        {
          pill: 'IN is a cleaner way to write OR',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: 'With OR',
                  bodyEn: "**city = 'Patna' OR city = 'Delhi'** works, but gets long with many cities.",
                  bodyHi: "**city = 'Patna' OR city = 'Delhi'** kaam karta hai, par zyada cities hone par lamba ho jata hai.",
                  tone: 'sky',
                },
                {
                  title: 'With IN',
                  bodyEn: "**city IN ('Patna', 'Delhi')** expresses the same list clearly.",
                  bodyHi: "**city IN ('Patna', 'Delhi')** wahi list bahut clean tarike se likhta hai.",
                  tone: 'green',
                },
              ],
            },
          ],
        },
        {
          pill: 'Remember when using IN',
          blocks: [
            {
              type: 'bullets',
              tone: 'lavender',
              items: [
                {
                  en: 'Use commas between values and single quotes around text.',
                  hi: 'Values ke beech commas aur text ke around single quotes use karo.',
                },
                {
                  en: '**NOT IN** excludes listed values, but a NULL in the list can make results surprising. Check NULL handling before using NOT IN on unknown data.',
                  hi: '**NOT IN** listed values ko exclude karta hai, par list mein NULL hone par surprising result aa sakta hai.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 4',
      pageTag: 'PAGE 2 OF 3',
      footerPage: '2 / 3',
      title: 'IN, BETWEEN and LIKE',
      subtitle: 'CHECK INCLUSIVE NUMBER AND DATE RANGES',
      intro: {
        bodyEn:
          '**BETWEEN** checks whether a value falls between two endpoints, **including both endpoints**. It is often used for prices, ages, scores and dates. Think of it as a shorter way to write "greater than or equal to the start AND less than or equal to the end."',
        bodyHi:
          '**BETWEEN** check karta hai ki value do endpoints ke beech aati hai ya nahi, **dono endpoints ko include karke**. Ye prices, ages, scores aur dates ke liye bahut use hota hai.',
      },
      sections: [
        {
          pill: 'Product prices',
          blocks: [
            {
              type: 'table',
              headers: ['product_id', 'product', 'price'],
              rows: [
                ['11', 'Pen', '20'],
                ['12', 'Notebook', '100'],
                ['13', 'Backpack', '500'],
                ['14', 'Desk Lamp', '900'],
                ['15', 'Chair', '1500'],
              ],
              noteEn: 'The price values are numbers. We want products costing from 100 through 900.',
              noteHi: 'price values numbers hain. Hamein 100 se 900 tak ke products chahiye.',
            },
          ],
        },
        {
          pill: 'BETWEEN: include both ends',
          blocks: [
            {
              type: 'sql',
              code: `SELECT product, price\nFROM products\nWHERE price BETWEEN 100 AND 900;`,
              captionEn:
                '**Output:** Notebook (100), Backpack (500) and Desk Lamp (900). The values 100 and 900 are included. Pen (20) and Chair (1500) are excluded.',
              captionHi:
                '**Output:** Notebook (100), Backpack (500) aur Desk Lamp (900). 100 aur 900 dono include hain; Pen (20) aur Chair (1500) exclude hain.',
            },
          ],
        },
        {
          pill: 'BETWEEN for dates',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, order_date\nFROM orders\nWHERE order_date BETWEEN DATE '2026-04-01'\n                     AND DATE '2026-04-07';`,
              captionEn:
                'This works naturally when order_date is a DATE column. For a TIMESTAMP column, an inclusive end date at midnight can exclude later times on that date.',
              captionHi:
                'DATE column par ye bilkul smoothly kaam karta hai. TIMESTAMP column ke liye midnight end date us din ke baad ke times ko chhod sakti hai.',
            },
          ],
        },
        {
          pill: 'Date and timestamp best practice',
          blocks: [
            {
              type: 'bullets',
              tone: 'amber',
              items: [
                {
                  en: "For a full week of TIMESTAMP values, prefer **order_time >= TIMESTAMP '2026-04-01 00:00:00'** and **order_time < TIMESTAMP '2026-04-08 00:00:00'**.",
                  hi: "Poore week ke TIMESTAMP values ke liye **>= start** aur **< next day** pattern prefer karo.",
                },
                {
                  en: 'Check that the start value is not larger than the end value. BETWEEN is inclusive, not exclusive.',
                  hi: 'Dhyan rakho start value end value se badi na ho. BETWEEN inclusive hota hai.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 4',
      pageTag: 'PAGE 3 OF 3',
      footerPage: '3 / 3',
      title: 'IN, BETWEEN and LIKE',
      subtitle: 'FIND TEXT PATTERNS WITH LIKE',
      intro: {
        bodyEn:
          '**LIKE** checks whether text follows a pattern. A percent sign **%** means any number of characters, including zero. An underscore **_** means exactly one character. PostgreSQL also offers **ILIKE** for case-insensitive pattern matching.',
        bodyHi:
          '**LIKE** check karta hai ki text kisi pattern ko follow karta hai ya nahi. **%** ka matlab kitne bhi characters (0 bhi), aur **_** ka matlab exact ek character. PostgreSQL case-insensitive search ke liye **ILIKE** deta hai.',
      },
      sections: [
        {
          pill: 'Common LIKE patterns',
          blocks: [
            {
              type: 'table',
              headers: ['Pattern', 'Meaning', 'Example match'],
              rows: [
                ["'A%'", 'Starts with A', 'Asha'],
                ["'%pur'", 'Ends with pur', 'Jaipur'],
                ["'%an%'", 'Contains an', 'Aman'],
                ["'_avi'", 'One character + avi', 'Ravi'],
              ],
              noteEn: 'LIKE normally compares patterns case-sensitively in PostgreSQL. A single underscore matches one character, not any number.',
              noteHi: 'PostgreSQL mein LIKE case-sensitive hota hai. Ek underscore sirf ek character match karta hai.',
            },
          ],
        },
        {
          pill: 'Find names starting with A',
          blocks: [
            {
              type: 'sql',
              code: `SELECT customer_id, name\nFROM customers\nWHERE name LIKE 'A%';`,
              captionEn: '**Output:** Asha and Aman. Both names start with A. The % allows any remaining letters.',
              captionHi: '**Output:** Asha aur Aman. Dono naam A se start hote hain. % baaki letters allow karta hai.',
            },
          ],
        },
        {
          pill: 'Case-insensitive matching in PostgreSQL',
          blocks: [
            {
              type: 'sql',
              code: `SELECT customer_id, name\nFROM customers\nWHERE name ILIKE 'a%';`,
              captionEn:
                'ILIKE also matches names beginning with uppercase A, such as Asha and Aman. ILIKE is PostgreSQL-specific, not standard SQL.',
              captionHi:
                'ILIKE uppercase A se start hone wale naam (Asha, Aman) bhi match karta hai. ILIKE PostgreSQL-specific hai.',
            },
          ],
        },
        {
          pill: 'Choose the right filter',
          blocks: [
            {
              type: 'bullets',
              tone: 'lavender',
              items: [
                {
                  en: '**IN** is best for a known list of exact values. **BETWEEN** is best for inclusive ranges. **LIKE** is best for text patterns.',
                  hi: '**IN** exact values ki list ke liye, **BETWEEN** inclusive ranges ke liye, aur **LIKE** text patterns ke liye best hai.',
                },
                {
                  en: 'For exact text matches, use **=** instead of LIKE. Pattern searches can be slower on large tables, especially when the pattern begins with %.',
                  hi: 'Exact text match ke liye LIKE ke bajay **=** use karo. % se shuru hone wale patterns bade tables par slow ho sakte hain.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const M18_T5_ORDER_BY: StructuredVisualNoteTopic = {
  module: 'M18',
  moduleTitle: 'Filtering, Sorting and Expressions',
  topic: 'ORDER BY and Sorting Results',
  pageCount: 2,
  sampleDataNotice: 'All example sales and customer records are illustrative, not real records.',
  pages: [
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 5',
      pageTag: 'PAGE 1 OF 2',
      footerPage: '1 / 2',
      title: 'ORDER BY and Sorting Results',
      subtitle: 'CONTROL THE ORDER OF QUERY RESULTS',
      intro: {
        bodyEn:
          '**ORDER BY** sorts the rows returned by a query. Analysts use it to show highest sales first, oldest orders first or customers in alphabetical order. Without ORDER BY, SQL does not promise a particular result order, even if the table seems to appear sorted.',
        bodyHi:
          '**ORDER BY** query se aane wali rows ko sort karta hai — jaise highest sales pehle, oldest orders pehle ya alphabetical order. ORDER BY ke bina SQL kisi fixed order ki guarantee nahi deta.',
      },
      sections: [
        {
          pill: 'Example sales data',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'customer', 'amount'],
              rows: [
                ['601', 'Asha', '1200'],
                ['602', 'Ravi', '800'],
                ['603', 'Neha', '2500'],
                ['604', 'Aman', '1500'],
              ],
              noteEn: 'This is the example input. We want to see the largest amounts at the top.',
              noteHi: 'Ye example input hai. Hum sabse bade amounts top par dekhna chahte hain.',
            },
          ],
        },
        {
          pill: 'Sort amounts from highest to lowest',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, customer, amount\nFROM orders\nORDER BY amount DESC;`,
              captionEn:
                '**DESC** means descending order: large numbers before small numbers. **ASC** means ascending order: small numbers before large numbers, and is the default.',
              captionHi:
                '**DESC** matlab descending (bade se chhota). **ASC** matlab ascending (chhote se bada), aur yahi default hota hai.',
            },
          ],
        },
        {
          pill: 'Result: amount DESC',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'customer', 'amount'],
              rows: [
                ['603', 'Neha', '2500'],
                ['604', 'Aman', '1500'],
                ['601', 'Asha', '1200'],
                ['602', 'Ravi', '800'],
              ],
              noteEn: 'ORDER BY changes the order of displayed rows; it does not rewrite the original table.',
              noteHi: 'ORDER BY sirf displayed rows ka order badalta hai; original table rewrite nahi karta.',
            },
          ],
        },
        {
          pill: 'ASC versus DESC',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: 'ASC: low to high',
                  bodyEn: 'Numbers: 800, 1200, 1500, 2500. Text usually sorts from A to Z according to the collation.',
                  bodyHi: 'Numbers: 800, 1200, 1500, 2500. Text A se Z sort hota hai.',
                  tone: 'sky',
                },
                {
                  title: 'DESC: high to low',
                  bodyEn: 'Numbers: 2500, 1500, 1200, 800. Text usually sorts from Z to A according to the collation.',
                  bodyHi: 'Numbers: 2500, 1500, 1200, 800. Text Z se A sort hota hai.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 5',
      pageTag: 'PAGE 2 OF 2',
      footerPage: '2 / 2',
      title: 'ORDER BY and Sorting Results',
      subtitle: 'SORT BY MORE THAN ONE COLUMN',
      intro: {
        bodyEn:
          'When several rows share the same value, SQL can use a second sorting column to break the tie. This is important in dashboards, ranked reports and pagination, where analysts need predictable results.',
        bodyHi:
          'Jab kai rows mein same value ho, to SQL tie break karne ke liye second sorting column use karta hai. Dashboards, ranked reports aur pagination ke liye ye bahut zaroori hai.',
      },
      sections: [
        {
          pill: 'First by city, then by sales',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, city, amount\nFROM orders\nORDER BY city ASC, amount DESC;`,
              captionEn:
                'SQL sorts cities alphabetically first. Inside each city, higher amounts appear before lower amounts. This is called multi-column sorting.',
              captionHi:
                'SQL pehle cities ko alphabetically sort karta hai, phir har city ke andar bade amounts upar dikhata hai. Ise multi-column sorting kehte hain.',
            },
          ],
        },
        {
          pill: 'Result: two sorting levels',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'city', 'amount'],
              rows: [
                ['502', 'Delhi', '1500'],
                ['504', 'Delhi', '800'],
                ['503', 'Patna', '2500'],
                ['501', 'Patna', '1200'],
              ],
              noteEn: 'The two Delhi rows appear together, followed by the two Patna rows. Within each city, amounts are descending.',
              noteHi: 'Delhi ki dono rows saath aati hain, phir Patna ki dono rows. Har city ke andar amount descending hai.',
            },
          ],
        },
        {
          pill: 'Sort missing values explicitly in PostgreSQL',
          blocks: [
            {
              type: 'sql',
              code: `SELECT customer, score\nFROM customers\nORDER BY score DESC NULLS LAST;`,
              captionEn:
                '**NULLS LAST** places missing scores at the bottom. PostgreSQL also supports **NULLS FIRST**. This makes missing-value placement clear and intentional.',
              captionHi:
                '**NULLS LAST** missing scores ko bottom par rakhta hai. PostgreSQL **NULLS FIRST** bhi support karta hai.',
            },
          ],
        },
        {
          pill: 'Sorting rules for reliable reports',
          blocks: [
            {
              type: 'bullets',
              tone: 'amber',
              items: [
                {
                  en: '**ORDER BY** appears after WHERE in a typical SELECT query.',
                  hi: 'Typical SELECT query mein **ORDER BY**, WHERE ke baad aata hai.',
                },
                {
                  en: 'For a consistent order when amounts are tied, add a unique column: **ORDER BY amount DESC, order_id ASC**.',
                  hi: 'Tie hone par consistent order ke liye unique column add karo: **ORDER BY amount DESC, order_id ASC**.',
                },
                {
                  en: 'You can sort by a selected alias, for example **SELECT amount * 2 AS doubled_amount ... ORDER BY doubled_amount DESC**.',
                  hi: 'Aap selected alias par bhi sort kar sakte hain, jaise **ORDER BY doubled_amount DESC**.',
                },
                {
                  en: 'Sorting large results can require work; filter unnecessary rows and columns when possible.',
                  hi: 'Bade results sort karne mein time lagta hai; pehle unnecessary rows aur columns filter karo.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
