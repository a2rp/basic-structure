# Basic Structure

A practical Vite and React starter project with client-side routing, lazy-loaded pages, styled-components, and GitHub Pages deployment support.

## Features

- Vite and React setup.
- React Router pages for Home, About, and Not Found.
- Lazy route modules with a shared Suspense loading state.
- Responsive fixed header and footer.
- Styled-components for component-level styling.
- GitHub Pages base path configured as `/basic-structure/`.
- Post-build 404 fallback for static hosting.
- No test setup or unnecessary UI framework dependencies.

## Run locally

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite. The GitHub Pages route uses:

```text
/basic-structure/
```

## Production build

```powershell
npm run build
npm run preview
```

The build creates `dist/index.html` and a `dist/404.html` fallback.

## Deploy to GitHub Pages

```powershell
npm run deploy
```

The deploy script builds the project first and publishes the `dist` directory to the `gh-pages` branch.

## Project structure

```text
src/
  components/       Shared route-aware components
  pages/            Lazy-loaded page modules
  App.jsx           Application shell and route declarations
  App.styled.js     Header, footer, and loading styles
  main.jsx          React entry point and BrowserRouter
  index.css         Global styles
```

## Author

**Ashish Ranjan**
Full-Stack Web Developer

- Portfolio: [ashishranjan.net](https://www.ashishranjan.net/)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- CodePen: [codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [facebook.com/theash.ashish](https://www.facebook.com/theash.ashish/)
- YouTube: [Ashish Ranjan](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- [Support page](https://a2rp-donation-page.netlify.app/)
- [Buy Me a Coffee](https://buymeacoffee.com/a2rp)
- [Patreon](https://www.patreon.com/a2rp)

## License

This project is available under the MIT License. See [LICENSE](LICENSE).
