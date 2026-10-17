import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Clock, 
  Award, 
  HelpCircle,
  QrCode,
  Smartphone
} from 'lucide-react';
import { StorageService } from '../../services/storage';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import confetti from 'canvas-confetti';
import { LearnerProfile } from '../../types';

interface SubscriptionModalProps {
  isOpen: boolean;
  profile: LearnerProfile;
  onClose: () => void;
  onSuccess: (updatedProfile: LearnerProfile) => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  profile,
  onClose,
  onSuccess,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'upi' | 'qr'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleCompletePurchase = () => {
    setIsProcessing(true);
    SoundEffects.playDiscovery();

    setTimeout(() => {
      const updated = StorageService.unlockSubscription();
      setIsProcessing(false);
      SoundEffects.playMissionComplete();
      confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
      Voice.speak(`Congratulations ${profile.name || ''}! Your 2050 Data Analytics Lifetime Pass is now fully unlocked.`);
      onSuccess(updated);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-deep-space/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="max-w-2xl w-full bg-white border border-lab-900/10 rounded-3xl p-6 sm:p-8 text-left relative shadow-elevated space-y-6 max-h-[94vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close subscription modal"
          className="absolute top-5 right-5 p-2 rounded-full text-lab-400 hover:text-deep-space hover:bg-lab-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-solar-gold/20 text-deep-space border border-solar-gold/50 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-solar-gold" />
            <span>2050 DATA ANALYTICS LIFETIME MASTER PASS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-deep-space tracking-tight">
            Unlock All 4 Pillars for Just ₹999
          </h2>
          <p className="text-xs sm:text-sm text-lab-500 leading-relaxed max-w-lg">
            Stop wasting ₹20,000 on boring recorded courses. Get the futuristic 2050 interactive learning engine with direct WhatsApp doubt assistance.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="p-5 rounded-3xl bg-deep-space text-future-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-elevated">
          <div>
            <span className="text-[10px] font-mono text-quantum-teal uppercase tracking-widest block font-bold">
              ONE-TIME PAYMENT • LIFETIME ACCESS
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                ₹999
              </span>
              <span className="text-sm font-mono text-lab-400 line-through">
                ₹4,999
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                80% OFF LAUNCH
              </span>
            </div>
            <span className="text-[11px] text-lab-300 block mt-1">
              Zero monthly recurring fees. Unlimited lifetime access to all 4 courses + 2050 updates.
            </span>
          </div>

          <button
            onClick={handleCompletePurchase}
            disabled={isProcessing}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-quantum-teal text-white hover:bg-quantum-teal/90 text-xs font-bold font-mono shadow-sm flex items-center justify-center gap-2 shrink-0 transition-transform active:scale-95 disabled:opacity-50"
          >
            {isProcessing ? (
              <span>Activating Pass...</span>
            ) : (
              <>
                <span>INSTANT UNLOCK (₹999)</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* The 4 Core Courses Included */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-quantum-teal font-bold block">
            EVERYTHING YOU GET UNLOCKED INSTANTLY:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
            <div className="p-3.5 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-1">
              <div className="flex items-center gap-2 font-bold text-deep-space">
                <span className="w-2 h-2 rounded-full bg-quantum-teal" />
                <span>Python for Data Analytics & AI</span>
              </div>
              <p className="text-[11px] text-lab-500 font-sans">
                All 12 Topics: Variables, Logic, Lists, Dictionaries, Loops, Pandas, and Delivery Delay Capstone.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-1">
              <div className="flex items-center gap-2 font-bold text-deep-space">
                <span className="w-2 h-2 rounded-full bg-future-blue" />
                <span>SQL: Zero to Advanced Mastery</span>
              </div>
              <p className="text-[11px] text-lab-500 font-sans">
                All 10 Topics: SELECT, WHERE, GROUP BY, Window Functions, and multi-table JOINs on real UPI databases.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-1">
              <div className="flex items-center gap-2 font-bold text-deep-space">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Advanced Excel for Business</span>
              </div>
              <p className="text-[11px] text-lab-500 font-sans">
                All 10 Topics: $A$1 References, XLOOKUP, SUMIFS, Pivot Tables, Power Query, and KPI Dashboards.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-1">
              <div className="flex items-center gap-2 font-bold text-deep-space">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Power BI & Visual Storytelling</span>
              </div>
              <p className="text-[11px] text-lab-500 font-sans">
                All 10 Topics: ETL Data Modeling, DAX Measures (CALCULATE, DIVIDE), Slicers, and Executive UI/UX.
              </p>
            </div>
          </div>
        </div>

        {/* VIP Perks */}
        <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-deep-space font-semibold font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Direct WhatsApp VIP Doubt Support (+91 {profile.whatsappNumber || 'Your Number'})</span>
          </div>
          <div className="flex items-center gap-2 text-deep-space font-semibold font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>10 Real-World Indian Portfolio Projects (Kirana, Zomato, IPL, UPI, Board Exams)</span>
          </div>
          <div className="flex items-center gap-2 text-deep-space font-semibold font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Interactive Code Sandbox & 20-Second Interview Flashcards with Audio</span>
          </div>
          <div className="flex items-center gap-2 text-deep-space font-semibold font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Verified 2050 Certificate of Data Analytics Mastery</span>
          </div>
        </div>

        {/* UPI & Payment Options */}
        <div className="p-4 rounded-2xl bg-lab-100/60 border border-lab-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-deep-space" />
            <div>
              <span className="font-bold text-deep-space block font-mono">Supported Payment Modes:</span>
              <span className="text-lab-500 text-[11px]">Google Pay, PhonePe, Paytm, UPI ID, Net Banking, Credit/Debit Cards</span>
            </div>
          </div>

          <button
            onClick={handleCompletePurchase}
            disabled={isProcessing}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-deep-space text-white hover:bg-deep-space/90 font-mono font-semibold text-xs shrink-0 transition-transform active:scale-95"
          >
            Pay ₹999 & Unlock Now →
          </button>
        </div>

        {/* Money-Back Guarantee */}
        <div className="flex items-center justify-center gap-2 text-center text-[11px] text-lab-500 font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>7-Day 100% No-Questions-Asked Refund Guarantee if learning does not feel like 2050.</span>
        </div>

      </div>
    </div>
  );
};
