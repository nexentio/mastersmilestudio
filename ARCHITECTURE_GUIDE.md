# 🏛️ Master Smile Studio — Architecture, i18n & CSS Modules Guide

> **MANDATORY READING FOR ALL AI ASSISTANTS & DEVELOPERS**
> This document defines the non-negotiable architectural foundations, localization (i18n) patterns, and CSS Module styling standards for the Master Smile Studio project. Any AI coding assistant (including Antigravity, Claude, ChatGPT, Gemini, Cursor) working on this codebase **MUST strictly comply** with these rules.

---

## 📑 Table of Contents
1. [Core Principles & Zero-Tolerance Guardrails](#1-core-principles--zero-tolerance-guardrails)
2. [Modular i18n Architecture (next-intl + Dynamic Code Splitting)](#2-modular-i18n-architecture-next-intl--dynamic-code-splitting)
3. [CSS Modules Styling Standards (*.module.css)](#3-css-modules-styling-standards-modulecss)
4. [Step-by-Step: Adding a New Treatment Page](#4-step-by-step-adding-a-new-treatment-page)
5. [Common Pitfalls & Anti-Patterns to Avoid](#5-common-pitfalls--anti-patterns-to-avoid)

---

## 1. 🛑 Core Principles & Zero-Tolerance Guardrails

1. **Content Integrity (NEVER Summarize or Truncate):**
   * Medical, clinical, and pricing content must **NEVER be shortened, summarized, or omitted**.
   * When modularizing, refactoring, or translating, 100% of authentic clinical explanations, 3-part anatomy breakdowns, reasons, table rows, and FAQ items must be preserved.

2. **Pure CSS Modules (NO Tailwind Utility Assumptions):**
   * This project uses **Vanilla CSS Modules (`*.module.css`)** for component isolation.
   * **DO NOT** use ad-hoc Tailwind utility classes like `className="relative flex justify-end mb-7"` inside components. Such classes will fail or cause severe visual bugs (e.g., floating buttons escaping their containers).

3. **7-Language Support:**
   * The project supports 7 locales: `tr` (Turkish - Default), `en` (English), `de` (German), `pl` (Polish), `pt` (Portuguese), `es` (Spanish), `ru` (Russian).

4. **Zero Missing Message Runtime Exceptions:**
   * Every translation key queried in client components must be bulletproof against hot-reloading (HMR) and missing dictionary keys.

---

## 2. 🌍 Modular i18n Architecture (next-intl + Dynamic Code Splitting)

### A. Folder Structure & Namespace Separation

Translations are divided into two distinct tiers:

```
messages/
├── tr/
│   ├── common.json        <-- Global headers, nav, search, common actions
│   ├── home.json          <-- Homepage specific hero, stats, counters
│   ├── about.json         <-- Clinic story, doctor biographies
│   ├── services.json      <-- General services directory
│   ├── contact.json       <-- Contact forms, clinic address, map info
│   ├── ...                <-- (process, team, brands, blog, faq, footer, gallery)
│   └── treatments/        <-- 🚀 MODULAR TREATMENT FOLDERS (Per-route data)
│       ├── dental-implants.json
│       ├── all-on-4-implants.json
│       ├── all-on-6-implants.json
│       └── ...
├── en/
│   └── treatments/
│       ├── dental-implants.json
│       └── ...
├── de/
├── pl/
├── pt/
├── es/
└── ru/
```

### B. Why Modular Treatment JSONs?

* **Monolithic Anti-Pattern:** Putting 20+ treatment descriptions with comprehensive clinical tables into `services.json` causes huge JSON payloads sent to the browser on every single page.
* **Modular Pattern:** Each treatment page dynamically imports *only* its own `treatments/[slug].json` on the server. The client receives **0 KB of unused treatment payload**.

### C. The Dynamic Loader (`src/lib/treatment-content.ts`)

Server components (such as `src/app/[locale]/treatments/[slug]/page.tsx`) load treatment content using the type-safe helper `getTreatmentContent(locale, slug)`:

```typescript
import { getTreatmentContent } from '@/lib/treatment-content';

export default async function TreatmentDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  
  // 1. Loads messages/${locale}/treatments/${slug}.json
  // 2. Automatically falls back to English ('en') if a locale file is pending
  // 3. Returns null safely if no file exists
  const content = await getTreatmentContent(locale, slug);
  
  const heroTitle = content?.hero?.title || 'Fallback Title';
  ...
}
```

### D. Client-Side Accordions & Safe Localization Pattern

When rendering complex interactive client components (`'use client'`), avoid deep dot-notation queries like `t('rightTreatment.items.fullMouth.title')` that can throw `MISSING_MESSAGE` during HMR.

**Preferred Pattern:** Define a typed multilingual dictionary map inside or alongside the component:

```typescript
// Pattern used in src/components/treatment-sections/TreatmentRightTreatmentAccordion.tsx
const ACCORDION_DATA_MAP: Record<string, { heading: string; items: TreatmentItem[] }> = {
  tr: { heading: '...', items: [...] },
  en: { heading: '...', items: [...] },
  de: { heading: '...', items: [...] },
  pl: { heading: '...', items: [...] },
  pt: { heading: '...', items: [...] },
  es: { heading: '...', items: [...] },
  ru: { heading: '...', items: [...] },
};

export default function TreatmentRightTreatmentAccordion({ customHeading, customItems }: Props) {
  const locale = useLocale();
  const data = ACCORDION_DATA_MAP[locale] || ACCORDION_DATA_MAP.en;
  
  const heading = customHeading || data.heading;
  const items = customItems || data.items;
  ...
}
```

---

## 3. 🎨 CSS Modules Styling Standards (`*.module.css`)

### A. Strict Rules for Component Styling

1. **Every Section Must Have its Own CSS Module:**
   * Component: `src/components/treatment-sections/TreatmentExampleSection.tsx`
   * Style: `src/components/treatment-sections/TreatmentExampleSection.module.css`

2. **Self-Contained Layout & Positioning:**
   * Never assume a parent container has `position: relative` or `display: flex`.
   * If a child has `position: absolute` (like navigation arrows or badge ribbons), its direct parent class **MUST** explicitly declare `position: relative;` in its `*.module.css`.

3. **No Global Utility Classes in JSX:**
   ```tsx
   // ❌ BAD (Tailwind classes that do not exist globally)
   <div className="relative flex justify-between mb-8">
   
   // ✅ GOOD (Scoped CSS Module classes)
   <div className={styles.headerWrapper}>
   ```

### B. Luxury Design System & Color Tokens

Use the project's established palette and typography standards:

| Token / Purpose | Value | Usage |
| :--- | :--- | :--- |
| **Deep Navy (Brand Primary)** | `#0C1B4D` / `#0F2454` | Headings, dark cards, primary badges |
| **Gold / Amber Accent** | `#D58936` / `#E5A965` | Target text, active dots, gold buttons |
| **Teal / Cyan Accent** | `#3898A0` / `#2C7A80` | Checkmarks, clinical badges, links |
| **Light Surface Surface** | `#F8FAFC` / `#FFFFFF` | Card backgrounds, section surfaces |
| **Border Neutral** | `#E2E8F0` / `#CBD5E1` | Card outlines, dividers |
| **Body Text** | `#475569` / `#64748B` | Paragraphs, descriptions |
| **Font Family** | `var(--font-outfit), sans-serif` | Outfit typography system |

### C. Standard Responsive Breakpoints in Modules

```css
/* Desktop / Base */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

/* Tablet (1024px) */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile (640px) */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 4. 🚀 Step-by-Step: Adding a New Treatment Page

When adding a new treatment (e.g. `all-on-4-implants`):

1. **Create the Modular Translation Files in 7 Languages:**
   * Create `messages/tr/treatments/all-on-4-implants.json`
   * Create `messages/en/treatments/all-on-4-implants.json`
   * Create `messages/{de,pl,pt,es,ru}/treatments/all-on-4-implants.json`
   * Include keys: `slug`, `hero`, `intro`, `whyChoose`, `cost`, `seo`.

2. **Create the Section / Detail View Component:**
   * Create `src/components/AllOnFourImplantDetailView.tsx`
   * Create `src/components/AllOnFourImplantDetailView.module.css`

3. **Verify Routing & Dynamic Server Loading:**
   * Ensure `src/app/[locale]/treatments/[slug]/page.tsx` calls `await getTreatmentContent(locale, slug)`.
   * Ensure metadata is generated dynamically using `content.seo.title` and `content.seo.description`.

4. **Run Validation Command:**
   ```bash
   npm run build
   ```
   * Ensure build exits with code 0 and no TypeScript / Turbopack errors.

---

## 5. ⚠️ Common Pitfalls & Anti-Patterns to Avoid

| Pitfall | Problem | Solution |
| :--- | :--- | :--- |
| **Using `allow="... web-share"` in YouTube iframe** | Triggers Chrome console permissions policy violation (`Unrecognized feature: 'web-share'`). | Use standard `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"`. |
| **Missing `position: relative` on carousel wrapper** | Absolute nav buttons (`.navBtn`) float all the way to the top of the page next to the Hero banner. | Add `position: relative;` to the `.carouselWrapper` class in the CSS Module. |
| **Injecting hardcoded text directly in JSX** | Breaks multi-language experience for 6 other languages. | Store text in `messages/[locale]/treatments/[slug].json` or typed `ACCORDION_DATA_MAP`. |
| **Modifying global `globals.css` for one-off component tweaks** | Pollutes global scope and causes style collision regressions. | Place all component-specific CSS strictly in `*.module.css`. |

---

*Document version: 1.0.0 — Master Smile Studio Engineering Guidelines*
