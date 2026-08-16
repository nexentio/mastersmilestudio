<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🚨 MANDATORY PROJECT RULES FOR ANTIGRAVITY & LLM AGENTS

Before reading, generating, or modifying any code in this repository, you **MUST READ AND FOLLOW** [ARCHITECTURE_GUIDE.md](file:///home/asroyx/Desktop/mastersmilestudio/ARCHITECTURE_GUIDE.md).

### 🔒 Core Invariants for EVERY Section & Feature Created:

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
   * **NEVER** use binary ternary operators (`locale === 'tr' ? 'Türkçe' : 'English'`) that leave `pl`, `de`, `pt`, `es`, and `ru` falling back to English.
   * Use either modular JSON messages (`messages/[locale]/...`) or strongly-typed dictionaries (`Record<string, ...> = { en: ..., tr: ..., de: ..., pl: ..., pt: ..., es: ..., ru: ... }`) with graceful fallback to `en`.

4. **Relative Anchor Invariant:**
   * Direct parents of absolute children (buttons, badges, icons, overlays, tooltips) MUST declare `position: relative;` in their CSS module class.

5. **Zero Errors & Pre-flight Verification:**
   * Every change must build cleanly with zero TypeScript errors and zero Next.js runtime errors.
   * Always verify that pages resolve and render cleanly across all locales (`/en/...`, `/pl/...`, `/de/...`, `/tr/...`).

6. **Merge & Conflict Resolution Protocol:**
   * In case of git merge conflicts or parallel branch synchronization (e.g. Explore feature vs Treatments), AI agents **MUST READ AND FOLLOW** [MERGE_AND_SYNC_GUIDE.md](file:///home/asroyx/Desktop/mastersmilestudio/MERGE_AND_SYNC_GUIDE.md).

