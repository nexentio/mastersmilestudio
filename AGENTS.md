<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🚨 MANDATORY PROJECT RULES FOR ANTIGRAVITY & LLM AGENTS

Before reading, generating, or modifying any code in this repository, you **MUST READ AND FOLLOW** [ARCHITECTURE_GUIDE.md](file:///home/asroyx/Desktop/mastersmilestudio/ARCHITECTURE_GUIDE.md).

### 🔒 Core Invariants for EVERY Section & Feature Created:
1. **Never Reduce Content:** Preserve 100% of authentic medical/clinical copy, explanations, 3-part anatomy breakdowns, table rows, and FAQ items. Never summarize, omit, or shorten.
2. **Every Section MUST Have a Dedicated `*.module.css`:** Never use inline styles or Tailwind utility classes (`relative`, `flex`, `mb-7`, `justify-between`). Every section MUST be fully styled inside its own `[ComponentName].module.css`.
3. **Mandatory 7-Language i18n on Every Section:** Every new section, button, label, title, or card MUST support all 7 languages (`tr`, `en`, `de`, `pl`, `pt`, `es`, `ru`) via modular `messages/[locale]/treatments/[slug].json` or typed localized maps. Never hardcode English or Turkish directly in JSX.
4. **Relative Anchor Invariant:** Direct parents of absolute children (buttons, badges, icons, overlays) MUST declare `position: relative;` in their CSS module class.
5. **Zero Errors:** Every change must pass `npm run build` with zero TypeScript or Next.js errors.
