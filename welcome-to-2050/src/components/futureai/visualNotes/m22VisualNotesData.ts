import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M22_T01_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "Common Table Expressions (CTEs)",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Common Table Expressions (CTEs)",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "WITH block",
                  "bodyEn": "Calculate total sales per customer.",
                  "bodyHi": "Calculate total sales per customer.",
                  "tone": "lavender"
                },
                {
                  "title": "Name result",
                  "bodyEn": "Call the temporary result customer_totals.",
                  "bodyHi": "Call the temporary result customer_totals.",
                  "tone": "sky"
                },
                {
                  "title": "Main SELECT",
                  "bodyEn": "Filter and display that summary.",
                  "bodyHi": "Filter and display that summary.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sales transactions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "order_date",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Jan 01",
                  "100"
                ],
                [
                  "102",
                  "1",
                  "Jan 03",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "Jan 02",
                  "200"
                ],
                [
                  "104",
                  "2",
                  "Jan 05",
                  "200"
                ],
                [
                  "105",
                  "3",
                  "Jan 04",
                  "150"
                ],
                [
                  "106",
                  "3",
                  "Jan 06",
                  "250"
                ]
              ],
              "noteEn": "All dates are in January 2026. Date labels are shortened here to fit the diagram.",
              "noteHi": "All dates are in January 2026. Date labels are shortened here to fit the diagram."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A **Common Table Expression (CTE)** gives a temporary name to a query result inside one SQL statement. It begins with **WITH** and makes a complex analysis easier to read in stages.",
        "bodyHi": "A **Common Table Expression (CTE)** gives a temporary name to a query result inside one SQL statement. It begins with **WITH** and makes a complex analysis easier to read in stages."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Common Table Expressions (CTEs)",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "WITH customer_totals AS (\n  SELECT customer_id, SUM(amount) AS total_sales\n  FROM orders\n  GROUP BY customer_id\n)\nSELECT customer_id, total_sales\nFROM customer_totals\nWHERE total_sales >= 400\nORDER BY customer_id;",
              "captionEn": "The CTE groups transactions by customer_id. Each of the three customers has total sales of 400. The outer SELECT reads the named result and keeps totals at least 400.",
              "captionHi": "The CTE groups transactions by customer_id. Each of the three customers has total sales of 400. The outer SELECT reads the named result and keeps totals at least 400."
            }
          ]
        },
        {
          "pill": "CTE result: customer sales",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "total_sales"
              ],
              "rows": [
                [
                  "1",
                  "400"
                ],
                [
                  "2",
                  "400"
                ],
                [
                  "3",
                  "400"
                ]
              ],
              "noteEn": "The named CTE exists only for this SQL statement.",
              "noteHi": "The named CTE exists only for this SQL statement."
            }
          ]
        },
        {
          "pill": "A CTE is not a permanent table",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "WITH makes a named query result available to the statement that follows. It does not save a new database table. PostgreSQL may inline or materialize a CTE depending on the query and optimizer decisions.",
              "bodyHi": "WITH makes a named query result available to the statement that follows. It does not save a new database table. PostgreSQL may inline or materialize a CTE depending on the query and optimizer decisions."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Common Table Expressions (CTEs)",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "WITH customer_totals AS (\n  SELECT customer_id, SUM(amount) AS sales\n  FROM orders GROUP BY customer_id\n)\nSELECT COUNT(*) AS customers, SUM(sales) AS all_sales\nFROM customer_totals;",
              "captionEn": "The main query summarizes the three CTE rows. There are 3 customers and 1200 total sales. This is an example of using a summary to create a higher-level KPI.",
              "captionHi": "The main query summarizes the three CTE rows. There are 3 customers and 1200 total sales. This is an example of using a summary to create a higher-level KPI."
            }
          ]
        },
        {
          "pill": "Summary built from the CTE",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customers",
                "all_sales"
              ],
              "rows": [
                [
                  "3",
                  "1200"
                ]
              ],
              "noteEn": "3 customer summaries add back to the original 1200.",
              "noteHi": "3 customer summaries add back to the original 1200."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "CTE",
                  "bodyEn": "Named temporary result within one SQL statement.",
                  "bodyHi": "Named temporary result within one SQL statement.",
                  "tone": "sky"
                },
                {
                  "title": "Permanent table",
                  "bodyEn": "Stored data that remains available after the statement.",
                  "bodyHi": "Stored data that remains available after the statement.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "CTEs are especially useful for explaining multi-stage analysis to teammates during code reviews.",
              "bodyHi": "CTEs are especially useful for explaining multi-stage analysis to teammates during code reviews."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "A CTE begins with WITH and is followed by a SELECT, INSERT, UPDATE or DELETE statement.",
                  "hi": "A CTE begins with WITH and is followed by a SELECT, INSERT, UPDATE or DELETE statement."
                },
                {
                  "en": "Choose meaningful names such as monthly_sales or customer_totals.",
                  "hi": "Choose meaningful names such as monthly_sales or customer_totals."
                },
                {
                  "en": "A CTE can improve readability, but it is not automatically faster than a subquery.",
                  "hi": "A CTE can improve readability, but it is not automatically faster than a subquery."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M22_T02_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "Multiple and Recursive CTE Concepts",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Multiple and Recursive CTE Concepts",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Anchor",
                  "bodyEn": "Start with the top manager, Asha.",
                  "bodyHi": "Start with the top manager, Asha.",
                  "tone": "lavender"
                },
                {
                  "title": "Recursive step",
                  "bodyEn": "Find employees whose manager is already in the result.",
                  "bodyHi": "Find employees whose manager is already in the result.",
                  "tone": "sky"
                },
                {
                  "title": "Stop",
                  "bodyEn": "End when no new employees are found.",
                  "bodyHi": "End when no new employees are found.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Reporting hierarchy",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "emp_id",
                "name",
                "manager_id"
              ],
              "rows": [
                [
                  "1",
                  "Asha",
                  "NULL"
                ],
                [
                  "2",
                  "Ravi",
                  "1"
                ],
                [
                  "3",
                  "Neha",
                  "1"
                ],
                [
                  "4",
                  "Omar",
                  "2"
                ]
              ],
              "noteEn": "Asha leads the team; Ravi and Neha report to her; Omar reports to Ravi.",
              "noteHi": "Asha leads the team; Ravi and Neha report to her; Omar reports to Ravi."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "WITH RECURSIVE team AS (\n  SELECT emp_id, name, manager_id, 1 AS depth\n  FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.emp_id, e.name, e.manager_id, t.depth + 1\n  FROM employees AS e JOIN team AS t\n    ON e.manager_id = t.emp_id\n)\nSELECT name, depth FROM team ORDER BY depth, name;",
              "captionEn": "The anchor finds Asha at depth 1. The recursive part finds Ravi and Neha at depth 2, then Omar at depth 3. Recursion ends because there are no further matching employees.",
              "captionHi": "The anchor finds Asha at depth 1. The recursive part finds Ravi and Neha at depth 2, then Omar at depth 3. Recursion ends because there are no further matching employees."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "You can define **multiple CTEs** in one WITH statement, and a **recursive CTE** can repeatedly follow links such as manager-to-employee relationships. Recursive queries need a clear starting point and stopping condition.",
        "bodyHi": "You can define **multiple CTEs** in one WITH statement, and a **recursive CTE** can repeatedly follow links such as manager-to-employee relationships. Recursive queries need a clear starting point and stopping condition."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Multiple and Recursive CTE Concepts",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Hierarchy output",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "depth"
              ],
              "rows": [
                [
                  "Asha",
                  "1"
                ],
                [
                  "Neha",
                  "2"
                ],
                [
                  "Ravi",
                  "2"
                ],
                [
                  "Omar",
                  "3"
                ]
              ],
              "noteEn": "The query follows the manager links level by level.",
              "noteHi": "The query follows the manager links level by level."
            }
          ]
        },
        {
          "pill": "Multiple CTEs are simpler than recursion",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Separate ordinary CTEs with commas when one analysis has several stages. Use WITH RECURSIVE only when a result must repeatedly depend on rows discovered in earlier steps.",
              "bodyHi": "Separate ordinary CTEs with commas when one analysis has several stages. Use WITH RECURSIVE only when a result must repeatedly depend on rows discovered in earlier steps."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "WITH RECURSIVE numbers(n) AS (\n  SELECT 1\n  UNION ALL\n  SELECT n + 1 FROM numbers WHERE n < 4\n)\nSELECT n FROM numbers ORDER BY n;",
              "captionEn": "The anchor starts at 1. The recursive step adds 1 while n < 4. The output is 1, 2, 3, 4. Without a correct stopping condition, recursion can run far longer than intended.",
              "captionHi": "The anchor starts at 1. The recursive step adds 1 while n < 4. The output is 1, 2, 3, 4. Without a correct stopping condition, recursion can run far longer than intended."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Multiple and Recursive CTE Concepts",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Simple recursion output",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "n"
              ],
              "rows": [
                [
                  "1"
                ],
                [
                  "2"
                ],
                [
                  "3"
                ],
                [
                  "4"
                ]
              ],
              "noteEn": "A safe recursion stops after n reaches 4.",
              "noteHi": "A safe recursion stops after n reaches 4."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Multiple ordinary CTEs",
                  "bodyEn": "A readable sequence of named query stages.",
                  "bodyHi": "A readable sequence of named query stages.",
                  "tone": "sky"
                },
                {
                  "title": "Recursive CTE",
                  "bodyEn": "Repeatedly adds rows derived from previous results.",
                  "bodyHi": "Repeatedly adds rows derived from previous results.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Recursive CTEs are useful for org charts, product category trees and parent-child records.",
              "bodyHi": "Recursive CTEs are useful for org charts, product category trees and parent-child records."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use a tested stopping condition and guard against cycles in real hierarchies.",
                  "hi": "Use a tested stopping condition and guard against cycles in real hierarchies."
                },
                {
                  "en": "UNION ALL keeps recursive results without deduplicating each step.",
                  "hi": "UNION ALL keeps recursive results without deduplicating each step."
                },
                {
                  "en": "For complicated graphs, plan cycle detection and maximum-depth checks.",
                  "hi": "For complicated graphs, plan cycle detection and maximum-depth checks."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M22_T03_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "Window Functions Overview",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Window Functions Overview",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Keep each sale",
                  "bodyEn": "Start with six order rows.",
                  "bodyHi": "Start with six order rows.",
                  "tone": "lavender"
                },
                {
                  "title": "Define window",
                  "bodyEn": "Use OVER () for all six rows.",
                  "bodyHi": "Use OVER () for all six rows.",
                  "tone": "sky"
                },
                {
                  "title": "Add a measure",
                  "bodyEn": "Show the 1200 grand total beside every order.",
                  "bodyHi": "Show the 1200 grand total beside every order.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sales transactions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "order_date",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Jan 01",
                  "100"
                ],
                [
                  "102",
                  "1",
                  "Jan 03",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "Jan 02",
                  "200"
                ],
                [
                  "104",
                  "2",
                  "Jan 05",
                  "200"
                ],
                [
                  "105",
                  "3",
                  "Jan 04",
                  "150"
                ],
                [
                  "106",
                  "3",
                  "Jan 06",
                  "250"
                ]
              ],
              "noteEn": "All dates are in January 2026. Date labels are shortened here to fit the diagram.",
              "noteHi": "All dates are in January 2026. Date labels are shortened here to fit the diagram."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT order_id, amount,\n       SUM(amount) OVER () AS all_sales\nFROM orders\nORDER BY order_id;",
              "captionEn": "SUM(amount) OVER () calculates the total across all six rows, 1200, but each order remains a separate row. This helps compare a transaction with the overall total.",
              "captionHi": "SUM(amount) OVER () calculates the total across all six rows, 1200, but each order remains a separate row. This helps compare a transaction with the overall total."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Window functions** calculate across related rows while keeping each original row visible. Unlike GROUP BY, a window aggregate does not collapse many transaction rows into one summary row.",
        "bodyHi": "**Window functions** calculate across related rows while keeping each original row visible. Unlike GROUP BY, a window aggregate does not collapse many transaction rows into one summary row."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Window Functions Overview",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Window result: detail + overall total",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "amount",
                "all_sales"
              ],
              "rows": [
                [
                  "101",
                  "100",
                  "1200"
                ],
                [
                  "102",
                  "300",
                  "1200"
                ],
                [
                  "103",
                  "200",
                  "1200"
                ],
                [
                  "104",
                  "200",
                  "1200"
                ],
                [
                  "105",
                  "150",
                  "1200"
                ],
                [
                  "106",
                  "250",
                  "1200"
                ]
              ],
              "noteEn": "Six input rows remain six output rows.",
              "noteHi": "Six input rows remain six output rows."
            }
          ]
        },
        {
          "pill": "GROUP BY versus OVER",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "GROUP BY creates summary rows; OVER defines a window for calculations without collapsing the detail rows. A window can cover the whole result or a partition of related rows.",
              "bodyHi": "GROUP BY creates summary rows; OVER defines a window for calculations without collapsing the detail rows. A window can cover the whole result or a partition of related rows."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT order_id, customer_id, amount,\n       SUM(amount) OVER (PARTITION BY customer_id) AS customer_sales\nFROM orders\nORDER BY customer_id, order_id;",
              "captionEn": "PARTITION BY restarts the calculation for each customer. Each of the three customers has two orders totaling 400, so the value 400 appears beside both of their orders.",
              "captionHi": "PARTITION BY restarts the calculation for each customer. Each of the three customers has two orders totaling 400, so the value 400 appears beside both of their orders."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Window Functions Overview",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Customer-level window totals",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "customer_sales"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "400"
                ],
                [
                  "102",
                  "1",
                  "400"
                ],
                [
                  "103",
                  "2",
                  "400"
                ],
                [
                  "104",
                  "2",
                  "400"
                ],
                [
                  "105",
                  "3",
                  "400"
                ],
                [
                  "106",
                  "3",
                  "400"
                ]
              ],
              "noteEn": "The detail rows are not removed.",
              "noteHi": "The detail rows are not removed."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "GROUP BY customer_id",
                  "bodyEn": "One row per customer.",
                  "bodyHi": "One row per customer.",
                  "tone": "sky"
                },
                {
                  "title": "SUM(...) OVER (PARTITION BY customer_id)",
                  "bodyEn": "Every order remains, with customer total added.",
                  "bodyHi": "Every order remains, with customer total added.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Window functions support reporting when analysts need both transaction detail and comparison metrics in the same result.",
              "bodyHi": "Window functions support reporting when analysts need both transaction detail and comparison metrics in the same result."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "OVER () means all rows in the query result after filtering.",
                  "hi": "OVER () means all rows in the query result after filtering."
                },
                {
                  "en": "PARTITION BY divides rows into independent calculation groups.",
                  "hi": "PARTITION BY divides rows into independent calculation groups."
                },
                {
                  "en": "Window functions are useful for ranks, running totals and previous-row comparisons.",
                  "hi": "Window functions are useful for ranks, running totals and previous-row comparisons."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M22_T04_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "ROW_NUMBER, RANK and DENSE_RANK",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "ROW_NUMBER, RANK and DENSE_RANK",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Sort",
                  "bodyEn": "Order sales from highest to lowest.",
                  "bodyHi": "Order sales from highest to lowest.",
                  "tone": "lavender"
                },
                {
                  "title": "Check ties",
                  "bodyEn": "Asha and Ravi both have 500.",
                  "bodyHi": "Asha and Ravi both have 500.",
                  "tone": "sky"
                },
                {
                  "title": "Assign numbers",
                  "bodyEn": "Choose the tie behavior you need.",
                  "bodyHi": "Choose the tie behavior you need.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Salesperson performance",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "sales"
              ],
              "rows": [
                [
                  "Asha",
                  "500"
                ],
                [
                  "Ravi",
                  "500"
                ],
                [
                  "Neha",
                  "400"
                ],
                [
                  "Omar",
                  "300"
                ]
              ],
              "noteEn": "Asha and Ravi tie for the highest sales.",
              "noteHi": "Asha and Ravi tie for the highest sales."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT name, sales,\n ROW_NUMBER() OVER (ORDER BY sales DESC, name) AS row_no,\n RANK() OVER (ORDER BY sales DESC) AS sales_rank,\n DENSE_RANK() OVER (ORDER BY sales DESC) AS dense_rank\nFROM salespeople\nORDER BY sales DESC, name;",
              "captionEn": "ROW_NUMBER gives every row a unique position (Asha 1, Ravi 2). RANK gives tied sales the same rank 1, then skips to 3. DENSE_RANK gives tied sales rank 1, then continues at 2.",
              "captionHi": "ROW_NUMBER gives every row a unique position (Asha 1, Ravi 2). RANK gives tied sales the same rank 1, then skips to 3. DENSE_RANK gives tied sales rank 1, then continues at 2."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "These three window functions assign positions to sorted rows. They differ when values tie. Analysts use them for leaderboards, top performers and selecting recent records.",
        "bodyHi": "These three window functions assign positions to sorted rows. They differ when values tie. Analysts use them for leaderboards, top performers and selecting recent records."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "ROW_NUMBER, RANK and DENSE_RANK",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Compare the three ranking functions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "sales",
                "row_no",
                "rank",
                "dense_rank"
              ],
              "rows": [
                [
                  "Asha",
                  "500",
                  "1",
                  "1",
                  "1"
                ],
                [
                  "Ravi",
                  "500",
                  "2",
                  "1",
                  "1"
                ],
                [
                  "Neha",
                  "400",
                  "3",
                  "3",
                  "2"
                ],
                [
                  "Omar",
                  "300",
                  "4",
                  "4",
                  "3"
                ]
              ],
              "noteEn": "A tie at 500 changes RANK and DENSE_RANK differently.",
              "noteHi": "A tie at 500 changes RANK and DENSE_RANK differently."
            }
          ]
        },
        {
          "pill": "Make ROW_NUMBER deterministic",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "If two rows tie and ORDER BY has no secondary field, the order between them may be unpredictable. Add a stable tie-breaker such as name or a unique ID when you need repeatable row numbers.",
              "bodyHi": "If two rows tie and ORDER BY has no secondary field, the order between them may be unpredictable. Add a stable tie-breaker such as name or a unique ID when you need repeatable row numbers."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "WITH ranked AS (\n  SELECT name, sales,\n         DENSE_RANK() OVER (ORDER BY sales DESC) AS pos\n  FROM salespeople\n)\nSELECT name, sales FROM ranked WHERE pos <= 2\nORDER BY sales DESC, name;",
              "captionEn": "DENSE_RANK <= 2 keeps both people tied at 500 and the next distinct sales value, 400. That means three people appear in the top two sales bands.",
              "captionHi": "DENSE_RANK <= 2 keeps both people tied at 500 and the next distinct sales value, 400. That means three people appear in the top two sales bands."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "ROW_NUMBER, RANK and DENSE_RANK",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Top two distinct sales levels",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "sales"
              ],
              "rows": [
                [
                  "Asha",
                  "500"
                ],
                [
                  "Ravi",
                  "500"
                ],
                [
                  "Neha",
                  "400"
                ]
              ],
              "noteEn": "Three people occupy the top two distinct sales ranks.",
              "noteHi": "Three people occupy the top two distinct sales ranks."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "RANK",
                  "bodyEn": "Ties share rank; following ranks may skip.",
                  "bodyHi": "Ties share rank; following ranks may skip.",
                  "tone": "sky"
                },
                {
                  "title": "DENSE_RANK",
                  "bodyEn": "Ties share rank; following ranks do not skip.",
                  "bodyHi": "Ties share rank; following ranks do not skip.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Ranking rules should be agreed with business stakeholders before a leaderboard is published.",
              "bodyHi": "Ranking rules should be agreed with business stakeholders before a leaderboard is published."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "ROW_NUMBER never ties; RANK leaves gaps after ties; DENSE_RANK has no gaps.",
                  "hi": "ROW_NUMBER never ties; RANK leaves gaps after ties; DENSE_RANK has no gaps."
                },
                {
                  "en": "Define whether top 2 means two people or two distinct performance levels.",
                  "hi": "Define whether top 2 means two people or two distinct performance levels."
                },
                {
                  "en": "Use a CTE to filter on a computed window value in PostgreSQL.",
                  "hi": "Use a CTE to filter on a computed window value in PostgreSQL."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M22_T05_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "PARTITION BY and ORDER BY in Windows",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "PARTITION BY and ORDER BY in Windows",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Partition",
                  "bodyEn": "Separate orders by customer_id.",
                  "bodyHi": "Separate orders by customer_id.",
                  "tone": "lavender"
                },
                {
                  "title": "Order",
                  "bodyEn": "Sort each customer orders by date and order_id.",
                  "bodyHi": "Sort each customer orders by date and order_id.",
                  "tone": "sky"
                },
                {
                  "title": "Calculate",
                  "bodyEn": "Build a running amount for each customer.",
                  "bodyHi": "Build a running amount for each customer.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sales transactions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "order_date",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Jan 01",
                  "100"
                ],
                [
                  "102",
                  "1",
                  "Jan 03",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "Jan 02",
                  "200"
                ],
                [
                  "104",
                  "2",
                  "Jan 05",
                  "200"
                ],
                [
                  "105",
                  "3",
                  "Jan 04",
                  "150"
                ],
                [
                  "106",
                  "3",
                  "Jan 06",
                  "250"
                ]
              ],
              "noteEn": "All dates are in January 2026. Date labels are shortened here to fit the diagram.",
              "noteHi": "All dates are in January 2026. Date labels are shortened here to fit the diagram."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT customer_id, order_id, amount,\n SUM(amount) OVER (\n   PARTITION BY customer_id\n   ORDER BY order_date, order_id\n   ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n ) AS running_sales\nFROM orders\nORDER BY customer_id, order_date, order_id;",
              "captionEn": "The running total resets for each customer. Customer 1 has 100 then 400; customer 2 has 200 then 400; customer 3 has 150 then 400. ROWS specifies the frame in terms of physical ordered rows.",
              "captionHi": "The running total resets for each customer. Customer 1 has 100 then 400; customer 2 has 200 then 400; customer 3 has 150 then 400. ROWS specifies the frame in terms of physical ordered rows."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**PARTITION BY** creates separate calculation groups, while **ORDER BY** defines the sequence within each group. Together they support per-customer running totals and rankings.",
        "bodyHi": "**PARTITION BY** creates separate calculation groups, while **ORDER BY** defines the sequence within each group. Together they support per-customer running totals and rankings."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "PARTITION BY and ORDER BY in Windows",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Running total per customer",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "order_id",
                "amount",
                "running_sales"
              ],
              "rows": [
                [
                  "1",
                  "101",
                  "100",
                  "100"
                ],
                [
                  "1",
                  "102",
                  "300",
                  "400"
                ],
                [
                  "2",
                  "103",
                  "200",
                  "200"
                ],
                [
                  "2",
                  "104",
                  "200",
                  "400"
                ],
                [
                  "3",
                  "105",
                  "150",
                  "150"
                ],
                [
                  "3",
                  "106",
                  "250",
                  "400"
                ]
              ],
              "noteEn": "Each customer has an independent running total.",
              "noteHi": "Each customer has an independent running total."
            }
          ]
        },
        {
          "pill": "Why the window ORDER BY matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The ORDER BY inside OVER defines calculation order; the final ORDER BY sorts the displayed result. They have different jobs. Use a unique tie-breaker to make the running total stable when dates match.",
              "bodyHi": "The ORDER BY inside OVER defines calculation order; the final ORDER BY sorts the displayed result. They have different jobs. Use a unique tie-breaker to make the running total stable when dates match."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT customer_id, order_id, amount,\n ROW_NUMBER() OVER (\n   PARTITION BY customer_id\n   ORDER BY amount DESC, order_id\n ) AS amount_position\nFROM orders\nORDER BY customer_id, amount_position;",
              "captionEn": "Each customer has two orders. The larger order gets position 1. Customer 2 has two equal amounts (200), so order_id determines which receives 1 and 2.",
              "captionHi": "Each customer has two orders. The larger order gets position 1. Customer 2 has two equal amounts (200), so order_id determines which receives 1 and 2."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "PARTITION BY and ORDER BY in Windows",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Order ranking inside each customer",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "order_id",
                "amount_position"
              ],
              "rows": [
                [
                  "1",
                  "102",
                  "1"
                ],
                [
                  "1",
                  "101",
                  "2"
                ],
                [
                  "2",
                  "103",
                  "1"
                ],
                [
                  "2",
                  "104",
                  "2"
                ],
                [
                  "3",
                  "106",
                  "1"
                ],
                [
                  "3",
                  "105",
                  "2"
                ]
              ],
              "noteEn": "Ranks restart at 1 for each customer.",
              "noteHi": "Ranks restart at 1 for each customer."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "PARTITION BY",
                  "bodyEn": "Defines which rows belong to one calculation group.",
                  "bodyHi": "Defines which rows belong to one calculation group.",
                  "tone": "sky"
                },
                {
                  "title": "ORDER BY in OVER",
                  "bodyEn": "Defines their sequence within that group.",
                  "bodyHi": "Defines their sequence within that group.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "This pattern supports customer purchase journeys, per-store cumulative sales and ranking products within categories.",
              "bodyHi": "This pattern supports customer purchase journeys, per-store cumulative sales and ranking products within categories."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "PARTITION BY is optional; without it, the window may cover the full result.",
                  "hi": "PARTITION BY is optional; without it, the window may cover the full result."
                },
                {
                  "en": "ORDER BY inside OVER controls sequence for ranking and running calculations.",
                  "hi": "ORDER BY inside OVER controls sequence for ranking and running calculations."
                },
                {
                  "en": "For running totals, specify ROWS when you need one physical row at a time.",
                  "hi": "For running totals, specify ROWS when you need one physical row at a time."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M22_T06_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "LAG and LEAD",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "LAG and LEAD",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Partition",
                  "bodyEn": "Group orders by customer.",
                  "bodyHi": "Group orders by customer.",
                  "tone": "lavender"
                },
                {
                  "title": "Order",
                  "bodyEn": "Arrange each customer orders by date.",
                  "bodyHi": "Arrange each customer orders by date.",
                  "tone": "sky"
                },
                {
                  "title": "Look around",
                  "bodyEn": "LAG reads previous; LEAD reads next.",
                  "bodyHi": "LAG reads previous; LEAD reads next.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sales transactions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "order_date",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Jan 01",
                  "100"
                ],
                [
                  "102",
                  "1",
                  "Jan 03",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "Jan 02",
                  "200"
                ],
                [
                  "104",
                  "2",
                  "Jan 05",
                  "200"
                ],
                [
                  "105",
                  "3",
                  "Jan 04",
                  "150"
                ],
                [
                  "106",
                  "3",
                  "Jan 06",
                  "250"
                ]
              ],
              "noteEn": "All dates are in January 2026. Date labels are shortened here to fit the diagram.",
              "noteHi": "All dates are in January 2026. Date labels are shortened here to fit the diagram."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT customer_id, order_id, amount,\n LAG(amount) OVER (\n   PARTITION BY customer_id ORDER BY order_date, order_id\n ) AS previous_amount,\n LEAD(amount) OVER (\n   PARTITION BY customer_id ORDER BY order_date, order_id\n ) AS next_amount\nFROM orders\nORDER BY customer_id, order_date, order_id;",
              "captionEn": "For customer 1, order 101 has no previous amount and its next amount is 300. Order 102 has previous 100 and no next amount. The same pattern applies to customers 2 and 3.",
              "captionHi": "For customer 1, order 101 has no previous amount and its next amount is 300. Order 102 has previous 100 and no next amount. The same pattern applies to customers 2 and 3."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**LAG** reads a value from an earlier row in the ordered window. **LEAD** reads a value from a later row. They are useful for comparing a customer current order with the previous or next one.",
        "bodyHi": "**LAG** reads a value from an earlier row in the ordered window. **LEAD** reads a value from a later row. They are useful for comparing a customer current order with the previous or next one."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "LAG and LEAD",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "LAG and LEAD result",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "order_id",
                "amount",
                "previous",
                "next"
              ],
              "rows": [
                [
                  "1",
                  "101",
                  "100",
                  "NULL",
                  "300"
                ],
                [
                  "1",
                  "102",
                  "300",
                  "100",
                  "NULL"
                ],
                [
                  "2",
                  "103",
                  "200",
                  "NULL",
                  "200"
                ],
                [
                  "2",
                  "104",
                  "200",
                  "200",
                  "NULL"
                ],
                [
                  "3",
                  "105",
                  "150",
                  "NULL",
                  "250"
                ],
                [
                  "3",
                  "106",
                  "250",
                  "150",
                  "NULL"
                ]
              ],
              "noteEn": "The first row has no previous value; the last has no next value.",
              "noteHi": "The first row has no previous value; the last has no next value."
            }
          ]
        },
        {
          "pill": "Calculate changes safely",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A difference such as amount - LAG(amount) is NULL for the first row in each partition because no earlier amount exists. You can keep NULL to mean no comparison is available, or use a clearly explained default.",
              "bodyHi": "A difference such as amount - LAG(amount) is NULL for the first row in each partition because no earlier amount exists. You can keep NULL to mean no comparison is available, or use a clearly explained default."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT customer_id, order_id, amount,\n amount - LAG(amount) OVER (\n   PARTITION BY customer_id ORDER BY order_date, order_id\n ) AS change_from_previous\nFROM orders\nORDER BY customer_id, order_date, order_id;",
              "captionEn": "The second order changes are +200 for customer 1, 0 for customer 2 and +100 for customer 3. First orders show NULL because there is no previous order.",
              "captionHi": "The second order changes are +200 for customer 1, 0 for customer 2 and +100 for customer 3. First orders show NULL because there is no previous order."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "LAG and LEAD",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Change from the previous order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "order_id",
                "change"
              ],
              "rows": [
                [
                  "1",
                  "101",
                  "NULL"
                ],
                [
                  "1",
                  "102",
                  "200"
                ],
                [
                  "2",
                  "103",
                  "NULL"
                ],
                [
                  "2",
                  "104",
                  "0"
                ],
                [
                  "3",
                  "105",
                  "NULL"
                ],
                [
                  "3",
                  "106",
                  "100"
                ]
              ],
              "noteEn": "Changes are calculated within each customer.",
              "noteHi": "Changes are calculated within each customer."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "LAG(amount)",
                  "bodyEn": "Returns the earlier ordered row amount.",
                  "bodyHi": "Returns the earlier ordered row amount.",
                  "tone": "sky"
                },
                {
                  "title": "LEAD(amount)",
                  "bodyEn": "Returns the later ordered row amount.",
                  "bodyHi": "Returns the later ordered row amount.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Use LAG for month-over-month sales comparisons, previous salary checks and measuring customer behavior changes.",
              "bodyHi": "Use LAG for month-over-month sales comparisons, previous salary checks and measuring customer behavior changes."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "LAG and LEAD do not remove detail rows.",
                  "hi": "LAG and LEAD do not remove detail rows."
                },
                {
                  "en": "A stable ORDER BY is essential when events have the same timestamp.",
                  "hi": "A stable ORDER BY is essential when events have the same timestamp."
                },
                {
                  "en": "NULL for the first or last row is often meaningful, not an error.",
                  "hi": "NULL for the first or last row is often meaningful, not an error."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M22_T07_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "Running Totals and Moving Averages",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Running Totals and Moving Averages",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Sort by date",
                  "bodyEn": "Use order_date and order_id for stable order.",
                  "bodyHi": "Use order_date and order_id for stable order.",
                  "tone": "lavender"
                },
                {
                  "title": "Running sum",
                  "bodyEn": "Add all amounts up to the current row.",
                  "bodyHi": "Add all amounts up to the current row.",
                  "tone": "sky"
                },
                {
                  "title": "Moving average",
                  "bodyEn": "Average the current row and up to two previous rows.",
                  "bodyHi": "Average the current row and up to two previous rows.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sales transactions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "order_date",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Jan 01",
                  "100"
                ],
                [
                  "102",
                  "1",
                  "Jan 03",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "Jan 02",
                  "200"
                ],
                [
                  "104",
                  "2",
                  "Jan 05",
                  "200"
                ],
                [
                  "105",
                  "3",
                  "Jan 04",
                  "150"
                ],
                [
                  "106",
                  "3",
                  "Jan 06",
                  "250"
                ]
              ],
              "noteEn": "All dates are in January 2026. Date labels are shortened here to fit the diagram.",
              "noteHi": "All dates are in January 2026. Date labels are shortened here to fit the diagram."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT order_id, amount,\n SUM(amount) OVER (ORDER BY order_date, order_id\n   ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total\nFROM orders\nORDER BY order_date, order_id;",
              "captionEn": "The chronological amounts are 100, 200, 300, 150, 200 and 250. Their running totals are 100, 300, 600, 750, 950 and 1200.",
              "captionHi": "The chronological amounts are 100, 200, 300, 150, 200 and 250. Their running totals are 100, 300, 600, 750, 950 and 1200."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A **running total** adds values from the beginning up to the current row. A **moving average** smooths changes by averaging a fixed number of recent rows. Both use window frames.",
        "bodyHi": "A **running total** adds values from the beginning up to the current row. A **moving average** smooths changes by averaging a fixed number of recent rows. Both use window frames."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Running Totals and Moving Averages",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Running sales total by date",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "amount",
                "running_total"
              ],
              "rows": [
                [
                  "101",
                  "100",
                  "100"
                ],
                [
                  "103",
                  "200",
                  "300"
                ],
                [
                  "102",
                  "300",
                  "600"
                ],
                [
                  "105",
                  "150",
                  "750"
                ],
                [
                  "104",
                  "200",
                  "950"
                ],
                [
                  "106",
                  "250",
                  "1200"
                ]
              ],
              "noteEn": "The final running total equals the full sales total, 1200.",
              "noteHi": "The final running total equals the full sales total, 1200."
            }
          ]
        },
        {
          "pill": "ROWS frame explained",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "UNBOUNDED PRECEDING means start from the first ordered row. CURRENT ROW means stop at the current row. For a three-row moving average, use 2 PRECEDING AND CURRENT ROW.",
              "bodyHi": "UNBOUNDED PRECEDING means start from the first ordered row. CURRENT ROW means stop at the current row. For a three-row moving average, use 2 PRECEDING AND CURRENT ROW."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT order_id, amount,\n ROUND(AVG(amount) OVER (\n   ORDER BY order_date, order_id\n   ROWS BETWEEN 2 PRECEDING AND CURRENT ROW\n ), 2) AS avg_last_3_rows\nFROM orders\nORDER BY order_date, order_id;",
              "captionEn": "At the first row, the average uses only 100. At the second it uses 100 and 200 (150). At the third it uses 100, 200 and 300 (200). The window then slides forward.",
              "captionHi": "At the first row, the average uses only 100. At the second it uses 100 and 200 (150). At the third it uses 100, 200 and 300 (200). The window then slides forward."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Running Totals and Moving Averages",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Moving average: last up to 3 rows",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "amount",
                "avg_last_3_rows"
              ],
              "rows": [
                [
                  "101",
                  "100",
                  "100.00"
                ],
                [
                  "103",
                  "200",
                  "150.00"
                ],
                [
                  "102",
                  "300",
                  "200.00"
                ],
                [
                  "105",
                  "150",
                  "216.67"
                ],
                [
                  "104",
                  "200",
                  "216.67"
                ],
                [
                  "106",
                  "250",
                  "200.00"
                ]
              ],
              "noteEn": "Each average uses the current row and at most two preceding rows.",
              "noteHi": "Each average uses the current row and at most two preceding rows."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Running total",
                  "bodyEn": "Accumulates all earlier values through the current row.",
                  "bodyHi": "Accumulates all earlier values through the current row.",
                  "tone": "sky"
                },
                {
                  "title": "Moving average",
                  "bodyEn": "Uses a sliding window of recent values.",
                  "bodyHi": "Uses a sliding window of recent values.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Running totals show progress toward a target; moving averages help analysts see the underlying direction behind daily fluctuations.",
              "bodyHi": "Running totals show progress toward a target; moving averages help analysts see the underlying direction behind daily fluctuations."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "A three-row moving average is not automatically a three-day moving average.",
                  "hi": "A three-row moving average is not automatically a three-day moving average."
                },
                {
                  "en": "Use a date calendar when days with no transactions must be represented.",
                  "hi": "Use a date calendar when days with no transactions must be represented."
                },
                {
                  "en": "Include a stable tie-breaker for transactions with the same date.",
                  "hi": "Include a stable tie-breaker for transactions with the same date."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M22_T08_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "Date and Text Functions",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 8",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Date and Text Functions",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Date function",
                  "bodyEn": "Extract year or month from a date.",
                  "bodyHi": "Extract year or month from a date.",
                  "tone": "lavender"
                },
                {
                  "title": "Text function",
                  "bodyEn": "Trim spaces and change letter case.",
                  "bodyHi": "Trim spaces and change letter case.",
                  "tone": "sky"
                },
                {
                  "title": "Reporting",
                  "bodyEn": "Create consistent labels for charts and tables.",
                  "bodyHi": "Create consistent labels for charts and tables.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sales transactions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "order_date",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Jan 01",
                  "100"
                ],
                [
                  "102",
                  "1",
                  "Jan 03",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "Jan 02",
                  "200"
                ],
                [
                  "104",
                  "2",
                  "Jan 05",
                  "200"
                ],
                [
                  "105",
                  "3",
                  "Jan 04",
                  "150"
                ],
                [
                  "106",
                  "3",
                  "Jan 06",
                  "250"
                ]
              ],
              "noteEn": "All dates are in January 2026. Date labels are shortened here to fit the diagram.",
              "noteHi": "All dates are in January 2026. Date labels are shortened here to fit the diagram."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "SQL functions can clean text, format labels and extract parts of dates. Analysts use them to build monthly reports, standardize names and create readable fields for dashboards.",
        "bodyHi": "SQL functions can clean text, format labels and extract parts of dates. Analysts use them to build monthly reports, standardize names and create readable fields for dashboards."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 8",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Date and Text Functions",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT order_id, order_date,\n       EXTRACT(MONTH FROM order_date) AS month_no,\n       TO_CHAR(order_date, 'Mon YYYY') AS month_label\nFROM orders\nORDER BY order_id\nLIMIT 3;",
              "captionEn": "EXTRACT(MONTH FROM date) returns the month number, here 1. TO_CHAR formats a date as text such as Jan 2026. Formatting is useful for display, but keep the original date type for sorting and calculations.",
              "captionHi": "EXTRACT(MONTH FROM date) returns the month number, here 1. TO_CHAR formats a date as text such as Jan 2026. Formatting is useful for display, but keep the original date type for sorting and calculations."
            }
          ]
        },
        {
          "pill": "Formatted dates: first three order IDs",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "order_date",
                "month_no",
                "month_label"
              ],
              "rows": [
                [
                  "101",
                  "2026-01-01",
                  "1",
                  "Jan 2026"
                ],
                [
                  "102",
                  "2026-01-03",
                  "1",
                  "Jan 2026"
                ],
                [
                  "103",
                  "2026-01-02",
                  "1",
                  "Jan 2026"
                ]
              ],
              "noteEn": "All three orders fall in January 2026.",
              "noteHi": "All three orders fall in January 2026."
            }
          ]
        },
        {
          "pill": "Common text functions",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "TRIM removes surrounding spaces. UPPER and LOWER change letter case. CONCAT joins values as text. COALESCE can supply a display label when a value is NULL.",
              "bodyHi": "TRIM removes surrounding spaces. UPPER and LOWER change letter case. CONCAT joins values as text. COALESCE can supply a display label when a value is NULL."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 8",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Date and Text Functions",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT UPPER(TRIM('  asha  ')) AS clean_name,\n       CONCAT('Order ', 101) AS label;",
              "captionEn": "TRIM first removes spaces around asha, then UPPER changes it to ASHA. CONCAT combines text with the order number to create Order 101.",
              "captionHi": "TRIM first removes spaces around asha, then UPPER changes it to ASHA. CONCAT combines text with the order number to create Order 101."
            }
          ]
        },
        {
          "pill": "Text cleaning output",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "clean_name",
                "label"
              ],
              "rows": [
                [
                  "ASHA",
                  "Order 101"
                ]
              ],
              "noteEn": "Both values are display-ready text.",
              "noteHi": "Both values are display-ready text."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "DATE_TRUNC",
                  "bodyEn": "Returns a date/time period value for grouping.",
                  "bodyHi": "Returns a date/time period value for grouping.",
                  "tone": "sky"
                },
                {
                  "title": "TO_CHAR",
                  "bodyEn": "Returns formatted text for display.",
                  "bodyHi": "Returns formatted text for display.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Keep raw columns unchanged in the source and create cleaned or formatted fields in the query or transformation layer.",
              "bodyHi": "Keep raw columns unchanged in the source and create cleaned or formatted fields in the query or transformation layer."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Avoid sorting months by formatted text labels; sort by real date values.",
                  "hi": "Avoid sorting months by formatted text labels; sort by real date values."
                },
                {
                  "en": "Function behavior can depend on data types, locale and time zone.",
                  "hi": "Function behavior can depend on data types, locale and time zone."
                },
                {
                  "en": "Apply text cleaning consistently before comparing names or categories.",
                  "hi": "Apply text cleaning consistently before comparing names or categories."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M22_T09_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "Query Validation and Performance Basics",
  "pageCount": 2,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 9",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Query Validation and Performance Basics",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Define expected result",
                  "bodyEn": "Write down the question and output grain.",
                  "bodyHi": "Write down the question and output grain.",
                  "tone": "lavender"
                },
                {
                  "title": "Check totals",
                  "bodyEn": "Compare row counts and revenue with source data.",
                  "bodyHi": "Compare row counts and revenue with source data.",
                  "tone": "sky"
                },
                {
                  "title": "Inspect plan",
                  "bodyEn": "Use EXPLAIN to understand how PostgreSQL may execute the query.",
                  "bodyHi": "Use EXPLAIN to understand how PostgreSQL may execute the query.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sales transactions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "order_date",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Jan 01",
                  "100"
                ],
                [
                  "102",
                  "1",
                  "Jan 03",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "Jan 02",
                  "200"
                ],
                [
                  "104",
                  "2",
                  "Jan 05",
                  "200"
                ],
                [
                  "105",
                  "3",
                  "Jan 04",
                  "150"
                ],
                [
                  "106",
                  "3",
                  "Jan 06",
                  "250"
                ]
              ],
              "noteEn": "All dates are in January 2026. Date labels are shortened here to fit the diagram.",
              "noteHi": "All dates are in January 2026. Date labels are shortened here to fit the diagram."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT COUNT(*) AS order_rows,\n       COUNT(DISTINCT order_id) AS unique_orders,\n       SUM(amount) AS total_sales\nFROM orders;",
              "captionEn": "The sample has 6 rows, 6 unique order IDs and total sales 1200. If a JOIN later returns 12 rows or revenue 2400, investigate whether one-to-many relationships duplicated amounts.",
              "captionHi": "The sample has 6 rows, 6 unique order IDs and total sales 1200. If a JOIN later returns 12 rows or revenue 2400, investigate whether one-to-many relationships duplicated amounts."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A query can run successfully and still return the wrong business result. Analysts should **validate numbers, inspect row counts and review performance** before publishing a report.",
        "bodyHi": "A query can run successfully and still return the wrong business result. Analysts should **validate numbers, inspect row counts and review performance** before publishing a report."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 9",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Query Validation and Performance Basics",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Baseline validation metrics",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_rows",
                "unique_orders",
                "total_sales"
              ],
              "rows": [
                [
                  "6",
                  "6",
                  "1200"
                ]
              ],
              "noteEn": "Record trusted baseline values before adding joins or filters.",
              "noteHi": "Record trusted baseline values before adding joins or filters."
            }
          ]
        },
        {
          "pill": "EXPLAIN shows the planned work",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "EXPLAIN reports the query plan selected by PostgreSQL. EXPLAIN ANALYZE actually runs the query and measures execution; use it carefully, especially for expensive statements or statements that change data.",
              "bodyHi": "EXPLAIN reports the query plan selected by PostgreSQL. EXPLAIN ANALYZE actually runs the query and measures execution; use it carefully, especially for expensive statements or statements that change data."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "EXPLAIN\nSELECT order_id, amount\nFROM orders\nWHERE order_date >= DATE '2026-01-01';",
              "captionEn": "The output is a plan, not an ordinary result table. On small tables, a sequential scan can be reasonable. On larger tables, an index may help some filters; performance depends on data distribution and the chosen plan.",
              "captionHi": "The output is a plan, not an ordinary result table. On small tables, a sequential scan can be reasonable. On larger tables, an index may help some filters; performance depends on data distribution and the chosen plan."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "EXPLAIN",
                  "bodyEn": "Shows a planned execution strategy without running the SELECT.",
                  "bodyHi": "Shows a planned execution strategy without running the SELECT.",
                  "tone": "sky"
                },
                {
                  "title": "EXPLAIN ANALYZE",
                  "bodyEn": "Runs the statement and reports measured execution information.",
                  "bodyHi": "Runs the statement and reports measured execution information.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Good SQL work includes a reproducible query, validated business logic and evidence that the result is correct.",
              "bodyHi": "Good SQL work includes a reproducible query, validated business logic and evidence that the result is correct."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Start with correctness: row count, unique keys, NULLs and totals.",
                  "hi": "Start with correctness: row count, unique keys, NULLs and totals."
                },
                {
                  "en": "Select only necessary columns; avoid SELECT * in large recurring reports.",
                  "hi": "Select only necessary columns; avoid SELECT * in large recurring reports."
                },
                {
                  "en": "Use appropriate indexes and filter conditions, but measure actual performance before optimizing.",
                  "hi": "Use appropriate indexes and filter conditions, but measure actual performance before optimizing."
                },
                {
                  "en": "Do not assume that every index or CTE improves speed.",
                  "hi": "Do not assume that every index or CTE improves speed."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M22_T10_SPEC: StructuredVisualNoteTopic = {
  "module": "M22",
  "moduleTitle": "Advanced SQL for Analysts",
  "topic": "SQL Analytics Project",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 10",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "SQL Analytics Project",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Business question",
                  "bodyEn": "How much did each customer spend?",
                  "bodyHi": "How much did each customer spend?",
                  "tone": "lavender"
                },
                {
                  "title": "Build analysis",
                  "bodyEn": "Check data, group sales and validate totals.",
                  "bodyHi": "Check data, group sales and validate totals.",
                  "tone": "sky"
                },
                {
                  "title": "Communicate",
                  "bodyEn": "Report the findings with limitations.",
                  "bodyHi": "Report the findings with limitations.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sales transactions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "order_date",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Jan 01",
                  "100"
                ],
                [
                  "102",
                  "1",
                  "Jan 03",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "Jan 02",
                  "200"
                ],
                [
                  "104",
                  "2",
                  "Jan 05",
                  "200"
                ],
                [
                  "105",
                  "3",
                  "Jan 04",
                  "150"
                ],
                [
                  "106",
                  "3",
                  "Jan 06",
                  "250"
                ]
              ],
              "noteEn": "All dates are in January 2026. Date labels are shortened here to fit the diagram.",
              "noteHi": "All dates are in January 2026. Date labels are shortened here to fit the diagram."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "An end-to-end SQL analytics project turns a business question into a verified report. Here the goal is to understand **customer spending** from transaction data, then explain what the results mean and what they do not prove.",
        "bodyHi": "An end-to-end SQL analytics project turns a business question into a verified report. Here the goal is to understand **customer spending** from transaction data, then explain what the results mean and what they do not prove."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 10",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "SQL Analytics Project",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "WITH customer_sales AS (\n  SELECT customer_id,\n         COUNT(*) AS orders,\n         SUM(amount) AS total_sales\n  FROM orders\n  GROUP BY customer_id\n)\nSELECT * FROM customer_sales\nORDER BY total_sales DESC, customer_id;",
              "captionEn": "Each customer has two orders and 400 total sales. The CTE makes the calculation easy to read. Sorting by total_sales DESC places the largest spenders first, with customer_id as a tie-breaker.",
              "captionHi": "Each customer has two orders and 400 total sales. The CTE makes the calculation easy to read. Sorting by total_sales DESC places the largest spenders first, with customer_id as a tie-breaker."
            }
          ]
        },
        {
          "pill": "Customer spending report",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "orders",
                "total_sales"
              ],
              "rows": [
                [
                  "1",
                  "2",
                  "400"
                ],
                [
                  "2",
                  "2",
                  "400"
                ],
                [
                  "3",
                  "2",
                  "400"
                ]
              ],
              "noteEn": "All three customers tie in total spending in this small sample.",
              "noteHi": "All three customers tie in total spending in this small sample."
            }
          ]
        },
        {
          "pill": "Validate before presenting",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The customer totals must add to 1200, matching SUM(amount) from the original orders table. Confirm that one row in the source means one order, dates cover the intended period and cancelled orders are treated according to the business rule.",
              "bodyHi": "The customer totals must add to 1200, matching SUM(amount) from the original orders table. Confirm that one row in the source means one order, dates cover the intended period and cancelled orders are treated according to the business rule."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M22 | TOPIC 10",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "SQL Analytics Project",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT COUNT(*) AS order_rows,\n       COUNT(DISTINCT order_id) AS unique_orders,\n       SUM(amount) AS total_sales\nFROM orders;",
              "captionEn": "The baseline is 6 orders and 1200 total sales. If customer totals do not reconcile with the source, investigate missing customer IDs, JOIN duplication or inconsistent filters.",
              "captionHi": "The baseline is 6 orders and 1200 total sales. If customer totals do not reconcile with the source, investigate missing customer IDs, JOIN duplication or inconsistent filters."
            }
          ]
        },
        {
          "pill": "Source validation output",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_rows",
                "unique_orders",
                "total_sales"
              ],
              "rows": [
                [
                  "6",
                  "6",
                  "1200"
                ]
              ],
              "noteEn": "3 customer totals × 400 = 1200, so this example reconciles.",
              "noteHi": "3 customer totals × 400 = 1200, so this example reconciles."
            }
          ]
        },
        {
          "pill": "Compare the two ideas",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Verified finding",
                  "bodyEn": "All three sample customers spent 400 each.",
                  "bodyHi": "All three sample customers spent 400 each.",
                  "tone": "sky"
                },
                {
                  "title": "Unsupported claim",
                  "bodyEn": "These customers will spend the same amount next month.",
                  "bodyHi": "These customers will spend the same amount next month.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-world analyst takeaway",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A professional deliverable includes the business question, source details, cleaned query, checked outputs, a clear chart and limitations. This is a teaching workflow, not a graded project.",
              "bodyHi": "A professional deliverable includes the business question, source details, cleaned query, checked outputs, a clear chart and limitations. This is a teaching workflow, not a graded project."
            }
          ]
        },
        {
          "pill": "Important rules and common mistakes",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Write the business question and metric definitions before coding.",
                  "hi": "Write the business question and metric definitions before coding."
                },
                {
                  "en": "Keep the SQL readable, and document source tables and filters.",
                  "hi": "Keep the SQL readable, and document source tables and filters."
                },
                {
                  "en": "Never claim customer behavior trends from a six-row sample without more evidence.",
                  "hi": "Never claim customer behavior trends from a six-row sample without more evidence."
                },
                {
                  "en": "Share a recommendation only when it follows from verified data.",
                  "hi": "Share a recommendation only when it follows from verified data."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const M22_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  117: M22_T01_SPEC,
  213: M22_T01_SPEC,
  118: M22_T02_SPEC,
  214: M22_T02_SPEC,
  119: M22_T03_SPEC,
  215: M22_T03_SPEC,
  120: M22_T04_SPEC,
  216: M22_T04_SPEC,
  121: M22_T05_SPEC,
  217: M22_T05_SPEC,
  122: M22_T06_SPEC,
  218: M22_T06_SPEC,
  123: M22_T07_SPEC,
  219: M22_T07_SPEC,
  124: M22_T08_SPEC,
  220: M22_T08_SPEC,
  125: M22_T09_SPEC,
  221: M22_T09_SPEC,
  126: M22_T10_SPEC,
  222: M22_T10_SPEC,
};
