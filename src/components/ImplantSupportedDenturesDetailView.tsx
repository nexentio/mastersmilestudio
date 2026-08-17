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
import styles from './ImplantSupportedDenturesDetailView.module.css';

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
  highImpact: string;
  titaniumBar: string;
  coldCure: string;
}

interface CompareTableRow {
  criteria: string;
  traditional: string;
  snapOn: string;
  allOn4: string;
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
  introP3LinkZygoma: string;
  introP3Tail: string;

  candidacyTitle: string;
  candidacySubtitle: string;
  candidacyPoints: CandidacyPoint[];

  compareTitle: string;
  compareSubtitle: string;
  compareTableHeaders: {
    criteria: string;
    traditional: string;
    snapOn: string;
    allOn4: string;
  };
  compareTableRows: CompareTableRow[];
  compareDecision: {
    whenSnapOnTitle: string;
    whenSnapOnText: string;
    whenAllOn4Title: string;
    whenAllOn4Text: string;
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
    highImpact: string;
    titaniumBar: string;
    coldCure: string;
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
    "introBadge": "SNAP-ON IMPLANT OVERDENTURES & BAR SYSTEMS",
    "introTitle": "Implant-Supported Dentures in Istanbul: Snap-On Stability & Palate-Free Comfort",
    "introLead": "Eliminate loose, slipping dentures and messy adhesive glues forever: 2 to 4 precision dental implants lock your overdenture securely into place with German Locator snap attachments or CAD/CAM milled titanium bars—delivering 100% chewing confidence and open-palate taste freedom in just 4 to 6 days.",
    "introP1": "Implant-supported dentures (often called Snap-On Overdentures) bridge the gap between traditional loose false teeth and expensive fixed full-arch bridges. By anchoring onto 2 to 4 biocompatible titanium implants per jaw, they eliminate painful gum friction, restore natural vertical facial dimensions, and provide 3 to 4 times stronger biting efficiency than conventional acrylic dentures.",
    "introP2": "For the upper jaw, our prosthodontists engineer a horseshoe-shaped open-palate design that leaves the roof of your mouth completely uncovered, restoring 100% of your natural taste sensation and temperature perception. The denture effortlessly snaps on with audible precision and can be removed in seconds for effortless cleaning.",
    "introP3Lead": "For permanently fixed non-removable bridge solutions, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkZygoma": "Zygomatic Implants for Severe Bone Loss",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Implant-Supported Overdentures?",
    "candidacySubtitle": "Designed for patients suffering from loose dentures or those seeking affordable full-mouth stability without extensive bone grafts.",
    "candidacyPoints": [
      {
        "title": "Loose, Floating Lower Jaw Dentures",
        "desc": "Patients whose bottom dentures constantly slip, lift during speech, or float while eating."
      },
      {
        "title": "Strong Gag Reflex & Nausea from Upper Plates",
        "desc": "Patients who cannot tolerate the thick acrylic plastic covering the entire roof of their mouth."
      },
      {
        "title": "Budget-Friendly Full-Mouth Rehabilitation",
        "desc": "Patients seeking rock-solid implant retention at a fraction of the cost of fixed All-on-4 zirconia."
      },
      {
        "title": "Reduced Jawbone Height in Older Adults",
        "desc": "Patients with moderate bone loss where 2–4 implants provide optimal support without complex grafting."
      }
    ],
    "compareTitle": "Objective Clinical Comparison: Snap-On Overdentures vs. Bar-Retained vs. Traditional vs. All-on-4",
    "compareSubtitle": "A scientific analysis of retention mechanisms, palate coverage, chewing efficiency, and total cost.",
    "compareTableHeaders": {
      "criteria": "Restorative Parameter",
      "traditional": "Traditional Loose Denture",
      "snapOn": "Snap-On Locator Overdenture (2-4 Implants) ⭐",
      "allOn4": "Fixed All-on-4 Zirconia Bridge"
    },
    "compareTableRows": [
      {
        "criteria": "Retention & Locking Mechanism",
        "traditional": "Suction & messy adhesive creams (Loose)",
        "snapOn": "German Locator Snap-Lock (Zero movement)",
        "allOn4": "Permanently screw-retained (Non-removable)"
      },
      {
        "criteria": "Upper Palate Covering",
        "traditional": "100% Full acrylic coverage (Alters taste)",
        "snapOn": "Horseshoe Open Palate (100% Taste restored)",
        "allOn4": "Horseshoe Open Palate (100% Taste restored)"
      },
      {
        "criteria": "Masticatory Chewing Force",
        "traditional": "15% – 20% of natural teeth",
        "snapOn": "65% – 80% of natural teeth (Bite apples/steak)",
        "allOn4": "95% – 100% of natural teeth"
      },
      {
        "criteria": "Number of Implants Required",
        "traditional": "0 Implants",
        "snapOn": "2 Implants (Lower) / 4 Implants (Upper)",
        "allOn4": "4 to 6 Implants per jaw"
      },
      {
        "criteria": "Cleaning & Oral Hygiene",
        "traditional": "Removable cleaning",
        "snapOn": "Simple click-out for effortless cleaning",
        "allOn4": "Fixed (Requires Waterpik & superfloss)"
      },
      {
        "criteria": "Bone Loss Prevention",
        "traditional": "Accelerates jawbone resorption under pressure",
        "snapOn": "Stimulates & preserves alveolar bone height",
        "allOn4": "Full osseous stimulation & preservation"
      },
      {
        "criteria": "Total Treatment Cost Level",
        "traditional": "Lowest cost (Poor quality of life)",
        "snapOn": "Highly Affordable (Best value for stability)",
        "allOn4": "Premium Investment"
      }
    ],
    "compareDecision": {
      "whenSnapOnTitle": "When is a Snap-On Overdenture the Best Choice?",
      "whenSnapOnText": "Snap-On overdentures are ideal for patients seeking rock-solid chewing stability, an open palate, and effortless hygiene on a sensible budget, without complex bone grafting.",
      "whenAllOn4Title": "When is Fixed All-on-4 Advised Instead?",
      "whenAllOn4Text": "All-on-4 is recommended if you desire permanently screwed-in, 100% fixed teeth that never come out of your mouth and feel identical to natural teeth."
    },
    "processTitle": "3-Phase Precision Protocol for Implant-Supported Dentures",
    "processSubtitle": "Our prosthodontic team utilizes computer-guided 3D digital dentistry for immediate stability and aesthetic smile harmony.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Guided Surgical Stent",
        "text": "High-definition 3D tomography identifies dense cortical bone in the anterior jaw. A precision surgical stent determines the exact parallel angulation for optimal Locator attachment.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Parallelism Guide",
            "val": "Digital Stent Alignment"
          },
          {
            "key": "Implants Planned",
            "val": "2 to 4 Implants per Jaw"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Minimally Invasive Placement & Immediate Functional Denture",
        "text": "Implants are placed through keyhole flapless surgery under local anesthesia. Your existing or temporary denture is soft-relined so you leave with functional teeth on day one.",
        "specs": [
          {
            "key": "Surgical Approach",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Anesthesia",
            "val": "Local Anesthesia / Sedation"
          },
          {
            "key": "Immediate Wear",
            "val": "Soft-Relined Functional Teeth"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "German Locator Snap Attachment & High-Impact Overdenture",
        "text": "After 8–12 weeks of bone healing, Swiss/German Locator abutments are attached. A high-impact cross-linked overdenture with multi-layered composite teeth is custom delivered.",
        "specs": [
          {
            "key": "Attachment System",
            "val": "German Locator / CAD/CAM Bar"
          },
          {
            "key": "Base Material",
            "val": "High-Impact Cross-Linked Resin"
          },
          {
            "key": "Teeth Grade",
            "val": "Multi-Layer Nanocomposite"
          }
        ]
      }
    ],
    "materialsTitle": "Overdenture Base & Tooth Materials: Engineered for Durability",
    "materialsSubtitle": "Discover the advanced materials used to craft lightweight, fracture-resistant overdentures that withstand years of daily snap retention.",
    "materialsSpecLabels": {
      "material": "Base & Tooth Composition",
      "strength": "Impact & Flexural Strength",
      "chipping": "Wear & Abrasion Resistance",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "High-Impact Resin + Nanocomposite Teeth",
        "sub": "Reinforced Cross-Linked Base with Premium Composite Teeth",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "High-Impact PMMA + Multi-Layer Nanocomposite Teeth",
        "strength": "130 – 160 MPa (High Impact Resistance)",
        "chippingRisk": "Very Low (Micro-filler reinforced composite)",
        "lifespan": "8 – 12+ Years (Easily relined/serviced)",
        "features": [
          {
            "text": "Lightweight, natural oral feel with open-palate horseshoe design",
            "status": "good"
          },
          {
            "text": "Multi-layer aesthetic teeth mimic natural optical depth and enamel shade",
            "status": "good"
          },
          {
            "text": "Integrated titanium housings eliminate retention housing loosening",
            "status": "good"
          },
          {
            "text": "Replaceable Locator nylon inserts allow easy tension adjustment anytime",
            "status": "good"
          }
        ]
      },
      {
        "title": "CAD/CAM Milled Titanium Bar Overdenture",
        "sub": "Solid Titanium Substructure Connecting 4 Implants",
        "badge": "Maximum Rigid Retention",
        "isGold": false,
        "material": "Milled Grade 5 Titanium Bar + Acrylic Overdenture",
        "strength": "850 – 1000 MPa (Indestructible Substructure)",
        "chippingRisk": "Zero Substructure Fracture",
        "lifespan": "15+ Years (Bar lasts lifetime)",
        "features": [
          {
            "text": "Splints all 4 implants together for maximum load distribution",
            "status": "good"
          },
          {
            "text": "Zero micro-movement even during heavy chewing of tough meats",
            "status": "good"
          },
          {
            "text": "Allows horse-shoe palate-free design even on the upper jaw",
            "status": "good"
          },
          {
            "text": "Higher initial laboratory fabrication cost than standalone Locators",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Traditional Cold-Cure Acrylic Denture",
        "sub": "Standard Base with Basic Plastic Teeth (Not Recommended)",
        "badge": "Economy Material",
        "isGold": false,
        "material": "Cold-Cure Acrylic + Soft Monolayer Plastic Teeth",
        "strength": "60 – 80 MPa (Brittle)",
        "chippingRisk": "High (Teeth wear down rapidly within 2-3 years)",
        "lifespan": "3 – 5 Years",
        "features": [
          {
            "text": "Low initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Rapid tooth wear flattens chewing surfaces and collapses jaw height",
            "status": "bad"
          },
          {
            "text": "Porous resin absorbs bacteria, stains, and chronic food odors",
            "status": "bad"
          },
          {
            "text": "Prone to cracking under modern implant retention forces",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "highImpact": "High-Impact Composite ⭐",
      "titaniumBar": "CAD/CAM Titanium Bar",
      "coldCure": "Cold-Cure Economy Acrylic"
    },
    "materialsTableRows": [
      {
        "criteria": "Impact Resistance",
        "highImpact": "High (Shatter-proof cross-linked)",
        "titaniumBar": "Maximum (Solid titanium core)",
        "coldCure": "Low (Prone to cracking)"
      },
      {
        "criteria": "Tooth Wear Resistance",
        "highImpact": "Very High (Nanocomposite fillers)",
        "titaniumBar": "Very High (Nanocomposite teeth)",
        "coldCure": "Poor (Plastic flattens quickly)"
      },
      {
        "criteria": "Open Palate Horseshoe Suitability",
        "highImpact": "100% Recommended (Upper jaw)",
        "titaniumBar": "100% Recommended (Upper jaw)",
        "coldCure": "Requires full bulky palate"
      },
      {
        "criteria": "Stain & Odor Resistance",
        "highImpact": "High (Dense micro-surface)",
        "titaniumBar": "High (Non-porous titanium)",
        "coldCure": "Porous (Absorbs odors & stains)"
      },
      {
        "criteria": "Maintenance & Servicing",
        "highImpact": "Simple 5-minute nylon cap change",
        "coldCure": "Frequent relining & replacements"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "highImpact": "8 – 12+ Years",
        "titaniumBar": "15+ Years (Bar is Lifetime)",
        "coldCure": "3 – 5 Years"
      }
    ],
    "packagesTitle": "Implant-Supported Overdenture Packages & Dynamic Currency Calculator",
    "packagesSubtitle": "All-inclusive single-jaw and full-mouth packages featuring certified Straumann, Nobel Biocare, and German Locator systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "2-Implant Mandibular Snap-On Package",
        "brand": "Lower Jaw Solution (2x Implants + German Locators)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "popular": true,
        "price": {
          "EUR": "€1,950",
          "GBP": "£1,680",
          "USD": "$2,150"
        },
        "included": [
          "2x Premium Titanium Dental Implants for lower jaw",
          "2x Authentic German Locator Snap-On Attachments",
          "Custom High-Impact Reinforced Lower Overdenture",
          "Multi-layered aesthetic nanocomposite teeth",
          "3D CBCT Tomography & digital placement guide",
          "Local anesthesia, surgical pack & post-op medications",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Airport & Clinic Transfers included"
        ]
      },
      {
        "name": "4-Implant Maxillary Palateless Snap-On",
        "brand": "Upper Jaw Horseshoe Solution (4x Implants + Open Palate)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€2,950",
          "GBP": "£2,550",
          "USD": "$3,250"
        },
        "included": [
          "4x Premium Titanium Implants for upper jaw stability",
          "4x German Locator Attachments with adjustable retention",
          "Horseshoe Open-Palate Overdenture (Zero roof covering)",
          "Restores 100% natural taste sensation and speech clarity",
          "High-wear aesthetic nanocomposite teeth (Shades BL1-A3)",
          "3D CBCT Tomography scan & computer-guided surgery",
          "Lifetime Global Manufacturer Guarantee Passport",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "4-Implant CAD/CAM Titanium Bar Package",
        "brand": "Milled Titanium Bar-Retained Overdenture System",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,600",
          "GBP": "£3,100",
          "USD": "$3,950"
        },
        "included": [
          "4x Premium Titanium Implants in upper or lower jaw",
          "Custom 5-Axis CAD/CAM Milled Titanium Connecting Bar",
          "Bar-retained overdenture with precision retentive clips",
          "Eliminates all micro-movement during intense chewing",
          "High-Impact Reinforced Overdenture with Composite Teeth",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Lifetime Warranty on Titanium Bar & Implants",
          "5-Star Hotel Stay & Private VIP Chauffeur Transport"
        ]
      },
      {
        "name": "Dual-Arch Complete Snap-On Rehabilitation",
        "brand": "Full Mouth Solution (6 Implants: 4 Upper + 2 Lower)",
        "duration": "4+6 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€4,800",
          "GBP": "£4,150",
          "USD": "$5,280"
        },
        "included": [
          "6x Titanium Implants Total (4 Upper Jaw + 2 Lower Jaw)",
          "6x German Locator Attachments with retention matrix pack",
          "1x Open-Palate Upper Snap-On Overdenture",
          "1x Rock-Solid Lower Snap-On Overdenture",
          "Comprehensive 3D CBCT scan & full occlusal bite calibration",
          "All surgical consumables, local anesthesia & medications",
          "Lifetime International Manufacturer Warranty Passports",
          "7 Nights 5-Star Luxury Hotel & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Premium Straumann Locator Snap-On",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,400",
          "GBP": "£2,950",
          "USD": "$3,750"
        },
        "included": [
          "2-4x Genuine Swiss Straumann Roxolid Implants",
          "Hydrophilic SLActive surface for ultra-fast bone fusion",
          "Original Straumann Novaloc / Locator Attachment System",
          "High-Impact Master Overdenture with Ivoclar Teeth",
          "3D CBCT Guided Surgery & Soft-Tissue Profiling",
          "Lifetime International Straumann Guarantee Passport",
          "5-Star Hotel Stay & VIP Mercedes Airport Chauffeur"
        ]
      },
      {
        "name": "BPS Biofunctional Ultra-Aesthetic Snap-On",
        "brand": "Ivoclar Vivadent BPS System (Biofunctional Prosthetics)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€3,200",
          "GBP": "£2,750",
          "USD": "$3,500"
        },
        "included": [
          "2-4x Titanium Implants with German Locator Attachments",
          "Certified Ivoclar BPS Biofunctional Prosthetic Protocol",
          "Ivoclar SR Phonares II multi-layered aesthetic teeth",
          "Gnathometer bite registration for optimal jaw alignment",
          "3D Tomography scan & computer-guided surgery",
          "Lifetime Manufacturer Warranty on Implants & Attachments",
          "VIP Mercedes Chauffeur & Luxury Hotel Stay included"
        ]
      }
    ],
    "costTitle": "International Cost Comparison: Implant-Supported Dentures (UK / Germany vs Istanbul)",
    "costSubtitle": "Compare real clinical costs per jaw including 2 to 4 implants, Locator attachments, reinforced overdenture, 5-star hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Cost per Jaw (Implants + Overdenture)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private Clinics)",
        "costPerArch": "£6,000 – £10,000 ($7,800 – $13,000)",
        "inclusions": "Implants and denture only. Locator abutments (£450 each), CBCT scan (£200), and extractions billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Restorative Clinics)",
        "costPerArch": "€5,500 – €9,000 ($6,000 – $9,900)",
        "inclusions": "Surgeon fee and implants. Locator attachments, lab fabrication, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€1,950 – €3,600 (£1,680 – £3,100)",
        "inclusions": "100% All-Inclusive: 2–4 certified implants, German Locators, high-impact composite overdenture, 3D CBCT, 5-star hotel & VIP transfers.",
        "valueAdvantage": "65% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Frequently Asked Questions: Implant-Supported Dentures",
    "faqSubtitle": "Clinically verified answers regarding Snap-On retention, open palate comfort, chewing power, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Prosthetic FAQ (Snap-On Overdenture Mechanics)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is an Implant-Supported Overdenture and how does it snap into place?",
        "a": "An implant-supported overdenture is a removable prosthetic arch that snaps firmly onto 2 to 4 dental implants using precision German Locator attachments or ball anchors. It locks with an audible click, eliminating all shifting, rocking, or accidental dislodgment."
      },
      {
        "q": "How does a Snap-On overdenture compare to traditional loose dentures?",
        "a": "Unlike traditional dentures that rely on suction and messy adhesive creams, Snap-On overdentures are 100% mechanically locked. They provide 3 to 4 times greater chewing force, eliminate gum sores, and will never slip while eating or laughing."
      },
      {
        "q": "Can upper implant overdentures be made without covering the palate?",
        "a": "Yes! When supported by 4 dental implants, upper overdentures can be fabricated in a horseshoe shape with an open palate. Leaving the roof of the mouth uncovered restores 100% of your natural taste sensation and temperature perception."
      },
      {
        "q": "How many implants are needed for the lower and upper jaw?",
        "a": "The dense bone of the lower jaw requires a minimum of 2 implants for rock-solid retention. The softer bone of the upper jaw requires 4 implants to securely support a palateless horseshoe overdenture."
      },
      {
        "q": "Do I need to remove my Snap-On denture at night?",
        "a": "Yes. While overdentures remain firmly locked all day during eating and speaking, removing them at night allows your gum tissues to rest and makes oral hygiene around the Locator abutments effortless."
      },
      {
        "q": "How long do the Locator snap attachments last before replacement?",
        "a": "The titanium Locator abutments screwed into the implants last a lifetime. The tiny replaceable nylon retention caps inside the denture typically last 12 to 18 months and can be replaced in less than 2 minutes by any dentist or at home."
      },
      {
        "q": "What is the difference between Locator Snap-On and CAD/CAM Bar-Retained dentures?",
        "a": "Locators use individual stud attachments for each implant, offering simple maintenance and a low profile. A CAD/CAM milled titanium bar connects all 4 implants together with rigid clips, providing the highest possible stability for extreme chewing forces."
      },
      {
        "q": "Will I be left without teeth during the healing process?",
        "a": "Never. On the day of implant placement, your existing denture is soft-relined or a functional temporary denture is fitted, ensuring you leave our clinic with an attractive smile and immediate chewing capability."
      },
      {
        "q": "Can I eat hard foods like apples, steak, and nuts with Snap-On dentures?",
        "a": "Yes. Because the biting force is transferred directly into the jawbone through the implants rather than resting on soft gums, patients regain 70% to 80% of natural chewing efficiency, allowing you to comfortably enjoy solid meats, fruits, and crusty bread."
      },
      {
        "q": "Can existing loose dentures be converted into Snap-On dentures?",
        "a": "If your existing denture is in good structural condition and properly aligned with your bite, our laboratory can often retrofit titanium Locator housings into your current denture once the implants have healed."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many visits and days in Istanbul are required for overdenture treatment?",
        "a": "The treatment requires 2 short visits. Visit 1 requires 3 to 4 days for 3D CBCT planning, implant placement, and fitting of a temporary denture. After 8 to 12 weeks of bone healing, Visit 2 requires 5 days for Locator attachment and final overdenture delivery."
      },
      {
        "q": "What is included in the Master Smile Studio Overdenture Package?",
        "a": "Our all-inclusive packages cover all titanium implants, German Locator attachments, reinforced overdenture with composite teeth, 3D CBCT scans, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of implants and Locator attachments do you use?",
        "a": "We use globally certified implant systems including Straumann Group (Switzerland), Nobel Biocare, Medentika, and authentic German Zest/Bredent Locator attachments, all accompanied by international guarantee passports."
      },
      {
        "q": "Why are Implant-Supported Dentures 65%–70% cheaper in Istanbul than in the UK or Germany?",
        "a": "Lower laboratory operational expenses, favorable exchange rates, and efficient clinical workflows in Istanbul allow us to provide genuine Swiss and German implant systems at a fraction of Western clinic prices without compromising prosthetic excellence."
      },
      {
        "q": "What guarantees and warranties are provided?",
        "a": "All titanium dental implants come with an official Lifetime International Manufacturer Warranty. Master Smile Studio also provides a clinical warranty covering the overdenture prosthetic base, teeth, and laboratory craftsmanship."
      },
      {
        "q": "Is bone grafting necessary before getting implant overdentures?",
        "a": "In most cases, no. Because only 2 to 4 implants are required and can be strategically angled into available bone in the front of the jaw, overdentures avoid the need for complex sinus lifts or bone grafting in 90% of patients."
      },
      {
        "q": "How do I get a free treatment plan and quote before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief prosthodontist and implant surgeon will analyze your bone structure and provide a tailored 3D treatment plan and fixed price quote within 24 hours."
      }
    ]
  },
  "tr": {
    "introBadge": "ÇIT ÇITLI İMPLANT DESTEKLİ DAMAK & BAR SİSTEMLERİ",
    "introTitle": "İstanbul İmplant Destekli Protez (Çıt Çıtlı Damak): Sıfır Kayma ve Açık Damak Konforu",
    "introLead": "Oynayan, vuran ve yemek yerken çıkan gevşek damak protezlerine ve yapıştırıcı kremlere son verin: Çene kemiğine yerleştirilen 2 ila 4 adet implant üzerine kilitlenen Alman Locator çıtçıt tutucular veya CAD/CAM titanyum barlar ile sadece 4 ila 6 günde %100 sabit çiğneme konforu.",
    "introP1": "İmplant destekli çıtçıtlı protezler (Overdenture), klasik damak protezleri ile yüksek maliyetli sabit porselen köprüler arasındaki en konforlu ve ekonomik altın standarttır. Çene kemiğindeki 2-4 implanta sıfır boşlukla kilitlenerek protezin ağızda oynamasını, damağa vurmasını ve konuşurken fırlama korkusunu tamamen yok eder.",
    "introP2": "Üst çenede uygulanan açık damak (at nalı) tasarımı sayesinde damak kubbesi tamamen serbest kalır; hasta yiyeceklerin tadını ve sıcaklığını %100 doğal olarak hisseder. Protez çıt sesiyle kolayca kilitlenir ve temizlik için saniyeler içinde çıkarılabilir.",
    "introP3Lead": "Tamamen sabit ve hiç çıkmayan zirkonyum köprü tedavileri için ",
    "introP3LinkAll4": "All-on-4 İmplant Tedavisi",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 İmplant Tedavisi",
    "introP3And": " veya ",
    "introP3LinkZygoma": "Zigomatik İmplant Çözümlerimizi",
    "introP3Tail": " inceleyebilirsiniz.",
    "candidacyTitle": "İmplant Destekli Çıt Çıtlı Damak İçin Uygun Bir Aday Mısınız?",
    "candidacySubtitle": "Oynayan damaklardan bıkan veya kemik tozu ameliyatı olmadan ekonomik ve sağlam diş isteyen hastalar için geliştirilmiştir.",
    "candidacyPoints": [
      {
        "title": "Sürekli Oynayan ve Vuran Alt Damaklar",
        "desc": "Yemek yerken ve konuşurken yerinden çıkan, yapıştırıcı kremlere rağmen tutmayan alt damak kullanan hastalar."
      },
      {
        "title": "Üst Damak Kaplamasından Midesi Bulananlar",
        "desc": "Damağın tamamını kapatan akrilik yüzünden öğürme refleksi, tat kaybı ve konuşma bozukluğu yaşayanlar."
      },
      {
        "title": "Ekonomik Tam Çene İmplant Çözümü Arayanlar",
        "desc": "Sabit All-on-4/6 zirkonyum köprülerin yüksek maliyetine girmeden implant sağlamlığına kavuşmak isteyenler."
      },
      {
        "title": "Kemik Erimesi Olan İleri Yaş Hastalar",
        "desc": "İleri kemik tozu ve sinüs ameliyatı olmadan sadece 2-4 implantla sağlam çiğneme gücü isteyenler."
      }
    ],
    "compareTitle": "Objektif Klinik Karşılaştırma: Çıt Çıtlı Damak vs. Bar Destekli vs. Klasik Damak vs. All-on-4",
    "compareSubtitle": "Tutuculuk, damak kapatma, çiğneme kuvveti ve tedavi maliyetlerinin bilimsel analizi.",
    "compareTableHeaders": {
      "criteria": "Klinik Parametre",
      "traditional": "Klasik Oynayan Damak",
      "snapOn": "Çıt Çıtlı Damak (2-4 İmplant) ⭐",
      "allOn4": "Sabit All-on-4 Zirkonyum Köprü"
    },
    "compareTableRows": [
      {
        "criteria": "Tutuculuk ve Kilit Mekanizması",
        "traditional": "Yalnızca vakum & yapıştırıcı krem (Oynar)",
        "snapOn": "Alman Locator Kilit Sistemi (Sıfır hareket)",
        "allOn4": "Vidalanarak sabitlenir (Hiç çıkmaz)"
      },
      {
        "criteria": "Üst Damak Bölgesi Kapatma",
        "traditional": "Damağın tamamı kapalıdır (Tat kaybı)",
        "snapOn": "Açık At Nalı Damak (Tat alma %100 korunur)",
        "allOn4": "Açık At Nalı Damak (Tat alma %100 korunur)"
      },
      {
        "criteria": "Çiğneme Kuvveti Verimliliği",
        "traditional": "Doğal dişin %15 – %20si kadar",
        "snapOn": "Doğal dişin %65 – %80i (Et/elma rahatça yenir)",
        "allOn4": "Doğal dişin %95 – %100ü"
      },
      {
        "criteria": "Gereken İmplant Sayısı",
        "traditional": "0 İmplant",
        "snapOn": "2 İmplant (Alt) / 4 İmplant (Üst)",
        "allOn4": "Çene başına 4 - 6 İmplant"
      },
      {
        "criteria": "Ağız Hijyeni ve Temizlik",
        "traditional": "Çıkarılarak temizlenir",
        "snapOn": "Çıtçıtından çıkarıp 1 dakikada kolay temizlik",
        "allOn4": "Sabit (Ağız duşu ve özel ip gerekir)"
      },
      {
        "criteria": "Çene Kemiği Erimesini Önleme",
        "traditional": "Baskıyla kemik erimesini hızlandırır",
        "snapOn": "İmplantlar sayesinde kemik erimesini durdurur",
        "allOn4": "Kemiği tam olarak korur ve uyarır"
      },
      {
        "criteria": "Tedavi Maliyet Düzeyi",
        "traditional": "En ucuz (Çok düşük yaşam kalitesi)",
        "snapOn": "Son Derece Ekonomik (Fiyat/Performans lideri)",
        "allOn4": "Premium Yatırım"
      }
    ],
    "compareDecision": {
      "whenSnapOnTitle": "Çıt Çıtlı Damak Ne Zaman En Doğru Tercihtir?",
      "whenSnapOnText": "Oynamayan sağlam bir çiğneme, açık damak ferahlığı ve kolay temizlenebilirlik arayan, aynı zamanda bütçesini zorlamak istemeyen hastalar için en ideal çözümdür.",
      "whenAllOn4Title": "Sabit All-on-4 Ne Zaman Tercih Edilmelidir?",
      "whenAllOn4Text": "Ağzından hiç çıkmayan, doğal diş gibi vidalanmış sabit zirkonyum köprü isteyen ve protez takıp çıkarmak istemeyen hastalar için tavsiye edilir."
    },
    "processTitle": "3 Aşamalı Hassas Çıt Çıtlı Protez Protokolü",
    "processSubtitle": "Master Smile Studio’da her çıtçıtlı overdenture 3D bilgisayarlı teşhisle maksimum tutuculuk için planlanır.",
    "processCards": [
      {
        "step": "AŞAMA 01",
        "title": "3D Tomografi & Sanal Cerrahi Rehber Kılavuzu",
        "text": "Yüksek çözünürlüklü tomografi ile çenedeki en sert kemik alanları taranır. İmplantların birbirine tam paralel olması için 3D cerrahi rehber üretilir.",
        "specs": [
          {
            "key": "CBCT Hassasiyeti",
            "val": "< 0.1 mm netlik"
          },
          {
            "key": "Paralellik Rehberi",
            "val": "Dijital Stent Hizalaması"
          },
          {
            "key": "Planlanan İmplant",
            "val": "Çene Başına 2 - 4 İmplant"
          }
        ]
      },
      {
        "step": "AŞAMA 02",
        "title": "Minimal İnvaziv Yerleşim ve Geçici Protez (1. Gün)",
        "text": "İmplantlar lokal anestezi altında dikişsiz yerleştirilir. Mevcut proteziniz yumuşak astarla uyumlanarak ilk günden dişli kalmanız sağlanır.",
        "specs": [
          {
            "key": "Cerrahi Yaklaşım",
            "val": "Minimal İnvaziv Dikişsiz"
          },
          {
            "key": "Anestezi",
            "val": "Lokal Anestezi / Sedasyon"
          },
          {
            "key": "İlk Gün Konforu",
            "val": "Uyumlu Geçici Dişler"
          }
        ]
      },
      {
        "step": "AŞAMA 03",
        "title": "Alman Locator Çıtçıt Kilitleri ve Kalıcı Protez Teslimi",
        "text": "8-12 haftalık kemik kaynamasının ardından orijinal Locator tutucular takılır. Kırılmaya dirençli nanokompozit dişli kalıcı çıtçıtlı proteziniz teslim edilir.",
        "specs": [
          {
            "key": "Tutucu Sistemi",
            "val": "Orijinal Alman Locator / Bar"
          },
          {
            "key": "Kaide Malzemesi",
            "val": "Yüksek Mukavemetli Akrilik"
          },
          {
            "key": "Diş Kalitesi",
            "val": "Çok Katmanlı Nanokompozit"
          }
        ]
      }
    ],
    "materialsTitle": "Çıt Çıtlı Protez Malzemeleri: Sağlamlık ve Estetik Analizi",
    "materialsSubtitle": "Günlük takıp çıkarma gerilimine ve çiğneme baskısına yıllarca dayanacak üstün protez malzemeleri.",
    "materialsSpecLabels": {
      "material": "Kaide ve Diş Yapısı",
      "strength": "Bükülme ve Darbe Direnci",
      "chipping": "Aşınma ve Kırılma Direnci",
      "lifespan": "Beklenen Klinik Ömür"
    },
    "materialsCards": [
      {
        "title": "Güçlendirilmiş Kaide + Nanokompozit Diş",
        "sub": "Çapraz Bağlı Akrilik Gövde ve Çok Katmanlı Estetik Dişler",
        "badge": "Klinik Standartımız",
        "isGold": true,
        "material": "Yüksek Mukavemetli PMMA + Nanokompozit Dişler",
        "strength": "130 – 160 MPa (Kırılmaya Dirençli)",
        "chippingRisk": "Çok Düşük (Mikro-hibrit güçlendirilmiş)",
        "lifespan": "8 – 12+ Yıl (Kolayca astar yenilenir)",
        "features": [
          {
            "text": "Hafif yapı ve damağı kapatmayan açık at nalı tasarımı",
            "status": "good"
          },
          {
            "text": "Doğal diş minesi parlaklığına sahip estetik nanokompozit dişler",
            "status": "good"
          },
          {
            "text": "Gövde içine gömülü titanyum yuvalar sayesinde aşınmaz tutuculuk",
            "status": "good"
          },
          {
            "text": "Yıllar içinde gevşeyen Locator lastikleri 2 dakikada kolayca yenilenir",
            "status": "good"
          }
        ]
      },
      {
        "title": "CAD/CAM Titanyum Barlı Overdenture",
        "sub": "4 İmplantı Birbirine Bağlayan Masif Titanyum Bar",
        "badge": "Maksimum Rijit Tutuculuk",
        "isGold": false,
        "material": "5 Eksenli Kazınmış Grade 5 Titanyum Bar + Protez",
        "strength": "850 – 1000 MPa (Kırılmaz Masif Bar)",
        "chippingRisk": "Bar Kırılma Riski Sıfır",
        "lifespan": "15+ Yıl (Titanyum bar ömür boyudur)",
        "features": [
          {
            "text": "Tüm implantları birbirine bağlayarak çiğneme yükünü eşit dağıtır",
            "status": "good"
          },
          {
            "text": "En sert yiyeceklerde bile protezin mikro esnemesini sıfırlar",
            "status": "good"
          },
          {
            "text": "Üst çenede damağın tamamen açık bırakılmasına imkan tanır",
            "status": "good"
          },
          {
            "text": "Tekil Locator tutuculara göre başlangıç üretim maliyeti daha yüksektir",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Geleneksel Soğuk Akrilik Damak",
        "sub": "Standart Plastik Dişli Eski Tip Protez (Tavsiye Edilmez)",
        "badge": "Ekonomik Malzeme",
        "isGold": false,
        "material": "Soğuk Akrilik + Tek Katmanlı Yumuşak Plastik Diş",
        "strength": "60 – 80 MPa (Kırılgan)",
        "chippingRisk": "Yüksek (Plastik dişler 2-3 yılda tamamen erir)",
        "lifespan": "3 – 5 Yıl",
        "features": [
          {
            "text": "Daha düşük başlangıç maliyeti",
            "status": "good"
          },
          {
            "text": "Plastik dişler çiğnemeyle hızla aşınır ve çene kapanışı çöker",
            "status": "bad"
          },
          {
            "text": "Gözenekli yapısı koku, leke ve bakteri biriktirir",
            "status": "bad"
          },
          {
            "text": "İmplant çıtçıt baskısı altında gövdeden çatlama riski taşır",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Karşılaştırma Kriteri",
      "highImpact": "Güçlendirilmiş Kompozit ⭐",
      "titaniumBar": "CAD/CAM Titanyum Bar",
      "coldCure": "Klasik Soğuk Akrilik"
    },
    "materialsTableRows": [
      {
        "criteria": "Darbe ve Kırılma Direnci",
        "highImpact": "Yüksek (Kırılmaz çapraz bağlı)",
        "titaniumBar": "Maksimum (Masif titanyum iskelet)",
        "coldCure": "Düşük (Çatlama riski yüksek)"
      },
      {
        "criteria": "Diş Aşınma Dayanımı",
        "highImpact": "Çok Yüksek (Nanokompozit diş)",
        "titaniumBar": "Çok Yüksek (Nanokompozit diş)",
        "coldCure": "Zayıf (Plastik diş erir/düzleşir)"
      },
      {
        "criteria": "Açık At Nalı Damak Uyumu",
        "highImpact": "%100 Tavsiye Edilir",
        "titaniumBar": "%100 Tavsiye Edilir",
        "coldCure": "Damağın tamamını kapatmak zorundadır"
      },
      {
        "criteria": "Leke ve Koku Direnci",
        "highImpact": "Yüksek (Gözeneksiz mikroyüzey)",
        "titaniumBar": "Yüksek (Titanyum nötrlüğü)",
        "coldCure": "Gözenekli (Koku ve leke çeker)"
      },
      {
        "criteria": "Bakım ve Lastik Değişimi",
        "highImpact": "5 dakikada pratik lastik yenileme",
        "titaniumBar": "5 dakikada pratik klips değişimi",
        "coldCure": "Sürekli astar ve tamir gerektirir"
      },
      {
        "criteria": "Beklenen Klinik Ömür",
        "highImpact": "8 – 12+ Yıl",
        "titaniumBar": "15+ Yıl (Bar Ömür Boyu)",
        "coldCure": "3 – 5 Yıl"
      }
    ],
    "packagesTitle": "İmplant Destekli Çıt Çıtlı Protez Paketleri ve Para Birimi Seçicisi",
    "packagesSubtitle": "Nobel Biocare, Straumann ve orijinal Alman Locator sistemleri dahil şeffaf ve her şey dahil paketler.",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket Kapsamı:",
    "pricePerArchLabel": "Fiyat (Her Şey Dahil):",
    "getQuoteBtn": "Ücretsiz Teklif Alın",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "packages": [
      {
        "name": "2 İmplantlı Alt Çene Çıt Çıtlı Damak",
        "brand": "Alt Çene Çözümü (2x İmplant + Alman Locator Tutucular)",
        "duration": "İstanbul’da 3+5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/nucleoss.webp",
        "popular": true,
        "price": {
          "EUR": "€1,950",
          "GBP": "£1,680",
          "USD": "$2,150"
        },
        "included": [
          "2x Alt çeneye özel Premium Titanyum Dental İmplant",
          "2x Orijinal Alman Locator Çıtçıt Kilit Sistemi",
          "Kişiye özel kırılmaya dayanıklı alt çene overdenture damak",
          "Aşınmaz estetik çok katmanlı nanokompozit dişler",
          "3D Tomografi (CBCT) ve dijital cerrahi kılavuz",
          "Lokal anestezi, sarf malzemeleri ve operasyon sonrası ilaçlar",
          "Ömür Boyu Uluslararası Üretici Garanti Pasaportu",
          "VIP Mercedes Havalimanı & Klinik Transferleri Dahil"
        ]
      },
      {
        "name": "4 İmplantlı Üst Çene Açık Damak Paketi",
        "brand": "Üst Çene At Nalı Çözümü (4x İmplant + Açık Damak)",
        "duration": "İstanbul’da 3+5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€2,950",
          "GBP": "£2,550",
          "USD": "$3,250"
        },
        "included": [
          "4x Üst çene tutuculuğu için Premium Titanyum İmplant",
          "4x Ayarlanabilir tutuculuğa sahip Alman Locator sistemi",
          "Damağı kapatmayan açık at nalı (horseshoe) overdenture",
          "Tat alma duyusunu ve konuşma netliğini %100 korur",
          "Yüksek estetik nanokompozit dişler (BL1-A3 renk seçenekleri)",
          "3D Tomografi ve bilgisayar kılavuzlu cerrahi planlama",
          "Ömür Boyu Küresel Üretici Garantisi ve Pasaportu",
          "5 Yıldızlı Lüks Otel Konaklaması & VIP Mercedes Transfer"
        ]
      },
      {
        "name": "4 İmplantlı CAD/CAM Titanyum Bar Paketi",
        "brand": "Titanyum Bar Destekli Rijit Overdenture Sistemi",
        "duration": "İstanbul’da 3+5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,600",
          "GBP": "£3,100",
          "USD": "$3,950"
        },
        "included": [
          "4x Üst veya alt çene Premium Titanyum İmplant",
          "5 Eksenli robotik kazınmış masif Titanyum Bağlantı Barı",
          "Hassas kilitli klipslerle bara oturan overdenture protez",
          "En sert gıdalarda bile protezin oynamasını tamamen sıfırlar",
          "Güçlendirilmiş nanokompozit dişli lüks protez kaidesi",
          "3D Tomografi analizi ve kraniyofasiyal cerrahi rehber",
          "Titanyum Bar ve İmplantlar için Ömür Boyu Garanti",
          "5 Yıldızlı Otel Konaklaması ve Özel VIP Şoför Transferi"
        ]
      },
      {
        "name": "Çift Çene Eksiksiz Çıt Çıtlı Rehabilitasyon",
        "brand": "Tam Ağız Çözümü (6 İmplant: 4 Üst + 2 Alt Çene)",
        "duration": "İstanbul’da 4+6 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€4,800",
          "GBP": "£4,150",
          "USD": "$5,280"
        },
        "included": [
          "Toplam 6x Titanyum İmplant (4 Üst Çene + 2 Alt Çene)",
          "6x Alman Locator Çıtçıt Kilit Başlığı ve yedek lastik seti",
          "1x Damağı kapatmayan üst çene açık çıtçıtlı protez",
          "1x Asla oynamayan taş gibi sağlam alt çene çıtçıtlı protez",
          "Kapsamlı 3D Tomografi ve tam çene oklüzyon kapanış ayarı",
          "Tüm cerrahi sarflar, anestezi ve ilaç tedavi paketi",
          "Ömür Boyu Uluslararası Üretici Garanti Pasaportları",
          "7 Gece 5 Yıldızlı Lüks Otel ve VIP Mercedes Transferleri"
        ]
      },
      {
        "name": "Premium Straumann Locator Çıt Çıtlı Paket",
        "brand": "Straumann Group (İsviçre Roxolid & SLActive Yüzey)",
        "duration": "İstanbul’da 3+5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,400",
          "GBP": "£2,950",
          "USD": "$3,750"
        },
        "included": [
          "2-4x Orijinal İsviçre Straumann Roxolid İmplant",
          "Hızlı kemik kaynaması sağlayan hidrofilik SLActive yüzey",
          "Orijinal Straumann Novaloc / Locator Tutucu Sistemi",
          "Ivoclar dişlerle üretilmiş yüksek mukavemetli master protez",
          "3D Tomografi Kılavuzlu Cerrahi ve dijital haritalama",
          "Ömür Boyu Uluslararası Straumann Pasaportu ve Garantisi",
          "5 Yıldızlı Otel Konaklaması ve VIP Mercedes Havalimanı Transferi"
        ]
      },
      {
        "name": "BPS Biyofonksiyonel Ultra Estetik Paket",
        "brand": "Ivoclar Vivadent BPS Sistemi (Biyofonksiyonel Protez)",
        "duration": "İstanbul’da 3+5 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€3,200",
          "GBP": "£2,750",
          "USD": "$3,500"
        },
        "included": [
          "2-4x Titanyum İmplant ve Alman Locator tutucular",
          "Sertifikalı Ivoclar BPS Biyofonksiyonel Protez Protokolü",
          "Ivoclar SR Phonares II çok katmanlı estetik dişler",
          "Gnatometre ile çene eklemine tam uyumlu kapanış kaydı",
          "3D Tomografi ve bilgisayar destekli implant cerrahisi",
          "İmplant ve tutucularda Ömür Boyu Üretici Garantisi",
          "VIP Mercedes Ulaşım ve Lüks Otel Konaklaması Dahil"
        ]
      }
    ],
    "costTitle": "Uluslararası Maliyet Karşılaştırması: İmplant Destekli Protez (İngiltere / Almanya vs İstanbul)",
    "costSubtitle": "2-4 implant, Locator tutucular, güçlendirilmiş overdenture damak, otel ve transfer dahil tek çene çıtçıtlı protez maliyet analizi.",
    "costTableHeaders": {
      "country": "Ülke ve Klinik Seviyesi",
      "costPerArch": "Tek Çene Maliyeti (İmplant + Damak)",
      "inclusions": "Paket Kapsamı ve Laboratuvar Hizmetleri",
      "valueAdvantage": "Master Smile Studio Avantajı"
    },
    "costTableRows": [
      {
        "country": "İngiltere (Harley Street / Özel Klinikler)",
        "costPerArch": "£6,000 – £10,000 ($7,800 – $13,000)",
        "inclusions": "Yalnızca implant ve standart protez. Locator başlıklar (£450 adet), Tomografi (£200) ayrıca ücretlendirilir.",
        "valueAdvantage": "İngiltere Piyasa Tabanı"
      },
      {
        "country": "Almanya / İsviçre (Özel Protetik Klinikleri)",
        "costPerArch": "€5,500 – €9,000 ($6,000 – $9,900)",
        "inclusions": "Cerrah ve implant materyali. Locator tutucular, otel ve transferler ayrı kalemler olarak faturalandırılır.",
        "valueAdvantage": "Almanya Piyasa Tabanı"
      },
      {
        "country": "Master Smile Studio (İstanbul, Türkiye) ⭐",
        "costPerArch": "€1,950 – €3,600 (£1,680 – £3,100)",
        "inclusions": "%100 Her Şey Dahil: 2-4 orijinal implant, Alman Locator tutucular, nanokompozit çıtçıtlı damak, 3D Tomografi, 5 yıldızlı otel ve VIP transferler.",
        "valueAdvantage": "%65 – %70 Net Tasarruf (İsviçre/Alman Orijinal Kalitesi)"
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular: İmplant Destekli Çıt Çıtlı Protezler",
    "faqSubtitle": "Çıtçıt tutuculuk, açık damak konforu, çiğneme gücü ve İstanbul sağlık turizmi hakkında hekim onaylı yanıtlar.",
    "faqGroup1Title": "Klinik ve Protetik SSS (Çıt Çıtlı Damak Mekaniği)",
    "faqGroup2Title": "Sağlık Turizmi, VIP Hizmetler ve Garanti SSS",
    "faqsPart1": [
      {
        "q": "İmplant destekli çıtçıtlı protez (Overdenture) nedir ve nasıl kilitlenir?",
        "a": "İmplant destekli çıtçıtlı protez, çene kemiğine yerleştirilen 2 veya 4 adet implantın üzerine vidalanan orijinal Alman Locator veya top başlıklı tutuculara çıt sesiyle kilitlenen hareketli protezdir. Ağızda kayma, oynama veya yemek yerken fırlama riskini tamamen yok eder."
      },
      {
        "q": "Klasik damak protezlerinden farkı nedir?",
        "a": "Klasik damaklar yalnızca vakumla ve yapıştırıcı kremlerle durmaya çalışırken, çıtçıtlı damaklar implantlara mekanik olarak kilitlenir. Çiğneme kuvveti 3-4 kat artar, damağa vurma yapmaz ve hasta güvenle gülebilir."
      },
      {
        "q": "Üst çenede damağı kapatmayan (açık damak) protez yapılabilir mi?",
        "a": "Evet! Üst çeneye 4 adet implant yerleştirildiğinde protezin damak kubbesi tamamen kesilerek at nalı şeklinde açık tasarlanır. Damağınız açık kaldığı için yiyeceklerin tadını ve sıcaklığını %100 doğal olarak alırsınız."
      },
      {
        "q": "Alt ve üst çene için kaçar adet implant gerekir?",
        "a": "Alt çene kemiği sert ve yoğundur; 2 adet implant taş gibi sağlam bir tutuculuk için yeterlidir. Üst çene kemiği daha yumuşak olduğundan ve damağın açık bırakılabilmesi için 4 adet implant önerilir."
      },
      {
        "q": "Çıtçıtlı protezler geceleri çıkarılmalı mıdır?",
        "a": "Evet. Gün boyu yemek yerken ve konuşurken implantlara sımsıkı kilitli kalan protezin, gece yatarken çıkarılması diş eti dokularının dinlenmesini ve implant çevresinin kolayca fırçalanmasını sağlar."
      },
      {
        "q": "Locator çıtçıt lastikleri ne kadar süre dayanır?",
        "a": "İmplantların üstündeki titanyum gövdeler ömür boyudur. Protezin içindeki değiştirilebilir renkli tutucu plastik lastikler yaklaşık 12-18 ayda bir mikro aşınmaya uğrar ve 2 dakikada kolayca yenisiyle değiştirilir."
      },
      {
        "q": "Locator çıtçıt ile Titanyum Bar tutuculu protez arasındaki fark nedir?",
        "a": "Locator sisteminde her implant üzerinde bağımsız çıtçıt başlığı bulunur; bakımı pratiktir. Titanyum Bar sisteminde ise 4 implant masif bir titanyum köprü barı ile birbirine bağlanır ve protez bu bara klipslerle kilitlenir; en yüksek çiğneme rijitliğini sağlar."
      },
      {
        "q": "İmplantların kaynama sürecinde dişsiz kalacak mıyım?",
        "a": "Asla. İmplant operasyonu yapıldığı gün mevcut proteziniz özel yumuşak astarla uyumlanır veya geçici protez teslim edilir; klinikten ilk günden itibaren dişli ve estetik ayrılırsınız."
      },
      {
        "q": "Çıtçıtlı protezlerle et, elma veya sert yiyecekler yenebilir mi?",
        "a": "Evet. Çiğneme baskısı yumuşak diş etine değil doğrudan implantlar yoluyla çene kemiğine iletildiği için çiğneme kuvveti doğal dişin %70-%80ine ulaşır; sert etler ve kabuklu meyveler rahatlıkla çiğnenebilir."
      },
      {
        "q": "Mevcut klasik damak protezim çıtçıtlıya dönüştürülebilir mi?",
        "a": "Eğer mevcut protezinizin diş dizilimi, estetiği ve kapanışı sağlamsa, implantlar kemiğe kaynadıktan sonra laboratuvarımızda protezinizin içine Locator yuvaları eklenerek çıtçıtlıya dönüştürülebilir."
      }
    ],
    "faqsPart2": [
      {
        "q": "Çıtçıtlı protez tedavisi için İstanbulda kaç gün kalmalıyım?",
        "a": "Tedavi 2 kısa ziyaretten oluşur. 1. Ziyarette 3-4 gün kalarak 3D teşhis, implant yerleşimi ve geçici protez uyumlaması yapılır. 8-12 haftalık kemik kaynamasından sonra 2. Ziyarette 5 gün içinde kalıcı overdenture proteziniz teslim edilir."
      },
      {
        "q": "Master Smile Studio Overdenture Paketine neler dahildir?",
        "a": "Tüm titanyum implantlar, Alman Locator tutucular, güçlendirilmiş nanokompozit dişli overdenture damak, 3D Tomografi, lokal anestezi, ilaç paketi, 5 yıldızlı otel ve VIP Mercedes transferleri dahildir."
      },
      {
        "q": "Hangi implant ve Locator markalarını kullanıyorsunuz?",
        "a": "Yalnızca uluslararası sertifikalı Straumann Group (İsviçre), Nobel Biocare, Medentika ve orijinal Alman Zest/Bredent Locator sistemlerini kullanıyor, resmi medikal pasaport veriyoruz."
      },
      {
        "q": "Türkiye’de çıtçıtlı protez fiyatları neden Avrupa ve İngiltereye göre %65 daha uygundur?",
        "a": "İstanbuldaki klinik işletme ve laboratuvar avantajları sayesinde aynı orijinal İsviçre/Alman implant sistemlerini Avrupa maliyetlerinin üçte birine sunabiliyoruz."
      },
      {
        "q": "Garanti koşulları nelerdir?",
        "a": "Tüm titanyum implant gövdeleri üretici firma tarafından Ömür Boyu Uluslararası Garanti kapsamındadır. Kliniğimiz protez işçiliği ve laboratuvar garantisi sunar."
      },
      {
        "q": "Çıtçıtlı protez öncesi kemik tozu veya sinüs lifting gerekir mi?",
        "a": "Çoğu vakada gerekmez. Çene başına yalnızca 2 ila 4 implant gerektiğinden ve bu implantlar çenenin ön bölgesindeki en sert kemiğe yerleştirildiğinden, hastalarımızın %90ında kemik tozu gerektirmeden uygulanabilir."
      },
      {
        "q": "Yurt dışından gelmeden önce tedavi planımı nasıl alabilirim?",
        "a": "Mevcut panoramik röntgeninizi veya 3D Tomografinizi WhatsApp üzerinden göndermeniz yeterlidir. Baş protetik uzmanımız 24 saat içinde 3D tedavi planınızı ve sabit fiyat teklifinizi hazırlar."
      }
    ]
  },
  "de": {
    "introBadge": "IMPLANTATGETRAGENE DRUCKKNOPF-PROTHESEN",
    "introTitle": "Implantatgetragene Prothesen (Druckknopf) in Istanbul: Fester Halt",
    "introLead": "Schluss mit wackelnden Prothesen und Haftcremes: 2 bis 4 Zahnimplantate mit Locator-Klicksystem oder Stegkonstruktion für 100% Kaukraft und gaumenfreien Komfort in 4 bis 6 Tagen.",
    "introP1": "Implant-supported dentures (often called Snap-On Overdentures) bridge the gap between traditional loose false teeth and expensive fixed full-arch bridges. By anchoring onto 2 to 4 biocompatible titanium implants per jaw, they eliminate painful gum friction, restore natural vertical facial dimensions, and provide 3 to 4 times stronger biting efficiency than conventional acrylic dentures.",
    "introP2": "For the upper jaw, our prosthodontists engineer a horseshoe-shaped open-palate design that leaves the roof of your mouth completely uncovered, restoring 100% of your natural taste sensation and temperature perception. The denture effortlessly snaps on with audible precision and can be removed in seconds for effortless cleaning.",
    "introP3Lead": "For permanently fixed non-removable bridge solutions, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkZygoma": "Zygomatic Implants for Severe Bone Loss",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Implant-Supported Overdentures?",
    "candidacySubtitle": "Designed for patients suffering from loose dentures or those seeking affordable full-mouth stability without extensive bone grafts.",
    "candidacyPoints": [
      {
        "title": "Loose, Floating Lower Jaw Dentures",
        "desc": "Patients whose bottom dentures constantly slip, lift during speech, or float while eating."
      },
      {
        "title": "Strong Gag Reflex & Nausea from Upper Plates",
        "desc": "Patients who cannot tolerate the thick acrylic plastic covering the entire roof of their mouth."
      },
      {
        "title": "Budget-Friendly Full-Mouth Rehabilitation",
        "desc": "Patients seeking rock-solid implant retention at a fraction of the cost of fixed All-on-4 zirconia."
      },
      {
        "title": "Reduced Jawbone Height in Older Adults",
        "desc": "Patients with moderate bone loss where 2–4 implants provide optimal support without complex grafting."
      }
    ],
    "compareTitle": "Objektiver Klinischer Vergleich: Druckknopf vs. Steg vs. Vollprothese vs. All-on-4",
    "compareSubtitle": "A scientific analysis of retention mechanisms, palate coverage, chewing efficiency, and total cost.",
    "compareTableHeaders": {
      "criteria": "Restorative Parameter",
      "traditional": "Traditional Loose Denture",
      "snapOn": "Snap-On Locator Overdenture (2-4 Implants) ⭐",
      "allOn4": "Fixed All-on-4 Zirconia Bridge"
    },
    "compareTableRows": [
      {
        "criteria": "Retention & Locking Mechanism",
        "traditional": "Suction & messy adhesive creams (Loose)",
        "snapOn": "German Locator Snap-Lock (Zero movement)",
        "allOn4": "Permanently screw-retained (Non-removable)"
      },
      {
        "criteria": "Upper Palate Covering",
        "traditional": "100% Full acrylic coverage (Alters taste)",
        "snapOn": "Horseshoe Open Palate (100% Taste restored)",
        "allOn4": "Horseshoe Open Palate (100% Taste restored)"
      },
      {
        "criteria": "Masticatory Chewing Force",
        "traditional": "15% – 20% of natural teeth",
        "snapOn": "65% – 80% of natural teeth (Bite apples/steak)",
        "allOn4": "95% – 100% of natural teeth"
      },
      {
        "criteria": "Number of Implants Required",
        "traditional": "0 Implants",
        "snapOn": "2 Implants (Lower) / 4 Implants (Upper)",
        "allOn4": "4 to 6 Implants per jaw"
      },
      {
        "criteria": "Cleaning & Oral Hygiene",
        "traditional": "Removable cleaning",
        "snapOn": "Simple click-out for effortless cleaning",
        "allOn4": "Fixed (Requires Waterpik & superfloss)"
      },
      {
        "criteria": "Bone Loss Prevention",
        "traditional": "Accelerates jawbone resorption under pressure",
        "snapOn": "Stimulates & preserves alveolar bone height",
        "allOn4": "Full osseous stimulation & preservation"
      },
      {
        "criteria": "Total Treatment Cost Level",
        "traditional": "Lowest cost (Poor quality of life)",
        "snapOn": "Highly Affordable (Best value for stability)",
        "allOn4": "Premium Investment"
      }
    ],
    "compareDecision": {
      "whenSnapOnTitle": "When is a Snap-On Overdenture the Best Choice?",
      "whenSnapOnText": "Snap-On overdentures are ideal for patients seeking rock-solid chewing stability, an open palate, and effortless hygiene on a sensible budget, without complex bone grafting.",
      "whenAllOn4Title": "When is Fixed All-on-4 Advised Instead?",
      "whenAllOn4Text": "All-on-4 is recommended if you desire permanently screwed-in, 100% fixed teeth that never come out of your mouth and feel identical to natural teeth."
    },
    "processTitle": "3-Phasen-Präzisionsprotokoll für Implantatprothesen",
    "processSubtitle": "Our prosthodontic team utilizes computer-guided 3D digital dentistry for immediate stability and aesthetic smile harmony.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Guided Surgical Stent",
        "text": "High-definition 3D tomography identifies dense cortical bone in the anterior jaw. A precision surgical stent determines the exact parallel angulation for optimal Locator attachment.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Parallelism Guide",
            "val": "Digital Stent Alignment"
          },
          {
            "key": "Implants Planned",
            "val": "2 to 4 Implants per Jaw"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Minimally Invasive Placement & Immediate Functional Denture",
        "text": "Implants are placed through keyhole flapless surgery under local anesthesia. Your existing or temporary denture is soft-relined so you leave with functional teeth on day one.",
        "specs": [
          {
            "key": "Surgical Approach",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Anesthesia",
            "val": "Local Anesthesia / Sedation"
          },
          {
            "key": "Immediate Wear",
            "val": "Soft-Relined Functional Teeth"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "German Locator Snap Attachment & High-Impact Overdenture",
        "text": "After 8–12 weeks of bone healing, Swiss/German Locator abutments are attached. A high-impact cross-linked overdenture with multi-layered composite teeth is custom delivered.",
        "specs": [
          {
            "key": "Attachment System",
            "val": "German Locator / CAD/CAM Bar"
          },
          {
            "key": "Base Material",
            "val": "High-Impact Cross-Linked Resin"
          },
          {
            "key": "Teeth Grade",
            "val": "Multi-Layer Nanocomposite"
          }
        ]
      }
    ],
    "materialsTitle": "Prothesenmaterialien & Stegkonstruktionen",
    "materialsSubtitle": "Discover the advanced materials used to craft lightweight, fracture-resistant overdentures that withstand years of daily snap retention.",
    "materialsSpecLabels": {
      "material": "Base & Tooth Composition",
      "strength": "Impact & Flexural Strength",
      "chipping": "Wear & Abrasion Resistance",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "High-Impact Resin + Nanocomposite Teeth",
        "sub": "Reinforced Cross-Linked Base with Premium Composite Teeth",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "High-Impact PMMA + Multi-Layer Nanocomposite Teeth",
        "strength": "130 – 160 MPa (High Impact Resistance)",
        "chippingRisk": "Very Low (Micro-filler reinforced composite)",
        "lifespan": "8 – 12+ Years (Easily relined/serviced)",
        "features": [
          {
            "text": "Lightweight, natural oral feel with open-palate horseshoe design",
            "status": "good"
          },
          {
            "text": "Multi-layer aesthetic teeth mimic natural optical depth and enamel shade",
            "status": "good"
          },
          {
            "text": "Integrated titanium housings eliminate retention housing loosening",
            "status": "good"
          },
          {
            "text": "Replaceable Locator nylon inserts allow easy tension adjustment anytime",
            "status": "good"
          }
        ]
      },
      {
        "title": "CAD/CAM Milled Titanium Bar Overdenture",
        "sub": "Solid Titanium Substructure Connecting 4 Implants",
        "badge": "Maximum Rigid Retention",
        "isGold": false,
        "material": "Milled Grade 5 Titanium Bar + Acrylic Overdenture",
        "strength": "850 – 1000 MPa (Indestructible Substructure)",
        "chippingRisk": "Zero Substructure Fracture",
        "lifespan": "15+ Years (Bar lasts lifetime)",
        "features": [
          {
            "text": "Splints all 4 implants together for maximum load distribution",
            "status": "good"
          },
          {
            "text": "Zero micro-movement even during heavy chewing of tough meats",
            "status": "good"
          },
          {
            "text": "Allows horse-shoe palate-free design even on the upper jaw",
            "status": "good"
          },
          {
            "text": "Higher initial laboratory fabrication cost than standalone Locators",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Traditional Cold-Cure Acrylic Denture",
        "sub": "Standard Base with Basic Plastic Teeth (Not Recommended)",
        "badge": "Economy Material",
        "isGold": false,
        "material": "Cold-Cure Acrylic + Soft Monolayer Plastic Teeth",
        "strength": "60 – 80 MPa (Brittle)",
        "chippingRisk": "High (Teeth wear down rapidly within 2-3 years)",
        "lifespan": "3 – 5 Years",
        "features": [
          {
            "text": "Low initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Rapid tooth wear flattens chewing surfaces and collapses jaw height",
            "status": "bad"
          },
          {
            "text": "Porous resin absorbs bacteria, stains, and chronic food odors",
            "status": "bad"
          },
          {
            "text": "Prone to cracking under modern implant retention forces",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "highImpact": "High-Impact Composite ⭐",
      "titaniumBar": "CAD/CAM Titanium Bar",
      "coldCure": "Cold-Cure Economy Acrylic"
    },
    "materialsTableRows": [
      {
        "criteria": "Impact Resistance",
        "highImpact": "High (Shatter-proof cross-linked)",
        "titaniumBar": "Maximum (Solid titanium core)",
        "coldCure": "Low (Prone to cracking)"
      },
      {
        "criteria": "Tooth Wear Resistance",
        "highImpact": "Very High (Nanocomposite fillers)",
        "titaniumBar": "Very High (Nanocomposite teeth)",
        "coldCure": "Poor (Plastic flattens quickly)"
      },
      {
        "criteria": "Open Palate Horseshoe Suitability",
        "highImpact": "100% Recommended (Upper jaw)",
        "titaniumBar": "100% Recommended (Upper jaw)",
        "coldCure": "Requires full bulky palate"
      },
      {
        "criteria": "Stain & Odor Resistance",
        "highImpact": "High (Dense micro-surface)",
        "titaniumBar": "High (Non-porous titanium)",
        "coldCure": "Porous (Absorbs odors & stains)"
      },
      {
        "criteria": "Maintenance & Servicing",
        "highImpact": "Simple 5-minute nylon cap change",
        "coldCure": "Frequent relining & replacements"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "highImpact": "8 – 12+ Years",
        "titaniumBar": "15+ Years (Bar is Lifetime)",
        "coldCure": "3 – 5 Years"
      }
    ],
    "packagesTitle": "Implantat-Prothesen-Pakete & Währungsrechner",
    "packagesSubtitle": "All-inclusive single-jaw and full-mouth packages featuring certified Straumann, Nobel Biocare, and German Locator systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "2-Implant Mandibular Snap-On Package",
        "brand": "Lower Jaw Solution (2x Implants + German Locators)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "popular": true,
        "price": {
          "EUR": "€1,950",
          "GBP": "£1,680",
          "USD": "$2,150"
        },
        "included": [
          "2x Premium Titanium Dental Implants for lower jaw",
          "2x Authentic German Locator Snap-On Attachments",
          "Custom High-Impact Reinforced Lower Overdenture",
          "Multi-layered aesthetic nanocomposite teeth",
          "3D CBCT Tomography & digital placement guide",
          "Local anesthesia, surgical pack & post-op medications",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Airport & Clinic Transfers included"
        ]
      },
      {
        "name": "4-Implant Maxillary Palateless Snap-On",
        "brand": "Upper Jaw Horseshoe Solution (4x Implants + Open Palate)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€2,950",
          "GBP": "£2,550",
          "USD": "$3,250"
        },
        "included": [
          "4x Premium Titanium Implants for upper jaw stability",
          "4x German Locator Attachments with adjustable retention",
          "Horseshoe Open-Palate Overdenture (Zero roof covering)",
          "Restores 100% natural taste sensation and speech clarity",
          "High-wear aesthetic nanocomposite teeth (Shades BL1-A3)",
          "3D CBCT Tomography scan & computer-guided surgery",
          "Lifetime Global Manufacturer Guarantee Passport",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "4-Implant CAD/CAM Titanium Bar Package",
        "brand": "Milled Titanium Bar-Retained Overdenture System",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,600",
          "GBP": "£3,100",
          "USD": "$3,950"
        },
        "included": [
          "4x Premium Titanium Implants in upper or lower jaw",
          "Custom 5-Axis CAD/CAM Milled Titanium Connecting Bar",
          "Bar-retained overdenture with precision retentive clips",
          "Eliminates all micro-movement during intense chewing",
          "High-Impact Reinforced Overdenture with Composite Teeth",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Lifetime Warranty on Titanium Bar & Implants",
          "5-Star Hotel Stay & Private VIP Chauffeur Transport"
        ]
      },
      {
        "name": "Dual-Arch Complete Snap-On Rehabilitation",
        "brand": "Full Mouth Solution (6 Implants: 4 Upper + 2 Lower)",
        "duration": "4+6 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€4,800",
          "GBP": "£4,150",
          "USD": "$5,280"
        },
        "included": [
          "6x Titanium Implants Total (4 Upper Jaw + 2 Lower Jaw)",
          "6x German Locator Attachments with retention matrix pack",
          "1x Open-Palate Upper Snap-On Overdenture",
          "1x Rock-Solid Lower Snap-On Overdenture",
          "Comprehensive 3D CBCT scan & full occlusal bite calibration",
          "All surgical consumables, local anesthesia & medications",
          "Lifetime International Manufacturer Warranty Passports",
          "7 Nights 5-Star Luxury Hotel & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Premium Straumann Locator Snap-On",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,400",
          "GBP": "£2,950",
          "USD": "$3,750"
        },
        "included": [
          "2-4x Genuine Swiss Straumann Roxolid Implants",
          "Hydrophilic SLActive surface for ultra-fast bone fusion",
          "Original Straumann Novaloc / Locator Attachment System",
          "High-Impact Master Overdenture with Ivoclar Teeth",
          "3D CBCT Guided Surgery & Soft-Tissue Profiling",
          "Lifetime International Straumann Guarantee Passport",
          "5-Star Hotel Stay & VIP Mercedes Airport Chauffeur"
        ]
      },
      {
        "name": "BPS Biofunctional Ultra-Aesthetic Snap-On",
        "brand": "Ivoclar Vivadent BPS System (Biofunctional Prosthetics)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€3,200",
          "GBP": "£2,750",
          "USD": "$3,500"
        },
        "included": [
          "2-4x Titanium Implants with German Locator Attachments",
          "Certified Ivoclar BPS Biofunctional Prosthetic Protocol",
          "Ivoclar SR Phonares II multi-layered aesthetic teeth",
          "Gnathometer bite registration for optimal jaw alignment",
          "3D Tomography scan & computer-guided surgery",
          "Lifetime Manufacturer Warranty on Implants & Attachments",
          "VIP Mercedes Chauffeur & Luxury Hotel Stay included"
        ]
      }
    ],
    "costTitle": "Internationaler Kostenvergleich: Implantatprothesen (UK / Deutschland vs. Istanbul)",
    "costSubtitle": "Compare real clinical costs per jaw including 2 to 4 implants, Locator attachments, reinforced overdenture, 5-star hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Cost per Jaw (Implants + Overdenture)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private Clinics)",
        "costPerArch": "£6,000 – £10,000 ($7,800 – $13,000)",
        "inclusions": "Implants and denture only. Locator abutments (£450 each), CBCT scan (£200), and extractions billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Restorative Clinics)",
        "costPerArch": "€5,500 – €9,000 ($6,000 – $9,900)",
        "inclusions": "Surgeon fee and implants. Locator attachments, lab fabrication, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€1,950 – €3,600 (£1,680 – £3,100)",
        "inclusions": "100% All-Inclusive: 2–4 certified implants, German Locators, high-impact composite overdenture, 3D CBCT, 5-star hotel & VIP transfers.",
        "valueAdvantage": "65% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Häufig gestellte Fragen: Implantatgetragene Prothesen",
    "faqSubtitle": "Clinically verified answers regarding Snap-On retention, open palate comfort, chewing power, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Prosthetic FAQ (Snap-On Overdenture Mechanics)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is an Implant-Supported Overdenture and how does it snap into place?",
        "a": "An implant-supported overdenture is a removable prosthetic arch that snaps firmly onto 2 to 4 dental implants using precision German Locator attachments or ball anchors. It locks with an audible click, eliminating all shifting, rocking, or accidental dislodgment."
      },
      {
        "q": "How does a Snap-On overdenture compare to traditional loose dentures?",
        "a": "Unlike traditional dentures that rely on suction and messy adhesive creams, Snap-On overdentures are 100% mechanically locked. They provide 3 to 4 times greater chewing force, eliminate gum sores, and will never slip while eating or laughing."
      },
      {
        "q": "Can upper implant overdentures be made without covering the palate?",
        "a": "Yes! When supported by 4 dental implants, upper overdentures can be fabricated in a horseshoe shape with an open palate. Leaving the roof of the mouth uncovered restores 100% of your natural taste sensation and temperature perception."
      },
      {
        "q": "How many implants are needed for the lower and upper jaw?",
        "a": "The dense bone of the lower jaw requires a minimum of 2 implants for rock-solid retention. The softer bone of the upper jaw requires 4 implants to securely support a palateless horseshoe overdenture."
      },
      {
        "q": "Do I need to remove my Snap-On denture at night?",
        "a": "Yes. While overdentures remain firmly locked all day during eating and speaking, removing them at night allows your gum tissues to rest and makes oral hygiene around the Locator abutments effortless."
      },
      {
        "q": "How long do the Locator snap attachments last before replacement?",
        "a": "The titanium Locator abutments screwed into the implants last a lifetime. The tiny replaceable nylon retention caps inside the denture typically last 12 to 18 months and can be replaced in less than 2 minutes by any dentist or at home."
      },
      {
        "q": "What is the difference between Locator Snap-On and CAD/CAM Bar-Retained dentures?",
        "a": "Locators use individual stud attachments for each implant, offering simple maintenance and a low profile. A CAD/CAM milled titanium bar connects all 4 implants together with rigid clips, providing the highest possible stability for extreme chewing forces."
      },
      {
        "q": "Will I be left without teeth during the healing process?",
        "a": "Never. On the day of implant placement, your existing denture is soft-relined or a functional temporary denture is fitted, ensuring you leave our clinic with an attractive smile and immediate chewing capability."
      },
      {
        "q": "Can I eat hard foods like apples, steak, and nuts with Snap-On dentures?",
        "a": "Yes. Because the biting force is transferred directly into the jawbone through the implants rather than resting on soft gums, patients regain 70% to 80% of natural chewing efficiency, allowing you to comfortably enjoy solid meats, fruits, and crusty bread."
      },
      {
        "q": "Can existing loose dentures be converted into Snap-On dentures?",
        "a": "If your existing denture is in good structural condition and properly aligned with your bite, our laboratory can often retrofit titanium Locator housings into your current denture once the implants have healed."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many visits and days in Istanbul are required for overdenture treatment?",
        "a": "The treatment requires 2 short visits. Visit 1 requires 3 to 4 days for 3D CBCT planning, implant placement, and fitting of a temporary denture. After 8 to 12 weeks of bone healing, Visit 2 requires 5 days for Locator attachment and final overdenture delivery."
      },
      {
        "q": "What is included in the Master Smile Studio Overdenture Package?",
        "a": "Our all-inclusive packages cover all titanium implants, German Locator attachments, reinforced overdenture with composite teeth, 3D CBCT scans, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of implants and Locator attachments do you use?",
        "a": "We use globally certified implant systems including Straumann Group (Switzerland), Nobel Biocare, Medentika, and authentic German Zest/Bredent Locator attachments, all accompanied by international guarantee passports."
      },
      {
        "q": "Why are Implant-Supported Dentures 65%–70% cheaper in Istanbul than in the UK or Germany?",
        "a": "Lower laboratory operational expenses, favorable exchange rates, and efficient clinical workflows in Istanbul allow us to provide genuine Swiss and German implant systems at a fraction of Western clinic prices without compromising prosthetic excellence."
      },
      {
        "q": "What guarantees and warranties are provided?",
        "a": "All titanium dental implants come with an official Lifetime International Manufacturer Warranty. Master Smile Studio also provides a clinical warranty covering the overdenture prosthetic base, teeth, and laboratory craftsmanship."
      },
      {
        "q": "Is bone grafting necessary before getting implant overdentures?",
        "a": "In most cases, no. Because only 2 to 4 implants are required and can be strategically angled into available bone in the front of the jaw, overdentures avoid the need for complex sinus lifts or bone grafting in 90% of patients."
      },
      {
        "q": "How do I get a free treatment plan and quote before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief prosthodontist and implant surgeon will analyze your bone structure and provide a tailored 3D treatment plan and fixed price quote within 24 hours."
      }
    ]
  },
  "pl": {
    "introBadge": "PROTEZY NA IMPLANTACH TYPU OVERDENTURE",
    "introTitle": "Protezy na Implantach (Zatrzaskowe) w Stambule: Stabilność i Komfort",
    "introLead": "Zapomnij o wypadających protezach i klejach: 2 do 4 implantów z systemem zatrzaskowym Locator lub belką tytanową zapewniają 100% stabilności bez podniebienia.",
    "introP1": "Implant-supported dentures (often called Snap-On Overdentures) bridge the gap between traditional loose false teeth and expensive fixed full-arch bridges. By anchoring onto 2 to 4 biocompatible titanium implants per jaw, they eliminate painful gum friction, restore natural vertical facial dimensions, and provide 3 to 4 times stronger biting efficiency than conventional acrylic dentures.",
    "introP2": "For the upper jaw, our prosthodontists engineer a horseshoe-shaped open-palate design that leaves the roof of your mouth completely uncovered, restoring 100% of your natural taste sensation and temperature perception. The denture effortlessly snaps on with audible precision and can be removed in seconds for effortless cleaning.",
    "introP3Lead": "For permanently fixed non-removable bridge solutions, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkZygoma": "Zygomatic Implants for Severe Bone Loss",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Implant-Supported Overdentures?",
    "candidacySubtitle": "Designed for patients suffering from loose dentures or those seeking affordable full-mouth stability without extensive bone grafts.",
    "candidacyPoints": [
      {
        "title": "Loose, Floating Lower Jaw Dentures",
        "desc": "Patients whose bottom dentures constantly slip, lift during speech, or float while eating."
      },
      {
        "title": "Strong Gag Reflex & Nausea from Upper Plates",
        "desc": "Patients who cannot tolerate the thick acrylic plastic covering the entire roof of their mouth."
      },
      {
        "title": "Budget-Friendly Full-Mouth Rehabilitation",
        "desc": "Patients seeking rock-solid implant retention at a fraction of the cost of fixed All-on-4 zirconia."
      },
      {
        "title": "Reduced Jawbone Height in Older Adults",
        "desc": "Patients with moderate bone loss where 2–4 implants provide optimal support without complex grafting."
      }
    ],
    "compareTitle": "Obiektywne Porównanie: Proteza Zatrzaskowa vs. Belka vs. Tradycyjna vs. All-on-4",
    "compareSubtitle": "A scientific analysis of retention mechanisms, palate coverage, chewing efficiency, and total cost.",
    "compareTableHeaders": {
      "criteria": "Restorative Parameter",
      "traditional": "Traditional Loose Denture",
      "snapOn": "Snap-On Locator Overdenture (2-4 Implants) ⭐",
      "allOn4": "Fixed All-on-4 Zirconia Bridge"
    },
    "compareTableRows": [
      {
        "criteria": "Retention & Locking Mechanism",
        "traditional": "Suction & messy adhesive creams (Loose)",
        "snapOn": "German Locator Snap-Lock (Zero movement)",
        "allOn4": "Permanently screw-retained (Non-removable)"
      },
      {
        "criteria": "Upper Palate Covering",
        "traditional": "100% Full acrylic coverage (Alters taste)",
        "snapOn": "Horseshoe Open Palate (100% Taste restored)",
        "allOn4": "Horseshoe Open Palate (100% Taste restored)"
      },
      {
        "criteria": "Masticatory Chewing Force",
        "traditional": "15% – 20% of natural teeth",
        "snapOn": "65% – 80% of natural teeth (Bite apples/steak)",
        "allOn4": "95% – 100% of natural teeth"
      },
      {
        "criteria": "Number of Implants Required",
        "traditional": "0 Implants",
        "snapOn": "2 Implants (Lower) / 4 Implants (Upper)",
        "allOn4": "4 to 6 Implants per jaw"
      },
      {
        "criteria": "Cleaning & Oral Hygiene",
        "traditional": "Removable cleaning",
        "snapOn": "Simple click-out for effortless cleaning",
        "allOn4": "Fixed (Requires Waterpik & superfloss)"
      },
      {
        "criteria": "Bone Loss Prevention",
        "traditional": "Accelerates jawbone resorption under pressure",
        "snapOn": "Stimulates & preserves alveolar bone height",
        "allOn4": "Full osseous stimulation & preservation"
      },
      {
        "criteria": "Total Treatment Cost Level",
        "traditional": "Lowest cost (Poor quality of life)",
        "snapOn": "Highly Affordable (Best value for stability)",
        "allOn4": "Premium Investment"
      }
    ],
    "compareDecision": {
      "whenSnapOnTitle": "When is a Snap-On Overdenture the Best Choice?",
      "whenSnapOnText": "Snap-On overdentures are ideal for patients seeking rock-solid chewing stability, an open palate, and effortless hygiene on a sensible budget, without complex bone grafting.",
      "whenAllOn4Title": "When is Fixed All-on-4 Advised Instead?",
      "whenAllOn4Text": "All-on-4 is recommended if you desire permanently screwed-in, 100% fixed teeth that never come out of your mouth and feel identical to natural teeth."
    },
    "processTitle": "3-Etapowy Protokół Protez na Implantach",
    "processSubtitle": "Our prosthodontic team utilizes computer-guided 3D digital dentistry for immediate stability and aesthetic smile harmony.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Guided Surgical Stent",
        "text": "High-definition 3D tomography identifies dense cortical bone in the anterior jaw. A precision surgical stent determines the exact parallel angulation for optimal Locator attachment.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Parallelism Guide",
            "val": "Digital Stent Alignment"
          },
          {
            "key": "Implants Planned",
            "val": "2 to 4 Implants per Jaw"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Minimally Invasive Placement & Immediate Functional Denture",
        "text": "Implants are placed through keyhole flapless surgery under local anesthesia. Your existing or temporary denture is soft-relined so you leave with functional teeth on day one.",
        "specs": [
          {
            "key": "Surgical Approach",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Anesthesia",
            "val": "Local Anesthesia / Sedation"
          },
          {
            "key": "Immediate Wear",
            "val": "Soft-Relined Functional Teeth"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "German Locator Snap Attachment & High-Impact Overdenture",
        "text": "After 8–12 weeks of bone healing, Swiss/German Locator abutments are attached. A high-impact cross-linked overdenture with multi-layered composite teeth is custom delivered.",
        "specs": [
          {
            "key": "Attachment System",
            "val": "German Locator / CAD/CAM Bar"
          },
          {
            "key": "Base Material",
            "val": "High-Impact Cross-Linked Resin"
          },
          {
            "key": "Teeth Grade",
            "val": "Multi-Layer Nanocomposite"
          }
        ]
      }
    ],
    "materialsTitle": "Materiały Protez Overdenture i Belek Tytanowych",
    "materialsSubtitle": "Discover the advanced materials used to craft lightweight, fracture-resistant overdentures that withstand years of daily snap retention.",
    "materialsSpecLabels": {
      "material": "Base & Tooth Composition",
      "strength": "Impact & Flexural Strength",
      "chipping": "Wear & Abrasion Resistance",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "High-Impact Resin + Nanocomposite Teeth",
        "sub": "Reinforced Cross-Linked Base with Premium Composite Teeth",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "High-Impact PMMA + Multi-Layer Nanocomposite Teeth",
        "strength": "130 – 160 MPa (High Impact Resistance)",
        "chippingRisk": "Very Low (Micro-filler reinforced composite)",
        "lifespan": "8 – 12+ Years (Easily relined/serviced)",
        "features": [
          {
            "text": "Lightweight, natural oral feel with open-palate horseshoe design",
            "status": "good"
          },
          {
            "text": "Multi-layer aesthetic teeth mimic natural optical depth and enamel shade",
            "status": "good"
          },
          {
            "text": "Integrated titanium housings eliminate retention housing loosening",
            "status": "good"
          },
          {
            "text": "Replaceable Locator nylon inserts allow easy tension adjustment anytime",
            "status": "good"
          }
        ]
      },
      {
        "title": "CAD/CAM Milled Titanium Bar Overdenture",
        "sub": "Solid Titanium Substructure Connecting 4 Implants",
        "badge": "Maximum Rigid Retention",
        "isGold": false,
        "material": "Milled Grade 5 Titanium Bar + Acrylic Overdenture",
        "strength": "850 – 1000 MPa (Indestructible Substructure)",
        "chippingRisk": "Zero Substructure Fracture",
        "lifespan": "15+ Years (Bar lasts lifetime)",
        "features": [
          {
            "text": "Splints all 4 implants together for maximum load distribution",
            "status": "good"
          },
          {
            "text": "Zero micro-movement even during heavy chewing of tough meats",
            "status": "good"
          },
          {
            "text": "Allows horse-shoe palate-free design even on the upper jaw",
            "status": "good"
          },
          {
            "text": "Higher initial laboratory fabrication cost than standalone Locators",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Traditional Cold-Cure Acrylic Denture",
        "sub": "Standard Base with Basic Plastic Teeth (Not Recommended)",
        "badge": "Economy Material",
        "isGold": false,
        "material": "Cold-Cure Acrylic + Soft Monolayer Plastic Teeth",
        "strength": "60 – 80 MPa (Brittle)",
        "chippingRisk": "High (Teeth wear down rapidly within 2-3 years)",
        "lifespan": "3 – 5 Years",
        "features": [
          {
            "text": "Low initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Rapid tooth wear flattens chewing surfaces and collapses jaw height",
            "status": "bad"
          },
          {
            "text": "Porous resin absorbs bacteria, stains, and chronic food odors",
            "status": "bad"
          },
          {
            "text": "Prone to cracking under modern implant retention forces",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "highImpact": "High-Impact Composite ⭐",
      "titaniumBar": "CAD/CAM Titanium Bar",
      "coldCure": "Cold-Cure Economy Acrylic"
    },
    "materialsTableRows": [
      {
        "criteria": "Impact Resistance",
        "highImpact": "High (Shatter-proof cross-linked)",
        "titaniumBar": "Maximum (Solid titanium core)",
        "coldCure": "Low (Prone to cracking)"
      },
      {
        "criteria": "Tooth Wear Resistance",
        "highImpact": "Very High (Nanocomposite fillers)",
        "titaniumBar": "Very High (Nanocomposite teeth)",
        "coldCure": "Poor (Plastic flattens quickly)"
      },
      {
        "criteria": "Open Palate Horseshoe Suitability",
        "highImpact": "100% Recommended (Upper jaw)",
        "titaniumBar": "100% Recommended (Upper jaw)",
        "coldCure": "Requires full bulky palate"
      },
      {
        "criteria": "Stain & Odor Resistance",
        "highImpact": "High (Dense micro-surface)",
        "titaniumBar": "High (Non-porous titanium)",
        "coldCure": "Porous (Absorbs odors & stains)"
      },
      {
        "criteria": "Maintenance & Servicing",
        "highImpact": "Simple 5-minute nylon cap change",
        "coldCure": "Frequent relining & replacements"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "highImpact": "8 – 12+ Years",
        "titaniumBar": "15+ Years (Bar is Lifetime)",
        "coldCure": "3 – 5 Years"
      }
    ],
    "packagesTitle": "Pakiety Protez na Implantach i Przelicznik Walut",
    "packagesSubtitle": "All-inclusive single-jaw and full-mouth packages featuring certified Straumann, Nobel Biocare, and German Locator systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "2-Implant Mandibular Snap-On Package",
        "brand": "Lower Jaw Solution (2x Implants + German Locators)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "popular": true,
        "price": {
          "EUR": "€1,950",
          "GBP": "£1,680",
          "USD": "$2,150"
        },
        "included": [
          "2x Premium Titanium Dental Implants for lower jaw",
          "2x Authentic German Locator Snap-On Attachments",
          "Custom High-Impact Reinforced Lower Overdenture",
          "Multi-layered aesthetic nanocomposite teeth",
          "3D CBCT Tomography & digital placement guide",
          "Local anesthesia, surgical pack & post-op medications",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Airport & Clinic Transfers included"
        ]
      },
      {
        "name": "4-Implant Maxillary Palateless Snap-On",
        "brand": "Upper Jaw Horseshoe Solution (4x Implants + Open Palate)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€2,950",
          "GBP": "£2,550",
          "USD": "$3,250"
        },
        "included": [
          "4x Premium Titanium Implants for upper jaw stability",
          "4x German Locator Attachments with adjustable retention",
          "Horseshoe Open-Palate Overdenture (Zero roof covering)",
          "Restores 100% natural taste sensation and speech clarity",
          "High-wear aesthetic nanocomposite teeth (Shades BL1-A3)",
          "3D CBCT Tomography scan & computer-guided surgery",
          "Lifetime Global Manufacturer Guarantee Passport",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "4-Implant CAD/CAM Titanium Bar Package",
        "brand": "Milled Titanium Bar-Retained Overdenture System",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,600",
          "GBP": "£3,100",
          "USD": "$3,950"
        },
        "included": [
          "4x Premium Titanium Implants in upper or lower jaw",
          "Custom 5-Axis CAD/CAM Milled Titanium Connecting Bar",
          "Bar-retained overdenture with precision retentive clips",
          "Eliminates all micro-movement during intense chewing",
          "High-Impact Reinforced Overdenture with Composite Teeth",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Lifetime Warranty on Titanium Bar & Implants",
          "5-Star Hotel Stay & Private VIP Chauffeur Transport"
        ]
      },
      {
        "name": "Dual-Arch Complete Snap-On Rehabilitation",
        "brand": "Full Mouth Solution (6 Implants: 4 Upper + 2 Lower)",
        "duration": "4+6 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€4,800",
          "GBP": "£4,150",
          "USD": "$5,280"
        },
        "included": [
          "6x Titanium Implants Total (4 Upper Jaw + 2 Lower Jaw)",
          "6x German Locator Attachments with retention matrix pack",
          "1x Open-Palate Upper Snap-On Overdenture",
          "1x Rock-Solid Lower Snap-On Overdenture",
          "Comprehensive 3D CBCT scan & full occlusal bite calibration",
          "All surgical consumables, local anesthesia & medications",
          "Lifetime International Manufacturer Warranty Passports",
          "7 Nights 5-Star Luxury Hotel & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Premium Straumann Locator Snap-On",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,400",
          "GBP": "£2,950",
          "USD": "$3,750"
        },
        "included": [
          "2-4x Genuine Swiss Straumann Roxolid Implants",
          "Hydrophilic SLActive surface for ultra-fast bone fusion",
          "Original Straumann Novaloc / Locator Attachment System",
          "High-Impact Master Overdenture with Ivoclar Teeth",
          "3D CBCT Guided Surgery & Soft-Tissue Profiling",
          "Lifetime International Straumann Guarantee Passport",
          "5-Star Hotel Stay & VIP Mercedes Airport Chauffeur"
        ]
      },
      {
        "name": "BPS Biofunctional Ultra-Aesthetic Snap-On",
        "brand": "Ivoclar Vivadent BPS System (Biofunctional Prosthetics)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€3,200",
          "GBP": "£2,750",
          "USD": "$3,500"
        },
        "included": [
          "2-4x Titanium Implants with German Locator Attachments",
          "Certified Ivoclar BPS Biofunctional Prosthetic Protocol",
          "Ivoclar SR Phonares II multi-layered aesthetic teeth",
          "Gnathometer bite registration for optimal jaw alignment",
          "3D Tomography scan & computer-guided surgery",
          "Lifetime Manufacturer Warranty on Implants & Attachments",
          "VIP Mercedes Chauffeur & Luxury Hotel Stay included"
        ]
      }
    ],
    "costTitle": "Międzynarodowe Porównanie Kosztów: Protezy na Implantach (UK / Niemcy vs Stambuł)",
    "costSubtitle": "Compare real clinical costs per jaw including 2 to 4 implants, Locator attachments, reinforced overdenture, 5-star hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Cost per Jaw (Implants + Overdenture)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private Clinics)",
        "costPerArch": "£6,000 – £10,000 ($7,800 – $13,000)",
        "inclusions": "Implants and denture only. Locator abutments (£450 each), CBCT scan (£200), and extractions billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Restorative Clinics)",
        "costPerArch": "€5,500 – €9,000 ($6,000 – $9,900)",
        "inclusions": "Surgeon fee and implants. Locator attachments, lab fabrication, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€1,950 – €3,600 (£1,680 – £3,100)",
        "inclusions": "100% All-Inclusive: 2–4 certified implants, German Locators, high-impact composite overdenture, 3D CBCT, 5-star hotel & VIP transfers.",
        "valueAdvantage": "65% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Często Zadawane Pytania: Protezy na Implantach",
    "faqSubtitle": "Clinically verified answers regarding Snap-On retention, open palate comfort, chewing power, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Prosthetic FAQ (Snap-On Overdenture Mechanics)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is an Implant-Supported Overdenture and how does it snap into place?",
        "a": "An implant-supported overdenture is a removable prosthetic arch that snaps firmly onto 2 to 4 dental implants using precision German Locator attachments or ball anchors. It locks with an audible click, eliminating all shifting, rocking, or accidental dislodgment."
      },
      {
        "q": "How does a Snap-On overdenture compare to traditional loose dentures?",
        "a": "Unlike traditional dentures that rely on suction and messy adhesive creams, Snap-On overdentures are 100% mechanically locked. They provide 3 to 4 times greater chewing force, eliminate gum sores, and will never slip while eating or laughing."
      },
      {
        "q": "Can upper implant overdentures be made without covering the palate?",
        "a": "Yes! When supported by 4 dental implants, upper overdentures can be fabricated in a horseshoe shape with an open palate. Leaving the roof of the mouth uncovered restores 100% of your natural taste sensation and temperature perception."
      },
      {
        "q": "How many implants are needed for the lower and upper jaw?",
        "a": "The dense bone of the lower jaw requires a minimum of 2 implants for rock-solid retention. The softer bone of the upper jaw requires 4 implants to securely support a palateless horseshoe overdenture."
      },
      {
        "q": "Do I need to remove my Snap-On denture at night?",
        "a": "Yes. While overdentures remain firmly locked all day during eating and speaking, removing them at night allows your gum tissues to rest and makes oral hygiene around the Locator abutments effortless."
      },
      {
        "q": "How long do the Locator snap attachments last before replacement?",
        "a": "The titanium Locator abutments screwed into the implants last a lifetime. The tiny replaceable nylon retention caps inside the denture typically last 12 to 18 months and can be replaced in less than 2 minutes by any dentist or at home."
      },
      {
        "q": "What is the difference between Locator Snap-On and CAD/CAM Bar-Retained dentures?",
        "a": "Locators use individual stud attachments for each implant, offering simple maintenance and a low profile. A CAD/CAM milled titanium bar connects all 4 implants together with rigid clips, providing the highest possible stability for extreme chewing forces."
      },
      {
        "q": "Will I be left without teeth during the healing process?",
        "a": "Never. On the day of implant placement, your existing denture is soft-relined or a functional temporary denture is fitted, ensuring you leave our clinic with an attractive smile and immediate chewing capability."
      },
      {
        "q": "Can I eat hard foods like apples, steak, and nuts with Snap-On dentures?",
        "a": "Yes. Because the biting force is transferred directly into the jawbone through the implants rather than resting on soft gums, patients regain 70% to 80% of natural chewing efficiency, allowing you to comfortably enjoy solid meats, fruits, and crusty bread."
      },
      {
        "q": "Can existing loose dentures be converted into Snap-On dentures?",
        "a": "If your existing denture is in good structural condition and properly aligned with your bite, our laboratory can often retrofit titanium Locator housings into your current denture once the implants have healed."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many visits and days in Istanbul are required for overdenture treatment?",
        "a": "The treatment requires 2 short visits. Visit 1 requires 3 to 4 days for 3D CBCT planning, implant placement, and fitting of a temporary denture. After 8 to 12 weeks of bone healing, Visit 2 requires 5 days for Locator attachment and final overdenture delivery."
      },
      {
        "q": "What is included in the Master Smile Studio Overdenture Package?",
        "a": "Our all-inclusive packages cover all titanium implants, German Locator attachments, reinforced overdenture with composite teeth, 3D CBCT scans, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of implants and Locator attachments do you use?",
        "a": "We use globally certified implant systems including Straumann Group (Switzerland), Nobel Biocare, Medentika, and authentic German Zest/Bredent Locator attachments, all accompanied by international guarantee passports."
      },
      {
        "q": "Why are Implant-Supported Dentures 65%–70% cheaper in Istanbul than in the UK or Germany?",
        "a": "Lower laboratory operational expenses, favorable exchange rates, and efficient clinical workflows in Istanbul allow us to provide genuine Swiss and German implant systems at a fraction of Western clinic prices without compromising prosthetic excellence."
      },
      {
        "q": "What guarantees and warranties are provided?",
        "a": "All titanium dental implants come with an official Lifetime International Manufacturer Warranty. Master Smile Studio also provides a clinical warranty covering the overdenture prosthetic base, teeth, and laboratory craftsmanship."
      },
      {
        "q": "Is bone grafting necessary before getting implant overdentures?",
        "a": "In most cases, no. Because only 2 to 4 implants are required and can be strategically angled into available bone in the front of the jaw, overdentures avoid the need for complex sinus lifts or bone grafting in 90% of patients."
      },
      {
        "q": "How do I get a free treatment plan and quote before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief prosthodontist and implant surgeon will analyze your bone structure and provide a tailored 3D treatment plan and fixed price quote within 24 hours."
      }
    ]
  },
  "pt": {
    "introBadge": "SOBREDENTADURAS SOBRE IMPLANTES (SNAP-ON)",
    "introTitle": "Próteses Sobre Implantes em Istambul: Estabilidade Snap-On sem Palato",
    "introLead": "Elimine próteses soltas e colas adesivas: 2 a 4 implantes com encaixes Locator ou barra fresada proporcionam 100% de estabilidade mastigatória em 4 a 6 dias.",
    "introP1": "Implant-supported dentures (often called Snap-On Overdentures) bridge the gap between traditional loose false teeth and expensive fixed full-arch bridges. By anchoring onto 2 to 4 biocompatible titanium implants per jaw, they eliminate painful gum friction, restore natural vertical facial dimensions, and provide 3 to 4 times stronger biting efficiency than conventional acrylic dentures.",
    "introP2": "For the upper jaw, our prosthodontists engineer a horseshoe-shaped open-palate design that leaves the roof of your mouth completely uncovered, restoring 100% of your natural taste sensation and temperature perception. The denture effortlessly snaps on with audible precision and can be removed in seconds for effortless cleaning.",
    "introP3Lead": "For permanently fixed non-removable bridge solutions, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkZygoma": "Zygomatic Implants for Severe Bone Loss",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Implant-Supported Overdentures?",
    "candidacySubtitle": "Designed for patients suffering from loose dentures or those seeking affordable full-mouth stability without extensive bone grafts.",
    "candidacyPoints": [
      {
        "title": "Loose, Floating Lower Jaw Dentures",
        "desc": "Patients whose bottom dentures constantly slip, lift during speech, or float while eating."
      },
      {
        "title": "Strong Gag Reflex & Nausea from Upper Plates",
        "desc": "Patients who cannot tolerate the thick acrylic plastic covering the entire roof of their mouth."
      },
      {
        "title": "Budget-Friendly Full-Mouth Rehabilitation",
        "desc": "Patients seeking rock-solid implant retention at a fraction of the cost of fixed All-on-4 zirconia."
      },
      {
        "title": "Reduced Jawbone Height in Older Adults",
        "desc": "Patients with moderate bone loss where 2–4 implants provide optimal support without complex grafting."
      }
    ],
    "compareTitle": "Comparativo Clínico: Sobredentadura Snap-On vs. Barra vs. Convencional vs. All-on-4",
    "compareSubtitle": "A scientific analysis of retention mechanisms, palate coverage, chewing efficiency, and total cost.",
    "compareTableHeaders": {
      "criteria": "Restorative Parameter",
      "traditional": "Traditional Loose Denture",
      "snapOn": "Snap-On Locator Overdenture (2-4 Implants) ⭐",
      "allOn4": "Fixed All-on-4 Zirconia Bridge"
    },
    "compareTableRows": [
      {
        "criteria": "Retention & Locking Mechanism",
        "traditional": "Suction & messy adhesive creams (Loose)",
        "snapOn": "German Locator Snap-Lock (Zero movement)",
        "allOn4": "Permanently screw-retained (Non-removable)"
      },
      {
        "criteria": "Upper Palate Covering",
        "traditional": "100% Full acrylic coverage (Alters taste)",
        "snapOn": "Horseshoe Open Palate (100% Taste restored)",
        "allOn4": "Horseshoe Open Palate (100% Taste restored)"
      },
      {
        "criteria": "Masticatory Chewing Force",
        "traditional": "15% – 20% of natural teeth",
        "snapOn": "65% – 80% of natural teeth (Bite apples/steak)",
        "allOn4": "95% – 100% of natural teeth"
      },
      {
        "criteria": "Number of Implants Required",
        "traditional": "0 Implants",
        "snapOn": "2 Implants (Lower) / 4 Implants (Upper)",
        "allOn4": "4 to 6 Implants per jaw"
      },
      {
        "criteria": "Cleaning & Oral Hygiene",
        "traditional": "Removable cleaning",
        "snapOn": "Simple click-out for effortless cleaning",
        "allOn4": "Fixed (Requires Waterpik & superfloss)"
      },
      {
        "criteria": "Bone Loss Prevention",
        "traditional": "Accelerates jawbone resorption under pressure",
        "snapOn": "Stimulates & preserves alveolar bone height",
        "allOn4": "Full osseous stimulation & preservation"
      },
      {
        "criteria": "Total Treatment Cost Level",
        "traditional": "Lowest cost (Poor quality of life)",
        "snapOn": "Highly Affordable (Best value for stability)",
        "allOn4": "Premium Investment"
      }
    ],
    "compareDecision": {
      "whenSnapOnTitle": "When is a Snap-On Overdenture the Best Choice?",
      "whenSnapOnText": "Snap-On overdentures are ideal for patients seeking rock-solid chewing stability, an open palate, and effortless hygiene on a sensible budget, without complex bone grafting.",
      "whenAllOn4Title": "When is Fixed All-on-4 Advised Instead?",
      "whenAllOn4Text": "All-on-4 is recommended if you desire permanently screwed-in, 100% fixed teeth that never come out of your mouth and feel identical to natural teeth."
    },
    "processTitle": "Protocolo de Precisão em 3 Fases para Sobredentaduras",
    "processSubtitle": "Our prosthodontic team utilizes computer-guided 3D digital dentistry for immediate stability and aesthetic smile harmony.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Guided Surgical Stent",
        "text": "High-definition 3D tomography identifies dense cortical bone in the anterior jaw. A precision surgical stent determines the exact parallel angulation for optimal Locator attachment.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Parallelism Guide",
            "val": "Digital Stent Alignment"
          },
          {
            "key": "Implants Planned",
            "val": "2 to 4 Implants per Jaw"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Minimally Invasive Placement & Immediate Functional Denture",
        "text": "Implants are placed through keyhole flapless surgery under local anesthesia. Your existing or temporary denture is soft-relined so you leave with functional teeth on day one.",
        "specs": [
          {
            "key": "Surgical Approach",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Anesthesia",
            "val": "Local Anesthesia / Sedation"
          },
          {
            "key": "Immediate Wear",
            "val": "Soft-Relined Functional Teeth"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "German Locator Snap Attachment & High-Impact Overdenture",
        "text": "After 8–12 weeks of bone healing, Swiss/German Locator abutments are attached. A high-impact cross-linked overdenture with multi-layered composite teeth is custom delivered.",
        "specs": [
          {
            "key": "Attachment System",
            "val": "German Locator / CAD/CAM Bar"
          },
          {
            "key": "Base Material",
            "val": "High-Impact Cross-Linked Resin"
          },
          {
            "key": "Teeth Grade",
            "val": "Multi-Layer Nanocomposite"
          }
        ]
      }
    ],
    "materialsTitle": "Materiais de Sobredentaduras e Barras de Titânio",
    "materialsSubtitle": "Discover the advanced materials used to craft lightweight, fracture-resistant overdentures that withstand years of daily snap retention.",
    "materialsSpecLabels": {
      "material": "Base & Tooth Composition",
      "strength": "Impact & Flexural Strength",
      "chipping": "Wear & Abrasion Resistance",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "High-Impact Resin + Nanocomposite Teeth",
        "sub": "Reinforced Cross-Linked Base with Premium Composite Teeth",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "High-Impact PMMA + Multi-Layer Nanocomposite Teeth",
        "strength": "130 – 160 MPa (High Impact Resistance)",
        "chippingRisk": "Very Low (Micro-filler reinforced composite)",
        "lifespan": "8 – 12+ Years (Easily relined/serviced)",
        "features": [
          {
            "text": "Lightweight, natural oral feel with open-palate horseshoe design",
            "status": "good"
          },
          {
            "text": "Multi-layer aesthetic teeth mimic natural optical depth and enamel shade",
            "status": "good"
          },
          {
            "text": "Integrated titanium housings eliminate retention housing loosening",
            "status": "good"
          },
          {
            "text": "Replaceable Locator nylon inserts allow easy tension adjustment anytime",
            "status": "good"
          }
        ]
      },
      {
        "title": "CAD/CAM Milled Titanium Bar Overdenture",
        "sub": "Solid Titanium Substructure Connecting 4 Implants",
        "badge": "Maximum Rigid Retention",
        "isGold": false,
        "material": "Milled Grade 5 Titanium Bar + Acrylic Overdenture",
        "strength": "850 – 1000 MPa (Indestructible Substructure)",
        "chippingRisk": "Zero Substructure Fracture",
        "lifespan": "15+ Years (Bar lasts lifetime)",
        "features": [
          {
            "text": "Splints all 4 implants together for maximum load distribution",
            "status": "good"
          },
          {
            "text": "Zero micro-movement even during heavy chewing of tough meats",
            "status": "good"
          },
          {
            "text": "Allows horse-shoe palate-free design even on the upper jaw",
            "status": "good"
          },
          {
            "text": "Higher initial laboratory fabrication cost than standalone Locators",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Traditional Cold-Cure Acrylic Denture",
        "sub": "Standard Base with Basic Plastic Teeth (Not Recommended)",
        "badge": "Economy Material",
        "isGold": false,
        "material": "Cold-Cure Acrylic + Soft Monolayer Plastic Teeth",
        "strength": "60 – 80 MPa (Brittle)",
        "chippingRisk": "High (Teeth wear down rapidly within 2-3 years)",
        "lifespan": "3 – 5 Years",
        "features": [
          {
            "text": "Low initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Rapid tooth wear flattens chewing surfaces and collapses jaw height",
            "status": "bad"
          },
          {
            "text": "Porous resin absorbs bacteria, stains, and chronic food odors",
            "status": "bad"
          },
          {
            "text": "Prone to cracking under modern implant retention forces",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "highImpact": "High-Impact Composite ⭐",
      "titaniumBar": "CAD/CAM Titanium Bar",
      "coldCure": "Cold-Cure Economy Acrylic"
    },
    "materialsTableRows": [
      {
        "criteria": "Impact Resistance",
        "highImpact": "High (Shatter-proof cross-linked)",
        "titaniumBar": "Maximum (Solid titanium core)",
        "coldCure": "Low (Prone to cracking)"
      },
      {
        "criteria": "Tooth Wear Resistance",
        "highImpact": "Very High (Nanocomposite fillers)",
        "titaniumBar": "Very High (Nanocomposite teeth)",
        "coldCure": "Poor (Plastic flattens quickly)"
      },
      {
        "criteria": "Open Palate Horseshoe Suitability",
        "highImpact": "100% Recommended (Upper jaw)",
        "titaniumBar": "100% Recommended (Upper jaw)",
        "coldCure": "Requires full bulky palate"
      },
      {
        "criteria": "Stain & Odor Resistance",
        "highImpact": "High (Dense micro-surface)",
        "titaniumBar": "High (Non-porous titanium)",
        "coldCure": "Porous (Absorbs odors & stains)"
      },
      {
        "criteria": "Maintenance & Servicing",
        "highImpact": "Simple 5-minute nylon cap change",
        "coldCure": "Frequent relining & replacements"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "highImpact": "8 – 12+ Years",
        "titaniumBar": "15+ Years (Bar is Lifetime)",
        "coldCure": "3 – 5 Years"
      }
    ],
    "packagesTitle": "Pacotes de Próteses Sobre Implantes e Conversor de Moedas",
    "packagesSubtitle": "All-inclusive single-jaw and full-mouth packages featuring certified Straumann, Nobel Biocare, and German Locator systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "2-Implant Mandibular Snap-On Package",
        "brand": "Lower Jaw Solution (2x Implants + German Locators)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "popular": true,
        "price": {
          "EUR": "€1,950",
          "GBP": "£1,680",
          "USD": "$2,150"
        },
        "included": [
          "2x Premium Titanium Dental Implants for lower jaw",
          "2x Authentic German Locator Snap-On Attachments",
          "Custom High-Impact Reinforced Lower Overdenture",
          "Multi-layered aesthetic nanocomposite teeth",
          "3D CBCT Tomography & digital placement guide",
          "Local anesthesia, surgical pack & post-op medications",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Airport & Clinic Transfers included"
        ]
      },
      {
        "name": "4-Implant Maxillary Palateless Snap-On",
        "brand": "Upper Jaw Horseshoe Solution (4x Implants + Open Palate)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€2,950",
          "GBP": "£2,550",
          "USD": "$3,250"
        },
        "included": [
          "4x Premium Titanium Implants for upper jaw stability",
          "4x German Locator Attachments with adjustable retention",
          "Horseshoe Open-Palate Overdenture (Zero roof covering)",
          "Restores 100% natural taste sensation and speech clarity",
          "High-wear aesthetic nanocomposite teeth (Shades BL1-A3)",
          "3D CBCT Tomography scan & computer-guided surgery",
          "Lifetime Global Manufacturer Guarantee Passport",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "4-Implant CAD/CAM Titanium Bar Package",
        "brand": "Milled Titanium Bar-Retained Overdenture System",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,600",
          "GBP": "£3,100",
          "USD": "$3,950"
        },
        "included": [
          "4x Premium Titanium Implants in upper or lower jaw",
          "Custom 5-Axis CAD/CAM Milled Titanium Connecting Bar",
          "Bar-retained overdenture with precision retentive clips",
          "Eliminates all micro-movement during intense chewing",
          "High-Impact Reinforced Overdenture with Composite Teeth",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Lifetime Warranty on Titanium Bar & Implants",
          "5-Star Hotel Stay & Private VIP Chauffeur Transport"
        ]
      },
      {
        "name": "Dual-Arch Complete Snap-On Rehabilitation",
        "brand": "Full Mouth Solution (6 Implants: 4 Upper + 2 Lower)",
        "duration": "4+6 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€4,800",
          "GBP": "£4,150",
          "USD": "$5,280"
        },
        "included": [
          "6x Titanium Implants Total (4 Upper Jaw + 2 Lower Jaw)",
          "6x German Locator Attachments with retention matrix pack",
          "1x Open-Palate Upper Snap-On Overdenture",
          "1x Rock-Solid Lower Snap-On Overdenture",
          "Comprehensive 3D CBCT scan & full occlusal bite calibration",
          "All surgical consumables, local anesthesia & medications",
          "Lifetime International Manufacturer Warranty Passports",
          "7 Nights 5-Star Luxury Hotel & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Premium Straumann Locator Snap-On",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,400",
          "GBP": "£2,950",
          "USD": "$3,750"
        },
        "included": [
          "2-4x Genuine Swiss Straumann Roxolid Implants",
          "Hydrophilic SLActive surface for ultra-fast bone fusion",
          "Original Straumann Novaloc / Locator Attachment System",
          "High-Impact Master Overdenture with Ivoclar Teeth",
          "3D CBCT Guided Surgery & Soft-Tissue Profiling",
          "Lifetime International Straumann Guarantee Passport",
          "5-Star Hotel Stay & VIP Mercedes Airport Chauffeur"
        ]
      },
      {
        "name": "BPS Biofunctional Ultra-Aesthetic Snap-On",
        "brand": "Ivoclar Vivadent BPS System (Biofunctional Prosthetics)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€3,200",
          "GBP": "£2,750",
          "USD": "$3,500"
        },
        "included": [
          "2-4x Titanium Implants with German Locator Attachments",
          "Certified Ivoclar BPS Biofunctional Prosthetic Protocol",
          "Ivoclar SR Phonares II multi-layered aesthetic teeth",
          "Gnathometer bite registration for optimal jaw alignment",
          "3D Tomography scan & computer-guided surgery",
          "Lifetime Manufacturer Warranty on Implants & Attachments",
          "VIP Mercedes Chauffeur & Luxury Hotel Stay included"
        ]
      }
    ],
    "costTitle": "Comparativo Internacional de Custos: Próteses Sobre Implantes (Reino Unido / Alemanha vs Istambul)",
    "costSubtitle": "Compare real clinical costs per jaw including 2 to 4 implants, Locator attachments, reinforced overdenture, 5-star hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Cost per Jaw (Implants + Overdenture)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private Clinics)",
        "costPerArch": "£6,000 – £10,000 ($7,800 – $13,000)",
        "inclusions": "Implants and denture only. Locator abutments (£450 each), CBCT scan (£200), and extractions billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Restorative Clinics)",
        "costPerArch": "€5,500 – €9,000 ($6,000 – $9,900)",
        "inclusions": "Surgeon fee and implants. Locator attachments, lab fabrication, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€1,950 – €3,600 (£1,680 – £3,100)",
        "inclusions": "100% All-Inclusive: 2–4 certified implants, German Locators, high-impact composite overdenture, 3D CBCT, 5-star hotel & VIP transfers.",
        "valueAdvantage": "65% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Perguntas Frequentes: Próteses Sobre Implantes",
    "faqSubtitle": "Clinically verified answers regarding Snap-On retention, open palate comfort, chewing power, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Prosthetic FAQ (Snap-On Overdenture Mechanics)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is an Implant-Supported Overdenture and how does it snap into place?",
        "a": "An implant-supported overdenture is a removable prosthetic arch that snaps firmly onto 2 to 4 dental implants using precision German Locator attachments or ball anchors. It locks with an audible click, eliminating all shifting, rocking, or accidental dislodgment."
      },
      {
        "q": "How does a Snap-On overdenture compare to traditional loose dentures?",
        "a": "Unlike traditional dentures that rely on suction and messy adhesive creams, Snap-On overdentures are 100% mechanically locked. They provide 3 to 4 times greater chewing force, eliminate gum sores, and will never slip while eating or laughing."
      },
      {
        "q": "Can upper implant overdentures be made without covering the palate?",
        "a": "Yes! When supported by 4 dental implants, upper overdentures can be fabricated in a horseshoe shape with an open palate. Leaving the roof of the mouth uncovered restores 100% of your natural taste sensation and temperature perception."
      },
      {
        "q": "How many implants are needed for the lower and upper jaw?",
        "a": "The dense bone of the lower jaw requires a minimum of 2 implants for rock-solid retention. The softer bone of the upper jaw requires 4 implants to securely support a palateless horseshoe overdenture."
      },
      {
        "q": "Do I need to remove my Snap-On denture at night?",
        "a": "Yes. While overdentures remain firmly locked all day during eating and speaking, removing them at night allows your gum tissues to rest and makes oral hygiene around the Locator abutments effortless."
      },
      {
        "q": "How long do the Locator snap attachments last before replacement?",
        "a": "The titanium Locator abutments screwed into the implants last a lifetime. The tiny replaceable nylon retention caps inside the denture typically last 12 to 18 months and can be replaced in less than 2 minutes by any dentist or at home."
      },
      {
        "q": "What is the difference between Locator Snap-On and CAD/CAM Bar-Retained dentures?",
        "a": "Locators use individual stud attachments for each implant, offering simple maintenance and a low profile. A CAD/CAM milled titanium bar connects all 4 implants together with rigid clips, providing the highest possible stability for extreme chewing forces."
      },
      {
        "q": "Will I be left without teeth during the healing process?",
        "a": "Never. On the day of implant placement, your existing denture is soft-relined or a functional temporary denture is fitted, ensuring you leave our clinic with an attractive smile and immediate chewing capability."
      },
      {
        "q": "Can I eat hard foods like apples, steak, and nuts with Snap-On dentures?",
        "a": "Yes. Because the biting force is transferred directly into the jawbone through the implants rather than resting on soft gums, patients regain 70% to 80% of natural chewing efficiency, allowing you to comfortably enjoy solid meats, fruits, and crusty bread."
      },
      {
        "q": "Can existing loose dentures be converted into Snap-On dentures?",
        "a": "If your existing denture is in good structural condition and properly aligned with your bite, our laboratory can often retrofit titanium Locator housings into your current denture once the implants have healed."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many visits and days in Istanbul are required for overdenture treatment?",
        "a": "The treatment requires 2 short visits. Visit 1 requires 3 to 4 days for 3D CBCT planning, implant placement, and fitting of a temporary denture. After 8 to 12 weeks of bone healing, Visit 2 requires 5 days for Locator attachment and final overdenture delivery."
      },
      {
        "q": "What is included in the Master Smile Studio Overdenture Package?",
        "a": "Our all-inclusive packages cover all titanium implants, German Locator attachments, reinforced overdenture with composite teeth, 3D CBCT scans, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of implants and Locator attachments do you use?",
        "a": "We use globally certified implant systems including Straumann Group (Switzerland), Nobel Biocare, Medentika, and authentic German Zest/Bredent Locator attachments, all accompanied by international guarantee passports."
      },
      {
        "q": "Why are Implant-Supported Dentures 65%–70% cheaper in Istanbul than in the UK or Germany?",
        "a": "Lower laboratory operational expenses, favorable exchange rates, and efficient clinical workflows in Istanbul allow us to provide genuine Swiss and German implant systems at a fraction of Western clinic prices without compromising prosthetic excellence."
      },
      {
        "q": "What guarantees and warranties are provided?",
        "a": "All titanium dental implants come with an official Lifetime International Manufacturer Warranty. Master Smile Studio also provides a clinical warranty covering the overdenture prosthetic base, teeth, and laboratory craftsmanship."
      },
      {
        "q": "Is bone grafting necessary before getting implant overdentures?",
        "a": "In most cases, no. Because only 2 to 4 implants are required and can be strategically angled into available bone in the front of the jaw, overdentures avoid the need for complex sinus lifts or bone grafting in 90% of patients."
      },
      {
        "q": "How do I get a free treatment plan and quote before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief prosthodontist and implant surgeon will analyze your bone structure and provide a tailored 3D treatment plan and fixed price quote within 24 hours."
      }
    ]
  },
  "es": {
    "introBadge": "SOBREDENTADURAS SOBRE IMPLANTES (SNAP-ON)",
    "introTitle": "Prótesis Sobre Implantes en Estambul: Fijación Snap-On y Paladar Libre",
    "introLead": "Olvídese de dentaduras sueltas y molestos adhesivos: 2 a 4 implantes con anclajes Locator o barra de titanio garantizan 100% de fuerza masticatoria y comodidad en 4 a 6 días.",
    "introP1": "Implant-supported dentures (often called Snap-On Overdentures) bridge the gap between traditional loose false teeth and expensive fixed full-arch bridges. By anchoring onto 2 to 4 biocompatible titanium implants per jaw, they eliminate painful gum friction, restore natural vertical facial dimensions, and provide 3 to 4 times stronger biting efficiency than conventional acrylic dentures.",
    "introP2": "For the upper jaw, our prosthodontists engineer a horseshoe-shaped open-palate design that leaves the roof of your mouth completely uncovered, restoring 100% of your natural taste sensation and temperature perception. The denture effortlessly snaps on with audible precision and can be removed in seconds for effortless cleaning.",
    "introP3Lead": "For permanently fixed non-removable bridge solutions, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkZygoma": "Zygomatic Implants for Severe Bone Loss",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Implant-Supported Overdentures?",
    "candidacySubtitle": "Designed for patients suffering from loose dentures or those seeking affordable full-mouth stability without extensive bone grafts.",
    "candidacyPoints": [
      {
        "title": "Loose, Floating Lower Jaw Dentures",
        "desc": "Patients whose bottom dentures constantly slip, lift during speech, or float while eating."
      },
      {
        "title": "Strong Gag Reflex & Nausea from Upper Plates",
        "desc": "Patients who cannot tolerate the thick acrylic plastic covering the entire roof of their mouth."
      },
      {
        "title": "Budget-Friendly Full-Mouth Rehabilitation",
        "desc": "Patients seeking rock-solid implant retention at a fraction of the cost of fixed All-on-4 zirconia."
      },
      {
        "title": "Reduced Jawbone Height in Older Adults",
        "desc": "Patients with moderate bone loss where 2–4 implants provide optimal support without complex grafting."
      }
    ],
    "compareTitle": "Comparación Clínica: Sobredentadura Snap-On vs. Barra vs. Tradicional vs. All-on-4",
    "compareSubtitle": "A scientific analysis of retention mechanisms, palate coverage, chewing efficiency, and total cost.",
    "compareTableHeaders": {
      "criteria": "Restorative Parameter",
      "traditional": "Traditional Loose Denture",
      "snapOn": "Snap-On Locator Overdenture (2-4 Implants) ⭐",
      "allOn4": "Fixed All-on-4 Zirconia Bridge"
    },
    "compareTableRows": [
      {
        "criteria": "Retention & Locking Mechanism",
        "traditional": "Suction & messy adhesive creams (Loose)",
        "snapOn": "German Locator Snap-Lock (Zero movement)",
        "allOn4": "Permanently screw-retained (Non-removable)"
      },
      {
        "criteria": "Upper Palate Covering",
        "traditional": "100% Full acrylic coverage (Alters taste)",
        "snapOn": "Horseshoe Open Palate (100% Taste restored)",
        "allOn4": "Horseshoe Open Palate (100% Taste restored)"
      },
      {
        "criteria": "Masticatory Chewing Force",
        "traditional": "15% – 20% of natural teeth",
        "snapOn": "65% – 80% of natural teeth (Bite apples/steak)",
        "allOn4": "95% – 100% of natural teeth"
      },
      {
        "criteria": "Number of Implants Required",
        "traditional": "0 Implants",
        "snapOn": "2 Implants (Lower) / 4 Implants (Upper)",
        "allOn4": "4 to 6 Implants per jaw"
      },
      {
        "criteria": "Cleaning & Oral Hygiene",
        "traditional": "Removable cleaning",
        "snapOn": "Simple click-out for effortless cleaning",
        "allOn4": "Fixed (Requires Waterpik & superfloss)"
      },
      {
        "criteria": "Bone Loss Prevention",
        "traditional": "Accelerates jawbone resorption under pressure",
        "snapOn": "Stimulates & preserves alveolar bone height",
        "allOn4": "Full osseous stimulation & preservation"
      },
      {
        "criteria": "Total Treatment Cost Level",
        "traditional": "Lowest cost (Poor quality of life)",
        "snapOn": "Highly Affordable (Best value for stability)",
        "allOn4": "Premium Investment"
      }
    ],
    "compareDecision": {
      "whenSnapOnTitle": "When is a Snap-On Overdenture the Best Choice?",
      "whenSnapOnText": "Snap-On overdentures are ideal for patients seeking rock-solid chewing stability, an open palate, and effortless hygiene on a sensible budget, without complex bone grafting.",
      "whenAllOn4Title": "When is Fixed All-on-4 Advised Instead?",
      "whenAllOn4Text": "All-on-4 is recommended if you desire permanently screwed-in, 100% fixed teeth that never come out of your mouth and feel identical to natural teeth."
    },
    "processTitle": "Protocolo de Precisión en 3 Fases para Sobredentaduras",
    "processSubtitle": "Our prosthodontic team utilizes computer-guided 3D digital dentistry for immediate stability and aesthetic smile harmony.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Guided Surgical Stent",
        "text": "High-definition 3D tomography identifies dense cortical bone in the anterior jaw. A precision surgical stent determines the exact parallel angulation for optimal Locator attachment.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Parallelism Guide",
            "val": "Digital Stent Alignment"
          },
          {
            "key": "Implants Planned",
            "val": "2 to 4 Implants per Jaw"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Minimally Invasive Placement & Immediate Functional Denture",
        "text": "Implants are placed through keyhole flapless surgery under local anesthesia. Your existing or temporary denture is soft-relined so you leave with functional teeth on day one.",
        "specs": [
          {
            "key": "Surgical Approach",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Anesthesia",
            "val": "Local Anesthesia / Sedation"
          },
          {
            "key": "Immediate Wear",
            "val": "Soft-Relined Functional Teeth"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "German Locator Snap Attachment & High-Impact Overdenture",
        "text": "After 8–12 weeks of bone healing, Swiss/German Locator abutments are attached. A high-impact cross-linked overdenture with multi-layered composite teeth is custom delivered.",
        "specs": [
          {
            "key": "Attachment System",
            "val": "German Locator / CAD/CAM Bar"
          },
          {
            "key": "Base Material",
            "val": "High-Impact Cross-Linked Resin"
          },
          {
            "key": "Teeth Grade",
            "val": "Multi-Layer Nanocomposite"
          }
        ]
      }
    ],
    "materialsTitle": "Materiales de Sobredentaduras y Barras de Titanio",
    "materialsSubtitle": "Discover the advanced materials used to craft lightweight, fracture-resistant overdentures that withstand years of daily snap retention.",
    "materialsSpecLabels": {
      "material": "Base & Tooth Composition",
      "strength": "Impact & Flexural Strength",
      "chipping": "Wear & Abrasion Resistance",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "High-Impact Resin + Nanocomposite Teeth",
        "sub": "Reinforced Cross-Linked Base with Premium Composite Teeth",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "High-Impact PMMA + Multi-Layer Nanocomposite Teeth",
        "strength": "130 – 160 MPa (High Impact Resistance)",
        "chippingRisk": "Very Low (Micro-filler reinforced composite)",
        "lifespan": "8 – 12+ Years (Easily relined/serviced)",
        "features": [
          {
            "text": "Lightweight, natural oral feel with open-palate horseshoe design",
            "status": "good"
          },
          {
            "text": "Multi-layer aesthetic teeth mimic natural optical depth and enamel shade",
            "status": "good"
          },
          {
            "text": "Integrated titanium housings eliminate retention housing loosening",
            "status": "good"
          },
          {
            "text": "Replaceable Locator nylon inserts allow easy tension adjustment anytime",
            "status": "good"
          }
        ]
      },
      {
        "title": "CAD/CAM Milled Titanium Bar Overdenture",
        "sub": "Solid Titanium Substructure Connecting 4 Implants",
        "badge": "Maximum Rigid Retention",
        "isGold": false,
        "material": "Milled Grade 5 Titanium Bar + Acrylic Overdenture",
        "strength": "850 – 1000 MPa (Indestructible Substructure)",
        "chippingRisk": "Zero Substructure Fracture",
        "lifespan": "15+ Years (Bar lasts lifetime)",
        "features": [
          {
            "text": "Splints all 4 implants together for maximum load distribution",
            "status": "good"
          },
          {
            "text": "Zero micro-movement even during heavy chewing of tough meats",
            "status": "good"
          },
          {
            "text": "Allows horse-shoe palate-free design even on the upper jaw",
            "status": "good"
          },
          {
            "text": "Higher initial laboratory fabrication cost than standalone Locators",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Traditional Cold-Cure Acrylic Denture",
        "sub": "Standard Base with Basic Plastic Teeth (Not Recommended)",
        "badge": "Economy Material",
        "isGold": false,
        "material": "Cold-Cure Acrylic + Soft Monolayer Plastic Teeth",
        "strength": "60 – 80 MPa (Brittle)",
        "chippingRisk": "High (Teeth wear down rapidly within 2-3 years)",
        "lifespan": "3 – 5 Years",
        "features": [
          {
            "text": "Low initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Rapid tooth wear flattens chewing surfaces and collapses jaw height",
            "status": "bad"
          },
          {
            "text": "Porous resin absorbs bacteria, stains, and chronic food odors",
            "status": "bad"
          },
          {
            "text": "Prone to cracking under modern implant retention forces",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "highImpact": "High-Impact Composite ⭐",
      "titaniumBar": "CAD/CAM Titanium Bar",
      "coldCure": "Cold-Cure Economy Acrylic"
    },
    "materialsTableRows": [
      {
        "criteria": "Impact Resistance",
        "highImpact": "High (Shatter-proof cross-linked)",
        "titaniumBar": "Maximum (Solid titanium core)",
        "coldCure": "Low (Prone to cracking)"
      },
      {
        "criteria": "Tooth Wear Resistance",
        "highImpact": "Very High (Nanocomposite fillers)",
        "titaniumBar": "Very High (Nanocomposite teeth)",
        "coldCure": "Poor (Plastic flattens quickly)"
      },
      {
        "criteria": "Open Palate Horseshoe Suitability",
        "highImpact": "100% Recommended (Upper jaw)",
        "titaniumBar": "100% Recommended (Upper jaw)",
        "coldCure": "Requires full bulky palate"
      },
      {
        "criteria": "Stain & Odor Resistance",
        "highImpact": "High (Dense micro-surface)",
        "titaniumBar": "High (Non-porous titanium)",
        "coldCure": "Porous (Absorbs odors & stains)"
      },
      {
        "criteria": "Maintenance & Servicing",
        "highImpact": "Simple 5-minute nylon cap change",
        "coldCure": "Frequent relining & replacements"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "highImpact": "8 – 12+ Years",
        "titaniumBar": "15+ Years (Bar is Lifetime)",
        "coldCure": "3 – 5 Years"
      }
    ],
    "packagesTitle": "Paquetes de Prótesis Sobre Implantes y Conversor de Divisas",
    "packagesSubtitle": "All-inclusive single-jaw and full-mouth packages featuring certified Straumann, Nobel Biocare, and German Locator systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "2-Implant Mandibular Snap-On Package",
        "brand": "Lower Jaw Solution (2x Implants + German Locators)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "popular": true,
        "price": {
          "EUR": "€1,950",
          "GBP": "£1,680",
          "USD": "$2,150"
        },
        "included": [
          "2x Premium Titanium Dental Implants for lower jaw",
          "2x Authentic German Locator Snap-On Attachments",
          "Custom High-Impact Reinforced Lower Overdenture",
          "Multi-layered aesthetic nanocomposite teeth",
          "3D CBCT Tomography & digital placement guide",
          "Local anesthesia, surgical pack & post-op medications",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Airport & Clinic Transfers included"
        ]
      },
      {
        "name": "4-Implant Maxillary Palateless Snap-On",
        "brand": "Upper Jaw Horseshoe Solution (4x Implants + Open Palate)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€2,950",
          "GBP": "£2,550",
          "USD": "$3,250"
        },
        "included": [
          "4x Premium Titanium Implants for upper jaw stability",
          "4x German Locator Attachments with adjustable retention",
          "Horseshoe Open-Palate Overdenture (Zero roof covering)",
          "Restores 100% natural taste sensation and speech clarity",
          "High-wear aesthetic nanocomposite teeth (Shades BL1-A3)",
          "3D CBCT Tomography scan & computer-guided surgery",
          "Lifetime Global Manufacturer Guarantee Passport",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "4-Implant CAD/CAM Titanium Bar Package",
        "brand": "Milled Titanium Bar-Retained Overdenture System",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,600",
          "GBP": "£3,100",
          "USD": "$3,950"
        },
        "included": [
          "4x Premium Titanium Implants in upper or lower jaw",
          "Custom 5-Axis CAD/CAM Milled Titanium Connecting Bar",
          "Bar-retained overdenture with precision retentive clips",
          "Eliminates all micro-movement during intense chewing",
          "High-Impact Reinforced Overdenture with Composite Teeth",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Lifetime Warranty on Titanium Bar & Implants",
          "5-Star Hotel Stay & Private VIP Chauffeur Transport"
        ]
      },
      {
        "name": "Dual-Arch Complete Snap-On Rehabilitation",
        "brand": "Full Mouth Solution (6 Implants: 4 Upper + 2 Lower)",
        "duration": "4+6 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€4,800",
          "GBP": "£4,150",
          "USD": "$5,280"
        },
        "included": [
          "6x Titanium Implants Total (4 Upper Jaw + 2 Lower Jaw)",
          "6x German Locator Attachments with retention matrix pack",
          "1x Open-Palate Upper Snap-On Overdenture",
          "1x Rock-Solid Lower Snap-On Overdenture",
          "Comprehensive 3D CBCT scan & full occlusal bite calibration",
          "All surgical consumables, local anesthesia & medications",
          "Lifetime International Manufacturer Warranty Passports",
          "7 Nights 5-Star Luxury Hotel & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Premium Straumann Locator Snap-On",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,400",
          "GBP": "£2,950",
          "USD": "$3,750"
        },
        "included": [
          "2-4x Genuine Swiss Straumann Roxolid Implants",
          "Hydrophilic SLActive surface for ultra-fast bone fusion",
          "Original Straumann Novaloc / Locator Attachment System",
          "High-Impact Master Overdenture with Ivoclar Teeth",
          "3D CBCT Guided Surgery & Soft-Tissue Profiling",
          "Lifetime International Straumann Guarantee Passport",
          "5-Star Hotel Stay & VIP Mercedes Airport Chauffeur"
        ]
      },
      {
        "name": "BPS Biofunctional Ultra-Aesthetic Snap-On",
        "brand": "Ivoclar Vivadent BPS System (Biofunctional Prosthetics)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€3,200",
          "GBP": "£2,750",
          "USD": "$3,500"
        },
        "included": [
          "2-4x Titanium Implants with German Locator Attachments",
          "Certified Ivoclar BPS Biofunctional Prosthetic Protocol",
          "Ivoclar SR Phonares II multi-layered aesthetic teeth",
          "Gnathometer bite registration for optimal jaw alignment",
          "3D Tomography scan & computer-guided surgery",
          "Lifetime Manufacturer Warranty on Implants & Attachments",
          "VIP Mercedes Chauffeur & Luxury Hotel Stay included"
        ]
      }
    ],
    "costTitle": "Comparativa Internacional de Costes: Prótesis Sobre Implantes (Reino Unido / Alemania vs Estambul)",
    "costSubtitle": "Compare real clinical costs per jaw including 2 to 4 implants, Locator attachments, reinforced overdenture, 5-star hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Cost per Jaw (Implants + Overdenture)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private Clinics)",
        "costPerArch": "£6,000 – £10,000 ($7,800 – $13,000)",
        "inclusions": "Implants and denture only. Locator abutments (£450 each), CBCT scan (£200), and extractions billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Restorative Clinics)",
        "costPerArch": "€5,500 – €9,000 ($6,000 – $9,900)",
        "inclusions": "Surgeon fee and implants. Locator attachments, lab fabrication, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€1,950 – €3,600 (£1,680 – £3,100)",
        "inclusions": "100% All-Inclusive: 2–4 certified implants, German Locators, high-impact composite overdenture, 3D CBCT, 5-star hotel & VIP transfers.",
        "valueAdvantage": "65% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Preguntas Frecuentes: Prótesis Sobre Implantes",
    "faqSubtitle": "Clinically verified answers regarding Snap-On retention, open palate comfort, chewing power, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Prosthetic FAQ (Snap-On Overdenture Mechanics)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is an Implant-Supported Overdenture and how does it snap into place?",
        "a": "An implant-supported overdenture is a removable prosthetic arch that snaps firmly onto 2 to 4 dental implants using precision German Locator attachments or ball anchors. It locks with an audible click, eliminating all shifting, rocking, or accidental dislodgment."
      },
      {
        "q": "How does a Snap-On overdenture compare to traditional loose dentures?",
        "a": "Unlike traditional dentures that rely on suction and messy adhesive creams, Snap-On overdentures are 100% mechanically locked. They provide 3 to 4 times greater chewing force, eliminate gum sores, and will never slip while eating or laughing."
      },
      {
        "q": "Can upper implant overdentures be made without covering the palate?",
        "a": "Yes! When supported by 4 dental implants, upper overdentures can be fabricated in a horseshoe shape with an open palate. Leaving the roof of the mouth uncovered restores 100% of your natural taste sensation and temperature perception."
      },
      {
        "q": "How many implants are needed for the lower and upper jaw?",
        "a": "The dense bone of the lower jaw requires a minimum of 2 implants for rock-solid retention. The softer bone of the upper jaw requires 4 implants to securely support a palateless horseshoe overdenture."
      },
      {
        "q": "Do I need to remove my Snap-On denture at night?",
        "a": "Yes. While overdentures remain firmly locked all day during eating and speaking, removing them at night allows your gum tissues to rest and makes oral hygiene around the Locator abutments effortless."
      },
      {
        "q": "How long do the Locator snap attachments last before replacement?",
        "a": "The titanium Locator abutments screwed into the implants last a lifetime. The tiny replaceable nylon retention caps inside the denture typically last 12 to 18 months and can be replaced in less than 2 minutes by any dentist or at home."
      },
      {
        "q": "What is the difference between Locator Snap-On and CAD/CAM Bar-Retained dentures?",
        "a": "Locators use individual stud attachments for each implant, offering simple maintenance and a low profile. A CAD/CAM milled titanium bar connects all 4 implants together with rigid clips, providing the highest possible stability for extreme chewing forces."
      },
      {
        "q": "Will I be left without teeth during the healing process?",
        "a": "Never. On the day of implant placement, your existing denture is soft-relined or a functional temporary denture is fitted, ensuring you leave our clinic with an attractive smile and immediate chewing capability."
      },
      {
        "q": "Can I eat hard foods like apples, steak, and nuts with Snap-On dentures?",
        "a": "Yes. Because the biting force is transferred directly into the jawbone through the implants rather than resting on soft gums, patients regain 70% to 80% of natural chewing efficiency, allowing you to comfortably enjoy solid meats, fruits, and crusty bread."
      },
      {
        "q": "Can existing loose dentures be converted into Snap-On dentures?",
        "a": "If your existing denture is in good structural condition and properly aligned with your bite, our laboratory can often retrofit titanium Locator housings into your current denture once the implants have healed."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many visits and days in Istanbul are required for overdenture treatment?",
        "a": "The treatment requires 2 short visits. Visit 1 requires 3 to 4 days for 3D CBCT planning, implant placement, and fitting of a temporary denture. After 8 to 12 weeks of bone healing, Visit 2 requires 5 days for Locator attachment and final overdenture delivery."
      },
      {
        "q": "What is included in the Master Smile Studio Overdenture Package?",
        "a": "Our all-inclusive packages cover all titanium implants, German Locator attachments, reinforced overdenture with composite teeth, 3D CBCT scans, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of implants and Locator attachments do you use?",
        "a": "We use globally certified implant systems including Straumann Group (Switzerland), Nobel Biocare, Medentika, and authentic German Zest/Bredent Locator attachments, all accompanied by international guarantee passports."
      },
      {
        "q": "Why are Implant-Supported Dentures 65%–70% cheaper in Istanbul than in the UK or Germany?",
        "a": "Lower laboratory operational expenses, favorable exchange rates, and efficient clinical workflows in Istanbul allow us to provide genuine Swiss and German implant systems at a fraction of Western clinic prices without compromising prosthetic excellence."
      },
      {
        "q": "What guarantees and warranties are provided?",
        "a": "All titanium dental implants come with an official Lifetime International Manufacturer Warranty. Master Smile Studio also provides a clinical warranty covering the overdenture prosthetic base, teeth, and laboratory craftsmanship."
      },
      {
        "q": "Is bone grafting necessary before getting implant overdentures?",
        "a": "In most cases, no. Because only 2 to 4 implants are required and can be strategically angled into available bone in the front of the jaw, overdentures avoid the need for complex sinus lifts or bone grafting in 90% of patients."
      },
      {
        "q": "How do I get a free treatment plan and quote before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief prosthodontist and implant surgeon will analyze your bone structure and provide a tailored 3D treatment plan and fixed price quote within 24 hours."
      }
    ]
  },
  "ru": {
    "introBadge": "ПОКРЫВНЫЕ ПРОТЕЗЫ НА ИМПЛАНТАХ (SNAP-ON)",
    "introTitle": "Съемные протезы на имплантах в Стамбуле: Фиксация на замках Locator",
    "introLead": "Забудьте о выпадающих протезах и клее: 2–4 импланта с замками Locator или балочной фиксацией обеспечивают 100% стабильность без закрытия неба за 4–6 дней.",
    "introP1": "Implant-supported dentures (often called Snap-On Overdentures) bridge the gap between traditional loose false teeth and expensive fixed full-arch bridges. By anchoring onto 2 to 4 biocompatible titanium implants per jaw, they eliminate painful gum friction, restore natural vertical facial dimensions, and provide 3 to 4 times stronger biting efficiency than conventional acrylic dentures.",
    "introP2": "For the upper jaw, our prosthodontists engineer a horseshoe-shaped open-palate design that leaves the roof of your mouth completely uncovered, restoring 100% of your natural taste sensation and temperature perception. The denture effortlessly snaps on with audible precision and can be removed in seconds for effortless cleaning.",
    "introP3Lead": "For permanently fixed non-removable bridge solutions, explore our ",
    "introP3LinkAll4": "All-on-4 Dental Implants",
    "introP3Mid": ", ",
    "introP3LinkAll6": "All-on-6 Dental Implants",
    "introP3And": ", or ",
    "introP3LinkZygoma": "Zygomatic Implants for Severe Bone Loss",
    "introP3Tail": " in Istanbul.",
    "candidacyTitle": "Are You a Candidate for Implant-Supported Overdentures?",
    "candidacySubtitle": "Designed for patients suffering from loose dentures or those seeking affordable full-mouth stability without extensive bone grafts.",
    "candidacyPoints": [
      {
        "title": "Loose, Floating Lower Jaw Dentures",
        "desc": "Patients whose bottom dentures constantly slip, lift during speech, or float while eating."
      },
      {
        "title": "Strong Gag Reflex & Nausea from Upper Plates",
        "desc": "Patients who cannot tolerate the thick acrylic plastic covering the entire roof of their mouth."
      },
      {
        "title": "Budget-Friendly Full-Mouth Rehabilitation",
        "desc": "Patients seeking rock-solid implant retention at a fraction of the cost of fixed All-on-4 zirconia."
      },
      {
        "title": "Reduced Jawbone Height in Older Adults",
        "desc": "Patients with moderate bone loss where 2–4 implants provide optimal support without complex grafting."
      }
    ],
    "compareTitle": "Объективное Сравнение: Замковые протезы vs. Балочные vs. Обычные vs. All-on-4",
    "compareSubtitle": "A scientific analysis of retention mechanisms, palate coverage, chewing efficiency, and total cost.",
    "compareTableHeaders": {
      "criteria": "Restorative Parameter",
      "traditional": "Traditional Loose Denture",
      "snapOn": "Snap-On Locator Overdenture (2-4 Implants) ⭐",
      "allOn4": "Fixed All-on-4 Zirconia Bridge"
    },
    "compareTableRows": [
      {
        "criteria": "Retention & Locking Mechanism",
        "traditional": "Suction & messy adhesive creams (Loose)",
        "snapOn": "German Locator Snap-Lock (Zero movement)",
        "allOn4": "Permanently screw-retained (Non-removable)"
      },
      {
        "criteria": "Upper Palate Covering",
        "traditional": "100% Full acrylic coverage (Alters taste)",
        "snapOn": "Horseshoe Open Palate (100% Taste restored)",
        "allOn4": "Horseshoe Open Palate (100% Taste restored)"
      },
      {
        "criteria": "Masticatory Chewing Force",
        "traditional": "15% – 20% of natural teeth",
        "snapOn": "65% – 80% of natural teeth (Bite apples/steak)",
        "allOn4": "95% – 100% of natural teeth"
      },
      {
        "criteria": "Number of Implants Required",
        "traditional": "0 Implants",
        "snapOn": "2 Implants (Lower) / 4 Implants (Upper)",
        "allOn4": "4 to 6 Implants per jaw"
      },
      {
        "criteria": "Cleaning & Oral Hygiene",
        "traditional": "Removable cleaning",
        "snapOn": "Simple click-out for effortless cleaning",
        "allOn4": "Fixed (Requires Waterpik & superfloss)"
      },
      {
        "criteria": "Bone Loss Prevention",
        "traditional": "Accelerates jawbone resorption under pressure",
        "snapOn": "Stimulates & preserves alveolar bone height",
        "allOn4": "Full osseous stimulation & preservation"
      },
      {
        "criteria": "Total Treatment Cost Level",
        "traditional": "Lowest cost (Poor quality of life)",
        "snapOn": "Highly Affordable (Best value for stability)",
        "allOn4": "Premium Investment"
      }
    ],
    "compareDecision": {
      "whenSnapOnTitle": "When is a Snap-On Overdenture the Best Choice?",
      "whenSnapOnText": "Snap-On overdentures are ideal for patients seeking rock-solid chewing stability, an open palate, and effortless hygiene on a sensible budget, without complex bone grafting.",
      "whenAllOn4Title": "When is Fixed All-on-4 Advised Instead?",
      "whenAllOn4Text": "All-on-4 is recommended if you desire permanently screwed-in, 100% fixed teeth that never come out of your mouth and feel identical to natural teeth."
    },
    "processTitle": "3-Этапный Протокол Протезирования на Имплантах",
    "processSubtitle": "Our prosthodontic team utilizes computer-guided 3D digital dentistry for immediate stability and aesthetic smile harmony.",
    "processCards": [
      {
        "step": "PHASE 01",
        "title": "3D CBCT Bone Mapping & Guided Surgical Stent",
        "text": "High-definition 3D tomography identifies dense cortical bone in the anterior jaw. A precision surgical stent determines the exact parallel angulation for optimal Locator attachment.",
        "specs": [
          {
            "key": "CBCT Precision",
            "val": "< 0.1 mm accuracy"
          },
          {
            "key": "Parallelism Guide",
            "val": "Digital Stent Alignment"
          },
          {
            "key": "Implants Planned",
            "val": "2 to 4 Implants per Jaw"
          }
        ]
      },
      {
        "step": "PHASE 02",
        "title": "Minimally Invasive Placement & Immediate Functional Denture",
        "text": "Implants are placed through keyhole flapless surgery under local anesthesia. Your existing or temporary denture is soft-relined so you leave with functional teeth on day one.",
        "specs": [
          {
            "key": "Surgical Approach",
            "val": "Minimally Invasive Flapless"
          },
          {
            "key": "Anesthesia",
            "val": "Local Anesthesia / Sedation"
          },
          {
            "key": "Immediate Wear",
            "val": "Soft-Relined Functional Teeth"
          }
        ]
      },
      {
        "step": "PHASE 03",
        "title": "German Locator Snap Attachment & High-Impact Overdenture",
        "text": "After 8–12 weeks of bone healing, Swiss/German Locator abutments are attached. A high-impact cross-linked overdenture with multi-layered composite teeth is custom delivered.",
        "specs": [
          {
            "key": "Attachment System",
            "val": "German Locator / CAD/CAM Bar"
          },
          {
            "key": "Base Material",
            "val": "High-Impact Cross-Linked Resin"
          },
          {
            "key": "Teeth Grade",
            "val": "Multi-Layer Nanocomposite"
          }
        ]
      }
    ],
    "materialsTitle": "Материалы Покрывных Протезов и Балочных Конструкций",
    "materialsSubtitle": "Discover the advanced materials used to craft lightweight, fracture-resistant overdentures that withstand years of daily snap retention.",
    "materialsSpecLabels": {
      "material": "Base & Tooth Composition",
      "strength": "Impact & Flexural Strength",
      "chipping": "Wear & Abrasion Resistance",
      "lifespan": "Expected Longevity"
    },
    "materialsCards": [
      {
        "title": "High-Impact Resin + Nanocomposite Teeth",
        "sub": "Reinforced Cross-Linked Base with Premium Composite Teeth",
        "badge": "Our Golden Standard",
        "isGold": true,
        "material": "High-Impact PMMA + Multi-Layer Nanocomposite Teeth",
        "strength": "130 – 160 MPa (High Impact Resistance)",
        "chippingRisk": "Very Low (Micro-filler reinforced composite)",
        "lifespan": "8 – 12+ Years (Easily relined/serviced)",
        "features": [
          {
            "text": "Lightweight, natural oral feel with open-palate horseshoe design",
            "status": "good"
          },
          {
            "text": "Multi-layer aesthetic teeth mimic natural optical depth and enamel shade",
            "status": "good"
          },
          {
            "text": "Integrated titanium housings eliminate retention housing loosening",
            "status": "good"
          },
          {
            "text": "Replaceable Locator nylon inserts allow easy tension adjustment anytime",
            "status": "good"
          }
        ]
      },
      {
        "title": "CAD/CAM Milled Titanium Bar Overdenture",
        "sub": "Solid Titanium Substructure Connecting 4 Implants",
        "badge": "Maximum Rigid Retention",
        "isGold": false,
        "material": "Milled Grade 5 Titanium Bar + Acrylic Overdenture",
        "strength": "850 – 1000 MPa (Indestructible Substructure)",
        "chippingRisk": "Zero Substructure Fracture",
        "lifespan": "15+ Years (Bar lasts lifetime)",
        "features": [
          {
            "text": "Splints all 4 implants together for maximum load distribution",
            "status": "good"
          },
          {
            "text": "Zero micro-movement even during heavy chewing of tough meats",
            "status": "good"
          },
          {
            "text": "Allows horse-shoe palate-free design even on the upper jaw",
            "status": "good"
          },
          {
            "text": "Higher initial laboratory fabrication cost than standalone Locators",
            "status": "warn"
          }
        ]
      },
      {
        "title": "Traditional Cold-Cure Acrylic Denture",
        "sub": "Standard Base with Basic Plastic Teeth (Not Recommended)",
        "badge": "Economy Material",
        "isGold": false,
        "material": "Cold-Cure Acrylic + Soft Monolayer Plastic Teeth",
        "strength": "60 – 80 MPa (Brittle)",
        "chippingRisk": "High (Teeth wear down rapidly within 2-3 years)",
        "lifespan": "3 – 5 Years",
        "features": [
          {
            "text": "Low initial manufacturing cost",
            "status": "good"
          },
          {
            "text": "Rapid tooth wear flattens chewing surfaces and collapses jaw height",
            "status": "bad"
          },
          {
            "text": "Porous resin absorbs bacteria, stains, and chronic food odors",
            "status": "bad"
          },
          {
            "text": "Prone to cracking under modern implant retention forces",
            "status": "bad"
          }
        ]
      }
    ],
    "materialsTableHeaders": {
      "criteria": "Comparison Criteria",
      "highImpact": "High-Impact Composite ⭐",
      "titaniumBar": "CAD/CAM Titanium Bar",
      "coldCure": "Cold-Cure Economy Acrylic"
    },
    "materialsTableRows": [
      {
        "criteria": "Impact Resistance",
        "highImpact": "High (Shatter-proof cross-linked)",
        "titaniumBar": "Maximum (Solid titanium core)",
        "coldCure": "Low (Prone to cracking)"
      },
      {
        "criteria": "Tooth Wear Resistance",
        "highImpact": "Very High (Nanocomposite fillers)",
        "titaniumBar": "Very High (Nanocomposite teeth)",
        "coldCure": "Poor (Plastic flattens quickly)"
      },
      {
        "criteria": "Open Palate Horseshoe Suitability",
        "highImpact": "100% Recommended (Upper jaw)",
        "titaniumBar": "100% Recommended (Upper jaw)",
        "coldCure": "Requires full bulky palate"
      },
      {
        "criteria": "Stain & Odor Resistance",
        "highImpact": "High (Dense micro-surface)",
        "titaniumBar": "High (Non-porous titanium)",
        "coldCure": "Porous (Absorbs odors & stains)"
      },
      {
        "criteria": "Maintenance & Servicing",
        "highImpact": "Simple 5-minute nylon cap change",
        "coldCure": "Frequent relining & replacements"
      },
      {
        "criteria": "Expected Clinical Lifespan",
        "highImpact": "8 – 12+ Years",
        "titaniumBar": "15+ Years (Bar is Lifetime)",
        "coldCure": "3 – 5 Years"
      }
    ],
    "packagesTitle": "Пакеты Протезов на Имплантах и Калькулятор Валют",
    "packagesSubtitle": "All-inclusive single-jaw and full-mouth packages featuring certified Straumann, Nobel Biocare, and German Locator systems.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "Package Inclusions:",
    "pricePerArchLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "2-Implant Mandibular Snap-On Package",
        "brand": "Lower Jaw Solution (2x Implants + German Locators)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "popular": true,
        "price": {
          "EUR": "€1,950",
          "GBP": "£1,680",
          "USD": "$2,150"
        },
        "included": [
          "2x Premium Titanium Dental Implants for lower jaw",
          "2x Authentic German Locator Snap-On Attachments",
          "Custom High-Impact Reinforced Lower Overdenture",
          "Multi-layered aesthetic nanocomposite teeth",
          "3D CBCT Tomography & digital placement guide",
          "Local anesthesia, surgical pack & post-op medications",
          "Lifetime International Manufacturer Warranty Passport",
          "VIP Mercedes Airport & Clinic Transfers included"
        ]
      },
      {
        "name": "4-Implant Maxillary Palateless Snap-On",
        "brand": "Upper Jaw Horseshoe Solution (4x Implants + Open Palate)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "EUR": "€2,950",
          "GBP": "£2,550",
          "USD": "$3,250"
        },
        "included": [
          "4x Premium Titanium Implants for upper jaw stability",
          "4x German Locator Attachments with adjustable retention",
          "Horseshoe Open-Palate Overdenture (Zero roof covering)",
          "Restores 100% natural taste sensation and speech clarity",
          "High-wear aesthetic nanocomposite teeth (Shades BL1-A3)",
          "3D CBCT Tomography scan & computer-guided surgery",
          "Lifetime Global Manufacturer Guarantee Passport",
          "5-Star Luxury Hotel Stay & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "4-Implant CAD/CAM Titanium Bar Package",
        "brand": "Milled Titanium Bar-Retained Overdenture System",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,600",
          "GBP": "£3,100",
          "USD": "$3,950"
        },
        "included": [
          "4x Premium Titanium Implants in upper or lower jaw",
          "Custom 5-Axis CAD/CAM Milled Titanium Connecting Bar",
          "Bar-retained overdenture with precision retentive clips",
          "Eliminates all micro-movement during intense chewing",
          "High-Impact Reinforced Overdenture with Composite Teeth",
          "3D CBCT Craniofacial diagnostics & surgical guide",
          "Lifetime Warranty on Titanium Bar & Implants",
          "5-Star Hotel Stay & Private VIP Chauffeur Transport"
        ]
      },
      {
        "name": "Dual-Arch Complete Snap-On Rehabilitation",
        "brand": "Full Mouth Solution (6 Implants: 4 Upper + 2 Lower)",
        "duration": "4+6 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "EUR": "€4,800",
          "GBP": "£4,150",
          "USD": "$5,280"
        },
        "included": [
          "6x Titanium Implants Total (4 Upper Jaw + 2 Lower Jaw)",
          "6x German Locator Attachments with retention matrix pack",
          "1x Open-Palate Upper Snap-On Overdenture",
          "1x Rock-Solid Lower Snap-On Overdenture",
          "Comprehensive 3D CBCT scan & full occlusal bite calibration",
          "All surgical consumables, local anesthesia & medications",
          "Lifetime International Manufacturer Warranty Passports",
          "7 Nights 5-Star Luxury Hotel & VIP Mercedes Transfers"
        ]
      },
      {
        "name": "Premium Straumann Locator Snap-On",
        "brand": "Straumann Group (Swiss Roxolid & SLActive Surface)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "EUR": "€3,400",
          "GBP": "£2,950",
          "USD": "$3,750"
        },
        "included": [
          "2-4x Genuine Swiss Straumann Roxolid Implants",
          "Hydrophilic SLActive surface for ultra-fast bone fusion",
          "Original Straumann Novaloc / Locator Attachment System",
          "High-Impact Master Overdenture with Ivoclar Teeth",
          "3D CBCT Guided Surgery & Soft-Tissue Profiling",
          "Lifetime International Straumann Guarantee Passport",
          "5-Star Hotel Stay & VIP Mercedes Airport Chauffeur"
        ]
      },
      {
        "name": "BPS Biofunctional Ultra-Aesthetic Snap-On",
        "brand": "Ivoclar Vivadent BPS System (Biofunctional Prosthetics)",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "EUR": "€3,200",
          "GBP": "£2,750",
          "USD": "$3,500"
        },
        "included": [
          "2-4x Titanium Implants with German Locator Attachments",
          "Certified Ivoclar BPS Biofunctional Prosthetic Protocol",
          "Ivoclar SR Phonares II multi-layered aesthetic teeth",
          "Gnathometer bite registration for optimal jaw alignment",
          "3D Tomography scan & computer-guided surgery",
          "Lifetime Manufacturer Warranty on Implants & Attachments",
          "VIP Mercedes Chauffeur & Luxury Hotel Stay included"
        ]
      }
    ],
    "costTitle": "Международное Сравнение Цен: Протезы на Имплантах (Великобритания / Германия vs Стамбул)",
    "costSubtitle": "Compare real clinical costs per jaw including 2 to 4 implants, Locator attachments, reinforced overdenture, 5-star hotel, and VIP transfers.",
    "costTableHeaders": {
      "country": "Location & Clinic Tier",
      "costPerArch": "Cost per Jaw (Implants + Overdenture)",
      "inclusions": "Package Coverage & Laboratory Work",
      "valueAdvantage": "Master Smile Studio Advantage"
    },
    "costTableRows": [
      {
        "country": "United Kingdom (Harley Street / Private Clinics)",
        "costPerArch": "£6,000 – £10,000 ($7,800 – $13,000)",
        "inclusions": "Implants and denture only. Locator abutments (£450 each), CBCT scan (£200), and extractions billed separately.",
        "valueAdvantage": "Baseline UK Private Market Cost"
      },
      {
        "country": "Germany / Switzerland (Private Restorative Clinics)",
        "costPerArch": "€5,500 – €9,000 ($6,000 – $9,900)",
        "inclusions": "Surgeon fee and implants. Locator attachments, lab fabrication, hotel, and transfers billed as extra line-items.",
        "valueAdvantage": "Baseline German Market Cost"
      },
      {
        "country": "Master Smile Studio (Istanbul, Turkey) ⭐",
        "costPerArch": "€1,950 – €3,600 (£1,680 – £3,100)",
        "inclusions": "100% All-Inclusive: 2–4 certified implants, German Locators, high-impact composite overdenture, 3D CBCT, 5-star hotel & VIP transfers.",
        "valueAdvantage": "65% – 70% Net Savings (Swiss/German Certified Quality)"
      }
    ],
    "faqTitle": "Часто Задаваемые Вопросы: Протезы на Имплантах",
    "faqSubtitle": "Clinically verified answers regarding Snap-On retention, open palate comfort, chewing power, and health tourism in Istanbul.",
    "faqGroup1Title": "Clinical & Prosthetic FAQ (Snap-On Overdenture Mechanics)",
    "faqGroup2Title": "Health Tourism, VIP Inclusions & Warranty FAQ",
    "faqsPart1": [
      {
        "q": "What is an Implant-Supported Overdenture and how does it snap into place?",
        "a": "An implant-supported overdenture is a removable prosthetic arch that snaps firmly onto 2 to 4 dental implants using precision German Locator attachments or ball anchors. It locks with an audible click, eliminating all shifting, rocking, or accidental dislodgment."
      },
      {
        "q": "How does a Snap-On overdenture compare to traditional loose dentures?",
        "a": "Unlike traditional dentures that rely on suction and messy adhesive creams, Snap-On overdentures are 100% mechanically locked. They provide 3 to 4 times greater chewing force, eliminate gum sores, and will never slip while eating or laughing."
      },
      {
        "q": "Can upper implant overdentures be made without covering the palate?",
        "a": "Yes! When supported by 4 dental implants, upper overdentures can be fabricated in a horseshoe shape with an open palate. Leaving the roof of the mouth uncovered restores 100% of your natural taste sensation and temperature perception."
      },
      {
        "q": "How many implants are needed for the lower and upper jaw?",
        "a": "The dense bone of the lower jaw requires a minimum of 2 implants for rock-solid retention. The softer bone of the upper jaw requires 4 implants to securely support a palateless horseshoe overdenture."
      },
      {
        "q": "Do I need to remove my Snap-On denture at night?",
        "a": "Yes. While overdentures remain firmly locked all day during eating and speaking, removing them at night allows your gum tissues to rest and makes oral hygiene around the Locator abutments effortless."
      },
      {
        "q": "How long do the Locator snap attachments last before replacement?",
        "a": "The titanium Locator abutments screwed into the implants last a lifetime. The tiny replaceable nylon retention caps inside the denture typically last 12 to 18 months and can be replaced in less than 2 minutes by any dentist or at home."
      },
      {
        "q": "What is the difference between Locator Snap-On and CAD/CAM Bar-Retained dentures?",
        "a": "Locators use individual stud attachments for each implant, offering simple maintenance and a low profile. A CAD/CAM milled titanium bar connects all 4 implants together with rigid clips, providing the highest possible stability for extreme chewing forces."
      },
      {
        "q": "Will I be left without teeth during the healing process?",
        "a": "Never. On the day of implant placement, your existing denture is soft-relined or a functional temporary denture is fitted, ensuring you leave our clinic with an attractive smile and immediate chewing capability."
      },
      {
        "q": "Can I eat hard foods like apples, steak, and nuts with Snap-On dentures?",
        "a": "Yes. Because the biting force is transferred directly into the jawbone through the implants rather than resting on soft gums, patients regain 70% to 80% of natural chewing efficiency, allowing you to comfortably enjoy solid meats, fruits, and crusty bread."
      },
      {
        "q": "Can existing loose dentures be converted into Snap-On dentures?",
        "a": "If your existing denture is in good structural condition and properly aligned with your bite, our laboratory can often retrofit titanium Locator housings into your current denture once the implants have healed."
      }
    ],
    "faqsPart2": [
      {
        "q": "How many visits and days in Istanbul are required for overdenture treatment?",
        "a": "The treatment requires 2 short visits. Visit 1 requires 3 to 4 days for 3D CBCT planning, implant placement, and fitting of a temporary denture. After 8 to 12 weeks of bone healing, Visit 2 requires 5 days for Locator attachment and final overdenture delivery."
      },
      {
        "q": "What is included in the Master Smile Studio Overdenture Package?",
        "a": "Our all-inclusive packages cover all titanium implants, German Locator attachments, reinforced overdenture with composite teeth, 3D CBCT scans, local anesthesia, post-op medications, 5-star hotel stay, and VIP Mercedes transfers."
      },
      {
        "q": "What brands of implants and Locator attachments do you use?",
        "a": "We use globally certified implant systems including Straumann Group (Switzerland), Nobel Biocare, Medentika, and authentic German Zest/Bredent Locator attachments, all accompanied by international guarantee passports."
      },
      {
        "q": "Why are Implant-Supported Dentures 65%–70% cheaper in Istanbul than in the UK or Germany?",
        "a": "Lower laboratory operational expenses, favorable exchange rates, and efficient clinical workflows in Istanbul allow us to provide genuine Swiss and German implant systems at a fraction of Western clinic prices without compromising prosthetic excellence."
      },
      {
        "q": "What guarantees and warranties are provided?",
        "a": "All titanium dental implants come with an official Lifetime International Manufacturer Warranty. Master Smile Studio also provides a clinical warranty covering the overdenture prosthetic base, teeth, and laboratory craftsmanship."
      },
      {
        "q": "Is bone grafting necessary before getting implant overdentures?",
        "a": "In most cases, no. Because only 2 to 4 implants are required and can be strategically angled into available bone in the front of the jaw, overdentures avoid the need for complex sinus lifts or bone grafting in 90% of patients."
      },
      {
        "q": "How do I get a free treatment plan and quote before traveling from abroad?",
        "a": "Simply send your recent panoramic X-ray or 3D CBCT scan via WhatsApp. Our chief prosthodontist and implant surgeon will analyze your bone structure and provide a tailored 3D treatment plan and fixed price quote within 24 hours."
      }
    ]
  }
};

export default function ImplantSupportedDenturesDetailView() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');

  return (
    <div className={styles.wrapper}>
      {/* 1. CLINICAL INTRODUCTION & BIOMECHANICS */}
      <section aria-labelledby="snap-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="snap-intro-heading" className={styles.introHeading}>
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
            <Link href="/treatments/dental-implants/zygomatic-implants" className={styles.linkGold}>
              {d.introP3LinkZygoma}
            </Link>
            {d.introP3Tail}
          </p>

          {/* Full-width 16:9 Clinical Overdenture Procedure Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/smhwCD78Vbo"
              title="Implant Supported Overdentures Clinical Procedure in Istanbul"
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

      {/* 2. OBJECTIVE COMPARISON: SNAP-ON vs BAR-RETAINED vs TRADITIONAL vs ALL-ON-4 */}
      <section aria-labelledby="snap-compare-heading" className={styles.compareSection}>
        <div className={styles.container}>
          <div className={styles.compareHeader}>
            <h2 id="snap-compare-heading" className={styles.compareTitle}>
              {d.compareTitle}
            </h2>
            <p className={styles.compareSubtitle}>{d.compareSubtitle}</p>
          </div>

          <div className={styles.compareTableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.compareTh}>{d.compareTableHeaders.criteria}</th>
                  <th className={styles.compareTh}>{d.compareTableHeaders.traditional}</th>
                  <th className={styles.compareThHighlight}>{d.compareTableHeaders.snapOn}</th>
                  <th className={styles.compareTh}>{d.compareTableHeaders.allOn4}</th>
                </tr>
              </thead>
              <tbody>
                {d.compareTableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className={styles.compareTd}>
                      <strong>{row.criteria}</strong>
                    </td>
                    <td className={styles.compareTd}>{row.traditional}</td>
                    <td className={`${styles.compareTd} ${styles.compareTdHighlight}`}>
                      {row.snapOn}
                    </td>
                    <td className={styles.compareTd}>{row.allOn4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.compareDecisionBox}>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenSnapOnTitle}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenSnapOnText}</p>
            </div>
            <div className={styles.compareDecisionCol}>
              <h3 className={styles.compareDecisionTitle}>{d.compareDecision.whenAllOn4Title}</h3>
              <p className={styles.compareDecisionText}>{d.compareDecision.whenAllOn4Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-PHASE PRECISION PROTOCOL (HORIZONTAL PEEK CAROUSEL ON MOBILE) */}
      <section aria-labelledby="snap-process-heading" className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <h2 id="snap-process-heading" className={styles.processTitle}>
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

      {/* 4. PERMANENT OVERDENTURE MATERIALS COMPARISON */}
      <section aria-labelledby="snap-materials-heading" className={styles.materialsSection}>
        <div className={styles.container}>
          <div className={styles.materialsHeader}>
            <h2 id="snap-materials-heading" className={styles.materialsTitle}>
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
                  <th className={styles.materialsThGold}>{d.materialsTableHeaders.highImpact}</th>
                  <th className={styles.materialsTh}>{d.materialsTableHeaders.titaniumBar}</th>
                  <th className={styles.materialsTh}>{d.materialsTableHeaders.coldCure}</th>
                </tr>
              </thead>
              <tbody>
                {d.materialsTableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className={styles.materialsTd}>
                      <strong>{row.criteria}</strong>
                    </td>
                    <td className={`${styles.materialsTd} ${styles.materialsTdHighlight}`}>
                      {row.highImpact}
                    </td>
                    <td className={styles.materialsTd}>{row.titaniumBar}</td>
                    <td className={styles.materialsTd}>{row.coldCure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENT PACKAGES & DYNAMIC CURRENCY SWITCHER */}
      <section aria-labelledby="snap-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="snap-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="snap-cost-heading" className={styles.costSection}>
        <div className={styles.container}>
          <div className={styles.costHeader}>
            <h2 id="snap-cost-heading" className={styles.costTitle}>
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
      <TreatmentClinicTourSection placeholderNum="OVER-TOUR" />

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
      <section aria-labelledby="snap-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="snap-faq-heading" className={styles.faqTitle}>
              {d.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{d.faqSubtitle}</p>
          </div>

          {/* CLINICAL & PROSTHETIC FAQS (10 QUESTIONS) */}
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
      <TreatmentInteractiveQuoteForm defaultTreatment="Implant Supported Dentures" />
    </div>
  );
}
