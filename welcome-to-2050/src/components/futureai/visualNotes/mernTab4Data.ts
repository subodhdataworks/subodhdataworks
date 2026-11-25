import { expandMernSpecs, type MernTopicSpec } from './fullStackMernHelper';
import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

const TAB4_SPECS: MernTopicSpec[] = [
  // ═══ CHAPTER 14: Introduction to JavaScript (111..120) ═══
  {
    id: 111, mod: 14, tInMod: 1,
    title: 'What JavaScript does',
    sub: 'The Programming Language of the Web Powering Both Frontend React & Backend Node.js',
    coreEn: '==JavaScript (JS)== brings static HTML/CSS pages to life—handling ==clicks, form validation, live search, API fetches, and dynamic UI updates== in the browser AND powering ==Node.js/Express servers== on the backend!',
    coreHi: '==JavaScript (JS)== static HTML/CSS mein jaan daalta hai—browser mein ==clicks, forms, live search aur API calls== chalata hai, aur backend mein ==Node.js + Express server== bhi JS par hi chalta hai!',
    analogyTitle: 'Electricity & Smart Wiring Turning a Painted House Into a Smart Home',
    analogyEn: 'JavaScript is the ONLY language browsers execute natively—mastering JS deeply makes React, Node, Express, and TypeScript 10x easier!',
    analogyHi: 'JavaScript browser ki akeli native language hai—JS strong hone par React, Node aur Express sab aasaan ho jaate hain!',
    steps: [['Attach Cleanly', '`<script src="./app.js" defer></script>` inside `<head>`'], ['Respond To Users', 'Listen for clicks, typing, submits & keyboard shortcuts'], ['Fetch Live Data', 'Talk to Express/REST APIs without full page reloads'], ['Run On Server Too', 'Same JS syntax powers Node.js backend APIs!']],
    jobUse: 'The #1 most-used programming language worldwide and the heart of the entire MERN stack.',
    mistake: 'Rushing past core JavaScript (arrays, objects, closures, async/await) straight into React.',
    proHabit: 'Practice small JS snippets directly in Chrome DevTools Console or Node CLI every day!',
    rule: 'Strong Core JavaScript = Effortless React, Node.js, Express & Interviews.',
    code: `// JavaScript makes pages interactive
const btn = document.querySelector('#cta');
btn.addEventListener('click', () => {
  btn.textContent = 'Enrolled!';
});`,
    out: 'Instant interactive button update without page reload.',
    q1: ['Why is JavaScript uniquely central to the MERN stack?', 'Because JavaScript runs natively in every web browser (powering React on the frontend) AND runs on the server via Node.js (powering Express APIs and MongoDB queries)—enabling full-stack development in one language.'],
  },
  {
    id: 112, mod: 14, tInMod: 2,
    title: 'Variables: let, const, var',
    sub: 'Default to `const`, Use `let` for Reassignment & Retire Legacy `var` Forever',
    coreEn: 'In modern JS (ES6+), ==ALWAYS default to `const`== (block-scoped, cannot be reassigned—though object/array contents CAN still be updated), use ==`let`== ONLY when a variable must be reassigned (loop counters, toggles), and ==AVOID legacy `var`== (function-scoped & hoisting bugs!).',
    coreHi: 'Modern JS mein ==hamesha `const` default rakho==, reassign karne par ==`let`== use karo, aur purane ==`var`== ko avoid karo (kyunki `var` block-scope respect nahi karta aur hoisting bugs lata hai)!',
    analogyTitle: 'Labeled Sealed Box (`const`), Reusable Whiteboard (`let`) & Leaky Old Bucket (`var`)',
    analogyEn: 'Remember: `const user = { name: "Priya" }; user.name = "Anita";` IS valid because `const` locks the binding reference, not the inner object properties!',
    analogyHi: '`const` variable ko dobara assign nahi kar sakte, par `const` object/array ke andar ki values update ki ja sakti hain!',
    steps: [['Default To const', '`const API_URL = "/api/tasks";` (90% of variables!)'], ['Use let For Change', '`let count = 0; count += 1;` (block-scoped)'], ['Retire var', '`var` leaks out of `if`/`for` blocks & hoists as `undefined`'], ['Clear camelCase', '`const totalOrderPrice = 1499;` (descriptive names!)']],
    jobUse: 'One of the top 3 JavaScript fundamentals asked in every fresher & mid-level interview.',
    mistake: 'Using `var` inside a `for` loop with `setTimeout` and getting the final loop value printed 5 times!',
    proHabit: 'Write `const` by default; only change it to `let` the moment you actually need reassignment.',
    rule: 'const by Default -> let When Reassigned -> Never var.',
    code: `const taxRate = 0.18;       // Never reassigned
let cartTotal = 1000;       // Reassigned as items added
cartTotal += 500;
const finalBill = cartTotal * (1 + taxRate);`,
    out: 'Clean, predictable, block-scoped variables with zero hoisting traps.',
    q1: ['What is the difference between let, const, and var in JavaScript?', 'var is function-scoped and hoisted with undefined (can leak outside blocks and be redeclared). let and const are block-scoped (inside {}) and live in the Temporal Dead Zone before declaration; let allows reassignment while const prevents reassigning the variable binding.'],
  },
  {
    id: 113, mod: 14, tInMod: 3,
    title: 'Data types and type conversion',
    sub: '7 Primitives vs Objects, `typeof`, Truthy/Falsy Traps & Explicit `Number()` Conversion',
    coreEn: 'JS has ==7 Primitives== (`string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`) + ==Objects== (objects, arrays, functions)—ALWAYS convert user input explicitly with ==`Number(val)`, `String(val)`, `Boolean(val)`== because HTML inputs ALWAYS return strings (`"5" + 1 === "51"`!)!',
    coreHi: 'JS mein ==7 Primitives== (`string`, `number`, `boolean`, `undefined`, `null`, etc.) aur ==Objects== hote hain—HTML inputs hamesha string dete hain, isliye math se pehle ==`Number(val)`== se explicit convert karo!',
    analogyTitle: 'Checking Labelled Ingredient Jars Before Cooking ("5" Text != Number 5)',
    analogyEn: 'Know the ==6 Falsy values== by heart: `false, 0, "", null, undefined, NaN` — EVERYTHING else (even `"0"`, `[]`, `{}`!) is **Truthy**!',
    analogyHi: 'Sirf ==6 Falsy values== hain: `false, 0, "", null, undefined, NaN` — baaki sab (yahan tak ki `[]` aur `{}` bhi!) Truthy hota hai!',
    steps: [['Check Types', '`typeof 42 === "number"`, `Array.isArray(x)` for arrays!'], ['Explicit Convert', '`Number("42") -> 42`, `Number.isNaN(x)` to guard bad input'], ['Know 6 Falsies', '`false`, `0`, `""`, `null`, `undefined`, `NaN`'], ['null vs undefined', '`undefined` = not assigned yet | `null` = intentionally empty']],
    jobUse: 'Prevents classic bugs like `"100" + "50" = "10050"` in shopping carts and calculators!',
    mistake: 'Checking `typeof null === "null"` (famous JS quirk: `typeof null` returns `"object"`! Check `val === null` instead!).',
    proHabit: 'Always parse numeric form inputs with `Number(input.value)` and guard with `Number.isNaN()`!',
    rule: 'Explicit Conversion (Number/String) + Know the 6 Falsies = Zero Type Surprises.',
    code: `const qty = Number("3");       // 3 (not "3"!)
const price = Number("499");   // 499
const total = qty * price;     // 1497
console.log(Array.isArray([1, 2])); // true`,
    out: 'Accurate arithmetic with zero accidental string concatenation.',
    q1: ['What is the difference between null and undefined in JavaScript?', 'undefined means a variable has been declared (or object property accessed) but no value has been assigned yet by JavaScript, whereas null is an intentional empty value explicitly assigned by the developer to represent "no value".'],
  },
  {
    id: 114, mod: 14, tInMod: 4,
    title: 'Operators',
    sub: 'Strict Equality (`===` vs `==`), Logical `&&`/`||`/`!`, Ternary `? :` & Arithmetic',
    coreEn: 'ALWAYS use ==Strict Equality (`===` and `!==`)== (compares BOTH value AND type, preventing wild `"" == 0` bugs!), master ==Logical Operators (`&&`, `||`, `!`)== with short-circuiting, and use ==Ternary (`cond ? A : B`)== for clean 1-line React expressions!',
    coreHi: 'Hamesha ==Strict Equality (`===` aur `!==`)== use karo (value + type dono check karta hai!), aur clean decisions ke liye ==`&&`, `||` aur Ternary (`cond ? A : B`)== master karo!',
    analogyTitle: 'Exact Fingerprint + ID Match (`===`) vs Loose Lookalike Guess (`==`)',
    analogyEn: 'With loose `==`, `0 == ""` is `true` and `"5" == 5` is `true`—using `===` eliminates an entire class of subtle production bugs!',
    analogyHi: '`==` mein `0 == ""` bhi `true` ho jata hai! Hamesha `===` use karo taaki type bugs zero rahein!',
    steps: [['Strict === Always', '`5 === "5"` -> `false` | `5 === 5` -> `true`'], ['Logical Short-Circuit', '`isAdmin && showPanel()` | `user.name || "Guest"`'], ['Clean Ternary', '`const label = isPaid ? "Paid" : "Pending";`'], ['Math & Remainder', '`+ - * / % **` (`num % 2 === 0` checks even!)']],
    jobUse: 'Used constantly in React JSX conditional rendering (`isLoading ? <Spinner /> : <List />`).',
    mistake: 'Writing messy 3-level nested ternaries (`a ? b ? c : d : e`) that nobody can read!',
    proHabit: 'Use ternaries ONLY for clean 1-level choices; switch to `if/else` or lookup objects for 3+ cases!',
    rule: 'Always === / !== | Short Ternary for 2 Choices | Lookup/if-else for 3+.',
    code: `const role = "admin";
const canDelete = role === "admin" || role === "owner";
const badge = canDelete ? "Full Access" : "Read Only";`,
    out: 'Crisp, bug-free boolean logic.',
    q1: ['Why do JavaScript style guides and linters enforce === instead of ==?', '== performs implicit type coercion with unintuitive rules (like 0 == "" being true), whereas === checks both value and data type strictly, making comparisons predictable and bug-free.'],
  },
  {
    id: 115, mod: 14, tInMod: 5,
    title: 'Strings and template literals',
    sub: 'Backtick Template Literals (`` `Hello ${name}` ``) & Essential String Methods',
    coreEn: 'Use ==Template Literals (backticks `` ` ``)== to interpolate variables cleanly (`` `Total: ₹${price}` ``) and write multi-line strings—and master daily methods: ==`.trim()`, `.toLowerCase()`, `.includes()`, `.split()`, `.replace()`, `.slice()`==!',
    coreHi: 'String jodne ke liye `+` ke bajaye ==Template Literals (`` `Total: ₹${price}` ``)== use karo, aur daily methods ==`.trim()`, `.toLowerCase()`, `.includes()`, `.split()`, `.slice()`== master karo!',
    analogyTitle: 'Smart Fill-in-the-Blank Mad-Libs Template vs Gluing Paper Strips With `+`',
    analogyEn: 'Normalizing search queries with `query.trim().toLowerCase()` ensures `"  MERN  "` matches `"mern stack"` cleanly every single time!',
    analogyHi: 'Search box mein `query.trim().toLowerCase()` lagane se extra spaces ya capital letters kabhi search fail nahi karte!',
    steps: [['Template Literals', '`` `Hi ${user.name}, ${count} new tasks` ``'], ['Clean Input', '`email.trim().toLowerCase()` before DB lookup/save'], ['Search & Split', '`str.includes("react")`, `"a,b,c".split(",")`'], ['Strings Immutable', 'Methods return a NEW string—always assign the result!']],
    jobUse: 'Used everywhere in search bars, API URLs, form cleaning, and React JSX.',
    mistake: 'Calling `email.trim()` without saving the returned value (`email = email.trim()`—strings in JS are immutable!).',
    proHabit: 'Always `.trim().toLowerCase()` email addresses on BOTH frontend and Express backend before saving to MongoDB!',
    rule: 'Backticks `${}` for Interpolation | Strings Are Immutable (Capture Return Value!).',
    code: `const rawEmail = "  Priya@Example.COM  ";
const cleanEmail = rawEmail.trim().toLowerCase();
const greeting = \`Welcome back, \${cleanEmail}!\`;`,
    out: 'Clean normalized email and readable string interpolation.',
    q1: ['Why does calling str.trim() by itself without assigning the result not change the original string in JavaScript?', 'Because JavaScript strings are immutable primitives—all string methods return a brand-new modified string rather than mutating the original variable in place.'],
  },
  {
    id: 116, mod: 14, tInMod: 6,
    title: 'Conditionals',
    sub: 'Clean `if / else if / else`, `switch`, and Senior Guard-Clause Early Returns',
    coreEn: 'Control decision flow with ==`if / else if / else`== and ==`switch`== (with `break`!)—and adopt the senior ==Guard Clause (Early Return)== pattern to eliminate deeply nested "pyramid of doom" `if` blocks!',
    coreHi: 'Decisions ke liye ==`if/else`== aur ==`switch`== use karo—aur senior developers ki tarah ==Guard Clauses (Early Return)== likho taaki 5-level nested `if` ka jungle na bane!',
    analogyTitle: 'Airport Security Gateways Turning Back Invalid Tickets Immediately at Entrance',
    analogyEn: 'Checking `if (!user) return;` at the top of a function keeps the main happy-path code flat, readable, and bug-free!',
    analogyHi: 'Function ke top par `if (!user) return;` likh dene se poora main code clean aur flat rehta hai!',
    steps: [['Guard Clauses First', 'Handle invalid/empty edge cases early with `return`'], ['Clean if/else', 'Keep branches concise and mutually exclusive'], ['Switch + break', 'Use `switch` or Object lookup map for 4+ exact cases'], ['Default Branch', 'Always handle unexpected fallback values safely']],
    jobUse: 'Makes Express API controllers and React event handlers dramatically cleaner.',
    mistake: 'Forgetting `break;` inside a `switch` case (causes unintended fall-through into the next case!).',
    proHabit: 'Prefer a clean **Object Lookup Map** (`const STATUS_COLOR = { paid: "green", pending: "amber" }`) over long `switch` statements!',
    rule: 'Early Return Guard Clauses -> Flat Happy Path -> Clean Lookup Maps.',
    code: `function processOrder(user, cart) {
  if (!user) return { error: 'Please log in' };
  if (cart.length === 0) return { error: 'Cart is empty' };
  return { ok: true, total: cart.length };
}`,
    out: 'Flat, senior-level readable conditional logic.',
    q1: ['What is a Guard Clause (Early Return) in JavaScript and why do senior engineers prefer it?', 'A Guard Clause checks invalid or edge conditions at the very top of a function and immediately returns/exits, avoiding deeply nested if/else blocks and keeping the main happy-path logic clean and flat.'],
  },
  {
    id: 117, mod: 14, tInMod: 7,
    title: 'Loops',
    sub: '`for`, `for...of`, `while`, `break`/`continue` & When Array `.map()`/`.filter()` Beats Loops',
    coreEn: 'Repeat tasks cleanly with ==`for...of`== (cleanest way to iterate arrays & supports `await`!), classic ==`for (let i = 0; i < n; i++)`== (when you need exact index), and ==`while`== (unknown iteration count)—always ensure the exit condition is reachable to avoid infinite loops!',
    coreHi: 'Repetitive kaam ke liye ==`for...of`== (arrays aur `async/await` ke liye best!), index chahiye toh classic ==`for`==, aur React UI rendering ke liye ==`.map()`== use karo!',
    analogyTitle: 'Conveyor Belt Scanning Every Parcel One-by-One Until the Belt Ends',
    analogyEn: 'Remember: use **`for...of`** for Arrays/Strings (values) and **`Object.entries(obj)`** for Objects—avoid `for...in` on arrays!',
    analogyHi: 'Arrays ke liye **`for...of`** use karo aur Objects ke liye **`Object.entries(obj)`**—arrays par `for...in` avoid karo!',
    steps: [['for...of (Arrays)', '`for (const item of items)` — clean & `await`-friendly!'], ['Classic for', 'When you need numeric step (`i += 2`) or reverse loop'], ['break & continue', '`break` exits loop early; `continue` skips current item'], ['Prefer .map/.filter', 'In React & data pipelines, functional methods stay cleaner']],
    jobUse: 'Powers data processing, DSA interview problems, batch API calls, and UI rendering.',
    mistake: 'Writing a `while` loop that forgets to increment the counter—freezing the entire browser tab!',
    proHabit: 'Use `for...of` when you need sequential `await` or early `break`, and `.map()`/`.filter()` for pure array transforms.',
    rule: 'for...of = Clean Array/Async Loops | .map/.filter = Pure Transforms | Always Guarantee Exit.',
    code: `const prices = [499, 1200, 850];
let total = 0;
for (const price of prices) {
  total += price;
}
console.log(total); // 2549`,
    out: 'Clean, zero-off-by-one array summation.',
    q1: ['What is the difference between for...of and for...in in JavaScript?', 'for...of iterates over the VALUES of iterable objects like Arrays and Strings, whereas for...in iterates over enumerable property KEYS (strings) including inherited prototype keys—making for...of much safer for arrays.'],
  },
  {
    id: 118, mod: 14, tInMod: 8,
    title: 'Functions and parameters',
    sub: 'Function Declarations vs Arrow Functions (`=>`), Default Params & Pure Single-Purpose Functions',
    coreEn: 'Functions package reusable logic: ==Declarations (`function add(a, b)`)== (hoisted), ==Arrow Functions (`const add = (a, b) => a + b`)== (concise, lexical `this`, standard in React callbacks!), and ==Default Parameters (`role = "student"`)==.',
    coreHi: 'Functions reusable logic banate hain: ==Declarations==, ==Arrow Functions (`(a, b) => a + b`)== (React mein har jagah use hote hain!) aur ==Default Parameters (`role = "student"`)==!',
    analogyTitle: 'Vending Machine: Put In Parameters (Coins + Code) -> Get Back Clean Return Value',
    analogyEn: 'Keep every function small and focused on **ONE clear job**—if a function is 80 lines long, split it into 3 readable helper functions!',
    analogyHi: 'Har function ka **1 hi clear kaam** rakho—clean small functions debug aur test karne mein 10x aasaan hote hain!',
    steps: [['Arrow Functions', '`const calcTax = (amt, rate = 0.18) => amt * rate;`'], ['Return Explicitly', 'Without `return`, a `{}` function returns `undefined`!'], ['Default Params', 'Prevent `NaN`/`undefined` crashes on missing arguments'], ['Pure Functions', 'Same input -> same output, zero surprise global mutations']],
    jobUse: 'Every React component, Express route controller, and utility helper is a JavaScript function!',
    mistake: 'Forgetting `return` inside curly braces `(x) => { x * 2 }` (returns `undefined`! Either drop `{}` or write `return`).',
    proHabit: 'When a function takes 3+ optional arguments, pass a single **destructured options object** `({ name, role = "user", active = true })`!',
    rule: '1 Function = 1 Job | Arrow Functions for Callbacks | Explicit Return Inside {}.',
    code: `const formatINR = (amount = 0) => \`₹\${amount.toLocaleString('en-IN')}\`;
console.log(formatINR(54999)); // "₹54,999"`,
    out: 'Clean, reusable pure formatting helper.',
    q1: ['What happens if you write const double = (n) => { n * 2 }; and call double(5)?', 'It returns undefined! Curly braces {} open a function body block requiring an explicit return keyword (return n * 2;). Implicit return only works without braces: (n) => n * 2.'],
  },
  {
    id: 119, mod: 14, tInMod: 9,
    title: 'Scope basics',
    sub: 'Global, Function & Block Scope (`{}`), Lexical Scope Chain & Intro to Closures',
    coreEn: '==Scope== determines where a variable is accessible: ==Global Scope== (everywhere—minimize!), ==Function Scope== (inside a function), and ==Block Scope== (`let`/`const` inside `if`/`for` `{}`). Inner functions can read outer variables (==Lexical Scope / Closure==), never vice-versa!',
    coreHi: '==Scope== batata hai variable kahan access ho sakta hai: ==Global==, ==Function== aur ==Block Scope (`{}`)==—andar ka function bahar ke variables padh sakta hai (==Lexical Scope / Closure==), par bahar wala andar ke nahi!',
    analogyTitle: 'One-Way Tinted Glass Window: Inside Looks Out Easily, Outside Cannot Peek Inside',
    analogyEn: 'Closures (an inner function remembering outer variables even after the outer function finishes) power React `useState`, event handlers, and private counters!',
    analogyHi: 'Closures (andar ka function outer variable ko yaad rakhta hai) hi React hooks aur event handlers ki foundation hain!',
    steps: [['Block Scope {}', '`let` & `const` stay safely trapped inside `if`/`for` blocks'], ['Avoid Globals', 'Too many globals cause accidental name collisions across files'], ['Lexical Lookup', 'JS searches current scope -> parent scope -> global'], ['Closure Power', 'Returned inner function remembers its parent variables!']],
    jobUse: 'Top-5 most frequently asked JavaScript interview concept (Scope + Closures).',
    mistake: 'Accidentally creating a global variable or shadowing an outer variable name inside a nested block.',
    proHabit: 'Keep variables declared in the **tightest scope possible**—use ES Modules (`import/export`) to avoid polluting global scope!',
    rule: 'Inner Reads Outer (Never Reverse) | Tightest Scope Wins | ES Modules Eliminate Globals.',
    code: `function createCounter() {
  let count = 0; // Private inside closure!
  return () => ++count;
}
const nextId = createCounter();
console.log(nextId(), nextId()); // 1, 2`,
    out: 'Clean private counter powered by lexical closure.',
    q1: ['What is a Closure in JavaScript?', 'A closure is created when an inner function remembers and continues to access variables from its outer lexical scope even after the outer function has finished executing.'],
  },
  {
    id: 120, mod: 14, tInMod: 10,
    title: 'Debugging with console',
    sub: 'Beyond `console.log`: `console.table()`, `console.error()`, Labeled Logs & Breakpoints',
    coreEn: 'Debug JS fast using ==labeled `console.log({ user, total })`== (curly braces print variable name + value!), ==`console.table(users)`== (prints arrays of objects as neat tables!), ==`console.error()`==, and ==DevTools Sources Breakpoints== to pause and step line-by-line!',
    coreHi: 'Sirf raw `console.log` nahi—==`console.log({ user, total })`== (naam + value dono!), ==`console.table(array)`== (neat table!), aur ==DevTools Breakpoints== se step-by-step bugs 5x fast pakdo!',
    analogyTitle: 'Slow-Motion Video Replay Letting You Inspect Every Single Frame of Your Code',
    analogyEn: 'Clicking a line number in DevTools **Sources** tab pauses code live so you can hover over EVERY variable in scope—10x faster than adding 20 `console.log` lines!',
    analogyHi: 'DevTools **Sources** tab mein line par click karke breakpoint lagao—code wahin ruk kar har variable ki live value dikha deta hai!',
    steps: [['Labeled Logs', '`console.log({ price, qty, total })` — never unlabeled values'], ['console.table()', 'Visualize arrays of objects (`users`, `orders`) cleanly'], ['Read Stack Trace', 'Click top file:line link in red error to jump straight to bug'], ['Remove Before Push', 'Delete temporary debug `console.log`s before Git commit!']],
    jobUse: 'Separates calm, systematic problem solvers from frustrated guessers.',
    mistake: 'Writing `console.log(x)` in 8 places and having no idea which `undefined` came from which line!',
    proHabit: 'Always wrap debug values in `{}` (`console.log({ step: "checkout", cart })`) and clean up logs before opening a PR!',
    rule: 'console.log({ var }) + console.table() + DevTools Breakpoints = 5x Faster Debugging.',
    code: `const orders = [
  { id: 101, item: 'Laptop', amount: 54999 },
  { id: 102, item: 'Mouse',  amount: 999 },
];
console.table(orders); // Neat tabular output in DevTools!`,
    out: 'Instant readable table in Browser Console.',
    q1: ['Why is console.log({ user, total }) much more helpful than console.log(user, total)?', 'Wrapping variables in an object shorthand ({ user, total }) prints both the exact variable names and their values together, making it effortless to tell which value is which when multiple logs appear.'],
  },

  // ═══ CHAPTER 15: DOM Manipulation (121..130) ═══
  {
    id: 121, mod: 15, tInMod: 1,
    title: 'DOM tree overview',
    sub: 'How `document` Exposes Your Live HTML Page as a Tree of Nodes JavaScript Can Control',
    coreEn: 'The ==DOM (Document Object Model)== is the browser live tree of ==Element Nodes, Text Nodes, and Attributes== rooted at `document`—allowing JavaScript to ==select, read, create, style, and remove== any part of the page dynamically without reloading!',
    coreHi: '==DOM (Document Object Model)== browser ka live HTML tree hai (`document` se shuru)—JS iske through bina page reload kiye koi bhi element ==read, change, add ya delete== kar sakta hai!',
    analogyTitle: 'Family Tree Blueprint Where JavaScript Can Renovate Any Room Live',
    analogyEn: 'Understanding the real DOM makes **React Virtual DOM** and `useRef` crystal clear in Tab 5!',
    analogyHi: 'Real DOM samajhne ke baad Tab 5 mein **React** aur **Virtual DOM** 100% crystal clear ho jaate hain!',
    steps: [['Root document', '`document.documentElement` (`<html>`) -> `document.body`'], ['Parent/Child/Sibling', 'Navigate cleanly via `.parentElement`, `.children`, `.closest()`'], ['Live Updates', 'Changing a DOM node repaints pixels immediately'], ['Wait For DOM', 'Use `<script defer>` so DOM nodes exist when JS runs!']],
    jobUse: 'Core browser engineering knowledge tested in every frontend interview.',
    mistake: 'Running `document.querySelector("#btn")` in `<head>` without `defer`, getting `null` and crashing with `Cannot read properties of null`!',
    proHabit: 'Always load scripts with **`defer`** (or type="module", which defers automatically!).',
    rule: 'DOM = Live HTML Object Tree | Always Defer Scripts So Elements Exist.',
    code: `// Walking the DOM safely
const card = document.querySelector('.course-card');
const title = card?.querySelector('h3')?.textContent;`,
    out: 'Safe, null-protected DOM inspection.',
    q1: ['Why does document.querySelector("#submit-btn") sometimes return null even when the button exists in HTML?', 'Because the <script> executed in <head> BEFORE the browser finished parsing the <body> HTML. Adding the defer attribute (or type="module") guarantees the DOM is ready first.'],
  },
  {
    id: 122, mod: 15, tInMod: 2,
    title: 'Selecting elements',
    sub: '`querySelector()` vs `querySelectorAll()` & Converting NodeList to Array',
    coreEn: 'Use ==`document.querySelector(".btn")`== to grab the ==first matching CSS selector== (returns Element or `null`) and ==`document.querySelectorAll(".card")`== to grab ==all matches as a static `NodeList`== (supports `.forEach()` or `[...list]` for `.map()`/`.filter()`)!',
    coreHi: 'Ek element ke liye ==`document.querySelector(".btn")`== aur saare matching elements ke liye ==`document.querySelectorAll(".card")`== use karo—same CSS selectors yahan kaam karte hain!',
    analogyTitle: 'Laser Pointer Grabbing 1 Exact Target (`querySelector`) vs Spotlight Grabbing All (`querySelectorAll`)',
    analogyEn: 'You can also call `card.querySelector(".price")` scoped inside a specific card instead of searching the whole document!',
    analogyHi: 'Aap poore `document` ke bajaye kisi specific `card.querySelector(".price")` ke andar bhi search kar sakte ho!',
    steps: [['Single Element', '`document.querySelector("#search")` or `getElementById("search")`'], ['Multiple Elements', '`document.querySelectorAll(".tab-btn")` -> static `NodeList`'], ['Convert To Array', '`[...document.querySelectorAll(".item")]` unlocks `.filter()`'], ['Check Null', 'Guard with `if (!el) return;` before calling methods on it']],
    jobUse: 'Used constantly in vanilla JS widgets, DOM scripts, and Playwright/E2E testing selectors!',
    mistake: 'Calling `.map()` directly on a `NodeList` (fails! Convert via `[...nodeList]` or `Array.from()` first!).',
    proHabit: 'Use `data-*` attributes (`data-testid="buy-btn"`, `data-id="42"`) as clean JS hooks so CSS class renames never break your JS!',
    rule: 'querySelector (1st Match) | querySelectorAll (Static NodeList) | Prefer data-* Hooks.',
    code: `const buttons = [...document.querySelectorAll('[data-filter]')];
buttons.forEach((btn) => console.log(btn.dataset.filter));`,
    out: 'Clean, CSS-decoupled element selection using `data-*` attributes.',
    q1: ['Why is selecting elements with data-* attributes (like [data-action="delete"]) often safer than selecting by CSS styling classes?', 'Designers or Tailwind refactors frequently rename styling classes, which breaks JavaScript tied to visual classes. Dedicated data-* hooks cleanly separate behavior from styling.'],
  },
  {
    id: 123, mod: 15, tInMod: 3,
    title: 'Changing text, attributes, and classes',
    sub: 'Safe `textContent` (Never `innerHTML` for User Text!), `classList.toggle()` & `dataset`',
    coreEn: 'Update DOM content safely with ==`el.textContent`== (XSS-safe!), toggle CSS states cleanly with ==`el.classList.add/remove/toggle("active")`== (instead of messy inline `el.style`), and read/write attributes via ==`setAttribute()` & `el.dataset`==!',
    coreHi: 'User text dikhane ke liye hamesha ==`el.textContent`== use karo (`innerHTML` se XSS hack hota hai!), aur styling toggle karne ke liye ==`el.classList.toggle("active")`== use karo!',
    analogyTitle: 'Swapping a Clean Nameplate (`textContent`) & Flipping a Light Switch (`classList.toggle`)',
    analogyEn: 'Passing user input into `el.innerHTML` allows hackers to inject `<img src=x onerror="stealCookies()">` (XSS attack!)—`el.textContent` neutralizes it 100% automatically!',
    analogyHi: '`innerHTML` mein user ka text daalne se XSS hack ho sakta hai—`textContent` hamesha 100% safe rehta hai!',
    steps: [['Safe Text', '`el.textContent = userInput;` (never `innerHTML` for untrusted text!)'], ['Clean Classes', '`el.classList.toggle("is-open")` keeps styling in CSS'], ['Attributes & ARIA', '`btn.setAttribute("aria-expanded", String(isOpen))`'], ['Read Data Attrs', '`card.dataset.productId` reads `data-product-id`']],
    jobUse: 'Prevents XSS vulnerabilities and keeps JS/CSS cleanly separated.',
    mistake: 'Using `el.innerHTML = userComment` or overwriting all classes with `el.className = "active"` (wipes existing classes!).',
    proHabit: 'Always use **`classList.add/remove/toggle`** (never overwrite `className`) and **`textContent`** for user text!',
    rule: 'textContent = XSS-Safe | classList.toggle = Clean State | Never Overwrite className.',
    code: `const menuBtn = document.querySelector('#menuBtn');
const drawer = document.querySelector('#drawer');
const isOpen = drawer.classList.toggle('open');
menuBtn.setAttribute('aria-expanded', String(isOpen));`,
    out: 'Clean, accessible, XSS-safe DOM state toggle.',
    q1: ['What is the security difference between setting el.textContent vs el.innerHTML with user-submitted text?', 'textContent treats the value strictly as plain text (escaping any HTML/script tags automatically), whereas innerHTML parses and executes HTML/event handlers—opening the app to Cross-Site Scripting (XSS) attacks.'],
  },
  {
    id: 124, mod: 15, tInMod: 4,
    title: 'Creating and removing elements',
    sub: 'Dynamic Lists With `document.createElement()`, `.append()`, `DocumentFragment` & `.remove()`',
    coreEn: 'Build dynamic UI items cleanly with ==`document.createElement("li")`==, set `textContent` & classes, insert using ==`.append()` / `.prepend()`== (batching many items in a ==`DocumentFragment`== for 1 single repaint!), and delete cleanly with ==`el.remove()`==!',
    coreHi: 'Naye dynamic elements ==`document.createElement()`== se banao, ==`.append()`== se jodo (zyada items ke liye ==`DocumentFragment`== taaki 1 hi repaint ho!), aur ==`el.remove()`== se delete karo!',
    analogyTitle: 'Assembling a Tray of 20 Cups in the Kitchen (`DocumentFragment`) & Carrying Them Out in 1 Trip',
    analogyEn: 'Appending 100 list items one-by-one inside a loop causes 100 DOM updates; appending them into a `DocumentFragment` and calling `list.append(frag)` once is blazing fast!',
    analogyHi: '100 items ko pehle `DocumentFragment` mein bhar kar 1 baar `list.append(frag)` karne se browser super fast repaint karta hai!',
    steps: [['Create Node', '`const li = document.createElement("li");`'], ['Set Safe Text', '`li.textContent = task.title; li.className = "task";`'], ['Batch With Fragment', '`const frag = document.createDocumentFragment();`'], ['Remove Cleanly', '`li.remove();` or clear list with `list.replaceChildren()`']],
    jobUse: 'Powers vanilla JS to-do apps, search results, and notification toasts.',
    mistake: 'Using `list.innerHTML += "<li>...</li>"` inside a loop (destroys & rebuilds the entire list and kills all existing event listeners on every iteration!).',
    proHabit: 'Use `list.replaceChildren(frag)` to cleanly replace an entire list in one atomic DOM call!',
    rule: 'createElement + textContent + DocumentFragment + replaceChildren() = Fast & Safe DOM.',
    code: `const frag = document.createDocumentFragment();
for (const name of ['HTML', 'CSS', 'JS']) {
  const li = document.createElement('li');
  li.textContent = name;
  frag.append(li);
}
document.querySelector('#skills').replaceChildren(frag);`,
    out: 'Zero-XSS, single-repaint dynamic list rendering.',
    q1: ['Why is doing list.innerHTML += "<li>...</li>" inside a loop considered a bad practice?', 'Every += re-serializes and destroys the entire existing DOM inside list, wipes out attached event listeners and input focus, risks XSS if data is untrusted, and causes poor performance.'],
  },
  {
    id: 125, mod: 15, tInMod: 5,
    title: 'Event listeners',
    sub: 'Clean `addEventListener("click", handler)`, Multiple Listeners & Cleanup',
    coreEn: 'Attach interactive behavior cleanly via ==`el.addEventListener("click", handleClick)`== (supports multiple listeners, clean separation from HTML, and `{ once: true }` options)—NEVER clutter HTML with inline `onclick="..."`!',
    coreHi: 'Clicks aur typing handle karne ke liye ==`addEventListener("click", fn)`== use karo—HTML mein inline `onclick="..."` mat likho! Ek hi element par multiple clean listeners lag sakte hain.',
    analogyTitle: 'Subscribing to a Doorbell Notification Instead of Staring at the Door All Day',
    analogyEn: 'Remember the #1 beginner bug: pass the function REFERENCE `addEventListener("click", save)`, NOT `save()` with parentheses (which calls it immediately on page load!)',
    analogyHi: '`addEventListener("click", save)` likho, `save()` mat likho—`()` lagane se function click se pehle hi page load par chal jata hai!',
    steps: [['Attach Listener', '`btn.addEventListener("click", handleSave)`'], ['Pass Reference Only', 'No `()` unless wrapping in `() => save(id)`'], ['Common Events', '`click`, `input`, `change`, `submit`, `keydown`'], ['Remove If Needed', 'Keep named handler reference for `removeEventListener`']],
    jobUse: 'Core event model behind both vanilla JS interactivity and React synthetic events (`onClick`).',
    mistake: 'Writing `btn.addEventListener("click", handleClick())` so `handleClick` fires immediately on load and returns `undefined`!',
    proHabit: 'Use the `input` event for live search typing and `submit` (on `<form>`) for form submissions!',
    rule: 'Pass Function Reference (No ()!) | Prefer addEventListener Over Inline onclick.',
    code: `const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', (e) => {
  console.log('User typed:', e.target.value);
});`,
    out: 'Responsive live-typing event handler.',
    q1: ['What happens if you accidentally write btn.addEventListener("click", handleSubmit()) with parentheses?', 'handleSubmit() executes IMMEDIATELY during page load instead of waiting for a click, and its return value (usually undefined) is passed to addEventListener—so clicking the button later does nothing.'],
  },
  {
    id: 126, mod: 15, tInMod: 6,
    title: 'Event object and propagation',
    sub: 'Event Bubbling, `e.target` vs `e.currentTarget` & Event Delegation Superpower',
    coreEn: 'When you click a child element, the event ==bubbles upward== to its parents—letting you attach ==ONE single Event Listener on a parent `<ul>` (Event Delegation)== using ==`e.target.closest("button")`== instead of 1,000 listeners on 1,000 list items!',
    coreHi: 'Child click hone par event upar parents tak ==bubble== hota hai—isi se ==Event Delegation== kaam karta hai: 1,000 items par 1,000 listeners lagane ke bajaye parent `<ul>` par ==1 hi listener== lagao!',
    analogyTitle: 'One Receptionist Answering Calls for All 50 Rooms in a Hotel (Event Delegation)',
    analogyEn: 'Event Delegation ALSO works automatically for **brand-new items added dynamically later**—zero re-attaching listeners needed!',
    analogyHi: 'Event Delegation ka best fayda: baad mein dynamically add hone wale naye items par bhi click apne aap kaam karta hai!',
    steps: [['Bubbling', 'Click fires on Button -> `<li>` -> `<ul>` -> `<body>`'], ['target vs currentTarget', '`e.target` = exact clicked node | `e.currentTarget` = listener owner'], ['Event Delegation', 'Attach 1 listener on `<ul>` + check `e.target.closest("[data-del]")`'], ['stopPropagation()', 'Use sparingly (e.g., clicking inside modal card != backdrop)']],
    jobUse: 'Top-5 frontend JavaScript interview question (Event Bubbling & Event Delegation)!',
    mistake: 'Checking `e.target.matches("button")` when the user clicked an `<span>` icon INSIDE the button—use `e.target.closest("button")` instead!',
    proHabit: 'Always use **`e.target.closest("button")`** inside delegated listeners so clicks on child icons still match cleanly!',
    rule: '1 Parent Listener + e.target.closest() = Fast, Memory-Safe Event Delegation.',
    code: `document.querySelector('#todoList').addEventListener('click', (e) => {
  const delBtn = e.target.closest('[data-delete]');
  if (!delBtn) return;
  delBtn.closest('li').remove();
});`,
    out: 'One tiny listener managing unlimited dynamic list items cleanly.',
    q1: ['Explain Event Delegation and why e.target.closest("button") is better than e.target.tagName === "BUTTON".', 'Event Delegation attaches a single listener to a common parent container and relies on event bubbling to handle child events (including dynamically added items). Using e.target.closest("button") works even when the user clicks an icon or <span> nested inside the button.'],
  },
  {
    id: 127, mod: 15, tInMod: 7,
    title: 'Form submission and validation',
    sub: 'Intercepting `submit`, Reading `FormData`, Validating Fields & Showing Inline Errors',
    coreEn: 'Listen to the ==`<form>` `submit` event==, call ==`e.preventDefault()`== to stop full page reload, read all values cleanly via ==`Object.fromEntries(new FormData(form))`==, validate rules, show inline errors, and submit via `fetch()`!',
    coreHi: '`<form>` ke ==`submit` event== par ==`e.preventDefault()`== lagakar page reload roko, ==`new FormData(form)`== se saare fields 1 line mein padho, validate karo aur API ko bhejo!',
    analogyTitle: 'Checking Every Field on a Shipping Label Before Handing It to the Courier',
    analogyEn: 'Listening to `form.addEventListener("submit", ...)` handles BOTH clicking the Submit button AND pressing the `Enter` key automatically!',
    analogyHi: '`form` ke `submit` event par listener lagane se button click AUR `Enter` key dono automatically handle ho jaate hain!',
    steps: [['Listen On <form>', '`form.addEventListener("submit", handleSubmit)`'], ['Prevent Reload', '`e.preventDefault()` keeps SPA smooth without refresh'], ['Read FormData', '`const data = Object.fromEntries(new FormData(e.target));`'], ['Show Inline Errors', 'Display field-specific message & focus first invalid input']],
    jobUse: 'Exact flow behind every login, signup, checkout, and dashboard creation form.',
    mistake: 'Listening to `click` on the Submit button instead of `submit` on the `<form>` (breaks `Enter` key & native validation!).',
    proHabit: 'Focus the first invalid field (`firstBadInput.focus()`) when validation fails so keyboard & mobile users fix it immediately!',
    rule: 'Listen to form submit + e.preventDefault() + FormData + Clear Inline Errors.',
    code: `form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));
  if (!data.email.includes('@')) return showError('Enter a valid email');
  submitToApi(data);
});`,
    out: 'Clean, reload-free, validated form submission.',
    q1: ['Why should you listen to the "submit" event on the <form> element instead of the "click" event on the Submit <button>?', 'The form submit event fires for both button clicks AND pressing Enter inside any input, and respects built-in HTML5 constraint validation before running your handler.'],
  },
  {
    id: 128, mod: 15, tInMod: 8,
    title: 'Keyboard and pointer events',
    sub: 'Accessible Shortcuts (`Escape`, `Enter`, Arrow Keys) & Unified Pointer Events',
    coreEn: 'Make web apps feel snappy and accessible using ==`keydown` (`e.key === "Escape"` to close modals, `e.key === "Enter"` to confirm)== and unified ==Pointer Events (`pointerdown`, `pointermove`)== that work seamlessly across mouse, touch, and stylus!',
    coreHi: 'Apps ko pro feel do: ==`keydown`== se `Escape` par modal band karo aur `Enter`/Arrow keys support karo—aur touch + mouse dono ke liye modern ==Pointer Events== use karo!',
    analogyTitle: 'Keyboard Power Shortcuts Turning a Webpage Into a Native Desktop App',
    analogyEn: 'Always check modern **`e.key`** (`"Escape"`, `"Enter"`, `"ArrowDown"`) instead of deprecated numeric `e.keyCode === 27`!',
    analogyHi: 'Purane `e.keyCode === 27` ke bajaye hamesha readable modern **`e.key === "Escape"`** use karo!',
    steps: [['Use e.key', '`e.key === "Escape"` closes open modals & dropdowns'], ['Shortcut Combos', '`if ((e.ctrlKey || e.metaKey) && e.key === "k")` opens search!'], ['Pointer Events', '`pointerdown` unifies mouse + mobile touch cleanly'], ['Guard Typing', 'Ignore global letter shortcuts while user is typing in `<input>`!']],
    jobUse: 'Powers `Cmd+K` command palettes, accessible modals, and interactive canvas/drag UIs.',
    mistake: 'Using deprecated `e.keyCode` or letting a global `"/"` shortcut hijack typing inside a comment `<textarea>`!',
    proHabit: 'Always close modals and drawers on **`Escape`** key press—users expect it in every modern web app!',
    rule: 'Use Modern e.key (Never keyCode) + Support Escape on Modals + Guard Input Focus.',
    code: `window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});`,
    out: 'Crisp, native-feeling keyboard modal dismissal.',
    q1: ['Why should you use e.key instead of e.keyCode when handling keyboard events in JavaScript?', 'e.keyCode is deprecated and uses cryptic numbers (like 27 or 13), whereas e.key is standard, readable ("Escape", "Enter", "ArrowDown"), and respects the user keyboard layout.'],
  },
  {
    id: 129, mod: 15, tInMod: 9,
    title: 'Preventing default behavior',
    sub: 'Using `e.preventDefault()` Purposefully on Forms, SPA Links & Custom Drag-and-Drop',
    coreEn: 'Browsers have built-in ==default behaviors== (submitting a `<form>` reloads the page, clicking `<a href>` navigates away, dropping a file opens it in the tab)—call ==`e.preventDefault()`== ONLY when your JavaScript is intentionally replacing that behavior!',
    coreHi: 'Browsers ke default actions hote hain (form submit par page reload, link click par navigation)—jab aap JS/React se khud handle kar rahe ho tab ==`e.preventDefault()`== call karo!',
    analogyTitle: 'Manual Override Switch Letting Your Custom Code Handle the Action Smoothly',
    analogyEn: 'Know the difference: **`e.preventDefault()`** stops the browser default action (like form reload), whereas **`e.stopPropagation()`** stops the event from bubbling up to parent elements!',
    analogyHi: '`e.preventDefault()` browser ka default action rokta hai; `e.stopPropagation()` event ko parent tak bubble hone se rokta hai—dono bilkul alag hain!',
    steps: [['SPA Forms', '`form.addEventListener("submit", (e) => e.preventDefault())`'], ['Drag & Drop', '`dragover` MUST call `e.preventDefault()` to allow dropping!'], ['Do Not Overuse', 'Never block copy/paste (`Ctrl+C/V`) or normal right-click!'], ['Know Both Methods', '`preventDefault()` != `stopPropagation()`']],
    jobUse: 'Tested constantly in JavaScript & React interviews (difference between `preventDefault` and `stopPropagation`).',
    mistake: 'Confusing `e.preventDefault()` with `e.stopPropagation()` or blocking normal browser scrolling/copying.',
    proHabit: 'Never disable paste inside email/password confirm fields—it breaks password managers and frustrates users!',
    rule: 'preventDefault() = Stop Browser Action | stopPropagation() = Stop Event Bubbling.',
    code: `dropZone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Required so browser allows file drop!
  dropZone.classList.add('drag-active');
});`,
    out: 'Smooth custom drag-and-drop file upload zone.',
    q1: ['What is the exact difference between e.preventDefault() and e.stopPropagation()?', 'e.preventDefault() cancels the browser built-in default action for that event (such as reloading the page on form submit or following an <a> link), while e.stopPropagation() stops the event from bubbling further up to parent DOM elements.'],
  },
  {
    id: 130, mod: 15, tInMod: 10,
    title: 'Safe DOM updates',
    sub: 'Preventing XSS Injection, Avoiding Layout Thrashing & Clean State-Driven Rendering',
    coreEn: 'Keep DOM updates ==secure and silky fast==: ==NEVER inject untrusted user/API strings into `innerHTML`== (use `textContent` + `createElement`), ==batch DOM reads before writes== to avoid layout thrashing, and drive UI from a ==single JavaScript state array==!',
    coreHi: 'Safe aur fast DOM updates ke rules: ==untrusted text par kabhi `innerHTML` mat lagao (`textContent` use karo)==, aur UI ko ek ==single state array (`render(state)`)== se update karo—yahi React ka core idea hai!',
    analogyTitle: 'Sanitizing Water Before Drinking & Repainting Cleanly From One Master Blueprint',
    analogyEn: 'Writing a clean `render(tasks)` function that updates DOM from your `tasks` array is the exact bridge to understanding **React**!',
    analogyHi: 'Apne `tasks` array se `render(tasks)` function chalana bilkul wahi mental model hai jis par poora **React** chalta hai!',
    steps: [['Zero XSS', 'Use `textContent` + `createElement` (or sanitize with DOMPurify)'], ['Validate URLs', 'Never put untrusted `javascript:...` strings into `a.href`!'], ['Single State Source', 'Update `tasks` array -> call `render()` -> DOM matches state'], ['Batch Repaints', 'Use `DocumentFragment` & `replaceChildren()` for lists']],
    jobUse: 'Protects web apps from OWASP Top-10 XSS attacks and prepares you directly for React.',
    mistake: 'Mixing UI truth inside DOM text (`parseInt(el.textContent)`) instead of keeping state in JS variables!',
    proHabit: 'Keep data in JavaScript variables/arrays and treat the DOM strictly as a **view** of that state.',
    rule: 'State Drives DOM + textContent Prevents XSS + Validate Dynamic URLs.',
    code: `function renderTasks(tasks) {
  const frag = document.createDocumentFragment();
  for (const t of tasks) {
    const li = document.createElement('li');
    li.textContent = t.title; // 100% XSS-safe even if title has <script>!
    frag.append(li);
  }
  listEl.replaceChildren(frag);
}`,
    out: 'XSS-proof, state-driven, single-repaint DOM rendering.',
    q1: ['What happens if a user types <img src=x onerror=alert("Hacked")> into a comment box and your JS renders it with textContent vs innerHTML?', 'With textContent, the browser safely prints the literal characters on screen without executing anything. With innerHTML, the browser parses the <img> tag, triggers onerror, and executes the attacker JavaScript (XSS)!'],
  },

  // ═══ CHAPTER 16: Advanced JavaScript (131..139) ═══
  {
    id: 131, mod: 16, tInMod: 1,
    title: 'Arrays and common methods',
    sub: 'Immutable vs Mutating Array Methods (`push`, `slice`, `includes`, `some`, `every`, `sort`)',
    coreEn: 'Know which array methods ==mutate the original array (`push`, `pop`, `splice`, `sort`, `reverse`)== vs return a ==safe new copy (`slice`, `concat`, `toSorted`, `map`, `filter`)==—in React state, ALWAYS use non-mutating methods!',
    coreHi: 'Jaano kaunse array methods ==original array badalte hain (`push`, `splice`, `sort`)== aur kaunse ==nayi safe copy dete hain (`slice`, `map`, `filter`, `toSorted`)==—React mein hamesha non-mutating methods use karo!',
    analogyTitle: 'Photocopying a Master List Before Sorting It (`toSorted`) vs Scribbling Over the Original (`sort`)',
    analogyEn: 'Classic JS trap: `[10, 2, 1].sort()` sorts **alphabetically as strings** (`[1, 10, 2]`)! Always pass a numeric comparator: `.toSorted((a, b) => a - b)`!',
    analogyHi: 'Classic JS trap: `[10, 2, 1].sort()` `[1, 10, 2]` deta hai! Numbers sort karne ke liye hamesha `.toSorted((a, b) => a - b)` likho!',
    steps: [['Check Membership', '`arr.includes(x)`, `arr.some(fn)`, `arr.every(fn)`'], ['Safe Numeric Sort', '`[...nums].sort((a, b) => a - b)` or `nums.toSorted(...)`'], ['Safe Copy/Slice', '`arr.slice(0, 5)` grabs top 5 without mutating original'], ['Never Mutate In React', 'Avoid `push`/`splice` directly on state arrays!']],
    jobUse: 'Used daily in product lists, shopping carts, search filters, and React state updates.',
    mistake: 'Calling `prices.sort()` without `(a, b) => a - b` and sorting ₹10,000 before ₹2,000!',
    proHabit: 'Use modern non-mutating `.toSorted((a, b) => a - b)` or `[...arr].sort(...)` so you never mutate state!',
    rule: 'Numeric Sort Always Needs (a, b) => a - b | Prefer Non-Mutating Methods.',
    code: `const prices = [1200, 499, 10000, 250];
const asc = [...prices].sort((a, b) => a - b); // [250, 499, 1200, 10000]
const hasExpensive = prices.some((p) => p > 5000); // true`,
    out: 'Bug-free numeric sorting and clean immutable checks.',
    q1: ['Why does [10, 2, 5].sort() return [10, 2, 5] instead of [2, 5, 10] in JavaScript?', 'By default, Array.prototype.sort() converts elements to strings and sorts them lexicographically ("10" comes before "2"). Always pass a compare function (a, b) => a - b for numeric sorting.'],
  },
  {
    id: 132, mod: 16, tInMod: 2,
    title: 'Objects and nested data',
    sub: 'Dot vs Bracket Notation, `Object.keys/values/entries()` & Immutable Nested Updates',
    coreEn: '==JavaScript Objects== store key-value records (`{ id: 1, name: "Priya", address: { city: "Pune" } }`)—the exact shape of ==JSON APIs & MongoDB documents==! Use dot notation (`user.name`), bracket notation (`user[dynamicKey]`), and `Object.entries()` to iterate cleanly.',
    coreHi: '==JavaScript Objects== key-value data rakhte hain—yahi ==JSON APIs aur MongoDB documents== ka exact format hai! Dynamic keys ke liye `obj[key]` aur looping ke liye `Object.entries(obj)` use karo!',
    analogyTitle: 'Structured JSON Profile Card Holding Nested Details Cleanly',
    analogyEn: 'Remember: Objects are copied **by reference**! `const b = a; b.name = "X"` mutates `a` too—use `{ ...a }` (shallow copy) or `structuredClone(a)` (deep copy)!',
    analogyHi: '`const b = a` copy nahi banata, same reference deta hai—safe copy ke liye `{ ...a }` ya `structuredClone(a)` use karo!',
    steps: [['Dot vs Bracket', '`user.email` (static) | `user[fieldName]` (dynamic key!)'], ['Iterate Objects', '`Object.keys()`, `Object.values()`, `Object.entries()`'], ['Reference Trap', '`const copy = { ...user }` or `structuredClone(user)`'], ['Short Property', '`const user = { name, email };` (ES6 shorthand!)']],
    jobUse: 'Every API response, React props object, and MongoDB document is a nested JS Object.',
    mistake: 'Trying `user.fieldName` when `fieldName` is a variable holding `"email"` (must use `user[fieldName]`!).',
    proHabit: 'Use modern built-in **`structuredClone(obj)`** whenever you need a true deep copy of nested objects!',
    rule: 'Static Key = obj.key | Dynamic Key = obj[key] | Deep Copy = structuredClone().',
    code: `const user = { name: 'Priya', scores: { js: 95, react: 98 } };
for (const [skill, score] of Object.entries(user.scores)) {
  console.log(\`\${skill}: \${score}%\`);
}`,
    out: 'Clean iteration over nested object key-value pairs.',
    q1: ['What is the difference between a shallow copy ({ ...obj }) and a deep copy (structuredClone(obj))?', 'A shallow copy only duplicates top-level properties—nested objects inside it still share the same memory reference. structuredClone() recursively clones all nested objects and arrays so mutating the copy never affects the original.'],
  },
  {
    id: 133, mod: 16, tInMod: 3,
    title: 'map, filter, find, and reduce',
    sub: 'The Big 4 Functional Array Methods Powering 95% of React & Backend Data Pipelines',
    coreEn: 'Master the ==Big 4 Array Methods== (all non-mutating!): ==`.map()`== (transforms every item -> same length, powers React lists!), ==`.filter()`== (keeps matching items), ==`.find()`== (returns 1st matching object), and ==`.reduce()`== (accumulates into 1 total/object)!',
    coreHi: 'JS ke ==Big 4 Array Methods== (har React developer ka daily hathiyar): ==`.map()`== (har item transform), ==`.filter()`== (sirf matching items), ==`.find()`== (pehla match), aur ==`.reduce()`== (total ya summary banana)!',
    analogyTitle: 'Factory Line: Filter Defective Items -> Map Price Tags -> Reduce Into Grand Total',
    analogyEn: 'Chain them cleanly: `cart.filter(i => i.inStock).reduce((sum, i) => sum + i.price * i.qty, 0)` computes an entire e-commerce cart total in 1 readable line!',
    analogyHi: '`.filter()` aur `.reduce()` ko chain karke poora e-commerce cart total 1 clean line mein calculate ho jata hai!',
    steps: [['.map() Transform', '`users.map(u => u.name)` -> new array of same length'], ['.filter() Select', '`tasks.filter(t => !t.done)` -> matching subset'], ['.find() First Match', '`users.find(u => u.id === 42)` -> single object or `undefined`'], ['.reduce() Combine', '`cart.reduce((acc, item) => acc + item.price, 0)` (always pass `0`!)']],
    jobUse: 'Used on EVERY single React page (`items.map(...)`) and tested in 100% of JS interviews!',
    mistake: 'Forgetting the initial value (`0` or `{}`) in `.reduce()` (crashes on empty arrays!) or using `.map()` when you only wanted `.forEach()`.',
    proHabit: 'Always pass an explicit initial value (`0`, `[]`, `{}`) as the 2nd argument to `.reduce()`!',
    rule: 'map = Transform | filter = Subset | find = First Match | reduce = Single Value (Always Pass Initial!).',
    code: `const cart = [{ name: 'Book', price: 400, qty: 2 }, { name: 'Pen', price: 50, qty: 3 }];
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(total); // 950`,
    out: 'Clean, immutable, 1-line cart total calculation.',
    q1: ['What is the difference between .filter() and .find() in JavaScript?', '.filter() checks every element and ALWAYS returns a new Array containing all matches (or [] if none match), whereas .find() stops at the very first matching element and returns that single element directly (or undefined if none match).'],
  },
  {
    id: 134, mod: 16, tInMod: 4,
    title: 'Destructuring',
    sub: 'Unpacking Object Props (`const { name, role } = user`) & Array Values (`const [count, setCount]`)',
    coreEn: '==Destructuring== unpacks values cleanly in 1 line: ==Object Destructuring== (`const { name, role = "user" } = req.body`) matches by key name, and ==Array Destructuring== (`const [count, setCount] = useState(0)`) matches by position!',
    coreHi: '==Destructuring== ek hi line mein object ya array se values bahar nikal deta hai: ==Object (`const { name, role } = user`)== key naam se, aur ==Array (`const [count, setCount] = useState(0)`)== position se!',
    analogyTitle: 'Unpacking Only the 2 Tools You Need Straight Out of a Toolbox in One Motion',
    analogyEn: 'You will write destructuring 50 times a day in MERN: React component props (`function Card({ title, price })`), `useState` hooks, and Express `const { email, password } = req.body;`!',
    analogyHi: 'MERN mein har jagah destructuring chalti hai: React props (`{ title, price }`), `useState`, aur Express `req.body`!',
    steps: [['Object Unpack', '`const { email, role = "student" } = user;` (with default!)'], ['Rename On Unpack', '`const { _id: userId } = doc;` (super clean for MongoDB!)'], ['Array Unpack', '`const [first, second] = items;` (like `useState`!)'], ['Function Params', '`function UserCard({ name, avatar }) { ... }`']],
    jobUse: 'Makes React components and Express controllers dramatically cleaner and shorter.',
    mistake: 'Destructuring `undefined` (`const { name } = user` when `user` is `null` -> TypeError crash! Use `user || {}` or guard first).',
    proHabit: 'Always provide default values when destructuring optional props (`{ title = "Untitled", items = [] }`)!',
    rule: 'Objects Unpack by Key Name | Arrays Unpack by Index | Add Safe Defaults.',
    code: `// MongoDB doc -> clean variable names with defaults
const { _id: id, name, role = 'member' } = userDoc;
const [firstItem, ...remaining] = cartItems;`,
    out: 'Crisp, idiomatic modern JavaScript used across React and Node.',
    q1: ['How do you rename a property while destructuring a JavaScript object (for example, renaming MongoDB _id to id)?', 'Use colon syntax: const { _id: id, name } = doc; — this extracts doc._id into a new local variable named id.'],
  },
  {
    id: 135, mod: 16, tInMod: 5,
    title: 'Spread and rest syntax',
    sub: 'The `...` Operator: Cloning & Merging Objects/Arrays (Spread) vs Collecting Extras (Rest)',
    coreEn: 'Same 3 dots (`...`), two powerful jobs: ==Spread== expands an array/object to ==clone or merge immutably== (`[...tasks, newTask]`, `{ ...user, role: "admin" }`), while ==Rest== collects ==remaining arguments or properties== (`function sum(...nums)`, `const { password, ...safeUser } = user`)!',
    coreHi: 'Same `...` ke 2 kaam: ==Spread== array/object ko clone ya merge karta hai (`[...tasks, newTask]`), aur ==Rest== baaki bachi values ko ikattha karta hai (jaise `const { password, ...safeUser } = user`)!',
    analogyTitle: 'Unpacking a Bag Onto the Table (Spread) vs Sweeping Remaining Items Into a Bag (Rest)',
    analogyEn: 'Super-clean backend security trick: `const { passwordHash, ...publicUser } = user;` strips the password hash before sending JSON back to React!',
    analogyHi: 'Backend mein `const { password, ...safeUser } = user;` likh kar 1 line mein password strip karke safe user JSON bhej sakte ho!',
    steps: [['Spread Array', '`const next = [...items, newItem];` (React state standard!)'], ['Spread Object', '`const updated = { ...user, active: true };` (later key wins!)'], ['Rest In Params', '`const sum = (...nums) => nums.reduce((a, b) => a + b, 0);`'], ['Rest To Omit Key', '`const { password, ...safeUser } = user;`']],
    jobUse: 'Essential for immutable React state updates and clean Express API responses.',
    mistake: 'Thinking `{ ...nestedObj }` deep-clones inner objects (Spread is SHALLOW—copy nested levels explicitly!).',
    proHabit: 'Remember key order in Object Spread: put `...original` FIRST and the overridden field LAST (`{ ...user, name: "New" }`)!',
    rule: 'Spread = Expand/Clone/Merge | Rest = Collect Remainder | Always Shallow Copy.',
    code: `// 1. Immutable React state update (Spread)
const updatedTodos = [...todos, { id: 3, text: 'Deploy' }];
// 2. Strip sensitive field before API response (Rest)
const { passwordHash, ...safeUser } = dbUser;`,
    out: 'Clean immutable state updates and leak-free API payloads.',
    q1: ['In const updated = { name: "A", ...user }, why might updated.name NOT equal "A"?', 'Because properties placed later overwrite earlier ones! Since ...user comes AFTER name: "A", user.name will overwrite "A". Always put { ...user, name: "A" } to override cleanly.'],
  },
  {
    id: 136, mod: 16, tInMod: 6,
    title: 'Optional chaining and nullish coalescing',
    sub: 'Crash-Proof Nested Access (`user?.profile?.city`) & Zero-Safe Defaults (`count ?? 0`)',
    coreEn: '==Optional Chaining (`?.`)== safely reads deeply nested API/MongoDB fields returning `undefined` instead of crashing (`TypeError`), and ==Nullish Coalescing (`??`)== provides a fallback ONLY for `null` or `undefined`—preserving valid `0` and `""` unlike `||`!',
    coreHi: '==Optional Chaining (`?.`)== nested properties par crash rokta hai (`user?.profile?.city`), aur ==Nullish Coalescing (`??`)== sirf `null`/`undefined` par default deta hai (`0` ya `false` ko nahi udata, `||` ki tarah)!',
    analogyTitle: 'Safety Cushion Checking Every Step Before Walking Forward (`?.`)',
    analogyEn: 'Huge real-world bug fix: if a product has `discount = 0`, `discount || 10` WRONGLY gives `10` because `0` is falsy! `discount ?? 10` correctly keeps `0`!',
    analogyHi: 'Agar `discount = 0` hai toh `discount || 10` galat `10` de dega! `discount ?? 10` sahi `0` rakhta hai!',
    steps: [['Safe Property', '`order?.customer?.address?.city` (zero crash!)'], ['Safe Call/Index', '`onClose?.()` | `items?.[0]?.name`'], ['Nullish ??', '`const count = data?.count ?? 0;` (respects `0` and `false`!)'], ['Combine Both', '`const city = user?.address?.city ?? "Unknown";`']],
    jobUse: 'Eliminates the #1 runtime crash in React apps (`Cannot read properties of undefined`).',
    mistake: 'Using `||` instead of `??` for numeric fields like `score`, `price`, or `discount` where `0` is a valid value!',
    proHabit: 'Default to **`??`** for fallback values whenever `0`, `false`, or `""` are valid inputs.',
    rule: '?. Prevents Undefined Crashes | ?? Only Falls Back on null/undefined (Keeps 0 & false!).',
    code: `const user = { name: 'Rahul', credits: 0 };
console.log(user.credits || 100);          // 100 (BUG! 0 was valid!)
console.log(user.credits ?? 100);          // 0   (CORRECT!)
console.log(user?.address?.city ?? 'N/A'); // "N/A" (Zero crash!)`,
    out: 'Crash-proof, zero-safe production JavaScript.',
    q1: ['What is the exact difference between || (OR) and ?? (Nullish Coalescing) when providing default values?', '|| falls back on ANY falsy value (false, 0, "", NaN, null, undefined), whereas ?? ONLY falls back when the left side is strictly null or undefined—safely preserving valid values like 0, false, and "".'],
  },
  {
    id: 137, mod: 16, tInMod: 7,
    title: 'Modules: import and export',
    sub: 'Organizing Scalable Apps With ES Modules (Named Exports, Default Exports & Clean Imports)',
    coreEn: '==ES Modules (`import` / `export`)== split large apps into clean, encapsulated files with zero global pollution: use ==Named Exports (`export function formatINR`)== for multi-utility files and ==Default Export (`export default App`)== for primary React page/component files.',
    coreHi: '==ES Modules (`import` / `export`)== bade codebases ko clean files mein todte hain—utilities ke liye ==Named Export (`export const`)== aur main React components ke liye ==Default Export== use hota hai!',
    analogyTitle: 'Modular Electronics Where Each Circuit Board Plugs In Cleanly via Labeled Pins',
    analogyEn: 'Named exports require exact curly braces (`import { formatINR } from "./utils"`) so VS Code refactoring & tree-shaking work cleanly; Default exports can be imported with any name (`import Navbar from "./Navbar"`).',
    analogyHi: 'Named export `{ formatINR }` exact naam se import hota hai (tree-shaking best!), aur Default export bina `{}` ke!',
    steps: [['Named Export', '`export const API_URL = ...;` -> `import { API_URL } from ...`'], ['Default Export', '`export default function App() {}` -> `import App from ...`'], ['Enable In Browser', '`<script type="module" src="./main.js"></script>`'], ['Enable In Node', 'Set `"type": "module"` in `package.json`']],
    jobUse: 'Every single React, Vite, and modern Node.js file uses ES Modules.',
    mistake: 'Forgetting `{}` around a Named Export (`import formatINR from "./utils"` -> SyntaxError!).',
    proHabit: 'Prefer **Named Exports** for utility files so autocomplete and Vite dead-code tree-shaking stay razor-sharp!',
    rule: 'Named Export -> import { ExactName } | Default Export -> import AnyName.',
    code: `// utils/currency.js (Named Export)
export const formatINR = (n) => \`₹\${n.toLocaleString('en-IN')}\`;

// Checkout.jsx
import { formatINR } from './utils/currency.js';`,
    out: 'Clean, tree-shakable modular codebase.',
    q1: ['What is the difference between a Named Export and a Default Export in ES Modules?', 'A file can have many Named Exports imported strictly by name inside curly braces ({ fnA, fnB }), whereas a file can have at most ONE Default Export imported without curly braces under any local name.'],
  },
  {
    id: 138, mod: 16, tInMod: 8,
    title: 'ES6+ best practices',
    sub: 'Writing Clean, Readable, Self-Documenting Modern JavaScript That Passes Senior Code Reviews',
    coreEn: 'Write ==senior-level ES6+ JavaScript== by combining ==`const` default, descriptive camelCase names, small single-purpose functions, Guard Clauses, immutability (`map`/`filter`/spread), `?.`/`??`, and zero magic numbers==!',
    coreHi: '==Senior-level ES6+ JS== ka mantra: ==`const` default, clear variable names, chhote focused functions, Guard Clauses, immutable updates (`map`/`filter`/spread), `?.`/`??` aur zero magic numbers==!',
    analogyTitle: 'Writing Clear Prose Another Engineer Understands in 10 Seconds Six Months Later',
    analogyEn: 'Code is read **10x more often than it is written**—clever 1-line golf tricks confuse teammates; clear, simple ES6+ wins every code review!',
    analogyHi: 'Code likha 1 baar jata hai, padha 10 baar jata hai—isliye confusing smart-tricks ke bajaye clean, readable ES6+ likho!',
    steps: [['Meaningful Names', '`isUserVerified`, `MAX_RETRY_COUNT` (never `x`, `d2`, `temp`)'], ['No Magic Numbers', '`const FREE_SHIPPING_MIN = 499;` instead of bare `499`'], ['Stay Immutable', 'Never mutate function input arrays/objects unexpectedly'], ['Small Pure Helpers', 'Extract complex logic into clean testable 15-line functions']],
    jobUse: 'Directly determines whether you pass technical take-home assignments and PR reviews.',
    mistake: 'Writing cryptic 1-letter variable names (`a, b, arr2`) and 150-line mega-functions.',
    proHabit: 'Before opening a Pull Request, re-read your own diff asking: "Could a junior teammate understand every line without asking me?"',
    rule: 'Clarity Beats Cleverness | Named Constants | Small Pure Functions.',
    code: `const FREE_SHIPPING_THRESHOLD = 499;

export function calcShipping(subtotal = 0) {
  if (subtotal <= 0) return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 49;
}`,
    out: 'Crystal-clear, self-documenting, interview-ready business logic.',
    q1: ['What is a "magic number" in code and why should you replace it with a named constant?', 'A magic number is an unexplained raw literal like 499 or 86400000 buried in logic. Replacing it with const FREE_SHIPPING_THRESHOLD = 499 or const ONE_DAY_MS = 86_400_000 makes the intent immediately obvious and updates cleanly in one place.'],
  },
  {
    id: 139, mod: 16, tInMod: 9,
    title: 'Error handling',
    sub: 'Defensive `try / catch / finally`, Throwing Meaningful `new Error()` & Never Swallowing Bugs',
    coreEn: 'Prevent app crashes with ==`try { ... } catch (err) { ... } finally { ... }`==—wrap risky operations (`JSON.parse`, `fetch`, `localStorage`), throw descriptive ==`new Error("...")`==, and ALWAYS log or display helpful feedback (never empty `catch {}`!).',
    coreHi: 'Risky code (`JSON.parse`, `fetch`, DB calls) ko ==`try / catch / finally`== mein wrap karo—clear `new Error()` throw karo aur `catch` block kabhi khali mat chhodo!',
    analogyTitle: 'Safety Net Under a Trapeze Artist Catching Falls Gracefully Without Stopping the Show',
    analogyEn: '`finally` ALWAYS runs whether `try` succeeded OR threw an error—making it the perfect spot for `setIsLoading(false)` so spinners never freeze forever!',
    analogyHi: '`finally` hamesha chalta hai (success ho ya error!)—isliye `setIsLoading(false)` hamesha `finally` mein rakho taaki spinner kabhi atke nahi!',
    steps: [['Wrap Risky Ops', '`JSON.parse()`, `fetch()`, file/DB calls inside `try/catch`'], ['Throw Real Errors', '`throw new Error("Invalid price")` (preserves stack trace!)'], ['Never Empty Catch', 'Log error + show friendly user message in `catch`'], ['Cleanup In finally', 'Always stop loading spinners inside `finally`']],
    jobUse: 'Critical for production stability across both React frontends and Express backends.',
    mistake: 'Writing `catch (e) {}` (silently hides bugs for weeks!) or forgetting `finally` so loading spinners spin forever on error.',
    proHabit: 'Always write a safe `safeJsonParse(str, fallback)` helper when reading `localStorage` so corrupted storage never crashes your app!',
    rule: 'try Risky Code -> catch Log & Recover -> finally Stop Spinners (Never Empty catch!).',
    code: `function safeParseJSON(raw, fallback = null) {
  try {
    return JSON.parse(raw);
  } catch (err) {
    console.error('JSON parse failed:', err.message);
    return fallback;
  }
}`,
    out: 'Crash-proof JSON parsing with clean error visibility.',
    q1: ['Why is the finally block in try/catch/finally so useful when fetching data in a web app?', 'Code inside finally executes unconditionally whether the try block succeeds or throws an error—making it the ideal place to run cleanup such as setIsLoading(false) so loading spinners never stay stuck.'],
  },

  // ═══ CHAPTER 17: Asynchronous JavaScript (140..149) ═══
  {
    id: 140, mod: 17, tInMod: 1,
    title: 'Synchronous vs asynchronous code',
    sub: 'Why Single-Threaded JS Uses the Event Loop So Slow API Calls Never Freeze the Browser',
    coreEn: 'JavaScript is ==single-threaded== (1 call stack). ==Synchronous code== runs line-by-line blocking everything until done, whereas ==Asynchronous code (`fetch`, `setTimeout`, DB queries)== offloads slow I/O and resumes via the ==Event Loop== so buttons and animations stay 60fps smooth!',
    coreHi: 'JavaScript ==single-threaded== hai—==Synchronous code== line-by-line wait karta hai, jabki ==Asynchronous code (`fetch`, timers, DB calls)== background mein chalta hai aur ==Event Loop== se wapas aata hai taaki browser freeze na ho!',
    analogyTitle: 'Smart Waiter Taking Table 2 Order While Table 1 Food Cooks in the Kitchen',
    analogyEn: 'If `fetch()` were synchronous, clicking "Load Products" would completely freeze your mouse, scrolling, and animations until the server replied!',
    analogyHi: 'Agar API calls synchronous hote toh data load hote waqt poora browser aur scroll freeze ho jata!',
    steps: [['Call Stack', 'Executes synchronous JS statements immediately'], ['Web/Node APIs', 'Handles slow network `fetch()`, timers & disk I/O off-stack'], ['Microtask Queue', 'Resolved Promises (`.then` / `await`) run BEFORE `setTimeout`!'], ['Event Loop', 'Pushes ready callbacks onto Call Stack once stack is empty']],
    jobUse: 'The #1 most-asked senior JavaScript interview topic (Event Loop + Microtasks vs Macrotasks)!',
    mistake: 'Thinking `setTimeout(fn, 0)` runs before a resolved `Promise.resolve().then(...)` (Promises are Microtasks and ALWAYS run first!).',
    proHabit: 'Visualize the 3 boxes: **Call Stack -> Microtask Queue (Promises) -> Macrotask Queue (`setTimeout`)**.',
    rule: 'Sync Runs First -> Then Microtasks (Promises) -> Then Macrotasks (setTimeout).',
    code: `console.log('1. Sync');
setTimeout(() => console.log('4. Macrotask (Timer)'), 0);
Promise.resolve().then(() => console.log('3. Microtask (Promise)'));
console.log('2. Sync');
// Exact Output: 1 -> 2 -> 3 -> 4!`,
    out: 'Complete mastery of the JavaScript Event Loop execution order.',
    q1: ['In JavaScript, if both Promise.resolve().then(A) and setTimeout(B, 0) are queued at the same time, which runs first and why?', 'A (the Promise callback) ALWAYS runs first because Promises go into the high-priority Microtask Queue, which the Event Loop completely drains before picking the next callback from the Macrotask Queue (setTimeout).'],
  },
  {
    id: 141, mod: 17, tInMod: 2,
    title: 'Callbacks and promises',
    sub: 'Escaping Callback Hell With Promises (`Pending -> Fulfilled / Rejected`) & `Promise.all()`',
    coreEn: 'A ==Promise== represents an ==eventual async result== in 3 states: ==Pending, Fulfilled (`.then`), or Rejected (`.catch`)==—replacing messy nested Callback Hell with clean chains and ==`Promise.all([p1, p2])`== to run independent API calls in parallel!',
    coreHi: '==Promise== ek future async result hai jiske 3 states hote hain: ==Pending, Fulfilled ya Rejected==—ye nested Callback Hell khatam karta hai aur ==`Promise.all()`== se multiple APIs ek saath parallel chalte hain!',
    analogyTitle: 'Restaurant Order Buzzer: Waiting (Pending) -> Food Ready (Fulfilled) or Sold Out (Rejected)',
    analogyEn: 'Running 2 independent API calls with `Promise.all([fetchUsers(), fetchProducts()])` finishes in 200ms instead of 400ms sequentially!',
    analogyHi: '`Promise.all([fetchUsers(), fetchProducts()])` dono APIs ko parallel chalata hai—load time seedha aadha ho jata hai!',
    steps: [['3 Promise States', 'Pending -> Fulfilled (resolved) OR Rejected (error)'], ['Clean Chaining', '`.then()` -> `.catch()` -> `.finally()` (flat, no pyramid!)'], ['Parallel Speed', '`Promise.all([p1, p2])` runs independent fetches together'], ['Partial Resilience', '`Promise.allSettled()` succeeds even if 1 item fails!']],
    jobUse: 'Foundation of `fetch()`, Mongoose queries, Axios, and React data loaders.',
    mistake: 'Awaiting 3 independent API calls one-by-one sequentially instead of running them in parallel with `Promise.all()`!',
    proHabit: 'Use `Promise.all()` when all calls must succeed, and `Promise.allSettled()` when you want partial results even if one fails.',
    rule: 'Promises Cure Callback Hell | Independent Calls -> Run Parallel With Promise.all().',
    code: `// Run 2 independent API calls in parallel (2x faster!)
const [userRes, ordersRes] = await Promise.all([
  fetch('/api/me'),
  fetch('/api/orders'),
]);`,
    out: 'Parallel async execution cutting page load latency in half.',
    q1: ['What is the difference between Promise.all() and Promise.allSettled()?', 'Promise.all() rejects immediately as soon as ANY single promise rejects (fail-fast), whereas Promise.allSettled() waits for every promise to finish and returns an array describing each item status ("fulfilled" or "rejected").'],
  },
  {
    id: 142, mod: 17, tInMod: 3,
    title: 'async and await',
    sub: 'Writing Clean, Readable Synchronous-Looking Async Code Built on Top of Promises',
    coreEn: '==`async` / `await`== is clean syntax over Promises: marking a function `async` makes it ALWAYS return a Promise, and ==`await`== pauses ONLY inside that async function until the Promise resolves—making complex API & MongoDB flows effortlessly readable!',
    coreHi: '==`async` / `await`== Promises ko clean, readable code mein badal deta hai: `async` function hamesha Promise return karta hai, aur `await` bina browser freeze kiye result aane ka cleanly wait karta hai!',
    analogyTitle: 'Reading a Recipe Step-by-Step Instead of Tangled `.then().then().then()` Callbacks',
    analogyEn: 'Remember: `await` does NOT block the browser—it simply pauses that specific async function while the Event Loop keeps animations and clicks smooth!',
    analogyHi: '`await` browser ko block nahi karta—wo sirf us async function ko pause karta hai jabki baaki UI smooth chalta rehta hai!',
    steps: [['Mark async', '`async function loadUser(id) { ... }`'], ['Await Promises', '`const res = await fetch(url); const data = await res.json();`'], ['Wrap try/catch', 'Always handle rejections cleanly with `try/catch`'], ['Avoid Serial Traps', 'Use `Promise.all()` when awaiting independent requests']],
    jobUse: 'Used in 99% of modern React API services and Express/Mongoose backend controllers.',
    mistake: 'Using `async` inside `array.forEach(async ...)` (forEach does NOT wait for `await`! Use `for...of` or `Promise.all(arr.map(...))` instead!).',
    proHabit: 'Never use `async/await` inside `.forEach()`—use `for...of` (sequential) or `Promise.all(arr.map(...))` (parallel)!',
    rule: 'async Always Returns a Promise | Never Use await Inside .forEach().',
    code: `async function getProfile(userId) {
  const res = await fetch(\`/api/users/\${userId}\`);
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}`,
    out: 'Clean, linear, production-grade async function.',
    q1: ['Why should you avoid using async/await inside Array.prototype.forEach()?', 'forEach() ignores returned Promises and does not pause between iterations—meaning the surrounding function finishes before the async work completes. Use for...of for sequential awaits or Promise.all(arr.map(...)) for parallel execution.'],
  },
  {
    id: 143, mod: 17, tInMod: 4,
    title: 'try/catch for async errors',
    sub: 'Catching Both Network Failures AND HTTP `404`/`500` Responses Safely',
    coreEn: 'Wrap every `await` chain in ==`try / catch / finally`==—AND remember the #1 `fetch()` gotcha: ==`fetch()` does NOT throw on HTTP `404` or `500`!== You MUST explicitly check ==`if (!res.ok) throw new Error(...)`== inside `try`!',
    coreHi: 'Har `await` ko ==`try / catch / finally`== mein wrap karo—aur yaad rakho ==`fetch()` HTTP `404`/`500` par error throw NAHI karta!== Isliye hamesha ==`if (!res.ok) throw new Error(...)`== check karo!',
    analogyTitle: 'Checking BOTH That the Courier Arrived (`catch`) AND That the Parcel Is Not Broken (`res.ok`)',
    analogyEn: 'Without `if (!res.ok)`, a `404 Not Found` HTML page causes `res.json()` to throw a confusing `Unexpected token <` error instead of a clear `"User not found (404)"`!',
    analogyHi: '`if (!res.ok)` check karne se 404/500 errors clean user message dete hain, cryptic JSON crash nahi!',
    steps: [['Check res.ok', '`if (!res.ok) throw new Error(\`Request failed: \${res.status}\`);`'], ['Catch Network/API', 'Handle offline network errors + thrown HTTP errors in `catch`'], ['Show Friendly UI', 'Display clear Retry button instead of blank screen'], ['Reset In finally', '`finally { setLoading(false); }` always cleans up!']],
    jobUse: 'Prevents unhandled promise rejections and frozen UIs across every MERN app.',
    mistake: 'Assuming `catch (err)` catches a `404` or `500` from `fetch()` automatically—it ONLY catches network failures unless you check `res.ok`!',
    proHabit: 'Build a reusable `apiFetch(url, options)` helper that automatically checks `res.ok` and parses JSON errors cleanly!',
    rule: 'fetch() Only Rejects on Network Failure -> Always Check if (!res.ok) throw Error.',
    code: `async function loadTasks() {
  setLoading(true);
  try {
    const res = await fetch('/api/tasks');
    if (!res.ok) throw new Error(\`Server error (\${res.status})\`);
    return await res.json();
  } catch (err) {
    showErrorBanner(err.message);
  } finally {
    setLoading(false);
  }
}`,
    out: 'Bulletproof async error handling with guaranteed spinner cleanup.',
    q1: ['Why does fetch("/api/does-not-exist") NOT jump into the catch block when the server returns 404 Not Found?', 'Because fetch() only rejects its Promise on actual network failures (like offline or DNS failure), not on HTTP error status codes like 400, 404, or 500. You must manually check if (!res.ok) and throw an Error.'],
  },
  {
    id: 144, mod: 17, tInMod: 5,
    title: 'HTTP methods and status codes',
    sub: 'CRUD Verbs (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) & Must-Know Status Codes (`200–500`)',
    coreEn: 'REST APIs communicate via ==5 HTTP Methods== (`GET` read, `POST` create, `PUT` full replace, `PATCH` partial update, `DELETE` remove) and ==Status Code Families== (`2xx` Success: `200`, `201`; `4xx` Client Error: `400`, `401`, `403`, `404`, `409`; `5xx` Server Error: `500`)!',
    coreHi: 'REST APIs ke ==5 Methods== (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) aur ==Status Codes== (`200` OK, `201` Created, `400` Bad Input, `401` Login Needed, `403` Forbidden, `404` Not Found, `500` Server Crash) har full-stack developer ko yaad hone chahiye!',
    analogyTitle: 'Universal Postal Tracking Codes Instantly Explaining What Happened to Your Request',
    analogyEn: 'Know `401` vs `403` cold for interviews: **`401 Unauthorized`** = "Who are you? Log in first!" | **`403 Forbidden`** = "I know who you are, but you do not have Admin permission!"',
    analogyHi: '**`401`** = Login nahi kiya (Authentication); **`403`** = Login hai par Admin permission nahi (Authorization)!',
    steps: [['2xx Success', '`200 OK`, `201 Created` (POST), `204 No Content` (DELETE)'], ['4xx Client Fault', '`400` Bad Input, `401` Unauth, `403` Forbidden, `404` Missing, `409` Conflict'], ['5xx Server Fault', '`500 Internal Server Error`, `503 Service Unavailable`'], ['PUT vs PATCH', '`PUT` replaces full record; `PATCH` updates specific fields']],
    jobUse: 'Used every single day when building Express APIs and debugging Chrome Network tab!',
    mistake: 'Returning HTTP `200 OK` with `{ error: "Not found" }` instead of proper `404` status code!',
    proHabit: 'Always return accurate HTTP status codes in Express (`201` on create, `400` on validation error, `401`/`403` on auth).',
    rule: '2xx = OK | 401 = Log In | 403 = No Permission | 404 = Missing | 500 = Server Bug.',
    code: `// Essential HTTP Status Reference:
// 200 OK | 201 Created | 204 No Content
// 400 Bad Request | 401 Unauthorized | 403 Forbidden | 404 Not Found | 409 Conflict
// 500 Internal Server Error`,
    out: 'Instant fluency reading Network tab and designing REST APIs.',
    q1: ['What is the exact difference between HTTP 401 Unauthorized and HTTP 403 Forbidden?', '401 means the user is not authenticated (missing or expired login/JWT token). 403 means the server knows who the user is, but they lack the required role or permission to access that resource.'],
  },
  {
    id: 145, mod: 17, tInMod: 6,
    title: 'fetch() basics',
    sub: 'Making `GET` & `POST` JSON Requests With Proper Headers, `JSON.stringify` & `res.ok`',
    coreEn: 'Browser built-in ==`fetch(url, options)`== sends HTTP requests natively: `GET` is the default, while `POST`/`PATCH`/`DELETE` pass ==`method`==, ==`headers: { "Content-Type": "application/json" }`==, and ==`body: JSON.stringify(payload)`==!',
    coreHi: 'Browser ka built-in ==`fetch(url, options)`== API calls bhejta hai—`POST`/`PATCH` mein ==`method`, `headers: { "Content-Type": "application/json" }` aur `body: JSON.stringify(data)`== dena zaroori hai!',
    analogyTitle: 'Sending a Sealed JSON Envelope With the Right Postage Label (`Content-Type`)',
    analogyEn: 'Forgetting `"Content-Type": "application/json"` causes Express `express.json()` middleware to leave `req.body` completely empty (`undefined`)!',
    analogyHi: '`"Content-Type": "application/json"` header bhool gaye toh Express backend mein `req.body` khali aata hai!',
    steps: [['GET Request', '`const res = await fetch("/api/products");`'], ['POST JSON', 'Set `method: "POST"`, `Content-Type` header & `JSON.stringify`'], ['Auth Header', 'Add `Authorization: \`Bearer \${token}\`` for protected APIs'], ['Check & Parse', '`if (!res.ok) throw ...; const data = await res.json();`']],
    jobUse: 'Connects every React frontend cleanly to Node/Express or third-party APIs.',
    mistake: 'Passing a raw JS object to `body: { name: "A" }` without `JSON.stringify()` (sends `"[object Object]"`!).',
    proHabit: 'Always include BOTH `headers: { "Content-Type": "application/json" }` AND `body: JSON.stringify(payload)` on JSON `POST`/`PATCH` calls!',
    rule: 'POST JSON Always Needs: method + Content-Type Header + JSON.stringify(body) + res.ok Check.',
    code: `const res = await fetch('/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Master MERN', completed: false }),
});
if (!res.ok) throw new Error(\`Failed: \${res.status}\`);
const created = await res.json();`,
    out: 'Clean, standards-compliant JSON POST request.',
    q1: ['What happens on an Express.js backend if your frontend fetch() POST request omits the "Content-Type": "application/json" header?', 'Express express.json() middleware will not recognize the body as JSON, leaving req.body empty/undefined even though you sent a valid JSON string.'],
  },
  {
    id: 146, mod: 17, tInMod: 7,
    title: 'Parsing JSON',
    sub: 'Converting Between JSON Text & JS Objects (`JSON.stringify`, `JSON.parse`, `res.json()`)',
    coreEn: '==JSON (JavaScript Object Notation)== is the universal text format for APIs and `localStorage`: use ==`JSON.stringify(obj)`== (JS -> text for sending/saving), ==`JSON.parse(str)`== (text -> JS object), and ==`await res.json()`== on `fetch()` responses!',
    coreHi: '==JSON== APIs aur `localStorage` ki universal text language hai: JS se text banane ke liye ==`JSON.stringify()`==, text se wapas JS object banane ke liye ==`JSON.parse()`==, aur fetch mein ==`await res.json()`==!',
    analogyTitle: 'Flat-Packing Furniture Into a Shipping Box (`stringify`) & Reassembling It (`parse`)',
    analogyEn: 'Remember JSON strict rules: keys & strings MUST use **double quotes (`"key"`)**, NO trailing commas, and NO functions/`undefined`!',
    analogyHi: 'JSON mein keys hamesha **double quotes (`"name"`)** mein hoti hain aur trailing comma allowed nahi hota!',
    steps: [['JS -> JSON Text', '`JSON.stringify(data)` for `fetch` body & `localStorage`'], ['JSON Text -> JS', '`JSON.parse(text)` inside `try/catch` (never trust raw strings!)'], ['Fetch Helper', '`const data = await res.json();` (async!)'], ['Handle 204 Empty', 'Skip `res.json()` on `204 No Content` DELETE responses!']],
    jobUse: 'Used on every single API request, response, config file (`package.json`), and localStorage save.',
    mistake: 'Calling `await res.json()` on a `204 No Content` response (throws `Unexpected end of JSON input`!).',
    proHabit: 'Check `if (res.status === 204) return null;` before calling `await res.json()` in your API client!',
    rule: 'stringify = Send/Store | parse / res.json() = Read | Guard 204 & try/catch.',
    code: `// Save & read safely in localStorage
localStorage.setItem('cart', JSON.stringify([{ id: 1, qty: 2 }]));
const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');`,
    out: 'Persistent client-side JSON storage with safe empty fallback.',
    q1: ['Why can calling await res.json() on a successful 204 No Content DELETE response throw an error?', 'Because a 204 response has an empty body by definition, so attempting to parse empty text as JSON throws a SyntaxError. Check res.status === 204 before calling res.json().'],
  },
  {
    id: 147, mod: 17, tInMod: 8,
    title: 'Loading, success, empty, and error states',
    sub: 'The 4 Mandatory UI States Every Production Data Screen Must Handle Gracefully',
    coreEn: 'Never build ONLY the "happy path"! Every API-driven screen must render ==4 crisp UI states==: ==1) Loading== (skeleton/spinner), ==2) Error== (clear message + Retry button), ==3) Empty== (helpful empty state when `items.length === 0`), and ==4) Success== (rendered data)!',
    coreHi: 'Sirf "happy path" mat banao! Har API screen par ==4 UI states== hone chahiye: ==1) Loading (skeleton/spinner), 2) Error (message + Retry button), 3) Empty (jab 0 items hon), aur 4) Success (real data)==!',
    analogyTitle: 'Restaurant Status Updates: Cooking (Loading) -> Ready (Success) -> Sold Out (Empty) -> Kitchen Delay (Error)',
    analogyEn: 'Showing a blank white screen while data loads makes users think your app crashed—clean Loading + Empty + Error states instantly feel like a senior SaaS product!',
    analogyHi: 'Khali white screen dikhane se user ko lagta hai app hang ho gaya—Loading, Empty aur Error states app ko 10x professional banate hain!',
    steps: [['1. Loading State', 'Skeleton loader or spinner while `isLoading === true`'], ['2. Error State', 'Friendly error card + working "Try Again" button'], ['3. Empty State', 'Helpful message + CTA ("No tasks yet — Create your first!")'], ['4. Success State', 'Render the verified data list cleanly']],
    jobUse: 'Top UX detail interviewers check immediately when reviewing live React portfolio demos!',
    mistake: 'Showing `"No items found"` for 1 second BEFORE the API finishes loading because `items` started as `[]` and `isLoading` started as `false`!',
    proHabit: 'Initialize `isLoading` to `true` on initial fetch screens so users see a clean Skeleton instead of a flashing Empty message!',
    rule: 'Every Data Screen = Loading + Error (With Retry) + Empty + Success.',
    code: `if (isLoading) return '<p>Loading courses...</p>';
if (error)     return \`<p class="error">\${error} <button id="retry">Retry</button></p>\`;
if (!items.length) return '<p>No courses found yet.</p>';
return renderList(items);`,
    out: 'Polished, resilient, production-grade UI covering every scenario.',
    q1: ['Why should a page that fetches data on mount initialize isLoading to true rather than false?', 'If isLoading starts as false and items starts as [], the user briefly sees a jarring flash of "No items found" before the fetch even begins. Starting with isLoading = true shows a smooth loading skeleton immediately.'],
  },
  {
    id: 148, mod: 17, tInMod: 9,
    title: 'CORS basics',
    sub: 'Understanding Cross-Origin Resource Sharing & Fixing the #1 MERN API Error Properly',
    coreEn: '==CORS (Cross-Origin Resource Sharing)== is a ==browser security guard== blocking `http://localhost:5173` (React) from reading responses from `http://localhost:5000` (Express) UNLESS the ==Express server explicitly allows that origin== via `cors({ origin: "..." })`!',
    coreHi: '==CORS== browser ka ==security rule== hai jo `localhost:5173` (React) ko `localhost:5000` (Express) ka data padhne se rokta hai—fix frontend mein nahi, ==Express backend par `cors({ origin })`== lagakar hota hai!',
    analogyTitle: 'VIP Guest List Kept at the Server Gate Checking Which Frontend Origins Are Allowed In',
    analogyEn: 'Remember: CORS is enforced by **the browser**, NOT Postman/Thunder Client—that is why an API works in Postman yet fails in React until Express sends `Access-Control-Allow-Origin`!',
    analogyHi: 'Isliye API Postman mein chal jata hai par browser mein CORS error deta hai—kyunki CORS sirf browser check karta hai!',
    steps: [['What Is Origin', 'Protocol + Domain + Port (`http://localhost:5173` != `:5000`!)'], ['Fix On Backend', 'Install `cors` in Express: `app.use(cors({ origin: CLIENT_URL }))`'], ['With Cookies/Auth', 'Set `credentials: true` on Express + `credentials: "include"` in fetch'], ['Never Wildcard+Creds', 'Browsers reject `origin: "*"` combined with `credentials: true`!']],
    jobUse: 'Every single MERN developer hits CORS on Day 1 of connecting React to Express—knowing the real fix saves hours!',
    mistake: 'Installing sketchy Chrome "Disable CORS" extensions instead of configuring Express `cors()` properly!',
    proHabit: 'Store your frontend URL in backend `.env` (`CLIENT_URL=https://myapp.vercel.app`) and allowlist ONLY that origin in production!',
    rule: 'CORS Is a Browser Check Fixed on the Backend Server via Explicit Origin Allowlist.',
    code: `// Express.js Backend (Proper Production CORS)
import cors from 'cors';
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));`,
    out: 'Clean, secure React-to-Express cross-origin communication.',
    q1: ['Why does an Express API endpoint work in Postman yet throw a CORS error when called from React in Chrome?', 'CORS is a security policy enforced solely by web browsers when a frontend page calls a different origin (different domain, protocol, or port). Postman is not a browser, so it ignores CORS. Fix it on the Express server by configuring the cors middleware with the allowed frontend origin.'],
  },
  {
    id: 149, mod: 17, tInMod: 10,
    title: 'AbortController overview',
    sub: 'Canceling Stale `fetch()` Calls on Fast Search Typing & React Component Unmounts',
    coreEn: '==`AbortController`== lets you ==cancel in-flight `fetch()` requests== (`signal: controller.signal`)—eliminating race conditions in ==live search boxes== (where an older slow search overwrites a newer result!) and preventing memory warnings when a React component unmounts!',
    coreHi: '==`AbortController`== purane chal rahe `fetch()` requests ko ==cancel== kar deta hai—live search mein purana slow result naye result ko overwrite nahi karta aur React unmount cleanup clean rehta hai!',
    analogyTitle: 'Canceling Your First Pizza Order Automatically When You Change Your Mind 2 Seconds Later',
    analogyEn: 'User types `"re"` then `"react"` fast—without `AbortController`, if `"re"` arrives slower than `"react"`, the screen weirdly shows results for `"re"`! Aborting the old request fixes it 100%!',
    analogyHi: 'Fast typing par purana `"re"` request cancel kar dene se screen par hamesha latest `"react"` ka hi exact result dikhta hai!',
    steps: [['Create Controller', '`const controller = new AbortController();`'], ['Pass Signal', '`fetch(url, { signal: controller.signal })`'], ['Cancel When Needed', '`controller.abort()` on new keystroke or `useEffect` cleanup'], ['Ignore AbortError', '`if (err.name === "AbortError") return;` inside `catch`!']],
    jobUse: 'Senior-level frontend engineering pattern for live search, autocomplete, and React `useEffect` cleanup.',
    mistake: 'Showing a scary red `"Failed to fetch"` error banner when YOU intentionally aborted the old request (always check `err.name === "AbortError"`!).',
    proHabit: 'Combine **Debouncing (300ms)** + **`AbortController`** on every API-powered search bar!',
    rule: 'AbortController Cancels Stale Requests | Always Ignore err.name === "AbortError".',
    code: `const controller = new AbortController();
fetch(\`/api/search?q=\${query}\`, { signal: controller.signal })
  .then((r) => r.json())
  .catch((err) => {
    if (err.name !== 'AbortError') showError(err.message);
  });
// On next keystroke or unmount: controller.abort();`,
    out: 'Race-condition-free live search and clean React unmount handling.',
    q1: ['What race-condition bug does AbortController prevent in an API-powered live search input?', 'If a user types fast and an earlier slow search response arrives AFTER a newer faster response, the stale results overwrite the current ones. Aborting the previous fetch with AbortController ensures only the latest query updates the UI.'],
  },

  // ═══ CHAPTER 18: JavaScript Mini Projects (150..157) ═══
  {
    id: 150, mod: 18, tInMod: 1,
    title: 'Interactive counter',
    sub: 'Mini Project 1: State Variable -> Event Listeners -> Clamped Bounds -> Clean UI Render',
    coreEn: 'Build an ==Interactive Counter App== mastering the core JS app loop: ==1 single `count` state variable==, ==Increment / Decrement / Reset buttons==, ==disabled floor at 0 (for shopping cart qty!)==, and ==1 pure `render()` function== updating the DOM!',
    coreHi: '==Interactive Counter== se core web app loop seekho: ==1 `count` state variable==, ==+ / - / Reset buttons==, ==0 par minus disable== aur ==1 `render()` function==—bilkul React `useState` ka foundation!',
    analogyTitle: 'E-Commerce Cart Quantity Stepper (`- 1 +`) Built From Scratch',
    analogyEn: 'This tiny 20-line pattern (`Event -> Update State -> Render UI`) is the EXACT architecture behind every React app you will ever build!',
    analogyHi: 'Ye chhota sa `Event -> State Update -> Render` pattern hi aage poore React ka core engine hai!',
    steps: [['Define State', '`let count = 0;` (single source of truth)'], ['Attach Events', 'Click handlers update `count` & call `render()`'], ['Enforce Bounds', 'Disable Minus button when `count <= 0`'], ['Persist Optional', 'Save `count` to `localStorage` so refresh keeps state']],
    jobUse: 'Directly translates into shopping-cart steppers, pagination controls, and React `useState`.',
    mistake: 'Reading the number back out of the DOM (`Number(el.textContent) + 1`) instead of keeping a JS `count` state variable!',
    proHabit: 'Always keep state in JavaScript and derive all DOM text & disabled states inside one `render()` function.',
    rule: 'User Event -> Update JS State -> Call render() -> Clean UI.',
    code: `let count = 0;
const render = () => {
  valueEl.textContent = count;
  decBtn.disabled = count <= 0;
};
incBtn.addEventListener('click', () => { count += 1; render(); });
decBtn.addEventListener('click', () => { if (count > 0) count -= 1; render(); });`,
    out: 'Clean, state-driven interactive counter with zero negative-value bugs.',
    q1: ['Why is keeping count in a JavaScript variable better than reading Number(countEl.textContent) on every click?', 'Keeping state in JavaScript creates a single source of truth that stays clean, testable, easy to persist in localStorage, and mirrors how React state works.'],
  },
  {
    id: 151, mod: 18, tInMod: 2,
    title: 'To-do list',
    sub: 'Mini Project 2: Full Client CRUD (Add, Toggle, Delete, Filter) + Event Delegation + `localStorage`',
    coreEn: 'Build a complete ==To-Do App== implementing ==Create, Read, Update (toggle done), Delete (CRUD)== using an ==array of task objects (`{ id, title, done }`)==, ==Event Delegation== on `<ul>`, ==XSS-safe `textContent`==, and ==`localStorage` persistence==!',
    coreHi: 'Ek complete ==To-Do App== banao: ==Add, Toggle Done, Delete aur Filter (All/Active/Done)== — unique `id` ke saath, ==Event Delegation== aur ==`localStorage`== persistence ke saath!',
    analogyTitle: 'Mini Full-Stack CRUD App Running 100% Inside Your Browser',
    analogyEn: 'Give every task a unique ID (`crypto.randomUUID()`), NEVER rely on array index `0, 1, 2` for deletion (indexes shift when filtering!)!',
    analogyHi: 'Har task ko `crypto.randomUUID()` se unique ID do—array index par delete karoge toh filtered list mein galat task delete ho jayega!',
    steps: [['State Array', '`let todos = loadTodos();` (`{ id, text, done }`)'], ['Add Safely', 'Trim input, reject empty, push with `crypto.randomUUID()`'], ['Delegate Actions', '1 listener on `<ul>` handles both Toggle & Delete by `data-id`'], ['Save & Render', 'Sync `localStorage.setItem` + re-render with `DocumentFragment`']],
    jobUse: 'Classic live-coding interview prompt testing DOM, immutability, Event Delegation, and CRUD!',
    mistake: 'Deleting tasks by array index instead of unique `id`, or rendering user task text with `innerHTML` (XSS bug!).',
    proHabit: 'Use `crypto.randomUUID()` for clean unique client-side IDs and `textContent` for 100% XSS safety.',
    rule: 'Unique IDs + Event Delegation + textContent + localStorage = Bulletproof To-Do App.',
    code: `function addTodo(text) {
  const clean = text.trim();
  if (!clean) return;
  todos = [...todos, { id: crypto.randomUUID(), text: clean, done: false }];
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}`,
    out: 'Persistent, XSS-safe, interview-ready CRUD To-Do application.',
    q1: ['Why should every item in a To-Do app have a unique ID (like crypto.randomUUID()) instead of using its array index?', 'When items are filtered (e.g., showing only Active tasks) or deleted from the middle, array indices shift—causing toggles or deletes to hit the wrong task. Unique IDs always identify the exact item cleanly.'],
  },
  {
    id: 152, mod: 18, tInMod: 3,
    title: 'Form validation app',
    sub: 'Mini Project 3: Real-Time Signup Validator With Per-Field Rules, Password Strength & ARIA Errors',
    coreEn: 'Build a ==Signup Form Validator== checking ==Name (non-empty), Email (valid regex), Password (8+ chars + number + symbol), and Confirm Password match==—showing ==live per-field inline errors==, `aria-invalid`, and clean Submit enablement!',
    coreHi: '==Signup Form Validator== banao jo ==Name, Email, Strong Password (8+ chars + number) aur Confirm Password== live check kare, aur har field ke niche clear inline error dikhaye!',
    analogyTitle: 'Smart Airport Check-In Kiosk Highlighting Only the Exact Field Needing Correction',
    analogyEn: 'Validate on **`blur`** (when user leaves a field) first, then on **`input`** once an error is showing—so users are NOT yelled at in red after typing just 1 character of their email!',
    analogyHi: 'Pehle character type karte hi red error mat dikhao—pehle **`blur`** par check karo, phir error aane ke baad **`input`** par live green karo!',
    steps: [['Pure Validators', 'Write tiny testable rules (`validateEmail`, `validatePassword`)'], ['Reward Early', 'Validate on `blur`, clear error live on `input`'], ['ARIA Feedback', 'Set `aria-invalid` + linked `<p id="...-err">` text'], ['Clean Submit', 'Re-validate all fields on `submit` & focus first error']],
    jobUse: 'Directly powers every real SaaS signup, onboarding, and checkout flow.',
    mistake: 'Showing bright red `"Invalid email!"` the instant the user types the very first letter `"p"`!',
    proHabit: 'Follow the **"Validate on Blur, Clear on Input"** UX gold standard!',
    rule: 'Pure Validator Functions + Validate on Blur / Clear on Input + ARIA Errors.',
    code: `const validators = {
  email: (v) => (/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v) ? '' : 'Enter a valid email'),
  password: (v) => (v.length >= 8 ? '' : 'Minimum 8 characters required'),
};`,
    out: 'Smooth, friendly, accessible real-time form validation.',
    q1: ['What is the "Validate on Blur, Clear on Input" pattern in form UX?', 'You wait until the user finishes typing and leaves the field (blur) before showing an error—avoiding annoying premature red errors—then immediately re-validate on every keystroke (input) so the error disappears the moment they fix it.'],
  },
  {
    id: 153, mod: 18, tInMod: 4,
    title: 'Search and filter interface',
    sub: 'Mini Project 4: Instant Case-Insensitive Search + Category Pills + Debouncing',
    coreEn: 'Build a ==live Search & Category Filter UI== combining ==`query.trim().toLowerCase()`==, ==`.filter()` across multiple criteria (Search + Category)==, ==result count badge==, ==Empty state==, and a ==300ms Debounce helper== for API search!',
    coreHi: '==Live Search + Category Filter== banao: ==case-insensitive `.filter()`==, ==Search + Category combo==, ==result count + Empty State==, aur API calls bachane ke liye ==300ms Debounce==!',
    analogyTitle: 'Smart Librarian Waiting 300ms for You to Finish Speaking Before Running to the Shelf',
    analogyEn: 'Without **Debouncing**, typing `"headphones"` fires 10 separate API calls (`h`, `he`, `hea`...)—a 300ms debounce fires just **1 clean call** after you pause typing!',
    analogyHi: 'Bina **Debounce** ke `"headphones"` type karne par 10 API calls jaate hain—300ms debounce sirf **1 clean call** bhejta hai!',
    steps: [['Combined State', '`let search = ""; let activeCategory = "all";`'], ['Single Filter Fn', 'Apply BOTH `search` AND `activeCategory` cleanly together'], ['Add Debounce', 'Wait 300ms after last keystroke before running heavy search'], ['Empty + Count', 'Show `"Showing 4 of 24 items"` or `"No matches — Reset"`']],
    jobUse: 'Powers e-commerce catalogs, course explorers, admin tables, and SaaS dashboards.',
    mistake: 'Filtering by Category and accidentally wiping out the active Search query (always derive filtered list from BOTH states!).',
    proHabit: 'Always include a 1-click **"Clear Filters"** button inside your Empty State when 0 items match!',
    rule: 'Combine All Active Filters in 1 Pure Function + 300ms Debounce + Clear Filters CTA.',
    code: `const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
};`,
    out: 'Crisp, fast, API-friendly search and multi-filter UI.',
    q1: ['What is Debouncing in JavaScript and why is it essential on an API-powered search input?', 'Debouncing delays running a function until a set quiet period (e.g., 300ms) has passed since the last event—preventing 10 rapid keystrokes from firing 10 redundant API requests and overloading your server.'],
  },
  {
    id: 154, mod: 18, tInMod: 5,
    title: 'Weather UI using an API',
    sub: 'Mini Project 5: Real `fetch()` + `async/await` + Loading/Error/Empty States + `AbortController`',
    coreEn: 'Build a ==live Weather Dashboard== calling a real weather REST API via ==`async/await` + `fetch()`==—handling ==city search, Loading spinner, `404 City Not Found` error banner, offline recovery, and clean metric cards (°C, Humidity, Wind)==!',
    coreHi: 'Real Weather REST API ke saath ==live Weather App== banao: ==`async/await` + `fetch()`==, ==Loading spinner==, ==`404 City Not Found` error handling==, aur ==°C / Humidity / Wind cards==!',
    analogyTitle: 'Mini Full-Stack API Integration Putting All of Chapter 17 Into One Working App',
    analogyEn: 'Encoding city names with `encodeURIComponent(city)` handles spaces safely (`"New Delhi"` -> `"New%20Delhi"`) so URLs never break!',
    analogyHi: '`encodeURIComponent(city)` lagane se `"New Delhi"` jaise space wale city names URL mein kabhi nahi toot-te!',
    steps: [['Encode Query', '`encodeURIComponent(city.trim())` builds safe URLs'], ['Show Loading', 'Disable search button & show spinner during fetch'], ['Check res.ok', 'Handle `404` ("City not found") vs network error cleanly'], ['Render Safely', 'Update temp, condition & humidity using `textContent`']],
    jobUse: 'Proves real third-party REST API integration and async error-handling competence.',
    mistake: 'Hardcoding a paid private API key directly in public frontend JS (use a free keyless API like Open-Meteo or proxy via your Express backend!).',
    proHabit: 'Use **Open-Meteo** (free, no key needed!) for frontend weather demos—and ALWAYS proxy paid secret keys through Express!',
    rule: 'encodeURIComponent + res.ok Check + All 4 UI States + Never Expose Secret Keys.',
    code: `async function fetchCityCoords(city) {
  const url = \`https://geocoding-api.open-meteo.com/v1/search?name=\${encodeURIComponent(city)}&count=1\`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather service unavailable');
  const data = await res.json();
  if (!data.results?.length) throw new Error(\`City "\${city}" not found\`);
  return data.results[0];
}`,
    out: 'Working, resilient real-API weather application.',
    q1: ['Why should you always wrap user search input in encodeURIComponent() before appending it to a fetch() URL?', 'User input can contain spaces, &, ?, or # characters (like "New Delhi" or "AT&T") that break or alter URL query parameters. encodeURIComponent() safely escapes special characters.'],
  },
  {
    id: 155, mod: 18, tInMod: 6,
    title: 'Quiz application',
    sub: 'Mini Project 6: Data-Driven State Machine (Question Index, Score, Lock-After-Answer & Summary)',
    coreEn: 'Build an ==Interactive Quiz App== driven by a clean ==`QUESTIONS` array of objects==—managing ==`currentIndex`, `score`, `hasAnswered` lock (no double-clicking for infinite points!), instant Green/Red feedback, progress bar, and Restart button==!',
    coreHi: 'Data-driven ==Quiz App== banao: ==`QUESTIONS` array==, ==`currentIndex`, `score`, `hasAnswered` lock (double-click cheating roke!), Green/Red feedback, progress bar aur Restart button==!',
    analogyTitle: 'Interactive Exam Engine Separating Question Data Cleanly From UI Logic',
    analogyEn: 'Notice how separating `QUESTIONS` data from rendering logic means adding 50 new questions requires ZERO changes to your JavaScript engine!',
    analogyHi: '`QUESTIONS` data ko UI logic se alag rakhne par 50 naye questions add karne ke liye 1 line ka code bhi change nahi karna padta!',
    steps: [['Data Array', '`[{ q, options: [...], correctIdx, explain }]`'], ['State Machine', '`currentIdx`, `score`, `selectedIdx`, `isFinished`'], ['Lock On Select', 'Disable options once answered so user cannot double-score'], ['Final Scorecard', 'Show `%`, Review Mistakes & clean 1-click Restart']],
    jobUse: 'Teaches clean UI state-machine thinking—directly applicable to multi-step wizards and checkouts!',
    mistake: 'Letting the user click the right answer 10 times to boost their score to 10/5!',
    proHabit: 'Track `selectedIdx` (`null` initially)—ignore extra clicks whenever `selectedIdx !== null`!',
    rule: 'Data-Driven Questions + State Lock After Answer + Clean Restart Reset.',
    code: `function selectOption(idx) {
  if (state.selectedIdx !== null) return; // Lock after 1st pick!
  state.selectedIdx = idx;
  if (idx === QUESTIONS[state.currentIdx].correctIdx) state.score += 1;
  render();
}`,
    out: 'Cheat-proof, smooth, data-driven interactive quiz engine.',
    q1: ['How do you prevent a user from clicking the correct quiz option multiple times to inflate their score?', 'Store a selectedIdx state (initially null) for the current question and return early from the click handler whenever selectedIdx !== null, while also disabling the option buttons in the DOM.'],
  },
  {
    id: 156, mod: 18, tInMod: 7,
    title: 'Product filter page',
    sub: 'Mini Project 7: E-Commerce Catalog With Search, Category, Price Range, Sort & Cart Counter',
    coreEn: 'Build a realistic ==E-Commerce Product Filter Page== chaining ==Category Filter + Max Price Slider + Search Query + Price/Rating Sort== in one pure pipeline—plus a live ==Add to Cart== counter persisted in `localStorage`!',
    coreHi: 'Realistic ==E-Commerce Product Catalog== banao: ==Category + Price Range + Search + Sort (Low-to-High)== sab ek saath pure pipeline mein kaam karein, plus live ==Add to Cart== counter!',
    analogyTitle: 'Mini Amazon/Flipkart Product Listing Page Powered by Pure JavaScript Arrays',
    analogyEn: 'One clean `getVisibleProducts()` function runs `products.filter(...).toSorted(...)` so changing ANY filter or sort updates the grid accurately every single time!',
    analogyHi: 'Ek pure `getVisibleProducts()` function mein saare filters aur sort chain karne se kabhi conflict nahi hota!',
    steps: [['Unified Filter State', '`{ search, category, maxPrice, sortBy }`'], ['Pure Pipeline', '`filter(search & category & price)` -> `toSorted(sortBy)`'], ['Format Prices', '`₹${p.price.toLocaleString("en-IN")}`'], ['Responsive Grid', 'CSS Grid `repeat(auto-fit, minmax(240px, 1fr))` + Empty reset']],
    jobUse: 'One of the most popular take-home assignments for Frontend & Full-Stack roles!',
    mistake: 'Mutating the original `PRODUCTS` array when filtering or sorting so resetting filters shows missing items!',
    proHabit: 'Keep `PRODUCTS` 100% immutable—ALWAYS derive `visibleProducts` fresh from `PRODUCTS` on every render!',
    rule: 'Never Mutate Master Data -> Derive Filtered + Sorted View Purely Every Render.',
    code: `function getVisibleProducts(products, { search, category, maxPrice, sortBy }) {
  return products
    .filter((p) => (category === 'all' || p.category === category))
    .filter((p) => p.price <= maxPrice)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .toSorted((a, b) => (sortBy === 'price-asc' ? a.price - b.price : b.price - a.price));
}`,
    out: 'Production-grade, bug-free e-commerce filter & sort engine.',
    q1: ['Why must you never mutate the master PRODUCTS array when applying category filters or sorting?', 'If you mutate the original array (e.g., via splice or in-place sort), removing a filter or resetting to default order becomes impossible because the original items or order have been permanently lost.'],
  },
  {
    id: 157, mod: 18, tInMod: 8,
    title: 'Project debugging and code review',
    sub: 'Mini Project 8: Systematic Bug-Hunting, Self-Code-Review & Refactoring Before Shipping',
    coreEn: 'Level up from coder to engineer by running a ==5-Point Pre-Ship Code Review== on every mini-project: ==1) 0 Console/Network Errors, 2) Test Edge Cases (empty, huge, offline, 360px), 3) Security Check (0 `innerHTML` XSS / 0 secrets), 4) Refactor Repeated Code, 5) Clean Git Commit==!',
    coreHi: 'Har project ship karne se pehle ==5-Point Self Code Review== chalao: ==1) 0 Console Errors, 2) Edge Cases test (empty/360px/offline), 3) Security check (no XSS/secrets), 4) Duplicate code refactor, 5) Clean Git commit==!',
    analogyTitle: 'Senior Architect Walkthrough Catching Polish & Security Gaps Before Launch Day',
    analogyEn: 'Debugging systematically (**Reproduce -> Isolate -> Inspect in DevTools -> Fix Root Cause -> Verify**) beats random trial-and-error every single time!',
    analogyHi: 'Systematic debugging (**Reproduce -> Isolate -> Inspect -> Fix -> Verify**) random tukke maarne se 10x tez hoti hai!',
    steps: [['Reproduce Consistently', 'Find exact 3 steps that trigger the bug every time'], ['Isolate & Inspect', 'Use DevTools Console/Network/Breakpoints—never guess!'], ['Audit Security/UX', 'Check `textContent`, 360px mobile, keyboard Tab & empty states'], ['Clean Refactor', 'Remove dead `console.log`s, magic numbers & duplicate code']],
    jobUse: 'Exact engineering rigor expected in real startup and MNC pull-request reviews.',
    mistake: 'Changing 5 random lines at once hoping a bug disappears—creating 2 new bugs instead!',
    proHabit: 'Change **ONE thing at a time**, test immediately, and explain the root cause in 1 sentence in your Git commit message!',
    rule: 'Reproduce -> Inspect -> Fix 1 Root Cause -> Verify Edge Cases -> Clean Refactor.',
    code: `// 5-Point Pre-Ship Self-Review Checklist:
// [x] 0 errors in DevTools Console & Network tabs
// [x] Tested empty input, long text, offline & 360px mobile
// [x] Zero untrusted innerHTML & zero exposed API keys
// [x] Keyboard Tab/Enter/Escape works smoothly
// [x] Temporary debug console.logs removed`,
    out: 'Clean, resilient, portfolio-ready JavaScript engineering.',
    q1: ['What are the 5 steps of systematic JavaScript debugging?', '1) Reproduce the bug reliably, 2) Read the exact error message and stack trace in DevTools Console/Network, 3) Isolate the root cause using breakpoints or labeled logs, 4) Apply a minimal targeted fix, and 5) Re-test both the bug scenario and related edge cases.'],
  },
];

export const MERN_TAB4_BLUEPRINTS: Record<number, DsTopicBlueprint> =
  expandMernSpecs(TAB4_SPECS);
