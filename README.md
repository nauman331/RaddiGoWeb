# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # RaddiGoWeb

    A modern, fast marketing site built with React, TypeScript, Vite and Tailwind CSS. Clean component structure, routed pages, and optimized build for Vercel or static hosting.

    **What this repo contains**
    - **UI:** Reusable components in `src/components` and a layout in `src/components/layout`
    - **Pages:** `src/pages/Home.tsx` as the main entry page
    - **Tooling:** Vite for fast dev server, TypeScript for types, ESLint for linting, Tailwind for styling

    ## Demo
    Run locally to preview the site (no public demo provided).

    ## Quick Start
    Install dependencies and run the dev server:

    ```bash
    npm install
    npm run dev
    ```

    Build for production:

    ```bash
    npm run build
    npm run preview   # serves the built site locally
    ```

    Lint the codebase:

    ```bash
    npm run lint
    ```

    ## Features
    - Fast development with Vite HMR
    - Type-safe React with TypeScript
    - Utility-first styling using Tailwind CSS
    - Clean component layout (Hero, Gallery, CTA, Testimonials, etc.)
    - Ready for deployment to Vercel or other static hosts

    ## Project Structure (high level)
    - `index.html` — Vite entry
    - `src/main.tsx` — app bootstrap
    - `src/App.tsx` — top-level routes and layout
    - `src/pages/Home.tsx` — homepage
    - `src/components/*` — UI components (Hero, Gallery, CTA, Testimonials, Navbar, Footer)
    - `public/` — static assets

    ## Tech Stack
    - React 19
    - TypeScript
    - Vite
    - Tailwind CSS
    - ESLint

    ## Deployment
    This project is compatible with Vercel. A `vercel.json` exists in the repo for configuration. For quick deployment, push to a Git remote and import the repo in Vercel.

    ## Contributing
    - Open an issue for feature requests or bugs
    - Fork the repo, create a feature branch, and submit a pull request

    ## License
    This repository has no license set. Add a `LICENSE` file if you want to define terms.

    ---

    If you'd like, I can also:
    - add a project screenshot or live demo link
    - add a short Getting Started section for Tailwind config
    - commit this change for you
