import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { initAppCacheVersioning } from './services/appVersionService';

// Clean up obsolete caches and stale storage synchronously before React mounts
initAppCacheVersioning();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
