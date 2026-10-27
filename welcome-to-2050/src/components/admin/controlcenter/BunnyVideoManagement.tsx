import React, { useState } from 'react';
import {
  Video,
  Play,
  Save,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Layers,
  Settings,
  Sparkles,
  HelpCircle,
  RefreshCw,
  X,
  Eye,
  ShieldCheck
} from 'lucide-react';
import {
  getBunnyConfig,
  saveBunnyConfig,
  getLessonBunnyVideos,
  saveLessonBunnyVideo,
  saveAllLessonBunnyVideos,
  getBunnyEmbedUrl,
  BunnyStreamConfig
} from '../../../services/bunnyVideoService';
import { TOPICS } from '../../futureai/PythonChapterView';
import { AdminAuthService } from '../../../services/adminAuthService';

interface BunnyVideoManagementProps {
  onRefresh?: () => void;
  isDark?: boolean;
}

export const BunnyVideoManagement: React.FC<BunnyVideoManagementProps> = ({ onRefresh, isDark = false }) => {
  const [config, setConfig] = useState<BunnyStreamConfig>(() => getBunnyConfig());
  const [videoMap, setVideoMap] = useState<Record<string, { videoId: string; title: string; duration?: string }>>(() => getLessonBunnyVideos());
  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [previewVideoId, setPreviewVideoId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const canEdit = AdminAuthService.hasPermission('manage_courses');

  const cardBg = isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90 shadow-sm';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';
  const inputBg = isDark
    ? 'bg-slate-950 border-slate-700/80 text-white placeholder:text-slate-600 focus:border-blue-500'
    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600';

  const handleConfigChange = (field: keyof BunnyStreamConfig, val: any) => {
    setConfig((prev) => ({ ...prev, [field]: val }));
  };

  const handleSaveConfig = () => {
    if (!canEdit) {
      alert('Permission denied to update video configurations.');
      return;
    }
    saveBunnyConfig(config);
    setFeedbackMsg({ type: 'success', text: 'Bunny.net Stream Library configuration updated successfully!' });
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  const handleVideoIdChange = (key: string, videoId: string, title: string) => {
    setVideoMap((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] || { duration: '07:00' }),
        videoId: videoId.trim(),
        title,
      },
    }));
  };

  const handleSaveVideoMap = () => {
    if (!canEdit) {
      alert('Permission denied to update video configurations.');
      return;
    }
    setIsSaving(true);
    try {
      saveAllLessonBunnyVideos(videoMap);
      setFeedbackMsg({ type: 'success', text: `Saved Bunny video mappings for Chapter ${selectedTopicId}!` });
      setTimeout(() => setFeedbackMsg(null), 4000);
      if (onRefresh) onRefresh();
    } catch (e: any) {
      setFeedbackMsg({ type: 'error', text: e?.message || 'Failed to save video mapping.' });
    } finally {
      setIsSaving(false);
    }
  };

  const currentTopic = TOPICS.find((t) => t.id === selectedTopicId) || TOPICS[0];
  const videoKey = `topic_${selectedTopicId}_lesson_1`;
  const currentVideoEntry = videoMap[videoKey] || {
    videoId: '',
    title: currentTopic.title,
    duration: currentTopic.lessons[0]?.time || '07:00',
  };

  return (
    <div className="space-y-6 text-left">
      {/* Top Banner Alert */}
      {feedbackMsg && (
        <div
          className={`p-4 rounded-2xl flex items-center justify-between text-xs font-bold border transition-all ${
            feedbackMsg.type === 'success'
              ? isDark ? 'bg-emerald-950 border-emerald-500 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
              : isDark ? 'bg-rose-950 border-rose-500 text-rose-200' : 'bg-rose-50 border-rose-200 text-rose-700'
          }`}
        >
          <div className="flex items-center gap-2">
            {feedbackMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-rose-600" />}
            <span>{feedbackMsg.text}</span>
          </div>
          <button type="button" onClick={() => setFeedbackMsg(null)} className="cursor-pointer">
            <X className="w-4 h-4 opacity-70 hover:opacity-100" />
          </button>
        </div>
      )}

      {/* ── Section 1: Bunny.net Stream CDN Global Settings ── */}
      <div className={`${cardBg} border rounded-3xl p-6`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`text-base font-black ${textPrimary}`}>Bunny.net Stream Video Infrastructure</h2>
              <p className={`text-xs ${textMuted} font-medium`}>Configure Bunny CDN Library &amp; Video Delivery Host</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSaveConfig}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Bunny CDN Settings</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
              Bunny Stream Library ID
            </label>
            <input
              type="text"
              value={config.libraryId}
              onChange={(e) => handleConfigChange('libraryId', e.target.value.trim())}
              placeholder="e.g. 783689"
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${inputBg}`}
            />
            <span className={`text-[10px] ${textMuted} mt-1 block`}>Found in your Bunny.net Stream Dashboard</span>
          </div>

          <div>
            <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
              Stream Player Host
            </label>
            <input
              type="text"
              value={config.streamHost}
              onChange={(e) => handleConfigChange('streamHost', e.target.value.trim())}
              placeholder="iframe.mediadelivery.net"
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${inputBg}`}
            />
            <span className={`text-[10px] ${textMuted} mt-1 block`}>Default: iframe.mediadelivery.net</span>
          </div>

          <div>
            <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
              Custom Pullzone / Subdomain
            </label>
            <input
              type="text"
              value={config.customDomain || ''}
              onChange={(e) => handleConfigChange('customDomain', e.target.value.trim())}
              placeholder="video.futureitindustry.com"
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${inputBg}`}
            />
            <span className={`text-[10px] ${textMuted} mt-1 block`}>Cloudflare CNAME or Bunny Pull Zone</span>
          </div>
        </div>
      </div>

      {/* ── Section 2: Chapter & Lesson Bunny Video ID Mapping ── */}
      <div className={`${cardBg} border rounded-3xl p-6`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className={`text-base font-black ${textPrimary}`}>Chapter Video Lessons Manager</h2>
            <p className={`text-xs ${textMuted} font-medium`}>Paste the Bunny.net Video ID for each Python lesson to update student streaming instantly</p>
          </div>

          <button
            type="button"
            onClick={handleSaveVideoMap}
            disabled={isSaving}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black flex items-center gap-2 shadow-md shadow-emerald-600/20 cursor-pointer disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Saving Changes...' : 'Save Video ID to Website'}</span>
          </button>
        </div>

        {/* Topic Selector Tabs (10 Topics) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
          {TOPICS.map((topic) => {
            const hasVideo = !!videoMap[`topic_${topic.id}_lesson_1`]?.videoId;
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedTopicId(topic.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>Ch {topic.id}: {topic.title.split(':')[0]}</span>
                {hasVideo && (
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-300' : 'bg-emerald-500'}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Chapter Details & Video Input */}
        <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-black text-[11px] border border-blue-500/20">
                  Chapter {currentTopic.id}
                </span>
                <h3 className={`text-sm font-black ${textPrimary}`}>{currentTopic.title}</h3>
              </div>
              <p className={`text-xs ${textMuted} mt-1 line-clamp-1`}>{currentTopic.desc}</p>
            </div>

            {/* Test Video Preview Button */}
            {currentVideoEntry.videoId && (
              <button
                type="button"
                onClick={() => setPreviewVideoId(currentVideoEntry.videoId)}
                className="px-3.5 py-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Test Video Player</span>
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
                Bunny.net Video GUID / ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Video className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={currentVideoEntry.videoId}
                  onChange={(e) => handleVideoIdChange(videoKey, e.target.value, currentTopic.title)}
                  placeholder="e.g. 56e7a759-1562-4700-ab14-d5f31b921dc1"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${inputBg}`}
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-500 mt-1.5 gap-1">
                <span>Copy the Video ID from your Bunny Stream dashboard and paste it here.</span>
                {currentVideoEntry.videoId && (
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    Embed URL Ready: https://iframe.mediadelivery.net/embed/{config.libraryId}/{currentVideoEntry.videoId.slice(0, 12)}...
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
                  Lesson Display Title
                </label>
                <input
                  type="text"
                  value={currentVideoEntry.title}
                  onChange={(e) =>
                    setVideoMap((prev) => ({
                      ...prev,
                      [videoKey]: { ...currentVideoEntry, title: e.target.value },
                    }))
                  }
                  className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none ${inputBg}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
                  Video Duration (e.g. 07:45)
                </label>
                <input
                  type="text"
                  value={currentVideoEntry.duration || ''}
                  onChange={(e) =>
                    setVideoMap((prev) => ({
                      ...prev,
                      [videoKey]: { ...currentVideoEntry, duration: e.target.value },
                    }))
                  }
                  placeholder="08:30"
                  className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none ${inputBg}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overview Matrix Table of all 10 Topics */}
        <div className="mt-8">
          <h4 className={`text-xs font-black uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-3`}>
            All 10 Chapters Video Status Matrix
          </h4>

          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className={`border-b ${isDark ? 'bg-slate-950/80 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'} text-[11px] font-black uppercase`}>
                <tr>
                  <th className="py-2.5 px-4">Chapter</th>
                  <th className="py-2.5 px-4">Topic Title</th>
                  <th className="py-2.5 px-4">Bunny Video ID</th>
                  <th className="py-2.5 px-4 text-center">Status</th>
                  <th className="py-2.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-100'}`}>
                {TOPICS.map((topic) => {
                  const key = `topic_${topic.id}_lesson_1`;
                  const v = videoMap[key]?.videoId;
                  return (
                    <tr key={topic.id} className={isDark ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}>
                      <td className="py-3 px-4 font-bold text-blue-600 dark:text-blue-400">Ch {topic.id}</td>
                      <td className={`py-3 px-4 font-medium ${textPrimary}`}>{topic.title}</td>
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-500">
                        {v ? `${v.slice(0, 16)}...` : <span className="text-slate-400 italic">Not Assigned</span>}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {v ? (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black">
                            Active Stream
                          </span>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-[10px] font-medium">
                            Fallback Local
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedTopicId(topic.id)}
                          className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                        >
                          Edit ID ➔
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Preview Video Modal ── */}
      {previewVideoId && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-orange-400" />
                <span className="font-bold text-white text-xs">Bunny Stream Live Test Player</span>
              </div>
              <button
                type="button"
                onClick={() => setPreviewVideoId(null)}
                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={getBunnyEmbedUrl(previewVideoId, { libraryId: config.libraryId, autoplay: true })}
                title="Bunny Preview"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            <div className="p-4 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">Video ID: {previewVideoId}</span>
              <button
                type="button"
                onClick={() => setPreviewVideoId(null)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
