import React from 'react';
import { ShieldCheck, Award, Crown } from 'lucide-react';

export const TrustAndPartnersBar: React.FC = () => {
  return (
    <div className="py-8 sm:py-10 border-t border-slate-200/70 bg-gradient-to-b from-transparent to-slate-50/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Industry Logos Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Skills Aligned With
            </span>

            {/* Microsoft */}
            <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="bg-[#F25022]" />
                <div className="bg-[#7FBA00]" />
                <div className="bg-[#00A4EF]" />
                <div className="bg-[#FFB900]" />
              </div>
              <span className="text-xs font-black tracking-tight text-slate-700">Microsoft</span>
            </div>

            {/* Google */}
            <div className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity">
              <span className="text-sm font-black tracking-tight text-slate-800">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>

            {/* IBM */}
            <div className="flex items-center opacity-75 hover:opacity-100 transition-opacity">
              <span className="font-mono text-xs font-black tracking-widest text-[#0062FF]">
                IBM
              </span>
            </div>

            {/* AWS */}
            <div className="flex items-center gap-1 opacity-75 hover:opacity-100 transition-opacity">
              <span className="text-xs font-black tracking-tight text-[#FF9900]">aws</span>
            </div>

            {/* ISRO */}
            <div className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity">
              <div className="w-4 h-4 rounded-full bg-orange-500/20 text-orange-600 flex items-center justify-center text-[10px] font-bold">
                🚀
              </div>
              <span className="text-xs font-black tracking-tight text-slate-700">ISRO Aligned</span>
            </div>
          </div>

          {/* Secure & Trusted Badge */}
          <div className="flex items-center gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold shadow-3xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Secure & Trusted • Your data is safe with us</span>
            </div>

            {/* Handwritten 'Build Your Dream Career' Signature */}
            <div className="hidden sm:flex items-center gap-1.5 text-indigo-600 font-cursive italic text-sm font-semibold select-none">
              <span>Build Your Dream Career</span>
              <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-400 inline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
