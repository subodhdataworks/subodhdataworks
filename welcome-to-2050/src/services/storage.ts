import { LearnerProfile, MistakeRecord, MistakeSummary, DayFeedback } from '../types';

const STORAGE_KEYS = {
  PROFILE: 'welcome2050_learner_profile',
  MISTAKES: 'welcome2050_mistakes',
  FEEDBACK: 'welcome2050_feedback',
};

const DEFAULT_PROFILE: LearnerProfile = {
  id: 'learner_' + Math.random().toString(36).substring(2, 9),
  name: 'Explorer',
  careerGoal: 'data_analyst',
  experience: 'never',
  preferredLanguage: 'en',
  completedDays: [],
  completedMissions: [],
  currentDay: 1,
  currentStepIndex: 0,
  completedSteps: [],
  createdAt: new Date().toISOString(),
  devModeUnlocked: false,
};

export class StorageService {
  public static getProfile(): LearnerProfile {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (data) {
        return { ...DEFAULT_PROFILE, ...JSON.parse(data) };
      }
    } catch (e) {
      console.error('Failed to load profile', e);
    }
    return DEFAULT_PROFILE;
  }

  public static saveProfile(profile: LearnerProfile): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to save profile', e);
    }
  }

  public static updateProfile(updates: Partial<LearnerProfile>): LearnerProfile {
    const current = this.getProfile();
    const updated = { ...current, ...updates };
    this.saveProfile(updated);
    return updated;
  }

  public static getMistakes(): MistakeRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MISTAKES);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Failed to load mistakes', e);
    }
    return [];
  }

  public static recordMistake(record: Omit<MistakeRecord, 'id' | 'timestamp'>): MistakeRecord {
    const list = this.getMistakes();
    const newRecord: MistakeRecord = {
      ...record,
      id: 'mistake_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5),
      timestamp: new Date().toISOString(),
    };
    list.push(newRecord);
    try {
      localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to save mistake', e);
    }
    return newRecord;
  }

  public static getMistakeSummary(): MistakeSummary {
    const mistakes = this.getMistakes();
    const summary: MistakeSummary = {
      prediction: 0,
      syntax: 0,
      variable: 0,
      debugging: 0,
      sequence: 0,
      logic: 0,
    };
    for (const m of mistakes) {
      if (summary[m.category] !== undefined) {
        summary[m.category]++;
      }
    }
    return summary;
  }

  public static completeStep(stepIndex: number): LearnerProfile {
    const profile = this.getProfile();
    if (!profile.completedSteps.includes(stepIndex)) {
      profile.completedSteps.push(stepIndex);
    }

    // All 9 steps completed?
    if (profile.completedSteps.length >= 9 && !profile.completedDays.includes(1)) {
      profile.completedDays.push(1);
    }

    this.saveProfile(profile);
    return profile;
  }

  public static saveFeedback(feedback: DayFeedback): void {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FEEDBACK);
      const list: DayFeedback[] = data ? JSON.parse(data) : [];
      list.push(feedback);
      localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to save feedback', e);
    }
  }

  public static getFeedback(): DayFeedback[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FEEDBACK);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Failed to get feedback', e);
    }
    return [];
  }

  public static toggleDevMode(): boolean {
    const profile = this.getProfile();
    profile.devModeUnlocked = !profile.devModeUnlocked;
    this.saveProfile(profile);
    return profile.devModeUnlocked;
  }

  public static loginWithWhatsApp(name: string, whatsappNumber: string): LearnerProfile {
    const profile = this.getProfile();
    profile.name = name.trim();
    profile.whatsappNumber = whatsappNumber.trim();
    this.saveProfile(profile);
    return profile;
  }

  public static unlockSubscription(): LearnerProfile {
    const profile = this.getProfile();
    profile.isSubscribed = true;
    profile.subscribedAt = new Date().toISOString();
    this.saveProfile(profile);
    return profile;
  }

  public static completeCourseTopic(courseId: string, topicId: string): LearnerProfile {
    const profile = this.getProfile();
    if (!profile.completedCourseTopics) {
      profile.completedCourseTopics = {};
    }
    if (!profile.completedCourseTopics[courseId]) {
      profile.completedCourseTopics[courseId] = [];
    }
    if (!profile.completedCourseTopics[courseId].includes(topicId)) {
      profile.completedCourseTopics[courseId].push(topicId);
    }
    this.saveProfile(profile);
    return profile;
  }

  public static resetProgress(): void {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.MISTAKES);
    localStorage.removeItem(STORAGE_KEYS.FEEDBACK);
  }
}
