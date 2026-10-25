export interface CareerCourseItem {
  id: string;
  badgeNum: number;
  title: string;
  subtitle?: string;
  shortDesc: string;
  image: string;
  holoImage?: string;
  video?: string;
  theme: 'cyan' | 'purple' | 'blue' | 'pink';
  tools: Array<{ name: string }>;
  jobRoles: string;
  salary: string;
  price: string;
}

export const CAREER_COURSES_12: CareerCourseItem[] = [
  {
    id: 'data-analyst-genai',
    badgeNum: 1,
    title: 'Data Analyst with GenAI',
    shortDesc: 'Master Python, SQL, Power BI, Excel & GenAI to build automated business dashboards.',
    image: '/images/pot1_sharp_poster.jpg',
    holoImage: '/images/pot1_sharp_poster.jpg',
    video: '/videos/data_analyst_genai_v2.mp4',
    theme: 'cyan',
    tools: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'Power BI' },
      { name: 'Excel' },
      { name: 'ChatGPT' },
    ],
    jobRoles: 'Data Analyst | BI Consultant',
    salary: '₹6 - 15 LPA',
    price: '₹4',
  },
  {
    id: 'data-science-agentic-ai',
    badgeNum: 2,
    title: 'Data Science & Agentic AI',
    shortDesc: 'Build Machine Learning models, RAG pipelines, and autonomous AI Agent systems.',
    image: '/images/pot2_sharp_poster.jpg',
    holoImage: '/images/pot2_sharp_poster.jpg',
    video: '/videos/data_science_agentic_ai_course.mp4',
    theme: 'purple',
    tools: [
      { name: 'Python' },
      { name: 'PyTorch' },
      { name: 'LangChain' },
      { name: 'Vector DB' },
      { name: 'RAG' },
    ],
    jobRoles: 'Data Scientist | AI Agent Developer',
    salary: '₹10 - 25 LPA',
    price: '₹987',
  },
  {
    id: 'ml-engineering',
    badgeNum: 3,
    title: 'Machine Learning Engineering',
    shortDesc: 'Build, train, and deploy production-scale ML pipelines with MLOps and Docker.',
    image: '/images/pot3_sharp_poster.jpg',
    holoImage: '/images/pot3_sharp_poster.jpg',
    video: '/videos/ml_engineering_course.mp4',
    theme: 'blue',
    tools: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Cloud' },
    ],
    jobRoles: 'ML Engineer | MLOps Specialist',
    salary: '₹12 - 28 LPA',
    price: '₹987',
  },
  {
    id: 'ai-engineering',
    badgeNum: 4,
    title: 'AI Engineering',
    shortDesc: 'Build and deploy end-to-end enterprise AI products, LLMs, and multi-agent solutions.',
    image: '/images/pot4_sharp_poster.jpg',
    holoImage: '/images/pot4_sharp_poster.jpg',
    video: '/videos/ai_engineering_course.mp4',
    theme: 'cyan',
    tools: [
      { name: 'OpenAI' },
      { name: 'LangChain' },
      { name: 'Hugging Face' },
      { name: 'Vector DB' },
      { name: 'RAG' },
    ],
    jobRoles: 'AI Engineer | Full Stack AI Engineer',
    salary: '₹14 - 32 LPA',
    price: '₹987',
  },
  {
    id: 'ai-tools-prompt',
    badgeNum: 5,
    title: 'AI Tools & Prompt Engineering',
    shortDesc: '10x your productivity with ChatGPT-4o, Claude 3.5, Midjourney, Cursor & Zapier automations.',
    image: '/images/cube_genai.jpg',
    holoImage: '/images/cube_genai.jpg',
    video: '/videos/card_video_genai.mp4',
    theme: 'purple',
    tools: [
      { name: 'ChatGPT' },
      { name: 'OpenAI' },
      { name: 'LangChain' },
      { name: 'Python' },
      { name: 'Cloud' },
    ],
    jobRoles: 'AI Automation Lead | Prompt Engineer',
    salary: '₹5 - 14 LPA',
    price: '₹987',
  },
  {
    id: 'ms-office-copilot',
    badgeNum: 6,
    title: 'Microsoft Office 365 with Copilot',
    shortDesc: 'Automate executive reporting, decks, financial models, and emails with Microsoft Copilot AI.',
    image: '/images/msoffice_365_copilot_poster.jpg',
    holoImage: '/images/msoffice_365_copilot_poster.jpg',
    video: '/videos/card_video_excel.mp4',
    theme: 'blue',
    tools: [
      { name: 'Excel' },
      { name: 'DAX' },
      { name: 'Power Query' },
      { name: 'Power BI' },
      { name: 'OpenAI' },
    ],
    jobRoles: 'Business Analyst | Operations Manager',
    salary: '₹5 - 12 LPA',
    price: '₹987',
  },
  {
    id: 'full-stack-web-dev',
    badgeNum: 7,
    title: 'Full Stack Web Development',
    shortDesc: 'Build modern responsive full-stack applications with React, Node.js, Express & PostgreSQL.',
    image: '/images/full_stack_web_development_poster.jpg',
    holoImage: '/images/full_stack_web_development_poster.jpg',
    video: '/videos/card_video_python.mp4',
    theme: 'pink',
    tools: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'TypeScript' },
      { name: 'Docker' },
      { name: 'GitHub' },
    ],
    jobRoles: 'Full Stack Developer | Web Architect',
    salary: '₹8 - 22 LPA',
    price: '₹987',
  },
];
