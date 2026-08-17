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
  introP3LinkAll6: string;
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
    "introBadge": "IMMEDIATE-LOAD FIXED FULL-ARCH RESTORATION",
    "introTitle": "All-on-4 Dental Implants in Istanbul: Same-Day Fixed Teeth Without Bone Grafting",
    "introLead": "Restore a complete, non-removable 10–12 tooth dental arch in a single surgical visit using 4 strategically angled implants (two anterior upright, two posterior tilted up to 45°)—bypassing maxillary sinuses and mental nerves without expensive, invasive bone grafts.",
    "introP1": "The All-on-4 biomechanical concept utilizes tilted posterior fixtures to maximize bone-to-implant contact in dense anterior cortical bone, avoiding maxillary sinus cavities in the upper jaw and the inferior alveolar nerve in the lower jaw.",
    "introP2": "At Master Smile Studio, computer-guided surgical stents guarantee sub-millimetric accuracy and high primary insertion torque (>35–50 Ncm), allowing immediate loading with a screw-retained provisional bridge within 24 hours of surgery.",
    "introP3Lead": "Depending on your individual bone volume or clinical goals, you can also explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", specialized ",
    "introP3LinkZygoma": "Zygomatic Implants for Severe Bone Loss",
    "introP3And": ", and ",
    "introP3LinkSinus": "Sinus Lifting Procedures",
    "introP3Tail": " — all available in our Istanbul center.",
    "materialsTitle": "All-on-6 Permanent Bridge Materials: Why We Use Monolithic Zirconia",
    "materialsSubtitle": "In All-on-6 restorations, 6 implants bear your entire jaw chewing load (200 to 600 Newtons). Discover why we exclusively engineer 100% Monolithic Multilayer Zirconia instead of cheaper acrylic or fragile porcelain.",
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
        "material": "1200+ MPa CAD/CAM Zirconia",
        "strength": "1200 – 1400 MPa (Ultra-High)",
        "chippingRisk": "Near Zero (Monolithic Solid)",
        "lifespan": "25+ Years / Lifetime",
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
        "strength": "80 – 120 MPa (Low)",
        "chippingRisk": "High (Teeth can pop off)",
        "lifespan": "3 – 7 Years",
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
        "strength": "350 – 450 MPa (Medium)",
        "chippingRisk": "Moderate to High (Chipping)",
        "lifespan": "8 – 12 Years",
        "features": [
          {
            "text": "Porcelain delaminates & chips under heavy 6-implant load",
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
    "packagesTitle": "All-on-6 Implant Package Deals & Pricing in Istanbul",
    "packagesSubtitle": "Transparent, all-inclusive pricing per arch with 6 premium titanium implants, CAD/CAM zirconia bridge, 5-star hotel stay, and private VIP transfers.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "What's Included in This Package:",
    "pricePerArchLabel": "Price per jaw / arch",
    "getQuoteBtn": "Get Free Personalized Quote",
    "mostPopularBadge": "MOST POPULAR",
    "faqTitle": "Frequently Asked Questions About All-on-6 Implants",
    "faqSubtitle": "Clear, clinically validated answers to help you understand every surgical, biomechanical, and travel aspect of your All-on-6 transformation in Istanbul.",
    "faqGroup1Title": "Specialized All-on-6 Clinical & Biomechanical FAQs",
    "faqGroup2Title": "Health Tourism, Inclusions & Lifetime Warranty FAQs",
    "packages": [
      {
        "name": "ALL-ON-6 – NUCLEOSS",
        "brand": "NucleOSS (Turkish Premium Quality)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg",
        "included": [
          "6x NucleOSS Dental Implants per Arch",
          "12-14x Fixed Temporary Teeth (Same Visit)",
          "12-14x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "Local Anesthesia & Post-op Medication Pack",
          "Airport-Hotel VIP Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory Work Included"
        ],
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        }
      },
      {
        "name": "ALL-ON-6 – DXL GERMAN",
        "brand": "DXL (German Engineering)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg",
        "included": [
          "6x DXL German Titanium Implants",
          "12-14x Fixed Temporary Teeth",
          "12-14x Final Permanent Zirconia Teeth",
          "3D CBCT Surgical Planning Guide",
          "VIP Airport & Hotel Transfers",
          "Hotel Stay with Bed & Breakfast",
          "Full Laboratory & CAD/CAM Milling"
        ],
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        }
      },
      {
        "name": "ALL-ON-6 – STRAUMANN",
        "brand": "Straumann (Swiss Gold Standard)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg",
        "included": [
          "6x Straumann Swiss Titanium Implants",
          "12-14x Fixed High-Grade Temporary Teeth",
          "12-14x Final Monolithic Zirconia Teeth",
          "Lifetime International Manufacturer Passport",
          "Luxury 5-Star Hotel Stay Included",
          "VIP Mercedes Chauffeur Transfers",
          "Dedicated Personal Patient Host"
        ],
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "popular": true
      },
      {
        "name": "ALL-ON-6 – MEGAGEN",
        "brand": "Megagen AnyRidge (Korean Technology)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "https://sohodent.com/doc/data1/All-on-4-package-10.jpg",
        "included": [
          "6x Megagen AnyRidge Implants per Arch",
          "12-14x Fixed Temporary Teeth",
          "12-14x Final Zirconia Bridge Teeth",
          "3D CBCT Tomography & Surgical Guide",
          "VIP Airport-Hotel Transfers",
          "Hotel Stay with Bed & Breakfast"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – NEODENT",
        "brand": "Neodent (Straumann Group)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg",
        "included": [
          "6x Neodent Implants per Arch",
          "12-14x Fixed Temporary Teeth",
          "12-14x Final Zirconia Bridge Teeth",
          "3D CBCT Tomography & Planning",
          "VIP Airport-Hotel Transfers",
          "Hotel Stay with Bed & Breakfast"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – HIOSSEN",
        "brand": "Hiossen (American Brand)",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg",
        "included": [
          "6x Hiossen American Implants per Arch",
          "12-14x Fixed Temporary Teeth",
          "12-14x Final Zirconia Bridge Teeth",
          "3D CBCT Tomography & Planning",
          "VIP Airport-Hotel Transfers",
          "Hotel Stay with Bed & Breakfast"
        ],
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        }
      }
    ],
    "faqsPart1": [
      {
        "q": "What is the primary biomechanical difference between All-on-6 and All-on-4?",
        "a": "All-on-6 utilizes six titanium fixtures per jaw rather than four. The additional two posterior implants provide wider surface contact and distribute heavy occlusal chewing forces more evenly, supporting a full 14-tooth dental arch with reduced stress on individual implants."
      },
      {
        "q": "Who is the ideal candidate for All-on-6 dental implants?",
        "a": "Patients with sufficient jawbone width and height in the posterior premolar/molar regions, younger patients with strong bite forces, or individuals seeking maximum chew strength and a complete 14-tooth dental arch without posterior cantilevers."
      },
      {
        "q": "Does All-on-6 require bone grafting or sinus lifting?",
        "a": "Because six upright or moderately angled implants require posterior bone anchorage, patients with severe bone atrophy in the upper jaw may require a minor sinus lifting or bone augmentation before or during implant placement."
      },
      {
        "q": "How does the same-day fixed temporary bridge work for All-on-6?",
        "a": "Within 24 hours of computer-guided surgery, a custom screw-retained temporary bridge is securely attached to your six implants. You never leave our Istanbul clinic without fixed, functional, aesthetic teeth."
      },
      {
        "q": "What should I eat during the 3-month osseointegration period?",
        "a": "During the 3-month bone healing phase, we recommend a nutritious soft-chew diet (steamed fish, pasta, eggs, vegetables, tender chicken). Avoid biting directly into hard nuts or tough crusts until your permanent zirconia bridge is delivered."
      },
      {
        "q": "What material is used for the permanent All-on-6 bridge?",
        "a": "We exclusively mill custom 100% Monolithic Multilayer German Zirconia (1200+ MPa) reinforced with a precision CAD/CAM titanium substructure. We never use fragile plastic acrylics or breakable porcelain layers."
      },
      {
        "q": "Is the All-on-6 restoration fixed or removable by the patient?",
        "a": "The All-on-6 bridge is 100% fixed and non-removable. It is securely screwed into multi-unit abutments and can only be accessed by a dental professional during routine hygiene appointments."
      },
      {
        "q": "Why is 3D digital computer-guided surgery vital for All-on-6?",
        "a": "Placing six implants requires exact 3D positioning to ensure parallelism, optimal bone contact, and perfect screw access hole alignment for your permanent zirconia bridge with sub-millimeter precision."
      },
      {
        "q": "Can failing teeth be extracted during the same All-on-6 surgery?",
        "a": "Yes. Any remaining damaged, decayed, or mobile teeth are gently extracted in the same surgical session, immediately followed by the placement of the six implants and temporary bridge fitting."
      },
      {
        "q": "What is the long-term clinical success rate of All-on-6 implants?",
        "a": "Clinical research over 15+ years shows an All-on-6 success rate exceeding 98.5%. With proper oral hygiene and regular check-ups, premium Straumann and German DXL implants are engineered to last a lifetime."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many visits to Istanbul are required for All-on-6 treatment?",
        "a": "Exactly 2 visits are required. Visit 1 (3–5 days) covers 3D CBCT diagnostics, surgery, and immediate temporary teeth. Visit 2 (5–7 days, after 3 months) is for digital shade matching, precision try-ins, and final permanent Zirconia bridge delivery."
      },
      {
        "q": "What is included in the Master Smile Studio All-on-6 package?",
        "a": "Our all-inclusive packages include 6 premium titanium implants, 12-14 temporary teeth, 12-14 permanent monolithic Zirconia teeth, 3D CBCT planning, surgical medications, 4/5-star hotel accommodation with breakfast, and VIP Mercedes transfers."
      },
      {
        "q": "Will my package price change once I arrive in Istanbul?",
        "a": "No. The personalized treatment plan and quote provided from your initial X-ray consultation is a fixed price guarantee with zero hidden medical, laboratory, or transfer fees."
      },
      {
        "q": "Will I feel pain during the 6-implant surgery? Is sedation available?",
        "a": "The entire procedure is painless under computerized local anesthesia. For anxious patients, we also offer certified IV conscious sedation to ensure total relaxation throughout the surgery."
      },
      {
        "q": "Can patients with diabetes or smokers undergo All-on-6?",
        "a": "Yes. Controlled diabetes is fully compatible with implant success. For smokers, reducing or pausing smoking during the initial 2-week post-op window ensures optimal soft-tissue healing and bone integration."
      },
      {
        "q": "How does the international lifetime warranty passport work?",
        "a": "You receive an official manufacturer implant passport containing the unique serial number and lot barcode for every fixture, providing authentic global lifetime warranty coverage."
      },
      {
        "q": "How is post-operative follow-up managed in my home country?",
        "a": "Our international patient coordination department provides 24/7 direct WhatsApp support, scheduled video check-ins with our chief surgeons, and ongoing clinical guidance throughout your healing phase."
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
    "processSubtitle": "Every All-on-4 restoration follows a rigid computer-guided surgical workflow and 5-axis robotic CAD/CAM milling for 98.2% osseointegration success.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Tomography & Virtual Surgical Stent",
        "text": "High-resolution CBCT mapping assesses bone volume and anatomical danger zones, planning tilted posterior implants to maximize bone anchoring without bone grafting.",
        "specs": [
          {
            "key": "Precision",
            "val": "< 0.1 mm"
          },
          {
            "key": "Implant Angulation",
            "val": "45° Posterior Tilted"
          },
          {
            "key": "Bone Grafting",
            "val": "Zero Graft (Bypassed)"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Same-Day Immediate Fixed Bridge (24h)",
        "text": "Screw-retained multi-unit abutments receive an immediate full-arch temporary bridge within 24 hours, ensuring functional chewing and aesthetic confidence.",
        "specs": [
          {
            "key": "Insertion Torque",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Delivery Time",
            "val": "24 Hours"
          },
          {
            "key": "Retention",
            "val": "Screw-Retained"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "5-Axis CAD/CAM Monolithic Zirconia Bridge",
        "text": "After 3 months of osseointegration, intraoral scans capture the soft tissue, robotically milling a 1200+ MPa monolithic multilayer German zirconia bridge.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Solid Zirconia + Titanium"
          },
          {
            "key": "Longevity",
            "val": "Lifetime Warranty"
          }
        ]
      }
    ],
    "costTitle": "International Price & Treatment Comparison: UK / Germany vs. Istanbul",
    "costSubtitle": "Understand why thousands of European and UK patients choose Master Smile Studio for full-arch All-on-6 restoration without sacrificing material quality.",
    "costTableHeaders": {
      "country": "Destination / Clinic Tier",
      "costPerArch": "All-on-6 Cost (Per Jaw)",
      "inclusions": "What Is Included in the Price",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private)",
        "costPerArch": "£14,000 – £18,000",
        "inclusions": "Surgery and standard bridge only. 3D CBCT, temporary teeth, sedation, and check-ups billed separately.",
        "valueAdvantage": "Save 65% – 70% (£4,700 – £8,600 with us) on genuine Straumann/German systems."
      },
      {
        "country": "Germany / Switzerland (Private Clinic)",
        "costPerArch": "€13,000 – €17,000",
        "inclusions": "Surgical fees and lab work. Hotel accommodation, VIP transfers, and medications not covered.",
        "valueAdvantage": "Save 60% – 65% (€5,500 – €10,000 with us) with identical German/Swiss titanium."
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey)",
        "costPerArch": "€5,500 – €10,000 / £4,700 – £8,600",
        "inclusions": "All-Inclusive: 6 Implants, Temporary Bridge, Final Zirconia Bridge, 3D CBCT, 5-Star Hotel, VIP Mercedes Transfers, Lifetime Warranty Passport.",
        "valueAdvantage": "100% Fixed Transparent Package Price Guarantee with Zero Hidden Medical or Travel Fees."
      }
    ]
  },
  "tr": {
    "introBadge": "HEMEN YÜKLEMELİ SABİT TAM ÇENE RESTORASYONU",
    "introTitle": "İstanbul All-on-4 İmplant Tedavisi: Sinüs Lifting Olmadan 24 Saatte Sabit Dişler",
    "introLead": "İleri derecede kemik erimesi olan vakalarda bile, arka bölgeye 45 derece açıyla yerleştirilen 4 titanyum implant sayesinde sinüs lifting ameliyatına gerek kalmadan 24 saat içinde sabit dişlerinize kavuşun.",
    "introP1": "All-on-4 protokolü, arka azı bölgelerinde kemik yetersizliği yaşayan hastalar için geliştirilmiş bilimsel bir mühendislik harikasıdır. Arka implantların 45 derece açıyla yerleştirilmesi, mevcut kemik temas alanını maksimuma çıkarır ve sinüs lifting cerrahisini tamamen ortadan kaldırır.",
    "introP2": "Master Smile Studio’da bilgisayarlı 3D Tomografi (CBCT) kılavuzluğunda yerleştirilen implantlar 35–50 Ncm üzerinde primer tutuculuğa ulaşır. Bu sayede ameliyattan 24 saat sonra vidalı geçici sabit köprünüz takılır ve 3 ay sonra 1200+ MPa monolitik Alman zirkonyum kalıcı dişlerinize geçilir.",
    "introP3Lead": "Kemik yoğunluğunuza ve klinik hedeflerinize göre kliniğimizde ayrıca ",
    "introP3LinkAll4": "All-on-4 Diş İmplantı",
    "introP3Mid": ", ileri kemik erimeleri için ",
    "introP3LinkZygoma": "Zigomatik İmplant Tedavisi",
    "introP3And": " ve ",
    "introP3LinkSinus": "Sinüs Lifting Operasyonu",
    "introP3Tail": " seçeneklerini de değerlendirebilirsiniz.",
    "materialsTitle": "All-on-6 Kalıcı Köprü Materyalleri: Neden Monolitik Zirkonyum Kullanıyoruz?",
    "materialsSubtitle": "All-on-6 tedavisinde 6 implant tüm çenenin 200 ila 600 Newtonluk çiğneme kuvvetini taşır. Kliniğimizde neden ucuz akrilik veya kırılgan porselen yerine %100 Monolitik Çok Katmanlı Zirkonyum ürettiğimizi keşfedin.",
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
        "material": "1200+ MPa CAD/CAM Zirkonyum",
        "strength": "1200 – 1400 MPa (Ultra Yüksek)",
        "chippingRisk": "Sıfıra Yakın (Yekpare Blok)",
        "lifespan": "25+ Yıl / Ömür Boyu",
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
        "strength": "80 – 120 MPa (Düşük)",
        "chippingRisk": "Yüksek (Dişler kopabilir)",
        "lifespan": "3 – 7 Yıl",
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
        "strength": "350 – 450 MPa (Orta)",
        "chippingRisk": "Orta - Yüksek (Porselen Atması)",
        "lifespan": "8 – 12 Yıl",
        "features": [
          {
            "text": "6 implant yükünde porselen kırılması (chipping) sık görülür",
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
    "packagesTitle": "İstanbul All-on-6 İmplant Paketleri ve Fiyatları",
    "packagesSubtitle": "6 titanyum implant, monolitik zirkonyum köprü, 5 yıldızlı otel konaklaması ve VIP transfer dahil çene başı şeffaf paket fiyatları.",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Bu Pakete Dahil Olan Hizmetler:",
    "pricePerArchLabel": "Tek Çene Paket Fiyatı",
    "getQuoteBtn": "Ücretsiz Kişiselleştirilmiş Teklif Al",
    "mostPopularBadge": "EN ÇOK TERCİH EDİLEN",
    "faqTitle": "All-on-6 İmplant Tedavisi Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "İstanbul’daki All-on-6 tedaviniz hakkında tüm cerrahi, biyomekanik ve lojistik detayları aydınlatan hekim onaylı cevaplar.",
    "faqGroup1Title": "All-on-6 Klinik & Cerrahi Sorular",
    "faqGroup2Title": "Sağlık Turizmi, Paket Kapsamı ve Ömür Boyu Garanti",
    "packages": [
      {
        "name": "ALL-ON-6 – NUCLEOSS",
        "brand": "NucleOSS (Türk Premium Kalite)",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg",
        "included": [
          "Çene Başına 6x NucleOSS Titanyum İmplant",
          "12-14x Aynı Gün Vidalı Sabit Geçici Diş",
          "12-14x Kalıcı Monolitik Zirkonyum Diş",
          "3D Tomografi ve Cerrahi Kılavuz",
          "Lokal Anestezi ve Cerrahi İlaç Seti",
          "Havalimanı-Otel-Klinik VIP Transfer",
          "Oda & Kahvaltı Dahil Otel Konaklaması",
          "Tüm Laboratuvar ve Frezeleme Masrafları"
        ],
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        }
      },
      {
        "name": "ALL-ON-6 – DXL GERMAN",
        "brand": "DXL (Alman Mühendisliği)",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg",
        "included": [
          "6x DXL Alman Titanyum İmplant",
          "12-14x Sabit Geçici Dişler",
          "12-14x Kalıcı Zirkonyum Köprü",
          "3D Tomografi & Cerrahi Planlama",
          "VIP Transferler ve Otel Konaklaması",
          "Tüm Laboratuvar İşçiliği Dahil"
        ],
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        }
      },
      {
        "name": "ALL-ON-6 – STRAUMANN",
        "brand": "Straumann (İsviçre Altın Standart)",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg",
        "included": [
          "6x Straumann İsviçre Titanyum İmplant",
          "12-14x Üst Düzey Sabit Geçici Dişler",
          "12-14x Kalıcı Monolitik Zirkonyum Dişler",
          "Uluslararası Ömür Boyu Üretici Pasaportu",
          "5 Yıldızlı Lüks Otel Konaklaması",
          "VIP Mercedes Şoförlü Transferler",
          "Özel Kişisel Hasta Danışmanı"
        ],
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "popular": true
      },
      {
        "name": "ALL-ON-6 – MEGAGEN",
        "brand": "Megagen AnyRidge",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "https://sohodent.com/doc/data1/All-on-4-package-10.jpg",
        "included": [
          "6x Megagen İmplant",
          "12-14x Sabit Geçici Dişler",
          "12-14x Kalıcı Zirkonyum Dişler",
          "3D Tomografi, Otel ve VIP Transferler"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – NEODENT",
        "brand": "Neodent (Straumann Grubu)",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg",
        "included": [
          "6x Neodent İmplant",
          "12-14x Sabit Geçici Dişler",
          "12-14x Kalıcı Zirkonyum Dişler",
          "3D Tomografi, Otel ve VIP Transferler"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – HIOSSEN",
        "brand": "Hiossen USA",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg",
        "included": [
          "6x Hiossen Amerikan İmplant",
          "12-14x Sabit Geçici Dişler",
          "12-14x Kalıcı Zirkonyum Dişler",
          "3D Tomografi, Otel ve VIP Transferler"
        ],
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        }
      }
    ],
    "faqsPart1": [
      {
        "q": "All-on-6 ile All-on-4 arasındaki temel biyomekanik fark nedir?",
        "a": "All-on-6 tekniğinde çene başına 4 yerine 6 adet titanyum implant yerleştirilir. Ekstra 2 implant, çiğneme kuvvetini çene kemiğine daha geniş bir alanda yayarak 14 dişe kadar uzanan tam çene köprülerde maksimum stabilite sağlar."
      },
      {
        "q": "All-on-6 diş implantı için kimler ideal adaydır?",
        "a": "Arka azı bölgelerinde yeterli kemik yüksekliği ve kalınlığı bulunan hastalar, güçlü çiğneme kuvvetine sahip genç ve aktif bireyler ile 14 dişlik eksiksiz bir ark isteyen hastalar için en ideal çözümdür."
      },
      {
        "q": "All-on-6 tedavisinde kemik tozu veya sinüs lifting gerekir mi?",
        "a": "6 implantın yerleşimi için arka bölgelerde kemik desteği şarttır. Üst çenede kemik erimesi olan vakalarda cerrahi öncesinde veya aynı seansta küçük bir sinüs lifting veya kemik grefti gerekebilir."
      },
      {
        "q": "All-on-6 tedavisinde aynı gün geçici dişler nasıl takılır?",
        "a": "Bilgisayarlı 3D cerrahi kılavuzla implantlar yerleştirildikten sonraki 24 saat içinde, 6 implant üzerine vidalanan sabit geçici köprünüz takılır. Kliniğimizden asla dişsiz ayrılmazsınız."
      },
      {
        "q": "3 aylık iyileşme (kaynaşma) döneminde nasıl beslenmeliyim?",
        "a": "3 aylık kemikleşme sürecinde implantları korumak adına yumuşak kıvamlı gıdalar (balık, makarna, haşlanmış sebze, yumurta, yumuşak tavuk) tüketilmelidir. Kalıcı zirkonyum takılana dek sert kabuklu kuruyemişlerden kaçınılmalıdır."
      },
      {
        "q": "Kalıcı All-on-6 köprüsünde hangi malzeme kullanılır?",
        "a": "Kliniğimizde standart olarak 1200+ MPa dayanımlı, CAD/CAM frezelenmiş %100 Monolitik Çok Katmanlı Alman Zirkonyumu ve titanyum altyapı barı kullanılır. Asla kırılgan akrilik veya zayıf porselen kullanılmaz."
      },
      {
        "q": "All-on-6 protezi sabit midir, hasta tarafından çıkarılabilir mi?",
        "a": "All-on-6 protezi %100 sabittir ve vidalıdır; hasta tarafından çıkarılamaz. Yalnızca hekim tarafından rutin kontrollerde sökülebilir. Temizliği ağız duşu (Waterpik) ile evde rahatça yapılır."
      },
      {
        "q": "All-on-6 ameliyatında 3D cerrahi rehber neden hayati önem taşır?",
        "a": "6 implantın birbirine mükemmel paralellikte ve milimetrenin onda biri hassasiyetle yerleştirilmesi, kalıcı zirkonyum köprünün vidalama yuvalarının kusursuz oturması için 3D cerrahi kılavuz şarttır."
      },
      {
        "q": "Ağızdaki hasarlı dişler All-on-6 ameliyatında çekilebilir mi?",
        "a": "Evet. Ağızda kalan çürük, sallanan veya hasarlı dişler aynı cerrahi seansta çekilir; hemen ardından 6 implant yerleştirilip geçici sabit dişler takılır."
      },
      {
        "q": "All-on-6 implant tedavisinin uzun dönem başarı oranı nedir?",
        "a": "15 yılı aşkın klinik çalışmalarda All-on-6 başarı oranı %98.5'in üzerindedir. Doğru ağız bakımı ile Straumann ve Alman DXL implantları ömür boyu hizmet vermek üzere üretilmiştir."
      }
    ],
    "faqsPart2": [
      {
        "q": "All-on-6 tedavisi için İstanbul’a kaç kez gelmem gerekir?",
        "a": "Toplam 2 ziyaret gerekir: 1. Ziyaret (3–5 gün) 3D tomografi, cerrahi ve geçici sabit dişler; 2. Ziyaret (5–7 gün, 3 ay sonra) ise kalıcı monolitik zirkonyum köprünün provaları ve teslimatıdır."
      },
      {
        "q": "Master Smile Studio All-on-6 paketine neler dahildir?",
        "a": "6 adet titanyum implant, 12-14 geçici diş, 12-14 kalıcı monolitik zirkonyum diş, 3D tomografi, cerrahiler, ilaçlar, oda-kahvaltı dahil 4/5 yıldızlı otel ve VIP Mercedes transferler dahildir."
      },
      {
        "q": "İstanbul’a geldiğimde paket fiyatı değişir mi?",
        "a": "Hayır. Röntgen analiziniz sonrasında tarafınıza iletilen resmi tedavi planı ve teklif sabit fiyat garantilidir; hiçbir gizli ek masraf çıkarılmaz."
      },
      {
        "q": "6 implant cerrahisi sırasında ağrı hisseder miyim? Sedasyon var mı?",
        "a": "İşlem dijital lokal anestezi altında tamamen ağrısızdır. Cerrahi kaygısı olan hastalarımız için uzman anestezi hekimi eşliğinde bilinçli sedasyon seçeneği de sunulmaktadır."
      },
      {
        "q": "Diyabet hastaları veya sigara içenler All-on-6 yaptırabilir mi?",
        "a": "Evet. Kontrol altındaki diyabet hastalarında başarı oranı çok yüksektir. Sigara içen hastalarımızın ise ilk 2 haftalık iyileşme döneminde sigarayı azaltması kemikleşme için önerilir."
      },
      {
        "q": "Uluslararası ömür boyu garanti pasaportu nasıl çalışır?",
        "a": "Tedavi sonunda her implantın seri numarası ve orijinal barkodunu içeren resmi üretici garanti pasaportu hastaya teslim edilir."
      },
      {
        "q": "Kendi ülkeme döndüğümde takip süreci nasıl yürütülür?",
        "a": "Uluslararası hasta koordinasyon ekibimiz 7/24 WhatsApp üzerinden iletişimde kalır ve düzenli video görüşmelerle iyileşme sürecinizi takip eder."
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
    "processTitle": "All-on-4 Hassas Protokolü: 3D Tomografiden Monolitik Zirkonyuma",
    "processSubtitle": "Master Smile Studio’da her All-on-4 tedavisi bilgisayarlı cerrahi rehber ve robotik frezeleme ile %98.2 başarı oranıyla uygulanır.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D Tomografi & Sanal Cerrahi Kılavuz",
        "text": "Yüksek çözünürlüklü tomografi ile sinüs boşlukları ve sinir hatları taranır. 4 implantın 45 derecelik optimum açıları milimetrik olarak planlanır.",
        "specs": [
          {
            "key": "Hassasiyet",
            "val": "< 0.1 mm"
          },
          {
            "key": "İmplant Açısı",
            "val": "45° Posterior Tilted"
          },
          {
            "key": "Greft İhtiyacı",
            "val": "Sıfır Greft (Bypass)"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "24 Saatte Sabit Vidalı Geçici Diş",
        "text": "35–50 Ncm torkla yerleştirilen multi-unit dayanaklar üzerine 24 saat içinde sabit vidalı estetik geçici köprü takılır; hasta asla dişsiz kalmaz.",
        "specs": [
          {
            "key": "Primer Tork",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Teslim Süresi",
            "val": "24 Hours"
          },
          {
            "key": "Tutuculuk",
            "val": "Vidalı Sabit"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "Robotik CAD/CAM Monolitik Zirkonyum Köprü",
        "text": "3 aylık osteointegrasyon sonrası dijital tarama yapılır. 1200+ MPa monolitik çok katmanlı Alman zirkonyum köprü robotik olarak üretilir.",
        "specs": [
          {
            "key": "Bükülme Gücü",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Altyapı",
            "val": "Masif Zirkonyum + Titanyum"
          },
          {
            "key": "Ömür",
            "val": "Ömür Boyu Garanti"
          }
        ]
      }
    ],
    "costTitle": "Uluslararası Fiyat ve Tedavi Kıyaslaması: İngiltere / Almanya vs. İstanbul",
    "costSubtitle": "Binlerce Avrupalı ve İngiliz hastanın neden malzeme kalitesinden ödün vermeden Master Smile Studio’yu tercih ettiğini keşfedin.",
    "costTableHeaders": {
      "country": "Ülke / Klinik Standardı",
      "costPerArch": "Tek Çene All-on-6 Maliyeti",
      "inclusions": "Fiyata Dahil Olan Hizmetler",
      "valueAdvantage": "Master Smile Studio Avantajı"
    },
    "costTableRows": [
      {
        "country": "İngiltere (UK - Özel Klinikler / Harley Street)",
        "costPerArch": "£14,000 – £18,000",
        "inclusions": "Yalnızca cerrahi ve standart köprü. 3D tomografi, geçici dişler ve ek randevular ayrı faturalandırılır.",
        "valueAdvantage": "Orijinal İsviçre/Alman sistemlerinde %65 – %70 Tasarruf (£4,700 – £8,600)."
      },
      {
        "country": "Almanya / İsviçre (Özel Klinikler)",
        "costPerArch": "€13,000 – €17,000",
        "inclusions": "Cerrahi ve laboratuvar ücreti. Otel konaklaması, VIP transfer ve ilaçlar fiyata dahil değildir.",
        "valueAdvantage": "Aynı Alman/İsviçre titanyumu ile %60 – %65 Tasarruf (€5,500 – €10,000)."
      },
      {
        "country": "Master Smile Studio (İstanbul, Türkiye)",
        "costPerArch": "€5,500 – €10,000 / £4,700 – £8,600",
        "inclusions": "Her Şey Dahil: 6 İmplant, Geçici Diş, Kalıcı Zirkonyum Köprü, 3D Tomografi, 5 Yıldızlı Otel, VIP Mercedes Transferler, Ömür Boyu Garanti Pasaportu.",
        "valueAdvantage": "Gizli Masrafsız Sabit Fiyat Garantisi ve VIP Seyahat Konforu."
      }
    ]
  },
  "de": {
    "introBadge": "SOFORTBELASTBARE FESTE GESAMTBRÜCKE",
    "introTitle": "All-on-4 Zahnimplantate in Istanbul: Feste Zähne in 24 Stunden ohne Sinuslift",
    "introLead": "Selbst bei starkem Knochenschwund im Seitenzahnbereich ermöglichen 4 speziell abgewinkelte Titanimplantate festsitzende Zähne innerhalb von 24 Stunden – ganz ohne aufwendigen Knochenaufbau oder Sinuslift.",
    "introP1": "Das All-on-4-Konzept ist ein biomechanischer Meilenstein für Patienten mit Knochenresorption. Durch die 45-Grad-Neigung der hinteren Implantate wird das vorhandene Knochenvolumen optimal genutzt und der Sinuslift vermieden.",
    "introP2": "Mit computergestützter 3D-DVT-Planung erreichen unsere Chirurgen Primärstabilitäten von über 35–50 Ncm. Innerhalb von 24 Stunden wird eine festsitzende provisorische Brücke montiert, gefolgt von einer 1200+ MPa Zirkonbrücke nach 3 Monaten.",
    "introP3Lead": "Entdecken Sie bei Bedarf auch unsere ",
    "introP3LinkAll4": "All-on-4 Zahnimplantate",
    "introP3Mid": ", spezialisierte ",
    "introP3LinkZygoma": "Zygoma-Implantate bei Knochenschwund",
    "introP3And": " sowie ",
    "introP3LinkSinus": "Sinuslift-Behandlungen",
    "introP3Tail": " in unserer Istanbuler Fachklinik.",
    "materialsTitle": "All-on-6 Brückenmaterialien: Warum wir monolithisches Zirkon verwenden",
    "materialsSubtitle": "Bei All-on-6 tragen 6 Implantate die gesamte Kaukraft des Kiefers (200 bis 600 Newton). Erfahren Sie, warum wir ausschließlich 100% monolithisches Mehrschicht-Zirkon anstelle von billigem Acryl oder brüchiger Keramik einsetzen.",
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
        "material": "1200+ MPa CAD/CAM Zirkon",
        "strength": "1200 – 1400 MPa (Extrem hoch)",
        "chippingRisk": "Nahezu Null (Vollmonolithisch)",
        "lifespan": "25+ Jahre / Lebenslang",
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
            "text": "Porenfrei: 100% fleckenresistent & geruchsneutral",
            "status": "good"
          },
          {
            "text": "Mehrschicht-Farbverlauf für natürliche Zahnästhetik",
            "status": "good"
          }
        ]
      },
      {
        "title": "Hybrid-Titan-Acryl-Brücke",
        "sub": "Gussmetallrahmen + Prothesen-Acryl & Kunststoffzähne",
        "material": "PMMA-Acryl + Metallgerüst",
        "strength": "80 – 120 MPa (Gering)",
        "chippingRisk": "Hoch (Zähne können abplatzen)",
        "lifespan": "3 – 7 Jahre",
        "features": [
          {
            "text": "Abrasiver Abrieb verkürzt Zähne & verursacht Kiefergelenkschmerzen",
            "status": "bad"
          },
          {
            "text": "Poröses Harz absorbiert Bakterien, Öle & Gerüche",
            "status": "bad"
          },
          {
            "text": "Einzelne Zähne können sich bei harter Kost lösen",
            "status": "bad"
          },
          {
            "text": "Erfordert häufige Wartung und Gesamterneuerung",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Metallkeramik (PFM)",
        "sub": "Guss-Kobalt-Chrom-Gerüst + gebrannte Keramik",
        "material": "Geschichtete Feldspatkeramik",
        "strength": "350 – 450 MPa (Mittel)",
        "chippingRisk": "Mäßig bis hoch (Keramikabplatzungen)",
        "lifespan": "8 – 12 Jahre",
        "features": [
          {
            "text": "Keramik splittert unter hoher 6-Implantat-Last leicht ab",
            "status": "bad"
          },
          {
            "text": "Dunkler Metallrand wird sichtbar bei Zahnfleischrückgang",
            "status": "bad"
          },
          {
            "text": "Hohes Eigengewicht fühlt sich im Mund sperrig an",
            "status": "warn"
          },
          {
            "text": "Reparatur im Mund bei abgeplatzter Keramik unmöglich",
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
    "packagesTitle": "All-on-6 Implantat-Pakete & Preise in Istanbul",
    "packagesSubtitle": "Transparente Festpreise pro Kiefer inklusive 6 Titanimplantaten, Zirkonbrücke, 5-Sterne-Hotel und VIP-Transfers.",
    "durationLabel": "Behandlungsdauer:",
    "includedLabel": "In diesem Paket enthalten:",
    "pricePerArchLabel": "Preis pro Kiefer",
    "getQuoteBtn": "Kostenloses Angebot anfordern",
    "mostPopularBadge": "BELIEBTESTES PAKET",
    "faqTitle": "Häufig gestellte Fragen zu All-on-6 Implantaten",
    "faqSubtitle": "Klinisch fundierte Antworten zu chirurgischem Ablauf, Kosten und Ihrer Behandlungsreise nach Istanbul.",
    "faqGroup1Title": "All-on-6 Klinische & Chirurgische Fragen",
    "faqGroup2Title": "Medizintourismus, Paketleistungen & Garantie",
    "packages": [
      {
        "name": "ALL-ON-6 – NUCLEOSS",
        "brand": "NucleOSS (Türkische Premium-Qualität)",
        "duration": "3+7 Werktage (2 Besuche)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg",
        "included": [
          "6x NucleOSS Titanimplantate pro Kiefer",
          "12-14x Feste provisorische Zähne",
          "12-14x Finale Zirkonbrücke",
          "3D-DVT-Röntgen und OP-Schablone",
          "Lokalanästhesie und Medikamentenset",
          "Flughafen-Hotel VIP-Transfers",
          "Hotelaufenthalt mit Frühstück",
          "Komplette Laborarbeiten inklusive"
        ],
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        }
      },
      {
        "name": "ALL-ON-6 – DXL GERMAN",
        "brand": "DXL (Deutsche Ingenieurskunst)",
        "duration": "3+7 Werktage (2 Besuche)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg",
        "included": [
          "6x DXL Deutsche Titanimplantate",
          "12-14x Feste provisorische Zähne",
          "12-14x Finale Zirkonbrücke",
          "3D-DVT & chirurgische Planung",
          "VIP-Transfers und Hotel inklusive",
          "Labor- und Fräsarbeiten inklusive"
        ],
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        }
      },
      {
        "name": "ALL-ON-6 – STRAUMANN",
        "brand": "Straumann (Schweizer Goldstandard)",
        "duration": "3+7 Werktage (2 Besuche)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg",
        "included": [
          "6x Straumann Schweizer Titanimplantate",
          "12-14x Hochwertige provisorische Zähne",
          "12-14x Monolithische Zirkonzähne",
          "Lebenslanger Hersteller-Garantiepass",
          "5-Sterne-Luxushotel inklusive",
          "VIP-Mercedes Chauffeur-Transfers",
          "Persönliche deutschsprachige Betreuung"
        ],
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "popular": true
      },
      {
        "name": "ALL-ON-6 – MEGAGEN",
        "brand": "Megagen AnyRidge",
        "duration": "3+7 Werktage (2 Besuche)",
        "img": "https://sohodent.com/doc/data1/All-on-4-package-10.jpg",
        "included": [
          "6x Megagen Implantate",
          "12-14x Provisorische Zähne",
          "12-14x Zirkonbrücke",
          "Hotel und Transfers"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – NEODENT",
        "brand": "Neodent (Straumann Gruppe)",
        "duration": "3+7 Werktage (2 Besuche)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg",
        "included": [
          "6x Neodent Implantate",
          "12-14x Provisorische Zähne",
          "12-14x Zirkonbrücke",
          "Hotel und Transfers"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – HIOSSEN",
        "brand": "Hiossen USA",
        "duration": "3+7 Werktage (2 Besuche)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg",
        "included": [
          "6x Hiossen Implantate",
          "12-14x Provisorische Zähne",
          "12-14x Zirkonbrücke",
          "Hotel und Transfers"
        ],
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        }
      }
    ],
    "faqsPart1": [
      {
        "q": "Was ist der Hauptunterschied zwischen All-on-6 und All-on-4?",
        "a": "All-on-6 verwendet sechs Titanimplantate pro Kiefer. Die zwei zusätzlichen Implantate verteilen den Kaudruck optimal auf den gesamten Kiefer und ermöglichen eine vollständige 14-Zahn-Zirkonbrücke mit höchster Stabilität."
      },
      {
        "q": "Wer ist der ideale Kandidat für All-on-6 Zahnimplantate?",
        "a": "Patienten mit ausreichendem Knochenangebot im Seitenzahnbereich, jüngere Patienten mit hoher Kaukraft oder Personen, die eine vollständige 14-Zähne-Restauration wünschen."
      },
      {
        "q": "Erfordert All-on-6 einen Knochenaufbau oder Sinuslift?",
        "a": "Da sechs Implantate eine ausreichende Knochenbasis erfordern, kann bei starkem Knochenschwund im Oberkiefer ein kleiner Sinuslift oder Knochenaufbau notwendig sein."
      },
      {
        "q": "Wie funktioniert die festsitzende provisorische Brücke am selben Tag?",
        "a": "Innerhalb von 24 Stunden nach dem computergestützten Eingriff wird eine verschraubte provisorische Brücke auf Ihren sechs Implantaten befestigt. Sie verlassen unsere Klinik nie ohne feste Zähne."
      },
      {
        "q": "Was kann ich während der 3-monatigen Einheilphase essen?",
        "a": "In den ersten 3 Monaten empfehlen wir weiche Nahrung (Fisch, Nudeln, Eier, Gemüse, zartes Geflügel), um die Osseointegration der Implantate nicht zu gefährden."
      },
      {
        "q": "Welches Material wird für die permanente All-on-6 Brücke verwendet?",
        "a": "Wir fertigen ausschließlich maßgeschneiderte 100% monolithische Mehrschicht-Zirkonbrücken (1200+ MPa) mit CAD/CAM-gefrästem Titansteg. Kein brüchiges Acryl oder anfällige Keramikschichten."
      },
      {
        "q": "Ist die All-on-6 Brücke festsitzend oder herausnehmbar?",
        "a": "Die All-on-6 Brücke ist zu 100% festsitzend und verschraubt. Sie kann nur vom Zahnarzt bei Kontrollterminen gelöst werden und wird zu Hause mit einer Munddusche gereinigt."
      },
      {
        "q": "Warum ist 3D-navigierte Chirurgie bei All-on-6 unverzichtbar?",
        "a": "Das Setzen von sechs Implantaten erfordert höchste Parallelität und Präzision, damit die Zirkonbrücke spannungsfrei und mikrometergenau verschraubt werden kann."
      },
      {
        "q": "Können beschädigte Zähne in derselben Sitzung gezogen werden?",
        "a": "Ja. Nicht erhaltungsfähige Zähne werden im selben Eingriff schonend extrahiert, gefolgt von der Implantation der 6 Pfeiler und der Anpassung der provisorischen Brücke."
      },
      {
        "q": "Wie hoch ist die langfristige Erfolgsquote von All-on-6?",
        "a": "Über 15 Jahre klinische Studien belegen eine Erfolgsquote von über 98,5%. Straumann- und deutsche DXL-Implantate sind für eine lebenslange Haltbarkeit konstruiert."
      }
    ],
    "faqsPart2": [
      {
        "q": "Wie viele Reisen nach Istanbul sind für All-on-6 erforderlich?",
        "a": "Genau 2 Reisen: 1. Besuch (3–5 Tage) für Diagnostik, OP und provisorische Zähne; 2. Besuch (5–7 Tage, nach 3 Monaten) für die finale Zirkonbrücke."
      },
      {
        "q": "Was ist im All-on-6 Paket von Master Smile Studio enthalten?",
        "a": "6 Premium-Titanimplantate, 12-14 provisorische Zähne, 12-14 permanente Zirkonzähne, 3D-DVT, Medikamente, 4/5-Sterne-Hotel mit Frühstück und VIP-Transfers."
      },
      {
        "q": "Ändert sich mein Paketpreis nach der Ankunft in Istanbul?",
        "a": "Nein. Der auf Basis Ihres Röntgenbilds erstellte Behandlungsplan ist ein garantierter Festpreis ohne versteckte Zusatzkosten."
      },
      {
        "q": "Habe ich Schmerzen bei der OP? Gibt es eine Sedierung?",
        "a": "Der Eingriff erfolgt schmerzfrei unter digitaler Lokalanästhesie. Für ängstliche Patienten bieten wir auch eine zertifizierte Dämmerschlafsedierung (IV-Sedierung) an."
      },
      {
        "q": "Können Diabetiker oder Raucher All-on-6 erhalten?",
        "a": "Ja. Bei gut eingestelltem Diabetes ist die Erfolgsrate exzellent. Rauchern wird empfohlen, den Konsum in den ersten 2 Wochen zu pausieren."
      },
      {
        "q": "Wie funktioniert der internationale lebenslange Garantiepass?",
        "a": "Sie erhalten einen offiziellen Implantatpass des Herstellers mit individuellen Seriennummern und lebenslanger weltweiter Garantie."
      },
      {
        "q": "Wie erfolgt die Nachsorge in meinem Heimatland?",
        "a": "Unser internationales Patiententeam steht Ihnen rund um die Uhr per WhatsApp und regelmäßigen Video-Sprechstunden zur Seite."
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
    "processTitle": "All-on-4 Präzisionsprotokoll: Vom 3D-DVT zur Zirkonbrücke",
    "processSubtitle": "Jede All-on-4-Behandlung im Master Smile Studio folgt einem strengen computergeführten Protokoll für 98,2 % Erfolg.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D-DVT-Diagnostik & Bohrschablone",
        "text": "Hochauflösende 3D-Volumentomographie vermisst Knochendichte und Nervenbahnen. Die 45-Grad-Winkelung wird virtuell exakt festgelegt.",
        "specs": [
          {
            "key": "Precision",
            "val": "< 0.1 mm"
          },
          {
            "key": "Implant Angulation",
            "val": "45° Posterior Tilted"
          },
          {
            "key": "Bone Grafting",
            "val": "Zero Graft (Bypassed)"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Feste Zähne in 24 Stunden",
        "text": "Auf Multi-Unit-Abutments mit >35 Ncm wird innerhalb von 24 Stunden eine festsitzende provisorische Brücke verschraubt.",
        "specs": [
          {
            "key": "Insertion Torque",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Delivery Time",
            "val": "24 Hours"
          },
          {
            "key": "Retention",
            "val": "Screw-Retained"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "CAD/CAM Monolithische Zirkonbrücke",
        "text": "Nach 3 Monaten Einheilung wird die endgültige 1200+ MPa Monolithische Zirkonbrücke 5-achsig robotisch gefräst.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Solid Zirconia + Titanium"
          },
          {
            "key": "Longevity",
            "val": "Lifetime Warranty"
          }
        ]
      }
    ],
    "costTitle": "Internationaler Preis- & Leistungsvergleich: UK / Deutschland vs. Istanbul",
    "costSubtitle": "Erfahren Sie, warum tausende europäische Patienten Master Smile Studio für All-on-6 wählen – ohne Kompromisse bei der Materialqualität.",
    "costTableHeaders": {
      "country": "Land / Klinik-Standard",
      "costPerArch": "All-on-6 Kosten (pro Kiefer)",
      "inclusions": "Im Preis enthaltene Leistungen",
      "valueAdvantage": "Master Smile Studio Vorteil"
    },
    "costTableRows": [
      {
        "country": "Großbritannien (Harley Street / Privatklinik)",
        "costPerArch": "£14.000 – £18.000",
        "inclusions": "Nur OP und Standardbrücke. 3D-DVT, Provisorien und Nachkontrollen werden extra berechnet.",
        "valueAdvantage": "65% – 70% Ersparnis (£4.700 – £8.600) bei originalen Straumann/deutschen Systemen."
      },
      {
        "country": "Deutschland / Schweiz (Privatzahnarzt)",
        "costPerArch": "€13.000 – €17.000",
        "inclusions": "Chirurgie und Laborkosten. Hotelübernachtungen, VIP-Transfers und Medikamente nicht enthalten.",
        "valueAdvantage": "60% – 65% Ersparnis (€5.500 – €10.000) bei identischem deutschem/Schweizer Titan."
      },
      {
        "country": "Master Smile Studio (Istanbul, Türkei)",
        "costPerArch": "€5.500 – €10.000 / £4.700 – £8.600",
        "inclusions": "All-inclusive: 6 Implantate, provisorische Zähne, Zirkonbrücke, 3D-DVT, 5-Sterne-Hotel, VIP-Transfers, lebenslange Garantie.",
        "valueAdvantage": "Garantierter Festpreis ohne versteckte Zusatzkosten mit erstklassigem VIP-Service."
      }
    ]
  },
  "pl": {
    "introBadge": "NATYCHMIASTOWO OBCIAŻANY STAŁY ŁUK ZĘBOWY",
    "introTitle": "Implanty All-on-4 w Stambule: Stałe Zęby w 24 Godziny bez Sinus Liftu",
    "introLead": "Nawet przy zaawansowanym zaniku kości, 4 implanty tytanowe wprowadzone pod kątem 45 stopni pozwalają ominąć zatoki i zamocować stałe zęby w 24 godziny bez konieczności przeszczepu kości.",
    "introP1": "Koncepcja All-on-4 to biomechaniczny przełom dla pacjentów z zanikiem kości. Kątowe wprowadzenie implantów bocznych maksymalizuje stabilizację w gęstej kości przedniej bez konieczności augmentacji.",
    "introP2": "Dzięki nawigacji 3D CBCT implanty osiągają stabilizację ponad 35–50 Ncm, co pozwala na zamocowanie stałego mostu tymczasowego w 24 godziny, a po 3 miesiącach ostatecznego mostu z niemieckiego cyrkonu 1200+ MPa.",
    "introP3Lead": "W zależności od warunków anatomicznych poznaj także nasze ",
    "introP3LinkAll4": "Implanty All-on-4",
    "introP3Mid": ", dedykowane ",
    "introP3LinkZygoma": "Implanty Zygomatyczne",
    "introP3And": " oraz ",
    "introP3LinkSinus": "Zabieg Podniesienia Dna Zatoki",
    "introP3Tail": " w naszej klinice w Stambule.",
    "materialsTitle": "Materiały Mostów All-on-6: Dlaczego Wybieramy Monolityczny Cyrkon?",
    "materialsSubtitle": "W protokole All-on-6 6 implantów przenosi całą siłę żucia (od 200 do 600 N). Zobacz, dlaczego standardowo wykonujemy mosty w 100% z monolitycznego cyrkonu zamiast nietrwałego akrylu lub metalu.",
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
        "material": "1200+ MPa CAD/CAM Cyrkon",
        "strength": "1200 – 1400 MPa (Ultra Wysoka)",
        "chippingRisk": "Prawie Zero (Monolit)",
        "lifespan": "25+ Lat / Dożywotnio",
        "features": [
          {
            "text": "Zero ukruszeń i pęknięć przy dużym nacisku żucia",
            "status": "good"
          },
          {
            "text": "Idealnie gładka powierzchnia zapobiega periimplantitis",
            "status": "good"
          },
          {
            "text": "Brak porowatości: odporny na plamy i zapachy",
            "status": "good"
          },
          {
            "text": "Wielowarstwowa przezierność daje w pełni naturalny uśmiech",
            "status": "good"
          }
        ]
      },
      {
        "title": "Most Hybrydowy Tytanowo-Akrylowy",
        "sub": "Odlewany szkielet metalowy + akryl i zęby kompozytowe",
        "material": "Akryl PMMA + Metal",
        "strength": "80 – 120 MPa (Niska)",
        "chippingRisk": "Wysokie (Zęby mogą odpadać)",
        "lifespan": "3 – 7 Lat",
        "features": [
          {
            "text": "Ścieranie zębów obniża zgryz i powoduje ból stawu skroniowego",
            "status": "bad"
          },
          {
            "text": "Porowaty akryl chłonie bakterie, kawę i powoduje nieświeży oddech",
            "status": "bad"
          },
          {
            "text": "Pojedyncze zęby mogą odpaść przy twardym jedzeniu",
            "status": "bad"
          },
          {
            "text": "Wymaga częstego serwisu i całkowitej wymiany po paru latach",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Most Metalowo-Ceramiczny (PFM)",
        "sub": "Szkielet Co-Cr + napalana porcelana",
        "material": "Warstwowa Porcelana Skaleniowa",
        "strength": "350 – 450 MPa (Średnia)",
        "chippingRisk": "Umiarkowane do Wysokiego (Odpryski)",
        "lifespan": "8 – 12 Lat",
        "features": [
          {
            "text": "Porcelana odpryskuje pod wpływem sił na 6 implantach",
            "status": "bad"
          },
          {
            "text": "Ciemna linia metalu widoczna przy cofnięciu dziąseł",
            "status": "bad"
          },
          {
            "text": "Duża waga daje uczucie ciężkości w jamie ustnej",
            "status": "warn"
          },
          {
            "text": "Naprawa odprysku w ustach jest technicznie niemożliwa",
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
    "packagesTitle": "Pakiety i Ceny Implantów All-on-6 w Stambule",
    "packagesSubtitle": "Przejrzyste ceny all-inclusive za łuk zębowy z 6 implantami tytanowymi, mostem cyrkonowym, hotelem 5-gwiazdkowym i transferami VIP.",
    "durationLabel": "Czas Trwania Leczenia:",
    "includedLabel": "Co zawiera ten pakiet:",
    "pricePerArchLabel": "Cena za 1 łuk zębowy",
    "getQuoteBtn": "Otrzymaj Bezpłatną Wycenę",
    "mostPopularBadge": "NAJCZĘŚCIEJ WYBIERANY",
    "faqTitle": "Często Zadawane Pytania o Implanty All-on-6",
    "faqSubtitle": "Szczegółowe odpowiedzi kliniczne na temat zabiegu, kosztów i Twojego pobytu w Stambule.",
    "faqGroup1Title": "Pytania Kliniczne i Chirurgiczne All-on-6",
    "faqGroup2Title": "Turystyka Medyczna, Pakiet i Gwarancja",
    "packages": [
      {
        "name": "ALL-ON-6 – NUCLEOSS",
        "brand": "NucleOSS (Turecka Jakość Premium)",
        "duration": "3+7 Dni Roboczych (2 Wizyty)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg",
        "included": [
          "6x Implantów Tytanowych NucleOSS na łuk",
          "12-14x Stałych Zębów Tymczasowych",
          "12-14x Ostatecznych Zębów Cyrkonowych",
          "Tomografia 3D CBCT i Szablon Chirurgiczny",
          "Znieczulenie i Zestaw Leków",
          "Transfery VIP Lotnisko-Hotel",
          "Pobyt w Hotelu ze Śniadaniem",
          "Pełne Prace Laboratoryjne"
        ],
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        }
      },
      {
        "name": "ALL-ON-6 – DXL GERMAN",
        "brand": "DXL (Niemiecka Inżynieria)",
        "duration": "3+7 Dni Roboczych (2 Wizyty)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg",
        "included": [
          "6x Niemieckich Implantów DXL",
          "12-14x Zębów Tymczasowych",
          "12-14x Mostu Cyrkonowego",
          "Planowanie 3D CBCT",
          "Transfery VIP i Hotel w Cenie",
          "Prace Laboratoryjne CAD/CAM"
        ],
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        }
      },
      {
        "name": "ALL-ON-6 – STRAUMANN",
        "brand": "Straumann (Szwajcarski Złoty Standard)",
        "duration": "3+7 Dni Roboczych (2 Wizyty)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg",
        "included": [
          "6x Szwajcarskich Implantów Straumann",
          "12-14x Zębów Tymczasowych Premium",
          "12-14x Monolitycznych Zębów Cyrkonowych",
          "Międzynarodowy Paszport z Dożywotnią Gwarancją",
          "Luksusowy Hotel 5-Gwiazdkowy",
          "Transfery VIP Mercedesem z Szoferem",
          "Osobisty Opiekun Pacjenta"
        ],
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "popular": true
      },
      {
        "name": "ALL-ON-6 – MEGAGEN",
        "brand": "Megagen AnyRidge",
        "duration": "3+7 Dni Roboczych (2 Wizyty)",
        "img": "https://sohodent.com/doc/data1/All-on-4-package-10.jpg",
        "included": [
          "6x Implantów Megagen",
          "12-14x Zębów Tymczasowych",
          "12-14x Most Cyrkonowy",
          "Hotel i Transfery"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – NEODENT",
        "brand": "Neodent (Grupa Straumann)",
        "duration": "3+7 Dni Roboczych (2 Wizyty)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg",
        "included": [
          "6x Implantów Neodent",
          "12-14x Zębów Tymczasowych",
          "12-14x Most Cyrkonowy",
          "Hotel i Transfery"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – HIOSSEN",
        "brand": "Hiossen USA",
        "duration": "3+7 Dni Roboczych (2 Wizyty)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg",
        "included": [
          "6x Implantów Hiossen",
          "12-14x Zębów Tymczasowych",
          "12-14x Most Cyrkonowy",
          "Hotel i Transfery"
        ],
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        }
      }
    ],
    "faqsPart1": [
      {
        "q": "Jaka jest główna różnica biomechaniczna między All-on-6 a All-on-4?",
        "a": "All-on-6 wykorzystuje 6 implantów tytanowych na łuk. Dodatkowe 2 implanty zapewniają lepszy rozkład sił żucia na kość i umożliwiają pełną odbudowę 14 zębów o maksymalnej stabilności."
      },
      {
        "q": "Kto jest idealnym kandydatem do zabiegu All-on-6?",
        "a": "Pacjenci z odpowiednią ilością kości w odcinkach bocznych, osoby młodsze o dużej sile zgryzu oraz pacjenci pragnący pełnego łuku 14 zębów."
      },
      {
        "q": "Czy All-on-6 wymaga podniesienia dna zatoki lub odbudowy kości?",
        "a": "Ponieważ 6 implantów wymaga podparcia w odcinkach bocznych, w przypadku znacznego zaniku kości w szczęce może być wymagany sinus lift lub sterowana regeneracja kości."
      },
      {
        "q": "Jak działa natychmiastowy stały most tymczasowy w All-on-6?",
        "a": "W ciągu 24 godzin od zabiegu most tymczasowy jest przykręcany do 6 implantów. Pacjent nigdy nie opuszcza kliniki bez zębów."
      },
      {
        "q": "Co mogę jeść w trakcie 3-miesięcznego okresu gojenia?",
        "a": "Zalecamy dietę miękką (ryby, makarony, jajka, warzywa, gotowany drób). Należy unikać twardych orzechów do momentu założenia ostatecznego mostu cyrkonowego."
      },
      {
        "q": "Jaki materiał jest stosowany w ostatecznym moście All-on-6?",
        "a": "Stosujemy w 100% monolityczny wielowarstwowy cyrkon (1200+ MPa) wzmocniony frezowaną belką tytanową CAD/CAM. Nie używamy nietrwałego akrylu."
      },
      {
        "q": "Czy most All-on-6 jest stały czy wyjmowany?",
        "a": "Most All-on-6 jest w 100% stały i przykręcany. Może go zdjąć wyłącznie lekarz podczas wizyt kontrolnych. Higienę domową ułatwia irygator (Waterpik)."
      },
      {
        "q": "Dlaczego nawigacja 3D jest kluczowa w zabiegu All-on-6?",
        "a": "Precyzyjne rozmieszczenie 6 implantów z dokładnością do ułamka milimetra gwarantuje idealną równoległość i stabilność mostu cyrkonowego."
      },
      {
        "q": "Czy zniszczone zęby można usunąć podczas tego samego zabiegu?",
        "a": "Tak. Wszelkie zniszczone zęby są usuwane podczas jednej wizyty, bezpośrednio przed wszczepieniem 6 implantów i montażem mostu tymczasowego."
      },
      {
        "q": "Jaki jest długoterminowy wskaźnik sukcesu All-on-6?",
        "a": "Badania kliniczne z ponad 15 lat wykazują sukces przekraczający 98,5%. Implanty Straumann i DXL są zaprojektowane na całe życie."
      }
    ],
    "faqsPart2": [
      {
        "q": "Ile wizyt w Stambule jest potrzebnych do leczenia All-on-6?",
        "a": "Dokładnie 2 wizyty: 1. Wizyta (3–5 dni) na diagnostykę, zabieg i zęby tymczasowe; 2. Wizyta (5–7 dni, po 3 miesiącach) na montaż ostatecznego mostu cyrkonowego."
      },
      {
        "q": "Co zawiera pakiet All-on-6 w Master Smile Studio?",
        "a": "6 implantów tytanowych, 12-14 zębów tymczasowych, 12-14 ostatecznych zębów cyrkonowych, tomografię 3D, leki, hotel 4/5* ze śniadaniami i transfery VIP Mercedes."
      },
      {
        "q": "Czy cena pakietu zmieni się po przyjeździe do Stambułu?",
        "a": "Nie. Wycena przygotowana na podstawie zdjęcia RTG to gwarantowana stała cena bez ukrytych opłat."
      },
      {
        "q": "Czy zabieg 6 implantów boli? Czy dostępna jest sedacja?",
        "a": "Zabieg jest bezbolesny w znieczuleniu miejscowym. Dla pacjentów z lękiem oferujemy również sedację dożylną pod okiem anestezjologa."
      },
      {
        "q": "Czy diabetycy lub palacze mogą poddać się All-on-6?",
        "a": "Tak. Wyrównana cukrzyca nie stanowi przeszkody. Palaczom zaleca się ograniczenie palenia w pierwszych 2 tygodniach po zabiegu."
      },
      {
        "q": "Jak działa międzynarodowy paszport z dożywotnią gwarancją?",
        "a": "Otrzymujesz oficjalny paszport implantu z unikalnymi numerami seryjnymi i kodami kreskowymi producenta."
      },
      {
        "q": "Jak wygląda opieka po powrocie do mojego kraju?",
        "a": "Nasz międzynarodowy zespół zapewnia stały kontakt przez WhatsApp i regularne wideokonsultacje z głównym chirurgiem."
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
    "processTitle": "Protokół Precyzji All-on-4: Od Tomografii 3D do Mostu Cyrkonowego",
    "processSubtitle": "Każdy zabieg All-on-4 w Master Smile Studio prowadzony jest z użyciem cyfrowego szablonu dla 98,2% skuteczności.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "Tomografia 3D CBCT i Szablon Chirurgiczny",
        "text": "Tomografia 3D skanuje przebieg nerwów i zatok. Szablon wyznacza optymalny kąt 45 stopni dla implantów bocznych.",
        "specs": [
          {
            "key": "Precision",
            "val": "< 0.1 mm"
          },
          {
            "key": "Implant Angulation",
            "val": "45° Posterior Tilted"
          },
          {
            "key": "Bone Grafting",
            "val": "Zero Graft (Bypassed)"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Stały Most Tymczasowy w 24h",
        "text": "Na łącznikach Multi-Unit montowany jest przykręcany most tymczasowy w 24 godziny, zapewniając natychmiastową estetykę.",
        "specs": [
          {
            "key": "Insertion Torque",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Delivery Time",
            "val": "24 Hours"
          },
          {
            "key": "Retention",
            "val": "Screw-Retained"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "Monolityczny Most Cyrkonowy CAD/CAM",
        "text": "Po 3 miesiącach frezujemy w technologii 5-osiowej ostateczny most z niemieckiego wielowarstwowego cyrkonu (1200+ MPa).",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Solid Zirconia + Titanium"
          },
          {
            "key": "Longevity",
            "val": "Lifetime Warranty"
          }
        ]
      }
    ],
    "costTitle": "Międzynarodowe Porównanie Cen i Standardu: UK / Niemcy vs. Stambuł",
    "costSubtitle": "Zobacz, dlaczego pacjenci z całej Europy wybierają Master Smile Studio na zabieg All-on-6 bez kompromisów jakościowych.",
    "costTableHeaders": {
      "country": "Kraj / Standard Kliniki",
      "costPerArch": "Koszt All-on-6 (za 1 łuk)",
      "inclusions": "Co jest wliczone w cenę",
      "valueAdvantage": "Przewaga Master Smile Studio"
    },
    "costTableRows": [
      {
        "country": "Wielka Brytania (Harley Street / Prywatnie)",
        "costPerArch": "£14,000 – £18,000",
        "inclusions": "Tylko zabieg i most standardowy. Tomografia 3D, zęby tymczasowe i wizyty płatne osobno.",
        "valueAdvantage": "65% – 70% Oszczędności (£4,700 – £8,600) na systemach Straumann/DXL."
      },
      {
        "country": "Niemcy / Szwajcaria (Kliniki Prywatne)",
        "costPerArch": "€13,000 – €17,000",
        "inclusions": "Zabieg i laboratorium. Koszty hotelu, transferów i leków nie są pokrywane.",
        "valueAdvantage": "60% – 65% Oszczędności (€5,500 – €10,000) przy tym samym tytanie."
      },
      {
        "country": "Master Smile Studio (Stambuł, Turcja)",
        "costPerArch": "€5,500 – €10,000 / £4,700 – £8,600",
        "inclusions": "Pakiet All-Inclusive: 6 Implantów, Most Tymczasowy, Most Cyrkonowy, Tomografia 3D, Hotel 5*, Transfery VIP Mercedes, Dożywotnia Gwarancja.",
        "valueAdvantage": "Gwarancja Stałej Ceny bez ukrytych opłat i luksusowa obsługa pacjenta."
      }
    ]
  },
  "pt": {
    "introBadge": "CARGA IMEDIATA DE ARCADA COMPLETA",
    "introTitle": "Implantes Dentários All-on-4 em Istambul: Dentes Fixos em 24 Horas sem Enxerto",
    "introLead": "Mesmo com perda óssea severa, 4 implantes angulados a 45 graus contornam o seio maxilar e sustentam uma arcada fixa completa em 24 horas sem necessidade de enxertos invasivos.",
    "introP1": "O protocolo All-on-4 é um avanço biomecânico comprovado. A inclinação de 45 graus dos implantes posteriores maximiza o contato ósseo e elimina cirurgias complexas de levantamento de seio nasal.",
    "introP2": "Com planejamento 3D CBCT, os implantes atingem torque primário acima de 35–50 Ncm. Em 24 horas fixamos uma ponte provisória aparafusada e, após 3 meses, a ponte definitiva em zircônia alemã 1200+ MPa.",
    "introP3Lead": "Conheça também na nossa clínica os tratamentos de ",
    "introP3LinkAll4": "Implantes All-on-4",
    "introP3Mid": ", ",
    "introP3LinkZygoma": "Implantes Zigomáticos",
    "introP3And": " e ",
    "introP3LinkSinus": "Elevação do Seio Maxilar (Sinus Lift)",
    "introP3Tail": " em Istambul.",
    "materialsTitle": "Materiais de Prótese All-on-6: Por que Usamos Zircônia Monolítica",
    "materialsSubtitle": "No All-on-6, 6 implantes suportam toda a força mastigatória da mandíbula (200 a 600 Newtons). Saiba por que produzimos exclusivamente Zircônia Monolítica Multicamadas em vez de acrílico ou metal.",
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
        "material": "1200+ MPa CAD/CAM Zircônia",
        "strength": "1200 – 1400 MPa (Ultra Alta)",
        "chippingRisk": "Praticamente Zero (Monolítica)",
        "lifespan": "25+ Anos / Toda a Vida",
        "features": [
          {
            "text": "Zero lascamento ou fraturas sob forte mastigação",
            "status": "good"
          },
          {
            "text": "Superfície lisa previne placa bacteriana e Peri-implantite",
            "status": "good"
          },
          {
            "text": "Não poroso: 100% resistente a manchas e odores",
            "status": "good"
          },
          {
            "text": "Degradê multicamadas com translucidez natural",
            "status": "good"
          }
        ]
      },
      {
        "title": "Ponte Híbrida Titânio-Acrílico",
        "sub": "Estrutura Metálica + Resina Acrílica e Dentes Plásticos",
        "material": "Acrílico PMMA + Estrutura Metálica",
        "strength": "80 – 120 MPa (Baixa)",
        "chippingRisk": "Alto (Dentes podem soltar)",
        "lifespan": "3 – 7 Anos",
        "features": [
          {
            "text": "Desgaste abrasivo encurta dentes e causa dores articulares",
            "status": "bad"
          },
          {
            "text": "Resina porosa absorve bactérias, café e odores",
            "status": "bad"
          },
          {
            "text": "Dentes individuais podem se soltar com alimentos duros",
            "status": "bad"
          },
          {
            "text": "Requer manutenção constante e substituição completa",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Metalocerâmica (PFM)",
        "sub": "Estrutura de Cobalto-Cromo + Porcelana Fundida",
        "material": "Porcelana Feldspática em Camadas",
        "strength": "350 – 450 MPa (Média)",
        "chippingRisk": "Moderado a Alto (Lascamento)",
        "lifespan": "8 – 12 Anos",
        "features": [
          {
            "text": "A porcelana lasca com frequência sob forças de 6 implantes",
            "status": "bad"
          },
          {
            "text": "Borda metálica escura visível se a gengiva retrair",
            "status": "bad"
          },
          {
            "text": "Peso elevado causa sensação pesada na boca",
            "status": "warn"
          },
          {
            "text": "Reparo de porcelana lascada na boca é inviável",
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
    "packagesTitle": "Pacotes e Preços de Implantes All-on-6 em Istambul",
    "packagesSubtitle": "Preços transparentes com tudo incluído por arcada com 6 implantes de titânio, ponte de zircônia, hotel 5 estrelas e transfers VIP.",
    "durationLabel": "Duração do Tratamento:",
    "includedLabel": "O que está incluído neste pacote:",
    "pricePerArchLabel": "Preço por arcada dentária",
    "getQuoteBtn": "Solicitar Orçamento Gratuito",
    "mostPopularBadge": "MAIS POPULAR",
    "faqTitle": "Perguntas Frequentes sobre Implantes All-on-6",
    "faqSubtitle": "Respostas clínicas detalhadas para esclarecer todas as dúvidas sobre cirurgia, materiais e sua viagem a Istambul.",
    "faqGroup1Title": "Perguntas Clínicas e Cirúrgicas All-on-6",
    "faqGroup2Title": "Turismo de Saúde, Pacotes e Garantia",
    "packages": [
      {
        "name": "ALL-ON-6 – NUCLEOSS",
        "brand": "NucleOSS (Qualidade Premium Turca)",
        "duration": "3+7 Dias Úteis (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg",
        "included": [
          "6x Implantes de Titânio NucleOSS por arcada",
          "12-14x Dentes Provisórios Fixos no mesmo dia",
          "12-14x Dentes Definitivos de Zircônia",
          "Tomografia 3D CBCT e Guia Cirúrgico",
          "Anestesia Local e Kit de Medicamentos",
          "Transfers VIP Aeroporto-Hotel",
          "Hospedagem em Hotel com Café da Manhã",
          "Trabalho Laboratorial Completo"
        ],
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        }
      },
      {
        "name": "ALL-ON-6 – DXL GERMAN",
        "brand": "DXL (Engenharia Alemã)",
        "duration": "3+7 Dias Úteis (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg",
        "included": [
          "6x Implantes Alemães DXL",
          "12-14x Dentes Provisórios Fixos",
          "12-14x Ponte Definitiva de Zircônia",
          "Tomografia 3D CBCT & Planejamento",
          "Transfers VIP e Hotel Incluídos",
          "Laboratório e Fresagem CAD/CAM"
        ],
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        }
      },
      {
        "name": "ALL-ON-6 – STRAUMANN",
        "brand": "Straumann (Padrão Ouro Suíço)",
        "duration": "3+7 Dias Úteis (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg",
        "included": [
          "6x Implantes Suíços Straumann",
          "12-14x Dentes Provisórios Fixos Premium",
          "12-14x Dentes Definitivos em Zircônia Monolítica",
          "Passaporte de Garantia Vitalícia do Fabricante",
          "Hospedagem em Hotel 5 Estrelas de Luxo",
          "Transfers VIP Mercedes com Motorista",
          "Coordenador de Paciente Dedicado"
        ],
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "popular": true
      },
      {
        "name": "ALL-ON-6 – MEGAGEN",
        "brand": "Megagen AnyRidge",
        "duration": "3+7 Dias Úteis (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-4-package-10.jpg",
        "included": [
          "6x Implantes Megagen",
          "12-14x Dentes Provisórios",
          "12-14x Ponte Zircônia",
          "Hotel e Transfers"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – NEODENT",
        "brand": "Neodent (Grupo Straumann)",
        "duration": "3+7 Dias Úteis (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg",
        "included": [
          "6x Implantes Neodent",
          "12-14x Dentes Provisórios",
          "12-14x Ponte Zircônia",
          "Hotel e Transfers"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – HIOSSEN",
        "brand": "Hiossen USA",
        "duration": "3+7 Dias Úteis (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg",
        "included": [
          "6x Implantes Hiossen",
          "12-14x Dentes Provisórios",
          "12-14x Ponte Zircônia",
          "Hotel e Transfers"
        ],
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        }
      }
    ],
    "faqsPart1": [
      {
        "q": "Qual é a principal diferença biomecânica entre All-on-6 e All-on-4?",
        "a": "O All-on-6 utiliza 6 implantes de titânio por arcada. Os 2 implantes adicionais distribuem a carga mastigatória de forma mais ampla, sustentando uma arcada completa de 14 dentes com máxima estabilidade."
      },
      {
        "q": "Quem é o candidato ideal para o implante All-on-6?",
        "a": "Pacientes com bom volume ósseo nas regiões posteriores, pacientes mais jovens com força mastigatória intensa ou pessoas que desejam uma arcada de 14 dentes sem cantilevers."
      },
      {
        "q": "O All-on-6 requer enxerto ósseo ou levantamento de seio maxilar?",
        "a": "Como 6 implantes necessitam de suporte ósseo posterior, pacientes com perda óssea na maxila superior podem necessitar de um pequeno enxerto ou sinus lift."
      },
      {
        "q": "Como funciona a prótese provisória fixa no mesmo dia?",
        "a": "Em até 24 horas após a cirurgia guiada por computador, a ponte provisória é fixada sobre os 6 implantes. Você nunca sai da clínica sem dentes funcionais."
      },
      {
        "q": "O que posso comer durante os 3 meses de osseointegração?",
        "a": "Recomenda-se uma dieta macia e nutritiva (peixes, massas, ovos, legumes, frango desfiado) para proteger a cicatrização óssea dos implantes."
      },
      {
        "q": "Qual material é utilizado na prótese definitiva All-on-6?",
        "a": "Utilizamos exclusivamente Zircônia Monolítica Multicamadas Alemã (1200+ MPa) com barra de titânio fresada em CAD/CAM. Nunca usamos acrílico frágil."
      },
      {
        "q": "A prótese All-on-6 é fixa ou removível?",
        "a": "A prótese é 100% fixa e aparafusada. Apenas o dentista pode removê-la em consultas de rotina. A higiene diária é feita com irrigador oral (Waterpik)."
      },
      {
        "q": "Por que o guia cirúrgico 3D é fundamental no All-on-6?",
        "a": "A instalação de 6 implantes exige perfeito paralelismo e precisão milimétrica para o assentamento passivo da ponte definitiva de zircônia."
      },
      {
        "q": "Dentes comprometidos podem ser extraídos na mesma cirurgia?",
        "a": "Sim. Dentes danificados são extraídos na mesma sessão cirúrgica, seguida imediatamente pela fixação dos 6 implantes e instalação dos dentes provisórios."
      },
      {
        "q": "Qual é a taxa de sucesso a longo prazo do All-on-6?",
        "a": "Estudos clínicos de mais de 15 anos comprovam uma taxa de sucesso superior a 98,5%. Implantes Straumann e DXL são projetados para durar a vida inteira."
      }
    ],
    "faqsPart2": [
      {
        "q": "Quantas viagens a Istambul são necessárias para o All-on-6?",
        "a": "Apenas 2 viagens: 1ª Visita (3–5 dias) para cirurgia e dentes provisórios; 2ª Visita (5–7 dias, após 3 meses) para a entrega da ponte definitiva em zircônia."
      },
      {
        "q": "O que está incluído no pacote All-on-6 do Master Smile Studio?",
        "a": "6 implantes de titânio, 12-14 dentes provisórios, 12-14 dentes definitivos em zircônia, tomografia 3D, cirurgias, medicamentos, hotel 4/5* com café e transfers VIP."
      },
      {
        "q": "O preço do pacote mudará quando eu chegar a Istambul?",
        "a": "Não. O orçamento enviado com base na sua radiografia tem garantia de preço fixo, sem custos ocultos adicionais."
      },
      {
        "q": "Sentirei dor durante a cirurgia de 6 implantes? Há sedação?",
        "a": "O procedimento é indolor sob anestesia local computadorizada. Também disponibilizamos sedação consciente intravenosa para maior conforto."
      },
      {
        "q": "Diabéticos ou fumantes podem fazer o All-on-6?",
        "a": "Sim. Com diabetes controlada, o índice de sucesso é excelente. Para fumantes, recomenda-se reduzir o consumo nas primeiras semanas."
      },
      {
        "q": "Como funciona o passaporte de garantia vitalícia internacional?",
        "a": "Você recebe o passaporte oficial do fabricante com número de série e código de barras de cada implante para garantia vitalícia global."
      },
      {
        "q": "Como é feito o acompanhamento pós-operatório no meu país?",
        "a": "Nossa equipe internacional oferece suporte contínuo via WhatsApp e videochamadas programadas com nossos cirurgiões chefes."
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
    "processTitle": "Protocolo de Precisão All-on-4: Da Tomografia 3D à Zircônia Monolítica",
    "processSubtitle": "Cada reabilitação All-on-4 no Master Smile Studio segue fluxo cirúrgico guiado por computador para 98,2% de sucesso.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "Tomografia 3D CBCT e Guia Cirúrgico",
        "text": "A tomografia mapeia a densidade óssea e o seio maxilar. O guia cirúrgico posiciona os 4 implantes com angulação ideal de 45°.",
        "specs": [
          {
            "key": "Precision",
            "val": "< 0.1 mm"
          },
          {
            "key": "Implant Angulation",
            "val": "45° Posterior Tilted"
          },
          {
            "key": "Bone Grafting",
            "val": "Zero Graft (Bypassed)"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Carga Imediata Fixa em 24 Horas",
        "text": "Sobre os pilares multi-unit é fixada uma ponte provisória aparafusada em até 24 horas com mastigação imediata.",
        "specs": [
          {
            "key": "Insertion Torque",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Delivery Time",
            "val": "24 Hours"
          },
          {
            "key": "Retention",
            "val": "Screw-Retained"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "Ponte Monolítica de Zircônia CAD/CAM",
        "text": "Após 3 meses de cicatrização, a ponte definitiva em zircônia monolítica alemã (1200+ MPa) é fresada com precisão robótica.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Solid Zirconia + Titanium"
          },
          {
            "key": "Longevity",
            "val": "Lifetime Warranty"
          }
        ]
      }
    ],
    "costTitle": "Comparativo Internacional de Preços: Reino Unido / Alemanha vs. Istambul",
    "costSubtitle": "Entenda por que milhares de pacientes europeus escolhem o Master Smile Studio para o All-on-6 mantendo a máxima qualidade.",
    "costTableHeaders": {
      "country": "País / Padrão Clínico",
      "costPerArch": "Custo All-on-6 (por arcada)",
      "inclusions": "O que está incluído no preço",
      "valueAdvantage": "Vantagem Master Smile Studio"
    },
    "costTableRows": [
      {
        "country": "Reino Unido (Harley Street / Particular)",
        "costPerArch": "£14,000 – £18,000",
        "inclusions": "Apenas cirurgia e prótese básica. Tomografia 3D, provisórios e consultas cobrados à parte.",
        "valueAdvantage": "Economia de 65% a 70% (£4,700 – £8,600) em sistemas Straumann/DXL."
      },
      {
        "country": "Alemanha / Suíça (Clínicas Privadas)",
        "costPerArch": "€13,000 – €17,000",
        "inclusions": "Honorários cirúrgicos e laboratoriais. Hospedagem em hotel e transfers não inclusos.",
        "valueAdvantage": "Economia de 60% a 65% (€5,500 – €10,000) com titânio suíço/alemão idêntico."
      },
      {
        "country": "Master Smile Studio (Istambul, Turquia)",
        "costPerArch": "€5,500 – €10,000 / £4,700 – £8,600",
        "inclusions": "Tudo Incluído: 6 Implantes, Ponte Provisória, Ponte de Zircônia, Tomografia 3D, Hotel 5 Estrelas, Transfers VIP Mercedes, Garantia Vitalícia.",
        "valueAdvantage": "Garantia de Preço Fixo Transparente sem Custos Ocultos."
      }
    ]
  },
  "es": {
    "introBadge": "CARGA INMEDIATA DE ARCADA COMPLETA",
    "introTitle": "Implantes Dentales All-on-4 en Estambul: Dientes Fijos en 24 Horas sin Injerto",
    "introLead": "Incluso con pérdida ósea severa, 4 implantes angulados a 45 grados evitan el seno maxilar y fijan una dentadura completa en 24 horas sin injertos óseos invasivos.",
    "introP1": "El protocolo All-on-4 es un hito biomecánico para pacientes con reabsorción ósea. La angulación de 45 grados aprovecha al máximo el hueso cortical denso evitando el levantamiento de seno.",
    "introP2": "Con navegación 3D CBCT alcanzamos torques superiores a 35–50 Ncm. En 24 horas se atornilla el puente fijo provisional y, tras 3 meses, la prótesis definitiva de zirconio alemán de 1200+ MPa.",
    "introP3Lead": "Según su densidad ósea, explore también en nuestra clínica ",
    "introP3LinkAll4": "Implantes All-on-4",
    "introP3Mid": ", ",
    "introP3LinkZygoma": "Implantes Cigomáticos",
    "introP3And": " y ",
    "introP3LinkSinus": "Elevación de Seno Maxilar",
    "introP3Tail": " en Estambul.",
    "materialsTitle": "Materiales de Prótesis All-on-6: Por qué Usamos Circonio Monolítico",
    "materialsSubtitle": "En All-on-6, 6 implantes soportan toda la fuerza masticatoria de la mandíbula (200 a 600 Newtons). Descubra por qué diseñamos exclusivamente Circonio Monolítico Multicapa en lugar de acrílico o metal.",
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
        "material": "1200+ MPa CAD/CAM Circonio",
        "strength": "1200 – 1400 MPa (Ultra Alta)",
        "chippingRisk": "Casi Cero (Monolítico Sólido)",
        "lifespan": "25+ Años / De por Vida",
        "features": [
          {
            "text": "Cero fracturas o astillamiento bajo fuerte masticación",
            "status": "good"
          },
          {
            "text": "Superficie ultra lisa previene placa y Periimplantitis",
            "status": "good"
          },
          {
            "text": "No poroso: 100% resistente a manchas y malos olores",
            "status": "good"
          },
          {
            "text": "Gradiente multicapa para una estética natural translúcida",
            "status": "good"
          }
        ]
      },
      {
        "title": "Puente Híbrido Titanio-Acrílico",
        "sub": "Estructura Metálica + Resina Acrílica y Dientes Plásticos",
        "material": "Acrílico PMMA + Estructura Metálica",
        "strength": "80 – 120 MPa (Baja)",
        "chippingRisk": "Alto (Dientes pueden desprenderse)",
        "lifespan": "3 – 7 Años",
        "features": [
          {
            "text": "Desgaste abrasivo acorta dientes y causa dolor articular",
            "status": "bad"
          },
          {
            "text": "Resina porosa absorbe bacterias, café y olores",
            "status": "bad"
          },
          {
            "text": "Dientes individuales pueden soltarse con alimentos duros",
            "status": "bad"
          },
          {
            "text": "Requiere mantenimiento frecuente y reemplazo total",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Metal-Porcelana (PFM)",
        "sub": "Estructura Cobalto-Cromo + Cerámica Horneada",
        "material": "Porcelana Feldespática en Capas",
        "strength": "350 – 450 MPa (Media)",
        "chippingRisk": "Moderado a Alto (Astillamiento)",
        "lifespan": "8 – 12 Años",
        "features": [
          {
            "text": "La porcelana se astilla bajo las intensas fuerzas de 6 implantes",
            "status": "bad"
          },
          {
            "text": "Margen metálico oscuro visible si la encía se retrae",
            "status": "bad"
          },
          {
            "text": "Peso elevado causa sensación pesada en la boca",
            "status": "warn"
          },
          {
            "text": "Reparar porcelana astillada en boca es inviable",
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
    "packagesTitle": "Precios y Paquetes All-on-6 en Estambul",
    "packagesSubtitle": "Precios transparentes por arcada con 6 implantes de titanio, puente de circonio definitivo, hotel de 5 estrellas y traslados VIP.",
    "durationLabel": "Duración del Tratamiento:",
    "includedLabel": "Qué incluye el paquete:",
    "pricePerArchLabel": "Precio por arcada",
    "getQuoteBtn": "Obtener Presupuesto Gratuito",
    "mostPopularBadge": "MÁS POPULAR",
    "faqTitle": "Preguntas Frecuentes sobre Implantes All-on-6",
    "faqSubtitle": "Respuestas clínicas detalladas sobre el procedimiento quirúrgico, cicatrización y su viaje a Estambul.",
    "faqGroup1Title": "Preguntas Clínicas y Quirúrgicas All-on-6",
    "faqGroup2Title": "Turismo Dental, Paquete y Garantía de por Vida",
    "packages": [
      {
        "name": "ALL-ON-6 – NUCLEOSS",
        "brand": "NucleOSS (Calidad Premium Turca)",
        "duration": "3+7 Días Laborables (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg",
        "included": [
          "6x Implantes de Titanio NucleOSS por arcada",
          "12-14x Dientes Provisionales Fijos",
          "12-14x Puente Definitivo de Circonio",
          "Guía Quirúrgica 3D CBCT",
          "Anestesia y Medicamentos Postoperatorios",
          "Traslados VIP Aeropuerto-Hotel",
          "Estancia en Hotel con Desayuno",
          "Laboratorio Completo Incluido"
        ],
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        }
      },
      {
        "name": "ALL-ON-6 – DXL GERMAN",
        "brand": "DXL (Ingeniería Alemana)",
        "duration": "3+7 Días Laborables (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg",
        "included": [
          "6x Implantes Alemanes DXL",
          "12-14x Dientes Provisionales Fijos",
          "12-14x Puente Definitivo de Circonio",
          "Planificación 3D CBCT",
          "Traslados VIP y Hotel Incluidos",
          "Laboratorio y Fresado CAD/CAM"
        ],
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        }
      },
      {
        "name": "ALL-ON-6 – STRAUMANN",
        "brand": "Straumann (Estándar de Oro Suizo)",
        "duration": "3+7 Días Laborables (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg",
        "included": [
          "6x Implantes Suizos Straumann",
          "12-14x Provisionales Fijos de Alta Gama",
          "12-14x Puente Monolítico Multicapa de Circonio",
          "Pasaporte de Garantía Internacional de por Vida",
          "Traslados VIP y Hotel de Lujo 5 Estrellas",
          "Asesor Personal en Español"
        ],
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "popular": true
      },
      {
        "name": "ALL-ON-6 – MEGAGEN",
        "brand": "Megagen AnyRidge",
        "duration": "3+7 Días Laborables (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-4-package-10.jpg",
        "included": [
          "6x Implantes Megagen",
          "12-14x Dientes Provisionales",
          "12-14x Puente Circonio",
          "Hotel y Traslados"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – NEODENT",
        "brand": "Neodent (Grupo Straumann)",
        "duration": "3+7 Días Laborables (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg",
        "included": [
          "6x Implantes Neodent",
          "12-14x Dientes Provisionales",
          "12-14x Puente Circonio",
          "Hotel y Traslados"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – HIOSSEN",
        "brand": "Hiossen USA",
        "duration": "3+7 Días Laborables (2 Visitas)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg",
        "included": [
          "6x Implantes Hiossen",
          "12-14x Dientes Provisionales",
          "12-14x Puente Circonio",
          "Hotel y Traslados"
        ],
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        }
      }
    ],
    "faqsPart1": [
      {
        "q": "¿Cuál es la principal diferencia biomecánica entre All-on-6 y All-on-4?",
        "a": "All-on-6 utiliza 6 implantes de titanio por arcada. Los 2 implantes adicionales distribuyen la carga masticatoria de forma más amplia, permitiendo una arcada completa de 14 dientes con máxima solidez."
      },
      {
        "q": "¿Quién es el candidato ideal para implantes dentales All-on-6?",
        "a": "Pacientes con suficiente hueso en las zonas posteriores, pacientes jóvenes con fuerte mordida o personas que buscan una arcada de 14 dientes con soporte total en molares."
      },
      {
        "q": "¿All-on-6 requiere injerto óseo o elevación de seno maxilar?",
        "a": "Al necesitar soporte óseo posterior para 6 implantes, en casos de pérdida ósea en el maxilar superior puede requerirse una pequeña elevación de seno o injerto óseo."
      },
      {
        "q": "¿Cómo funciona el puente provisional fijo en el mismo día?",
        "a": "En menos de 24 horas tras la cirugía guiada por ordenador, se fija un puente provisional atornillado a los 6 implantes. Nunca saldrá de la clínica sin dientes."
      },
      {
        "q": "¿Qué puedo comer durante los 3 meses de cicatrización?",
        "a": "Dieta blanda y nutritiva (pescado, pasta, huevos, verduras tiernas) para proteger la osteointegración de los implantes."
      },
      {
        "q": "¿Qué material se utiliza en el puente definitivo All-on-6?",
        "a": "Fabricamos exclusivamente Circonio Monolítico Multicapa Alemán (1200+ MPa) con barra de titanio CAD/CAM. No utilizamos resinas acrílicas frágiles."
      },
      {
        "q": "¿La prótesis All-on-6 es fija o removible?",
        "a": "Es 100% fija y atornillada; solo puede retirarla el dentista en revisiones. La higiene diaria se realiza con irrigador bucal (Waterpik)."
      },
      {
        "q": "¿Por qué es indispensable la guía quirúrgica 3D en All-on-6?",
        "a": "Colocar 6 implantes exige un paralelismo milimétrico para garantizar que la estructura de circonio ajuste sin tensiones."
      },
      {
        "q": "¿Se pueden extraer dientes dañados en la misma cirugía?",
        "a": "Sí. Los dientes que no puedan conservarse se extraen en la misma sesión, colocándose de inmediato los 6 implantes y los dientes provisionales."
      },
      {
        "q": "¿Cuál es la tasa de éxito a largo plazo de All-on-6?",
        "a": "Estudios clínicos a más de 15 años demuestran un éxito superior al 98,5%. Los implantes Straumann y DXL están diseñados para durar toda la vida."
      }
    ],
    "faqsPart2": [
      {
        "q": "¿Cuántos viajes a Estambul son necesarios para All-on-6?",
        "a": "Exactamente 2 viajes: 1ª Visita (3–5 días) para cirugía y dientes provisionales; 2ª Visita (5–7 días, tras 3 meses) para la entrega del puente definitivo de circonio."
      },
      {
        "q": "¿Qué incluye el paquete All-on-6 de Master Smile Studio?",
        "a": "6 implantes de titanio, 12-14 dientes provisionales, 12-14 dientes definitivos de circonio, TAC 3D, cirugías, medicación, hotel 4/5* con desayuno y traslados VIP."
      },
      {
        "q": "¿Cambiará el precio del paquete tras llegar a Estambul?",
        "a": "No. El presupuesto enviado tras evaluar su radiografía es un precio fijo garantizado sin ningún coste oculto."
      },
      {
        "q": "¿Sentiré dolor durante la cirugía de 6 implantes? ¿Hay sedación?",
        "a": "El procedimiento es indoloro bajo anestesia local computarizada. También disponemos de sedación intravenosa consciente para máxima relajación."
      },
      {
        "q": "¿Pueden someterse a All-on-6 pacientes diabéticos o fumadores?",
        "a": "Sí. Con diabetes controlada el éxito es excelente. Se recomienda a los fumadores pausar o reducir el tabaco en las primeras semanas."
      },
      {
        "q": "¿Cómo funciona el pasaporte de garantía internacional de por vida?",
        "a": "Recibirá un pasaporte oficial del fabricante con los números de serie de cada implante para cobertura vitalicia internacional."
      },
      {
        "q": "¿Cómo se realiza el seguimiento postoperatorio en mi país?",
        "a": "Nuestro equipo internacional mantiene contacto directo continuo por WhatsApp y videollamadas con nuestros cirujanos jefes."
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
    "processTitle": "Protocolo de Precisión All-on-4: De la Tomografía 3D al Zirconio Monolítico",
    "processSubtitle": "Cada tratamiento All-on-4 en Master Smile Studio sigue cirugía guiada digital para un 98.2% de éxito clínico.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "Tomografía 3D CBCT y Guía Quirúrgica",
        "text": "La tomografía analiza el hueso cortical y el seno maxilar. La guía digital posiciona los 4 implantes a 45 grados con precisión.",
        "specs": [
          {
            "key": "Precision",
            "val": "< 0.1 mm"
          },
          {
            "key": "Implant Angulation",
            "val": "45° Posterior Tilted"
          },
          {
            "key": "Bone Grafting",
            "val": "Zero Graft (Bypassed)"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Carga Inmediata Fija en 24 Horas",
        "text": "Sobre los pilares multi-unit se atornilla un puente provisional fijo en 24 horas sin periodos de desdentismo.",
        "specs": [
          {
            "key": "Insertion Torque",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Delivery Time",
            "val": "24 Hours"
          },
          {
            "key": "Retention",
            "val": "Screw-Retained"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "Puente Monolítico de Zirconio CAD/CAM",
        "text": "A los 3 meses se fresa el puente definitivo de zirconio monolítico alemán multicapa de 1200+ MPa sin riesgo de fracturas.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Solid Zirconia + Titanium"
          },
          {
            "key": "Longevity",
            "val": "Lifetime Warranty"
          }
        ]
      }
    ],
    "costTitle": "Comparativa Internacional de Precios: Reino Unido / Alemania vs. Estambul",
    "costSubtitle": "Descubra por qué miles de pacientes europeos eligen Master Smile Studio para su tratamiento All-on-6 con los más altos estándares.",
    "costTableHeaders": {
      "country": "País / Nivel Clínico",
      "costPerArch": "Coste All-on-6 (por arcada)",
      "inclusions": "Qué incluye el precio",
      "valueAdvantage": "Ventaja Master Smile Studio"
    },
    "costTableRows": [
      {
        "country": "Reino Unido (Harley Street / Privado)",
        "costPerArch": "£14,000 – £18,000",
        "inclusions": "Solo cirugía y puente estándar. TAC 3D, provisionales y revisiones facturados aparte.",
        "valueAdvantage": "Ahorro del 65% – 70% (£4,700 – £8,600) en sistemas Straumann/DXL."
      },
      {
        "country": "Alemania / Suiza (Clínica Privada)",
        "costPerArch": "€13,000 – €17,000",
        "inclusions": "Cirugía y costes de laboratorio. Hotel, traslados y medicación no incluidos.",
        "valueAdvantage": "Ahorro del 60% – 65% (€5,500 – €10,000) con idéntico titanio suizo/alemán."
      },
      {
        "country": "Master Smile Studio (Estambul, Turquía)",
        "costPerArch": "€5,500 – €10,000 / £4,700 – £8,600",
        "inclusions": "Todo Incluido: 6 Implantes, Puente Provisional, Puente de Circonio, TAC 3D, Hotel de 5 Estrellas, Traslados VIP Mercedes, Garantía de por Vida.",
        "valueAdvantage": "Garantía de Precio Fijo Transparente sin Costes Ocultos."
      }
    ]
  },
  "ru": {
    "introBadge": "НЕМЕДЛЕННАЯ НАГРУЗКА НА ВСЮ ЧЕЛЮСТЬ",
    "introTitle": "Имплантация All-on-4 в Стамбуле: Несъемные Зубы за 24 Часа без Синус-Лифтинга",
    "introLead": "Даже при выраженной атрофии кости 4 импланта, установленные под углом 45 градусов, обходят гайморовы пазухи и фиксируют несъемный мост за 24 часа без сложного синус-лифтинга.",
    "introP1": "Концепция All-on-4 — доказанный золотой стандарт при атрофии кости. Наклон боковых имплантов под 45 градусов задействует плотную переднюю кость и исключает дорогостоящую костную пластику.",
    "introP2": "Благодаря 3D КТ импланты получают первичную стабильность более 35–50 Нсм. За 24 часа фиксируется несъемный временный мост, а через 3 месяца — монолитный немецкий циркониевый мост 1200+ МПа.",
    "introP3Lead": "В зависимости от объема кости ознакомьтесь также с методами ",
    "introP3LinkAll4": "Имплантация All-on-4",
    "introP3Mid": ", ",
    "introP3LinkZygoma": "Скуловые Импланты (Зигома)",
    "introP3And": " и ",
    "introP3LinkSinus": "Операция Синус-Лифтинга",
    "introP3Tail": " в нашей клинике в Стамбуле.",
    "materialsTitle": "Материалы Постоянных Мостов All-on-6: Почему Мы Используем Монолитный Цирконий",
    "materialsSubtitle": "В протоколе All-on-6 6 имплантов несут всю жевательную нагрузку челюсти (от 200 до 600 Н). Узнайте, почему мы изготавливаем мосты исключительно из 100% монолитного циркония, а не из акрила или металлокерамики.",
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
        "material": "1200+ МПа CAD/CAM Цирконий",
        "strength": "1200 – 1400 МПа (Сверхвысокая)",
        "chippingRisk": "Близок к нулю (Монолит)",
        "lifespan": "25+ Лет / Пожизненно",
        "features": [
          {
            "text": "Ноль сколов и переломов при интенсивном жевании",
            "status": "good"
          },
          {
            "text": "Гладкая поверхность препятствует налёту и периимплантиту",
            "status": "good"
          },
          {
            "text": "Непористая структура: не окрашивается и не впитывает запахи",
            "status": "good"
          },
          {
            "text": "Многослойный градиент создаёт естественную прозрачность зубов",
            "status": "good"
          }
        ]
      },
      {
        "title": "Гибридный Титано-Акриловый Мост",
        "sub": "Металлический Каркас + Протезный Акрил и Пластмассовые Зубы",
        "material": "PMMA Акрил + Металл",
        "strength": "80 – 120 МПа (Низкая)",
        "chippingRisk": "Высокий (Зубы могут отклеиваться)",
        "lifespan": "3 – 7 Лет",
        "features": [
          {
            "text": "Истирание зубов снижает прикус и вызывает боли в суставе",
            "status": "bad"
          },
          {
            "text": "Пористый акрил впитывает бактерии, красители и запахи",
            "status": "bad"
          },
          {
            "text": "Отдельные зубы могут отламываться при твёрдой пище",
            "status": "bad"
          },
          {
            "text": "Требует частого ремонта и полной замены через несколько лет",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Металлокерамика (PFM)",
        "sub": "Кобальт-Хромовый Каркас + Напечённая Керамика",
        "material": "Послойная Полевошпатная Керамика",
        "strength": "350 – 450 MPa (Средняя)",
        "chippingRisk": "От умеренного до высокого (Сколы)",
        "lifespan": "8 – 12 Лет",
        "features": [
          {
            "text": "Керамика часто скалывается под давлением на 6 имплантах",
            "status": "bad"
          },
          {
            "text": "Тёмный край металла становится виден при убыли десны",
            "status": "bad"
          },
          {
            "text": "Большой вес создаёт ощущение тяжести во рту",
            "status": "warn"
          },
          {
            "text": "Ремонт сколотой керамики прямо во рту невозможен",
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
    "packagesTitle": "Пакетные Цены на Имплантацию All-on-6 в Стамбуле",
    "packagesSubtitle": "Прозрачные цены «все включено» за челюсть с 6 премиальными титановыми имплантами, циркониевым мостом, отелем 5* и VIP-трансфером.",
    "durationLabel": "Длительность Лечения:",
    "includedLabel": "Что входит в этот пакет:",
    "pricePerArchLabel": "Цена за 1 челюсть",
    "getQuoteBtn": "Получить Бесплатный Расчет",
    "mostPopularBadge": "САМЫЙ ПОПУЛЯРНЫЙ",
    "faqTitle": "Часто Задаваемые Вопросы об Имплантации All-on-6",
    "faqSubtitle": "Клинически проверенные ответы обо всех этапах операции, стоимости и поездке в Стамбул.",
    "faqGroup1Title": "Клинические и Хирургические Вопросы All-on-6",
    "faqGroup2Title": "Медицинский Туризм, Пакет и Пожизненная Гарантия",
    "packages": [
      {
        "name": "ALL-ON-6 – NUCLEOSS",
        "brand": "NucleOSS (Премиум Турция)",
        "duration": "3+7 Рабочих Дней (2 Визита)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg",
        "included": [
          "6x Титановых Имплантов NucleOSS на челюсть",
          "12-14x Несъемных Временных Зубов",
          "12-14x Постоянных Циркониевых Зубов",
          "3D-КТ Диагностика и Хирургический Шаблон",
          "Местная Анестезия и Набор Медикаментов",
          "VIP-Трансфер Аэропорт-Отель",
          "Проживание в Отеле с Завтраками",
          "Все Лабораторные Работы Включены"
        ],
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        }
      },
      {
        "name": "ALL-ON-6 – DXL GERMAN",
        "brand": "DXL (Немецкая Инженерия)",
        "duration": "3+7 Рабочих Дней (2 Визита)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg",
        "included": [
          "6x Немецких Имплантов DXL",
          "12-14x Временных Зубов",
          "12-14x Постоянного Циркониевого Моста",
          "3D-КТ Планирование",
          "VIP-Трансфер и Отель Включены",
          "Лабораторные и CAD/CAM Работы"
        ],
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        }
      },
      {
        "name": "ALL-ON-6 – STRAUMANN",
        "brand": "Straumann (Швейцарский Золотой Стандарт)",
        "duration": "3+7 Рабочих Дней (2 Визита)",
        "img": "https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg",
        "included": [
          "6x Швейцарских Имплантов Straumann",
          "12-14x Премиальных Временных Зубов",
          "12-14x Монолитных Циркониевых Зубов",
          "Международный Паспорт с Пожизненной Гарантией",
          "Проживание в Люкс-Отеле 5 Звезд",
          "VIP-Трансфер Mercedes с Личным Водителем",
          "Персональный Русскоязычный Координатор"
        ],
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "popular": true
      },
      {
        "name": "ALL-ON-6 – MEGAGEN",
        "brand": "Megagen AnyRidge",
        "duration": "3+7 Рабочих Дней (2 Визита)",
        "img": "https://sohodent.com/doc/data1/All-on-4-package-10.jpg",
        "included": [
          "6x Имплантов Megagen",
          "12-14x Временных Зубов",
          "12-14x Циркониевый Мост",
          "Отель и Трансфер"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – NEODENT",
        "brand": "Neodent (Группа Straumann)",
        "duration": "3+7 Рабочих Дней (2 Визита)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg",
        "included": [
          "6x Имплантов Neodent",
          "12-14x Временных Зубов",
          "12-14x Циркониевый Мост",
          "Отель и Трансфер"
        ],
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        }
      },
      {
        "name": "ALL-ON-6 – HIOSSEN",
        "brand": "Hiossen USA",
        "duration": "3+7 Рабочих Дней (2 Визита)",
        "img": "https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg",
        "included": [
          "6x Имплантов Hiossen",
          "12-14x Временных Зубов",
          "12-14x Циркониевый Мост",
          "Отель и Трансфер"
        ],
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        }
      }
    ],
    "faqsPart1": [
      {
        "q": "В чём главное биомеханическое отличие All-on-6 от All-on-4?",
        "a": "В протоколе All-on-6 на челюсть устанавливается 6 титановых имплантов. 2 дополнительных импланта распределяют жевательное давление и позволяют зафиксировать мост на 14 зубов с максимальной прочностью."
      },
      {
        "q": "Кто является идеальным кандидатом для All-on-6?",
        "a": "Пациенты с достаточным объёмом кости в боковых отделах, молодые пациенты с сильным прикусом и те, кто хочет полный зубной ряд из 14 зубов."
      },
      {
        "q": "Требуется ли синус-лифтинг или наращивание кости при All-on-6?",
        "a": "Для 6 имплантов требуется достаточный объем кости в боковых отделах. При выраженной атрофии кости верхней челюсти может потребоваться синус-лифтинг."
      },
      {
        "q": "Как устанавливаются несъемные временные зубы в первый день?",
        "a": "В течение 24 часов после навигационной 3D-операции временный винтовой мост фиксируется на 6 имплантах. Вы ни дня не остаетесь без зубов."
      },
      {
        "q": "Что можно есть в течение 3 месяцев приживления?",
        "a": "Рекомендуется мягкая диета (рыба, паста, яйца, тушеные овощи, нежное филе). Твердую пищу (орехи, сухари) следует исключить до установки постоянного циркония."
      },
      {
        "q": "Какой материал используется для постоянного моста All-on-6?",
        "a": "Мы изготавливаем мосты из 100% монолитного многослойного немецкого циркония (1200+ МПа) с CAD/CAM титановой балкой. Никакого хрупкого акрила."
      },
      {
        "q": "Протез All-on-6 съемный или несъемный?",
        "a": "Протез на 100% несъемный и фиксируется на винтах. Снять его может только врач на плановом осмотре. Дома уход проводится с помощью ирригатора (Waterpik)."
      },
      {
        "q": "Почему 3D-навигационный шаблон необходим при All-on-6?",
        "a": "Установка 6 имплантов требует идеальной параллельности с точностью до десятых долей миллиметра для пассивной посадки циркониевого моста."
      },
      {
        "q": "Можно ли удалить разрушенные зубы во время операции All-on-6?",
        "a": "Да. Все не подлежащие сохранению зубы удаляются в один прием, сразу устанавливаются 6 имплантов и фиксируется временный мост."
      },
      {
        "q": "Каков долгосрочный процент успешности All-on-6?",
        "a": "Клинические данные за 15+ лет показывают приживаемость свыше 98,5%. Импланты Straumann и DXL рассчитаны на пожизненную службу."
      }
    ],
    "faqsPart2": [
      {
        "q": "Сколько поездок в Стамбул требуется для лечения All-on-6?",
        "a": "Ровно 2 визита: 1-й визит (3–5 дней) для операции и временных зубов; 2-й визит (5–7 дней, через 3 месяца) для установки постоянного циркониевого моста."
      },
      {
        "q": "Что входит в пакет All-on-6 клиники Master Smile Studio?",
        "a": "6 титановых имплантов, 12-14 временных зубов, 12-14 постоянных циркониевых зубов, 3D-КТ, операция, медикаменты, отель 4/5* с завтраками и VIP-трансфер Mercedes."
      },
      {
        "q": "Изменится ли цена пакета по прибытии в Стамбул?",
        "a": "Нет. Официальный расчет, составленный по вашей томографии/снимку, является гарантированной фиксированной ценой без скрытых доплат."
      },
      {
        "q": "Будет ли больно во время операции? Есть ли седация?",
        "a": "Процедура безболезненна благодаря компьютерной местной анестезии. Для тревожных пациентов доступна внутривенная седация под контролем анестезиолога."
      },
      {
        "q": "Можно ли ставить All-on-6 при диабете или курении?",
        "a": "Да. При компенсированном диабете приживаемость отличная. Курильщикам рекомендуется сократить курение в первые 2 недели после операции."
      },
      {
        "q": "Как работает международный паспорт с пожизненной гарантией?",
        "a": "Вы получаете паспорт производителя с серийными номерами каждого импланта, дающий официальную пожизненную международную гарантию."
      },
      {
        "q": "Как проводится контроль после возвращения домой?",
        "a": "Международный отдел координирует наблюдение через WhatsApp и организует регулярные видеоконсультации с нашими ведущими хирургами."
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
    "processTitle": "Протокол Точности All-on-4: От 3D КТ до Монолитного Циркония",
    "processSubtitle": "Каждая процедура All-on-4 в Master Smile Studio выполняется по цифровому хирургическому шаблону с успехом 98.2%.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D КТ и Хирургический Шаблон",
        "text": "3D томография исследует костную ткань и пазухи. Шаблон задает угол наклона 45 градусов для максимальной фиксации.",
        "specs": [
          {
            "key": "Precision",
            "val": "< 0.1 mm"
          },
          {
            "key": "Implant Angulation",
            "val": "45° Posterior Tilted"
          },
          {
            "key": "Bone Grafting",
            "val": "Zero Graft (Bypassed)"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Несъемный Мост за 24 Часа",
        "text": "На мультиюнит-абатменты за 24 часа фиксируется винтовой временный мост, возвращающий улыбку сразу.",
        "specs": [
          {
            "key": "Insertion Torque",
            "val": "35 – 50 Ncm"
          },
          {
            "key": "Delivery Time",
            "val": "24 Hours"
          },
          {
            "key": "Retention",
            "val": "Screw-Retained"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "Монолитный Циркониевый Мост CAD/CAM",
        "text": "Через 3 месяца изготавливается постоянный мост из немецкого многослойного циркония 1200+ МПа на 5-осевом станке.",
        "specs": [
          {
            "key": "Flexural Strength",
            "val": "1200 – 1400 MPa"
          },
          {
            "key": "Substructure",
            "val": "Solid Zirconia + Titanium"
          },
          {
            "key": "Longevity",
            "val": "Lifetime Warranty"
          }
        ]
      }
    ],
    "costTitle": "Международное Сравнение Стоимости: Великобритания / Германия vs. Стамбул",
    "costSubtitle": "Узнайте, почему европейские пациенты выбирают Master Smile Studio для восстановления All-on-6 без компромиссов в качестве.",
    "costTableHeaders": {
      "country": "Страна / Уровень Клиники",
      "costPerArch": "Стоимость All-on-6 (за челюсть)",
      "inclusions": "Что включено в стоимость",
      "valueAdvantage": "Преимущество Master Smile Studio"
    },
    "costTableRows": [
      {
        "country": "Великобритания (Harley Street / Частные)",
        "costPerArch": "£14,000 – £18,000",
        "inclusions": "Только операция и базовый мост. 3D-КТ, временные зубы и приемы оплачиваются отдельно.",
        "valueAdvantage": "Экономия 65% – 70% (£4,700 – £8,600) на системах Straumann/DXL."
      },
      {
        "country": "Германия / Швейцария (Частные Клиники)",
        "costPerArch": "€13,000 – €17,000",
        "inclusions": "Операция и лаборатория. Отель, VIP-трансфер и медикаменты не входят в счет.",
        "valueAdvantage": "Экономия 60% – 65% (€5,500 – €10,000) при идентичном титане."
      },
      {
        "country": "Master Smile Studio (Стамбул, Турция)",
        "costPerArch": "€5,500 – €10,000 / £4,700 – £8,600",
        "inclusions": "Все Включено: 6 Имплантов, Временный Мост, Постоянный Циркониевый Мост, 3D-КТ, Отель 5*, VIP-Трансфер Mercedes, Пожизненная Гарантия.",
        "valueAdvantage": "Гарантия Фиксированной Цены без скрытых медицинских доплат."
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
              {d.introP3LinkAll6}
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
              src="https://www.youtube.com/embed/fJAx9CUxhk4"
              title="All-on-4 Dental Implants in Istanbul Clinical Procedure"
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
      <section aria-labelledby="allon4-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="allon4-packages-heading" className={styles.packagesTitle}>
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
