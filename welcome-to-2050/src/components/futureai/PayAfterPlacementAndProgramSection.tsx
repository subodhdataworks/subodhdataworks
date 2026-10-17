import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Volume2,
  VolumeX
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

interface PayAfterPlacementAndProgramSectionProps {
  onKnowMorePAP: () => void;
  onExploreCurriculum: () => void;
  onSelectModule?: (moduleName: string) => void;
}

export const PayAfterPlacementAndProgramSection: React.FC<PayAfterPlacementAndProgramSectionProps> = ({
  onKnowMorePAP,
  onExploreCurriculum,
  onSelectModule,
}) => {
  const { accentConfig, playHover, playClick } = useThemeAccent();
  const [isPhVideoMuted, setIsPhVideoMuted] = useState(true);
  const [isPapVideoMuted, setIsPapVideoMuted] = useState(true);

  return (
    <section id="pay-after-placement" className="py-16 bg-[#F8FAFD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ========================================================
              BLOCK A: PAY AFTER PLACEMENT (Left Column, lg:col-span-5)
             ======================================================== */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Soft Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="space-y-4">
              {/* Graphic Banner (Replaces all the old text as requested by user) */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/90 group/img bg-slate-900">
                <img
                  src="/assets/reference/pay_after_placement_banner.jpg"
                  alt="Pay After Placement - Because Your Success Matters"
                  className="w-full h-auto object-cover group-hover/img:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* New 2050 Animated Video (Replaces old video as requested by user) */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-emerald-400/30 aspect-[16/9] bg-slate-950 group/vid">
                <video
                  src="/assets/videos/pap_new_video.mp4"
                  poster="/assets/videos/pap_snap_mid.jpg"
                  autoPlay
                  loop
                  muted={isPapVideoMuted}
                  playsInline
                  className="w-full h-full object-cover group-hover/vid:scale-[1.01] transition-transform duration-500 cursor-pointer"
                  onClick={() => setIsPapVideoMuted(!isPapVideoMuted)}
                />

                {/* Top-Left Live Badge */}
                <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-emerald-300 flex items-center gap-1.5 border border-emerald-400/30 shadow-md pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>2050 Job Offer Celebration • Live Video</span>
                </div>

                {/* Top-Right Sound Toggle */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playClick();
                      setIsPapVideoMuted(!isPapVideoMuted);
                    }}
                    onMouseEnter={playHover}
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 shadow-md transition-all cursor-pointer"
                    title={isPapVideoMuted ? 'Click to Unmute Audio' : 'Mute Audio'}
                  >
                    {isPapVideoMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-300" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                </div>

                {/* Bottom Overlay Hint on Hover */}
                <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[9px] font-medium text-white/80 opacity-0 group-hover/vid:opacity-100 transition-opacity pointer-events-none flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-emerald-300" />
                  <span>{isPapVideoMuted ? 'Click video to unmute' : 'Audio active'}</span>
                </div>
              </div>

              {/* 3 Quick Benefit Pillars to balance card height */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-100/80 text-center">
                  <div className="text-[11px] font-black text-emerald-700">₹0 Upfront</div>
                  <div className="text-[10px] text-emerald-600/90 font-medium">Eligible learners</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-sky-50/70 border border-sky-100/80 text-center">
                  <div className="text-[11px] font-black text-sky-700">700+ Partners</div>
                  <div className="text-[10px] text-sky-600/90 font-medium">Placement support</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-purple-50/70 border border-purple-100/80 text-center">
                  <div className="text-[11px] font-black text-purple-700">Pay on Job</div>
                  <div className="text-[10px] text-purple-600/90 font-medium">Aligned with you</div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Exact 'Know More ->' Pill Button and Badge */}
            <div className="mt-5 pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  playClick();
                  onKnowMorePAP();
                }}
                onMouseEnter={playHover}
                className={`inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-white bg-gradient-to-r ${accentConfig.btnGradient} ${accentConfig.btnHoverGradient} shadow-md ${accentConfig.shadowClass} hover:scale-[1.02] active:scale-[0.98] transition-all text-xs sm:text-sm cursor-pointer`}
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] font-bold text-slate-700">
                <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
                <span>Your Career, Our Commitment</span>
              </div>
            </div>

          </div>

          {/* ========================================================
              BLOCK B: PROGRAM HIGHLIGHTS (Right Column, lg:col-span-7)
             ======================================================== */}
          <div id="program-highlights" className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 p-6 sm:p-8 flex flex-col justify-between">
            
            <div>
              {/* Tag */}
              <div className="text-[11px] font-bold text-[#0284C7] uppercase tracking-widest mb-2.5">
                PROGRAM HIGHLIGHTS
              </div>

              {/* Headline */}
              <h3 className="text-3xl sm:text-4xl font-black text-[#0B1528] tracking-tight leading-tight">
                Data Analyst with <span className="text-[#0284C7]">GenAI</span>
              </h3>

              {/* Subtext */}
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                A complete, job-focused program designed by industry experts to make you job-ready.
              </p>

              {/* Program Highlights Animated Video Showcase (New High-Tech 2050 Video) */}
              <div className="mt-5 relative rounded-2xl overflow-hidden shadow-xl border border-sky-400/30 aspect-[16/9] bg-slate-950 group">
                <video
                  src="/assets/videos/program_highlights_new.mp4"
                  poster="/assets/videos/new_ph_snap_mid.jpg"
                  autoPlay
                  loop
                  muted={isPhVideoMuted}
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 cursor-pointer"
                  onClick={() => setIsPhVideoMuted(!isPhVideoMuted)}
                />
                
                {/* Top-Left Futuristic Live Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-cyan-300 flex items-center gap-1.5 border border-cyan-400/30 shadow-md pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>2050 GenAI & Analytics Studio</span>
                </div>

                {/* Top-Right Sound Toggle Button */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playClick();
                      setIsPhVideoMuted(!isPhVideoMuted);
                    }}
                    onMouseEnter={playHover}
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 shadow-md transition-all cursor-pointer"
                    title={isPhVideoMuted ? 'Click to Unmute Audio' : 'Mute Audio'}
                  >
                    {isPhVideoMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-300" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
                  </button>
                </div>

                {/* Bottom Overlay Hint on Hover */}
                <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[9px] font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-cyan-300" />
                  <span>{isPhVideoMuted ? 'Click to unmute' : 'Audio active'}</span>
                </div>
              </div>
            </div>
            {/* Master Tools Banner (Replaces old sub-card, tools list, and explore curriculum button with high-res banner) */}
            <div
              onClick={() => {
                playClick();
                onExploreCurriculum();
              }}
              onMouseEnter={playHover}
              className="mt-6 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 group cursor-pointer hover:shadow-2xl transition-all duration-300"
              title="Learn with the Latest Tools Used in Top Companies - Click to Explore Curriculum"
            >
              <img
                src="/assets/reference/latest_tools_master_banner.png"
                alt="Learn with the Latest Tools Used in Top Companies - Master the complete tool stack used by modern Data Analysts powered by GenAI"
                className="w-full h-auto object-cover select-none group-hover:scale-[1.008] transition-transform duration-500"
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
