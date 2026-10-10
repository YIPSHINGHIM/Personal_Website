# Shing Him Yip Portfolio

Personal portfolio built with Next.js 16, React 19, strict TypeScript, and Tailwind CSS 4 using the Pages Router.

## Requirements

Node.js 20.9 or later and npm. Node.js 22 LTS is recommended for deployment and matches the installed Node type declarations. Tailwind 4 targets Safari 16.4+, Chrome 111+, and Firefox 128+.

## Local development

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Validation and production

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

Typechecking generates Next.js route types before running the strict TypeScript compiler. ESLint runs separately: Next.js 16 no longer provides `next lint` or runs lint during builds.

Dev and build scripts use Turbopack, the default in Next.js 16. In restricted environments that prevent its CSS worker from opening a local port, use `npm run dev -- --webpack` or `npm run build -- --webpack`.

## Configuration and content

- `next.config.ts` uses the Next.js `NextConfig` type.
- `eslint.config.mts` uses the Next.js React and TypeScript rules, loaded through the direct `jiti` development dependency.
- `postcss.config.mjs` loads `@tailwindcss/postcss` with a PostCSS type annotation.
- `styles/globals.css` defines the Tailwind theme, custom font, class-controlled dark variant, and application source directory. Existing colors and effective default breakpoints are preserved.

The homepage is `pages/index.tsx`; portfolio components are in `pages/components/` and `pages/SkillList.tsx`. Files under `pages/` also become public routes; that existing routing behavior is retained.

The resume is served from `public/ShingHimYipCV.pdf` at `/ShingHimYipCV.pdf`. The portrait uses `next/image`.
