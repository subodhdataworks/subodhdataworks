import { expandMernSpecs, type MernTopicSpec } from './fullStackMernHelper';
import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

const TAB5_SPECS: MernTopicSpec[] = [
  // ═══ CHAPTER 19: Introduction to React.js (158..166) ═══
  {
    id: 158, mod: 19, tInMod: 1,
    title: 'What React is and why it is used',
    sub: 'Declarative Component-Based UI Library Powering Modern Interactive Web Apps',
    coreEn: '==React.js== is Meta open-source ==UI library== for building fast, modular web interfaces from ==reusable Components== using ==Declarative Rendering (`UI = f(state)`)==—you describe WHAT the UI should look like for a given state, and React efficiently updates ONLY the changed DOM nodes!',
    coreHi: '==React.js== reusable ==Components== se fast interactive UI banane ki library hai—isme ==`UI = f(state)`== chalta hai: aap bas state update karte ho, React khud sirf badle hue DOM parts update kar deta hai!',
    analogyTitle: 'Lego Bricks That Auto-Rebuild Only the One Room You Changed',
    analogyEn: 'Instead of manually calling `document.createElement` and `classList.toggle` in 20 places, change `isLiked` state once and React updates the heart icon, count, and label cleanly!',
    analogyHi: 'Baar-baar manual `querySelector` aur DOM updates likhne ke bajaye React mein sirf state update karo—poora UI automatically sync ho jata hai!',
    steps: [['Reusable Components', 'Build `<Navbar />`, `<ProductCard />` once, reuse everywhere'], ['Declarative UI', '`UI = f(state)` eliminates messy manual DOM manipulation'], ['Virtual DOM Diffing', 'Reconciles minimal real DOM updates for smooth speed'], ['Massive Ecosystem', 'Vite, React Router, Tailwind, Next.js & huge job demand']],
    jobUse: 'The #1 most demanded frontend technology in global and Indian software engineering jobs!',
    mistake: 'Trying to mix manual `document.getElementById()` DOM edits inside React components (fights React!).',
    proHabit: 'Think in **State & Components**: whenever UI needs to change, update React State—never mutate the DOM manually!',
    rule: 'React = Reusable Components + Declarative State (`UI = f(state)`).',
    code: `export function Welcome({ name }) {
  return <h1 className="text-2xl font-bold">Welcome, {name}!</h1>;
}`,
    out: 'Clean, declarative, reusable React UI component.',
    q1: ['What does "Declarative UI" (UI = f(state)) mean in React?', 'Instead of writing step-by-step imperative DOM instructions (createElement, appendChild, classList.add), you declare what the UI should look like for each state, and React automatically handles all DOM updates whenever state changes.'],
  },
  {
    id: 159, mod: 19, tInMod: 2,
    title: 'Single-page applications',
    sub: 'Instant Zero-Reload Navigation (`index.html` + `#root`) vs Traditional Multi-Page Reloads',
    coreEn: 'A ==Single-Page Application (SPA)== loads ONE `index.html` shell (`<div id="root"></div>`) and dynamically swaps pages in JavaScript using ==React Router==—delivering instant app-like transitions with zero white-screen browser reloads!',
    coreHi: '==SPA (Single-Page Application)== mein ek hi `index.html` load hota hai aur ==React Router== bina full page refresh kiye instant pages switch karta hai—bilkul mobile app jaisa smooth experience!',
    analogyTitle: 'Swapping Slides Inside One Projector Frame vs Rebuilding the Theater for Every Scene',
    analogyEn: 'Because the shared Navbar, Sidebar, and Auth state stay mounted while only `<main>` swaps, SPAs feel instantaneous and keep audio/video/filters alive across routes!',
    analogyHi: 'Navbar aur Auth state mount rehte hain aur sirf beech ka page swap hota hai—zero white flash!',
    steps: [['Single Shell', 'Server sends 1 `index.html` with `<div id="root"></div>`'], ['Client Routing', 'React Router updates URL & renders matching page component'], ['JSON APIs', 'Frontend fetches only lightweight JSON from Express API'], ['Hosting Fallback', 'Configure Vercel/Netlify rewrite so direct URLs load `index.html`']],
    jobUse: 'Architecture of Gmail, Notion, Figma, Linear, and almost every React MERN app.',
    mistake: 'Forgetting SPA rewrite rules on deployment so refreshing `/dashboard` shows a server `404 Not Found`!',
    proHabit: 'Always add a `vercel.json` or `_redirects` SPA fallback rule when deploying React Router apps.',
    rule: 'SPA = 1 HTML Shell + Client Routing + JSON APIs + Hosting Fallback Rewrite.',
    code: `<!-- index.html: The entire React SPA mounts inside #root -->
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>`,
    out: 'Instant, zero-reload Single-Page Application foundation.',
    q1: ['Why can refreshing a nested URL like /dashboard/profile on a deployed React SPA return a 404 error if the host is not configured?', 'Because the server looks for a physical file at /dashboard/profile/index.html that does not exist. Adding an SPA rewrite rule sends all routes back to index.html so React Router handles the URL cleanly.'],
  },
  {
    id: 160, mod: 19, tInMod: 3,
    title: 'Node.js and npm overview',
    sub: 'Why React Frontend Development Needs Node.js, `npm`, `package.json` & `node_modules`',
    coreEn: 'Even for frontend React, you install ==Node.js (LTS)== because ==npm (Node Package Manager)== installs React, Vite, Tailwind, and React Router, runs build/dev scripts (`npm run dev`), and manages exact dependency versions via ==`package.json` & `package-lock.json`==!',
    coreHi: 'React frontend ke liye bhi ==Node.js (LTS)== aur ==npm== zaroori hain—`npm` React, Vite aur Tailwind install karta hai, `npm run dev` chalata hai, aur `package.json` saari libraries track karta hai!',
    analogyTitle: 'App Store (`npm`) + Shopping List (`package.json`) + Heavy Warehouse (`node_modules`)',
    analogyEn: 'NEVER commit `node_modules/` to Git (it has 30,000 files!)—commit `package.json` + `package-lock.json` so teammates recreate `node_modules/` cleanly with `npm install`!',
    analogyHi: '`node_modules/` kabhi Git par push mat karo—sirf `package.json` aur `package-lock.json` push karo, teammates `npm install` se khud bana lenge!',
    steps: [['Install Node LTS', 'Verify `node -v` and `npm -v` in terminal'], ['Install Packages', '`npm install react-router-dom` updates `package.json`'], ['Run Scripts', '`npm run dev` (local) | `npm run build` (production)'], ['Gitignore Heavy Dir', 'Always keep `node_modules/` inside `.gitignore`!']],
    jobUse: 'Used daily on every single JavaScript, React, Next.js, and Node.js project.',
    mistake: 'Accidentally pushing `node_modules/` to GitHub or deleting `package-lock.json`!',
    proHabit: 'Always install the **LTS (Long-Term Support)** version of Node.js and commit `package-lock.json` for identical team builds.',
    rule: 'Commit package.json + package-lock.json | Always .gitignore node_modules/.',
    code: `# Core Daily npm Commands:
npm install                  # Install all deps from package.json
npm install lucide-react     # Add a new UI icon library
npm run dev                  # Start Vite dev server
npm run build                # Create minified production dist/`,
    out: 'Clean, reproducible dependency management.',
    q1: ['Why should you commit package-lock.json to Git while keeping node_modules/ in .gitignore?', 'node_modules/ contains tens of thousands of megabytes of downloadable files that bloat Git, whereas package-lock.json is a lightweight lockfile that guarantees every teammate and CI server installs the exact same dependency versions via npm install.'],
  },
  {
    id: 161, mod: 19, tInMod: 4,
    title: 'Creating a React app with Vite',
    sub: 'Instant Project Scaffolding With `npm create vite@latest` (Why Vite Replaced Old CRA)',
    coreEn: 'Scaffold modern React projects in 5 seconds using ==`npm create vite@latest my-app -- --template react`==—==Vite== uses native ES Modules for ==instant <200ms startup and sub-50ms HMR==, completely replacing slow deprecated Create React App (CRA)!',
    coreHi: 'Modern React project 5 second mein ==`npm create vite@latest`== se banta hai—==Vite== 200ms mein start hota hai aur purane slow Create React App (CRA) ko replace kar chuka hai!',
    analogyTitle: 'Electric Sports Car (Vite) Replacing a Heavy Vintage Truck (Old CRA)',
    analogyEn: 'After scaffolding, just run `cd my-app && npm install && npm run dev` and your React app is live on `http://localhost:5173`!',
    analogyHi: '`npm create vite@latest` -> `cd my-app` -> `npm install` -> `npm run dev` — 15 second mein React live!',
    steps: [['Scaffold App', '`npm create vite@latest my-app -- --template react`'], ['Install Deps', '`cd my-app && npm install`'], ['Add Tailwind', 'Install `@tailwindcss/vite` + `@import "tailwindcss";`'], ['Launch Dev', '`npm run dev` -> open `http://localhost:5173`']],
    jobUse: 'The official modern React build tool recommended by react.dev for SPAs.',
    mistake: 'Following 2020 tutorials that run deprecated `npx create-react-app` (slow, unmaintained, broken deps!).',
    proHabit: 'Always use **Vite** (or Next.js when SSR is needed) for every new React project.',
    rule: 'npm create vite@latest -> npm install -> npm run dev = Instant Modern React.',
    code: `npm create vite@latest mern-client -- --template react
cd mern-client
npm install
npm run dev`,
    out: 'Blazing-fast Vite + React workspace live at `http://localhost:5173`.',
    q1: ['Why did Vite replace Create React App (CRA) as the standard tool for building React SPAs?', 'CRA was deprecated and bundled the entire app on startup (taking 15–30 seconds). Vite serves native ES Modules on demand for near-instant server startup (<300ms), sub-50ms Hot Module Replacement, and fast optimized Rollup production builds.'],
  },
  {
    id: 162, mod: 19, tInMod: 5,
    title: 'Project structure',
    sub: 'Understanding `index.html`, `src/main.jsx`, `src/App.jsx`, `public/` & Clean Feature Folders',
    coreEn: 'A Vite React app boots from ==`index.html` -> `src/main.jsx` (`createRoot`) -> `src/App.jsx`==—organize growing apps cleanly inside `src/` into ==`components/`, `pages/`, `hooks/`, `context/`, `services/` (API calls), and `utils/`==!',
    coreHi: 'Vite React app ==`index.html` -> `src/main.jsx` -> `src/App.jsx`== se boot hota hai—bade apps mein `src/` ke andar ==`components/`, `pages/`, `hooks/`, `services/` aur `utils/`== folders banao!',
    analogyTitle: 'Well-Organized Studio: Reception (`App.jsx`), Rooms (`pages/`), Furniture (`components/`), Plumbing (`services/`)',
    analogyEn: 'Keep `public/` for static files needing fixed URLs (`favicon.ico`, `robots.txt`) and `src/assets/` for imported images Vite optimizes automatically!',
    analogyHi: '`public/` fixed-URL files (`favicon.ico`) ke liye aur `src/assets/` Vite-optimized images ke liye use hota hai!',
    steps: [['Entry Point', '`src/main.jsx` mounts `<App />` inside `<StrictMode>`'], ['Pages vs Components', '`pages/` = full routes | `components/` = reusable UI blocks'], ['Services Layer', 'Keep all `fetch()` API calls cleanly inside `src/services/`'], ['Clean Imports', 'Use PascalCase (`Navbar.jsx`) for components, camelCase for utils']],
    jobUse: 'Makes your GitHub React repositories look instantly clean and senior-engineered.',
    mistake: 'Putting 1,200 lines of routes, API calls, and 6 screens all inside one giant `App.jsx` file!',
    proHabit: 'Keep `App.jsx` thin (just Providers + Routes) and separate API calls into `src/services/api.js`.',
    rule: 'Thin App.jsx + PascalCase Components + Dedicated services/ API Folder.',
    code: `src/
├── main.jsx          # ReactDOM.createRoot entry
├── App.jsx           # Router & Context Providers
├── pages/            # HomePage.jsx, DashboardPage.jsx
├── components/       # Navbar.jsx, ui/Button.jsx
└── services/         # api.js (All fetch calls)`,
    out: 'Clean, scalable, interview-ready React folder structure.',
    q1: ['What is the difference between placing an image in public/ vs src/assets/ in a Vite React project?', 'Files in public/ are copied as-is to the root URL (/logo.png) without hashing, whereas files imported from src/assets/ are processed by Vite with content hashes for optimal cache-busting and bundling.'],
  },
  {
    id: 163, mod: 19, tInMod: 6,
    title: 'Running the development server',
    sub: 'Vite HMR, React StrictMode Double-Invoke (Intentional!), Port Flags & DevTools Extension',
    coreEn: 'Run ==`npm run dev`== for instant ==Hot Module Replacement (HMR)== (edits update live while preserving state!), install ==React Developer Tools== browser extension, and understand why ==`<StrictMode>`== runs effects twice in dev (to catch missing cleanups early—only in dev, never prod!).',
    coreHi: '==`npm run dev`== se instant ==HMR== milta hai, ==React DevTools== extension se component props/state live dekho, aur yaad rakho dev mode mein `<StrictMode>` effects ko 2 baar chalata hai taaki bugs pehle hi pakde jayein!',
    analogyTitle: 'Live Test Bench With Built-In Bug Detector (`StrictMode`) Running Automatically',
    analogyEn: 'Do NOT delete `<StrictMode>` because you saw two console logs in dev—it is intentionally stress-testing your `useEffect` cleanup so production stays leak-free!',
    analogyHi: 'Dev mein 2 console logs dekh kar `<StrictMode>` delete mat karo—wo aapke `useEffect` cleanup bugs pakadne ke liye design kiya gaya hai!',
    steps: [['Start Server', '`npm run dev` -> `http://localhost:5173` (`--port 3000` optional)'], ['Watch HMR', 'Edit JSX/Tailwind -> saves & updates without losing state'], ['React DevTools', 'Install Chrome React DevTools -> inspect Components tree live'], ['Respect StrictMode', 'Keep `<StrictMode>` ON to catch impure renders & missing cleanups']],
    jobUse: 'Saves hours of confusion when beginners first notice dev-only double renders.',
    mistake: 'Removing `<StrictMode>` to "fix" duplicate API calls instead of adding proper `AbortController` cleanup!',
    proHabit: 'Use **React DevTools -> Components** tab to inspect live Props and State on any component in 2 clicks!',
    rule: 'npm run dev (HMR) + React DevTools + Keep <StrictMode> Enabled.',
    code: `// main.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
    out: 'Fast, bug-catching local React development environment.',
    q1: ['Why does React <StrictMode> intentionally invoke component renders and useEffect twice during local development?', 'To detect impure rendering logic and missing useEffect cleanup functions (like forgotten timers, event listeners, or uncancelled fetches) early in development. It does NOT run twice in production builds.'],
  },
  {
    id: 164, mod: 19, tInMod: 7,
    title: 'JSX basics',
    sub: 'JavaScript XML: Writing HTML-Like UI Directly Inside JavaScript Functions',
    coreEn: '==JSX== lets you write familiar HTML-like syntax directly inside JavaScript (`return <button className="btn">{label}</button>`)—Vite compiles JSX into fast `React.createElement()` calls automatically, letting you combine UI markup and JS expressions seamlessly!',
    coreHi: '==JSX== aapko seedha JavaScript ke andar HTML jaisa syntax likhne deta hai (`<h1>Hello {name}</h1>`)—Vite ise fast JS calls mein compile karta hai aur XSS auto-escape bhi karta hai!',
    analogyTitle: 'Supercharged HTML Template Living Right Inside Your JavaScript Function',
    analogyEn: 'Bonus security win: JSX automatically escapes text inside `{userInput}`—protecting your React UI from basic XSS injection automatically!',
    analogyHi: 'JSX `{userInput}` ko khud escape kar deta hai—isliye React by default basic XSS attacks se safe rehta hai!',
    steps: [['Return 1 Root', 'Wrap sibling tags in a single parent or Fragment `<>...</>`'], ['Close All Tags', 'Self-close void tags: `<img />`, `<input />`, `<br />`'], ['camelCase Attrs', '`className` (not `class`), `htmlFor` (not `for`), `onClick`'], ['Curly Expressions', 'Put JS variables/expressions inside `{ ... }`']],
    jobUse: 'Every single React component you write uses JSX.',
    mistake: 'Writing `class="..."` or `onclick="..."` in JSX instead of `className="..."` and `onClick={...}`!',
    proHabit: 'Use React Fragments (`<> ... </>`) instead of wrapping everything in unnecessary extra `<div>`s!',
    rule: '1 Root (or <>...</>) + Close All Tags + className/htmlFor/onClick + {expressions}.',
    code: `export function CourseBadge({ title, count }) {
  return (
    <>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{count} interactive lessons</p>
    </>
  );
}`,
    out: 'Clean, zero-extra-div JSX component.',
    q1: ['Why must you use className and htmlFor in JSX instead of class and for?', 'Because JSX compiles into JavaScript where "class" and "for" are reserved JavaScript keywords. React maps className -> HTML class and htmlFor -> HTML for cleanly.'],
  },
  {
    id: 165, mod: 19, tInMod: 8,
    title: 'Using assets',
    sub: 'Importing Local Images, SVGs, Icons (`lucide-react`) & Public Static Files Cleanly in Vite',
    coreEn: 'Load assets cleanly in Vite React: ==import local images (`import heroImg from "./assets/hero.webp"`)== so Vite hashes & bundles them for production, use ==`public/`== for fixed paths (`/favicon.ico`), and use ==`lucide-react`== for crisp scalable UI icons!',
    coreHi: 'Vite React mein assets clean tarike se use karo: local images ko ==`import hero from "./assets/hero.webp"`== karo (production build mein break nahi hongi!), aur sharp icons ke liye ==`lucide-react`== use karo!',
    analogyTitle: 'Packing Local Assets Into the Suitcase (`import`) vs Leaving Fixed Signs Outside (`public/`)',
    analogyEn: 'Writing `<img src="./src/assets/logo.png" />` as a raw string breaks after `npm run build`! Always `import logo from "./assets/logo.png"` or place in `public/`!',
    analogyHi: '`<img src="./src/assets/logo.png" />` build ke baad toot jata hai—hamesha ES `import logo from ...` ya `public/` use karo!',
    steps: [['Import Local Assets', '`import banner from "../assets/banner.webp";`'], ['Use Public Carefully', '`<img src="/images/logo.png" />` (starts with `/`)'], ['Crisp Icon Library', '`import { Search, Check } from "lucide-react";`'], ['Optimize Sizes', 'Use WebP/SVG & always include `alt` + `width`/`height`']],
    jobUse: 'Prevents the #1 production deployment bug: broken images after deploying React to Vercel!',
    mistake: 'Writing `<img src="../assets/pic.png" />` as a literal string—works locally, breaks 404 in production!',
    proHabit: 'Verify every image loads properly by running `npm run build && npm run preview` before deploying!',
    rule: 'ES Import for src/assets/ | Leading Slash / for public/ | lucide-react for Icons.',
    code: `import heroBanner from '../assets/hero.webp';
import { Rocket } from 'lucide-react';

export function Hero() {
  return (
    <div>
      <img src={heroBanner} alt="MERN dashboard preview" width="600" height="360" />
      <button className="inline-flex items-center gap-2"><Rocket className="w-4 h-4" /> Launch</button>
    </div>
  );
}`,
    out: 'Production-safe, optimized image and vector icon rendering.',
    q1: ['Why do images written as <img src="./src/assets/photo.png" /> break after running npm run build in Vite?', 'During npm run build, Vite bundles and hashes assets into dist/assets/—raw relative strings pointing to /src/ are not rewritten. Importing the asset via ES import (import photo from "../assets/photo.png") lets Vite resolve the exact final hashed URL.'],
  },
  {
    id: 166, mod: 19, tInMod: 9,
    title: 'First React component',
    sub: 'PascalCase Naming, Clean Return & Composing Your First Real Card Inside `App.jsx`',
    coreEn: 'A ==React Component== is simply a ==PascalCase JavaScript function (`function ProfileCard()`)== that returns JSX—start with a capital letter (so React distinguishes `<ProfileCard />` from HTML `<div>`!), export it cleanly, and render it inside `App.jsx`!',
    coreHi: '==React Component== ek ==PascalCase JS function (`function ProfileCard()`)== hai jo JSX return karta hai—Capital letter zaroori hai taaki React samjhe ye custom component hai, HTML tag nahi!',
    analogyTitle: 'Creating Your First Custom Stamp That You Can Print Anywhere on the Page',
    analogyEn: 'If you name a component `function navbar()` (lowercase), React treats `<navbar />` as an unknown HTML tag and ignores your function completely!',
    analogyHi: 'Agar component ka naam lowercase `navbar()` rakha toh React usko unknown HTML tag samajh kar skip kar dega—hamesha `Navbar()` (PascalCase) rakho!',
    steps: [['PascalCase Name', '`export function CourseCard() { ... }`'], ['Return Clean JSX', 'Return 1 semantic root (`<article>...</article>`)'], ['Import In App', '`import { CourseCard } from "./components/CourseCard";`'], ['Reuse Multiple Times', 'Render `<CourseCard />` 3 times inside a Tailwind Grid!']],
    jobUse: 'Every screen, widget, modal, and button in React starts with this exact pattern.',
    mistake: 'Defining one React component INSIDE another React component function (destroys & resets its state on every single parent render!).',
    proHabit: 'ALWAYS define components at the **top level of a file**, NEVER nested inside another component!',
    rule: 'PascalCase Name + Top-Level Definition + Single Clean Responsibility.',
    code: `export function CourseCard({ title, level }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <span className="text-xs font-bold text-purple-600">{level}</span>
      <h3 className="mt-1 text-lg font-bold text-slate-900">{title}</h3>
    </article>
  );
}`,
    out: 'Clean, reusable React component ready to compose.',
    q1: ['Why must you never define a child React component function inside the body of a parent component?', 'Every time the parent re-renders, JavaScript creates a brand-new function reference for the inner component—causing React to completely unmount and remount it on every render, wiping out its state and input focus!'],
  },

  // ═══ CHAPTER 20: React Components & Props (167..175) ═══
  {
    id: 167, mod: 20, tInMod: 1,
    title: 'Function components',
    sub: 'Pure Function Components Returning Predictable JSX From Props & Hooks',
    coreEn: 'Modern React uses ==100% Function Components== (replacing legacy class components)—keep component rendering ==pure== (same props + state -> exact same JSX, zero side effects like `fetch()` or mutating outer variables during render!).',
    coreHi: 'Modern React mein ==100% Function Components== use hote hain—render logic ko ==pure== rakho (render ke beech mein direct `fetch()` ya external mutation kabhi mat karo)!',
    analogyTitle: 'Clean Math Function: Put In Props -> Always Get Exact Same UI Out',
    analogyEn: 'Pure rendering guarantees smooth React concurrent features and zero mysterious infinite-render loops!',
    analogyHi: 'Pure components likhne se infinite re-render loops aur ajeeb UI bugs zero ho jaate hain!',
    steps: [['Function Syntax', '`export function UserBadge({ name, role }) { ... }`'], ['Keep Render Pure', 'No `fetch()`, no `setState()` directly inside render body!'], ['Small & Focused', 'Aim for <120 lines per component; split when growing'], ['Use Hooks For State', '`useState` / `useEffect` handle state & side effects cleanly']],
    jobUse: 'Universal standard in React 18/19 and Next.js codebases.',
    mistake: 'Calling `setCount(count + 1)` directly inside the component body outside an event or effect (triggers `Too many re-renders` infinite loop!).',
    proHabit: 'Put side effects inside **Event Handlers** (`onClick`) or **`useEffect`**, NEVER directly in the render body!',
    rule: 'Function Components = Pure Render Logic | Side Effects Go in Handlers or useEffect.',
    code: `export function PriceTag({ amount }) {
  const formatted = \`₹\${amount.toLocaleString('en-IN')}\`;
  return <span className="font-extrabold text-purple-700">{formatted}</span>;
}`,
    out: 'Fast, pure, easily testable function component.',
    q1: ['What happens if you call setState() directly inside the body of a React function component (not inside an event handler or useEffect)?', 'Calling setState triggers a re-render, which calls setState again infinitely—causing React to crash with "Too many re-renders. React limits the number of renders to prevent an infinite loop."'],
  },
  {
    id: 168, mod: 20, tInMod: 2,
    title: 'JSX rules',
    sub: 'The 5 Strict JSX Rules: Single Root, Self-Closing Tags, `className`, Object `style={{}}` & `key`',
    coreEn: 'Master the ==5 non-negotiable JSX rules==: ==1) Return 1 root element (or `<>...</>`), 2) Close EVERY tag (`<img />`), 3) camelCase props (`className`, `htmlFor`, `tabIndex`), 4) Inline styles take a JS object (`style={{ color: "red" }}`), and 5) Lists need unique stable `key` props==!',
    coreHi: 'JSX ke ==5 strict rules==: ==1) Ek hi root (`<>...</>`), 2) Har tag close karo (`<input />`), 3) camelCase (`className`, `onClick`), 4) `style={{ fontSize: 16 }}` object mein, aur 5) `.map()` list mein unique `key`==!',
    analogyTitle: '5 Simple Grammar Rules Keeping Your JSX Compiler 100% Happy',
    analogyEn: 'Why `style={{ backgroundColor: "purple" }}` has DOUBLE curly braces? Outer `{}` enters JS mode in JSX, and inner `{}` is a normal JavaScript object literal!',
    analogyHi: '`style={{ color: "red" }}` mein double braces kyun? Bahar ka `{}` JSX ko JS mode mein lata hai aur andar ka `{}` ek JS object hai!',
    steps: [['1 Root / Fragment', 'Wrap adjacent elements in `<>...</>`'], ['Self-Close Voids', '`<br />`, `<hr />`, `<img />`, `<input />`'], ['camelCase Props', '`className`, `htmlFor`, `onChange`, `readOnly`'], ['Unique List Keys', '`<li key={item.id}>` (never random `Math.random()`!)']],
    jobUse: 'Eliminates 90% of beginner React compiler and console warnings immediately.',
    mistake: 'Using `key={Math.random()}` (destroys & recreates every DOM node on every render!) or array index on reorderable lists.',
    proHabit: 'Always use a stable unique database/item ID (`key={user._id}`) when mapping lists in JSX!',
    rule: '1 Root + Closed Tags + camelCase + Stable Unique key={item.id}.',
    code: `<ul>
  {courses.map((c) => (
    <li key={c.id} className="py-2">{c.title}</li>
  ))}
</ul>`,
    out: 'Zero React console warnings and optimal list reconciliation.',
    q1: ['Why is using key={Math.random()} or array index as a key on a dynamic editable list a bad practice in React?', 'Math.random() generates a brand-new key on every render, forcing React to destroy and recreate all DOM nodes and lose input focus/state. Array indices shift when items are inserted, deleted, or reordered, causing React to mismatch component state across items.'],
  },
  {
    id: 169, mod: 20, tInMod: 3,
    title: 'Embedding expressions in JSX',
    sub: 'Using `{}` for Expressions (Ternaries, `.map()`, Variables) & Avoiding the `{count && ...}` Zero Bug!',
    coreEn: 'Inside JSX `{ ... }` you can embed any ==JavaScript Expression== (variables, math, function calls, ternaries, `.map()`)—NOT statements (`if`, `for`)! Watch out for the famous ==`{items.length && <List />}` bug== (renders a literal `"0"` on screen—use `{items.length > 0 && <List />}`!).',
    coreHi: 'JSX `{ ... }` mein koi bhi ==JS Expression== (variables, ternary, `.map()`) chal sakta hai (`if`/`for` nahi)—aur dhyan rakho `{count && <Badge />}` 0 hone par screen par literal `"0"` print kar deta hai, isliye hamesha `{count > 0 && <Badge />}` likho!',
    analogyTitle: 'Live Display Slots Inside HTML Evaluating Fresh JavaScript Values Every Render',
    analogyEn: 'Because `0` is a valid renderable number in React, `0 && <Banner />` literally prints `0` on your page—converting to boolean `items.length > 0 && <Banner />` fixes it forever!',
    analogyHi: 'React mein `0` screen par print ho jata hai! Hamesha `items.length > 0 && ...` ya ternary use karo!',
    steps: [['Variables & Math', '`{user.name}`, `{price * qty}`'], ['Ternary Branches', '`{isPro ? <ProBadge /> : <FreeBadge />}`'], ['Safe && Check', '`{unreadCount > 0 && <Badge count={unreadCount} />}`'], ['Map Arrays', '`{items.map(item => <Card key={item.id} {...item} />)}`']],
    jobUse: 'Prevents the most famous accidental `"0"` visual bug in production React apps!',
    mistake: 'Writing `{notifications.length && <BellDot />}` so users see a stray `"0"` floating in the navbar!',
    proHabit: 'Always make the left side of JSX `&&` an explicit **boolean** (`count > 0 && ...` or `Boolean(val) && ...`)!',
    rule: 'JSX {} Accepts Expressions Only | Left Side of && Must Be Explicit Boolean.',
    code: `{unreadCount > 0 && (
  <span className="rounded-full bg-rose-600 px-2 text-xs text-white">
    {unreadCount}
  </span>
)}`,
    out: 'Clean conditional badge that never renders a stray "0".',
    q1: ['Why does {items.length && <ProductList items={items} />} render a literal "0" on screen when items is empty?', 'In JavaScript, 0 && anything short-circuits and evaluates to the number 0. React ignores false, null, and undefined, but DOES render the number 0! Fix it by writing items.length > 0 && <ProductList />.'],
  },
  {
    id: 170, mod: 20, tInMod: 4,
    title: 'Props and one-way data flow',
    sub: 'Passing Read-Only Data Down From Parent -> Child & Callbacks Back Up',
    coreEn: '==Props== pass data and callback functions ==downward from Parent to Child== (`<CourseCard title="MERN" onEnroll={handleEnroll} />`)—props are ==strictly read-only (immutable)==, creating predictable ==One-Way Data Flow== where bugs are effortless to trace!',
    coreHi: '==Props== Parent se Child ko ==data aur callback functions== pass karte hain (`<Card title="MERN" onEnroll={fn} />`)—props ==read-only== hote hain (Child unhe badal nahi sakta), jisse data flow 100% predictable rehta hai!',
    analogyTitle: 'Waterfall Flowing Cleanly Downhill (Data Down, Events Up)',
    analogyEn: 'Need a Child button to update Parent state? Pass a callback prop (`onDelete={handleDelete}`) DOWN—when clicked, Child calls `onDelete(id)` sending the event cleanly UP!',
    analogyHi: 'Golden React mantra: **Data Down (via Props), Actions Up (via Callback Props)**!',
    steps: [['Pass Props Down', '`<ProductCard name={p.name} price={p.price} />`'], ['Destructure Cleanly', '`function ProductCard({ name, price, onBuy })`'], ['Never Mutate Props', 'Props are read-only—never write `props.price = 0`!'], ['Callbacks Up', 'Child triggers `onBuy(id)` -> Parent updates state']],
    jobUse: 'The core architectural mental model of every React application.',
    mistake: 'Trying to modify a prop directly inside the child component instead of calling a parent callback prop.',
    proHabit: 'Follow **"Data Down, Events Up"**—trace any UI bug straight up to the parent owning the state!',
    rule: 'Props Are Read-Only | Data Flows Down, Events Flow Up via Callbacks.',
    code: `function TaskItem({ task, onToggle }) {
  return (
    <button onClick={() => onToggle(task.id)}>
      {task.done ? '✅' : '⬜'} {task.title}
    </button>
  );
}`,
    out: 'Clean, decoupled child component communicating upward via callback.',
    q1: ['What does "Data Down, Events Up" (One-Way Data Flow) mean in React?', 'Parents pass state downward to children as read-only props, and children communicate user interactions back upward by invoking callback function props passed down from the parent—making state changes predictable and easy to debug.'],
  },
  {
    id: 171, mod: 20, tInMod: 5,
    title: 'Default prop values',
    sub: 'Safe ES6 Parameter Defaults (`{ size = "md", variant = "primary" }`) Preventing `undefined` Bugs',
    coreEn: 'Provide clean ==Default Prop Values== directly in JavaScript destructuring (`function Button({ variant = "primary", disabled = false })`) so optional props always have safe fallbacks without crashing—modern React replaces legacy `defaultProps` with ES6 defaults!',
    coreHi: 'Optional props par ES6 destructuring defaults (`{ variant = "primary", items = [] }`) lagao taaki koi prop miss hone par component kabhi crash na kare!',
    analogyTitle: 'Coffee Shop Defaulting to "Medium, Regular Milk" Unless You Customize Your Order',
    analogyEn: 'Giving `items = []` as a default prop means `items.map(...)` will NEVER crash with `Cannot read properties of undefined (reading map)`!',
    analogyHi: '`items = []` default dene se `items.map()` kabhi `undefined` crash nahi karega!',
    steps: [['ES6 Defaults', '`function Badge({ color = "purple", label = "New" })`'], ['Guard Arrays', 'Default list props to `items = []` for safe `.map()`'], ['No Legacy Syntax', 'Skip deprecated `Comp.defaultProps` in React 19'], ['Keep API Simple', 'Most common choice should be the effortless default']],
    jobUse: 'Makes reusable design-system components resilient and pleasant for teammates to call.',
    mistake: 'Calling `props.tags.map(...)` without defaulting `tags = []` and crashing when an API omits optional `tags`!',
    proHabit: 'Default every optional array prop to `[]` and every optional callback prop cleanly with `onClick?.()`.',
    rule: 'Use ES6 Destructuring Defaults (items = [], variant = "primary") — Never Legacy defaultProps.',
    code: `export function TagList({ tags = [], emptyText = 'No tags' }) {
  if (tags.length === 0) return <p className="text-sm text-slate-500">{emptyText}</p>;
  return <div className="flex gap-2">{tags.map((t) => <span key={t}>{t}</span>)}</div>;
}`,
    out: 'Crash-proof component with sensible, clean defaults.',
    q1: ['How should you define default prop values in modern React function components?', 'Use standard ES6 default parameter values right inside the destructured props parameter—for example: function Button({ variant = "primary", size = "md" }) — rather than legacy Component.defaultProps.'],
  },
  {
    id: 172, mod: 20, tInMod: 6,
    title: 'Component composition',
    sub: 'Building Complex Screens by Snapping Small Focused Components Together (Avoiding Prop Drilling!)',
    coreEn: '==Component Composition== builds rich pages by combining small, single-purpose components (`<PageLayout>` + `<Sidebar>` + `<StatCard>`) instead of 500-line monoliths or 15 boolean flags—and cleanly solves many Prop Drilling cases without even needing Context!',
    coreHi: '==Component Composition== ka matlab hai chhote, focused components (`<PageLayout>`, `<StatCard>`, `<Modal>`) ko Lego ki tarah jod kar bada page banana—500-line ka giant component nahi!',
    analogyTitle: 'Assembling a Custom Smartphone From Swappable Camera, Screen & Battery Modules',
    analogyEn: 'Instead of `<Modal showIcon showFooter footerText="..." confirmLabel="..." />` with 20 props, compose `<Modal><ModalHeader /><ModalBody /><ModalFooter /></Modal>` cleanly!',
    analogyHi: '20 confusing boolean props dene ke bajaye clean composed components (`<Modal>...</Modal>`) banana 10x zyada flexible hota hai!',
    steps: [['Break Down UI', 'Split page into Navbar, Hero, FilterBar, CardGrid, Footer'], ['Single Purpose', 'Each component does 1 job cleanly (<100 lines)'], ['Avoid Mega Props', 'Prefer composition over 15 `showX` / `isY` boolean props'], ['Pass JSX As Props', 'Pass `header={<Title />}` or `children` to skip prop drilling!']],
    jobUse: 'Core architecture behind Shadcn UI, Radix, and clean scalable React apps.',
    mistake: 'Creating one giant `<SuperCard isBlog isProduct isPricing hasBadge showPrice ... />` with 25 tangled `if` branches!',
    proHabit: 'When a component hits 150 lines or 8+ props, look for 2 clean sub-components to extract!',
    rule: 'Small Composable Components > Giant Configurable Monoliths.',
    code: `<DashboardLayout sidebar={<AppSidebar />}>
  <StatsRow>
    <StatCard label="Revenue" value="₹1.42Cr" />
    <StatCard label="Active Users" value="4,280" />
  </StatsRow>
</DashboardLayout>`,
    out: 'Readable, flexible, rock-solid React page composition.',
    q1: ['How can Component Composition help avoid Prop Drilling without adding Redux or Context?', 'Instead of passing a user prop down through 3 intermediate layout components that do not use it, the top parent renders <Layout header={<UserAvatar user={user} />} />, passing the already-composed element directly into the layout slot.'],
  },
  {
    id: 173, mod: 20, tInMod: 7,
    title: 'Children prop',
    sub: 'Creating Flexible Wrapper Shells (`<Card>`, `<Modal>`, `<ProtectedRoute>`) Using `{children}`',
    coreEn: 'React built-in ==`children` prop== represents ==whatever JSX you place between `<Wrapper> ... </Wrapper>`==—powering reusable layout shells (`<Card>`, `<Modal>`, `<Container>`, `<AuthProvider>`) that wrap ANY arbitrary inner content!',
    coreHi: 'React ka built-in ==`children` prop== wo saara JSX pakadta hai jo `<Card> ... </Card>` ke beech likha hota hai—isse `<Card>`, `<Modal>` aur `<PageLayout>` jaise universal wrappers bante hain!',
    analogyTitle: 'A Picture Frame (`<Card>`) That Can Hold Any Photo, Chart, or Form Inside It',
    analogyEn: 'Without `children`, a `<Card>` can only show fixed text; WITH `children`, `<Card>` can wrap a login form, a KPI chart, or a pricing table effortlessly!',
    analogyHi: '`children` prop se ek hi `<Card>` component ke andar aap form, chart ya pricing table kuch bhi daal sakte ho!',
    steps: [['Accept children', '`export function Card({ title, children }) { ... }`'], ['Render Slot', 'Place `{children}` inside your styled wrapper JSX'], ['Compose Freely', 'Wrap forms, tables, or other components inside `<Card>...</Card>`'], ['Layout Wrappers', 'Use `children` for `<AppLayout>`, `<Modal>` & `<AuthGuard>`']],
    jobUse: 'Used in every single React UI library and MERN app layout.',
    mistake: 'Hardcoding inner content inside `<Modal>` instead of accepting `{children}` so you have to build 5 separate modal components!',
    proHabit: 'Build reusable `<Container>`, `<Card>`, and `<Modal>` shells using `{children}` right at the start of every React project.',
    rule: 'Wrapper Shells Always Accept {children} for Maximum Reusability.',
    code: `export function Card({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {title && <h2 className="mb-4 text-lg font-bold">{title}</h2>}
      {children}
    </section>
  );
}`,
    out: 'Universal reusable `<Card>` wrapper component.',
    q1: ['What is the special children prop in React and when should you use it?', 'children automatically contains any JSX elements or text nested between a component opening and closing tags (<Modal>...</Modal>). Use it for generic container/wrapper components like Cards, Modals, Layouts, and Context Providers.'],
  },
  {
    id: 174, mod: 20, tInMod: 8,
    title: 'Reusable UI components',
    sub: 'Designing Clean Component APIs (`variant`, `size`, `isLoading`, `...rest` Forwarding)',
    coreEn: 'Design pro ==reusable UI primitives (`<Button>`, `<Input>`, `<Badge>`, `<Alert>`)== by supporting ==clean variants (`primary`, `outline`, `danger`), `isLoading` state, optional `className` merging, and `...rest` prop forwarding (`type`, `disabled`, `aria-label`)==!',
    coreHi: 'Pro ==reusable UI components (`<Button>`, `<Input>`, `<Alert>`)== banao jisme ==`variant`, `isLoading`, `className` aur `...rest` props forwarding== ho taaki poora app consistent dikhe!',
    analogyTitle: 'Standardized Wall Sockets That Fit Every Plug Cleanly Across the Entire House',
    analogyEn: 'Forwarding `...rest` onto the underlying `<button {...rest}>` ensures native HTML attributes like `type="submit"`, `disabled`, and `aria-label` work automatically!',
    analogyHi: '`...rest` forward karne se `disabled`, `type="submit"` aur `onClick` jaise saare native HTML attributes apne aap kaam karte hain!',
    steps: [['Variant Maps', 'Clean object mapping `primary`/`danger`/`outline` to classes'], ['Built-In Loading', '`<Button isLoading={saving}>Save</Button>` disables & spins!'], ['Forward ...rest', 'Spread `...rest` onto native `<button>`/`<input>`'], ['Keep Accessible', 'Preserve native semantic elements under the hood']],
    jobUse: 'Exact skill tested in frontend UI-engineering and design-system roles.',
    mistake: 'Forgetting to forward `disabled` or `type` props on a custom `<Button>` wrapper!',
    proHabit: 'Default `<Button type="button">` so custom buttons inside `<form>` NEVER accidentally submit unless `type="submit"` is explicitly passed!',
    rule: 'Variant Map + isLoading + className + ...rest = Pro Reusable UI Component.',
    code: `export function Button({ variant = 'primary', isLoading = false, children, className = '', ...rest }) {
  const styles = variant === 'danger' ? 'bg-rose-600 text-white' : 'bg-purple-600 text-white';
  return (
    <button type="button" disabled={isLoading || rest.disabled} className={\`rounded-xl px-4 py-2 font-semibold \${styles} \${className}\`} {...rest}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
}`,
    out: 'Production-grade reusable React `<Button>` primitive.',
    q1: ['Why is spreading ...rest props onto the underlying native <button> or <input> important when building reusable UI components?', 'It preserves full compatibility with native HTML and ARIA attributes (like type, disabled, onClick, autoFocus, aria-label) without having to manually list every single attribute in your component signature.'],
  },
  {
    id: 175, mod: 20, tInMod: 9,
    title: 'Splitting components into files',
    sub: 'Clean 1-Component-Per-File Organization, Colocation & Avoiding Circular Imports',
    coreEn: 'Keep large React projects clean by placing ==1 primary component per PascalCase file (`Navbar.jsx`, `ProductCard.jsx`)==, grouping feature-specific files together (`features/cart/`), and keeping shared primitives in `components/ui/`—with ==zero circular imports==!',
    coreHi: 'Clean React codebase ke liye ==1 main component per file (`ProductCard.jsx`)== rakho, shared UI blocks `components/ui/` mein aur feature files saath colocate karo—circular imports se bacho!',
    analogyTitle: 'One Clearly Labeled Recipe Card per Dish Inside Organized Kitchen Binders',
    analogyEn: 'When `Ctrl+P` -> typing `ProductCard` jumps straight to `ProductCard.jsx`, navigating even a 100-component MERN app takes 1 second!',
    analogyHi: '`Ctrl+P` -> `ProductCard` likhte hi exact file khul jati hai—100 components wale bade app mein bhi koi confusion nahi!',
    steps: [['1 File = 1 Component', 'Filename matches exported component (`CourseCard.jsx`)'], ['Shared ui/ Folder', 'Put generic `<Button>`, `<Card>`, `<Modal>` in `components/ui/`'], ['Feature Folders', 'Group related page + helper components (`pages/checkout/`)'], ['No Circular Loops', 'File A imports B, B never imports A -> extract shared C!']],
    jobUse: 'Makes pull requests tiny, readable, and conflict-free across multi-developer teams.',
    mistake: 'Putting 6 unrelated components inside one 900-line `Components.jsx` mega-file!',
    proHabit: 'Keep tiny private 10-line helper sub-components in the same file ONLY if nothing else imports them; otherwise give it its own file.',
    rule: 'Filename Matches Component Name (PascalCase) + Shared ui/ + Zero Circular Imports.',
    code: `src/components/
├── ui/
│   ├── Button.jsx
│   └── Modal.jsx
├── layout/
│   ├── Navbar.jsx
│   └── Footer.jsx
└── courses/
    └── CourseCard.jsx`,
    out: 'Clean, scalable, team-ready component file organization.',
    q1: ['When should you split a piece of JSX out into its own component file?', 'Split it out when it is reused in 2+ places, has its own independent state/logic, or makes the parent component exceed ~120–150 lines and harder to read at a glance.'],
  },

  // ═══ CHAPTER 21: State Management in React (176..183) ═══
  {
    id: 176, mod: 21, tInMod: 1,
    title: 'What state means',
    sub: 'Component Memory That Changes Over Time & Triggers Fresh UI Re-Renders Automatically',
    coreEn: '==State== is ==mutable data owned by a component that changes over time== (form inputs, cart items, open modal, fetched API data)—unlike normal local variables (which reset every render and NEVER update the UI), updating React State ==schedules a fresh re-render== automatically!',
    coreHi: '==State== component ki ==live memory== hai jo waqt ke saath badalti hai (cart, modal open/close, search text)—normal JS variable badalne se UI update nahi hota, par ==React State== update hote hi UI khud re-render hota hai!',
    analogyTitle: 'Digital Scoreboard Connected Directly to Stadium Lights vs Scratchpad Paper',
    analogyEn: 'Know the difference: **Props** = external arguments passed IN by parent (read-only); **State** = internal memory owned and updated BY the component!',
    analogyHi: '**Props** bahar se aate hain (read-only); **State** component ke andar ki apni changeable memory hai!',
    steps: [['Normal Var Fails', '`let count = 0; count++;` NEVER re-renders React UI!'], ['State Triggers UI', '`setCount(c => c + 1)` updates memory & repaints UI'], ['Props vs State', 'Props = passed down (read-only) | State = owned & updated'], ['Keep State Minimal', 'Only store minimal source-of-truth values in state']],
    jobUse: 'The core concept behind every interactive React feature.',
    mistake: 'Storing redundant values in state that could be calculated on the fly (like storing `cart` AND `cartTotal` separately!).',
    proHabit: 'Ask before adding state: "Can I compute this directly from existing props or state?" If YES, do NOT make it state!',
    rule: 'State = Minimal Dynamic Memory Triggering Re-Renders | Props = Read-Only Inputs.',
    code: `// Normal variable does NOT update UI; useState DOES!
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen((prev) => !prev)}>Toggle Menu</button>`,
    out: 'Live reactive UI driven cleanly by React state.',
    q1: ['Why does incrementing a normal local variable (let count = 0; count++) inside a React component fail to update what is shown on screen?', 'React does not track plain local variables—changing them does not trigger a re-render, and even if another render occurred, the local variable would reset back to 0. Only calling a state setter (useState) persists the value and triggers a re-render.'],
  },
  {
    id: 177, mod: 21, tInMod: 2,
    title: 'useState fundamentals',
    sub: 'Syntax, Asynchronous Batching & Functional Updater `setCount(prev => prev + 1)`',
    coreEn: '==`const [value, setValue] = useState(initialValue)`== adds reactive state to a function component—remember state updates are ==batched & asynchronous==, so whenever the new value depends on the previous value, ALWAYS use the ==functional updater `setCount(prev => prev + 1)`==!',
    coreHi: '==`const [val, setVal] = useState(init)`== component mein state jorta hai—jab naya value pichhle value par depend kare toh hamesha ==functional updater `setCount(prev => prev + 1)`== use karo!',
    analogyTitle: 'Submitting an Update Ticket to React Queue Rather Than Changing Mid-Sentence',
    analogyEn: 'Calling `setCount(count + 1)` 3 times in one click only adds `+1` (stale `count`!), whereas `setCount(c => c + 1)` 3 times cleanly adds `+3`!',
    analogyHi: 'Ek click mein 3 baar `setCount(count + 1)` sirf `+1` karega; `setCount(c => c + 1)` bilkul sahi `+3` karega!',
    steps: [['Initialize Cleanly', '`useState(0)`, `useState("")`, `useState([])`, `useState(null)`'], ['Functional Updater', '`setCount((prev) => prev + 1)` avoids stale-state bugs'], ['Lazy Initializer', '`useState(() => loadFromStorage())` runs expensive read ONCE!'], ['Snapshots Per Render', '`console.log(count)` right after `setCount` still logs OLD value']],
    jobUse: 'Used in literally 100% of interactive React components.',
    mistake: 'Writing `setCount(count + 1); console.log(count);` and wondering why the console still prints the old value (state updates on the NEXT render!).',
    proHabit: 'Pass a function `useState(() => JSON.parse(localStorage.getItem("cart") || "[]"))` so expensive initializers run ONLY on mount!',
    rule: 'Depends on Previous Value? -> Always Use setState(prev => ...).',
    code: `const [count, setCount] = useState(0);
const addThree = () => {
  setCount((c) => c + 1);
  setCount((c) => c + 1);
  setCount((c) => c + 1); // Reliably +3!
};`,
    out: 'Bug-free batched state updates with zero stale closures.',
    q1: ['Why does calling console.log(count) immediately on the line after setCount(count + 1) still print the previous value?', 'Because React state behaves like a snapshot for the current render—calling setCount schedules a NEW render with the updated value rather than mutating the current render local const count variable.'],
  },
  {
    id: 178, mod: 21, tInMod: 3,
    title: 'Updating state immutably',
    sub: 'Why React Uses `Object.is` Reference Checks & Clean Patterns for Objects & Arrays',
    coreEn: 'React detects state changes by comparing ==object/array references==—if you mutate `items.push(x); setItems(items)`, the reference is unchanged so ==React SKIPS re-rendering==! ALWAYS pass a ==brand-new array or object copy== (`[...items, x]`, `.map()`, `.filter()`, `{ ...user, name }`)!',
    coreHi: 'React reference check karta hai—agar aap `items.push(x)` karke same array pass karoge toh ==React re-render NAHI karega==! Hamesha ==naya copy (`[...items, x]`, `.map()`, `.filter()`, `{ ...user, name }`)== pass karo!',
    analogyTitle: 'Handing React a Fresh Receipt Copy So It Immediately Notices Something Changed',
    analogyEn: 'Memorize the 3 immutable array patterns: **Add** (`[...arr, item]`), **Remove** (`arr.filter(i => i.id !== id)`), **Update 1 Item** (`arr.map(i => i.id === id ? { ...i, done: !i.done } : i)`)!',
    analogyHi: '3 React formulas yaad kar lo: **Add** (`[...arr, item]`), **Delete** (`.filter`), **Update** (`.map`) — 100% immutable!',
    steps: [['Add Item', '`setTodos(prev => [...prev, newTodo])`'], ['Remove Item', '`setTodos(prev => prev.filter(t => t.id !== id))`'], ['Update 1 Item', '`setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))`'], ['Update Object', '`setUser(prev => ({ ...prev, email: nextEmail }))`']],
    jobUse: 'The #1 React state rule tested in every live-coding frontend interview!',
    mistake: 'Writing `todos.push(newTodo); setTodos(todos);` or `user.name = "A"; setUser(user);` and wondering why the UI stays frozen!',
    proHabit: 'Never use `.push()`, `.pop()`, `.splice()`, or `.sort()` directly on a React state array!',
    rule: 'Add = [...prev, x] | Delete = .filter() | Update = .map() | Object = { ...prev, key }.',
    code: `// Immutable Add, Toggle & Delete in React State:
const addTodo = (t) => setTodos((prev) => [...prev, t]);
const toggleTodo = (id) =>
  setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
const removeTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));`,
    out: 'Instant, predictable React re-renders with zero mutation bugs.',
    q1: ['Why does doing todos.push(newItem); setTodos(todos); fail to update the UI in React?', 'React compares the previous state reference with the next state reference using Object.is(). Because push() mutated the existing array in place, the memory reference is identical, so React assumes nothing changed and skips re-rendering.'],
  },
  {
    id: 179, mod: 21, tInMod: 4,
    title: 'Handling events',
    sub: 'React Synthetic Events (`onClick`, `onChange`, `onSubmit`) & Passing Arguments Cleanly',
    coreEn: 'Handle user interactions in JSX using camelCase props (`onClick`, `onChange`, `onSubmit`) passing a ==function reference (`onClick={handleSave}`)== or ==inline arrow when passing an ID (`onClick={() => onDelete(item.id)}`)==—NEVER `onClick={onDelete(item.id)}`!',
    coreHi: 'React mein `onClick`, `onChange`, `onSubmit` par hamesha ==function reference (`onClick={handleSave}`)== ya ID ke saath ==arrow (`onClick={() => onDelete(id)}`)== pass karo—direct `onClick={onDelete(id)}` mat likho!',
    analogyTitle: 'Wiring a Doorbell Button to Ring ONLY When Pressed (Not Continuously!)',
    analogyEn: 'Prefix handler functions cleanly with `handle*` (`handleSubmit`, `handleDelete`) and callback props with `on*` (`onSubmit`, `onDelete`)—universal React naming convention!',
    analogyHi: 'React pro naming: internal handlers `handleClick` aur props `onClick` / `onDelete` rakho!',
    steps: [['No Args Needed', '`<button onClick={handleReset}>Reset</button>`'], ['Pass Argument', '`<button onClick={() => handleDelete(item.id)}>Delete</button>`'], ['Form Submit', '`<form onSubmit={(e) => { e.preventDefault(); ... }}>`'], ['Input Change', '`<input value={q} onChange={(e) => setQ(e.target.value)} />`']],
    jobUse: 'Used on every interactive control across React web apps.',
    mistake: 'Writing `onClick={setCount(count + 1)}` instead of `onClick={() => setCount(c => c + 1)}` (infinite render crash!).',
    proHabit: 'Follow `handle*` for internal functions and `on*` for props passed into child components.',
    rule: 'onClick={fn} or onClick={() => fn(id)} — Never onClick={fn()}!',
    code: `<form onSubmit={handleSubmit}>
  <input value={title} onChange={(e) => setTitle(e.target.value)} />
  <button type="submit">Add Task</button>
</form>`,
    out: 'Clean, crash-free React event handling.',
    q1: ['What happens if you write <button onClick={handleDelete(item.id)}> in React?', 'handleDelete(item.id) executes IMMEDIATELY during render instead of waiting for a click—deleting the item as soon as the component renders! Always wrap parameterized calls in an arrow function: () => handleDelete(item.id).'],
  },
  {
    id: 180, mod: 21, tInMod: 5,
    title: 'Conditional rendering',
    sub: 'Cleanly Rendering States With Early Returns, Ternaries (`? :`), Safe `&&` & Lookup Maps',
    coreEn: 'Show different UI based on state cleanly: use ==Early Returns== at the top for Loading/Error states, ==Ternary (`? :`)== for Either/Or choices, ==Boolean `&&`== for optional badges (`count > 0 && <Badge />`), and ==Object Maps== for 3+ status tabs!',
    coreHi: 'Alag-alag states dikhane ke liye ==Early Returns== (Loading/Error), ==Ternary (`? :`)== (Either/Or), ==Boolean `&&`== (`count > 0 && ...`), aur 3+ cases ke liye ==Object Lookup Map== use karo!',
    analogyTitle: 'Clean Signpost Showing Only the Exact Screen Needed Right Now',
    analogyEn: 'Early returns (`if (isLoading) return <Spinner />; if (error) return <ErrorCard />;`) keep your main component JSX clean and flat!',
    analogyHi: 'Top par `if (isLoading) return <Spinner />;` lagane se main JSX clean aur bina nested ternaries ke rehta hai!',
    steps: [['Early Return', '`if (isLoading) return <Skeleton />;` (cleanest!)'], ['Either / Or', '`{isLoggedIn ? <Dashboard /> : <LoginPrompt />}`'], ['Optional Show', '`{hasError && <ErrorBanner msg={error} />}`'], ['Multi-Tab Map', '`const VIEWS = { profile: <Profile />, billing: <Billing /> };`']],
    jobUse: 'Powers auth gates, loading skeletons, tabs, empty states, and role-based dashboards.',
    mistake: 'Nesting 4 ternaries inside JSX (`a ? b ? c ? d : e : f : g`) so nobody can read it!',
    proHabit: 'Never nest ternaries inside JSX—extract a small helper function or use clean Early Returns!',
    rule: 'Loading/Error = Early Return | 2 Choices = Ternary | Optional = Boolean &&.',
    code: `if (isLoading) return <p>Loading dashboard...</p>;
if (error)     return <p className="text-rose-600">{error}</p>;
return items.length === 0 ? <EmptyState /> : <ProductGrid items={items} />;`,
    out: 'Flat, super-readable conditional UI covering all 4 states.',
    q1: ['When is an Early Return better than an inline ternary inside JSX?', 'When rendering full-screen or full-section Loading, Error, or Unauthorized states—Early Returns keep the main return block flat and readable without wrapping the entire component in nested ternaries.'],
  },
  {
    id: 181, mod: 21, tInMod: 6,
    title: 'Derived state',
    sub: 'Computing Totals, Counts & Filtered Lists During Render Instead of Duplicating State!',
    coreEn: '==Derived State== means calculating values like `cartTotal`, `completedCount`, or `filteredProducts` ==directly during render from existing state== (`const total = cart.reduce(...)`)—NEVER storing redundant copies in a second `useState` + `useEffect` (which causes out-of-sync bugs and wasted renders)!',
    coreHi: '==Derived State== ka matlab hai jo value existing state se calculate ho sakti hai (`cartTotal`, `filteredList`, `completedCount`), use ==seedha render mein compute karo==—doosra duplicate `useState` mat banao!',
    analogyTitle: 'Reading Your Bank Balance Live From Transactions Instead of Writing It Twice on Two Sticky Notes',
    analogyEn: 'If you have `items` and `searchQuery` in state, write `const visible = items.filter(...)` directly—zero extra `useEffect`, zero stale-sync bugs!',
    analogyHi: '`items` aur `search` already state mein hain toh `const visible = items.filter(...)` seedha likho—extra `useState` aur `useEffect` ki zaroorat hi nahi!',
    steps: [['Spot Duplicates', '`fullName`, `cartTotal`, `filteredItems`, `doneCount`'], ['Compute Inline', '`const total = cart.reduce((s, i) => s + i.price, 0);`'], ['Skip Extra Effect', 'Zero `useEffect` needed to sync derived state!'], ['Memo Only If Slow', 'Wrap in `useMemo` ONLY if computing over 10,000+ rows']],
    jobUse: 'One of the clearest signs separating senior React engineers from beginners!',
    mistake: 'Creating `const [filtered, setFiltered] = useState([])` and syncing it inside `useEffect` whenever `search` changes (causes extra flicker render!).',
    proHabit: 'Rule of Minimal State: Store ONLY raw user inputs/server data in `useState`—derive everything else inline!',
    rule: 'Can Compute From Existing State/Props? -> Derive Inline (Never Duplicate in useState!).',
    code: `// Clean Derived State (Zero extra useState or useEffect!)
const [todos, setTodos] = useState([]);
const [query, setQuery] = useState('');

const visibleTodos = todos.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()));
const remainingCount = todos.filter((t) => !t.done).length;`,
    out: 'Zero out-of-sync state bugs and fewer wasted renders.',
    q1: ['Why is storing filteredItems in its own useState and syncing it via useEffect an anti-pattern in React?', 'It duplicates state (risking out-of-sync bugs) and forces an unnecessary second render pass every time the search query changes. Computing const filteredItems = items.filter(...) directly during render is simpler, faster, and always 100% in sync.'],
  },
  {
    id: 182, mod: 21, tInMod: 7,
    title: 'Lifting state up',
    sub: 'Sharing Live State Between Sibling Components via Their Closest Common Parent',
    coreEn: 'When ==two sibling components== need to stay in sync (e.g., `<SearchBar />` typing filters `<ProductGrid />`), ==Lift State Up== to their ==closest common parent== (`<ShopPage />`), then pass state DOWN as props and updater callbacks DOWN!',
    coreHi: 'Jab ==2 sibling components== (`<SearchBar />` aur `<ProductGrid />`) ko same state share karni ho, toh state ko unke ==closest common parent (`<ShopPage />`)== mein upar shift kar do (**Lifting State Up**)!',
    analogyTitle: 'Moving a Shared Whiteboard Out of One Office Into the Common Hallway Between Both Rooms',
    analogyEn: 'Siblings cannot talk directly sideways in React—lifting `query` up to `<ShopPage />` gives both `<SearchBar />` and `<ProductGrid />` one Single Source of Truth!',
    analogyHi: 'Siblings aapas mein seedha state share nahi kar sakte—parent mein state rakhne se dono siblings 100% synced rehte hain!',
    steps: [['Spot Shared Need', 'Sibling A updates value; Sibling B displays filtered result'], ['Move To Parent', 'Move `useState` into closest common parent component'], ['Pass Props Down', 'Pass `query` + `onQueryChange={setQuery}` to SearchBar'], ['Pass Data Down', 'Pass derived `filteredProducts` to ProductGrid']],
    jobUse: 'Used on every filterable table, accordion, tab bar, and checkout summary in React.',
    mistake: 'Trying to keep two separate copies of `selectedTab` inside two siblings and manually syncing them.',
    proHabit: 'Keep state as **low** as possible, and lift it ONLY as **high** as the closest common parent that needs it!',
    rule: 'Siblings Need Shared State? -> Lift to Closest Common Parent -> Single Source of Truth.',
    code: `function ShopPage({ products }) {
  const [query, setQuery] = useState(''); // Lifted to common parent!
  const visible = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <SearchBar query={query} onChange={setQuery} />
      <ProductGrid items={visible} />
    </>
  );
}`,
    out: 'Clean, synchronized sibling components sharing one source of truth.',
    q1: ['What does "Lifting State Up" mean in React and when should you do it?', 'It means moving state from a child component up into the closest common parent component whenever two or more sibling components need to read or synchronize with that same piece of state.'],
  },
  {
    id: 183, mod: 21, tInMod: 8,
    title: 'Avoiding direct state mutation',
    sub: 'Spotting Subtle Nested Mutation Bugs (`user.address.city = ...`) & Clean Nested Spreads',
    coreEn: 'Direct mutation (`arr.sort()`, `obj.nested.x = 1`) silently breaks React re-renders, `React.memo`, and undo/history features—for nested objects/arrays, copy every level along the modified path cleanly using spread `{ ...prev, address: { ...prev.address, city } }`!',
    coreHi: 'Nested state mein bhi direct mutation (`user.address.city = "Pune"`) bugs lata hai—har modified level ko spread se cleanly copy karo (`{ ...prev, address: { ...prev.address, city } }`)!',
    analogyTitle: 'Updating Only the Edited Page With a Fresh Copy So Version History Stays Intact',
    analogyEn: 'Even `const copy = [...todos]; copy[0].done = true;` STILL mutates the inner object! Always copy the modified item too: `todos.map(t => t.id === id ? { ...t, done: true } : t)`!',
    analogyHi: '`const copy = [...todos]; copy[0].done = true;` andar ke object ko mutate kar deta hai—hamesha `.map()` se item ka bhi naya `{ ...t }` banao!',
    steps: [['Spot Hidden Mutators', 'Avoid `.push`, `.splice`, `.sort`, `.reverse`, `obj.x = ...`'], ['Copy Nested Path', '`{ ...prev, profile: { ...prev.profile, city: "Pune" } }`'], ['Keep State Flat', 'Flatter state structures make immutable updates 5x simpler!'], ['Use Modern ES2023', '`.toSorted()`, `.toReversed()`, `.with()` never mutate!']],
    jobUse: 'Prevents the hardest-to-debug "UI did not update until I clicked something else!" React bugs.',
    mistake: 'Sorting state in place (`items.sort(...)`) directly inside render—mutates state silently!',
    proHabit: 'Keep React state as **flat** as possible so updates stay crisp 1-level spreads.',
    rule: 'Never Mutate Any Level of State | Flatten State | Use Non-Mutating Methods.',
    code: `// Safe nested object state update
setUser((prev) => ({
  ...prev,
  address: { ...prev.address, city: 'Bengaluru' },
}));`,
    out: '100% immutable nested state update with guaranteed clean re-render.',
    q1: ['Why is const copy = [...todos]; copy[0].done = true; setTodos(copy); still a direct state mutation bug?', 'Because [...todos] creates a shallow copy of the outer array, so copy[0] still points to the exact same object in memory as todos[0]. Mutating copy[0].done mutates the previous state object directly! Use .map() to create a new object for the modified item.'],
  },

  // ═══ CHAPTER 22: React Hooks (184..191) ═══
  {
    id: 184, mod: 22, tInMod: 1,
    title: 'Rules of Hooks',
    sub: 'Top-Level Only (Never Inside `if`/`for`) & Call Only Inside React Components or Custom Hooks',
    coreEn: 'React tracks Hooks by ==exact call order on every render==—therefore obey the ==2 Strict Rules of Hooks==: ==1) Call Hooks ONLY at the top level== (NEVER inside `if`, `for`, or after an early `return`!), and ==2) Call Hooks ONLY inside React Function Components or Custom Hooks (`use*`)==!',
    coreHi: 'React Hooks ko ==exact call order== se track karta hai—isliye ==2 strict rules== follow karo: ==1) Hooks hamesha top-level par call karo (`if`, `for` ya `return` ke baad KABHI nahi!), 2) Sirf React Component ya Custom Hook (`use*`) ke andar==!',
    analogyTitle: 'Assigned Theater Seats Numbered 1, 2, 3—Skipping Seat 2 Makes Everyone Sit in the Wrong Chair!',
    analogyEn: 'Putting `if (isLoggedIn) { const [x] = useState(0); }` shifts Hook indices between renders and instantly crashes React with `"Rendered more/fewer hooks than expected"`!',
    analogyHi: '`if` ke andar `useState` ya `useEffect` likhne se React crash ho jata hai—`if` ko Hook ke ANDAR rakho, Hook ko `if` ke andar nahi!',
    steps: [['1. Top Level Only', 'Place ALL `useState`/`useEffect`/`useRef` above any `if`/`return`'], ['2. React/Custom Only', 'Never call Hooks inside plain JS helpers or event handlers'], ['Put if INSIDE Hook', '`useEffect(() => { if (!id) return; ... }, [id])` is 100% valid!'], ['Use ESLint Plugin', '`eslint-plugin-react-hooks` catches violations instantly']],
    jobUse: 'Guaranteed interview question for every React developer role.',
    mistake: 'Putting `if (!user) return <Login />;` on line 3 and `useEffect(...)` on line 6 (crashes the moment `user` logs in!).',
    proHabit: 'Always write ALL Hooks at the very top of your component BEFORE any `if (...) return ...` statements!',
    rule: 'All Hooks at Top Level (Before Any Early Return) + Only in React/Custom Hooks.',
    code: `function Profile({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!userId) return; // Condition goes INSIDE the Hook, never outside!
    fetchUser(userId).then(setUser);
  }, [userId]);
  if (!userId) return <p>Select a user</p>; // Early return AFTER all hooks!
  return <h2>{user?.name}</h2>;
}`,
    out: '100% Rules-of-Hooks compliant, crash-free component.',
    q1: ['Why does React forbid calling useState or useEffect conditionally inside an if statement?', 'Internally React stores Hooks in a linked list/array matched strictly by call order on every render. Calling a Hook conditionally changes the order between renders, misaligning every subsequent Hook state and crashing the component.'],
  },
  {
    id: 185, mod: 22, tInMod: 2,
    title: 'useState review',
    sub: 'Grouping Related State, Avoiding Redundant State & Resetting State Cleanly With `key`',
    coreEn: 'Level up your `useState` mastery: ==group tightly related state== (`{ email, password }` form object), ==avoid redundant derived state==, use ==lazy initializers== for `localStorage`, and pass a changing ==`key={userId}` prop== on a child component to reset ALL its internal state cleanly in 1 line!',
    coreHi: '`useState` pro patterns: related fields ko ek object mein group karo, derived state inline rakho, aur child component ka poora state reset karne ke liye bas uspar ==`key={userId}`== change kar do!',
    analogyTitle: 'Fresh Clean Sheet of Paper Every Time You Switch to a Different Customer Profile (`key={id}`)',
    analogyEn: 'Switching from editing User #1 to User #2? Rendering `<EditProfileForm key={userId} user={user} />` automatically resets all form fields with ZERO messy `useEffect`!',
    analogyHi: '`<EditProfileForm key={userId} />` likhne se user badalte hi poora form automatically reset ho jata hai—bina kisi `useEffect` ke!',
    steps: [['Group Related Fields', '`const [form, setForm] = useState({ name: "", email: "" });`'], ['Split Independent', 'Keep `isModalOpen` separate from `products` array'], ['Reset Via key Prop', '`<CommentForm key={postId} />` resets state on post change'], ['Functional Updates', 'Always use `prev => ...` when based on previous state']],
    jobUse: 'Produces dramatically cleaner, simpler React code with fewer `useEffect` bugs.',
    mistake: 'Writing a 20-line `useEffect` to manually clear 8 `useState` fields when changing `<ProfileForm key={userId} />` does it in 1 prop!',
    proHabit: 'Need to completely reset a form or widget when an ID changes? Give it a `key={id}` prop!',
    rule: 'Group Related State + Reset Subtrees Cleanly With key={id} + Derive Inline.',
    code: `// Automatically resets all internal draft state when switching chats!
<ChatComposer key={activeChatId} chatId={activeChatId} />`,
    out: 'Zero stale-draft bugs with zero extra `useEffect` code.',
    q1: ['How can changing the key prop on a React component help reset its internal state without useEffect?', 'When a component key changes (e.g., key={selectedUserId}), React treats it as a brand-new component instance—unmounting the old one and mounting a fresh one with clean initial state automatically.'],
  },
  {
    id: 186, mod: 22, tInMod: 3,
    title: 'useEffect and synchronization',
    sub: 'Connecting React to External Systems: API Fetches, Timers, Subscriptions & Document Title',
    coreEn: '==`useEffect(setup, [deps])`== synchronizes your React component with ==external systems outside React==—fetching API data on mount/ID change, subscribing to WebSockets/Socket.IO, setting `document.title`, or listening to `window` resize/keydown events!',
    coreHi: '==`useEffect`== React component ko ==external systems== se sync karta hai—jaise API se data fetch karna, Socket.IO subscribe karna, timers lagana ya `document.title` update karna!',
    analogyTitle: 'Plug Connecting Your React Component to the Outside World (APIs, Timers, Sockets)',
    analogyEn: 'Remember: `useEffect` runs **AFTER** React paints the screen—so the browser renders smoothly first, then your effect syncs with the server/external system!',
    analogyHi: '`useEffect` screen paint hone ke BAAD chalta hai—taaki UI fast dikhe aur API/external sync smoothly background mein ho!',
    steps: [['External Systems Only', 'APIs, `window` listeners, WebSockets, `setInterval`, `document.title`'], ['Async Inside Effect', 'Define `async function load()` INSIDE `useEffect` (never `useEffect(async ...)`)'], ['Declare All Deps', 'List every reactive prop/state used inside `[deps]`'], ['Return Cleanup', 'Always return `() => { ... }` to cancel fetches/timers/listeners']],
    jobUse: 'Used in every MERN app for data loading, Socket.IO chat listeners, and auth sync.',
    mistake: 'Writing `useEffect(async () => { ... })` directly (async functions return a Promise instead of a cleanup function—React warns!).',
    proHabit: 'Never make the `useEffect` callback itself `async`—define an `async function fetchData()` inside it and call it!',
    rule: 'useEffect = Sync With External World | Async Helper Inside + Always Return Cleanup.',
    code: `useEffect(() => {
  document.title = \`(\${unread}) Inbox — FutureIT\`;
}, [unread]);`,
    out: 'Clean, synchronized browser tab title updating automatically.',
    q1: ['Why can you not pass an async function directly as useEffect(async () => { ... }, [])?', 'An async function always returns a Promise, whereas useEffect expects either nothing (undefined) or a synchronous cleanup function (() => void). Instead, define an inner async function inside useEffect and call it.'],
  },
  {
    id: 187, mod: 22, tInMod: 4,
    title: 'Dependency arrays and cleanup',
    sub: 'Mastering `[]` vs `[id]` vs Omitted Deps + Cleanup Functions Stopping Memory Leaks',
    coreEn: 'Control WHEN `useEffect` runs via its ==Dependency Array==: ==`[]`== (once on mount), ==`[userId]`== (on mount + whenever `userId` changes), ==no array== (every render—rarely wanted!)—and ALWAYS return a ==Cleanup function (`return () => ...`)== to cancel timers, listeners, and `AbortController` fetches!',
    coreHi: '==Dependency Array== control karta hai `useEffect` kab chalega: ==`[]`== (sirf 1 baar mount par), ==`[userId]`== (jab `userId` badle)—aur ==Cleanup function (`return () => ...`)== timers, listeners aur fetches cancel karke memory leaks rokta hai!',
    analogyTitle: 'Turning Off the Lights & Locking the Door Every Time You Leave a Room (Cleanup)',
    analogyEn: 'Without returning `() => clearInterval(id)` or `() => controller.abort()`, switching pages leaves zombie timers and stale API calls piling up in memory!',
    analogyHi: 'Cleanup (`clearInterval` / `removeEventListener` / `controller.abort()`) na karne se zombie timers aur memory leaks ban jaate hain!',
    steps: [['[] = Mount Once', 'Initial load or global `window` listener'], ['[id, page] = Re-Sync', 'Re-runs whenever `id` or `page` changes'], ['Cleanup Runs First', 'Runs before next effect re-run AND on component unmount'], ['Never Lie About Deps', 'Include all reactive values used inside the effect']],
    jobUse: 'Top-3 most asked React Hooks interview question!',
    mistake: 'Omitting the dependency array completely while calling `setData()` inside `useEffect`—triggers an infinite API request loop that DDoSes your own backend!',
    proHabit: 'Whenever you write `addEventListener`, `setInterval`, `socket.on`, or `fetch` inside `useEffect`, IMMEDIATELY write its matching `return () => ...` cleanup!',
    rule: '[] = Once | [x] = On x Change | Always Pair Setup With Cleanup Function.',
    code: `useEffect(() => {
  const controller = new AbortController();
  fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
    .then((r) => r.json())
    .then(setUser)
    .catch((e) => { if (e.name !== 'AbortError') setError(e.message); });
  return () => controller.abort(); // Cleanup cancels stale request!
}, [userId]);`,
    out: 'Leak-free, race-condition-proof React data fetching.',
    q1: ['When does the cleanup function returned from useEffect execute?', 'It executes in two situations: 1) right before the effect re-runs when a dependency changes (cleaning up the previous run), and 2) when the component unmounts from the screen.'],
  },
  {
    id: 188, mod: 22, tInMod: 5,
    title: 'useRef for DOM access',
    sub: 'Direct DOM Handles (`inputRef.current.focus()`) & Mutable Values That Persist Without Re-Rendering',
    coreEn: '==`useRef(initialValue)`== returns a mutable `{ current }` box that ==persists across renders WITHOUT triggering a re-render when changed==—perfect for ==1) Direct DOM access (`inputRef.current.focus()`, `scrollIntoView()`, `<video>.play()`)== and ==2) Storing timer IDs (`intervalRef.current`)==!',
    coreHi: '==`useRef`== ek `{ current }` box deta hai jo re-renders ke beech value yaad rakhta hai ==bina re-render trigger kiye==—DOM focus (`inputRef.current.focus()`), video controls aur timer IDs ke liye best!',
    analogyTitle: 'Private Pocket Sticky Note You Can Edit Silently Without Triggering a Screen Redraw',
    analogyEn: 'Know when to pick `useState` vs `useRef`: shown on screen in JSX? -> **`useState`**. Silent timer ID or DOM node handle? -> **`useRef`**!',
    analogyHi: 'Screen par dikhana hai -> **`useState`**; sirf DOM focus ya silent timer ID rakhna hai -> **`useRef`**!',
    steps: [['Attach To JSX', '`const inputRef = useRef(null); <input ref={inputRef} />`'], ['Call DOM APIs', '`inputRef.current?.focus()` inside event handler or `useEffect`'], ['Store Timer IDs', '`timerRef.current = setInterval(...)` without re-rendering'], ['Never Read In Render', 'Do not read/write `ref.current` to drive visible JSX output']],
    jobUse: 'Powers auto-focusing search bars, chat scroll-to-bottom, custom video players, and debounce timers.',
    mistake: 'Using `useRef` to store a visible counter expecting the screen to update when `countRef.current++` runs!',
    proHabit: 'Always use optional chaining (`inputRef.current?.focus()`) so unmounted refs never throw null errors.',
    rule: 'Visible UI Data = useState | DOM Handle or Silent Mutable Box = useRef.',
    code: `function SearchModal({ isOpen }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);
  return <input ref={inputRef} placeholder="Search courses..." />;
}`,
    out: 'Instant auto-focused search modal using `useRef`.',
    q1: ['What is the key difference between useState and useRef in React?', 'Updating useState triggers a component re-render so the UI updates with the new value. Mutating ref.current persists across renders silently WITHOUT triggering a re-render—making useRef ideal for DOM references and timer IDs.'],
  },
  {
    id: 189, mod: 22, tInMod: 6,
    title: 'useContext fundamentals',
    sub: 'Sharing Global App State (Auth User, Dark Theme, Language) Cleanly Without Prop Drilling',
    coreEn: '==React Context (`createContext` -> `<Provider value={...}>` -> `useContext`)== lets deeply nested components read ==app-wide data (Logged-in Auth User, Theme, Language)== directly without manually passing props through 6 intermediate layers (Prop Drilling)!',
    coreHi: '==React Context (`createContext` + `Provider` + `useContext`)== poore app mein ==Auth User, Dark Theme ya Language== share karta hai—6 layers tak baar-baar props pass (Prop Drilling) karne ki zaroorat nahi!',
    analogyTitle: 'Building-Wide Wi-Fi Signal Any Room Can Connect to Directly Without Running Cables Floor-by-Floor',
    analogyEn: 'Best practice: wrap `useContext(AuthContext)` in a tiny custom hook `useAuth()` that throws a clear error if used outside `<AuthProvider>`!',
    analogyHi: 'Pro trick: `useAuth()` custom hook banao taaki koi bhi component 1 line `const { user, logout } = useAuth();` se user padh sake!',
    steps: [['1. Create Context', '`const AuthContext = createContext(null);`'], ['2. Wrap Provider', '`<AuthContext.Provider value={{ user, login, logout }}>`'], ['3. Custom Hook', '`export const useAuth = () => useContext(AuthContext);`'], ['4. Pick Right Scope', 'Ideal for low-frequency global state (Auth, Theme, Locale)']],
    jobUse: 'Standard pattern for Auth (`AuthContext`) and Theme (`ThemeContext`) in every MERN app!',
    mistake: 'Dumping rapidly-changing high-frequency state (like mouse coordinates or every keystroke) into a top-level Context (re-renders every consumer!).',
    proHabit: 'Keep Context focused on **Auth, Theme, and Language**—and create a clean `useAuth()` custom hook wrapper.',
    rule: 'createContext -> Provider at Top -> Custom useAuth() Hook -> Zero Prop Drilling.',
    code: `const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);`,
    out: 'Clean, reusable global Auth state accessible anywhere in React.',
    q1: ['What problem does React Context solve, and what are 3 ideal use cases for it?', 'Context eliminates Prop Drilling (passing props down through many intermediate components that do not use them). Ideal use cases are low-frequency app-wide state: Authenticated User, Light/Dark Theme, and UI Language/Locale.'],
  },
  {
    id: 190, mod: 22, tInMod: 7,
    title: 'Creating custom Hooks',
    sub: 'Extracting Reusable Stateful Logic (`useFetch`, `useDebounce`, `useLocalStorage`) With `use*` Prefix',
    coreEn: 'A ==Custom Hook== is a JavaScript function starting with ==`use` (`useDebounce`, `useLocalStorage`, `useFetch`)== that bundles reusable `useState`/`useEffect` logic—letting multiple components share clean stateful behavior (each component gets its OWN independent state copy!).',
    coreHi: '==Custom Hook== ek normal JS function hai jo ==`use`== se shuru hota hai (`useFetch`, `useDebounce`, `useLocalStorage`)—isse aap stateful logic ko multiple components mein cleanly reuse kar sakte ho!',
    analogyTitle: 'Custom Power-Tool Module Plugging Reusable Logic Into Any Component in 1 Line',
    analogyEn: 'Instead of copy-pasting the same 25 lines of `isLoading` + `error` + `AbortController` `fetch()` code across 10 pages, write `useFetch(url)` ONCE and call `const { data, loading, error } = useFetch("/api/courses")`!',
    analogyHi: '10 pages mein same 25 line ka fetch code copy karne ke bajaye 1 `useFetch(url)` custom hook banao aur har jagah 1 line mein use karo!',
    steps: [['Prefix With use', 'Mandatory `use*` naming so React linter enforces Rules of Hooks'], ['Share Logic Not State', '2 components calling `useCounter()` get 2 independent counts!'], ['Return Clean Shape', 'Return `{ data, loading, error }` or `[val, setVal]`'], ['Store In src/hooks/', 'Keep clean `src/hooks/useDebounce.js`, `useLocalStorage.js`']],
    jobUse: 'Hallmark of mid-to-senior React engineering in interviews and production repos.',
    mistake: 'Thinking two components calling the same Custom Hook share the same state value (they share LOGIC, not state—use Context for shared state!).',
    proHabit: 'Build `useDebounce(value, 300)` and `useLocalStorage(key, init)` in `src/hooks/` for every real React project!',
    rule: 'Custom Hooks Share Stateful Logic (Not State) | Always Prefix With "use".',
    code: `export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}`,
    out: 'Reusable, leak-free `useDebounce` custom hook ready for any search bar.',
    q1: ['If Component A and Component B both call the same Custom Hook useToggle(), do they share the same true/false state?', 'No—Custom Hooks share stateful LOGIC, not state itself. Each component calling useToggle() gets its own completely isolated state instance.'],
  },
  {
    id: 191, mod: 22, tInMod: 8,
    title: 'Avoiding unnecessary effects',
    sub: 'Official React Philosophy ("You Might Not Need an Effect"): Derived Values & Event Handlers First',
    coreEn: '==`useEffect` is an escape hatch for external systems ONLY==—you do NOT need `useEffect` to ==compute derived data (`fullName`, `filteredList`), handle user button clicks (put logic in `onClick`!), or reset state on prop change (use `key`!)==.',
    coreHi: '==`useEffect` sirf external systems (APIs/timers/sockets) ke liye hai==—derived calculations (`filteredList`), button clicks (`onClick` mein likho!) ya form reset (`key` prop!) ke liye `useEffect` mat lagao!',
    analogyTitle: 'Direct Light Switch (`onClick`) Instead of Installing a Motion Sensor (`useEffect`) That Reacts Late',
    analogyEn: 'Removing unnecessary `useEffect`s cuts wasted double-renders in half and makes React apps dramatically faster and easier to debug!',
    analogyHi: 'Faltu `useEffect` hatane se app faster hota hai, flicker khatam hota hai aur bugs aadhe ho jaate hain!',
    steps: [['Derive Inline', 'Compute `total` & `filtered` during render—zero `useEffect`!'], ['Act In Handlers', 'POST form data inside `handleSubmit`, NOT a `useEffect`!'], ['Reset With key', 'Pass `key={id}` instead of resetting 6 states in `useEffect`'], ['Keep Effects Pure', 'Reserve `useEffect` strictly for external synchronization']],
    jobUse: 'Directly from official react.dev docs—frequently asked in modern React 18/19 interviews!',
    mistake: 'Setting `const [submitted, setSubmitted] = useState(false)` on button click just to trigger a `POST` inside `useEffect` (just call `POST` directly inside `handleSubmit`!).',
    proHabit: 'Before writing any `useEffect`, ask: "Is this syncing with an external system, or reacting to a user click/state calculation?"',
    rule: 'User Action -> Event Handler | Calculation -> Inline Render | External Sync -> useEffect.',
    code: `// BAD: useEffect(() => { setTotal(price * qty); }, [price, qty]);
// GOOD: Derive cleanly in 1 line during render!
const total = price * qty;`,
    out: 'Faster, simpler, zero-flicker React architecture.',
    q1: ['Name 3 common situations where developers mistakenly use useEffect when they do NOT need one.', '1) Calculating derived values like filtered lists or cart totals (compute inline during render), 2) Handling user-triggered actions like submitting a form or buying a product (handle directly in the event handler), and 3) Resetting component state when an ID prop changes (use a key prop instead).'],
  },

  // ═══ CHAPTER 23: React Routing (192..200) ═══
  {
    id: 192, mod: 23, tInMod: 1,
    title: 'Client-side routing',
    sub: 'Instant URL-Driven Page Swapping Using the Browser History API Without Server Reloads',
    coreEn: '==Client-Side Routing== intercepts link clicks in JavaScript, updates the browser URL bar cleanly (`/courses/mern`) via the ==History API==, and renders the matching React page component ==instantly without reloading HTML/CSS/JS==!',
    coreHi: '==Client-Side Routing== browser URL (`/courses/mern`) update karta hai aur bina page reload kiye turant matching React page component render kar deta hai—Back/Forward buttons aur bookmarks 100% kaam karte hain!',
    analogyTitle: 'Instant Elevator Switching Floors Inside One Building Without Stepping Outside',
    analogyEn: 'Users still get real shareable URLs, working Browser Back/Forward buttons, and zero white-flash reloads!',
    analogyHi: 'Real shareable URLs, Back/Forward buttons aur instant zero-reload transitions—teeno ek saath milte hain!',
    steps: [['URL = State', 'Keep current page, ID & filters reflected cleanly in the URL'], ['Zero Full Reload', 'Shared Navbar & Auth stay mounted smoothly'], ['History Works', 'Browser Back & Forward buttons work naturally'], ['Server Rewrite', 'Production host rewrites all paths to `index.html`']],
    jobUse: 'Essential for every multi-page React SPA, SaaS dashboard, and e-commerce storefront.',
    mistake: 'Using raw `<a href="/about">` for internal SPA navigation (triggers a slow full browser reload and wipes React state!).',
    proHabit: 'Always use React Router `<Link to="/about">` for internal pages and `<a href>` ONLY for external sites!',
    rule: 'Internal SPA Navigation = <Link to> | External Sites = <a href>.',
    code: `// Internal SPA link (instant, preserves state):
<Link to="/courses">Browse Courses</Link>
// External site link:
<a href="https://react.dev" target="_blank" rel="noopener noreferrer">React Docs</a>`,
    out: 'Instant, state-preserving SPA navigation.',
    q1: ['Why should you use React Router <Link to="/about"> instead of a normal <a href="/about"> inside a React SPA?', 'A normal <a href> forces a full browser page reload—re-downloading the app and wiping out all in-memory React state. <Link> intercepts the click and swaps the view cleanly in memory via the History API.'],
  },
  {
    id: 193, mod: 23, tInMod: 2,
    title: 'Installing React Router',
    sub: 'Setting Up `react-router-dom` & Wrapping Your App in `<BrowserRouter>`',
    coreEn: 'Install the industry-standard routing library via ==`npm install react-router-dom`== and wrap your root `<App />` inside ==`<BrowserRouter>`== in `main.jsx` (or use `createBrowserRouter`) to unlock `<Routes>`, `<Link>`, `useParams`, and `useNavigate` everywhere!',
    coreHi: '==`npm install react-router-dom`== install karo aur `main.jsx` mein `<App />` ko ==`<BrowserRouter>`== mein wrap karo—bas poora React Router toolkit ready!',
    analogyTitle: 'Installing the Central Navigation Switchboard at the Root of Your React App',
    analogyEn: 'Wrapping `<BrowserRouter>` in `main.jsx` (outside `<App />`) lets even `App.jsx` itself call `useNavigate()` or `useLocation()` without errors!',
    analogyHi: '`<BrowserRouter>` ko `main.jsx` mein `<App />` ke bahar wrap karne se `App.jsx` ke andar bhi `useNavigate()` smoothly chalta hai!',
    steps: [['Install Package', '`npm install react-router-dom`'], ['Wrap In main.jsx', '`<BrowserRouter><App /></BrowserRouter>`'], ['Define Routes', 'Place `<Routes>` + `<Route>` inside `App.jsx`'], ['Test Navigation', 'Click `<Link>` -> verify URL changes with zero reload']],
    jobUse: 'Used in the vast majority of production React SPAs.',
    mistake: 'Calling `useNavigate()` or rendering `<Link>` OUTSIDE `<BrowserRouter>` (immediately throws `"useNavigate() may be used only in the context of a <Router>"`!).',
    proHabit: 'Always wrap `<BrowserRouter>` around `<App />` right in `src/main.jsx`!',
    rule: 'npm install react-router-dom -> Wrap <App /> in <BrowserRouter> in main.jsx.',
    code: `// src/main.jsx
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`,
    out: 'Clean React Router context available across the entire app.',
    q1: ['What causes the React Router error "useNavigate() may be used only in the context of a <Router> component"?', 'Calling useNavigate() (or rendering <Link>) inside a component that is NOT wrapped inside <BrowserRouter> (commonly happening when <BrowserRouter> is placed inside App.jsx instead of around App.jsx in main.jsx).'],
  },
  {
    id: 194, mod: 23, tInMod: 3,
    title: 'Routes and route elements',
    sub: 'Mapping Clean URL Paths (`/` -> `<HomePage />`, `/courses` -> `<CoursesPage />`) With `<Routes>`',
    coreEn: 'Inside `<Routes>`, each ==`<Route path="/courses" element={<CoursesPage />} />`== maps a URL path cleanly to its React page element—React Router automatically picks the ==single best matching route==!',
    coreHi: '`<Routes>` ke andar har ==`<Route path="/courses" element={<CoursesPage />} />`== URL path ko exact React page component se map karta hai!',
    analogyTitle: 'Reception Directory Mapping Each Room Number to the Exact Office Door',
    analogyEn: 'Keep route paths **lowercase kebab-case** (`/my-courses`, `/order-history`) so URLs stay clean, memorable, and SEO-friendly!',
    analogyHi: 'Route paths hamesha **lowercase kebab-case** (`/my-courses`) rakho!',
    steps: [['Wrap In <Routes>', '`<Routes>` renders only the best-matching `<Route>`'], ['Map element Prop', '`element={<HomePage />}` passes JSX (even with props!)'], ['Keep Clean Paths', '`/`, `/courses`, `/courses/:id`, `/dashboard`, `/login`'], ['Add Catch-All *', 'Always include `<Route path="*" element={<NotFound />} />`']],
    jobUse: 'Defines the complete sitemap of every multi-page React application.',
    mistake: 'Passing `element={HomePage}` (component reference) instead of `element={<HomePage />}` (JSX element)!',
    proHabit: 'Always pass JSX (`element={<HomePage />}`) and keep all route definitions easy to scan inside `App.jsx`!',
    rule: '<Routes> -> <Route path="..." element={<Page />} /> + Catch-All path="*".',
    code: `<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/courses" element={<CoursesPage />} />
  <Route path="/courses/:id" element={<CourseDetailPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>`,
    out: 'Clean, complete declarative route map.',
    q1: ['In React Router v6+, why must you write element={<HomePage />} instead of element={HomePage}?', 'The element prop expects a rendered React JSX element (<HomePage />), which also lets you pass props directly into the routed component cleanly.'],
  },
  {
    id: 195, mod: 23, tInMod: 4,
    title: 'Link and NavLink',
    sub: 'SPA Navigation Links & Automatic Active-Tab Highlighting With `<NavLink>`',
    coreEn: 'Use ==`<Link to="/courses">`== for general internal links and ==`<NavLink to="/courses" className={({ isActive }) => ...}>`== inside navbars/sidebars to ==automatically highlight the currently active page== (and set `aria-current="page"` for accessibility)!',
    coreHi: 'General links ke liye ==`<Link to="...">`== aur navbar/sidebar mein active tab highlight karne ke liye ==`<NavLink>` (`({ isActive }) => ...`)== use karo—active styling aur `aria-current` free mein milta hai!',
    analogyTitle: 'Illuminated "You Are Here" Tab in Your Navbar Updating Automatically',
    analogyEn: 'Add **`end`** on the Home `<NavLink to="/" end>` so `"/"` stays active ONLY on the Home page instead of staying highlighted on `/courses` too!',
    analogyHi: 'Home `<NavLink to="/" end>` par **`end`** lagana mat bhoolna warna `/` har page par active dikhega!',
    steps: [['Use <Link>', 'Cards, buttons, footers & internal text links'], ['Use <NavLink>', 'Top navbar & sidebar tabs needing active highlight'], ['Style isActive', '`className={({ isActive }) => isActive ? "text-purple-600 font-bold" : "text-slate-600"}`'], ['Add end On /', '`<NavLink to="/" end>` prevents matching every sub-route!']],
    jobUse: 'Gives every React navbar and dashboard sidebar crisp active-page visual feedback.',
    mistake: 'Forgetting `end` on `<NavLink to="/">` so Home stays highlighted purple even while viewing `/settings`!',
    proHabit: 'Always put `end` on your root `"/"` `<NavLink>` and leverage `isActive` for clean Tailwind active pills.',
    rule: 'Link = General SPA Nav | NavLink = Active Styling + aria-current (Use end on "/").',
    code: `<NavLink
  to="/courses"
  className={({ isActive }) =>
    isActive ? 'font-bold text-purple-600' : 'text-slate-600 hover:text-purple-600'
  }
>
  Courses
</NavLink>`,
    out: 'Accessible, auto-highlighting React navigation link.',
    q1: ['Why is the "end" prop important on <NavLink to="/" end> in React Router?', 'Without end, "/" matches the prefix of every route (/courses, /profile, /settings), keeping the Home link permanently highlighted. Adding end ensures it is active ONLY on the exact "/" path.'],
  },
  {
    id: 196, mod: 23, tInMod: 5,
    title: 'Route parameters',
    sub: 'Dynamic Detail Pages (`/products/:id`) Using `useParams()` & Query Filters With `useSearchParams()`',
    coreEn: 'Build infinite detail pages from ONE component using ==dynamic URL segments (`/products/:id`)== read via ==`const { id } = useParams()`==—and sync shareable filters (`?category=mern&page=2`) using ==`useSearchParams()`==!',
    coreHi: 'Ek hi detail component se hazaaron pages banao: route par ==`/products/:id`== lagao aur ==`const { id } = useParams()`== se ID padho—aur filters (`?page=2&sort=asc`) ke liye ==`useSearchParams()`== use karo!',
    analogyTitle: 'One Smart Product-Page Template Filling Itself Live From Any Product ID in the URL',
    analogyEn: 'Remember to include `id` inside your `useEffect([id])` dependency array so clicking from `/products/1` -> `/products/2` fetches the new product automatically!',
    analogyHi: '`useEffect([id])` mein `id` daalna zaroori hai taaki `/products/1` se `/products/2` par jaate hi naya product fetch ho!',
    steps: [['Define Param', '`<Route path="/products/:id" element={<ProductDetail />} />`'], ['Read useParams', '`const { id } = useParams();` (always a string!)'], ['Fetch On Change', '`useEffect(() => fetchProduct(id), [id]);`'], ['Query Filters', '`const [params, setParams] = useSearchParams();`']],
    jobUse: 'Powers every product page, user profile, course detail, and order receipt in MERN apps.',
    mistake: 'Forgetting `[id]` in `useEffect` so navigating from Product 1 -> Product 2 keeps showing Product 1!',
    proHabit: 'Store active search/filter/page state in **`useSearchParams()`** so users can bookmark or share filtered URLs!',
    rule: ':id -> useParams() -> Fetch in useEffect([id]) | Filters -> useSearchParams().',
    code: `export function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  useEffect(() => {
    fetch(\`/api/courses/\${id}\`).then((r) => r.json()).then(setCourse);
  }, [id]);
  return <h1>{course?.title ?? 'Loading...'}</h1>;
}`,
    out: 'Dynamic detail page powered cleanly by URL parameters.',
    q1: ['What is the difference between useParams() and useSearchParams() in React Router?', 'useParams() reads dynamic path segments defined with a colon (like :id in /courses/42), while useSearchParams() reads and updates URL query strings (like ?category=react&page=2) for shareable filters and pagination.'],
  },
  {
    id: 197, mod: 23, tInMod: 6,
    title: 'Nested routes and layouts',
    sub: 'Persistent Navbars & Dashboard Sidebars Using Parent Layout Routes + `<Outlet />`',
    coreEn: 'Avoid repeating `<Navbar />` and `<Footer />` on every single page! Create ONE ==Parent Layout Route (`<Route element={<AppLayout />}>`)== that renders `<Navbar />`, ==`<Outlet />`== (where the active child page slots in!), and `<Footer />`!',
    coreHi: 'Har page par `<Navbar />` aur `<Footer />` repeat mat karo—ek ==Parent Layout Route== banao jisme `<Navbar />`, ==`<Outlet />`== (active child page ke liye) aur `<Footer />` ek hi baar likha ho!',
    analogyTitle: 'Master Dashboard Frame (`<DashboardLayout>`) Swapping Only the Center Window (`<Outlet />`)',
    analogyEn: 'Nested routes keep your Sidebar mounted with zero flicker while switching between `/dashboard/overview`, `/dashboard/orders`, and `/dashboard/settings`!',
    analogyHi: '`<Outlet />` se Sidebar aur Navbar bina hil-dul ke fixed rehte hain aur sirf center ka page smoothly swap hota hai!',
    steps: [['Build Layout Shell', '`<header /><main><Outlet /></main><footer />`'], ['Nest Child Routes', 'Wrap child `<Route>`s inside parent Layout `<Route>`'], ['Use index Route', '`<Route index element={<Overview />} />` for parent default'], ['Zero Duplication', 'Update Navbar once -> updates all 20 pages instantly!']],
    jobUse: 'Standard architecture for every SaaS dashboard, admin panel, and multi-section web app.',
    mistake: 'Forgetting to render `<Outlet />` inside the parent Layout component so child routes stay completely blank!',
    proHabit: 'Create clean separate layouts (`<PublicLayout />` for marketing pages & `<DashboardLayout />` for logged-in workspace)!',
    rule: 'Shared Shell = Parent Route + <Outlet /> | Default Child = index Route.',
    code: `function DashboardLayout() {
  return (
    <div className="flex min-h-dvh">
      <Sidebar />
      <main className="flex-1 p-6"><Outlet /></main>
    </div>
  );
}`,
    out: 'Zero-duplication persistent dashboard shell with smooth nested routing.',
    q1: ['What does the <Outlet /> component do in React Router?', '<Outlet /> acts as a placeholder inside a parent Layout Route where React Router renders whichever matching nested child route is currently active.'],
  },
  {
    id: 198, mod: 23, tInMod: 7,
    title: '404 routes',
    sub: 'Catch-All `path="*"` Fallback Page Guiding Lost Users Smoothly Back Home',
    coreEn: 'Always add a catch-all ==`<Route path="*" element={<NotFoundPage />} />`== at the end of `<Routes>` so typos or broken bookmarks render a ==friendly 404 screen with a clear "Back to Home" `<Link to="/">`== instead of a broken blank screen!',
    coreHi: '`<Routes>` ke end mein hamesha ==`<Route path="*" element={<NotFoundPage />} />`== rakho taaki galat URL par blank page nahi, ek helpful ==404 Page + "Go Home" button== dikhe!',
    analogyTitle: 'Friendly Mall Info Desk Guiding Lost Visitors Right Back to the Main Entrance',
    analogyEn: 'A thoughtful 404 page with a Home button and Search link keeps users on your site instead of closing the tab!',
    analogyHi: 'Helpful 404 page + "Back to Home" link user ko aapki site par roke rakhta hai!',
    steps: [['Add Wildcard *', '`<Route path="*" element={<NotFoundPage />} />`'], ['Keep Friendly', 'Clear "404 — Page Not Found" heading + helpful explanation'], ['Provide Escape', 'Prominent `<Link to="/">Back to Home</Link>` CTA'], ['Test Unknown URL', 'Visit `/does-not-exist` to verify 404 renders cleanly']],
    jobUse: 'Polished production detail checked in every QA pass and portfolio review.',
    mistake: 'Omitting `path="*"` so mistyped URLs render an empty navbar with blank white content underneath!',
    proHabit: 'Add a clean `<NotFoundPage />` on Day 1 whenever you set up `<Routes>`!',
    rule: 'Every <Routes> Block Ends With <Route path="*" element={<NotFoundPage />} />.',
    code: `export function NotFoundPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold text-purple-600">404</h1>
      <p className="mt-2 text-slate-600">Sorry, we could not find that page.</p>
      <Link to="/" className="mt-6 rounded-xl bg-purple-600 px-5 py-2.5 text-white">Go Home</Link>
    </main>
  );
}`,
    out: 'Polished, helpful 404 recovery screen.',
    q1: ['How do you create a catch-all 404 page in React Router v6+?', 'Add <Route path="*" element={<NotFoundPage />} /> inside <Routes>. The "*" wildcard matches any URL that did not match an earlier defined route.'],
  },
  {
    id: 199, mod: 23, tInMod: 8,
    title: 'Navigation after actions',
    sub: 'Programmatic Redirects With `useNavigate()` After Login, Form Submit or Delete',
    coreEn: 'When navigation must happen ==after a JavaScript action succeeds== (after Login API returns `200`, after creating a task, or after Logout), use ==`const navigate = useNavigate()`== (`navigate("/dashboard", { replace: true })`)!',
    coreHi: 'Jab Login, Form Submit ya Delete success hone ke BAAD redirect karna ho, tab ==`const navigate = useNavigate()`== use karo—login redirect par `{ replace: true }` lagao taaki Back dabane par user wapas login par na fasse!',
    analogyTitle: 'Automatic Escort Guiding You Into Your Dashboard Right After Badge Verification',
    analogyEn: 'Passing **`{ replace: true }`** after Login replaces `/login` in browser history so hitting the Back button does NOT bounce the logged-in user back to the login screen!',
    analogyHi: '`navigate("/dashboard", { replace: true })` login page ko history se replace kar deta hai—Back button UX ekdum smooth rehta hai!',
    steps: [['Get Hook', '`const navigate = useNavigate();` at top of component'], ['Redirect On Success', '`await login(creds); navigate("/dashboard", { replace: true });`'], ['Go Back Easily', '`navigate(-1)` acts just like Browser Back button'], ['Links Still Use <Link>', 'Use `<Link>` for user-clicked nav; `useNavigate` only after actions!']],
    jobUse: 'Used on every Login, Signup, Checkout Confirmation, and Delete flow in MERN.',
    mistake: 'Using `window.location.href = "/dashboard"` inside React (causes slow full page reload and wipes app memory!).',
    proHabit: 'Never use `window.location.href` for internal React redirects—always use `useNavigate()`!',
    rule: 'Clicked Nav = <Link> | Post-Action Redirect = useNavigate() (Use replace: true After Login).',
    code: `const navigate = useNavigate();
async function handleLogin(creds) {
  await apiLogin(creds);
  navigate('/dashboard', { replace: true });
}`,
    out: 'Instant, clean post-login redirect with smooth browser history.',
    q1: ['What does passing { replace: true } to navigate("/dashboard", { replace: true }) do after login?', 'It replaces the /login entry in the browser history stack instead of pushing a new entry—so if the user clicks the Back button right after logging in, they are not bounced awkwardly back to the login page.'],
  },
  {
    id: 200, mod: 23, tInMod: 9,
    title: 'Protected-route concepts',
    sub: 'Guarding Private Pages (`/dashboard`, `/admin`) With `<ProtectedRoute>` + Backend Verification',
    coreEn: 'Wrap private React routes in a ==`<ProtectedRoute />` wrapper== that checks Auth state (`if (loading) return <Spinner />; if (!user) return <Navigate to="/login" replace />; return <Outlet />;`)—AND remember: ==frontend guards are for UX only; Express backend MUST ALWAYS verify the JWT on every private API!==',
    coreHi: 'Private pages (`/dashboard`, `/admin`) ko ==`<ProtectedRoute />`== mein wrap karo: logged-in nahi toh `<Navigate to="/login" replace />`—aur yaad rakho ==asli security Express backend JWT check== se hoti hai!',
    analogyTitle: 'Lobby Receptionist Directing Guests to Sign In (Frontend) + Vault Security Lock (Backend JWT)',
    analogyEn: 'Save the attempted URL (`state={{ from: location }}`) when redirecting to `/login` so right after signing in, you send the user straight back to the exact page they wanted!',
    analogyHi: 'Redirect karte waqt `state={{ from: location }}` pass karne se login ke baad user seedha usi page par pahunch jata hai jo wo kholna chahta tha!',
    steps: [['Wait For Auth Load', '`if (isAuthLoading) return <Spinner />;` (prevents flicker!)'], ['Redirect Guests', '`if (!user) return <Navigate to="/login" state={{ from: loc }} replace />;`'], ['Check Role Optional', '`if (adminOnly && user.role !== "admin") return <Navigate to="/" />;`'], ['Enforce On Backend', 'Express auth middleware MUST still verify JWT on every API!']],
    jobUse: 'Required on every authenticated SaaS, EdTech, and E-Commerce MERN application!',
    mistake: 'Redirecting to `/login` BEFORE checking if the saved session/cookie is still loading (logs users out on every page refresh!).',
    proHabit: 'Always check **`isAuthLoading`** first inside `<ProtectedRoute />` so refreshing `/dashboard` stays smoothly logged in!',
    rule: 'Check Auth Loading -> Redirect Guests With <Navigate replace /> -> Always Enforce Auth on Backend Too.',
    code: `export function ProtectedRoute() {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) return <p>Checking session...</p>;
  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}`,
    out: 'Smooth, flicker-free protected route guard for private MERN dashboards.',
    q1: ['Why is a React <ProtectedRoute> component by itself NOT sufficient for application security?', 'Frontend JavaScript runs in the user browser and can be bypassed or inspected. <ProtectedRoute> provides smooth UX, while real security requires your Express backend to verify authentication tokens (JWT/sessions) and user roles on every protected API endpoint.'],
  },
];

export const MERN_TAB5_BLUEPRINTS: Record<number, DsTopicBlueprint> =
  expandMernSpecs(TAB5_SPECS);
