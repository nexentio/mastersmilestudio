'use client';

import React, { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import TreatmentBridgeRightTreatmentAccordion from '@/components/treatment-sections/TreatmentBridgeRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './TraditionalBridgesDetailView.module.css';

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
  a: string[];
}

interface LocaleDictionary {
  packagesTitle: string;
  packagesSubtitle: string;
  mostPopularBadge: string;
  durationLabel: string;
  includedLabel: string;
  priceLabel: string;
  getQuoteBtn: string;
  faqTitle: string;
  faqSubtitle: string;
  stayDuration: string;
  visitCount: string;
  recoveryTime: string;
  priceEstimate: string;
  packages: PackageItem[];
  faqs: FaqItem[];
}

const DICTIONARIES: Record<string, LocaleDictionary> = {
  "en": {
    "packagesTitle": "Fixed Traditional Dental Bridge Packages",
    "packagesSubtitle": "All-inclusive fixed bridge restorations with multi-layered German zirconia or high-noble ceramic, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Traditional Dental Bridges",
    "faqSubtitle": "Clinical guidance on fixed traditional bridges, abutment preparation, zirconia vs PFM materials, chewing function restoration, hygiene under pontics, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D intraoral digital impressions, precision abutment tooth preparation, temporary bridge placement, 5-axis CAD/CAM milling, and permanent cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete fixed bridge restoration. All clinical steps are finalized within a single 5 to 7-day stay.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor gum tenderness subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Traditional bridge prices start at £140 / €160 / $175 per unit (from £420 / €480 / $530 for a 3-unit bridge).</strong> Complete multi-unit packages include 3D digital planning, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "3-Unit Zirconia Traditional Bridge (1 Missing Tooth)",
        "brand": "German Multi-Layered Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "3-Unit High-Translucency German Zirconia Bridge (2 Abutments + 1 Pontic)",
          "Precision 3D intraoral digital scan & occlusion alignment",
          "Abutment preparation, local anesthesia & temporary bridge",
          "Custom color shading & diamond paste high-gloss glaze",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$790",
          "EUR": "€720",
          "GBP": "£630"
        }
      },
      {
        "name": "4-Unit Zirconia Fixed Bridge (2 Missing Teeth)",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "4-Unit High-Strength Zirconia Bridge (2 Abutments + 2 Pontics)",
          "Bespoke 3D Gnathological Bite Balance & Aesthetic Smile Mapping",
          "Aesthetic temporary bridge fitted on Day 1",
          "4-Star Luxury Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against bridge fracture"
        ],
        "price": {
          "USD": "$1,050",
          "EUR": "€960",
          "GBP": "£840"
        }
      },
      {
        "name": "3-Unit Metal-Porcelain (PFM) Bridge",
        "brand": "Biocompatible Chromium-Cobalt + German Ceramic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "3-Unit PFM Dental Bridge (Cost-effective posterior solution)",
          "Laser-sintered bio-alloy core with layered porcelain",
          "Occlusal bite check & precision cementation",
          "4-Star Hotel Stay in Antalya (5 Nights)",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "Full Arch Fixed Zirconia Bridge Restoration",
        "brand": "German 3D Pro Multilayer Zirconia (10-12 Units)",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Full arch fixed monolithic zirconia bridge for multiple missing teeth",
          "Complete vertical dimension restoration & bite reconstruction",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,600",
          "GBP": "£3,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a traditional dental bridge and how does it work?",
        "a": [
          "A traditional fixed dental bridge consists of one or more artificial teeth (pontics) held securely in place by dental crowns cemented onto the natural teeth adjacent to the gap (abutment teeth).",
          "It is the most common and proven non-surgical method to restore chewing efficiency, prevent surrounding teeth from shifting, and restore a complete, natural-looking smile."
        ]
      },
      {
        "q": "What materials are used for traditional bridges at Master Smile Studio?",
        "a": [
          "We offer two primary high-grade materials:",
          "1. Multi-Layered German Zirconium: 100% metal-free, offering unmatched 1200+ MPa strength, biocompatibility, and lifelike translucency with no gray gum margins.",
          "2. Porcelain-Fused-to-Metal (PFM): A robust, budget-friendly option featuring a laser-sintered bio-alloy sub-structure layered with high-grade German feldspathic porcelain."
        ]
      },
      {
        "q": "How long does a traditional dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing under the pontic using specialized floss threaders or water flossers, and regular check-ups, high-quality zirconia bridges can last 15 to 20 years or longer."
        ]
      },
      {
        "q": "How many days does the dental bridge procedure take in Antalya?",
        "a": [
          "The complete treatment is completed in 5 to 7 days during a single trip to Antalya. Abutment preparation and digital scanning take place on Day 1, followed by temporary bridge placement, precision CAD/CAM milling in our laboratory, and final permanent cementation on Day 5 or 6."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "Geleneksel Sabit Diş Köprüsü Paketleri",
    "packagesSubtitle": "Alman zirkonyum ve porselen sabit diş köprüsü, lüks otel konaklaması ve VIP transfer dahil her şey dahil paketler.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Geleneksel Diş Köprüleri Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Clinical guidance on fixed traditional bridges, abutment preparation, zirconia vs PFM materials, chewing function restoration, hygiene under pontics, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D intraoral digital impressions, precision abutment tooth preparation, temporary bridge placement, 5-axis CAD/CAM milling, and permanent cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete fixed bridge restoration. All clinical steps are finalized within a single 5 to 7-day stay.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor gum tenderness subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Traditional bridge prices start at £140 / €160 / $175 per unit (from £420 / €480 / $530 for a 3-unit bridge).</strong> Complete multi-unit packages include 3D digital planning, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "3-Unit Zirconia Traditional Bridge (1 Missing Tooth)",
        "brand": "German Multi-Layered Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "3-Unit High-Translucency German Zirconia Bridge (2 Abutments + 1 Pontic)",
          "Precision 3D intraoral digital scan & occlusion alignment",
          "Abutment preparation, local anesthesia & temporary bridge",
          "Custom color shading & diamond paste high-gloss glaze",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$790",
          "EUR": "€720",
          "GBP": "£630"
        }
      },
      {
        "name": "4-Unit Zirconia Fixed Bridge (2 Missing Teeth)",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "4-Unit High-Strength Zirconia Bridge (2 Abutments + 2 Pontics)",
          "Bespoke 3D Gnathological Bite Balance & Aesthetic Smile Mapping",
          "Aesthetic temporary bridge fitted on Day 1",
          "4-Star Luxury Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against bridge fracture"
        ],
        "price": {
          "USD": "$1,050",
          "EUR": "€960",
          "GBP": "£840"
        }
      },
      {
        "name": "3-Unit Metal-Porcelain (PFM) Bridge",
        "brand": "Biocompatible Chromium-Cobalt + German Ceramic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "3-Unit PFM Dental Bridge (Cost-effective posterior solution)",
          "Laser-sintered bio-alloy core with layered porcelain",
          "Occlusal bite check & precision cementation",
          "4-Star Hotel Stay in Antalya (5 Nights)",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "Full Arch Fixed Zirconia Bridge Restoration",
        "brand": "German 3D Pro Multilayer Zirconia (10-12 Units)",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Full arch fixed monolithic zirconia bridge for multiple missing teeth",
          "Complete vertical dimension restoration & bite reconstruction",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,600",
          "GBP": "£3,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a traditional dental bridge and how does it work?",
        "a": [
          "A traditional fixed dental bridge consists of one or more artificial teeth (pontics) held securely in place by dental crowns cemented onto the natural teeth adjacent to the gap (abutment teeth).",
          "It is the most common and proven non-surgical method to restore chewing efficiency, prevent surrounding teeth from shifting, and restore a complete, natural-looking smile."
        ]
      },
      {
        "q": "What materials are used for traditional bridges at Master Smile Studio?",
        "a": [
          "We offer two primary high-grade materials:",
          "1. Multi-Layered German Zirconium: 100% metal-free, offering unmatched 1200+ MPa strength, biocompatibility, and lifelike translucency with no gray gum margins.",
          "2. Porcelain-Fused-to-Metal (PFM): A robust, budget-friendly option featuring a laser-sintered bio-alloy sub-structure layered with high-grade German feldspathic porcelain."
        ]
      },
      {
        "q": "How long does a traditional dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing under the pontic using specialized floss threaders or water flossers, and regular check-ups, high-quality zirconia bridges can last 15 to 20 years or longer."
        ]
      },
      {
        "q": "How many days does the dental bridge procedure take in Antalya?",
        "a": [
          "The complete treatment is completed in 5 to 7 days during a single trip to Antalya. Abutment preparation and digital scanning take place on Day 1, followed by temporary bridge placement, precision CAD/CAM milling in our laboratory, and final permanent cementation on Day 5 or 6."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "Fixed Traditional Dental Bridge Packages",
    "packagesSubtitle": "All-inclusive fixed bridge restorations with multi-layered German zirconia or high-noble ceramic, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Traditional Dental Bridges",
    "faqSubtitle": "Clinical guidance on fixed traditional bridges, abutment preparation, zirconia vs PFM materials, chewing function restoration, hygiene under pontics, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D intraoral digital impressions, precision abutment tooth preparation, temporary bridge placement, 5-axis CAD/CAM milling, and permanent cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete fixed bridge restoration. All clinical steps are finalized within a single 5 to 7-day stay.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor gum tenderness subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Traditional bridge prices start at £140 / €160 / $175 per unit (from £420 / €480 / $530 for a 3-unit bridge).</strong> Complete multi-unit packages include 3D digital planning, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "3-Unit Zirconia Traditional Bridge (1 Missing Tooth)",
        "brand": "German Multi-Layered Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "3-Unit High-Translucency German Zirconia Bridge (2 Abutments + 1 Pontic)",
          "Precision 3D intraoral digital scan & occlusion alignment",
          "Abutment preparation, local anesthesia & temporary bridge",
          "Custom color shading & diamond paste high-gloss glaze",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$790",
          "EUR": "€720",
          "GBP": "£630"
        }
      },
      {
        "name": "4-Unit Zirconia Fixed Bridge (2 Missing Teeth)",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "4-Unit High-Strength Zirconia Bridge (2 Abutments + 2 Pontics)",
          "Bespoke 3D Gnathological Bite Balance & Aesthetic Smile Mapping",
          "Aesthetic temporary bridge fitted on Day 1",
          "4-Star Luxury Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against bridge fracture"
        ],
        "price": {
          "USD": "$1,050",
          "EUR": "€960",
          "GBP": "£840"
        }
      },
      {
        "name": "3-Unit Metal-Porcelain (PFM) Bridge",
        "brand": "Biocompatible Chromium-Cobalt + German Ceramic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "3-Unit PFM Dental Bridge (Cost-effective posterior solution)",
          "Laser-sintered bio-alloy core with layered porcelain",
          "Occlusal bite check & precision cementation",
          "4-Star Hotel Stay in Antalya (5 Nights)",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "Full Arch Fixed Zirconia Bridge Restoration",
        "brand": "German 3D Pro Multilayer Zirconia (10-12 Units)",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Full arch fixed monolithic zirconia bridge for multiple missing teeth",
          "Complete vertical dimension restoration & bite reconstruction",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,600",
          "GBP": "£3,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a traditional dental bridge and how does it work?",
        "a": [
          "A traditional fixed dental bridge consists of one or more artificial teeth (pontics) held securely in place by dental crowns cemented onto the natural teeth adjacent to the gap (abutment teeth).",
          "It is the most common and proven non-surgical method to restore chewing efficiency, prevent surrounding teeth from shifting, and restore a complete, natural-looking smile."
        ]
      },
      {
        "q": "What materials are used for traditional bridges at Master Smile Studio?",
        "a": [
          "We offer two primary high-grade materials:",
          "1. Multi-Layered German Zirconium: 100% metal-free, offering unmatched 1200+ MPa strength, biocompatibility, and lifelike translucency with no gray gum margins.",
          "2. Porcelain-Fused-to-Metal (PFM): A robust, budget-friendly option featuring a laser-sintered bio-alloy sub-structure layered with high-grade German feldspathic porcelain."
        ]
      },
      {
        "q": "How long does a traditional dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing under the pontic using specialized floss threaders or water flossers, and regular check-ups, high-quality zirconia bridges can last 15 to 20 years or longer."
        ]
      },
      {
        "q": "How many days does the dental bridge procedure take in Antalya?",
        "a": [
          "The complete treatment is completed in 5 to 7 days during a single trip to Antalya. Abutment preparation and digital scanning take place on Day 1, followed by temporary bridge placement, precision CAD/CAM milling in our laboratory, and final permanent cementation on Day 5 or 6."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "Fixed Traditional Dental Bridge Packages",
    "packagesSubtitle": "All-inclusive fixed bridge restorations with multi-layered German zirconia or high-noble ceramic, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Traditional Dental Bridges",
    "faqSubtitle": "Clinical guidance on fixed traditional bridges, abutment preparation, zirconia vs PFM materials, chewing function restoration, hygiene under pontics, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D intraoral digital impressions, precision abutment tooth preparation, temporary bridge placement, 5-axis CAD/CAM milling, and permanent cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete fixed bridge restoration. All clinical steps are finalized within a single 5 to 7-day stay.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor gum tenderness subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Traditional bridge prices start at £140 / €160 / $175 per unit (from £420 / €480 / $530 for a 3-unit bridge).</strong> Complete multi-unit packages include 3D digital planning, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "3-Unit Zirconia Traditional Bridge (1 Missing Tooth)",
        "brand": "German Multi-Layered Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "3-Unit High-Translucency German Zirconia Bridge (2 Abutments + 1 Pontic)",
          "Precision 3D intraoral digital scan & occlusion alignment",
          "Abutment preparation, local anesthesia & temporary bridge",
          "Custom color shading & diamond paste high-gloss glaze",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$790",
          "EUR": "€720",
          "GBP": "£630"
        }
      },
      {
        "name": "4-Unit Zirconia Fixed Bridge (2 Missing Teeth)",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "4-Unit High-Strength Zirconia Bridge (2 Abutments + 2 Pontics)",
          "Bespoke 3D Gnathological Bite Balance & Aesthetic Smile Mapping",
          "Aesthetic temporary bridge fitted on Day 1",
          "4-Star Luxury Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against bridge fracture"
        ],
        "price": {
          "USD": "$1,050",
          "EUR": "€960",
          "GBP": "£840"
        }
      },
      {
        "name": "3-Unit Metal-Porcelain (PFM) Bridge",
        "brand": "Biocompatible Chromium-Cobalt + German Ceramic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "3-Unit PFM Dental Bridge (Cost-effective posterior solution)",
          "Laser-sintered bio-alloy core with layered porcelain",
          "Occlusal bite check & precision cementation",
          "4-Star Hotel Stay in Antalya (5 Nights)",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "Full Arch Fixed Zirconia Bridge Restoration",
        "brand": "German 3D Pro Multilayer Zirconia (10-12 Units)",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Full arch fixed monolithic zirconia bridge for multiple missing teeth",
          "Complete vertical dimension restoration & bite reconstruction",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,600",
          "GBP": "£3,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a traditional dental bridge and how does it work?",
        "a": [
          "A traditional fixed dental bridge consists of one or more artificial teeth (pontics) held securely in place by dental crowns cemented onto the natural teeth adjacent to the gap (abutment teeth).",
          "It is the most common and proven non-surgical method to restore chewing efficiency, prevent surrounding teeth from shifting, and restore a complete, natural-looking smile."
        ]
      },
      {
        "q": "What materials are used for traditional bridges at Master Smile Studio?",
        "a": [
          "We offer two primary high-grade materials:",
          "1. Multi-Layered German Zirconium: 100% metal-free, offering unmatched 1200+ MPa strength, biocompatibility, and lifelike translucency with no gray gum margins.",
          "2. Porcelain-Fused-to-Metal (PFM): A robust, budget-friendly option featuring a laser-sintered bio-alloy sub-structure layered with high-grade German feldspathic porcelain."
        ]
      },
      {
        "q": "How long does a traditional dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing under the pontic using specialized floss threaders or water flossers, and regular check-ups, high-quality zirconia bridges can last 15 to 20 years or longer."
        ]
      },
      {
        "q": "How many days does the dental bridge procedure take in Antalya?",
        "a": [
          "The complete treatment is completed in 5 to 7 days during a single trip to Antalya. Abutment preparation and digital scanning take place on Day 1, followed by temporary bridge placement, precision CAD/CAM milling in our laboratory, and final permanent cementation on Day 5 or 6."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "Fixed Traditional Dental Bridge Packages",
    "packagesSubtitle": "All-inclusive fixed bridge restorations with multi-layered German zirconia or high-noble ceramic, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Traditional Dental Bridges",
    "faqSubtitle": "Clinical guidance on fixed traditional bridges, abutment preparation, zirconia vs PFM materials, chewing function restoration, hygiene under pontics, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D intraoral digital impressions, precision abutment tooth preparation, temporary bridge placement, 5-axis CAD/CAM milling, and permanent cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete fixed bridge restoration. All clinical steps are finalized within a single 5 to 7-day stay.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor gum tenderness subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Traditional bridge prices start at £140 / €160 / $175 per unit (from £420 / €480 / $530 for a 3-unit bridge).</strong> Complete multi-unit packages include 3D digital planning, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "3-Unit Zirconia Traditional Bridge (1 Missing Tooth)",
        "brand": "German Multi-Layered Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "3-Unit High-Translucency German Zirconia Bridge (2 Abutments + 1 Pontic)",
          "Precision 3D intraoral digital scan & occlusion alignment",
          "Abutment preparation, local anesthesia & temporary bridge",
          "Custom color shading & diamond paste high-gloss glaze",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$790",
          "EUR": "€720",
          "GBP": "£630"
        }
      },
      {
        "name": "4-Unit Zirconia Fixed Bridge (2 Missing Teeth)",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "4-Unit High-Strength Zirconia Bridge (2 Abutments + 2 Pontics)",
          "Bespoke 3D Gnathological Bite Balance & Aesthetic Smile Mapping",
          "Aesthetic temporary bridge fitted on Day 1",
          "4-Star Luxury Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against bridge fracture"
        ],
        "price": {
          "USD": "$1,050",
          "EUR": "€960",
          "GBP": "£840"
        }
      },
      {
        "name": "3-Unit Metal-Porcelain (PFM) Bridge",
        "brand": "Biocompatible Chromium-Cobalt + German Ceramic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "3-Unit PFM Dental Bridge (Cost-effective posterior solution)",
          "Laser-sintered bio-alloy core with layered porcelain",
          "Occlusal bite check & precision cementation",
          "4-Star Hotel Stay in Antalya (5 Nights)",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "Full Arch Fixed Zirconia Bridge Restoration",
        "brand": "German 3D Pro Multilayer Zirconia (10-12 Units)",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Full arch fixed monolithic zirconia bridge for multiple missing teeth",
          "Complete vertical dimension restoration & bite reconstruction",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,600",
          "GBP": "£3,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a traditional dental bridge and how does it work?",
        "a": [
          "A traditional fixed dental bridge consists of one or more artificial teeth (pontics) held securely in place by dental crowns cemented onto the natural teeth adjacent to the gap (abutment teeth).",
          "It is the most common and proven non-surgical method to restore chewing efficiency, prevent surrounding teeth from shifting, and restore a complete, natural-looking smile."
        ]
      },
      {
        "q": "What materials are used for traditional bridges at Master Smile Studio?",
        "a": [
          "We offer two primary high-grade materials:",
          "1. Multi-Layered German Zirconium: 100% metal-free, offering unmatched 1200+ MPa strength, biocompatibility, and lifelike translucency with no gray gum margins.",
          "2. Porcelain-Fused-to-Metal (PFM): A robust, budget-friendly option featuring a laser-sintered bio-alloy sub-structure layered with high-grade German feldspathic porcelain."
        ]
      },
      {
        "q": "How long does a traditional dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing under the pontic using specialized floss threaders or water flossers, and regular check-ups, high-quality zirconia bridges can last 15 to 20 years or longer."
        ]
      },
      {
        "q": "How many days does the dental bridge procedure take in Antalya?",
        "a": [
          "The complete treatment is completed in 5 to 7 days during a single trip to Antalya. Abutment preparation and digital scanning take place on Day 1, followed by temporary bridge placement, precision CAD/CAM milling in our laboratory, and final permanent cementation on Day 5 or 6."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "Fixed Traditional Dental Bridge Packages",
    "packagesSubtitle": "All-inclusive fixed bridge restorations with multi-layered German zirconia or high-noble ceramic, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Traditional Dental Bridges",
    "faqSubtitle": "Clinical guidance on fixed traditional bridges, abutment preparation, zirconia vs PFM materials, chewing function restoration, hygiene under pontics, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D intraoral digital impressions, precision abutment tooth preparation, temporary bridge placement, 5-axis CAD/CAM milling, and permanent cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete fixed bridge restoration. All clinical steps are finalized within a single 5 to 7-day stay.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor gum tenderness subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Traditional bridge prices start at £140 / €160 / $175 per unit (from £420 / €480 / $530 for a 3-unit bridge).</strong> Complete multi-unit packages include 3D digital planning, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "3-Unit Zirconia Traditional Bridge (1 Missing Tooth)",
        "brand": "German Multi-Layered Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "3-Unit High-Translucency German Zirconia Bridge (2 Abutments + 1 Pontic)",
          "Precision 3D intraoral digital scan & occlusion alignment",
          "Abutment preparation, local anesthesia & temporary bridge",
          "Custom color shading & diamond paste high-gloss glaze",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$790",
          "EUR": "€720",
          "GBP": "£630"
        }
      },
      {
        "name": "4-Unit Zirconia Fixed Bridge (2 Missing Teeth)",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "4-Unit High-Strength Zirconia Bridge (2 Abutments + 2 Pontics)",
          "Bespoke 3D Gnathological Bite Balance & Aesthetic Smile Mapping",
          "Aesthetic temporary bridge fitted on Day 1",
          "4-Star Luxury Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against bridge fracture"
        ],
        "price": {
          "USD": "$1,050",
          "EUR": "€960",
          "GBP": "£840"
        }
      },
      {
        "name": "3-Unit Metal-Porcelain (PFM) Bridge",
        "brand": "Biocompatible Chromium-Cobalt + German Ceramic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "3-Unit PFM Dental Bridge (Cost-effective posterior solution)",
          "Laser-sintered bio-alloy core with layered porcelain",
          "Occlusal bite check & precision cementation",
          "4-Star Hotel Stay in Antalya (5 Nights)",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "Full Arch Fixed Zirconia Bridge Restoration",
        "brand": "German 3D Pro Multilayer Zirconia (10-12 Units)",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Full arch fixed monolithic zirconia bridge for multiple missing teeth",
          "Complete vertical dimension restoration & bite reconstruction",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,600",
          "GBP": "£3,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a traditional dental bridge and how does it work?",
        "a": [
          "A traditional fixed dental bridge consists of one or more artificial teeth (pontics) held securely in place by dental crowns cemented onto the natural teeth adjacent to the gap (abutment teeth).",
          "It is the most common and proven non-surgical method to restore chewing efficiency, prevent surrounding teeth from shifting, and restore a complete, natural-looking smile."
        ]
      },
      {
        "q": "What materials are used for traditional bridges at Master Smile Studio?",
        "a": [
          "We offer two primary high-grade materials:",
          "1. Multi-Layered German Zirconium: 100% metal-free, offering unmatched 1200+ MPa strength, biocompatibility, and lifelike translucency with no gray gum margins.",
          "2. Porcelain-Fused-to-Metal (PFM): A robust, budget-friendly option featuring a laser-sintered bio-alloy sub-structure layered with high-grade German feldspathic porcelain."
        ]
      },
      {
        "q": "How long does a traditional dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing under the pontic using specialized floss threaders or water flossers, and regular check-ups, high-quality zirconia bridges can last 15 to 20 years or longer."
        ]
      },
      {
        "q": "How many days does the dental bridge procedure take in Antalya?",
        "a": [
          "The complete treatment is completed in 5 to 7 days during a single trip to Antalya. Abutment preparation and digital scanning take place on Day 1, followed by temporary bridge placement, precision CAD/CAM milling in our laboratory, and final permanent cementation on Day 5 or 6."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "Fixed Traditional Dental Bridge Packages",
    "packagesSubtitle": "All-inclusive fixed bridge restorations with multi-layered German zirconia or high-noble ceramic, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Traditional Dental Bridges",
    "faqSubtitle": "Clinical guidance on fixed traditional bridges, abutment preparation, zirconia vs PFM materials, chewing function restoration, hygiene under pontics, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D intraoral digital impressions, precision abutment tooth preparation, temporary bridge placement, 5-axis CAD/CAM milling, and permanent cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete fixed bridge restoration. All clinical steps are finalized within a single 5 to 7-day stay.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor gum tenderness subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Traditional bridge prices start at £140 / €160 / $175 per unit (from £420 / €480 / $530 for a 3-unit bridge).</strong> Complete multi-unit packages include 3D digital planning, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "3-Unit Zirconia Traditional Bridge (1 Missing Tooth)",
        "brand": "German Multi-Layered Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "3-Unit High-Translucency German Zirconia Bridge (2 Abutments + 1 Pontic)",
          "Precision 3D intraoral digital scan & occlusion alignment",
          "Abutment preparation, local anesthesia & temporary bridge",
          "Custom color shading & diamond paste high-gloss glaze",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$790",
          "EUR": "€720",
          "GBP": "£630"
        }
      },
      {
        "name": "4-Unit Zirconia Fixed Bridge (2 Missing Teeth)",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "4-Unit High-Strength Zirconia Bridge (2 Abutments + 2 Pontics)",
          "Bespoke 3D Gnathological Bite Balance & Aesthetic Smile Mapping",
          "Aesthetic temporary bridge fitted on Day 1",
          "4-Star Luxury Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against bridge fracture"
        ],
        "price": {
          "USD": "$1,050",
          "EUR": "€960",
          "GBP": "£840"
        }
      },
      {
        "name": "3-Unit Metal-Porcelain (PFM) Bridge",
        "brand": "Biocompatible Chromium-Cobalt + German Ceramic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "3-Unit PFM Dental Bridge (Cost-effective posterior solution)",
          "Laser-sintered bio-alloy core with layered porcelain",
          "Occlusal bite check & precision cementation",
          "4-Star Hotel Stay in Antalya (5 Nights)",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "Full Arch Fixed Zirconia Bridge Restoration",
        "brand": "German 3D Pro Multilayer Zirconia (10-12 Units)",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Full arch fixed monolithic zirconia bridge for multiple missing teeth",
          "Complete vertical dimension restoration & bite reconstruction",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,600",
          "GBP": "£3,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a traditional dental bridge and how does it work?",
        "a": [
          "A traditional fixed dental bridge consists of one or more artificial teeth (pontics) held securely in place by dental crowns cemented onto the natural teeth adjacent to the gap (abutment teeth).",
          "It is the most common and proven non-surgical method to restore chewing efficiency, prevent surrounding teeth from shifting, and restore a complete, natural-looking smile."
        ]
      },
      {
        "q": "What materials are used for traditional bridges at Master Smile Studio?",
        "a": [
          "We offer two primary high-grade materials:",
          "1. Multi-Layered German Zirconium: 100% metal-free, offering unmatched 1200+ MPa strength, biocompatibility, and lifelike translucency with no gray gum margins.",
          "2. Porcelain-Fused-to-Metal (PFM): A robust, budget-friendly option featuring a laser-sintered bio-alloy sub-structure layered with high-grade German feldspathic porcelain."
        ]
      },
      {
        "q": "How long does a traditional dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing under the pontic using specialized floss threaders or water flossers, and regular check-ups, high-quality zirconia bridges can last 15 to 20 years or longer."
        ]
      },
      {
        "q": "How many days does the dental bridge procedure take in Antalya?",
        "a": [
          "The complete treatment is completed in 5 to 7 days during a single trip to Antalya. Abutment preparation and digital scanning take place on Day 1, followed by temporary bridge placement, precision CAD/CAM milling in our laboratory, and final permanent cementation on Day 5 or 6."
        ]
      }
    ]
  }
};

export default function TraditionalBridgesDetailView() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;

  const [currency, setCurrency] = useState<'EUR' | 'GBP' | 'USD'>('EUR');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={styles.wrapper}>
      {/* 1. FIND THE RIGHT TREATMENT ACCORDION (BRIDGES ACCORDION) */}
      <TreatmentBridgeRightTreatmentAccordion />

      {/* 2. YOUR DENTAL JOURNEY MADE SIMPLE (STAY, VISITS, RECOVERY, PRICE) */}
      <TreatmentJourneySimpleSection
        stayDuration={d.stayDuration}
        visitCount={d.visitCount}
        recoveryTime={d.recoveryTime}
        priceEstimate={d.priceEstimate}
      />

      {/* 3. OUR BEST SERVICES INCLUDED (8 SERVICE PILLARS) */}
      <TreatmentServicesIncludedSection />

      {/* 4. REAL PATIENTS. REAL SMILES. (VIDEO REELS) */}
      <TreatmentPatientReelsSection />

      {/* 5. FROM FIRST VISIT TO FINAL SMILE (BEFORE & AFTER GALLERY) */}
      <TreatmentBeforeAfterSliderSection />

      {/* 6. TREATMENT PACKAGES SLIDER & CURRENCY CALCULATOR */}
      <section aria-labelledby="traditional-bridges-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="traditional-bridges-packages-heading" className={styles.packagesTitle}>
              {d.packagesTitle}
            </h2>
            <p className={styles.packagesSubtitle}>{d.packagesSubtitle}</p>
          </div>

          <div className={styles.pkgSliderControls}>
            <div className={styles.currencyBar} role="group" aria-label="Currency Selector">
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
                onClick={scrollLeft}
                aria-label="Previous Package"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                type="button"
                className={styles.sliderNavBtn}
                onClick={scrollRight}
                aria-label="Next Package"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.pkgSliderTrack} ref={trackRef}>
            {d.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`${styles.pkgCard} ${pkg.popular ? styles.pkgCardPopular : ''}`}
              >
                {pkg.popular && (
                  <span className={styles.popularBadge}>{d.mostPopularBadge}</span>
                )}

                <div>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                  <span className={styles.pkgBrand}>{pkg.brand}</span>

                  <div className={styles.pkgImageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pkg.img}
                      alt={pkg.name}
                      width={340}
                      height={180}
                      className={styles.pkgImage}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.pkgDurationRow}>
                    <span>{d.durationLabel}</span>
                    <strong>{pkg.duration}</strong>
                  </div>

                  <span className={styles.pkgListTitle}>{d.includedLabel}</span>
                  <ul className={styles.pkgList}>
                    {pkg.included.map((item, iIdx) => (
                      <li key={iIdx} className={styles.pkgListItem}>
                        <span className={styles.pkgCheck}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.pkgFooter}>
                  <div className={styles.pkgPriceRow}>
                    <span className={styles.pkgPriceLabel}>{d.priceLabel}</span>
                    <strong className={styles.pkgPriceValue}>
                      {pkg.price[currency]}
                    </strong>
                  </div>

                  <a
                    href="#contact"
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

      {/* 7. EVERY SMILE HAS A STORY (REVIEWS SECTION) */}
      <TreatmentReviewsSection />

      {/* 8. MASTER FAQ SECTION */}
      <section aria-labelledby="traditional-bridges-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="traditional-bridges-faq-heading" className={styles.faqTitle}>
              {d.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{d.faqSubtitle}</p>
          </div>

          <div className={styles.faqAccordion}>
            {d.faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div key={fIdx} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqQuestionBtn}
                    onClick={() => toggleFaq(fIdx)}
                    aria-expanded={isOpen}
                    aria-controls={`traditional-bridges-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`traditional-bridges-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
                      {faq.a.map((par, pIdx) => (
                        <p key={pIdx} className={styles.faqParagraph}>
                          {par}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. 4-STEP INTERACTIVE QUOTE & SMILE CONSULTATION FORM */}
      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="Traditional Dental Bridges" />
      </div>
    </div>
  );
}
