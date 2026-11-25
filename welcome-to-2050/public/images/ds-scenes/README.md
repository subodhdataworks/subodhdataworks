# Data Science & Agentic AI — 16:9 No-Crop Realistic Scene Slot Directory

Place generated 16:9 realistic images (`.webp`, `.png`, or `.jpg`) in this folder (`public/images/ds-scenes/`) and register their slug in `DS_SCENE_IMAGE_REGISTRY` inside `src/components/futureai/visualNotes/PremiumVisualCardShowcase.tsx` (or pass `imageUrl: '/images/ds-scenes/<filename>.webp'` directly on any `compare` item).

All images in this slot render inside an `aspect-video` (`16:9`) container with `object-contain` so zero cropping occurs.
