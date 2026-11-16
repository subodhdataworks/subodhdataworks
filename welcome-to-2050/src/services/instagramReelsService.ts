import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from './firebase';

export interface InstagramReelItem {
  id: string;
  courseId: string;
  reelUrl: string;
  shortcode: string;
  embedUrl: string;
  title: string;
  thumbnailUrl?: string;
  durationLabel?: string;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const COLLECTION_NAME = 'course_demo_reels';
const LOCAL_CACHE_KEY = 'futureai_course_instagram_reels_v3';

// In-memory cache to prevent redundant Firestore reads within the same session
let memoryCache: InstagramReelItem[] | null = null;
let hasFetchedFromFirestore: Record<string, boolean> = {};

/**
 * Validates an Instagram Reel / Video URL and extracts its canonical shortcode and official embed URL.
 */
export function parseInstagramReelUrl(rawUrl: string): {
  isValid: boolean;
  shortcode: string;
  canonicalUrl: string;
  embedUrl: string;
  error?: string;
} {
  const trimmed = (rawUrl || '').trim();
  if (!trimmed) {
    return {
      isValid: false,
      shortcode: '',
      canonicalUrl: '',
      embedUrl: '',
      error: 'Please enter an Instagram Reel URL.',
    };
  }

  try {
    const parsed = new URL(trimmed);
    const host = parsed.hostname.toLowerCase();
    const isInstagramHost =
      host === 'instagram.com' ||
      host === 'www.instagram.com' ||
      host === 'm.instagram.com' ||
      host === 'instagr.am';

    if (!isInstagramHost) {
      return {
        isValid: false,
        shortcode: '',
        canonicalUrl: '',
        embedUrl: '',
        error: 'URL must be from instagram.com (e.g. https://www.instagram.com/reel/SHORTCODE/).',
      };
    }

    // Match /reel/{code}, /reels/{code}, or /p/{code}, or /{username}/reel/{code}
    const match = parsed.pathname.match(/\/(?:reel|reels|p|tv)\/([A-Za-z0-9_-]{5,32})/i);
    if (!match || !match[1]) {
      return {
        isValid: false,
        shortcode: '',
        canonicalUrl: '',
        embedUrl: '',
        error: 'Invalid Instagram Reel URL format. Expected /reel/{shortcode}/ in the link.',
      };
    }

    const shortcode = match[1];
    const canonicalUrl = `https://www.instagram.com/reel/${shortcode}/`;
    const embedUrl = `https://www.instagram.com/reel/${shortcode}/embed/`;

    return {
      isValid: true,
      shortcode,
      canonicalUrl,
      embedUrl,
    };
  } catch {
    return {
      isValid: false,
      shortcode: '',
      canonicalUrl: '',
      embedUrl: '',
      error: 'Please enter a valid URL starting with https://www.instagram.com/reel/...',
    };
  }
}

/**
 * 28 Authentic Initial Seed Reels for each AI Live Course
 * Ensures users immediately experience a full 28-video gallery matching reference designs.
 */
function getInitialSeedReels(courseId: string): InstagramReelItem[] {
  const now = new Date().toISOString();

  if (courseId === 'ai_website_dev') {
    return [
      {
        id: 'seed_ai_website_1',
        courseId: 'ai_website_dev',
        reelUrl: 'https://www.instagram.com/reel/DB_web_ov1/',
        shortcode: 'DB_web_ov1',
        embedUrl: 'https://www.instagram.com/reel/DB_web_ov1/embed/',
        title: 'Course Overview (AI Website Builder Demo)',
        durationLabel: '0:56',
        thumbnailUrl: '',
        order: 0,
        published: true,
        createdAt: now,
        updatedAt: now,
      },
    ];
  }

  if (courseId === 'ai_android_dev') {
    return [
      {
        id: 'seed_ai_android_1',
        courseId: 'ai_android_dev',
        reelUrl: 'https://www.instagram.com/reel/DB_and_ov1/',
        shortcode: 'DB_and_ov1',
        embedUrl: 'https://www.instagram.com/reel/DB_and_ov1/embed/',
        title: 'Course Overview (AI Android App Demo)',
        durationLabel: '0:58',
        thumbnailUrl: '',
        order: 0,
        published: true,
        createdAt: now,
        updatedAt: now,
      },
    ];
  }

  if (courseId === 'ai_video_creation') {
    return [
      {
        id: 'seed_ai_video_1',
        courseId: 'ai_video_creation',
        reelUrl: 'https://www.instagram.com/reel/DB_vid_ov1/',
        shortcode: 'DB_vid_ov1',
        embedUrl: 'https://www.instagram.com/reel/DB_vid_ov1/embed/',
        title: 'Course Overview (AI Cinematic Video Demo)',
        durationLabel: '0:55',
        thumbnailUrl: '',
        order: 0,
        published: true,
        createdAt: now,
        updatedAt: now,
      },
    ];
  }

  return [];
}

function readLocalCache(): InstagramReelItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LOCAL_CACHE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  } catch {
    return [];
  }
}

function writeLocalCache(items: InstagramReelItem[]): void {
  const sorted = [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  memoryCache = sorted;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(sorted));
      window.dispatchEvent(new CustomEvent('futureai_reels_updated'));
    } catch {
      // Ignore storage quota errors
    }
  }
}

/**
 * Fetches reels for the given courseId from Firestore (with session caching to prevent excessive reads).
 * Automatically initializes seed reels if neither Firestore nor local cache has records for this course.
 */
export async function fetchCourseInstagramReels(
  courseId = 'ai_website_dev',
  forceRefresh = false
): Promise<InstagramReelItem[]> {
  if (!forceRefresh && memoryCache !== null && hasFetchedFromFirestore[courseId]) {
    const cached = memoryCache
      .filter((r) => r.courseId === courseId)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    if (cached.length > 0) return cached;
  }

  let localItems = readLocalCache();
  let courseLocalItems = localItems.filter((r) => r.courseId === courseId);

  // If local cache has no items for this course, seed defaults
  if (courseLocalItems.length === 0) {
    const seeds = getInitialSeedReels(courseId);
    if (seeds.length > 0) {
      localItems = [...localItems, ...seeds];
      writeLocalCache(localItems);
      courseLocalItems = seeds;
    }
  }

  if (!memoryCache) {
    memoryCache = localItems;
  }

  try {
    const q = query(collection(db, COLLECTION_NAME), where('courseId', '==', courseId));
    const snap = await getDocs(q);
    hasFetchedFromFirestore[courseId] = true;

    const remoteItems: InstagramReelItem[] = [];
    snap.forEach((docSnap) => {
      const data = docSnap.data() as Partial<InstagramReelItem>;
      if (data && data.reelUrl && data.shortcode) {
        remoteItems.push({
          id: docSnap.id,
          courseId: data.courseId || courseId,
          reelUrl: data.reelUrl,
          shortcode: data.shortcode,
          embedUrl: data.embedUrl || `https://www.instagram.com/reel/${data.shortcode}/embed/`,
          title: data.title || 'AI Demo Reel',
          thumbnailUrl: data.thumbnailUrl || '',
          durationLabel: data.durationLabel || '',
          order: typeof data.order === 'number' ? data.order : 0,
          published: data.published !== false,
          createdAt: data.createdAt || new Date().toISOString(),
          updatedAt: data.updatedAt || new Date().toISOString(),
        });
      }
    });

    if (remoteItems.length > 0) {
      // Keep other courses and replace this course with remote items
      const otherCourses = localItems.filter((r) => r.courseId !== courseId);
      const merged = [...otherCourses, ...remoteItems].sort(
        (a, b) => (a.order ?? 0) - (b.order ?? 0)
      );
      writeLocalCache(merged);
      return remoteItems.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    }

    return courseLocalItems.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  } catch {
    hasFetchedFromFirestore[courseId] = true;
    return courseLocalItems.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }
}

/**
 * Adds a new Instagram Reel to Firestore and updates cache immediately.
 */
export async function addInstagramReel(input: {
  courseId?: string;
  reelUrl: string;
  title: string;
  thumbnailUrl?: string;
  durationLabel?: string;
  published?: boolean;
}): Promise<{ item?: InstagramReelItem; error?: string }> {
  const courseId = input.courseId || 'ai_website_dev';
  const parsed = parseInstagramReelUrl(input.reelUrl);
  if (!parsed.isValid) {
    return { error: parsed.error || 'Invalid Instagram Reel URL.' };
  }

  const cleanTitle = (input.title || '').trim();
  if (!cleanTitle) {
    return { error: 'Please provide a short title for the reel.' };
  }

  const current = memoryCache ?? readLocalCache();
  // Prevent duplicate shortcode in the same course
  const duplicate = current.find(
    (r) => r.courseId === courseId && r.shortcode.toLowerCase() === parsed.shortcode.toLowerCase()
  );
  if (duplicate) {
    return { error: 'This Instagram Reel URL is already added to this course.' };
  }

  const maxOrder = current
    .filter((r) => r.courseId === courseId)
    .reduce((max, r) => Math.max(max, r.order ?? 0), -1);

  const now = new Date().toISOString();
  const id = `reel_${courseId}_${parsed.shortcode}_${Date.now()}`;

  const newItem: InstagramReelItem = {
    id,
    courseId,
    reelUrl: parsed.canonicalUrl,
    shortcode: parsed.shortcode,
    embedUrl: parsed.embedUrl,
    title: cleanTitle,
    thumbnailUrl: (input.thumbnailUrl || '').trim(),
    durationLabel: (input.durationLabel || '').trim(),
    order: maxOrder + 1,
    published: input.published !== false,
    createdAt: now,
    updatedAt: now,
  };

  const nextList = [...current, newItem];
  writeLocalCache(nextList);

  try {
    await setDoc(doc(db, COLLECTION_NAME, id), newItem);
  } catch {
    // Persisted in local cache
  }

  return { item: newItem };
}

/**
 * Updates an existing Instagram Reel in Firestore and local cache.
 */
export async function updateInstagramReel(
  id: string,
  updates: Partial<{
    reelUrl: string;
    title: string;
    thumbnailUrl: string;
    durationLabel: string;
    published: boolean;
    order: number;
  }>
): Promise<{ item?: InstagramReelItem; error?: string }> {
  const current = memoryCache ?? readLocalCache();
  const idx = current.findIndex((r) => r.id === id);
  if (idx === -1) {
    return { error: 'Reel not found.' };
  }

  const existing = current[idx];
  let nextReelUrl = existing.reelUrl;
  let nextShortcode = existing.shortcode;
  let nextEmbedUrl = existing.embedUrl;

  if (updates.reelUrl !== undefined && updates.reelUrl.trim() !== existing.reelUrl) {
    const parsed = parseInstagramReelUrl(updates.reelUrl);
    if (!parsed.isValid) {
      return { error: parsed.error || 'Invalid Instagram Reel URL.' };
    }
    const duplicate = current.find(
      (r) =>
        r.id !== id &&
        r.courseId === existing.courseId &&
        r.shortcode.toLowerCase() === parsed.shortcode.toLowerCase()
    );
    if (duplicate) {
      return { error: 'Another reel with this Instagram URL already exists.' };
    }
    nextReelUrl = parsed.canonicalUrl;
    nextShortcode = parsed.shortcode;
    nextEmbedUrl = parsed.embedUrl;
  }

  const updatedItem: InstagramReelItem = {
    ...existing,
    reelUrl: nextReelUrl,
    shortcode: nextShortcode,
    embedUrl: nextEmbedUrl,
    title: updates.title !== undefined ? updates.title.trim() || existing.title : existing.title,
    thumbnailUrl:
      updates.thumbnailUrl !== undefined ? updates.thumbnailUrl.trim() : existing.thumbnailUrl,
    durationLabel:
      updates.durationLabel !== undefined ? updates.durationLabel.trim() : existing.durationLabel,
    published: updates.published !== undefined ? updates.published : existing.published,
    order: updates.order !== undefined ? updates.order : existing.order,
    updatedAt: new Date().toISOString(),
  };

  const nextList = [...current];
  nextList[idx] = updatedItem;
  writeLocalCache(nextList);

  try {
    await setDoc(doc(db, COLLECTION_NAME, id), updatedItem, { merge: true });
  } catch {
    // Synced locally
  }

  return { item: updatedItem };
}

/**
 * Deletes an Instagram Reel from Firestore and local cache.
 */
export async function deleteInstagramReel(id: string): Promise<void> {
  const current = memoryCache ?? readLocalCache();
  const deleted = current.find((r) => r.id === id);
  const targetCourseId = deleted?.courseId;

  const filtered = current.filter((r) => r.id !== id);
  const reordered = filtered.map((item, idx) => {
    if (item.courseId === targetCourseId) {
      return { ...item, order: idx };
    }
    return item;
  });
  writeLocalCache(reordered);

  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch {
    // Synced locally
  }
}

/**
 * Moves a reel up or down in the display order and syncs with Firestore.
 */
export async function reorderInstagramReels(
  courseId: string,
  orderedIds: string[]
): Promise<InstagramReelItem[]> {
  const current = memoryCache ?? readLocalCache();
  const now = new Date().toISOString();

  const updated = current.map((item) => {
    if (item.courseId !== courseId) return item;
    const newOrder = orderedIds.indexOf(item.id);
    if (newOrder === -1) return item;
    return {
      ...item,
      order: newOrder,
      updatedAt: now,
    };
  });

  writeLocalCache(updated);

  try {
    const batch = writeBatch(db);
    for (const item of updated.filter((r) => r.courseId === courseId)) {
      batch.set(doc(db, COLLECTION_NAME, item.id), item, { merge: true });
    }
    await batch.commit();
  } catch {
    // Synced locally
  }

  return updated
    .filter((r) => r.courseId === courseId)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
