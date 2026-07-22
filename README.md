# FrontierPunks

A minimal, statically-hosted blog built with **React**, **Vite**, and
**[Fluent UI v9](https://react.fluentui.dev/)**. Posts are markdown files.
Deployment happens on push via GitHub Actions.

Live site: `https://avdpunks.github.io/frontierpunks.github.io/` (or your
custom domain if you've configured one).

## Stack

- **[React 18](https://react.dev/)** + **TypeScript**
- **[Vite 5](https://vitejs.dev/)** for dev server + build
- **[Fluent UI v9](https://react.fluentui.dev/)** (`@fluentui/react-components`)
  with `webDarkTheme`
- **[react-router-dom](https://reactrouter.com/)** using `HashRouter` (works on
  any static host without server-side rewrites)
- **[react-markdown](https://github.com/remarkjs/react-markdown)** +
  `remark-gfm` + `rehype-highlight` for post rendering
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** for
  frontmatter parsing

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Writing a post

Create a new file in `posts/` with a `.md` extension:

```md
---
title: "Your post title"
date: "2026-07-22"
author: "you"
excerpt: "A short teaser shown on the home page."
tags: ["intro", "notes"]
cover: "/covers/optional-hero.jpg"
---

Your **markdown** content here. GFM tables, task lists, and fenced code
blocks with syntax highlighting all work out of the box.
```

The filename (without `.md`) becomes the URL slug: `posts/hello.md` →
`/#/posts/hello`. Posts are sorted by `date` descending.

## Deployment

The `.github/workflows/deploy.yml` workflow builds and publishes on every push
to `main`. Enable it once by going to:

**Repository Settings → Pages → Source: GitHub Actions**

### Custom domain

1. Point your domain's DNS to GitHub Pages (see
   [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
2. Add a `public/CNAME` file containing just your domain (e.g.
   `frontierpunks.com`).
3. Keep `base: '/'` in `vite.config.ts` (already the default here).

### Project-page URL (no custom domain)

If you're serving from `avdpunks.github.io/frontierpunks.github.io/`, edit
`vite.config.ts` and change:

```ts
base: '/frontierpunks.github.io/',
```

`HashRouter` means the app's internal routes (`/#/posts/…`) work correctly in
either scenario.

## Project structure

```
├─ posts/                    # Markdown blog posts (source of truth for content)
├─ public/                   # Static assets served as-is (favicon, CNAME, images)
├─ src/
│  ├─ components/            # Reusable UI (AppLayout, PostCard, Markdown)
│  ├─ pages/                 # Route views (Home, Post, About, NotFound)
│  ├─ posts.ts               # Loads + parses all markdown at build time
│  ├─ App.tsx                # Router configuration
│  ├─ main.tsx               # App entry (FluentProvider + theme)
│  └─ index.css              # Global styles
├─ .github/workflows/deploy.yml
├─ index.html
├─ vite.config.ts
└─ tsconfig.json
```

## License

MIT — do what you like.
