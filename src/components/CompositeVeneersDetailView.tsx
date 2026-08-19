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
import styles from './CompositeVeneersDetailView.module.css';

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
    "packagesTitle": "Direct Composite Veneer & Dental Bonding Packages",
    "packagesSubtitle": "Minimally invasive, single-visit smile design packages with premium German nano-hybrid composite resin, shade-matching artistry, hotel stay, and VIP transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Composite Veneers & Bonding",
    "faqSubtitle": "Detailed clinical guidance on direct composite resin veneers, same-day chairside bonding, diastema closures, staining resistance, durability, and aftercare in Antalya.",
    "stayDuration": "<strong>2 to 4 days in Antalya.</strong> Direct composite veneers and bonding can often be completed in 1 to 2 clinical sessions with immediate same-day smile results.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to visit Antalya once. Your composite veneers or smile bonding are sculpted, cured, and high-gloss polished in a single visit.",
    "recoveryTime": "<strong>Immediate recovery.</strong> Zero downtime and no invasive enamel reduction. You can eat, speak, and smile immediately following your chairside appointment.",
    "priceEstimate": "<strong>Composite Veneer prices start at £110 / €125 / $140 per tooth.</strong> Multi-unit smile packages (6, 8, or 16 teeth) include comprehensive 3D smile analysis, luxury hotel accommodation, and VIP transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Composite Veneer / Bonding",
        "brand": "German Tokuyama / 3M Filtek Supreme Nano-Hybrid",
        "duration": "1 – 2 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Layered Nano-Hybrid Composite Veneer",
          "Micro-aesthetic tooth shaping & surface conditioning",
          "Multi-shade polychromatic resin layering",
          "Diamond bur contouring & high-gloss diamond paste polishing",
          "5-Year Clinical Craftsmanship Warranty",
          "Personalized patient coordinator assistance"
        ],
        "price": {
          "USD": "$140",
          "EUR": "€125",
          "GBP": "£110"
        }
      },
      {
        "name": "8-Unit Smile Line Composite Makeover",
        "brand": "German Tokuyama / 3M Nano-Hybrid Resin",
        "duration": "2 – 4 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "popular": true,
        "included": [
          "8x Upper Social Smile Direct Composite Veneers",
          "3D Digital Smile Simulation & Tooth Proportions Analysis",
          "Diastema (gap) closure & incisal edge elongation",
          "4-Star Luxury Hotel Stay in Antalya (3 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Comprehensive high-gloss polish & surface sealant",
          "5-Year Clinical Warranty & aftercare kit"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£780"
        }
      },
      {
        "name": "16-Unit Full Composite Smile Makeover",
        "brand": "Premium German Nano-Hybrid Polychromatic Resin",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "included": [
          "16x Direct Composite Veneers (8 Upper + 8 Lower Teeth)",
          "Full aesthetic bite alignment & golden ratio facial harmony",
          "Dual arch composite sculpting with multi-shade opalescent layers",
          "4-Star Hotel Stay with Breakfast in Antalya (4 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Custom dental night guard & protective travel kit",
          "5-Year Clinical Warranty on all bonded surfaces"
        ],
        "price": {
          "USD": "$1,850",
          "EUR": "€1,690",
          "GBP": "£1,490"
        }
      },
      {
        "name": "Diastema Closure & Edge Bonding Package",
        "brand": "3M Filtek / Tokuyama Estelite Asteria",
        "duration": "1 – 3 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Direct gap closure between central incisors & edge repair",
          "Zero tooth shaving / 100% enamel preservation",
          "Micro-hybrid layering matching natural tooth luminescence",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$570",
          "EUR": "€520",
          "GBP": "£450"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between Composite Veneers and Porcelain / E-Max Veneers?",
        "a": [
          "Composite veneers are sculpted directly onto your teeth chairside using high-tech nano-hybrid resin in a single visit, requiring minimal to no tooth shaving.",
          "Porcelain and E-Max veneers are custom-milled in a dental laboratory from lithium disilicate glass-ceramic, offering higher stain resistance and 15–20 year longevity, while composite veneers typically last 5–8 years with regular polishing."
        ]
      },
      {
        "q": "Do composite veneers require drilling of natural teeth?",
        "a": [
          "In the vast majority of cases, composite bonding requires zero or microscopic surface etching to bond the resin securely to your enamel.",
          "This makes composite veneers the most conservative and reversible cosmetic smile enhancement available."
        ]
      },
      {
        "q": "Can composite veneers be repaired if they chip?",
        "a": [
          "Yes! One of the biggest advantages of composite resin is that chips or minor wear can be quickly and seamlessly repaired chairside in minutes without replacing the entire veneer."
        ]
      },
      {
        "q": "How long does the composite veneer procedure take?",
        "a": [
          "A full smile makeover with 8 to 16 composite veneers is typically completed in 1 to 2 sessions over a 2 to 4-day stay in Antalya."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "Kompozit Lamina & Bonding Paketleri",
    "packagesSubtitle": "Alman nano-hibrit rezin kompozit ile tek seansta diş kesimsiz estetik gülüş tasarımı ve her şey dahil paketler.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Kompozit Lamina (Bonding) Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Detailed clinical guidance on direct composite resin veneers, same-day chairside bonding, diastema closures, staining resistance, durability, and aftercare in Antalya.",
    "stayDuration": "<strong>2 to 4 days in Antalya.</strong> Direct composite veneers and bonding can often be completed in 1 to 2 clinical sessions with immediate same-day smile results.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to visit Antalya once. Your composite veneers or smile bonding are sculpted, cured, and high-gloss polished in a single visit.",
    "recoveryTime": "<strong>Immediate recovery.</strong> Zero downtime and no invasive enamel reduction. You can eat, speak, and smile immediately following your chairside appointment.",
    "priceEstimate": "<strong>Composite Veneer prices start at £110 / €125 / $140 per tooth.</strong> Multi-unit smile packages (6, 8, or 16 teeth) include comprehensive 3D smile analysis, luxury hotel accommodation, and VIP transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Composite Veneer / Bonding",
        "brand": "German Tokuyama / 3M Filtek Supreme Nano-Hybrid",
        "duration": "1 – 2 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Layered Nano-Hybrid Composite Veneer",
          "Micro-aesthetic tooth shaping & surface conditioning",
          "Multi-shade polychromatic resin layering",
          "Diamond bur contouring & high-gloss diamond paste polishing",
          "5-Year Clinical Craftsmanship Warranty",
          "Personalized patient coordinator assistance"
        ],
        "price": {
          "USD": "$140",
          "EUR": "€125",
          "GBP": "£110"
        }
      },
      {
        "name": "8-Unit Smile Line Composite Makeover",
        "brand": "German Tokuyama / 3M Nano-Hybrid Resin",
        "duration": "2 – 4 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "popular": true,
        "included": [
          "8x Upper Social Smile Direct Composite Veneers",
          "3D Digital Smile Simulation & Tooth Proportions Analysis",
          "Diastema (gap) closure & incisal edge elongation",
          "4-Star Luxury Hotel Stay in Antalya (3 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Comprehensive high-gloss polish & surface sealant",
          "5-Year Clinical Warranty & aftercare kit"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£780"
        }
      },
      {
        "name": "16-Unit Full Composite Smile Makeover",
        "brand": "Premium German Nano-Hybrid Polychromatic Resin",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "included": [
          "16x Direct Composite Veneers (8 Upper + 8 Lower Teeth)",
          "Full aesthetic bite alignment & golden ratio facial harmony",
          "Dual arch composite sculpting with multi-shade opalescent layers",
          "4-Star Hotel Stay with Breakfast in Antalya (4 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Custom dental night guard & protective travel kit",
          "5-Year Clinical Warranty on all bonded surfaces"
        ],
        "price": {
          "USD": "$1,850",
          "EUR": "€1,690",
          "GBP": "£1,490"
        }
      },
      {
        "name": "Diastema Closure & Edge Bonding Package",
        "brand": "3M Filtek / Tokuyama Estelite Asteria",
        "duration": "1 – 3 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Direct gap closure between central incisors & edge repair",
          "Zero tooth shaving / 100% enamel preservation",
          "Micro-hybrid layering matching natural tooth luminescence",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$570",
          "EUR": "€520",
          "GBP": "£450"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between Composite Veneers and Porcelain / E-Max Veneers?",
        "a": [
          "Composite veneers are sculpted directly onto your teeth chairside using high-tech nano-hybrid resin in a single visit, requiring minimal to no tooth shaving.",
          "Porcelain and E-Max veneers are custom-milled in a dental laboratory from lithium disilicate glass-ceramic, offering higher stain resistance and 15–20 year longevity, while composite veneers typically last 5–8 years with regular polishing."
        ]
      },
      {
        "q": "Do composite veneers require drilling of natural teeth?",
        "a": [
          "In the vast majority of cases, composite bonding requires zero or microscopic surface etching to bond the resin securely to your enamel.",
          "This makes composite veneers the most conservative and reversible cosmetic smile enhancement available."
        ]
      },
      {
        "q": "Can composite veneers be repaired if they chip?",
        "a": [
          "Yes! One of the biggest advantages of composite resin is that chips or minor wear can be quickly and seamlessly repaired chairside in minutes without replacing the entire veneer."
        ]
      },
      {
        "q": "How long does the composite veneer procedure take?",
        "a": [
          "A full smile makeover with 8 to 16 composite veneers is typically completed in 1 to 2 sessions over a 2 to 4-day stay in Antalya."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "Direct Composite Veneer & Dental Bonding Packages",
    "packagesSubtitle": "Minimally invasive, single-visit smile design packages with premium German nano-hybrid composite resin, shade-matching artistry, hotel stay, and VIP transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Composite Veneers & Bonding",
    "faqSubtitle": "Detailed clinical guidance on direct composite resin veneers, same-day chairside bonding, diastema closures, staining resistance, durability, and aftercare in Antalya.",
    "stayDuration": "<strong>2 to 4 days in Antalya.</strong> Direct composite veneers and bonding can often be completed in 1 to 2 clinical sessions with immediate same-day smile results.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to visit Antalya once. Your composite veneers or smile bonding are sculpted, cured, and high-gloss polished in a single visit.",
    "recoveryTime": "<strong>Immediate recovery.</strong> Zero downtime and no invasive enamel reduction. You can eat, speak, and smile immediately following your chairside appointment.",
    "priceEstimate": "<strong>Composite Veneer prices start at £110 / €125 / $140 per tooth.</strong> Multi-unit smile packages (6, 8, or 16 teeth) include comprehensive 3D smile analysis, luxury hotel accommodation, and VIP transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Composite Veneer / Bonding",
        "brand": "German Tokuyama / 3M Filtek Supreme Nano-Hybrid",
        "duration": "1 – 2 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Layered Nano-Hybrid Composite Veneer",
          "Micro-aesthetic tooth shaping & surface conditioning",
          "Multi-shade polychromatic resin layering",
          "Diamond bur contouring & high-gloss diamond paste polishing",
          "5-Year Clinical Craftsmanship Warranty",
          "Personalized patient coordinator assistance"
        ],
        "price": {
          "USD": "$140",
          "EUR": "€125",
          "GBP": "£110"
        }
      },
      {
        "name": "8-Unit Smile Line Composite Makeover",
        "brand": "German Tokuyama / 3M Nano-Hybrid Resin",
        "duration": "2 – 4 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "popular": true,
        "included": [
          "8x Upper Social Smile Direct Composite Veneers",
          "3D Digital Smile Simulation & Tooth Proportions Analysis",
          "Diastema (gap) closure & incisal edge elongation",
          "4-Star Luxury Hotel Stay in Antalya (3 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Comprehensive high-gloss polish & surface sealant",
          "5-Year Clinical Warranty & aftercare kit"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£780"
        }
      },
      {
        "name": "16-Unit Full Composite Smile Makeover",
        "brand": "Premium German Nano-Hybrid Polychromatic Resin",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "included": [
          "16x Direct Composite Veneers (8 Upper + 8 Lower Teeth)",
          "Full aesthetic bite alignment & golden ratio facial harmony",
          "Dual arch composite sculpting with multi-shade opalescent layers",
          "4-Star Hotel Stay with Breakfast in Antalya (4 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Custom dental night guard & protective travel kit",
          "5-Year Clinical Warranty on all bonded surfaces"
        ],
        "price": {
          "USD": "$1,850",
          "EUR": "€1,690",
          "GBP": "£1,490"
        }
      },
      {
        "name": "Diastema Closure & Edge Bonding Package",
        "brand": "3M Filtek / Tokuyama Estelite Asteria",
        "duration": "1 – 3 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Direct gap closure between central incisors & edge repair",
          "Zero tooth shaving / 100% enamel preservation",
          "Micro-hybrid layering matching natural tooth luminescence",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$570",
          "EUR": "€520",
          "GBP": "£450"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between Composite Veneers and Porcelain / E-Max Veneers?",
        "a": [
          "Composite veneers are sculpted directly onto your teeth chairside using high-tech nano-hybrid resin in a single visit, requiring minimal to no tooth shaving.",
          "Porcelain and E-Max veneers are custom-milled in a dental laboratory from lithium disilicate glass-ceramic, offering higher stain resistance and 15–20 year longevity, while composite veneers typically last 5–8 years with regular polishing."
        ]
      },
      {
        "q": "Do composite veneers require drilling of natural teeth?",
        "a": [
          "In the vast majority of cases, composite bonding requires zero or microscopic surface etching to bond the resin securely to your enamel.",
          "This makes composite veneers the most conservative and reversible cosmetic smile enhancement available."
        ]
      },
      {
        "q": "Can composite veneers be repaired if they chip?",
        "a": [
          "Yes! One of the biggest advantages of composite resin is that chips or minor wear can be quickly and seamlessly repaired chairside in minutes without replacing the entire veneer."
        ]
      },
      {
        "q": "How long does the composite veneer procedure take?",
        "a": [
          "A full smile makeover with 8 to 16 composite veneers is typically completed in 1 to 2 sessions over a 2 to 4-day stay in Antalya."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "Direct Composite Veneer & Dental Bonding Packages",
    "packagesSubtitle": "Minimally invasive, single-visit smile design packages with premium German nano-hybrid composite resin, shade-matching artistry, hotel stay, and VIP transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Composite Veneers & Bonding",
    "faqSubtitle": "Detailed clinical guidance on direct composite resin veneers, same-day chairside bonding, diastema closures, staining resistance, durability, and aftercare in Antalya.",
    "stayDuration": "<strong>2 to 4 days in Antalya.</strong> Direct composite veneers and bonding can often be completed in 1 to 2 clinical sessions with immediate same-day smile results.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to visit Antalya once. Your composite veneers or smile bonding are sculpted, cured, and high-gloss polished in a single visit.",
    "recoveryTime": "<strong>Immediate recovery.</strong> Zero downtime and no invasive enamel reduction. You can eat, speak, and smile immediately following your chairside appointment.",
    "priceEstimate": "<strong>Composite Veneer prices start at £110 / €125 / $140 per tooth.</strong> Multi-unit smile packages (6, 8, or 16 teeth) include comprehensive 3D smile analysis, luxury hotel accommodation, and VIP transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Composite Veneer / Bonding",
        "brand": "German Tokuyama / 3M Filtek Supreme Nano-Hybrid",
        "duration": "1 – 2 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Layered Nano-Hybrid Composite Veneer",
          "Micro-aesthetic tooth shaping & surface conditioning",
          "Multi-shade polychromatic resin layering",
          "Diamond bur contouring & high-gloss diamond paste polishing",
          "5-Year Clinical Craftsmanship Warranty",
          "Personalized patient coordinator assistance"
        ],
        "price": {
          "USD": "$140",
          "EUR": "€125",
          "GBP": "£110"
        }
      },
      {
        "name": "8-Unit Smile Line Composite Makeover",
        "brand": "German Tokuyama / 3M Nano-Hybrid Resin",
        "duration": "2 – 4 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "popular": true,
        "included": [
          "8x Upper Social Smile Direct Composite Veneers",
          "3D Digital Smile Simulation & Tooth Proportions Analysis",
          "Diastema (gap) closure & incisal edge elongation",
          "4-Star Luxury Hotel Stay in Antalya (3 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Comprehensive high-gloss polish & surface sealant",
          "5-Year Clinical Warranty & aftercare kit"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£780"
        }
      },
      {
        "name": "16-Unit Full Composite Smile Makeover",
        "brand": "Premium German Nano-Hybrid Polychromatic Resin",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "included": [
          "16x Direct Composite Veneers (8 Upper + 8 Lower Teeth)",
          "Full aesthetic bite alignment & golden ratio facial harmony",
          "Dual arch composite sculpting with multi-shade opalescent layers",
          "4-Star Hotel Stay with Breakfast in Antalya (4 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Custom dental night guard & protective travel kit",
          "5-Year Clinical Warranty on all bonded surfaces"
        ],
        "price": {
          "USD": "$1,850",
          "EUR": "€1,690",
          "GBP": "£1,490"
        }
      },
      {
        "name": "Diastema Closure & Edge Bonding Package",
        "brand": "3M Filtek / Tokuyama Estelite Asteria",
        "duration": "1 – 3 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Direct gap closure between central incisors & edge repair",
          "Zero tooth shaving / 100% enamel preservation",
          "Micro-hybrid layering matching natural tooth luminescence",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$570",
          "EUR": "€520",
          "GBP": "£450"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between Composite Veneers and Porcelain / E-Max Veneers?",
        "a": [
          "Composite veneers are sculpted directly onto your teeth chairside using high-tech nano-hybrid resin in a single visit, requiring minimal to no tooth shaving.",
          "Porcelain and E-Max veneers are custom-milled in a dental laboratory from lithium disilicate glass-ceramic, offering higher stain resistance and 15–20 year longevity, while composite veneers typically last 5–8 years with regular polishing."
        ]
      },
      {
        "q": "Do composite veneers require drilling of natural teeth?",
        "a": [
          "In the vast majority of cases, composite bonding requires zero or microscopic surface etching to bond the resin securely to your enamel.",
          "This makes composite veneers the most conservative and reversible cosmetic smile enhancement available."
        ]
      },
      {
        "q": "Can composite veneers be repaired if they chip?",
        "a": [
          "Yes! One of the biggest advantages of composite resin is that chips or minor wear can be quickly and seamlessly repaired chairside in minutes without replacing the entire veneer."
        ]
      },
      {
        "q": "How long does the composite veneer procedure take?",
        "a": [
          "A full smile makeover with 8 to 16 composite veneers is typically completed in 1 to 2 sessions over a 2 to 4-day stay in Antalya."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "Direct Composite Veneer & Dental Bonding Packages",
    "packagesSubtitle": "Minimally invasive, single-visit smile design packages with premium German nano-hybrid composite resin, shade-matching artistry, hotel stay, and VIP transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Composite Veneers & Bonding",
    "faqSubtitle": "Detailed clinical guidance on direct composite resin veneers, same-day chairside bonding, diastema closures, staining resistance, durability, and aftercare in Antalya.",
    "stayDuration": "<strong>2 to 4 days in Antalya.</strong> Direct composite veneers and bonding can often be completed in 1 to 2 clinical sessions with immediate same-day smile results.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to visit Antalya once. Your composite veneers or smile bonding are sculpted, cured, and high-gloss polished in a single visit.",
    "recoveryTime": "<strong>Immediate recovery.</strong> Zero downtime and no invasive enamel reduction. You can eat, speak, and smile immediately following your chairside appointment.",
    "priceEstimate": "<strong>Composite Veneer prices start at £110 / €125 / $140 per tooth.</strong> Multi-unit smile packages (6, 8, or 16 teeth) include comprehensive 3D smile analysis, luxury hotel accommodation, and VIP transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Composite Veneer / Bonding",
        "brand": "German Tokuyama / 3M Filtek Supreme Nano-Hybrid",
        "duration": "1 – 2 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Layered Nano-Hybrid Composite Veneer",
          "Micro-aesthetic tooth shaping & surface conditioning",
          "Multi-shade polychromatic resin layering",
          "Diamond bur contouring & high-gloss diamond paste polishing",
          "5-Year Clinical Craftsmanship Warranty",
          "Personalized patient coordinator assistance"
        ],
        "price": {
          "USD": "$140",
          "EUR": "€125",
          "GBP": "£110"
        }
      },
      {
        "name": "8-Unit Smile Line Composite Makeover",
        "brand": "German Tokuyama / 3M Nano-Hybrid Resin",
        "duration": "2 – 4 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "popular": true,
        "included": [
          "8x Upper Social Smile Direct Composite Veneers",
          "3D Digital Smile Simulation & Tooth Proportions Analysis",
          "Diastema (gap) closure & incisal edge elongation",
          "4-Star Luxury Hotel Stay in Antalya (3 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Comprehensive high-gloss polish & surface sealant",
          "5-Year Clinical Warranty & aftercare kit"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£780"
        }
      },
      {
        "name": "16-Unit Full Composite Smile Makeover",
        "brand": "Premium German Nano-Hybrid Polychromatic Resin",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "included": [
          "16x Direct Composite Veneers (8 Upper + 8 Lower Teeth)",
          "Full aesthetic bite alignment & golden ratio facial harmony",
          "Dual arch composite sculpting with multi-shade opalescent layers",
          "4-Star Hotel Stay with Breakfast in Antalya (4 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Custom dental night guard & protective travel kit",
          "5-Year Clinical Warranty on all bonded surfaces"
        ],
        "price": {
          "USD": "$1,850",
          "EUR": "€1,690",
          "GBP": "£1,490"
        }
      },
      {
        "name": "Diastema Closure & Edge Bonding Package",
        "brand": "3M Filtek / Tokuyama Estelite Asteria",
        "duration": "1 – 3 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Direct gap closure between central incisors & edge repair",
          "Zero tooth shaving / 100% enamel preservation",
          "Micro-hybrid layering matching natural tooth luminescence",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$570",
          "EUR": "€520",
          "GBP": "£450"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between Composite Veneers and Porcelain / E-Max Veneers?",
        "a": [
          "Composite veneers are sculpted directly onto your teeth chairside using high-tech nano-hybrid resin in a single visit, requiring minimal to no tooth shaving.",
          "Porcelain and E-Max veneers are custom-milled in a dental laboratory from lithium disilicate glass-ceramic, offering higher stain resistance and 15–20 year longevity, while composite veneers typically last 5–8 years with regular polishing."
        ]
      },
      {
        "q": "Do composite veneers require drilling of natural teeth?",
        "a": [
          "In the vast majority of cases, composite bonding requires zero or microscopic surface etching to bond the resin securely to your enamel.",
          "This makes composite veneers the most conservative and reversible cosmetic smile enhancement available."
        ]
      },
      {
        "q": "Can composite veneers be repaired if they chip?",
        "a": [
          "Yes! One of the biggest advantages of composite resin is that chips or minor wear can be quickly and seamlessly repaired chairside in minutes without replacing the entire veneer."
        ]
      },
      {
        "q": "How long does the composite veneer procedure take?",
        "a": [
          "A full smile makeover with 8 to 16 composite veneers is typically completed in 1 to 2 sessions over a 2 to 4-day stay in Antalya."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "Direct Composite Veneer & Dental Bonding Packages",
    "packagesSubtitle": "Minimally invasive, single-visit smile design packages with premium German nano-hybrid composite resin, shade-matching artistry, hotel stay, and VIP transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Composite Veneers & Bonding",
    "faqSubtitle": "Detailed clinical guidance on direct composite resin veneers, same-day chairside bonding, diastema closures, staining resistance, durability, and aftercare in Antalya.",
    "stayDuration": "<strong>2 to 4 days in Antalya.</strong> Direct composite veneers and bonding can often be completed in 1 to 2 clinical sessions with immediate same-day smile results.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to visit Antalya once. Your composite veneers or smile bonding are sculpted, cured, and high-gloss polished in a single visit.",
    "recoveryTime": "<strong>Immediate recovery.</strong> Zero downtime and no invasive enamel reduction. You can eat, speak, and smile immediately following your chairside appointment.",
    "priceEstimate": "<strong>Composite Veneer prices start at £110 / €125 / $140 per tooth.</strong> Multi-unit smile packages (6, 8, or 16 teeth) include comprehensive 3D smile analysis, luxury hotel accommodation, and VIP transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Composite Veneer / Bonding",
        "brand": "German Tokuyama / 3M Filtek Supreme Nano-Hybrid",
        "duration": "1 – 2 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Layered Nano-Hybrid Composite Veneer",
          "Micro-aesthetic tooth shaping & surface conditioning",
          "Multi-shade polychromatic resin layering",
          "Diamond bur contouring & high-gloss diamond paste polishing",
          "5-Year Clinical Craftsmanship Warranty",
          "Personalized patient coordinator assistance"
        ],
        "price": {
          "USD": "$140",
          "EUR": "€125",
          "GBP": "£110"
        }
      },
      {
        "name": "8-Unit Smile Line Composite Makeover",
        "brand": "German Tokuyama / 3M Nano-Hybrid Resin",
        "duration": "2 – 4 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "popular": true,
        "included": [
          "8x Upper Social Smile Direct Composite Veneers",
          "3D Digital Smile Simulation & Tooth Proportions Analysis",
          "Diastema (gap) closure & incisal edge elongation",
          "4-Star Luxury Hotel Stay in Antalya (3 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Comprehensive high-gloss polish & surface sealant",
          "5-Year Clinical Warranty & aftercare kit"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£780"
        }
      },
      {
        "name": "16-Unit Full Composite Smile Makeover",
        "brand": "Premium German Nano-Hybrid Polychromatic Resin",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "included": [
          "16x Direct Composite Veneers (8 Upper + 8 Lower Teeth)",
          "Full aesthetic bite alignment & golden ratio facial harmony",
          "Dual arch composite sculpting with multi-shade opalescent layers",
          "4-Star Hotel Stay with Breakfast in Antalya (4 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Custom dental night guard & protective travel kit",
          "5-Year Clinical Warranty on all bonded surfaces"
        ],
        "price": {
          "USD": "$1,850",
          "EUR": "€1,690",
          "GBP": "£1,490"
        }
      },
      {
        "name": "Diastema Closure & Edge Bonding Package",
        "brand": "3M Filtek / Tokuyama Estelite Asteria",
        "duration": "1 – 3 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Direct gap closure between central incisors & edge repair",
          "Zero tooth shaving / 100% enamel preservation",
          "Micro-hybrid layering matching natural tooth luminescence",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$570",
          "EUR": "€520",
          "GBP": "£450"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between Composite Veneers and Porcelain / E-Max Veneers?",
        "a": [
          "Composite veneers are sculpted directly onto your teeth chairside using high-tech nano-hybrid resin in a single visit, requiring minimal to no tooth shaving.",
          "Porcelain and E-Max veneers are custom-milled in a dental laboratory from lithium disilicate glass-ceramic, offering higher stain resistance and 15–20 year longevity, while composite veneers typically last 5–8 years with regular polishing."
        ]
      },
      {
        "q": "Do composite veneers require drilling of natural teeth?",
        "a": [
          "In the vast majority of cases, composite bonding requires zero or microscopic surface etching to bond the resin securely to your enamel.",
          "This makes composite veneers the most conservative and reversible cosmetic smile enhancement available."
        ]
      },
      {
        "q": "Can composite veneers be repaired if they chip?",
        "a": [
          "Yes! One of the biggest advantages of composite resin is that chips or minor wear can be quickly and seamlessly repaired chairside in minutes without replacing the entire veneer."
        ]
      },
      {
        "q": "How long does the composite veneer procedure take?",
        "a": [
          "A full smile makeover with 8 to 16 composite veneers is typically completed in 1 to 2 sessions over a 2 to 4-day stay in Antalya."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "Direct Composite Veneer & Dental Bonding Packages",
    "packagesSubtitle": "Minimally invasive, single-visit smile design packages with premium German nano-hybrid composite resin, shade-matching artistry, hotel stay, and VIP transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Composite Veneers & Bonding",
    "faqSubtitle": "Detailed clinical guidance on direct composite resin veneers, same-day chairside bonding, diastema closures, staining resistance, durability, and aftercare in Antalya.",
    "stayDuration": "<strong>2 to 4 days in Antalya.</strong> Direct composite veneers and bonding can often be completed in 1 to 2 clinical sessions with immediate same-day smile results.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to visit Antalya once. Your composite veneers or smile bonding are sculpted, cured, and high-gloss polished in a single visit.",
    "recoveryTime": "<strong>Immediate recovery.</strong> Zero downtime and no invasive enamel reduction. You can eat, speak, and smile immediately following your chairside appointment.",
    "priceEstimate": "<strong>Composite Veneer prices start at £110 / €125 / $140 per tooth.</strong> Multi-unit smile packages (6, 8, or 16 teeth) include comprehensive 3D smile analysis, luxury hotel accommodation, and VIP transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Composite Veneer / Bonding",
        "brand": "German Tokuyama / 3M Filtek Supreme Nano-Hybrid",
        "duration": "1 – 2 Days (1 Trip)",
        "img": "/treatments/accordion/composite-laminate.webp",
        "included": [
          "1x Direct Layered Nano-Hybrid Composite Veneer",
          "Micro-aesthetic tooth shaping & surface conditioning",
          "Multi-shade polychromatic resin layering",
          "Diamond bur contouring & high-gloss diamond paste polishing",
          "5-Year Clinical Craftsmanship Warranty",
          "Personalized patient coordinator assistance"
        ],
        "price": {
          "USD": "$140",
          "EUR": "€125",
          "GBP": "£110"
        }
      },
      {
        "name": "8-Unit Smile Line Composite Makeover",
        "brand": "German Tokuyama / 3M Nano-Hybrid Resin",
        "duration": "2 – 4 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "popular": true,
        "included": [
          "8x Upper Social Smile Direct Composite Veneers",
          "3D Digital Smile Simulation & Tooth Proportions Analysis",
          "Diastema (gap) closure & incisal edge elongation",
          "4-Star Luxury Hotel Stay in Antalya (3 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Comprehensive high-gloss polish & surface sealant",
          "5-Year Clinical Warranty & aftercare kit"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£780"
        }
      },
      {
        "name": "16-Unit Full Composite Smile Makeover",
        "brand": "Premium German Nano-Hybrid Polychromatic Resin",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "included": [
          "16x Direct Composite Veneers (8 Upper + 8 Lower Teeth)",
          "Full aesthetic bite alignment & golden ratio facial harmony",
          "Dual arch composite sculpting with multi-shade opalescent layers",
          "4-Star Hotel Stay with Breakfast in Antalya (4 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Custom dental night guard & protective travel kit",
          "5-Year Clinical Warranty on all bonded surfaces"
        ],
        "price": {
          "USD": "$1,850",
          "EUR": "€1,690",
          "GBP": "£1,490"
        }
      },
      {
        "name": "Diastema Closure & Edge Bonding Package",
        "brand": "3M Filtek / Tokuyama Estelite Asteria",
        "duration": "1 – 3 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "Direct gap closure between central incisors & edge repair",
          "Zero tooth shaving / 100% enamel preservation",
          "Micro-hybrid layering matching natural tooth luminescence",
          "VIP Mercedes Transfers",
          "5-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$570",
          "EUR": "€520",
          "GBP": "£450"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between Composite Veneers and Porcelain / E-Max Veneers?",
        "a": [
          "Composite veneers are sculpted directly onto your teeth chairside using high-tech nano-hybrid resin in a single visit, requiring minimal to no tooth shaving.",
          "Porcelain and E-Max veneers are custom-milled in a dental laboratory from lithium disilicate glass-ceramic, offering higher stain resistance and 15–20 year longevity, while composite veneers typically last 5–8 years with regular polishing."
        ]
      },
      {
        "q": "Do composite veneers require drilling of natural teeth?",
        "a": [
          "In the vast majority of cases, composite bonding requires zero or microscopic surface etching to bond the resin securely to your enamel.",
          "This makes composite veneers the most conservative and reversible cosmetic smile enhancement available."
        ]
      },
      {
        "q": "Can composite veneers be repaired if they chip?",
        "a": [
          "Yes! One of the biggest advantages of composite resin is that chips or minor wear can be quickly and seamlessly repaired chairside in minutes without replacing the entire veneer."
        ]
      },
      {
        "q": "How long does the composite veneer procedure take?",
        "a": [
          "A full smile makeover with 8 to 16 composite veneers is typically completed in 1 to 2 sessions over a 2 to 4-day stay in Antalya."
        ]
      }
    ]
  }
};

export default function CompositeVeneersDetailView() {
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
      <section aria-labelledby="compositeveneersdetailview-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="compositeveneersdetailview-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="compositeveneersdetailview-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="compositeveneersdetailview-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`compositeveneersdetailview-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`compositeveneersdetailview-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Composite Veneers" />
      </div>
    </div>
  );
}
