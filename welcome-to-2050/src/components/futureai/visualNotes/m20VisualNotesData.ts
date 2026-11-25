import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M20_T01_SPEC: StructuredVisualNoteTopic = {
  "module": "M20",
  "moduleTitle": "Joins and Relationships",
  "topic": "Understanding Primary and Foreign Keys",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Understanding Primary and Foreign Keys",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Customer ID",
                  "bodyEn": "customers.customer_id is the unique PK.",
                  "bodyHi": "customers.customer_id is the unique PK.",
                  "tone": "lavender"
                },
                {
                  "title": "Order link",
                  "bodyEn": "orders.customer_id stores the related customer ID.",
                  "bodyHi": "orders.customer_id stores the related customer ID.",
                  "tone": "sky"
                },
                {
                  "title": "Relationship",
                  "bodyEn": "Many orders can point to one customer.",
                  "bodyHi": "Many orders can point to one customer.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Customers table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "name",
                "city"
              ],
              "rows": [
                [
                  "1",
                  "Asha",
                  "Patna"
                ],
                [
                  "2",
                  "Ravi",
                  "Delhi"
                ],
                [
                  "3",
                  "Neha",
                  "Patna"
                ],
                [
                  "4",
                  "Omar",
                  "Jaipur"
                ]
              ],
              "noteEn": "customer_id uniquely identifies a customer.",
              "noteHi": "customer_id uniquely identifies a customer."
            }
          ]
        },
        {
          "pill": "Orders table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "500"
                ],
                [
                  "102",
                  "1",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "200"
                ],
                [
                  "104",
                  "NULL",
                  "150"
                ]
              ],
              "noteEn": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id.",
              "noteHi": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A **Primary Key (PK)** identifies one row in its own table. A **Foreign Key (FK)** points to a key in another table. These keys let databases connect customers to orders without copying every customer detail into each order.",
        "bodyHi": "A **Primary Key (PK)** identifies one row in its own table. A **Foreign Key (FK)** points to a key in another table. These keys let databases connect customers to orders without copying every customer detail into each order."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Understanding Primary and Foreign Keys",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "CREATE TABLE orders (\n  order_id INT PRIMARY KEY,\n  customer_id INT REFERENCES customers(customer_id),\n  amount NUMERIC(10,2)\n);",
              "captionEn": "The order_id must be unique and non-NULL. The customer_id is a foreign key: when it is not NULL, its value must exist in customers. The definition shown allows NULL, which can represent a guest order.",
              "captionHi": "The order_id must be unique and non-NULL. The customer_id is a foreign key: when it is not NULL, its value must exist in customers. The definition shown allows NULL, which can represent a guest order."
            }
          ]
        },
        {
          "pill": "How the IDs connect",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "meaning"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Asha placed order"
                ],
                [
                  "102",
                  "1",
                  "Asha placed order"
                ],
                [
                  "103",
                  "2",
                  "Ravi placed order"
                ],
                [
                  "104",
                  "NULL",
                  "Guest order"
                ]
              ],
              "noteEn": "Customer 1 can appear in several orders; the order IDs remain unique.",
              "noteHi": "Customer 1 can appear in several orders; the order IDs remain unique."
            }
          ]
        },
        {
          "pill": "Foreign key protection",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A real FK constraint prevents inserting a non-NULL customer_id that does not exist in the referenced customers table. It helps protect the relationship, but it does not prevent duplicate order rows from other causes.",
              "bodyHi": "A real FK constraint prevents inserting a non-NULL customer_id that does not exist in the referenced customers table. It helps protect the relationship, but it does not prevent duplicate order rows from other causes."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT o.order_id, o.customer_id, c.name\nFROM orders AS o\nLEFT JOIN customers AS c\n  ON o.customer_id = c.customer_id\nORDER BY o.order_id;",
              "captionEn": "A LEFT JOIN shows how the key connects records. The guest order remains, with a NULL customer name because it has no matching customer.",
              "captionHi": "A LEFT JOIN shows how the key connects records. The guest order remains, with a NULL customer name because it has no matching customer."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Understanding Primary and Foreign Keys",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Customer names from the relationship",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "name"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "Asha"
                ],
                [
                  "102",
                  "1",
                  "Asha"
                ],
                [
                  "103",
                  "2",
                  "Ravi"
                ],
                [
                  "104",
                  "NULL",
                  "NULL"
                ]
              ],
              "noteEn": "The missing name for order 104 is expected for a guest order.",
              "noteHi": "The missing name for order 104 is expected for a guest order."
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
                  "title": "Primary Key",
                  "bodyEn": "Identifies a row in its own table.",
                  "bodyHi": "Identifies a row in its own table.",
                  "tone": "sky"
                },
                {
                  "title": "Foreign Key",
                  "bodyEn": "References a key in another table.",
                  "bodyHi": "References a key in another table.",
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
              "bodyEn": "Database diagrams often draw a line from the foreign key column to the referenced primary key column.",
              "bodyHi": "Database diagrams often draw a line from the foreign key column to the referenced primary key column."
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
                  "en": "Primary keys must be unique and not NULL; foreign key values may repeat.",
                  "hi": "Primary keys must be unique and not NULL; foreign key values may repeat."
                },
                {
                  "en": "A foreign key can be NULL unless a separate NOT NULL constraint forbids it.",
                  "hi": "A foreign key can be NULL unless a separate NOT NULL constraint forbids it."
                },
                {
                  "en": "Key data types must be compatible; plan relationships before building dashboards.",
                  "hi": "Key data types must be compatible; plan relationships before building dashboards."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M20_T02_SPEC: StructuredVisualNoteTopic = {
  "module": "M20",
  "moduleTitle": "Joins and Relationships",
  "topic": "INNER JOIN",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "INNER JOIN",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Start with orders",
                  "bodyEn": "Look at each order customer_id.",
                  "bodyHi": "Look at each order customer_id.",
                  "tone": "lavender"
                },
                {
                  "title": "Find a match",
                  "bodyEn": "Compare it to customers.customer_id.",
                  "bodyHi": "Compare it to customers.customer_id.",
                  "tone": "sky"
                },
                {
                  "title": "Return matches",
                  "bodyEn": "Keep only orders with matching customers.",
                  "bodyHi": "Keep only orders with matching customers.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Customers table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "name",
                "city"
              ],
              "rows": [
                [
                  "1",
                  "Asha",
                  "Patna"
                ],
                [
                  "2",
                  "Ravi",
                  "Delhi"
                ],
                [
                  "3",
                  "Neha",
                  "Patna"
                ],
                [
                  "4",
                  "Omar",
                  "Jaipur"
                ]
              ],
              "noteEn": "customer_id uniquely identifies a customer.",
              "noteHi": "customer_id uniquely identifies a customer."
            }
          ]
        },
        {
          "pill": "Orders table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "500"
                ],
                [
                  "102",
                  "1",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "200"
                ],
                [
                  "104",
                  "NULL",
                  "150"
                ]
              ],
              "noteEn": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id.",
              "noteHi": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**INNER JOIN** combines rows only when a matching value exists in both tables. For example, it can attach customer names to orders that have a valid customer_id.",
        "bodyHi": "**INNER JOIN** combines rows only when a matching value exists in both tables. For example, it can attach customer names to orders that have a valid customer_id."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "INNER JOIN",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT o.order_id, c.name, o.amount\nFROM orders AS o\nINNER JOIN customers AS c\n  ON o.customer_id = c.customer_id\nORDER BY o.order_id;",
              "captionEn": "Order 101 and 102 both match customer 1 (Asha). Order 103 matches customer 2 (Ravi). Guest order 104 has NULL customer_id, so it does not match any customer.",
              "captionHi": "Order 101 and 102 both match customer 1 (Asha). Order 103 matches customer 2 (Ravi). Guest order 104 has NULL customer_id, so it does not match any customer."
            }
          ]
        },
        {
          "pill": "INNER JOIN result: matching rows",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "name",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "Asha",
                  "500"
                ],
                [
                  "102",
                  "Asha",
                  "300"
                ],
                [
                  "103",
                  "Ravi",
                  "200"
                ]
              ],
              "noteEn": "Three matching order rows; the guest order is excluded.",
              "noteHi": "Three matching order rows; the guest order is excluded."
            }
          ]
        },
        {
          "pill": "Why Asha appears twice",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Asha has two orders. INNER JOIN does not automatically remove repeated customer names. It returns a row for each matching pair of records.",
              "bodyHi": "Asha has two orders. INNER JOIN does not automatically remove repeated customer names. It returns a row for each matching pair of records."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "INNER JOIN",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.name, COUNT(*) AS order_count\nFROM customers AS c\nINNER JOIN orders AS o\n  ON c.customer_id = o.customer_id\nGROUP BY c.customer_id, c.name\nORDER BY c.name;",
              "captionEn": "The grouped result has Asha = 2 and Ravi = 1. Neha and Omar have no matching orders, so INNER JOIN does not include them.",
              "captionHi": "The grouped result has Asha = 2 and Ravi = 1. Neha and Omar have no matching orders, so INNER JOIN does not include them."
            }
          ]
        },
        {
          "pill": "Result: matched customer order counts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "order_count"
              ],
              "rows": [
                [
                  "Asha",
                  "2"
                ],
                [
                  "Ravi",
                  "1"
                ]
              ],
              "noteEn": "Only customers with orders appear.",
              "noteHi": "Only customers with orders appear."
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
                  "title": "INNER JOIN",
                  "bodyEn": "Keeps matching pairs only.",
                  "bodyHi": "Keeps matching pairs only.",
                  "tone": "sky"
                },
                {
                  "title": "LEFT JOIN",
                  "bodyEn": "Keeps all rows from the left table, including unmatched ones.",
                  "bodyHi": "Keeps all rows from the left table, including unmatched ones.",
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
              "bodyEn": "INNER JOIN is useful when the report should include only transactions that have a valid matching dimension record.",
              "bodyHi": "INNER JOIN is useful when the report should include only transactions that have a valid matching dimension record."
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
                  "en": "Always write the join condition with **ON**; missing conditions can multiply rows.",
                  "hi": "Always write the join condition with **ON**; missing conditions can multiply rows."
                },
                {
                  "en": "INNER JOIN excludes unmatched rows from either table.",
                  "hi": "INNER JOIN excludes unmatched rows from either table."
                },
                {
                  "en": "Check the expected result grain before aggregating joined data.",
                  "hi": "Check the expected result grain before aggregating joined data."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M20_T03_SPEC: StructuredVisualNoteTopic = {
  "module": "M20",
  "moduleTitle": "Joins and Relationships",
  "topic": "LEFT JOIN",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "LEFT JOIN",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Keep left rows",
                  "bodyEn": "Start with all four customers.",
                  "bodyHi": "Start with all four customers.",
                  "tone": "lavender"
                },
                {
                  "title": "Match orders",
                  "bodyEn": "Find zero, one or many orders for each customer.",
                  "bodyHi": "Find zero, one or many orders for each customer.",
                  "tone": "sky"
                },
                {
                  "title": "Fill missing",
                  "bodyEn": "Use NULL for order details when there is no match.",
                  "bodyHi": "Use NULL for order details when there is no match.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Customers table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "name",
                "city"
              ],
              "rows": [
                [
                  "1",
                  "Asha",
                  "Patna"
                ],
                [
                  "2",
                  "Ravi",
                  "Delhi"
                ],
                [
                  "3",
                  "Neha",
                  "Patna"
                ],
                [
                  "4",
                  "Omar",
                  "Jaipur"
                ]
              ],
              "noteEn": "customer_id uniquely identifies a customer.",
              "noteHi": "customer_id uniquely identifies a customer."
            }
          ]
        },
        {
          "pill": "Orders table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "500"
                ],
                [
                  "102",
                  "1",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "200"
                ],
                [
                  "104",
                  "NULL",
                  "150"
                ]
              ],
              "noteEn": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id.",
              "noteHi": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**LEFT JOIN** keeps every row from the table written on the left side. Matching rows from the right side are added; when no match exists, right-side columns become NULL.",
        "bodyHi": "**LEFT JOIN** keeps every row from the table written on the left side. Matching rows from the right side are added; when no match exists, right-side columns become NULL."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "LEFT JOIN",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.name, o.order_id, o.amount\nFROM customers AS c\nLEFT JOIN orders AS o\n  ON c.customer_id = o.customer_id\nORDER BY c.customer_id, o.order_id;",
              "captionEn": "Asha matches two orders, Ravi one, and Neha and Omar none. All four customers remain visible. The unmatched guest order is not included because orders is the right table.",
              "captionHi": "Asha matches two orders, Ravi one, and Neha and Omar none. All four customers remain visible. The unmatched guest order is not included because orders is the right table."
            }
          ]
        },
        {
          "pill": "LEFT JOIN result",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "order_id",
                "amount"
              ],
              "rows": [
                [
                  "Asha",
                  "101",
                  "500"
                ],
                [
                  "Asha",
                  "102",
                  "300"
                ],
                [
                  "Ravi",
                  "103",
                  "200"
                ],
                [
                  "Neha",
                  "NULL",
                  "NULL"
                ],
                [
                  "Omar",
                  "NULL",
                  "NULL"
                ]
              ],
              "noteEn": "Five output rows from four customers because Asha has two matching orders.",
              "noteHi": "Five output rows from four customers because Asha has two matching orders."
            }
          ]
        },
        {
          "pill": "Find customers with no orders",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A LEFT JOIN followed by WHERE o.order_id IS NULL finds left-side customers with no matching order. Use a non-NULL key from the right table to test for a missing match.",
              "bodyHi": "A LEFT JOIN followed by WHERE o.order_id IS NULL finds left-side customers with no matching order. Use a non-NULL key from the right table to test for a missing match."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "LEFT JOIN",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.name\nFROM customers AS c\nLEFT JOIN orders AS o\n  ON c.customer_id = o.customer_id\nWHERE o.order_id IS NULL\nORDER BY c.name;",
              "captionEn": "Only Neha and Omar remain, because they have no order rows. This is a common customer reactivation and data-quality analysis.",
              "captionHi": "Only Neha and Omar remain, because they have no order rows. This is a common customer reactivation and data-quality analysis."
            }
          ]
        },
        {
          "pill": "Customers without orders",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name"
              ],
              "rows": [
                [
                  "Neha"
                ],
                [
                  "Omar"
                ]
              ],
              "noteEn": "These names can be used for a targeted follow-up list.",
              "noteHi": "These names can be used for a targeted follow-up list."
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
                  "title": "LEFT JOIN",
                  "bodyEn": "Preserves every left-side row.",
                  "bodyHi": "Preserves every left-side row.",
                  "tone": "sky"
                },
                {
                  "title": "INNER JOIN",
                  "bodyEn": "Keeps only matched rows.",
                  "bodyHi": "Keeps only matched rows.",
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
              "bodyEn": "For a customer report, start from customers if every customer must appear, including those who have never ordered.",
              "bodyHi": "For a customer report, start from customers if every customer must appear, including those who have never ordered."
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
                  "en": "LEFT JOIN is useful for complete customer or product lists, even when no transactions exist.",
                  "hi": "LEFT JOIN is useful for complete customer or product lists, even when no transactions exist."
                },
                {
                  "en": "A condition on right-table columns in WHERE can accidentally remove unmatched rows.",
                  "hi": "A condition on right-table columns in WHERE can accidentally remove unmatched rows."
                },
                {
                  "en": "Count o.order_id, not COUNT(*), when measuring how many matching orders each customer has.",
                  "hi": "Count o.order_id, not COUNT(*), when measuring how many matching orders each customer has."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M20_T04_SPEC: StructuredVisualNoteTopic = {
  "module": "M20",
  "moduleTitle": "Joins and Relationships",
  "topic": "RIGHT JOIN",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "RIGHT JOIN",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Choose right table",
                  "bodyEn": "Orders is on the right side.",
                  "bodyHi": "Orders is on the right side.",
                  "tone": "lavender"
                },
                {
                  "title": "Find customers",
                  "bodyEn": "Match customer_id when possible.",
                  "bodyHi": "Match customer_id when possible.",
                  "tone": "sky"
                },
                {
                  "title": "Keep every order",
                  "bodyEn": "Show NULL customer details for guest orders.",
                  "bodyHi": "Show NULL customer details for guest orders.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Customers table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "name",
                "city"
              ],
              "rows": [
                [
                  "1",
                  "Asha",
                  "Patna"
                ],
                [
                  "2",
                  "Ravi",
                  "Delhi"
                ],
                [
                  "3",
                  "Neha",
                  "Patna"
                ],
                [
                  "4",
                  "Omar",
                  "Jaipur"
                ]
              ],
              "noteEn": "customer_id uniquely identifies a customer.",
              "noteHi": "customer_id uniquely identifies a customer."
            }
          ]
        },
        {
          "pill": "Orders table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "500"
                ],
                [
                  "102",
                  "1",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "200"
                ],
                [
                  "104",
                  "NULL",
                  "150"
                ]
              ],
              "noteEn": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id.",
              "noteHi": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**RIGHT JOIN** keeps every row from the table written on the right side. It is the mirror of LEFT JOIN. Analysts sometimes use it to preserve all transactions while looking up optional customer details.",
        "bodyHi": "**RIGHT JOIN** keeps every row from the table written on the right side. It is the mirror of LEFT JOIN. Analysts sometimes use it to preserve all transactions while looking up optional customer details."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "RIGHT JOIN",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT o.order_id, c.name, o.amount\nFROM customers AS c\nRIGHT JOIN orders AS o\n  ON c.customer_id = o.customer_id\nORDER BY o.order_id;",
              "captionEn": "Every order remains, including order 104. Its customer_id is NULL, so the customer name is NULL. Neha and Omar do not appear because they have no order on the right side.",
              "captionHi": "Every order remains, including order 104. Its customer_id is NULL, so the customer name is NULL. Neha and Omar do not appear because they have no order on the right side."
            }
          ]
        },
        {
          "pill": "RIGHT JOIN result",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "name",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "Asha",
                  "500"
                ],
                [
                  "102",
                  "Asha",
                  "300"
                ],
                [
                  "103",
                  "Ravi",
                  "200"
                ],
                [
                  "104",
                  "NULL",
                  "150"
                ]
              ],
              "noteEn": "All four orders are preserved.",
              "noteHi": "All four orders are preserved."
            }
          ]
        },
        {
          "pill": "A clearer equivalent",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Most teams prefer to swap the table order and use LEFT JOIN. Both queries can produce the same result when the join condition and selected columns are equivalent.",
              "bodyHi": "Most teams prefer to swap the table order and use LEFT JOIN. Both queries can produce the same result when the join condition and selected columns are equivalent."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT o.order_id, c.name, o.amount\nFROM orders AS o\nLEFT JOIN customers AS c\n  ON o.customer_id = c.customer_id\nORDER BY o.order_id;",
              "captionEn": "Here orders is on the left. The result is the same four rows as the RIGHT JOIN query. The preferred style is often the one easiest for a teammate to read.",
              "captionHi": "Here orders is on the left. The result is the same four rows as the RIGHT JOIN query. The preferred style is often the one easiest for a teammate to read."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "RIGHT JOIN",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Equivalent LEFT JOIN result",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "name",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "Asha",
                  "500"
                ],
                [
                  "102",
                  "Asha",
                  "300"
                ],
                [
                  "103",
                  "Ravi",
                  "200"
                ],
                [
                  "104",
                  "NULL",
                  "150"
                ]
              ],
              "noteEn": "Same result, with orders placed on the left.",
              "noteHi": "Same result, with orders placed on the left."
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
                  "title": "RIGHT JOIN",
                  "bodyEn": "Keep all rows from the right table.",
                  "bodyHi": "Keep all rows from the right table.",
                  "tone": "sky"
                },
                {
                  "title": "LEFT JOIN with swapped tables",
                  "bodyEn": "Keep those same rows by putting that table on the left.",
                  "bodyHi": "Keep those same rows by putting that table on the left.",
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
              "bodyEn": "SQL readability matters. Choose the direction that makes the report requirement obvious.",
              "bodyHi": "SQL readability matters. Choose the direction that makes the report requirement obvious."
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
                  "en": "RIGHT JOIN preserves the table on the **right**, not the first table.",
                  "hi": "RIGHT JOIN preserves the table on the **right**, not the first table."
                },
                {
                  "en": "Check which side must be complete before choosing a join type.",
                  "hi": "Check which side must be complete before choosing a join type."
                },
                {
                  "en": "NULL values in the matching key do not equal each other under ordinary SQL equality.",
                  "hi": "NULL values in the matching key do not equal each other under ordinary SQL equality."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M20_T05_SPEC: StructuredVisualNoteTopic = {
  "module": "M20",
  "moduleTitle": "Joins and Relationships",
  "topic": "FULL OUTER JOIN",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "FULL OUTER JOIN",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Find matches",
                  "bodyEn": "Combine customer/order pairs with equal IDs.",
                  "bodyHi": "Combine customer/order pairs with equal IDs.",
                  "tone": "lavender"
                },
                {
                  "title": "Keep unmatched customers",
                  "bodyEn": "Show customers without orders.",
                  "bodyHi": "Show customers without orders.",
                  "tone": "sky"
                },
                {
                  "title": "Keep unmatched orders",
                  "bodyEn": "Show guest orders without customers.",
                  "bodyHi": "Show guest orders without customers.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Customers table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "name",
                "city"
              ],
              "rows": [
                [
                  "1",
                  "Asha",
                  "Patna"
                ],
                [
                  "2",
                  "Ravi",
                  "Delhi"
                ],
                [
                  "3",
                  "Neha",
                  "Patna"
                ],
                [
                  "4",
                  "Omar",
                  "Jaipur"
                ]
              ],
              "noteEn": "customer_id uniquely identifies a customer.",
              "noteHi": "customer_id uniquely identifies a customer."
            }
          ]
        },
        {
          "pill": "Orders table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "500"
                ],
                [
                  "102",
                  "1",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "200"
                ],
                [
                  "104",
                  "NULL",
                  "150"
                ]
              ],
              "noteEn": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id.",
              "noteHi": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**FULL OUTER JOIN** preserves unmatched rows from both tables, as well as matching pairs. It is useful when comparing two datasets and finding records that appear in only one.",
        "bodyHi": "**FULL OUTER JOIN** preserves unmatched rows from both tables, as well as matching pairs. It is useful when comparing two datasets and finding records that appear in only one."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "FULL OUTER JOIN",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.name, o.order_id, o.amount\nFROM customers AS c\nFULL OUTER JOIN orders AS o\n  ON c.customer_id = o.customer_id\nORDER BY c.name NULLS LAST, o.order_id;",
              "captionEn": "Three order rows match customers, two customers have no orders, and one guest order has no customer. The output therefore contains six rows in total.",
              "captionHi": "Three order rows match customers, two customers have no orders, and one guest order has no customer. The output therefore contains six rows in total."
            }
          ]
        },
        {
          "pill": "FULL OUTER JOIN result",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "order_id",
                "amount"
              ],
              "rows": [
                [
                  "Asha",
                  "101",
                  "500"
                ],
                [
                  "Asha",
                  "102",
                  "300"
                ],
                [
                  "Neha",
                  "NULL",
                  "NULL"
                ],
                [
                  "Omar",
                  "NULL",
                  "NULL"
                ],
                [
                  "Ravi",
                  "103",
                  "200"
                ],
                [
                  "NULL",
                  "104",
                  "150"
                ]
              ],
              "noteEn": "Both unmatched customers and the guest order are visible.",
              "noteHi": "Both unmatched customers and the guest order are visible."
            }
          ]
        },
        {
          "pill": "Where FULL JOIN helps",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Use it for reconciliation: compare two lists and investigate rows present on only one side. Missing matches can reveal data quality problems, but may also be valid business cases.",
              "bodyHi": "Use it for reconciliation: compare two lists and investigate rows present on only one side. Missing matches can reveal data quality problems, but may also be valid business cases."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "FULL OUTER JOIN",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.customer_id, o.order_id\nFROM customers AS c\nFULL OUTER JOIN orders AS o\n  ON c.customer_id = o.customer_id\nWHERE c.customer_id IS NULL OR o.order_id IS NULL;",
              "captionEn": "This returns only the unmatched rows: customers 3 and 4, plus guest order 104. The OR condition tests for missing records on either side.",
              "captionHi": "This returns only the unmatched rows: customers 3 and 4, plus guest order 104. The OR condition tests for missing records on either side."
            }
          ]
        },
        {
          "pill": "Only unmatched records",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "order_id"
              ],
              "rows": [
                [
                  "3",
                  "NULL"
                ],
                [
                  "4",
                  "NULL"
                ],
                [
                  "NULL",
                  "104"
                ]
              ],
              "noteEn": "A simple reconciliation view.",
              "noteHi": "A simple reconciliation view."
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
                  "title": "LEFT JOIN",
                  "bodyEn": "Preserves unmatched left rows only.",
                  "bodyHi": "Preserves unmatched left rows only.",
                  "tone": "sky"
                },
                {
                  "title": "FULL OUTER JOIN",
                  "bodyEn": "Preserves unmatched rows from both sides.",
                  "bodyHi": "Preserves unmatched rows from both sides.",
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
              "bodyEn": "Use FULL OUTER JOIN carefully when keys can repeat: one matching key on each side can create several output rows.",
              "bodyHi": "Use FULL OUTER JOIN carefully when keys can repeat: one matching key on each side can create several output rows."
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
                  "en": "FULL OUTER JOIN is not supported in every SQL dialect; PostgreSQL supports it.",
                  "hi": "FULL OUTER JOIN is not supported in every SQL dialect; PostgreSQL supports it."
                },
                {
                  "en": "An unmatched row has NULL values for columns from the missing side.",
                  "hi": "An unmatched row has NULL values for columns from the missing side."
                },
                {
                  "en": "Many-to-many matches can still create multiple rows; FULL does not mean unique.",
                  "hi": "Many-to-many matches can still create multiple rows; FULL does not mean unique."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M20_T06_SPEC: StructuredVisualNoteTopic = {
  "module": "M20",
  "moduleTitle": "Joins and Relationships",
  "topic": "Joining More Than Two Tables",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Joining More Than Two Tables",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Customers",
                  "bodyEn": "Find customer name by customer_id.",
                  "bodyHi": "Find customer name by customer_id.",
                  "tone": "lavender"
                },
                {
                  "title": "Orders",
                  "bodyEn": "Connect each order to its customer.",
                  "bodyHi": "Connect each order to its customer.",
                  "tone": "sky"
                },
                {
                  "title": "Payments",
                  "bodyEn": "Connect payment status using order_id.",
                  "bodyHi": "Connect payment status using order_id.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Customers table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "name",
                "city"
              ],
              "rows": [
                [
                  "1",
                  "Asha",
                  "Patna"
                ],
                [
                  "2",
                  "Ravi",
                  "Delhi"
                ],
                [
                  "3",
                  "Neha",
                  "Patna"
                ],
                [
                  "4",
                  "Omar",
                  "Jaipur"
                ]
              ],
              "noteEn": "customer_id uniquely identifies a customer.",
              "noteHi": "customer_id uniquely identifies a customer."
            }
          ]
        },
        {
          "pill": "Orders table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "customer_id",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "1",
                  "500"
                ],
                [
                  "102",
                  "1",
                  "300"
                ],
                [
                  "103",
                  "2",
                  "200"
                ],
                [
                  "104",
                  "NULL",
                  "150"
                ]
              ],
              "noteEn": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id.",
              "noteHi": "Order 104 is a guest order with no linked customer. This example permits NULL in customer_id."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A real report may need data from **customers, orders and payments** at the same time. SQL can join three or more tables by adding one JOIN clause for each relationship.",
        "bodyHi": "A real report may need data from **customers, orders and payments** at the same time. SQL can join three or more tables by adding one JOIN clause for each relationship."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Joining More Than Two Tables",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Payments table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "payment_status"
              ],
              "rows": [
                [
                  "101",
                  "Paid"
                ],
                [
                  "102",
                  "Pending"
                ],
                [
                  "103",
                  "Paid"
                ],
                [
                  "104",
                  "Paid"
                ]
              ],
              "noteEn": "One payment-status record per example order.",
              "noteHi": "One payment-status record per example order."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.name, o.order_id, o.amount, p.payment_status\nFROM customers AS c\nJOIN orders AS o ON c.customer_id = o.customer_id\nJOIN payments AS p ON o.order_id = p.order_id\nORDER BY o.order_id;",
              "captionEn": "The first JOIN matches customers to orders. The second matches orders to payments. Only rows with matches in both joins remain: orders 101, 102 and 103. Guest order 104 is excluded by the customer INNER JOIN.",
              "captionHi": "The first JOIN matches customers to orders. The second matches orders to payments. Only rows with matches in both joins remain: orders 101, 102 and 103. Guest order 104 is excluded by the customer INNER JOIN."
            }
          ]
        },
        {
          "pill": "Three-table JOIN result",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "order_id",
                "amount",
                "payment_status"
              ],
              "rows": [
                [
                  "Asha",
                  "101",
                  "500",
                  "Paid"
                ],
                [
                  "Asha",
                  "102",
                  "300",
                  "Pending"
                ],
                [
                  "Ravi",
                  "103",
                  "200",
                  "Paid"
                ]
              ],
              "noteEn": "The result combines fields from three separate tables.",
              "noteHi": "The result combines fields from three separate tables."
            }
          ]
        },
        {
          "pill": "Join each table using its real key",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Customer names belong to customers, order amounts to orders, and payment statuses to payments. Join orders to customers on customer_id and payments to orders on order_id; never guess keys based on similar-looking values.",
              "bodyHi": "Customer names belong to customers, order amounts to orders, and payment statuses to payments. Join orders to customers on customer_id and payments to orders on order_id; never guess keys based on similar-looking values."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Joining More Than Two Tables",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT o.order_id, c.name, p.payment_status\nFROM orders AS o\nLEFT JOIN customers AS c ON o.customer_id = c.customer_id\nLEFT JOIN payments AS p ON o.order_id = p.order_id\nORDER BY o.order_id;",
              "captionEn": "Starting from orders and using LEFT JOIN preserves the guest order too. Its customer name is NULL, but its payment status is still Paid.",
              "captionHi": "Starting from orders and using LEFT JOIN preserves the guest order too. Its customer name is NULL, but its payment status is still Paid."
            }
          ]
        },
        {
          "pill": "LEFT JOIN variant: all orders",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "name",
                "payment_status"
              ],
              "rows": [
                [
                  "101",
                  "Asha",
                  "Paid"
                ],
                [
                  "102",
                  "Asha",
                  "Pending"
                ],
                [
                  "103",
                  "Ravi",
                  "Paid"
                ],
                [
                  "104",
                  "NULL",
                  "Paid"
                ]
              ],
              "noteEn": "All four orders remain when orders is the preserved table.",
              "noteHi": "All four orders remain when orders is the preserved table."
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
                  "title": "Two INNER JOINs",
                  "bodyEn": "Require a match in all three tables.",
                  "bodyHi": "Require a match in all three tables.",
                  "tone": "sky"
                },
                {
                  "title": "LEFT JOIN from orders",
                  "bodyEn": "Keep all orders even when related details are missing.",
                  "bodyHi": "Keep all orders even when related details are missing.",
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
              "bodyEn": "In production, join a payment summary with one row per order if multiple payment attempts exist.",
              "bodyHi": "In production, join a payment summary with one row per order if multiple payment attempts exist."
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
                  "en": "Use short aliases like c, o and p and qualify columns to avoid ambiguity.",
                  "hi": "Use short aliases like c, o and p and qualify columns to avoid ambiguity."
                },
                {
                  "en": "Check relationship cardinality: multiple payments per order can multiply rows.",
                  "hi": "Check relationship cardinality: multiple payments per order can multiply rows."
                },
                {
                  "en": "Validate totals and row counts after every added JOIN.",
                  "hi": "Validate totals and row counts after every added JOIN."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M20_T07_SPEC: StructuredVisualNoteTopic = {
  "module": "M20",
  "moduleTitle": "Joins and Relationships",
  "topic": "Self Join",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Self Join",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Read employee",
                  "bodyEn": "Start with each staff member.",
                  "bodyHi": "Start with each staff member.",
                  "tone": "lavender"
                },
                {
                  "title": "Find manager",
                  "bodyEn": "Match manager_id to another emp_id.",
                  "bodyHi": "Match manager_id to another emp_id.",
                  "tone": "sky"
                },
                {
                  "title": "Show names",
                  "bodyEn": "Return employee and manager together.",
                  "bodyHi": "Return employee and manager together.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Employees with manager IDs",
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
              "noteEn": "manager_id points back to emp_id in the same table.",
              "noteHi": "manager_id points back to emp_id in the same table."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT e.name AS employee, m.name AS manager\nFROM employees AS e\nLEFT JOIN employees AS m\n  ON e.manager_id = m.emp_id\nORDER BY e.emp_id;",
              "captionEn": "The employees table is used twice with different aliases: e for employee and m for manager. Ravi and Neha report to Asha; Omar reports to Ravi. Asha has no manager and stays visible due to LEFT JOIN.",
              "captionHi": "The employees table is used twice with different aliases: e for employee and m for manager. Ravi and Neha report to Asha; Omar reports to Ravi. Asha has no manager and stays visible due to LEFT JOIN."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A **Self Join** joins a table to itself. This is useful when rows relate to other rows in the same table, such as employees and their managers.",
        "bodyHi": "A **Self Join** joins a table to itself. This is useful when rows relate to other rows in the same table, such as employees and their managers."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Self Join",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Self Join result",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "employee",
                "manager"
              ],
              "rows": [
                [
                  "Asha",
                  "NULL"
                ],
                [
                  "Ravi",
                  "Asha"
                ],
                [
                  "Neha",
                  "Asha"
                ],
                [
                  "Omar",
                  "Ravi"
                ]
              ],
              "noteEn": "The same table provides both columns.",
              "noteHi": "The same table provides both columns."
            }
          ]
        },
        {
          "pill": "Aliases are essential here",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Without separate aliases, it is hard to tell which copy of employees supplies each column. e.manager_id links to m.emp_id, not to the employee own emp_id.",
              "bodyHi": "Without separate aliases, it is hard to tell which copy of employees supplies each column. e.manager_id links to m.emp_id, not to the employee own emp_id."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT e.name AS employee, m.name AS manager\nFROM employees AS e\nINNER JOIN employees AS m\n  ON e.manager_id = m.emp_id\nORDER BY e.emp_id;",
              "captionEn": "INNER JOIN returns only employees who have a matching manager. Asha disappears because her manager_id is NULL.",
              "captionHi": "INNER JOIN returns only employees who have a matching manager. Asha disappears because her manager_id is NULL."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Self Join",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "INNER self join: only matched managers",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "employee",
                "manager"
              ],
              "rows": [
                [
                  "Ravi",
                  "Asha"
                ],
                [
                  "Neha",
                  "Asha"
                ],
                [
                  "Omar",
                  "Ravi"
                ]
              ],
              "noteEn": "Asha is excluded because she has no manager.",
              "noteHi": "Asha is excluded because she has no manager."
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
                  "title": "LEFT self join",
                  "bodyEn": "Keeps employees without managers.",
                  "bodyHi": "Keeps employees without managers.",
                  "tone": "sky"
                },
                {
                  "title": "INNER self join",
                  "bodyEn": "Keeps only employees with matched managers.",
                  "bodyHi": "Keeps only employees with matched managers.",
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
              "bodyEn": "Self joins also help find related products, previous/next records under specific conditions and referral relationships.",
              "bodyHi": "Self joins also help find related products, previous/next records under specific conditions and referral relationships."
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
                  "en": "Use LEFT JOIN when top-level employees without managers should appear.",
                  "hi": "Use LEFT JOIN when top-level employees without managers should appear."
                },
                {
                  "en": "A self join is still a normal JOIN; both sides simply refer to the same table.",
                  "hi": "A self join is still a normal JOIN; both sides simply refer to the same table."
                },
                {
                  "en": "For deeper reporting chains, recursive CTEs are often more suitable than many self joins.",
                  "hi": "For deeper reporting chains, recursive CTEs are often more suitable than many self joins."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M20_T08_SPEC: StructuredVisualNoteTopic = {
  "module": "M20",
  "moduleTitle": "Joins and Relationships",
  "topic": "Cross Join",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 8",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Cross Join",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Read colors",
                  "bodyEn": "There are two color rows.",
                  "bodyHi": "There are two color rows.",
                  "tone": "lavender"
                },
                {
                  "title": "Read sizes",
                  "bodyEn": "There are three size rows.",
                  "bodyHi": "There are three size rows.",
                  "tone": "sky"
                },
                {
                  "title": "Make pairs",
                  "bodyEn": "2 colors × 3 sizes = 6 combinations.",
                  "bodyHi": "2 colors × 3 sizes = 6 combinations.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Available colors",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "color"
              ],
              "rows": [
                [
                  "Red"
                ],
                [
                  "Blue"
                ]
              ],
              "noteEn": "Two colors in the product catalogue.",
              "noteHi": "Two colors in the product catalogue."
            }
          ]
        },
        {
          "pill": "Available sizes",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "size"
              ],
              "rows": [
                [
                  "S"
                ],
                [
                  "M"
                ],
                [
                  "L"
                ]
              ],
              "noteEn": "Three sizes in the product catalogue.",
              "noteHi": "Three sizes in the product catalogue."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**CROSS JOIN** creates every possible combination of rows from two tables. It does not use an ON matching condition. A retailer can use it to plan all color-size variants of a product.",
        "bodyHi": "**CROSS JOIN** creates every possible combination of rows from two tables. It does not use an ON matching condition. A retailer can use it to plan all color-size variants of a product."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 8",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Cross Join",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.color, s.size\nFROM colors AS c\nCROSS JOIN sizes AS s\nORDER BY c.color, s.size;",
              "captionEn": "Each color pairs with every size. Blue has L, M and S; Red also has L, M and S. The result contains six rows even though the source tables contain only two and three rows.",
              "captionHi": "Each color pairs with every size. Blue has L, M and S; Red also has L, M and S. The result contains six rows even though the source tables contain only two and three rows."
            }
          ]
        },
        {
          "pill": "CROSS JOIN output",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "color",
                "size"
              ],
              "rows": [
                [
                  "Blue",
                  "L"
                ],
                [
                  "Blue",
                  "M"
                ],
                [
                  "Blue",
                  "S"
                ],
                [
                  "Red",
                  "L"
                ],
                [
                  "Red",
                  "M"
                ],
                [
                  "Red",
                  "S"
                ]
              ],
              "noteEn": "Every possible color-size combination appears.",
              "noteHi": "Every possible color-size combination appears."
            }
          ]
        },
        {
          "pill": "Understand row multiplication",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "If one table has 1,000 rows and another has 500, CROSS JOIN can return 500,000 rows. It is useful when intended, but expensive when caused accidentally by a missing join condition.",
              "bodyHi": "If one table has 1,000 rows and another has 500, CROSS JOIN can return 500,000 rows. It is useful when intended, but expensive when caused accidentally by a missing join condition."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.color, s.size\nFROM colors AS c\nCROSS JOIN sizes AS s\nWHERE NOT (c.color = 'Red' AND s.size = 'L')\nORDER BY c.color, s.size;",
              "captionEn": "WHERE can remove unwanted combinations after the CROSS JOIN. This example removes Red-L, leaving five combinations.",
              "captionHi": "WHERE can remove unwanted combinations after the CROSS JOIN. This example removes Red-L, leaving five combinations."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 8",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Cross Join",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "After removing one unavailable variant",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "color",
                "size"
              ],
              "rows": [
                [
                  "Blue",
                  "L"
                ],
                [
                  "Blue",
                  "M"
                ],
                [
                  "Blue",
                  "S"
                ],
                [
                  "Red",
                  "M"
                ],
                [
                  "Red",
                  "S"
                ]
              ],
              "noteEn": "Five combinations remain.",
              "noteHi": "Five combinations remain."
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
                  "title": "INNER JOIN",
                  "bodyEn": "Uses matching keys to select pairs.",
                  "bodyHi": "Uses matching keys to select pairs.",
                  "tone": "sky"
                },
                {
                  "title": "CROSS JOIN",
                  "bodyEn": "Produces every pair of rows.",
                  "bodyHi": "Produces every pair of rows.",
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
              "bodyEn": "A CROSS JOIN is sometimes called a Cartesian product. Its size is the product of input row counts.",
              "bodyHi": "A CROSS JOIN is sometimes called a Cartesian product. Its size is the product of input row counts."
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
                  "en": "CROSS JOIN has no ON clause because it matches every pair.",
                  "hi": "CROSS JOIN has no ON clause because it matches every pair."
                },
                {
                  "en": "Use it for calendars, scenario grids and valid product combinations.",
                  "hi": "Use it for calendars, scenario grids and valid product combinations."
                },
                {
                  "en": "Check expected row count before running it on large tables.",
                  "hi": "Check expected row count before running it on large tables."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M20_T09_SPEC: StructuredVisualNoteTopic = {
  "module": "M20",
  "moduleTitle": "Joins and Relationships",
  "topic": "Avoiding Duplicate Rows After Joins",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 9",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Avoiding Duplicate Rows After Joins",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Orders",
                  "bodyEn": "Three order records.",
                  "bodyHi": "Three order records.",
                  "tone": "lavender"
                },
                {
                  "title": "Items",
                  "bodyEn": "Orders have 2, 1 and 3 items.",
                  "bodyHi": "Orders have 2, 1 and 3 items.",
                  "tone": "sky"
                },
                {
                  "title": "Join",
                  "bodyEn": "The result has 2 + 1 + 3 = 6 rows.",
                  "bodyHi": "The result has 2 + 1 + 3 = 6 rows.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Orders: one row per order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "500"
                ],
                [
                  "102",
                  "300"
                ],
                [
                  "103",
                  "200"
                ]
              ],
              "noteEn": "The true total order amount is 500 + 300 + 200 = 1000.",
              "noteHi": "The true total order amount is 500 + 300 + 200 = 1000."
            }
          ]
        },
        {
          "pill": "Order items: several rows per order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "item",
                "qty"
              ],
              "rows": [
                [
                  "101",
                  "Pen",
                  "2"
                ],
                [
                  "101",
                  "Notebook",
                  "1"
                ],
                [
                  "102",
                  "Bag",
                  "1"
                ],
                [
                  "103",
                  "Pencil",
                  "3"
                ],
                [
                  "103",
                  "Eraser",
                  "1"
                ],
                [
                  "103",
                  "Ruler",
                  "1"
                ]
              ],
              "noteEn": "One order can contain multiple item rows.",
              "noteHi": "One order can contain multiple item rows."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A JOIN can repeat rows when one key matches multiple records. This is normal for one-to-many relationships, but it can cause **double counting** when analysts sum values from the one-side table.",
        "bodyHi": "A JOIN can repeat rows when one key matches multiple records. This is normal for one-to-many relationships, but it can cause **double counting** when analysts sum values from the one-side table."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 9",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Avoiding Duplicate Rows After Joins",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT o.order_id, o.amount, i.item\nFROM orders AS o\nJOIN order_items AS i ON o.order_id = i.order_id\nORDER BY o.order_id, i.item;",
              "captionEn": "Order 101 appears twice because it has two items; order 103 appears three times. If you sum o.amount from this joined result, you count 500 twice and 200 three times, producing the wrong total 1900.",
              "captionHi": "Order 101 appears twice because it has two items; order 103 appears three times. If you sum o.amount from this joined result, you count 500 twice and 200 three times, producing the wrong total 1900."
            }
          ]
        },
        {
          "pill": "Joined rows: repeated order amounts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "amount",
                "item"
              ],
              "rows": [
                [
                  "101",
                  "500",
                  "Notebook"
                ],
                [
                  "101",
                  "500",
                  "Pen"
                ],
                [
                  "102",
                  "300",
                  "Bag"
                ],
                [
                  "103",
                  "200",
                  "Eraser"
                ],
                [
                  "103",
                  "200",
                  "Pencil"
                ],
                [
                  "103",
                  "200",
                  "Ruler"
                ]
              ],
              "noteEn": "6 joined rows, but still only 3 unique orders.",
              "noteHi": "6 joined rows, but still only 3 unique orders."
            }
          ]
        },
        {
          "pill": "Check the grain before SUM",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Ask: what does one row mean before the JOIN and after the JOIN? For order revenue, use one row per order. COUNT(DISTINCT order_id) fixes an order count, but SUM(DISTINCT amount) is not a safe fix for revenue.",
              "bodyHi": "Ask: what does one row mean before the JOIN and after the JOIN? For order revenue, use one row per order. COUNT(DISTINCT order_id) fixes an order count, but SUM(DISTINCT amount) is not a safe fix for revenue."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M20 | TOPIC 9",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Avoiding Duplicate Rows After Joins",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT SUM(amount) AS true_revenue\nFROM orders;\nSELECT COUNT(DISTINCT o.order_id) AS orders\nFROM orders AS o\nJOIN order_items AS i ON o.order_id = i.order_id;",
              "captionEn": "Calculate revenue from the one-row-per-order table. Count distinct order IDs if the joined data is used to measure the number of orders.",
              "captionHi": "Calculate revenue from the one-row-per-order table. Count distinct order IDs if the joined data is used to measure the number of orders."
            }
          ]
        },
        {
          "pill": "Correct metrics",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "metric",
                "value"
              ],
              "rows": [
                [
                  "True order revenue",
                  "1000"
                ],
                [
                  "Distinct orders",
                  "3"
                ],
                [
                  "Joined rows",
                  "6"
                ]
              ],
              "noteEn": "The joined amount sum of 1900 would be incorrect.",
              "noteHi": "The joined amount sum of 1900 would be incorrect."
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
                  "title": "SUM(o.amount) after item JOIN",
                  "bodyEn": "Incorrect: repeats order amount for every item.",
                  "bodyHi": "Incorrect: repeats order amount for every item.",
                  "tone": "sky"
                },
                {
                  "title": "SUM(amount) from orders",
                  "bodyEn": "Correct for one-row-per-order revenue.",
                  "bodyHi": "Correct for one-row-per-order revenue.",
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
              "bodyEn": "A common production fix is to GROUP BY order_id in the item table before joining its summary to the order table.",
              "bodyHi": "A common production fix is to GROUP BY order_id in the item table before joining its summary to the order table."
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
                  "en": "A JOIN multiplying rows is not necessarily a database error; it may reflect real one-to-many data.",
                  "hi": "A JOIN multiplying rows is not necessarily a database error; it may reflect real one-to-many data."
                },
                {
                  "en": "Pre-aggregate the many-side table before joining when the report requires one row per parent.",
                  "hi": "Pre-aggregate the many-side table before joining when the report requires one row per parent."
                },
                {
                  "en": "Always reconcile joined totals with trusted source-table totals.",
                  "hi": "Always reconcile joined totals with trusted source-table totals."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const M20_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  101: M20_T01_SPEC,
  197: M20_T01_SPEC,
  102: M20_T02_SPEC,
  198: M20_T02_SPEC,
  103: M20_T03_SPEC,
  199: M20_T03_SPEC,
  104: M20_T04_SPEC,
  200: M20_T04_SPEC,
  105: M20_T05_SPEC,
  201: M20_T05_SPEC,
  106: M20_T06_SPEC,
  202: M20_T06_SPEC,
  107: M20_T07_SPEC,
  203: M20_T07_SPEC,
  108: M20_T08_SPEC,
  204: M20_T08_SPEC,
  109: M20_T09_SPEC,
  205: M20_T09_SPEC,
};
