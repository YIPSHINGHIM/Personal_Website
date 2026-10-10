# Personal Studio redesign specification

## Outcome and approved direction

Rebuild Shing Him Yip's portfolio around the approved Personal Studio preview. Serve engineering employers and freelance clients equally while clearly stating that Shing Him works full-time at Content Guru and develops independent products and selected client websites alongside that role.

Reference: `/Users/jacky/.codex/visualizations/2026/10/10/01a126ed-2c35-7140-8252-470dd9dccd88/personal-studio-full.html`. This is a visual reference, not production source: rebuild it with typed React components, semantic HTML, CSS Modules, and tests. Read the reference before implementing. The user approved the design and requested the plan; implementation follows review of this document and its accompanying plan.

## User requirements

- Use Next.js App Router throughout; remove the Pages Router.
- Remove legacy Tailwind styling. Proposed implementation decision: remove Tailwind entirely and use CSS Modules plus a small global stylesheet.
- Every production UI component must have a colocated behavioral test; route/layout behavior must also be tested in a running Next.js app.
- Use the supplied portrait in its original colours; do not add grayscale, tint, cropping, or a second framed portrait in About.
- The SHY tile flips on activation to reveal the portrait and flips back on the next activation.

## Appearance

- Fixed black/yellow theme; no theme toggle.
- Background `#0B0B0B`, yellow `#FFD600`, body text `#F0EEE7`, secondary text `#BCBCB2`, panels `#141411`, separators `#34342F`.
- Crisp rectangular surfaces, thin borders, generous spacing, bold large headings, yellow contact panel, slightly rotated SHY tile.
- System sans-serif stack, with heavy headings; no runtime font downloads or animation libraries.
- Max content width 1100px; desktop horizontal padding 44px, mobile padding 24px. Reflow two-/three-column layouts to one column at 650px. Fit from 320px upward without horizontal scrolling.
- Keep focus indicators visible. Informational text minimum 12px, body text 14–16px, touch targets at least 44px where practical.
- Use CSS transforms for the flip. Respect `prefers-reduced-motion: reduce` with no transition. No entrance animations required.

## Page contents and navigation

One homepage, in this order:

1. Header: SHING HIM YIP brand, Experience, Projects, About, Connect links. Use section anchors `#work`, `#projects`, `#about`, `#contact`; brand targets `#top`. Include a keyboard-visible skip link to `#main`.
2. Hero: eyebrow “Software engineer / Product builder”; one h1, “BUILDING AT SCALE. CREATING WITH PURPOSE.” Intro names Content Guru and describes full-time work plus independent SaaS and selected client sites. Explore my work links to `#work`; Let's connect links to `#contact`. Add Download CV to `/ShingHimYipCV.pdf` as a secondary link.
3. Work: “What I build at work.” Current role Software Developer, Content Guru, Jan 2024–present. Three highlights: React frontend architecture for conferencing, screen monitoring, and messaging; WebRTC infrastructure used across 50+ countries; contribution to FedRAMP High readiness through container hardening/signing, vulnerability scanning, automated enforcement, and FIPS compliance. Do not invent impact metrics or claim sole ownership/certification. Compact previous-career list retains the graduate role, internship, and event support role from the current site.
4. Projects: “Built outside the day job.” Feature UK Property Checker (Independent SaaS) and Mindful Craft Handmades (Freelance client website). Give each a summary, known contribution, and live link. Do not invent implementation stacks, client outcomes, payment features, or project screenshots. Keep the six existing projects accessible in a compact native `details`/`summary` “More projects” disclosure, preserving their GitHub links.
5. About: “Engineer by profession. Builder by curiosity.” Short first-person bio, skills as text labels, compact education retaining both existing education records. No portrait in this section.
6. Contact: “LET'S CONNECT.” Invite professional connections, engineering opportunities, and selected freelance project enquiries, without claiming full-time freelance availability. LinkedIn and GitHub links; no contact form/backend.
7. Footer: current year and name.

Content lives in a typed data module. Preserve exact existing URLs, dates, degree results, and project descriptions unless replaced by approved preview copy. Remove references to the old website's current Tailwind stack from its own project description; past projects' tooling can remain historical facts.

## Portrait interaction

- Use `public/him-removebg.png` through `next/image`, retaining transparency and full image with `object-fit: contain`; yellow tile background is allowed. Do not embed base64 in production.
- Initially show SH / Y. / IDEAS → REALITY and “CLICK TO MEET ME”. Photo face is hidden from assistive technology.
- Native button, keyboard Enter/Space and touch activation, with `aria-pressed=false` initially and accessible name “Reveal photo of Shing Him Yip”.
- Activation shows photo, sets `aria-pressed=true`, and accessible name “Show SHY monogram”. Mark inactive face `aria-hidden=true`. Photo alt is “Shing Him Yip”. Focus stays on the button.
- Photo loading failure preserves tile dimensions, shows “Photo unavailable”, and still lets the visitor flip back. No portrait elsewhere.

## Architecture and migration

Retain Next.js 16.4.0, React/React DOM 19.3.0, strict TypeScript, and npm lockfile. Use Node.js 22 LTS for implementation and CI; retain the repository's declared Node >=20.9.0 minimum for the app. Resolve test dependency engine/peer requirements before installing; choose versions compatible with Node 22 and existing React.

Create `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/not-found.tsx`, and `app/api/hello/route.ts`. Preserve `GET /api/hello` as HTTP 200 JSON `{ "name": "John Doe" }`; no new product APIs. Layout and page remain synchronous Server Components, with only PortraitFlip marked `use client`. Native details needs no client state.

Put UI under `components/portfolio/`, not under route folders. Compose sections server-side; do not export the entire homepage as a Client Component. Use the Metadata API for title “Shing Him Yip | Software Engineer & Product Builder” and a real portfolio description. Keep `lang=en`, viewport, and `/favicon.ico`. Do not invent canonical domain URLs.

Delete `pages/` only when replacements are ready; never have both `pages/index.tsx` and `app/page.tsx` active. Accidental legacy component routes such as `/components/PersonalInfo` and `/SkillList` should return 404; no redirects needed for these implementation-only URLs.

Remove `styles/`, `postcss.config.mjs`, `tailwindcss`, `@tailwindcss/postcss`, and direct `postcss` dependency. Remove `react-icons` if no production usages remain; use text arrows and labelled text links. Remove unused starter SVGs and Burtons font only after verifying references. Preserve portrait, CV, existing project screenshot, favicon, and existing historical planning documents.

## Test and completion contract

Use Vitest, React Testing Library, jest-dom, user-event, jsdom, and V8 coverage for components/content/API; Playwright plus axe for production-browser integration. Unit tests do not prove CSS layout, animation, image loading, or App Router server behavior; those belong to browser checks.

Every component must be imported and exercised in its own `.test.tsx`, not merely rendered indirectly or snapshot-tested. Cover statements/functions/lines >=90% and branches >=85% across `components/portfolio/**/*.{ts,tsx}` and `content/**/*.{ts,tsx}`; exclude tests themselves, not unused components. Handle route/layout through explicit integration tests.

Browser checks: correct section order, one h1, landmarks, anchors, CV response, hello API, unknown/old component-route 404s, portrait click/keyboard/touch round trip, image decode, image-error fallback, reduced motion, no duplicate About portrait, real new-tab project links, 320/390/768/1440px widths with no horizontal overflow, and automated accessibility checks on both tile faces. Check Chromium, Firefox, and WebKit. Automated axe checks complement keyboard and visual inspection.

Finish with passing unit/coverage, typecheck, lint, production build, and browser suites. Visually compare desktop/mobile captures against the approved preview. Confirm clean install from lockfile. Do not deploy or publish as part of implementation.

## Official references

- https://nextjs.org/docs/app/getting-started/server-and-client-components
- https://nextjs.org/docs/app/guides/testing/vitest
- https://nextjs.org/docs/app/guides/testing/playwright
