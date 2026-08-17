'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentParallaxBanner from '@/components/treatment-sections/TreatmentParallaxBanner';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentClinicTourSection from '@/components/treatment-sections/TreatmentClinicTourSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './ZygomaticImplantDetailView.module.css';

interface PackageItem {
  name: string;
  brand: string;
  duration: string;
  img: string;
  included: string[];
  price: { USD: string; EUR: string; GBP: string };
  popular?: boolean;
}

interface FaqItem {
  q: string;
  a: string;
}

interface CandidacyPoint {
  title: string;
  desc: string;
}

interface MaterialCardItem {
  title: string;
  sub: string;
  badge?: string;
  isGold?: boolean;
  material: string;
  strength: string;
  chippingRisk: string;
  lifespan: string;
  features: { text: string; status: 'good' | 'bad' | 'warn' }[];
}

interface MaterialTableRow {
  criteria: string;
  zirconia: string;
  acrylic: string;
  pfm: string;
}

interface CompareTableRow {
  criteria: string;
  grafting: string;
  hybrid: string;
  quad: string;
}

interface ProcessCardItem {
  step: string;
  title: string;
  text: string;
  specs: { key: string; val: string }[];
}

interface CostTableRow {
  country: string;
  costPerArch: string;
  inclusions: string;
  valueAdvantage: string;
}

interface DetailDictionary {
  introBadge: string;
  introTitle: string;
  introLead: string;
  introP1: string;
  introP2: string;
  introP3Lead: string;
  introP3LinkAll4: string;
  introP3Mid: string;
  introP3LinkAll6: string;
  introP3And: string;
  introP3LinkSinus: string;
  introP3Tail: string;

  candidacyTitle: string;
  candidacySubtitle: string;
  candidacyPoints: CandidacyPoint[];

  compareTitle: string;
  compareSubtitle: string;
  compareTableHeaders: {
    criteria: string;
    grafting: string;
    hybrid: string;
    quad: string;
  };
  compareTableRows: CompareTableRow[];
  compareDecision: {
    whenGraftingTitle: string;
    whenGraftingText: string;
    whenZygomaticTitle: string;
    whenZygomaticText: string;
  };

  processTitle: string;
  processSubtitle: string;
  processCards: ProcessCardItem[];

  materialsTitle: string;
  materialsSubtitle: string;
  materialsSpecLabels: {
    material: string;
    strength: string;
    chipping: string;
    lifespan: string;
  };
  materialsCards: MaterialCardItem[];
  materialsTableHeaders: {
    criteria: string;
    zirconia: string;
    acrylic: string;
    pfm: string;
  };
  materialsTableRows: MaterialTableRow[];

  packagesTitle: string;
  packagesSubtitle: string;
  durationLabel: string;
  includedLabel: string;
  pricePerArchLabel: string;
  getQuoteBtn: string;
  mostPopularBadge: string;

  costTitle: string;
  costSubtitle: string;
  costTableHeaders: {
    country: string;
    costPerArch: string;
    inclusions: string;
    valueAdvantage: string;
  };
  costTableRows: CostTableRow[];

  faqTitle: string;
  faqSubtitle: string;
  faqGroup1Title: string;
  faqGroup2Title: string;
  packages: PackageItem[];
  faqsPart1: FaqItem[];
  faqsPart2: FaqItem[];
}

const DICTIONARIES: Record<string, DetailDictionary> = {
  "en": {
    "introBadge": "ZYGOMATIC & PTERYGOID CHEEKBONE RESCUE PROTOCOL",
    "introTitle": "Zygomatic and Pterygoid Dental Implants in Istanbul: Same-Day Fixed Teeth for Severe Bone Loss",
    "introLead": "Developed from the pioneering 1990s research of Prof. Per-Ingvar Brånemark, extra-long (30–55mm) titanium implants anchor directly into the non-resorbable zygomatic arch (cheekbone) and pterygomaxillary plate—delivering fixed, load-bearing teeth in 24 hours without 12–18 months of painful bone grafts.",
    "introP1": "Zygomatic and pterygoid dental implants are the ultimate clinical solution for patients suffering from catastrophic maxillary (upper jaw) bone resorption, failed sinus lifts, or decades of loose complete denture wear. Because the zygomatic cheekbone possesses the highest cortical bone density in the craniofacial skeleton and never resorbs with age or tooth loss, our maxillofacial surgeons bypass hollowed maxillary sinuses completely.",
    "introP2": "Using advanced 3D CBCT craniofacial mapping and stereolithographic surgical guides under conscious IV sedation or general anesthesia, we achieve exceptional primary insertion torque values exceeding 50–65 Ncm. This allows safe immediate loading with a rigid screw-retained temporary bridge in 24 hours, followed by a permanent 1200+ MPa monolithic multilayer German zirconia full arch.",
    "introP3Lead": "For patients with localized or moderate residual bone, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkSinus": "Sinus Lifting & Bone Grafting",
    "introP3Tail": " solutions in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zygomatic & Pterygoid Implants?",
    "candidacySubtitle": "If you have been told by other dentists that you \"have no bone left\" for regular implants, zygomatic surgery is your definitive answer.",
    "candidacyPoints": [
      {
        "title": "Severe Upper Jaw Bone Atrophy",
        "desc": "Patients with pencil-thin or razor-sharp upper jaw ridges where traditional 8–12mm implants cannot be anchored."
      },
      {
        "title": "Failed Previous Sinus Bone Grafts",
        "desc": "Patients who underwent sinus lifts or block bone augmentations that failed, resorbed, or became chronically infected."
      },
      {
        "title": "Decades of Complete Denture Wear",
        "desc": "Long-term denture pressure accelerates alveolar bone loss; cheekbone anchoring restores solid fixed bite stability."
      },
      {
        "title": "Post-Trauma or Oncological Resection",
        "desc": "Maxillofacial reconstruction following cyst removal, tumor resection, or major facial trauma."
      }
    ],
    "compareTitle": "Objective Clinical Comparison: Quad Zygoma vs. Hybrid Zygoma vs. Complex Sinus Bone Grafting",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Bone Grafting Requirement",
        "grafting": "Extensive block / sinus bone grafts (Hip/bovine)",
        "hybrid": "0% Bone Grafting (Cheekbone anchor)",
        "quad": "0% Bone Grafting (Complete bypass)"
      },
      {
        "criteria": "Total Treatment Duration",
        "grafting": "12 – 18 months total wait",
        "hybrid": "24–48 hours for fixed teeth (Final at 3 Mo)",
        "quad": "24–48 hours for fixed teeth (Final at 3 Mo)"
      },
      {
        "criteria": "Surgical Operating Stages",
        "grafting": "2–4 separate surgeries over 1.5 years",
        "hybrid": "1 single surgery (Sedation/GA)",
        "quad": "1 single surgery (Sedation/GA)"
      },
      {
        "criteria": "Period with Removable Denture",
        "grafting": "12–18 months wearing loose flipper",
        "hybrid": "0 Days (Fixed screw bridge in 24h)",
        "quad": "0 Days (Fixed screw bridge in 24h)"
      },
      {
        "criteria": "Primary Insertion Torque",
        "grafting": "Low to moderate (15–25 Ncm)",
        "hybrid": "Very High (45–60 Ncm)",
        "quad": "Ultra High (50–65 Ncm in dense zygoma)"
      },
      {
        "criteria": "Long-Term Failure & Resorption Risk",
        "grafting": "High (Grafted bone resorbs up to 40%)",
        "hybrid": "Extremely Low (< 2% over 15 years)",
        "quad": "Extremely Low (< 2.2% over 20+ years)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "grafting": "Mild to moderate localized sinus deficit",
        "hybrid": "Severe posterior loss with anterior bone",
        "quad": "Total upper jawbone loss (Razor-thin maxilla)"
      }
    ],
    "compareDecision": {
      "whenGraftingTitle": "When is Complex Sinus Grafting Clinically Feasible?",
      "whenGraftingText": "Sinus grafting is only advisable for patients with localized bone deficits who have at least 4–5mm of native subantral bone to stabilize grafts, without total jawbone atrophy.",
      "whenZygomaticTitle": "When are Zygomatic Implants the Only Viable Solution?",
      "whenZygomaticText": "Zygomatic implants are the definitive gold standard when the upper jaw is completely hollowed out, previous bone grafts have failed, or the patient cannot tolerate 18 months without fixed teeth."
    },
    "processTitle": "3-Phase Precision Zygomatic Protocol: From 3D CBCT to Monolithic Zirconia",
    "processSubtitle": "Every zygomatic procedure at Master Smile Studio follows a strict craniofacial surgical protocol for 98% long-term success.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Craniofacial Mapping & Stereolithographic Guided Stent",
        "text": "High-resolution 3D tomography analyzes zygomatic bone density, sinus contours, and orbital margins. A stereolithographic surgical guide determines the exact 3D entry trajectory.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Anatomy Analysis",
            "val": "Zygomatic Arch & Orbit"
          },
          {
            "key": "Guide System",
            "val": "Craniofacial Surgical Stent"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Cheekbone Anchoring & 24h Fixed Temporary Bridge (Day 1)",
        "text": "Under conscious IV sedation or general anesthesia, 30–55mm titanium fixtures are anchored into the cheekbone at 50–65 Ncm. A rigid, screw-retained temporary bridge is fixed in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Ultra Stable)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed Screw-Retained in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "5-Axis CAD/CAM Monolithic Zirconia Final Full Arch",
        "text": "After 3–6 months of flawless osseointegration, 3D intraoral digital scans capture the healed tissue. A 1200+ MPa monolithic multilayer German zirconia bridge is robotically milled.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Material",
            "val": "100% German Multilayer Zirconia"
          },
          {
            "key": "Substructure",
            "val": "Custom Titanium Platform"
          }
        ]
      }
    ],
    "materialsTitle": "Zygomatic Full-Arch Bridge Materials: Why Monolithic Zirconia Wins",
    "materialsSubtitle": "In zygomatic arches, high cantilever forces demand maximum rigidity and fracture resistance to protect the cheekbone fixtures.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Custom Titanium Framework",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic German Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrestricted bite force: easily handles 600+ Newtons of mastication",
            "status": "good"
          },
          {
            "text": "Ultra-smooth non-porous surface prevents plaque & Peri-implantitis",
            "status": "good"
          },
          {
            "text": "Custom titanium substructure eliminates micro-flexing across implants",
            "status": "good"
          },
          {
            "text": "Natural multi-layer light translucency matching adjacent features",
            "status": "good"
          }
        ]
      },
      {
        "title": "Titanium-Bar Acrylic Hybrid",
        "sub": "Cast Metal Substructure with Acrylic Resin & Plastic Teeth",
        "badge": "Economy Alternative",
        "isGold": false,
        "material": "PMMA Acrylic Resin + Cast Titanium Bar",
        "strength": "80 – 120 MPa (Low)",
        "chippingRisk": "High (Plastic teeth pop off or wear down)",
        "lifespan": "3 – 7 Years",
        "features": [
          {
            "text": "Lower initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Abrasive wear flattens teeth, shifting jaw alignment",
            "status": "bad"
          },
          {
            "text": "Porcelain/acrylic resin absorbs stains, odors, and bacteria",
            "status": "bad"
          },
          {
            "text": "Requires frequent maintenance, relining, and total replacement",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Cast Cobalt-Chromium Frame with Baked Porcelain",
        "badge": "Legacy Standard",
        "isGold": false,
        "material": "Cast Cobalt-Chromium Alloy + Feldspathic Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "Moderate to High (Porcelain delamination risk)",
        "lifespan": "8 – 12 Years",
        "features": [
          {
            "text": "Rigid metal substructure",
            "status": "good"
          },
          {
            "text": "Porcelain prone to fractures under heavy zygomatic bite forces",
            "status": "bad"
          },
          {
            "text": "Dark grey metal margin shows over time if gums recede",
            "status": "bad"
          },
          {
            "text": "Heavy bulk creates an uncomfortable foreign-body sensation",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "acrylic": "Acrylic Hybrid (PMMA)",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "acrylic": "80 – 120 MPa (Fragile)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Chipping & Breakage Risk",
        "zirconia": "0% (Solid homogeneous block)",
        "acrylic": "High (Teeth detach or fracture)",
        "pfm": "High (Porcelain chips off metal)"
      },
      {
        "criteria": "Hygiene & Odor Resistance",
        "zirconia": "100% Non-porous (Zero odor/stains)",
        "acrylic": "Porrosive (Absorbs bacteria & odor)",
        "pfm": "Moderate (Plaque traps at metal line)"
      },
      {
        "criteria": "Digital CAD/CAM Robotic Milling",
        "zirconia": "5-axis robotic precision (< 5 µm)",
        "acrylic": "Manual flasking & pressing",
        "pfm": "Manual casting and hand-layering"
      },
      {
        "criteria": "Suitability for Zygomatic Arches",
        "zirconia": "100% Recommended (Maximum stability)",
        "acrylic": "Temporary use only (High flex)",
        "pfm": "Not Recommended (Chipping risk)"
      },
      {
        "criteria": "Expected Clinical Longevity",
        "zirconia": "Lifetime Guarantee",
        "acrylic": "3 – 7 Years",
        "pfm": "8 – 12 Years"
      }
    ],
    "packagesTitle": "Zygomatic Full-Arch Packages & Dynamic Currency Calculator",
    "packagesSubtitle": "All-inclusive packages per upper jaw with certified Nobel Biocare, Straumann, and specialized zygomatic systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Upper Jaw (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extended Zygomatic titanium implants in cheekbone",
          "2-4x Conventional anterior titanium dental implants",
          "Operating room fees & Specialist Anesthesiologist care",
          "Conscious IV Sedation / General Anesthesia included",
          "24-Hour fixed screw-retained temporary full-arch bridge",
          "Permanent CAD/CAM Monolithic Zirconia Full-Arch Bridge",
          "3D CBCT Craniofacial Tomography & Surgical Guide",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Quad Zygomatic Master Package",
        "brand": "NobelZygoma by Nobel Biocare (4 Extended Zygomatic Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "popular": true,
        "price": {
          "EUR": "€9,900",
          "GBP": "£8,500",
          "USD": "$10,900"
        },
        "included": [
          "4x NobelZygoma extra-long titanium implants (2 per cheekbone)",
          "Complete rescue for zero-bone razor-thin upper jaws",
          "Hospital surgical suite & Anesthesiology team included",
          "Conscious IV Sedation / General Anesthesia included",
          "Same-day fixed screw-retained acrylic temporary bridge",
          "1200+ MPa Monolithic Multilayer German Zirconia Bridge",
          "Lifetime Global Nobel Biocare Warranty & Passport",
          "Luxury 5-Star Hotel Partner & VIP Private Chauffeur"
        ]
      },
      {
        "name": "Straumann BLX + Zygoma Hybrid",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,500",
          "GBP": "£7,300",
          "USD": "$9,350"
        },
        "included": [
          "2x Specialized Zygomatic Implants + 4x Straumann BLX Fixtures",
          "Hydrophilic SLActive surface for ultra-fast bone integration",
          "Full surgical theatre & Anesthesia administration",
          "Fixed aesthetic screw-retained temporary teeth in 24h",
          "Bespoke Monolithic Zirconia Full-Arch Permanent Bridge",
          "3D CBCT Diagnostic Planning & Stereolithographic Stent",
          "Lifetime International Straumann Guarantee & Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Stay included"
        ]
      },
      {
        "name": "Noris Medical Zygoma Specialized",
        "brand": "Noris Medical International (Zygomatic & Pterygoid Specialists)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "2-4x Noris Zygomatic machined-collar implants",
          "High insertion torque stability in cortical cheekbone",
          "Complete hospital surgical unit & sedation care",
          "Immediate screw-retained temporary bridge in 24 hours",
          "Permanent CAD/CAM Monolithic Zirconia Restoration",
          "3D CBCT Tomography & virtual surgical navigation",
          "Lifetime Manufacturer Warranty Passport",
          "VIP Airport-Hotel-Clinic Transfers & 5-Star Hotel"
        ]
      },
      {
        "name": "Southern Implants Co-Axis Zygoma",
        "brand": "Southern Implants (55° Angled Co-Axis Platform)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€8,200",
          "GBP": "£7,050",
          "USD": "$9,000"
        },
        "included": [
          "2-4x Southern Implants Co-Axis with built-in 55° correction",
          "Eliminates bulky prosthetic palatal profile in the mouth",
          "General Anesthesia / IV Sedation with specialist MD",
          "Same-day fixed aesthetic temporary acrylic bridge",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "3D CBCT Guided Surgery & post-op medication pack",
          "Lifetime International Manufacturer Warranty",
          "VIP Private Mercedes Transport & Luxury 5-Star Hotel"
        ]
      },
      {
        "name": "Zygoma + Pterygoid Extreme Arch",
        "brand": "Multi-Anchor Solution (2 Zygoma + 2 Pterygoid + 2 Anterior)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,650",
          "USD": "$9,800"
        },
        "included": [
          "2x Zygomatic implants + 2x Pterygoid implants + 2x Anterior",
          "Total elimination of posterior cantilever for maximum chewing",
          "Hospital surgical suite, Anesthesiologist & sedation care",
          "Fixed screw-retained temporary teeth in 24 hours",
          "Full-Arch Monolithic German Zirconia Permanent Bridge",
          "Comprehensive 3D CBCT Craniofacial Mapping",
          "Lifetime Global Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Luxury Accommodations"
        ]
      }
    ],
    "costTitle": "International Cost Comparison: Zygomatic Implants (UK / Germany vs Istanbul)",
    "costSubtitle": "Compare real clinical costs per full upper jaw including surgical theatre, general anesthesia, temporary bridge, and permanent monolithic zirconia.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Zygomatic Cost (Upper Jaw)",
      "inclusions": "Package Coverage & Hospital Services",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£18,000 – £26,000 ($23,000 – $33,000)",
        "inclusions": "Surgical fees only. Hospital operating room (£2,500), general anesthesia (£1,800), CBCT (£250), and temporary teeth billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Maxillofacial Clinics)",
        "costPerArch": "€16,000 – €24,000 ($17,500 – $26,500)",
        "inclusions": "Surgeon and implant hardware. Hospital bed, anesthesiologist, hotel stay, and transfers billed as separate line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €12,500 (£5,950 – £10,750)",
        "inclusions": "100% All-Inclusive: Zygomatic implants, hospital surgical unit, anesthesia team, 3D CBCT, fixed temporary bridge, permanent zirconia bridge, 5-star hotel & VIP Mercedes transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Frequently Asked Questions: Zygomatic Implants",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, anesthesia, surgical recovery, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical FAQ (Craniofacial Cheekbone Anchoring)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zygomatic Dental Implants and how do they work?",
        "a": "Zygomatic implants are extended titanium fixtures (30mm to 55mm long) specifically engineered for patients with severe upper jawbone resorption. Instead of placing implants into the thin alveolar ridge, they are anchored directly into the dense, cortical bone of the zygomatic arch (cheekbone), which never resorbs over time."
      },
      {
        "q": "Who is an ideal candidate for Zygomatic Implants?",
        "a": "Ideal candidates are patients with severe bone loss in the upper jaw who have been told they cannot have standard dental implants, those who have suffered failed sinus bone grafts, long-term complete denture wearers with razor-thin ridges, or patients following oncological maxillary resection."
      },
      {
        "q": "Why are Zygomatic Implants superior to complex sinus bone grafting?",
        "a": "Extensive sinus lifting and iliac crest bone grafting require 12 to 18 months of healing with high failure and resorption rates. Zygomatic implants bypass the maxillary sinus completely, eliminating bone graft surgery and allowing same-day fixed teeth in 24 to 48 hours."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma combines 2 zygomatic implants in the posterior cheekbones with 2 to 4 conventional implants in the anterior upper jaw. Quad Zygoma uses 4 zygomatic implants (2 on each cheekbone) when there is total bone loss in both the front and back of the upper jaw."
      },
      {
        "q": "Is Zygomatic implant surgery performed under general anesthesia or sedation?",
        "a": "At Master Smile Studio, zygomatic implant surgeries are performed under conscious IV sedation or general anesthesia in our surgical operating suites, administered by a specialist anesthesiologist for complete comfort, zero pain, and zero surgical anxiety."
      },
      {
        "q": "Will I be left without teeth during the healing period?",
        "a": "Never. Because the cheekbone provides exceptionally high initial insertion torque (>45–65 Ncm), a rigid, screw-retained fixed temporary acrylic/PMMA bridge is securely attached within 24 to 48 hours after surgery."
      },
      {
        "q": "What are the risks to the maxillary sinus or facial nerves?",
        "a": "When performed by skilled maxillofacial surgeons using 3D CBCT navigation and extra-sinus surgical protocols, zygomatic implants have a 97–98% success rate. The facial motor nerves are located far superficial to the surgical trajectory and remain completely untouched."
      },
      {
        "q": "What is the post-operative recovery timeline for Zygomatic surgery?",
        "a": "Mild to moderate facial swelling and bruising around the cheeks is normal for 4 to 6 days. Most international patients feel comfortable exploring Istanbul by day 3, managed with prescribed analgesics and cold compresses."
      },
      {
        "q": "How are permanent teeth attached after 3 to 6 months?",
        "a": "Once the zygomatic implants achieve complete osseointegration with the cheekbone, high-precision 3D intraoral scans capture the soft tissue contours. A 1200+ MPa monolithic multilayer German zirconia bridge on a custom titanium substructure is fabricated and permanently screwed into place."
      },
      {
        "q": "Can Zygomatic Implants fail or loosen?",
        "a": "Zygomatic bone possesses the highest bone mineral density in the craniofacial skeleton. Scientific studies demonstrate a 97.8% long-term survival rate over 20+ years, significantly outperforming conventional implants placed in grafted sinuses."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul to complete 3D CBCT diagnostics, surgery, and immediate placement of your fixed temporary bridge. After 3 to 6 months of healing, you return for a 5-day visit to receive your permanent monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic package?",
        "a": "Our all-inclusive packages cover all zygomatic and conventional implants, surgical operating room fees, anesthesiologist fees, 3D CBCT scans, fixed temporary teeth, permanent zirconia bridge, 5-star hotel accommodations, and private VIP Mercedes airport/clinic transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you use?",
        "a": "We exclusively utilize globally recognized, clinically certified zygomatic systems including Nobel Biocare (NobelZygoma), Straumann Group, Noris Medical, and Southern Implants, each accompanied by an authentic international manufacturer certificate."
      },
      {
        "q": "Why are Zygomatic Implants 60%–70% more affordable in Turkey than the UK or Germany?",
        "a": "Lower clinic operating overheads, competitive laboratory manufacturing costs in Istanbul, and favorable currency exchange rates allow us to provide genuine Swiss and German zygomatic systems at a fraction of Western European clinic prices without compromising surgical quality."
      },
      {
        "q": "What guarantees and manufacturer warranties are provided?",
        "a": "All zygomatic titanium fixtures come with an official Lifetime International Manufacturer Warranty and a medical passport. Master Smile Studio also provides a clinical warranty covering laboratory prosthetics and surgical follow-up."
      },
      {
        "q": "Can I combine Zygomatic surgery with Pterygoid implants?",
        "a": "Yes. For patients with total resorption of the posterior maxilla, our maxillofacial surgeons frequently combine zygomatic fixtures with pterygoid implants anchored into the pterygomaxillary plate for optimal biomechanical cantilever elimination."
      },
      {
        "q": "How do I start the consultation process before traveling from abroad?",
        "a": "Simply send your recent 3D CBCT tomographic scan or panoramic X-ray via WhatsApp. Our chief oral & maxillofacial surgeon will formulate a comprehensive 3D digital surgical treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "tr": {
    "introBadge": "İLERİ CERRAHİ: ELMACIK KEMİĞİ İMPLANT PROTOKOLÜ",
    "introTitle": "İstanbul Zigoma ve Pterigoid İmplant Tedavisi: Aşırı Kemik Erimesinde 24 Saatte Sabit Diş",
    "introLead": "1990’larda Prof. Per-Ingvar Brånemark’ın öncü araştırmalarıyla geliştirilen 30–55 mm titanyum implantlar, ömür boyu erimeyen elmacık (zigoma) kemiğine ve pterigoid kemiğe sabitlenerek 12–18 ay süren ağrılı kemik tozu ameliyatlarına gerek kalmadan 24 saat içinde sabit dişler sağlar.",
    "introP1": "Zigomatik ve pterigoid implantlar, üst çene kemiği tamamen erimiş, sinüs lifting ameliyatları başarısız olmuş veya uzun yıllar damak protez kullanarak kemik desteğini kaybetmiş hastalar için dünyadaki en gelişmiş cerrahi kurtarıcı yöntemdir. Elmacık kemiği insan iskeletinin en yoğun kortikal kemiğidir ve diş kaybıyla asla erimez.",
    "introP2": "3D Tomografi (CBCT) kılavuzluğunda ve tam teşekküllü cerrahi ameliyathanemizde sedasyon veya genel anestezi altında uygulanan zigomatik implantlar 50–65 Ncm gibi muazzam bir tutuculuk sağlar. Bu sayede ameliyattan 24 saat sonra vidalı sabit geçici köprünüz takılır ve 3 ay sonra 1200+ MPa monolitik Alman zirkonyum kalıcı dişlerinize geçilir.",
    "introP3Lead": "Yeterli kemik hacmi bulunan vakalarda ",
    "introP3LinkAll4": "All-on-4 İmplant Tedavisi",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 İmplant Tedavisi",
    "introP3And": " veya ",
    "introP3LinkSinus": "Sinüs Lifting Operasyonlarımızı",
    "introP3Tail": " inceleyebilirsiniz.",
    "candidacyTitle": "Zigomatik ve Pterigoid İmplant İçin Uygun Bir Aday Mısınız?",
    "candidacySubtitle": "Başka diş hekimleri tarafından \"kemik kalmamış, implant yapılamaz\" denildiyse, zigomatik cerrahi kesin çözümünüzdür.",
    "candidacyPoints": [
      {
        "title": "İleri Derecede Üst Çene Kemik Erimesi",
        "desc": "Standart 8–12 mm implantların tutunamayacağı kadar incelmiş jilet kalınlığındaki kemik yapıları."
      },
      {
        "title": "Başarısız Olmuş Sinüs Kemik Greftleri",
        "desc": "Daha önce yapılan sinüs lifting veya blok kemik tozu ameliyatları erimiş ya da enfekte olmuş hastalar."
      },
      {
        "title": "Uzun Yıllar Damak Protez Kullanımı",
        "desc": "Protez baskısı kemiği tamamen erittiğinde elmacık kemiği tutunması sabit çiğneme gücünü geri kazandırır."
      },
      {
        "title": "Kist, Tümör veya Travma Sonrası Vakalar",
        "desc": "Tümör cerrahisi veya ileri çene travması sonrası üst çene rekonstrüksiyonu gereken hastalar."
      }
    ],
    "compareTitle": "Objektif Klinik Karşılaştırma: Quad Zigoma vs. Hibrit Zigoma vs. Kemik Grefti",
    "compareSubtitle": "Aşırı üst çene kemik erimesi vakalarında tedavi süreleri, cerrahi riskler ve kemik erime oranlarının bilimsel analizi.",
    "compareTableHeaders": {
      "criteria": "Klinik Parametre",
      "grafting": "İleri Sinüs Lifting & Kemik Grefti",
      "hybrid": "Hibrit Zigoma (2 Zigoma + 2-4 Std)",
      "quad": "Quad Zigoma (4 Zigoma İmplantı) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Kemik Tozu / Greft İhtiyacı",
        "grafting": "İleri derece blok greft & sinüs cerrahisi",
        "hybrid": "%0 Greft (Elmacık kemiği tutunması)",
        "quad": "%0 Greft (Tamamen greftsiz bypass)"
      },
      {
        "criteria": "Toplam Tedavi Süresi",
        "grafting": "12 – 18 ay toplam bekleme",
        "hybrid": "24–48 saatte sabit diş (3 ayda kalıcı)",
        "quad": "24–48 saatte sabit diş (3 ayda kalıcı)"
      },
      {
        "criteria": "Cerrahi Operasyon Sayısı",
        "grafting": "1.5 yılda 2–4 ayrı cerrahi operasyon",
        "hybrid": "Tek cerrahi seans (Sedasyon/Genel Anestezi)",
        "quad": "Tek cerrahi seans (Sedasyon/Genel Anestezi)"
      },
      {
        "criteria": "Dişsiz / Damakla Geçen Süre",
        "grafting": "12–18 ay oynayan damak kullanımı",
        "hybrid": "0 Gün (24 saatte vidalı sabit köprü)",
        "quad": "0 Gün (24 saatte vidalı sabit köprü)"
      },
      {
        "criteria": "Primer Tutuculuk Gücü (Tork)",
        "grafting": "Düşük - Orta (15–25 Ncm)",
        "hybrid": "Çok Yüksek (45–60 Ncm)",
        "quad": "Ultra Yüksek (Elmacık kemiğinde 50–65 Ncm)"
      },
      {
        "criteria": "Greft Erimesi ve Başarısızlık Riski",
        "grafting": "Yüksek (Eklenen greftin %40ı eriyebilir)",
        "hybrid": "Son derece düşük (15 yılda <%2)",
        "quad": "Son derece düşük (20 yılda <%2.2)"
      },
      {
        "criteria": "İdeal Hasta Endikasyonu",
        "grafting": "Lokal kemik kaybı olan genç vakalar",
        "hybrid": "Arka kemiği erimiş, ön kemiği sağlam vaka",
        "quad": "Üst çene kemiği tamamen yok olmuş vaka"
      }
    ],
    "compareDecision": {
      "whenGraftingTitle": "Kemik Grefti ve Sinüs Lifting Ne Zaman Uygulanabilir?",
      "whenGraftingText": "Yalnızca lokal kemik kaybı olan ve grefti taşıyabilecek en az 4–5 mm doğal kemik tabakası bulunan genç hastalarda tercih edilebilir.",
      "whenZygomaticTitle": "Zigomatik İmplant Ne Zaman Tek Çözümdür?",
      "whenZygomaticText": "Üst çenede kemik tamamen sıfırlandığında, daha önce yapılan kemik tozları eridiğinde veya hastanın 18 ay dişsiz beklemeye tahammülü olmadığında zigoma tartışmasız tek seçenektir."
    },
    "processTitle": "3 Aşamalı Hassas Zigoma Protokolü: 3D Tomografiden Monolitik Zirkonyuma",
    "processSubtitle": "Master Smile Studio’da her zigomatik implant %98 uzun dönem başarı için bilgisayarlı kraniyofasiyal cerrahi kılavuzla uygulanır.",
    "processCards": [
      {
        "step": "AŞAMA 01",
        "title": "3D Tomografi & Sanal Kraniyofasiyal Kılavuz",
        "text": "Yüksek çözünürlüklü tomografi ile elmacık kemiği yoğunluğu, sinüs anatomisi ve göz çukuru sınırları taranır. Özel cerrahi kılavuzla implant açısı milimetrik planlanır.",
        "specs": [
          {
            "key": "CBCT Hassasiyeti",
            "val": "< 0.1 mm netlik"
          },
          {
            "key": "Anatomi Analizi",
            "val": "Zigoma Kemiği & Orbita"
          },
          {
            "key": "Kılavuz Sistemi",
            "val": "Kraniyofasiyal Cerrahi Stent"
          }
        ]
      },
      {
        "step": "AŞAMA 02",
        "title": "Elmacık Kemiğine Sabitleme ve 24 Saatte Sabit Diş (1. Gün)",
        "text": "Sedasyon veya genel anestezi altında 30–55 mm implantlar elmacık kemiğine 50–65 Ncm torkla sabitlenir. 24 saat içinde vidalı sabit geçici köprünüz takılır.",
        "specs": [
          {
            "key": "Anestezi",
            "val": "Bilinçli Sedasyon / Genel Anestezi"
          },
          {
            "key": "Sıkma Torku",
            "val": "50 – 65 Ncm (Ultra Tutucu)"
          },
          {
            "key": "Geçici Köprü",
            "val": "24 Saatte Vidalı Sabit"
          }
        ]
      },
      {
        "step": "AŞAMA 03",
        "title": "5 Eksenli CAD/CAM Monolitik Zirkonyum Kalıcı Köprü",
        "text": "3-6 aylık tam kemik kaynamasının ardından 3D dijital ağız içi tarama yapılır. 1200+ MPa monolitik çok katmanlı Alman zirkonyum köprü robotik olarak üretilir.",
        "specs": [
          {
            "key": "Bükülme Gücü",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Malzeme",
            "val": "%100 Çok Katmanlı Alman Zirkonyum"
          },
          {
            "key": "Altyapı",
            "val": "Özel Titanyum Platform"
          }
        ]
      }
    ],
    "materialsTitle": "Zigomatik Köprü Malzemeleri: Neden Monolitik Zirkonyum?",
    "materialsSubtitle": "Zigomatik restorasyonlarda yüksek çiğneme kuvvetlerine karşı elmacık kemiğini ve implantları korumak için maksimum direnç gereklidir.",
    "materialsSpecLabels": {
      "material": "Malzeme Yapısı",
      "strength": "Bükülme Direnci",
      "chipping": "Kırılma / Atma Riski",
      "lifespan": "Klinik Ömür"
    },
    "materialsCards": [
      {
        "title": "Monolitik Çok Katmanlı Zirkonyum",
        "sub": "Özel Titanyum Altyapı Üzerine %100 Masif Alman Zirkonyum",
        "badge": "Klinik Standartımız",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Masif Çok Katmanlı Zirkonyum",
        "strength": "1200 – 1400 MPa (Kırılmaz Masif)",
        "chippingRisk": "%0 (Porselen atma riski sıfır)",
        "lifespan": "Ömür Boyu Dayanıklılık",
        "features": [
          {
            "text": "Sınırsız çiğneme gücü: 600+ Newton çiğneme baskısına tam direnç",
            "status": "good"
          },
          {
            "text": "Gözeneksiz yüzey bakteri tutunmasını ve enfeksiyon riskini önler",
            "status": "good"
          },
          {
            "text": "Özel titanyum altyapı implantlar arası mikro esnemeyi engeller",
            "status": "good"
          },
          {
            "text": "Doğal diş minesini taklit eden çok katmanlı ışık geçirgenliği",
            "status": "good"
          }
        ]
      },
      {
        "title": "Titanyum Barlı Akrilik Hibrit Protez",
        "sub": "Metal Döküm Bar Üzerine Akrilik Reçine ve Plastik Dişler",
        "badge": "Ekonomik Seçenek",
        "isGold": false,
        "material": "PMMA Akrilik Reçine + Titanyum Bar",
        "strength": "80 – 120 MPa (Düşük)",
        "chippingRisk": "Yüksek (Plastik dişler düşebilir veya aşınır)",
        "lifespan": "3 – 7 Yıl",
        "features": [
          {
            "text": "Daha düşük başlangıç üretim maliyeti",
            "status": "good"
          },
          {
            "text": "Plastik dişler çiğnemeyle aşınır ve çene kapanışı bozulur",
            "status": "bad"
          },
          {
            "text": "Akrilik gözeneklidir; leke, koku ve bakteri biriktirir",
            "status": "bad"
          },
          {
            "text": "Düzenli bakım, astar yenileme ve 5 yılda değişim gerektirir",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Metal Destekli Porselen (PFM)",
        "sub": "Kobalt-Krom Metal Altyapı Üzerine Pişirilmiş Porselen",
        "badge": "Eski Standart",
        "isGold": false,
        "material": "Kobalt-Krom Metal + Feldspatik Porselen",
        "strength": "350 – 450 MPa (Orta)",
        "chippingRisk": "Orta - Yüksek (Porselenin metalden ayrılması)",
        "lifespan": "8 – 12 Yıl",
        "features": [
          {
            "text": "Rijit metal altyapı desteği",
            "status": "good"
          },
          {
            "text": "Zigoma çiğneme baskısında porselen katman kırılabilir",
            "status": "bad"
          },
          {
            "text": "Diş eti çekildiğinde siyah metal kenar yansıması yapar",
            "status": "bad"
          },
          {
            "text": "Ağır yapısı nedeniyle ağızda yabancı cisim hissi yaratır",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Karşılaştırma Kriteri",
      "zirconia": "Monolitik Zirkonyum ⭐",
      "acrylic": "Akrilik Hibrit (PMMA)",
      "pfm": "Metal Destekli Porselen (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Bükülme Direnci",
        "zirconia": "1200 – 1400 MPa (Kırılmaz)",
        "acrylic": "80 – 120 MPa (Zayıf)",
        "pfm": "350 – 450 MPa (Orta)"
      },
      {
        "criteria": "Porselen Atma / Kırılma Riski",
        "zirconia": "%0 (Masif homojen blok)",
        "acrylic": "Yüksek (Dişler kopabilir/aşınır)",
        "pfm": "Yüksek (Porselen metalden ayrılır)"
      },
      {
        "criteria": "Hijyen ve Koku Direnci",
        "zirconia": "%100 Gözeneksiz (Sıfır koku/leke)",
        "acrylic": "Gözenekli (Koku ve bakteri çeker)",
        "pfm": "Orta (Metal sınırında plak birikir)"
      },
      {
        "criteria": "Robotik CAD/CAM Üretim",
        "zirconia": "5 eksenli mikrometrik hassasiyet (< 5 µm)",
        "acrylic": "Manuel presleme ve el işçiliği",
        "pfm": "Manuel döküm ve fırınlama"
      },
      {
        "criteria": "Zigoma Vakalarına Uygunluk",
        "zirconia": "%100 Tavsiye Edilir (Maksimum rijitlik)",
        "acrylic": "Sadece geçici kullanım için uygundur",
        "pfm": "Tavsiye Edilmez (Kırılma riski yüksek)"
      },
      {
        "criteria": "Beklenen Klinik Ömür",
        "zirconia": "Ömür Boyu Garanti",
        "acrylic": "3 – 7 Yıl",
        "pfm": "8 – 12 Yıl"
      }
    ],
    "packagesTitle": "Zigomatik İmplant Paketleri ve Para Birimi Seçicisi",
    "packagesSubtitle": "Nobel Biocare, Straumann ve özel zigoma sistemleri dahil ameliyathane ve anestezi dahil şeffaf paketler.",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket Kapsamı:",
    "pricePerArchLabel": "Üst Çene Fiyatı (Her Şey Dahil):",
    "getQuoteBtn": "Ücretsiz Teklif Alın",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "packages": [
      {
        "name": "Hibrit Zigoma Paketi",
        "brand": "Nobel Biocare / Straumann (2 Zigoma + 2-4 Standart İmplant)",
        "duration": "İstanbul’da 5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Elmacık kemiğine sabitlenen Zigomatik titanyum implant",
          "2-4x Ön bölge standart titanyum dental implant",
          "Tam teşekküllü ameliyathane ve Anestezi Uzmanı takibi",
          "Bilinçli IV Sedasyon / Genel Anestezi dahil",
          "24 Saatte vidalı sabit geçici tam çene köprüsü",
          "Kalıcı CAD/CAM Monolitik Zirkonyum Tam Çene Köprüsü",
          "3D Tomografi (CBCT) ve Cerrahi Kılavuz Planlaması",
          "5 Yıldızlı Lüks Otel ve VIP Mercedes Transferleri dahil"
        ]
      },
      {
        "name": "Quad Zigoma Master Paketi",
        "brand": "NobelZygoma by Nobel Biocare (4 Zigomatik İmplant)",
        "duration": "İstanbul’da 5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "popular": true,
        "price": {
          "EUR": "€9,900",
          "GBP": "£8,500",
          "USD": "$10,900"
        },
        "included": [
          "4x NobelZygoma özel titanyum implant (Her elmacık kemiğine 2 adet)",
          "Üst çenede kemiğin sıfır olduğu vakalar için kesin kurtarma çözümü",
          "Hastane cerrahi ünitesi ve Anestezi ekibi dahil",
          "Bilinçli IV Sedasyon veya Genel Anestezi dahil",
          "Aynı gün vidalı sabit geçici tam çene protezi",
          "1200+ MPa Monolitik Çok Katmanlı Alman Zirkonyum Köprü",
          "Ömür Boyu Küresel Nobel Biocare Pasaportu ve Garantisi",
          "Lüks 5 Yıldızlı Otel ve Özel Şoförlü VIP Transfer"
        ]
      },
      {
        "name": "Straumann BLX + Zigoma Hibrit",
        "brand": "Straumann Group (İsviçre Roxolid & SLActive Yüzey)",
        "duration": "İstanbul’da 5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,500",
          "GBP": "£7,300",
          "USD": "$9,350"
        },
        "included": [
          "2x Özel Zigomatik İmplant + 4x Straumann BLX İmplant",
          "Hızlı kemik kaynaması sağlayan hidrofilik SLActive yüzey",
          "Tam ameliyathane ve anestezi yönetimi dahil",
          "24 saatte takılan estetik vidalı geçici sabit dişler",
          "Kişiye özel Monolitik Zirkonyum Kalıcı Tam Çene Köprü",
          "3D Tomografi ve Sanal Kraniyofasiyal Cerrahi Rehber",
          "Ömür Boyu Uluslararası Straumann Garantisi ve Pasaportu",
          "VIP Mercedes Transferleri ve 5 Yıldızlı Otel Dahil"
        ]
      },
      {
        "name": "Noris Medical Zigoma Uzman Paketi",
        "brand": "Noris Medical International (Zigoma & Pterigoid Uzmanı)",
        "duration": "İstanbul’da 5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "2-4x Noris Zygoma özel yivli elmacık kemiği implantı",
          "Kortikal elmacık kemiğinde üstün primer sıkma torku",
          "Tam cerrahi ameliyathane ve sedasyon bakımı",
          "24 saatte takılan sabit vidalı geçici köprü",
          "Kalıcı CAD/CAM Monolitik Zirkonyum Restorasyon",
          "3D Tomografi ve dijital cerrahi navigasyon",
          "Ömür Boyu Üretici Garanti Pasaportu",
          "VIP Havalimanı-Otel Transferleri ve 5 Yıldızlı Otel"
        ]
      },
      {
        "name": "Southern Implants Co-Axis Zigoma",
        "brand": "Southern Implants (55° Açılı Co-Axis Platform)",
        "duration": "İstanbul’da 5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€8,200",
          "GBP": "£7,050",
          "USD": "$9,000"
        },
        "included": [
          "2-4x Southern Implants 55° kendinden açılı Co-Axis implant",
          "Damak bölgesindeki protez kalınlığını sıfıra indiren özel tasarım",
          "Uzman Anestezi Doktoru eşliğinde Genel Anestezi / Sedasyon",
          "Aynı gün sabit estetik geçici akrilik köprü",
          "Kalıcı 1200+ MPa Monolitik Çok Katmanlı Zirkonyum Köprü",
          "3D Tomografi Kılavuzlu Cerrahi ve ilaç paketi",
          "Ömür Boyu Uluslararası Üretici Garantisi",
          "VIP Mercedes Ulaşım ve Lüks 5 Yıldızlı Otel"
        ]
      },
      {
        "name": "Zigoma + Pterigoid İleri Vaka Paketi",
        "brand": "Çoklu Destek Çözümü (2 Zigoma + 2 Pterigoid + 2 Ön İmplant)",
        "duration": "İstanbul’da 5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,650",
          "USD": "$9,800"
        },
        "included": [
          "2x Zigomatik implant + 2x Pterigoid implant + 2x Ön implant",
          "Maksimum çiğneme için arka uzantı geriliminin tamamen sıfırlanması",
          "Ameliyathane ünitesi, Anestezi uzmanı ve sedasyon bakımı",
          "24 saatte takılan sabit vidalı geçici dişler",
          "Tam Çene Monolitik Çok Katmanlı Alman Zirkonyum Köprü",
          "Kapsamlı 3D Kraniyofasiyal Tomografi Haritalaması",
          "Ömür Boyu Küresel Garanti Pasaportu",
          "VIP Mercedes Şoför ve 5 Yıldızlı Lüks Konaklama"
        ]
      }
    ],
    "costTitle": "Uluslararası Maliyet Karşılaştırması: Zigomatik İmplant (İngiltere / Almanya vs İstanbul)",
    "costSubtitle": "Ameliyathane, genel anestezi, geçici köprü ve kalıcı zirkonyum dahil üst çene zigoma tedavisinin reel maliyet karşılaştırması.",
    "costTableHeaders": {
      "country": "Ülke ve Klinik Seviyesi",
      "costPerArch": "Zigoma Maliyeti (Üst Çene)",
      "inclusions": "Paket Kapsamı ve Dahil Olan Hizmetler",
      "valueAdvantage": "Master Smile Studio Avantajı"
    },
    "costTableRows": [
      {
        "country": "İngiltere (Harley Street / Özel Londra Klinikler)",
        "costPerArch": "£18,000 – £26,000 ($23,000 – $33,000)",
        "inclusions": "Yalnızca cerrahi ücreti. Ameliyathane (£2,500), genel anestezi (£1,800), Tomografi (£250) ve geçici diş ayrıca faturalandırılır.",
        "valueAdvantage": "İngiltere Piyasa Tabanı"
      },
      {
        "country": "Almanya / İsviçre (Özel Çene Cerrahisi Klinikleri)",
        "costPerArch": "€16,000 – €24,000 ($17,500 – $26,500)",
        "inclusions": "Cerrah ve implant materyali. Hastane yatağı, anestezi uzmanı, otel ve transferler ayrı kalemler olarak ücretlendirilir.",
        "valueAdvantage": "Almanya Piyasa Tabanı"
      },
      {
        "country": "Master Smile Studio (İstanbul, Türkiye) ⭐",
        "costPerArch": "€6,900 – €12,500 (£5,950 – £10,750)",
        "inclusions": "%100 Her Şey Dahil: Zigoma implantları, hastane ameliyathanesi, anestezi ekibi, 3D Tomografi, geçici sabit köprü, kalıcı zirkonyum köprü, 5 yıldızlı otel ve VIP Mercedes transferleri.",
        "valueAdvantage": "%60 – %70 Net Tasarruf (İsviçre/Alman Orijinal Kalitesi)"
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular: Zigomatik İmplant Tedavisi",
    "faqSubtitle": "Elmacık kemiği tutunması, anestezi, iyileşme süreci ve İstanbul sağlık turizmi hakkında hekim onaylı yanıtlar.",
    "faqGroup1Title": "Klinik ve Cerrahi SSS (Elmacık Kemiği Protokolü)",
    "faqGroup2Title": "Sağlık Turizmi, VIP Hizmetler ve Garanti SSS",
    "faqsPart1": [
      {
        "q": "Zigomatik (Elmacık Kemiği) İmplantı nedir ve nasıl çalışır?",
        "a": "Zigomatik implantlar, üst çenesinde ileri derecede kemik erimesi olan hastalar için geliştirilmiş 30 mm ile 55 mm uzunluğundaki özel titanyum implantlardır. Zayıflamış çene kemiği yerine, insan vücudunda ömür boyu erimeyen en sert kemik dokusu olan elmacık (zigoma) kemiğine sabitlenir."
      },
      {
        "q": "Zigomatik implant kimler için uygundur?",
        "a": "Üst çene kemiği tamamen eridiği için standart implant yapılamayacağı söylenen, sinüs lifting ameliyatları başarısız olmuş, uzun süre damak protez kullanmış veya tümör cerrahisi geçirmiş hastalar için tek cerrahi kurtarıcı çözümdür."
      },
      {
        "q": "Neden kemik tozu ve sinüs lifting yerine zigomatik implant tercih edilmelidir?",
        "a": "İleri kemik tozu ve sinüs lifting ameliyatları 12 ila 18 ay bekleme süresi gerektirir ve erime/tutunamama riski yüksektir. Zigomatik implantlar sinüs boşluğunu bypass ederek greft ihtiyacını sıfırlar ve 24–48 saat içinde sabit diş takılmasına olanak tanır."
      },
      {
        "q": "Hibrit Zigoma ile Quad Zigoma arasındaki fark nedir?",
        "a": "Hibrit Zigoma, arka bölgede 2 adet zigomatik implant ve ön bölgede 2 ila 4 adet standart implantın birleşimidir. Quad Zigoma ise üst çenenin hem önünde hem arkasında hiç kemik kalmadığında her iki elmacık kemiğine 2şer adet (toplam 4 zigomatik implant) yerleştirilmesidir."
      },
      {
        "q": "Zigomatik implant ameliyatı sedasyon veya genel anestezi ile mi yapılır?",
        "a": "Master Smile Studio’da zigomatik implant operasyonları, tam teşekküllü cerrahi ünitemizde anestezi uzmanı eşliğinde bilinçli sedasyon veya genel anestezi altında gerçekleştirilir. Hasta hiçbir ağrı, acı veya cerrahi stres hissetmez."
      },
      {
        "q": "İyileşme sürecinde dişsiz kalacak mıyım?",
        "a": "Asla. Elmacık kemiği 45–65 Ncm üzerinde çok yüksek bir primer tutuculuk sağladığı için, operasyondan 24 ila 48 saat sonra vidalı sabit geçici köprünüz takılır ve çiğneme fonksiyonunuz anında başlar."
      },
      {
        "q": "Sinüs boşluğu veya yüz sinirleri için bir risk var mıdır?",
        "a": "Uzman çene cerrahlarımız tarafından 3D Tomografi (CBCT) kılavuzluğunda uygulandığında başarı oranı %97-%98dir. Yüz mimik sinirleri operasyon hattının çok uzağında yer aldığından hiçbir şekilde etkilenmez."
      },
      {
        "q": "Ameliyat sonrası iyileşme ve ödem süreci nasıldır?",
        "a": "Yanak bölgesinde 4-6 gün süren hafif şişlik ve morarma normaldir. Ağrı kesici ve soğuk kompresle kontrol altına alınır; hastalarımız 3. günden itibaren İstanbulun keyfini rahatlıkla çıkarabilir."
      },
      {
        "q": "3-6 ay sonra kalıcı dişler nasıl takılır?",
        "a": "İmplantların elmacık kemiğiyle tam kaynamasının ardından 3D ağız içi tarama yapılır. 1200+ MPa monolitik çok katmanlı Alman zirkonyum köprünüz 5 eksenli robotik sistemlerle üretilerek vidalı olarak sabitlenir."
      },
      {
        "q": "Zigomatik implantların ömrü ne kadardır?",
        "a": "Elmacık kemiği yüz iskeletinin en yoğun kemiğidir. 20 yılı aşkın bilimsel klinik çalışmalar, zigomatik implantların %97.8 uzun dönem başarı oranına sahip olduğunu kanıtlamıştır."
      }
    ],
    "faqsPart2": [
      {
        "q": "Zigomatik implant tedavisi için İstanbulda kaç gün kalmalıyım?",
        "a": "İlk ziyaretinizde 3D teşhis, cerrahi ve 24 saatte sabit geçici dişinizin takılması için 5-7 gün kalmanız yeterlidir. 3-6 ay sonra kalıcı monolitik zirkonyum dişleriniz için 5 günlük ikinci bir ziyaret gereklidir."
      },
      {
        "q": "Master Smile Studio Zigomatik paketine neler dahildir?",
        "a": "Tüm zigomatik ve standart implantlar, ameliyathane ve anestezi uzmanı ücretleri, 3D Tomografi, geçici sabit dişler, kalıcı zirkonyum köprü, 5 yıldızlı otel konaklaması ve özel VIP Mercedes transferleri dahildir."
      },
      {
        "q": "Hangi zigomatik implant markalarını kullanıyorsunuz?",
        "a": "Yalnızca uluslararası sertifikalı orijinal Nobel Biocare (NobelZygoma), Straumann Group, Noris Medical ve Southern Implants sistemlerini kullanıyor, resmi pasaport ve garanti belgesi teslim ediyoruz."
      },
      {
        "q": "Türkiye’de zigomatik implant fiyatları neden İngiltere ve Almanyaya göre %65 daha uygundur?",
        "a": "İstanbuldaki klinik işletme maliyetleri ve laboratuvar operasyonlarının avantajı sayesinde, Avrupa ve İngilteredeki aynı orijinal İsviçre/Alman zigoma sistemlerini çok daha ulaşılabilir bütçelerle sunabiliyoruz."
      },
      {
        "q": "Garanti koşulları nelerdir?",
        "a": "Tüm zigomatik titanyum gövdeler üretici firma tarafından Ömür Boyu Uluslararası Garanti kapsamındadır. Kliniğimiz protez ve cerrahi takip garantisi sunar."
      },
      {
        "q": "Pterigoid implantlar ile zigoma implantı birlikte uygulanabilir mi?",
        "a": "Evet. Üst çene kemiğinin tamamen yok olduğu vakalarda cerrahlarımız zigoma implantlarını pterigoid implantlarla kombine ederek en güçlü biyomekanik tutuculuğu sağlar."
      },
      {
        "q": "Yurt dışından gelmeden önce tedavi planımı nasıl alabilirim?",
        "a": "Mevcut 3D Tomografi (CBCT) dosyanızı veya panoramik röntgeninizi WhatsApp üzerinden iletmeniz yeterlidir. Baş cerrahımız 24 saat içinde 3D tedavi planınızı ve sabit fiyat teklifinizi hazırlar."
      }
    ]
  },
  "de": {
    "introBadge": "JOCHBEIN-IMPLANTATE BEI KNOCHENSCHWUND",
    "introTitle": "Zygoma- und Pterygoid-Implantate in Istanbul: Feste Zähne bei extremem Knochenabbau",
    "introLead": "Verzichten Sie auf 12–18 Monate schmerzhaften Knochenaufbau: 30–55 mm lange Titanimplantate, verankert im dichten Jochbein, liefern feste Zähne innerhalb von 24 Stunden.",
    "introP1": "Zygomatic and pterygoid dental implants are the ultimate clinical solution for patients suffering from catastrophic maxillary (upper jaw) bone resorption, failed sinus lifts, or decades of loose complete denture wear. Because the zygomatic cheekbone possesses the highest cortical bone density in the craniofacial skeleton and never resorbs with age or tooth loss, our maxillofacial surgeons bypass hollowed maxillary sinuses completely.",
    "introP2": "Using advanced 3D CBCT craniofacial mapping and stereolithographic surgical guides under conscious IV sedation or general anesthesia, we achieve exceptional primary insertion torque values exceeding 50–65 Ncm. This allows safe immediate loading with a rigid screw-retained temporary bridge in 24 hours, followed by a permanent 1200+ MPa monolithic multilayer German zirconia full arch.",
    "introP3Lead": "For patients with localized or moderate residual bone, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkSinus": "Sinus Lifting & Bone Grafting",
    "introP3Tail": " solutions in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zygomatic & Pterygoid Implants?",
    "candidacySubtitle": "If you have been told by other dentists that you \"have no bone left\" for regular implants, zygomatic surgery is your definitive answer.",
    "candidacyPoints": [
      {
        "title": "Severe Upper Jaw Bone Atrophy",
        "desc": "Patients with pencil-thin or razor-sharp upper jaw ridges where traditional 8–12mm implants cannot be anchored."
      },
      {
        "title": "Failed Previous Sinus Bone Grafts",
        "desc": "Patients who underwent sinus lifts or block bone augmentations that failed, resorbed, or became chronically infected."
      },
      {
        "title": "Decades of Complete Denture Wear",
        "desc": "Long-term denture pressure accelerates alveolar bone loss; cheekbone anchoring restores solid fixed bite stability."
      },
      {
        "title": "Post-Trauma or Oncological Resection",
        "desc": "Maxillofacial reconstruction following cyst removal, tumor resection, or major facial trauma."
      }
    ],
    "compareTitle": "Objektiver Klinischer Vergleich: Quad Zygoma vs. Hybrid Zygoma vs. Sinuslift",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Bone Grafting Requirement",
        "grafting": "Extensive block / sinus bone grafts (Hip/bovine)",
        "hybrid": "0% Bone Grafting (Cheekbone anchor)",
        "quad": "0% Bone Grafting (Complete bypass)"
      },
      {
        "criteria": "Total Treatment Duration",
        "grafting": "12 – 18 months total wait",
        "hybrid": "24–48 hours for fixed teeth (Final at 3 Mo)",
        "quad": "24–48 hours for fixed teeth (Final at 3 Mo)"
      },
      {
        "criteria": "Surgical Operating Stages",
        "grafting": "2–4 separate surgeries over 1.5 years",
        "hybrid": "1 single surgery (Sedation/GA)",
        "quad": "1 single surgery (Sedation/GA)"
      },
      {
        "criteria": "Period with Removable Denture",
        "grafting": "12–18 months wearing loose flipper",
        "hybrid": "0 Days (Fixed screw bridge in 24h)",
        "quad": "0 Days (Fixed screw bridge in 24h)"
      },
      {
        "criteria": "Primary Insertion Torque",
        "grafting": "Low to moderate (15–25 Ncm)",
        "hybrid": "Very High (45–60 Ncm)",
        "quad": "Ultra High (50–65 Ncm in dense zygoma)"
      },
      {
        "criteria": "Long-Term Failure & Resorption Risk",
        "grafting": "High (Grafted bone resorbs up to 40%)",
        "hybrid": "Extremely Low (< 2% over 15 years)",
        "quad": "Extremely Low (< 2.2% over 20+ years)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "grafting": "Mild to moderate localized sinus deficit",
        "hybrid": "Severe posterior loss with anterior bone",
        "quad": "Total upper jawbone loss (Razor-thin maxilla)"
      }
    ],
    "compareDecision": {
      "whenGraftingTitle": "When is Complex Sinus Grafting Clinically Feasible?",
      "whenGraftingText": "Sinus grafting is only advisable for patients with localized bone deficits who have at least 4–5mm of native subantral bone to stabilize grafts, without total jawbone atrophy.",
      "whenZygomaticTitle": "When are Zygomatic Implants the Only Viable Solution?",
      "whenZygomaticText": "Zygomatic implants are the definitive gold standard when the upper jaw is completely hollowed out, previous bone grafts have failed, or the patient cannot tolerate 18 months without fixed teeth."
    },
    "processTitle": "3-Phasen-Präzisionsprotokoll: Vom 3D-DVT zur Zirkonbrücke",
    "processSubtitle": "Every zygomatic procedure at Master Smile Studio follows a strict craniofacial surgical protocol for 98% long-term success.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Craniofacial Mapping & Stereolithographic Guided Stent",
        "text": "High-resolution 3D tomography analyzes zygomatic bone density, sinus contours, and orbital margins. A stereolithographic surgical guide determines the exact 3D entry trajectory.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Anatomy Analysis",
            "val": "Zygomatic Arch & Orbit"
          },
          {
            "key": "Guide System",
            "val": "Craniofacial Surgical Stent"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Cheekbone Anchoring & 24h Fixed Temporary Bridge (Day 1)",
        "text": "Under conscious IV sedation or general anesthesia, 30–55mm titanium fixtures are anchored into the cheekbone at 50–65 Ncm. A rigid, screw-retained temporary bridge is fixed in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Ultra Stable)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed Screw-Retained in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "5-Axis CAD/CAM Monolithic Zirconia Final Full Arch",
        "text": "After 3–6 months of flawless osseointegration, 3D intraoral digital scans capture the healed tissue. A 1200+ MPa monolithic multilayer German zirconia bridge is robotically milled.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Material",
            "val": "100% German Multilayer Zirconia"
          },
          {
            "key": "Substructure",
            "val": "Custom Titanium Platform"
          }
        ]
      }
    ],
    "materialsTitle": "Zygoma-Brückenmaterialien: Warum Monolithisches Zirkon gewinnt",
    "materialsSubtitle": "In zygomatic arches, high cantilever forces demand maximum rigidity and fracture resistance to protect the cheekbone fixtures.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Custom Titanium Framework",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic German Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrestricted bite force: easily handles 600+ Newtons of mastication",
            "status": "good"
          },
          {
            "text": "Ultra-smooth non-porous surface prevents plaque & Peri-implantitis",
            "status": "good"
          },
          {
            "text": "Custom titanium substructure eliminates micro-flexing across implants",
            "status": "good"
          },
          {
            "text": "Natural multi-layer light translucency matching adjacent features",
            "status": "good"
          }
        ]
      },
      {
        "title": "Titanium-Bar Acrylic Hybrid",
        "sub": "Cast Metal Substructure with Acrylic Resin & Plastic Teeth",
        "badge": "Economy Alternative",
        "isGold": false,
        "material": "PMMA Acrylic Resin + Cast Titanium Bar",
        "strength": "80 – 120 MPa (Low)",
        "chippingRisk": "High (Plastic teeth pop off or wear down)",
        "lifespan": "3 – 7 Years",
        "features": [
          {
            "text": "Lower initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Abrasive wear flattens teeth, shifting jaw alignment",
            "status": "bad"
          },
          {
            "text": "Porcelain/acrylic resin absorbs stains, odors, and bacteria",
            "status": "bad"
          },
          {
            "text": "Requires frequent maintenance, relining, and total replacement",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Cast Cobalt-Chromium Frame with Baked Porcelain",
        "badge": "Legacy Standard",
        "isGold": false,
        "material": "Cast Cobalt-Chromium Alloy + Feldspathic Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "Moderate to High (Porcelain delamination risk)",
        "lifespan": "8 – 12 Years",
        "features": [
          {
            "text": "Rigid metal substructure",
            "status": "good"
          },
          {
            "text": "Porcelain prone to fractures under heavy zygomatic bite forces",
            "status": "bad"
          },
          {
            "text": "Dark grey metal margin shows over time if gums recede",
            "status": "bad"
          },
          {
            "text": "Heavy bulk creates an uncomfortable foreign-body sensation",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "acrylic": "Acrylic Hybrid (PMMA)",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "acrylic": "80 – 120 MPa (Fragile)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Chipping & Breakage Risk",
        "zirconia": "0% (Solid homogeneous block)",
        "acrylic": "High (Teeth detach or fracture)",
        "pfm": "High (Porcelain chips off metal)"
      },
      {
        "criteria": "Hygiene & Odor Resistance",
        "zirconia": "100% Non-porous (Zero odor/stains)",
        "acrylic": "Porrosive (Absorbs bacteria & odor)",
        "pfm": "Moderate (Plaque traps at metal line)"
      },
      {
        "criteria": "Digital CAD/CAM Robotic Milling",
        "zirconia": "5-axis robotic precision (< 5 µm)",
        "acrylic": "Manual flasking & pressing",
        "pfm": "Manual casting and hand-layering"
      },
      {
        "criteria": "Suitability for Zygomatic Arches",
        "zirconia": "100% Recommended (Maximum stability)",
        "acrylic": "Temporary use only (High flex)",
        "pfm": "Not Recommended (Chipping risk)"
      },
      {
        "criteria": "Expected Clinical Longevity",
        "zirconia": "Lifetime Guarantee",
        "acrylic": "3 – 7 Years",
        "pfm": "8 – 12 Years"
      }
    ],
    "packagesTitle": "Zygoma-Implantat-Pakete & Währungsrechner",
    "packagesSubtitle": "All-inclusive packages per upper jaw with certified Nobel Biocare, Straumann, and specialized zygomatic systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Upper Jaw (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extended Zygomatic titanium implants in cheekbone",
          "2-4x Conventional anterior titanium dental implants",
          "Operating room fees & Specialist Anesthesiologist care",
          "Conscious IV Sedation / General Anesthesia included",
          "24-Hour fixed screw-retained temporary full-arch bridge",
          "Permanent CAD/CAM Monolithic Zirconia Full-Arch Bridge",
          "3D CBCT Craniofacial Tomography & Surgical Guide",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Quad Zygomatic Master Package",
        "brand": "NobelZygoma by Nobel Biocare (4 Extended Zygomatic Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "popular": true,
        "price": {
          "EUR": "€9,900",
          "GBP": "£8,500",
          "USD": "$10,900"
        },
        "included": [
          "4x NobelZygoma extra-long titanium implants (2 per cheekbone)",
          "Complete rescue for zero-bone razor-thin upper jaws",
          "Hospital surgical suite & Anesthesiology team included",
          "Conscious IV Sedation / General Anesthesia included",
          "Same-day fixed screw-retained acrylic temporary bridge",
          "1200+ MPa Monolithic Multilayer German Zirconia Bridge",
          "Lifetime Global Nobel Biocare Warranty & Passport",
          "Luxury 5-Star Hotel Partner & VIP Private Chauffeur"
        ]
      },
      {
        "name": "Straumann BLX + Zygoma Hybrid",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,500",
          "GBP": "£7,300",
          "USD": "$9,350"
        },
        "included": [
          "2x Specialized Zygomatic Implants + 4x Straumann BLX Fixtures",
          "Hydrophilic SLActive surface for ultra-fast bone integration",
          "Full surgical theatre & Anesthesia administration",
          "Fixed aesthetic screw-retained temporary teeth in 24h",
          "Bespoke Monolithic Zirconia Full-Arch Permanent Bridge",
          "3D CBCT Diagnostic Planning & Stereolithographic Stent",
          "Lifetime International Straumann Guarantee & Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Stay included"
        ]
      },
      {
        "name": "Noris Medical Zygoma Specialized",
        "brand": "Noris Medical International (Zygomatic & Pterygoid Specialists)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "2-4x Noris Zygomatic machined-collar implants",
          "High insertion torque stability in cortical cheekbone",
          "Complete hospital surgical unit & sedation care",
          "Immediate screw-retained temporary bridge in 24 hours",
          "Permanent CAD/CAM Monolithic Zirconia Restoration",
          "3D CBCT Tomography & virtual surgical navigation",
          "Lifetime Manufacturer Warranty Passport",
          "VIP Airport-Hotel-Clinic Transfers & 5-Star Hotel"
        ]
      },
      {
        "name": "Southern Implants Co-Axis Zygoma",
        "brand": "Southern Implants (55° Angled Co-Axis Platform)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€8,200",
          "GBP": "£7,050",
          "USD": "$9,000"
        },
        "included": [
          "2-4x Southern Implants Co-Axis with built-in 55° correction",
          "Eliminates bulky prosthetic palatal profile in the mouth",
          "General Anesthesia / IV Sedation with specialist MD",
          "Same-day fixed aesthetic temporary acrylic bridge",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "3D CBCT Guided Surgery & post-op medication pack",
          "Lifetime International Manufacturer Warranty",
          "VIP Private Mercedes Transport & Luxury 5-Star Hotel"
        ]
      },
      {
        "name": "Zygoma + Pterygoid Extreme Arch",
        "brand": "Multi-Anchor Solution (2 Zygoma + 2 Pterygoid + 2 Anterior)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,650",
          "USD": "$9,800"
        },
        "included": [
          "2x Zygomatic implants + 2x Pterygoid implants + 2x Anterior",
          "Total elimination of posterior cantilever for maximum chewing",
          "Hospital surgical suite, Anesthesiologist & sedation care",
          "Fixed screw-retained temporary teeth in 24 hours",
          "Full-Arch Monolithic German Zirconia Permanent Bridge",
          "Comprehensive 3D CBCT Craniofacial Mapping",
          "Lifetime Global Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Luxury Accommodations"
        ]
      }
    ],
    "costTitle": "Internationaler Kostenvergleich: Zygoma-Implantate (UK / Deutschland vs. Istanbul)",
    "costSubtitle": "Compare real clinical costs per full upper jaw including surgical theatre, general anesthesia, temporary bridge, and permanent monolithic zirconia.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Zygomatic Cost (Upper Jaw)",
      "inclusions": "Package Coverage & Hospital Services",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£18,000 – £26,000 ($23,000 – $33,000)",
        "inclusions": "Surgical fees only. Hospital operating room (£2,500), general anesthesia (£1,800), CBCT (£250), and temporary teeth billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Maxillofacial Clinics)",
        "costPerArch": "€16,000 – €24,000 ($17,500 – $26,500)",
        "inclusions": "Surgeon and implant hardware. Hospital bed, anesthesiologist, hotel stay, and transfers billed as separate line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €12,500 (£5,950 – £10,750)",
        "inclusions": "100% All-Inclusive: Zygomatic implants, hospital surgical unit, anesthesia team, 3D CBCT, fixed temporary bridge, permanent zirconia bridge, 5-star hotel & VIP Mercedes transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Häufig gestellte Fragen: Zygoma-Implantate",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, anesthesia, surgical recovery, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical FAQ (Craniofacial Cheekbone Anchoring)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zygomatic Dental Implants and how do they work?",
        "a": "Zygomatic implants are extended titanium fixtures (30mm to 55mm long) specifically engineered for patients with severe upper jawbone resorption. Instead of placing implants into the thin alveolar ridge, they are anchored directly into the dense, cortical bone of the zygomatic arch (cheekbone), which never resorbs over time."
      },
      {
        "q": "Who is an ideal candidate for Zygomatic Implants?",
        "a": "Ideal candidates are patients with severe bone loss in the upper jaw who have been told they cannot have standard dental implants, those who have suffered failed sinus bone grafts, long-term complete denture wearers with razor-thin ridges, or patients following oncological maxillary resection."
      },
      {
        "q": "Why are Zygomatic Implants superior to complex sinus bone grafting?",
        "a": "Extensive sinus lifting and iliac crest bone grafting require 12 to 18 months of healing with high failure and resorption rates. Zygomatic implants bypass the maxillary sinus completely, eliminating bone graft surgery and allowing same-day fixed teeth in 24 to 48 hours."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma combines 2 zygomatic implants in the posterior cheekbones with 2 to 4 conventional implants in the anterior upper jaw. Quad Zygoma uses 4 zygomatic implants (2 on each cheekbone) when there is total bone loss in both the front and back of the upper jaw."
      },
      {
        "q": "Is Zygomatic implant surgery performed under general anesthesia or sedation?",
        "a": "At Master Smile Studio, zygomatic implant surgeries are performed under conscious IV sedation or general anesthesia in our surgical operating suites, administered by a specialist anesthesiologist for complete comfort, zero pain, and zero surgical anxiety."
      },
      {
        "q": "Will I be left without teeth during the healing period?",
        "a": "Never. Because the cheekbone provides exceptionally high initial insertion torque (>45–65 Ncm), a rigid, screw-retained fixed temporary acrylic/PMMA bridge is securely attached within 24 to 48 hours after surgery."
      },
      {
        "q": "What are the risks to the maxillary sinus or facial nerves?",
        "a": "When performed by skilled maxillofacial surgeons using 3D CBCT navigation and extra-sinus surgical protocols, zygomatic implants have a 97–98% success rate. The facial motor nerves are located far superficial to the surgical trajectory and remain completely untouched."
      },
      {
        "q": "What is the post-operative recovery timeline for Zygomatic surgery?",
        "a": "Mild to moderate facial swelling and bruising around the cheeks is normal for 4 to 6 days. Most international patients feel comfortable exploring Istanbul by day 3, managed with prescribed analgesics and cold compresses."
      },
      {
        "q": "How are permanent teeth attached after 3 to 6 months?",
        "a": "Once the zygomatic implants achieve complete osseointegration with the cheekbone, high-precision 3D intraoral scans capture the soft tissue contours. A 1200+ MPa monolithic multilayer German zirconia bridge on a custom titanium substructure is fabricated and permanently screwed into place."
      },
      {
        "q": "Can Zygomatic Implants fail or loosen?",
        "a": "Zygomatic bone possesses the highest bone mineral density in the craniofacial skeleton. Scientific studies demonstrate a 97.8% long-term survival rate over 20+ years, significantly outperforming conventional implants placed in grafted sinuses."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul to complete 3D CBCT diagnostics, surgery, and immediate placement of your fixed temporary bridge. After 3 to 6 months of healing, you return for a 5-day visit to receive your permanent monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic package?",
        "a": "Our all-inclusive packages cover all zygomatic and conventional implants, surgical operating room fees, anesthesiologist fees, 3D CBCT scans, fixed temporary teeth, permanent zirconia bridge, 5-star hotel accommodations, and private VIP Mercedes airport/clinic transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you use?",
        "a": "We exclusively utilize globally recognized, clinically certified zygomatic systems including Nobel Biocare (NobelZygoma), Straumann Group, Noris Medical, and Southern Implants, each accompanied by an authentic international manufacturer certificate."
      },
      {
        "q": "Why are Zygomatic Implants 60%–70% more affordable in Turkey than the UK or Germany?",
        "a": "Lower clinic operating overheads, competitive laboratory manufacturing costs in Istanbul, and favorable currency exchange rates allow us to provide genuine Swiss and German zygomatic systems at a fraction of Western European clinic prices without compromising surgical quality."
      },
      {
        "q": "What guarantees and manufacturer warranties are provided?",
        "a": "All zygomatic titanium fixtures come with an official Lifetime International Manufacturer Warranty and a medical passport. Master Smile Studio also provides a clinical warranty covering laboratory prosthetics and surgical follow-up."
      },
      {
        "q": "Can I combine Zygomatic surgery with Pterygoid implants?",
        "a": "Yes. For patients with total resorption of the posterior maxilla, our maxillofacial surgeons frequently combine zygomatic fixtures with pterygoid implants anchored into the pterygomaxillary plate for optimal biomechanical cantilever elimination."
      },
      {
        "q": "How do I start the consultation process before traveling from abroad?",
        "a": "Simply send your recent 3D CBCT tomographic scan or panoramic X-ray via WhatsApp. Our chief oral & maxillofacial surgeon will formulate a comprehensive 3D digital surgical treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "pl": {
    "introBadge": "IMPLANTY JARZMOWE PRZY BRAKU KOŚCI",
    "introTitle": "Implanty Zygomatyczne i Skrzydłowe w Stambule: Stałe Zęby w 24h",
    "introLead": "Koniec z wielomiesięcznymi przeszczepami kości: Specjalne implanty 30–55 mm kotwiczone w kości jarzmowej zapewniają stałe zęby w 24 godziny.",
    "introP1": "Zygomatic and pterygoid dental implants are the ultimate clinical solution for patients suffering from catastrophic maxillary (upper jaw) bone resorption, failed sinus lifts, or decades of loose complete denture wear. Because the zygomatic cheekbone possesses the highest cortical bone density in the craniofacial skeleton and never resorbs with age or tooth loss, our maxillofacial surgeons bypass hollowed maxillary sinuses completely.",
    "introP2": "Using advanced 3D CBCT craniofacial mapping and stereolithographic surgical guides under conscious IV sedation or general anesthesia, we achieve exceptional primary insertion torque values exceeding 50–65 Ncm. This allows safe immediate loading with a rigid screw-retained temporary bridge in 24 hours, followed by a permanent 1200+ MPa monolithic multilayer German zirconia full arch.",
    "introP3Lead": "For patients with localized or moderate residual bone, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkSinus": "Sinus Lifting & Bone Grafting",
    "introP3Tail": " solutions in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zygomatic & Pterygoid Implants?",
    "candidacySubtitle": "If you have been told by other dentists that you \"have no bone left\" for regular implants, zygomatic surgery is your definitive answer.",
    "candidacyPoints": [
      {
        "title": "Severe Upper Jaw Bone Atrophy",
        "desc": "Patients with pencil-thin or razor-sharp upper jaw ridges where traditional 8–12mm implants cannot be anchored."
      },
      {
        "title": "Failed Previous Sinus Bone Grafts",
        "desc": "Patients who underwent sinus lifts or block bone augmentations that failed, resorbed, or became chronically infected."
      },
      {
        "title": "Decades of Complete Denture Wear",
        "desc": "Long-term denture pressure accelerates alveolar bone loss; cheekbone anchoring restores solid fixed bite stability."
      },
      {
        "title": "Post-Trauma or Oncological Resection",
        "desc": "Maxillofacial reconstruction following cyst removal, tumor resection, or major facial trauma."
      }
    ],
    "compareTitle": "Obiektywne Porównanie: Quad Zygoma vs. Hybrid Zygoma vs. Sinus Lift",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Bone Grafting Requirement",
        "grafting": "Extensive block / sinus bone grafts (Hip/bovine)",
        "hybrid": "0% Bone Grafting (Cheekbone anchor)",
        "quad": "0% Bone Grafting (Complete bypass)"
      },
      {
        "criteria": "Total Treatment Duration",
        "grafting": "12 – 18 months total wait",
        "hybrid": "24–48 hours for fixed teeth (Final at 3 Mo)",
        "quad": "24–48 hours for fixed teeth (Final at 3 Mo)"
      },
      {
        "criteria": "Surgical Operating Stages",
        "grafting": "2–4 separate surgeries over 1.5 years",
        "hybrid": "1 single surgery (Sedation/GA)",
        "quad": "1 single surgery (Sedation/GA)"
      },
      {
        "criteria": "Period with Removable Denture",
        "grafting": "12–18 months wearing loose flipper",
        "hybrid": "0 Days (Fixed screw bridge in 24h)",
        "quad": "0 Days (Fixed screw bridge in 24h)"
      },
      {
        "criteria": "Primary Insertion Torque",
        "grafting": "Low to moderate (15–25 Ncm)",
        "hybrid": "Very High (45–60 Ncm)",
        "quad": "Ultra High (50–65 Ncm in dense zygoma)"
      },
      {
        "criteria": "Long-Term Failure & Resorption Risk",
        "grafting": "High (Grafted bone resorbs up to 40%)",
        "hybrid": "Extremely Low (< 2% over 15 years)",
        "quad": "Extremely Low (< 2.2% over 20+ years)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "grafting": "Mild to moderate localized sinus deficit",
        "hybrid": "Severe posterior loss with anterior bone",
        "quad": "Total upper jawbone loss (Razor-thin maxilla)"
      }
    ],
    "compareDecision": {
      "whenGraftingTitle": "When is Complex Sinus Grafting Clinically Feasible?",
      "whenGraftingText": "Sinus grafting is only advisable for patients with localized bone deficits who have at least 4–5mm of native subantral bone to stabilize grafts, without total jawbone atrophy.",
      "whenZygomaticTitle": "When are Zygomatic Implants the Only Viable Solution?",
      "whenZygomaticText": "Zygomatic implants are the definitive gold standard when the upper jaw is completely hollowed out, previous bone grafts have failed, or the patient cannot tolerate 18 months without fixed teeth."
    },
    "processTitle": "3-Etapowy Protokół Zygoma: Od Tomografii 3D do Cyrkonu",
    "processSubtitle": "Every zygomatic procedure at Master Smile Studio follows a strict craniofacial surgical protocol for 98% long-term success.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Craniofacial Mapping & Stereolithographic Guided Stent",
        "text": "High-resolution 3D tomography analyzes zygomatic bone density, sinus contours, and orbital margins. A stereolithographic surgical guide determines the exact 3D entry trajectory.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Anatomy Analysis",
            "val": "Zygomatic Arch & Orbit"
          },
          {
            "key": "Guide System",
            "val": "Craniofacial Surgical Stent"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Cheekbone Anchoring & 24h Fixed Temporary Bridge (Day 1)",
        "text": "Under conscious IV sedation or general anesthesia, 30–55mm titanium fixtures are anchored into the cheekbone at 50–65 Ncm. A rigid, screw-retained temporary bridge is fixed in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Ultra Stable)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed Screw-Retained in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "5-Axis CAD/CAM Monolithic Zirconia Final Full Arch",
        "text": "After 3–6 months of flawless osseointegration, 3D intraoral digital scans capture the healed tissue. A 1200+ MPa monolithic multilayer German zirconia bridge is robotically milled.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Material",
            "val": "100% German Multilayer Zirconia"
          },
          {
            "key": "Substructure",
            "val": "Custom Titanium Platform"
          }
        ]
      }
    ],
    "materialsTitle": "Materiały Mostów Zygomatycznych: Dlaczego Monolityczny Cyrkon",
    "materialsSubtitle": "In zygomatic arches, high cantilever forces demand maximum rigidity and fracture resistance to protect the cheekbone fixtures.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Custom Titanium Framework",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic German Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrestricted bite force: easily handles 600+ Newtons of mastication",
            "status": "good"
          },
          {
            "text": "Ultra-smooth non-porous surface prevents plaque & Peri-implantitis",
            "status": "good"
          },
          {
            "text": "Custom titanium substructure eliminates micro-flexing across implants",
            "status": "good"
          },
          {
            "text": "Natural multi-layer light translucency matching adjacent features",
            "status": "good"
          }
        ]
      },
      {
        "title": "Titanium-Bar Acrylic Hybrid",
        "sub": "Cast Metal Substructure with Acrylic Resin & Plastic Teeth",
        "badge": "Economy Alternative",
        "isGold": false,
        "material": "PMMA Acrylic Resin + Cast Titanium Bar",
        "strength": "80 – 120 MPa (Low)",
        "chippingRisk": "High (Plastic teeth pop off or wear down)",
        "lifespan": "3 – 7 Years",
        "features": [
          {
            "text": "Lower initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Abrasive wear flattens teeth, shifting jaw alignment",
            "status": "bad"
          },
          {
            "text": "Porcelain/acrylic resin absorbs stains, odors, and bacteria",
            "status": "bad"
          },
          {
            "text": "Requires frequent maintenance, relining, and total replacement",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Cast Cobalt-Chromium Frame with Baked Porcelain",
        "badge": "Legacy Standard",
        "isGold": false,
        "material": "Cast Cobalt-Chromium Alloy + Feldspathic Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "Moderate to High (Porcelain delamination risk)",
        "lifespan": "8 – 12 Years",
        "features": [
          {
            "text": "Rigid metal substructure",
            "status": "good"
          },
          {
            "text": "Porcelain prone to fractures under heavy zygomatic bite forces",
            "status": "bad"
          },
          {
            "text": "Dark grey metal margin shows over time if gums recede",
            "status": "bad"
          },
          {
            "text": "Heavy bulk creates an uncomfortable foreign-body sensation",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "acrylic": "Acrylic Hybrid (PMMA)",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "acrylic": "80 – 120 MPa (Fragile)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Chipping & Breakage Risk",
        "zirconia": "0% (Solid homogeneous block)",
        "acrylic": "High (Teeth detach or fracture)",
        "pfm": "High (Porcelain chips off metal)"
      },
      {
        "criteria": "Hygiene & Odor Resistance",
        "zirconia": "100% Non-porous (Zero odor/stains)",
        "acrylic": "Porrosive (Absorbs bacteria & odor)",
        "pfm": "Moderate (Plaque traps at metal line)"
      },
      {
        "criteria": "Digital CAD/CAM Robotic Milling",
        "zirconia": "5-axis robotic precision (< 5 µm)",
        "acrylic": "Manual flasking & pressing",
        "pfm": "Manual casting and hand-layering"
      },
      {
        "criteria": "Suitability for Zygomatic Arches",
        "zirconia": "100% Recommended (Maximum stability)",
        "acrylic": "Temporary use only (High flex)",
        "pfm": "Not Recommended (Chipping risk)"
      },
      {
        "criteria": "Expected Clinical Longevity",
        "zirconia": "Lifetime Guarantee",
        "acrylic": "3 – 7 Years",
        "pfm": "8 – 12 Years"
      }
    ],
    "packagesTitle": "Pakiety Implantów Zygomatycznych i Przelicznik Walut",
    "packagesSubtitle": "All-inclusive packages per upper jaw with certified Nobel Biocare, Straumann, and specialized zygomatic systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Upper Jaw (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extended Zygomatic titanium implants in cheekbone",
          "2-4x Conventional anterior titanium dental implants",
          "Operating room fees & Specialist Anesthesiologist care",
          "Conscious IV Sedation / General Anesthesia included",
          "24-Hour fixed screw-retained temporary full-arch bridge",
          "Permanent CAD/CAM Monolithic Zirconia Full-Arch Bridge",
          "3D CBCT Craniofacial Tomography & Surgical Guide",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Quad Zygomatic Master Package",
        "brand": "NobelZygoma by Nobel Biocare (4 Extended Zygomatic Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "popular": true,
        "price": {
          "EUR": "€9,900",
          "GBP": "£8,500",
          "USD": "$10,900"
        },
        "included": [
          "4x NobelZygoma extra-long titanium implants (2 per cheekbone)",
          "Complete rescue for zero-bone razor-thin upper jaws",
          "Hospital surgical suite & Anesthesiology team included",
          "Conscious IV Sedation / General Anesthesia included",
          "Same-day fixed screw-retained acrylic temporary bridge",
          "1200+ MPa Monolithic Multilayer German Zirconia Bridge",
          "Lifetime Global Nobel Biocare Warranty & Passport",
          "Luxury 5-Star Hotel Partner & VIP Private Chauffeur"
        ]
      },
      {
        "name": "Straumann BLX + Zygoma Hybrid",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,500",
          "GBP": "£7,300",
          "USD": "$9,350"
        },
        "included": [
          "2x Specialized Zygomatic Implants + 4x Straumann BLX Fixtures",
          "Hydrophilic SLActive surface for ultra-fast bone integration",
          "Full surgical theatre & Anesthesia administration",
          "Fixed aesthetic screw-retained temporary teeth in 24h",
          "Bespoke Monolithic Zirconia Full-Arch Permanent Bridge",
          "3D CBCT Diagnostic Planning & Stereolithographic Stent",
          "Lifetime International Straumann Guarantee & Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Stay included"
        ]
      },
      {
        "name": "Noris Medical Zygoma Specialized",
        "brand": "Noris Medical International (Zygomatic & Pterygoid Specialists)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "2-4x Noris Zygomatic machined-collar implants",
          "High insertion torque stability in cortical cheekbone",
          "Complete hospital surgical unit & sedation care",
          "Immediate screw-retained temporary bridge in 24 hours",
          "Permanent CAD/CAM Monolithic Zirconia Restoration",
          "3D CBCT Tomography & virtual surgical navigation",
          "Lifetime Manufacturer Warranty Passport",
          "VIP Airport-Hotel-Clinic Transfers & 5-Star Hotel"
        ]
      },
      {
        "name": "Southern Implants Co-Axis Zygoma",
        "brand": "Southern Implants (55° Angled Co-Axis Platform)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€8,200",
          "GBP": "£7,050",
          "USD": "$9,000"
        },
        "included": [
          "2-4x Southern Implants Co-Axis with built-in 55° correction",
          "Eliminates bulky prosthetic palatal profile in the mouth",
          "General Anesthesia / IV Sedation with specialist MD",
          "Same-day fixed aesthetic temporary acrylic bridge",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "3D CBCT Guided Surgery & post-op medication pack",
          "Lifetime International Manufacturer Warranty",
          "VIP Private Mercedes Transport & Luxury 5-Star Hotel"
        ]
      },
      {
        "name": "Zygoma + Pterygoid Extreme Arch",
        "brand": "Multi-Anchor Solution (2 Zygoma + 2 Pterygoid + 2 Anterior)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,650",
          "USD": "$9,800"
        },
        "included": [
          "2x Zygomatic implants + 2x Pterygoid implants + 2x Anterior",
          "Total elimination of posterior cantilever for maximum chewing",
          "Hospital surgical suite, Anesthesiologist & sedation care",
          "Fixed screw-retained temporary teeth in 24 hours",
          "Full-Arch Monolithic German Zirconia Permanent Bridge",
          "Comprehensive 3D CBCT Craniofacial Mapping",
          "Lifetime Global Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Luxury Accommodations"
        ]
      }
    ],
    "costTitle": "Międzynarodowe Porównanie Kosztów: Implanty Jarzmowe (UK / Niemcy vs Stambuł)",
    "costSubtitle": "Compare real clinical costs per full upper jaw including surgical theatre, general anesthesia, temporary bridge, and permanent monolithic zirconia.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Zygomatic Cost (Upper Jaw)",
      "inclusions": "Package Coverage & Hospital Services",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£18,000 – £26,000 ($23,000 – $33,000)",
        "inclusions": "Surgical fees only. Hospital operating room (£2,500), general anesthesia (£1,800), CBCT (£250), and temporary teeth billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Maxillofacial Clinics)",
        "costPerArch": "€16,000 – €24,000 ($17,500 – $26,500)",
        "inclusions": "Surgeon and implant hardware. Hospital bed, anesthesiologist, hotel stay, and transfers billed as separate line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €12,500 (£5,950 – £10,750)",
        "inclusions": "100% All-Inclusive: Zygomatic implants, hospital surgical unit, anesthesia team, 3D CBCT, fixed temporary bridge, permanent zirconia bridge, 5-star hotel & VIP Mercedes transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Często Zadawane Pytania: Implanty Zygomatyczne",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, anesthesia, surgical recovery, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical FAQ (Craniofacial Cheekbone Anchoring)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zygomatic Dental Implants and how do they work?",
        "a": "Zygomatic implants are extended titanium fixtures (30mm to 55mm long) specifically engineered for patients with severe upper jawbone resorption. Instead of placing implants into the thin alveolar ridge, they are anchored directly into the dense, cortical bone of the zygomatic arch (cheekbone), which never resorbs over time."
      },
      {
        "q": "Who is an ideal candidate for Zygomatic Implants?",
        "a": "Ideal candidates are patients with severe bone loss in the upper jaw who have been told they cannot have standard dental implants, those who have suffered failed sinus bone grafts, long-term complete denture wearers with razor-thin ridges, or patients following oncological maxillary resection."
      },
      {
        "q": "Why are Zygomatic Implants superior to complex sinus bone grafting?",
        "a": "Extensive sinus lifting and iliac crest bone grafting require 12 to 18 months of healing with high failure and resorption rates. Zygomatic implants bypass the maxillary sinus completely, eliminating bone graft surgery and allowing same-day fixed teeth in 24 to 48 hours."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma combines 2 zygomatic implants in the posterior cheekbones with 2 to 4 conventional implants in the anterior upper jaw. Quad Zygoma uses 4 zygomatic implants (2 on each cheekbone) when there is total bone loss in both the front and back of the upper jaw."
      },
      {
        "q": "Is Zygomatic implant surgery performed under general anesthesia or sedation?",
        "a": "At Master Smile Studio, zygomatic implant surgeries are performed under conscious IV sedation or general anesthesia in our surgical operating suites, administered by a specialist anesthesiologist for complete comfort, zero pain, and zero surgical anxiety."
      },
      {
        "q": "Will I be left without teeth during the healing period?",
        "a": "Never. Because the cheekbone provides exceptionally high initial insertion torque (>45–65 Ncm), a rigid, screw-retained fixed temporary acrylic/PMMA bridge is securely attached within 24 to 48 hours after surgery."
      },
      {
        "q": "What are the risks to the maxillary sinus or facial nerves?",
        "a": "When performed by skilled maxillofacial surgeons using 3D CBCT navigation and extra-sinus surgical protocols, zygomatic implants have a 97–98% success rate. The facial motor nerves are located far superficial to the surgical trajectory and remain completely untouched."
      },
      {
        "q": "What is the post-operative recovery timeline for Zygomatic surgery?",
        "a": "Mild to moderate facial swelling and bruising around the cheeks is normal for 4 to 6 days. Most international patients feel comfortable exploring Istanbul by day 3, managed with prescribed analgesics and cold compresses."
      },
      {
        "q": "How are permanent teeth attached after 3 to 6 months?",
        "a": "Once the zygomatic implants achieve complete osseointegration with the cheekbone, high-precision 3D intraoral scans capture the soft tissue contours. A 1200+ MPa monolithic multilayer German zirconia bridge on a custom titanium substructure is fabricated and permanently screwed into place."
      },
      {
        "q": "Can Zygomatic Implants fail or loosen?",
        "a": "Zygomatic bone possesses the highest bone mineral density in the craniofacial skeleton. Scientific studies demonstrate a 97.8% long-term survival rate over 20+ years, significantly outperforming conventional implants placed in grafted sinuses."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul to complete 3D CBCT diagnostics, surgery, and immediate placement of your fixed temporary bridge. After 3 to 6 months of healing, you return for a 5-day visit to receive your permanent monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic package?",
        "a": "Our all-inclusive packages cover all zygomatic and conventional implants, surgical operating room fees, anesthesiologist fees, 3D CBCT scans, fixed temporary teeth, permanent zirconia bridge, 5-star hotel accommodations, and private VIP Mercedes airport/clinic transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you use?",
        "a": "We exclusively utilize globally recognized, clinically certified zygomatic systems including Nobel Biocare (NobelZygoma), Straumann Group, Noris Medical, and Southern Implants, each accompanied by an authentic international manufacturer certificate."
      },
      {
        "q": "Why are Zygomatic Implants 60%–70% more affordable in Turkey than the UK or Germany?",
        "a": "Lower clinic operating overheads, competitive laboratory manufacturing costs in Istanbul, and favorable currency exchange rates allow us to provide genuine Swiss and German zygomatic systems at a fraction of Western European clinic prices without compromising surgical quality."
      },
      {
        "q": "What guarantees and manufacturer warranties are provided?",
        "a": "All zygomatic titanium fixtures come with an official Lifetime International Manufacturer Warranty and a medical passport. Master Smile Studio also provides a clinical warranty covering laboratory prosthetics and surgical follow-up."
      },
      {
        "q": "Can I combine Zygomatic surgery with Pterygoid implants?",
        "a": "Yes. For patients with total resorption of the posterior maxilla, our maxillofacial surgeons frequently combine zygomatic fixtures with pterygoid implants anchored into the pterygomaxillary plate for optimal biomechanical cantilever elimination."
      },
      {
        "q": "How do I start the consultation process before traveling from abroad?",
        "a": "Simply send your recent 3D CBCT tomographic scan or panoramic X-ray via WhatsApp. Our chief oral & maxillofacial surgeon will formulate a comprehensive 3D digital surgical treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "pt": {
    "introBadge": "IMPLANTES ZIGOMÁTICOS EM OSSO SEVERO",
    "introTitle": "Implantes Zigomáticos e Pterigóideos em Istambul: Dentes Fixos em 24h",
    "introLead": "Elimine 12 a 18 meses de enxertos ósseos dolorosos: Implantes de 30 a 55 mm ancorados no osso zigomático proporcionam dentes fixos em 24 horas.",
    "introP1": "Zygomatic and pterygoid dental implants are the ultimate clinical solution for patients suffering from catastrophic maxillary (upper jaw) bone resorption, failed sinus lifts, or decades of loose complete denture wear. Because the zygomatic cheekbone possesses the highest cortical bone density in the craniofacial skeleton and never resorbs with age or tooth loss, our maxillofacial surgeons bypass hollowed maxillary sinuses completely.",
    "introP2": "Using advanced 3D CBCT craniofacial mapping and stereolithographic surgical guides under conscious IV sedation or general anesthesia, we achieve exceptional primary insertion torque values exceeding 50–65 Ncm. This allows safe immediate loading with a rigid screw-retained temporary bridge in 24 hours, followed by a permanent 1200+ MPa monolithic multilayer German zirconia full arch.",
    "introP3Lead": "For patients with localized or moderate residual bone, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkSinus": "Sinus Lifting & Bone Grafting",
    "introP3Tail": " solutions in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zygomatic & Pterygoid Implants?",
    "candidacySubtitle": "If you have been told by other dentists that you \"have no bone left\" for regular implants, zygomatic surgery is your definitive answer.",
    "candidacyPoints": [
      {
        "title": "Severe Upper Jaw Bone Atrophy",
        "desc": "Patients with pencil-thin or razor-sharp upper jaw ridges where traditional 8–12mm implants cannot be anchored."
      },
      {
        "title": "Failed Previous Sinus Bone Grafts",
        "desc": "Patients who underwent sinus lifts or block bone augmentations that failed, resorbed, or became chronically infected."
      },
      {
        "title": "Decades of Complete Denture Wear",
        "desc": "Long-term denture pressure accelerates alveolar bone loss; cheekbone anchoring restores solid fixed bite stability."
      },
      {
        "title": "Post-Trauma or Oncological Resection",
        "desc": "Maxillofacial reconstruction following cyst removal, tumor resection, or major facial trauma."
      }
    ],
    "compareTitle": "Comparativo Clínico: Quad Zygoma vs. Hybrid Zygoma vs. Enxerto Ósseo",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Bone Grafting Requirement",
        "grafting": "Extensive block / sinus bone grafts (Hip/bovine)",
        "hybrid": "0% Bone Grafting (Cheekbone anchor)",
        "quad": "0% Bone Grafting (Complete bypass)"
      },
      {
        "criteria": "Total Treatment Duration",
        "grafting": "12 – 18 months total wait",
        "hybrid": "24–48 hours for fixed teeth (Final at 3 Mo)",
        "quad": "24–48 hours for fixed teeth (Final at 3 Mo)"
      },
      {
        "criteria": "Surgical Operating Stages",
        "grafting": "2–4 separate surgeries over 1.5 years",
        "hybrid": "1 single surgery (Sedation/GA)",
        "quad": "1 single surgery (Sedation/GA)"
      },
      {
        "criteria": "Period with Removable Denture",
        "grafting": "12–18 months wearing loose flipper",
        "hybrid": "0 Days (Fixed screw bridge in 24h)",
        "quad": "0 Days (Fixed screw bridge in 24h)"
      },
      {
        "criteria": "Primary Insertion Torque",
        "grafting": "Low to moderate (15–25 Ncm)",
        "hybrid": "Very High (45–60 Ncm)",
        "quad": "Ultra High (50–65 Ncm in dense zygoma)"
      },
      {
        "criteria": "Long-Term Failure & Resorption Risk",
        "grafting": "High (Grafted bone resorbs up to 40%)",
        "hybrid": "Extremely Low (< 2% over 15 years)",
        "quad": "Extremely Low (< 2.2% over 20+ years)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "grafting": "Mild to moderate localized sinus deficit",
        "hybrid": "Severe posterior loss with anterior bone",
        "quad": "Total upper jawbone loss (Razor-thin maxilla)"
      }
    ],
    "compareDecision": {
      "whenGraftingTitle": "When is Complex Sinus Grafting Clinically Feasible?",
      "whenGraftingText": "Sinus grafting is only advisable for patients with localized bone deficits who have at least 4–5mm of native subantral bone to stabilize grafts, without total jawbone atrophy.",
      "whenZygomaticTitle": "When are Zygomatic Implants the Only Viable Solution?",
      "whenZygomaticText": "Zygomatic implants are the definitive gold standard when the upper jaw is completely hollowed out, previous bone grafts have failed, or the patient cannot tolerate 18 months without fixed teeth."
    },
    "processTitle": "Protocolo de Precisão em 3 Fases: Da Tomografia 3D à Zircônia",
    "processSubtitle": "Every zygomatic procedure at Master Smile Studio follows a strict craniofacial surgical protocol for 98% long-term success.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Craniofacial Mapping & Stereolithographic Guided Stent",
        "text": "High-resolution 3D tomography analyzes zygomatic bone density, sinus contours, and orbital margins. A stereolithographic surgical guide determines the exact 3D entry trajectory.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Anatomy Analysis",
            "val": "Zygomatic Arch & Orbit"
          },
          {
            "key": "Guide System",
            "val": "Craniofacial Surgical Stent"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Cheekbone Anchoring & 24h Fixed Temporary Bridge (Day 1)",
        "text": "Under conscious IV sedation or general anesthesia, 30–55mm titanium fixtures are anchored into the cheekbone at 50–65 Ncm. A rigid, screw-retained temporary bridge is fixed in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Ultra Stable)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed Screw-Retained in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "5-Axis CAD/CAM Monolithic Zirconia Final Full Arch",
        "text": "After 3–6 months of flawless osseointegration, 3D intraoral digital scans capture the healed tissue. A 1200+ MPa monolithic multilayer German zirconia bridge is robotically milled.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Material",
            "val": "100% German Multilayer Zirconia"
          },
          {
            "key": "Substructure",
            "val": "Custom Titanium Platform"
          }
        ]
      }
    ],
    "materialsTitle": "Materiais de Prótese Zigomática: Por que Zircônia Monolítica",
    "materialsSubtitle": "In zygomatic arches, high cantilever forces demand maximum rigidity and fracture resistance to protect the cheekbone fixtures.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Custom Titanium Framework",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic German Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrestricted bite force: easily handles 600+ Newtons of mastication",
            "status": "good"
          },
          {
            "text": "Ultra-smooth non-porous surface prevents plaque & Peri-implantitis",
            "status": "good"
          },
          {
            "text": "Custom titanium substructure eliminates micro-flexing across implants",
            "status": "good"
          },
          {
            "text": "Natural multi-layer light translucency matching adjacent features",
            "status": "good"
          }
        ]
      },
      {
        "title": "Titanium-Bar Acrylic Hybrid",
        "sub": "Cast Metal Substructure with Acrylic Resin & Plastic Teeth",
        "badge": "Economy Alternative",
        "isGold": false,
        "material": "PMMA Acrylic Resin + Cast Titanium Bar",
        "strength": "80 – 120 MPa (Low)",
        "chippingRisk": "High (Plastic teeth pop off or wear down)",
        "lifespan": "3 – 7 Years",
        "features": [
          {
            "text": "Lower initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Abrasive wear flattens teeth, shifting jaw alignment",
            "status": "bad"
          },
          {
            "text": "Porcelain/acrylic resin absorbs stains, odors, and bacteria",
            "status": "bad"
          },
          {
            "text": "Requires frequent maintenance, relining, and total replacement",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Cast Cobalt-Chromium Frame with Baked Porcelain",
        "badge": "Legacy Standard",
        "isGold": false,
        "material": "Cast Cobalt-Chromium Alloy + Feldspathic Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "Moderate to High (Porcelain delamination risk)",
        "lifespan": "8 – 12 Years",
        "features": [
          {
            "text": "Rigid metal substructure",
            "status": "good"
          },
          {
            "text": "Porcelain prone to fractures under heavy zygomatic bite forces",
            "status": "bad"
          },
          {
            "text": "Dark grey metal margin shows over time if gums recede",
            "status": "bad"
          },
          {
            "text": "Heavy bulk creates an uncomfortable foreign-body sensation",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "acrylic": "Acrylic Hybrid (PMMA)",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "acrylic": "80 – 120 MPa (Fragile)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Chipping & Breakage Risk",
        "zirconia": "0% (Solid homogeneous block)",
        "acrylic": "High (Teeth detach or fracture)",
        "pfm": "High (Porcelain chips off metal)"
      },
      {
        "criteria": "Hygiene & Odor Resistance",
        "zirconia": "100% Non-porous (Zero odor/stains)",
        "acrylic": "Porrosive (Absorbs bacteria & odor)",
        "pfm": "Moderate (Plaque traps at metal line)"
      },
      {
        "criteria": "Digital CAD/CAM Robotic Milling",
        "zirconia": "5-axis robotic precision (< 5 µm)",
        "acrylic": "Manual flasking & pressing",
        "pfm": "Manual casting and hand-layering"
      },
      {
        "criteria": "Suitability for Zygomatic Arches",
        "zirconia": "100% Recommended (Maximum stability)",
        "acrylic": "Temporary use only (High flex)",
        "pfm": "Not Recommended (Chipping risk)"
      },
      {
        "criteria": "Expected Clinical Longevity",
        "zirconia": "Lifetime Guarantee",
        "acrylic": "3 – 7 Years",
        "pfm": "8 – 12 Years"
      }
    ],
    "packagesTitle": "Pacotes de Implantes Zigomáticos e Conversor de Moedas",
    "packagesSubtitle": "All-inclusive packages per upper jaw with certified Nobel Biocare, Straumann, and specialized zygomatic systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Upper Jaw (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extended Zygomatic titanium implants in cheekbone",
          "2-4x Conventional anterior titanium dental implants",
          "Operating room fees & Specialist Anesthesiologist care",
          "Conscious IV Sedation / General Anesthesia included",
          "24-Hour fixed screw-retained temporary full-arch bridge",
          "Permanent CAD/CAM Monolithic Zirconia Full-Arch Bridge",
          "3D CBCT Craniofacial Tomography & Surgical Guide",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Quad Zygomatic Master Package",
        "brand": "NobelZygoma by Nobel Biocare (4 Extended Zygomatic Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "popular": true,
        "price": {
          "EUR": "€9,900",
          "GBP": "£8,500",
          "USD": "$10,900"
        },
        "included": [
          "4x NobelZygoma extra-long titanium implants (2 per cheekbone)",
          "Complete rescue for zero-bone razor-thin upper jaws",
          "Hospital surgical suite & Anesthesiology team included",
          "Conscious IV Sedation / General Anesthesia included",
          "Same-day fixed screw-retained acrylic temporary bridge",
          "1200+ MPa Monolithic Multilayer German Zirconia Bridge",
          "Lifetime Global Nobel Biocare Warranty & Passport",
          "Luxury 5-Star Hotel Partner & VIP Private Chauffeur"
        ]
      },
      {
        "name": "Straumann BLX + Zygoma Hybrid",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,500",
          "GBP": "£7,300",
          "USD": "$9,350"
        },
        "included": [
          "2x Specialized Zygomatic Implants + 4x Straumann BLX Fixtures",
          "Hydrophilic SLActive surface for ultra-fast bone integration",
          "Full surgical theatre & Anesthesia administration",
          "Fixed aesthetic screw-retained temporary teeth in 24h",
          "Bespoke Monolithic Zirconia Full-Arch Permanent Bridge",
          "3D CBCT Diagnostic Planning & Stereolithographic Stent",
          "Lifetime International Straumann Guarantee & Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Stay included"
        ]
      },
      {
        "name": "Noris Medical Zygoma Specialized",
        "brand": "Noris Medical International (Zygomatic & Pterygoid Specialists)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "2-4x Noris Zygomatic machined-collar implants",
          "High insertion torque stability in cortical cheekbone",
          "Complete hospital surgical unit & sedation care",
          "Immediate screw-retained temporary bridge in 24 hours",
          "Permanent CAD/CAM Monolithic Zirconia Restoration",
          "3D CBCT Tomography & virtual surgical navigation",
          "Lifetime Manufacturer Warranty Passport",
          "VIP Airport-Hotel-Clinic Transfers & 5-Star Hotel"
        ]
      },
      {
        "name": "Southern Implants Co-Axis Zygoma",
        "brand": "Southern Implants (55° Angled Co-Axis Platform)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€8,200",
          "GBP": "£7,050",
          "USD": "$9,000"
        },
        "included": [
          "2-4x Southern Implants Co-Axis with built-in 55° correction",
          "Eliminates bulky prosthetic palatal profile in the mouth",
          "General Anesthesia / IV Sedation with specialist MD",
          "Same-day fixed aesthetic temporary acrylic bridge",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "3D CBCT Guided Surgery & post-op medication pack",
          "Lifetime International Manufacturer Warranty",
          "VIP Private Mercedes Transport & Luxury 5-Star Hotel"
        ]
      },
      {
        "name": "Zygoma + Pterygoid Extreme Arch",
        "brand": "Multi-Anchor Solution (2 Zygoma + 2 Pterygoid + 2 Anterior)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,650",
          "USD": "$9,800"
        },
        "included": [
          "2x Zygomatic implants + 2x Pterygoid implants + 2x Anterior",
          "Total elimination of posterior cantilever for maximum chewing",
          "Hospital surgical suite, Anesthesiologist & sedation care",
          "Fixed screw-retained temporary teeth in 24 hours",
          "Full-Arch Monolithic German Zirconia Permanent Bridge",
          "Comprehensive 3D CBCT Craniofacial Mapping",
          "Lifetime Global Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Luxury Accommodations"
        ]
      }
    ],
    "costTitle": "Comparativo Internacional de Custos: Implantes Zigomáticos (Reino Unido / Alemanha vs Istambul)",
    "costSubtitle": "Compare real clinical costs per full upper jaw including surgical theatre, general anesthesia, temporary bridge, and permanent monolithic zirconia.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Zygomatic Cost (Upper Jaw)",
      "inclusions": "Package Coverage & Hospital Services",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£18,000 – £26,000 ($23,000 – $33,000)",
        "inclusions": "Surgical fees only. Hospital operating room (£2,500), general anesthesia (£1,800), CBCT (£250), and temporary teeth billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Maxillofacial Clinics)",
        "costPerArch": "€16,000 – €24,000 ($17,500 – $26,500)",
        "inclusions": "Surgeon and implant hardware. Hospital bed, anesthesiologist, hotel stay, and transfers billed as separate line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €12,500 (£5,950 – £10,750)",
        "inclusions": "100% All-Inclusive: Zygomatic implants, hospital surgical unit, anesthesia team, 3D CBCT, fixed temporary bridge, permanent zirconia bridge, 5-star hotel & VIP Mercedes transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Perguntas Frequentes: Implantes Zigomáticos",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, anesthesia, surgical recovery, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical FAQ (Craniofacial Cheekbone Anchoring)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zygomatic Dental Implants and how do they work?",
        "a": "Zygomatic implants are extended titanium fixtures (30mm to 55mm long) specifically engineered for patients with severe upper jawbone resorption. Instead of placing implants into the thin alveolar ridge, they are anchored directly into the dense, cortical bone of the zygomatic arch (cheekbone), which never resorbs over time."
      },
      {
        "q": "Who is an ideal candidate for Zygomatic Implants?",
        "a": "Ideal candidates are patients with severe bone loss in the upper jaw who have been told they cannot have standard dental implants, those who have suffered failed sinus bone grafts, long-term complete denture wearers with razor-thin ridges, or patients following oncological maxillary resection."
      },
      {
        "q": "Why are Zygomatic Implants superior to complex sinus bone grafting?",
        "a": "Extensive sinus lifting and iliac crest bone grafting require 12 to 18 months of healing with high failure and resorption rates. Zygomatic implants bypass the maxillary sinus completely, eliminating bone graft surgery and allowing same-day fixed teeth in 24 to 48 hours."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma combines 2 zygomatic implants in the posterior cheekbones with 2 to 4 conventional implants in the anterior upper jaw. Quad Zygoma uses 4 zygomatic implants (2 on each cheekbone) when there is total bone loss in both the front and back of the upper jaw."
      },
      {
        "q": "Is Zygomatic implant surgery performed under general anesthesia or sedation?",
        "a": "At Master Smile Studio, zygomatic implant surgeries are performed under conscious IV sedation or general anesthesia in our surgical operating suites, administered by a specialist anesthesiologist for complete comfort, zero pain, and zero surgical anxiety."
      },
      {
        "q": "Will I be left without teeth during the healing period?",
        "a": "Never. Because the cheekbone provides exceptionally high initial insertion torque (>45–65 Ncm), a rigid, screw-retained fixed temporary acrylic/PMMA bridge is securely attached within 24 to 48 hours after surgery."
      },
      {
        "q": "What are the risks to the maxillary sinus or facial nerves?",
        "a": "When performed by skilled maxillofacial surgeons using 3D CBCT navigation and extra-sinus surgical protocols, zygomatic implants have a 97–98% success rate. The facial motor nerves are located far superficial to the surgical trajectory and remain completely untouched."
      },
      {
        "q": "What is the post-operative recovery timeline for Zygomatic surgery?",
        "a": "Mild to moderate facial swelling and bruising around the cheeks is normal for 4 to 6 days. Most international patients feel comfortable exploring Istanbul by day 3, managed with prescribed analgesics and cold compresses."
      },
      {
        "q": "How are permanent teeth attached after 3 to 6 months?",
        "a": "Once the zygomatic implants achieve complete osseointegration with the cheekbone, high-precision 3D intraoral scans capture the soft tissue contours. A 1200+ MPa monolithic multilayer German zirconia bridge on a custom titanium substructure is fabricated and permanently screwed into place."
      },
      {
        "q": "Can Zygomatic Implants fail or loosen?",
        "a": "Zygomatic bone possesses the highest bone mineral density in the craniofacial skeleton. Scientific studies demonstrate a 97.8% long-term survival rate over 20+ years, significantly outperforming conventional implants placed in grafted sinuses."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul to complete 3D CBCT diagnostics, surgery, and immediate placement of your fixed temporary bridge. After 3 to 6 months of healing, you return for a 5-day visit to receive your permanent monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic package?",
        "a": "Our all-inclusive packages cover all zygomatic and conventional implants, surgical operating room fees, anesthesiologist fees, 3D CBCT scans, fixed temporary teeth, permanent zirconia bridge, 5-star hotel accommodations, and private VIP Mercedes airport/clinic transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you use?",
        "a": "We exclusively utilize globally recognized, clinically certified zygomatic systems including Nobel Biocare (NobelZygoma), Straumann Group, Noris Medical, and Southern Implants, each accompanied by an authentic international manufacturer certificate."
      },
      {
        "q": "Why are Zygomatic Implants 60%–70% more affordable in Turkey than the UK or Germany?",
        "a": "Lower clinic operating overheads, competitive laboratory manufacturing costs in Istanbul, and favorable currency exchange rates allow us to provide genuine Swiss and German zygomatic systems at a fraction of Western European clinic prices without compromising surgical quality."
      },
      {
        "q": "What guarantees and manufacturer warranties are provided?",
        "a": "All zygomatic titanium fixtures come with an official Lifetime International Manufacturer Warranty and a medical passport. Master Smile Studio also provides a clinical warranty covering laboratory prosthetics and surgical follow-up."
      },
      {
        "q": "Can I combine Zygomatic surgery with Pterygoid implants?",
        "a": "Yes. For patients with total resorption of the posterior maxilla, our maxillofacial surgeons frequently combine zygomatic fixtures with pterygoid implants anchored into the pterygomaxillary plate for optimal biomechanical cantilever elimination."
      },
      {
        "q": "How do I start the consultation process before traveling from abroad?",
        "a": "Simply send your recent 3D CBCT tomographic scan or panoramic X-ray via WhatsApp. Our chief oral & maxillofacial surgeon will formulate a comprehensive 3D digital surgical treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "es": {
    "introBadge": "IMPLANTES CIGOMÁTICOS EN PÉRDIDA ÓSEA",
    "introTitle": "Implantes Cigomáticos y Pterigoideos en Estambul: Dientes Fijos en 24h",
    "introLead": "Olvídese de 12 a 18 meses de dolorosos injertos óseos: Implantes de 30 a 55 mm anclados en el hueso cigomático para dientes fijos en 24 horas.",
    "introP1": "Zygomatic and pterygoid dental implants are the ultimate clinical solution for patients suffering from catastrophic maxillary (upper jaw) bone resorption, failed sinus lifts, or decades of loose complete denture wear. Because the zygomatic cheekbone possesses the highest cortical bone density in the craniofacial skeleton and never resorbs with age or tooth loss, our maxillofacial surgeons bypass hollowed maxillary sinuses completely.",
    "introP2": "Using advanced 3D CBCT craniofacial mapping and stereolithographic surgical guides under conscious IV sedation or general anesthesia, we achieve exceptional primary insertion torque values exceeding 50–65 Ncm. This allows safe immediate loading with a rigid screw-retained temporary bridge in 24 hours, followed by a permanent 1200+ MPa monolithic multilayer German zirconia full arch.",
    "introP3Lead": "For patients with localized or moderate residual bone, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkSinus": "Sinus Lifting & Bone Grafting",
    "introP3Tail": " solutions in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zygomatic & Pterygoid Implants?",
    "candidacySubtitle": "If you have been told by other dentists that you \"have no bone left\" for regular implants, zygomatic surgery is your definitive answer.",
    "candidacyPoints": [
      {
        "title": "Severe Upper Jaw Bone Atrophy",
        "desc": "Patients with pencil-thin or razor-sharp upper jaw ridges where traditional 8–12mm implants cannot be anchored."
      },
      {
        "title": "Failed Previous Sinus Bone Grafts",
        "desc": "Patients who underwent sinus lifts or block bone augmentations that failed, resorbed, or became chronically infected."
      },
      {
        "title": "Decades of Complete Denture Wear",
        "desc": "Long-term denture pressure accelerates alveolar bone loss; cheekbone anchoring restores solid fixed bite stability."
      },
      {
        "title": "Post-Trauma or Oncological Resection",
        "desc": "Maxillofacial reconstruction following cyst removal, tumor resection, or major facial trauma."
      }
    ],
    "compareTitle": "Comparación Clínica: Quad Zygoma vs. Hybrid Zygoma vs. Injertos de Seno",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Bone Grafting Requirement",
        "grafting": "Extensive block / sinus bone grafts (Hip/bovine)",
        "hybrid": "0% Bone Grafting (Cheekbone anchor)",
        "quad": "0% Bone Grafting (Complete bypass)"
      },
      {
        "criteria": "Total Treatment Duration",
        "grafting": "12 – 18 months total wait",
        "hybrid": "24–48 hours for fixed teeth (Final at 3 Mo)",
        "quad": "24–48 hours for fixed teeth (Final at 3 Mo)"
      },
      {
        "criteria": "Surgical Operating Stages",
        "grafting": "2–4 separate surgeries over 1.5 years",
        "hybrid": "1 single surgery (Sedation/GA)",
        "quad": "1 single surgery (Sedation/GA)"
      },
      {
        "criteria": "Period with Removable Denture",
        "grafting": "12–18 months wearing loose flipper",
        "hybrid": "0 Days (Fixed screw bridge in 24h)",
        "quad": "0 Days (Fixed screw bridge in 24h)"
      },
      {
        "criteria": "Primary Insertion Torque",
        "grafting": "Low to moderate (15–25 Ncm)",
        "hybrid": "Very High (45–60 Ncm)",
        "quad": "Ultra High (50–65 Ncm in dense zygoma)"
      },
      {
        "criteria": "Long-Term Failure & Resorption Risk",
        "grafting": "High (Grafted bone resorbs up to 40%)",
        "hybrid": "Extremely Low (< 2% over 15 years)",
        "quad": "Extremely Low (< 2.2% over 20+ years)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "grafting": "Mild to moderate localized sinus deficit",
        "hybrid": "Severe posterior loss with anterior bone",
        "quad": "Total upper jawbone loss (Razor-thin maxilla)"
      }
    ],
    "compareDecision": {
      "whenGraftingTitle": "When is Complex Sinus Grafting Clinically Feasible?",
      "whenGraftingText": "Sinus grafting is only advisable for patients with localized bone deficits who have at least 4–5mm of native subantral bone to stabilize grafts, without total jawbone atrophy.",
      "whenZygomaticTitle": "When are Zygomatic Implants the Only Viable Solution?",
      "whenZygomaticText": "Zygomatic implants are the definitive gold standard when the upper jaw is completely hollowed out, previous bone grafts have failed, or the patient cannot tolerate 18 months without fixed teeth."
    },
    "processTitle": "Protocolo de Precisão em 3 Fases: De la Tomografía 3D al Zirconio",
    "processSubtitle": "Every zygomatic procedure at Master Smile Studio follows a strict craniofacial surgical protocol for 98% long-term success.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Craniofacial Mapping & Stereolithographic Guided Stent",
        "text": "High-resolution 3D tomography analyzes zygomatic bone density, sinus contours, and orbital margins. A stereolithographic surgical guide determines the exact 3D entry trajectory.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Anatomy Analysis",
            "val": "Zygomatic Arch & Orbit"
          },
          {
            "key": "Guide System",
            "val": "Craniofacial Surgical Stent"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Cheekbone Anchoring & 24h Fixed Temporary Bridge (Day 1)",
        "text": "Under conscious IV sedation or general anesthesia, 30–55mm titanium fixtures are anchored into the cheekbone at 50–65 Ncm. A rigid, screw-retained temporary bridge is fixed in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Ultra Stable)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed Screw-Retained in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "5-Axis CAD/CAM Monolithic Zirconia Final Full Arch",
        "text": "After 3–6 months of flawless osseointegration, 3D intraoral digital scans capture the healed tissue. A 1200+ MPa monolithic multilayer German zirconia bridge is robotically milled.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Material",
            "val": "100% German Multilayer Zirconia"
          },
          {
            "key": "Substructure",
            "val": "Custom Titanium Platform"
          }
        ]
      }
    ],
    "materialsTitle": "Materiales de Prótesis Cigomática: Por qué Zirconio Monolítico",
    "materialsSubtitle": "In zygomatic arches, high cantilever forces demand maximum rigidity and fracture resistance to protect the cheekbone fixtures.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Custom Titanium Framework",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic German Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrestricted bite force: easily handles 600+ Newtons of mastication",
            "status": "good"
          },
          {
            "text": "Ultra-smooth non-porous surface prevents plaque & Peri-implantitis",
            "status": "good"
          },
          {
            "text": "Custom titanium substructure eliminates micro-flexing across implants",
            "status": "good"
          },
          {
            "text": "Natural multi-layer light translucency matching adjacent features",
            "status": "good"
          }
        ]
      },
      {
        "title": "Titanium-Bar Acrylic Hybrid",
        "sub": "Cast Metal Substructure with Acrylic Resin & Plastic Teeth",
        "badge": "Economy Alternative",
        "isGold": false,
        "material": "PMMA Acrylic Resin + Cast Titanium Bar",
        "strength": "80 – 120 MPa (Low)",
        "chippingRisk": "High (Plastic teeth pop off or wear down)",
        "lifespan": "3 – 7 Years",
        "features": [
          {
            "text": "Lower initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Abrasive wear flattens teeth, shifting jaw alignment",
            "status": "bad"
          },
          {
            "text": "Porcelain/acrylic resin absorbs stains, odors, and bacteria",
            "status": "bad"
          },
          {
            "text": "Requires frequent maintenance, relining, and total replacement",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Cast Cobalt-Chromium Frame with Baked Porcelain",
        "badge": "Legacy Standard",
        "isGold": false,
        "material": "Cast Cobalt-Chromium Alloy + Feldspathic Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "Moderate to High (Porcelain delamination risk)",
        "lifespan": "8 – 12 Years",
        "features": [
          {
            "text": "Rigid metal substructure",
            "status": "good"
          },
          {
            "text": "Porcelain prone to fractures under heavy zygomatic bite forces",
            "status": "bad"
          },
          {
            "text": "Dark grey metal margin shows over time if gums recede",
            "status": "bad"
          },
          {
            "text": "Heavy bulk creates an uncomfortable foreign-body sensation",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "acrylic": "Acrylic Hybrid (PMMA)",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "acrylic": "80 – 120 MPa (Fragile)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Chipping & Breakage Risk",
        "zirconia": "0% (Solid homogeneous block)",
        "acrylic": "High (Teeth detach or fracture)",
        "pfm": "High (Porcelain chips off metal)"
      },
      {
        "criteria": "Hygiene & Odor Resistance",
        "zirconia": "100% Non-porous (Zero odor/stains)",
        "acrylic": "Porrosive (Absorbs bacteria & odor)",
        "pfm": "Moderate (Plaque traps at metal line)"
      },
      {
        "criteria": "Digital CAD/CAM Robotic Milling",
        "zirconia": "5-axis robotic precision (< 5 µm)",
        "acrylic": "Manual flasking & pressing",
        "pfm": "Manual casting and hand-layering"
      },
      {
        "criteria": "Suitability for Zygomatic Arches",
        "zirconia": "100% Recommended (Maximum stability)",
        "acrylic": "Temporary use only (High flex)",
        "pfm": "Not Recommended (Chipping risk)"
      },
      {
        "criteria": "Expected Clinical Longevity",
        "zirconia": "Lifetime Guarantee",
        "acrylic": "3 – 7 Years",
        "pfm": "8 – 12 Years"
      }
    ],
    "packagesTitle": "Paquetes de Implantes Cigomáticos y Conversor de Divisas",
    "packagesSubtitle": "All-inclusive packages per upper jaw with certified Nobel Biocare, Straumann, and specialized zygomatic systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Upper Jaw (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extended Zygomatic titanium implants in cheekbone",
          "2-4x Conventional anterior titanium dental implants",
          "Operating room fees & Specialist Anesthesiologist care",
          "Conscious IV Sedation / General Anesthesia included",
          "24-Hour fixed screw-retained temporary full-arch bridge",
          "Permanent CAD/CAM Monolithic Zirconia Full-Arch Bridge",
          "3D CBCT Craniofacial Tomography & Surgical Guide",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Quad Zygomatic Master Package",
        "brand": "NobelZygoma by Nobel Biocare (4 Extended Zygomatic Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "popular": true,
        "price": {
          "EUR": "€9,900",
          "GBP": "£8,500",
          "USD": "$10,900"
        },
        "included": [
          "4x NobelZygoma extra-long titanium implants (2 per cheekbone)",
          "Complete rescue for zero-bone razor-thin upper jaws",
          "Hospital surgical suite & Anesthesiology team included",
          "Conscious IV Sedation / General Anesthesia included",
          "Same-day fixed screw-retained acrylic temporary bridge",
          "1200+ MPa Monolithic Multilayer German Zirconia Bridge",
          "Lifetime Global Nobel Biocare Warranty & Passport",
          "Luxury 5-Star Hotel Partner & VIP Private Chauffeur"
        ]
      },
      {
        "name": "Straumann BLX + Zygoma Hybrid",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,500",
          "GBP": "£7,300",
          "USD": "$9,350"
        },
        "included": [
          "2x Specialized Zygomatic Implants + 4x Straumann BLX Fixtures",
          "Hydrophilic SLActive surface for ultra-fast bone integration",
          "Full surgical theatre & Anesthesia administration",
          "Fixed aesthetic screw-retained temporary teeth in 24h",
          "Bespoke Monolithic Zirconia Full-Arch Permanent Bridge",
          "3D CBCT Diagnostic Planning & Stereolithographic Stent",
          "Lifetime International Straumann Guarantee & Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Stay included"
        ]
      },
      {
        "name": "Noris Medical Zygoma Specialized",
        "brand": "Noris Medical International (Zygomatic & Pterygoid Specialists)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "2-4x Noris Zygomatic machined-collar implants",
          "High insertion torque stability in cortical cheekbone",
          "Complete hospital surgical unit & sedation care",
          "Immediate screw-retained temporary bridge in 24 hours",
          "Permanent CAD/CAM Monolithic Zirconia Restoration",
          "3D CBCT Tomography & virtual surgical navigation",
          "Lifetime Manufacturer Warranty Passport",
          "VIP Airport-Hotel-Clinic Transfers & 5-Star Hotel"
        ]
      },
      {
        "name": "Southern Implants Co-Axis Zygoma",
        "brand": "Southern Implants (55° Angled Co-Axis Platform)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€8,200",
          "GBP": "£7,050",
          "USD": "$9,000"
        },
        "included": [
          "2-4x Southern Implants Co-Axis with built-in 55° correction",
          "Eliminates bulky prosthetic palatal profile in the mouth",
          "General Anesthesia / IV Sedation with specialist MD",
          "Same-day fixed aesthetic temporary acrylic bridge",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "3D CBCT Guided Surgery & post-op medication pack",
          "Lifetime International Manufacturer Warranty",
          "VIP Private Mercedes Transport & Luxury 5-Star Hotel"
        ]
      },
      {
        "name": "Zygoma + Pterygoid Extreme Arch",
        "brand": "Multi-Anchor Solution (2 Zygoma + 2 Pterygoid + 2 Anterior)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,650",
          "USD": "$9,800"
        },
        "included": [
          "2x Zygomatic implants + 2x Pterygoid implants + 2x Anterior",
          "Total elimination of posterior cantilever for maximum chewing",
          "Hospital surgical suite, Anesthesiologist & sedation care",
          "Fixed screw-retained temporary teeth in 24 hours",
          "Full-Arch Monolithic German Zirconia Permanent Bridge",
          "Comprehensive 3D CBCT Craniofacial Mapping",
          "Lifetime Global Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Luxury Accommodations"
        ]
      }
    ],
    "costTitle": "Comparativa Internacional de Costes: Implantes Cigomáticos (Reino Unido / Alemania vs Estambul)",
    "costSubtitle": "Compare real clinical costs per full upper jaw including surgical theatre, general anesthesia, temporary bridge, and permanent monolithic zirconia.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Zygomatic Cost (Upper Jaw)",
      "inclusions": "Package Coverage & Hospital Services",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£18,000 – £26,000 ($23,000 – $33,000)",
        "inclusions": "Surgical fees only. Hospital operating room (£2,500), general anesthesia (£1,800), CBCT (£250), and temporary teeth billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Maxillofacial Clinics)",
        "costPerArch": "€16,000 – €24,000 ($17,500 – $26,500)",
        "inclusions": "Surgeon and implant hardware. Hospital bed, anesthesiologist, hotel stay, and transfers billed as separate line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €12,500 (£5,950 – £10,750)",
        "inclusions": "100% All-Inclusive: Zygomatic implants, hospital surgical unit, anesthesia team, 3D CBCT, fixed temporary bridge, permanent zirconia bridge, 5-star hotel & VIP Mercedes transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Preguntas Frecuentes: Implantes Cigomáticos",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, anesthesia, surgical recovery, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical FAQ (Craniofacial Cheekbone Anchoring)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zygomatic Dental Implants and how do they work?",
        "a": "Zygomatic implants are extended titanium fixtures (30mm to 55mm long) specifically engineered for patients with severe upper jawbone resorption. Instead of placing implants into the thin alveolar ridge, they are anchored directly into the dense, cortical bone of the zygomatic arch (cheekbone), which never resorbs over time."
      },
      {
        "q": "Who is an ideal candidate for Zygomatic Implants?",
        "a": "Ideal candidates are patients with severe bone loss in the upper jaw who have been told they cannot have standard dental implants, those who have suffered failed sinus bone grafts, long-term complete denture wearers with razor-thin ridges, or patients following oncological maxillary resection."
      },
      {
        "q": "Why are Zygomatic Implants superior to complex sinus bone grafting?",
        "a": "Extensive sinus lifting and iliac crest bone grafting require 12 to 18 months of healing with high failure and resorption rates. Zygomatic implants bypass the maxillary sinus completely, eliminating bone graft surgery and allowing same-day fixed teeth in 24 to 48 hours."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma combines 2 zygomatic implants in the posterior cheekbones with 2 to 4 conventional implants in the anterior upper jaw. Quad Zygoma uses 4 zygomatic implants (2 on each cheekbone) when there is total bone loss in both the front and back of the upper jaw."
      },
      {
        "q": "Is Zygomatic implant surgery performed under general anesthesia or sedation?",
        "a": "At Master Smile Studio, zygomatic implant surgeries are performed under conscious IV sedation or general anesthesia in our surgical operating suites, administered by a specialist anesthesiologist for complete comfort, zero pain, and zero surgical anxiety."
      },
      {
        "q": "Will I be left without teeth during the healing period?",
        "a": "Never. Because the cheekbone provides exceptionally high initial insertion torque (>45–65 Ncm), a rigid, screw-retained fixed temporary acrylic/PMMA bridge is securely attached within 24 to 48 hours after surgery."
      },
      {
        "q": "What are the risks to the maxillary sinus or facial nerves?",
        "a": "When performed by skilled maxillofacial surgeons using 3D CBCT navigation and extra-sinus surgical protocols, zygomatic implants have a 97–98% success rate. The facial motor nerves are located far superficial to the surgical trajectory and remain completely untouched."
      },
      {
        "q": "What is the post-operative recovery timeline for Zygomatic surgery?",
        "a": "Mild to moderate facial swelling and bruising around the cheeks is normal for 4 to 6 days. Most international patients feel comfortable exploring Istanbul by day 3, managed with prescribed analgesics and cold compresses."
      },
      {
        "q": "How are permanent teeth attached after 3 to 6 months?",
        "a": "Once the zygomatic implants achieve complete osseointegration with the cheekbone, high-precision 3D intraoral scans capture the soft tissue contours. A 1200+ MPa monolithic multilayer German zirconia bridge on a custom titanium substructure is fabricated and permanently screwed into place."
      },
      {
        "q": "Can Zygomatic Implants fail or loosen?",
        "a": "Zygomatic bone possesses the highest bone mineral density in the craniofacial skeleton. Scientific studies demonstrate a 97.8% long-term survival rate over 20+ years, significantly outperforming conventional implants placed in grafted sinuses."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul to complete 3D CBCT diagnostics, surgery, and immediate placement of your fixed temporary bridge. After 3 to 6 months of healing, you return for a 5-day visit to receive your permanent monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic package?",
        "a": "Our all-inclusive packages cover all zygomatic and conventional implants, surgical operating room fees, anesthesiologist fees, 3D CBCT scans, fixed temporary teeth, permanent zirconia bridge, 5-star hotel accommodations, and private VIP Mercedes airport/clinic transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you use?",
        "a": "We exclusively utilize globally recognized, clinically certified zygomatic systems including Nobel Biocare (NobelZygoma), Straumann Group, Noris Medical, and Southern Implants, each accompanied by an authentic international manufacturer certificate."
      },
      {
        "q": "Why are Zygomatic Implants 60%–70% more affordable in Turkey than the UK or Germany?",
        "a": "Lower clinic operating overheads, competitive laboratory manufacturing costs in Istanbul, and favorable currency exchange rates allow us to provide genuine Swiss and German zygomatic systems at a fraction of Western European clinic prices without compromising surgical quality."
      },
      {
        "q": "What guarantees and manufacturer warranties are provided?",
        "a": "All zygomatic titanium fixtures come with an official Lifetime International Manufacturer Warranty and a medical passport. Master Smile Studio also provides a clinical warranty covering laboratory prosthetics and surgical follow-up."
      },
      {
        "q": "Can I combine Zygomatic surgery with Pterygoid implants?",
        "a": "Yes. For patients with total resorption of the posterior maxilla, our maxillofacial surgeons frequently combine zygomatic fixtures with pterygoid implants anchored into the pterygomaxillary plate for optimal biomechanical cantilever elimination."
      },
      {
        "q": "How do I start the consultation process before traveling from abroad?",
        "a": "Simply send your recent 3D CBCT tomographic scan or panoramic X-ray via WhatsApp. Our chief oral & maxillofacial surgeon will formulate a comprehensive 3D digital surgical treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "ru": {
    "introBadge": "СКУЛОВАЯ ИМПЛАНТАЦИЯ ZYGOMA ПРИ АТРОФИИ КОСТИ",
    "introTitle": "Скуловые и птеригоидные импланты Zygoma в Стамбуле: Зубы за 24 часа",
    "introLead": "Забудьте о долгих месяцах сложной костной пластики: Специальные импланты 30–55 мм фиксируются в скуловую кость и дают несъемные зубы за 24 часа.",
    "introP1": "Zygomatic and pterygoid dental implants are the ultimate clinical solution for patients suffering from catastrophic maxillary (upper jaw) bone resorption, failed sinus lifts, or decades of loose complete denture wear. Because the zygomatic cheekbone possesses the highest cortical bone density in the craniofacial skeleton and never resorbs with age or tooth loss, our maxillofacial surgeons bypass hollowed maxillary sinuses completely.",
    "introP2": "Using advanced 3D CBCT craniofacial mapping and stereolithographic surgical guides under conscious IV sedation or general anesthesia, we achieve exceptional primary insertion torque values exceeding 50–65 Ncm. This allows safe immediate loading with a rigid screw-retained temporary bridge in 24 hours, followed by a permanent 1200+ MPa monolithic multilayer German zirconia full arch.",
    "introP3Lead": "For patients with localized or moderate residual bone, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkSinus": "Sinus Lifting & Bone Grafting",
    "introP3Tail": " solutions in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zygomatic & Pterygoid Implants?",
    "candidacySubtitle": "If you have been told by other dentists that you \"have no bone left\" for regular implants, zygomatic surgery is your definitive answer.",
    "candidacyPoints": [
      {
        "title": "Severe Upper Jaw Bone Atrophy",
        "desc": "Patients with pencil-thin or razor-sharp upper jaw ridges where traditional 8–12mm implants cannot be anchored."
      },
      {
        "title": "Failed Previous Sinus Bone Grafts",
        "desc": "Patients who underwent sinus lifts or block bone augmentations that failed, resorbed, or became chronically infected."
      },
      {
        "title": "Decades of Complete Denture Wear",
        "desc": "Long-term denture pressure accelerates alveolar bone loss; cheekbone anchoring restores solid fixed bite stability."
      },
      {
        "title": "Post-Trauma or Oncological Resection",
        "desc": "Maxillofacial reconstruction following cyst removal, tumor resection, or major facial trauma."
      }
    ],
    "compareTitle": "Объективное Сравнение: Quad Zygoma vs. Hybrid Zygoma vs. Синус-Лифтинг",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Bone Grafting Requirement",
        "grafting": "Extensive block / sinus bone grafts (Hip/bovine)",
        "hybrid": "0% Bone Grafting (Cheekbone anchor)",
        "quad": "0% Bone Grafting (Complete bypass)"
      },
      {
        "criteria": "Total Treatment Duration",
        "grafting": "12 – 18 months total wait",
        "hybrid": "24–48 hours for fixed teeth (Final at 3 Mo)",
        "quad": "24–48 hours for fixed teeth (Final at 3 Mo)"
      },
      {
        "criteria": "Surgical Operating Stages",
        "grafting": "2–4 separate surgeries over 1.5 years",
        "hybrid": "1 single surgery (Sedation/GA)",
        "quad": "1 single surgery (Sedation/GA)"
      },
      {
        "criteria": "Period with Removable Denture",
        "grafting": "12–18 months wearing loose flipper",
        "hybrid": "0 Days (Fixed screw bridge in 24h)",
        "quad": "0 Days (Fixed screw bridge in 24h)"
      },
      {
        "criteria": "Primary Insertion Torque",
        "grafting": "Low to moderate (15–25 Ncm)",
        "hybrid": "Very High (45–60 Ncm)",
        "quad": "Ultra High (50–65 Ncm in dense zygoma)"
      },
      {
        "criteria": "Long-Term Failure & Resorption Risk",
        "grafting": "High (Grafted bone resorbs up to 40%)",
        "hybrid": "Extremely Low (< 2% over 15 years)",
        "quad": "Extremely Low (< 2.2% over 20+ years)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "grafting": "Mild to moderate localized sinus deficit",
        "hybrid": "Severe posterior loss with anterior bone",
        "quad": "Total upper jawbone loss (Razor-thin maxilla)"
      }
    ],
    "compareDecision": {
      "whenGraftingTitle": "When is Complex Sinus Grafting Clinically Feasible?",
      "whenGraftingText": "Sinus grafting is only advisable for patients with localized bone deficits who have at least 4–5mm of native subantral bone to stabilize grafts, without total jawbone atrophy.",
      "whenZygomaticTitle": "When are Zygomatic Implants the Only Viable Solution?",
      "whenZygomaticText": "Zygomatic implants are the definitive gold standard when the upper jaw is completely hollowed out, previous bone grafts have failed, or the patient cannot tolerate 18 months without fixed teeth."
    },
    "processTitle": "3-Этапный Протокол Zygoma: От 3D КТ до Монолитного Циркония",
    "processSubtitle": "Every zygomatic procedure at Master Smile Studio follows a strict craniofacial surgical protocol for 98% long-term success.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Craniofacial Mapping & Stereolithographic Guided Stent",
        "text": "High-resolution 3D tomography analyzes zygomatic bone density, sinus contours, and orbital margins. A stereolithographic surgical guide determines the exact 3D entry trajectory.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Anatomy Analysis",
            "val": "Zygomatic Arch & Orbit"
          },
          {
            "key": "Guide System",
            "val": "Craniofacial Surgical Stent"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Cheekbone Anchoring & 24h Fixed Temporary Bridge (Day 1)",
        "text": "Under conscious IV sedation or general anesthesia, 30–55mm titanium fixtures are anchored into the cheekbone at 50–65 Ncm. A rigid, screw-retained temporary bridge is fixed in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Ultra Stable)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed Screw-Retained in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "5-Axis CAD/CAM Monolithic Zirconia Final Full Arch",
        "text": "After 3–6 months of flawless osseointegration, 3D intraoral digital scans capture the healed tissue. A 1200+ MPa monolithic multilayer German zirconia bridge is robotically milled.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Material",
            "val": "100% German Multilayer Zirconia"
          },
          {
            "key": "Substructure",
            "val": "Custom Titanium Platform"
          }
        ]
      }
    ],
    "materialsTitle": "Материалы Мостов Zygoma: Почему Монолитный Цирконий",
    "materialsSubtitle": "In zygomatic arches, high cantilever forces demand maximum rigidity and fracture resistance to protect the cheekbone fixtures.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Custom Titanium Framework",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic German Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrestricted bite force: easily handles 600+ Newtons of mastication",
            "status": "good"
          },
          {
            "text": "Ultra-smooth non-porous surface prevents plaque & Peri-implantitis",
            "status": "good"
          },
          {
            "text": "Custom titanium substructure eliminates micro-flexing across implants",
            "status": "good"
          },
          {
            "text": "Natural multi-layer light translucency matching adjacent features",
            "status": "good"
          }
        ]
      },
      {
        "title": "Titanium-Bar Acrylic Hybrid",
        "sub": "Cast Metal Substructure with Acrylic Resin & Plastic Teeth",
        "badge": "Economy Alternative",
        "isGold": false,
        "material": "PMMA Acrylic Resin + Cast Titanium Bar",
        "strength": "80 – 120 MPa (Low)",
        "chippingRisk": "High (Plastic teeth pop off or wear down)",
        "lifespan": "3 – 7 Years",
        "features": [
          {
            "text": "Lower initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Abrasive wear flattens teeth, shifting jaw alignment",
            "status": "bad"
          },
          {
            "text": "Porcelain/acrylic resin absorbs stains, odors, and bacteria",
            "status": "bad"
          },
          {
            "text": "Requires frequent maintenance, relining, and total replacement",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Cast Cobalt-Chromium Frame with Baked Porcelain",
        "badge": "Legacy Standard",
        "isGold": false,
        "material": "Cast Cobalt-Chromium Alloy + Feldspathic Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "Moderate to High (Porcelain delamination risk)",
        "lifespan": "8 – 12 Years",
        "features": [
          {
            "text": "Rigid metal substructure",
            "status": "good"
          },
          {
            "text": "Porcelain prone to fractures under heavy zygomatic bite forces",
            "status": "bad"
          },
          {
            "text": "Dark grey metal margin shows over time if gums recede",
            "status": "bad"
          },
          {
            "text": "Heavy bulk creates an uncomfortable foreign-body sensation",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "acrylic": "Acrylic Hybrid (PMMA)",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "acrylic": "80 – 120 MPa (Fragile)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Chipping & Breakage Risk",
        "zirconia": "0% (Solid homogeneous block)",
        "acrylic": "High (Teeth detach or fracture)",
        "pfm": "High (Porcelain chips off metal)"
      },
      {
        "criteria": "Hygiene & Odor Resistance",
        "zirconia": "100% Non-porous (Zero odor/stains)",
        "acrylic": "Porrosive (Absorbs bacteria & odor)",
        "pfm": "Moderate (Plaque traps at metal line)"
      },
      {
        "criteria": "Digital CAD/CAM Robotic Milling",
        "zirconia": "5-axis robotic precision (< 5 µm)",
        "acrylic": "Manual flasking & pressing",
        "pfm": "Manual casting and hand-layering"
      },
      {
        "criteria": "Suitability for Zygomatic Arches",
        "zirconia": "100% Recommended (Maximum stability)",
        "acrylic": "Temporary use only (High flex)",
        "pfm": "Not Recommended (Chipping risk)"
      },
      {
        "criteria": "Expected Clinical Longevity",
        "zirconia": "Lifetime Guarantee",
        "acrylic": "3 – 7 Years",
        "pfm": "8 – 12 Years"
      }
    ],
    "packagesTitle": "Пакеты Скуловой Имплантации Zygoma и Калькулятор Валют",
    "packagesSubtitle": "All-inclusive packages per upper jaw with certified Nobel Biocare, Straumann, and specialized zygomatic systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Upper Jaw (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extended Zygomatic titanium implants in cheekbone",
          "2-4x Conventional anterior titanium dental implants",
          "Operating room fees & Specialist Anesthesiologist care",
          "Conscious IV Sedation / General Anesthesia included",
          "24-Hour fixed screw-retained temporary full-arch bridge",
          "Permanent CAD/CAM Monolithic Zirconia Full-Arch Bridge",
          "3D CBCT Craniofacial Tomography & Surgical Guide",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Quad Zygomatic Master Package",
        "brand": "NobelZygoma by Nobel Biocare (4 Extended Zygomatic Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "popular": true,
        "price": {
          "EUR": "€9,900",
          "GBP": "£8,500",
          "USD": "$10,900"
        },
        "included": [
          "4x NobelZygoma extra-long titanium implants (2 per cheekbone)",
          "Complete rescue for zero-bone razor-thin upper jaws",
          "Hospital surgical suite & Anesthesiology team included",
          "Conscious IV Sedation / General Anesthesia included",
          "Same-day fixed screw-retained acrylic temporary bridge",
          "1200+ MPa Monolithic Multilayer German Zirconia Bridge",
          "Lifetime Global Nobel Biocare Warranty & Passport",
          "Luxury 5-Star Hotel Partner & VIP Private Chauffeur"
        ]
      },
      {
        "name": "Straumann BLX + Zygoma Hybrid",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,500",
          "GBP": "£7,300",
          "USD": "$9,350"
        },
        "included": [
          "2x Specialized Zygomatic Implants + 4x Straumann BLX Fixtures",
          "Hydrophilic SLActive surface for ultra-fast bone integration",
          "Full surgical theatre & Anesthesia administration",
          "Fixed aesthetic screw-retained temporary teeth in 24h",
          "Bespoke Monolithic Zirconia Full-Arch Permanent Bridge",
          "3D CBCT Diagnostic Planning & Stereolithographic Stent",
          "Lifetime International Straumann Guarantee & Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Stay included"
        ]
      },
      {
        "name": "Noris Medical Zygoma Specialized",
        "brand": "Noris Medical International (Zygomatic & Pterygoid Specialists)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "2-4x Noris Zygomatic machined-collar implants",
          "High insertion torque stability in cortical cheekbone",
          "Complete hospital surgical unit & sedation care",
          "Immediate screw-retained temporary bridge in 24 hours",
          "Permanent CAD/CAM Monolithic Zirconia Restoration",
          "3D CBCT Tomography & virtual surgical navigation",
          "Lifetime Manufacturer Warranty Passport",
          "VIP Airport-Hotel-Clinic Transfers & 5-Star Hotel"
        ]
      },
      {
        "name": "Southern Implants Co-Axis Zygoma",
        "brand": "Southern Implants (55° Angled Co-Axis Platform)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€8,200",
          "GBP": "£7,050",
          "USD": "$9,000"
        },
        "included": [
          "2-4x Southern Implants Co-Axis with built-in 55° correction",
          "Eliminates bulky prosthetic palatal profile in the mouth",
          "General Anesthesia / IV Sedation with specialist MD",
          "Same-day fixed aesthetic temporary acrylic bridge",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "3D CBCT Guided Surgery & post-op medication pack",
          "Lifetime International Manufacturer Warranty",
          "VIP Private Mercedes Transport & Luxury 5-Star Hotel"
        ]
      },
      {
        "name": "Zygoma + Pterygoid Extreme Arch",
        "brand": "Multi-Anchor Solution (2 Zygoma + 2 Pterygoid + 2 Anterior)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,650",
          "USD": "$9,800"
        },
        "included": [
          "2x Zygomatic implants + 2x Pterygoid implants + 2x Anterior",
          "Total elimination of posterior cantilever for maximum chewing",
          "Hospital surgical suite, Anesthesiologist & sedation care",
          "Fixed screw-retained temporary teeth in 24 hours",
          "Full-Arch Monolithic German Zirconia Permanent Bridge",
          "Comprehensive 3D CBCT Craniofacial Mapping",
          "Lifetime Global Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Luxury Accommodations"
        ]
      }
    ],
    "costTitle": "Международное Сравнение Цен: Скуловые Импланты (Великобритания / Германия vs Стамбул)",
    "costSubtitle": "Compare real clinical costs per full upper jaw including surgical theatre, general anesthesia, temporary bridge, and permanent monolithic zirconia.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Zygomatic Cost (Upper Jaw)",
      "inclusions": "Package Coverage & Hospital Services",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£18,000 – £26,000 ($23,000 – $33,000)",
        "inclusions": "Surgical fees only. Hospital operating room (£2,500), general anesthesia (£1,800), CBCT (£250), and temporary teeth billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Maxillofacial Clinics)",
        "costPerArch": "€16,000 – €24,000 ($17,500 – $26,500)",
        "inclusions": "Surgeon and implant hardware. Hospital bed, anesthesiologist, hotel stay, and transfers billed as separate line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €12,500 (£5,950 – £10,750)",
        "inclusions": "100% All-Inclusive: Zygomatic implants, hospital surgical unit, anesthesia team, 3D CBCT, fixed temporary bridge, permanent zirconia bridge, 5-star hotel & VIP Mercedes transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Часто Задаваемые Вопросы: Скуловые Импланты Zygoma",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, anesthesia, surgical recovery, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical FAQ (Craniofacial Cheekbone Anchoring)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zygomatic Dental Implants and how do they work?",
        "a": "Zygomatic implants are extended titanium fixtures (30mm to 55mm long) specifically engineered for patients with severe upper jawbone resorption. Instead of placing implants into the thin alveolar ridge, they are anchored directly into the dense, cortical bone of the zygomatic arch (cheekbone), which never resorbs over time."
      },
      {
        "q": "Who is an ideal candidate for Zygomatic Implants?",
        "a": "Ideal candidates are patients with severe bone loss in the upper jaw who have been told they cannot have standard dental implants, those who have suffered failed sinus bone grafts, long-term complete denture wearers with razor-thin ridges, or patients following oncological maxillary resection."
      },
      {
        "q": "Why are Zygomatic Implants superior to complex sinus bone grafting?",
        "a": "Extensive sinus lifting and iliac crest bone grafting require 12 to 18 months of healing with high failure and resorption rates. Zygomatic implants bypass the maxillary sinus completely, eliminating bone graft surgery and allowing same-day fixed teeth in 24 to 48 hours."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma combines 2 zygomatic implants in the posterior cheekbones with 2 to 4 conventional implants in the anterior upper jaw. Quad Zygoma uses 4 zygomatic implants (2 on each cheekbone) when there is total bone loss in both the front and back of the upper jaw."
      },
      {
        "q": "Is Zygomatic implant surgery performed under general anesthesia or sedation?",
        "a": "At Master Smile Studio, zygomatic implant surgeries are performed under conscious IV sedation or general anesthesia in our surgical operating suites, administered by a specialist anesthesiologist for complete comfort, zero pain, and zero surgical anxiety."
      },
      {
        "q": "Will I be left without teeth during the healing period?",
        "a": "Never. Because the cheekbone provides exceptionally high initial insertion torque (>45–65 Ncm), a rigid, screw-retained fixed temporary acrylic/PMMA bridge is securely attached within 24 to 48 hours after surgery."
      },
      {
        "q": "What are the risks to the maxillary sinus or facial nerves?",
        "a": "When performed by skilled maxillofacial surgeons using 3D CBCT navigation and extra-sinus surgical protocols, zygomatic implants have a 97–98% success rate. The facial motor nerves are located far superficial to the surgical trajectory and remain completely untouched."
      },
      {
        "q": "What is the post-operative recovery timeline for Zygomatic surgery?",
        "a": "Mild to moderate facial swelling and bruising around the cheeks is normal for 4 to 6 days. Most international patients feel comfortable exploring Istanbul by day 3, managed with prescribed analgesics and cold compresses."
      },
      {
        "q": "How are permanent teeth attached after 3 to 6 months?",
        "a": "Once the zygomatic implants achieve complete osseointegration with the cheekbone, high-precision 3D intraoral scans capture the soft tissue contours. A 1200+ MPa monolithic multilayer German zirconia bridge on a custom titanium substructure is fabricated and permanently screwed into place."
      },
      {
        "q": "Can Zygomatic Implants fail or loosen?",
        "a": "Zygomatic bone possesses the highest bone mineral density in the craniofacial skeleton. Scientific studies demonstrate a 97.8% long-term survival rate over 20+ years, significantly outperforming conventional implants placed in grafted sinuses."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul to complete 3D CBCT diagnostics, surgery, and immediate placement of your fixed temporary bridge. After 3 to 6 months of healing, you return for a 5-day visit to receive your permanent monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic package?",
        "a": "Our all-inclusive packages cover all zygomatic and conventional implants, surgical operating room fees, anesthesiologist fees, 3D CBCT scans, fixed temporary teeth, permanent zirconia bridge, 5-star hotel accommodations, and private VIP Mercedes airport/clinic transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you use?",
        "a": "We exclusively utilize globally recognized, clinically certified zygomatic systems including Nobel Biocare (NobelZygoma), Straumann Group, Noris Medical, and Southern Implants, each accompanied by an authentic international manufacturer certificate."
      },
      {
        "q": "Why are Zygomatic Implants 60%–70% more affordable in Turkey than the UK or Germany?",
        "a": "Lower clinic operating overheads, competitive laboratory manufacturing costs in Istanbul, and favorable currency exchange rates allow us to provide genuine Swiss and German zygomatic systems at a fraction of Western European clinic prices without compromising surgical quality."
      },
      {
        "q": "What guarantees and manufacturer warranties are provided?",
        "a": "All zygomatic titanium fixtures come with an official Lifetime International Manufacturer Warranty and a medical passport. Master Smile Studio also provides a clinical warranty covering laboratory prosthetics and surgical follow-up."
      },
      {
        "q": "Can I combine Zygomatic surgery with Pterygoid implants?",
        "a": "Yes. For patients with total resorption of the posterior maxilla, our maxillofacial surgeons frequently combine zygomatic fixtures with pterygoid implants anchored into the pterygomaxillary plate for optimal biomechanical cantilever elimination."
      },
      {
        "q": "How do I start the consultation process before traveling from abroad?",
        "a": "Simply send your recent 3D CBCT tomographic scan or panoramic X-ray via WhatsApp. Our chief oral & maxillofacial surgeon will formulate a comprehensive 3D digital surgical treatment plan and fixed price quotation within 24 hours."
      }
    ]
  }
};

export default function ZygomaticImplantDetailView() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');

  return (
    <div className={styles.wrapper}>
      {/* 1. CLINICAL INTRODUCTION & CRANIOFACIAL ANATOMY */}
      <section aria-labelledby="zygoma-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="zygoma-intro-heading" className={styles.introHeading}>
            {d.introTitle}
          </h2>
          <p className={styles.introLead}>{d.introLead}</p>

          <p className={styles.textP}>{d.introP1}</p>
          <p className={styles.textP}>{d.introP2}</p>

          <p className={styles.textItalic}>
            {d.introP3Lead}
            <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.linkGold}>
              {d.introP3LinkAll4}
            </Link>
            {d.introP3Mid}
            <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.linkGold}>
              {d.introP3LinkAll6}
            </Link>
            {d.introP3And}
            <Link href="/treatments/dental-implants/sinus-lifting" className={styles.linkGold}>
              {d.introP3LinkSinus}
            </Link>
            {d.introP3Tail}
          </p>

          {/* Full-width 16:9 Clinical Zygomatic Procedure Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/8eWp4R1vI5o"
              title="Zygomatic Dental Implants in Istanbul Clinical Procedure"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 1.5 CANDIDACY & CLINICAL INDICATION CHECKLIST */}
          <div className={styles.candidacySection}>
            <div className={styles.candidacyHeader}>
              <h3 className={styles.candidacyTitle}>{d.candidacyTitle}</h3>
              <p className={styles.candidacySubtitle}>{d.candidacySubtitle}</p>
            </div>

            <div className={styles.candidacyGrid}>
              {d.candidacyPoints.map((item, idx) => (
                <div key={idx} className={styles.candidacyCard}>
                  <strong className={styles.candidacyCardTitle}>{item.title}</strong>
                  <span className={styles.candidacyCardDesc}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. OBJECTIVE COMPARISON: QUAD ZYGOMA vs HYBRID ZYGOMA vs COMPLEX SINUS GRAFTING */}
      <section aria-labelledby="zygoma-compare-heading" className={styles.compareSection}>
        <div className={styles.container}>
          <div className={styles.compareHeader}>
            <h2 id="zygoma-compare-heading" className={styles.compareTitle}>
              {d.compareTitle}
            </h2>
            <p className={styles.compareSubtitle}>{d.compareSubtitle}</p>
          </div>

          <div className={styles.compareTableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.compareTh}>{d.compareTableHeaders.criteria}</th>
                  <th className={styles.compareTh}>{d.compareTableHeaders.grafting}</th>
                  <th className={styles.compareTh}>{d.compareTableHeaders.hybrid}</th>
                  <th className={styles.compareThHighlight}>{d.compareTableHeaders.quad}</th>
                </tr>
              </thead>
              <tbody>
                {d.compareTableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className={styles.compareTd}>
                      <strong>{row.criteria}</strong>
                    </td>
                    <td className={styles.compareTd}>{row.grafting}</td>
                    <td className={styles.compareTd}>{row.hybrid}</td>
                    <td className={`${styles.compareTd} ${styles.compareTdHighlight}`}>
                      {row.quad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.compareDecisionBox}>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenGraftingTitle}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenGraftingText}</p>
            </div>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenZygomaticTitle}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenZygomaticText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-PHASE PRECISION PROTOCOL (HORIZONTAL PEEK CAROUSEL ON MOBILE) */}
      <section aria-labelledby="zygoma-process-heading" className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <h2 id="zygoma-process-heading" className={styles.processTitle}>
              {d.processTitle}
            </h2>
            <p className={styles.processSubtitle}>{d.processSubtitle}</p>
          </div>

          <div className={styles.processGrid}>
            {d.processCards.map((card, pIdx) => (
              <div key={pIdx} className={styles.processCard}>
                <div>
                  <span className={styles.processStepNum}>{card.step}</span>
                  <h3 className={styles.processCardTitle}>{card.title}</h3>
                  <p className={styles.processCardText}>{card.text}</p>
                </div>
                <div className={styles.processCardSpecs}>
                  {card.specs.map((sp, sIdx) => (
                    <div key={sIdx} className={styles.processSpecItem}>
                      <span className={styles.processSpecKey}>{sp.key}:</span>
                      <span className={styles.processSpecVal}>{sp.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PERMANENT BRIDGE MATERIALS COMPARISON */}
      <section aria-labelledby="zygoma-materials-heading" className={styles.materialsSection}>
        <div className={styles.container}>
          <div className={styles.materialsHeader}>
            <h2 id="zygoma-materials-heading" className={styles.materialsTitle}>
              {d.materialsTitle}
            </h2>
            <p className={styles.materialsSubtitle}>{d.materialsSubtitle}</p>
          </div>

          {/* 3 Material Cards */}
          <div className={styles.materialsGrid}>
            {d.materialsCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className={`${styles.materialCard} ${card.isGold ? styles.materialCardGold : ''}`}
              >
                {card.badge && (
                  <span className={styles.materialStandardBadge}>{card.badge}</span>
                )}

                <div>
                  <h3 className={styles.materialCardTitle}>{card.title}</h3>
                  <span className={styles.materialCardSub}>{card.sub}</span>

                  <div className={styles.materialSpecsBox}>
                    <div className={styles.materialSpecRow}>
                      <span className={styles.materialSpecLabel}>{d.materialsSpecLabels.material}</span>
                      <span className={card.isGold ? styles.materialSpecValGold : styles.materialSpecVal}>
                        {card.material}
                      </span>
                    </div>
                    <div className={styles.materialSpecRow}>
                      <span className={styles.materialSpecLabel}>{d.materialsSpecLabels.strength}</span>
                      <span className={card.isGold ? styles.materialSpecValGold : styles.materialSpecVal}>
                        {card.strength}
                      </span>
                    </div>
                    <div className={styles.materialSpecRow}>
                      <span className={styles.materialSpecLabel}>{d.materialsSpecLabels.chipping}</span>
                      <span className={card.isGold ? styles.materialSpecValGold : styles.materialSpecVal}>
                        {card.chippingRisk}
                      </span>
                    </div>
                    <div className={styles.materialSpecRow}>
                      <span className={styles.materialSpecLabel}>{d.materialsSpecLabels.lifespan}</span>
                      <span className={card.isGold ? styles.materialSpecValGold : styles.materialSpecVal}>
                        {card.lifespan}
                      </span>
                    </div>
                  </div>

                  <ul className={styles.materialList}>
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className={styles.materialListItem}>
                        <span
                          className={
                            feat.status === 'good'
                              ? styles.matCheck
                              : feat.status === 'bad'
                              ? styles.matCross
                              : styles.matWarn
                          }
                        >
                          {feat.status === 'good' ? '•' : feat.status === 'bad' ? '—' : '–'}
                        </span>
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Matrix Table */}
          <div className={styles.materialsTableWrap}>
            <table className={styles.materialsTable}>
              <thead>
                <tr>
                  <th className={styles.materialsTh}>{d.materialsTableHeaders.criteria}</th>
                  <th className={styles.materialsThGold}>{d.materialsTableHeaders.zirconia}</th>
                  <th className={styles.materialsTh}>{d.materialsTableHeaders.acrylic}</th>
                  <th className={styles.materialsTh}>{d.materialsTableHeaders.pfm}</th>
                </tr>
              </thead>
              <tbody>
                {d.materialsTableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className={styles.materialsTd}>
                      <strong>{row.criteria}</strong>
                    </td>
                    <td className={`${styles.materialsTd} ${styles.materialsTdHighlight}`}>
                      {row.zirconia}
                    </td>
                    <td className={styles.materialsTd}>{row.acrylic}</td>
                    <td className={styles.materialsTd}>{row.pfm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENT PACKAGES & DYNAMIC CURRENCY SWITCHER */}
      <section aria-labelledby="zygoma-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="zygoma-packages-heading" className={styles.packagesTitle}>
              {d.packagesTitle}
            </h2>
            <p className={styles.packagesSubtitle}>{d.packagesSubtitle}</p>
          </div>

          {/* Interactive Currency Switcher */}
          <div className={styles.currencyBar} role="group" aria-label="Select Currency">
            <span className={styles.currencyLabel}>Currency:</span>
            <button
              type="button"
              className={`${styles.currencyBtn} ${currency === 'EUR' ? styles.currencyBtnActive : ''}`}
              onClick={() => setCurrency('EUR')}
            >
              EUR (€)
            </button>
            <button
              type="button"
              className={`${styles.currencyBtn} ${currency === 'GBP' ? styles.currencyBtnActive : ''}`}
              onClick={() => setCurrency('GBP')}
            >
              GBP (£)
            </button>
            <button
              type="button"
              className={`${styles.currencyBtn} ${currency === 'USD' ? styles.currencyBtnActive : ''}`}
              onClick={() => setCurrency('USD')}
            >
              USD ($)
            </button>
          </div>

          {/* 6 Real Implant Brand Package Cards */}
          <div className={styles.pkgGrid}>
            {d.packages.map((pkg, pIdx) => (
              <div
                key={pIdx}
                className={`${styles.pkgCard} ${pkg.popular ? styles.pkgCardPopular : ''}`}
              >
                {pkg.popular && (
                  <span className={styles.popularBadge}>{d.mostPopularBadge}</span>
                )}

                <div>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                  <span className={styles.pkgBrand}>{pkg.brand}</span>

                  <div className={styles.pkgImageWrap}>
                    <img
                      src={pkg.img}
                      alt={pkg.name}
                      className={styles.pkgImage}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.pkgDurationRow}>
                    <span>{d.durationLabel}</span>
                    <span>{pkg.duration}</span>
                  </div>

                  <strong className={styles.pkgListTitle}>{d.includedLabel}</strong>

                  <ul className={styles.pkgList}>
                    {pkg.included.map((inc, iIdx) => (
                      <li key={iIdx} className={styles.pkgListItem}>
                        <span className={styles.pkgCheck}>✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.pkgFooter}>
                  <div className={styles.pkgPriceRow}>
                    <span className={styles.pkgPriceLabel}>{d.pricePerArchLabel}</span>
                    <strong className={styles.pkgPriceValue}>
                      {pkg.price[currency]}
                    </strong>
                  </div>

                  <a
                    href="#js_target1"
                    className={`${styles.pkgCtaBtn} ${pkg.popular ? styles.pkgCtaBtnPopular : ''}`}
                  >
                    <span>{d.getQuoteBtn}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERNATIONAL COST COMPARISON SECTION (UK / GERMANY vs ISTANBUL) */}
      <section aria-labelledby="zygoma-cost-heading" className={styles.costSection}>
        <div className={styles.container}>
          <div className={styles.costHeader}>
            <h2 id="zygoma-cost-heading" className={styles.costTitle}>
              {d.costTitle}
            </h2>
            <p className={styles.costSubtitle}>{d.costSubtitle}</p>
          </div>

          <div className={styles.costTableWrap}>
            <table className={styles.costTable}>
              <thead>
                <tr>
                  <th className={styles.costTh}>{d.costTableHeaders.country}</th>
                  <th className={styles.costTh}>{d.costTableHeaders.costPerArch}</th>
                  <th className={styles.costTh}>{d.costTableHeaders.inclusions}</th>
                  <th className={styles.costThHighlight}>{d.costTableHeaders.valueAdvantage}</th>
                </tr>
              </thead>
              <tbody>
                {d.costTableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className={styles.costTd}>
                      <strong>{row.country}</strong>
                    </td>
                    <td className={styles.costTd}>
                      <strong>{row.costPerArch}</strong>
                    </td>
                    <td className={styles.costTd}>{row.inclusions}</td>
                    <td className={`${styles.costTd} ${styles.costTdHighlight}`}>
                      {row.valueAdvantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. REUSABLE: SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 8. REUSABLE: CLINIC TOUR */}
      <TreatmentClinicTourSection placeholderNum="ZYG-TOUR" />

      {/* 9. REUSABLE: FOUNDING SURGEONS */}
      <TreatmentDoctorsSection />

      {/* 10. BEFORE & AFTER TRANSFORMATIONS GALLERY */}
      <TreatmentBeforeAfterSliderSection />

      {/* 11. REVIEWS & TRUSTPILOT / GOOGLE 5-STAR */}
      <TreatmentReviewsSection />

      {/* 12. REUSABLE: PARALLAX BANNER */}
      <TreatmentParallaxBanner />

      {/* 13. REUSABLE: PATIENT VIDEO REELS */}
      <TreatmentPatientReelsSection />

      {/* 14. REUSABLE: DENTAL JOURNEY TIMELINE */}
      <TreatmentJourneySimpleSection />

      {/* 15. MASTER 17-QUESTION FAQ SECTION (CLINICAL & HEALTH TOURISM) */}
      <section aria-labelledby="zygoma-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="zygoma-faq-heading" className={styles.faqTitle}>
              {d.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{d.faqSubtitle}</p>
          </div>

          {/* CLINICAL ZYGOMATIC FAQS (10 QUESTIONS) */}
          <div className={styles.faqCategoryGroup}>
            <h3 className={styles.faqCategoryTitle}>
              {d.faqGroup1Title}
            </h3>

            <div className={styles.faqList}>
              {d.faqsPart1.map((faq, fIdx) => {
                const globalIdx = fIdx;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div
                    key={fIdx}
                    className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className={styles.faqQuestionBtn}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`${styles.faqToggleIcon} ${isOpen ? styles.faqToggleIconOpen : ''}`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* HEALTH TOURISM, INCLUSIONS & WARRANTY FAQS (7 QUESTIONS) */}
          <div className={styles.faqCategoryGroup}>
            <h3 className={styles.faqCategoryTitle}>
              {d.faqGroup2Title}
            </h3>

            <div className={styles.faqList}>
              {d.faqsPart2.map((faq, fIdx) => {
                const globalIdx = 100 + fIdx;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div
                    key={fIdx}
                    className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className={styles.faqQuestionBtn}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`${styles.faqToggleIcon} ${isOpen ? styles.faqToggleIconOpen : ''}`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 16. LET'S CREATE YOUR PERFECT SMILE PLAN (4-STEP INTERACTIVE QUOTE FUNNEL) */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Zygomatic Implants" />
    </div>
  );
}
