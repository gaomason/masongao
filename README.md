# Mason Gao Website

Static website scaffold for GitHub Pages:

- Home: professional introduction
- Professional / Research page
- Personal page with Spotify, current photo, photo archive, and thought log

## Edit content

- Homepage intro: `index.html`
- Professional / Research text and paper link: `professional/index.html`
- Personal sections: `personal/index.html`
- **Thought log posts:** add or edit markdown files in `content/posts/`
- **Research log entries:** add or edit markdown files in `content/research-log/`
- Full posts page: `personal/posts.html`
- Old photo archive entries: `personal/photos-archive.html`
- Site style: `assets/css/styles.css`

## Add a journal entry

Create a new markdown file in `content/posts/`, for example `content/posts/2026-06-23-my-entry.md`:

```markdown
---
title: My entry
date: 2026-06-23
---

First paragraph of the entry.

Second paragraph goes here after a blank line.
```

Then commit and push. GitHub Actions rebuilds `assets/data/posts.json` automatically.

You can also run the build locally before pushing:

```bash
npm run build
```

Research log entries work the same way in `content/research-log/`.

## Deploy on GitHub Pages

1. Push this folder to your GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Set source to **Deploy from a branch**, choose your `master` branch and `/ (root)`.
4. Ensure your domain DNS points to GitHub Pages.
5. `CNAME` is already included with `masongao.com`.
