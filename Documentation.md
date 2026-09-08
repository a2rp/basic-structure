# Documentation

## Application flow

1. `src/main.jsx` mounts React and configures `BrowserRouter` with the GitHub Pages basename.
2. `src/App.jsx` defines the shared shell, navigation, footer, and route table.
3. Route components are imported lazily so the initial bundle stays focused.
4. `Suspense` renders a loading indicator while a page module is being loaded.
5. `ScrollToTop` resets the viewport after each client-side route change.
6. Each page keeps its layout styles beside its content module.

## Routes

| Path | Page |
| --- | --- |
| `/` | Starter overview and feature cards |
| `/about` | Project and author information |
| Any other path | Not Found page |

The production basename is `/basic-structure`, so the deployed routes are prefixed with `/basic-structure`.

## GitHub Pages support

Vite uses `base: "/basic-structure/"` in `vite.config.js`. The post-build script copies `dist/index.html` to `dist/404.html` so direct links can fall back to the application shell on GitHub Pages.

## Local commands

Install dependencies:

```powershell
npm install
```

Start the Vite development server:

```powershell
npm run dev
```

Validate the code with ESLint:

```powershell
npm run lint
```

Create and preview the production build:

```powershell
npm run build
npm run preview
```

Publish the build:

```powershell
npm run deploy
```

## Design decisions

- The project remains a Vite project.
- Styled-components is the single styling library used by the application.
- The route loading delay is not artificially extended; Suspense handles real module loading.
- The layout is responsive without requiring a separate UI framework.
- No test folder or test script is included.
