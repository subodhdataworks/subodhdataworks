import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

export const M18_T6_LIMIT_TOP: StructuredVisualNoteTopic = {
  module: 'M18',
  moduleTitle: 'Filtering, Sorting and Expressions',
  topic: 'LIMIT and TOP Concepts',
  pageCount: 2,
  sampleDataNotice: 'All example order records and amounts are illustrative, not real records.',
  pages: [
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 6',
      pageTag: 'PAGE 1 OF 2',
      footerPage: '1 / 2',
      title: 'LIMIT and TOP Concepts',
      subtitle: 'RETURN ONLY THE FIRST FEW ROWS',
      intro: {
        bodyEn:
          'Sometimes an analyst needs only a small part of a large result, such as the five biggest orders. **LIMIT** controls how many rows a PostgreSQL query returns. But to choose which rows count as "top," you must first sort them with **ORDER BY**.',
        bodyHi:
          'Kabhi-kabhi analyst ko bade result ka sirf chhota hissa chahiye hota hai, jaise top 5 orders. **LIMIT** control karta hai ki PostgreSQL query kitni rows return karegi — par "top" rows choose karne ke liye pehle **ORDER BY** se sort karna zaroori hai.',
      },
      sections: [
        {
          pill: 'Example order amounts',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'amount'],
              rows: [
                ['701', '800'],
                ['702', '2200'],
                ['703', '1500'],
                ['704', '900'],
                ['705', '3000'],
                ['706', '1200'],
              ],
              noteEn: 'Six orders exist, but the manager wants the three highest amounts.',
              noteHi: 'Chhah orders hain, par manager ko sirf teen sabse bade amounts chahiye.',
            },
          ],
        },
        {
          pill: 'Top three amounts in PostgreSQL',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, amount\nFROM orders\nORDER BY amount DESC, order_id ASC\nLIMIT 3;`,
              captionEn:
                '**ORDER BY amount DESC** places larger amounts first. **LIMIT 3** returns only the first three rows. The order_id tie-breaker makes the order stable when amounts are equal.',
              captionHi:
                '**ORDER BY amount DESC** bade amounts upar rakhta hai. **LIMIT 3** sirf pehli teen rows return karta hai. order_id tie-breaker equal amounts mein order stable rakhta hai.',
            },
          ],
        },
        {
          pill: 'Result: three highest orders',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'amount'],
              rows: [
                ['705', '3000'],
                ['702', '2200'],
                ['703', '1500'],
              ],
              noteEn: 'The other orders still exist in the database; LIMIT only reduces the number of rows returned.',
              noteHi: 'Baaki orders database mein abhi bhi maujood hain; LIMIT sirf returned rows ki count kam karta hai.',
            },
          ],
        },
        {
          pill: 'How Top-N queries work',
          blocks: [
            {
              type: 'flow',
              items: [
                { title: 'Read rows', bodyEn: 'Start with the available orders.', bodyHi: 'Available orders se start karo.', tone: 'lavender' },
                { title: 'Sort', bodyEn: 'Put the largest amounts first.', bodyHi: 'Sabse bade amounts pehle rakho.', tone: 'sky' },
                { title: 'LIMIT 3', bodyEn: 'Return the first three rows.', bodyHi: 'Pehli teen rows return karo.', tone: 'green' },
              ],
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 6',
      pageTag: 'PAGE 2 OF 2',
      footerPage: '2 / 2',
      title: 'LIMIT and TOP Concepts',
      subtitle: 'SQL DIALECTS AND PAGINATION',
      intro: {
        bodyEn:
          'Different SQL systems use different syntax for limiting results. PostgreSQL supports **LIMIT**; Microsoft SQL Server commonly uses **TOP**; and the SQL standard also offers **FETCH FIRST**. The goal is similar, but the commands are not interchangeable everywhere.',
        bodyHi:
          'Alag-alag SQL systems mein syntax thoda alag hota hai: PostgreSQL **LIMIT** support karta hai, SQL Server **TOP**, aur SQL standard **FETCH FIRST**. Goal ek hi hai, par command dialect par depend karta hai.',
      },
      sections: [
        {
          pill: 'Compare common Top-N syntax',
          blocks: [
            {
              type: 'table',
              headers: ['Database / style', 'Example'],
              rows: [
                ['PostgreSQL / MySQL', 'ORDER BY amount DESC LIMIT 3'],
                ['SQL Server', 'SELECT TOP (3) ... ORDER BY amount DESC'],
                ['Standard SQL', 'ORDER BY amount DESC FETCH FIRST 3 ROWS ONLY'],
              ],
              noteEn:
                'These are syntax patterns, not complete equivalent queries in every database. Check the database dialect you are using.',
              noteHi: 'Ye syntax patterns hain; hamesha apne database dialect ke hisaab se syntax check karo.',
            },
          ],
        },
        {
          pill: 'Skip rows with OFFSET (PostgreSQL)',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, amount\nFROM orders\nORDER BY amount DESC, order_id ASC\nLIMIT 3 OFFSET 3;`,
              captionEn:
                '**OFFSET 3** skips the first three sorted rows and returns up to the next three. This can support simple pagination, such as showing page 2 of a result.',
              captionHi:
                '**OFFSET 3** pehli teen sorted rows skip karta hai aur agli teen return karta hai. Ye simple pagination (jaise page 2) ke liye useful hai.',
            },
          ],
        },
        {
          pill: 'LIMIT without ORDER BY is not Top-N',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: 'Unreliable',
                  bodyEn:
                    '**SELECT * FROM orders LIMIT 3;** returns three rows, but not necessarily the three highest or oldest orders.',
                  bodyHi:
                    '**SELECT * FROM orders LIMIT 3;** koi bhi teen rows de dega, zaroori nahi ki wo top 3 hon.',
                  tone: 'sky',
                },
                {
                  title: 'Reliable goal',
                  bodyEn:
                    '**ORDER BY amount DESC LIMIT 3** asks for the three highest amounts in a defined order.',
                  bodyHi:
                    '**ORDER BY amount DESC LIMIT 3** defined order mein teen highest amounts laata hai.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
        {
          pill: 'Professional pagination tips',
          blocks: [
            {
              type: 'bullets',
              tone: 'amber',
              items: [
                {
                  en: 'Add a **unique tie-breaker** to ORDER BY so rows do not change position unexpectedly.',
                  hi: 'ORDER BY mein ek **unique tie-breaker** add karo taaki rows ki position shift na ho.',
                },
                {
                  en: '**OFFSET pagination** can become slower on very large datasets; keyset pagination is often better for large, frequently changing tables.',
                  hi: 'Bahut bade tables par **OFFSET pagination** slow ho sakta hai; wahan keyset pagination behtar hota hai.',
                },
                {
                  en: '**TOP and LIMIT are not a substitute for WHERE:** use WHERE to select matching records, then ORDER BY and LIMIT to choose the top rows.',
                  hi: '**TOP aur LIMIT, WHERE ka substitute nahi hain:** pehle WHERE se filter karo, phir ORDER BY aur LIMIT lagao.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const M18_T7_NULL_VALUES: StructuredVisualNoteTopic = {
  module: 'M18',
  moduleTitle: 'Filtering, Sorting and Expressions',
  topic: 'Working with NULL Values',
  pageCount: 3,
  sampleDataNotice: 'All example customer phone numbers and discount values are illustrative, not real records.',
  pages: [
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 7',
      pageTag: 'PAGE 1 OF 3',
      footerPage: '1 / 3',
      title: 'Working with NULL Values',
      subtitle: 'UNDERSTAND MISSING AND UNKNOWN DATA',
      intro: {
        bodyEn:
          'In SQL, **NULL** means a value is missing or unknown. It is not the number 0, not an empty text string, and not the word "NULL." A phone number may be NULL because it was never provided; a discount may be NULL because it was not recorded.',
        bodyHi:
          'SQL mein **NULL** ka matlab value missing ya unknown hai. Ye number 0 nahi hai, empty text nahi hai, aur na hi "NULL" word hai.',
      },
      sections: [
        {
          pill: 'Customers with missing phone numbers',
          blocks: [
            {
              type: 'table',
              headers: ['customer_id', 'name', 'phone'],
              rows: [
                ['101', 'Asha', '9876500011'],
                ['102', 'Ravi', 'NULL'],
                ['103', 'Neha', '9876500033'],
                ['104', 'Aman', 'NULL'],
              ],
              noteEn: 'NULL here represents a missing database value, not the four letters typed into a text field.',
              noteHi: 'Yahan NULL missing database value dikhata hai, text mein likhe chaar letters nahi.',
            },
          ],
        },
        {
          pill: 'Three different meanings',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: 'NULL',
                  bodyEn: 'Unknown or missing. You cannot assume it is zero or blank.',
                  bodyHi: 'Unknown ya missing. Aap ise zero ya blank assume nahi kar sakte.',
                  tone: 'sky',
                },
                {
                  title: '0 or empty text',
                  bodyEn: '0 is a known numeric value. An empty string is known text with no characters. Neither is automatically NULL.',
                  bodyHi: '0 ek known numeric value hai aur empty string known text hai. Dono automatically NULL nahi hote.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
        {
          pill: 'Find missing values correctly',
          blocks: [
            {
              type: 'sql',
              code: `SELECT customer_id, name\nFROM customers\nWHERE phone IS NULL;`,
              captionEn:
                'The matching customers are **Ravi** and **Aman**. Use **IS NOT NULL** to find customers whose phone value is present.',
              captionHi:
                'Matching customers hain **Ravi** aur **Aman**. Jin customers ka phone present hai unke liye **IS NOT NULL** use karo.',
            },
          ],
        },
        {
          pill: 'Result: missing phones',
          blocks: [
            {
              type: 'table',
              headers: ['customer_id', 'name'],
              rows: [
                ['102', 'Ravi'],
                ['104', 'Aman'],
              ],
              noteEn: 'SQL uses IS NULL because an ordinary equality comparison cannot confirm that two unknown values are equal.',
              noteHi: 'SQL IS NULL use karta hai kyunki ordinary equality do unknown values ko equal confirm nahi kar sakti.',
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 7',
      pageTag: 'PAGE 2 OF 3',
      footerPage: '2 / 3',
      title: 'Working with NULL Values',
      subtitle: 'WHY = NULL DOES NOT WORK',
      intro: {
        bodyEn:
          'SQL uses three-valued logic: **TRUE**, **FALSE** and **UNKNOWN**. If a normal comparison includes NULL, the answer is usually UNKNOWN. A WHERE clause returns only rows for which its condition is TRUE.',
        bodyHi:
          'SQL three-valued logic use karta hai: **TRUE**, **FALSE** aur **UNKNOWN**. Normal comparison mein NULL aane par answer UNKNOWN hota hai, aur WHERE sirf TRUE rows return karta hai.',
      },
      sections: [
        {
          pill: 'Incorrect: equality with NULL',
          blocks: [
            {
              type: 'sql',
              code: `SELECT customer_id, name\nFROM customers\nWHERE phone = NULL;`,
              captionEn:
                'This does **not** find missing phone numbers. The comparison is UNKNOWN, not TRUE, so WHERE excludes the rows.',
              captionHi:
                'Ye missing phone numbers **nahi** dhoondhta. Comparison UNKNOWN hota hai, TRUE nahi, isliye WHERE rows exclude kar deta hai.',
            },
          ],
        },
        {
          pill: 'Correct: IS NULL and IS NOT NULL',
          blocks: [
            {
              type: 'sql',
              code: `SELECT customer_id, name\nFROM customers\nWHERE phone IS NOT NULL;`,
              captionEn: 'This returns **Asha** and **Neha**, because their phone values are present. Use IS NULL to return the opposite set.',
              captionHi: 'Ye **Asha** aur **Neha** return karta hai kyunki unke phone values present hain.',
            },
          ],
        },
        {
          pill: 'What comparisons with NULL produce',
          blocks: [
            {
              type: 'table',
              headers: ['Expression', 'Result'],
              rows: [
                ['10 = 10', 'TRUE'],
                ['10 = 20', 'FALSE'],
                ['10 = NULL', 'UNKNOWN'],
                ['NULL = NULL', 'UNKNOWN'],
                ['NULL IS NULL', 'TRUE'],
              ],
              noteEn: 'IS NULL is a special test, not ordinary equality. UNKNOWN is neither TRUE nor FALSE.',
              noteHi: 'IS NULL ek special test hai, ordinary equality nahi. UNKNOWN na TRUE hai na FALSE.',
            },
          ],
        },
        {
          pill: 'NULL affects calculations too',
          blocks: [
            {
              type: 'bullets',
              tone: 'lavender',
              items: [
                {
                  en: '**10 + NULL** returns **NULL**, not 10. The result is unknown because part of the calculation is missing.',
                  hi: '**10 + NULL** ka result **NULL** aata hai, 10 nahi, kyunki calculation ka ek hissa missing hai.',
                },
                {
                  en: '**NOT UNKNOWN** is still **UNKNOWN**. This matters when combining conditions with AND, OR and NOT.',
                  hi: '**NOT UNKNOWN** bhi **UNKNOWN** hi rehta hai. AND, OR aur NOT combine karte waqt iska dhyan rakho.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 7',
      pageTag: 'PAGE 3 OF 3',
      footerPage: '3 / 3',
      title: 'Working with NULL Values',
      subtitle: 'NULL IN REPORTS AND AGGREGATES',
      intro: {
        bodyEn:
          'Missing data can change counts, averages and business decisions. Analysts should check why values are missing before replacing them. The correct treatment depends on whether NULL means "not applicable," "not collected" or "not yet known."',
        bodyHi:
          'Missing data counts, averages aur business decisions badal sakta hai. Values replace karne se pehle check karo ki data missing kyun hai.',
      },
      sections: [
        {
          pill: 'Example discounts',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'discount'],
              rows: [
                ['801', '50'],
                ['802', 'NULL'],
                ['803', '0'],
                ['804', '25'],
              ],
              noteEn: 'Order 802 has an unknown discount. Order 803 has a known discount of zero. These mean different things.',
              noteHi: 'Order 802 ka discount unknown hai; Order 803 ka confirmed discount 0 hai. Dono alag baatein hain.',
            },
          ],
        },
        {
          pill: 'COUNT(*) versus COUNT(column)',
          blocks: [
            {
              type: 'sql',
              code: `SELECT COUNT(*) AS total_orders,\n       COUNT(discount) AS known_discounts\nFROM orders;`,
              captionEn:
                '**COUNT(*)** counts all four rows. **COUNT(discount)** counts only the three rows with non-NULL discounts. The result is total_orders = 4 and known_discounts = 3.',
              captionHi:
                '**COUNT(*)** saari 4 rows count karta hai. **COUNT(discount)** sirf 3 non-NULL rows count karta hai (total_orders = 4, known_discounts = 3).',
            },
          ],
        },
        {
          pill: 'Aggregate output',
          blocks: [
            {
              type: 'table',
              headers: ['total_orders', 'known_discounts'],
              rows: [['4', '3']],
              noteEn:
                'SUM, AVG, MIN and MAX also generally ignore NULL inputs. An average over known values is not automatically an average over all rows.',
              noteHi: 'SUM, AVG, MIN aur MAX bhi generally NULL inputs ignore karte hain.',
            },
          ],
        },
        {
          pill: 'A careful analyst checks missing data',
          blocks: [
            {
              type: 'bullets',
              tone: 'amber',
              items: [
                {
                  en: 'Do not replace NULL with 0 unless the business rule says missing really means zero.',
                  hi: 'NULL ko tab tak 0 se replace mat karo jab tak business rule confirm na kare.',
                },
                {
                  en: 'Check whether blank strings from imported files should be treated as missing values.',
                  hi: 'Imported files ke blank strings ko missing values ki tarah handle karna hai ya nahi, ye check karo.',
                },
                {
                  en: 'Document missing-value handling in reports so stakeholders understand what was counted and what was excluded.',
                  hi: 'Reports mein missing-value handling document karo taaki stakeholders ko clear rahe kya count hua aur kya exclude.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const M18_T8_COALESCE: StructuredVisualNoteTopic = {
  module: 'M18',
  moduleTitle: 'Filtering, Sorting and Expressions',
  topic: 'COALESCE and NULL Handling',
  pageCount: 2,
  sampleDataNotice: 'All example customer contact details and discount figures are illustrative, not real records.',
  pages: [
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 8',
      pageTag: 'PAGE 1 OF 2',
      footerPage: '1 / 2',
      title: 'COALESCE and NULL Handling',
      subtitle: 'SHOW A USEFUL FALLBACK FOR MISSING VALUES',
      intro: {
        bodyEn:
          '**COALESCE** returns the first value that is not NULL from a list of expressions. Analysts use it when a report needs a fallback value, such as showing a backup contact method or displaying a clear label when a category is missing.',
        bodyHi:
          '**COALESCE** expressions ki list mein se pehli non-NULL value return karta hai. Reports mein fallback value (jaise backup contact ya clear label) dikhane ke liye ye bahut kaam aata hai.',
      },
      sections: [
        {
          pill: 'How COALESCE chooses a value',
          blocks: [
            {
              type: 'flow',
              items: [
                { title: 'First value', bodyEn: 'If it is not NULL, use it.', bodyHi: 'Agar NULL nahi hai to ise use karo.', tone: 'lavender' },
                { title: 'Next value', bodyEn: 'If the first is NULL, check the next.', bodyHi: 'Agar pehli NULL hai to agli check karo.', tone: 'sky' },
                { title: 'Fallback', bodyEn: 'Use the first available value, or NULL if all are NULL.', bodyHi: 'Pehli available value use karo, ya sab NULL hon to NULL.', tone: 'green' },
              ],
            },
          ],
        },
        {
          pill: 'Customer contact details',
          blocks: [
            {
              type: 'table',
              headers: ['name', 'mobile', 'email'],
              rows: [
                ['Asha', '9876500011', 'asha@example.com'],
                ['Ravi', 'NULL', 'ravi@example.com'],
                ['Neha', 'NULL', 'NULL'],
              ],
              noteEn: 'Some customers have a mobile number, some have only email, and some have neither.',
              noteHi: 'Kuch customers ke paas mobile hai, kuch ke paas sirf email, aur kuch ke paas dono nahi.',
            },
          ],
        },
        {
          pill: 'Choose the first available contact',
          blocks: [
            {
              type: 'sql',
              code: `SELECT name,\n       COALESCE(mobile, email, 'Not provided') AS contact\nFROM customers;`,
              captionEn:
                '**Important:** this example assumes mobile and email are both stored as text. SQL tries mobile first, then email, then the label "Not provided."',
              captionHi:
                '**Important:** yahan mobile aur email dono text mein stored hain. SQL pehle mobile try karta hai, phir email, phir "Not provided".',
            },
          ],
        },
        {
          pill: 'Result: readable contact column',
          blocks: [
            {
              type: 'table',
              headers: ['name', 'contact'],
              rows: [
                ['Asha', '9876500011'],
                ['Ravi', 'ravi@example.com'],
                ['Neha', 'Not provided'],
              ],
              noteEn: 'COALESCE changes the query output only. It does not fill the missing values inside the original Customers table.',
              noteHi: 'COALESCE sirf query output badalta hai; original Customers table mein values fill nahi karta.',
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 8',
      pageTag: 'PAGE 2 OF 2',
      footerPage: '2 / 2',
      title: 'COALESCE and NULL Handling',
      subtitle: 'SAFE REPORTING WITHOUT HIDING DATA QUALITY',
      intro: {
        bodyEn:
          'COALESCE is helpful, but it must follow a valid business rule. A missing value does not always mean zero. For example, a discount that was not recorded is different from a confirmed discount of 0.',
        bodyHi:
          'COALESCE helpful hai, par hamesha valid business rule follow karna chahiye. Missing value ka matlab hamesha 0 nahi hota.',
      },
      sections: [
        {
          pill: 'Example: a known zero-discount rule',
          blocks: [
            {
              type: 'sql',
              code: `SELECT order_id, price,\n       COALESCE(discount, 0) AS discount_used,\n       price - COALESCE(discount, 0) AS net_price\nFROM orders;`,
              captionEn:
                'This calculates net_price using 0 when discount is NULL. Use it **only if the business has confirmed** that missing discounts should be treated as zero.',
              captionHi:
                'Ye discount NULL hone par 0 maan kar net_price calculate karta hai. Ise tabhi use karo jab **business confirm kare** ki missing discount = 0 hai.',
            },
          ],
        },
        {
          pill: 'Example calculation result',
          blocks: [
            {
              type: 'table',
              headers: ['order_id', 'price', 'discount_used', 'net_price'],
              rows: [
                ['801', '500', '50', '450'],
                ['802', '300', '0*', '300'],
                ['803', '200', '0', '200'],
              ],
              noteEn: '*The displayed 0 for order 802 is a reporting fallback, not proof that the original stored discount was 0.',
              noteHi: '*Order 802 ka 0 sirf reporting fallback hai, original stored discount 0 hone ka proof nahi.',
            },
          ],
        },
        {
          pill: 'COALESCE versus IS NULL',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: 'COALESCE',
                  bodyEn: 'Returns a replacement or fallback **value** in a SELECT expression.',
                  bodyHi: 'SELECT expression mein replacement ya fallback **value** return karta hai.',
                  tone: 'sky',
                },
                {
                  title: 'IS NULL',
                  bodyEn: 'Tests whether a value is missing, often in a **WHERE** condition.',
                  bodyHi: 'Check karta hai ki value missing hai ya nahi, aksar **WHERE** condition mein.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
        {
          pill: 'Rules for trustworthy NULL handling',
          blocks: [
            {
              type: 'bullets',
              tone: 'amber',
              items: [
                {
                  en: 'COALESCE arguments should have **compatible data types**. Mixing unrelated text and numeric values can cause errors.',
                  hi: 'COALESCE arguments ke **data types compatible** hone chahiye; text aur numbers mix karne par error aa sakta hai.',
                },
                {
                  en: 'Use clear labels such as **Not provided** when that is more honest than inserting 0.',
                  hi: 'Jahan 0 rakhna galat ho, wahan **Not provided** jaise clear labels use karo.',
                },
                {
                  en: 'Record the original NULL rate before applying replacements, so the report does not hide a data quality problem.',
                  hi: 'Replacement se pehle original NULL rate note karo taaki data quality issues chhupe na.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const M18_T9_ARITHMETIC: StructuredVisualNoteTopic = {
  module: 'M18',
  moduleTitle: 'Filtering, Sorting and Expressions',
  topic: 'Arithmetic Expressions in SQL',
  pageCount: 3,
  sampleDataNotice: 'All example item prices, tax rates and discounts are illustrative, not real records.',
  pages: [
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 9',
      pageTag: 'PAGE 1 OF 3',
      footerPage: '1 / 3',
      title: 'Arithmetic Expressions in SQL',
      subtitle: 'CALCULATE VALUES INSIDE A QUERY',
      intro: {
        bodyEn:
          'SQL can do calculations while it reads data. An **arithmetic expression** combines numbers, columns and operators to produce a new result. Analysts use expressions to calculate order totals, discounts, profit, average price and business percentages.',
        bodyHi:
          'SQL data read karte waqt hi calculations kar sakta hai. **Arithmetic expression** numbers, columns aur operators ko combine karke naya result deta hai — jaise order totals, discounts, profit aur percentages.',
      },
      sections: [
        {
          pill: 'Arithmetic operators',
          blocks: [
            {
              type: 'table',
              headers: ['Operator', 'Meaning', 'Example', 'Result'],
              rows: [
                ['+', 'Addition', '10 + 5', '15'],
                ['-', 'Subtraction', '10 - 5', '5'],
                ['*', 'Multiplication', '10 * 5', '50'],
                ['/', 'Division', '10.0 / 4', '2.5'],
                ['%', 'Remainder (PostgreSQL)', '10 % 4', '2'],
              ],
              noteEn:
                'In PostgreSQL, integer / integer uses integer division. Use a decimal or numeric cast when a fractional result is required.',
              noteHi:
                'PostgreSQL mein integer / integer se integer division hota hai. Decimal answer ke liye decimal ya numeric cast use karo.',
            },
          ],
        },
        {
          pill: 'Order items for a shop',
          blocks: [
            {
              type: 'table',
              headers: ['item_id', 'quantity', 'unit_price'],
              rows: [
                ['901', '2', '250'],
                ['902', '3', '120'],
                ['903', '1', '999'],
              ],
              noteEn: "The table stores quantity and unit_price separately. We can calculate each item's total without adding a new stored column.",
              noteHi: 'Table mein quantity aur unit_price alag stored hain. Hum bina naya column add kiye har item ka total calculate kar sakte hain.',
            },
          ],
        },
        {
          pill: 'Calculate the value of each item',
          blocks: [
            {
              type: 'sql',
              code: `SELECT item_id, quantity, unit_price,\n       quantity * unit_price AS line_total\nFROM order_items;`,
              captionEn:
                '**quantity * unit_price** multiplies the two numeric columns for each row. **AS line_total** gives the calculated output column a clear name.',
              captionHi:
                '**quantity * unit_price** har row ke liye dono columns ko multiply karta hai. **AS line_total** calculated column ko clear naam deta hai.',
            },
          ],
        },
        {
          pill: 'Calculated output',
          blocks: [
            {
              type: 'table',
              headers: ['item_id', 'quantity', 'unit_price', 'line_total'],
              rows: [
                ['901', '2', '250', '500'],
                ['902', '3', '120', '360'],
                ['903', '1', '999', '999'],
              ],
              noteEn: 'The values 500, 360 and 999 are computed when the query runs. The original quantity and unit_price columns remain unchanged.',
              noteHi: '500, 360 aur 999 query run hone par compute hote hain; original columns bilkul unchanged rehte hain.',
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 9',
      pageTag: 'PAGE 2 OF 3',
      footerPage: '2 / 3',
      title: 'Arithmetic Expressions in SQL',
      subtitle: 'ORDER OF OPERATIONS AND DECIMALS',
      intro: {
        bodyEn:
          'SQL follows arithmetic precedence rules: multiplication and division happen before addition and subtraction. Parentheses let you change that order or make your calculation clearer to other analysts.',
        bodyHi:
          'SQL arithmetic precedence follow karta hai: multiplication aur division pehle, addition aur subtraction baad mein. Parentheses se aap order control kar sakte hain.',
      },
      sections: [
        {
          pill: 'Parentheses change the result',
          blocks: [
            {
              type: 'compare',
              items: [
                {
                  title: '10 + 5 * 2',
                  bodyEn: 'Multiplication first: **10 + 10 = 20**.',
                  bodyHi: 'Multiplication pehle: **10 + 10 = 20**.',
                  tone: 'sky',
                },
                {
                  title: '(10 + 5) * 2',
                  bodyEn: 'Parentheses first: **15 * 2 = 30**.',
                  bodyHi: 'Parentheses pehle: **15 * 2 = 30**.',
                  tone: 'green',
                },
              ],
            },
          ],
        },
        {
          pill: 'Avoid accidental integer division',
          blocks: [
            {
              type: 'sql',
              code: `SELECT 5 / 2 AS whole_result,\n       5.0 / 2 AS decimal_result;`,
              captionEn:
                'In PostgreSQL, **5 / 2** returns **2** because both values are integers. **5.0 / 2** returns **2.5** because a decimal value is used.',
              captionHi:
                'PostgreSQL mein **5 / 2** se **2** milta hai kyunki dono integers hain. **5.0 / 2** se **2.5** milta hai.',
            },
          ],
        },
        {
          pill: 'Output of the division example',
          blocks: [
            {
              type: 'table',
              headers: ['whole_result', 'decimal_result'],
              rows: [['2', '2.5']],
              noteEn: 'Choose appropriate numeric data types and decimal precision for percentages, prices and rates.',
              noteHi: 'Percentages, prices aur rates ke liye sahi numeric data types aur decimal precision choose karo.',
            },
          ],
        },
        {
          pill: 'Round a calculated amount',
          blocks: [
            {
              type: 'sql',
              code: `SELECT item_id,\n       ROUND(unit_price * 1.18, 2) AS price_with_tax\nFROM order_items;`,
              captionEn:
                'This example uses an **illustrative 18% tax rate**, not a rule for every product. **ROUND(..., 2)** keeps two decimal places in the numeric result.',
              captionHi:
                'Ye example illustrative 18% tax rate dikhata hai. **ROUND(..., 2)** result mein 2 decimal places rakhta hai.',
            },
          ],
        },
        {
          pill: 'Arithmetic with NULL and zero',
          blocks: [
            {
              type: 'bullets',
              tone: 'amber',
              items: [
                {
                  en: 'If quantity or unit_price is NULL, their product is NULL. Do not automatically replace it with zero.',
                  hi: 'Agar quantity ya unit_price NULL ho, to product bhi NULL hoga. Automatically 0 mat rakho.',
                },
                {
                  en: 'Division by zero causes an error. A denominator can be protected with **NULLIF(denominator, 0)**, which returns NULL when it is zero.',
                  hi: 'Zero se divide karne par error aata hai. Denominator ko **NULLIF(denominator, 0)** se protect karo.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      moduleTag: 'FUTURE IT INDUSTRY | M18 | TOPIC 9',
      pageTag: 'PAGE 3 OF 3',
      footerPage: '3 / 3',
      title: 'Arithmetic Expressions in SQL',
      subtitle: 'BUILD REAL BUSINESS CALCULATIONS',
      intro: {
        bodyEn:
          'In a real analytics report, a calculation must match the business definition. Use the order_items from page 1, now with known discount amounts: item 901 has 50, item 902 has 0, and item 903 has 99. These are amounts, not percentages. Gross and net sales are different.',
        bodyHi:
          'Real analytics report mein calculation business definition se match honi chahiye. Page 1 ke order_items mein discount amounts (50, 0, 99) hain — gross aur net sales alag hote hain.',
      },
      sections: [
        {
          pill: 'Calculate net sales per item',
          blocks: [
            {
              type: 'sql',
              code: `SELECT item_id,\n       quantity * unit_price AS gross_amount,\n       quantity * unit_price - discount AS net_amount\nFROM order_items;`,
              captionEn:
                'First multiply quantity by unit_price to get **gross_amount**. Then subtract the recorded discount to get **net_amount**.',
              captionHi:
                'Pehle quantity × unit_price se **gross_amount** nikalo, phir discount subtract karke **net_amount** nikalo.',
            },
          ],
        },
        {
          pill: 'Net sales output',
          blocks: [
            {
              type: 'table',
              headers: ['item_id', 'gross_amount', 'discount', 'net_amount'],
              rows: [
                ['901', '500', '50', '450'],
                ['902', '360', '0', '360'],
                ['903', '999', '99', '900'],
              ],
              noteEn: 'The total net sales of these three rows is 450 + 360 + 900 = 1710.',
              noteHi: 'In teeno rows ka total net sales 450 + 360 + 900 = 1710 hai.',
            },
          ],
        },
        {
          pill: 'Calculate a percentage safely',
          blocks: [
            {
              type: 'sql',
              code: `SELECT item_id,\n       ROUND(100.0 * discount /\n             NULLIF(quantity * unit_price, 0), 2)\n         AS discount_pct\nFROM order_items;`,
              captionEn:
                'Multiply by **100.0** to produce a percentage. **NULLIF(..., 0)** avoids dividing by zero. The example discount percentages are 10.00, 0.00 and about 9.91.',
              captionHi:
                'Percentage ke liye **100.0** se multiply karo aur zero-division se bachne ke liye **NULLIF(..., 0)** use karo.',
            },
          ],
        },
        {
          pill: 'Business calculation checklist',
          blocks: [
            {
              type: 'bullets',
              tone: 'lavender',
              items: [
                {
                  en: 'Check whether discounts and taxes are amounts or percentages before writing the expression.',
                  hi: 'Expression likhne se pehle confirm karo ki discount/tax amount hai ya percentage.',
                },
                {
                  en: 'Use descriptive aliases such as **gross_amount**, **net_amount** and **discount_pct**.',
                  hi: 'Clear aliases use karo jaise **gross_amount**, **net_amount** aur **discount_pct**.',
                },
                {
                  en: 'Verify the calculation using a few known rows and state any rounding or missing-data assumptions.',
                  hi: 'Kuch known rows par calculation manually verify karo aur rounding/missing-data assumptions clear rakho.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
