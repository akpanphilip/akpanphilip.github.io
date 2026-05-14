# akpanphilip.github.io

Personal portfolio of Philip Akpan — software engineer based in Abuja, Nigeria.

Built with **Next.js 14** (App Router) + **Tailwind CSS** + **TypeScript** and deployed as a static export to **GitHub Pages**.

## Local dev

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build

```bash
npm run build        # outputs to ./out (static export)
```

## Deployment

Push to `main` — the GitHub Actions workflow in `.github/workflows/deploy.yml` builds and publishes to GitHub Pages automatically.

After the first push, enable Pages in repo settings: **Settings → Pages → Source: GitHub Actions**.

## Stack

- Next.js 14 (static export, `output: 'export'`)
- React 18, TypeScript 5
- Tailwind CSS 3.4 with custom design tokens
- Framer Motion (installed, available for animations)
- Lucide React (icons)
- Google Fonts: Inter, Instrument Serif, JetBrains Mono
