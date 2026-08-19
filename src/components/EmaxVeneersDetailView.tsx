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
import styles from './EmaxVeneersDetailView.module.css';

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
    "packagesTitle": "Swiss Ivoclar E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with genuine Swiss Ivoclar IPS e.max lithium disilicate, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Veneers",
    "faqSubtitle": "Detailed clinical answers regarding Swiss Ivoclar IPS e.max lithium disilicate veneers, translucency, preparation thickness, treatment timelines, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 E-Max laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Swiss Ivoclar E-Max Veneer prices start at £250 / €285 / $310 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Veneer (Ivoclar IPS e.max)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$310",
          "EUR": "€285",
          "GBP": "£250"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x High-Translucency E-Max Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and porcelain chipping"
        ],
        "price": {
          "USD": "$2,450",
          "EUR": "€2,250",
          "GBP": "£1,950"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom E-Max Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,800"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,750",
          "EUR": "€5,290",
          "GBP": "£4,600"
        }
      },
      {
        "name": "Single Lumineers (Prepless / Ultra-Thin)",
        "brand": "Cerinate / E-Max Ultra-Thin (0.2 mm)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/treatments/accordion/lumineers.webp",
        "included": [
          "1x Ultra-Thin Prepless Lumineer Veneer (No Drilling / No Injections)",
          "High-Precision 3D Digital Intraoral Impression",
          "Zero enamel loss & 100% reversible procedure",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$385",
          "EUR": "€350",
          "GBP": "£310"
        }
      },
      {
        "name": "Combination Makeover (10 E-Max + Laser Whitening)",
        "brand": "Swiss Ivoclar IPS e.max + Philips Zoom Laser",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "10x E-Max Laminate Veneers for Upper Visible Smile",
          "Philips Zoom 2 Laser In-Clinic Whitening for Lower Arch",
          "Aesthetic shade harmonisation across both jaws",
          "4-Star Luxury Hotel Accommodation for 6 Nights",
          "VIP Mercedes Chauffeur Transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$3,250",
          "EUR": "€2,950",
          "GBP": "£2,550"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes Swiss Ivoclar IPS e.max veneers superior to traditional porcelain?",
        "a": [
          "IPS e.max is a patented lithium disilicate glass-ceramic with unmatched optical translucency and light refraction properties that mirror natural human tooth enamel.",
          "Unlike older feldspathic porcelain that requires thicker preparation, E-Max achieves exceptional flexural strength (500+ MPa) even at ultra-thin 0.3 mm thicknesses."
        ]
      },
      {
        "q": "How much tooth shaving is required for E-Max laminate veneers?",
        "a": [
          "E-Max veneers are ultra-conservative, requiring only 0.3 mm to 0.5 mm of surface enamel smoothing—less than half the thickness of a typical fingernail.",
          "The preparation stays completely within the enamel layer, preserving your tooth's internal nerve and dental vitality."
        ]
      },
      {
        "q": "How long will my E-Max veneers last?",
        "a": [
          "With good oral hygiene and standard 6-month dental checkups, Swiss E-Max laminate veneers typically last 15 to 25+ years without loss of color, gloss, or structural integrity.",
          "All E-Max veneer treatments at Master Smile Studio are backed by our official 10-Year International Clinical Warranty."
        ]
      },
      {
        "q": "Do E-Max veneers stain from smoking, coffee, or tea?",
        "a": [
          "No. E-Max lithium disilicate is completely non-porous and glass-smooth. It will never absorb color pigments from coffee, tea, red wine, or tobacco.",
          "Your smile will maintain the exact shade selected on Day 1 for decades."
        ]
      },
      {
        "q": "How many days do I need to stay in Antalya for E-Max veneers?",
        "a": [
          "A standard E-Max smile makeover requires 5 to 7 days in Antalya. During this single visit, we perform the 3D digital scan, custom smile design, shade matching trial, CAD/CAM ceramic milling, and final resin bonding."
        ]
      },
      {
        "q": "What is included in the E-Max Veneers all-inclusive package?",
        "a": [
          "Our smile makeover packages include authentic Swiss Ivoclar IPS e.max veneers, 3D Digital Smile Design, 4/5-star luxury hotel accommodation with breakfast, and private VIP Mercedes transfers between Antalya Airport (IST / SAW), hotel, and our clinic.",
          "There are no hidden costs, consultation fees, or unexpected lab charges."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "İsviçre Ivoclar E-Max Lamina Diş Kaplama Paketleri",
    "packagesSubtitle": "Orijinal İsviçre Ivoclar Vivadent IPS e.max lityum disilikat, otel konaklaması ve VIP transfer dahil her şey dahil yaprak porselen paketleri.",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket İçeriği:",
    "priceLabel": "Her Şey Dahil Fiyat:",
    "getQuoteBtn": "Ücretsiz Fiyat Teklifi Al",
    "faqTitle": "E-Max Lamina (Yaprak Porselen) Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Antalya'da İsviçre Ivoclar IPS e.max lityum disilikat kaplama, diş kesim miktarı, leke tutmazlık, tedavi süresi ve garanti koşulları hakkında en çok merak edilen soruların yanıtları.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 E-Max laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Swiss Ivoclar E-Max Veneer prices start at £250 / €285 / $310 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Veneer (Ivoclar IPS e.max)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$310",
          "EUR": "€285",
          "GBP": "£250"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x High-Translucency E-Max Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and porcelain chipping"
        ],
        "price": {
          "USD": "$2,450",
          "EUR": "€2,250",
          "GBP": "£1,950"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom E-Max Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,800"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,750",
          "EUR": "€5,290",
          "GBP": "£4,600"
        }
      },
      {
        "name": "Single Lumineers (Prepless / Ultra-Thin)",
        "brand": "Cerinate / E-Max Ultra-Thin (0.2 mm)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/treatments/accordion/lumineers.webp",
        "included": [
          "1x Ultra-Thin Prepless Lumineer Veneer (No Drilling / No Injections)",
          "High-Precision 3D Digital Intraoral Impression",
          "Zero enamel loss & 100% reversible procedure",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$385",
          "EUR": "€350",
          "GBP": "£310"
        }
      },
      {
        "name": "Combination Makeover (10 E-Max + Laser Whitening)",
        "brand": "Swiss Ivoclar IPS e.max + Philips Zoom Laser",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "10x E-Max Laminate Veneers for Upper Visible Smile",
          "Philips Zoom 2 Laser In-Clinic Whitening for Lower Arch",
          "Aesthetic shade harmonisation across both jaws",
          "4-Star Luxury Hotel Accommodation for 6 Nights",
          "VIP Mercedes Chauffeur Transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$3,250",
          "EUR": "€2,950",
          "GBP": "£2,550"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes Swiss Ivoclar IPS e.max veneers superior to traditional porcelain?",
        "a": [
          "IPS e.max is a patented lithium disilicate glass-ceramic with unmatched optical translucency and light refraction properties that mirror natural human tooth enamel.",
          "Unlike older feldspathic porcelain that requires thicker preparation, E-Max achieves exceptional flexural strength (500+ MPa) even at ultra-thin 0.3 mm thicknesses."
        ]
      },
      {
        "q": "How much tooth shaving is required for E-Max laminate veneers?",
        "a": [
          "E-Max veneers are ultra-conservative, requiring only 0.3 mm to 0.5 mm of surface enamel smoothing—less than half the thickness of a typical fingernail.",
          "The preparation stays completely within the enamel layer, preserving your tooth's internal nerve and dental vitality."
        ]
      },
      {
        "q": "How long will my E-Max veneers last?",
        "a": [
          "With good oral hygiene and standard 6-month dental checkups, Swiss E-Max laminate veneers typically last 15 to 25+ years without loss of color, gloss, or structural integrity.",
          "All E-Max veneer treatments at Master Smile Studio are backed by our official 10-Year International Clinical Warranty."
        ]
      },
      {
        "q": "Do E-Max veneers stain from smoking, coffee, or tea?",
        "a": [
          "No. E-Max lithium disilicate is completely non-porous and glass-smooth. It will never absorb color pigments from coffee, tea, red wine, or tobacco.",
          "Your smile will maintain the exact shade selected on Day 1 for decades."
        ]
      },
      {
        "q": "How many days do I need to stay in Antalya for E-Max veneers?",
        "a": [
          "A standard E-Max smile makeover requires 5 to 7 days in Antalya. During this single visit, we perform the 3D digital scan, custom smile design, shade matching trial, CAD/CAM ceramic milling, and final resin bonding."
        ]
      },
      {
        "q": "What is included in the E-Max Veneers all-inclusive package?",
        "a": [
          "Our smile makeover packages include authentic Swiss Ivoclar IPS e.max veneers, 3D Digital Smile Design, 4/5-star luxury hotel accommodation with breakfast, and private VIP Mercedes transfers between Antalya Airport (IST / SAW), hotel, and our clinic.",
          "There are no hidden costs, consultation fees, or unexpected lab charges."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "Swiss Ivoclar E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with genuine Swiss Ivoclar IPS e.max lithium disilicate, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Veneers",
    "faqSubtitle": "Detailed clinical answers regarding Swiss Ivoclar IPS e.max lithium disilicate veneers, translucency, preparation thickness, treatment timelines, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 E-Max laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Swiss Ivoclar E-Max Veneer prices start at £250 / €285 / $310 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Veneer (Ivoclar IPS e.max)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$310",
          "EUR": "€285",
          "GBP": "£250"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x High-Translucency E-Max Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and porcelain chipping"
        ],
        "price": {
          "USD": "$2,450",
          "EUR": "€2,250",
          "GBP": "£1,950"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom E-Max Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,800"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,750",
          "EUR": "€5,290",
          "GBP": "£4,600"
        }
      },
      {
        "name": "Single Lumineers (Prepless / Ultra-Thin)",
        "brand": "Cerinate / E-Max Ultra-Thin (0.2 mm)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/treatments/accordion/lumineers.webp",
        "included": [
          "1x Ultra-Thin Prepless Lumineer Veneer (No Drilling / No Injections)",
          "High-Precision 3D Digital Intraoral Impression",
          "Zero enamel loss & 100% reversible procedure",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$385",
          "EUR": "€350",
          "GBP": "£310"
        }
      },
      {
        "name": "Combination Makeover (10 E-Max + Laser Whitening)",
        "brand": "Swiss Ivoclar IPS e.max + Philips Zoom Laser",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "10x E-Max Laminate Veneers for Upper Visible Smile",
          "Philips Zoom 2 Laser In-Clinic Whitening for Lower Arch",
          "Aesthetic shade harmonisation across both jaws",
          "4-Star Luxury Hotel Accommodation for 6 Nights",
          "VIP Mercedes Chauffeur Transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$3,250",
          "EUR": "€2,950",
          "GBP": "£2,550"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes Swiss Ivoclar IPS e.max veneers superior to traditional porcelain?",
        "a": [
          "IPS e.max is a patented lithium disilicate glass-ceramic with unmatched optical translucency and light refraction properties that mirror natural human tooth enamel.",
          "Unlike older feldspathic porcelain that requires thicker preparation, E-Max achieves exceptional flexural strength (500+ MPa) even at ultra-thin 0.3 mm thicknesses."
        ]
      },
      {
        "q": "How much tooth shaving is required for E-Max laminate veneers?",
        "a": [
          "E-Max veneers are ultra-conservative, requiring only 0.3 mm to 0.5 mm of surface enamel smoothing—less than half the thickness of a typical fingernail.",
          "The preparation stays completely within the enamel layer, preserving your tooth's internal nerve and dental vitality."
        ]
      },
      {
        "q": "How long will my E-Max veneers last?",
        "a": [
          "With good oral hygiene and standard 6-month dental checkups, Swiss E-Max laminate veneers typically last 15 to 25+ years without loss of color, gloss, or structural integrity.",
          "All E-Max veneer treatments at Master Smile Studio are backed by our official 10-Year International Clinical Warranty."
        ]
      },
      {
        "q": "Do E-Max veneers stain from smoking, coffee, or tea?",
        "a": [
          "No. E-Max lithium disilicate is completely non-porous and glass-smooth. It will never absorb color pigments from coffee, tea, red wine, or tobacco.",
          "Your smile will maintain the exact shade selected on Day 1 for decades."
        ]
      },
      {
        "q": "How many days do I need to stay in Antalya for E-Max veneers?",
        "a": [
          "A standard E-Max smile makeover requires 5 to 7 days in Antalya. During this single visit, we perform the 3D digital scan, custom smile design, shade matching trial, CAD/CAM ceramic milling, and final resin bonding."
        ]
      },
      {
        "q": "What is included in the E-Max Veneers all-inclusive package?",
        "a": [
          "Our smile makeover packages include authentic Swiss Ivoclar IPS e.max veneers, 3D Digital Smile Design, 4/5-star luxury hotel accommodation with breakfast, and private VIP Mercedes transfers between Antalya Airport (IST / SAW), hotel, and our clinic.",
          "There are no hidden costs, consultation fees, or unexpected lab charges."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "Swiss Ivoclar E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with genuine Swiss Ivoclar IPS e.max lithium disilicate, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Veneers",
    "faqSubtitle": "Detailed clinical answers regarding Swiss Ivoclar IPS e.max lithium disilicate veneers, translucency, preparation thickness, treatment timelines, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 E-Max laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Swiss Ivoclar E-Max Veneer prices start at £250 / €285 / $310 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Veneer (Ivoclar IPS e.max)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$310",
          "EUR": "€285",
          "GBP": "£250"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x High-Translucency E-Max Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and porcelain chipping"
        ],
        "price": {
          "USD": "$2,450",
          "EUR": "€2,250",
          "GBP": "£1,950"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom E-Max Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,800"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,750",
          "EUR": "€5,290",
          "GBP": "£4,600"
        }
      },
      {
        "name": "Single Lumineers (Prepless / Ultra-Thin)",
        "brand": "Cerinate / E-Max Ultra-Thin (0.2 mm)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/treatments/accordion/lumineers.webp",
        "included": [
          "1x Ultra-Thin Prepless Lumineer Veneer (No Drilling / No Injections)",
          "High-Precision 3D Digital Intraoral Impression",
          "Zero enamel loss & 100% reversible procedure",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$385",
          "EUR": "€350",
          "GBP": "£310"
        }
      },
      {
        "name": "Combination Makeover (10 E-Max + Laser Whitening)",
        "brand": "Swiss Ivoclar IPS e.max + Philips Zoom Laser",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "10x E-Max Laminate Veneers for Upper Visible Smile",
          "Philips Zoom 2 Laser In-Clinic Whitening for Lower Arch",
          "Aesthetic shade harmonisation across both jaws",
          "4-Star Luxury Hotel Accommodation for 6 Nights",
          "VIP Mercedes Chauffeur Transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$3,250",
          "EUR": "€2,950",
          "GBP": "£2,550"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes Swiss Ivoclar IPS e.max veneers superior to traditional porcelain?",
        "a": [
          "IPS e.max is a patented lithium disilicate glass-ceramic with unmatched optical translucency and light refraction properties that mirror natural human tooth enamel.",
          "Unlike older feldspathic porcelain that requires thicker preparation, E-Max achieves exceptional flexural strength (500+ MPa) even at ultra-thin 0.3 mm thicknesses."
        ]
      },
      {
        "q": "How much tooth shaving is required for E-Max laminate veneers?",
        "a": [
          "E-Max veneers are ultra-conservative, requiring only 0.3 mm to 0.5 mm of surface enamel smoothing—less than half the thickness of a typical fingernail.",
          "The preparation stays completely within the enamel layer, preserving your tooth's internal nerve and dental vitality."
        ]
      },
      {
        "q": "How long will my E-Max veneers last?",
        "a": [
          "With good oral hygiene and standard 6-month dental checkups, Swiss E-Max laminate veneers typically last 15 to 25+ years without loss of color, gloss, or structural integrity.",
          "All E-Max veneer treatments at Master Smile Studio are backed by our official 10-Year International Clinical Warranty."
        ]
      },
      {
        "q": "Do E-Max veneers stain from smoking, coffee, or tea?",
        "a": [
          "No. E-Max lithium disilicate is completely non-porous and glass-smooth. It will never absorb color pigments from coffee, tea, red wine, or tobacco.",
          "Your smile will maintain the exact shade selected on Day 1 for decades."
        ]
      },
      {
        "q": "How many days do I need to stay in Antalya for E-Max veneers?",
        "a": [
          "A standard E-Max smile makeover requires 5 to 7 days in Antalya. During this single visit, we perform the 3D digital scan, custom smile design, shade matching trial, CAD/CAM ceramic milling, and final resin bonding."
        ]
      },
      {
        "q": "What is included in the E-Max Veneers all-inclusive package?",
        "a": [
          "Our smile makeover packages include authentic Swiss Ivoclar IPS e.max veneers, 3D Digital Smile Design, 4/5-star luxury hotel accommodation with breakfast, and private VIP Mercedes transfers between Antalya Airport (IST / SAW), hotel, and our clinic.",
          "There are no hidden costs, consultation fees, or unexpected lab charges."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "Swiss Ivoclar E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with genuine Swiss Ivoclar IPS e.max lithium disilicate, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Veneers",
    "faqSubtitle": "Detailed clinical answers regarding Swiss Ivoclar IPS e.max lithium disilicate veneers, translucency, preparation thickness, treatment timelines, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 E-Max laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Swiss Ivoclar E-Max Veneer prices start at £250 / €285 / $310 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Veneer (Ivoclar IPS e.max)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$310",
          "EUR": "€285",
          "GBP": "£250"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x High-Translucency E-Max Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and porcelain chipping"
        ],
        "price": {
          "USD": "$2,450",
          "EUR": "€2,250",
          "GBP": "£1,950"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom E-Max Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,800"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,750",
          "EUR": "€5,290",
          "GBP": "£4,600"
        }
      },
      {
        "name": "Single Lumineers (Prepless / Ultra-Thin)",
        "brand": "Cerinate / E-Max Ultra-Thin (0.2 mm)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/treatments/accordion/lumineers.webp",
        "included": [
          "1x Ultra-Thin Prepless Lumineer Veneer (No Drilling / No Injections)",
          "High-Precision 3D Digital Intraoral Impression",
          "Zero enamel loss & 100% reversible procedure",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$385",
          "EUR": "€350",
          "GBP": "£310"
        }
      },
      {
        "name": "Combination Makeover (10 E-Max + Laser Whitening)",
        "brand": "Swiss Ivoclar IPS e.max + Philips Zoom Laser",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "10x E-Max Laminate Veneers for Upper Visible Smile",
          "Philips Zoom 2 Laser In-Clinic Whitening for Lower Arch",
          "Aesthetic shade harmonisation across both jaws",
          "4-Star Luxury Hotel Accommodation for 6 Nights",
          "VIP Mercedes Chauffeur Transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$3,250",
          "EUR": "€2,950",
          "GBP": "£2,550"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes Swiss Ivoclar IPS e.max veneers superior to traditional porcelain?",
        "a": [
          "IPS e.max is a patented lithium disilicate glass-ceramic with unmatched optical translucency and light refraction properties that mirror natural human tooth enamel.",
          "Unlike older feldspathic porcelain that requires thicker preparation, E-Max achieves exceptional flexural strength (500+ MPa) even at ultra-thin 0.3 mm thicknesses."
        ]
      },
      {
        "q": "How much tooth shaving is required for E-Max laminate veneers?",
        "a": [
          "E-Max veneers are ultra-conservative, requiring only 0.3 mm to 0.5 mm of surface enamel smoothing—less than half the thickness of a typical fingernail.",
          "The preparation stays completely within the enamel layer, preserving your tooth's internal nerve and dental vitality."
        ]
      },
      {
        "q": "How long will my E-Max veneers last?",
        "a": [
          "With good oral hygiene and standard 6-month dental checkups, Swiss E-Max laminate veneers typically last 15 to 25+ years without loss of color, gloss, or structural integrity.",
          "All E-Max veneer treatments at Master Smile Studio are backed by our official 10-Year International Clinical Warranty."
        ]
      },
      {
        "q": "Do E-Max veneers stain from smoking, coffee, or tea?",
        "a": [
          "No. E-Max lithium disilicate is completely non-porous and glass-smooth. It will never absorb color pigments from coffee, tea, red wine, or tobacco.",
          "Your smile will maintain the exact shade selected on Day 1 for decades."
        ]
      },
      {
        "q": "How many days do I need to stay in Antalya for E-Max veneers?",
        "a": [
          "A standard E-Max smile makeover requires 5 to 7 days in Antalya. During this single visit, we perform the 3D digital scan, custom smile design, shade matching trial, CAD/CAM ceramic milling, and final resin bonding."
        ]
      },
      {
        "q": "What is included in the E-Max Veneers all-inclusive package?",
        "a": [
          "Our smile makeover packages include authentic Swiss Ivoclar IPS e.max veneers, 3D Digital Smile Design, 4/5-star luxury hotel accommodation with breakfast, and private VIP Mercedes transfers between Antalya Airport (IST / SAW), hotel, and our clinic.",
          "There are no hidden costs, consultation fees, or unexpected lab charges."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "Swiss Ivoclar E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with genuine Swiss Ivoclar IPS e.max lithium disilicate, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Veneers",
    "faqSubtitle": "Detailed clinical answers regarding Swiss Ivoclar IPS e.max lithium disilicate veneers, translucency, preparation thickness, treatment timelines, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 E-Max laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Swiss Ivoclar E-Max Veneer prices start at £250 / €285 / $310 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Veneer (Ivoclar IPS e.max)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$310",
          "EUR": "€285",
          "GBP": "£250"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x High-Translucency E-Max Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and porcelain chipping"
        ],
        "price": {
          "USD": "$2,450",
          "EUR": "€2,250",
          "GBP": "£1,950"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom E-Max Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,800"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,750",
          "EUR": "€5,290",
          "GBP": "£4,600"
        }
      },
      {
        "name": "Single Lumineers (Prepless / Ultra-Thin)",
        "brand": "Cerinate / E-Max Ultra-Thin (0.2 mm)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/treatments/accordion/lumineers.webp",
        "included": [
          "1x Ultra-Thin Prepless Lumineer Veneer (No Drilling / No Injections)",
          "High-Precision 3D Digital Intraoral Impression",
          "Zero enamel loss & 100% reversible procedure",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$385",
          "EUR": "€350",
          "GBP": "£310"
        }
      },
      {
        "name": "Combination Makeover (10 E-Max + Laser Whitening)",
        "brand": "Swiss Ivoclar IPS e.max + Philips Zoom Laser",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "10x E-Max Laminate Veneers for Upper Visible Smile",
          "Philips Zoom 2 Laser In-Clinic Whitening for Lower Arch",
          "Aesthetic shade harmonisation across both jaws",
          "4-Star Luxury Hotel Accommodation for 6 Nights",
          "VIP Mercedes Chauffeur Transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$3,250",
          "EUR": "€2,950",
          "GBP": "£2,550"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes Swiss Ivoclar IPS e.max veneers superior to traditional porcelain?",
        "a": [
          "IPS e.max is a patented lithium disilicate glass-ceramic with unmatched optical translucency and light refraction properties that mirror natural human tooth enamel.",
          "Unlike older feldspathic porcelain that requires thicker preparation, E-Max achieves exceptional flexural strength (500+ MPa) even at ultra-thin 0.3 mm thicknesses."
        ]
      },
      {
        "q": "How much tooth shaving is required for E-Max laminate veneers?",
        "a": [
          "E-Max veneers are ultra-conservative, requiring only 0.3 mm to 0.5 mm of surface enamel smoothing—less than half the thickness of a typical fingernail.",
          "The preparation stays completely within the enamel layer, preserving your tooth's internal nerve and dental vitality."
        ]
      },
      {
        "q": "How long will my E-Max veneers last?",
        "a": [
          "With good oral hygiene and standard 6-month dental checkups, Swiss E-Max laminate veneers typically last 15 to 25+ years without loss of color, gloss, or structural integrity.",
          "All E-Max veneer treatments at Master Smile Studio are backed by our official 10-Year International Clinical Warranty."
        ]
      },
      {
        "q": "Do E-Max veneers stain from smoking, coffee, or tea?",
        "a": [
          "No. E-Max lithium disilicate is completely non-porous and glass-smooth. It will never absorb color pigments from coffee, tea, red wine, or tobacco.",
          "Your smile will maintain the exact shade selected on Day 1 for decades."
        ]
      },
      {
        "q": "How many days do I need to stay in Antalya for E-Max veneers?",
        "a": [
          "A standard E-Max smile makeover requires 5 to 7 days in Antalya. During this single visit, we perform the 3D digital scan, custom smile design, shade matching trial, CAD/CAM ceramic milling, and final resin bonding."
        ]
      },
      {
        "q": "What is included in the E-Max Veneers all-inclusive package?",
        "a": [
          "Our smile makeover packages include authentic Swiss Ivoclar IPS e.max veneers, 3D Digital Smile Design, 4/5-star luxury hotel accommodation with breakfast, and private VIP Mercedes transfers between Antalya Airport (IST / SAW), hotel, and our clinic.",
          "There are no hidden costs, consultation fees, or unexpected lab charges."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "Swiss Ivoclar E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages with genuine Swiss Ivoclar IPS e.max lithium disilicate, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Veneers",
    "faqSubtitle": "Detailed clinical answers regarding Swiss Ivoclar IPS e.max lithium disilicate veneers, translucency, preparation thickness, treatment timelines, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 E-Max laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Swiss Ivoclar E-Max Veneer prices start at £250 / €285 / $310 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Veneer (Ivoclar IPS e.max)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$310",
          "EUR": "€285",
          "GBP": "£250"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x High-Translucency E-Max Laminate Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Symmetry Simulation",
          "Laser gum recontouring & aesthetic gingival leveling (if required)",
          "Aesthetic temporary smile trial fitted on Day 1",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against veneer debonding and porcelain chipping"
        ],
        "price": {
          "USD": "$2,450",
          "EUR": "€2,250",
          "GBP": "£1,950"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom E-Max Laminate Veneers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live smile preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Professional clinical teeth whitening for non-veneered molars",
          "Comprehensive post-op care pack & custom night guard"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,800"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,750",
          "EUR": "€5,290",
          "GBP": "£4,600"
        }
      },
      {
        "name": "Single Lumineers (Prepless / Ultra-Thin)",
        "brand": "Cerinate / E-Max Ultra-Thin (0.2 mm)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/treatments/accordion/lumineers.webp",
        "included": [
          "1x Ultra-Thin Prepless Lumineer Veneer (No Drilling / No Injections)",
          "High-Precision 3D Digital Intraoral Impression",
          "Zero enamel loss & 100% reversible procedure",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$385",
          "EUR": "€350",
          "GBP": "£310"
        }
      },
      {
        "name": "Combination Makeover (10 E-Max + Laser Whitening)",
        "brand": "Swiss Ivoclar IPS e.max + Philips Zoom Laser",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "10x E-Max Laminate Veneers for Upper Visible Smile",
          "Philips Zoom 2 Laser In-Clinic Whitening for Lower Arch",
          "Aesthetic shade harmonisation across both jaws",
          "4-Star Luxury Hotel Accommodation for 6 Nights",
          "VIP Mercedes Chauffeur Transfers",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$3,250",
          "EUR": "€2,950",
          "GBP": "£2,550"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes Swiss Ivoclar IPS e.max veneers superior to traditional porcelain?",
        "a": [
          "IPS e.max is a patented lithium disilicate glass-ceramic with unmatched optical translucency and light refraction properties that mirror natural human tooth enamel.",
          "Unlike older feldspathic porcelain that requires thicker preparation, E-Max achieves exceptional flexural strength (500+ MPa) even at ultra-thin 0.3 mm thicknesses."
        ]
      },
      {
        "q": "How much tooth shaving is required for E-Max laminate veneers?",
        "a": [
          "E-Max veneers are ultra-conservative, requiring only 0.3 mm to 0.5 mm of surface enamel smoothing—less than half the thickness of a typical fingernail.",
          "The preparation stays completely within the enamel layer, preserving your tooth's internal nerve and dental vitality."
        ]
      },
      {
        "q": "How long will my E-Max veneers last?",
        "a": [
          "With good oral hygiene and standard 6-month dental checkups, Swiss E-Max laminate veneers typically last 15 to 25+ years without loss of color, gloss, or structural integrity.",
          "All E-Max veneer treatments at Master Smile Studio are backed by our official 10-Year International Clinical Warranty."
        ]
      },
      {
        "q": "Do E-Max veneers stain from smoking, coffee, or tea?",
        "a": [
          "No. E-Max lithium disilicate is completely non-porous and glass-smooth. It will never absorb color pigments from coffee, tea, red wine, or tobacco.",
          "Your smile will maintain the exact shade selected on Day 1 for decades."
        ]
      },
      {
        "q": "How many days do I need to stay in Antalya for E-Max veneers?",
        "a": [
          "A standard E-Max smile makeover requires 5 to 7 days in Antalya. During this single visit, we perform the 3D digital scan, custom smile design, shade matching trial, CAD/CAM ceramic milling, and final resin bonding."
        ]
      },
      {
        "q": "What is included in the E-Max Veneers all-inclusive package?",
        "a": [
          "Our smile makeover packages include authentic Swiss Ivoclar IPS e.max veneers, 3D Digital Smile Design, 4/5-star luxury hotel accommodation with breakfast, and private VIP Mercedes transfers between Antalya Airport (IST / SAW), hotel, and our clinic.",
          "There are no hidden costs, consultation fees, or unexpected lab charges."
        ]
      }
    ]
  }
};

export default function EmaxVeneersDetailView() {
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
      <section aria-labelledby="emax-veneers-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="emax-veneers-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="emax-veneers-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="emax-veneers-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`emax-veneers-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`emax-veneers-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="E-Max Veneers" />
      </div>
    </div>
  );
}
