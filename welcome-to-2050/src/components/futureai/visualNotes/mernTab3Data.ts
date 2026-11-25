import { expandMernSpecs, type MernTopicSpec } from './fullStackMernHelper';
import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

const TAB3_SPECS: MernTopicSpec[] = [
  // ═══ CHAPTER 11: Animations & Advanced CSS (84..91) ═══
  {
    id: 84, mod: 11, tInMod: 1,
    title: 'Pseudo-classes and pseudo-elements',
    sub: 'Interactive States (`:hover`, `:focus-visible`, `:nth-child`) & Virtual Decorative Elements (`::before`, `::after`)',
    coreEn: '==Pseudo-classes (`:` single colon)== style ==dynamic states or positions== (`:hover`, `:focus-visible`, `:disabled`, `:nth-child(even)`), while ==Pseudo-elements (`::` double colon)== style or inject ==parts of an element== (`::before`, `::after`, `::placeholder`) without extra HTML tags!',
    coreHi: '==Pseudo-classes (`:`)== element ki ==state ya position== style karti hain (`:hover`, `:focus-visible`, `:nth-child`), aur ==Pseudo-elements (`::`)== bina extra HTML ke decorative parts (`::before`, `::after`) add karti hain!',
    analogyTitle: 'Reacting to Mood (`:hover`) vs Adding a Decorative Sticker (`::after`)',
    analogyEn: 'Remember: `::before` and `::after` will NOT render at all unless you include `content: "";`!',
    analogyHi: 'Yaad rakho: `::before` aur `::after` tab tak screen par nahi dikhte jab tak unme `content: "";` na likha ho!',
    steps: [['State Pseudo-Classes', '`:hover`, `:active`, `:focus-visible`, `:disabled`'], ['Structural Classes', '`:first-child`, `:last-child`, `:nth-child(even)` (zebra tables!)'], ['Pseudo-Elements', '`::before` & `::after` ALWAYS require `content: ""`'], ['Accessibility Rule', 'Never put critical readable text ONLY inside CSS `content:`']],
    jobUse: 'Creates crisp interactive micro-states, zebra tables, custom badges, and animated underlines.',
    mistake: 'Forgetting `content: ""` on `::before`/`::after` and wondering why nothing appears!',
    proHabit: 'Use **`:focus-visible`** instead of `:focus` so keyboard Tab users get a crisp focus ring while mouse clicks stay clean!',
    rule: ': = State/Position | :: = Part/Virtual Element (Always Needs content: "").',
    code: `tbody tr:nth-child(even) { background: #f8fafc; }
.btn:focus-visible { outline: 3px solid #7c3aed; outline-offset: 2px; }
.badge::before { content: "• "; color: #16a34a; }`,
    out: 'Clean zebra table, keyboard-friendly focus ring, and CSS dot indicator.',
    q1: ['What is the difference between :focus and :focus-visible in CSS?', ':focus applies whenever an element is focused (including mouse clicks), whereas :focus-visible applies the focus ring primarily for keyboard navigation (Tab key)—giving accessible keyboard clarity without cluttered rings on mouse clicks.'],
  },
  {
    id: 85, mod: 11, tInMod: 2,
    title: 'CSS variables and design tokens',
    sub: 'Custom Properties (`--primary`) Enabling 1-Line Rebranding & Instant Dark Mode',
    coreEn: 'Define reusable ==CSS Custom Properties (Variables)== inside ==`:root`== (`--color-primary: #6d28d9;`) and read them anywhere via ==`var(--color-primary)`==—letting you switch entire themes or Dark Mode by toggling ONE class on `<html>`!',
    coreHi: '==`:root`== mein ==CSS Variables (`--primary: #6d28d9;`)== define karo aur har jagah ==`var(--primary)`== use karo—ek hi jagah color badalne se poori site ya Dark Mode 1 second mein switch ho jata hai!',
    analogyTitle: 'Master Color Swatch Board Controlling Every Wall in the Building Simultaneously',
    analogyEn: 'Unlike Sass variables, real CSS variables live dynamically in the browser—so JavaScript can toggle `document.documentElement.classList.toggle("dark")` with zero reload!',
    analogyHi: 'Real CSS variables live browser mein chalti hain—isliye Dark Mode toggle bina page reload ke 1 millisecond mein kaam karta hai!',
    steps: [['Define In :root', '`--bg: #ffffff; --text: #0f172a; --brand: #6d28d9;`'], ['Use With Fallback', '`color: var(--text, #111827);`'], ['Override For Dark', '`.dark { --bg: #0f172a; --text: #f8fafc; }`'], ['Semantic Naming', 'Name by ROLE (`--surface-card`), not raw color (`--white`)!']],
    jobUse: 'Foundation of every modern Design System (Tailwind v4, Shadcn UI, Material UI).',
    mistake: 'Hardcoding `#6d28d9` in 85 places across 12 CSS files so a brand color tweak takes an hour.',
    proHabit: 'Use **semantic token names** (`--bg-surface`, `--text-muted`, `--accent`) so Dark Mode overrides stay effortless!',
    rule: ':root Semantic Tokens + var() = 1-Line Rebranding & Instant Dark Mode.',
    code: `:root { --bg: #ffffff; --text: #0f172a; --accent: #6d28d9; }
[data-theme="dark"] { --bg: #0f172a; --text: #f8fafc; --accent: #a78bfa; }
body { background: var(--bg); color: var(--text); }`,
    out: 'Instant theme-switching design token system.',
    q1: ['Why is naming a CSS variable --bg-surface better than naming it --color-white?', 'Because in Dark Mode, --bg-surface cleanly switches from #ffffff to #0f172a without contradiction, whereas --color-white holding a dark hex value is confusing and unmaintainable.'],
  },
  {
    id: 86, mod: 11, tInMod: 3,
    title: 'Transitions and transforms',
    sub: 'Silky 60fps Micro-Interactions Animating ONLY GPU-Accelerated `transform` & `opacity`',
    coreEn: 'Add smooth micro-interactions with ==`transition: transform 200ms ease, opacity 200ms ease;`== and ==`transform` (`translateY`, `scale`, `rotate`)==—ALWAYS animate ==`transform` and `opacity`== (GPU-accelerated 60fps!), NEVER `top/left/width/height` (causes janky layout reflows!).',
    coreHi: 'Smooth 60fps hover effects ke liye ==`transition`== aur ==`transform` (`translateY`, `scale`)== use karo—hamesha ==`transform` aur `opacity`== animate karo (GPU-fast!), kabhi `width`/`top`/`margin` nahi!',
    analogyTitle: 'Gliding a Smooth Drawer on Ball Bearings (`transform`) vs Dragging Heavy Furniture (`width/top`)',
    analogyEn: 'Keep UI transitions snappy (`150ms–250ms ease-out`)—slow 1-second button transitions feel laggy and broken to users!',
    analogyHi: 'UI transitions hamesha fast (`150ms–250ms`) rakho—1 second ka slow hover laggy aur boring lagta hai!',
    steps: [['GPU Properties Only', 'Animate `transform` & `opacity` (plus subtle `background-color`)'], ['Snappy Timing', '`150ms–250ms ease-out` feels crisp & responsive'], ['Subtle Card Lift', '`.card:hover { transform: translateY(-4px); }`'], ['Avoid transition: all', 'List exact properties so unintended reflows never animate']],
    jobUse: 'Gives SaaS dashboards, buttons, and cards that unmistakable premium tactile polish.',
    mistake: 'Writing `transition: all 0.8s` or animating `margin-top` on hover (causes janky flickering!).',
    proHabit: 'Never write `transition: all`—explicitly write `transition: transform 200ms ease, box-shadow 200ms ease;`!',
    rule: 'Animate transform & opacity (150–250ms) -> Buttery 60fps GPU Polish.',
    code: `.card {
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.1);
}`,
    out: 'Crisp, 60fps card hover lift with zero layout shift.',
    q1: ['Why should CSS animations and transitions prefer transform and opacity over top, left, width, or margin?', 'Animating top, width, or margin forces the browser to recalculate page layout (reflow) on every frame, causing jank. transform and opacity run directly on the GPU compositor thread for smooth 60fps performance.'],
  },
  {
    id: 87, mod: 11, tInMod: 4,
    title: 'Keyframe animations',
    sub: 'Multi-Step `@keyframes` for Loading Spinners, Skeleton Pulses & Smooth Entrance Reveals',
    coreEn: 'While `transition` animates between 2 states on trigger, ==`@keyframes`== defines ==multi-step or looping animations== (`0% -> 50% -> 100%`)—ideal for ==loading spinners, skeleton shimmer placeholders, and toast slide-ins==!',
    coreHi: 'Jahan `transition` sirf 2 states ke beech chalta hai, ==`@keyframes`== se aap ==multi-step ya looping animations== bana sakte ho—jaise ==loading spinner, skeleton shimmer aur toast slide-in==!',
    analogyTitle: 'Choreographed Dance Routine (`0% -> 50% -> 100%`) Running Smoothly on Loop',
    analogyEn: 'A 5-line `@keyframes spin` creates a lightweight, zero-JS CSS loading spinner for your React fetch buttons!',
    analogyHi: 'Sirf 5 line ke `@keyframes spin` se bina kisi library ke super-light loading spinner ban jata hai!',
    steps: [['Define @keyframes', '`@keyframes spin { to { transform: rotate(360deg); } }`'], ['Apply animation', '`animation: spin 0.8s linear infinite;`'], ['Entrance Reveals', '`animation: fadeUp 300ms ease-out forwards;`'], ['Use Restraint', 'Animate feedback/loading—never distract reading with endless bounce!']],
    jobUse: 'Powers loading states, skeleton screens, and polished modal/toast entrances across React apps.',
    mistake: 'Forgetting `forwards` (`animation-fill-mode`) on entrance animations so the element snaps back to `opacity: 0` when finished!',
    proHabit: 'Keep continuous looping animations strictly for active loaders/live indicators—never endlessly bounce CTA buttons!',
    rule: '@keyframes + transform/opacity + forwards (for entrances) = Smooth Purposeful Motion.',
    code: `@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  width: 20px; height: 20px;
  border: 2px solid #e2e8f0; border-top-color: #6d28d9;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}`,
    out: 'Crisp, zero-dependency 60fps loading spinner.',
    q1: ['What does animation-fill-mode: forwards do on a CSS @keyframes entrance animation?', 'It tells the browser to retain the final keyframe styles (e.g., opacity: 1 and translateY(0)) after the animation finishes, instead of snapping back to its initial hidden state.'],
  },
  {
    id: 88, mod: 11, tInMod: 5,
    title: 'Hover and focus states',
    sub: 'Designing Complete Interactive Feedback: Default, Hover, Focus-Visible, Active & Disabled',
    coreEn: 'Every interactive element (`<button>`, `<a>`, `<input>`) must style ==all 5 states==: ==Default, `:hover` (mouse feedback), `:focus-visible` (keyboard ring), `:active` (click press `scale(0.98)`), and `:disabled` (`opacity: 0.5; cursor: not-allowed`)==!',
    coreHi: 'Har button aur input ke ==5 interactive states== design karo: ==Default, `:hover`, `:focus-visible` (keyboard), `:active` (click feel) aur `:disabled`==—tabhi UI real pro app jaisa feel deta hai!',
    analogyTitle: 'Physical Elevator Button Lighting Up, Pressing In & Dimming When Out of Order',
    analogyEn: 'Adding a tiny `transform: scale(0.98)` on `:active` makes every button click feel tactile and instantaneous like a native mobile app!',
    analogyHi: '`:active` par halka `scale(0.98)` lagane se har button click native app jaisa crisp feel deta hai!',
    steps: [['Hover Feedback', 'Subtle color shift or soft shadow lift + `cursor: pointer`'], ['Keyboard Focus', 'High-contrast `:focus-visible` ring (`2px–3px` offset)'], ['Active Press', '`:active { transform: scale(0.98); }` tactile click'], ['Disabled Clarity', '`:disabled { opacity: 0.5; cursor: not-allowed; }`']],
    jobUse: 'Immediate signal of senior frontend craft in design reviews and live demos.',
    mistake: 'Styling only `:hover` and forgetting `:focus-visible` and `:disabled` states.',
    proHabit: 'Add `cursor: pointer;` on clickable `<button>` elements (browsers do NOT set pointer cursor on buttons by default!).',
    rule: 'Every Control Needs 5 States: Default, Hover, Focus-Visible, Active & Disabled.',
    code: `.btn { cursor: pointer; transition: background 150ms, transform 100ms; }
.btn:hover         { background: #5b21b6; }
.btn:focus-visible { outline: 3px solid #c4b5fd; outline-offset: 2px; }
.btn:active        { transform: scale(0.98); }
.btn:disabled      { opacity: 0.5; cursor: not-allowed; }`,
    out: 'Complete, accessible, tactile button state system.',
    q1: ['Why should you style :active and :disabled states in addition to :hover on web buttons?', ':active gives immediate tactile confirmation that a click/tap registered, and :disabled prevents double-submissions during API calls while clearly signaling the button is currently inactive.'],
  },
  {
    id: 89, mod: 11, tInMod: 6,
    title: 'Gradients, shadows, and glassmorphism',
    sub: 'Tasteful Visual Depth Using Soft Layered Shadows, Subtle Gradients & `backdrop-filter: blur()`',
    coreEn: 'Create modern visual depth with ==subtle `linear-gradient()` accents==, ==soft low-opacity layered `box-shadow`== (never harsh black drop shadows!), and ==Glassmorphism (`background: rgba(255,255,255,0.75); backdrop-filter: blur(12px);`)== on sticky navbars!',
    coreHi: 'Modern depth ke liye ==subtle gradients==, ==soft low-opacity shadows== (harsh black shadow kabhi nahi!), aur sticky navbars par ==Glassmorphism (`backdrop-filter: blur(12px)`)== use karo!',
    analogyTitle: 'Frosted Glass Conference Wall Letting Soft Light Through While Keeping Text Sharp',
    analogyEn: 'Glassmorphism only looks great when text contrast stays >= 4.5:1 AND a crisp `1px solid rgba(255,255,255,0.3)` border defines the frosted edge!',
    analogyHi: 'Glassmorphism tabhi classy lagta hai jab text contrast high rahe aur halka `1px` border edge ko sharp rakhe!',
    steps: [['Soft Shadows', 'Use `rgba(15,23,42,0.08)` soft blur—never harsh `#000`'], ['Subtle Gradients', 'Blend adjacent brand hues (`#7c3aed -> #4f46e5`)'], ['Glass Navbar', '`rgba(255,255,255,0.8)` + `backdrop-filter: blur(12px)`'], ['Check Contrast', 'Always verify text over glass stays 100% legible!']],
    jobUse: 'Gives portfolios and SaaS interfaces that clean modern Linear/Stripe/Apple polish.',
    mistake: 'Using heavy `box-shadow: 5px 5px 5px black` or low-contrast transparent glass where text becomes unreadable!',
    proHabit: 'Keep shadows soft and tinted with dark slate (`rgba(15, 23, 42, 0.08)`) rather than pure black.',
    rule: 'Soft Tinted Shadows + Restrained Gradients + High-Contrast Glass = Modern Polish.',
    code: `.glass-nav {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}`,
    out: 'Sleek frosted-glass sticky header with crisp readability.',
    q1: ['What CSS property creates the frosted-glass blur effect behind a semi-transparent navbar?', 'backdrop-filter: blur(12px) combined with a semi-transparent background color like rgba(255, 255, 255, 0.8) blurs the scrolling content behind the element.'],
  },
  {
    id: 90, mod: 11, tInMod: 7,
    title: 'Reduced-motion accessibility',
    sub: 'Respecting `@media (prefers-reduced-motion: reduce)` for Vestibular-Sensitive Users',
    coreEn: 'Some users experience dizziness or nausea from sliding/zooming animations—ALWAYS add ==`@media (prefers-reduced-motion: reduce)`== to disable large motion/parallax automatically when a user enables "Reduce Motion" in Windows/Mac/iOS!',
    coreHi: 'Kuch users ko fast sliding/zoom animations se chakkar ya eye-strain hota hai—hamesha ==`@media (prefers-reduced-motion: reduce)`== lagao taaki unke OS setting par animations smoothly kam ho jayein!',
    analogyTitle: 'Automatic Gentle Mode Respecting User Comfort Settings Instantly',
    analogyEn: 'A 6-line CSS snippet at the bottom of your stylesheet makes every animation in your entire app respectfully honor user comfort automatically!',
    analogyHi: 'Sirf 6 line ka CSS snippet aapki poori website ko automatically motion-safe aur accessible bana deta hai!',
    steps: [['Honor OS Setting', 'Check `@media (prefers-reduced-motion: reduce)`'], ['Keep Instant Feedback', 'Replace sliding motion with quick gentle opacity fades'], ['Disable Auto-Scroll', 'Turn off `scroll-behavior: smooth` when reduced motion is on'], ['Test In DevTools', 'DevTools -> Rendering -> Emulate `prefers-reduced-motion`']],
    jobUse: 'Standout accessibility detail that impresses senior frontend interviewers.',
    mistake: 'Forcing aggressive parallax scrolling and spinning cards on users who explicitly enabled Reduce Motion.',
    proHabit: 'Include the standard `prefers-reduced-motion` reset in your global CSS starter template on every project (Tailwind offers `motion-reduce:`!).',
    rule: 'Always Honor prefers-reduced-motion: reduce in Every Animated Web App.',
    code: `@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
    out: 'Respectful, WCAG-compliant motion handling across the whole site.',
    q1: ['What does the CSS media query @media (prefers-reduced-motion: reduce) detect?', 'It detects whether the user has turned on "Reduce Motion" in their operating system accessibility settings, allowing your CSS to disable or minimize sliding, zooming, and parallax animations.'],
  },
  {
    id: 91, mod: 11, tInMod: 8,
    title: 'Reusable CSS patterns',
    sub: 'Building Modular Utility & Component Primitives (`.container`, `.btn`, `.card`, `.stack`)',
    coreEn: 'Avoid writing repetitive one-off CSS! Build a small library of ==reusable CSS primitives==—==`.container`== (centered max-width), ==`.btn` + `.btn--primary`==, ==`.card`==, and ==`.grid-auto`==—keeping stylesheets tiny, consistent, and fast to scale.',
    coreHi: 'Har section ke liye naya CSS mat likho—==reusable primitives (`.container`, `.btn`, `.card`, `.grid-auto`)== banao taaki poori site consistent, lightweight aur fast maintain ho sake!',
    analogyTitle: 'Standardized Lego Bricks Snapping Together to Build Any Page Fast',
    analogyEn: 'Learning reusable CSS patterns makes transitioning to **Tailwind CSS** and **React Components** feel 100% natural!',
    analogyHi: 'Reusable CSS patterns seekhne ke baad **Tailwind CSS** aur **React Components** bilkul effortless lagte hain!',
    steps: [['Container Primitive', 'Consistent centered width + mobile padding on every section'], ['Button Variants', 'Base `.btn` + modifiers `.btn--primary`, `.btn--outline`'], ['Card Surface', 'Shared radius, subtle border, padding & hover shadow'], ['Clean Naming', 'Predictable BEM or clean component classes']],
    jobUse: 'Prevents 5,000-line unmaintainable CSS spaghetti in growing projects.',
    mistake: 'Copy-pasting the same 15 lines of button CSS into `.hero-btn`, `.pricing-btn`, and `.footer-btn`!',
    proHabit: 'If you write the same 5 CSS declarations twice, extract a clean reusable class immediately.',
    rule: 'DRY CSS: Shared Primitives (Container, Button, Card) > Repeated One-Off Rules.',
    code: `.btn { display: inline-flex; align-items: center; gap: .5rem; padding: .75rem 1.25rem; border-radius: .75rem; font-weight: 600; cursor: pointer; }
.btn--primary { background: var(--accent); color: #fff; }
.btn--outline { border: 1px solid #cbd5e1; background: #fff; color: #0f172a; }`,
    out: 'Clean, modular, reusable CSS design primitives.',
    q1: ['Why is using a base class plus modifier classes (e.g., class="btn btn--primary") better than writing separate classes for every button?', 'Shared layout, padding, font, and transition rules live in one place (.btn), eliminating duplication and guaranteeing every button across the app stays consistent when updated.'],
  },

  // ═══ CHAPTER 12: Tailwind CSS Framework (92..101) ═══
  {
    id: 92, mod: 12, tInMod: 1,
    title: 'Utility-first CSS approach',
    sub: 'Why Tailwind CSS Dominates Modern React Apps: Fast, Consistent & Zero Dead CSS',
    coreEn: '==Tailwind CSS== is a ==utility-first CSS framework== where you compose designs directly in HTML/JSX using tiny, predictable classes (`flex items-center gap-4 p-6 rounded-2xl bg-white shadow-sm`)—eliminating naming fatigue and purging unused CSS automatically for tiny production bundles!',
    coreHi: '==Tailwind CSS== ek ==utility-first framework== hai jisme aap seedha HTML/JSX mein clean classes (`flex items-center gap-4 p-6 rounded-2xl`) lagakar super-fast UI banate ho—bina alag CSS file dhoondhe!',
    analogyTitle: 'Precision Modular Building Blocks Directly Inside Your Component File',
    analogyEn: 'No more inventing 50 awkward class names like `.outer-inner-card-wrapper-2`, and Tailwind compiler strips every unused class so production CSS is often under 10 KB!',
    analogyHi: 'Ab `.outer-card-wrapper-2` jaise ajeeb naam sochne ki zaroorat nahi—aur build mein sirf used classes hi jaati hain (<10 KB)!',
    steps: [['Style In Place', 'Read & edit markup + styling together in one JSX file'], ['Design Constraints', 'Built-in 4px spacing scale (`p-4`, `gap-6`) keeps UI harmonious'], ['Zero Dead CSS', 'Only classes you actually write ship in production bundle'], ['Component Reuse', 'In React, reuse via `<Button />` components, not giant CSS files']],
    jobUse: 'The #1 most requested CSS framework in modern React, Next.js, and MERN job descriptions!',
    mistake: 'Thinking Tailwind is "just inline styles" (inline styles CANNOT do responsive `md:`, `:hover`, `dark:`, or design scales—Tailwind does all of them!).',
    proHabit: 'Install the **Tailwind CSS IntelliSense** VS Code extension so every class shows exact CSS values on hover!',
    rule: 'Utility-First Classes + React Component Reuse = Blazing-Fast, Consistent UI.',
    code: `<div class="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h3 class="text-lg font-bold text-slate-900">Tailwind Card</h3>
</div>`,
    out: 'Polished SaaS card built in 10 seconds with zero external CSS file.',
    q1: ['How is Tailwind CSS fundamentally different from inline style="..." attributes?', 'Unlike inline styles, Tailwind supports responsive breakpoints (md:, lg:), interactive states (hover:, focus-visible:), dark mode (dark:), enforces a consistent design-token scale, and compiles into optimized cached CSS classes.'],
  },
  {
    id: 93, mod: 12, tInMod: 2,
    title: 'Installing and configuring Tailwind CSS',
    sub: 'Modern Vite + React Tailwind Setup in 60 Seconds (`@tailwindcss/vite` / `tailwind.config`)',
    coreEn: 'Install Tailwind cleanly inside a ==Vite + React== project via npm (Tailwind v4 `@tailwindcss/vite` plugin + `@import "tailwindcss";` in `index.css`, or v3 `tailwind.config.js` `content` paths)—never use the heavy Play CDN script in production!',
    coreHi: '==Vite + React== mein Tailwind ko npm se install karo (`@tailwindcss/vite` ya `tailwind.config.js`) aur `index.css` mein import karo—production apps mein Play CDN kabhi use mat karo!',
    analogyTitle: 'Plugging Tailwind Directly Into Vite Build Engine for Instant Auto-Purged CSS',
    analogyEn: 'Play CDN is fine for a 5-minute CodePen test, whereas the Vite npm plugin gives you instant HMR, full IntelliSense, and tiny 8 KB production bundles!',
    analogyHi: 'NPM + Vite plugin se instant HMR reload, IntelliSense autocomplete aur tiny 8 KB production CSS milta hai!',
    steps: [['Install Packages', '`npm install tailwindcss @tailwindcss/vite`'], ['Register Plugin', 'Add `tailwindcss()` inside `vite.config.ts` plugins'], ['Import In CSS', 'Add `@import "tailwindcss";` at top of `src/index.css`'], ['Verify Live', 'Add `text-purple-600 font-bold` -> confirm instant styling!']],
    jobUse: 'Day-1 setup step for virtually every new React/MERN frontend repository.',
    mistake: 'Forgetting to include `./src/**/*.{js,ts,jsx,tsx}` in Tailwind v3 `content` array so classes never apply!',
    proHabit: 'Verify Tailwind works with one quick test class (`bg-purple-600 text-white p-4`) right after installation.',
    rule: 'Use Official Vite/NPM Setup (Never Play CDN in Production).',
    code: `// vite.config.ts (Tailwind v4 + Vite)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({ plugins: [react(), tailwindcss()] });`,
    out: 'Zero-config, lightning-fast Tailwind CSS running in Vite.',
    q1: ['Why should you never use the Tailwind Play CDN <script> tag for a production website?', 'The Play CDN ships the entire compiler to the user browser at runtime, causing slower load times and flash of unstyled content, whereas the Vite/CLI build compiles only the exact classes you use into a tiny cached CSS file.'],
  },
  {
    id: 94, mod: 12, tInMod: 3,
    title: 'Spacing, sizing, and typography utilities',
    sub: 'Mastering Tailwind 4px Scale (`p-4 = 16px`, `gap-6 = 24px`) & Clean Type Hierarchy',
    coreEn: 'Tailwind uses an intuitive ==4px (`0.25rem`) multiplier scale==: `p-4` = `16px`, `p-6` = `24px`, `gap-8` = `32px`, `w-full max-w-6xl mx-auto` centers containers, and `text-sm / text-base / text-2xl font-bold leading-relaxed` crafts crisp typography!',
    coreHi: 'Tailwind mein simple ==4px scale== chalta hai: `p-4` = 16px, `p-6` = 24px, `gap-8` = 32px! Container center karne ke liye `max-w-6xl mx-auto px-4` aur typography ke liye `text-2xl font-bold` use karo!',
    analogyTitle: 'Simple 4x Mental Math Giving Every Screen Effortless Visual Rhythm',
    analogyEn: 'Need `px-6 py-3`? That is `24px` left/right and `12px` top/bottom—once you learn `number × 4px`, you can read and write Tailwind as fast as plain English!',
    analogyHi: 'Bas `number × 4px` yaad rakho (`p-4 = 16px`, `py-3 = 12px`, `px-6 = 24px`)—poori Tailwind scale 1 minute mein yaad ho jati hai!',
    steps: [['4px Scale', '`1 = 4px`, `2 = 8px`, `4 = 16px`, `6 = 24px`, `8 = 32px`'], ['Directions', '`p` (all), `px` (left/right), `py` (top/bottom), `mt`/`mb`'], ['Fluid Sizing', '`w-full max-w-5xl mx-auto min-h-dvh`'], ['Typography', '`text-3xl font-extrabold tracking-tight text-slate-900`']],
    jobUse: 'Lets you build pixel-clean SaaS layouts 3x faster than writing custom CSS.',
    mistake: 'Using random arbitrary values (`p-[13px]`, `text-[17px]`) everywhere instead of sticking to Tailwind consistent scale.',
    proHabit: 'Stick to Tailwind built-in scale (`4, 6, 8, 12`) 95% of the time—reserve `[...]` arbitrary values only for true one-offs.',
    rule: '1 Unit = 4px (0.25rem) | Stick to the Scale for Automatic Visual Harmony.',
    code: `<section class="mx-auto max-w-5xl px-4 py-16">
  <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">Build Faster</h1>
  <p class="mt-4 max-w-prose text-base leading-relaxed text-slate-600">Clean rhythm.</p>
</section>`,
    out: 'Crisp, balanced editorial typography and section spacing.',
    q1: ['In Tailwind CSS, how many pixels (and rem) does the class p-6 equal by default?', 'p-6 equals 1.5rem (24px) of padding on all four sides, since each spacing unit equals 0.25rem (4px).'],
  },
  {
    id: 95, mod: 12, tInMod: 4,
    title: 'Colors and backgrounds',
    sub: 'Curated Color Scales (`50–950`), Opacity Modifiers (`bg-purple-600/10`) & Clean Gradients',
    coreEn: 'Tailwind gives expertly calibrated ==`50` (lightest) to `950` (darkest) color ramps== (`slate`, `purple`, `indigo`, `emerald`, `rose`), instant ==opacity modifiers (`bg-purple-600/10`)==, and clean gradients (`bg-gradient-to-r from-purple-600 to-indigo-600`).',
    coreHi: 'Tailwind mein har color ke ==`50` (lightest) se `950` (darkest)== shades ready milte hain (`slate`, `purple`, `emerald`), plus ==opacity (`bg-purple-600/10`)== aur clean ==gradients==!',
    analogyTitle: 'Pre-Curated Designer Swatch Book Where Every Shade Harmonizes Automatically',
    analogyEn: 'Pair `bg-emerald-50 text-emerald-700 border border-emerald-200` for an instant high-contrast pastel status badge in 3 seconds!',
    analogyHi: '`bg-emerald-50 text-emerald-700 border-emerald-200` lagate hi 3 second mein designer-level pastel status badge ban jata hai!',
    steps: [['Neutral Base', 'Use `slate` or `zinc` for 90% of text, borders & surfaces'], ['Pastel Badges', '`bg-purple-50 text-purple-700 border-purple-200`'], ['Opacity Slash', '`bg-black/50` (50% modal backdrop) or `ring-purple-500/30`'], ['Subtle Gradients', '`bg-gradient-to-r from-purple-600 to-indigo-600`']],
    jobUse: 'Makes developer-built UIs look like a dedicated UI designer chose every single shade.',
    mistake: 'Putting `text-slate-400` on `bg-white` for body copy (fails WCAG contrast! Use `slate-600` or darker for text).',
    proHabit: 'For light backgrounds (`white`/`slate-50`), use `slate-900` for headings and `slate-600`/`slate-700` for body text to pass 4.5:1 contrast!',
    rule: '50/100 = Soft Surface | 200 = Subtle Border | 600/700 = Brand/Body | 900 = Headings.',
    code: `<span class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
  Active
</span>`,
    out: 'Crisp, high-contrast status badge.',
    q1: ['What does the /50 syntax mean in Tailwind class bg-slate-900/50?', 'It applies the slate-900 background color at 50% opacity—ideal for dark modal backdrops or soft frosted glass overlays.'],
  },
  {
    id: 96, mod: 12, tInMod: 5,
    title: 'Flexbox and Grid utilities',
    sub: 'Building Navbars, Split Hero Sections & Responsive Dashboards in Pure Tailwind Classes',
    coreEn: 'Compose any layout rapidly with ==Tailwind Flex (`flex items-center justify-between gap-4 flex-wrap`)== and ==Tailwind Grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`)==—plus `shrink-0` for icons and `min-w-0` for flex children!',
    coreHi: 'Tailwind mein ==Flex (`flex items-center justify-between gap-4`)== aur ==Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`)== se navbars aur responsive card grids seconds mein ban jaate hain!',
    analogyTitle: 'Express Layout Shorthand Translating Flexbox & Grid 1-to-1 Into Readable Classes',
    analogyEn: 'Because you already mastered CSS Flexbox and Grid, Tailwind `flex items-center justify-between` and `grid grid-cols-3 gap-6` make 100% instant sense!',
    analogyHi: 'CSS Flexbox aur Grid samajhne ke baad Tailwind ke `flex`, `items-center`, `grid-cols-3`, `gap-6` bilkul natural lagte hain!',
    steps: [['Navbar Row', '`flex items-center justify-between gap-4`'], ['Center Anything', '`flex items-center justify-center min-h-dvh`'], ['Responsive Grid', '`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`'], ['Bento Span', '`md:col-span-2` for featured wide dashboard cards']],
    jobUse: 'Powers 100% of real-world React + Tailwind SaaS dashboards and landing pages.',
    mistake: 'Forgetting `grid` before `grid-cols-3` (without `grid`, `grid-cols-3` does nothing!).',
    proHabit: 'Always pair `flex` with `min-w-0` on text columns and `shrink-0` on icons/avatars!',
    rule: 'Always Include flex/grid Parent Class + gap + Responsive grid-cols.',
    code: `<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  <article class="rounded-2xl border border-slate-200 bg-white p-6">Card 1</article>
  <article class="rounded-2xl border border-slate-200 bg-white p-6 md:col-span-2">Featured</article>
</div>`,
    out: 'Clean responsive Bento grid adapting across all screen sizes.',
    q1: ['Why does adding grid-cols-3 alone to a <div> not create a 3-column grid in Tailwind CSS?', 'Because grid-cols-3 only sets grid-template-columns—you must also include the base grid class (display: grid) on the container to activate CSS Grid.'],
  },
  {
    id: 97, mod: 12, tInMod: 6,
    title: 'Responsive prefixes',
    sub: 'Mobile-First Breakpoints Inline (`sm:`, `md:`, `lg:`, `xl:`) Without Writing `@media` Blocks',
    coreEn: 'Tailwind is ==100% Mobile-First==: unprefixed classes apply to ==ALL screens starting from mobile (`0px`)==, and prefixes override upward: ==`sm:` (640px+), `md:` (768px+), `lg:` (1024px+), `xl:` (1280px+)==!',
    coreHi: 'Tailwind ==100% Mobile-First== hai: bina prefix ki classes ==mobile (base)== par lagti hain, aur ==`sm:` (640px+), `md:` (768px+), `lg:` (1024px+), `xl:` (1280px+)== badi screens par override karti hain!',
    analogyTitle: 'Layering Upward: Base Phone Style -> Tablet Upgrade -> Desktop Upgrade',
    analogyEn: 'Writing `flex-col md:flex-row` stacks your hero vertically on phones and places it side-by-side on tablets/desktops in just TWO words!',
    analogyHi: '`flex-col md:flex-row` sirf 2 words likh kar mobile par vertical aur tablet/desktop par side-by-side layout ban jata hai!',
    steps: [['Unprefixed = Mobile', 'Write `text-2xl p-4 flex-col` for phones first'], ['md: Tablet (768px+)', 'Add `md:flex-row md:p-8 md:text-4xl`'], ['lg: Desktop (1024px+)', 'Add `lg:grid-cols-3 lg:px-12`'], ['Show/Hide Cleanly', '`hidden md:flex` (desktop nav) | `md:hidden` (mobile burger)']],
    jobUse: 'Eliminates hundreds of lines of separate `@media` boilerplate across React apps.',
    mistake: 'Thinking `sm:text-center` means "ONLY on small mobile screens" (WRONG! `sm:` means **640px and UP** — mobile is unprefixed!).',
    proHabit: 'Read `text-left sm:text-center` as: "Left on phones, centered on 640px and wider."',
    rule: 'Unprefixed = Mobile Base | sm: >=640px | md: >=768px | lg: >=1024px.',
    code: `<header class="flex items-center justify-between px-4 py-3 md:px-8">
  <a href="/" class="font-bold">Brand</a>
  <nav class="hidden items-center gap-6 md:flex">...</nav>
  <button class="md:hidden" aria-label="Menu">☰</button>
</header>`,
    out: 'Complete responsive navbar hiding desktop links cleanly on phones.',
    q1: ['What is the #1 misconception beginners have about Tailwind sm: prefix?', 'Beginners often think sm: targets small mobile phones—actually Tailwind is mobile-first, so unprefixed classes target mobile phones, and sm: applies to 640px and WIDER screens.'],
  },
  {
    id: 98, mod: 12, tInMod: 7,
    title: 'Hover and focus variants',
    sub: 'Effortless State Modifiers (`hover:`, `focus-visible:`, `active:`, `disabled:`, `group-hover:`)',
    coreEn: 'Prefix any Tailwind utility with state variants: ==`hover:bg-purple-700`, `focus-visible:ring-2`, `active:scale-95`, `disabled:opacity-50`==, and ==`group` + `group-hover:translate-x-1`== to animate a child arrow when hovering the whole parent card!',
    coreHi: 'Tailwind mein har state ek prefix hai: ==`hover:`, `focus-visible:`, `active:`, `disabled:`== aur parent hover par child animate karne ke liye ==`group` + `group-hover:`==!',
    analogyTitle: 'Card-Wide Trigger Making the Arrow Slide Right Smoothly When You Hover Anywhere on the Card',
    analogyEn: 'Stacking variants like `md:hover:-translate-y-1 transition` gives silky desktop hover lift while keeping mobile taps clean!',
    analogyHi: '`group` parent par aur `group-hover:translate-x-1` arrow par lagate hi card hover par arrow smoothly aage slide hota hai!',
    steps: [['Button States', '`hover:bg-purple-700 active:scale-95 disabled:opacity-50`'], ['Keyboard Focus', '`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500`'], ['Parent Group', 'Put `group` on card -> `group-hover:text-purple-600` on title'], ['Add Transition', 'Always pair with `transition duration-200` for smoothness']],
    jobUse: 'Delivers crisp interactive SaaS UI polish in seconds.',
    mistake: 'Adding `hover:-translate-y-1` without `transition` so the element teleports abruptly instead of gliding!',
    proHabit: 'Always combine `focus-visible:ring-2 focus-visible:ring-offset-2` on interactive buttons and inputs.',
    rule: 'hover: + focus-visible: + active: + transition + group-hover: = Tactile Tailwind UI.',
    code: `<a href="/mern" class="group inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700 active:scale-95 focus-visible:ring-2 focus-visible:ring-purple-400">
  <span>Start Course</span>
  <span class="transition-transform group-hover:translate-x-1">→</span>
</a>`,
    out: 'Crisp, tactile, accessible interactive CTA button.',
    q1: ['How does the group and group-hover: pattern work in Tailwind CSS?', 'Adding class="group" to a parent container (like a card or button) lets any child element react using group-hover: utilities (e.g., group-hover:translate-x-1) whenever the user hovers anywhere over the parent.'],
  },
  {
    id: 99, mod: 12, tInMod: 8,
    title: 'Reusable component patterns',
    sub: 'Avoiding Long Repeated Class Strings Using React Components (Not Overusing `@apply`)',
    coreEn: 'In React + Tailwind, reuse styling by ==extracting clean React components (`<Button variant="primary" />`, `<Card />`, `<Badge />`)== rather than copy-pasting 15-class strings everywhere or fighting `@apply`!',
    coreHi: 'React + Tailwind mein baar-baar 15 classes copy-paste karne ke bajaye ==reusable React components (`<Button />`, `<Card />`, `<Badge />`)== banao—yahi official Tailwind best practice hai!',
    analogyTitle: 'Stamping Reusable `<Button />` Components Instead of Copying 15 Classes 40 Times',
    analogyEn: 'Change `rounded-xl` to `rounded-full` once inside `Button.jsx` and all 40 buttons across your entire MERN app update simultaneously!',
    analogyHi: '`Button.jsx` mein 1 class badlo aur poore app ke 40 buttons ek saath update ho jaate hain!',
    steps: [['Extract Components', 'Create `Button.jsx`, `Card.jsx`, `Input.jsx`, `Badge.jsx`'], ['Variant Lookup Map', 'Map `primary / secondary / danger` props to class strings'], ['Allow className Prop', 'Accept optional `className=""` to customize spacing cleanly'], ['Avoid @apply Bloat', 'Reserve `@apply` only for rare third-party markdown overrides']],
    jobUse: 'Exact architecture used by Shadcn UI, Vercel, and senior React teams.',
    mistake: 'Copy-pasting the exact same 14 button classes across 30 different JSX files!',
    proHabit: 'Build a clean `src/components/ui/` folder with `<Button>`, `<Card>`, and `<Input>` on every React project.',
    rule: 'Reuse in Tailwind = Extract Reusable React Components With Variant Maps.',
    code: `const VARIANTS = {
  primary: 'bg-purple-600 text-white hover:bg-purple-700',
  outline: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50',
};
export function Button({ variant = 'primary', className = '', ...props }) {
  return <button className={\`rounded-xl px-4 py-2 font-semibold transition \${VARIANTS[variant]} \${className}\`} {...props} />;
}`,
    out: 'Clean, scalable, single-source-of-truth React UI component.',
    q1: ['Why does the official Tailwind CSS documentation recommend extracting React components instead of overusing @apply?', 'Extracting React components keeps both markup and styling reusable in one place without creating a second parallel CSS naming system, keeps your CSS bundle smaller, and lets you pass props like variant or size cleanly.'],
  },
  {
    id: 100, mod: 12, tInMod: 9,
    title: 'Theme customization and dark mode',
    sub: 'Custom Brand Tokens (`@theme`) & Clean Toggleable Dark Mode (`dark:bg-slate-900`)',
    coreEn: 'Customize Tailwind with your ==brand colors & fonts== (`@theme` in v4 or `theme.extend` in v3) and enable ==class-based Dark Mode (`dark:`)== so toggling `.dark` on `<html>` switches every card, border, and text color cleanly!',
    coreHi: 'Tailwind mein apne ==custom brand colors/fonts== configure karo aur ==`dark:` variant (`dark:bg-slate-900 dark:text-slate-100`)== se 1-click Dark Mode banao!',
    analogyTitle: 'Day/Night Cockpit Switch Transforming Every Dial From Bright White to Calm Slate',
    analogyEn: 'Always use **soft dark slate (`slate-900` / `slate-950`)** instead of harsh pure `#000000` black, and reduce image brightness slightly in dark mode for comfortable night reading!',
    analogyHi: 'Dark Mode mein harsh pure `#000` ke bajaye soft `slate-900` background aur `slate-100` text use karne se aankhon ko aaram milta hai!',
    steps: [['Extend Brand Tokens', 'Add custom `--color-brand` & font family (never wipe defaults!)'], ['Pair Dark Classes', '`bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100`'], ['Toggle & Persist', 'Toggle `.dark` on `<html>` & save preference in `localStorage`'], ['Check Contrast Both', 'Verify both Light & Dark modes pass 4.5:1 contrast']],
    jobUse: 'Users expect clean Dark Mode toggles in modern SaaS dashboards and developer tools.',
    mistake: 'Forgetting `dark:border-slate-800` so bright white borders glow harshly in Dark Mode!',
    proHabit: 'Whenever you write `bg-white`, `text-slate-900`, or `border-slate-200`, immediately pair its `dark:` twin!',
    rule: 'Extend (Never Overwrite) Theme + Soft Slate Dark Mode + Persist in localStorage.',
    code: `<article class="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
  <h3 class="font-bold">Adaptive Dark Mode Card</h3>
</article>`,
    out: 'Crisp card looking native in both Light and Dark themes.',
    q1: ['In Tailwind v3 config, why should you add custom brand colors inside theme.extend.colors instead of directly inside theme.colors?', 'Putting colors directly inside theme.colors overwrites and deletes Tailwind entire built-in palette (slate, emerald, rose, etc.), whereas theme.extend.colors adds your brand tokens while keeping all default colors intact.'],
  },
  {
    id: 101, mod: 12, tInMod: 10,
    title: 'Accessible Tailwind UI',
    sub: 'Built-In `sr-only`, `focus-visible:ring`, `motion-reduce:` & High-Contrast Utilities',
    coreEn: 'Tailwind ships with built-in ==accessibility utilities==: ==`sr-only`== (screen-reader-only text for icon buttons), ==`focus-visible:ring-2`==, ==`motion-reduce:transition-none`==, and ==semantic HTML paired with 4.5:1 color shades==!',
    coreHi: 'Tailwind mein accessibility built-in milti hai: ==`sr-only`== (screen-reader label), ==`focus-visible:ring-2`==, ==`motion-reduce:`== aur high-contrast color shades!',
    analogyTitle: 'Built-In Safety Rails Ready to Snap Onto Every Component in One Class',
    analogyEn: 'Putting `<span class="sr-only">Close notification</span>` inside an `✕` icon button keeps the visual UI minimal while telling blind users the exact button purpose!',
    analogyHi: '`✕` icon button ke andar `<span class="sr-only">Close</span>` daalne se visual UI clean rehta hai aur screen reader exact meaning bolta hai!',
    steps: [['Use sr-only', 'Add invisible screen-reader text for icon-only buttons'], ['Skip Link', '`sr-only focus:not-sr-only` jump-to-main accessibility link'], ['Focus Rings', '`focus-visible:ring-2 focus-visible:ring-purple-500`'], ['Motion Reduce', '`motion-reduce:transition-none motion-reduce:animate-none`']],
    jobUse: 'Produces Lighthouse 100 Accessibility scores effortlessly in React + Tailwind apps.',
    mistake: 'Using `<div onClick={...}>` styled like a button with Tailwind classes instead of a real `<button>`!',
    proHabit: 'Never style a `<div>` to look like a button—always put your Tailwind button classes on a real `<button>` or `<a>`!',
    rule: 'Semantic HTML + sr-only + focus-visible:ring + motion-reduce: = Accessible Tailwind UI.',
    code: `<button type="button" class="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-purple-500 motion-reduce:transition-none">
  <span class="sr-only">Close dialog</span>
  <span aria-hidden="true">✕</span>
</button>`,
    out: 'Lighthouse 100 accessible icon button.',
    q1: ['What does Tailwind utility class sr-only do?', 'sr-only visually hides an element from sighted users while keeping it completely readable by screen readers—ideal for providing clear accessible labels on icon-only buttons or "Skip to main content" links.'],
  },

  // ═══ CHAPTER 13: Bootstrap Framework (102..110) ═══
  {
    id: 102, mod: 13, tInMod: 1,
    title: 'Bootstrap overview and setup',
    sub: 'Component-First CSS Framework: Pre-Built Navbars, Modals, 12-Col Grid & Fast Setup',
    coreEn: '==Bootstrap 5== is a ==component-first CSS + JS framework== providing ready-made ==12-column responsive grids, navbars, modals, cards, forms, and utility classes== out of the box (with zero jQuery dependency in v5!)—ideal for rapid admin panels and legacy enterprise apps.',
    coreHi: '==Bootstrap 5== ek ==component-first framework== hai jisme ready-made ==12-column grid, navbars, modals, cards aur forms== bina jQuery ke turant mil jaate hain—admin panels aur enterprise projects mein khoob use hota hai!',
    analogyTitle: 'Pre-Assembled Modular Office Furniture Ready to Place Immediately',
    analogyEn: 'Tailwind gives you custom building blocks for bespoke designs; Bootstrap gives you pre-built styled components (`btn btn-primary`, `modal`, `navbar`) for instant rapid prototyping!',
    analogyHi: 'Tailwind custom design ke liye best hai; Bootstrap ready-made components (`btn-primary`, `modal`, `navbar`) ke saath turbo speed deta hai!',
    steps: [['Setup CDN/NPM', 'Link Bootstrap 5 CSS in `<head>` + `bootstrap.bundle.min.js`'], ['No jQuery In v5', 'Bootstrap 5 uses pure vanilla JS (`bundle` includes Popper)'], ['Know Both Tools', 'Tailwind (modern custom UI) vs Bootstrap (fast pre-built UI)'], ['Verify Load', 'Test `<button class="btn btn-primary">Test</button>`']],
    jobUse: 'Millions of existing corporate dashboards, WordPress themes, and enterprise apps run on Bootstrap 5.',
    mistake: 'Forgetting `bootstrap.bundle.min.js` and wondering why dropdowns, mobile navbars, and modals refuse to open!',
    proHabit: 'Always include `bootstrap.bundle.min.js` (NOT plain `bootstrap.min.js`) so Popper positioning for dropdowns/tooltips works out of the box!',
    rule: 'Bootstrap CSS in <head> + bootstrap.bundle.min.js = Full Interactive Components.',
    code: `<!-- Bootstrap 5 Clean Setup -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>`,
    out: 'Ready-to-use Bootstrap 5 component & grid framework.',
    q1: ['What is the key architectural difference between Tailwind CSS and Bootstrap 5?', 'Bootstrap is component-first (providing pre-styled components like .btn-primary, .card, and .navbar out of the box), whereas Tailwind is utility-first (providing low-level design utilities so you build completely custom designs without fighting default framework styles).'],
  },
  {
    id: 103, mod: 13, tInMod: 2,
    title: 'Containers and breakpoints',
    sub: 'Fixed `.container`, Full-Width `.container-fluid` & 6 Responsive Breakpoint Tiers',
    coreEn: 'Bootstrap wraps page content in ==`.container`== (centered responsive max-width), ==`.container-fluid`== (always 100% edge-to-edge width), or ==`.container-lg`==—across 6 mobile-first breakpoints (`xs`, `sm` 576px, `md` 768px, `lg` 992px, `xl` 1200px, `xxl` 1400px).',
    coreHi: 'Bootstrap content ko ==`.container`== (centered max-width) ya ==`.container-fluid`== (full 100% width) mein wrap karta hai aur 6 mobile-first breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`) provide karta hai!',
    analogyTitle: 'Centered Picture Frame (`.container`) vs Edge-to-Edge Wall Banner (`.container-fluid`)',
    analogyEn: 'Use `.container-fluid` for full-width admin dashboards and `.container` for clean centered marketing pages and articles!',
    analogyHi: 'Full-width dashboards ke liye `.container-fluid` aur centered websites ke liye `.container` use karo!',
    steps: [['.container', 'Centered with clean max-width snapping at each breakpoint'], ['.container-fluid', 'Full 100% viewport width on every screen'], ['6 Breakpoints', '`sm` (576), `md` (768), `lg` (992), `xl` (1200), `xxl` (1400)'], ['Wrap Every Row', 'Always place `.row` INSIDE a `.container` (prevents scroll-x!)']],
    jobUse: 'Prevents unwanted horizontal scrollbars in Bootstrap layouts.',
    mistake: 'Placing `.row` directly inside `<body>` without a `.container` (negative row margins cause a horizontal scrollbar!).',
    proHabit: 'Follow Bootstrap Golden Nesting Rule: **`.container` -> `.row` -> `.col-*`** — never skip a level!',
    rule: 'Always Nest: .container -> .row -> .col-* (Never Put .row Without Container).',
    code: `<section class="container py-5">
  <div class="row g-4">
    <div class="col-12 col-md-6">Left Column</div>
    <div class="col-12 col-md-6">Right Column</div>
  </div>
</section>`,
    out: 'Clean centered responsive section with zero horizontal overflow.',
    q1: ['Why does placing a Bootstrap .row directly inside <body> without a .container cause a horizontal scrollbar?', 'Bootstrap .row applies negative left and right margins to offset column gutter padding; .container provides matching horizontal padding to absorb those negative margins cleanly.'],
  },
  {
    id: 104, mod: 13, tInMod: 3,
    title: 'Grid system',
    sub: 'Mastering the 12-Column Flexbox Grid (`col-12 col-md-6 col-lg-4`) & `g-4` Gutters',
    coreEn: 'Bootstrap ==12-Column Grid== divides every `.row` into 12 units—combine responsive column classes (`col-12 col-md-6 col-lg-4` = 1 col phone -> 2 cols tablet -> 3 cols desktop!) and spacing gutters (`g-4`) cleanly!',
    coreHi: 'Bootstrap ka ==12-Column Grid== har `.row` ko 12 parts mein baant-ta hai—`col-12 col-md-6 col-lg-4` lagate hi mobile par 1, tablet par 2 aur desktop par 3 columns ban jaate hain!',
    analogyTitle: '12-Slice Pizza Divisible Cleanly Into Halves (6+6), Thirds (4+4+4), or Quarters (3+3+3+3)',
    analogyEn: 'Why 12 columns? Because 12 divides evenly by 1, 2, 3, 4, and 6—giving effortless layouts like `col-lg-3` (sidebar) + `col-lg-9` (main)!',
    analogyHi: '12 isliye kyunki 12 aasani se 2, 3, 4 aur 6 mein divide hota hai (`col-lg-3` sidebar + `col-lg-9` main)!',
    steps: [['Math Adds To 12', '`6+6` (2 cols), `4+4+4` (3 cols), `3+9` (sidebar + main)'], ['Mobile-First Cols', '`col-12 col-md-6 col-lg-4` adapts across every screen'], ['Auto-Row Shorthand', '`.row.row-cols-1.row-cols-md-3.g-4` even cleaner!'], ['Add Gutters', '`g-3` / `g-4` adds both horizontal & vertical spacing']],
    jobUse: 'Core layout skill for rapid Bootstrap dashboards and client websites.',
    mistake: 'Putting `col-6` on three items expecting 3 columns (6+6+6=18 wraps the 3rd item onto a new row!).',
    proHabit: 'Use `.row-cols-1 .row-cols-md-2 .row-cols-lg-3 .g-4` on card grids so you do not have to repeat `col-*` on every card!',
    rule: 'Columns Sum to 12 Per Row | Use g-4 Gutters | Mobile-First col-12 -> col-md-6 -> col-lg-4.',
    code: `<div class="container py-4">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <div class="col"><div class="card p-3 h-100">Card 1</div></div>
    <div class="col"><div class="card p-3 h-100">Card 2</div></div>
    <div class="col"><div class="card p-3 h-100">Card 3</div></div>
  </div>
</div>`,
    out: 'Equal-height (`h-100`) responsive 1->2->3 column card grid.',
    q1: ['What does adding h-100 to .card elements inside a Bootstrap .row do?', 'Since Bootstrap rows use Flexbox with stretch alignment on .col children, adding h-100 makes every card in the same row stretch cleanly to match the tallest card height.'],
  },
  {
    id: 105, mod: 13, tInMod: 4,
    title: 'Utility classes',
    sub: 'Fast Spacing (`p-4`, `mb-3`), Flex (`d-flex justify-content-between`), Shadows & Rounded Utilities',
    coreEn: 'Bootstrap 5 includes rich ==utility classes== so you rarely need custom CSS: ==Spacing (`m-3`, `p-4`, `py-5`, `gap-3`)==, ==Flex (`d-flex align-items-center justify-content-between`)==, ==Borders (`border rounded-4 shadow-sm`)==, and ==Display (`d-none d-md-block`)==!',
    coreHi: 'Bootstrap 5 mein built-in ==utility classes== milti hain: ==Spacing (`p-4`, `mb-3`, `gap-3`)==, ==Flex (`d-flex align-items-center`)==, ==`rounded-4 shadow-sm`== aur ==`d-none d-md-block`==!',
    analogyTitle: 'Quick-Adjust Knobs Polishing Spacing & Alignment Without Touching Custom CSS',
    analogyEn: 'Bootstrap spacing runs `0` to `5` (`1=4px`, `2=8px`, `3=16px`, `4=24px`, `5=48px`)—and uses logical `ms-` (margin-start) / `me-` (margin-end) for RTL language support!',
    analogyHi: 'Bootstrap 5 mein `ml-`/`mr-` ki jagah `ms-` (start) aur `me-` (end) use hota hai!',
    steps: [['Spacing 0-5', '`p-3` (16px), `p-4` (24px), `py-5` (48px), `ms-auto`'], ['Flex Helpers', '`d-flex align-items-center justify-content-between gap-3`'], ['Visual Polish', '`bg-white border rounded-4 shadow-sm`'], ['Responsive Hide', '`d-none d-lg-flex` shows only on 992px+ screens']],
    jobUse: 'Speeds up prototyping and keeps Bootstrap custom CSS minimal.',
    mistake: 'Using old Bootstrap 4 `ml-auto` / `mr-3` classes in Bootstrap 5 (renamed to `ms-auto` / `me-3`!).',
    proHabit: 'Use `ms-auto` (margin-start: auto) in Bootstrap 5 navbars to push action buttons cleanly to the right!',
    rule: 'Bootstrap 5 Uses Logical ms-/me- (Start/End) + Spacing Scale 0–5.',
    code: `<div class="d-flex align-items-center justify-content-between gap-3 rounded-4 border bg-white p-4 shadow-sm">
  <h2 class="h5 mb-0">Dashboard</h2>
  <button class="btn btn-primary btn-sm">New Report</button>
</div>`,
    out: 'Crisp utility-styled header bar with zero custom CSS.',
    q1: ['Why did Bootstrap 5 replace ml-* and mr-* with ms-* and me-*?', 'ms- (margin-start) and me- (margin-end) use CSS logical properties so layouts automatically mirror cleanly for Right-to-Left (RTL) languages like Arabic and Hebrew.'],
  },
  {
    id: 106, mod: 13, tInMod: 5,
    title: 'Typography and colors',
    sub: 'Display Headings, Lead Paragraphs & Semantic Theme Colors (`primary`, `success`, `danger`)',
    coreEn: 'Bootstrap standardizes typography with ==`.display-4` (hero titles), `.h1`–`.h6` (visual size decoupled from tag!), `.lead` (intro copy), `.text-muted` / `.text-body-secondary`==, and semantic theme colors (`primary`, `success`, `warning`, `danger`, `info`).',
    coreHi: 'Bootstrap typography mein ==`.display-4` (hero), `.h1`–`.h6` (size classes), `.lead`== aur semantic colors (`text-primary`, `bg-success-subtle`, `text-danger`) ready milte hain!',
    analogyTitle: 'Traffic-Light Semantic Color Vocabulary Built Right Into Class Names',
    analogyEn: 'Bootstrap 5.3 subtle pairs (`bg-success-subtle text-success-emphasis border border-success-subtle`) give instant modern pastel pills with guaranteed contrast!',
    analogyHi: 'Bootstrap 5.3 ke `bg-success-subtle text-success-emphasis` classes turant modern soft pastel badges bana dete hain!',
    steps: [['Decouple Tag/Size', 'Use `<h2 class="h4">` to keep semantic hierarchy + right size'], ['Hero & Lead', '`.display-5 fw-bold` + `.lead text-body-secondary`'], ['Semantic Colors', '`primary` (brand), `success` (green), `danger` (red), `warning`'], ['Subtle Surfaces', '`bg-primary-subtle text-primary-emphasis` for soft pills']],
    jobUse: 'Builds consistent, readable admin dashboards and enterprise apps rapidly.',
    mistake: 'Putting `text-warning` (bright yellow) on white background—hard to read! Use `text-warning-emphasis` instead.',
    proHabit: 'Use Bootstrap 5.3 `-subtle` backgrounds + `-emphasis` text classes for crisp, WCAG-safe badges and alerts.',
    rule: 'Semantic Tag + .h* Visual Size + -subtle/-emphasis Color Pairs = Clean Bootstrap UI.',
    code: `<h1 class="display-5 fw-bold text-dark">Welcome Back</h1>
<p class="lead text-body-secondary">Track your full-stack learning progress.</p>
<span class="badge bg-success-subtle text-success-emphasis border border-success-subtle">Completed</span>`,
    out: 'Crisp semantic typography and high-contrast subtle status badge.',
    q1: ['How does Bootstrap let you keep a semantic <h2> tag while giving it the visual size of an <h4>?', 'By applying the visual utility class .h4 directly on the semantic tag: <h2 class="h4">Section Title</h2>, preserving proper document outline for SEO and screen readers.'],
  },
  {
    id: 107, mod: 13, tInMod: 6,
    title: 'Buttons, cards, alerts, and badges',
    sub: 'Assembling Clean Dashboards Rapidly With Bootstrap Core UI Components',
    coreEn: 'Combine Bootstrap 4 workhorse components to ship clean UIs in minutes: ==Buttons (`.btn .btn-primary`, `.btn-outline-secondary`)==, ==Cards (`.card .card-body .card-footer`)==, ==Alerts (`.alert .alert-danger` with `role="alert"`)==, and ==Badges (`.badge .rounded-pill`)==.',
    coreHi: 'Bootstrap ke 4 core components se minutes mein dashboard banta hai: ==Buttons (`.btn-primary`), Cards (`.card`), Alerts (`.alert` + `role="alert"`), aur Badges (`.badge .rounded-pill`)==!',
    analogyTitle: 'Pre-Fabricated UI Building Blocks Ready for Instant Assembly',
    analogyEn: 'Always pair `.alert` with `role="alert"` and dismissible close buttons with `aria-label="Close"` so Bootstrap components stay 100% accessible!',
    analogyHi: 'Alerts par `role="alert"` aur close button par `aria-label="Close"` lagana accessibility ke liye zaroori hai!',
    steps: [['Buttons', '`.btn .btn-primary` (main CTA) + `.btn-outline-secondary`'], ['Cards', '`.card .shadow-sm .border-0` -> `.card-body` -> `.card-footer`'], ['Alerts', '`.alert .alert-success .alert-dismissible` + `role="alert"`'], ['Badges', '`.badge .rounded-pill .text-bg-primary` for counts/tags']],
    jobUse: 'Powers CRUD admin panels, student portals, and e-commerce product cards.',
    mistake: 'Using 4 bright `.btn-primary` buttons side-by-side on one card so the user has no idea which action is primary!',
    proHabit: 'Use ONLY ONE solid `.btn-primary` per card/modal—make secondary actions `.btn-outline-secondary`!',
    rule: '1 Solid Primary CTA + Clean Cards + role="alert" Notices = Crisp Component UI.',
    code: `<div class="card border-0 shadow-sm rounded-4">
  <div class="card-body p-4">
    <span class="badge rounded-pill text-bg-primary mb-2">New</span>
    <h3 class="card-title h5">MERN Bootcamp</h3>
    <p class="card-text text-body-secondary">Build 5 production apps.</p>
    <a href="/enroll" class="btn btn-primary">Enroll Now</a>
  </div>
</div>`,
    out: 'Modern, clean Bootstrap 5 product card.',
    q1: ['Why should a card or dialog have only one solid .btn-primary button?', 'Visual hierarchy: having one primary solid button clearly highlights the main recommended action while secondary actions (like Cancel or Learn More) use .btn-outline-secondary so users never hesitate.'],
  },
  {
    id: 108, mod: 13, tInMod: 7,
    title: 'Forms and validation styles',
    sub: 'Polished `.form-control`, `.form-select`, `.form-floating` & `.is-valid`/`.is-invalid` Feedback',
    coreEn: 'Style clean forms effortlessly using ==`.form-label`==, ==`.form-control`== (inputs/textareas), ==`.form-select`== (dropdowns), ==`.form-check`== (radios/checkboxes), and built-in ==`.is-invalid` + `.invalid-feedback`== validation styles!',
    coreHi: 'Bootstrap forms mein ==`.form-label`, `.form-control`, `.form-select`, `.form-check`== aur validation ke liye ==`.is-invalid` + `.invalid-feedback`== lagao—turant red border aur clear error message dikhta hai!',
    analogyTitle: 'Ready-Made Form Kit With Automatic Green Checkmarks & Red Error Highlights',
    analogyEn: 'Bootstrap `.was-validated` + HTML5 `required` turns native constraint validation into crisp green/red borders with inline `.invalid-feedback` messages automatically!',
    analogyHi: '`.is-invalid` aur `.invalid-feedback` lagane se har invalid field par clean red outline aur helpful error text khud dikh jata hai!',
    steps: [['Text Inputs', '`<label class="form-label">` + `<input class="form-control">`'], ['Select & Check', '`.form-select` for dropdowns; `.form-check-input` for checks'], ['Validation State', 'Toggle `.is-invalid` / `.is-valid` + `.invalid-feedback`'], ['Input Groups', '`.input-group` cleanly attaches `₹` or `@` prefixes']],
    jobUse: 'Builds clean signup, checkout, and admin CRUD forms in minutes.',
    mistake: 'Using `.form-control` on `<select>` or `<input type="checkbox">` instead of `.form-select` and `.form-check-input`!',
    proHabit: 'Always pair `.is-invalid` with a specific `.invalid-feedback` message explaining how to fix the field.',
    rule: '.form-control (Text) | .form-select (Dropdown) | .is-invalid + .invalid-feedback.',
    code: `<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" id="email" class="form-control is-invalid" required />
  <div class="invalid-feedback">Please enter a valid email address.</div>
</div>`,
    out: 'Crisp validated Bootstrap form field with clear error message.',
    q1: ['Which Bootstrap 5 classes should be used for a text input vs a dropdown select vs a checkbox?', 'Use .form-control for text/email/password inputs and textareas, .form-select for <select> dropdowns, and .form-check-input (with .form-check-label) for checkboxes and radio buttons.'],
  },
  {
    id: 109, mod: 13, tInMod: 8,
    title: 'Responsive navbar and components',
    sub: 'Collapsible `.navbar-expand-lg`, Modals, Offcanvas Drawers & Accordions Powered by `data-bs-*`',
    coreEn: 'Bootstrap 5 interactive components work with ==zero custom JavaScript== using `data-bs-toggle` & `data-bs-target`: ==`.navbar-expand-lg`== (auto-collapses to hamburger on mobile!), ==Modal== dialogs, ==Offcanvas== drawers, and ==Accordions==!',
    coreHi: 'Bootstrap 5 ke interactive components bina custom JS ke `data-bs-toggle` se chalte hain: ==`.navbar-expand-lg`== (mobile hamburger auto!), ==Modals==, ==Offcanvas drawers== aur ==Accordions==!',
    analogyTitle: 'Plug-and-Play Smart Doors & Drawers That Already Know How to Open, Close & Trap Focus',
    analogyEn: 'Bootstrap Modals automatically handle keyboard `Esc` closing, backdrop clicks, and focus trapping—saving hours of tricky accessibility JS!',
    analogyHi: 'Bootstrap Modals khud `Esc` key, backdrop click aur keyboard accessibility handle kar lete hain!',
    steps: [['Responsive Nav', '`.navbar .navbar-expand-lg` + `.navbar-toggler` button'], ['Match Target IDs', '`data-bs-target="#mainNav"` MUST match `id="mainNav"`!'], ['Interactive Modals', '`data-bs-toggle="modal" data-bs-target="#loginModal"`'], ['Include Bundle JS', 'Requires `bootstrap.bundle.min.js` to toggle cleanly']],
    jobUse: 'Ships complete navigation, FAQ accordions, and confirmation modals rapidly.',
    mistake: 'Having a typo between `data-bs-target="#navMenu"` and `id="navbarMenu"` so the mobile hamburger button does nothing!',
    proHabit: 'Test clicking the mobile hamburger menu at `390px` width every time you edit a Bootstrap navbar.',
    rule: 'Match data-bs-target="#id" to id="..." Exactly + Load bootstrap.bundle.min.js.',
    code: `<nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="/">FutureIT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link" href="#courses">Courses</a></li></ul>
    </div>
  </div>
</nav>`,
    out: 'Complete sticky responsive Bootstrap navbar with working mobile toggle.',
    q1: ['What are the two most common reasons a Bootstrap 5 mobile navbar hamburger button fails to open when clicked?', '1) bootstrap.bundle.min.js was not loaded on the page, or 2) the button data-bs-target="#id" does not exactly match the id="..." of the .navbar-collapse element.'],
  },
  {
    id: 110, mod: 13, tInMod: 9,
    title: 'Theme customization',
    sub: 'Overriding `--bs-*` CSS Variables, Brand Colors & Built-In `data-bs-theme="dark"`',
    coreEn: 'Make Bootstrap look 100% uniquely branded (never "generic default blue"!) by ==overriding Bootstrap 5.3 CSS variables (`--bs-primary`, `--bs-body-font-family`, `--bs-border-radius`)== or Sass variables—and toggle built-in Dark Mode with ==`data-bs-theme="dark"`==!',
    coreHi: 'Bootstrap ko generic default blue mat chhodo—==`--bs-primary`, `--bs-body-font-family` CSS variables== override karke apna brand look do, aur ==`data-bs-theme="dark"`== se instant Dark Mode chalao!',
    analogyTitle: 'Customizing a Factory Car With Your Brand Paint, Interior & Lighting in 5 Lines',
    analogyEn: 'Bootstrap 5.3 ships with native Dark Mode built into every single component—adding `data-bs-theme="dark"` to `<html>` transforms the entire app instantly!',
    analogyHi: '`<html>` par `data-bs-theme="dark"` lagate hi Bootstrap 5.3 ke saare cards, forms aur modals instant Dark Mode mein aa jaate hain!',
    steps: [['Override :root Vars', 'Set `--bs-primary`, `--bs-primary-rgb`, `--bs-body-font-family`'], ['Load Custom LAST', 'Link `custom.css` AFTER `bootstrap.min.css` in `<head>`'], ['Native Dark Mode', 'Set `data-bs-theme="dark"` on `<html>` (or individual sections!)'], ['Sass For Deep Scale', 'Override `$primary` before `@import "bootstrap"` in Sass builds']],
    jobUse: 'Lets you deliver fast Bootstrap apps that still match your client exact brand guidelines.',
    mistake: 'Linking `custom.css` BEFORE `bootstrap.min.css` so Bootstrap overwrites all your custom styles!',
    proHabit: 'Always load your custom stylesheet **AFTER** Bootstrap CSS and override `--bs-*` variables cleanly instead of fighting with `!important`!',
    rule: 'Load Custom CSS After Bootstrap + Override --bs-* Variables + data-bs-theme="dark".',
    code: `/* custom.css (loaded AFTER bootstrap.min.css) */
:root {
  --bs-primary: #6d28d9;
  --bs-primary-rgb: 109, 40, 217;
  --bs-body-font-family: 'Inter', system-ui, sans-serif;
}`,
    out: 'Uniquely branded Bootstrap 5 theme with zero `!important` hacks.',
    q1: ['In what order must bootstrap.min.css and your custom.css be linked inside <head>, and why?', 'bootstrap.min.css must be loaded FIRST, and custom.css SECOND—because in the CSS Cascade, later rules override earlier rules of equal specificity, allowing your brand variables and tweaks to take effect cleanly.'],
  },
];

export const MERN_TAB3_BLUEPRINTS: Record<number, DsTopicBlueprint> =
  expandMernSpecs(TAB3_SPECS);
