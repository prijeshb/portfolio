# Prijesh Bhingradiya — Portfolio

A modern, high-performance personal portfolio website featuring immersive 3D animations and smooth scroll interactions.

**Live preview:** [github.com/prijeshb/portfolio](https://github.com/prijeshb/portfolio)

---

## ✨ Features

- 🎮 **Interactive 3D Character** — Animated GLB avatar built with Three.js that reacts to mouse movement
- 🌐 **3D Tech Stack Spheres** — Physics-based bouncing tech icons powered by `@react-three/rapier`
- 🚀 **Smooth Scrolling** — GSAP `ScrollSmoother` for buttery-smooth page navigation
- 💼 **Career Timeline** — Experience history with animated transitions
- 📷 **Project Carousel** — Featured projects with navigation arrows and indicators
- 📬 **Contact Section** — Links to email, GitHub, and LinkedIn
- 📄 **Resume Download** — Direct one-click resume button in the sidebar

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | React 18 + TypeScript + Vite |
| 3D Rendering | Three.js, @react-three/fiber, @react-three/drei |
| Physics | @react-three/rapier |
| Animations | GSAP, ScrollSmoother |
| Styling | Vanilla CSS (dark theme, glassmorphism) |
| Icons | react-icons |
| Build | Vite |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
src/
├── assets/          # Static images, fonts, and resume
├── components/      # Feature components (Landing, About, Career, Work, Contact)
│   └── Character/   # 3D avatar scene, animations, and utils
├── context/         # Global state (LoadingProvider)
├── data/            # Static bone data for 3D character
├── App.tsx          # Root application
└── main.tsx         # Entry point
```

---

## 📬 Contact

**Prijesh Bhingradiya**
- 📧 [prijeshbhingradiya627@gmail.com](mailto:prijeshbhingradiya627@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/prijesh-bhingradiya-5ba46472/)
- 🐙 [GitHub](https://github.com/prijeshb)

---

*Developed using [Antigravity](https://antigravity.google) and [Gemini](https://gemini.google.com)*
