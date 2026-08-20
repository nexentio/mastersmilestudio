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
import styles from './PorcelainVeneersDetailView.module.css';

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
    "packagesTitle": "Porcelain & E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages using genuine Swiss Ivoclar Vivadent IPS e.max with 4/5-star hotel accommodation and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Porcelain Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding porcelain laminate veneers, E-max smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Porcelain Laminate Veneer prices start at £240 / €275 / $295 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Porcelain Veneer (E-Max / Vita)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$295",
          "EUR": "€275",
          "GBP": "£240"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
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
          "USD": "$2,350",
          "EUR": "€2,150",
          "GBP": "£1,850"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
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
          "USD": "$4,550",
          "EUR": "€4,190",
          "GBP": "£3,600"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,450",
          "EUR": "€4,990",
          "GBP": "£4,350"
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
          "USD": "$360",
          "EUR": "€330",
          "GBP": "£290"
        }
      },
      {
        "name": "Single Composite Veneer / Direct Bonding",
        "brand": "German Kulzer / GC Gradia Direct Resin",
        "duration": "1 Day (Same-Day Smile)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Hand-Layered Composite Veneer",
          "Micro-aesthetic diastema closure & minor chip repair",
          "Zero tooth shaving & completed in a single 60-minute visit",
          "Multi-shade nano-hybrid resin polishing",
          "2-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$120",
          "EUR": "€110",
          "GBP": "£90"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between porcelain veneers and dental crowns?",
        "a": [
          "Porcelain laminate veneers are ultra-thin (0.3–0.5 mm) custom-crafted ceramic shells bonded strictly to the front visible surface of your teeth, requiring minimal to no enamel shaving.",
          "Dental crowns cover the entire 360-degree circumference of the tooth and are intended for structurally damaged, heavily decayed, or root-canal-treated teeth requiring structural reinforcement."
        ]
      },
      {
        "q": "How much tooth enamel is shaved for porcelain veneers?",
        "a": [
          "Minimally invasive modern porcelain veneers require only 0.3 mm to 0.5 mm of surface enamel reduction—comparable to the thickness of a contact lens.",
          "Our specialists preserve your natural tooth structure and vitality, ensuring that the nerve remains completely untouched and healthy."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive in Antalya?",
        "a": [
          "No. The personalized quotation and smile design plan provided during your online consultation (based on your photos and dental X-rays) are 100% binding and transparent with zero hidden costs.",
          "Upon arrival, we conduct a complimentary 3D digital intraoral scan and examination to confirm your clinical blueprint."
        ]
      },
      {
        "q": "Do porcelain veneers look fake or unnaturally white?",
        "a": [
          "Never. We utilize Swiss Ivoclar IPS e.max lithium disilicate, which replicates the optical translucency, light reflection, and subtle color gradations of genuine enamel.",
          "During your smile trial session on Day 1, you will test and approve the exact shade (from natural BL4/A1 to radiant Hollywood BL1) and shape before permanent bonding."
        ]
      },
      {
        "q": "Can I get porcelain veneers if I have crowded or crooked teeth?",
        "a": [
          "Yes! For mild to moderate crowding, misalignments, or uneven teeth, porcelain veneers act as 'instant orthodontics', correcting symmetry, rotation, and proportions in just 5 to 7 days without years of braces.",
          "For severe malocclusion, our orthodontist will advise whether short-term aligners are recommended first."
        ]
      },
      {
        "q": "Can porcelain veneers stain from coffee, tea, or red wine?",
        "a": [
          "No. High-fused dental porcelain and Ivoclar E-Max are non-porous ceramic surfaces that are 100% impervious to staining from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their original shade and high-gloss luster permanently."
        ]
      },
      {
        "q": "Do you provide hotel accommodation and airport VIP transfers?",
        "a": [
          "Yes! All smile makeover packages (8, 16, or 20 veneers) include complimentary 4-star or 5-star hotel accommodation with breakfast and private VIP Mercedes transfers between Antalya Airport (IST / SAW), your hotel, and our clinic.",
          "Your dedicated international patient coordinator will manage your complete schedule for a seamless experience."
        ]
      },
      {
        "q": "What is the expected lifespan of porcelain veneers?",
        "a": [
          "With proper oral hygiene, routine dental checkups, and a nighttime guard if you grind your teeth, high-quality Swiss E-Max porcelain veneers typically last 15 to 25+ years."
        ]
      },
      {
        "q": "Is the porcelain veneer procedure painful?",
        "a": [
          "No. The procedure is performed under gentle local anesthesia, making the tooth preparation completely painless. Temporary veneers are fitted immediately to protect your teeth while your custom ceramics are being milled."
        ]
      },
      {
        "q": "What happens if a porcelain veneer chips or detaches?",
        "a": [
          "Every porcelain veneer from Master Smile Studio comes with a 10-Year Clinical Warranty and Certificate of Authenticity. In the rare event of debonding or structural failure, our clinic will replace or re-bond the restoration free of charge."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "Porselen & E-Max Lamina Diş Kaplama Paketleri",
    "packagesSubtitle": "İsviçre Ivoclar IPS e.max lityum disilikat, otel konaklaması ve VIP transfer dahil her şey dahil yaprak porselen paketleri.",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket İçeriği:",
    "priceLabel": "Her Şey Dahil Fiyat:",
    "getQuoteBtn": "Ücretsiz Fiyat Teklifi Al",
    "faqTitle": "Porselen Lamina (Yaprak Porselen) Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Antalya'da yaprak porselen, E-Max lamina kaplama, diş kesimi, tedavi süresi, garanti koşulları ve seyahat planlaması hakkında en çok merak edilen soruların yanıtları.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Porcelain Laminate Veneer prices start at £240 / €275 / $295 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Porcelain Veneer (E-Max / Vita)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$295",
          "EUR": "€275",
          "GBP": "£240"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
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
          "USD": "$2,350",
          "EUR": "€2,150",
          "GBP": "£1,850"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
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
          "USD": "$4,550",
          "EUR": "€4,190",
          "GBP": "£3,600"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,450",
          "EUR": "€4,990",
          "GBP": "£4,350"
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
          "USD": "$360",
          "EUR": "€330",
          "GBP": "£290"
        }
      },
      {
        "name": "Single Composite Veneer / Direct Bonding",
        "brand": "German Kulzer / GC Gradia Direct Resin",
        "duration": "1 Day (Same-Day Smile)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Hand-Layered Composite Veneer",
          "Micro-aesthetic diastema closure & minor chip repair",
          "Zero tooth shaving & completed in a single 60-minute visit",
          "Multi-shade nano-hybrid resin polishing",
          "2-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$120",
          "EUR": "€110",
          "GBP": "£90"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between porcelain veneers and dental crowns?",
        "a": [
          "Porcelain laminate veneers are ultra-thin (0.3–0.5 mm) custom-crafted ceramic shells bonded strictly to the front visible surface of your teeth, requiring minimal to no enamel shaving.",
          "Dental crowns cover the entire 360-degree circumference of the tooth and are intended for structurally damaged, heavily decayed, or root-canal-treated teeth requiring structural reinforcement."
        ]
      },
      {
        "q": "How much tooth enamel is shaved for porcelain veneers?",
        "a": [
          "Minimally invasive modern porcelain veneers require only 0.3 mm to 0.5 mm of surface enamel reduction—comparable to the thickness of a contact lens.",
          "Our specialists preserve your natural tooth structure and vitality, ensuring that the nerve remains completely untouched and healthy."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive in Antalya?",
        "a": [
          "No. The personalized quotation and smile design plan provided during your online consultation (based on your photos and dental X-rays) are 100% binding and transparent with zero hidden costs.",
          "Upon arrival, we conduct a complimentary 3D digital intraoral scan and examination to confirm your clinical blueprint."
        ]
      },
      {
        "q": "Do porcelain veneers look fake or unnaturally white?",
        "a": [
          "Never. We utilize Swiss Ivoclar IPS e.max lithium disilicate, which replicates the optical translucency, light reflection, and subtle color gradations of genuine enamel.",
          "During your smile trial session on Day 1, you will test and approve the exact shade (from natural BL4/A1 to radiant Hollywood BL1) and shape before permanent bonding."
        ]
      },
      {
        "q": "Can I get porcelain veneers if I have crowded or crooked teeth?",
        "a": [
          "Yes! For mild to moderate crowding, misalignments, or uneven teeth, porcelain veneers act as 'instant orthodontics', correcting symmetry, rotation, and proportions in just 5 to 7 days without years of braces.",
          "For severe malocclusion, our orthodontist will advise whether short-term aligners are recommended first."
        ]
      },
      {
        "q": "Can porcelain veneers stain from coffee, tea, or red wine?",
        "a": [
          "No. High-fused dental porcelain and Ivoclar E-Max are non-porous ceramic surfaces that are 100% impervious to staining from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their original shade and high-gloss luster permanently."
        ]
      },
      {
        "q": "Do you provide hotel accommodation and airport VIP transfers?",
        "a": [
          "Yes! All smile makeover packages (8, 16, or 20 veneers) include complimentary 4-star or 5-star hotel accommodation with breakfast and private VIP Mercedes transfers between Antalya Airport (IST / SAW), your hotel, and our clinic.",
          "Your dedicated international patient coordinator will manage your complete schedule for a seamless experience."
        ]
      },
      {
        "q": "What is the expected lifespan of porcelain veneers?",
        "a": [
          "With proper oral hygiene, routine dental checkups, and a nighttime guard if you grind your teeth, high-quality Swiss E-Max porcelain veneers typically last 15 to 25+ years."
        ]
      },
      {
        "q": "Is the porcelain veneer procedure painful?",
        "a": [
          "No. The procedure is performed under gentle local anesthesia, making the tooth preparation completely painless. Temporary veneers are fitted immediately to protect your teeth while your custom ceramics are being milled."
        ]
      },
      {
        "q": "What happens if a porcelain veneer chips or detaches?",
        "a": [
          "Every porcelain veneer from Master Smile Studio comes with a 10-Year Clinical Warranty and Certificate of Authenticity. In the rare event of debonding or structural failure, our clinic will replace or re-bond the restoration free of charge."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "Porcelain & E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages using genuine Swiss Ivoclar Vivadent IPS e.max with 4/5-star hotel accommodation and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Porcelain Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding porcelain laminate veneers, E-max smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Porcelain Laminate Veneer prices start at £240 / €275 / $295 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Porcelain Veneer (E-Max / Vita)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$295",
          "EUR": "€275",
          "GBP": "£240"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
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
          "USD": "$2,350",
          "EUR": "€2,150",
          "GBP": "£1,850"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
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
          "USD": "$4,550",
          "EUR": "€4,190",
          "GBP": "£3,600"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,450",
          "EUR": "€4,990",
          "GBP": "£4,350"
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
          "USD": "$360",
          "EUR": "€330",
          "GBP": "£290"
        }
      },
      {
        "name": "Single Composite Veneer / Direct Bonding",
        "brand": "German Kulzer / GC Gradia Direct Resin",
        "duration": "1 Day (Same-Day Smile)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Hand-Layered Composite Veneer",
          "Micro-aesthetic diastema closure & minor chip repair",
          "Zero tooth shaving & completed in a single 60-minute visit",
          "Multi-shade nano-hybrid resin polishing",
          "2-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$120",
          "EUR": "€110",
          "GBP": "£90"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between porcelain veneers and dental crowns?",
        "a": [
          "Porcelain laminate veneers are ultra-thin (0.3–0.5 mm) custom-crafted ceramic shells bonded strictly to the front visible surface of your teeth, requiring minimal to no enamel shaving.",
          "Dental crowns cover the entire 360-degree circumference of the tooth and are intended for structurally damaged, heavily decayed, or root-canal-treated teeth requiring structural reinforcement."
        ]
      },
      {
        "q": "How much tooth enamel is shaved for porcelain veneers?",
        "a": [
          "Minimally invasive modern porcelain veneers require only 0.3 mm to 0.5 mm of surface enamel reduction—comparable to the thickness of a contact lens.",
          "Our specialists preserve your natural tooth structure and vitality, ensuring that the nerve remains completely untouched and healthy."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive in Antalya?",
        "a": [
          "No. The personalized quotation and smile design plan provided during your online consultation (based on your photos and dental X-rays) are 100% binding and transparent with zero hidden costs.",
          "Upon arrival, we conduct a complimentary 3D digital intraoral scan and examination to confirm your clinical blueprint."
        ]
      },
      {
        "q": "Do porcelain veneers look fake or unnaturally white?",
        "a": [
          "Never. We utilize Swiss Ivoclar IPS e.max lithium disilicate, which replicates the optical translucency, light reflection, and subtle color gradations of genuine enamel.",
          "During your smile trial session on Day 1, you will test and approve the exact shade (from natural BL4/A1 to radiant Hollywood BL1) and shape before permanent bonding."
        ]
      },
      {
        "q": "Can I get porcelain veneers if I have crowded or crooked teeth?",
        "a": [
          "Yes! For mild to moderate crowding, misalignments, or uneven teeth, porcelain veneers act as 'instant orthodontics', correcting symmetry, rotation, and proportions in just 5 to 7 days without years of braces.",
          "For severe malocclusion, our orthodontist will advise whether short-term aligners are recommended first."
        ]
      },
      {
        "q": "Can porcelain veneers stain from coffee, tea, or red wine?",
        "a": [
          "No. High-fused dental porcelain and Ivoclar E-Max are non-porous ceramic surfaces that are 100% impervious to staining from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their original shade and high-gloss luster permanently."
        ]
      },
      {
        "q": "Do you provide hotel accommodation and airport VIP transfers?",
        "a": [
          "Yes! All smile makeover packages (8, 16, or 20 veneers) include complimentary 4-star or 5-star hotel accommodation with breakfast and private VIP Mercedes transfers between Antalya Airport (IST / SAW), your hotel, and our clinic.",
          "Your dedicated international patient coordinator will manage your complete schedule for a seamless experience."
        ]
      },
      {
        "q": "What is the expected lifespan of porcelain veneers?",
        "a": [
          "With proper oral hygiene, routine dental checkups, and a nighttime guard if you grind your teeth, high-quality Swiss E-Max porcelain veneers typically last 15 to 25+ years."
        ]
      },
      {
        "q": "Is the porcelain veneer procedure painful?",
        "a": [
          "No. The procedure is performed under gentle local anesthesia, making the tooth preparation completely painless. Temporary veneers are fitted immediately to protect your teeth while your custom ceramics are being milled."
        ]
      },
      {
        "q": "What happens if a porcelain veneer chips or detaches?",
        "a": [
          "Every porcelain veneer from Master Smile Studio comes with a 10-Year Clinical Warranty and Certificate of Authenticity. In the rare event of debonding or structural failure, our clinic will replace or re-bond the restoration free of charge."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "Porcelain & E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages using genuine Swiss Ivoclar Vivadent IPS e.max with 4/5-star hotel accommodation and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Porcelain Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding porcelain laminate veneers, E-max smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Porcelain Laminate Veneer prices start at £240 / €275 / $295 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Porcelain Veneer (E-Max / Vita)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$295",
          "EUR": "€275",
          "GBP": "£240"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
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
          "USD": "$2,350",
          "EUR": "€2,150",
          "GBP": "£1,850"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
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
          "USD": "$4,550",
          "EUR": "€4,190",
          "GBP": "£3,600"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,450",
          "EUR": "€4,990",
          "GBP": "£4,350"
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
          "USD": "$360",
          "EUR": "€330",
          "GBP": "£290"
        }
      },
      {
        "name": "Single Composite Veneer / Direct Bonding",
        "brand": "German Kulzer / GC Gradia Direct Resin",
        "duration": "1 Day (Same-Day Smile)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Hand-Layered Composite Veneer",
          "Micro-aesthetic diastema closure & minor chip repair",
          "Zero tooth shaving & completed in a single 60-minute visit",
          "Multi-shade nano-hybrid resin polishing",
          "2-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$120",
          "EUR": "€110",
          "GBP": "£90"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between porcelain veneers and dental crowns?",
        "a": [
          "Porcelain laminate veneers are ultra-thin (0.3–0.5 mm) custom-crafted ceramic shells bonded strictly to the front visible surface of your teeth, requiring minimal to no enamel shaving.",
          "Dental crowns cover the entire 360-degree circumference of the tooth and are intended for structurally damaged, heavily decayed, or root-canal-treated teeth requiring structural reinforcement."
        ]
      },
      {
        "q": "How much tooth enamel is shaved for porcelain veneers?",
        "a": [
          "Minimally invasive modern porcelain veneers require only 0.3 mm to 0.5 mm of surface enamel reduction—comparable to the thickness of a contact lens.",
          "Our specialists preserve your natural tooth structure and vitality, ensuring that the nerve remains completely untouched and healthy."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive in Antalya?",
        "a": [
          "No. The personalized quotation and smile design plan provided during your online consultation (based on your photos and dental X-rays) are 100% binding and transparent with zero hidden costs.",
          "Upon arrival, we conduct a complimentary 3D digital intraoral scan and examination to confirm your clinical blueprint."
        ]
      },
      {
        "q": "Do porcelain veneers look fake or unnaturally white?",
        "a": [
          "Never. We utilize Swiss Ivoclar IPS e.max lithium disilicate, which replicates the optical translucency, light reflection, and subtle color gradations of genuine enamel.",
          "During your smile trial session on Day 1, you will test and approve the exact shade (from natural BL4/A1 to radiant Hollywood BL1) and shape before permanent bonding."
        ]
      },
      {
        "q": "Can I get porcelain veneers if I have crowded or crooked teeth?",
        "a": [
          "Yes! For mild to moderate crowding, misalignments, or uneven teeth, porcelain veneers act as 'instant orthodontics', correcting symmetry, rotation, and proportions in just 5 to 7 days without years of braces.",
          "For severe malocclusion, our orthodontist will advise whether short-term aligners are recommended first."
        ]
      },
      {
        "q": "Can porcelain veneers stain from coffee, tea, or red wine?",
        "a": [
          "No. High-fused dental porcelain and Ivoclar E-Max are non-porous ceramic surfaces that are 100% impervious to staining from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their original shade and high-gloss luster permanently."
        ]
      },
      {
        "q": "Do you provide hotel accommodation and airport VIP transfers?",
        "a": [
          "Yes! All smile makeover packages (8, 16, or 20 veneers) include complimentary 4-star or 5-star hotel accommodation with breakfast and private VIP Mercedes transfers between Antalya Airport (IST / SAW), your hotel, and our clinic.",
          "Your dedicated international patient coordinator will manage your complete schedule for a seamless experience."
        ]
      },
      {
        "q": "What is the expected lifespan of porcelain veneers?",
        "a": [
          "With proper oral hygiene, routine dental checkups, and a nighttime guard if you grind your teeth, high-quality Swiss E-Max porcelain veneers typically last 15 to 25+ years."
        ]
      },
      {
        "q": "Is the porcelain veneer procedure painful?",
        "a": [
          "No. The procedure is performed under gentle local anesthesia, making the tooth preparation completely painless. Temporary veneers are fitted immediately to protect your teeth while your custom ceramics are being milled."
        ]
      },
      {
        "q": "What happens if a porcelain veneer chips or detaches?",
        "a": [
          "Every porcelain veneer from Master Smile Studio comes with a 10-Year Clinical Warranty and Certificate of Authenticity. In the rare event of debonding or structural failure, our clinic will replace or re-bond the restoration free of charge."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "Porcelain & E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages using genuine Swiss Ivoclar Vivadent IPS e.max with 4/5-star hotel accommodation and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Porcelain Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding porcelain laminate veneers, E-max smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Porcelain Laminate Veneer prices start at £240 / €275 / $295 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Porcelain Veneer (E-Max / Vita)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$295",
          "EUR": "€275",
          "GBP": "£240"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
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
          "USD": "$2,350",
          "EUR": "€2,150",
          "GBP": "£1,850"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
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
          "USD": "$4,550",
          "EUR": "€4,190",
          "GBP": "£3,600"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,450",
          "EUR": "€4,990",
          "GBP": "£4,350"
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
          "USD": "$360",
          "EUR": "€330",
          "GBP": "£290"
        }
      },
      {
        "name": "Single Composite Veneer / Direct Bonding",
        "brand": "German Kulzer / GC Gradia Direct Resin",
        "duration": "1 Day (Same-Day Smile)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Hand-Layered Composite Veneer",
          "Micro-aesthetic diastema closure & minor chip repair",
          "Zero tooth shaving & completed in a single 60-minute visit",
          "Multi-shade nano-hybrid resin polishing",
          "2-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$120",
          "EUR": "€110",
          "GBP": "£90"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between porcelain veneers and dental crowns?",
        "a": [
          "Porcelain laminate veneers are ultra-thin (0.3–0.5 mm) custom-crafted ceramic shells bonded strictly to the front visible surface of your teeth, requiring minimal to no enamel shaving.",
          "Dental crowns cover the entire 360-degree circumference of the tooth and are intended for structurally damaged, heavily decayed, or root-canal-treated teeth requiring structural reinforcement."
        ]
      },
      {
        "q": "How much tooth enamel is shaved for porcelain veneers?",
        "a": [
          "Minimally invasive modern porcelain veneers require only 0.3 mm to 0.5 mm of surface enamel reduction—comparable to the thickness of a contact lens.",
          "Our specialists preserve your natural tooth structure and vitality, ensuring that the nerve remains completely untouched and healthy."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive in Antalya?",
        "a": [
          "No. The personalized quotation and smile design plan provided during your online consultation (based on your photos and dental X-rays) are 100% binding and transparent with zero hidden costs.",
          "Upon arrival, we conduct a complimentary 3D digital intraoral scan and examination to confirm your clinical blueprint."
        ]
      },
      {
        "q": "Do porcelain veneers look fake or unnaturally white?",
        "a": [
          "Never. We utilize Swiss Ivoclar IPS e.max lithium disilicate, which replicates the optical translucency, light reflection, and subtle color gradations of genuine enamel.",
          "During your smile trial session on Day 1, you will test and approve the exact shade (from natural BL4/A1 to radiant Hollywood BL1) and shape before permanent bonding."
        ]
      },
      {
        "q": "Can I get porcelain veneers if I have crowded or crooked teeth?",
        "a": [
          "Yes! For mild to moderate crowding, misalignments, or uneven teeth, porcelain veneers act as 'instant orthodontics', correcting symmetry, rotation, and proportions in just 5 to 7 days without years of braces.",
          "For severe malocclusion, our orthodontist will advise whether short-term aligners are recommended first."
        ]
      },
      {
        "q": "Can porcelain veneers stain from coffee, tea, or red wine?",
        "a": [
          "No. High-fused dental porcelain and Ivoclar E-Max are non-porous ceramic surfaces that are 100% impervious to staining from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their original shade and high-gloss luster permanently."
        ]
      },
      {
        "q": "Do you provide hotel accommodation and airport VIP transfers?",
        "a": [
          "Yes! All smile makeover packages (8, 16, or 20 veneers) include complimentary 4-star or 5-star hotel accommodation with breakfast and private VIP Mercedes transfers between Antalya Airport (IST / SAW), your hotel, and our clinic.",
          "Your dedicated international patient coordinator will manage your complete schedule for a seamless experience."
        ]
      },
      {
        "q": "What is the expected lifespan of porcelain veneers?",
        "a": [
          "With proper oral hygiene, routine dental checkups, and a nighttime guard if you grind your teeth, high-quality Swiss E-Max porcelain veneers typically last 15 to 25+ years."
        ]
      },
      {
        "q": "Is the porcelain veneer procedure painful?",
        "a": [
          "No. The procedure is performed under gentle local anesthesia, making the tooth preparation completely painless. Temporary veneers are fitted immediately to protect your teeth while your custom ceramics are being milled."
        ]
      },
      {
        "q": "What happens if a porcelain veneer chips or detaches?",
        "a": [
          "Every porcelain veneer from Master Smile Studio comes with a 10-Year Clinical Warranty and Certificate of Authenticity. In the rare event of debonding or structural failure, our clinic will replace or re-bond the restoration free of charge."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "Porcelain & E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages using genuine Swiss Ivoclar Vivadent IPS e.max with 4/5-star hotel accommodation and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Porcelain Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding porcelain laminate veneers, E-max smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Porcelain Laminate Veneer prices start at £240 / €275 / $295 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Porcelain Veneer (E-Max / Vita)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$295",
          "EUR": "€275",
          "GBP": "£240"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
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
          "USD": "$2,350",
          "EUR": "€2,150",
          "GBP": "£1,850"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
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
          "USD": "$4,550",
          "EUR": "€4,190",
          "GBP": "£3,600"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,450",
          "EUR": "€4,990",
          "GBP": "£4,350"
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
          "USD": "$360",
          "EUR": "€330",
          "GBP": "£290"
        }
      },
      {
        "name": "Single Composite Veneer / Direct Bonding",
        "brand": "German Kulzer / GC Gradia Direct Resin",
        "duration": "1 Day (Same-Day Smile)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Hand-Layered Composite Veneer",
          "Micro-aesthetic diastema closure & minor chip repair",
          "Zero tooth shaving & completed in a single 60-minute visit",
          "Multi-shade nano-hybrid resin polishing",
          "2-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$120",
          "EUR": "€110",
          "GBP": "£90"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between porcelain veneers and dental crowns?",
        "a": [
          "Porcelain laminate veneers are ultra-thin (0.3–0.5 mm) custom-crafted ceramic shells bonded strictly to the front visible surface of your teeth, requiring minimal to no enamel shaving.",
          "Dental crowns cover the entire 360-degree circumference of the tooth and are intended for structurally damaged, heavily decayed, or root-canal-treated teeth requiring structural reinforcement."
        ]
      },
      {
        "q": "How much tooth enamel is shaved for porcelain veneers?",
        "a": [
          "Minimally invasive modern porcelain veneers require only 0.3 mm to 0.5 mm of surface enamel reduction—comparable to the thickness of a contact lens.",
          "Our specialists preserve your natural tooth structure and vitality, ensuring that the nerve remains completely untouched and healthy."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive in Antalya?",
        "a": [
          "No. The personalized quotation and smile design plan provided during your online consultation (based on your photos and dental X-rays) are 100% binding and transparent with zero hidden costs.",
          "Upon arrival, we conduct a complimentary 3D digital intraoral scan and examination to confirm your clinical blueprint."
        ]
      },
      {
        "q": "Do porcelain veneers look fake or unnaturally white?",
        "a": [
          "Never. We utilize Swiss Ivoclar IPS e.max lithium disilicate, which replicates the optical translucency, light reflection, and subtle color gradations of genuine enamel.",
          "During your smile trial session on Day 1, you will test and approve the exact shade (from natural BL4/A1 to radiant Hollywood BL1) and shape before permanent bonding."
        ]
      },
      {
        "q": "Can I get porcelain veneers if I have crowded or crooked teeth?",
        "a": [
          "Yes! For mild to moderate crowding, misalignments, or uneven teeth, porcelain veneers act as 'instant orthodontics', correcting symmetry, rotation, and proportions in just 5 to 7 days without years of braces.",
          "For severe malocclusion, our orthodontist will advise whether short-term aligners are recommended first."
        ]
      },
      {
        "q": "Can porcelain veneers stain from coffee, tea, or red wine?",
        "a": [
          "No. High-fused dental porcelain and Ivoclar E-Max are non-porous ceramic surfaces that are 100% impervious to staining from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their original shade and high-gloss luster permanently."
        ]
      },
      {
        "q": "Do you provide hotel accommodation and airport VIP transfers?",
        "a": [
          "Yes! All smile makeover packages (8, 16, or 20 veneers) include complimentary 4-star or 5-star hotel accommodation with breakfast and private VIP Mercedes transfers between Antalya Airport (IST / SAW), your hotel, and our clinic.",
          "Your dedicated international patient coordinator will manage your complete schedule for a seamless experience."
        ]
      },
      {
        "q": "What is the expected lifespan of porcelain veneers?",
        "a": [
          "With proper oral hygiene, routine dental checkups, and a nighttime guard if you grind your teeth, high-quality Swiss E-Max porcelain veneers typically last 15 to 25+ years."
        ]
      },
      {
        "q": "Is the porcelain veneer procedure painful?",
        "a": [
          "No. The procedure is performed under gentle local anesthesia, making the tooth preparation completely painless. Temporary veneers are fitted immediately to protect your teeth while your custom ceramics are being milled."
        ]
      },
      {
        "q": "What happens if a porcelain veneer chips or detaches?",
        "a": [
          "Every porcelain veneer from Master Smile Studio comes with a 10-Year Clinical Warranty and Certificate of Authenticity. In the rare event of debonding or structural failure, our clinic will replace or re-bond the restoration free of charge."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "Porcelain & E-Max Laminate Veneer Packages",
    "packagesSubtitle": "All-inclusive digital smile design packages using genuine Swiss Ivoclar Vivadent IPS e.max with 4/5-star hotel accommodation and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Porcelain Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding porcelain laminate veneers, E-max smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation (0.3–0.5 mm), CAD/CAM milling of IPS e.max veneers, and final resin bonding are completed with microscopic precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete smile makeover (from 4 to 20 laminate veneers) is designed, fabricated, and permanently placed during this single visit.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Because preparation is strictly confined to the enamel surface, there is virtually zero downtime or discomfort. You can immediately resume eating and normal activities with your brand-new smile.",
    "priceEstimate": "<strong>Porcelain Laminate Veneer prices start at £240 / €275 / $295 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Porcelain Veneer (E-Max / Vita)",
        "brand": "Swiss Ivoclar Vivadent IPS e.max Press",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Laminate Veneer",
          "3D Digital Intraoral Scan & Smile Line Analysis",
          "Micro-prep (0.3–0.5 mm), local anesthesia & temporary veneer",
          "Custom shade matching & natural tooth enamel translucency",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$295",
          "EUR": "€275",
          "GBP": "£240"
        }
      },
      {
        "name": "8-Unit Smile Line Makeover (Upper Arch)",
        "brand": "Swiss Ivoclar IPS e.max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
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
          "USD": "$2,350",
          "EUR": "€2,150",
          "GBP": "£1,850"
        }
      },
      {
        "name": "16-Unit Full Smile Makeover (8 Upper + 8 Lower)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
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
          "USD": "$4,550",
          "EUR": "€4,190",
          "GBP": "£3,600"
        }
      },
      {
        "name": "20-Unit Full Hollywood Smile Makeover",
        "brand": "Swiss Ivoclar IPS e.max CAD / Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Thin E-Max Laminate Veneers (10 Upper + 10 Lower Arches)",
          "Complete gnathological bite balancing & aesthetic harmony",
          "Multi-layer custom micro-layering for lifelike incisal halo",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur Service for all transfers",
          "Lifetime international warranty certificate & dental passport"
        ],
        "price": {
          "USD": "$5,450",
          "EUR": "€4,990",
          "GBP": "£4,350"
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
          "USD": "$360",
          "EUR": "€330",
          "GBP": "£290"
        }
      },
      {
        "name": "Single Composite Veneer / Direct Bonding",
        "brand": "German Kulzer / GC Gradia Direct Resin",
        "duration": "1 Day (Same-Day Smile)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Hand-Layered Composite Veneer",
          "Micro-aesthetic diastema closure & minor chip repair",
          "Zero tooth shaving & completed in a single 60-minute visit",
          "Multi-shade nano-hybrid resin polishing",
          "2-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$120",
          "EUR": "€110",
          "GBP": "£90"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between porcelain veneers and dental crowns?",
        "a": [
          "Porcelain laminate veneers are ultra-thin (0.3–0.5 mm) custom-crafted ceramic shells bonded strictly to the front visible surface of your teeth, requiring minimal to no enamel shaving.",
          "Dental crowns cover the entire 360-degree circumference of the tooth and are intended for structurally damaged, heavily decayed, or root-canal-treated teeth requiring structural reinforcement."
        ]
      },
      {
        "q": "How much tooth enamel is shaved for porcelain veneers?",
        "a": [
          "Minimally invasive modern porcelain veneers require only 0.3 mm to 0.5 mm of surface enamel reduction—comparable to the thickness of a contact lens.",
          "Our specialists preserve your natural tooth structure and vitality, ensuring that the nerve remains completely untouched and healthy."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive in Antalya?",
        "a": [
          "No. The personalized quotation and smile design plan provided during your online consultation (based on your photos and dental X-rays) are 100% binding and transparent with zero hidden costs.",
          "Upon arrival, we conduct a complimentary 3D digital intraoral scan and examination to confirm your clinical blueprint."
        ]
      },
      {
        "q": "Do porcelain veneers look fake or unnaturally white?",
        "a": [
          "Never. We utilize Swiss Ivoclar IPS e.max lithium disilicate, which replicates the optical translucency, light reflection, and subtle color gradations of genuine enamel.",
          "During your smile trial session on Day 1, you will test and approve the exact shade (from natural BL4/A1 to radiant Hollywood BL1) and shape before permanent bonding."
        ]
      },
      {
        "q": "Can I get porcelain veneers if I have crowded or crooked teeth?",
        "a": [
          "Yes! For mild to moderate crowding, misalignments, or uneven teeth, porcelain veneers act as 'instant orthodontics', correcting symmetry, rotation, and proportions in just 5 to 7 days without years of braces.",
          "For severe malocclusion, our orthodontist will advise whether short-term aligners are recommended first."
        ]
      },
      {
        "q": "Can porcelain veneers stain from coffee, tea, or red wine?",
        "a": [
          "No. High-fused dental porcelain and Ivoclar E-Max are non-porous ceramic surfaces that are 100% impervious to staining from coffee, tea, nicotine, or red wine.",
          "Your veneers will maintain their original shade and high-gloss luster permanently."
        ]
      },
      {
        "q": "Do you provide hotel accommodation and airport VIP transfers?",
        "a": [
          "Yes! All smile makeover packages (8, 16, or 20 veneers) include complimentary 4-star or 5-star hotel accommodation with breakfast and private VIP Mercedes transfers between Antalya Airport (IST / SAW), your hotel, and our clinic.",
          "Your dedicated international patient coordinator will manage your complete schedule for a seamless experience."
        ]
      },
      {
        "q": "What is the expected lifespan of porcelain veneers?",
        "a": [
          "With proper oral hygiene, routine dental checkups, and a nighttime guard if you grind your teeth, high-quality Swiss E-Max porcelain veneers typically last 15 to 25+ years."
        ]
      },
      {
        "q": "Is the porcelain veneer procedure painful?",
        "a": [
          "No. The procedure is performed under gentle local anesthesia, making the tooth preparation completely painless. Temporary veneers are fitted immediately to protect your teeth while your custom ceramics are being milled."
        ]
      },
      {
        "q": "What happens if a porcelain veneer chips or detaches?",
        "a": [
          "Every porcelain veneer from Master Smile Studio comes with a 10-Year Clinical Warranty and Certificate of Authenticity. In the rare event of debonding or structural failure, our clinic will replace or re-bond the restoration free of charge."
        ]
      }
    ]
  }
};

export default function PorcelainVeneersDetailView() {
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
      <section aria-labelledby="veneers-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="veneers-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="veneers-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="veneers-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`veneers-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`veneers-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Porcelain Veneers" />
      </div>
    </div>
  );
}
