# 🏛️ Master Smile Studio — Master Architecture, i18n & CSS Specification Guide

> **🚨 MANDATORY COMPLIANCE DIRECTIVE FOR ALL AI AGENTS & DEVELOPERS**
> **DO NOT IMPROVISE. DO NOT USE CREATIVE LIBERTIES. DO NOT GUESS OR ESTIMATE.**
> This repository follows a strict, deterministic, enterprise-grade architecture. Every AI coding assistant (including Antigravity, Claude, ChatGPT, Gemini, Cursor) must **strictly and verbatim** execute tasks according to the patterns, folder structures, design tokens, and naming conventions defined in this manual.

---

## 📑 Complete Architectural Blueprint

1. [Zero-Tolerance Operational Rules](#1-zero-tolerance-operational-rules)
2. [Treatment Page Anatomy & Section Order](#2-treatment-page-anatomy--section-order)
3. [Strict Modular i18n Architecture (7 Locales)](#3-strict-modular-i18n-architecture-7-locales)
4. [Treatment Content JSON Schema Specification](#4-treatment-content-json-schema-specification)
5. [Pure CSS Modules & Design Token System](#5-pure-css-modules--design-token-system)
6. [Interactive Components & Client-Side Safety Rules](#6-interactive-components--client-side-safety-rules)
7. [SEO, Structured Data (Schema.org) & Hreflangs](#7-seo-structured-data-schemaorg--hreflangs)
8. [Standard Implementation Workflow for New Pages](#8-standard-implementation-workflow-for-new-pages)
9. [Prohibited Anti-Patterns & Verification Checklist](#9-prohibited-anti-patterns--verification-checklist)

---

## 1. 🛑 Zero-Tolerance Operational Rules

Any AI Agent making changes to this codebase MUST follow these four non-negotiable rules:

| Rule | Mandate | Consequence of Violation |
| :--- | :--- | :--- |
| **1. Never Reduce/Summarize Content** | **100% of authentic medical/clinical copy must be preserved.** Every anatomical breakdown (implant screw, abutment, crown), table row, reason, and FAQ answer must be fully translated and kept intact. | Immediate task failure and rejection. |
| **2. Pure CSS Modules Only** | **All styles must reside in `*.module.css` files.** Never use Tailwind utility classes (e.g., `relative`, `flex`, `mb-7`, `justify-end`) in JSX. | Layout breakage, floating buttons outside viewport. |
| **3. Relative Anchor Rule** | **Any element containing `position: absolute` children MUST have `position: relative;` declared directly on its CSS class in the module.** | Absolute elements jumping to page top/hero. |
| **4. Zero Build Errors** | Every change must pass `npm run build` with **0 TypeScript and 0 Next.js errors (Exit Code: 0)** before completion. | Production deployment failure. |

---

## 2. 📐 Treatment Page Anatomy & Section Order

Every treatment detail page (e.g., `/treatments/dental-implants`, `/treatments/all-on-6-implants`) MUST follow this standard, structured 9-section clinical layout:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. TreatmentHeroBanner (Badges, H1 Title, Subtitle, 2 CTAs) │
├─────────────────────────────────────────────────────────────┤
│ 2. IntroSection (What is X, 3-Part Titanium Anatomy, Video)  │
├─────────────────────────────────────────────────────────────┤
│ 3. TreatmentRightTreatmentAccordion (8 Options, 3D Preview) │
├─────────────────────────────────────────────────────────────┤
│ 4. TreatmentBeforeAfterSliderSection (Case Studies Carousel)│
├─────────────────────────────────────────────────────────────┤
│ 5. TreatmentPatientReelsSection / TripleVideoSlider (Video) │
├─────────────────────────────────────────────────────────────┤
│ 6. TreatmentWhyChooseSection (6 Clinical Reasons & Badges)  │
├─────────────────────────────────────────────────────────────┤
│ 7. TreatmentCostBreakdownSection (Price Table + VIP Banner) │
├─────────────────────────────────────────────────────────────┤
│ 8. TreatmentClinicTourSection (Virtual Video Walkthrough)   │
├─────────────────────────────────────────────────────────────┤
│ 9. TreatmentFaqSection (Clinical Accordion + Schema JSON-LD)│
└─────────────────────────────────────────────────────────────┘
```

---

## 3. 🌍 Strict Modular i18n Architecture (7 Locales)

### Supported Locales:
* `tr`: Turkish (Default locale — `defaultLocale: 'tr'`)
* `en`: English (International master content)
* `de`: German
* `pl`: Polish
* `pt`: Portuguese
* `es`: Spanish
* `ru`: Russian

### Two-Tier Translation Storage:

```
messages/
├── [locale]/
│   ├── common.json        <-- Global nav, search, buttons, status badges
│   ├── home.json          <-- Homepage specific hero, stats, counters
│   ├── about.json         <-- Clinic story, doctor biographies
│   ├── services.json      <-- General services catalog
│   ├── contact.json       <-- Contact forms, address, directions
│   ├── process.json       <-- 4-step treatment journey
│   ├── team.json          <-- Doctor credentials & surgeon info
│   ├── brands.json        <-- Straumann, NucleOSS, DXL certifications
│   ├── blog.json          <-- Clinical dental articles
│   ├── faq.json           <-- General clinic FAQs
│   ├── footer.json        <-- Footer links, disclaimers, copyrights
│   ├── gallery.json       <-- Before & after gallery labels
│   └── treatments/        <-- 🚀 ISOLATED PER-ROUTE MODULAR JSONs
│       ├── dental-implants.json
│       ├── all-on-4-implants.json
│       ├── all-on-6-implants.json
│       ├── full-mouth-implants.json
│       ├── immediate-implant-treatment.json
│       ├── zygomatic-implants.json
│       ├── zirconium-implants.json
│       ├── implant-supported-dentures.json
│       ├── sinus-lifting.json
│       ├── porcelain-veneers.json
│       ├── zirconia-crowns.json
│       ├── hollywood-smile.json
│       └── teeth-whitening.json
```

### Dynamic Server-Side Loading (`src/lib/treatment-content.ts`):

Never load all treatments inside `services.json`. Always load on-demand in Server Components using `getTreatmentContent(locale, slug)`:

```typescript
import { getTreatmentContent } from '@/lib/treatment-content';

// In Server Component or generateMetadata:
const content = await getTreatmentContent(locale, slug);
// Automatically falls back to 'en' if the specific locale JSON is missing.
```

---

## 4. 📋 Treatment Content JSON Schema Specification

Every `messages/[locale]/treatments/[slug].json` file MUST strictly adhere to this exact JSON schema:

```json
{
  "slug": "dental-implants",
  "hero": {
    "badge": "JCI & ISO Certified Oral Surgery Clinic",
    "title": "Dental Implants in Istanbul",
    "subtitle": "Restore your smile with confidence, lifelong guarantees on Swiss & German premium implants, and expert oral surgeons in Istanbul.",
    "features": [
      "Lifetime Guarantee on Premium Brands",
      "3D CBCT Digital Precision Planning",
      "VIP 5-Star Hotel & Chauffeur Transfer Included"
    ],
    "primaryBtn": "Free Online Consultation",
    "secondaryBtn": "View Packages & Details"
  },
  "intro": {
    "title": "Dental Implants in Istanbul – Master Smile Studio Turkey",
    "whatIsTitle": "What Are Dental Implants?",
    "whatIsP1": "A dental implant is an artificial tooth root that replaces a missing tooth...",
    "parts": [
      {
        "title": "Dental implant (titanium screw)",
        "desc": "works as the tooth root."
      },
      {
        "title": "Abutment",
        "desc": "connects the implant to the crown."
      },
      {
        "title": "Crown",
        "desc": "the visible part that looks like a natural tooth."
      }
    ],
    "healingP": "Once the implant has healed and bonded strongly with the bone...",
    "solutionP": "If you are missing one or more teeth, dental implants in Istanbul...",
    "videoUrl": "https://www.youtube.com/embed/R081L98DAls?t=21"
  },
  "rightTreatment": {
    "heading": "Find the Right Treatment for You",
    "subtitle": "Not sure which dental treatment suits your needs? Browse through our treatment options...",
    "readMore": "READ MORE",
    "items": {
      "fullMouth": {
        "title": "Full Mouth Implants",
        "target": "Patients who have no teeth left in their upper and lower jaws",
        "desc": "A full mouth restoration where all teeth are fixed with implants."
      }
    }
  },
  "whyChoose": {
    "title": "Why Choose Dental Implants in Istanbul?",
    "intro": "Istanbul has become a global leader in dental excellence...",
    "reasons": [
      {
        "title": "Up to 70% Cost Savings",
        "desc": "Save up to 70% compared to UK, US, or European clinics."
      }
    ]
  },
  "cost": {
    "heading": "Dental Implants Cost & Prices in Istanbul, Turkey",
    "tableIntro": "Comparison of dental implant costs between Turkey and other countries:",
    "comparisonTable": [
      {
        "treatment": "Single Dental Implant (Standard)",
        "turkey": "€400 – €700",
        "uk": "£1,800 – £2,500",
        "usa": "$3,000 – $4,500",
        "savings": "Up to 75%"
      }
    ]
  },
  "seo": {
    "title": "Dental Implants in Istanbul | Master Smile Studio Turkey",
    "description": "World-class dental implants in Istanbul: Swiss & German premium quality, lifetime guarantee. Free online consultation."
  }
}
```

---

## 5. 🎨 Pure CSS Modules & Design Token System

### A. Design Tokens Reference

All components must use these official luxury dental brand tokens:

| Token Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| **Navy Primary** | `#0C1B4D` | Headings (`<h2>`, `<h3>`), primary dark buttons, active badges |
| **Navy Dark** | `#070F2C` | Deep contrast surfaces, footer background |
| **Gold / Amber** | `#D58936` | Target labels, active pagination dots, CTA accents |
| **Gold Light** | `#F9F1E8` | Highlight badges, luxury pill surfaces |
| **Teal Primary** | `#3898A0` | Medical checkmarks, feature icons, secondary accents |
| **Teal Dark** | `#2C7A80` | Hover states for teal elements |
| **Surface Off-White**| `#F8FAFC` | Main card background, inner surface wrappers |
| **Surface Pure** | `#FFFFFF` | Inner cards, modal sheets, sticky cards |
| **Border Neutral** | `#E2E8F0` | Subtle card borders, dividers, inputs |
| **Border Active** | `#CBD5E1` | Hovered card borders |
| **Text Primary** | `#111827` | Main title text, bold labels |
| **Text Muted** | `#475569` | Body paragraphs, descriptions, secondary copy |
| **Font Family** | `var(--font-outfit), sans-serif` | Global typography |

### B. Standard Container & Spacing Rules

```css
/* Standard Container for all Sections */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative; /* ALWAYS ensure relative positioning */
}

/* Standard Section Wrapper */
.section {
  padding: 4.5rem 0;
  background-color: #ffffff;
  color: #111827;
  position: relative;
}

/* Responsive Padding */
@media (max-width: 768px) {
  .section {
    padding: 3rem 0;
  }
  .container {
    padding: 0 1rem;
  }
}
```

### C. Standard Luxury Button Styles

```css
/* Gold Luxury Gradient Button */
.goldBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #d58936 0%, #b87128 100%);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(213, 137, 54, 0.35);
  transition: all 0.25s ease;
}

.goldBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(213, 137, 54, 0.45);
}

/* Frosted / Glass Button */
.glassBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.glassBtn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
```

---

## 6. ⚡ Interactive Components & Client-Side Safety Rules

### Preventing `IntlError: MISSING_MESSAGE` in Client Components:

When building `'use client'` interactive accordions, tabs, or sliders, **DO NOT** make dynamic runtime calls to non-existent or deeply nested keys via `useTranslations('services')`.

**Mandatory Pattern:** Use a typed multi-language static record mapped by `useLocale()`:

```typescript
'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import styles from './MyComponent.module.css';

const DATA_MAP: Record<string, { heading: string; items: Array<{ title: string; desc: string }> }> = {
  tr: { heading: '...', items: [...] },
  en: { heading: '...', items: [...] },
  de: { heading: '...', items: [...] },
  pl: { heading: '...', items: [...] },
  pt: { heading: '...', items: [...] },
  es: { heading: '...', items: [...] },
  ru: { heading: '...', items: [...] },
};

export default function MyComponent() {
  const locale = useLocale();
  const data = DATA_MAP[locale] || DATA_MAP.en; // Guarantees 0% runtime translation crashes
  ...
}
```

---

## 7. 🔍 SEO, Structured Data (Schema.org) & Hreflangs

### A. Dynamic Schema.org @graph Generation (`src/lib/treatment-schema.ts`)

Every treatment page must inject the structured JSON-LD schema using `generateTreatmentJsonLd`:

```typescript
import { generateTreatmentJsonLd } from '@/lib/treatment-schema';

const jsonLd = generateTreatmentJsonLd({
  locale,
  slug,
  title: heroTitle,
  description: heroSubtitle,
  canonicalUrl: `https://mastersmilestudio.com/${locale}/treatments/${slug}`,
});
```

### B. Hreflang SEO Safety Lock (`src/lib/i18n-seo.ts`)

* Global pages (Home, About, Contact, Gallery) output hreflangs for all 7 languages.
* Specific treatment pages currently output hreflangs strictly for verified languages (`en`, `tr`, and `x-default = en`) via `TREATMENT_LOCALES` to prevent Googlebot 404 indexing penalties for pending routes.

### C. Permissions-Policy & YouTube Iframes

* **In `next.config.ts`:**
  ```typescript
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), compute-pressure=(self "https://www.youtube.com")'
  }
  ```
* **In YouTube `<iframe>` elements:**
  ```tsx
  <iframe
    src={url}
    title={title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
  ```
  *(Never include `web-share` in iframe `allow` attribute)*.

---

## 8. 🛠️ Standard Implementation Workflow for New Pages

When instructed to add or modify a treatment page:

```mermaid
flowchart TD
    A[1. Check Slug & Copy] --> B[2. Create messages/{locale}/treatments/{slug}.json for 7 Languages]
    B --> C[3. Create/Update Section Component & Component.module.css]
    C --> D[4. Link to src/app/{locale}/treatments/{slug}/page.tsx]
    D --> E[5. Test Dynamic getTreatmentContent Loader]
    E --> F[6. Execute npm run build]
    F -->|Exit Code 0| G[7. Commit & Push to origin/main]
    F -->|Errors Found| H[Fix Lint/Type Errors & Re-test]
    H --> F
```

---

## 9. 🚫 Prohibited Anti-Patterns & Verification Checklist

### ❌ Strictly Prohibited:
1. ❌ **No Tailwind Utility Assumptions:** Never write `<div className="relative flex justify-between">`.
2. ❌ **No Uncontained Absolute Elements:** Never use `position: absolute` without declaring `position: relative` on its direct parent CSS module class.
3. ❌ **No Arbitrary Copy Shortening:** Never truncate descriptions like *"A dental implant consists of 3 parts..."* into *"Dental implants replace teeth."*
4. ❌ **No Hardcoded English/Turkish in Components:** All text must flow through modular JSONs or typed `ACCORDION_DATA_MAP`.
5. ❌ **No Duplicate Files:** Never create duplicate schema generators (use `@/lib/treatment-schema`).

### ✅ Final Verification Checklist:
* [ ] All 7 language files exist under `messages/[locale]/treatments/[slug].json`.
* [ ] Component styles are 100% encapsulated inside `*.module.css`.
* [ ] All slider/carousel containers have `position: relative;`.
* [ ] `npm run build` exits with code 0.
* [ ] Changes are committed and pushed cleanly to git.

---

*Authored for Master Smile Studio Engineering Team — Strict Adherence Required.*
