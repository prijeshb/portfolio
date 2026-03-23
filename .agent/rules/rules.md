# Portfolio Website Guidelines

1. **Tech Stack Constraints:**
   - Use React 18+ with TypeScript.
   - Use Vite for fast tooling and build processes.
   - Use GSAP for scroll animations and React Three Fiber (@react-three/fiber) for 3D elements.

2. **Styling Standards:**
   - Use Vanilla CSS for styling (no Tailwind CSS unless explicitly configured otherwise).
   - Maintain the dark-themed, glassmorphism aesthetic (`--bg-glass`, `--text-primary`, etc.).
   - Follow responsive design principles (e.g. mobile menus, responsive grids).

3. **General Best Practices:**
   - Always verify React Fast Refresh compatibility when writing context providers and hooks.
   - Components should remain functional, clean, and modular.
   - Ensure external media paths are absolute or properly imported from the `src/assets` folder.
