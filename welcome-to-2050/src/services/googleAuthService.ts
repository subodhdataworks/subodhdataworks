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

export const DEFAULT_GOOGLE_CLIENT_ID = '876024198925-9d6giu09rj5arv1921391drolplq6q99.apps.googleusercontent.com';

export function getGoogleClientId(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('futureai_google_client_id');
    if (saved && saved.trim().length > 10) return saved.trim();
  }
  return (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GOOGLE_CLIENT_ID) || DEFAULT_GOOGLE_CLIENT_ID;
}

export function saveGoogleClientId(clientId: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('futureai_google_client_id', clientId.trim());
  }
}

export const GOOGLE_CLIENT_ID = getGoogleClientId();

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
    if ((window as any).google?.accounts?.oauth2) return resolve(true);

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

/**
 * Real Google Account Selection via Google Identity Services Token Client
 * Directly triggers Google's native account chooser with existing Gmail logins
 */
export function requestGoogleAccountLogin(): Promise<{ name: string; email: string; picture: string; sub: string }> {
  return new Promise((resolve, reject) => {
    const clientId = getGoogleClientId();
    if (!clientId) {
      return reject(new Error('NO_CLIENT_ID'));
    }

    // Safety timeout: on mobile devices, if popup is blocked or closed silently, resolve gracefully
    const timeoutId = setTimeout(() => {
      reject(new Error('POPUP_TIMEOUT_OR_BLOCKED'));
    }, 5000);

    loadGoogleScript().then((loaded) => {
      if (!loaded || !(window as any).google?.accounts?.oauth2) {
        clearTimeout(timeoutId);
        return reject(new Error('SDK_NOT_LOADED'));
      }

      try {
        const client = (window as any).google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: 'openid email profile',
          callback: async (tokenResponse: any) => {
            clearTimeout(timeoutId);
            if (tokenResponse?.access_token) {
              try {
                const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                  headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                });
                const userInfo = await userInfoRes.json();
                if (userInfo?.email) {
                  return resolve({
                    name: userInfo.name || userInfo.email.split('@')[0],
                    email: userInfo.email,
                    picture: userInfo.picture || '',
                    sub: userInfo.sub || Date.now().toString(),
                  });
                }
              } catch (err) {
                return reject(err);
              }
            }
            reject(new Error('TOKEN_ERROR'));
          },
          error_callback: (err: any) => {
            clearTimeout(timeoutId);
            reject(err);
          },
        });

        client.requestAccessToken({ prompt: 'select_account' });
      } catch (e) {
        clearTimeout(timeoutId);
        reject(e);
      }
    });
  });
}
