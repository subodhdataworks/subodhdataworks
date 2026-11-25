import { expandMernSpecs, type MernTopicSpec } from './fullStackMernHelper';
import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

const TAB6_SPECS: MernTopicSpec[] = [
  // ═══ CHAPTER 24: React Forms & Validation (201..207) ═══
  {
    id: 201, mod: 24, tInMod: 1,
    title: 'Controlled vs uncontrolled inputs',
    sub: 'React State-Driven Inputs (`value` + `onChange`) vs DOM Ref/FormData Inputs',
    coreEn: 'A ==Controlled Input== is driven 100% by React state (`value={email} onChange={e => setEmail(e.target.value)}`)—ideal for instant validation, live search & character counters—while an ==Uncontrolled Input== lets the DOM hold its value (read via `useRef` or `FormData` on submit, required for `<input type="file">`)!',
    coreHi: '==Controlled Input== mein value React `useState` control karta hai (`value` + `onChange` — live search/validation ke liye best!), jabki ==Uncontrolled Input== DOM mein rehta hai (`FormData` / `useRef`, aur `<input type="file">` hamesha uncontrolled hota hai)!',
    analogyTitle: 'Remote-Controlled Drone (Controlled) vs Reading a Paper Slip Only When Handed In (Uncontrolled)',
    analogyEn: 'NEVER initialize a controlled input state to `undefined` (`useState()` -> React warns `"switching from uncontrolled to controlled"`)—always initialize to `""`!',
    analogyHi: 'Controlled input ko hamesha `useState("")` (empty string) se start karo, `undefined` se kabhi nahi!',
    steps: [['Controlled Pattern', '`value={val}` + `onChange={(e) => setVal(e.target.value)}`'], ['Init Empty String', 'Always `useState("")`, never `useState()` (undefined)!'], ['Uncontrolled Pattern', '`defaultValue` + `new FormData(e.currentTarget)` on submit'], ['File Inputs', '`<input type="file">` is ALWAYS uncontrolled (`e.target.files[0]`)']],
    jobUse: 'Top-5 React interview question asked for Frontend & Full-Stack positions.',
    mistake: 'Setting `value={email}` WITHOUT an `onChange` handler (turns the input permanently frozen/untypeable!).',
    proHabit: 'Use **Controlled Inputs** for live UX (search, password meter, live validation) and **React Hook Form / FormData** for large 20-field forms.',
    rule: 'Controlled = value + onChange + useState("") | File Inputs = Always Uncontrolled.',
    code: `const [email, setEmail] = useState('');
<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>`,
    out: 'Clean, warning-free React controlled input.',
    q1: ['What causes the React warning "A component is changing an uncontrolled input to be controlled"?', 'Initializing the input state to undefined or null (useState()) so value is initially undefined (uncontrolled), and then later setting it to a string (controlled). Always initialize controlled input state to an empty string "".'],
  },
  {
    id: 202, mod: 24, tInMod: 2,
    title: 'Managing form state',
    sub: 'Single Unified `formData` State Object + Dynamic `[name]` Change Handler',
    coreEn: 'Instead of writing 8 separate `useState` hooks and 8 handlers for a signup form, store ==one unified `form` object (`{ name: "", email: "", role: "student" }`)== and ==ONE dynamic handler (`[e.target.name]: e.target.value`)==!',
    coreHi: '8 fields ke liye 8 alag `useState` mat banao—ek single ==`form` object== aur ==EK dynamic handler (`[name]: value`)== se poora form super clean manage hota hai!',
    analogyTitle: 'One Master Clipboard Holding All 8 Form Fields Together Cleanly',
    analogyEn: 'Just make sure every `<input name="email" />` has a `name` attribute matching its exact key in your `form` object!',
    analogyHi: 'Bas har `<input>` ka `name` attribute `form` object ki key se exact match hona chahiye!',
    steps: [['Single State Object', '`const [form, setForm] = useState({ name: "", email: "" });`'], ['1 Dynamic Handler', '`const { name, value, type, checked } = e.target;`'], ['Computed Key', '`setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }))`'], ['Clear Field Error', 'Also clear `errors[name]` as soon as user edits that field!']],
    jobUse: 'Makes multi-field SaaS onboarding, profile, and checkout forms concise and maintainable.',
    mistake: 'Forgetting `...prev` inside `setForm({ [name]: value })`—wiping out every other field in the form on one keystroke!',
    proHabit: 'Handle checkboxes cleanly in the same handler: `type === "checkbox" ? checked : value`!',
    rule: '1 Form Object + 1 Computed [name] Handler + Always Spread ...prev.',
    code: `const [form, setForm] = useState({ name: '', email: '', subscribe: false });
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
};`,
    out: 'Clean 4-line handler managing unlimited form fields effortlessly.',
    q1: ['How does the computed property syntax [name]: value work inside setForm(prev => ({ ...prev, [name]: value }))?', 'Square brackets evaluate the variable name dynamically (e.g., "email") as the object key, updating only that specific field while ...prev preserves all other fields in the form state object.'],
  },
  {
    id: 203, mod: 24, tInMod: 3,
    title: 'Text, select, radio, and checkbox fields',
    sub: 'Mastering `value` (Text/Select) vs `checked` (Checkbox/Radio) in React JSX',
    coreEn: 'In React JSX, ==`<input>`, `<textarea>`, and `<select>`== all use the uniform ==`value` prop== (even `<select value={role}>`—no `selected` attribute on `<option>`!), while ==Checkboxes and Radio Buttons== use ==`checked={Boolean}`==!',
    coreHi: 'React mein `<input>`, `<textarea>` aur `<select>` sab ==`value` prop== use karte hain, jabki ==Checkbox aur Radio== ==`checked` prop== (`checked={plan === "pro"}`) use karte hain!',
    analogyTitle: 'Consistent Plugs: Text/Select Use `value`, Switches/Radios Use `checked`',
    analogyEn: 'For multi-select checkboxes (like selecting 3 skills), toggle cleanly via `prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]`!',
    analogyHi: 'Multi-select checkboxes ke liye array mein `.includes` check karke `.filter` (remove) ya `[...prev, val]` (add) karo!',
    steps: [['Text & Textarea', '`value={form.bio} onChange={handleChange}`'], ['Select Dropdown', '`<select name="role" value={form.role} onChange={handleChange}>`'], ['Radio Group', '`checked={form.plan === "pro"} value="pro"`'], ['Single Checkbox', '`checked={form.agreed} onChange={handleChange}`']],
    jobUse: 'Powers settings pages, job filters, checkout flows, and surveys in React.',
    mistake: 'Using `value={form.agreed}` instead of `checked={form.agreed}` on a React checkbox!',
    proHabit: 'Never put `selected` on `<option>` in React—control the active option solely via `<select value={form.role}>`!',
    rule: 'Text/Textarea/Select -> value | Checkbox/Radio -> checked.',
    code: `<select name="plan" value={form.plan} onChange={handleChange}>
  <option value="free">Free</option>
  <option value="pro">Pro</option>
</select>
<label>
  <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
  I agree to Terms
</label>`,
    out: 'Clean, warning-free React select and checkbox controls.',
    q1: ['How does controlling a <select> dropdown in React differ from plain HTML?', 'In plain HTML you add a selected attribute to a specific <option>, whereas in React you control the active selection via a single value={state} prop on the parent <select> tag.'],
  },
  {
    id: 204, mod: 24, tInMod: 4,
    title: 'Form validation',
    sub: 'Pure Validation Functions, Field-Level `errors` State & Scaling With Zod / React Hook Form',
    coreEn: 'Validate React forms cleanly using a ==pure `validate(form)` function== returning an `errors` object (`{ email: "Invalid email" }`)—display inline field errors, block submit if `Object.keys(errors).length > 0`, and use ==Zod + React Hook Form== for large enterprise forms!',
    coreHi: 'React forms ko ek ==pure `validate(form)` function== se validate karo jo `errors` object return kare—bade apps mein ==Zod + React Hook Form== industry standard combo hai!',
    analogyTitle: 'Pre-Flight Checklist Returning Exact Red Warnings for Only the Missing Items',
    analogyEn: 'Using **Zod** lets you share the EXACT same validation schema between your React frontend AND your Express backend—zero duplicated rules!',
    analogyHi: '**Zod** ka sabse bada fayda: wahi validation schema React frontend AUR Express backend dono par reuse ho jata hai!',
    steps: [['Pure Validator', '`function validate(f) { const e = {}; if (!f.email.includes("@")) e.email = "..."; return e; }`'], ['Store Errors', '`const [errors, setErrors] = useState({});`'], ['Check Before POST', 'If `Object.keys(nextErrors).length > 0`, set errors & return!'], ['Scale With Zod', 'Use `react-hook-form` + `zod` for complex multi-step forms']],
    jobUse: 'Required skill for every React frontend & full-stack role.',
    mistake: 'Validating ONLY with a single generic alert popup `"Something is wrong!"` instead of per-field inline errors.',
    proHabit: 'Always re-validate on the Express backend too—frontend validation is UX, backend validation is security!',
    rule: 'Pure validate(form) -> Per-Field Inline Errors -> Always Re-Validate on Express Backend.',
    code: `function validate(form) {
  const errs = {};
  if (!form.name.trim()) errs.name = 'Name is required';
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) errs.email = 'Valid email required';
  return errs;
}`,
    out: 'Clean, testable, per-field React validation engine.',
    q1: ['Why do many full-stack MERN teams love using Zod for form and API validation?', 'Zod provides a declarative, readable schema API that validates data cleanly with clear field-level error messages, and the exact same schema can be reused on both the React frontend and Express backend.'],
  },
  {
    id: 205, mod: 24, tInMod: 5,
    title: 'Accessible labels and error messages',
    sub: 'Using React `useId()`, `htmlFor`, `aria-invalid`, `aria-describedby` & `role="alert"`',
    coreEn: 'Build WCAG-compliant React inputs using ==`const id = useId()`== (generates guaranteed-unique IDs even if a component renders 5 times on one page!), linking ==`<label htmlFor={id}>`==, ==`aria-invalid={Boolean(error)}`==, and ==`aria-describedby={`${id}-err`}`==!',
    coreHi: 'Accessible React inputs ke liye ==`useId()`== se unique ID banao, `<label htmlFor={id}>` jodo, aur error par ==`aria-invalid` + `aria-describedby` + `role="alert"`== lagao!',
    analogyTitle: 'Auto-Numbered Unique Labels Guaranteeing Zero ID Collisions Across Reusable Forms',
    analogyEn: 'Without `useId()`, rendering two `<EmailField />` components on the same page creates duplicate `id="email"`—clicking the second label weirdly focuses the FIRST input!',
    analogyHi: '`useId()` ke bina 2 baar same component render karne par duplicate `id` clash ho jata hai—`useId()` isse 100% bacha leta hai!',
    steps: [['Generate Unique ID', '`const id = useId();` (built into React 18+!)'], ['Link Label', '`<label htmlFor={id}>{label}</label>` + `<input id={id} />`'], ['Link Error Text', '`aria-invalid={!!error}` + `aria-describedby={error ? `${id}-err` : undefined}`'], ['Announce Live', 'Put `role="alert"` on error `<p id={`${id}-err`}>`']],
    jobUse: 'Instantly passes accessibility audits and impresses senior frontend reviewers.',
    mistake: 'Hardcoding `id="email"` inside a reusable `<FormField />` component used multiple times on one page.',
    proHabit: 'Always use React built-in **`useId()`** inside every reusable `<FormField />` component!',
    rule: 'useId() + htmlFor + aria-invalid + aria-describedby + role="alert" = 100% Accessible Input.',
    code: `export function FormField({ label, error, ...props }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">{label}</label>
      <input id={id} aria-invalid={!!error} aria-describedby={error ? \`\${id}-err\` : undefined} {...props} />
      {error && <p id={\`\${id}-err\`} role="alert" className="text-xs text-rose-600">{error}</p>}
    </div>
  );
}`,
    out: 'Collision-free, WCAG-compliant reusable React form field.',
    q1: ['What problem does React built-in useId() hook solve in reusable form components?', 'If a reusable <FormField /> component is rendered multiple times on the same page, hardcoding id="input" causes duplicate HTML IDs that break <label htmlFor> and aria-describedby. useId() generates a guaranteed unique ID per component instance.'],
  },
  {
    id: 206, mod: 24, tInMod: 6,
    title: 'Submitting and resetting forms',
    sub: 'Async `onSubmit`, Disabling Double-Submit (`isSubmitting`), Server Errors & Clean Reset',
    coreEn: 'Handle real React form submissions cleanly: ==`e.preventDefault()` -> Validate -> `setIsSubmitting(true)` (prevents double-click orders!) -> `await fetch(POST)` -> on success `setForm(INITIAL)` + toast -> `finally { setIsSubmitting(false); }`==!',
    coreHi: 'Real form submission flow: ==`e.preventDefault()` -> Validate -> `setIsSubmitting(true)` (double-click roke!) -> `await fetch` -> success par `setForm(INITIAL)` + success message -> `finally` mein `false`==!',
    analogyTitle: 'Locking the "Pay Now" Button Until the Bank Confirms So You Never Charge Twice',
    analogyEn: 'Only reset the form **AFTER** the server returns `200/201`—never wipe out the user typed 200-word message if the API failed with a temporary network error!',
    analogyHi: 'Form ko sirf server `200/201` success ke BAAD reset karo—agar network error aaya toh user ka likha text delete mat karo!',
    steps: [['Prevent & Validate', '`e.preventDefault()`; exit early if client validation fails'], ['Lock Button', '`setIsSubmitting(true)` -> `<button disabled={isSubmitting}>`'], ['Reset On Success', 'Reset `setForm(INITIAL_FORM)` ONLY inside success path'], ['Always Unlock', '`finally { setIsSubmitting(false); }`']],
    jobUse: 'Prevents duplicate payments, duplicate database records, and frustrated users.',
    mistake: 'Clearing the form immediately before `await fetch()` finishes—erasing everything if the server rejects one field!',
    proHabit: 'Keep `const INITIAL_FORM = { name: "", email: "" };` outside the component so resetting is a crisp 1-liner: `setForm(INITIAL_FORM)`!',
    rule: 'Disable While Submitting -> Reset ONLY on Success -> Always Unlock in finally.',
    code: `async function handleSubmit(e) {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    await createTask(form);
    setForm(INITIAL_FORM); // Reset ONLY after success!
  } catch (err) {
    setServerError(err.message);
  } finally {
    setIsSubmitting(false);
  }
}`,
    out: 'Double-submit-proof, user-friendly async form submission.',
    q1: ['Why should you disable the submit button while isSubmitting is true and only reset form fields after the API call succeeds?', 'Disabling prevents accidental double-clicks from creating duplicate orders or charges, and waiting until success preserves the user typed inputs if a temporary network or validation error requires them to retry.'],
  },
  {
    id: 207, mod: 24, tInMod: 7,
    title: 'Reusable form components',
    sub: 'Building a Clean `<FormField>`, `<SelectField>` & `<SubmitButton>` Kit Used Across Your Whole App',
    coreEn: 'Extract your accessible label, input, Tailwind border/focus styles, and inline error display into a ==reusable `<TextField />`, `<SelectField />`, and `<SubmitButton />` kit==—shrinking every new form in your MERN app from 120 lines down to 25 crisp lines!',
    coreHi: 'Apne accessible label, input aur error markup ko ==`<TextField />`, `<SelectField />` aur `<SubmitButton />`== mein extract karo—ab koi bhi naya form 120 lines ke bajaye sirf 25 clean lines mein banega!',
    analogyTitle: 'Standardized Form Lego Bricks Making Login, Signup, Checkout & Settings Look 100% Identical',
    analogyEn: 'Update border radius or error color once in `TextField.jsx` and every single form across your entire MERN app upgrades simultaneously!',
    analogyHi: '`TextField.jsx` mein ek baar styling update karo aur poore app ke saare forms ek saath upgrade ho jaate hain!',
    steps: [['Extract TextField', 'Encapsulates `useId()`, `<label>`, `<input>`, red border & error `<p>`'], ['Extract SelectField', 'Accepts `options={[{ value, label }]}` array cleanly'], ['Extract SubmitBtn', 'Handles `isSubmitting` spinner & disabled state automatically'], ['Compose Fast', 'Build Login, Signup & Profile pages in minutes']],
    jobUse: 'Directly mirrors real design-system engineering in production React teams.',
    mistake: 'Copy-pasting the same 12-line `<label> + <input> + {error && <p>}` block 35 times across 6 forms!',
    proHabit: 'Store your reusable form primitives cleanly in `src/components/ui/FormFields.jsx`.',
    rule: 'Build Accessible Form Primitives Once -> Compose Every App Form in 25 Lines.',
    code: `<form onSubmit={handleSubmit} className="space-y-4">
  <TextField label="Full Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
  <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
  <SubmitButton isLoading={isSubmitting}>Create Account</SubmitButton>
</form>`,
    out: 'Ultra-clean, consistent, accessible React form architecture.',
    q1: ['What are the 3 biggest benefits of building a reusable <TextField /> component for all forms in a React app?', '1) Guarantees every single field gets proper accessibility (useId, htmlFor, aria-invalid, role="alert"), 2) Eliminates repetitive Tailwind boilerplate, and 3) Ensures uniform error styling across the entire application.'],
  },

  // ═══ CHAPTER 25: API Integration in React (208..216) ═══
  {
    id: 208, mod: 25, tInMod: 1,
    title: 'Planning API data flow',
    sub: 'Centralizing Base URL, Auth Headers & Error Parsing in One Clean `src/services/api.js` Client',
    coreEn: 'Never scatter raw `fetch("http://localhost:5000/api/...")` calls across 25 components! Create ==one centralized `src/services/api.js` helper== handling ==base URL (`VITE_API_URL`), JSON headers, auth token attachment, `res.ok` checks, and uniform error messages==!',
    coreHi: '25 components mein raw `fetch("http://localhost:5000/...")` mat bikhrao—ek ==central `src/services/api.js` client== banao jo Base URL, Auth headers aur `res.ok` error handling ek jagah manage kare!',
    analogyTitle: 'Dedicated Company Mailroom Handling All Outgoing & Incoming Parcels Uniformly',
    analogyEn: 'When your backend moves from `localhost:5000` to `https://api.myapp.com`, changing ONE env var updates all 40 API calls simultaneously!',
    analogyHi: 'Central API client hone se local se production URL switch karna sirf 1 `.env` variable change karne ka kaam reh jata hai!',
    steps: [['Central api.js', 'Single `apiRequest(path, options)` wrapper function'], ['Use Env Base URL', '`const BASE = import.meta.env.VITE_API_URL;`'], ['Domain Modules', 'Export crisp helpers: `getCourses()`, `createOrder(data)`'], ['Keep UI Clean', 'Components call `await getCourses()`, never raw HTTP details']],
    jobUse: 'Standard production architecture in every React/MERN team.',
    mistake: 'Hardcoding `http://localhost:5000` inside 18 different React files so deployment breaks completely!',
    proHabit: 'Keep React components focused on UI and put all `fetch`/Axios logic inside `src/services/`.',
    rule: '1 Central api.js + Domain Service Functions = Clean, Deploy-Ready React Data Layer.',
    code: `const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export async function apiFetch(path, options = {}) {
  const res = await fetch(\`\${BASE}\${path}\`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const data = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message || \`Request failed (\${res.status})\`);
  return data;
}`,
    out: 'Clean, reusable, production-safe React API client.',
    q1: ['Why should React components call helper functions in src/services/api.js instead of writing raw fetch() calls directly inside every component?', 'Centralizing API calls keeps base URLs, auth headers, res.ok error parsing, and 204 handling in one place—preventing duplicated code, making backend URL switches effortless, and simplifying testing.'],
  },
  {
    id: 209, mod: 25, tInMod: 2,
    title: 'GET, POST, PUT, PATCH, DELETE',
    sub: 'Wiring Full CRUD From React UI to Express REST Endpoints & Keeping Local State Synced',
    coreEn: 'Wire complete ==CRUD== cleanly in React: ==`GET`== loads initial list into state, ==`POST`== appends returned item (`[...prev, created]`), ==`PATCH`== updates 1 item in place (`.map()`), and ==`DELETE`== removes it (`.filter()`)—keeping UI snappy without full page reloads!',
    coreHi: 'React mein complete ==CRUD== wire karo: ==`GET`== list load kare, ==`POST`== naya item state mein jode, ==`PATCH`== `.map()` se update kare, aur ==`DELETE`== `.filter()` se hataye—bina page reload kiye!',
    analogyTitle: 'Keeping Your Local Cash Register Display 100% Synced With the Bank Server',
    analogyEn: 'Always append the **server-returned object** (`created` containing MongoDB `_id` and `createdAt`) into React state so subsequent edits/deletes have the real DB ID!',
    analogyHi: '`POST` ke baad hamesha server se aaya hua `created` object (jisme MongoDB `_id` hota hai!) React state mein add karo!',
    steps: [['GET (Read)', '`useEffect` -> `apiFetch("/api/tasks")` -> `setTasks(data)`'], ['POST (Create)', '`const created = await apiFetch(..., { method: "POST" })` -> append'], ['PATCH (Update)', 'Update 1 field -> `.map(t => t._id === id ? updated : t)`'], ['DELETE (Remove)', '`await apiFetch(..., { method: "DELETE" })` -> `.filter()`']],
    jobUse: 'The core full-stack CRUD loop powering 90% of real-world MERN features.',
    mistake: 'Adding a new task to React state without waiting for the MongoDB `_id` so clicking Delete right away sends `/api/tasks/undefined`!',
    proHabit: 'Use the server-returned record (`created._id`) when updating React state after `POST`!',
    rule: 'GET Loads | POST Appends Server Record | PATCH Maps | DELETE Filters.',
    code: `const handleCreate = async (title) => {
  const created = await apiFetch('/api/tasks', {
    method: 'POST', body: JSON.stringify({ title }),
  });
  setTasks((prev) => [created, ...prev]);
};`,
    out: 'Instant, database-synced React CRUD state management.',
    q1: ['Why should you append the object returned by the server (containing _id) after a POST request rather than just the local form object?', 'The server generates authoritative fields like MongoDB _id, timestamps (createdAt), and default values. Storing the returned object guarantees future PATCH or DELETE calls have the real database _id.'],
  },
  {
    id: 210, mod: 25, tInMod: 3,
    title: 'Fetching data in React',
    sub: 'Safe `useEffect` + `AbortController` Data Loading (Plus Why TanStack Query Shines at Scale)',
    coreEn: 'Fetch data safely inside ==`useEffect`== using ==`AbortController` cleanup==, ==`isLoading`/`error`/`data` states==, and proper dependency arrays—and know that in larger production apps, ==TanStack Query (React Query)== automates caching, retries, and deduplication!',
    coreHi: 'React mein data safely fetch karo: ==`useEffect` + `AbortController` cleanup + `loading`/`error`/`data` states==—aur bade production apps mein ==TanStack Query== caching aur auto-refetch handle karta hai!',
    analogyTitle: 'Clean Fetch Pipeline With Automatic Cancellation When You Walk Out of the Room',
    analogyEn: 'Knowing how to write clean `useEffect` + `AbortController` from scratch AND knowing why production teams adopt TanStack Query makes you shine in interviews!',
    analogyHi: '`useEffect` + `AbortController` scratch se likhna aur TanStack Query ke benefits samajhna—dono interviews mein pucha jata hai!',
    steps: [['3 Core States', '`data`, `isLoading = true`, `error = null`'], ['Abort Cleanup', 'Create `AbortController` inside `useEffect`, abort on cleanup'], ['Ignore AbortError', 'Never show error UI when `err.name === "AbortError"`'], ['Know React Query', 'TanStack Query adds caching, background refresh & retries']],
    jobUse: 'Used on every data-driven page in React and MERN apps.',
    mistake: 'Forgetting cleanup in `useEffect` when switching `/users/1` -> `/users/2` quickly, causing stale data to overwrite the screen!',
    proHabit: 'Wrap reusable fetch logic into a clean `useFetch(url)` custom hook or adopt TanStack Query for large apps.',
    rule: 'useEffect + AbortController + [deps] + 4 UI States = Rock-Solid React Fetching.',
    code: `useEffect(() => {
  const ctrl = new AbortController();
  setLoading(true);
  apiFetch(\`/api/courses?q=\${q}\`, { signal: ctrl.signal })
    .then((d) => { setCourses(d); setError(null); })
    .catch((e) => { if (e.name !== 'AbortError') setError(e.message); })
    .finally(() => setLoading(false));
  return () => ctrl.abort();
}, [q]);`,
    out: 'Race-condition-free, leak-proof React API data fetching.',
    q1: ['What extra benefits does a library like TanStack Query (React Query) provide over manual useEffect fetching?', 'TanStack Query automatically handles in-memory response caching, request deduplication, background refetching on window focus, automatic retries, pagination/infinite scroll, and eliminates repetitive loading/error boilerplate.'],
  },
  {
    id: 211, mod: 25, tInMod: 4,
    title: 'Loading and error states',
    sub: 'Skeleton Shimmers, Friendly Retry Buttons & Never Leaving Users on Blank White Screens',
    coreEn: 'Upgrade UX with ==Skeleton Loading Cards== (matching your real card layout so zero layout jump occurs!), ==clear human-readable Error Banners with a working Retry button==, and ==helpful Empty States==!',
    coreHi: 'Blank screen ya dull `"Loading..."` ke bajaye ==Skeleton Loading Cards==, ==Retry button ke saath friendly Error Banner== aur ==Empty State== dikhao—app turant premium SaaS jaisa lagta hai!',
    analogyTitle: 'Placeholder Frames Holding Exact Room Shape While Paintings Arrive',
    analogyEn: 'In Tailwind, `animate-pulse bg-slate-200 rounded-xl h-32` creates a sleek Facebook/LinkedIn-style skeleton loader in 1 single line!',
    analogyHi: 'Tailwind mein sirf `animate-pulse bg-slate-200 rounded-xl h-32` se 1 line mein sleek LinkedIn-style skeleton loader ban jata hai!',
    steps: [['Skeleton Cards', 'Use Tailwind `animate-pulse` matching final card dimensions'], ['Actionable Errors', 'Show friendly message + `onClick={refetch}` Retry button'], ['Empty State CTA', 'Show helpful illustration/text + "Create First Item" button'], ['No Raw Stack Traces', 'Log technical details in console; show clear English to users']],
    jobUse: 'Immediate visual polish differentiator in portfolio demos and real SaaS products.',
    mistake: 'Showing raw `TypeError: Failed to fetch` or freezing with zero Retry option when Wi-Fi blips!',
    proHabit: 'Store a `retryCount` (`setRetryCount(c => c + 1)`) in `useEffect` deps so clicking "Retry" cleanly re-triggers the fetch!',
    rule: 'Skeleton Loader + Friendly Error With Retry + Helpful Empty State = Pro UX.',
    code: `if (isLoading) return <div className="h-32 animate-pulse rounded-2xl bg-slate-200" />;
if (error) return (
  <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-4">
    <p className="text-rose-700">{error}</p>
    <button onClick={onRetry} className="mt-2 font-bold underline">Try Again</button>
  </div>
);`,
    out: 'Smooth skeleton shimmer and resilient retryable error banner.',
    q1: ['Why are Skeleton Loaders often better UX than a single centered spinning icon?', 'Skeletons mirror the final layout dimensions—reducing perceived wait time and preventing jarring Cumulative Layout Shift (CLS) when the real content pops in.'],
  },
  {
    id: 212, mod: 25, tInMod: 5,
    title: 'Submitting data',
    sub: 'POST/PATCH Mutations, Toast Confirmations & Optimistic vs Pessimistic UI Updates',
    coreEn: 'When mutating server data (`POST`/`PATCH`/`DELETE`), choose ==Pessimistic Updates== (wait for `200 OK` -> update UI—safest for payments & forms!) or ==Optimistic Updates== (update UI immediately like a Twitter Like heart, rolling back cleanly if the server fails)!',
    coreHi: 'Data save/update karte waqt ==Pessimistic Update== (server `200 OK` ke baad UI update — payments/forms ke liye safest!) ya ==Optimistic Update== (turant Like heart red, error par rollback!) choose karo!',
    analogyTitle: 'Instant Heart Animation With Auto-Undo If Wi-Fi Drops (Optimistic) vs Waiting for Receipt (Pessimistic)',
    analogyEn: 'Always show subtle confirmation feedback (toast `"Saved!"` or updated badge) so users feel 100% confident their click actually saved to MongoDB!',
    analogyHi: 'Save hote hi `"Saved!"` toast ya badge zaroor dikhao taaki user ko 100% bharosa rahe ki data database mein save ho gaya!',
    steps: [['Pessimistic (Default)', 'Disable button -> `await POST` -> update state -> toast'], ['Optimistic (Snappy)', 'Save snapshot -> update UI now -> rollback on `catch`!'], ['Prevent Double-Fire', 'Disable submit/delete button while `isPending`'], ['Clear Feedback', 'Show crisp Success toast or inline Server validation error']],
    jobUse: 'Makes MERN apps feel responsive like native apps while staying 100% financially safe.',
    mistake: 'Doing optimistic updates on a Checkout Payment button (NEVER pretend a payment succeeded before the gateway confirms!).',
    proHabit: 'Use **Optimistic UI** for tiny low-risk toggles (Like, Bookmark) and **Pessimistic UI** for money, auth, and create forms!',
    rule: 'Payments/Creates = Pessimistic (Wait for 200) | Likes/Toggles = Optimistic With Rollback.',
    code: `async function handleLike(postId) {
  const prev = liked;
  setLiked(!prev); // Instant optimistic feel!
  try {
    await apiFetch(\`/api/posts/\${postId}/like\`, { method: 'POST' });
  } catch {
    setLiked(prev); // Clean rollback if request fails!
  }
}`,
    out: 'Instantaneous, resilient optimistic toggle with automatic rollback.',
    q1: ['What is an Optimistic UI update in React, and what must you ALWAYS include with it?', 'An Optimistic update immediately reflects the expected change in the UI before the server responds (making clicks feel instant). You must ALWAYS save the previous state snapshot and roll back cleanly in catch if the API request fails.'],
  },
  {
    id: 213, mod: 25, tInMod: 6,
    title: 'Pagination and filtering',
    sub: 'Server-Side Pagination (`?page=2&limit=12&category=mern`) Synced to URL Query Params',
    coreEn: 'Never fetch 50,000 MongoDB rows into React at once! Use ==Server-Side Pagination & Filtering== (`GET /api/products?page=2&limit=12&q=laptop&category=tech`), sync params via ==`useSearchParams()`==, and reset `page` back to `1` whenever the user changes search or category!',
    coreHi: 'Ek baar mein 50,000 rows fetch mat karo—==Server-Side Pagination (`?page=2&limit=12&q=...`)== use karo, URL `useSearchParams()` se sync rakho, aur filter badalte hi ==`page` ko `1` par reset== karo!',
    analogyTitle: 'Reading a 1,000-Page Catalog 12 Items per Page Instead of Dropping the Whole Library on Your Phone',
    analogyEn: 'Classic pagination bug: user is on Page 5, types a new search with only 3 results, and sees `"No items"` because `page` stayed stuck at `5`! Always reset `page = 1` on filter change!',
    analogyHi: 'Classic bug: Page 5 par naya search karne par `page = 1` reset na karo toh `"No results"` dikhta hai—filter change par hamesha `page = 1` karo!',
    steps: [['Sync URL Params', '`const [params, setParams] = useSearchParams();`'], ['Reset Page On Filter', 'Changing `q` or `category` ALWAYS sets `page: "1"`!'], ['Read Total Meta', 'Backend returns `{ items, page, totalPages, totalCount }`'], ['Disable Bounds', 'Disable Prev on `page <= 1`, Next on `page >= totalPages`']],
    jobUse: 'Essential for scaling real e-commerce, admin panels, and SaaS tables smoothly.',
    mistake: 'Forgetting to reset `page = 1` when the user types a new search term or selects a new category!',
    proHabit: 'Always have your Express paginated endpoint return `{ items, total, page, totalPages }` so React pagination controls stay trivial!',
    rule: 'Server Pagination (?page&limit) + URL Sync + Always Reset page=1 on Filter Change.',
    code: `const handleCategory = (cat) => {
  setSearchParams({ category: cat, page: '1' }); // Always reset to page 1!
};`,
    out: 'Fast, shareable, bug-free server-paginated catalog.',
    q1: ['Why must you always reset page back to 1 whenever the user changes a search query or category filter?', 'Because the newly filtered result set may only have 1 or 2 pages—leaving page stuck at 5 would request an empty slice from the backend and falsely display "No results found".'],
  },
  {
    id: 214, mod: 25, tInMod: 7,
    title: 'Handling network failures',
    sub: 'Graceful Offline Recovery, 401 Session Expiry Redirects & Request Timeouts',
    coreEn: 'Real users hit flaky 4G, sleeping servers, and expired tokens—handle ==offline/network drops== with friendly retry UI, ==`401 Unauthorized`== by clearing stale tokens & redirecting cleanly to `/login`, and ==request timeouts (`AbortSignal.timeout(10000)`)== so fetches never hang forever!',
    coreHi: 'Real users ka 4G network drop hota hai aur tokens expire hote hain—==offline error par Retry button==, ==`401` par clean `/login` redirect==, aur ==timeout (`AbortSignal.timeout`)== lagao taaki app kabhi hang na ho!',
    analogyTitle: 'All-Weather Car Tires Handling Rain, Potholes & Flat-Battery Recovery Smoothly',
    analogyEn: 'Friendly error copy matters: translate cryptic `"TypeError: Failed to fetch"` into `"Unable to reach server. Please check your internet connection and tap Retry."`',
    analogyHi: 'User ko `"TypeError: Failed to fetch"` mat dikhao—`"Internet connection check karein aur Retry dabayein"` jaisa clear message dikhao!',
    steps: [['Handle Offline', 'Detect network error -> show friendly Retry banner'], ['Handle 401 Globally', 'Clear expired auth state -> redirect cleanly to `/login`'], ['Add Timeouts', '`AbortSignal.timeout(10000)` prevents infinite hanging requests'], ['Log For Devs', 'Keep real stack/status in `console.error` for debugging']],
    jobUse: 'Makes mobile & Indian-network web apps feel rock-solid and reliable.',
    mistake: 'Letting a `401` expired JWT leave the user trapped on a broken dashboard clicking buttons that silently fail!',
    proHabit: 'Centralize `401` handling inside `src/services/api.js` so expired sessions redirect cleanly from ANY page!',
    rule: 'Friendly Network Errors + Centralized 401 Recovery + Request Timeouts = Resilient App.',
    code: `const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
if (res.status === 401) {
  onSessionExpired(); // Clear auth & redirect to /login!
  throw new Error('Session expired. Please log in again.');
}`,
    out: 'Resilient, timeout-protected, session-aware API handling.',
    q1: ['How should a React app handle an HTTP 401 Unauthorized response from a protected Express API?', 'Clear the expired client auth state/session, inform the user their session expired, and redirect them cleanly to the /login page (ideally saving their current location to return afterward).'],
  },
  {
    id: 215, mod: 25, tInMod: 8,
    title: 'Data transformation',
    sub: 'Normalizing Raw Backend JSON (`_id`, ISO Dates, Paise/INR) Into Clean UI-Ready Models',
    coreEn: 'Transform messy backend API payloads ==once at the service boundary== (converting MongoDB `_id -> id`, formatting ISO dates `2026-11-25T... -> 25 Nov 2026`, defaulting missing arrays `tags ?? []`) so your React UI components stay ==clean, simple, and crash-proof==!',
    coreHi: 'Backend ke raw JSON (`_id`, ISO dates, missing fields) ko ==service layer mein ek baar clean transform== kar lo taaki React UI components mein har jagah `?.` aur date formatting repeat na karni pade!',
    analogyTitle: 'Unpacking & Labeling Warehouse Boxes at the Back Door Before Displaying Items in the Showroom',
    analogyEn: 'If your backend later renames `full_name` to `name`, you update ONE line inside `normalizeUser()` instead of hunting through 18 React components!',
    analogyHi: 'Backend agar kabhi `full_name` ko `name` rename kar de, toh sirf `normalizeUser()` mein 1 line badalni padegi—18 components safe rahenge!',
    steps: [['Normalize Once', 'Map raw API JSON cleanly inside `src/services/`'], ['Safe Defaults', '`tags: raw.tags ?? []`, `price: Number(raw.price ?? 0)`'], ['Format Dates/Money', 'Use `Intl.NumberFormat("en-IN")` & `Intl.DateTimeFormat`'], ['Decouple UI', 'Components receive clean predictable props every time']],
    jobUse: 'Keeps frontend codebases clean even when integrating with messy legacy or third-party APIs.',
    mistake: 'Repeating `new Date(item.createdAt).toLocaleDateString(...)` and `item?.tags?.length || 0` in 12 different JSX files!',
    proHabit: 'Use browser-native **`Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" })`** for zero-library currency formatting!',
    rule: 'Transform & Normalize at the Service Boundary -> Keep UI Components Clean.',
    code: `export function normalizeCourse(raw) {
  return {
    id: raw._id ?? raw.id,
    title: raw.title ?? 'Untitled Course',
    priceFormatted: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(raw.price ?? 0),
    tags: Array.isArray(raw.tags) ? raw.tags : [],
  };
}`,
    out: 'Clean, insulated UI data model with native INR formatting.',
    q1: ['Why is normalizing API responses inside a dedicated adapter/service function better than reading raw backend field names across 20 React components?', 'It insulates your UI from backend schema changes, enforces safe defaults (like empty arrays for missing tags), and keeps formatting logic in one testable place.'],
  },
  {
    id: 216, mod: 25, tInMod: 9,
    title: 'Environment variables and secret safety',
    sub: 'Vite `VITE_*` Public Config Variables vs True Backend Secrets (Never Expose Keys in React!)',
    coreEn: 'In Vite React, ONLY variables prefixed with ==`VITE_` (`import.meta.env.VITE_API_URL`)== are exposed to browser JS—and remember: ==EVERY `VITE_*` variable is 100% PUBLIC in the compiled JS bundle!== NEVER put OpenAI keys, Stripe secret keys, or MongoDB URIs in React `.env`!',
    coreHi: 'Vite React mein sirf ==`VITE_` prefix== wale variables (`import.meta.env.VITE_API_URL`) chalte hain—par yaad rakho ==HAR `VITE_*` variable browser mein 100% PUBLIC hota hai==! Secret keys sirf Express backend `.env` mein rakho!',
    analogyTitle: 'Public Storefront Address (`VITE_API_URL`) vs Secret Bank Vault PIN (Express Backend Only!)',
    analogyEn: 'Need React to call OpenAI or Razorpay? React calls YOUR Express endpoint (`/api/ai/chat`), and Express attaches the secret `OPENAI_API_KEY` safely on the server!',
    analogyHi: 'OpenAI ya Razorpay call karna hai? React aapke Express `/api/ai` route ko call karega, aur secret key sirf Express server par safe rahegi!',
    steps: [['Public Config Only', '`VITE_API_URL=https://api.myapp.com` (safe to be public)'], ['Read In Vite', '`import.meta.env.VITE_API_URL` (NOT `process.env`!)'], ['Proxy Secrets', 'Keep `OPENAI_API_KEY`, `MONGO_URI`, `JWT_SECRET` on Express ONLY'], ['Gitignore .env', 'Add `.env` to `.gitignore` + set prod vars in Vercel/Render']],
    jobUse: 'Prevents catastrophic API key theft and security interview rejections!',
    mistake: 'Thinking putting `VITE_OPENAI_KEY=sk-...` in a frontend `.env` hides it from users (Vite literally bakes it in plaintext into `dist/assets/index.js`!).',
    proHabit: 'Rule of Thumb: If a key can cost you money or access private data, it belongs **100% on your Node/Express backend**!',
    rule: 'VITE_* = Public Frontend Config ONLY | Real Secrets = Backend Server Proxy ONLY.',
    code: `// SAFE in React (.env):
// VITE_API_URL=https://api.futureit.com
const API = import.meta.env.VITE_API_URL;

// NEVER in React: MONGO_URI, JWT_SECRET, OPENAI_API_KEY, STRIPE_SECRET!`,
    out: 'Zero leaked secrets in compiled frontend bundles.',
    q1: ['Does putting an API secret key inside a Vite React .env file (VITE_SECRET_KEY) keep it hidden from users?', 'NO! Vite embeds every VITE_* environment variable directly into the compiled client-side JavaScript bundle sent to the browser, where anyone can read it in DevTools. True secrets must live strictly on your Node/Express backend server.'],
  },

  // ═══ CHAPTER 26: Advanced React Concepts (217..226) ═══
  {
    id: 217, mod: 26, tInMod: 1,
    title: 'Component lifecycle concepts',
    sub: 'Mount -> Update (Re-Render) -> Unmount Mapped Cleanly to Modern React Hooks',
    coreEn: 'Every React component passes through ==3 Lifecycle Phases==: ==1) Mount== (first inserted into DOM -> `useEffect(..., [])`), ==2) Update== (re-renders when state/props/context change -> `useEffect(..., [dep])`), and ==3) Unmount== (removed from DOM -> `useEffect` cleanup function)!',
    coreHi: 'Har React component ke ==3 Lifecycle Phases== hote hain: ==1) Mount== (pehli baar DOM mein aana), ==2) Update== (state/props badalne par re-render), aur ==3) Unmount== (screen se hatna — cleanup chalta hai)!',
    analogyTitle: 'Opening a Shop (Mount) -> Updating Menu Prices (Update) -> Closing & Locking Up (Unmount)',
    analogyEn: 'Remember: When a Parent re-renders, its Children re-render by default—so keep render functions fast and pure!',
    analogyHi: 'Parent re-render hone par Children bhi re-render hote hain—isliye render body hamesha fast aur pure rakho!',
    steps: [['Mount', 'Initial render + `useEffect(fn, [])` runs once after paint'], ['Update', 'Triggered by State, Props, or Context change'], ['Unmount', 'Cleanup `return () => ...` cancels timers/sockets/fetches'], ['Render != Commit', 'React computes Virtual DOM diff first, commits minimal real DOM edits']],
    jobUse: 'Core mental model explaining Hooks, animations, subscriptions, and performance.',
    mistake: 'Forgetting to clean up `window.addEventListener` or `setInterval` on Unmount, leaking listeners every time a user visits the page!',
    proHabit: 'Trace component lifecycle cleanly: **Mount (setup) -> Update (re-sync deps) -> Unmount (cleanup)**.',
    rule: 'Mount = Setup | Update = Re-Render on State/Props | Unmount = Cleanup.',
    code: `useEffect(() => {
  console.log('Mounted or updated');
  return () => console.log('Cleaning up before re-run or unmount');
}, [roomId]);`,
    out: 'Complete clarity over React component lifecycle timing.',
    q1: ['What are the 3 triggers that cause a React component to re-render?', '1) Its own state updates (useState/useReducer), 2) Its parent component re-renders (passing new or same props), or 3) A React Context value it consumes changes.'],
  },
  {
    id: 218, mod: 26, tInMod: 2,
    title: 'Context and reducer patterns',
    sub: 'Scaling Complex Multi-Action State (Shopping Cart, Multi-Step Forms) With `useReducer` + Context',
    coreEn: 'When state has ==multiple interconnected actions== (e.g., Cart: `ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QTY`, `APPLY_COUPON`, `CLEAR`), replace 6 scattered `useState`s with ==`useReducer(reducer, initialState)`==—and pair it with ==Context== for clean global state without external bloat!',
    coreHi: 'Jab state mein multiple complex actions hon (jaise Shopping Cart: `ADD`, `REMOVE`, `QTY`, `CLEAR`), tab ==`useReducer`== + ==Context== use karo—saara state logic ek clean testable function mein aa jata hai!',
    analogyTitle: 'Central Bank Teller Processing Typed Slips (`dispatch({ type: "ADD_ITEM" })`) via Strict Rules',
    analogyEn: 'Because a reducer `(state, action) => newState` is a **100% pure JavaScript function**, you can unit-test your entire shopping cart logic without even rendering React!',
    analogyHi: 'Reducer ek pure JS function hai—aap poora cart logic bina browser ke bhi cleanly test aur debug kar sakte ho!',
    steps: [['Pure Reducer', '`function cartReducer(state, action) { switch (action.type) ... }`'], ['Dispatch Actions', '`dispatch({ type: "ADD", payload: product })`'], ['Pair With Context', 'Expose `{ state, dispatch }` via `<CartProvider>`'], ['Stay Immutable', 'Always return a brand-new state object/array from every case!']],
    jobUse: 'Built-in Redux-like architecture with zero extra dependencies—loved in MERN interviews!',
    mistake: 'Mutating `state.items.push(...)` inside a reducer (reducers MUST be 100% pure & immutable!).',
    proHabit: 'Use `useState` for simple independent values, and upgrade to `useReducer` when 4+ related state transitions interact!',
    rule: 'Complex Multi-Action State -> Pure useReducer + Context Provider.',
    code: `function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':    return [...state, action.item];
    case 'REMOVE': return state.filter((i) => i.id !== action.id);
    case 'CLEAR':  return [];
    default:       return state;
  }
}`,
    out: 'Predictable, pure, easily testable multi-action state machine.',
    q1: ['When should you choose useReducer over useState in React?', 'Choose useReducer when state logic involves multiple sub-values or 4+ related transition actions (like a shopping cart, multi-step wizard, or undo/redo editor) where centralizing pure transition rules makes the code cleaner and easier to test.'],
  },
  {
    id: 219, mod: 26, tInMod: 3,
    title: 'Performance profiling',
    sub: 'Measure First With React DevTools Profiler & Chrome Lighthouse Before Optimizing Anything',
    coreEn: 'Golden rule of performance: ==NEVER guess—MEASURE first== using ==React DevTools Profiler== (records exact millisecond render flamegraphs & highlights why components re-rendered) and ==Chrome Lighthouse== (LCP, INP, CLS)!',
    coreHi: 'Performance ka golden rule: ==tukkebaazi mat karo, pehle MEASURE karo== — ==React DevTools Profiler== (kaunsa component slow hai aur kyun re-render hua) aur ==Chrome Lighthouse== se exact bottleneck pakdo!',
    analogyTitle: 'Doctor Checking Blood Report Before Prescribing Medicine',
    analogyEn: '90% of React apps are already fast—profiling reveals the ONE real bottleneck (like an unoptimized 3 MB image or a 2,000-row list re-rendering on every keystroke)!',
    analogyHi: 'Profiling 10 second mein exact bottleneck dikha deta hai—jaise 1 heavy chart jo har keystroke par re-render ho raha tha!',
    steps: [['Enable Highlight', 'React DevTools -> Settings -> "Highlight updates when components render"'], ['Record Profiler', 'Profiler tab -> Record -> interact -> inspect Flamegraph'], ['Check Network/LCP', 'Lighthouse audit catches huge images & oversized JS bundles'], ['Fix Real Bottleneck', 'Move state down, virtualize huge lists, lazy-load heavy charts']],
    jobUse: 'Senior-level engineering habit that impresses interviewers immediately.',
    mistake: 'Wrapping every tiny 5-line component in `React.memo` and `useCallback` blindly without ever measuring!',
    proHabit: 'Before reaching for `useMemo`, try **moving state down** into the small child component that actually uses it—zero memoization needed!',
    rule: 'Measure With React Profiler First -> Fix Real Bottlenecks -> Verify Improvement.',
    code: `// Simple State Colocation Win (Often beats React.memo!):
// Move search/modal state INTO the small widget instead of top-level App.jsx
// so typing does NOT re-render the heavy sibling chart!`,
    out: 'Targeted, evidence-backed React performance optimization.',
    q1: ['What is often the simplest way to prevent a heavy sibling component from re-rendering on every keystroke without using React.memo?', 'Move the input state DOWN into its own small child component (State Colocation) so typing only re-renders that tiny input component rather than the entire parent tree.'],
  },
  {
    id: 220, mod: 26, tInMod: 4,
    title: 'React.memo overview',
    sub: 'Skipping Re-Renders on Expensive Pure Child Components When Props Stay Unchanged',
    coreEn: '==`React.memo(Component)`== wraps a pure component so React ==skips re-rendering it when its parent re-renders AND all props are shallowly equal==—useful ONLY for genuinely heavy components (big charts, complex data tables, 500-item rows)!',
    coreHi: '==`React.memo(Component)`== heavy child components (bade charts ya tables) ko parent re-render par skip kar deta hai jab tak uske props actually change na hon!',
    analogyTitle: 'Skipping Re-Printing a 50-Page Chart When None of Its Numbers Changed',
    analogyEn: 'Watch out: passing a brand-new inline object (`style={{ color: "red" }}`) or inline arrow (`onClick={() => ...}`) creates a new reference every render and silently defeats `React.memo` unless stabilized!',
    analogyHi: 'Dhyan rakho: `React.memo` child ko inline `() => ...` ya `{ a: 1 }` pass karne par har render mein naya reference banta hai aur memo bypass ho jata hai!',
    steps: [['Profile First', 'Verify component actually takes >5–10ms to render'], ['Wrap Export', '`export const HeavyChart = React.memo(function HeavyChart({ data }) { ... });`'], ['Keep Props Stable', 'Pair with `useCallback`/`useMemo` for object/fn props if needed'], ['Skip Cheap UI', 'Do NOT wrap simple `<Button>` or `<Badge>` components']],
    jobUse: 'Frequently tested in React performance interviews.',
    mistake: 'Wrapping a memoized child while passing `onClick={() => handleClick(id)}` inline without `useCallback` (memo compares `oldFn !== newFn` and still re-renders!).',
    proHabit: 'Reserve `React.memo` strictly for profiled heavy subtrees (charts, maps, large tables).',
    rule: 'React.memo Skips Re-Render on Equal Shallow Props | Use Only for Profiled Heavy UI.',
    code: `export const ExpensiveChart = React.memo(function ExpensiveChart({ series }) {
  return <ChartCanvas data={series} />;
});`,
    out: 'Zero wasted chart re-renders during sibling UI interactions.',
    q1: ['Why can passing an inline object prop like config={{ dark: true }} break React.memo optimization?', 'Because React.memo performs a shallow reference comparison (Object.is). A new object literal {{ dark: true }} creates a fresh memory reference on every parent render, so React.memo sees props as changed and re-renders anyway.'],
  },
  {
    id: 221, mod: 26, tInMod: 5,
    title: 'useMemo and useCallback trade-offs',
    sub: 'Caching Expensive Computations (`useMemo`) & Stable Function References (`useCallback`) Wisely',
    coreEn: '==`useMemo(() => compute(a), [a])`== caches an ==expensive calculated value==, while ==`useCallback((x) => ..., [a])`== caches a ==function reference== across renders—use them ONLY for genuinely heavy calculations or to keep props stable for `React.memo` / `useEffect` dependencies!',
    coreHi: '==`useMemo`== heavy calculation ka result cache karta hai aur ==`useCallback`== function ka reference stable rakhta hai—har jagah blindly mat lagao, sirf heavy math ya `React.memo`/`useEffect` stability ke liye use karo!',
    analogyTitle: 'Writing Down a 5-Minute Calculation Answer on a Note (Worth It) vs Caching `2 + 2` (Waste of Time!)',
    analogyEn: 'Memoization has its own memory & comparison overhead—wrapping `a + b` in `useMemo` actually makes code SLOWER and harder to read!',
    analogyHi: '`2 + 2` ko `useMemo` mein daalna code ko slow aur ugly banata hai—sirf 10,000-row sort/filter ya `React.memo` callbacks par use karo!',
    steps: [['useMemo Use Case', 'Heavy filtering/sorting of 5,000+ rows or complex chart transforms'], ['useCallback Use Case', 'Callback passed into `React.memo` child or `useEffect` dep'], ['Honest Deps', 'Include all referenced variables in `[deps]`'], ['Keep Simple Default', '90% of components need ZERO `useMemo`/`useCallback`!']],
    jobUse: 'Classic mid-to-senior React interview question ("When do useMemo and useCallback actually help vs hurt?").',
    mistake: 'Wrapping every function and variable in `useCallback`/`useMemo` out of habit (adds clutter and memory overhead with zero speedup!).',
    proHabit: 'Write clean plain JS first; add `useMemo`/`useCallback` only when Profiler or `useEffect`/`React.memo` stability genuinely requires it.',
    rule: 'useMemo = Heavy Value Cache | useCallback = Stable Fn Ref | Never Overuse.',
    code: `const sortedRows = useMemo(
  () => rows.filter(matchesQuery).toSorted(byRevenueDesc),
  [rows, query]
);`,
    out: 'Fast cached heavy computation with clean dependency tracking.',
    q1: ['What is the difference between useMemo and useCallback in React?', 'useMemo invokes your function and caches its RETURNED VALUE across renders (until deps change), whereas useCallback caches the FUNCTION REFERENCE ITSELF without invoking it—useful when passing callbacks to React.memo children or useEffect dependencies.'],
  },
  {
    id: 222, mod: 26, tInMod: 6,
    title: 'Code splitting and lazy loading',
    sub: 'Shrinking Initial Bundle Size With `React.lazy(() => import("./AdminPage"))`',
    coreEn: 'By default, Vite bundles all 20 pages into one large JS file—==Code Splitting with `React.lazy(() => import("./pages/AdminPage"))`== splits heavy routes & modals into separate chunks downloaded ==ONLY when the user actually visits them==, making initial load 2–3x faster!',
    coreHi: '==Code Splitting (`React.lazy(() => import("./AdminPage"))`)== heavy pages/charts ko alag JS chunks mein tod deta hai jo ==sirf tab download hote hain jab user us page par jaye==—first load 2–3x fast ho jata hai!',
    analogyTitle: 'Downloading Only Chapter 1 Now & Fetching Chapter 8 Only If the Reader Opens It',
    analogyEn: 'A regular shopper visiting `/` should never have to download 400 KB of Admin Dashboard chart code—route-based `React.lazy` keeps `/` razor-fast!',
    analogyHi: 'Home page kholne wale visitor ko Admin Dashboard ke heavy charts download nahi karne padenge—`React.lazy` se site super fast khulti hai!',
    steps: [['Lazy Import Route', '`const AdminPage = lazy(() => import("./pages/AdminPage"));`'], ['Wrap In Suspense', '`<Suspense fallback={<PageLoader />}><Routes>...</Routes></Suspense>`'], ['Split Heavy Widgets', 'Lazy-load heavy PDF viewers, Code Editors & Chart modals'], ['Inspect Build', 'Run `npm run build` -> watch clean separate chunk files in `dist/`!']],
    jobUse: 'Key production optimization improving Lighthouse Performance and mobile 4G load times.',
    mistake: 'Forgetting to wrap `React.lazy` components in `<Suspense fallback={...}>` (immediately throws a React error!).',
    proHabit: 'Apply route-level `React.lazy()` on every multi-page MERN app with heavy dashboard/admin pages.',
    rule: 'React.lazy(() => import(...)) + <Suspense fallback={...}> = Fast Initial Page Load.',
    code: `const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

<Suspense fallback={<PageSkeleton />}>
  <Routes>
    <Route path="/admin" element={<AdminDashboard />} />
  </Routes>
</Suspense>`,
    out: 'Lean initial bundle with on-demand route chunk loading.',
    q1: ['How does route-based Code Splitting with React.lazy improve web performance?', 'Instead of forcing users to download the entire app JavaScript upfront before seeing the Home page, React.lazy splits routes into separate chunks that the browser fetches on demand only when the user navigates to that route.'],
  },
  {
    id: 223, mod: 26, tInMod: 7,
    title: 'Suspense overview',
    sub: 'Declarative Loading Boundaries (`<Suspense fallback={<Skeleton />}>`) for Lazy Chunks',
    coreEn: '==`<Suspense fallback={<LoadingUI />}>`== catches pending lazy-loaded components (or Suspense-enabled data loaders) anywhere inside its subtree and displays a ==clean fallback UI== until ready—keeping your route and layout components ultra-clean!',
    coreHi: '==`<Suspense fallback={<Skeleton />}>`== apne andar ke kisi bhi lazy component ke load hone tak automatically ==clean loading fallback== dikhata hai!',
    analogyTitle: 'Smart Curtain Showing a Clean "Loading Scene" Card Until Stage Props Arrive',
    analogyEn: 'Place `<Suspense>` INSIDE your persistent `<AppLayout>` (around `<Outlet />`) so your Navbar and Sidebar stay visible while only the center page shows a subtle skeleton!',
    analogyHi: '`<Suspense>` ko `<Navbar />` ke andar (`<Outlet />` par) lagao taaki page load hote waqt Navbar gayab na ho!',
    steps: [['Wrap Lazy Routes', 'Put `<Suspense fallback={<PageLoader />}>` around `<Outlet />`'], ['Granular Boundaries', 'Wrap heavy modals/charts in their own local `<Suspense>`'], ['Clean Fallback', 'Use a lightweight Skeleton matching page structure'], ['Pair ErrorBoundary', 'Wrap `<Suspense>` inside an `<ErrorBoundary>` for chunk failures!']],
    jobUse: 'Core modern React pattern powering smooth lazy loading and Next.js App Router streaming.',
    mistake: 'Wrapping the entire `<App />` in one top-level `<Suspense>` so clicking a lazy route flashes away the Navbar too!',
    proHabit: 'Place `<Suspense>` around `<Outlet />` inside your layout shell so navigation stays rock-steady.',
    rule: 'Place <Suspense> Around <Outlet /> + Pair With <ErrorBoundary>.',
    code: `<AppLayout>
  <Suspense fallback={<div className="p-8 text-center">Loading page...</div>}>
    <Outlet />
  </Suspense>
</AppLayout>`,
    out: 'Seamless lazy page transitions keeping persistent layout steady.',
    q1: ['Why is placing <Suspense> around <Outlet /> inside your layout better than wrapping the entire <App />?', 'Wrapping <Outlet /> keeps your persistent Navbar and Sidebar visible and interactive while only the newly visited lazy page displays a loading skeleton.'],
  },
  {
    id: 224, mod: 26, tInMod: 8,
    title: 'Error boundaries',
    sub: 'Preventing the Dreaded "White Screen of Death" With Graceful Fallback Recovery UI',
    coreEn: 'Without an ==Error Boundary==, one uncaught JS render error in a tiny widget crashes your ==ENTIRE React app into a blank white screen==! Wrapping routes/sections in an ==Error Boundary== catches render crashes, logs the error, and displays a ==clean "Something went wrong — Reload" card==!',
    coreHi: '==Error Boundary== ke bina ek chhote widget ka crash poore React app ko ==blank white screen== bana deta hai—Error Boundary crash ko pakad kar ek clean =="Something went wrong — Reload" fallback card== dikhata hai!',
    analogyTitle: 'Ship Watertight Compartments Stopping One Tiny Leak From Sinking the Whole Vessel',
    analogyEn: 'Remember: Error Boundaries catch **rendering/lifecycle errors** (implemented via class `getDerivedStateFromError` or `react-error-boundary` library), NOT async `fetch()` or `onClick` errors (use `try/catch` for those)!',
    analogyHi: 'Yaad rakho: Error Boundary render crashes pakadta hai; `onClick` aur async `fetch()` errors ke liye `try/catch` use hota hai!',
    steps: [['Catch Render Crashes', '`static getDerivedStateFromError()` flips `hasError: true`'], ['Log To Monitoring', '`componentDidCatch(err, info)` logs details cleanly'], ['Friendly Recovery', 'Show clear message + "Try Again / Reload" button'], ['Use At Key Levels', 'Wrap `<App />` root + risky third-party widgets/charts']],
    jobUse: 'Mandatory production reliability safeguard in every real React application.',
    mistake: 'Expecting an Error Boundary to catch an unhandled `fetch()` rejection inside `onClick` (it will NOT—always use `try/catch`!).',
    proHabit: 'Use the tiny `react-error-boundary` package (or a clean 25-line `<ErrorBoundary>` class) at your app root and heavy widgets!',
    rule: 'Error Boundary Catches Render Crashes | try/catch Catches Events & Async Errors.',
    code: `class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err, info) { console.error(err, info); }
  render() {
    if (this.state.hasError) return <button onClick={() => location.reload()}>Something went wrong — Reload</button>;
    return this.props.children;
  }
}`,
    out: 'Zero white-screen-of-death crashes in production.',
    q1: ['What types of errors do React Error Boundaries catch, and what errors do they NOT catch?', 'Error Boundaries catch JavaScript errors during rendering, inside lifecycle methods, and in constructors of child components. They do NOT catch errors inside event handlers (onClick), async code (setTimeout/fetch), or errors thrown inside the Error Boundary itself—use try/catch for those.'],
  },
  {
    id: 225, mod: 26, tInMod: 9,
    title: 'Project architecture',
    sub: 'Scalable Feature-Based Folder Structure, Clean Layers & Maintainable MERN Frontend Design',
    coreEn: 'As a React app grows past 15 screens, organize cleanly into ==`components/ui/` (dumb reusable primitives), `features/` or `pages/` (domain screens), `context/` (Auth/Theme), `hooks/` (reusable stateful logic), and `services/` (all Express API calls)==!',
    coreHi: '15+ screens wale bade React app ko clean layers mein rakho: ==`components/ui/` (reusable primitives), `pages/` ya `features/`, `context/`, `hooks/`, aur `services/` (saare API calls)==!',
    analogyTitle: 'Clean City Zoning: Residential, Commercial, Utilities & Transport Never Tangled Together',
    analogyEn: 'Enforce strict **one-way dependency flow**: `pages -> components + hooks + services` (a generic `ui/Button.jsx` should NEVER import from `pages/` or `services/`!).',
    analogyHi: 'Generic `ui/Button.jsx` ko kabhi `services/` ya `pages/` import nahi karna chahiye—clean one-way layers codebase ko forever maintainable rakhti hain!',
    steps: [['UI Primitives', '`components/ui/` — pure, domain-agnostic `<Button>`, `<Modal>`'], ['Service Layer', '`services/` — all `fetch` calls & JSON normalizers'], ['Hooks & Context', '`hooks/` (`useDebounce`) & `context/` (`AuthContext`)'], ['Pages / Features', '`pages/` composes UI + hooks + services cleanly']],
    jobUse: 'Demonstrates senior architectural maturity during portfolio & system-design interviews.',
    mistake: 'Mixing raw `fetch()` calls, auth tokens, giant inline styles, and complex reducers all inside one messy file.',
    proHabit: 'Keep `ui/` components 100% domain-agnostic so you can drop them into ANY future React project!',
    rule: 'Pages Compose -> Hooks & Services Handle Logic -> ui/ Primitives Stay Pure.',
    code: `src/
├── components/ui/    # Pure reusable Button, Modal, Input
├── context/          # AuthContext.jsx, ThemeContext.jsx
├── hooks/            # useDebounce.js, useFetch.js
├── services/         # api.js, authService.js, courseService.js
└── pages/            # HomePage.jsx, DashboardPage.jsx`,
    out: 'Clean, layered, enterprise-scalable React frontend architecture.',
    q1: ['Why should reusable UI primitives in src/components/ui/ (like Button or Card) never import from src/services/ or src/pages/?', 'Keeping UI primitives completely decoupled from business logic and API services makes them 100% reusable across any page or project, easy to test in isolation, and prevents circular dependency tangles.'],
  },
  {
    id: 226, mod: 26, tInMod: 10,
    title: 'Accessibility and performance',
    sub: 'Shipping 95+ Lighthouse React Apps: Focus Management, Semantic HTML, Lazy Routes & WebP',
    coreEn: 'Great production React apps nail BOTH ==Accessibility & Performance==: ==move focus cleanly on modal open/close==, use ==semantic tags + `aria-live` toasts==, ==code-split routes with `React.lazy`==, ==serve WebP images with `width`/`height`==, and ==audit with Lighthouse before every release==!',
    coreHi: 'Top React apps ==Accessibility aur Performance== dono mein 95+ score karte hain: ==clean modal focus, semantic tags, `React.lazy` code-splitting, WebP images aur pre-release Lighthouse audit==!',
    analogyTitle: 'Sports Car That Is Both Blazing Fast (Performance) AND Effortless for Anyone to Drive (Accessibility)',
    analogyEn: 'Always run Lighthouse on a **production build (`npm run build && npm run preview`)**, NEVER on `npm run dev` (dev mode includes unminified React debugging overhead!).',
    analogyHi: 'Lighthouse score hamesha **`npm run build && npm run preview`** par check karo—`npm run dev` par score artificially kam aata hai!',
    steps: [['Test Prod Build', 'Run Lighthouse against `npm run preview` (not dev server!)'], ['Optimize Images', 'WebP + `width`/`height` + `loading="lazy"` below fold'], ['Code Split Routes', '`React.lazy` keeps initial JS small & fast'], ['Focus & Landmarks', 'Test keyboard Tab, `Esc` modals & `aria-live` notifications']],
    jobUse: 'Directly boosts user retention, SEO rankings, and interview standing.',
    mistake: 'Running Lighthouse on `npm run dev` and panicking over a 55 Performance score when the real production build scores 98!',
    proHabit: 'Run a 2-minute **Production Build + Lighthouse Check** before deploying every portfolio project!',
    rule: 'Audit on Production Build -> WebP + Lazy Routes + Keyboard Focus = 95+ Lighthouse.',
    code: `# Always audit real production performance:
npm run build
npm run preview   # Open in Incognito -> DevTools -> Lighthouse -> Analyze!`,
    out: 'Verified 95+ Performance, Accessibility, and SEO production React app.',
    q1: ['Why should you always run Chrome Lighthouse performance audits against npm run preview (production build) instead of npm run dev?', 'In dev mode, Vite serves unbundled ES modules and React includes extra development-only debugging/StrictMode overhead. npm run preview serves the real minified, tree-shaken production bundle so Lighthouse measures true user performance.'],
  },

  // ═══ CHAPTER 27: Figma for Frontend Developers (227..235) ═══
  {
    id: 227, mod: 27, tInMod: 1,
    title: 'Figma workspace overview',
    sub: 'Navigating Layers, Canvas Zoom, Inspect / Dev Mode & Measuring Pixels Like a Pro Dev',
    coreEn: '==Figma== is the #1 UI/UX design tool in tech companies—frontend developers use ==Layers Panel (left)==, ==Canvas (`Space+Drag` pan, `Ctrl+Scroll` zoom)==, ==`Alt`-hover redline distances==, and ==Inspect / Dev Mode (right)== to extract exact colors, fonts, spacing, and assets!',
    coreHi: '==Figma== har tech company ka #1 design tool hai—developers ==Layers Panel==, ==`Alt`-hover spacing measurement== aur ==Inspect/Dev Mode== se exact colors, fonts aur SVG assets nikalte hain!',
    analogyTitle: 'Interactive Digital Blueprint Allowing Developers to Measure Every Millimeter in 1 Click',
    analogyEn: 'Hold **`Alt` (Option on Mac)** while hovering over any neighboring element in Figma—red measurement lines instantly show exact pixel gaps (`24px`, `16px`)!',
    analogyHi: 'Figma mein element select karke **`Alt`** dabakar doosre element par hover karo—exact pixel distance (`24px`) turant dikh jata hai!',
    steps: [['Pan & Zoom', 'Hold `Space` + Drag to pan | `Ctrl + Scroll` to zoom'], ['Deep Select', 'Hold `Ctrl` + Click to select a nested text/icon directly'], ['Measure Gaps', 'Select element -> hold `Alt` + hover neighbor for exact px'], ['Read Properties', 'Inspect panel shows exact Font, Weight, Hex & Radius']],
    jobUse: 'Daily collaboration workflow with product designers at every modern software company.',
    mistake: 'Eyeballing padding and colors from a PNG screenshot instead of inspecting exact values inside Figma!',
    proHabit: 'Hold `Ctrl` + Click to drill straight to deep nested layers and `Alt` + Hover to measure exact spacing!',
    rule: 'Ctrl+Click = Deep Select | Alt+Hover = Measure Exact Gaps | Inspect = Exact Tokens.',
    code: `// Essential Figma Developer Shortcuts:
// Space + Drag -> Pan canvas     | Ctrl + Scroll -> Zoom
// Ctrl + Click -> Deep select    | Alt + Hover   -> Measure exact px gap`,
    out: 'Fast, pixel-accurate Figma inspection without asking designers for every margin.',
    q1: ['How do you quickly measure the exact pixel gap between a heading and a button inside Figma?', 'Select the heading (Ctrl+Click if nested), then hold Alt (Option on Mac) and hover your mouse over the button—Figma immediately displays red measurement lines with the exact pixel distance.'],
  },
  {
    id: 228, mod: 27, tInMod: 2,
    title: 'Frames and layout grids',
    sub: 'Reading 12-Column Desktop Grids, Mobile Frames (`390px`) & Container Max-Widths',
    coreEn: 'In Figma, ==Frames (`F`)== act like HTML `<div>` containers & screen artboards (`1440px` Desktop, `768px` Tablet, `390px` Mobile)—toggle ==Layout Grids (`Shift+G`)== to see the exact ==12-column grid, container max-width (`1200px`), and gutter (`24px`)== to mirror in CSS/Tailwind!',
    coreHi: 'Figma ==Frames== HTML `<div>` aur screen viewports (`1440px` / `390px`) ki tarah hain—==`Shift+G`== dabakar ==12-column Layout Grid aur gutters== dekho aur exact wahi CSS Grid/Tailwind mein banao!',
    analogyTitle: 'Transparent Graph Paper Showing Exact Columns & Margins Under the Design',
    analogyEn: 'Press **`Shift + G`** in Figma to toggle the red column grid overlay on/off—instantly revealing whether a layout is `max-w-6xl` with `grid-cols-12 gap-6`!',
    analogyHi: '**`Shift + G`** dabate hi red column grid dikh jata hai—turant pata chalta hai kitne columns aur kitna `gap` lagana hai!',
    steps: [['Toggle Grid', 'Press `Shift + G` to inspect hidden 12-column layout grids'], ['Check Artboards', 'Compare `1440px` Desktop, `768px` Tablet & `390px` Mobile frames'], ['Read Max-Width', 'Measure content width (e.g., `1200px` -> `max-w-6xl`)'], ['Map To Tailwind', '12-col grid + 24px gutter -> `grid-cols-12 gap-6`']],
    jobUse: 'Translates Figma grids directly into clean Tailwind/Bootstrap/CSS Grid layouts.',
    mistake: 'Translating a `1440px` Figma frame into hardcoded `width: 1440px` instead of a fluid `max-w-7xl mx-auto px-6` container!',
    proHabit: 'Always map Figma grids to **fluid CSS containers (`max-w-* mx-auto`)**, never fixed pixel screen widths!',
    rule: 'Shift+G Reveals Layout Grid -> Map to Fluid max-w-* + CSS Grid/Tailwind.',
    code: `// Figma 12-col grid (1200px container, 24px gutter) -> Tailwind:
<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-12">
  <aside className="md:col-span-3">Sidebar</aside>
  <main className="md:col-span-9">Main Content</main>
</div>`,
    out: 'Exact responsive code translation of a Figma 12-column grid.',
    q1: ['Why should you NEVER translate a 1440px Figma desktop frame into a fixed width: 1440px in CSS?', 'Real user monitors vary widely (1280px laptops, 1366px screens, 1920px desktops, 390px phones). Always translate Figma frames into fluid containers (width: 100%; max-width: 1200px; margin-inline: auto) that adapt cleanly to every screen.'],
  },
  {
    id: 229, mod: 27, tInMod: 3,
    title: 'Auto Layout',
    sub: 'Figma Auto Layout = Direct 1-to-1 Blueprint for CSS Flexbox (`flex`, `gap`, `padding`, `items-center`)!',
    coreEn: '==Figma Auto Layout== is literally ==CSS Flexbox built into Figma==: Horizontal/Vertical direction = `flex-row`/`flex-col`, Gap = `gap-*`, Padding = `p-*`, Fill Container = `flex-1`/`w-full`, and Hug Contents = `w-fit`!',
    coreHi: '==Figma Auto Layout== seedha ==CSS Flexbox== ka 1-to-1 mirror hai: Direction (`flex-row`/`flex-col`), Gap (`gap-4`), Padding (`p-6`), Fill Container (`flex-1`) aur Hug Contents (`w-fit`)!',
    analogyTitle: 'Bilingual Dictionary Translating Figma Settings Directly Into Tailwind Classes',
    analogyEn: 'Look at the Auto Layout box in Figma Inspect panel: `Horizontal | Gap: 16 | Padding: 24 | Align Center` literally translates word-for-word to `flex items-center gap-4 p-6`!',
    analogyHi: 'Figma Inspect mein `Horizontal | Gap: 16 | Padding: 24 | Center` dikhe -> seedha `flex items-center gap-4 p-6` likh do!',
    steps: [['Direction', 'Horizontal -> `flex-row` | Vertical -> `flex-col`'], ['Gap & Padding', '`Gap: 16` -> `gap-4` | `Padding: 24` -> `p-6`'], ['Resizing Mode', '`Hug` -> `w-fit` | `Fill` -> `w-full` / `flex-1` | `Fixed` -> `w-64`'], ['Space Between', 'Auto Layout `Auto` gap -> `justify-between`']],
    jobUse: 'Cuts Figma-to-React layout translation time in half with near-pixel accuracy.',
    mistake: 'Ignoring Auto Layout settings and positioning every element with fragile `position: absolute` coordinates copied from Figma!',
    proHabit: 'NEVER copy raw `position: absolute; left: 412px; top: 189px;` CSS from Figma—always translate Auto Layout into clean **Flexbox/Grid**!',
    rule: 'Figma Auto Layout = CSS Flexbox | Never Copy Raw Absolute X/Y Coordinates!',
    code: `// Figma Auto Layout: Vertical, Gap 12px, Padding 24px, Fill Width
<div className="flex w-full flex-col gap-3 p-6">
  <h3 className="text-lg font-bold">Auto Layout Card</h3>
  <p className="text-sm text-slate-600">Clean Flexbox translation!</p>
</div>`,
    out: 'Clean, responsive Flexbox code matching Figma Auto Layout 1-to-1.',
    q1: ['Why should frontend developers NEVER copy raw position: absolute; top: Xpx; left: Ypx; values from Figma inspect panels?', 'Hardcoded absolute coordinates completely break responsiveness across screen sizes and fail whenever text length changes. Always translate Figma Auto Layout properties into flexible CSS Flexbox or Grid rules.'],
  },
  {
    id: 230, mod: 27, tInMod: 4,
    title: 'Components and variants',
    sub: 'Mapping Figma Component Variants (`Primary`, `Outline`, `Disabled`) Directly to React Component Props',
    coreEn: '==Figma Components & Variants== (`Button`: `variant=primary|outline`, `size=sm|md|lg`, `state=hover|disabled`) map ==1-to-1 onto your React Component Props==—letting designers and engineers speak the exact same component language!',
    coreHi: '==Figma Components & Variants== (`variant=primary|outline`, `size=sm|lg`, `state=hover|disabled`) seedha aapke ==React Component Props== ban jaate hain—designer aur developer ek hi language bolte hain!',
    analogyTitle: 'Shared Part Catalog Where Figma Variant Names Match React Prop Names Exactly',
    analogyEn: 'Before coding a screen, inspect the designer Figma **Components / Design System page** first—you will immediately see all reusable `<Button>`, `<Input>`, `<Card>`, and `<Badge>` variants to build once!',
    analogyHi: 'Screen code karne se pehle Figma ka **Components page** dekho—turant pata chal jayega kaunse reusable React components pehle banane hain!',
    steps: [['Inspect Variants', 'See all states (Default, Hover, Focus, Disabled, Error)'], ['Match Prop Names', 'Figma `variant="secondary"` -> React `<Button variant="secondary" />`'], ['Build Once', 'Code every Figma Master Component once in `components/ui/`'], ['Stay Synced', 'Shared naming speeds up future design tweaks 5x']],
    jobUse: 'Standard design-system collaboration workflow in modern product companies.',
    mistake: 'Coding 6 separate button components for 6 screens without noticing they are all variants of ONE Figma Button component!',
    proHabit: 'Match your React prop names (`variant`, `size`) directly to the Figma Component property names!',
    rule: 'Figma Master Component -> React ui/ Component | Figma Variants -> React Props.',
    code: `// 1-to-1 Mapping From Figma Button Variants:
// Figma: Button / Variant=Primary, Size=MD
<Button variant="primary" size="md">Get Started</Button>`,
    out: 'Design-system-aligned React component library.',
    q1: ['How do Figma Component Variants map to React development?', 'Each Figma Master Component maps to a reusable React component (e.g., <Button />), and its Figma Variant properties (variant, size, state) map directly to that React component props.'],
  },
  {
    id: 231, mod: 27, tInMod: 5,
    title: 'Styles and variables',
    sub: 'Extracting Figma Color, Typography & Spacing Variables Into CSS Custom Properties / Tailwind Theme',
    coreEn: 'Extract Figma ==Color Styles, Text Styles, and Variables (Design Tokens)== directly into your ==`:root` CSS variables or Tailwind `@theme` config== (`--color-brand`, `--radius-card`, font families) BEFORE coding individual pages!',
    coreHi: 'Individual pages code karne se pehle Figma ke ==Color/Text Styles aur Variables== ko apne ==`:root` CSS variables ya Tailwind `@theme`== mein daal lo—poori site automatically brand-accurate banegi!',
    analogyTitle: 'Loading Exact Paint Codes Into the Mixing Machine Before Painting a Single Wall',
    analogyEn: 'Setting up brand colors and Google Fonts in Step 1 takes 5 minutes and guarantees 100% visual consistency across all 12 screens!',
    analogyHi: 'Shuru mein 5 minute lagakar Figma ke colors aur fonts Tailwind/CSS mein setup kar lene se poori site 100% consistent dikhti hai!',
    steps: [['Extract Colors', 'Primary, Accent, Surface, Border, Text & Semantic (Success/Error)'], ['Extract Typography', 'Font family (Google Fonts), sizes, weights & line-heights'], ['Extract Radii/Shadows', 'Card radius (`16px`), button radius (`12px`), soft shadows'], ['Wire Into Theme', 'Define once in `index.css` `@theme` or `:root` variables']],
    jobUse: 'Eliminates back-and-forth "That shade of purple looks slightly off!" designer QA tickets.',
    mistake: 'Picking "close enough" colors by eye instead of copying exact Figma Hex/Variable tokens.',
    proHabit: 'Always verify Google Font weights (`400, 500, 600, 700`) used in Figma and load ONLY those weights so fonts stay fast!',
    rule: 'Extract Figma Variables Into Theme Tokens FIRST -> Then Build Pages.',
    code: `/* index.css — Figma Design Tokens Mapped to Tailwind v4 @theme */
@import "tailwindcss";
@theme {
  --color-brand: #6d28d9;
  --color-surface: #f8fafc;
  --font-sans: 'Inter', system-ui, sans-serif;
}`,
    out: 'Exact brand fidelity across every component and screen.',
    q1: ['Why should you load only the specific font weights (e.g., 400, 600, 700) used in Figma rather than all 9 weights from Google Fonts?', 'Each extra font weight adds additional network font files that delay text rendering and hurt Largest Contentful Paint (LCP). Loading only the exact weights used in the design keeps typography sharp and fast.'],
  },
  {
    id: 232, mod: 27, tInMod: 6,
    title: 'Prototyping interactions',
    sub: 'Playing Figma Clickable Prototypes to Understand Flows, Transitions, Modals & Edge States',
    coreEn: 'Click the ==Play (`▶`) Present button== in Figma to walk through ==interactive prototype flows==—seeing exact ==page transitions, modal triggers, hover animations, dropdown behavior, and empty/error flows== before writing a single line of React Router or state code!',
    coreHi: 'Figma mein ==Play (`▶`) button== dabakar interactive prototype click-through karo—isase ==page flows, modals, hover states aur transitions== coding se pehle 100% clear ho jaate hain!',
    analogyTitle: 'Watching the Full Animated Storyboard Before Shooting the Movie',
    analogyEn: 'Clicking through the prototype often reveals hidden routes (like a Confirmation Modal or Password Reset step) that static screens alone make easy to miss!',
    analogyHi: 'Prototype click-through karne se hidden modals aur confirmation steps pehle hi dikh jaate hain—baad mein rework zero hota hai!',
    steps: [['Play Prototype', 'Click `▶` top-right -> click through every button & flow'], ['Map Routes', 'List every unique screen -> exact React Router `<Route>`'], ['Note Micro-Motion', 'Observe hover states, drawer slides & toast timings'], ['Clarify Gaps Early', 'Ask designer about Loading, Empty & Error states if missing']],
    jobUse: 'Prevents late-sprint surprises and builds tight designer-developer trust.',
    mistake: 'Coding only the static default screen and missing the interactive drawer, filter modal, or confirmation dialog shown in the prototype!',
    proHabit: 'Click through the ENTIRE Figma prototype end-to-end and write down your React Router route list before starting!',
    rule: 'Play Prototype First -> Map Every Route & Modal -> Ask About Missing Edge States.',
    code: `// Prototype Walkthrough -> React Route & Modal Map:
// Routes:  /, /courses, /courses/:id, /checkout, /dashboard
// Modals:  LoginModal, ConfirmDeleteModal
// Drawers: MobileNavDrawer, CartDrawer`,
    out: 'Zero missed interactions and smooth sprint execution.',
    q1: ['What valuable information can a developer discover by playing a Figma Prototype instead of only looking at static frames?', 'Exact navigation flows between screens, which buttons trigger modals/drawers vs route changes, hover/active micro-interactions, and any missing loading/empty/error states that need clarification early.'],
  },
  {
    id: 233, mod: 27, tInMod: 7,
    title: 'Inspecting spacing and typography',
    sub: 'Reading Exact `font-size`, `font-weight`, `line-height`, `letter-spacing` & 4px/8px Spacing Rhythm',
    coreEn: 'Inspect Figma text & spacing layers cleanly: check ==Font Family, Size (convert `px / 16` -> `rem`), Weight (`500/600/700`), Line-Height (convert to unitless ratio!), Letter-Spacing==, and snap spacing cleanly onto your ==4px/8px Tailwind scale==!',
    coreHi: 'Figma se typography inspect karte waqt ==Font, Size (`px -> rem`), Weight, unitless Line-Height aur 4px/8px Tailwind spacing== cleanly map karo—exact design fidelity aati hai!',
    analogyTitle: 'Converting Architect Millimeters Cleanly Onto Your Standard Carpenter Tape',
    analogyEn: 'If Figma shows `font-size: 32px; line-height: 40px;` -> `40 / 32 = 1.25` -> in Tailwind that is crisp `text-[2rem] leading-tight` (or `text-3xl leading-tight`)!',
    analogyHi: 'Figma mein `32px` font aur `40px` line-height dikhe -> `40/32 = 1.25` -> Tailwind mein `text-3xl leading-tight`!',
    steps: [['Convert px -> rem', '`16px = 1rem`, `24px = 1.5rem`, `32px = 2rem`'], ['Unitless Leading', 'Divide `line-height / font-size` (e.g., `24 / 16 = 1.5`)'], ['Snap To 4px Scale', '`16px -> p-4`, `24px -> p-6`, `32px -> p-8`'], ['Check Mobile Type', 'Scale large 56px desktop H1s down cleanly on 390px phones!']],
    jobUse: 'Produces crisp, designer-approved UI on the very first PR review.',
    mistake: 'Copy-pasting hardcoded Figma `width: 387px; height: 64px;` on text boxes so text clips or wraps weirdly!',
    proHabit: 'NEVER copy fixed `height` onto text elements from Figma—let text height flow naturally from `font-size`, `line-height`, and `padding`!',
    rule: 'Convert px -> rem + Unitless Line-Height + Never Copy Fixed Text Heights.',
    code: `/* Figma: Inter SemiBold 24px / 32px line-height, -0.02em tracking */
.section-title {
  font-size: 1.5rem;        /* 24px */
  font-weight: 600;
  line-height: 1.33;        /* 32 / 24 */
  letter-spacing: -0.02em;
}`,
    out: 'Sharp, designer-accurate typography that scales cleanly.',
    q1: ['Why should you never copy a fixed pixel height (e.g., height: 48px) onto a heading or paragraph from Figma Inspect?', 'Because real text wraps onto more lines on narrower screens or when translated/zoomed—a fixed height causes text to clip or overflow awkwardly into neighboring elements.'],
  },
  {
    id: 234, mod: 27, tInMod: 8,
    title: 'Exporting assets',
    sub: 'Exporting Clean `.svg` Logos/Icons vs Optimized `.webp`/`.png` Photos at `2x` Retina',
    coreEn: 'Export every Figma asset in its ==exact optimal format==: ==Logos & Icons -> `.svg`== (infinitely sharp, tiny KB, CSS-recolorable!), ==Photos & Complex Illustrations -> `.png` / `.jpg` at `2x` converted to `.webp`== (crisp on Retina screens at 50% smaller file size)!',
    coreHi: 'Figma se har asset sahi format mein export karo: ==Logos & Icons -> `.svg`== (hamesha sharp, tiny size!), aur ==Photos -> `2x` export karke `.webp`== mein optimize karo!',
    analogyTitle: 'Exporting Vector Blueprints for Sharp Logos (`.svg`) & Compressed HD Prints for Photos (`.webp`)',
    analogyEn: 'Always export the **entire Icon Frame (`24x24px`)** as SVG—not just the inner vector path—so all icons keep consistent alignment and bounding boxes!',
    analogyHi: 'Icon export karte waqt andar ka path nahi, poora **`24x24` Icon Frame** `.svg` export karo taaki saare icons perfectly aligned rahein!',
    steps: [['Icons/Logos -> SVG', 'Export parent 24x24 frame as `.svg` (tiny + sharp!)'], ['Photos -> 2x -> WebP', 'Export `2x` for Retina sharpness -> compress to `.webp`'], ['Clean Filenames', 'Rename `Frame 42 (1).svg` -> `brand-logo.svg`'], ['Check File Weight', 'Keep hero photos <150 KB, card images <50 KB, icons <3 KB']],
    jobUse: 'Keeps websites sharp on Apple Retina displays while scoring 95+ on mobile Lighthouse!',
    mistake: 'Exporting a logo as a blurry `1x` JPG or exporting a 3 MB raw `4x` PNG photo directly into `public/`!',
    proHabit: 'Replace standard UI icons (`search`, `menu`, `check`, `arrow`) with `lucide-react` instead of exporting 30 separate SVGs!',
    rule: 'Logos/Custom Icons = SVG | Photos = Optimized 2x WebP | Standard Icons = lucide-react.',
    code: `// Asset Export Cheat Sheet:
// - Brand Logo / Custom Illustration -> .svg
// - Hero / Product Photos            -> 2x export -> .webp (<150 KB)
// - Common UI Icons (search, close)  -> lucide-react (zero manual export!)`,
    out: 'Razor-sharp Retina visuals with blazing-fast page loads.',
    q1: ['Why should logos and simple icons be exported from Figma as SVG instead of PNG or JPG?', 'SVGs are resolution-independent vectors—they stay 100% razor-sharp at any screen zoom or Retina density, have tiny file sizes (often 1–2 KB), and can even be recolored cleanly with CSS currentColor.'],
  },
  {
    id: 235, mod: 27, tInMod: 9,
    title: 'Translating designs into React',
    sub: 'Complete 5-Step Figma-to-React Workflow: Tokens -> Primitives -> Layout -> Data -> Polish',
    coreEn: 'Translate any Figma screen into clean production React in ==5 repeatable steps==: ==1) Setup Theme Tokens (colors/fonts), 2) Build Reusable UI Primitives (`<Button>`, `<Card>`), 3) Build Responsive Grid/Flexbox Skeleton, 4) Wire Dynamic Props/State/API, 5) QA at 360px–1440px + Accessibility==!',
    coreHi: 'Kisi bhi Figma screen ko ==5 clean steps== mein React mein banao: ==1) Theme Tokens setup, 2) Reusable UI primitives, 3) Responsive Grid/Flex skeleton, 4) Props/State/API wire karo, 5) 360px–1440px & Accessibility QA==!',
    analogyTitle: 'Systematic Construction: Paint Codes -> Bricks -> Walls -> Wiring -> Final Inspection',
    analogyEn: 'Following this 5-step order guarantees clean, modular React components instead of one tangled 600-line hardcoded page!',
    analogyHi: 'Ye 5-step sequence follow karne se aapka React code clean, modular aur senior-level banta hai!',
    steps: [['1. Theme Tokens', 'Configure Figma colors, fonts & radii in Tailwind/CSS'], ['2. UI Primitives', 'Code `<Button>`, `<Badge>`, `<Card>` once from Variants'], ['3. Layout Skeleton', 'Map Auto Layout -> Flex/Grid + mobile-first breakpoints'], ['4. Wire & QA', 'Replace static Figma text with real props/API -> test 360px & Tab']],
    jobUse: 'The exact day-to-day workflow of every Frontend & Full-Stack React Engineer.',
    mistake: 'Hardcoding Figma placeholder text (`Lorem ipsum`) across 6 copy-pasted cards instead of mapping a clean data array!',
    proHabit: 'Compare your live browser screen side-by-side against Figma at BOTH Desktop (`1440px`) AND Mobile (`390px`) before opening a PR!',
    rule: 'Tokens -> UI Primitives -> Responsive Layout -> Dynamic Data -> Side-by-Side QA.',
    code: `// Clean Data-Driven React Implementation of Figma 3-Card Section
export function FeaturesSection({ features }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f) => <FeatureCard key={f.id} {...f} />)}
      </div>
    </section>
  );
}`,
    out: 'Pixel-accurate, responsive, clean React code matching Figma.',
    q1: ['Walk through the 5-step workflow for translating a Figma design into a production React page.', '1) Extract colors, fonts, and spacing tokens into CSS/Tailwind config, 2) Build reusable UI primitives from Figma Variants, 3) Translate Auto Layout and 12-col grids into mobile-first Flexbox/Grid, 4) Replace static text with dynamic props, state, and API data (including loading/empty/error states), and 5) QA side-by-side across 360px–1440px + keyboard accessibility.'],
  },
];

export const MERN_TAB6_BLUEPRINTS: Record<number, DsTopicBlueprint> =
  expandMernSpecs(TAB6_SPECS);
