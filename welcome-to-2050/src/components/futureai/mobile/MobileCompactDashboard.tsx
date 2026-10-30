import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CAREER_COURSES_12, CareerCourseItem } from '../../../data/careerCourses12';
import { MobileLoggedInHero } from './MobileLoggedInHero';
import { MobileCoursesShowcase, MobileShowcaseCourse } from './MobileCoursesShowcase';

const HIRING_PARTNER_LOGOS = [
  { name: 'Google',       logo: '/images/companies/google.svg',       h: 18 },
  { name: 'Microsoft',    logo: '/images/companies/microsoft.svg',    h: 18 },
  { name: 'Amazon',       logo: '/images/companies/amazon.svg',       h: 18 },
  { name: 'Accenture',    logo: '/images/companies/accenture.svg',    h: 17 },
  { name: 'Deloitte',     logo: '/images/companies/deloitte.svg',     h: 17 },
  { name: 'TCS',          logo: '/images/companies/tcs.svg',          h: 18 },
  { name: 'Infosys',      logo: '/images/companies/infosys.svg',      h: 17 },
  { name: 'Wipro',        logo: '/images/companies/wipro.svg',        h: 18 },
  { name: 'IBM',          logo: '/images/companies/ibm.svg',          h: 16 },
  { name: 'Adobe',        logo: '/images/companies/adobe.svg',        h: 17 },
  { name: 'EY',           logo: '/images/companies/ey.svg',           h: 18 },
  { name: 'Cognizant',    logo: '/images/companies/cognizant.svg',    h: 16 },
  { name: 'Capgemini',    logo: '/images/companies/capgemini.svg',    h: 17 },
  { name: 'PwC',          logo: '/images/companies/pwc.svg',          h: 18 },
  { name: 'KPMG',         logo: '/images/companies/kpmg.svg',         h: 17 },
  { name: 'Tech Mahindra',logo: '/images/companies/techmahindra.svg', h: 16 },
  { name: 'HCL',          logo: '/images/companies/hcl.svg',          h: 15 },
];

export interface MobileCompactDashboardProps {
  onCourseClick: (course: CareerCourseItem) => void;
  onOpenMyCourses: () => void;
  onOpenCodingPractice: () => void;
  onOpenMockInterview: () => void;
  onOpenJobSupport: () => void;
  playClick?: () => void;
}

export const MobileCompactDashboard: React.FC<MobileCompactDashboardProps> = ({
  onCourseClick,
  onOpenMyCourses,
  onOpenCodingPractice: _onOpenCodingPractice,
  onOpenMockInterview: _onOpenMockInterview,
  onOpenJobSupport,
  playClick,
}) => {
  const courses = CAREER_COURSES_12;

  const click = (id: string, fallbackIdx: number) => () => {
    playClick?.();
    onCourseClick(courses.find((c) => c.id === id) ?? courses[fallbackIdx]);
  };

  const mobileShowcaseCourses: MobileShowcaseCourse[] = [
    {
      id: 'data-analyst-genai',
      courseUnlockKey: 'data_analyst',
      popularBadge: '🔥 MOST POPULAR',
      badge: '⭐ Beginner Friendly',
      badgeBg: 'bg-emerald-500',
      salaryRange: '₹ 6 - 15 LPA',
      title: 'Data Analyst with',
      titleAccent: 'GenAI',
      titleAccentColor: 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent',
      description: 'Master Python, SQL, Power BI, Excel & GenAI to build automated business solutions.',
      image: '/images/pot1_sharp_poster.jpg',
      video: '/videos/data_analyst_genai_v2.mp4',
      tools: [{ name: 'Python' }, { name: 'SQL' }, { name: 'Power BI' }, { name: 'Excel' }, { name: 'ChatGPT' }],
      originalPrice: '₹13,999',
      sellingPrice: '₹987 Only',
      discountLabel: '93% OFF',
      enrollBtnGradient: 'bg-gradient-to-r from-emerald-600 to-teal-500',
      onEnroll: click('data-analyst-genai', 0),
    },
    {
      id: 'data-science-agentic-ai',
      courseUnlockKey: 'data_science',
      badge: '⭐ In-Demand',
      badgeBg: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      salaryRange: '₹ 10 - 25 LPA',
      title: 'Data Science &',
      titleAccent: 'Agentic AI',
      titleAccentColor: 'bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent',
      description: 'Build Machine Learning models, RAG pipelines and autonomous AI agents.',
      image: '/images/pot2_sharp_poster.jpg',
      video: '/videos/data_science_agentic_ai_course.mp4',
      tools: [{ name: 'Python' }, { name: 'PyTorch' }, { name: 'LangChain' }, { name: 'Vector DB' }, { name: 'RAG' }],
      originalPrice: '₹14,499',
      sellingPrice: '₹987 Only',
      discountLabel: '93% OFF',
      enrollBtnGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      onEnroll: click('data-science-agentic-ai', 1),
    },
    {
      id: 'ml-engineering',
      courseUnlockKey: 'ml_engineering',
      badge: '⭐ For Tech Careers',
      badgeBg: 'bg-gradient-to-r from-amber-500 to-orange-500',
      salaryRange: '₹ 12 - 28 LPA',
      title: 'Machine Learning',
      titleAccent: 'Engineering',
      titleAccentColor: 'bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent',
      description: 'End-to-end ML model development & deployment with industry tools.',
      image: '/images/pot3_sharp_poster.jpg',
      video: '/videos/ml_engineering_course.mp4',
      tools: [{ name: 'Python' }, { name: 'FastAPI' }, { name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Cloud' }],
      originalPrice: '₹12,999',
      sellingPrice: '₹987 Only',
      discountLabel: '92% OFF',
      enrollBtnGradient: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      onEnroll: click('ml-engineering', 2),
    },
    {
      id: 'ai-engineering',
      courseUnlockKey: 'ai_engineering',
      badge: '⭐ Flagship 2050',
      badgeBg: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      salaryRange: '₹ 14 - 32 LPA',
      title: 'AI',
      titleAccent: 'Engineering',
      titleAccentColor: 'bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent',
      description: 'Build and deploy enterprise AI products, LLMs and multi-agent solutions.',
      image: '/images/pot4_sharp_poster.jpg',
      video: '/videos/ai_engineering_course.mp4',
      tools: [{ name: 'OpenAI' }, { name: 'LangChain' }, { name: 'Hugging Face' }, { name: 'Vector DB' }, { name: 'RAG' }],
      originalPrice: '₹15,999',
      sellingPrice: '₹987 Only',
      discountLabel: '94% OFF',
      enrollBtnGradient: 'bg-gradient-to-r from-emerald-600 to-teal-500',
      onEnroll: click('ai-engineering', 3),
    },
    {
      id: 'ai-tools-prompt',
      courseUnlockKey: 'ai_tools_prompt',
      badge: '⚡ 10X Productivity',
      badgeBg: 'bg-gradient-to-r from-amber-500 to-orange-500',
      salaryRange: '₹ 5 - 14 LPA',
      title: 'AI Tools &',
      titleAccent: 'Prompt Engineering',
      titleAccentColor: 'bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent',
      description: '10x your productivity with ChatGPT-4o, Claude 3.5, Midjourney & Zapier automations.',
      image: '/images/cube_genai.jpg',
      video: '/videos/card_video_genai.mp4',
      tools: [{ name: 'ChatGPT' }, { name: 'OpenAI' }, { name: 'LangChain' }, { name: 'Python' }, { name: 'Cloud' }],
      originalPrice: '₹12,999',
      sellingPrice: '₹987 Only',
      discountLabel: '92% OFF',
      enrollBtnGradient: 'bg-gradient-to-r from-amber-500 to-orange-500',
      onEnroll: click('ai-tools-prompt', 4),
    },
    {
      id: 'ms-office-copilot',
      courseUnlockKey: 'ms_office_copilot',
      badge: '📊 Popular • Office AI',
      badgeBg: 'bg-gradient-to-r from-blue-600 to-sky-600',
      salaryRange: '₹ 5 - 12 LPA',
      title: 'Microsoft Office 365',
      titleAccent: 'with Copilot',
      titleAccentColor: 'bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent',
      description: 'Automate executive reporting, decks, financial models & emails with Microsoft Copilot AI.',
      image: '/images/msoffice_365_copilot_poster.jpg',
      video: '/videos/card_video_excel.mp4',
      tools: [{ name: 'Excel' }, { name: 'DAX' }, { name: 'Power Query' }, { name: 'Power BI' }, { name: 'OpenAI' }],
      originalPrice: '₹14,999',
      sellingPrice: '₹987 Only',
      discountLabel: '93% OFF',
      enrollBtnGradient: 'bg-gradient-to-r from-blue-600 to-sky-500',
      onEnroll: click('ms-office-copilot', 5),
    },
    {
      id: 'full-stack-web-dev',
      courseUnlockKey: 'full_stack',
      badge: '🌐 High Demand',
      badgeBg: 'bg-gradient-to-r from-emerald-500 to-cyan-600',
      salaryRange: '₹ 8 - 22 LPA',
      title: 'Full Stack',
      titleAccent: 'Web Development',
      titleAccentColor: 'bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent',
      description: 'Build production SaaS apps with React, Node.js, Express, MongoDB & REST APIs.',
      image: '/images/full_stack_web_development_poster.jpg',
      video: '/videos/card_video_python.mp4',
      tools: [{ name: 'React' }, { name: 'Node.js' }, { name: 'TypeScript' }, { name: 'Docker' }, { name: 'GitHub' }],
      originalPrice: '₹24,999',
      sellingPrice: '₹987 Only',
      discountLabel: '96% OFF',
      enrollBtnGradient: 'bg-gradient-to-r from-emerald-600 to-cyan-500',
      onEnroll: click('full-stack-web-dev', 6),
    },
  ];

  return (
    <div className="md:hidden w-full min-w-0 max-w-md mx-auto overflow-x-hidden px-3 pt-2 pb-6 font-sans box-border">

      {/* 1. Hero */}
      <MobileLoggedInHero onContinueLearning={onOpenMyCourses} playClick={playClick} />

      {/* 2. Hiring partners marquee */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => { playClick?.(); onOpenJobSupport(); }}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { playClick?.(); onOpenJobSupport(); } }}
        className="mt-2.5 w-full flex items-center gap-2 rounded-xl bg-white border border-[#e3ecfb] px-2.5 py-2 shadow-[0_2px_8px_rgba(30,80,180,0.05)] cursor-pointer overflow-hidden select-none active:scale-[0.99] transition-transform"
        aria-label="Our Placed Students"
      >
        <div className="shrink-0 flex items-center gap-1.5 border-r border-slate-200 pr-2">
          <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-extrabold text-[#0b1a3a] whitespace-nowrap">Our Placed Students</span>
        </div>

        <div className="relative overflow-hidden flex-1 min-w-0">
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee-left flex items-center gap-5">
            {[...HIRING_PARTNER_LOGOS, ...HIRING_PARTNER_LOGOS].map((comp, idx) => (
              <div key={`${comp.name}-${idx}`} className="shrink-0 flex items-center gap-1.5 opacity-90">
                <img src={comp.logo} alt={comp.name} style={{ height: `${comp.h}px` }} className="w-auto object-contain max-w-[65px]" loading="lazy" />
                <span className="text-[10px] font-bold text-slate-700 whitespace-nowrap hidden min-[360px]:inline">{comp.name}</span>
              </div>
            ))}
          </div>
        </div>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-0.5" />
      </div>

      {/* 3. 7-course showcase */}
      <section id="mobile-courses-list" className="mt-4 scroll-mt-20">
        <MobileCoursesShowcase
          courses={mobileShowcaseCourses}
          onAllCourses={() => {
            document.getElementById('mobile-courses-list')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </section>
    </div>
  );
};
