'use client';

import React, { useState, useRef } from 'react';
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

interface BenefitItem {
  num: string;
  title: string;
  desc: string;
}

interface CompareTableRow {
  criteria: string;
  grafting: string;
  hybrid: string;
  quad: string;
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

  costIntroTitle1: string;
  costIntroTitle2: string;
  costIntroP1: string;
  costIntroP2: string;
  costIntroP3: string;

  packagesTitle: string;
  packagesSubtitle: string;
  durationLabel: string;
  includedLabel: string;
  pricePerArchLabel: string;
  getQuoteBtn: string;
  mostPopularBadge: string;
  packages: PackageItem[];

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

  journeyTitle: string;
  journeyLead: string;
  journeyStayLabel: string;
  journeyStayVal: string;
  journeyVisitsLabel: string;
  journeyVisitsVal: string;
  journeyRecoveryLabel: string;
  journeyRecoveryVal: string;
  journeyPriceLabel: string;
  journeyPriceVal: string;
  reachOutLabel: string;
  reachOutWhatsapp: string;
  reachOutPhone: string;
  reachOutForm: string;
  reachOutEmail: string;

  advantagesTitle: string;
  advantagesP1: string;
  advantagesP2: string;
  keyBenefitsHeading: string;
  benefits: BenefitItem[];

  faqTitle: string;
  faqSubtitle: string;
  faqGroup1Title: string;
  faqGroup2Title: string;
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
    "costIntroTitle1": "Cost of Zygomatic and Pterygoid (Cheekbone) Implants in Turkey:",
    "costIntroTitle2": "Affordable, High-Quality Maxillofacial Treatment at Master Smile Studio, Istanbul",
    "costIntroP1": "One of the primary reasons why Turkey has become a leading international destination for zygomatic implants is the significantly lower cost compared to many other countries. Turkey’s dental tourism industry has flourished in recent years, offering high-quality hospital-grade care at a fraction of the price you might find elsewhere.",
    "costIntroP2": "The cost of zygomatic implants in Turkey, Istanbul can vary depending on several factors, such as the experience and qualifications of the dentist, the location of the clinic, and the complexity of the procedure. However, as a general guideline, the cost of a single zygomatic implant in Turkey can range from $2,770 to $5,000 in 2026.",
    "costIntroP3": "At Master Smile Studio, we offer zygomatic implant treatments at competitive prices without compromising on clinical quality. Our current cost for zygomatic implants is $2,770 USD / 2,350 EUR / 2,050 GBP, subject to change depending on additional procedures such as bone grafting, sinus lift, etc.",
    "packagesTitle": "Zygomatic & Full-Arch Packages (All-on-4 / All-on-6 / Zygoma)",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Straumann, Nobel Biocare, NucleOSS, DXL, Megagen, Neodent, and Hiossen.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "What’s Included:",
    "pricePerArchLabel": "Package Price (Per Arch / One Jaw):",
    "getQuoteBtn": "Get Personalized Quote Now",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        },
        "included": [
          "6x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Full Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & surgical medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Swiss / Straumann Group) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Neodent (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        },
        "included": [
          "6x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$5,700",
          "EUR": "€4,900",
          "GBP": "£4,200"
        },
        "included": [
          "4x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile packs",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Certificate"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,750"
        },
        "included": [
          "4x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$9,300",
          "EUR": "€8,000",
          "GBP": "£6,900"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Brazilian Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Neodent (Brazilian Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$6,600",
          "EUR": "€5,750",
          "GBP": "£4,900"
        },
        "included": [
          "4x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication package",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "HYBRID ZYGOMATIC PACKAGE",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$7,600",
          "EUR": "€6,900",
          "GBP": "£5,950"
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
        "name": "QUAD ZYGOMA TOTAL RECONSTRUCTION",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$9,800",
          "EUR": "€8,900",
          "GBP": "£7,700"
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
      }
    ],
    "compareTitle": "Objective Clinical Comparison: Quad Zygoma vs. Hybrid Zygoma vs. Complex Sinus Bone Grafting",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) [Clinical Gold Standard]"
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
    "journeyTitle": "Your Dental Journey Made Simple",
    "journeyLead": "From your very first inquiry to the final results, we ensure a smooth and transparent treatment journey in Istanbul. Learn about how long you’ll stay, how many visits you’ll need, your recovery time, and estimated pricing — all designed with international patients in mind. Let us take care of the details, so you can focus on your smile.",
    "journeyStayLabel": "Average Length of Stay in Istanbul",
    "journeyStayVal": "5 – 7 Days",
    "journeyVisitsLabel": "Number of Visits Required",
    "journeyVisitsVal": "2 Visits Total",
    "journeyRecoveryLabel": "Recovery Time",
    "journeyRecoveryVal": "24–48 Hours (Fixed Teeth)",
    "journeyPriceLabel": "Estimated Pricing",
    "journeyPriceVal": "From €2,350 / $2,770",
    "reachOutLabel": "Reach Out to Us - Quickly and Easily",
    "reachOutWhatsapp": "WhatsApp",
    "reachOutPhone": "Phone Call",
    "reachOutForm": "Quick Form",
    "reachOutEmail": "E-mail",
    "advantagesTitle": "Advantages of Zygomatic and Pterygoid (Cheekbone) Implants Over Traditional Dental Implants at Master Smile Studio, Istanbul, Turkey",
    "advantagesP1": "One of the primary advantages of zygomatic implants is their ability to provide a solution for patients with severe bone loss in the upper jaw. Traditional dental implants require a sufficient amount of healthy, dense bone to anchor into, but in cases of extensive bone loss, this may not be possible.",
    "advantagesP2": "Zygomatic implants, on the other hand, bypass the need for a robust jawbone by utilizing the stronger and more stable cheekbone (zygomatic bone) as the anchor point. This eliminates the requirement for bone grafting procedures, which can be time-consuming, invasive, and costly.",
    "keyBenefitsHeading": "Key Benefits of Zygomatic (Cheekbone) Implants:",
    "benefits": [
      {
        "num": "1",
        "title": "No Need for Bone Grafting",
        "desc": "Zygomatic implants offer a significant advantage for patients who have experienced extensive bone loss in the upper jaw. While traditional implants typically require bone grafting to rebuild lost bone, zygomatic implants make use of the zygomatic bone, which is often dense and stable enough to support implants. This reduces the need for expensive and invasive bone grafting procedures."
      },
      {
        "num": "2",
        "title": "Faster Treatment Timeline",
        "desc": "In Turkey, zygomatic implants provide a faster solution compared to traditional implants. Traditional implants often require several months of healing and osseointegration before the final restoration can be placed. With zygomatic implants, however, dental prosthetics can be attached much sooner — typically within a few weeks, significantly shortening the overall treatment time and allowing patients to regain their smile much quicker."
      },
      {
        "num": "3",
        "title": "Higher Success Rate in Severe Bone Loss Cases",
        "desc": "Studies have shown that zygomatic implants have a success rate of up to 97%, making them a reliable and predictable solution for patients with significant bone loss. This is a significant advantage over traditional implants, which may have a lower success rate when there's insufficient bone volume. Zygomatic implants are designed to provide a secure foundation in cases where conventional methods may fail."
      },
      {
        "num": "4",
        "title": "Restores Function and Aesthetics Quickly",
        "desc": "Another major benefit of zygomatic implants is that they allow for the restoration of both function and aesthetics in a shorter amount of time compared to traditional implants. Patients who may have had difficulty chewing, speaking, or smiling due to severe bone loss can quickly restore their natural functions and regain their confidence."
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
    "costIntroTitle1": "Türkiye’de Zigoma ve Pterigoid (Elmacık Kemiği) İmplant Fiyatları:",
    "costIntroTitle2": "Master Smile Studio İstanbul’da Erişilebilir ve Yüksek Kaliteli Çene Cerrahisi",
    "costIntroP1": "Türkiye’nin zigoma (elmacık kemiği) implantı tedavisinde dünyanın önde gelen destinasyonlarından biri olmasının başlıca nedeni, birçok ülkeye kıyasla önemli ölçüde daha uygun fiyatlar sunmasıdır. Türkiye’nin gelişmiş sağlık turizmi altyapısı, Avrupa ve Amerika’daki maliyetlerin çok altında hastane standartlarında cerrahi bakım sağlar.",
    "costIntroP2": "İstanbul’da zigoma implantı fiyatları cerrahın tecrübesine, kliniğin donanımına ve prosedürün karmaşıklığına göre değişiklik gösterebilir. Genel bir kılavuz olarak, 2026 yılında Türkiye’de tek bir zigoma implantının maliyeti 2.770 $ ile 5.000 $ (2.350 € - 4.500 €) arasında değişmektedir.",
    "costIntroP3": "Master Smile Studio’da zigoma implant tedavilerini kaliteden ödün vermeden son derece rekabetçi fiyatlarla sunuyoruz. Güncel zigoma implant birim maliyetimiz 2.770 USD / 2.350 EUR / 2.050 GBP olup kemik grefti, sinüs lifting gibi ek prosedürlere göre netleştirilmektedir.",
    "packagesTitle": "Zigoma ve Tam Çene İmplant Paketleri (All-on-4 / All-on-6 / Zigoma)",
    "packagesSubtitle": "Straumann, Nobel Biocare, NucleOSS, DXL, Megagen, Neodent ve Hiossen dahil çene başına her şey dahil paketler.",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket Kapsamı:",
    "pricePerArchLabel": "Çene Başına Fiyat (Her Şey Dahil):",
    "getQuoteBtn": "Kişiselleştirilmiş Teklif Alın",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "packages": [
      {
        "name": "ALL-ON-6 İMPLANT PAKETİ – NUCLEOSS",
        "brand": "NucleOSS (Türk Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        },
        "included": [
          "6x NucleOSS Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & steril cerrahi sarf",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Garanti Pasaportu"
        ]
      },
      {
        "name": "ALL-ON-6 İMPLANT PAKETİ – DXL ALMAN",
        "brand": "DXL (Alman Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        },
        "included": [
          "6x DXL (Alman Menşeli) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & post-op ilaç paketi",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Ömür Boyu Garanti"
        ]
      },
      {
        "name": "ALL-ON-6 İMPLANT PAKETİ – STRAUMANN",
        "brand": "Straumann (İsviçre Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "included": [
          "6x Straumann (İsviçre) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Monolitik Zirkonyum Master Diş",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & sedasyon desteği",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Ömür Boyu Uluslararası Straumann Pasaportu"
        ]
      },
      {
        "name": "ALL-ON-6 İMPLANT PAKETİ – MEGAGEN",
        "brand": "Megagen (Kore Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Megagen (Kore Menşeli) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & medikal bakım paketi",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Garanti Pasaportu"
        ]
      },
      {
        "name": "ALL-ON-6 İMPLANT PAKETİ – NEODENT",
        "brand": "Neodent (İsviçre / Straumann Grubu) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Neodent (İsviçre Grubu) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & steril cerrahi sarf",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Ömür Boyu Pasaport"
        ]
      },
      {
        "name": "ALL-ON-6 İMPLANT PAKETİ – HIOSSEN",
        "brand": "Hiossen (Amerikan Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        },
        "included": [
          "6x Hiossen (Amerikan Menşeli) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & ameliyat sonrası ilaçlar",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Medikal Pasaport"
        ]
      },
      {
        "name": "ALL-ON-4 İMPLANT PAKETİ – NUCLEOSS",
        "brand": "NucleOSS (Türk Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$5,700",
          "EUR": "€4,900",
          "GBP": "£4,200"
        },
        "included": [
          "4x NucleOSS (Türk Menşeli) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & cerrahi sarf paketi",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Garanti Sertifikası"
        ]
      },
      {
        "name": "ALL-ON-4 İMPLANT PAKETİ – DXL ALMAN",
        "brand": "DXL (Alman Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,750"
        },
        "included": [
          "4x DXL (Alman Menşeli) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & ilaç tedavi paketi",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Ömür Boyu Garanti"
        ]
      },
      {
        "name": "ALL-ON-4 İMPLANT PAKETİ – STRAUMANN",
        "brand": "Straumann (İsviçre Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$9,300",
          "EUR": "€8,000",
          "GBP": "£6,900"
        },
        "included": [
          "4x Straumann (İsviçre) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Monolitik Zirkonyum Master Diş",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & sedasyon desteği",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Ömür Boyu Küresel Straumann Garantisi"
        ]
      },
      {
        "name": "ALL-ON-4 İMPLANT PAKETİ – MEGAGEN",
        "brand": "Megagen (Kore Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Megagen (Kore Menşeli) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & medikal bakım kiti",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Garanti Pasaportu"
        ]
      },
      {
        "name": "ALL-ON-4 İMPLANT PAKETİ – NEODENT",
        "brand": "Neodent (Brezilya / Straumann) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Neodent (Brezilya Grubu) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & steril cerrahi sarf",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Ömür Boyu Pasaport"
        ]
      },
      {
        "name": "ALL-ON-4 İMPLANT PAKETİ – HIOSSEN",
        "brand": "Hiossen (Amerikan Markası) Dental İmplant",
        "duration": "3+7 İş Günü (2 Ziyaret)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$6,600",
          "EUR": "€5,750",
          "GBP": "£4,900"
        },
        "included": [
          "4x Hiossen (Amerikan Menşeli) Dental İmplant",
          "24 saat içinde 12x Sabit Geçici Diş",
          "12x Kalıcı Master Diş (CAD/CAM)",
          "3D Tomografi (CBCT) cerrahi planlama",
          "Lokal anestezi & ameliyat sonrası ilaçlar",
          "Seyahat boyunca tüm takip kontrolleri",
          "VIP Mercedes Havalimanı-Otel-Klinik Transferleri",
          "5 Yıldızlı Otel Konaklaması (Oda & Kahvaltı)",
          "Laboratuvar İşçiliği & Medikal Pasaport"
        ]
      },
      {
        "name": "HİBRİT ZİGOMA PAKETİ",
        "brand": "Nobel Biocare / Straumann (2 Zigoma + 2-4 Standart İmplant)",
        "duration": "5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$7,600",
          "EUR": "€6,900",
          "GBP": "£5,950"
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
        "name": "DÖRTLÜ (QUAD) ZİGOMA REKONSTRÜKSİYON",
        "brand": "4 Zigoma İmplantı (%100 Üst Çene Kemik Erimesi)",
        "duration": "5-7 Gün (Toplam 2 Ziyaret)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$9,800",
          "EUR": "€8,900",
          "GBP": "£7,700"
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
      }
    ],
    "compareTitle": "Objektif Klinik Karşılaştırma: Dörtlü Zigoma vs. Hibrit Zigoma vs. İleri Kemik Grefti",
    "compareSubtitle": "Tedavi süreleri, cerrahi aşamalar, greft erime riskleri ve kalıcı çiğneme kuvvetinin bilimsel analizi.",
    "compareTableHeaders": {
      "criteria": "Klinik Parametre",
      "grafting": "İleri Sinüs Lifting & Kemik Grefti",
      "hybrid": "Hibrit Zigoma (2 Zigoma + 2-4 Standart)",
      "quad": "Dörtlü (Quad) Zigoma (4 Zigoma İmplant) [Klinik Altın Standart]"
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
    "journeyTitle": "Dental Tedavi Süreciniz Artık Çok Daha Kolay",
    "journeyLead": "İlk başvurunuzdan nihai gülüşünüze kadar İstanbul’da şeffaf ve konforlu bir tedavi süreci sunuyoruz. Kalış süreniz, gerekli ziyaret sayısı, iyileşme zamanınız ve tahmini maliyetler gibi tüm detayları uluslararası hastalarımızın konforu için planladık. Siz yalnızca yeni gülüşünüze odaklanın.",
    "journeyStayLabel": "İstanbul’da Ortalama Kalış Süresi",
    "journeyStayVal": "5 – 7 Gün",
    "journeyVisitsLabel": "Gerekli Ziyaret Sayısı",
    "journeyVisitsVal": "Toplam 2 Ziyaret",
    "journeyRecoveryLabel": "İyileşme & Sabit Diş Süresi",
    "journeyRecoveryVal": "24–48 Saatte Sabit Diş",
    "journeyPriceLabel": "Tahmini Paket Fiyatı",
    "journeyPriceVal": "2.350 € / 2.770 $'dan Başlayan",
    "reachOutLabel": "Bize Kolayca ve Hızla Ulaşın",
    "reachOutWhatsapp": "WhatsApp",
    "reachOutPhone": "Telefon",
    "reachOutForm": "Hızlı Form",
    "reachOutEmail": "E-posta",
    "advantagesTitle": "Master Smile Studio İstanbul’da Zigoma ve Pterigoid (Elmacık Kemiği) İmplantlarının Geleneksel İmplantlara Göre Avantajları",
    "advantagesP1": "Zigoma implantlarının en büyük avantajı, üst çenesinde ileri derecede kemik kaybı yaşayan hastalara kesin ve kalıcı bir sabit diş çözümü sunabilmesidir. Geleneksel diş implantları tutunabilmek için yeterli hacim ve yoğunlukta sağlıklı çene kemiğine ihtiyaç duyar; ancak aşırı kemik erimesi vakalarında bu mümkün olmayabilir.",
    "advantagesP2": "Buna karşılık zigoma implantları, erimiş üst çene kemiğini tamamen baypas ederek çok daha güçlü ve stabil olan elmacık kemiğini (zigomatik kemik) dayanak noktası olarak kullanır. Bu sayede aylar süren, maliyetli ve yorucu kemik tozu (greft) ameliyatlarına olan ihtiyaç tamamen ortadan kalkar.",
    "keyBenefitsHeading": "Zigoma (Elmacık Kemiği) İmplantlarının Temel Avantajları:",
    "benefits": [
      {
        "num": "1",
        "title": "Kemik Tozu ve Sinüs Lifting İhtiyacını Ortadan Kaldırır",
        "desc": "Zigoma implantları, üst çenesinde yoğun kemik kaybı olan hastalar için devrim niteliğinde bir avantaj sağlar. Geleneksel implantlar kaybolan kemiği yeniden oluşturmak için kemik grefti gerektirirken, zigoma implantları elmacık kemiğinin doğal yoğunluğundan güç alır. Bu da hastayı ek ameliyatlardan ve yüksek greft maliyetlerinden kurtarır."
      },
      {
        "num": "2",
        "title": "Çok Daha Hızlı Tedavi ve Sabit Diş Süreci",
        "desc": "Türkiye’de zigoma implantları geleneksel yöntemlere kıyasla çok daha hızlı sonuç verir. Klasik implantlarda protez takılmadan önce kemik kaynaması için aylarca beklenmesi gerekirken; zigoma implantlarında güçlü tutuculuk sayesinde 24-48 saat içinde sabit dişler vidalanır ve hasta hızla yeni gülüşüne kavuşur."
      },
      {
        "num": "3",
        "title": "İleri Kemik Kaybı Vakalarında En Yüksek Başarı Oranı",
        "desc": "Klinik çalışmalar zigoma implantlarının %97'nin üzerinde bir başarı oranına sahip olduğunu kanıtlamıştır. Yetersiz kemik hacmi nedeniyle klasik implantların başarısız olabileceği en zorlu vakalarda dahi elmacık kemiğinin yoğun kortikal yapısı sayesinde ömür boyu güvenli bir temel oluşturur."
      },
      {
        "num": "4",
        "title": "Çiğneme Fonksiyonunu ve Estetiği Hızla Geri Kazandırır",
        "desc": "Zigoma implantlarının en önemli faydalarından biri de çiğneme fonksiyonunu ve yüz estetiğini çok kısa sürede restore etmesidir. Kemik kaybı nedeniyle çiğnemede, konuşmada veya gülümsemede güçlük çeken hastalarımız doğal çiğneme kuvvetine ve özgüvenlerine hızla yeniden kavuşur."
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
    "costIntroTitle1": "Kosten für Zygoma- und Pterygoid-Implantate in der Türkei:",
    "costIntroTitle2": "Erschwingliche, erstklassige Behandlung bei Master Smile Studio, Istanbul",
    "costIntroP1": "Einer der Hauptgründe für den Erfolg der Türkei bei Zygoma-Implantaten sind die deutlich geringeren Kosten bei höchster chirurgischer Qualität.",
    "costIntroP2": "Die Kosten für ein einzelnes Zygoma-Implantat in der Türkei liegen 2026 zwischen 2.350 € und 4.500 $.",
    "costIntroP3": "Bei Master Smile Studio beträgt der Preis pro Zygoma-Implantat 2.350 EUR / 2.770 USD / 2.050 GBP inklusive 3D-Planung und OP-Saal.",
    "packagesTitle": "Zygoma & All-on-Pakete & Währungsrechner",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Straumann, Nobel Biocare, NucleOSS, DXL, Megagen, Neodent, and Hiossen.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "What’s Included:",
    "pricePerArchLabel": "Package Price (Per Arch / One Jaw):",
    "getQuoteBtn": "Get Personalized Quote Now",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        },
        "included": [
          "6x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Full Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & surgical medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Swiss / Straumann Group) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Neodent (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        },
        "included": [
          "6x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$5,700",
          "EUR": "€4,900",
          "GBP": "£4,200"
        },
        "included": [
          "4x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile packs",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Certificate"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,750"
        },
        "included": [
          "4x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$9,300",
          "EUR": "€8,000",
          "GBP": "£6,900"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Brazilian Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Neodent (Brazilian Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$6,600",
          "EUR": "€5,750",
          "GBP": "£4,900"
        },
        "included": [
          "4x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication package",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "HYBRID ZYGOMATIC PACKAGE",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$7,600",
          "EUR": "€6,900",
          "GBP": "£5,950"
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
        "name": "QUAD ZYGOMA TOTAL RECONSTRUCTION",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$9,800",
          "EUR": "€8,900",
          "GBP": "£7,700"
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
      }
    ],
    "compareTitle": "Objektiver Klinischer Vergleich: Quad Zygoma vs. Hybrid Zygoma vs. Knochenaufbau",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) [Clinical Gold Standard]"
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
    "journeyTitle": "Ihre Zahnbehandlung Einfach Erklärt",
    "journeyLead": "Von Ihrer ersten Anfrage bis zum finalen Ergebnis garantieren wir einen reibungslosen und transparenten Ablauf in Istanbul.",
    "journeyStayLabel": "Durchschnittliche Aufenthaltsdauer",
    "journeyStayVal": "5 – 7 Days",
    "journeyVisitsLabel": "Erforderliche Besuche",
    "journeyVisitsVal": "2 Visits Total",
    "journeyRecoveryLabel": "Genesungszeit",
    "journeyRecoveryVal": "24–48 Hours (Fixed Teeth)",
    "journeyPriceLabel": "Geschätzter Preis",
    "journeyPriceVal": "From €2,350 / $2,770",
    "reachOutLabel": "Kontaktieren Sie uns einfach & schnell",
    "reachOutWhatsapp": "WhatsApp",
    "reachOutPhone": "Phone Call",
    "reachOutForm": "Quick Form",
    "reachOutEmail": "E-mail",
    "advantagesTitle": "Vorteile von Zygoma- und Pterygoid-Implantaten gegenüber herkömmlichen Implantaten bei Master Smile Studio, Istanbul",
    "advantagesP1": "One of the primary advantages of zygomatic implants is their ability to provide a solution for patients with severe bone loss in the upper jaw. Traditional dental implants require a sufficient amount of healthy, dense bone to anchor into, but in cases of extensive bone loss, this may not be possible.",
    "advantagesP2": "Zygomatic implants, on the other hand, bypass the need for a robust jawbone by utilizing the stronger and more stable cheekbone (zygomatic bone) as the anchor point. This eliminates the requirement for bone grafting procedures, which can be time-consuming, invasive, and costly.",
    "keyBenefitsHeading": "Key Benefits of Zygomatic (Cheekbone) Implants:",
    "benefits": [
      {
        "num": "1",
        "title": "No Need for Bone Grafting",
        "desc": "Zygomatic implants offer a significant advantage for patients who have experienced extensive bone loss in the upper jaw. While traditional implants typically require bone grafting to rebuild lost bone, zygomatic implants make use of the zygomatic bone, which is often dense and stable enough to support implants. This reduces the need for expensive and invasive bone grafting procedures."
      },
      {
        "num": "2",
        "title": "Faster Treatment Timeline",
        "desc": "In Turkey, zygomatic implants provide a faster solution compared to traditional implants. Traditional implants often require several months of healing and osseointegration before the final restoration can be placed. With zygomatic implants, however, dental prosthetics can be attached much sooner — typically within a few weeks, significantly shortening the overall treatment time and allowing patients to regain their smile much quicker."
      },
      {
        "num": "3",
        "title": "Higher Success Rate in Severe Bone Loss Cases",
        "desc": "Studies have shown that zygomatic implants have a success rate of up to 97%, making them a reliable and predictable solution for patients with significant bone loss. This is a significant advantage over traditional implants, which may have a lower success rate when there's insufficient bone volume. Zygomatic implants are designed to provide a secure foundation in cases where conventional methods may fail."
      },
      {
        "num": "4",
        "title": "Restores Function and Aesthetics Quickly",
        "desc": "Another major benefit of zygomatic implants is that they allow for the restoration of both function and aesthetics in a shorter amount of time compared to traditional implants. Patients who may have had difficulty chewing, speaking, or smiling due to severe bone loss can quickly restore their natural functions and regain their confidence."
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
    "costIntroTitle1": "Koszt implantów jarzmowych Zygoma w Turcji:",
    "costIntroTitle2": "Dostępne leczenie najwyższej jakości w Master Smile Studio, Stambuł",
    "costIntroP1": "Głównym powodem popularności Turcji w zabiegach Zygoma są koszty niższe nawet o 70% w porównaniu do Europy Zachodniej.",
    "costIntroP2": "Koszt pojedynczego implantu jarzmowego w Turcji w 2026 r. wynosi od 2 350 € do 4 500 $.",
    "costIntroP3": "W Master Smile Studio koszt implantu jarzmowego wynosi 2 350 EUR / 2 770 USD / 2 050 GBP z pełnym pakietem diagnostycznym.",
    "packagesTitle": "Pakiety Implantów Zygoma i Przelicznik Walut",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Straumann, Nobel Biocare, NucleOSS, DXL, Megagen, Neodent, and Hiossen.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "What’s Included:",
    "pricePerArchLabel": "Package Price (Per Arch / One Jaw):",
    "getQuoteBtn": "Get Personalized Quote Now",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        },
        "included": [
          "6x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Full Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & surgical medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Swiss / Straumann Group) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Neodent (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        },
        "included": [
          "6x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$5,700",
          "EUR": "€4,900",
          "GBP": "£4,200"
        },
        "included": [
          "4x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile packs",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Certificate"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,750"
        },
        "included": [
          "4x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$9,300",
          "EUR": "€8,000",
          "GBP": "£6,900"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Brazilian Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Neodent (Brazilian Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$6,600",
          "EUR": "€5,750",
          "GBP": "£4,900"
        },
        "included": [
          "4x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication package",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "HYBRID ZYGOMATIC PACKAGE",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$7,600",
          "EUR": "€6,900",
          "GBP": "£5,950"
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
        "name": "QUAD ZYGOMA TOTAL RECONSTRUCTION",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$9,800",
          "EUR": "€8,900",
          "GBP": "£7,700"
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
      }
    ],
    "compareTitle": "Obiektywne Porównanie: Quad Zygoma vs. Hybryda vs. Przeszczep Kości",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) [Clinical Gold Standard]"
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
    "journeyTitle": "Twoja Podróż Stomatologiczna w Prosty Sposób",
    "journeyLead": "Od pierwszego kontaktu po ostateczny rezultat zapewniamy przejrzysty i komfortowy proces leczenia w Stambule.",
    "journeyStayLabel": "Średni czas pobytu w Stambule",
    "journeyStayVal": "5 – 7 Days",
    "journeyVisitsLabel": "Liczba wymaganych wizyt",
    "journeyVisitsVal": "2 Visits Total",
    "journeyRecoveryLabel": "Czas rekonwalescencji",
    "journeyRecoveryVal": "24–48 Hours (Fixed Teeth)",
    "journeyPriceLabel": "Szacowany koszt",
    "journeyPriceVal": "From €2,350 / $2,770",
    "reachOutLabel": "Skontaktuj się z nami szybko i wygodnie",
    "reachOutWhatsapp": "WhatsApp",
    "reachOutPhone": "Phone Call",
    "reachOutForm": "Quick Form",
    "reachOutEmail": "E-mail",
    "advantagesTitle": "Zalety Implantów Jarzmowych (Zygoma) w Porównaniu do Tradycyjnych Implantów w Master Smile Studio",
    "advantagesP1": "One of the primary advantages of zygomatic implants is their ability to provide a solution for patients with severe bone loss in the upper jaw. Traditional dental implants require a sufficient amount of healthy, dense bone to anchor into, but in cases of extensive bone loss, this may not be possible.",
    "advantagesP2": "Zygomatic implants, on the other hand, bypass the need for a robust jawbone by utilizing the stronger and more stable cheekbone (zygomatic bone) as the anchor point. This eliminates the requirement for bone grafting procedures, which can be time-consuming, invasive, and costly.",
    "keyBenefitsHeading": "Key Benefits of Zygomatic (Cheekbone) Implants:",
    "benefits": [
      {
        "num": "1",
        "title": "No Need for Bone Grafting",
        "desc": "Zygomatic implants offer a significant advantage for patients who have experienced extensive bone loss in the upper jaw. While traditional implants typically require bone grafting to rebuild lost bone, zygomatic implants make use of the zygomatic bone, which is often dense and stable enough to support implants. This reduces the need for expensive and invasive bone grafting procedures."
      },
      {
        "num": "2",
        "title": "Faster Treatment Timeline",
        "desc": "In Turkey, zygomatic implants provide a faster solution compared to traditional implants. Traditional implants often require several months of healing and osseointegration before the final restoration can be placed. With zygomatic implants, however, dental prosthetics can be attached much sooner — typically within a few weeks, significantly shortening the overall treatment time and allowing patients to regain their smile much quicker."
      },
      {
        "num": "3",
        "title": "Higher Success Rate in Severe Bone Loss Cases",
        "desc": "Studies have shown that zygomatic implants have a success rate of up to 97%, making them a reliable and predictable solution for patients with significant bone loss. This is a significant advantage over traditional implants, which may have a lower success rate when there's insufficient bone volume. Zygomatic implants are designed to provide a secure foundation in cases where conventional methods may fail."
      },
      {
        "num": "4",
        "title": "Restores Function and Aesthetics Quickly",
        "desc": "Another major benefit of zygomatic implants is that they allow for the restoration of both function and aesthetics in a shorter amount of time compared to traditional implants. Patients who may have had difficulty chewing, speaking, or smiling due to severe bone loss can quickly restore their natural functions and regain their confidence."
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
    "costIntroTitle1": "Custo dos Implantes Zigomáticos na Turquia:",
    "costIntroTitle2": "Tratamento de Alta Qualidade e Acessível no Master Smile Studio, Istambul",
    "costIntroP1": "Um dos principais motivos pelos quais a Turquia é referência em implantes zigomáticos é o custo significativamente inferior com padrões hospitalares.",
    "costIntroP2": "O custo de um implante zigomático na Turquia em 2026 varia entre 2.350 € e 4.500 $.",
    "costIntroP3": "No Master Smile Studio o custo unitário é de 2.350 EUR / 2.770 USD / 2.050 GBP com planejamento 3D e bloco cirúrgico incluídos.",
    "packagesTitle": "Pacotes Zigomáticos e Conversor de Moedas",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Straumann, Nobel Biocare, NucleOSS, DXL, Megagen, Neodent, and Hiossen.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "What’s Included:",
    "pricePerArchLabel": "Package Price (Per Arch / One Jaw):",
    "getQuoteBtn": "Get Personalized Quote Now",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        },
        "included": [
          "6x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Full Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & surgical medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Swiss / Straumann Group) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Neodent (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        },
        "included": [
          "6x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$5,700",
          "EUR": "€4,900",
          "GBP": "£4,200"
        },
        "included": [
          "4x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile packs",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Certificate"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,750"
        },
        "included": [
          "4x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$9,300",
          "EUR": "€8,000",
          "GBP": "£6,900"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Brazilian Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Neodent (Brazilian Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$6,600",
          "EUR": "€5,750",
          "GBP": "£4,900"
        },
        "included": [
          "4x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication package",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "HYBRID ZYGOMATIC PACKAGE",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$7,600",
          "EUR": "€6,900",
          "GBP": "£5,950"
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
        "name": "QUAD ZYGOMA TOTAL RECONSTRUCTION",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$9,800",
          "EUR": "€8,900",
          "GBP": "£7,700"
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
      }
    ],
    "compareTitle": "Comparativo Clínico: Quad Zygoma vs. Híbrido vs. Enxerto Ósseo",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) [Clinical Gold Standard]"
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
    "journeyTitle": "Sua Jornada Odontológica Simplificada",
    "journeyLead": "Desde sua primeira consulta até o resultado final, garantimos uma experiência transparente e confortável em Istambul.",
    "journeyStayLabel": "Tempo médio de estadia em Istambul",
    "journeyStayVal": "5 – 7 Days",
    "journeyVisitsLabel": "Número de visitas necessárias",
    "journeyVisitsVal": "2 Visits Total",
    "journeyRecoveryLabel": "Tempo de recuperação",
    "journeyRecoveryVal": "24–48 Hours (Fixed Teeth)",
    "journeyPriceLabel": "Preço estimado",
    "journeyPriceVal": "From €2,350 / $2,770",
    "reachOutLabel": "Entre em contato com facilidade e rapidez",
    "reachOutWhatsapp": "WhatsApp",
    "reachOutPhone": "Phone Call",
    "reachOutForm": "Quick Form",
    "reachOutEmail": "E-mail",
    "advantagesTitle": "Vantagens dos Implantes Zigomáticos e Pterigoideos sobre os Tradicionais no Master Smile Studio",
    "advantagesP1": "One of the primary advantages of zygomatic implants is their ability to provide a solution for patients with severe bone loss in the upper jaw. Traditional dental implants require a sufficient amount of healthy, dense bone to anchor into, but in cases of extensive bone loss, this may not be possible.",
    "advantagesP2": "Zygomatic implants, on the other hand, bypass the need for a robust jawbone by utilizing the stronger and more stable cheekbone (zygomatic bone) as the anchor point. This eliminates the requirement for bone grafting procedures, which can be time-consuming, invasive, and costly.",
    "keyBenefitsHeading": "Key Benefits of Zygomatic (Cheekbone) Implants:",
    "benefits": [
      {
        "num": "1",
        "title": "No Need for Bone Grafting",
        "desc": "Zygomatic implants offer a significant advantage for patients who have experienced extensive bone loss in the upper jaw. While traditional implants typically require bone grafting to rebuild lost bone, zygomatic implants make use of the zygomatic bone, which is often dense and stable enough to support implants. This reduces the need for expensive and invasive bone grafting procedures."
      },
      {
        "num": "2",
        "title": "Faster Treatment Timeline",
        "desc": "In Turkey, zygomatic implants provide a faster solution compared to traditional implants. Traditional implants often require several months of healing and osseointegration before the final restoration can be placed. With zygomatic implants, however, dental prosthetics can be attached much sooner — typically within a few weeks, significantly shortening the overall treatment time and allowing patients to regain their smile much quicker."
      },
      {
        "num": "3",
        "title": "Higher Success Rate in Severe Bone Loss Cases",
        "desc": "Studies have shown that zygomatic implants have a success rate of up to 97%, making them a reliable and predictable solution for patients with significant bone loss. This is a significant advantage over traditional implants, which may have a lower success rate when there's insufficient bone volume. Zygomatic implants are designed to provide a secure foundation in cases where conventional methods may fail."
      },
      {
        "num": "4",
        "title": "Restores Function and Aesthetics Quickly",
        "desc": "Another major benefit of zygomatic implants is that they allow for the restoration of both function and aesthetics in a shorter amount of time compared to traditional implants. Patients who may have had difficulty chewing, speaking, or smiling due to severe bone loss can quickly restore their natural functions and regain their confidence."
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
    "costIntroTitle1": "Coste de los Implantes Cigomáticos en Turquía:",
    "costIntroTitle2": "Tratamiento de Máxima Calidad en Master Smile Studio, Estambul",
    "costIntroP1": "Una de las principales razones del éxito de Turquía en implantes cigomáticos es el ahorro de hasta un 70% respecto a otros países.",
    "costIntroP2": "El coste de un implante cigomático en Turquía en 2026 oscila entre 2.350 € y 4.500 $.",
    "costIntroP3": "En Master Smile Studio el precio por implante cigomático es de 2.350 EUR / 2.770 USD / 2.050 GBP con quirófano y diagnóstico 3D incluidos.",
    "packagesTitle": "Paquetes Cigomáticos y Conversor de Divisas",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Straumann, Nobel Biocare, NucleOSS, DXL, Megagen, Neodent, and Hiossen.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "What’s Included:",
    "pricePerArchLabel": "Package Price (Per Arch / One Jaw):",
    "getQuoteBtn": "Get Personalized Quote Now",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        },
        "included": [
          "6x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Full Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & surgical medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Swiss / Straumann Group) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Neodent (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        },
        "included": [
          "6x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$5,700",
          "EUR": "€4,900",
          "GBP": "£4,200"
        },
        "included": [
          "4x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile packs",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Certificate"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,750"
        },
        "included": [
          "4x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$9,300",
          "EUR": "€8,000",
          "GBP": "£6,900"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Brazilian Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Neodent (Brazilian Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$6,600",
          "EUR": "€5,750",
          "GBP": "£4,900"
        },
        "included": [
          "4x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication package",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "HYBRID ZYGOMATIC PACKAGE",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$7,600",
          "EUR": "€6,900",
          "GBP": "£5,950"
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
        "name": "QUAD ZYGOMA TOTAL RECONSTRUCTION",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$9,800",
          "EUR": "€8,900",
          "GBP": "£7,700"
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
      }
    ],
    "compareTitle": "Comparación Clínica: Quad Zygoma vs. Híbrido vs. Injerto Óseo",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) [Clinical Gold Standard]"
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
    "journeyTitle": "Su Viaje Dental Simplificado",
    "journeyLead": "Desde su primera consulta hasta el resultado final, aseguramos un tratamiento transparente y fluido en Estambul.",
    "journeyStayLabel": "Estancia media en Estambul",
    "journeyStayVal": "5 – 7 Days",
    "journeyVisitsLabel": "Número de visitas requeridas",
    "journeyVisitsVal": "2 Visits Total",
    "journeyRecoveryLabel": "Tiempo de recuperación",
    "journeyRecoveryVal": "24–48 Hours (Fixed Teeth)",
    "journeyPriceLabel": "Precio estimado",
    "journeyPriceVal": "From €2,350 / $2,770",
    "reachOutLabel": "Contáctenos de forma rápida y sencilla",
    "reachOutWhatsapp": "WhatsApp",
    "reachOutPhone": "Phone Call",
    "reachOutForm": "Quick Form",
    "reachOutEmail": "E-mail",
    "advantagesTitle": "Ventajas de los Implantes Cigomáticos y Pterigoideos frente a los Tradicionales en Master Smile Studio",
    "advantagesP1": "One of the primary advantages of zygomatic implants is their ability to provide a solution for patients with severe bone loss in the upper jaw. Traditional dental implants require a sufficient amount of healthy, dense bone to anchor into, but in cases of extensive bone loss, this may not be possible.",
    "advantagesP2": "Zygomatic implants, on the other hand, bypass the need for a robust jawbone by utilizing the stronger and more stable cheekbone (zygomatic bone) as the anchor point. This eliminates the requirement for bone grafting procedures, which can be time-consuming, invasive, and costly.",
    "keyBenefitsHeading": "Key Benefits of Zygomatic (Cheekbone) Implants:",
    "benefits": [
      {
        "num": "1",
        "title": "No Need for Bone Grafting",
        "desc": "Zygomatic implants offer a significant advantage for patients who have experienced extensive bone loss in the upper jaw. While traditional implants typically require bone grafting to rebuild lost bone, zygomatic implants make use of the zygomatic bone, which is often dense and stable enough to support implants. This reduces the need for expensive and invasive bone grafting procedures."
      },
      {
        "num": "2",
        "title": "Faster Treatment Timeline",
        "desc": "In Turkey, zygomatic implants provide a faster solution compared to traditional implants. Traditional implants often require several months of healing and osseointegration before the final restoration can be placed. With zygomatic implants, however, dental prosthetics can be attached much sooner — typically within a few weeks, significantly shortening the overall treatment time and allowing patients to regain their smile much quicker."
      },
      {
        "num": "3",
        "title": "Higher Success Rate in Severe Bone Loss Cases",
        "desc": "Studies have shown that zygomatic implants have a success rate of up to 97%, making them a reliable and predictable solution for patients with significant bone loss. This is a significant advantage over traditional implants, which may have a lower success rate when there's insufficient bone volume. Zygomatic implants are designed to provide a secure foundation in cases where conventional methods may fail."
      },
      {
        "num": "4",
        "title": "Restores Function and Aesthetics Quickly",
        "desc": "Another major benefit of zygomatic implants is that they allow for the restoration of both function and aesthetics in a shorter amount of time compared to traditional implants. Patients who may have had difficulty chewing, speaking, or smiling due to severe bone loss can quickly restore their natural functions and regain their confidence."
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
    "howWorkP": "Длина имплантов Zygoma (от 30 do 55 мм) позволяет закрепить их в стабильной скуловой кости в обход гайморовых пазух, обеспечивая несъемные зубы за 24 часа.",
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
    "costIntroTitle1": "Стоимость скуловых имплантов Zygoma в Турции:",
    "costIntroTitle2": "Доступное лечение премиум-класса в Master Smile Studio, Стамбул",
    "costIntroP1": "Главная причина популярности Турции в скуловой имплантации — доступные цены при высочайших госпитальных стандартах хирургии.",
    "costIntroP2": "Стоимость одного скулового импланта в Турции в 2026 году составляет от 2 350 € до 4 500 $.",
    "costIntroP3": "В Master Smile Studio цена одного скулового импланта составляет 2 350 EUR / 2 770 USD / 2 050 GBP включая 3D-планирование и операционный блок.",
    "packagesTitle": "Пакеты Скуловой Имплантации и Калькулятор Валют",
    "packagesSubtitle": "All-inclusive packages per jaw featuring certified Straumann, Nobel Biocare, NucleOSS, DXL, Megagen, Neodent, and Hiossen.",
    "durationLabel": "Treatment Duration:",
    "includedLabel": "What’s Included:",
    "pricePerArchLabel": "Package Price (Per Arch / One Jaw):",
    "getQuoteBtn": "Get Personalized Quote Now",
    "mostPopularBadge": "Most Popular Choice",
    "packages": [
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,700"
        },
        "included": [
          "6x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Full Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$7,500",
          "EUR": "€6,500",
          "GBP": "£5,600"
        },
        "included": [
          "6x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & surgical medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "popular": true,
        "price": {
          "USD": "$11,600",
          "EUR": "€10,000",
          "GBP": "£8,600"
        },
        "included": [
          "6x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Swiss / Straumann Group) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$8,000",
          "EUR": "€7,000",
          "GBP": "£6,000"
        },
        "included": [
          "6x Neodent (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-6 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$7,700",
          "EUR": "€6,750",
          "GBP": "£5,780"
        },
        "included": [
          "6x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NUCLEOSS",
        "brand": "NucleOSS (Turkish Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/nucleoss.webp",
        "price": {
          "USD": "$5,700",
          "EUR": "€4,900",
          "GBP": "£4,200"
        },
        "included": [
          "4x NucleOSS (Turkish Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile packs",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Certificate"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – DXL GERMAN",
        "brand": "DXL (German Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$6,400",
          "EUR": "€5,500",
          "GBP": "£4,750"
        },
        "included": [
          "4x DXL (German Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medications",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Warranty"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – STRAUMANN",
        "brand": "Straumann (Swiss Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$9,300",
          "EUR": "€8,000",
          "GBP": "£6,900"
        },
        "included": [
          "4x Straumann (Swiss Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (Monolithic Zirconia)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sedation support",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Lifetime Global Straumann Guarantee"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – MEGAGEN",
        "brand": "Megagen (Korean Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/megagen.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Megagen (Korean Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & post-op pack",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Warranty Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – NEODENT",
        "brand": "Neodent (Brazilian Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/neodent.webp",
        "price": {
          "USD": "$6,900",
          "EUR": "€6,000",
          "GBP": "£5,100"
        },
        "included": [
          "4x Neodent (Brazilian Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & sterile consumables",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Lifetime Passport"
        ]
      },
      {
        "name": "ALL-ON-4 IMPLANT PACKAGE – HIOSSEN",
        "brand": "Hiossen (American Brand) Dental Implants",
        "duration": "3+7 Working Days (2 Visits)",
        "img": "/packages/hiossen.webp",
        "price": {
          "USD": "$6,600",
          "EUR": "€5,750",
          "GBP": "£4,900"
        },
        "included": [
          "4x Hiossen (American Brand) Dental Implants",
          "12x Fixed Temporary Teeth in 24 hours",
          "12x Final Permanent Teeth (CAD/CAM)",
          "Surgical planning (with 3D CBCT)",
          "Local anesthesia & medication package",
          "Follow-up checks during stay",
          "Airport-hotel-clinic VIP transfers",
          "Hotel Stay with Bed & Breakfast included",
          "Laboratory Work & Medical Passport"
        ]
      },
      {
        "name": "HYBRID ZYGOMATIC PACKAGE",
        "brand": "Nobel Biocare / Straumann (2 Zygoma + 2-4 Anterior Implants)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/straumann.webp",
        "price": {
          "USD": "$7,600",
          "EUR": "€6,900",
          "GBP": "£5,950"
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
        "name": "QUAD ZYGOMA TOTAL RECONSTRUCTION",
        "brand": "4 Zygomatic Implants (For 100% Maxillary Bone Loss)",
        "duration": "5-7 Days in Istanbul (2 Visits Total)",
        "img": "/packages/dxl.webp",
        "price": {
          "USD": "$9,800",
          "EUR": "€8,900",
          "GBP": "£7,700"
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
      }
    ],
    "compareTitle": "Объективное Сравнение: Quad Zygoma vs. Гибрид vs. Костная Пластика",
    "compareSubtitle": "A scientific analysis of clinical timelines, surgical stages, graft resorption risks, and permanent chewing strength.",
    "compareTableHeaders": {
      "criteria": "Clinical Parameter",
      "grafting": "Complex Sinus Lift & Bone Grafting",
      "hybrid": "Hybrid Zygoma (2 Zygoma + 2-4 Std)",
      "quad": "Quad Zygoma (4 Zygomatic Implants) [Clinical Gold Standard]"
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
    "journeyTitle": "Ваш Путь к Идеальной Улыбке — Легко и Понятно",
    "journeyLead": "От первого обращения до готовой улыбки мы гарантируем комфортное и прозрачное лечение в Стамбуле.",
    "journeyStayLabel": "Средняя длительность визита в Стамбул",
    "journeyStayVal": "5 – 7 Days",
    "journeyVisitsLabel": "Количество визитов",
    "journeyVisitsVal": "2 Visits Total",
    "journeyRecoveryLabel": "Время восстановления",
    "journeyRecoveryVal": "24–48 Hours (Fixed Teeth)",
    "journeyPriceLabel": "Ориентировочная стоимость",
    "journeyPriceVal": "From €2,350 / $2,770",
    "reachOutLabel": "Свяжитесь с нами быстро и удобно",
    "reachOutWhatsapp": "WhatsApp",
    "reachOutPhone": "Phone Call",
    "reachOutForm": "Quick Form",
    "reachOutEmail": "E-mail",
    "advantagesTitle": "Преимущества скуловых и птеригоидных имплантов перед классическими в Master Smile Studio",
    "advantagesP1": "One of the primary advantages of zygomatic implants is their ability to provide a solution for patients with severe bone loss in the upper jaw. Traditional dental implants require a sufficient amount of healthy, dense bone to anchor into, but in cases of extensive bone loss, this may not be possible.",
    "advantagesP2": "Zygomatic implants, on the other hand, bypass the need for a robust jawbone by utilizing the stronger and more stable cheekbone (zygomatic bone) as the anchor point. This eliminates the requirement for bone grafting procedures, which can be time-consuming, invasive, and costly.",
    "keyBenefitsHeading": "Key Benefits of Zygomatic (Cheekbone) Implants:",
    "benefits": [
      {
        "num": "1",
        "title": "No Need for Bone Grafting",
        "desc": "Zygomatic implants offer a significant advantage for patients who have experienced extensive bone loss in the upper jaw. While traditional implants typically require bone grafting to rebuild lost bone, zygomatic implants make use of the zygomatic bone, which is often dense and stable enough to support implants. This reduces the need for expensive and invasive bone grafting procedures."
      },
      {
        "num": "2",
        "title": "Faster Treatment Timeline",
        "desc": "In Turkey, zygomatic implants provide a faster solution compared to traditional implants. Traditional implants often require several months of healing and osseointegration before the final restoration can be placed. With zygomatic implants, however, dental prosthetics can be attached much sooner — typically within a few weeks, significantly shortening the overall treatment time and allowing patients to regain their smile much quicker."
      },
      {
        "num": "3",
        "title": "Higher Success Rate in Severe Bone Loss Cases",
        "desc": "Studies have shown that zygomatic implants have a success rate of up to 97%, making them a reliable and predictable solution for patients with significant bone loss. This is a significant advantage over traditional implants, which may have a lower success rate when there's insufficient bone volume. Zygomatic implants are designed to provide a secure foundation in cases where conventional methods may fail."
      },
      {
        "num": "4",
        "title": "Restores Function and Aesthetics Quickly",
        "desc": "Another major benefit of zygomatic implants is that they allow for the restoration of both function and aesthetics in a shorter amount of time compared to traditional implants. Patients who may have had difficulty chewing, speaking, or smiling due to severe bone loss can quickly restore their natural functions and regain their confidence."
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
  const pkgSliderRef = useRef<HTMLDivElement>(null);

  const scrollPackages = (direction: 'left' | 'right') => {
    if (pkgSliderRef.current) {
      const scrollAmount = 400;
      pkgSliderRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* 1. CLINICAL INTRODUCTION & BRANEMARK HISTORY */}
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

      {/* 3. COST OF ZYGOMATIC IMPLANTS IN TURKEY & SECOND VIDEO */}
      <section aria-labelledby="zygoma-cost-intro-heading" className={styles.introSection} style={{ paddingTop: '2.5rem' }}>
        <div className={styles.container}>
          <h2 id="zygoma-cost-intro-heading" className={styles.introHeading}>
            {d.costIntroTitle1}
          </h2>
          <h3 className={styles.introHeading} style={{ fontSize: 'clamp(1.4rem, 2.3vw, 1.85rem)', color: '#D58936', marginBottom: '1.25rem' }}>
            {d.costIntroTitle2}
          </h3>

          <p className={styles.textP}>{d.costIntroP1}</p>
          <p className={styles.textP}>{d.costIntroP2}</p>
          <p className={styles.textP} style={{ fontWeight: 600, color: '#0c1b4d' }}>
            {d.costIntroP3}
          </p>

          {/* Second Clinical Video: K4Xpx7JMyr8 */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/K4Xpx7JMyr8?t=1"
              title="Zygomatic and Cheekbone Dental Implants Cost and Procedure in Istanbul"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 4. FULL-ARCH & ZYGOMATIC PACKAGES HORIZONTAL SLIDER WITH CURRENCY CALCULATOR */}
      <section aria-labelledby="zygoma-packages-heading" className={styles.packagesSection} style={{ borderTop: 'none' }}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="zygoma-packages-heading" className={styles.packagesTitle}>
              {d.packagesTitle}
            </h2>
            <p className={styles.packagesSubtitle}>{d.packagesSubtitle}</p>
          </div>

          {/* Controls: Currency Switcher & Carousel Left/Right Buttons */}
          <div className={styles.pkgSliderControls}>
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

            <div className={styles.sliderNavBtns}>
              <button
                type="button"
                className={styles.sliderNavBtn}
                onClick={() => scrollPackages('left')}
                aria-label="Previous Package"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                type="button"
                className={styles.sliderNavBtn}
                onClick={() => scrollPackages('right')}
                aria-label="Next Package"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Single-row Horizontal Carousel Track */}
          <div className={styles.pkgSliderTrack} ref={pkgSliderRef}>
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

      {/* 5. OBJECTIVE CLINICAL COMPARISON: QUAD ZYGOMA vs HYBRID ZYGOMA vs COMPLEX SINUS GRAFTING */}
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

      {/* 6. EDITORIAL PROSE: YOUR DENTAL JOURNEY MADE SIMPLE & QUICK REACH OUT */}
      <section aria-labelledby="zygoma-journey-heading" className={styles.editorialSection}>
        <div className={styles.container}>
          <div className={styles.editorialHeader}>
            <h2 id="zygoma-journey-heading" className={styles.editorialHeading}>
              {d.journeyTitle}
            </h2>
            <p className={styles.editorialLead}>{d.journeyLead}</p>
          </div>

          {/* Quick Summary Grid */}
          <div className={styles.journeySummaryBox}>
            <div className={styles.journeySummaryGrid}>
              <div className={styles.journeySummaryItem}>
                <span className={styles.journeySummaryLabel}>{d.journeyStayLabel}</span>
                <strong className={styles.journeySummaryVal}>{d.journeyStayVal}</strong>
              </div>
              <div className={styles.journeySummaryItem}>
                <span className={styles.journeySummaryLabel}>{d.journeyVisitsLabel}</span>
                <strong className={styles.journeySummaryVal}>{d.journeyVisitsVal}</strong>
              </div>
              <div className={styles.journeySummaryItem}>
                <span className={styles.journeySummaryLabel}>{d.journeyRecoveryLabel}</span>
                <strong className={styles.journeySummaryVal}>{d.journeyRecoveryVal}</strong>
              </div>
              <div className={styles.journeySummaryItem}>
                <span className={styles.journeySummaryLabel}>{d.journeyPriceLabel}</span>
                <strong className={styles.journeySummaryVal}>{d.journeyPriceVal}</strong>
              </div>
            </div>

            {/* Reach Out Quick Links Bar */}
            <div className={styles.reachOutBar}>
              <span className={styles.reachOutLabel}>{d.reachOutLabel}</span>
              <div className={styles.reachOutBtns}>
                <a
                  href="https://wa.me/905434568080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.reachOutBtn} ${styles.reachOutBtnWhatsapp}`}
                >
                  <span>{d.reachOutWhatsapp}</span>
                </a>
                <a href="tel:+905434568080" className={styles.reachOutBtn}>
                  <span>{d.reachOutPhone}</span>
                </a>
                <a href="#js_target1" className={styles.reachOutBtn}>
                  <span>{d.reachOutForm}</span>
                </a>
                <a href="mailto:info@mastersmilestudio.com" className={styles.reachOutBtn}>
                  <span>{d.reachOutEmail}</span>
                </a>
              </div>
            </div>
          </div>

          {/* ADVANTAGES OF ZYGOMATIC IMPLANTS (EDITORIAL PROSE) */}
          <h3 className={styles.editorialSubheading}>
            {d.advantagesTitle}
          </h3>
          <p className={styles.editorialParagraph}>{d.advantagesP1}</p>
          <p className={styles.editorialParagraph}>{d.advantagesP2}</p>

          {/* 4 Key Benefits List */}
          <h4 className={styles.editorialHeading} style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', marginTop: '2rem' }}>
            {d.keyBenefitsHeading}
          </h4>
          <div className={styles.benefitsList}>
            {d.benefits.map((b, bIdx) => (
              <div key={bIdx} className={styles.benefitItem}>
                <div className={styles.benefitTitleRow}>
                  <span className={styles.benefitNum}>{b.num}.</span>
                  <h5 className={styles.benefitTitle}>{b.title}</h5>
                </div>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
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
