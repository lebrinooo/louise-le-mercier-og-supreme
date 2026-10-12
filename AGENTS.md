# Instructions for AI agents

This repository is Louise Le Mercier's professional portfolio. Louise does not code. Explain every outcome in simple French and never ask her to edit code manually.

## Non-negotiable rules

1. Read `GUIDE-LOUISE.md` before changing anything.
2. Make the smallest change that satisfies the request. Do not redesign or refactor unrelated sections.
3. Never invent a client, role, credit, date, award, location, result, testimonial, or metric. If a fact is missing or ambiguous, ask Louise one short question before editing.
4. Project content lives only in `content.js`. Update that file for project text, images, videos, credits, order, or categories.
5. Put new images in `assets/` with short lowercase filenames. Use optimized JPEG or WebP where possible. Never delete an existing asset unless the request explicitly asks for it and the asset is no longer referenced.
6. Preserve the current visual system, responsive behavior, accessibility, email address, LinkedIn URL, filters, project dialog, reduced-motion behavior, and Vercel configuration unless the request explicitly targets one of them.
7. Do not add dependencies, frameworks, analytics, cookies, forms, trackers, environment variables, or secrets without explicit approval.
8. Run `npm test` after every change. Also verify the changed area at desktop and mobile widths. Do not present the work as complete if either check fails.
9. Work on a separate branch. Provide a Vercel preview before recommending a merge to `main`.
10. In the final summary, write in simple French: what changed, what was verified, the preview link, and the exact next button Louise should click. Never tell her to use a terminal.

## Site structure

- `content.js`: single source of truth for all project cards and project details.
- `index.html`: page structure and the static About/Contact copy.
- `styles.css`: visual design and responsive rules.
- `script.js`: rendering, filters, dialog, and navigation behavior.
- `assets/`: portfolio images and fonts.
- `scripts/smoke-test.js`: safety checks run by `npm test`.
