/**
 * Bunny.net Stream Video Service & Registry
 * 
 * Domain: futureitindustry.com (Managed via Cloudflare)
 * CDN / Video Transcoding: Bunny.net Stream (mediadelivery.net / custom pullzone)
 */

export interface BunnyStreamConfig {
  /** Bunny.net Video Library ID from your Bunny Stream Dashboard */
  libraryId: string;
  /** Primary Hostname: Either 'iframe.mediadelivery.net' or custom Cloudflare CNAME like 'video.futureitindustry.com' */
  streamHost: string;
  /** Cloudflare CDN / Custom Subdomain (e.g. 'video.futureitindustry.com' or 'stream.futureitindustry.com') */
  customDomain?: string;
  /** Whether token authentication / signed URLs are enforced */
  tokenAuthEnabled: boolean;
}

const BUNNY_CONFIG_STORAGE_KEY = 'futureai_bunny_stream_config_v1';
const BUNNY_VIDEOS_STORAGE_KEY = 'futureai_lesson_bunny_videos_v1';

// Default Configuration for Future IT Industry
export const BUNNY_STREAM_CONFIG: BunnyStreamConfig = {
  // Official Bunny Stream Library ID
  libraryId: '783689',
  streamHost: 'iframe.mediadelivery.net',
  customDomain: 'video.futureitindustry.com',
  tokenAuthEnabled: false,
};

/**
 * Get dynamic or stored Bunny Stream configuration
 */
export function getBunnyConfig(): BunnyStreamConfig {
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(BUNNY_CONFIG_STORAGE_KEY);
      if (raw) return { ...BUNNY_STREAM_CONFIG, ...JSON.parse(raw) };
    } catch {}
  }
  return BUNNY_STREAM_CONFIG;
}

/**
 * Save updated Bunny Stream configuration from Admin Panel
 */
export function saveBunnyConfig(config: BunnyStreamConfig): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(BUNNY_CONFIG_STORAGE_KEY, JSON.stringify(config));
  }
}

/**
 * Registry of Lesson Videos mapped to Bunny.net Video IDs.
 * Key format: `topic_{topicId}_lesson_{lessonIndex}` or `course_{courseId}_lesson_{lessonId}`
 */
export const LESSON_BUNNY_VIDEOS: Record<string, { videoId: string; title: string; duration?: string }> = {
  // Topic 1: Introduction to Programming
  'topic_1_lesson_1': {
    videoId: '56e7a759-1562-4700-ab14-d5f31b921dc1', // Official Bunny.net Video GUID
    title: '1.1 What Is Programming?',
    duration: '07:40',
  },
  'topic_1_lesson_2': {
    videoId: '',
    title: '1.2 What Is Python?',
    duration: '06:15',
  },
  'topic_1_lesson_3': {
    videoId: '',
    title: '1.3 Why Learn Python?',
    duration: '05:45',
  },
};

/**
 * Get dynamic or stored Lesson Bunny Videos mapping
 */
export function getLessonBunnyVideos(): Record<string, { videoId: string; title: string; duration?: string }> {
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(BUNNY_VIDEOS_STORAGE_KEY);
      if (raw) return { ...LESSON_BUNNY_VIDEOS, ...JSON.parse(raw) };
    } catch {}
  }
  return { ...LESSON_BUNNY_VIDEOS };
}

/**
 * Save updated Bunny Video ID for a specific topic or lesson
 */
export function saveLessonBunnyVideo(key: string, data: { videoId: string; title: string; duration?: string }): Record<string, { videoId: string; title: string; duration?: string }> {
  const current = getLessonBunnyVideos();
  current[key] = data;
  if (typeof window !== 'undefined') {
    localStorage.setItem(BUNNY_VIDEOS_STORAGE_KEY, JSON.stringify(current));
  }
  return current;
}

/**
 * Save bulk updated Bunny Videos mapping
 */
export function saveAllLessonBunnyVideos(allVideos: Record<string, { videoId: string; title: string; duration?: string }>): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(BUNNY_VIDEOS_STORAGE_KEY, JSON.stringify(allVideos));
  }
}

/**
 * Builds the official Bunny.net Stream Embed Iframe URL.
 * Supports standard mediadelivery.net or custom Cloudflare domain.
 */
export function getBunnyEmbedUrl(
  videoId: string,
  options?: {
    libraryId?: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    preload?: boolean;
    responsive?: boolean;
  }
): string {
  const libId = options?.libraryId || BUNNY_STREAM_CONFIG.libraryId;
  const autoplay = options?.autoplay ?? true;
  const loop = options?.loop ?? false;
  const muted = options?.muted ?? false;
  const preload = options?.preload ?? true;
  const responsive = options?.responsive ?? true;

  // If using default Bunny embed
  return `https://iframe.mediadelivery.net/embed/${libId}/${videoId}?autoplay=${autoplay}&loop=${loop}&muted=${muted}&preload=${preload}&responsive=${responsive}`;
}

/**
 * Direct HLS Stream Playlist URL (.m3u8) for native video players (Hls.js / Video.js).
 */
export function getBunnyHlsUrl(videoId: string, pullZoneHost = 'vz-futureit.b-cdn.net'): string {
  const host = BUNNY_STREAM_CONFIG.customDomain || pullZoneHost;
  return `https://${host}/${videoId}/playlist.m3u8`;
}

/**
 * Direct Thumbnail Poster URL from Bunny.net CDN
 */
export function getBunnyThumbnailUrl(videoId: string, pullZoneHost = 'vz-futureit.b-cdn.net'): string {
  const host = BUNNY_STREAM_CONFIG.customDomain || pullZoneHost;
  return `https://${host}/${videoId}/thumbnail.jpg`;
}
