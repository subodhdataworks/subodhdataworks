import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 1 (DS-M01): Introduction to Data Science — Topics 1 to 8
// ============================================================================

export const DS_M01_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // --------------------------------------------------------------------------
  // TOPIC 1: What Is Data Science? (5-Page Comprehensive Handwritten Master Lesson)
  // --------------------------------------------------------------------------
  1: {
    module: 'DS-M01',
    moduleTitle: 'Introduction to Data Science',
    topic: 'What Is Data Science?',
    pageCount: 5,
    sampleDataNotice:
      'All supermarket bills, student attendance records, and customer subscription examples in this lesson are illustrative sample datasets created for learning.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 1',
        pageTag: 'PAGE 1 OF 5',
        footerPage: '1 / 5',
        title: 'What Is Data Science?',
        subtitle: 'Data Science',
        intro: {
          icon: 'database',
          titleEn: 'Start From Zero: What Is Data Science?',
          titleHi: 'Zero Se Samajhiye: Data Science Kya Hai?',
          bodyEn:
            '**Data Science** is a structured process where we collect and clean **raw data**, analyze patterns using **statistics** and **coding**, extract useful **insights**, and make better **decisions**.',
          bodyHi:
            '**Data Science** ek process hai jisme hum **raw data** ko collect aur clean karke **statistics** aur **coding** se useful **insights** nikalte hain aur better **decisions** lete hain.',
        },
        sections: [
          {
            pill: 'How Does Data Science Work? (5-Step Visual Flow)',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: 'Raw Data',
                    bodyEn: 'Scattered raw facts & logs',
                    bodyHi: 'Bikhre hue data',
                    tone: 'sky',
                  },
                  {
                    title: 'Data Cleaning',
                    bodyEn: 'Fixing missing values & errors',
                    bodyHi: 'Galtiyon ko sudharna',
                    tone: 'amber',
                  },
                  {
                    title: 'Analysis',
                    bodyEn: 'Understanding patterns & trends',
                    bodyHi: 'Data ko samajhna',
                    tone: 'lavender',
                  },
                  {
                    title: 'Insights',
                    bodyEn: 'Useful actionable information',
                    bodyHi: 'Useful information',
                    tone: 'green',
                  },
                  {
                    title: 'Decisions',
                    bodyEn: 'Taking better business action',
                    bodyHi: 'Better action lena',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Real-Life Examples',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'E-commerce',
                    bodyEn: 'Which **product** is selling the most & when to restock inventory?',
                    bodyHi: 'Kaun sa **product** zyada bik raha hai aur stock kab mangwana hai?',
                    tone: 'pink',
                  },
                  {
                    title: 'Banking',
                    bodyEn: 'Which customer has a high **loan risk** or unusual UPI transaction?',
                    bodyHi: 'Kis customer ka **loan risk** high hai ya UPI transaction unusual hai?',
                    tone: 'amber',
                  },
                  {
                    title: 'OTT / Media',
                    bodyEn: 'Which **content** is watched the most to recommend next?',
                    bodyHi: 'Kaunsa **content** zyada dekha ja raha hai taaki sahi show recommend ho?',
                    tone: 'sky',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Why Is It Important?',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Helps make **better business decisions** backed by real data.',
                    hi: '**Better business decisions** lene mein madad karta hai.',
                  },
                  {
                    en: 'Identifies valuable **trends and patterns** early.',
                    hi: '**Trends aur patterns** ko identify karta hai.',
                  },
                  {
                    en: 'Reduces **cost** and increases operational **efficiency**.',
                    hi: '**Cost kam** aur **efficiency** badhata hai.',
                  },
                  {
                    en: 'Delivers a better, personalized **customer experience**.',
                    hi: 'Customer ko **better experience** deta hai.',
                  },
                ],
              },
            ],
          },
          {
            pill: 'The 3 Core Pillars of Data Science',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: '1. Math & Statistics',
                    bodyEn:
                      'Helps measure **averages**, spot genuine **patterns**, check **probability**, and separate real trends from pure chance.',
                    bodyHi:
                      '**Averages**, **trends** aur **probability** measure karne mein madad karta hai, taaki pata chale ki koi pattern sach mein real hai ya sirf random chance.',
                    tone: 'sky',
                  },
                  {
                    title: '2. Computing & Data Tools',
                    bodyEn:
                      'Uses **Excel**, **Databases**, **SQL**, **Python**, and **Machine Learning** to organize and process large datasets reliably.',
                    bodyHi:
                      '**Excel**, **Databases**, **SQL**, **Python** aur **Machine Learning** use karke bade datasets ko handle aur process karta hai.',
                    tone: 'lavender',
                  },
                  {
                    title: '3. Domain & Business Knowledge',
                    bodyEn:
                      'Understands how a **hospital**, **bank**, **school**, or **online shop** actually works so the analysis solves a real problem.',
                    bodyHi:
                      'Samajhta hai ki **hospital**, **bank**, **school** ya **online store** actually kaise kaam karta hai, taaki analysis kisi asli problem ko solve kare.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 1',
        pageTag: 'PAGE 2 OF 5',
        footerPage: '2 / 5',
        title: 'Why Do We Need Data Science?',
        subtitle: 'Before vs After & Core Benefits',
        intro: {
          icon: 'table',
          titleEn: 'Guesswork vs Evidence-Based Decisions',
          titleHi: 'Andaaza (Guesswork) vs Data-Backed Decisions',
          bodyEn:
            'Without **Data Science**, organizations rely on blind **guesswork** which leads to wasted stock and missed risks. With **Data Science**, every major action is backed by **verified evidence**.',
          bodyHi:
            'Bina **Data Science** ke businesses sirf **guesswork** (andaaze) par chalte hain jisse nuksaan hota hai. **Data Science** ke saath har bada faisla **verified evidence** par based hota hai.',
        },
        sections: [
          {
            pill: 'Before vs After: What Happens Without Data Science?',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Decisions Based on Guesswork',
                    bodyEn:
                      'A store orders too many **winter jackets** in a warm city without checking past data, leading to **unsold stock** and wasted money.',
                    bodyHi:
                      'Ek store bina data dekhe garam shehar mein zyada **winter jackets** mangwa leta hai, jisse **unsold stock** bachta hai aur paisa atak gaya.',
                    tone: 'pink',
                  },
                  {
                    title: 'Decisions Guided by Data Science',
                    bodyEn:
                      'The team checks **past seasonal sales**, **local weather**, and **customer demand** to order the exact right quantity for each city.',
                    bodyHi:
                      'Team **past seasonal sales**, **local weather** aur **customer demand** check karke har shehar ke liye sahi quantity order karti hai.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Why Is It Important?',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Helps make **better business decisions** backed by real evidence instead of opinions.',
                    hi: 'Opinions ke bajay real evidence ke base par **better business decisions** lene mein madad karta hai.',
                  },
                  {
                    en: 'Identifies hidden **trends and patterns** across thousands of customer records.',
                    hi: 'Hazaaron records ke andar chhupe hue **trends aur patterns** ko identify karta hai.',
                  },
                  {
                    en: 'Reduces operational **cost and waste** while improving team **efficiency**.',
                    hi: 'Business ki **cost kam** karta hai aur kaam ki **efficiency** badhata hai.',
                  },
                  {
                    en: 'Delivers a personalized, faster, and safer **customer experience**.',
                    hi: 'Customers ko fast, safe aur better **customer experience** deta hai.',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Important Technical Fact: Data Science Is Not Only Machine Learning',
            blocks: [
              {
                type: 'note',
                tone: 'amber',
                bodyEn:
                  'Many beginners think **Data Science** means only building complex **Machine Learning** models. That is a myth! A huge part of Data Science is asking the right question, collecting **clean data**, exploring patterns with **charts**, running fair experiments, and explaining results clearly. Sometimes a simple **summary table** or **statistical check** solves the problem better than a heavy ML model.',
                bodyHi:
                  'Bahut se beginners ko lagta hai ki **Data Science** ka matlab sirf heavy **Machine Learning** models banana hota hai. Yeh ek myth hai! Data Science ka bada hissa sahi sawaal poochna, **clean data** collect karna, **charts** se patterns samajhna aur results ko simple bhasha mein samjhana hota hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 1',
        pageTag: 'PAGE 3 OF 5',
        footerPage: '3 / 5',
        title: 'Rule-Based Logic vs Machine Learning',
        subtitle: 'Sample Dataset & Core Terminology',
        intro: {
          icon: 'table',
          titleEn: 'Understanding Tables, Rows, Columns & Models',
          titleHi: 'Tables, Rows, Columns Aur Models Ko Samajhna',
          bodyEn:
            'In **Data Science**, structured data is organized in **tables** where each horizontal **Row** is one record and each vertical **Column** is one measured feature or attribute.',
          bodyHi:
            '**Data Science** mein structured data ko **tables** mein rakha jaata hai jahan har horizontal **Row** ek record hoti hai aur har vertical **Column** ek feature ya detail hoti hai.',
        },
        sections: [
          {
            pill: 'Sample Dataset: Online Learning App Subscriptions',
            blocks: [
              {
                type: 'table',
                headers: ['Student_ID', 'Days_Active_Last_Month', 'Support_Tickets', 'Renewed_Next_Month'],
                rows: [
                  ['ST-101', '22', '0', 'Yes'],
                  ['ST-102', '18', '1', 'Yes'],
                  ['ST-103', '3', '4', 'No'],
                  ['ST-104', '2', '3', 'No'],
                  ['ST-105', '15', '0', 'Yes'],
                  ['ST-106', '4', '2', 'No'],
                ],
                noteEn:
                  'Sample Dataset: Each **Row** is one student. Each **Column** is one recorded fact. Notice that students with very few active days and multiple support tickets did not renew.',
                noteHi:
                  'Sample Dataset: Har **Row** ek student ko dikhati hai aur har **Column** ek recorded detail ko. Dhyan dijiye ki jin students ke active days bahut kam the aur support tickets zyada the, unhone renew nahi kiya.',
              },
            ],
          },
          {
            pill: 'Two Different Ways to Flag At-Risk Students',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Rule-Based Logic (Human-Written)',
                    bodyEn:
                      'A human manually writes a fixed rule: *"If Days_Active < 5 and Support_Tickets >= 2, send a help email."* Simple, transparent, and great for clear policies — **not** Machine Learning.',
                    bodyHi:
                      'Isme insaan khud ek fixed rule likhta hai: *"Agar Days_Active < 5 aur Support_Tickets >= 2 ho, toh help email bhejo."* Yeh simple aur clear hai, lekin yeh **Machine Learning nahi** hai.',
                    tone: 'sky',
                  },
                  {
                    title: 'Machine Learning Model (Learned from Data)',
                    bodyEn:
                      'An algorithm studies thousands of past student records automatically, learns how multiple clues combine, and estimates renewal likelihood — then gets **evaluated on unseen data** and **monitored** over time.',
                    bodyHi:
                      'Isme algorithm hazaaron purane student records se khud patterns seekhta hai, multiple signals ko combine karta hai, aur renewal probability estimate karta hai — phir usse **unseen data par evaluate** aur time ke saath **monitor** kiya jaata hai.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 1',
        pageTag: 'PAGE 4 OF 5',
        footerPage: '4 / 5',
        title: 'Real-Life Examples & Code Walkthrough',
        subtitle: 'Industry Applications + Formula & Python Output',
        intro: {
          icon: 'database',
          titleEn: 'Where Do We See Data Science Every Day?',
          titleHi: 'Hum Rozमर्रा Ki Zindagi Mein Data Science Kahan Dekhte Hain?',
          bodyEn:
            'From **e-commerce** recommendations and **banking** fraud alerts to **hospital** triage and **OTT** streaming suggestions, **Data Science** powers the apps you use every single day.',
          bodyHi:
            '**E-commerce** shopping se lekar **banking** UPI fraud alerts, **hospitals** aur **OTT** video recommendations tak — har jagah **Data Science** kaam kar raha hai.',
        },
        sections: [
          {
            pill: 'Real-Life Examples Across Major Industries',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'E-commerce',
                    bodyEn:
                      'Identifies which **product** is selling the most, estimates **delivery ETA**, and keeps warehouse stock ready.',
                    bodyHi:
                      'Kaun sa **product** zyada bik raha hai, **delivery ETA** kya hoga, aur warehouse mein stock kab bharna hai yeh batata hai.',
                    tone: 'pink',
                  },
                  {
                    title: 'Banking',
                    bodyEn:
                      'Checks which customer has a high **loan risk** and flags unusual **UPI / card transactions** in milliseconds.',
                    bodyHi:
                      'Kis customer ka **loan risk** high hai aur kaun sa **UPI / card transaction** suspicious hai, turant detect karta hai.',
                    tone: 'amber',
                  },
                  {
                    title: 'Healthcare & Hospitals',
                    bodyEn:
                      'Forecasts **patient rush hours**, tracks essential **medicine stock**, and spots early clinical risk patterns.',
                    bodyHi:
                      '**Patient rush hours** predict karne, **medicines ka stock** manage karne aur early health risks samajhne mein madad karta hai.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Formula & Python Code Explanation (Input → Output)',
            blocks: [
              {
                type: 'sql',
                label: 'PYTHON & FORMULA NOTEBOOK — STUDENT RENEWAL RATE',
                code: `# Formula: Renewal Rate (%) = (Renewed Students / Total Students) * 100
days_active = [22, 18, 3, 2, 15, 4]
renewed = [1, 1, 0, 0, 1, 0]  # 1 = Yes, 0 = No

avg_days = sum(days_active) / len(days_active)
renewal_rate = (sum(renewed) / len(renewed)) * 100

print(f"Average Active Days: {avg_days:.1f} days")
print(f"Subscription Renewal Rate: {renewal_rate:.1f}%")`,
                output: `Average Active Days: 10.7 days
Subscription Renewal Rate: 50.0%`,
                captionEn:
                  '**Code & Formula Walkthrough**: We take 6 students from our sample dataset (**Input**), compute the **Mean (Average)** active days and **Renewal Percentage** using Python, and print the verified **Output** (`10.7 days` and `50.0%`).',
                captionHi:
                  '**Code & Formula Walkthrough**: Humne sample dataset ke 6 students ka **Input** liya, Python se **Average Active Days** aur **Renewal Rate (%)** calculate kiya, aur exact **Output** (`10.7 days` aur `50.0%`) paya.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 1',
        pageTag: 'PAGE 5 OF 5',
        footerPage: '5 / 5',
        title: 'Common Mistakes & Best Practices',
        subtitle: 'How To Think Like a Real Data Scientist',
        intro: {
          icon: 'database',
          titleEn: 'Avoid Beginner Traps from Day 1',
          titleHi: 'Day 1 Se Beginner Mistakes Se Bachein',
          bodyEn:
            'Great **Data Scientists** never jump blindly into complex algorithms before understanding the **business question** and checking **data quality**.',
          bodyHi:
            'Ek accha **Data Scientist** kabhi bhi **business question** samjhe bina aur **data quality** check kiye bina seedha complex algorithm par jump nahi karta.',
        },
        sections: [
          {
            pill: 'Common Beginner Mistakes vs Pro Best Practices',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Common Beginner Mistakes',
                    bodyEn:
                      'Skipping **data cleaning**, ignoring missing values, or using a complex **Machine Learning** model when a simple table or chart answers the question.',
                    bodyHi:
                      '**Data cleaning** skip karna, missing values ignore karna, ya jahan simple chart kaafi ho wahan zabardasti heavy **Machine Learning** lagana.',
                    tone: 'pink',
                  },
                  {
                    title: 'Pro Best Practices',
                    bodyEn:
                      'Always start with a clear **question**, inspect and **clean raw data** first, verify results on unseen data, and explain **insights** in simple business language.',
                    bodyHi:
                      'Hamesha clear **question** se shuru karein, pehle **raw data clean** karein, results verify karein, aur **insights** ko simple bhasha mein samjhayein.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Key Takeaways From This Lesson',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Data Science** combines **Math & Statistics**, **Computing Tools (Python, SQL, Excel)**, and **Domain Knowledge** to solve real problems.',
                    hi: '**Data Science** mein **Math & Statistics**, **Computing Tools (Python, SQL, Excel)**, aur **Domain Knowledge** milkar real problems solve karte hain.',
                  },
                  {
                    en: 'The 5 core stages are **Raw Data** → **Data Cleaning** → **Analysis** → **Insights** → **Better Decisions**.',
                    hi: 'Iske 5 core steps hain: **Raw Data** → **Data Cleaning** → **Analysis** → **Insights** → **Better Decisions**.',
                  },
                  {
                    en: 'Always distinguish **human-written Rule-Based Logic** from **Machine Learning models** that learn patterns from historical data.',
                    hi: 'Hamesha **human-written Rule-Based Logic** aur **Machine Learning models** ke beech ka fark yaad rakhein.',
                  },
                  {
                    en: 'Clean data and clear questions matter more than complicated formulas.',
                    hi: 'Complicated formulas se zyada **clean data** aur **sahi sawaal** zaroori hote hain.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 2: How Data Science Works in Real Life
  // --------------------------------------------------------------------------
  2: {
    module: 'DS-M01',
    moduleTitle: 'Introduction to Data Science',
    topic: 'How Data Science Works in Real Life',
    pageCount: 4,
    sampleDataNotice:
      'The food-delivery arrival times, traffic conditions, and order logs below are illustrative sample datasets created to explain how real-world Data Science systems operate.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 2',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'How Data Science Works in Real Life',
        subtitle: 'BEHIND THE SCENES OF EVERYDAY APPS AND SERVICES',
        intro: {
          icon: 'database',
          titleEn: 'From Your Phone Screen to a Data Pipeline',
          titleHi: 'Aapke Phone Screen Se Data Pipeline Tak Ka Safar',
          bodyEn:
            'When a food delivery app tells you *"Your order will arrive in 32 minutes,"* it is not guessing randomly. Behind that single number is a **step-by-step real-life Data Science system** collecting live signals, comparing them with past deliveries, and updating the estimate as conditions change.',
          bodyHi:
            'Jab koi food delivery app aapko batata hai *"Aapka order 32 minutes mein aayega,"* toh wo andaaza nahi laga raha hota. Us ek number ke peeche ek **step-by-step real-life Data Science system** kaam kar raha hota hai jo live signals collect karta hai, purani deliveries se compare karta hai, aur situation badalne par time update karta hai.',
        },
        sections: [
          {
            pill: 'Real-Life Walkthrough: Estimating Food Delivery Time',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: '1. Capture Signals',
                    bodyEn: 'Record restaurant prep load, distance, weather, and time of day.',
                    bodyHi: 'Restaurant ka load, distance, mausam aur din ka samay record hota hai.',
                    tone: 'sky',
                  },
                  {
                    title: '2. Clean & Combine',
                    bodyEn: 'Remove broken GPS pings and join order data with traffic data.',
                    bodyHi: 'Galat GPS readings hatakar order data ko traffic data ke saath joda jaata hai.',
                    tone: 'amber',
                  },
                  {
                    title: '3. Compare History',
                    bodyEn: 'Check how long similar orders took on rainy Friday evenings.',
                    bodyHi: 'Dekha jaata hai ki pichle rainy Friday evenings mein aise orders mein kitna time laga.',
                    tone: 'lavender',
                  },
                  {
                    title: '4. Estimate ETA',
                    bodyEn: 'Output a predicted delivery window (e.g., 30–35 minutes).',
                    bodyHi: 'Ek predicted delivery window (jaise 30–35 minutes) calculate karke dikhaya jaata hai.',
                    tone: 'green',
                  },
                  {
                    title: '5. Check & Improve',
                    bodyEn: 'Compare predicted ETA with actual arrival time to improve tomorrow.',
                    bodyHi: 'Predicted time ko actual arrival time se compare karke system ko roz behtar banaya jaata hai.',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 2',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Seeing the Sample Data Behind an ETA',
        subtitle: 'HOW MULTIPLE CLUES WORK TOGETHER',
        sections: [
          {
            pill: 'Illustrative Sample Dataset: Past Restaurant Deliveries',
            blocks: [
              {
                type: 'table',
                headers: ['Order_ID', 'Distance_KM', 'Rain', 'Kitchen_Queue', 'Actual_Minutes'],
                rows: [
                  ['ORD-201', '3.0', 'No', 'Low (3 orders)', '22'],
                  ['ORD-202', '3.0', 'Yes', 'Low (3 orders)', '31'],
                  ['ORD-203', '3.0', 'No', 'High (18 orders)', '38'],
                  ['ORD-204', '6.0', 'Yes', 'High (20 orders)', '54'],
                ],
                noteEn:
                  'Sample Dataset: Notice that ORD-201, ORD-202, and ORD-203 are all 3.0 km away, yet actual delivery time changes from 22 to 38 minutes because of Rain and Kitchen_Queue!',
                noteHi:
                  'Sample Dataset: Dhyan dijiye ORD-201, ORD-202 aur ORD-203 teeno ki distance 3.0 km hai, phir bhi delivery time 22 se 38 minutes tak badal gaya — kyunki Rain aur Kitchen_Queue dono asar daalte hain!',
              },
            ],
          },
          {
            pill: 'Why Simple Distance Alone Fails',
            blocks: [
              {
                type: 'note',
                tone: 'sky',
                bodyEn:
                  'If an app only used distance (e.g., *"5 minutes per kilometer"*), it would promise 15 minutes for a 3 km order even during a heavy downpour when the kitchen has 18 pending orders. **Real-life Data Science** succeeds because it combines **multiple relevant signals** instead of relying on one oversimplified guess.',
                bodyHi:
                  'Agar koi app sirf distance dekhe (jaise *"har kilometer ke liye 5 minute"*), toh wo 3 km ke order ke liye tez baarish aur 18 pending orders hone par bhi 15 minute dikha dega. **Real-life Data Science** isliye kaam karta hai kyunki wo ek simple guess ke bajay **multiple relevant signals** ko ek saath dekhta hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 2',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'Humans and Systems Work Together',
        subtitle: 'DATA SCIENCE IS A TEAM SPORT, NOT A SOLO MAGIC TRICK',
        sections: [
          {
            pill: 'Who Keeps a Real-Life Data Science System Running?',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Business & Operations Team',
                    bodyEn:
                      'Defines what matters most — for example, avoiding late deliveries that upset hungry customers.',
                    bodyHi:
                      'Tay karti hai ki sabse zaroori goal kya hai — jaise late deliveries kam karna taaki customers khush rahein.',
                    tone: 'amber',
                  },
                  {
                    title: 'Data Engineers',
                    bodyEn:
                      'Build reliable pipelines so order logs, GPS pings, and weather feeds arrive cleanly on time.',
                    bodyHi:
                      'Reliable pipelines banate hain taaki order logs, GPS data aur weather updates sahi samay par clean hokar aayein.',
                    tone: 'sky',
                  },
                  {
                    title: 'Data Scientists',
                    bodyEn:
                      'Analyze patterns, test ideas, build and evaluate models, and monitor prediction error after launch.',
                    bodyHi:
                      'Patterns analyze karte hain, models banakar evaluate karte hain, aur launch ke baad prediction errors ko monitor karte hain.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 2',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Why Continuous Monitoring Matters in Real Life',
        subtitle: 'THE WORLD CHANGES — SO DATA SYSTEMS MUST ADAPT',
        sections: [
          {
            pill: 'What Happens If You Build Once and Never Check Again?',
            blocks: [
              {
                type: 'note',
                tone: 'pink',
                bodyEn:
                  'Suppose a city opens a new flyover or a major festival starts. Travel times suddenly change! If a predictive model is never **evaluated** and **monitored** after launch, its estimates quietly become inaccurate. Real-life Data Science is a continuous feedback loop: **measure error → investigate why → update data or model**.',
                bodyHi:
                  'Maan lijiye shehar mein ek naya flyover khul gaya ya koi bada festival shuru ho gaya. Travel time achanak badal jaata hai! Agar model ko launch ke baad **evaluate** aur **monitor** na kiya jaaye, toh uske estimates galat hone lagte hain. Real-life Data Science ek continuous loop hai: **error measure karo → wajah samjho → data ya model update karo**.',
              },
            ],
          },
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Real-world Data Science combines **live operational signals** with **historical patterns** to make practical estimates.',
                    hi: 'Real-world Data Science **live signals** aur **historical patterns** ko mila kar practical estimates banata hai.',
                  },
                  {
                    en: 'One single variable (like distance alone) rarely tells the full story; combining multiple factors improves accuracy.',
                    hi: 'Sirf ek variable (jaise sirf distance) poori kahani nahi batata; multiple factors ko saath dekhne se accuracy badhti hai.',
                  },
                  {
                    en: 'Launching a model is not the finish line — **evaluation and ongoing monitoring** keep it reliable as real life changes.',
                    hi: 'Model launch karna aakhiri step nahi hai — **evaluation aur ongoing monitoring** usse badalte samay mein bhi reliable rakhte hain.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 3: Why Businesses Use Data Science
  // --------------------------------------------------------------------------
  3: {
    module: 'DS-M01',
    moduleTitle: 'Introduction to Data Science',
    topic: 'Why Businesses Use Data Science',
    pageCount: 3,
    sampleDataNotice:
      'All retail inventory, customer retention, and clinic scheduling examples are illustrative learning scenarios.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 3',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Why Businesses Use Data Science',
        subtitle: 'SOLVING REAL BUSINESS CHALLENGES WITH EVIDENCE',
        intro: {
          icon: 'table',
          titleEn: 'Why Do Companies Invest in Data Teams?',
          titleHi: 'Companies Data Teams Par Invest Kyun Karti Hain?',
          bodyEn:
            'Every business — from a local pharmacy chain to a global bank — faces daily choices with real money and customer trust at stake. Businesses use **Data Science** to **reduce costly waste**, **understand customer needs**, **manage risk**, and **plan ahead with confidence**.',
          bodyHi:
            'Har business — chahe local pharmacy chain ho ya bada bank — roz aise faisle leta hai jahan paisa aur customer trust dono daav par hote hain. Businesses **Data Science** ka use karte hain taaki wo **waste kam karein**, **customers ko behtar samjhein**, **risk manage karein**, aur **confidence ke saath planning karein**.',
        },
        sections: [
          {
            pill: 'The 4 Main Business Goals Supported by Data Science',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: '1. Grow Revenue Smartly',
                    bodyEn:
                      'Find which products customers buy together, set fair prices, and recommend items people genuinely need.',
                    bodyHi:
                      'Pata lagana ki customers kaun se products saath kharidte hain, sahi pricing rakhna aur relevant items recommend karna.',
                    tone: 'green',
                  },
                  {
                    title: '2. Reduce Waste & Cost',
                    bodyEn:
                      'Forecast stock demand so perishable groceries do not spoil and popular items do not run out.',
                    bodyHi:
                      'Demand forecast karke over-stocking aur spoilage rokna, aur popular items ko out-of-stock hone se bachana.',
                    tone: 'sky',
                  },
                  {
                    title: '3. Manage Risk & Fraud',
                    bodyEn:
                      'Spot suspicious banking transactions, unpaid invoice risks, or equipment likely to break down.',
                    bodyHi:
                      'Suspicious bank transactions, loan default risks ya kharab hone wali machines ko samay se pehle pehchanna.',
                    tone: 'amber',
                  },
                  {
                    title: '4. Improve Customer Experience',
                    bodyEn:
                      'Shorten wait times in hospitals, personalize support, and detect why users stop using a service.',
                    bodyHi:
                      'Hospitals mein wait time kam karna, support behtar banana aur samajhna ki users service kyun chhod rahe hain.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 3',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Concrete Business Impact: A Bakery Chain Example',
        subtitle: 'SEEING HOW NUMBERS GUIDE DAILY OPERATIONS',
        sections: [
          {
            pill: 'Illustrative Sample Dataset: Weekly Bread Demand at One Store',
            blocks: [
              {
                type: 'table',
                headers: ['Day', 'Loaves_Baked', 'Loaves_Sold', 'Unsold_Waste', 'Missed_Demand'],
                rows: [
                  ['Monday', '100', '78', '22', '0'],
                  ['Wednesday', '100', '82', '18', '0'],
                  ['Saturday', '100', '100', '0', '35 (Sold out by 11 AM)'],
                  ['Sunday', '100', '100', '0', '45 (Sold out by 10 AM)'],
                ],
                noteEn:
                  'Sample Dataset: Baking a flat 100 loaves every day causes 40 wasted loaves on Mon/Wed and 80 missed sales on Sat/Sun! Adjusting production by day of week solves both problems.',
                noteHi:
                  'Sample Dataset: Roz barabar 100 loaves banane se Mon/Wed ko 40 loaves waste ho rahi hain aur Sat/Sun ko 80 customers khaali haath laut rahe hain! Day-of-week ke hisaab se baking adjust karne se dono problems solve hoti hain.',
              },
            ],
          },
          {
            pill: 'What Happens When Businesses Ignore Their Data?',
            blocks: [
              {
                type: 'note',
                tone: 'pink',
                bodyEn:
                  'Without analyzing sales records, a manager might think *"Our average daily sales are 90 loaves, so baking 100 every day looks fine!"* That single average hides both weekday waste and weekend shortages. **Data Science** looks beneath misleading averages to uncover the true operational pattern.',
                bodyHi:
                  'Agar manager bina analysis ke sirf overall average dekhe (*"Roz average 90 loaves bikti hain, toh 100 banana theek hai"*), toh weekday ka nuksaan aur weekend ki kami dono chhup jaati hain. **Data Science** aise misleading averages ke andar chhupe asli pattern ko samne laata hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 3',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'From Data Insight to Business Action',
        subtitle: 'DATA ONLY CREATES VALUE WHEN SOMEONE ACTS ON IT',
        sections: [
          {
            pill: 'The Business Value Chain',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: 'Business Pain',
                    bodyEn: 'Spot high waste, falling sales, or slow customer support.',
                    bodyHi: 'High waste, girti sales ya slow customer support ko pehchanna.',
                    tone: 'pink',
                  },
                  {
                    title: 'Data Analysis',
                    bodyEn: 'Measure patterns across days, regions, or customer groups.',
                    bodyHi: 'Days, regions ya customer groups ke hisaab se patterns measure karna.',
                    tone: 'sky',
                  },
                  {
                    title: 'Clear Action',
                    bodyEn: 'Change baking schedule, restock policy, or support staffing.',
                    bodyHi: 'Baking schedule, restock plan ya support staffing mein badlaav karna.',
                    tone: 'lavender',
                  },
                  {
                    title: 'Measured Result',
                    bodyEn: 'Track whether waste actually dropped and sales improved.',
                    bodyHi: 'Track karna ki kya sach mein waste kam hua aur sales badhi.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Businesses use Data Science to **increase revenue**, **cut waste**, **reduce risk**, and **serve customers better**.',
                    hi: 'Businesses Data Science ka use **revenue badhane**, **waste kam karne**, **risk ghatane**, aur **customer experience sudharne** ke liye karte hain.',
                  },
                  {
                    en: 'Overall averages can hide important day-by-day or group-by-group differences.',
                    hi: 'Overall averages aksar zaroori day-by-day ya group-by-group differences ko chhupa dete hain.',
                  },
                  {
                    en: 'An analysis creates business value only when it leads to a **concrete decision** whose result is measured afterward.',
                    hi: 'Analysis tabhi business value deta hai jab usse koi **concrete decision** liya jaaye aur uska result measure kiya jaaye.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 4: Data vs Information vs Insights
  // --------------------------------------------------------------------------
  4: {
    module: 'DS-M01',
    moduleTitle: 'Introduction to Data Science',
    topic: 'Data vs Information vs Insights',
    pageCount: 3,
    sampleDataNotice:
      'All temperature readings, hospital clinic visits, and online shoe store return numbers are illustrative sample datasets.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 4',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Data vs Information vs Insights',
        subtitle: 'THE THREE LEVELS OF UNDERSTANDING IN DATA SCIENCE',
        intro: {
          icon: 'database',
          titleEn: 'Why Raw Numbers Alone Are Not Enough',
          titleHi: 'Sirf Raw Numbers Kaafi Kyun Nahi Hote?',
          bodyEn:
            'People often use the words **Data**, **Information**, and **Insights** as if they mean the same thing. In Data Science, they are three distinct stages — like **raw vegetables**, a **cooked meal**, and **knowing which nutrition helps your body stay healthy**.',
          bodyHi:
            'Log aksar **Data**, **Information**, aur **Insights** ko ek hi cheez samajh lete hain. Data Science mein yeh teen alag stages hain — bilkul **kacchi sabzi**, **paka hua khana**, aur **yeh samajhna ki kaun sa nutrition aapki health ke liye best hai** ki tarah.',
        },
        sections: [
          {
            pill: 'The 3-Stage Transformation Ladder',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: '1. Data (Raw Facts)',
                    bodyEn: 'Unorganized numbers, dates, names, or clicks with no context yet.',
                    bodyHi: 'Bina context ke raw numbers, dates, names ya clicks.',
                    tone: 'sky',
                  },
                  {
                    title: '2. Information (Organized)',
                    bodyEn: 'Data cleaned, grouped, and summarized so we can see *what* happened.',
                    bodyHi: 'Data ko clean aur summarize kiya jaata hai taaki dikhe ki *kya* hua.',
                    tone: 'amber',
                  },
                  {
                    title: '3. Insight (Actionable Why)',
                    bodyEn: 'Deep understanding of *why* it happened and *what action* to take next.',
                    bodyHi: 'Yeh samajhna ki aisa *kyun* hua aur ab *kaun sa action* lena chahiye.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 4',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Everyday Examples Side by Side',
        subtitle: 'SEEING THE EXACT DIFFERENCE IN 3 REAL SCENARIOS',
        sections: [
          {
            pill: 'Comparing Data, Information, and Insights',
            blocks: [
              {
                type: 'table',
                headers: ['Scenario', 'Raw Data', 'Information (What)', 'Insight (Why + Action)'],
                rows: [
                  [
                    'Health Check',
                    '39.2, 38.9, 39.4',
                    'Patient body temperature stayed near 39°C for 24 hours.',
                    'Persistent high fever needs immediate doctor evaluation, not just rest.',
                  ],
                  [
                    'Online Shoe Store',
                    'Order #441: Returned, Size 9; Order #448: Returned, Size 9',
                    'Brand-X Size 9 running shoes have 18 returns out of 40 orders (45% return rate).',
                    'Customer reviews say Brand-X runs small; update the size chart to advise ordering one size up.',
                  ],
                  [
                    'School Attendance',
                    'Mon: Absent, Tue: Present, Fri: Absent',
                    'Bus Route 4 students were late or absent on 12 rainy mornings this term.',
                    'Route 4 floods near the main bridge; rerouting the bus during rain improves attendance.',
                  ],
                ],
                noteEn:
                  'Sample Scenarios: Notice how Information tells you a summary number (18 out of 40 = 45%), while Insight explains the root cause and points directly to a practical fix.',
                noteHi:
                  'Sample Scenarios: Dhyan dijiye Information sirf summary batati hai (40 mein se 18 = 45% returns), jabki Insight asli wajah samjhati hai aur seedha practical solution dikhati hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 4',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'How to Test Whether You Found a True Insight',
        subtitle: 'AVOIDING "SO WHAT?" REPORTS',
        sections: [
          {
            pill: 'The 3-Point Insight Check',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Is It Accurate?',
                    bodyEn: 'Backed by clean, verified data rather than guesswork or cherry-picked rows.',
                    bodyHi: 'Clean aur verified data par based ho, sirf andaaze ya chune hue rows par nahi.',
                    tone: 'sky',
                  },
                  {
                    title: 'Does It Explain "Why"?',
                    bodyEn: 'Goes beyond repeating a chart number to uncover a meaningful cause or pattern.',
                    bodyHi: 'Sirf chart ka number dohrane ke bajay uske peeche ka kaaran ya pattern samjhaye.',
                    tone: 'lavender',
                  },
                  {
                    title: 'Is It Actionable?',
                    bodyEn: 'Clearly suggests a decision someone in the business can take right now.',
                    bodyHi: 'Saaf bataye ki business team ab kaun sa practical step le sakti hai.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'amber',
                items: [
                  {
                    en: '**Data** = raw, unprocessed facts; **Information** = organized summaries; **Insight** = understanding that drives action.',
                    hi: '**Data** = raw facts; **Information** = organized summary; **Insight** = aisi samajh jo sahi action karwaye.',
                  },
                  {
                    en: 'A dashboard full of numbers gives **Information**, but a Data Scientist adds value by turning it into **Insights**.',
                    hi: 'Numbers se bhara dashboard **Information** deta hai, lekin Data Scientist usse **Insight** mein badal kar asli value banata hai.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 5: Data Science vs Data Analytics
  // --------------------------------------------------------------------------
  5: {
    module: 'DS-M01',
    moduleTitle: 'Introduction to Data Science',
    topic: 'Data Science vs Data Analytics',
    pageCount: 3,
    sampleDataNotice:
      'Role comparisons and retail store scenarios are illustrative industry examples designed for beginners.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 5',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Data Science vs Data Analytics',
        subtitle: 'CLOSE PARTNERS WITH DIFFERENT PRIMARY FOCUS',
        intro: {
          icon: 'table',
          titleEn: 'Two Overlapping Fields — Not Opposites',
          titleHi: 'Do Overlapping Fields — Dushman Nahi, Partners!',
          bodyEn:
            'Beginners often hear a misleading shortcut: *"Data Analytics is only about the past, and Data Science is only about the future."* In reality, **both fields overlap heavily**! Data Analysts also build forecasts and run experiments, while Data Scientists also explore historical data. The real difference is their **primary scope, depth of modeling, and typical deliverables**.',
          bodyHi:
            'Beginners aksar ek adhoora shortcut sunte hain: *"Data Analytics sirf past dekhta hai aur Data Science sirf future."* Sach yeh hai ki **dono fields kaafi overlap karte hain**! Data Analysts bhi forecasting aur experiments karte hain, aur Data Scientists bhi historical data explore karte hain. Asli antar unke **primary focus, modeling depth aur deliverables** mein hota hai.',
        },
        sections: [
          {
            pill: 'Side-by-Side Comparison',
            blocks: [
              {
                type: 'table',
                headers: ['Dimension', 'Data Analytics', 'Data Science'],
                rows: [
                  [
                    'Primary Focus',
                    'Answering clear business questions, tracking KPIs, diagnosing trends, and supporting decisions.',
                    'Framing open-ended problems, building statistical & ML models, and creating scalable data products.',
                  ],
                  [
                    'Time Horizon',
                    'Past performance, live monitoring, and short-term trend forecasting.',
                    'Historical pattern discovery, experimentation, predictive modeling, and automated decision systems.',
                  ],
                  [
                    'Common Tools',
                    'SQL, Excel, Power BI / Tableau, basic Python or R, statistics.',
                    'Python, SQL, statistics, Machine Learning libraries, experimentation, and model deployment tools.',
                  ],
                  [
                    'Typical Output',
                    'Interactive dashboards, metric reports, root-cause findings, business recommendations.',
                    'Predictive models, recommendation engines, risk scores, experiment designs, and analytical studies.',
                  ],
                ],
                noteEn:
                  'Notice the overlap: SQL, data cleaning, statistics, storytelling, and business understanding are core skills in BOTH careers!',
                noteHi:
                  'Overlap par dhyan dijiye: SQL, data cleaning, statistics, storytelling aur business understanding DONO careers ke core skills hain!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 5',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'How Both Roles Collaborate on the Same Problem',
        subtitle: 'EXAMPLE: AN ONLINE GROCERY APP LOSING REPEAT CUSTOMERS',
        sections: [
          {
            pill: 'Teamwork in Action',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'What the Data Analyst Leads',
                    bodyEn:
                      'Measures monthly repeat-order rates by city, builds a retention dashboard, and discovers that repeat orders dropped sharpest in zones with late evening deliveries.',
                    bodyHi:
                      'City-wise repeat-order rates measure karta hai, retention dashboard banata hai, aur pata lagata hai ki late evening delivery wale zones mein repeat orders sabse zyada gire.',
                    tone: 'sky',
                  },
                  {
                    title: 'What the Data Scientist Leads',
                    bodyEn:
                      'Builds and evaluates a customer churn-risk model using order frequency, delivery delays, and support chats, then designs a controlled test to see which retention offer works best.',
                    bodyHi:
                      'Order frequency, delivery delays aur support chats ko use karke churn-risk model banata aur evaluate karta hai, phir controlled test se dekhta hai ki kaun sa retention offer sabse effective hai.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 5',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Where Their Skills Overlap',
        subtitle: 'BUILDING STRONG FOUNDATIONS SERVES BOTH PATHS',
        sections: [
          {
            pill: 'Shared Foundation Skills',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Data Analytics is NOT limited to historical data**: modern analysts also forecast trends, run A/B tests, and guide upcoming strategy.',
                    hi: '**Data Analytics sirf historical data tak seemit nahi hai**: modern analysts bhi trend forecasting, A/B testing aur planning karte hain.',
                  },
                  {
                    en: '**Data Science is NOT only modeling**: Data Scientists spend significant time understanding business problems, cleaning messy tables, and explaining findings.',
                    hi: '**Data Science sirf modeling nahi hai**: Data Scientists apna bada samay business problem samajhne, messy data clean karne aur findings explain karne mein lagate hain.',
                  },
                  {
                    en: 'In smaller companies, one person often wears both hats; in larger companies, Data Analysts and Data Scientists partner closely every day.',
                    hi: 'Chhoti companies mein ek hi insaan dono roles sambhalta hai; badi companies mein Data Analysts aur Data Scientists roz milkar kaam karte hain.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 6: Data Science vs Machine Learning vs AI
  // --------------------------------------------------------------------------
  6: {
    module: 'DS-M01',
    moduleTitle: 'Introduction to Data Science',
    topic: 'Data Science vs Machine Learning vs AI',
    pageCount: 3,
    sampleDataNotice:
      'All spam filter, chess program, and voice assistant examples are illustrative educational explanations.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 6',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Data Science vs Machine Learning vs AI',
        subtitle: 'CLEARING UP THE THREE MOST CONFUSED TECH BUZZWORDS',
        intro: {
          icon: 'database',
          titleEn: 'How These Three Circles Relate to Each Other',
          titleHi: 'Yeh Teeno Terms Aapas Mein Kaise Jude Hain?',
          bodyEn:
            '**Artificial Intelligence (AI)**, **Machine Learning (ML)**, and **Data Science** are closely connected, yet each has its own clear meaning. Think of **AI** as the broad goal of making computers perform smart tasks, **Machine Learning** as a major method inside AI that learns from data, and **Data Science** as the full discipline of extracting insights and value from data (sometimes using ML, and sometimes using pure statistics and analysis).',
          bodyHi:
            '**Artificial Intelligence (AI)**, **Machine Learning (ML)**, aur **Data Science** aapas mein jude hain, lekin teeno ka apna alag matlab hai. **AI** bada goal hai jisme computers smart tasks karte hain, **Machine Learning** AI ke andar ka ek main tareeka hai jo data se seekhta hai, aur **Data Science** poora discipline hai jo data se insights aur value nikalta hai (kabhi ML use karke, aur kabhi sirf statistics aur analysis se).',
        },
        sections: [
          {
            pill: 'Clear Definitions in Simple Language',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Artificial Intelligence (AI)',
                    bodyEn:
                      'Any computer system designed to perform tasks that normally need human intelligence — such as understanding speech, playing chess, or routing packages. AI can use **fixed rules** OR **Machine Learning**.',
                    bodyHi:
                      'Koi bhi computer system jo aise kaam kare jisme aam taur par human intelligence lagti hai — jaise awaaz samajhna ya chess khelna. AI **fixed rules** se bhi ban sakta hai aur **Machine Learning** se bhi.',
                    tone: 'lavender',
                  },
                  {
                    title: 'Machine Learning (ML)',
                    bodyEn:
                      'A subset of AI where algorithms **learn patterns directly from data** instead of following hand-coded rules. Example: an email spam filter that learns from millions of spam vs safe emails.',
                    bodyHi:
                      'AI ka wo hissa jahan algorithms hand-coded rules ke bajay **seedhe data se patterns seekhte hain**. Example: email spam filter jo laakhon spam aur safe emails se seekhta hai.',
                    tone: 'sky',
                  },
                  {
                    title: 'Data Science (DS)',
                    bodyEn:
                      'The end-to-end field of collecting, cleaning, analyzing, visualizing, and modeling data to solve real problems. It **overlaps** with ML and AI, but also includes statistics, SQL, experiments, and business storytelling.',
                    bodyHi:
                      'Data collect karne, clean karne, analyze karne, visualize karne aur model banane ka poora field. Yeh ML aur AI ke saath **overlap** karta hai, lekin isme statistics, SQL, experiments aur business storytelling bhi shaamil hain.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 6',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'One Everyday Example: Your Email Inbox',
        subtitle: 'SEEING AI, ML, AND DATA SCIENCE WORKING SIDE BY SIDE',
        sections: [
          {
            pill: 'How Each Field Appears in One Email App',
            blocks: [
              {
                type: 'table',
                headers: ['Task in Email App', 'Which Field?', 'Why?'],
                rows: [
                  [
                    'Blocking any email that contains the exact word "FREE_PRIZE_NOW"',
                    'Rule-Based Logic (Basic AI rule)',
                    'A human wrote a fixed IF-THEN rule — no learning from data occurred.',
                  ],
                  [
                    'Automatically detecting new spam tricks based on sender history and wording',
                    'Machine Learning (inside AI)',
                    'The model learned statistical patterns from labeled spam and safe emails.',
                  ],
                  [
                    'Studying why spam spikes on weekends and measuring how many safe emails were wrongly blocked',
                    'Data Science',
                    'Combines data analysis, error measurement, and product decision-making.',
                  ],
                ],
                noteEn:
                  'Notice the clear boundary: Rule-based filters are NOT Machine Learning, and Data Science includes both building ML models AND evaluating their real-world impact.',
                noteHi:
                  'Clear antar dekhiye: Rule-based filter Machine Learning NAHI hai, aur Data Science mein ML model banana aur uska real-world impact evaluate karna dono shaamil hain.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 6',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Common Myths to Avoid',
        subtitle: 'KEEP YOUR MENTAL MODEL SHARP AND ACCURATE',
        sections: [
          {
            pill: 'Myth vs Reality',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Myth: All AI Uses Machine Learning',
                    bodyEn:
                      '**Reality:** Classic rule-based systems (like a fixed decision tree for routing support calls) are part of AI even without Machine Learning.',
                    bodyHi:
                      '**Reality:** Classic rule-based systems (jaise support calls route karne ka fixed decision tree) bina Machine Learning ke bhi AI ka hissa ho sakte hain.',
                    tone: 'amber',
                  },
                  {
                    title: 'Myth: Data Science Is Just a Subset of AI',
                    bodyEn:
                      '**Reality:** Data Science overlaps with AI/ML, but many Data Science projects (like survey analysis, A/B testing, or data quality audits) do not build AI systems at all.',
                    bodyHi:
                      '**Reality:** Data Science AI/ML se overlap karta hai, lekin kayi Data Science projects (jaise survey analysis, A/B testing ya data quality audits) mein AI system banana zaroori nahi hota.',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**AI** = broad goal of smart computer behavior (rules or learning).',
                    hi: '**AI** = smart computer behavior ka bada goal (rules ya learning dono se).',
                  },
                  {
                    en: '**Machine Learning** = subset of AI where systems learn patterns from data.',
                    hi: '**Machine Learning** = AI ka wo hissa jahan systems data se patterns seekhte hain.',
                  },
                  {
                    en: '**Data Science** = full process of turning data into understanding, predictions, and decisions — overlapping with ML & AI without being limited to them.',
                    hi: '**Data Science** = data ko samajh, predictions aur decisions mein badalne ka poora process — jo ML & AI se overlap karta hai par sirf unhi tak seemit nahi hai.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 7: Real-World Data Science Applications
  // --------------------------------------------------------------------------
  7: {
    module: 'DS-M01',
    moduleTitle: 'Introduction to Data Science',
    topic: 'Real-World Data Science Applications',
    pageCount: 3,
    sampleDataNotice:
      'Industry applications below illustrate general, well-established real-world uses of Data Science without citing unverified company claims.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 7',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Real-World Data Science Applications',
        subtitle: 'HOW SIX MAJOR INDUSTRIES USE DATA EVERY SINGLE DAY',
        intro: {
          icon: 'database',
          titleEn: 'Data Science Is Not Just for Tech Giants',
          titleHi: 'Data Science Sirf Tech Companies Ke Liye Nahi Hai',
          bodyEn:
            'Whenever an organization records transactions, sensor readings, patient visits, or student progress, **Data Science** can help solve practical problems. Let us explore how six everyday industries turn their data into safer, faster, and smarter services.',
          bodyHi:
            'Jahan bhi koi organization transactions, sensor readings, patient visits ya student progress record karti hai, wahan **Data Science** practical problems solve kar sakta hai. Aaiye dekhte hain ki 6 rozmarra ki industries apne data ko kaise use karti hain.',
        },
        sections: [
          {
            pill: 'Industry Map: Data In → Decision Out',
            blocks: [
              {
                type: 'table',
                headers: ['Industry', 'Typical Data Used', 'Practical Problem Solved'],
                rows: [
                  [
                    'Retail & E-Commerce',
                    'Past purchases, basket items, seasonal sales, return reasons',
                    'Demand forecasting, stock planning, and relevant product recommendations.',
                  ],
                  [
                    'Banking & Finance',
                    'Transaction amounts, locations, merchant types, account history',
                    'Flagging suspicious transactions early and assessing credit repayment risk.',
                  ],
                  [
                    'Healthcare',
                    'Appointment logs, lab readings, medical images, patient history',
                    'Predicting clinic peak hours, assisting early screening, and managing hospital beds.',
                  ],
                  [
                    'Transport & Logistics',
                    'GPS routes, traffic history, fuel usage, package weights',
                    'Finding faster delivery routes, estimating arrival times, and planning fleet maintenance.',
                  ],
                  [
                    'Education',
                    'Attendance logs, quiz scores, lesson completion times',
                    'Identifying students who need extra help early before final exams.',
                  ],
                  [
                    'Agriculture & Energy',
                    'Weather forecasts, soil moisture sensors, electricity meter readings',
                    'Scheduling irrigation efficiently and balancing city power demand.',
                  ],
                ],
                noteEn:
                  'Notice the common pattern across every industry: specific raw data is connected directly to a concrete human or operational decision.',
                noteHi:
                  'Har industry mein ek hi common pattern hai: specific raw data ko seedha ek concrete human ya operational decision se joda jaata hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 7',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Two Deep-Dive Examples: Banking & Healthcare',
        subtitle: 'UNDERSTANDING INPUTS, OUTPUTS, AND HUMAN OVERSIGHT',
        sections: [
          {
            pill: 'How Banking Fraud Detection Works Conceptually',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: 'Card Swipe Happens',
                    bodyEn: 'System sees amount, time, city, and merchant category.',
                    bodyHi: 'System amount, samay, city aur merchant type dekhta hai.',
                    tone: 'sky',
                  },
                  {
                    title: 'Compare Normal Pattern',
                    bodyEn: 'Checks if this matches the customer’s usual spending habits.',
                    bodyHi: 'Check hota hai ki kya yeh customer ki normal spending habit se match karta hai.',
                    tone: 'amber',
                  },
                  {
                    title: 'Score Risk',
                    bodyEn: 'Assigns a risk score (low, medium, or high anomaly).',
                    bodyHi: 'Transaction ko risk score diya jaata hai (low, medium ya high anomaly).',
                    tone: 'lavender',
                  },
                  {
                    title: 'Verify With Customer',
                    bodyEn: 'Sends an OTP or quick SMS confirmation before approving.',
                    bodyHi: 'Approve karne se pehle customer ko OTP ya confirmation SMS bheja jaata hai.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Why Human Oversight Matters in Healthcare',
            blocks: [
              {
                type: 'note',
                tone: 'green',
                bodyEn:
                  'In hospitals, Data Science tools **assist** doctors rather than replacing them. For example, a model may highlight scans that look unusual so radiologists review urgent cases first — while the licensed doctor always makes the final medical diagnosis.',
                bodyHi:
                  'Hospitals mein Data Science tools doctors ko **assist** karte hain, unhe replace nahi karte. Jaise ek model unusual scans ko highlight kar sakta hai taaki doctor urgent cases pehle dekhe — lekin final medical diagnosis hamesha doctor hi karta hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 7',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Matching the Right Use Case to Your Career Interest',
        subtitle: 'YOUR NON-IT BACKGROUND CAN BE A SUPERPOWER',
        sections: [
          {
            pill: 'Why Domain Experience Helps Career Switchers',
            blocks: [
              {
                type: 'note',
                tone: 'lavender',
                bodyEn:
                  'If you come from commerce, teaching, biology, banking, operations, or retail, you already understand the **domain side** of Data Science! Knowing what matters in a store, classroom, or clinic helps you ask far better data questions than someone who only knows syntax.',
                bodyHi:
                  'Agar aap commerce, teaching, biology, banking, operations ya retail background se aate hain, toh aap Data Science ka **domain side** pehle se samajhte hain! Store, classroom ya clinic mein kya matter karta hai yeh jaanna aapko bahut behtar data questions poochne mein madad karta hai.',
              },
            ],
          },
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Data Science powers everyday decisions across **retail, banking, healthcare, logistics, education, and energy**.',
                    hi: 'Data Science **retail, banking, healthcare, logistics, education aur energy** mein roz ke decisions ko support karta hai.',
                  },
                  {
                    en: 'In high-stakes domains like healthcare and banking, Data Science systems work alongside **human review and safety checks**.',
                    hi: 'Healthcare aur banking jaise sensitive domains mein Data Science systems **human review aur safety checks** ke saath kaam karte hain.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 8: The Data Science Lifecycle
  // --------------------------------------------------------------------------
  8: {
    module: 'DS-M01',
    moduleTitle: 'Introduction to Data Science',
    topic: 'The Data Science Lifecycle',
    pageCount: 4,
    sampleDataNotice:
      'The telecom customer retention walkthrough is an illustrative sample lifecycle created for learning.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 8',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'The Data Science Lifecycle',
        subtitle: 'THE END-TO-END ROADMAP FROM BUSINESS PROBLEM TO LIVE MONITORING',
        intro: {
          icon: 'database',
          titleEn: 'Why Do We Need a Structured Lifecycle?',
          titleHi: 'Structured Lifecycle Ki Zaroorat Kyun Hoti Hai?',
          bodyEn:
            'Building a Data Science solution is like constructing a house: you never start painting walls before checking the land and laying the foundation. The **Data Science Lifecycle** is a repeatable, step-by-step roadmap — and importantly, it is **iterative (a loop)**, meaning teams often step back to improve data or refine goals when they learn something new.',
          bodyHi:
            'Data Science solution banana ghar banane jaisa hai: aap zameen check kiye aur foundation dale bina deewar paint nahi karte. **Data Science Lifecycle** ek repeatable step-by-step roadmap hai — aur yeh **iterative (ek loop)** hota hai, matlab nayi baat pata chalne par team peeche jaakar data ya goal ko aur behtar bana sakti hai.',
        },
        sections: [
          {
            pill: 'Phase 1 to Phase 4: Understanding, Data, and Exploration',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: '1. Business Understanding',
                    bodyEn: 'Define the problem, goal, and how success will be measured.',
                    bodyHi: 'Asli business problem, goal aur success metric clear karna.',
                    tone: 'sky',
                  },
                  {
                    title: '2. Data Collection',
                    bodyEn: 'Gather relevant tables, files, or APIs legally and responsibly.',
                    bodyHi: 'Zaroori tables, files ya APIs se legally aur responsibly data lena.',
                    tone: 'amber',
                  },
                  {
                    title: '3. Data Preparation',
                    bodyEn: 'Clean missing values, duplicates, wrong types, and invalid entries.',
                    bodyHi: 'Missing values, duplicates, galat types aur invalid entries clean karna.',
                    tone: 'lavender',
                  },
                  {
                    title: '4. Exploratory Analysis',
                    bodyEn: 'Use summaries and visuals to discover patterns, anomalies, and clues.',
                    bodyHi: 'Summaries aur charts se patterns, anomalies aur clues samajhna.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 8',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Phases 5 to 7: Modeling, Evaluation & Monitoring',
        subtitle: 'BUILDING, TESTING HONESTLY, AND KEEPING IT HEALTHY AFTER LAUNCH',
        sections: [
          {
            pill: 'Completing the Predictive Lifecycle',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: '5. Modeling / Analysis',
                    bodyEn: 'Build statistical summaries or train candidate ML models on training data.',
                    bodyHi: 'Statistical analysis karna ya training data par ML models train karna.',
                    tone: 'sky',
                  },
                  {
                    title: '6. Model Evaluation',
                    bodyEn: 'Test performance honestly on unseen validation/test data before launch.',
                    bodyHi: 'Launch se pehle unseen test data par model ki asli performance check karna.',
                    tone: 'amber',
                  },
                  {
                    title: '7. Deploy & Monitor',
                    bodyEn: 'Put the solution into use and monitor accuracy, drift, and business impact.',
                    bodyHi: 'Solution ko live karna aur uski accuracy, drift aur business impact monitor karna.',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Why Evaluation and Monitoring Can Never Be Skipped',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Without Honest Evaluation',
                    bodyEn:
                      'A model might memorize past examples (like memorizing answers to a practice sheet) and fail badly on brand-new real customers.',
                    bodyHi:
                      'Model purane examples rat sakta hai (jaise practice sheet ke answers rat lena) aur naye real customers par buri tarah fail ho sakta hai.',
                    tone: 'pink',
                  },
                  {
                    title: 'Without Post-Launch Monitoring',
                    bodyEn:
                      'Customer behavior, prices, and seasons change over time (**Data Drift**). Monitoring catches accuracy drops early so the team can retrain.',
                    bodyHi:
                      'Customer behavior, prices aur seasons time ke saath badalte hain (**Data Drift**). Monitoring jaldi pakad leti hai ki model kab weak pad raha hai.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 8',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'Mini Walkthrough: Reducing Mobile Plan Cancellations',
        subtitle: 'SEEING ALL 7 STAGES ON ONE ILLUSTRATIVE PROJECT',
        sections: [
          {
            pill: 'Lifecycle Applied Step by Step',
            blocks: [
              {
                type: 'table',
                headers: ['Stage', 'What the Team Actually Does'],
                rows: [
                  ['1. Business Understanding', 'Goal: Identify subscribers likely to cancel next month so support can reach out early.'],
                  ['2. Data Collection', 'Collect plan usage, billing history, and network complaint logs (with privacy safeguards).'],
                  ['3. Data Preparation', 'Fix blank city fields, remove duplicate complaint rows, and verify billing dates.'],
                  ['4. Exploratory Analysis', 'Discover that subscribers with repeated call-drop complaints cancel far more often.'],
                  ['5. Modeling', 'Train a predictive model to estimate each subscriber’s cancellation risk score.'],
                  ['6. Evaluation', 'Check on held-out past months how accurately the model spots true cancellations without too many false alarms.'],
                  ['7. Deploy & Monitor', 'Share weekly risk lists with support and track monthly prediction accuracy and retention results.'],
                ],
                noteEn:
                  'Notice how if Stage 4 reveals missing network tower data, the team loops back to Stage 2 before moving to Stage 5!',
                noteHi:
                  'Dhyan dijiye: agar Stage 4 mein pata chale ki network tower ka data missing hai, toh team Stage 5 par jaane se pehle Stage 2 par wapas jaati hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M01 | TOPIC 8',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Why the Lifecycle Is a Loop, Not a Straight Line',
        subtitle: 'KEY TAKEAWAYS FOR MODULE 1',
        sections: [
          {
            pill: 'What Happens When Teams Skip Early Stages?',
            blocks: [
              {
                type: 'note',
                tone: 'amber',
                bodyEn:
                  'Jumping straight to modeling without **Business Understanding** or **Data Preparation** is the fastest way to waste weeks of effort. Clean data and a crystal-clear goal matter more than picking the fanciest algorithm.',
                bodyHi:
                  'Bina **Business Understanding** aur **Data Preparation** ke seedha modeling par koodna samay barbaad karne ka sabse tez tareeka hai. Clean data aur clear goal kisi bhi fancy algorithm se zyada zaroori hote hain.',
              },
            ],
          },
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'The **Data Science Lifecycle** moves from Business Understanding → Data Collection → Preparation → Exploration → Modeling → **Evaluation** → **Deploy & Monitor**.',
                    hi: '**Data Science Lifecycle** chalta hai Business Understanding → Data Collection → Preparation → Exploration → Modeling → **Evaluation** → **Deploy & Monitor** tak.',
                  },
                  {
                    en: 'It is **iterative**: findings in exploration or evaluation regularly guide you back to refine data or problem framing.',
                    hi: 'Yeh **iterative** hai: exploration ya evaluation mein mili nayi jaankari aapko data ya problem framing sudharne ke liye peeche le ja sakti hai.',
                  },
                  {
                    en: 'Now that you understand the big picture (Module 1), Module 2 zooms into **Problem-Solving and Business Understanding**.',
                    hi: 'Ab jab aapko poori big picture (Module 1) samajh aa gayi hai, Module 2 mein hum **Problem-Solving aur Business Understanding** ko detail mein seekhenge.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
