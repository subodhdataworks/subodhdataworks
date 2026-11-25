import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M01_T1_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M01",
  "moduleTitle": "Understanding Data Analytics",
  "topic": "What Is Data Analytics?",
  "pageCount": 3,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "What Is Data Analytics?",
      "subtitle": "Data Analytics",
      "sections": [
        {
          "pill": "The five-stage analytics journey",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Raw Data",
                  "bodyEn": "Scattered raw facts & records",
                  "bodyHi": "Bikhre hue data",
                  "tone": "sky"
                },
                {
                  "title": "Data Cleaning",
                  "bodyEn": "Fix errors & missing values",
                  "bodyHi": "Galtiyon ko sudhārna",
                  "tone": "amber"
                },
                {
                  "title": "Analysis",
                  "bodyEn": "Understand & find patterns",
                  "bodyHi": "Data ko samajhna",
                  "tone": "lavender"
                },
                {
                  "title": "Insights",
                  "bodyEn": "Useful actionable information",
                  "bodyHi": "Useful information",
                  "tone": "amber"
                },
                {
                  "title": "Decisions",
                  "bodyEn": "Take better business action",
                  "bodyHi": "Better action lena",
                  "tone": "pink"
                }
              ]
            }
          ]
        },
        {
          "pill": "Real-Life Examples",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "E-commerce",
                  "bodyEn": "Which **product** is selling the most?",
                  "bodyHi": "Kaun sa **product** zyada bik raha hai?",
                  "tone": "pink"
                },
                {
                  "title": "Banking",
                  "bodyEn": "Which customer has a high **loan risk**?",
                  "bodyHi": "Kis customer ka **loan risk** high hai?",
                  "tone": "amber"
                },
                {
                  "title": "OTT / Media",
                  "bodyEn": "Which **content** is watched the most?",
                  "bodyHi": "Kaunsa **content** zyada dekha ja raha hai?",
                  "tone": "sky"
                }
              ]
            }
          ]
        },
        {
          "pill": "Why Is It Important?",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Helps make **better business decisions** backed by facts.",
                  "hi": "**Better business decisions** lene mein madad karta hai."
                },
                {
                  "en": "Identifies valuable **trends and patterns** early.",
                  "hi": "**Trends aur patterns** ko identify karta hai."
                },
                {
                  "en": "Reduces **cost** and increases **efficiency**.",
                  "hi": "**Cost** kam aur **efficiency** badhata hai."
                },
                {
                  "en": "Delivers a **better experience** to customers.",
                  "hi": "Customer ko **better experience** deta hai."
                }
              ]
            }
          ]
        },
        {
          "pill": "Example: a small order dataset",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Order",
                "Product",
                "Units",
                "Price per unit"
              ],
              "rows": [
                [
                  "101",
                  "Notebook",
                  "2",
                  "50"
                ],
                [
                  "102",
                  "Pen",
                  "5",
                  "10"
                ],
                [
                  "103",
                  "Notebook",
                  "3",
                  "50"
                ],
                [
                  "104",
                  "Bag",
                  "1",
                  "300"
                ]
              ],
              "noteEn": "All values are fictional. Each **Row** is one order line. Sales amount is **Units** multiplied by **Price per unit**.",
              "noteHi": "Ye sample values hain. Har **Row** ek order line hai. Sales amount = **Units** x **Price per unit**."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Data Analytics** is a structured process where we analyze **raw data** to extract useful **insights** and make better **decisions**.",
        "bodyHi": "**Data Analytics** ek process hai jisme hum **raw data** ko analyze karke useful **insights** nikalte hain aur better **decisions** lete hain."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "What Is Data Analytics?",
      "subtitle": "SEE HOW AN ANALYST FINDS AN ANSWER",
      "sections": [
        {
          "pill": "Step 1: calculate each order amount",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Order",
                "Product",
                "Calculation",
                "Sales amount"
              ],
              "rows": [
                [
                  "101",
                  "Notebook",
                  "2 x 50",
                  "100"
                ],
                [
                  "102",
                  "Pen",
                  "5 x 10",
                  "50"
                ],
                [
                  "103",
                  "Notebook",
                  "3 x 50",
                  "150"
                ],
                [
                  "104",
                  "Bag",
                  "1 x 300",
                  "300"
                ]
              ],
              "noteEn": "**Sales amount** = **Units** x **Price per unit**. Do not add quantities to money: these are different measures.",
              "noteHi": "**Sales amount** = **Units** x **Price per unit** hota hai. Quantity aur rupaye ko aapas mein add mat karein kyunki dono alag measures hain."
            }
          ]
        },
        {
          "pill": "Step 2: summarize sales by product",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Product",
                "Total units",
                "Total sales"
              ],
              "rows": [
                [
                  "Notebook",
                  "5",
                  "250"
                ],
                [
                  "Pen",
                  "5",
                  "50"
                ],
                [
                  "Bag",
                  "1",
                  "300"
                ]
              ],
              "noteEn": "**Bag** has the highest sales value (**300**), while **Notebook** and **Pen** both have **5** units sold.",
              "noteHi": "**Bag** ki total sales value sabse zyada (**300**) hai, jabki **Notebook** aur **Pen** dono ke **5** units bike hain."
            }
          ]
        },
        {
          "pill": "Visualize total sales",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Total sales amount by product: **300 Bag** | **250 Notebook** | **50 Pen**",
              "bodyHi": "Product-wise total sales amount: **300 Bag** | **250 Notebook** | **50 Pen**"
            }
          ]
        },
        {
          "pill": "A result is not the same as an insight",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Result",
                  "bodyEn": "The **Bag** generated **300** in sales, the highest value among these products.",
                  "bodyHi": "**Bag** ne **300** ki sales generate ki, jo in sabhi products mein sabse zyada value hai.",
                  "tone": "sky"
                },
                {
                  "title": "Insight",
                  "bodyEn": "A higher-value product can lead **total revenue** even with fewer **units sold**. The manager should track both **value** and **quantity**.",
                  "bodyHi": "Ek mehenga product kam **units** bikne par bhi sabse zyada **revenue** de sakta hai. Manager ko **value** aur **quantity** dono track karne chahiye.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "The manager wants to know **total sales by product**. Start with the four order lines from page 1. Calculate each order line, then combine the sales for the same **product**.",
        "bodyHi": "Manager jaanna chahta hai ki har **product** ki **total sales** kitni hai. Page 1 ki 4 order lines se shuru karein, har order ka amount calculate karein aur same product ki sales ko combine karein."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "What Is Data Analytics?",
      "subtitle": "WHERE ANALYTICS IS USED",
      "sections": [
        {
          "pill": "Real-world business examples",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Retail",
                  "bodyEn": "Find top products and slow stock.",
                  "bodyHi": "Top bikne wale products aur slow stock pehchanna.",
                  "tone": "lavender"
                },
                {
                  "title": "Banking",
                  "bodyEn": "Monitor unusual transaction patterns.",
                  "bodyHi": "Unusual transaction aur loan risk track karna.",
                  "tone": "sky"
                },
                {
                  "title": "Hospital",
                  "bodyEn": "Track waiting times and capacity.",
                  "bodyHi": "Patient waiting time aur bed capacity track karna.",
                  "tone": "green"
                },
                {
                  "title": "Factory",
                  "bodyEn": "Measure defects and downtime.",
                  "bodyHi": "Machine downtime aur product defects measure karna.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "What tools do analysts use?",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**Excel** helps organize data and build quick reports. **SQL** retrieves and summarizes records from databases. **Python** helps clean, analyze, and automate larger tasks. **Power BI** turns verified results into interactive dashboards.",
              "bodyHi": "**Excel** data organize karne aur quick reports banane mein madad karta hai. **SQL** database tables se records fetch karta hai. **Python** bade datasets ko clean aur analyze karta hai. **Power BI** interactive dashboards banata hai."
            }
          ]
        },
        {
          "pill": "Reporting versus decision-making",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Reporting",
                  "bodyEn": "“We sold **100 products** this week.” This describes **what happened**.",
                  "bodyHi": "“Humne is hafte **100 products** beche.” Yeh batata hai ki **kya hua (what happened)**.",
                  "tone": "sky"
                },
                {
                  "title": "Decision support",
                  "bodyEn": "“Sales dropped on **weekends**, so review **stock** and **staffing** for those days.” This connects **evidence to action**.",
                  "bodyHi": "“**Weekends** par sales kam hui, isliye un dino ka **stock** aur **staffing** check karein.” Yeh **data ko action** se jodta hai.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "A good analyst always checks",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Is the business question clear and measurable?",
                  "hi": "Is the business question clear and measurable?"
                },
                {
                  "en": "Are the data complete, accurate, and from the correct period?",
                  "hi": "Are the data complete, accurate, and from the correct period?"
                },
                {
                  "en": "Do the calculations match the definition of the metric?",
                  "hi": "Do the calculations match the definition of the metric?"
                },
                {
                  "en": "Can the result be explained in simple words, including limitations?",
                  "hi": "Can the result be explained in simple words, including limitations?"
                }
              ]
            }
          ]
        },
        {
          "pill": "Avoid a common mistake",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Four order lines are too few to claim that Bags always sell best. Check a longer period before making a large stock decision.",
                  "hi": "Four order lines are too few to claim that Bags always sell best. Check a longer period before making a large stock decision."
                },
                {
                  "en": "A useful report states the time period, data source, and how the numbers were calculated.",
                  "hi": "A useful report states the time period, data source, and how the numbers were calculated."
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Data Analytics is useful wherever people record activity and must make decisions. It is not limited to technology companies. Analysts work with retail, banking, hospitals, manufacturing, education, logistics, and many other sectors.",
        "bodyHi": "Data Analytics is useful wherever people record activity and must make decisions. It is not limited to technology companies. Analysts work with retail, banking, hospitals, manufacturing, education, logistics, and many other sectors."
      }
    }
  ]
};

const M01_T2_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M01",
  "moduleTitle": "Understanding Data Analytics",
  "topic": "Why Businesses Need Data Analytics",
  "pageCount": 3,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Why Businesses Need Data Analytics",
      "subtitle": "REPLACE GUESSWORK WITH EVIDENCE",
      "sections": [
        {
          "pill": "A simple business decision cycle",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Problem",
                  "bodyEn": "Notice a business question.",
                  "bodyHi": "Notice a business question.",
                  "tone": "lavender"
                },
                {
                  "title": "Evidence",
                  "bodyEn": "Collect trustworthy data.",
                  "bodyHi": "Collect trustworthy data.",
                  "tone": "sky"
                },
                {
                  "title": "Pattern",
                  "bodyEn": "Compare results and trends.",
                  "bodyHi": "Compare results and trends.",
                  "tone": "green"
                },
                {
                  "title": "Action",
                  "bodyEn": "Choose a response.",
                  "bodyHi": "Choose a response.",
                  "tone": "amber"
                },
                {
                  "title": "Measure",
                  "bodyEn": "Check if the action helped.",
                  "bodyHi": "Check if the action helped.",
                  "tone": "pink"
                }
              ]
            }
          ]
        },
        {
          "pill": "Guesswork versus evidence",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Without analysis",
                  "bodyEn": "“I think Product A sells best, so let us order more.” The decision may be based on memory.",
                  "bodyHi": "“I think Product A sells best, so let us order more.” The decision may be based on memory.",
                  "tone": "sky"
                },
                {
                  "title": "With analysis",
                  "bodyEn": "“Product B sold 60 units last week, compared with 30 for A.” The decision uses a measured result.",
                  "bodyHi": "“Product B sold 60 units last week, compared with 30 for A.” The decision uses a measured result.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Example: a shop reviews weekly sales",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Product",
                "Units sold",
                "Units in stock"
              ],
              "rows": [
                [
                  "A",
                  "30",
                  "100"
                ],
                [
                  "B",
                  "60",
                  "15"
                ],
                [
                  "C",
                  "12",
                  "90"
                ]
              ],
              "noteEn": "Product B has high recent sales and low stock. This is a signal to review reordering needs, not a guarantee of future demand.",
              "noteHi": "Product B has high recent sales and low stock. This is a signal to review reordering needs, not a guarantee of future demand."
            }
          ]
        },
        {
          "pill": "What the business learns",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Analytics can highlight sales opportunities, wasted spending, delayed deliveries, and customer problems.",
                  "hi": "Analytics can highlight sales opportunities, wasted spending, delayed deliveries, and customer problems."
                },
                {
                  "en": "A good decision also considers costs, supplier lead times, seasonality, and risks that may not appear in one table.",
                  "hi": "A good decision also considers costs, supplier lead times, seasonality, and risks that may not appear in one table."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The stock table tells us where to look first: Product B sells quickly and has little stock left. But a good analyst does not automatically place an order. First check when new stock can arrive, whether demand is seasonal, and how much cash the business can spend.",
              "bodyHi": "The stock table tells us where to look first: Product B sells quickly and has little stock left. But a good analyst does not automatically place an order. First check when new stock can arrive, whether demand is seasonal, and how much cash the business can spend."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Businesses make decisions every day: how much stock to buy, where to spend money, which customers need support, and how many workers to schedule. Data Analytics helps them make these decisions using recorded evidence rather than only personal guesses.",
        "bodyHi": "Businesses make decisions every day: how much stock to buy, where to spend money, which customers need support, and how many workers to schedule. Data Analytics helps them make these decisions using recorded evidence rather than only personal guesses."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Why Businesses Need Data Analytics",
      "subtitle": "MEASURE PERFORMANCE WITH KPIS",
      "sections": [
        {
          "pill": "Common KPIs in everyday business",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Business question",
                "Example KPI",
                "How it helps"
              ],
              "rows": [
                [
                  "Are sales growing?",
                  "Weekly sales amount",
                  "Compare weeks"
                ],
                [
                  "Are orders on time?",
                  "On-time delivery rate",
                  "Spot delays"
                ],
                [
                  "Are customers happy?",
                  "Complaint rate",
                  "Find service problems"
                ],
                [
                  "Is stock available?",
                  "Out-of-stock rate",
                  "Plan replenishment"
                ]
              ],
              "noteEn": "Choose KPIs that connect directly to the business goal, not just numbers that look impressive.",
              "noteHi": "Choose KPIs that connect directly to the business goal, not just numbers that look impressive."
            }
          ]
        },
        {
          "pill": "Example: calculate on-time delivery rate",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Suppose a courier delivered **90 of 100 orders on time**. On-time delivery rate = (90 / 100) x 100 = **90%**. If the agreed target is 95%, the team knows there is a gap of five percentage points. It should inspect causes before changing operations.",
              "bodyHi": "Suppose a courier delivered **90 of 100 orders on time**. On-time delivery rate = (90 / 100) x 100 = **90%**. If the agreed target is 95%, the team knows there is a gap of five percentage points. It should inspect causes before changing operations."
            }
          ]
        },
        {
          "pill": "Compare delivery performance",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**Illustrative on-time delivery rates (%) 95 Target 90 Current 85 Earlier**",
              "bodyHi": "**Illustrative on-time delivery rates (%) 95 Target 90 Current 85 Earlier**"
            }
          ]
        },
        {
          "pill": "Business benefits of measurement",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "**Speed:** find important changes sooner.",
                  "hi": "**Speed:** find important changes sooner."
                },
                {
                  "en": "**Efficiency:** discover repeated errors and wasted steps.",
                  "hi": "**Efficiency:** discover repeated errors and wasted steps."
                },
                {
                  "en": "**Customer experience:** identify delays or complaints.",
                  "hi": "**Customer experience:** identify delays or complaints."
                },
                {
                  "en": "**Accountability:** compare results against agreed targets.",
                  "hi": "**Accountability:** compare results against agreed targets."
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A **Key Performance Indicator (KPI)** is a measure used to track progress toward a business goal. A KPI is useful only when the team agrees on its meaning, calculation, time period, and target.",
        "bodyHi": "A **Key Performance Indicator (KPI)** is a measure used to track progress toward a business goal. A KPI is useful only when the team agrees on its meaning, calculation, time period, and target."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Why Businesses Need Data Analytics",
      "subtitle": "USE DATA RESPONSIBLY",
      "sections": [
        {
          "pill": "From an issue to an improvement",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Observe",
                  "bodyEn": "Customer complaints increase.",
                  "bodyHi": "Customer complaints increase.",
                  "tone": "lavender"
                },
                {
                  "title": "Investigate",
                  "bodyEn": "Group complaints by issue.",
                  "bodyHi": "Group complaints by issue.",
                  "tone": "sky"
                },
                {
                  "title": "Find cause",
                  "bodyEn": "Delivery delays appear often.",
                  "bodyHi": "Delivery delays appear often.",
                  "tone": "green"
                },
                {
                  "title": "Improve",
                  "bodyEn": "Test a routing change.",
                  "bodyHi": "Test a routing change.",
                  "tone": "amber"
                },
                {
                  "title": "Review",
                  "bodyEn": "Track complaints afterward.",
                  "bodyHi": "Track complaints afterward.",
                  "tone": "pink"
                }
              ]
            }
          ]
        },
        {
          "pill": "Good decisions need more than one number",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Too quick",
                  "bodyEn": "“Complaints rose, so every employee must work faster.” This assumes a cause without evidence.",
                  "bodyHi": "“Complaints rose, so every employee must work faster.” This assumes a cause without evidence.",
                  "tone": "sky"
                },
                {
                  "title": "Better approach",
                  "bodyEn": "Check delivery times, staffing, product issues, and customer feedback before selecting an action.",
                  "bodyHi": "Check delivery times, staffing, product issues, and customer feedback before selecting an action.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Where human judgment matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Data may be missing, delayed, or biased toward certain customers. External events, price changes, and holidays can also change results. Analysts should explain what is known, what is uncertain, and what extra information is needed. Managers remain responsible for the decision.",
              "bodyHi": "Data may be missing, delayed, or biased toward certain customers. External events, price changes, and holidays can also change results. Analysts should explain what is known, what is uncertain, and what extra information is needed. Managers remain responsible for the decision."
            }
          ]
        },
        {
          "pill": "Practical rules for business analytics",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use only data the organization is allowed to collect and analyze.",
                  "hi": "Use only data the organization is allowed to collect and analyze."
                },
                {
                  "en": "Do not expose private customer information in reports unnecessarily.",
                  "hi": "Do not expose private customer information in reports unnecessarily."
                },
                {
                  "en": "Check the effect of a decision after it is implemented.",
                  "hi": "Check the effect of a decision after it is implemented."
                },
                {
                  "en": "Report both the opportunity and the limitations honestly.",
                  "hi": "Report both the opportunity and the limitations honestly."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Business analytics is a continuous improvement process. First find a problem, then investigate it, test a change, and measure the result. If the numbers do not improve, the team should learn from the test instead of hiding the result or blaming people without evidence.",
              "bodyHi": "Business analytics is a continuous improvement process. First find a problem, then investigate it, test a change, and measure the result. If the numbers do not improve, the team should learn from the test instead of hiding the result or blaming people without evidence."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Analytics is useful, but numbers do not automatically tell the whole story. A good business team checks data quality, context, and possible harm before making important decisions.",
        "bodyHi": "Analytics is useful, but numbers do not automatically tell the whole story. A good business team checks data quality, context, and possible harm before making important decisions."
      }
    }
  ]
};

const M01_T3_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M01",
  "moduleTitle": "Understanding Data Analytics",
  "topic": "Real-Life Examples of Data Analytics",
  "pageCount": 3,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Real-Life Examples of Data Analytics",
      "subtitle": "DATA ANALYTICS IN DAILY LIFE",
      "sections": [
        {
          "pill": "The repeated pattern",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Question",
                  "bodyEn": "What should improve?",
                  "bodyHi": "What should improve?",
                  "tone": "lavender"
                },
                {
                  "title": "Records",
                  "bodyEn": "What has happened?",
                  "bodyHi": "What has happened?",
                  "tone": "sky"
                },
                {
                  "title": "Analysis",
                  "bodyEn": "What pattern appears?",
                  "bodyHi": "What pattern appears?",
                  "tone": "green"
                },
                {
                  "title": "Action",
                  "bodyEn": "What can we change?",
                  "bodyHi": "What can we change?",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Four industries and their questions",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Industry",
                "Example data",
                "Business question"
              ],
              "rows": [
                [
                  "E-commerce",
                  "Orders and returns",
                  "Which products are returned most?"
                ],
                [
                  "Banking",
                  "Transaction history",
                  "Which activity needs review?"
                ],
                [
                  "Transport",
                  "Trip and delay times",
                  "Where do delays occur?"
                ],
                [
                  "Education",
                  "Attendance and results",
                  "Who may need extra support?"
                ]
              ],
              "noteEn": "These examples show questions analysts may study. They do not imply that one metric is enough for a final decision.",
              "noteHi": "These examples show questions analysts may study. They do not imply that one metric is enough for a final decision."
            }
          ]
        },
        {
          "pill": "Example 1: an online shop",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The shop records each order, product, amount, and return reason. Analysts can compare return rates by product. If one product has a high return rate, the team may review product descriptions, size guides, or quality checks. It should investigate the reason before blaming a supplier.",
              "bodyHi": "The shop records each order, product, amount, and return reason. Analysts can compare return rates by product. If one product has a high return rate, the team may review product descriptions, size guides, or quality checks. It should investigate the reason before blaming a supplier."
            }
          ]
        },
        {
          "pill": "Important lesson",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "A business question determines which data and calculation are useful.",
                  "hi": "A business question determines which data and calculation are useful."
                },
                {
                  "en": "Analytics can reveal patterns, but a pattern does not automatically prove what caused it.",
                  "hi": "Analytics can reveal patterns, but a pattern does not automatically prove what caused it."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Each industry uses different records, but the thinking process is the same. In banking, an unusual pattern may trigger a review. In retail, a return-rate pattern may trigger a quality check. Analytics helps people decide what deserves attention; it does not replace careful investigation.",
              "bodyHi": "Each industry uses different records, but the thinking process is the same. In banking, an unusual pattern may trigger a review. In retail, a return-rate pattern may trigger a quality check. Analytics helps people decide what deserves attention; it does not replace careful investigation."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Data Analytics is already part of daily life. Shops study purchases, banks review transactions, transport teams track travel times, and streaming services examine viewing patterns. The same basic method appears again and again: ask a question, use data, find a pattern, and decide what to do.",
        "bodyHi": "Data Analytics is already part of daily life. Shops study purchases, banks review transactions, transport teams track travel times, and streaming services examine viewing patterns. The same basic method appears again and again: ask a question, use data, find a pattern, and decide what to do."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Real-Life Examples of Data Analytics",
      "subtitle": "TURN RECORDS INTO PRACTICAL INSIGHTS",
      "sections": [
        {
          "pill": "Example: late deliveries by area",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Area",
                "Total deliveries",
                "Late deliveries",
                "Late rate"
              ],
              "rows": [
                [
                  "North",
                  "100",
                  "10",
                  "10%"
                ],
                [
                  "South",
                  "80",
                  "20",
                  "25%"
                ],
                [
                  "East",
                  "120",
                  "12",
                  "10%"
                ]
              ],
              "noteEn": "Late rate = Late deliveries / Total deliveries x 100. The areas have different delivery volumes, so comparing counts alone is misleading.",
              "noteHi": "Late rate = Late deliveries / Total deliveries x 100. The areas have different delivery volumes, so comparing counts alone is misleading."
            }
          ]
        },
        {
          "pill": "Compare late delivery rates",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**Late deliveries as a percentage of all deliveries 25 South 10 North 10 East**",
              "bodyHi": "**Late deliveries as a percentage of all deliveries 25 South 10 North 10 East**"
            }
          ]
        },
        {
          "pill": "What does the result mean?",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The **South area has the highest late-delivery rate: 25%**. This is a useful starting point for investigation. Analysts can examine routes, traffic, delivery windows, and staffing. The numbers do not prove which factor caused the delay.",
              "bodyHi": "The **South area has the highest late-delivery rate: 25%**. This is a useful starting point for investigation. Analysts can examine routes, traffic, delivery windows, and staffing. The numbers do not prove which factor caused the delay."
            }
          ]
        },
        {
          "pill": "From finding to follow-up",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Identify",
                  "bodyEn": "South has 25% late rate.",
                  "bodyHi": "South has 25% late rate.",
                  "tone": "lavender"
                },
                {
                  "title": "Investigate",
                  "bodyEn": "Check route and time patterns.",
                  "bodyHi": "Check route and time patterns.",
                  "tone": "sky"
                },
                {
                  "title": "Test",
                  "bodyEn": "Try a better route plan.",
                  "bodyHi": "Try a better route plan.",
                  "tone": "green"
                },
                {
                  "title": "Monitor",
                  "bodyEn": "Compare the next weeks.",
                  "bodyHi": "Compare the next weeks.",
                  "tone": "amber"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Imagine a delivery company wants to reduce late deliveries. It measures how many deliveries arrived late in each area during the same week.",
        "bodyHi": "Imagine a delivery company wants to reduce late deliveries. It measures how many deliveries arrived late in each area during the same week."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Real-Life Examples of Data Analytics",
      "subtitle": "OTHER REAL-LIFE EXAMPLES",
      "sections": [
        {
          "pill": "Banking and healthcare examples",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Banking",
                  "bodyEn": "A bank may flag unusual transaction patterns for review. A flag is not proof of fraud; trained staff and appropriate controls investigate further.",
                  "bodyHi": "A bank may flag unusual transaction patterns for review. A flag is not proof of fraud; trained staff and appropriate controls investigate further.",
                  "tone": "sky"
                },
                {
                  "title": "Healthcare",
                  "bodyEn": "A hospital may study waiting times by hour to improve scheduling. Patient privacy and safe interpretation are essential.",
                  "bodyHi": "A hospital may study waiting times by hour to improve scheduling. Patient privacy and safe interpretation are essential.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Media and manufacturing examples",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Streaming media",
                  "bodyEn": "A service may study viewing completion to understand which content keeps users engaged. Popularity does not mean everyone has the same taste.",
                  "bodyHi": "A service may study viewing completion to understand which content keeps users engaged. Popularity does not mean everyone has the same taste.",
                  "tone": "sky"
                },
                {
                  "title": "Manufacturing",
                  "bodyEn": "A factory may track defects by machine or shift to identify where quality checks are needed. Analysts must compare fair production volumes.",
                  "bodyHi": "A factory may track defects by machine or shift to identify where quality checks are needed. Analysts must compare fair production volumes.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "What all these examples teach",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use a fair denominator when comparing groups of different sizes (for example, rates instead of raw counts).",
                  "hi": "Use a fair denominator when comparing groups of different sizes (for example, rates instead of raw counts)."
                },
                {
                  "en": "Separate observation from cause. A high rate identifies a problem area, not the reason for it.",
                  "hi": "Separate observation from cause. A high rate identifies a problem area, not the reason for it."
                },
                {
                  "en": "Protect sensitive records and share only what is needed for the decision.",
                  "hi": "Protect sensitive records and share only what is needed for the decision."
                },
                {
                  "en": "Measure results after a change to see whether the improvement actually happened.",
                  "hi": "Measure results after a change to see whether the improvement actually happened."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "When data affects people, accuracy and privacy matter. A hospital should not expose patient details to explain waiting times, and a bank should not treat an unusual transaction as proven fraud. A useful analysis can guide human review while protecting people from careless conclusions.",
              "bodyHi": "When data affects people, accuracy and privacy matter. A hospital should not expose patient details to explain waiting times, and a bank should not treat an unusual transaction as proven fraud. A useful analysis can guide human review while protecting people from careless conclusions."
            }
          ]
        },
        {
          "pill": "Words to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "**Rate:** a count divided by a relevant total.",
                  "hi": "**Rate:** a count divided by a relevant total."
                },
                {
                  "en": "**Pattern:** a repeated or noticeable relationship in data.",
                  "hi": "**Pattern:** a repeated or noticeable relationship in data."
                },
                {
                  "en": "**Cause:** a reason that requires stronger evidence than a simple pattern.",
                  "hi": "**Cause:** a reason that requires stronger evidence than a simple pattern."
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Different industries use different data, but the goal is similar: improve service, reduce risk, or understand what people need. Ethical use is essential when the records include sensitive personal information.",
        "bodyHi": "Different industries use different data, but the goal is similar: improve service, reduce risk, or understand what people need. Ethical use is essential when the records include sensitive personal information."
      }
    }
  ]
};

const M01_T4_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M01",
  "moduleTitle": "Understanding Data Analytics",
  "topic": "Data vs Information vs Insight",
  "pageCount": 2,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 4",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Data vs Information vs Insight",
      "subtitle": "THREE DIFFERENT LEVELS OF UNDERSTANDING",
      "sections": [
        {
          "pill": "From facts to useful action",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Data",
                  "bodyEn": "Raw records and values.",
                  "bodyHi": "Raw records and values.",
                  "tone": "lavender"
                },
                {
                  "title": "Information",
                  "bodyEn": "Cleaned and summarized facts.",
                  "bodyHi": "Cleaned and summarized facts.",
                  "tone": "sky"
                },
                {
                  "title": "Insight",
                  "bodyEn": "Meaning for a business goal.",
                  "bodyHi": "Meaning for a business goal.",
                  "tone": "green"
                },
                {
                  "title": "Action",
                  "bodyEn": "A choice based on evidence.",
                  "bodyHi": "A choice based on evidence.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Example: daily cafe orders",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Day",
                "Coffee cups sold",
                "Tea cups sold"
              ],
              "rows": [
                [
                  "Monday",
                  "40",
                  "30"
                ],
                [
                  "Tuesday",
                  "50",
                  "25"
                ],
                [
                  "Wednesday",
                  "60",
                  "20"
                ]
              ],
              "noteEn": "These individual daily counts are raw data. They show what happened on each day but do not yet give a complete explanation.",
              "noteHi": "These individual daily counts are raw data. They show what happened on each day but do not yet give a complete explanation."
            }
          ]
        },
        {
          "pill": "Turn the rows into information",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Add the three days: **Coffee = 40 + 50 + 60 = 150 cups**. **Tea = 30 + 25 + 20 = 75 cups**. Coffee sales were twice Tea sales in this three-day period. This summary is information because it answers a clear question about totals.",
              "bodyHi": "Add the three days: **Coffee = 40 + 50 + 60 = 150 cups**. **Tea = 30 + 25 + 20 = 75 cups**. Coffee sales were twice Tea sales in this three-day period. This summary is information because it answers a clear question about totals."
            }
          ]
        },
        {
          "pill": "Information and insight are not identical",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Information",
                  "bodyEn": "“Coffee sold 150 cups and Tea sold 75 cups.” This reports calculated totals.",
                  "bodyHi": "“Coffee sold 150 cups and Tea sold 75 cups.” This reports calculated totals.",
                  "tone": "sky"
                },
                {
                  "title": "Possible insight",
                  "bodyEn": "“Coffee demand was higher in this period, so check whether coffee stock and staffing match demand.” This connects the pattern to a decision.",
                  "bodyHi": "“Coffee demand was higher in this period, so check whether coffee stock and staffing match demand.” This connects the pattern to a decision.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Try reading the cafe table in three levels. The daily counts are data. The totals of 150 coffee cups and 75 tea cups are information. The observation that coffee demand is stronger in this short period is a possible insight. Deciding to review coffee stock is an action.",
              "bodyHi": "Try reading the cafe table in three levels. The daily counts are data. The totals of 150 coffee cups and 75 tea cups are information. The observation that coffee demand is stronger in this short period is a possible insight. Deciding to review coffee stock is an action."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Data** is a collection of raw facts. **Information** is data that has been organized or summarized to answer a basic question. An **Insight** is a meaningful interpretation that explains why a result matters for a goal. A decision or action can follow from an insight.",
        "bodyHi": "**Data** is a collection of raw facts. **Information** is data that has been organized or summarized to answer a basic question. An **Insight** is a meaningful interpretation that explains why a result matters for a goal. A decision or action can follow from an insight."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 4",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Data vs Information vs Insight",
      "subtitle": "WRITE INSIGHTS WITHOUT OVERCLAIMING",
      "sections": [
        {
          "pill": "Visualize the three-day totals",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**Cups sold in the example period 150 Coffee 75 Tea**",
              "bodyHi": "**Cups sold in the example period 150 Coffee 75 Tea**"
            }
          ]
        },
        {
          "pill": "Four checks before sharing an insight",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Evidence",
                  "bodyEn": "Which values support it?",
                  "bodyHi": "Which values support it?",
                  "tone": "lavender"
                },
                {
                  "title": "Context",
                  "bodyEn": "Which time and group?",
                  "bodyHi": "Which time and group?",
                  "tone": "sky"
                },
                {
                  "title": "Meaning",
                  "bodyEn": "Why does it matter?",
                  "bodyHi": "Why does it matter?",
                  "tone": "green"
                },
                {
                  "title": "Limit",
                  "bodyEn": "What is still unknown?",
                  "bodyHi": "What is still unknown?",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A strong insight statement",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "“From Monday to Wednesday, coffee sales were **150 cups**, compared with **75 cups** of tea. Coffee demand was higher during these three days. Review coffee inventory, but use more weeks of data before changing long-term purchasing.” This statement gives evidence, meaning, and a limitation.",
              "bodyHi": "“From Monday to Wednesday, coffee sales were **150 cups**, compared with **75 cups** of tea. Coffee demand was higher during these three days. Review coffee inventory, but use more weeks of data before changing long-term purchasing.” This statement gives evidence, meaning, and a limitation."
            }
          ]
        },
        {
          "pill": "Key differences to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "**Data:** Monday coffee = 40.",
                  "hi": "**Data:** Monday coffee = 40."
                },
                {
                  "en": "**Information:** Coffee total = 150 over three days.",
                  "hi": "**Information:** Coffee total = 150 over three days."
                },
                {
                  "en": "**Insight:** Coffee demand appears stronger during this period, which may affect stock planning.",
                  "hi": "**Insight:** Coffee demand appears stronger during this period, which may affect stock planning."
                },
                {
                  "en": "**Decision:** Review coffee inventory and collect more data before a permanent change.",
                  "hi": "**Decision:** Review coffee inventory and collect more data before a permanent change."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A strong insight is specific: it names the measure, period, comparison, and business meaning. It also explains what is unknown. If only three days were studied, do not claim the pattern will continue all year. This habit makes reports more trustworthy.",
              "bodyHi": "A strong insight is specific: it names the measure, period, comparison, and business meaning. It also explains what is unknown. If only three days were studied, do not claim the pattern will continue all year. This habit makes reports more trustworthy."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A useful insight needs evidence, context, and a clear business meaning. It should not invent reasons that the available data cannot show. For example, rising sales do not automatically prove that a marketing campaign caused the increase.",
        "bodyHi": "A useful insight needs evidence, context, and a clear business meaning. It should not invent reasons that the available data cannot show. For example, rising sales do not automatically prove that a marketing campaign caused the increase."
      }
    }
  ]
};

const M01_T5_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M01",
  "moduleTitle": "Understanding Data Analytics",
  "topic": "The Role of Data in Decision-Making",
  "pageCount": 2,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 5",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "The Role of Data in Decision-Making",
      "subtitle": "GOOD DECISIONS START WITH CLEAR QUESTIONS",
      "sections": [
        {
          "pill": "The evidence-based decision loop",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Goal",
                  "bodyEn": "Define what must improve.",
                  "bodyHi": "Define what must improve.",
                  "tone": "lavender"
                },
                {
                  "title": "Measure",
                  "bodyEn": "Choose useful metrics.",
                  "bodyHi": "Choose useful metrics.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Review the options.",
                  "bodyHi": "Review the options.",
                  "tone": "green"
                },
                {
                  "title": "Act",
                  "bodyEn": "Test or implement a choice.",
                  "bodyHi": "Test or implement a choice.",
                  "tone": "amber"
                },
                {
                  "title": "Learn",
                  "bodyEn": "Check the outcome.",
                  "bodyHi": "Check the outcome.",
                  "tone": "pink"
                }
              ]
            }
          ]
        },
        {
          "pill": "Example: choose a delivery partner",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "An online store uses two delivery partners. It wants to reduce late deliveries without increasing cost too much. A manager should compare both partners using the same time period and a clear definition of “on time.” Looking only at the number of late orders can be unfair if one partner handles more orders.",
              "bodyHi": "An online store uses two delivery partners. It wants to reduce late deliveries without increasing cost too much. A manager should compare both partners using the same time period and a clear definition of “on time.” Looking only at the number of late orders can be unfair if one partner handles more orders."
            }
          ]
        },
        {
          "pill": "Example: compare delivery partners",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Partner",
                "Orders",
                "On-time",
                "On-time rate",
                "Avg. cost"
              ],
              "rows": [
                [
                  "A",
                  "200",
                  "180",
                  "90%",
                  "60"
                ],
                [
                  "B",
                  "100",
                  "95",
                  "95%",
                  "72"
                ]
              ],
              "noteEn": "Partner B is more punctual in this example but costs more per order. The decision depends on the service goal and budget.",
              "noteHi": "Partner B is more punctual in this example but costs more per order. The decision depends on the service goal and budget."
            }
          ]
        },
        {
          "pill": "Why context matters",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Partner A has more on-time deliveries in total because it handles more orders.",
                  "hi": "Partner A has more on-time deliveries in total because it handles more orders."
                },
                {
                  "en": "Partner B has a higher on-time rate. Rates help compare performance across different order volumes.",
                  "hi": "Partner B has a higher on-time rate. Rates help compare performance across different order volumes."
                },
                {
                  "en": "Neither number alone tells us the best choice without cost, coverage, and reliability requirements.",
                  "hi": "Neither number alone tells us the best choice without cost, coverage, and reliability requirements."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A manager may prefer the faster delivery partner, but cost and coverage also matter. Data helps show the trade-off. The correct decision depends on what the business values most and which limits it must respect. Good analysts explain the options instead of pretending there is always one perfect answer.",
              "bodyHi": "A manager may prefer the faster delivery partner, but cost and coverage also matter. Data helps show the trade-off. The correct decision depends on what the business values most and which limits it must respect. Good analysts explain the options instead of pretending there is always one perfect answer."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Decision-making means choosing an action from available options. Data helps a team understand the situation and compare options. It does not replace human judgment: decisions also depend on cost, fairness, safety, timing, and business priorities.",
        "bodyHi": "Decision-making means choosing an action from available options. Data helps a team understand the situation and compare options. It does not replace human judgment: decisions also depend on cost, fairness, safety, timing, and business priorities."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M01 | TOPIC 5",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "The Role of Data in Decision-Making",
      "subtitle": "MEASURE WHAT HAPPENS AFTER THE DECISION",
      "sections": [
        {
          "pill": "A small improvement experiment",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Baseline",
                  "bodyEn": "Record current late rate.",
                  "bodyHi": "Record current late rate.",
                  "tone": "lavender"
                },
                {
                  "title": "Change",
                  "bodyEn": "Try a new route in one area.",
                  "bodyHi": "Try a new route in one area.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Measure the same KPI again.",
                  "bodyHi": "Measure the same KPI again.",
                  "tone": "green"
                },
                {
                  "title": "Review",
                  "bodyEn": "Look for other explanations.",
                  "bodyHi": "Look for other explanations.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Leading and lagging indicators",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Leading indicator",
                  "bodyEn": "A measure that may give an early signal, such as orders waiting for pickup or available drivers.",
                  "bodyHi": "A measure that may give an early signal, such as orders waiting for pickup or available drivers.",
                  "tone": "sky"
                },
                {
                  "title": "Lagging indicator",
                  "bodyEn": "A result measured after an event, such as final on-time delivery rate or customer complaints.",
                  "bodyHi": "A result measured after an event, such as final on-time delivery rate or customer complaints.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "An improvement is not always proof of cause",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Suppose the late rate falls from 12% to 8% after a routing change. This is encouraging, but weather, order volume, or holidays may also have changed. To make a stronger conclusion, compare similar periods or use a fair test group when possible.",
              "bodyHi": "Suppose the late rate falls from 12% to 8% after a routing change. This is encouraging, but weather, order volume, or holidays may also have changed. To make a stronger conclusion, compare similar periods or use a fair test group when possible."
            }
          ]
        },
        {
          "pill": "Decision checklist",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Define the goal and metric before looking at the results.",
                  "hi": "Define the goal and metric before looking at the results."
                },
                {
                  "en": "Compare similar groups and time periods.",
                  "hi": "Compare similar groups and time periods."
                },
                {
                  "en": "Review privacy, fairness, costs, and risks.",
                  "hi": "Review privacy, fairness, costs, and risks."
                },
                {
                  "en": "State uncertainty rather than promising a result.",
                  "hi": "State uncertainty rather than promising a result."
                },
                {
                  "en": "Monitor the outcome and change the plan if the evidence changes.",
                  "hi": "Monitor the outcome and change the plan if the evidence changes."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A decision is not finished when a manager approves it. The team should record what changed and whether the chosen KPI improved. Compare similar periods and consider outside factors. This turns a one-time decision into a learning process.",
              "bodyHi": "A decision is not finished when a manager approves it. The team should record what changed and whether the chosen KPI improved. Compare similar periods and consider outside factors. This turns a one-time decision into a learning process."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Good teams treat a decision as something to learn from. They record the starting point, choose a measurable improvement, make a controlled change where possible, and review what happens afterward.",
        "bodyHi": "Good teams treat a decision as something to learn from. They record the starting point, choose a measurable improvement, make a controlled change where possible, and review what happens afterward."
      }
    }
  ]
};

const M02_T1_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M02",
  "moduleTitle": "Data Analyst Essentials",
  "topic": "Data Analyst Roles and Responsibilities",
  "pageCount": 2,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 1",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Data Analyst Roles and Responsibilities",
      "subtitle": "WHAT DOES A DATA ANALYST ACTUALLY DO?",
      "sections": [
        {
          "pill": "A typical analyst workflow",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Ask",
                  "bodyEn": "Understand the business need.",
                  "bodyHi": "Understand the business need.",
                  "tone": "lavender"
                },
                {
                  "title": "Collect",
                  "bodyEn": "Find the right data.",
                  "bodyHi": "Find the right data.",
                  "tone": "sky"
                },
                {
                  "title": "Prepare",
                  "bodyEn": "Clean and validate records.",
                  "bodyHi": "Clean and validate records.",
                  "tone": "green"
                },
                {
                  "title": "Analyze",
                  "bodyEn": "Calculate and compare.",
                  "bodyHi": "Calculate and compare.",
                  "tone": "amber"
                },
                {
                  "title": "Share",
                  "bodyEn": "Explain insights and limits.",
                  "bodyHi": "Explain insights and limits.",
                  "tone": "pink"
                }
              ]
            }
          ]
        },
        {
          "pill": "Daily responsibilities and deliverables",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Responsibility",
                "What the analyst does",
                "Typical output"
              ],
              "rows": [
                [
                  "Understand needs",
                  "Clarify KPI and scope",
                  "Question and metric plan"
                ],
                [
                  "Prepare data",
                  "Check errors and missing values",
                  "Clean dataset"
                ],
                [
                  "Analyze",
                  "Compare trends and segments",
                  "Verified calculations"
                ],
                [
                  "Communicate",
                  "Explain findings to teams",
                  "Report or dashboard"
                ]
              ],
              "noteEn": "Actual responsibilities vary by organization and job level. The goal is reliable business understanding.",
              "noteHi": "Actual responsibilities vary by organization and job level. The goal is reliable business understanding."
            }
          ]
        },
        {
          "pill": "Example: a sales analyst",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A manager asks why weekly revenue fell. The analyst checks the date range, joins sales and product records, confirms revenue calculations, compares products and stores, and presents findings. A responsible analyst also notes missing data and possible alternative explanations.",
              "bodyHi": "A manager asks why weekly revenue fell. The analyst checks the date range, joins sales and product records, confirms revenue calculations, compares products and stores, and presents findings. A responsible analyst also notes missing data and possible alternative explanations."
            }
          ]
        },
        {
          "pill": "Skills that matter beyond software",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Ask precise questions instead of immediately building a chart.",
                  "hi": "Ask precise questions instead of immediately building a chart."
                },
                {
                  "en": "Explain results in words a non-technical manager can understand.",
                  "hi": "Explain results in words a non-technical manager can understand."
                },
                {
                  "en": "Document how the numbers were produced.",
                  "hi": "Document how the numbers were produced."
                },
                {
                  "en": "Protect customer and employee data.",
                  "hi": "Protect customer and employee data."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A Data Analyst begins by listening to the business problem. The analyst then checks the data, calculates the agreed metrics, and explains the result. A dashboard is only one possible output; a clear written recommendation or a small verified table can also be valuable.",
              "bodyHi": "A Data Analyst begins by listening to the business problem. The analyst then checks the data, calculates the agreed metrics, and explains the result. A dashboard is only one possible output; a clear written recommendation or a small verified table can also be valuable."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A **Data Analyst** helps people answer business questions with trustworthy data. The job is more than making charts: analysts clarify problems, find and clean data, calculate useful metrics, explain results, and support decisions.",
        "bodyHi": "A **Data Analyst** helps people answer business questions with trustworthy data. The job is more than making charts: analysts clarify problems, find and clean data, calculate useful metrics, explain results, and support decisions."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 1",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Data Analyst Roles and Responsibilities",
      "subtitle": "TOOLS, TEAMWORK AND QUALITY CHECKS",
      "sections": [
        {
          "pill": "Common tools and why analysts use them",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Tool",
                "Typical analyst task"
              ],
              "rows": [
                [
                  "Excel",
                  "Quick cleaning, formulas, and tables"
                ],
                [
                  "SQL",
                  "Retrieve and summarize database records"
                ],
                [
                  "Python / Pandas",
                  "Repeatable data preparation and analysis"
                ],
                [
                  "Power BI",
                  "Dashboards, filters, and business reports"
                ]
              ],
              "noteEn": "An analyst does not need every tool for every task. Accurate thinking and clear communication are more important than using many tools.",
              "noteHi": "An analyst does not need every tool for every task. Accurate thinking and clear communication are more important than using many tools."
            }
          ]
        },
        {
          "pill": "Who helps deliver a useful report?",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Stakeholder",
                  "bodyEn": "Defines the decision and KPI.",
                  "bodyHi": "Defines the decision and KPI.",
                  "tone": "lavender"
                },
                {
                  "title": "Engineer",
                  "bodyEn": "Makes reliable data available.",
                  "bodyHi": "Makes reliable data available.",
                  "tone": "sky"
                },
                {
                  "title": "Analyst",
                  "bodyEn": "Checks and explains the data.",
                  "bodyHi": "Checks and explains the data.",
                  "tone": "green"
                },
                {
                  "title": "Decision owner",
                  "bodyEn": "Chooses and tracks an action.",
                  "bodyHi": "Chooses and tracks an action.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A chart and a recommendation are different",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Chart",
                  "bodyEn": "Shows that revenue fell 8% compared with the previous week.",
                  "bodyHi": "Shows that revenue fell 8% compared with the previous week.",
                  "tone": "sky"
                },
                {
                  "title": "Recommendation",
                  "bodyEn": "Suggests checking stockouts in the affected stores, with evidence and a plan to verify the cause.",
                  "bodyHi": "Suggests checking stockouts in the affected stores, with evidence and a plan to verify the cause.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Before sending a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Confirm the date range, filters, and KPI definition.",
                  "hi": "Confirm the date range, filters, and KPI definition."
                },
                {
                  "en": "Check duplicates, missing values, and totals against a known source.",
                  "hi": "Check duplicates, missing values, and totals against a known source."
                },
                {
                  "en": "Label axes and units clearly.",
                  "hi": "Label axes and units clearly."
                },
                {
                  "en": "Include important assumptions and limitations.",
                  "hi": "Include important assumptions and limitations."
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Analysts often work with product managers, operations teams, finance, sales, and data engineers. They use different tools depending on where data is stored and how the team needs to consume the results.",
        "bodyHi": "Analysts often work with product managers, operations teams, finance, sales, and data engineers. They use different tools depending on where data is stored and how the team needs to consume the results."
      }
    }
  ]
};

const M02_T2_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M02",
  "moduleTitle": "Data Analyst Essentials",
  "topic": "Data Analyst vs Data Scientist vs Data Engineer",
  "pageCount": 2,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 2",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Data Analyst vs Data Scientist vs Data Engineer",
      "subtitle": "THREE ROLES, ONE DATA ECOSYSTEM",
      "sections": [
        {
          "pill": "Understand the three roles",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Role",
                "Main question",
                "Typical work"
              ],
              "rows": [
                [
                  "Data Analyst",
                  "What happened and why?",
                  "Reports, KPIs, dashboards"
                ],
                [
                  "Data Scientist",
                  "What may happen next?",
                  "Models, experiments, predictions"
                ],
                [
                  "Data Engineer",
                  "How does data arrive reliably?",
                  "Pipelines, storage, quality systems"
                ]
              ],
              "noteEn": "These are typical focuses, not strict rules. Each role may use SQL, Python, and statistics in different ways.",
              "noteHi": "These are typical focuses, not strict rules. Each role may use SQL, Python, and statistics in different ways."
            }
          ]
        },
        {
          "pill": "How a business uses all three",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Engineer",
                  "bodyEn": "Builds a dependable sales dataset.",
                  "bodyHi": "Builds a dependable sales dataset.",
                  "tone": "lavender"
                },
                {
                  "title": "Analyst",
                  "bodyEn": "Explains revenue and customer trends.",
                  "bodyHi": "Explains revenue and customer trends.",
                  "tone": "sky"
                },
                {
                  "title": "Scientist",
                  "bodyEn": "Tests a demand forecast.",
                  "bodyHi": "Tests a demand forecast.",
                  "tone": "green"
                },
                {
                  "title": "Manager",
                  "bodyEn": "Makes a business decision.",
                  "bodyHi": "Makes a business decision.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Example: an online shopping company",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The **Data Engineer** moves orders from the website into a reliable data platform. The **Data Analyst** calculates weekly sales and shows which products are growing. The **Data Scientist** may build a model to estimate future demand. The manager uses the results to plan inventory.",
              "bodyHi": "The **Data Engineer** moves orders from the website into a reliable data platform. The **Data Analyst** calculates weekly sales and shows which products are growing. The **Data Scientist** may build a model to estimate future demand. The manager uses the results to plan inventory."
            }
          ]
        },
        {
          "pill": "One important difference",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "An analyst explains current and past performance, although analysts may also forecast.",
                  "hi": "An analyst explains current and past performance, although analysts may also forecast."
                },
                {
                  "en": "A scientist may build predictive models, but not every Data Scientist works only on AI.",
                  "hi": "A scientist may build predictive models, but not every Data Scientist works only on AI."
                },
                {
                  "en": "An engineer builds and maintains reliable data systems; this enables trustworthy analysis.",
                  "hi": "An engineer builds and maintains reliable data systems; this enables trustworthy analysis."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Imagine one online store. The engineer ensures orders are captured and delivered to the data system. The analyst summarizes what customers bought. The scientist may forecast demand. These roles support the same business but solve different parts of the problem.",
              "bodyHi": "Imagine one online store. The engineer ensures orders are captured and delivered to the data system. The analyst summarizes what customers bought. The scientist may forecast demand. These roles support the same business but solve different parts of the problem."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Data Analysts, Data Scientists, and Data Engineers all work with data, but their main responsibilities are different. The boundaries can overlap. A small company may combine tasks, while a larger company may have separate teams.",
        "bodyHi": "Data Analysts, Data Scientists, and Data Engineers all work with data, but their main responsibilities are different. The boundaries can overlap. A small company may combine tasks, while a larger company may have separate teams."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 2",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Data Analyst vs Data Scientist vs Data Engineer",
      "subtitle": "TOOLS, OUTPUTS AND CAREER FIT",
      "sections": [
        {
          "pill": "Compare typical tools and deliverables",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Role",
                "Common tools",
                "Typical deliverable"
              ],
              "rows": [
                [
                  "Data Analyst",
                  "Excel, SQL, Power BI, Python",
                  "Dashboard or insight report"
                ],
                [
                  "Data Scientist",
                  "Python, statistics, ML libraries",
                  "Tested model and evaluation"
                ],
                [
                  "Data Engineer",
                  "SQL, Python, cloud data tools",
                  "Reliable data pipeline"
                ]
              ],
              "noteEn": "Many tools overlap. The main difference is the problem each person is responsible for solving.",
              "noteHi": "Many tools overlap. The main difference is the problem each person is responsible for solving."
            }
          ]
        },
        {
          "pill": "How to choose a learning path",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "If you enjoy business questions",
                  "bodyEn": "Data Analytics may suit you if you like finding patterns, building reports, and explaining evidence to decision-makers.",
                  "bodyHi": "Data Analytics may suit you if you like finding patterns, building reports, and explaining evidence to decision-makers.",
                  "tone": "sky"
                },
                {
                  "title": "If you enjoy models or systems",
                  "bodyEn": "Data Science focuses more on modeling and experiments; Data Engineering focuses more on infrastructure and dependable pipelines.",
                  "bodyHi": "Data Science focuses more on modeling and experiments; Data Engineering focuses more on infrastructure and dependable pipelines.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "The same SQL skill helps all three",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "An analyst might use SQL to summarize monthly revenue. A scientist might use SQL to prepare training data. An engineer might use SQL to validate and transform records. Learn the fundamentals first; specialization can come later.",
              "bodyHi": "An analyst might use SQL to summarize monthly revenue. A scientist might use SQL to prepare training data. An engineer might use SQL to validate and transform records. Learn the fundamentals first; specialization can come later."
            }
          ]
        },
        {
          "pill": "Career preparation advice",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Start with spreadsheet skills, SQL, basic statistics, and clear communication.",
                  "hi": "Start with spreadsheet skills, SQL, basic statistics, and clear communication."
                },
                {
                  "en": "Build projects that show the question, method, verified results, and business value.",
                  "hi": "Build projects that show the question, method, verified results, and business value."
                },
                {
                  "en": "Do not choose a job title based only on salary or trends; understand the actual daily work.",
                  "hi": "Do not choose a job title based only on salary or trends; understand the actual daily work."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Job titles are guides, not fixed rules. Some analysts build simple forecasts, and some data scientists spend a lot of time preparing data. When choosing a role, study the daily tasks and required skills rather than assuming every company uses the same job description.",
              "bodyHi": "Job titles are guides, not fixed rules. Some analysts build simple forecasts, and some data scientists spend a lot of time preparing data. When choosing a role, study the daily tasks and required skills rather than assuming every company uses the same job description."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Job titles are not perfectly consistent across companies. Read the actual job description to understand what skills and tasks are expected.",
        "bodyHi": "Job titles are not perfectly consistent across companies. Read the actual job description to understand what skills and tasks are expected."
      }
    }
  ]
};

const M02_T3_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M02",
  "moduleTitle": "Data Analyst Essentials",
  "topic": "Types of Data Analytics",
  "pageCount": 2,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 3",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Types of Data Analytics",
      "subtitle": "FOUR WAYS TO ASK QUESTIONS WITH DATA",
      "sections": [
        {
          "pill": "The four analytics questions",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Descriptive",
                  "bodyEn": "What happened?",
                  "bodyHi": "What happened?",
                  "tone": "lavender"
                },
                {
                  "title": "Diagnostic",
                  "bodyEn": "Why might it have happened?",
                  "bodyHi": "Why might it have happened?",
                  "tone": "sky"
                },
                {
                  "title": "Predictive",
                  "bodyEn": "What may happen next?",
                  "bodyHi": "What may happen next?",
                  "tone": "green"
                },
                {
                  "title": "Prescriptive",
                  "bodyEn": "What should we consider doing?",
                  "bodyHi": "What should we consider doing?",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Example: weekly shop sales",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Type",
                "Example question",
                "Example output"
              ],
              "rows": [
                [
                  "Descriptive",
                  "Did sales fall?",
                  "Sales fell 10% this week"
                ],
                [
                  "Diagnostic",
                  "Why did they fall?",
                  "Stockouts rose in two stores"
                ],
                [
                  "Predictive",
                  "What may happen next?",
                  "Estimated demand next week"
                ],
                [
                  "Prescriptive",
                  "What action may help?",
                  "Compare restocking options"
                ]
              ],
              "noteEn": "These stages can work together, but a business does not need all four for every question.",
              "noteHi": "These stages can work together, but a business does not need all four for every question."
            }
          ]
        },
        {
          "pill": "Descriptive analytics in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Descriptive Analytics summarizes recorded facts. It uses counts, totals, averages, rates, and charts. For example, “We received 1,000 orders last month” is descriptive. It tells what happened, not what caused it.",
              "bodyHi": "Descriptive Analytics summarizes recorded facts. It uses counts, totals, averages, rates, and charts. For example, “We received 1,000 orders last month” is descriptive. It tells what happened, not what caused it."
            }
          ]
        },
        {
          "pill": "Do not confuse the questions",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "A trend chart is often descriptive, even if it looks advanced.",
                  "hi": "A trend chart is often descriptive, even if it looks advanced."
                },
                {
                  "en": "A possible cause is not proven simply because two measures changed together.",
                  "hi": "A possible cause is not proven simply because two measures changed together."
                },
                {
                  "en": "A prediction is an estimate, not a guarantee.",
                  "hi": "A prediction is an estimate, not a guarantee."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Descriptive Analytics is often the starting point: it tells us what happened. Diagnostic Analytics looks for explanations. Predictive Analytics estimates future outcomes. Prescriptive Analytics compares actions. Each type asks a different question, so the business goal decides which one to use.",
              "bodyHi": "Descriptive Analytics is often the starting point: it tells us what happened. Diagnostic Analytics looks for explanations. Predictive Analytics estimates future outcomes. Prescriptive Analytics compares actions. Each type asks a different question, so the business goal decides which one to use."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "The four common types of Data Analytics are **Descriptive, Diagnostic, Predictive, and Prescriptive**. They represent different questions, from understanding past results to estimating what may happen and comparing possible actions.",
        "bodyHi": "The four common types of Data Analytics are **Descriptive, Diagnostic, Predictive, and Prescriptive**. They represent different questions, from understanding past results to estimating what may happen and comparing possible actions."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 3",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Types of Data Analytics",
      "subtitle": "DIAGNOSE, PREDICT AND RECOMMEND CAREFULLY",
      "sections": [
        {
          "pill": "Diagnostic versus predictive",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Diagnostic",
                  "bodyEn": "Investigates possible reasons for a past result. Example: compare sales drops with stockouts and store closures.",
                  "bodyHi": "Investigates possible reasons for a past result. Example: compare sales drops with stockouts and store closures.",
                  "tone": "sky"
                },
                {
                  "title": "Predictive",
                  "bodyEn": "Estimates a future outcome using patterns and models. Example: forecast next-week order volume.",
                  "bodyHi": "Estimates a future outcome using patterns and models. Example: forecast next-week order volume.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Predictive versus prescriptive",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Predictive",
                  "bodyEn": "“We may receive 500 orders next week.” This estimates a likely future value.",
                  "bodyHi": "“We may receive 500 orders next week.” This estimates a likely future value.",
                  "tone": "sky"
                },
                {
                  "title": "Prescriptive",
                  "bodyEn": "“Given staff cost and service targets, compare two staffing plans.” This helps choose an action.",
                  "bodyHi": "“Given staff cost and service targets, compare two staffing plans.” This helps choose an action.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Example: plan delivery staffing",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A courier first counts last week's deliveries (**Descriptive**). It checks whether delays were linked to traffic or peak hours (**Diagnostic**). It estimates next week's volume (**Predictive**). It compares staffing plans using costs and service goals (**Prescriptive**).",
              "bodyHi": "A courier first counts last week's deliveries (**Descriptive**). It checks whether delays were linked to traffic or peak hours (**Diagnostic**). It estimates next week's volume (**Predictive**). It compares staffing plans using costs and service goals (**Prescriptive**)."
            }
          ]
        },
        {
          "pill": "What responsible analysts remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "State the time period, assumptions, and method behind every result.",
                  "hi": "State the time period, assumptions, and method behind every result."
                },
                {
                  "en": "Validate forecasts on data not used to fit the model when possible.",
                  "hi": "Validate forecasts on data not used to fit the model when possible."
                },
                {
                  "en": "Do not present a correlation as a proven cause.",
                  "hi": "Do not present a correlation as a proven cause."
                },
                {
                  "en": "For high-impact decisions, include human review and relevant constraints.",
                  "hi": "For high-impact decisions, include human review and relevant constraints."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A forecast can be useful even when it is not exact, but it must be tested and presented as an estimate. A recommended action should consider cost, fairness, and practical limits. An advanced model is not automatically better than a simple, well-checked analysis.",
              "bodyHi": "A forecast can be useful even when it is not exact, but it must be tested and presented as an estimate. A recommended action should consider cost, fairness, and practical limits. An advanced model is not automatically better than a simple, well-checked analysis."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "More advanced analytics requires stronger assumptions and checks. Analysts should understand the data, compare alternative explanations, and be honest about uncertainty.",
        "bodyHi": "More advanced analytics requires stronger assumptions and checks. Analysts should understand the data, compare alternative explanations, and be honest about uncertainty."
      }
    }
  ]
};

const M02_T4_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M02",
  "moduleTitle": "Data Analyst Essentials",
  "topic": "Understanding Data Types, Sources and Quality",
  "pageCount": 2,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 4",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Understanding Data Types, Sources and Quality",
      "subtitle": "KNOW WHAT KIND OF DATA YOU HAVE",
      "sections": [
        {
          "pill": "Common data types",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Type",
                "Example",
                "How it is used"
              ],
              "rows": [
                [
                  "Number",
                  "price = 250.50",
                  "Calculations and comparisons"
                ],
                [
                  "Text",
                  "city = Patna",
                  "Names and categories"
                ],
                [
                  "Date",
                  "2026-06-15",
                  "Time-based analysis"
                ],
                [
                  "Boolean",
                  "is_active = TRUE",
                  "Yes/no conditions"
                ],
                [
                  "Identifier",
                  "customer_id = 0012",
                  "Connect records, not arithmetic"
                ]
              ],
              "noteEn": "A customer ID can contain digits but should not be added or averaged. Leading zeros may matter.",
              "noteHi": "A customer ID can contain digits but should not be added or averaged. Leading zeros may matter."
            }
          ]
        },
        {
          "pill": "Structured and unstructured data",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Structured data",
                  "bodyEn": "Organized into predictable rows and columns, such as an orders table or spreadsheet.",
                  "bodyHi": "Organized into predictable rows and columns, such as an orders table or spreadsheet.",
                  "tone": "sky"
                },
                {
                  "title": "Unstructured data",
                  "bodyEn": "Less fixed in shape, such as photos, audio, or free-text reviews. It often needs extra processing.",
                  "bodyHi": "Less fixed in shape, such as photos, audio, or free-text reviews. It often needs extra processing.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Semi-structured data also exists",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "JSON files and some system logs contain fields and labels but do not always have the same columns in every record. This is often called **semi-structured data**. Analysts may need to extract fields before building a table.",
              "bodyHi": "JSON files and some system logs contain fields and labels but do not always have the same columns in every record. This is often called **semi-structured data**. Analysts may need to extract fields before building a table."
            }
          ]
        },
        {
          "pill": "Two questions to ask",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "What does each column mean, and what values are allowed?",
                  "hi": "What does each column mean, and what values are allowed?"
                },
                {
                  "en": "Is the data type appropriate for the operations we plan to perform?",
                  "hi": "Is the data type appropriate for the operations we plan to perform?"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A customer ID such as 0012 may look numeric, but it identifies a person rather than measuring an amount. Adding customer IDs makes no business sense. Before analyzing a column, ask whether it is a measure, category, date, or identifier. That choice affects every calculation.",
              "bodyHi": "A customer ID such as 0012 may look numeric, but it identifies a person rather than measuring an amount. Adding customer IDs makes no business sense. Before analyzing a column, ask whether it is a measure, category, date, or identifier. That choice affects every calculation."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Before analysis, an analyst must understand the type, source, and quality of the data. A column that looks like a number may actually be an identifier. A date saved as text may not sort correctly. Good analysis starts with understanding the records.",
        "bodyHi": "Before analysis, an analyst must understand the type, source, and quality of the data. A column that looks like a number may actually be an identifier. A date saved as text may not sort correctly. Good analysis starts with understanding the records."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 4",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Understanding Data Types, Sources and Quality",
      "subtitle": "SOURCES AND DATA QUALITY",
      "sections": [
        {
          "pill": "A practical source-to-report path",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Source",
                  "bodyEn": "Find an approved dataset.",
                  "bodyHi": "Find an approved dataset.",
                  "tone": "lavender"
                },
                {
                  "title": "Profile",
                  "bodyEn": "Inspect types and missing values.",
                  "bodyHi": "Inspect types and missing values.",
                  "tone": "sky"
                },
                {
                  "title": "Clean",
                  "bodyEn": "Fix or flag quality issues.",
                  "bodyHi": "Fix or flag quality issues.",
                  "tone": "green"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Check counts and totals.",
                  "bodyHi": "Check counts and totals.",
                  "tone": "amber"
                },
                {
                  "title": "Use",
                  "bodyEn": "Build a reliable report.",
                  "bodyHi": "Build a reliable report.",
                  "tone": "pink"
                }
              ]
            }
          ]
        },
        {
          "pill": "Example: data quality problems",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "customer_id",
                "age",
                "city",
                "issue"
              ],
              "rows": [
                [
                  "001",
                  "24",
                  "Patna",
                  "Valid"
                ],
                [
                  "002",
                  "",
                  "Delhi",
                  "Missing age"
                ],
                [
                  "002",
                  "30",
                  "Delhi",
                  "Duplicate ID"
                ],
                [
                  "004",
                  "-5",
                  "Patna",
                  "Invalid age"
                ]
              ],
              "noteEn": "These are illustrative records. A missing age, duplicate identifier, and negative age need review before reporting.",
              "noteHi": "These are illustrative records. A missing age, duplicate identifier, and negative age need review before reporting."
            }
          ]
        },
        {
          "pill": "Five useful quality dimensions",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**Accuracy:** is the value correct? **Completeness:** are required values present? **Consistency:** do systems use the same definitions? **Uniqueness:** are duplicate records controlled? **Timeliness:** is the data recent enough for the decision? Other dimensions, such as validity, also matter.",
              "bodyHi": "**Accuracy:** is the value correct? **Completeness:** are required values present? **Consistency:** do systems use the same definitions? **Uniqueness:** are duplicate records controlled? **Timeliness:** is the data recent enough for the decision? Other dimensions, such as validity, also matter."
            }
          ]
        },
        {
          "pill": "Do not hide data problems",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Record cleaning rules and keep a trace of original values when appropriate.",
                  "hi": "Record cleaning rules and keep a trace of original values when appropriate."
                },
                {
                  "en": "Do not fill missing values with zero unless the business meaning supports it.",
                  "hi": "Do not fill missing values with zero unless the business meaning supports it."
                },
                {
                  "en": "Check permissions and avoid exposing private information.",
                  "hi": "Check permissions and avoid exposing private information."
                },
                {
                  "en": "Verify key totals after every important transformation.",
                  "hi": "Verify key totals after every important transformation."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Data cleaning is not simply deleting unusual rows. A missing value may have a business reason, and a duplicate may reflect a system issue. Record what was changed, validate the totals, and keep enough detail so another analyst can understand and reproduce the result.",
              "bodyHi": "Data cleaning is not simply deleting unusual rows. A missing value may have a business reason, and a duplicate may reflect a system issue. Record what was changed, validate the totals, and keep enough detail so another analyst can understand and reproduce the result."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Data may come from internal systems, surveys, spreadsheets, websites, or approved external providers. The source matters because it affects freshness, completeness, accuracy, and what you are allowed to do with the records.",
        "bodyHi": "Data may come from internal systems, surveys, spreadsheets, websites, or approved external providers. The source matters because it affects freshness, completeness, accuracy, and what you are allowed to do with the records."
      }
    }
  ]
};

const M02_T5_FOUNDATIONS_SPEC: StructuredVisualNoteTopic = {
  "module": "M02",
  "moduleTitle": "Data Analyst Essentials",
  "topic": "Data Analytics Workflow: From Question to Action",
  "pageCount": 3,
  "sampleDataNotice": "All example shop orders, metrics and case studies are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Data Analytics Workflow: From Question to Action",
      "subtitle": "FOLLOW A REPEATABLE ANALYSIS PROCESS",
      "sections": [
        {
          "pill": "The end-to-end workflow",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Define",
                  "bodyEn": "Agree on goal and KPI.",
                  "bodyHi": "Agree on goal and KPI.",
                  "tone": "lavender"
                },
                {
                  "title": "Collect",
                  "bodyEn": "Find permitted data.",
                  "bodyHi": "Find permitted data.",
                  "tone": "sky"
                },
                {
                  "title": "Prepare",
                  "bodyEn": "Clean and validate.",
                  "bodyHi": "Clean and validate.",
                  "tone": "green"
                },
                {
                  "title": "Analyze",
                  "bodyEn": "Find verified patterns.",
                  "bodyHi": "Find verified patterns.",
                  "tone": "amber"
                },
                {
                  "title": "Act",
                  "bodyEn": "Explain and measure.",
                  "bodyHi": "Explain and measure.",
                  "tone": "pink"
                }
              ]
            }
          ]
        },
        {
          "pill": "What each stage produces",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Key activity",
                "Deliverable"
              ],
              "rows": [
                [
                  "Question",
                  "Define goal, scope, KPI",
                  "Analysis plan"
                ],
                [
                  "Collect",
                  "Identify source and access",
                  "Source inventory"
                ],
                [
                  "Prepare",
                  "Check missing and duplicate rows",
                  "Validated dataset"
                ],
                [
                  "Analyze",
                  "Calculate, compare, visualize",
                  "Evidence and findings"
                ],
                [
                  "Share",
                  "Present results and limitations",
                  "Report and recommendation"
                ],
                [
                  "Monitor",
                  "Track outcomes after action",
                  "Follow-up review"
                ]
              ],
              "noteEn": "Teams may revisit earlier stages when a new issue appears. Analytics is iterative, not always a straight line.",
              "noteHi": "Teams may revisit earlier stages when a new issue appears. Analytics is iterative, not always a straight line."
            }
          ]
        },
        {
          "pill": "A common beginner mistake",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not open a chart tool before deciding what question you are trying to answer.",
                  "hi": "Do not open a chart tool before deciding what question you are trying to answer."
                },
                {
                  "en": "Do not trust a dataset only because it contains many rows. Check meaning and quality first.",
                  "hi": "Do not trust a dataset only because it contains many rows. Check meaning and quality first."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Start by writing a question that can be answered with data. Next decide which metric and time period matter. Only then collect and clean the records. If the goal is unclear, even a beautiful chart may fail to help the business.",
              "bodyHi": "Start by writing a question that can be answered with data. Next decide which metric and time period matter. Only then collect and clean the records. If the goal is unclear, even a beautiful chart may fail to help the business."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A good analytics project follows a clear process so that someone else can understand and repeat the result. The work begins with a business question, not with a chart or software tool. The final goal is a useful decision and a way to measure its effect.",
        "bodyHi": "A good analytics project follows a clear process so that someone else can understand and repeat the result. The work begins with a business question, not with a chart or software tool. The final goal is a useful decision and a way to measure its effect."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Data Analytics Workflow: From Question to Action",
      "subtitle": "EXAMPLE: REDUCE CUSTOMER WAITING TIME",
      "sections": [
        {
          "pill": "Example: response times by day",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Day",
                "Requests",
                "Average wait (min)"
              ],
              "rows": [
                [
                  "Monday",
                  "80",
                  "12"
                ],
                [
                  "Tuesday",
                  "100",
                  "18"
                ],
                [
                  "Wednesday",
                  "90",
                  "15"
                ]
              ],
              "noteEn": "These are illustrative daily averages. A weekly average across all requests should be weighted by the number of requests, not by simply averaging daily averages.",
              "noteHi": "These are illustrative daily averages. A weekly average across all requests should be weighted by the number of requests, not by simply averaging daily averages."
            }
          ]
        },
        {
          "pill": "Calculate the overall average correctly",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Weighted average wait = (80 x 12 + 100 x 18 + 90 x 15) / (80 + 100 + 90) = **4110 / 270 = about 15.22 minutes**. The analyst should check whether the recorded wait-time definition is consistent across all days.",
              "bodyHi": "Weighted average wait = (80 x 12 + 100 x 18 + 90 x 15) / (80 + 100 + 90) = **4110 / 270 = about 15.22 minutes**. The analyst should check whether the recorded wait-time definition is consistent across all days."
            }
          ]
        },
        {
          "pill": "Turn the finding into a decision",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Observe",
                  "bodyEn": "Tuesday wait is highest.",
                  "bodyHi": "Tuesday wait is highest.",
                  "tone": "lavender"
                },
                {
                  "title": "Investigate",
                  "bodyEn": "Check peak hours and staffing.",
                  "bodyHi": "Check peak hours and staffing.",
                  "tone": "sky"
                },
                {
                  "title": "Recommend",
                  "bodyEn": "Test a shift adjustment.",
                  "bodyHi": "Test a shift adjustment.",
                  "tone": "green"
                },
                {
                  "title": "Measure",
                  "bodyEn": "Review wait and quality after.",
                  "bodyHi": "Review wait and quality after.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Communicate the result responsibly",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Explain the data period, the KPI definition, and the weighted-average method.",
                  "hi": "Explain the data period, the KPI definition, and the weighted-average method."
                },
                {
                  "en": "Say that Tuesday has the highest observed daily average, not that staffing is definitely the cause.",
                  "hi": "Say that Tuesday has the highest observed daily average, not that staffing is definitely the cause."
                },
                {
                  "en": "Suggest a limited test and monitor both waiting time and customer satisfaction.",
                  "hi": "Suggest a limited test and monitor both waiting time and customer satisfaction."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The overall waiting-time average is weighted because each day has a different number of requests. Tuesday contributes more requests than Monday, so it must have more weight in the combined result. This small calculation shows why correct definitions and methods matter.",
              "bodyHi": "The overall waiting-time average is weighted because each day has a different number of requests. Tuesday contributes more requests than Monday, so it must have more weight in the combined result. This small calculation shows why correct definitions and methods matter."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A support team wants to reduce how long customers wait for a response. The business goal is clear: improve response speed without reducing answer quality.",
        "bodyHi": "A support team wants to reduce how long customers wait for a response. The business goal is clear: improve response speed without reducing answer quality."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M02 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Data Analytics Workflow: From Question to Action",
      "subtitle": "MAKE THE WORK REPRODUCIBLE",
      "sections": [
        {
          "pill": "A simple analyst handover package",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Question",
                  "bodyEn": "Write the business objective.",
                  "bodyHi": "Write the business objective.",
                  "tone": "lavender"
                },
                {
                  "title": "Source",
                  "bodyEn": "Record where data came from.",
                  "bodyHi": "Record where data came from.",
                  "tone": "sky"
                },
                {
                  "title": "Steps",
                  "bodyEn": "Save cleaning and formulas.",
                  "bodyHi": "Save cleaning and formulas.",
                  "tone": "green"
                },
                {
                  "title": "Checks",
                  "bodyEn": "Show validation results.",
                  "bodyHi": "Show validation results.",
                  "tone": "amber"
                },
                {
                  "title": "Report",
                  "bodyEn": "Share insights and limits.",
                  "bodyHi": "Share insights and limits.",
                  "tone": "pink"
                }
              ]
            }
          ]
        },
        {
          "pill": "Weak versus strong reporting",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Weak report",
                  "bodyEn": "“Customer waiting time is bad.” No definition, source, period, or calculation is provided.",
                  "bodyHi": "“Customer waiting time is bad.” No definition, source, period, or calculation is provided.",
                  "tone": "sky"
                },
                {
                  "title": "Strong report",
                  "bodyEn": "“Across 270 requests on these three days, the weighted average wait was about 15.22 minutes.”",
                  "bodyHi": "“Across 270 requests on these three days, the weighted average wait was about 15.22 minutes.”",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Document assumptions and decisions",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Keep a short record of filters, excluded rows, missing-data treatment, and metric formulas. Label sample data clearly. If a number changes after refresh, the team should be able to find out whether the cause was new data, a changed rule, or an error.",
              "bodyHi": "Keep a short record of filters, excluded rows, missing-data treatment, and metric formulas. Label sample data clearly. If a number changes after refresh, the team should be able to find out whether the cause was new data, a changed rule, or an error."
            }
          ]
        },
        {
          "pill": "The final workflow reminder",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Start with the decision and work backward to the data needed.",
                  "hi": "Start with the decision and work backward to the data needed."
                },
                {
                  "en": "Validate before presenting and explain what the data cannot prove.",
                  "hi": "Validate before presenting and explain what the data cannot prove."
                },
                {
                  "en": "Use the report to support an action, then monitor whether the action helped.",
                  "hi": "Use the report to support an action, then monitor whether the action helped."
                },
                {
                  "en": "Protect private data throughout collection, analysis, and sharing.",
                  "hi": "Protect private data throughout collection, analysis, and sharing."
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand it in simple words",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A reliable handover lets another analyst repeat the result next week. Save the source, filters, cleaning rules, metric formula, and validation checks. When a dashboard changes after refresh, these records help the team tell new information apart from an error.",
              "bodyHi": "A reliable handover lets another analyst repeat the result next week. Save the source, filters, cleaning rules, metric formula, and validation checks. When a dashboard changes after refresh, these records help the team tell new information apart from an error."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A reproducible analysis can be checked or repeated by another person. This is especially important when reports are refreshed every week or used in business meetings.",
        "bodyHi": "A reproducible analysis can be checked or repeated by another person. This is especially important when reports are refreshed every week or used in business meetings."
      }
    }
  ]
};

export const FOUNDATIONS_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  1: M01_T1_FOUNDATIONS_SPEC,
  2: M01_T2_FOUNDATIONS_SPEC,
  3: M01_T3_FOUNDATIONS_SPEC,
  4: M01_T4_FOUNDATIONS_SPEC,
  5: M01_T5_FOUNDATIONS_SPEC,
  6: M02_T1_FOUNDATIONS_SPEC,
  7: M02_T2_FOUNDATIONS_SPEC,
  8: M02_T3_FOUNDATIONS_SPEC,
  9: M02_T4_FOUNDATIONS_SPEC,
  10: M02_T5_FOUNDATIONS_SPEC,
};

export function getFoundationsVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  return FOUNDATIONS_VISUAL_NOTES_BY_ID[topicId] || null;
}

export function hasFoundationsVisualNotes(topicId: number): boolean {
  return Boolean(FOUNDATIONS_VISUAL_NOTES_BY_ID[topicId]);
}
