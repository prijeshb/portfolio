---
name: Scene Optimization
description: Skills for optimizing Three.js Canvas scenes to ensure 60fps
---

# Scene Optimization

When editing `src/components/Character/Scene.tsx` or `TechStack.tsx`, ensure:
1. `dpr` (device pixel ratio) is clamped (`[1, 1.5]` or `[1, 2]`) to avoid destroying mobile performance.
2. Models and GLTF items should be heavily compressed (Draco or meshopt) before importing.
3. Use `Suspense` properly for async loading to avoid main-thread blocking.
