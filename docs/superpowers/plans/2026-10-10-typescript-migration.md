# TypeScript and Tailwind 4 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking. User approved implementation, branch push, and merge request on 2026-10-10.

**Goal:** Convert all 14 application files to strict TypeScript and upgrade Tailwind to the latest stable release while preserving portfolio behavior and appearance.

**Architecture:** Retain the Pages Router, existing component locations, class components, and visual layout. Convert JSX files to TSX and the API route to TS. Use `next.config.ts`, `eslint.config.mts`, and `postcss.config.mjs`. Replace the legacy Tailwind configuration with Tailwind 4 CSS-based configuration.

**Tech Stack:** Next.js 16.4.0, React/React DOM 19.3.0, Tailwind CSS 4.3.3 and @tailwindcss/postcss 4.3.3 (latest stable verified 2026-10-10), TypeScript, React 19 type declarations.

**Spec:** The migration brief in this document; this is a planning-only deliverable for user review.

## Global Constraints

- Preserve Next.js 16.4.0 and React/React DOM 19.3.0.
- Preserve Turbopack defaults in the dev and build scripts.
- Preserve the Pages Router, current routes, content, layout, resume URL, and dark-mode behavior.
- Use strict checking; no explicit `any`, `@ts-ignore`, or `ignoreBuildErrors` to bypass migration errors.
- Preserve the `@/*` alias resolving to the repository root.
- Migrate Next.js config to `next.config.ts`, typed with `NextConfig`; migrate ESLint to `eslint.config.mts` with a direct `jiti` dev dependency at version 2.2.0 or later.
- Use `postcss.config.mjs` with type annotations and `@tailwindcss/postcss`; remove the standalone Autoprefixer dependency/plugin.
- Use Tailwind 4 CSS-based configuration in `styles/globals.css`; delete `tailwind.config.js` after replacing its effective settings.
- Preserve the existing effective default breakpoints. The old top-level `screens` block is ignored and must not become active accidentally.
- Target Tailwind 4-supported browsers (Safari 16.4+, Chrome 111+, Firefox 128+); report this browser-support change.
- Preserve existing uncommitted dependency-upgrade changes; do not commit or discard them without user instruction.

## Review Focus

- Resume link still serves a valid PDF at `/ShingHimYipCV.pdf`.
- Portrait static import resolves and image optimization still works.
- Theme toggle switches between light and dark and back after hydration.
- All six project links, icons, experience bullets, and education entries remain visible.
- Existing public routes and the `/api/hello` response remain compatible.

## Task 1: Enable strict TypeScript and migrate Next.js entry points

**Files:** Modify `package.json`, `package-lock.json`, `.gitignore`; rename `next.config.js` to `next.config.ts` and `eslint.config.mjs` to `eslint.config.mts`; replace `jsconfig.json` with `tsconfig.json`; rename `pages/_app.js`, `pages/_document.js`, and `pages/index.js` to `.tsx`; generate `next-env.d.ts` with Next.js.

**Interfaces:** `_app` consumes Next.js `AppProps`; the root page retains its boolean theme state. Alias imports retain their existing resolution.

- [x] Record the baseline with lint, production build, and a browser check. Avoid rebuilding while a production server uses the same `.next` directory.
- [x] Resolve a current stable TypeScript version compatible with Next.js and install it with `@types/node` matching the chosen supported runtime major, `@types/react@19`, and `@types/react-dom@19` as dev dependencies; update the lockfile.
- [x] Create Next.js-compatible `tsconfig.json` with `strict: true`, `noEmit: true`, `allowJs: true` temporarily, bundler module resolution, and the existing alias. Include generated Next.js types; remove the conflicting `jsconfig.json`.
- [x] Rename the three entry points, add `AppProps` to `_app`, and let TypeScript infer the homepage state and document return types.
- [x] Convert Next.js config to a typed ESM default export and ESLint config to `.mts`; install `jiti >=2.2.0` directly so ESLint loading works on the supported Node runtimes.
- [x] Add `typecheck` script: `next typegen && tsc --noEmit`. Enable `eslint-config-next/typescript` alongside the existing core-web-vitals config. Ignore generated `next-env.d.ts` and `*.tsbuildinfo` in Git.
- [x] Run `npm run typecheck` and `npm run lint`; resolve entry-point errors without suppressing them.

## Task 2: Type reusable components and portfolio data

**Files:** Rename all ten files under `pages/components/` to `.tsx`, plus `pages/SkillList.jsx` to `.tsx`. Keep imports extensionless.

**Interfaces:** Export component prop types from their owning files; data lists consume those types through type-only imports.

- `ExperienceProps`: required `Title`, `Company`, `Date` strings; optional `details: string[]` retaining the empty-array default.
- `SchoolProps`: required `Uni`, `Title`, `Date`, `Result` strings.
- `ProjectProps`: required `Name`, `Details` strings; optional `githubLink: string` and `Tools: ReactNode[]`, retaining current defaults.
- `NavBarProps`: `darkMode: boolean`; `setDarkMode: Dispatch<SetStateAction<boolean>>`.

- [x] Rename and annotate leaf components first: `Experience`, `School`, `Project`, `NavBar`, and `HimPhoto`.
- [x] Rename the lists, `PersonalInfo`, and `SkillList`. Preserve existing class components; no hook conversion is needed for this migration.
- [x] Use the exported prop types with `satisfies` on experience, school, and project records so invalid fields are rejected while inferred values remain precise.
- [x] Fix the two `class` attributes in `EducationsList` to `className` and remove the duplicate `githubLink` property in `project1`; preserve its URL.
- [x] Run `npm run typecheck` and `npm run lint`; resolve every component/data error without weakening strictness.
- [x] Check that all portfolio sections, six project links/icons, and the portrait render. Check light → dark → light behavior and the resume PDF.

## Task 3: Type the API route and complete the migration

**Files:** Rename `pages/api/hello.js` to `.ts`; modify `tsconfig.json`.

**Interfaces:** `handler(req: NextApiRequest, res: NextApiResponse<{ name: string }>): void`; response remains `{ name: 'John Doe' }` with status 200.

- [x] Rename the API route and add type-only imports for `NextApiRequest` and `NextApiResponse`.
- [x] Set `allowJs: false` once all application sources have been converted; include `next.config.ts` and `eslint.config.mts` in the TypeScript source set; retain annotated `postcss.config.mjs` for loader compatibility.
- [x] Run `npm run typecheck` and `npm run lint`. Confirm no `.js`/`.jsx` application files remain under `pages/`.
- [x] Start the site and assert `/api/hello` returns status 200 and exactly `{ name: 'John Doe' }`.

## Task 4: Upgrade Tailwind and preserve visual behavior

**Files:** Modify `package.json`, `package-lock.json`, `styles/globals.css`, and component utility classes where v4 equivalents are required; rename `postcss.config.js` to `postcss.config.mjs`; remove `tailwind.config.js`.

**Interfaces:** The global stylesheet continues to expose the `font-burtons` utility and class-controlled `dark:` variants. Existing default responsive breakpoints and all TSX content remain discoverable.

- [x] Capture baseline screenshots at 375px, 768px, and 1280px, including light/dark hero, education, skills, and project sections; note any pre-existing overflow separately.
- [x] Install matching latest stable `tailwindcss` and `@tailwindcss/postcss` versions (4.3.3 verified at planning time); retain a compatible PostCSS 8 release and remove Autoprefixer. Update the lockfile.
- [x] Configure `postcss.config.mjs` as an ESM default export with the `@tailwindcss/postcss` plugin and a PostCSS config type annotation.
- [x] Replace the three `@tailwind` directives with `@import "tailwindcss"`; define `--font-burtons` in `@theme` and `@custom-variant dark (&:where(.dark, .dark *));`. Preserve the existing `@font-face` and custom CSS; verify its precedence relative to Tailwind layers.
- [x] Use automatic source detection scoped to this repo's application files; add explicit `@source` entries only if generation checks show missed source files. Remove the unused legacy Tailwind config after verifying font and theme utilities.
- [x] Migrate v3 utility names where required by the official upgrade guide, including gradient direction classes and changed shadow/radius scales. Preserve portrait/nav gradients, project card shadows and rounded corners, and border colors affected by v4 defaults.
- [x] Compare the same three viewport sizes and both themes against the baseline. Confirm no additional horizontal overflow, fonts and project icons still render, responsive columns use the same effective breakpoints, and portrait/nav gradients remain intact. Do not activate the previously ignored custom breakpoints or change unrelated layout behavior.
- [x] Run `npm run typecheck`, `npm run lint`, and `npm run build`. Verify the Tailwind PostCSS adapter loads with Turbopack; separately test the supported webpack fallback.
- [x] Run `npm audit` and report remaining advisories; do not force unrelated major upgrades to make the count zero.

## Task 5: Final verification and documentation

**Files:** Modify `README.md`.

- [x] Document TypeScript, Tailwind 4 CSS configuration, typed tool configs, browser/runtime requirements, and the separate `npm run typecheck` command.
- [x] Run `npm run typecheck`, `npm run lint`, `npm run build`, and `git diff --check`; all must exit successfully.
- [ ] Verify a production build with Turbopack in the user's ordinary terminal if this agent environment still blocks worker-port binding. A webpack fallback check must be reported separately and cannot count as Turbopack verification.
- [x] Start the completed build, then verify homepage rendering, portrait loading, resume PDF, dark mode, six project links, and the API response. Do not run build and production-server checks concurrently.
- [x] Inspect the diff for content/layout changes and report validation evidence, any remaining limitations, and local uncommitted state.

## Deferred work

Moving reusable components outside `pages/`, migrating to the App Router, modernizing class components, and fixing unrelated accessibility/layout issues are separate changes. They are not required to achieve strict TypeScript.

## References

- Tailwind upgrade guide: https://tailwindcss.com/docs/upgrade-guide
- Tailwind PostCSS integration: https://tailwindcss.com/docs/installation/using-postcss
- ESLint TypeScript configuration: https://eslint.org/docs/latest/use/configure/configuration-files

## Implementation validation

Strict typecheck, lint, and webpack production build passed. Three viewport layout measurements match the baseline; browser verified both theme transitions, six project links, 21 icons, portrait loading, and no console warnings/errors. HTTP checks passed for the homepage, PDF, API, optimized portrait, ten existing component routes, and 404. Default Turbopack build is blocked locally by CSS worker port permissions; Vercel preview verification will provide the remote build check. npm audit reports five high advisories in the existing Next.js ESLint glob dependency chain.
