'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentParallaxBanner from '@/components/treatment-sections/TreatmentParallaxBanner';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentRightTreatmentAccordion from '@/components/treatment-sections/TreatmentRightTreatmentAccordion';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './ZirconiumImplantDetailView.module.css';

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
  emax: string;
  pfm: string;
}

interface CompareTableRow {
  criteria: string;
  titanium: string;
  zirconium: string;
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
  introP3LinkImmediate: string;
  introP3Tail: string;

  candidacyTitle: string;
  candidacySubtitle: string;
  candidacyPoints: CandidacyPoint[];

  compareTitle: string;
  compareSubtitle: string;
  compareTableHeaders: {
    criteria: string;
    titanium: string;
    zirconium: string;
  };
  compareTableRows: CompareTableRow[];
  compareDecision: {
    whenTitaniumTitle: string;
    whenTitaniumText: string;
    whenZirconiumTitle: string;
    whenZirconiumText: string;
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
    "introBadge": "100% METAL-FREE CERAMIC IMPLANTOLOGY",
    "introTitle": "Zirconium Ceramic Dental Implants in Istanbul: Holistic, Biocompatible & Natural Aesthetics",
    "introLead": "Crafted from 100% metal-free Y-TZP (Yttria-Stabilized Tetragonal Zirconia Polycrystal) biocompatible ceramic, zirconium implants provide pure ivory tooth-root aesthetics without dark gum shadows, metal ion release, or oral galvanism.",
    "introP1": "Zirconium (ceramic) dental implants represent the pinnacle of biological and aesthetic dentistry. Unlike traditional titanium fixtures, ceramic implants are naturally white and match the organic optical properties of natural tooth roots. This makes them the ultimate choice for patients with thin, translucent gum biotypes in the anterior smile zone where dark titanium metal edges might otherwise shine through.",
    "introP2": "Beyond unmatched aesthetic translucency, zirconium ceramic is completely inert, electrically non-conductive, and hypoallergenic. Clinical studies prove that zirconia implants exhibit significantly lower bacterial plaque adhesion and soft-tissue inflammation rates compared to titanium—creating a tight mucosal seal that shields against peri-implantitis and bone loss.",
    "introP3Lead": "For high-strength titanium full-arch alternatives, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkImmediate": "Same-Day Immediate Implants",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zirconium Ceramic Implants?",
    "candidacySubtitle": "Ceramic implants are designed for patients seeking premium aesthetics, biological purity, and metal-free biocompatibility.",
    "candidacyPoints": [
      {
        "title": "Known Metal & Titanium Sensitivities",
        "desc": "Patients with documented allergies or hypersensitivities to titanium, nickel, or metal alloys."
      },
      {
        "title": "High Anterior Aesthetic Zone Demands",
        "desc": "Patients with thin gum biotypes requiring front tooth replacement without grey metal shine-through."
      },
      {
        "title": "Holistic & Biological Dental Philosophy",
        "desc": "Individuals seeking 100% metal-free, non-conductive, and chemically inert oral restorations."
      },
      {
        "title": "History of Peri-Implant Inflammation",
        "desc": "Patients prone to gingival inflammation who benefit from zirconia’s ultra-low plaque accumulation."
      }
    ],
    "compareTitle": "Objective Clinical Comparison: Zirconium Ceramic Implants vs. Grade 5 Titanium Implants",
    "compareSubtitle": "A scientific analysis of material biocompatibility, gumline aesthetics, oral galvanism, and clinical durability.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "titanium": "Grade 5 Medical Titanium",
      "zirconium": "Y-TZP Zirconium Ceramic ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Material Composition & Metal Content",
        "titanium": "Titanium-Aluminum-Vanadium Alloy (Ti-6Al-4V)",
        "zirconium": "100% Metal-Free Pure Zirconia Ceramic (Y-TZP)"
      },
      {
        "criteria": "Aesthetic Gumline Shadowing",
        "titanium": "Risk of grey shadow beneath thin gum tissue",
        "zirconium": "Zero Grey Shadow (Pure tooth-colored ivory)"
      },
      {
        "criteria": "Biocompatibility & Allergenicity",
        "titanium": "Biocompatible (Rare metal allergy reported ~1-4%)",
        "zirconium": "100% Hypoallergenic & Biologically Inert"
      },
      {
        "criteria": "Bacterial Plaque & Biofilm Adhesion",
        "titanium": "Standard bacterial adherence",
        "zirconium": "Ultra-low plaque adhesion (Protects gums)"
      },
      {
        "criteria": "Electrical Conductivity & Oral Galvanism",
        "titanium": "Conducts micro-currents with other metals",
        "zirconium": "Zero electrical conductivity (Non-conductive)"
      },
      {
        "criteria": "Flexural Strength & Toughness",
        "titanium": "Very High (850 – 1000 MPa)",
        "zirconium": "Extremely High (1200 – 1400 MPa Y-TZP)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "titanium": "All full-arch & high-load posterior cases",
        "zirconium": "Anterior smile zone & holistic metal-free care"
      }
    ],
    "compareDecision": {
      "whenTitaniumTitle": "When is Grade 5 Titanium Implantation Advised?",
      "whenTitaniumText": "Titanium remains the undisputed standard for extreme full-arch loading (such as Quad-Zygoma or complex cantilevered bridges) where maximum multi-angle flexural tolerance is required.",
      "whenZirconiumTitle": "When is Zirconium Ceramic the Superior Choice?",
      "whenZirconiumText": "Zirconium ceramic is the definitive gold standard for anterior aesthetic zones, patients with thin gum tissue, individuals with confirmed metal allergies, and holistic dental patients."
    },
    "processTitle": "3-Phase Precision Protocol for Zirconium Implants",
    "processSubtitle": "Every ceramic implant at Master Smile Studio follows computer-guided 3D digital planning for millimeter-precise aesthetic integration.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Stereolithographic Virtual Stent",
        "text": "High-resolution 3D CBCT scans assess bone volume and soft-tissue biotype. A custom 3D printed surgical stent is engineered for guided, flapless placement.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Soft-Tissue Scan",
            "val": "Digital Gum Biotype Mapping"
          },
          {
            "key": "Surgical Stent",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Atraumatic Flapless Placement & Aesthetic Temporary Crown",
        "text": "The ceramic implant is placed into the prepared site with high torque (35–45 Ncm). A tooth-colored temporary crown is placed to sculpt the emergence profile.",
        "specs": [
          {
            "key": "Surgical Technique",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Primary Torque",
            "val": "35 – 45 Ncm"
          },
          {
            "key": "Provisional Crown",
            "val": "Metal-Free CAD/CAM PMMA"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia or Ivoclar E-Max Final Crown",
        "text": "After 2–3 months of osseointegration, a final 3D intraoral digital scan is taken. A permanent 1200+ MPa monolithic multilayer zirconia or E-Max crown is bonded.",
        "specs": [
          {
            "key": "Crown Material",
            "val": "German Multilayer Zirconia / E-Max"
          },
          {
            "key": "Abutment",
            "val": "100% Solid Ceramic Abutment"
          },
          {
            "key": "Bonding System",
            "val": "Dual-Cure Biocompatible Resin"
          }
        ]
      }
    ],
    "materialsTitle": "Crown & Bridge Materials for Ceramic Implants: What Works Best?",
    "materialsSubtitle": "To preserve 100% metal-free purity and lifelike optical translucency, only all-ceramic restorations are used over zirconium implants.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Delamination Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Ceramic Abutment",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrivaled chewing strength for both front and molar restorations",
            "status": "good"
          },
          {
            "text": "Zero metal content guarantees complete biological harmony",
            "status": "good"
          },
          {
            "text": "100% non-porous glazed surface repels bacteria and plaque",
            "status": "good"
          },
          {
            "text": "Gradient translucency mirrors natural enamel depth",
            "status": "good"
          }
        ]
      },
      {
        "title": "Swiss Ivoclar E-Max Porcelain",
        "sub": "Lithium Disilicate Glass Ceramic for Ultra-High Aesthetics",
        "badge": "Anterior Aesthetic Star",
        "isGold": false,
        "material": "Pressable / Milled Lithium Disilicate (Ivoclar Vivadent)",
        "strength": "470 – 530 MPa (High)",
        "chippingRisk": "Very Low (Monolithic glass-ceramic structure)",
        "lifespan": "15 – 20+ Years",
        "features": [
          {
            "text": "Highest optical translucency (99.2% natural enamel match)",
            "status": "good"
          },
          {
            "text": "Optimal for single front tooth replacements on ceramic implants",
            "status": "good"
          },
          {
            "text": "Chemically etched for unmatched micromechanical bond strength",
            "status": "good"
          },
          {
            "text": "Lower flexural strength than zirconia (avoid for multi-unit bridges)",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Legacy Metal-Core Restorations (Not Recommended)",
        "badge": "Not Recommended",
        "isGold": false,
        "material": "Cobalt-Chromium Alloy with Baked Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "High (Porcelain chips off metal substrate)",
        "lifespan": "7 – 10 Years",
        "features": [
          {
            "text": "Defeats the purpose of choosing a metal-free ceramic implant",
            "status": "bad"
          },
          {
            "text": "Black metal collar causes dark shadowing along the gum margin",
            "status": "bad"
          },
          {
            "text": "Risk of galvanic current release in the oral cavity",
            "status": "bad"
          },
          {
            "text": "Higher plaque retention at the porcelain-metal junction",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "emax": "Swiss Ivoclar E-Max",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "emax": "470 – 530 MPa (High)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Metal-Free Purity",
        "zirconia": "100% Metal-Free Ceramic",
        "emax": "100% Metal-Free Glass Ceramic",
        "pfm": "Contains Cobalt-Chromium / Nickel"
      },
      {
        "criteria": "Anterior Light Translucency",
        "zirconia": "High (Natural gradient)",
        "emax": "Ultra-High (Peak optical match)",
        "pfm": "Opaque (Metal core blocks light)"
      },
      {
        "criteria": "Biocompatibility with Gums",
        "zirconia": "Superior (Zero inflammation)",
        "emax": "Superior (Zero inflammation)",
        "pfm": "Fair (Metal ions cause irritation)"
      },
      {
        "criteria": "Suitability over Ceramic Implants",
        "zirconia": "100% Recommended (Gold Standard)",
        "emax": "100% Recommended (Single anterior)",
        "pfm": "0% Contraindicated"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "zirconia": "Lifetime Guarantee",
        "emax": "15 – 20+ Years",
        "pfm": "7 – 10 Years"
      }
    ],
    "packagesTitle": "Zirconium Ceramic Implant Packages & Dynamic Currency Calculator",
    "packagesSubtitle": "All-inclusive single tooth and full-arch ceramic packages featuring certified Straumann PURE, Nobel Pearl, and Z-Systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Straumann PURE Ceramic Package",
        "brand": "Straumann Group (Swiss Made 100% Zirconia)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€850",
          "GBP": "£730",
          "USD": "$935"
        },
        "included": [
          "1x Genuine Straumann PURE Ceramic 100% metal-free implant",
          "ZLA surface topography for rapid bone osseointegration",
          "Custom solid ceramic abutment & aesthetic healing cap",
          "CAD/CAM Monolithic German Zirconia or Ivoclar E-Max Crown",
          "3D CBCT Tomography scan and digital implant guide",
          "Local anesthesia, sterile surgical consumables & medications",
          "Lifetime International Straumann Guarantee Passport",
          "VIP Mercedes Airport-Clinic Transfers (Hotel with multi-units)"
        ]
      },
      {
        "name": "Nobel Pearl Ceramic Package",
        "brand": "Nobel Biocare (Two-Piece Inter ceramic Solution)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€950",
          "GBP": "£820",
          "USD": "$1,050"
        },
        "included": [
          "1x Nobel Pearl 100% metal-free two-piece ceramic implant",
          "Vicarbo carbon-fiber reinforced screw for maximum strength",
          "Custom ivory ceramic abutment for zero dark shadows",
          "Monolithic Multilayer German Zirconia Permanent Crown",
          "3D CBCT Craniofacial diagnostics & surgical planning",
          "Complete surgical instrumentation & post-op medication pack",
          "Lifetime Global Nobel Biocare Warranty Passport",
          "VIP Chauffeur & Clinic Concierge assistance"
        ]
      },
      {
        "name": "Z-Systems Z-Look Ceramic Package",
        "brand": "Z-Systems International (German/Swiss Ceramic Pioneers)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€890",
          "GBP": "£765",
          "USD": "$980"
        },
        "included": [
          "1x Z-Systems Z-Look3 proprietary laser-treated ceramic fixture",
          "High primary stability in both soft and dense bone types",
          "Solid zirconia emergence profile abutment",
          "Bespoke CAD/CAM Monolithic Multilayer Zirconia Crown",
          "Full 3D digital oral imaging & surgical stent guidance",
          "Local anesthesia and complete anti-inflammatory pack",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Private Transportation included"
        ]
      },
      {
        "name": "Anterior Aesthetic Single Zone Package",
        "brand": "Straumann PURE / Nobel Pearl (Front Tooth Star)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€1,100",
          "GBP": "£950",
          "USD": "$1,200"
        },
        "included": [
          "1x Premium Swiss/German Ceramic Implant in anterior zone",
          "Immediate aesthetic temporary PMMA crown for zero smile gap",
          "Bespoke Ivoclar E-Max or High-Translucency Zirconia Crown",
          "Custom gum-sculpting ceramic healing abutment",
          "3D CBCT high-resolution aesthetic smile simulation",
          "Sterile surgical theatre & local anesthesia care",
          "Lifetime International Ceramic Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Partner Assistance"
        ]
      },
      {
        "name": "Full-Arch Ceramic Restoration (6 Implants)",
        "brand": "Straumann PURE / Z-Systems Full-Arch Metal-Free Arch",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "6x 100% Metal-Free Ceramic Implants per jaw / arch",
          "Fixed aesthetic screw-retained temporary bridge in 24 hours",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Computer-guided 3D CBCT surgical guide stent",
          "Full surgical operating suite & local anesthesia/sedation",
          "5-Star Luxury Hotel Partner Stay included",
          "VIP Mercedes Private Chauffeur Transfers included",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "Holistic Dual-Arch 100% Metal-Free Package",
        "brand": "Complete Upper & Lower 12-Ceramic Implant Reconstruction",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€14,500",
          "GBP": "£12,500",
          "USD": "$15,900"
        },
        "included": [
          "12x Certified Ceramic Implants (6 Upper + 6 Lower Jaws)",
          "Complete elimination of all oral metals and galvanic currents",
          "Fixed temporary acrylic bridges in both jaws within 24-48h",
          "Dual Full-Arch CAD/CAM Monolithic German Zirconia Bridges",
          "Hospital surgical suite, IV sedation & specialist MD team",
          "7 Nights 5-Star Luxury Hotel with Bed & Breakfast",
          "VIP Mercedes Chauffeur for all Airport & Clinic Transfers",
          "Lifetime International Manufacturer Warranty & Passports"
        ]
      }
    ],
    "costTitle": "International Cost Comparison: Zirconium Ceramic Implants (UK / Germany vs Istanbul)",
    "costSubtitle": "Compare real clinical costs per ceramic implant unit including abutment, 3D CBCT, laboratory CAD/CAM crown, and VIP concierge services.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerUnit": "Cost per Ceramic Implant (Unit)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerUnit": "£1,800 – £2,800 ($2,300 – $3,600)",
        "inclusions": "Surgical fixture only. Abutment (£450), CAD/CAM crown (£850), CBCT scan (£200), and consultation billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Biological Dental Clinics)",
        "costPerUnit": "€1,600 – €2,500 ($1,750 – $2,750)",
        "inclusions": "Surgeon and implant hardware. Ceramic abutment, zirconia crown, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerUnit": "€650 – €950 (£550 – £820)",
        "inclusions": "100% All-Inclusive: Genuine Straumann PURE / Nobel Pearl fixture, solid ceramic abutment, German Zirconia / E-Max crown, 3D CBCT & VIP transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Certified Swiss/German Purity)"
      }
    ],
    "faqTitle": "Frequently Asked Questions: Zirconium (Ceramic) Implants",
    "faqSubtitle": "Clinically verified answers regarding biocompatibility, metal-free purity, strength, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Biocompatibility FAQ (100% Metal-Free Implants)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zirconium (Ceramic) Dental Implants and how are they made?",
        "a": "Zirconium dental implants are 100% metal-free dental fixtures crafted from Y-TZP (Yttria-Stabilized Tetragonal Zirconia Polycrystal) high-performance ceramic. Unlike grey titanium, they are completely tooth-colored (pure ivory/white) and biologically inert, integrating seamlessly into living bone."
      },
      {
        "q": "Are Zirconium implants completely metal-free?",
        "a": "Yes. Zirconia (ZrO2) is a ceramic material formed through the oxidation of zirconium. Although zirconium is classified as a transition element on the periodic table, the ceramic state is entirely non-metallic, electrically non-conductive, and chemically stable in the oral cavity."
      },
      {
        "q": "How do Zirconium implants compare to traditional Titanium implants?",
        "a": "Both achieve comparable osseointegration success rates (97–98%). However, zirconium implants offer superior aesthetics in thin gum biotypes (no grey shadow), zero electrical conductivity (no oral galvanism), and significantly lower bacterial biofilm adhesion."
      },
      {
        "q": "Are ceramic implants as strong as titanium implants?",
        "a": "Modern Y-TZP zirconia ceramic exhibits extraordinary flexural strength exceeding 1200 to 1400 MPa, with high fracture toughness capable of withstanding chewing forces up to 600+ Newtons, making them fully reliable for both front and molar restorations."
      },
      {
        "q": "Who should choose ceramic implants over titanium?",
        "a": "Ceramic implants are specifically recommended for patients with confirmed metal allergies or chemical sensitivities, individuals following a holistic/biological lifestyle, patients with thin gum biotypes in the anterior aesthetic zone, and those prone to gingival inflammation."
      },
      {
        "q": "Can Zirconium implants cause allergic reactions or galvanism?",
        "a": "No. Zirconia is 100% hypoallergenic, non-immunogenic, and does not conduct electrical micro-currents (oral galvanism), which can occur when different metals interact in the mouth."
      },
      {
        "q": "What is the difference between 1-piece (monotype) and 2-piece ceramic implants?",
        "a": "One-piece ceramic implants have the implant post and abutment integrated into a single solid ceramic unit, eliminating micro-gaps for bacteria. Two-piece systems allow the abutment to be connected separately, offering greater prosthetic angle flexibility."
      },
      {
        "q": "How long does bone osseointegration take for ceramic implants?",
        "a": "Ceramic implants with specialized laser-treated surfaces (such as Straumann ZLA) osseointegrate in approximately 8 to 12 weeks, matching the healing timeline of conventional titanium fixtures."
      },
      {
        "q": "Are ceramic implants resistant to Peri-implantitis?",
        "a": "Clinical studies show that the ultra-smooth ceramic surface retains significantly less bacterial plaque than titanium, resulting in healthier gingival tissues and lower incidence of peri-implant mucositis and bone loss."
      },
      {
        "q": "What type of crown is placed over a ceramic implant?",
        "a": "To maintain 100% metal-free biocompatibility, we exclusively bond CAD/CAM Monolithic German Multilayer Zirconia or Swiss Ivoclar E-Max crowns on solid ceramic abutments."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for ceramic implant treatment?",
        "a": "Your first visit requires 3 to 5 days in Istanbul for 3D CBCT diagnostic planning, implant placement, and fitting of an aesthetic temporary crown. After 2 to 3 months of osseointegration, you return for a 5-day visit to receive your permanent zirconia crown."
      },
      {
        "q": "What is included in the Master Smile Studio Ceramic Package?",
        "a": "Our all-inclusive package covers the genuine ceramic implant, 3D CBCT scans, solid ceramic abutment, permanent CAD/CAM German Zirconia or E-Max crown, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Ceramic implants do you offer?",
        "a": "We exclusively work with world-leading certified ceramic implant manufacturers including Straumann PURE Ceramic (Switzerland), Nobel Pearl (Nobel Biocare), and Z-Systems (Germany/Switzerland)."
      },
      {
        "q": "Why are Ceramic Implants 60%–70% more affordable in Istanbul than in the UK or Germany?",
        "a": "Lower operational overheads, favorable currency exchange rates, and high clinical volume in Istanbul allow us to provide genuine Swiss and German ceramic systems at transparent, accessible rates without compromising clinical quality."
      },
      {
        "q": "Do Ceramic implants come with a warranty and medical passport?",
        "a": "Yes. Every ceramic implant is accompanied by an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Can Ceramic implants be used for full-arch or full-mouth restorations?",
        "a": "Yes. We frequently perform 6-implant full-arch ceramic restorations using Straumann PURE Ceramic fixtures combined with 1200+ MPa monolithic zirconia bridges for completely metal-free total rehabilitation."
      },
      {
        "q": "How do I start my consultation before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief oral surgeon and prosthodontist will formulate a tailored 3D treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "tr": {
    "introBadge": "%100 METAL-FREE BİYOLOJİK İMPLANTOLOJİ",
    "introTitle": "İstanbul Zirkonyum (Seramik) Diş İmplantı: Bütünsel, Doku Dostu ve Doğal Estetik",
    "introLead": "%100 metalsiz Y-TZP (İtriyum ile Güçlendirilmiş Zirkonyum Seramiği) biyouyumlu yapıdan üretilen zirkonyum implantlar, diş etinde gri yansıma yapmayan, metal iyonu salmayan ve ağızda galvanik akım oluşturmayan saf fildişi rengi diş kökü estetiği sunar.",
    "introP1": "Zirkonyum (seramik) diş implantları, estetik ve biyolojik diş hekimliğinin ulaştığı en üst noktadır. Geleneksel gri titanyum implantların aksine, doğal diş kökünün optik ve biyolojik özelliklerini birebir taklit eder. İnce diş eti yapısına sahip hastalarda ve özellikle ön estetik gülüş bölgesinde grileşme riskini tamamen ortadan kaldırır.",
    "introP2": "Kusursuz estetik ışık geçirgenliğinin yanı sıra, zirkonyum seramiği tamamen nötr, elektrik iletmeyen ve hipoalerjenik bir malzemedir. Klinik çalışmalar, zirkonyum implantların titanyuma kıyasla çok daha düşük bakteri plağı tuttuğunu, diş etiyle mükemmel bir biyolojik mühür oluşturarak peri-implantitis (implant çevresi kemik erimesi) riskini minimuma indirdiğini kanıtlamıştır.",
    "introP3Lead": "Yüksek çiğneme kuvvetine sahip titanyum alternatifler için ",
    "introP3LinkAll4": "All-on-4 İmplant Tedavisi",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 İmplant Tedavisi",
    "introP3And": " veya ",
    "introP3LinkImmediate": "Aynı Gün İmplant Tedavimizi",
    "introP3Tail": " inceleyebilirsiniz.",
    "candidacyTitle": "Zirkonyum Seramik İmplant İçin Uygun Bir Aday Mısınız?",
    "candidacySubtitle": "Seramik implantlar, en üst düzey estetik, biyolojik uyum ve %100 metalsiz bütünsel sağlık arayan hastalar için özel olarak tasarlanmıştır.",
    "candidacyPoints": [
      {
        "title": "Metal ve Titanyum Hassasiyeti Olanlar",
        "desc": "Titanyum, nikel veya diğer metallere karşı alerji, hassasiyet ya da bağışıklık tepkisi olan hastalar."
      },
      {
        "title": "Ön Bölge Yüksek Gülüş Estetiği Beklentisi",
        "desc": "İnce diş eti biyotipine sahip, ön dişlerinde gri yansıma ve kararma istemeyen hastalar."
      },
      {
        "title": "Bütünsel (Biyolojik) Diş Hekimliği Tercihi",
        "desc": "Vücuduna hiçbir metal sokmak istemeyen, elektriksel olarak nötr ve doku dostu tedavi arayanlar."
      },
      {
        "title": "Diş Eti İltihabına Yatkın Vakalar",
        "desc": "Düşük bakteri tutulumu sayesinde diş eti sağlığını korumak ve kemik kaybını önlemek isteyen hastalar."
      }
    ],
    "compareTitle": "Objektif Klinik Karşılaştırma: Zirkonyum Seramik İmplant vs. Titanyum İmplant",
    "compareSubtitle": "Biyouyumluluk, diş eti estetiği, bakteri tutunması ve klinik dayanıklılığın bilimsel analizi.",
    "compareTableHeaders": {
      "criteria": "Klinik Parametre",
      "titanium": "Medikal Grade 5 Titanyum",
      "zirconium": "Y-TZP Zirkonyum Seramik ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Malzeme Yapısı ve Metal İçeriği",
        "titanium": "Titanyum-Alüminyum-Vanadyum Alaşımı (Ti-6Al-4V)",
        "zirconium": "%100 Metalsiz Masif Zirkonyum Seramik (Y-TZP)"
      },
      {
        "criteria": "Diş Etinde Gri Yansıma Riski",
        "titanium": "İnce diş etlerinde grileşme ve metal gölgesi riski",
        "zirconium": "Sıfır Gri Gölge (Doğal fildişi/beyaz diş rengi)"
      },
      {
        "criteria": "Biyouyumluluk ve Alerji Riski",
        "titanium": "Biyouyumlu (Nadir de olsa %1-4 metal duyarlılığı)",
        "zirconium": "%100 Hipoalerjenik ve Biyolojik Olarak Nötr"
      },
      {
        "criteria": "Bakteri Plağı ve Biyofilm Tutunması",
        "titanium": "Standart bakteri tutunumu",
        "zirconium": "Ultra düşük plak tutulumu (Diş etini korur)"
      },
      {
        "criteria": "Elektriksel İletkenlik (Oral Galvanizm)",
        "titanium": "Diğer metallerle mikro-akım iletebilir",
        "zirconium": "Sıfır elektriksel iletkenlik (Tam yalıtkan)"
      },
      {
        "criteria": "Bükülme Direnci ve Sağlamlık",
        "titanium": "Çok Yüksek (850 – 1000 MPa)",
        "zirconium": "Son Derece Yüksek (1200 – 1400 MPa Y-TZP)"
      },
      {
        "criteria": "İdeal Klinik Kullanım Alanı",
        "titanium": "Tüm çene tam ark ve aşırı çiğneme alanları",
        "zirconium": "Ön estetik bölge ve metalsiz bütünsel tedaviler"
      }
    ],
    "compareDecision": {
      "whenTitaniumTitle": "Grade 5 Titanyum Ne Zaman Tercih Edilmelidir?",
      "whenTitaniumText": "Aşırı kemik erimesi olan tam çene vakalarında (Quad-Zygoma gibi) ve yüksek açılı köprülerde titanyumun mekanik esneme toleransı rakipsizdir.",
      "whenZirconiumTitle": "Zirkonyum Seramik Ne Zaman En Doğru Tercihtir?",
      "whenZirconiumText": "Ön gülüş hattında, ince diş eti yapısına sahip hastalarda, metal alerjisi olanlarda ve vücuduna metal girmesini istemeyen biyolojik diş hekimliği hastalarında tartışmasız tek seçenektir."
    },
    "processTitle": "3 Aşamalı Hassas Zirkonyum İmplant Protokolü",
    "processSubtitle": "Master Smile Studio’da her seramik implant 3D bilgisayarlı kılavuzlarla milimetrik hassasiyette uygulanır.",
    "processCards": [
      {
        "step": "AŞAMA 01",
        "title": "3D Tomografi & Sanal Cerrahi Rehber Kılavuzu",
        "text": "Yüksek çözünürlüklü tomografi ile kemik hacmi ve diş eti kalınlığı analiz edilir. Lazerle dikişsiz yerleşim için 3D cerrahi kılavuz üretilir.",
        "specs": [
          {
            "key": "CBCT Hassasiyeti",
            "val": "< 0.1 mm netlik"
          },
          {
            "key": "Diş Eti Analizi",
            "val": "Dijital Biyotip Taraması"
          },
          {
            "key": "Kılavuz Sistemi",
            "val": "Kişiye Özel 3D Cerrahi Stent"
          }
        ]
      },
      {
        "step": "AŞAMA 02",
        "title": "Dikişsiz Yerleşim ve Estetik Geçici Diş (1. Gün)",
        "text": "Seramik implant yüksek torkla (35–45 Ncm) yerleştirilir. Diş etini şekillendiren metalsiz geçici kuron anında takılarak estetik boşluk kapatılır.",
        "specs": [
          {
            "key": "Cerrahi Teknik",
            "val": "Minimal İnvaziv Dikişsiz"
          },
          {
            "key": "Sıkma Torku",
            "val": "35 – 45 Ncm"
          },
          {
            "key": "Geçici Diş",
            "val": "Metalsiz CAD/CAM PMMA"
          }
        ]
      },
      {
        "step": "AŞAMA 03",
        "title": "CAD/CAM Monolitik Zirkonyum veya E-Max Kalıcı Diş",
        "text": "2-3 aylık kemik kaynamasının ardından 3D dijital ağız içi tarama yapılır. Masif zirkonyum abutment üzerine 1200+ MPa Alman zirkonyum veya E-Max diş sabitlenir.",
        "specs": [
          {
            "key": "Kuron Malzemesi",
            "val": "Alman Zirkonyum / Ivoclar E-Max"
          },
          {
            "key": "Abutment",
            "val": "%100 Masif Seramik Dayanak"
          },
          {
            "key": "Yapıştırma",
            "val": "Biyouyumlu Rezin Siman"
          }
        ]
      }
    ],
    "materialsTitle": "Seramik İmplant Üstü Kuron Malzemeleri: Hangisi Daha İyi?",
    "materialsSubtitle": "%100 metalsiz saflığı ve doğal ışık geçirgenliğini korumak için zirkonyum implantların üzerine yalnızca tam seramik restorasyonlar uygulanır.",
    "materialsSpecLabels": {
      "material": "Malzeme Yapısı",
      "strength": "Bükülme Direnci",
      "chipping": "Kırılma / Atma Riski",
      "lifespan": "Klinik Ömür"
    },
    "materialsCards": [
      {
        "title": "Monolitik Çok Katmanlı Zirkonyum",
        "sub": "Masif Seramik Abutment Üzerine %100 Masif Alman Zirkonyum",
        "badge": "Klinik Standartımız",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Masif Çok Katmanlı Zirkonyum",
        "strength": "1200 – 1400 MPa (Kırılmaz Masif)",
        "chippingRisk": "%0 (Porselen atma riski sıfır)",
        "lifespan": "Ömür Boyu Dayanıklılık",
        "features": [
          {
            "text": "Hem ön hem arka azı dişlerinde sınırsız çiğneme dayanıklılığı",
            "status": "good"
          },
          {
            "text": "Metalsiz yapısı sayesinde mükemmel biyolojik doku uyumu",
            "status": "good"
          },
          {
            "text": "Gözeneksiz cam cilalı yüzey bakteri ve leke tutmaz",
            "status": "good"
          },
          {
            "text": "Doğal diş minesini taklit eden çok katmanlı ışık geçirgenliği",
            "status": "good"
          }
        ]
      },
      {
        "title": "İsviçre Ivoclar E-Max Porselen",
        "sub": "Ön Bölge İçin Ultra Estetik Lityum Disilikat Cam Seramik",
        "badge": "Ön Bölge Yıldızı",
        "isGold": false,
        "material": "Preslenebilir Lityum Disilikat (Ivoclar Vivadent)",
        "strength": "470 – 530 MPa (Yüksek)",
        "chippingRisk": "Çok Düşük (Masif cam seramik)",
        "lifespan": "15 – 20+ Yıl",
        "features": [
          {
            "text": "En yüksek ışık geçirgenliği (%99.2 doğal diş minesi benzerliği)",
            "status": "good"
          },
          {
            "text": "Ön tek diş seramik implant restorasyonları için mükemmel seçim",
            "status": "good"
          },
          {
            "text": "Kimyasal asitlemeyle seramik abutmente kusursuz kilitlenme",
            "status": "good"
          },
          {
            "text": "Zirkonyuma göre bükülme direnci daha düşüktür (köprülerde kullanılmaz)",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Metal Destekli Porselen (PFM)",
        "sub": "Metal Altyapılı Eski Tip Kaplamalar (Tavsiye Edilmez)",
        "badge": "Tavsiye Edilmez",
        "isGold": false,
        "material": "Kobalt-Krom Metal Altyapı + Porselen",
        "strength": "350 – 450 MPa (Orta)",
        "chippingRisk": "Yüksek (Porselenin metalden ayrılması)",
        "lifespan": "7 – 10 Yıl",
        "features": [
          {
            "text": "Metalsiz seramik implantın tüm biyolojik faydasını sıfırlar",
            "status": "bad"
          },
          {
            "text": "Diş eti sınırında siyah metal kenar yansıması ve kararma yapar",
            "status": "bad"
          },
          {
            "text": "Ağız içinde elektriksel galvanik akım oluşturma riski taşır",
            "status": "bad"
          },
          {
            "text": "Metal-porselen birleşim hattında plak ve bakteri birikir",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Karşılaştırma Kriteri",
      "zirconia": "Monolitik Zirkonyum ⭐",
      "emax": "İsviçre Ivoclar E-Max",
      "pfm": "Metal Destekli Porselen (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Bükülme Direnci",
        "zirconia": "1200 – 1400 MPa (Kırılmaz)",
        "emax": "470 – 530 MPa (Yüksek)",
        "pfm": "350 – 450 MPa (Orta)"
      },
      {
        "criteria": "Metalsiz Saflık",
        "zirconia": "%100 Metalsiz Seramik",
        "emax": "%100 Metalsiz Cam Seramik",
        "pfm": "Kobalt-Krom / Nikel İçerir"
      },
      {
        "criteria": "Ön Bölge Işık Geçirgenliği",
        "zirconia": "Yüksek (Doğal gradyan)",
        "emax": "Ultra Yüksek (Zirve estetik)",
        "pfm": "Opak (Metal ışığı engeller)"
      },
      {
        "criteria": "Diş Etiyle Biyouyumluluk",
        "zirconia": "Üstün (Sıfır iltihap)",
        "emax": "Üstün (Sıfır iltihap)",
        "pfm": "Orta (Metal iyonu tahrişi)"
      },
      {
        "criteria": "Seramik İmplantla Uyumu",
        "zirconia": "%100 Tavsiye Edilir",
        "emax": "%100 Tavsiye Edilir (Tek diş)",
        "pfm": "%0 Kesinlikle Önerilmez"
      },
      {
        "criteria": "Beklenen Klinik Ömür",
        "zirconia": "Ömür Boyu Garanti",
        "emax": "15 – 20+ Yıl",
        "pfm": "7 – 10 Yıl"
      }
    ],
    "packagesTitle": "Zirkonyum Seramik İmplant Paketleri ve Para Birimi Seçicisi",
    "packagesSubtitle": "Orijinal İsviçre Straumann PURE, Nobel Pearl ve Z-Systems sertifikalı tam şeffaf seramik paketler.",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket Kapsamı:",
    "pricePerArchLabel": "Fiyat (Her Şey Dahil):",
    "getQuoteBtn": "Ücretsiz Teklif Alın",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "packages": [
      {
        "name": "Straumann PURE Seramik Paketi",
        "brand": "Straumann Group (İsviçre Menşeli %100 Zirkonyum)",
        "duration": "İstanbul’da 3+5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€850",
          "GBP": "£730",
          "USD": "$935"
        },
        "included": [
          "1x Orijinal Straumann PURE Seramik %100 metalsiz implant",
          "Hızlı kemik kaynaması sağlayan özel ZLA seramik yüzey",
          "Kişiye özel masif seramik dayanak (abutment) & estetik başlık",
          "CAD/CAM Monolitik Alman Zirkonyum veya E-Max Kalıcı Kuron",
          "3D Tomografi (CBCT) ve dijital cerrahi kılavuz planlaması",
          "Lokal anestezi, steril cerrahi sarflar ve ilaç paketi",
          "Ömür Boyu Uluslararası Straumann Garanti Pasaportu",
          "VIP Mercedes Transferleri (Çoklu ünitelerde otel dahil)"
        ]
      },
      {
        "name": "Nobel Pearl Seramik Paketi",
        "brand": "Nobel Biocare (İki Parçalı İsviçre Çözümü)",
        "duration": "İstanbul’da 3+5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€950",
          "GBP": "£820",
          "USD": "$1,050"
        },
        "included": [
          "1x Nobel Pearl %100 metalsiz iki parçalı seramik implant",
          "Yüksek direnç sağlayan Vicarbo karbon-fiber vida sistemi",
          "Diş etinde sıfır kararma yapan fildişi seramik abutment",
          "Monolitik Çok Katmanlı Alman Zirkonyum Kalıcı Diş",
          "3D Tomografi teşhisi ve cerrahi planlama",
          "Tam cerrahi enstrümantasyon ve operasyon sonrası ilaçlar",
          "Ömür Boyu Küresel Nobel Biocare Garanti Pasaportu",
          "VIP Özel Şoförlü Transfer ve Klinik Danışmanlığı"
        ]
      },
      {
        "name": "Z-Systems Z-Look Seramik Paketi",
        "brand": "Z-Systems International (Alman/İsviçre Seramik Öncüsü)",
        "duration": "İstanbul’da 3+5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€890",
          "GBP": "£765",
          "USD": "$980"
        },
        "included": [
          "1x Z-Systems Z-Look3 patentli lazer işlemeli seramik gövde",
          "Yumuşak ve sert kemik dokularında üstün primer tutuculuk",
          "Masif zirkonyum çıkış profili dayanağı",
          "Kişiye özel CAD/CAM Monolitik Çok Katmanlı Zirkonyum Kuron",
          "3D Dijital Tomografi ve cerrahi stent rehberliği",
          "Lokal anestezi ve tam antienflamatuar bakım paketi",
          "Ömür Boyu Uluslararası Üretici Garanti Belgesi",
          "VIP Mercedes Özel Ulaşım Hizmeti Dahil"
        ]
      },
      {
        "name": "Ön Bölge Yüksek Estetik Tek Diş Paketi",
        "brand": "Straumann PURE / Nobel Pearl (Ön Diş Yıldızı)",
        "duration": "İstanbul’da 3+5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€1,100",
          "GBP": "£950",
          "USD": "$1,200"
        },
        "included": [
          "1x Ön estetik bölgeye özel İsviçre/Alman Seramik İmplant",
          "Boşluksuz gülüş için anında takılan estetik geçici PMMA diş",
          "Kişiye özel Ivoclar E-Max veya Ultra-Translüsent Zirkonyum Kuron",
          "Diş etini heykeltıraş gibi şekillendiren seramik iyileşme başlığı",
          "3D Tomografi ile yüksek çözünürlüklü dijital gülüş simülasyonu",
          "Steril cerrahi ünite ve lokal anestezi bakımı",
          "Ömür Boyu Uluslararası Seramik Garanti Pasaportu",
          "VIP Mercedes Transferi ve 5 Yıldızlı Otel Desteği"
        ]
      },
      {
        "name": "Tam Çene Seramik İmplant Paketi (6 İmplant)",
        "brand": "Straumann PURE / Z-Systems %100 Metalsiz Çene",
        "duration": "İstanbul’da 5+7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "6x Çene başına %100 Metalsiz Seramik İmplant",
          "24 saat içinde takılan vidalı sabit geçici tam çene köprüsü",
          "Kalıcı 1200+ MPa Monolitik Çok Katmanlı Alman Zirkonyum Köprü",
          "Bilgisayar kılavuzlu 3D Tomografi cerrahi kılavuz stenti",
          "Tam ameliyathane ünitesi ve anestezi/sedasyon yönetimi",
          "5 Yıldızlı Lüks Otel Konaklaması Dahil",
          "VIP Mercedes Özel Şoförlü Transferler Dahil",
          "Ömür Boyu Küresel Üretici Pasaportu ve Garantisi"
        ]
      },
      {
        "name": "Bütünsel Çift Çene %100 Metalsiz Paket",
        "brand": "Üst ve Alt Çene Tamamı Seramik 12 İmplant Tedavisi",
        "duration": "İstanbul’da 5+7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€14,500",
          "GBP": "£12,500",
          "USD": "$15,900"
        },
        "included": [
          "12x Sertifikalı Seramik İmplant (6 Üst Çene + 6 Alt Çene)",
          "Ağızdaki tüm metallerin ve galvanik akımların tamamen sıfırlanması",
          "Her iki çenede 24-48 saatte takılan sabit geçici köprüler",
          "Çift Çene CAD/CAM Monolitik Çok Katmanlı Zirkonyum Kalıcı Köprüler",
          "Hastane ameliyathanesi, IV sedasyon ve uzman hekim ekibi",
          "7 Gece 5 Yıldızlı Lüks Otel Konaklaması (Oda & Kahvaltı)",
          "Tüm Havalimanı ve Klinik Transferleri için Özel VIP Mercedes",
          "Ömür Boyu Uluslararası Garanti ve Medikal Pasaportlar"
        ]
      }
    ],
    "costTitle": "Uluslararası Maliyet Karşılaştırması: Zirkonyum Seramik İmplant (İngiltere / Almanya vs İstanbul)",
    "costSubtitle": "Abutment, 3D Tomografi, CAD/CAM zirkonyum kuron ve VIP transfer dahil tek diş seramik implantın reel maliyet analizi.",
    "costTableHeaders": {
      "country": "Ülke ve Klinik Seviyesi",
      "costPerUnit": "Seramik İmplant Birim Fiyatı",
      "inclusions": "Paket Kapsamı ve Laboratuvar Hizmetleri",
      "valueAdvantage": "Master Smile Studio Avantajı"
    },
    "costTableRows": [
      {
        "country": "İngiltere (Harley Street / Özel Londra Klinikler)",
        "costPerUnit": "£1,800 – £2,800 ($2,300 – $3,600)",
        "inclusions": "Yalnızca implant gövdesi. Seramik abutment (£450), Zirkonyum kuron (£850), Tomografi (£200) ayrıca ücretlendirilir.",
        "valueAdvantage": "İngiltere Piyasa Tabanı"
      },
      {
        "country": "Almanya / İsviçre (Biyolojik Diş Klinikleri)",
        "costPerUnit": "€1,600 – €2,500 ($1,750 – $2,750)",
        "inclusions": "Cerrah ve implant materyali. Seramik abutment, kuron, otel ve transferler ayrı kalemler olarak faturalandırılır.",
        "valueAdvantage": "Almanya Piyasa Tabanı"
      },
      {
        "country": "Master Smile Studio (İstanbul, Türkiye) ⭐",
        "costPerUnit": "€650 – €950 (£550 – £820)",
        "inclusions": "%100 Her Şey Dahil: Orijinal Straumann PURE / Nobel Pearl gövde, masif seramik abutment, Alman Zirkonyum/E-Max kuron, 3D Tomografi ve VIP transferler.",
        "valueAdvantage": "%60 – %70 Net Tasarruf (Orijinal İsviçre/Alman Saflığı)"
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular: Zirkonyum (Seramik) İmplantlar",
    "faqSubtitle": "Biyouyumluluk, metalsiz saflık, dayanıklılık ve İstanbul sağlık turizmi hakkında hekim onaylı yanıtlar.",
    "faqGroup1Title": "Klinik ve Biyouyumluluk SSS (%100 Metalsiz İmplantlar)",
    "faqGroup2Title": "Sağlık Turizmi, VIP Hizmetler ve Garanti SSS",
    "faqsPart1": [
      {
        "q": "Zirkonyum (Seramik) Diş İmplantı nedir ve nasıl üretilir?",
        "a": "Zirkonyum implantlar, Y-TZP (İtriyum ile Güçlendirilmiş Zirkonyum Seramiği) yüksek teknolojili biyouyumlu seramikten üretilen %100 metalsiz diş kökü vidalarıdır. Gri titanyumun aksine doğal diş kökü rengindedir (saf fildişi/beyaz) ve vücut dokularıyla kusursuz kaynar."
      },
      {
        "q": "Zirkonyum implantlar tamamen metalsiz midir?",
        "a": "Evet. Zirkonyum dioksit (ZrO2), zirkonyum elementinin oksitlenmesiyle oluşan masif bir seramiktir. Periyodik tabloda geçiş metali grubunda yer alsa da, seramik formu tamamen ametaldir, elektrik iletmez ve kimyasal olarak ağız sıvılarında %100 kararlıdır."
      },
      {
        "q": "Zirkonyum implant ile Titanyum implant arasındaki temel farklar nelerdir?",
        "a": "Her iki implant da %97-%98 gibi yüksek kemik kaynama başarısına sahiptir. Ancak zirkonyum implantlar ince diş etlerinde gri yansıma yapmaz, ağızda galvanik mikro-akım oluşturmaz ve bakteri plağını titanyuma göre çok daha az tutar."
      },
      {
        "q": "Seramik implantlar titanyum kadar sağlam mıdır?",
        "a": "Modern Y-TZP zirkonyum seramiği 1200 ile 1400 MPa üzerinde muazzam bir bükülme direncine sahiptir. 600+ Newton üzerindeki çiğneme kuvvetlerine tam dayanıklı olup hem ön dişlerde hem arka azı dişlerinde güvenle kullanılır."
      },
      {
        "q": "Kimler titanyum yerine zirkonyum implant tercih etmelidir?",
        "a": "Metal alerjisi veya kimyasal hassasiyeti olan hastalar, biyolojik ve bütünsel sağlığı benimseyenler, ön dişlerinde ince diş eti yapısına sahip olanlar ve diş eti iltihabına yatkın kişiler için seramik implant idealdir."
      },
      {
        "q": "Zirkonyum implant alerji veya ağızda metalik tat yapar mı?",
        "a": "Kesinlikle hayır. Zirkonya %100 hipoalerjeniktir, bağışıklık tepkisi tetiklemez ve ağızda metalik tat ya da diğer metallerle elektro-galvanik etkileşim oluşturmaz."
      },
      {
        "q": "Tek parçalı (monoblok) ile iki parçalı seramik implant arasındaki fark nedir?",
        "a": "Tek parçalı sistemlerde implant gövdesi ve dayanak (abutment) tek bir masif seramik bloktur, aralık bırakmaz ve bakteri sızıntısını sıfırlar. İki parçalı sistemler ise protez açısını ayarlamada cerraha ekstra esneklik sağlar."
      },
      {
        "q": "Zirkonyum implantların kemiğe kaynaması (osseointegrasyon) ne kadar sürer?",
        "a": "Lazer işlemeli özel yüzey teknolojisine sahip modern seramik implantlar (örneğin Straumann ZLA), standart titanyum implantlar gibi 8 ila 12 hafta içinde kemikle tam biyolojik entegrasyon sağlar."
      },
      {
        "q": "Zirkonyum implantlar diş eti iltihabına (Peri-implantitis) karşı dayanıklı mıdır?",
        "a": "Evet. Klinik araştırmalar, ultra pürüzsüz seramik yüzeyin titanyuma kıyasla belirgin şekilde daha az bakteri plağı tuttuğunu ve implant çevresi diş eti çekilmesini önlediğini kanıtlamıştır."
      },
      {
        "q": "Zirkonyum implant üzerine hangi kaplama yapılır?",
        "a": "%100 metalsiz saflığı korumak amacıyla seramik implantların üzerine yalnızca 5 eksenli CAD/CAM robotik sistemlerle üretilen Monolitik Alman Zirkonyum veya İsviçre Ivoclar E-Max kuronlar yapıştırılır."
      }
    ],
    "faqsPart2": [
      {
        "q": "Zirkonyum implant tedavisi için İstanbulda kaç gün kalmalıyım?",
        "a": "İlk ziyaretinizde 3D teşhis, implant yerleşimi ve geçici estetik diş takılması için 3-5 gün kalmanız yeterlidir. 2-3 aylık kemik kaynamasından sonra kalıcı zirkonyum dişiniz için 5 günlük ikinci bir ziyaret gereklidir."
      },
      {
        "q": "Master Smile Studio Seramik Paketine neler dahildir?",
        "a": "Orijinal sertifikalı seramik implant, 3D Tomografi, masif seramik abutment, kalıcı CAD/CAM Alman Zirkonyum veya E-Max diş, lokal anestezi, ilaç paketi, 5 yıldızlı otel ve VIP Mercedes transferleri dahildir."
      },
      {
        "q": "Hangi seramik implant markalarını kullanıyorsunuz?",
        "a": "Yalnızca klinik güvenilirliği uluslararası düzeyde kanıtlanmış Straumann PURE Ceramic (İsviçre), Nobel Pearl (Nobel Biocare) ve Z-Systems (Almanya/İsviçre) markalarıyla çalışıyoruz."
      },
      {
        "q": "Türkiye’de seramik implant fiyatları neden İngiltere ve Almanyaya göre %65 daha uygundur?",
        "a": "İstanbuldaki klinik işletme ve laboratuvar avantajları sayesinde aynı orijinal İsviçre ve Alman seramik sistemlerini Avrupa fiyatlarının üçte birine sunabiliyoruz."
      },
      {
        "q": "Garanti koşulları ve medikal pasaport veriliyor mu?",
        "a": "Evet. Uygulanan her seramik implant için üretici firmanın Ömür Boyu Uluslararası Garanti Sertifikası ve seri numaralı orijinal medikal pasaportu hastamıza teslim edilir."
      },
      {
        "q": "Tam çene dişsizlik vakalarında seramik implant uygulanabilir mi?",
        "a": "Evet. Tek çenede 6 adet Straumann PURE seramik implant desteği ve monolitik zirkonyum köprü kombinasyonu ile %100 metalsiz tam çene restorasyonları başarıyla uyguluyoruz."
      },
      {
        "q": "Yurt dışından gelmeden önce tedavi planımı nasıl alabilirim?",
        "a": "Mevcut panoramik röntgeninizi veya 3D Tomografinizi WhatsApp üzerinden göndermeniz yeterlidir. Baş cerrahımız 24 saat içinde 3D tedavi planınızı ve net fiyat teklifinizi hazırlar."
      }
    ]
  },
  "de": {
    "introBadge": "100% METALLFREIE KERAMIKIMPLANTATE",
    "introTitle": "Zirkonium-Keramikimplantate in Istanbul: Ganzheitlich & Natürlich",
    "introLead": "100% metallfreie Y-TZP Keramikimplantate für pure Zahnfarbenästhetik ohne graue Zahnfleischränder oder Metallallergien.",
    "introP1": "Zirconium (ceramic) dental implants represent the pinnacle of biological and aesthetic dentistry. Unlike traditional titanium fixtures, ceramic implants are naturally white and match the organic optical properties of natural tooth roots. This makes them the ultimate choice for patients with thin, translucent gum biotypes in the anterior smile zone where dark titanium metal edges might otherwise shine through.",
    "introP2": "Beyond unmatched aesthetic translucency, zirconium ceramic is completely inert, electrically non-conductive, and hypoallergenic. Clinical studies prove that zirconia implants exhibit significantly lower bacterial plaque adhesion and soft-tissue inflammation rates compared to titanium—creating a tight mucosal seal that shields against peri-implantitis and bone loss.",
    "introP3Lead": "For high-strength titanium full-arch alternatives, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkImmediate": "Same-Day Immediate Implants",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zirconium Ceramic Implants?",
    "candidacySubtitle": "Ceramic implants are designed for patients seeking premium aesthetics, biological purity, and metal-free biocompatibility.",
    "candidacyPoints": [
      {
        "title": "Known Metal & Titanium Sensitivities",
        "desc": "Patients with documented allergies or hypersensitivities to titanium, nickel, or metal alloys."
      },
      {
        "title": "High Anterior Aesthetic Zone Demands",
        "desc": "Patients with thin gum biotypes requiring front tooth replacement without grey metal shine-through."
      },
      {
        "title": "Holistic & Biological Dental Philosophy",
        "desc": "Individuals seeking 100% metal-free, non-conductive, and chemically inert oral restorations."
      },
      {
        "title": "History of Peri-Implant Inflammation",
        "desc": "Patients prone to gingival inflammation who benefit from zirconia’s ultra-low plaque accumulation."
      }
    ],
    "compareTitle": "Objektiver Klinischer Vergleich: Zirkon-Keramik vs. Titanimplantate",
    "compareSubtitle": "A scientific analysis of material biocompatibility, gumline aesthetics, oral galvanism, and clinical durability.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "titanium": "Grade 5 Medical Titanium",
      "zirconium": "Y-TZP Zirconium Ceramic ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Material Composition & Metal Content",
        "titanium": "Titanium-Aluminum-Vanadium Alloy (Ti-6Al-4V)",
        "zirconium": "100% Metal-Free Pure Zirconia Ceramic (Y-TZP)"
      },
      {
        "criteria": "Aesthetic Gumline Shadowing",
        "titanium": "Risk of grey shadow beneath thin gum tissue",
        "zirconium": "Zero Grey Shadow (Pure tooth-colored ivory)"
      },
      {
        "criteria": "Biocompatibility & Allergenicity",
        "titanium": "Biocompatible (Rare metal allergy reported ~1-4%)",
        "zirconium": "100% Hypoallergenic & Biologically Inert"
      },
      {
        "criteria": "Bacterial Plaque & Biofilm Adhesion",
        "titanium": "Standard bacterial adherence",
        "zirconium": "Ultra-low plaque adhesion (Protects gums)"
      },
      {
        "criteria": "Electrical Conductivity & Oral Galvanism",
        "titanium": "Conducts micro-currents with other metals",
        "zirconium": "Zero electrical conductivity (Non-conductive)"
      },
      {
        "criteria": "Flexural Strength & Toughness",
        "titanium": "Very High (850 – 1000 MPa)",
        "zirconium": "Extremely High (1200 – 1400 MPa Y-TZP)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "titanium": "All full-arch & high-load posterior cases",
        "zirconium": "Anterior smile zone & holistic metal-free care"
      }
    ],
    "compareDecision": {
      "whenTitaniumTitle": "When is Grade 5 Titanium Implantation Advised?",
      "whenTitaniumText": "Titanium remains the undisputed standard for extreme full-arch loading (such as Quad-Zygoma or complex cantilevered bridges) where maximum multi-angle flexural tolerance is required.",
      "whenZirconiumTitle": "When is Zirconium Ceramic the Superior Choice?",
      "whenZirconiumText": "Zirconium ceramic is the definitive gold standard for anterior aesthetic zones, patients with thin gum tissue, individuals with confirmed metal allergies, and holistic dental patients."
    },
    "processTitle": "3-Phasen-Präzisionsprotokoll für Keramikimplantate",
    "processSubtitle": "Every ceramic implant at Master Smile Studio follows computer-guided 3D digital planning for millimeter-precise aesthetic integration.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Stereolithographic Virtual Stent",
        "text": "High-resolution 3D CBCT scans assess bone volume and soft-tissue biotype. A custom 3D printed surgical stent is engineered for guided, flapless placement.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Soft-Tissue Scan",
            "val": "Digital Gum Biotype Mapping"
          },
          {
            "key": "Surgical Stent",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Atraumatic Flapless Placement & Aesthetic Temporary Crown",
        "text": "The ceramic implant is placed into the prepared site with high torque (35–45 Ncm). A tooth-colored temporary crown is placed to sculpt the emergence profile.",
        "specs": [
          {
            "key": "Surgical Technique",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Primary Torque",
            "val": "35 – 45 Ncm"
          },
          {
            "key": "Provisional Crown",
            "val": "Metal-Free CAD/CAM PMMA"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia or Ivoclar E-Max Final Crown",
        "text": "After 2–3 months of osseointegration, a final 3D intraoral digital scan is taken. A permanent 1200+ MPa monolithic multilayer zirconia or E-Max crown is bonded.",
        "specs": [
          {
            "key": "Crown Material",
            "val": "German Multilayer Zirconia / E-Max"
          },
          {
            "key": "Abutment",
            "val": "100% Solid Ceramic Abutment"
          },
          {
            "key": "Bonding System",
            "val": "Dual-Cure Biocompatible Resin"
          }
        ]
      }
    ],
    "materialsTitle": "Kronenmaterialien auf Keramikimplantaten",
    "materialsSubtitle": "To preserve 100% metal-free purity and lifelike optical translucency, only all-ceramic restorations are used over zirconium implants.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Delamination Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Ceramic Abutment",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrivaled chewing strength for both front and molar restorations",
            "status": "good"
          },
          {
            "text": "Zero metal content guarantees complete biological harmony",
            "status": "good"
          },
          {
            "text": "100% non-porous glazed surface repels bacteria and plaque",
            "status": "good"
          },
          {
            "text": "Gradient translucency mirrors natural enamel depth",
            "status": "good"
          }
        ]
      },
      {
        "title": "Swiss Ivoclar E-Max Porcelain",
        "sub": "Lithium Disilicate Glass Ceramic for Ultra-High Aesthetics",
        "badge": "Anterior Aesthetic Star",
        "isGold": false,
        "material": "Pressable / Milled Lithium Disilicate (Ivoclar Vivadent)",
        "strength": "470 – 530 MPa (High)",
        "chippingRisk": "Very Low (Monolithic glass-ceramic structure)",
        "lifespan": "15 – 20+ Years",
        "features": [
          {
            "text": "Highest optical translucency (99.2% natural enamel match)",
            "status": "good"
          },
          {
            "text": "Optimal for single front tooth replacements on ceramic implants",
            "status": "good"
          },
          {
            "text": "Chemically etched for unmatched micromechanical bond strength",
            "status": "good"
          },
          {
            "text": "Lower flexural strength than zirconia (avoid for multi-unit bridges)",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Legacy Metal-Core Restorations (Not Recommended)",
        "badge": "Not Recommended",
        "isGold": false,
        "material": "Cobalt-Chromium Alloy with Baked Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "High (Porcelain chips off metal substrate)",
        "lifespan": "7 – 10 Years",
        "features": [
          {
            "text": "Defeats the purpose of choosing a metal-free ceramic implant",
            "status": "bad"
          },
          {
            "text": "Black metal collar causes dark shadowing along the gum margin",
            "status": "bad"
          },
          {
            "text": "Risk of galvanic current release in the oral cavity",
            "status": "bad"
          },
          {
            "text": "Higher plaque retention at the porcelain-metal junction",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "emax": "Swiss Ivoclar E-Max",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "emax": "470 – 530 MPa (High)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Metal-Free Purity",
        "zirconia": "100% Metal-Free Ceramic",
        "emax": "100% Metal-Free Glass Ceramic",
        "pfm": "Contains Cobalt-Chromium / Nickel"
      },
      {
        "criteria": "Anterior Light Translucency",
        "zirconia": "High (Natural gradient)",
        "emax": "Ultra-High (Peak optical match)",
        "pfm": "Opaque (Metal core blocks light)"
      },
      {
        "criteria": "Biocompatibility with Gums",
        "zirconia": "Superior (Zero inflammation)",
        "emax": "Superior (Zero inflammation)",
        "pfm": "Fair (Metal ions cause irritation)"
      },
      {
        "criteria": "Suitability over Ceramic Implants",
        "zirconia": "100% Recommended (Gold Standard)",
        "emax": "100% Recommended (Single anterior)",
        "pfm": "0% Contraindicated"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "zirconia": "Lifetime Guarantee",
        "emax": "15 – 20+ Years",
        "pfm": "7 – 10 Years"
      }
    ],
    "packagesTitle": "Keramikimplantat-Pakete & Währungsrechner",
    "packagesSubtitle": "All-inclusive single tooth and full-arch ceramic packages featuring certified Straumann PURE, Nobel Pearl, and Z-Systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Straumann PURE Ceramic Package",
        "brand": "Straumann Group (Swiss Made 100% Zirconia)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€850",
          "GBP": "£730",
          "USD": "$935"
        },
        "included": [
          "1x Genuine Straumann PURE Ceramic 100% metal-free implant",
          "ZLA surface topography for rapid bone osseointegration",
          "Custom solid ceramic abutment & aesthetic healing cap",
          "CAD/CAM Monolithic German Zirconia or Ivoclar E-Max Crown",
          "3D CBCT Tomography scan and digital implant guide",
          "Local anesthesia, sterile surgical consumables & medications",
          "Lifetime International Straumann Guarantee Passport",
          "VIP Mercedes Airport-Clinic Transfers (Hotel with multi-units)"
        ]
      },
      {
        "name": "Nobel Pearl Ceramic Package",
        "brand": "Nobel Biocare (Two-Piece Inter ceramic Solution)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€950",
          "GBP": "£820",
          "USD": "$1,050"
        },
        "included": [
          "1x Nobel Pearl 100% metal-free two-piece ceramic implant",
          "Vicarbo carbon-fiber reinforced screw for maximum strength",
          "Custom ivory ceramic abutment for zero dark shadows",
          "Monolithic Multilayer German Zirconia Permanent Crown",
          "3D CBCT Craniofacial diagnostics & surgical planning",
          "Complete surgical instrumentation & post-op medication pack",
          "Lifetime Global Nobel Biocare Warranty Passport",
          "VIP Chauffeur & Clinic Concierge assistance"
        ]
      },
      {
        "name": "Z-Systems Z-Look Ceramic Package",
        "brand": "Z-Systems International (German/Swiss Ceramic Pioneers)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€890",
          "GBP": "£765",
          "USD": "$980"
        },
        "included": [
          "1x Z-Systems Z-Look3 proprietary laser-treated ceramic fixture",
          "High primary stability in both soft and dense bone types",
          "Solid zirconia emergence profile abutment",
          "Bespoke CAD/CAM Monolithic Multilayer Zirconia Crown",
          "Full 3D digital oral imaging & surgical stent guidance",
          "Local anesthesia and complete anti-inflammatory pack",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Private Transportation included"
        ]
      },
      {
        "name": "Anterior Aesthetic Single Zone Package",
        "brand": "Straumann PURE / Nobel Pearl (Front Tooth Star)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€1,100",
          "GBP": "£950",
          "USD": "$1,200"
        },
        "included": [
          "1x Premium Swiss/German Ceramic Implant in anterior zone",
          "Immediate aesthetic temporary PMMA crown for zero smile gap",
          "Bespoke Ivoclar E-Max or High-Translucency Zirconia Crown",
          "Custom gum-sculpting ceramic healing abutment",
          "3D CBCT high-resolution aesthetic smile simulation",
          "Sterile surgical theatre & local anesthesia care",
          "Lifetime International Ceramic Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Partner Assistance"
        ]
      },
      {
        "name": "Full-Arch Ceramic Restoration (6 Implants)",
        "brand": "Straumann PURE / Z-Systems Full-Arch Metal-Free Arch",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "6x 100% Metal-Free Ceramic Implants per jaw / arch",
          "Fixed aesthetic screw-retained temporary bridge in 24 hours",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Computer-guided 3D CBCT surgical guide stent",
          "Full surgical operating suite & local anesthesia/sedation",
          "5-Star Luxury Hotel Partner Stay included",
          "VIP Mercedes Private Chauffeur Transfers included",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "Holistic Dual-Arch 100% Metal-Free Package",
        "brand": "Complete Upper & Lower 12-Ceramic Implant Reconstruction",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€14,500",
          "GBP": "£12,500",
          "USD": "$15,900"
        },
        "included": [
          "12x Certified Ceramic Implants (6 Upper + 6 Lower Jaws)",
          "Complete elimination of all oral metals and galvanic currents",
          "Fixed temporary acrylic bridges in both jaws within 24-48h",
          "Dual Full-Arch CAD/CAM Monolithic German Zirconia Bridges",
          "Hospital surgical suite, IV sedation & specialist MD team",
          "7 Nights 5-Star Luxury Hotel with Bed & Breakfast",
          "VIP Mercedes Chauffeur for all Airport & Clinic Transfers",
          "Lifetime International Manufacturer Warranty & Passports"
        ]
      }
    ],
    "costTitle": "Internationaler Kostenvergleich: Keramikimplantate (UK / Deutschland vs. Istanbul)",
    "costSubtitle": "Compare real clinical costs per ceramic implant unit including abutment, 3D CBCT, laboratory CAD/CAM crown, and VIP concierge services.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerUnit": "Cost per Ceramic Implant (Unit)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerUnit": "£1,800 – £2,800 ($2,300 – $3,600)",
        "inclusions": "Surgical fixture only. Abutment (£450), CAD/CAM crown (£850), CBCT scan (£200), and consultation billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Biological Dental Clinics)",
        "costPerUnit": "€1,600 – €2,500 ($1,750 – $2,750)",
        "inclusions": "Surgeon and implant hardware. Ceramic abutment, zirconia crown, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerUnit": "€650 – €950 (£550 – £820)",
        "inclusions": "100% All-Inclusive: Genuine Straumann PURE / Nobel Pearl fixture, solid ceramic abutment, German Zirconia / E-Max crown, 3D CBCT & VIP transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Certified Swiss/German Purity)"
      }
    ],
    "faqTitle": "Häufig gestellte Fragen: Keramikimplantate",
    "faqSubtitle": "Clinically verified answers regarding biocompatibility, metal-free purity, strength, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Biocompatibility FAQ (100% Metal-Free Implants)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zirconium (Ceramic) Dental Implants and how are they made?",
        "a": "Zirconium dental implants are 100% metal-free dental fixtures crafted from Y-TZP (Yttria-Stabilized Tetragonal Zirconia Polycrystal) high-performance ceramic. Unlike grey titanium, they are completely tooth-colored (pure ivory/white) and biologically inert, integrating seamlessly into living bone."
      },
      {
        "q": "Are Zirconium implants completely metal-free?",
        "a": "Yes. Zirconia (ZrO2) is a ceramic material formed through the oxidation of zirconium. Although zirconium is classified as a transition element on the periodic table, the ceramic state is entirely non-metallic, electrically non-conductive, and chemically stable in the oral cavity."
      },
      {
        "q": "How do Zirconium implants compare to traditional Titanium implants?",
        "a": "Both achieve comparable osseointegration success rates (97–98%). However, zirconium implants offer superior aesthetics in thin gum biotypes (no grey shadow), zero electrical conductivity (no oral galvanism), and significantly lower bacterial biofilm adhesion."
      },
      {
        "q": "Are ceramic implants as strong as titanium implants?",
        "a": "Modern Y-TZP zirconia ceramic exhibits extraordinary flexural strength exceeding 1200 to 1400 MPa, with high fracture toughness capable of withstanding chewing forces up to 600+ Newtons, making them fully reliable for both front and molar restorations."
      },
      {
        "q": "Who should choose ceramic implants over titanium?",
        "a": "Ceramic implants are specifically recommended for patients with confirmed metal allergies or chemical sensitivities, individuals following a holistic/biological lifestyle, patients with thin gum biotypes in the anterior aesthetic zone, and those prone to gingival inflammation."
      },
      {
        "q": "Can Zirconium implants cause allergic reactions or galvanism?",
        "a": "No. Zirconia is 100% hypoallergenic, non-immunogenic, and does not conduct electrical micro-currents (oral galvanism), which can occur when different metals interact in the mouth."
      },
      {
        "q": "What is the difference between 1-piece (monotype) and 2-piece ceramic implants?",
        "a": "One-piece ceramic implants have the implant post and abutment integrated into a single solid ceramic unit, eliminating micro-gaps for bacteria. Two-piece systems allow the abutment to be connected separately, offering greater prosthetic angle flexibility."
      },
      {
        "q": "How long does bone osseointegration take for ceramic implants?",
        "a": "Ceramic implants with specialized laser-treated surfaces (such as Straumann ZLA) osseointegrate in approximately 8 to 12 weeks, matching the healing timeline of conventional titanium fixtures."
      },
      {
        "q": "Are ceramic implants resistant to Peri-implantitis?",
        "a": "Clinical studies show that the ultra-smooth ceramic surface retains significantly less bacterial plaque than titanium, resulting in healthier gingival tissues and lower incidence of peri-implant mucositis and bone loss."
      },
      {
        "q": "What type of crown is placed over a ceramic implant?",
        "a": "To maintain 100% metal-free biocompatibility, we exclusively bond CAD/CAM Monolithic German Multilayer Zirconia or Swiss Ivoclar E-Max crowns on solid ceramic abutments."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for ceramic implant treatment?",
        "a": "Your first visit requires 3 to 5 days in Istanbul for 3D CBCT diagnostic planning, implant placement, and fitting of an aesthetic temporary crown. After 2 to 3 months of osseointegration, you return for a 5-day visit to receive your permanent zirconia crown."
      },
      {
        "q": "What is included in the Master Smile Studio Ceramic Package?",
        "a": "Our all-inclusive package covers the genuine ceramic implant, 3D CBCT scans, solid ceramic abutment, permanent CAD/CAM German Zirconia or E-Max crown, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Ceramic implants do you offer?",
        "a": "We exclusively work with world-leading certified ceramic implant manufacturers including Straumann PURE Ceramic (Switzerland), Nobel Pearl (Nobel Biocare), and Z-Systems (Germany/Switzerland)."
      },
      {
        "q": "Why are Ceramic Implants 60%–70% more affordable in Istanbul than in the UK or Germany?",
        "a": "Lower operational overheads, favorable currency exchange rates, and high clinical volume in Istanbul allow us to provide genuine Swiss and German ceramic systems at transparent, accessible rates without compromising clinical quality."
      },
      {
        "q": "Do Ceramic implants come with a warranty and medical passport?",
        "a": "Yes. Every ceramic implant is accompanied by an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Can Ceramic implants be used for full-arch or full-mouth restorations?",
        "a": "Yes. We frequently perform 6-implant full-arch ceramic restorations using Straumann PURE Ceramic fixtures combined with 1200+ MPa monolithic zirconia bridges for completely metal-free total rehabilitation."
      },
      {
        "q": "How do I start my consultation before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief oral surgeon and prosthodontist will formulate a tailored 3D treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "pl": {
    "introBadge": "100% BEZMETALOWE IMPLANTY CYRKONOWE",
    "introTitle": "Implanty Cyrkonowe (Ceramiczne) w Stambule: Biokompatybilna Estetyka",
    "introLead": "W 100% bezmetalowe ceramiczne implanty Y-TZP zapewniają naturalną estetykę dziąseł bez szarych cieni i ryzyka alergii.",
    "introP1": "Zirconium (ceramic) dental implants represent the pinnacle of biological and aesthetic dentistry. Unlike traditional titanium fixtures, ceramic implants are naturally white and match the organic optical properties of natural tooth roots. This makes them the ultimate choice for patients with thin, translucent gum biotypes in the anterior smile zone where dark titanium metal edges might otherwise shine through.",
    "introP2": "Beyond unmatched aesthetic translucency, zirconium ceramic is completely inert, electrically non-conductive, and hypoallergenic. Clinical studies prove that zirconia implants exhibit significantly lower bacterial plaque adhesion and soft-tissue inflammation rates compared to titanium—creating a tight mucosal seal that shields against peri-implantitis and bone loss.",
    "introP3Lead": "For high-strength titanium full-arch alternatives, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkImmediate": "Same-Day Immediate Implants",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zirconium Ceramic Implants?",
    "candidacySubtitle": "Ceramic implants are designed for patients seeking premium aesthetics, biological purity, and metal-free biocompatibility.",
    "candidacyPoints": [
      {
        "title": "Known Metal & Titanium Sensitivities",
        "desc": "Patients with documented allergies or hypersensitivities to titanium, nickel, or metal alloys."
      },
      {
        "title": "High Anterior Aesthetic Zone Demands",
        "desc": "Patients with thin gum biotypes requiring front tooth replacement without grey metal shine-through."
      },
      {
        "title": "Holistic & Biological Dental Philosophy",
        "desc": "Individuals seeking 100% metal-free, non-conductive, and chemically inert oral restorations."
      },
      {
        "title": "History of Peri-Implant Inflammation",
        "desc": "Patients prone to gingival inflammation who benefit from zirconia’s ultra-low plaque accumulation."
      }
    ],
    "compareTitle": "Obiektywne Porównanie: Implanty Cyrkonowe vs. Tytanowe",
    "compareSubtitle": "A scientific analysis of material biocompatibility, gumline aesthetics, oral galvanism, and clinical durability.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "titanium": "Grade 5 Medical Titanium",
      "zirconium": "Y-TZP Zirconium Ceramic ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Material Composition & Metal Content",
        "titanium": "Titanium-Aluminum-Vanadium Alloy (Ti-6Al-4V)",
        "zirconium": "100% Metal-Free Pure Zirconia Ceramic (Y-TZP)"
      },
      {
        "criteria": "Aesthetic Gumline Shadowing",
        "titanium": "Risk of grey shadow beneath thin gum tissue",
        "zirconium": "Zero Grey Shadow (Pure tooth-colored ivory)"
      },
      {
        "criteria": "Biocompatibility & Allergenicity",
        "titanium": "Biocompatible (Rare metal allergy reported ~1-4%)",
        "zirconium": "100% Hypoallergenic & Biologically Inert"
      },
      {
        "criteria": "Bacterial Plaque & Biofilm Adhesion",
        "titanium": "Standard bacterial adherence",
        "zirconium": "Ultra-low plaque adhesion (Protects gums)"
      },
      {
        "criteria": "Electrical Conductivity & Oral Galvanism",
        "titanium": "Conducts micro-currents with other metals",
        "zirconium": "Zero electrical conductivity (Non-conductive)"
      },
      {
        "criteria": "Flexural Strength & Toughness",
        "titanium": "Very High (850 – 1000 MPa)",
        "zirconium": "Extremely High (1200 – 1400 MPa Y-TZP)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "titanium": "All full-arch & high-load posterior cases",
        "zirconium": "Anterior smile zone & holistic metal-free care"
      }
    ],
    "compareDecision": {
      "whenTitaniumTitle": "When is Grade 5 Titanium Implantation Advised?",
      "whenTitaniumText": "Titanium remains the undisputed standard for extreme full-arch loading (such as Quad-Zygoma or complex cantilevered bridges) where maximum multi-angle flexural tolerance is required.",
      "whenZirconiumTitle": "When is Zirconium Ceramic the Superior Choice?",
      "whenZirconiumText": "Zirconium ceramic is the definitive gold standard for anterior aesthetic zones, patients with thin gum tissue, individuals with confirmed metal allergies, and holistic dental patients."
    },
    "processTitle": "3-Etapowy Protokół Implantacji Ceramicznej",
    "processSubtitle": "Every ceramic implant at Master Smile Studio follows computer-guided 3D digital planning for millimeter-precise aesthetic integration.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Stereolithographic Virtual Stent",
        "text": "High-resolution 3D CBCT scans assess bone volume and soft-tissue biotype. A custom 3D printed surgical stent is engineered for guided, flapless placement.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Soft-Tissue Scan",
            "val": "Digital Gum Biotype Mapping"
          },
          {
            "key": "Surgical Stent",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Atraumatic Flapless Placement & Aesthetic Temporary Crown",
        "text": "The ceramic implant is placed into the prepared site with high torque (35–45 Ncm). A tooth-colored temporary crown is placed to sculpt the emergence profile.",
        "specs": [
          {
            "key": "Surgical Technique",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Primary Torque",
            "val": "35 – 45 Ncm"
          },
          {
            "key": "Provisional Crown",
            "val": "Metal-Free CAD/CAM PMMA"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia or Ivoclar E-Max Final Crown",
        "text": "After 2–3 months of osseointegration, a final 3D intraoral digital scan is taken. A permanent 1200+ MPa monolithic multilayer zirconia or E-Max crown is bonded.",
        "specs": [
          {
            "key": "Crown Material",
            "val": "German Multilayer Zirconia / E-Max"
          },
          {
            "key": "Abutment",
            "val": "100% Solid Ceramic Abutment"
          },
          {
            "key": "Bonding System",
            "val": "Dual-Cure Biocompatible Resin"
          }
        ]
      }
    ],
    "materialsTitle": "Materiały Koron na Implantach Ceramicznych",
    "materialsSubtitle": "To preserve 100% metal-free purity and lifelike optical translucency, only all-ceramic restorations are used over zirconium implants.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Delamination Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Ceramic Abutment",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrivaled chewing strength for both front and molar restorations",
            "status": "good"
          },
          {
            "text": "Zero metal content guarantees complete biological harmony",
            "status": "good"
          },
          {
            "text": "100% non-porous glazed surface repels bacteria and plaque",
            "status": "good"
          },
          {
            "text": "Gradient translucency mirrors natural enamel depth",
            "status": "good"
          }
        ]
      },
      {
        "title": "Swiss Ivoclar E-Max Porcelain",
        "sub": "Lithium Disilicate Glass Ceramic for Ultra-High Aesthetics",
        "badge": "Anterior Aesthetic Star",
        "isGold": false,
        "material": "Pressable / Milled Lithium Disilicate (Ivoclar Vivadent)",
        "strength": "470 – 530 MPa (High)",
        "chippingRisk": "Very Low (Monolithic glass-ceramic structure)",
        "lifespan": "15 – 20+ Years",
        "features": [
          {
            "text": "Highest optical translucency (99.2% natural enamel match)",
            "status": "good"
          },
          {
            "text": "Optimal for single front tooth replacements on ceramic implants",
            "status": "good"
          },
          {
            "text": "Chemically etched for unmatched micromechanical bond strength",
            "status": "good"
          },
          {
            "text": "Lower flexural strength than zirconia (avoid for multi-unit bridges)",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Legacy Metal-Core Restorations (Not Recommended)",
        "badge": "Not Recommended",
        "isGold": false,
        "material": "Cobalt-Chromium Alloy with Baked Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "High (Porcelain chips off metal substrate)",
        "lifespan": "7 – 10 Years",
        "features": [
          {
            "text": "Defeats the purpose of choosing a metal-free ceramic implant",
            "status": "bad"
          },
          {
            "text": "Black metal collar causes dark shadowing along the gum margin",
            "status": "bad"
          },
          {
            "text": "Risk of galvanic current release in the oral cavity",
            "status": "bad"
          },
          {
            "text": "Higher plaque retention at the porcelain-metal junction",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "emax": "Swiss Ivoclar E-Max",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "emax": "470 – 530 MPa (High)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Metal-Free Purity",
        "zirconia": "100% Metal-Free Ceramic",
        "emax": "100% Metal-Free Glass Ceramic",
        "pfm": "Contains Cobalt-Chromium / Nickel"
      },
      {
        "criteria": "Anterior Light Translucency",
        "zirconia": "High (Natural gradient)",
        "emax": "Ultra-High (Peak optical match)",
        "pfm": "Opaque (Metal core blocks light)"
      },
      {
        "criteria": "Biocompatibility with Gums",
        "zirconia": "Superior (Zero inflammation)",
        "emax": "Superior (Zero inflammation)",
        "pfm": "Fair (Metal ions cause irritation)"
      },
      {
        "criteria": "Suitability over Ceramic Implants",
        "zirconia": "100% Recommended (Gold Standard)",
        "emax": "100% Recommended (Single anterior)",
        "pfm": "0% Contraindicated"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "zirconia": "Lifetime Guarantee",
        "emax": "15 – 20+ Years",
        "pfm": "7 – 10 Years"
      }
    ],
    "packagesTitle": "Pakiety Implantów Ceramicznych i Przelicznik Walut",
    "packagesSubtitle": "All-inclusive single tooth and full-arch ceramic packages featuring certified Straumann PURE, Nobel Pearl, and Z-Systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Straumann PURE Ceramic Package",
        "brand": "Straumann Group (Swiss Made 100% Zirconia)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€850",
          "GBP": "£730",
          "USD": "$935"
        },
        "included": [
          "1x Genuine Straumann PURE Ceramic 100% metal-free implant",
          "ZLA surface topography for rapid bone osseointegration",
          "Custom solid ceramic abutment & aesthetic healing cap",
          "CAD/CAM Monolithic German Zirconia or Ivoclar E-Max Crown",
          "3D CBCT Tomography scan and digital implant guide",
          "Local anesthesia, sterile surgical consumables & medications",
          "Lifetime International Straumann Guarantee Passport",
          "VIP Mercedes Airport-Clinic Transfers (Hotel with multi-units)"
        ]
      },
      {
        "name": "Nobel Pearl Ceramic Package",
        "brand": "Nobel Biocare (Two-Piece Inter ceramic Solution)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€950",
          "GBP": "£820",
          "USD": "$1,050"
        },
        "included": [
          "1x Nobel Pearl 100% metal-free two-piece ceramic implant",
          "Vicarbo carbon-fiber reinforced screw for maximum strength",
          "Custom ivory ceramic abutment for zero dark shadows",
          "Monolithic Multilayer German Zirconia Permanent Crown",
          "3D CBCT Craniofacial diagnostics & surgical planning",
          "Complete surgical instrumentation & post-op medication pack",
          "Lifetime Global Nobel Biocare Warranty Passport",
          "VIP Chauffeur & Clinic Concierge assistance"
        ]
      },
      {
        "name": "Z-Systems Z-Look Ceramic Package",
        "brand": "Z-Systems International (German/Swiss Ceramic Pioneers)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€890",
          "GBP": "£765",
          "USD": "$980"
        },
        "included": [
          "1x Z-Systems Z-Look3 proprietary laser-treated ceramic fixture",
          "High primary stability in both soft and dense bone types",
          "Solid zirconia emergence profile abutment",
          "Bespoke CAD/CAM Monolithic Multilayer Zirconia Crown",
          "Full 3D digital oral imaging & surgical stent guidance",
          "Local anesthesia and complete anti-inflammatory pack",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Private Transportation included"
        ]
      },
      {
        "name": "Anterior Aesthetic Single Zone Package",
        "brand": "Straumann PURE / Nobel Pearl (Front Tooth Star)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€1,100",
          "GBP": "£950",
          "USD": "$1,200"
        },
        "included": [
          "1x Premium Swiss/German Ceramic Implant in anterior zone",
          "Immediate aesthetic temporary PMMA crown for zero smile gap",
          "Bespoke Ivoclar E-Max or High-Translucency Zirconia Crown",
          "Custom gum-sculpting ceramic healing abutment",
          "3D CBCT high-resolution aesthetic smile simulation",
          "Sterile surgical theatre & local anesthesia care",
          "Lifetime International Ceramic Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Partner Assistance"
        ]
      },
      {
        "name": "Full-Arch Ceramic Restoration (6 Implants)",
        "brand": "Straumann PURE / Z-Systems Full-Arch Metal-Free Arch",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "6x 100% Metal-Free Ceramic Implants per jaw / arch",
          "Fixed aesthetic screw-retained temporary bridge in 24 hours",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Computer-guided 3D CBCT surgical guide stent",
          "Full surgical operating suite & local anesthesia/sedation",
          "5-Star Luxury Hotel Partner Stay included",
          "VIP Mercedes Private Chauffeur Transfers included",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "Holistic Dual-Arch 100% Metal-Free Package",
        "brand": "Complete Upper & Lower 12-Ceramic Implant Reconstruction",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€14,500",
          "GBP": "£12,500",
          "USD": "$15,900"
        },
        "included": [
          "12x Certified Ceramic Implants (6 Upper + 6 Lower Jaws)",
          "Complete elimination of all oral metals and galvanic currents",
          "Fixed temporary acrylic bridges in both jaws within 24-48h",
          "Dual Full-Arch CAD/CAM Monolithic German Zirconia Bridges",
          "Hospital surgical suite, IV sedation & specialist MD team",
          "7 Nights 5-Star Luxury Hotel with Bed & Breakfast",
          "VIP Mercedes Chauffeur for all Airport & Clinic Transfers",
          "Lifetime International Manufacturer Warranty & Passports"
        ]
      }
    ],
    "costTitle": "Międzynarodowe Porównanie Kosztów: Implanty Ceramiczne (UK / Niemcy vs Stambuł)",
    "costSubtitle": "Compare real clinical costs per ceramic implant unit including abutment, 3D CBCT, laboratory CAD/CAM crown, and VIP concierge services.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerUnit": "Cost per Ceramic Implant (Unit)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerUnit": "£1,800 – £2,800 ($2,300 – $3,600)",
        "inclusions": "Surgical fixture only. Abutment (£450), CAD/CAM crown (£850), CBCT scan (£200), and consultation billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Biological Dental Clinics)",
        "costPerUnit": "€1,600 – €2,500 ($1,750 – $2,750)",
        "inclusions": "Surgeon and implant hardware. Ceramic abutment, zirconia crown, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerUnit": "€650 – €950 (£550 – £820)",
        "inclusions": "100% All-Inclusive: Genuine Straumann PURE / Nobel Pearl fixture, solid ceramic abutment, German Zirconia / E-Max crown, 3D CBCT & VIP transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Certified Swiss/German Purity)"
      }
    ],
    "faqTitle": "Często Zadawane Pytania: Implanty Ceramiczne",
    "faqSubtitle": "Clinically verified answers regarding biocompatibility, metal-free purity, strength, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Biocompatibility FAQ (100% Metal-Free Implants)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zirconium (Ceramic) Dental Implants and how are they made?",
        "a": "Zirconium dental implants are 100% metal-free dental fixtures crafted from Y-TZP (Yttria-Stabilized Tetragonal Zirconia Polycrystal) high-performance ceramic. Unlike grey titanium, they are completely tooth-colored (pure ivory/white) and biologically inert, integrating seamlessly into living bone."
      },
      {
        "q": "Are Zirconium implants completely metal-free?",
        "a": "Yes. Zirconia (ZrO2) is a ceramic material formed through the oxidation of zirconium. Although zirconium is classified as a transition element on the periodic table, the ceramic state is entirely non-metallic, electrically non-conductive, and chemically stable in the oral cavity."
      },
      {
        "q": "How do Zirconium implants compare to traditional Titanium implants?",
        "a": "Both achieve comparable osseointegration success rates (97–98%). However, zirconium implants offer superior aesthetics in thin gum biotypes (no grey shadow), zero electrical conductivity (no oral galvanism), and significantly lower bacterial biofilm adhesion."
      },
      {
        "q": "Are ceramic implants as strong as titanium implants?",
        "a": "Modern Y-TZP zirconia ceramic exhibits extraordinary flexural strength exceeding 1200 to 1400 MPa, with high fracture toughness capable of withstanding chewing forces up to 600+ Newtons, making them fully reliable for both front and molar restorations."
      },
      {
        "q": "Who should choose ceramic implants over titanium?",
        "a": "Ceramic implants are specifically recommended for patients with confirmed metal allergies or chemical sensitivities, individuals following a holistic/biological lifestyle, patients with thin gum biotypes in the anterior aesthetic zone, and those prone to gingival inflammation."
      },
      {
        "q": "Can Zirconium implants cause allergic reactions or galvanism?",
        "a": "No. Zirconia is 100% hypoallergenic, non-immunogenic, and does not conduct electrical micro-currents (oral galvanism), which can occur when different metals interact in the mouth."
      },
      {
        "q": "What is the difference between 1-piece (monotype) and 2-piece ceramic implants?",
        "a": "One-piece ceramic implants have the implant post and abutment integrated into a single solid ceramic unit, eliminating micro-gaps for bacteria. Two-piece systems allow the abutment to be connected separately, offering greater prosthetic angle flexibility."
      },
      {
        "q": "How long does bone osseointegration take for ceramic implants?",
        "a": "Ceramic implants with specialized laser-treated surfaces (such as Straumann ZLA) osseointegrate in approximately 8 to 12 weeks, matching the healing timeline of conventional titanium fixtures."
      },
      {
        "q": "Are ceramic implants resistant to Peri-implantitis?",
        "a": "Clinical studies show that the ultra-smooth ceramic surface retains significantly less bacterial plaque than titanium, resulting in healthier gingival tissues and lower incidence of peri-implant mucositis and bone loss."
      },
      {
        "q": "What type of crown is placed over a ceramic implant?",
        "a": "To maintain 100% metal-free biocompatibility, we exclusively bond CAD/CAM Monolithic German Multilayer Zirconia or Swiss Ivoclar E-Max crowns on solid ceramic abutments."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for ceramic implant treatment?",
        "a": "Your first visit requires 3 to 5 days in Istanbul for 3D CBCT diagnostic planning, implant placement, and fitting of an aesthetic temporary crown. After 2 to 3 months of osseointegration, you return for a 5-day visit to receive your permanent zirconia crown."
      },
      {
        "q": "What is included in the Master Smile Studio Ceramic Package?",
        "a": "Our all-inclusive package covers the genuine ceramic implant, 3D CBCT scans, solid ceramic abutment, permanent CAD/CAM German Zirconia or E-Max crown, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Ceramic implants do you offer?",
        "a": "We exclusively work with world-leading certified ceramic implant manufacturers including Straumann PURE Ceramic (Switzerland), Nobel Pearl (Nobel Biocare), and Z-Systems (Germany/Switzerland)."
      },
      {
        "q": "Why are Ceramic Implants 60%–70% more affordable in Istanbul than in the UK or Germany?",
        "a": "Lower operational overheads, favorable currency exchange rates, and high clinical volume in Istanbul allow us to provide genuine Swiss and German ceramic systems at transparent, accessible rates without compromising clinical quality."
      },
      {
        "q": "Do Ceramic implants come with a warranty and medical passport?",
        "a": "Yes. Every ceramic implant is accompanied by an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Can Ceramic implants be used for full-arch or full-mouth restorations?",
        "a": "Yes. We frequently perform 6-implant full-arch ceramic restorations using Straumann PURE Ceramic fixtures combined with 1200+ MPa monolithic zirconia bridges for completely metal-free total rehabilitation."
      },
      {
        "q": "How do I start my consultation before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief oral surgeon and prosthodontist will formulate a tailored 3D treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "pt": {
    "introBadge": "IMPLANTES CERÂMICOS 100% SEM METAL",
    "introTitle": "Implantes de Zircônia Cerâmica em Istambul: Estética Holística e Natural",
    "introLead": "Implantes cerâmicos Y-TZP 100% livres de metal para uma estética gengival perfeita sem sombras escuras ou alergias.",
    "introP1": "Zirconium (ceramic) dental implants represent the pinnacle of biological and aesthetic dentistry. Unlike traditional titanium fixtures, ceramic implants are naturally white and match the organic optical properties of natural tooth roots. This makes them the ultimate choice for patients with thin, translucent gum biotypes in the anterior smile zone where dark titanium metal edges might otherwise shine through.",
    "introP2": "Beyond unmatched aesthetic translucency, zirconium ceramic is completely inert, electrically non-conductive, and hypoallergenic. Clinical studies prove that zirconia implants exhibit significantly lower bacterial plaque adhesion and soft-tissue inflammation rates compared to titanium—creating a tight mucosal seal that shields against peri-implantitis and bone loss.",
    "introP3Lead": "For high-strength titanium full-arch alternatives, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkImmediate": "Same-Day Immediate Implants",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zirconium Ceramic Implants?",
    "candidacySubtitle": "Ceramic implants are designed for patients seeking premium aesthetics, biological purity, and metal-free biocompatibility.",
    "candidacyPoints": [
      {
        "title": "Known Metal & Titanium Sensitivities",
        "desc": "Patients with documented allergies or hypersensitivities to titanium, nickel, or metal alloys."
      },
      {
        "title": "High Anterior Aesthetic Zone Demands",
        "desc": "Patients with thin gum biotypes requiring front tooth replacement without grey metal shine-through."
      },
      {
        "title": "Holistic & Biological Dental Philosophy",
        "desc": "Individuals seeking 100% metal-free, non-conductive, and chemically inert oral restorations."
      },
      {
        "title": "History of Peri-Implant Inflammation",
        "desc": "Patients prone to gingival inflammation who benefit from zirconia’s ultra-low plaque accumulation."
      }
    ],
    "compareTitle": "Comparativo Clínico: Implantes de Zircônia vs. Titânio",
    "compareSubtitle": "A scientific analysis of material biocompatibility, gumline aesthetics, oral galvanism, and clinical durability.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "titanium": "Grade 5 Medical Titanium",
      "zirconium": "Y-TZP Zirconium Ceramic ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Material Composition & Metal Content",
        "titanium": "Titanium-Aluminum-Vanadium Alloy (Ti-6Al-4V)",
        "zirconium": "100% Metal-Free Pure Zirconia Ceramic (Y-TZP)"
      },
      {
        "criteria": "Aesthetic Gumline Shadowing",
        "titanium": "Risk of grey shadow beneath thin gum tissue",
        "zirconium": "Zero Grey Shadow (Pure tooth-colored ivory)"
      },
      {
        "criteria": "Biocompatibility & Allergenicity",
        "titanium": "Biocompatible (Rare metal allergy reported ~1-4%)",
        "zirconium": "100% Hypoallergenic & Biologically Inert"
      },
      {
        "criteria": "Bacterial Plaque & Biofilm Adhesion",
        "titanium": "Standard bacterial adherence",
        "zirconium": "Ultra-low plaque adhesion (Protects gums)"
      },
      {
        "criteria": "Electrical Conductivity & Oral Galvanism",
        "titanium": "Conducts micro-currents with other metals",
        "zirconium": "Zero electrical conductivity (Non-conductive)"
      },
      {
        "criteria": "Flexural Strength & Toughness",
        "titanium": "Very High (850 – 1000 MPa)",
        "zirconium": "Extremely High (1200 – 1400 MPa Y-TZP)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "titanium": "All full-arch & high-load posterior cases",
        "zirconium": "Anterior smile zone & holistic metal-free care"
      }
    ],
    "compareDecision": {
      "whenTitaniumTitle": "When is Grade 5 Titanium Implantation Advised?",
      "whenTitaniumText": "Titanium remains the undisputed standard for extreme full-arch loading (such as Quad-Zygoma or complex cantilevered bridges) where maximum multi-angle flexural tolerance is required.",
      "whenZirconiumTitle": "When is Zirconium Ceramic the Superior Choice?",
      "whenZirconiumText": "Zirconium ceramic is the definitive gold standard for anterior aesthetic zones, patients with thin gum tissue, individuals with confirmed metal allergies, and holistic dental patients."
    },
    "processTitle": "Protocolo de Precisão em 3 Fases para Implantes Cerâmicos",
    "processSubtitle": "Every ceramic implant at Master Smile Studio follows computer-guided 3D digital planning for millimeter-precise aesthetic integration.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Stereolithographic Virtual Stent",
        "text": "High-resolution 3D CBCT scans assess bone volume and soft-tissue biotype. A custom 3D printed surgical stent is engineered for guided, flapless placement.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Soft-Tissue Scan",
            "val": "Digital Gum Biotype Mapping"
          },
          {
            "key": "Surgical Stent",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Atraumatic Flapless Placement & Aesthetic Temporary Crown",
        "text": "The ceramic implant is placed into the prepared site with high torque (35–45 Ncm). A tooth-colored temporary crown is placed to sculpt the emergence profile.",
        "specs": [
          {
            "key": "Surgical Technique",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Primary Torque",
            "val": "35 – 45 Ncm"
          },
          {
            "key": "Provisional Crown",
            "val": "Metal-Free CAD/CAM PMMA"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia or Ivoclar E-Max Final Crown",
        "text": "After 2–3 months of osseointegration, a final 3D intraoral digital scan is taken. A permanent 1200+ MPa monolithic multilayer zirconia or E-Max crown is bonded.",
        "specs": [
          {
            "key": "Crown Material",
            "val": "German Multilayer Zirconia / E-Max"
          },
          {
            "key": "Abutment",
            "val": "100% Solid Ceramic Abutment"
          },
          {
            "key": "Bonding System",
            "val": "Dual-Cure Biocompatible Resin"
          }
        ]
      }
    ],
    "materialsTitle": "Materiais de Coroas sobre Implantes Cerâmicos",
    "materialsSubtitle": "To preserve 100% metal-free purity and lifelike optical translucency, only all-ceramic restorations are used over zirconium implants.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Delamination Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Ceramic Abutment",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrivaled chewing strength for both front and molar restorations",
            "status": "good"
          },
          {
            "text": "Zero metal content guarantees complete biological harmony",
            "status": "good"
          },
          {
            "text": "100% non-porous glazed surface repels bacteria and plaque",
            "status": "good"
          },
          {
            "text": "Gradient translucency mirrors natural enamel depth",
            "status": "good"
          }
        ]
      },
      {
        "title": "Swiss Ivoclar E-Max Porcelain",
        "sub": "Lithium Disilicate Glass Ceramic for Ultra-High Aesthetics",
        "badge": "Anterior Aesthetic Star",
        "isGold": false,
        "material": "Pressable / Milled Lithium Disilicate (Ivoclar Vivadent)",
        "strength": "470 – 530 MPa (High)",
        "chippingRisk": "Very Low (Monolithic glass-ceramic structure)",
        "lifespan": "15 – 20+ Years",
        "features": [
          {
            "text": "Highest optical translucency (99.2% natural enamel match)",
            "status": "good"
          },
          {
            "text": "Optimal for single front tooth replacements on ceramic implants",
            "status": "good"
          },
          {
            "text": "Chemically etched for unmatched micromechanical bond strength",
            "status": "good"
          },
          {
            "text": "Lower flexural strength than zirconia (avoid for multi-unit bridges)",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Legacy Metal-Core Restorations (Not Recommended)",
        "badge": "Not Recommended",
        "isGold": false,
        "material": "Cobalt-Chromium Alloy with Baked Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "High (Porcelain chips off metal substrate)",
        "lifespan": "7 – 10 Years",
        "features": [
          {
            "text": "Defeats the purpose of choosing a metal-free ceramic implant",
            "status": "bad"
          },
          {
            "text": "Black metal collar causes dark shadowing along the gum margin",
            "status": "bad"
          },
          {
            "text": "Risk of galvanic current release in the oral cavity",
            "status": "bad"
          },
          {
            "text": "Higher plaque retention at the porcelain-metal junction",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "emax": "Swiss Ivoclar E-Max",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "emax": "470 – 530 MPa (High)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Metal-Free Purity",
        "zirconia": "100% Metal-Free Ceramic",
        "emax": "100% Metal-Free Glass Ceramic",
        "pfm": "Contains Cobalt-Chromium / Nickel"
      },
      {
        "criteria": "Anterior Light Translucency",
        "zirconia": "High (Natural gradient)",
        "emax": "Ultra-High (Peak optical match)",
        "pfm": "Opaque (Metal core blocks light)"
      },
      {
        "criteria": "Biocompatibility with Gums",
        "zirconia": "Superior (Zero inflammation)",
        "emax": "Superior (Zero inflammation)",
        "pfm": "Fair (Metal ions cause irritation)"
      },
      {
        "criteria": "Suitability over Ceramic Implants",
        "zirconia": "100% Recommended (Gold Standard)",
        "emax": "100% Recommended (Single anterior)",
        "pfm": "0% Contraindicated"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "zirconia": "Lifetime Guarantee",
        "emax": "15 – 20+ Years",
        "pfm": "7 – 10 Years"
      }
    ],
    "packagesTitle": "Pacotes de Implantes Cerâmicos e Conversor de Moedas",
    "packagesSubtitle": "All-inclusive single tooth and full-arch ceramic packages featuring certified Straumann PURE, Nobel Pearl, and Z-Systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Straumann PURE Ceramic Package",
        "brand": "Straumann Group (Swiss Made 100% Zirconia)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€850",
          "GBP": "£730",
          "USD": "$935"
        },
        "included": [
          "1x Genuine Straumann PURE Ceramic 100% metal-free implant",
          "ZLA surface topography for rapid bone osseointegration",
          "Custom solid ceramic abutment & aesthetic healing cap",
          "CAD/CAM Monolithic German Zirconia or Ivoclar E-Max Crown",
          "3D CBCT Tomography scan and digital implant guide",
          "Local anesthesia, sterile surgical consumables & medications",
          "Lifetime International Straumann Guarantee Passport",
          "VIP Mercedes Airport-Clinic Transfers (Hotel with multi-units)"
        ]
      },
      {
        "name": "Nobel Pearl Ceramic Package",
        "brand": "Nobel Biocare (Two-Piece Inter ceramic Solution)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€950",
          "GBP": "£820",
          "USD": "$1,050"
        },
        "included": [
          "1x Nobel Pearl 100% metal-free two-piece ceramic implant",
          "Vicarbo carbon-fiber reinforced screw for maximum strength",
          "Custom ivory ceramic abutment for zero dark shadows",
          "Monolithic Multilayer German Zirconia Permanent Crown",
          "3D CBCT Craniofacial diagnostics & surgical planning",
          "Complete surgical instrumentation & post-op medication pack",
          "Lifetime Global Nobel Biocare Warranty Passport",
          "VIP Chauffeur & Clinic Concierge assistance"
        ]
      },
      {
        "name": "Z-Systems Z-Look Ceramic Package",
        "brand": "Z-Systems International (German/Swiss Ceramic Pioneers)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€890",
          "GBP": "£765",
          "USD": "$980"
        },
        "included": [
          "1x Z-Systems Z-Look3 proprietary laser-treated ceramic fixture",
          "High primary stability in both soft and dense bone types",
          "Solid zirconia emergence profile abutment",
          "Bespoke CAD/CAM Monolithic Multilayer Zirconia Crown",
          "Full 3D digital oral imaging & surgical stent guidance",
          "Local anesthesia and complete anti-inflammatory pack",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Private Transportation included"
        ]
      },
      {
        "name": "Anterior Aesthetic Single Zone Package",
        "brand": "Straumann PURE / Nobel Pearl (Front Tooth Star)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€1,100",
          "GBP": "£950",
          "USD": "$1,200"
        },
        "included": [
          "1x Premium Swiss/German Ceramic Implant in anterior zone",
          "Immediate aesthetic temporary PMMA crown for zero smile gap",
          "Bespoke Ivoclar E-Max or High-Translucency Zirconia Crown",
          "Custom gum-sculpting ceramic healing abutment",
          "3D CBCT high-resolution aesthetic smile simulation",
          "Sterile surgical theatre & local anesthesia care",
          "Lifetime International Ceramic Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Partner Assistance"
        ]
      },
      {
        "name": "Full-Arch Ceramic Restoration (6 Implants)",
        "brand": "Straumann PURE / Z-Systems Full-Arch Metal-Free Arch",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "6x 100% Metal-Free Ceramic Implants per jaw / arch",
          "Fixed aesthetic screw-retained temporary bridge in 24 hours",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Computer-guided 3D CBCT surgical guide stent",
          "Full surgical operating suite & local anesthesia/sedation",
          "5-Star Luxury Hotel Partner Stay included",
          "VIP Mercedes Private Chauffeur Transfers included",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "Holistic Dual-Arch 100% Metal-Free Package",
        "brand": "Complete Upper & Lower 12-Ceramic Implant Reconstruction",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€14,500",
          "GBP": "£12,500",
          "USD": "$15,900"
        },
        "included": [
          "12x Certified Ceramic Implants (6 Upper + 6 Lower Jaws)",
          "Complete elimination of all oral metals and galvanic currents",
          "Fixed temporary acrylic bridges in both jaws within 24-48h",
          "Dual Full-Arch CAD/CAM Monolithic German Zirconia Bridges",
          "Hospital surgical suite, IV sedation & specialist MD team",
          "7 Nights 5-Star Luxury Hotel with Bed & Breakfast",
          "VIP Mercedes Chauffeur for all Airport & Clinic Transfers",
          "Lifetime International Manufacturer Warranty & Passports"
        ]
      }
    ],
    "costTitle": "Comparativo Internacional de Custos: Implantes Cerâmicos (Reino Unido / Alemanha vs Istambul)",
    "costSubtitle": "Compare real clinical costs per ceramic implant unit including abutment, 3D CBCT, laboratory CAD/CAM crown, and VIP concierge services.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerUnit": "Cost per Ceramic Implant (Unit)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerUnit": "£1,800 – £2,800 ($2,300 – $3,600)",
        "inclusions": "Surgical fixture only. Abutment (£450), CAD/CAM crown (£850), CBCT scan (£200), and consultation billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Biological Dental Clinics)",
        "costPerUnit": "€1,600 – €2,500 ($1,750 – $2,750)",
        "inclusions": "Surgeon and implant hardware. Ceramic abutment, zirconia crown, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerUnit": "€650 – €950 (£550 – £820)",
        "inclusions": "100% All-Inclusive: Genuine Straumann PURE / Nobel Pearl fixture, solid ceramic abutment, German Zirconia / E-Max crown, 3D CBCT & VIP transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Certified Swiss/German Purity)"
      }
    ],
    "faqTitle": "Perguntas Frequentes: Implantes Cerâmicos",
    "faqSubtitle": "Clinically verified answers regarding biocompatibility, metal-free purity, strength, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Biocompatibility FAQ (100% Metal-Free Implants)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zirconium (Ceramic) Dental Implants and how are they made?",
        "a": "Zirconium dental implants are 100% metal-free dental fixtures crafted from Y-TZP (Yttria-Stabilized Tetragonal Zirconia Polycrystal) high-performance ceramic. Unlike grey titanium, they are completely tooth-colored (pure ivory/white) and biologically inert, integrating seamlessly into living bone."
      },
      {
        "q": "Are Zirconium implants completely metal-free?",
        "a": "Yes. Zirconia (ZrO2) is a ceramic material formed through the oxidation of zirconium. Although zirconium is classified as a transition element on the periodic table, the ceramic state is entirely non-metallic, electrically non-conductive, and chemically stable in the oral cavity."
      },
      {
        "q": "How do Zirconium implants compare to traditional Titanium implants?",
        "a": "Both achieve comparable osseointegration success rates (97–98%). However, zirconium implants offer superior aesthetics in thin gum biotypes (no grey shadow), zero electrical conductivity (no oral galvanism), and significantly lower bacterial biofilm adhesion."
      },
      {
        "q": "Are ceramic implants as strong as titanium implants?",
        "a": "Modern Y-TZP zirconia ceramic exhibits extraordinary flexural strength exceeding 1200 to 1400 MPa, with high fracture toughness capable of withstanding chewing forces up to 600+ Newtons, making them fully reliable for both front and molar restorations."
      },
      {
        "q": "Who should choose ceramic implants over titanium?",
        "a": "Ceramic implants are specifically recommended for patients with confirmed metal allergies or chemical sensitivities, individuals following a holistic/biological lifestyle, patients with thin gum biotypes in the anterior aesthetic zone, and those prone to gingival inflammation."
      },
      {
        "q": "Can Zirconium implants cause allergic reactions or galvanism?",
        "a": "No. Zirconia is 100% hypoallergenic, non-immunogenic, and does not conduct electrical micro-currents (oral galvanism), which can occur when different metals interact in the mouth."
      },
      {
        "q": "What is the difference between 1-piece (monotype) and 2-piece ceramic implants?",
        "a": "One-piece ceramic implants have the implant post and abutment integrated into a single solid ceramic unit, eliminating micro-gaps for bacteria. Two-piece systems allow the abutment to be connected separately, offering greater prosthetic angle flexibility."
      },
      {
        "q": "How long does bone osseointegration take for ceramic implants?",
        "a": "Ceramic implants with specialized laser-treated surfaces (such as Straumann ZLA) osseointegrate in approximately 8 to 12 weeks, matching the healing timeline of conventional titanium fixtures."
      },
      {
        "q": "Are ceramic implants resistant to Peri-implantitis?",
        "a": "Clinical studies show that the ultra-smooth ceramic surface retains significantly less bacterial plaque than titanium, resulting in healthier gingival tissues and lower incidence of peri-implant mucositis and bone loss."
      },
      {
        "q": "What type of crown is placed over a ceramic implant?",
        "a": "To maintain 100% metal-free biocompatibility, we exclusively bond CAD/CAM Monolithic German Multilayer Zirconia or Swiss Ivoclar E-Max crowns on solid ceramic abutments."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for ceramic implant treatment?",
        "a": "Your first visit requires 3 to 5 days in Istanbul for 3D CBCT diagnostic planning, implant placement, and fitting of an aesthetic temporary crown. After 2 to 3 months of osseointegration, you return for a 5-day visit to receive your permanent zirconia crown."
      },
      {
        "q": "What is included in the Master Smile Studio Ceramic Package?",
        "a": "Our all-inclusive package covers the genuine ceramic implant, 3D CBCT scans, solid ceramic abutment, permanent CAD/CAM German Zirconia or E-Max crown, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Ceramic implants do you offer?",
        "a": "We exclusively work with world-leading certified ceramic implant manufacturers including Straumann PURE Ceramic (Switzerland), Nobel Pearl (Nobel Biocare), and Z-Systems (Germany/Switzerland)."
      },
      {
        "q": "Why are Ceramic Implants 60%–70% more affordable in Istanbul than in the UK or Germany?",
        "a": "Lower operational overheads, favorable currency exchange rates, and high clinical volume in Istanbul allow us to provide genuine Swiss and German ceramic systems at transparent, accessible rates without compromising clinical quality."
      },
      {
        "q": "Do Ceramic implants come with a warranty and medical passport?",
        "a": "Yes. Every ceramic implant is accompanied by an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Can Ceramic implants be used for full-arch or full-mouth restorations?",
        "a": "Yes. We frequently perform 6-implant full-arch ceramic restorations using Straumann PURE Ceramic fixtures combined with 1200+ MPa monolithic zirconia bridges for completely metal-free total rehabilitation."
      },
      {
        "q": "How do I start my consultation before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief oral surgeon and prosthodontist will formulate a tailored 3D treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "es": {
    "introBadge": "IMPLANTES CERÁMICOS 100% SIN METAL",
    "introTitle": "Implantes Dentales de Zirconio Cerámico en Estambul: Estética Holística",
    "introLead": "Implantes cerámicos Y-TZP 100% libres de metal para una estética gingival pura sin sombras oscuras ni alergias al titanio.",
    "introP1": "Zirconium (ceramic) dental implants represent the pinnacle of biological and aesthetic dentistry. Unlike traditional titanium fixtures, ceramic implants are naturally white and match the organic optical properties of natural tooth roots. This makes them the ultimate choice for patients with thin, translucent gum biotypes in the anterior smile zone where dark titanium metal edges might otherwise shine through.",
    "introP2": "Beyond unmatched aesthetic translucency, zirconium ceramic is completely inert, electrically non-conductive, and hypoallergenic. Clinical studies prove that zirconia implants exhibit significantly lower bacterial plaque adhesion and soft-tissue inflammation rates compared to titanium—creating a tight mucosal seal that shields against peri-implantitis and bone loss.",
    "introP3Lead": "For high-strength titanium full-arch alternatives, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkImmediate": "Same-Day Immediate Implants",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zirconium Ceramic Implants?",
    "candidacySubtitle": "Ceramic implants are designed for patients seeking premium aesthetics, biological purity, and metal-free biocompatibility.",
    "candidacyPoints": [
      {
        "title": "Known Metal & Titanium Sensitivities",
        "desc": "Patients with documented allergies or hypersensitivities to titanium, nickel, or metal alloys."
      },
      {
        "title": "High Anterior Aesthetic Zone Demands",
        "desc": "Patients with thin gum biotypes requiring front tooth replacement without grey metal shine-through."
      },
      {
        "title": "Holistic & Biological Dental Philosophy",
        "desc": "Individuals seeking 100% metal-free, non-conductive, and chemically inert oral restorations."
      },
      {
        "title": "History of Peri-Implant Inflammation",
        "desc": "Patients prone to gingival inflammation who benefit from zirconia’s ultra-low plaque accumulation."
      }
    ],
    "compareTitle": "Comparación Clínica: Implantes de Zirconio vs. Titanio",
    "compareSubtitle": "A scientific analysis of material biocompatibility, gumline aesthetics, oral galvanism, and clinical durability.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "titanium": "Grade 5 Medical Titanium",
      "zirconium": "Y-TZP Zirconium Ceramic ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Material Composition & Metal Content",
        "titanium": "Titanium-Aluminum-Vanadium Alloy (Ti-6Al-4V)",
        "zirconium": "100% Metal-Free Pure Zirconia Ceramic (Y-TZP)"
      },
      {
        "criteria": "Aesthetic Gumline Shadowing",
        "titanium": "Risk of grey shadow beneath thin gum tissue",
        "zirconium": "Zero Grey Shadow (Pure tooth-colored ivory)"
      },
      {
        "criteria": "Biocompatibility & Allergenicity",
        "titanium": "Biocompatible (Rare metal allergy reported ~1-4%)",
        "zirconium": "100% Hypoallergenic & Biologically Inert"
      },
      {
        "criteria": "Bacterial Plaque & Biofilm Adhesion",
        "titanium": "Standard bacterial adherence",
        "zirconium": "Ultra-low plaque adhesion (Protects gums)"
      },
      {
        "criteria": "Electrical Conductivity & Oral Galvanism",
        "titanium": "Conducts micro-currents with other metals",
        "zirconium": "Zero electrical conductivity (Non-conductive)"
      },
      {
        "criteria": "Flexural Strength & Toughness",
        "titanium": "Very High (850 – 1000 MPa)",
        "zirconium": "Extremely High (1200 – 1400 MPa Y-TZP)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "titanium": "All full-arch & high-load posterior cases",
        "zirconium": "Anterior smile zone & holistic metal-free care"
      }
    ],
    "compareDecision": {
      "whenTitaniumTitle": "When is Grade 5 Titanium Implantation Advised?",
      "whenTitaniumText": "Titanium remains the undisputed standard for extreme full-arch loading (such as Quad-Zygoma or complex cantilevered bridges) where maximum multi-angle flexural tolerance is required.",
      "whenZirconiumTitle": "When is Zirconium Ceramic the Superior Choice?",
      "whenZirconiumText": "Zirconium ceramic is the definitive gold standard for anterior aesthetic zones, patients with thin gum tissue, individuals with confirmed metal allergies, and holistic dental patients."
    },
    "processTitle": "Protocolo de Precisión en 3 Fases para Implantes Cerámicos",
    "processSubtitle": "Every ceramic implant at Master Smile Studio follows computer-guided 3D digital planning for millimeter-precise aesthetic integration.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Stereolithographic Virtual Stent",
        "text": "High-resolution 3D CBCT scans assess bone volume and soft-tissue biotype. A custom 3D printed surgical stent is engineered for guided, flapless placement.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Soft-Tissue Scan",
            "val": "Digital Gum Biotype Mapping"
          },
          {
            "key": "Surgical Stent",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Atraumatic Flapless Placement & Aesthetic Temporary Crown",
        "text": "The ceramic implant is placed into the prepared site with high torque (35–45 Ncm). A tooth-colored temporary crown is placed to sculpt the emergence profile.",
        "specs": [
          {
            "key": "Surgical Technique",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Primary Torque",
            "val": "35 – 45 Ncm"
          },
          {
            "key": "Provisional Crown",
            "val": "Metal-Free CAD/CAM PMMA"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia or Ivoclar E-Max Final Crown",
        "text": "After 2–3 months of osseointegration, a final 3D intraoral digital scan is taken. A permanent 1200+ MPa monolithic multilayer zirconia or E-Max crown is bonded.",
        "specs": [
          {
            "key": "Crown Material",
            "val": "German Multilayer Zirconia / E-Max"
          },
          {
            "key": "Abutment",
            "val": "100% Solid Ceramic Abutment"
          },
          {
            "key": "Bonding System",
            "val": "Dual-Cure Biocompatible Resin"
          }
        ]
      }
    ],
    "materialsTitle": "Materiales de Coronas sobre Implantes Cerámicos",
    "materialsSubtitle": "To preserve 100% metal-free purity and lifelike optical translucency, only all-ceramic restorations are used over zirconium implants.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Delamination Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Ceramic Abutment",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrivaled chewing strength for both front and molar restorations",
            "status": "good"
          },
          {
            "text": "Zero metal content guarantees complete biological harmony",
            "status": "good"
          },
          {
            "text": "100% non-porous glazed surface repels bacteria and plaque",
            "status": "good"
          },
          {
            "text": "Gradient translucency mirrors natural enamel depth",
            "status": "good"
          }
        ]
      },
      {
        "title": "Swiss Ivoclar E-Max Porcelain",
        "sub": "Lithium Disilicate Glass Ceramic for Ultra-High Aesthetics",
        "badge": "Anterior Aesthetic Star",
        "isGold": false,
        "material": "Pressable / Milled Lithium Disilicate (Ivoclar Vivadent)",
        "strength": "470 – 530 MPa (High)",
        "chippingRisk": "Very Low (Monolithic glass-ceramic structure)",
        "lifespan": "15 – 20+ Years",
        "features": [
          {
            "text": "Highest optical translucency (99.2% natural enamel match)",
            "status": "good"
          },
          {
            "text": "Optimal for single front tooth replacements on ceramic implants",
            "status": "good"
          },
          {
            "text": "Chemically etched for unmatched micromechanical bond strength",
            "status": "good"
          },
          {
            "text": "Lower flexural strength than zirconia (avoid for multi-unit bridges)",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Legacy Metal-Core Restorations (Not Recommended)",
        "badge": "Not Recommended",
        "isGold": false,
        "material": "Cobalt-Chromium Alloy with Baked Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "High (Porcelain chips off metal substrate)",
        "lifespan": "7 – 10 Years",
        "features": [
          {
            "text": "Defeats the purpose of choosing a metal-free ceramic implant",
            "status": "bad"
          },
          {
            "text": "Black metal collar causes dark shadowing along the gum margin",
            "status": "bad"
          },
          {
            "text": "Risk of galvanic current release in the oral cavity",
            "status": "bad"
          },
          {
            "text": "Higher plaque retention at the porcelain-metal junction",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "emax": "Swiss Ivoclar E-Max",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "emax": "470 – 530 MPa (High)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Metal-Free Purity",
        "zirconia": "100% Metal-Free Ceramic",
        "emax": "100% Metal-Free Glass Ceramic",
        "pfm": "Contains Cobalt-Chromium / Nickel"
      },
      {
        "criteria": "Anterior Light Translucency",
        "zirconia": "High (Natural gradient)",
        "emax": "Ultra-High (Peak optical match)",
        "pfm": "Opaque (Metal core blocks light)"
      },
      {
        "criteria": "Biocompatibility with Gums",
        "zirconia": "Superior (Zero inflammation)",
        "emax": "Superior (Zero inflammation)",
        "pfm": "Fair (Metal ions cause irritation)"
      },
      {
        "criteria": "Suitability over Ceramic Implants",
        "zirconia": "100% Recommended (Gold Standard)",
        "emax": "100% Recommended (Single anterior)",
        "pfm": "0% Contraindicated"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "zirconia": "Lifetime Guarantee",
        "emax": "15 – 20+ Years",
        "pfm": "7 – 10 Years"
      }
    ],
    "packagesTitle": "Paquetes de Implantes Cerámicos y Conversor de Divisas",
    "packagesSubtitle": "All-inclusive single tooth and full-arch ceramic packages featuring certified Straumann PURE, Nobel Pearl, and Z-Systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Straumann PURE Ceramic Package",
        "brand": "Straumann Group (Swiss Made 100% Zirconia)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€850",
          "GBP": "£730",
          "USD": "$935"
        },
        "included": [
          "1x Genuine Straumann PURE Ceramic 100% metal-free implant",
          "ZLA surface topography for rapid bone osseointegration",
          "Custom solid ceramic abutment & aesthetic healing cap",
          "CAD/CAM Monolithic German Zirconia or Ivoclar E-Max Crown",
          "3D CBCT Tomography scan and digital implant guide",
          "Local anesthesia, sterile surgical consumables & medications",
          "Lifetime International Straumann Guarantee Passport",
          "VIP Mercedes Airport-Clinic Transfers (Hotel with multi-units)"
        ]
      },
      {
        "name": "Nobel Pearl Ceramic Package",
        "brand": "Nobel Biocare (Two-Piece Inter ceramic Solution)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€950",
          "GBP": "£820",
          "USD": "$1,050"
        },
        "included": [
          "1x Nobel Pearl 100% metal-free two-piece ceramic implant",
          "Vicarbo carbon-fiber reinforced screw for maximum strength",
          "Custom ivory ceramic abutment for zero dark shadows",
          "Monolithic Multilayer German Zirconia Permanent Crown",
          "3D CBCT Craniofacial diagnostics & surgical planning",
          "Complete surgical instrumentation & post-op medication pack",
          "Lifetime Global Nobel Biocare Warranty Passport",
          "VIP Chauffeur & Clinic Concierge assistance"
        ]
      },
      {
        "name": "Z-Systems Z-Look Ceramic Package",
        "brand": "Z-Systems International (German/Swiss Ceramic Pioneers)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€890",
          "GBP": "£765",
          "USD": "$980"
        },
        "included": [
          "1x Z-Systems Z-Look3 proprietary laser-treated ceramic fixture",
          "High primary stability in both soft and dense bone types",
          "Solid zirconia emergence profile abutment",
          "Bespoke CAD/CAM Monolithic Multilayer Zirconia Crown",
          "Full 3D digital oral imaging & surgical stent guidance",
          "Local anesthesia and complete anti-inflammatory pack",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Private Transportation included"
        ]
      },
      {
        "name": "Anterior Aesthetic Single Zone Package",
        "brand": "Straumann PURE / Nobel Pearl (Front Tooth Star)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€1,100",
          "GBP": "£950",
          "USD": "$1,200"
        },
        "included": [
          "1x Premium Swiss/German Ceramic Implant in anterior zone",
          "Immediate aesthetic temporary PMMA crown for zero smile gap",
          "Bespoke Ivoclar E-Max or High-Translucency Zirconia Crown",
          "Custom gum-sculpting ceramic healing abutment",
          "3D CBCT high-resolution aesthetic smile simulation",
          "Sterile surgical theatre & local anesthesia care",
          "Lifetime International Ceramic Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Partner Assistance"
        ]
      },
      {
        "name": "Full-Arch Ceramic Restoration (6 Implants)",
        "brand": "Straumann PURE / Z-Systems Full-Arch Metal-Free Arch",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "6x 100% Metal-Free Ceramic Implants per jaw / arch",
          "Fixed aesthetic screw-retained temporary bridge in 24 hours",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Computer-guided 3D CBCT surgical guide stent",
          "Full surgical operating suite & local anesthesia/sedation",
          "5-Star Luxury Hotel Partner Stay included",
          "VIP Mercedes Private Chauffeur Transfers included",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "Holistic Dual-Arch 100% Metal-Free Package",
        "brand": "Complete Upper & Lower 12-Ceramic Implant Reconstruction",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€14,500",
          "GBP": "£12,500",
          "USD": "$15,900"
        },
        "included": [
          "12x Certified Ceramic Implants (6 Upper + 6 Lower Jaws)",
          "Complete elimination of all oral metals and galvanic currents",
          "Fixed temporary acrylic bridges in both jaws within 24-48h",
          "Dual Full-Arch CAD/CAM Monolithic German Zirconia Bridges",
          "Hospital surgical suite, IV sedation & specialist MD team",
          "7 Nights 5-Star Luxury Hotel with Bed & Breakfast",
          "VIP Mercedes Chauffeur for all Airport & Clinic Transfers",
          "Lifetime International Manufacturer Warranty & Passports"
        ]
      }
    ],
    "costTitle": "Comparativa Internacional de Costes: Implantes Cerámicos (Reino Unido / Alemania vs Estambul)",
    "costSubtitle": "Compare real clinical costs per ceramic implant unit including abutment, 3D CBCT, laboratory CAD/CAM crown, and VIP concierge services.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerUnit": "Cost per Ceramic Implant (Unit)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerUnit": "£1,800 – £2,800 ($2,300 – $3,600)",
        "inclusions": "Surgical fixture only. Abutment (£450), CAD/CAM crown (£850), CBCT scan (£200), and consultation billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Biological Dental Clinics)",
        "costPerUnit": "€1,600 – €2,500 ($1,750 – $2,750)",
        "inclusions": "Surgeon and implant hardware. Ceramic abutment, zirconia crown, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerUnit": "€650 – €950 (£550 – £820)",
        "inclusions": "100% All-Inclusive: Genuine Straumann PURE / Nobel Pearl fixture, solid ceramic abutment, German Zirconia / E-Max crown, 3D CBCT & VIP transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Certified Swiss/German Purity)"
      }
    ],
    "faqTitle": "Preguntas Frecuentes: Implantes Cerámicos",
    "faqSubtitle": "Clinically verified answers regarding biocompatibility, metal-free purity, strength, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Biocompatibility FAQ (100% Metal-Free Implants)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zirconium (Ceramic) Dental Implants and how are they made?",
        "a": "Zirconium dental implants are 100% metal-free dental fixtures crafted from Y-TZP (Yttria-Stabilized Tetragonal Zirconia Polycrystal) high-performance ceramic. Unlike grey titanium, they are completely tooth-colored (pure ivory/white) and biologically inert, integrating seamlessly into living bone."
      },
      {
        "q": "Are Zirconium implants completely metal-free?",
        "a": "Yes. Zirconia (ZrO2) is a ceramic material formed through the oxidation of zirconium. Although zirconium is classified as a transition element on the periodic table, the ceramic state is entirely non-metallic, electrically non-conductive, and chemically stable in the oral cavity."
      },
      {
        "q": "How do Zirconium implants compare to traditional Titanium implants?",
        "a": "Both achieve comparable osseointegration success rates (97–98%). However, zirconium implants offer superior aesthetics in thin gum biotypes (no grey shadow), zero electrical conductivity (no oral galvanism), and significantly lower bacterial biofilm adhesion."
      },
      {
        "q": "Are ceramic implants as strong as titanium implants?",
        "a": "Modern Y-TZP zirconia ceramic exhibits extraordinary flexural strength exceeding 1200 to 1400 MPa, with high fracture toughness capable of withstanding chewing forces up to 600+ Newtons, making them fully reliable for both front and molar restorations."
      },
      {
        "q": "Who should choose ceramic implants over titanium?",
        "a": "Ceramic implants are specifically recommended for patients with confirmed metal allergies or chemical sensitivities, individuals following a holistic/biological lifestyle, patients with thin gum biotypes in the anterior aesthetic zone, and those prone to gingival inflammation."
      },
      {
        "q": "Can Zirconium implants cause allergic reactions or galvanism?",
        "a": "No. Zirconia is 100% hypoallergenic, non-immunogenic, and does not conduct electrical micro-currents (oral galvanism), which can occur when different metals interact in the mouth."
      },
      {
        "q": "What is the difference between 1-piece (monotype) and 2-piece ceramic implants?",
        "a": "One-piece ceramic implants have the implant post and abutment integrated into a single solid ceramic unit, eliminating micro-gaps for bacteria. Two-piece systems allow the abutment to be connected separately, offering greater prosthetic angle flexibility."
      },
      {
        "q": "How long does bone osseointegration take for ceramic implants?",
        "a": "Ceramic implants with specialized laser-treated surfaces (such as Straumann ZLA) osseointegrate in approximately 8 to 12 weeks, matching the healing timeline of conventional titanium fixtures."
      },
      {
        "q": "Are ceramic implants resistant to Peri-implantitis?",
        "a": "Clinical studies show that the ultra-smooth ceramic surface retains significantly less bacterial plaque than titanium, resulting in healthier gingival tissues and lower incidence of peri-implant mucositis and bone loss."
      },
      {
        "q": "What type of crown is placed over a ceramic implant?",
        "a": "To maintain 100% metal-free biocompatibility, we exclusively bond CAD/CAM Monolithic German Multilayer Zirconia or Swiss Ivoclar E-Max crowns on solid ceramic abutments."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for ceramic implant treatment?",
        "a": "Your first visit requires 3 to 5 days in Istanbul for 3D CBCT diagnostic planning, implant placement, and fitting of an aesthetic temporary crown. After 2 to 3 months of osseointegration, you return for a 5-day visit to receive your permanent zirconia crown."
      },
      {
        "q": "What is included in the Master Smile Studio Ceramic Package?",
        "a": "Our all-inclusive package covers the genuine ceramic implant, 3D CBCT scans, solid ceramic abutment, permanent CAD/CAM German Zirconia or E-Max crown, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Ceramic implants do you offer?",
        "a": "We exclusively work with world-leading certified ceramic implant manufacturers including Straumann PURE Ceramic (Switzerland), Nobel Pearl (Nobel Biocare), and Z-Systems (Germany/Switzerland)."
      },
      {
        "q": "Why are Ceramic Implants 60%–70% more affordable in Istanbul than in the UK or Germany?",
        "a": "Lower operational overheads, favorable currency exchange rates, and high clinical volume in Istanbul allow us to provide genuine Swiss and German ceramic systems at transparent, accessible rates without compromising clinical quality."
      },
      {
        "q": "Do Ceramic implants come with a warranty and medical passport?",
        "a": "Yes. Every ceramic implant is accompanied by an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Can Ceramic implants be used for full-arch or full-mouth restorations?",
        "a": "Yes. We frequently perform 6-implant full-arch ceramic restorations using Straumann PURE Ceramic fixtures combined with 1200+ MPa monolithic zirconia bridges for completely metal-free total rehabilitation."
      },
      {
        "q": "How do I start my consultation before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief oral surgeon and prosthodontist will formulate a tailored 3D treatment plan and fixed price quotation within 24 hours."
      }
    ]
  },
  "ru": {
    "introBadge": "100% БЕЗМЕТАЛЛОВАЯ КЕРАМИЧЕСКАЯ ИМПЛАНТАЦИЯ",
    "introTitle": "Циркониевые (керамические) импланты в Стамбуле: Биосовместимость и Эстетика",
    "introLead": "100% безметалловые керамические импланты Y-TZP обеспечивают безупречную белизну десен без серых теней и аллергии на металл.",
    "introP1": "Zirconium (ceramic) dental implants represent the pinnacle of biological and aesthetic dentistry. Unlike traditional titanium fixtures, ceramic implants are naturally white and match the organic optical properties of natural tooth roots. This makes them the ultimate choice for patients with thin, translucent gum biotypes in the anterior smile zone where dark titanium metal edges might otherwise shine through.",
    "introP2": "Beyond unmatched aesthetic translucency, zirconium ceramic is completely inert, electrically non-conductive, and hypoallergenic. Clinical studies prove that zirconia implants exhibit significantly lower bacterial plaque adhesion and soft-tissue inflammation rates compared to titanium—creating a tight mucosal seal that shields against peri-implantitis and bone loss.",
    "introP3Lead": "For high-strength titanium full-arch alternatives, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkImmediate": "Same-Day Immediate Implants",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Zirconium Ceramic Implants?",
    "candidacySubtitle": "Ceramic implants are designed for patients seeking premium aesthetics, biological purity, and metal-free biocompatibility.",
    "candidacyPoints": [
      {
        "title": "Known Metal & Titanium Sensitivities",
        "desc": "Patients with documented allergies or hypersensitivities to titanium, nickel, or metal alloys."
      },
      {
        "title": "High Anterior Aesthetic Zone Demands",
        "desc": "Patients with thin gum biotypes requiring front tooth replacement without grey metal shine-through."
      },
      {
        "title": "Holistic & Biological Dental Philosophy",
        "desc": "Individuals seeking 100% metal-free, non-conductive, and chemically inert oral restorations."
      },
      {
        "title": "History of Peri-Implant Inflammation",
        "desc": "Patients prone to gingival inflammation who benefit from zirconia’s ultra-low plaque accumulation."
      }
    ],
    "compareTitle": "Объективное Сравнение: Керамические импланты vs. Титановые",
    "compareSubtitle": "A scientific analysis of material biocompatibility, gumline aesthetics, oral galvanism, and clinical durability.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "titanium": "Grade 5 Medical Titanium",
      "zirconium": "Y-TZP Zirconium Ceramic ⭐"
    },
    "compareTableRows": [
      {
        "criteria": "Material Composition & Metal Content",
        "titanium": "Titanium-Aluminum-Vanadium Alloy (Ti-6Al-4V)",
        "zirconium": "100% Metal-Free Pure Zirconia Ceramic (Y-TZP)"
      },
      {
        "criteria": "Aesthetic Gumline Shadowing",
        "titanium": "Risk of grey shadow beneath thin gum tissue",
        "zirconium": "Zero Grey Shadow (Pure tooth-colored ivory)"
      },
      {
        "criteria": "Biocompatibility & Allergenicity",
        "titanium": "Biocompatible (Rare metal allergy reported ~1-4%)",
        "zirconium": "100% Hypoallergenic & Biologically Inert"
      },
      {
        "criteria": "Bacterial Plaque & Biofilm Adhesion",
        "titanium": "Standard bacterial adherence",
        "zirconium": "Ultra-low plaque adhesion (Protects gums)"
      },
      {
        "criteria": "Electrical Conductivity & Oral Galvanism",
        "titanium": "Conducts micro-currents with other metals",
        "zirconium": "Zero electrical conductivity (Non-conductive)"
      },
      {
        "criteria": "Flexural Strength & Toughness",
        "titanium": "Very High (850 – 1000 MPa)",
        "zirconium": "Extremely High (1200 – 1400 MPa Y-TZP)"
      },
      {
        "criteria": "Ideal Clinical Indication",
        "titanium": "All full-arch & high-load posterior cases",
        "zirconium": "Anterior smile zone & holistic metal-free care"
      }
    ],
    "compareDecision": {
      "whenTitaniumTitle": "When is Grade 5 Titanium Implantation Advised?",
      "whenTitaniumText": "Titanium remains the undisputed standard for extreme full-arch loading (such as Quad-Zygoma or complex cantilevered bridges) where maximum multi-angle flexural tolerance is required.",
      "whenZirconiumTitle": "When is Zirconium Ceramic the Superior Choice?",
      "whenZirconiumText": "Zirconium ceramic is the definitive gold standard for anterior aesthetic zones, patients with thin gum tissue, individuals with confirmed metal allergies, and holistic dental patients."
    },
    "processTitle": "3-Этапный Протокол Керамической Имплантации",
    "processSubtitle": "Every ceramic implant at Master Smile Studio follows computer-guided 3D digital planning for millimeter-precise aesthetic integration.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Stereolithographic Virtual Stent",
        "text": "High-resolution 3D CBCT scans assess bone volume and soft-tissue biotype. A custom 3D printed surgical stent is engineered for guided, flapless placement.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Soft-Tissue Scan",
            "val": "Digital Gum Biotype Mapping"
          },
          {
            "key": "Surgical Stent",
            "val": "Custom 3D CAD/CAM Guide"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Atraumatic Flapless Placement & Aesthetic Temporary Crown",
        "text": "The ceramic implant is placed into the prepared site with high torque (35–45 Ncm). A tooth-colored temporary crown is placed to sculpt the emergence profile.",
        "specs": [
          {
            "key": "Surgical Technique",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Primary Torque",
            "val": "35 – 45 Ncm"
          },
          {
            "key": "Provisional Crown",
            "val": "Metal-Free CAD/CAM PMMA"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithic Zirconia or Ivoclar E-Max Final Crown",
        "text": "After 2–3 months of osseointegration, a final 3D intraoral digital scan is taken. A permanent 1200+ MPa monolithic multilayer zirconia or E-Max crown is bonded.",
        "specs": [
          {
            "key": "Crown Material",
            "val": "German Multilayer Zirconia / E-Max"
          },
          {
            "key": "Abutment",
            "val": "100% Solid Ceramic Abutment"
          },
          {
            "key": "Bonding System",
            "val": "Dual-Cure Biocompatible Resin"
          }
        ]
      }
    ],
    "materialsTitle": "Материалы Коронок на Керамических Имплантах",
    "materialsSubtitle": "To preserve 100% metal-free purity and lifelike optical translucency, only all-ceramic restorations are used over zirconium implants.",
    "materialsSpecLabels": {
      "material": "Material Composition",
      "strength": "Flexural Strength",
      "chipping": "Chipping / Delamination Risk",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "Monolithic Multilayer Zirconia",
        "sub": "100% Solid German Zirconia on Ceramic Abutment",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "1200+ MPa CAD/CAM Monolithic Multilayer Zirconia",
        "strength": "1200 – 1400 MPa (Indestructible)",
        "chippingRisk": "0% (Zero layered porcelain chipping)",
        "lifespan": "Lifetime (Maximum Durability)",
        "features": [
          {
            "text": "Unrivaled chewing strength for both front and molar restorations",
            "status": "good"
          },
          {
            "text": "Zero metal content guarantees complete biological harmony",
            "status": "good"
          },
          {
            "text": "100% non-porous glazed surface repels bacteria and plaque",
            "status": "good"
          },
          {
            "text": "Gradient translucency mirrors natural enamel depth",
            "status": "good"
          }
        ]
      },
      {
        "title": "Swiss Ivoclar E-Max Porcelain",
        "sub": "Lithium Disilicate Glass Ceramic for Ultra-High Aesthetics",
        "badge": "Anterior Aesthetic Star",
        "isGold": false,
        "material": "Pressable / Milled Lithium Disilicate (Ivoclar Vivadent)",
        "strength": "470 – 530 MPa (High)",
        "chippingRisk": "Very Low (Monolithic glass-ceramic structure)",
        "lifespan": "15 – 20+ Years",
        "features": [
          {
            "text": "Highest optical translucency (99.2% natural enamel match)",
            "status": "good"
          },
          {
            "text": "Optimal for single front tooth replacements on ceramic implants",
            "status": "good"
          },
          {
            "text": "Chemically etched for unmatched micromechanical bond strength",
            "status": "good"
          },
          {
            "text": "Lower flexural strength than zirconia (avoid for multi-unit bridges)",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Porcelain-Fused-to-Metal (PFM)",
        "sub": "Legacy Metal-Core Restorations (Not Recommended)",
        "badge": "Not Recommended",
        "isGold": false,
        "material": "Cobalt-Chromium Alloy with Baked Porcelain",
        "strength": "350 – 450 MPa (Moderate)",
        "chippingRisk": "High (Porcelain chips off metal substrate)",
        "lifespan": "7 – 10 Years",
        "features": [
          {
            "text": "Defeats the purpose of choosing a metal-free ceramic implant",
            "status": "bad"
          },
          {
            "text": "Black metal collar causes dark shadowing along the gum margin",
            "status": "bad"
          },
          {
            "text": "Risk of galvanic current release in the oral cavity",
            "status": "bad"
          },
          {
            "text": "Higher plaque retention at the porcelain-metal junction",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia ⭐",
      "emax": "Swiss Ivoclar E-Max",
      "pfm": "Porcelain-to-Metal (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Flexural Strength",
        "zirconia": "1200 – 1400 MPa (Indestructible)",
        "emax": "470 – 530 MPa (High)",
        "pfm": "350 – 450 MPa (Moderate)"
      },
      {
        "criteria": "Metal-Free Purity",
        "zirconia": "100% Metal-Free Ceramic",
        "emax": "100% Metal-Free Glass Ceramic",
        "pfm": "Contains Cobalt-Chromium / Nickel"
      },
      {
        "criteria": "Anterior Light Translucency",
        "zirconia": "High (Natural gradient)",
        "emax": "Ultra-High (Peak optical match)",
        "pfm": "Opaque (Metal core blocks light)"
      },
      {
        "criteria": "Biocompatibility with Gums",
        "zirconia": "Superior (Zero inflammation)",
        "emax": "Superior (Zero inflammation)",
        "pfm": "Fair (Metal ions cause irritation)"
      },
      {
        "criteria": "Suitability over Ceramic Implants",
        "zirconia": "100% Recommended (Gold Standard)",
        "emax": "100% Recommended (Single anterior)",
        "pfm": "0% Contraindicated"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "zirconia": "Lifetime Guarantee",
        "emax": "15 – 20+ Years",
        "pfm": "7 – 10 Years"
      }
    ],
    "packagesTitle": "Пакеты Керамических Имплантов и Калькулятор Валют",
    "packagesSubtitle": "All-inclusive single tooth and full-arch ceramic packages featuring certified Straumann PURE, Nobel Pearl, and Z-Systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "Straumann PURE Ceramic Package",
        "brand": "Straumann Group (Swiss Made 100% Zirconia)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "EUR": "€850",
          "GBP": "£730",
          "USD": "$935"
        },
        "included": [
          "1x Genuine Straumann PURE Ceramic 100% metal-free implant",
          "ZLA surface topography for rapid bone osseointegration",
          "Custom solid ceramic abutment & aesthetic healing cap",
          "CAD/CAM Monolithic German Zirconia or Ivoclar E-Max Crown",
          "3D CBCT Tomography scan and digital implant guide",
          "Local anesthesia, sterile surgical consumables & medications",
          "Lifetime International Straumann Guarantee Passport",
          "VIP Mercedes Airport-Clinic Transfers (Hotel with multi-units)"
        ]
      },
      {
        "name": "Nobel Pearl Ceramic Package",
        "brand": "Nobel Biocare (Two-Piece Inter ceramic Solution)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€950",
          "GBP": "£820",
          "USD": "$1,050"
        },
        "included": [
          "1x Nobel Pearl 100% metal-free two-piece ceramic implant",
          "Vicarbo carbon-fiber reinforced screw for maximum strength",
          "Custom ivory ceramic abutment for zero dark shadows",
          "Monolithic Multilayer German Zirconia Permanent Crown",
          "3D CBCT Craniofacial diagnostics & surgical planning",
          "Complete surgical instrumentation & post-op medication pack",
          "Lifetime Global Nobel Biocare Warranty Passport",
          "VIP Chauffeur & Clinic Concierge assistance"
        ]
      },
      {
        "name": "Z-Systems Z-Look Ceramic Package",
        "brand": "Z-Systems International (German/Swiss Ceramic Pioneers)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "EUR": "€890",
          "GBP": "£765",
          "USD": "$980"
        },
        "included": [
          "1x Z-Systems Z-Look3 proprietary laser-treated ceramic fixture",
          "High primary stability in both soft and dense bone types",
          "Solid zirconia emergence profile abutment",
          "Bespoke CAD/CAM Monolithic Multilayer Zirconia Crown",
          "Full 3D digital oral imaging & surgical stent guidance",
          "Local anesthesia and complete anti-inflammatory pack",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Private Transportation included"
        ]
      },
      {
        "name": "Anterior Aesthetic Single Zone Package",
        "brand": "Straumann PURE / Nobel Pearl (Front Tooth Star)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€1,100",
          "GBP": "£950",
          "USD": "$1,200"
        },
        "included": [
          "1x Premium Swiss/German Ceramic Implant in anterior zone",
          "Immediate aesthetic temporary PMMA crown for zero smile gap",
          "Bespoke Ivoclar E-Max or High-Translucency Zirconia Crown",
          "Custom gum-sculpting ceramic healing abutment",
          "3D CBCT high-resolution aesthetic smile simulation",
          "Sterile surgical theatre & local anesthesia care",
          "Lifetime International Ceramic Warranty Passport",
          "VIP Mercedes Chauffeur & 5-Star Hotel Partner Assistance"
        ]
      },
      {
        "name": "Full-Arch Ceramic Restoration (6 Implants)",
        "brand": "Straumann PURE / Z-Systems Full-Arch Metal-Free Arch",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€7,500",
          "GBP": "£6,450",
          "USD": "$8,250"
        },
        "included": [
          "6x 100% Metal-Free Ceramic Implants per jaw / arch",
          "Fixed aesthetic screw-retained temporary bridge in 24 hours",
          "Permanent 1200+ MPa Monolithic Multilayer Zirconia Bridge",
          "Computer-guided 3D CBCT surgical guide stent",
          "Full surgical operating suite & local anesthesia/sedation",
          "5-Star Luxury Hotel Partner Stay included",
          "VIP Mercedes Private Chauffeur Transfers included",
          "Lifetime Global Manufacturer Guarantee & Medical Passport"
        ]
      },
      {
        "name": "Holistic Dual-Arch 100% Metal-Free Package",
        "brand": "Complete Upper & Lower 12-Ceramic Implant Reconstruction",
        "duration": "5+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€14,500",
          "GBP": "£12,500",
          "USD": "$15,900"
        },
        "included": [
          "12x Certified Ceramic Implants (6 Upper + 6 Lower Jaws)",
          "Complete elimination of all oral metals and galvanic currents",
          "Fixed temporary acrylic bridges in both jaws within 24-48h",
          "Dual Full-Arch CAD/CAM Monolithic German Zirconia Bridges",
          "Hospital surgical suite, IV sedation & specialist MD team",
          "7 Nights 5-Star Luxury Hotel with Bed & Breakfast",
          "VIP Mercedes Chauffeur for all Airport & Clinic Transfers",
          "Lifetime International Manufacturer Warranty & Passports"
        ]
      }
    ],
    "costTitle": "Международное Сравнение Цен: Керамические Импланты (Великобритания / Германия vs Стамбул)",
    "costSubtitle": "Compare real clinical costs per ceramic implant unit including abutment, 3D CBCT, laboratory CAD/CAM crown, and VIP concierge services.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerUnit": "Cost per Ceramic Implant (Unit)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private London)",
        "costPerUnit": "£1,800 – £2,800 ($2,300 – $3,600)",
        "inclusions": "Surgical fixture only. Abutment (£450), CAD/CAM crown (£850), CBCT scan (£200), and consultation billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Biological Dental Clinics)",
        "costPerUnit": "€1,600 – €2,500 ($1,750 – $2,750)",
        "inclusions": "Surgeon and implant hardware. Ceramic abutment, zirconia crown, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerUnit": "€650 – €950 (£550 – £820)",
        "inclusions": "100% All-Inclusive: Genuine Straumann PURE / Nobel Pearl fixture, solid ceramic abutment, German Zirconia / E-Max crown, 3D CBCT & VIP transfers.",
        "valueAdvantage": "60% – 70% Net Savings (Certified Swiss/German Purity)"
      }
    ],
    "faqTitle": "Часто Задаваемые Вопросы: Керамические Импланты",
    "faqSubtitle": "Clinically verified answers regarding biocompatibility, metal-free purity, strength, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Biocompatibility FAQ (100% Metal-Free Implants)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What are Zirconium (Ceramic) Dental Implants and how are they made?",
        "a": "Zirconium dental implants are 100% metal-free dental fixtures crafted from Y-TZP (Yttria-Stabilized Tetragonal Zirconia Polycrystal) high-performance ceramic. Unlike grey titanium, they are completely tooth-colored (pure ivory/white) and biologically inert, integrating seamlessly into living bone."
      },
      {
        "q": "Are Zirconium implants completely metal-free?",
        "a": "Yes. Zirconia (ZrO2) is a ceramic material formed through the oxidation of zirconium. Although zirconium is classified as a transition element on the periodic table, the ceramic state is entirely non-metallic, electrically non-conductive, and chemically stable in the oral cavity."
      },
      {
        "q": "How do Zirconium implants compare to traditional Titanium implants?",
        "a": "Both achieve comparable osseointegration success rates (97–98%). However, zirconium implants offer superior aesthetics in thin gum biotypes (no grey shadow), zero electrical conductivity (no oral galvanism), and significantly lower bacterial biofilm adhesion."
      },
      {
        "q": "Are ceramic implants as strong as titanium implants?",
        "a": "Modern Y-TZP zirconia ceramic exhibits extraordinary flexural strength exceeding 1200 to 1400 MPa, with high fracture toughness capable of withstanding chewing forces up to 600+ Newtons, making them fully reliable for both front and molar restorations."
      },
      {
        "q": "Who should choose ceramic implants over titanium?",
        "a": "Ceramic implants are specifically recommended for patients with confirmed metal allergies or chemical sensitivities, individuals following a holistic/biological lifestyle, patients with thin gum biotypes in the anterior aesthetic zone, and those prone to gingival inflammation."
      },
      {
        "q": "Can Zirconium implants cause allergic reactions or galvanism?",
        "a": "No. Zirconia is 100% hypoallergenic, non-immunogenic, and does not conduct electrical micro-currents (oral galvanism), which can occur when different metals interact in the mouth."
      },
      {
        "q": "What is the difference between 1-piece (monotype) and 2-piece ceramic implants?",
        "a": "One-piece ceramic implants have the implant post and abutment integrated into a single solid ceramic unit, eliminating micro-gaps for bacteria. Two-piece systems allow the abutment to be connected separately, offering greater prosthetic angle flexibility."
      },
      {
        "q": "How long does bone osseointegration take for ceramic implants?",
        "a": "Ceramic implants with specialized laser-treated surfaces (such as Straumann ZLA) osseointegrate in approximately 8 to 12 weeks, matching the healing timeline of conventional titanium fixtures."
      },
      {
        "q": "Are ceramic implants resistant to Peri-implantitis?",
        "a": "Clinical studies show that the ultra-smooth ceramic surface retains significantly less bacterial plaque than titanium, resulting in healthier gingival tissues and lower incidence of peri-implant mucositis and bone loss."
      },
      {
        "q": "What type of crown is placed over a ceramic implant?",
        "a": "To maintain 100% metal-free biocompatibility, we exclusively bond CAD/CAM Monolithic German Multilayer Zirconia or Swiss Ivoclar E-Max crowns on solid ceramic abutments."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many days do I need to stay in Istanbul for ceramic implant treatment?",
        "a": "Your first visit requires 3 to 5 days in Istanbul for 3D CBCT diagnostic planning, implant placement, and fitting of an aesthetic temporary crown. After 2 to 3 months of osseointegration, you return for a 5-day visit to receive your permanent zirconia crown."
      },
      {
        "q": "What is included in the Master Smile Studio Ceramic Package?",
        "a": "Our all-inclusive package covers the genuine ceramic implant, 3D CBCT scans, solid ceramic abutment, permanent CAD/CAM German Zirconia or E-Max crown, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of Ceramic implants do you offer?",
        "a": "We exclusively work with world-leading certified ceramic implant manufacturers including Straumann PURE Ceramic (Switzerland), Nobel Pearl (Nobel Biocare), and Z-Systems (Germany/Switzerland)."
      },
      {
        "q": "Why are Ceramic Implants 60%–70% more affordable in Istanbul than in the UK or Germany?",
        "a": "Lower operational overheads, favorable currency exchange rates, and high clinical volume in Istanbul allow us to provide genuine Swiss and German ceramic systems at transparent, accessible rates without compromising clinical quality."
      },
      {
        "q": "Do Ceramic implants come with a warranty and medical passport?",
        "a": "Yes. Every ceramic implant is accompanied by an official International Lifetime Manufacturer Warranty Certificate and a personalized medical passport documenting serial numbers and batch verification."
      },
      {
        "q": "Can Ceramic implants be used for full-arch or full-mouth restorations?",
        "a": "Yes. We frequently perform 6-implant full-arch ceramic restorations using Straumann PURE Ceramic fixtures combined with 1200+ MPa monolithic zirconia bridges for completely metal-free total rehabilitation."
      },
      {
        "q": "How do I start my consultation before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief oral surgeon and prosthodontist will formulate a tailored 3D treatment plan and fixed price quotation within 24 hours."
      }
    ]
  }
};

export default function ZirconiumImplantDetailView() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');

  return (
    <div className={styles.wrapper}>
      {/* 1. FIND THE RIGHT TREATMENT FOR YOU ACCORDION (DIRECTLY UNDER HERO) */}
      <TreatmentRightTreatmentAccordion />

      {/* 2. CLINICAL INTRODUCTION & BIOMECHANICS */}
      <section aria-labelledby="zirc-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="zirc-intro-heading" className={styles.introHeading}>
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
            <Link href="/treatments/dental-implants/immediate-implant-treatment" className={styles.linkGold}>
              {d.introP3LinkImmediate}
            </Link>
            {d.introP3Tail}
          </p>

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

      {/* 2. OBJECTIVE COMPARISON: ZIRCONIUM CERAMIC vs TITANIUM IMPLANTS */}
      <section aria-labelledby="zirc-compare-heading" className={styles.compareSection}>
        <div className={styles.container}>
          <div className={styles.compareHeader}>
            <h2 id="zirc-compare-heading" className={styles.compareTitle}>
              {d.compareTitle}
            </h2>
            <p className={styles.compareSubtitle}>{d.compareSubtitle}</p>
          </div>

          <div className={styles.compareTableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.compareTh}>{d.compareTableHeaders.criteria}</th>
                  <th className={styles.compareTh}>{d.compareTableHeaders.titanium}</th>
                  <th className={styles.compareThHighlight}>{d.compareTableHeaders.zirconium}</th>
                </tr>
              </thead>
              <tbody>
                {d.compareTableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className={styles.compareTd}>
                      <strong>{row.criteria}</strong>
                    </td>
                    <td className={styles.compareTd}>{row.titanium}</td>
                    <td className={`${styles.compareTd} ${styles.compareTdHighlight}`}>
                      {row.zirconium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.compareDecisionBox}>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenTitaniumTitle}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenTitaniumText}</p>
            </div>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenZirconiumTitle}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenZirconiumText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENT PACKAGES & DYNAMIC CURRENCY SWITCHER */}
      <section aria-labelledby="zirc-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="zirc-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="zirc-cost-heading" className={styles.costSection}>
        <div className={styles.container}>
          <div className={styles.costHeader}>
            <h2 id="zirc-cost-heading" className={styles.costTitle}>
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

      {/* 5. REUSABLE: SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

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
      <section aria-labelledby="zirc-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="zirc-faq-heading" className={styles.faqTitle}>
              {d.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{d.faqSubtitle}</p>
          </div>

          {/* CLINICAL & BIOCOMPATIBILITY FAQS (10 QUESTIONS) */}
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
      <TreatmentInteractiveQuoteForm defaultTreatment="Zirconium Implants" />
    </div>
  );
}
