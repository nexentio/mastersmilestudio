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
import styles from './EmpressVeneersDetailView.module.css';

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
    "packagesTitle": "IPS Empress Leucite Glass-Ceramic Veneer Packages",
    "packagesSubtitle": "Exquisite hand-layered Swiss Ivoclar IPS Empress glass-ceramic veneers providing unparalleled light dispersion, luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About IPS Empress Veneers",
    "faqSubtitle": "Detailed clinical insights on leucite-reinforced glass-ceramic veneers, optical depth, chameleon effect, procedure steps, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D digital impressions, micro-preparation, bespoke master ceramist layering of IPS Empress ceramic, and permanent adhesive cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya. Your complete smile makeover is designed and permanently placed during this single trip.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive preparation ensures fast tissue healing and comfortable bite adaptation immediately.",
    "priceEstimate": "<strong>IPS Empress Veneer prices start at £230 / €260 / $285 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single IPS Empress Veneer",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Leucite Glass-Ceramic",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Custom Hand-Layered IPS Empress Glass-Ceramic Veneer",
          "Micro-preparation (0.3 – 0.5 mm) & temporary veneer",
          "High-definition 3D intraoral digital scan",
          "Individual master ceramist shade and translucency staining",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      },
      {
        "name": "8-Unit Empress Smile Line Makeover",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Esthetic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
        "popular": true,
        "included": [
          "8x Hand-Crafted IPS Empress Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design & Facial Proportion Analysis",
          "Temporary trial smile fitted on Day 1",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against chipping or debonding"
        ],
        "price": {
          "USD": "$2,190",
          "EUR": "€1,990",
          "GBP": "£1,750"
        }
      },
      {
        "name": "16-Unit Full Empress Smile Makeover",
        "brand": "Swiss Ivoclar IPS Empress (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
        "included": [
          "16x Custom IPS Empress Glass-Ceramic Veneers (8 Upper + 8 Lower)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom night guard & post-op care kit",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,250",
          "EUR": "€3,850",
          "GBP": "£3,390"
        }
      },
      {
        "name": "20-Unit Full Hollywood Empress Makeover",
        "brand": "Swiss Ivoclar IPS Empress High-Translucency",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Natural IPS Empress Veneers (10 Upper + 10 Lower Teeth)",
          "Chameleon effect optical blending with supreme lifelike depth",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$5,190",
          "EUR": "€4,750",
          "GBP": "£4,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are IPS Empress Veneers and what makes them unique?",
        "a": [
          "IPS Empress is a world-renowned leucite-reinforced glass-ceramic manufactured by Ivoclar Vivadent in Switzerland.",
          "It is celebrated worldwide for its exceptional light scattering and opalescence, closely mimicking natural dental enamel with a 'chameleon effect' that seamlessly blends with surrounding teeth."
        ]
      },
      {
        "q": "What is the difference between IPS Empress and IPS e.max?",
        "a": [
          "Both are premium Swiss ceramics from Ivoclar Vivadent. IPS e.max is lithium disilicate (500 MPa strength), making it ideal for both thin veneers and posterior crowns.",
          "IPS Empress is leucite glass-ceramic (160–185 MPa), which offers slightly softer, ultra-realistic optical depth and fluorescence, making it the premier choice for anterior cosmetic perfection."
        ]
      },
      {
        "q": "How many days does an Empress Veneer treatment take in Antalya?",
        "a": [
          "The complete treatment requires 5 to 7 days in Antalya during a single visit, including 3D scanning, laboratory fabrication by master ceramists, and final resin bonding."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "IPS Empress Porselen Lamina Paketleri",
    "packagesSubtitle": "İsviçre Ivoclar IPS Empress lösit cam-seramik ile doğal ışık geçirgenliğine sahip lüks yaprak porselen paketleri.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "IPS Empress Lamina Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Detailed clinical insights on leucite-reinforced glass-ceramic veneers, optical depth, chameleon effect, procedure steps, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D digital impressions, micro-preparation, bespoke master ceramist layering of IPS Empress ceramic, and permanent adhesive cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya. Your complete smile makeover is designed and permanently placed during this single trip.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive preparation ensures fast tissue healing and comfortable bite adaptation immediately.",
    "priceEstimate": "<strong>IPS Empress Veneer prices start at £230 / €260 / $285 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single IPS Empress Veneer",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Leucite Glass-Ceramic",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Custom Hand-Layered IPS Empress Glass-Ceramic Veneer",
          "Micro-preparation (0.3 – 0.5 mm) & temporary veneer",
          "High-definition 3D intraoral digital scan",
          "Individual master ceramist shade and translucency staining",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      },
      {
        "name": "8-Unit Empress Smile Line Makeover",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Esthetic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
        "popular": true,
        "included": [
          "8x Hand-Crafted IPS Empress Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design & Facial Proportion Analysis",
          "Temporary trial smile fitted on Day 1",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against chipping or debonding"
        ],
        "price": {
          "USD": "$2,190",
          "EUR": "€1,990",
          "GBP": "£1,750"
        }
      },
      {
        "name": "16-Unit Full Empress Smile Makeover",
        "brand": "Swiss Ivoclar IPS Empress (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
        "included": [
          "16x Custom IPS Empress Glass-Ceramic Veneers (8 Upper + 8 Lower)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom night guard & post-op care kit",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,250",
          "EUR": "€3,850",
          "GBP": "£3,390"
        }
      },
      {
        "name": "20-Unit Full Hollywood Empress Makeover",
        "brand": "Swiss Ivoclar IPS Empress High-Translucency",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Natural IPS Empress Veneers (10 Upper + 10 Lower Teeth)",
          "Chameleon effect optical blending with supreme lifelike depth",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$5,190",
          "EUR": "€4,750",
          "GBP": "£4,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are IPS Empress Veneers and what makes them unique?",
        "a": [
          "IPS Empress is a world-renowned leucite-reinforced glass-ceramic manufactured by Ivoclar Vivadent in Switzerland.",
          "It is celebrated worldwide for its exceptional light scattering and opalescence, closely mimicking natural dental enamel with a 'chameleon effect' that seamlessly blends with surrounding teeth."
        ]
      },
      {
        "q": "What is the difference between IPS Empress and IPS e.max?",
        "a": [
          "Both are premium Swiss ceramics from Ivoclar Vivadent. IPS e.max is lithium disilicate (500 MPa strength), making it ideal for both thin veneers and posterior crowns.",
          "IPS Empress is leucite glass-ceramic (160–185 MPa), which offers slightly softer, ultra-realistic optical depth and fluorescence, making it the premier choice for anterior cosmetic perfection."
        ]
      },
      {
        "q": "How many days does an Empress Veneer treatment take in Antalya?",
        "a": [
          "The complete treatment requires 5 to 7 days in Antalya during a single visit, including 3D scanning, laboratory fabrication by master ceramists, and final resin bonding."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "IPS Empress Leucite Glass-Ceramic Veneer Packages",
    "packagesSubtitle": "Exquisite hand-layered Swiss Ivoclar IPS Empress glass-ceramic veneers providing unparalleled light dispersion, luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About IPS Empress Veneers",
    "faqSubtitle": "Detailed clinical insights on leucite-reinforced glass-ceramic veneers, optical depth, chameleon effect, procedure steps, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D digital impressions, micro-preparation, bespoke master ceramist layering of IPS Empress ceramic, and permanent adhesive cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya. Your complete smile makeover is designed and permanently placed during this single trip.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive preparation ensures fast tissue healing and comfortable bite adaptation immediately.",
    "priceEstimate": "<strong>IPS Empress Veneer prices start at £230 / €260 / $285 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single IPS Empress Veneer",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Leucite Glass-Ceramic",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Custom Hand-Layered IPS Empress Glass-Ceramic Veneer",
          "Micro-preparation (0.3 – 0.5 mm) & temporary veneer",
          "High-definition 3D intraoral digital scan",
          "Individual master ceramist shade and translucency staining",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      },
      {
        "name": "8-Unit Empress Smile Line Makeover",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Esthetic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
        "popular": true,
        "included": [
          "8x Hand-Crafted IPS Empress Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design & Facial Proportion Analysis",
          "Temporary trial smile fitted on Day 1",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against chipping or debonding"
        ],
        "price": {
          "USD": "$2,190",
          "EUR": "€1,990",
          "GBP": "£1,750"
        }
      },
      {
        "name": "16-Unit Full Empress Smile Makeover",
        "brand": "Swiss Ivoclar IPS Empress (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
        "included": [
          "16x Custom IPS Empress Glass-Ceramic Veneers (8 Upper + 8 Lower)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom night guard & post-op care kit",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,250",
          "EUR": "€3,850",
          "GBP": "£3,390"
        }
      },
      {
        "name": "20-Unit Full Hollywood Empress Makeover",
        "brand": "Swiss Ivoclar IPS Empress High-Translucency",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Natural IPS Empress Veneers (10 Upper + 10 Lower Teeth)",
          "Chameleon effect optical blending with supreme lifelike depth",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$5,190",
          "EUR": "€4,750",
          "GBP": "£4,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are IPS Empress Veneers and what makes them unique?",
        "a": [
          "IPS Empress is a world-renowned leucite-reinforced glass-ceramic manufactured by Ivoclar Vivadent in Switzerland.",
          "It is celebrated worldwide for its exceptional light scattering and opalescence, closely mimicking natural dental enamel with a 'chameleon effect' that seamlessly blends with surrounding teeth."
        ]
      },
      {
        "q": "What is the difference between IPS Empress and IPS e.max?",
        "a": [
          "Both are premium Swiss ceramics from Ivoclar Vivadent. IPS e.max is lithium disilicate (500 MPa strength), making it ideal for both thin veneers and posterior crowns.",
          "IPS Empress is leucite glass-ceramic (160–185 MPa), which offers slightly softer, ultra-realistic optical depth and fluorescence, making it the premier choice for anterior cosmetic perfection."
        ]
      },
      {
        "q": "How many days does an Empress Veneer treatment take in Antalya?",
        "a": [
          "The complete treatment requires 5 to 7 days in Antalya during a single visit, including 3D scanning, laboratory fabrication by master ceramists, and final resin bonding."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "IPS Empress Leucite Glass-Ceramic Veneer Packages",
    "packagesSubtitle": "Exquisite hand-layered Swiss Ivoclar IPS Empress glass-ceramic veneers providing unparalleled light dispersion, luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About IPS Empress Veneers",
    "faqSubtitle": "Detailed clinical insights on leucite-reinforced glass-ceramic veneers, optical depth, chameleon effect, procedure steps, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D digital impressions, micro-preparation, bespoke master ceramist layering of IPS Empress ceramic, and permanent adhesive cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya. Your complete smile makeover is designed and permanently placed during this single trip.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive preparation ensures fast tissue healing and comfortable bite adaptation immediately.",
    "priceEstimate": "<strong>IPS Empress Veneer prices start at £230 / €260 / $285 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single IPS Empress Veneer",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Leucite Glass-Ceramic",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Custom Hand-Layered IPS Empress Glass-Ceramic Veneer",
          "Micro-preparation (0.3 – 0.5 mm) & temporary veneer",
          "High-definition 3D intraoral digital scan",
          "Individual master ceramist shade and translucency staining",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      },
      {
        "name": "8-Unit Empress Smile Line Makeover",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Esthetic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
        "popular": true,
        "included": [
          "8x Hand-Crafted IPS Empress Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design & Facial Proportion Analysis",
          "Temporary trial smile fitted on Day 1",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against chipping or debonding"
        ],
        "price": {
          "USD": "$2,190",
          "EUR": "€1,990",
          "GBP": "£1,750"
        }
      },
      {
        "name": "16-Unit Full Empress Smile Makeover",
        "brand": "Swiss Ivoclar IPS Empress (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
        "included": [
          "16x Custom IPS Empress Glass-Ceramic Veneers (8 Upper + 8 Lower)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom night guard & post-op care kit",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,250",
          "EUR": "€3,850",
          "GBP": "£3,390"
        }
      },
      {
        "name": "20-Unit Full Hollywood Empress Makeover",
        "brand": "Swiss Ivoclar IPS Empress High-Translucency",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Natural IPS Empress Veneers (10 Upper + 10 Lower Teeth)",
          "Chameleon effect optical blending with supreme lifelike depth",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$5,190",
          "EUR": "€4,750",
          "GBP": "£4,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are IPS Empress Veneers and what makes them unique?",
        "a": [
          "IPS Empress is a world-renowned leucite-reinforced glass-ceramic manufactured by Ivoclar Vivadent in Switzerland.",
          "It is celebrated worldwide for its exceptional light scattering and opalescence, closely mimicking natural dental enamel with a 'chameleon effect' that seamlessly blends with surrounding teeth."
        ]
      },
      {
        "q": "What is the difference between IPS Empress and IPS e.max?",
        "a": [
          "Both are premium Swiss ceramics from Ivoclar Vivadent. IPS e.max is lithium disilicate (500 MPa strength), making it ideal for both thin veneers and posterior crowns.",
          "IPS Empress is leucite glass-ceramic (160–185 MPa), which offers slightly softer, ultra-realistic optical depth and fluorescence, making it the premier choice for anterior cosmetic perfection."
        ]
      },
      {
        "q": "How many days does an Empress Veneer treatment take in Antalya?",
        "a": [
          "The complete treatment requires 5 to 7 days in Antalya during a single visit, including 3D scanning, laboratory fabrication by master ceramists, and final resin bonding."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "IPS Empress Leucite Glass-Ceramic Veneer Packages",
    "packagesSubtitle": "Exquisite hand-layered Swiss Ivoclar IPS Empress glass-ceramic veneers providing unparalleled light dispersion, luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About IPS Empress Veneers",
    "faqSubtitle": "Detailed clinical insights on leucite-reinforced glass-ceramic veneers, optical depth, chameleon effect, procedure steps, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D digital impressions, micro-preparation, bespoke master ceramist layering of IPS Empress ceramic, and permanent adhesive cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya. Your complete smile makeover is designed and permanently placed during this single trip.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive preparation ensures fast tissue healing and comfortable bite adaptation immediately.",
    "priceEstimate": "<strong>IPS Empress Veneer prices start at £230 / €260 / $285 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single IPS Empress Veneer",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Leucite Glass-Ceramic",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Custom Hand-Layered IPS Empress Glass-Ceramic Veneer",
          "Micro-preparation (0.3 – 0.5 mm) & temporary veneer",
          "High-definition 3D intraoral digital scan",
          "Individual master ceramist shade and translucency staining",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      },
      {
        "name": "8-Unit Empress Smile Line Makeover",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Esthetic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
        "popular": true,
        "included": [
          "8x Hand-Crafted IPS Empress Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design & Facial Proportion Analysis",
          "Temporary trial smile fitted on Day 1",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against chipping or debonding"
        ],
        "price": {
          "USD": "$2,190",
          "EUR": "€1,990",
          "GBP": "£1,750"
        }
      },
      {
        "name": "16-Unit Full Empress Smile Makeover",
        "brand": "Swiss Ivoclar IPS Empress (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
        "included": [
          "16x Custom IPS Empress Glass-Ceramic Veneers (8 Upper + 8 Lower)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom night guard & post-op care kit",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,250",
          "EUR": "€3,850",
          "GBP": "£3,390"
        }
      },
      {
        "name": "20-Unit Full Hollywood Empress Makeover",
        "brand": "Swiss Ivoclar IPS Empress High-Translucency",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Natural IPS Empress Veneers (10 Upper + 10 Lower Teeth)",
          "Chameleon effect optical blending with supreme lifelike depth",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$5,190",
          "EUR": "€4,750",
          "GBP": "£4,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are IPS Empress Veneers and what makes them unique?",
        "a": [
          "IPS Empress is a world-renowned leucite-reinforced glass-ceramic manufactured by Ivoclar Vivadent in Switzerland.",
          "It is celebrated worldwide for its exceptional light scattering and opalescence, closely mimicking natural dental enamel with a 'chameleon effect' that seamlessly blends with surrounding teeth."
        ]
      },
      {
        "q": "What is the difference between IPS Empress and IPS e.max?",
        "a": [
          "Both are premium Swiss ceramics from Ivoclar Vivadent. IPS e.max is lithium disilicate (500 MPa strength), making it ideal for both thin veneers and posterior crowns.",
          "IPS Empress is leucite glass-ceramic (160–185 MPa), which offers slightly softer, ultra-realistic optical depth and fluorescence, making it the premier choice for anterior cosmetic perfection."
        ]
      },
      {
        "q": "How many days does an Empress Veneer treatment take in Antalya?",
        "a": [
          "The complete treatment requires 5 to 7 days in Antalya during a single visit, including 3D scanning, laboratory fabrication by master ceramists, and final resin bonding."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "IPS Empress Leucite Glass-Ceramic Veneer Packages",
    "packagesSubtitle": "Exquisite hand-layered Swiss Ivoclar IPS Empress glass-ceramic veneers providing unparalleled light dispersion, luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About IPS Empress Veneers",
    "faqSubtitle": "Detailed clinical insights on leucite-reinforced glass-ceramic veneers, optical depth, chameleon effect, procedure steps, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D digital impressions, micro-preparation, bespoke master ceramist layering of IPS Empress ceramic, and permanent adhesive cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya. Your complete smile makeover is designed and permanently placed during this single trip.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive preparation ensures fast tissue healing and comfortable bite adaptation immediately.",
    "priceEstimate": "<strong>IPS Empress Veneer prices start at £230 / €260 / $285 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single IPS Empress Veneer",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Leucite Glass-Ceramic",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Custom Hand-Layered IPS Empress Glass-Ceramic Veneer",
          "Micro-preparation (0.3 – 0.5 mm) & temporary veneer",
          "High-definition 3D intraoral digital scan",
          "Individual master ceramist shade and translucency staining",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      },
      {
        "name": "8-Unit Empress Smile Line Makeover",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Esthetic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
        "popular": true,
        "included": [
          "8x Hand-Crafted IPS Empress Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design & Facial Proportion Analysis",
          "Temporary trial smile fitted on Day 1",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against chipping or debonding"
        ],
        "price": {
          "USD": "$2,190",
          "EUR": "€1,990",
          "GBP": "£1,750"
        }
      },
      {
        "name": "16-Unit Full Empress Smile Makeover",
        "brand": "Swiss Ivoclar IPS Empress (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
        "included": [
          "16x Custom IPS Empress Glass-Ceramic Veneers (8 Upper + 8 Lower)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom night guard & post-op care kit",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,250",
          "EUR": "€3,850",
          "GBP": "£3,390"
        }
      },
      {
        "name": "20-Unit Full Hollywood Empress Makeover",
        "brand": "Swiss Ivoclar IPS Empress High-Translucency",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Natural IPS Empress Veneers (10 Upper + 10 Lower Teeth)",
          "Chameleon effect optical blending with supreme lifelike depth",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$5,190",
          "EUR": "€4,750",
          "GBP": "£4,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are IPS Empress Veneers and what makes them unique?",
        "a": [
          "IPS Empress is a world-renowned leucite-reinforced glass-ceramic manufactured by Ivoclar Vivadent in Switzerland.",
          "It is celebrated worldwide for its exceptional light scattering and opalescence, closely mimicking natural dental enamel with a 'chameleon effect' that seamlessly blends with surrounding teeth."
        ]
      },
      {
        "q": "What is the difference between IPS Empress and IPS e.max?",
        "a": [
          "Both are premium Swiss ceramics from Ivoclar Vivadent. IPS e.max is lithium disilicate (500 MPa strength), making it ideal for both thin veneers and posterior crowns.",
          "IPS Empress is leucite glass-ceramic (160–185 MPa), which offers slightly softer, ultra-realistic optical depth and fluorescence, making it the premier choice for anterior cosmetic perfection."
        ]
      },
      {
        "q": "How many days does an Empress Veneer treatment take in Antalya?",
        "a": [
          "The complete treatment requires 5 to 7 days in Antalya during a single visit, including 3D scanning, laboratory fabrication by master ceramists, and final resin bonding."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "IPS Empress Leucite Glass-Ceramic Veneer Packages",
    "packagesSubtitle": "Exquisite hand-layered Swiss Ivoclar IPS Empress glass-ceramic veneers providing unparalleled light dispersion, luxury hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About IPS Empress Veneers",
    "faqSubtitle": "Detailed clinical insights on leucite-reinforced glass-ceramic veneers, optical depth, chameleon effect, procedure steps, and warranties in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> 3D digital impressions, micro-preparation, bespoke master ceramist layering of IPS Empress ceramic, and permanent adhesive cementation are completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya. Your complete smile makeover is designed and permanently placed during this single trip.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minimally invasive preparation ensures fast tissue healing and comfortable bite adaptation immediately.",
    "priceEstimate": "<strong>IPS Empress Veneer prices start at £230 / €260 / $285 per tooth.</strong> All-inclusive smile makeover packages (8, 16, or 20 veneers) include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single IPS Empress Veneer",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Leucite Glass-Ceramic",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-1.jpg.webp",
        "included": [
          "1x Custom Hand-Layered IPS Empress Glass-Ceramic Veneer",
          "Micro-preparation (0.3 – 0.5 mm) & temporary veneer",
          "High-definition 3D intraoral digital scan",
          "Individual master ceramist shade and translucency staining",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£230"
        }
      },
      {
        "name": "8-Unit Empress Smile Line Makeover",
        "brand": "Swiss Ivoclar Vivadent IPS Empress Esthetic",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-2.jpg.webp",
        "popular": true,
        "included": [
          "8x Hand-Crafted IPS Empress Veneers (Upper Social Smile)",
          "Bespoke 3D Digital Smile Design & Facial Proportion Analysis",
          "Temporary trial smile fitted on Day 1",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty against chipping or debonding"
        ],
        "price": {
          "USD": "$2,190",
          "EUR": "€1,990",
          "GBP": "£1,750"
        }
      },
      {
        "name": "16-Unit Full Empress Smile Makeover",
        "brand": "Swiss Ivoclar IPS Empress (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-3.jpg.webp",
        "included": [
          "16x Custom IPS Empress Glass-Ceramic Veneers (8 Upper + 8 Lower)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Dual arch aesthetic temporary mock-up for live preview",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom night guard & post-op care kit",
          "10-Year Clinical Warranty"
        ],
        "price": {
          "USD": "$4,250",
          "EUR": "€3,850",
          "GBP": "£3,390"
        }
      },
      {
        "name": "20-Unit Full Hollywood Empress Makeover",
        "brand": "Swiss Ivoclar IPS Empress High-Translucency",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/E-Max-Veneer-package-4.jpg.webp",
        "included": [
          "20x Ultra-Natural IPS Empress Veneers (10 Upper + 10 Lower Teeth)",
          "Chameleon effect optical blending with supreme lifelike depth",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & dental passport"
        ],
        "price": {
          "USD": "$5,190",
          "EUR": "€4,750",
          "GBP": "£4,150"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are IPS Empress Veneers and what makes them unique?",
        "a": [
          "IPS Empress is a world-renowned leucite-reinforced glass-ceramic manufactured by Ivoclar Vivadent in Switzerland.",
          "It is celebrated worldwide for its exceptional light scattering and opalescence, closely mimicking natural dental enamel with a 'chameleon effect' that seamlessly blends with surrounding teeth."
        ]
      },
      {
        "q": "What is the difference between IPS Empress and IPS e.max?",
        "a": [
          "Both are premium Swiss ceramics from Ivoclar Vivadent. IPS e.max is lithium disilicate (500 MPa strength), making it ideal for both thin veneers and posterior crowns.",
          "IPS Empress is leucite glass-ceramic (160–185 MPa), which offers slightly softer, ultra-realistic optical depth and fluorescence, making it the premier choice for anterior cosmetic perfection."
        ]
      },
      {
        "q": "How many days does an Empress Veneer treatment take in Antalya?",
        "a": [
          "The complete treatment requires 5 to 7 days in Antalya during a single visit, including 3D scanning, laboratory fabrication by master ceramists, and final resin bonding."
        ]
      }
    ]
  }
};

export default function EmpressVeneersDetailView() {
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
      <section aria-labelledby="empressveneersdetailview-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="empressveneersdetailview-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="empressveneersdetailview-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="empressveneersdetailview-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`empressveneersdetailview-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`empressveneersdetailview-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Empress Veneers" />
      </div>
    </div>
  );
}
