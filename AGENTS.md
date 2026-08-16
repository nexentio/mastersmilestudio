<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🚨 MANDATORY PROJECT & LEAD ARCHITECT SPECIFICATION FOR AI AGENTS

Before reading, generating, or modifying any code in this repository, you **MUST READ AND FOLLOW** [ARCHITECTURE_GUIDE.md](file:///home/asroyx/Desktop/mastersmilestudio/ARCHITECTURE_GUIDE.md).

---

## 👑 LEAD ARCHITECT PROFILE & OPERATING PRINCIPLES

You are pair-programming with a **Pragmatic Lead Architect & Health Tourism Growth Expert**. All code generation and architectural decisions MUST strictly align with the Lead Architect's operating principles:

### 1. 🏛️ Pragmatic Control & Zero "Looks Like It Works" Illusions
* Zero tolerance for superficial, "looks like it works" code that breaks in production or fails on edge cases.
* Every feature must be genuinely functional, bulletproof, deployable, and verified across all viewport breakpoints and locales.

### 2. 🌍 Health Tourism & Conversion Funnel Mastery (7-Language Strict Invariant)
* Master Smile Studio targets international patients from the UK, Germany, Poland, Portugal, Spain, Russia, Turkey, and beyond.
* **ZERO LINGUISTIC LAZINESS / ZERO SHORTCUTS:** Never summarize, truncate, or abbreviate non-English text. If English contains 16 detailed clinical FAQ answers and full paragraphs, Turkish, German, Polish, Portuguese, Spanish, and Russian MUST have the exact same richness and depth.
* **Strict prohibition against binary ternaries** (`locale === 'tr' ? '...' : '...'`) that leave `de`, `pl`, `pt`, `es`, `ru` with unlocalized fallback text.

### 3. 📐 Design System & 15-Part Golden Standard Enforcement
* The 15-part treatment master layout is strict law. It guarantees structural consistency, brand luxury, and maintainability across all dental disciplines.
* Absolute prohibition of "AI slop", dashed placeholder boxes (`MediaPlaceholder`, `#Video 1`, `#Image 1`), or arbitrary improvised layouts.

### 4. 🚀 Technical SEO & Performance Discipline
* Clean, dedicated URLs (`/treatments/dental-crowns`, `/treatments/dentures`) are strictly required. **Never use anchor hacks** (`/treatments#crowns`) for navigation.
* Deep, clinically authentic copy, semantic HTML, structured Schema.org data, and Core Web Vitals optimization are top-tier priorities.

### 5. 🛡️ System Integrity & Senior Developer Discipline
* **Respect Existing Architecture:** Never invent arbitrary patterns or rebuild existing working wheels from scratch. Build incrementally on established components and conventions.
* **Zero Guesswork / Zero Hallucination:** Verify every file path, import, CSS module class, and route. Test with multi-locale curl checks.
* **Direct, Result-Oriented Communication:** Focus directly on accurate code, immediate problem-solving, and concrete outputs without fluff or excuses.

---

## 🔒 Core Invariants for EVERY Section & Feature Created:

1. **Never Reduce Content:**
   * Preserve 100% of authentic medical/clinical copy, explanations, 3-part anatomy breakdowns, table rows, and FAQ items. Never summarize, omit, or shorten.

2. **Dedicated `*.module.css` Architectural Standard:**
   * Every component MUST have its own dedicated `[ComponentName].module.css` file located side-by-side with the component.
   * **STRICT PROHIBITION:** Never use inline styles (`style={{ ... }}`) or Tailwind utility classes (`relative`, `flex`, `mb-7`, `justify-between`, `text-center`, `p-4`, etc.).
   * All responsive design rules, fluid typography (`clamp(...)`), flexbox/grid layouts, borders, shadows, animations, and hover/active states MUST reside entirely inside the component's `*.module.css` file.

3. **Mandatory 7-Language i18n on Every Section & Component:**
   * Every page, section, button, label, title, subtitle, list item, doctor card, package card, form input, or `aria-label` MUST support all 7 active locales:
     * 🇬🇧 **English (`en`)**
     * 🇹🇷 **Turkish (`tr`)**
     * 🇩🇪 **German (`de`)**
     * 🇵🇱 **Polish (`pl`)**
     * 🇵🇹 **Portuguese (`pt`)**
     * 🇪🇸 **Spanish (`es`)**
     * 🇷🇺 **Russian (`ru`)**
   * Use strongly-typed dictionaries (`Record<string, ...> = { en: ..., tr: ..., de: ..., pl: ..., pt: ..., es: ..., ru: ... }`) with graceful fallback to `en`.

4. **Relative Anchor Invariant:**
   * Direct parents of absolute children (buttons, badges, icons, overlays, tooltips) MUST declare `position: relative;` in their CSS module class.

5. **Zero Errors & Pre-flight Verification:**
   * Every change must build cleanly with zero TypeScript errors and zero Next.js runtime errors.
   * Always verify that pages resolve and render cleanly across all locales (`/en/...`, `/pl/...`, `/de/...`, `/tr/...`).

6. **Merge & Conflict Resolution Protocol:**
   * In case of git merge conflicts or parallel branch synchronization, AI agents **MUST READ AND FOLLOW** [MERGE_AND_SYNC_GUIDE.md](file:///home/asroyx/Desktop/mastersmilestudio/MERGE_AND_SYNC_GUIDE.md).
