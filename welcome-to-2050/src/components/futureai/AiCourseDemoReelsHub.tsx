import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Home,
  ChevronRight,
  Play,
  ArrowRight,
  X,
  ExternalLink,
  Plus,
  Trash2,
  Edit3,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  CheckCircle2,
  Settings,
  AlertCircle,
  Film,
  Sparkles,
  Smartphone,
  Clapperboard,
  Sliders,
  Layers,
  Video,
  ShoppingBag,
  CreditCard,
  Database,
  Mic,
  Scissors,
  ShieldCheck,
} from 'lucide-react';
import {
  InstagramReelItem,
  fetchCourseInstagramReels,
  addInstagramReel,
  updateInstagramReel,
  deleteInstagramReel,
  reorderInstagramReels,
  parseInstagramReelUrl,
} from '../../services/instagramReelsService';
import {
  isCourseUnlocked,
  unlockCourse,
  verifyAndUnlockWithProof,
} from '../../services/courseUnlockService';
import {
  startRazorpayCheckout,
  getCurrentUserForPayment,
} from '../../services/razorpayService';

declare global {
  interface Window {
    Razorpay?: any;
  }
}

export type SupportedAiCourseId = 'ai_website_dev' | 'ai_android_dev' | 'ai_video_creation';

export interface AiCourseDemoReelsHubProps {
  courseId: SupportedAiCourseId;
  userName?: string;
  onBack: () => void;
  onOpenEnrollModal?: (courseId: string, courseTitle: string) => void;
  onOpenLogin?: () => void;
}

/** Authentic Instagram Gradient Icon SVG */
const InstagramBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <defs>
      <radialGradient id="igGradHub" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#igGradHub)" />
    <rect
      x="5.2"
      y="5.2"
      width="13.6"
      height="13.6"
      rx="3.8"
      stroke="#ffffff"
      strokeWidth="1.6"
    />
    <circle cx="12" cy="12" r="3.2" stroke="#ffffff" strokeWidth="1.6" />
    <circle cx="16.2" cy="7.8" r="1" fill="#ffffff" />
  </svg>
);

/** 1. Compact Laptop Illustration for AI Website Course */
const AiWebsiteBuilderLaptopIllustration: React.FC = () => (
  <div className="relative flex items-center justify-center select-none pointer-events-none py-1">
    <div className="w-56 h-32 bg-blue-500/15 rounded-full blur-2xl absolute" />
    <div className="relative w-[240px] sm:w-[270px] xl:w-[295px]">
      {/* Floating AI Gradient Badge */}
      <div className="absolute -top-3 -right-3 z-20 px-2.5 py-1 rounded-xl bg-gradient-to-br from-[#6366f1] via-[#4f46e5] to-[#2563eb] text-white font-black text-xs sm:text-sm shadow-xl shadow-indigo-500/35 border border-white/70 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>AI</span>
      </div>

      {/* Screen Enclosure */}
      <div className="rounded-t-2xl bg-slate-900 p-2.5 border-2 border-slate-800 shadow-2xl">
        <div className="rounded-xl bg-gradient-to-br from-white via-slate-50 to-blue-50/70 p-3 border border-slate-200/80 space-y-2">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between border-b border-slate-200/70 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[8px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              ai-website-builder.app
            </span>
          </div>

          {/* Screen Content Preview */}
          <div className="text-left space-y-1.5">
            <div className="text-[11px] sm:text-[12px] font-black text-slate-900 leading-tight">
              Create Your Website
              <br />
              <span className="text-[#0066ff]">with AI</span>
            </div>

            <div className="grid grid-cols-12 gap-2 items-center pt-0.5">
              <div className="col-span-5 rounded-lg bg-blue-50/90 border border-blue-200/70 p-1.5 flex flex-col gap-1">
                <div className="w-full h-6 rounded bg-gradient-to-r from-blue-500 to-indigo-500 opacity-90" />
                <div className="w-3/4 h-1.5 rounded bg-blue-200" />
              </div>
              <div className="col-span-7 rounded-lg bg-indigo-50/70 border border-indigo-200/60 p-1.5 space-y-1 relative">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-indigo-500/20 border border-indigo-400/40 shrink-0" />
                  <div className="space-y-0.5 flex-1">
                    <div className="w-full h-1.5 rounded bg-indigo-300" />
                    <div className="w-2/3 h-1 rounded bg-indigo-200" />
                  </div>
                </div>
                <div className="w-14 h-3 rounded bg-[#0066ff] shadow-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base & Trackpad */}
      <div className="h-3 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 rounded-b-2xl mx-auto w-[108%] -ml-[4%] shadow-lg flex items-center justify-center">
        <div className="w-12 h-1 rounded-full bg-slate-400/80" />
      </div>
    </div>
  </div>
);

/** 2. Compact Smartphone Mockup for AI Android App Course */
const AiAndroidPhoneIllustration: React.FC = () => (
  <div className="relative flex items-center justify-center select-none pointer-events-none py-1">
    <div className="w-44 h-28 bg-emerald-500/15 rounded-full blur-2xl absolute" />
    <div className="relative w-[155px] sm:w-[170px]">
      <div className="absolute -top-2.5 -right-2.5 z-20 px-2.5 py-1 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black text-sm shadow-lg shadow-emerald-500/30 border border-white/60 flex items-center gap-1">
        <Smartphone className="w-3.5 h-3.5 text-amber-300" />
        <span>APK</span>
      </div>

      <div className="rounded-[28px] bg-slate-950 p-2 border-2 border-slate-800 shadow-xl">
        <div className="rounded-[22px] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-2.5 border border-slate-800/80 space-y-2 text-left">
          {/* Status Bar */}
          <div className="flex items-center justify-between text-[7px] text-slate-400 font-bold px-1">
            <span>9:41</span>
            <div className="w-2 h-2 rounded-full bg-black border border-slate-700" />
            <span>5G 100%</span>
          </div>

          {/* App Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-xl text-white space-y-0.5">
            <span className="text-[7.5px] font-black uppercase tracking-wider block opacity-85">
              Android Studio + AI
            </span>
            <div className="text-[10px] font-black leading-tight">PulseAI App v2.4</div>
          </div>

          {/* Feature Chips Inside Phone */}
          <div className="space-y-1">
            <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
              <span className="text-[8px] font-bold text-slate-200">Firebase Auth</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
              <span className="text-[8px] font-bold text-slate-200">Razorpay In-App SDK</span>
              <span className="text-[7px] font-black text-blue-400">ACTIVE</span>
            </div>
            <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
              <span className="text-[8px] font-bold text-slate-200">Play Store Publishing</span>
              <span className="text-[7px] font-black text-emerald-400">READY</span>
            </div>
          </div>

          {/* Bottom Nav Bar Inside Phone */}
          <div className="pt-0.5 border-t border-slate-800 flex items-center justify-around text-slate-500">
            <div className="w-3 h-3 rounded bg-emerald-500" />
            <div className="w-3 h-3 rounded bg-slate-700" />
            <div className="w-3 h-3 rounded bg-slate-700" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/** 3. Compact Cinematic Studio Editing Mockup for AI Video Creation Course */
const AiVideoCreationStudioIllustration: React.FC = () => (
  <div className="relative flex items-center justify-center select-none pointer-events-none py-1">
    <div className="w-48 h-28 bg-rose-500/15 rounded-full blur-2xl absolute" />
    <div className="relative w-[230px] sm:w-[255px]">
      <div className="absolute -top-2.5 -right-2.5 z-20 px-2.5 py-1 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 text-white font-black text-sm shadow-lg shadow-rose-500/30 border border-white/60 flex items-center gap-1">
        <Clapperboard className="w-3.5 h-3.5 text-amber-200" />
        <span>4K AI</span>
      </div>

      <div className="rounded-xl bg-slate-950 p-2 border-2 border-slate-800 shadow-xl space-y-1.5 text-left">
        {/* Top Studio Video Frame Preview */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
          <img
            src="/images/pot10_ai_video_poster.jpg"
            alt="AI Video Studio"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          <div className="absolute center w-7 h-7 rounded-full bg-white/25 backdrop-blur-md border border-white/60 flex items-center justify-center">
            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
          </div>
          <div className="absolute bottom-1.5 left-2 text-[8px] font-black text-white">
            Cinematic AI Actor • Lip Sync 4K
          </div>
        </div>

        {/* Multi-Track Audio & Video Timeline */}
        <div className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-[7.5px] text-slate-400 font-mono">
            <span>00:00:18:24</span>
            <span className="text-rose-400 font-bold">REC 60 FPS</span>
          </div>
          <div className="space-y-0.5">
            {/* Track 1: AI Video Cuts */}
            <div className="h-2 rounded bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-full" />
            {/* Track 2: Realistic AI Voice */}
            <div className="h-1.5 rounded bg-gradient-to-r from-amber-400 to-orange-500 w-4/5" />
            {/* Track 3: Cinematic BGM / SFX */}
            <div className="h-1.5 rounded bg-gradient-to-r from-emerald-400 to-teal-500 w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Panoramic Story-Based Hero Artwork
 * Communicates the 3-moment transformation story:
 * 1. BEGINNING — Learner creating with AI
 * 2. PROGRESS — Working project taking shape
 * 3. OUTCOME — Finished project presented to a business client
 */
const StoryBasedHeroArtwork: React.FC<{
  imageUrl: string;
  altText: string;
  storyHeadline: string;
}> = ({ imageUrl, altText, storyHeadline }) => (
  <div className="relative w-full max-w-[430px] mx-auto select-none group" data-testid="story-hero-artwork">
    {/* Soft Ambient Glow */}
    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/25 via-indigo-500/20 to-purple-500/25 blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none" />

    {/* Panoramic Card Container */}
    <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.12)] group-hover:shadow-[0_8px_26px_rgba(15,23,42,0.18)] transition-all duration-300">
      {/* 16:9 Aspect Ratio for Cinematic Photography */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
          loading="eager"
        />
        {/* Subtle Dark Vignette & Bottom Gradient for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent pointer-events-none" />

        {/* Top Badges: Real Client Delivery */}
        <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9.5px] font-black tracking-wide shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Real Client Delivery</span>
        </div>

        {/* Bottom 3-Moment Transformation Timeline */}
        <div className="absolute bottom-2 inset-x-2 z-10 flex items-center justify-between gap-1 px-2.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-[9.5px] font-bold text-white shadow-sm">
          <span className="text-slate-200 flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[8px] flex items-center justify-center text-white font-black">
              1
            </span>
            <span>AI Build</span>
          </span>
          <span className="text-slate-500 text-[8px]">➔</span>
          <span className="text-slate-200 flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded-full bg-indigo-500 text-[8px] flex items-center justify-center text-white font-black">
              2
            </span>
            <span>Live Project</span>
          </span>
          <span className="text-slate-500 text-[8px]">➔</span>
          <span className="text-emerald-300 flex items-center gap-1 font-extrabold">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-[8px] flex items-center justify-center text-white font-black">
              3
            </span>
            <span>Win Client</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);


export interface FeaturePill {
  label: string;
  iconName: string;
  colorClass: string;
}

const getFeatureIcon = (name: string): React.ElementType => {
  switch (name) {
    case 'laptop': return Layers;
    case 'cart': return ShoppingBag;
    case 'card': return CreditCard;
    case 'database': return Database;
    case 'phone': return Smartphone;
    case 'shield': return ShieldCheck;
    case 'playstore': return Sparkles;
    case 'video': return Video;
    case 'sparkles': return Sparkles;
    case 'mic': return Mic;
    case 'clapper': return Clapperboard;
    case 'scissors': return Scissors;
    default: return Sparkles;
  }
};

interface CoursePageConfig {
  badgeLabel?: string;
  titlePrefix: string;
  highlightText: string;
  titleSuffix: string;
  description: string;
  priceNum: number;
  priceText: string;
  galleryTitle: string;
  gallerySubtitle: string;
  storyHeadline: string;
  storyImageUrl: string;
  storyAlt: string;
  illustration: React.ReactNode;
  bannerImage: string;
  ctaGradient: string;
  accentColor: string;
  featurePills: FeaturePill[];
}

export const AiCourseDemoReelsHub: React.FC<AiCourseDemoReelsHubProps> = ({
  courseId,
  userName,
  onBack,
  onOpenEnrollModal,
  onOpenLogin,
}) => {
  const config = useMemo<CoursePageConfig>(() => {
    if (courseId === 'ai_android_dev') {
      const storyHeadline = 'Turn Ideas Into Apps. Build for Clients.';
      const storyImageUrl = '/images/banners/ai_app_builder_pro_hero_banner.jpg';
      const storyAlt =
        'From Ideas to Professional Mobile Apps - AI App Builder Pro';
      return {
        titlePrefix: 'AI App Builder ',
        highlightText: 'Pro',
        titleSuffix: '',
        badgeLabel: 'Build in 10 Minutes',
        description:
          'Learn to build a professional Android app using AI — including app design, authentication, database, payment integration and deployment.',
        priceNum: 2499,
        priceText: '₹2,499',
        galleryTitle: 'Android App Demo Reels',
        gallerySubtitle:
          'Watch real Android app demos, AI-powered app development workflows and practical project previews.',
        storyHeadline,
        storyImageUrl,
        storyAlt,
        illustration: <AiAndroidPhoneIllustration />,
        bannerImage: '/images/banners/ai_app_builder_pro_hero_banner.jpg?v=4to1_v2',
        ctaGradient: 'bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:from-[#6d28d9] hover:to-[#1d4ed8]',
        accentColor: '#7c3aed',
        featurePills: [
          { label: 'App Design with AI', iconName: 'phone', colorClass: 'border-purple-200/80 bg-purple-50/70 text-purple-700' },
          { label: 'Authentication (Login/Signup)', iconName: 'shield', colorClass: 'border-pink-200/80 bg-pink-50/70 text-pink-700' },
          { label: 'Payment Integration', iconName: 'card', colorClass: 'border-blue-200/80 bg-blue-50/70 text-blue-700' },
          { label: 'Play Store Publishing', iconName: 'playstore', colorClass: 'border-emerald-200/80 bg-emerald-50/70 text-emerald-700' },
        ],
      };
    }

    if (courseId === 'ai_video_creation') {
      const storyHeadline = 'Create Videos. Bring Brands to Life.';
      const storyImageUrl = '/images/banners/ai_video_creator_pro_hero_banner.jpg';
      const storyAlt =
        'From Creative Ideas to Professional Brand Videos - AI Video Creator Pro';
      return {
        titlePrefix: 'AI Video Creator ',
        highlightText: 'Pro',
        titleSuffix: '',
        badgeLabel: 'Cinematic 4K AI',
        description:
          'Learn to create cinematic, realistic AI-generated videos using text-to-video, image-to-video, AI characters, voiceovers, lip-sync and professional editing.',
        priceNum: 999,
        priceText: '₹999',
        galleryTitle: 'AI Video Demo Reels',
        gallerySubtitle:
          'Explore realistic AI-generated videos, cinematic scenes, creative advertisements and professional video examples.',
        storyHeadline,
        storyImageUrl,
        storyAlt,
        illustration: <AiVideoCreationStudioIllustration />,
        bannerImage: '/images/banners/ai_video_creator_pro_hero_banner.jpg?v=4to1_v2',
        ctaGradient: 'bg-gradient-to-r from-[#0284c7] to-[#8b5cf6] hover:from-[#0369a1] hover:to-[#7c3aed]',
        accentColor: '#0284c7',
        featurePills: [
          { label: 'Text to Video', iconName: 'video', colorClass: 'border-blue-200/80 bg-blue-50/70 text-blue-700' },
          { label: 'Image to Video', iconName: 'sparkles', colorClass: 'border-pink-200/80 bg-pink-50/70 text-pink-700' },
          { label: 'AI Voiceover', iconName: 'mic', colorClass: 'border-purple-200/80 bg-purple-50/70 text-purple-700' },
          { label: 'AI Characters', iconName: 'clapper', colorClass: 'border-teal-200/80 bg-teal-50/70 text-teal-700' },
          { label: 'Video Editing', iconName: 'scissors', colorClass: 'border-amber-200/80 bg-amber-50/70 text-amber-700' },
        ],
      };
    }

    // Default: ai_website_dev
    const storyHeadline = 'Build Websites. Win Client Projects.';
    const storyImageUrl = '/images/banners/ai_website_builder_pro_hero_banner.jpg';
    const storyAlt =
      'One Developer, Unlimited Website Possibilities - AI Website Builder Pro';
    return {
      titlePrefix: 'AI Website Builder ',
      highlightText: 'Pro',
      titleSuffix: '',
      badgeLabel: 'Build in 10 Minutes',
      description:
        'Learn to build and launch a professional AI-powered website with shopping cart, payment gateway, database and live deployment.',
      priceNum: 2999,
      priceText: '₹2,999',
      galleryTitle: 'Demo Reels',
      gallerySubtitle:
        'Watch real website demos, AI development workflows and live project previews.',
      storyHeadline,
      storyImageUrl,
      storyAlt,
      illustration: <AiWebsiteBuilderLaptopIllustration />,
      bannerImage: '/images/banners/ai_website_builder_pro_hero_banner.jpg?v=4to1_v2',
      ctaGradient: 'bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#c2410c] hover:to-[#d97706]',
      accentColor: '#ea580c',
      featurePills: [
        { label: 'Build Website with AI', iconName: 'laptop', colorClass: 'border-indigo-200/80 bg-indigo-50/70 text-indigo-700' },
        { label: 'Add Shopping Cart', iconName: 'cart', colorClass: 'border-pink-200/80 bg-pink-50/70 text-pink-700' },
        { label: 'Payment Gateway', iconName: 'card', colorClass: 'border-cyan-200/80 bg-cyan-50/70 text-cyan-700' },
        { label: 'Database & Live Deploy', iconName: 'database', colorClass: 'border-emerald-200/80 bg-emerald-50/70 text-emerald-700' },
      ],
    };
  }, [courseId]);

  const fullCourseTitle = `${config.titlePrefix}${config.highlightText}${config.titleSuffix}`;

  const [reels, setReels] = useState<InstagramReelItem[]>([]);
  const [isLoadingReels, setIsLoadingReels] = useState<boolean>(true);
  const [activeModalReel, setActiveModalReel] = useState<InstagramReelItem | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(28);

  // Enrollment & Payment State
  const [isEnrolled, setIsEnrolled] = useState<boolean>(() => isCourseUnlocked(courseId));
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [payError, setPayError] = useState<string | null>(null);

  const loadReels = useCallback(
    async (force = false) => {
      setIsLoadingReels(true);
      const items = await fetchCourseInstagramReels(courseId, force);
      setReels(items);
      setIsLoadingReels(false);
    },
    [courseId]
  );

  useEffect(() => {
    setIsEnrolled(isCourseUnlocked(courseId));
    loadReels(false);
    const handleSync = () => {
      setIsEnrolled(isCourseUnlocked(courseId));
      loadReels(false);
    };
    window.addEventListener('futureai_reels_updated', handleSync);
    window.addEventListener('futureai_course_unlocked', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('futureai_reels_updated', handleSync);
      window.removeEventListener('futureai_course_unlocked', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, [courseId, loadReels]);

  // Lock background scroll & support Escape key when Reel Playback Modal is open
  useEffect(() => {
    if (!activeModalReel) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalReel(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalReel]);

  const openReelModal = (reel: InstagramReelItem) => {
    setIframeLoaded(false);
    setActiveModalReel(reel);
  };

  // Existing Future IT Industry Enrollment & Razorpay Checkout Integration
  const handleEnrollNow = async () => {
    setPayError(null);
    if (isEnrolled) return;

    const user = getCurrentUserForPayment();
    if (!user.isLoggedIn || !user.userId) {
      if (onOpenLogin) {
        onOpenLogin();
      } else if (onOpenEnrollModal) {
        onOpenEnrollModal(courseId, fullCourseTitle);
      } else {
        window.dispatchEvent(new CustomEvent('futureai_open_login'));
      }
      return;
    }

    setIsProcessingPayment(true);
    try {
      const result = await startRazorpayCheckout({
        amount: config.priceNum,
        courseId,
        courseTitle: fullCourseTitle,
        userId: user.userId,
        name: user.name || 'Student',
        email: user.email || user.userId,
        phone: user.phone || undefined,
      });

      if (result.entitlementProof && result.verifiedAt) {
        const verifiedOnServer = await verifyAndUnlockWithProof({
          userId: user.userId,
          paymentId: result.paymentId,
          orderId: result.orderId,
          courseId,
          verifiedAt: result.verifiedAt,
          entitlementProof: result.entitlementProof,
        });
        if (!verifiedOnServer) {
          unlockCourse(courseId, {
            userId: user.userId,
            paymentId: result.paymentId,
            orderId: result.orderId,
            paymentStatus: 'CAPTURED',
            enrollmentStatus: 'ACTIVE',
            source: 'PAYMENT',
          });
        }
      } else {
        unlockCourse(courseId, {
          userId: user.userId,
          paymentId: result.paymentId,
          orderId: result.orderId,
          paymentStatus: 'CAPTURED',
          enrollmentStatus: 'ACTIVE',
          source: 'PAYMENT',
        });
      }

      setIsEnrolled(true);
      setIsProcessingPayment(false);
    } catch (err: any) {
      const msg = String(err?.message || '');
      if (!msg.toLowerCase().includes('cancelled')) {
        setPayError(msg || 'Unable to start payment checkout.');
      }
      setIsProcessingPayment(false);
    }
  };

  const publishedReels = reels.filter((r) => r.published);
  const displayedReels = publishedReels.slice(0, visibleCount);
  const remainingReelsCount = Math.max(0, publishedReels.length - displayedReels.length);

  return (
    <div
      className="w-full min-h-screen bg-[#f4f7fb] pb-10 font-sans select-none"
      data-testid={`ai-course-reels-page-${courseId}`}
    >
      <div className="max-w-[1432px] mx-auto px-3 sm:px-5 lg:px-6 pt-2 sm:pt-3 space-y-5 sm:space-y-6">
        {/* ═══════════════════════════════════════════════════════════════════════════
            1. COMPACT 4:1 LIVE COURSE HERO BANNER (280–320PX DESKTOP HEIGHT, NO CROP)
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section
          className="relative w-full rounded-2xl sm:rounded-[20px] overflow-hidden bg-gradient-to-r from-white via-[#FAF8FF] to-[#F3EEFF] border border-violet-200/80 shadow-[0_4px_20px_rgba(109,40,217,0.06)] hover:shadow-[0_8px_28px_rgba(109,40,217,0.10)] transition-all duration-200 select-none cursor-pointer group"
          onClick={handleEnrollNow}
          title={isEnrolled ? 'Already Enrolled' : 'Click to Enroll in Live Course'}
          data-testid="ai-course-cinematic-hero"
        >
          <img
            src={config.bannerImage}
            alt={fullCourseTitle}
            className="w-full max-h-[305px] object-contain mx-auto block group-hover:scale-[1.003] transition-transform duration-300"
            loading="eager"
            decoding="async"
          />
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════
            2. INSTAGRAM DEMO REELS GALLERY
            - Clean white gallery container
            - 9:16 vertical cards, rounded corners, centered Play button, Instagram corner icon
            - Wide desktop: 5–7 cards | Laptop: 4–5 | Tablet: 3 | Mobile: 2
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section
          className="rounded-[24px] bg-white border border-slate-200/85 shadow-[0_4px_24px_rgba(15,23,42,0.04)] p-4 sm:p-6 space-y-4"
          data-testid="instagram-demo-reels-gallery"
        >
          {/* Gallery Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2.5 flex-wrap">
                <InstagramBrandIcon className="w-7 h-7 shrink-0" />
                <h2
                  className="text-lg sm:text-xl font-black text-slate-900 tracking-tight"
                  data-testid="gallery-header-title"
                >
                  {config.galleryTitle}
                  {publishedReels.length > 0 ? ` (${publishedReels.length})` : ''}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/70 text-[11px] font-bold">
                  Instagram Videos
                </span>
              </div>
              <p
                className="text-xs sm:text-[13px] text-slate-500 font-medium"
                data-testid="gallery-header-subtitle"
              >
                {config.gallerySubtitle}
              </p>
            </div>

            <div className="flex items-center gap-2.5 self-start sm:self-center shrink-0">
              {publishedReels.length > 0 && (
                <div className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-full">
                  <Play className="w-3.5 h-3.5 text-[#0066ff] fill-[#0066ff]" />
                  <span>
                    Watch {publishedReels.length} short demo {publishedReels.length === 1 ? 'video' : 'videos'} of this course
                  </span>
                </div>
              )}


            </div>
          </div>

          {/* ─── REELS GALLERY GRID (9:16 Vertical Cards) ─── */}
          {isLoadingReels ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-3.5">
              {Array.from({ length: 7 }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-[9/16] rounded-2xl bg-slate-100 animate-pulse border border-slate-200/70"
                />
              ))}
            </div>
          ) : publishedReels.length === 0 ? (
            <div
              className="rounded-2xl bg-slate-50/80 border border-dashed border-slate-300 p-8 sm:p-10 text-center space-y-3"
              data-testid="empty-reels-state"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mx-auto">
                <InstagramBrandIcon className="w-6 h-6" />
              </div>
              <div className="space-y-1 max-w-md mx-auto">
                <h3 className="text-base font-black text-slate-900">
                  No Instagram Demo Reels Published Yet
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Demo videos for this course are currently being updated. Please check back shortly.
                </p>
              </div>
            </div>
          ) : (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-3.5"
              data-testid="reels-grid-container"
            >
              {displayedReels.map((reel) => (
                <button
                  key={reel.id}
                  type="button"
                  onClick={() => openReelModal(reel)}
                  data-testid="reel-gallery-card"
                  data-reel-id={reel.id}
                  className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_2px_10px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
                >
                  {/* Thumbnail Preview (or sleek vertical studio cover if no custom image URL was supplied) */}
                  {reel.thumbnailUrl ? (
                    <img
                      src={reel.thumbnailUrl}
                      alt={reel.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e3a8a] flex flex-col items-center justify-center p-4 relative">
                      <div className="w-24 h-24 rounded-full bg-blue-500/15 blur-xl absolute" />
                      <Film className="w-8 h-8 text-blue-400/40 mb-8" />
                    </div>
                  )}

                  {/* Subtle Dark Gradient Overlay for Readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/15" />

                  {/* Top-Left Instagram Icon Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10 w-6 h-6 rounded-lg bg-black/35 backdrop-blur-md p-0.5 flex items-center justify-center border border-white/20">
                    <InstagramBrandIcon className="w-full h-full" />
                  </div>

                  {/* Centered Play Button */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-black/45 group-hover:bg-[#0066ff] backdrop-blur-md border-2 border-white/85 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-250">
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Reel Title & Optional Duration */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-3 flex flex-col items-center text-center">
                    <h3 className="text-xs sm:text-[12.5px] font-black text-amber-300 leading-snug line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] text-center">
                      {reel.title}
                    </h3>
                    {reel.durationLabel && (
                      <span className="mt-1 self-end px-1.5 py-0.5 rounded bg-black/65 text-white text-[9.5px] font-bold">
                        {reel.durationLabel}
                      </span>
                    )}
                  </div>
                </button>
              ))}

              {/* Progressive Load "+More Reels" Tile */}
              {remainingReelsCount > 0 && (
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 28)}
                  className="aspect-[9/16] w-full rounded-2xl bg-gradient-to-br from-[#4f46e5] via-[#6d28d9] to-[#4338ca] text-white p-4 flex flex-col items-center justify-center text-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                  <div className="text-xl font-black leading-none">+{remainingReelsCount}</div>
                  <div className="text-xs font-bold text-white/90">More Reels</div>
                  <div className="text-[10px] text-white/75 font-semibold">
                    (Total {publishedReels.length})
                  </div>
                </button>
              )}
            </div>
          )}
        </section>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════
          3. INSTAGRAM REEL PLAYBACK MODAL (9:16 Vertical Embed + Watch on Instagram)
         ═══════════════════════════════════════════════════════════════════════════ */}
      {activeModalReel && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          onClick={() => setActiveModalReel(null)}
          data-testid="instagram-reel-modal"
        >
          <div
            className="relative w-full max-w-[390px] bg-slate-900 rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
            data-testid="reel-modal-container"
          >
            {/* Modal Top Header */}
            <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <InstagramBrandIcon className="w-5 h-5 shrink-0" />
                <span className="text-xs font-black text-white truncate">
                  {activeModalReel.title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalReel(null)}
                aria-label="Close video modal"
                data-testid="close-reel-modal-btn"
                className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 9:16 Vertical Official Instagram Embed Container */}
            <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-400 text-xs">
                  <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
                  <span>Loading Instagram Reel...</span>
                </div>
              )}

              <iframe
                key={activeModalReel.id}
                src={activeModalReel.embedUrl}
                title={activeModalReel.title}
                className="w-full h-full border-0 bg-black"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                onLoad={() => setIframeLoaded(true)}
              />
            </div>

            {/* Fallback / Direct Watch on Instagram Bar */}
            <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>If embed is restricted by browser:</span>
              </span>

              <a
                href={activeModalReel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="watch-on-instagram-link"
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#fd5949] via-[#d6249f] to-[#285AEB] text-white font-bold text-xs inline-flex items-center gap-1.5 shrink-0 hover:opacity-95 transition-opacity"
              >
                <span>Watch on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiCourseDemoReelsHub;
