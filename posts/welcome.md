---
title: "Welcome to Frontier Punks"
date: "2026-07-22"
author: "avd"
excerpt: "A first dispatch from the new blog — what to expect and how the site is built."
tags: ["meta", "hello"]
---

Welcome to **Frontier Punks** — a new home for notes, experiments, and long-form
writing from the edges of software.

## Why another blog?

Because the frontier keeps moving, and the interesting work happens where the
map hasn't been drawn yet. We wanted a place with no algorithm, no ads, and no
tracking — just words and code.

## How it's built

- ⚛️ **React** for the UI runtime
- 🎨 **Fluent UI v9** for the design system
- ⚡ **Vite** for the build
- 📝 Posts are plain markdown files with frontmatter, dropped into `/posts`
- 🚀 Deployed to **GitHub Pages** via a GitHub Actions workflow

## Writing a new post

1. Add a new file `posts/my-post.md`
2. Include frontmatter at the top:

```yaml
---
title: "Your title"
date: "2026-01-15"
author: "you"
excerpt: "One-sentence teaser."
tags: ["tag1", "tag2"]
---
```

3. Write markdown. Commit. Push. Done.

That's it — see you on the frontier. 🛰️
