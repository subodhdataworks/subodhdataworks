export interface CurriculumChapter {
  num: string;
  title: string;
  topics: string[];
}

export const REACT_FRONTEND_AI_CURRICULUM: CurriculumChapter[] = [
  {
    num: '01',
    title: 'How Websites and Web Applications Work',
    topics: [
      'What is a website?',
      'What is a web application?',
      'Static website vs dynamic website',
      'Frontend vs backend',
      'Client-server architecture',
      'Browser',
      'Server',
      'Hosting',
      'Domain',
      'Request-response cycle',
      'Role of a front-end developer',
      'Front-end developer career path'
    ]
  },
  {
    num: '02',
    title: 'Computer, Internet, Browser, and Web Basics',
    topics: [
      'Computer basics for developers',
      'Internet basics',
      'Browser fundamentals',
      'URL structure',
      'Domain and DNS basics',
      'HTTP and HTTPS',
      'Web hosting concept',
      'Local files vs live websites',
      'Developer environment overview'
    ]
  },
  {
    num: '03',
    title: 'Developer Setup, VS Code, Browser DevTools, and Workflow',
    topics: [
      'Installing VS Code',
      'Important VS Code extensions',
      'Folder and file organization',
      'Browser DevTools overview',
      'Console tab',
      'Elements tab',
      'Network tab overview',
      'Live Server extension',
      'Basic developer workflow'
    ]
  },
  {
    num: '04',
    title: 'Introduction to AI in Front-End Development',
    topics: [
      'What AI can do for developers',
      'AI coding assistants',
      'AI design tools',
      'AI debugging support',
      'AI website builders overview',
      'Correct and wrong use of AI',
      'Why students must understand code before trusting AI',
      'AI safety: do not paste passwords',
      'API keys and private code safety',
      'Future of AI-assisted development'
    ]
  },
  {
    num: '05',
    title: 'HTML5 Fundamentals',
    topics: [
      'What is HTML?',
      'HTML document structure',
      'html, head, body tags',
      'Headings and paragraphs',
      'Text formatting',
      'Links & Images',
      'Lists & Tables',
      'Comments in HTML'
    ]
  },
  {
    num: '06',
    title: 'HTML Forms, Inputs, and User Data Collection',
    topics: [
      'Why forms are important',
      'form tag',
      'Input types & Labels',
      'textarea & select dropdown',
      'Radio buttons & Checkboxes',
      'Buttons & Form submission',
      'Basic form validation',
      'Form usability basics'
    ]
  },
  {
    num: '07',
    title: 'Semantic HTML, Multimedia, SEO, and Accessibility Basics',
    topics: [
      'Semantic tags: header, nav, main, section, article, footer',
      'Audio and video tags',
      'iframe overview',
      'Meta tags & SEO basics',
      'alt text & Accessibility basics',
      'Developer handoff basics',
      'HTML best practices'
    ]
  },
  {
    num: '08',
    title: 'CSS3 Fundamentals and Styling Basics',
    topics: [
      'What is CSS?',
      'Inline, internal, and external CSS',
      'Selectors & Specificity',
      'Colors & Backgrounds',
      'Typography & Web fonts',
      'CSS units: px, %, rem, em, vh, vw',
      'Margin and padding',
      'Border & Box model'
    ]
  },
  {
    num: '09',
    title: 'CSS Layout with Flexbox, Grid, and Positioning',
    topics: [
      'Normal document flow & Display types',
      'Flexbox fundamentals (justify-content, align-items, flex-wrap)',
      'CSS Grid fundamentals (columns, rows, gap, alignment)',
      'Position: static, relative, absolute, fixed, sticky',
      'Z-index and stacking context',
      'Overflow and clipping',
      'Layout patterns for cards, navbars, and dashboards'
    ]
  },
  {
    num: '10',
    title: 'Responsive Web Design and Mobile-First Thinking',
    topics: [
      'What responsive design means',
      'Mobile-first workflow',
      'Viewport meta tag & Media queries',
      'Breakpoints and fluid layouts',
      'Responsive typography, images, and media',
      'Flexible grids and containers',
      'Touch targets and mobile navigation',
      'Testing across screen sizes & Accessibility'
    ]
  },
  {
    num: '11',
    title: 'Advanced CSS, Animations, and Modern UI Effects',
    topics: [
      'Pseudo-classes and pseudo-elements',
      'CSS variables and design tokens',
      'Specificity and cascade',
      'Transitions and transforms',
      'Keyframe animations',
      'Hover and focus effects',
      'Shadows, gradients, and glassmorphism',
      'Filters, blend modes & Reduced-motion preferences',
      'Organizing reusable styles'
    ]
  },
  {
    num: '12',
    title: 'Bootstrap Framework for Fast UI Development',
    topics: [
      'What Bootstrap is and when to use it',
      'Installing and importing Bootstrap',
      'Containers, breakpoints & Grid system',
      'Utility classes, typography & colors',
      'Buttons, cards, alerts, and badges',
      'Forms and validation styles',
      'Navbar and responsive components',
      'Customizing Bootstrap themes safely'
    ]
  },
  {
    num: '13',
    title: 'Tailwind CSS for Modern React UI',
    topics: [
      'What utility-first CSS means',
      'Installing Tailwind CSS in a React project',
      'Utility classes & Responsive prefixes',
      'Hover, focus, and state variants',
      'Flexbox and Grid utilities',
      'Spacing, sizing, colors, and typography',
      'Reusable component patterns',
      'Theme customization & Dark mode overview'
    ]
  },
  {
    num: '14',
    title: 'JavaScript Fundamentals',
    topics: [
      'What JavaScript does in the browser',
      'Variables: let, const, var',
      'Data types and type conversion',
      'Operators and expressions',
      'Strings and template literals',
      'Conditionals (if/else, switch)',
      'Loops (for, while, for...of)',
      'Functions and parameters',
      'Scope basics & Error handling (try/catch)',
      'Debugging with console'
    ]
  },
  {
    num: '15',
    title: 'JavaScript Arrays, Objects, and Real Data Handling',
    topics: [
      'Arrays and indexing',
      'Array methods: map, filter, find, reduce',
      'Objects and properties',
      'Destructuring & Spread/rest syntax',
      'Optional chaining and nullish coalescing',
      'JSON basics & Working with nested data',
      'Sorting and filtering records',
      'Immutability basics'
    ]
  },
  {
    num: '16',
    title: 'DOM Manipulation, Events, and Forms',
    topics: [
      'DOM tree overview & Selecting elements',
      'Changing text, attributes, and classes',
      'Creating and removing elements',
      'Event listeners & Event propagation',
      'Form submission and validation',
      'Keyboard and pointer events',
      'Preventing default behavior (e.preventDefault)',
      'Safe DOM updates and common mistakes'
    ]
  },
  {
    num: '17',
    title: 'Modern JavaScript ES6+ for React',
    topics: [
      'Arrow functions',
      'Modules: import and export',
      'Template literals',
      'Destructuring in React code',
      'Spread syntax for state updates',
      'Array methods in JSX',
      'Default parameters & Promises review',
      'Clean code conventions'
    ]
  },
  {
    num: '18',
    title: 'Asynchronous JavaScript, APIs, and Fetch',
    topics: [
      'Synchronous vs asynchronous execution',
      'Callbacks, promises & async/await',
      'try/catch for async errors',
      'HTTP methods and status codes',
      'fetch() basics & Parsing JSON responses',
      'Loading, success, empty, and error states',
      'AbortController overview',
      'CORS basics & Environment variables'
    ]
  },
  {
    num: '19',
    title: 'Introduction to React and Vite Setup',
    topics: [
      'What React is and why it is used',
      'SPA concept & Virtual DOM',
      'Node.js and npm overview',
      'Creating a React app with Vite',
      'Project structure & Development server',
      'JSX introduction & Assets handling',
      'React Developer Tools overview',
      'First component creation'
    ]
  },
  {
    num: '20',
    title: 'React Components, JSX, and Props',
    topics: [
      'Component fundamentals & Function components',
      'JSX rules & Embedding expressions',
      'Props and one-way data flow',
      'Default values and prop validation',
      'Component composition & Children prop',
      'Reusable UI components',
      'Separating components into files'
    ]
  },
  {
    num: '21',
    title: 'React State, Events, and Conditional Rendering',
    topics: [
      'What state means',
      'useState fundamentals',
      'Updating state correctly & Batching',
      'Event handling in React',
      'Controlled inputs overview',
      'Conditional rendering (ternary & logical &&)',
      'Derived values & Lifting state up',
      'Avoiding direct state mutation'
    ]
  },
  {
    num: '22',
    title: 'Lists, Keys, Forms, and Controlled Components',
    topics: [
      'Rendering lists with map()',
      'Why keys matter & Stable keys vs indices',
      'Controlled vs uncontrolled inputs',
      'Handling form state (select, checkbox, radio)',
      'Validation and helpful error messages',
      'Submitting and resetting forms',
      'Accessible form labels'
    ]
  },
  {
    num: '23',
    title: 'React Hooks: useEffect, useRef, and useContext',
    topics: [
      'Rules of Hooks',
      'useEffect and synchronization lifecycle',
      'Dependency arrays & Cleanup functions',
      'Fetching data with useEffect',
      'useRef for DOM access and mutable values',
      'useContext fundamentals',
      'Creating and providing context',
      'Avoiding unnecessary effects & Common mistakes'
    ]
  },
  {
    num: '24',
    title: 'Custom Hooks and Reusable Logic',
    topics: [
      'What custom Hooks solve',
      'Custom Hook naming and rules',
      'Extracting reusable stateful logic',
      'Sharing logic between components',
      'Parameters and return values',
      'Handling loading and errors in Hooks',
      'Testing and documenting Hooks'
    ]
  },
  {
    num: '25',
    title: 'React Router and Multi-Page App Flow',
    topics: [
      'Client-side routing overview',
      'Installing React Router (v6+)',
      'Routes, Route, Link, and NavLink',
      'Route parameters (useParams, useSearchParams)',
      'Nested routes and shared layouts (Outlet)',
      '404 and fallback routes',
      'Programmatic navigation (useNavigate)',
      'Protected-route concepts'
    ]
  },
  {
    num: '26',
    title: 'API Integration in React',
    topics: [
      'Planning API data flow',
      'GET, POST, PUT, PATCH, and DELETE in React',
      'Handling loading, error, and empty states',
      'Submitting data to APIs with headers',
      'Pagination and filtering',
      'Handling timeouts and network failures',
      'Data transformation & API response validation'
    ]
  },
  {
    num: '27',
    title: 'Authentication Flow in Front-End Applications',
    topics: [
      'Authentication vs authorization',
      'Sign-up and sign-in UI architecture',
      'Session, JWT, and token concepts',
      'OAuth and Google sign-in overview',
      'Protected pages and redirect guards',
      'Logout flow & Secure cookie concepts',
      'Avoiding token exposure (XSS & CSRF)',
      'Handling expired sessions'
    ]
  },
  {
    num: '28',
    title: 'React State Management Overview',
    topics: [
      'Local vs shared state',
      'Lifting state up & Prop drilling',
      'Context API use cases & limitations',
      'Reducer pattern and useReducer hook',
      'State management libraries (Zustand, Redux Toolkit)',
      'Choosing a simple solution first',
      'State normalization concepts',
      'Persisting preferences safely (localStorage)'
    ]
  },
  {
    num: '29',
    title: 'React Query / TanStack Query and Server State',
    topics: [
      'Client state vs server state',
      'Why a query library helps',
      'useQuery, queries and query keys',
      'Fetching, caching, and background refetching',
      'Loading, error, and stale data states',
      'useMutation and query invalidation',
      'Pagination and infinite queries overview',
      'Optimistic updates overview'
    ]
  },
  {
    num: '30',
    title: 'Advanced React Performance and Architecture',
    topics: [
      'How React rendering works (Reconciliation)',
      'Identifying performance bottlenecks',
      'React.memo, useMemo, and useCallback trade-offs',
      'Code splitting and lazy loading (React.lazy & Suspense)',
      'Component boundaries and feature folder architecture',
      'Error boundaries',
      'Profiling with React DevTools'
    ]
  },
  {
    num: '31',
    title: 'UI/UX Design Basics for Front-End Developers',
    topics: [
      'UI vs UX fundamentals',
      'User goals and intuitive task flows',
      'Visual hierarchy, spacing, and alignment',
      'Color palettes and typography systems',
      'Consistency and design systems',
      'Wireframes, mockups, and prototypes',
      'Feedback, empty, loading, and error states',
      'Accessibility (WCAG) & usability testing'
    ]
  },
  {
    num: '32',
    title: 'Figma for Front-End Developers',
    topics: [
      'Figma workspace and navigation overview',
      'Frames and layout grids',
      'Auto Layout fundamentals (Flexbox alignment in Figma)',
      'Components, variants, and component properties',
      'Styles, variables, and design tokens',
      'Prototyping interactions and flows',
      'Inspecting spacing, typography, CSS values, and assets',
      'Exporting SVG icons and optimized images',
      'Translating Figma designs into responsive React code'
    ]
  },
  {
    num: '33',
    title: 'TypeScript Basics for React Developers',
    topics: [
      'What TypeScript adds to JavaScript',
      'Basic types (string, number, boolean, any, unknown)',
      'Type inference, arrays, and object types',
      'Interfaces and type aliases',
      'Union types and type narrowing',
      'Typing component props & React.FC',
      'Typing events and form values (React.ChangeEvent, React.FormEvent)',
      'Optional properties & Generics overview',
      'TypeScript configuration with Vite'
    ]
  },
  {
    num: '34',
    title: 'AI Coding Assistants and Prompting for Developers',
    topics: [
      'AI coding assistant overview (Claude, ChatGPT, Copilot)',
      'Writing clear, contextual coding prompts',
      'Generating React components from PRD specifications',
      'Explaining complex or unfamiliar codebases',
      'AI debugging and stack trace analysis',
      'Refactoring and code review assistance',
      'Creating test cases with AI',
      'Security checks: checking generated code for vulnerabilities',
      'Protecting private data, secrets, and API keys'
    ]
  },
  {
    num: '35',
    title: 'Git, GitHub, and Collaboration Workflow',
    topics: [
      'Version control concepts',
      'Installing and configuring Git (name, email, SSH)',
      'Repositories, staging, and commits (git status, add, commit, log)',
      'Branches and merging (git branch, checkout, switch, merge)',
      'Resolving merge conflicts safely',
      'GitHub repositories, remotes, push, pull, and clone',
      'Pull requests and peer code review workflow',
      '.gitignore hygiene and keeping secrets off GitHub'
    ]
  },
  {
    num: '36',
    title: 'Front-End Deployment, Hosting, and Optimization',
    topics: [
      'Production build with Vite (npm run build)',
      'Environment configuration (.env, VITE_ variables)',
      'Deploying a static React app (Vercel, Cloudflare Pages, Netlify)',
      'Custom domains and DNS setup',
      'SPA routing fallback configuration (_redirects, rewrite rules)',
      'HTTPS, security headers, and asset optimization',
      'Performance and Core Web Vitals (LCP, FID, CLS)',
      'SEO metadata and OpenGraph tags for React apps',
      'Testing production builds and error monitoring'
    ]
  }
];
