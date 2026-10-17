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

// Default Configuration for Future IT Industry
export const BUNNY_STREAM_CONFIG: BunnyStreamConfig = {
  // Replace with your Bunny Stream Library ID when generated in Bunny.net dashboard
  libraryId: 'future-it-library',
  streamHost: 'iframe.mediadelivery.net',
  customDomain: 'video.futureitindustry.com',
  tokenAuthEnabled: false,
};

/**
 * Registry of Lesson Videos mapped to Bunny.net Video IDs.
 * Key format: `topic_{topicId}_lesson_{lessonIndex}` or `course_{courseId}_lesson_{lessonId}`
 * 
 * When you upload a video to Bunny.net:
 * 1. Copy the "Video ID" from Bunny Stream (e.g. 'a819b21f-9988-4412-92ab-xxxx')
 * 2. Put it in this registry below, or pass it directly to <BunnyVideoPlayer videoId="..." />
 */
export const LESSON_BUNNY_VIDEOS: Record<string, { videoId: string; title: string; duration?: string }> = {
  // Topic 1: Introduction to Programming
  'topic_1_lesson_1': {
    videoId: 'demo_intro_programming', // Replace with Bunny.net Video GUID
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
