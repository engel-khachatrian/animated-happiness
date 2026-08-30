# Animated Happiness

A cheerful landing page built as a first frontend project to explore React, Vite, and GitHub Pages deployment.

This project is a playful, joyful interface with floating elements, soft gradients, and a positive visual identity. The idea is to create something light, memorable, and easy to extend for future experiments.

## Live demo

https://engel-khachatrian.github.io/animated-happiness/

## Project goals

- Learn the basics of React component structure
- Practice styling with CSS and motion effects
- Build a simple landing page with a polished visual style
- Deploy a working website to GitHub Pages
- Create a clean foundation for future projects

## Features

- Responsive landing page layout
- Animated floating decorative notes
- Joyful hero section with custom illustration
- Bright gradient theme and glassmorphism-inspired panels
- Smooth interactive button animation
- Simple, reusable component structure

## Tech stack

- React 19
- Vite
- JavaScript
- CSS
- GitHub Pages

## Getting started

1. Clone the repository
   ```bash
   git clone https://github.com/engel-khachatrian/animated-happiness.git
   cd animated-happiness
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the project locally
   ```bash
   npm run dev
   ```

4. Open the app in your browser
   ```bash
   http://localhost:5173/
   ```

## Available scripts

```bash
npm run dev
npm run build
npm run preview
npm run deploy
```

### Script descriptions

- `npm run dev` — starts the local development server
- `npm run build` — creates the production bundle
- `npm run preview` — previews the production build locally
- `npm run deploy` — publishes the built app to GitHub Pages

## Deployment

This project is configured for GitHub Pages.

To deploy manually:

```bash
npm run deploy
```

If the page is not visible immediately, make sure the repository settings use:

- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/root`

## Project structure

```bash
animated-happiness/
├── components/
│   ├── AboutSection.jsx
│   ├── Features.jsx
│   ├── FloatingNotes.jsx
│   ├── HappyFace.jsx
│   ├── Header.jsx
│   └── Hero.jsx
├── App.jsx
├── App.css
├── main.jsx
├── style.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── LICENSE
└── dist/
```

## Notes

This is a first project, and that is part of its value. It is intentionally simple, readable, and beginner-friendly while still showing a polished result.

## Future ideas

- Add more sections such as pricing, testimonials, or contact form
- Turn this into a portfolio, product landing page, or personal brand page
- Add dark mode and theme toggling
- Expand with more interactive animations and micro-interactions

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
