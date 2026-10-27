// HR Settings Service for Future.AI Interviewer Management
// Handles persistence, voice registry, validation, and defaults

export interface HrAvatarOption {
  id: string;
  name: string;
  role: string;
  gender: 'female' | 'male';
  imageUrl: string;
  isCustom?: boolean;
}

export interface HrSettingsConfig {
  avatarId: string;
  avatarUrl: string;
  hrName: string;
  hrTitle: string;
  hrRole: string;
  gender: 'female' | 'male';
  language: 'en' | 'hi';
  voiceURI: string;
  voiceName: string;
  speakingRate: number; // 0.7 to 1.3, default 0.94
  speakingPitch: number; // 0.8 to 1.2, default 1.0
  isLipSyncEnabled: boolean;
  avatarStatus: 'ready' | 'configured';
  lastUpdated: string;
}

export const PRESET_HR_AVATARS: HrAvatarOption[] = [
  {
    id: 'avatar_rohan_male',
    name: 'Rohan Verma (HR)',
    role: 'Senior Technical Recruiter (Indian English)',
    gender: 'male',
    imageUrl: '/images/hr_interviewer_indian_male.jpg',
  },
  {
    id: 'avatar_priya_female',
    name: 'Aditi Sharma (HR)',
    role: 'Lead Technical Recruiter (हिंदी)',
    gender: 'female',
    imageUrl: '/images/hr_interviewer_indian_female.jpg',
  },
];

export const DEFAULT_HR_SETTINGS: HrSettingsConfig = {
  avatarId: 'avatar_rohan_male',
  avatarUrl: '/images/hr_interviewer_indian_male.jpg',
  hrName: 'Rohan Verma',
  hrTitle: 'Technical Recruiter',
  hrRole: 'Senior Technical Recruiter & Analytics Lead',
  gender: 'male',
  language: 'en',
  voiceURI: 'auto',
  voiceName: 'Default System Voice',
  speakingRate: 0.94,
  speakingPitch: 1.0,
  isLipSyncEnabled: true,
  avatarStatus: 'ready',
  lastUpdated: new Date().toISOString(),
};

const STORAGE_KEY_HR_SETTINGS = 'futureai_hr_interviewer_settings_v2';
const STORAGE_KEY_CUSTOM_AVATARS = 'futureai_hr_custom_avatars';

export class HrSettingsService {
  public static getSettings(): HrSettingsConfig {
    if (typeof window === 'undefined') return DEFAULT_HR_SETTINGS;
    try {
      const data = localStorage.getItem(STORAGE_KEY_HR_SETTINGS);
      if (data) {
        const parsed = JSON.parse(data);
        return {
          ...DEFAULT_HR_SETTINGS,
          ...parsed,
          speakingRate: typeof parsed.speakingRate === 'number' ? parsed.speakingRate : DEFAULT_HR_SETTINGS.speakingRate,
          speakingPitch: typeof parsed.speakingPitch === 'number' ? parsed.speakingPitch : DEFAULT_HR_SETTINGS.speakingPitch,
          isLipSyncEnabled: typeof parsed.isLipSyncEnabled === 'boolean' ? parsed.isLipSyncEnabled : true,
        };
      }
    } catch (e) {
      console.warn('Failed to load HR settings from storage', e);
    }
    return DEFAULT_HR_SETTINGS;
  }

  public static saveSettings(settings: Partial<HrSettingsConfig>): { success: boolean; data: HrSettingsConfig; error?: string } {
    if (typeof window === 'undefined') return { success: false, data: DEFAULT_HR_SETTINGS, error: 'Window not defined' };

    try {
      const current = this.getSettings();
      const updated: HrSettingsConfig = {
        ...current,
        ...settings,
        speakingRate: Math.min(1.3, Math.max(0.7, Number(settings.speakingRate ?? current.speakingRate))),
        speakingPitch: Math.min(1.2, Math.max(0.8, Number(settings.speakingPitch ?? current.speakingPitch))),
        lastUpdated: new Date().toISOString(),
        avatarStatus: 'configured',
      };

      // Validation
      if (!updated.avatarUrl || updated.avatarUrl.trim().length === 0) {
        return { success: false, data: current, error: 'Avatar image URL cannot be empty' };
      }
      if (!updated.hrName || updated.hrName.trim().length === 0) {
        return { success: false, data: current, error: 'Interviewer name cannot be empty' };
      }

      localStorage.setItem(STORAGE_KEY_HR_SETTINGS, JSON.stringify(updated));

      // Dispatch custom event for real-time synchronization across open components
      window.dispatchEvent(new CustomEvent('futureai_hr_settings_updated', { detail: updated }));

      return { success: true, data: updated };
    } catch (e: any) {
      console.error('Error saving HR settings', e);
      return { success: false, data: this.getSettings(), error: e?.message || 'Failed to persist settings' };
    }
  }

  public static resetToDefault(): HrSettingsConfig {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEY_HR_SETTINGS);
        window.dispatchEvent(new CustomEvent('futureai_hr_settings_updated', { detail: DEFAULT_HR_SETTINGS }));
      } catch (e) {
        console.warn('Reset HR settings notice', e);
      }
    }
    return DEFAULT_HR_SETTINGS;
  }

  public static getCustomAvatars(): HrAvatarOption[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEY_CUSTOM_AVATARS);
      if (data) return JSON.parse(data);
    } catch {}
    return [];
  }

  public static addCustomAvatar(avatar: Omit<HrAvatarOption, 'id'>): HrAvatarOption {
    const list = this.getCustomAvatars();
    const newAvatar: HrAvatarOption = {
      ...avatar,
      id: `custom_${Date.now()}`,
      isCustom: true,
    };
    list.unshift(newAvatar);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY_CUSTOM_AVATARS, JSON.stringify(list));
      } catch (e) {
        console.error('Failed to save custom avatar', e);
      }
    }
    return newAvatar;
  }

  public static getAllAvatars(): HrAvatarOption[] {
    return [...PRESET_HR_AVATARS, ...this.getCustomAvatars()];
  }

  // Retrieve browser voices matching language filter
  public static getAvailableVoices(lang: 'en' | 'hi'): SpeechSynthesisVoice[] {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
    const all = window.speechSynthesis.getVoices();
    if (lang === 'hi') {
      const hiVoices = all.filter(v => v.lang.toLowerCase().startsWith('hi') || v.name.toLowerCase().includes('hindi'));
      if (hiVoices.length > 0) return hiVoices;
      // Fallback to Indian English voices for Hindi region
      const inVoices = all.filter(v => v.lang.toLowerCase().includes('in'));
      if (inVoices.length > 0) return inVoices;
    }
    return all.filter(v => v.lang.toLowerCase().startsWith('en') || v.lang.toLowerCase().startsWith(lang));
  }
}
