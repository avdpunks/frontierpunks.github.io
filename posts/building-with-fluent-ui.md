---
title: "Building a Fluent UI Blog with Vite"
date: "2026-07-20"
author: "avd"
excerpt: "How this site turns a folder of markdown files into a fast, statically-hosted blog with Microsoft's Fluent design language."
tags: ["fluent-ui", "vite", "react"]
---

Fluent UI v9 is Microsoft's latest design system for the web — the same tokens
and components that power products like Teams, Loop, and pieces of the Windows
web surface. Pairing it with Vite gives you a delightfully fast local loop and a
tiny production bundle.

## The core pieces

There are really only four moving parts:

1. A `FluentProvider` wrapping the app with a theme (`webDarkTheme` in our case).
2. `makeStyles` from `@fluentui/react-components` — Griffel-powered atomic CSS.
3. Vite's `import.meta.glob` to load every markdown file at build time.
4. `react-markdown` (+ `remark-gfm`, `rehype-highlight`) to render posts.

## Fluent tokens > hard-coded values

The temptation with any design system is to sprinkle in raw hex codes. Don't.
Reach for the tokens:

```tsx
import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  card: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderColor: tokens.colorNeutralStroke2,
    borderRadius: tokens.borderRadiusMedium,
  },
});
```

If you ever want to flip to a light theme, or drop in a brand-colored variant,
the whole app follows.

## Loading markdown at build time

```ts
const rawPosts = import.meta.glob('/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;
```

Every `.md` file in `/posts` is bundled as a string. `gray-matter` splits the
frontmatter from the body, and we sort by date. No CMS, no database, no server.

## Deploying to GitHub Pages

The `deploy.yml` workflow builds on push to `main`, uploads the `dist/` folder
as a Pages artifact, and publishes. First deploy takes about 90 seconds; each
subsequent one is closer to 30.

Happy building. 🚀
