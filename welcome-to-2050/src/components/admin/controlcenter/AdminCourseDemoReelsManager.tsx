import React, { useState, useEffect, useCallback } from 'react';
import {
  Film,
  Plus,
  Trash2,
  Edit3,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Play,
  X,
  RefreshCw,
  Globe,
  Smartphone,
  Clapperboard,
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
} from '../../../services/instagramReelsService';

type SupportedCourseId = 'ai_website_dev' | 'ai_android_dev' | 'ai_video_creation';

interface CourseTabOption {
  id: SupportedCourseId;
  label: string;
  icon: React.ReactNode;
  subtitle: string;
}

const COURSE_TABS: CourseTabOption[] = [
  {
    id: 'ai_website_dev',
    label: 'AI Website Dev',
    icon: <Globe className="w-4 h-4 text-blue-500" />,
    subtitle: 'AI Website Builder Pro',
  },
  {
    id: 'ai_android_dev',
    label: 'AI Android App Dev',
    icon: <Smartphone className="w-4 h-4 text-emerald-500" />,
    subtitle: 'AI App Builder Pro',
  },
  {
    id: 'ai_video_creation',
    label: 'AI Video Creation',
    icon: <Clapperboard className="w-4 h-4 text-rose-500" />,
    subtitle: 'AI Video Creator Pro',
  },
];

export const AdminCourseDemoReelsManager: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<SupportedCourseId>('ai_website_dev');
  const [reels, setReels] = useState<InstagramReelItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // New Reel Form
  const [newUrl, setNewUrl] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newThumb, setNewThumb] = useState('');
  const [newDuration, setNewDuration] = useState('');
  const [newPublished, setNewPublished] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Editing Item
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editUrl, setEditUrl] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editThumb, setEditThumb] = useState('');
  const [editDuration, setEditDuration] = useState('');

  // Preview Modal
  const [previewReel, setPreviewReel] = useState<InstagramReelItem | null>(null);

  const loadReelsForCourse = useCallback(async (courseId: SupportedCourseId, force = false) => {
    setIsLoading(true);
    try {
      const items = await fetchCourseInstagramReels(courseId, force);
      setReels(items);
    } catch {
      setFeedback({ type: 'error', message: 'Failed to load reels from Firestore.' });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadReelsForCourse(selectedCourse, false);
  }, [selectedCourse, loadReelsForCourse]);

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    if (!newUrl.trim()) return;

    setIsSubmitting(true);
    const res = await addInstagramReel({
      courseId: selectedCourse,
      reelUrl: newUrl.trim(),
      title: newTitle.trim(),
      thumbnailUrl: newThumb.trim(),
      durationLabel: newDuration.trim(),
      published: newPublished,
    });
    setIsSubmitting(false);

    if (res.error) {
      setFeedback({ type: 'error', message: res.error });
      return;
    }

    setNewUrl('');
    setNewTitle('');
    setNewThumb('');
    setNewDuration('');
    setFeedback({
      type: 'success',
      message: 'New Instagram Reel added to Firestore successfully.',
    });
    await loadReelsForCourse(selectedCourse, true);
  };

  const handleStartEdit = (reel: InstagramReelItem) => {
    setEditingId(reel.id);
    setEditUrl(reel.reelUrl);
    setEditTitle(reel.title);
    setEditThumb(reel.thumbnailUrl || '');
    setEditDuration(reel.durationLabel || '');
  };

  const handleSaveEdit = async (id: string) => {
    setFeedback(null);
    const res = await updateInstagramReel(id, {
      reelUrl: editUrl.trim(),
      title: editTitle.trim(),
      thumbnailUrl: editThumb.trim(),
      durationLabel: editDuration.trim(),
    });

    if (res.error) {
      setFeedback({ type: 'error', message: res.error });
      return;
    }

    setEditingId(null);
    setFeedback({ type: 'success', message: 'Reel updated successfully.' });
    await loadReelsForCourse(selectedCourse, true);
  };

  const handleTogglePublish = async (reel: InstagramReelItem) => {
    await updateInstagramReel(reel.id, { published: !reel.published });
    await loadReelsForCourse(selectedCourse, true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this demo reel?')) return;
    await deleteInstagramReel(id);
    setFeedback({ type: 'success', message: 'Reel removed from database.' });
    await loadReelsForCourse(selectedCourse, true);
  };

  const handleMove = async (index: number, direction: -1 | 1) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= reels.length) return;
    const ids = reels.map((r) => r.id);
    const [moved] = ids.splice(index, 1);
    ids.splice(targetIdx, 0, moved);
    const updated = await reorderInstagramReels(selectedCourse, ids);
    setReels(updated);
  };

  const publishedCount = reels.filter((r) => r.published).length;
  const activeCourseMeta = COURSE_TABS.find((t) => t.id === selectedCourse);

  return (
    <div
      className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs space-y-6 text-left font-sans text-[#0F172A]"
      data-testid="admin-course-reels-manager-panel"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E2E8F0] gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-[10px] font-black uppercase">
              Admin Exclusive
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold">
              Firestore Collection: course_demo_reels
            </span>
          </div>
          <h2 className="text-xl font-black text-[#0F172A] flex items-center gap-2">
            <Film className="w-5 h-5 text-[#2563EB]" />
            <span>Manage AI Live Course Demo Reels (Instagram Videos)</span>
          </h2>
          <p className="text-xs text-[#64748B] font-medium mt-0.5">
            Add, edit, reorder, and publish authentic Instagram Reels for live course landing pages. Only visible in this Admin Panel.
          </p>
        </div>

        <button
          type="button"
          onClick={() => loadReelsForCourse(selectedCourse, true)}
          disabled={isLoading}
          className="px-3.5 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] text-xs font-bold flex items-center gap-1.5 cursor-pointer self-start md:self-center"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#2563EB] ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh Live Reels</span>
        </button>
      </div>

      {/* Course Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {COURSE_TABS.map((tab) => {
          const isActive = selectedCourse === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCourse(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Course Banner */}
      <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-between text-xs">
        <div>
          <span className="font-bold text-[#1E40AF] block">
            Selected Course: {activeCourseMeta?.subtitle}
          </span>
          <span className="text-[11px] text-[#2563EB]">
            Course ID: <strong className="font-mono">{selectedCourse}</strong> • Total Saved:{' '}
            <strong>{reels.length}</strong> (Published: <strong>{publishedCount}</strong>)
          </span>
        </div>
        <a
          href={`#${selectedCourse === 'ai_website_dev' ? 'ai-website-dev' : selectedCourse === 'ai_android_dev' ? 'ai-android-dev' : 'ai-video-creation'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-white border border-[#BFDBFE] text-[#2563EB] font-bold text-xs flex items-center gap-1 hover:bg-blue-50"
        >
          <span>View Public Course Page</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Feedback Alert */}
      {feedback && (
        <div
          className={`p-3 rounded-xl text-xs font-bold flex items-center justify-between ${
            feedback.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          <div className="flex items-center gap-2">
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600" />
            )}
            <span>{feedback.message}</span>
          </div>
          <button
            type="button"
            onClick={() => setFeedback(null)}
            className="text-xs underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Add New Reel Form */}
      <form
        onSubmit={handleAddSubmit}
        className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3"
      >
        <div className="flex items-center gap-1.5 font-bold text-xs text-[#0F172A]">
          <Plus className="w-4 h-4 text-[#2563EB]" />
          <span>Add New Instagram Reel to {activeCourseMeta?.label}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-5">
            <label className="block text-[11px] font-bold text-[#64748B] mb-1">
              Instagram Reel URL *
            </label>
            <input
              type="url"
              required
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="https://www.instagram.com/reel/SHORTCODE/"
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] text-xs focus:outline-none focus:border-[#2563EB]"
            />
          </div>

          <div className="md:col-span-4">
            <label className="block text-[11px] font-bold text-[#64748B] mb-1">
              Reel Title *
            </label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. AI E-Commerce Storefront Demo"
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] text-xs focus:outline-none focus:border-[#2563EB]"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-[11px] font-bold text-[#64748B] mb-1">
              Duration (e.g. 1:15)
            </label>
            <input
              type="text"
              value={newDuration}
              onChange={(e) => setNewDuration(e.target.value)}
              placeholder="1:15"
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] text-xs focus:outline-none focus:border-[#2563EB]"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <label className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] cursor-pointer">
            <input
              type="checkbox"
              checked={newPublished}
              onChange={(e) => setNewPublished(e.target.checked)}
              className="rounded border-[#CBD5E1] text-[#2563EB]"
            />
            <span>Publish immediately to student course gallery</span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-60"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{isSubmitting ? 'Saving to Firestore...' : 'Add Reel to Catalog'}</span>
          </button>
        </div>
      </form>

      {/* Reels List Table */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-[#64748B]">
          <span>Current Course Reels ({reels.length} total, {publishedCount} published)</span>
          <span className="text-[11px]">Use arrows to reorder cards in student gallery</span>
        </div>

        {isLoading ? (
          <div className="p-8 text-center text-xs text-[#64748B] bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
            Loading course reels from Firestore...
          </div>
        ) : reels.length === 0 ? (
          <div className="p-8 text-center text-xs text-[#64748B] bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
            No reels configured yet for this course. Add your first Instagram Reel above.
          </div>
        ) : (
          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {reels.map((reel, idx) => (
              <div
                key={reel.id}
                className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs hover:border-[#CBD5E1] transition-colors"
              >
                {editingId === reel.id ? (
                  <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="Title"
                      className="sm:col-span-5 px-2.5 py-1.5 rounded-lg bg-white border border-[#CBD5E1] text-xs font-bold text-[#0F172A]"
                    />
                    <input
                      type="url"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      placeholder="Instagram Reel URL"
                      className="sm:col-span-5 px-2.5 py-1.5 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#0F172A]"
                    />
                    <input
                      type="text"
                      value={editDuration}
                      onChange={(e) => setEditDuration(e.target.value)}
                      placeholder="Duration"
                      className="sm:col-span-2 px-2.5 py-1.5 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#0F172A]"
                    />
                    <div className="sm:col-span-12 flex justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="px-3 py-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveEdit(reel.id)}
                        className="px-3 py-1 rounded bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-[10px] flex items-center justify-center shrink-0">
                        #{idx + 1}
                      </span>
                      <div className="min-w-0">
                        <div className="font-bold text-[#0F172A] truncate flex items-center gap-2">
                          <span>{reel.title}</span>
                          <span
                            className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase ${
                              reel.published
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : 'bg-amber-50 text-amber-700 border border-amber-200'
                            }`}
                          >
                            {reel.published ? 'Published' : 'Draft'}
                          </span>
                          {reel.durationLabel && (
                            <span className="text-[10px] text-slate-500 font-mono">
                              ({reel.durationLabel})
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">{reel.reelUrl}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleMove(idx, -1)}
                        disabled={idx === 0}
                        title="Move Up"
                        className="p-1.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 disabled:opacity-40 cursor-pointer"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMove(idx, 1)}
                        disabled={idx === reels.length - 1}
                        title="Move Down"
                        className="p-1.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 disabled:opacity-40 cursor-pointer"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewReel(reel)}
                        title="Preview Reel"
                        className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#2563EB] font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Preview</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(reel)}
                        className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                      >
                        {reel.published ? (
                          <>
                            <EyeOff className="w-3 h-3 text-amber-600" />
                            <span>Unpublish</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3 h-3 text-emerald-600" />
                            <span>Publish</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleStartEdit(reel)}
                        title="Edit Reel"
                        className="p-1.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(reel.id)}
                        title="Delete Reel"
                        className="p-1.5 rounded bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 cursor-pointer"
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

      {/* Admin Preview Modal */}
      {previewReel && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewReel(null)}
        >
          <div
            className="relative w-full max-w-[390px] bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white text-xs font-bold">
              <span className="truncate">{previewReel.title}</span>
              <button
                type="button"
                onClick={() => setPreviewReel(null)}
                className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative aspect-[9/16] bg-black">
              <iframe
                src={previewReel.embedUrl}
                title={previewReel.title}
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-3 bg-slate-900 border-t border-slate-800 flex justify-end">
              <a
                href={previewReel.reelUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs inline-flex items-center gap-1.5"
              >
                <span>Watch on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
