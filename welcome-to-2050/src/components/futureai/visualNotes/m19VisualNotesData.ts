import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M19_T01_SPEC: StructuredVisualNoteTopic = {
  "module": "M19",
  "moduleTitle": "Aggregate Functions and Grouping",
  "topic": "COUNT, SUM, AVG, MIN and MAX",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "COUNT, SUM, AVG, MIN and MAX",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Read rows",
                  "bodyEn": "Start with individual order records.",
                  "bodyHi": "Start with individual order records.",
                  "tone": "lavender"
                },
                {
                  "title": "Apply a function",
                  "bodyEn": "Count, add, average or find extremes.",
                  "bodyHi": "Count, add, average or find extremes.",
                  "tone": "sky"
                },
                {
                  "title": "Show summary",
                  "bodyEn": "Return one result row without GROUP BY.",
                  "bodyHi": "Return one result row without GROUP BY.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sample orders (illustrative data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "id",
                "region",
                "category",
                "amount",
                "status"
              ],
              "rows": [
                [
                  "1",
                  "East",
                  "Books",
                  "100",
                  "Paid"
                ],
                [
                  "2",
                  "West",
                  "Tech",
                  "300",
                  "Paid"
                ],
                [
                  "3",
                  "East",
                  "Books",
                  "150",
                  "Paid"
                ],
                [
                  "4",
                  "West",
                  "Tech",
                  "200",
                  "Cancelled"
                ],
                [
                  "5",
                  "East",
                  "Tech",
                  "250",
                  "Paid"
                ],
                [
                  "6",
                  "West",
                  "Books",
                  "120",
                  "Paid"
                ]
              ],
              "noteEn": "Each row is one order. Amounts are example currency values, not live business data.",
              "noteHi": "Each row is one order. Amounts are example currency values, not live business data."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Aggregate functions** turn many rows into useful summary numbers. An analyst may need to know how many orders were placed, total revenue, average order amount, and the smallest and largest sale. Each function answers a different question.",
        "bodyHi": "**Aggregate functions** turn many rows into useful summary numbers. An analyst may need to know how many orders were placed, total revenue, average order amount, and the smallest and largest sale. Each function answers a different question."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "COUNT, SUM, AVG, MIN and MAX",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT COUNT(*) AS orders,\n       SUM(amount) AS total,\n       ROUND(AVG(amount), 2) AS average,\n       MIN(amount) AS smallest,\n       MAX(amount) AS largest\nFROM orders;",
              "captionEn": "**COUNT(*)** counts all six rows. **SUM** adds the six amounts (1120). **AVG** divides 1120 by 6, giving about 186.67. **MIN** and **MAX** find 100 and 300. ROUND formats the displayed average.",
              "captionHi": "**COUNT(*)** counts all six rows. **SUM** adds the six amounts (1120). **AVG** divides 1120 by 6, giving about 186.67. **MIN** and **MAX** find 100 and 300. ROUND formats the displayed average."
            }
          ]
        },
        {
          "pill": "Result: one row summarizes six orders",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "orders",
                "total",
                "average",
                "smallest",
                "largest"
              ],
              "rows": [
                [
                  "6",
                  "1120",
                  "186.67",
                  "100",
                  "300"
                ]
              ],
              "noteEn": "Aggregate functions summarize records without changing the stored rows.",
              "noteHi": "Aggregate functions summarize records without changing the stored rows."
            }
          ]
        },
        {
          "pill": "COUNT(*) versus COUNT(column)",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "COUNT(*) counts every row. COUNT(amount) counts only rows where amount is not NULL. SUM and AVG also ignore NULL values; AVG divides by the count of non-NULL amounts.",
              "bodyHi": "COUNT(*) counts every row. COUNT(amount) counts only rows where amount is not NULL. SUM and AVG also ignore NULL values; AVG divides by the count of non-NULL amounts."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT COUNT(*) FILTER (WHERE status = 'Paid') AS paid_orders,\n       SUM(amount) FILTER (WHERE status = 'Paid') AS paid_total\nFROM orders;",
              "captionEn": "The **FILTER** clause limits the rows used by each aggregate. Five orders are Paid, and their amounts add up to 920. The cancelled order still exists in the table.",
              "captionHi": "The **FILTER** clause limits the rows used by each aggregate. Five orders are Paid, and their amounts add up to 920. The cancelled order still exists in the table."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "COUNT, SUM, AVG, MIN and MAX",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Paid-only summary",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "paid_orders",
                "paid_total"
              ],
              "rows": [
                [
                  "5",
                  "920"
                ]
              ],
              "noteEn": "The cancelled order (amount 200) is not included in this paid summary.",
              "noteHi": "The cancelled order (amount 200) is not included in this paid summary."
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
                  "title": "COUNT(*)",
                  "bodyEn": "All rows, including rows with NULL values in other columns.",
                  "bodyHi": "All rows, including rows with NULL values in other columns.",
                  "tone": "sky"
                },
                {
                  "title": "COUNT(amount)",
                  "bodyEn": "Only rows with a non-NULL amount.",
                  "bodyHi": "Only rows with a non-NULL amount.",
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
              "bodyEn": "A business dashboard often shows all five functions together: total orders, revenue, average order value, minimum transaction and maximum transaction.",
              "bodyHi": "A business dashboard often shows all five functions together: total orders, revenue, average order value, minimum transaction and maximum transaction."
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
                  "en": "**COUNT(DISTINCT customer_id)** counts unique non-NULL customer IDs, not orders.",
                  "hi": "**COUNT(DISTINCT customer_id)** counts unique non-NULL customer IDs, not orders."
                },
                {
                  "en": "**SUM** and **AVG** return NULL if there are no non-NULL input values.",
                  "hi": "**SUM** and **AVG** return NULL if there are no non-NULL input values."
                },
                {
                  "en": "Choose the metric that matches the business question: orders, customers and revenue are different measures.",
                  "hi": "Choose the metric that matches the business question: orders, customers and revenue are different measures."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M19_T02_SPEC: StructuredVisualNoteTopic = {
  "module": "M19",
  "moduleTitle": "Aggregate Functions and Grouping",
  "topic": "GROUP BY",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "GROUP BY",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Choose a category",
                  "bodyEn": "Use region as the grouping field.",
                  "bodyHi": "Use region as the grouping field.",
                  "tone": "lavender"
                },
                {
                  "title": "Collect matching rows",
                  "bodyEn": "Put all East orders together and all West orders together.",
                  "bodyHi": "Put all East orders together and all West orders together.",
                  "tone": "sky"
                },
                {
                  "title": "Calculate per group",
                  "bodyEn": "SUM runs separately for each region.",
                  "bodyHi": "SUM runs separately for each region.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sample orders (illustrative data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "id",
                "region",
                "category",
                "amount",
                "status"
              ],
              "rows": [
                [
                  "1",
                  "East",
                  "Books",
                  "100",
                  "Paid"
                ],
                [
                  "2",
                  "West",
                  "Tech",
                  "300",
                  "Paid"
                ],
                [
                  "3",
                  "East",
                  "Books",
                  "150",
                  "Paid"
                ],
                [
                  "4",
                  "West",
                  "Tech",
                  "200",
                  "Cancelled"
                ],
                [
                  "5",
                  "East",
                  "Tech",
                  "250",
                  "Paid"
                ],
                [
                  "6",
                  "West",
                  "Books",
                  "120",
                  "Paid"
                ]
              ],
              "noteEn": "Each row is one order. Amounts are example currency values, not live business data.",
              "noteHi": "Each row is one order. Amounts are example currency values, not live business data."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**GROUP BY** creates separate summaries for categories such as region, store or product type. Instead of one total for the whole business, it gives one result row per group.",
        "bodyHi": "**GROUP BY** creates separate summaries for categories such as region, store or product type. Instead of one total for the whole business, it gives one result row per group."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "GROUP BY",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT region, SUM(amount) AS total_sales\nFROM orders\nGROUP BY region\nORDER BY region;",
              "captionEn": "GROUP BY region makes two groups. East amounts are 100 + 150 + 250 = 500. West amounts are 300 + 200 + 120 = 620. ORDER BY makes the output easier to read.",
              "captionHi": "GROUP BY region makes two groups. East amounts are 100 + 150 + 250 = 500. West amounts are 300 + 200 + 120 = 620. ORDER BY makes the output easier to read."
            }
          ]
        },
        {
          "pill": "Result: one row per region",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "region",
                "total_sales"
              ],
              "rows": [
                [
                  "East",
                  "500"
                ],
                [
                  "West",
                  "620"
                ]
              ],
              "noteEn": "The original six orders become two summary rows.",
              "noteHi": "The original six orders become two summary rows."
            }
          ]
        },
        {
          "pill": "Important SELECT rule",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "With a grouped query, each selected expression normally must be a grouping column or an aggregate (unless a functional dependency applies). Selecting an unrelated individual amount alongside GROUP BY region is not meaningful.",
              "bodyHi": "With a grouped query, each selected expression normally must be a grouping column or an aggregate (unless a functional dependency applies). Selecting an unrelated individual amount alongside GROUP BY region is not meaningful."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT category, COUNT(*) AS orders, SUM(amount) AS sales\nFROM orders\nGROUP BY category\nORDER BY category;",
              "captionEn": "Here the grouping changes to category. Books has 3 orders worth 370; Tech has 3 orders worth 750. The same source table can answer different business questions.",
              "captionHi": "Here the grouping changes to category. Books has 3 orders worth 370; Tech has 3 orders worth 750. The same source table can answer different business questions."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "GROUP BY",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Result: group by category",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "category",
                "orders",
                "sales"
              ],
              "rows": [
                [
                  "Books",
                  "3",
                  "370"
                ],
                [
                  "Tech",
                  "3",
                  "750"
                ]
              ],
              "noteEn": "Different grouping fields reveal different patterns.",
              "noteHi": "Different grouping fields reveal different patterns."
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
                  "title": "Without GROUP BY",
                  "bodyEn": "One summary row for all orders.",
                  "bodyHi": "One summary row for all orders.",
                  "tone": "sky"
                },
                {
                  "title": "With GROUP BY",
                  "bodyEn": "One summary row for each category value.",
                  "bodyHi": "One summary row for each category value.",
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
              "bodyEn": "In reporting, the grouping level is called the **grain** of the result. Always know whether one output row means a region, product, customer or month.",
              "bodyHi": "In reporting, the grouping level is called the **grain** of the result. Always know whether one output row means a region, product, customer or month."
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
                  "en": "**GROUP BY** summarizes rows; **ORDER BY** sorts the result. They are not interchangeable.",
                  "hi": "**GROUP BY** summarizes rows; **ORDER BY** sorts the result. They are not interchangeable."
                },
                {
                  "en": "Use **COUNT(*)** for row counts and **COUNT(DISTINCT ...)** for unique entities.",
                  "hi": "Use **COUNT(*)** for row counts and **COUNT(DISTINCT ...)** for unique entities."
                },
                {
                  "en": "Check whether NULL categories should form their own group. PostgreSQL groups NULL values together.",
                  "hi": "Check whether NULL categories should form their own group. PostgreSQL groups NULL values together."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M19_T03_SPEC: StructuredVisualNoteTopic = {
  "module": "M19",
  "moduleTitle": "Aggregate Functions and Grouping",
  "topic": "HAVING vs WHERE",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "HAVING vs WHERE",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "WHERE",
                  "bodyEn": "Keep only Paid orders.",
                  "bodyHi": "Keep only Paid orders.",
                  "tone": "lavender"
                },
                {
                  "title": "GROUP BY",
                  "bodyEn": "Build an East group and a West group.",
                  "bodyHi": "Build an East group and a West group.",
                  "tone": "sky"
                },
                {
                  "title": "HAVING",
                  "bodyEn": "Keep groups whose total is at least 450.",
                  "bodyHi": "Keep groups whose total is at least 450.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sample orders (illustrative data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "id",
                "region",
                "category",
                "amount",
                "status"
              ],
              "rows": [
                [
                  "1",
                  "East",
                  "Books",
                  "100",
                  "Paid"
                ],
                [
                  "2",
                  "West",
                  "Tech",
                  "300",
                  "Paid"
                ],
                [
                  "3",
                  "East",
                  "Books",
                  "150",
                  "Paid"
                ],
                [
                  "4",
                  "West",
                  "Tech",
                  "200",
                  "Cancelled"
                ],
                [
                  "5",
                  "East",
                  "Tech",
                  "250",
                  "Paid"
                ],
                [
                  "6",
                  "West",
                  "Books",
                  "120",
                  "Paid"
                ]
              ],
              "noteEn": "Each row is one order. Amounts are example currency values, not live business data.",
              "noteHi": "Each row is one order. Amounts are example currency values, not live business data."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**WHERE** filters individual rows before grouping. **HAVING** filters the groups after aggregation. Both can appear in one query, but they answer different questions.",
        "bodyHi": "**WHERE** filters individual rows before grouping. **HAVING** filters the groups after aggregation. Both can appear in one query, but they answer different questions."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "HAVING vs WHERE",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT region, SUM(amount) AS paid_sales\nFROM orders\nWHERE status = 'Paid'\nGROUP BY region\nHAVING SUM(amount) >= 450;",
              "captionEn": "First, WHERE removes the cancelled West order (200). East paid sales are 500; West paid sales are 420. HAVING keeps only the East group because 500 meets the 450 threshold.",
              "captionHi": "First, WHERE removes the cancelled West order (200). East paid sales are 500; West paid sales are 420. HAVING keeps only the East group because 500 meets the 450 threshold."
            }
          ]
        },
        {
          "pill": "Output after WHERE and HAVING",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "region",
                "paid_sales"
              ],
              "rows": [
                [
                  "East",
                  "500"
                ]
              ],
              "noteEn": "West is not displayed because its paid total is only 420.",
              "noteHi": "West is not displayed because its paid total is only 420."
            }
          ]
        },
        {
          "pill": "Processing order to remember",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "For this query, think **FROM → WHERE → GROUP BY → HAVING → SELECT**. WHERE cannot normally filter directly on SUM(amount), because the aggregate does not exist until grouping happens.",
              "bodyHi": "For this query, think **FROM → WHERE → GROUP BY → HAVING → SELECT**. WHERE cannot normally filter directly on SUM(amount), because the aggregate does not exist until grouping happens."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT region, COUNT(*) AS large_orders\nFROM orders\nWHERE amount >= 150\nGROUP BY region\nHAVING COUNT(*) >= 2;",
              "captionEn": "WHERE keeps orders of at least 150: East has two (150, 250), West has two (300, 200). HAVING keeps both groups because each has at least two matching orders.",
              "captionHi": "WHERE keeps orders of at least 150: East has two (150, 250), West has two (300, 200). HAVING keeps both groups because each has at least two matching orders."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "HAVING vs WHERE",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Second result: qualifying large orders",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "region",
                "large_orders"
              ],
              "rows": [
                [
                  "East",
                  "2"
                ],
                [
                  "West",
                  "2"
                ]
              ],
              "noteEn": "Both regions meet the minimum group count.",
              "noteHi": "Both regions meet the minimum group count."
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
                  "title": "WHERE status = Paid",
                  "bodyEn": "Removes non-Paid rows before totals are calculated.",
                  "bodyHi": "Removes non-Paid rows before totals are calculated.",
                  "tone": "sky"
                },
                {
                  "title": "HAVING SUM(amount) >= 450",
                  "bodyEn": "Removes whole groups after totals are calculated.",
                  "bodyHi": "Removes whole groups after totals are calculated.",
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
              "bodyEn": "A frequent interview question asks whether HAVING replaces WHERE. It does not: WHERE and HAVING act at different stages of a grouped query.",
              "bodyHi": "A frequent interview question asks whether HAVING replaces WHERE. It does not: WHERE and HAVING act at different stages of a grouped query."
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
                  "en": "Use **WHERE** for row-level conditions such as status, city or date.",
                  "hi": "Use **WHERE** for row-level conditions such as status, city or date."
                },
                {
                  "en": "Use **HAVING** for aggregate conditions such as SUM(amount) > 1000.",
                  "hi": "Use **HAVING** for aggregate conditions such as SUM(amount) > 1000."
                },
                {
                  "en": "Filter irrelevant rows with WHERE first when appropriate; this often reduces the work before grouping.",
                  "hi": "Filter irrelevant rows with WHERE first when appropriate; this often reduces the work before grouping."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M19_T04_SPEC: StructuredVisualNoteTopic = {
  "module": "M19",
  "moduleTitle": "Aggregate Functions and Grouping",
  "topic": "Aggregate Multiple Categories",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Aggregate Multiple Categories",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Select dimensions",
                  "bodyEn": "Choose region and category.",
                  "bodyHi": "Choose region and category.",
                  "tone": "lavender"
                },
                {
                  "title": "Make combinations",
                  "bodyEn": "East-Books, East-Tech, West-Books and West-Tech.",
                  "bodyHi": "East-Books, East-Tech, West-Books and West-Tech.",
                  "tone": "sky"
                },
                {
                  "title": "Summarize",
                  "bodyEn": "Calculate order count and sales for each pair.",
                  "bodyHi": "Calculate order count and sales for each pair.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sample orders (illustrative data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "id",
                "region",
                "category",
                "amount",
                "status"
              ],
              "rows": [
                [
                  "1",
                  "East",
                  "Books",
                  "100",
                  "Paid"
                ],
                [
                  "2",
                  "West",
                  "Tech",
                  "300",
                  "Paid"
                ],
                [
                  "3",
                  "East",
                  "Books",
                  "150",
                  "Paid"
                ],
                [
                  "4",
                  "West",
                  "Tech",
                  "200",
                  "Cancelled"
                ],
                [
                  "5",
                  "East",
                  "Tech",
                  "250",
                  "Paid"
                ],
                [
                  "6",
                  "West",
                  "Books",
                  "120",
                  "Paid"
                ]
              ],
              "noteEn": "Each row is one order. Amounts are example currency values, not live business data.",
              "noteHi": "Each row is one order. Amounts are example currency values, not live business data."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Businesses often need totals at more than one level, such as **region + product category**. GROUP BY can use multiple columns so that each unique combination receives its own summary.",
        "bodyHi": "Businesses often need totals at more than one level, such as **region + product category**. GROUP BY can use multiple columns so that each unique combination receives its own summary."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Aggregate Multiple Categories",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT region, category,\n       COUNT(*) AS order_count,\n       SUM(amount) AS sales\nFROM orders\nGROUP BY region, category\nORDER BY region, category;",
              "captionEn": "GROUP BY region, category creates a group for each existing pair. East-Books has 100 + 150 = 250. West-Tech has 300 + 200 = 500. Combinations without any orders do not appear automatically.",
              "captionHi": "GROUP BY region, category creates a group for each existing pair. East-Books has 100 + 150 = 250. West-Tech has 300 + 200 = 500. Combinations without any orders do not appear automatically."
            }
          ]
        },
        {
          "pill": "Result: region-by-category totals",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "region",
                "category",
                "orders",
                "sales"
              ],
              "rows": [
                [
                  "East",
                  "Books",
                  "2",
                  "250"
                ],
                [
                  "East",
                  "Tech",
                  "1",
                  "250"
                ],
                [
                  "West",
                  "Books",
                  "1",
                  "120"
                ],
                [
                  "West",
                  "Tech",
                  "2",
                  "500"
                ]
              ],
              "noteEn": "Each output row represents one combination, not one individual order.",
              "noteHi": "Each output row represents one combination, not one individual order."
            }
          ]
        },
        {
          "pill": "Understand the reporting grain",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Grouping by region alone produces 2 rows. Grouping by region and category produces 4 rows. Adding dimensions creates a more detailed view; removing them gives a higher-level summary.",
              "bodyHi": "Grouping by region alone produces 2 rows. Grouping by region and category produces 4 rows. Adding dimensions creates a more detailed view; removing them gives a higher-level summary."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Aggregate Multiple Categories",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT region, status, COUNT(*) AS orders\nFROM orders\nGROUP BY region, status\nORDER BY region, status;",
              "captionEn": "This second view measures order status by region: East has 3 Paid; West has 2 Paid and 1 Cancelled. Grouping columns should match the dimensions requested by the business.",
              "captionHi": "This second view measures order status by region: East has 3 Paid; West has 2 Paid and 1 Cancelled. Grouping columns should match the dimensions requested by the business."
            }
          ]
        },
        {
          "pill": "Result: status by region",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "region",
                "status",
                "orders"
              ],
              "rows": [
                [
                  "East",
                  "Paid",
                  "3"
                ],
                [
                  "West",
                  "Cancelled",
                  "1"
                ],
                [
                  "West",
                  "Paid",
                  "2"
                ]
              ],
              "noteEn": "Three existing region/status combinations.",
              "noteHi": "Three existing region/status combinations."
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
                  "title": "GROUP BY region",
                  "bodyEn": "Two groups, one for each region.",
                  "bodyHi": "Two groups, one for each region.",
                  "tone": "sky"
                },
                {
                  "title": "GROUP BY region, category",
                  "bodyEn": "Four groups, one for each region-category pair.",
                  "bodyHi": "Four groups, one for each region-category pair.",
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
              "bodyEn": "A pivot-style business report is often a grouped SQL result displayed as rows and columns in a reporting tool.",
              "bodyHi": "A pivot-style business report is often a grouped SQL result displayed as rows and columns in a reporting tool."
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
                  "en": "Include all intended grouping columns, but avoid extra columns that split a useful total into tiny groups.",
                  "hi": "Include all intended grouping columns, but avoid extra columns that split a useful total into tiny groups."
                },
                {
                  "en": "Check whether the source data contains repeated order rows before counting.",
                  "hi": "Check whether the source data contains repeated order rows before counting."
                },
                {
                  "en": "For grand totals and subtotals, PostgreSQL also supports **ROLLUP** and **GROUPING SETS**.",
                  "hi": "For grand totals and subtotals, PostgreSQL also supports **ROLLUP** and **GROUPING SETS**."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M19_T05_SPEC: StructuredVisualNoteTopic = {
  "module": "M19",
  "moduleTitle": "Aggregate Functions and Grouping",
  "topic": "Conditional Aggregation",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Conditional Aggregation",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Test each row",
                  "bodyEn": "Read its status.",
                  "bodyHi": "Read its status.",
                  "tone": "lavender"
                },
                {
                  "title": "Choose contribution",
                  "bodyEn": "Use amount for matching rows and zero otherwise.",
                  "bodyHi": "Use amount for matching rows and zero otherwise.",
                  "tone": "sky"
                },
                {
                  "title": "Add contributions",
                  "bodyEn": "SUM gives a separate metric for each condition.",
                  "bodyHi": "SUM gives a separate metric for each condition.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sample orders (illustrative data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "id",
                "region",
                "category",
                "amount",
                "status"
              ],
              "rows": [
                [
                  "1",
                  "East",
                  "Books",
                  "100",
                  "Paid"
                ],
                [
                  "2",
                  "West",
                  "Tech",
                  "300",
                  "Paid"
                ],
                [
                  "3",
                  "East",
                  "Books",
                  "150",
                  "Paid"
                ],
                [
                  "4",
                  "West",
                  "Tech",
                  "200",
                  "Cancelled"
                ],
                [
                  "5",
                  "East",
                  "Tech",
                  "250",
                  "Paid"
                ],
                [
                  "6",
                  "West",
                  "Books",
                  "120",
                  "Paid"
                ]
              ],
              "noteEn": "Each row is one order. Amounts are example currency values, not live business data.",
              "noteHi": "Each row is one order. Amounts are example currency values, not live business data."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Conditional aggregation** calculates different business metrics in one query. A CASE expression decides which values contribute to each SUM or COUNT, such as paid revenue versus cancelled value.",
        "bodyHi": "**Conditional aggregation** calculates different business metrics in one query. A CASE expression decides which values contribute to each SUM or COUNT, such as paid revenue versus cancelled value."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Conditional Aggregation",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT\n  SUM(CASE WHEN status = 'Paid' THEN amount ELSE 0 END) AS paid_sales,\n  SUM(CASE WHEN status = 'Cancelled' THEN amount ELSE 0 END) AS cancelled_value\nFROM orders;",
              "captionEn": "For Paid rows, the first CASE returns the amount; for the cancelled row it returns 0. The first SUM is 920. The second CASE does the opposite and returns 200 for the cancelled order.",
              "captionHi": "For Paid rows, the first CASE returns the amount; for the cancelled row it returns 0. The first SUM is 920. The second CASE does the opposite and returns 200 for the cancelled order."
            }
          ]
        },
        {
          "pill": "Result: two measures in one row",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "paid_sales",
                "cancelled_value"
              ],
              "rows": [
                [
                  "920",
                  "200"
                ]
              ],
              "noteEn": "Cancelled value is not the same thing as completed revenue.",
              "noteHi": "Cancelled value is not the same thing as completed revenue."
            }
          ]
        },
        {
          "pill": "Why ELSE 0 matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Without ELSE, CASE returns NULL for unmatched rows. SUM ignores those NULL values, but it can return NULL if no rows match. ELSE 0 is often useful when a zero count or total is required.",
              "bodyHi": "Without ELSE, CASE returns NULL for unmatched rows. SUM ignores those NULL values, but it can return NULL if no rows match. ELSE 0 is often useful when a zero count or total is required."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT region,\n  SUM(CASE WHEN status = 'Paid' THEN amount ELSE 0 END) AS paid_sales\nFROM orders\nGROUP BY region\nORDER BY region;",
              "captionEn": "This combines conditional aggregation with GROUP BY. East Paid total = 500. West Paid total = 300 + 120 = 420. The cancelled West order does not contribute.",
              "captionHi": "This combines conditional aggregation with GROUP BY. East Paid total = 500. West Paid total = 300 + 120 = 420. The cancelled West order does not contribute."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Conditional Aggregation",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Result: paid revenue by region",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "region",
                "paid_sales"
              ],
              "rows": [
                [
                  "East",
                  "500"
                ],
                [
                  "West",
                  "420"
                ]
              ],
              "noteEn": "Only Paid orders contribute to this metric.",
              "noteHi": "Only Paid orders contribute to this metric."
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
                  "title": "SUM(CASE WHEN ... THEN amount ELSE 0 END)",
                  "bodyEn": "Portable pattern for conditional totals.",
                  "bodyHi": "Portable pattern for conditional totals.",
                  "tone": "sky"
                },
                {
                  "title": "SUM(amount) FILTER (WHERE ...)",
                  "bodyEn": "PostgreSQL syntax for conditional totals.",
                  "bodyHi": "PostgreSQL syntax for conditional totals.",
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
              "bodyEn": "Conditional aggregation is useful for dashboards showing Paid, Pending and Cancelled counts side by side without running many separate queries.",
              "bodyHi": "Conditional aggregation is useful for dashboards showing Paid, Pending and Cancelled counts side by side without running many separate queries."
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
                  "en": "PostgreSQL also supports **SUM(amount) FILTER (WHERE status = ...)** as a clear alternative.",
                  "hi": "PostgreSQL also supports **SUM(amount) FILTER (WHERE status = ...)** as a clear alternative."
                },
                {
                  "en": "Decide whether missing amounts should be excluded or treated as zero; those choices have different meanings.",
                  "hi": "Decide whether missing amounts should be excluded or treated as zero; those choices have different meanings."
                },
                {
                  "en": "Use descriptive metric names such as paid_sales, not vague names such as value1.",
                  "hi": "Use descriptive metric names such as paid_sales, not vague names such as value1."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M19_T06_SPEC: StructuredVisualNoteTopic = {
  "module": "M19",
  "moduleTitle": "Aggregate Functions and Grouping",
  "topic": "CASE WHEN Expressions",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "CASE WHEN Expressions",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Read a row",
                  "bodyEn": "Look at its amount.",
                  "bodyHi": "Look at its amount.",
                  "tone": "lavender"
                },
                {
                  "title": "Test conditions",
                  "bodyEn": "Is amount at least 200?",
                  "bodyHi": "Is amount at least 200?",
                  "tone": "sky"
                },
                {
                  "title": "Return a label",
                  "bodyEn": "High if true, otherwise Low.",
                  "bodyHi": "High if true, otherwise Low.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Sample orders (illustrative data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "id",
                "region",
                "category",
                "amount",
                "status"
              ],
              "rows": [
                [
                  "1",
                  "East",
                  "Books",
                  "100",
                  "Paid"
                ],
                [
                  "2",
                  "West",
                  "Tech",
                  "300",
                  "Paid"
                ],
                [
                  "3",
                  "East",
                  "Books",
                  "150",
                  "Paid"
                ],
                [
                  "4",
                  "West",
                  "Tech",
                  "200",
                  "Cancelled"
                ],
                [
                  "5",
                  "East",
                  "Tech",
                  "250",
                  "Paid"
                ],
                [
                  "6",
                  "West",
                  "Books",
                  "120",
                  "Paid"
                ]
              ],
              "noteEn": "Each row is one order. Amounts are example currency values, not live business data.",
              "noteHi": "Each row is one order. Amounts are example currency values, not live business data."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT id, amount,\n       CASE WHEN amount >= 200 THEN 'High'\n            ELSE 'Low' END AS order_band\nFROM orders\nORDER BY id;",
              "captionEn": "CASE checks the condition for each row. Orders 2, 4 and 5 have amounts of at least 200, so they receive High. The other three receive Low. CASE does not change the original table.",
              "captionHi": "CASE checks the condition for each row. Orders 2, 4 and 5 have amounts of at least 200, so they receive High. The other three receive Low. CASE does not change the original table."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**CASE WHEN** adds decision logic to SQL. It tests conditions and returns a label or value. Analysts use it to create spending bands, risk levels, status groups and reporting categories.",
        "bodyHi": "**CASE WHEN** adds decision logic to SQL. It tests conditions and returns a label or value. Analysts use it to create spending bands, risk levels, status groups and reporting categories."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "CASE WHEN Expressions",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Output: a new calculated label",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "id",
                "amount",
                "order_band"
              ],
              "rows": [
                [
                  "1",
                  "100",
                  "Low"
                ],
                [
                  "2",
                  "300",
                  "High"
                ],
                [
                  "3",
                  "150",
                  "Low"
                ],
                [
                  "4",
                  "200",
                  "High"
                ],
                [
                  "5",
                  "250",
                  "High"
                ],
                [
                  "6",
                  "120",
                  "Low"
                ]
              ],
              "noteEn": "A CASE result can appear in SELECT without changing stored data.",
              "noteHi": "A CASE result can appear in SELECT without changing stored data."
            }
          ]
        },
        {
          "pill": "Multiple WHEN conditions",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "SQL tests WHEN conditions in order and returns the result for the first true condition. Put more specific rules first when conditions overlap; use ELSE for all remaining cases.",
              "bodyHi": "SQL tests WHEN conditions in order and returns the result for the first true condition. Put more specific rules first when conditions overlap; use ELSE for all remaining cases."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT id, amount,\n  CASE WHEN amount >= 250 THEN 'Premium'\n       WHEN amount >= 150 THEN 'Standard'\n       ELSE 'Small' END AS size_band\nFROM orders\nORDER BY id;",
              "captionEn": "Amounts 300 and 250 become Premium. Amounts 150 and 200 become Standard. Amounts 100 and 120 become Small. The order of WHEN branches matters.",
              "captionHi": "Amounts 300 and 250 become Premium. Amounts 150 and 200 become Standard. Amounts 100 and 120 become Small. The order of WHEN branches matters."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "CASE WHEN Expressions",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Output: three spending bands",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "id",
                "size_band"
              ],
              "rows": [
                [
                  "1",
                  "Small"
                ],
                [
                  "2",
                  "Premium"
                ],
                [
                  "3",
                  "Standard"
                ],
                [
                  "4",
                  "Standard"
                ],
                [
                  "5",
                  "Premium"
                ],
                [
                  "6",
                  "Small"
                ]
              ],
              "noteEn": "The first matching WHEN branch wins.",
              "noteHi": "The first matching WHEN branch wins."
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
                  "title": "CASE in SELECT",
                  "bodyEn": "Creates a calculated label or value for each row.",
                  "bodyHi": "Creates a calculated label or value for each row.",
                  "tone": "sky"
                },
                {
                  "title": "CASE inside SUM",
                  "bodyEn": "Creates conditional totals across rows.",
                  "bodyHi": "Creates conditional totals across rows.",
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
              "bodyEn": "Business teams can review CASE-based categories before using them in dashboards, ensuring that thresholds reflect real policies.",
              "bodyHi": "Business teams can review CASE-based categories before using them in dashboards, ensuring that thresholds reflect real policies."
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
                  "en": "CASE is an **expression**, not a loop or a separate table.",
                  "hi": "CASE is an **expression**, not a loop or a separate table."
                },
                {
                  "en": "Use consistent return types, such as text labels for every branch.",
                  "hi": "Use consistent return types, such as text labels for every branch."
                },
                {
                  "en": "A missing ELSE returns NULL when no condition matches.",
                  "hi": "A missing ELSE returns NULL when no condition matches."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M19_T07_SPEC: StructuredVisualNoteTopic = {
  "module": "M19",
  "moduleTitle": "Aggregate Functions and Grouping",
  "topic": "Date Grouping and Period Analysis",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Date Grouping and Period Analysis",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Read dates",
                  "bodyEn": "Each order has a transaction date.",
                  "bodyHi": "Each order has a transaction date.",
                  "tone": "lavender"
                },
                {
                  "title": "Choose period",
                  "bodyEn": "Group dates into calendar months.",
                  "bodyHi": "Group dates into calendar months.",
                  "tone": "sky"
                },
                {
                  "title": "Calculate totals",
                  "bodyEn": "SUM amount for each month.",
                  "bodyHi": "SUM amount for each month.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Order dates and amounts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "order_date",
                "amount"
              ],
              "rows": [
                [
                  "1",
                  "2026-01-05",
                  "100"
                ],
                [
                  "2",
                  "2026-01-20",
                  "300"
                ],
                [
                  "3",
                  "2026-02-02",
                  "150"
                ],
                [
                  "4",
                  "2026-02-15",
                  "200"
                ],
                [
                  "5",
                  "2026-03-01",
                  "250"
                ],
                [
                  "6",
                  "2026-03-03",
                  "120"
                ]
              ],
              "noteEn": "This sample spans three calendar months in 2026.",
              "noteHi": "This sample spans three calendar months in 2026."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT DATE_TRUNC('month', order_date)::date AS month,\n       SUM(amount) AS sales\nFROM orders\nGROUP BY DATE_TRUNC('month', order_date)\nORDER BY month;",
              "captionEn": "DATE_TRUNC('month', ...) sets each date to the first day of its month. ::date displays the result as a date. GROUP BY then sums January (400), February (350) and March (370). The order_date column must have a date/time type.",
              "captionHi": "DATE_TRUNC('month', ...) sets each date to the first day of its month. ::date displays the result as a date. GROUP BY then sums January (400), February (350) and March (370). The order_date column must have a date/time type."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Analysts group transactions by **day, month, quarter or year** to find trends. PostgreSQL can convert timestamps into reporting periods with **DATE_TRUNC**, then use GROUP BY to summarize each period.",
        "bodyHi": "Analysts group transactions by **day, month, quarter or year** to find trends. PostgreSQL can convert timestamps into reporting periods with **DATE_TRUNC**, then use GROUP BY to summarize each period."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Date Grouping and Period Analysis",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Result: monthly sales",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "month",
                "sales"
              ],
              "rows": [
                [
                  "2026-01-01",
                  "400"
                ],
                [
                  "2026-02-01",
                  "350"
                ],
                [
                  "2026-03-01",
                  "370"
                ]
              ],
              "noteEn": "January 100 + 300 = 400; February 150 + 200 = 350; March 250 + 120 = 370.",
              "noteHi": "January 100 + 300 = 400; February 150 + 200 = 350; March 250 + 120 = 370."
            }
          ]
        },
        {
          "pill": "Keep year and month together",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Grouping only by EXTRACT(MONTH FROM order_date) mixes January 2025 with January 2026. DATE_TRUNC month keeps the year in the period value.",
              "bodyHi": "Grouping only by EXTRACT(MONTH FROM order_date) mixes January 2025 with January 2026. DATE_TRUNC month keeps the year in the period value."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT DATE_TRUNC('month', order_date)::date AS month,\n       COUNT(*) AS orders,\n       ROUND(AVG(amount), 2) AS avg_order\nFROM orders\nGROUP BY DATE_TRUNC('month', order_date)\nORDER BY month;",
              "captionEn": "Each month has 2 orders. Average order values are 200 for January, 175 for February and 185 for March. This shows why order count and sales total should be reviewed together.",
              "captionHi": "Each month has 2 orders. Average order values are 200 for January, 175 for February and 185 for March. This shows why order count and sales total should be reviewed together."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M19 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Date Grouping and Period Analysis",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Result: monthly volume and average",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "month",
                "orders",
                "avg_order"
              ],
              "rows": [
                [
                  "2026-01-01",
                  "2",
                  "200.00"
                ],
                [
                  "2026-02-01",
                  "2",
                  "175.00"
                ],
                [
                  "2026-03-01",
                  "2",
                  "185.00"
                ]
              ],
              "noteEn": "Volume is equal across months, but average order value differs.",
              "noteHi": "Volume is equal across months, but average order value differs."
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
                  "title": "DATE_TRUNC month",
                  "bodyEn": "Keeps the year and month together.",
                  "bodyHi": "Keeps the year and month together.",
                  "tone": "sky"
                },
                {
                  "title": "EXTRACT month alone",
                  "bodyEn": "Returns a month number; may combine different years.",
                  "bodyHi": "Returns a month number; may combine different years.",
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
              "bodyEn": "Period analysis supports month-over-month reporting, seasonality checks and executive sales dashboards.",
              "bodyHi": "Period analysis supports month-over-month reporting, seasonality checks and executive sales dashboards."
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
                  "en": "Decide whether business reporting uses calendar months, fiscal periods or another calendar.",
                  "hi": "Decide whether business reporting uses calendar months, fiscal periods or another calendar."
                },
                {
                  "en": "Timestamp time zones can change which calendar date an event belongs to.",
                  "hi": "Timestamp time zones can change which calendar date an event belongs to."
                },
                {
                  "en": "Missing months will not appear automatically; a calendar table can help show periods with zero sales.",
                  "hi": "Missing months will not appear automatically; a calendar table can help show periods with zero sales."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const M19_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  94: M19_T01_SPEC,
  190: M19_T01_SPEC,
  95: M19_T02_SPEC,
  191: M19_T02_SPEC,
  96: M19_T03_SPEC,
  192: M19_T03_SPEC,
  97: M19_T04_SPEC,
  193: M19_T04_SPEC,
  98: M19_T05_SPEC,
  194: M19_T05_SPEC,
  99: M19_T06_SPEC,
  195: M19_T06_SPEC,
  100: M19_T07_SPEC,
  196: M19_T07_SPEC,
};
