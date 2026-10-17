import React, { useState } from 'react';
import { Zap, GraduationCap, Code, Folder, Users, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { quickActionItems } from '../../data/quickActions';
import { QuickActionItem } from '../../types';
import { QuickActionModal } from './QuickActionModal';

interface QuickActionsProps {
  onNavigateToTab?: (tab: string) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onNavigateToTab }) => {
  const [selectedAction, setSelectedAction] = useState<QuickActionItem | null>(null);

  const getActionIcon = (iconName: string, iconColor: string) => {
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap className={`w-5 h-5 ${iconColor}`} />;
      case 'code':
        return <Code className={`w-5 h-5 ${iconColor} stroke-[2.5]`} />;
      case 'folder':
        return <Folder className={`w-5 h-5 ${iconColor}`} />;
      case 'users':
        return <Users className={`w-5 h-5 ${iconColor}`} />;
      default:
        return <Zap className={`w-5 h-5 ${iconColor}`} />;
    }
  };

  return (
    <section className="w-full">
      <SectionHeader
        title="Quick Actions"
        icon={<Zap className="w-4 h-4 text-slate-800" />}
        actionText="See All"
        onActionClick={() => setSelectedAction(quickActionItems[0])}
        className="mb-2.5"
      />

      {/* 2x2 Grid in Sidebar for optimal desktop readability & compact height */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {quickActionItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedAction(item)}
            className={`group relative flex flex-col justify-between p-3.5 rounded-[20px] border ${item.bgColor} ${item.borderColor} shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer active:scale-97 min-h-[90px]`}
          >
            {/* Top: Icon + Optional Chevron */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                {getActionIcon(item.iconName, item.iconColor)}
              </div>
              {item.hasChevron && (
                <div className="w-4 h-4 rounded-full flex items-center justify-center text-slate-400 group-hover:text-slate-600 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.4]" />
                </div>
              )}
            </div>

            {/* Bottom: Title & Subtitle */}
            <div className="mt-1">
              <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Details Modal */}
      <QuickActionModal
        action={selectedAction}
        isOpen={!!selectedAction}
        onClose={() => setSelectedAction(null)}
        onNavigateToTab={onNavigateToTab}
      />
    </section>
  );
};
