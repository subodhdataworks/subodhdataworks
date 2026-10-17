import React from 'react';
import { ArrowRight, Zap, Laptop, Users, BarChart3, MessageCircle } from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

interface FutureCtaSectionProps {
  onStartJourney: () => void;
  onTalkToAdvisor: () => void;
}

export const FutureCtaSection: React.FC<FutureCtaSectionProps> = ({
  onStartJourney,
  onTalkToAdvisor,
}) => {
  const { playHover, playClick } = useThemeAccent();

  return (
    <section
      id="cta-section"
      className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div
        className="max-w-[1380px] mx-auto relative overflow-hidden rounded-[26px] border border-sky-200/80 shadow-[0_12px_36px_rgba(2,132,199,0.09)]"
        style={{
          background:
            'linear-gradient(90deg, #eef6ff 0%, #f5faff 35%, #ffffff 55%, #eaf4ff 100%)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 px-6 sm:px-10 py-6 lg:py-0 lg:min-h-[190px]">
          
          {/* LEFT COLUMN: Pill + Heading + Subtitle */}
          <div className="lg:col-span-4 flex flex-col items-start text-left py-2">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dcebff] border border-blue-200 text-[10.5px] font-extrabold text-[#0f2952] tracking-wider mb-2.5">
              <span className="w-4 h-4 rounded-full bg-[#0066ff] text-white inline-flex items-center justify-center shrink-0">
                <Zap className="w-2.5 h-2.5 fill-current" />
              </span>
              <span>ACCELERATE YOUR TECH JOURNEY</span>
            </div>

            {/* Heading with decorative rays */}
            <div className="relative inline-block mb-2">
              <h2 className="text-[26px] sm:text-[31px] font-black leading-[1.12] tracking-tight text-[#071536]">
                Ready to Build a
                <br />
                <span className="text-[#0080ff]">Brighter Career?</span>
              </h2>
              {/* Decorative Blue Spark Lines */}
              <svg
                className="hidden sm:block absolute -top-2 -right-6 w-6 h-6 text-[#0080ff]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <line x1="4" y1="8" x2="8" y2="2" />
                <line x1="10" y1="12" x2="18" y2="7" />
                <line x1="12" y1="17" x2="20" y2="16" />
              </svg>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed max-w-sm">
              Learn in-demand skills, work on real projects, and prepare for your next career opportunity.
            </p>
          </div>

          {/* CENTER COLUMN: 2 CTA Buttons + 3 Circular Icon Features */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-center justify-center gap-4 py-2">
            {/* Top Buttons Row */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 w-full">
              <button
                type="button"
                onClick={() => {
                  playClick();
                  onStartJourney();
                }}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#0062ff] hover:bg-[#0052d6] text-white text-xs sm:text-sm font-extrabold shadow-[0_8px_20px_rgba(0,98,255,0.28)] hover:-translate-y-0.5 transition-all cursor-pointer min-w-[185px]"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={() => {
                  playClick();
                  onTalkToAdvisor();
                }}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-white hover:bg-emerald-50/50 text-[#15803d] text-xs sm:text-sm font-extrabold border-[1.5px] border-[#22c55e] shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer min-w-[185px]"
              >
                <span className="w-6 h-6 rounded-full bg-[#22c55e] text-white inline-flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>WhatsApp Now</span>
                <ArrowRight className="w-4 h-4 text-[#16a34a] stroke-[2.5]" />
              </button>
            </div>

            {/* Bottom 3 Feature Items Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-1">
              {/* 1. Flexible Learning */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#dceeff] border border-sky-200 text-[#0284c7] flex items-center justify-center shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11.5px] font-extrabold text-[#0f172a]">Flexible</span>
                  <span className="text-[11.5px] font-extrabold text-[#0f172a]">Learning</span>
                </div>
              </div>

              <div className="hidden sm:block h-7 w-px bg-slate-200" />

              {/* 2. Expert Support */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#ede9fe] border border-purple-200 text-[#7c3aed] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11.5px] font-extrabold text-[#0f172a]">Expert</span>
                  <span className="text-[11.5px] font-extrabold text-[#0f172a]">Support</span>
                </div>
              </div>

              <div className="hidden sm:block h-7 w-px bg-slate-200" />

              {/* 3. Career Guidance */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#d1fae5] border border-emerald-200 text-[#059669] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11.5px] font-extrabold text-[#0f172a]">Career</span>
                  <span className="text-[11.5px] font-extrabold text-[#0f172a]">Guidance</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Video Artwork from Drive */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end h-full py-2">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-white/60 h-[170px] w-full max-w-[280px] bg-slate-900">
              <video
                src="/videos/accelerate_journey_video.mp4?v=3"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

