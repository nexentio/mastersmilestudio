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
import styles from './ImmediateImplantDetailView.module.css';

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
  emax: string;
  pfm: string;
}

interface CompareTableRow {
  criteria: string;
  delayed: string;
  placementOnly: string;
  immediate: string;
}

interface ProcessCardItem {
  step: string;
  title: string;
  text: string;
  specs: { key: string; val: string }[];
}

interface CostTableRow {
  country: string;
  costPerUnit: string;
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
  introP3LinkZirconium: string;
  introP3Tail: string;

  compareTitle: string;
  compareSubtitle: string;
  compareTableHeaders: {
    criteria: string;
    delayed: string;
    placementOnly: string;
    immediate: string;
  };
  compareTableRows: CompareTableRow[];
  compareDecision: {
    whenDelayedTitle: string;
    whenDelayedText: string;
    whenImmediateTitle: string;
    whenImmediateText: string;
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
    emax: string;
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
    costPerUnit: string;
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
    "introBadge": "SAME-DAY EXTRACTION & IMMEDIATE LOADING",
    "introTitle": "Immediate Dental Implants in Istanbul: Same-Day Tooth Extraction & Implantation",
    "introLead": "Eliminate 3–6 months of waiting with computer-guided immediate socket implantation—extracting damaged teeth, inserting high-torque titanium fixtures, and attaching aesthetic fixed temporary crowns in a single clinical visit.",
    "introP1": "Immediate dental implant placement (Type 1 ITI Consensus) is the gold standard for preserving natural alveolar bone architecture and interdental gum papillae. Instead of waiting for an extraction socket to heal and collapse over 3–6 months, our oral surgeons place a precision titanium implant directly into the fresh alveolus, bone-grafting any micro-gap with biocompatible granules and sealing the site with an aesthetic fixed crown.",
    "introP2": "Using 3D CBCT tomographic mapping and Swiss/German implant geometries with aggressive apical cutting threads, we achieve primary insertion torque values exceeding 35–50 Ncm. This superior initial stability allows safe immediate temporary restoration, ensuring you never leave Master Smile Studio with a missing tooth or an uncomfortable removable flipper.",
    "introP3Lead": "For patients with multiple missing teeth or full-arch terminal dentition, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkZirconium": "Zirconium Crowns & Bridges",
    "introP3Tail": " for comprehensive aesthetic rehabilitation in Istanbul.",
    "compareTitle": "Objective Clinical Comparison: Immediate Loading vs. Delayed Protocols",
    "compareSubtitle": "A scientific analysis of clinical timelines, alveolar bone preservation, and aesthetic outcomes across implant placement modalities.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "delayed": "Conventional Delayed (3–6 Mo)",
      "placementOnly": "Immediate Placement (Delayed Crown)",
      "immediate": "Immediate Loading (Same-Day Fixed) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Surgical Appointments",
        "delayed": "2–3 separate surgical procedures",
        "placementOnly": "2 surgical stages (extraction + uncover)",
        "immediate": "1 single appointment (Extraction + Implant + Temp)"
      },
      {
        "criteria": "Total Treatment Timeline",
        "delayed": "6–9 months total duration",
        "placementOnly": "3–4 months osseointegration",
        "immediate": "24–48 hours for fixed teeth (Final at 3 Mo)"
      },
      {
        "criteria": "Alveolar Bone Preservation",
        "delayed": "30–50% bone resorption in 6 months",
        "placementOnly": "High bone retention in socket",
        "immediate": "Maximum preservation of bone & gum papillae"
      },
      {
        "criteria": "Period with Missing Teeth",
        "delayed": "3–6 months with removable denture/gap",
        "placementOnly": "3 months with removable temp",
        "immediate": "0 Days (Fixed aesthetic crown in 24 hrs)"
      },
      {
        "criteria": "Primary Torque Requirement",
        "delayed": "Standard (20–30 Ncm)",
        "placementOnly": "Moderate (25–35 Ncm)",
        "immediate": "High (35–50 Ncm, ISQ > 70 required)"
      },
      {
        "criteria": "Soft Tissue Aesthetic Contour",
        "delayed": "Often requires gum grafting / re-contouring",
        "placementOnly": "Natural emergence profile preserved",
        "immediate": "Immediate support of natural gum scallops"
      },
      {
        "criteria": "Ideal Patient Candidate",
        "delayed": "Severe acute abscess, poor bone quality",
        "placementOnly": "Mild chronic site, moderate torque",
        "immediate": "Fractured front tooth, premolars, high aesthetics"
      }
    ],
    "compareDecision": {
      "whenDelayedTitle": "When is Conventional Delayed Placement Clinically Necessary?",
      "whenDelayedText": "Conventional delayed placement is advised when there is an active, acute purulent infection at the root apex, severe periodontal bone destruction, or when initial implant torque cannot reach the 35 Ncm threshold.",
      "whenImmediateTitle": "When is Same-Day Immediate Loading the Gold Standard?",
      "whenImmediateText": "Immediate loading is the premier choice for fractured anterior incisors, cracked premolars, or single-rooted teeth where bone density is intact and immediate smile aesthetics are non-negotiable."
    },
    "processTitle": "3-Phase Precision Immediate Loading Protocol: From CBCT to Final Zirconia",
    "processSubtitle": "Every immediate implant at Master Smile Studio follows a strict computer-guided surgical workflow to ensure 98.2% osseointegration success.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Socket Mapping & Virtual Surgical Stent",
        "text": "High-resolution 3D tomography evaluates apical bone volume beyond the root apex, nerve channels, and socket walls. A computer-generated surgical guide determines the exact 3D entry angle and depth.",
        "specs": [
          {
            "key": "CBCT Resolution",
            "val": "< 0.1 mm precision"
          },
          {
            "key": "Bone Analysis",
            "val": "Apical & Palatal Density"
          },
          {
            "key": "Guide Accuracy",
            "val": "Virtual Guided Stent"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Atraumatic Extraction & High-Torque Implantation (Day 1)",
        "text": "The compromised tooth is removed atraumatically using micro-periotomes without damaging alveolar bone plates. The implant is anchored at 35–50 Ncm, any gap is grafted, and an aesthetic fixed crown is secured in 24h.",
        "specs": [
          {
            "key": "Extraction Method",
            "val": "Atraumatic Periotome"
          },
          {
            "key": "Insertion Torque",
            "val": "35 – 50 Ncm (ISQ > 70)"
          },
          {
            "key": "Temporary Crown",
            "val": "Screw-Retained Fixed in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Multilayer Zirconia Final Restoration",
        "text": "After 3 months of seamless osseointegration, a 3D intraoral digital impression captures the healed emergence profile. A 1200+ MPa monolithic multilayer German zirconia crown is robotically milled and glazed.",
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
            "key": "Abutment",
            "val": "Custom Titanium Platform-Switch"
          }
        ]
      }
    ],
    "materialsTitle": "Immediate Implant Crown Materials: Why Monolithic Zirconia Wins",
    "materialsSubtitle": "Comparing biological biocompatibility, flexural strength, and long-term chipping resistance for single-tooth and bridge restorations.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "CAD/CAM Solid Zirconia on Custom Titanium Abutment",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "100% Multi-layered German Zirconia (1200+ MPa)",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Exceptional bio-compatibility with peri-implant gum tissue",
            "status": "good"
          },
          {
            "text": "Natural multi-layer light translucency matching adjacent teeth",
            "status": "good"
          },
          {
            "text": "Custom platform-switched titanium abutment prevents micro-gaps",
            "status": "good"
          },
          {
            "text": "Completely stain-resistant against coffee, tea, and tobacco",
            "status": "good"
          }
        ]
      },
      {
        "title": "Lithium Disilicate (E-Max Ceramic)",
        "sub": "Glass-Ceramic Crown for High-Aesthetic Anterior Zone",
        "badge": "Anterior Incisor Specialist",
        "isGold": false,
        "material": "Pressed / Milled Lithium Disilicate Glass Ceramic",
        "strength": "500 MPa (Excellent for Front Teeth)",
        "chippingRisk": "Low (Suitable for non-bruxist anterior cases)",
        "lifespan": "15 – 20 Years",
        "features": [
          {
            "text": "Highest optical translucency and opalescent vitality",
            "status": "good"
          },
          {
            "text": "Seamless aesthetic blending on single central or lateral incisors",
            "status": "good"
          },
          {
            "text": "Lower flexural strength than zirconia; not suited for heavy molars",
            "status": "warn"
          },
          {
            "text": "Susceptible to fractures under heavy nocturnal grinding",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Traditional Cast Metal Substructure with Baked Porcelain",
        "badge": "Legacy Standard",
        "isGold": false,
        "material": "Cast Cobalt-Chromium Alloy + Feldspathic Porcelain",
        "strength": "400 – 450 MPa",
        "chippingRisk": "Moderate to High (Porcelain delamination risk)",
        "lifespan": "10 – 15 Years",
        "features": [
          {
            "text": "Lower manufacturing cost",
            "status": "good"
          },
          {
            "text": "Dark metal margin may show over time if gums recede",
            "status": "bad"
          },
          {
            "text": "Porcelain layer prone to chipping under occlusal stress",
            "status": "bad"
          },
          {
            "text": "Opaque inner metal core blocks natural light transmission",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "emax": "E-Max Ceramic",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "emax": "500 MPa (High)",
        "pfm": "400 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Chipping / Delamination Risk",
        "zirconia": "0% (Solid homogeneous structure)",
        "emax": "Very Low in anterior zone",
        "pfm": "High (Porcelain breaks off metal)"
      },
      {
        "criteria": "Gum Margin Aesthetics",
        "zirconia": "Warm tooth-colored gingival collar",
        "emax": "Translucent aesthetic collar",
        "pfm": "Dark grey metallic shadow line"
      },
      {
        "criteria": "Digital CAD/CAM Robotic Milling",
        "zirconia": "5-axis robotic precision (< 5 µm)",
        "emax": "Precision ceramic milling",
        "pfm": "Manual casting and hand-layering"
      },
      {
        "criteria": "Heavy Molar & Chewing Suitability",
        "zirconia": "100% Unrestricted bite force (600+ N)",
        "emax": "Limited to premolars and incisors",
        "pfm": "Moderate (Prone to cusp fractures)"
      },
      {
        "criteria": "Expected Clinical Longevity",
        "zirconia": "Lifetime Guarantee",
        "emax": "15 – 20 Years",
        "pfm": "10 – 15 Years"
      }
    ],
    "packagesTitle": "Immediate Implant Packages & Dynamic Currency Calculator",
    "packagesSubtitle": "Complete all-inclusive packages per single tooth or multi-unit restoration with authentic Swiss, German, and international implants.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Unit (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "NucleOSS T6 Active Package",
        "brand": "NucleOSS Dental Systems (Grade 4 Pure Titanium)",
        "duration": "4-5 Days in Istanbul (2 Visits Total)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€490",
          "GBP": "£420",
          "USD": "$540"
        },
        "included": [
          "NucleOSS T6 high-stability titanium implant fixture",
          "Atraumatic tooth extraction & socket debridement",
          "Same-day fixed aesthetic temporary crown",
          "Custom Titanium Platform-Switched Abutment",
          "Permanent CAD/CAM Monolithic Zirconia Crown",
          "3D CBCT Panoramic Tomography & digital scans",
          "VIP Airport & Clinic Transfer included"
        ]
      },
      {
        "name": "DXL German Active Package",
        "brand": "DXL Dental Precision (German Medical Grade Titanium)",
        "duration": "4-5 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€690",
          "GBP": "£590",
          "USD": "$760"
        },
        "included": [
          "DXL German Active aggressive-thread implant fixture",
          "Atraumatic extraction & Bio-Oss socket preservation",
          "24-Hour fixed aesthetic temporary crown",
          "Custom German titanium precision abutment",
          "100% Multilayer German Zirconia permanent crown",
          "3D CBCT & computer-guided surgical stent",
          "Lifetime International Manufacturer Warranty",
          "VIP Private Transfers & 5-Star Hotel Stay included"
        ]
      },
      {
        "name": "Straumann BLX / SLActive Package",
        "brand": "Straumann Group (Switzerland - Roxolid & SLActive)",
        "duration": "4-5 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€950",
          "GBP": "£815",
          "USD": "$1,050"
        },
        "included": [
          "Straumann BLX dynamic bone-engagement implant",
          "Hydrophilic SLActive surface for 3-4 week osseointegration",
          "Atraumatic extraction & platelet-rich PRF socket healing",
          "Same-day fixed temporary aesthetic restoration",
          "Original Straumann Gold-hue custom titanium abutment",
          "Bespoke 1200+ MPa Monolithic Multilayer Zirconia Crown",
          "Lifetime Global Straumann Passport & Warranty",
          "VIP Private Chauffeur & Luxury 5-Star Hotel included"
        ]
      },
      {
        "name": "Megagen AnyRidge Package",
        "brand": "Megagen International (Knife-Thread Technology)",
        "duration": "4-5 Days in Istanbul (2 Visits Total)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€790",
          "GBP": "£675",
          "USD": "$870"
        },
        "included": [
          "Megagen AnyRidge progressive condensing thread implant",
          "Exceptional primary stability in soft extraction sockets",
          "Same-day immediate temporary aesthetic crown",
          "Custom precision titanium abutment",
          "Monolithic Multilayer German Zirconia Crown",
          "3D CBCT diagnostics & surgical guide",
          "Lifetime Manufacturer Warranty Passport",
          "VIP Transfer & 5-Star Hotel Accommodations"
        ]
      },
      {
        "name": "Neodent Grand Morse Package",
        "brand": "Neodent by Straumann Group (Brazil / Switzerland)",
        "duration": "4-5 Days in Istanbul (2 Visits Total)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€720",
          "GBP": "£620",
          "USD": "$790"
        },
        "included": [
          "Neodent Helix Grand Morse conical seal implant",
          "Zero micro-movement deep Morse taper connection",
          "Atraumatic extraction & immediate socket grafting",
          "Same-day fixed aesthetic temporary crown",
          "Custom Neodent Grand Morse titanium abutment",
          "Permanent CAD/CAM Monolithic Zirconia Crown",
          "Lifetime International Manufacturer Warranty",
          "VIP Transport & 5-Star Hotel Stay included"
        ]
      },
      {
        "name": "Hiossen ETIII Active Package",
        "brand": "Hiossen Dental USA (Sandblasted SA Surface)",
        "duration": "4-5 Days in Istanbul (2 Visits Total)",
        "img": "/packages/hiossen.webp",
        "price": {
          "EUR": "€750",
          "GBP": "£645",
          "USD": "$825"
        },
        "included": [
          "Hiossen ETIII Active bio-friendly surface implant",
          "Superior insertion torque in compromised bone",
          "Same-day aesthetic temporary crown fitting",
          "Custom Hiossen platform-switched titanium abutment",
          "Permanent Multilayer Monolithic Zirconia Crown",
          "3D CBCT Tomography & digital guided surgery",
          "Lifetime International Warranty & Passport",
          "VIP Airport Transfers & Luxury Hotel Partner"
        ]
      }
    ],
    "costTitle": "International Cost Comparison: Immediate Implants (UK / Germany vs Istanbul)",
    "costSubtitle": "Compare real clinical costs per single immediate tooth replacement including extraction, abutment, temporary crown, and permanent zirconia restoration.",
    "costTableHeaders": {
      "country": "Location & Clinic",
      "costPerUnit": "Average Cost per Tooth",
      "inclusions": "Package Coverage & Services",
      "valueAdvantage": "Cost Advantage / Savings"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Private Harley St / London)",
        "costPerUnit": "£2,200 – £3,200 ($2,800 – $4,100)",
        "inclusions": "Implant fixture & basic crown only. CBCT (£150), extraction (£200), and temporary crown (£350) charged separately.",
        "valueAdvantage": "Baseline UK Market Cost"
      },
      {
        "country": "Germany (Berlin / Frankfurt Private Clinics)",
        "costPerUnit": "€2,000 – €2,900 ($2,200 – $3,200)",
        "inclusions": "Implant and crown only. Diagnostic tomography, surgical guide, and temporary teeth billed as additional hospital line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerUnit": "€490 – €950 (£420 – £815)",
        "inclusions": "100% All-Inclusive: 3D CBCT, atraumatic extraction, temporary crown, custom titanium abutment, monolithic zirconia crown, VIP transfer & 5-star hotel.",
        "valueAdvantage": "65% – 75% Net Savings (Swiss/German Quality)"
      }
    ],
    "faqTitle": "Frequently Asked Questions: Immediate Dental Implants",
    "faqSubtitle": "Clear, clinically validated answers regarding same-day extraction, immediate temporary crowns, and our health tourism process in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical FAQ (Same-Day Protocol)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is an immediate dental implant (Same-Day Implant)?",
        "a": "An immediate dental implant is a surgical technique where a high-stability titanium implant is placed into the extraction socket immediately following tooth removal during the same appointment, often fitted with a fixed temporary aesthetic crown within 24 hours."
      },
      {
        "q": "Am I a candidate for same-day immediate dental implants?",
        "a": "Ideal candidates possess sufficient apical and palatal bone density, healthy surrounding gingival tissues, and no acute purulent infection at the root apex. A 3D CBCT scan at our clinic determines exact eligibility."
      },
      {
        "q": "How does immediate implant placement prevent bone loss?",
        "a": "Standard tooth extraction causes 30–50% alveolar bone resorption within 6 months. Placing an immediate implant preserves the natural socket architecture, maintains gum papilla height, and prevents facial soft-tissue collapse."
      },
      {
        "q": "Can I eat immediately with the same-day temporary crown?",
        "a": "The temporary crown is intentionally sculpted out of direct occlusal contact (out of bite) to protect early bone osseointegration. You can eat a nutritious soft-chew diet comfortably while avoiding direct hard biting on the implant."
      },
      {
        "q": "Is immediate implant surgery painful?",
        "a": "The procedure is performed under painless local anesthesia or conscious sedation. Because the natural extraction socket is utilized, there is minimal surgical flap reflection, resulting in less post-operative swelling and faster recovery than delayed surgery."
      },
      {
        "q": "What insertion torque is required for immediate loading?",
        "a": "A minimum primary insertion torque of 35–45 Ncm and an ISQ (Implant Stability Quotient) reading above 70 are required to safely attach a same-day fixed temporary crown without micro-motion risk."
      },
      {
        "q": "What happens if bone density is insufficient for immediate loading?",
        "a": "If primary stability is below 35 Ncm, the implant is still placed immediately into the socket with bone graft, but covered with a healing abutment under the gum for 3 months to protect healing, while an aesthetic temporary flipper is provided."
      },
      {
        "q": "What materials are used for the permanent crown?",
        "a": "After 3 months of osseointegration, we mill 100% custom Monolithic Multilayer German Zirconia (1200+ MPa) or anterior Swiss E-Max ceramic on a custom titanium platform-switched abutment."
      },
      {
        "q": "Can immediate implants be used for full-mouth restorations?",
        "a": "Yes, full-arch extraction and immediate loading (All-on-4 or All-on-6) utilize the exact same immediate placement protocol, allowing complete same-day fixed full-arch bridges."
      },
      {
        "q": "How long do immediate dental implants last?",
        "a": "With proper oral hygiene and routine check-ups, clinical literature confirms that immediate implants have a 98.2% long-term success rate comparable to conventional delayed implants, lasting a lifetime."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for immediate implants?",
        "a": "The first stage requires a 4-to-5 day stay in Istanbul for 3D CBCT diagnostics, extraction, guided implant placement, and fitting of your fixed temporary crown. The final zirconia restoration is completed during a second 5-day visit 3 months later."
      },
      {
        "q": "Are airport transfers and 5-star hotel accommodations included?",
        "a": "Yes, our treatment packages include private VIP airport transfers, executive city clinic transport, and luxury 5-star hotel partner accommodation throughout your stay."
      },
      {
        "q": "What international warranty is provided for immediate implants?",
        "a": "All our premium titanium implants (Straumann, DXL German, NucleOSS, Megagen) carry an international Lifetime Manufacturer Warranty with authentic serial passports and QR verification."
      },
      {
        "q": "Can I get a virtual consultation before booking my flights?",
        "a": "Yes! Send us your existing dental X-rays or photos via WhatsApp. Our oral surgeons will provide a preliminary 3D evaluation and guaranteed all-inclusive quotation within 24 hours."
      },
      {
        "q": "Why are immediate implants in Turkey significantly more affordable than in the UK or Germany?",
        "a": "Lower operational clinic overheads, competitive laboratory costs, and favorable exchange rates in Turkey allow us to deliver Swiss and German medical technology at 60–75% lower costs with zero compromise on clinical quality."
      },
      {
        "q": "What medications and aftercare support are provided?",
        "a": "We provide a complete post-operative care package including premium antibiotics, anti-inflammatories, antiseptic chlorhexidine rinses, and 24/7 dedicated patient coordinator support in your language."
      },
      {
        "q": "What payment methods do you accept at the clinic?",
        "a": "We accept all major credit/debit cards (Visa, MasterCard), bank wire transfers, and cash in EUR, GBP, USD, or TRY with official itemized invoices."
      }
    ]
  },
  "tr": {
    "introBadge": "TEK SEANSTA ÇEKİM VE AYNI GÜN İMPLANT",
    "introTitle": "İstanbul Aynı Gün İmplant Tedavisi: Çekim, İmplant ve Sabit Diş Tek Günde",
    "introLead": "Diş çekimi sonrası 3–6 ay beklemeye son: Çekilen dişin yuvasına anında yüksek tutuculuklu titanyum implant yerleştirilir ve 24 saat içinde geçici sabit estetik kuronunuz takılır.",
    "introP1": "Aynı gün implant (Immediate Implant / Tip 1 İmplantasyon), diş çekimi ile kemik kaybı yaşanmadan soketin doğal anatomisini ve diş eti papillerini koruyan altın standarttır. Çekim boşluğu erimeden, çene cerrahlarımız titanyum gövdeyi doğrudan sokete yerleştirir, mikro boşlukları kemik tozuyla doldurur ve aynı seansta sabit geçici dişinizi takar.",
    "introP2": "Kliniğimizde 3D Tomografi (CBCT) kılavuzluğunda uygulanan agresif yivli İsviçre ve Alman implant geometrileri ile 35–50 Ncm üzerinde primer tutuculuk elde edilir. Bu yüksek stabilite sayesinde asla dişsiz kalmadan, sosyal hayatınıza ara vermeden kliniğimizden yeni dişinizle ayrılırsınız.",
    "introP3Lead": "Tüm çene diş eksikliklerinde ",
    "introP3LinkAll4": "All-on-4 İmplant Tedavisi",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 İmplant Tedavisi",
    "introP3And": " veya ",
    "introP3LinkZirconium": "Zirkonyum Diş Kaplama",
    "introP3Tail": " çözümlerimizi de inceleyebilirsiniz.",
    "compareTitle": "Objektif Klinik Karşılaştırma: Aynı Gün İmplant vs. Geleneksel Beklemeli Yöntem",
    "compareSubtitle": "İmplant yerleştirme ve yükleme protokollerinin kemik koruma, tedavi süresi ve estetik sonuçlar açısından bilimsel analizi.",
    "compareTableHeaders": {
      "criteria": "Klinik Parametre",
      "delayed": "Geleneksel Beklemeli (3–6 Ay)",
      "placementOnly": "Aynı Gün Çekim (Beklemeli Diş)",
      "immediate": "Aynı Gün Yükleme (24 Saatte Sabit) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Cerrahi Seans Sayısı",
        "delayed": "2–3 ayrı cerrahi operasyon",
        "placementOnly": "2 seans (Çekim + İmplant açma)",
        "immediate": "Tek cerrahi seans (Çekim + İmplant + Diş)"
      },
      {
        "criteria": "Toplam Tedavi Süresi",
        "delayed": "6–9 ay toplam bekleme",
        "placementOnly": "3–4 ay kemik kaynama süresi",
        "immediate": "24–48 saatte sabit diş (3 ayda kalıcı)"
      },
      {
        "criteria": "Çene Kemiğini Koruma",
        "delayed": "6 ayda %30–%50 kemik erimesi",
        "placementOnly": "Sokette yüksek kemik muhafazası",
        "immediate": "Maksimum kemik ve diş eti papil koruması"
      },
      {
        "criteria": "Dişsiz Geçirilen Süre",
        "delayed": "3–6 ay damak veya dişsizlik",
        "placementOnly": "3 ay hareketli geçici protez",
        "immediate": "0 Gün (24 saatte sabit estetik diş)"
      },
      {
        "criteria": "Gereken Primer Tork (Sıkma Gücü)",
        "delayed": "Standart (20–30 Ncm)",
        "placementOnly": "Orta (25–35 Ncm)",
        "immediate": "Yüksek (35–50 Ncm, ISQ > 70 şartı)"
      },
      {
        "criteria": "Diş Eti Estetik Formu",
        "delayed": "Genellikle diş eti nakli gerektirir",
        "placementOnly": "Doğal çıkış profili korunur",
        "immediate": "Doğal diş eti kavisleri anında desteklenir"
      },
      {
        "criteria": "İdeal Hasta Profili",
        "delayed": "Akut iltihaplı, kemik kaybı yüksek vaka",
        "placementOnly": "Hafif kronik vaka, orta tutuculuk",
        "immediate": "Kırık ön diş, küçük azı, yüksek estetik talep"
      }
    ],
    "compareDecision": {
      "whenDelayedTitle": "Geleneksel Beklemeli Yöntem Ne Zaman Gereklidir?",
      "whenDelayedText": "Kök ucunda aktif, akut iltihap ve apse varlığında, ileri kemik yıkımında veya implant primer torku 35 Ncm sınırına ulaşamadığında geleneksel bekleme yöntemi tercih edilir.",
      "whenImmediateTitle": "Aynı Gün İmplant Ne Zaman Üstün Çözümdür?",
      "whenImmediateText": "Ön kesici diş kırıkları, derin çürükler ve kemik hacmi sağlıklı olan tek veya çoklu diş kayıplarında asla dişsiz kalmak istemeyen hastalar için tartışmasız en konforlu yöntemdir."
    },
    "processTitle": "3 Aşamalı Hassas Protokol: 3D Tomografiden Kalıcı Zirkonyuma",
    "processSubtitle": "Master Smile Studio’da her aynı gün implant %98.2 kaynama başarısı için bilgisayarlı cerrahi kılavuzla uygulanır.",
    "processCards": [
      {
        "step": "AŞAMA 01",
        "title": "3D Tomografi ve Bilgisayarlı Cerrahi Kılavuz",
        "text": "Yüksek çözünürlüklü 3D Tomografi (CBCT) ile kök çevresindeki kemik hacmi, sinir kanalları ve soket duvarları taranır. Bilgisayar destekli özel cerrahi rehber hazırlanır.",
        "specs": [
          {
            "key": "CBCT Hassasiyeti",
            "val": "< 0.1 mm netlik"
          },
          {
            "key": "Kemik Analizi",
            "val": "Apikal ve Palatal Yoğunluk"
          },
          {
            "key": "Rehber Doğruluğu",
            "val": "Sanal Cerrahi Stent"
          }
        ]
      },
      {
        "step": "AŞAMA 02",
        "title": "Travmasız Çekim ve Yüksek Torklu İmplant (1. Gün)",
        "text": "Sorunlu diş, kemik duvarlarına zarar vermeden mikro-periyotom aletleriyle travmasız çekilir. İmplant 35–50 Ncm torkla sabitlenir ve 24 saatte sabit geçici diş takılır.",
        "specs": [
          {
            "key": "Çekim Yöntemi",
            "val": "Atravmatik Periyotom"
          },
          {
            "key": "Yerleştirme Torku",
            "val": "35 – 50 Ncm (ISQ > 70)"
          },
          {
            "key": "Geçici Diş",
            "val": "24 Saatte Sabit Vidalı Kuron"
          }
        ]
      },
      {
        "step": "AŞAMA 03",
        "title": "Robotik CAD/CAM Monolitik Zirkonyum Kalıcı Diş",
        "text": "3 aylık kemik kaynama sürecinin ardından 3D dijital ağız içi tarama yapılır. 1200+ MPa monolitik çok katmanlı Alman zirkonyum kuron 5 eksenli robotik frezeyle üretilir.",
        "specs": [
          {
            "key": "Bükülme Direnci",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Malzeme",
            "val": "%100 Çok Katmanlı Alman Zirkonyum"
          },
          {
            "key": "Dayanak (Abutment)",
            "val": "Özel Titanyum Platform-Switch"
          }
        ]
      }
    ],
    "materialsTitle": "İmplant Üstü Kuron Malzemeleri: Neden Monolitik Zirkonyum?",
    "materialsSubtitle": "Biyouyumluluk, bükülme direnci ve kırılma dayanıklılığı açısından tek diş kuron malzemelerinin klinik karşılaştırması.",
    "materialsSpecLabels": {
      "material": "Malzeme Yapısı",
      "strength": "Bükülme Direnci",
      "chipping": "Kırılma / Atma Riski",
      "lifespan": "Klinik Ömür"
    },
    "materialsCards": [
      {
        "title": "Monolitik Çok Katmanlı Zirkonyum",
        "sub": "Özel Titanyum Dayanak Üzerine CAD/CAM Masif Zirkonyum",
        "badge": "Klinik Standartımız",
        "isGold": true,
        "material": "%100 Masif Çok Katmanlı Alman Zirkonyum (1200+ MPa)",
        "strength": "1200 – 1400 MPa (Kırılmaz Masif)",
        "chippingRisk": "%0 (Porselen atma riski sıfır)",
        "lifespan": "Ömür Boyu Dayanıklılık",
        "features": [
          {
            "text": "Diş etiyle mükemmel biyouyum, sıfır alerji ve iltihap riski",
            "status": "good"
          },
          {
            "text": "Doğal diş minesini taklit eden çok katmanlı ışık geçirgenliği",
            "status": "good"
          },
          {
            "text": "Özel titanyum dayanak ile mikro boşluk ve bakteri sızıntısı önlenir",
            "status": "good"
          },
          {
            "text": "Kahve, çay ve sigaraya karşı %100 leke tutmaz pürüzsüz yüzey",
            "status": "good"
          }
        ]
      },
      {
        "title": "Lityum Disilikat (E-Max Porselen)",
        "sub": "Ön Bölge Yüksek Estetik Cam Seramik Kuron",
        "badge": "Ön Diş Estetiği",
        "isGold": false,
        "material": "Frezlenmiş / Preslenmiş Lityum Disilikat Cam Seramik",
        "strength": "500 MPa (Ön Dişler İçin İdeal)",
        "chippingRisk": "Düşük (Ön bölge için güvenli)",
        "lifespan": "15 – 20 Yıl",
        "features": [
          {
            "text": "En yüksek doğal ışık geçirgenliği ve canlı opalesans",
            "status": "good"
          },
          {
            "text": "Tek ön kesici dişlerde kusursuz doğal uyum",
            "status": "good"
          },
          {
            "text": "Zirkonyuma göre daha düşük dayanım; arka azı dişlerine uygun değildir",
            "status": "warn"
          },
          {
            "text": "Gece diş sıkan (bruksizm) hastalarda kırılma riski taşır",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Metal Destekli Porselen (PFM)",
        "sub": "Metal Altyapı Üzerine Pişirilmiş Geleneksel Porselen",
        "badge": "Eski Standart",
        "isGold": false,
        "material": "Döküm Kobalt-Krom Metal + Feldspatik Porselen",
        "strength": "400 – 450 MPa",
        "chippingRisk": "Orta - Yüksek (Porselenin metalden ayrılması)",
        "lifespan": "10 – 15 Yıl",
        "features": [
          {
            "text": "Daha düşük üretim maliyeti",
            "status": "good"
          },
          {
            "text": "Diş eti çekildiğinde siyah metal kenar yansıması yapar",
            "status": "bad"
          },
          {
            "text": "Çiğneme baskısında porselen katman kırılabilir ve atabilir",
            "status": "bad"
          },
          {
            "text": "Işık geçirgenliği düşüktür, mat ve yapay görünebilir",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Karşılaştırma Kriteri",
      "zirconia": "Monolitik Zirkonyum ⭐",
      "emax": "E-Max Seramik",
      "pfm": "Metal Destekli Porselen (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Bükülme Direnci",
        "zirconia": "1200 – 1400 MPa (Kırılmaz)",
        "emax": "500 MPa (Yüksek)",
        "pfm": "400 – 450 MPa (Orta)"
      },
      {
        "criteria": "Porselen Atma / Kırılma Riski",
        "zirconia": "%0 (Masif homojen blok)",
        "emax": "Ön bölgede çok düşük",
        "pfm": "Yüksek (Porselen metalden kopar)"
      },
      {
        "criteria": "Diş Eti Sınırı Estetiği",
        "zirconia": "Sıcak doğal diş tonu çıkışı",
        "emax": "Şeffaf estetik çıkış",
        "pfm": "Gri metalik gölge çizgisi"
      },
      {
        "criteria": "Robotik CAD/CAM Üretim",
        "zirconia": "5 eksenli mikrometrik hassasiyet (< 5 µm)",
        "emax": "Hassas seramik frezeleme",
        "pfm": "Manuel döküm ve el işçiliği"
      },
      {
        "criteria": "Arka Azı ve Çiğneme Uygunluğu",
        "zirconia": "%100 Sınırsız çiğneme gücü (600+ N)",
        "emax": "Ön dişler ve küçük azılarla sınırlı",
        "pfm": "Orta (Çiğneme yüzeyi aşınabilir)"
      },
      {
        "criteria": "Beklenen Klinik Ömür",
        "zirconia": "Ömür Boyu Garanti",
        "emax": "15 – 20 Yıl",
        "pfm": "10 – 15 Yıl"
      }
    ],
    "packagesTitle": "Aynı Gün İmplant Paketleri ve Para Birimi Seçicisi",
    "packagesSubtitle": "Çekim, dayanak, geçici diş ve kalıcı zirkonyum kuron dahil şeffaf İsviçre ve Alman implant paketleri.",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket Kapsamı:",
    "pricePerArchLabel": "Diş Başına Fiyat (Her Şey Dahil):",
    "getQuoteBtn": "Ücretsiz Teklif Alın",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "packages": [
      {
        "name": "NucleOSS T6 Active Paketi",
        "brand": "NucleOSS Dental Systems (Grade 4 Saf Titanyum)",
        "duration": "İstanbul’da 4-5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€490",
          "GBP": "£420",
          "USD": "$540"
        },
        "included": [
          "NucleOSS T6 yüksek tutuculuklu titanyum implant",
          "Atravmatik diş çekimi ve soket temizliği",
          "Aynı gün sabit estetik geçici kuron",
          "Özel Titanyum Platform-Switched Dayanak",
          "Kalıcı CAD/CAM Monolitik Zirkonyum Kuron",
          "3D Tomografi (CBCT) ve dijital taramalar",
          "VIP Havalimanı ve Klinik Transferleri dahil"
        ]
      },
      {
        "name": "DXL German Active Paketi",
        "brand": "DXL Dental Precision (Alman Medikal Titanyum)",
        "duration": "İstanbul’da 4-5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€690",
          "GBP": "£590",
          "USD": "$760"
        },
        "included": [
          "DXL German Active agresif yivli titanyum implant",
          "Atravmatik çekim ve kemik grefti koruması",
          "24 Saatte sabit estetik geçici kuron",
          "Özel Alman titanyum hassas dayanak",
          "%100 Çok Katmanlı Alman Zirkonyum kalıcı diş",
          "3D Tomografi ve bilgisayarlı cerrahi kılavuz",
          "Ömür Boyu Uluslararası Üretici Garantisi",
          "VIP Transferler ve 5 Yıldızlı Otel dahil"
        ]
      },
      {
        "name": "Straumann BLX / SLActive Paketi",
        "brand": "Straumann Group (İsviçre - Roxolid & SLActive)",
        "duration": "İstanbul’da 4-5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€950",
          "GBP": "£815",
          "USD": "$1,050"
        },
        "included": [
          "Straumann BLX dinamik kemik tutucu implant",
          "3-4 haftada kaynayan hidrofilik SLActive yüzey",
          "Atravmatik çekim ve PRF doku iyileştirme",
          "Aynı gün sabit geçici estetik restorasyon",
          "Orijinal Straumann altın tonlu titanyum dayanak",
          "1200+ MPa Monolitik Çok Katmanlı Zirkonyum Diş",
          "Ömür Boyu Küresel Straumann Pasaportu",
          "Özel VIP Şoför ve Lüks 5 Yıldızlı Otel dahil"
        ]
      },
      {
        "name": "Megagen AnyRidge Paketi",
        "brand": "Megagen International (Bıçak Yiv Teknolojisi)",
        "duration": "İstanbul’da 4-5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€790",
          "GBP": "£675",
          "USD": "$870"
        },
        "included": [
          "Megagen AnyRidge kademeli kemik sıkıştırıcı implant",
          "Yumuşak çekim soketlerinde üstün tutuculuk",
          "Aynı gün anında geçici estetik kuron",
          "Özel hassas titanyum dayanak",
          "Monolitik Çok Katmanlı Alman Zirkonyum Kuron",
          "3D CBCT teşhis ve cerrahi kılavuz",
          "Ömür Boyu Üretici Garanti Pasaportu",
          "VIP Transfer ve 5 Yıldızlı Otel Konaklaması"
        ]
      },
      {
        "name": "Neodent Grand Morse Paketi",
        "brand": "Neodent by Straumann Group (Brezilya / İsviçre)",
        "duration": "İstanbul’da 4-5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€720",
          "GBP": "£620",
          "USD": "$790"
        },
        "included": [
          "Neodent Helix Grand Morse konik kilitli implant",
          "Sıfır mikro hareket derin Morse konik bağlantı",
          "Atravmatik çekim ve soket greftleme",
          "Aynı gün sabit estetik geçici kuron",
          "Özel Neodent Grand Morse titanyum dayanak",
          "Kalıcı CAD/CAM Monolitik Zirkonyum Kuron",
          "Ömür Boyu Uluslararası Üretici Garantisi",
          "VIP Ulaşım ve 5 Yıldızlı Otel dahil"
        ]
      },
      {
        "name": "Hiossen ETIII Active Paketi",
        "brand": "Hiossen Dental USA (Kumlama SA Yüzey)",
        "duration": "İstanbul’da 4-5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/hiossen.webp",
        "price": {
          "EUR": "€750",
          "GBP": "£645",
          "USD": "$825"
        },
        "included": [
          "Hiossen ETIII Active biyouyumlu yüzey implant",
          "Yetersiz kemikte üstün sıkma torku",
          "Aynı gün estetik geçici kuron montajı",
          "Özel Hiossen platform-switch titanyum dayanak",
          "Kalıcı Çok Katmanlı Monolitik Zirkonyum Kuron",
          "3D Tomografi ve dijital cerrahi planlama",
          "Ömür Boyu Uluslararası Garanti Pasaportu",
          "VIP Havalimanı Transferi ve Lüks Otel"
        ]
      }
    ],
    "costTitle": "Uluslararası Maliyet Karşılaştırması: Aynı Gün İmplant (İngiltere / Almanya vs İstanbul)",
    "costSubtitle": "Çekim, dayanak, geçici kuron ve kalıcı zirkonyum dahil tek diş implant tedavisinin reel maliyet karşılaştırması.",
    "costTableHeaders": {
      "country": "Ülke ve Klinik",
      "costPerUnit": "Diş Başına Ortalama Maliyet",
      "inclusions": "Paket Kapsamı ve Dahil Olanlar",
      "valueAdvantage": "Fiyat Avantajı / Tasarruf"
    },
    "costTableRows": [
      {
        "country": "İngiltere (Özel Londra / Harley St)",
        "costPerUnit": "£2,200 – £3,200 ($2,800 – $4,100)",
        "inclusions": "Yalnızca implant ve standart kuron. 3D Tomografi (£150), çekim (£200) ve geçici diş (£350) ayrıca fatura edilir.",
        "valueAdvantage": "İngiltere Piyasa Tabanı"
      },
      {
        "country": "Almanya (Berlin / Frankfurt Özel Klinikler)",
        "costPerUnit": "€2,000 – €2,900 ($2,200 – $3,200)",
        "inclusions": "İmplant ve kuron dahil. Teşhis tomografisi, cerrahi rehber ve geçici dişler ek hastane kalemleri olarak ücretlendirilir.",
        "valueAdvantage": "Almanya Piyasa Tabanı"
      },
      {
        "country": "Master Smile Studio (İstanbul, Türkiye) ⭐",
        "costPerUnit": "€490 – €950 (£420 – £815)",
        "inclusions": "%100 Her Şey Dahil: 3D Tomografi, atravmatik çekim, geçici kuron, özel titanyum dayanak, monolitik zirkonyum diş, VIP transfer ve 5 yıldızlı otel.",
        "valueAdvantage": "%65 – %75 Net Tasarruf (İsviçre/Alman Kalitesi)"
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular: Aynı Gün İmplant Tedavisi",
    "faqSubtitle": "Aynı gün çekim ve yükleme, geçici sabit dişler ve İstanbul sağlık turizmi sürecimiz hakkında hekim onaylı yanıtlar.",
    "faqGroup1Title": "Klinik ve Cerrahi SSS (Aynı Gün Protokolü)",
    "faqGroup2Title": "Sağlık Turizmi, VIP Hizmetler ve Garanti SSS",
    "faqsPart1": [
      {
        "q": "Aynı gün implant (Immediate Implant) nedir?",
        "a": "Diş çekimi ile aynı cerrahi seansta, çekim boşluğuna yüksek tutuculuklu titanyum implantın yerleştirilmesi ve 24 saat içinde geçici estetik sabit dişin takılması işlemidir."
      },
      {
        "q": "Aynı gün implant tedavisi için uygun bir aday mıyım?",
        "a": "Çekim bölgesinde akut iltihap bulunmayan, kemik yoğunluğu ve diş eti dokusu sağlıklı olan hastalar ideal adaydır. Kliniğimizdeki 3D Tomografi (CBCT) ile uygunluğunuz kesinleştirilir."
      },
      {
        "q": "Aynı gün implant kemik erimesini nasıl engeller?",
        "a": "Normal çekim sonrası 6 ayda çene kemiğinde %30–%50 erime oluşur. Aynı gün implant yerleşimi ile çekim soketinin doğal anatomisi korunur, diş eti papilleri erimeden muhafaza edilir."
      },
      {
        "q": "Aynı gün takılan geçici diş ile yemek yenebilir mi?",
        "a": "Geçici diş, implantın kemikle kaynamasını (osseointegrasyon) korumak için doğrudan çiğneme temasından hafifçe izole edilir. Yumuşak gıdalarla rahatça beslenebilir, sosyal hayatınıza ara vermeden devam edebilirsiniz."
      },
      {
        "q": "Aynı gün implant cerrahisi ağrılı mıdır?",
        "a": "İşlem lokal anestezi veya sedasyon altında tamamen ağrısız uygulanır. Hazır çekim boşluğu kullanıldığı için cerrahi kesi ve dikiş minimumdur, klasik yönteme göre şişlik ve ağrı çok daha azdır."
      },
      {
        "q": "Aynı gün yükleme için gereken primer stabilite (tork) nedir?",
        "a": "Aynı gün sabit geçici diş takılabilmesi için implantın kemiğe en az 35–45 Ncm sıkma torkuyla ve ISQ > 70 stabilite değeriyle yerleşmesi gerekir."
      },
      {
        "q": "Kemik tutuculuğu yetersiz çıkarsa ne yapılır?",
        "a": "Primer tork 35 Ncm altında kalırsa implant yine çekim yuvasına greftle yerleştirilir ancak geçici kuron yerine diş eti altında 3 ay güvenle kaynamaya bırakılır; bu süreçte estetik geçici protez sağlanır."
      },
      {
        "q": "Kalıcı diş için hangi malzeme kullanılır?",
        "a": "3 aylık kemik kaynama sürecinin ardından, 1200+ MPa Monolitik Çok Katmanlı Alman Zirkonyumu veya ön bölge için İsviçre E-Max porselen kuron üretilir."
      },
      {
        "q": "Aynı gün implant tüm çene için uygulanabilir mi?",
        "a": "Evet, All-on-4 ve All-on-6 sistemleri de aynı gün çekim ve yükleme protokolünü kullanarak tüm çeneyi 24 saatte sabit dişlerle tamamlar."
      },
      {
        "q": "Aynı gün implantların ömrü ne kadardır?",
        "a": "İyi bir ağız bakımı ve düzenli kontrollerle aynı gün implantlar %98.2 klinik başarı oranına sahiptir ve ömür boyu güvenle kullanılır."
      }
    ],
    "faqsPart2": [
      {
        "q": "Aynı gün implant için İstanbul’da kaç gün kalmam gerekir?",
        "a": "İlk aşamada çekim, implant ve geçici diş için 4–5 günlük bir ziyaret yeterlidir. 3 ay sonra kalıcı monolitik zirkonyum dişler için 5 günlük ikinci bir ziyaret yapılır."
      },
      {
        "q": "VIP transfer ve 5 yıldızlı otel konaklaması dahil mi?",
        "a": "Evet, paketlerimize özel VIP havalimanı transferleri, klinik içi ulaşım ve anlaşmalı lüks 5 yıldızlı otel konaklaması dahildir."
      },
      {
        "q": "İmplantlar için uluslararası garanti veriliyor mu?",
        "a": "Tüm titanyum implantlarımız (Straumann, DXL German, NucleOSS, Megagen) resmi seri numaralı pasaport ve Ömür Boyu Üretici Garantisi ile sunulur."
      },
      {
        "q": "Gelmenden önce online muayene olabilir miyim?",
        "a": "Evet, mevcut röntgen veya fotoğraflarınızı WhatsApp üzerinden ileterek çene cerrahlarımızdan 24 saat içinde 3D tedavi planı ve net fiyat teklifi alabilirsiniz."
      },
      {
        "q": "Türkiye’de fiyatlar İngiltere ve Almanya’ya göre neden daha uygun?",
        "a": "Düşük klinik işletme maliyetleri ve laboratuvar avantajları sayesinde aynı İsviçre ve Alman implantlarını %70’e varan maliyet avantajıyla sunuyoruz."
      },
      {
        "q": "Tedavi sonrası hangi ilaçlar ve destekler sağlanıyor?",
        "a": "Reçeteli antibiyotik, ağrı kesici, özel gargaralar ve anadilinizde 7/24 rehberlik hizmeti ücretsiz sunulmaktadır."
      },
      {
        "q": "Hangi ödeme yöntemleri geçerlidir?",
        "a": "Kredi kartı, banka havalesi ve EUR, GBP, USD, TRY nakit ödemeleri resmi fatura karşılığı kabul edilmektedir."
      }
    ]
  }
};

export default function ImmediateImplantDetailView() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');

  return (
    <div className={styles.wrapper}>
      {/* 1. CLINICAL INTRODUCTION & BIOMECHANICAL SOCKET ANATOMY */}
      <section aria-labelledby="immediate-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="immediate-intro-heading" className={styles.introHeading}>
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
            <Link href="/treatments/dental-crowns" className={styles.linkGold}>
              {d.introP3LinkZirconium}
            </Link>
            {d.introP3Tail}
          </p>

          {/* Full-width 16:9 Clinical Immediate Implant Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/g2T5Bhy2uYc"
              title="Immediate Same-Day Dental Implants in Istanbul Clinical Procedure"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 2. OBJECTIVE COMPARISON: IMMEDIATE LOADING vs DELAYED vs PLACEMENT ONLY */}
      <section aria-labelledby="immediate-compare-heading" className={styles.compareSection}>
        <div className={styles.container}>
          <div className={styles.compareHeader}>
            <h2 id="immediate-compare-heading" className={styles.compareTitle}>
              {d.compareTitle}
            </h2>
            <p className={styles.compareSubtitle}>{d.compareSubtitle}</p>
          </div>

          <div className={styles.compareTableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.compareTh}>{d.compareTableHeaders.criteria}</th>
                  <th className={styles.compareTh}>{d.compareTableHeaders.delayed}</th>
                  <th className={styles.compareTh}>{d.compareTableHeaders.placementOnly}</th>
                  <th className={styles.compareThHighlight}>{d.compareTableHeaders.immediate}</th>
                </tr>
              </thead>
              <tbody>
                {d.compareTableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className={styles.compareTd}>
                      <strong>{row.criteria}</strong>
                    </td>
                    <td className={styles.compareTd}>{row.delayed}</td>
                    <td className={styles.compareTd}>{row.placementOnly}</td>
                    <td className={`${styles.compareTd} ${styles.compareTdHighlight}`}>
                      {row.immediate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.compareDecisionBox}>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenDelayedTitle}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenDelayedText}</p>
            </div>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenImmediateTitle}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenImmediateText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-PHASE PRECISION PROTOCOL (HORIZONTAL PEEK CAROUSEL ON MOBILE) */}
      <section aria-labelledby="immediate-process-heading" className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <h2 id="immediate-process-heading" className={styles.processTitle}>
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

      {/* 4. PERMANENT RESTORATION MATERIALS COMPARISON */}
      <section aria-labelledby="immediate-materials-heading" className={styles.materialsSection}>
        <div className={styles.container}>
          <div className={styles.materialsHeader}>
            <h2 id="immediate-materials-heading" className={styles.materialsTitle}>
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
                  <th className={styles.materialsTh}>{d.materialsTableHeaders.emax}</th>
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
                    <td className={styles.materialsTd}>{row.emax}</td>
                    <td className={styles.materialsTd}>{row.pfm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENT PACKAGES & DYNAMIC CURRENCY SWITCHER */}
      <section aria-labelledby="immediate-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="immediate-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="immediate-cost-heading" className={styles.costSection}>
        <div className={styles.container}>
          <div className={styles.costHeader}>
            <h2 id="immediate-cost-heading" className={styles.costTitle}>
              {d.costTitle}
            </h2>
            <p className={styles.costSubtitle}>{d.costSubtitle}</p>
          </div>

          <div className={styles.costTableWrap}>
            <table className={styles.costTable}>
              <thead>
                <tr>
                  <th className={styles.costTh}>{d.costTableHeaders.country}</th>
                  <th className={styles.costTh}>{d.costTableHeaders.costPerUnit}</th>
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
                      <strong>{row.costPerUnit}</strong>
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
      <TreatmentClinicTourSection placeholderNum="IMM-TOUR" />

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
      <section aria-labelledby="immediate-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="immediate-faq-heading" className={styles.faqTitle}>
              {d.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{d.faqSubtitle}</p>
          </div>

          {/* CLINICAL SAME-DAY FAQS (10 QUESTIONS) */}
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
      <TreatmentInteractiveQuoteForm defaultTreatment="Immediate Implants" />
    </div>
  );
}
