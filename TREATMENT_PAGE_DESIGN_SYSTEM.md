# MASTER SMILE STUDIO - TREATMENT PAGE DESIGN SYSTEM & ARCHITECTURAL SPECIFICATION

## Overview
This document specifies the exact design language, layout hierarchy, color tokens, typography rules, component patterns, and conversion rate optimization (CRO) standards implemented across the flagship All-on-4 treatment page (`/treatments/dental-implants/all-on-4-implants`).

All subsequent treatment pages (All-on-6, Full Mouth Implants, Zygomatic Implants, Dental Veneers, Crowns) MUST adhere strictly to this specification to maintain brand luxury, clinical authority, and high international conversion rates.

---

## 1. Core Brand & Aesthetic Philosophy

1. **Harley Street & Swiss Clinical Luxury:**
   The visual tone conveys high-tier oral surgery authority rather than generic tourism marketing. Layouts are clean, structured, and editorial.
2. **Zero "AI Slop" & Zero Emoji Invariant:**
   Decorative emojis (such as colored circles, stars, crowns, warning signs, waving hands) are strictly prohibited across all UI components, tables, lists, and copy. Micro-visual hierarchy is achieved through refined typography, subtle status markers, and precise CSS borders.
3. **Dedicated CSS Module Standard:**
   Inline styles (`style={{ ... }}`) and Tailwind utility classes are prohibited. Every component must have a dedicated `[ComponentName].module.css` file.
4. **Full 7-Language Parity:**
   Every section, table row, card, specification, and button must support all 7 active locales (`en`, `tr`, `de`, `pl`, `pt`, `es`, `ru`) with 100% content completeness and zero shortcuts.

---

## 2. Color Palette & Design Tokens

### Primary & Accent Colors
* **Primary Deep Navy:** `#0c1b4d` (Headings, primary text contrast, table headers, dark emphasis)
* **Accent Warm Gold:** `#D58936` (Primary CTA buttons, active currency toggles, highlighted card borders, link accents)
* **Accent Gold Dark:** `#b45309` (Active/focused text highlights, badge borders)
* **Accent Gold Light / Surface Tint:** `#fdfbf7` (Background fill for highlighted "Gold Standard" cards)

### Neutral & Background Tones
* **Pure White Surface:** `#ffffff` (Primary content cards, white section backgrounds)
* **Off-White / Cool Slate Surface:** `#f8fafc` (Alternating section backgrounds, e.g., Pricing Packages)
* **Border Light:** `#e2e8f0` (Standard container borders, card dividers)
* **Border Subtlest:** `#f1f5f9` (Table row dividers, inner list separators)

### Text Color Hierarchy
* **Title Text:** `#0c1b4d` (H1, H2, H3 headings)
* **Body Primary:** `#334155` (Emphasized text, table criteria, strong statements)
* **Body Regular:** `#475569` (Standard paragraph copy, FAQ answers, list items)
* **Muted / Subtitle Text:** `#64748b` (Section subtitles, helper captions, secondary labels)

### Status & Indicator Colors (No Emojis)
* **Positive / Included:** `#10b981` (Clean bullet indicator)
* **Negative / Weakness:** `#ef4444` (Clean dash indicator)
* **Cautionary:** `#f59e0b` (Clean neutral indicator)
* **WhatsApp Green:** `#25D366` (Floating & footer WhatsApp triggers)

---

## 3. Typography & Spacing Hierarchy

### Fluid Typography System
* **Page Title (H1):** `font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 800; letter-spacing: -0.025em;`
* **Section Title (H2):** `font-size: clamp(1.85rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em;`
* **Card & Group Title (H3):** `font-size: 1.25rem - 1.4rem; font-weight: 800;`
* **Intro Lead Paragraph:** `font-size: 1.18rem; font-weight: 500; line-height: 1.7; color: #334155;`
* **Standard Body Copy:** `font-size: 1.02rem; line-height: 1.75; color: #475569;`
* **Inline Quick Takeaways:** Bold short answers (`<strong>...</strong>`) placed directly inline with detailed medical text to allow rapid scanning without jarring whitespace.

### Spacing & Container Rules
* **Max Container Width:** `1240px` (Main grids, packages, journey card, materials table)
* **Centered Editorial Width:** `820px` to `860px` (Section headers, FAQ container, text summaries)
* **Section Vertical Padding:** `5rem 0` on desktop (`> 768px`), `3.5rem 0` on mobile (`<= 768px`)
* **Card Border Radius:** `18px` for primary cards, `14px` for control bars, `12px` for inner specification boxes, `9999px` for pill tags and CTA buttons.
* **Elevation & Box Shadows:**
  * Standard Card: `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);`
  * Highlighted Gold Card: `box-shadow: 0 12px 35px rgba(213, 137, 54, 0.12);`
  * Card Hover State: `transform: translateY(-4px); box-shadow: 0 12px 30px rgba(12, 27, 77, 0.08);`

---

## 4. Master 13-Section Page Layout Architecture

Every flagship treatment page follows this exact conversion sequence:

```
[ Hero Header (H1, Category Badge, Dual CTAs) ]
                      ↓
[ 1. Clinical & Biomechanical Anatomy + 16:9 4K Video ]
                      ↓
[ 2. Permanent Bridge Materials Comparison (Zirconia vs Acrylic vs PFM) ]
                      ↓
[ 3. Transparent Packages & Dynamic Currency Switcher (EUR / GBP / USD) ]
                      ↓
[ 4. VIP Services Included (Hotel, Transfers, CBCT, Medications) ]
                      ↓
[ 5. Clinic Tour & CAD/CAM Laboratory Video Walkthrough ]
                      ↓
[ 6. Founding Oral Surgeons & Medical Faculty ]
                      ↓
[ 7. Before & After Case Transformations Slider ]
                      ↓
[ 8. Verified Patient Reviews (Trustpilot & Google 5-Star) ]
                      ↓
[ 9. Parallax VIP Care Divider ]
                      ↓
[ 10. Authentic Patient Video Testimonial Reels ]
                      ↓
[ 11. Dental Journey Timeline (4 Accordion Milestones) ]
                      ↓
[ 12. 17-Question Master Clinical & Logistics FAQ Matrix ]
                      ↓
[ 13. "Let's Create Your Perfect Smile Plan" 4-Step Interactive Lead Funnel ]
                      ↓
[ Global Footer ]
```

---

## 5. Detailed Component Specifications

### 1. Clinical Intro & 16:9 Video
* **Purpose:** Establishes surgical authority within 5 seconds.
* **Key Elements:** Explains 45-degree angled fixture biomechanics, nerve/sinus bypass, and 90% bone graft avoidance. Integrates semantic in-text links to related treatments.
* **Video Wrapper:** Responsive `aspect-ratio: 16 / 9; border-radius: 18px; border: 1px solid #e2e8f0;` embedding a 4K surgical animation/procedure.

### 2. Permanent Bridge Materials Comparison Section
* **Purpose:** Educates international patients on why budget clinics fail with acrylic/PFM, proving the value of Monolithic Multilayer Zirconia.
* **Key Elements:**
  * 3-Column Material Cards (Zirconia [Gold Standard], Hybrid Acrylic, PFM).
  * Specifications Box: Material Type, Flexural Strength (MPa), Chipping Risk, Expected Lifespan.
  * Full Comparison Table: Side-by-side comparison across fracture risk, wear, staining, gum biocompatibility, aesthetics, and longevity.

### 3. Transparent Packages & Dynamic Currency Switcher
* **Purpose:** Eliminates price anxiety and provides 100% price transparency.
* **Key Elements:**
  * Dynamic Currency Switcher (`EUR`, `GBP`, `USD`) with zero page reloads.
  * 6 Real Implant Brand Cards (`Straumann`, `DXL German`, `NucleOSS`, `Megagen`, `Neodent`, `Hiossen`).
  * Duration, Included items, Price per arch, and Anchor CTA.
  * **Zero Leak Rule:** Package CTA buttons anchor directly to the on-page interactive form (`href="#js_target1"`), preventing off-page bounce.

### 4. Dental Journey Timeline (`TreatmentJourneySimpleSection`)
* **Purpose:** Clarifies exact travel schedules, recovery timelines, and visit milestones.
* **Key Elements:**
  * 4 Master Accordion Items:
    1. Average Length of Stay in Istanbul (3–5 days visit 1, 5–7 days visit 2).
    2. Number of Visits Required (Exactly 2 visits).
    3. Recovery Time & Healing Process (24–48h surgical recovery, 3 months osseointegration).
    4. Price & Package Transparency (Starting price, all-inclusive guarantee).
  * Inline bold quick answers (`<strong>...</strong>`) followed immediately by detailed explanations.

### 5. 17-Question Master FAQ Matrix (`faqSection`)
* **Purpose:** Systematically resolves every clinical, surgical, and logistical objection before booking.
* **Key Elements:**
  * **Group 1 (10 Questions):** Specialized Biomechanical & Clinical Questions (All-on-4 vs All-on-6, same-day temporary teeth, 3D surgical guide, eating diet, 15-year 98%+ success rate).
  * **Group 2 (7 Questions):** Health Tourism, Inclusions, Sedation & Lifetime Warranty (Fixed price guarantee, IV sedation, diabetes/smoking, lifetime manufacturer passport, international remote follow-up).
  * Clean accordion toggle with smooth CSS transition and gold plus/minus icon.

### 6. Interactive 4-Step Quote Funnel (`TreatmentInteractiveQuoteForm`)
* **Purpose:** Primary lead generation engine placed directly above the footer.
* **Key Elements:**
  * Step 1: Treatment selection (pre-selected with active page treatment) + Age group.
  * Step 2: Dentist conversation history + Travel timeline.
  * Step 3: Name, Country, Phone (WhatsApp), Preferred contact channel + Notes.
  * Step 4: Instant confirmation screen with direct WhatsApp one-click transfer.

---

## 6. Conversion Optimization (CRO) Best Practices

1. **Closed-Loop Page Architecture:**
   Avoid leading patients away to empty `/contact` pages. Keep them engaged on the treatment page where trust assets are active.
2. **Dual-Channel Call-to-Action:**
   Support both analytical patients (who prefer structured multi-step forms) and spontaneous patients (who prefer immediate WhatsApp concierge chat).
3. **Continuous Social Proof Integration:**
   Place Before/After sliders, verified Trustpilot reviews, and authentic video reels directly between pricing packages and logistical FAQs.
