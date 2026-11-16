export interface CareerCourseItem {
  id: string;
  badgeNum: number;
  title: string;
  subtitle?: string;
  shortDesc: string;
  image: string;
  holoImage?: string;
  video?: string;
  theme: 'emerald' | 'purple' | 'blue' | 'orange' | 'dark' | 'teal' | 'pink' | 'cyan';
  stripColor?:
    | 'sapphire-blue'
    | 'emerald-green'
    | 'vibrant-orange'
    | 'royal-purple'
    | 'crimson-rose'
    | 'indigo-cobalt'
    | 'dark-teal'
    | 'ocean-cyan'
    | 'forest-lime'
    | 'plum-magenta'
    | 'amber-gold'
    | 'cinematic-red'
    | 'olive-green'
    | 'deep-olive'
    | 'premium-violet';
  topBadge?: {
    icon: string;
    text: string;
  };
  tools: Array<{ name: string }>;
  jobRoles: string;
  salary: string;
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  isLiveCourse?: boolean;
  liveBadgeText?: string;
  courseTypeLabel?: string;
  ctaLabel?: string;
}

export const COURSE_AUTHORITATIVE_IMAGES: Record<string, string> = {
  'data-analyst-genai': '/images/courses/final_data_analyst_genai.webp',
  'data-science-agentic-ai': '/images/courses/final_data_science_agentic_ai.webp',
  'ml-engineering': '/images/courses/final_ml_engineering.webp',
  'ai-engineering': '/images/courses/final_ai_engineering.webp',
  'ai-tools-prompt': '/images/courses/final_ai_tools_prompt.webp',
  'ms-office-copilot': '/images/courses/final_ms_office_copilot.webp',
  'full-stack-web-dev': '/images/courses/final_full_stack_web_dev.webp',
  'ai-website-dev': '/images/courses/final_ai_website_dev.webp',
  'ai-android-dev': '/images/courses/final_ai_android_dev.webp',
  'ai-video-creation': '/images/courses/final_ai_video_creation.webp',
};

export const CAREER_COURSES_12: CareerCourseItem[] = [
  {
    id: 'data-analyst-genai',
    badgeNum: 1,
    title: 'Data Analyst with GenAI',
    shortDesc: 'Master Python, SQL, Power BI, Excel & GenAI to build automated business dashboards.',
    image: COURSE_AUTHORITATIVE_IMAGES['data-analyst-genai'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['data-analyst-genai'],
    video: '/videos/data_analyst_genai_v3.mp4',
    theme: 'blue',
    stripColor: 'sapphire-blue',
    tools: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'Power BI' },
      { name: 'Excel' },
      { name: 'ChatGPT' },
    ],
    jobRoles: 'Data Analyst | BI Consultant | ...',
    salary: '₹6 - 15 LPA',
    price: '₹1,199',
    originalPrice: '₹11,999',
    discountBadge: '90% OFF',
  },
  {
    id: 'data-science-agentic-ai',
    badgeNum: 2,
    title: 'Data Science & Agentic AI',
    shortDesc: 'Build Machine Learning models, RAG pipelines, and autonomous AI Agent systems.',
    image: COURSE_AUTHORITATIVE_IMAGES['data-science-agentic-ai'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['data-science-agentic-ai'],
    video: '/videos/data_science_agentic_ai_course.mp4',
    theme: 'purple',
    stripColor: 'royal-purple',
    tools: [
      { name: 'Python' },
      { name: 'PyTorch' },
      { name: 'LangChain' },
      { name: 'Vector DB' },
      { name: 'RAG' },
    ],
    jobRoles: 'Data Scientist | AI Agent ...',
    salary: '₹10 - 25 LPA',
    price: '₹1,299',
    originalPrice: '₹12,999',
    discountBadge: '90% OFF',
  },
  {
    id: 'ml-engineering',
    badgeNum: 3,
    title: 'Machine Learning Engineering',
    shortDesc: 'Build, train, and deploy production-scale ML pipelines with MLOps and Docker.',
    image: COURSE_AUTHORITATIVE_IMAGES['ml-engineering'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['ml-engineering'],
    video: '/videos/ml_engineering_course.mp4',
    theme: 'orange',
    stripColor: 'vibrant-orange',
    tools: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Cloud' },
    ],
    jobRoles: 'ML Engineer | MLOps Specialist ...',
    salary: '₹12 - 28 LPA',
    price: '₹1,399',
    originalPrice: '₹13,999',
    discountBadge: '90% OFF',
  },
  {
    id: 'ai-engineering',
    badgeNum: 4,
    title: 'AI Engineering',
    shortDesc: 'Build and deploy end-to-end enterprise AI products, LLMs, and multi-agent solutions.',
    image: COURSE_AUTHORITATIVE_IMAGES['ai-engineering'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['ai-engineering'],
    video: '/videos/ai_engineering_course_v2.mp4',
    theme: 'emerald',
    stripColor: 'emerald-green',
    tools: [
      { name: 'OpenAI' },
      { name: 'LangChain' },
      { name: 'Hugging Face' },
      { name: 'Vector DB' },
      { name: 'RAG' },
    ],
    jobRoles: 'AI Engineer | Full Stack AI ...',
    salary: '₹14 - 32 LPA',
    price: '₹1,499',
    originalPrice: '₹14,999',
    discountBadge: '90% OFF',
  },
  {
    id: 'ai-tools-prompt',
    badgeNum: 5,
    title: 'AI Tools & Prompt Engineering',
    shortDesc: '10x your productivity with ChatGPT-4o, Claude 3.5, Midjourney, Cursor & Zapier automations.',
    image: COURSE_AUTHORITATIVE_IMAGES['ai-tools-prompt'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['ai-tools-prompt'],
    video: '/videos/ai_tools_prompt_engineering.mp4',
    theme: 'dark',
    stripColor: 'indigo-cobalt',
    tools: [
      { name: 'ChatGPT' },
      { name: 'OpenAI' },
      { name: 'LangChain' },
      { name: 'Python' },
      { name: 'Cloud' },
    ],
    jobRoles: 'AI Automation Lead | Prompt ...',
    salary: '₹5 - 14 LPA',
    price: '₹1,599',
    originalPrice: '₹15,999',
    discountBadge: '90% OFF',
  },
  {
    id: 'ms-office-copilot',
    badgeNum: 6,
    title: 'Microsoft Office 365 with Copilot',
    topBadge: { icon: '⭐', text: 'Microsoft Certified' },
    shortDesc: 'Automate executive reporting, decks, financial models, and emails with Microsoft Copilot AI.',
    image: COURSE_AUTHORITATIVE_IMAGES['ms-office-copilot'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['ms-office-copilot'],
    theme: 'emerald',
    stripColor: 'forest-lime',
    tools: [
      { name: 'Excel' },
      { name: 'DAX' },
      { name: 'Power Query' },
      { name: 'Power BI' },
      { name: 'OpenAI' },
    ],
    jobRoles: 'Business Analyst | Operations Analyst ...',
    salary: '₹5 - 12 LPA',
    price: '₹899',
    originalPrice: '₹8,999',
    discountBadge: '90% OFF',
  },
  {
    id: 'full-stack-web-dev',
    badgeNum: 7,
    title: 'Full Stack Web Development',
    topBadge: { icon: '💻', text: 'Full Stack' },
    shortDesc: 'Build modern responsive full-stack applications with React, Node.js, Express & PostgreSQL.',
    image: COURSE_AUTHORITATIVE_IMAGES['full-stack-web-dev'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['full-stack-web-dev'],
    theme: 'teal',
    stripColor: 'dark-teal',
    tools: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'TypeScript' },
      { name: 'Docker' },
      { name: 'GitHub' },
    ],
    jobRoles: 'Full Stack Developer | Web Developer ...',
    salary: '₹8 - 22 LPA',
    price: '₹18,999',
    originalPrice: undefined,
    discountBadge: undefined,
  },
  {
    id: 'ai-website-dev',
    badgeNum: 8,
    title: 'AI Website Builder Pro',
    isLiveCourse: true,
    liveBadgeText: 'LIVE CLASSES',
    courseTypeLabel: 'LIVE Instructor-Led Class',
    ctaLabel: 'View Demo',
    shortDesc: 'Build corporate sites, e-commerce stores, SaaS dashboards, and booking portals with AI, full database and payment integrations.',
    image: COURSE_AUTHORITATIVE_IMAGES['ai-website-dev'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['ai-website-dev'],
    video: '/videos/ai_website_builder_pro.mp4',
    theme: 'orange',
    stripColor: 'amber-gold',
    tools: [
      { name: 'AI Builder' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'SQL' },
      { name: 'Payments' },
    ],
    jobRoles: 'LIVE Instructor-Led Class',
    salary: 'Live Website Projects',
    price: '₹2,999',
    originalPrice: undefined,
    discountBadge: undefined,
  },
  {
    id: 'ai-android-dev',
    badgeNum: 9,
    title: 'AI App Builder Pro',
    isLiveCourse: true,
    liveBadgeText: 'LIVE CLASSES',
    courseTypeLabel: 'LIVE Instructor-Led Class',
    ctaLabel: 'View Demo',
    shortDesc: 'Build professional Android mobile apps for food delivery, shopping, fintech, and booking with AI, Firebase and Play Store deployment.',
    image: COURSE_AUTHORITATIVE_IMAGES['ai-android-dev'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['ai-android-dev'],
    video: '/videos/ai_app_builder_pro.mp4',
    theme: 'blue',
    stripColor: 'ocean-cyan',
    tools: [
      { name: 'Android' },
      { name: 'AI Builder' },
      { name: 'Firebase' },
      { name: 'REST API' },
      { name: 'Play Store' },
    ],
    jobRoles: 'LIVE Instructor-Led Class',
    salary: 'Live Mobile App Projects',
    price: '₹2,499',
    originalPrice: undefined,
    discountBadge: undefined,
  },
  {
    id: 'ai-video-creation',
    badgeNum: 10,
    title: 'AI Video Creator Pro',
    isLiveCourse: true,
    liveBadgeText: 'LIVE CLASSES',
    courseTypeLabel: 'LIVE Instructor-Led Class',
    ctaLabel: 'View Demo',
    shortDesc: 'Create cinematic brand advertisements, product showcases, social reels, and YouTube videos with AI characters, lip-sync, and 4K export.',
    image: COURSE_AUTHORITATIVE_IMAGES['ai-video-creation'],
    holoImage: COURSE_AUTHORITATIVE_IMAGES['ai-video-creation'],
    video: '/videos/ai_video_creator_pro.mp4',
    theme: 'pink',
    stripColor: 'cinematic-red',
    tools: [
      { name: 'AI Video' },
      { name: 'Lip Sync' },
      { name: 'AI Voice' },
      { name: 'Cinema 4K' },
      { name: 'Ads & Reels' },
    ],
    jobRoles: 'LIVE Instructor-Led Class',
    salary: 'Live AI Video Studio',
    price: '₹999',
    originalPrice: undefined,
    discountBadge: undefined,
  },
];
