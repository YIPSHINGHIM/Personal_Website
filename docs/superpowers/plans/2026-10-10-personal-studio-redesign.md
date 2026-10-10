# Personal Studio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the approved black/yellow Personal Studio portfolio with App Router, clean CSS Modules, the colour-photo flip tile, and tests for every component.

**Architecture:** Server-rendered page sections consume typed local content. One small Client Component owns the portrait interaction. CSS Modules implement the approved responsive design; Vitest exercises component contracts and Playwright verifies the actual production application.

**Tech Stack:** Next.js 16.4.0, React 19.3.0, strict TypeScript, npm, CSS Modules, Vitest, React Testing Library, Playwright, axe.

**Spec:** `docs/superpowers/specs/2026-10-10-personal-studio-redesign.md` — read in full before execution.

## Global Constraints

- Use Next.js App Router throughout; remove the Pages Router.
- Fixed black/yellow theme; no theme toggle.
- Background `#0B0B0B`, yellow `#FFD600`, body text `#F0EEE7`, secondary text `#BCBCB2`, panels `#141411`, separators `#34342F`.
- Use the supplied portrait in its original colours; do not add grayscale, tint, cropping, or a second framed portrait in About.
- Every production UI component must have a colocated behavioral test; route/layout behavior must also be tested in a running Next.js app.
- Retain Next.js 16.4.0, React/React DOM 19.3.0, strict TypeScript, and npm lockfile.
- Layout and page remain synchronous Server Components, with only PortraitFlip marked `use client`.
- No unverified outcomes, project stacks, invented screenshots, canonical domain, new contact backend, or deployment.
- Preserve CV/portrait URLs, featured project URLs, existing six GitHub projects, career history, and education content.
- Coverage: statements/functions/lines >=90%, branches >=85% for all portfolio components and content modules.

## Review Focus

- Keyboard/touch visitors must reveal and hide the portrait without losing focus; Task 3 and Task 6.
- Missing portrait or reduced-motion preference must leave a usable tile; Task 3 and Task 6.
- At 320px or with long names, navigation/headings/projects must remain readable without horizontal overflow; Task 4 and Task 6.
- Routing migration must retain CV/API assets while removing accidental component routes; Task 5 and Task 6.
- Assistive technology must encounter one h1, correct landmarks, useful link names, and only the active portrait face; Task 2–6.

## Repository baseline

Current clean checkout at `e849a00` (verify again before execution): Pages Router, TSX components, Tailwind 4 with Tailwind 3 compatibility theme, npm lockfile, no test runner. Existing typecheck uses `next typegen && tsc --noEmit`; lint uses flat Next.js/TypeScript config. No AGENTS.md was found in the repository during planning.

Execution starts with `superpowers:using-git-worktrees`: prefer an existing suitable attached worktree; otherwise create an isolated `codex/personal-studio-redesign` branch/worktree using native app tooling. Preserve any changes made after planning. This is execution preparation, not permission to start implementation before plan review.

## File map and stable interfaces

Create:
- `content/portfolio.ts` / `.test.ts`: typed copy, contacts, projects, work highlights, career and education.
- `components/portfolio/{SiteHeader,Hero,PortraitFlip,WorkSection,WorkHighlight,CareerTimeline,ProjectsSection,ProjectCard,MoreProjects,AboutSection,ContactSection,SiteFooter}.tsx`: individual responsibilities; each has matching `.test.tsx` and `.module.css` when styles are needed.
- `app/{layout,page,not-found}.tsx`, `app/globals.css`, `app/api/hello/route.ts`.
- `tests/setup.ts`, `tests/app-shell.test.tsx`, `tests/api-hello.test.ts`, `vitest.config.mts`, `playwright.config.ts`, `e2e/portfolio.spec.ts`, `e2e/accessibility.spec.ts`, `e2e/routes.spec.ts`, `.github/workflows/ci.yml`.

Modify: `package.json`, `package-lock.json`, `.gitignore`, `README.md`; modify `eslint.config.mts` only for generated test-report ignores if necessary. Keep strict TypeScript options and Next config unless a test/build requires a documented compatible change.

Delete when migrated: all `pages/` files, `styles/globals.css`, `styles/Home.module.css`, `postcss.config.mjs`; unused starter SVG/font assets after checking references.

Content contracts exported from `content/portfolio.ts`:
```ts
export type WorkHighlightData = { id: string; title: string; description: string; tags: readonly string[] };
export type CareerEntry = { role: string; company: string; dates: string };
export type EducationEntry = { institution: string; degree: string; dates: string; result: string };
export type ProjectData = { id: string; title: string; category: string; summary: string; brief: string; contribution: string; href: string; linkLabel: string };
export type ArchivedProject = { title: string; summary: string; href: string };
```
Export readonly values `profile` (name, role, employer, currentDates, intro, about paragraphs), `contacts` (linkedin, github, resume), `workHighlights`, `career`, `education`, `featuredProjects`, `archivedProjects`, and `skills`. Preserve exact approved copy in the spec/preview; no React nodes in data.

Component contracts (return JSX.Element):
- `SiteHeader()`, `Hero()`, `PortraitFlip()`, `WorkSection()`, `ProjectsSection()`, `AboutSection()`, `ContactSection()` consume the module values internally.
- `WorkHighlight({ highlight }: { highlight: WorkHighlightData })`.
- `CareerTimeline({ entries }: { entries: readonly CareerEntry[] })`.
- `ProjectCard({ project }: { project: ProjectData })`.
- `MoreProjects({ projects }: { projects: readonly ArchivedProject[] })`.
- `SiteFooter({ year }: { year: number })` receives year from the server page.
- `RootLayout({ children }: Readonly<{ children: React.ReactNode }>)`; `HomePage()`; `NotFound()`; `GET(): Response` in hello route.

Named exports for components; default exports for route/layout components. Use `React.JSX.Element` if importing JSX explicitly is necessary with the installed React types.

---

### Task 1: Typed portfolio content and test foundation

**Files:** `content/portfolio.ts`, `content/portfolio.test.ts`, `vitest.config.mts`, `tests/setup.ts`, `package.json`, `package-lock.json`, `.gitignore`.
**Consumes:** current legacy content and approved spec/preview. **Produces:** the exact content interfaces/values listed above and runnable unit tests.

- [ ] Resolve Node 22-compatible versions of `vitest`, `@vitest/coverage-v8` (same version), `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/dom`, `@testing-library/jest-dom`, `@testing-library/user-event`, `@playwright/test`, `@axe-core/playwright`; install as dev dependencies with npm and commit the lockfile. Verify React peer support; do not upgrade framework versions.
- [ ] Configure Vitest for jsdom, React transform, `@/` alias, automatic RTL cleanup, jest-dom/vitest setup, inclusion of `.test.ts(x)` only, and coverage scope/thresholds from Global Constraints. Add scripts `test: vitest run`, `test:watch: vitest`, `test:coverage: vitest run --coverage`, `test:e2e: playwright test`. Ignore coverage, playwright-report, and test-results. Unit mocks must not hide real anchors or button semantics; next/image may use a transparent img stand-in.
- [ ] Write failing content tests with these assertions:
```ts
expect(contacts.resume).toBe('/ShingHimYipCV.pdf');
expect(featuredProjects.map(p => p.href)).toEqual([
  'https://ukpropertychecker.com/', 'https://www.mindfulcrafthandmades.com/'
]);
expect(featuredProjects.map(p => p.category)).toEqual(['Independent SaaS', 'Freelance client website']);
expect(profile.employer).toBe('Content Guru');
expect(workHighlights).toHaveLength(3);
expect(archivedProjects).toHaveLength(6);
expect(education).toHaveLength(2);
```
Also assert all featured IDs unique and career includes graduate, internship, event support roles; compare archived URLs to those in current ProjectList.
- [ ] Run `npm test -- content/portfolio.test.ts`; expect missing-module/export failure, not a broken test configuration.
- [ ] Implement content module, exact spec copy and approved role distinctions. Run the same command; expect all pass.
- [ ] Commit only Task 1 files: `test: add portfolio content contracts and unit test tooling`.

### Task 2: Header, hero, and shared presentation foundation

**Files:** `SiteHeader.tsx/.test.tsx/.module.css`, `Hero.tsx/.test.tsx/.module.css`, `PortraitFlip.tsx/.test.tsx/.module.css` (initial static front), `app/globals.css` (not yet imported into old page).
**Consumes:** `profile`, `contacts`; **Produces:** tested header/hero and initially static PortraitFlip to extend in Task 3.

- [ ] Write tests: SiteHeader has labelled navigation, skip link `#main`, brand `#top`, and four spec anchors. Hero has exactly one heading level 1 with approved words, Content Guru/full-time intro, Explore my work `#work`, Let's connect `#contact`, and CV `/ShingHimYipCV.pdf`. PortraitFlip initially is an unpressed button named “Reveal photo of Shing Him Yip” displaying “IDEAS → REALITY”. Render Hero with the actual tile, not a mock; test tile independently too.
```ts
expect(screen.getByRole('link', {name: 'Download CV'})).toHaveAttribute('href', '/ShingHimYipCV.pdf');
expect(screen.getByRole('button', {name: 'Reveal photo of Shing Him Yip'})).toHaveAttribute('aria-pressed', 'false');
```
- [ ] Run `npm test -- components/portfolio/SiteHeader.test.tsx components/portfolio/Hero.test.tsx components/portfolio/PortraitFlip.test.tsx`; expect missing components.
- [ ] Implement components and global reset/tokens from the spec. Header brand is text, hero uses h1 and tile, native anchor links, no hamburger state. Render CV as labelled new-tab link with `rel="noopener noreferrer"`. Give layout a centred max-width 1100px shell class in globals. Implement responsive header and hero using CSS Modules; inactive front-only tile becomes interactive in Task 3.
- [ ] Run the task tests and `npm run typecheck`; expect pass. No active homepage route changes yet.
- [ ] Commit Task 2 files: `feat: add personal studio header and hero`.

### Task 3: Accessible portrait flip interaction

**Files:** `PortraitFlip.tsx/.test.tsx/.module.css`.
**Consumes:** static tile from Task 2 and original `public/him-removebg.png`. **Produces:** the only production Client Component with complete photo behavior.

- [ ] Extend tests for pointer round-trip, Enter/Space activation, focus retention, aria-pressed/accessibility-name changes, inactive-face aria-hidden, original image source, and image-error fallback that still flips back. Assert hidden image is not returned by an ordinary accessible-role query before activation.
```ts
const button = screen.getByRole('button', {name: 'Reveal photo of Shing Him Yip'});
await user.click(button);
expect(button).toHaveAttribute('aria-pressed', 'true');
expect(screen.getByRole('img', {name: 'Shing Him Yip'})).toBeVisible();
await user.click(button);
expect(button).toHaveAttribute('aria-pressed', 'false');
button.focus();
await user.keyboard('{Enter}');
expect(button).toHaveFocus();
expect(button).toHaveAttribute('aria-pressed', 'true');
```
- [ ] Run `npm test -- components/portfolio/PortraitFlip.test.tsx`; expect interaction tests fail against static tile.
- [ ] Add `use client`, React state for revealed/imageFailed, native button click handler, next/image with original dimensions 666x750 (verify against file), responsive sizes, contain fit, no filters, error fallback, and front/back aria-hidden. CSS 3D flip preserves tile size with shared grid area and backface visibility; respect reduced motion. Do not persist flip state across navigation or use hydration-dependent date/browser logic.
- [ ] Run task tests and typecheck; expect pass. Defer CSS animation/touch/image-decode proof to Task 6 browser tests.
- [ ] Commit: `feat: add accessible colour portrait flip tile`.

### Task 4: Professional work, projects, About, and contact

**Files:** remaining nine component TSX files and each matching test/CSS module from the file map.
**Consumes:** Task 1 content types; **Produces:** remaining server-renderable portfolio sections.

- [ ] Write failing colocated tests for EACH component:
  - WorkHighlight: supplied title/description/tags, including a long title fixture.
  - CareerTimeline: each supplied role/company/date, and empty array renders no phantom entries.
  - WorkSection: `id=work`, current role/employer/date, three actual WorkHighlight children, previous career list. Assert “50+ countries” and FedRAMP readiness wording, no sole-ownership wording.
  - ProjectCard: supplied category/brief/contribution and labelled live link; href, `_blank`, and both rel protections. Long title fixture retains full accessible name.
  - MoreProjects: native details and summary “More projects”, all six actual links, and empty array renders nothing. Native disclosure behavior is tested in browser, not jsdom simulation.
  - ProjectsSection: `id=projects`, two featured cards in SaaS/client order and MoreProjects.
  - AboutSection: `id=about`, bio, skill labels, both education records/results, and `queryByRole('img') === null`.
  - ContactSection: `id=contact`, actual LinkedIn/GitHub hrefs, selected-project/full-time-compatible wording.
  - SiteFooter: supplied 2026 displayed with name; rerender with 2027 changes year.
- [ ] Run `npm test -- components/portfolio`; expect missing components/contract failures for this task.
- [ ] Implement each named component and CSS Module. Use semantic sections with labelled h2, article h3, list semantics for career/skills/education, and native details. Preserve old projects in compact disclosure; do not add screenshot placeholders or fabricated preview interfaces. Long words must wrap using CSS; grids use minmax(0,1fr). About stays text-only. Contact panel uses yellow/black pairing.
- [ ] Run all unit tests and typecheck; expect pass. Check every exported UI component has its own matching test file and behavior assertions.
- [ ] Commit: `feat: build professional work and project portfolio sections`.

### Task 5: App Router integration and removal of legacy implementation

**Files:** `app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/api/hello/route.ts`, `tests/app-shell.test.tsx`, `tests/api-hello.test.ts`, package/lockfile, README, legacy files listed in file map.
**Consumes:** all Task 2–4 components and globals; **Produces:** the complete new application without Pages Router or Tailwind.

- [ ] Write failing tests: HomePage composes header, hero, work, projects, about, contact, footer in order; one h1, main `id=main`; footer server-supplied current year. Assert metadata title/description export. Test NotFound heading and home link. Test RootLayout's lang and children via React server rendering to static markup (not nesting html inside RTL div); browser confirms actual layout. GET route test asserts response status/content-type/JSON:
```ts
const response = GET();
expect(response.status).toBe(200);
expect(await response.json()).toEqual({name: 'John Doe'});
```
- [ ] Run `npm test -- tests/app-shell.test.tsx tests/api-hello.test.ts`; expect missing app modules.
- [ ] Create synchronous RootLayout and HomePage, import globals in layout, set Metadata title/real description, render nav outside main, compose sections inside main and footer afterward. Set lang=en; preserve favicon. Implement labelled 404/home link and GET hello route. In the SAME task remove all `pages/` to avoid root/API conflicts. Remove old styles and PostCSS config, uninstall Tailwind packages/direct postcss; remove react-icons if unused. Remove only unreferenced starter SVGs/Burtons font, retain user assets and historical docs. Update README architecture, content locations, commands and testing workflow.
- [ ] Run full tests, typecheck, lint, and build; expect pass. Run `rg 'tailwind|@custom-variant|@theme|next/head|next/document|next/app' app components content package.json` and inspect results; expect no legacy runtime/dependency use. Historical archived-project descriptions may legitimately mention Tailwind. Confirm `pages/` and old `styles/` are absent, and original portrait/CV assets remain.
- [ ] Commit: `refactor: migrate portfolio to app router and remove legacy styling`.

### Task 6: Production browser verification, accessibility, and CI

**Files:** `playwright.config.ts`, three `e2e/*.spec.ts`, `.github/workflows/ci.yml`, README and any focused fixes with corresponding component tests.
**Consumes:** complete application plus scripts; **Produces:** reproducible integration tests and CI checks.

- [ ] Add Playwright config: baseURL `http://127.0.0.1:3000`, webServer `npm run start -- --hostname 127.0.0.1`, reuseExistingServer=false, retained failure traces/screenshots, projects desktop Chromium/Firefox/WebKit and Chromium mobile touch at 390x844. Unit config excludes e2e. Run production build before e2e, never substitute dev-server results for final production verification.
- [ ] Write failing browser regression assertions for these named cases:
  - `homepage content and anchor navigation`: expected title, one h1, main/nav/footer landmarks, section order; click each header link and confirm destination visible/hash. Skip-link keyboard activation reaches main. CV link correct and PDF GET 200, content-type application/pdf.
  - `portrait pointer and keyboard round trip`: click or mobile tap changes aria-pressed, visible face and accessible name, decoded image naturalWidth>0, second click returns; keyboard Enter/Space preserves focus. Screenshot front and back to verify transform actually displays the intended face.
  - `portrait error fallback`: fresh navigation with original and optimised portrait requests blocked before load; activate, see Photo unavailable, activate again to restore monogram.
  - `reduced motion`: emulate reducedMotion=reduce, tile transitionDuration is 0s and interaction still works.
  - `narrow layout and disclosure`: 320/390/768/1440px widths, `document.documentElement.scrollWidth <= window.innerWidth`; navigation/headings/buttons visible and within viewport. Open More projects and verify all six links; no image under About.
  - `route and asset preservation`: GET hello exact response, CV and portrait 200, unknown route + `/components/PersonalInfo` + `/SkillList` return 404. Check featured/LinkedIn/GitHub URLs by href/target/rel without depending on third-party site availability.
  - `accessible front and back`: AxeBuilder WCAG2A/AA and WCAG21A/AA scan before/after flip and with More projects open; no violations. Keyboard traverse links/button with visible focus.
- [ ] Execute focused new browser tests; if they reveal defects, record failure, add/extend the owning component test where applicable, implement the smallest fix, rerun focused tests. Browser-specific failures keep browser regression coverage; don't add meaningless jsdom CSS assertions.
- [ ] Add CI on push/pull_request: Node 22, npm ci, typecheck, lint, test:coverage, build, `npx playwright install --with-deps chromium firefox webkit`, test:e2e, and upload failure reports. No CI deployment.
- [ ] Run `npm ci`, `npm run test:coverage`, `npm run typecheck`, `npm run lint`, `npm run build`, `npm run test:e2e`; all must exit 0. Review coverage includes every component and passes thresholds. Inspect 390px/1440px captures against approved preview and original-colour photo; verify no second About portrait. Use webpack fallback only if environment restrictions prevent Turbopack, document exact limitation and command. If a browser cannot run, report it unverified rather than declaring all checks passed.
- [ ] Commit: `test: verify redesigned portfolio and add CI checks`.

## Handoff and done criteria

Plan self-review: every spec requirement is assigned to a task; component signatures and content fields are consistent; five review-focus conditions have owning tests; no unspecified contact/backend/domain features. Every task ends in a tested deliverable. Execution may refine compatible test package versions, not the approved design or copy without evidence.

Done means the reviewed design is implemented, all twelve portfolio components have individual tests, layout/page/404/API are covered, coverage thresholds and production browser checks pass, and README documents the new workflow. Capture final verification commands/results and relevant screenshots for the user. No deployment, merge, or publishing is included.

Recommended execution: **Native**, because this small portfolio has closely shared content/style interfaces and one interactive component; one implementer avoids repeating context. **Subagent-driven** is available if the user prefers separate task implementation and review. Await plan review and execution choice before implementation, per `superpowers:writing-plans`.
