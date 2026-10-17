import React from 'react';
import { Users, Star, BookOpen, Target } from 'lucide-react';

export const TrustedBanner: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Happy Learners',
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Average Rating',
    },
    {
      icon: BookOpen,
      value: '90+',
      label: 'Lessons & Projects',
    },
    {
      icon: Target,
      value: '100%',
      label: 'Job Ready Focus',
    },
  ];

  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#080E24] via-[#0E173D] to-[#080E24] border border-blue-900/40 p-6 sm:p-8 lg:p-10 shadow-2xl text-white">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Graphic + Text */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 text-center sm:text-left max-w-2xl">
              {/* Mountain Summit Graphic */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-blue-400/30 shadow-lg shadow-blue-500/15 bg-blue-950/60">
                <img
                  src="/assets/mountain-summit.jpg"
                  alt="Mountain Summit Achievement"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Banner Text */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight text-white mb-1.5">
                  Trusted by Learners Worldwide
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Join thousands of learners who are building their data analyst careers with Mentor AI.
                </p>
              </div>
            </div>

            {/* Right Stat Items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-700/60 lg:pl-8">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-400/20 flex items-center justify-center text-blue-400">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
