import { expandMsOfficeSpecs, type MsOfficeTopicSpec } from './msOfficeHelper';
import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

const TAB8_SPECS: MsOfficeTopicSpec[] = [
  // ═══ MODULE 24: Professional Office Projects (269..278) ═══
  {
    id: 269, mod: 24, tInMod: 1,
    title: 'Create a Business Report in Word',
    sub: 'Portfolio Project 1: Boardroom-Ready Word + Copilot Report With Auto TOC & KPI Tables',
    coreEn: 'Build Portfolio Deliverable #1: a ==4-page Executive Business Report in Word== featuring ==Cover Page, Heading 1/2 Styles, Auto Table of Contents, Copilot-grounded Executive Summary, Repeat-Header KPI Table, Page X of Y Footer, and Bookmarked PDF==.',
    coreHi: 'Portfolio Project #1 banao: ==4-page Executive Business Report (Word + Copilot)== — Cover Page, Heading Styles, Auto TOC, Verified KPI Table, Page X of Y Footer aur Bookmarked PDF ke saath!',
    analogyTitle: 'Your Consulting-Grade Writing Sample Ready to Show Any Hiring Manager',
    analogyEn: 'A clean 4-page PDF report proves instantly that you master styles, structure, tables, accessibility, and Copilot fact-checking!',
    analogyHi: 'Ye ek clean 4-page PDF hiring manager ko turant dikha deta hai ki aap pro-level corporate documents bana sakte ho!',
    steps: [['1. Cloud Setup', 'Save `Business_Report.docx` in OneDrive/SharePoint (AutoSave ON)'], ['2. Copilot + Styles', 'Draft 4 structured sections with real Heading 1/2 + Auto TOC'], ['3. Data & Polish', 'Insert formatted KPI table + Cover Page + Different First Page footer'], ['4. QA & PDF', 'Verify numbers, pass F7 Editor + Accessibility -> Export PDF']],
    jobUse: 'Directly demonstrates report-writing readiness for Analyst, Consulting, Ops, and Admin jobs.',
    mistake: 'Forgetting to update Auto TOC or leaving `[Insert Date]` placeholders before PDF export.',
    proHabit: 'Keep both `.docx` and bookmarked `.pdf` cleanly named in your Portfolio folder.',
    rule: 'Real Styles + Verified KPIs + Clean QA + Bookmarked PDF = Portfolio-Grade Report.',
    prompt: `Project 1 Deliverables Check:
[x] Cover Page + Different First Page Footer (Page X of Y)
[x] Real Heading 1/2 Styles + Updated Auto TOC
[x] Executive Summary + Verified KPI Table + Recommendations
[x] Editor (90%+) + Accessibility Passed + Bookmarked PDF`,
    out: 'Publication-quality Business Report ready for your career portfolio.',
    q1: ['What visual and structural details immediately signal that a Word Business Report was built by a Microsoft 365 professional?', 'Consistent Heading 1/2 styles driving an updated automatic Table of Contents, Different-First-Page Page X of Y footers, clean tables with Repeat Header Rows, zero stray placeholders, and clickable bookmarks in the exported PDF.'],
  },
  {
    id: 270, mod: 24, tInMod: 2,
    title: 'Analyze a Sales Dataset in Excel',
    sub: 'Portfolio Project 2: Raw-to-Clean Data Pipeline, `XLOOKUP`/`SUMIFS` & Reconciled Pivots',
    coreEn: 'Build Portfolio Deliverable #2: clean a ==raw multi-region sales dataset== into a named ==`tblSales` (`Ctrl+T`)==, add ==`Profit`, `Margin %`, and `XLOOKUP` product/tier columns==, build ==Monthly & Regional PivotTables==, and verify a ==`0.00` Reconciliation Check==!',
    coreHi: 'Portfolio Project #2: raw sales data clean karke ==`tblSales` (`Ctrl+T`)== banao, ==`Profit`, `Margin %` aur `XLOOKUP`== add karo, ==Monthly/Regional PivotTables== banao aur ==`0.00` Reconciliation Check== verify karo!',
    analogyTitle: 'Turning Raw Uncut Diamonds Into Verified Commercial Intelligence',
    analogyEn: 'Showing a clean 3-tab model (`00_Raw`, `01_Clean_Table`, `02_Analysis_Pivots`) with zero `#N/A` errors proves real analyst discipline!',
    analogyHi: 'Clean 3-tab workbook aur `RECONCILED OK` check cell dikhate hi interviewer ko aapki Excel mastery par 100% bharosa ho jata hai!',
    steps: [['1. Clean Data', 'Backup raw tab -> deduplicate -> TRIM/PROPER -> `Ctrl+T`'], ['2. Formulas', 'Add Profit, weighted Margin %, `XLOOKUP` & `SUMIFS` summary'], ['3. Pivot Analysis', 'Monthly MoM % Trend + Region x Product 2D Matrix'], ['4. Reconcile', 'Verify `Raw Total - Pivot Total = 0.00` ("RECONCILED OK")']],
    jobUse: 'Mirrors the exact live Excel test given in Data Analyst, MIS, Finance, and Sales Ops interviews.',
    mistake: 'Averaging percentages instead of weighted `SUM(Profit)/SUM(Revenue)` or skipping deduplication.',
    proHabit: 'Document your 4 cleaning steps in a tiny Notes box on Tab 1 so any reviewer trusts your numbers immediately.',
    rule: 'Backup Raw -> Clean Table -> Dynamic Formulas -> Reconciled Pivots = Analyst Excellence.',
    prompt: `Project 2 Formula & Audit Check:
[x] 00_Raw_Backup untouched + 01_Clean tblSales (Ctrl+T)
[x] Weighted Gross Margin = SUM(Profit)/SUM(Revenue)
[x] Monthly MoM % + Region x Category Pivots built
[x] Control Total Diff = 0.00 ("RECONCILED OK")`,
    out: 'Audit-proof, interview-ready Excel Sales Analysis workbook.',
    q1: ['How do you prove to an interviewer that your Excel sales analysis has zero missing or double-counted rows?', 'Show your untouched Raw Backup tab alongside a live Control Total reconciliation cell (=Raw_Total - Pivot_Total = 0.00) and matching unique Order_ID row counts.'],
  },
  {
    id: 271, mod: 24, tInMod: 3,
    title: 'Build a KPI Dashboard',
    sub: 'Portfolio Project 3: 1-Screen Interactive Executive Dashboard With Linked KPI Cards & Slicers',
    coreEn: 'Transform your reconciled Excel analysis into ==Portfolio Deliverable #3==: a ==1-screen Gridlines-OFF Interactive Dashboard== with ==4 live Formula-Bar KPI Cards==, ==3 clean spotlighted PivotCharts==, ==connected Region/Category Slicers + Date Timeline==, and a ==verified Copilot Takeaways box==!',
    coreHi: 'Apne Excel analysis ko ==Portfolio Project #3== mein badlo: ==1-screen Gridlines-OFF Interactive Dashboard== — 4 live KPI Cards, 3 clean charts, connected Slicers + Timeline aur verified Copilot Takeaways ke saath!',
    analogyTitle: 'Executive Cockpit That Answers Any Leadership Question in 2 Clicks',
    analogyEn: 'Clicking any Region or Quarter Slicer updates every KPI tile and chart simultaneously—instantly showing Power-BI-level polish right inside Excel!',
    analogyHi: 'Kisi bhi Slicer par click karte hi saare KPI cards aur charts live animate hote hain—bilkul Power BI jaisa feel Excel ke andar!',
    steps: [['1. Clean Canvas', 'Dedicated `03_Dashboard` tab -> Gridlines & Headings OFF'], ['2. Live KPI Tiles', '4 Formula-Bar linked shapes (`=Pivots!B4`) + Variance %'], ['3. Charts + Slicers', '3 decluttered PivotCharts + Slicers linked via Report Connections'], ['4. Copilot Insights', 'Add verified 3-bullet Key Takeaways panel & test all Slicers']],
    jobUse: 'The #1 visual portfolio screenshot that attracts recruiters on LinkedIn and resumes.',
    mistake: 'Forgetting to Hide Field Buttons on PivotCharts or leaving one chart unlinked to Slicers.',
    proHabit: 'Export a crisp 1-page landscape PDF of your Dashboard tab so you can attach it to your portfolio cleanly.',
    rule: 'Gridlines OFF + Live Linked KPIs + Connected Slicers + Verified Takeaways = Showstopper Dashboard.',
    prompt: `Project 3 Live Test Protocol:
1. Click Region Slicer -> All 4 KPIs & 3 Charts update? [x]
2. Click Timeline Quarter -> Numbers reconcile cleanly? [x]
3. Clear All Filters -> Full-year KPIs restore cleanly? [x]`,
    out: 'Interactive, recruiter-ready Excel KPI Dashboard.',
    q1: ['What are the 4 visual design details that make an Excel KPI Dashboard look like a modern executive app?', '1) Gridlines and Headings turned OFF, 2) Clean linked KPI cards across the top, 3) Decluttered PivotCharts with Field Buttons hidden and 2-3 cohesive brand colors, and 4) Connected Slicers & Timeline aligned cleanly on one screen without scrolling.'],
  },
  {
    id: 272, mod: 24, tInMod: 4,
    title: 'Create a Business Presentation in PowerPoint',
    sub: 'Portfolio Project 4: 8-Slide Branded Executive Deck Built From Word & Excel With Copilot',
    coreEn: 'Build ==Portfolio Deliverable #4==: an ==8-slide Branded Executive Presentation== using ==Slide Master==, ==SCQA storytelling==, ==Copilot Word-to-PPT drafting==, ==Action Titles==, ==Slide 2 standalone Executive Summary==, ==spotlighted Excel charts==, ==conversational Speaker Notes==, and ==PDF export==!',
    coreHi: '==Portfolio Project #4== banao: ==8-slide Branded Executive Presentation== — Slide Master, SCQA story, Copilot Word-to-PPT, Action Titles, Slide 2 Exec Summary, highlighted Excel charts, Speaker Notes aur PDF export ke saath!',
    analogyTitle: 'Boardroom Pitch Deck Connecting Your Data Directly to Executive Decisions',
    analogyEn: 'Reading ONLY your 8 Action Titles from Slide 1 to Slide 8 tells the entire business story—with verified Excel charts backing every claim!',
    analogyHi: 'Slide 1 se Slide 8 tak sirf Action Titles padh kar hi poori business story aur decision clear ho jata hai!',
    steps: [['1. Branded Master', 'Set 16:9 Slide Master colors, fonts & subtle footer'], ['2. Draft + SCQA', 'Generate from Word report via Copilot -> apply Action Titles'], ['3. Data + Visuals', 'Paste 2 verified Excel charts (Grey + 1 Accent) + <=50 words/slide'], ['4. Notes & Coach', 'Add Speaker Notes -> F5 + Rehearse with Coach -> Export PDF']],
    jobUse: 'Demonstrates executive communication and data-storytelling mastery.',
    mistake: 'Leaving dense 100-word bullets or mismatched figures between Excel and Slide 4.',
    proHabit: 'Run a dedicated **Numbers-Only Pass** matching every slide figure to your Excel Dashboard before exporting PDF.',
    rule: 'Slide Master + Action Titles + Spotlight Charts + Speaker Notes = Boardroom Deck.',
    prompt: `Project 4 8-Slide Blueprint:
1. Title | 2. Executive Summary (3 KPIs + Ask) | 3. Business Context
4. Monthly Trend (Excel Chart) | 5. Regional/Product Insights (Excel Chart)
6. Key Risks & Mitigations | 7. 90-Day Roadmap | 8. Recommended Decision + Hidden Appendix`,
    out: 'Consulting-grade executive presentation `.pptx` and `.pdf`.',
    q1: ['How do you verify that a PowerPoint presentation is executive-ready before sending it to leadership?', 'Check that Slide 2 stands alone as an Executive Summary, titles alone tell a logical story, every slide has <=50 words and clean visual hierarchy, all numbers match the reconciled Excel workbook, and the exported PDF has zero visual cutoffs.'],
  },
  {
    id: 273, mod: 24, tInMod: 5,
    title: 'Prepare a Professional Outlook Email Workflow',
    sub: 'Portfolio Project 5: Complete Inbox System, Templates, Calendar Blocks & Copilot Emails',
    coreEn: 'Deliver ==Portfolio Deliverable #5==: a documented ==Executive Email & Calendar System== containing ==4-folder + Category structure, 2 Inbox Rules, 3 My Templates, Time-Blocked Weekly Calendar, 1 Copilot-drafted Agenda, and 1 2-Hour Follow-Up Recap Email==.',
    coreHi: '==Portfolio Project #5==: apna complete ==Outlook Productivity System== — 4 folders + Categories, 2 Auto-Rules, 3 My Templates, Time-Blocked Calendar aur Copilot-polished Agenda + Recap Email!',
    analogyTitle: 'Executive Chief-of-Staff Operating System Running Your Workweek Smoothly',
    analogyEn: 'Proves you manage heavy corporate communication calmly with zero missed follow-ups, clean etiquette, and smart Copilot acceleration!',
    analogyHi: 'Ye system dikhata hai ki aap heavy office communication aur calendar ko zero-stress pro style mein manage karte ho!',
    steps: [['1. Inbox Engine', '10-sec Undo Send + 4 folders + Categories + 2 Auto-Rules'], ['2. Reusable Assets', 'Save 3 My Templates (Follow-Up, Recap, Weekly RAG Pulse)'], ['3. Calendar Design', 'Block daily Focus Time + 25/50m defaults + Friday 15m Reset'], ['4. Copilot Samples', 'Draft & coach 1 Stakeholder Update + 1 Post-Meeting Recap']],
    jobUse: 'High-impact day-one skill for Executive Assistants, Project Coordinators, Account Managers, and Analysts.',
    mistake: 'Writing overly long emails (>200 words) without a clear deadline or owner.',
    proHabit: 'Keep every email under 150 words with BLUF opening and bold call-to-action.',
    rule: 'Rules + Templates + Time Blocks + BLUF Copilot Emails = Zero Inbox Chaos.',
    prompt: `Project 5 Verification Checklist:
[x] 10-sec Undo Send + Clean Signature active
[x] 4 Folders + 2 Inbox Rules + 3 My Templates ready
[x] Weekly Calendar protected with Focus Blocks & Friday Reset
[x] 2 Copilot-assisted emails polished with Coaching by Copilot`,
    out: 'Complete executive Outlook & Calendar productivity playbook.',
    q1: ['What are the 3 highest-ROI Outlook features every new corporate employee should configure on Day 1?', '1) 10-second Undo Send to catch mistakes, 2) Focused Inbox + 2-3 automated Inbox Rules to silence noisy alerts, and 3) Recurring Focus Time blocks + My Templates for recurring emails.'],
  },
  {
    id: 274, mod: 24, tInMod: 6,
    title: 'Generate Meeting Minutes with Teams',
    sub: 'Portfolio Project 6: Transcribed Teams Call -> Verified Copilot MoM -> Tracked Action Plan',
    coreEn: 'Build ==Portfolio Deliverable #6==: run a ==structured Teams project call== with ==Transcription ON==, extract ==Decisions & Action Items via Teams Copilot==, verify ==Transcript + Meeting Chat + Shared Slides==, format formal ==1-Page MoM==, and tag owners in the Channel!',
    coreHi: '==Portfolio Project #6==: ==Teams call (Transcription ON)== -> ==Copilot se Decisions & Action Items== -> ==Transcript + Chat verify== -> ==1-Page Formal MoM== -> Channel mein owners ko `@mention` karke track karo!',
    analogyTitle: 'Turning a 30-Minute Discussion Into 100% Accountable Written Execution',
    analogyEn: 'A clean verified MoM published within 2 hours proves you can run meetings that actually produce results instead of circular talk!',
    analogyHi: 'Meeting ke 2 ghante ke andar clean, verified MoM share karna aapko team ka sabse reliable execution leader banata hai!',
    steps: [['1. Run With Consent', 'Announce & enable Transcription at Minute 1'], ['2. Extract With Copilot', 'Pull Confirmed Decisions vs Ideas + Action Table'], ['3. Audit Accuracy', 'Fix misheard names/numbers & cross-check Meeting Chat'], ['4. Publish & Track', 'Post clean MoM in Channel, @mention owners & set 48h check']],
    jobUse: 'Demonstrates leadership, communication precision, and practical Teams Copilot fluency.',
    mistake: 'Publishing raw unverified AI notes with wrong speaker attribution or `"TBD"` left unassigned.',
    proHabit: 'Confirm every action owner & due date aloud in the final 2 minutes of the call!',
    rule: 'Consent Transcript -> Copilot Draft -> Human Audit (Names/Chat) -> @Mention Owners.',
    prompt: `Project 6 Formal MoM Structure:
- Meeting Info: Title, Date, Attendees
- Key Decisions Agreed (3-5 verified bullets)
- Action Items Table: # | Action | Single Owner | Due Date | Status
- Next Sync Date & Linked Files`,
    out: 'Clean, verified, action-oriented Meeting Minutes deliverable.',
    q1: ['What 3 sources should you verify before publishing AI-generated Teams Meeting Minutes?', '1) The AI Recap/Notes, 2) The raw Voice Transcript for exact numbers and speaker attribution, and 3) The Meeting Chat for pasted links, figures, or written approvals.'],
  },
  {
    id: 275, mod: 24, tInMod: 7,
    title: 'Build a Feedback Form with Microsoft Forms',
    sub: 'Portfolio Project 7: Unbiased Survey With Branching -> Live Excel Analysis -> Copilot Themes',
    coreEn: 'Deliver ==Portfolio Deliverable #7==: a ==2-minute Anonymous Microsoft Form== with ==Choice, 1-5 Rating & smart Branching==, synced live to ==Excel== for ==Department Cross-Tabs & Top-2-Box %==, paired with a ==Copilot 5-Theme Comment Summary & Action Plan==!',
    coreHi: '==Portfolio Project #7==: ==2-min Anonymous Microsoft Form== (Choice + Rating + Branching) -> ==Live Excel Cross-Tab & Favorable %== -> ==Copilot Comment Themes + Action Plan==!',
    analogyTitle: 'Complete Voice-of-Customer / Voice-of-Employee Intelligence Loop',
    analogyEn: 'Combines survey design, privacy ethics (Rule of 5), Excel PivotTables, and Copilot text analytics in one crisp project!',
    analogyHi: 'Survey design + privacy + Excel analysis + Copilot text clustering—sab ek hi project mein demonstrate ho jata hai!',
    steps: [['1. Design Form', '8 unbiased Qs (Choice + 1-5 Rating + Branching + Anonymous)'], ['2. Preview & Test', 'Test both Mobile View & all branching paths in Incognito'], ['3. Excel Analysis', 'Open live Excel -> Tab 2 Pivot by Dept + Top-2-Box %'], ['4. AI Summary', 'Copilot clusters comments -> 1-page "You Said -> We Will Do"']],
    jobUse: 'Ready-made showcase for HR, Operations, Customer Success, Product, and Marketing roles.',
    mistake: 'Using leading wording, forcing comments required, or breaking anonymity on small <5-person teams.',
    proHabit: 'Always close every survey project with concrete `"You Said -> We Are Doing"` commitments.',
    rule: 'Unbiased Short Form + Smart Branching + Privacy-Safe Excel + Copilot Themes.',
    prompt: `Project 7 Quality Checklist:
[x] <=8 neutral questions (under 2 mins on Mobile)
[x] Branching tested cleanly on low & high ratings
[x] Live Excel Tab 2 Pivot + Favorable % (Rule of 5 respected)
[x] Copilot Top Themes + Anonymized Quotes + Action Plan`,
    out: 'Complete feedback-to-action survey intelligence project.',
    q1: ['What makes a Microsoft Forms survey project truly executive-ready?', 'Short unbiased questions with smart branching, clean live Excel segment cross-tabs protecting anonymity (Rule of 5), Copilot qualitative theme clustering, and a concrete "You Said -> We Will Do" action plan.'],
  },
  {
    id: 276, mod: 24, tInMod: 8,
    title: 'Automate an Approval Process',
    sub: 'Portfolio Project 8: Production-Safe Power Automate Approval With Validation & Error Alerts',
    coreEn: 'Deliver ==Portfolio Deliverable #8==: a ==tested Power Automate Approval Workflow== connecting ==Forms -> Validation/Duplicate Guard -> SharePoint/Excel Log -> Tiered 1-Click Teams/Outlook Approval -> Status Update + Notification + Try/Catch Error Alert + Runbook==!',
    coreHi: '==Portfolio Project #8==: live tested ==Power Automate Approval Workflow== — Forms -> Validation -> SharePoint/Excel Log -> 1-Click Approval -> Status Update + Error Alert + 1-Page Runbook!',
    analogyTitle: 'Live No-Code Automation Engine Proving Real Digital-Transformation Skill',
    analogyEn: 'Showing green Run History screenshots for BOTH Approved and Rejected paths plus your 1-Page Runbook proves enterprise readiness!',
    analogyHi: 'Approved aur Rejected dono paths ke green Run History screenshots + 1-Page Runbook dikhane se interviewer turant impressed ho jata hai!',
    steps: [['1. Build Pipeline', 'Forms -> Get Details -> Validate -> Add Row (Pending)'], ['2. Tiered Approval', 'Condition (`float(Amount) >= 10000`) -> Start & Wait Approval'], ['3. Close Loop', 'Update Row Status + Email Requester (with Comments on Reject)'], ['4. Harden Flow', 'Try/Catch failure alert + Co-Owner + 1-Page Runbook']],
    jobUse: 'High-demand automation credential for Ops, HR, Finance, IT Support, and Business Analyst roles.',
    mistake: 'Skipping duplicate/null validation or forgetting to test the Rejected branch.',
    proHabit: 'Capture screenshots of the clean visual flow, Teams approval card, and green Run History for your portfolio.',
    rule: 'Validate -> Log -> Tiered Approval -> Update & Notify -> Try/Catch + Runbook.',
    prompt: `Project 8 Test Evidence:
[x] Approved test run = Green (Excel updated "Approved" + email sent)
[x] Rejected test run = Green (Excel updated "Rejected" + comments sent)
[x] Duplicate/Invalid test handled cleanly
[x] Try/Catch alert + Co-Owner + Runbook documented`,
    out: 'Production-hardened automated business approval system.',
    q1: ['What 4 pieces of evidence prove your Power Automate approval project is production-ready?', '1) Green Run History for both Approved and Rejected test cases, 2) Input validation and duplicate-check guards, 3) A Try/Catch Configure-Run-After failure alert, and 4) A backup Co-Owner with a 1-page Flow Runbook.'],
  },
  {
    id: 277, mod: 24, tInMod: 9,
    title: 'Document the Complete Workflow',
    sub: 'Portfolio Project 9: Master Solution Architecture & Handover Playbook in Word/SharePoint',
    coreEn: 'Create a ==Master 2-Page Solution Playbook== tying all deliverables together: ==1) Business Problem & ROI Saved (Hours/Month), 2) Visual M365 Architecture Map, 3) Live File Links & Roles, 4) Security/Permission Matrix, and 5) Maintenance SOP==!',
    coreHi: 'Saare deliverables ko ek ==2-Page Master Solution Playbook== mein document karo: ==1) Business Problem & Time Saved, 2) Visual M365 Architecture Map, 3) Live File Links, 4) Permission Matrix aur 5) Maintenance SOP==!',
    analogyTitle: 'Owner Manual & Blueprint Turning Good Projects Into a Senior Portfolio',
    analogyEn: 'Quantifying impact (`"Cut weekly reporting & approval time from 6 hours to 45 minutes — 87% faster!"`) transforms a technical demo into a compelling business case!',
    analogyHi: 'Impact ko numbers mein dikhana (`"6 ghante ka kaam 45 minute mein — 87% time saved!"`) hiring managers ko sabse zyada pasand aata hai!',
    steps: [['State ROI Clearly', 'Estimate Before vs After hours & error reduction'], ['Map Connected Apps', '1 simple diagram showing Forms -> Excel -> Word -> PPT -> Flow'], ['Index All Links', 'Clean table linking every deliverable + Owner + Permission'], ['Include SOP', 'Short step-by-step guide so any teammate can run it']],
    jobUse: 'Demonstrates senior systems thinking and clean documentation habits.',
    mistake: 'Handing over 8 separate files with zero overview explaining how they fit together.',
    proHabit: 'Always write a **Before vs After ROI box** at the top of your portfolio documentation!',
    rule: 'Quantified ROI + Visual Architecture Map + Clean File Index = Executive Documentation.',
    prompt: `"Draft a crisp 2-page Master Solution Playbook documenting our integrated Microsoft 365 + Copilot workflow (Word, Excel, PowerPoint, Outlook, Teams, Forms, Power Automate). Include Before vs After time-saved table, app flow diagram steps, permission matrix, and maintenance checklist."`,
    out: 'Cohesive, executive-grade Master Solution Playbook.',
    q1: ['Why is adding a "Before vs After" time-and-error ROI table so powerful in project documentation?', 'Because managers and interviewers hire people who solve business problems—showing concrete impact (such as reducing weekly reporting from 6 hours to 45 minutes with zero reconciliation errors) proves immediate workplace value.'],
  },
  {
    id: 278, mod: 24, tInMod: 10,
    title: 'Present the Final Deliverables',
    sub: 'Portfolio Project 10: 5-Minute Live Executive Demo Showing Connected M365 + Copilot Value',
    coreEn: 'Deliver a crisp ==5-Minute Executive Showcase==: ==Min 1: Problem & ROI Headline (Slide 2)== -> ==Min 2: Live Excel Dashboard Slicer Demo== -> ==Min 3: Live Power Automate Approval / Forms Demo== -> ==Min 4: Word Report & Teams Recap== -> ==Min 5: Security & Next Steps==!',
    coreHi: 'Ek sharp ==5-Minute Live Executive Demo== do: ==Min 1: Problem & ROI== -> ==Min 2: Live Excel Dashboard Slicers== -> ==Min 3: Power Automate Approval== -> ==Min 4: Word Report & Teams MoM== -> ==Min 5: Security & Q&A==!',
    analogyTitle: 'Apple-Style 5-Minute Product Keynote Showing Real Working Magic',
    analogyEn: 'A crisp 5-minute live walkthrough beats a 30-minute rambling tour every single time—keep tabs pre-opened, zoom at 125%, and have PDF backups ready!',
    analogyHi: '5 minute ka crisp pre-opened live demo 30 minute ke boring speech se 10x zyada impact dalta hai—tabs pehle khol kar 125% zoom par rakho!',
    steps: [['Pre-Open Tabs', 'Have PPT, Excel Dashboard, SharePoint & Flow ready (125% zoom)'], ['Lead With Value', 'Start with Business Impact ("Saves 5 hrs/week + 0 errors")'], ['Show Live Clicks', 'Click 2 Slicers live + show green Flow run & PDF report'], ['Handle Q&A Calmly', 'Use hidden Appendix slides & explain governance checks']],
    jobUse: 'Directly prepares you to ace final-round interviews, client pitches, and internal promotions.',
    mistake: 'Wasting 3 minutes hunting through folders during a live demo or forgetting Do Not Disturb!',
    proHabit: 'Rehearse your 5-minute demo twice with a timer and keep Do Not Disturb ON!',
    rule: 'Pre-Opened Tabs + 125% Zoom + Lead With ROI + 5-Min Timer = Unforgettable Demo.',
    prompt: `5-Minute Showcase Run-of-Show:
- 0:00-1:00: Executive Summary Slide (Problem + ROI Saved)
- 1:00-2:30: Live Excel KPI Dashboard (click 2 Slicers!)
- 2:30-3:30: Live Power Automate Approval + Forms Loop
- 3:30-4:30: Word Report PDF + Teams Copilot MoM
- 4:30-5:00: Security/Governance Gate + Open for Q&A`,
    out: 'Confident, job-winning live portfolio presentation.',
    q1: ['What 3 practical steps prevent technical glitches during a live 5-minute Microsoft 365 portfolio demo?', '1) Pre-open all required tabs (PPT, Excel Dashboard, SharePoint, Flow) zoomed to 125%, 2) Turn on Do Not Disturb to block popups, and 3) Keep clean exported PDF/screenshot backups ready in case internet hiccups occur.'],
  },

  // ═══ MODULE 25: Security, Privacy and Responsible Copilot Use (279..289) ═══
  {
    id: 279, mod: 25, tInMod: 1,
    title: 'Understanding Microsoft 365 Access Permissions',
    sub: 'Principle of Least Privilege, Role-Based Groups & SharePoint Permission Inheritance',
    coreEn: 'Follow the ==Principle of Least Privilege== across Microsoft 365: grant people ONLY the minimum access they need (==View vs Review vs Edit==), assign permissions via ==Teams/Security Groups== (never 40 messy individual overrides), and review access regularly!',
    coreHi: '==Principle of Least Privilege== follow karo: har user ko sirf utna hi access do jitna kaam ke liye zaroori hai (==View vs Edit==), aur individual names ke bajaye ==Groups/Teams== ke through permissions manage karo!',
    analogyTitle: 'Hotel Keycards Opening Only Your Room + Gym, Never Other Guests Rooms',
    analogyEn: 'Granting everyone Full Edit on HR or Finance libraries invites accidental deletion and Copilot oversharing—clean role-based groups keep every room locked properly!',
    analogyHi: 'Sabko HR ya Finance folder ka Edit access dena khatarnak hai—role-based groups se har team sirf apna hi data dekhti hai!',
    steps: [['Least Privilege', 'Default to View-only; grant Edit only to active authors'], ['Use Groups', 'Assign SharePoint Owners, Members, Visitors cleanly'], ['Respect Inheritance', 'Avoid breaking inheritance on 50 random subfolders'], ['Audit Quarterly', 'Remove ex-project members & stale guest links']],
    jobUse: 'Core security standard tested in every corporate onboarding and M365 role.',
    mistake: 'Giving "Full Control" or "Can Edit" to everyone just to fix an access request quickly.',
    proHabit: 'Ask two questions before sharing: "Who genuinely needs this?" and "Do they need View or Edit?"',
    rule: 'Least Privilege + Group-Based Access + Quarterly Audits = Secure Microsoft 365.',
    prompt: `SharePoint 3-Tier Group Model:
- Site Owners (2-3 Leads): Full Control & Permission Management
- Site Members (Active Team): Edit & Co-Author Documents
- Site Visitors (Stakeholders): Read / View Only`,
    out: 'Clean, maintainable, zero-oversharing permission architecture.',
    q1: ['What is the Principle of Least Privilege in Microsoft 365 file management?', 'It means giving every user or group the minimum level of access required to perform their job (e.g., View instead of Edit, and access only to relevant folders), reducing accidental edits and data exposure.'],
  },
  {
    id: 280, mod: 25, tInMod: 2,
    title: 'Reviewing OneDrive and SharePoint Sharing',
    sub: 'Auditing "Shared by You", Expiring External Links & Eliminating Risky "Anyone" Links',
    coreEn: 'Conduct a ==5-minute monthly Sharing Audit== in OneDrive (`Shared -> Shared by you`) and SharePoint (`Manage Access`): ==delete expired vendor links==, downgrade finished projects from ==Edit -> View==, and eliminate unnecessary =="Anyone with the link"== shares!',
    coreHi: 'Har mahine 5 minute ka ==Sharing Audit== karo (`OneDrive -> Shared by you` aur `Manage Access`): ==purane vendor links hatao==, finished files ko ==View-only== karo, aur risky =="Anyone" links== band karo!',
    analogyTitle: 'Deactivating Old Visitor Badges After Contractors Finish Work',
    analogyEn: 'An active `"Anyone with link"` URL created 8 months ago can still be forwarded around the internet today—sweeping your Shared list closes forgotten backdoors instantly!',
    analogyHi: '8 mahine purana `"Anyone"` link aaj bhi koi forward kar sakta hai—monthly audit saare khule backdoors band kar deta hai!',
    steps: [['Open Shared Tab', 'OneDrive Web -> Shared -> Shared by you'], ['Spot Risky Links', 'Flag any "Anyone" or external contractor Edit links'], ['Click Manage Access', 'Delete stale links or switch Can Edit -> Can View'], ['Set Expiry Always', 'Put 7-30 day expiration on every new external share']],
    jobUse: 'Directly prevents accidental external data leaks and passes IT security audits.',
    mistake: 'Never checking who still has access to a shared pricing or HR folder created last year.',
    proHabit: 'Add a 5-minute recurring monthly calendar reminder: `"Monthly OneDrive/SharePoint Sharing Audit"`.',
    rule: 'Audit "Shared by You" Monthly + Expire External Links = Zero Forgotten Leaks.',
    prompt: `Monthly 5-Min Sharing Audit:
1. OneDrive -> Shared -> Shared by you
2. Revoke access for completed external vendors/clients
3. Downgrade finalized reports from Can Edit -> Can View
4. Confirm zero confidential files have "Anyone" links`,
    out: 'Tight, audit-compliant file sharing hygiene.',
    q1: ['Why is an "Anyone with the link" share link risky for business documents?', 'Anyone who receives or forwards that URL—even outside your company—can open (or edit) the file without authenticating, making it impossible to track who accessed the data.'],
  },
  {
    id: 281, mod: 25, tInMod: 3,
    title: 'Protecting Confidential Business Information',
    sub: 'Sensitivity Labels (Public, Internal, Confidential), Encryption & DLP Awareness',
    coreEn: 'Classify and protect sensitive documents using ==Microsoft Purview Sensitivity Labels== (`Home -> Sensitivity`: Public, General, Confidential, Highly Confidential) so ==encryption, watermarks, and print/forward restrictions== travel WITH the file everywhere!',
    coreHi: 'Sensitive documents par ==Sensitivity Labels== (`Confidential`, `Highly Confidential`) lagao taaki ==encryption aur forwarding restrictions== file ke saath hamesha jude rahein!',
    analogyTitle: 'Armored Briefcase That Stays Locked Even If Dropped Outside the Office',
    analogyEn: 'A file labeled `Highly Confidential` stays encrypted even if accidentally emailed outside—and Copilot automatically honors the label restriction!',
    analogyHi: '`Highly Confidential` label lagi file galti se bahar chali jaye tab bhi encrypted rehti hai—aur Copilot bhi uska label respect karta hai!',
    steps: [['Check Sensitivity', 'Click Home -> Sensitivity button in Word/Excel/PPT/Outlook'], ['Pick Right Label', 'Public | Internal | Confidential | Highly Confidential'], ['Protect PII/Secrets', 'Never put passwords, API keys, or PAN/Aadhaar in public chats'], ['Respect DLP Alerts', 'Heed yellow Data Loss Prevention policy tips in Outlook']],
    jobUse: 'Required compliance awareness across Banking, Healthcare, IT Services, and Enterprise firms.',
    mistake: 'Ignoring Outlook Data Loss Prevention (DLP) warning banners and forcing through a confidential spreadsheet to a personal Gmail!',
    proHabit: 'Classify every new HR, Finance, or Client document with its proper Sensitivity Label right after saving.',
    rule: 'Label Confidential Files -> Encryption & Copilot Protection Travel Automatically.',
    prompt: `4-Tier Corporate Classification:
- Public: Approved marketing brochures & press releases
- Internal: Everyday team docs & internal SOPs
- Confidential: Client proposals, pricing & financials
- Highly Confidential: Payroll, PII, M&A & legal secrets`,
    out: 'Enterprise-grade data protection woven into daily work.',
    q1: ['What happens when you apply a "Confidential" or "Highly Confidential" Sensitivity Label to a Word or Excel file?', 'Microsoft Purview can automatically encrypt the file, add visual headers/watermarks, restrict unauthorized forwarding or printing, and ensure Microsoft 365 Copilot respects those protection boundaries.'],
  },
  {
    id: 282, mod: 25, tInMod: 4,
    title: 'Understanding Organizational Data Boundaries',
    sub: 'Work Tenant Boundary vs Public Web AI & How Enterprise Data Protection Works',
    coreEn: '==Microsoft 365 Copilot== operates strictly inside your ==Organization Tenant Boundary== with ==Enterprise Data Protection==: your prompts, files, and replies are ==encrypted, never shared across tenants, and never used to train public foundation models==—unlike consumer free AI websites!',
    coreHi: '==Microsoft 365 Copilot== aapki ==company ke secure Tenant Boundary== ke andar chalta hai—aapke prompts aur files ==kabhi public AI models ko train karne mein use nahi hote==, jabki free consumer AI sites par risk rehta hai!',
    analogyTitle: 'Private Corporate Intranet Vault vs Posting on a Public Town-Square Billboard',
    analogyEn: 'Always check for the **Green Shield ("Protected")** icon in Work Copilot—and NEVER paste internal company files into personal free chatbots!',
    analogyHi: 'Work Copilot mein hamesha **Green Shield ("Protected")** icon check karo—aur company files kabhi personal free AI tools mein paste mat karo!',
    steps: [['Verify Work Account', 'Confirm signed into `name@company.com`, not personal account'], ['Check Green Shield', 'Enterprise Data Protection badge confirms tenant boundary'], ['Toggle Web Grounding', 'Understand when Web Search is ON vs Work-Only data'], ['Zero Shadow AI', 'Never upload company docs to unapproved third-party AI apps']],
    jobUse: 'Protects companies from "Shadow AI" data breaches—a top concern of every CISO today.',
    mistake: 'Using a personal free AI account on your work browser to summarize a confidential client NDA!',
    proHabit: 'Keep 100% of company work inside your licensed Microsoft 365 Work Copilot environment.',
    rule: 'Company Data Stays Inside the Company Tenant Boundary—Zero Shadow AI.',
    prompt: `Enterprise Boundary Quick Check:
[x] Signed into Work Account (name@company.com)
[x] Green Enterprise Data Protection shield visible
[x] Zero company files uploaded to personal/unapproved AI sites`,
    out: '100% compliant, zero-leak enterprise AI workflow.',
    q1: ['What is "Shadow AI" and why do enterprise IT security teams prohibit it?', 'Shadow AI refers to employees pasting confidential company data into unapproved personal or public AI websites outside the company security boundary—risking data leaks, compliance violations, and loss of intellectual property.'],
  },
  {
    id: 283, mod: 25, tInMod: 5,
    title: 'Reviewing AI-Generated Content',
    sub: 'Human-in-the-Loop Quality Gate: Accuracy, Completeness, Tone & Originality',
    coreEn: 'Every Copilot output must pass a ==4-Dimension Human Review== before sharing: ==1) Factual Accuracy (numbers/dates/names), 2) Completeness (did AI skip a key caveat?), 3) Natural Human Tone (zero robotic clichés), and 4) Privacy/Audience Fit==.',
    coreHi: 'Har Copilot output ko share karne se pehle ==4-Dimension Human Review== se guzaro: ==1) Factual Accuracy, 2) Completeness, 3) Natural Human Tone aur 4) Privacy/Audience Fit==!',
    analogyTitle: 'Senior Editor Signing Off Every Article Before Newspaper Printing',
    analogyEn: 'Copilot accelerates drafting by 5x, but your human judgment is what ensures zero embarrassing errors and authentic workplace trust!',
    analogyHi: 'Copilot speed 5x badhata hai, par aapka human review hi 100% trust aur zero-error quality ensure karta hai!',
    steps: [['1. Verify Facts', 'Cross-check dates, names, prices & policy clauses'], ['2. Check Omissions', 'Did Copilot drop a key risk or exception from source?'], ['3. Humanize Voice', 'Remove robotic filler ("delighted to", "fast-paced landscape")'], ['4. Final Audience Check', 'Confirm safe for exact recipients & channel']],
    jobUse: 'Makes your AI-assisted work indistinguishable from top senior-level human craftsmanship.',
    mistake: 'Treating AI speed as an excuse to stop reading your own documents before sending.',
    proHabit: 'Read the opening 2 lines and closing 2 lines of every AI draft aloud—if it sounds robotic, rewrite it in your own voice!',
    rule: 'AI Speed + Human Review = Trusted Senior Quality.',
    prompt: `4-Point Human Review Checklist:
[ ] Facts, numbers, names & dates verified
[ ] Important nuances/risks not accidentally omitted
[ ] Robotic clichés cut; natural voice restored
[ ] Safe for exact recipient list`,
    out: 'Consistently polished, accurate, human-owned deliverables.',
    q1: ['Besides checking for false facts, what else can go wrong when AI summarizes a long business document?', 'AI can accidentally omit critical caveats, exceptions, or conditional clauses (like cancellation fees or liability limits) while shortening text—which is why checking for omissions against the source is vital.'],
  },
  {
    id: 284, mod: 25, tInMod: 6,
    title: 'Verifying Formulas and Calculations',
    sub: 'Auditing AI-Generated Excel Formulas, Ranges, Edge Cases & Control Totals',
    coreEn: 'Never trust prose math or uninspected AI formulas! Audit every ==Copilot-generated Excel calculation== by ==reading the Formula Bar==, ==testing 3 rows (normal, zero, boundary)==, ==scanning the Filter dropdown for `#ERROR`==, and checking ==`Raw Total - Summary = 0`==!',
    coreHi: 'Prose math ya bina check kiye AI formula par bharosa mat karo—==Formula Bar padho==, ==3 rows hand-check karo==, ==Filter dropdown mein errors dekho==, aur ==`Raw - Summary = 0`== reconcile karo!',
    analogyTitle: 'Pilot Cross-Checking Autopilot Altitude Against Independent Instruments',
    analogyEn: 'A tiny `>` vs `>=` or wrong column pick can distort a ₹50L report—your 60-second formula audit guarantees CFO-grade precision!',
    analogyHi: 'Ek chhota `>` vs `>=` ya galat column poori report bigaad sakta hai—60 second ka formula audit 100% CFO-level accuracy deta hai!',
    steps: [['Read Formula Bar', 'Confirm logic, brackets & exact table columns'], ['Test 3 Edge Rows', 'Verify normal row, zero/blank row & exact threshold'], ['Filter For Errors', 'Click column filter arrow -> check for `#DIV/0!`/`#N/A`'], ['Reconcile Total', 'Confirm Control Total difference = `0.00`']],
    jobUse: 'Protects financial integrity in budgets, commissions, invoicing, and analytics.',
    mistake: 'Asking Copilot Chat to sum 20 numbers in plain text instead of using a real Excel `=SUM()` formula!',
    proHabit: 'Always perform math using real **Excel Formulas** (deterministic), never LLM text prediction!',
    rule: 'Deterministic Excel Formulas + 3-Row Test + Control Total = 100% Verified Math.',
    prompt: `Excel AI Formula Verification Protocol:
1. Inspect Formula Bar syntax & column names
2. Manually verify 3 rows (normal, zero, boundary)
3. Check Filter dropdown for any #DIV/0!, #VALUE!, #N/A
4. Confirm Raw Total - Summary Total = 0.00`,
    out: 'Zero calculation errors in any AI-assisted spreadsheet.',
    q1: ['Why should you always rely on an actual Excel formula (=SUM, =SUMIFS) rather than asking an AI chatbot to add up numbers in text?', 'Excel formulas execute deterministic mathematical computation with 100% precision and update dynamically when data changes, whereas LLM text generation predicts tokens and can make arithmetic slips.'],
  },
  {
    id: 285, mod: 25, tInMod: 7,
    title: 'Checking Sources and References',
    sub: 'Clicking Inline Citations, Verifying Source Freshness & Rejecting Unverified Claims',
    coreEn: 'Always verify ==where Copilot got its answer==: click ==numbered inline citations (`[1] [2]`)== to inspect the actual SharePoint file, email, or web page—checking ==publication date, version freshness (`2026` vs old `2022` draft!), and authority==.',
    coreHi: 'Hamesha check karo ki Copilot ne answer kahan se uthaya: ==inline citations (`[1] [2]`) click karo== aur dekho ki source file ==latest 2026 version== hai ya koi purana outdated draft!',
    analogyTitle: 'Checking the Expiry Date & Label on Medicine Before Taking It',
    analogyEn: 'If SharePoint still holds an old `2022_Travel_Policy.docx` alongside `2026_Travel_Policy.docx`, Copilot might cite the 2022 one unless you check the citation date and archive old docs!',
    analogyHi: 'Agar SharePoint par `2022` aur `2026` dono policies padi hain, toh citation click karke date check karna aapko outdated rule quote karne se bacha leta hai!',
    steps: [['Click Every Citation', 'Open `[1] [2]` source links on critical facts'], ['Check Freshness', 'Verify file year/version is current (not archived draft)'], ['Confirm Context', 'Ensure snippet was not quoted out of context'], ['Archive Stale Files', 'Move outdated policies to `99_Archive` so Copilot stays sharp']],
    jobUse: 'Prevents quoting outdated pricing, expired HR rules, or dead web links to clients.',
    mistake: 'Leaving 4 outdated policy drafts in an active SharePoint folder so Copilot cites the wrong one.',
    proHabit: 'Archive old superseded files cleanly so your active SharePoint library contains ONLY current truth!',
    rule: 'Click Citations -> Verify Year/Version -> Archive Outdated Files.',
    prompt: `Source-Strict Prompt:
"Answer using ONLY /2026_Official_Travel_Policy.docx. Ignore older versions and include the exact section number next to every policy rule."`,
    out: '100% current, source-verified answers.',
    q1: ['Why can keeping outdated 2021–2023 policy drafts in an active SharePoint library cause problems with Microsoft 365 Copilot?', 'Copilot searches all files you have access to—outdated drafts left in active folders can be retrieved and cited instead of the latest approved policy. Always archive or delete superseded versions.'],
  },
  {
    id: 286, mod: 25, tInMod: 8,
    title: 'Recognizing AI Errors and Hallucinations',
    sub: 'Spotting Confident Fiction, Swapped Owners, Negation Flips & Invented Metrics',
    coreEn: 'Stay sharp against the ==5 classic Copilot hallucination traps==: ==1) Invented stats/studies, 2) Swapped speaker/action owners in Teams recaps, 3) Flipped negations ("not approved" -> "approved"), 4) Stale dates/policies, and 5) Confident guesses when source data is missing==.',
    coreHi: '==5 classic AI hallucination traps== par hamesha nazar rakho: ==1) Fake stats/studies, 2) Meeting mein swapped owners, 3) "Not" flip hona, 4) Outdated dates, aur 5) Missing info par confident guess==!',
    analogyTitle: 'Spotting Optical Illusions Instantly Once You Know How the Trick Works',
    analogyEn: 'Adding one line to critical prompts—`"If any requested detail is not explicitly in the source file, write [Not Found in Source]"`—cuts hallucinations by 90%!',
    analogyHi: 'Critical prompts mein `"Source mein na ho toh [Not Found] likho"` jod dene se hallucinations 90% kam ho jaate hain!',
    steps: [['Watch 5 Traps', 'Numbers, Names/Owners, Negations, Dates, Uncited Stats'], ['Allow "Not Found"', 'Explicitly instruct Copilot not to guess missing facts'], ['Cross-Check High Risk', 'Verify legal, HR, medical & financial claims 100%'], ['Report/Correct', 'Edit errors immediately before saving or sharing']],
    jobUse: 'Builds bulletproof professional judgment in the AI-first workplace.',
    mistake: 'Being fooled by polished grammar into assuming every claim inside an AI paragraph is true.',
    proHabit: 'Treat every statistic, date, person name, and `"not"` clause in an AI output as **guilty until verified**!',
    rule: 'Polished Grammar != Fact. Always Verify Numbers, Owners, Dates & Negations.',
    prompt: `Anti-Hallucination Audit Prompt:
"Review your response above and flag any sentence that relies on assumptions rather than explicit text in the attached source document."`,
    out: 'Transparent, hallucination-free business content.',
    q1: ['What single prompt instruction dramatically reduces AI hallucinations when summarizing or extracting data from a document?', 'Instruct Copilot: "Use ONLY information explicitly stated in the provided file. If a detail is missing, write [Not Found in Source] rather than guessing."'],
  },
  {
    id: 287, mod: 25, tInMod: 9,
    title: 'Accessibility and Inclusive Documents',
    sub: 'Built-In Accessibility Checker Across Word, Excel, PowerPoint & Outlook',
    coreEn: 'Build inclusive Microsoft 365 files by default: use ==real Heading Styles==, ==descriptive Alt Text on images/charts==, ==high color contrast==, ==proper table headers==, ==meaningful hyperlink text==, and run ==Review -> Check Accessibility== before sharing!',
    coreHi: 'Har Word, Excel, PPT aur Outlook file ko inclusive banao: ==real Heading Styles, Alt Text, high contrast, table headers, clear links== aur bhejne se pehle ==Check Accessibility== zaroor run karo!',
    analogyTitle: 'Designing Clean Clear Signage Everyone Can Read Effortlessly',
    analogyEn: 'Accessible documents are not just ethical and legally required—they are cleaner, better structured, and even easier for **Copilot AI** to parse accurately!',
    analogyHi: 'Accessible documents sirf inclusive hi nahi hote—wo zyada clean, readable aur **Copilot AI** ke liye bhi 10x better hote hain!',
    steps: [['Run Checker', 'Review -> Check Accessibility (Word, Excel, PPT, Outlook)'], ['Add Alt Text', 'Write 1 clear sentence describing every chart/image takeaway'], ['Check Contrast', 'Dark text on light background; never rely on color alone'], ['Clean Links & Tables', 'Descriptive link labels + Header Row marked on tables']],
    jobUse: 'Required by global enterprises, public sector clients, and modern corporate design standards.',
    mistake: 'Using red/green traffic-light dots with zero text labels ("Pass/Fail") so colorblind teammates cannot read the table!',
    proHabit: 'Pair every Red/Amber/Green color badge with an explicit text label (`[Green] On Track`, `[Red] Blocked`).',
    rule: 'Headings + Alt Text + High Contrast + Text Labels Beyond Color = Truly Inclusive.',
    prompt: `5-Point Accessibility Gate:
[x] Review -> Check Accessibility shows 0 Errors
[x] Real Heading 1/2/3 styles (Word) & Reading Order (PPT)
[x] Meaningful Alt Text on every chart & image
[x] High contrast & text labels alongside RAG colors
[x] Descriptive hyperlinks (zero "Click here")`,
    out: 'Inclusive, enterprise-compliant documents accessible to every colleague and client.',
    q1: ['Why should you never rely solely on red and green cell colors to indicate Pass/Fail or On-Track/Blocked status?', 'Colorblind readers (roughly 1 in 12 men) cannot distinguish red from green easily. Always pair colors with clear text labels ("On Track", "Blocked") or distinct icons (✓ / ✕).'],
  },
  {
    id: 288, mod: 25, tInMod: 10,
    title: 'Understanding Data Retention and Organizational Policies',
    sub: 'Retention Labels, Audit Trails, Legal Hold & Following Company AI Governance Rules',
    coreEn: 'Understand that ==company Microsoft 365 data== (emails, Teams chats, SharePoint files, Copilot audit logs) is governed by ==Organizational Retention & Compliance Policies==—know how long records are kept, respect ==Legal Holds==, and follow your company ==Acceptable AI Use Policy==.',
    coreHi: 'Company ke ==Microsoft 365 data== (emails, Teams, SharePoint, Copilot logs) par ==Retention aur Compliance Policies== laagu hoti hain—isliye hamesha official channels use karo aur company ki ==AI Policy== follow karo!',
    analogyTitle: 'Official Company Archive Rules Governing How Long Tax & Legal Records Stay Safe',
    analogyEn: 'Remember: work Teams chats and emails are official company records subject to retention and compliance—always write professionally as if leadership or auditors could read it!',
    analogyHi: 'Yaad rakho: office Teams chats aur emails official company records hote hain—hamesha professional language hi use karo!',
    steps: [['Respect Retention', 'Know auto-delete vs 7-year legal/financial archive rules'], ['Write Professionally', 'Treat every Teams chat & Outlook email as an official record'], ['No Personal Bypass', 'Never move work records to personal WhatsApp/Gmail'], ['Check AI Policy', 'Know approved tools, client disclosure & HR/Legal rules']],
    jobUse: 'Protects both your personal career and your organization during regulatory audits.',
    mistake: 'Discussing confidential company matters on personal WhatsApp or writing unprofessional gossip in Teams chat.',
    proHabit: 'Keep 100% of business decisions inside official Microsoft 365 channels and write with lasting professionalism.',
    rule: 'Work M365 = Official Company Record. Stay Professional, Compliant & Inside Approved Channels.',
    prompt: `Workplace Compliance Habits:
- Store official contracts & invoices in designated SharePoint libraries
- Never bypass company retention by moving work to personal apps
- Follow company Acceptable AI Use Policy for client deliverables`,
    out: 'Audit-safe, career-protecting corporate compliance awareness.',
    q1: ['Why should you always keep business decisions and files inside official Microsoft 365 apps instead of personal messaging apps?', 'Official Microsoft 365 apps enforce company security, retention policies, access revocation when employees leave, and audit compliance—whereas personal apps create unmonitored security risks and lost records.'],
  },
  {
    id: 289, mod: 25, tInMod: 11,
    title: 'Creating a Responsible Copilot Usage Checklist',
    sub: 'Your Personal & Team 8-Point Responsible Copilot Playbook for Daily Office Excellence',
    coreEn: 'Distill all security, privacy, and verification skills into an ==8-Point Responsible Copilot Playbook== covering ==Tenant Shield, Least-Privilege Permissions, Grounded Sources, Deterministic Excel Math, Citation Checks, Accessibility, Human Tone, and Full Accountability==!',
    coreHi: 'Saari security aur quality habits ko ek ==8-Point Responsible Copilot Playbook== mein bind karo—Tenant Shield, Permissions, Grounded Source, Excel Math, Citations, Accessibility, Human Voice aur Accountability!',
    analogyTitle: 'Master Pilot Safety Card Carried on Every Single Flight',
    analogyEn: 'Sharing this crisp 1-page Responsible Copilot Checklist with your team instantly positions you as a trusted AI Champion in your company!',
    analogyHi: 'Ye 1-page Responsible Copilot Checklist apni team ke saath share karte hi aap office mein trusted AI Champion ban jaate ho!',
    steps: [['Security First', 'Work Copilot Shield ON + Sensitivity Label + Audited Perms'], ['Prompt Smart', 'Goal + Context + Grounded `/file` + "Not Found" guardrail'], ['Verify Rigorously', 'Check Citations, Excel Control Total = 0 & Names/Dates'], ['Own & Polish', 'Humanize tone, run Accessibility Check & stand behind output']],
    jobUse: 'Ready-to-use team governance card that impresses managers, HR, and IT security leads.',
    mistake: 'Knowing security rules in theory while skipping checks whenever a deadline feels tight.',
    proHabit: 'Pin this 8-point checklist on your desktop or Teams channel—especially when rushing under tight deadlines!',
    rule: 'Fast AI + Disciplined 8-Point Checklist = Unstoppable, Trusted Professional.',
    prompt: `8-POINT RESPONSIBLE COPILOT PLAYBOOK:
[ ] 1. Enterprise Work Copilot active (Green Shield) — zero Shadow AI
[ ] 2. Permissions & Sensitivity Labels verified (Least Privilege)
[ ] 3. Prompt includes Goal + Context + Source (/file) + Format
[ ] 4. Math done in real Excel Formulas & Control Total = 0.00
[ ] 5. Citations, dates, names & negations verified against source
[ ] 6. Robotic clichés removed; natural human tone applied
[ ] 7. Editor (F7) + Accessibility Checker passed
[ ] 8. Human owner takes 100% accountability before hitting Send`,
    out: 'Complete personal & team Responsible Copilot governance standard.',
    q1: ['How can an employee position themselves as a Responsible AI Champion in their workplace?', 'By following a consistent verification and privacy checklist on every AI-assisted deliverable, keeping all work inside Enterprise Copilot, sharing clean prompt templates and governance tips with teammates, and maintaining 100% human accountability.'],
  },

  // ═══ MODULE 26: Final Capstone and Assessment (290..301) ═══
  {
    id: 290, mod: 26, tInMod: 1,
    title: 'Select a Real-World Business Scenario',
    sub: 'Capstone Step 1: Picking a High-Impact Scenario (Sales Ops, HR Onboarding, or Vendor Ops)',
    coreEn: 'Kick off your ==Final Microsoft 365 + Copilot Capstone== by choosing ==1 realistic, end-to-end corporate scenario== (e.g., ==Quarterly Retail Sales Turnaround, Automated Employee Onboarding, or Vendor Invoice & Approval Ops==) that naturally uses all 7 M365 apps!',
    coreHi: 'Apne ==Final M365 + Copilot Capstone== ke liye ==1 real-world business scenario== chuno (jaise ==Quarterly Sales Turnaround, HR Onboarding ya Vendor Approval Ops==) jisme saare 7 M365 apps naturally use hon!',
    analogyTitle: 'Choosing the Exact Real-World Problem Your Portfolio Will Solve',
    analogyEn: 'Pick a scenario aligned with your target job role—Finance/Analyst picks Sales & Margin Analysis, HR/Admin picks Employee Onboarding & Feedback, Ops picks Vendor Approval Automation!',
    analogyHi: 'Apne target job role ke hisaab se scenario chuno—Analyst ke liye Sales Dashboard, HR ke liye Onboarding, Ops ke liye Approval Automation!',
    steps: [['Pick Target Role', 'Align scenario with the exact job you want to land'], ['Define Pain Point', 'What manual bottleneck costs time/money today?'], ['Map 7 M365 Apps', 'Verify Word, Excel, PPT, Outlook, Teams, Forms & Automate fit'], ['Name Project Hub', 'Create clean SharePoint/Teams workspace for Capstone']],
    jobUse: 'Creates a bespoke, industry-relevant portfolio centerpiece for interviews.',
    mistake: 'Picking a vague toy topic ("My Hobby") instead of a realistic corporate business workflow.',
    proHabit: 'Frame your capstone with a real stakeholder persona (e.g., `"VP of Retail Operations"`).',
    rule: 'Role-Aligned Business Scenario + Real Stakeholder Persona = Job-Winning Capstone.',
    prompt: `3 High-Impact Capstone Scenarios:
1. Sales & Ops: Q4 Retail Sales Analysis, Dashboard & Expansion Pitch
2. HR & People Ops: Automated Employee Onboarding + 30-Day Feedback Loop
3. Finance/Admin: Expense & Vendor Request Automation + Monthly Budget Review`,
    out: 'Clear, role-targeted Capstone scenario locked and ready.',
    q1: ['Why should you align your Microsoft 365 Capstone scenario with your target career role?', 'When your portfolio directly solves a realistic problem from your target industry (Sales Ops, HR, Finance, or Admin), hiring managers immediately visualize you succeeding in their open role on Day 1.'],
  },
  {
    id: 291, mod: 26, tInMod: 2,
    title: 'Define Requirements and Success Criteria',
    sub: 'Capstone Step 2: Locking Scope, Deliverables, KPIs &Measurable Success Metrics',
    coreEn: 'Define a crisp ==1-Page Capstone Requirements Spec== before building: list ==exact deliverables (7 apps)==, ==target audience==, ==measurable success criteria== (e.g., `0.00 reconciliation diff`, `100% green flow`, `<2 min form`, `90%+ Editor score`), and ==deadlines==.',
    coreHi: 'Build shuru karne se pehle ==1-Page Requirements Spec== likho: ==exact deliverables, audience, measurable success criteria (`0.00 diff`, `green flow`, `90%+ Editor`) aur timeline==!',
    analogyTitle: 'Architect Signed Spec Sheet Defining Exactly What "Done" Means',
    analogyEn: 'Clear success criteria keep your capstone focused, prevent scope creep, and give you a crisp checklist to verify perfection at the end!',
    analogyHi: 'Clear success criteria hone se aapka capstone focused rehta hai aur end mein quality check karna 100% objective ho jata hai!',
    steps: [['List Deliverables', 'Word Report, Excel Dashboard, PPT Deck, Email/MoM, Form, Flow'], ['Set Quality Gates', 'Control Total = 0, Editor >= 90%, Accessibility = 0 Errors'], ['Define ROI Target', 'e.g., "Reduce weekly reporting & approval effort by 70%"'], ['Save In SharePoint', 'Store `00_Capstone_Scope.docx` in your project folder']],
    jobUse: 'Mirrors real corporate Business Requirements Document (BRD) discipline.',
    mistake: 'Jumping randomly between apps without clear completion standards.',
    proHabit: 'Write measurable acceptance criteria for every single deliverable upfront.',
    rule: 'Clear Scope + Measurable Quality Gates = Predictable 10/10 Execution.',
    prompt: `Capstone Acceptance Criteria:
- Word: Auto TOC + Verified KPI Table + Bookmarked PDF
- Excel: Clean tblSales + Reconciled Pivots (diff=0) + Connected Slicers
- PPT: 8 Slides + Action Titles + Slide 2 Exec Summary + Speaker Notes
- Automate: Green Approve & Reject runs + Try/Catch + Runbook`,
    out: 'Locked, measurable Capstone blueprint.',
    q1: ['What is the difference between a vague goal and a measurable success criterion in a project spec?', 'A vague goal says "make a good Excel dashboard," whereas a measurable success criterion says "1-screen Gridlines-OFF dashboard with 4 Formula-Bar KPI cards, 3 connected Slicers, and a 0.00 reconciliation check against raw data."'],
  },
  {
    id: 292, mod: 26, tInMod: 3,
    title: 'Create the Required Business Documents',
    sub: 'Capstone Step 3: Authoring Your Project Charter, Report & SOP in Word + Copilot',
    coreEn: 'Produce your ==Capstone Word Suite== on SharePoint: ==1) Executive Business Report== (Heading Styles, Auto TOC, KPI Table, Bookmarked PDF) and ==2) 1-Page Standard Operating Procedure (SOP)==—drafted with ==Copilot `/file`== and verified via Editor & Accessibility!',
    coreHi: 'SharePoint par apna ==Capstone Word Suite== banao: ==1) Executive Business Report (Auto TOC + KPI Table + PDF)== aur ==2) 1-Page SOP== — Copilot se draft aur Editor + Accessibility se verified!',
    analogyTitle: 'Official Project Bible & Operations Manual Ready for Executive Sign-Off',
    analogyEn: 'Clean Heading 1/2 styles in your Word Report make Step 5 (PowerPoint Copilot conversion) effortless!',
    analogyHi: 'Word Report mein clean Heading 1/2 lagane se Step 5 mein PowerPoint deck banana 10x aasaan ho jayega!',
    steps: [['Draft Report', 'Copilot grounded draft -> Heading 1/2 + Auto TOC'], ['Draft 1-Page SOP', 'Numbered repeatable steps with bold UI button names'], ['Verify & Polish', 'Numbers check, `Ctrl+F "["`, F7 Editor + Accessibility'], ['Export PDF', 'Save bookmarked PDF into `04_Final_Approved`']],
    jobUse: 'Showcases end-to-end corporate writing and document engineering mastery.',
    mistake: 'Skipping the SOP or forgetting to update the Table of Contents before PDF export.',
    proHabit: 'Save both `.docx` and `.pdf` cleanly named with ISO dates (`2026-11-25_...`).',
    rule: 'Grounded Draft + Real Headings + Clean QA = Executive Word Deliverables.',
    prompt: `Capstone Word Deliverables:
1. 2026-11-25_Capstone_Business_Report.docx (+ .pdf)
2. 2026-11-25_Capstone_Process_SOP.docx (+ .pdf)`,
    out: 'Two polished, accessible, portfolio-ready Word documents.',
    q1: ['Why is pairing a Business Report with a 1-page SOP a strong combination in a corporate capstone?', 'The Business Report proves you can analyze data and recommend executive decisions, while the SOP proves you can operationalize repeatable processes so any teammate can sustain the solution.'],
  },
  {
    id: 293, mod: 26, tInMod: 4,
    title: 'Analyze Data and Build an Excel Dashboard',
    sub: 'Capstone Step 4: Clean 4-Tab Excel Model With Reconciled Pivots, KPIs & Live Slicers',
    coreEn: 'Build your ==Capstone 4-Tab Excel Workbook== (`00_Raw`, `01_Clean_Table`, `02_Pivots_&_Checks`, `03_Executive_Dashboard`) featuring ==`Ctrl+T`, `XLOOKUP`/`SUMIFS`, `0.00` Control Total, 4 Linked KPI Cards, 3 Spotlighted Charts, Connected Slicers & Verified Copilot Summary==!',
    coreHi: 'Apna ==Capstone 4-Tab Excel Workbook== banao (`00_Raw`, `01_Clean`, `02_Pivots`, `03_Dashboard`) — `Ctrl+T`, `XLOOKUP`/`SUMIFS`, `0.00` Reconciliation, 4 live KPI Cards, connected Slicers aur verified Copilot summary ke saath!',
    analogyTitle: 'The Analytical Engine Powering Every Number in Your Entire Capstone',
    analogyEn: 'Every KPI in your Word Report, PowerPoint Deck, and Outlook Email flows straight from this single reconciled Excel workbook!',
    analogyHi: 'Aapke Word Report, PPT Deck aur Outlook Email ka har ek number isi reconciled Excel workbook se aayega!',
    steps: [['Clean & Formula', 'Deduplicate, `TRIM/PROPER`, `Ctrl+T`, Profit/Margin/`XLOOKUP`'], ['Pivots & Check', 'Monthly Trend + Region/Category Pivots + `=0.00` Check'], ['Interactive Dash', 'Gridlines OFF, 4 Linked KPIs, 3 Charts, Connected Slicers'], ['Copilot Brief', 'Verified 4-bullet Executive Summary beside dashboard']],
    jobUse: 'The core quantitative centerpiece of your Microsoft 365 portfolio.',
    mistake: 'Leaving unformatted decimals, disconnected Slicers, or unverified AI formulas.',
    proHabit: 'Test every single Slicer click AND verify your Reconciliation Check stays `RECONCILED OK`!',
    rule: '4 Clean Tabs + 0.00 Reconciliation + Connected Slicers = Ironclad Analytics.',
    prompt: `Capstone Excel Sign-Off:
[x] 4 color-coded tabs (Raw, Clean, Pivots, Dashboard)
[x] Zero #DIV/0!, #VALUE!, #N/A errors anywhere
[x] Control Total Check = 0.00 (RECONCILED OK)
[x] All Slicers & Timeline update every KPI card & chart live`,
    out: 'Executive-grade interactive Excel workbook ready for live demo.',
    q1: ['What are the 4 standard tabs of a clean, audit-ready Excel capstone workbook?', '1) 00_Raw_Backup (untouched source data), 2) 01_Clean_Table (deduplicated, formatted Ctrl+T Table), 3) 02_Pivots_&_Checks (PivotTables and 0.00 Reconciliation Check), and 4) 03_Executive_Dashboard (Gridlines-OFF KPI cards, charts, Slicers, and Takeaways).'],
  },
  {
    id: 294, mod: 26, tInMod: 5,
    title: 'Develop a Supporting Presentation',
    sub: 'Capstone Step 5: 8-Slide Branded Executive Deck Grounded in Your Word Report & Excel Charts',
    coreEn: 'Create your ==Capstone 8-Slide Executive Presentation== in PowerPoint: ==Branded Slide Master, Word-to-PPT Copilot draft, SCQA narrative, Action Titles, standalone Slide 2 Executive Summary, spotlighted Excel charts, Speaker Notes, and compressed PDF==!',
    coreHi: 'Apna ==Capstone 8-Slide Executive Deck== banao: ==Branded Slide Master, Copilot Word-to-PPT, SCQA story, Action Titles, Slide 2 Exec Summary, Excel charts, Speaker Notes aur PDF==!',
    analogyTitle: 'Executive Storytelling Showcase Turning Your Hard Work Into a Clear "YES!"',
    analogyEn: 'Keep every slide crisp (`<=50 words`), ensure every figure matches your Excel Dashboard 100%, and rehearse with PowerPoint Speaker Coach!',
    analogyHi: 'Har slide crisp (`<=50 words`) rakho, Excel Dashboard se 100% numbers match karo, aur Speaker Coach se practice karo!',
    steps: [['Branded Draft', 'Open Template -> Copilot from `/Capstone_Report.docx`'], ['Action Titles', 'Apply SCQA story arc + Slide 2 Executive Summary'], ['Real Excel Visuals', 'Embed 2 spotlighted Excel charts + Source footers'], ['Notes + PDF', 'Add Speaker Notes -> F5 Numbers Pass -> Export PDF']],
    jobUse: 'Demonstrates boardroom-level storytelling and visual design polish.',
    mistake: 'Leaving generic AI stock images instead of embedding your real Excel Dashboard charts.',
    proHabit: 'Add 2 hidden Appendix slides (Methodology & Data Dictionary) to impress during tough Q&A!',
    rule: 'SCQA Story + Action Titles + Real Excel Charts + Speaker Coach = Winning Deck.',
    prompt: `Capstone Deck QA Gate:
[x] Slide 2 stands alone as 60-second Executive Summary
[x] All 8 slide titles tell the complete story alone
[x] Every slide figure matches Excel Master 100%
[x] Speaker Notes added & Rehearse with Coach passed`,
    out: 'Boardroom-ready `.pptx` and `.pdf` capstone presentation.',
    q1: ['What should you include in Hidden Appendix slides at the end of a Capstone presentation?', 'Supporting backup data such as detailed methodology, full breakdown tables, reconciliation proofs, or workflow technical diagrams—kept hidden during the main 5-minute pitch yet ready in 1 click for Q&A.'],
  },
  {
    id: 295, mod: 26, tInMod: 6,
    title: 'Prepare Emails and Meeting Documentation',
    sub: 'Capstone Step 6: Stakeholder Status Email, Time-Boxed Agenda & Verified Teams MoM',
    coreEn: 'Produce your ==Capstone Communication Pack== using Outlook + Teams + Copilot: ==1) Time-Boxed 25-Min Review Agenda==, ==2) Verified 1-Page Teams Copilot Meeting Minutes (Decisions + Owner/Due Table)==, and ==3) Crisp 120-Word Friday Executive Status Email==!',
    coreHi: 'Apna ==Capstone Communication Pack== taiyaar karo: ==1) 25-Min Time-Boxed Agenda==, ==2) Verified Teams Copilot Meeting Minutes (Decisions + Action Table)== aur ==3) 120-Word Friday Executive Status Email==!',
    analogyTitle: 'Complete Executive Communication Trail Keeping Every Stakeholder Aligned',
    analogyEn: 'Shows employers you do not just build files—you lead meetings, align stakeholders, and drive clear written follow-through!',
    analogyHi: 'Ye pack dikhata hai ki aap sirf files nahi banate—aap meetings lead karte ho aur stakeholders ko clearly align rakhte ho!',
    steps: [['1. Agenda', '25-min timed agenda with pre-read links & target decision'], ['2. Teams MoM', 'Verified Decisions + Action Table (Single Owner + Exact Date)'], ['3. Status Email', '120-word RAG update + Coaching by Copilot check'], ['4. Save In Hub', 'Archive communication pack neatly in SharePoint `01_Briefs`']],
    jobUse: 'Proves complete real-world corporate communication fluency.',
    mistake: 'Sending uncoached rambling emails or leaving action items without named owners.',
    proHabit: 'Verify every date, link, and owner across Agenda, MoM, and Follow-Up Email.',
    rule: 'Timed Agenda -> Verified Teams MoM -> Crisp 120-Word Follow-Up = Execution Leadership.',
    prompt: `Capstone Communication Pack:
1. Review_Meeting_Agenda.docx (25-min time-boxed)
2. Capstone_Teams_MoM.docx (Decisions + Action Table)
3. Weekly_Executive_Status_Email.txt (RAG + 3 Wins + 1 Ask + Links)`,
    out: 'Complete executive communication artifact set.',
    q1: ['Why are Agendas, Meeting Minutes, and Weekly Status Emails included in a Microsoft 365 Capstone?', 'Because technical deliverables alone rarely create business impact unless paired with crisp meeting facilitation, documented decisions, and proactive stakeholder communication.'],
  },
  {
    id: 296, mod: 26, tInMod: 7,
    title: 'Create a Microsoft Forms Survey',
    sub: 'Capstone Step 7: Stakeholder Intake / Feedback Form With Branching & Live Excel Sync',
    coreEn: 'Build your ==Capstone Microsoft Form== (either a ==Request Intake Form== feeding Power Automate OR a ==2-Minute Stakeholder Feedback Survey==) featuring ==unbiased Choice/Rating Qs, smart Branching, Mobile Preview check, and live Excel sync==!',
    coreHi: 'Apna ==Capstone Microsoft Form== banao (Intake Form ya 2-Min Feedback Survey) — ==unbiased Choice/Rating Qs, smart Branching, Mobile Preview aur live Excel sync== ke saath!',
    analogyTitle: 'Clean Digital Front Door Capturing Structured Real-World Input Effortlessly',
    analogyEn: 'Pair Choice dropdowns with Branching so respondents finish in under 90 seconds and your downstream Excel/Power Automate pipeline gets 100% clean data!',
    analogyHi: 'Choice dropdowns aur Branching se user 90 second mein form bhar deta hai aur Excel/Power Automate ko 100% clean data milta hai!',
    steps: [['Design Cleanly', '6-8 focused Qs (Choice + 1-5 Rating + Number Restrictions)'], ['Add Branching', 'Route low ratings or specific categories to follow-up Qs'], ['Test All Paths', 'Verify PC + Mobile Preview + Incognito link check'], ['Connect Live', 'Link directly to Excel/SharePoint & Copilot summary']],
    jobUse: 'Completes the user-input and feedback-collection loop of your capstone.',
    mistake: 'Using free-text boxes for categories or forgetting to test branching end-to-end.',
    proHabit: 'Submit 3-5 realistic test responses across different branches so your live charts and Excel PivotTables shine!',
    rule: 'Structured Inputs + Smart Branching + Live Excel Sync = Effortless Data Collection.',
    prompt: `Capstone Form Checklist:
[x] 6-8 unbiased questions (under 2 mins on Mobile)
[x] Choice dropdowns for clean downstream grouping
[x] Branching tested cleanly on every path
[x] 5 realistic test responses synced live to Excel`,
    out: 'Live, tested Microsoft Form integrated with your Capstone.',
    q1: ['Why should you submit 3–5 realistic test responses across all branches of your Capstone Microsoft Form?', 'It verifies that every branching path ends cleanly, confirms live Excel syncing works properly, and populates realistic sample data so your downstream PivotTables and Copilot summaries can be validated.'],
  },
  {
    id: 297, mod: 26, tInMod: 8,
    title: 'Automate a Business Workflow',
    sub: 'Capstone Step 8: Connecting Your Form, Tracker & Approvals in Power Automate',
    coreEn: 'Wire your ==Capstone Power Automate Cloud Flow== connecting ==Form Submission -> Validation Guard -> Log Row to Excel/SharePoint -> 1-Click Manager Approval in Teams/Outlook -> Update Status + Notify Requester + Try/Catch Failure Alert + 1-Page Runbook==!',
    coreHi: 'Apna ==Capstone Power Automate Flow== jodo: ==Form Submit -> Validation -> Excel/SharePoint Log -> 1-Click Approval -> Status Update + Notification + Try/Catch Alert + 1-Page Runbook==!',
    analogyTitle: 'Turning Static Office Files Into a Living, Self-Running Digital System',
    analogyEn: 'Testing both Approved and Rejected runs with green Run History screenshots proves true end-to-end automation competence!',
    analogyHi: 'Approved aur Rejected dono test runs ke green screenshots aapki end-to-end automation mastery ka pakka proof hain!',
    steps: [['Build Core Flow', 'Forms Trigger -> Get Details -> Validate -> Add Row'], ['Add Approval', 'Tiered Condition -> `Start and wait for an approval`'], ['Update & Notify', 'Update Row Status + Email Requester (with Comments)'], ['Harden & Doc', 'Add Try/Catch failure alert + Co-Owner + 1-Page Runbook']],
    jobUse: 'Elevates your Microsoft 365 portfolio well above traditional Office-only candidates.',
    mistake: 'Forgetting `float()` on numeric conditions or skipping the Try/Catch alert.',
    proHabit: 'Rename every Power Automate action cleanly so your flow screenshot looks crystal clear in your portfolio!',
    rule: 'Clean Named Steps + Validation + Green Approve/Reject Tests + Runbook = Pro Flow.',
    prompt: `Capstone Flow Verification:
[x] All actions cleanly named & Flow Checker = 0 warnings
[x] Approve test run = Green (Status updated + Email sent)
[x] Reject test run = Green (Status updated + Comments sent)
[x] Try/Catch alert + Co-Owner + 1-Page Runbook complete`,
    out: 'Live, battle-tested Power Automate business workflow.',
    q1: ['Why does renaming every action clearly inside Power Automate matter for both teamwork and portfolio demos?', 'Clear names like "Log_Request_to_Excel" and "Notify_Requester_Approved" make your workflow self-documenting, faster for teammates to troubleshoot, and immediately readable to interviewers reviewing your screenshots.'],
  },
  {
    id: 298, mod: 26, tInMod: 9,
    title: 'Review Security and Permissions',
    sub: 'Capstone Step 9: Running Your Full Responsible Copilot & Least-Privilege Governance Audit',
    coreEn: 'Before presenting your Capstone, execute your ==Complete Security & Governance Audit==: verify ==SharePoint Manage Access (Least Privilege)==, ==Sensitivity Labels==, ==Zero PII Leaks==, ==Accessibility Checker (0 Errors)==, and ==Responsible Copilot Verification== across all deliverables!',
    coreHi: 'Capstone present karne se pehle ==Complete Security & Governance Audit== chalao: ==SharePoint Manage Access, Sensitivity Labels, Zero PII Leaks, Accessibility Checker (0 Errors) aur Responsible Copilot Checks==!',
    analogyTitle: 'Enterprise Security Inspector Signing Off Your Solution for Production Launch',
    analogyEn: 'Highlighting your Security & Governance Audit during a job interview immediately signals senior-level corporate maturity!',
    analogyHi: 'Interview mein apna Security & Governance Audit dikhana aapko turant senior-level responsible professional sabit karta hai!',
    steps: [['Audit Permissions', 'Check SharePoint Manage Access + Forms Audience settings'], ['Check Privacy', 'Zero real PII/passwords; proper Sensitivity Labels applied'], ['Check Accessibility', 'Run Check Accessibility across Word, Excel & PowerPoint'], ['Check AI Integrity', 'Confirm every Copilot claim/number verified against source']],
    jobUse: 'Distinguishes enterprise-ready professionals from careless tool operators.',
    mistake: 'Leaving "Anyone can edit" links open or skipping Accessibility Check on final deliverables.',
    proHabit: 'Include a 1-slide `"Security, Governance & Quality Controls"` summary in your Capstone Appendix!',
    rule: 'Least Privilege + Zero PII + Accessibility Passed + Verified AI = Enterprise Ready.',
    prompt: `Capstone Governance Sign-Off:
[x] SharePoint/OneDrive permissions audited (Least Privilege)
[x] Forms anonymity & audience verified
[x] Accessibility Checker = 0 Errors (Word, Excel, PPT)
[x] All AI-assisted text & formulas verified against primary sources`,
    out: '100% compliant, enterprise-hardened Capstone package.',
    q1: ['Why do corporate hiring managers love seeing a Security & Governance slide in a Microsoft 365 portfolio?', 'Because real companies worry deeply about oversharing, PII leaks, unverified AI errors, and accessibility compliance—showing you built governance in from day one proves you can be trusted with real company data.'],
  },
  {
    id: 299, mod: 26, tInMod: 10,
    title: 'Test All Deliverables',
    sub: 'Capstone Step 10: End-to-End Dry Run Checking Links, Slicers, Numbers, Flows & PDFs',
    coreEn: 'Run a ==complete End-to-End Dry Run== testing every moving part: ==1) Cross-App Numbers Match (Excel == Word == PPT == Email)==, ==2) Click every Excel Slicer==, ==3) Open every exported PDF page-by-page==, ==4) Test Form -> Flow live==, and ==5) Rehearse 5-Min Pitch==!',
    coreHi: 'Ek complete ==End-to-End Dry Run== karo: ==1) Excel == Word == PPT == Email numbers match==, ==2) Saare Slicers click karo==, ==3) Har PDF page-by-page check karo==, ==4) Form -> Flow test karo== aur ==5) 5-Min Pitch rehearse karo==!',
    analogyTitle: 'Full Dress Rehearsal Catching Every Tiny Glitch Before Opening Night',
    analogyEn: 'Testing everything end-to-end 24 hours before presenting eliminates 100% of "Wait, why is this chart not updating?" surprises!',
    analogyHi: 'Presentation se pehle poora end-to-end dry run karne se live demo mein koi bhi surprise glitch nahi aata!',
    steps: [['Numbers Match Pass', 'Verify Excel == Word == PPT == Outlook totals 100%'], ['Interactive Tests', 'Click all Slicers + submit 1 live Form -> Flow test'], ['PDF Scroll Check', 'Inspect exported Word & PPT PDFs page by page'], ['Timed Rehearsal', 'Run 5-minute demo with timer + PowerPoint Speaker Coach']],
    jobUse: 'Instills rock-solid confidence and zero-defect execution standards.',
    mistake: 'Assuming everything still works after making "one tiny last-minute tweak" without re-testing!',
    proHabit: 'Never make untested edits 5 minutes before a live presentation—test every change end-to-end!',
    rule: 'Test Every Link, Slicer, Number, Flow & PDF Before Calling Anything Done.',
    prompt: `End-to-End Dry Run Matrix:
- Word Report PDF: Bookmarks work? Zero cutoffs? [x]
- Excel Dashboard: All Slicers live? Control Total = 0.00? [x]
- PowerPoint Deck: F5 smooth? Speaker Notes ready? [x]
- Forms + Automate: Live test logged & approved cleanly? [x]`,
    out: 'Zero-defect, thoroughly tested Microsoft 365 Capstone.',
    q1: ['What is the most important rule after making a late edit to your Excel model right before a presentation?', 'Re-run your Reconciliation Check, refresh all PivotTables (Alt+F5), verify the updated numbers flow accurately into your Word report, PowerPoint slides, and email summary, and re-export updated PDFs.'],
  },
  {
    id: 300, mod: 26, tInMod: 11,
    title: 'Present the Integrated Microsoft 365 Solution',
    sub: 'Capstone Step 11: Delivering Your Polished 5-Minute Executive Showcase & Portfolio Packaging',
    coreEn: 'Present your ==Integrated Microsoft 365 + Copilot Solution== with executive poise: ==Lead with Business Problem & Quantified ROI==, demo ==Live Excel Slicers + Power Automate Flow + Branded PPT/Word PDFs== in 5 crisp minutes, and package everything into a ==shareable Career Portfolio folder==!',
    coreHi: 'Apna ==Integrated Microsoft 365 + Copilot Solution== executive confidence ke saath present karo: ==Problem & ROI se shuru karo==, 5 minute mein ==Live Dashboard + Flow + Reports== dikhao, aur ==Career Portfolio== mein package karo!',
    analogyTitle: 'Graduation Showcase Launching You Straight Into High-Value Corporate Roles',
    analogyEn: 'Add 2 bullet points about your Capstone on your Resume & LinkedIn (`"Built automated M365 + Copilot workflow cutting weekly reporting & approval time by 75% with 0 reconciliation errors"`)!',
    analogyHi: 'Apne Resume aur LinkedIn par is Capstone ke real metrics daalo—recruiters aur hiring managers turant shortlist karenge!',
    steps: [['1. Strong Hook', 'Open with Business Challenge + ROI Saved (Slide 2)'], ['2. Crisp Live Demo', 'Click live Excel Slicers + show green Flow & Word PDF'], ['3. Explain Governance', 'Briefly highlight Reconciliation Check & Least Privilege'], ['4. Package Portfolio', 'Save clean PDFs + Screenshots + Resume bullets']],
    jobUse: 'Directly converts your learning into job interviews, freelance clients, and workplace promotions.',
    mistake: 'Finishing a great capstone and leaving it hidden on your laptop instead of showcasing it on Resume/LinkedIn!',
    proHabit: 'Turn your 5-minute capstone demo into a crisp 2-minute LinkedIn showcase post or portfolio PDF link.',
    rule: 'Build Great Work -> Present With ROI -> Showcase on Resume & LinkedIn.',
    prompt: `Resume Bullet Template:
"Designed an end-to-end Microsoft 365 + Copilot workflow (Excel KPI Dashboard, Power Automate tiered approval flow, Word Executive Report & PowerPoint deck), cutting weekly reporting and approval turnaround by 75% with 100% data reconciliation."`,
    out: 'Job-winning live showcase and recruiter-magnet portfolio.',
    q1: ['How should you describe your Microsoft 365 + Copilot Capstone project on your resume or in a job interview?', 'Use the Problem -> Solution -> Measurable Impact format: name the business bottleneck, list the integrated Microsoft 365 + Copilot tools you connected, and quantify the time saved, accuracy verified, and governance controls applied.'],
  },
  {
    id: 301, mod: 26, tInMod: 12,
    title: 'Complete the Final Knowledge Assessment',
    sub: 'Capstone Step 12: Comprehensive Readiness Check Across All 8 Tabs & 26 Modules',
    coreEn: 'Complete your ==Final Microsoft 365 + Copilot Mastery Assessment== verifying fluency across ==Cloud Foundations (OneDrive/SharePoint), Word + Copilot, Excel + PivotTables + XLOOKUP + Copilot, PowerPoint Storytelling, Outlook & Teams Productivity, Forms Analytics, Power Automate Flows, and Enterprise Security==!',
    coreHi: 'Apna ==Final Microsoft 365 + Copilot Mastery Assessment== complete karo—poore ==8 Tabs aur 26 Modules== (Word, Excel, PPT, Outlook, Teams, Forms, Power Automate, Copilot & Security) par apni 100% job-readiness prove karo!',
    analogyTitle: 'Final Black-Belt Belt Test Certifying Complete Modern Office Mastery',
    analogyEn: 'You have progressed from absolute zero to full-stack Microsoft 365 + Copilot mastery—ready to outperform on Day 1 in any corporate role without needing extra coaching!',
    analogyHi: 'Aap zero se full-stack Microsoft 365 + Copilot pro ban chuke ho—kisi bhi top company mein Day 1 se star performer banne ke liye 100% taiyaar!',
    steps: [['Review 8 Pillars', 'Cloud, Word, Excel, PPT, Outlook, Teams, Automate, Security'], ['Master Core Rules', '`Ctrl+T`, `XLOOKUP`, `0.00` Check, Headings, Least Privilege'], ['Practice Interviews', 'Use Topic Interview room to rehearse crisp spoken answers'], ['Keep Evolving', 'Apply Copilot + Automation daily to compound your speed']],
    jobUse: 'Certifies complete job-ready mastery across Business Analyst, MIS, Operations, HR, Finance, and Admin careers.',
    mistake: 'Stopping practice after finishing the course instead of applying 1 shortcut, formula, or automation every week at work.',
    proHabit: 'Every Monday, pick 1 repetitive manual task and ask: "Can Excel, Copilot, or Power Automate cut this time in half?"',
    rule: 'Master the Fundamentals + Leverage Copilot Responsibly + Automate Repeats = Unstoppable Career.',
    prompt: `Final 8-Pillar Mastery Recap:
1. Cloud: OneDrive (Me) vs SharePoint (We) + AutoSave + Version History
2. Word: Heading Styles + Auto TOC + Copilot /file + Bookmarked PDF
3. Excel: Ctrl+T + XLOOKUP + SUMIFS + Pivots + 0.00 Check + Slicers
4. PowerPoint: Slide Master + SCQA + Action Titles + Spotlight Charts
5. Outlook & Teams: 4D Triage + Templates + PPT Live + Copilot Recaps
6. Forms + Automate: Branching + Validation + Tiered Approval + Runbook
7. Security: Least Privilege + Sensitivity Labels + Zero Shadow AI + Verify!`,
    out: '100% certified, job-ready Microsoft 365 & Copilot AI Mastery!',
    q1: ['If a hiring manager asks "What makes you stand out in Microsoft 365 compared to an average Office user?", how should you answer?', 'Explain that you do not just type in isolated apps—you connect the entire cloud suite end-to-end (OneDrive/SharePoint Single Source of Truth, Heading-styled Word docs, reconciled Ctrl+T Excel dashboards with XLOOKUP & PivotTables, SCQA PowerPoint decks, Power Automate approval flows, and verified, security-conscious Copilot workflows).'],
  },
];

export const MS_OFFICE_TAB8_BLUEPRINTS: Record<number, DsTopicBlueprint> =
  expandMsOfficeSpecs(TAB8_SPECS);
