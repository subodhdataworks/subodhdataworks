import { expandMernSpecs, type MernTopicSpec } from './fullStackMernHelper';
import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

const TAB1_SPECS: MernTopicSpec[] = [
  // ═══ CHAPTER 01: Introduction to Web Development (1..7) ═══
  {
    id: 1, mod: 1, tInMod: 1,
    title: 'What is web development?',
    sub: 'Building Interactive Websites, SaaS Apps & APIs That Run in Every Browser',
    coreEn: '==Web development== is the engineering craft of building ==websites, interactive web applications, and cloud APIs== using ==HTML (structure), CSS (design), JavaScript (logic), and backend servers + databases==.',
    coreHi: '==Web development== wo engineering skill hai jisse hum ==websites, interactive web apps aur backend APIs== banate hain—==HTML (structure), CSS (design), JavaScript (logic) aur Database== ko jod kar!',
    analogyTitle: 'Building a Modern Restaurant: Dining Hall + Menu + Kitchen + Storage',
    analogyEn: 'HTML is the walls and tables, CSS is the lighting and decor, JavaScript is the interactive ordering tablet, and Backend + Database is the kitchen and pantry!',
    analogyHi: 'HTML deewarein aur tables hain, CSS decor hai, JavaScript ordering logic hai, aur Backend + Database kitchen aur pantry hain!',
    steps: [['Structure (HTML)', 'Define headings, buttons, forms & content'], ['Style (CSS)', 'Make layouts responsive, branded & beautiful'], ['Logic (JS/React)', 'Handle clicks, API calls & dynamic UI'], ['Server & DB', 'Store users, orders & business data safely']],
    jobUse: 'Powers every modern business—e-commerce, banking, SaaS, EdTech, and AI platforms.',
    mistake: 'Trying to jump straight into React or Next.js without understanding core HTML, CSS, and JavaScript.',
    proHabit: 'Build small working web pages every single day—coding is learned by typing, not just watching videos!',
    rule: 'HTML = Skeleton | CSS = Styling | JS = Brain | Backend/DB = Memory.',
    code: `<!-- Your First Web Building Blocks -->
<h1 class="title">Welcome to MERN!</h1>
<button onclick="alert('Hello Developer!')">Click Me</button>`,
    out: 'Interactive heading + clickable button running in any browser worldwide.',
    q1: ['What are the 3 core frontend technologies every web browser understands natively?', 'HTML (page structure and semantics), CSS (visual styling and responsive layout), and JavaScript (client-side interactivity and API communication).'],
  },
  {
    id: 2, mod: 1, tInMod: 2,
    title: 'Websites vs web applications',
    sub: 'Static Informational Sites vs Dynamic Data-Driven Interactive Apps',
    coreEn: 'A ==Website== (blog, portfolio, restaurant menu) mainly ==displays informational content== to readers, whereas a ==Web Application== (Gmail, Swiggy, Amazon, Notion) supports ==logins, CRUD data, real-time state, and complex user workflows==.',
    coreHi: '==Website== (blog, portfolio) mainly ==information dikhati hai==, jabki ==Web Application== (Amazon, Gmail, Swiggy) mein ==login, database CRUD, cart aur real-time interaction== hota hai!',
    analogyTitle: 'Printed Brochure (Website) vs Interactive ATM Machine (Web App)',
    analogyEn: 'You read a brochure (mostly one-way); you log into an ATM, check balance, and transfer money (two-way database-powered web application)!',
    analogyHi: 'Brochure sirf padhne ke liye hota hai (Website); ATM mein aap login karke transactions karte ho (Web App)!',
    steps: [['Static Website', 'Mostly HTML/CSS; same pages shown to every visitor'], ['Dynamic Web App', 'React frontend + Node/Express API + MongoDB database'], ['User Auth', 'Personal dashboards, roles & private saved data'], ['Real-Time State', 'Carts, chats, notifications & live updates']],
    jobUse: 'Helps you pick the right architecture—do not over-engineer a 3-page brochure with 5 microservices!',
    mistake: 'Treating a complex SaaS app like static HTML pages or over-complicating a simple landing page.',
    proHabit: 'Match stack complexity to the product: static landing page -> HTML/Tailwind; dynamic SaaS -> Full MERN Stack.',
    rule: 'Website = Inform & Showcase | Web App = Authenticate, Interact & Persist Data.',
    code: `// Web App Core Loop (MERN)
User Action (React) -> HTTP JSON Request (Express)
-> Query/Save (MongoDB) -> Live UI Update (React)`,
    out: 'Personalized, database-driven interactive experience.',
    q1: ['What is the main technical difference between a static website and a dynamic web application?', 'A static website serves mostly fixed informational pages (HTML/CSS), whereas a web application authenticates users, reads/writes personalized data from a backend database via APIs, and manages rich interactive state.'],
  },
  {
    id: 3, mod: 1, tInMod: 3,
    title: 'Frontend vs backend development',
    sub: 'Client-Side Browser UI vs Server-Side APIs, Security & Database Logic',
    coreEn: '==Frontend== runs inside the ==user browser== (HTML, CSS, Tailwind, JavaScript, React) creating fast, accessible UI, while ==Backend== runs on ==secure cloud servers== (Node.js, Express, MongoDB) handling auth, business rules, payments, and data!',
    coreHi: '==Frontend== user ke ==browser== mein chalta hai (UI, buttons, React), jabki ==Backend== ==secure cloud server== par chalta hai (Node.js, Express, MongoDB) jahan auth, payments aur database logic rehta hai!',
    analogyTitle: 'Restaurant Waiter & Dining Room (Frontend) vs Private Kitchen & Chef (Backend)',
    analogyEn: 'Customers interact with the menu and waiter (Frontend), while secret recipes, payments, and food prep stay safely locked in the kitchen (Backend)!',
    analogyHi: 'Customer waiter aur menu (Frontend) se baat karta hai; secret recipes aur payment logic safe kitchen (Backend) mein rehta hai!',
    steps: [['Frontend (Client)', 'Renders UI, validates forms, sends `fetch()` requests'], ['API Bridge', 'JSON over HTTPS connects Frontend <-> Backend'], ['Backend (Server)', 'Verifies JWT auth, enforces business rules, talks to DB'], ['Security Rule', 'Never trust frontend alone—always re-validate on Backend!']],
    jobUse: 'Understanding the exact Frontend/Backend boundary prevents security bugs and speeds up debugging.',
    mistake: 'Putting secret API keys, price calculations, or admin checks ONLY in frontend JavaScript where any user can inspect/edit them!',
    proHabit: 'Frontend validation = great UX; Backend validation = real security. Always do BOTH!',
    rule: 'Frontend = Experience & Speed | Backend = Security, Truth & Persistence.',
    code: `// Frontend sends request -> Backend enforces truth
// Frontend (React): fetch('/api/orders', { method: 'POST', body: JSON.stringify({ productId }) })
// Backend (Express): Fetches real price from MongoDB (never trusts client price!)`,
    out: 'Tamper-proof e-commerce checkout architecture.',
    q1: ['Why must you never trust client-side (frontend) validation or price calculations alone?', 'Because frontend JavaScript runs in the user browser where anyone can open DevTools and modify values or send forged HTTP requests directly to your API. The backend must always re-validate inputs, permissions, and prices.'],
  },
  {
    id: 4, mod: 1, tInMod: 4,
    title: 'Full-stack development overview',
    sub: 'The MERN Stack Advantage: One Language (JavaScript) Across MongoDB, Express, React & Node',
    coreEn: 'A ==Full-Stack MERN Developer== builds complete end-to-end products using ==JavaScript everywhere==: ==M==ongoDB (NoSQL database), ==E==xpress.js (backend API framework), ==R==eact.js (frontend UI library), and ==N==ode.js (server runtime)!',
    coreHi: '==Full-Stack MERN Developer== ek hi language (==JavaScript==) se poora app banata hai: ==M==ongoDB (Database), ==E==xpress.js (API), ==R==eact.js (Frontend UI) aur ==N==ode.js (Server)!',
    analogyTitle: 'One Master Builder Who Can Design the Facade, Wire the Electricity & Build the Vault',
    analogyEn: 'Because React, Express, Node, and MongoDB JSON all speak JavaScript, a single MERN engineer can ship a complete production startup app from idea to live URL!',
    analogyHi: 'Kyunki Frontend, Backend aur MongoDB JSON sab JavaScript bolte hain, ek MERN developer akele poora startup app launch kar sakta hai!',
    steps: [['M — MongoDB', 'Stores flexible JSON-like documents (`users`, `orders`)'], ['E — Express.js', 'Clean REST API routes, middleware & auth guards'], ['R — React.js', 'Component-based interactive UI & state'], ['N — Node.js', 'Fast event-driven JavaScript server runtime']],
    jobUse: 'One of the highest-demand, highest-hiring software engineering stacks for startups and global tech firms.',
    mistake: 'Learning each piece in isolation and never connecting React -> Express -> MongoDB in a real deployed app.',
    proHabit: 'Build at least 2 fully deployed MERN apps (live URL + clean GitHub README) to stand out in interviews.',
    rule: 'MERN = MongoDB + Express + React + Node = 100% JavaScript End-to-End.',
    code: `// Full-Stack MERN Data Flow
React UI (fetch '/api/tasks')
  -> Express Route (app.get('/api/tasks'))
    -> Mongoose Model (Task.find())
      -> MongoDB Atlas Cloud -> JSON back to React!`,
    out: 'Seamless JSON flow across all 4 layers of the stack.',
    q1: ['Why is the MERN stack so popular for startups and full-stack developers?', 'Every layer uses JavaScript and JSON—eliminating context-switching between languages, enabling code sharing (validation/types), huge npm ecosystem support, and rapid full-stack product delivery.'],
  },
  {
    id: 5, mod: 1, tInMod: 5,
    title: 'How the web works',
    sub: 'The Request-Response Lifecycle: Browser -> DNS -> Server -> HTML/JSON -> Rendered Page',
    coreEn: 'When you type a URL and press Enter, the ==Browser== looks up the server IP via ==DNS==, opens a secure ==HTTPS connection==, sends an ==HTTP Request==, receives an ==HTTP Response== (HTML/CSS/JS or JSON), and paints pixels onto your screen!',
    coreHi: 'Jab aap URL dalte ho: ==Browser== pehle ==DNS== se server ka IP address pata karta hai, ==HTTPS Request== bhejta hai, server ==HTML/CSS/JS ya JSON Response== bhejta hai, aur browser screen par page paint kar deta hai!',
    analogyTitle: 'Ordering Online: Look Up Store Address (DNS) -> Send Order (Request) -> Receive Parcel (Response)',
    analogyEn: 'Every time you click "Login" or load a page, this exact Client -> Request -> Server -> Response loop completes in under 300 milliseconds!',
    analogyHi: 'Har click aur page load par yahi Client -> Request -> Server -> Response cycle 300 millisecond se kam mein poora hota hai!',
    steps: [['1. DNS Lookup', 'Translates `google.com` -> IP address (`142.250.x.x`)'], ['2. HTTP Request', 'Browser sends Method (`GET/POST`), Headers & Body'], ['3. Server Process', 'Express queries MongoDB & prepares HTML or JSON'], ['4. Render Paint', 'Browser parses HTML/CSS/JS into the live visual page']],
    jobUse: 'Knowing this lifecycle makes debugging 404, 500, CORS, and slow-load bugs 10x faster.',
    mistake: 'Treating the browser and server as magic without ever inspecting the DevTools Network tab.',
    proHabit: 'Open Chrome DevTools -> **Network tab** on your favorite websites to watch real HTTP Requests and Responses live!',
    rule: 'URL -> DNS -> HTTPS Request -> Server/DB -> Response -> Browser Render.',
    code: `// What an HTTP Request & Response look like:
REQUEST:  GET /api/products HTTP/1.1  | Host: api.shop.com
RESPONSE: HTTP/1.1 200 OK             | Content-Type: application/json
BODY:     [{ "id": 1, "name": "Laptop", "price": 54999 }]`,
    out: 'Complete clarity on how every web app communicates.',
    q1: ['Walk through what happens behind the scenes when you type https://example.com in a browser and press Enter.', '1) The browser resolves example.com to an IP address via DNS, 2) Establishes a TCP + TLS (HTTPS) connection to the server, 3) Sends an HTTP GET request, 4) Receives the HTTP response (HTML, status code, headers), and 5) Parses HTML, fetches linked CSS/JS/images, and renders the page.'],
  },
  {
    id: 6, mod: 1, tInMod: 6,
    title: 'Popular web technologies',
    sub: 'Understanding the Modern Ecosystem: Frameworks, CSS Tools, Databases, Git & Cloud',
    coreEn: 'Modern web engineering combines ==Core Web (HTML/CSS/JS/TypeScript)==, ==UI Frameworks (React, Next.js, Tailwind)==, ==Backend (Node.js, Express)==, ==Databases (MongoDB, PostgreSQL)==, ==Git/GitHub==, and ==Cloud Hosting (Vercel, Render, AWS)==.',
    coreHi: 'Modern web ecosystem mein ==HTML/CSS/JS== foundation hai, uske upar ==React + Tailwind== (UI), ==Node + Express== (Backend), ==MongoDB/SQL== (Database), ==Git/GitHub== aur ==Vercel/Render== (Deployment) aate hain!',
    analogyTitle: 'Choosing Proven Power Tools Instead of Buying Every Shiny Gadget',
    analogyEn: 'Do not chase 15 frameworks at once—mastering **HTML/CSS/JS + Tailwind + React + Node/Express + MongoDB + Git** makes you hireable at thousands of companies!',
    analogyHi: '15 frameworks ke peeche mat bhaago—ek strong stack (**MERN + Tailwind + Git**) deeply master karo, job aasani se milegi!',
    steps: [['Core Languages', 'HTML5, CSS3, Modern JavaScript (ES6+), TypeScript'], ['Frontend Stack', 'React.js + Tailwind CSS + Vite + React Router'], ['Backend & DB', 'Node.js + Express.js + MongoDB + Mongoose'], ['DevOps & AI', 'Git/GitHub + Vercel/Render + GitHub Copilot']],
    jobUse: 'Gives you a clear roadmap so you never suffer from "framework tutorial overload".',
    mistake: 'Switching frameworks every 2 weeks (Vue -> Angular -> Svelte -> React) and finishing zero real projects.',
    proHabit: 'Go DEEP on one complete production stack (MERN) first—picking up a 2nd stack later takes only days!',
    rule: 'Deep Mastery of 1 Complete Stack (MERN) > Surface Knowledge of 10 Frameworks.',
    code: `// Modern MERN Production Stack
Frontend: React + Vite + Tailwind CSS
Backend:  Node.js + Express.js + JWT Auth
Database: MongoDB Atlas + Mongoose ODM
Deploy:   GitHub -> Vercel (UI) + Render (API)`,
    out: 'Clear, battle-tested roadmap from beginner to job-ready engineer.',
    q1: ['Why is it better for beginners to master one complete stack like MERN deeply rather than learning basics of 5 different frameworks?', 'Companies hire engineers who can ship complete, debugged, deployed features. Deeply mastering JavaScript, React, Node/Express, and MongoDB builds transferable fundamentals that make learning any other framework easy later.'],
  },
  {
    id: 7, mod: 1, tInMod: 7,
    title: 'Web developer roles and career paths',
    sub: 'Frontend, Backend, Full-Stack, UI Engineer & Freelance/Product Career Ladders',
    coreEn: 'MERN skills unlock multiple high-growth careers: ==Frontend Engineer== (React/UI/UX), ==Backend Engineer== (Node/APIs/DB), ==Full-Stack Engineer== (end-to-end features), ==Freelance/Agency Builder==, and ==Tech Lead / Architect==.',
    coreHi: 'MERN skills se aap ==Frontend Developer==, ==Backend Developer==, ==Full-Stack Engineer==, ya ==Freelance Web Builder== ban sakte ho—aur 2-3 deployed projects + DSA + GitHub aapko top packages dilate hain!',
    analogyTitle: 'Multiple High-Paying Career Tracks Launching From One Core Engineering Station',
    analogyEn: 'Start by landing your first Full-Stack or Frontend role with 3 real deployed projects, clean GitHub commits, and crisp JavaScript/React interview fundamentals!',
    analogyHi: '3 real deployed projects, clean GitHub profile aur strong JS/React fundamentals aapko pehli achhi company job aasani se dila dete hain!',
    steps: [['Frontend Path', 'HTML/CSS/Tailwind/React/Accessibility/Performance'], ['Backend Path', 'Node/Express/MongoDB/Auth/Security/Scalability'], ['Full-Stack Path', 'Own features end-to-end from Figma to Production DB'], ['Portfolio Proof', '3 deployed live apps + clean READMEs + mock interviews']],
    jobUse: 'Helps you tailor your resume, portfolio projects, and interview prep to your exact dream role.',
    mistake: 'Putting only "To-Do List" and "Calculator" on your resume instead of 2 real full-stack deployed apps with auth & DB.',
    proHabit: 'Build 1 strong SaaS/E-Commerce MERN capstone with real auth, API, DB, and live URL—deploy everything!',
    rule: 'Strong Fundamentals + 3 Deployed Real Projects + Clean GitHub = Hired.',
    code: `// Job-Ready Portfolio Formula
1. Responsive Frontend App (React + Tailwind + Public API)
2. Full-Stack MERN App (Auth + CRUD + MongoDB + Live Deploy)
3. Real-Time / AI-Powered MERN Capstone (Socket.io / AI API)`,
    out: 'Recruiter-magnet portfolio ready for product startups & MNCs.',
    q1: ['What matters most to hiring managers when evaluating a fresher Full-Stack MERN developer?', 'Strong JavaScript/React/Node fundamentals, 2–3 original deployed full-stack projects with clean GitHub code (not copied tutorials), ability to explain architecture and debug live issues, and clean communication.'],
  },

  // ═══ CHAPTER 02: Introduction to AI in Web Development (8..16) ═══
  {
    id: 8, mod: 2, tInMod: 1,
    title: 'What AI can do for web developers',
    sub: '10x Acceleration Across Boilerplate, Debugging, CSS Layouts, Tests & Docs',
    coreEn: 'Modern ==AI dev tools== accelerate coding by ==generating boilerplate components, explaining cryptic error traces, writing unit tests, converting Figma specs to Tailwind, and refactoring legacy code==—while YOU own architecture and security!',
    coreHi: 'Modern ==AI coding tools== aapki speed badhate hain: ==boilerplate code likhna, errors explain karna, Tailwind layouts banana aur tests likhna==—par architecture aur security ka control AAPKE haath mein rehta hai!',
    analogyTitle: 'Electric Power Saw vs Manual Hand Saw—You Still Measure & Cut Straight',
    analogyEn: 'AI eliminates tedious typing so you can spend your brainpower on system design, user experience, edge cases, and security!',
    analogyHi: 'AI boring boilerplate likh deta hai taaki aap apna dimaag real architecture, UX aur security par laga sako!',
    steps: [['Scaffold Fast', 'Generate React forms, Express routes & Mongoose schemas'], ['Debug Smarter', 'Paste stack trace + code -> find root cause in seconds'], ['Write Tests', 'Auto-generate edge-case unit & API tests'], ['Verify Always', 'Read every line—never ship code you do not understand!']],
    jobUse: 'Companies now expect developers to use AI assistants responsibly to ship clean features faster.',
    mistake: 'Blindly copy-pasting 200 lines of AI code without reading it, then failing to debug a 1-line bug in an interview!',
    proHabit: 'Rule of Understanding: Never commit a single line of AI-generated code you cannot explain line-by-line.',
    rule: 'AI Writes Boilerplate Fast; Engineers Own Architecture, Debugging & Security.',
    code: `// Smart AI Dev Prompt:
"Write a clean Express.js POST /api/register route using bcrypt & Zod validation.
Return 400 on invalid input, 409 on duplicate email, and never log passwords."`,
    out: 'Production-grade starter route in 10 seconds ready for human review.',
    q1: ['Why can AI coding tools make a strong developer 3x faster, yet hurt a beginner who does not learn fundamentals?', 'A strong developer can write precise prompts, spot subtle AI security or logic bugs, and integrate code cleanly. A beginner who skips fundamentals cannot tell when AI hallucinates broken or insecure code and gets stuck debugging.'],
  },
  {
    id: 9, mod: 2, tInMod: 2,
    title: 'AI coding assistants overview',
    sub: 'Inline Autocomplete, Chat-in-IDE & Agentic Coding Tools (Copilot, Cursor, Gemini)',
    coreEn: 'AI coding tools fall into ==3 categories==: ==Inline Autocomplete== (GitHub Copilot predicting lines as you type), ==IDE Chat & Refactor== (explaining/editing selected files), and ==Agentic Assistants== (planning & editing multi-file features).',
    coreHi: 'AI coding tools ==3 types== ke hote hain: ==Inline Autocomplete== (type karte waqt lines suggest kare), ==IDE Chat== (selected file debug/explain kare), aur ==Agentic Tools== (multi-file features build karein)!',
    analogyTitle: 'Spellcheck (Autocomplete) vs Pair Programmer (IDE Chat) vs Junior Dev (Agent)',
    analogyEn: 'Knowing when to use quick inline completion vs structured multi-file chat keeps your workflow blazing fast and bug-free!',
    analogyHi: 'Chhote function ke liye inline autocomplete aur bade debug ke liye IDE chat use karna best combo hai!',
    steps: [['Inline Tab', 'Accept clean single-line or function completions'], ['Chat With Context', 'Attach exact file/error so AI sees real code'], ['Diff Review', 'Inspect every green/red diff line before accepting'], ['Run & Test', 'Execute `npm run dev` / tests to verify behavior']],
    jobUse: 'Standard daily toolkit in modern engineering teams worldwide.',
    mistake: 'Accepting giant multi-file diffs blindly without running tests or checking Git diff.',
    proHabit: 'Always run `git diff` after an AI coding session to audit every single changed line.',
    rule: 'Prompt Clearly -> Review Every Diff -> Run Tests -> Commit Cleanly.',
    code: `// Safe AI Coding Loop
1. Write small clear spec/prompt
2. Generate code in IDE
3. Inspect git diff + test edge cases
4. Commit clean verified feature`,
    out: 'High-speed engineering with zero sloppy regressions.',
    q1: ['What is the most important habit right after accepting code suggestions from an AI coding assistant?', 'Review the full diff line-by-line to confirm you understand the logic, check for security or edge-case flaws, and test it locally in the browser or terminal before committing.'],
  },
  {
    id: 10, mod: 2, tInMod: 3,
    title: 'AI design and website-generation tools',
    sub: 'Rapid Wireframing & UI Prototyping With AI Before Coding Production React',
    coreEn: '==AI design & site-gen tools== (v0, Galileo, Uizard, Framer AI, Wix Studio) turn text prompts into ==visual wireframes, UI layouts, and Tailwind mockups in minutes==—great for rapid prototyping before building clean production MERN apps!',
    coreHi: '==AI design tools== (Galileo, Uizard, Framer AI) text prompt se minutes mein ==wireframes aur UI layouts== bana dete hain—fast client prototyping ke liye zabardast, par custom production logic ke liye MERN code zaroori hai!',
    analogyTitle: 'Instant 3D Architectural Mockup Before Pouring Real Steel & Concrete',
    analogyEn: 'Use AI design tools to show a client 3 visual layout directions in 15 minutes, get fast sign-off, then build clean accessible React + Tailwind code!',
    analogyHi: 'Client ko 15 minute mein 3 visual directions dikha kar approval lo, phir clean React + Tailwind code build karo!',
    steps: [['Prompt Wireframe', 'Describe page sections, brand vibe & user goal'], ['Iterate Visuals', 'Tweak spacing, hierarchy & mobile responsiveness'], ['Get Client Sign-Off', 'Align on design BEFORE writing backend code'], ['Build Clean Code', 'Translate approved design into modular React + Tailwind']],
    jobUse: 'Lets freelance and product full-stack developers deliver agency-grade UI without a dedicated designer.',
    mistake: 'Shipping bloated, unmaintainable auto-exported code directly to production for a complex SaaS app.',
    proHabit: 'Use AI generators for **design inspiration & rapid mockups**, then write clean semantic React + Tailwind components.',
    rule: 'AI Design Tools = 10x Faster Prototyping; Clean React/MERN = Scalable Production App.',
    code: `// Prototyping-to-Production Workflow
1. Prompt layout mockup (Hero + 3 Features + Pricing + FAQ)
2. Validate mobile UX & contrast
3. Build clean reusable React + Tailwind components`,
    out: 'Gorgeous, fast-approved UI backed by clean maintainable code.',
    q1: ['When is an AI website builder enough, and when do you need a custom Full-Stack MERN application?', 'AI site builders are great for quick marketing landing pages or prototypes, whereas custom Full-Stack MERN apps are needed for complex user authentication, custom databases, APIs, dashboards, role-based permissions, and scalable business logic.'],
  },
  {
    id: 11, mod: 2, tInMod: 4,
    title: 'Using ChatGPT for learning and coding',
    sub: 'Using AI as a Socratic Tutor & Debugger Without Becoming Copy-Paste Dependent',
    coreEn: 'Use ==ChatGPT/LLMs as a 24/7 Senior Mentor==: ask it to ==explain WHY a bug happened==, ==walk through concepts with analogies==, ==review your code for security/cleanliness==, and ==quiz you==—instead of asking it to do your homework blindly!',
    coreHi: '==ChatGPT ko copy-paste machine nahi, 24/7 Senior Mentor== banao: usse poocho ==bug KYUN aaya==, ==apna code review karwao== aur ==analogies se concepts samjho==!',
    analogyTitle: 'Hiring a Personal Gym Trainer vs Asking Someone Else to Lift Your Weights',
    analogyEn: 'If AI lifts the weights (writes everything while you paste), you stay weak for coding interviews; if AI coaches YOUR form (explains errors & reviews your code), you grow 5x faster!',
    analogyHi: 'Agar AI saara code likhe aur aap bina samjhe paste karo toh interview mein fasoge; par AI se concepts aur code review karwaoge toh 5x tez grow karoge!',
    steps: [['Attempt First', 'Write your own solution for 10 mins before asking AI'], ['Share Exact Error', 'Paste error message + minimal relevant code snippet'], ['Ask "Why?"', '"Explain WHY this error happened & how to prevent it"'], ['Request Review', '"Review my React component for bugs, edge cases & a11y"']],
    jobUse: 'Accelerates self-learning and sharpens debugging speed on real production tickets.',
    mistake: 'Typing "Write my whole project" and learning nothing when the interviewer asks you to modify 1 line live.',
    proHabit: 'Add `"Explain step-by-step and do not just give the answer—help me understand the root cause"` to learning prompts!',
    rule: 'Attempt First -> Ask AI "Why?" -> Understand Root Cause -> Type Fix Yourself.',
    code: `// High-ROI Learning Prompt:
"I wrote this fetch() call in React, and it runs infinitely in useEffect.
Explain WHY it loops and show me the minimal fix with best practices."`,
    out: 'Deep understanding of React dependency arrays + clean bug fix.',
    q1: ['How can a web developer use ChatGPT to actually become a BETTER programmer instead of dependent on copy-pasting?', 'Attempt the problem first, ask ChatGPT to explain root causes of errors rather than just pasting fixes, request code reviews for edge cases and security, and re-type solutions yourself to build muscle memory.'],
  },
  {
    id: 12, mod: 2, tInMod: 5,
    title: 'GitHub Copilot overview',
    sub: 'IDE-Native Inline Completions, Comment-Driven Coding & Slash Commands (`/explain`, `/fix`, `/tests`)',
    coreEn: '==GitHub Copilot== runs directly inside ==VS Code==—offering ==Tab inline ghost-text completions==, ==Inline Chat (`Ctrl+I`)== right on selected code, and built-in slash commands ==`/explain`, `/fix`, and `/tests`== grounded in your open workspace!',
    coreHi: '==GitHub Copilot== seedha ==VS Code== ke andar chalta hai—==Tab autocomplete==, ==Inline Chat (`Ctrl+I`)== aur ==`/explain`, `/fix`, `/tests`== commands se aapki coding speed turbocharge ho jati hai!',
    analogyTitle: 'Co-Driver Reading Your Exact Codebase Map Inside VS Code',
    analogyEn: 'Write a crisp comment (`// Validate Indian 10-digit mobile number & return boolean`) and press Tab—Copilot writes clean, well-typed code matching your project style!',
    analogyHi: 'Ek clear comment likho (`// Format price in INR`) aur Tab dabao—Copilot aapke project style mein clean function likh deta hai!',
    steps: [['Write Clear Comments', 'Intent comments produce 5x better inline completions'], ['Inline Chat (Ctrl+I)', 'Highlight function -> `Ctrl+I` -> refactor or add error handling'], ['Use Slash Commands', '`/explain` legacy code, `/fix` errors, `/tests` unit tests'], ['Verify Logic', 'Always check regex, edge cases & security manually']],
    jobUse: 'Industry-standard AI pair programmer installed across most corporate VS Code teams.',
    mistake: 'Blindly pressing `Tab` on every ghost suggestion—accepting subtle off-by-one or outdated API bugs!',
    proHabit: 'Keep related open tabs (like your Mongoose schema or TypeScript interface) open in VS Code so Copilot sees exact field names!',
    rule: 'Open Related Tabs + Clear Comments + Ctrl+I Inline Chat + Audit Every Tab Accept.',
    code: `// VS Code Copilot Power Flow:
// 1. Write clear JSDoc/comment -> press Tab
// 2. Select complex block -> Ctrl + I -> "/explain" or "/tests"
// 3. Run code & verify edge cases!`,
    out: 'Faster, cleaner, better-tested code directly inside VS Code.',
    q1: ['How does keeping your Mongoose model or TypeScript types file open in another VS Code tab help GitHub Copilot?', 'GitHub Copilot uses open editor tabs as context, so seeing your exact database field names and types allows it to suggest accurate property names and API payloads instead of guessing.'],
  },
  {
    id: 13, mod: 2, tInMod: 6,
    title: 'Galileo AI and Uizard AI overview',
    sub: 'Text-to-UI & Sketch-to-Wireframe AI Tools for Rapid Frontend Design Inspiration',
    coreEn: '==Galileo AI== generates ==high-fidelity editable UI designs== from text prompts (exportable to Figma!), while ==Uizard AI== turns ==hand-drawn napkin sketches or screenshots into clickable wireframes== in seconds.',
    coreHi: '==Galileo AI== text prompt se ==high-fidelity UI screens== banata hai (Figma export ke saath), aur ==Uizard AI== aapke ==pen-paper sketch ko seconds mein clickable wireframe== mein badal deta hai!',
    analogyTitle: 'Sketching a House on a Napkin and Watching It Become a Clean Blueprint Instantly',
    analogyEn: 'Stuck designing a SaaS dashboard layout? Sketch 4 boxes on paper -> upload to Uizard (or prompt Galileo) -> export to Figma -> code cleanly in Tailwind!',
    analogyHi: 'Dashboard design mein atke ho? Paper par 4 boxes banao -> Uizard/Galileo se clean mockup lo -> Figma -> Tailwind code!',
    steps: [['Prompt Or Sketch', 'Describe screen goal (Galileo) or upload paper sketch (Uizard)'], ['Explore 2-3 Layouts', 'Compare visual hierarchy, spacing & mobile cards'], ['Export To Figma', 'Inspect colors, spacing & typography tokens cleanly'], ['Code In React', 'Build modular accessible Tailwind components']],
    jobUse: 'Solves "developer design block" when building side projects, startups, and client MVPs.',
    mistake: 'Treating AI mockups as final UX without checking mobile usability, real data lengths, or contrast.',
    proHabit: 'Always test AI UI designs with realistic messy data (long names, empty states, error banners) before coding!',
    rule: 'Galileo/Uizard = Fast Visual Direction -> Figma Tokens -> Clean React + Tailwind.',
    code: `// UI Design Prompt Pattern (Galileo / Uizard):
"Modern SaaS analytics dashboard for a retail store:
Left collapsible sidebar, 4 top KPI cards, revenue line chart,
recent orders table with status pills, clean light theme, high contrast."`,
    out: 'Crisp UI mockup ready for Figma inspection and React implementation.',
    q1: ['What is the main difference between Galileo AI and Uizard AI?', 'Galileo AI focuses on generating high-fidelity, Figma-editable UI designs from text prompts, while Uizard AI excels at rapid wireframing and converting hand-drawn sketches or screenshots into editable digital prototypes.'],
  },
  {
    id: 14, mod: 2, tInMod: 7,
    title: 'Framer AI and Wix Studio AI overview',
    sub: 'AI No-Code Site Builders for Marketing Pages vs Custom MERN Web Apps',
    coreEn: '==Framer AI== and ==Wix Studio AI== let you generate, style, and publish ==responsive marketing websites, portfolios, and agency landing pages== in minutes—ideal for quick client marketing sites while ==MERN== powers custom full-stack software!',
    coreHi: '==Framer AI== aur ==Wix Studio AI== minutes mein ==responsive marketing sites aur portfolios== publish kar dete hain—marketing pages ke liye super fast, aur custom full-stack apps ke liye ==MERN== king hai!',
    analogyTitle: 'Prefab Pop-Up Showroom (Framer/Wix) vs Custom Multi-Story Tech HQ (MERN)',
    analogyEn: 'A smart full-stack developer knows BOTH: use Framer for a 1-day client landing page, and build the client custom booking/dashboard SaaS in React + Node + MongoDB!',
    analogyHi: 'Smart developer dono jaanta hai: 1-day landing page Framer par, aur custom SaaS/dashboard MERN stack par!',
    steps: [['Use Framer/Wix For', 'Landing pages, portfolios, agency sites, quick MVPs'], ['Use MERN Stack For', 'Custom auth, complex DB, dashboards, APIs, SaaS'], ['Connect Both', 'Host marketing site on Framer + app on `app.domain.com`!'], ['Check Ownership', 'Know code export, SEO & monthly hosting lock-in']],
    jobUse: 'Lets freelancers deliver fast marketing sites while commanding premium rates for custom MERN apps.',
    mistake: 'Trying to build a complex multi-role ERP or real-time chat app inside a no-code landing page builder.',
    proHabit: 'Use the Hybrid Startup Pattern: Marketing Site (`domain.com`) + Custom MERN App (`app.domain.com`).',
    rule: 'Marketing Site = Fast No-Code/Static | Custom Product & Data = Full-Stack MERN.',
    code: `// Real Startup Architecture:
https://myproduct.com     -> Fast Marketing Landing Page (SEO)
https://app.myproduct.com -> React + Vite Frontend
https://api.myproduct.com -> Node + Express + MongoDB Backend`,
    out: 'Optimal speed-to-market paired with unlimited custom scalability.',
    q1: ['Why do many SaaS startups host their marketing landing page separately from their custom MERN web application?', 'Marketing teams can rapidly iterate copy and animations on landing pages (e.g., Framer or static site) with top SEO speed, while engineers build and deploy the authenticated MERN product cleanly on app.domain.com.'],
  },
  {
    id: 15, mod: 2, tInMod: 8,
    title: 'Responsible AI use and verification',
    sub: 'Auditing AI Code for Hallucinated Packages, Security Flaws & Outdated APIs',
    coreEn: 'Never ship unverified AI code! Always check for ==4 classic AI coding traps==: ==1) Hallucinated/non-existent npm packages (slopsquatting risk!), 2) Security vulnerabilities (SQL/NoSQL injection, XSS), 3) Outdated React/Express syntax, and 4) Unhandled error/edge cases==.',
    coreHi: 'AI ka code kabhi bina check kiye ship mat karo—==4 traps== hamesha check karo: ==1) Fake npm packages, 2) Security bugs (XSS/Injection), 3) Purana React/Express syntax, aur 4) Missing error handling==!',
    analogyTitle: 'Code Inspector Checking Every Weld Before Opening a Bridge to Traffic',
    analogyEn: 'An AI might invent a package name `express-super-sanitize` that does not exist (or worse, a hacker registered as malware!)—always verify npm packages on npmjs.com!',
    analogyHi: 'AI kabhi-kabhi fake npm package naam suggest kar deta hai—install karne se pehle hamesha `npmjs.com` par verify karo!',
    steps: [['Verify Packages', 'Confirm every suggested `npm install` package is real & popular'], ['Check Security', 'Scan for XSS (`dangerouslySetInnerHTML`), missing auth, raw queries'], ['Check Modern Docs', 'Verify React 18/19 & Express 4/5 current syntax'], ['Test Edge Cases', 'Test empty input, network offline, 404 & invalid tokens']],
    jobUse: 'Protects production apps from CVEs, supply-chain attacks, and broken builds.',
    mistake: 'Blindly running `npm install <random-ai-package>` or pasting `dangerouslySetInnerHTML` with user input!',
    proHabit: 'Run `npm audit`, test negative/invalid inputs, and read every AI-written security/auth line twice.',
    rule: 'Verify Packages + Audit Security + Test Edge Cases = Responsible AI Engineering.',
    code: `// Verification Checklist Before Committing AI Code:
// [x] Every npm package verified real on npmjs.com
// [x] Zero hardcoded secrets or unsafe HTML injection
// [x] Error handling (try/catch + HTTP status codes) present
// [x] Tested locally in browser + DevTools (0 console errors)`,
    out: 'Clean, secure, interview-defensible production code.',
    q1: ['What is a "hallucinated npm package" risk when using AI coding assistants?', 'An AI may invent a plausible-sounding package name that does not exist—and attackers sometimes register those exact names with malicious code ("slopsquatting"). Always verify package existence, weekly downloads, and maintainers before installing.'],
  },
  {
    id: 16, mod: 2, tInMod: 9,
    title: 'Protecting passwords, API keys, and private code',
    sub: '`.env` Files, `.gitignore`, Never Exposing Secrets in Frontend or AI Prompts',
    coreEn: 'Keep secrets 100% locked down: store ==MongoDB URIs, JWT secrets, and API keys ONLY in backend `.env` files==, add ==`.env` to `.gitignore` immediately==, ==NEVER paste real keys into public AI chats==, and ==NEVER put secret keys in frontend React code==!',
    coreHi: 'Secrets ko 100% safe rakho: ==MongoDB URI, JWT secret aur API keys sirf backend `.env`== mein rakho, ==`.env` ko `.gitignore`== mein daalo, aur ==kabhi frontend React ya public AI chat mein real keys mat daalo==!',
    analogyTitle: 'Never Printing Your Bank ATM PIN on the Front of Your Storefront Sign',
    analogyEn: 'Anything inside frontend React code (even `VITE_...` variables!) is visible to EVERY visitor in DevTools—real secret keys must live ONLY on your Node/Express backend!',
    analogyHi: 'Frontend React ka har variable DevTools mein sabko dikhta hai—secret API keys hamesha sirf backend Node/Express server par rakho!',
    steps: [['Use .env On Backend', 'Store `MONGO_URI`, `JWT_SECRET`, `OPENAI_API_KEY` in `.env`'], ['Gitignore Immediately', 'Add `.env` to `.gitignore` BEFORE your very first commit!'], ['Provide .env.example', 'Commit safe dummy `.env.example` for teammates'], ['Sanitize AI Prompts', 'Replace real keys/emails with `DUMMY_KEY` before pasting to AI']],
    jobUse: 'Prevents ₹5,00,000+ stolen cloud bills from bots scanning GitHub for leaked API keys in 60 seconds!',
    mistake: 'Pushing `.env` to a public GitHub repo—automated bots steal exposed AWS/OpenAI/MongoDB keys within 30 seconds!',
    proHabit: 'If you ever accidentally commit a secret key to GitHub, **REVOKE & ROTATE IT IMMEDIATELY** (deleting it in a later commit does NOT remove Git history!).',
    rule: 'Secrets = Backend .env ONLY | .env in .gitignore | Leaked Key = Rotate Immediately.',
    code: `# .gitignore (MUST HAVE!)
node_modules/
.env
.env.local

# .env.example (Safe to commit!)
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/app
JWT_SECRET=replace_with_long_random_secret`,
    out: 'Zero leaked credentials across GitHub, frontend bundles, and AI chats.',
    q1: ['If you accidentally push your .env file with a real API key to a public GitHub repo, is deleting the file in a second commit enough?', 'No! The secret still exists permanently in the Git commit history, and automated bots scrape public commits within seconds. You must IMMEDIATELY revoke/rotate the leaked key at the provider, then clean Git history and add .env to .gitignore.'],
  },

  // ═══ CHAPTER 03: Computer & Internet Fundamentals (17..24) ═══
  {
    id: 17, mod: 3, tInMod: 1,
    title: 'Computer basics for developers',
    sub: 'CPU, RAM, Disk, OS, File Paths & Processes Explained Simply for Coding',
    coreEn: 'Understand how your machine runs code: ==CPU== executes instructions, ==RAM== holds fast running programs/variables, ==SSD/Disk== stores persistent files/databases, ==OS== manages processes & ports, and ==Relative vs Absolute Paths== locate project files.',
    coreHi: 'Developer ke liye computer basics: ==CPU== code run karta hai, ==RAM== active programs/variables rakhta hai, ==SSD== permanent files store karta hai, aur ==Relative Paths (`./src/app.js`)== har PC par project chalate hain!',
    analogyTitle: 'Chef (CPU) Working on a Kitchen Counter (RAM) Pulling Ingredients From the Pantry (SSD)',
    analogyEn: 'Always use **Relative Paths** (`./images/logo.png`), NEVER hardcoded local paths (`C:\\Users\\Rahul\\Desktop\\logo.png`)—otherwise your site breaks on every other computer!',
    analogyHi: 'Kabhi `C:\\Users\\Rahul\\Desktop\\logo.png` mat likho—hamesha **Relative Path** (`./images/logo.png`) use karo taaki site server par bhi chale!',
    steps: [['CPU & RAM', 'More RAM = smoother VS Code + Chrome + Node + MongoDB'], ['Relative Paths', '`./` (current folder) & `../` (parent folder) work everywhere'], ['Case Sensitivity', 'Linux servers are case-sensitive (`Logo.png` != `logo.png`!)'], ['Ports & Processes', 'Local dev apps run on ports (`5173` React, `5000` Express)']],
    jobUse: 'Prevents the #1 deployment bug: "It worked on Windows, why did images break on Linux Vercel?" (Case sensitivity!).',
    mistake: 'Naming a file `Header.PNG` and importing `./header.png` (works on Windows, crashes on Linux production servers!).',
    proHabit: 'Use **lowercase kebab-case** (`hero-banner.png`, `user-card.jsx`) for files and folders so Linux servers never break!',
    rule: 'Relative Paths + Lowercase Filenames = Zero "Works on My Machine" Deployment Bugs.',
    code: `// Good Relative Path (Works on Windows, Mac & Linux Servers):
import logo from './assets/company-logo.png';

// Bad Hardcoded Path (Breaks everywhere else!):
// "C:/Users/admin/Desktop/project/Logo.PNG"`,
    out: 'Portable, cross-platform project structure.',
    q1: ['Why can a web app work perfectly on a Windows laptop yet throw "File Not Found" when deployed to a Linux server?', 'Windows file systems are case-insensitive (Logo.png matches logo.png), whereas Linux production servers are strictly case-sensitive. Matching exact casing—or using lowercase filenames—prevents this bug.'],
  },
  {
    id: 18, mod: 3, tInMod: 2,
    title: 'Internet and web basics',
    sub: 'Internet (Global Network) vs World Wide Web (HTTP/HTML Apps), IP Addresses & Packets',
    coreEn: 'The ==Internet== is the global physical network of cables, routers, and ==IP addresses== connecting devices via ==TCP/IP packets==, while the ==World Wide Web (WWW)== is the application layer of ==websites and APIs== running over HTTP/HTTPS on top of it.',
    coreHi: '==Internet== poori duniya ka physical network (cables, routers, IP addresses) hai, aur ==Web (WWW)== uske upar chalne wali ==websites aur APIs== ki service hai (HTTP/HTTPS ke through)!',
    analogyTitle: 'Highway Road Network (Internet) vs Delivery Trucks Carrying Parcels (The Web)',
    analogyEn: 'Email, Zoom, WhatsApp, and the Web all travel on the same Internet highways—HTTP/HTTPS is the specific language web browsers and servers speak!',
    analogyHi: 'Email, Video calls aur Websites sab Internet highways par chalte hain—Web unme se HTTP/HTTPS service hai!',
    steps: [['IP Address', 'Unique numeric address of every server (`142.250.190.46`)'], ['Packets', 'Large files/pages split into tiny packets & reassembled'], ['Client & Server', 'Client (browser/mobile) requests; Server responds 24/7'], ['Protocols', 'TCP/IP moves packets; HTTP/HTTPS moves web pages & JSON']],
    jobUse: 'Builds core networking literacy for API integration, cloud hosting, and debugging.',
    mistake: 'Confusing the Internet itself with a single web browser like Chrome.',
    proHabit: 'Remember: `localhost` (`127.0.0.1`) is your own computer acting as BOTH Client and Server during development!',
    rule: 'Internet = Global Roads (TCP/IP) | Web = HTTP/HTTPS Sites & APIs | 127.0.0.1 = Localhost.',
    code: `// Local Development vs Production Internet
Local Dev:  http://localhost:5173  (IP: 127.0.0.1 — your own PC)
Production: https://myapp.com      (Public Cloud Server IP)`,
    out: 'Crystal-clear mental model of local vs global web networking.',
    q1: ['What is the difference between the Internet and the World Wide Web?', 'The Internet is the global physical infrastructure of interconnected networks using TCP/IP, while the World Wide Web is one service running on top of the Internet using HTTP/HTTPS to deliver web pages and APIs.'],
  },
  {
    id: 19, mod: 3, tInMod: 3,
    title: 'Browser fundamentals',
    sub: 'How Chrome/Edge Parse HTML -> DOM, CSS -> CSSOM, Execute JS & Render Pixels',
    coreEn: 'A ==web browser== (Chrome/Edge/Firefox/Safari) downloads HTML, CSS, and JS, builds the ==DOM (HTML tree)== and ==CSSOM (Style tree)==, combines them into a ==Render Tree==, executes JavaScript via its ==JS Engine (V8)==, and paints pixels at 60fps!',
    coreHi: '==Web Browser== HTML se ==DOM tree== aur CSS se ==CSSOM== banata hai, dono ko mila kar screen par pixels paint karta hai, aur ==V8 engine== mein aapka JavaScript run karta hai!',
    analogyTitle: 'Smart Translator Turning Blueprints (HTML/CSS/JS) Into a Live Interactive Room',
    analogyEn: 'Understanding browser caching, localStorage, cookies, and rendering explains why hard refresh (`Ctrl+Shift+R`) fixes stale CSS and why huge unoptimized images slow pages down!',
    analogyHi: 'Browser cache samajhne se pata chalta hai ki purani CSS atakne par `Ctrl+Shift+R` (Hard Refresh) turant fix kyun karta hai!',
    steps: [['Parse HTML -> DOM', 'Turns tags into an interactive JavaScript object tree'], ['Parse CSS -> CSSOM', 'Computes exact colors, sizes & responsive rules'], ['JS Engine (V8)', 'Executes your JS/React logic & updates the DOM'], ['Browser Storage', 'Cookies, LocalStorage & Cache persist state & speed']],
    jobUse: 'Essential for frontend performance optimization and cross-browser debugging.',
    mistake: 'Testing only on Chrome Desktop and never checking Safari/Mobile or clearing browser cache.',
    proHabit: 'Use `Ctrl+Shift+R` (Hard Reload) or check **"Disable cache"** in DevTools Network tab while developing!',
    rule: 'HTML -> DOM + CSS -> CSSOM + JS Engine = Live 60fps Web Experience.',
    code: `// Browser Rendering Pipeline:
HTML -> DOM Tree ──┐
                   ├──> Render Tree -> Layout -> Paint Pixels!
CSS  -> CSSOM ─────┘`,
    out: 'Deep understanding of how browsers bring your code to life.',
    q1: ['What is the DOM (Document Object Model) created by the browser?', 'The DOM is an in-memory tree representation of an HTML document built by the browser, allowing JavaScript and React to dynamically read, add, modify, and style elements on the page.'],
  },
  {
    id: 20, mod: 3, tInMod: 4,
    title: 'URLs and domain names',
    sub: 'Anatomy of a URL: Protocol, Subdomain, Domain, Path, Query Params & Hash',
    coreEn: 'Every ==URL (Uniform Resource Locator)== has structured parts: ==Protocol (`https://`)==, ==Subdomain (`api.`)==, ==Domain (`shop.com`)==, ==Path (`/products/42`)==, ==Query Params (`?sort=price&page=2`)==, and ==Hash (`#reviews`)==.',
    coreHi: 'Har ==URL== ke clear parts hote hain: ==Protocol (`https://`)==, ==Subdomain (`api.`)==, ==Domain (`shop.com`)==, ==Path (`/products/42`)==, ==Query Params (`?sort=price`)== aur ==Hash (`#reviews`)==!',
    analogyTitle: 'Complete Postal Address: Country -> City -> Street -> Apartment -> Room',
    analogyEn: 'In MERN APIs, you read Path params (`req.params.id`) for a specific resource (`/users/42`) and Query params (`req.query.page`) for filtering/sorting (`?page=2&limit=10`)!',
    analogyHi: 'Express backend mein `/users/42` `req.params.id` banta hai aur `?page=2` `req.query.page` banta hai—URL anatomy backend routing ki jaan hai!',
    steps: [['Protocol', '`https://` (encrypted) vs `http://` (unencrypted)'], ['Domain + TLD', '`github.com` (domain) | `api.github.com` (subdomain)'], ['Path / Route', '`/products/42` identifies exact page or API resource'], ['Query & Hash', '`?search=phone&page=2` filters | `#top` jumps on page']],
    jobUse: 'Used daily in React Router, Express.js API design, SEO, and analytics tracking.',
    mistake: 'Putting sensitive passwords or tokens inside URL Query Params (URLs get logged in browser history and server logs!).',
    proHabit: 'Never put passwords or secret tokens in URLs—always send them inside HTTPS `POST` request bodies or `Authorization` headers!',
    rule: 'Path = Resource (`/users/42`) | Query = Filter (`?role=admin`) | Never Put Secrets in URLs.',
    code: `// Dissecting a Full Production URL:
// https://api.shop.com:443/v1/products/42?currency=INR#specs
// [proto] [sub][domain][port][---path----][---query---][hash]`,
    out: 'Complete fluency reading and designing clean RESTful URLs.',
    q1: ['In a REST API URL like /api/products/42?currency=INR, what is the difference between "42" and "currency=INR"?', '"42" is a Path Parameter identifying a specific resource (product #42), while "currency=INR" is a Query Parameter used to filter, format, sort, or paginate the response.'],
  },
  {
    id: 21, mod: 3, tInMod: 5,
    title: 'DNS basics',
    sub: 'The Internet Phonebook Mapping Human Domains (`myapp.com`) to Server IP Addresses',
    coreEn: '==DNS (Domain Name System)== translates human-friendly domain names (`futureit.com`) into ==machine IP addresses (`76.76.21.21`)== using DNS records like ==A Record== (IPv4), ==CNAME== (alias to Vercel/Netlify), and ==MX== (email routing).',
    coreHi: '==DNS (Domain Name System)== internet ka ==phonebook== hai jo insaan ke naam (`myapp.com`) ko server ke ==IP address== mein badalta hai—deployment mein ==A Record== aur ==CNAME== sabse zyada use hote hain!',
    analogyTitle: 'Phone Contacts App Turning "Mom" Into "+91-98765-43210" Automatically',
    analogyEn: 'When you buy a custom domain on GoDaddy/Namecheap and connect it to Vercel, you simply add Vercel **A** and **CNAME** records in DNS settings!',
    analogyHi: 'GoDaddy/Namecheap se domain kharid kar Vercel se connect karne ke liye bas **A** aur **CNAME** DNS records add karne hote hain!',
    steps: [['User Types Domain', 'Browser checks local cache -> ISP DNS Resolver'], ['Record Lookup', 'Finds authoritative A Record (IP) or CNAME (alias)'], ['Connects Server', 'Browser connects directly to returned IP address'], ['Propagation', 'DNS changes take a few minutes to propagate globally']],
    jobUse: 'Required every time you launch a client website or portfolio on a custom `.com` domain.',
    mistake: 'Panicking when a newly updated custom domain does not load in 10 seconds (DNS propagation takes 5–30 minutes!).',
    proHabit: 'Know the 3 DNS records every developer touches: **A** (root domain -> IP), **CNAME** (`www` -> host), and **TXT** (domain verification).',
    rule: 'DNS = Domain -> IP Phonebook | A Record (Root IP) + CNAME (Subdomain Alias).',
    code: `# Connecting Custom Domain to Vercel (DNS Records):
Type: A     | Name: @   | Value: 76.76.21.21
Type: CNAME | Name: www | Value: cname.vercel-dns.com`,
    out: 'Custom `.com` domain live with automatic HTTPS.',
    q1: ['What are the 2 main DNS records you configure when connecting a custom domain to a hosting platform like Vercel or Netlify?', 'An A Record pointing the root domain (@) to the host IPv4 address, and a CNAME Record pointing the www subdomain to the platform target hostname.'],
  },
  {
    id: 22, mod: 3, tInMod: 6,
    title: 'HTTP and HTTPS',
    sub: 'Plaintext vs TLS-Encrypted Traffic, SSL Certificates & Why HTTPS Is Mandatory Today',
    coreEn: '==HTTP== sends web requests in ==readable plaintext== (anyone on public Wi-Fi can sniff passwords!), whereas ==HTTPS== wraps HTTP inside ==TLS/SSL encryption== so all logins, cookies, JWTs, and payments stay 100% private and tamper-proof!',
    coreHi: '==HTTP== data ko ==open plaintext== mein bhejta hai (public Wi-Fi par hack ho sakta hai!), jabki ==HTTPS== ==TLS/SSL encryption== lagata hai taaki logins, JWTs aur payments 100% safe rahein!',
    analogyTitle: 'Open Postcard (HTTP) vs Sealed Armored Envelope (HTTPS)',
    analogyEn: 'Modern browsers block Camera, Microphone, Geolocation, and show scary `"Not Secure"` warnings on plain HTTP—Vercel, Render, and Cloudflare give FREE automatic HTTPS!',
    analogyHi: 'Aajkal browsers HTTP par `"Not Secure"` warning dete hain—Vercel aur Render par FREE automatic HTTPS milta hai!',
    steps: [['HTTP (Port 80)', 'Unencrypted plaintext—NEVER use for logins or production'], ['HTTPS (Port 443)', 'Encrypted via TLS/SSL certificate (verified identity)'], ['Free Auto-SSL', 'Vercel, Render, Netlify & Let Encrypt issue free certs'], ['No Mixed Content', 'Never load `http://` images/APIs inside an `https://` site!']],
    jobUse: 'Mandatory for security, SEO rankings, payment gateways, and modern browser APIs.',
    mistake: 'Calling an `http://` backend URL from an `https://` React site (browsers instantly block Mixed Content!).',
    proHabit: 'Always deploy BOTH frontend and backend over **HTTPS** with zero hardcoded `http://localhost` URLs in production!',
    rule: 'Always HTTPS in Production (Free Auto-SSL) + Zero Mixed HTTP Content.',
    code: `// Environment-Safe API URL (Never hardcode http://localhost in prod!)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
fetch(\`\${API_URL}/api/users\`);`,
    out: 'Encrypted, browser-trusted, zero-mixed-content API calls.',
    q1: ['What does the "S" in HTTPS stand for, and what 2 guarantees does HTTPS provide?', 'HTTPS stands for Hypertext Transfer Protocol Secure (using TLS/SSL). It guarantees Encryption (nobody on the network can read data in transit) and Authentication/Integrity (you are talking to the real server and data was not tampered with).'],
  },
  {
    id: 23, mod: 3, tInMod: 7,
    title: 'Hosting and servers',
    sub: 'Static Frontend Hosting (Vercel/Netlify) vs Backend Servers (Render/Railway/AWS) & Cloud DB',
    coreEn: 'A ==Server== is an always-on cloud computer running your code 24/7: host ==React/Static Frontends== on global ==CDNs (Vercel, Netlify)== for instant speed, ==Node/Express Backends== on ==Render, Railway, or AWS==, and ==MongoDB== on ==MongoDB Atlas==!',
    coreHi: '==Server== ek 24/7 cloud computer hai: ==React Frontend== ko ==Vercel/Netlify CDN== par, ==Node/Express Backend== ko ==Render/Railway/AWS== par, aur ==MongoDB== ko ==MongoDB Atlas== par host karo!',
    analogyTitle: 'Renting Cloud Storefronts Around the World (CDN) Connected to Your Central Warehouse (Backend)',
    analogyEn: 'A **CDN** (Vercel/Cloudflare) serves your React files from a server right inside Mumbai/Delhi instead of New York—cutting page load time from 3s to 0.3s!',
    analogyHi: 'CDN aapki React files ko user ke sabse paas wale server (Mumbai/Delhi) se serve karta hai—site bijli ki tarah khulti hai!',
    steps: [['Frontend CDN', 'Vercel / Netlify auto-deploys React on every `git push`'], ['Backend Runtime', 'Render / Railway / AWS runs Node.js Express server 24/7'], ['Managed Cloud DB', 'MongoDB Atlas handles backups, SSL & scaling'], ['Env Variables', 'Set production secrets safely in host dashboard (not Git!)']],
    jobUse: 'Lets you deploy real live full-stack MERN portfolio apps for ₹0 on free tiers!',
    mistake: 'Trying to host a long-running Express + Socket.io backend on a static-only host like GitHub Pages.',
    proHabit: 'Connect GitHub to Vercel (Frontend) + Render (Backend) + MongoDB Atlas (DB) for instant CI/CD auto-deployments!',
    rule: 'Frontend -> Vercel CDN | Backend -> Render/Railway | Database -> MongoDB Atlas.',
    code: `// Free Production MERN Hosting Stack:
1. Frontend (React/Vite) -> Vercel (Auto-deploy from GitHub)
2. Backend (Node/Express) -> Render Web Service
3. Database (MongoDB) -> MongoDB Atlas M0 Free Cluster`,
    out: 'Live 24/7 full-stack production URL ready for your resume.',
    q1: ['Why can you deploy a React frontend to GitHub Pages or Vercel static hosting, but need a Node runtime host like Render or Railway for Express?', 'A built React app compiles into static HTML, CSS, and JS files that run inside the user browser, whereas an Express.js backend requires a live server process running Node.js continuously to listen for incoming HTTP requests and query MongoDB.'],
  },
  {
    id: 24, mod: 3, tInMod: 8,
    title: 'Local files vs live websites',
    sub: 'Why `file://` Breaks Modern JS & Why Developers Use Local Dev Servers (`localhost`)',
    coreEn: 'Opening `index.html` directly via ==`file://`== breaks ==ES Modules (`import/export`), `fetch()` CORS, and React Router==—always develop on a ==local dev server (`http://localhost:5173` via Live Server or Vite)== so local behavior matches live production!',
    coreHi: 'HTML ko double-click karke `file://` se kholne par ==ES Modules, `fetch()` aur React Router fail== ho jaate hain—hamesha ==`http://localhost` (Live Server ya Vite)== par develop karo!',
    analogyTitle: 'Testing a Car on a Real Track (localhost) vs Pushing It Around the Garage (`file://`)',
    analogyEn: 'Vite dev server gives you `http://localhost:5173` WITH **Hot Module Replacement (HMR)**—save a file in VS Code and the browser updates in 50ms without losing form state!',
    analogyHi: 'Vite dev server (`localhost:5173`) mein file save karte hi 50ms mein browser live update ho jata hai!',
    steps: [['Avoid file://', 'Never double-click `index.html` for JS/API apps'], ['Use Local Server', 'VS Code Live Server (HTML) or `npm run dev` (Vite/React)'], ['Build For Prod', '`npm run build` bundles minified production `dist/` files'], ['Deploy Cleanly', 'Push to GitHub -> live HTTPS URL accessible worldwide']],
    jobUse: 'Eliminates confusing CORS and module errors on Day 1 of learning web development.',
    mistake: 'Double-clicking `index.html`, seeing `CORS policy blocked file://` in Console, and thinking your JS code is broken!',
    proHabit: 'Always launch HTML projects with VS Code **Live Server** and React projects with **`npm run dev`**.',
    rule: 'Local Dev = http://localhost (Vite / Live Server) | Never file://.',
    code: `# Start Local Dev Servers:
# Frontend (Vite + React):
npm run dev       # -> http://localhost:5173

# Backend (Node + Express):
npm run dev       # -> http://localhost:5000`,
    out: 'Instant hot-reloading dev environment matching production HTTP.',
    q1: ['Why do modern JavaScript modules (type="module") and fetch() calls fail when you open index.html directly via file://?', 'For security, browsers enforce strict CORS restrictions on the file:// protocol, blocking local module imports and API fetches. Running a local HTTP server (like VS Code Live Server or Vite) resolves this cleanly.'],
  },

  // ═══ CHAPTER 04: VS Code & Developer Tools (25..31) ═══
  {
    id: 25, mod: 4, tInMod: 1,
    title: 'Installing VS Code',
    sub: 'Setting Up Your Pro Code Editor With Auto Save, Format on Save & Power Shortcuts',
    coreEn: '==Visual Studio Code (VS Code)== is the #1 free code editor for MERN developers—configure ==Auto Save (`afterDelay`), Format on Save (Prettier), Word Wrap, and Integrated Terminal (`Ctrl+` `)== on Day 1 for effortless coding!',
    coreHi: '==VS Code== duniya ka #1 free code editor hai—Day 1 par hi ==Auto Save, Format on Save (Prettier), Word Wrap aur Integrated Terminal== on kar lo, coding speed double ho jayegi!',
    analogyTitle: 'Setting Up Your Custom Pilot Cockpit Before Your First Flight',
    analogyEn: 'Master just 4 VS Code shortcuts—`Ctrl+P` (Quick Open file), `Ctrl+Shift+P` (Command Palette), `Ctrl+D` (Multi-cursor select), and `Alt+Up/Down` (Move line)—to code like a senior engineer!',
    analogyHi: 'Sirf 4 shortcuts (`Ctrl+P`, `Ctrl+Shift+P`, `Ctrl+D`, `Alt+Up/Down`) yaad kar lo—aapki speed senior developer jaisi ho jayegi!',
    steps: [['Install VS Code', 'Download official installer + check "Add to PATH"'], ['Enable Auto Save', 'File -> Auto Save (never forget to save before refresh!)'], ['Format On Save', 'Settings -> Format On Save = ON (clean indentation always)'], ['Master 4 Keys', '`Ctrl+P`, `Ctrl+Shift+P`, `Ctrl+D`, ``Ctrl+` ``']],
    jobUse: 'Used by 75%+ of professional web developers globally.',
    mistake: 'Manually pressing Tab/Space 100 times to indent messy code instead of enabling Format on Save!',
    proHabit: 'Open any project folder right from terminal by typing `code .`!',
    rule: 'Auto Save + Format on Save + Ctrl+P + Ctrl+D = Effortless VS Code Speed.',
    code: `// Essential VS Code Shortcuts:
// Ctrl + P          -> Jump to any file instantly
// Ctrl + Shift + P  -> Command Palette (any setting/action)
// Ctrl + D          -> Select next matching word (multi-cursor!)
// Ctrl + \`          -> Toggle Integrated Terminal`,
    out: 'Clean, lightning-fast developer cockpit ready for MERN.',
    q1: ['What does enabling "Format on Save" with Prettier in VS Code do?', 'Every time you save a file, Prettier automatically formats indentation, quotes, semicolons, and line wraps consistently across HTML, CSS, JavaScript, and React—eliminating messy code and team style debates.'],
  },
  {
    id: 26, mod: 4, tInMod: 2,
    title: 'Useful extensions',
    sub: 'The Clean 6-Extension MERN Starter Pack (No Bloated Editor Slowdown!)',
    coreEn: 'Install the ==essential 6 VS Code extensions== for MERN: ==1) Prettier== (auto-formatting), ==2) ESLint== (catches JS/React bugs live), ==3) Live Server== (HTML dev), ==4) Tailwind CSS IntelliSense==, ==5) ES7+ React Snippets==, and ==6) GitLens / Thunder Client==!',
    coreHi: 'VS Code mein sirf ==6 essential MERN extensions== install karo: ==Prettier, ESLint, Live Server, Tailwind IntelliSense, React Snippets aur Thunder Client (API testing)==—50 bekaar extensions se editor slow mat karo!',
    analogyTitle: '6 Precision Attachments on a Multi-Tool Instead of a 20-kg Toolbox',
    analogyEn: 'Typing `rafce` + Tab with **ES7+ React Snippets** instantly scaffolds a clean React component; **Tailwind IntelliSense** autocompletes every utility class with live color swatches!',
    analogyHi: '`rafce` + Tab dabate hi poora React component ban jata hai aur **Tailwind IntelliSense** har class aur color auto-suggest karta hai!',
    steps: [['Prettier + ESLint', 'Auto-format code + underline JS/React bugs in real time'], ['Live Server', '1-click `localhost` server for HTML/CSS/JS practice'], ['Tailwind + React', 'Tailwind CSS IntelliSense + ES7+ React Snippets (`rafce`)'], ['API & Git Tools', 'Thunder Client (test Express APIs in VS Code) + GitLens']],
    jobUse: 'Cuts typos, syntax errors, and API testing friction dramatically.',
    mistake: 'Installing 45 random themes and conflicting formatters that fight each other and freeze VS Code.',
    proHabit: 'Set **Prettier** as your single Default Formatter in VS Code Settings so formatting never conflicts.',
    rule: 'Prettier + ESLint + Tailwind IntelliSense + React Snippets + Thunder Client = Lean Pro Setup.',
    code: `// Essential 6 VS Code Extensions:
1. esbenp.prettier-vscode         (Auto Formatter)
2. dbaeumer.vscode-eslint         (Live Bug Catcher)
3. ritwickdey.LiveServer          (HTML/CSS Dev Server)
4. bradlc.vscode-tailwindcss      (Tailwind Autocomplete)
5. dsznajder.es7-react-js-snippets (rafce shortcut)
6. rangav.vscode-thunder-client   (Built-in REST API Tester)`,
    out: 'Fast, bug-catching, autocomplete-powered MERN editor.',
    q1: ['What is the difference between Prettier and ESLint in VS Code?', 'Prettier focuses purely on code formatting (indentation, quotes, spacing), whereas ESLint analyzes code quality and catches real bugs (unused variables, missing React hook dependencies, unreachable code).'],
  },
  {
    id: 27, mod: 4, tInMod: 3,
    title: 'Project folders and files',
    sub: 'Clean Scalable Folder Architecture Separating Frontend (`client/`) & Backend (`server/`)',
    coreEn: 'Organize every MERN project cleanly from Day 1: separate ==`client/` (React frontend)== and ==`server/` (Node/Express backend)==, group by role (`components/`, `pages/`, `routes/`, `controllers/`, `models/`), and use ==clean lowercase filenames==.',
    coreHi: 'Har project ko Day 1 se clean structure do: ==`client/` (React)== aur ==`server/` (Node/Express)== alag rakho, aur andar ==`components`, `pages`, `routes`, `controllers`, `models`== folders banao!',
    analogyTitle: 'Well-Organized Grocery Store Aisles Where Every Item Has One Logical Shelf',
    analogyEn: 'A clean folder structure lets any teammate (or interviewer reviewing your GitHub!) find your login API or navbar component in 3 seconds flat!',
    analogyHi: 'Clean folder structure dekh kar hi GitHub par interviewer ko 3 second mein pata chal jata hai ki aap disciplined engineer ho!',
    steps: [['Split Client/Server', '`client/` for React UI | `server/` for Express + MongoDB'], ['Modular Frontend', '`src/components/`, `src/pages/`, `src/hooks/`, `src/services/`'], ['MVC Backend', '`routes/`, `controllers/`, `models/`, `middleware/`'], ['Root Hygiene', '`README.md`, `.gitignore`, `.env.example` at root']],
    jobUse: 'Directly reflects production software engineering standards in team codebases.',
    mistake: 'Dumping 35 files (`app.js`, `login.js`, `style2.css`, `final.html`) all flat in one root folder!',
    proHabit: 'Add a crisp `README.md` with setup steps and screenshots in every GitHub project folder.',
    rule: 'Clean Modular Folders = Easy Debugging, Smooth Teamwork & Impressive GitHub.',
    code: `my-mern-app/
├── client/          # React + Vite + Tailwind
│   └── src/ (components/, pages/, services/)
├── server/          # Node + Express + MongoDB
│   └── src/ (routes/, controllers/, models/, middleware/)
├── .gitignore
└── README.md`,
    out: 'Industry-standard, scalable full-stack repository layout.',
    q1: ['Why do Express.js backends separate code into routes/, controllers/, and models/ folders?', 'Separating concerns keeps code clean and maintainable: routes/ maps URLs to handlers, controllers/ holds business logic, and models/ defines MongoDB Mongoose schemas—making testing and team collaboration effortless.'],
  },
  {
    id: 28, mod: 4, tInMod: 4,
    title: 'Terminal basics',
    sub: 'Essential CLI Commands (`cd`, `ls`, `mkdir`, `npm`, `git`) Every Full-Stack Dev Uses Daily',
    coreEn: 'Master the ==VS Code Integrated Terminal (``Ctrl+` ``)== with 8 daily commands: ==`pwd`== (where am I?), ==`ls`== (list files), ==`cd folder` / `cd ..`== (navigate), ==`mkdir`== (new folder), ==`npm install` / `npm run dev`==, and ==`Ctrl+C`== (stop server)!',
    coreHi: 'VS Code Terminal ke ==8 daily commands== master karo: ==`pwd`, `ls`, `cd`, `cd ..`, `mkdir`, `npm install`, `npm run dev` aur `Ctrl+C` (server band karne ke liye)==—har developer roz use karta hai!',
    analogyTitle: 'Direct Keyboard Express Lane Skipping 10 Slow Mouse Clicks',
    analogyEn: 'Press `Tab` to auto-complete long folder names and press `Up Arrow` to repeat your last command—never type long paths manually!',
    analogyHi: '`Tab` se folder names auto-complete hote hain aur `Up Arrow` se pichhla command wapas aa jata hai!',
    steps: [['Navigate Fast', '`pwd`, `ls`, `cd client`, `cd ..` (+ `Tab` autocomplete!)'], ['Create & Clear', '`mkdir api`, `clear` (or `cls`) to tidy screen'], ['Run Node/NPM', '`npm install`, `npm run dev`, `node index.js`'], ['Stop Cleanly', 'Press `Ctrl+C` to stop a running dev server anytime']],
    jobUse: 'Required daily for React, Node.js, Git, testing, and cloud deployment.',
    mistake: 'Running `npm run dev` in the wrong parent folder and wondering why `package.json not found` appears!',
    proHabit: 'Always check `pwd` (or your terminal prompt path) before running `npm` or `git` commands!',
    rule: 'Check Your Folder (`pwd`) + Tab Autocomplete + Ctrl+C to Stop Servers.',
    code: `# Essential Daily Developer Terminal Commands:
cd client              # Move into frontend folder
npm install            # Install dependencies from package.json
npm run dev            # Start Vite React dev server
# Press Ctrl + C to stop server`,
    out: 'Confident, fast command-line fluency.',
    q1: ['What causes the common "ENOENT: no such file or directory, open package.json" error when running npm run dev?', 'You are running the npm command in the wrong directory (such as the parent root folder instead of inside client/ or server/). Use cd to navigate into the folder containing package.json first.'],
  },
  {
    id: 29, mod: 4, tInMod: 5,
    title: 'Browser DevTools',
    sub: 'Your #1 Debugging Superpower (`F12`): Live CSS Tweaks, Responsive Mode & Error Inspection',
    coreEn: 'Press ==`F12` (`Ctrl+Shift+I`)== to open ==Browser DevTools==—letting you ==inspect & live-edit HTML/CSS==, ==emulate iPhone/iPad screens==, ==read exact JS error line numbers==, ==watch API requests==, and ==inspect LocalStorage/Cookies==!',
    coreHi: '==`F12` (`Ctrl+Shift+I`)== dabakar ==Browser DevTools== kholo—live HTML/CSS test karo, mobile screen size check karo, exact JS error line pakdo aur API responses dekho!',
    analogyTitle: 'Mechanic Diagnostic X-Ray Letting You See Inside a Running Engine Live',
    analogyEn: 'Never guess why a CSS button looks misaligned—right-click the button -> **Inspect** -> tweak padding live in DevTools -> copy exact working CSS back to VS Code!',
    analogyHi: 'CSS alignment guess mat karo—button par right-click -> **Inspect** -> live padding tweak karo aur exact working CSS VS Code mein copy kar lo!',
    steps: [['Right-Click Inspect', 'Jump straight to any HTML element & its CSS rules'], ['Toggle Device Bar', '`Ctrl+Shift+M` tests iPhone, Pixel & Tablet layouts live'], ['Check Red Errors', 'Top-right red `X` count shows active JS/Network failures'], ['Application Tab', 'Inspect `localStorage`, `sessionStorage` & Cookies']],
    jobUse: 'Cuts frontend & full-stack debugging time by 80%—every senior dev lives in DevTools!',
    mistake: 'Staring at VS Code for 20 minutes guessing why a button does nothing instead of opening DevTools Console in 1 second!',
    proHabit: 'Keep DevTools open on the right or bottom whenever building any frontend feature.',
    rule: 'Bug in Browser? -> Open F12 DevTools FIRST Before Guessing in VS Code.',
    code: `// DevTools Essential Shortcuts:
// F12 or Ctrl+Shift+I -> Open/Close DevTools
// Ctrl+Shift+C        -> Click any element on page to Inspect
// Ctrl+Shift+M        -> Toggle Mobile Responsive Simulator`,
    out: 'Instant visibility into layout, state, and network behavior.',
    q1: ['How does the Browser DevTools Device Toolbar (Ctrl+Shift+M) help frontend developers?', 'It simulates mobile and tablet viewports (like 390px iPhone or 768px iPad) directly in Chrome/Edge so you can verify responsive layouts, touch targets, and overflow bugs without needing physical devices.'],
  },
  {
    id: 30, mod: 4, tInMod: 6,
    title: 'Console, Elements, and Network tabs',
    sub: 'Mastering the Big 3 DevTools Tabs That Solve 95% of Full-Stack Bugs',
    coreEn: 'Master the ==Big 3 DevTools tabs==: ==Elements== (DOM tree, Computed Box Model & live CSS edits), ==Console== (JS runtime errors, `console.log`, live JS testing), and ==Network== (every `fetch()` URL, HTTP status `200/401/404/500`, Headers & JSON Response)!',
    coreHi: 'DevTools ke ==Big 3 tabs== 95% bugs solve kar dete hain: ==Elements== (HTML/CSS + Box Model), ==Console== (JS errors aur logs), aur ==Network== (API requests, status `200/404/500` aur JSON response)!',
    analogyTitle: 'Three Hospital Monitors: X-Ray (Elements), Heartbeat (Console) & Blood Flow (Network)',
    analogyEn: 'API data not showing in React? Open **Network -> Fetch/XHR** -> click the request -> inspect **Status (401/404/500)** and **Preview JSON** to know instantly if it is a frontend or backend bug!',
    analogyHi: 'React mein API data nahi dikh raha? **Network -> Fetch/XHR** kholo -> Status aur JSON Preview dekho—2 second mein pata chal jayega bug frontend mein hai ya backend mein!',
    steps: [['Elements Tab', 'Inspect Box Model (margin/padding), `:hover` state & CSS overrides'], ['Console Tab', 'Read exact file + line number of red JS errors'], ['Network -> Fetch/XHR', 'Filter API calls; inspect Payload, Headers & JSON Preview'], ['Disable Cache', 'Check "Disable cache" in Network tab during active dev']],
    jobUse: 'The #1 practical debugging workflow in full-stack MERN engineering.',
    mistake: 'Only checking Console and forgetting to inspect the Network tab when an API call returns `401` or `500`!',
    proHabit: 'Whenever an API feature fails, ALWAYS inspect **Network -> Fetch/XHR -> Payload & Response** first!',
    rule: 'Layout Bug -> Elements | JS Crash -> Console | API Bug -> Network (Fetch/XHR).',
    code: `// Quick DevTools Triage:
// 1. Wrong spacing/color?   -> Elements -> Computed Box Model
// 2. Red crash/undefined?   -> Console -> Click file:line link
// 3. Data not loading/saving? -> Network -> Fetch/XHR -> Status & Preview`,
    out: 'Rapid, systematic root-cause diagnosis on every full-stack bug.',
    q1: ['When a React page fails to display data from your Express backend, what should you inspect in the DevTools Network tab?', 'Filter by Fetch/XHR, click the failing API request, and inspect: 1) Request URL & Method, 2) Status Code (e.g., 401 Unauthorized, 404 Not Found, 500 Server Error), 3) Request Payload/Headers, and 4) Response JSON body.'],
  },
  {
    id: 31, mod: 4, tInMod: 7,
    title: 'Live Server and developer workflow',
    sub: 'The Fast Edit-Save-Inspect-Commit Inner Loop Used by Productive Web Engineers',
    coreEn: 'Build a smooth ==Developer Inner Loop==: ==VS Code (left) + Browser with DevTools (right)== + ==Live Server / Vite HMR== so every save refreshes automatically in <100ms—verify visually, check 0 console errors, and commit small working chunks to Git!',
    coreHi: 'Pro ==Developer Workflow== banao: ==VS Code + Browser (DevTools) side-by-side== + ==Live Server / Vite HMR==—har save par live preview, 0 console errors check karo, aur chhote working commits Git mein save karo!',
    analogyTitle: 'Sculptor Stepping Back Every 30 Seconds to Check Proportions',
    analogyEn: 'Testing every 10 lines of code catches bugs instantly; writing 300 lines without ever checking the browser creates a 2-hour debugging nightmare!',
    analogyHi: 'Har 10-15 line par browser check karne se bug turant pakda jata hai—300 line likh kar ek saath test karoge toh 2 ghante debug mein jayenge!',
    steps: [['Split Screen', 'VS Code + Live Browser side-by-side (or 2nd monitor)'], ['Auto-Reload', 'Live Server for HTML/CSS; Vite HMR for React'], ['Small Steps', 'Build 1 small component/route -> test -> verify 0 errors'], ['Save Progress', 'Commit each clean working milestone in Git']],
    jobUse: 'Doubles coding velocity and keeps stress low on complex full-stack projects.',
    mistake: 'Writing 200 lines of HTML, CSS, and JS without saving or testing once until everything is broken at once.',
    proHabit: 'Work in **5-minute vertical slices**: write a tiny working piece -> verify in browser -> refine -> repeat!',
    rule: 'Small Code Change -> Instant Live Reload -> Verify 0 Errors -> Commit.',
    code: `// The 5-Minute Pro Inner Loop:
1. Edit small feature in VS Code (Ctrl+S)
2. Instant reload via Live Server / Vite
3. Inspect UI + Console (0 errors) + Network (200 OK)
4. git add . && git commit -m "feat: add navbar"`,
    out: 'Steady, confident, low-bug development momentum.',
    q1: ['Why is testing small incremental changes with Live Server or Vite HMR much faster than writing large blocks of code before testing?', 'When you test every small change, if something breaks you immediately know the bug is inside the last 5–10 lines you just wrote, rather than hunting across hundreds of lines.'],
  },

  // ═══ CHAPTER 05: Introduction to HTML5 (32..41) ═══
  {
    id: 32, mod: 5, tInMod: 1,
    title: 'What HTML is',
    sub: 'HyperText Markup Language: Elements, Tags, Attributes & Nesting Rules',
    coreEn: '==HTML5 (HyperText Markup Language)== defines the ==meaning and structure== of every web page using ==Elements== (`<tag attribute="value">Content</tag>`)—including paired tags (`<p>...</p>`) and self-closing void elements (`<img>`, `<input>`, `<br>`).',
    coreHi: '==HTML5== har webpage ka ==structure aur meaning== define karta hai ==Elements (`<tag attr="val">Content</tag>`)== se—jaise headings, paragraphs, links, images aur forms!',
    analogyTitle: 'Labeled Blueprint Describing Every Room, Door & Window of a House',
    analogyEn: 'HTML is a **markup language** (describes structure), NOT a programming language—clean nested tags help browsers, Google SEO, and screen readers understand your page!',
    analogyHi: 'HTML programming language nahi, **markup language** hai—sahi nested tags se browser, Google SEO aur screen readers aapka page samajhte hain!',
    steps: [['Opening & Closing', '`<p>Hello</p>` wraps content cleanly'], ['Attributes', 'Extra info inside opening tag (`href="..."`, `alt="..."`)'], ['Void Elements', 'Self-contained tags like `<img>`, `<input>`, `<meta>`'], ['Proper Nesting', 'Close inner tag before outer: `<p><strong>Hi</strong></p>`']],
    jobUse: 'Every React JSX component compiles down to HTML—solid HTML5 makes your React code 10x cleaner!',
    mistake: 'Improperly overlapping tags (`<b><i>text</b></i>`) or using `<div>` for everything instead of real tags.',
    proHabit: 'Use VS Code Emmet (`!` + Tab, `div.card>h2+p` + Tab) to write valid HTML 5x faster!',
    rule: 'Element = <Opening Tag + Attributes> Content </Closing Tag> (Always Nest Cleanly).',
    code: `<article class="card">
  <h2>HTML5 Building Block</h2>
  <p>Clean <strong>nested</strong> markup with <a href="/docs">a link</a>.</p>
</article>`,
    out: 'Valid, structured, accessible HTML5 element tree.',
    q1: ['What is the difference between an HTML tag, an element, and an attribute?', 'A tag is the markup delimiter (<p> or </p>), an element is the complete unit (opening tag + content + closing tag), and an attribute provides extra metadata inside the opening tag (like href, src, or alt).'],
  },
  {
    id: 33, mod: 5, tInMod: 2,
    title: 'HTML document structure',
    sub: 'The Standard HTML5 Boilerplate (`<!DOCTYPE html>` + Emmet `!` Shortcut)',
    coreEn: 'Every modern HTML5 page starts with ==`<!DOCTYPE html>`== (triggers Standards Mode, not 1990s Quirks Mode!), followed by ==`<html lang="en">`== wrapping ==`<head>`== (metadata, title, CSS) and ==`<body>`== (visible page content).',
    coreHi: 'Har HTML5 page ==`<!DOCTYPE html>`== se shuru hota hai, phir ==`<html lang="en">`== ke andar ==`<head>`== (title, meta, CSS) aur ==`<body>`== (screen par dikhne wala content) hota hai!',
    analogyTitle: 'Book Cover & Copyright Page (`<head>`) + Actual Story Chapters (`<body>`)',
    analogyEn: 'Type `!` and press `Tab` in VS Code—Emmet generates the entire valid HTML5 boilerplate with UTF-8 charset and mobile viewport meta tag in 1 second!',
    analogyHi: 'VS Code mein `!` likh kar `Tab` dabao—1 second mein poora valid HTML5 boilerplate ready ho jata hai!',
    steps: [['<!DOCTYPE html>', 'Tells browser to render in modern HTML5 Standards Mode'], ['<html lang="en">', 'Declares page language for SEO & screen readers'], ['<head> Metadata', 'Charset UTF-8, viewport tag, `<title>` & `<link>` CSS'], ['<body> Content', 'Everything visible to users + deferred `<script>`']],
    jobUse: 'Foundation of every webpage and the `index.html` entry file of every Vite React app!',
    mistake: 'Forgetting `<!DOCTYPE html>` or `<meta name="viewport">` (breaks CSS box model and mobile scaling!).',
    proHabit: 'Always generate fresh HTML files with Emmet `!` + Tab and update `<title>` immediately.',
    rule: '<!DOCTYPE html> + lang="en" + UTF-8 + Viewport Meta = Rock-Solid HTML5 Start.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My First MERN App</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>`,
    out: 'Valid, standards-compliant HTML5 page ready for CSS & JS.',
    q1: ['Why is <!DOCTYPE html> required at the very top of every HTML5 document?', 'It instructs the browser to render the page in modern Standards Mode rather than legacy Quirks Mode, ensuring consistent CSS box-model and layout behavior across all browsers.'],
  },
  {
    id: 34, mod: 5, tInMod: 3,
    title: 'html, head, and body elements',
    sub: 'What Belongs Behind the Scenes (`<head>`) vs On Screen (`<body>`)',
    coreEn: '==`<html>`== is the single root element; ==`<head>`== holds ==invisible page instructions== (`<title>`, `<meta>`, favicons, Google Fonts, CSS `<link>`, `<script defer>`); ==`<body>`== holds ==all visible content== (`<header>`, `<main>`, `<footer>`).',
    coreHi: '==`<html>`== root container hai; ==`<head>`== mein ==invisible settings== (title, meta, CSS links, fonts) hoti hain; aur ==`<body>`== mein wo sab hota hai jo ==user ko screen par dikhta hai==!',
    analogyTitle: 'Theater Backstage Control Room (`<head>`) vs Illuminated Stage (`<body>`)',
    analogyEn: 'Put `<link rel="stylesheet">` inside `<head>` so styles load BEFORE paint (zero ugly flash of unstyled text!), and add `defer` to `<script>` so JS never blocks HTML parsing!',
    analogyHi: 'CSS `<link>` hamesha `<head>` mein rakho aur JS par `defer` lagao taaki page fast aur bina flicker ke load ho!',
    steps: [['Root <html>', 'Set `lang="en"` (or `"hi"`) for accessibility & SEO'], ['<head> Assets', '`<title>`, `<meta>`, favicon, fonts, CSS `<link>`'], ['<script defer>', 'Loads JS in parallel & runs cleanly after HTML parses'], ['<body> Visible UI', 'All text, images, buttons, forms & React `#root` div']],
    jobUse: 'Prevents render-blocking scripts and broken SEO titles.',
    mistake: 'Putting visible `<h1>` headings inside `<head>` or render-blocking `<script>` tags without `defer`!',
    proHabit: 'Always use `<script src="app.js" defer></script>` inside `<head>` so your DOM is guaranteed ready when JS runs!',
    rule: '<head> = Meta, CSS & Deferred JS | <body> = All Visible Content.',
    code: `<head>
  <meta charset="UTF-8" />
  <title>ShopFast — Online Store</title>
  <link rel="stylesheet" href="./styles.css" />
  <script src="./app.js" defer></script>
</head>`,
    out: 'Fast-painting page with zero render-blocking script bugs.',
    q1: ['What does adding the "defer" attribute to a <script> tag inside <head> do?', 'It downloads the JavaScript file in parallel while HTML continues parsing, then executes the script in order right after the HTML document is fully parsed—preventing render-blocking and "null element" DOM errors.'],
  },
  {
    id: 35, mod: 5, tInMod: 4,
    title: 'Headings and paragraphs',
    sub: 'Strict `<h1>`–`<h6>` Hierarchy for SEO & Accessibility (Never Pick Headings by Font Size!)',
    coreEn: 'Use ==`<h1>` through `<h6>`== to express ==logical document outline== (==1 `<h1>` per page==, never skip levels like `<h1>` -> `<h4>`!), and ==`<p>`== for paragraphs—control visual font sizes with ==CSS==, never by picking random heading levels!',
    coreHi: '==`<h1>` se `<h6>`== ka use ==logical outline== ke liye karo (ek page par ==ek main `<h1>`==, levels skip mat karo) aur paragraphs ke liye ==`<p>`==—size bada-chhota ==CSS== se karo, heading tag badal kar nahi!',
    analogyTitle: 'Book Title (`h1`) -> Chapter (`h2`) -> Sub-Section (`h3`) -> Body Text (`p`)',
    analogyEn: 'Google Search and blind users using screen readers navigate pages by jumping across `<h1> -> <h2> -> <h3>`—clean hierarchy boosts both SEO and accessibility!',
    analogyHi: 'Google SEO aur screen readers `h1 -> h2 -> h3` structure padh kar aapki site rank aur read karte hain!',
    steps: [['One <h1> Per Page', 'Main topic/title of the page (top SEO signal)'], ['Logical Sub-Levels', '`<h2>` for major sections, `<h3>` inside `<h2>`'], ['Use <p> For Prose', 'Clean paragraphs—never stack `<br><br><br>` for spacing!'], ['Style Size In CSS', 'Adjust visual size via CSS `font-size`, not wrong tags']],
    jobUse: 'Directly impacts Google organic rankings and WCAG accessibility compliance.',
    mistake: 'Using `<h4>` just because you wanted smaller bold text, or stacking `<br><br>` instead of `<p>` + CSS margin!',
    proHabit: 'Check your heading outline (`h1 -> h2 -> h3`) on every page—zero skipped levels!',
    rule: '1 <h1> Per Page + Sequential <h2>/<h3> + CSS for Visual Size.',
    code: `<main>
  <h1>Full-Stack MERN Guide</h1>
  <p>Master modern web development from zero to production.</p>
  <h2>1. Frontend Foundations</h2>
  <h3>HTML5 Semantics</h3>
  <p>Use headings for structure, not font size.</p>
</main>`,
    out: 'SEO-friendly, accessible document outline.',
    q1: ['Why should you never choose an <h4> tag just because its default font size looks nice?', 'Heading tags communicate semantic hierarchy to search engines and screen readers. Skipping from <h1> to <h4> breaks accessibility navigation—always pick the logical heading level (<h2>) and control visual size with CSS.'],
  },
  {
    id: 36, mod: 5, tInMod: 5,
    title: 'Text formatting',
    sub: 'Semantic Emphasis (`<strong>`, `<em>`, `<mark>`, `<code>`) vs Presentational Tags',
    coreEn: 'Prefer ==semantic text tags== that convey real meaning: ==`<strong>`== (important/urgent, bold), ==`<em>`== (stressed emphasis, italic), ==`<mark>`== (highlighted), ==`<code>`== (inline code), and ==`<blockquote>`==—over purely visual `<b>`/`<i>`!',
    coreHi: 'Visual `<b>`/`<i>` ke bajaye ==semantic tags== use karo: ==`<strong>`== (important bold), ==`<em>`== (stress italic), ==`<mark>`== (highlight), aur ==`<code>`== (inline code)—ye screen readers ko real meaning batate hain!',
    analogyTitle: 'Raising Your Voice With Purpose (`<strong>`) vs Just Using a Thick Marker (`<b>`)',
    analogyEn: 'Screen readers actually change vocal inflection on `<strong>` and `<em>` so visually impaired users hear the exact emphasis you intended!',
    analogyHi: 'Screen readers `<strong>` aur `<em>` par awaaz ka zor badalte hain taaki har user ko sahi emphasis samajh aaye!',
    steps: [['<strong> Important', 'Use for warnings, key terms & bold emphasis'], ['<em> Stress', 'Use for vocal emphasis or technical nuance'], ['<code> & <pre>', 'Wrap inline code (`npm run dev`) & multi-line snippets'], ['<mark> & <time>', 'Highlight matches (`<mark>`) & machine-readable `<time>`']],
    jobUse: 'Standard clean-markup practice in technical blogs, documentation, and accessible web apps.',
    mistake: 'Using `<u>` (looks like a broken clickable link!) or `<br>` loops instead of clean CSS spacing.',
    proHabit: 'Never underline non-link text with `<u>`—users will angrily click it thinking it is a broken link!',
    rule: '<strong> = Importance | <em> = Emphasis | <code> = Code | Never Underline Non-Links.',
    code: `<p>
  <strong>Warning:</strong> Never commit your <code>.env</code> file to Git!
  Always verify <mark>every key</mark> is in <em>.gitignore</em>.
</p>`,
    out: 'Meaningful, accessible, cleanly formatted text.',
    q1: ['What is the difference between <strong> and <b> in HTML5?', 'Both render bold visually by default, but <strong> carries semantic importance (announced with emphasis by screen readers and valued by search engines), whereas <b> is purely stylistic.'],
  },
  {
    id: 37, mod: 5, tInMod: 6,
    title: 'Links and navigation',
    sub: 'Anchor Tags (`<a href>`), Relative/Absolute URLs, Safe `target="_blank"` & Skip Links',
    coreEn: 'Create links with ==`<a href="...">`==: use ==relative paths (`/about`)== for internal pages, ==`mailto:`/`tel:`== for contact links, and ALWAYS add ==`rel="noopener noreferrer"`== whenever using ==`target="_blank"`== for security!',
    coreHi: 'Links ke liye ==`<a href="...">`== use karo—internal pages par relative paths, aur jab bhi ==`target="_blank"`== (new tab) lagao toh security ke liye ==`rel="noopener noreferrer"`== zaroor add karo!',
    analogyTitle: 'Clear Street Signposts Linking Every Room & External Destination Safely',
    analogyEn: 'Write descriptive link text (`"Download 2026 Syllabus PDF"`) instead of lazy `"Click here"`—huge boost for both Google SEO and screen-reader users!',
    analogyHi: '`"Click here"` mat likho—`"View Course Syllabus"` jaise clear text likho, isse SEO aur accessibility dono improve hote hain!',
    steps: [['Internal Links', '`<a href="/pricing">Pricing</a>` or `<a href="#faq">FAQ</a>`'], ['Safe New Tab', '`target="_blank" rel="noopener noreferrer"` prevents tabnabbing'], ['Contact Links', '`mailto:hi@site.com` & `tel:+919876543210`'], ['Descriptive Text', 'Never use "Click here" or raw ugly URLs as link text']],
    jobUse: 'Powers every navbar, footer, call-to-action button, and React Router `<Link>`.',
    mistake: 'Using `<div onclick="...">` instead of `<a>` for navigation (breaks right-click Open in New Tab, keyboard Tab, and SEO!).',
    proHabit: 'Golden Rule: **Navigates to a URL? -> `<a>`. Triggers an action (Submit/Modal)? -> `<button>`.**',
    rule: 'Navigate = <a> | Action = <button> | target="_blank" Always Needs rel="noopener noreferrer".',
    code: `<nav aria-label="Main navigation">
  <a href="/">Home</a>
  <a href="#features">Features</a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    GitHub Profile
  </a>
</nav>`,
    out: 'Secure, accessible, SEO-friendly navigation links.',
    q1: ['When should you use an <a> tag vs a <button> tag in HTML?', 'Use <a> when clicking navigates the user to a new URL, page, or section anchor (supports right-click Open in New Tab and SEO). Use <button> when clicking triggers an in-page action like submitting a form, opening a modal, or toggling a menu.'],
  },
  {
    id: 38, mod: 5, tInMod: 7,
    title: 'Images and attributes',
    sub: 'Clean `<img>` Tags, Mandatory `alt`, `width`/`height` (Zero Layout Shift) & `loading="lazy"`',
    coreEn: 'Render fast, stable images with ==`<img src="..." alt="..." width="..." height="..." loading="lazy">`==: ==`alt`== is mandatory for accessibility/SEO, ==`width`+`height`== prevent jarring Cumulative Layout Shift (CLS), and ==`loading="lazy"`== speeds up initial page load!',
    coreHi: 'Fast aur stable images ke liye ==`src`, `alt` (mandatory!), `width`/`height` (page jump rokne ke liye) aur `loading="lazy"`== lagao—aur modern ==WebP== format use karo!',
    analogyTitle: 'Reserving Exact Picture-Frame Space on the Wall Before Hanging the Photo',
    analogyEn: 'Without `width` and `height`, the page text jumps wildly downward when images finish loading (annoying CLS!)—setting dimensions reserves the exact box upfront!',
    analogyHi: '`width` aur `height` dene se image load hote waqt page niche jump nahi karta (zero Layout Shift)!',
    steps: [['Always Add alt', 'Describe image meaning (or `alt=""` for purely decorative icons)'], ['Prevent CLS Jump', 'Include intrinsic `width` & `height` attributes'], ['Lazy Load Below Fold', 'Add `loading="lazy"` on below-the-fold images (not Hero!)'], ['Use Modern Formats', 'Prefer `.webp` / `.avif` for photos & `.svg` for logos/icons']],
    jobUse: 'Directly boosts Google Core Web Vitals (LCP & CLS) scores on production websites.',
    mistake: 'Uploading 5 MB unoptimized camera `.png` photos or adding `loading="lazy"` to the top Hero banner (slows LCP!).',
    proHabit: 'Never lazy-load the #1 top-of-page Hero image—only add `loading="lazy"` to images further down the page!',
    rule: 'alt Always + width/height + WebP/SVG + loading="lazy" Below the Fold.',
    code: `<img
  src="/images/mern-architecture.webp"
  alt="Diagram showing React frontend connecting to Express API and MongoDB"
  width="800"
  height="450"
  loading="lazy"
/>`,
    out: 'Lightning-fast, accessible, zero-layout-shift image.',
    q1: ['Why should you NOT put loading="lazy" on the main Hero image at the very top of a landing page?', 'Because lazy-loading delays fetching the image until layout calculations finish, hurting your Largest Contentful Paint (LCP) performance score. Reserve loading="lazy" for below-the-fold images.'],
  },
  {
    id: 39, mod: 5, tInMod: 8,
    title: 'Lists',
    sub: 'Unordered (`<ul>`), Ordered (`<ol>`), Description (`<dl>`) Lists & Semantic Navbars',
    coreEn: 'Use ==`<ul>`== for unordered groups & navigation menus, ==`<ol>`== for ranked steps/instructions, and ==`<dl>` (`<dt>` + `<dd>`)== for key-value glossaries/specs—only ==`<li>`== elements can be direct children of `<ul>`/`<ol>`!',
    coreHi: 'Unordered items aur navbars ke liye ==`<ul>`==, step-by-step sequence ke liye ==`<ol>`==, aur key-value specs/FAQs ke liye ==`<dl>` (`<dt>` + `<dd>`)== use karo—`<ul>`/`<ol>` ke andar direct child sirf `<li>` hona chahiye!',
    analogyTitle: 'Bullet Checklist (`<ul>`), Numbered Recipe (`<ol>`) & Dictionary (`<dl>`)',
    analogyEn: 'Wrapping navbar links inside `<nav><ul><li><a href="...">...</a></li></ul></nav>` lets screen readers announce `"Navigation list, 5 items"` cleanly!',
    analogyHi: 'Navbar links ko `<ul><li><a>` mein rakhne se screen readers aur CSS Flexbox dono super clean kaam karte hain!',
    steps: [['<ul> Bullets/Navs', 'Unordered features, menus, product cards'], ['<ol> Sequences', 'Step-by-step tutorials, leaderboards, recipes'], ['<dl> Key-Value', 'Product specs (`<dt>RAM</dt><dd>16GB</dd>`)'], ['Valid Nesting', 'Nest sub-lists INSIDE an `<li>`, never directly inside `<ul>`']],
    jobUse: 'Used everywhere in navbars, pricing feature lists, breadcrumbs, and product specs.',
    mistake: 'Putting `<div>` or `<p>` directly inside `<ul>` without wrapping inside `<li>` (invalid HTML!).',
    proHabit: 'Style nav lists cleanly with CSS `list-style: none; display: flex; gap: 1rem;` while preserving full semantic meaning!',
    rule: '<ul> = Group/Nav | <ol> = Order | <dl> = Term/Definition | Only <li> Inside <ul>/<ol>.',
    code: `<ol>
  <li>Install Node.js and VS Code</li>
  <li>Run <code>npm create vite@latest</code></li>
  <li>Build and deploy your MERN app</li>
</ol>`,
    out: 'Valid, clean, semantically meaningful HTML list.',
    q1: ['Where must a nested sub-list (<ul>) be placed inside a parent <ul> to remain valid HTML5?', 'It must be placed INSIDE one of the parent <li> elements (before the closing </li> tag), never directly as a sibling of <li> inside the outer <ul>.'],
  },
  {
    id: 40, mod: 5, tInMod: 9,
    title: 'Tables',
    sub: 'Structured Tabular Data (`<thead>`, `<tbody>`, `<th scope="col">`) — Never for Page Layout!',
    coreEn: 'Use HTML ==`<table>`== strictly for ==2D tabular data== (pricing matrices, order histories, leaderboards) with ==`<thead>`, `<tbody>`, `<caption>`, and `<th scope="col">`==—NEVER use tables for page layout (use CSS Flexbox/Grid!).',
    coreHi: 'HTML ==`<table>`== sirf ==2D data== (orders, pricing, scoreboards) ke liye use karo—==`<thead>`, `<tbody>`, `<th scope="col">`== ke saath! Page layout ke liye kabhi table mat banao (Flexbox/Grid use karo)!',
    analogyTitle: 'Clean Spreadsheet Grid Embedded Inside Your Web Page',
    analogyEn: 'Wrap wide tables in `<div style="overflow-x: auto">` so mobile users can smoothly swipe horizontally without breaking your whole page layout!',
    analogyHi: 'Wide table ko `overflow-x: auto` wrapper mein daalo taaki mobile par poora page kharab na ho aur user smoothly swipe kar sake!',
    steps: [['Semantic Parts', 'Use `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`'], ['Header Scope', 'Use `<th scope="col">` for columns & `scope="row"` for rows'], ['Data Only', 'Zero layout tables—use Flexbox & Grid for layouts'], ['Mobile Scroll', 'Wrap in an `overflow-x: auto` container for small screens']],
    jobUse: 'Powers every admin dashboard, SaaS billing table, order log, and comparison matrix.',
    mistake: 'Using `<td><b>Header</b></td>` instead of real `<thead><tr><th scope="col">` headers!',
    proHabit: 'Always wrap dashboard tables in a horizontal-scroll wrapper so mobile views stay clean.',
    rule: 'Tables = 2D Data Only + <thead>/<tbody>/<th scope> + Mobile Scroll Wrapper.',
    code: `<div class="table-wrap">
  <table>
    <caption>Recent Orders</caption>
    <thead>
      <tr><th scope="col">Order</th><th scope="col">Amount</th><th scope="col">Status</th></tr>
    </thead>
    <tbody>
      <tr><td>#1042</td><td>₹2,499</td><td>Paid</td></tr>
    </tbody>
  </table>
</div>`,
    out: 'Accessible, clean, mobile-safe HTML data table.',
    q1: ['Why should you use <th scope="col"> inside <thead> instead of bold <td> cells for table column headers?', 'Screen readers use <th scope="col"> to announce the exact column header before reading each data cell, and CSS/browsers can style or repeat headers cleanly across prints and scrolls.'],
  },
  {
    id: 41, mod: 5, tInMod: 10,
    title: 'HTML comments',
    sub: 'Documenting Section Boundaries (`<!-- ... -->`) Safely Without Leaking Private Info',
    coreEn: 'HTML comments (`<!-- Hero Section -->`) help developers mark ==major page sections== or temporarily disable markup (`Ctrl+/` in VS Code)—remember: ==HTML comments are 100% PUBLIC in View Page Source==, so NEVER write passwords, TODO secrets, or rude notes in them!',
    coreHi: 'HTML comments (`<!-- Hero Section -->`) code organize karne ke liye (`Ctrl+/`) kaam aate hain—par yaad rakho ==View Page Source mein har visitor comments padh sakta hai==, isliye kabhi secrets ya API notes mat likho!',
    analogyTitle: 'Sticky Notes Taped Inside a Glass Display Window—Everyone Outside Can Read Them!',
    analogyEn: 'Keep comments short and helpful (`<!-- Pricing Grid -->`), and delete dead commented-out code blocks before committing (Git already remembers your old code)!',
    analogyHi: 'Short section labels rakho, aur purana dead commented code delete karo—Git history mein sab already saved rehta hai!',
    steps: [['Toggle Fast', 'Press `Ctrl+/` in VS Code to comment/uncomment lines'], ['Mark Sections', 'Label major landmarks (`<!-- Pricing Section -->`)'], ['Never Hide Secrets', 'Every HTML comment is visible via Right-Click -> View Source'], ['Clean Dead Code', 'Delete unused commented HTML before production push']],
    jobUse: 'Keeps team HTML templates clean, readable, and security-hygienic.',
    mistake: 'Leaving `<!-- TODO: temp admin password is admin123 -->` inside live production HTML!',
    proHabit: 'Never commit large blocks of commented-out dead code—trust Git history and keep files spotless.',
    rule: 'Ctrl+/ = Fast Comment | Comments Are Public in View Source | Delete Dead Code.',
    code: `<!-- Hero Section: Primary Value Proposition -->
<section class="hero">
  <h1>Learn Full-Stack MERN</h1>
</section>`,
    out: 'Clean, readable, security-safe HTML documentation.',
    q1: ['Why must you never leave internal API hints, temporary passwords, or candid client remarks inside HTML comments?', 'Because HTML comments are sent directly to the user browser and can be read by anyone in 1 second via Right-Click -> View Page Source or DevTools Elements tab.'],
  },
];

export const MERN_TAB1_BLUEPRINTS: Record<number, DsTopicBlueprint> =
  expandMernSpecs(TAB1_SPECS);
