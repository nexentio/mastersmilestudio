'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
import styles from './AllOnFourImplantDetailView.module.css';

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
  image?: string;
  imageAlt?: string;
  material: string;
  strength: string;
  chippingRisk: string;
  lifespan: string;
  verdictLabel?: string;
  verdictText?: string;
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
  all4: string;
  all5: string;
  all6: string;
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
  introP3LinkAll4?: string;
  introP3LinkAll6?: string;
  introP3Mid: string;
  introP3LinkZygoma: string;
  introP3And: string;
  introP3LinkSinus: string;
  introP3Tail: string;

  compareTitle: string;
  compareSubtitle: string;
  compareTableHeaders: {
    criteria: string;
    all4: string;
    all5: string;
    all6: string;
  };
  compareTableRows: CompareTableRow[];
  compareDecision: {
    whenAll4Title: string;
    whenAll4Text: string;
    whenAll6Title: string;
    whenAll6Text: string;
  };

  processTitle: string;
  processSubtitle: string;
  processCards: ProcessCardItem[];

  materialsTitle: string;
  materialsSubtitle: string;
  materialsComparisonBadge?: string;
  materialsComparisonAlt?: string;
  materialsComparisonText?: string;
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

const MATERIAL_CARD_DEFAULT_IMAGES = [
  {
    src: '/treatments/materials/monolithic-multi-layer-zirconia-all-on-4-bridge.webp',
  },
  {
    src: '/treatments/materials/hybrid-titanium-acrylic-pmma-all-on-4-denture-bridge.webp',
  },
  {
    src: '/treatments/materials/porcelain-fused-to-metal-pfm-all-on-4-dental-bridge.webp',
  },
];

const DICTIONARIES: Record<string, DetailDictionary> = {
  "en": {
    "introBadge": "FULL-ARCH IMMEDIATE FIXED TEETH",
    "introTitle": "All-on-4 Dental Implants in Antalya, Turkey",
    "introLead": "Permanent full-arch restoration anchored on 4 strategic implants — fixed teeth in 24 hours without bone grafting.",
    "introP1": "At Master Smile Studio, All-on-4 dental implants represent a life-changing solution for patients facing severe bone loss or complete tooth loss. By angling the two posterior implants at up to 45 degrees and placing two upright fixtures in the anterior jaw, this breakthrough protocol bypasses the maxillary sinus and inferior alveolar nerve, eliminating the need for complex bone grafts while enabling immediate fixed provisional teeth.",
    "introP2": "The All-on-4 concept maximizes existing natural bone density, delivering high primary stability (35–50 Ncm) and balanced masticatory distribution across your entire smile. You leave our clinic within 24 hours with firmly screwed, beautiful teeth — chewing comfortably and smiling with renewed confidence from day one.",
    "introP3Lead": "Depending on your individual bone volume or clinical goals, you can also explore our ",
    "introP3LinkAll4": "All-on-6 Dental Implants",
    "introP3Mid": ", specialized ",
    "introP3LinkZygoma": "Zygomatic Implants for Severe Bone Loss",
    "introP3And": ", and ",
    "introP3LinkSinus": "Sinus Lifting Surgery",
    "introP3Tail": " options.",
    "materialsTitle": "All-on-4 Permanent Bridge Materials: Why We Use Monolithic Zirconia",
    "materialsSubtitle": "In All-on-4 restorations, 4 implants bear your entire jaw chewing load (200 to 600 Newtons). Discover why we exclusively engineer 100% Monolithic Multilayer Zirconia instead of cheaper acrylic or fragile porcelain.",
    "materialsComparisonBadge": "Dental Lab Comparison",
    "materialsComparisonAlt": "All-on-4 permanent dental implant bridge materials comparison: Monolithic Zirconia vs Hybrid Acrylic vs PFM",
    "materialsComparisonText": "Direct side-by-side dental laboratory comparison of all 3 permanent All-on-4 bridge materials: PFM (Metal-Porcelain), Hybrid Acrylic (PMMA), and Monolithic Multilayer German Zirconia showing structural differences.",
    "materialsSpecLabels": {
      "material": "Material Type",
      "strength": "Flexural Strength",
      "chipping": "Chipping Risk",
      "lifespan": "Expected Lifespan"
    },
    "materialsCards": [
          {
                "title": "Monolithic Multilayer Zirconia",
                "sub": "100% Solid German Zirconia + Milled Titanium Bar",
                "badge": "MASTER SMILE GOLD STANDARD",
                "isGold": true,
                "material": "1400 MPa CAD/CAM Zirconia",
                "strength": "1,400 MPa",
                "chippingRisk": "Zero Chipping Risk",
                "lifespan": "Lifetime (25+ Years)",
                "verdictLabel": "CLINICAL VERDICT",
                "verdictText": "Master Smile Studio's primary choice for 95%+ of full-arch cases. Highest biocompatibility, superior natural translucency, and lifetime fracture resistance under full chewing loads.",
                "features": [
                      {
                            "text": "Zero chipping or fractures under heavy chewing force",
                            "status": "good"
                      },
                      {
                            "text": "Ultra-smooth surface prevents plaque & Peri-Implantitis",
                            "status": "good"
                      },
                      {
                            "text": "Non-porous: 100% stain-resistant & zero odor retention",
                            "status": "good"
                      },
                      {
                            "text": "Multilayer gradient creates natural tooth translucency",
                            "status": "good"
                      }
                ]
          },
          {
                "title": "Hybrid Titanium-Acrylic Bridge",
                "sub": "Cast Metal Frame + Denture Acrylic & Resin Teeth",
                "material": "PMMA Acrylic + Metal Frame",
                "strength": "100 MPa",
                "chippingRisk": "High Wear & Detachment",
                "lifespan": "3 – 5 Years (Temporary)",
                "verdictLabel": "CLINICAL VERDICT",
                "verdictText": "Acceptable only as a budget provisional or transitional bridge. Not recommended as a permanent 20+ year solution due to rapid resin wear, bacterial absorption, and risk of individual teeth detaching.",
                "features": [
                      {
                            "text": "Abrasive wear flattens teeth, altering vertical bite",
                            "status": "bad"
                      },
                      {
                            "text": "Porous resin absorbs bacteria, food oils & causes odor",
                            "status": "bad"
                      },
                      {
                            "text": "Individual teeth can detach when biting hard foods",
                            "status": "bad"
                      },
                      {
                            "text": "Requires frequent maintenance and total replacement",
                            "status": "warn"
                      }
                ]
          },
          {
                "title": "Porcelain-Fused-to-Metal (PFM)",
                "sub": "Cast Cobalt-Chromium Frame + Baked Ceramic",
                "material": "Layered Feldspathic Porcelain",
                "strength": "450 MPa",
                "chippingRisk": "Porcelain Delamination",
                "lifespan": "8 – 12 Years",
                "verdictLabel": "CLINICAL VERDICT",
                "verdictText": "Outdated technology for full arches. While the metal framework is robust, rigid occlusal loads on 4 implants frequently cause irreversible porcelain chipping, exposing gray metal.",
                "features": [
                      {
                            "text": "Porcelain delaminates & chips under heavy All-on-4 chewing forces",
                            "status": "bad"
                      },
                      {
                            "text": "Dark metal margin becomes visible if gums recede",
                            "status": "bad"
                      },
                      {
                            "text": "Heavier weight creates a bulky oral sensation",
                            "status": "warn"
                      },
                      {
                            "text": "Intraoral repair of chipped porcelain is impossible",
                            "status": "bad"
                      }
                ]
          }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "zirconia": "Monolithic Zirconia (Our Standard)",
      "acrylic": "Hybrid Acrylic (Budget Option)",
      "pfm": "Metal-Porcelain (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Fracture / Chipping Risk",
        "zirconia": "Near Zero (Solid 1200+ MPa)",
        "acrylic": "High (Teeth can detach)",
        "pfm": "Moderate (Porcelain chips)"
      },
      {
        "criteria": "Chewing Wear & Tooth Shortening",
        "zirconia": "Zero Wear (Stable Bite)",
        "acrylic": "Wears in 3–5 yrs (TMJ pain)",
        "pfm": "Highly wear-resistant"
      },
      {
        "criteria": "Staining & Odor Absorption",
        "zirconia": "100% Non-porous (Zero Stains)",
        "acrylic": "Porous (Absorbs coffee & odors)",
        "pfm": "Glazed (Resists stains)"
      },
      {
        "criteria": "Gum Biocompatibility",
        "zirconia": "Anti-bacterial (Protects gums)",
        "acrylic": "Plaque trap (High infection risk)",
        "pfm": "Potential metal sensitivity"
      },
      {
        "criteria": "Aesthetic Light Translucency",
        "zirconia": "Multilayer Natural Vitality",
        "acrylic": "Flat plastic opacity",
        "pfm": "Dull background metal reflection"
      },
      {
        "criteria": "Clinical Longevity",
        "zirconia": "Lifetime / 25+ Years (Permanent)",
        "acrylic": "3 – 7 Years (Replacement needed)",
        "pfm": "8 – 12 Years (Chipping risk)"
      }
    ],
    "packagesTitle": "All-on-4 Implant Package Deals & Pricing in Antalya",
    "packagesSubtitle": "Transparent, all-inclusive pricing per arch with 4 premium titanium implants, CAD/CAM zirconia bridge, 5-star hotel stay, and private VIP transfers.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "What's Included in This Package:",
    "pricePerArchLabel": "Price per jaw / arch",
    "getQuoteBtn": "Get Free Personalized Quote",
    "mostPopularBadge": "MOST POPULAR",
    "faqTitle": "Frequently Asked Questions About All-on-4 Dental Implants",
    "faqSubtitle": "Clear, clinically validated answers to help you understand every surgical, biomechanical, and travel aspect of your All-on-4 journey in Antalya.",
    "faqGroup1Title": "Specialized All-on-4 Clinical & Biomechanical FAQs",
    "faqGroup2Title": "Health Tourism, Package Inclusions & Lifetime Warranty",
    "packages": [
      {
        "name": "ALL-ON-4 – NUCLEOSS",
        "brand": "NucleOSS (Grade 4 Pure Titanium)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x NucleOSS Dental Implants per Arch",
          "10-12x Fixed Temporary Teeth (Same Visit)",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "Local Anesthesia & Post-op Medication Pack",
          "Airport-Hotel VIP Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory Work Included"
        ]
      },
      {
        "name": "ALL-ON-4 – DXL GERMAN",
        "brand": "DXL (German Engineering)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x DXL German Titanium Implants",
          "10-12x Fixed Temporary Teeth",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "VIP Airport & Hotel Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory & CAD/CAM Milling"
        ]
      },
      {
        "name": "ALL-ON-4 – STRAUMANN",
        "brand": "Straumann (Swiss Gold Standard)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x Straumann Swiss Titanium Implants",
          "10-12x Fixed High-Grade Temporary Teeth",
          "10-12x Final Monolithic Zirconia Teeth",
          "Lifetime International Manufacturer Passport",
          "Luxury 5-Star Hotel Stay Included",
          "VIP Mercedes Chauffeur Transfers",
          "Dedicated Personal Patient Host"
        ]
      }
    ],
    "faqsPart1": [
          {
                "q": "How can only 4 implants support an entire full arch of teeth?",
                "a": "The breakthrough engineering of All-on-4 relies on tilting the two posterior implants up to 45 degrees. This maximizes bone-to-implant contact in the dense anterior jawbone and creates a broad, rigid polygonal support base that easily distributes heavy chewing loads across 10 to 12 fixed teeth."
          },
          {
                "q": "Who is the ideal candidate for All-on-4 dental implants?",
                "a": "All-on-4 is the premier solution for patients with complete tooth loss, multiple failing or loose teeth, advanced gum disease, or severe bone loss in the back of the jaw where traditional straight implants cannot be placed without extensive bone grafting."
          },
          {
                "q": "Does the All-on-4 procedure require bone grafting or sinus lifting?",
                "a": "In more than 90% of cases, All-on-4 completely avoids bone grafting and sinus lifts. By angling the rear implants, our oral surgeons bypass the maxillary sinus cavity in the upper jaw and the mental nerve in the lower jaw, saving months of healing and thousands in surgical costs."
          },
          {
                "q": "How does the same-day fixed temporary bridge work for All-on-4?",
                "a": "When our oral surgeons achieve high primary insertion stability (35–50 Ncm), multi-unit abutments are attached directly to the 4 implants. Within 24 hours of surgery, a rigid screw-retained provisional bridge is installed, so you leave our clinic smiling and able to eat immediately."
          },
          {
                "q": "What should I eat during the 3-month osseointegration period?",
                "a": "While your implants permanently integrate with the jawbone over 3 months, you must adhere to a soft-food diet (fish, pasta, scrambled eggs, well-cooked vegetables, tender poultry). Avoid biting directly into hard crusts, nuts, or tough meats with your provisional teeth."
          },
          {
                "q": "What material is used for the permanent All-on-4 bridge?",
                "a": "At Master Smile Studio, our gold standard is 100% Monolithic Multilayer German Zirconia (1,400 MPa flexural strength) supported by a CAD/CAM milled titanium bar. Unlike budget acrylic dentures, it will never fracture, discolor, or absorb oral odors."
          },
          {
                "q": "Is the All-on-4 bridge fixed or removable by the patient?",
                "a": "The All-on-4 bridge is 100% permanently screw-retained. It cannot be removed by the patient. Only your dentist can unscrew it for professional routine check-ups. At home, you clean it just like natural teeth using a Waterpik and super-floss."
          },
          {
                "q": "Why is 3D digital computer-guided surgery essential for All-on-4?",
                "a": "Tilting posterior implants at exact 30-to-45-degree angles requires microscopic accuracy. Custom 3D surgical guides ensure sub-millimeter precision (<0.1 mm tolerance), guaranteeing optimal screw channel alignment and zero risk to adjacent nerves or sinuses."
          },
          {
                "q": "Can failing teeth be extracted during the same All-on-4 surgery?",
                "a": "Yes. Any remaining decayed, loose, or damaged teeth are gently extracted during the exact same surgical session. Implants are placed immediately into extraction sockets, followed by digital scans for your 24-hour fixed teeth."
          },
          {
                "q": "What is the long-term clinical success rate of All-on-4 implants?",
                "a": "Independent clinical studies spanning over 15 years report an All-on-4 success rate exceeding 98.2%. With proper daily hygiene and annual checks, premium Swiss Straumann and German implants provide a lifetime of functional stability."
          }
    ],
    "faqsPart2": [
          {
                "q": "How many visits to Antalya are required for All-on-4 treatment?",
                "a": "Exactly 2 visits: Visit 1 (3–5 days) includes 3D CBCT planning, surgery, extractions, and placement of your screw-retained temporary teeth. Visit 2 (5–7 days, after 3 months) is for digital smile design, shade matching, and final delivery of your permanent 1,400 MPa monolithic zirconia bridge."
          },
          {
                "q": "What is included in the Master Smile Studio All-on-4 package?",
                "a": "Everything is covered under our transparent guarantee: 4 premium implants per arch, multi-unit abutments, 24-hour fixed temporary teeth, final monolithic zirconia bridge, 3D CBCT diagnostics, medications, 4/5-star hotel accommodation with breakfast, and private VIP chauffeur transfers."
          },
          {
                "q": "Will my package price change once I arrive in Antalya?",
                "a": "No. Following our virtual consultation and radiographic analysis, you receive an official, guaranteed written quote. We maintain a strict zero-hidden-fee policy."
          },
          {
                "q": "Will I feel pain during the 4-implant surgery? Is sedation available?",
                "a": "The procedure is completely painless under modern local anesthesia. For anxious patients, conscious IV sedation or twilight sleep is administered by our licensed in-house anesthesiologist, allowing you to relax comfortably throughout."
          },
          {
                "q": "Can patients with diabetes or smokers undergo All-on-4?",
                "a": "Yes. Patients with controlled diabetes (HbA1c < 7.5%) have success rates identical to non-diabetics. For smokers, we recommend pausing or reducing smoking 2 weeks before and after surgery to support optimal vascular healing."
          },
          {
                "q": "How does the international lifetime warranty passport work?",
                "a": "You receive an official manufacturer-certified warranty passport containing the unique serial numbers and lot tags of your Swiss/German implants. This provides global lifetime replacement coverage accepted by certified dental specialists worldwide."
          },
          {
                "q": "How is post-operative follow-up managed in my home country?",
                "a": "Our dedicated multilingual patient coordination team provides continuous post-op support via WhatsApp and video consultations. We supply full surgical discharge reports and high-resolution panoramic X-rays for your local dentist."
          }
    ],
    "compareTitle": "Objective Full-Arch Comparison: All-on-4 vs. All-on-5 vs. All-on-6",
    "compareSubtitle": "Choosing between 4, 5, or 6 implants depends strictly on your posterior bone volume, occlusal masticatory force, and anatomical jaw width.",
    "compareTableHeaders": {
      "criteria": "Clinical & Biomechanical Dimension",
      "all4": "All-on-4 Protocol",
      "all5": "All-on-5 (All-on-X)",
      "all6": "All-on-6 Protocol (Gold Standard)"
    },
    "compareTableRows": [
      {
        "criteria": "Number of Implants per Arch",
        "all4": "4 Titanium Implants (2 straight, 2 angled at 45°)",
        "all5": "5 Titanium Implants (Used for asymmetric bone loss)",
        "all6": "6 Titanium Implants (2 anterior, 4 posterior anchors)"
      },
      {
        "criteria": "Full-Arch Tooth Capacity",
        "all4": "10 to 12 Teeth (Terminates at 1st Molar)",
        "all5": "12 Teeth",
        "all6": "14 Teeth (Full arch including 2nd Molars)"
      },
      {
        "criteria": "Masticatory Bite Force Distribution",
        "all4": "Moderate to High (200 – 350 N)",
        "all5": "High (350 – 450 N)",
        "all6": "Maximum (450 – 600+ N, Heavy Chewers)"
      },
      {
        "criteria": "Bone Grafting / Sinus Lifting Requirement",
        "all4": "Avoided in 90% of cases via 45° angled bypass",
        "all5": "May be required on one side of the jaw",
        "all6": "May require minor sinus lift if posterior bone is atrophied"
      },
      {
        "criteria": "Posterior Cantilever Overhang",
        "all4": "Moderate cantilever (10 – 15 mm overhang)",
        "all5": "Reduced cantilever overhang",
        "all6": "Zero or minimal cantilever (Maximum mechanical rigidity)"
      },
      {
        "criteria": "Structural Redundancy / Safety Factor",
        "all4": "If 1 implant fails, the entire bridge must be replaced",
        "all5": "Remaining 4 implants can temporarily maintain bridge",
        "all6": "If 1 implant fails, the remaining 5 fixtures maintain bridge stability"
      },
      {
        "criteria": "Primary Patient Suitability",
        "all4": "Moderate-to-severe bone atrophy, patients avoiding graft surgery",
        "all5": "Asymmetric bone volume between left and right jaws",
        "all6": "Adequate bone height (>10 mm), strong bite force, younger/active patients"
      }
    ],
    "compareDecision": {
      "whenAll4Title": "When is All-on-4 the Right Solution?",
      "whenAll4Text": "All-on-4 is clinically indicated when significant bone resorption has occurred in the posterior upper or lower jaw. By angling the two rear implants up to 45 degrees, our surgeons anchor into dense anterior bone, avoiding the need for sinus lifts or costly bone graft harvesting.",
      "whenAll6Title": "When is All-on-6 the Superior Clinical Choice?",
      "whenAll6Text": "All-on-6 is recommended whenever posterior bone height (>10 mm) is preserved, in patients who clench or grind their teeth (bruxism), or in younger and active individuals desiring a full 14-tooth dental arch with unrestricted chewing power."
    },
    "processTitle": "3-Phase Precision Protocol: From 3D Digital Planning to Permanent Zirconia",
    "processSubtitle": "Every All-on-4 transformation at Master Smile Studio follows a strict sub-millimeter computer-guided surgical protocol and robotic CAD/CAM engineering.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Virtual Surgery & Guided Template",
        "text": "High-resolution Cone Beam Tomography maps bone density in Hounsfield Units (HU) and identifies exact nerve and sinus boundaries. A custom stereolithographic template guides all 6 implants with sub-millimeter precision.",
        "specs": [
          {
            "key": "Accuracy",
            "val": "< 0.1 mm"
          },
          {
            "key": "Incision Type",
            "val": "Minimally Invasive Guided"
          },
          {
            "key": "Bone Analysis",
            "val": "3D Hounsfield Scale"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "24-Hour Immediate Fixed Loading",
        "text": "With primary insertion torque achieving 35–50 Ncm, multi-unit abutments are secured. Within 24 hours, a high-density reinforced temporary bridge is screwed onto the 6 fixtures so you leave with functional teeth on day one.",
        "specs": [
          {
            "key": "Insertion Torque",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Delivery Time",
            "val": "Within 24 Hours"
          },
          {
            "key": "Functionality",
            "val": "Immediate Soft Diet"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "5-Axis Robotic CAD/CAM Zirconia Milling",
        "text": "After 3 months of bone healing, 3D optical scanning captures your gum contours. A monolithic multilayer German Zirconia bridge (1200+ MPa) is robotic-milled and sintered at 1500°C for lifetime fracture resistance.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Material Grade",
            "val": "Solid German Zirconia"
          },
          {
            "key": "Sintering Temp",
            "val": "1500°C High-Density"
          }
        ]
      }
    ],
    "costTitle": "International Price & Treatment Comparison: UK / Germany vs. Antalya (All-on-4)",
    "costSubtitle": "Understand why thousands of European and UK patients choose Master Smile Studio for full-arch All-on-4 restoration without sacrificing material quality.",
    "costTableHeaders": {
      "country": "Destination / Clinic Tier",
      "costPerArch": "Standard Private Healthcare Rates",
      "inclusions": "What Is Included in the Price",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Surgery and standard bridge only. 3D CBCT, temporary teeth, sedation, and check-ups billed separately.",
        "valueAdvantage": "Save 65% – 70% (VIP Inclusions with us) on genuine Straumann/German systems."
      },
      {
        "country": "Germany / Switzerland (Private Clinic)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Surgical fees and lab work. Hotel accommodation, VIP transfers, and medications not covered.",
        "valueAdvantage": "Save 60% – 65% (VIP Inclusions with us) with identical German/Swiss titanium."
      },
      {
        "country": "Master Smile Studio (Antalya, Turkey) ⭐",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "All-Inclusive: 4 Implants, Temporary Bridge, Final Zirconia Bridge, 3D CBCT, 5-Star Hotel, VIP Mercedes Transfers, Lifetime Warranty Passport.",
        "valueAdvantage": "100% Fixed Transparent Package Price Guarantee with Zero Hidden Medical or Travel Fees."
      }
    ]
  },
  "tr": {
    "introBadge": "ALTIN STANDART TAM ÇENE TEDAVİSİ",
    "introTitle": "All-on-4 Diş İmplantı Tedavisi Antalya",
    "introLead": "4 titanyum implant üzerine sabitlenen tam çene restorasyonu — kemik tozu ihtiyacını en aza indiren aynı gün sabit diş konsepti.",
    "introP1": "Master Smile Studio’da All-on-4 diş implantı tedavisi, ileri kemik erimesi yaşayan veya tam dişsizlik problemi olan hastalarımız için devrim niteliğinde bir çözümdür. Arka bölgelere açılı yerleştirilen 2 implant ve ön bölgedeki 2 düz implant sayesinde, kemik tozu veya sinüs lifting ihtiyacı olmadan aynı gün sabit geçici diş yüklemesi yapılabilmektedir.",
    "introP2": "All-on-4 protokolü, çene kemiğinin en yoğun olduğu anatomik bölgelerden maksimum destek alarak çiğneme kuvvetini dengeli biçimde dağıtır. Böylece hastalarımız uzun bekleme süreleri olmadan aynı gün yeni dişlerine ve estetik gülüşlerine kavuşur.",
    "introP3Lead": "Kemik yapınıza ve klinik hedeflerinize göre kliniğimizde ayrıca ",
    "introP3LinkAll4": "All-on-6 Diş İmplantı",
    "introP3Mid": ", ileri kemik erimeleri için ",
    "introP3LinkZygoma": "Zigomatik İmplant Tedavisi",
    "introP3And": " ve ",
    "introP3LinkSinus": "Sinüs Lifting Operasyonu",
    "introP3Tail": " seçeneklerini de değerlendirebilirsiniz.",
    "materialsTitle": "All-on-4 Kalıcı Köprü Malzemeleri: Neden Monolitik Zirkonyum?",
    "materialsSubtitle": "All-on-4 restorasyonlarında 4 implant tüm çenenin 200 ila 600 Newtonluk çiğneme yükünü taşır. Ucuz akrilik veya kırılgan porselen yerine neden %100 Monolitik Çok Katmanlı Zirkonyum ürettiğimizi keşfedin.",
    "materialsComparisonBadge": "Laboratuvar Karşılaştırması",
    "materialsComparisonAlt": "All-on-4 kalıcı köprü malzemeleri karşılaştırması: Zirkonyum, Hibrit Akrilik ve PFM köprüler Antalya",
    "materialsComparisonText": "Master Smile Studio Dental Laboratuvarında 3 farklı All-on-4 kalıcı köprü materyalinin (PFM, Hibrit Akrilik ve Monolitik Zirkonyum) estetik, ışık geçirgenliği ve dayanım açısından fiziksel karşılaştırması.",
    "materialsSpecLabels": {
      "material": "Materyal Türü",
      "strength": "Kırılma Dayanımı",
      "chipping": "Kırılma / Çatlama Riski",
      "lifespan": "Klinik Ömrü"
    },
    "materialsCards": [
          {
                "title": "Monolitik Çok Katmanlı Zirkonyum",
                "sub": "100% Yekpare Alman Zirkonyumu + Frezelenmiş Titanyum Bar",
                "badge": "MASTER SMILE ALTIN STANDARDI",
                "isGold": true,
                "material": "1400 MPa CAD/CAM Zirkonyum",
                "strength": "1.400 MPa",
                "chippingRisk": "Sıfır Kırılma Riski",
                "lifespan": "Ömür Boyu (25+ Yıl)",
                "verdictLabel": "KLİNİK KARAR",
                "verdictText": "Master Smile Studio'da tam çene vakalarının %95'inden fazlasında ilk tercihimizdir. Üstün biyouyumluluk, doğal diş estetiği ve yüksek çiğneme kuvvetlerinde ömür boyu kırılmazlık sunar.",
                "features": [
                      {
                            "text": "Yoğun çiğneme baskısında sıfır kırılma ve parça atma",
                            "status": "good"
                      },
                      {
                            "text": "Pürüzsüz yüzey bakteri tutmaz, Peri-implantitis riskini sıfırlar",
                            "status": "good"
                      },
                      {
                            "text": "Gözeneksiz yapı: Asla leke tutmaz, koku yapmaz",
                            "status": "good"
                      },
                      {
                            "text": "Çok katmanlı doğal ışık geçirgenliği ile canlı estetik",
                            "status": "good"
                      }
                ]
          },
          {
                "title": "Hibrit Titanyum-Akrilik Köprü",
                "sub": "Metal İskelet + Protez Akriliği ve Plastik Dişler",
                "material": "PMMA Akrilik + Metal İskelet",
                "strength": "100 MPa",
                "chippingRisk": "Yüksek Aşınma ve Kopma",
                "lifespan": "3 – 5 Yıl (Geçici)",
                "verdictLabel": "KLİNİK KARAR",
                "verdictText": "Yalnızca bütçe odaklı veya geçici bir köprü olarak kabul edilebilir. Reçinenin aşınması, koku/bakteri tutması ve plastik dişlerin kopma riski nedeniyle 20+ yıllık kalıcı çözüm olarak önerilmez.",
                "features": [
                      {
                            "text": "Çiğneme ile dişler aşınır, kapanış kısalır ve eklem ağrısı yapar",
                            "status": "bad"
                      },
                      {
                            "text": "Gözenekli yapı bakterileri çeker, sararır ve koku yapar",
                            "status": "bad"
                      },
                      {
                            "text": "Sert gıdalarda tek tek dişlerin kopma riski yüksektir",
                            "status": "bad"
                      },
                      {
                            "text": "Sık bakım ve birkaç yılda bir komple değişim gerektirir",
                            "status": "warn"
                      }
                ]
          },
          {
                "title": "Metal Destekli Porselen (PFM)",
                "sub": "Döküm Kobalt-Krom Altyapı + Fırınlanmış Porselen",
                "material": "Katmanlı Feldspatik Porselen",
                "strength": "450 MPa",
                "chippingRisk": "Porselen Atma Riski",
                "lifespan": "8 – 12 Yıl",
                "verdictLabel": "KLİNİK KARAR",
                "verdictText": "Tam çenede eskiyen bir teknoloji. Metal iskelet sağlam olsa da 4 implant üzerindeki çiğneme baskısı porselende geri dönüşü olmayan kırılmalara yol açar ve alttaki gri metal ortaya çıkar.",
                "features": [
                      {
                            "text": "All-on-4 çiğneme yükünde porselen kırılması (chipping) sık görülür",
                            "status": "bad"
                      },
                      {
                            "text": "Diş eti çekilirse alttaki gri metal çizgi görünür",
                            "status": "bad"
                      },
                      {
                            "text": "Ağır yapısı ağızda kaba ve hantal bir his bırakır",
                            "status": "warn"
                      },
                      {
                            "text": "Ağız içinde kırılan porselenin tamiri mümkün değildir",
                            "status": "bad"
                      }
                ]
          }
    ],
    "materialsTableHeaders": {
      "criteria": "Karşılaştırma Kriteri",
      "zirconia": "Monolitik Zirkonyum (Standartımız)",
      "acrylic": "Hibrit Akrilik (Ucuz Seçenek)",
      "pfm": "Metal Destekli Porselen (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Kırılma / Çatlama Riski",
        "zirconia": "Sıfıra Yakın (Yekpare 1200+ MPa)",
        "acrylic": "Yüksek (Diş kopabilir)",
        "pfm": "Orta (Porselen atabilir)"
      },
      {
        "criteria": "Çiğneme Aşınması & Boy Kısalması",
        "zirconia": "Sıfır Aşınma (Sabit Kapanış)",
        "acrylic": "3–5 Yılda aşınır (Çene eklem ağrısı)",
        "pfm": "Aşınmaya çok dayanıklı"
      },
      {
        "criteria": "Leke & Koku Tutma",
        "zirconia": "100% Gözeneksiz (Sıfır Leke)",
        "acrylic": "Gözenekli (Kahve/koku emer)",
        "pfm": "Glaze cila (Leke tutmaz)"
      },
      {
        "criteria": "Diş Eti Biyouyumluluğu",
        "zirconia": "Antibakteriyel (Eti korur)",
        "acrylic": "Plak biriktirir (Enfeksiyon riski)",
        "pfm": "Metal alerjisi riski"
      },
      {
        "criteria": "Doğal Işık Geçirgenliği",
        "zirconia": "Çok Katmanlı Doğal Canlılık",
        "acrylic": "Yapay plastik matlığı",
        "pfm": "Alttan gri metal yansıması"
      },
      {
        "criteria": "Klinik Ömrü",
        "zirconia": "Ömür Boyu / 25+ Yıl (Kalıcı)",
        "acrylic": "3 – 7 Yıl (Değişim gerektirir)",
        "pfm": "8 – 12 Yıl (Kırılma riski)"
      }
    ],
    "packagesTitle": "Antalya All-on-4 İmplant Paketleri ve Fiyatları",
    "packagesSubtitle": "4 adet birinci sınıf titanyum implant, CAD/CAM zirkonyum köprü, 5 yıldızlı otel konaklaması ve özel VIP transferler dahil şeffaf tam çene fiyatlandırması.",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Bu Pakete Dahil Olan Hizmetler:",
    "pricePerArchLabel": "Tek Çene Paket Fiyatı",
    "getQuoteBtn": "Ücretsiz Kişiselleştirilmiş Teklif Al",
    "mostPopularBadge": "EN ÇOK TERCİH EDİLEN",
    "faqTitle": "All-on-4 İmplant Tedavisi Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Antalya’daki All-on-4 tedaviniz hakkında tüm cerrahi, biyomekanik ve lojistik detayları aydınlatan hekim onaylı cevaplar.",
    "faqGroup1Title": "All-on-4 Klinik & Cerrahi Sorular",
    "faqGroup2Title": "Sağlık Turizmi, Paket Kapsamı ve Ömür Boyu Garanti",
    "packages": [
      {
        "name": "ALL-ON-4 – NUCLEOSS",
        "brand": "NucleOSS (Grade 4 Pure Titanium)",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/nucleoss.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "Çene başına 4x NucleOSS Titanyum İmplant",
          "10-12x Sabit Geçici Diş (24 Saatte)",
          "10-12x Kalıcı Monolitik Zirkonyum Diş",
          "3D Tomografi (CBCT) ve Cerrahi Kılavuz",
          "Lokal Anestezi ve İlaç Paketi",
          "VIP Havalimanı-Otel-Klinik Transferleri",
          "Otel Konaklaması (Oda & Kahvaltı)",
          "Tüm Laboratuvar ve CAD/CAM Üretimi"
        ]
      },
      {
        "name": "ALL-ON-4 – DXL GERMAN",
        "brand": "DXL (German Engineering)",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "Çene başına 4x DXL Alman Titanyum İmplant",
          "10-12x Sabit Geçici Diş (24 Saatte)",
          "10-12x Kalıcı Monolitik Zirkonyum Diş",
          "3D Tomografi (CBCT) ve Cerrahi Kılavuz",
          "VIP Havalimanı ve Otel Transferleri",
          "Otel Konaklaması (Oda & Kahvaltı)",
          "Tam Laboratuvar ve CAD/CAM Frezeleme"
        ]
      },
      {
        "name": "ALL-ON-4 – STRAUMANN",
        "brand": "Straumann (Swiss Gold Standard)",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "Çene başına 4x Straumann İsviçre Titanyum İmplant",
          "10-12x Sabit Geçici Diş (24 Saatte)",
          "10-12x Kalıcı Monolitik Zirkonyum Diş",
          "Ömür Boyu Uluslararası Üretici Pasaportu",
          "Lüks 5 Yıldızlı Otel Konaklaması Dahil",
          "Özel Mercedes VIP Şoförlü Transferler",
          "Kişisel Hasta Danışmanı ve Tercüman"
        ]
      }
    ],
    "faqsPart1": [
          {
                "q": "Sadece 4 implant tam bir çene dolusu dişi nasıl güvenle taşır?",
                "a": "All-on-4 tekniğinin mühendislik sırrı, arka iki implantın 45 dereceye varan özel bir açıyla yerleştirilmesidir. Bu açılandırma, ön bölgedeki sert kemikten maksimum destek alarak 10-12 dişlik tam bir köprüyü taşıyabilecek rijit bir poligon temel oluşturur."
          },
          {
                "q": "All-on-4 diş implantı için kimler ideal adaydır?",
                "a": "Tam dişsizlik yaşayan, ağzındaki tüm dişleri sallanan/çürümüş olan, hareketli damak protezlerinden kurtulmak isteyen veya arka bölgelerinde ileri kemik erimesi olup kemik tozu ameliyatı yaptırmak istemeyen hastalar için idealdir."
          },
          {
                "q": "All-on-4 tedavisinde kemik tozu veya sinüs lifting gerekir mi?",
                "a": "Vakaların %90’ından fazlasında All-on-4 tedavisi kemik tozu ve sinüs lifting ihtiyacını tamamen ortadan kaldırır. Açılı yerleştirilen implantlar sinüs boşluklarını ve sinir kanalını güvenle teğet geçer."
          },
          {
                "q": "All-on-4 tedavisinde aynı gün geçici dişler nasıl takılır?",
                "a": "3D cerrahi kılavuzla implantlar kemiğe 35–50 Ncm primer torkla kilitlendiğinde multi-unit abutmentlar takılır. Ameliyattan sonraki ilk 24 saat içinde 4 implant üzerine vidalanan sabit geçici köprünüz takılır; kliniğimizden asla dişsiz ayrılmazsınız."
          },
          {
                "q": "3 aylık iyileşme (kaynaşma) döneminde nasıl beslenmeliyim?",
                "a": "İmplantların kemikle kaynaştığı ilk 3 ay boyunca yumuşak gıdalar (balık, makarna, haşlanmış sebze, yumurta, yumuşak tavuk) tüketilmelidir. Kalıcı zirkonyum takılana dek sert kabuklu kuruyemiş veya sert et ısırılmamalıdır."
          },
          {
                "q": "Kalıcı All-on-4 köprüsünde hangi malzeme kullanılır?",
                "a": "Kliniğimizde standart olarak 1.400 MPa dayanımlı, CAD/CAM frezelenmiş %100 Monolitik Çok Katmanlı Alman Zirkonyumu ve titanyum altyapı barı kullanılır. Asla kırılgan akrilik veya zayıf porselen kullanılmaz."
          },
          {
                "q": "All-on-4 protezi sabit midir, hasta tarafından çıkarılabilir mi?",
                "a": "All-on-4 protezi %100 sabittir ve vidalıdır; hasta tarafından kesinlikle çıkarılamaz. Yalnızca hekim tarafından rutin kontrollerde sökülebilir. Evde temizliği ağız duşu (Waterpik) ile çok pratiktir."
          },
          {
                "q": "All-on-4 ameliyatında 3D cerrahi rehber neden hayati önem taşır?",
                "a": "Arka implantların tam 30 ila 45 derecelik açıyla yerleştirilmesi mikron düzeyinde hassasiyet gerektirir. 3D cerrahi rehber, implantların milimetrenin onda biri hassasiyetle konumlanmasını ve sinirlerin %100 korunmasını sağlar."
          },
          {
                "q": "Ağızdaki hasarlı dişler All-on-4 ameliyatında çekilebilir mi?",
                "a": "Evet. Ağızda kalan çürük, sallanan veya hasarlı dişler aynı cerrahi seansta çekilir; hemen ardından 4 implant yerleştirilip 24 saatlik geçici diş ölçüleri alınır."
          },
          {
                "q": "All-on-4 implant tedavisinin uzun dönem başarı oranı nedir?",
                "a": "15 yılı aşkın bağımsız klinik çalışmalarda All-on-4 başarı oranı %98.2’nin üzerindedir. Doğru ağız bakımı ile İsviçre Straumann ve Alman implantlarımız ömür boyu hizmet verir."
          }
    ],
    "faqsPart2": [
          {
                "q": "All-on-4 tedavisi için Antalya’ya kaç kez gelmem gerekir?",
                "a": "Toplam 2 ziyaret gerekir: 1. Ziyaret (3–5 gün) 3D tomografi, cerrahi ve geçici sabit dişler; 2. Ziyaret (5–7 gün, 3 ay sonra) ise kalıcı monolitik zirkonyum köprünün provaları ve teslimatıdır."
          },
          {
                "q": "Master Smile Studio All-on-4 paketine neler dahildir?",
                "a": "Çene başına 4 adet titanyum implant, 24 saatte takılan sabit geçici dişler, kalıcı monolitik zirkonyum köprü, 3D tomografi, ilaçlar, oda-kahvaltı dahil 4/5 yıldızlı otel ve VIP Mercedes transferler dahildir."
          },
          {
                "q": "Antalya’ya geldiğimde paket fiyatı değişir mi?",
                "a": "Hayır. Röntgen analiziniz sonrasında tarafınıza iletilen resmi tedavi planı ve teklif sabit fiyat garantilidir; hiçbir gizli ek masraf çıkarılmaz."
          },
          {
                "q": "4 implant cerrahisi sırasında ağrı hisseder miyim? Sedasyon var mı?",
                "a": "Gelişmiş lokal anestezi altında işlem tamamen ağrısızdır. Diş hekimi korkusu veya kaygısı olan hastalarımız için anestezi uzmanımız eşliğinde bilinçli sedasyon konforu sunulmaktadır."
          },
          {
                "q": "Diyabet hastaları veya sigara içenler All-on-4 yaptırabilir mi?",
                "a": "Evet. HbA1c değeri kontrol altında olan diyabet hastalarında implant başarısı sağlıklı bireylerle aynıdır. Sigara içenlerin cerrahi öncesi ve sonrası 2 hafta ara vermesi tavsiye edilir."
          },
          {
                "q": "Uluslararası ömür boyu garanti pasaportu nasıl çalışır?",
                "a": "Tedavi bitiminde implantlarınızın seri numaralarını ve orijinal orijin sertifikalarını içeren resmi implant pasaportu verilir. Bu pasaport tüm dünyada geçerlidir."
          },
          {
                "q": "Kendi ülkeme döndüğümde takip süreci nasıl yürütülür?",
                "a": "Uluslararası hasta koordinasyon ekibimiz WhatsApp ve görüntülü aramalar ile düzenli takibinizi yapar. Rutin kontrolleriniz için yerel hekiminize sunabileceğiniz tüm cerrahi raporlar teslim edilir."
          }
    ],
    "compareTitle": "Objektif Tam Çene Karşılaştırması: All-on-4 vs. All-on-5 vs. All-on-6",
    "compareSubtitle": "4, 5 veya 6 implant arasındaki seçim; arka bölge kemik hacminize, çiğneme kuvvetinize ve çene genişliğinize bağlı olarak belirlenir.",
    "compareTableHeaders": {
      "criteria": "Klinik ve Biyomekanik Kriter",
      "all4": "All-on-4 Protokolü",
      "all5": "All-on-5 (All-on-X)",
      "all6": "All-on-6 Protokolü (Altın Standart)"
    },
    "compareTableRows": [
      {
        "criteria": "Çene Başına İmplant Sayısı",
        "all4": "4 Titanyum İmplant (2 düz ön, 2 adet 45° açılı arka)",
        "all5": "5 Titanyum İmplant (Asimetrik kemik erimelerinde)",
        "all6": "6 Titanyum İmplant (2 ön, 4 arka azı desteği)"
      },
      {
        "criteria": "Kalıcı Köprüdeki Diş Sayısı",
        "all4": "10 ila 12 Diş (1. Büyük azı dişine kadar)",
        "all5": "12 Diş",
        "all6": "14 Diş (2. Büyük azı dahil tam çiğneme arkı)"
      },
      {
        "criteria": "Çiğneme Kuvveti Dağılımı (Bite Force)",
        "all4": "Orta - Yüksek (200 – 350 N)",
        "all5": "Yüksek (350 – 450 N)",
        "all6": "Maksimum (450 – 600+ N, Güçlü Isırık)"
      },
      {
        "criteria": "Kemik Tozu / Sinüs Lifting İhtiyacı",
        "all4": "%90 Oranında Gerekmez (Açılı implantlar sinüsü bypass eder)",
        "all5": "Tek taraflı greft gerekebilir",
        "all6": "Arka bölgede kemik azsa küçük bir sinüs lifting gerekebilir"
      },
      {
        "criteria": "Arka Diş Uzantı (Cantilever) Gerilimi",
        "all4": "Orta düzeyde uzantı mevcuttur (10 – 15 mm)",
        "all5": "Azaltılmış uzantı gerilimi",
        "all6": "Sıfıra Yakın (Uzantı stresi yoktur, maksimum rijitlik)"
      },
      {
        "criteria": "Güvenlik Payı ve Yedeklilik (Redundancy)",
        "all4": "1 implant kaybedilirse tüm köprünün yenilenmesi gerekir",
        "all5": "Kalan 4 implant köprüyü geçici olarak taşıyabilir",
        "all6": "1 implant kaybedilse dahi kalan 5 implant köprüyü güvenle taşır"
      },
      {
        "criteria": "İdeal Hasta Profili",
        "all4": "İleri kemik erimesi olan, ek greft cerrahisi istemeyen hastalar",
        "all5": "Sağ ve sol çene kemiği asimetrik olan ara vakalar",
        "all6": "Yeterli kemiği olan (>10 mm), güçlü çiğneme kaslı, genç ve aktif hastalar"
      }
    ],
    "compareDecision": {
      "whenAll4Title": "All-on-4 Hangi Durumlarda Doğru Seçenektir?",
      "whenAll4Text": "All-on-4, üst veya alt çenenin arka bölgelerinde ileri düzeyde kemik erimesi bulunan ve sinüs lifting gibi ek cerrahilerden kaçınmak isteyen hastalar için en uygun biyomekanik çözümdür. 45 derecelik açılı arka implantlar ön bölgedeki yoğun kemikten maksimum destek alır.",
      "whenAll6Title": "All-on-6 Hangi Durumlarda Üstün Seçenektir?",
      "whenAll6Text": "All-on-6, arka azı kemik yüksekliği yeterli olan (>10 mm), gece diş sıkan (bruksizm), güçlü çiğneme kaslarına sahip veya arka azı dişlerini de içeren 14 dişlik eksiksiz bir ark talep eden hastalar için tavsiye edilir."
    },
    "processTitle": "3 Aşamalı Dijital Cerrahi ve CAD/CAM Mühendislik Süreci",
    "processSubtitle": "Master Smile Studio’daki her All-on-4 tedavisi, milimetrik bilgisayarlı cerrahi rehber ve robotik frezeleme protokolüyle yürütülür.",
    "processCards": [
      {
        "step": "AŞAMA 01",
        "title": "3D Tomografi ve Sanal Cerrahi Kılavuzu",
        "text": "Yüksek çözünürlüklü 3D tomografi çene kemiği sertliğini Hounsfield biriminde analiz eder, sinir ve sinüs sınırlarını belirler. Özel üretilen cerrahi rehber ile 6 implant milimetrenin onda biri hassasiyetle yerleştirilir.",
        "specs": [
          {
            "key": "Cerrahi Hassasiyet",
            "val": "< 0.1 mm"
          },
          {
            "key": "Kesi Türü",
            "val": "Minimal İnvaziv / Kılavuzlu"
          },
          {
            "key": "Kemik Analizi",
            "val": "3D Hounsfield Skalası"
          }
        ]
      },
      {
        "step": "AŞAMA 02",
        "title": "24 Saatte Vidalı Sabit Geçici Dişler",
        "text": "İmplantlar kemiğe 35–50 Ncm torkla kilitlendiğinde multi-unit abutmentlar takılır. İlk 24 saat içinde 6 implant üzerine vidalanan sabit geçici köprü teslim edilir; klinikten asla dişsiz ayrılmazsınız.",
        "specs": [
          {
            "key": "Primer Tork",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Teslim Süresi",
            "val": "24 Saat İçinde"
          },
          {
            "key": "Çiğneme Fonksiyonu",
            "val": "Yumuşak Diyetle Anında"
          }
        ]
      },
      {
        "step": "AŞAMA 03",
        "title": "5 Eksenli Robotik CAD/CAM Monolitik Zirkonyum",
        "text": "3 aylık kemikleşmenin ardından 3D optik tarama ile ölçü alınır. 1200+ MPa dirençli monolitik Alman zirkonyum bloğu 5 eksenli CNC cihazında frezelenip 1500°C’de fırınlanarak ömür boyu kırılmaz köprü üretilir.",
        "specs": [
          {
            "key": "Kırılma Dayanımı",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Materyal Standardı",
            "val": "Yekpare Alman Zirkonyumu"
          },
          {
            "key": "Fırınlama Sıcaklığı",
            "val": "1500°C Yüksek Yoğunluk"
          }
        ]
      }
    ],
    "costTitle": "Uluslararası Fiyat Karşılaştırması: İngiltere / Almanya vs. Antalya (All-on-4)",
    "costSubtitle": "Binlerce Avrupalı ve İngiliz hastanın malzeme kalitesinden ödün vermeden tam çene All-on-4 tedavisi için neden Master Smile Studio’yu tercih ettiğini keşfedin.",
    "costTableHeaders": {
      "country": "Lokasyon ve Klinik Seviyesi",
      "costPerArch": "Standard Private Healthcare Rates",
      "inclusions": "Fiyata Dahil Olan Hizmetler",
      "valueAdvantage": "Master Smile Studio Fiyat Avantajı"
    },
    "costTableRows": [
      {
        "country": "İngiltere (Harley Street / Özel Londra Klinikler)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Yalnızca cerrahi ve standart köprü. 3D Tomografi, geçici protez, sedasyon ve kontroller ayrı faturalandırılır.",
        "valueAdvantage": "%65 – %70 Tasarruf (Bizde VIP Inclusions) Orijinal İsviçre/Alman İmplant Garantisi."
      },
      {
        "country": "Almanya / İsviçre (Özel Diş Klinikleri)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Cerrahi ücretler ve laboratuvar. Otel konaklaması, VIP transferler ve ilaçlar dahil değildir.",
        "valueAdvantage": "%60 – %65 Tasarruf (Bizde VIP Inclusions) Birebir aynı Alman/İsviçre Titanyum Kalitesi."
      },
      {
        "country": "Master Smile Studio (Antalya, Türkiye) ⭐",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "%100 Her Şey Dahil: 4 İmplant, Geçici Sabit Köprü, Kalıcı Zirkonyum Köprü, 3D Tomografi, 5 Yıldızlı Otel, VIP Transferler, Ömür Boyu Garanti Pasaportu.",
        "valueAdvantage": "Sıfır Gizli Maliyet Garantisiyle %100 Şeffaf Sabit Paket Fiyatı."
      }
    ]
  },
  "de": {
    "introBadge": "FESTE ZÄHNE AN EINEM TAG",
    "introTitle": "All-on-4 Zahnimplantate in Antalya, Türkei",
    "introLead": "Feste Vollkiefer-Restauration auf 4 strategischen Titanimplantaten — sofortige feste Zähne innerhalb von 24 Stunden ohne Knochenaufbau.",
    "introP1": "Bei Master Smile Studio ist das All-on-4 Verfahren eine lebensverändernde Lösung für Patienten mit erheblichem Knochenschwund oder vollständiger Zahnlosigkeit. Durch die gezielte 45-Grad-Abwinklung der beiden hinteren Implantate und zwei gerade gesetzte Implantate im vorderen Kieferbereich umgeht dieses Protokoll die Kieferhöhle und den Nervenkanal, sodass aufwendige Sinuslifts meist entfallen.",
    "introP2": "Das All-on-4 Konzept nutzt die vorhandene Knochensubstanz optimal aus und bietet eine hervorragende Primärstabilität (35–50 Ncm) für die sofortige Belastung. Bereits innerhalb von 24 Stunden nach dem Eingriff erhalten Sie Ihre fest verschraubte provisorische Brücke — für ein sofortiges Lächeln und beschwerdefreies Kauen ab dem ersten Tag.",
    "introP3Lead": "Je nach individuellem Knochenvolumen und Ihren Wünschen können Sie auch unsere ",
    "introP3LinkAll4": "All-on-6 Zahnimplantate",
    "introP3Mid": ", spezialisierte ",
    "introP3LinkZygoma": "Zygoma-Implantate bei starkem Knochenschwund",
    "introP3And": " und ",
    "introP3LinkSinus": "Sinuslift-Operationen",
    "introP3Tail": " entdecken.",
    "materialsTitle": "All-on-4 Brückenmaterialien: Warum wir monolithisches Zirkon verwenden",
    "materialsSubtitle": "Bei All-on-4 tragen 4 Implantate die gesamte Kaukraft Ihres Kiefers (200 bis 600 Newton). Erfahren Sie, warum wir ausschließlich 100 % monolithisches Zirkon anstelle von billigem Acryl oder bruchanfälligem Porzellan verwenden.",
    "materialsComparisonBadge": "Zahnlabor-Vergleich",
    "materialsComparisonAlt": "All-on-4 Zahnimplantat Brückenmaterialien Vergleich: Monolithisches Zirkon vs. Hybrid-Acryl vs. NEM-Keramik",
    "materialsComparisonText": "Direkter zahntechnischer Laborvergleich der 3 All-on-4 Brückenmaterialien (PFM, Hybrid-Acryl und monolithisches deutsches Zirkon) hinsichtlich Ästhetik, Lichtdurchlässigkeit und Stabilität.",
    "materialsSpecLabels": {
      "material": "Materialtyp",
      "strength": "Biegefestigkeit",
      "chipping": "Chipping-Risiko",
      "lifespan": "Lebensdauer"
    },
    "materialsCards": [
          {
                "title": "Monolithisches Mehrschicht-Zirkon",
                "sub": "100% solides deutsches Zirkon + gefräster Titansteg",
                "badge": "MASTER SMILE GOLDSTANDARD",
                "isGold": true,
                "material": "1400 MPa CAD/CAM Zirkon",
                "strength": "1.400 MPa",
                "chippingRisk": "Null Chipping-Risiko",
                "lifespan": "Lebenslang (25+ Jahre)",
                "verdictLabel": "KLINISCHES FAZIT",
                "verdictText": "Die erste Wahl von Master Smile Studio für über 95% aller Vollkiefer-Versorgungen. Höchste Biokompatibilität, natürliche Ästhetik und lebenslange Bruchsicherheit unter Kaukräften.",
                "features": [
                      {
                            "text": "Kein Chipping oder Bruch bei starken Kaukräften",
                            "status": "good"
                      },
                      {
                            "text": "Ultra-glatte Oberfläche verhindert Plaque & Periimplantitis",
                            "status": "good"
                      },
                      {
                            "text": "Porenfrei: 100% verfärbungsresistent & geruchsneutral",
                            "status": "good"
                      },
                      {
                            "text": "Mehrschichtiger Farbverlauf für natürliche Zahnästhetik",
                            "status": "good"
                      }
                ]
          },
          {
                "title": "Hybrid-Titan-Acryl-Brücke",
                "sub": "Metallgerüst + Prothesenkunststoff & Kunststoffzähne",
                "material": "PMMA-Acryl + Metallgerüst",
                "strength": "100 MPa",
                "chippingRisk": "Hoher Abrieb & Zahnverlust",
                "lifespan": "3 – 5 Jahre (Temporär)",
                "verdictLabel": "KLINISCHES FAZIT",
                "verdictText": "Nur als budgetorientierte Übergangsbrücke akzeptabel. Aufgrund von Harzabrieb, Bakterienanhaftung und Ausbruchsrisiko der Zähne nicht als 20+ Jahre Dauerlösung empfohlen.",
                "features": [
                      {
                            "text": "Abrasiver Verschleiß flacht Zähne ab und verändert die Bisshöhe",
                            "status": "bad"
                      },
                      {
                            "text": "Poröser Kunststoff nimmt Bakterien und Fette auf, führt zu Geruch",
                            "status": "bad"
                      },
                      {
                            "text": "Einzelne Kunststoffzähne können beim Kauen abbrechen",
                            "status": "bad"
                      },
                      {
                            "text": "Häufige Wartung und kompletter Austausch nach wenigen Jahren",
                            "status": "warn"
                      }
                ]
          },
          {
                "title": "Metallkeramik (PFM)",
                "sub": "Gegossenes Kobalt-Chrom-Gerüst + gebrannte Keramik",
                "material": "Geschichtete Feldspat-Keramik",
                "strength": "450 MPa",
                "chippingRisk": "Keramikabplatzung",
                "lifespan": "8 – 12 Jahre",
                "verdictLabel": "KLINISCHES FAZIT",
                "verdictText": "Veraltete Technologie für Vollkiefer. Obwohl das Metallgerüst stabil ist, führen Biegekräfte auf 4 Implantaten häufig zu irreversiblen Porzellanabplatzungen mit sichtbarem Graurand.",
                "features": [
                      {
                            "text": "Keramik splittert unter hoher All-on-4 Kaubelastung leicht ab",
                            "status": "bad"
                      },
                      {
                            "text": "Dunkler Metallrand wird bei Zahnfleischrückgang sichtbar",
                            "status": "bad"
                      },
                      {
                            "text": "Hohes Eigengewicht erzeugt ein Fremdkörpergefühl im Mund",
                            "status": "warn"
                      },
                      {
                            "text": "Intraorale Reparatur abgeplatzter Keramik ist unmöglich",
                            "status": "bad"
                      }
                ]
          }
    ],
    "materialsTableHeaders": {
      "criteria": "Vergleichskriterium",
      "zirconia": "Monolithisches Zirkon (Unser Standard)",
      "acrylic": "Hybrid-Acryl (Budget-Kliniken)",
      "pfm": "Metallkeramik (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Bruch- & Chipping-Risiko",
        "zirconia": "Nahezu Null (Solide 1200+ MPa)",
        "acrylic": "Hoch (Zähne können ausbrechen)",
        "pfm": "Mittel (Keramikabplatzungen)"
      },
      {
        "criteria": "Kauabrieb & Bissabsenkung",
        "zirconia": "Kein Abrieb (Stabiler Biss)",
        "acrylic": "Nutzt sich in 3–5 J. ab (Kiefergelenkschmerz)",
        "pfm": "Sehr abriebfest"
      },
      {
        "criteria": "Verfärbung & Geruchsaufnahme",
        "zirconia": "100% Porenfrei (Keine Flecken)",
        "acrylic": "Porös (Nimmt Kaffee & Gerüche an)",
        "pfm": "Glasiert (Fleckenresistent)"
      },
      {
        "criteria": "Zahnfleisch-Biokompatibilität",
        "zirconia": "Antibakteriell (Schützt Gewebe)",
        "acrylic": "Plaquefalle (Infektionsrisiko)",
        "pfm": "Mögliche Metallsensibilität"
      },
      {
        "criteria": "Natürliche Lichtdurchlässigkeit",
        "zirconia": "Natürliche Mehrschicht-Vitalität",
        "acrylic": "Flache Kunststoff-Opazität",
        "pfm": "Dunkle Metallreflexion"
      },
      {
        "criteria": "Klinische Lebensdauer",
        "zirconia": "Lebenslang / 25+ Jahre",
        "acrylic": "3 – 7 Jahre",
        "pfm": "8 – 12 Jahre"
      }
    ],
    "packagesTitle": "All-on-4 Implantat-Pakete & Preise in Antalya",
    "packagesSubtitle": "Transparente All-inclusive-Preise pro Kiefer mit 4 Premium-Titanimplantaten, CAD/CAM-Zirkonbrücke, 5-Sterne-Hotel und privaten VIP-Transfers.",
    "durationLabel": "Behandlungsdauer:",
    "includedLabel": "In diesem Paket enthalten:",
    "pricePerArchLabel": "Preis pro Kiefer",
    "getQuoteBtn": "Kostenloses Angebot anfordern",
    "mostPopularBadge": "BELIEBTESTES PAKET",
    "faqTitle": "Häufig gestellte Fragen zu All-on-4 Implantaten",
    "faqSubtitle": "Ärztlich validierte Antworten zu allen chirurgischen, biomechanischen und organisatorischen Fragen Ihrer All-on-4 Behandlung in Antalya.",
    "faqGroup1Title": "All-on-4 Klinische & Chirurgische Fragen",
    "faqGroup2Title": "Gesundheitstourismus, Paketleistungen & Lebenslange Garantie",
    "packages": [
      {
        "name": "ALL-ON-4 – NUCLEOSS",
        "brand": "NucleOSS (Grade 4 Pure Titanium)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x NucleOSS Dental Implants per Arch",
          "10-12x Fixed Temporary Teeth (Same Visit)",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "Local Anesthesia & Post-op Medication Pack",
          "Airport-Hotel VIP Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory Work Included"
        ]
      },
      {
        "name": "ALL-ON-4 – DXL GERMAN",
        "brand": "DXL (German Engineering)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x DXL German Titanium Implants",
          "10-12x Fixed Temporary Teeth",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "VIP Airport & Hotel Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory & CAD/CAM Milling"
        ]
      },
      {
        "name": "ALL-ON-4 – STRAUMANN",
        "brand": "Straumann (Swiss Gold Standard)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x Straumann Swiss Titanium Implants",
          "10-12x Fixed High-Grade Temporary Teeth",
          "10-12x Final Monolithic Zirconia Teeth",
          "Lifetime International Manufacturer Passport",
          "Luxury 5-Star Hotel Stay Included",
          "VIP Mercedes Chauffeur Transfers",
          "Dedicated Personal Patient Host"
        ]
      }
    ],
    "faqsPart1": [
          {
                "q": "Wie können nur 4 Implantate einen gesamten Zahnkiefer tragen?",
                "a": "Das biomechanische Prinzip von All-on-4 beruht auf der gezielten Abwinklung der beiden hinteren Implantate um bis zu 45 Grad. Dadurch wird das dichte Knochenvolumen im vorderen Kiefer optimal genutzt und ein breites, stabiles Fundament für 10 bis 12 feste Zähne geschaffen."
          },
          {
                "q": "Wer ist der ideale Kandidat für All-on-4 Zahnimplantate?",
                "a": "All-on-4 eignet sich ideal für zahnlose Patienten, Personen mit stark geschädigten Restzähnen oder fortgeschrittenem Knochenschwund im Seitenzahnbereich, die aufwendige Knochenaufbauten vermeiden möchten."
          },
          {
                "q": "Erfordert All-on-4 einen Knochenaufbau oder Sinuslift?",
                "a": "In über 90% der Fälle entfällt bei All-on-4 jeglicher Knochenaufbau oder Sinuslift. Durch die Schrägstellung der hinteren Implantate werden die Kieferhöhle und Nervenbahnen sicher umgangen."
          },
          {
                "q": "Wie funktioniert die feste Sofortversorgung innerhalb von 24 Stunden?",
                "a": "Erreichen die Implantate eine Primärstabilität von 35–50 Ncm, werden Multi-Unit-Abutments verschraubt. Innerhalb von 24 Stunden erhalten Sie Ihre festsitzende provisorische Brücke — Sie verlassen unsere Klinik nie ohne Zähne."
          },
          {
                "q": "Wie ernähre ich mich während der 3-monatigen Einheilphase?",
                "a": "Während die Implantate fest mit dem Kieferknochen verwachsen, empfiehlt sich weiche Kost (Fisch, Pasta, Eier, weiches Gemüse, zartes Hähnchen). Harte Nüsse oder zähe Krusten sollten bis zur endgültigen Zirkonbrücke vermieden werden."
          },
          {
                "q": "Welches Material wird für die permanente All-on-4 Brücke verwendet?",
                "a": "Bei Master Smile Studio verwenden wir standardmäßig 100% monolithisches Mehrschicht-Zirkon (1.400 MPa Biegefestigkeit) auf gefrästem Titansteg. Kein poröses Acryl oder bruchanfälliges Schichtporzellan."
          },
          {
                "q": "Ist die All-on-4 Brücke fest oder herausnehmbar?",
                "a": "Die All-on-4 Brücke ist zu 100% fest verschraubt und kann vom Patienten nicht selbst herausgenommen werden. Die Reinigung erfolgt bequem zu Hause mit Munddusche (Waterpik) und Super-Floss."
          },
          {
                "q": "Warum ist die 3D-navigierte Chirurgie bei All-on-4 unverzichtbar?",
                "a": "Die präzise Abwinklung der Implantate um 30 bis 45 Grad erfordert höchste Exaktheit. Individuelle 3D-Bohrschablonen sichern eine Platzierung im Submillimeterbereich (<0,1 mm) und schützen Nervenstränge."
          },
          {
                "q": "Können beschädigte Zähne während der OP entfernt werden?",
                "a": "Ja. Alle nicht erhaltungswürdigen Zähne werden in derselben OP-Sitzung schonend extrahiert, unmittelbar gefolgt von der Implantation und der Abformung für Ihre 24h-Sofortzähne."
          },
          {
                "q": "Wie hoch ist die langfristige Erfolgsrate von All-on-4?",
                "a": "Langzeitstudien über 15 Jahre belegen eine Erfolgsquote von über 98,2%. Bei guter Mundhygiene sind Schweizer Straumann- und deutsche Markenimplantate für eine lebenslange Haltbarkeit ausgelegt."
          }
    ],
    "faqsPart2": [
          {
                "q": "Wie viele Reisen nach Antalya sind für All-on-4 erforderlich?",
                "a": "Genau 2 Besuche: 1. Besuch (3–5 Tage) für 3D-DVT, Implantation und feste provisorische Zähne; 2. Besuch (5–7 Tage, nach 3 Monaten) für digitale Einpassung und Fertigstellung Ihrer definitiven 1.400 MPa Zirkonbrücke."
          },
          {
                "q": "Was ist im All-on-4 Paket von Master Smile Studio enthalten?",
                "a": "Alles ist abgedeckt: 4 Premium-Implantate pro Kiefer, Multi-Unit-Abutments, feste Sofortzähne, finale Zirkonbrücke, 3D-DVT-Röntgen, Medikamente, 4/5-Sterne-Hotel mit Frühstück und privater VIP-Chauffeur-Transfer."
          },
          {
                "q": "Ändert sich der Paketpreis nach meiner Ankunft in Antalya?",
                "a": "Nein. Nach der digitalen Vorab-Diagnose erhalten Sie ein verbindliches, schriftliches Festpreisangebot ohne versteckte Zusatzkosten."
          },
          {
                "q": "Habe ich Schmerzen während der 4-Implantat-OP? Gibt es Sedierung?",
                "a": "Der Eingriff ist dank moderner Lokalanästhesie völlig schmerzfrei. Für Angstpatienten bieten wir eine Dämmerschlafsedierung (IV-Sedierung) durch unseren hauseigenen Anästhesisten an."
          },
          {
                "q": "Können Diabetiker oder Raucher All-on-4 erhalten?",
                "a": "Ja. Gut eingestellte Diabetiker (HbA1c < 7,5%) weisen vergleichbare Einheilungsraten auf. Raucher sollten den Konsum 2 Wochen vor und nach dem Eingriff reduzieren, um die Wundheilung zu fördern."
          },
          {
                "q": "Wie funktioniert der internationale Garantie-Pass?",
                "a": "Sie erhalten einen offiziellen Hersteller-Garantiepass mit den Seriennummern Ihrer Implantate. Dieser gewährt weltweiten lebenslangen Ersatzschutz bei zertifizierten Spezialisten."
          },
          {
                "q": "Wie wird die Nachsorge in meinem Heimatland geregelt?",
                "a": "Unser internationales Betreuungsteam begleitet Sie per WhatsApp und Video-Calls. Sie erhalten detaillierte Operationsberichte und Röntgenbilder für Ihren Zahnarzt zu Hause."
          }
    ],
    "compareTitle": "Objektiver Vollbogen-Vergleich: All-on-4 vs. All-on-5 vs. All-on-6",
    "compareSubtitle": "Die Wahl zwischen 4, 5 oder 6 Implantaten richtet sich nach Knochenvolumen, Kaukraft und anatomischer Kieferbreite.",
    "compareTableHeaders": {
      "criteria": "Klinisches & biomechanisches Kriterium",
      "all4": "All-on-4 Protokoll",
      "all5": "All-on-5 (All-on-X)",
      "all6": "All-on-6 Protokoll (Goldstandard)"
    },
    "compareTableRows": [
      {
        "criteria": "Anzahl Implantate pro Kiefer",
        "all4": "4 Titanimplantate (2 gerade, 2 um 45° abgewinkelt)",
        "all5": "5 Titanimplantate (bei asymmetrischem Knochenabbau)",
        "all6": "6 Titanimplantate (2 vorne, 4 im Seitenzahnbereich)"
      },
      {
        "criteria": "Anzahl der Zähne auf der Brücke",
        "all4": "10 bis 12 Zähne (bis zum 1. Molaren)",
        "all5": "12 Zähne",
        "all6": "14 Zähne (Vollständiger Bogen inkl. 2. Molaren)"
      },
      {
        "criteria": "Kaukraft-Verteilung (Bite Force)",
        "all4": "Mittel bis hoch (200 – 350 N)",
        "all5": "Hoch (350 – 450 N)",
        "all6": "Maximal (450 – 600+ N, starke Beißer)"
      },
      {
        "criteria": "Knochenaufbau / Sinuslift erforderlich",
        "all4": "In 90% der Fälle vermeidbar durch 45°-Winkelung",
        "all5": "Möglicherweise einseitig erforderlich",
        "all6": "Eventuell kleiner Sinuslift bei Knochenschwund im Seitenzahnbereich"
      },
      {
        "criteria": "Freiend-Hebelwirkung (Cantilever)",
        "all4": "Mäßiger Hebelarm (10 – 15 mm)",
        "all5": "Reduzierter Hebelarm",
        "all6": "Nahezu Null (Höchste mechanische Stabilität)"
      },
      {
        "criteria": "Sicherheitsfaktor bei Implantatverlust",
        "all4": "Verlust von 1 Implantat erfordert Neuanfertigung der Brücke",
        "all5": "Verbleibende 4 Implantate können Brücke vorübergehend tragen",
        "all6": "Bei Verlust von 1 Implantat tragen 5 Pfeiler die Brücke sicher weiter"
      },
      {
        "criteria": "Primäre Patienteneignung",
        "all4": "Fortgeschrittener Knochenabbau, Vermeidung von Knochenaufbau",
        "all5": "Asymmetrischer Knochenverlust zwischen linker und rechter Seite",
        "all6": "Gutes Knochenangebot (>10 mm), hohe Kaukraft, aktive Patienten"
      }
    ],
    "compareDecision": {
      "whenAll4Title": "Wann ist All-on-4 die richtige Wahl?",
      "whenAll4Text": "All-on-4 ist ideal bei starkem Knochenschwund im Seitenzahnbereich, wenn ein Sinuslift vermieden werden soll. Die 45-Grad-Winkelung nutzt den dichten Frontknochen optimal aus.",
      "whenAll6Title": "Wann ist All-on-6 die überlegene Wahl?",
      "whenAll6Text": "All-on-6 empfiehlt sich bei ausreichendem Knochen im Seitenzahnbereich (>10 mm), bei Zähneknirschen (Bruxismus) oder bei jüngeren, aktiven Patienten, die einen vollständigen 14-Zähne-Bogen wünschen."
    },
    "processTitle": "3-Phasen-Präzisionsprotokoll: Von der 3D-Planung bis zum Zirkon-Unikat",
    "processSubtitle": "Jede All-on-4 Behandlung bei Master Smile Studio folgt einem strengen navigierten 3D-Chirurgie- und robotischen CAD/CAM-Protokoll.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D-DVT Virtuelle OP & Navigierte Bohrschablone",
        "text": "Hochauflösende 3D-DVT-Röntgenbilder erfassen die Knochendichte in Hounsfield-Einheiten und Nervenbahnen. Eine individuelle 3D-Bohrschablone führt alle 6 Implantate mit Submillimeter-Präzision.",
        "specs": [
          {
            "key": "Präzision",
            "val": "< 0.1 mm"
          },
          {
            "key": "Schnittführung",
            "val": "Minimalinvasiv geführt"
          },
          {
            "key": "Knochenanalyse",
            "val": "3D-Hounsfield-Skala"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Feste provisorische Zähne innerhalb von 24 Stunden",
        "text": "Bei einem Primärtork von 35–50 Ncm werden Multi-Unit-Abutments verschraubt. Innerhalb von 24 Stunden wird eine festsitzende provisorische Brücke eingesetzt – Sie sind vom ersten Tag an voll versorgt.",
        "specs": [
          {
            "key": "Eindrehmoment",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Fertigstellung",
            "val": "Innerhalb von 24h"
          },
          {
            "key": "Funktion",
            "val": "Sofortige weiche Kost"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "5-Achs-CAD/CAM Monolithisches Zirkon",
        "text": "Nach 3 Monaten Einheilphase erfasst ein 3D-Intraoralscan die exakte Implantatposition. Eine monolithische Mehrschicht-Zirkonbrücke (1200+ MPa) wird robotergefräst und bei 1500°C gesintert.",
        "specs": [
          {
            "key": "Biegefestigkeit",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Materialqualität",
            "val": "100% deutsches Zirkon"
          },
          {
            "key": "Sintertemperatur",
            "val": "1500°C Hochdichte"
          }
        ]
      }
    ],
    "costTitle": "Internationaler Preisvergleich: UK / Deutschland vs. Antalya (All-on-4)",
    "costSubtitle": "Erfahren Sie, warum tausende europäische Patienten das Master Smile Studio für ihre All-on-4-Behandlung ohne Qualitätskompromisse wählen.",
    "costTableHeaders": {
      "country": "Standort & Klinikebene",
      "costPerArch": "Standard Private Healthcare Rates",
      "inclusions": "Inbegriffene Leistungen",
      "valueAdvantage": "Master Smile Studio Vorteil"
    },
    "costTableRows": [
      {
        "country": "Großbritannien (Harley Street / Private Kliniken)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Nur Operation und Standardbrücke. 3D-DVT, Provisorium, Sedierung und Nachsorge werden extra berechnet.",
        "valueAdvantage": "65 % – 70 % Ersparnis (VIP Inclusions.350 – VIP Inclusions.800 bei uns) auf Schweizer/Deutsche Originalsysteme."
      },
      {
        "country": "Deutschland / Schweiz (Private Zahnkliniken)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Chirurgische Gebühren und Labor. Hotelunterkunft, VIP-Transfers und Medikamente nicht enthalten.",
        "valueAdvantage": "60 % – 65 % Ersparnis (VIP Inclusions.900 – VIP Inclusions.900 bei uns) bei identischem deutschem/schweizerischem Titan."
      },
      {
        "country": "Master Smile Studio (Antalya, Türkei) ⭐",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "100 % All-Inclusive: 4 Implantate, feste provisorische Brücke, endgültige Zirkonbrücke, 3D-DVT, 5-Sterne-Hotel, VIP-Transfers, lebenslanger Garantiepass.",
        "valueAdvantage": "100 % transparente Festpreis-Garantie ohne versteckte medizinische Kosten."
      }
    ]
  },
  "pl": {
    "introBadge": "PEŁNY ŁUK – STAŁE ZĘBY W 24 GODZINY",
    "introTitle": "Implanty All-on-4 w Antalyi, Turcja",
    "introLead": "Stała odbudowa pełnego łuku zębowego na 4 strategicznych implantach — nowe zęby w 24 godziny bez konieczności przeszczepu kości.",
    "introP1": "W Master Smile Studio metoda All-on-4 to przełomowe rozwiązanie dla pacjentów z bezzębiem lub znacznym zanikiem kości szczęki. Dzięki nachyleniu dwóch bocznych implantów pod kątem do 45 stopni oraz dwóm prostym implantom w przednim odcinku, protokół ten omija zatoki szczękowe i nerwy, eliminując potrzebę skomplikowanych przeszczepów kości.",
    "introP2": "Koncepcja All-on-4 maksymalnie wykorzystuje naturalne podłoże kostne, zapewniając wysoką stabilizację pierwotną (35–50 Ncm) i równomierne przenoszenie sił żucia. Pacjenci opuszczają naszą klinikę w ciągu 24 godzin z przykręcanym, estetycznym mostem tymczasowym, ciesząc się pełną funkcją żucia i pięknym uśmiechem od pierwszego dnia.",
    "introP3Lead": "W zależności od indywidualnego poziomu kości i celów klinicznych, możesz sprawdzić również ",
    "introP3LinkAll4": "Implanty All-on-6",
    "introP3Mid": ", specjalistyczne ",
    "introP3LinkZygoma": "Implanty Zygomatyczne przy skrajnym zaniku kości",
    "introP3And": " oraz ",
    "introP3LinkSinus": "Zabieg Podniesienia Dna Zatoki (Sinus Lift)",
    "introP3Tail": ".",
    "materialsTitle": "Materiały Mostów All-on-4: Dlaczego Stosujemy Monolityczny Cyrkon",
    "materialsSubtitle": "W All-on-4 tylko 4 implanty przenoszą całą siłę żucia szczęki (od 200 do 600 N). Zobacz, dlaczego wykonujemy wyłącznie lity cyrkon wielowarstwowy zamiast taniego akrylu czy kruchej porcelany.",
    "materialsComparisonBadge": "Porównanie Laboratoryjne",
    "materialsComparisonAlt": "Porównanie materiałów mostów All-on-4 na implantach: Cyrkon monolityczny vs Most hybrydowy vs PFM",
    "materialsComparisonText": "Bezpośrednie porównanie w laboratorium protetycznym 3 materiałów mostów All-on-4 (PFM, most hybrydowy akrylowy oraz monolityczny cyrkon niemiecki) pod kątem estetyki, przezierności i wytrzymałości.",
    "materialsSpecLabels": {
      "material": "Typ Materiału",
      "strength": "Wytrzymałość na Zginanie",
      "chipping": "Ryzyko Ukruszenia",
      "lifespan": "Żywotność"
    },
    "materialsCards": [
          {
                "title": "Monolityczny Wielowarstwowy Cyrkon",
                "sub": "100% lity niemiecki cyrkon + frezowana belka tytanowa",
                "badge": "ZŁOTY STANDARD MASTER SMILE",
                "isGold": true,
                "material": "1400 MPa CAD/CAM Cyrkon",
                "strength": "1400 MPa",
                "chippingRisk": "Zero Odprysków",
                "lifespan": "Dożywotnio (25+ Lat)",
                "verdictLabel": "WERDYKT KLINICZNY",
                "verdictText": "Podstawowy wybór Master Smile Studio w ponad 95% przypadków pełnego łuku. Najwyższa biokompatybilność, doskonała estetyka i dożywotnia odporność na złamania.",
                "features": [
                      {
                            "text": "Zero ukruszeń i pęknięć przy dużym nacisku żucia",
                            "status": "good"
                      },
                      {
                            "text": "Ultra-gładka powierzchnia zapobiega peri-implantitis",
                            "status": "good"
                      },
                      {
                            "text": "Nieporowata struktura: zero przebarwień i zapachów",
                            "status": "good"
                      },
                      {
                            "text": "Wielowarstwowy gradient zapewnia naturalną przezierność",
                            "status": "good"
                      }
                ]
          },
          {
                "title": "Most Hybrydowy Tytanowo-Akrylowy",
                "sub": "Metalowa podbudowa + akryl i zęby kompozytowe",
                "material": "Akryl PMMA + Metalowa Belka",
                "strength": "100 MPa",
                "chippingRisk": "Wysokie Ścieranie i Odpadanie",
                "lifespan": "3 – 5 Lat (Tymczasowy)",
                "verdictLabel": "WERDYKT KLINICZNY",
                "verdictText": "Akceptowalny jedynie jako budżetowy most tymczasowy. Nie zalecany jako rozwiązanie na ponad 20 lat z powodu ścierania żywicy, chłonności bakterii i ryzyka wyłamywania zębów.",
                "features": [
                      {
                            "text": "Ścieranie zębów obniża wysokość zwarcia i obciąża stawy skroniowe",
                            "status": "bad"
                      },
                      {
                            "text": "Porowata żywica chłonie bakterie, tłuszcze i powoduje nieprzyjemny zapach",
                            "status": "bad"
                      },
                      {
                            "text": "Pojedyncze zęby mogą odłamywać się przy twardszych pokarmach",
                            "status": "bad"
                      },
                      {
                            "text": "Wymaga częstych napraw i wymiany po kilku latach",
                            "status": "warn"
                      }
                ]
          },
          {
                "title": "Most Metalowo-Ceramiczny (PFM)",
                "sub": "Odlewany szkielet Co-Cr + napalana porcelana",
                "material": "Warstwowa Porcelana Skaleniowa",
                "strength": "450 MPa",
                "chippingRisk": "Odpryski Porcelany",
                "lifespan": "8 – 12 Lat",
                "verdictLabel": "WERDYKT KLINICZNY",
                "verdictText": "Przestarzała technologia w pełnych łukach. Choć metalowa podbudowa jest wytrzymała, siły żucia na 4 implantach często prowadzą do odprysków porcelany i odsłonięcia szarego metalu.",
                "features": [
                      {
                            "text": "Porcelana odpryskuje pod dużym obciążeniem żucia All-on-4",
                            "status": "bad"
                      },
                      {
                            "text": "Ciemny brzeg metalowy staje się widoczny przy recesji dziąseł",
                            "status": "bad"
                      },
                      {
                            "text": "Duża waga daje uczucie ciężkości w jamie ustnej",
                            "status": "warn"
                      },
                      {
                            "text": "Naprawa odpryśniętej porcelany w ustach jest niemożliwa",
                            "status": "bad"
                      }
                ]
          }
    ],
    "materialsTableHeaders": {
      "criteria": "Kryterium Porównania",
      "zirconia": "Monolityczny Cyrkon (Nasz Standard)",
      "acrylic": "Hybryda Akrylowa (Tanie Kliniki)",
      "pfm": "Metaloceramika (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Ryzyko Pęknięcia / Odprysku",
        "zirconia": "Bliskie Zeru (Lity 1200+ MPa)",
        "acrylic": "Wysokie (Zęby odpadają)",
        "pfm": "Umiarkowane (Odpryski ceramiki)"
      },
      {
        "criteria": "Ścieranie i Obniżenie Zgryzu",
        "zirconia": "Brak Ścierania (Stabilny Zgryz)",
        "acrylic": "Ściera się w 3–5 l. (Ból stawów)",
        "pfm": "Bardzo odporny na ścieranie"
      },
      {
        "criteria": "Przebarwienia i Zapachy",
        "zirconia": "100% Bezporowy (Zero Plam)",
        "acrylic": "Porowaty (Chłonie kawę i zapachy)",
        "pfm": "Glazurowany (Odporny)"
      },
      {
        "criteria": "Biozgodność z Dziąsłem",
        "zirconia": "Przeciwbakteryjny (Chroni kość)",
        "acrylic": "Gromadzi płytkę (Ryzyko infekcji)",
        "pfm": "Możliwa wrażliwość na metal"
      },
      {
        "criteria": "Naturalna Przezierność",
        "zirconia": "Wielowarstwowa Naturalność",
        "acrylic": "Sztuczny matowy plastik",
        "pfm": "Szary odblask metalu"
      },
      {
        "criteria": "Trwałość Kliniczna",
        "zirconia": "Dożywotnia / 25+ Lat",
        "acrylic": "3 – 7 Lat",
        "pfm": "8 – 12 Lat"
      }
    ],
    "packagesTitle": "Pakiety i Ceny Implantów All-on-4 w Antalyi",
    "packagesSubtitle": "Przejrzyste pakiety all-inclusive za cały łuk z 4 implantami tytanowymi premium, mostem cyrkonowym CAD/CAM, hotelem 5* i transferami VIP.",
    "durationLabel": "Czas Trwania Leczenia:",
    "includedLabel": "Co zawiera ten pakiet:",
    "pricePerArchLabel": "Cena za 1 łuk zębowy",
    "getQuoteBtn": "Otrzymaj Bezpłatną Wycenę",
    "mostPopularBadge": "NAJCZĘŚCIEJ WYBIERANY",
    "faqTitle": "Często Zadawane Pytania o Implanty All-on-4",
    "faqSubtitle": "Potwierdzone klinicznie odpowiedzi na wszystkie pytania chirurgiczne, biomechaniczne i organizacyjne dotyczące leczenia All-on-4 w Antalyi.",
    "faqGroup1Title": "Pytania Kliniczne i Chirurgiczne All-on-4",
    "faqGroup2Title": "Turystyka Medyczna, Pakiety i Dożywotnia Gwarancja",
    "packages": [
      {
        "name": "ALL-ON-4 – NUCLEOSS",
        "brand": "NucleOSS (Grade 4 Pure Titanium)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x NucleOSS Dental Implants per Arch",
          "10-12x Fixed Temporary Teeth (Same Visit)",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "Local Anesthesia & Post-op Medication Pack",
          "Airport-Hotel VIP Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory Work Included"
        ]
      },
      {
        "name": "ALL-ON-4 – DXL GERMAN",
        "brand": "DXL (German Engineering)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x DXL German Titanium Implants",
          "10-12x Fixed Temporary Teeth",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "VIP Airport & Hotel Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory & CAD/CAM Milling"
        ]
      },
      {
        "name": "ALL-ON-4 – STRAUMANN",
        "brand": "Straumann (Swiss Gold Standard)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x Straumann Swiss Titanium Implants",
          "10-12x Fixed High-Grade Temporary Teeth",
          "10-12x Final Monolithic Zirconia Teeth",
          "Lifetime International Manufacturer Passport",
          "Luxury 5-Star Hotel Stay Included",
          "VIP Mercedes Chauffeur Transfers",
          "Dedicated Personal Patient Host"
        ]
      }
    ],
    "faqsPart1": [
          {
                "q": "W jaki sposób tylko 4 implanty mogą utrzymać cały łuk zębowy?",
                "a": "Sekret metody All-on-4 polega na nachyleniu dwóch tylnych implantów pod kątem do 45 stopni. Pozwala to na zakotwiczenie w gęstej kości przedniej części żuchwy lub szczęki, tworząc stabilną bazę pod most z 10-12 zębami."
          },
          {
                "q": "Kto jest idealnym kandydatem do zabiegu All-on-4?",
                "a": "All-on-4 to idealne rozwiązanie dla osób z całkowitym bezzębiem, ruchomymi protezami, zaawansowaną paradontozą lub znacznym zanikiem kości w odcinku bocznym, gdzie tradycyjne implanty wymagałyby przeszczepu kości."
          },
          {
                "q": "Czy All-on-4 wymaga przeszczepu kości lub podniesienia dna zatoki?",
                "a": "W ponad 90% przypadków All-on-4 pozwala całkowicie uniknąć przeszczepów kości i zabiegów sinus lift. Nachylone implanty bezpiecznie omijają zatokę szczękową i nerwy zębodołowe."
          },
          {
                "q": "Jak działa stały most tymczasowy montowany w ciągu 24 godzin?",
                "a": "Gdy implanty uzyskają stabilizację pierwotną 35–50 Ncm, montuje się łączniki multi-unit. W ciągu 24 godzin przykręcany jest stały most tymczasowy — pacjent nigdy nie wychodzi z kliniki bez zębów."
          },
          {
                "q": "Jak należy się odżywiać w trakcie 3-miesięcznej osteointegracji?",
                "a": "Podczas zrastania implantów z kością zaleca się dietę miękką (ryby, makarony, jajka, gotowane warzywa). Należy unikać gryzienia twardych orzechów i twardego pieczywa do momentu założenia mostu z cyrkonu."
          },
          {
                "q": "Z jakiego materiału wykonany jest ostateczny most All-on-4?",
                "a": "Standardem w Master Smile Studio jest 100% monolityczny wielowarstwowy cyrkon (1400 MPa) na frezowanej belce tytanowej CAD/CAM. Nie stosujemy nietrwałego akrylu ani łamliwej porcelany."
          },
          {
                "q": "Czy most All-on-4 jest stały, czy pacjent może go wyjmować?",
                "a": "Most All-on-4 jest w 100% stały, przykręcany do implantów. Pacjent nie może go wyjąć samodzielnie. Czyszczenie w domu jest proste przy użyciu irygatora (Waterpik) i nici dentystycznej."
          },
          {
                "q": "Dlaczego nawigacja 3D jest kluczowa w zabiegu All-on-4?",
                "a": "Precyzyjne nachylenie implantów pod kątem 30-45 stopni wymaga mikrometrycznej dokładności. Szablony 3D gwarantują wprowadzenie implantów z dokładnością poniżej 0,1 mm, w 100% chroniąc nerwy."
          },
          {
                "q": "Czy zniszczone zęby można usunąć podczas zabiegu All-on-4?",
                "a": "Tak. Wszelkie zniszczone lub ruchome zęby usuwane są podczas tej samej operacji, po czym od razu wprowadzane są 4 implanty i pobierany jest skan pod most 24h."
          },
          {
                "q": "Jaka jest długoterminowa skuteczność metody All-on-4?",
                "a": "Badania kliniczne obejmujące ponad 15 lat wykazują skuteczność All-on-4 na poziomie ponad 98,2%. Implanty Straumann i DXL objęte są międzynarodową dożywotnią gwarancją."
          }
    ],
    "faqsPart2": [
          {
                "q": "Ile wizyt w Antalyi wymaga leczenie All-on-4?",
                "a": "Dokładnie 2 wizyty: Wizyta 1 (3–5 dni) na diagnostykę 3D, zabieg i stałe zęby tymczasowe; Wizyta 2 (5–7 dni, po 3 miesiącach) na przymiarki i odbiór ostatecznego mostu z monolitycznego cyrkonu 1400 MPa."
          },
          {
                "q": "Co zawiera pakiet All-on-4 w Master Smile Studio?",
                "a": "Pakiet obejmuje 4 implanty tytanowe na łuk, łączniki multi-unit, zęby tymczasowe w 24h, ostateczny most cyrkonowy, tomografię 3D, leki, hotel 4/5* ze śniadaniem i transfery VIP Mercedesem."
          },
          {
                "q": "Czy cena pakietu może ulec zmianie po przyjeździe do Antalyi?",
                "a": "Nie. Po analizie zdjęcia rentgenowskiego otrzymują Państwo wiążący kosztorys z gwarancją stałej ceny bez żadnych ukrytych opłat."
          },
          {
                "q": "Czy zabieg na 4 implantach boli? Czy dostępna jest sedacja?",
                "a": "Zabieg jest bezbolesny w znieczuleniu miejscowym. Dla pacjentów odczuwających stres oferujemy sedację dożylną pod okiem wykwalifikowanego anestezjologa."
          },
          {
                "q": "Czy cukrzycy i osoby palące mogą poddać się zabiegowi All-on-4?",
                "a": "Tak. U pacjentów z wyrównaną cukrzycą (HbA1c < 7,5%) odsetek powodzenia jest identyczny jak u zdrowych. Osobom palącym zalecamy ograniczenie palenia na 2 tygodnie przed i po zabiegu."
          },
          {
                "q": "Jak działa międzynarodowy paszport gwarancyjny?",
                "a": "Otrzymują Państwo oficjalny paszport implantologiczny z numerami seryjnymi wszczepów, uprawniający do dożywotniej gwarancji producenta na całym świecie."
          },
          {
                "q": "Jak wygląda opieka po powrocie do kraju?",
                "a": "Nasz zespół zapewnia stałe wsparcie przez WhatsApp i wideokonsultacje. Otrzymują Państwo pełną dokumentację i zdjęcia RTG dla swojego lokalnego stomatologa."
          }
    ],
    "compareTitle": "Obiektywne Porównanie Odbudowy Pełnołukowej: All-on-4 vs. All-on-5 vs. All-on-6",
    "compareSubtitle": "Wybór między 4, 5 a 6 implantami zależy ściśle od objętości kości, siły żucia i szerokości anatomicznej szczęki.",
    "compareTableHeaders": {
      "criteria": "Kryterium Kliniczne i Biomechaniczne",
      "all4": "Protokół All-on-4",
      "all5": "All-on-5 (All-on-X)",
      "all6": "Protokół All-on-6 (Złoty Standard)"
    },
    "compareTableRows": [
      {
        "criteria": "Liczba Implantów na Łuk",
        "all4": "4 Implanty Tytanowe (2 proste, 2 nachylone pod kątem 45°)",
        "all5": "5 Implantów Tytanowych (Asymetria kości)",
        "all6": "6 Implantów Tytanowych (2 z przodu, 4 w odcinkach bocznych)"
      },
      {
        "criteria": "Liczba Zębów w Moście",
        "all4": "10 do 12 Zębów (do 1. trzonowca)",
        "all5": "12 Zębów",
        "all6": "14 Zębów (Pełny łuk łącznie z 2. trzonowcami)"
      },
      {
        "criteria": "Rozkład Siły Żucia (Nacisk)",
        "all4": "Średni do Wysokiego (200 – 350 N)",
        "all5": "Wysoki (350 – 450 N)",
        "all6": "Maksymalny (450 – 600+ N, Silny Zgryz)"
      },
      {
        "criteria": "Konieczność Sinus Liftu / Odbudowy Kości",
        "all4": "Unikana w 90% przypadków dzięki kątowi 45°",
        "all5": "Możliwa jednostronna odbudowa",
        "all6": "Może wymagać drobnego sinus liftu przy zaniku kości z tyłu"
      },
      {
        "criteria": "Naprężenia Dźwigni (Cantilever)",
        "all4": "Umiarkowane ramię dźwigni (10 – 15 mm)",
        "all5": "Zmniejszone ramię dźwigni",
        "all6": "Bliskie Zeru (Brak naprężeń dźwigni, maksymalna sztywność)"
      },
      {
        "criteria": "Margines Bezpieczeństwa",
        "all4": "Utrata 1 implantu wymaga wymiany całego mostu",
        "all5": "Pozostałe 4 implanty mogą tymczasowo utrzymać most",
        "all6": "Utrata 1 implantu pozwala 5 pozostałym bezpiecznie utrzymać most"
      },
      {
        "criteria": "Główny Profil Pacjenta",
        "all4": "Zaawansowany zanik kości, unikanie przeszczepów",
        "all5": "Asymetria ilości kości między lewą a prawą stroną",
        "all6": "Dobra kość (>10 mm), duża siła żucia, młodsi i aktywni pacjenci"
      }
    ],
    "compareDecision": {
      "whenAll4Title": "Kiedy All-on-4 jest właściwym wyborem?",
      "whenAll4Text": "All-on-4 jest wskazany w przypadku znacznego zaniku kości w odcinkach bocznych, gdy pacjent pragnie uniknąć podnoszenia dna zatoki. Kąt 45 stopni pozwala zakotwiczyć implanty w gęstej kości przedniej.",
      "whenAll6Title": "Kiedy All-on-6 jest wyborem nadrzędnym?",
      "whenAll6Text": "All-on-6 jest zalecany przy odpowiedniej wysokości kości bocznej (>10 mm), u osób z bruksizmem (zgrzytaniem zębami) oraz u pacjentów oczekujących pełnego łuku 14 zębów o najwyższej wytrzymałości."
    },
    "processTitle": "3-Etapowy Protokół Precyzyjny: Od Cyfrowego 3D do Stałego Cyrkonu",
    "processSubtitle": "Każdy zabieg All-on-4 w Master Smile Studio realizowany jest w oparciu o cyfrowe szablony chirurgiczne i frezowanie robotyczne CAD/CAM.",
    "processCards": [
      {
        "step": "ETAP 01",
        "title": "Tomografia 3D CBCT i Szablon Chirurgiczny",
        "text": "Tomografia 3D o wysokiej rozdzielczości analizuje gęstość kości w jednostkach Hounsfielda oraz przebieg nerwów. Dedykowany szablon chirurgiczny pozycjonuje 6 implantów z dokładnością poniżej 0,1 mm.",
        "specs": [
          {
            "key": "Precyzja",
            "val": "< 0.1 mm"
          },
          {
            "key": "Zabieg",
            "val": "Małoinwazyjny z nawigacją"
          },
          {
            "key": "Badanie Kości",
            "val": "Skala Hounsfielda 3D"
          }
        ]
      },
      {
        "step": "ETAP 02",
        "title": "Stałe Zęby Tymczasowe w 24 Godziny",
        "text": "Gdy siła dokręcenia implantów osiąga 35–50 Ncm, montowane są łączniki multi-unit. W ciągu 24 godzin przykręcany jest stały most tymczasowy, zapewniając natychmiastową funkcjonalność.",
        "specs": [
          {
            "key": "Moment Wkręcania",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Czas Oddania",
            "val": "W 24 godziny"
          },
          {
            "key": "Funkcja",
            "val": "Natychmiastowa miękka dieta"
          }
        ]
      },
      {
        "step": "ETAP 03",
        "title": "5-Osiowe Frezowanie CAD/CAM Cyrkonu Monolitycznego",
        "text": "Po 3 miesiącach gojenia skaner wewnątrzustny 3D rejestruje ułożenie implantów. Monolityczny most z niemieckiego cyrkonu (1200+ MPa) jest frezowany cyfrowo i spiekany w 1500°C.",
        "specs": [
          {
            "key": "Wytrzymałość",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Materiał",
            "val": "Lity Cyrkon Niemiecki"
          },
          {
            "key": "Temp. Spiekania",
            "val": "1500°C Wysoka Gęstość"
          }
        ]
      }
    ],
    "costTitle": "Międzynarodowe Porównanie Cen: UK / Niemcy vs. Antalya (All-on-4)",
    "costSubtitle": "Zobacz, dlaczego tysiące pacjentów z Europy wybiera Master Smile Studio do odbudowy All-on-4 bez kompromisów jakościowych.",
    "costTableHeaders": {
      "country": "Lokalizacja i Standard Kliniki",
      "costPerArch": "Standard Private Healthcare Rates",
      "inclusions": "Zakres Usług w Cenie",
      "valueAdvantage": "Korzyść Master Smile Studio"
    },
    "costTableRows": [
      {
        "country": "Wielka Brytania (Harley Street / Kliniki Prywatne)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Tylko zabieg i standardowy most. Tomografia 3D, zęby tymczasowe i sedacja płatne dodatkowo.",
        "valueAdvantage": "Oszczędność 65% – 70% (VIP Inclusions u nas) na oryginalnych systemach szwajcarskich/niemieckich."
      },
      {
        "country": "Niemcy / Szwajcaria (Kliniki Prywatne)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Koszty chirurgiczne i laboratoryjne. Hotel, transfery VIP i leki nie są wliczone.",
        "valueAdvantage": "Oszczędność 60% – 65% (VIP Inclusions u nas) z identycznym tytanem niemieckim/szwajcarskim."
      },
      {
        "country": "Master Smile Studio (Antalya, Turcja) ⭐",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "100% All-Inclusive: 4 Implanty, Stały Most Tymczasowy, Ostateczny Most Cyrkonowy, Tomografia 3D, Hotel 5*, Transfery VIP, Dożywotni Paszport Gwarancyjny.",
        "valueAdvantage": "100% gwarancja stałej, przejrzystej ceny pakietowej bez ukrytych opłat."
      }
    ]
  },
  "pt": {
    "introBadge": "DENTES FIXOS EM 24 HORAS",
    "introTitle": "Implantes Dentários All-on-4 em Antalya, Turquia",
    "introLead": "Reabilitação fixa de arcada total sobre 4 implantes estratégicos — novos dentes em 24 horas sem necessidade de enxerto ósseo.",
    "introP1": "No Master Smile Studio, o protocolo All-on-4 representa uma solução transformadora para pacientes com perda óssea severa ou desdentados totais. Ao inclinar os dois implantes posteriores em até 45 graus e posicionar dois implantes retos na região anterior, evita-se a invasão do seio maxilar e do nervo dentário, eliminando a necessidade de enxertos ósseos complexos.",
    "introP2": "O conceito All-on-4 maximiza o volume ósseo remanescente, proporcionando alta estabilidade primária (35–50 Ncm) e distribuição uniforme das forças oclusais. O paciente sai da clínica em 24 horas com uma prótese provisória fixa aparafusada, recuperando a capacidade mastigatória e um sorriso natural imediatamente.",
    "introP3Lead": "Conforme a sua anatomia óssea ou objetivos clínicos, você também pode conhecer os ",
    "introP3LinkAll4": "Implantes Dentários All-on-6",
    "introP3Mid": ", os especializados ",
    "introP3LinkZygoma": "Implantes Zigomáticos para Perda Óssea Severa",
    "introP3And": " e a ",
    "introP3LinkSinus": "Cirurgia de Sinus Lift",
    "introP3Tail": ".",
    "materialsTitle": "Materiais da Prótese All-on-4: Por que Usamos Zircônia Monolítica",
    "materialsSubtitle": "No All-on-4, 4 implantes suportam toda a carga mastigatória da mandíbula (200 a 600 Newtons). Descubra por que produzimos exclusivamente Zircônia Monolítica Multicamadas em vez de acrílico ou porcelana frágil.",
    "materialsComparisonBadge": "Comparação Laboratorial",
    "materialsComparisonAlt": "Comparação de materiais para pontes All-on-4: Zircônia monolítica vs Híbrida de acrílico vs Metalocerâmica",
    "materialsComparisonText": "Comparação direta em laboratório dentário dos 3 materiais de pontes All-on-4 (PFM, acrílico híbrido e zircônia alemã monolítica) demonstrando estética, translucidez e resistência.",
    "materialsSpecLabels": {
      "material": "Tipo de Material",
      "strength": "Resistência Flexural",
      "chipping": "Risco de Fratura",
      "lifespan": "Vida Útil"
    },
    "materialsCards": [
          {
                "title": "Zircônia Monolítica Multicamadas",
                "sub": "100% Zircônia Alemã Maciça + Barra de Titânio Fresada",
                "badge": "PADRÃO OURO MASTER SMILE",
                "isGold": true,
                "material": "1400 MPa CAD/CAM Zircônia",
                "strength": "1.400 MPa",
                "chippingRisk": "Zero Risco de Lascamento",
                "lifespan": "Vitalício (25+ Anos)",
                "verdictLabel": "VEREDITO CLÍNICO",
                "verdictText": "A escolha primária do Master Smile Studio para mais de 95% dos casos de arcada completa. Máxima biocompatibilidade, estética superior e resistência vitalícia a fraturas.",
                "features": [
                      {
                            "text": "Zero lascamento ou fraturas sob forte mastigação",
                            "status": "good"
                      },
                      {
                            "text": "Superfície ultra-lisa previne placa bacteriana e Peri-implantite",
                            "status": "good"
                      },
                      {
                            "text": "Não porosa: 100% resistente a manchas e odores",
                            "status": "good"
                      },
                      {
                            "text": "Gradiente multicamadas cria translucidez natural",
                            "status": "good"
                      }
                ]
          },
          {
                "title": "Ponte Híbrida Titânio-Acrílico",
                "sub": "Estrutura Metálica + Resina Acrílica e Dentes Plásticos",
                "material": "Acrílico PMMA + Barra Metálica",
                "strength": "100 MPa",
                "chippingRisk": "Alto Desgaste e Descolamento",
                "lifespan": "3 – 5 Anos (Provisório)",
                "verdictLabel": "VEREDITO CLÍNICO",
                "verdictText": "Aceitável apenas como ponte provisória de baixo custo. Não recomendado como solução definitiva para mais de 20 anos devido ao desgaste, absorção bacteriana e desprendimento de dentes.",
                "features": [
                      {
                            "text": "Desgaste abrasivo aplaina os dentes e altera a dimensão vertical",
                            "status": "bad"
                      },
                      {
                            "text": "Resina porosa absorve bactérias, gorduras e gera mau odor",
                            "status": "bad"
                      },
                      {
                            "text": "Dentes individuais podem soltar-se ao mastigar alimentos rijos",
                            "status": "bad"
                      },
                      {
                            "text": "Exige manutenções frequentes e substituição em poucos anos",
                            "status": "warn"
                      }
                ]
          },
          {
                "title": "Metalocerâmica (PFM)",
                "sub": "Estrutura Cobalto-Cromo + Cerâmica Fundida",
                "material": "Porcelana Feldspática Estratificada",
                "strength": "450 MPa",
                "chippingRisk": "Lascamento da Porcelana",
                "lifespan": "8 – 12 Anos",
                "verdictLabel": "VEREDITO CLÍNICO",
                "verdictText": "Tecnologia ultrapassada para arcadas completas. Embora a estrutura metálica seja resistente, a flexão oclusal sobre 4 implantes causa fraturas na porcelana e expõe o bordo cinzento metálico.",
                "features": [
                      {
                            "text": "A porcelana lasca sob as forças de mastigação do All-on-4",
                            "status": "bad"
                      },
                      {
                            "text": "Margem metálica escura fica visível em caso de retração gengival",
                            "status": "bad"
                      },
                      {
                            "text": "Peso excessivo causa desconforto e sensação volumosa na boca",
                            "status": "warn"
                      },
                      {
                            "text": "Reparo intraoral da porcelana fraturada é inviável",
                            "status": "bad"
                      }
                ]
          }
    ],
    "materialsTableHeaders": {
      "criteria": "Critério de Comparação",
      "zirconia": "Zircônia Monolítica (Nosso Padrão)",
      "acrylic": "Híbrido Acrílico (Opção Econômica)",
      "pfm": "Metalocerâmica (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Risco de Fratura / Lascamento",
        "zirconia": "Próximo de Zero (Sólido 1200+ MPa)",
        "acrylic": "Alto (Dentes podem descolar)",
        "pfm": "Moderado (Porcelana lasca)"
      },
      {
        "criteria": "Desgaste Mastigatório e Oclusão",
        "zirconia": "Zero Desgaste (Mordida Estável)",
        "acrylic": "Desgasta em 3–5 anos (Dor na ATM)",
        "pfm": "Altamente resistente"
      },
      {
        "criteria": "Manchas e Retenção de Odores",
        "zirconia": "100% Não Poroso (Zero Manchas)",
        "acrylic": "Poroso (Absorve café e odores)",
        "pfm": "Esmaltado (Resiste a manchas)"
      },
      {
        "criteria": "Biocompatibilidade Gengival",
        "zirconia": "Antibacteriano (Protege a gengiva)",
        "acrylic": "Retém placa (Risco de infecção)",
        "pfm": "Possível sensibilidade ao metal"
      },
      {
        "criteria": "Translucidez e Estética",
        "zirconia": "Vitalidade Natural Multicamadas",
        "acrylic": "Opacidade plástica artificial",
        "pfm": "Reflexo metálico acinzentado"
      },
      {
        "criteria": "Durabilidade Clínica",
        "zirconia": "Toda a Vida / 25+ Anos",
        "acrylic": "3 – 7 Anos",
        "pfm": "8 – 12 Anos"
      }
    ],
    "packagesTitle": "Pacotes e Preços de Implantes All-on-4 em Antalya",
    "packagesSubtitle": "Preços transparentes all-inclusive por arcada com 4 implantes de titânio premium, ponte de zircônia CAD/CAM, hotel 5 estrelas e transfers VIP.",
    "durationLabel": "Duração do Tratamento:",
    "includedLabel": "O que está incluído neste pacote:",
    "pricePerArchLabel": "Preço por arcada dentária",
    "getQuoteBtn": "Solicitar Orçamento Gratuito",
    "mostPopularBadge": "MAIS POPULAR",
    "faqTitle": "Perguntas Frequentes sobre Implantes All-on-4",
    "faqSubtitle": "Respostas validadas por cirurgiões sobre todos os aspectos clínicos, biomecânicos e logísticos do seu tratamento All-on-4 em Antalya.",
    "faqGroup1Title": "Perguntas Clínicas e Cirúrgicas All-on-4",
    "faqGroup2Title": "Turismo Dentário, Pacotes e Garantia Vitalícia",
    "packages": [
      {
        "name": "ALL-ON-4 – NUCLEOSS",
        "brand": "NucleOSS (Grade 4 Pure Titanium)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x NucleOSS Dental Implants per Arch",
          "10-12x Fixed Temporary Teeth (Same Visit)",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "Local Anesthesia & Post-op Medication Pack",
          "Airport-Hotel VIP Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory Work Included"
        ]
      },
      {
        "name": "ALL-ON-4 – DXL GERMAN",
        "brand": "DXL (German Engineering)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x DXL German Titanium Implants",
          "10-12x Fixed Temporary Teeth",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "VIP Airport & Hotel Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory & CAD/CAM Milling"
        ]
      },
      {
        "name": "ALL-ON-4 – STRAUMANN",
        "brand": "Straumann (Swiss Gold Standard)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x Straumann Swiss Titanium Implants",
          "10-12x Fixed High-Grade Temporary Teeth",
          "10-12x Final Monolithic Zirconia Teeth",
          "Lifetime International Manufacturer Passport",
          "Luxury 5-Star Hotel Stay Included",
          "VIP Mercedes Chauffeur Transfers",
          "Dedicated Personal Patient Host"
        ]
      }
    ],
    "faqsPart1": [
          {
                "q": "Como apenas 4 implantes conseguem suportar uma arcada completa de dentes?",
                "a": "O segredo da engenharia All-on-4 é a inclinação dos dois implantes posteriores em até 45 graus. Isso aproveita o osso denso anterior e cria uma base rígida que distribui com perfeição a força mastigatória sobre 10 a 12 dentes fixos."
          },
          {
                "q": "Quem é o candidato ideal para os implantes All-on-4?",
                "a": "É ideal para pessoas com ausência total de dentes, próteses removíveis soltas, doença periodontal avançada ou perda óssea posterior acentuada, onde implantes convencionais exigiriam enxerto ósseo."
          },
          {
                "q": "O procedimento All-on-4 requer enxerto ósseo ou sinus lift?",
                "a": "Em mais de 90% dos casos, o All-on-4 dispensa enxertos ósseos e sinus lift. A angulação dos implantes contorna o seio maxilar e o nervo alveolar com total segurança."
          },
          {
                "q": "Como funcionam os dentes provisórios fixos instalados em 24 horas?",
                "a": "Alcançando torque primário de 35–50 Ncm, instalam-se os pilares multi-unit. Em até 24 horas, uma ponte provisória fixa aparafusada é instalada — você nunca sai sem dentes."
          },
          {
                "q": "Qual a alimentação recomendada durante os 3 meses de cicatrização?",
                "a": "Durante a osseointegração, deve-se manter uma dieta macia (peixes, massas, ovos, legumes cozidos). Alimentos duros ou crocantes devem ser evitados até a instalação da prótese definitiva em zircônia."
          },
          {
                "q": "Qual material é utilizado na prótese definitiva All-on-4?",
                "a": "No Master Smile Studio, o padrão é 100% Zircônia Monolítica Multicamadas Alemã (1.400 MPa) com barra de titânio usinada em CAD/CAM. Sem resinas frágeis ou cerâmicas que lascam."
          },
          {
                "q": "A prótese All-on-4 é fixa ou o paciente pode remover?",
                "a": "É 100% fixa e aparafusada; o paciente não pode removê-la. Apenas o dentista pode desaparafusá-la em revisões periódicas. A higiene diária em casa é feita com facilidade usando jato de água (Waterpik)."
          },
          {
                "q": "Por que a cirurgia guiada 3D por computador é vital no All-on-4?",
                "a": "Inclinar os implantes entre 30 e 45 graus requer exatidão absoluta. Guias cirúrgicos 3D garantem precisão submilimétrica (<0,1 mm), protegendo estruturas nobres e alinhando perfeitamente os acessos dos parafusos."
          },
          {
                "q": "Dentes danificados podem ser extraídos na mesma cirurgia do All-on-4?",
                "a": "Sim. Dentes condenados são extraídos na mesma sessão, seguindo-se imediatamente a colocação dos 4 implantes e o escaneamento digital para os dentes provisórios de 24 horas."
          },
          {
                "q": "Qual é a taxa de sucesso a longo prazo do All-on-4?",
                "a": "Estudos clínicos com mais de 15 anos de acompanhamento comprovam taxa de sucesso superior a 98,2%. Nossos implantes suíços Straumann possuem garantia vitalícia internacional."
          }
    ],
    "faqsPart2": [
          {
                "q": "Quantas viagens a Antalya são necessárias para o All-on-4?",
                "a": "Exatamente 2 visitas: 1ª Visita (3–5 dias) para tomografia 3D, cirurgia e dentes fixos provisórios; 2ª Visita (5–7 dias, após 3 meses) para os ajustes e entrega da prótese final em zircônia 1.400 MPa."
          },
          {
                "q": "O que está incluído no pacote All-on-4 do Master Smile Studio?",
                "a": "Tudo incluso: 4 implantes por arcada, pilares multi-unit, dentes provisórios em 24h, prótese final de zircônia, tomografias 3D, medicamentos, hotel 4/5 estrelas com café e transfers VIP Mercedes."
          },
          {
                "q": "O valor do pacote pode sofrer alterações ao chegar a Antalya?",
                "a": "Não. Após a avaliação das radiografias e consulta virtual, emitimos um orçamento oficial com preço fixo garantido e sem cobranças ocultas."
          },
          {
                "q": "Sentirei dor durante a cirurgia de 4 implantes? Há sedação?",
                "a": "O procedimento é indolor sob anestesia local avançada. Para maior tranquilidade, oferecemos sedação consciente endovenosa conduzida por médico anestesiologista."
          },
          {
                "q": "Diabéticos ou fumantes podem realizar o All-on-4?",
                "a": "Sim. Pacientes com diabetes controlada (HbA1c < 7,5%) apresentam índices de sucesso equivalentes. A fumantes, orientamos pausar o fumo por 2 semanas antes e após a cirurgia."
          },
          {
                "q": "Como funciona o passaporte de garantia vitalícia internacional?",
                "a": "Você recebe o passaporte oficial do fabricante contendo os números de série e lote dos implantes, garantindo reposição vitalícia em clínicas credenciadas em todo o mundo."
          },
          {
                "q": "Como é feito o acompanhamento pós-operatório no meu país de origem?",
                "a": "Nossa equipe de coordenação internacional mantém contato contínuo via WhatsApp e chamadas de vídeo, fornecendo relatórios cirúrgicos e radiografias para seu dentista local."
          }
    ],
    "compareTitle": "Comparação Objetiva de Arcada Total: All-on-4 vs. All-on-5 vs. All-on-6",
    "compareSubtitle": "A escolha entre 4, 5 ou 6 implantes depende do volume ósseo posterior, força mastigatória e largura da arcada.",
    "compareTableHeaders": {
      "criteria": "Critério Clínico e Biomecânico",
      "all4": "Protocolo All-on-4",
      "all5": "All-on-5 (All-on-X)",
      "all6": "Protocolo All-on-6 (Padrão Ouro)"
    },
    "compareTableRows": [
      {
        "criteria": "Número de Implantes por Arcada",
        "all4": "4 Implantes de Titânio (2 retos, 2 angulados a 45°)",
        "all5": "5 Implantes de Titânio (Perda óssea assimétrica)",
        "all6": "6 Implantes de Titânio (2 anteriores, 4 posteriores)"
      },
      {
        "criteria": "Capacidade de Dentes na Prótese",
        "all4": "10 a 12 Dentes (até o 1º molar)",
        "all5": "12 Dentes",
        "all6": "14 Dentes (Arcada completa com 2ºs molares)"
      },
      {
        "criteria": "Distribuição da Força Mastigatória",
        "all4": "Moderada a Alta (200 – 350 N)",
        "all5": "Alta (350 – 450 N)",
        "all6": "Máxima (450 – 600+ N, Mordida Potente)"
      },
      {
        "criteria": "Necessidade de Enxerto / Sinus Lift",
        "all4": "Evitada em 90% dos casos via angulação de 45°",
        "all5": "Pode ser necessário enxerto unilateral",
        "all6": "Pode exigir pequeno sinus lift se houver atrofia posterior"
      },
      {
        "criteria": "Tensão de Cantilever (Extensão Posterior)",
        "all4": "Cantilever moderado (10 – 15 mm)",
        "all5": "Cantilever reduzido",
        "all6": "Praticamente Zero (Rigidez mecânica máxima)"
      },
      {
        "criteria": "Fator de Redundância e Segurança",
        "all4": "A perda de 1 implante exige substituição total da ponte",
        "all5": "Os 4 implantes restantes sustentam temporariamente",
        "all6": "Se 1 implante falhar, os outros 5 mantêm a ponte com segurança"
      },
      {
        "criteria": "Perfil de Paciente Indicado",
        "all4": "Perda óssea acentuada, pacientes que evitam enxertos",
        "all5": "Volume ósseo assimétrico entre os lados",
        "all6": "Boa altura óssea (>10 mm), mordida forte, pacientes ativos"
      }
    ],
    "compareDecision": {
      "whenAll4Title": "Quando o All-on-4 é a melhor escolha?",
      "whenAll4Text": "O All-on-4 é indicado para perda óssea moderada a severa na região posterior, permitindo evitar enxertos ou sinus lift através da angulação de 45 graus dos implantes posteriores.",
      "whenAll6Title": "Quando o All-on-6 é a escolha superior?",
      "whenAll6Text": "O All-on-6 é recomendado quando há altura óssea posterior adequada (>10 mm), em pacientes com bruxismo ou que exigem uma arcada completa de 14 dentes com força mastigatória irrestrita."
    },
    "processTitle": "Protocolo de Precisão em 3 Fases: Do Planejamento 3D à Zircônia Definitiva",
    "processSubtitle": "Cada reabilitação All-on-4 no Master Smile Studio segue um rigoroso fluxo cirúrgico guiado por computador e fresagem robótica CAD/CAM.",
    "processCards": [
      {
        "step": "FASE 01",
        "title": "Tomografia 3D CBCT e Guia Cirúrgico Computadorizado",
        "text": "A tomografia de alta resolução mapeia a densidade óssea em unidades Hounsfield e os trajetos nervosos. Um guia cirúrgico exclusivo posiciona os 6 implantes com precisão submilimétrica.",
        "specs": [
          {
            "key": "Precisão",
            "val": "< 0.1 mm"
          },
          {
            "key": "Incisão",
            "val": "Minimamente Invasiva Guiada"
          },
          {
            "key": "Análise Óssea",
            "val": "Escala 3D Hounsfield"
          }
        ]
      },
      {
        "step": "FASE 02",
        "title": "Carga Imediata Fixa em até 24 Horas",
        "text": "Com torque de inserção primário atingindo 35–50 Ncm, são instalados os pilares multi-unit. Em até 24 horas, uma ponte provisória aparafusada é fixada sobre os 6 implantes.",
        "specs": [
          {
            "key": "Torque Primário",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Tempo de Entrega",
            "val": "Em até 24 horas"
          },
          {
            "key": "Mastigação",
            "val": "Imediata com Dieta Macia"
          }
        ]
      },
      {
        "step": "FASE 03",
        "title": "Fresagem Robótica CAD/CAM de Zircônia Monolítica",
        "text": "Após 3 meses de osseointegração, o escaneamento intraoral 3D captura a posição dos implantes. Uma ponte monolítica de zircônia alemã (1200+ MPa) é fresada e sinterizada a 1500°C.",
        "specs": [
          {
            "key": "Resistência Flexural",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Grau do Material",
            "val": "Zircônia Maciça Alemã"
          },
          {
            "key": "Temp. Sinterização",
            "val": "1500°C Alta Densidade"
          }
        ]
      }
    ],
    "costTitle": "Comparativo Internacional de Preços: Reino Unido / Alemanha vs. Antalya (All-on-4)",
    "costSubtitle": "Entenda por que milhares de pacientes europeus escolhem o Master Smile Studio para reabilitação All-on-4 sem abrir mão da qualidade.",
    "costTableHeaders": {
      "country": "Localização e Nível da Clínica",
      "costPerArch": "Standard Private Healthcare Rates",
      "inclusions": "Serviços Inclusos no Pacote",
      "valueAdvantage": "Vantagem Master Smile Studio"
    },
    "costTableRows": [
      {
        "country": "Reino Unido (Harley Street / Clínicas Privadas)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Apenas cirurgia e prótese básica. Tomografia 3D, provisório, sedação e consultas cobrados à parte.",
        "valueAdvantage": "Economia de 65% a 70% (VIP Inclusions.350 a VIP Inclusions.800 connosco) em sistemas suíços/alemães autênticos."
      },
      {
        "country": "Alemanha / Suíça (Clínicas Privadas)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Honorários cirúrgicos e laboratoriais. Hospedagem, transfers VIP e medicamentos não incluídos.",
        "valueAdvantage": "Economia de 60% a 65% (VIP Inclusions.900 a VIP Inclusions.900 connosco) com titânio alemão/suíço idêntico."
      },
      {
        "country": "Master Smile Studio (Antalya, Turquia) ⭐",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "100% All-Inclusive: 4 Implantes, Ponte Provisória Fixa, Ponte Definitiva em Zircônia, Tomografia 3D, Hotel 5 Estrelas, Transfers VIP, Passaporte de Garantia Vitalícia.",
        "valueAdvantage": "Garantia de preço fixo 100% transparente, sem custos ocultos ou taxas adicionais."
      }
    ]
  },
  "es": {
    "introBadge": "DIENTES FIJOS EN 24 HORAS",
    "introTitle": "Implantes Dentales All-on-4 en Antalya, Turquía",
    "introLead": "Restauración fija de arcada completa sobre 4 implantes estratégicos — dientes fijos en 24 horas sin injertos de hueso.",
    "introP1": "En Master Smile Studio, los implantes dentales All-on-4 suponen una solución revolucionaria para pacientes con pérdida ósea acusada o pérdida total de dientes. Inclinando los dos implantes posteriores hasta 45 grados y colocando dos implantes rectos en la zona frontal, se elude el seno maxilar y el nervio dentario, evitando injertos óseos complejos.",
    "introP2": "El protocolo All-on-4 aprovecha al máximo el hueso natural remanente, logrando una estabilidad primaria de 35–50 Ncm y un reparto homogéneo de las cargas de masticación. El paciente sale de la clínica en 24 horas con una prótese fija atornillada provisional, sonriendo y masticando con total seguridad desde el primer día.",
    "introP3Lead": "Según su volumen óseo y objetivos clínicos, también puede consultar nuestros ",
    "introP3LinkAll4": "Implantes Dentales All-on-6",
    "introP3Mid": ", los especializados ",
    "introP3LinkZygoma": "Implantes Cigomáticos para Pérdida Ósea Severa",
    "introP3And": " y ",
    "introP3LinkSinus": "Elevación de Seno Maxilar",
    "introP3Tail": ".",
    "materialsTitle": "Materiales de Prótesis All-on-4: Por qué Usamos Circonio Monolítico",
    "materialsSubtitle": "En All-on-4, 4 implantes soportan toda la fuerza masticatoria de la mandíbula (200 a 600 Newtons). Descubra por qué diseñamos exclusivamente Circonio Monolítico Multicapa en lugar de acrílico o metal.",
    "materialsComparisonBadge": "Comparación de Laboratorio",
    "materialsComparisonAlt": "Comparación de materiales para prótesis All-on-4: Circonio monolítico vs Híbrida acrílica vs Metal-porcelana",
    "materialsComparisonText": "Comparativa directa en laboratorio dental de los 3 materiales de prótesis All-on-4 (PFM, híbrida acrílica y circonio monolítico alemán) destacando estética, translucidez y solidez estructural.",
    "materialsSpecLabels": {
      "material": "Tipo de Material",
      "strength": "Resistencia a la Flexión",
      "chipping": "Riesgo de Fractura",
      "lifespan": "Vida Útil"
    },
    "materialsCards": [
          {
                "title": "Circonio Monolítico Multicapa",
                "sub": "100% Circonio Alemán Macizo + Barra de Titanio Fresada",
                "badge": "ESTÁNDAR DE ORO MASTER SMILE",
                "isGold": true,
                "material": "1400 MPa CAD/CAM Circonio",
                "strength": "1.400 MPa",
                "chippingRisk": "Cero Riesgo de Astillamiento",
                "lifespan": "De por Vida (25+ Años)",
                "verdictLabel": "DICTAMEN CLÍNICO",
                "verdictText": "La opción principal de Master Smile Studio para más del 95% de las rehabilitaciones completas. Máxima biocompatibilidad, estética superior y resistencia de por vida a fracturas.",
                "features": [
                      {
                            "text": "Cero fracturas o astillamiento bajo fuerte masticación",
                            "status": "good"
                      },
                      {
                            "text": "Superficie ultra-lisa previene placa bacteriana y periimplantitis",
                            "status": "good"
                      },
                      {
                            "text": "No poroso: 100% resistente a tinciones y olores",
                            "status": "good"
                      },
                      {
                            "text": "Gradiente multicapa proporciona translucidez dental natural",
                            "status": "good"
                      }
                ]
          },
          {
                "title": "Puente Híbrido Titanio-Acrílico",
                "sub": "Estructura Metálica + Resina Acrílica y Dientes Plásticos",
                "material": "Acrílico PMMA + Estructura Metálica",
                "strength": "100 MPa",
                "chippingRisk": "Alto Desgaste y Desprendimiento",
                "lifespan": "3 – 5 Años (Provisional)",
                "verdictLabel": "DICTAMEN CLÍNICO",
                "verdictText": "Aceptable únicamente como puente provisional o económico. No recomendado como solución definitiva para más de 20 años debido al desgaste de la resina, absorción bacteriana y desprendimiento dental.",
                "features": [
                      {
                            "text": "El desgaste abrasivo aplana los dientes y altera la mordida",
                            "status": "bad"
                      },
                      {
                            "text": "La resina porosa retiene bacterias, aceites y causa mal olor",
                            "status": "bad"
                      },
                      {
                            "text": "Dientes individuales pueden desprenderse al morder alimentos duros",
                            "status": "bad"
                      },
                      {
                            "text": "Requiere mantenimiento frecuente y reemplazo total periódico",
                            "status": "warn"
                      }
                ]
          },
          {
                "title": "Metal-Porcelana (PFM)",
                "sub": "Estructura Cobalto-Cromo + Cerámica Horneada",
                "material": "Porcelana Feldespática Estratificada",
                "strength": "450 MPa",
                "chippingRisk": "Astillamiento de Porcelana",
                "lifespan": "8 – 12 Años",
                "verdictLabel": "DICTAMEN CLÍNICO",
                "verdictText": "Tecnología obsoleta para arcadas completas. Aunque la estructura metálica es sólida, la flexión oclusal sobre 4 implantes provoca astillamientos irreversibles que dejan ver el metal gris.",
                "features": [
                      {
                            "text": "La porcelana se astilla bajo las intensas fuerzas oclusales de All-on-4",
                            "status": "bad"
                      },
                      {
                            "text": "El margen metálico oscuro se hace visible si la encía retrocede",
                            "status": "bad"
                      },
                      {
                            "text": "Mayor peso produce una sensación voluminosa e incómoda",
                            "status": "warn"
                      },
                      {
                            "text": "La reparación intraoral de porcelana astillada es inviable",
                            "status": "bad"
                      }
                ]
          }
    ],
    "materialsTableHeaders": {
      "criteria": "Criterio de Comparación",
      "zirconia": "Circonio Monolítico (Nuestro Estándar)",
      "acrylic": "Híbrido Acrílico (Opción Económica)",
      "pfm": "Metal-Porcelana (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Riesgo de Fractura / Astillamiento",
        "zirconia": "Casi Cero (Sólido 1200+ MPa)",
        "acrylic": "Alto (Dientes pueden soltarse)",
        "pfm": "Moderado (Porcelana se astilla)"
      },
      {
        "criteria": "Desgaste y Pérdida de Altura Oclusal",
        "zirconia": "Cero Desgaste (Mordida Estable)",
        "acrylic": "Se desgasta en 3–5 años (Dolor ATM)",
        "pfm": "Muy resistente al desgaste"
      },
      {
        "criteria": "Manchas y Absorción de Olores",
        "zirconia": "100% No Poroso (Cero Manchas)",
        "acrylic": "Poroso (Absorbe café y olores)",
        "pfm": "Esmaltado (Resiste manchas)"
      },
      {
        "criteria": "Biocompatibilidad con la Encía",
        "zirconia": "Antibacteriano (Protege la encía)",
        "acrylic": "Retiene placa (Riesgo de infección)",
        "pfm": "Posible sensibilidad al metal"
      },
      {
        "criteria": "Translucidez y Estética Natural",
        "zirconia": "Vitalidad Natural Multicapa",
        "acrylic": "Opacidad plástica artificial",
        "pfm": "Reflejo metálico grisáceo"
      },
      {
        "criteria": "Durabilidad Clínica",
        "zirconia": "De por Vida / 25+ Años",
        "acrylic": "3 – 7 Años",
        "pfm": "8 – 12 Años"
      }
    ],
    "packagesTitle": "Paquetes y Precios de Implantes All-on-4 en Antalya",
    "packagesSubtitle": "Precios transparentes todo incluido por arcada con 4 implantes de titanio premium, puente de zirconio CAD/CAM, hotel 5 estrellas y traslados VIP.",
    "durationLabel": "Duración del Tratamiento:",
    "includedLabel": "Qué incluye el paquete:",
    "pricePerArchLabel": "Protocolo de tratamiento y tiempo",
    "getQuoteBtn": "Obtener Presupuesto Gratuito",
    "mostPopularBadge": "MÁS POPULAR",
    "faqTitle": "Preguntas Frecuentes sobre Implantes All-on-4",
    "faqSubtitle": "Respuestas avaladas por especialistas sobre cada detalle quirúrgico, biomecánico y de viaje para su tratamiento All-on-4 en Antalya.",
    "faqGroup1Title": "Preguntas Clínicas y Quirúrgicas All-on-4",
    "faqGroup2Title": "Turismo Dental, Cobertura del Paquete y Garantía Vitalicia",
    "packages": [
      {
        "name": "ALL-ON-4 – NUCLEOSS",
        "brand": "NucleOSS (Grade 4 Pure Titanium)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x NucleOSS Dental Implants per Arch",
          "10-12x Fixed Temporary Teeth (Same Visit)",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "Local Anesthesia & Post-op Medication Pack",
          "Airport-Hotel VIP Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory Work Included"
        ]
      },
      {
        "name": "ALL-ON-4 – DXL GERMAN",
        "brand": "DXL (German Engineering)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x DXL German Titanium Implants",
          "10-12x Fixed Temporary Teeth",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "VIP Airport & Hotel Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory & CAD/CAM Milling"
        ]
      },
      {
        "name": "ALL-ON-4 – STRAUMANN",
        "brand": "Straumann (Swiss Gold Standard)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x Straumann Swiss Titanium Implants",
          "10-12x Fixed High-Grade Temporary Teeth",
          "10-12x Final Monolithic Zirconia Teeth",
          "Lifetime International Manufacturer Passport",
          "Luxury 5-Star Hotel Stay Included",
          "VIP Mercedes Chauffeur Transfers",
          "Dedicated Personal Patient Host"
        ]
      }
    ],
    "faqsPart1": [
          {
                "q": "¿Cómo pueden solo 4 implantes sostener una arcada dental completa?",
                "a": "La clave biomecánica de All-on-4 reside en inclinar los dos implantes traseros hasta 45 grados. Esto aprovecha el hueso denso anterior y genera una base rígida que soporta de forma equilibrada 10 a 12 dientes fijos."
          },
          {
                "q": "¿Quién es el candidato idóneo para implantes dentales All-on-4?",
                "a": "Es ideal para personas con pérdida total de piezas dentales, dentaduras postizas sueltas, periodontitis avanzada o gran pérdida ósea en la zona posterior, evitando injertos de hueso."
          },
          {
                "q": "¿El procedimiento All-on-4 requiere injerto de hueso o elevación de seno?",
                "a": "En más del 90% de los casos, All-on-4 evita por completo los injertos óseos y el sinus lift. La inclinación de los implantes posteriores elude los senos maxilares y nervios dentarios."
          },
          {
                "q": "¿Cómo funcionan los dientes fijos provisionales en 24 horas?",
                "a": "Al alcanzar una estabilidad primaria de 35–50 Ncm, se colocan los pilares multi-unit. En menos de 24 horas tras la cirugía, se atornilla un puente provisional fijo; nunca saldrá sin dientes."
          },
          {
                "q": "¿Qué dieta debo seguir durante los 3 meses de osteointegración?",
                "a": "Mientras los implantes se unen firmemente al hueso durante 3 meses, se debe mantener una dieta blanda (pescado, pasta, huevos, verduras tiernas). Evite alimentos duros hasta colocar el puente definitivo de circonio."
          },
          {
                "q": "¿Qué material se emplea en el puente definitivo All-on-4?",
                "a": "En Master Smile Studio usamos 100% Circonio Monolítico Multicapa Alemán (1.400 MPa) con barra de titanio fresada por CAD/CAM. No utilizamos resinas acrílicas frágiles ni porcelanas que se astillan."
          },
          {
                "q": "¿La prótesis All-on-4 es fija o el paciente puede retirarla?",
                "a": "Es 100% fija y atornillada; el paciente no puede retirarla en casa. Solo el odontólogo la desatornilla en revisiones anuales. La limpieza diaria es muy cómoda con irrigador dental (Waterpik)."
          },
          {
                "q": "¿Por qué es indispensable la guía quirúrgica 3D en All-on-4?",
                "a": "Colocar implantes angulados a 30-45 grados exige una precisión absoluta. Las guías 3D garantizan una colocación con tolerancia inferior a 0,1 mm, protegiendo senos y nervios."
          },
          {
                "q": "¿Pueden extraerse dientes dañados durante la misma cirugía All-on-4?",
                "a": "Sí. Todos los dientes que no puedan conservarse se extraen en la misma sesión, colocándose de inmediato los 4 implantes y tomando las medidas digitales para los dientes fijos de 24 horas."
          },
          {
                "q": "¿Cuál es la tasa de éxito a largo plazo de All-on-4?",
                "a": "Estudios clínicos a más de 15 años registran tasas de éxito superiores al 98,2%. Nuestros implantes Straumann cuentan con garantía internacional de por vida."
          }
    ],
    "faqsPart2": [
          {
                "q": "¿Cuántos viajes a Antalya son necesarios para All-on-4?",
                "a": "Exactamente 2 visitas: 1ª Visita (3–5 días) para TAC 3D, cirugía y dientes fijos provisionales; 2ª Visita (5–7 días, a los 3 meses) para pruebas estéticas y entrega del puente definitivo de circonio 1.400 MPa."
          },
          {
                "q": "¿Qué incluye el paquete All-on-4 de Master Smile Studio?",
                "a": "Incluye 4 implantes por arcada, pilares multi-unit, dientes provisionales en 24h, puente definitivo de circonio, TAC 3D, medicación, hotel 4/5* con desayuno y traslados privados en Mercedes VIP."
          },
          {
                "q": "¿Puede cambiar el precio del paquete tras mi llegada a Antalya?",
                "a": "No. Tras evaluar sus radiografías en consulta virtual, entregamos un presupuesto oficial por escrito con precio cerrado garantizado y sin costes ocultos."
          },
          {
                "q": "¿Sentiré dolor durante la cirugía de 4 implantes? ¿Hay sedación?",
                "a": "El procedimiento es indoloro con anestesia local avanzada. Para pacientes con ansiedad o fobia dental, ofrecemos sedación consciente intravenosa a cargo de nuestro médico anestesiólogo."
          },
          {
                "q": "¿Pueden someterse a All-on-4 pacientes diabéticos o fumadores?",
                "a": "Sí. En diabéticos controlados (HbA1c < 7,5%) el porcentaje de éxito es similar al de no diabéticos. En fumadores se recomienda pausar el tabaco 2 semanas antes y después de la intervención."
          },
          {
                "q": "¿Cómo funciona el pasaporte de garantía de por vida?",
                "a": "Al concluir el tratamiento se entrega el pasaporte oficial con los números de serie de los implantes, garantizando sustitución de por vida en clínicas acreditadas a nivel mundial."
          },
          {
                "q": "¿Cómo se gestiona el seguimiento postoperatorio en mi país?",
                "a": "Nuestro equipo internacional realiza seguimiento constante por WhatsApp y videollamada, entregándole informe quirúrgico completo y radiografías para su dentista local."
          }
    ],
    "compareTitle": "Comparación Objetiva de Arcada Completa: All-on-4 vs. All-on-5 vs. All-on-6",
    "compareSubtitle": "La elección entre 4, 5 o 6 implantes depende del volumen óseo posterior, fuerza masticatoria y anchura maxilar.",
    "compareTableHeaders": {
      "criteria": "Criterio Clínico y Biomecánico",
      "all4": "Protocolo All-on-4",
      "all5": "All-on-5 (All-on-X)",
      "all6": "Protocolo All-on-6 (Estándar de Oro)"
    },
    "compareTableRows": [
      {
        "criteria": "Número de Implantes por Arcada",
        "all4": "4 Implantes de Titanio (2 rectos, 2 inclinados a 45°)",
        "all5": "5 Implantes de Titanio (Pérdida ósea asimétrica)",
        "all6": "6 Implantes de Titanio (2 frontales, 4 posteriores)"
      },
      {
        "criteria": "Capacidad de Dientes en la Prótesis",
        "all4": "10 a 12 Dientes (hasta el 1er molar)",
        "all5": "12 Dientes",
        "all6": "14 Dientes (Arcada completa con 2ºs molares)"
      },
      {
        "criteria": "Distribución de Fuerza Masticatoria",
        "all4": "Moderada a Alta (200 – 350 N)",
        "all5": "Alta (350 – 450 N)",
        "all6": "Máxima (450 – 600+ N, Mordida Fuerte)"
      },
      {
        "criteria": "Necesidad de Injerto Óseo / Sinus Lift",
        "all4": "Evitado en el 90% gracias a la inclinación a 45°",
        "all5": "Puede requerir injerto unilateral",
        "all6": "Puede requerir elevación de seno menor si hay atrofia posterior"
      },
      {
        "criteria": "Tensión de Cantilever (Extensión)",
        "all4": "Cantilever moderado (10 – 15 mm)",
        "all5": "Cantilever reducido",
        "all6": "Casi Cero (Rigidez mecánica y soporte total)"
      },
      {
        "criteria": "Factor de Seguridad ante Pérdida",
        "all4": "La pérdida de 1 implante obliga a rehacer toda la prótesis",
        "all5": "Los 4 implantes restantes sostienen temporalmente",
        "all6": "Si se pierde 1 implante, los otros 5 sostienen la prótesis con seguridad"
      },
      {
        "criteria": "Perfil de Paciente Recomendado",
        "all4": "Pérdida ósea avanzada, pacientes que evitan injertos",
        "all5": "Volumen óseo asimétrico entre izquierda y derecha",
        "all6": "Buen hueso posterior (>10 mm), mordida potente, pacientes activos"
      }
    ],
    "compareDecision": {
      "whenAll4Title": "¿Cuándo es All-on-4 la elección adecuada?",
      "whenAll4Text": "All-on-4 está indicado ante reabsorción ósea posterior severa para evitar elevaciones de seno o injertos complejos. Los implantes angulados a 45° se anclan en hueso frontal denso.",
      "whenAll6Title": "¿Cuándo es All-on-6 la opción superior?",
      "whenAll6Text": "All-on-6 se recomienda cuando se conserva altura ósea posterior (>10 mm), en pacientes con bruxismo o que buscan una arcada de 14 dientes con masticación sin restricciones."
    },
    "processTitle": "Protocolo de Precisión en 3 Fases: De la Planificación 3D al Circonio Definitivo",
    "processSubtitle": "Cada rehabilitación All-on-4 en Master Smile Studio sigue un estricto protocolo de cirugía guiada por ordenador y robótica CAD/CAM.",
    "processCards": [
      {
        "step": "FASE 01",
        "title": "TAC 3D CBCT y Guía Quirúrgica Computerizada",
        "text": "El TAC 3D de alta resolución analiza la densidad ósea en unidades Hounsfield y delimita nervios y senos. Una férula quirúrgica posiciona los 6 implantes con precisión submilimétrica.",
        "specs": [
          {
            "key": "Precisión",
            "val": "< 0.1 mm"
          },
          {
            "key": "Tipo de Cirugía",
            "val": "Mínimamente Invasiva Guiada"
          },
          {
            "key": "Estudio Óseo",
            "val": "Escala 3D Hounsfield"
          }
        ]
      },
      {
        "step": "FASE 02",
        "title": "Carga Inmediata Fija en 24 Horas",
        "text": "Al alcanzar un torque primario de 35–50 Ncm, se fijan los pilares multi-unit. En menos de 24 horas se atornilla un puente provisional reforzado sobre los 6 implantes.",
        "specs": [
          {
            "key": "Torque de Inserción",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Tiempo de Entrega",
            "val": "En 24 horas"
          },
          {
            "key": "Función",
            "val": "Dieta Blanda Inmediata"
          }
        ]
      },
      {
        "step": "FASE 03",
        "title": "Fresado Robótico CAD/CAM de Circonio Monolítico",
        "text": "Tras 3 meses de osteointegración, el escáner intraoral 3D registra la posición exacta de los implantes. Un puente de circonio monolítico alemán (1200+ MPa) se fresa y sinteriza a 1500°C.",
        "specs": [
          {
            "key": "Resistencia Flexión",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Calidad Material",
            "val": "Circonio Puro Alemán"
          },
          {
            "key": "Temp. Sinterizado",
            "val": "1500°C Alta Densidad"
          }
        ]
      }
    ],
    "costTitle": "Comparativa Internacional de Precios: Reino Unido / Alemania vs. Antalya (All-on-4)",
    "costSubtitle": "Descubra por qué miles de pacientes europeos eligen Master Smile Studio para su tratamiento All-on-4 sin renunciar a la máxima calidad.",
    "costTableHeaders": {
      "country": "Ubicación y Nivel de Clínica",
      "costPerArch": "Standard Private Healthcare Rates",
      "inclusions": "Servicios Incluidos en el Precio",
      "valueAdvantage": "Ventaja Master Smile Studio"
    },
    "costTableRows": [
      {
        "country": "Reino Unido (Harley Street / Clínicas Privadas)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Sólo cirugía y puente básico. Tomografía 3D, provisional, sedación y revisiones se facturan por separado.",
        "valueAdvantage": "Ahorro del 65% al 70% (VIP Inclusions a VIP Inclusions con nosotros) en sistemas suizos/alemanes auténticos."
      },
      {
        "country": "Alemania / Suiza (Clínicas Privadas)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Honorarios quirúrgicos y laboratorio. Alojamiento en hotel, traslados VIP y medicación no incluidos.",
        "valueAdvantage": "Ahorro del 60% al 65% (VIP Inclusions a VIP Inclusions con nosotros) con titanio alemán/suizo idéntico."
      },
      {
        "country": "Master Smile Studio (Antalya, Turquía) ⭐",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "100% Todo Incluido: 4 Implantes, Puente Provisional Fijo, Puente Definitivo de Zirconio, Tomografía 3D, Hotel 5 Estrellas, Traslados VIP, Pasaporte de Garantía Vitalicia.",
        "valueAdvantage": "Garantía de precio fijo 100% transparente sin costes ocultos ni sorpresas."
      }
    ]
  },
  "ru": {
    "introBadge": "НЕСЪЕМНЫЕ ЗУБЫ ЗА 24 ЧАСА",
    "introTitle": "Имплантация All-on-4 в Анталье, Турция",
    "introLead": "Несъемное протезирование всей челюсти на 4 стратегических имплантах — новые зубы за 24 часа без костной пластики.",
    "introP1": "В клинике Master Smile Studio имплантация All-on-4 — это передовое решение для пациентов с выраженной атрофией кости или полным отсутствием зубов. Установка двух боковых имплантов под углом до 45 градусов и двух прямых в переднем отделе позволяет обойти гайморовы пазухи и нижнечелюстной нерв без необходимости сложного синус-лифтинга.",
    "introP2": "Протокол All-on-4 максимально использует доступную плотную кость, обеспечивая высокую первичную стабилизацию (35–50 Нсм) для немедленной нагрузки. Уже через 24 часа пациент получает прочно зафиксированный винтовой адаптационный мост, возвращая уверенную улыбку и жевательную функцию в день операции.",
    "introP3Lead": "В зависимости от объема кости и клинических задач, вы также можете рассмотреть ",
    "introP3LinkAll4": "Имплантацию All-on-6",
    "introP3Mid": ", специализированные ",
    "introP3LinkZygoma": "Скуловые Импланты (Зигома) при Экстремальной Убыли Кости",
    "introP3And": " и операцию ",
    "introP3LinkSinus": "Синус-Лифтинга",
    "introP3Tail": ".",
    "materialsTitle": "Материалы Мостов All-on-4: Почему Мы Используем Монолитный Цирконий",
    "materialsSubtitle": "В All-on-4 всего 4 импланта несут всю жевательную нагрузку челюсти (от 200 до 600 Н). Узнайте, почему мы изготавливаем монолитный многослойный цирконий вместо дешевого акрила или хрупкого металла.",
    "materialsComparisonBadge": "Лабораторное сравнение",
    "materialsComparisonAlt": "Сравнение материалов мостов All-on-4 на имплантах: Монолитный цирконий, гибридный акрил и металлокерамика",
    "materialsComparisonText": "Наглядное лабораторное сравнение 3 материалов для постоянных мостов All-on-4 (металлокерамика, гибридный акрил и монолитный немецкий цирконий) по эстетике, светопроницаемости и прочности.",
    "materialsSpecLabels": {
      "material": "Тип Материала",
      "strength": "Прочность на Изгиб",
      "chipping": "Риск Сколов",
      "lifespan": "Срок Службы"
    },
    "materialsCards": [
          {
                "title": "Монолитный Многослойный Цирконий",
                "sub": "100% Цельный Немецкий Цирконий + Фрезерованная Титановая Балка",
                "badge": "ЗОЛОТОЙ СТАНДАРТ MASTER SMILE",
                "isGold": true,
                "material": "1400 МПа CAD/CAM Цирконий",
                "strength": "1400 МПа",
                "chippingRisk": "Нулевой Риск Сколов",
                "lifespan": "Пожизненно (25+ Лет)",
                "verdictLabel": "КЛИНИЧЕСКИЙ ВЕРДИКТ",
                "verdictText": "Выбор номер один в Master Smile Studio для более чем 95% полных дуг. Высочайшая биосовместимость, естественная эстетика и пожизненная прочность без сколов.",
                "features": [
                      {
                            "text": "Ноль сколов и переломов при интенсивном жевании",
                            "status": "good"
                      },
                      {
                            "text": "Идеально гладкая поверхность защищает от налета и периимплантита",
                            "status": "good"
                      },
                      {
                            "text": "Беспористая структура: 100% устойчивость к пятнам и запахам",
                            "status": "good"
                      },
                      {
                            "text": "Многослойный градиент воссоздает природную светопроницаемость",
                            "status": "good"
                      }
                ]
          },
          {
                "title": "Гибридный Титано-Акриловый Мост",
                "sub": "Металлический каркас + базисный акрил и композитные зубы",
                "material": "PMMA Акрил + Металлический Каркас",
                "strength": "100 МПа",
                "chippingRisk": "Высокая Стираемость и Сколы",
                "lifespan": "3 – 5 Лет (Временный)",
                "verdictLabel": "КЛИНИЧЕСКИЙ ВЕРДИКТ",
                "verdictText": "Приемлем только как бюджетный временный мост. Не рекомендуется как постоянное решение на 20+ лет из-за стираемости пластмассы, запаха и риска отламывания зубов.",
                "features": [
                      {
                            "text": "Абразивный износ стирает зубы и снижает высоту прикуса",
                            "status": "bad"
                      },
                      {
                            "text": "Пористая смола впитывает бактерии, пищевые масла и запахи",
                            "status": "bad"
                      },
                      {
                            "text": "Отдельные пластмассовые зубы могут скалываться при твердой пище",
                            "status": "bad"
                      },
                      {
                            "text": "Требует частого обслуживания и полной замены через несколько лет",
                            "status": "warn"
                      }
                ]
          },
          {
                "title": "Металлокерамика (PFM)",
                "sub": "Литой каркас Co-Cr + полевошпатовая керамика",
                "material": "Слоистая Полевошпатовая Керамика",
                "strength": "450 МПа",
                "chippingRisk": "Сколы Керамики",
                "lifespan": "8 – 12 Лет",
                "verdictLabel": "КЛИНИЧЕСКИЙ ВЕРДИКТ",
                "verdictText": "Устаревшая технология для полных челюстей. Несмотря на прочный каркас, жевательная нагрузка на 4 имплантах часто вызывает сколы керамики с обнажением серого металла.",
                "features": [
                      {
                            "text": "Керамика склонна к сколам под высокой жевательной нагрузкой All-on-4",
                            "status": "bad"
                      },
                      {
                            "text": "Темный металлический край становится заметен при рецессии десны",
                            "status": "bad"
                      },
                      {
                            "text": "Большой вес создает ощущение тяжести и громоздкости во рту",
                            "status": "warn"
                      },
                      {
                            "text": "Ремонт сколотой керамики в полости рта практически невозможен",
                            "status": "bad"
                      }
                ]
          }
    ],
    "materialsTableHeaders": {
      "criteria": "Критерий Сравнения",
      "zirconia": "Монолитный Цирконий (Наш Стандарт)",
      "acrylic": "Гибридный Акрил (Эконом-Вариант)",
      "pfm": "Металлокерамика (PFM)"
    },
    "materialsTableRows": [
      {
        "criteria": "Риск Сколов / Переломов",
        "zirconia": "Близок к нулю (Монолит 1200+ МПа)",
        "acrylic": "Высокий (Зубы отпадают)",
        "pfm": "Умеренный (Сколы керамики)"
      },
      {
        "criteria": "Истирание и Снижение Прикуса",
        "zirconia": "Ноль Истирания (Стабильный Прикус)",
        "acrylic": "Стирается за 3–5 л. (Боль в ВНЧС)",
        "pfm": "Высокая устойчивость к истиранию"
      },
      {
        "criteria": "Окрашивание и Запахи",
        "zirconia": "100% Без Пор (Ноль Пятен)",
        "acrylic": "Пористый (Впитывает кофе и запахи)",
        "pfm": "Глазурованный (Не красится)"
      },
      {
        "criteria": "Биосовместимость с Десной",
        "zirconia": "Антибактериальный (Защищает десну)",
        "acrylic": "Скапливает налёт (Риск инфекции)",
        "pfm": "Возможная реакция на металл"
      },
      {
        "criteria": "Естественная Прозрачность",
        "zirconia": "Натуральная Многослойность",
        "acrylic": "Искусственная матовость пластика",
        "pfm": "Серый отблеск металла"
      },
      {
        "criteria": "Клинический Срок Службы",
        "zirconia": "Пожизненно / 25+ Лет",
        "acrylic": "3 – 7 Лет",
        "pfm": "8 – 12 Лет"
      }
    ],
    "packagesTitle": "Пакеты и Цены на Имплантацию All-on-4 в Анталье",
    "packagesSubtitle": "Прозрачные цены «все включено» за челюсть с 4 премиальными титановыми имплантами, циркониевым мостом CAD/CAM, отелем 5* и VIP-трансфером.",
    "durationLabel": "Длительность Лечения:",
    "includedLabel": "Что входит в этот пакет:",
    "pricePerArchLabel": "Цена за 1 челюсть",
    "getQuoteBtn": "Получить Бесплатный Расчет",
    "mostPopularBadge": "САМЫЙ ПОПУЛЯРНЫЙ",
    "faqTitle": "Часто Задаваемые Вопросы об Имплантации All-on-4",
    "faqSubtitle": "Подтвержденные хирургами ответы обо всех клинических, биомеханических и туристических аспектах лечения All-on-4 в Анталье.",
    "faqGroup1Title": "Клинические и Хирургические Вопросы All-on-4",
    "faqGroup2Title": "Медицинский Туризм, Пакеты и Пожизненная Гарантия",
    "packages": [
      {
        "name": "ALL-ON-4 – NUCLEOSS",
        "brand": "NucleOSS (Grade 4 Pure Titanium)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x NucleOSS Dental Implants per Arch",
          "10-12x Fixed Temporary Teeth (Same Visit)",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "Local Anesthesia & Post-op Medication Pack",
          "Airport-Hotel VIP Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory Work Included"
        ]
      },
      {
        "name": "ALL-ON-4 – DXL GERMAN",
        "brand": "DXL (German Engineering)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x DXL German Titanium Implants",
          "10-12x Fixed Temporary Teeth",
          "10-12x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "VIP Airport & Hotel Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory & CAD/CAM Milling"
        ]
      },
      {
        "name": "ALL-ON-4 – STRAUMANN",
        "brand": "Straumann (Swiss Gold Standard)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": { "USD": "Custom Quote", "EUR": "Custom Quote", "GBP": "Custom Quote" },
        "included": [
          "4x Straumann Swiss Titanium Implants",
          "10-12x Fixed High-Grade Temporary Teeth",
          "10-12x Final Monolithic Zirconia Teeth",
          "Lifetime International Manufacturer Passport",
          "Luxury 5-Star Hotel Stay Included",
          "VIP Mercedes Chauffeur Transfers",
          "Dedicated Personal Patient Host"
        ]
      }
    ],
    "faqsPart1": [
          {
                "q": "Как всего 4 импланта могут надежно удерживать полный зубной ряд?",
                "a": "Секрет протокола All-on-4 заключается в установке двух боковых имплантов под углом до 45 градусов. Это задействует плотную переднюю кость челюсти и создает жесткий многоугольный фундамент, равномерно распределяющий нагрузку на 10–12 зубов."
          },
          {
                "q": "Кто является идеальным кандидатом для имплантации All-on-4?",
                "a": "All-on-4 оптимален для пациентов с полным отсутствием зубов, подвижными или разрушенными зубами, тяжелым пародонтитом или значительной убылью кости в боковых отделах, где обычные импланты потребовали бы костной пластики."
          },
          {
                "q": "Требуется ли синус-лифтинг или костная пластика при All-on-4?",
                "a": "Более чем в 90% случаев протокол All-on-4 позволяет полностью обойтись без костной пластики и синус-лифтинга. Наклонная фиксация имплантов безопасно обходит гайморовы пазухи и нервные каналы."
          },
          {
                "q": "Как устанавливаются несъемные временные зубы за 24 часа?",
                "a": "При достижении первичного торка 35–50 Нсм фиксируются мультиюнит-абатменты. В течение 24 часов на 4 имплантах винтовым способом закрепляется армированный временный мост — вы не остаетесь без зубов ни одного дня."
          },
          {
                "q": "Какой диеты следует придерживаться в период 3-месячного приживления?",
                "a": "В период остеоинтеграции (3 месяца) показана мягкая пища (рыба, паста, яйца, тушеные овощи, мягкое филе). Следует избегать твердых орехов и сухарей до установки постоянного циркониевого моста."
          },
          {
                "q": "Какой материал используется для постоянного моста All-on-4?",
                "a": "В клинике Master Smile Studio золотым стандартом является 100% монолитный многослойный немецкий цирконий (1400 МПа) на титановой фрезерованной балке. Мы не используем хрупкий акрил или скалывающуюся керамику."
          },
          {
                "q": "Протез All-on-4 съемный или несъемный?",
                "a": "Мост All-on-4 на 100% несъемный, с винтовой фиксацией. Пациент не может снять его самостоятельно; это делает только врач на плановом осмотре. Дома уход осуществляется с помощью ирригатора (Waterpik)."
          },
          {
                "q": "Почему 3D-навигационный шаблон необходим при All-on-4?",
                "a": "Установка имплантов под углом 30–45 градусов требует ювелирной точности. Индивидуальный 3D-шаблон гарантирует субмиллиметровую точность (<0,1 мм), полностью защищая пазухи и нервы."
          },
          {
                "q": "Можно ли удалить разрушенные зубы во время операции All-on-4?",
                "a": "Да. Все подлежащие удалению зубы бережно удаляются в рамках той же операции, после чего сразу устанавливаются 4 импланта и снимаются цифровые слепки для моста 24h."
          },
          {
                "q": "Каков долгосрочный процент успешности All-on-4?",
                "a": "Клинические наблюдения на протяжении 15+ лет фиксируют успех All-on-4 свыше 98,2%. Швейцарские импланты Straumann обеспечивают пожизненную надежность."
          }
    ],
    "faqsPart2": [
          {
                "q": "Сколько поездок в Анталью требуется для лечения All-on-4?",
                "a": "Всего 2 визита: 1-й визит (3–5 дней) — 3D КТ, операция и несъемные зубы за 24 часа; 2-й визит (5–7 дней, через 3 месяца) — примерки и установка постоянного циркониевого моста 1400 МПа."
          },
          {
                "q": "Что входит в пакет All-on-4 клиники Master Smile Studio?",
                "a": "Включено абсолютно все: 4 импланта на челюсть, мультиюниты, несъемные зубы за 24 часа, постоянный циркониевый мост, 3D КТ, медикаменты, отель 4/5* с завтраком и VIP-трансфер на Mercedes."
          },
          {
                "q": "Может ли измениться цена пакета по прибытии в Анталью?",
                "a": "Нет. На основании рентгеновского снимка вы получаете официальный план лечения с фиксированной гарантированной стоимостью без скрытых доплат."
          },
          {
                "q": "Будет ли больно во время операции? Возможна ли седация?",
                "a": "Процедура абсолютно безболезненна благодаря современной анестезии. Для пациентов с дентофобией мы предлагаем комфортную внутривенную седацию под контролем штатного анестезиолога."
          },
          {
                "q": "Можно ли ставить All-on-4 при диабете или курении?",
                "a": "Да. При компенсированном диабете (HbA1c < 7,5%) приживаемость не отличается от нормы. Курильщикам рекомендуется сократить курение за 2 недели до и после операции."
          },
          {
                "q": "Как работает международный паспорт пожизненной гарантии?",
                "a": "После лечения вы получаете официальный паспорт имплантации с серийными номерами каждого импланта, дающий право на пожизненную замену в сертифицированных клиниках по всему миру."
          },
          {
                "q": "Как осуществляется наблюдение после возвращения домой?",
                "a": "Наш международный отдел ведет постоянную поддержку через WhatsApp и видеосвязь. Вы получаете полную выписку и контрольные снимки для вашего стоматолога по месту жительства."
          }
    ],
    "compareTitle": "Объективное Сравнение Протоколов: All-on-4 vs. All-on-5 vs. All-on-6",
    "compareSubtitle": "Выбор между 4, 5 или 6 имплантами зависит от объема кости в боковых отделах, силы прикуса и ширины челюсти.",
    "compareTableHeaders": {
      "criteria": "Клинический и Биомеханический Критерий",
      "all4": "Протокол All-on-4",
      "all5": "All-on-5 (All-on-X)",
      "all6": "Протокол All-on-6 (Золотой Стандарт)"
    },
    "compareTableRows": [
      {
        "criteria": "Количество Имплантов на Челюсть",
        "all4": "4 Титановых Импланта (2 прямых, 2 под углом 45°)",
        "all5": "5 Титановых Имплантов (При асимметричной атрофии)",
        "all6": "6 Титановых Имплантов (2 передних, 4 боковых)"
      },
      {
        "criteria": "Количество Зубов в Мостовидном Протезе",
        "all4": "От 10 до 12 Зубов (до 1-го моляра)",
        "all5": "12 Зубов",
        "all6": "14 Зубов (Полный зубной ряд включая 2-е моляры)"
      },
      {
        "criteria": "Распределение Жевательного Давления",
        "all4": "Среднее - Высокое (200 – 350 Н)",
        "all5": "Высокое (350 – 450 Н)",
        "all6": "Максимальное (450 – 600+ Н, Мощный Прикус)"
      },
      {
        "criteria": "Необходимость Костной Пластики / Синус-Лифтинга",
        "all4": "Исключается в 90% случаев за счет наклона 45°",
        "all5": "Может потребоваться с одной стороны",
        "all6": "Может потребоваться малый синус-лифтинг при атрофии сзади"
      },
      {
        "criteria": "Консольное Напряжение (Cantilever)",
        "all4": "Умеренная консоль (10 – 15 мм)",
        "all5": "Уменьшенная консоль",
        "all6": "Близко к нулю (Максимальная жесткость конструкции)"
      },
      {
        "criteria": "Запас Прочности при Отторжении",
        "all4": "Потеря 1 импланта требует полной переделки моста",
        "all5": "Оставшиеся 4 импланта временно удерживают мост",
        "all6": "При потере 1 импланта оставшиеся 5 надежно удерживают мост"
      },
      {
        "criteria": "Основной Профиль Пациента",
        "all4": "Выраженная атрофия кости, нежелание делать костную пластику",
        "all5": "Асимметрия объема кости слева и справа",
        "all6": "Достаточный объем кости (>10 мм), сильный прикус, активные пациенты"
      }
    ],
    "compareDecision": {
      "whenAll4Title": "Когда All-on-4 является правильным выбором?",
      "whenAll4Text": "All-on-4 показан при выраженной атрофии кости в боковых отделах челюсти, позволяя избежать сложного синус-лифтинга. Наклон задних имплантов под 45 градусов использует плотную переднюю кость.",
      "whenAll6Title": "Когда All-on-6 является наилучшим выбором?",
      "whenAll6Text": "All-on-6 рекомендуется при сохраненной высоте кости (>10 мм), при бруксизме (сжимании зубов) и для пациентов, желающих полноценный зубной ряд из 14 зубов с максимальной жевательной силой."
    },
    "processTitle": "3-Этапный Протокол Точности: От 3D-Планирования до Монолитного Циркония",
    "processSubtitle": "Каждая имплантация All-on-4 в Master Smile Studio выполняется по протоколу навигационной хирургии и роботизированного фрезерования CAD/CAM.",
    "processCards": [
      {
        "step": "ЭТАП 01",
        "title": "3D-КТ Диагностика и Навигационный Шаблон",
        "text": "Высокоточное 3D-КТ сканирование оценивает плотность кости в единицах Хаунсфилда (HU) и траекторию нервов. Индивидуальный хирургический шаблон позиционирует 6 имплантов с точностью до 0,1 мм.",
        "specs": [
          {
            "key": "Точность",
            "val": "< 0.1 мм"
          },
          {
            "key": "Метод",
            "val": "Малоинвазивный навигационный"
          },
          {
            "key": "Анализ Кости",
            "val": "Шкала Хаунсфилда 3D"
          }
        ]
      },
      {
        "step": "ЭТАП 02",
        "title": "Несъемный Мост с Немедленной Нагрузкой за 24 Часа",
        "text": "При первичном торке 35–50 Нсм устанавливаются мультиюнит-абатменты. В течение 24 часов фиксируется прочный временный винтовой мост, обеспечивая полноценную улыбку в первый день.",
        "specs": [
          {
            "key": "Первичный Торк",
            "val": "35 – 50 Нсм"
          },
          {
            "key": "Срок Установки",
            "val": "В течение 24 часов"
          },
          {
            "key": "Функция",
            "val": "Мягкая диета с 1-го дня"
          }
        ]
      },
      {
        "step": "ЭТАП 03",
        "title": "5-Осевое Роботизированное CAD/CAM Фрезерование Циркония",
        "text": "Через 3 месяца остеоинтеграции 3D-сканер фиксирует положение опор. Монолитный многослойный немецкий циркониевый мост (1200+ МПа) фрезеруется на станке и запекается при 1500°C.",
        "specs": [
          {
            "key": "Прочность на Изгиб",
            "val": "1200 – 1400 МПа"
          },
          {
            "key": "Материал",
            "val": "Цельный Немецкий Цирконий"
          },
          {
            "key": "Темп. Спекания",
            "val": "1500°C Высокая Плотность"
          }
        ]
      }
    ],
    "costTitle": "Международное Сравнение Цен: Великобритания / Германия vs Анталья (All-on-4)",
    "costSubtitle": "Узнайте, почему тысячи европейских пациентов выбирают Master Smile Studio для восстановления All-on-4 без компромиссов в качестве.",
    "costTableHeaders": {
      "country": "Страна и Уровень Клиники",
      "costPerArch": "Standard Private Healthcare Rates",
      "inclusions": "Включенные Услуги",
      "valueAdvantage": "Преимущество Master Smile Studio"
    },
    "costTableRows": [
      {
        "country": "Великобритания (Harley Street / Частные Клиники)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Только операция и базовый мост. 3D КТ, временные зубы, седация и осмотры оплачиваются отдельно.",
        "valueAdvantage": "Экономия 65% – 70% (VIP Inclusions у нас) на оригинальных швейцарских/немецких системах."
      },
      {
        "country": "Германия / Швейцария (Частные Клиники)",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "Хирургические расходы и лаборатория. Проживание в отеле, VIP-трансферы и медикаменты не включены.",
        "valueAdvantage": "Экономия 60% – 65% (VIP Inclusions у нас) на идентичном немецком/швейцарском титане."
      },
      {
        "country": "Master Smile Studio (Анталья, Турция) ⭐",
        "costPerArch": "Standard Private Healthcare Rates",
        "inclusions": "100% Все Включено: 4 Импланта, Временный Несъемный Мост, Постоянный Циркониевый Мост, 3D КТ, Отель 5*, VIP Трансферы, Пожизненный Паспорт Гарантии.",
        "valueAdvantage": "100% прозрачная фиксированная стоимость пакета без скрытых платежей."
      }
    ]
  }
};

export default function AllOnFourImplantDetailView() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');

  return (
    <div className={styles.wrapper}>
      {/* 1. CLINICAL INTRODUCTION & BIOMECHANICAL ANATOMY */}
      <section aria-labelledby="allon4-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="allon4-intro-heading" className={styles.introHeading}>
            {d.introTitle}
          </h2>
          <p className={styles.introLead}>{d.introLead}</p>

          <p className={styles.textP}>{d.introP1}</p>
          <p className={styles.textP}>{d.introP2}</p>

          <p className={styles.textItalic}>
            {d.introP3Lead}
            <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.linkGold}>
              {d.introP3LinkAll6 || d.introP3LinkAll4}
            </Link>
            {d.introP3Mid}
            <Link href="/treatments/dental-implants/zygomatic-implants" className={styles.linkGold}>
              {d.introP3LinkZygoma}
            </Link>
            {d.introP3And}
            <Link href="/treatments/dental-implants/sinus-lifting" className={styles.linkGold}>
              {d.introP3LinkSinus}
            </Link>
            {d.introP3Tail}
          </p>

          {/* Full-width 16:9 Clinical All-on-4 Procedure Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/eiTTit9PLrQ"
              title="All-on-4 Dental Implants in Antalya Clinical Procedure"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 2. OBJECTIVE FULL-ARCH COMPARISON: ALL-ON-4 vs ALL-ON-5 vs ALL-ON-6 */}
      <section aria-labelledby="allon4-compare-heading" className={styles.compareSection}>
        <div className={styles.container}>
          <div className={styles.compareHeader}>
            <h2 id="allon4-compare-heading" className={styles.compareTitle}>
              {d.compareTitle}
            </h2>
            <p className={styles.compareSubtitle}>{d.compareSubtitle}</p>
          </div>

          <div className={styles.compareTableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.compareTh}>{d.compareTableHeaders.criteria}</th>
                  <th className={styles.compareThHighlight}>{d.compareTableHeaders.all4}</th>
                  <th className={styles.compareTh}>{d.compareTableHeaders.all5}</th>
                  <th className={styles.compareTh}>{d.compareTableHeaders.all6}</th>
                </tr>
              </thead>
              <tbody>
                {d.compareTableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className={styles.compareTd}>
                      <strong>{row.criteria}</strong>
                    </td>
                    <td className={`${styles.compareTd} ${styles.compareTdHighlight}`}>
                      {row.all4}
                    </td>
                    <td className={styles.compareTd}>{row.all5}</td>
                    <td className={styles.compareTd}>{row.all6}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.compareDecisionBox}>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenAll4Title}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenAll4Text}</p>
            </div>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenAll6Title}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenAll6Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-PHASE PRECISION PROTOCOL (HORIZONTAL PEEK CAROUSEL ON MOBILE) */}
      <section aria-labelledby="allon4-process-heading" className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <h2 id="allon4-process-heading" className={styles.processTitle}>
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

      {/* 4. ALL-ON-4 PERMANENT BRIDGE MATERIALS COMPARISON */}
      <section aria-labelledby="allon4-materials-heading" className={styles.materialsSection}>
        <div className={styles.container}>
          <div className={styles.materialsHeader}>
            <h2 id="allon4-materials-heading" className={styles.materialsTitle}>
              {d.materialsTitle}
            </h2>
            <p className={styles.materialsSubtitle}>{d.materialsSubtitle}</p>
          </div>

          {/* Comparative Trio Showcase Banner */}
          <div className={styles.materialsComparisonBanner}>
            <div className={styles.materialsComparisonImgWrap}>
              <Image
                src="/treatments/materials/all-on-4-dental-implant-bridge-materials-comparison-antalya.webp"
                alt={d.materialsComparisonAlt || "All-on-4 dental implant bridge materials comparison: Monolithic Zirconia vs Hybrid Acrylic vs PFM"}
                width={1600}
                height={1194}
                className={styles.materialsComparisonImg}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
              />
            </div>
            <div className={styles.materialsComparisonCaption}>
              <span className={styles.comparisonCaptionBadge}>
                {d.materialsComparisonBadge || "Dental Lab Comparison"}
              </span>
              <p className={styles.comparisonCaptionText}>
                {d.materialsComparisonText || "Direct side-by-side dental laboratory comparison of all 3 permanent All-on-4 bridge materials (PFM, Hybrid Acrylic, and Monolithic German Zirconia)."}
              </p>
            </div>
          </div>

          {/* 3 Material Cards */}
          <div className={styles.materialsGrid}>
            {d.materialsCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className={`${styles.materialCard} ${card.isGold ? styles.materialCardGold : ''}`}
              >
                {card.badge && (
                  <span className={card.isGold ? styles.materialGoldBadge : styles.materialStandardBadge}>
                    {card.badge}
                  </span>
                )}

                <div className={styles.materialCardImgWrap}>
                  <Image
                    src={card.image || MATERIAL_CARD_DEFAULT_IMAGES[cIdx]?.src || '/treatments/materials/monolithic-multi-layer-zirconia-all-on-4-bridge.webp'}
                    alt=""
                    aria-hidden="true"
                    width={800}
                    height={597}
                    className={styles.materialCardImg}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div>
                  <h3 className={styles.materialCardTitle}>{card.title}</h3>
                  <span className={styles.materialCardSub}>{card.sub}</span>

                  {/* Engineering Strength & Durability Indicator */}
                  <div className={styles.strengthMeterBox}>
                    <div className={styles.strengthHeaderRow}>
                      <span className={styles.strengthLabel}>{d.materialsSpecLabels.strength}</span>
                      <span className={card.isGold ? styles.strengthValGold : styles.strengthVal}>
                        {card.strength}
                      </span>
                    </div>
                    <div className={styles.strengthBarTrack}>
                      <div
                        className={
                          card.isGold
                            ? styles.strengthBarFillGold
                            : cIdx === 1
                            ? styles.strengthBarFillAcrylic
                            : styles.strengthBarFillPfm
                        }
                      />
                    </div>
                    <div className={styles.metricPillsRow}>
                      <span className={`${styles.metricPill} ${card.isGold ? styles.metricPillGold : cIdx === 1 ? styles.metricPillDanger : styles.metricPillWarn}`}>
                        <span className={styles.metricPillDot} />
                        <span>{card.chippingRisk}</span>
                      </span>
                      <span className={`${styles.metricPill} ${card.isGold ? styles.metricPillGold : ''}`}>
                        <span className={styles.metricPillDot} />
                        <span>{card.lifespan}</span>
                      </span>
                    </div>
                  </div>

                  <ul className={styles.materialList}>
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className={styles.materialListItem}>
                        <span
                          className={
                            feat.status === 'good'
                              ? styles.iconGood
                              : feat.status === 'bad'
                              ? styles.iconBad
                              : styles.iconWarn
                          }
                          aria-hidden="true"
                        >
                          {feat.status === 'good' ? (
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                          ) : feat.status === 'bad' ? (
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          )}
                        </span>
                        <span className={styles.featText}>{feat.text}</span>
                      </li>
                    ))}
                  </ul>

                  {card.verdictText && (
                    <div className={card.isGold ? styles.verdictBoxGold : styles.verdictBox}>
                      <span className={styles.verdictLabel}>{card.verdictLabel || 'Clinical Verdict'}</span>
                      <p className={styles.verdictText}>{card.verdictText}</p>
                    </div>
                  )}
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
      <section aria-labelledby="allon4-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="allon4-packages-heading" className={styles.packagesTitle}>
              {d.packagesTitle}
            </h2>
            <p className={styles.packagesSubtitle}>{d.packagesSubtitle}</p>
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
                    <span className={styles.pkgPriceLabel}>{locale === 'tr' ? 'VIP Paket Kapsamı' : 'VIP All-Inclusive'}</span>
                    <strong className={styles.pkgPriceValue} style={{ fontSize: '0.95rem', color: '#059669', fontWeight: '700' }}>
                      {locale === 'tr' ? 'Kişiye Özel Fiyat Teklifi' : 'Personalized VIP Quote'}
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

      {/* 6. INTERNATIONAL COST COMPARISON SECTION (UK / GERMANY vs ANTALYA) */}
      <section aria-labelledby="allon4-cost-heading" className={styles.costSection}>
        <div className={styles.container}>
          <div className={styles.costHeader}>
            <h2 id="allon4-cost-heading" className={styles.costTitle}>
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
      <TreatmentClinicTourSection placeholderNum="A4-TOUR" />

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
      <section aria-labelledby="allon4-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="allon4-faq-heading" className={styles.faqTitle}>
              {d.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{d.faqSubtitle}</p>
          </div>

          {/* CLINICAL ALL-ON-4 FAQS (10 QUESTIONS) */}
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
      <TreatmentInteractiveQuoteForm defaultTreatment="All-on-4" />
    </div>
  );
}
