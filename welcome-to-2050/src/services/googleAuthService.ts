/**
 * Google 1-Click Authentication Service (100% Free Lifetime)
 * Uses Google Identity Services (GSI) OAuth 2.0
 */

export interface GoogleUserProfile {
  name: string;
  email: string;
  picture?: string;
  sub?: string;
}

// Google Client ID: Put your client ID here or in .env VITE_GOOGLE_CLIENT_ID
// You can get this 100% free from Google Cloud Console (APIs & Services > Credentials)
export const GOOGLE_CLIENT_ID = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GOOGLE_CLIENT_ID) || '';

/**
 * Safely parse a JWT token returned by Google OAuth without external libraries
 */
export function parseJwt(token: string): any {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Error parsing Google JWT', e);
    return null;
  }
}

/**
 * Loads the official Google Identity Services SDK dynamically
 */
export function loadGoogleScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if ((window as any).google?.accounts?.id) return resolve(true);

    const existingScript = document.getElementById('google-gsi-client');
    if (existingScript) return resolve(true);

    const script = document.createElement('script');
    script.id = 'google-gsi-client';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}
