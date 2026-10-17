import React from 'react';
import { QuickActionItem } from '../../types';
import { Modal } from '../common/Modal';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface QuickActionModalProps {
  action: QuickActionItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab?: (tab: string) => void;
}

export const QuickActionModal: React.FC<QuickActionModalProps> = ({
  action,
  isOpen,
  onClose,
  onNavigateToTab
}) => {
  if (!action) return null;

  const getContent = () => {
    switch (action.id) {
      case 'ai-teacher':
        return {
          headline: '1-on-1 Realtime AI Tutoring',
          desc: 'Your AI Teacher guides you through step-by-step concepts in Python, SQL, and Power BI with instant feedback on syntax, data logic, and common pitfalls.',
          features: [
            'Personalized difficulty scaling based on your progress',
            'Socratic questioning that helps you think like an analyst',
            'Instant explanation of complex queries & formulas'
          ],
          cta: 'Launch AI Teacher Session',
          targetTab: 'ai'
        };
      case 'practice':
        return {
          headline: 'Interactive Sandbox & Code Playground',
          desc: 'Hands-on coding challenges designed specifically for interview patterns and real data problems.',
          features: [
            'Live PostgreSQL database runner with realistic business schemas',
            'Python Pandas sandbox with automated test cases',
            'Excel modeling drills with real CSV uploads'
          ],
          cta: 'Open Practice Playground',
          targetTab: 'practice'
        };
      case 'projects':
        return {
          headline: 'Portfolio-Ready Data Projects',
          desc: 'Build end-to-end analytics projects you can present to hiring managers and add to your GitHub resume.',
          features: [
            'E-Commerce Customer Retention & Churn Analysis',
            'Executive Sales & Profit Margin Dashboard in Power BI',
            'Financial Fraud Detection with Python & Scikit'
          ],
          cta: 'Explore Projects Catalog',
          targetTab: 'projects'
        };
      case 'interview':
        return {
          headline: 'AI Mock Interview Simulator',
          desc: 'Simulate realistic technical and behavioral interviews for Junior, Mid, and Senior Data Analyst positions.',
          features: [
            'Live timed SQL query challenges under pressure',
            'Behavioral questions using the STAR framework',
            'Detailed scoring rubric and instant feedback on your answers'
          ],
          cta: 'Start Mock Interview',
          targetTab: 'interview'
        };
      default:
        return {
          headline: action.title,
          desc: action.subtitle,
          features: ['Production ready curriculum', 'Real-world data tools'],
          cta: 'Get Started',
          targetTab: 'learn'
        };
    }
  };

  const content = getContent();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={action.title}>
      <div className="space-y-4">
        {/* Banner */}
        <div className={`p-4 rounded-2xl border ${action.bgColor} ${action.borderColor}`}>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className={`w-4 h-4 ${action.iconColor}`} />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {action.subtitle}
            </span>
          </div>
          <h4 className="text-base font-bold text-slate-900">{content.headline}</h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{content.desc}</p>
        </div>

        {/* Feature bullets */}
        <div className="space-y-2">
          {content.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            if (onNavigateToTab) onNavigateToTab(content.targetTab);
            onClose();
          }}
          className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
        >
          <span>{content.cta}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </Modal>
  );
};
