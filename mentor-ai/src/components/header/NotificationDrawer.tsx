import React from 'react';
import { Flame, Bot, BookOpen, Check } from 'lucide-react';
import { Modal } from '../common/Modal';
import { mockNotifications } from '../../data/notifications';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Notifications">
      <div className="space-y-3">
        {mockNotifications.map((n) => (
          <div
            key={n.id}
            className={`p-3.5 rounded-2xl border transition-all ${
              n.read
                ? 'bg-slate-50/60 border-slate-150 text-slate-600'
                : 'bg-indigo-50/40 border-indigo-100 text-slate-800'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-white shadow-xs border border-slate-150 flex items-center justify-center shrink-0 mt-0.5">
                {n.type === 'streak' && <Flame className="w-4 h-4 text-amber-500" />}
                {n.type === 'ai' && <Bot className="w-4 h-4 text-indigo-500" />}
                {n.type === 'lesson' && <BookOpen className="w-4 h-4 text-teal-500" />}
                {n.type === 'challenge' && <Check className="w-4 h-4 text-emerald-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {n.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium shrink-0">
                    {n.time}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {n.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};
