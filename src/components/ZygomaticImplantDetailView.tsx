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
import TreatmentRightTreatmentAccordion from '@/components/treatment-sections/TreatmentRightTreatmentAccordion';
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
  xrayImgAlt: string;
  xrayCaption: string;
  howWorkTitle: string;
  howWorkP: string;
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
    "introTitle": "What Are Zygomatic (Cheekbone) Implants? | Master Smile Studio, Istanbul, Turkey",
    "introLead": "Zygomatic (Cheekbone) implants are a revolutionary dental solution designed to address severe cases of tooth loss or bone loss in the upper jaw. Unlike traditional dental implants that rely on the jawbone for support, zygomatic implants are anchored into the cheekbone (zygomatic bone), a stronger and more stable structure.",
    "introP1": "This innovative approach was developed in the 1990s by a Swedish professor, Per-Ingvar Brånemark, who pioneered the concept of osseointegration – the process of fusing dental implants with the surrounding bone. Zygomatic implants take this concept a step further by utilizing the zygomatic bone (cheekbone), which often remains strong and dense even when the upper jaw has deteriorated due to tooth loss or other factors.",
    "xrayImgAlt": "Zygomatic and Pterygoid (Cheekbone) Implants in Istanbul - dental implants in cheekbone",
    "xrayCaption": "3D Panoramic Craniofacial X-Ray: Quad Zygomatic & Pterygoid Implants Anchored Directly into Dense Cortical Cheekbone",
    "howWorkTitle": "How Do Zygomatic (Cheekbone) Implants Work?",
    "howWorkP": "The length of zygomatic implants, which can range from 30 to 55 millimeters, allows them to extend beyond the upper jaw and into the cheekbone, providing a secure and reliable foundation for dental prosthetics. This game-changing technology has opened up new possibilities for individuals who were previously deemed unsuitable for traditional implants due to inadequate bone volume or quality.",
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
    "processTitle": "3-Phase Precision Protocol for Zygomatic Implants",
    "processSubtitle": "Every zygomatic intervention at Master Smile Studio follows military-grade 3D CBCT computer guidance and hospital-grade surgical theater protocols.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D Craniofacial CBCT Bone Mapping & Stereolithographic Guide",
        "text": "High-definition 3D tomography scans the entire maxillofacial skeleton. A virtual surgery plan determines the exact 30–55mm trajectory through the zygomatic arch.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Virtual Simulation",
            "val": "Craniofacial Angulation Plan"
          },
          {
            "key": "Surgical Guide",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Maxillofacial Surgery & Same-Day Fixed Bridge (24h)",
        "text": "Performed under conscious IV sedation or general anesthesia. 2 to 4 extra-long titanium implants achieve 50–65 Ncm torque, allowing immediate screw-retained teeth in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Immediate load)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed CAD/CAM Acrylic in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia Permanent Full-Arch Bridge",
        "text": "After 3 months of complete cheekbone osseointegration, digital intraoral scans capture the soft-tissue profile. A 1200+ MPa German monolithic zirconia bridge is secured.",
        "specs": [
          {
            "key": "Restoration Type",
            "val": "Monolithic Multilayer Zirconia"
          },
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Titanium Framework Reinforced"
          }
        ]
      }
    ],
    "materialsTitle": "Zygomatic Full-Arch Bridge Materials: What Works Best?",
    "materialsSubtitle": "Restoring a zygomatic full arch requires maximum flexural strength and zero chipping risk under intense masticatory forces.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Titanium Substructure",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
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
        "acrylic": "Porous (Absorbs bacteria & odor)",
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
    "packagesTitle": "Zygomatic & Full-Arch Packages with Dynamic Currency Calculator",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Nobel Biocare, Straumann, and specialized Zygomatic & All-on systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Arch (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extra-long Zygomatic Implants (NobelZygoma / Southern)",
          "2–4x Standard Anterior Titanium Implants",
          "Immediate screw-retained fixed provisional bridge (24h)",
          "Permanent CAD/CAM Monolithic German Zirconia Bridge",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Hospital surgical theater & IV Sedation / General Anesthesia",
          "5-Star Luxury Hotel Stay (Bed & Breakfast)",
          "VIP Mercedes Airport-Hotel-Clinic Chauffeur Transfers",
          "Lifetime International Manufacturer Warranty Passport"
        ]
      },
      {
        "name": "Quad Zygoma Total Reconstruction",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,700",
          "USD": "$9,800"
        },
        "included": [
          "4x Extra-long Zygomatic Implants (Bilateral Cheekbone Anchors)",
          "Complete elimination of bone grafts and 18-month wait times",
          "Immediate high-torque fixed screw-retained bridge in 24h",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Hospital operating room suite, full anesthesiology & MD team",
          "3D CBCT stereolithographic navigation planning",
          "7 Nights 5-Star Luxury Hotel Partner Accommodation",
          "VIP Private Mercedes Transfers throughout entire stay",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "All-on-6 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid SLActive)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€10,000",
          "GBP": "£8,600",
          "USD": "$11,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia/sedation",
          "Follow-up checks and post-op medication pack",
          "Airport, hotel & clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "All-on-6 Package – DXL German",
        "brand": "DXL Dental Implants (German Precision)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€6,500",
          "GBP": "£5,600",
          "USD": "$7,500"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & sterile pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      },
      {
        "name": "All-on-4 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid Implants)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,000",
          "GBP": "£6,900",
          "USD": "$9,300"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & medications",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Warranty Passport"
        ]
      },
      {
        "name": "All-on-4 Package – NucleOSS",
        "brand": "NucleOSS Dental Implants (Certified Turkish Brand)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€4,900",
          "GBP": "£4,200",
          "USD": "$5,700"
        },
        "included": [
          "4x NucleOSS Dental Implants with SLA surface",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks and post-op medication pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      }
    ],
    "costTitle": "International Cost Comparison: Zygomatic Implants (UK / US vs Istanbul)",
    "costSubtitle": "Compare real clinical costs per full arch including extractions, zygomatic implants, hospital fees, sedation, hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Hospital Tier",
      "costPerArch": "Cost per Full Upper Arch (Zygomatic)",
      "inclusions": "Package Coverage & Surgical Theater Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£22,000 – £35,000 ($28,000 – $45,000)",
        "inclusions": "Surgical fee and zygomatic implants only. Hospital bed (£2,500), general anesthesia (£1,800), CBCT (£350), and zirconia bridge (£4,500) billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "United States (Maxillofacial Surgery Centers)",
        "costPerArch": "$30,000 – $55,000 (€28,000 – €50,000)",
        "inclusions": "Surgical center fee and implants. Anesthesiologist fee, bone profiling, laboratory work, hotel, and transport billed as extra line-items.",
        "valueAdvantage": "Baseline US Private Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €8,900 (£5,950 – £7,700)",
        "inclusions": "100% All-Inclusive: Certified Zygomatic Implants, hospital surgical suite, IV sedation, 24h provisional bridge, German Zirconia final bridge, 5-star hotel & VIP transfers.",
        "valueAdvantage": "70% – 75% Net Savings (World-Class Maxillofacial Team)"
      }
    ],
    "faqTitle": "Frequently Asked Questions: Zygomatic Implants",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, surgical recovery, bone grafting alternatives, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical Zygomatic FAQ (Severe Bone Loss Solutions)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is a Zygomatic Implant and how is it anchored into the cheekbone?",
        "a": "A zygomatic implant is an extra-long (30mm to 55mm) medical titanium fixture designed for patients with severe upper jawbone loss. Instead of anchoring into the hollowed maxillary bone, it passes through the sinus cavity to anchor firmly into the dense zygomatic cheekbone."
      },
      {
        "q": "How does Zygomatic surgery eliminate the need for Sinus Lifts and Bone Grafts?",
        "a": "The cheekbone (zygoma) possesses exceptionally high cortical bone density that never resorbs with age, tooth loss, or periodontal disease. By anchoring into this permanent skeletal foundation, we bypass the sinuses completely—eliminating 12 to 18 months of grafting waits."
      },
      {
        "q": "Is Zygomatic implant surgery painful? What anesthesia is used?",
        "a": "No. The procedure is performed in an accredited surgical theater under conscious IV sedation or general anesthesia administered by a specialist anesthesiologist. Patients feel zero pain during surgery and experience only mild swelling managed with prescribed analgesics."
      },
      {
        "q": "Can I get fixed teeth in 24 hours with Zygomatic implants?",
        "a": "Yes. Because the zygomatic bone provides outstanding insertion torque (50 to 65+ Ncm), we connect a rigid screw-retained temporary bridge within 24 to 48 hours of surgery, allowing immediate smile aesthetics and functional chewing."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma uses 2 zygomatic implants in the posterior region combined with 2 to 4 standard implants in the front jaw. Quad Zygoma uses 4 zygomatic implants (2 on each side) for patients with 100% total bone resorption in both front and back upper jaws."
      },
      {
        "q": "What is the success rate of Zygomatic dental implants?",
        "a": "Clinical studies over 20+ years demonstrate a success rate exceeding 97% to 98.5%. Because the cheekbone does not suffer from alveolar bone resorption, long-term stability is exceptionally high."
      },
      {
        "q": "Who is a candidate for Zygomatic implants?",
        "a": "Candidates include individuals told by other clinics that they \"have no bone left\", patients with failed previous sinus bone grafts, long-term full denture wearers with razor-thin upper jaws, and post-oncological or trauma reconstruction patients."
      },
      {
        "q": "Are Zygomatic implants visible from the outside or will they change my face?",
        "a": "No. The implants are placed entirely underneath your facial soft tissues and gums. In fact, restoring your full arch of teeth restores lost vertical facial height and lip fullness, producing a natural youthful facial rejuvenation."
      },
      {
        "q": "How do Pterygoid implants complement Zygomatic implants?",
        "a": "Pterygoid implants are anchored into the pterygomaxillary plate at the very back of the upper jaw, providing solid posterior cantilever-free stability without touching the maxillary sinus."
      },
      {
        "q": "What permanent bridge is placed after healing?",
        "a": "After 3 months of osseointegration, we bond a custom CAD/CAM Monolithic Multilayer German Zirconia bridge (1200+ MPa) with a reinforced titanium substructure for unbreakable lifetime chewing strength."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic implant surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul for 3D CBCT planning, hospital surgery, and delivery of your 24h fixed temporary teeth. After 3 months of osseointegration, you return for a 5-day visit for your final monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic Package?",
        "a": "Our all-inclusive package covers all zygomatic implants, hospital operating room suite, specialist anesthesiologist, IV sedation/general anesthesia, 24h fixed bridge, final German Zirconia bridge, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you utilize?",
        "a": "We work exclusively with globally certified manufacturers including Nobel Biocare (NobelZygoma), Straumann Group, and Southern Implants, all backed by official international guarantee passports."
      },
      {
        "q": "Why are Zygomatic implants 70% more affordable in Istanbul than in the UK or US?",
        "a": "Lower hospital facility costs, favorable exchange rates, and high clinical specialization in Istanbul allow us to deliver world-class maxillofacial surgery at transparent, accessible rates without compromising safety."
      },
      {
        "q": "Do Zygomatic implants carry a lifetime warranty?",
        "a": "Yes. All zygomatic titanium implants come with an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Is there a risk of sinus infection after zygomatic surgery?",
        "a": "With modern extra-maxillary surgical protocols, the implant body is positioned outside or minimally through the sinus wall, reducing the incidence of post-operative sinusitis to less than 2% when following our post-op care."
      },
      {
        "q": "How do I begin my consultation before traveling from abroad?",
        "a": "Send your current panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief maxillofacial surgeon will formulate a comprehensive 3D reconstruction plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "tr": {
    "introBadge": "ZİGOMA & PTERİGOİD ELMACIK KEMİĞİ KURTARMA PROTOKOLÜ",
    "introTitle": "Zigoma (Elmacık Kemiği) İmplantı Nedir? | Master Smile Studio, İstanbul, Türkiye",
    "introLead": "Zigoma (Elmacık Kemiği) implantları, üst çenede ileri derecede diş ve kemik kaybı yaşayan hastalar için devrim niteliğinde bir çözümdür. Çene kemiğine dayanan geleneksel implantların aksine, zigoma implantları çok daha güçlü ve stabil bir yapı olan elmacık kemiğine (zigomatik kemik) sabitlenir.",
    "introP1": "Bu yenilikçi cerrahi yaklaşım, 1990'lı yıllarda diş implantlarının kemikle kaynaması (osseointegrasyon) kavramının öncüsü olan İsveçli profesör Per-Ingvar Brånemark tarafından geliştirilmiştir. Zigoma implantları, diş kaybı veya yaşa bağlı olarak üst çene kemiği tamamen eridiğinde bile sert ve yoğun yapısını koruyan elmacık kemiğinden destek alarak bu konsepti bir adım ileri taşır.",
    "xrayImgAlt": "İstanbul Zigoma ve Pterigoid Elmacık Kemiği İmplantı - kemik erimesi tedavisi",
    "xrayCaption": "3D Tomografi Teşhisi: Elmacık Kemiğine Sabitlenen Dörtlü Zigoma ve Pterigoid İmplantlar",
    "howWorkTitle": "Zigoma (Elmacık Kemiği) İmplantları Nasıl Çalışır?",
    "howWorkP": "Uzunlukları 30 ila 55 milimetre arasında değişen özel zigoma implantları, erimiş üst çene kemiğini tamamen aşarak elmacık kemiğine ulaşır ve protezler için son derece sağlam bir temel oluşturur. Bu dönüştürücü teknoloji, daha önce yetersiz kemik nedeniyle \"implant yapılamaz\" denilen hastalar için yepyeni bir sabit diş imkanı sunar.",
    "introP3Lead": "Lokal veya orta düzey kemik desteğine sahip hastalar için ",
    "introP3LinkAll4": "All-on-4 İmplant Tedavisi",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 İmplant Tedavisi",
    "introP3And": " veya ",
    "introP3LinkSinus": "Sinüs Lifting & Kemik Tozu",
    "introP3Tail": " çözümlerimizi inceleyebilirsiniz.",
    "candidacyTitle": "Zigoma & Pterigoid İmplant İçin Uygun Bir Aday Mısınız?",
    "candidacySubtitle": "Başka hekimler tarafından \"hiç kemiğiniz kalmamış, implant yapılamaz\" denildiyse, zigoma cerrahisi kesin çözümünüzdür.",
    "candidacyPoints": [
      {
        "title": "İleri Derecede Üst Çene Kemik Erimesi",
        "desc": "Çene kemiği kağıt gibi incelmiş, klasik 8-12 mm implantların tutunamayacağı kadar kemik kaybı olan hastalar."
      },
      {
        "title": "Başarısız Sinüs Lifting & Kemik Grefti Geçmişi",
        "desc": "Daha önce kemik tozu veya sinüs ameliyatı geçirmiş ancak kemiği tutmamış veya enfeksiyon nedeniyle erimiş hastalar."
      },
      {
        "title": "Yıllardır Damak Protezi Kullananlar",
        "desc": "Uzun yıllar kullanılan hareketli damakların baskısıyla çene kemiği tamamen silinen hastalar."
      },
      {
        "title": "Tümör, Kist veya Travma Sonrası Çene Kaybı",
        "desc": "Kist operasyonu, rezeksiyon veya kaza sonrası üst çene kemik dokusunu kaybeden hastalar."
      }
    ],
    "compareTitle": "Objektif Klinik Karşılaştırma: Dörtlü Zigoma vs. Hibrit Zigoma vs. İleri Kemik Grefti",
    "compareSubtitle": "Tedavi süreleri, cerrahi aşamalar, greft erime riskleri ve kalıcı çiğneme kuvvetinin bilimsel analizi.",
    "compareTableHeaders": {
      "criteria": "Klinik Parametre",
      "grafting": "İleri Sinüs Lifting & Kemik Grefti",
      "hybrid": "Hibrit Zigoma (2 Zigoma + 2-4 Standart)",
      "quad": "Dörtlü (Quad) Zigoma (4 Zigoma İmplant) ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Kemik Tozu & Greft İhtiyacı",
        "grafting": "İleri düzey blok/sinüs kemik nakli (Kalça/biftek)",
        "hybrid": "%0 Kemik Grefti (Elmacık kemiği tutunumu)",
        "quad": "%0 Kemik Grefti (Sinüsleri tamamen aşar)"
      },
      {
        "criteria": "Toplam Tedavi Süresi",
        "grafting": "12 – 18 ay kemik oluşum beklemesi",
        "hybrid": "24–48 saatte sabit diş (3. ayda kalıcı)",
        "quad": "24–48 saatte sabit diş (3. ayda kalıcı)"
      },
      {
        "criteria": "Cerrahi Operasyon Aşamaları",
        "grafting": "1.5 yıl içinde 2 ila 4 ayrı ameliyat",
        "hybrid": "Tek seansta tamamlanan cerrahi (Sedasyon)",
        "quad": "Tek seansta tamamlanan cerrahi (Sedasyon)"
      },
      {
        "criteria": "Dişsiz / Damakla Geçen Süre",
        "grafting": "12–18 ay boyunca oynayan geçici damak",
        "hybrid": "0 Gün (24 saatte vidalı sabit köprü)",
        "quad": "0 Gün (24 saatte vidalı sabit köprü)"
      },
      {
        "criteria": "Primer Tutuculuk (Sıkma Torku)",
        "grafting": "Düşük - Orta (15–25 Ncm)",
        "hybrid": "Çok Yüksek (45–60 Ncm)",
        "quad": "Zirve Tutuculuk (50–65 Ncm elmacık kemiğinde)"
      },
      {
        "criteria": "Uzun Vadeli Erime ve Başarısızlık",
        "grafting": "Yüksek (Eklenen kemiğin %40ı eriyebilir)",
        "hybrid": "Son Derece Düşük (15 yılda <%2)",
        "quad": "Son Derece Düşük (20+ yılda <%2.2)"
      },
      {
        "criteria": "İdeal Klinik Kullanım",
        "grafting": "Yalnızca hafif ve lokal kemik yetersizliği",
        "hybrid": "Arka bölgede tam erime, önde kemik varlığı",
        "quad": "Tüm üst çenede %100 tam kemik kaybı"
      }
    ],
    "compareDecision": {
      "whenGraftingTitle": "İleri Sinüs Grefti Ne Zaman Yapılabilir?",
      "whenGraftingText": "Yalnızca lokal kemik erimesi olan ve grefti tutacak en az 4-5 mm kendi kemiği bulunan, 1.5 yıl beklemeyi kabul eden hastalarda uygulanabilir.",
      "whenZygomaticTitle": "Zigoma İmplantları Ne Zaman Tek Çözümdür?",
      "whenZygomaticText": "Üst çene kemiği tamamen eridiğinde, önceki kemik tozları tutmadığında ve hastanın 18 ay dişsiz beklemek istemediği durumlarda tartışmasız tek seçenektir."
    },
    "processTitle": "3 Aşamalı Hassas Zigoma İmplant Protokolü",
    "processSubtitle": "Master Smile Studio’da her zigoma operasyonu 3D kraniyofasiyal tomografi ve tam teşekküllü ameliyathane koşullarında gerçekleştirilir.",
    "processCards": [
      {
        "step": "AŞAMA 01",
        "title": "3D Kraniyofasiyal Tomografi & Bilgisayarlı Cerrahi Kılavuz",
        "text": "Yüksek çözünürlüklü tomografi ile yüz iskeleti taranır. 30-55 mm uzunluğundaki implantın elmacık kemiğine giriş açısı dijital simülasyonla milimetrik planlanır.",
        "specs": [
          {
            "key": "CBCT Hassasiyeti",
            "val": "< 0.1 mm netlik"
          },
          {
            "key": "Açısal Simülasyon",
            "val": "Kraniyofasiyal Rehber Planı"
          },
          {
            "key": "Cerrahi Kılavuz",
            "val": "Kişiye Özel 3D Kılavuz Stent"
          }
        ]
      },
      {
        "step": "AŞAMA 02",
        "title": "Sedasyon Altında Ameliyat ve 24 Saatte Sabit Geçici Dişler",
        "text": "Uzman anestezi hekimi eşliğinde IV sedasyonla konforlu cerrahi yapılır. 50-65 Ncm yüksek tork elde edilerek 24 saat içinde vidalı sabit geçici köprü takılır.",
        "specs": [
          {
            "key": "Anestezi Türü",
            "val": "Bilinçli IV Sedasyon / Genel Anestezi"
          },
          {
            "key": "Sıkma Torku",
            "val": "50 – 65 Ncm (Anında yükleme)"
          },
          {
            "key": "Geçici Diş",
            "val": "24 Saatte Vidalı Sabit Köprü"
          }
        ]
      },
      {
        "step": "AŞAMA 03",
        "title": "CAD/CAM Monolitik Zirkonyum Kalıcı Master Köprü",
        "text": "3 aylık kemik kaynamasının ardından 3D dijital ağız içi tarama yapılır. Titanyum bar destekli 1200+ MPa Alman monolitik zirkonyum kalıcı köprü sabitlenir.",
        "specs": [
          {
            "key": "Kalıcı Protez",
            "val": "Monolitik Çok Katmanlı Zirkonyum"
          },
          {
            "key": "Bükülme Direnci",
            "val": "1200 – 1400 MPa (Kırılmaz)"
          },
          {
            "key": "Altyapı",
            "val": "Titanyum Bar Güçlendirmeli"
          }
        ]
      }
    ],
    "materialsTitle": "Zigoma İmplant Üstü Köprü Malzemeleri: Hangisi Daha Dayanıklı?",
    "materialsSubtitle": "Zigoma implantlarının yüksek çiğneme kuvvetine dayanabilmesi için yalnızca bükülmez ve kırılmaz masif materyaller kullanılmalıdır.",
    "materialsSpecLabels": {
      "material": "Malzeme Yapısı",
      "strength": "Bükülme Direnci",
      "chipping": "Kırılma / Atma Riski",
      "lifespan": "Klinik Ömür"
    },
    "materialsCards": [
      {
        "title": "Monolitik Çok Katmanlı Zirkonyum",
        "sub": "Titanyum Altyapı Üzerine %100 Masif Alman Zirkonyum",
        "badge": "Klinik Standartımız",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Masif Çok Katmanlı Zirkonyum",
        "strength": "1200 – 1400 MPa (Kırılmaz Masif)",
        "chippingRisk": "%0 (Porselen atma riski sıfır)",
        "lifespan": "Ömür Boyu Dayanıklılık",
        "features": [
          {
            "text": "Sınırsız çiğneme gücü: 600+ Newton çiğneme baskısına tam dayanıklı",
            "status": "good"
          },
          {
            "text": "Gözeneksiz cam cilalı yüzey bakteri ve leke tutmaz",
            "status": "good"
          },
          {
            "text": "Titanyum bar desteği sayesinde implantlar arası esneme sıfırlanır",
            "status": "good"
          },
          {
            "text": "Doğal diş minesini taklit eden çok katmanlı ışık geçirgenliği",
            "status": "good"
          }
        ]
      },
      {
        "title": "Titanyum Barlı Akrilik Hibrit",
        "sub": "Döküm Metal Altyapılı Plastik Dişli Protez",
        "badge": "Ekonomik Alternatif",
        "isGold": false,
        "material": "PMMA Akrilik Rezin + Döküm Titanyum Bar",
        "strength": "80 – 120 MPa (Düşük)",
        "chippingRisk": "Yüksek (Plastik dişler düşer veya aşınır)",
        "lifespan": "3 – 7 Yıl",
        "features": [
          {
            "text": "Daha düşük başlangıç maliyeti",
            "status": "good"
          },
          {
            "text": "Plastik dişler çiğnemeyle aşınır ve çene kapanışı çöker",
            "status": "bad"
          },
          {
            "text": "Akrilik gövde zamanla koku, leke ve bakteri çeker",
            "status": "bad"
          },
          {
            "text": "Sık sık astar ve tamir gerektirir, kalıcı çözüm değildir",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Metal Destekli Porselen (PFM)",
        "sub": "Kobalt-Krom Altyapılı Klasik Porselen",
        "badge": "Eski Tip Standart",
        "isGold": false,
        "material": "Döküm Kobalt-Krom Alaşım + Porselen",
        "strength": "350 – 450 MPa (Orta)",
        "chippingRisk": "Orta - Yüksek (Porselen kırılma riski)",
        "lifespan": "8 – 12 Yıl",
        "features": [
          {
            "text": "Rijit metal altyapı",
            "status": "good"
          },
          {
            "text": "Zigoma çiğneme kuvveti altında porselen metalden ayrılabilir",
            "status": "bad"
          },
          {
            "text": "Diş eti çekildiğinde siyah metal kenar yansıması yapar",
            "status": "bad"
          },
          {
            "text": "Ağır gövdesi ağızda yabancı cisim hissi yaratır",
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
        "acrylic": "80 – 120 MPa (Kırılgan)",
        "pfm": "350 – 450 MPa (Orta)"
      },
      {
        "criteria": "Kırılma ve Porselen Atma Riski",
        "zirconia": "%0 (Masif homojen blok)",
        "acrylic": "Yüksek (Plastik diş kırılır)",
        "pfm": "Yüksek (Porselen metalden kopar)"
      },
      {
        "criteria": "Leke ve Koku Direnci",
        "zirconia": "%100 Gözeneksiz (Sıfır koku/leke)",
        "acrylic": "Gözenekli (Koku ve leke çeker)",
        "pfm": "Orta (Metal sınırında bakteri birikir)"
      },
      {
        "criteria": "Dijital CAD/CAM Robotik Frezeleme",
        "zirconia": "5 eksenli mikron hassasiyet (< 5 µm)",
        "acrylic": "Manuel mufla ve presleme",
        "pfm": "Manuel döküm ve fırınlama"
      },
      {
        "criteria": "Zigoma Çenesine Uygunluk",
        "zirconia": "%100 Tavsiye Edilir (Maksimum dayanım)",
        "acrylic": "Yalnızca geçici dönem için uygundur",
        "pfm": "Tavsiye Edilmez (Kırılma riski taşır)"
      },
      {
        "criteria": "Beklenen Klinik Ömür",
        "zirconia": "Ömür Boyu Garanti",
        "acrylic": "3 – 7 Yıl",
        "pfm": "8 – 12 Yıl"
      }
    ],
    "packagesTitle": "Zigoma ve Tam Çene İmplant Paketleri ve Para Birimi Seçicisi",
    "packagesSubtitle": "Nobel Biocare, Straumann ve orijinal zigoma cerrahi sistemleri dahil her şey dahil paketler.",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket Kapsamı:",
    "pricePerArchLabel": "Çene Başına Fiyat (Her Şey Dahil):",
    "getQuoteBtn": "Ücretsiz Teklif Alın",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "packages": [
      {
        "name": "Hibrit Zigoma Paketi",
        "brand": "Nobel Biocare / Straumann (2 Zigoma + 2-4 Standart İmplant)",
        "duration": "İstanbul’da 5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Özel Uzunlukta Zigoma İmplantı (NobelZygoma / Southern)",
          "2–4x Ön Bölge Standart Titanyum İmplant",
          "24 saat içinde takılan vidalı sabit geçici köprü",
          "Kalıcı CAD/CAM Monolitik Çok Katmanlı Zirkonyum Köprü",
          "3D Tomografi analizi ve kraniyofasiyal cerrahi kılavuz",
          "Hastane ameliyathane ünitesi, uzman anestezi ve IV Sedasyon",
          "5 Yıldızlı Lüks Otel Konaklaması (Oda & Kahvaltı)",
          "VIP Mercedes Özel Şoförlü Havalimanı-Otel-Klinik Transferleri",
          "Ömür Boyu Uluslararası Üretici Garanti Pasaportu"
        ]
      },
      {
        "name": "Dörtlü (Quad) Zigoma Rekonstrüksiyon",
        "brand": "4 Zigoma İmplantı (%100 Üst Çene Kemik Erimesi Olanlar)",
        "duration": "İstanbul’da 5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,700",
          "USD": "$9,800"
        },
        "included": [
          "4x Çift Taraflı Elmacık Kemiğine Sabitlenen Zigoma İmplantı",
          "Kemik naklini ve 18 aylık bekleme süresini tamamen sıfırlar",
          "Yüksek torkla 24 saat içinde vidalanan sabit geçici köprü",
          "Kalıcı 1200+ MPa Monolitik Çok Katmanlı Zirkonyum Köprü",
          "Tam teşekküllü hastane ameliyathanesi ve genel anestezi ekibi",
          "3D Tomografi stereolitografik cerrahi navigasyon",
          "7 Gece 5 Yıldızlı Lüks Otel Konaklaması Dahil",
          "Tüm seyahat boyunca VIP Mercedes Özel Transfer Hizmeti",
          "Ömür Boyu Küresel Üretici Pasaportu ve Garantisi"
        ]
      },
      {
        "name": "All-on-6 Paketi – Straumann İsviçre",
        "brand": "Straumann Group (İsviçre Roxolid SLActive)",
        "duration": "İstanbul’da 3+7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€10,000",
          "GBP": "£8,600",
          "USD": "$11,600"
        },
        "included": [
          "6x Orijinal Straumann (İsviçre) Dental İmplant",
          "24 saat içinde takılan 12-14 dişlik sabit geçici köprü",
          "Kalıcı 12-14 dişlik Monolitik Zirkonyum Master Köprü",
          "3D Tomografi planlaması ve lokal anestezi/sedasyon",
          "Tüm kontrol seansları ve ameliyat sonrası ilaç paketi",
          "VIP Mercedes Havalimanı, Otel ve Klinik Transferleri",
          "5 Yıldızlı Lüks Otel Konaklaması (Oda & Kahvaltı)",
          "Ömür Boyu Uluslararası Straumann Garanti Pasaportu"
        ]
      },
      {
        "name": "All-on-6 Paketi – DXL Alman",
        "brand": "DXL Dental Implants (Alman Hassas Mühendisliği)",
        "duration": "İstanbul’da 3+7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€6,500",
          "GBP": "£5,600",
          "USD": "$7,500"
        },
        "included": [
          "6x DXL (Alman Menşeli) Dental İmplant",
          "24 saat içinde takılan 12-14 dişlik sabit geçici köprü",
          "Kalıcı 12-14 dişlik Monolitik Zirkonyum Master Köprü",
          "3D Tomografi planlaması ve lokal anestezi",
          "Tüm takip kontrolleri ve steril cerrahi sarf paketi",
          "VIP Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Ömür Boyu Uluslararası Üretici Garanti Belgesi"
        ]
      },
      {
        "name": "All-on-4 Paketi – Straumann İsviçre",
        "brand": "Straumann Group (İsviçre Roxolid İmplant)",
        "duration": "İstanbul’da 3+7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,000",
          "GBP": "£6,900",
          "USD": "$9,300"
        },
        "included": [
          "4x Straumann (İsviçre) Dental İmplant",
          "24 saat içinde takılan 12 dişlik sabit geçici köprü",
          "Kalıcı Monolitik Zirkonyum Master Köprü",
          "3D Tomografi planlaması ve cerrahi sarflar",
          "Takip kontrolleri ve operasyon sonrası ilaç paketi",
          "VIP Mercedes Özel Şoförlü Transfer Hizmeti",
          "5 Yıldızlı Otel Konaklaması Dahil",
          "Ömür Boyu Küresel Straumann Garanti Pasaportu"
        ]
      },
      {
        "name": "All-on-4 Paketi – NucleOSS",
        "brand": "NucleOSS Dental Implants (Sertifikalı Türk Markası)",
        "duration": "İstanbul’da 3+7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€4,900",
          "GBP": "£4,200",
          "USD": "$5,700"
        },
        "included": [
          "4x NucleOSS SLA Yüzeyli Dental İmplant",
          "24 saat içinde takılan 12 dişlik sabit geçici köprü",
          "Kalıcı Monolitik Zirkonyum Master Köprü",
          "3D Tomografi analizi ve lokal anestezi",
          "Takip kontrolleri ve medikal bakım paketi",
          "VIP Havalimanı ve Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması Dahil",
          "Ömür Boyu Uluslararası Üretici Garantisi"
        ]
      }
    ],
    "costTitle": "Uluslararası Maliyet Karşılaştırması: Zigoma İmplantları (İngiltere / ABD vs İstanbul)",
    "costSubtitle": "Çekimler, zigoma implantları, ameliyathane, sedasyon, otel ve VIP transferler dahil tek çene maliyet analizi.",
    "costTableHeaders": {
      "country": "Ülke ve Hastane Seviyesi",
      "costPerArch": "Üst Çene Zigoma Maliyeti (Tam Çene)",
      "inclusions": "Paket Kapsamı ve Cerrahi Ameliyathane Hizmetleri",
      "valueAdvantage": "Master Smile Studio Avantajı"
    },
    "costTableRows": [
      {
        "country": "İngiltere (Harley Street / Özel Londra Hastaneleri)",
        "costPerArch": "£22,000 – £35,000 ($28,000 – $45,000)",
        "inclusions": "Yalnızca cerrah ve implant ücreti. Ameliyathane (£2,500), Genel anestezi (£1,800), Tomografi (£350) ve zirkonyum köprü (£4,500) ayrı faturalandırılır.",
        "valueAdvantage": "İngiltere Piyasa Tabanı"
      },
      {
        "country": "Amerika Birleşik Devletleri (Maksillofasiyal Merkezler)",
        "costPerArch": "$30,000 – $55,000 (€28,000 – €50,000)",
        "inclusions": "Cerrahi merkez ve implant materyali. Anestezi uzmanı, laboratuvar, otel ve ulaşım ekstra kalemlerdir.",
        "valueAdvantage": "ABD Piyasa Tabanı"
      },
      {
        "country": "Master Smile Studio (İstanbul, Türkiye) ⭐",
        "costPerArch": "€6,900 – €8,900 (£5,950 – £7,700)",
        "inclusions": "%100 Her Şey Dahil: Sertifikalı Zigoma implantları, ameliyathane, IV sedasyon, 24 saatte geçici köprü, Alman Zirkonyum kalıcı köprü, 5 yıldızlı otel ve VIP transferler.",
        "valueAdvantage": "%70 – %75 Net Tasarruf (Dünya Standartlarında Çene Cerrahisi)"
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular: Zigoma (Elmacık Kemiği) İmplantları",
    "faqSubtitle": "Elmacık kemiği tutunumu, cerrahi iyileşme, kemik nakli alternatifleri ve İstanbul sağlık turizmi hakkında hekim onaylı yanıtlar.",
    "faqGroup1Title": "Klinik ve Cerrahi Zigoma SSS (İleri Kemik Erimesi Çözümleri)",
    "faqGroup2Title": "Sağlık Turizmi, VIP Hizmetler ve Garanti SSS",
    "faqsPart1": [
      {
        "q": "Zigoma (Elmacık Kemiği) İmplantı nedir ve elmacık kemiğine nasıl tutunur?",
        "a": "Zigoma implantı, üst çenesinde ileri kemik erimesi olan hastalar için geliştirilmiş 30-55 mm uzunluğunda özel titanyum vidadır. Erimiş üst çene kemiğine değil, sinüs boşluğunu aşarak sert ve yoğun elmacık kemiğine (zigoma) kilitlenir."
      },
      {
        "q": "Zigoma implantları Sinüs Lifting ve Kemik Tozu ameliyatını nasıl ortadan kaldırır?",
        "a": "Elmacık kemiği insan yüzünde kemik yoğunluğu en yüksek kemiklerden biridir ve diş kaybıyla veya yaşla asla erimez. Bu sağlam kemiğe tutunulduğu için 12-18 ay süren kemik tozu bekleme sürecine gerek kalmaz."
      },
      {
        "q": "Zigoma implant ameliyatı ağrılı mıdır? Hangi anestezi uygulanır?",
        "a": "Hayır. Operasyon tam teşekküllü ameliyathanede anestezi uzmanı kontrolünde bilinçli IV sedasyon veya genel anestezi altında yapılır. Hasta hiçbir şey hissetmez; ameliyat sonrası hafif şişlik basit ağrı kesicilerle kontrol edilir."
      },
      {
        "q": "Zigoma implantları ile 24 saat içinde sabit diş takılabilir mi?",
        "a": "Evet. Elmacık kemiğinin sağladığı olağanüstü primer tutuculuk (50-65+ Ncm tork) sayesinde ameliyattan sonraki 24-48 saat içinde vidalı sabit geçici köprü takılır; hasta kliniğimizden sabit dişlerle ayrılır."
      },
      {
        "q": "Hibrit Zigoma ile Dörtlü (Quad) Zigoma arasındaki fark nedir?",
        "a": "Hibrit Zigoma, arka bölgede 2 adet zigoma implantı ile ön bölgedeki 2-4 standart implantın birleşimidir. Dörtlü Zigoma ise üst çenesinde hiç kemiği kalmamış hastalara 4 adet zigoma implantı yerleştirilmesidir."
      },
      {
        "q": "Zigoma implantlarının başarı oranı nedir?",
        "a": "20 yılı aşkın klinik araştırmalar, zigoma implantlarının %97 ile %98.5 arasında üstün bir başarı oranına sahip olduğunu göstermektedir. Elmacık kemiği erimediği için ömür boyu sabit kalır."
      },
      {
        "q": "Kimler zigoma implantı için uygun bir adaydır?",
        "a": "Başka kliniklerde \"hiç kemiğiniz kalmamış\" denilenler, daha önceki sinüs kemik tozları eriyenler, uzun yıllar damak protezi kullananlar ve travma/tümör sonrası çene kemiğini kaybeden hastalar en uygun adaylardır."
      },
      {
        "q": "Zigoma implantları dışarıdan görünür mü veya yüz şeklimi değiştirir mi?",
        "a": "Kesinlikle hayır. İmplantlar tamamen diş eti ve yüz dokularının altında kalır. Aksine, tam çene dişlerin geri kazanılması çöken dudak ve yanak desteğini düzelterek yüzde gençleşme sağlar."
      },
      {
        "q": "Pterigoid implantlar zigoma tedavisinde nasıl kullanılır?",
        "a": "Pterigoid implantlar üst çenenin en arka noktasındaki pterigoid kemiğe sabitlenir ve sinüse girmeden arka azı bölgesinde kusursuz bir çiğneme desteği sağlar."
      },
      {
        "q": "Kemik kaynadıktan sonra hangi kalıcı köprü takılır?",
        "a": "3 aylık kemik kaynamasının ardından 5 eksenli CAD/CAM robotik sistemlerle üretilen 1200+ MPa kırılmaz Alman Monolitik Zirkonyum kalıcı köprü sabitlenir."
      }
    ],
    "faqsPart2": [
      {
        "q": "Zigoma implant tedavisi için İstanbulda kaç gün kalmalıyım?",
        "a": "İlk ziyaretinizde 3D tomografi planlaması, ameliyat ve 24 saatte sabit geçici diş teslimi için 5-7 gün kalmanız yeterlidir. 3 ay sonra kalıcı zirkonyum köprünüz için 5 günlük ikinci bir ziyaret gereklidir."
      },
      {
        "q": "Master Smile Studio Zigoma Paketine neler dahildir?",
        "a": "Tüm zigoma implantları, ameliyathane, uzman anestezi ekibi, IV sedasyon, 24 saatte geçici köprü, kalıcı Alman Zirkonyum köprü, 5 yıldızlı otel ve VIP Mercedes transferleri dahildir."
      },
      {
        "q": "Hangi zigoma implant markalarını kullanıyorsunuz?",
        "a": "Yalnızca uluslararası sertifikalı Nobel Biocare (NobelZygoma), Straumann Group ve Southern Implants sistemleri ile çalışıyor ve resmi garanti sertifikası veriyoruz."
      },
      {
        "q": "Türkiye’de zigoma implant fiyatları neden İngiltere ve ABDye göre %70 daha uygundur?",
        "a": "İstanbuldaki ameliyathane işletme ve cerrahi merkez avantajları sayesinde aynı orijinal İsviçre sistemlerini Avrupa ve Amerika fiyatlarının üçte birine sunabiliyoruz."
      },
      {
        "q": "Ömür boyu garanti ve medikal pasaport veriliyor mu?",
        "a": "Evet. Uygulanan tüm zigoma implantları için üretici firmanın Ömür Boyu Uluslararası Garanti Sertifikası ve seri numaralı orijinal medikal pasaportu hastamıza teslim edilir."
      },
      {
        "q": "Zigoma cerrahisi sonrası sinüzit riski var mıdır?",
        "a": "Modern cerrahi teknikler (Ekstra-maksiller protokol) ile implant gövdesi sinüs boşluğunun dışından geçirildiği için sinüzit riski %2'nin altındadır."
      },
      {
        "q": "Yurt dışından gelmeden önce tedavi planımı nasıl alabilirim?",
        "a": "Mevcut 3D Tomografinizi (CBCT) veya panoramik röntgeninizi WhatsApp üzerinden göndermeniz yeterlidir. Baş çene cerrahımız 24 saat içinde 3D tedavi planınızı ve sabit fiyat teklifinizi hazırlar."
      }
    ]
  },
  "de": {
    "introBadge": "ZYGOMA & PTERYGOID JOCHBEIN-IMPLANTATE",
    "introTitle": "Was sind Zygoma- (Jochbein-) Implantate? | Master Smile Studio, Istanbul, Türkei",
    "introLead": "Zygoma- (Jochbein-) Implantate sind eine revolutionäre Lösung bei starkem Knochenschwund im Oberkiefer. Verankert im dichten Jochbein bieten sie feste Zähne in 24 Stunden ohne Knochenaufbau.",
    "introP1": "This innovative approach was developed in the 1990s by a Swedish professor, Per-Ingvar Brånemark, who pioneered the concept of osseointegration – the process of fusing dental implants with the surrounding bone. Zygomatic implants take this concept a step further by utilizing the zygomatic bone (cheekbone), which often remains strong and dense even when the upper jaw has deteriorated due to tooth loss or other factors.",
    "xrayImgAlt": "Zygomatic and Pterygoid (Cheekbone) Implants in Istanbul - dental implants in cheekbone",
    "xrayCaption": "3D Panoramic Craniofacial X-Ray: Quad Zygomatic & Pterygoid Implants Anchored Directly into Dense Cortical Cheekbone",
    "howWorkTitle": "Wie funktionieren Zygoma- (Jochbein-) Implantate?",
    "howWorkP": "Mit Längen von 30 bis 55 mm überbrücken Zygoma-Implantate den abgebauten Oberkiefer und verankern sich im stabilen Jochbein – für sicheren Zahnersatz selbst bei extremem Knochenverlust.",
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
    "compareTitle": "Objektiver Klinischer Vergleich: Quad Zygoma vs. Hybrid Zygoma vs. Knochenaufbau",
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
    "processTitle": "3-Phasen-Präzisionsprotokoll für Zygoma-Implantate",
    "processSubtitle": "Every zygomatic intervention at Master Smile Studio follows military-grade 3D CBCT computer guidance and hospital-grade surgical theater protocols.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D Craniofacial CBCT Bone Mapping & Stereolithographic Guide",
        "text": "High-definition 3D tomography scans the entire maxillofacial skeleton. A virtual surgery plan determines the exact 30–55mm trajectory through the zygomatic arch.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Virtual Simulation",
            "val": "Craniofacial Angulation Plan"
          },
          {
            "key": "Surgical Guide",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Maxillofacial Surgery & Same-Day Fixed Bridge (24h)",
        "text": "Performed under conscious IV sedation or general anesthesia. 2 to 4 extra-long titanium implants achieve 50–65 Ncm torque, allowing immediate screw-retained teeth in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Immediate load)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed CAD/CAM Acrylic in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia Permanent Full-Arch Bridge",
        "text": "After 3 months of complete cheekbone osseointegration, digital intraoral scans capture the soft-tissue profile. A 1200+ MPa German monolithic zirconia bridge is secured.",
        "specs": [
          {
            "key": "Restoration Type",
            "val": "Monolithic Multilayer Zirconia"
          },
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Titanium Framework Reinforced"
          }
        ]
      }
    ],
    "materialsTitle": "Brückenmaterialien für Zygoma-Versorgungen",
    "materialsSubtitle": "Restoring a zygomatic full arch requires maximum flexural strength and zero chipping risk under intense masticatory forces.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Titanium Substructure",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
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
        "acrylic": "Porous (Absorbs bacteria & odor)",
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
    "packagesTitle": "Zygoma & All-on-Pakete & Währungsrechner",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Nobel Biocare, Straumann, and specialized Zygomatic & All-on systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Arch (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extra-long Zygomatic Implants (NobelZygoma / Southern)",
          "2–4x Standard Anterior Titanium Implants",
          "Immediate screw-retained fixed provisional bridge (24h)",
          "Permanent CAD/CAM Monolithic German Zirconia Bridge",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Hospital surgical theater & IV Sedation / General Anesthesia",
          "5-Star Luxury Hotel Stay (Bed & Breakfast)",
          "VIP Mercedes Airport-Hotel-Clinic Chauffeur Transfers",
          "Lifetime International Manufacturer Warranty Passport"
        ]
      },
      {
        "name": "Quad Zygoma Total Reconstruction",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,700",
          "USD": "$9,800"
        },
        "included": [
          "4x Extra-long Zygomatic Implants (Bilateral Cheekbone Anchors)",
          "Complete elimination of bone grafts and 18-month wait times",
          "Immediate high-torque fixed screw-retained bridge in 24h",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Hospital operating room suite, full anesthesiology & MD team",
          "3D CBCT stereolithographic navigation planning",
          "7 Nights 5-Star Luxury Hotel Partner Accommodation",
          "VIP Private Mercedes Transfers throughout entire stay",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "All-on-6 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid SLActive)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€10,000",
          "GBP": "£8,600",
          "USD": "$11,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia/sedation",
          "Follow-up checks and post-op medication pack",
          "Airport, hotel & clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "All-on-6 Package – DXL German",
        "brand": "DXL Dental Implants (German Precision)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€6,500",
          "GBP": "£5,600",
          "USD": "$7,500"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & sterile pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      },
      {
        "name": "All-on-4 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid Implants)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,000",
          "GBP": "£6,900",
          "USD": "$9,300"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & medications",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Warranty Passport"
        ]
      },
      {
        "name": "All-on-4 Package – NucleOSS",
        "brand": "NucleOSS Dental Implants (Certified Turkish Brand)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€4,900",
          "GBP": "£4,200",
          "USD": "$5,700"
        },
        "included": [
          "4x NucleOSS Dental Implants with SLA surface",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks and post-op medication pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      }
    ],
    "costTitle": "Internationaler Kostenvergleich: Zygoma-Implantate (UK / USA vs. Istanbul)",
    "costSubtitle": "Compare real clinical costs per full arch including extractions, zygomatic implants, hospital fees, sedation, hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Hospital Tier",
      "costPerArch": "Cost per Full Upper Arch (Zygomatic)",
      "inclusions": "Package Coverage & Surgical Theater Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£22,000 – £35,000 ($28,000 – $45,000)",
        "inclusions": "Surgical fee and zygomatic implants only. Hospital bed (£2,500), general anesthesia (£1,800), CBCT (£350), and zirconia bridge (£4,500) billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "United States (Maxillofacial Surgery Centers)",
        "costPerArch": "$30,000 – $55,000 (€28,000 – €50,000)",
        "inclusions": "Surgical center fee and implants. Anesthesiologist fee, bone profiling, laboratory work, hotel, and transport billed as extra line-items.",
        "valueAdvantage": "Baseline US Private Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €8,900 (£5,950 – £7,700)",
        "inclusions": "100% All-Inclusive: Certified Zygomatic Implants, hospital surgical suite, IV sedation, 24h provisional bridge, German Zirconia final bridge, 5-star hotel & VIP transfers.",
        "valueAdvantage": "70% – 75% Net Savings (World-Class Maxillofacial Team)"
      }
    ],
    "faqTitle": "Häufig gestellte Fragen: Zygoma-Implantate",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, surgical recovery, bone grafting alternatives, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical Zygomatic FAQ (Severe Bone Loss Solutions)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is a Zygomatic Implant and how is it anchored into the cheekbone?",
        "a": "A zygomatic implant is an extra-long (30mm to 55mm) medical titanium fixture designed for patients with severe upper jawbone loss. Instead of anchoring into the hollowed maxillary bone, it passes through the sinus cavity to anchor firmly into the dense zygomatic cheekbone."
      },
      {
        "q": "How does Zygomatic surgery eliminate the need for Sinus Lifts and Bone Grafts?",
        "a": "The cheekbone (zygoma) possesses exceptionally high cortical bone density that never resorbs with age, tooth loss, or periodontal disease. By anchoring into this permanent skeletal foundation, we bypass the sinuses completely—eliminating 12 to 18 months of grafting waits."
      },
      {
        "q": "Is Zygomatic implant surgery painful? What anesthesia is used?",
        "a": "No. The procedure is performed in an accredited surgical theater under conscious IV sedation or general anesthesia administered by a specialist anesthesiologist. Patients feel zero pain during surgery and experience only mild swelling managed with prescribed analgesics."
      },
      {
        "q": "Can I get fixed teeth in 24 hours with Zygomatic implants?",
        "a": "Yes. Because the zygomatic bone provides outstanding insertion torque (50 to 65+ Ncm), we connect a rigid screw-retained temporary bridge within 24 to 48 hours of surgery, allowing immediate smile aesthetics and functional chewing."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma uses 2 zygomatic implants in the posterior region combined with 2 to 4 standard implants in the front jaw. Quad Zygoma uses 4 zygomatic implants (2 on each side) for patients with 100% total bone resorption in both front and back upper jaws."
      },
      {
        "q": "What is the success rate of Zygomatic dental implants?",
        "a": "Clinical studies over 20+ years demonstrate a success rate exceeding 97% to 98.5%. Because the cheekbone does not suffer from alveolar bone resorption, long-term stability is exceptionally high."
      },
      {
        "q": "Who is a candidate for Zygomatic implants?",
        "a": "Candidates include individuals told by other clinics that they \"have no bone left\", patients with failed previous sinus bone grafts, long-term full denture wearers with razor-thin upper jaws, and post-oncological or trauma reconstruction patients."
      },
      {
        "q": "Are Zygomatic implants visible from the outside or will they change my face?",
        "a": "No. The implants are placed entirely underneath your facial soft tissues and gums. In fact, restoring your full arch of teeth restores lost vertical facial height and lip fullness, producing a natural youthful facial rejuvenation."
      },
      {
        "q": "How do Pterygoid implants complement Zygomatic implants?",
        "a": "Pterygoid implants are anchored into the pterygomaxillary plate at the very back of the upper jaw, providing solid posterior cantilever-free stability without touching the maxillary sinus."
      },
      {
        "q": "What permanent bridge is placed after healing?",
        "a": "After 3 months of osseointegration, we bond a custom CAD/CAM Monolithic Multilayer German Zirconia bridge (1200+ MPa) with a reinforced titanium substructure for unbreakable lifetime chewing strength."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic implant surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul for 3D CBCT planning, hospital surgery, and delivery of your 24h fixed temporary teeth. After 3 months of osseointegration, you return for a 5-day visit for your final monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic Package?",
        "a": "Our all-inclusive package covers all zygomatic implants, hospital operating room suite, specialist anesthesiologist, IV sedation/general anesthesia, 24h fixed bridge, final German Zirconia bridge, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you utilize?",
        "a": "We work exclusively with globally certified manufacturers including Nobel Biocare (NobelZygoma), Straumann Group, and Southern Implants, all backed by official international guarantee passports."
      },
      {
        "q": "Why are Zygomatic implants 70% more affordable in Istanbul than in the UK or US?",
        "a": "Lower hospital facility costs, favorable exchange rates, and high clinical specialization in Istanbul allow us to deliver world-class maxillofacial surgery at transparent, accessible rates without compromising safety."
      },
      {
        "q": "Do Zygomatic implants carry a lifetime warranty?",
        "a": "Yes. All zygomatic titanium implants come with an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Is there a risk of sinus infection after zygomatic surgery?",
        "a": "With modern extra-maxillary surgical protocols, the implant body is positioned outside or minimally through the sinus wall, reducing the incidence of post-operative sinusitis to less than 2% when following our post-op care."
      },
      {
        "q": "How do I begin my consultation before traveling from abroad?",
        "a": "Send your current panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief maxillofacial surgeon will formulate a comprehensive 3D reconstruction plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "pl": {
    "introBadge": "PROTOKÓŁ IMPLANTACJI JARZMOWEJ ZYGOMA",
    "introTitle": "Czym są implanty jarzmowe (Zygoma)? | Master Smile Studio, Stambuł, Turcja",
    "introLead": "Implanty jarzmowe (Zygoma) to przełomowe rozwiązanie dla pacjentów ze znacznym zanikiem kości szczęki. Kotwiczone w kości jarzmowej zapewniają stałe zęby w 24h bez przeszczepu kości.",
    "introP1": "This innovative approach was developed in the 1990s by a Swedish professor, Per-Ingvar Brånemark, who pioneered the concept of osseointegration – the process of fusing dental implants with the surrounding bone. Zygomatic implants take this concept a step further by utilizing the zygomatic bone (cheekbone), which often remains strong and dense even when the upper jaw has deteriorated due to tooth loss or other factors.",
    "xrayImgAlt": "Zygomatic and Pterygoid (Cheekbone) Implants in Istanbul - dental implants in cheekbone",
    "xrayCaption": "3D Panoramic Craniofacial X-Ray: Quad Zygomatic & Pterygoid Implants Anchored Directly into Dense Cortical Cheekbone",
    "howWorkTitle": "Jak działają implanty jarzmowe (Zygoma)?",
    "howWorkP": "Długość implantów Zygoma (od 30 do 55 mm) pozwala ominąć zanikłą kość szczęki i zakotwiczyć się w gęstej kości jarzmowej, tworząc stabilny fundament pod stały most.",
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
    "compareTitle": "Obiektywne Porównanie: Quad Zygoma vs. Hybryda vs. Przeszczep Kości",
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
    "processTitle": "3-Etapowy Protokół Implantacji Jarzmowej",
    "processSubtitle": "Every zygomatic intervention at Master Smile Studio follows military-grade 3D CBCT computer guidance and hospital-grade surgical theater protocols.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D Craniofacial CBCT Bone Mapping & Stereolithographic Guide",
        "text": "High-definition 3D tomography scans the entire maxillofacial skeleton. A virtual surgery plan determines the exact 30–55mm trajectory through the zygomatic arch.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Virtual Simulation",
            "val": "Craniofacial Angulation Plan"
          },
          {
            "key": "Surgical Guide",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Maxillofacial Surgery & Same-Day Fixed Bridge (24h)",
        "text": "Performed under conscious IV sedation or general anesthesia. 2 to 4 extra-long titanium implants achieve 50–65 Ncm torque, allowing immediate screw-retained teeth in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Immediate load)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed CAD/CAM Acrylic in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia Permanent Full-Arch Bridge",
        "text": "After 3 months of complete cheekbone osseointegration, digital intraoral scans capture the soft-tissue profile. A 1200+ MPa German monolithic zirconia bridge is secured.",
        "specs": [
          {
            "key": "Restoration Type",
            "val": "Monolithic Multilayer Zirconia"
          },
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Titanium Framework Reinforced"
          }
        ]
      }
    ],
    "materialsTitle": "Materiały Mostów na Implantach Jarzmowych",
    "materialsSubtitle": "Restoring a zygomatic full arch requires maximum flexural strength and zero chipping risk under intense masticatory forces.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Titanium Substructure",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
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
        "acrylic": "Porous (Absorbs bacteria & odor)",
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
    "packagesTitle": "Pakiety Implantów Zygoma i Przelicznik Walut",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Nobel Biocare, Straumann, and specialized Zygomatic & All-on systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Arch (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extra-long Zygomatic Implants (NobelZygoma / Southern)",
          "2–4x Standard Anterior Titanium Implants",
          "Immediate screw-retained fixed provisional bridge (24h)",
          "Permanent CAD/CAM Monolithic German Zirconia Bridge",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Hospital surgical theater & IV Sedation / General Anesthesia",
          "5-Star Luxury Hotel Stay (Bed & Breakfast)",
          "VIP Mercedes Airport-Hotel-Clinic Chauffeur Transfers",
          "Lifetime International Manufacturer Warranty Passport"
        ]
      },
      {
        "name": "Quad Zygoma Total Reconstruction",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,700",
          "USD": "$9,800"
        },
        "included": [
          "4x Extra-long Zygomatic Implants (Bilateral Cheekbone Anchors)",
          "Complete elimination of bone grafts and 18-month wait times",
          "Immediate high-torque fixed screw-retained bridge in 24h",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Hospital operating room suite, full anesthesiology & MD team",
          "3D CBCT stereolithographic navigation planning",
          "7 Nights 5-Star Luxury Hotel Partner Accommodation",
          "VIP Private Mercedes Transfers throughout entire stay",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "All-on-6 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid SLActive)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€10,000",
          "GBP": "£8,600",
          "USD": "$11,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia/sedation",
          "Follow-up checks and post-op medication pack",
          "Airport, hotel & clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "All-on-6 Package – DXL German",
        "brand": "DXL Dental Implants (German Precision)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€6,500",
          "GBP": "£5,600",
          "USD": "$7,500"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & sterile pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      },
      {
        "name": "All-on-4 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid Implants)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,000",
          "GBP": "£6,900",
          "USD": "$9,300"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & medications",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Warranty Passport"
        ]
      },
      {
        "name": "All-on-4 Package – NucleOSS",
        "brand": "NucleOSS Dental Implants (Certified Turkish Brand)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€4,900",
          "GBP": "£4,200",
          "USD": "$5,700"
        },
        "included": [
          "4x NucleOSS Dental Implants with SLA surface",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks and post-op medication pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      }
    ],
    "costTitle": "Międzynarodowe Porównanie Kosztów: Zygoma (UK / USA vs Stambuł)",
    "costSubtitle": "Compare real clinical costs per full arch including extractions, zygomatic implants, hospital fees, sedation, hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Hospital Tier",
      "costPerArch": "Cost per Full Upper Arch (Zygomatic)",
      "inclusions": "Package Coverage & Surgical Theater Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£22,000 – £35,000 ($28,000 – $45,000)",
        "inclusions": "Surgical fee and zygomatic implants only. Hospital bed (£2,500), general anesthesia (£1,800), CBCT (£350), and zirconia bridge (£4,500) billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "United States (Maxillofacial Surgery Centers)",
        "costPerArch": "$30,000 – $55,000 (€28,000 – €50,000)",
        "inclusions": "Surgical center fee and implants. Anesthesiologist fee, bone profiling, laboratory work, hotel, and transport billed as extra line-items.",
        "valueAdvantage": "Baseline US Private Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €8,900 (£5,950 – £7,700)",
        "inclusions": "100% All-Inclusive: Certified Zygomatic Implants, hospital surgical suite, IV sedation, 24h provisional bridge, German Zirconia final bridge, 5-star hotel & VIP transfers.",
        "valueAdvantage": "70% – 75% Net Savings (World-Class Maxillofacial Team)"
      }
    ],
    "faqTitle": "Często Zadawane Pytania: Implanty Zygoma",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, surgical recovery, bone grafting alternatives, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical Zygomatic FAQ (Severe Bone Loss Solutions)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is a Zygomatic Implant and how is it anchored into the cheekbone?",
        "a": "A zygomatic implant is an extra-long (30mm to 55mm) medical titanium fixture designed for patients with severe upper jawbone loss. Instead of anchoring into the hollowed maxillary bone, it passes through the sinus cavity to anchor firmly into the dense zygomatic cheekbone."
      },
      {
        "q": "How does Zygomatic surgery eliminate the need for Sinus Lifts and Bone Grafts?",
        "a": "The cheekbone (zygoma) possesses exceptionally high cortical bone density that never resorbs with age, tooth loss, or periodontal disease. By anchoring into this permanent skeletal foundation, we bypass the sinuses completely—eliminating 12 to 18 months of grafting waits."
      },
      {
        "q": "Is Zygomatic implant surgery painful? What anesthesia is used?",
        "a": "No. The procedure is performed in an accredited surgical theater under conscious IV sedation or general anesthesia administered by a specialist anesthesiologist. Patients feel zero pain during surgery and experience only mild swelling managed with prescribed analgesics."
      },
      {
        "q": "Can I get fixed teeth in 24 hours with Zygomatic implants?",
        "a": "Yes. Because the zygomatic bone provides outstanding insertion torque (50 to 65+ Ncm), we connect a rigid screw-retained temporary bridge within 24 to 48 hours of surgery, allowing immediate smile aesthetics and functional chewing."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma uses 2 zygomatic implants in the posterior region combined with 2 to 4 standard implants in the front jaw. Quad Zygoma uses 4 zygomatic implants (2 on each side) for patients with 100% total bone resorption in both front and back upper jaws."
      },
      {
        "q": "What is the success rate of Zygomatic dental implants?",
        "a": "Clinical studies over 20+ years demonstrate a success rate exceeding 97% to 98.5%. Because the cheekbone does not suffer from alveolar bone resorption, long-term stability is exceptionally high."
      },
      {
        "q": "Who is a candidate for Zygomatic implants?",
        "a": "Candidates include individuals told by other clinics that they \"have no bone left\", patients with failed previous sinus bone grafts, long-term full denture wearers with razor-thin upper jaws, and post-oncological or trauma reconstruction patients."
      },
      {
        "q": "Are Zygomatic implants visible from the outside or will they change my face?",
        "a": "No. The implants are placed entirely underneath your facial soft tissues and gums. In fact, restoring your full arch of teeth restores lost vertical facial height and lip fullness, producing a natural youthful facial rejuvenation."
      },
      {
        "q": "How do Pterygoid implants complement Zygomatic implants?",
        "a": "Pterygoid implants are anchored into the pterygomaxillary plate at the very back of the upper jaw, providing solid posterior cantilever-free stability without touching the maxillary sinus."
      },
      {
        "q": "What permanent bridge is placed after healing?",
        "a": "After 3 months of osseointegration, we bond a custom CAD/CAM Monolithic Multilayer German Zirconia bridge (1200+ MPa) with a reinforced titanium substructure for unbreakable lifetime chewing strength."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic implant surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul for 3D CBCT planning, hospital surgery, and delivery of your 24h fixed temporary teeth. After 3 months of osseointegration, you return for a 5-day visit for your final monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic Package?",
        "a": "Our all-inclusive package covers all zygomatic implants, hospital operating room suite, specialist anesthesiologist, IV sedation/general anesthesia, 24h fixed bridge, final German Zirconia bridge, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you utilize?",
        "a": "We work exclusively with globally certified manufacturers including Nobel Biocare (NobelZygoma), Straumann Group, and Southern Implants, all backed by official international guarantee passports."
      },
      {
        "q": "Why are Zygomatic implants 70% more affordable in Istanbul than in the UK or US?",
        "a": "Lower hospital facility costs, favorable exchange rates, and high clinical specialization in Istanbul allow us to deliver world-class maxillofacial surgery at transparent, accessible rates without compromising safety."
      },
      {
        "q": "Do Zygomatic implants carry a lifetime warranty?",
        "a": "Yes. All zygomatic titanium implants come with an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Is there a risk of sinus infection after zygomatic surgery?",
        "a": "With modern extra-maxillary surgical protocols, the implant body is positioned outside or minimally through the sinus wall, reducing the incidence of post-operative sinusitis to less than 2% when following our post-op care."
      },
      {
        "q": "How do I begin my consultation before traveling from abroad?",
        "a": "Send your current panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief maxillofacial surgeon will formulate a comprehensive 3D reconstruction plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "pt": {
    "introBadge": "IMPLANTES ZIGOMÁTICOS E PTERIGOIDEOS",
    "introTitle": "O que são implantes zigomáticos (maçã do rosto)? | Master Smile Studio, Istambul, Turquia",
    "introLead": "Os implantes zigomáticos são uma solução revolucionária para casos severos de perda óssea na maxila superior, ancorando-se na maçã do rosto sem necessidade de enxertos ósseos.",
    "introP1": "This innovative approach was developed in the 1990s by a Swedish professor, Per-Ingvar Brånemark, who pioneered the concept of osseointegration – the process of fusing dental implants with the surrounding bone. Zygomatic implants take this concept a step further by utilizing the zygomatic bone (cheekbone), which often remains strong and dense even when the upper jaw has deteriorated due to tooth loss or other factors.",
    "xrayImgAlt": "Zygomatic and Pterygoid (Cheekbone) Implants in Istanbul - dental implants in cheekbone",
    "xrayCaption": "3D Panoramic Craniofacial X-Ray: Quad Zygomatic & Pterygoid Implants Anchored Directly into Dense Cortical Cheekbone",
    "howWorkTitle": "Como funcionam os implantes zigomáticos?",
    "howWorkP": "Com comprimentos de 30 a 55 mm, os implantes zigomáticos alcançam o osso zigomático, criando uma base sólida para dentes fixos imediatos em 24 horas.",
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
    "compareTitle": "Comparativo Clínico: Quad Zygoma vs. Híbrido vs. Enxerto Ósseo",
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
    "processTitle": "Protocolo de Precisão em 3 Fases para Implantes Zigomáticos",
    "processSubtitle": "Every zygomatic intervention at Master Smile Studio follows military-grade 3D CBCT computer guidance and hospital-grade surgical theater protocols.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D Craniofacial CBCT Bone Mapping & Stereolithographic Guide",
        "text": "High-definition 3D tomography scans the entire maxillofacial skeleton. A virtual surgery plan determines the exact 30–55mm trajectory through the zygomatic arch.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Virtual Simulation",
            "val": "Craniofacial Angulation Plan"
          },
          {
            "key": "Surgical Guide",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Maxillofacial Surgery & Same-Day Fixed Bridge (24h)",
        "text": "Performed under conscious IV sedation or general anesthesia. 2 to 4 extra-long titanium implants achieve 50–65 Ncm torque, allowing immediate screw-retained teeth in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Immediate load)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed CAD/CAM Acrylic in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia Permanent Full-Arch Bridge",
        "text": "After 3 months of complete cheekbone osseointegration, digital intraoral scans capture the soft-tissue profile. A 1200+ MPa German monolithic zirconia bridge is secured.",
        "specs": [
          {
            "key": "Restoration Type",
            "val": "Monolithic Multilayer Zirconia"
          },
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Titanium Framework Reinforced"
          }
        ]
      }
    ],
    "materialsTitle": "Materiais de Próteses sobre Implantes Zigomáticos",
    "materialsSubtitle": "Restoring a zygomatic full arch requires maximum flexural strength and zero chipping risk under intense masticatory forces.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Titanium Substructure",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
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
        "acrylic": "Porous (Absorbs bacteria & odor)",
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
    "packagesTitle": "Pacotes Zigomáticos e Conversor de Moedas",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Nobel Biocare, Straumann, and specialized Zygomatic & All-on systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Arch (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extra-long Zygomatic Implants (NobelZygoma / Southern)",
          "2–4x Standard Anterior Titanium Implants",
          "Immediate screw-retained fixed provisional bridge (24h)",
          "Permanent CAD/CAM Monolithic German Zirconia Bridge",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Hospital surgical theater & IV Sedation / General Anesthesia",
          "5-Star Luxury Hotel Stay (Bed & Breakfast)",
          "VIP Mercedes Airport-Hotel-Clinic Chauffeur Transfers",
          "Lifetime International Manufacturer Warranty Passport"
        ]
      },
      {
        "name": "Quad Zygoma Total Reconstruction",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,700",
          "USD": "$9,800"
        },
        "included": [
          "4x Extra-long Zygomatic Implants (Bilateral Cheekbone Anchors)",
          "Complete elimination of bone grafts and 18-month wait times",
          "Immediate high-torque fixed screw-retained bridge in 24h",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Hospital operating room suite, full anesthesiology & MD team",
          "3D CBCT stereolithographic navigation planning",
          "7 Nights 5-Star Luxury Hotel Partner Accommodation",
          "VIP Private Mercedes Transfers throughout entire stay",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "All-on-6 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid SLActive)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€10,000",
          "GBP": "£8,600",
          "USD": "$11,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia/sedation",
          "Follow-up checks and post-op medication pack",
          "Airport, hotel & clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "All-on-6 Package – DXL German",
        "brand": "DXL Dental Implants (German Precision)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€6,500",
          "GBP": "£5,600",
          "USD": "$7,500"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & sterile pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      },
      {
        "name": "All-on-4 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid Implants)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,000",
          "GBP": "£6,900",
          "USD": "$9,300"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & medications",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Warranty Passport"
        ]
      },
      {
        "name": "All-on-4 Package – NucleOSS",
        "brand": "NucleOSS Dental Implants (Certified Turkish Brand)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€4,900",
          "GBP": "£4,200",
          "USD": "$5,700"
        },
        "included": [
          "4x NucleOSS Dental Implants with SLA surface",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks and post-op medication pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      }
    ],
    "costTitle": "Comparativo Internacional de Custos: Zigomáticos (Reino Unido / EUA vs Istambul)",
    "costSubtitle": "Compare real clinical costs per full arch including extractions, zygomatic implants, hospital fees, sedation, hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Hospital Tier",
      "costPerArch": "Cost per Full Upper Arch (Zygomatic)",
      "inclusions": "Package Coverage & Surgical Theater Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£22,000 – £35,000 ($28,000 – $45,000)",
        "inclusions": "Surgical fee and zygomatic implants only. Hospital bed (£2,500), general anesthesia (£1,800), CBCT (£350), and zirconia bridge (£4,500) billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "United States (Maxillofacial Surgery Centers)",
        "costPerArch": "$30,000 – $55,000 (€28,000 – €50,000)",
        "inclusions": "Surgical center fee and implants. Anesthesiologist fee, bone profiling, laboratory work, hotel, and transport billed as extra line-items.",
        "valueAdvantage": "Baseline US Private Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €8,900 (£5,950 – £7,700)",
        "inclusions": "100% All-Inclusive: Certified Zygomatic Implants, hospital surgical suite, IV sedation, 24h provisional bridge, German Zirconia final bridge, 5-star hotel & VIP transfers.",
        "valueAdvantage": "70% – 75% Net Savings (World-Class Maxillofacial Team)"
      }
    ],
    "faqTitle": "Perguntas Frequentes: Implantes Zigomáticos",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, surgical recovery, bone grafting alternatives, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical Zygomatic FAQ (Severe Bone Loss Solutions)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is a Zygomatic Implant and how is it anchored into the cheekbone?",
        "a": "A zygomatic implant is an extra-long (30mm to 55mm) medical titanium fixture designed for patients with severe upper jawbone loss. Instead of anchoring into the hollowed maxillary bone, it passes through the sinus cavity to anchor firmly into the dense zygomatic cheekbone."
      },
      {
        "q": "How does Zygomatic surgery eliminate the need for Sinus Lifts and Bone Grafts?",
        "a": "The cheekbone (zygoma) possesses exceptionally high cortical bone density that never resorbs with age, tooth loss, or periodontal disease. By anchoring into this permanent skeletal foundation, we bypass the sinuses completely—eliminating 12 to 18 months of grafting waits."
      },
      {
        "q": "Is Zygomatic implant surgery painful? What anesthesia is used?",
        "a": "No. The procedure is performed in an accredited surgical theater under conscious IV sedation or general anesthesia administered by a specialist anesthesiologist. Patients feel zero pain during surgery and experience only mild swelling managed with prescribed analgesics."
      },
      {
        "q": "Can I get fixed teeth in 24 hours with Zygomatic implants?",
        "a": "Yes. Because the zygomatic bone provides outstanding insertion torque (50 to 65+ Ncm), we connect a rigid screw-retained temporary bridge within 24 to 48 hours of surgery, allowing immediate smile aesthetics and functional chewing."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma uses 2 zygomatic implants in the posterior region combined with 2 to 4 standard implants in the front jaw. Quad Zygoma uses 4 zygomatic implants (2 on each side) for patients with 100% total bone resorption in both front and back upper jaws."
      },
      {
        "q": "What is the success rate of Zygomatic dental implants?",
        "a": "Clinical studies over 20+ years demonstrate a success rate exceeding 97% to 98.5%. Because the cheekbone does not suffer from alveolar bone resorption, long-term stability is exceptionally high."
      },
      {
        "q": "Who is a candidate for Zygomatic implants?",
        "a": "Candidates include individuals told by other clinics that they \"have no bone left\", patients with failed previous sinus bone grafts, long-term full denture wearers with razor-thin upper jaws, and post-oncological or trauma reconstruction patients."
      },
      {
        "q": "Are Zygomatic implants visible from the outside or will they change my face?",
        "a": "No. The implants are placed entirely underneath your facial soft tissues and gums. In fact, restoring your full arch of teeth restores lost vertical facial height and lip fullness, producing a natural youthful facial rejuvenation."
      },
      {
        "q": "How do Pterygoid implants complement Zygomatic implants?",
        "a": "Pterygoid implants are anchored into the pterygomaxillary plate at the very back of the upper jaw, providing solid posterior cantilever-free stability without touching the maxillary sinus."
      },
      {
        "q": "What permanent bridge is placed after healing?",
        "a": "After 3 months of osseointegration, we bond a custom CAD/CAM Monolithic Multilayer German Zirconia bridge (1200+ MPa) with a reinforced titanium substructure for unbreakable lifetime chewing strength."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic implant surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul for 3D CBCT planning, hospital surgery, and delivery of your 24h fixed temporary teeth. After 3 months of osseointegration, you return for a 5-day visit for your final monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic Package?",
        "a": "Our all-inclusive package covers all zygomatic implants, hospital operating room suite, specialist anesthesiologist, IV sedation/general anesthesia, 24h fixed bridge, final German Zirconia bridge, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you utilize?",
        "a": "We work exclusively with globally certified manufacturers including Nobel Biocare (NobelZygoma), Straumann Group, and Southern Implants, all backed by official international guarantee passports."
      },
      {
        "q": "Why are Zygomatic implants 70% more affordable in Istanbul than in the UK or US?",
        "a": "Lower hospital facility costs, favorable exchange rates, and high clinical specialization in Istanbul allow us to deliver world-class maxillofacial surgery at transparent, accessible rates without compromising safety."
      },
      {
        "q": "Do Zygomatic implants carry a lifetime warranty?",
        "a": "Yes. All zygomatic titanium implants come with an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Is there a risk of sinus infection after zygomatic surgery?",
        "a": "With modern extra-maxillary surgical protocols, the implant body is positioned outside or minimally through the sinus wall, reducing the incidence of post-operative sinusitis to less than 2% when following our post-op care."
      },
      {
        "q": "How do I begin my consultation before traveling from abroad?",
        "a": "Send your current panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief maxillofacial surgeon will formulate a comprehensive 3D reconstruction plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "es": {
    "introBadge": "IMPLANTES CIGOMÁTICOS Y PTERIGOIDEOS",
    "introTitle": "¿Qué son los implantes cigomáticos (pómulo)? | Master Smile Studio, Estambul, Turquía",
    "introLead": "Los implantes cigomáticos son una solución revolucionaria para casos graves de pérdida ósea maxilar, anclándose en el pómulo para ofrecer dientes fijos en 24h sin injertos óseos.",
    "introP1": "This innovative approach was developed in the 1990s by a Swedish professor, Per-Ingvar Brånemark, who pioneered the concept of osseointegration – the process of fusing dental implants with the surrounding bone. Zygomatic implants take this concept a step further by utilizing the zygomatic bone (cheekbone), which often remains strong and dense even when the upper jaw has deteriorated due to tooth loss or other factors.",
    "xrayImgAlt": "Zygomatic and Pterygoid (Cheekbone) Implants in Istanbul - dental implants in cheekbone",
    "xrayCaption": "3D Panoramic Craniofacial X-Ray: Quad Zygomatic & Pterygoid Implants Anchored Directly into Dense Cortical Cheekbone",
    "howWorkTitle": "¿Cómo funcionan los implantes cigomáticos?",
    "howWorkP": "Con una longitud de 30 a 55 mm, los implantes cigomáticos sobrepasan el maxilar atrofiado y se anclan en el hueso cigomático, proporcionando una fijación inquebrantable.",
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
    "compareTitle": "Comparación Clínica: Quad Zygoma vs. Híbrido vs. Injerto Óseo",
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
    "processTitle": "Protocolo de Precisión en 3 Fases para Implantes Cigomáticos",
    "processSubtitle": "Every zygomatic intervention at Master Smile Studio follows military-grade 3D CBCT computer guidance and hospital-grade surgical theater protocols.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D Craniofacial CBCT Bone Mapping & Stereolithographic Guide",
        "text": "High-definition 3D tomography scans the entire maxillofacial skeleton. A virtual surgery plan determines the exact 30–55mm trajectory through the zygomatic arch.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Virtual Simulation",
            "val": "Craniofacial Angulation Plan"
          },
          {
            "key": "Surgical Guide",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Maxillofacial Surgery & Same-Day Fixed Bridge (24h)",
        "text": "Performed under conscious IV sedation or general anesthesia. 2 to 4 extra-long titanium implants achieve 50–65 Ncm torque, allowing immediate screw-retained teeth in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Immediate load)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed CAD/CAM Acrylic in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia Permanent Full-Arch Bridge",
        "text": "After 3 months of complete cheekbone osseointegration, digital intraoral scans capture the soft-tissue profile. A 1200+ MPa German monolithic zirconia bridge is secured.",
        "specs": [
          {
            "key": "Restoration Type",
            "val": "Monolithic Multilayer Zirconia"
          },
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Titanium Framework Reinforced"
          }
        ]
      }
    ],
    "materialsTitle": "Materiales de Prótesis sobre Implantes Cigomáticos",
    "materialsSubtitle": "Restoring a zygomatic full arch requires maximum flexural strength and zero chipping risk under intense masticatory forces.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Titanium Substructure",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
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
        "acrylic": "Porous (Absorbs bacteria & odor)",
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
    "packagesTitle": "Paquetes Cigomáticos y Conversor de Divisas",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Nobel Biocare, Straumann, and specialized Zygomatic & All-on systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Arch (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extra-long Zygomatic Implants (NobelZygoma / Southern)",
          "2–4x Standard Anterior Titanium Implants",
          "Immediate screw-retained fixed provisional bridge (24h)",
          "Permanent CAD/CAM Monolithic German Zirconia Bridge",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Hospital surgical theater & IV Sedation / General Anesthesia",
          "5-Star Luxury Hotel Stay (Bed & Breakfast)",
          "VIP Mercedes Airport-Hotel-Clinic Chauffeur Transfers",
          "Lifetime International Manufacturer Warranty Passport"
        ]
      },
      {
        "name": "Quad Zygoma Total Reconstruction",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,700",
          "USD": "$9,800"
        },
        "included": [
          "4x Extra-long Zygomatic Implants (Bilateral Cheekbone Anchors)",
          "Complete elimination of bone grafts and 18-month wait times",
          "Immediate high-torque fixed screw-retained bridge in 24h",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Hospital operating room suite, full anesthesiology & MD team",
          "3D CBCT stereolithographic navigation planning",
          "7 Nights 5-Star Luxury Hotel Partner Accommodation",
          "VIP Private Mercedes Transfers throughout entire stay",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "All-on-6 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid SLActive)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€10,000",
          "GBP": "£8,600",
          "USD": "$11,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia/sedation",
          "Follow-up checks and post-op medication pack",
          "Airport, hotel & clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "All-on-6 Package – DXL German",
        "brand": "DXL Dental Implants (German Precision)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€6,500",
          "GBP": "£5,600",
          "USD": "$7,500"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & sterile pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      },
      {
        "name": "All-on-4 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid Implants)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,000",
          "GBP": "£6,900",
          "USD": "$9,300"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & medications",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Warranty Passport"
        ]
      },
      {
        "name": "All-on-4 Package – NucleOSS",
        "brand": "NucleOSS Dental Implants (Certified Turkish Brand)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€4,900",
          "GBP": "£4,200",
          "USD": "$5,700"
        },
        "included": [
          "4x NucleOSS Dental Implants with SLA surface",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks and post-op medication pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      }
    ],
    "costTitle": "Comparativa Internacional de Costes: Cigomáticos (Reino Unido / EE.UU. vs Estambul)",
    "costSubtitle": "Compare real clinical costs per full arch including extractions, zygomatic implants, hospital fees, sedation, hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Hospital Tier",
      "costPerArch": "Cost per Full Upper Arch (Zygomatic)",
      "inclusions": "Package Coverage & Surgical Theater Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£22,000 – £35,000 ($28,000 – $45,000)",
        "inclusions": "Surgical fee and zygomatic implants only. Hospital bed (£2,500), general anesthesia (£1,800), CBCT (£350), and zirconia bridge (£4,500) billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "United States (Maxillofacial Surgery Centers)",
        "costPerArch": "$30,000 – $55,000 (€28,000 – €50,000)",
        "inclusions": "Surgical center fee and implants. Anesthesiologist fee, bone profiling, laboratory work, hotel, and transport billed as extra line-items.",
        "valueAdvantage": "Baseline US Private Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €8,900 (£5,950 – £7,700)",
        "inclusions": "100% All-Inclusive: Certified Zygomatic Implants, hospital surgical suite, IV sedation, 24h provisional bridge, German Zirconia final bridge, 5-star hotel & VIP transfers.",
        "valueAdvantage": "70% – 75% Net Savings (World-Class Maxillofacial Team)"
      }
    ],
    "faqTitle": "Preguntas Frecuentes: Implantes Cigomáticos",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, surgical recovery, bone grafting alternatives, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical Zygomatic FAQ (Severe Bone Loss Solutions)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is a Zygomatic Implant and how is it anchored into the cheekbone?",
        "a": "A zygomatic implant is an extra-long (30mm to 55mm) medical titanium fixture designed for patients with severe upper jawbone loss. Instead of anchoring into the hollowed maxillary bone, it passes through the sinus cavity to anchor firmly into the dense zygomatic cheekbone."
      },
      {
        "q": "How does Zygomatic surgery eliminate the need for Sinus Lifts and Bone Grafts?",
        "a": "The cheekbone (zygoma) possesses exceptionally high cortical bone density that never resorbs with age, tooth loss, or periodontal disease. By anchoring into this permanent skeletal foundation, we bypass the sinuses completely—eliminating 12 to 18 months of grafting waits."
      },
      {
        "q": "Is Zygomatic implant surgery painful? What anesthesia is used?",
        "a": "No. The procedure is performed in an accredited surgical theater under conscious IV sedation or general anesthesia administered by a specialist anesthesiologist. Patients feel zero pain during surgery and experience only mild swelling managed with prescribed analgesics."
      },
      {
        "q": "Can I get fixed teeth in 24 hours with Zygomatic implants?",
        "a": "Yes. Because the zygomatic bone provides outstanding insertion torque (50 to 65+ Ncm), we connect a rigid screw-retained temporary bridge within 24 to 48 hours of surgery, allowing immediate smile aesthetics and functional chewing."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma uses 2 zygomatic implants in the posterior region combined with 2 to 4 standard implants in the front jaw. Quad Zygoma uses 4 zygomatic implants (2 on each side) for patients with 100% total bone resorption in both front and back upper jaws."
      },
      {
        "q": "What is the success rate of Zygomatic dental implants?",
        "a": "Clinical studies over 20+ years demonstrate a success rate exceeding 97% to 98.5%. Because the cheekbone does not suffer from alveolar bone resorption, long-term stability is exceptionally high."
      },
      {
        "q": "Who is a candidate for Zygomatic implants?",
        "a": "Candidates include individuals told by other clinics that they \"have no bone left\", patients with failed previous sinus bone grafts, long-term full denture wearers with razor-thin upper jaws, and post-oncological or trauma reconstruction patients."
      },
      {
        "q": "Are Zygomatic implants visible from the outside or will they change my face?",
        "a": "No. The implants are placed entirely underneath your facial soft tissues and gums. In fact, restoring your full arch of teeth restores lost vertical facial height and lip fullness, producing a natural youthful facial rejuvenation."
      },
      {
        "q": "How do Pterygoid implants complement Zygomatic implants?",
        "a": "Pterygoid implants are anchored into the pterygomaxillary plate at the very back of the upper jaw, providing solid posterior cantilever-free stability without touching the maxillary sinus."
      },
      {
        "q": "What permanent bridge is placed after healing?",
        "a": "After 3 months of osseointegration, we bond a custom CAD/CAM Monolithic Multilayer German Zirconia bridge (1200+ MPa) with a reinforced titanium substructure for unbreakable lifetime chewing strength."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic implant surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul for 3D CBCT planning, hospital surgery, and delivery of your 24h fixed temporary teeth. After 3 months of osseointegration, you return for a 5-day visit for your final monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic Package?",
        "a": "Our all-inclusive package covers all zygomatic implants, hospital operating room suite, specialist anesthesiologist, IV sedation/general anesthesia, 24h fixed bridge, final German Zirconia bridge, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you utilize?",
        "a": "We work exclusively with globally certified manufacturers including Nobel Biocare (NobelZygoma), Straumann Group, and Southern Implants, all backed by official international guarantee passports."
      },
      {
        "q": "Why are Zygomatic implants 70% more affordable in Istanbul than in the UK or US?",
        "a": "Lower hospital facility costs, favorable exchange rates, and high clinical specialization in Istanbul allow us to deliver world-class maxillofacial surgery at transparent, accessible rates without compromising safety."
      },
      {
        "q": "Do Zygomatic implants carry a lifetime warranty?",
        "a": "Yes. All zygomatic titanium implants come with an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Is there a risk of sinus infection after zygomatic surgery?",
        "a": "With modern extra-maxillary surgical protocols, the implant body is positioned outside or minimally through the sinus wall, reducing the incidence of post-operative sinusitis to less than 2% when following our post-op care."
      },
      {
        "q": "How do I begin my consultation before traveling from abroad?",
        "a": "Send your current panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief maxillofacial surgeon will formulate a comprehensive 3D reconstruction plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "ru": {
    "introBadge": "СКУЛОВАЯ ИМПЛАНТАЦИЯ ZYGOMA И PTERYGOID",
    "introTitle": "Что такое скуловые импланты (Zygoma)? | Master Smile Studio, Стамбул, Турция",
    "introLead": "Скуловые импланты Zygoma — революционное решение при критической атрофии верхней челюсти, фиксируемое в плотной скуловой кости без костной пластики.",
    "introP1": "This innovative approach was developed in the 1990s by a Swedish professor, Per-Ingvar Brånemark, who pioneered the concept of osseointegration – the process of fusing dental implants with the surrounding bone. Zygomatic implants take this concept a step further by utilizing the zygomatic bone (cheekbone), which often remains strong and dense even when the upper jaw has deteriorated due to tooth loss or other factors.",
    "xrayImgAlt": "Zygomatic and Pterygoid (Cheekbone) Implants in Istanbul - dental implants in cheekbone",
    "xrayCaption": "3D Panoramic Craniofacial X-Ray: Quad Zygomatic & Pterygoid Implants Anchored Directly into Dense Cortical Cheekbone",
    "howWorkTitle": "Как работают скуловые импланты?",
    "howWorkP": "Длина имплантов Zygoma (от 30 до 55 мм) позволяет закрепить их в стабильной скуловой кости в обход гайморовых пазух, обеспечивая несъемные зубы за 24 часа.",
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
    "compareTitle": "Объективное Сравнение: Quad Zygoma vs. Гибрид vs. Костная Пластика",
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
    "processTitle": "3-Этапный Протокол Скуловой Имплантации",
    "processSubtitle": "Every zygomatic intervention at Master Smile Studio follows military-grade 3D CBCT computer guidance and hospital-grade surgical theater protocols.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D Craniofacial CBCT Bone Mapping & Stereolithographic Guide",
        "text": "High-definition 3D tomography scans the entire maxillofacial skeleton. A virtual surgery plan determines the exact 30–55mm trajectory through the zygomatic arch.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Virtual Simulation",
            "val": "Craniofacial Angulation Plan"
          },
          {
            "key": "Surgical Guide",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Maxillofacial Surgery & Same-Day Fixed Bridge (24h)",
        "text": "Performed under conscious IV sedation or general anesthesia. 2 to 4 extra-long titanium implants achieve 50–65 Ncm torque, allowing immediate screw-retained teeth in 24h.",
        "specs": [
          {
            "key": "Anesthesia",
            "val": "Conscious IV Sedation / GA"
          },
          {
            "key": "Insertion Torque",
            "val": "50 – 65 Ncm (Immediate load)"
          },
          {
            "key": "Provisional Bridge",
            "val": "Fixed CAD/CAM Acrylic in 24h"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia Permanent Full-Arch Bridge",
        "text": "After 3 months of complete cheekbone osseointegration, digital intraoral scans capture the soft-tissue profile. A 1200+ MPa German monolithic zirconia bridge is secured.",
        "specs": [
          {
            "key": "Restoration Type",
            "val": "Monolithic Multilayer Zirconia"
          },
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Titanium Framework Reinforced"
          }
        ]
      }
    ],
    "materialsTitle": "Материалы Мостовидных Протезов Zygoma",
    "materialsSubtitle": "Restoring a zygomatic full arch requires maximum flexural strength and zero chipping risk under intense masticatory forces.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Fracture Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Titanium Substructure",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
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
        "acrylic": "Porous (Absorbs bacteria & odor)",
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
    "packagesTitle": "Пакеты Скуловой Имплантации и Калькулятор Валют",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Nobel Biocare, Straumann, and specialized Zygomatic & All-on systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price per Arch (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Hybrid Zygomatic Package",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€6,900",
          "GBP": "£5,950",
          "USD": "$7,600"
        },
        "included": [
          "2x Extra-long Zygomatic Implants (NobelZygoma / Southern)",
          "2–4x Standard Anterior Titanium Implants",
          "Immediate screw-retained fixed provisional bridge (24h)",
          "Permanent CAD/CAM Monolithic German Zirconia Bridge",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Hospital surgical theater & IV Sedation / General Anesthesia",
          "5-Star Luxury Hotel Stay (Bed & Breakfast)",
          "VIP Mercedes Airport-Hotel-Clinic Chauffeur Transfers",
          "Lifetime International Manufacturer Warranty Passport"
        ]
      },
      {
        "name": "Quad Zygoma Total Reconstruction",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€8,900",
          "GBP": "£7,700",
          "USD": "$9,800"
        },
        "included": [
          "4x Extra-long Zygomatic Implants (Bilateral Cheekbone Anchors)",
          "Complete elimination of bone grafts and 18-month wait times",
          "Immediate high-torque fixed screw-retained bridge in 24h",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Hospital operating room suite, full anesthesiology & MD team",
          "3D CBCT stereolithographic navigation planning",
          "7 Nights 5-Star Luxury Hotel Partner Accommodation",
          "VIP Private Mercedes Transfers throughout entire stay",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "All-on-6 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid SLActive)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€10,000",
          "GBP": "£8,600",
          "USD": "$11,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia/sedation",
          "Follow-up checks and post-op medication pack",
          "Airport, hotel & clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "All-on-6 Package – DXL German",
        "brand": "DXL Dental Implants (German Precision)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€6,500",
          "GBP": "£5,600",
          "USD": "$7,500"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12-14x Fixed Temporary Teeth in 24 hours",
          "12-14x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & sterile pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      },
      {
        "name": "All-on-4 Package – Straumann Swiss",
        "brand": "Straumann Group (Swiss Roxolid Implants)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€8,000",
          "GBP": "£6,900",
          "USD": "$9,300"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks during stay & medications",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Warranty Passport"
        ]
      },
      {
        "name": "All-on-4 Package – NucleOSS",
        "brand": "NucleOSS Dental Implants (Certified Turkish Brand)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€4,900",
          "GBP": "£4,200",
          "USD": "$5,700"
        },
        "included": [
          "4x NucleOSS Dental Implants with SLA surface",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Monolithic Zirconia Permanent Teeth",
          "Surgical planning with 3D CBCT & local anesthesia",
          "Follow-up checks and post-op medication pack",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime International Manufacturer Warranty"
        ]
      }
    ],
    "costTitle": "Международное Сравнение Цен: Zygoma (Великобритания / США vs Стамбул)",
    "costSubtitle": "Compare real clinical costs per full arch including extractions, zygomatic implants, hospital fees, sedation, hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Hospital Tier",
      "costPerArch": "Cost per Full Upper Arch (Zygomatic)",
      "inclusions": "Package Coverage & Surgical Theater Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerArch": "£22,000 – £35,000 ($28,000 – $45,000)",
        "inclusions": "Surgical fee and zygomatic implants only. Hospital bed (£2,500), general anesthesia (£1,800), CBCT (£350), and zirconia bridge (£4,500) billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "United States (Maxillofacial Surgery Centers)",
        "costPerArch": "$30,000 – $55,000 (€28,000 – €50,000)",
        "inclusions": "Surgical center fee and implants. Anesthesiologist fee, bone profiling, laboratory work, hotel, and transport billed as extra line-items.",
        "valueAdvantage": "Baseline US Private Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€6,900 – €8,900 (£5,950 – £7,700)",
        "inclusions": "100% All-Inclusive: Certified Zygomatic Implants, hospital surgical suite, IV sedation, 24h provisional bridge, German Zirconia final bridge, 5-star hotel & VIP transfers.",
        "valueAdvantage": "70% – 75% Net Savings (World-Class Maxillofacial Team)"
      }
    ],
    "faqTitle": "Часто Задаваемые Вопросы: Скуловые Импланты",
    "faqSubtitle": "Clinically verified answers regarding cheekbone anchoring, surgical recovery, bone grafting alternatives, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Surgical Zygomatic FAQ (Severe Bone Loss Solutions)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is a Zygomatic Implant and how is it anchored into the cheekbone?",
        "a": "A zygomatic implant is an extra-long (30mm to 55mm) medical titanium fixture designed for patients with severe upper jawbone loss. Instead of anchoring into the hollowed maxillary bone, it passes through the sinus cavity to anchor firmly into the dense zygomatic cheekbone."
      },
      {
        "q": "How does Zygomatic surgery eliminate the need for Sinus Lifts and Bone Grafts?",
        "a": "The cheekbone (zygoma) possesses exceptionally high cortical bone density that never resorbs with age, tooth loss, or periodontal disease. By anchoring into this permanent skeletal foundation, we bypass the sinuses completely—eliminating 12 to 18 months of grafting waits."
      },
      {
        "q": "Is Zygomatic implant surgery painful? What anesthesia is used?",
        "a": "No. The procedure is performed in an accredited surgical theater under conscious IV sedation or general anesthesia administered by a specialist anesthesiologist. Patients feel zero pain during surgery and experience only mild swelling managed with prescribed analgesics."
      },
      {
        "q": "Can I get fixed teeth in 24 hours with Zygomatic implants?",
        "a": "Yes. Because the zygomatic bone provides outstanding insertion torque (50 to 65+ Ncm), we connect a rigid screw-retained temporary bridge within 24 to 48 hours of surgery, allowing immediate smile aesthetics and functional chewing."
      },
      {
        "q": "What is the difference between Hybrid Zygoma and Quad Zygoma?",
        "a": "Hybrid Zygoma uses 2 zygomatic implants in the posterior region combined with 2 to 4 standard implants in the front jaw. Quad Zygoma uses 4 zygomatic implants (2 on each side) for patients with 100% total bone resorption in both front and back upper jaws."
      },
      {
        "q": "What is the success rate of Zygomatic dental implants?",
        "a": "Clinical studies over 20+ years demonstrate a success rate exceeding 97% to 98.5%. Because the cheekbone does not suffer from alveolar bone resorption, long-term stability is exceptionally high."
      },
      {
        "q": "Who is a candidate for Zygomatic implants?",
        "a": "Candidates include individuals told by other clinics that they \"have no bone left\", patients with failed previous sinus bone grafts, long-term full denture wearers with razor-thin upper jaws, and post-oncological or trauma reconstruction patients."
      },
      {
        "q": "Are Zygomatic implants visible from the outside or will they change my face?",
        "a": "No. The implants are placed entirely underneath your facial soft tissues and gums. In fact, restoring your full arch of teeth restores lost vertical facial height and lip fullness, producing a natural youthful facial rejuvenation."
      },
      {
        "q": "How do Pterygoid implants complement Zygomatic implants?",
        "a": "Pterygoid implants are anchored into the pterygomaxillary plate at the very back of the upper jaw, providing solid posterior cantilever-free stability without touching the maxillary sinus."
      },
      {
        "q": "What permanent bridge is placed after healing?",
        "a": "After 3 months of osseointegration, we bond a custom CAD/CAM Monolithic Multilayer German Zirconia bridge (1200+ MPa) with a reinforced titanium substructure for unbreakable lifetime chewing strength."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for Zygomatic implant surgery?",
        "a": "Your first visit requires 5 to 7 days in Istanbul for 3D CBCT planning, hospital surgery, and delivery of your 24h fixed temporary teeth. After 3 months of osseointegration, you return for a 5-day visit for your final monolithic zirconia bridge."
      },
      {
        "q": "What is included in the Master Smile Studio Zygomatic Package?",
        "a": "Our all-inclusive package covers all zygomatic implants, hospital operating room suite, specialist anesthesiologist, IV sedation/general anesthesia, 24h fixed bridge, final German Zirconia bridge, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Zygomatic implants do you utilize?",
        "a": "We work exclusively with globally certified manufacturers including Nobel Biocare (NobelZygoma), Straumann Group, and Southern Implants, all backed by official international guarantee passports."
      },
      {
        "q": "Why are Zygomatic implants 70% more affordable in Istanbul than in the UK or US?",
        "a": "Lower hospital facility costs, favorable exchange rates, and high clinical specialization in Istanbul allow us to deliver world-class maxillofacial surgery at transparent, accessible rates without compromising safety."
      },
      {
        "q": "Do Zygomatic implants carry a lifetime warranty?",
        "a": "Yes. All zygomatic titanium implants come with an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Is there a risk of sinus infection after zygomatic surgery?",
        "a": "With modern extra-maxillary surgical protocols, the implant body is positioned outside or minimally through the sinus wall, reducing the incidence of post-operative sinusitis to less than 2% when following our post-op care."
      },
      {
        "q": "How do I begin my consultation before traveling from abroad?",
        "a": "Send your current panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief maxillofacial surgeon will formulate a comprehensive 3D reconstruction plan and fixed price quotation within 24 hours."
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
      {/* 1. CLINICAL INTRODUCTION & SOHO DENT EXACT BRANEMARK HISTORY */}
      <section aria-labelledby="zygoma-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="zygoma-intro-heading" className={styles.introHeading}>
            {d.introTitle}
          </h2>
          <p className={styles.introLead}>{d.introLead}</p>

          <p className={styles.textP}>{d.introP1}</p>

          {/* 3D X-Ray Visual (soho rontgen) */}
          <div className={styles.xrayWrap}>
            <img
              src="https://sohodent.com/doc/filemanager/source/soho%20ro%CC%88ntgen.webp"
              alt={d.xrayImgAlt}
              className={styles.xrayImg}
              loading="lazy"
              width={800}
              height={800}
            />
            <div className={styles.xrayCaption}>
              {d.xrayCaption}
            </div>
          </div>

          {/* How Do Zygomatic (Cheekbone) Implants Work? */}
          <h3 className={styles.introHeading} style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginTop: '2rem' }}>
            {d.howWorkTitle}
          </h3>
          <p className={styles.textP}>{d.howWorkP}</p>

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

          {/* Full-width 16:9 Clinical Zygomatic Procedure Video (LR_r40rBzb4) */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/LR_r40rBzb4"
              title="Zygomatic and Pterygoid Dental Implants in Istanbul Clinical Procedure"
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

      {/* 2. FIND THE RIGHT TREATMENT FOR YOU (SECT77 ACCORDION) */}
      <TreatmentRightTreatmentAccordion />

      {/* 3. OBJECTIVE COMPARISON: QUAD ZYGOMA vs HYBRID ZYGOMA vs COMPLEX SINUS GRAFTING */}
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

      {/* 4. 3-PHASE PRECISION PROTOCOL (HORIZONTAL PEEK CAROUSEL ON MOBILE) */}
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

      {/* 5. PERMANENT BRIDGE MATERIALS COMPARISON */}
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

      {/* 6. TRANSPARENT PACKAGES & DYNAMIC CURRENCY SWITCHER */}
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

      {/* 7. INTERNATIONAL COST COMPARISON SECTION (UK / US vs ISTANBUL) */}
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

      {/* 8. REUSABLE: SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 9. REUSABLE: CLINIC TOUR */}
      <TreatmentClinicTourSection placeholderNum="ZYG-TOUR" />

      {/* 10. REUSABLE: FOUNDING SURGEONS */}
      <TreatmentDoctorsSection />

      {/* 11. BEFORE & AFTER TRANSFORMATIONS GALLERY */}
      <TreatmentBeforeAfterSliderSection />

      {/* 12. REVIEWS & TRUSTPILOT / GOOGLE 5-STAR */}
      <TreatmentReviewsSection />

      {/* 13. REUSABLE: PARALLAX BANNER */}
      <TreatmentParallaxBanner />

      {/* 14. REUSABLE: PATIENT VIDEO REELS */}
      <TreatmentPatientReelsSection />

      {/* 15. REUSABLE: DENTAL JOURNEY TIMELINE */}
      <TreatmentJourneySimpleSection />

      {/* 16. MASTER 17-QUESTION FAQ SECTION (CLINICAL & HEALTH TOURISM) */}
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

      {/* 17. LET'S CREATE YOUR PERFECT SMILE PLAN (4-STEP INTERACTIVE QUOTE FUNNEL) */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Zygomatic Implants" />
    </div>
  );
}
