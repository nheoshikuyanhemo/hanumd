# HanumD / Mdewi — Web3 Community Contributor Portfolio

Minimalist, dark-theme portfolio for a Web3 community contributor. Built with vanilla HTML/CSS/JS — no frameworks, no build step.

## Structure

```
hanumd/
├── index.html              # Main page (Home)
├── about.html              # About Me, Key Achievements, Certifications
├── projects.html           # Projects list (Ablo, Optimum, GoDark, Simple Chain, Nirvana)
├── contact.html            # Contact page with LinkedIn, GitHub, Discord links
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project-1.png   # Ablo
│   │   ├── project-2.png   # Optimum
│   │   ├── project-3.png   # GoDark
│   │   ├── project-4.png   # Simple Chain
│   │   └── project-5.png   # Nirvana
│   ├── icons/
│   │   ├── x.svg           # X (Twitter)
│   │   ├── telegram.svg
│   │   ├── gmail.svg
│   │   ├── discord.svg
│   │   ├── github.svg      # Inline SVG, white fill + black stroke
│   │   └── linkedin.svg    # Inline SVG, white fill + black stroke
│   ├── banners/            # Social media banners (X, Telegram, Gmail, Discord)
│   └── logos/              # Raw logo assets (GitHub, Gmail, Telegram, X)
│
├── css/
│   ├── variables.css       # CSS custom properties (colors, spacing, nav height)
│   ├── style.css           # Main styles + menu trigger + gradients
│   └── responsive.css      # Media queries (<=1024, <=800, <=520px)
│
├── js/
│   ├── main.js             # Typewriter, IntersectionObserver reveal, menu toggle
│   └── navbar.js           # Active nav link highlighting
│
└── README.md               # This file
```

## Key Features

- **Zero dependencies** — plain HTML, CSS, JS; no npm, no bundler.
- **Dark theme** — `#0b0b0f` background, `#d4a574` accent (gold), pink gradient `#C8537F → #FE99C1`.
- **Gradient titles** — 90° short-span gradient on `h1`, `.page-title`, `.section-title`, `.contact-title`.
- **Gradient subtitles** — 90° short-span gradient on `.subtitle`, `.section-subtitle`, `.contact-subtitle`.
- **Detail text** — `#FFF0F6` (bright white-pink) on `.contact-value`, `.menu-item-preview`, `.copyright`.
- **Menu button** — 3 stacked lines (`#FFF0F6`), visible on black navbar, opens slide-over panel.
- **Typewriter effect** — sequential character reveal on headings/paragraphs via `data-type` + `data-speed`.
- **Scroll reveal** — `.reveal-block` / `.reveal-item` animated via `IntersectionObserver`.
- **Contact icons** — inline SVGs with `filter: brightness(0) invert(1)` for white-on-dark.
- **Responsive** — breakpoints at 1024px, 800px, 520px; nav height, gutter, section spacing adapt via CSS variables.

## Color Palette (exact)

| Role | Value |
|------|-------|
| Background | `#0b0b0f` |
| Surface | `#131318` |
| Text | `#c9c9d2` |
| Text bright | `#f4f1ea` |
| Accent (gold) | `#d4a574` |
| Accent soft | `rgba(212, 165, 116, 0.14)` |
| Border | `#292931` |
| Title gradient stops | `#C8537F` (0%) → `#EB6597` (35%) → `#F16C9B` (60%) → `#FE99C1` (100%) |
| Subtitle gradient stops | `#C8537F` (0%) → `#EB6597` (40%) → `#F16C9B` (70%) → `#FE99C1` (100%) |
| Detail / menu lines | `#FFF0F6` |
| Detail glow (optional) | `rgba(255, 240, 246, 0.35)` |

## Run Locally

```bash
cd hanumd
python3 -m http.server 8002
# open http://127.0.0.1:8002 in your browser
```

All pages share the same nav, menu, footer, and CSS/JS bundles.

## Verification Checklist

```bash
for p in "" index.html about.html projects.html contact.html css/style.css js/main.js assets/images/profile.jpg assets/icons/linkedin.svg assets/icons/github.svg; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:8002/$p)  /$p"
done
```

All lines must show `200`.

## Backup Protocol

- **Always create a backup BEFORE any edit** (Step 0).
- Backup folder name format: `backup-YYYYMMDD-HHMMSS/`.
- Backup folder is created locally at `~/.hermes/hanumd/backup-YYYYMMDD-HHMMSS/`.
- Backup folder contains copies of `index.html`, `about.html`, `contact.html`, `projects.html`, `css/`, `js/`, and `assets/`.
- Backup folders are **NOT committed** to Git — they are ignored by `.gitignore` and should remain local-only.

## Deployment (Vercel)

1. Push to GitHub (this repo: `https://github.com/nheoshikuyanhemo/hanumd`).
2. Import in Vercel → Framework: **Other** → Root: `hanumd` → Output: `.`.
3. Vercel serves static files; no build command needed.
4. Environment variables not required.

## Git Hygiene

- `.gitignore` excludes: `node_modules/`, `dist/`, `build/`, `.next/`, `out/`, `.env*`, `*.log`, `.DS_Store`, `.Thumbs.db`, `.vscode/`, `.idea/`, `*.swp`, `*.bak`, `*.tmp`, `*.orig`, `orig/`, `.vercel/`, `.hermes/`, `.cache/`, and all `backup-*` folders.
- Backup folders are created locally and **never pushed** to GitHub — they remain local-only.
- All edits are made directly in the working directory, verified with `curl`, and pushed once complete.

## Author

**HanumD / Mdewi** — Web3 Community Contributor  
Built by **0xEixa** — `https://x.com/eixaid`

---

*Last updated: 2026-09-18 (commit cadfc73)*