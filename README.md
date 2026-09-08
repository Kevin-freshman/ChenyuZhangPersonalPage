# Chenyu Zhang — Robotics & Embodied AI

Personal research website using the selected Field Notes direction: editorial typography, two concept illustrations, robotics research, additional quantitative projects, education, and contact.

Live: https://kevin-freshman.github.io/ChenyuZhangPersonalPage/

## Develop

Requires Node.js 22.12+ or 24 and npm.

```sh
npm ci
npm run dev
```

Edit `site/src/data/profile.ts` for identity and research descriptions, `site/src/App.tsx` for page structure, and `site/src/index.css` for styling. Fonts are bundled locally. `public/generated/` contains original generated concept images, explicitly labeled in the interface and alt text. No photograph of the owner is shown yet.

## Build and publish

```sh
npm run build
```

The build type-checks React source, writes Vite output to `dist/`, verifies required assets, then copies only known production files to the repository root. GitHub Pages continues to serve `main` at `/`; no hosting-setting change is needed. Commit source, lockfile and generated root files together before pushing. Do not hand-edit root `index.html`, which is compiled output. `.nojekyll` prevents Jekyll processing.

The Vite base is `/ChenyuZhangPersonalPage/`. Local development and production use that path. `dist/` and `node_modules/` are ignored. Old source snapshots remain for historical reference; they are not linked from the new homepage.

## Export

Export PDF opens the browser print dialog; choose Save as PDF. Dedicated print CSS lays out the content and hides navigation and the floating control. This is a print-to-PDF workflow, not an automatic binary download.

## Content boundaries

Robotics is the primary topic. UC Berkeley appears only as a 2026 Summer Session under additional coursework. Quantitative analysis is a secondary project. Concept imagery does not represent actual apparatus or measured results. No unverified results, publication record, grades, or awards are claimed. See `DESIGN.md` for the selected direction and content decisions.
