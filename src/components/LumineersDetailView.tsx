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
import styles from './LumineersDetailView.module.css';

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
    "packagesTitle": "No-Prep Lumineers & Contact Lens Veneer Packages",
    "packagesSubtitle": "Ultra-thin 0.2 mm contact lens porcelain veneers placed with zero enamel drilling, no anesthesia, hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About No-Prep Lumineers",
    "faqSubtitle": "Everything you need to know about non-invasive Lumineers, zero tooth preparation, reversibility, optical translucency, and longevity in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> Precision 3D digital impressions, custom fabrication of ultra-thin feldspathic Lumineers, and adhesive bonding are completed in 1 trip.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete non-invasive smile makeover.",
    "recoveryTime": "<strong>Zero recovery time.</strong> Because natural tooth enamel is untouched and no local anesthetic injections are needed, you experience zero sensitivity or downtime.",
    "priceEstimate": "<strong>Lumineers prices start at £260 / €295 / $325 per tooth.</strong> Complete all-inclusive packages include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single No-Prep Lumineer",
        "brand": "Authentic Ultra-Thin Cerinate / Feldspathic Porcelain (0.2 mm)",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Ultra-Thin 0.2mm No-Prep Porcelain Lumineer",
          "Zero tooth reduction / 100% natural enamel preservation",
          "Precision 3D optical scanning & color matching",
          "Light-cured aesthetic resin bonding",
          "10-Year Clinical Warranty & Authenticity Certificate",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$325",
          "EUR": "€295",
          "GBP": "£260"
        }
      },
      {
        "name": "8-Unit Lumineers Smile Line (Upper)",
        "brand": "Ultra-Thin Contact Lens Porcelain (0.2 mm)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x Upper Arch No-Prep Lumineers (Social Smile Line)",
          "Bespoke 3D Digital Smile Design & Live Mockup Preview",
          "Zero drilling, no needles, and completely reversible procedure",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Professional teeth cleaning & shade harmonization",
          "10-Year Comprehensive Warranty"
        ],
        "price": {
          "USD": "$2,490",
          "EUR": "€2,250",
          "GBP": "£1,990"
        }
      },
      {
        "name": "16-Unit Full Lumineers Smile Makeover",
        "brand": "Ultra-Thin Feldspathic Lumineers (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom No-Prep Lumineers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Zero enamel removal across both dental arches",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom dental night guard & international warranty passport"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,850"
        }
      },
      {
        "name": "20-Unit Full Hollywood Lumineers Makeover",
        "brand": "High-Translucency Cerinate Lumineers",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin No-Prep Lumineers (10 Upper + 10 Lower Teeth)",
          "Complete gnathological smile design with maximum natural luminescence",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & VIP care pack"
        ],
        "price": {
          "USD": "$5,890",
          "EUR": "€5,390",
          "GBP": "£4,750"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Lumineers and how do they differ from traditional veneers?",
        "a": [
          "Lumineers are ultra-thin (approx. 0.2 mm, like a contact lens) porcelain veneers that can be bonded directly onto your natural teeth without drilling or removing enamel.",
          "Traditional veneers require 0.3 mm to 0.7 mm of enamel reduction. Because Lumineers preserve your natural enamel completely, the procedure is painless and completely reversible."
        ]
      },
      {
        "q": "Is any tooth drilling or anesthesia required for Lumineers?",
        "a": [
          "No! Lumineers require zero tooth cutting and zero anesthetic injections. The veneers are custom-crafted and bonded adhesively to your existing tooth surfaces."
        ]
      },
      {
        "q": "How long do Lumineers last?",
        "a": [
          "Clinical studies demonstrate that Lumineers can last up to 20 years with proper oral hygiene and regular dental check-ups, thanks to their exceptional adhesive bond with natural enamel."
        ]
      },
      {
        "q": "Am I a suitable candidate for Lumineers?",
        "a": [
          "Lumineers are ideal for patients with minor spacing, slight crowding, discolored teeth, or chipped enamel who want a perfect smile without altering their natural teeth."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "Kesimsiz Lumineers (No-Prep Lamina) Paketleri",
    "packagesSubtitle": "0.2 mm kontakt lens inceliğinde, diş kesimi ve anestezi gerektirmeyen her şey dahil Lumineers yaprak porselen paketleri.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Lumineers (Kesimsiz Yaprak Porselen) Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Everything you need to know about non-invasive Lumineers, zero tooth preparation, reversibility, optical translucency, and longevity in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> Precision 3D digital impressions, custom fabrication of ultra-thin feldspathic Lumineers, and adhesive bonding are completed in 1 trip.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete non-invasive smile makeover.",
    "recoveryTime": "<strong>Zero recovery time.</strong> Because natural tooth enamel is untouched and no local anesthetic injections are needed, you experience zero sensitivity or downtime.",
    "priceEstimate": "<strong>Lumineers prices start at £260 / €295 / $325 per tooth.</strong> Complete all-inclusive packages include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single No-Prep Lumineer",
        "brand": "Authentic Ultra-Thin Cerinate / Feldspathic Porcelain (0.2 mm)",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Ultra-Thin 0.2mm No-Prep Porcelain Lumineer",
          "Zero tooth reduction / 100% natural enamel preservation",
          "Precision 3D optical scanning & color matching",
          "Light-cured aesthetic resin bonding",
          "10-Year Clinical Warranty & Authenticity Certificate",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$325",
          "EUR": "€295",
          "GBP": "£260"
        }
      },
      {
        "name": "8-Unit Lumineers Smile Line (Upper)",
        "brand": "Ultra-Thin Contact Lens Porcelain (0.2 mm)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x Upper Arch No-Prep Lumineers (Social Smile Line)",
          "Bespoke 3D Digital Smile Design & Live Mockup Preview",
          "Zero drilling, no needles, and completely reversible procedure",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Professional teeth cleaning & shade harmonization",
          "10-Year Comprehensive Warranty"
        ],
        "price": {
          "USD": "$2,490",
          "EUR": "€2,250",
          "GBP": "£1,990"
        }
      },
      {
        "name": "16-Unit Full Lumineers Smile Makeover",
        "brand": "Ultra-Thin Feldspathic Lumineers (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom No-Prep Lumineers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Zero enamel removal across both dental arches",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom dental night guard & international warranty passport"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,850"
        }
      },
      {
        "name": "20-Unit Full Hollywood Lumineers Makeover",
        "brand": "High-Translucency Cerinate Lumineers",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin No-Prep Lumineers (10 Upper + 10 Lower Teeth)",
          "Complete gnathological smile design with maximum natural luminescence",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & VIP care pack"
        ],
        "price": {
          "USD": "$5,890",
          "EUR": "€5,390",
          "GBP": "£4,750"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Lumineers and how do they differ from traditional veneers?",
        "a": [
          "Lumineers are ultra-thin (approx. 0.2 mm, like a contact lens) porcelain veneers that can be bonded directly onto your natural teeth without drilling or removing enamel.",
          "Traditional veneers require 0.3 mm to 0.7 mm of enamel reduction. Because Lumineers preserve your natural enamel completely, the procedure is painless and completely reversible."
        ]
      },
      {
        "q": "Is any tooth drilling or anesthesia required for Lumineers?",
        "a": [
          "No! Lumineers require zero tooth cutting and zero anesthetic injections. The veneers are custom-crafted and bonded adhesively to your existing tooth surfaces."
        ]
      },
      {
        "q": "How long do Lumineers last?",
        "a": [
          "Clinical studies demonstrate that Lumineers can last up to 20 years with proper oral hygiene and regular dental check-ups, thanks to their exceptional adhesive bond with natural enamel."
        ]
      },
      {
        "q": "Am I a suitable candidate for Lumineers?",
        "a": [
          "Lumineers are ideal for patients with minor spacing, slight crowding, discolored teeth, or chipped enamel who want a perfect smile without altering their natural teeth."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "No-Prep Lumineers & Contact Lens Veneer Packages",
    "packagesSubtitle": "Ultra-thin 0.2 mm contact lens porcelain veneers placed with zero enamel drilling, no anesthesia, hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About No-Prep Lumineers",
    "faqSubtitle": "Everything you need to know about non-invasive Lumineers, zero tooth preparation, reversibility, optical translucency, and longevity in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> Precision 3D digital impressions, custom fabrication of ultra-thin feldspathic Lumineers, and adhesive bonding are completed in 1 trip.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete non-invasive smile makeover.",
    "recoveryTime": "<strong>Zero recovery time.</strong> Because natural tooth enamel is untouched and no local anesthetic injections are needed, you experience zero sensitivity or downtime.",
    "priceEstimate": "<strong>Lumineers prices start at £260 / €295 / $325 per tooth.</strong> Complete all-inclusive packages include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single No-Prep Lumineer",
        "brand": "Authentic Ultra-Thin Cerinate / Feldspathic Porcelain (0.2 mm)",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Ultra-Thin 0.2mm No-Prep Porcelain Lumineer",
          "Zero tooth reduction / 100% natural enamel preservation",
          "Precision 3D optical scanning & color matching",
          "Light-cured aesthetic resin bonding",
          "10-Year Clinical Warranty & Authenticity Certificate",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$325",
          "EUR": "€295",
          "GBP": "£260"
        }
      },
      {
        "name": "8-Unit Lumineers Smile Line (Upper)",
        "brand": "Ultra-Thin Contact Lens Porcelain (0.2 mm)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x Upper Arch No-Prep Lumineers (Social Smile Line)",
          "Bespoke 3D Digital Smile Design & Live Mockup Preview",
          "Zero drilling, no needles, and completely reversible procedure",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Professional teeth cleaning & shade harmonization",
          "10-Year Comprehensive Warranty"
        ],
        "price": {
          "USD": "$2,490",
          "EUR": "€2,250",
          "GBP": "£1,990"
        }
      },
      {
        "name": "16-Unit Full Lumineers Smile Makeover",
        "brand": "Ultra-Thin Feldspathic Lumineers (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom No-Prep Lumineers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Zero enamel removal across both dental arches",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom dental night guard & international warranty passport"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,850"
        }
      },
      {
        "name": "20-Unit Full Hollywood Lumineers Makeover",
        "brand": "High-Translucency Cerinate Lumineers",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin No-Prep Lumineers (10 Upper + 10 Lower Teeth)",
          "Complete gnathological smile design with maximum natural luminescence",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & VIP care pack"
        ],
        "price": {
          "USD": "$5,890",
          "EUR": "€5,390",
          "GBP": "£4,750"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Lumineers and how do they differ from traditional veneers?",
        "a": [
          "Lumineers are ultra-thin (approx. 0.2 mm, like a contact lens) porcelain veneers that can be bonded directly onto your natural teeth without drilling or removing enamel.",
          "Traditional veneers require 0.3 mm to 0.7 mm of enamel reduction. Because Lumineers preserve your natural enamel completely, the procedure is painless and completely reversible."
        ]
      },
      {
        "q": "Is any tooth drilling or anesthesia required for Lumineers?",
        "a": [
          "No! Lumineers require zero tooth cutting and zero anesthetic injections. The veneers are custom-crafted and bonded adhesively to your existing tooth surfaces."
        ]
      },
      {
        "q": "How long do Lumineers last?",
        "a": [
          "Clinical studies demonstrate that Lumineers can last up to 20 years with proper oral hygiene and regular dental check-ups, thanks to their exceptional adhesive bond with natural enamel."
        ]
      },
      {
        "q": "Am I a suitable candidate for Lumineers?",
        "a": [
          "Lumineers are ideal for patients with minor spacing, slight crowding, discolored teeth, or chipped enamel who want a perfect smile without altering their natural teeth."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "No-Prep Lumineers & Contact Lens Veneer Packages",
    "packagesSubtitle": "Ultra-thin 0.2 mm contact lens porcelain veneers placed with zero enamel drilling, no anesthesia, hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About No-Prep Lumineers",
    "faqSubtitle": "Everything you need to know about non-invasive Lumineers, zero tooth preparation, reversibility, optical translucency, and longevity in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> Precision 3D digital impressions, custom fabrication of ultra-thin feldspathic Lumineers, and adhesive bonding are completed in 1 trip.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete non-invasive smile makeover.",
    "recoveryTime": "<strong>Zero recovery time.</strong> Because natural tooth enamel is untouched and no local anesthetic injections are needed, you experience zero sensitivity or downtime.",
    "priceEstimate": "<strong>Lumineers prices start at £260 / €295 / $325 per tooth.</strong> Complete all-inclusive packages include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single No-Prep Lumineer",
        "brand": "Authentic Ultra-Thin Cerinate / Feldspathic Porcelain (0.2 mm)",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Ultra-Thin 0.2mm No-Prep Porcelain Lumineer",
          "Zero tooth reduction / 100% natural enamel preservation",
          "Precision 3D optical scanning & color matching",
          "Light-cured aesthetic resin bonding",
          "10-Year Clinical Warranty & Authenticity Certificate",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$325",
          "EUR": "€295",
          "GBP": "£260"
        }
      },
      {
        "name": "8-Unit Lumineers Smile Line (Upper)",
        "brand": "Ultra-Thin Contact Lens Porcelain (0.2 mm)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x Upper Arch No-Prep Lumineers (Social Smile Line)",
          "Bespoke 3D Digital Smile Design & Live Mockup Preview",
          "Zero drilling, no needles, and completely reversible procedure",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Professional teeth cleaning & shade harmonization",
          "10-Year Comprehensive Warranty"
        ],
        "price": {
          "USD": "$2,490",
          "EUR": "€2,250",
          "GBP": "£1,990"
        }
      },
      {
        "name": "16-Unit Full Lumineers Smile Makeover",
        "brand": "Ultra-Thin Feldspathic Lumineers (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom No-Prep Lumineers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Zero enamel removal across both dental arches",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom dental night guard & international warranty passport"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,850"
        }
      },
      {
        "name": "20-Unit Full Hollywood Lumineers Makeover",
        "brand": "High-Translucency Cerinate Lumineers",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin No-Prep Lumineers (10 Upper + 10 Lower Teeth)",
          "Complete gnathological smile design with maximum natural luminescence",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & VIP care pack"
        ],
        "price": {
          "USD": "$5,890",
          "EUR": "€5,390",
          "GBP": "£4,750"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Lumineers and how do they differ from traditional veneers?",
        "a": [
          "Lumineers are ultra-thin (approx. 0.2 mm, like a contact lens) porcelain veneers that can be bonded directly onto your natural teeth without drilling or removing enamel.",
          "Traditional veneers require 0.3 mm to 0.7 mm of enamel reduction. Because Lumineers preserve your natural enamel completely, the procedure is painless and completely reversible."
        ]
      },
      {
        "q": "Is any tooth drilling or anesthesia required for Lumineers?",
        "a": [
          "No! Lumineers require zero tooth cutting and zero anesthetic injections. The veneers are custom-crafted and bonded adhesively to your existing tooth surfaces."
        ]
      },
      {
        "q": "How long do Lumineers last?",
        "a": [
          "Clinical studies demonstrate that Lumineers can last up to 20 years with proper oral hygiene and regular dental check-ups, thanks to their exceptional adhesive bond with natural enamel."
        ]
      },
      {
        "q": "Am I a suitable candidate for Lumineers?",
        "a": [
          "Lumineers are ideal for patients with minor spacing, slight crowding, discolored teeth, or chipped enamel who want a perfect smile without altering their natural teeth."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "No-Prep Lumineers & Contact Lens Veneer Packages",
    "packagesSubtitle": "Ultra-thin 0.2 mm contact lens porcelain veneers placed with zero enamel drilling, no anesthesia, hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About No-Prep Lumineers",
    "faqSubtitle": "Everything you need to know about non-invasive Lumineers, zero tooth preparation, reversibility, optical translucency, and longevity in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> Precision 3D digital impressions, custom fabrication of ultra-thin feldspathic Lumineers, and adhesive bonding are completed in 1 trip.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete non-invasive smile makeover.",
    "recoveryTime": "<strong>Zero recovery time.</strong> Because natural tooth enamel is untouched and no local anesthetic injections are needed, you experience zero sensitivity or downtime.",
    "priceEstimate": "<strong>Lumineers prices start at £260 / €295 / $325 per tooth.</strong> Complete all-inclusive packages include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single No-Prep Lumineer",
        "brand": "Authentic Ultra-Thin Cerinate / Feldspathic Porcelain (0.2 mm)",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Ultra-Thin 0.2mm No-Prep Porcelain Lumineer",
          "Zero tooth reduction / 100% natural enamel preservation",
          "Precision 3D optical scanning & color matching",
          "Light-cured aesthetic resin bonding",
          "10-Year Clinical Warranty & Authenticity Certificate",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$325",
          "EUR": "€295",
          "GBP": "£260"
        }
      },
      {
        "name": "8-Unit Lumineers Smile Line (Upper)",
        "brand": "Ultra-Thin Contact Lens Porcelain (0.2 mm)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x Upper Arch No-Prep Lumineers (Social Smile Line)",
          "Bespoke 3D Digital Smile Design & Live Mockup Preview",
          "Zero drilling, no needles, and completely reversible procedure",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Professional teeth cleaning & shade harmonization",
          "10-Year Comprehensive Warranty"
        ],
        "price": {
          "USD": "$2,490",
          "EUR": "€2,250",
          "GBP": "£1,990"
        }
      },
      {
        "name": "16-Unit Full Lumineers Smile Makeover",
        "brand": "Ultra-Thin Feldspathic Lumineers (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom No-Prep Lumineers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Zero enamel removal across both dental arches",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom dental night guard & international warranty passport"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,850"
        }
      },
      {
        "name": "20-Unit Full Hollywood Lumineers Makeover",
        "brand": "High-Translucency Cerinate Lumineers",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin No-Prep Lumineers (10 Upper + 10 Lower Teeth)",
          "Complete gnathological smile design with maximum natural luminescence",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & VIP care pack"
        ],
        "price": {
          "USD": "$5,890",
          "EUR": "€5,390",
          "GBP": "£4,750"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Lumineers and how do they differ from traditional veneers?",
        "a": [
          "Lumineers are ultra-thin (approx. 0.2 mm, like a contact lens) porcelain veneers that can be bonded directly onto your natural teeth without drilling or removing enamel.",
          "Traditional veneers require 0.3 mm to 0.7 mm of enamel reduction. Because Lumineers preserve your natural enamel completely, the procedure is painless and completely reversible."
        ]
      },
      {
        "q": "Is any tooth drilling or anesthesia required for Lumineers?",
        "a": [
          "No! Lumineers require zero tooth cutting and zero anesthetic injections. The veneers are custom-crafted and bonded adhesively to your existing tooth surfaces."
        ]
      },
      {
        "q": "How long do Lumineers last?",
        "a": [
          "Clinical studies demonstrate that Lumineers can last up to 20 years with proper oral hygiene and regular dental check-ups, thanks to their exceptional adhesive bond with natural enamel."
        ]
      },
      {
        "q": "Am I a suitable candidate for Lumineers?",
        "a": [
          "Lumineers are ideal for patients with minor spacing, slight crowding, discolored teeth, or chipped enamel who want a perfect smile without altering their natural teeth."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "No-Prep Lumineers & Contact Lens Veneer Packages",
    "packagesSubtitle": "Ultra-thin 0.2 mm contact lens porcelain veneers placed with zero enamel drilling, no anesthesia, hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About No-Prep Lumineers",
    "faqSubtitle": "Everything you need to know about non-invasive Lumineers, zero tooth preparation, reversibility, optical translucency, and longevity in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> Precision 3D digital impressions, custom fabrication of ultra-thin feldspathic Lumineers, and adhesive bonding are completed in 1 trip.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete non-invasive smile makeover.",
    "recoveryTime": "<strong>Zero recovery time.</strong> Because natural tooth enamel is untouched and no local anesthetic injections are needed, you experience zero sensitivity or downtime.",
    "priceEstimate": "<strong>Lumineers prices start at £260 / €295 / $325 per tooth.</strong> Complete all-inclusive packages include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single No-Prep Lumineer",
        "brand": "Authentic Ultra-Thin Cerinate / Feldspathic Porcelain (0.2 mm)",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Ultra-Thin 0.2mm No-Prep Porcelain Lumineer",
          "Zero tooth reduction / 100% natural enamel preservation",
          "Precision 3D optical scanning & color matching",
          "Light-cured aesthetic resin bonding",
          "10-Year Clinical Warranty & Authenticity Certificate",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$325",
          "EUR": "€295",
          "GBP": "£260"
        }
      },
      {
        "name": "8-Unit Lumineers Smile Line (Upper)",
        "brand": "Ultra-Thin Contact Lens Porcelain (0.2 mm)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x Upper Arch No-Prep Lumineers (Social Smile Line)",
          "Bespoke 3D Digital Smile Design & Live Mockup Preview",
          "Zero drilling, no needles, and completely reversible procedure",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Professional teeth cleaning & shade harmonization",
          "10-Year Comprehensive Warranty"
        ],
        "price": {
          "USD": "$2,490",
          "EUR": "€2,250",
          "GBP": "£1,990"
        }
      },
      {
        "name": "16-Unit Full Lumineers Smile Makeover",
        "brand": "Ultra-Thin Feldspathic Lumineers (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom No-Prep Lumineers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Zero enamel removal across both dental arches",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom dental night guard & international warranty passport"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,850"
        }
      },
      {
        "name": "20-Unit Full Hollywood Lumineers Makeover",
        "brand": "High-Translucency Cerinate Lumineers",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin No-Prep Lumineers (10 Upper + 10 Lower Teeth)",
          "Complete gnathological smile design with maximum natural luminescence",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & VIP care pack"
        ],
        "price": {
          "USD": "$5,890",
          "EUR": "€5,390",
          "GBP": "£4,750"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Lumineers and how do they differ from traditional veneers?",
        "a": [
          "Lumineers are ultra-thin (approx. 0.2 mm, like a contact lens) porcelain veneers that can be bonded directly onto your natural teeth without drilling or removing enamel.",
          "Traditional veneers require 0.3 mm to 0.7 mm of enamel reduction. Because Lumineers preserve your natural enamel completely, the procedure is painless and completely reversible."
        ]
      },
      {
        "q": "Is any tooth drilling or anesthesia required for Lumineers?",
        "a": [
          "No! Lumineers require zero tooth cutting and zero anesthetic injections. The veneers are custom-crafted and bonded adhesively to your existing tooth surfaces."
        ]
      },
      {
        "q": "How long do Lumineers last?",
        "a": [
          "Clinical studies demonstrate that Lumineers can last up to 20 years with proper oral hygiene and regular dental check-ups, thanks to their exceptional adhesive bond with natural enamel."
        ]
      },
      {
        "q": "Am I a suitable candidate for Lumineers?",
        "a": [
          "Lumineers are ideal for patients with minor spacing, slight crowding, discolored teeth, or chipped enamel who want a perfect smile without altering their natural teeth."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "No-Prep Lumineers & Contact Lens Veneer Packages",
    "packagesSubtitle": "Ultra-thin 0.2 mm contact lens porcelain veneers placed with zero enamel drilling, no anesthesia, hotel accommodation, and VIP Mercedes transfers in Antalya.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About No-Prep Lumineers",
    "faqSubtitle": "Everything you need to know about non-invasive Lumineers, zero tooth preparation, reversibility, optical translucency, and longevity in Antalya.",
    "stayDuration": "<strong>5 to 7 days in Antalya.</strong> Precision 3D digital impressions, custom fabrication of ultra-thin feldspathic Lumineers, and adhesive bonding are completed in 1 trip.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Antalya for your complete non-invasive smile makeover.",
    "recoveryTime": "<strong>Zero recovery time.</strong> Because natural tooth enamel is untouched and no local anesthetic injections are needed, you experience zero sensitivity or downtime.",
    "priceEstimate": "<strong>Lumineers prices start at £260 / €295 / $325 per tooth.</strong> Complete all-inclusive packages include 3D Digital Smile Design, 4/5-star hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single No-Prep Lumineer",
        "brand": "Authentic Ultra-Thin Cerinate / Feldspathic Porcelain (0.2 mm)",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Ultra-Thin 0.2mm No-Prep Porcelain Lumineer",
          "Zero tooth reduction / 100% natural enamel preservation",
          "Precision 3D optical scanning & color matching",
          "Light-cured aesthetic resin bonding",
          "10-Year Clinical Warranty & Authenticity Certificate",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$325",
          "EUR": "€295",
          "GBP": "£260"
        }
      },
      {
        "name": "8-Unit Lumineers Smile Line (Upper)",
        "brand": "Ultra-Thin Contact Lens Porcelain (0.2 mm)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "8x Upper Arch No-Prep Lumineers (Social Smile Line)",
          "Bespoke 3D Digital Smile Design & Live Mockup Preview",
          "Zero drilling, no needles, and completely reversible procedure",
          "4-Star Luxury Hotel Stay in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "Professional teeth cleaning & shade harmonization",
          "10-Year Comprehensive Warranty"
        ],
        "price": {
          "USD": "$2,490",
          "EUR": "€2,250",
          "GBP": "£1,990"
        }
      },
      {
        "name": "16-Unit Full Lumineers Smile Makeover",
        "brand": "Ultra-Thin Feldspathic Lumineers (8 Upper + 8 Lower)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "16x Custom No-Prep Lumineers (8 Upper + 8 Lower Arches)",
          "Full 3D Facial Aesthetic Mapping & Golden Ratio Smile Harmony",
          "Zero enamel removal across both dental arches",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Custom dental night guard & international warranty passport"
        ],
        "price": {
          "USD": "$4,790",
          "EUR": "€4,390",
          "GBP": "£3,850"
        }
      },
      {
        "name": "20-Unit Full Hollywood Lumineers Makeover",
        "brand": "High-Translucency Cerinate Lumineers",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Ultra-Thin No-Prep Lumineers (10 Upper + 10 Lower Teeth)",
          "Complete gnathological smile design with maximum natural luminescence",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Mercedes Chauffeur for all transfers",
          "Lifetime international warranty & VIP care pack"
        ],
        "price": {
          "USD": "$5,890",
          "EUR": "€5,390",
          "GBP": "£4,750"
        }
      }
    ],
    "faqs": [
      {
        "q": "What are Lumineers and how do they differ from traditional veneers?",
        "a": [
          "Lumineers are ultra-thin (approx. 0.2 mm, like a contact lens) porcelain veneers that can be bonded directly onto your natural teeth without drilling or removing enamel.",
          "Traditional veneers require 0.3 mm to 0.7 mm of enamel reduction. Because Lumineers preserve your natural enamel completely, the procedure is painless and completely reversible."
        ]
      },
      {
        "q": "Is any tooth drilling or anesthesia required for Lumineers?",
        "a": [
          "No! Lumineers require zero tooth cutting and zero anesthetic injections. The veneers are custom-crafted and bonded adhesively to your existing tooth surfaces."
        ]
      },
      {
        "q": "How long do Lumineers last?",
        "a": [
          "Clinical studies demonstrate that Lumineers can last up to 20 years with proper oral hygiene and regular dental check-ups, thanks to their exceptional adhesive bond with natural enamel."
        ]
      },
      {
        "q": "Am I a suitable candidate for Lumineers?",
        "a": [
          "Lumineers are ideal for patients with minor spacing, slight crowding, discolored teeth, or chipped enamel who want a perfect smile without altering their natural teeth."
        ]
      }
    ]
  }
};

export default function LumineersDetailView() {
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
      <section aria-labelledby="lumineersdetailview-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="lumineersdetailview-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="lumineersdetailview-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="lumineersdetailview-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`lumineersdetailview-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`lumineersdetailview-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Lumineers" />
      </div>
    </div>
  );
}
