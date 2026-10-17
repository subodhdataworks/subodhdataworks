import React, { useState } from 'react';
import { Sparkles, ArrowRight, Phone, User, CheckCircle2, ShieldCheck } from 'lucide-react';
import { StorageService } from '../../services/storage';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import { LearnerProfile } from '../../types';

interface WhatsAppLoginModalProps {
  isOpen: boolean;
  onLoginSuccess: (profile: LearnerProfile) => void;
  onClose?: () => void;
}

export const WhatsAppLoginModal: React.FC<WhatsAppLoginModalProps> = ({
  isOpen,
  onLoginSuccess,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    if (cleanNumber.length < 10) {
      setError('Please enter a valid 10-digit WhatsApp phone number');
      return;
    }

    SoundEffects.playBreakthrough();
    const updated = StorageService.loginWithWhatsApp(name.trim(), cleanNumber);
    Voice.speak(`Welcome ${name}! Your 2050 Data Analytics Journey starts now.`);
    onLoginSuccess(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-space/70 backdrop-blur-md animate-fadeIn">
      <div className="max-w-md w-full bg-white border border-lab-900/10 rounded-3xl p-6 sm:p-8 text-left shadow-elevated space-y-6 relative overflow-hidden">
        {/* Top ambient glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-quantum-teal/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lab-100 text-deep-space border border-lab-900/10 text-[11px] font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
            <span>INSTANT 2050 LOGIN</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-deep-space tracking-tight">
            Start Learning in 2050
          </h2>
          <p className="text-xs text-lab-500 leading-relaxed">
            Enter your Name & WhatsApp Number to unlock free instant access to Python, SQL, Excel & Power BI.
          </p>
        </div>

        {/* Features Checklist */}
        <div className="p-3.5 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-1.5 text-xs font-mono text-deep-space">
          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>First 3 Topics of all 4 Courses 100% FREE</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Interactive 2050 Visual Simulation Engines</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Zero Password Hassle • Instant Auto-Save</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-lab-500 font-medium">Your Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-lab-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError(null);
                }}
                placeholder="e.g. Rahul Sharma"
                className="w-full pl-10 pr-4 py-2.5 bg-lab-50 text-xs text-deep-space rounded-xl border border-lab-200 focus:outline-none focus:border-quantum-teal transition-all font-medium"
                autoFocus
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono text-lab-500 font-medium">WhatsApp Number (For Instant Access & Doubt Support)</label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-xs font-mono text-lab-400 font-semibold">+91</span>
              <input
                type="tel"
                value={whatsappNumber}
                onChange={(e) => {
                  setWhatsappNumber(e.target.value);
                  setError(null);
                }}
                placeholder="98765 43210"
                maxLength={10}
                className="w-full pl-12 pr-4 py-2.5 bg-lab-50 text-xs text-deep-space rounded-xl border border-lab-200 focus:outline-none focus:border-quantum-teal transition-all font-mono font-medium"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-signal-coral font-medium animate-fadeIn">
              ⚠️ {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-semibold tracking-wide shadow-elevated flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>ENTER THE FUTURE & START FREE</span>
            <ArrowRight className="w-4 h-4 text-quantum-teal" />
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-[10px] text-lab-400 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Your number is safe. No spam ever. Used only for your learning profile.</span>
        </div>
      </div>
    </div>
  );
};
