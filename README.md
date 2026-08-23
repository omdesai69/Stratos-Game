<div align="center">
  <h1>Stratos</h1>
  <p><strong>A High-Speed, Procedural Sci-Fi Obstacle Avoidance Game</strong></p>

  [![React](https://img.shields.io/badge/React-19.0.0-blue.svg?style=flat&logo=react)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-6.4.1-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
  [![Capacitor](https://img.shields.io/badge/Capacitor-7.4.4-119EFF.svg?style=flat&logo=capacitor)](https://capacitorjs.com/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
  [![Vercel](https://img.shields.io/badge/Deployed-Vercel-black.svg?style=flat&logo=vercel)](https://stratos-opal.vercel.app/)
</div>

<br/>

Stratos is a high-performance, browser-based endless runner where you pilot an advanced spacecraft through procedurally generated cosmic hazards. Dodge asteroids, navigate nebulas, outmaneuver homing mines, and survive massive laser grids to see how far you can travel into deep space.

---

## Live Demo

**Play the game in your browser:**  
[https://stratos-opal.vercel.app](https://stratos-opal.vercel.app)

---

## Key Features

- **Procedural Level Generation:** AI-driven level progression via Google Gemini creates infinite sectors with scaling difficulty, speed, and obstacle density.
- **Parallax Backgrounds & VFX:** Multi-layered starry backgrounds, dynamic screen shakes, pulsing thrusters, and shockwaves create an immersive visual experience.
- **Near-Miss Combo System:** High-risk, high-reward scoring. Brush closely past obstacles to trigger Near Miss score multipliers.
- **Dynamic Hazards:** Survive targeted Homing Mines and vertical Laser Beams requiring split-second tactical maneuvering.
- **Cross-Platform:** Fluid 60 FPS HTML5 Canvas rendering optimized for keyboard and mobile touch controls (via Capacitor).

---

## Tech Stack

**Frontend & Engine**
- **Framework:** React 19 + Vite
- **Rendering:** HTML5 `<canvas>` via React `useRef` for 60fps draw cycles without DOM overhead
- **Styling & UI:** Tailwind CSS for HUD, menus, and overlays
- **Internationalization:** `i18next` and `react-i18next`

**Procedural Generation & AI**
- **Integration:** Google Gemini GenAI SDK (`@google/genai`) to generate mission names, color themes, and obstacle densities dynamically.

**Build & Mobile**
- **Tooling:** Vite, TypeScript
- **Mobile Deployment:** Ionic Capacitor (`@capacitor/core`, `@capacitor/android`)

---

## Architecture Overview

Stratos uses a decoupled **React + Canvas Architecture**:

1. **The Game Loop:** A single `requestAnimationFrame` loop handles physics, collision, and rendering independently of React state cycles.
2. **React UI Layer:** React manages UI Overlays (Health, Score, Combo, Menus) and communicates with the Canvas via strict callbacks.
3. **Optimized Rendering:** Particles and objects are pooled using pre-allocated array buffering; complex shapes are pre-rendered to an off-screen cache canvas to reduce draw calls.
4. **Adaptive Controls:** Input engine automatically detects touch vs. keyboard input and applies vector smoothing.

---

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` to run the game locally.
