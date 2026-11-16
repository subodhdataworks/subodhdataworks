import React, { useState, useEffect, useCallback } from 'react';
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

export interface AiWebsiteCourseReelsPageProps {
  userName?: string;
  onBack: () => void;
  onOpenEnrollModal?: (courseId: string, courseTitle: string) => void;
  onOpenLogin?: () => void;
}

const COURSE_ID = 'ai_website_dev';
const COURSE_TITLE = 'Build & Launch a Website with AI in 10 Minutes';
const COURSE_PRICE = 2999;

/** Authentic Instagram Gradient Icon SVG */
const InstagramBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <defs>
      <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#igGrad)" />
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

/** Compact Vector Laptop Illustration matching the Reference Hero */
const AiWebsiteBuilderLaptopIllustration: React.FC = () => (
  <div className="relative flex items-center justify-center select-none pointer-events-none py-1">
    {/* Soft ambient glow behind laptop */}
    <div className="w-44 h-28 bg-blue-500/15 rounded-full blur-2xl absolute" />

    <div className="relative w-[220px] sm:w-[245px]">
      {/* Floating AI Badge (Top Right of Screen) */}
      <div className="absolute -top-2.5 -right-2.5 z-20 px-2.5 py-1 rounded-xl bg-gradient-to-br from-[#6366f1] via-[#4f46e5] to-[#2563eb] text-white font-black text-sm shadow-lg shadow-indigo-500/30 border border-white/60 flex items-center gap-1">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>AI</span>
      </div>

      {/* Laptop Lid / Bezel */}
      <div className="rounded-t-xl bg-slate-900 p-2 border-2 border-slate-800 shadow-xl">
        <div className="rounded-lg bg-gradient-to-br from-white via-slate-50 to-blue-50/70 p-2.5 border border-slate-200/80 space-y-2">
          {/* Mini Browser Header */}
          <div className="flex items-center justify-between border-b border-slate-200/70 pb-1.5">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[7.5px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
              ai-website-builder.app
            </span>
          </div>

          {/* Screen Body */}
          <div className="text-left space-y-1.5">
            <div className="text-[10.5px] font-black text-slate-900 leading-tight">
              Create Your Website
              <br />
              <span className="text-[#0066ff]">with AI</span>
            </div>

            <div className="grid grid-cols-12 gap-1.5 items-center pt-0.5">
              {/* Left Mini Storefront Block */}
              <div className="col-span-5 rounded-md bg-blue-50/90 border border-blue-200/70 p-1.5 flex flex-col gap-1">
                <div className="w-full h-5 rounded bg-gradient-to-r from-blue-500 to-indigo-500 opacity-85" />
                <div className="w-3/4 h-1.5 rounded bg-blue-200" />
              </div>

              {/* Right Mini Product & Checkout Block */}
              <div className="col-span-7 rounded-md bg-indigo-50/70 border border-indigo-200/60 p-1.5 space-y-1 relative">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded bg-indigo-500/20 border border-indigo-400/40 shrink-0" />
                  <div className="space-y-0.5 flex-1">
                    <div className="w-full h-1.5 rounded bg-indigo-300" />
                    <div className="w-2/3 h-1 rounded bg-indigo-200" />
                  </div>
                </div>
                <div className="w-12 h-2.5 rounded bg-[#0066ff]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base / Keyboard Lip */}
      <div className="h-2.5 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 rounded-b-xl mx-auto w-[108%] -ml-[4%] shadow-md flex items-center justify-center">
        <div className="w-10 h-1 rounded-full bg-slate-400" />
      </div>
    </div>
  </div>
);

export const AiWebsiteCourseReelsPage: React.FC<AiWebsiteCourseReelsPageProps> = ({
  userName,
  onBack,
  onOpenEnrollModal,
  onOpenLogin,
}) => {
  const [reels, setReels] = useState<InstagramReelItem[]>([]);
  const [isLoadingReels, setIsLoadingReels] = useState<boolean>(true);
  const [activeModalReel, setActiveModalReel] = useState<InstagramReelItem | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(28);

  // Enrollment & Payment State
  const [isEnrolled, setIsEnrolled] = useState<boolean>(() => isCourseUnlocked(COURSE_ID));
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [payError, setPayError] = useState<string | null>(null);

  // Admin Reel Management Drawer/Modal State
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [newReelUrl, setNewReelUrl] = useState<string>('');
  const [newTitle, setNewTitle] = useState<string>('');
  const [newThumbnailUrl, setNewThumbnailUrl] = useState<string>('');
  const [newDuration, setNewDuration] = useState<string>('');
  const [newPublished, setNewPublished] = useState<boolean>(true);
  const [adminFeedback, setAdminFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // Inline Edit State for Admin
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editUrl, setEditUrl] = useState<string>('');
  const [editTitle, setEditTitle] = useState<string>('');
  const [editThumb, setEditThumb] = useState<string>('');
  const [editDuration, setEditDuration] = useState<string>('');

  const loadReels = useCallback(async (force = false) => {
    setIsLoadingReels(true);
    const items = await fetchCourseInstagramReels(COURSE_ID, force);
    setReels(items);
    setIsLoadingReels(false);
  }, []);

  useEffect(() => {
    loadReels(false);
    const handleSync = () => {
      setIsEnrolled(isCourseUnlocked(COURSE_ID));
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
  }, [loadReels]);

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
        onOpenEnrollModal(COURSE_ID, COURSE_TITLE);
      } else {
        window.dispatchEvent(new CustomEvent('futureai_open_login'));
      }
      return;
    }

    setIsProcessingPayment(true);
    try {
      const result = await startRazorpayCheckout({
        amount: COURSE_PRICE,
        courseId: COURSE_ID,
        courseTitle: COURSE_TITLE,
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
          courseId: COURSE_ID,
          verifiedAt: result.verifiedAt,
          entitlementProof: result.entitlementProof,
        });
        if (!verifiedOnServer) {
          unlockCourse(COURSE_ID, {
            userId: user.userId,
            paymentId: result.paymentId,
            orderId: result.orderId,
            paymentStatus: 'CAPTURED',
            enrollmentStatus: 'ACTIVE',
            source: 'PAYMENT',
          });
        }
      } else {
        unlockCourse(COURSE_ID, {
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

  // ─── Admin Handlers ─────────────────────────────────────────────────────────
  const handleAddReelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminFeedback(null);
    const res = await addInstagramReel({
      courseId: COURSE_ID,
      reelUrl: newReelUrl,
      title: newTitle,
      thumbnailUrl: newThumbnailUrl,
      durationLabel: newDuration,
      published: newPublished,
    });
    if (res.error) {
      setAdminFeedback({ type: 'error', message: res.error });
      return;
    }
    setNewReelUrl('');
    setNewTitle('');
    setNewThumbnailUrl('');
    setNewDuration('');
    setNewPublished(true);
    setAdminFeedback({
      type: 'success',
      message: 'Instagram Reel saved to Firestore and updated in gallery.',
    });
    await loadReels(false);
  };

  const handlePreviewDraftReel = () => {
    setAdminFeedback(null);
    const parsed = parseInstagramReelUrl(newReelUrl);
    if (!parsed.isValid) {
      setAdminFeedback({ type: 'error', message: parsed.error || 'Invalid Instagram Reel URL.' });
      return;
    }
    openReelModal({
      id: 'preview_draft',
      courseId: COURSE_ID,
      reelUrl: parsed.canonicalUrl,
      shortcode: parsed.shortcode,
      embedUrl: parsed.embedUrl,
      title: newTitle.trim() || 'Draft Reel Preview',
      thumbnailUrl: newThumbnailUrl.trim(),
      durationLabel: newDuration.trim(),
      order: 0,
      published: newPublished,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  const startEditingReel = (reel: InstagramReelItem) => {
    setEditingId(reel.id);
    setEditUrl(reel.reelUrl);
    setEditTitle(reel.title);
    setEditThumb(reel.thumbnailUrl || '');
    setEditDuration(reel.durationLabel || '');
  };

  const handleSaveEditReel = async (id: string) => {
    setAdminFeedback(null);
    const res = await updateInstagramReel(id, {
      reelUrl: editUrl,
      title: editTitle,
      thumbnailUrl: editThumb,
      durationLabel: editDuration,
    });
    if (res.error) {
      setAdminFeedback({ type: 'error', message: res.error });
      return;
    }
    setEditingId(null);
    setAdminFeedback({ type: 'success', message: 'Reel updated successfully.' });
    await loadReels(false);
  };

  const handleTogglePublish = async (reel: InstagramReelItem) => {
    await updateInstagramReel(reel.id, { published: !reel.published });
    await loadReels(false);
  };

  const handleDeleteReel = async (id: string) => {
    await deleteInstagramReel(id);
    await loadReels(false);
  };

  const handleMoveReel = async (index: number, direction: -1 | 1) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= reels.length) return;
    const ids = reels.map((r) => r.id);
    const [moved] = ids.splice(index, 1);
    ids.splice(targetIdx, 0, moved);
    const updated = await reorderInstagramReels(COURSE_ID, ids);
    setReels(updated);
  };

  const handleThumbnailFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    isEditMode = false
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (isEditMode) {
        setEditThumb(result);
      } else {
        setNewThumbnailUrl(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const publishedReels = reels.filter((r) => r.published);
  const displayedReels = publishedReels.slice(0, visibleCount);
  const remainingReelsCount = Math.max(0, publishedReels.length - displayedReels.length);

  return (
    <div
      className="w-full min-h-screen bg-[#f4f7fb] pb-10 font-sans select-none"
      data-testid="ai-website-course-reels-page"
    >
      <div className="max-w-[1432px] mx-auto px-3 sm:px-5 lg:px-6 pt-2.5 space-y-4">
        {/* ─── BREADCRUMB ROW (Exact Reference Match) ─── */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-between gap-2 text-xs font-bold text-slate-600 px-1"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0066ff] transition-colors cursor-pointer shrink-0"
            >
              <Home className="w-3.5 h-3.5 text-slate-700" />
              <span>Courses</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-extrabold text-slate-900 truncate">{COURSE_TITLE}</span>
          </div>
        </nav>

        {/* ═══════════════════════════════════════════════════════════════════════════
            1. PREMIUM COMPACT HERO SECTION
            Left: Course Title ("10 Minutes" in blue), LIVE CLASSES badge, Short Description
            Center: Compact Laptop Illustration displaying AI Website Builder
            Right: ₹2,999 + Large Blue "Enroll Now" Button
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section
          className="relative rounded-[24px] bg-gradient-to-r from-[#eaf2ff] via-[#f4f8ff] to-[#eef4ff] border border-blue-200/80 shadow-[0_4px_24px_rgba(15,23,42,0.04)] px-5 py-4 sm:px-7 sm:py-5 overflow-hidden"
          data-testid="ai-website-compact-hero"
        >
          {/* Subtle decorative soft glows */}
          <div className="pointer-events-none absolute -top-12 left-1/3 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-6">
            {/* LEFT COLUMN: Badge, Title ("10 Minutes" in Blue), Short Description (lg:col-span-5) */}
            <div className="lg:col-span-5 text-left space-y-2.5">
              {/* Red LIVE CLASSES Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e11d48] text-white text-[10.5px] font-black tracking-wider uppercase shadow-sm shadow-rose-600/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-85" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span>LIVE CLASSES</span>
              </div>

              {/* Course Title with "10 Minutes" Highlighted in Premium Blue */}
              <h1 className="text-2xl sm:text-3xl xl:text-[32px] font-black text-slate-900 leading-[1.14] tracking-tight">
                Build &amp; Launch a Website with AI in{' '}
                <span className="relative inline-block text-[#0066ff]">
                  10 Minutes
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 text-[#0066ff]/35"
                    viewBox="0 0 120 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 5.5C35 2 85 2 118 5.5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Short Description */}
              <p className="text-xs sm:text-[13.5px] text-slate-600 font-medium leading-relaxed">
                Learn to build and launch a professional AI-powered website with shopping cart, payment gateway, database and live deployment.
              </p>
            </div>

            {/* CENTER COLUMN: Compact Laptop Illustration (lg:col-span-4) */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <AiWebsiteBuilderLaptopIllustration />
            </div>

            {/* RIGHT COLUMN: Price ₹2,999 & Large Blue Enroll Now Button (lg:col-span-3) */}
            <div className="lg:col-span-3 lg:border-l lg:border-slate-200/90 lg:pl-6 flex flex-col items-start lg:items-center justify-center space-y-2.5">
              <div className="text-3xl sm:text-4xl xl:text-[40px] font-black text-slate-900 tracking-tight leading-none">
                ₹2,999
              </div>

              {isEnrolled ? (
                <div className="w-full sm:w-auto min-w-[200px] px-6 py-3 rounded-2xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Enrolled in Live Class</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleEnrollNow}
                  disabled={isProcessingPayment}
                  data-testid="hero-enroll-now-btn"
                  className="w-full sm:w-auto min-w-[210px] px-7 py-3.5 rounded-2xl bg-[#0066ff] hover:bg-[#0052cc] text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_8px_22px_rgba(0,102,255,0.32)] hover:shadow-[0_10px_26px_rgba(0,102,255,0.42)] active:scale-98 transition-all cursor-pointer disabled:opacity-60"
                >
                  <span>{isProcessingPayment ? 'Opening Checkout...' : 'Enroll Now'}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              )}
            </div>
          </div>

          {payError && (
            <div className="mt-3 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center justify-between">
              <span>{payError}</span>
              <button
                type="button"
                onClick={() => setPayError(null)}
                className="underline ml-3 cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          )}
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
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Demo Reels{publishedReels.length > 0 ? ` (${publishedReels.length})` : ''}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/70 text-[11px] font-bold">
                  Instagram Videos
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 font-medium">
                Watch real website demos, AI development workflows and live project previews.
              </p>
            </div>

            <div className="flex items-center gap-2.5 self-start sm:self-center shrink-0">
              {publishedReels.length > 0 && (
                <div className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-full">
                  <Play className="w-3.5 h-3.5 text-[#0066ff] fill-[#0066ff]" />
                  <span>Watch {publishedReels.length} short demo videos of this course</span>
                </div>
              )}

              <button
                type="button"
                onClick={() => setIsAdminOpen((prev) => !prev)}
                data-testid="open-admin-reels-btn"
                className="px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{isAdminOpen ? 'Close Reel Manager' : 'Manage Reels'}</span>
              </button>
            </div>
          </div>

          {/* ─── ADMIN REEL MANAGEMENT PANEL (Firestore Integrated) ─── */}
          {isAdminOpen && (
            <div
              className="rounded-2xl bg-slate-900 text-white p-4 sm:p-5 space-y-4 border border-slate-800 text-left"
              data-testid="admin-reels-manager"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 block">
                    ADMIN — MANAGE INSTAGRAM REELS (FIRESTORE)
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    Add, Edit, Reorder &amp; Publish Course Demo Reels
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-semibold">
                  Total Saved: {reels.length} ({publishedReels.length} Published)
                </span>
              </div>

              {adminFeedback && (
                <div
                  className={`p-3 rounded-xl text-xs font-bold flex items-center justify-between ${
                    adminFeedback.type === 'success'
                      ? 'bg-emerald-500/20 border border-emerald-400/40 text-emerald-200'
                      : 'bg-rose-500/20 border border-rose-400/40 text-rose-200'
                  }`}
                >
                  <span>{adminFeedback.message}</span>
                  <button
                    type="button"
                    onClick={() => setAdminFeedback(null)}
                    className="underline ml-3 cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              {/* Add New Reel Form */}
              <form
                onSubmit={handleAddReelSubmit}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-slate-800/70 p-3.5 rounded-xl border border-slate-700/80"
              >
                <div className="md:col-span-4">
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    Instagram Reel URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={newReelUrl}
                    onChange={(e) => setNewReelUrl(e.target.value)}
                    placeholder="https://www.instagram.com/reel/SHORTCODE/"
                    data-testid="admin-reel-url-input"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    Custom Reel Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Payment Gateway Integration"
                    data-testid="admin-reel-title-input"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    Optional Thumbnail URL or Upload
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={newThumbnailUrl}
                      onChange={(e) => setNewThumbnailUrl(e.target.value)}
                      placeholder="https://... or upload image"
                      data-testid="admin-reel-thumb-input"
                      className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-400"
                    />
                    <label className="px-2.5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-[10px] font-bold cursor-pointer shrink-0">
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleThumbnailFileUpload(e, false)}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    Duration (Optional)
                  </label>
                  <input
                    type="text"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    placeholder="e.g. 1:15"
                    className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div className="md:col-span-12 flex flex-wrap items-center justify-between gap-2 pt-1">
                  <label className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newPublished}
                      onChange={(e) => setNewPublished(e.target.checked)}
                      className="rounded border-slate-600"
                    />
                    <span>Publish immediately to student gallery</span>
                  </label>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePreviewDraftReel}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Before Publishing</span>
                    </button>

                    <button
                      type="submit"
                      data-testid="admin-add-reel-submit"
                      className="px-4 py-1.5 rounded-lg bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-black inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Reel</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Existing Reels Management List */}
              {reels.length > 0 && (
                <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                  {reels.map((reel, idx) => (
                    <div
                      key={reel.id}
                      className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 flex flex-wrap items-center justify-between gap-2 text-xs"
                    >
                      {editingId === reel.id ? (
                        <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                          <input
                            type="url"
                            value={editUrl}
                            onChange={(e) => setEditUrl(e.target.value)}
                            className="sm:col-span-4 px-2.5 py-1.5 rounded bg-slate-900 border border-slate-600 text-white text-xs"
                            placeholder="Instagram Reel URL"
                          />
                          <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="sm:col-span-3 px-2.5 py-1.5 rounded bg-slate-900 border border-slate-600 text-white text-xs"
                            placeholder="Reel Title"
                          />
                          <input
                            type="text"
                            value={editThumb}
                            onChange={(e) => setEditThumb(e.target.value)}
                            className="sm:col-span-3 px-2.5 py-1.5 rounded bg-slate-900 border border-slate-600 text-white text-xs"
                            placeholder="Thumbnail URL (optional)"
                          />
                          <div className="sm:col-span-2 flex items-center justify-end gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleSaveEditReel(reel.id)}
                              className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingId(null)}
                              className="px-2 py-1 rounded bg-slate-700 text-slate-300 cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="w-6 h-6 rounded-full bg-slate-700 text-slate-300 font-black text-[10px] flex items-center justify-center shrink-0">
                              #{idx + 1}
                            </span>
                            <div className="min-w-0">
                              <div className="font-bold text-white truncate flex items-center gap-2">
                                <span>{reel.title}</span>
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[9.5px] font-black uppercase ${
                                    reel.published
                                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                  }`}
                                >
                                  {reel.published ? 'Published' : 'Draft'}
                                </span>
                              </div>
                              <div className="text-[10.5px] text-slate-400 truncate">
                                {reel.reelUrl}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleMoveReel(idx, -1)}
                              disabled={idx === 0}
                              title="Move Up"
                              className="p-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-40 cursor-pointer"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMoveReel(idx, 1)}
                              disabled={idx === reels.length - 1}
                              title="Move Down"
                              className="p-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-40 cursor-pointer"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => openReelModal(reel)}
                              title="Preview Reel"
                              className="px-2 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 font-bold cursor-pointer"
                            >
                              Preview
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTogglePublish(reel)}
                              title={reel.published ? 'Unpublish' : 'Publish'}
                              className="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold inline-flex items-center gap-1 cursor-pointer"
                            >
                              {reel.published ? (
                                <>
                                  <EyeOff className="w-3 h-3" />
                                  <span>Unpublish</span>
                                </>
                              ) : (
                                <>
                                  <Eye className="w-3 h-3" />
                                  <span>Publish</span>
                                </>
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => startEditingReel(reel)}
                              title="Edit Reel"
                              className="p-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white cursor-pointer"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteReel(reel.id)}
                              title="Delete Reel"
                              data-testid={`delete-reel-${idx}`}
                              className="p-1.5 rounded bg-rose-600/30 hover:bg-rose-600 text-rose-200 hover:text-white cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

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
                  Use the <strong>Manage Reels</strong> panel to add official Instagram Reel URLs for this course. Published reels automatically appear in this 9:16 gallery.
                </p>
              </div>
              {!isAdminOpen && (
                <button
                  type="button"
                  onClick={() => setIsAdminOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-black inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Instagram Reels</span>
                </button>
              )}
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
                    <h3 className="text-xs sm:text-[13px] font-black text-white leading-snug line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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

              {/* Progressive Load "+More Reels" Tile (Matches Reference Image when > visibleCount) */}
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
export default AiWebsiteCourseReelsPage;
