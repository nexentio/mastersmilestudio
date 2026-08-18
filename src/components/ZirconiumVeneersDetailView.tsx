'use client';

import React, { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import TreatmentVeneerRightTreatmentAccordion from '@/components/treatment-sections/TreatmentVeneerRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './ZirconiumVeneersDetailView.module.css';

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
    "packagesTitle": "High-Strength Zirconium Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with multi-layered German monolithic zirconia, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Zirconium Veneers",
    "faqSubtitle": "Explore answers regarding German multi-layer zirconia veneers, fracture resistance, smile aesthetics, procedure timelines, and international warranties in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> During this single trip, 3D intraoral digital scanning, precision micro-preparation, 5-axis CAD/CAM milling of German zirconia veneers, and final resin cementation are completed.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Istanbul once. Your complete smile makeover (from 4 to 20 Zirconium laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive tooth preparation ensures fast gum tissue healing and immediate functional comfort with zero downtime.",
    "priceEstimate": "<strong>Zirconium Laminate Veneer prices start at £210 / €240 / $260 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Zirconium Veneer",
        "brand": "German Katana / Vita Multi-Layered Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "included": [
          "1x High-Translucency German Multi-Layer Zirconium Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-preparation, local anesthesia & temporary veneer",
          "Custom shade matching & aesthetic glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$260",
          "EUR": "€240",
          "GBP": "£210"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "German Multi-Layered Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "popular": true,
        "included": [
          "8x High-Translucency Zirconium Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Istanbul (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and chipping"
        ],
        "price": {
          "USD": "$2,050",
          "EUR": "€1,850",
          "GBP": "£1,600"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "German Multi-Layered Zirconia (1100+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-3.jpg",
        "included": [
          "16x Custom Zirconium Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Istanbul (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,650",
          "GBP": "£3,150"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "German Katana / Vita Ultra-Translucent Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-3.jpg",
        "included": [
          "20x Ultra-Translucent Zirconium Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      },
      {
        "name": "Combination Smile Makeover (Zirconia + E-Max)",
        "brand": "German Zirconia + Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-2.jpg",
        "included": [
          "Hybrid combination: E-Max veneers on front teeth + Zirconia on premolars",
          "Maximum anterior translucency with posterior strength",
          "Bespoke 3D Digital Smile Design",
          "4-Star Luxury Hotel Stay in Istanbul for 6 Nights",
          "VIP Mercedes Chauffeur Service for all transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,300",
          "EUR": "€3,950",
          "GBP": "£3,450"
        }
      },
      {
        "name": "Single Monolithic Zirconia Veneer",
        "brand": "German 3D Pro Multilayer Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/composite-laminate-copy.webp",
        "included": [
          "1x Heavy-Bite Resistant Monolithic Zirconia Veneer",
          "High fracture toughness for patients with mild bruxism",
          "Multi-shade nano-hybrid polishing",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Zirconium laminate veneers and how do they differ from E-Max?",
        "a": [
          "Zirconium laminate veneers are ultra-durable ceramic veneers fabricated from multi-layered German zirconium dioxide (1100+ MPa flexural strength).",
          "While E-Max offers the highest optical translucency for front teeth, Zirconium veneers provide superior fracture resistance, making them ideal for patients with strong bite forces or moderate tooth discoloration."
        ]
      },
      {
        "q": "How much tooth preparation is required for Zirconium veneers?",
        "a": [
          "Modern ultra-translucent Zirconium veneers require only 0.4 mm to 0.6 mm of surface enamel preparation.",
          "Our specialists preserve your natural tooth structure and dental pulp vitality, ensuring complete comfort."
        ]
      },
      {
        "q": "Can Zirconium veneers discolor or stain over time?",
        "a": [
          "No. Highly sintered zirconium dioxide has a non-porous crystalline structure that is 100% impervious to stains from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their initial shade and polished luster permanently."
        ]
      },
      {
        "q": "Are Zirconium veneers suitable for teeth grinders (bruxism)?",
        "a": [
          "Yes! Due to the extraordinary flexural strength of German zirconia, Zirconium veneers are significantly more resistant to chipping and fractures than traditional feldspathic porcelain for patients who clench or grind their teeth.",
          "We also provide a custom-fitted nighttime guard as part of your treatment package."
        ]
      },
      {
        "q": "How many days does the treatment take in Istanbul?",
        "a": [
          "The complete treatment requires 5 to 7 days in Istanbul during a single visit. We handle digital scanning, smile design mock-ups, CAD/CAM milling, and permanent bonding."
        ]
      },
      {
        "q": "What is included in the all-inclusive Zirconium Veneer package?",
        "a": [
          "Our packages include genuine German multi-layer zirconia veneers, 3D Digital Smile Design, 4-star or 5-star hotel accommodation with breakfast, and private VIP Mercedes transfers between Istanbul Airport (IST / SAW), hotel, and our clinic with zero hidden fees."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "Alman Zirkonyum Lamina Diş Kaplama Paketleri",
    "packagesSubtitle": "Yüksek dayanımlı çok katmanlı Alman zirkonyum, otel konaklaması ve VIP transfer dahil her şey dahil yaprak porselen paketleri.",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket İçeriği:",
    "priceLabel": "Her Şey Dahil Fiyat:",
    "getQuoteBtn": "Ücretsiz Fiyat Teklifi Al",
    "faqTitle": "Zirkonyum Lamina (Yaprak Porselen) Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "İstanbul'da Alman zirkonyum lamina kaplama, kırılma direnci, diş kesimi, leke tutmazlık, tedavi süresi ve garanti koşulları hakkında en çok merak edilen soruların yanıtları.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> During this single trip, 3D intraoral digital scanning, precision micro-preparation, 5-axis CAD/CAM milling of German zirconia veneers, and final resin cementation are completed.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Istanbul once. Your complete smile makeover (from 4 to 20 Zirconium laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive tooth preparation ensures fast gum tissue healing and immediate functional comfort with zero downtime.",
    "priceEstimate": "<strong>Zirconium Laminate Veneer prices start at £210 / €240 / $260 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Zirconium Veneer",
        "brand": "German Katana / Vita Multi-Layered Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "included": [
          "1x High-Translucency German Multi-Layer Zirconium Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-preparation, local anesthesia & temporary veneer",
          "Custom shade matching & aesthetic glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$260",
          "EUR": "€240",
          "GBP": "£210"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "German Multi-Layered Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "popular": true,
        "included": [
          "8x High-Translucency Zirconium Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Istanbul (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and chipping"
        ],
        "price": {
          "USD": "$2,050",
          "EUR": "€1,850",
          "GBP": "£1,600"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "German Multi-Layered Zirconia (1100+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-3.jpg",
        "included": [
          "16x Custom Zirconium Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Istanbul (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,650",
          "GBP": "£3,150"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "German Katana / Vita Ultra-Translucent Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-3.jpg",
        "included": [
          "20x Ultra-Translucent Zirconium Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      },
      {
        "name": "Combination Smile Makeover (Zirconia + E-Max)",
        "brand": "German Zirconia + Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-2.jpg",
        "included": [
          "Hybrid combination: E-Max veneers on front teeth + Zirconia on premolars",
          "Maximum anterior translucency with posterior strength",
          "Bespoke 3D Digital Smile Design",
          "4-Star Luxury Hotel Stay in Istanbul for 6 Nights",
          "VIP Mercedes Chauffeur Service for all transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,300",
          "EUR": "€3,950",
          "GBP": "£3,450"
        }
      },
      {
        "name": "Single Monolithic Zirconia Veneer",
        "brand": "German 3D Pro Multilayer Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/composite-laminate-copy.webp",
        "included": [
          "1x Heavy-Bite Resistant Monolithic Zirconia Veneer",
          "High fracture toughness for patients with mild bruxism",
          "Multi-shade nano-hybrid polishing",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Zirconium laminate veneers and how do they differ from E-Max?",
        "a": [
          "Zirconium laminate veneers are ultra-durable ceramic veneers fabricated from multi-layered German zirconium dioxide (1100+ MPa flexural strength).",
          "While E-Max offers the highest optical translucency for front teeth, Zirconium veneers provide superior fracture resistance, making them ideal for patients with strong bite forces or moderate tooth discoloration."
        ]
      },
      {
        "q": "How much tooth preparation is required for Zirconium veneers?",
        "a": [
          "Modern ultra-translucent Zirconium veneers require only 0.4 mm to 0.6 mm of surface enamel preparation.",
          "Our specialists preserve your natural tooth structure and dental pulp vitality, ensuring complete comfort."
        ]
      },
      {
        "q": "Can Zirconium veneers discolor or stain over time?",
        "a": [
          "No. Highly sintered zirconium dioxide has a non-porous crystalline structure that is 100% impervious to stains from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their initial shade and polished luster permanently."
        ]
      },
      {
        "q": "Are Zirconium veneers suitable for teeth grinders (bruxism)?",
        "a": [
          "Yes! Due to the extraordinary flexural strength of German zirconia, Zirconium veneers are significantly more resistant to chipping and fractures than traditional feldspathic porcelain for patients who clench or grind their teeth.",
          "We also provide a custom-fitted nighttime guard as part of your treatment package."
        ]
      },
      {
        "q": "How many days does the treatment take in Istanbul?",
        "a": [
          "The complete treatment requires 5 to 7 days in Istanbul during a single visit. We handle digital scanning, smile design mock-ups, CAD/CAM milling, and permanent bonding."
        ]
      },
      {
        "q": "What is included in the all-inclusive Zirconium Veneer package?",
        "a": [
          "Our packages include genuine German multi-layer zirconia veneers, 3D Digital Smile Design, 4-star or 5-star hotel accommodation with breakfast, and private VIP Mercedes transfers between Istanbul Airport (IST / SAW), hotel, and our clinic with zero hidden fees."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "High-Strength Zirconium Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with multi-layered German monolithic zirconia, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Zirconium Veneers",
    "faqSubtitle": "Explore answers regarding German multi-layer zirconia veneers, fracture resistance, smile aesthetics, procedure timelines, and international warranties in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> During this single trip, 3D intraoral digital scanning, precision micro-preparation, 5-axis CAD/CAM milling of German zirconia veneers, and final resin cementation are completed.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Istanbul once. Your complete smile makeover (from 4 to 20 Zirconium laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive tooth preparation ensures fast gum tissue healing and immediate functional comfort with zero downtime.",
    "priceEstimate": "<strong>Zirconium Laminate Veneer prices start at £210 / €240 / $260 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Zirconium Veneer",
        "brand": "German Katana / Vita Multi-Layered Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "included": [
          "1x High-Translucency German Multi-Layer Zirconium Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-preparation, local anesthesia & temporary veneer",
          "Custom shade matching & aesthetic glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$260",
          "EUR": "€240",
          "GBP": "£210"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "German Multi-Layered Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "popular": true,
        "included": [
          "8x High-Translucency Zirconium Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Istanbul (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and chipping"
        ],
        "price": {
          "USD": "$2,050",
          "EUR": "€1,850",
          "GBP": "£1,600"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "German Multi-Layered Zirconia (1100+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-3.jpg",
        "included": [
          "16x Custom Zirconium Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Istanbul (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,650",
          "GBP": "£3,150"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "German Katana / Vita Ultra-Translucent Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-3.jpg",
        "included": [
          "20x Ultra-Translucent Zirconium Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      },
      {
        "name": "Combination Smile Makeover (Zirconia + E-Max)",
        "brand": "German Zirconia + Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-2.jpg",
        "included": [
          "Hybrid combination: E-Max veneers on front teeth + Zirconia on premolars",
          "Maximum anterior translucency with posterior strength",
          "Bespoke 3D Digital Smile Design",
          "4-Star Luxury Hotel Stay in Istanbul for 6 Nights",
          "VIP Mercedes Chauffeur Service for all transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,300",
          "EUR": "€3,950",
          "GBP": "£3,450"
        }
      },
      {
        "name": "Single Monolithic Zirconia Veneer",
        "brand": "German 3D Pro Multilayer Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/composite-laminate-copy.webp",
        "included": [
          "1x Heavy-Bite Resistant Monolithic Zirconia Veneer",
          "High fracture toughness for patients with mild bruxism",
          "Multi-shade nano-hybrid polishing",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Zirconium laminate veneers and how do they differ from E-Max?",
        "a": [
          "Zirconium laminate veneers are ultra-durable ceramic veneers fabricated from multi-layered German zirconium dioxide (1100+ MPa flexural strength).",
          "While E-Max offers the highest optical translucency for front teeth, Zirconium veneers provide superior fracture resistance, making them ideal for patients with strong bite forces or moderate tooth discoloration."
        ]
      },
      {
        "q": "How much tooth preparation is required for Zirconium veneers?",
        "a": [
          "Modern ultra-translucent Zirconium veneers require only 0.4 mm to 0.6 mm of surface enamel preparation.",
          "Our specialists preserve your natural tooth structure and dental pulp vitality, ensuring complete comfort."
        ]
      },
      {
        "q": "Can Zirconium veneers discolor or stain over time?",
        "a": [
          "No. Highly sintered zirconium dioxide has a non-porous crystalline structure that is 100% impervious to stains from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their initial shade and polished luster permanently."
        ]
      },
      {
        "q": "Are Zirconium veneers suitable for teeth grinders (bruxism)?",
        "a": [
          "Yes! Due to the extraordinary flexural strength of German zirconia, Zirconium veneers are significantly more resistant to chipping and fractures than traditional feldspathic porcelain for patients who clench or grind their teeth.",
          "We also provide a custom-fitted nighttime guard as part of your treatment package."
        ]
      },
      {
        "q": "How many days does the treatment take in Istanbul?",
        "a": [
          "The complete treatment requires 5 to 7 days in Istanbul during a single visit. We handle digital scanning, smile design mock-ups, CAD/CAM milling, and permanent bonding."
        ]
      },
      {
        "q": "What is included in the all-inclusive Zirconium Veneer package?",
        "a": [
          "Our packages include genuine German multi-layer zirconia veneers, 3D Digital Smile Design, 4-star or 5-star hotel accommodation with breakfast, and private VIP Mercedes transfers between Istanbul Airport (IST / SAW), hotel, and our clinic with zero hidden fees."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "High-Strength Zirconium Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with multi-layered German monolithic zirconia, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Zirconium Veneers",
    "faqSubtitle": "Explore answers regarding German multi-layer zirconia veneers, fracture resistance, smile aesthetics, procedure timelines, and international warranties in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> During this single trip, 3D intraoral digital scanning, precision micro-preparation, 5-axis CAD/CAM milling of German zirconia veneers, and final resin cementation are completed.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Istanbul once. Your complete smile makeover (from 4 to 20 Zirconium laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive tooth preparation ensures fast gum tissue healing and immediate functional comfort with zero downtime.",
    "priceEstimate": "<strong>Zirconium Laminate Veneer prices start at £210 / €240 / $260 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Zirconium Veneer",
        "brand": "German Katana / Vita Multi-Layered Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "included": [
          "1x High-Translucency German Multi-Layer Zirconium Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-preparation, local anesthesia & temporary veneer",
          "Custom shade matching & aesthetic glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$260",
          "EUR": "€240",
          "GBP": "£210"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "German Multi-Layered Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "popular": true,
        "included": [
          "8x High-Translucency Zirconium Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Istanbul (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and chipping"
        ],
        "price": {
          "USD": "$2,050",
          "EUR": "€1,850",
          "GBP": "£1,600"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "German Multi-Layered Zirconia (1100+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-3.jpg",
        "included": [
          "16x Custom Zirconium Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Istanbul (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,650",
          "GBP": "£3,150"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "German Katana / Vita Ultra-Translucent Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-3.jpg",
        "included": [
          "20x Ultra-Translucent Zirconium Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      },
      {
        "name": "Combination Smile Makeover (Zirconia + E-Max)",
        "brand": "German Zirconia + Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-2.jpg",
        "included": [
          "Hybrid combination: E-Max veneers on front teeth + Zirconia on premolars",
          "Maximum anterior translucency with posterior strength",
          "Bespoke 3D Digital Smile Design",
          "4-Star Luxury Hotel Stay in Istanbul for 6 Nights",
          "VIP Mercedes Chauffeur Service for all transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,300",
          "EUR": "€3,950",
          "GBP": "£3,450"
        }
      },
      {
        "name": "Single Monolithic Zirconia Veneer",
        "brand": "German 3D Pro Multilayer Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/composite-laminate-copy.webp",
        "included": [
          "1x Heavy-Bite Resistant Monolithic Zirconia Veneer",
          "High fracture toughness for patients with mild bruxism",
          "Multi-shade nano-hybrid polishing",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Zirconium laminate veneers and how do they differ from E-Max?",
        "a": [
          "Zirconium laminate veneers are ultra-durable ceramic veneers fabricated from multi-layered German zirconium dioxide (1100+ MPa flexural strength).",
          "While E-Max offers the highest optical translucency for front teeth, Zirconium veneers provide superior fracture resistance, making them ideal for patients with strong bite forces or moderate tooth discoloration."
        ]
      },
      {
        "q": "How much tooth preparation is required for Zirconium veneers?",
        "a": [
          "Modern ultra-translucent Zirconium veneers require only 0.4 mm to 0.6 mm of surface enamel preparation.",
          "Our specialists preserve your natural tooth structure and dental pulp vitality, ensuring complete comfort."
        ]
      },
      {
        "q": "Can Zirconium veneers discolor or stain over time?",
        "a": [
          "No. Highly sintered zirconium dioxide has a non-porous crystalline structure that is 100% impervious to stains from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their initial shade and polished luster permanently."
        ]
      },
      {
        "q": "Are Zirconium veneers suitable for teeth grinders (bruxism)?",
        "a": [
          "Yes! Due to the extraordinary flexural strength of German zirconia, Zirconium veneers are significantly more resistant to chipping and fractures than traditional feldspathic porcelain for patients who clench or grind their teeth.",
          "We also provide a custom-fitted nighttime guard as part of your treatment package."
        ]
      },
      {
        "q": "How many days does the treatment take in Istanbul?",
        "a": [
          "The complete treatment requires 5 to 7 days in Istanbul during a single visit. We handle digital scanning, smile design mock-ups, CAD/CAM milling, and permanent bonding."
        ]
      },
      {
        "q": "What is included in the all-inclusive Zirconium Veneer package?",
        "a": [
          "Our packages include genuine German multi-layer zirconia veneers, 3D Digital Smile Design, 4-star or 5-star hotel accommodation with breakfast, and private VIP Mercedes transfers between Istanbul Airport (IST / SAW), hotel, and our clinic with zero hidden fees."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "High-Strength Zirconium Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with multi-layered German monolithic zirconia, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Zirconium Veneers",
    "faqSubtitle": "Explore answers regarding German multi-layer zirconia veneers, fracture resistance, smile aesthetics, procedure timelines, and international warranties in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> During this single trip, 3D intraoral digital scanning, precision micro-preparation, 5-axis CAD/CAM milling of German zirconia veneers, and final resin cementation are completed.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Istanbul once. Your complete smile makeover (from 4 to 20 Zirconium laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive tooth preparation ensures fast gum tissue healing and immediate functional comfort with zero downtime.",
    "priceEstimate": "<strong>Zirconium Laminate Veneer prices start at £210 / €240 / $260 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Zirconium Veneer",
        "brand": "German Katana / Vita Multi-Layered Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "included": [
          "1x High-Translucency German Multi-Layer Zirconium Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-preparation, local anesthesia & temporary veneer",
          "Custom shade matching & aesthetic glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$260",
          "EUR": "€240",
          "GBP": "£210"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "German Multi-Layered Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "popular": true,
        "included": [
          "8x High-Translucency Zirconium Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Istanbul (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and chipping"
        ],
        "price": {
          "USD": "$2,050",
          "EUR": "€1,850",
          "GBP": "£1,600"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "German Multi-Layered Zirconia (1100+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-3.jpg",
        "included": [
          "16x Custom Zirconium Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Istanbul (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,650",
          "GBP": "£3,150"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "German Katana / Vita Ultra-Translucent Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-3.jpg",
        "included": [
          "20x Ultra-Translucent Zirconium Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      },
      {
        "name": "Combination Smile Makeover (Zirconia + E-Max)",
        "brand": "German Zirconia + Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-2.jpg",
        "included": [
          "Hybrid combination: E-Max veneers on front teeth + Zirconia on premolars",
          "Maximum anterior translucency with posterior strength",
          "Bespoke 3D Digital Smile Design",
          "4-Star Luxury Hotel Stay in Istanbul for 6 Nights",
          "VIP Mercedes Chauffeur Service for all transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,300",
          "EUR": "€3,950",
          "GBP": "£3,450"
        }
      },
      {
        "name": "Single Monolithic Zirconia Veneer",
        "brand": "German 3D Pro Multilayer Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/composite-laminate-copy.webp",
        "included": [
          "1x Heavy-Bite Resistant Monolithic Zirconia Veneer",
          "High fracture toughness for patients with mild bruxism",
          "Multi-shade nano-hybrid polishing",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Zirconium laminate veneers and how do they differ from E-Max?",
        "a": [
          "Zirconium laminate veneers are ultra-durable ceramic veneers fabricated from multi-layered German zirconium dioxide (1100+ MPa flexural strength).",
          "While E-Max offers the highest optical translucency for front teeth, Zirconium veneers provide superior fracture resistance, making them ideal for patients with strong bite forces or moderate tooth discoloration."
        ]
      },
      {
        "q": "How much tooth preparation is required for Zirconium veneers?",
        "a": [
          "Modern ultra-translucent Zirconium veneers require only 0.4 mm to 0.6 mm of surface enamel preparation.",
          "Our specialists preserve your natural tooth structure and dental pulp vitality, ensuring complete comfort."
        ]
      },
      {
        "q": "Can Zirconium veneers discolor or stain over time?",
        "a": [
          "No. Highly sintered zirconium dioxide has a non-porous crystalline structure that is 100% impervious to stains from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their initial shade and polished luster permanently."
        ]
      },
      {
        "q": "Are Zirconium veneers suitable for teeth grinders (bruxism)?",
        "a": [
          "Yes! Due to the extraordinary flexural strength of German zirconia, Zirconium veneers are significantly more resistant to chipping and fractures than traditional feldspathic porcelain for patients who clench or grind their teeth.",
          "We also provide a custom-fitted nighttime guard as part of your treatment package."
        ]
      },
      {
        "q": "How many days does the treatment take in Istanbul?",
        "a": [
          "The complete treatment requires 5 to 7 days in Istanbul during a single visit. We handle digital scanning, smile design mock-ups, CAD/CAM milling, and permanent bonding."
        ]
      },
      {
        "q": "What is included in the all-inclusive Zirconium Veneer package?",
        "a": [
          "Our packages include genuine German multi-layer zirconia veneers, 3D Digital Smile Design, 4-star or 5-star hotel accommodation with breakfast, and private VIP Mercedes transfers between Istanbul Airport (IST / SAW), hotel, and our clinic with zero hidden fees."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "High-Strength Zirconium Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with multi-layered German monolithic zirconia, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Zirconium Veneers",
    "faqSubtitle": "Explore answers regarding German multi-layer zirconia veneers, fracture resistance, smile aesthetics, procedure timelines, and international warranties in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> During this single trip, 3D intraoral digital scanning, precision micro-preparation, 5-axis CAD/CAM milling of German zirconia veneers, and final resin cementation are completed.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Istanbul once. Your complete smile makeover (from 4 to 20 Zirconium laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive tooth preparation ensures fast gum tissue healing and immediate functional comfort with zero downtime.",
    "priceEstimate": "<strong>Zirconium Laminate Veneer prices start at £210 / €240 / $260 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Zirconium Veneer",
        "brand": "German Katana / Vita Multi-Layered Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "included": [
          "1x High-Translucency German Multi-Layer Zirconium Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-preparation, local anesthesia & temporary veneer",
          "Custom shade matching & aesthetic glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$260",
          "EUR": "€240",
          "GBP": "£210"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "German Multi-Layered Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "popular": true,
        "included": [
          "8x High-Translucency Zirconium Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Istanbul (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and chipping"
        ],
        "price": {
          "USD": "$2,050",
          "EUR": "€1,850",
          "GBP": "£1,600"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "German Multi-Layered Zirconia (1100+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-3.jpg",
        "included": [
          "16x Custom Zirconium Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Istanbul (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,650",
          "GBP": "£3,150"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "German Katana / Vita Ultra-Translucent Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-3.jpg",
        "included": [
          "20x Ultra-Translucent Zirconium Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      },
      {
        "name": "Combination Smile Makeover (Zirconia + E-Max)",
        "brand": "German Zirconia + Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-2.jpg",
        "included": [
          "Hybrid combination: E-Max veneers on front teeth + Zirconia on premolars",
          "Maximum anterior translucency with posterior strength",
          "Bespoke 3D Digital Smile Design",
          "4-Star Luxury Hotel Stay in Istanbul for 6 Nights",
          "VIP Mercedes Chauffeur Service for all transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,300",
          "EUR": "€3,950",
          "GBP": "£3,450"
        }
      },
      {
        "name": "Single Monolithic Zirconia Veneer",
        "brand": "German 3D Pro Multilayer Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/composite-laminate-copy.webp",
        "included": [
          "1x Heavy-Bite Resistant Monolithic Zirconia Veneer",
          "High fracture toughness for patients with mild bruxism",
          "Multi-shade nano-hybrid polishing",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Zirconium laminate veneers and how do they differ from E-Max?",
        "a": [
          "Zirconium laminate veneers are ultra-durable ceramic veneers fabricated from multi-layered German zirconium dioxide (1100+ MPa flexural strength).",
          "While E-Max offers the highest optical translucency for front teeth, Zirconium veneers provide superior fracture resistance, making them ideal for patients with strong bite forces or moderate tooth discoloration."
        ]
      },
      {
        "q": "How much tooth preparation is required for Zirconium veneers?",
        "a": [
          "Modern ultra-translucent Zirconium veneers require only 0.4 mm to 0.6 mm of surface enamel preparation.",
          "Our specialists preserve your natural tooth structure and dental pulp vitality, ensuring complete comfort."
        ]
      },
      {
        "q": "Can Zirconium veneers discolor or stain over time?",
        "a": [
          "No. Highly sintered zirconium dioxide has a non-porous crystalline structure that is 100% impervious to stains from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their initial shade and polished luster permanently."
        ]
      },
      {
        "q": "Are Zirconium veneers suitable for teeth grinders (bruxism)?",
        "a": [
          "Yes! Due to the extraordinary flexural strength of German zirconia, Zirconium veneers are significantly more resistant to chipping and fractures than traditional feldspathic porcelain for patients who clench or grind their teeth.",
          "We also provide a custom-fitted nighttime guard as part of your treatment package."
        ]
      },
      {
        "q": "How many days does the treatment take in Istanbul?",
        "a": [
          "The complete treatment requires 5 to 7 days in Istanbul during a single visit. We handle digital scanning, smile design mock-ups, CAD/CAM milling, and permanent bonding."
        ]
      },
      {
        "q": "What is included in the all-inclusive Zirconium Veneer package?",
        "a": [
          "Our packages include genuine German multi-layer zirconia veneers, 3D Digital Smile Design, 4-star or 5-star hotel accommodation with breakfast, and private VIP Mercedes transfers between Istanbul Airport (IST / SAW), hotel, and our clinic with zero hidden fees."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "High-Strength Zirconium Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with multi-layered German monolithic zirconia, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Zirconium Veneers",
    "faqSubtitle": "Explore answers regarding German multi-layer zirconia veneers, fracture resistance, smile aesthetics, procedure timelines, and international warranties in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> During this single trip, 3D intraoral digital scanning, precision micro-preparation, 5-axis CAD/CAM milling of German zirconia veneers, and final resin cementation are completed.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Istanbul once. Your complete smile makeover (from 4 to 20 Zirconium laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive tooth preparation ensures fast gum tissue healing and immediate functional comfort with zero downtime.",
    "priceEstimate": "<strong>Zirconium Laminate Veneer prices start at £210 / €240 / $260 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Zirconium Veneer",
        "brand": "German Katana / Vita Multi-Layered Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "included": [
          "1x High-Translucency German Multi-Layer Zirconium Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-preparation, local anesthesia & temporary veneer",
          "Custom shade matching & aesthetic glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$260",
          "EUR": "€240",
          "GBP": "£210"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "German Multi-Layered Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "popular": true,
        "included": [
          "8x High-Translucency Zirconium Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Istanbul (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and chipping"
        ],
        "price": {
          "USD": "$2,050",
          "EUR": "€1,850",
          "GBP": "£1,600"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "German Multi-Layered Zirconia (1100+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-3.jpg",
        "included": [
          "16x Custom Zirconium Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Istanbul (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$3,950",
          "EUR": "€3,650",
          "GBP": "£3,150"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "German Katana / Vita Ultra-Translucent Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-3.jpg",
        "included": [
          "20x Ultra-Translucent Zirconium Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      },
      {
        "name": "Combination Smile Makeover (Zirconia + E-Max)",
        "brand": "German Zirconia + Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-2.jpg",
        "included": [
          "Hybrid combination: E-Max veneers on front teeth + Zirconia on premolars",
          "Maximum anterior translucency with posterior strength",
          "Bespoke 3D Digital Smile Design",
          "4-Star Luxury Hotel Stay in Istanbul for 6 Nights",
          "VIP Mercedes Chauffeur Service for all transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,300",
          "EUR": "€3,950",
          "GBP": "£3,450"
        }
      },
      {
        "name": "Single Monolithic Zirconia Veneer",
        "brand": "German 3D Pro Multilayer Zirconia",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/composite-laminate-copy.webp",
        "included": [
          "1x Heavy-Bite Resistant Monolithic Zirconia Veneer",
          "High fracture toughness for patients with mild bruxism",
          "Multi-shade nano-hybrid polishing",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Zirconium laminate veneers and how do they differ from E-Max?",
        "a": [
          "Zirconium laminate veneers are ultra-durable ceramic veneers fabricated from multi-layered German zirconium dioxide (1100+ MPa flexural strength).",
          "While E-Max offers the highest optical translucency for front teeth, Zirconium veneers provide superior fracture resistance, making them ideal for patients with strong bite forces or moderate tooth discoloration."
        ]
      },
      {
        "q": "How much tooth preparation is required for Zirconium veneers?",
        "a": [
          "Modern ultra-translucent Zirconium veneers require only 0.4 mm to 0.6 mm of surface enamel preparation.",
          "Our specialists preserve your natural tooth structure and dental pulp vitality, ensuring complete comfort."
        ]
      },
      {
        "q": "Can Zirconium veneers discolor or stain over time?",
        "a": [
          "No. Highly sintered zirconium dioxide has a non-porous crystalline structure that is 100% impervious to stains from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their initial shade and polished luster permanently."
        ]
      },
      {
        "q": "Are Zirconium veneers suitable for teeth grinders (bruxism)?",
        "a": [
          "Yes! Due to the extraordinary flexural strength of German zirconia, Zirconium veneers are significantly more resistant to chipping and fractures than traditional feldspathic porcelain for patients who clench or grind their teeth.",
          "We also provide a custom-fitted nighttime guard as part of your treatment package."
        ]
      },
      {
        "q": "How many days does the treatment take in Istanbul?",
        "a": [
          "The complete treatment requires 5 to 7 days in Istanbul during a single visit. We handle digital scanning, smile design mock-ups, CAD/CAM milling, and permanent bonding."
        ]
      },
      {
        "q": "What is included in the all-inclusive Zirconium Veneer package?",
        "a": [
          "Our packages include genuine German multi-layer zirconia veneers, 3D Digital Smile Design, 4-star or 5-star hotel accommodation with breakfast, and private VIP Mercedes transfers between Istanbul Airport (IST / SAW), hotel, and our clinic with zero hidden fees."
        ]
      }
    ]
  }
};

export default function ZirconiumVeneersDetailView() {
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
      {/* 1. FIND THE RIGHT TREATMENT ACCORDION (VENEERS ACCORDION) */}
      <TreatmentVeneerRightTreatmentAccordion />

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
      <section aria-labelledby="zirconium-veneers-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="zirconium-veneers-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="zirconium-veneers-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="zirconium-veneers-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`zirconium-veneers-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`zirconium-veneers-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Zirconium Veneers" />
      </div>
    </div>
  );
}
