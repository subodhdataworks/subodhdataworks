import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M21_T01_SPEC: StructuredVisualNoteTopic = {
  "module": "M21",
  "moduleTitle": "Subqueries and Set Operations",
  "topic": "What Is a Subquery?",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "What Is a Subquery?",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Inner SELECT",
                  "bodyEn": "Calculate average salary.",
                  "bodyHi": "Calculate average salary.",
                  "tone": "lavender"
                },
                {
                  "title": "Pass result",
                  "bodyEn": "The average is 61000.",
                  "bodyHi": "The average is 61000.",
                  "tone": "sky"
                },
                {
                  "title": "Outer SELECT",
                  "bodyEn": "Return employees above that average.",
                  "bodyHi": "Return employees above that average.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Employees table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "emp_id",
                "name",
                "department",
                "salary"
              ],
              "rows": [
                [
                  "1",
                  "Asha",
                  "Sales",
                  "60000"
                ],
                [
                  "2",
                  "Ravi",
                  "Sales",
                  "50000"
                ],
                [
                  "3",
                  "Neha",
                  "IT",
                  "80000"
                ],
                [
                  "4",
                  "Omar",
                  "IT",
                  "70000"
                ],
                [
                  "5",
                  "Isha",
                  "HR",
                  "45000"
                ]
              ],
              "noteEn": "Five example employees. Salary values are illustrative.",
              "noteHi": "Five example employees. Salary values are illustrative."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT name, salary\nFROM employees\nWHERE salary > (\n  SELECT AVG(salary) FROM employees\n)\nORDER BY salary DESC;",
              "captionEn": "The inner SELECT calculates (60000 + 50000 + 80000 + 70000 + 45000) / 5 = 61000. The outer WHERE compares each salary to 61000 and keeps only higher values.",
              "captionHi": "The inner SELECT calculates (60000 + 50000 + 80000 + 70000 + 45000) / 5 = 61000. The outer WHERE compares each salary to 61000 and keeps only higher values."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A **subquery** is a SELECT statement inside another SQL statement. The inner query provides a value or set of values that the outer query uses. It helps answer questions such as: which employees earn more than the company average?",
        "bodyHi": "A **subquery** is a SELECT statement inside another SQL statement. The inner query provides a value or set of values that the outer query uses. It helps answer questions such as: which employees earn more than the company average?"
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "What Is a Subquery?",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Result: above-average salaries",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "salary"
              ],
              "rows": [
                [
                  "Neha",
                  "80000"
                ],
                [
                  "Omar",
                  "70000"
                ]
              ],
              "noteEn": "The subquery returns a single number used by the outer filter.",
              "noteHi": "The subquery returns a single number used by the outer filter."
            }
          ]
        },
        {
          "pill": "Read from inside out",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A simple way to understand this query is to read the inner SELECT first, then the outer SELECT. In practice, the SQL optimizer can choose its own execution strategy.",
              "bodyHi": "A simple way to understand this query is to read the inner SELECT first, then the outer SELECT. In practice, the SQL optimizer can choose its own execution strategy."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT name\nFROM employees\nWHERE department IN (\n  SELECT department FROM employees WHERE salary >= 70000\n)\nORDER BY name;",
              "captionEn": "The inner query returns IT for both high earners. IN checks whether each employee department is in that set. Neha and Omar are in IT, so both are returned.",
              "captionHi": "The inner query returns IT for both high earners. IN checks whether each employee department is in that set. Neha and Omar are in IT, so both are returned."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "What Is a Subquery?",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Department-based subquery result",
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
              "noteEn": "IN tests membership in the inner result set.",
              "noteHi": "IN tests membership in the inner result set."
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
                  "title": "Scalar subquery",
                  "bodyEn": "Returns one value, such as AVG(salary).",
                  "bodyHi": "Returns one value, such as AVG(salary).",
                  "tone": "sky"
                },
                {
                  "title": "Set subquery",
                  "bodyEn": "Returns several values to test with IN or EXISTS.",
                  "bodyHi": "Returns several values to test with IN or EXISTS.",
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
              "bodyEn": "Subqueries are useful when a filter depends on another calculation or lookup rather than a fixed number.",
              "bodyHi": "Subqueries are useful when a filter depends on another calculation or lookup rather than a fixed number."
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
                  "en": "Put a scalar subquery in parentheses when using it as one value.",
                  "hi": "Put a scalar subquery in parentheses when using it as one value."
                },
                {
                  "en": "A subquery used with = or > must return at most one row.",
                  "hi": "A subquery used with = or > must return at most one row."
                },
                {
                  "en": "Subqueries can appear in WHERE, FROM and SELECT, but each placement has different rules.",
                  "hi": "Subqueries can appear in WHERE, FROM and SELECT, but each placement has different rules."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M21_T02_SPEC: StructuredVisualNoteTopic = {
  "module": "M21",
  "moduleTitle": "Subqueries and Set Operations",
  "topic": "Scalar and Multi-Row Subqueries",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Scalar and Multi-Row Subqueries",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Scalar",
                  "bodyEn": "One value: average salary = 61000.",
                  "bodyHi": "One value: average salary = 61000.",
                  "tone": "lavender"
                },
                {
                  "title": "Multi-row",
                  "bodyEn": "Several department or ID values.",
                  "bodyHi": "Several department or ID values.",
                  "tone": "sky"
                },
                {
                  "title": "Choose operator",
                  "bodyEn": "Use > for one value; IN for a set.",
                  "bodyHi": "Use > for one value; IN for a set.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Employees table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "emp_id",
                "name",
                "department",
                "salary"
              ],
              "rows": [
                [
                  "1",
                  "Asha",
                  "Sales",
                  "60000"
                ],
                [
                  "2",
                  "Ravi",
                  "Sales",
                  "50000"
                ],
                [
                  "3",
                  "Neha",
                  "IT",
                  "80000"
                ],
                [
                  "4",
                  "Omar",
                  "IT",
                  "70000"
                ],
                [
                  "5",
                  "Isha",
                  "HR",
                  "45000"
                ]
              ],
              "noteEn": "Five example employees. Salary values are illustrative.",
              "noteHi": "Five example employees. Salary values are illustrative."
            }
          ]
        },
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT name, salary\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees)\nORDER BY salary DESC;",
              "captionEn": "AVG returns one number, so > can compare each employee salary with that single value. The result is Neha and Omar.",
              "captionHi": "AVG returns one number, so > can compare each employee salary with that single value. The result is Neha and Omar."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Subqueries differ by the number of values they return. A **scalar subquery** returns one value. A **multi-row subquery** returns a set of rows and is often used with IN, ANY or ALL.",
        "bodyHi": "Subqueries differ by the number of values they return. A **scalar subquery** returns one value. A **multi-row subquery** returns a set of rows and is often used with IN, ANY or ALL."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Scalar and Multi-Row Subqueries",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Scalar subquery output",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "salary"
              ],
              "rows": [
                [
                  "Neha",
                  "80000"
                ],
                [
                  "Omar",
                  "70000"
                ]
              ],
              "noteEn": "One comparison value is used for every employee.",
              "noteHi": "One comparison value is used for every employee."
            }
          ]
        },
        {
          "pill": "Why = can fail with several rows",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A scalar comparison such as salary = (SELECT salary FROM employees) fails if the inner SELECT returns multiple rows. Use IN for set membership, or make the subquery return one value when that is the intended rule.",
              "bodyHi": "A scalar comparison such as salary = (SELECT salary FROM employees) fails if the inner SELECT returns multiple rows. Use IN for set membership, or make the subquery return one value when that is the intended rule."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT name, department\nFROM employees\nWHERE department IN (\n  SELECT department FROM employees WHERE salary >= 70000\n)\nORDER BY name;",
              "captionEn": "The inner query produces the department value IT twice. IN tests membership, so duplicates do not cause duplicated outer rows. Neha and Omar are returned.",
              "captionHi": "The inner query produces the department value IT twice. IN tests membership, so duplicates do not cause duplicated outer rows. Neha and Omar are returned."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Scalar and Multi-Row Subqueries",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Multi-row subquery output",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "department"
              ],
              "rows": [
                [
                  "Neha",
                  "IT"
                ],
                [
                  "Omar",
                  "IT"
                ]
              ],
              "noteEn": "The outer query returns each qualifying employee once.",
              "noteHi": "The outer query returns each qualifying employee once."
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
                  "title": "salary > (SELECT AVG(...))",
                  "bodyEn": "Scalar comparison against one number.",
                  "bodyHi": "Scalar comparison against one number.",
                  "tone": "sky"
                },
                {
                  "title": "department IN (SELECT ...)",
                  "bodyEn": "Set membership against multiple rows.",
                  "bodyHi": "Set membership against multiple rows.",
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
              "bodyEn": "The correct subquery shape depends on the business question: one benchmark or a list of acceptable matches.",
              "bodyHi": "The correct subquery shape depends on the business question: one benchmark or a list of acceptable matches."
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
                  "en": "Scalar means one value, not one column with many rows.",
                  "hi": "Scalar means one value, not one column with many rows."
                },
                {
                  "en": "IN handles a set of values; a subquery can return duplicates without changing IN membership.",
                  "hi": "IN handles a set of values; a subquery can return duplicates without changing IN membership."
                },
                {
                  "en": "ANY and ALL compare a value against some or all results, but require careful NULL handling.",
                  "hi": "ANY and ALL compare a value against some or all results, but require careful NULL handling."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M21_T03_SPEC: StructuredVisualNoteTopic = {
  "module": "M21",
  "moduleTitle": "Subqueries and Set Operations",
  "topic": "IN and EXISTS",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "IN and EXISTS",
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
                  "bodyEn": "Start with the full customer list.",
                  "bodyHi": "Start with the full customer list.",
                  "tone": "lavender"
                },
                {
                  "title": "Orders",
                  "bodyEn": "Look for matching customer_id values.",
                  "bodyHi": "Look for matching customer_id values.",
                  "tone": "sky"
                },
                {
                  "title": "Keep buyers",
                  "bodyEn": "Return customers with at least one order.",
                  "bodyHi": "Return customers with at least one order.",
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
        "bodyEn": "**IN** checks whether a value appears in a list or subquery result. **EXISTS** checks whether a subquery finds at least one row. Both can answer which customers have placed an order.",
        "bodyHi": "**IN** checks whether a value appears in a list or subquery result. **EXISTS** checks whether a subquery finds at least one row. Both can answer which customers have placed an order."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "IN and EXISTS",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT name\nFROM customers\nWHERE customer_id IN (\n  SELECT customer_id FROM orders\n)\nORDER BY name;",
              "captionEn": "The orders table contains customer IDs 1, 1, 2 and NULL. IN finds matching customer IDs 1 and 2, so Asha and Ravi appear. Asha is not duplicated in the outer result.",
              "captionHi": "The orders table contains customer IDs 1, 1, 2 and NULL. IN finds matching customer IDs 1 and 2, so Asha and Ravi appear. Asha is not duplicated in the outer result."
            }
          ]
        },
        {
          "pill": "IN result: customers who ordered",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name"
              ],
              "rows": [
                [
                  "Asha"
                ],
                [
                  "Ravi"
                ]
              ],
              "noteEn": "Each matching customer is returned once.",
              "noteHi": "Each matching customer is returned once."
            }
          ]
        },
        {
          "pill": "How EXISTS works",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "EXISTS checks whether the correlated inner SELECT finds at least one matching order for the current customer. SELECT 1 is conventional: EXISTS cares whether a row exists, not which columns are returned.",
              "bodyHi": "EXISTS checks whether the correlated inner SELECT finds at least one matching order for the current customer. SELECT 1 is conventional: EXISTS cares whether a row exists, not which columns are returned."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.name\nFROM customers AS c\nWHERE EXISTS (\n  SELECT 1 FROM orders AS o\n  WHERE o.customer_id = c.customer_id\n)\nORDER BY c.name;",
              "captionEn": "For Asha and Ravi, a matching order exists. For Neha and Omar, it does not. The result is the same as the IN query.",
              "captionHi": "For Asha and Ravi, a matching order exists. For Neha and Omar, it does not. The result is the same as the IN query."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "IN and EXISTS",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "EXISTS result: same two customers",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name"
              ],
              "rows": [
                [
                  "Asha"
                ],
                [
                  "Ravi"
                ]
              ],
              "noteEn": "The result does not duplicate Asha even though she has two orders.",
              "noteHi": "The result does not duplicate Asha even though she has two orders."
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
                  "title": "IN",
                  "bodyEn": "Tests whether an outer value belongs to an inner set.",
                  "bodyHi": "Tests whether an outer value belongs to an inner set.",
                  "tone": "sky"
                },
                {
                  "title": "EXISTS",
                  "bodyEn": "Tests whether at least one matching inner row exists.",
                  "bodyHi": "Tests whether at least one matching inner row exists.",
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
              "bodyEn": "For large production queries, compare execution plans and indexes rather than relying on a universal IN-versus-EXISTS performance rule.",
              "bodyHi": "For large production queries, compare execution plans and indexes rather than relying on a universal IN-versus-EXISTS performance rule."
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
                  "en": "Use IN for straightforward membership tests and EXISTS for existence checks.",
                  "hi": "Use IN for straightforward membership tests and EXISTS for existence checks."
                },
                {
                  "en": "A correlated EXISTS refers to a column from the outer query.",
                  "hi": "A correlated EXISTS refers to a column from the outer query."
                },
                {
                  "en": "The query planner may optimize either form; do not assume one is always faster.",
                  "hi": "The query planner may optimize either form; do not assume one is always faster."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M21_T04_SPEC: StructuredVisualNoteTopic = {
  "module": "M21",
  "moduleTitle": "Subqueries and Set Operations",
  "topic": "NOT EXISTS",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "NOT EXISTS",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Read a customer",
                  "bodyEn": "Start with each customer.",
                  "bodyHi": "Start with each customer.",
                  "tone": "lavender"
                },
                {
                  "title": "Look for an order",
                  "bodyEn": "Check orders for that customer_id.",
                  "bodyHi": "Check orders for that customer_id.",
                  "tone": "sky"
                },
                {
                  "title": "Keep no-match",
                  "bodyEn": "Return the customer only if no order exists.",
                  "bodyHi": "Return the customer only if no order exists.",
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
        "bodyEn": "**NOT EXISTS** returns outer rows for which the inner query finds no matching row. It is a reliable way to find customers with no orders, products never sold, or employees without assigned tasks.",
        "bodyHi": "**NOT EXISTS** returns outer rows for which the inner query finds no matching row. It is a reliable way to find customers with no orders, products never sold, or employees without assigned tasks."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "NOT EXISTS",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.name\nFROM customers AS c\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders AS o\n  WHERE o.customer_id = c.customer_id\n)\nORDER BY c.name;",
              "captionEn": "Asha and Ravi have orders, so they are excluded. Neha and Omar have no matching order rows, so they are returned.",
              "captionHi": "Asha and Ravi have orders, so they are excluded. Neha and Omar have no matching order rows, so they are returned."
            }
          ]
        },
        {
          "pill": "NOT EXISTS output",
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
              "noteEn": "These customers have not placed an order in the sample data.",
              "noteHi": "These customers have not placed an order in the sample data."
            }
          ]
        },
        {
          "pill": "Be careful with NOT IN and NULL",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The orders table contains a NULL customer_id. In SQL, NOT IN (subquery) can behave unexpectedly when the subquery includes NULL: it may return no rows because comparisons become UNKNOWN. NOT EXISTS avoids this trap for the usual anti-match pattern.",
              "bodyHi": "The orders table contains a NULL customer_id. In SQL, NOT IN (subquery) can behave unexpectedly when the subquery includes NULL: it may return no rows because comparisons become UNKNOWN. NOT EXISTS avoids this trap for the usual anti-match pattern."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.name\nFROM customers AS c\nWHERE c.customer_id NOT IN (\n  SELECT o.customer_id FROM orders AS o\n  WHERE o.customer_id IS NOT NULL\n)\nORDER BY c.name;",
              "captionEn": "Filtering NULL values from the inner list makes this NOT IN example return Neha and Omar too. NOT EXISTS is often easier to reason about when NULLs may be present.",
              "captionHi": "Filtering NULL values from the inner list makes this NOT IN example return Neha and Omar too. NOT EXISTS is often easier to reason about when NULLs may be present."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "NOT EXISTS",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "Safe NOT IN output",
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
              "noteEn": "The inner WHERE removes NULL IDs before the NOT IN comparison.",
              "noteHi": "The inner WHERE removes NULL IDs before the NOT IN comparison."
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
                  "title": "NOT EXISTS",
                  "bodyEn": "Returns rows with no matching inner record.",
                  "bodyHi": "Returns rows with no matching inner record.",
                  "tone": "sky"
                },
                {
                  "title": "NOT IN with NULL in the list",
                  "bodyEn": "Can return no rows due to SQL three-valued logic.",
                  "bodyHi": "Can return no rows due to SQL three-valued logic.",
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
              "bodyEn": "Business example: identify customers who registered but have not purchased, while avoiding false results caused by missing IDs.",
              "bodyHi": "Business example: identify customers who registered but have not purchased, while avoiding false results caused by missing IDs."
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
                  "en": "NOT EXISTS is a common anti-join pattern.",
                  "hi": "NOT EXISTS is a common anti-join pattern."
                },
                {
                  "en": "Always test missing values when using NOT IN.",
                  "hi": "Always test missing values when using NOT IN."
                },
                {
                  "en": "Use a clear key relationship inside the correlated subquery.",
                  "hi": "Use a clear key relationship inside the correlated subquery."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M21_T05_SPEC: StructuredVisualNoteTopic = {
  "module": "M21",
  "moduleTitle": "Subqueries and Set Operations",
  "topic": "UNION and UNION ALL",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "UNION and UNION ALL",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "First query",
                  "bodyEn": "Return Asha and Ravi.",
                  "bodyHi": "Return Asha and Ravi.",
                  "tone": "lavender"
                },
                {
                  "title": "Second query",
                  "bodyEn": "Return Asha and Neha.",
                  "bodyHi": "Return Asha and Neha.",
                  "tone": "sky"
                },
                {
                  "title": "Combine",
                  "bodyEn": "Choose whether repeated Asha is kept.",
                  "bodyHi": "Choose whether repeated Asha is kept.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "List A: workshop attendees",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name"
              ],
              "rows": [
                [
                  "Asha"
                ],
                [
                  "Ravi"
                ]
              ],
              "noteEn": "Two names in the first list.",
              "noteHi": "Two names in the first list."
            }
          ]
        },
        {
          "pill": "List B: webinar attendees",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name"
              ],
              "rows": [
                [
                  "Asha"
                ],
                [
                  "Neha"
                ]
              ],
              "noteEn": "Asha appears in both lists.",
              "noteHi": "Asha appears in both lists."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**UNION** combines rows from two query results and removes duplicate rows. **UNION ALL** combines the results but keeps duplicates. Both require the same number of columns with compatible data types.",
        "bodyHi": "**UNION** combines rows from two query results and removes duplicate rows. **UNION ALL** combines the results but keeps duplicates. Both require the same number of columns with compatible data types."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "UNION and UNION ALL",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT name FROM workshop_attendees\nUNION\nSELECT name FROM webinar_attendees\nORDER BY name;",
              "captionEn": "UNION produces the distinct set Asha, Neha and Ravi. Asha appears once even though both inputs contain her name. ORDER BY makes the display predictable.",
              "captionHi": "UNION produces the distinct set Asha, Neha and Ravi. Asha appears once even though both inputs contain her name. ORDER BY makes the display predictable."
            }
          ]
        },
        {
          "pill": "UNION output: unique rows",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name"
              ],
              "rows": [
                [
                  "Asha"
                ],
                [
                  "Neha"
                ],
                [
                  "Ravi"
                ]
              ],
              "noteEn": "Three distinct names remain.",
              "noteHi": "Three distinct names remain."
            }
          ]
        },
        {
          "pill": "What counts as a duplicate?",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "UNION removes duplicate complete rows across all selected columns. If you select name and event_name together, two Asha rows with different event names are not duplicates.",
              "bodyHi": "UNION removes duplicate complete rows across all selected columns. If you select name and event_name together, two Asha rows with different event names are not duplicates."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT name FROM workshop_attendees\nUNION ALL\nSELECT name FROM webinar_attendees\nORDER BY name;",
              "captionEn": "UNION ALL keeps both Asha records, giving four rows. It is often preferred when duplicates are meaningful and no deduplication is required.",
              "captionHi": "UNION ALL keeps both Asha records, giving four rows. It is often preferred when duplicates are meaningful and no deduplication is required."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "UNION and UNION ALL",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "UNION ALL output: repeats preserved",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name"
              ],
              "rows": [
                [
                  "Asha"
                ],
                [
                  "Asha"
                ],
                [
                  "Neha"
                ],
                [
                  "Ravi"
                ]
              ],
              "noteEn": "Four rows are retained.",
              "noteHi": "Four rows are retained."
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
                  "title": "UNION",
                  "bodyEn": "Removes duplicate result rows.",
                  "bodyHi": "Removes duplicate result rows.",
                  "tone": "sky"
                },
                {
                  "title": "UNION ALL",
                  "bodyEn": "Keeps all result rows, including duplicates.",
                  "bodyHi": "Keeps all result rows, including duplicates.",
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
              "bodyEn": "Analysts use UNION ALL to combine monthly extracts with the same schema; UNION is suitable when a distinct combined list is required.",
              "bodyHi": "Analysts use UNION ALL to combine monthly extracts with the same schema; UNION is suitable when a distinct combined list is required."
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
                  "en": "UNION removes duplicate result rows; UNION ALL preserves them.",
                  "hi": "UNION removes duplicate result rows; UNION ALL preserves them."
                },
                {
                  "en": "Both SELECT statements need the same number of columns with compatible types.",
                  "hi": "Both SELECT statements need the same number of columns with compatible types."
                },
                {
                  "en": "Only the final ORDER BY controls ordering of the combined result.",
                  "hi": "Only the final ORDER BY controls ordering of the combined result."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M21_T06_SPEC: StructuredVisualNoteTopic = {
  "module": "M21",
  "moduleTitle": "Subqueries and Set Operations",
  "topic": "INTERSECT and EXCEPT",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "INTERSECT and EXCEPT",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Campaign list",
                  "bodyEn": "IDs 1, 2 and 3.",
                  "bodyHi": "IDs 1, 2 and 3.",
                  "tone": "lavender"
                },
                {
                  "title": "Buyer list",
                  "bodyEn": "IDs 2, 3 and 4.",
                  "bodyHi": "IDs 2, 3 and 4.",
                  "tone": "sky"
                },
                {
                  "title": "Compare sets",
                  "bodyEn": "Find overlap or first-only IDs.",
                  "bodyHi": "Find overlap or first-only IDs.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Campaign audience IDs",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id"
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
                ]
              ],
              "noteEn": "Customers selected for an email campaign.",
              "noteHi": "Customers selected for an email campaign."
            }
          ]
        },
        {
          "pill": "Recent buyer IDs",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id"
              ],
              "rows": [
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
              "noteEn": "Customers who bought recently.",
              "noteHi": "Customers who bought recently."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**INTERSECT** finds rows common to both query results. **EXCEPT** finds rows in the first result that are absent from the second. These set operations are useful for comparing customer lists.",
        "bodyHi": "**INTERSECT** finds rows common to both query results. **EXCEPT** finds rows in the first result that are absent from the second. These set operations are useful for comparing customer lists."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "INTERSECT and EXCEPT",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT customer_id FROM campaign_customers\nINTERSECT\nSELECT customer_id FROM recent_buyers\nORDER BY customer_id;",
              "captionEn": "Customer IDs 2 and 3 appear in both lists, so INTERSECT returns them. By default, INTERSECT removes duplicate rows.",
              "captionHi": "Customer IDs 2 and 3 appear in both lists, so INTERSECT returns them. By default, INTERSECT removes duplicate rows."
            }
          ]
        },
        {
          "pill": "INTERSECT result: common IDs",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id"
              ],
              "rows": [
                [
                  "2"
                ],
                [
                  "3"
                ]
              ],
              "noteEn": "These customers are in both lists.",
              "noteHi": "These customers are in both lists."
            }
          ]
        },
        {
          "pill": "EXCEPT depends on direction",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A EXCEPT B means keep values from A that are not in B. Reversing the two SELECT statements changes the result. EXCEPT is not a symmetric comparison.",
              "bodyHi": "A EXCEPT B means keep values from A that are not in B. Reversing the two SELECT statements changes the result. EXCEPT is not a symmetric comparison."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT customer_id FROM campaign_customers\nEXCEPT\nSELECT customer_id FROM recent_buyers\nORDER BY customer_id;",
              "captionEn": "Customer 1 appears in the campaign list but not among recent buyers, so the result is just 1. Reversing the queries would instead return 4.",
              "captionHi": "Customer 1 appears in the campaign list but not among recent buyers, so the result is just 1. Reversing the queries would instead return 4."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "INTERSECT and EXCEPT",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "EXCEPT result: campaign-only IDs",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id"
              ],
              "rows": [
                [
                  "1"
                ]
              ],
              "noteEn": "Customer 1 is in the campaign but not the recent-buyer list.",
              "noteHi": "Customer 1 is in the campaign but not the recent-buyer list."
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
                  "title": "INTERSECT",
                  "bodyEn": "Rows that appear in both results.",
                  "bodyHi": "Rows that appear in both results.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEPT",
                  "bodyEn": "Rows in the first result but not the second.",
                  "bodyHi": "Rows in the first result but not the second.",
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
              "bodyEn": "Set operations are valuable for reconciling mailing lists, tracking cohort overlap and checking records missing from another system.",
              "bodyHi": "Set operations are valuable for reconciling mailing lists, tracking cohort overlap and checking records missing from another system."
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
                  "en": "INTERSECT returns common rows; EXCEPT returns first-only rows.",
                  "hi": "INTERSECT returns common rows; EXCEPT returns first-only rows."
                },
                {
                  "en": "Set operators compare the entire selected row, not only the first column.",
                  "hi": "Set operators compare the entire selected row, not only the first column."
                },
                {
                  "en": "PostgreSQL supports INTERSECT ALL and EXCEPT ALL when duplicate counts matter.",
                  "hi": "PostgreSQL supports INTERSECT ALL and EXCEPT ALL when duplicate counts matter."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M21_T07_SPEC: StructuredVisualNoteTopic = {
  "module": "M21",
  "moduleTitle": "Subqueries and Set Operations",
  "topic": "Subqueries vs Joins",
  "pageCount": 3,
  "sampleDataNotice": "All example tables, amounts and records are illustrative learning data, not live business data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Subqueries vs Joins",
      "subtitle": "UNDERSTAND THE CONCEPT VISUALLY",
      "sections": [
        {
          "pill": "See how it works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Question",
                  "bodyEn": "Which customers placed an order?",
                  "bodyHi": "Which customers placed an order?",
                  "tone": "lavender"
                },
                {
                  "title": "Subquery",
                  "bodyEn": "IN checks membership without adding order columns.",
                  "bodyHi": "IN checks membership without adding order columns.",
                  "tone": "sky"
                },
                {
                  "title": "JOIN",
                  "bodyEn": "INNER JOIN produces one row for each matching order.",
                  "bodyHi": "INNER JOIN produces one row for each matching order.",
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
        "bodyEn": "**Subqueries** and **JOINs** can sometimes answer the same business question, but their results may have different row counts. The best choice depends on whether you need a matching check or columns from another table.",
        "bodyHi": "**Subqueries** and **JOINs** can sometimes answer the same business question, but their results may have different row counts. The best choice depends on whether you need a matching check or columns from another table."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Subqueries vs Joins",
      "subtitle": "READ SQL, CHECK OUTPUT, LEARN WHY",
      "sections": [
        {
          "pill": "Example 1 - read the SQL step by step",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT name\nFROM customers\nWHERE customer_id IN (\n  SELECT customer_id FROM orders\n)\nORDER BY name;",
              "captionEn": "The IN subquery returns Asha and Ravi once each. It answers a yes/no existence question about each customer, even though Asha has two orders.",
              "captionHi": "The IN subquery returns Asha and Ravi once each. It answers a yes/no existence question about each customer, even though Asha has two orders."
            }
          ]
        },
        {
          "pill": "Subquery result: unique customers",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name"
              ],
              "rows": [
                [
                  "Asha"
                ],
                [
                  "Ravi"
                ]
              ],
              "noteEn": "Two customers placed at least one order.",
              "noteHi": "Two customers placed at least one order."
            }
          ]
        },
        {
          "pill": "A JOIN can multiply rows",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "INNER JOIN returns one row per matching order. Asha appears twice. This is correct for an order-level report, but not automatically correct for a unique-customer list.",
              "bodyHi": "INNER JOIN returns one row per matching order. Asha appears twice. This is correct for an order-level report, but not automatically correct for a unique-customer list."
            }
          ]
        },
        {
          "pill": "Example 2 - build on the idea",
          "blocks": [
            {
              "type": "sql",
              "code": "SELECT c.name, o.order_id\nFROM customers AS c\nINNER JOIN orders AS o\n  ON c.customer_id = o.customer_id\nORDER BY c.name, o.order_id;",
              "captionEn": "The JOIN returns Asha-101, Asha-102 and Ravi-103. It is useful when you actually need order IDs, amounts or other columns from the orders table.",
              "captionHi": "The JOIN returns Asha-101, Asha-102 and Ravi-103. It is useful when you actually need order IDs, amounts or other columns from the orders table."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M21 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Subqueries vs Joins",
      "subtitle": "PRACTICAL INTERPRETATION AND GOOD HABITS",
      "sections": [
        {
          "pill": "JOIN result: one row per matching order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "name",
                "order_id"
              ],
              "rows": [
                [
                  "Asha",
                  "101"
                ],
                [
                  "Asha",
                  "102"
                ],
                [
                  "Ravi",
                  "103"
                ]
              ],
              "noteEn": "Three order rows, not two unique customer rows.",
              "noteHi": "Three order rows, not two unique customer rows."
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
                  "title": "IN or EXISTS",
                  "bodyEn": "Can return one outer row per qualifying customer.",
                  "bodyHi": "Can return one outer row per qualifying customer.",
                  "tone": "sky"
                },
                {
                  "title": "INNER JOIN",
                  "bodyEn": "Returns matching pairs; one customer may appear many times.",
                  "bodyHi": "Returns matching pairs; one customer may appear many times.",
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
              "bodyEn": "Before choosing a technique, write down the expected grain: one row per customer, order, product or month.",
              "bodyHi": "Before choosing a technique, write down the expected grain: one row per customer, order, product or month."
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
                  "en": "Use EXISTS or IN for membership/existence when you do not need related columns.",
                  "hi": "Use EXISTS or IN for membership/existence when you do not need related columns."
                },
                {
                  "en": "Use JOIN when you need fields from multiple tables.",
                  "hi": "Use JOIN when you need fields from multiple tables."
                },
                {
                  "en": "Compare query plans and result grain; performance depends on data and indexes.",
                  "hi": "Compare query plans and result grain; performance depends on data and indexes."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const M21_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  110: M21_T01_SPEC,
  206: M21_T01_SPEC,
  111: M21_T02_SPEC,
  207: M21_T02_SPEC,
  112: M21_T03_SPEC,
  208: M21_T03_SPEC,
  113: M21_T04_SPEC,
  209: M21_T04_SPEC,
  114: M21_T05_SPEC,
  210: M21_T05_SPEC,
  115: M21_T06_SPEC,
  211: M21_T06_SPEC,
  116: M21_T07_SPEC,
  212: M21_T07_SPEC,
};
