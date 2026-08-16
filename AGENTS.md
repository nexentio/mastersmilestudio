<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🚨 MANDATORY PROJECT RULES FOR ANTIGRAVITY & LLM AGENTS

Before reading, generating, or modifying any code in this repository, you **MUST READ AND FOLLOW** [ARCHITECTURE_GUIDE.md](file:///home/asroyx/Desktop/mastersmilestudio/ARCHITECTURE_GUIDE.md).

### Core Summary of Non-Negotiable Rules:
1. **Never Reduce Content:** Preserve 100% of authentic medical/clinical copy, explanations, 3-part anatomy breakdowns, table rows, and FAQ items. Never summarize or omit.
2. **Strict CSS Modules Only:** All section styles must be encapsulated in `*.module.css` files. Never assume Tailwind utility classes like `relative`, `flex`, `mb-7` exist globally. Direct parents of absolute children must declare `position: relative;`.
3. **Modular i18n Treatment Routing:** Treatments use isolated route-level JSON files in `messages/[locale]/treatments/[slug].json` across all 7 supported languages (`tr`, `en`, `de`, `pl`, `pt`, `es`, `ru`) loaded dynamically via `src/lib/treatment-content.ts`.
4. **Validation:** Every change must pass `npm run build` with zero TypeScript or Next.js errors.
