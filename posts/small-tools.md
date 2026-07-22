---
title: "Field Notes: Small Tools, Big Leverage"
date: "2026-06-10"
author: "avd"
excerpt: "The unreasonable effectiveness of scripts you write in an afternoon and use for a decade."
tags: ["essay", "tools"]
---

There's a particular category of code I've come to love: the tiny personal
tool. A 40-line script. A one-file CLI. A single HTML page with a `<script>`
tag. Nobody else will ever use it. Sometimes I forget I wrote it.

And yet — years later, it's still saving me an hour a week.

## What they have in common

- **No dependencies to speak of.** Pure stdlib, or something universal.
- **No config.** The defaults *are* the tool.
- **No abstraction budget.** Copy-pasted regex is fine.
- **They solve one problem.** Not a class of problems. *One.*

## The trap

The trap is treating them like real software. The moment you add options,
configuration files, plugins — you've built a product. Products need docs,
tests, releases. That's fine, but it's a different job.

Keep the small tools small. Rewrite instead of refactor. Delete instead of
generalize.

> The best code is the code I'm still using a decade later precisely because I
> resisted the urge to make it "better".

That's the whole essay. Go make something crappy and useful.
