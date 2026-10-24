import React from 'react';

interface ToolItem {
  name: string;
  type: 'image' | 'svg';
  src?: string;
  svg?: React.ReactNode;
}

export const CourseToolBadges: React.FC<{ courseId: string; className?: string }> = ({ courseId, className = '' }) => {
  const getTools = (id: string): ToolItem[] => {
    switch (id) {
      case 'data-analyst-genai':
        return [
          { name: 'Python', type: 'image', src: '/assets/reference/icons/tool_python.png' },
          { name: 'SQL', type: 'image', src: '/assets/reference/icons/tool_sql.png' },
          { name: 'Power BI', type: 'image', src: '/assets/reference/icons/tool_powerbi.png' },
          { name: 'Excel', type: 'image', src: '/assets/reference/icons/tool_excel.png' },
          { name: 'ChatGPT AI', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
        ];

      case 'data-science-agentic-ai':
        return [
          { name: 'Python', type: 'image', src: '/assets/reference/icons/tool_python.png' },
          {
            name: 'PyTorch',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M13.5 2.5l-1.8 1.8 3.5 3.5-3.5 3.5 1.8 1.8 5.3-5.3-5.3-5.3z" fill="#EE4C2C" />
                <circle cx="16" cy="4" r="1.5" fill="#EE4C2C" />
                <path d="M10.5 5.5A7.5 7.5 0 1018 13h-2.5a5 5 0 11-5-5V5.5z" fill="#EE4C2C" />
              </svg>
            ),
          },
          { name: 'SQL', type: 'image', src: '/assets/reference/icons/tool_sql.png' },
          { name: 'GenAI', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
          { name: 'GitHub', type: 'image', src: '/assets/reference/icons/tool_github.png' },
        ];

      case 'ml-engineering':
        return [
          { name: 'Python', type: 'image', src: '/assets/reference/icons/tool_python.png' },
          {
            name: 'PyTorch',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M13.5 2.5l-1.8 1.8 3.5 3.5-3.5 3.5 1.8 1.8 5.3-5.3-5.3z" fill="#EE4C2C" />
                <path d="M10.5 5.5A7.5 7.5 0 1018 13h-2.5a5 5 0 11-5-5V5.5z" fill="#EE4C2C" />
              </svg>
            ),
          },
          {
            name: 'Docker',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M4 11h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-6-3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-3-3h2v2h-2z" fill="#0db7ed" />
                <path d="M22 13c-.5-.4-1.6-.5-2.4-.2-.4-1.2-1.3-2-2.6-2.3-.2 0-.3 0-.5.1C16 7.5 12.5 7 9 7 4 7 1.5 10.5 1.2 13.5 1 15 2 17.5 4.5 19c3 1.8 7 2 11 1 3-.7 5.5-2.5 6.5-5 .5-.2.8-.8.8-1.5 0-.2-.3-.4-.8-.5z" fill="#0db7ed" />
              </svg>
            ),
          },
          {
            name: 'TensorFlow',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M12 2l10 5.8v11.6L12 22 2 16.6V4.8L12 2z" fill="#FF6F00" opacity="0.2" />
                <path d="M12 2v20m10-14.2l-10 5.8m10 5.8l-10 5.8M2 7.8l10 5.8M2 13.6l10 5.8" stroke="#FF6F00" strokeWidth="1.5" />
              </svg>
            ),
          },
          { name: 'GitHub', type: 'image', src: '/assets/reference/icons/tool_github.png' },
        ];

      case 'deep-learning':
        return [
          { name: 'Python', type: 'image', src: '/assets/reference/icons/tool_python.png' },
          {
            name: 'PyTorch',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M13.5 2.5l-1.8 1.8 3.5 3.5-3.5 3.5 1.8 1.8 5.3-5.3-5.3-5.3z" fill="#EE4C2C" />
                <path d="M10.5 5.5A7.5 7.5 0 1018 13h-2.5a5 5 0 11-5-5V5.5z" fill="#EE4C2C" />
              </svg>
            ),
          },
          {
            name: 'Transformers',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="12" r="9" stroke="#FFD21E" strokeWidth="2" fill="#FFD21E" fillOpacity="0.2" />
                <circle cx="9" cy="10" r="1.5" fill="#111" />
                <circle cx="15" cy="10" r="1.5" fill="#111" />
                <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ),
          },
          { name: 'OpenCV', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
          { name: 'GitHub', type: 'image', src: '/assets/reference/icons/tool_github.png' },
        ];

      case 'ai-engineering':
        return [
          { name: 'OpenAI', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
          {
            name: 'LangChain',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <rect x="3" y="3" width="18" height="18" rx="4" fill="#00A67E" fillOpacity="0.2" stroke="#00A67E" strokeWidth="1.5" />
                <path d="M8 12h8m-5-3l3 3-3 3" stroke="#00A67E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
          },
          { name: 'Python', type: 'image', src: '/assets/reference/icons/tool_python.png' },
          {
            name: 'Vector DB',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <ellipse cx="12" cy="6" rx="8" ry="3" fill="#38BDF8" />
                <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#0284C7" strokeWidth="1.5" />
                <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#0284C7" strokeWidth="1.5" />
              </svg>
            ),
          },
          { name: 'GitHub', type: 'image', src: '/assets/reference/icons/tool_github.png' },
        ];

      case 'genai-llms':
        return [
          { name: 'ChatGPT', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
          {
            name: 'Hugging Face',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="12" r="9" stroke="#FFD21E" strokeWidth="2" fill="#FFD21E" fillOpacity="0.25" />
                <circle cx="9" cy="10" r="1.5" fill="#111" />
                <circle cx="15" cy="10" r="1.5" fill="#111" />
                <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            name: 'Claude',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="12" r="8.5" fill="#D97706" fillOpacity="0.2" stroke="#D97706" strokeWidth="1.5" />
                <path d="M12 7v10M7 12h10" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            ),
          },
          { name: 'Python', type: 'image', src: '/assets/reference/icons/tool_python.png' },
        ];

      case 'ai-tools-prompt':
        return [
          { name: 'ChatGPT 4o', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
          {
            name: 'Claude 3.5',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="12" r="8.5" fill="#D97706" fillOpacity="0.2" stroke="#D97706" strokeWidth="1.5" />
                <path d="M12 7v10M7 12h10" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            name: 'Midjourney',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M12 3L4 18h16L12 3z" stroke="#6366F1" strokeWidth="1.8" fill="#6366F1" fillOpacity="0.2" strokeLinejoin="round" />
                <path d="M12 9v9" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            name: 'Copilot',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="8" cy="12" r="4" fill="#0078D4" />
                <circle cx="16" cy="12" r="4" fill="#107C41" />
              </svg>
            ),
          },
        ];

      case 'ms-office-copilot':
        return [
          { name: 'Excel', type: 'image', src: '/assets/reference/icons/tool_excel.png' },
          {
            name: 'Word',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <rect x="4" y="4" width="16" height="16" rx="3" fill="#2B579A" />
                <path d="M7 8l2.5 8 2.5-6 2.5 6 2.5-8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
          },
          {
            name: 'PowerPoint',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <rect x="4" y="4" width="16" height="16" rx="3" fill="#D24726" />
                <path d="M8 8h4.5a2.5 2.5 0 010 5H8V8zm0 5v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ),
          },
          { name: 'Copilot', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
        ];

      case 'full-stack-web-dev':
        return [
          {
            name: 'React',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(30 12 12)" />
                <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(90 12 12)" />
                <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(150 12 12)" />
                <circle cx="12" cy="12" r="1.5" fill="#00D8FF" />
              </svg>
            ),
          },
          {
            name: 'Node.js',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" fill="#5FA04E" fillOpacity="0.25" stroke="#5FA04E" strokeWidth="1.5" />
                <path d="M12 6v12M7.5 9.5l9 5" stroke="#5FA04E" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            name: 'TypeScript',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <rect x="3" y="3" width="18" height="18" rx="3" fill="#3178C6" />
                <path d="M6 10h6m-3 0v7M14 13.5c.5-.5 1.5-.7 2.5-.7 1.2 0 2 .5 2 1.5s-.8 1.4-2 1.8c-1.5.5-2.5 1-2.5 2.2 0 1.5 1.2 2.2 2.8 2.2 1.2 0 2.2-.4 2.8-.8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ),
          },
          { name: 'GitHub', type: 'image', src: '/assets/reference/icons/tool_github.png' },
        ];

      case 'react-frontend':
        return [
          {
            name: 'React 19',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(30 12 12)" />
                <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(90 12 12)" />
                <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(150 12 12)" />
                <circle cx="12" cy="12" r="1.5" fill="#00D8FF" />
              </svg>
            ),
          },
          {
            name: 'TypeScript',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <rect x="3" y="3" width="18" height="18" rx="3" fill="#3178C6" />
                <path d="M6 10h6m-3 0v7M14 13.5c.5-.5 1.5-.7 2.5-.7 1.2 0 2 .5 2 1.5s-.8 1.4-2 1.8c-1.5.5-2.5 1-2.5 2.2 0 1.5 1.2 2.2 2.8 2.2 1.2 0 2.2-.4 2.8-.8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            name: 'Tailwind CSS',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M6 12c.5-2 2-3 4-3 3 0 3.5 2.5 5 2.5 1.5 0 2.5-1 3-2.5-.5 2-2 3-4 3-3 0-3.5-2.5-5-2.5-1.5 0-2.5 1-3 2.5zm-4 5c.5-2 2-3 4-3 3 0 3.5 2.5 5 2.5 1.5 0 2.5-1 3-2.5-.5 2-2 3-4 3-3 0-3.5-2.5-5-2.5-1.5 0-2.5 1-3 2.5z" fill="#38BDF8" />
              </svg>
            ),
          },
          { name: 'GitHub', type: 'image', src: '/assets/reference/icons/tool_github.png' },
        ];

      case 'ui-ux-figma':
        return [
          {
            name: 'Figma',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M8.5 3H12v6H8.5a3 3 0 110-6z" fill="#F24E1E" />
                <path d="M12 3h3.5a3 3 0 110 6H12V3z" fill="#FF7262" />
                <path d="M12 9h3.5a3 3 0 110 6H12V9z" fill="#1ABCFE" />
                <path d="M8.5 9H12v6H8.5a3 3 0 110-6z" fill="#A259FF" />
                <path d="M8.5 15H12v3.5a3.5 3.5 0 11-3.5-3.5z" fill="#0ACF83" />
              </svg>
            ),
          },
          {
            name: 'Generative AI UX',
            type: 'image',
            src: '/assets/reference/icons/tool_chatgpt.png',
          },
          {
            name: 'Design Systems',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#A855F7" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#3B82F6" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#10B981" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#F59E0B" />
              </svg>
            ),
          },
        ];

      case 'digital-marketing-ai':
        return [
          {
            name: 'Google Ads',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M14.5 4l-7 12a3 3 0 004 4l7-12a3 3 0 00-4-4z" fill="#FBBC04" />
                <circle cx="6" cy="18" r="3" fill="#4285F4" />
                <path d="M18.5 11l-3 5.5a3 3 0 004 2.5l3-5.5a3 3 0 00-4-2.5z" fill="#34A853" />
              </svg>
            ),
          },
          {
            name: 'Meta Ads',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M12 14.5c-1.5-1.8-2.6-3.8-3.7-5-1.5-1.7-3.3-2.5-4.8-1.5C1.8 9.2 1.5 12 3 14.3c1.3 2 3.4 3 5.2 2 1.3-.7 2.6-2.5 3.8-4.5zm0 0c1.5-1.8 2.6-3.8 3.7-5 1.5-1.7 3.3-2.5 4.8-1.5 1.7 1.2 2 4 .5 6.3-1.3 2-3.4 3-5.2 2-1.3-.7-2.6-2.5-3.8-4.5z" stroke="#0081FB" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ),
          },
          { name: 'Google Analytics', type: 'image', src: '/assets/reference/icons/tool_ga.png' },
          { name: 'ChatGPT Copy', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
        ];

      case 'ai-career-accelerator':
        return [
          {
            name: 'LinkedIn',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <rect x="3" y="3" width="18" height="18" rx="4" fill="#0A66C2" />
                <circle cx="7" cy="8" r="1.5" fill="#fff" />
                <path d="M6 11h2v7H6zm5 0h2v1.2c.4-.7 1.3-1.4 2.5-1.4 2 0 3 1.2 3 3.2V18h-2v-3.5c0-1.2-.5-1.8-1.5-1.8s-2 .6-2 1.8V18h-2v-7z" fill="#fff" />
              </svg>
            ),
          },
          { name: 'GitHub', type: 'image', src: '/assets/reference/icons/tool_github.png' },
          { name: 'AI Interview', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
          {
            name: 'ATS SaaS',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M9 12l2 2 4-4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#10B981" strokeWidth="1.5" fill="#10B981" fillOpacity="0.15" />
              </svg>
            ),
          },
        ];

      case 'corporate-ai-training':
        return [
          { name: 'Enterprise LLM', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
          {
            name: 'Copilot AI',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="8" cy="12" r="4" fill="#0078D4" />
                <circle cx="16" cy="12" r="4" fill="#107C41" />
              </svg>
            ),
          },
          {
            name: 'Zapier AI',
            type: 'svg',
            svg: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="12" r="9" fill="#FF4F00" />
                <path d="M7 12h10M12 7v10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            ),
          },
          { name: 'Python', type: 'image', src: '/assets/reference/icons/tool_python.png' },
        ];

      default:
        return [
          { name: 'Python', type: 'image', src: '/assets/reference/icons/tool_python.png' },
          { name: 'GenAI', type: 'image', src: '/assets/reference/icons/tool_chatgpt.png' },
          { name: 'GitHub', type: 'image', src: '/assets/reference/icons/tool_github.png' },
        ];
    }
  };

  const tools = getTools(courseId);

  return (
    <div className={`flex items-center justify-center gap-1.5 my-1.5 py-1 px-2 rounded-xl bg-slate-900/30 border border-white/10 backdrop-blur-xs ${className}`}>
      {tools.map((t, idx) => (
        <span
          key={idx}
          title={t.name}
          className="w-6 h-6 rounded-md bg-white/15 hover:bg-white/30 border border-white/20 p-1 flex items-center justify-center shadow-2xs transition-transform hover:scale-115 cursor-pointer shrink-0"
        >
          {t.type === 'image' && t.src ? (
            <img src={t.src} alt={t.name} className="w-full h-full object-contain filter drop-shadow-xs" loading="lazy" />
          ) : (
            t.svg
          )}
        </span>
      ))}
    </div>
  );
};
