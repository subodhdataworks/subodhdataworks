import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Sliders,
  Sparkles,
  Volume2,
  VolumeX,
  Upload,
  CheckCircle2,
  RotateCcw,
  User,
  ShieldCheck,
  Play,
  Square,
  AlertCircle,
  Eye,
  Settings
} from 'lucide-react';
import {
  HrSettingsService,
  HrSettingsConfig,
  PRESET_HR_AVATARS,
  DEFAULT_HR_SETTINGS,
  HrAvatarOption
} from '../../services/hrSettingsService';
import { StableMouthLipSyncAvatar } from '../futureai/interview/StableMouthLipSyncAvatar';
import './AdminHrSettingsModal.css';

export interface AdminHrSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSettingsSaved?: (newSettings: HrSettingsConfig) => void;
}

export const AdminHrSettingsModal: React.FC<AdminHrSettingsModalProps> = ({
  isOpen,
  onClose,
  onSettingsSaved,
}) => {
  const [settings, setSettings] = useState<HrSettingsConfig>(() => HrSettingsService.getSettings());
  const [availableAvatars, setAvailableAvatars] = useState<HrAvatarOption[]>(() => HrSettingsService.getAllAvatars());
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [feedbackNotice, setFeedbackNotice] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Live preview test state
  const [isPreviewSpeaking, setIsPreviewSpeaking] = useState(false);
  const [previewTestText, setPreviewTestText] = useState('Hello! I am your AI Technical Interviewer. Welcome to Future.AI.');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load voices and sync initial settings
  useEffect(() => {
    if (!isOpen) return;

    const current = HrSettingsService.getSettings();
    setSettings(current);
    setAvailableAvatars(HrSettingsService.getAllAvatars());

    const loadVoices = () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        const voices = HrSettingsService.getAvailableVoices(current.language);
        setAvailableVoices(voices);
      }
    };

    loadVoices();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen]);

  // Update voices when language changes
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const voices = HrSettingsService.getAvailableVoices(settings.language);
      setAvailableVoices(voices);
      if (settings.language === 'hi') {
        setPreviewTestText('नमस्ते! मैं आपकी AI टेक्निकल इंटरव्यूअर हूँ। Future.AI में आपका स्वागत है।');
      } else {
        setPreviewTestText('Hello! I am your AI Technical Interviewer. Welcome to Future.AI.');
      }
    }
  }, [settings.language]);

  if (!isOpen) return null;

  // Handle Voice Preview
  const handleTestVoicePreview = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPreviewSpeaking) {
      window.speechSynthesis.cancel();
      setIsPreviewSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(previewTestText);
    utterance.rate = settings.speakingRate;
    utterance.pitch = settings.speakingPitch;

    // Pick selected voice
    if (settings.voiceURI && settings.voiceURI !== 'auto') {
      const selected = availableVoices.find(v => v.voiceURI === settings.voiceURI);
      if (selected) utterance.voice = selected;
    } else {
      const voices = HrSettingsService.getAvailableVoices(settings.language);
      if (voices.length > 0) utterance.voice = voices[0];
    }

    utterance.onstart = () => setIsPreviewSpeaking(true);
    utterance.onend = () => setIsPreviewSpeaking(false);
    utterance.onerror = () => setIsPreviewSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  // Handle Preset Avatar selection
  const handleSelectAvatar = (avatar: HrAvatarOption) => {
    setSettings(prev => ({
      ...prev,
      avatarId: avatar.id,
      avatarUrl: avatar.imageUrl,
      gender: avatar.gender,
      hrName: avatar.name,
      hrTitle: avatar.role,
    }));
  };

  // Handle Custom Image Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setFeedbackNotice({ type: 'error', message: 'Please upload a valid image file (JPG, PNG, WebP).' });
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const dataUrl = uploadEvent.target?.result as string;
      if (dataUrl) {
        const customAvatar = HrSettingsService.addCustomAvatar({
          name: 'Custom HR Interviewer',
          role: 'Technical Hiring Lead',
          gender: 'female',
          imageUrl: dataUrl,
        });
        setAvailableAvatars(HrSettingsService.getAllAvatars());
        handleSelectAvatar(customAvatar);
        setFeedbackNotice({ type: 'success', message: 'Custom avatar uploaded successfully!' });
      }
    };
    reader.readAsDataURL(file);
  };

  // Save Settings
  const handleSave = () => {
    const res = HrSettingsService.saveSettings(settings);
    if (res.success) {
      setFeedbackNotice({ type: 'success', message: '✓ HR Settings saved successfully! The mock interview is now using these settings.' });
      onSettingsSaved?.(res.data);
      setTimeout(() => {
        setFeedbackNotice(null);
      }, 3500);
    } else {
      setFeedbackNotice({ type: 'error', message: res.error || 'Failed to save settings.' });
    }
  };

  // Reset to Defaults
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset HR Settings to default?')) {
      const def = HrSettingsService.resetToDefault();
      setSettings(def);
      setAvailableAvatars(HrSettingsService.getAllAvatars());
      setFeedbackNotice({ type: 'success', message: 'HR Settings reset to platform defaults.' });
      onSettingsSaved?.(def);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded bg-sky-500/30 text-sky-300 border border-sky-400/30">
                  ADMIN PANEL
                </span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>HR Configuration Console</span>
                </span>
              </div>
              <h2 className="text-lg font-black tracking-tight text-white m-0">
                AI HR Interviewer & Avatar Settings
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              if (isPreviewSpeaking && typeof window !== 'undefined' && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
              }
              onClose();
            }}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status / Feedback Banner */}
        {feedbackNotice && (
          <div
            className={`px-6 py-2.5 text-xs font-bold flex items-center justify-between transition-all ${
              feedbackNotice.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border-b border-emerald-200'
                : 'bg-rose-50 text-rose-800 border-b border-rose-200'
            }`}
          >
            <div className="flex items-center gap-2">
              {feedbackNotice.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600" />
              )}
              <span>{feedbackNotice.message}</span>
            </div>
            <button
              onClick={() => setFeedbackNotice(null)}
              className="text-slate-400 hover:text-slate-700 ml-4 font-black"
            >
              ×
            </button>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          
          {/* Grid Layout: Left Column Preview | Right Column Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 5 Cols: Live Avatar Preview */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-sky-600" />
                  <span>Avatar Live Preview</span>
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  ● Stationary 100%
                </span>
              </div>

              {/* Video Chamber Box */}
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border-2 border-slate-300 shadow-md">
                <StableMouthLipSyncAvatar
                  imageUrl={settings.avatarUrl}
                  isSpeaking={isPreviewSpeaking}
                  speakingText={previewTestText}
                  speakingRate={settings.speakingRate}
                  gender={settings.gender}
                  isLipSyncEnabled={settings.isLipSyncEnabled}
                />

                {/* Overlaid HR Name Badge */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-white border border-white/10 text-xs">
                  <div>
                    <strong className="block text-white font-black text-xs leading-none">
                      {settings.hrName}
                    </strong>
                    <span className="text-[10px] text-sky-400 font-semibold">
                      {settings.hrTitle}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-sky-500/30 text-sky-300 border border-sky-400/40">
                    {settings.language === 'hi' ? '🇮🇳 Hindi' : '🇬🇧 English'}
                  </span>
                </div>
              </div>

              {/* Voice Preview Tester Button */}
              <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-sky-900">
                    Test Speaking &amp; Lip Sync:
                  </span>
                  <button
                    type="button"
                    onClick={handleTestVoicePreview}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm ${
                      isPreviewSpeaking
                        ? 'bg-rose-600 text-white hover:bg-rose-700'
                        : 'bg-sky-600 text-white hover:bg-sky-700'
                    }`}
                  >
                    {isPreviewSpeaking ? (
                      <>
                        <Square className="w-3.5 h-3.5 fill-current" />
                        <span>Stop Voice</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Preview Voice</span>
                      </>
                    )}
                  </button>
                </div>
                <input
                  type="text"
                  value={previewTestText}
                  onChange={(e) => setPreviewTestText(e.target.value)}
                  className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-sky-200 bg-white text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="Type test text..."
                />
              </div>

              {/* Status info */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold">Avatar Engine:</span>
                  <span className="font-bold text-slate-900">Stable Mouth-Only Mesh</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold">Framing Status:</span>
                  <span className="font-bold text-emerald-600">Fixed / Zero Camera Motion</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold">Resting Mouth:</span>
                  <span className="font-bold text-emerald-600">Strictly Closed at Rest</span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Configuration Controls */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* 1. Avatar Selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <User className="w-4 h-4 text-sky-600" />
                    <span>Select Avatar Interviewer</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1 text-[11px] font-bold text-sky-700 hover:text-sky-900 hover:underline"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Custom Photo</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {availableAvatars.map((av) => {
                    const isSelected = settings.avatarId === av.id || settings.avatarUrl === av.imageUrl;
                    return (
                      <div
                        key={av.id}
                        onClick={() => handleSelectAvatar(av)}
                        className={`cursor-pointer p-2.5 rounded-xl border transition-all flex items-center gap-3 relative ${
                          isSelected
                            ? 'bg-sky-50 border-sky-500 shadow-sm ring-2 ring-sky-500/20'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <img
                          src={av.imageUrl}
                          alt={av.name}
                          className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <strong className="block text-xs font-black text-slate-900 truncate">
                            {av.name}
                          </strong>
                          <span className="text-[10px] text-slate-500 line-clamp-1">
                            {av.role}
                          </span>
                          <span className="text-[9px] font-extrabold uppercase text-sky-700">
                            {av.gender === 'female' ? 'Female Lead' : 'Male Lead'}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Language Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-900 uppercase tracking-wide">
                  Interview Language
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSettings(prev => ({ ...prev, language: 'en' }))}
                    className={`py-2 px-3 rounded-xl border text-xs font-black flex items-center justify-center gap-2 transition-all ${
                      settings.language === 'en'
                        ? 'bg-sky-50 border-sky-500 text-sky-900 ring-2 ring-sky-500/20 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>🇬🇧 English</span>
                    {settings.language === 'en' && <CheckCircle2 className="w-4 h-4 text-sky-600" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSettings(prev => ({ ...prev, language: 'hi' }))}
                    className={`py-2 px-3 rounded-xl border text-xs font-black flex items-center justify-center gap-2 transition-all ${
                      settings.language === 'hi'
                        ? 'bg-sky-50 border-sky-500 text-sky-900 ring-2 ring-sky-500/20 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>🇮🇳 हिंदी (Hindi)</span>
                    {settings.language === 'hi' && <CheckCircle2 className="w-4 h-4 text-sky-600" />}
                  </button>
                </div>
              </div>

              {/* 3. Voice Selector */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-wide">
                    Speech Voice (TTS)
                  </label>
                  <span className="text-[10px] text-slate-500">
                    {availableVoices.length} voice(s) detected
                  </span>
                </div>

                <select
                  value={settings.voiceURI}
                  onChange={(e) => {
                    const uri = e.target.value;
                    const v = availableVoices.find(x => x.voiceURI === uri);
                    setSettings(prev => ({
                      ...prev,
                      voiceURI: uri,
                      voiceName: v ? v.name : 'Default System Voice',
                    }));
                  }}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="auto">Auto Select Best Voice (Recommended)</option>
                  {availableVoices.map((v) => (
                    <option key={v.voiceURI} value={v.voiceURI}>
                      {v.name} ({v.lang})
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Speaking Speed (0.7x to 1.3x) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-sky-600" />
                    <span>Speaking Speed</span>
                  </label>
                  <span className="text-xs font-black text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    {settings.speakingRate.toFixed(2)}x
                  </span>
                </div>
                <input
                  type="range"
                  min="0.75"
                  max="1.25"
                  step="0.02"
                  value={settings.speakingRate}
                  onChange={(e) => setSettings(prev => ({ ...prev, speakingRate: parseFloat(e.target.value) }))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                  <span>0.75x (Deliberate)</span>
                  <span>0.94x (Natural)</span>
                  <span>1.25x (Fast)</span>
                </div>
              </div>

              {/* 5. Lip-Sync Toggle Switch */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <strong className="block text-xs font-black text-slate-900">
                    Stable Mouth-Only Lip Sync
                  </strong>
                  <p className="text-[11px] text-slate-500 m-0">
                    Mouth opens and closes naturally with audio while the head and camera remain completely stationary.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSettings(prev => ({ ...prev, isLipSyncEnabled: !prev.isLipSyncEnabled }))}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out shrink-0 ${
                    settings.isLipSyncEnabled ? 'bg-sky-600' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      settings.isLipSyncEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 px-4 py-2 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white font-black text-xs px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save HR Settings</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
