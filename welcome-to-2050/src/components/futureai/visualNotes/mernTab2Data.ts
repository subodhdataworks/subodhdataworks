import { expandMernSpecs, type MernTopicSpec } from './fullStackMernHelper';
import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

const TAB2_SPECS: MernTopicSpec[] = [
  // ═══ CHAPTER 06: Forms & Multimedia in HTML (42..50) ═══
  {
    id: 42, mod: 6, tInMod: 1,
    title: 'Why forms are important',
    sub: 'The Primary Input Gateway Connecting Users to Your Express Backend & MongoDB',
    coreEn: '==HTML Forms== are how users interact with every web application—powering ==Signup/Login, Checkout, Search Bars, Filters, Contact Forms, and Profile Updates== by capturing structured user input and sending it cleanly to your server.',
    coreHi: '==HTML Forms== har web app ka main input gateway hain—==Login, Signup, Checkout, Search aur Contact Forms== sab user ka data capture karke aapke backend server ko bhejte hain!',
    analogyTitle: 'Order Slip Handed From the Customer Directly to the Kitchen',
    analogyEn: 'Without forms, the web would be read-only brochures—clean, accessible forms directly boost signups, checkout conversions, and clean database records!',
    analogyHi: 'Forms ke bina web sirf padhne ka brochure hota—clean aur easy forms seedha user signups aur sales badhate hain!',
    steps: [['Capture Input', 'Collect name, email, password, payment or search query'], ['Validate Early', 'HTML5 + JS checks give instant friendly feedback'], ['Submit Safely', 'Send via HTTPS `POST` (not `GET` for passwords!)'], ['Re-Validate Server', 'Express backend validates again before saving to MongoDB']],
    jobUse: 'Every SaaS, e-commerce, fintech, and dashboard app relies heavily on rock-solid forms.',
    mistake: 'Putting form inputs inside random `<div>`s without a `<form>` tag (breaks pressing `Enter` to submit!).',
    proHabit: 'Always wrap inputs inside a real `<form>` tag so keyboard `Enter` submission works naturally.',
    rule: 'Real <form> Tag + Instant UX Validation + Strict Backend Validation = Pro Forms.',
    code: `<form action="/api/contact" method="POST">
  <label for="email">Work Email</label>
  <input id="email" name="email" type="email" required />
  <button type="submit">Send</button>
</form>`,
    out: 'Clean, keyboard-friendly, standards-compliant form.',
    q1: ['Why should you always wrap login or search inputs inside a real <form> element instead of just a <div> with a button onclick?', 'A real <form> enables native Enter-key submission, HTML5 constraint validation (required, type="email"), password-manager autofill, and better screen-reader semantics.'],
  },
  {
    id: 43, mod: 6, tInMod: 2,
    title: 'form and input elements',
    sub: 'Connecting `action`, `method`, `name`, `id`, `placeholder` & `value` Cleanly',
    coreEn: 'The ==`<form>`== element defines `action` (target URL) and `method` (`GET` for search, `POST` for creating/auth), while every ==`<input>`== needs a ==`name` attribute== (the exact key sent in `FormData`/JSON!) and ==`id`== linked to its `<label>`.',
    coreHi: '==`<form>`== mein `action` aur `method` (`GET` ya `POST`) hota hai, aur har ==`<input>`== mein ==`name` attribute== zaroori hai kyunki wahi key backend ko bheji jati hai!',
    analogyTitle: 'Labeled Boxes Inside a Shipping Carton So the Receiver Knows What Each Field Is',
    analogyEn: 'If an `<input>` has no `name` attribute, native HTML form submission completely skips it—always include `name="email"`!',
    analogyHi: 'Agar `<input>` par `name` attribute nahi hai toh native form submission us field ko skip kar deta hai!',
    steps: [['Pick Method', '`GET` for bookmarkable search | `POST` for logins/creates'], ['Add name Attr', '`name="username"` becomes key in `new FormData(form)`'], ['Link id + for', '`<label for="email">` + `<input id="email">`'], ['Add autocomplete', '`autocomplete="email"` speeds up mobile & browser autofill']],
    jobUse: 'Foundation for both vanilla HTML forms and React/Express API submissions.',
    mistake: 'Using `method="GET"` on a login form—exposing the user plaintext password right inside the browser URL bar!',
    proHabit: 'Always use `POST` over HTTPS for sensitive forms and add proper `autocomplete` attributes.',
    rule: 'Every Input Needs: id (for label) + name (for data) + type (for keyboard/validation).',
    code: `<form method="POST" action="/api/login">
  <label for="user-email">Email</label>
  <input id="user-email" name="email" type="email" autocomplete="email" required />
</form>`,
    out: 'Clean structured form payload with autofill enabled.',
    q1: ['Why must a login form NEVER use method="GET"?', 'GET appends all form field values directly onto the URL query string (?email=a@b.com&password=123), exposing plaintext passwords in browser history, server logs, and shoulder-surfing. Always use POST over HTTPS.'],
  },
  {
    id: 44, mod: 6, tInMod: 3,
    title: 'Input types and labels',
    sub: 'Smart Mobile Keyboards (`email`, `tel`, `number`, `date`, `password`) & Always-Visible Labels',
    coreEn: 'Choosing exact HTML5 ==`type` attributes== (`email`, `password`, `number`, `tel`, `date`, `search`, `url`) unlocks ==automatic mobile keyboards== and built-in validation—and ALWAYS pair every input with a visible ==`<label for="...">`== (never rely only on `placeholder`!).',
    coreHi: 'Exact ==`type` (`email`, `tel`, `number`, `date`, `password`)== lagane se mobile par sahi keyboard khulta hai—aur har input par visible ==`<label for="...">`== lagao, sirf `placeholder` par bharosa mat karo!',
    analogyTitle: 'Giving Mobile Users a Numeric Keypad for Phone Numbers Automatically',
    analogyEn: 'Clicking a linked `<label for="phone">` focuses the input box automatically (bigger click target!), and unlike `placeholder`, a visible label never disappears while typing!',
    analogyHi: 'Visible `<label>` type karte waqt gayab nahi hota aur uspe click karne se input automatically focus ho jata hai!',
    steps: [['Match Exact Type', '`email` shows `@`, `tel` shows keypad, `date` shows picker'], ['Visible <label>', 'Always link `<label for="x">` to `<input id="x">`'], ['Use Placeholder Right', 'Give format hint (`e.g. priya@company.com`), not label'], ['Password Safety', '`type="password"` masks dots + optional Show toggle']],
    jobUse: 'Dramatically improves mobile conversion rates and passes WCAG accessibility audits.',
    mistake: 'Deleting `<label>` tags and using only `placeholder="Email"` (disappears once user types, fails accessibility!).',
    proHabit: 'Keep `<label>` always visible above the input and use `placeholder` strictly for example hints.',
    rule: 'Visible <label for> + Exact Input Type = Higher Mobile Conversions & Accessibility.',
    code: `<label for="phone">Mobile Number</label>
<input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required />`,
    out: 'Accessible input triggering the mobile numeric dialpad automatically.',
    q1: ['Why is using placeholder text as a replacement for a <label> element considered bad UX and accessibility?', 'Placeholders vanish the moment the user starts typing (causing memory strain during form review), often have low color contrast, and are not reliably announced as field labels by all screen readers.'],
  },
  {
    id: 45, mod: 6, tInMod: 4,
    title: 'textarea and select',
    sub: 'Multi-Line Message Boxes (`<textarea>`) & Clean Dropdown Menus (`<select>`, `<optgroup>`)',
    coreEn: 'Use ==`<textarea rows="4">`== for multi-line user text (comments, bio, shipping address) and ==`<select>` with `<option>` (and `<optgroup>`)== for clean standardized single-choice dropdowns.',
    coreHi: 'Multi-line text (message, address, bio) ke liye ==`<textarea>`== aur standardized dropdown menu ke liye ==`<select>` + `<option>`== use karo!',
    analogyTitle: 'Notepad Sheet (`<textarea>`) vs Pre-Printed Menu Choices (`<select>`)',
    analogyEn: 'Remember: `<textarea>` puts its default text BETWEEN opening and closing tags (unlike `<input value="...">`), and `<select>` first prompt option should use `value="" disabled selected`!',
    analogyHi: 'Yaad rakho: `<select>` ke pehle `"-- Choose Role --"` option par `value=""` lagao taaki `required` validation sahi kaam kare!',
    steps: [['<textarea>', 'Set `rows="4"`, `maxlength="500"` & CSS `resize: vertical`'], ['<select> Options', 'Give every `<option>` a clean machine `value="frontend"`'], ['Required Prompt', 'First option: `<option value="">-- Select Role --</option>`'], ['Group Long Lists', 'Use `<optgroup label="India">` to organize long menus']],
    jobUse: 'Used in every support ticket form, job application, profile editor, and filter bar.',
    mistake: 'Allowing horizontal `<textarea>` resize (`resize: both`) so users accidentally drag it off the page layout!',
    proHabit: 'Always style textareas with `resize: vertical;` so users can expand height cleanly without breaking layout width.',
    rule: 'textarea = resize: vertical + maxlength | select = empty-value prompt option for required.',
    code: `<label for="role">Target Role</label>
<select id="role" name="role" required>
  <option value="">-- Choose a role --</option>
  <option value="frontend">Frontend Engineer</option>
  <option value="fullstack">Full-Stack MERN</option>
</select>`,
    out: 'Clean, validated dropdown with machine-friendly option values.',
    q1: ['Why must the default placeholder option inside a required <select> have value=""?', 'If the first option has no value attribute (e.g., <option>Choose one</option>), HTML treats the text "Choose one" as a valid non-empty value and bypasses required validation!'],
  },
  {
    id: 46, mod: 6, tInMod: 5,
    title: 'Radio buttons and checkboxes',
    sub: 'Single-Choice (`radio` Sharing Same `name`) vs Multi-Choice (`checkbox`) Inside `<fieldset>`',
    coreEn: 'Use ==Radio Buttons (`type="radio"`)== sharing the ==exact same `name`== when the user picks ==ONLY ONE option== (e.g., Payment Method), and ==Checkboxes (`type="checkbox"`)== for ==toggle/multi-select options==—grouped inside ==`<fieldset>` + `<legend>`==!',
    coreHi: 'Jab sirf ==EK option== chunna ho toh same `name` wale ==Radio Buttons== use karo, aur ==multiple select ya Terms Agree== ke liye ==Checkboxes==—dono ko ==`<fieldset>` + `<legend>`== mein group karo!',
    analogyTitle: 'Old Car Radio Buttons (Press 1, Others Pop Out) vs Grocery Checklist (Tick Any)',
    analogyEn: 'If 3 radio buttons have DIFFERENT `name` attributes, the user can select all 3 at once—matching `name="plan"` locks them into true single-choice!',
    analogyHi: 'Agar 3 radio buttons ke `name` alag honge toh teeno select ho jayenge—same `name="plan"` lagane se sirf 1 hi select hota hai!',
    steps: [['Same name = Radio', 'All mutually exclusive radios MUST share `name="plan"`'], ['Unique value + id', 'Each radio/checkbox needs distinct `value` & `id`'], ['Group In Fieldset', 'Wrap choices in `<fieldset><legend>Choose Plan</legend>...</fieldset>`'], ['Checkbox For Multi', 'Use checkboxes for skills, filters & "Agree to Terms"']],
    jobUse: 'Powers checkout payment selectors, quiz answers, product filters, and cookie consent banners.',
    mistake: 'Giving radio buttons different `name` attributes so users cannot uncheck them!',
    proHabit: 'Wrap radio/checkbox groups inside `<fieldset>` + `<legend>` for effortless accessibility and clean visual grouping.',
    rule: 'Radio = 1 Choice (Same name) | Checkbox = 0-to-Many Choices | Group in <fieldset>.',
    code: `<fieldset>
  <legend>Select Payment Method</legend>
  <label><input type="radio" name="pay" value="upi" required /> UPI</label>
  <label><input type="radio" name="pay" value="card" /> Credit/Debit Card</label>
</fieldset>`,
    out: 'Accessible, mutually exclusive radio group.',
    q1: ['What happens if two radio buttons in a group are given different name attributes?', 'The browser treats them as separate independent groups, allowing both to be selected simultaneously and preventing the user from deselecting them.'],
  },
  {
    id: 47, mod: 6, tInMod: 6,
    title: 'Buttons and form validation',
    sub: 'Explicit `type="submit"` vs `type="button"` + Built-In HTML5 Constraint Attributes',
    coreEn: 'ALWAYS specify ==`type="submit"` or `type="button"`== on `<button>` inside a form (default `<button>` inside `<form>` submits the page!), and leverage built-in ==HTML5 validation== (`required`, `minlength`, `min/max`, `pattern`) before JS & backend checks!',
    coreHi: 'Form ke andar har `<button>` par ==`type="submit"` ya `type="button"`== zaroor likho (warna normal button bhi form submit kar deta hai!), aur ==`required`, `minlength`, `pattern`== validation use karo!',
    analogyTitle: 'Bouncer Checking Ticket Format at the Front Door Before Letting Requests In',
    analogyEn: 'Forgetting `type="button"` on a "Show Password" or "Cancel" button inside a `<form>` causes clicking Cancel to accidentally submit the form!',
    analogyHi: 'Form ke andar "Cancel" ya "Show Password" button par `type="button"` nahi likhoge toh click karne par form submit ho jayega!',
    steps: [['Explicit Button Type', '`type="submit"` sends form; `type="button"` runs JS only'], ['HTML5 Constraints', '`required`, `minlength="8"`, `max="100"`, `pattern`'], ['Custom UX Errors', 'Pair HTML5 constraints with clear inline error messages'], ['Server Always Checks', 'Never skip backend validation—HTML attributes can be edited!']],
    jobUse: 'Prevents accidental form submissions and catches 80% of user typos instantaneously.',
    mistake: 'Putting `<button>Toggle Password</button>` inside a `<form>` without `type="button"`!',
    proHabit: 'Never write a bare `<button>` without an explicit `type` attribute anywhere in HTML or React!',
    rule: 'Every <button> Gets Explicit type="submit" or type="button" + Validate Frontend & Backend.',
    code: `<form>
  <input name="password" type="password" minlength="8" required />
  <button type="button" id="togglePwd">Show</button>
  <button type="submit">Create Account</button>
</form>`,
    out: 'Zero accidental form submits and crisp built-in validation.',
    q1: ['What is the default type of a <button> element placed inside an HTML <form>?', 'Its default type is "submit". Therefore, any non-submitting button inside a form (like Cancel, Close, or Show Password) MUST explicitly specify type="button".'],
  },
  {
    id: 48, mod: 6, tInMod: 7,
    title: 'Audio and video elements',
    sub: 'Native `<video>` & `<audio>` Playback, `controls`, `poster`, `muted` Autoplay & Captions',
    coreEn: 'Embed media natively without plugins using ==`<video controls poster="..." preload="metadata">`== and ==`<audio controls>`==—include ==`<source>` fallbacks==, ==`<track kind="captions">`== for accessibility, and remember browsers ONLY allow autoplay if `muted`!',
    coreHi: 'Native ==`<video controls poster="...">`== aur ==`<audio controls>`== use karo—`preload="metadata"` se page fast load hota hai aur browsers sirf `muted` video ko hi autoplay allow karte hain!',
    analogyTitle: 'Built-In Smart Media Player Ready in Every Browser With Zero Extra Downloads',
    analogyEn: 'Setting `preload="metadata"` loads only duration and thumbnail instead of downloading a 40 MB video immediately when the page opens!',
    analogyHi: '`preload="metadata"` lagane se poora 40 MB video turant download nahi hota—sirf thumbnail aur duration load hoti hai!',
    steps: [['Add Controls', 'Always show `controls` unless building accessible custom UI'], ['Set Poster & Preload', '`poster="thumb.webp"` + `preload="metadata"` for fast LCP'], ['Muted Autoplay Rule', 'Background hero videos require `autoplay muted loop playsinline`'], ['Add Captions', '`<track kind="captions" src="en.vtt" srclang="en">`']],
    jobUse: 'Used in EdTech platforms, SaaS product demos, podcasts, and e-commerce product previews.',
    mistake: 'Using `<video autoplay>` with loud sound (browsers block it immediately AND users hate it!).',
    proHabit: 'Always add `playsinline muted` on background hero loops so iOS Safari does not hijack full-screen!',
    rule: 'controls + poster + preload="metadata" + captions | Autoplay Must Be Muted.',
    code: `<video controls width="640" poster="/demo-thumb.webp" preload="metadata">
  <source src="/product-demo.mp4" type="video/mp4" />
  <track kind="captions" src="/demo-en.vtt" srclang="en" label="English" />
  Your browser does not support HTML5 video.
</video>`,
    out: 'Fast-loading, accessible native video player.',
    q1: ['Why do modern browsers block <video autoplay> unless the muted attribute is also present?', 'To protect user experience and mobile data from unexpected loud audio blasting when opening tabs. Adding muted (and playsinline for iOS) allows silent hero videos to autoplay cleanly.'],
  },
  {
    id: 49, mod: 6, tInMod: 8,
    title: 'Embedding content with iframe',
    sub: 'Safely Embedding YouTube, Google Maps & Demos With `title`, `loading="lazy"` & `sandbox`',
    coreEn: 'An ==`<iframe>`== embeds an external webpage (YouTube video, Google Map, Figma prototype) inside your page—ALWAYS add ==`title="..."`== (for screen readers), ==`loading="lazy"`== (huge speed boost!), and ==`sandbox`== for untrusted embeds.',
    coreHi: '==`<iframe>`== se aap YouTube, Google Maps ya Figma prototype apne page mein dikha sakte ho—hamesha ==`title`==, ==`loading="lazy"`== aur security ke liye ==`sandbox`== attribute use karo!',
    analogyTitle: 'Framed Window Looking Into Another Website From Inside Your Room',
    analogyEn: 'Untrusted iframes can run malicious redirects—restricting them with `sandbox="allow-scripts allow-same-origin"` protects your site!',
    analogyHi: 'External iframes par `loading="lazy"` lagane se aapka page fast load hota hai aur `title` se accessibility pass hoti hai!',
    steps: [['Always Add title', '`<iframe title="Office Location Map" ...>` (WCAG required)'], ['Lazy Load', '`loading="lazy"` prevents heavy YouTube JS slowing initial load'], ['Responsive 16:9', 'Use CSS `aspect-ratio: 16 / 9; width: 100%;`'], ['Restrict With sandbox', 'Limit third-party permissions via `sandbox` & `referrerpolicy`']],
    jobUse: 'Standard pattern for contact-page maps, course video players, and interactive code sandboxes.',
    mistake: 'Embedding 5 YouTube iframes on one page without `loading="lazy"` (adds 4+ MB of instant bloat!).',
    proHabit: 'Style embedded video iframes with `width: 100%; aspect-ratio: 16 / 9; border: 0;` for effortless responsiveness!',
    rule: 'iframe Always Needs: title + loading="lazy" + aspect-ratio: 16/9 + Security sandbox.',
    code: `<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="MERN Course Introduction Video"
  loading="lazy"
  style="width: 100%; aspect-ratio: 16 / 9; border: 0;"
  allowfullscreen
></iframe>`,
    out: 'Responsive, fast-loading, accessible embedded media.',
    q1: ['Why is loading="lazy" especially important on YouTube or Google Maps <iframe> embeds?', 'Third-party embeds load heavy external JavaScript and trackers. Adding loading="lazy" defers loading them until the user scrolls near the embed, dramatically improving initial page load speed.'],
  },
  {
    id: 50, mod: 6, tInMod: 9,
    title: 'Form usability and accessibility',
    sub: 'Error Summaries, `aria-describedby`, Clear Focus Rings & Single-Column Mobile Forms',
    coreEn: 'High-converting ==accessible forms== use ==single-column layouts==, ==clear visible labels==, ==inline error messages linked via `aria-describedby`==, ==visible keyboard `:focus-visible` outlines==, and ==helpful specific error text== (never vague `"Invalid input"`!).',
    coreHi: 'High-converting ==accessible forms== mein ==single-column layout==, ==visible labels==, ==`aria-describedby` inline error messages== aur ==clear keyboard focus ring== hota hai!',
    analogyTitle: 'Friendly Receptionist Highlighting the Exact Missing Line on a Paper Form',
    analogyEn: 'Telling a user `"Password must be at least 8 characters with 1 number"` right below the input fixes errors in 2 seconds instead of frustrating them into leaving!',
    analogyHi: 'Vague `"Error"` ke bajaye exact reason (`"Password kam se kam 8 characters ka rakho"`) input ke niche dikhao!',
    steps: [['Single Column', 'Users complete single-column forms much faster than 2-col grids'], ['Link Errors (ARIA)', '`aria-invalid="true"` + `aria-describedby="email-err"`'], ['Never Remove Focus', 'Keep crisp `:focus-visible` ring for keyboard Tab users'], ['Disable Double-Click', 'Show "Submitting..." state so users do not double-pay!']],
    jobUse: 'Directly boosts checkout/signup revenue and meets enterprise WCAG 2.1 AA compliance.',
    mistake: 'Writing `*:focus { outline: none; }` which makes keyboard navigation completely invisible!',
    proHabit: 'Test every form using ONLY your **Tab, Shift+Tab, Space, and Enter** keys without touching the mouse!',
    rule: 'Visible Labels + Linked ARIA Errors + Keyboard Focus Ring + Single Column = Pro Form UX.',
    code: `<label for="pwd">Password</label>
<input id="pwd" type="password" aria-invalid="true" aria-describedby="pwd-err" />
<p id="pwd-err" role="alert">Must be at least 8 characters with 1 number.</p>`,
    out: 'WCAG-compliant, high-conversion accessible form field.',
    q1: ['How does aria-describedby improve accessibility for form validation errors?', 'It programmatically links an input field to its specific inline error message element so screen readers automatically read the exact error explanation as soon as the user focuses that field.'],
  },

  // ═══ CHAPTER 07: Advanced HTML5 Concepts (51..58) ═══
  {
    id: 51, mod: 7, tInMod: 1,
    title: 'Semantic HTML',
    sub: 'Writing Meaningful Markup Instead of "Div Soup" for SEO, Accessibility & Clean Code',
    coreEn: '==Semantic HTML== uses tags that describe ==what the content IS== (`<header>`, `<nav>`, `<main>`, `<article>`, `<button>`, `<time>`) rather than meaningless `<div>` and `<span>` soup—giving you ==better Google SEO, free keyboard accessibility, and readable code==!',
    coreHi: '==Semantic HTML== ka matlab hai har jagah `<div>` bharne ("Div Soup") ke bajaye ==meaningful tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<button>`)== use karna—isse ==SEO, Accessibility aur Code Readability== teeno boost hote hain!',
    analogyTitle: 'Labeled Moving Boxes ("Kitchen", "Books", "Fragile") vs 20 Identical Blank Cardboard Boxes',
    analogyEn: 'A `<div>` says nothing; `<article>`, `<nav>`, and `<button>` tell browsers, Googlebot, and screen readers the exact role of every piece of UI!',
    analogyHi: 'Blank boxes (`<div>`) se kuch pata nahi chalta; labeled semantic tags Google aur screen readers dono ko turant samajh aate hain!',
    steps: [['Replace Div Soup', 'Use `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`'], ['Native Interactive', 'Use `<button>` & `<a>` instead of clickable `<div>`s'], ['Check Landmarks', 'Screen readers jump straight to `<main>` & `<nav>`'], ['Boost SEO', 'Search engines weight `<main>`, `<h1>` & `<article>` higher']],
    jobUse: 'Tested in almost every Frontend & Full-Stack React interview!',
    mistake: 'Writing `<div class="button" onclick="save()">Save</div>` instead of `<button type="button">Save</button>`.',
    proHabit: 'Only reach for `<div>` or `<span>` when no semantic HTML5 tag fits—strictly for layout/styling wrappers.',
    rule: 'Meaning First -> Semantic HTML5 Tag | Pure Styling Wrapper Only -> <div> / <span>.',
    code: `<!-- Semantic HTML5 (Clean & Accessible) -->
<header><nav>...</nav></header>
<main>
  <article><h1>Post Title</h1><p>...</p></article>
</main>
<footer>© 2026 Future IT</footer>`,
    out: 'Clean, accessible, SEO-optimized page architecture.',
    q1: ['Name 3 concrete benefits of writing Semantic HTML instead of using <div> for everything.', '1) Better SEO (search engines understand primary content and headings), 2) Built-in Accessibility (screen readers can jump across landmarks like <nav> and <main>), and 3) Cleaner, self-documenting code for developer teams.'],
  },
  {
    id: 52, mod: 7, tInMod: 2,
    title: 'header, nav, main, section, article, and footer',
    sub: 'Mastering the 6 Core HTML5 Page Landmarks & When to Pick `<article>` vs `<section>`',
    coreEn: 'Structure every page with the ==6 HTML5 Landmarks==: ==`<header>`== (logo/intro), ==`<nav>`== (primary links), ==`<main>`== (unique primary content, ONLY 1 visible per page!), ==`<section>`== (thematic group with heading), ==`<article>`== (self-contained reusable post/card), and ==`<footer>`==.',
    coreHi: 'Har page mein ==6 core Landmarks== lagao: ==`<header>`, `<nav>`, `<main>` (ek page mein sirf 1!), `<section>` (thematic group), `<article>` (independent card/blog post), aur `<footer>`==!',
    analogyTitle: 'Newspaper Layout: Masthead (`header`), Index (`nav`), Stories (`article`), Bottom Credits (`footer`)',
    analogyEn: 'Quick test: could this block stand alone on another site or RSS feed (like a blog post, tweet, or product card)? -> `<article>`. Is it a chapter/part of the page? -> `<section>`!',
    analogyHi: 'Test: kya ye card/post akele stand kar sakta hai? -> `<article>`. Kya ye page ka ek section hai? -> `<section>`!',
    steps: [['<header> + <nav>', 'Top brand bar & primary navigation links'], ['Single <main>', 'Wraps the core unique content of that page'], ['<section> vs <article>', 'Section = thematic chapter; Article = standalone post/card'], ['<aside> & <footer>', 'Sidebar related info (`<aside>`) + bottom links (`<footer>`)']],
    jobUse: 'Directly translates into your React App `Layout.jsx` wrapper component!',
    mistake: 'Putting multiple `<main>` tags on one page or wrapping the navbar inside `<main>` instead of `<header>`.',
    proHabit: 'Build your React `AppLayout` once with `<header>`, `<nav>`, `<main>`, and `<footer>` so every route inherits clean landmarks!',
    rule: '1 <main> Per Page | <article> = Standalone Item | <section> = Thematic Group.',
    code: `<body>
  <header><nav aria-label="Primary">...</nav></header>
  <main>
    <section aria-labelledby="courses-heading">
      <h2 id="courses-heading">Popular Courses</h2>
      <article><h3>MERN Stack</h3><p>Full-stack JS...</p></article>
    </section>
  </main>
  <footer>© 2026</footer>
</body>`,
    out: 'Textbook-clean semantic landmark structure.',
    q1: ['What is the difference between <section> and <article> in HTML5?', '<article> represents self-contained, independently reusable content (such as a blog post, news story, comment, or product card), whereas <section> groups related thematic content that belongs to the surrounding document (usually with its own heading).'],
  },
  {
    id: 53, mod: 7, tInMod: 3,
    title: 'Meta tags',
    sub: 'Essential `<head>` Metadata: Charset, Viewport, Description & Open Graph Social Cards',
    coreEn: '==Meta tags== inside `<head>` tell browsers, Google Search, and WhatsApp/LinkedIn how to render and preview your site: ==`charset="UTF-8"`, `viewport`, `description` (150-160 chars), and Open Graph (`og:title`, `og:image`)==!',
    coreHi: '`<head>` ke ==Meta tags== browser, Google aur WhatsApp/LinkedIn link previews control karte hain: ==`charset`, `viewport`, `description` aur Open Graph (`og:title`, `og:image`)==!',
    analogyTitle: 'Book Back-Cover Summary & Thumbnail Shown on WhatsApp When Someone Shares Your Link',
    analogyEn: 'Ever shared your portfolio link on LinkedIn or WhatsApp and seen a gorgeous preview card with title + banner image? That comes from **Open Graph (`og:*`) meta tags**!',
    analogyHi: 'WhatsApp ya LinkedIn par link share karte hi jo sundar thumbnail + title card dikhta hai, wo **Open Graph (`og:*`) meta tags** se banta hai!',
    steps: [['Charset + Viewport', 'Mandatory UTF-8 + `width=device-width, initial-scale=1.0`'], ['Meta Description', '140-160 char compelling summary for Google search snippets'], ['Open Graph (og:*)', '`og:title`, `og:description`, `og:image` (1200x630px)'], ['Favicon + Canonical', 'Brand tab icon + `<link rel="canonical">` for clean SEO']],
    jobUse: 'Makes every portfolio, SaaS launch, and client website look pro when shared on social media.',
    mistake: 'Leaving Vite default `<title>Vite + React</title>` and zero meta description on a live deployed portfolio!',
    proHabit: 'Always customize `<title>`, `<meta name="description">`, favicon, and `og:image` BEFORE deploying any project!',
    rule: 'Custom Title + 155-Char Description + Open Graph Card = Polished Live Launch.',
    code: `<meta name="description" content="Master Full-Stack MERN with AI in hands-on projects." />
<meta property="og:title" content="Future IT — Full-Stack MERN" />
<meta property="og:description" content="Build and deploy real MERN apps." />
<meta property="og:image" content="https://example.com/og-banner.png" />`,
    out: 'Rich Google snippet and gorgeous WhatsApp/LinkedIn link preview.',
    q1: ['What are Open Graph (og:*) meta tags used for?', 'Open Graph meta tags control how your webpage preview card (title, description, and 1200x630 thumbnail image) appears when someone shares your URL on LinkedIn, WhatsApp, X/Twitter, Slack, or Discord.'],
  },
  {
    id: 54, mod: 7, tInMod: 4,
    title: 'SEO basics',
    sub: 'On-Page Technical SEO: Titles, Headings, Fast Load, Clean URLs, Alt Text & Mobile-First',
    coreEn: '==Technical SEO (Search Engine Optimization)== helps Google discover and rank your website using ==unique `<title>` & `meta description`, clean semantic `<h1>/<h2>`, fast Core Web Vitals, mobile responsiveness, descriptive URLs (`/courses/mern`), and image `alt` text==.',
    coreHi: '==Technical SEO== aapki website ko Google par upar rank karata hai: ==unique `<title>`, clean `<h1>/<h2>`, fast speed, mobile-friendly design, clean URLs (`/courses/mern`) aur image `alt` text==!',
    analogyTitle: 'Clear Storefront Sign, Organized Aisles & Fast Checkout So Google Recommends You First',
    analogyEn: 'Clean developer fundamentals (Semantic HTML + Fast WebP images + Mobile-First CSS + HTTPS) automatically give you 80% of technical SEO for free!',
    analogyHi: 'Semantic HTML, fast WebP images, mobile-first layout aur HTTPS—ye developer basics aapko 80% technical SEO free mein de dete hain!',
    steps: [['Unique Title/Meta', 'Every route gets its own descriptive `<title>` (50-60 chars)'], ['Semantic Structure', '1 `<h1>`, logical `<h2>`s, real `<a href>` links'], ['Speed & Mobile', 'Fast LCP (WebP images) + responsive mobile-first design'], ['Crawlability', 'Clean URLs (`/blog/react-hooks`), `robots.txt` & `sitemap.xml`']],
    jobUse: 'Clients and employers love developers who build fast, Google-ranking websites out of the box.',
    mistake: 'Using ugly URLs like `/page?id=9482`, missing `<h1>`, or shipping 10 MB unoptimized images.',
    proHabit: 'Run Chrome DevTools **Lighthouse -> SEO & Performance Audit** before launching any site!',
    rule: 'Unique Titles + Semantic HTML + Fast Mobile Speed + Clean URLs = Strong Technical SEO.',
    code: `<!-- Strong On-Page SEO Foundations -->
<title>MERN Stack Course — Build 5 Real Projects | Future IT</title>
<link rel="canonical" href="https://futureit.com/courses/mern" />
<h1>Full-Stack MERN Development Course</h1>`,
    out: '95+ Lighthouse SEO score ready to rank organically.',
    q1: ['Name 4 technical SEO practices that frontend developers directly control in HTML and CSS.', '1) Unique descriptive <title> and <meta name="description"> per page, 2) Clean semantic heading hierarchy (one <h1>), 3) Fast page speed (optimized WebP images, lazy loading, minimal blocking scripts), and 4) Mobile-responsive design with descriptive <a href> links and image alt text.'],
  },
  {
    id: 55, mod: 7, tInMod: 5,
    title: 'Image alt text',
    sub: 'Writing Meaningful Descriptions vs Empty `alt=""` for Decorative Graphics',
    coreEn: 'Every `<img>` MUST have an ==`alt` attribute==: write ==concise, meaningful descriptions== for informative images/charts (`alt="Bar chart showing Q3 sales up 24%"`), and use ==empty `alt=""`== for purely decorative dividers/icons so screen readers skip noise!',
    coreHi: 'Har `<img>` par ==`alt` attribute== zaroori hai: meaningful photos/charts par ==clear description== likho, aur sirf decorative icons par ==khali `alt=""`== rakho taaki screen reader bekaar shor na padhe!',
    analogyTitle: 'Describing a Photo Clearly Over a Phone Call to a Friend Who Cannot See It',
    analogyEn: 'Never write `"Image of..."` or `"Picture of..."` (screen readers already announce `"Image"`!)—jump straight to what the image communicates!',
    analogyHi: '`"Image of..."` mat likho—screen reader khud `"Image"` bolta hai; seedha photo ka matlab likho!',
    steps: [['Informative Image', 'Describe purpose/content concisely (<125 chars)'], ['Decorative Image', 'Use `alt=""` (empty string) so screen readers skip it'], ['Linked Image', 'Describe destination (`alt="Future IT Home"` on logo link)'], ['Skip "Image of"', 'Never start with "Picture of" or "Photo of"']],
    jobUse: 'Core WCAG accessibility requirement and boosts Google Image search traffic.',
    mistake: 'Omitting `alt` completely (causes screen readers to read ugly filenames like `"IMG_2026_final_v2.jpg"` aloud!).',
    proHabit: 'Remember: **Missing `alt` != `alt=""`**! Missing `alt` reads the filename; `alt=""` cleanly tells screen readers "decorative, skip me".',
    rule: 'Informative -> Concise Meaning | Decorative -> alt="" | Never Omit alt.',
    code: `<!-- Informative -->
<img src="/chart.webp" alt="Monthly revenue grew from ₹2L in Jan to ₹5L in Jun" />

<!-- Purely Decorative Sparkle -->
<img src="/sparkle.svg" alt="" aria-hidden="true" />`,
    out: 'Clean, respectful experience for screen-reader users and broken-image fallbacks.',
    q1: ['What is the difference between omitting the alt attribute completely vs writing alt="" on a decorative image?', 'Omitting alt causes screen readers to read the raw image filename aloud, whereas writing alt="" explicitly signals that the image is purely decorative so screen readers silently skip it.'],
  },
  {
    id: 56, mod: 7, tInMod: 6,
    title: 'Accessibility fundamentals',
    sub: 'POUR Principles (Perceivable, Operable, Understandable, Robust) & Keyboard-First Design',
    coreEn: '==Web Accessibility (a11y / WCAG)== ensures everyone—including keyboard-only, blind, low-vision, and motor-impaired users—can use your app via ==POUR==: ==Perceivable== (contrast/alt), ==Operable== (keyboard Tab), ==Understandable== (clear labels), and ==Robust== (semantic HTML + ARIA).',
    coreHi: '==Web Accessibility (a11y)== ensure karta hai ki har insaan (keyboard-only, low-vision, screen-reader users) aapka app smoothly use kar sake—==Semantic HTML, High Contrast (4.5:1), Keyboard Tab aur ARIA== ke through!',
    analogyTitle: 'Curb Cuts on Sidewalks—Built for Wheelchairs, Yet Helping Strollers & Suitcases Too',
    analogyEn: 'Good accessibility (keyboard shortcuts, crisp contrast, clean labels, captions) makes your web app BETTER for 100% of users!',
    analogyHi: 'Good accessibility (high contrast, clean keyboard Tab, clear labels) sirf disabled users ke liye nahi—har user ka experience better banati hai!',
    steps: [['Keyboard Test', 'Tab through entire page—every button/link reachable?'], ['Color Contrast', 'Maintain >= 4.5:1 contrast for normal text (3:1 large)'], ['First Rule Of ARIA', 'Always prefer native `<button>`/`<nav>` over `div + role`!'], ['Run Lighthouse', 'DevTools -> Lighthouse -> Accessibility score >= 95']],
    jobUse: 'Legally required in US/EU/global enterprise apps and heavily respected in frontend interviews.',
    mistake: 'Using clickable `<div>`s with no keyboard support, tiny grey text on white, or removing `:focus` rings.',
    proHabit: 'Run the **60-Second Keyboard-Only Test** (unplug mouse, use Tab/Enter/Esc) on every new UI feature!',
    rule: 'Semantic HTML + 4.5:1 Contrast + Full Keyboard Navigation + Lighthouse >= 95.',
    code: `<!-- Skip to Content Link + Accessible Icon Button -->
<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
<button type="button" aria-label="Close modal">✕</button>`,
    out: 'Inclusive, WCAG-compliant UI passing Lighthouse Accessibility.',
    q1: ['What is the First Rule of ARIA in web accessibility?', 'If a native HTML element already has the built-in semantics and keyboard behavior you need (like <button>, <a>, <input>, <nav>), ALWAYS use the native HTML element instead of adding ARIA roles to a generic <div>.'],
  },
  {
    id: 57, mod: 7, tInMod: 7,
    title: 'HTML best practices',
    sub: 'Clean, Valid, Maintainable HTML Habits Every Senior Frontend Engineer Follows',
    coreEn: 'Write ==production-grade HTML5== by using ==lowercase tags & attributes==, ==double quotes around attribute values==, ==valid nesting==, ==zero inline `style="..."` clutter==, ==semantic landmarks==, and ==W3C / ESLint validation==.',
    coreHi: '==Production-grade HTML5== habits: ==lowercase tags, double quotes, clean nesting, semantic landmarks, zero inline styles clutter==, aur ==Prettier auto-formatting==!',
    analogyTitle: 'Clean, Modular Electrical Wiring Following National Safety Code',
    analogyEn: 'Clean HTML makes CSS simpler, React JSX effortless, SEO stronger, and bugs 10x easier for teammates to spot!',
    analogyHi: 'Clean HTML likhne se CSS simple hoti hai, React JSX smooth banta hai, aur bugs turant dikh jaate hain!',
    steps: [['Consistent Syntax', 'Lowercase tags (`<div>`), double quotes (`class="card"`)'], ['Separate Concerns', 'HTML = structure | CSS = styling | JS = behavior'], ['No Deprecated Tags', 'Never use `<center>`, `<font>`, `<marquee>`'], ['Validate Cleanly', 'Keep nesting valid & test via W3C Validator / Lighthouse']],
    jobUse: 'Ensures your code passes senior PR code reviews on the very first try.',
    mistake: 'Mixing inline `style="color:red; margin:12px"` and `onclick="..."` directly across 40 HTML tags.',
    proHabit: 'Let Prettier format every save and keep HTML focused strictly on clean semantic structure.',
    rule: 'Semantic + Valid Nesting + Separate CSS/JS + Prettier Formatted = Pro HTML.',
    code: `<!-- Clean Production HTML5 Card -->
<article class="course-card">
  <img src="/mern.webp" alt="MERN Stack course banner" width="400" height="225" loading="lazy" />
  <div class="course-body">
    <h3>Full-Stack MERN</h3>
    <a href="/courses/mern" class="btn-primary">Start Learning</a>
  </div>
</article>`,
    out: 'Clean, maintainable markup ready for CSS, Tailwind, or React.',
    q1: ['Why is separating HTML structure from inline CSS styles and inline onclick JavaScript handlers considered a best practice?', 'Separating concerns makes code reusable, easier to cache and maintain across multiple pages, enforces Content Security Policy (CSP) safety, and keeps markup clean and readable.'],
  },
  {
    id: 58, mod: 7, tInMod: 8,
    title: 'Developer handoff basics',
    sub: 'Translating Figma Mockups Into Clean Semantic HTML Structure Before Styling',
    coreEn: 'During ==Design-to-Code Handoff==, inspect the Figma mockup ==box-by-box from outside in==: identify ==Landmarks (`header`, `main`, `footer`), repeating Cards (`article`), Typography scales, Spacing tokens, and Responsive mobile stack== BEFORE writing a single line of CSS!',
    coreHi: '==Figma se HTML/CSS handoff== karte waqt pehle design ko ==boxes mein tod kar== samjho: ==Landmarks, repeating Cards, Font sizes, Spacing tokens aur Mobile layout==—pehle clean HTML likho, phir CSS lagao!',
    analogyTitle: 'Drawing Box Outlines Over a Magazine Page Before Building the Layout',
    analogyEn: 'Every modern website is just **nested rectangles**! Breaking a Figma hero or pricing section into clean semantic boxes makes CSS Flexbox & Grid feel effortless!',
    analogyHi: 'Har website asal mein **nested rectangles** hi hai—Figma screen ko boxes mein todte hi Flexbox aur Grid 100% aasaan ho jata hai!',
    steps: [['1. Box-Out Layout', 'Spot Header, Hero, 3-Card Grid, Testimonial, Footer'], ['2. Extract Tokens', 'Note brand Hex colors, font families & spacing (`8/16/24px`)'], ['3. Export Assets', 'Download logos as `.svg`, photos as optimized `.webp`'], ['4. Code HTML First', 'Write clean semantic HTML skeleton -> then apply CSS/Tailwind']],
    jobUse: 'Daily collaboration skill between UI/UX Designers and Frontend Developers in real tech companies.',
    mistake: 'Eyeballing colors and spacing randomly instead of inspecting exact tokens from Figma Dev Mode.',
    proHabit: 'Always ask designers about **Hover, Active, Loading, Empty, and Mobile** states—not just the happy desktop screen!',
    rule: 'Box-Out Structure -> Extract Tokens & SVG/WebP -> Semantic HTML -> Responsive CSS.',
    code: `/* Extracted Figma Design Tokens -> CSS Variables */
:root {
  --color-primary: #6d28d9;
  --color-text: #1e293b;
  --radius-card: 16px;
  --space-section: 64px;
}`,
    out: 'Pixel-accurate, design-system-aligned implementation.',
    q1: ['What extra UI states should a frontend developer always check during a Figma design handoff beyond the default desktop screen?', 'Mobile/tablet responsive layouts, interactive states (hover, focus, active, disabled), loading skeletons, empty states (zero items), and form/API error states.'],
  },

  // ═══ CHAPTER 08: Introduction to CSS3 (59..66) ═══
  {
    id: 59, mod: 8, tInMod: 1,
    title: 'What CSS does',
    sub: 'Cascading Style Sheets: Turning Raw HTML Skeletons Into Branded, Responsive Visual UI',
    coreEn: '==CSS3 (Cascading Style Sheets)== controls the ==visual presentation and layout== of HTML—colors, typography, spacing, Flexbox/Grid layouts, animations, and responsive mobile breakpoints—using rules of ==`selector { property: value; }`==.',
    coreHi: '==CSS3== aapke plain HTML skeleton ko ==colors, fonts, spacing, Flexbox/Grid layouts, animations aur mobile responsiveness== dekar sundar modern website banata hai!',
    analogyTitle: 'Interior Designer Painting Walls, Arranging Furniture & Setting Lighting in a House',
    analogyEn: 'Same exact HTML can look like a 1995 text page OR a sleek modern Apple/Stripe product simply by changing the CSS stylesheet!',
    analogyHi: 'Wahi HTML bina CSS ke 1995 jaisa dikhta hai, aur clean CSS lagate hi Apple/Stripe jaisa modern UI ban jata hai!',
    steps: [['Selector', 'Targets which HTML elements to style (`.btn`, `h1`)'], ['Declarations', '`property: value;` pairs inside `{ ... }`'], ['The Cascade', 'Later / more specific rules override earlier ones'], ['Inheritance', 'Text styles (`font-family`, `color`) inherit down to children']],
    jobUse: 'Every UI framework (Tailwind, Bootstrap, Material UI) compiles down to standard CSS3!',
    mistake: 'Jumping to Tailwind without understanding core CSS Box Model, Specificity, Flexbox, and Grid.',
    proHabit: 'Inspect computed CSS rules in Chrome DevTools Elements tab whenever a style behaves unexpectedly.',
    rule: 'Selector { Property: Value; } + Cascade + Inheritance = Visual Mastery.',
    code: `.btn-primary {
  background-color: #6d28d9;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 9999px;
}`,
    out: 'Crisp, branded pill button.',
    q1: ['What does "Cascading" mean in Cascading Style Sheets (CSS)?', 'When multiple CSS rules target the same element, the browser resolves conflicts systematically using Origin, Importance, Selector Specificity, and Source Order (later rules win on equal specificity).'],
  },
  {
    id: 60, mod: 8, tInMod: 2,
    title: 'Inline, internal, and external CSS',
    sub: 'Why External Stylesheets (`<link rel="stylesheet">`) Beat Inline & Internal CSS',
    coreEn: 'CSS can be added 3 ways: ==Inline (`style="..."`)== (highest specificity, hard to maintain—avoid except dynamic JS values!), ==Internal (`<style>` in `<head>`)== (single-page only), and ==External (`styles.css` via `<link>`)== (cached, reusable across all pages—industry standard!).',
    coreHi: 'CSS lagane ke 3 tarike hain: ==Inline (`style=""`)== (avoid karo!), ==Internal (`<style>`)== (1 page ke liye), aur ==External (`styles.css` via `<link>`)==—browser cache aur multi-page reuse ke liye ==External CSS best== hai!',
    analogyTitle: 'Central Brand Stylebook (External) vs Hand-Painting Every Single Brick (Inline)',
    analogyEn: 'Change `--primary` once in `styles.css` and all 50 pages update instantly—plus browsers cache `styles.css` so Page 2 loads in 10ms!',
    analogyHi: '`styles.css` mein 1 color badlo aur poori 50-page site ek second mein update ho jati hai!',
    steps: [['External (Best)', '`<link rel="stylesheet" href="./styles.css" />` in `<head>`'], ['Internal (<style>)', 'Quick single-file email templates or tiny demos'], ['Inline (Avoid)', 'Overrides everything & duplicates styles—use only for dynamic JS'], ['Cascade Priority', 'Inline > Internal/External (later wins on equal specificity)']],
    jobUse: 'Standard styling architecture for static sites, CSS Modules, and React Vite apps.',
    mistake: 'Sprinkling `style="margin-top: 15px"` across 100 HTML tags then struggling to make the site responsive.',
    proHabit: 'Always use External CSS (or Tailwind utility classes / CSS Modules in React).',
    rule: 'External Stylesheet = Reusable + Cached + Clean | Avoid Inline Styles.',
    code: `<!-- Best Practice: External Stylesheet in <head> -->
<head>
  <link rel="stylesheet" href="./styles.css" />
</head>`,
    out: 'Fast, browser-cached, maintainable styling across all pages.',
    q1: ['Why is an External CSS file preferred over Inline CSS in production websites?', 'External CSS separates structure from styling, can be reused across all pages, supports media queries and :hover pseudo-classes, and is cached by the browser for faster page loads.'],
  },
  {
    id: 61, mod: 8, tInMod: 3,
    title: 'Selectors and specificity',
    sub: 'Element, Class (`.card`), ID (`#nav`), Combinators & Resolving Specificity Battles',
    coreEn: 'Target elements with ==Element (`p`)==, ==Class (`.card`)==, ==ID (`#hero`)==, and ==Attribute (`input[type="email"]`)== selectors—when rules clash, ==Specificity wins: Inline (1000) > ID (100) > Class/Pseudo (10) > Element (1)==. Stick to ==Classes== so specificity stays flat and clean!',
    coreHi: 'CSS mein jab 2 rules takrate hain toh ==Specificity== jeet-ti hai: ==Inline (1000) > ID `#` (100) > Class `.` (10) > Element (1)==—hamesha ==Classes (`.card`)== use karo aur `#id` ya `!important` se bacho!',
    analogyTitle: 'Tie-Breaker Scorecard: General Rule (`p`) < Team Badge (`.btn`) < VIP ID (`#main`)',
    analogyEn: 'Using `#header .nav ul li a` creates a specificity monster that forces ugly `!important` hacks later—keep selectors short and class-based (`.nav-link`)!',
    analogyHi: 'Lambe `#id` selectors aur `!important` lagane se CSS jungle ban jata hai—hamesha clean short classes (`.nav-link`) use karo!',
    steps: [['Style With Classes', 'Prefer `.btn`, `.card-title` (reusable & low specificity)'], ['Avoid IDs For CSS', 'Reserve `#id` for `<label for>`, anchor links & JS hooks'], ['Combinators', 'Descendant (`A B`), Direct Child (`A > B`), Sibling (`A + B`)'], ['Never Abuse !important', 'Fix selector order/specificity instead of `!important`']],
    jobUse: 'Prevents the #1 CSS headache ("Why is my new CSS rule not applying?!").',
    mistake: 'Slapping `!important` on every property instead of checking DevTools to see which higher-specificity rule won!',
    proHabit: 'Keep specificity low with single reusable classes (`.card-title`), and inspect crossed-out rules in DevTools Elements tab.',
    rule: 'Inline > ID > Class > Element | Style With Classes, Never !important Wars.',
    code: `/* Specificity Comparison */
p             { color: gray; }     /* 0,0,1 */
.intro        { color: navy; }     /* 0,1,0 -> Wins over p! */
#hero .intro  { color: purple; }   /* 1,1,0 -> Too rigid, avoid IDs in CSS */`,
    out: 'Predictable, conflict-free CSS architecture.',
    q1: ['If an element has <p id="msg" class="text"> and CSS sets #msg { color: red } and .text { color: blue }, which color wins and why?', 'Red wins because an ID selector (#msg, specificity 1-0-0) always overrides a class selector (.text, specificity 0-1-0), regardless of which appears later in the file.'],
  },
  {
    id: 62, mod: 8, tInMod: 4,
    title: 'Colors and backgrounds',
    sub: 'Hex, `rgb()`/`rgba()`, `hsl()`, Linear Gradients & `background-size: cover`',
    coreEn: 'Define crisp brand colors using ==Hex (`#6d28d9`)==, ==`rgba(0,0,0,0.5)`== (transparency), or ==`hsl(263, 70%, 50%)`== (easiest to tweak lightness for hover states!)—and style hero banners cleanly with ==`background-size: cover; background-position: center;`==.',
    coreHi: 'Colors ke liye ==Hex (`#6d28d9`)==, transparency ke liye ==`rgba()`==, aur hover shades ke liye ==`hsl()`== use karo—hero background images par ==`background-size: cover; background-position: center;`== lagao!',
    analogyTitle: 'Artist Mixing Paint Transparency & Framing a Wall Mural Cleanly',
    analogyEn: 'Always add a subtle dark gradient overlay over background photos so white hero text stays 100% readable with high contrast!',
    analogyHi: 'Background photo par halka dark gradient overlay lagane se upar likha white text har screen par crisp padha jata hai!',
    steps: [['Brand Palette', '1 Primary + 1 Accent + Clean Neutrals (90% of UI!)'], ['HSL For Shades', 'Change only Lightness (`50% -> 42%`) for smooth hover!'], ['Cover & Center', '`background-size: cover; background-position: center;`'], ['Readable Overlays', 'Layer `linear-gradient(rgba(0,0,0,.5), ...)` under white text']],
    jobUse: 'Makes websites look clean, modern, and legible across every screen.',
    mistake: 'Putting white text directly on top of a bright busy photo with zero dark overlay.',
    proHabit: 'Store your palette in `:root` CSS variables (`--bg`, `--text`, `--primary`) so dark mode & rebranding take 10 seconds!',
    rule: 'Restrained Palette + HSL Shades + Dark Overlay Over Photos = Crisp UI.',
    code: `.hero {
  background:
    linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)),
    url('/hero.webp') center / cover no-repeat;
  color: #ffffff;
}`,
    out: 'Crisp, high-contrast full-bleed hero section.',
    q1: ['Why is HSL (Hue, Saturation, Lightness) often easier to work with than Hex codes when creating hover states or themes?', 'Because keeping Hue and Saturation constant while simply lowering Lightness by 8% creates an exact darker hover shade of your brand color mathematically, without guessing Hex codes.'],
  },
  {
    id: 63, mod: 8, tInMod: 5,
    title: 'Typography',
    sub: 'Font Stacks, Google Fonts (`display=swap`), `line-height: 1.5–1.6` & `max-width: 65ch`',
    coreEn: 'Great web typography uses ==max 2 font families== (with system fallbacks like `Inter, system-ui, sans-serif`), ==16px+ body size==, ==`line-height: 1.5–1.65`==, ==tighter heading line-height (`1.15–1.25`)==, and ==`max-width: 65ch`== so lines never stretch edge-to-edge!',
    coreHi: 'Clean typography rules: ==max 2 fonts== (+ system fallback), ==16px+ body==, ==`line-height: 1.6`==, aur paragraphs par ==`max-width: 65ch`== taaki lines screen ke end tak na failein!',
    analogyTitle: 'Comfortable Book Column Width vs Reading One Giant 2-Meter Banner Line',
    analogyEn: 'Eyes lose their place when text lines exceed ~65–75 characters—one line of CSS (`max-width: 65ch`) makes any blog or article feel effortlessly readable!',
    analogyHi: 'Sirf `max-width: 65ch` lagane se har article aur landing page book ki tarah comfortable padhne layak ban jata hai!',
    steps: [['Clean Font Stack', '"Inter", system-ui, -apple-system, sans-serif'], ['Readable Scale', 'Body `1rem` (16px), H1 `2.5rem–3.5rem`, clear weight contrast'], ['Unitless Line-Height', 'Use `line-height: 1.6` (unitless scales cleanly with font size!)'], ['Measure (65ch)', 'Limit long prose paragraphs to `max-width: 65ch`']],
    jobUse: '90% of the web is typography—nailing spacing and hierarchy instantly elevates any UI.',
    mistake: 'Setting fixed pixel `line-height: 20px` on a `32px` heading so lines crash vertically into each other!',
    proHabit: 'Always write **unitless `line-height`** (`1.5` for body, `1.2` for headings) and load Google Fonts with `&display=swap`.',
    rule: 'Unitless line-height (1.5–1.6) + 16px+ Body + max-width: 65ch = Effortless Reading.',
    code: `body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #1e293b;
}
p { max-width: 65ch; }`,
    out: 'Crisp, editorial-grade typography on every device.',
    q1: ['Why should CSS line-height almost always be written as a unitless number (e.g., 1.6) instead of pixels (e.g., 24px)?', 'A unitless line-height scales proportionally with each child element own font-size, whereas a fixed pixel line-height gets inherited literally and causes large headings to overlap vertically.'],
  },
  {
    id: 64, mod: 8, tInMod: 6,
    title: 'CSS units: px, %, rem, em, vh, vw',
    sub: 'Picking the Exact Right Unit: `rem` for Fonts/Spacing, `%` for Fluid Widths, `px` for Hairline Borders',
    coreEn: 'Use ==`rem`== (relative to root `<html>` 16px) for ==font sizes & spacing== (respects user browser zoom!), ==`%`== for ==fluid container widths==, ==`dvh`/`vh` & `vw`== for ==viewport heights==, and ==`px`== mainly for ==1px borders & subtle shadows==!',
    coreHi: 'Fonts aur spacing ke liye ==`rem`== (user accessibility zoom support karta hai!), fluid widths ke liye ==`%`==, full-screen sections ke liye ==`min-height: 100dvh`==, aur ==`px`== sirf 1px borders/shadows ke liye use karo!',
    analogyTitle: 'Stretchy Measuring Tape (`rem` / `%`) vs Rigid Steel Ruler (`px`)',
    analogyEn: 'Why `rem` beats `em` for nested lists? `em` compounds (`1.2 * 1.2 * 1.2` = giant text!), while `rem` ALWAYS references the single root `16px` cleanly!',
    analogyHi: '`em` nested hone par multiply hokar bada ho jata hai; `rem` hamesha root `16px` se consistent rehta hai!',
    steps: [['rem (Root EM)', 'Default for fonts (`1rem = 16px`) & spacing (`1.5rem = 24px`)'], ['% (Parent Relative)', 'Fluid widths (`width: 100%; max-width: 1200px`)'], ['dvh / vh / vw', 'Full-height hero (`min-height: 100dvh` avoids mobile bar bug!)'], ['px (Fixed)', '1px borders, hairline dividers & crisp shadows']],
    jobUse: 'Prevents broken mobile layouts and passes accessibility text-resize requirements.',
    mistake: 'Using `height: 100vh` (cuts off content on short screens!) instead of `min-height: 100dvh`!',
    proHabit: 'Use **`min-height: 100dvh`** (not fixed `height: 100vh`) on hero sections so mobile browser address bars never clip buttons!',
    rule: 'Fonts/Spacing = rem | Widths = % + max-width | Hero = min-height: 100dvh | Borders = px.',
    code: `.hero {
  min-height: 100dvh;     /* Dynamic viewport height — mobile safe! */
  padding: 2rem 1.25rem;  /* Scales cleanly with user font settings */
}
.card { border: 1px solid #e2e8f0; width: 100%; max-width: 24rem; }`,
    out: 'Fluid, accessible sizing across phones, laptops, and 4K monitors.',
    q1: ['What is the key difference between em and rem in CSS?', 'rem is always relative to the root <html> font-size (typically 16px), so it stays predictable everywhere. em is relative to the current/parent element font-size, which can compound unexpectedly inside nested elements.'],
  },
  {
    id: 65, mod: 8, tInMod: 7,
    title: 'Margin, padding, borders',
    sub: 'Inside Breathing Room (`padding`) vs Outside Separation (`margin`) & Clean Shorthands',
    coreEn: '==`padding`== adds ==space INSIDE the border== (grows the clickable/colored area!), ==`border`== wraps the edge (`1px solid #e2e8f0`), and ==`margin`== adds ==invisible space OUTSIDE the border== to push neighboring elements away—plus `margin-inline: auto` centers fixed-width blocks!',
    coreHi: '==`padding`== border ke ==ANDAR ki space== hai (button bada aur comfortable banta hai!), ==`border`== kinara hai, aur ==`margin`== border ke ==BAHAR ki space== hai jo do boxes ko alag rakhti hai!',
    analogyTitle: 'Bubble Wrap Inside a Box (`padding`) + Box Cardboard (`border`) + Shelf Gap Between Boxes (`margin`)',
    analogyEn: 'Remember the 4-value shorthand clock: `padding: Top Right Bottom Left` (`12px 24px` = Top/Bottom 12px, Left/Right 24px)!',
    analogyHi: 'Shorthand ghadi ki tarah chalta hai (TRBL): `Top Right Bottom Left` — aur 2 values (`12px 24px`) = Vertical, Horizontal!',
    steps: [['Padding (Inside)', 'Makes buttons/cards spacious & clickable (`12px 24px`)'], ['Border (Edge)', '`border: 1px solid #cbd5e1; border-radius: 12px;`'], ['Margin (Outside)', 'Separates sibling sections; `margin-inline: auto` centers!'], ['Margin Collapse', 'Vertical margins of adjacent blocks merge (use Flexbox `gap`!)']],
    jobUse: 'Spacing rhythm is the #1 secret separating amateur cramped layouts from polished SaaS UI.',
    mistake: 'Adding `margin` to a button hoping to make the purple button bigger (only `padding` grows the background!).',
    proHabit: 'Inside Flexbox/Grid containers, prefer **`gap: 1rem`** over messy individual child margins!',
    rule: 'Padding = Inside Space | Margin = Outside Space | Flexbox/Grid = Use gap.',
    code: `.container {
  max-width: 1100px;
  margin-inline: auto;   /* Centers container cleanly */
  padding: 2rem 1.5rem;  /* Comfortable inner breathing room */
  border: 1px solid #e2e8f0;
  border-radius: 16px;
}`,
    out: 'Centered, crisp, comfortably spaced UI container.',
    q1: ['Why does vertical margin collapse happen in standard CSS block flow, and how do modern layouts avoid it?', 'When two vertical block elements touch, CSS collapses their adjacent top and bottom margins into the single larger value instead of adding them. Using Flexbox or CSS Grid with the gap property eliminates margin-collapse surprises cleanly.'],
  },
  {
    id: 66, mod: 8, tInMod: 8,
    title: 'CSS box model',
    sub: 'The #1 Must-Have CSS Reset: `box-sizing: border-box` So Widths Never Overflow',
    coreEn: 'Every HTML element is a ==4-layer rectangular box== (`Content -> Padding -> Border -> Margin`). By default (`content-box`), adding padding INCREASES total width and breaks grids—ALWAYS put ==`*, *::before, *::after { box-sizing: border-box; }`== at the top of every stylesheet!',
    coreHi: 'Har HTML element ek ==4-layer box== hai (`Content -> Padding -> Border -> Margin`). Default `content-box` mein padding width badha kar layout tod deti hai—isliye har CSS ke top par ==`box-sizing: border-box;`== zaroor lagao!',
    analogyTitle: 'Buying a 300px Frame Where Padding Fits INSIDE 300px Instead of Expanding to 340px',
    analogyEn: 'With `box-sizing: border-box`, two `width: 50%` cards with `20px` padding sit side-by-side cleanly at 100% total instead of overflowing to 108% and wrapping!',
    analogyHi: '`box-sizing: border-box` lagane se `width: 300px` hamesha exact `300px` rehta hai—padding aur border andar adjust ho jaate hain!',
    steps: [['4 Layers', 'Content -> Padding -> Border -> Margin (inspect in DevTools!)'], ['Default Trap', '`content-box`: 300px + 20px pad + 2px border = 344px!'], ['Universal Fix', '`*, *::before, *::after { box-sizing: border-box; }`'], ['Inspect Live', 'DevTools -> Elements -> Computed tab shows colored Box Model']],
    jobUse: 'Asked in virtually 100% of Frontend & Full-Stack interviews!',
    mistake: 'Forgetting `box-sizing: border-box` and wondering why two `width: 50%` columns refuse to sit side-by-side!',
    proHabit: 'Start EVERY CSS file with the universal `box-sizing: border-box` reset (Tailwind includes it automatically in Preflight!).',
    rule: 'Always Set *, *::before, *::after { box-sizing: border-box; } at Line 1 of CSS.',
    code: `/* Line 1 of Every Modern Stylesheet */
*, *::before, *::after {
  box-sizing: border-box;
}
/* Now width: 300px stays EXACTLY 300px including padding & border! */`,
    out: 'Predictable, rock-solid layout math with zero surprise overflows.',
    q1: ['Explain the exact difference between box-sizing: content-box and box-sizing: border-box.', 'In content-box (browser default), width applies only to the inner content, so padding and border ADD extra pixels to the final rendered size. In border-box, width includes content, padding, and border—keeping the rendered element at the exact specified width.'],
  },

  // ═══ CHAPTER 09: Layout Design with CSS (67..75) ═══
  {
    id: 67, mod: 9, tInMod: 1,
    title: 'Normal document flow',
    sub: 'How Block Elements Stack Vertically & Inline Elements Flow Horizontally by Default',
    coreEn: 'Before applying Flexbox or Grid, browsers lay out HTML in ==Normal Document Flow==: ==Block elements (`div`, `p`, `h1`, `section`)== take 100% width and stack vertically, while ==Inline elements (`span`, `a`, `strong`)== sit side-by-side and ignore top/bottom margin & width!',
    coreHi: '==Normal Document Flow== mein ==Block elements (`div`, `p`, `h1`)== poori line lete hain aur upar-niche stack hote hain, jabki ==Inline elements (`span`, `a`)== ek hi line mein aate hain aur unpar `width`/`height` kaam nahi karta!',
    analogyTitle: 'Paragraphs Stacking Down a Page (Block) vs Words Flowing Across a Line (Inline)',
    analogyEn: 'Work WITH normal flow first—keep simple vertical stacks natural, and reach for Flexbox/Grid only when you need side-by-side rows or 2D grids!',
    analogyHi: 'Normal flow ke saath kaam karo—simple vertical stacking natural rehne do, aur side-by-side layout ke liye Flexbox/Grid use karo!',
    steps: [['Block Elements', 'Full width, starts new line, respects width/height/margin'], ['Inline Elements', 'Wraps text width only; ignores `width`, `height`, `margin-top`'], ['Inline-Block', 'Flows inline YET respects `width`, `height` & `padding`'], ['Flow First', 'Only override normal flow where layout needs it']],
    jobUse: 'Explains immediately why `width: 200px` did nothing on an `<a>` or `<span>` tag!',
    mistake: 'Trying to set `width` and `margin-top` on an inline `<span>` without switching to `inline-block` or `flex`.',
    proHabit: 'Check the **Computed -> display** value in DevTools whenever an element ignores `width` or `margin-top`.',
    rule: 'Block = Stacks Full Width | Inline = Flows Like Text (Ignores width/height).',
    code: `/* Making an <a> tag behave like a sized button */
.btn-link {
  display: inline-block; /* Now padding, margin-top & width work cleanly! */
  padding: 0.75rem 1.5rem;
}`,
    out: 'Cleanly sized inline button link.',
    q1: ['Why do width, height, and vertical margins (margin-top/bottom) have no effect on a <span> or <a> tag by default?', 'Because <span> and <a> have display: inline by default. Changing them to display: inline-block or display: inline-flex lets them respect explicit width, height, and vertical margins.'],
  },
  {
    id: 68, mod: 9, tInMod: 2,
    title: 'Display property',
    sub: 'Mastering `block`, `inline`, `inline-block`, `flex`, `grid` & `none` vs `visibility: hidden`',
    coreEn: 'The CSS ==`display` property== defines how an element participates in layout: ==`block`, `inline`, `inline-block`, `flex` (1D row/col), `grid` (2D rows+cols)==, and ==`display: none`== (removes element completely from layout, unlike `visibility: hidden` which leaves an empty gap!).',
    coreHi: 'CSS ==`display` property== element ka layout behavior decide karti hai: ==`block`, `inline`, `inline-block`, `flex` (1D), `grid` (2D)== aur ==`display: none`== (poora gayab, space bhi nahi leta — `visibility: hidden` space chhodta hai)!',
    analogyTitle: 'Master Layout Switch Turning Any Container Into a Row, Grid, or Invisible Mode',
    analogyEn: 'Need to hide a mobile menu completely? Use `display: none`. Need to keep the layout slot reserved while fading out? Use `visibility: hidden` or `opacity: 0`!',
    analogyHi: 'Element ko space ke saath poora hatana hai -> `display: none`; space rakh kar chhupana hai -> `visibility: hidden`!',
    steps: [['flex / inline-flex', '1D alignment (navbars, button icon+text, centering)'], ['grid', '2D layouts (card galleries, full-page dashboards)'], ['display: none', 'Removes element from visual layout AND screen readers'], ['visibility: hidden', 'Hides visually while keeping its reserved box space']],
    jobUse: 'Used on literally every component in modern frontend engineering.',
    mistake: 'Confusing `display: none`, `visibility: hidden`, and `opacity: 0` in frontend interviews!',
    proHabit: 'Use `inline-flex; align-items: center; gap: 0.5rem;` on every button containing an icon + text!',
    rule: 'display: none = Gone (0 space) | visibility: hidden = Invisible (keeps space) | inline-flex = Icon+Text Buttons.',
    code: `.icon-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}`,
    out: 'Perfectly aligned icon + label button.',
    q1: ['What is the exact difference between display: none, visibility: hidden, and opacity: 0?', 'display: none removes the element completely from layout flow (takes 0 space and is unclickable). visibility: hidden hides it visually and blocks clicks while keeping its reserved space. opacity: 0 makes it transparent while keeping both its space and click interactivity.'],
  },
  {
    id: 69, mod: 9, tInMod: 3,
    title: 'Flexbox fundamentals',
    sub: '1D Layout Superpower: Main Axis, Cross Axis, `justify-content`, `align-items` & `gap`',
    coreEn: '==CSS Flexbox (`display: flex`)== is the #1 tool for ==1-dimensional layouts (a row OR a column)==: ==`justify-content`== aligns along the ==Main Axis== (horizontal in row), ==`align-items`== aligns along the ==Cross Axis== (vertical in row), and ==`gap`== adds crisp spacing!',
    coreHi: '==Flexbox (`display: flex`)== ==1D layouts (ek row ya ek column)== ka king hai: ==`justify-content`== Main Axis par align karta hai, ==`align-items`== Cross Axis par, aur ==`gap`== clean spacing deta hai!',
    analogyTitle: 'Magnetic Rail Arranging Items Neatly in One Row or One Column',
    analogyEn: 'The famous interview joke "How do you center a div?" is solved in 3 lines: `display: flex; justify-content: center; align-items: center;`!',
    analogyHi: 'Div ko center kaise karein? Bas 3 lines: `display: flex; justify-content: center; align-items: center;`!',
    steps: [['Activate Flex', '`display: flex; gap: 1rem;` on the PARENT container'], ['Pick Direction', '`flex-direction: row` (default) or `column`'], ['Main Axis Align', '`justify-content: space-between | center | flex-end`'], ['Cross Axis Align', '`align-items: center | stretch | flex-start`']],
    jobUse: 'Powers 90% of navbars, button groups, card headers, badges, and centered modals.',
    mistake: 'Putting `justify-content: center` on the CHILD item instead of the PARENT flex container!',
    proHabit: 'Remember: When `flex-direction: column`, the Main Axis flips vertically—so `justify-content` becomes vertical and `align-items` becomes horizontal!',
    rule: 'display: flex on PARENT | justify-content = Main Axis | align-items = Cross Axis.',
    code: `.navbar {
  display: flex;
  justify-content: space-between; /* Logo left, links right */
  align-items: center;            /* Vertically centered */
  gap: 1.5rem;
}`,
    out: 'Crisp, perfectly balanced navigation bar in 5 lines of CSS.',
    q1: ['What happens to justify-content and align-items when you change flex-direction from row to column?', 'The Main Axis rotates from horizontal to vertical—so justify-content now controls vertical alignment and align-items controls horizontal alignment.'],
  },
  {
    id: 70, mod: 9, tInMod: 4,
    title: 'Flex alignment and wrapping',
    sub: 'Responsive Wrapping (`flex-wrap: wrap`), `flex: 1` Growth & Sticky Card Footers',
    coreEn: 'Control responsive flex children with ==`flex-wrap: wrap`== (lets items drop cleanly to the next line on mobile), ==`flex: 1`== (makes items share available space equally), ==`flex-shrink: 0`== (stops icons/avatars from squishing!), and ==`margin-top: auto`== to pin card buttons to the bottom!',
    coreHi: 'Flex children ko smart banao: ==`flex-wrap: wrap`== se mobile par items next line mein aate hain, ==`flex: 1`== equal space deta hai, aur ==`flex-shrink: 0`== icons/avatars ko pichakne se bachata hai!',
    analogyTitle: 'Smart Bookshelf Where Books Wrap Naturally Onto the Next Shelf When Narrow',
    analogyEn: 'Ever seen a circular user avatar turn into a squished oval inside a narrow flex row? One line—`flex-shrink: 0;`—fixes it forever!',
    analogyHi: 'Flex row mein avatar ya icon pichak kar oval ban gaya? Bas `flex-shrink: 0;` lagao—hamesha perfect circle rahega!',
    steps: [['Allow Wrapping', '`flex-wrap: wrap` prevents horizontal overflow on mobile'], ['Equal Columns', '`flex: 1 1 280px` grows/shrinks with a 280px base width'], ['Protect Icons', '`flex-shrink: 0` keeps avatars/icons exact size'], ['Pin Card Footer', 'Flex column card + `margin-top: auto` on bottom button']],
    jobUse: 'Fixes squished icons, uneven card button heights, and cramped mobile tag lists.',
    mistake: 'Forgetting `flex-wrap: wrap` on a tag/chip row so 8 chips burst off the right edge of mobile screens!',
    proHabit: 'Always put `flex-shrink: 0` on icons and avatars inside flex containers, and `min-width: 0` on text containers so truncation works!',
    rule: 'flex-wrap: wrap = Mobile Safe | flex-shrink: 0 = Never Squish Icons | flex: 1 = Fill Space.',
    code: `.card {
  display: flex;
  flex-direction: column;
}
.card-cta { margin-top: auto; } /* Pins button cleanly to bottom! */
.avatar   { width: 40px; height: 40px; flex-shrink: 0; }`,
    out: 'Evenly aligned multi-card rows with crisp non-squished avatars.',
    q1: ['Why do icons or circular avatars sometimes get squished inside a Flexbox row, and how do you fix it?', 'By default flex children have flex-shrink: 1, allowing them to shrink when sibling text is long. Setting flex-shrink: 0 on the icon or avatar keeps its exact dimensions locked.'],
  },
  {
    id: 71, mod: 9, tInMod: 5,
    title: 'CSS Grid fundamentals',
    sub: '2D Layout Mastery: Controlling Rows & Columns Simultaneously With `fr` & `repeat()`',
    coreEn: '==CSS Grid (`display: grid`)== controls ==BOTH rows and columns simultaneously (2D)== using fractional ==`fr` units== and ==`repeat()`==—making full-page dashboards, photo galleries, and responsive card grids effortless with zero wrapper-div bloat!',
    coreHi: '==CSS Grid (`display: grid`)== ==2D layout (Rows aur Columns ek saath)== control karta hai—==`fr` units== aur ==`repeat()`== se dashboards aur responsive card grids 3 lines mein ban jaate hain!',
    analogyTitle: 'Architectural Blueprint Grid Controlling Both Horizontal & Vertical Tracks Together',
    analogyEn: 'One magic CSS Grid line—`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));`—builds a 100% responsive 1->2->3->4 column card grid with ZERO media queries!',
    analogyHi: 'Sirf 1 line `repeat(auto-fit, minmax(260px, 1fr))` se bina media query ke automatic 1->2->3->4 column responsive grid ban jata hai!',
    steps: [['Activate Grid', '`display: grid; gap: 1.5rem;` on parent container'], ['Define Tracks', '`grid-template-columns: repeat(3, 1fr);` (3 equal cols)'], ['Auto Responsive', '`repeat(auto-fit, minmax(260px, 1fr))` adapts automatically!'], ['Flex vs Grid', '1D row/bar = Flexbox | 2D page/card gallery = CSS Grid']],
    jobUse: 'Powers every modern SaaS dashboard, e-commerce product grid, and Bento UI layout.',
    mistake: 'Using complex nested Flexbox rows with percentage calc hacks when CSS Grid does it in 2 clean lines!',
    proHabit: 'Use **CSS Grid for overall 2D page/card structure** and **Flexbox inside each card/navbar**—they work best together!',
    rule: 'Flexbox = 1D (Inside Components) | CSS Grid = 2D (Page & Card Grids).',
    code: `.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}`,
    out: 'Automatic responsive 1/2/3/4-column product grid with zero media queries.',
    q1: ['When should you choose CSS Grid vs Flexbox?', 'Use Flexbox for 1-dimensional layouts (aligning items along a single row or column like navbars and button groups), and use CSS Grid for 2-dimensional layouts controlling both rows and columns together (like dashboards, bento layouts, and responsive card grids).'],
  },
  {
    id: 72, mod: 9, tInMod: 6,
    title: 'Grid columns, rows, and gaps',
    sub: 'Spanning Tracks (`grid-column: span 2`), Named Template Areas & Clean `gap` Spacing',
    coreEn: 'Customize complex 2D dashboards using ==`grid-column: span 2`== (featured wide cards!), ==`grid-template-areas`== (visual ASCII page layout!), ==`minmax(0, 1fr)`== (prevents wide content from blowing out columns!), and ==`gap` (`row-gap` / `column-gap`)==.',
    coreHi: 'Complex dashboards ke liye ==`grid-column: span 2`== (wide KPI card), ==`grid-template-areas`== (visual layout map) aur ==`minmax(0, 1fr)`== (overflow rokne ke liye) use karo!',
    analogyTitle: 'Merging Two Adjacent Cells in a Blueprint for a Wide Hero Dashboard Chart',
    analogyEn: 'Using `minmax(0, 1fr)` instead of bare `1fr` stops long code blocks or wide tables from pushing a Grid column past the screen edge!',
    analogyHi: '`minmax(0, 1fr)` lagane se lambi table ya code block kabhi aapke Grid column ko screen se bahar nahi dhakelta!',
    steps: [['Span Columns', '`.featured { grid-column: span 2; }` for Bento hero cards'], ['Sidebar Layout', '`grid-template-columns: 260px minmax(0, 1fr);`'], ['Named Areas', '`grid-template-areas: "head head" "side main";`'], ['Clean Gaps', '`gap: 1.5rem` (or `row-gap` + `column-gap` separately)']],
    jobUse: 'Builds modern Bento grids and responsive Admin/SaaS dashboards effortlessly.',
    mistake: 'Using bare `1fr` next to a fixed sidebar when the main area contains a wide scrolling table (causes horizontal page overflow!).',
    proHabit: 'Always write **`minmax(0, 1fr)`** for main dashboard columns so overflowing children scroll cleanly inside!',
    rule: 'grid-column: span N = Wide Cards | minmax(0, 1fr) = Overflow-Proof Columns.',
    code: `.dashboard {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 1.5rem;
}
.hero-chart { grid-column: span 2; }`,
    out: 'Rock-solid SaaS sidebar + wide Bento chart layout.',
    q1: ['Why do senior frontend engineers often write minmax(0, 1fr) instead of just 1fr in CSS Grid?', 'Because bare 1fr defaults to minmax(auto, 1fr), meaning a wide child (like a code block or table) can force the column wider than its track and break page layout. minmax(0, 1fr) lets the column shrink cleanly so inner scroll works.'],
  },
  {
    id: 73, mod: 9, tInMod: 7,
    title: 'Positioning: relative, absolute, fixed, sticky',
    sub: 'Badges, Sticky Headers, Floating Modals & The `relative` Parent Anchor Rule',
    coreEn: 'Master the 4 CSS positioning modes: ==`relative`== (creates the anchor box for absolute children!), ==`absolute`== (pins badges/icons inside nearest positioned parent), ==`fixed`== (stays glued to viewport like modals/chat widgets), and ==`sticky`== (scrolls normally then sticks to top like navbars)!',
    coreHi: '4 CSS positions samjho: ==`relative`== (parent anchor banata hai), ==`absolute`== (card ke corner par badge pin karta hai), ==`fixed`== (screen par chipka rehta hai — modals), aur ==`sticky`== (scroll par top par chipak jata hai — navbar)!',
    analogyTitle: 'Pinning a Price Tag to a Product Box (`absolute` inside `relative`) vs Gluing a Sticker to the Window (`fixed`)',
    analogyEn: 'Always put `position: relative` on the `.product-card` BEFORE putting `position: absolute; top: 12px; right: 12px;` on the `"NEW"` badge—otherwise the badge flies off to the top-right of the entire page!',
    analogyHi: 'Badge par `position: absolute` lagane se pehle parent card par `position: relative` lagana zaroori hai warna badge poore page ke corner mein bhaag jata hai!',
    steps: [['relative (Anchor)', 'Stays in flow & anchors `absolute` children inside it'], ['absolute (Pin)', 'Removed from flow; pins to nearest non-static ancestor'], ['fixed (Viewport)', 'Pinned to browser window (modals, back-to-top, toasts)'], ['sticky (Scroll Pin)', '`position: sticky; top: 0;` sticks header while scrolling']],
    jobUse: 'Powers sticky navbars, notification badges, dropdown menus, tooltips, and modals.',
    mistake: 'Wondering why `position: sticky; top: 0` stopped working—check if ANY ancestor has `overflow: hidden` (breaks sticky! Use `overflow-x: clip` instead!).',
    proHabit: 'Never use `overflow: hidden` on a wrapper containing a `position: sticky` header—use `overflow: clip`!',
    rule: 'Absolute Needs Relative Parent | Sticky Needs top: 0 & No Ancestor overflow: hidden.',
    code: `.card  { position: relative; }
.badge { position: absolute; top: 12px; right: 12px; }
.site-nav { position: sticky; top: 0; z-index: 40; }`,
    out: 'Crisp corner card badge and smooth sticky navigation bar.',
    q1: ['What common CSS property on a parent container breaks position: sticky, and how do you fix it?', 'Setting overflow: hidden, auto, or scroll on an ancestor prevents position: sticky from sticking to the viewport. Fix it by removing the overflow or using overflow-x: clip instead.'],
  },
  {
    id: 74, mod: 9, tInMod: 8,
    title: 'Z-index and stacking contexts',
    sub: 'Layering Modals, Dropdowns & Sticky Navs Cleanly Without `z-index: 999999` Wars',
    coreEn: '==`z-index`== controls front-to-back layering on ==positioned or flex/grid elements==—keep a clean ==layer scale (`10` dropdown, `30` sticky nav, `50` modal, `60` toast)== and understand that ==`transform`, `opacity < 1`, or `position + z-index` creates a new isolated Stacking Context==!',
    coreHi: '==`z-index`== elements ka upar-niche layer order control karta hai—hamesha clean scale rakho (`10` dropdown, `30` nav, `50` modal) aur yaad rakho `transform`/`opacity` naya Stacking Context bana deta hai!',
    analogyTitle: 'Numbered Transparent Sheets Inside Folders (A Sheet Inside Folder 1 Cannot Jump Above Folder 2!)',
    analogyEn: 'Even `z-index: 999999` inside a parent with `z-index: 1` CANNOT rise above a sibling section with `z-index: 2`—that is why understanding Stacking Contexts ends z-index frustration forever!',
    analogyHi: 'Parent ka `z-index: 1` ho toh andar `999999` lagane par bhi wo bahar ke `z-index: 2` ke upar nahi aa sakta!',
    steps: [['Needs Position/Flex', '`z-index` does NOTHING on static non-flex elements'], ['Define Clean Scale', '`--z-nav: 30; --z-modal: 50; --z-toast: 60;`'], ['Spot Stacking Traps', '`transform`, `opacity < 1`, `filter` trap child `z-index`'], ['Use Portals For Modals', 'In React, render modals at `document.body` via `createPortal`']],
    jobUse: 'Solves the #1 UI bug where dropdown menus or modals get trapped behind sticky headers!',
    mistake: 'Escalating `z-index: 9999999` blindly when the real bug is a parent Stacking Context.',
    proHabit: 'Never exceed clean semantic tiers (`10, 20, 30, 40, 50`) and render global modals via React `createPortal`.',
    rule: 'Clean Z-Index Scale (10–60) + Know Stacking Contexts = Zero Overlapping UI Bugs.',
    code: `:root {
  --z-dropdown: 20;
  --z-sticky:   30;
  --z-modal:    50;
  --z-toast:    60;
}`,
    out: 'Predictable, conflict-free layering across the entire web app.',
    q1: ['Why can a child element with z-index: 9999 still appear BEHIND another element with z-index: 10?', 'Because the child lives inside a parent Stacking Context (created by a parent z-index, transform, or opacity < 1) whose own z-index is lower than 10. Children can never escape their parent stacking context.'],
  },
  {
    id: 75, mod: 9, tInMod: 9,
    title: 'Overflow and layout patterns',
    sub: 'Handling Long Text (`text-overflow: ellipsis`), Scrollable Tables & Zero Horizontal Scroll Bugs',
    coreEn: 'Control overflowing content cleanly with ==`overflow: auto`== (scrollbars only when needed), ==`overflow: hidden` / `clip`== (clean rounded-card image corners), ==`text-overflow: ellipsis`== (1-line truncation), and ==`line-clamp`== for tidy multi-line card excerpts!',
    coreHi: 'Extra content ko clean rakho: ==`overflow-x: auto`== (mobile tables), ==`overflow: hidden`== (rounded image corners), ==`text-overflow: ellipsis`== (1-line `...`) aur ==`line-clamp`== (2-3 line clean cards)!',
    analogyTitle: 'Neat Picture Frame Matting & Scrollable Drawer Keeping Rooms Clutter-Free',
    analogyEn: 'Testing with a 60-character username or 3-line product title catches ugly overflow bugs BEFORE real users ever see them!',
    analogyHi: 'Lambe usernames aur product titles se test karne se aapke cards real users ke saamne kabhi toot-te nahi!',
    steps: [['Scrollable Tables', 'Wrap wide tables in `overflow-x: auto`'], ['1-Line Truncate', '`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`'], ['Multi-Line Clamp', '`display: -webkit-box; -webkit-line-clamp: 2;`'], ['Kill Page Scroll-X', 'Inspect DevTools for any element wider than `100%`']],
    jobUse: 'Keeps real-world user-generated content (UGC) from breaking polished card grids.',
    mistake: 'Designing cards only with tiny 2-word dummy titles (`"Item 1"`) that explode when real 50-char names arrive from MongoDB!',
    proHabit: 'Always add `overflow-wrap: break-word;` on user-generated text containers so long URLs never break mobile layouts.',
    rule: 'Test With Long Text -> Truncate/Clamp Cleanly -> Zero Unwanted Horizontal Page Scroll.',
    code: `.truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
    out: 'Uniform, tidy card heights even with unpredictable database text.',
    q1: ['What 3 CSS properties work together to create clean single-line "..." text truncation?', 'white-space: nowrap (keeps text on one line), overflow: hidden (clips excess text), and text-overflow: ellipsis (renders the "..." indicator)—plus min-width: 0 if inside a Flexbox child.'],
  },

  // ═══ CHAPTER 10: Responsive Web Design (76..83) ═══
  {
    id: 76, mod: 10, tInMod: 1,
    title: 'Responsive design principles',
    sub: 'One Codebase Adapting Seamlessly From 360px Phones to 1920px Desktops',
    coreEn: '==Responsive Web Design (RWD)== builds ==one flexible site== that adapts cleanly to every viewport using 3 core pillars: ==1) Fluid Grids (`%`, `fr`, `minmax`), 2) Flexible Media (`max-width: 100%`), and 3) CSS Media Queries==.',
    coreHi: '==Responsive Web Design== ek hi website ko har screen (mobile, tablet, laptop, 4K) par perfect dikhata hai 3 pillars se: ==Fluid Grids, Flexible Images (`max-width: 100%`) aur Media Queries==!',
    analogyTitle: 'Water Flowing Smoothly to Fit Any Cup, Bowl, or Pitcher Perfectly',
    analogyEn: 'Over 65% of web traffic in India and globally is on mobile phones—a site that breaks on 390px screens loses two-thirds of its users immediately!',
    analogyHi: '65%+ traffic mobile par aata hai—agar aapki site 390px phone par toot gayi toh do-tihai users turant chhod kar chale jaate hain!',
    steps: [['Fluid Containers', '`width: 100%; max-width: 1200px;` instead of fixed `1200px`'], ['Flexible Media', '`img, video { max-width: 100%; height: auto; }`'], ['Adaptive Columns', '1 col Mobile -> 2 cols Tablet -> 3-4 cols Desktop'], ['Zero Scroll-X', 'Eliminate horizontal page scrolling at 360px width']],
    jobUse: 'Non-negotiable baseline requirement for every single frontend & full-stack job.',
    mistake: 'Setting fixed `width: 900px` on containers so mobile users have to pinch-zoom and scroll sideways!',
    proHabit: 'Never set a fixed pixel `width` wider than `320px`—always use `width: 100%; max-width: 900px;`!',
    rule: 'Fluid Widths (width: 100% + max-width) + Flexible Images + Breakpoints = True Responsive UI.',
    code: `img, picture, video {
  display: block;
  max-width: 100%;
  height: auto;
}`,
    out: 'Zero overflowing images across every screen size.',
    q1: ['What are the 3 foundational pillars of Responsive Web Design?', '1) Fluid, flexible grid layouts (using %, fr, and max-width), 2) Flexible/responsive images and media (max-width: 100%; height: auto), and 3) CSS Media Queries adapting layout at key viewport breakpoints.'],
  },
  {
    id: 77, mod: 10, tInMod: 2,
    title: 'Mobile-first workflow',
    sub: 'Designing Base Styles for Phones First & Enhancing Upward With `min-width`',
    coreEn: '==Mobile-First CSS== writes clean ==single-column mobile styles as the default base==, then progressively adds multi-column layouts upward using ==`@media (min-width: 768px)`== and ==`(min-width: 1024px)`==—resulting in cleaner, smaller CSS (and matching Tailwind CSS exactly!).',
    coreHi: '==Mobile-First Workflow== mein default CSS ==mobile 1-column== ke liye likha jata hai, phir bade screens ke liye ==`@media (min-width: 768px)`== aur `1024px` par columns badhaye jaate hain—Tailwind bhi yahi follow karta hai!',
    analogyTitle: 'Starting With a Clean Backpack Essential Kit, Then Expanding Into Full Luggage',
    analogyEn: 'Starting on mobile forces clear content priority first—and avoids fighting messy overrides trying to cram a 4-column desktop table onto a tiny phone!',
    analogyHi: 'Pehle mobile design karne se content priority clear rehti hai aur CSS code aadha aur super clean banta hai!',
    steps: [['1. Mobile Base', 'Clean 1-column stack, readable 16px text, big buttons'], ['2. Tablet (768px)', '`@media (min-width: 768px)` -> 2-column grid'], ['3. Desktop (1024px)', '`@media (min-width: 1024px)` -> 3-4 cols + full navbar'], ['4. Matches Tailwind', 'Exact same `md:` (768px) and `lg:` (1024px) mental model!']],
    jobUse: 'Industry-standard workflow used by Tailwind CSS, Bootstrap, and modern React teams.',
    mistake: 'Mixing random `max-width` and `min-width` queries in the same file so breakpoints overlap and clash!',
    proHabit: 'Standardize 100% on **Mobile-First `min-width` queries** (just like Tailwind `sm:`, `md:`, `lg:`, `xl:`).',
    rule: 'Base = Mobile (1 Col) -> min-width: 768px (Tablet) -> min-width: 1024px (Desktop).',
    code: `.cards { display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 768px)  { .cards { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .cards { grid-template-columns: repeat(3, 1fr); } }`,
    out: 'Ultra-clean progressive enhancement from phone to desktop.',
    q1: ['Why is Mobile-First (min-width) CSS usually cleaner than Desktop-First (max-width) CSS?', 'Mobile layouts are naturally single-column (matching HTML normal flow), so you write minimal base styles and only add multi-column complexity as screens grow wider—resulting in fewer overrides and aligning directly with Tailwind/Bootstrap breakpoints.'],
  },
  {
    id: 78, mod: 10, tInMod: 3,
    title: 'Viewport meta tag',
    sub: 'The Single `<head>` Line Making Mobile Screens Render True 1:1 Pixels Instead of Tiny Zoomed-Out Pages',
    coreEn: 'Always include ==`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`== inside `<head>`—without it, mobile phones pretend they are 980px desktop screens and shrink your entire website into microscopic unreadable text!',
    coreHi: '`<head>` mein ==`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`== hamesha lagao—iske bina mobile phone aapki site ko 980px desktop samajh kar chhota aur unreadable dikhata hai!',
    analogyTitle: 'Setting the Phone Camera to 1x Natural Zoom Instead of Zoomed-Out Microscopic View',
    analogyEn: 'NEVER add `user-scalable=no` or `maximum-scale=1`—blocking pinch-to-zoom violates accessibility for low-vision users!',
    analogyHi: 'Kabhi `user-scalable=no` mat lagao—low-vision users ko pinch-zoom karne ka right hamesha milna chahiye!',
    steps: [['Add In <head>', '`<meta name="viewport" content="width=device-width, initial-scale=1.0">`'], ['Why It Matters', 'Makes CSS media queries match real phone width (~390px)'], ['Allow Pinch Zoom', 'NEVER set `user-scalable=no` or `maximum-scale=1`'], ['Verify DevTools', 'Test 390px mobile view immediately to confirm 1:1 scaling']],
    jobUse: 'First thing to check if media queries seem completely ignored on a real phone!',
    mistake: 'Forgetting the viewport meta tag and wondering why `@media (max-width: 600px)` never triggers on iPhone!',
    proHabit: 'Verify the viewport tag exists in `index.html` on every HTML and Vite React project.',
    rule: 'width=device-width, initial-scale=1.0 Always | Never Disable Pinch-to-Zoom.',
    code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>`,
    out: 'Crisp, true-scale mobile rendering with full pinch-zoom accessibility.',
    q1: ['Why should you never add maximum-scale=1 or user-scalable=no to the viewport meta tag?', 'Blocking pinch-to-zoom prevents visually impaired and mobile users from magnifying small text or images, failing WCAG accessibility standards and Lighthouse audits.'],
  },
  {
    id: 79, mod: 10, tInMod: 4,
    title: 'Media queries and breakpoints',
    sub: 'Standard Breakpoints (`640px`, `768px`, `1024px`, `1280px`) & Content-Driven Adaptation',
    coreEn: '==CSS Media Queries (`@media (min-width: 768px)`)== apply styles conditionally based on viewport width, hover capability, or dark-mode preference—use clean standard breakpoints (`640px`, `768px`, `1024px`, `1280px`) and adjust whenever your layout starts feeling cramped!',
    coreHi: '==Media Queries== screen width, dark mode ya hover ke base par styles change karti hain—standard breakpoints (`640px`, `768px`, `1024px`, `1280px`) use karo aur jab layout cramped lage tab adapt karo!',
    analogyTitle: 'Smart Clothing Layers Adjusting Automatically to Weather Temperature',
    analogyEn: 'Do not write 15 hyper-specific device breakpoints (`375px`, `390px`, `414px`, `430px`)—3–4 clean breakpoints + fluid Flexbox/Grid cover EVERY phone and monitor ever made!',
    analogyHi: '15 alag phone widths ke liye media queries mat likho—3-4 clean breakpoints + fluid Grid har screen cover kar leta hai!',
    steps: [['4 Clean Tiers', '`640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl)'], ['Resize Slowly', 'Drag browser edge smoothly from 360px -> 1440px'], ['Preference Queries', '`prefers-color-scheme: dark` & `prefers-reduced-motion`'], ['Container Queries', 'Modern `@container` adapts cards to parent box width!']],
    jobUse: 'Core layout engineering skill powering every responsive web app.',
    mistake: 'Hardcoding breakpoints for one specific iPhone model width instead of fluid grids + 3-4 clean tiers.',
    proHabit: 'Drag your browser width continuously from 360px to 1440px—if nothing breaks at ANY pixel, your layout is truly responsive!',
    rule: 'Fluid Grids + 3–4 Standard min-width Breakpoints = Works on Every Device.',
    code: `/* Standard Modern Breakpoints (Matches Tailwind!) */
@media (min-width: 640px)  { /* sm: Large phones */ }
@media (min-width: 768px)  { /* md: Tablets */ }
@media (min-width: 1024px) { /* lg: Laptops */ }
@media (min-width: 1280px) { /* xl: Wide desktops */ }`,
    out: 'Clean, predictable responsive adaptation across all screens.',
    q1: ['What is the difference between a Media Query (@media) and a modern CSS Container Query (@container)?', 'A Media Query responds to the entire browser viewport width, whereas a Container Query lets a reusable component (like a product card) adapt its layout based on the width of its immediate parent container (sidebar vs main area).'],
  },
  {
    id: 80, mod: 10, tInMod: 5,
    title: 'Fluid layouts and responsive typography',
    sub: 'Effortless Scaling With CSS `clamp(min, preferred, max)` & Zero Awkward Jumps',
    coreEn: 'Replace 4 clunky heading media queries with ONE modern CSS function: ==`font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);`==—smoothly scaling headings from mobile to desktop while locking safe minimum and maximum limits!',
    coreHi: '4 alag media queries likhne ke bajaye ek modern CSS function ==`clamp(min, ideal, max)`== use karo—aapke headings mobile se desktop tak makkhan ki tarah smoothly scale honge!',
    analogyTitle: 'Smart Cruise Control Staying Smoothly Between 40 km/h Min and 100 km/h Max',
    analogyEn: 'Always include a `rem` component inside the middle argument (`4vw + 1rem`, not pure `5vw`) so browser zoom still scales text properly for accessibility!',
    analogyHi: '`clamp()` ke beech wale value mein `vw + rem` dono rakho taaki accessibility browser zoom bhi smoothly kaam kare!',
    steps: [['Set Safe Min', 'Readable mobile headline (`1.75rem` / 28px)'], ['Set Fluid Middle', 'Viewport-scaled + rem (`4vw + 1rem`) for smooth growth'], ['Set Safe Max', 'Cap desktop headline (`3.5rem` / 56px) so 4K stays crisp'], ['Fluid Containers', '`width: min(92%, 1200px); margin-inline: auto;`']],
    jobUse: 'Modern senior-frontend technique eliminating jagged text jumps between breakpoints.',
    mistake: 'Using pure `font-size: 6vw` without `clamp()`—turning text microscopic on phones and gigantic on ultrawide monitors!',
    proHabit: 'Use `width: min(92%, 1200px)` for effortless centered containers with automatic mobile side padding!',
    rule: 'clamp(min, vw + rem, max) = Smooth Fluid Typography With Zero Media Queries.',
    code: `.hero-title {
  font-size: clamp(2rem, 4vw + 1rem, 3.75rem);
  line-height: 1.15;
}
.wrapper { width: min(92%, 1200px); margin-inline: auto; }`,
    out: 'Silky-smooth responsive typography and spacing across every monitor.',
    q1: ['Why should the preferred middle value in font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem) include "+ 1rem" instead of just "4vw"?', 'If the preferred value uses only vw, zooming the browser text size to 200% may not scale the font properly. Adding a rem component ensures user zoom preferences remain respected for accessibility.'],
  },
  {
    id: 81, mod: 10, tInMod: 6,
    title: 'Responsive images',
    sub: 'Fast Mobile Loads With `aspect-ratio`, `object-fit: cover`, `srcset` & `<picture>`',
    coreEn: 'Make images sharp and fast on every screen using ==`object-fit: cover` + `aspect-ratio: 16 / 9`== (zero stretched photos!), ==`srcset` & `sizes`== (serve small 400px image to phones, 1200px to desktops!), and ==`<picture>`== for WebP/AVIF formats.',
    coreHi: 'Har screen par sharp aur fast images ke liye ==`object-fit: cover` + `aspect-ratio`== (kabhi stretch nahi hogi!), ==`srcset`== (phone ko chhoti file, desktop ko HD) aur ==WebP== use karo!',
    analogyTitle: 'Sending a Pocket Photo to Phones & a Wall Poster to 4K Monitors Automatically',
    analogyEn: 'Applying `width: 100%; aspect-ratio: 16 / 9; object-fit: cover;` makes a 3-column card grid look 100% uniform even when uploaded photos have wildly different shapes!',
    analogyHi: 'User ne portrait aur landscape dono photos upload kar di? `aspect-ratio: 16/9; object-fit: cover;` sabko 100% uniform card bana deta hai!',
    steps: [['Crop Never Stretch', '`aspect-ratio: 16 / 9; object-fit: cover;` on card images'], ['Responsive srcset', 'Let browser pick 400w / 800w / 1200w based on screen width'], ['Modern WebP', 'Serve `.webp` (30–60% smaller than `.jpg`/`.png`!)'], ['Object Position', '`object-position: top center;` keeps faces from getting cropped!']],
    jobUse: 'Cuts mobile page weight by 70%+ and keeps e-commerce/blog grids spotless.',
    mistake: 'Serving a 4 MB 4000px-wide image to a 390px mobile phone on 4G!',
    proHabit: 'Add `object-position: top;` on portrait/headshot cards so `object-fit: cover` never slices off people foreheads!',
    rule: 'aspect-ratio + object-fit: cover + WebP + srcset = Fast, Uniform, Crisp Images.',
    code: `<img
  src="/hero-800.webp"
  srcset="/hero-400.webp 400w, /hero-800.webp 800w, /hero-1200.webp 1200w"
  sizes="(max-width: 640px) 100vw, 50vw"
  alt="Modern coding workspace"
  class="card-img"
/>`,
    out: 'Crisp, fast-loading, perfectly framed responsive images.',
    q1: ['What does object-fit: cover do on an image with a fixed aspect-ratio?', 'It scales the image proportionally to completely fill the container box without stretching or distorting it, cleanly cropping any excess edges—just like background-size: cover does for background images.'],
  },
  {
    id: 82, mod: 10, tInMod: 7,
    title: 'Mobile navigation and touch targets',
    sub: '44x44px Thumb-Friendly Tap Targets, Accessible Hamburger Drawers & Clean Spacing',
    coreEn: 'Mobile users tap with thumbs, not precision mouse pointers! Keep interactive ==touch targets at least `44x44px`== (with `8px+` gap between buttons), collapse desktop nav links into an ==accessible Hamburger Drawer (`aria-expanded`, `Esc` closes)==, and avoid hover-only menus!',
    coreHi: 'Mobile par log mouse se nahi, angoothe (thumb) se tap karte hain! Har button/link kam se kam ==`44x44px`== rakho, desktop nav ko ==accessible Hamburger Menu (`aria-expanded`)== mein badlo, aur hover-only menus mat banao!',
    analogyTitle: 'Big Clear Elevator Buttons Instead of Tiny Pinhead Switches Placed 1mm Apart',
    analogyEn: 'Hover (`:hover`) does NOT exist on touchscreens! Any dropdown that opens ONLY on hover is completely broken on iPhone and Android—always support click/tap!',
    analogyHi: 'Touchscreen par `:hover` nahi hota—sirf hover par khulne wala dropdown mobile par 100% broken hota hai! Click/tap support zaroori hai!',
    steps: [['44x44px Targets', '`min-height: 44px; min-width: 44px;` on mobile buttons/links'], ['Accessible Toggle', '`<button aria-expanded="false" aria-controls="mobile-nav">`'], ['Zero Hover-Only', 'Dropdowns & tooltips must open cleanly on click/tap'], ['Close On Esc/Link', 'Close mobile drawer automatically when user clicks a link']],
    jobUse: 'Separates real mobile-ready engineers from desktop-only coders.',
    mistake: 'Placing tiny 18px social icons 2px apart so mobile users constantly mis-tap the wrong link!',
    proHabit: 'Test your mobile navigation on a real phone (or DevTools 390px touch mode) before shipping!',
    rule: 'Min 44x44px Tap Targets + Clickable Menus (Never Hover-Only) + Accessible Drawer.',
    code: `<button type="button" class="menu-btn" aria-expanded="false" aria-controls="nav-drawer" aria-label="Toggle Menu">
  ☰
</button>`,
    out: 'Thumb-friendly, accessible mobile navigation.',
    q1: ['Why do hover-only dropdown navigation menus fail on mobile devices?', 'Touchscreens do not have a persistent hover cursor state—users tap directly. Menus and interactive reveals must always work on click/tap and keyboard Enter/Space as well.'],
  },
  {
    id: 83, mod: 10, tInMod: 8,
    title: 'Testing across screen sizes',
    sub: 'Systematic QA Across 360px Mobile, 768px Tablet, 1280px Laptop & Lighthouse Audits',
    coreEn: 'Before shipping any frontend page, run a ==4-Viewport QA Sweep== in Chrome DevTools (`360px`, `768px`, `1024px`, `1440px`): check ==zero horizontal scrollbar==, ==readable text==, ==non-overlapping navs==, ==working forms==, and ==Lighthouse Performance/Accessibility >= 90==!',
    coreHi: 'Har page ship karne se pehle DevTools mein ==4 screens par QA check== karo (`360px`, `768px`, `1024px`, `1440px`): ==zero horizontal scroll==, ==clean navbar==, ==readable fonts== aur ==Lighthouse >= 90==!',
    analogyTitle: 'Test-Driving a Vehicle on City Streets, Highways & Narrow Alleys Before Delivery',
    analogyEn: 'Testing at **360px** (not just 430px!) catches every subtle overflow bug on compact Android phones used by millions of users!',
    analogyHi: '**360px** width par test karne se compact Android phones par aane wale saare overflow bugs pehle hi pakde jaate hain!',
    steps: [['Test 4 Widths', '`360px` (Small Phone), `768px` (Tablet), `1024px`, `1440px`'], ['Check Scroll-X', 'Verify `document.documentElement.scrollWidth <= window.innerWidth`'], ['Test Real Touch/Keys', 'Check mobile menu tap + desktop Tab navigation'], ['Run Lighthouse', 'DevTools -> Lighthouse -> Performance, Accessibility, SEO']],
    jobUse: 'Guarantees polished, recruiter-ready and client-ready live deployments.',
    mistake: 'Testing ONLY on your own 15-inch laptop screen and deploying a broken mobile site!',
    proHabit: 'Run `document.documentElement.scrollWidth > window.innerWidth` in DevTools Console at 360px—if `true`, find and fix the overflowing element!',
    rule: 'Test 360px + 768px + 1024px + 1440px + Zero Scroll-X + Lighthouse >= 90.',
    code: `// 1-Line Console Check for Hidden Horizontal Overflow (at 360px):
document.documentElement.scrollWidth > window.innerWidth
// false = Clean! | true = Find overflowing element in Elements tab!`,
    out: 'Verified, zero-overflow responsive site ready for production.',
    q1: ['What is a quick DevTools Console one-liner to check if a mobile layout has an accidental horizontal scrollbar?', 'Run document.documentElement.scrollWidth > window.innerWidth at 360px width—if it returns true, an element is overflowing horizontally beyond the viewport.'],
  },
];

export const MERN_TAB2_BLUEPRINTS: Record<number, DsTopicBlueprint> =
  expandMernSpecs(TAB2_SPECS);
