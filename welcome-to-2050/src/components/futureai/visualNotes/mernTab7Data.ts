import { expandMernSpecs, type MernTopicSpec } from './fullStackMernHelper';
import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

const TAB7_SPECS: MernTopicSpec[] = [
  // ═══ CHAPTER 28: Introduction to Node.js (236..242) ═══
  {
    id: 236, mod: 28, tInMod: 1,
    title: 'What Node.js is',
    sub: 'JavaScript Runtime Built on Chrome V8 Powering Fast, Non-Blocking Backend Servers',
    coreEn: '==Node.js== is a cross-platform ==JavaScript runtime== (built on Chrome V8 + `libuv` event loop) that runs JS ==outside the browser==—powering fast REST APIs, real-time Socket.IO servers, CLI tools, and build tools like Vite!',
    coreHi: '==Node.js== ek ==JavaScript runtime== hai jo JS ko browser ke bahar server par chalata hai—non-blocking Event Loop ke karan ye fast REST APIs, real-time chat aur MERN backends ke liye super popular hai!',
    analogyTitle: 'Taking the Fast V8 Sports-Car Engine Out of Chrome & Putting It Into a Cloud Server',
    analogyEn: 'Node.js is NOT a programming language or framework—it is the **runtime environment** that executes your JavaScript + Express.js backend code 24/7!',
    analogyHi: 'Node.js koi nayi language nahi hai—ye wo **runtime** hai jo aapke JavaScript ko backend server par chalata hai!',
    steps: [['V8 Engine', 'Compiles JavaScript directly to super-fast machine code'], ['Non-Blocking I/O', 'Handles thousands of concurrent DB/API requests smoothly'], ['Single Language', 'Share JS skills, JSON & Zod schemas across Frontend + Backend'], ['Huge npm Registry', 'Over 2M+ reusable packages (`express`, `mongoose`, `bcrypt`)']],
    jobUse: 'Powers backends at Netflix, PayPal, Uber, LinkedIn, and thousands of MERN startups.',
    mistake: 'Calling Node.js a "programming language" or "framework" in an interview (it is a **JavaScript Runtime**!).',
    proHabit: 'Keep CPU-heavy blocking loops off the Node main thread—Node shines brightest at high-concurrency I/O (APIs, DBs, real-time)!',
    rule: 'Node.js = V8 JavaScript Runtime + Non-Blocking Event Loop for Scalable Backends.',
    code: `// server.js — Running JS directly on the server with Node.js
console.log('Node version:', process.version);
console.log('Server running on platform:', process.platform);`,
    out: 'JavaScript executing natively on your OS / cloud server.',
    q1: ['What is Node.js, and why is it especially well-suited for REST APIs and real-time chat apps?', 'Node.js is a server-side JavaScript runtime built on Chrome V8 and libuv. Its non-blocking, event-driven I/O architecture lets a single process efficiently handle thousands of concurrent database queries, HTTP requests, and WebSocket connections without spawning a heavy OS thread per user.'],
  },
  {
    id: 237, mod: 28, tInMod: 2,
    title: 'Browser JavaScript vs Node.js',
    sub: 'Same Core JS Language, Different Globals (`window`/`document` vs `process`/`fs`/`http`)',
    coreEn: 'Browser JS and Node.js share the ==exact same ES6+ language==, but expose ==different environments==: Browser gives ==`window`, `document`, `localStorage`, DOM==; Node.js gives ==`process`, `fs` (files), `path`, `http`, `process.env` (secrets), and direct MongoDB access==!',
    coreHi: 'Browser aur Node dono mein ==same JavaScript== chalti hai, par APIs alag hain: Browser mein ==`window`/`document`/DOM== hota hai, aur Node mein ==`process.env`, `fs` (files), `http` aur Database==!',
    analogyTitle: 'Same Pilot Flying a Passenger Plane (Browser) vs a Cargo Freighter (Node Server)',
    analogyEn: 'Calling `document.querySelector()` inside Node.js crashes (`ReferenceError: document is not defined`), and calling `fs.readFile()` inside Chrome crashes—know which side your code runs on!',
    analogyHi: 'Node mein `window`/`document` nahi hota aur Browser mein `fs`/`process.env` nahi hota—hamesha clear rakho code kis side chal raha hai!',
    steps: [['Shared Core', 'Variables, arrays, async/await, `fetch()`, `JSON`, Promises'], ['Browser Only', '`window`, `document`, DOM events, CSS, `localStorage`'], ['Node.js Only', '`process.env`, `fs`, `path`, `crypto`, Express, MongoDB'], ['Security Split', 'Secrets & DB credentials live 100% in Node.js ONLY!']],
    jobUse: 'Prevents classic SSR / MERN confusion and keeps secrets strictly server-side.',
    mistake: 'Trying to use `localStorage` inside an Express controller or `process.env.MONGO_URI` inside React!',
    proHabit: 'Keep clear mental walls: `client/` = Browser JS (public), `server/` = Node.js (private & trusted).',
    rule: 'Browser = UI & DOM (Public) | Node.js = Files, Secrets, APIs & Database (Private).',
    code: `// Node.js Environment Globals:
const PORT = process.env.PORT || 5000;
const cwd = process.cwd(); // Current server directory (no window/document!)`,
    out: 'Clean server-side runtime awareness.',
    q1: ['Name 3 APIs available in Browser JavaScript that do NOT exist in Node.js, and 3 available in Node.js that do NOT exist in the Browser.', 'Browser-only: window, document (DOM), and localStorage. Node.js-only: fs (file system access), process.env (server environment variables), and direct TCP/database sockets (like MongoDB drivers).'],
  },
  {
    id: 238, mod: 28, tInMod: 3,
    title: 'Installing Node.js and npm',
    sub: 'Installing Node LTS Safely, Verifying `node -v`/`npm -v` & Managing Versions With `nvm`',
    coreEn: 'Always install the ==Node.js LTS (Long-Term Support)== release (e.g., Node 20/22 LTS) which bundles ==`npm`== automatically—verify via `node -v` and `npm -v`, and use ==`nvm`== when switching Node versions across multiple projects!',
    coreHi: 'Hamesha ==Node.js LTS (Long-Term Support)== install karo (stable + production-safe!), `node -v` aur `npm -v` se verify karo, aur multiple projects ke liye `nvm` use karo!',
    analogyTitle: 'Choosing the Proven Commercial Airline Engine (LTS) Over an Experimental Prototype (Current)',
    analogyEn: 'Odd/Current Node versions break native npm packages frequently—every production cloud host (Render, Vercel, AWS) defaults to **even-numbered LTS versions (20.x, 22.x)**!',
    analogyHi: 'Production servers (Render, Vercel, AWS) hamesha **even-numbered LTS versions (20/22)** par chalte hain!',
    steps: [['Download LTS', 'Install even-numbered LTS release from nodejs.org'], ['Verify CLI', 'Run `node -v` & `npm -v` in a fresh terminal'], ['Pin Engines', 'Optional `"engines": { "node": ">=20" }` in `package.json`'], ['Use nvm Later', '`nvm use 22` switches Node versions per repo cleanly']],
    jobUse: 'Prevents frustrating native-module install errors across Windows, Mac, and CI servers.',
    mistake: 'Installing bleeding-edge unstable Node versions that break `bcrypt` or `mongoose` installs!',
    proHabit: 'Check `node -v` first whenever debugging strange npm install errors.',
    rule: 'Always Pick Even-Numbered Node LTS (20/22) -> Verify With node -v & npm -v.',
    code: `# Verify installation in terminal:
node -v   # e.g., v22.14.0 (LTS)
npm -v    # e.g., 10.9.2`,
    out: 'Stable, production-matched Node.js + npm runtime ready.',
    q1: ['Why should developers install the Node.js LTS (Long-Term Support) release instead of the "Current" release?', 'LTS releases (even numbers like 20 and 22) receive long-term stability and security patches and are supported by all major npm packages and cloud hosts, whereas Current releases introduce experimental changes that can break dependencies.'],
  },
  {
    id: 239, mod: 28, tInMod: 4,
    title: 'Running JavaScript files',
    sub: 'Executing `node index.js`, Auto-Restarting With Built-In `node --watch` & Interactive REPL',
    coreEn: 'Run any backend JS script via ==`node src/server.js`==, and during local development use Node built-in ==`node --watch src/server.js`== (or `nodemon`) so your Express server ==auto-restarts on every save== without manually pressing `Ctrl+C`!',
    coreHi: 'Backend file run karne ke liye ==`node src/server.js`== aur auto-restart ke liye modern built-in ==`node --watch src/server.js`== (ya `nodemon`) use karo—har save par server khud restart hoga!',
    analogyTitle: 'Auto-Restarting Kitchen Oven Every Time You Tweak the Recipe',
    analogyEn: 'Modern Node.js 18.11+ includes **`node --watch`** AND **`--env-file=.env`** natively—zero extra third-party dev tools required!',
    analogyHi: 'Modern Node.js mein **`node --watch`** built-in aata hai—ab alag `nodemon` install karne ki bhi zaroorat nahi!',
    steps: [['Run Script', '`node index.js` executes once & exits (or listens if server)'], ['Auto-Watch Dev', '`node --watch src/server.js` restarts cleanly on every save'], ['Add npm Script', '`"dev": "node --watch src/server.js"` in `package.json`'], ['Stop Server', 'Press `Ctrl+C` in terminal to shut down cleanly']],
    jobUse: 'Makes backend Express development feel just as snappy as Vite frontend HMR!',
    mistake: 'Editing `server.js`, saving, and forgetting to restart Node—then spending 15 minutes wondering why your fix did not work!',
    proHabit: 'Always run your backend via `npm run dev` (backed by `node --watch`) so every save takes effect immediately!',
    rule: 'Use node --watch via npm run dev -> Zero Stale-Server Debugging Confusion.',
    code: `// package.json scripts
{
  "type": "module",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js"
  }
}`,
    out: 'Instant auto-restarting Node.js development workflow.',
    q1: ['What does node --watch src/server.js do during backend development?', 'It watches your source files and automatically restarts the Node.js server whenever you save changes—eliminating the need to manually stop (Ctrl+C) and restart Node after every edit.'],
  },
  {
    id: 240, mod: 28, tInMod: 5,
    title: 'Node.js use cases',
    sub: 'Where Node.js Excels (REST APIs, Real-Time Chat, Microservices, BFF) vs CPU-Heavy Tasks',
    coreEn: 'Node.js excels at ==I/O-heavy applications==: ==REST/GraphQL APIs, Real-Time Chat & Notifications (Socket.IO), Streaming proxies, AI API orchestrators, and CLI tools==—while heavy CPU tasks (video encoding, ML training) belong in worker threads or Python/Go microservices.',
    coreHi: 'Node.js ==I/O-heavy apps== (REST APIs, Real-Time Chat, Streaming, AI API wrappers) mein zabardast fast hai—jabki heavy CPU tasks (video rendering, ML model training) Python/Worker Threads mein kiye jaate hain!',
    analogyTitle: 'World-Class Traffic Controller Directing 10,000 Cars Smoothly (Not Lifting Trucks by Hand!)',
    analogyEn: 'That is why MERN + AI apps pair **Node/Express** (fast auth, CRUD, real-time chat, AI streaming) seamlessly with Python/LLM APIs when heavy AI compute is needed!',
    analogyHi: 'Isliye modern AI apps mein **Node/Express** fast API + auth + streaming sambhalta hai aur heavy ML compute Python/AI APIs par chalta hai!',
    steps: [['REST & MERN APIs', 'Fast JSON CRUD talking to MongoDB/PostgreSQL'], ['Real-Time Apps', 'Live chat, notifications, collaborative boards (Socket.IO)'], ['AI Orchestration', 'Secure backend proxy streaming OpenAI/Gemini responses'], ['Know CPU Limit', 'Offload heavy image/video/ML math to workers or Python']],
    jobUse: 'Classic system-design & backend interview question ("When would you choose vs NOT choose Node.js?").',
    mistake: 'Running a synchronous 5-second CPU calculation inside an Express route (freezes ALL other users on that Node server!).',
    proHabit: 'Never block the Node.js Event Loop with synchronous crypto, huge sync file reads, or heavy CPU loops!',
    rule: 'Node.js = King of High-Concurrency I/O & Real-Time | Never Block the Event Loop.',
    code: `// GOOD (Non-blocking async I/O):
const data = await fs.promises.readFile('./config.json', 'utf8');
// BAD (Blocks every user on the server!):
// const data = fs.readFileSync('./huge-file.json', 'utf8');`,
    out: 'High-throughput, non-blocking backend design.',
    q1: ['Why is running heavy synchronous CPU computations directly inside an Express route handler dangerous in Node.js?', 'Because Node.js runs JavaScript on a single main Event Loop thread—a synchronous 3-second CPU loop blocks the entire server from handling ANY other incoming user requests until it finishes.'],
  },
  {
    id: 241, mod: 28, tInMod: 6,
    title: 'Creating a basic project',
    sub: 'Initializing a Clean ES-Module Backend (`npm init -y`, `"type": "module"`, `.gitignore`, `src/`)',
    coreEn: 'Initialize any clean Node/Express backend in 30 seconds: ==`mkdir server && cd server && npm init -y`==, set ==`"type": "module"`== in `package.json` for modern `import/export`, install `express` & `dotenv`, add ==`.gitignore`== (`node_modules/`, `.env`), and create `src/server.js`!',
    coreHi: '30 second mein clean backend setup: ==`npm init -y` -> `"type": "module"` -> `npm install express dotenv` -> `.gitignore` (`node_modules/`, `.env`) -> `src/server.js`==!',
    analogyTitle: 'Laying a Clean Concrete Foundation Before Building Your Backend Floors',
    analogyEn: 'Setting `"type": "module"` right on Minute 1 lets you write identical modern `import express from "express"` syntax across BOTH React AND Node.js!',
    analogyHi: '`"type": "module"` set karte hi Frontend React aur Backend Node dono mein exact same `import/export` syntax chalta hai!',
    steps: [['Init Package', '`npm init -y` creates `package.json`'], ['Enable ESM', 'Add `"type": "module"` to `package.json`'], ['Install Core', '`npm install express cors dotenv`'], ['Protect Repo', 'Create `.gitignore` ignoring `node_modules/` & `.env`']],
    jobUse: 'Your repeatable Day-1 starter recipe for every backend API and microservice.',
    mistake: 'Forgetting `"type": "module"` and hitting `SyntaxError: Cannot use import statement outside a module`!',
    proHabit: 'Always create `.gitignore` and `.env.example` right when running `npm init -y`!',
    rule: 'npm init -y + "type": "module" + .gitignore (.env, node_modules) = Clean Backend Start.',
    code: `mkdir server && cd server
npm init -y
npm pkg set type="module"
npm install express cors dotenv`,
    out: 'Modern, ES-Module-ready Node.js backend project initialized cleanly.',
    q1: ['What does setting "type": "module" inside package.json enable in Node.js?', 'It tells Node.js to treat .js files as modern ES Modules, allowing standard import/export syntax (matching frontend React) instead of legacy CommonJS require()/module.exports.'],
  },
  {
    id: 242, mod: 28, tInMod: 7,
    title: 'package.json overview',
    sub: 'Understanding `scripts`, `dependencies` vs `devDependencies`, Semantic Versioning (`^`) & Lockfiles',
    coreEn: '==`package.json`== is the manifest of every JS project: ==`scripts`== (`dev`, `start`, `build`), ==`dependencies`== (needed in production: `express`, `mongoose`), ==`devDependencies`== (local dev/test only: `eslint`, `vitest`), and ==SemVer (`MAJOR.MINOR.PATCH`, e.g., `^4.21.0`)==!',
    coreHi: '==`package.json`== project ka manifest hai: ==`scripts`== (`dev`, `start`), ==`dependencies`== (production ke liye: `express`, `mongoose`), ==`devDependencies`== (sirf dev/test ke liye) aur ==SemVer (`^4.21.0`)==!',
    analogyTitle: 'Ship Manifest Listing Every Passenger, Crew Tool & Exact Version Number',
    analogyEn: 'Remember SemVer: **`MAJOR`** = breaking changes (`5.0.0`), **`MINOR`** = backwards-compatible features (`4.21.0`), **`PATCH`** = bug fixes (`4.21.2`)—`^` allows safe minor/patch updates!',
    analogyHi: 'SemVer: `MAJOR` (breaking), `MINOR` (new feature), `PATCH` (bug fix) — `^` safe updates allow karta hai!',
    steps: [['dependencies', '`npm install express` — required to run in production'], ['devDependencies', '`npm install -D eslint` — only needed during development/CI'], ['scripts', 'Standard `"dev"`, `"start"`, `"build"`, `"test"` commands'], ['package-lock.json', 'Locks exact sub-dependency tree for deterministic installs']],
    jobUse: 'Required to configure Render, Vercel, Docker, and GitHub Actions smoothly.',
    mistake: 'Missing a `"start": "node src/server.js"` script when deploying to Render/Railway (cloud hosts run `npm start` by default!).',
    proHabit: 'Always include both `"dev"` (local watch) AND `"start"` (production `node src/server.js`) in every backend `package.json`!',
    rule: 'dependencies = Runtime | devDependencies = Dev/Test | Always Define dev & start Scripts.',
    code: `{
  "name": "mern-api",
  "type": "module",
  "scripts": { "dev": "node --watch src/server.js", "start": "node src/server.js" },
  "dependencies": { "express": "^4.21.0", "mongoose": "^8.9.0" },
  "devDependencies": { "eslint": "^9.0.0" }
}`,
    out: 'Clean, deployment-ready `package.json` manifest.',
    q1: ['What is the difference between dependencies and devDependencies in package.json?', 'dependencies are packages required for the application to run in production (like express, mongoose, bcrypt), whereas devDependencies are tools only needed during development, linting, or testing (like eslint, prettier, vitest).'],
  },

  // ═══ CHAPTER 29: Core Concepts of Node.js (243..250) ═══
  {
    id: 243, mod: 29, tInMod: 1,
    title: 'Modules and require/import',
    sub: 'Modern ES Modules (`import/export`) vs Legacy CommonJS (`require/module.exports`)',
    coreEn: 'Node.js supports two module systems: ==Modern ES Modules (`import/export`, enabled via `"type": "module"`)==—which is the unified standard across React & Node—and ==Legacy CommonJS (`const fs = require("fs"); module.exports = ...`)== still seen in older repos.',
    coreHi: 'Node.js mein 2 module systems hain: ==Modern ES Modules (`import/export` — React aur Node dono mein same!)== aur ==Legacy CommonJS (`require` / `module.exports`)== jo purane repos mein dikhta hai.',
    analogyTitle: 'Modern USB-C (ES Modules) vs Older USB-A (CommonJS)—Know Both, Build New Apps With USB-C!',
    analogyEn: 'Watch out in Node ES Modules: relative local imports MUST include the `.js` extension (`import userRoutes from "./routes/userRoutes.js"`)!',
    analogyHi: 'Node ES Modules mein local file import karte waqt `.js` extension (`./routes/user.js`) likhna zaroori hota hai!',
    steps: [['ESM (Preferred)', '`import express from "express"; export default router;`'], ['Include .js Ext', 'Node ESM requires `.js` on local relative file imports!'], ['Read Legacy CJS', '`const express = require("express"); module.exports = router;`'], ['Pick One Per Repo', 'Never randomly mix `require` and `import` in the same file']],
    jobUse: 'Lets you seamlessly work in both brand-new MERN repos (ESM) and older enterprise Node codebases (CommonJS).',
    mistake: 'Omitting `.js` in Node ESM (`import db from "./db"`) and hitting `ERR_MODULE_NOT_FOUND`!',
    proHabit: 'Use ES Modules (`"type": "module"`) in all new Node.js projects and always include `.js` on local relative imports.',
    rule: 'New Projects -> ES Modules (With .js Extensions) | Know CommonJS to Read Legacy Code.',
    code: `// Modern Node.js ES Module (with .js extension on local files!)
import express from 'express';
import { connectDB } from './config/db.js';`,
    out: 'Clean, error-free Node.js modular imports.',
    q1: ['What is a key difference between importing local files in Vite React vs native Node.js ES Modules?', 'Vite automatically resolves omitted extensions (import App from "./App"), whereas native Node.js ES Modules require explicit file extensions (import db from "./config/db.js") or throw ERR_MODULE_NOT_FOUND.'],
  },
  {
    id: 244, mod: 29, tInMod: 2,
    title: 'Built-in modules',
    sub: 'Zero-Install Core Node Modules (`node:fs`, `node:path`, `node:crypto`, `node:http`, `node:os`)',
    coreEn: 'Node.js ships with powerful ==zero-install Built-In Modules==—use the explicit ==`node:` prefix== (`import fs from "node:fs/promises"`, `import path from "node:path"`, `import crypto from "node:crypto"`) for faster resolution and security!',
    coreHi: 'Node.js ke saath powerful ==Built-In Modules== free aate hain (kuch install nahi karna!)—==`node:fs/promises`, `node:path`, `node:crypto`, `node:http`== ko `node:` prefix ke saath import karo!',
    analogyTitle: 'Built-In Swiss Army Knife Tools Already Inside Node Before Installing Any npm Package',
    analogyEn: 'Need a cryptographically secure random token for Password Reset emails? `crypto.randomBytes(32).toString("hex")` is built straight into `node:crypto` with ZERO npm installs!',
    analogyHi: 'Password Reset token chahiye? `node:crypto` mein `crypto.randomBytes(32).toString("hex")` built-in hai—zero npm install!',
    steps: [['node:fs/promises', 'Async reading/writing files cleanly with `await`'], ['node:path', 'Cross-platform safe file paths (Windows `\\` vs Linux `/`)'], ['node:crypto', 'Secure random tokens, UUIDs (`randomUUID`) & SHA-256 hashes'], ['node:http', 'Low-level HTTP server powering Express & Socket.IO']],
    jobUse: 'Reduces bloated dependencies and strengthens security.',
    mistake: 'Installing 3 tiny npm packages for UUIDs or random tokens when `node:crypto` already has them natively!',
    proHabit: 'Always use the explicit **`node:` prefix** (`import crypto from "node:crypto"`) so Node never confuses built-ins with npm packages!',
    rule: 'Use Built-In node:* Modules First Before Adding External npm Packages.',
    code: `import crypto from 'node:crypto';
const resetToken = crypto.randomBytes(32).toString('hex');
const id = crypto.randomUUID();`,
    out: 'Zero-dependency, cryptographically secure backend tokens.',
    q1: ['Why is importing Node built-ins with the node: prefix (e.g., import fs from "node:fs/promises") recommended?', 'The node: protocol explicitly tells Node.js to load the core built-in module directly—making intent crystal clear, speeding up resolution, and preventing accidental shadowing by a malicious or identically named npm package.'],
  },
  {
    id: 245, mod: 29, tInMod: 3,
    title: 'File system basics',
    sub: 'Non-Blocking Async File I/O With `node:fs/promises` (`readFile`, `writeFile`, `mkdir`)',
    coreEn: 'Read and write server files cleanly using ==`import fs from "node:fs/promises"`== (`await fs.readFile(p, "utf8")`, `await fs.writeFile(...)`, `await fs.mkdir(dir, { recursive: true })`)—NEVER use blocking `*Sync` methods inside Express request routes!',
    coreHi: 'Server par files read/write karne ke liye ==`node:fs/promises` (`await fs.readFile`, `await fs.writeFile`)== use karo—Express routes ke andar blocking `readFileSync` kabhi use mat karo!',
    analogyTitle: 'Async Filing Clerk Fetching Folders While Keeping the Front Counter Moving',
    analogyEn: 'Always pass `"utf8"` to `fs.readFile(path, "utf8")` when reading text/JSON—otherwise Node returns a raw binary `Buffer`!',
    analogyHi: 'Text/JSON file padhte waqt `"utf8"` zaroor pass karo warna Node raw binary `Buffer` return karta hai!',
    steps: [['Import Promises API', '`import fs from "node:fs/promises";`'], ['Read UTF-8 Text', '`const text = await fs.readFile(filePath, "utf8");`'], ['Safe Dir Create', '`await fs.mkdir(uploadDir, { recursive: true });`'], ['Avoid *Sync In APIs', 'Never block Express routes with `readFileSync`/`writeFileSync`']],
    jobUse: 'Powers CSV/PDF exports, local uploads, config loaders, and log archiving.',
    mistake: 'Using `fs.readFileSync()` inside a busy Express route or trusting user-supplied filenames directly (Path Traversal vulnerability!).',
    proHabit: 'Always sanitize/validate filenames with `path.basename()` so an attacker cannot pass `../../.env` to read server secrets!',
    rule: 'Always Use node:fs/promises (Async) + Never Trust Raw User Filenames.',
    code: `import fs from 'node:fs/promises';
await fs.mkdir('./uploads', { recursive: true });
await fs.writeFile('./uploads/log.txt', 'Server started\\n', 'utf8');
const content = await fs.readFile('./uploads/log.txt', 'utf8');`,
    out: 'Clean, non-blocking async file operations.',
    q1: ['What security vulnerability occurs if an Express route passes req.query.file directly into fs.readFile("./uploads/" + req.query.file)?', 'Path Traversal! An attacker can pass ?file=../../.env to escape the uploads folder and read your server secrets. Always validate filenames and strip directory segments using path.basename().'],
  },
  {
    id: 246, mod: 29, tInMod: 4,
    title: 'Path and URL modules',
    sub: 'Cross-Platform Safe Paths (`path.join`, `path.resolve`, `import.meta.url`) Across Windows & Linux',
    coreEn: 'Windows uses backslashes (`\\`) while Linux cloud servers use forward slashes (`/`)—ALWAYS build file paths with ==`path.join()` / `path.resolve()`== (and `fileURLToPath(import.meta.url)` in ESM) so your backend works identically on Windows laptops AND Linux servers!',
    coreHi: 'Windows mein `\\` aur Linux servers par `/` chalta hai—isliye paths ko string `+` se mat jodo, hamesha ==`path.join()` / `path.resolve()`== use karo taaki code har OS par bina error chale!',
    analogyTitle: 'Universal Travel Adapter Making Your Paths Work on Both Windows & Linux Automatically',
    analogyEn: 'In Node ES Modules, `__dirname` does not exist globally—use modern **`import.meta.dirname`** (Node 20.11+) or `path.dirname(fileURLToPath(import.meta.url))`!',
    analogyHi: 'Node ES Modules mein `__dirname` nahi hota—modern Node 20+ mein seedha **`import.meta.dirname`** ya `fileURLToPath(import.meta.url)` use karo!',
    steps: [['Join Safely', '`path.join(dir, "uploads", "avatar.webp")`'], ['Extract Parts', '`path.extname("a.pdf")` (`.pdf`), `path.basename(p)`'], ['ESM __dirname', '`const __dirname = import.meta.dirname;` (Node 20.11+)'], ['Parse URLs', '`new URL("https://api.shop.com/items?page=2").searchParams`']],
    jobUse: 'Essential for serving static builds, file uploads, and cross-platform team repos.',
    mistake: 'Concatenating `"uploads\\" + filename` (breaks on Linux Render/AWS servers immediately!).',
    proHabit: 'Use `path.join()` for EVERY file path and `new URL()` for cleanly parsing or building query strings!',
    rule: 'Never Hardcode Slashes -> Always Use path.join() & new URL().',
    code: `import path from 'node:path';
const distDir = path.join(import.meta.dirname, '..', 'client', 'dist');
const safeName = path.basename('../../secret.env'); // "secret.env" (safe!)`,
    out: '100% Windows + Mac + Linux compatible path handling.',
    q1: ['Why should you use path.join(dir, "public", "index.html") instead of dir + "/public/index.html"?', 'path.join() automatically normalizes duplicate slashes, resolves ".." segments cleanly, and uses the exact path separator required by the host operating system (Windows vs Linux/macOS).'],
  },
  {
    id: 247, mod: 29, tInMod: 5,
    title: 'Events and EventEmitter overview',
    sub: 'Node.js Event-Driven Pub/Sub Pattern Powering Streams, HTTP Servers & Socket.IO',
    coreEn: 'Much of Node.js core (`http.Server`, `fs.createReadStream`, `Socket.IO`) inherits from ==`EventEmitter` (`node:events`)==—letting parts of your app ==`.emit("orderCreated", order)`== while decoupled listeners ==`.on("orderCreated", sendEmail)`== react cleanly!',
    coreHi: 'Node.js ka poora core (`http`, Streams, Socket.IO) ==`EventEmitter`== par bana hai—ek part `.emit("orderCreated")` fire karta hai aur baaki listeners `.on("orderCreated")` par react karte hain!',
    analogyTitle: 'Office Intercom Announcing "New Order #42!" So Billing, Email & Analytics All React Independently',
    analogyEn: 'Always register an `.on("error", ...)` listener on custom EventEmitters—an unhandled `"error"` event in Node crashes the entire process!',
    analogyHi: 'Yaad rakho: EventEmitter par `"error"` event ka listener na ho toh Node process crash ho jata hai!',
    steps: [['Create Emitter', '`const bus = new EventEmitter();`'], ['Register Listener', '`bus.on("user:signup", sendWelcomeEmail);`'], ['Emit Event', '`bus.emit("user:signup", { email });`'], ['Handle Errors', 'Always attach `.on("error", handleErr)` & clean up `.off()`']],
    jobUse: 'Explains how Node streams, HTTP servers, Mongoose connections, and Socket.IO work under the hood.',
    mistake: 'Adding listeners inside a per-request handler without removing them (causes `MaxListenersExceededWarning` memory leak!).',
    proHabit: 'Use `.once()` for one-time startup events (like `db.once("open", ...)`) so listeners clean up automatically!',
    rule: 'emit() Announces -> on()/once() Reacts | Always Handle "error" Events.',
    code: `import { EventEmitter } from 'node:events';
const events = new EventEmitter();
events.on('order:paid', (id) => console.log('Sending receipt for order', id));
events.emit('order:paid', 1042);`,
    out: 'Clean, decoupled event-driven Node.js architecture.',
    q1: ['What happens in Node.js if an EventEmitter emits an "error" event and no error listener is attached?', 'Node.js treats an unhandled "error" event as an uncaught exception, prints a stack trace, and crashes the Node process. Always attach an .on("error", ...) handler.'],
  },
  {
    id: 248, mod: 29, tInMod: 6,
    title: 'npm packages',
    sub: 'Choosing Safe, Maintained Libraries (`express`, `mongoose`, `zod`, `bcrypt`, `helmet`) & `npm audit`',
    coreEn: 'Leverage the ==npm ecosystem== wisely: evaluate packages by ==weekly downloads, recent updates, and TypeScript/maintenance health==, install with `npm install` (prod) vs `npm install -D` (dev), and run ==`npm audit`== regularly to catch known security vulnerabilities!',
    coreHi: '==npm packages== smartly choose karo: install se pehle ==weekly downloads aur active maintenance== dekho, production vs dev (`-D`) alag rakho, aur security ke liye ==`npm audit`== chalao!',
    analogyTitle: 'Checking Expiry Dates & Reviews Before Adding Ingredients to Your Kitchen',
    analogyEn: 'Every npm package adds code (and potential supply-chain risk) to your app—do not install a library for a 3-line function you can write cleanly yourself!',
    analogyHi: '3 line ke simple helper ke liye alag npm package install mat karo—sirf trusted, well-maintained core packages rakho!',
    steps: [['Essential MERN Pack', '`express`, `mongoose`, `cors`, `dotenv`, `zod`, `bcryptjs`, `jsonwebtoken`, `helmet`'], ['Audit Security', 'Run `npm audit` to spot vulnerable dependencies'], ['Clean Uninstall', '`npm uninstall unused-pkg` keeps `package.json` lean'], ['CI Exact Install', 'Use `npm ci` in CI/CD for exact lockfile installs']],
    jobUse: 'Standard dependency hygiene expected on every production Node.js engineering team.',
    mistake: 'Installing abandoned 6-year-old packages with 50 downloads or committing `node_modules/`.',
    proHabit: 'Use `npm ci` in production/Docker builds so installs are faster and 100% locked to `package-lock.json`!',
    rule: 'Prefer Lean Trusted Packages + Run npm audit + Use npm ci in Production.',
    code: `# Core Production MERN Backend Dependencies:
npm install express mongoose cors dotenv zod bcryptjs jsonwebtoken helmet
npm audit`,
    out: 'Lean, secure, industry-standard MERN backend dependency stack.',
    q1: ['What is the difference between npm install and npm ci?', 'npm install can modify package-lock.json and resolve newer semver ranges, whereas npm ci performs a clean, faster install strictly matching package-lock.json without modifying it—making npm ci ideal for CI/CD and production builds.'],
  },
  {
    id: 249, mod: 29, tInMod: 7,
    title: 'Environment variables',
    sub: 'Managing Config & Secrets Safely Across Local `.env` vs Production Cloud Hosts',
    coreEn: 'Keep secrets and environment-specific settings (`PORT`, `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`) OUT of source code using ==`process.env`==—load local `.env` via ==`import "dotenv/config"`== (or `node --env-file=.env`), fail fast on startup if a required secret is missing, and NEVER commit `.env`!',
    coreHi: '`PORT`, `MONGO_URI`, `JWT_SECRET` jaise config aur secrets ko code se bahar ==`.env` + `process.env`== mein rakho—startup par required vars check karo aur `.env` kabhi Git par push mat karo!',
    analogyTitle: 'Swappable Config Cartridge Changing Dev Database -> Production Database Without Editing 1 Line of Code',
    analogyEn: 'Validating required env vars at server startup (`if (!process.env.JWT_SECRET) process.exit(1)`) catches missing production secrets in 1 second instead of crashing 3 hours later during a user login!',
    analogyHi: 'Server start hote hi check kar lo ki `MONGO_URI` aur `JWT_SECRET` set hain—missing secret turant startup par pakda jayega!',
    steps: [['Load Early', '`import "dotenv/config";` at Line 1 of `server.js`'], ['Validate Startup', 'Throw clear error immediately if `MONGO_URI`/`JWT_SECRET` missing'], ['Never Commit .env', 'Keep `.env` in `.gitignore`; commit safe `.env.example`'], ['Cloud Dashboard', 'Paste real production secrets into Render/Railway/AWS Env tab']],
    jobUse: 'Mandatory 12-Factor App principle tested in every backend & DevOps interview.',
    mistake: 'Writing `const secret = process.env.JWT_SECRET || "secret123"` (silent insecure fallback in production!).',
    proHabit: 'NEVER provide a weak hardcoded fallback for `JWT_SECRET` or `MONGO_URI`—fail loudly on startup if missing!',
    rule: 'Zero Hardcoded Secrets + Fail Fast on Missing Env Vars + .env Always Gitignored.',
    code: `import 'dotenv/config';

const required = ['MONGO_URI', 'JWT_SECRET'];
for (const key of required) {
  if (!process.env[key]) throw new Error(\`Missing required env var: \${key}\`);
}`,
    out: 'Fail-fast, 12-factor-compliant backend configuration.',
    q1: ['Why is writing const JWT_SECRET = process.env.JWT_SECRET || "dev_secret" dangerous in production?', 'If you forget to configure JWT_SECRET on your production cloud host, the server silently falls back to the publicly known string "dev_secret" in your Git repo—allowing anyone to forge admin JWT tokens! Always fail fast if a required secret is missing.'],
  },
  {
    id: 250, mod: 29, tInMod: 8,
    title: 'Asynchronous programming in Node.js',
    sub: 'Async/Await Across MongoDB, File I/O & External APIs + Catching Unhandled Rejections',
    coreEn: 'Every database query, external HTTP call, password hash (`bcrypt.hash`), and file read in Node.js is ==asynchronous==—use ==`async/await` + `try/catch`== cleanly, run independent queries concurrently with ==`Promise.all()`==, and keep the Event Loop unblocked!',
    coreHi: 'Node.js mein har MongoDB query, `bcrypt.hash`, file read aur API call ==asynchronous== hai—==`async/await` + `try/catch`== use karo aur independent DB queries ko ==`Promise.all()`== se parallel chalao!',
    analogyTitle: 'Chef Cooking Rice, Dal & Curry on 3 Burners Simultaneously (`Promise.all`) Instead of One-by-One',
    analogyEn: 'Fetching paginated items AND total count in parallel (`const [items, total] = await Promise.all([Product.find()..., Product.countDocuments()])`) makes your Express API 2x faster!',
    analogyHi: 'Paginated items aur total count ko `Promise.all()` se parallel query karne se API response 2x fast ho jata hai!',
    steps: [['Async Everything', 'Use `await` for Mongoose, `bcrypt`, `fs/promises` & `fetch`'], ['Parallel DB Queries', '`const [items, total] = await Promise.all([q1, q2]);`'], ['Forward Errors', 'In Express 4, catch async errors & pass to `next(err)`!'], ['Global Safety Net', 'Log `unhandledRejection` & shut down gracefully if fatal']],
    jobUse: 'Core backend performance & reliability skill for high-traffic Node/Express APIs.',
    mistake: 'In Express 4, forgetting `try/catch` inside an `async` route handler—causing unhandled Promise rejections that hang the request forever!',
    proHabit: 'Wrap Express 4 async controllers in `try/catch` calling `next(err)` (or upgrade to Express 5 which forwards async rejections automatically)!',
    rule: 'Async/Await + Promise.all for Parallel Queries + Always Forward Errors to next(err).',
    code: `export async function listProducts(req, res, next) {
  try {
    const [items, total] = await Promise.all([
      Product.find().limit(12).lean(),
      Product.countDocuments(),
    ]);
    res.json({ items, total });
  } catch (err) {
    next(err);
  }
}`,
    out: 'Fast, parallel, error-safe async Node.js controller.',
    q1: ['How does Promise.all() speed up a paginated MongoDB Express endpoint?', 'Instead of waiting sequentially for Product.find() to finish before starting Product.countDocuments(), Promise.all() dispatches both independent database queries concurrently—cutting total database wait time nearly in half.'],
  },

  // ═══ CHAPTER 30: Introduction to Express.js (251..257) ═══
  {
    id: 251, mod: 30, tInMod: 1,
    title: 'What Express.js is',
    sub: 'Minimal, Fast, Industry-Standard Web & REST API Framework for Node.js',
    coreEn: '==Express.js== is the lightweight, flexible ==web framework for Node.js== (the **"E"** in MERN!) that turns raw Node `http` boilerplate into clean ==Routing (`app.get`, `app.post`), Middleware Pipelines (`app.use`), JSON parsing, and Centralized Error Handling==!',
    coreHi: '==Express.js== Node.js ka sabse popular backend framework hai (MERN ka **"E"**!)—ye clean ==Routes (`app.get/post`), Middleware (`app.use`), JSON parsing aur Error Handling== ko super simple bana deta hai!',
    analogyTitle: 'Organized Highway Traffic Control Layer Built Over Raw Node.js Roads',
    analogyEn: 'With raw Node `http`, parsing JSON bodies, matching `/users/:id`, and handling CORS takes 80 messy lines; with Express.js it takes 5 crisp lines!',
    analogyHi: 'Raw Node `http` mein 80 lines ka kaam Express.js mein sirf 5 clean lines mein ho jata hai!',
    steps: [['Clean Routing', 'Map HTTP verbs + paths cleanly with `express.Router()`'], ['Middleware Stack', 'Plug in `cors()`, `helmet()`, `express.json()`, auth guards'], ['JSON Native', '`res.status(201).json(data)` sends formatted JSON effortlessly'], ['Modular Scaling', 'Split cleanly into `routes/`, `controllers/`, `models/`']],
    jobUse: 'Powers the backend of virtually every MERN stack job and thousands of Node microservices.',
    mistake: 'Putting all 40 API routes, DB schemas, and auth logic into one single 1,500-line `server.js` file!',
    proHabit: 'Keep `app.js` / `server.js` lean—mount feature routers (`app.use("/api/v1/tasks", taskRouter)`) cleanly!',
    rule: 'Express = Clean Routing + Composable Middleware + Modular Controllers.',
    code: `import express from 'express';
const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.listen(5000);`,
    out: 'Working Express.js REST API server in 5 lines.',
    q1: ['Why do MERN developers use Express.js on top of Node.js instead of Node built-in http module alone?', 'Express removes tedious low-level boilerplate by providing declarative HTTP routing, URL parameter extraction, composable middleware (CORS, JSON parsing, auth, rate limiting), clean response helpers (res.status().json()), and centralized error handling.'],
  },
  {
    id: 252, mod: 30, tInMod: 2,
    title: 'Creating an Express app',
    sub: 'Clean Entrypoint Separating `app.js` (Testable) From `server.js` (Port Listen + DB Connect)',
    coreEn: 'Structure your Express app cleanly: ==`src/app.js`== configures middleware (`helmet`, `cors`, `express.json()`), mounts routes, and attaches 404 + error handlers; ==`src/server.js`== connects to MongoDB FIRST, then calls `app.listen(PORT)`!',
    coreHi: 'Express app ko 2 clean files mein baanto: ==`src/app.js`== (middleware + routes + error handler — easily testable!) aur ==`src/server.js`== (pehle MongoDB connect karo, phir `app.listen(PORT)` chalao)!',
    analogyTitle: 'Testing a Car Engine on a Stand (`app.js`) Before Connecting It to the Wheels (`server.js`)',
    analogyEn: 'Connecting to MongoDB **BEFORE** calling `app.listen()` ensures your API never accepts traffic while the database is still down!',
    analogyHi: '`app.listen()` se pehle `await connectDB()` chalane se server kabhi bina database ke requests accept nahi karta!',
    steps: [['Health Endpoint', 'Add `GET /api/health` for uptime checks & Render health probes'], ['Global Middleware', '`helmet()`, `cors()`, `express.json({ limit: "1mb" })`'], ['Connect DB First', '`await connectDB()` -> then `app.listen(PORT)`'], ['Export app', 'Exporting `app` cleanly makes Supertest API testing trivial!']],
    jobUse: 'Production-ready Express boilerplate pattern used by senior Node.js teams.',
    mistake: 'Forgetting `app.use(express.json())` and wondering why `req.body` is always `undefined` on `POST` requests!',
    proHabit: 'Always add a payload size limit `app.use(express.json({ limit: "1mb" }))` to protect against giant payload DoS attacks!',
    rule: 'app.use(express.json({ limit: "1mb" })) + Connect DB First -> Then app.listen(PORT).',
    code: `// src/server.js
import 'dotenv/config';
import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;
await connectDB();
app.listen(PORT, () => console.log(\`API live on port \${PORT}\`));`,
    out: 'Clean, testable, DB-first Express server startup.',
    q1: ['Why is separating app.js (Express configuration) from server.js (calling app.listen) considered a best practice?', 'Exporting the configured Express app without calling app.listen() lets automated tests (like Supertest/Vitest) import and test every route cleanly without port conflicts, and keeps DB connection startup cleanly isolated.'],
  },
  {
    id: 253, mod: 30, tInMod: 3,
    title: 'Routes and HTTP methods',
    sub: 'Modular `express.Router()` Mapping `GET`, `POST`, `PATCH`, `DELETE` Cleanly by Resource',
    coreEn: 'Group related endpoints into ==`express.Router()`== modules (`routes/courseRoutes.js`) and mount them under a clean base prefix (`app.use("/api/courses", courseRoutes)`)—so each route file stays small, clean, and RESTful!',
    coreHi: 'Har resource ke liye alag ==`express.Router()`== file (`routes/courseRoutes.js`) banao aur `app.js` mein `app.use("/api/courses", courseRoutes)` par mount karo—clean aur scalable!',
    analogyTitle: 'Department Reception Desks: `/api/users` -> HR Desk, `/api/orders` -> Sales Desk',
    analogyEn: 'Remember **Route Order Matters**: always define static routes (`/users/me`) BEFORE dynamic param routes (`/users/:id`), otherwise `"me"` gets captured as `req.params.id`!',
    analogyHi: 'Yaad rakho: `/users/me` hamesha `/users/:id` ke UPAR likho, warna `"me"` ko `:id` pakad lega!',
    steps: [['Create Router', '`const router = express.Router();`'], ['Map CRUD Verbs', '`router.get("/", ...)`, `router.post("/", ...)`, `router.delete("/:id", ...)`'], ['Static Before Dynamic', 'Put `/me` or `/search` ABOVE `/:id`!'], ['Mount In app.js', '`app.use("/api/courses", courseRouter);`']],
    jobUse: 'Clean REST architecture across every Express API.',
    mistake: 'Putting `router.get("/:id", ...)` ABOVE `router.get("/stats", ...)` so `/stats` crashes trying to cast `"stats"` to a MongoDB ObjectId!',
    proHabit: 'Keep route files declarative (just path + middleware + controller reference)—put actual logic inside `controllers/`!',
    rule: '1 Resource = 1 express.Router() File | Always Put Static Paths Above :id Params.',
    code: `import { Router } from 'express';
import { getCourses, getCourseById, createCourse } from '../controllers/courseController.js';

const router = Router();
router.get('/', getCourses);
router.post('/', createCourse);
router.get('/:id', getCourseById);
export default router;`,
    out: 'Crisp, modular Express resource router.',
    q1: ['Why must router.get("/me", getMyProfile) be registered BEFORE router.get("/:id", getUserById) in Express?', 'Express matches routes top-to-bottom in registration order. If /:id comes first, a request to /me matches /:id with req.params.id = "me", never reaching the /me handler!'],
  },
  {
    id: 254, mod: 30, tInMod: 4,
    title: 'Request and response objects',
    sub: 'Mastering `req.params`, `req.query`, `req.body`, `req.headers` & `res.status().json()`',
    coreEn: 'Every Express handler receives ==`(req, res, next)`==: read incoming data from ==`req.params` (URL `:id`), `req.query` (`?page=2`), `req.body` (JSON POST payload), and `req.headers` (Auth token)==; send ONE response via ==`res.status(200).json(data)`==!',
    coreHi: 'Har Express handler mein ==`req`== se input aata hai (`req.params`, `req.query`, `req.body`, `req.headers`) aur ==`res`== se response jata hai (`res.status(201).json(data)`)—ek request par sirf EK hi response bhejna hota hai!',
    analogyTitle: 'Incoming Customer Order Ticket (`req`) & Outgoing Served Dish (`res`)',
    analogyEn: 'Calling `res.json()` twice in one handler crashes with **`ERR_HTTP_HEADERS_SENT`**—ALWAYS write **`return res.status(400).json(...)`** on early error returns!',
    analogyHi: 'Early error response par hamesha **`return res.status(400).json(...)`** likho—warna code aage chal kar 2nd response bhejega aur `ERR_HTTP_HEADERS_SENT` crash aayega!',
    steps: [['req.params', 'Dynamic URL segments (`/courses/:id` -> `req.params.id`)'], ['req.query', 'Query filters (`?page=2&limit=10` -> always strings!)'], ['req.body', 'Parsed JSON body (requires `express.json()` middleware)'], ['return res.status()', 'ALWAYS `return` on early responses so handler stops cleanly!']],
    jobUse: 'Used on literally every single Express endpoint you write.',
    mistake: 'Writing `if (!user) res.status(404).json({ error: "Not found" });` WITHOUT `return` (code keeps running and crashes trying to send a second response!).',
    proHabit: 'Make **`return res.status(...).json(...)`** pure muscle memory on every early exit!',
    rule: 'req = params/query/body/headers | Always Use "return res.status().json()" on Early Exits.',
    code: `export async function getTask(req, res, next) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    return res.status(200).json(task);
  } catch (err) {
    next(err);
  }
}`,
    out: 'Clean, zero-double-send Express controller.',
    q1: ['What causes the famous Express error "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"?', 'Attempting to send a second response for the same HTTP request—most commonly caused by forgetting the return keyword before an early res.status(400/404).json(...) so execution falls through and calls res.json() again.'],
  },
  {
    id: 255, mod: 30, tInMod: 5,
    title: 'Middleware basics',
    sub: 'The Heart of Express: `(req, res, next)` Pipeline for Logging, Auth, Validation & Parsing',
    coreEn: '==Middleware== is a function ==`(req, res, next)`== sitting between the incoming request and your final route handler—it can ==inspect/modify `req` (like attaching `req.user`), end the request early (`401 Unauthorized`), OR call `next()`== to pass control to the next step!',
    coreHi: '==Middleware== `(req, res, next)` Express ka dil hai—ye har request ko route tak pahunchne se pehle check/transform karta hai (JSON parsing, Auth JWT verify, Logging) aur kaam hone par ==`next()`== call karta hai!',
    analogyTitle: 'Airport Security Checkpoints: Ticket Check -> Bag Scan -> Passport Stamp -> Boarding Gate',
    analogyEn: 'If a middleware neither sends a `res` NOR calls `next()`, the request **hangs forever until the browser times out**!',
    analogyHi: 'Agar middleware na response bheje aur na `next()` call kare, toh request hamesha ke liye hang ho jati hai!',
    steps: [['3 Parameters', '`(req, res, next)` — normal middleware'], ['Attach Context', 'Auth middleware verifies JWT & sets `req.user = payload`'], ['Call next()', 'Passes control cleanly to the next middleware or route'], ['Route vs App Scope', '`app.use(fn)` runs globally | `router.post("/", auth, create)` per-route']],
    jobUse: 'Every production Express feature (auth, CORS, rate limiting, validation, logging) is middleware!',
    mistake: 'Forgetting to call `next()` inside a custom logging or auth middleware, hanging every API call!',
    proHabit: 'Keep each middleware tiny and focused on ONE concern (e.g., `requireAuth`, `requireAdmin`, `validateBody`).',
    rule: 'Middleware Either Ends Response (return res...) OR Calls next() — Never Hang!',
    code: `export function requestLogger(req, res, next) {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.originalUrl}\`);
  next(); // Must call next() so request continues!
}`,
    out: 'Clean, composable Express request logger middleware.',
    q1: ['What happens if an Express middleware function finishes running without calling res.send()/res.json() AND without calling next()?', 'The HTTP request hangs indefinitely with no response until the client or proxy hits a network timeout. Every middleware must either terminate the response or call next().'],
  },
  {
    id: 256, mod: 30, tInMod: 6,
    title: 'Serving static files',
    sub: 'Using `express.static()` Safely for Uploaded Assets or Built React `dist/` Bundles',
    coreEn: 'Serve static files (images, PDFs, or a compiled React `dist/` folder) directly from Express using ==`app.use("/uploads", express.static(path.join(import.meta.dirname, "../uploads")))`==—NEVER expose your project root (which contains `.env` and source code!) via `express.static(".")`!',
    coreHi: 'Express se images ya built React `dist/` serve karne ke liye ==`express.static()`== use karo—par ==KABHI poora project root `express.static(".")` mat expose karo== warna `.env` aur source code public ho jayega!',
    analogyTitle: 'Opening ONLY the Public Showroom Folder While Keeping the Back Office Locked',
    analogyEn: 'For production user uploads (avatars, PDFs), prefer cloud object storage (Cloudinary / AWS S3) over local server disk (Render free disks wipe on redeploy!).',
    analogyHi: 'Production mein user uploads (avatars/PDFs) ke liye Cloudinary ya S3 best hai kyunki cloud server disk redeploy par reset ho jati hai!',
    steps: [['Dedicated Folder', 'Serve ONLY a specific `public/` or `uploads/` subfolder'], ['Absolute Path', 'Use `path.join(import.meta.dirname, "../public")`'], ['Mount Prefix', '`app.use("/static", express.static(...))`'], ['SPA Serving', 'Optional: serve React `client/dist` + fallback `* -> index.html`']],
    jobUse: 'Useful for monolithic full-stack deployments and serving downloadable assets.',
    mistake: 'Writing `app.use(express.static("."))`—instantly exposing `package.json`, `.env`, and backend code to the public internet!',
    proHabit: 'Always pass an **explicit absolute path** to a dedicated public folder inside `express.static()`.',
    rule: 'Serve ONLY Dedicated public/dist Folder With path.join() — Never Project Root!',
    code: `import path from 'node:path';
app.use('/assets', express.static(path.join(import.meta.dirname, '..', 'public')));`,
    out: 'Safe, cross-platform static asset serving in Express.',
    q1: ['Why is app.use(express.static(".")) a severe security vulnerability?', 'It exposes the entire server root directory publicly over HTTP—allowing anyone to download your .env secrets, source code, and configuration files directly from their browser!'],
  },
  {
    id: 257, mod: 30, tInMod: 7,
    title: 'Error handling overview',
    sub: 'Express 4-Argument Error Middleware `(err, req, res, next)` & Catch-All 404 Handler',
    coreEn: 'Express recognizes a ==Central Error Handler== strictly by its ==4 parameters `(err, req, res, next)`== placed ==at the VERY BOTTOM of `app.js`== (after all routes!)—catching every `next(err)` in one clean spot so users get clean JSON errors instead of ugly HTML stack traces!',
    coreHi: 'Express ka ==Central Error Handler== hamesha ==4 parameters `(err, req, res, next)`== wala function hota hai jo `app.js` ke ==SABSE NICHE== lagta hai—saare `next(err)` errors ek jagah clean JSON mein handle hote hain!',
    analogyTitle: 'Central Customer-Care Desk Catching Every Problem Gracefully With Polite Uniform Replies',
    analogyEn: 'NEVER leak raw stack traces (`err.stack`) to production users—log full `err` on the server and return a clean `{ message }` JSON to the client!',
    analogyHi: 'Production mein kabhi raw `err.stack` client ko mat bhejo—server console mein log karo aur user ko clean `{ message }` bhejo!',
    steps: [['404 Handler First', 'After all routes: `app.use((req, res) => res.status(404).json(...))`'], ['4-Arg Error Handler', '`app.use((err, req, res, next) => { ... })` LAST in `app.js`!'], ['Pass Via next(err)', 'Controllers call `next(err)` inside `catch`'], ['Hide Prod Stack', 'Only include `stack` when `NODE_ENV !== "production"`']],
    jobUse: 'Required for every production-grade Express API.',
    mistake: 'Omitting the unused 4th `next` parameter (`(err, req, res) => ...`)—Express will NOT treat it as an error handler unless ALL 4 parameters are declared!',
    proHabit: 'Keep all 4 parameters `(err, req, res, _next)` AND always mount the error middleware LAST in `app.js`!',
    rule: '4 Params (err, req, res, next) + Mount LAST + Never Leak Stack Traces in Prod.',
    code: `// Placed at the VERY BOTTOM of app.js
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
app.use((err, req, res, _next) => {
  console.error(err);
  const status = err.statusCode || 500;
  res.status(status).json({ message: err.message || 'Internal server error' });
});`,
    out: 'Clean, consistent JSON error responses across the entire API.',
    q1: ['Why does an Express error-handling middleware stop working if you remove the unused 4th parameter "next"?', 'Express inspects Function.length (number of declared parameters) to distinguish error handlers (4 arguments: err, req, res, next) from normal middleware (3 arguments). Removing next causes Express to skip it during error forwarding!'],
  },

  // ═══ CHAPTER 31: Building APIs with Express.js (258..266) ═══
  {
    id: 258, mod: 31, tInMod: 1,
    title: 'REST API principles',
    sub: 'Stateless Client-Server Architecture, Resource-Based Nouns, HTTP Verbs & Uniform JSON',
    coreEn: '==REST (Representational State Transfer)== designs clean, predictable APIs around ==5 core principles==: ==1) Resource Nouns in URLs (`/api/courses`), 2) HTTP Verbs for Actions (`GET/POST/PATCH/DELETE`), 3) Stateless Requests (every request carries its own JWT), 4) Standard HTTP Status Codes, and 5) Consistent JSON==!',
    coreHi: '==REST API== ke 5 golden rules: ==1) URLs mein plural nouns (`/api/courses`), 2) Actions ke liye HTTP Verbs (`GET/POST/PATCH/DELETE`), 3) Stateless requests (har call mein JWT), 4) Sahi Status Codes, aur 5) Clean JSON==!',
    analogyTitle: 'Universal Restaurant Menu Protocol Every Frontend (Web, Android, iOS) Understands Instantly',
    analogyEn: 'Because REST APIs are decoupled and stateless, the exact same Express API seamlessly powers your React web app, a future Flutter/Android app, AND partner integrations!',
    analogyHi: 'Ek hi clean REST API aapki React website, Mobile App aur Partner integrations sabko ek saath power kar sakta hai!',
    steps: [['Plural Nouns', '`/api/products`, `/api/users` (NOT `/api/getAllProducts`!)'], ['Verbs = Actions', '`GET` read, `POST` create, `PATCH` update, `DELETE` remove'], ['Stateless Auth', 'Server does not depend on in-memory sessions across servers'], ['Predictable JSON', 'Consistent response & error shapes across every endpoint']],
    jobUse: 'Universal backend design standard tested in every Full-Stack & Backend interview!',
    mistake: 'Creating RPC-style verb URLs like `POST /api/deleteUserById` or `GET /api/createNewOrder`!',
    proHabit: 'Design your REST API contract (endpoints + JSON shapes) on 1 page BEFORE coding React or Express!',
    rule: 'Plural Noun URLs + HTTP Verbs + Stateless + Accurate Status Codes = Clean REST.',
    code: `// Clean RESTful Endpoint Design:
// GET    /api/tasks        -> List tasks (200)
// POST   /api/tasks        -> Create task (201)
// GET    /api/tasks/:id    -> Get single task (200 / 404)
// PATCH  /api/tasks/:id    -> Update task (200)
// DELETE /api/tasks/:id    -> Delete task (204)`,
    out: 'Textbook-clean, industry-standard REST API contract.',
    q1: ['What does "Stateless" mean in a REST API?', 'Each HTTP request from the client must contain all information needed for the server to understand and authenticate it (such as a JWT token in headers/cookies), so the server does not rely on storing client session state in local process memory—making horizontal scaling effortless.'],
  },
  {
    id: 259, mod: 31, tInMod: 2,
    title: 'Designing resource routes',
    sub: 'Clean Plural Nouns, Nested Sub-Resources (`/courses/:id/reviews`) & Controller Separation',
    coreEn: 'Design intuitive resource URLs: use ==lowercase plural nouns== (`/api/orders`), keep ==nesting max 2 levels deep (`/courses/:courseId/reviews`)==, use ==query strings for filter/sort/page (`/products?category=books&sort=-price`)==, and wire cleanly into dedicated controllers!',
    coreHi: 'Clean routes design karo: ==lowercase plural nouns (`/api/orders`)==, ==max 2 levels nesting (`/courses/:id/reviews`)==, aur filtering/sorting ke liye ==query params (`?sort=-price`)==!',
    analogyTitle: 'Clean Library Shelf Numbers Guiding Any Developer to the Right Endpoint Without Guessing',
    analogyEn: 'A fellow developer should be able to guess your endpoint URL without even opening the docs—that is the mark of great REST design!',
    analogyHi: 'Achhe REST routes itne intuitive hote hain ki doosra developer bina docs dekhe endpoint guess kar leta hai!',
    steps: [['Plural Lowercase', '`/api/users`, `/api/blog-posts` (kebab-case for 2 words)'], ['Max 2-Level Nest', '`/courses/:id/lessons` (never 5 levels deep!)'], ['Filter Via Query', '`/courses?level=beginner&page=2&limit=10`'], ['Thin Route Files', 'Routes map URL -> Middleware -> Controller only']],
    jobUse: 'Keeps growing 50-endpoint MERN backends organized and self-documenting.',
    mistake: 'Mixing singular and plural (`/api/user`, `/api/products`, `/api/GetOrder`) across the same API!',
    proHabit: 'Pick one consistent convention (plural lowercase kebab-case + `/api/v1/` prefix) across the whole backend.',
    rule: 'Plural Kebab-Case Nouns + Max 2-Level Nesting + Query Params for Filtering.',
    code: `// Clean nested sub-resource route:
router.get('/:courseId/reviews', getCourseReviews);
router.post('/:courseId/reviews', requireAuth, addCourseReview);`,
    out: 'Intuitive, consistent, scalable resource URL hierarchy.',
    q1: ['Why should you avoid nesting REST URLs more than 2 levels deep (e.g., /orgs/:o/teams/:t/projects/:p/tasks/:id)?', 'Deeply nested URLs become brittle, verbose, and tightly coupled to hierarchy changes. Once an item has its own unique ID, expose a clean top-level endpoint like /api/tasks/:id instead.'],
  },
  {
    id: 260, mod: 31, tInMod: 3,
    title: 'GET and POST endpoints',
    sub: 'Reading Collections/Items (`200`) & Creating Validated Resources (`201 Created`)',
    coreEn: '==`GET`== endpoints are ==safe & read-only== (never mutate DB on a GET!), returning `200 OK` (or `404` if `:id` missing), while ==`POST`== endpoints ==validate `req.body`, create a new DB record, and return `201 Created`== with the saved resource!',
    coreHi: '==`GET`== hamesha ==read-only== hota hai (`200 OK` / `404`), aur ==`POST`== `req.body` validate karke naya record banata hai aur ==`201 Created`== status ke saath saved object return karta hai!',
    analogyTitle: 'Browsing the Menu (`GET`) vs Submitting a Brand-New Order (`POST` -> `201 Created`)',
    analogyEn: 'Always pick ONLY explicit whitelisted fields (`const { title, price } = req.body`) when creating records—NEVER pass raw `Model.create(req.body)` directly (prevents Mass Assignment hacks like injecting `role: "admin"`!)!',
    analogyHi: 'Kabhi `User.create(req.body)` mat likho (hacker `role: "admin"` bhej sakta hai!)—hamesha sirf allowed fields `{ name, email }` pick karo!',
    steps: [['GET List', 'Return `{ items, total, page }` with `200 OK`'], ['GET Single', 'Find by ID -> `404` if missing, `200` if found'], ['POST Create', 'Validate & whitelist fields -> save -> return `201 Created`'], ['Prevent Mass Assign', 'Never blindly spread `req.body` into DB `.create()`!']],
    jobUse: 'Prevents Mass Assignment security flaws while delivering clean CRUD APIs.',
    mistake: 'Writing `await User.create(req.body)` so an attacker registers with `{ email, password, role: "admin" }` and becomes instant Admin!',
    proHabit: 'Always explicitly destructure ONLY allowed fields (`const { title, description } = validatedData`) before DB insert!',
    rule: 'GET = Read-Only (200) | POST = Validate + Whitelist Fields -> 201 Created.',
    code: `export async function createTask(req, res, next) {
  try {
    const { title, priority = 'medium' } = req.body;
    if (!title?.trim()) return res.status(400).json({ message: 'Title is required' });
    const task = await Task.create({ title: title.trim(), priority, owner: req.user.id });
    return res.status(201).json(task);
  } catch (err) { next(err); }
}`,
    out: 'Secure, mass-assignment-proof POST endpoint returning `201 Created`.',
    q1: ['What is a Mass Assignment vulnerability in an Express POST endpoint, and how do you prevent it?', 'Mass Assignment happens when you pass raw req.body directly to Model.create(req.body), letting an attacker inject unauthorized fields like role: "admin" or isPaid: true. Prevent it by explicitly whitelisting allowed fields via Zod/destructuring.'],
  },
  {
    id: 261, mod: 31, tInMod: 4,
    title: 'PUT, PATCH, and DELETE endpoints',
    sub: 'Partial Updates (`PATCH`), Full Replacement (`PUT`), Safe Deletes (`DELETE`) & Ownership Checks',
    coreEn: 'Use ==`PATCH /:id`== for ==partial updates== (e.g., toggling `{ completed: true }`), ==`PUT /:id`== for ==full replacement==, and ==`DELETE /:id`== (returning `204 No Content` or `200`)—and ALWAYS verify ==Ownership (`task.owner === req.user.id`)== so User A can NEVER edit or delete User B data (IDOR protection)!',
    coreHi: 'Partial update ke liye ==`PATCH`==, full replace ke liye ==`PUT`== aur delete ke liye ==`DELETE`== use karo—aur hamesha ==Ownership check (`task.owner === req.user.id`)== lagao taaki koi doosre user ka data delete na kar sake!',
    analogyTitle: 'Checking Your Locker Key Matches Locker #42 Before Letting You Edit or Empty It',
    analogyEn: 'In Mongoose, use `findOneAndUpdate({ _id: id, owner: req.user.id }, updates, { new: true, runValidators: true })`—combining lookup + ownership check + validation in ONE atomic DB call!',
    analogyHi: '`findOneAndUpdate({ _id: id, owner: req.user.id }, ...)` ek hi query mein ID, Ownership aur Validation teeno verify kar leta hai!',
    steps: [['PATCH Partial', 'Whitelist editable fields + `{ new: true, runValidators: true }`'], ['Ownership Check', 'Query `{ _id: id, owner: req.user.id }` to block IDOR attacks!'], ['DELETE Cleanly', '`findOneAndDelete({ _id: id, owner: req.user.id })` -> `204`'], ['Return 404 If Miss', 'Return `404` when record does not exist or belongs to someone else']],
    jobUse: 'Prevents IDOR (Insecure Direct Object Reference)—the #1 OWASP API security flaw!',
    mistake: 'Deleting by `Task.findByIdAndDelete(req.params.id)` without checking if the logged-in user actually OWNS that task!',
    proHabit: 'Always scope update/delete queries by BOTH `_id` AND `owner: req.user.id` (unless `req.user.role === "admin"`)!',
    rule: 'PATCH = Partial Update | Always Enforce Ownership (Block IDOR!) + runValidators: true.',
    code: `export async function deleteTask(req, res, next) {
  try {
    const deleted = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    return res.status(204).send();
  } catch (err) { next(err); }
}`,
    out: 'IDOR-proof, atomic DELETE endpoint returning clean `204 No Content`.',
    q1: ['What is an IDOR (Insecure Direct Object Reference) vulnerability in a DELETE or PATCH endpoint, and how do you fix it?', 'IDOR occurs when an API updates or deletes a record using only req.params.id without verifying that the authenticated user owns that record—allowing any logged-in user to delete another user data by guessing IDs. Fix it by scoping the query with { _id: req.params.id, owner: req.user.id }.'],
  },
  {
    id: 262, mod: 31, tInMod: 5,
    title: 'Request parameters and query strings',
    sub: 'Parsing & Sanitizing `req.params.id`, Pagination (`?page=2&limit=12`) & Whitelisted Sorting',
    coreEn: 'Remember ==`req.query` values are ALWAYS strings==—parse and clamp pagination safely (`const page = Math.max(1, Number(req.query.page) || 1); const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 12));`) so an attacker cannot request `?limit=1000000` and crash MongoDB!',
    coreHi: '==`req.query` hamesha strings deta hai==—pagination ko safely clamp karo (`limit` max `50` cap karo!) taaki koi `?limit=999999` bhej kar aapka server crash na kar sake!',
    analogyTitle: 'Capping Free Samples at Max 50 Per Request So Nobody Empties the Warehouse in 1 Call',
    analogyEn: 'Also whitelist allowed `sort` fields (`["createdAt", "-price", "price"]`) so attackers cannot inject arbitrary internal fields!',
    analogyHi: '`sort` aur `limit` dono ko whitelist aur cap karne se API fast aur 100% secure rehta hai!',
    steps: [['Validate :id', 'Check `mongoose.isValidObjectId(req.params.id)` -> `400` if bad!'], ['Clamp Pagination', '`page >= 1`, `limit` clamped between `1` and `50`'], ['Calculate skip', '`const skip = (page - 1) * limit;`'], ['Whitelist Sort', 'Allow only known safe sort fields (`price`, `-createdAt`)']],
    jobUse: 'Protects production APIs from accidental or malicious full-database dumps.',
    mistake: 'Passing `Number(req.query.limit)` directly without a max cap (`Math.min(50, ...)`)!',
    proHabit: 'Always validate `isValidObjectId(id)` and cap `limit` at `50` (or `100`) on every paginated list endpoint!',
    rule: 'Validate ObjectId + Clamp page/limit (Max 50) + Whitelist Sort Fields.',
    code: `const page  = Math.max(1, Number(req.query.page) || 1);
const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 12));
const skip  = (page - 1) * limit;`,
    out: 'Crash-proof, bounded server-side pagination parameters.',
    q1: ['Why should an Express paginated endpoint always cap req.query.limit with Math.min(50, ...)?', 'Without an upper bound, a user or scraper can send ?limit=1000000, forcing MongoDB and Node.js to load the entire collection into memory at once—causing out-of-memory crashes or Denial of Service.'],
  },
  {
    id: 263, mod: 31, tInMod: 6,
    title: 'Request body validation',
    sub: 'Zero-Trust Input Validation Middleware Using `Zod` Returning Clean Field-Level `400` Errors',
    coreEn: 'Treat EVERY incoming `req.body` as untrusted! Write a reusable ==Zod Validation Middleware (`validate(createTaskSchema)`)== that checks types, lengths, emails, and enums BEFORE your controller runs—returning clean `400 Bad Request` errors and stripping unknown fields!',
    coreHi: 'Har incoming `req.body` untrusted hai—reusable ==Zod Validation Middleware== lagao jo controller chalne se pehle types, emails aur lengths check kare aur invalid data par clean `400` JSON error de!',
    analogyTitle: 'Bouncer Checking Exact Dress Code & Ticket Validity Before Anyone Enters the Club',
    analogyEn: 'Zod `schema.safeParse(req.body)` automatically strips any extra injected fields (like `role: "admin"`)—giving you validation + Mass Assignment protection in ONE step!',
    analogyHi: 'Zod `safeParse()` invalid data rokta hai AUR extra hacker fields (`role: "admin"`) ko khud strip kar deta hai!',
    steps: [['Define Schema', '`const taskSchema = z.object({ title: z.string().min(2).max(120) });`'], ['Reusable Middleware', '`validate(schema)` runs `schema.safeParse(req.body)`'], ['Clean 400 Error', 'Return `400` with clear `fieldErrors` JSON'], ['Replace req.body', '`req.body = result.data;` (100% clean, stripped & typed!)']],
    jobUse: 'Gold-standard production Node/Express engineering practice.',
    mistake: 'Relying only on frontend React validation (anyone can send invalid JSON directly via `curl` or Postman!).',
    proHabit: 'Never write repetitive `if (!req.body.x)` checks in 30 controllers—use a single reusable `validate(zodSchema)` middleware!',
    rule: 'Validate Every POST/PATCH Body With Zod Middleware -> Strip Unknown Fields -> Clean 400.',
    code: `export const validate = (schema) => (req, res, next) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Validation failed', errors: parsed.error.flatten().fieldErrors });
  }
  req.body = parsed.data;
  next();
};`,
    out: 'Reusable, clean, mass-assignment-proof Express validation middleware.',
    q1: ['How does assigning req.body = parsed.data after Zod validation improve backend security?', 'By default Zod strips any unrecognized keys not defined in the schema, guaranteeing that only explicitly whitelisted, validated fields reach your controller and MongoDB database.'],
  },
  {
    id: 264, mod: 31, tInMod: 7,
    title: 'Consistent JSON responses',
    sub: 'Standardized Envelope Shapes for Success (`{ data, meta }`) & Errors (`{ message, errors }`)',
    coreEn: 'Make your API a joy for React/Mobile developers to consume by returning ==100% consistent JSON structures== across every route: uniform ==Success shapes (`{ data, meta }`)== and uniform ==Error shapes (`{ message, code, errors }`)==!',
    coreHi: 'Apne API ke har endpoint par ==consistent JSON format== rakho—success mein `{ data, meta }` aur errors mein hamesha `{ message, errors }` taaki frontend ko alag-alag formats na jhelne padein!',
    analogyTitle: 'Every Parcel Arriving With the Exact Same Printed Label Layout',
    analogyEn: 'If Route 1 returns `{ error: "Bad" }`, Route 2 returns `{ msg: "Oops" }`, and Route 3 returns plain text `"Fail"`, frontend error handling becomes a nightmare—standardize `{ message }` everywhere!',
    analogyHi: 'Agar ek route `{ error }` aur doosra `{ msg }` bheje toh React code ganda ho jata hai—har jagah `{ message }` standardize karo!',
    steps: [['Uniform Error Shape', 'Always `{ message: "...", errors?: {...} }`'], ['Uniform List Shape', '`{ items: [...], page, limit, total, totalPages }`'], ['Strip Secrets', 'Never include `passwordHash` or internal `__v` noise'], ['Proper Headers', 'Always use `res.json(...)` so `Content-Type: application/json` is set']],
    jobUse: 'Makes frontend-backend collaboration seamless across teams.',
    mistake: 'Returning `res.send("Error!")` (plain text) on some routes and `res.json({ msg })` on others (breaks `await res.json()` on React!).',
    proHabit: 'Build a tiny `AppError(message, statusCode)` class so every controller throws uniform, clean JSON errors!',
    rule: '1 Consistent Success Shape + 1 Consistent Error Shape ({ message }) Across All Routes.',
    code: `// Consistent API Response Shapes:
// Success List: { items: [...], page: 1, totalPages: 4, total: 42 }
// Error (400):  { message: "Validation failed", errors: { email: ["Invalid email"] } }`,
    out: 'Predictable, frontend-friendly REST API contract.',
    q1: ['Why does sending plain text with res.status(500).send("Error") on one Express route break frontend API clients?', 'Frontend fetch helpers typically call await res.json() expecting a consistent JSON error object like { message: "..." }. Receiving plain text causes a JSON SyntaxError and hides the real error message.'],
  },
  {
    id: 265, mod: 31, tInMod: 8,
    title: 'Status codes',
    sub: 'Returning Exact Semantic HTTP Codes (`200`, `201`, `204`, `400`, `401`, `403`, `404`, `409`, `429`, `500`)',
    coreEn: 'Pair every Express JSON response with its ==exact HTTP status code==: `200` OK, `201` Created, `204` Deleted, `400` Validation Error, `401` Login Required, `403` Forbidden, `404` Not Found, `409` Duplicate Email Conflict, `429` Rate Limited, `500` Server Error!',
    coreHi: 'Har Express response par ==exact HTTP Status Code== bhejo: `200` OK, `201` Created, `204` Deleted, `400` Invalid Input, `401` Unauth, `403` Forbidden, `404` Not Found, `409` Duplicate, `429` Rate Limit, `500` Server Error!',
    analogyTitle: 'Color-Coded Traffic Signals Telling Browsers, Caches & Clients Exactly What Happened',
    analogyEn: 'Returning `409 Conflict` when someone registers an already-taken email lets React show a tailored `"Account already exists — Log in instead?"` prompt!',
    analogyHi: 'Duplicate email par `409 Conflict` bhejne se React turant smart `"Email already registered — Login karein?"` message dikha sakta hai!',
    steps: [['Create -> 201', '`res.status(201).json(created)` on `POST`'], ['Delete -> 204', '`res.status(204).send()` on `DELETE`'], ['Duplicate -> 409', 'MongoDB `err.code === 11000` -> `409 Conflict`'], ['Rate Limit -> 429', '`429 Too Many Requests` stops brute-force logins']],
    jobUse: 'Essential for clean APIs, monitoring alerts, and automated testing.',
    mistake: 'Returning `500 Internal Server Error` when a user simply submits an invalid email (should be `400 Bad Request`!).',
    proHabit: 'Map Mongoose duplicate-key (`11000`) -> `409` and invalid ObjectId (`CastError`) -> `400` in your central error handler!',
    rule: '4xx = Client Can Fix It | 5xx = Server Bug That Needs Engineer Attention.',
    code: `// Central Error Mapping:
if (err.code === 11000) return res.status(409).json({ message: 'Email already exists' });
if (err.name === 'CastError') return res.status(400).json({ message: 'Invalid ID format' });`,
    out: 'Semantic, self-explanatory HTTP status handling.',
    q1: ['What HTTP status code should your Express API return when a user tries to sign up with an email address that already exists in MongoDB?', '409 Conflict (with a clear JSON message like { message: "An account with this email already exists" }).'],
  },
  {
    id: 266, mod: 31, tInMod: 9,
    title: 'Testing APIs with Postman or similar tools',
    sub: 'Testing Every Endpoint (Happy Path + Invalid + Unauthorized) Using Thunder Client / Postman',
    coreEn: 'Test every Express route independently BEFORE connecting React using ==Thunder Client (inside VS Code) or Postman==: save a ==Collection with `{{baseUrl}}` & `{{token}}` environment variables== and test ==Happy Path (`200/201`), Bad Input (`400`), Unauth (`401`), and Missing ID (`404`)==!',
    coreHi: 'React jodne se pehle har Express route ko ==Thunder Client (VS Code) ya Postman== mein test karo: `{{baseUrl}}` aur `{{token}}` variables ke saath ==200/201, 400, 401 aur 404== saare cases verify karo!',
    analogyTitle: 'Testing Every Pipe Under Water Pressure Before Closing Up the Drywall',
    analogyEn: 'Testing your Express API in Thunder Client first proves 100% that the backend works cleanly—so when you connect React, you isolate any bug in 5 seconds!',
    analogyHi: 'Pehle Thunder Client mein API verify kar lene se React integration mein 90% confusion khatam ho jata hai!',
    steps: [['Use Env Vars', 'Set `baseUrl = http://localhost:5000` & `token` variable'], ['Test CRUD Flow', 'Register -> Login (copy JWT) -> POST -> GET -> PATCH -> DELETE'], ['Test Failure Cases', 'Send missing fields (`400`), no token (`401`), bad ID (`400/404`)'], ['Save Collection', 'Keep tests organized by folder for quick regression checks']],
    jobUse: 'Daily backend workflow across all engineering teams.',
    mistake: 'Testing ONLY the happy path (`200 OK`) and discovering in production that missing fields crash the server with `500`!',
    proHabit: 'Test at least **1 Happy Case + 2 Failure Cases (`400` bad input & `401` missing token)** on every single endpoint you write!',
    rule: 'Test Backend Independently First -> Verify Both Happy (2xx) & Error (4xx) Paths.',
    code: `# Quick Terminal Alternative (curl) for Health & POST:
curl http://localhost:5000/api/health
curl -X POST http://localhost:5000/api/tasks \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Test API"}'`,
    out: 'Battle-tested Express API verified before frontend integration.',
    q1: ['Why should you test every new Express API endpoint in Postman or Thunder Client BEFORE building the React UI for it?', 'It verifies your backend routing, validation, auth middleware, and MongoDB queries in complete isolation—so if something fails later in React, you immediately know it is a frontend or CORS issue rather than a broken backend.'],
  },

  // ═══ CHAPTER 32: Advanced Express.js Concepts (267..275) ═══
  {
    id: 267, mod: 32, tInMod: 1,
    title: 'Middleware order and composition',
    sub: 'Exact Execution Sequence: Security -> CORS -> Logger -> Body Parser -> Routes -> 404 -> Error Handler',
    coreEn: 'Express executes middleware ==strictly top-to-bottom==—order matters critically! Follow the ==golden production stack==: ==1) `helmet()` -> 2) `cors()` -> 3) Logger -> 4) `express.json()` -> 5) Rate Limiter -> 6) Feature Routes (with per-route `requireAuth` + `validate`) -> 7) 404 -> 8) 4-Arg Error Handler==!',
    coreHi: 'Express mein middleware ==strictly top-to-bottom== chalta hai! Golden order: ==`helmet` -> `cors` -> logger -> `express.json` -> rateLimit -> routes -> 404 -> 4-Arg Error Handler (SABSE NICHE)==!',
    analogyTitle: 'Assembly Line Stations: Wash -> Paint -> Dry -> Inspect (Reversing Order Ruins Everything!)',
    analogyEn: 'Mounting routes BEFORE `app.use(express.json())` leaves `req.body` completely `undefined`; mounting `404` ABOVE routes breaks EVERY endpoint!',
    analogyHi: 'Routes ko `express.json()` ke upar lagaya toh `req.body` `undefined` aayega; `404` upar lagaya toh poora API 404 dega!',
    steps: [['1. Security & CORS', '`helmet()`, `cors({ origin })` at the very top'], ['2. Parse & Log', '`express.json({ limit: "1mb" })` + request logger'], ['3. Routes + Guards', '`router.post("/", requireAuth, validate(schema), create)`'], ['4. 404 & Error LAST', 'Catch-all 404 followed by `(err, req, res, next)` at bottom']],
    jobUse: 'Prevents the most common Express configuration bugs in production.',
    mistake: 'Registering `app.use(errorHandler)` near the top of `app.js` BEFORE routes (it will NEVER catch route errors!).',
    proHabit: 'Compose per-route middleware left-to-right: `router.delete("/:id", requireAuth, requireAdmin, deleteItem)`!',
    rule: 'Top: Security/CORS/Parser -> Middle: Routes -> Bottom: 404 -> Error Handler.',
    code: `app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use('/api/v1/tasks', taskRoutes);
app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use(errorHandler);`,
    out: 'Textbook-clean, rock-solid Express middleware pipeline.',
    q1: ['What happens if you place app.use(express.json()) AFTER app.use("/api/tasks", taskRoutes) in Express?', 'Incoming POST requests hit taskRoutes before the JSON body parser runs, so req.body will be undefined inside every route handler!'],
  },
  {
    id: 268, mod: 32, tInMod: 2,
    title: 'Centralized error handling',
    sub: 'Custom `AppError` Class, `asyncHandler` Wrapper & Mapping Mongoose/JWT Errors Cleanly',
    coreEn: 'Eliminate repetitive error formatting across 40 controllers by creating a tiny ==`AppError(message, statusCode)`== class + ==`asyncHandler(fn)`== wrapper feeding ==ONE central `errorHandler`== that maps Mongoose `ValidationError`, `CastError`, duplicate `11000`, and `JsonWebTokenError` cleanly!',
    coreHi: '40 controllers mein same error code repeat mat karo—ek ==`AppError` class== + ==`asyncHandler` wrapper== + ==Central Error Handler== banao jo Mongoose, JWT aur custom errors ko clean JSON mein convert kare!',
    analogyTitle: 'Single Hospital ER Triage Turning Every Injury Code Into Clear Actionable Care',
    analogyEn: 'With `asyncHandler`, your controllers need zero repetitive `try/catch` boilerplate—just `throw new AppError("Course not found", 404)` and the central handler takes care of the rest!',
    analogyHi: '`asyncHandler` + `AppError` se controller mein bas `throw new AppError("Not found", 404)` likho—baaki sab central handler sambhal leta hai!',
    steps: [['AppError Class', '`class AppError extends Error { constructor(msg, code) ... }`'], ['asyncHandler', '`const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);`'], ['Map Known Errors', '`CastError` -> 400 | `11000` -> 409 | `TokenExpiredError` -> 401'], ['Safe Prod Output', 'Hide raw internal stack traces in production']],
    jobUse: 'Hallmark of clean, senior-engineered Node/Express codebases.',
    mistake: 'Copy-pasting 15-line `catch (err) { if (err.code === 11000)... }` blocks into 30 separate controllers!',
    proHabit: 'Keep `src/utils/AppError.js` and `src/middleware/errorHandler.js` in every Express starter repo.',
    rule: 'throw new AppError(msg, code) -> asyncHandler -> 1 Central errorHandler.',
    code: `export class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);`,
    out: 'Ultra-clean, zero-boilerplate Express error architecture.',
    q1: ['How does an asyncHandler wrapper simplify Express 4 async route controllers?', 'In Express 4, rejected Promises inside async controllers are not automatically caught. asyncHandler wraps the controller and attaches .catch(next), automatically forwarding any thrown error straight to your centralized error middleware without manual try/catch in every route.'],
  },
  {
    id: 269, mod: 32, tInMod: 3,
    title: 'Input validation and sanitization',
    sub: 'Blocking NoSQL Injection (`{ "$ne": null }`), XSS & Oversized Payloads in MERN',
    coreEn: 'In MongoDB + Express, NEVER trust raw `req.body` or `req.query`: an attacker sending `{ "email": { "$gt": "" } }` can trigger ==NoSQL Injection==! Prevent it by ==enforcing strict string types with Zod==, ==trimming/normalizing inputs==, and ==limiting JSON body size==!',
    coreHi: 'MongoDB + Express mein raw `req.body` par bharosa karna ==NoSQL Injection (`{ "$gt": "" }`)== invite karta hai—==Zod strict string schemas==, input trimming aur body size limit lagakar 100% block karo!',
    analogyTitle: 'Airport Baggage X-Ray Rejecting Any Unexpected Object Disguised as a String',
    analogyEn: 'Zod `z.string().email()` immediately rejects `{ "$gt": "" }` with `400 Bad Request` because an object is NOT a string—crushing NoSQL injection at the gate!',
    analogyHi: 'Zod `z.string().email()` kisi bhi `{ "$gt": "" }` object ko gate par hi `400 Bad Request` bol kar reject kar deta hai!',
    steps: [['Strict Types (Zod)', 'Validate every field is exact `string`/`number`/`boolean`'], ['Block $ Operators', 'Reject keys starting with `$` or `.` in user queries'], ['Limit Body Size', '`express.json({ limit: "1mb" })` blocks payload bombs'], ['Trim & Normalize', '`.trim().toLowerCase()` on emails before DB lookup']],
    jobUse: 'Protects MERN apps against OWASP Top-10 Injection attacks.',
    mistake: 'Writing `User.findOne({ email: req.body.email })` without validating that `req.body.email` is actually a `string`!',
    proHabit: 'Validate BOTH `req.body` AND `req.query` with strict Zod schemas on every public endpoint!',
    rule: 'Strict Zod Types + Size Limits + Strip Unknown Keys = Zero NoSQL Injection.',
    code: `const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(128),
}); // Immediately rejects NoSQL object payloads like { "$ne": null }!`,
    out: 'NoSQL-injection-proof login validation schema.',
    q1: ['How can a MongoDB/Express login route be vulnerable to NoSQL Injection, and how does Zod stop it?', 'If you pass raw req.body.email directly to User.findOne({ email: req.body.email }), an attacker can send JSON {"email": {"$ne": null}} which MongoDB evaluates as a query operator matching the first user! Zod z.string().email() strictly enforces a string type and rejects object payloads immediately.'],
  },
  {
    id: 270, mod: 32, tInMod: 4,
    title: 'Logging basics',
    sub: 'HTTP Request Logging (`morgan` / `pino`), Structured JSON Logs & Never Logging Passwords/Tokens',
    coreEn: 'Add ==HTTP request logging (`morgan("dev")` locally, structured JSON `pino` in production)== tracking ==Method, URL, Status Code, and Response Time (ms)==—and ALWAYS ==redact passwords, JWTs, cookies, and PII== so logs never become a security leak!',
    coreHi: 'Har API request ka ==Method, URL, Status aur Response Time (`morgan` / `pino`)== log karo taaki production bugs 10 second mein mil jayein—aur ==passwords, JWTs aur PII ko KABHI log mat karo==!',
    analogyTitle: 'Airplane Black Box Recording Flight Health Without Recording Passenger PINs',
    analogyEn: 'Seeing `POST /api/orders 500 1842ms` in Render logs immediately pinpoints BOTH the failing route AND slow database latency!',
    analogyHi: 'Server logs mein `POST /api/orders 500 1842ms` dikhte hi exact slow ya failing route turant pakda jata hai!',
    steps: [['Dev Logging', '`app.use(morgan("dev"))` for clean colored local logs'], ['Prod Structured JSON', 'Use `pino` / JSON logs searchable in Render/CloudWatch'], ['Never Log Secrets', 'Never `console.log(req.body)` on `/login` or `/register`!'], ['Log Context', 'Include error message, route, status & timestamp']],
    jobUse: 'Essential for debugging real production incidents after deployment.',
    mistake: 'Writing `console.log("Login body:", req.body)` in production—writing every user plaintext password permanently into cloud log files!',
    proHabit: 'Never log `req.body` or `req.headers.authorization` directly—log ONLY safe metadata (method, path, userId, status, ms)!',
    rule: 'Log Method/Path/Status/Latency | NEVER Log Passwords, JWTs, or Raw req.body.',
    code: `import morgan from 'morgan';
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));`,
    out: 'Clean, zero-secret-leak HTTP request logging.',
    q1: ['Why must you never do console.log(req.body) or console.log(req.headers) in production Express middleware?', 'Because req.body on auth endpoints contains plaintext user passwords and PII, and req.headers contains Bearer JWT tokens and session cookies—logging them exposes credentials in plaintext log storage.'],
  },
  {
    id: 271, mod: 32, tInMod: 5,
    title: 'CORS configuration',
    sub: 'Production-Safe Origin Allowlists, Preflight `OPTIONS` & `credentials: true` With Cookies',
    coreEn: 'Configure Express ==`cors()`== strictly for production: pass an ==explicit Origin Allowlist (`CLIENT_URL` from `.env`)==, set ==`credentials: true`== ONLY when using HttpOnly cookies/auth headers, and NEVER leave `origin: "*"` open on private authenticated APIs!',
    coreHi: 'Production Express mein ==`cors()`== ko ==explicit Origin Allowlist (`CLIENT_URL` from `.env`)== ke saath configure karo—authenticated APIs par `origin: "*"` mat chhodo!',
    analogyTitle: 'Security Gate Checking Exact Approved Domain Badges Before Allowing Cross-Origin Reads',
    analogyEn: 'Need BOTH local Vite (`http://localhost:5173`) AND deployed Vercel (`https://myapp.vercel.app`)? Pass an array of allowed origins from `.env`!',
    analogyHi: 'Local aur Vercel dono ko allow karne ke liye `.env` mein comma-separated `ALLOWED_ORIGINS` list use karo!',
    steps: [['Use Env Allowlist', '`const allowed = (process.env.CLIENT_URLS || "").split(",");`'], ['Enable Credentials', 'Set `credentials: true` if using HttpOnly JWT cookies'], ['Allow Methods', '`methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]`'], ['Mount Near Top', 'Place `app.use(cors(...))` BEFORE all routes!']],
    jobUse: 'Fixes 100% of local-to-production deployment CORS headaches cleanly.',
    mistake: 'Deploying with `origin: "http://localhost:5173"` hardcoded so the live Vercel frontend gets blocked by CORS!',
    proHabit: 'Always drive CORS `origin` from `process.env.CLIENT_URL` so switching dev -> prod requires zero code edits!',
    rule: 'Explicit Env Origin Allowlist + credentials: true (for Cookies) + Mount Above Routes.',
    code: `const allowedOrigins = (process.env.CLIENT_URLS || 'http://localhost:5173').split(',');
app.use(cors({
  origin: (origin, cb) => (!origin || allowedOrigins.includes(origin) ? cb(null, true) : cb(new Error('CORS blocked'))),
  credentials: true,
}));`,
    out: 'Flexible, secure multi-environment production CORS setup.',
    q1: ['Why does a browser reject Access-Control-Allow-Origin: * when fetch() uses credentials: "include"?', 'For security, browsers forbid combining wildcard "*" origins with credentialed requests (cookies/auth). You must echo an explicit trusted origin (e.g., https://myapp.vercel.app) alongside Access-Control-Allow-Credentials: true.'],
  },
  {
    id: 272, mod: 32, tInMod: 6,
    title: 'Rate limiting overview',
    sub: 'Stopping Brute-Force Password Attacks & API Abuse With `express-rate-limit` (`429`)',
    coreEn: 'Protect your Express API from ==brute-force login attacks, credential stuffing, and runaway scraper bots== using ==`express-rate-limit`==—apply a ==general limiter (e.g., 100 req/15 min)== globally and a ==strict limiter (e.g., 10 req/15 min)== on `/api/auth/login`!',
    coreHi: '==`express-rate-limit`== se brute-force password guessing aur bot spam roko—global API par `100 req / 15 min` aur `/login` par strict `10 req / 15 min` (`429 Too Many Requests`) lagao!',
    analogyTitle: 'ATM Locking Card Temporarily After Too Many Wrong PIN Attempts',
    analogyEn: 'When deployed behind Render/Vercel/Nginx reverse proxies, set **`app.set("trust proxy", 1)`** so rate limiting tracks each real user IP instead of blocking the single proxy IP for everyone!',
    analogyHi: 'Render/Nginx ke peeche deploy karne par **`app.set("trust proxy", 1)`** lagana zaroori hai taaki real user IP track ho!',
    steps: [['Install Package', '`npm install express-rate-limit`'], ['Strict Auth Limit', '10 attempts / 15 mins on `/api/auth/login` & `/register`'], ['General API Limit', '100–200 requests / 15 mins on `/api/`'], ['Trust Proxy In Prod', '`app.set("trust proxy", 1)` behind Render/Cloudflare/Nginx']],
    jobUse: 'Essential production API defense against brute force and runaway AI/DB costs.',
    mistake: 'Leaving `/api/auth/login` and `/api/ai/chat` completely unthrottled so one bot runs up a huge bill in 5 minutes!',
    proHabit: 'ALWAYS put a strict rate limiter on **Auth (`/login`, `/forgot-password`)** and **AI endpoints**!',
    rule: 'General API Limit + Strict Auth/AI Limit + trust proxy = Protected Backend.',
    code: `import rateLimit from 'express-rate-limit';
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: 'Too many login attempts. Please try again in 15 minutes.' },
});
app.use('/api/auth/login', authLimiter);`,
    out: 'Brute-force-resistant login endpoint returning clean `429` JSON.',
    q1: ['Why should /api/auth/login have a much stricter rate limit than GET /api/products?', 'Login endpoints are prime targets for automated password brute-forcing and credential stuffing. Restricting login to ~10 attempts per 15 minutes stops attackers while still allowing normal browsing on public read endpoints.'],
  },
  {
    id: 273, mod: 32, tInMod: 7,
    title: 'Configuration by environment',
    sub: 'Clean `src/config/env.js` Separating Development vs Production Behavior Without Hardcoded Flags',
    coreEn: 'Centralize all environment settings (`PORT`, `NODE_ENV`, `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`) inside ==ONE validated `src/config/env.js` module==—automatically tuning `secure` cookies, verbose logging, CORS origins, and error stacks cleanly between `development` and `production`!',
    coreHi: 'Saare environment configs (`PORT`, `NODE_ENV`, `MONGO_URI`, `CLIENT_URL`) ko ek ==`src/config/env.js`== module mein centralize karo—taaki `development` aur `production` behavior bina code badle cleanly switch ho!',
    analogyTitle: 'Single Master Fuse Box Switching Smoothly Between Workshop Test Mode & Live Production Mode',
    analogyEn: 'Importing `env.PORT` and `env.isProd` from `config/env.js` instead of scattering `process.env.*` across 20 files gives autocomplete and startup validation!',
    analogyHi: 'Har file mein `process.env` likhne ke bajaye `config/env.js` import karne se typos aur missing-var bugs zero ho jaate hain!',
    steps: [['Central env.js', 'Parse & validate all env vars once with Zod at startup'], ['isProd Helper', '`export const isProd = env.NODE_ENV === "production";`'], ['Cookie Security', '`secure: isProd` (HTTPS-only in prod, works on HTTP localhost!)'], ['Zero Code Edits', 'Same exact Git code runs on Laptop, Staging & Production']],
    jobUse: 'Core 12-Factor App engineering standard across professional Node.js teams.',
    mistake: 'Manually commenting/uncommenting localhost vs production URLs before every `git push`!',
    proHabit: 'Validate `process.env` at startup using a small Zod schema inside `src/config/env.js`.',
    rule: '1 Validated config/env.js -> Zero Hardcoded URLs -> Identical Code Across Environments.',
    code: `// src/config/env.js
import 'dotenv/config';
export const env = {
  PORT: Number(process.env.PORT) || 5000,
  isProd: process.env.NODE_ENV === 'production',
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
};`,
    out: 'Clean, centralized, multi-environment backend configuration.',
    q1: ['Why is setting cookie secure: process.env.NODE_ENV === "production" helpful for MERN developers?', 'In production (HTTPS), secure: true guarantees cookies are never transmitted over unencrypted HTTP. In local development (http://localhost), setting it false lets local login testing work smoothly without changing code before deploy.'],
  },
  {
    id: 274, mod: 32, tInMod: 8,
    title: 'Security headers',
    sub: '1-Line HTTP Hardening With `helmet()` Blocking Clickjacking, MIME-Sniffing & Stack Fingerprinting',
    coreEn: 'Add ==`app.use(helmet())`== at the top of `app.js` to automatically set ==battle-tested HTTP security headers==: hides `X-Powered-By: Express`, enforces `X-Content-Type-Options: nosniff`, prevents Clickjacking (`X-Frame-Options` / CSP), and enables HTTPS HSTS!',
    coreHi: '`app.js` ke top par sirf 1 line ==`app.use(helmet())`== lagane se Express automatically ==Clickjacking, MIME-sniffing aur server fingerprinting== rokne wale security headers add kar deta hai!',
    analogyTitle: 'Instant Armored Security Doors & Tinted Windows Added in One Line of Code',
    analogyEn: 'By default Express broadcasts `X-Powered-By: Express` on every response (telling attackers your exact framework!)—`helmet()` removes it automatically!',
    analogyHi: '`helmet()` ek line mein `X-Powered-By: Express` hata deta hai aur saare industry-standard browser security headers set kar deta hai!',
    steps: [['Install Helmet', '`npm install helmet`'], ['Mount At Top', '`app.use(helmet());` as your very first middleware'], ['Verify Headers', 'Check DevTools Network -> Response Headers (`X-Content-Type-Options`, etc.)'], ['Pair With Rate Limit', 'Helmet + CORS + Rate Limit + Zod = Strong Express Baseline']],
    jobUse: 'Checked immediately in security audits and senior backend code reviews.',
    mistake: 'Deploying a bare Express server with zero security headers and `X-Powered-By: Express` exposed.',
    proHabit: 'Make `helmet()` Line 1 of every Express `app.js` you ever create!',
    rule: 'app.use(helmet()) = Instant 1-Line Express HTTP Security Hardening.',
    code: `import helmet from 'helmet';
app.use(helmet()); // Sets 10+ security headers & hides X-Powered-By!`,
    out: 'Hardened HTTP response headers protecting every API endpoint.',
    q1: ['What does adding app.use(helmet()) do in an Express.js application?', 'Helmet sets a curated collection of protective HTTP response headers (such as Content-Security-Policy, X-Content-Type-Options: nosniff, Strict-Transport-Security, and removing X-Powered-By: Express) to mitigate XSS, clickjacking, and MIME-sniffing attacks.'],
  },
  {
    id: 275, mod: 32, tInMod: 9,
    title: 'API versioning concepts',
    sub: 'Future-Proofing Your Backend With `/api/v1/` So Breaking Changes Never Crash Live Clients',
    coreEn: 'Prefix all Express routes under ==`/api/v1/`== (`app.use("/api/v1/courses", courseRoutes)`) so when you introduce breaking JSON changes months later, you can launch ==`/api/v2/`== cleanly without breaking existing mobile apps or external clients still using `v1`!',
    coreHi: 'Saare Express routes ko ==`/api/v1/`== ke niche mount karo taaki future mein breaking changes aane par aap ==`/api/v2/`== launch kar sako bina purane mobile/web users ko break kiye!',
    analogyTitle: 'Opening Terminal 2 at an Airport While Terminal 1 Keeps Running Smoothly for Existing Flights',
    analogyEn: 'Adding a new OPTIONAL JSON field is backwards-compatible (stays in `v1`); renaming/deleting a field or changing response shape is a **breaking change** -> bump to `/api/v2/`!',
    analogyHi: 'Naya optional field add karna `v1` mein safe hai; purana field rename/delete karna breaking change hai -> `/api/v2/`!',
    steps: [['Prefix /api/v1', 'Mount all routers under `/api/v1/...` from Day 1'], ['Know Breaking Change', 'Removing/renaming fields or changing types = breaking'], ['Run Parallel', 'Serve `/api/v1` & `/api/v2` simultaneously during migration'], ['Sunset Politely', 'Communicate deprecation timelines before retiring `v1`']],
    jobUse: 'Standard API governance practice at Stripe, GitHub, Twilio, and every mature SaaS backend.',
    mistake: 'Changing `user.name` to `user.fullName` directly on unversioned `/api/users`, instantly breaking all live mobile app users!',
    proHabit: 'Start every new Express backend with `/api/v1/`—it costs 3 extra characters and saves massive headaches later!',
    rule: 'Start With /api/v1/ | Additive Fields = Safe | Breaking Changes = /api/v2/.',
    code: `// Clean versioned API mounting in app.js:
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/orders', orderRoutes);`,
    out: 'Future-proof, non-breaking API versioning architecture.',
    q1: ['What is the difference between a backwards-compatible API change and a breaking change?', 'Adding a brand-new optional field or new endpoint is backwards-compatible (existing clients keep working). Renaming/removing an existing field, changing its data type, or altering required request parameters is a breaking change that requires a new version (/api/v2/).'],
  },
];

export const MERN_TAB7_BLUEPRINTS: Record<number, DsTopicBlueprint> =
  expandMernSpecs(TAB7_SPECS);
