# Shing Him Yip — Personal Studio

A black-and-yellow portfolio for full-time engineering work, independent SaaS products, and selected freelance websites. Built with Next.js App Router, React, strict TypeScript, and CSS Modules. The SHY monogram flips to reveal the original-colour portrait.

## Development

Use Node.js 22.22.2+ (or a supported newer LTS) for development, testing, and CI. The app retains its Node >=20.9 runtime declaration; test tooling needs a newer runtime.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` owns layout, homepage, 404, global styles, and the preserved `/api/hello` route.
- `components/portfolio/` contains twelve focused UI components, colocated tests, and CSS Modules.
- `content/portfolio.ts` owns copy, career/education records, skills, featured projects, and older projects.
- `public/him-removebg.png` is the unchanged portrait; `public/ShingHimYipCV.pdf` remains available at its original URL.

Page sections are Server Components. Only `PortraitFlip` is a Client Component. The theme is fixed; no Tailwind, runtime font service, or animation library is required. Older projects use a native disclosure.

## Verification

```bash
npm run test
npm run test:coverage
npm run typecheck
npm run lint
npm run build
npx playwright install chromium firefox webkit
npm run test:e2e
```

Vitest and React Testing Library test every portfolio component and content/API/layout contracts. Coverage requires >=90% statements/functions/lines and >=85% branches across all portfolio components and content modules. Browser tests run against a production build and cover layout, navigation, portrait interactions, image failure, reduced motion, routes, assets, and axe accessibility checks.

Playwright starts and stops its own production server at http://127.0.0.1:3000; keep that port free. Reports are in `playwright-report/` and failure artifacts in `test-results/`. CI uses Node 22 and installs all three browser engines.

Next.js route type generation precedes strict TypeScript checking. ESLint runs separately from builds. In restricted environments where Turbopack cannot start its CSS worker, `npm run build -- --webpack` is an available diagnostic fallback; normal builds use the Next.js default.

For a manual production preview, run `npm start` after building. No deployment or publishing occurs automatically.

### Local browser limitation

On the current macOS host, the downloaded Firefox engine exits before page load with `Could not find profile folder`, including when given an existing persistent profile. Chromium, WebKit, and mobile Chromium can be checked locally with:

```bash
npm run test:e2e -- --project=chromium --project=webkit --project=mobile
```

Firefox stays enabled in the default suite and Linux CI; its local UI results remain unverified. On macOS WebKit, the keyboard test uses Option+Tab to traverse links when Safari's full keyboard-access preference is disabled.
