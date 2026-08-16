# 🤝 Master Smile Studio — Git Merge & Conflict Resolution Protocol for AI Agents & Developers

This document serves as the **Standard Operating Procedure (SOP)** for AI coding agents (Antigravity, Cursor, Copilot, Windsurf) and developers when resolving Git merge conflicts, synchronizing branches, or merging parallel feature branches (such as the **Explore Section** and **Treatment Sections**).

---

## 🔒 1. Core Invariants During Merges (NEVER VIOLATE)

1. **Zero Content & Feature Discarding:**
   * Never blindly use `--ours` or `--theirs` (`checkout --ours` / `checkout --theirs`).
   * Combine changes intelligently: retain your changes **AND** incorporate all changes from the incoming branch (e.g. Explore feature additions, new routes, new components).
2. **Dedicated `*.module.css` Architecture:**
   * Every component must keep its side-by-side CSS module.
   * No Tailwind utilities or inline styles should be injected during merge conflict resolution.
3. **Mandatory 7-Language i18n Dictionary Integrity:**
   * If translation objects or JSON files (`messages/[locale]/...`) conflict, **merge keys additively**.
   * All 7 locales must remain intact: `en`, `tr`, `de`, `pl`, `pt`, `es`, `ru`.
4. **Pre-flight TypeScript & Build Verification:**
   * Run a build/typecheck before finalizing the merge commit. Never commit broken JSX, unresolved import paths, or unclosed tags.

---

## 🛠️ 2. Step-by-Step AI Merge Playbook

When `git pull`, `git merge`, or `git push` fails due to remote changes:

### Step 1: Inspect Status & Conflicts
```bash
git fetch origin
git status
```
Identify all files marked with `both modified:` or `both added:`.

---

### Step 2: Conflict Resolution by File Category

#### A. Route Files (`src/app/[locale]/...`)
* If both branches modified page routes (e.g. treatments and explore):
  * Ensure both page components are imported and rendered in their respective routes.
  * Check `src/i18n/routing.ts` and ensure all active pathnames are retained.

#### B. Component Files (`src/components/...`)
* **Treatment Sections (`src/components/treatment-sections/`)**:
  * Keep all recent improvements: responsive sliders, side arrow buttons, on-demand video player, 2-card before-after layout, compact mobile layouts.
* **Explore Sections (`src/components/explore/` or similar)**:
  * Preserve all new explorer components, interactive maps, studio tours, filters, or cards created by teammates.

#### C. Localization Messages (`messages/[locale]/...` or inline `*_I18N`)
* When conflict markers `<<<<<<< HEAD` ... `=======` ... `>>>>>>> origin/main` appear:
  * **Keep both sets of keys**. If both branches added new keys to `messages/pl/...`, combine them into a valid JSON object.
  * Validate that the resulting JSON is well-formed with no trailing commas.

#### D. CSS Modules (`*.module.css`)
* Keep both style rules. Ensure class names match the corresponding component.
* Ensure responsive breakpoints (`@media (max-width: 860px)`, `@media (max-width: 768px)`) remain clean and valid.

---

### Step 3: Complete Merge & Verify
After resolving conflict markers in all affected files:

```bash
# 1. Stage resolved files
git add .

# 2. Commit the merge
git commit -m "chore(merge): resolve merge conflicts between treatment sections and explore features"

# 3. Verify clean build with zero TypeScript errors
npm run build # or test running pages: /en, /tr, /pl/treatments/dental-implants, /pl/explore

# 4. Push safely to remote
git push origin main
```

---

## 🧭 3. Feature Directory Map & Ownership

| Directory / Domain | Purpose | Key Guidelines |
| :--- | :--- | :--- |
| `src/components/treatment-sections/` | Dental treatment sub-components (Sliders, Quotes, FAQs, Banners) | Dedicated CSS modules, 7-lang dicts, mobile 1/2-card carousels |
| `src/components/explore/` | Explore Studio / Istanbul Dental Tourism sections | Interactive cards, media galleries, responsive grid/slider |
| `src/components/` | Core shared components (Header, Footer, Detail Views) | Unified branding, accessible links, language switchers |
| `messages/` | JSON locale dictionaries (`en`, `tr`, `de`, `pl`, `pt`, `es`, `ru`) | Pure key-value clinical translations |

---

## 🤖 4. Note for AI Coding Assistants (Antigravity / Cursor / Copilot)
When triggered with a merge error prompt:
1. Read this file ([`MERGE_AND_SYNC_GUIDE.md`](file:///home/asroyx/Desktop/mastersmilestudio/MERGE_AND_SYNC_GUIDE.md)) and [`AGENTS.md`](file:///home/asroyx/Desktop/mastersmilestudio/AGENTS.md).
2. Scan each conflicted file using `view_file` or `grep_search`.
3. Synthesize the conflict regions by retaining the teammate's Explore additions while preserving all Treatment & Mobile improvements.
4. Verify HTTP 200 resolution across all 7 locales before confirming completion.
