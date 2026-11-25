import { expandMsOfficeSpecs, type MsOfficeTopicSpec } from './msOfficeHelper';
import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

const TAB7_SPECS: MsOfficeTopicSpec[] = [
  // ═══ MODULE 21: Power Automate Fundamentals (233..244) ═══
  {
    id: 233, mod: 21, tInMod: 1,
    title: 'What Is Microsoft Power Automate?',
    sub: 'No-Code Workflow Automation Connecting Outlook, Teams, SharePoint, Forms & Excel',
    coreEn: '==Microsoft Power Automate== is Microsoft 365 ==no-code automation engine== that connects ==Outlook, Teams, SharePoint, Excel, Forms, and 1,000+ apps== so repetitive manual tasks (alerts, approvals, file routing, row logging) run automatically 24/7!',
    coreHi: '==Microsoft Power Automate== Microsoft 365 ka ==no-code automation tool== hai jo ==Outlook, Teams, SharePoint, Excel aur Forms== ko aapas mein jod kar repetitive kaam (alerts, approvals, data entry) 24/7 auto-run karta hai!',
    analogyTitle: 'Digital Conveyor Belt Moving Office Tasks Between Apps While You Sleep',
    analogyEn: 'When someone submits a Leave Request Form, Power Automate logs it in Excel, messages the manager in Teams for 1-click Approve/Reject, and emails the employee—zero manual copy-paste!',
    analogyHi: 'Form submit hote hi Power Automate Excel mein row add karta hai, manager ko Teams par Approve button bhejta hai, aur employee ko email kar deta hai—zero manual work!',
    steps: [['Pick Trigger', 'What event starts the flow? (New Form, Email, Schedule)'], ['Add Actions', 'What happens next? (Log to Excel, Post in Teams, Email)'], ['Test Safely', 'Run with test data & inspect green checkmarks'], ['Monitor Runs', 'Check Run History anytime to verify 100% reliability']],
    jobUse: 'One of the highest-paying modern Microsoft 365 skills for Operations, HR, IT, and Business Analysts.',
    mistake: 'Automating a broken, messy manual process before simplifying and documenting the steps first.',
    proHabit: 'Start with Microsoft built-in **Templates** gallery before building complex flows from scratch.',
    rule: 'Trigger (When X Happens) -> Actions (Do Y & Z Automatically) = Zero Repetitive Grunt Work.',
    prompt: `Classic 3-Step Cloud Flow:
1. Trigger: When a new Microsoft Form is submitted
2. Action 1: Add a row into an Excel Table (OneDrive/SharePoint)
3. Action 2: Post summary card in Teams channel`,
    out: '24/7 automated intake pipeline built in 10 minutes with zero code.',
    q1: ['What is Microsoft Power Automate and why is it valuable for non-programmers?', 'Power Automate is a low-code/no-code workflow automation service inside Microsoft 365 that connects apps like Forms, Excel, SharePoint, Outlook, and Teams using visual blocks—allowing any business user to automate repetitive notifications, approvals, and data logging without writing code.'],
  },
  {
    id: 234, mod: 21, tInMod: 2,
    title: 'Understanding Triggers and Actions',
    sub: 'The 2 Building Blocks of Every Cloud Flow + Dynamic Content Tokens',
    coreEn: 'Every Power Automate flow has ==1 Trigger== (the starting event, e.g., `"When a file is created in SharePoint"`) followed by ==1 or more Actions== (steps executed in sequence), passing data cleanly via ==Dynamic Content== tokens (`Lightning bolt` icon).',
    coreHi: 'Har Power Automate flow mein ==1 Trigger== (shuruat ka event) aur ==multiple Actions== (agle steps) hote hain—aur ek step se doosre step mein data ==Dynamic Content== tokens se pass hota hai!',
    analogyTitle: 'Doorbell Button (Trigger) Ringing the Chime & Turning on Porch Light (Actions)',
    analogyEn: 'Dynamic Content lets you insert `[Responder Email]` and `[Submission Time]` from Step 1 straight into Step 3 Outlook Email—personalizing every alert automatically!',
    analogyHi: 'Dynamic Content se Step 1 ka `[Responder Name]` aur `[Date]` seedha Step 3 ke email mein automatically fill ho jata hai!',
    steps: [['1 Trigger Only', 'Every cloud flow starts with exactly one Trigger'], ['Chain Actions', 'Add 1, 3, or 10 sequential Actions after the Trigger'], ['Use Dynamic Content', 'Click lightning icon to pass outputs from earlier steps'], ['Name Steps Clearly', 'Rename `Send email (V2)` -> `Email Manager Approval`']],
    jobUse: 'Mastering Triggers + Actions + Dynamic Content unlocks 90% of workplace automation.',
    mistake: 'Leaving default step names like `Condition 2`, `Apply to each 3`, `Send an email (V2) 2` so nobody can debug it later.',
    proHabit: 'Rename EVERY action clearly (e.g., `Log_Request_to_Excel`) so your flow reads like clean English.',
    rule: '1 Clear Trigger + Named Actions + Dynamic Content = Clean Maintainable Flow.',
    prompt: `Dynamic Content Flow Example:
Trigger: When a new email arrives (Subject contains "Invoice")
Action 1: Save attachment to SharePoint (/Invoices/2026)
Action 2: Post in Teams: "New invoice from @{From} saved: @{FileName}"`,
    out: 'Self-documenting, dynamic automated workflow.',
    q1: ['What is "Dynamic Content" in Power Automate?', 'Dynamic Content consists of clickable output variables generated by earlier triggers and actions (such as Sender Email, Form Answer, or File Link) that you insert into later actions so each run adapts automatically to live data.'],
  },
  {
    id: 235, mod: 21, tInMod: 3,
    title: 'Automated vs Instant vs Scheduled Flows',
    sub: 'Choosing the Exact Right Cloud Flow Type for Every Business Scenario',
    coreEn: 'Power Automate has ==3 core Cloud Flow types==: ==Automated== (runs on an event like New Email/Form), ==Instant== (runs manually when a human clicks a button), and ==Scheduled== (runs on a timer like Every Monday at 9:00 AM).',
    coreHi: 'Power Automate mein ==3 main Cloud Flows== hote hain: ==Automated== (event par khud chale), ==Instant== (button click par chale), aur ==Scheduled== (fixed time par chale, jaise har Monday 9 AM)!',
    analogyTitle: 'Motion-Sensor Light (Automated) vs Wall Switch (Instant) vs Alarm Clock (Scheduled)',
    analogyEn: 'New Form alert = Automated. "Request Sign-Off on Selected SharePoint File" = Instant. "Send Weekly Overdue Tasks Digest Every Friday 4 PM" = Scheduled!',
    analogyHi: 'Form alert = Automated; Selected file par button click = Instant; Har Friday 4 PM summary = Scheduled!',
    steps: [['Automated Flow', 'Event-driven: New Form, New Email, New SharePoint File'], ['Instant Flow', 'On-demand button in Power Automate, Teams, or SharePoint'], ['Scheduled Flow', 'Recurrence timer: Daily, Weekly (Mon 9 AM), or Monthly'], ['Match Trigger', 'Always pick the flow type that matches real business timing']],
    jobUse: 'Lets you architect clean daily digests, real-time intake bots, and 1-click approval buttons.',
    mistake: 'Using a Scheduled flow polling every 1 minute when an Automated event trigger works instantly and saves runs!',
    proHabit: 'Use **Scheduled Flows** for clean weekly/daily digests instead of spamming teammates with 40 real-time pings!',
    rule: 'Event -> Automated | Human Button -> Instant | Fixed Clock -> Scheduled.',
    prompt: `Flow Type Selection Guide:
- Auto-log every Forms submission -> Automated Cloud Flow
- Right-click SharePoint doc -> "Request Manager Approval" -> Instant Flow
- Every Monday 9 AM -> Email Open Tasks Summary -> Scheduled Flow`,
    out: 'Right automation architecture with zero wasted runs or spam.',
    q1: ['When should you choose a Scheduled Cloud Flow over an Automated Cloud Flow?', 'Choose a Scheduled flow when you want batched periodic summaries (like a daily 9 AM overdue-invoice digest or weekly Monday report) rather than firing immediately on every single item event.'],
  },
  {
    id: 236, mod: 21, tInMod: 4,
    title: 'Creating Your First Cloud Flow',
    sub: 'Hands-On 5-Minute Build: Copilot Flow Designer + Step-by-Step Verification',
    coreEn: 'Build your first flow in minutes at ==make.powerautomate.com==: describe what you want to ==Copilot in Power Automate== (or pick a Template), ==sign into your M365 connectors==, configure exact inputs, click ==Save -> Test -> Run==!',
    coreHi: '==make.powerautomate.com== par apna pehla flow 5 minute mein banao: ==Copilot== ko plain English mein bolo (ya Template chuno), ==connectors sign-in== karo, fields set karo aur ==Save -> Test== chalao!',
    analogyTitle: 'Snapping Together 3 Lego Bricks and Flipping the Power Switch',
    analogyEn: 'Type `"When a new response is submitted in Microsoft Forms, get response details and send me a Teams message"`—Copilot drafts all 3 blocks automatically!',
    analogyHi: 'Copilot mein plain English likho `"Jab naya Form submit ho toh mujhe Teams message bhejo"`—saare blocks khud jud jaate hain!',
    steps: [['Open Maker Portal', 'Go to make.powerautomate.com -> Create'], ['Use Copilot/Template', 'Describe trigger + actions in plain English'], ['Verify Connections', 'Confirm green checkmarks on Forms, Outlook, Teams'], ['Save & Test', 'Click Save -> Test (Manually) -> submit 1 real test']],
    jobUse: 'Gives beginners immediate hands-on automation wins on day one.',
    mistake: 'Forgetting the mandatory `"Get response details"` action right after `"When a new response is submitted"` in Microsoft Forms!',
    proHabit: 'Always run a real end-to-end test using your own email/test channel before pointing a flow at a live team channel!',
    rule: 'Build in Test Channel -> Verify Green Run History -> Switch to Production.',
    prompt: `Copilot Flow Builder Prompt:
"When a new response is submitted in Microsoft Forms, get the response details, add a row into my Excel table on OneDrive, and send a notification message to my test Teams channel."`,
    out: 'Working 3-step live cloud flow tested end-to-end.',
    q1: ['In Power Automate, why must you add a "Get response details" action immediately after the Microsoft Forms trigger?', 'Because the Forms trigger only provides the unique Response ID—you must call "Get response details" using that ID to retrieve the actual answers submitted by the user.'],
  },
  {
    id: 237, mod: 21, tInMod: 5,
    title: 'Connecting Microsoft 365 Services',
    sub: 'Standard M365 Connectors, Connection Accounts & Zero-Cost Native Integration',
    coreEn: 'Power Automate ==Standard Connectors== (Outlook, Teams, SharePoint, OneDrive, Excel Online, Forms, Approvals, Planner) are ==included with most Microsoft 365 plans at zero extra cost==—always verify which ==account connection== each step uses!',
    coreHi: 'Microsoft 365 ke ==Standard Connectors== (Outlook, Teams, SharePoint, Excel, Forms, Approvals) bina extra cost ke aapas mein jud jaate hain—bas har step ka ==connected account== verify rakho!',
    analogyTitle: 'Universal USB-C Cables Snapping Every Microsoft 365 App Together Seamlessly',
    analogyEn: 'For critical team flows, share the flow with a **Co-Owner** (or use a shared service account) so the automation does not stop working if you go on leave or change jobs!',
    analogyHi: 'Team ke critical flows mein hamesha ek **Co-Owner** add karo taaki aapke leave par jaane ya role badalne par automation band na ho!',
    steps: [['Use Standard First', 'Outlook, Teams, SharePoint, Excel, Forms, Planner = Standard'], ['Check Connections', 'Click 3 dots on any action -> confirm signed-in account'], ['Add Co-Owner', 'Flow Details -> Owners -> add teammate as backup Co-Owner'], ['Use Shared Files', 'Point Excel/SharePoint steps to Team SharePoint, not personal OneDrive']],
    jobUse: 'Prevents fragile "personal automation" that breaks the moment an employee leaves.',
    mistake: 'Building a critical department workflow connected to your personal OneDrive Excel sheet with zero Co-Owners.',
    proHabit: 'Point team flows to **SharePoint** + add at least **1 Co-Owner** on every production workflow.',
    rule: 'SharePoint Storage + Standard Connectors + Backup Co-Owner = Resilient Team Flow.',
    prompt: `Team-Safe Flow Architecture:
- Trigger/Data: Group Form + SharePoint Document Library / Excel Table
- Notifications: Team Channel (not private 1:1 DM)
- Ownership: Primary Owner + 1 Backup Co-Owner`,
    out: 'Enterprise-grade automation that survives vacations and role changes.',
    q1: ['Why should you add a Co-Owner to any important Power Automate flow you build for your department?', 'If only one person owns a flow and they leave the company or their account is disabled, the flow connections break and the automation stops. Adding a Co-Owner ensures uninterrupted business continuity.'],
  },
  {
    id: 238, mod: 21, tInMod: 6,
    title: 'Automating Email Notifications',
    sub: 'Clean Triggered Alerts, Filtered Rules & Anti-Spam Design in Outlook + Power Automate',
    coreEn: 'Automate ==targeted Outlook notifications== (new high-priority intake, client file uploaded, VIP email arrived) using ==Send an email (V2)== with ==Dynamic Content==—and ALWAYS add a ==Condition or Trigger Filter== so you never spam teammates!',
    coreHi: '==Send an email (V2)== aur ==Dynamic Content== se smart auto-alerts bhejo (naya high-priority ticket ya uploaded file)—aur hamesha ==Condition filter== lagao taaki inbox spam na ho!',
    analogyTitle: 'Smart Smoke Detector That Rings Only for Real Fire, Not Burnt Toast',
    analogyEn: 'Include a **direct clickable link** to the SharePoint file or Excel row right inside the automated email so the recipient can act in 1 click!',
    analogyHi: 'Automated email ke andar SharePoint file ya item ka **direct clickable link** zaroor daalo taaki receiver 1 click mein kaam kar sake!',
    steps: [['Define Trigger', 'e.g., New SharePoint file or High-Priority Form submit'], ['Add Guard Filter', 'Notify ONLY when `Priority = High` or `Amount > 25000`'], ['Format Email Body', 'Clear Subject + 3-bullet summary + clickable Direct Link'], ['Prevent Loops', 'Never trigger an email flow on your own automated emails!']],
    jobUse: 'Eliminates manual "Hey just letting you know a new file arrived" emails across ops teams.',
    mistake: 'Creating an infinite email loop (Trigger: When email arrives -> Action: Send email to myself -> infinite spam!).',
    proHabit: 'Always include a **direct item/file URL** and clear `[Automated]` tag in every notification email.',
    rule: 'Filter Before Notifying + Direct Action Link + Never Trigger Infinite Loops.',
    prompt: `Clean Automated Email Body:
Subject: [Action Needed] New High-Priority Request: @{Title}
Body:
- **Submitted By:** @{Requester}
- **Category:** @{Category}
- **Deadline:** @{DueDate}
- **Open Item:** @{LinkToItem}`,
    out: 'Crisp, zero-spam, 1-click actionable automated alerts.',
    q1: ['How can an automated Outlook email flow accidentally cause an infinite loop, and how do you prevent it?', 'If a flow triggers on "When a new email arrives" and sends an email back to the same inbox without a strict Subject/Sender filter, each sent email re-triggers the flow endlessly. Prevent it by filtering by specific Sender/Subject and excluding automated tags.'],
  },
  {
    id: 239, mod: 21, tInMod: 7,
    title: 'Creating Reminders',
    sub: 'Scheduled Recurrence Flows Checking Due Dates in SharePoint/Excel & Nudging Owners',
    coreEn: 'Build ==zero-forgetfulness Automated Reminders== using a ==Scheduled Flow (Daily at 9:00 AM)== that reads your ==Excel Table or SharePoint List==, filters rows where ==`Status != Done` AND `DueDate <= Today + 2 Days`==, and nudges owners in Teams/Outlook!',
    coreHi: '==Scheduled Flow (Daily 9 AM)== banao jo aapke ==Excel Table ya SharePoint List== mein check kare ki kaunsa task ==2 din mein due== hai (`Status != Done`), aur owner ko Teams/Outlook par polite reminder bhej de!',
    analogyTitle: 'Friendly Automated Project Coordinator Checking Deadlines Every Morning at 9 AM',
    analogyEn: 'Never miss a contract renewal, invoice follow-up, or training deadline again—your scheduled reminder flow checks 500 rows in 2 seconds every morning!',
    analogyHi: 'Contract renewal ho ya invoice due date—aapka 9 AM Scheduled Flow 500 rows 2 second mein check karke exact owner ko nudge kar deta hai!',
    steps: [['Daily Schedule', 'Recurrence trigger: Every weekday (Mon-Fri) at 9:00 AM'], ['Read Tracker', 'List rows present in Excel Table (or SharePoint Get items)'], ['Filter Due Soon', 'Condition: `Status ne Done` AND `DueDate <= addDays(utcNow(), 2)`'], ['Send Clean Nudge', 'Send 1 concise reminder (Teams/Outlook) with direct link']],
    jobUse: 'Saves operations, legal, HR, and finance teams from costly missed renewals and late fees.',
    mistake: 'Sending reminders on Saturday/Sunday or reminding people about tasks already marked `Completed`!',
    proHabit: 'Always check BOTH `Status != Completed` AND weekday-only scheduling (`Mon–Fri`) on reminder flows.',
    rule: 'Weekday 9 AM Schedule + Filter `Status != Done` + Clear Link = Smart Reminders.',
    prompt: `Reminder Condition Logic:
Trigger: Every Mon-Fri at 09:00 AM IST
Action 1: Get SharePoint/Excel items where Status != "Completed"
Condition: DueDate <= addDays(utcNow(), 2)
Yes -> Post friendly Teams nudge to Owner with item link`,
    out: 'Zero missed renewals or overdue deliverables across the team.',
    q1: ['What two filters are essential in a Scheduled Reminder flow so teammates do not get annoyed?', '1) Filter out items already marked Completed/Done, and 2) Schedule reminders only on business weekdays (Mon-Fri) at a sensible morning hour (e.g., 9:00 AM).'],
  },
  {
    id: 240, mod: 21, tInMod: 8,
    title: 'Connecting Forms with Excel',
    sub: 'Real-Time Zero-Copy-Paste Pipeline: Form Submit -> Get Details -> Add Row to Excel Table',
    coreEn: 'Connect ==Microsoft Forms -> Power Automate -> Excel Online (Business)== in 3 blocks: ==1) When a new response is submitted, 2) Get response details, 3) Add a row into a table==—mapping each Form answer cleanly to your `Ctrl+T` Excel Table columns!',
    coreHi: '==Microsoft Forms -> Power Automate -> Excel== ko 3 blocks mein jodo: ==1) New response submitted, 2) Get response details, 3) Add a row into a table==—har Form answer seedha aapke `Ctrl+T` Excel Table mein auto-save!',
    analogyTitle: 'Automatic Conveyor Pouring Every Submitted Form Straight Into Your Master Ledger',
    analogyEn: 'Remember: Power Automate can ONLY write rows into an **Official Excel Table (`Ctrl+T`)** stored on OneDrive/SharePoint—plain ranges will not even appear in the dropdown!',
    analogyHi: 'Yaad rakho: Power Automate sirf **Official Excel Table (`Ctrl+T`)** mein row add kar sakta hai—normal range dropdown mein dikhegi hi nahi!',
    steps: [['Prep Excel Table', 'Create `.xlsx` on SharePoint + format headers as `Ctrl+T` Table'], ['Step 1 & 2 Forms', 'Trigger: New response -> Action: Get response details'], ['Step 3 Add Row', 'Excel Online -> Add a row into a table -> map Dynamic fields'], ['Test End-to-End', 'Submit 1 real form -> watch new row appear live in Excel!']],
    jobUse: 'Powers IT ticket intake, expense logs, event RSVPs, sales lead capture, and HR requests.',
    mistake: 'Trying to connect Power Automate to an Excel sheet that was NOT formatted as a Table (`Ctrl+T`).',
    proHabit: 'Add a `Submitted_Timestamp` and `Status` (default `"New"`) column in Excel so downstream trackers work instantly!',
    rule: 'Excel Must Be a Cloud Table (Ctrl+T) -> Forms Trigger -> Get Details -> Add Row.',
    prompt: `3-Step Forms-to-Excel Pipeline:
1. Trigger: When a new response is submitted (IT_Request_Form)
2. Action: Get response details (Response Id)
3. Action: Add a row into a table (tblRequests):
   - Date: @{Submission time} | Requester: @{Responders Email}
   - Issue: @{Issue_Type} | Status: "New"`,
    out: 'Instant, 100% automated structured request log in Excel.',
    q1: ['Why does Power Automate fail to show your Excel sheet in the "Table" dropdown when setting up "Add a row into a table"?', 'Because the Excel Online connector requires the target data range to be formatted as an official Excel Table (Ctrl+T) saved on OneDrive or SharePoint.'],
  },
  {
    id: 241, mod: 21, tInMod: 9,
    title: 'Introduction to Approval Workflows',
    sub: '1-Click Approve/Reject Cards Inside Teams & Outlook With Full Audit Trail',
    coreEn: 'Power Automate ==Approvals connector (`Start and wait for an approval`)== sends interactive ==Approve / Reject buttons directly inside Teams & Outlook==—pausing the flow until the manager clicks, then logging the ==Outcome, Approver & Comments== automatically!',
    coreHi: 'Power Automate ka ==Approvals connector== manager ko seedha ==Teams aur Outlook ke andar 1-click Approve/Reject button== bhejta hai—jaise hi wo click karein, flow aage badh kar employee ko notify aur log update kar deta hai!',
    analogyTitle: 'Digital Rubber Stamp Delivering Instant Green-Light/Red-Light Decisions',
    analogyEn: 'No more chasing managers over 5 emails for leave, expense, or document sign-off—they click **Approve** right from Teams mobile in 3 seconds!',
    analogyHi: 'Leave ya expense approval ke liye 5 emails bhejne ki zaroorat nahi—manager Teams mobile par 3 second mein **Approve** daba dete hain!',
    steps: [['Start & Wait', 'Add Action: `Start and wait for an approval` (First to respond)'], ['Fill Card Info', 'Title, Assigned To (Manager), Summary & Item Link'], ['Branch On Outcome', 'Condition: `Outcome is equal to Approve`'], ['Notify & Log', 'Yes -> Email Approved + update Status | No -> Email Rejection + Comments']],
    jobUse: 'The #1 most requested enterprise Power Automate workflow across HR, Finance, Legal, and Ops.',
    mistake: 'Forgetting to pass the approver **Comments** back to the requester when a request is Rejected!',
    proHabit: 'Always include `Responses Approver comments` in the Rejection email so the requester knows WHY and how to fix it.',
    rule: 'Start & Wait for Approval -> Check Outcome -> Update Log + Notify With Comments.',
    prompt: `Approval Branch Logic:
- Action: Start and wait for an approval (Approve/Reject - First to respond)
- Condition: Outcome == "Approve"
  - If YES -> Update Excel Status = "Approved" + Email Requester
  - If NO  -> Update Excel Status = "Rejected" + Email Requester with Approver Comments`,
    out: 'Zero-email-chaos 1-click approval engine with full audit log.',
    q1: ['What is the difference between "Approve/Reject - First to respond" and "Everyone must approve" in Power Automate?', '"First to respond" completes as soon as any single assigned approver clicks Approve or Reject (great for backup managers), while "Everyone must approve" requires unanimous approval from all listed approvers before proceeding.'],
  },
  {
    id: 242, mod: 21, tInMod: 10,
    title: 'Conditions and Branching',
    sub: 'Smart If/Else Logic & Switch Cases Routing Requests by Amount, Department or Priority',
    coreEn: 'Use ==Condition (`If / Else`)== for 2-way splits (e.g., `Amount > 50000` -> VP Approval, else Manager Approval) and ==Switch== for 3+ clean routes (`IT`, `HR`, `Finance`, `Facilities`)—making flows intelligent and readable!',
    coreHi: '2-way decision ke liye ==Condition (`If / Else`)== (jaise `Amount > 50,000` toh VP approval, warna Manager) aur 3+ routes (`IT / HR / Finance`) ke liye ==Switch== use karo!',
    analogyTitle: 'Railway Track Switch Directing Every Train Onto the Exact Right Platform',
    analogyEn: 'Instead of nesting 5 ugly Conditions inside each other for 5 departments, a single **Switch** block cleanly routes IT -> IT Team, HR -> HR Team, Finance -> Finance Team!',
    analogyHi: '5 departments ke liye 5 nested If/Else mat banao—ek clean **Switch** block saare routes neatly handle kar leta hai!',
    steps: [['2-Way = Condition', 'Compare dynamic value (`is equal to`, `is greater than`)'], ['3+ Ways = Switch', 'Switch on `Department` -> clean Case per team + Default'], ['Watch Data Types', 'Convert Form text numbers using `float()` before `>` compare!'], ['Keep Default Case', 'Always handle unexpected values in Switch Default branch']],
    jobUse: 'Powers expense-tier approvals, IT helpdesk routing, and SLA priority escalation.',
    mistake: 'Comparing a Microsoft Forms amount `"60000"` (string!) against `50000` (number) without converting via `float()` or `int()`!',
    proHabit: 'Whenever comparing numeric answers from Microsoft Forms in a Condition, wrap the value in `float(...)` so comparisons never fail.',
    rule: '2 Paths = Condition | 3+ Paths = Switch | Wrap Form Numbers in float().',
    prompt: `Tiered Expense Approval Condition:
Condition: float(Amount) >= 50000
- YES -> Route to Finance VP + Manager Approval
- NO  -> Route to Direct Manager Approval Only`,
    out: 'Smart, policy-compliant automated routing.',
    q1: ['When should you use a Switch action instead of nested Condition (If/Else) actions in Power Automate?', 'Use Switch when routing a single field (such as Department, Region, or Request Type) into 3 or more distinct branches—it stays flat, visual, and much easier to maintain than deeply nested If/Else blocks.'],
  },
  {
    id: 243, mod: 21, tInMod: 11,
    title: 'Testing and Troubleshooting Flows',
    sub: 'Using Flow Checker, Run History Red X Inspection & Re-Running Failed Tests Safely',
    coreEn: 'Debug any Power Automate flow confidently using ==Flow Checker== (catches syntax/missing fields before saving), ==Test -> Automatically with recent trigger== (replays last test without resubmitting the form!), and ==Run History== (click the red `X` step to read exact Input/Output error messages).',
    coreHi: 'Flow debug karne ke 3 weapons: ==Flow Checker== (save se pehle errors pakde), ==Test with recent trigger== (baar-baar form bhare bina re-test), aur ==Run History== (red `X` par click karke exact error dekho)!',
    analogyTitle: 'Car Diagnostic Scanner Pointing Directly to the Exact Loose Wire',
    analogyEn: 'Clicking **Test -> Automatically -> With a recently used trigger** lets you fix a bug and re-run the exact same test data in 2 seconds—huge time-saver!',
    analogyHi: '**Test -> With a recently used trigger** se aap bug fix karke 2 second mein wahi test dubara chala sakte ho—baar-baar form bharne ki zaroorat nahi!',
    steps: [['Run Flow Checker', 'Top-right Flow Checker flags red errors before save'], ['Test Manually Once', 'Submit 1 real test to capture live payload'], ['Inspect Run History', 'Click failed run -> open red `X` step -> read Error Details'], ['Replay Automatically', 'Fix bug -> Test -> Automatically -> pick previous run!']],
    jobUse: 'Turns frustrating automation bugs into 2-minute systematic fixes.',
    mistake: 'Deleting an entire flow and rebuilding from scratch because 1 step showed a red X.',
    proHabit: 'Always inspect the **Inputs** and **Outputs** of the failing step in Run History—90% of bugs are a blank field, wrong data type, or expired connection!',
    rule: 'Flow Checker -> Inspect Red X Inputs/Outputs -> Replay Recent Trigger Test.',
    prompt: `Top 3 Common Power Automate Errors & Fixes:
1. "BadRequest / Invalid Email" -> Dynamic email field was blank (add null check)
2. "Table not found" -> Excel file renamed or not formatted as Ctrl+T Table
3. "Unauthorized / 401" -> Re-authenticate expired M365 connection`,
    out: 'Fast, calm, professional workflow troubleshooting.',
    q1: ['What is the fastest way to re-test a Power Automate flow after fixing a bug without manually filling out a Microsoft Form again?', 'Click Test -> Automatically -> "With a recently used trigger" and select a previous test run to replay the exact same payload instantly.'],
  },
  {
    id: 244, mod: 21, tInMod: 12,
    title: 'Understanding Connector and Licensing Limitations',
    sub: 'Standard vs Premium Connectors, Daily Run Quotas & 30-Day Approval Timeout Limits',
    coreEn: 'Know Power Automate key ==licensing & platform limits==: ==Standard Connectors== (M365 apps) are included, ==Premium Connectors== (SQL Server, Salesforce, HTTP, Dataverse) require a paid Power Automate Premium license, and ==cloud flows time out after 30 days== (including Approvals!).',
    coreHi: 'Power Automate ki limits samjho: ==Standard Connectors== (M365) free included hain, ==Premium Connectors== (SQL, HTTP, Salesforce) ke liye paid license lagta hai, aur ==Approval/Flow timeout 30 din== ka hota hai!',
    analogyTitle: 'Checking Road Weight Limits & Toll Rules Before Planning a Truck Route',
    analogyEn: 'Spot the little **diamond "Premium" badge** on a connector before designing a workflow so you do not build an entire solution only to hit a license wall at launch!',
    analogyHi: 'Koi connector add karne se pehle uska **Premium diamond badge** check kar lo taaki launch ke waqt license block na aaye!',
    steps: [['Standard vs Premium', 'M365 = Standard (included) | HTTP/SQL/Salesforce = Premium'], ['30-Day Timeout', 'Approvals auto-expire after 30 days -> add reminders!'], ['Excel Concurrency', 'SharePoint Lists scale much better than Excel for 1000+ runs/day'], ['Respect Limits', 'Batch loops & avoid unnecessary 1-minute polling']],
    jobUse: 'Makes you a realistic, architect-level Power Automate builder trusted by IT teams.',
    mistake: 'Building a high-traffic company-wide app writing 500 simultaneous rows into an Excel file (locks file!) instead of a SharePoint List.',
    proHabit: 'Use **Excel Tables** for small/medium trackers (<500 rows/mo) and **SharePoint Lists** for high-volume multi-user workflows!',
    rule: 'Check Premium Badge First | SharePoint List > Excel for High-Volume Flows | 30-Day Limit.',
    prompt: `Scaling Decision Guide:
- Small/Medium Team Tracker -> Excel Online Table (Standard)
- High-Volume Multi-User Intake -> SharePoint List (Standard, no file locks!)
- External ERP / Custom REST API -> HTTP / SQL Connector (Premium License)`,
    out: 'Scalable, license-compliant automation design every time.',
    q1: ['Why is a SharePoint List often better than an Excel file as the backend database for a busy Power Automate workflow?', 'Excel files can experience file-locking errors when multiple users or flows edit them simultaneously and have row-fetch limits, whereas SharePoint Lists handle concurrent automated writes cleanly using Standard M365 connectors.'],
  },

  // ═══ MODULE 22: Business Process Automation (245..256) ═══
  {
    id: 245, mod: 22, tInMod: 1,
    title: 'Mapping a Repetitive Business Process',
    sub: 'SIPOC & Swimlane Mapping: Simplify the Process BEFORE Automating a Single Step',
    coreEn: 'Before opening Power Automate, ==map the current process on 1 page==: ==Trigger (Start), Inputs, Exact Decision Rules, Exceptions, Owners, and Output==—eliminate useless steps FIRST so you never automate bad habits!',
    coreHi: 'Power Automate kholne se pehle ==1 page par poora process map== karo: ==Trigger, Inputs, Decision Rules, Exceptions aur Output==—bekaar steps pehle hatao, phir automate karo!',
    analogyTitle: 'Drawing a Clean Floor Plan Before Laying Concrete Foundations',
    analogyEn: 'Automating a broken 12-step process only makes mistakes happen faster—mapping it first often shrinks 12 clunky steps down to 4 crystal-clear automated steps!',
    analogyHi: 'Broken 12-step process ko automate karne se galtiyan aur tez hoti hain—pehle map karke usko 4 clean steps mein lao!',
    steps: [['Spot High-ROI Tasks', 'Repetitive + rule-based + high volume + error-prone'], ['Map 5 Elements', 'Trigger -> Inputs -> Rules/Approvals -> Exceptions -> Output'], ['Cut Dead Steps', 'Remove redundant approvals or duplicate spreadsheets'], ['Pick M365 Tools', 'Assign Forms (intake), SharePoint/Excel (log), Teams (action)']],
    jobUse: 'Core Business Analyst and Digital Transformation consulting methodology.',
    mistake: 'Jumping straight into Power Automate maker portal without clarifying edge cases and approval thresholds.',
    proHabit: 'Never build a flow until the process owner signs off on a simple 5-box flowchart!',
    rule: 'Simplify First -> Map Trigger/Rules/Exceptions -> Then Automate.',
    prompt: `1-Page Process Map (Expense Request):
1. Trigger: Employee submits Expense Form
2. Data: Log to SharePoint/Excel (Status = Pending)
3. Rule: If Amount >= ₹10,000 -> Finance + Manager; else Manager only
4. Exception: Rejected -> Email reason; No reply in 48h -> Reminder
5. Output: Approved -> Notify Payroll + Employee`,
    out: 'Crystal-clear automation blueprint ready to build in 15 minutes.',
    q1: ['Why should you always map and simplify a manual business process before building a Power Automate flow?', 'Because automating an inefficient or unclear process only speeds up errors and confusion. Mapping clarifies exact rules, removes redundant steps, and exposes edge cases upfront.'],
  },
  {
    id: 246, mod: 22, tInMod: 2,
    title: 'Automating Form Submission Notifications',
    sub: 'Instant Rich Teams Adaptive Cards & Confirmation Emails on Every New Request',
    coreEn: 'Build a ==dual-notification intake flow== on every Microsoft Form submission: ==1) Instant receipt confirmation email to the requester== (with ticket ID & SLA) AND ==2) Clean formatted alert in the owning Teams channel==!',
    coreHi: 'Har Microsoft Form submission par ==dual notification== bhejo: ==1) Requester ko instant confirmation email (ticket ID + SLA ke saath)== aur ==2) Owning Teams channel mein clean alert card==!',
    analogyTitle: 'Automated Order Confirmation SMS + Kitchen Ticket Printing Simultaneously',
    analogyEn: 'Requesters stop pinging `"Did you get my form?"` when they get an instant auto-receipt saying `"Received! Ticket #104 — IT will reply within 4 business hours."`',
    analogyHi: 'Instant auto-receipt milte hi requester baar-baar `"Mera form mila kya?"` puchhna band kar dete hain!',
    steps: [['Trigger + Details', 'Forms Trigger -> Get response details'], ['Log First', 'Save row to Excel/SharePoint to generate unique Ticket ID'], ['Confirm Requester', 'Send polite confirmation email with Ticket ID & SLA'], ['Alert Team', 'Post formatted summary card in dedicated Teams channel']],
    jobUse: 'Eliminates "lost request" complaints across HR, IT Support, Marketing, and Facilities.',
    mistake: 'Alerting the internal team while leaving the requester wondering if their form even worked!',
    proHabit: 'Always log to SharePoint/Excel BEFORE sending notifications so the Ticket ID is included in both alerts.',
    rule: 'Submit -> Log Ticket ID -> Confirm Requester + Alert Team Channel.',
    prompt: `Dual Intake Notification Pattern:
1. Log to SharePoint List -> gets unique ID (e.g., #204)
2. Email Requester: "Thanks! Request #204 logged. Expected response: 24h."
3. Teams Channel Post: "New Request #204 | @{Category} | Priority: @{Priority}"`,
    out: 'Responsive, zero-black-hole internal service desk.',
    q1: ['Why is sending an automated confirmation receipt with an SLA to the form submitter so valuable?', 'It reassures the submitter their request was captured cleanly, sets clear response-time expectations, provides a tracking ID, and eliminates repetitive "Did you get this?" follow-up pings.'],
  },
  {
    id: 247, mod: 22, tInMod: 3,
    title: 'Routing Requests to the Right Team',
    sub: 'Zero-Manual-Triage Routing Using Switch Cases & Department Lookup Tables',
    coreEn: 'Eliminate manual email forwarding by using a ==Switch block== (or ==Routing Lookup Table in SharePoint/Excel==) to automatically route incoming requests (`IT -> #IT-Support`, `HR -> #HR-Desk`, `Finance -> #Accounts-Payable`) to the exact owning team!',
    coreHi: 'Manual email forwarding band karo—==Switch block== ya ==Routing Table== se har request ko automatic sahi team (`IT`, `HR`, `Finance`) ke channel/email par route karo!',
    analogyTitle: 'Automated Airport Baggage Sorter Sending Every Bag to the Exact Flight Gate',
    analogyEn: 'Storing `Category -> Owner_Email` in a small SharePoint Lookup Table means when an HR Lead changes, you update 1 row in SharePoint without ever editing the flow!',
    analogyHi: 'Agar `Category -> Owner_Email` ko ek SharePoint table mein rakhoge toh manager badalne par flow edit kiye bina sirf 1 row update karni padegi!',
    steps: [['Standardize Intake', 'Use Choice dropdown in Forms (`IT`, `HR`, `Finance`, `Ops`)'], ['Route With Switch', 'Switch on `Category` -> send to exact team channel/mailbox'], ['Add Priority Fast-Track', 'If `Urgency = Critical`, also ping Team Lead in Teams'], ['Handle Default', 'Route any unexpected category to `General Ops` inbox']],
    jobUse: 'Cuts request triage time from hours to 2 seconds for shared service desks.',
    mistake: 'Hardcoding 10 individual employee emails inside flows that break whenever someone changes roles.',
    proHabit: 'Route to **Shared Mailboxes / Team Channels** (or a Lookup List) rather than individual personal emails whenever possible.',
    rule: 'Standard Dropdown + Switch/Lookup Table + Team Channels = Zero Manual Triage.',
    prompt: `Smart Request Router:
Switch on @{Category}:
- Case "IT Access" -> Post in #IT-Helpdesk + Log to IT Tracker
- Case "Payroll/HR" -> Post in #HR-Private + Email hr-desk@company.com
- Default -> Notify Operations Coordinator`,
    out: 'Instant, mistake-free request routing across departments.',
    q1: ['Why is storing team routing emails in a SharePoint Lookup List better than hardcoding personal emails inside a Power Automate flow?', 'When team leads change roles or go on leave, updating one row in the SharePoint List instantly updates routing without needing to open, edit, and re-test the Power Automate flow.'],
  },
  {
    id: 248, mod: 22, tInMod: 4,
    title: 'Creating Document Approval Workflows',
    sub: 'SharePoint File Upload -> Manager Review -> Auto-Move to Approved Folder + Metadata Update',
    coreEn: 'Automate ==SOP, Contract, and Proposal sign-offs==: when a draft is uploaded to SharePoint `/Drafts` (or triggered via Instant Button), Power Automate sends a ==Teams/Outlook Approval Card with the live file link==, updates ==`Status = Approved`==, and moves it to `/Approved`!',
    coreHi: '==Contracts aur SOPs ka approval automate== karo: SharePoint `/Drafts` par file aate hi manager ko ==file link ke saath Approval Card== jaye, approve hote hi ==Status = Approved== update ho aur file `/Approved` folder mein move ho jaye!',
    analogyTitle: 'Digital Inbox -> Manager Stamp -> Automatic Filing Into Official Cabinet',
    analogyEn: 'No more wondering "Is this SOP actually approved yet?"—only officially approved files ever reach the `/Approved` SharePoint library!',
    analogyHi: 'Ab koi nahi poochega "Kya ye policy final approved hai?"—kyunki `/Approved` folder mein sirf stamped files hi pahunchti hain!',
    steps: [['Trigger On Upload', 'SharePoint: When a file is created in `/Drafts` (or Instant)'], ['Set Pending Status', 'Update file properties: `Approval_Status = Pending`'], ['Request Approval', 'Start & wait for approval with direct `Link to item`'], ['Finalize On Outcome', 'Approved -> Move to `/Approved` + Notify | Rejected -> Notify with notes']],
    jobUse: 'Essential for Legal, Quality Assurance, Marketing creative sign-offs, and HR policies.',
    mistake: 'Triggering on every file edit (firing 20 approvals while the author is still typing!)—use an **Instant Button** or `/Ready_For_Review` folder instead!',
    proHabit: 'Trigger document approvals via **"For a selected file" (Instant)** or dropping into a **`02_Ready_For_Approval`** folder so work-in-progress saves never spam approvers!',
    rule: 'Draft Freely -> Move to Ready Folder (or Click Button) -> Approve -> Auto-Publish.',
    prompt: `Clean Document Sign-Off Flow:
1. Trigger: For a selected file in SharePoint (Instant)
2. Action: Start & wait for approval (includes direct file link)
3. Condition: Outcome == "Approve"
   - Yes: Update Status = "Approved" + Move file to /03_Approved
   - No:  Update Status = "Revision Needed" + Email author comments`,
    out: 'Audit-proof, zero-spam document governance workflow.',
    q1: ['Why is triggering a document approval on "When a file is modified" a bad idea in SharePoint?', 'With Cloud AutoSave enabled, Word saves changes every few seconds—triggering on every modification would flood the manager with dozens of duplicate approval requests while the author is still typing!'],
  },
  {
    id: 249, mod: 22, tInMod: 5,
    title: 'Sending Automated Follow-Up Reminders',
    sub: 'Escalating Stalled Approvals & Pending Tasks Politely After 48 Hours',
    coreEn: 'Keep approvals and tasks from dying in busy inboxes by adding ==automated 48-hour follow-up reminders== (using a ==Scheduled Check on `Status = Pending` items older than 2 days==) that gently nudge the approver before escalating!',
    coreHi: 'Busy inboxes mein atke hue approvals ko chalane ke liye ==48-hour automated reminder== lagao—Scheduled Flow check karega ki kaunsa `Pending` item 2 din se ruka hai aur polite nudge bhej dega!',
    analogyTitle: 'Polite Calendar Alarm Gently Nudging Before a Deadline Passes',
    analogyEn: 'A polite 48-hour nudge (`"Friendly reminder: Request #108 has been awaiting your 1-click approval since Tuesday"`) cuts average approval turnaround from 5 days down to 1 day!',
    analogyHi: '48 ghante par ek polite automated nudge average approval time ko 5 din se 1 din par le aata hai!',
    steps: [['Daily Check', 'Scheduled Flow runs Mon-Fri at 10:00 AM'], ['Find Stalled Items', 'Filter SharePoint/Excel: `Status = Pending` & `Age >= 2 days`'], ['Send Gentle Nudge', 'Teams/Outlook reminder with 1-click link to item'], ['Escalate If >5 Days', 'Optional CC backup manager if overdue >5 business days']],
    jobUse: 'Eliminates approval bottlenecks in procurement, hiring, and finance.',
    mistake: 'Sending aggressive reminders every 2 hours or forgetting to cap reminders once completed.',
    proHabit: 'Track a `Last_Reminded` date column so an item gets at most **1 polite nudge every 48 hours**, never hourly spam!',
    rule: 'Check Pending Age >= 48h -> 1 Polite Nudge -> Escalate Only If Truly Overdue.',
    prompt: `Anti-Spam Escalation Logic:
- Day 0: Initial Approval Request sent
- Day 2 (Still Pending): Friendly Teams nudge to Approver
- Day 5 (Still Pending): Escalate politely CCing Department Backup`,
    out: '3x faster approvals with zero human nagging required.',
    q1: ['How do you prevent a Scheduled Follow-Up flow from spamming an approver repeatedly on the same day?', 'Run the scheduled check once per business morning (Mon-Fri) and track a Last_Reminded timestamp (or trigger only on Day 2 and Day 5) while strictly filtering out Approved/Rejected items.'],
  },
  {
    id: 250, mod: 22, tInMod: 6,
    title: 'Organizing Documents in SharePoint',
    sub: 'Auto-Filing Email Attachments, Naming Files Consistently & Tagging Metadata Automatically',
    coreEn: 'Automate messy filing with Power Automate: when ==vendor invoices or client files arrive in Outlook/Forms==, automatically ==rename with `YYYY-MM-DD_Sender_FileName`==, save to the ==exact SharePoint Year/Month folder==, and populate ==Metadata Columns==!',
    coreHi: 'Email attachments ko manually download-upload mat karo—Power Automate se ==vendor invoices ko auto-rename (`YYYY-MM-DD_File`), sahi SharePoint folder mein save aur Metadata tag== karwao!',
    analogyTitle: 'Robotic Archivist Labeling, Stamping & Filing Every Incoming Paper Instantly',
    analogyEn: 'Every PDF invoice sent to `invoices@company.com` lands neatly in `/SharePoint/Invoices/2026-11/` already named with date & vendor—zero manual dragging!',
    analogyHi: '`invoices@company.com` par aane wala har PDF invoice khud `/Invoices/2026-11/` mein date aur vendor naam ke saath save ho jata hai!',
    steps: [['Filter Trigger', 'When new email arrives (Has Attachments = Yes, Subject = Invoice)'], ['Skip Signature Logos', 'Condition: `IsInline = false` AND ends with `.pdf`/`.xlsx`!'], ['Auto-Name & Save', 'Create file in SharePoint: `@{utcNow(yyyy-MM-dd)}_@{Name}`'], ['Tag Metadata', 'Update file properties: Vendor, Month, Status = New']],
    jobUse: 'Saves accounting, HR, and legal teams hours of repetitive attachment saving every week.',
    mistake: 'Forgetting to filter out inline email signature logos (`image001.png`), filling SharePoint with 400 tiny logo files!',
    proHabit: 'Always check `Attachment Is Inline = false` AND filter file extensions (`.pdf`, `.docx`, `.xlsx`) before saving email attachments!',
    rule: 'Filter Out Inline Logos -> Auto-Prefix Date -> Save to SharePoint -> Tag Metadata.',
    prompt: `Clean Invoice Auto-Filer Condition:
Condition:
  AND( Attachment Is Inline == false,
       endsWith(toLower(Attachment Name), '.pdf') )
YES -> SharePoint Create File: /Invoices/2026/@{utcNow('yyyy-MM-dd')}_@{Attachment Name}`,
    out: 'Spotless, automatically organized SharePoint document library.',
    q1: ['Why do automated Outlook-to-SharePoint attachment flows often accidentally save dozens of tiny company logo PNGs, and how do you fix it?', 'Email signatures contain embedded inline images treated as attachments. Add a Condition checking that "Attachment Is Inline" equals false AND the filename ends with .pdf, .docx, or .xlsx.'],
  },
  {
    id: 251, mod: 22, tInMod: 7,
    title: 'Updating Tracking Records in Excel',
    sub: 'Using Unique Key Columns (`Request_ID`) to Add, Lookup & Update Excel Rows Cleanly',
    coreEn: 'To ==update an existing Excel row== in Power Automate (`Update a row`), your Excel Table MUST have a ==Unique Key Column (`Request_ID`)==—use ==Add a row== on creation, then ==Update a row== by `Request_ID` when Status, Owner, or Approval changes!',
    coreHi: 'Power Automate mein existing Excel row update karne (`Update a row`) ke liye table mein ==Unique Key Column (`Request_ID`)== hona zaroori hai—creation par `Add a row`, status change par `Update a row`!',
    analogyTitle: 'Finding the Exact Locker by Its Unique Number Before Swapping the Tag Inside',
    analogyEn: 'Without a unique `Request_ID`, Power Automate cannot tell which of Rahul 4 expense rows to mark `"Approved"`—always generate a unique Key ID on row creation!',
    analogyHi: 'Bina unique `Request_ID` ke Power Automate samajh nahi payega Rahul ki 4 rows mein se kaunsi row `"Approved"` karni hai!',
    steps: [['Add Key Column', 'Include `Request_ID` (unique) in your `Ctrl+T` Excel Table'], ['Add Initial Row', '`Add a row into a table` with `Request_ID = guid()` or Form ID'], ['Update By Key', '`Update a row` -> Key Column: `Request_ID` -> Key Value: ID'], ['Keep Schema Fixed', 'Never rename Excel Table column headers after linking flow!']],
    jobUse: 'Keeps live status trackers 100% accurate from New -> Pending -> Approved -> Closed.',
    mistake: 'Renaming an Excel column header (`Status` -> `Current Status`) after connecting Power Automate—instantly breaking the flow!',
    proHabit: 'Lock/document Excel Table headers with a note `"Connected to Power Automate — Do NOT rename columns!"`',
    rule: 'Unique Key Column + Never Rename Connected Headers = Reliable Excel Updates.',
    prompt: `Full Lifecycle Excel Row Update:
1. On Submit -> Add a row (Request_ID = ResponseId, Status = "Pending")
2. On Manager Decision -> Update a row (Key: Request_ID = ResponseId):
   - Status: @{Outcome}
   - Approved_By: @{ApproverName}
   - Decision_Date: @{utcNow('yyyy-MM-dd')}`,
    out: 'Live, self-updating Excel tracker with complete audit columns.',
    q1: ['What happens if someone renames a column header in an Excel Table that is connected to a Power Automate flow?', 'The Power Automate Add/Update row actions will fail at runtime because they map fields strictly by exact column header names. Always document and protect headers on automation-connected tables.'],
  },
  {
    id: 252, mod: 22, tInMod: 8,
    title: 'Managing Failed Workflow Runs',
    sub: 'Configure Run After, Error-Alert Branches, Retry Policies & Resubmitting Failed Runs',
    coreEn: 'Production workflows never fail silently! Use ==Configure Run After (`has failed / timed out`)== to send an ==instant failure alert to the flow owner==, diagnose the red `X` in ==Run History==, fix the root cause, and click ==Resubmit== to recover the exact failed run!',
    coreHi: 'Production workflows ko chupchap fail mat hone do—==Configure Run After (`has failed`)== se owner ko ==instant error alert== bhejo, Run History mein fix karo, aur ==Resubmit== dabakar failed run recover kar lo!',
    analogyTitle: 'Fire Alarm + Spare Circuit Breaker Ensuring Zero Lost Customer Orders',
    analogyEn: 'If Excel was temporarily locked and 1 submission failed, fixing the lock and clicking **Resubmit** in Run History replays that exact submission with zero data loss!',
    analogyHi: 'Agar 1 run error se fail ho jaye, toh issue fix karke Run History mein **Resubmit** click karo—wahi data bina loss ke dobara process ho jayega!',
    steps: [['Wrap In Scope', 'Group main actions inside a `Scope: Try` container'], ['Add Catch Branch', 'Add `Scope: Catch` -> Configure Run After -> `has failed`'], ['Alert Owner', 'Inside Catch -> send Teams/Email alert with Run URL'], ['Fix & Resubmit', 'Inspect Run History -> fix bug -> click Resubmit']],
    jobUse: 'Separates amateur hobby flows from reliable enterprise production automations.',
    mistake: 'Building a critical flow and never checking Run History until a manager notices 3 weeks of missing data!',
    proHabit: 'Add a simple `Try / Catch` error-alert Scope on every business-critical flow so you know about failures in 30 seconds.',
    rule: 'Never Fail Silently -> Try/Catch Error Alert -> Fix Root Cause -> Resubmit.',
    prompt: `Try / Catch Error-Handling Pattern:
[Scope: Try] -> Get Form Details -> Add Excel Row -> Send Approval
[Scope: Catch] (Run After: Try has failed / timed out)
  -> Send Teams Alert to Flow Owner: "Flow Failed! Check Run History immediately."`,
    out: 'Zero silent data loss and fast recovery on any glitch.',
    q1: ['What does the "Resubmit" button in Power Automate Run History do?', 'It re-runs the workflow using the exact original trigger payload from a failed or past run—allowing you to recover missed requests cleanly after fixing a temporary error or connection issue.'],
  },
  {
    id: 253, mod: 22, tInMod: 9,
    title: 'Handling Duplicate and Invalid Requests',
    sub: 'Input Validation Guards & Duplicate Checks Before Writing Dirty Data',
    coreEn: 'Protect downstream trackers with ==two simple guardrails== right after your trigger: ==1) Input Validation== (check required fields are not blank and `Amount > 0`), and ==2) Duplicate Check== (query existing rows by Key/Email+Date before inserting)!',
    coreHi: 'Trigger ke turant baad ==2 guardrails== lagao: ==1) Input Validation== (blank fields ya negative amount reject karo) aur ==2) Duplicate Check== (insert se pehle check karo ki wahi request already logged toh nahi)!',
    analogyTitle: 'Bouncer Checking Valid Ticket & Hand-Stamp Before Letting Anyone Enter',
    analogyEn: 'Users frequently double-click Submit! Checking if an identical open request already exists prevents double-approvals and duplicate payroll entries!',
    analogyHi: 'Log galti se 2 baar Submit daba dete hain—Duplicate Check lagane se double approval aur duplicate entries 100% ruk jati hain!',
    steps: [['Validate At Source', 'Use Forms Required + Number Restrictions first'], ['Validate In Flow', 'Condition: check non-empty fields & `float(Amount) > 0`'], ['Check Existing', 'List rows filtered by unique key -> if `length > 0`, skip!'], ['Polite Reject Msg', 'Email requester clearly if input was invalid/duplicate']],
    jobUse: 'Prevents duplicate payments, duplicate IT tickets, and corrupt financial trackers.',
    mistake: 'Assuming users will never submit twice or type `"TBD"` into a budget field.',
    proHabit: 'Validate at BOTH layers: Microsoft Forms settings (front door) + Power Automate Condition (safety net).',
    rule: 'Validate Inputs + Check Duplicates Before Writing = Clean Automated Data.',
    prompt: `Duplicate Guard Logic:
1. List rows in Excel/SharePoint where Invoice_No eq '@{InvoiceNo}'
2. Condition: length(outputs('List_rows')?['body/value']) == 0
   - YES (New) -> Add row & Start Approval
   - NO (Duplicate) -> Notify requester "Invoice already submitted!"`,
    out: 'Zero duplicate approvals or corrupted records.',
    q1: ['Why is checking for duplicate submissions important in an automated invoice or expense approval flow?', 'Users often accidentally submit a form twice or resend the same invoice email—without a duplicate check on Invoice Number, the flow could trigger double approvals and duplicate payments.'],
  },
  {
    id: 254, mod: 22, tInMod: 10,
    title: 'Adding Human Approval Checkpoints',
    sub: 'Human-in-the-Loop (HITL) Design for High-Risk Financial, External & AI Actions',
    coreEn: 'Never let an automation or AI agent ==send external client emails, delete files, or approve large spend== unsupervised! Insert a ==Human-in-the-Loop (HITL) Approval Checkpoint== so AI/automation prepares the draft and a human clicks ==Approve== before execution.',
    coreHi: 'High-risk actions (external client emails, bade payments, file deletes) ko kabhi bina human check auto-run mat karo—beech mein ==Human-in-the-Loop Approval Checkpoint== lagao!',
    analogyTitle: 'Drafting a Bank Check Automatically While Requiring the Manager Real Signature',
    analogyEn: 'Let automation + Copilot draft the client response or compile the ₹2L purchase order in 5 seconds, then pause for a 1-click human green light before sending externally!',
    analogyHi: 'Automation aur AI 5 second mein draft bana dein, par client ko bhejne ya payment release karne se pehle human ka 1-click Approve zaroori rakho!',
    steps: [['Classify Risk', 'Low risk (internal log) = full auto | High risk = HITL'], ['Prepare Draft', 'Flow prepares summary, amount & proposed message'], ['Pause For Human', '`Start and wait for an approval` in Teams/Outlook'], ['Execute On Yes', 'Only send external mail / release action after Approve']],
    jobUse: 'Critical governance pattern required by enterprise IT, Finance, Legal, and Compliance teams.',
    mistake: 'Auto-emailing external customers raw AI-generated text with zero human review.',
    proHabit: 'Rule of Thumb: **Internal logging = Full Auto; External communication / Money / Deletes = Human Checkpoint!**',
    rule: 'Automation Prepares Fast -> Human Approves High-Risk Actions -> Zero Disasters.',
    prompt: `HITL Governance Matrix:
- Internal Excel log & Teams notice -> Full Auto
- Expense < ₹5,000 -> Auto-log + Manager FYI
- Expense >= ₹5,000 or External Client Email -> Mandatory Human Approval Checkpoint`,
    out: 'Fast, safe, enterprise-compliant automation governance.',
    q1: ['Which types of automated actions should always require a Human-in-the-Loop approval checkpoint?', 'High-risk or irreversible actions—including financial approvals/payments, sending external client communications, granting sensitive data permissions, publishing official policies, and deleting records.'],
  },
  {
    id: 255, mod: 22, tInMod: 11,
    title: 'Documenting Workflow Responsibilities',
    sub: '1-Page Flow Runbook: Owner, Co-Owner, Connected Files, Triggers & Troubleshooting Guide',
    coreEn: 'Every production flow needs a ==1-Page Flow Runbook== stored in SharePoint documenting ==Flow Name, Primary Owner + Backup Co-Owner, Trigger/Schedule, Connected Files/Lists (with links), Approval Rules, and How to Troubleshoot==.',
    coreHi: 'Har live Power Automate flow ka ek ==1-Page Runbook== SharePoint mein rakho: ==Flow Name, Owner + Co-Owner, Connected Files, Approval Rules aur Troubleshooting Steps==!',
    analogyTitle: 'Circuit-Breaker Panel Labels Showing Which Switch Controls Every Room',
    analogyEn: 'Six months from now, nobody remembers why an email fires every Monday—a 1-page Flow Runbook lets any teammate maintain or update it in 5 minutes!',
    analogyHi: '6 mahine baad kisi ko yaad nahi rehta kaunsa flow kahan se chal raha hai—1-page Runbook kisi bhi teammate ko 5 minute mein poora flow samjha deta hai!',
    steps: [['Record Ownership', 'Primary Owner + Backup Co-Owner + Business Sponsor'], ['List Dependencies', 'Exact links to Forms, SharePoint Lists & Excel Tables'], ['Document Logic', 'Simple 5-bullet flow summary + thresholds (`>=₹10k`)'], ['Add Fix Steps', 'Common errors + how to check Run History & Resubmit']],
    jobUse: 'Makes IT and Ops managers love your work and ensures smooth handovers.',
    mistake: 'Building 8 undocumented flows under your personal account with zero handover notes.',
    proHabit: 'Write the 1-page Runbook right inside the Flow Description box AND in your team SharePoint `Automation_Registry`!',
    rule: 'Undocumented Automation = Future Technical Debt. Always Write a 1-Page Runbook.',
    prompt: `1-Page Flow Runbook Template:
- Flow Name: Expense_Approval_v1
- Owners: Priya (Primary), Rahul (Co-Owner)
- Trigger: Expense_Request_Form (Group Form)
- Data Store: SharePoint /Finance/Expense_Log (DO NOT rename cols)
- Support: Check Run History -> Resubmit after fixing connection`,
    out: 'Clean, auditable, handover-ready enterprise automation.',
    q1: ['What key information should be included in a Power Automate Flow Runbook?', 'Flow name and purpose, Primary Owner and Backup Co-Owner, exact trigger and schedule, links to all connected Forms/SharePoint Lists/Excel Tables, business rules/thresholds, and basic troubleshooting/resubmit instructions.'],
  },
  {
    id: 256, mod: 22, tInMod: 12,
    title: 'Project: Build a Business Approval Workflow',
    sub: 'End-to-End Power Automate Capstone: Form Intake -> Excel Log -> Tiered Approval -> Notification',
    coreEn: 'Build and test a complete ==End-to-End Business Approval Workflow==: ==Microsoft Form Intake -> Validation & Duplicate Check -> Log to Excel/SharePoint -> Tiered Human Approval (`>=₹10,000` vs `<₹10,000`) -> Update Status + Notify Requester + Try/Catch Error Alert + 1-Page Runbook==!',
    coreHi: 'Ek complete ==Business Approval Workflow== banao aur test karo: ==Form Intake -> Validation -> Excel/SharePoint Log -> Tiered Approval -> Status Update + Requester Notification + Error Alert + 1-Page Runbook==!',
    analogyTitle: 'Complete Mini-Enterprise Workflow Engine Ready for Real Corporate Deployment',
    analogyEn: 'Being able to demo this live 1-click Teams approval flow in a job interview proves you can save any employer hundreds of hours of manual admin!',
    analogyHi: 'Interview mein ye live 1-click Teams approval workflow dikhana aapko seedha high-value automation professional bana deta hai!',
    steps: [['1. Intake & Store', 'Create Group Form + SharePoint List / `Ctrl+T` Excel Table'], ['2. Core Flow', 'Trigger -> Get Details -> Validate -> Add Row -> Approval'], ['3. Branch & Update', 'Approve/Reject Condition -> Update Status + Email Requester'], ['4. Harden & Doc', 'Add Try/Catch failure alert, Co-Owner & 1-Page Runbook']],
    jobUse: 'Flagship portfolio project for Operations, HR Tech, Business Analyst, and M365 Admin roles.',
    mistake: 'Testing only the "Approve" path and forgetting to test the "Reject" path and duplicate check!',
    proHabit: 'Test BOTH paths (1 Approved test + 1 Rejected test) and screenshot the green Run History for your portfolio!',
    rule: 'Test Approve Path + Test Reject Path + Add Error Alert + Write Runbook = Production Ready.',
    prompt: `Capstone Flow Verification Checklist:
[x] Form submission auto-logs row with Status = "Pending"
[x] Manager receives Teams/Outlook 1-click Approval card
[x] Approved path updates Status = "Approved" & emails requester
[x] Rejected path updates Status = "Rejected" & includes comments
[x] Co-Owner added & 1-Page Runbook saved in SharePoint`,
    out: 'Production-grade end-to-end Business Approval Workflow.',
    q1: ['Walk through the complete architecture of an end-to-end Business Approval Workflow in Microsoft 365.', '1) Capture standardized requests via Microsoft Forms, 2) Validate inputs and log a "Pending" record with a unique ID into SharePoint/Excel, 3) Route via Condition/Switch to the right manager using "Start and wait for an approval", 4) Update the tracker Status and notify the requester with comments on Approve/Reject, and 5) Add a Try/Catch error alert, backup Co-Owner, and 1-page Runbook.'],
  },

  // ═══ MODULE 23: Integrated Microsoft 365 with Copilot (257..268) ═══
  {
    id: 257, mod: 23, tInMod: 1,
    title: 'Planning a Project in Microsoft Teams',
    sub: 'Launching One Unified Project Workspace: Dedicated Channel, Kickoff Call & Shared Tabs',
    coreEn: 'Start every project cleanly inside ==Microsoft Teams==: create a dedicated ==Project Channel==, pin ==Files (SharePoint), Tracker (Excel/Planner), and Brief (Word)== as top tabs, and run a ==Copilot-transcribed Kickoff Meeting==!',
    coreHi: 'Har naya project ==Microsoft Teams== mein ek dedicated ==Project Channel== se shuru karo—top par ==Files, Excel Tracker aur Project Brief tabs pin== karo, aur ==Copilot-transcribed Kickoff Call== chalao!',
    analogyTitle: 'Opening a Dedicated Project War Room With Whiteboard, Schedule & Files on One Wall',
    analogyEn: 'Instead of scattering project info across 40 emails, every teammate clicks ONE Teams Channel and sees chat, milestones, files, and kickoff decisions immediately!',
    analogyHi: '40 emails mein info bikhraane ke bajaye poori team ek hi Teams Channel mein saari files, tracker aur decisions dekh leti hai!',
    steps: [['Create Channel', 'Add dedicated `#Project-Q4-Launch` channel in Team'], ['Pin Top Tabs', 'Pin Project Brief (Word), Tracker (Excel) & Planner'], ['Run Kickoff Call', 'Turn on Transcription so Copilot captures roles & milestones'], ['Post Charter', 'Pin Copilot Kickoff Recap as the anchor post in Channel']],
    jobUse: 'How modern project managers launch projects in 15 minutes with zero chaos.',
    mistake: 'Running an entire 3-month project inside a messy 10-person group chat with zero pinned tabs.',
    proHabit: 'Pin your top 3 live documents at the top of the Project Channel on Day 1.',
    rule: '1 Project = 1 Dedicated Teams Channel + 3 Pinned Tabs + Copilot Kickoff Recap.',
    prompt: `Project Channel Starter Tabs:
[Posts] [Files (SharePoint)] [Project_Brief.docx] [KPI_Tracker.xlsx] [Task_Board]`,
    out: 'Unified, zero-chaos project command center.',
    q1: ['What are the 3 best items to pin as tabs at the top of a new project Microsoft Teams channel?', 'The Project Charter/Brief (Word), the Master Task/Budget Tracker (Excel or Planner), and the key Project Presentation or Dashboard—giving every team member 1-click access.'],
  },
  {
    id: 258, mod: 23, tInMod: 2,
    title: 'Storing Documents in OneDrive and SharePoint',
    sub: 'Clean Project Folder Architecture in SharePoint So Every App & Copilot Finds Truth',
    coreEn: 'Keep personal rough drafts in ==OneDrive== and store ALL shared project deliverables inside the ==Channel SharePoint Document Library== using clean numbered folders (`01_Briefs`, `02_Data_Excel`, `03_Decks`, `04_Approved_Final`).',
    coreHi: 'Apne rough drafts ==OneDrive== mein rakho, aur project ki saari shared files ==Channel SharePoint Library== mein numbered folders (`01_Briefs`, `02_Data`, `03_Decks`, `04_Final`) mein rakho!',
    analogyTitle: 'Numbered Blueprint Drawers Where Every App & Copilot Pulls the Exact Latest File',
    analogyEn: 'When all project files live cleanly in one SharePoint library, Word Copilot, PowerPoint Copilot, and Power Automate can reference them with `/` effortlessly!',
    analogyHi: 'Jab saari files ek clean SharePoint library mein hoti hain, toh Word, PPT Copilot aur Power Automate sab effortlessly unse connect ho jaate hain!',
    steps: [['Create 4 Folders', '`01_Briefs`, `02_Data`, `03_Presentations`, `04_Approved`'], ['Enforce Naming', '`YYYY-MM-DD_Project_DocType.docx`'], ['Verify Permissions', 'Team = Edit | Leadership Stakeholders = View'], ['Keep AutoSave ON', 'Zero local Desktop copies—1 Single Source of Truth']],
    jobUse: 'Powers smooth cross-app Copilot workflows across the whole project lifecycle.',
    mistake: 'Half the team saving project files on local laptops and emailing mismatched versions.',
    proHabit: 'Click "Add shortcut to OneDrive" on the project SharePoint folder for instant Windows File Explorer access!',
    rule: 'Clean SharePoint Folders + Consistent Naming = Seamless Cross-App Copilot.',
    prompt: `Project SharePoint Folder Tree:
Project_Q4_Launch/
 ├── 01_Briefs_&_Minutes/
 ├── 02_Data_&_Dashboards/
 ├── 03_Presentations/
 └── 04_Final_Approved/`,
    out: 'Audit-ready, Copilot-friendly project file architecture.',
    q1: ['Why does organizing all project files inside one SharePoint channel library make Microsoft 365 Copilot much more effective?', 'Because every team member has proper permissions to one authoritative location, enabling Copilot across Word, PowerPoint, Outlook, and Teams to reference the exact latest project files cleanly.'],
  },
  {
    id: 259, mod: 23, tInMod: 3,
    title: 'Drafting Project Documents in Word',
    sub: 'Connecting Teams Kickoff Notes -> Grounded Word Project Charter & SOPs via `/file`',
    coreEn: 'Turn your ==Teams Kickoff Recap & raw project notes== directly into a ==structured Word Project Charter, Scope Doc, or Report== using ==Word Copilot `/filename`==, ==Heading 1/2 Styles==, and ==co-authoring `@mentions`==!',
    coreHi: 'Apne ==Teams Kickoff Recap== se seedha ==Word Copilot (`/filename`)== mein ==Project Charter ya Business Report== draft karo—real ==Heading 1/2 Styles== aur ==`@mention` co-authoring== ke saath!',
    analogyTitle: 'Turning Kickoff Whiteboard Notes Directly Into a Signed Blueprint',
    analogyEn: 'Because your Word doc uses real Heading 1/2 styles on SharePoint, PowerPoint Copilot will convert it into an executive deck in 20 seconds later!',
    analogyHi: 'Word doc mein Heading 1/2 styles rakhne se aage PowerPoint Copilot usko 20 second mein executive deck mein badal dega!',
    steps: [['Draft Grounded', 'Word Copilot -> reference kickoff notes via `/file`'], ['Apply Headings', 'Heading 1/2/3 + Auto Table of Contents'], ['Co-Author Live', 'Share cloud link in Teams; tag `@Lead` for section reviews'], ['Verify & Lock', 'Audit dates/scope, run Editor + Accessibility']],
    jobUse: 'Cuts project documentation time by 60% while keeping specs crisp and aligned.',
    mistake: 'Drafting a Project Charter in isolation without co-authoring feedback from key leads.',
    proHabit: 'Always include a clean `In-Scope | Out-of-Scope | Milestones | Risks` table in every Project Brief.',
    rule: 'Teams Recap -> Word Copilot Grounded Draft -> Real Headings -> Ready for PPT.',
    prompt: `"Draft a 2-page Project Charter based on /Kickoff_Meeting_Notes.docx with Heading-1 sections: 1) Project Goal, 2) In-Scope vs Out-of-Scope table, 3) 4-Week Milestone Schedule, 4) Key Risks & Owners."`,
    out: 'Structured, team-aligned Word Project Charter ready on SharePoint.',
    q1: ['How does structuring your Word Project Charter with real Heading Styles benefit the rest of your Microsoft 365 workflow?', 'It generates an automatic Table of Contents in Word, improves accessibility, and allows Copilot in PowerPoint to convert the charter cleanly into a structured executive slide deck.'],
  },
  {
    id: 260, mod: 23, tInMod: 4,
    title: 'Tracking Tasks and Data in Excel',
    sub: 'Live Cloud Excel Tracker (`Ctrl+T`) + Status Drop-Downs + Copilot Progress Insights',
    coreEn: 'Track project milestones, budgets, and KPIs in a ==SharePoint-hosted Excel Table (`Ctrl+T`)== using ==Data Validation drop-downs== (`Not Started, In Progress, Blocked, Done`), ==Conditional Formatting RAG colors==, and ==Copilot in Excel== for instant status summaries!',
    coreHi: 'Project ke tasks, budget aur KPIs ko ==SharePoint Excel Table (`Ctrl+T`)== mein track karo—==Status Drop-Downs==, ==RAG Conditional Formatting== aur ==Excel Copilot== summaries ke saath!',
    analogyTitle: 'Live Mission Control Board Showing Every Task, Budget & Blocker in Real Time',
    analogyEn: 'Pin this live Excel tracker directly as a tab inside your Project Teams Channel so teammates update their status in 5 seconds without emailing spreadsheets!',
    analogyHi: 'Is live Excel tracker ko Teams Channel ke top tab mein pin kar do—har koi 5 second mein apna status update kar lega!',
    steps: [['Build Ctrl+T Table', 'Columns: Task_ID, Task, Owner, Due_Date, Budget, Status'], ['Add Drop-Downs', 'Data Validation: `Not Started, In Progress, Blocked, Done`'], ['RAG Highlighting', 'Conditional Format: Done=Green, Blocked=Red, In Progress=Amber'], ['Summarize With AI', 'Ask Excel Copilot: "List all Blocked or Overdue tasks"']],
    jobUse: 'Standard project & operations tracking engine used across IT, marketing, and finance.',
    mistake: 'Letting 6 people type free-text statuses like `"almost done"`, `"WIP"`, `"stuck"` so PivotTables cannot count progress!',
    proHabit: 'Add a small top summary row (`% Complete`, `Blocked Count`, `Budget Variance`) using `COUNTIFS` and `SUMIFS`.',
    rule: 'Cloud Excel Table + Drop-Down Status + RAG Colors + Pinned in Teams = Live Control.',
    prompt: `Excel Copilot Project Health Prompt:
"Summarize project completion % by Owner, highlight all tasks where Status is 'Blocked' or Due_Date is past today, and create a bar chart of tasks by Status."`,
    out: 'Instant live project health check and visual progress chart.',
    q1: ['Why is pinning a live SharePoint Excel Table inside a Teams channel better than emailing weekly tracker attachments?', 'Everyone updates one live Single Source of Truth in real time, Data Validation keeps statuses clean, and leadership can inspect live progress or ask Copilot for summaries anytime.'],
  },
  {
    id: 261, mod: 23, tInMod: 5,
    title: 'Communicating Updates Through Outlook',
    sub: 'Weekly Stakeholder Briefs Linking Live Cloud Deliverables + Copilot Polish',
    coreEn: 'Keep external clients and senior leadership effortlessly informed via a ==crisp Friday Outlook Status Email== drafted with ==Copilot==: ==Overall RAG Status, Top 3 Wins, 1 Key Risk/Ask, and Direct Links== to your SharePoint report & Excel dashboard!',
    coreHi: 'Senior leaders aur clients ko har Friday ==crisp Outlook Status Email== bhejo (Copilot se polished): ==RAG Status, Top 3 Wins, 1 Risk/Ask aur SharePoint deliverables ke direct links==!',
    analogyTitle: 'Weekly Executive Postcard Keeping Leadership Calm & Confident',
    analogyEn: 'When executives get a proactive 120-word Friday update with verified metrics and direct links, they stop sending anxious `"Any update?"` emails all week!',
    analogyHi: 'Har Friday proactive 120-word status email bhejne se boss ko beech hafte `"Kya update hai?"` puchhne ki zaroorat hi nahi padti!',
    steps: [['Pull Verified Stats', 'Grab exact % Complete & KPIs from your Excel Tracker'], ['Draft In Copilot', 'Use Direct + Short tone (<150 words)'], ['Link Live Files', 'Attach OneDrive/SharePoint View-only links (not heavy copies)'], ['Polish & Send', 'Run Coaching by Copilot on escalations -> Send Friday 3 PM']],
    jobUse: 'Builds massive executive trust and makes you visible for leadership opportunities.',
    mistake: 'Sending a 600-word dense essay with 4 heavy attachments that nobody opens on mobile.',
    proHabit: 'Send a consistent **Friday 3 PM Weekly Pulse** (Green/Amber/Red + 3 bullets + 1 ask) on every major project.',
    rule: 'Proactive Weekly 120-Word RAG Update + Direct Cloud Links = Executive Trust.',
    prompt: `"Draft a short 120-word Friday Executive Status Email for Project Q4 Launch: Overall Status GREEN (72% complete), highlight 3 completed milestones, flag 1 minor vendor delay with mitigation, and link to our live SharePoint dashboard."`,
    out: 'Crisp, executive-ready weekly stakeholder update.',
    q1: ['Why does sending a proactive 120-word Friday status email save you time during the week?', 'It keeps stakeholders continuously informed on progress, risks, and next steps—dramatically reducing ad-hoc "checking in" emails and unnecessary emergency status meetings.'],
  },
  {
    id: 262, mod: 23, tInMod: 6,
    title: 'Preparing Progress Presentations in PowerPoint',
    sub: 'Converting Word Reports & Excel Charts Into Branded Progress Decks With Copilot',
    coreEn: 'Before milestone reviews, open your ==Branded PowerPoint Template==, let ==PowerPoint Copilot draft from `/Project_Report.docx`==, swap in ==verified Excel KPI charts==, add a ==Slide 2 RAG Executive Summary==, and present via ==Teams PowerPoint Live==!',
    coreHi: 'Review meeting se pehle ==Branded PPT Template== kholo, ==Copilot se `/Project_Report.docx` se slides== banwao, ==verified Excel charts== lagao, ==Slide 2 RAG Summary== banao aur ==Teams PowerPoint Live== mein present karo!',
    analogyTitle: 'Turning Your Live Workshop Workbench Into a Clean Showroom Display',
    analogyEn: 'Zero starting from scratch—your Word Charter + Excel Dashboard feed straight into a polished 7-slide Executive Review Deck in 20 minutes!',
    analogyHi: 'Scratch se kuch nahi banana—Word Report + Excel Charts se 20 minute mein boardroom-ready 7-slide deck taiyaar!',
    steps: [['Convert From Word', 'Branded PPT -> Copilot -> Create from `/Project_Report.docx`'], ['Embed Excel Charts', 'Paste verified Monthly Trend & Status charts cleanly'], ['Polish Slide 2', 'Build standalone RAG Executive Summary + Decisions Needed'], ['Present Live', 'Share via Teams PowerPoint Live with private Speaker Notes']],
    jobUse: 'Delivers consulting-grade milestone reviews in a fraction of traditional prep time.',
    mistake: 'Re-typing Excel numbers manually onto slides and accidentally introducing typos!',
    proHabit: 'Verify every slide KPI against your Excel Reconciliation Check cell before presenting.',
    rule: 'Word Report + Excel Charts + PowerPoint Copilot + PPT Live = Seamless Reviews.',
    prompt: `"Create a 7-slide Milestone Review presentation from /Project_Status_Report.docx with: Title, RAG Executive Summary, Completed Milestones, Key Metrics, Risks & Mitigations, Next 30 Days, and Leadership Decisions Needed."`,
    out: 'Polished executive progress presentation ready in minutes.',
    q1: ['How do Word, Excel, PowerPoint, and Teams connect together during a milestone review?', 'Word holds the structured report (with Headings), Excel provides verified KPIs and charts, PowerPoint Copilot converts the Word report into a branded slide deck where Excel charts are embedded, and Teams PowerPoint Live delivers the presentation with private Speaker Notes.'],
  },
  {
    id: 263, mod: 23, tInMod: 7,
    title: 'Collecting Feedback with Microsoft Forms',
    sub: 'Closing the Project Loop With Post-Launch Stakeholder Surveys & Copilot Theme Clustering',
    coreEn: 'After every project milestone or rollout, collect structured feedback using a ==2-minute Microsoft Form== shared in Teams/Outlook—auto-syncing to ==Excel== where ==Copilot clusters comments into Top Wins & Improvement Actions==!',
    coreHi: 'Project launch ke baad ==2-minute Microsoft Form== se stakeholder feedback lo—wo live ==Excel== mein sync hoga aur ==Copilot== usse ==Top Wins aur Improvement Actions== nikal dega!',
    analogyTitle: 'Post-Flight Passenger Rating Card Improving the Next Journey Immediately',
    analogyEn: 'Capturing honest post-launch feedback turns a one-off project into measurable proof of impact (e.g., `"92% User Satisfaction, 4.6/5 Rating"`) for your portfolio and leadership!',
    analogyHi: 'Launch ke baad `"92% Satisfaction, 4.6/5 Rating"` jaisa real metric aapke project aur resume dono ko superstar bana deta hai!',
    steps: [['Build 6-Q Pulse', 'Rating (1-5) + Choice + 1 Branching Q + 1 Open Comment'], ['Distribute Fast', 'Drop Short Link in Teams Channel & Launch Email'], ['Sync To Excel', 'Open live Excel workbook -> calculate Top-2-Box %'], ['Summarize Themes', 'Ask Copilot for Top 3 Wins & Top 3 Improvements']],
    jobUse: 'Provides hard satisfaction metrics that prove real project ROI to executives.',
    mistake: 'Launching a new tool or process and never measuring whether users actually liked or adopted it.',
    proHabit: 'Share a 3-bullet `"Launch Feedback & v2 Fixes"` summary back with users 1 week after launch.',
    rule: 'Launch -> 2-Min Forms Pulse -> Excel + Copilot Synthesis -> Measure Real Impact.',
    prompt: `"Summarize our post-launch feedback responses in Excel: report average satisfaction score, % Favorable (4-5), Top 3 things users loved, and Top 3 friction points to fix in v1.1."`,
    out: 'Quantified user-impact scorecard and clear v1.1 roadmap.',
    q1: ['Why is collecting a short Microsoft Forms feedback survey after a project launch valuable for your career and team?', 'It provides objective satisfaction scores (like % Favorable and average rating) proving real business impact, and surfaces quick-win improvements early before small issues grow.'],
  },
  {
    id: 264, mod: 23, tInMod: 8,
    title: 'Automating Notifications with Power Automate',
    sub: 'Connecting Forms, SharePoint & Excel Into Zero-Manual-Effort Project Alerts',
    coreEn: 'Tie your project workspace together with ==Power Automate==: when a ==feedback form submits, a milestone turns `Blocked`, or a deliverable enters `/Ready_For_Approval`==, automatically ==update Excel/SharePoint and post a crisp alert in Teams==!',
    coreHi: 'Poore project workspace ko ==Power Automate== se jod do: naya feedback aaye, koi task `Blocked` ho ya file `/Ready_For_Approval` mein aaye—turant ==Excel update aur Teams alert== apne aap chale!',
    analogyTitle: 'Smart Nervous System Connecting Every App in Your Project Workspace',
    analogyEn: 'Instead of manually checking 4 tools all day, Power Automate brings ONLY the important events straight to your Project Teams Channel!',
    analogyHi: 'Din bhar 4 apps check karne ke bajaye Power Automate sirf important events seedha aapke Teams Channel mein bhej deta hai!',
    steps: [['Connect Intake', 'Form Submit -> Log row in Excel + Post in Project Channel'], ['Auto-Approvals', 'Deliverable upload -> 1-click Manager Approval in Teams'], ['Overdue Alerts', 'Daily 9 AM check -> nudge owners of `Blocked`/Due tasks'], ['Add Guardrails', 'Try/Catch failure alert + backup Co-Owner']],
    jobUse: 'Turns a static project folder into a living, self-reporting digital operation.',
    mistake: 'Automating every tiny edit so the Teams channel becomes noisy spam everyone mutes!',
    proHabit: 'Automate ONLY high-signal events (New Request, Blocker, Approval Needed, Weekly Digest) so every alert gets respected.',
    rule: 'Automate High-Signal Events Only -> Zero Noise, Maximum Team Speed.',
    prompt: `Integrated Project Automation Stack:
1. Forms -> Excel Log + Teams Alert (Intake)
2. SharePoint -> Manager Approval Card -> Move to /Approved (Sign-off)
3. Weekday 9 AM -> Due-Soon Task Nudges (Accountability)`,
    out: 'Self-running, low-friction project automation backbone.',
    q1: ['Why should you automate only high-signal project events into a Teams channel?', 'Posting every minor file save or routine update creates notification fatigue so teammates mute the channel. Automating only high-signal events (approvals, blockers, new intakes, weekly digests) ensures every alert gets fast action.'],
  },
  {
    id: 265, mod: 23, tInMod: 9,
    title: 'Using Copilot to Summarize Project Information',
    sub: 'Cross-App Copilot Chat Synthesizing Emails, Teams, Word Docs & Meetings in 1 Prompt',
    coreEn: 'Use ==Microsoft 365 Copilot Chat (Work tab)== as your ==Project Intelligence Hub==: ask one cross-app prompt to synthesize ==this week Teams channel discussions, Outlook client emails, meeting recaps, and SharePoint Word docs== into one unified briefing!',
    coreHi: '==Microsoft 365 Copilot Chat (Work tab)== ko apna ==Project Intelligence Hub== banao—ek hi prompt se ==Teams chats, Outlook emails, meeting recaps aur SharePoint files== ka complete executive briefing pao!',
    analogyTitle: 'Executive Radar Combining Signals From Every Department Onto One Screen',
    analogyEn: 'One prompt `"Summarize all Q4 Launch updates across my emails, Teams, and /Q4_Charter.docx from the past 7 days"` replaces 45 minutes of manual status hunting!',
    analogyHi: 'Ek prompt mein pichhle 7 din ke saare emails, Teams chats aur Word docs ka complete status summary 15 second mein mil jata hai!',
    steps: [['Open Work Copilot', 'Open Microsoft 365 Copilot Chat (Work tab)'], ['Scope Clearly', 'Specify exact project name + timeframe ("past 7 days")'], ['Request 4 Buckets', 'Progress, Decisions, Risks/Blockers, Upcoming Deadlines'], ['Click Citations', 'Verify key claims across linked emails/docs before sharing']],
    jobUse: 'Gives Project Managers and Directors instant 360-degree project visibility.',
    mistake: 'Searching without a clear project name or timeframe, pulling irrelevant old files from last year.',
    proHabit: 'Always include exact project name + date window (`"past 7 days"`) + desired output buckets in cross-app prompts.',
    rule: 'Project Name + Date Window + 4 Structured Buckets = Instant 360° Project Brief.',
    prompt: `"Synthesize all updates on 'Project Q4 Launch' from the past 7 days across my Outlook emails, Teams channels, meetings, and SharePoint files. Present as: 1) Completed Wins, 2) Key Decisions, 3) Active Risks/Blockers, 4) Next Week Deadlines with citations."`,
    out: '360-degree cross-app executive briefing generated in 15 seconds.',
    q1: ['What makes Microsoft 365 Copilot Chat uniquely powerful for summarizing complex projects?', 'Because it connects to the Microsoft Graph, it can synthesize information across Outlook emails, Teams chats, meeting transcripts, and SharePoint documents simultaneously in one cited response—while respecting your permissions.'],
  },
  {
    id: 266, mod: 23, tInMod: 10,
    title: 'Connecting Outputs Across Microsoft 365',
    sub: 'Zero-Duplication Workflow Chain: Forms -> Excel -> Word -> PowerPoint -> Outlook & Teams',
    coreEn: 'Master the ==Full Connected M365 Chain== so you never type the same data twice: ==Forms== captures input -> ==Power Automate== logs to ==Excel== -> ==Excel== builds verified KPIs/charts -> ==Word Copilot== writes the report -> ==PPT Copilot== builds the deck -> ==Outlook/Teams== distributes!',
    coreHi: '==Connected M365 Chain== follow karo taaki ek hi data do baar type na karna pade: ==Forms -> Power Automate -> Excel KPIs -> Word Report -> PowerPoint Deck -> Outlook/Teams share==!',
    analogyTitle: 'Automated Factory Assembly Line Where Each Station Feeds the Next Cleanly',
    analogyEn: 'Every app plays to its exact strength—no manual copy-pasting, no conflicting numbers, and 5x faster delivery from raw input to boardroom decision!',
    analogyHi: 'Har app apna best kaam karta hai—zero copy-paste, zero mismatched numbers, aur 5x tez execution!',
    steps: [['Capture & Automate', 'Forms + Power Automate -> clean SharePoint/Excel Table'], ['Analyze & Chart', 'Excel PivotTables + Reconciliation Check + Charts'], ['Document & Present', 'Word Copilot Report -> PowerPoint Copilot Deck'], ['Share & Track', 'Teams PowerPoint Live + Outlook Weekly Recap']],
    jobUse: 'The signature modern digital-workplace skill that employers pay a premium for.',
    mistake: 'Treating every Office app as an isolated island and re-typing numbers manually across 4 files.',
    proHabit: 'Design every project around ONE Single Source of Truth (SharePoint/Excel) feeding all downstream reports and decks.',
    rule: 'Capture Once -> Automate Flow -> Analyze in Excel -> Tell Story in Word/PPT.',
    prompt: `End-to-End Connected Chain:
Forms (Intake) -> Power Automate (Log + Approve) -> Excel (KPIs + Charts)
-> Word Copilot (Executive Report) -> PPT Copilot (8-Slide Deck)
-> Teams (Live Pitch) + Outlook (Follow-Up Recap)`,
    out: 'Seamless, zero-rework modern Microsoft 365 operating system.',
    q1: ['Describe how data flows without manual duplication across Microsoft Forms, Power Automate, Excel, Word, and PowerPoint.', 'Microsoft Forms captures standardized input, Power Automate automatically logs it into an Excel Table and triggers approvals, Excel summarizes KPIs and charts, Word Copilot drafts a structured report grounded in the data, and PowerPoint Copilot converts that Word report into an executive slide deck.'],
  },
  {
    id: 267, mod: 23, tInMod: 11,
    title: 'Checking Permissions and Data Accuracy',
    sub: 'Cross-App Governance Gate: Reconciling Numbers + Auditing SharePoint/Teams Access',
    coreEn: 'Before sharing any integrated multi-app deliverable, run a ==2-part Governance Gate==: ==1) Cross-App Data Match== (Excel KPI == Word Report == PowerPoint Slide == Outlook Email) and ==2) Access Audit== (Manage Access on SharePoint, Forms & Power Automate).',
    coreHi: 'Multi-app project share karne se pehle ==2-part Governance Gate== chalao: ==1) Cross-App Numbers Match== (Excel == Word == PPT == Email) aur ==2) Permissions Audit== (SharePoint, Forms & Flow access)!',
    analogyTitle: 'Final Safety Inspection Checking Both Wiring AND Locks Before Handing Over Keys',
    analogyEn: 'Nothing hurts trust faster than an email saying `"₹48L"`, a slide saying `"₹46L"`, or an external client hitting `"Access Denied"` on your SharePoint link!',
    analogyHi: 'Email mein `"₹48L"` aur Slide par `"₹46L"` dikhna ya client ko `"Access Denied"` aana—dono 2-minute ke Governance Gate se 100% ruk jaate hain!',
    steps: [['Cross-Match Numbers', 'Confirm Excel == Word == PowerPoint == Outlook totals'], ['Audit SharePoint Links', 'Check Manage Access: right View/Edit, zero stale links'], ['Test External Access', 'Verify client Forms/PDFs open cleanly without login blocks'], ['Verify Flow Health', 'Confirm Power Automate Run History is 100% green']],
    jobUse: 'Guarantees zero-defect, enterprise-safe delivery across complex multi-app projects.',
    mistake: 'Updating a late-breaking Excel number at 4:50 PM and forgetting to update Slide 4 and the Word Executive Summary!',
    proHabit: 'Whenever a source Excel figure changes late, run a quick 60-second check across Word, PPT, and Outlook before sending.',
    rule: 'Same Verified Number Everywhere + Right Permissions Everywhere = 100% Trust.',
    prompt: `Cross-App Pre-Delivery Gate:
[ ] Excel Control Total = 0.00 (Reconciled)
[ ] Word, PowerPoint & Email numbers match Excel 100%
[ ] SharePoint Manage Access audited (no accidental Everyone Edit)
[ ] Power Automate Run History = Green & Co-Owner assigned`,
    out: 'Bulletproof, consistent, security-verified project package.',
    q1: ['What happens if you update a final sales figure in Excel 10 minutes before a board meeting without checking your Word report and PowerPoint deck?', 'Stakeholders immediately spot conflicting figures across your email, slides, and report—undermining confidence in the entire analysis. Always run a quick cross-app numbers check after any late edit.'],
  },
  {
    id: 268, mod: 23, tInMod: 12,
    title: 'Project: End-to-End Project Management Workflow',
    sub: 'Integrated M365 + Copilot Capstone: Teams -> SharePoint -> Word -> Excel -> PPT -> Automate',
    coreEn: 'Deliver a ==complete End-to-End Project Management Workspace== uniting all 7 Microsoft 365 apps: ==Teams Channel + Kickoff Recap -> SharePoint Folders -> Word Charter -> Live Excel Tracker -> PowerPoint Review Deck -> Forms Pulse -> Power Automate Alerts & Approvals==!',
    coreHi: 'Poore 7 Microsoft 365 apps ko jod kar ek ==complete End-to-End Project Management Workspace== banao: ==Teams -> SharePoint -> Word Charter -> Excel Tracker -> PPT Review -> Forms -> Power Automate==!',
    analogyTitle: 'Full-Stack Modern Office Architecture Proving True Microsoft 365 Mastery',
    analogyEn: 'Very few candidates can connect all 7 Microsoft 365 apps + Copilot cleanly—completing this workflow makes you instantly stand out for high-growth corporate roles!',
    analogyHi: 'Saaton M365 apps + Copilot ko ek saath cleanly connect karna aapko kisi bhi corporate interview mein top 1% candidate bana deta hai!',
    steps: [['1. Hub & Docs', 'Teams Channel + SharePoint 4 Folders + Word Charter'], ['2. Data & Deck', 'Live Excel `Ctrl+T` Tracker + Branded 7-Slide PPT Review'], ['3. Feedback & Flow', 'Forms Pulse Survey + Power Automate Logging/Approval Flow'], ['4. Governance Gate', 'Cross-match numbers, audit permissions & document Runbook']],
    jobUse: 'Ultimate job-ready showcase for Project Coordinator, Operations, Business Analyst, and Admin leads.',
    mistake: 'Building each file disconnected on Desktop instead of linking them inside one unified SharePoint/Teams workspace.',
    proHabit: 'Record a clean 2-minute walkthrough or save screenshots of all connected tabs for your career portfolio!',
    rule: '7 Connected M365 Apps + Copilot + Governance Gate = Modern Workplace Mastery.',
    prompt: `Integrated Capstone Checklist:
[x] Teams Channel with 3 pinned live tabs + Copilot Kickoff Recap
[x] SharePoint 4-folder library with verified permissions
[x] Word Charter (Heading Styles) + Excel Live Tracker (Ctrl+T)
[x] Branded PowerPoint Review Deck + Outlook Weekly Update
[x] Forms Feedback Survey + Green Power Automate Workflow`,
    out: 'Complete, portfolio-ready End-to-End Microsoft 365 Project System.',
    q1: ['Summarize how you would run a new 30-day company project from start to finish using the integrated Microsoft 365 + Copilot suite.', 'Create a dedicated Teams Channel with a structured SharePoint library, run a transcribed kickoff call for Copilot notes, draft a Heading-styled Word Project Charter, track milestones in a pinned Excel Table with drop-downs, automate approvals and reminders with Power Automate, send crisp weekly Outlook RAG updates, convert the final report into a branded PowerPoint review deck, and close with a Microsoft Forms feedback survey.'],
  },
];

export const MS_OFFICE_TAB7_BLUEPRINTS: Record<number, DsTopicBlueprint> =
  expandMsOfficeSpecs(TAB7_SPECS);
