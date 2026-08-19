'use client';

import React, { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import TreatmentRightTreatmentAccordion from '@/components/treatment-sections/TreatmentRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './SinusLiftingDetailView.module.css';

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
  packages: PackageItem[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
}

const DICTIONARIES: Record<string, LocaleDictionary> = {
  "en": {
    "packagesTitle": "Sinus Lifting & Bone Augmentation Packages & Currency Calculator",
    "packagesSubtitle": "All-inclusive sinus elevation and bone grafting packages using certified Geistlich Bio-Oss (Swiss), Botiss, and Straumann systems.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About This Treatment",
    "faqSubtitle": "Have questions about this treatment? You’re not alone. From treatment timelines to costs and recovery, we’re here to guide you with clear answers, expert advice, and personalized support at every step.",
    "packages": [
      {
        "name": "Closed Internal Sinus Lift (1 Side)",
        "brand": "Geistlich Bio-Oss (Swiss Made)",
        "duration": "45 – 60 Minutes (Single Visit)",
        "img": "/packages/pkg-4.webp",
        "popular": true,
        "included": [
          "Internal crestal sinus elevation (osteotome technique)",
          "1.0 cc Genuine Swiss Geistlich Bio-Oss Natural Bone Graft",
          "Full 3D CBCT Tomography & digital bone volume scan",
          "Sterile surgical suite, local anesthesia & pain management",
          "Post-operative antibiotic, analgesic & mouthwash care kit",
          "Lifetime bone stability warranty certification",
          "VIP Mercedes Airport & Clinic transfers included"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "Open Lateral Window Sinus Lift (1 Side)",
        "brand": "Geistlich Bio-Oss + Bio-Gide Membrane",
        "duration": "60 – 90 Minutes (Single Visit)",
        "img": "/packages/pkg-5.webp",
        "included": [
          "Direct lateral window sinus membrane elevation",
          "2.0 cc Swiss Geistlich Bio-Oss granules for maximum vertical height",
          "Geistlich Bio-Gide Resorbable Collagen Barrier Membrane",
          "High-resolution 3D CT scan & virtual surgical planning",
          "Full surgical kit, local anesthesia & prescription pack",
          "Dedicated international patient coordinator assistance",
          "VIP Private Transfers (Airport - Hotel - Clinic)"
        ],
        "price": {
          "USD": "$520",
          "EUR": "€475",
          "GBP": "£410"
        }
      },
      {
        "name": "Bilateral Open Sinus Lift (Both Sides)",
        "brand": "Geistlich Swiss Bio-Oss + Bio-Gide (Double)",
        "duration": "90 – 120 Minutes (Single Visit)",
        "img": "/packages/pkg-6.webp",
        "included": [
          "Bilateral lateral sinus augmentation (left & right upper jaw)",
          "4.0 cc Swiss Bio-Oss bone matrix + 2x Bio-Gide membranes",
          "Comprehensive 3D Craniofacial CT diagnostic imaging",
          "IV Sedation option for maximum surgical comfort",
          "Complete post-op medication & recovery kit",
          "VIP Mercedes Chauffeur Transfers + 4-Star Hotel Stay"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£770"
        }
      },
      {
        "name": "Sinus Lift + 2 Straumann Implants Package",
        "brand": "Straumann SLA + Geistlich Bio-Oss",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/pkg-1.webp",
        "included": [
          "1x Lateral or Crestal Sinus Lift + Swiss Bio-Oss Graft",
          "2x Genuine Straumann SLA Swiss Titanium Implants",
          "2x Monolithic German Zirconia or E-Max custom crowns",
          "Full 3D CBCT imaging, surgical guide & local anesthesia",
          "Lifetime Global Straumann Guarantee Passport",
          "VIP Airport Transfers + 4-Star Central Hotel"
        ],
        "price": {
          "USD": "$1,950",
          "EUR": "€1,790",
          "GBP": "£1,550"
        }
      },
      {
        "name": "Sinus Lift + 4 Nobel Implants Upper Arch",
        "brand": "Nobel Biocare CC + Geistlich Bone Graft",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/pkg-2.webp",
        "included": [
          "Bilateral Sinus Lift + Full Bone Reconstruction",
          "4x NobelParallel CC Grade 4 Titanium Implants",
          "Immediate temporary bridge + 4 permanent Zirconia crowns",
          "Full 3D surgical guide planning & IV sedation support",
          "Lifetime Global Nobel Biocare Warranty Passport",
          "VIP Mercedes Transfers + 5-Star Central Hotel Stay"
        ],
        "price": {
          "USD": "$3,850",
          "EUR": "€3,490",
          "GBP": "£2,990"
        }
      },
      {
        "name": "Full Upper Arch Reconstruction & 6 Implants",
        "brand": "Straumann / Nobel + Complete Bone Grafting",
        "duration": "3+5 Working Days (2 Visits)",
        "img": "/packages/pkg-3.webp",
        "included": [
          "Comprehensive Bilateral Sinus Lift & Ridge Augmentation",
          "6x High-torque Titanium Implants for 14-tooth upper arch",
          "Permanent 1200+ MPa Monolithic German Zirconia Bridge (14 units)",
          "3D CT Diagnostics, digital wax-up & aesthetic smile design",
          "Complete surgical suite, local anesthesia & medications",
          "Lifetime Global Warranty Passport",
          "VIP Mercedes Transfers + 5-Star Luxury Accommodation"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      }
    ],
    "faqs": [
      {
        "q": "Will my treatment plan or the price you gave me change when I arrive?",
        "a": [
          "Good question. Unfortunately, many patients who travel for their treatment face unethical practices in clinics they prefer such as getting bullied about surprise charges by clinics.",
          "The plan and price we share with you are carefully prepared based on the photos, X-rays, or details and your expectations that you send us before your trip. When you arrive, we simply confirm everything in person with an examination before beginning your treatment.",
          "Sometimes, however, a small detail that could not be seen in the photos or x-rays may show up during the clinic examination. For example, this might be the need to reinforce your bone tissue with grafting and sinus lifting procedure. Unlike most clinics that deal with international patients, the pricing and the possibility of these details are transparently shared with you in your treatment plan.",
          "If that happens, we will explain it clearly, show you the issue, and discuss all the options with you before making any changes. Nothing is ever done without your agreement.",
          "Your treatment plan and price will stay the same unless we discover something new during your check-up. Even then, we’ll decide together with you about your options before moving forward with any treatments."
        ]
      },
      {
        "q": "Will you help me with accommodation?",
        "a": [
          "Yes, of course. Our patients regularly travel from abroad, so we make sure you feel supported not only with your dental treatment but also with your stay in Antalya. We can recommend trusted hotels close to our clinic, and if you prefer, we can also help arrange your booking.",
          "Our goal is to make your trip as smooth and stress-free as possible, so you can focus on your treatment and enjoy your time in the city. We’ll gladly assist you with accommodation and make sure you have comfortable options during your visit."
        ]
      },
      {
        "q": "Is it safe to travel to Turkey?",
        "a": [
          "Yes! Turkey is a very popular destination for international visitors and millions of tourists travel here safely every year. Cities like Antalya are not only cultural and historical centers but also well-prepared to welcome patients from abroad with modern clinics, hotels, and transport services and many world-renowned touristic attractions.",
          "Like in any big city, it’s always wise to take normal travel precautions — such as keeping your valuables safe and being aware of your surroundings. Our clinic also helps arrange trusted transportation and accommodation options to make sure you feel comfortable and secure during your stay. With the extra support we provide, your dental trip can also be a smooth and worry-free experience."
        ]
      },
      {
        "q": "What materials are used for dental crowns at your clinic?",
        "a": [
          "We utilize the latest technologies and treatment protocols available in dentistry.",
          "Regarding dental prostheses, Ivoclar (Swiss) brand is used for veneers meanwhile Amman-Girrbach brand is preferred for all-on-4/6 treatments over implants."
        ]
      },
      {
        "q": "Can I see the shape and color of my teeth before they are made?",
        "a": [
          "Yes, absolutely. During smile design, we show you a simulation of your new teeth before they are actually made. With a \"mock-up\" model, you can see both the color and the shape of your future teeth, and even how they will look inside your mouth. Once you approve the mock-up, the final teeth are produced according to your choice.",
          "One important note: after your restorations are made, they cannot be lightened further, but they can be adjusted to a slightly darker shade if needed. That’s why we discuss all details with you beforehand and take your feedback seriously, so the final result matches exactly what you want.",
          "In short: yes, you’ll see a preview of your new smile before treatment — and you’ll have a chance to approve the look before the final teeth are made."
        ]
      },
      {
        "q": "Will I experience too much pain after implant surgery?",
        "a": [
          "You might feel some discomfort, swelling, or mild soreness in the first few days, which is similar to what you would feel after having a tooth pulled. However, this is usually well controlled with over-the-counter painkillers and the medication we will prescribe to you.",
          "On your first day of the operation, You will also be asked to follow a 5-minutes-on, 5-minutes-off application of an ice pack we will be providing you. This is to aid you in preventing the swelling which is also reinforced further by the pain medication we’ll be prescribing you, which will act as your anti-inflammatory. The pain is typically the strongest in the first 48 hours and then quickly improves.",
          "Moreover, during the procedure itself, you won’t feel any pain because we use local anesthesia and also offer sedation options to keep you relaxed and comfortable or put you to sleep throughout the procedure in case you prefer that."
        ]
      },
      {
        "q": "Do you support online payments?",
        "a": [
          "Our clinic offers a variety of payment options designed to meet the needs of our patients.",
          "For more detailed information, please feel free to contact us."
        ]
      },
      {
        "q": "Does your packages include hotels and transfers?",
        "a": [
          "The contents of our packages may vary depending on the selected treatment.",
          "To find out the most suitable option for you, please feel free to contact us."
        ]
      },
      {
        "q": "Can I pay my treatment/package fees in installments?",
        "a": [
          "In our clinic, we offer various payment options for treatment and package fees.",
          "For detailed information about installment plans, please contact us."
        ]
      },
      {
        "q": "Do you offer warranty or insurance?",
        "a": [
          "All treatments in our clinic are covered by a guarantee within the specified periods and conditions.",
          "For more detailed information, please feel free to contact us."
        ]
      },
      {
        "q": "Can I safely postpone my dental treatments?",
        "a": [
          "Postponing dental treatment is possible, but it is not the safest choice. Dental health issues tend to present themselves without major symptoms and are progressive. Small problems like cavities or gum issues often start out painless. But over time, they can grow and lead to bigger issues such as infections, tooth loss, then bone loss, or the need for more complex treatments.",
          "If your situation isn’t urgent, a short delay may not cause harm. However, the longer you wait, the higher the risk that the problem becomes more serious and costly to fix. More delay means more chances for your oral and dental health to get worse.",
          "It’s best not to delay dental treatment. If you have concerns about timing, consult your dentist. Together you can make a plan that fits your needs."
        ]
      },
      {
        "q": "Which crown is better over implants, E-Max or Zirconium Crown?",
        "a": [
          "For implants, zirconia is generally the stronger and safer choice. It is very durable, making it ideal for the back chewing teeth as well as for full-mouth restorations. Zirconia can handle the high pressure of biting and chewing without problems.",
          "E-Max crowns, on the other hand, are made fully from porcelain and provide a more natural, lifelike appearance. That’s why they are usually recommended for the front teeth, especially when only 1–2 implants are placed in the smile line. They still function well on implants and won’t break easily there, but they are not advised for the back teeth where chewing force is much stronger.",
          "Zirconia works everywhere in the mouth and is the most reliable option for implant crowns, while E-Max is sometimes chosen for the front teeth when the patient wants the most natural-looking smile."
        ]
      },
      {
        "q": "What do I do if an All-on-6 prosthesis breaks?",
        "a": [
          "If you experience a fracture or crack in your All-on-6 prosthesis, it is important to visit our clinic as soon as possible.",
          "Repair or replacement, if necessary, will be carried out by our specialist dentists. Please avoid attempting any self-repair, as this could damage both the implants and your gums.",
          "For more information or to schedule an urgent appointment, you can contact us directly."
        ]
      },
      {
        "q": "Are All-on-6 prostheses made of resin, acrylic, or plastic material?",
        "a": [
          "All-on-6 prostheses are generally made from durable materials such as porcelain or zirconia, which provide both aesthetics and long-term strength.",
          "Resin, acrylic, or plastic materials are usually used only for temporary prostheses.",
          "The most suitable material for your permanent prosthesis will be determined after a detailed examination at our clinic. For more information or to schedule an appointment, please contact us."
        ]
      },
      {
        "q": "Is sedation are available in your clinic for dental implant treatment? What types of sedation are available?",
        "a": [
          "Absolutely. Patient comfort is top priority at our clinic. We’d like to keep your treatments as comfortable and stress-free as possible, especially people who would feel anxious about dental procedures.",
          "We offer three types of sedation depending on your needs and medical history. These are:",
          "• Local anesthesia, which numbs only the area being operated on. It’s the most common and widespread method that is included in all our implant procedures.",
          "• IV Sedation, also called twilight sedation, which keeps you relaxed and calm during the treatment while still being awake. Many patients won’t even remember the procedure afterward.",
          "• General anesthesia, which is used for cases where deeper sedation is necessary. This kind of sedation is typically done with an anesthesiologist present.",
          "Before your treatment, we will comprehensively discuss your options, answer any questions you may have and choose the safest, most comfortable solution tailored for your treatment plan. Your peace of mind matters just as much as your smile to us."
        ]
      },
      {
        "q": "Why is an implant preferred instead of a bridge in cases of tooth loss?",
        "a": [
          "Unless the space caused by tooth loss requires more than one implant, dental implants are preferred instead of bridges mainly because they offer a long-lasting solution without affecting your healthy teeth.",
          "Bridge treatment requires shaving down the healthy teeth on either side of your gap so that they can support the replacement tooth in the middle. This means permanently altering your healthy teeth just to fix one missing tooth. An implant here is used without shaving your healthy teeth and replaces what is lost and enables your healthy teeth to stay untouched.",
          "Implants also help preserve bone in your jaw. When a tooth is missing, the underlying bone tissue begins to shrink over time. Implants attach to and stimulate the bone tissue just like a tooth root, providing a firm grip and keeping your facial structure intact. Bridges won’t do this."
        ]
      },
      {
        "q": "Can implant surgery or other treatments be performed for patients diseases such as HIV, Hepatitis, etc.?",
        "a": [
          "The answer is Yes. As long as the patient’s overall health is stable and well-managed, patients with conditions like HIV, Hep B, Hep C can safely receive dental implant treatment and other procedures.",
          "The points of considerance here are your immune status, viral load and whether you’re under proper medical care and monitoring. Thanks to right precautions and planning, dental treatment and surgery can be done safely and successfully.",
          "We always coordinate with your medical team as needed to ensure the timing and conditions are right for your post-op healing process.",
          "We follow strict universal infection control protocols for all our patients, so you will be treated with the same level of care and respect as anyone else. Your medical history will stay confidential, and your health and well-being will be our utmost priority. It is every patient’s right to ask to receive health care regardless of their condition, and we are here to support you every step of your journey."
        ]
      },
      {
        "q": "Can patients with chronic conditions such as diabetes have implants?",
        "a": [
          "Of course! Patients with chronic conditions can still receive dental implants. It depends on how well your condition is controlled. If your diabetes is well-managed (meaning that your blood sugar is at stable levels), your body will have the ability to heal properly after your implant surgery.",
          "We will kindly ask you tos hare your blood sugar levels from your HbA1c Test. If the test values allow, you will be able to get implant surgery unless there is some other condition that would actually prevent you from getting dental implants.",
          "That’s why we always ask about your medical history first, and may request blood test results to understand your overall health before planning the treatment of your unique case."
        ]
      },
      {
        "q": "Can I still get implants if I’m a smoker?",
        "a": [
          "Yes, you can still get implants even if you are a smoker. It doesn’t disqualify you for implantation. However, it’s important to know that smoking does bring the increased risk of complications.",
          "Smoking affects your blood flow and your body’s healing capability. These are both essential for your implants to successfully bond with your jawbone. It may also raise the chances of infection around your surgical area which may lead to implant failure, especially during the early stages of your healing process. This is the reason why we strongly recommend quitting or at least reducing smoking before and after your implant surgery.",
          "It’s just like growing a plant. If the pot’s soil is dry and the conditions are tough, the plant might still grow, but it will need more care and attention. It’s the same when it comes to dental implants. The more supportive your environment, the better your treatment outcome will be.",
          "During our consultations, we always aim to talk openly about your lifestyle, evaluate the condition of your oral health and make a plan that gives your implants the best chance to succeed."
        ]
      },
      {
        "q": "What happens if the implant fails?",
        "a": [
          "Dental implants have been shown to have a very high success rate that is over 95%. It is true that in rare cases, an implant may not heal properly or may fail over time. If that happens, you have no need to worry, it’s not the end of the road for you.",
          "If there is such an occurrence during the early healing phase, we remove it, let the area heal, and then plan a second attempt. Bone grafting may be considered further in such procedures.",
          "The bone tissue in your middle frontal area (where your incisor teeth are located) has softer bone tissue and is not preferred for dental implants. This is why expert implantology surgeon assesses and measures the best angle and location in your mouth for your unique case when performing treatments protocols such as all on 4 or all on 6.",
          "In most cases, the solution is straightforward and successful, especially when you’re treated at a clinic experienced in handling such cases. There are quite a lot of parameters that are handled by expert implantology surgeon that you don’t have to deal with. This is the main reason why we recommend not going forward with cheap clinics and choosing dentists with questionable credentials. Dental implant surgery is still a surgery and requires adequate preparation with proper knowledge and experience.",
          "At our clinic, we also provide follow-up care and clear guidance to help minimize risks and keep your implants healthy for years to come. Plus, your treatment will be subject to complication insurance if performed at our clinic. In addition, we stand by our work — so if something does go wrong, you will not be left on your own."
        ]
      },
      {
        "q": "What is the difference between All-on-4 and All-on-6 treatments? How do you decide which one is right for me?",
        "a": [
          "The main difference is the number of implants used to support a full arch of teeth. All-on-4 uses four implants per jaw, while All-on-6 uses six implants. Both treatments are designed to give you a full set of fixed, natural-looking teeth.",
          "All-on-4 is often ideal if you have lower bone density in the back of your jaw, as the implants are placed at angles to make the most of the available bone without needing bone grafting. All-on-6, on the other hand, offers extra stability and distributes chewing pressure across six points, making it a great option if you have sufficient bone volume or a stronger bite.",
          "To decide which is right for you, we perform a 3D CT scan and a comprehensive oral examination. We evaluate your bone density, facial anatomy, and personal goals to recommend the treatment that ensures the best long-term success and comfort."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "Sinüs Lifting & Kemik Grefti Paketleri & Dinamik Hesaplayıcı",
    "packagesSubtitle": "İsviçre menşeli orijinal Geistlich Bio-Oss, Botiss ve Straumann onaylı kemik yükseltme ve sinüs operasyonu paketleri.",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "durationLabel": "İşlem Süresi:",
    "includedLabel": "Paket Kapsamı:",
    "priceLabel": "Fiyat (Her Şey Dahil):",
    "getQuoteBtn": "Ücretsiz Teklif Alın",
    "faqTitle": "Bu Tedavi Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Tedavi süreçleri, konaklama, fiyatlar ve iyileşme süreleri hakkında aklınıza takılan tüm soruların klinik ve şeffaf yanıtları.",
    "packages": [
      {
        "name": "Kapalı Sinüs Lifting (Tek Taraf)",
        "brand": "Geistlich Bio-Oss (İsviçre Üretimi)",
        "duration": "45 – 60 Dakika (Tek Seans)",
        "img": "/packages/pkg-4.webp",
        "popular": true,
        "included": [
          "Kret tepesinden osteotom yardımıyla kapalı sinüs yükseltme",
          "1.0 cc Orijinal İsviçre Geistlich Bio-Oss Doğal Kemik Tozu",
          "3D CBCT Tomografi ve dijital kemik hacim analizi",
          "Steril ameliyathane, lokal anestezi ve cerrahi set",
          "Operasyon sonrası antibiyotik, ağrı kesici ve gargara bakım paketi",
          "Ömür Boyu Kemik Entegrasyon Güvencesi",
          "VIP Mercedes Havalimanı & Klinik transferleri dahil"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "Açık Sinüs Lifting (Lateral Pencere - Tek Taraf)",
        "brand": "Geistlich Bio-Oss + Bio-Gide Membran",
        "duration": "60 – 90 Dakika (Tek Seans)",
        "img": "/packages/pkg-5.webp",
        "included": [
          "Yanal pencere yöntemiyle doğrudan sinüs zarı yükseltme",
          "2.0 cc İsviçre Geistlich Bio-Oss granülleri ile maksimum dikey kemik kazanımı",
          "Geistlich Bio-Gide Rezorbe Olabilen Kolajen Koruyucu Membran",
          "Yüksek çözünürlüklü 3D Tomografi ve cerrahi planlama",
          "Tam cerrahi sarf seti, lokal anestezi ve medikal bakım",
          "Özel uluslararası hasta koordinatörü desteği",
          "VIP Özel Transferler (Havalimanı - Otel - Klinik)"
        ],
        "price": {
          "USD": "$520",
          "EUR": "€475",
          "GBP": "£410"
        }
      },
      {
        "name": "Çift Taraflı Açık Sinüs Lifting (Bilateral)",
        "brand": "Geistlich İsviçre Bio-Oss + Bio-Gide (Çift)",
        "duration": "90 – 120 Dakika (Tek Seans)",
        "img": "/packages/pkg-6.webp",
        "included": [
          "Sağ ve sol üst çene sinüslerinin aynı anda kemiklendirilmesi",
          "4.0 cc İsviçre Bio-Oss kemik grefti + 2 adet Bio-Gide membran",
          "Kapsamlı 3D Kraniyofasiyal CT teşhis ve modelleme",
          "Maksimum konfor için bilinçli sedasyon seçeneği",
          "Eksiksiz ameliyat sonrası ilaç ve iyileşme paketi",
          "VIP Mercedes Şoförlü Transferler + 4 Yıldızlı Otel Konaklaması"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£770"
        }
      },
      {
        "name": "Sinüs Lifting + 2 Straumann İmplant Paketi",
        "brand": "Straumann SLA + Geistlich Bio-Oss",
        "duration": "3+5 İş Günü (2 Ziyaret)",
        "img": "/packages/pkg-1.webp",
        "included": [
          "1 Adet Açık/Kapalı Sinüs Lifting + İsviçre Bio-Oss Kemik Tozu",
          "2 Adet Orijinal Straumann SLA İsviçre Titanyum İmplant",
          "2 Adet Monolitik Alman Zirkonyum veya E-Max kalıcı kuron",
          "3D Tomografi analizi, cerrahi rehber ve lokal anestezi",
          "Ömür Boyu Global Straumann Garanti Pasaportu",
          "VIP Havalimanı Transferleri + 4 Yıldızlı Merkezi Otel"
        ],
        "price": {
          "USD": "$1,950",
          "EUR": "€1,790",
          "GBP": "£1,550"
        }
      },
      {
        "name": "Sinüs Lifting + 4 Nobel İmplant Üst Çene",
        "brand": "Nobel Biocare CC + Geistlich Kemik Grefti",
        "duration": "3+5 İş Günü (2 Ziyaret)",
        "img": "/packages/pkg-2.webp",
        "included": [
          "Çift Taraflı Sinüs Lifting ve Tam Kemik Rekonstrüksiyonu",
          "4 Adet NobelParallel CC Saf Titanyum İmplant",
          "Aynı gün geçici sabit köprü + 4 adet kalıcı Zirkonyum kaplama",
          "3D Bilgisayarlı cerrahi planlama ve sedasyon desteği",
          "Ömür Boyu Global Nobel Biocare Garanti Pasaportu",
          "VIP Mercedes Transferleri + 5 Yıldızlı Merkezi Otel Konaklaması"
        ],
        "price": {
          "USD": "$3,850",
          "EUR": "€3,490",
          "GBP": "£2,990"
        }
      },
      {
        "name": "Tam Üst Çene Kemik Yapımı & 6 İmplant Paketi",
        "brand": "Straumann / Nobel + Kapsamlı Kemik Nakli",
        "duration": "3+5 İş Günü (2 Ziyaret)",
        "img": "/packages/pkg-3.webp",
        "included": [
          "Kapsamlı Bilateral Sinüs Lifting ve Çene Kemiği Genişletme",
          "14 dişlik tam ark desteği için 6 adet Titanyum İmplant",
          "Kalıcı 1200+ MPa Monolitik Alman Zirkonyum Köprü (14 üye)",
          "3D Tomografi, dijital wax-up ve estetik gülüş tasarımı",
          "Tam cerrahi ameliyathane, lokal anestezi ve ilaç seti",
          "Ömür Boyu Global Garanti Pasaportu",
          "VIP Mercedes Özel Şoför + 5 Yıldızlı Lüks Konaklama"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      }
    ],
    "faqs": [
      {
        "q": "Tedavi planım veya verilen fiyat kliniğe geldiğimde değişir mi?",
        "a": [
          "Çok iyi bir soru. Maalesef sağlık turizminde birçok hasta bazı kliniklerde sürpriz ek ücretlerle karşılaşabilmektedir.",
          "Size sunulan tedavi planı ve fiyat, gelmeden önce paylaştığınız fotoğraflar, röntgenler ve beklentileriniz doğrultusunda titizlikle hazırlanır. Kliniğe geldiğinizde hekimlerimiz muayene ile bu detayları teyit eder ve tedaviye başlanır.",
          "Ancak nadiren röntgenlerde görünmeyen kemik grefti veya sinüs lifting gibi ek destek ihtiyaçları tespit edilirse, bu durum size şeffafça açıklanır ve onayınız olmadan hiçbir işlem yapılmaz.",
          "Tedavi planınız ve fiyatınız, muayenede beklenmeyen yeni bir durum çıkmadığı sürece birebir geçerlidir."
        ]
      },
      {
        "q": "Konaklama konusunda yardımcı oluyor musunuz?",
        "a": [
          "Evet, kesinlikle. Yurtdışından ve şehir dışından gelen hastalarımızın konforu için kliniğimize yakın 4 ve 5 yıldızlı anlaşmalı otellerimizde konaklama rezervasyonlarınızı organize ediyoruz.",
          "Amacımız Antalya seyahatinizi tamamen stressiz hale getirmek ve sadece yeni gülüşünüze odaklanmanızı sağlamaktır."
        ]
      },
      {
        "q": "Türkiye’ye seyahat etmek güvenli mi?",
        "a": [
          "Evet! Türkiye her yıl milyonlarca uluslararası ziyaretçiyi ve sağlık turistini ağırlayan güvenli bir ülkedir.",
          "Antalya dünya standartlarında modern kliniklere, otellere ve VIP transfer hizmetlerine ev sahipliği yapmaktadır. Kliniğimiz tüm transfer ve rehberlik süreçlerinizde yanınızdadır."
        ]
      },
      {
        "q": "Kliniğinizde hangi kaplama ve protez materyalleri kullanılmaktadır?",
        "a": [
          "Diş hekimliğindeki en ileri teknolojileri ve materyalleri kullanıyoruz.",
          "Veneer kaplamalarda İsviçre menşeli Ivoclar E-Max, implant üstü All-on-4/6 ve sabit köprülerde ise Alman Amman-Girrbach 1200+ MPa monolitik zirkonyum tercih edilmektedir."
        ]
      },
      {
        "q": "Dişlerim yapılmadan önce şekil ve rengini görebilir miyim?",
        "a": [
          "Evet, kesinlikle. 3D Dijital Gülüş Tasarımı ve \"Mock-up\" uygulaması sayesinde kalıcı dişleriniz üretilmeden önce ağzınızda birebir şeklini, formunu ve rengini canlı olarak deneyimleyebilirsiniz.",
          "Siz onay vermeden kalıcı porselen veya zirkonyum üretimine geçilmez."
        ]
      },
      {
        "q": "İmplant ve sinüs cerrahisinden sonra çok ağrı çeker miyim?",
        "a": [
          "Operasyon lokal anestezi altında tamamen ağrısız gerçekleşir. İlk birkaç gün diş çekimi sonrasına benzer hafif bir hassasiyet oluşabilir ancak reçete edeceğimiz ağrı kesici ve buz kompresi ile bu süreç oldukça rahat geçer.",
          "Dileyen hastalarımız için sedasyon veya genel anestezi seçeneklerimiz de mevcuttur."
        ]
      },
      {
        "q": "Online ödeme veya kredi kartı kabul ediyor musunuz?",
        "a": [
          "Kliniğimiz hastalarımızın ihtiyaçlarına uygun çeşitli ödeme seçenekleri (kredi kartı, banka havalesi, nakit) sunmaktadır.",
          "Detaylı bilgi için hasta koordinatörümüzle iletişime geçebilirsiniz."
        ]
      },
      {
        "q": "Paketlerinize otel ve transferler dahil mi?",
        "a": [
          "Evet, çoklu implant ve kombine sinüs lifting paketlerimizde VIP Mercedes havaalanı-klinik-otel transferleri ve merkezi otel konaklamaları fiyata dahildir."
        ]
      },
      {
        "q": "Tedavi ücretlerinde taksit imkanı var mı?",
        "a": [
          "Kliniğimizde belirli kartlar ve ödeme yöntemleri için esnek ödeme koşulları sunulmaktadır. Detaylar için danışmanlarımızla görüşebilirsiniz."
        ]
      },
      {
        "q": "Garanti veya komplikasyon güvencesi sunuyor musunuz?",
        "a": [
          "Tüm implant ve kemik oluşturma tedavilerimiz ömür boyu uluslararası üretici garanti pasaportu ile teslim edilir ve kliniğimizin komplikasyon güvencesi altındadır."
        ]
      },
      {
        "q": "Diş tedavilerimi ertelemek güvenli midir?",
        "a": [
          "Küçük çürük veya diş eti sorunları başlangıçta ağrısız olabilir ancak zamanla kemik kaybına ve daha karmaşık cerrahi ihtiyaçlara yol açabilir. Erken müdahale her zaman daha konforlu ve ekonomiktir."
        ]
      },
      {
        "q": "İmplant üzerine E-Max mi yoksa Zirkonyum mu daha iyidir?",
        "a": [
          "İmplant üstü restorasyonlarda yüksek çiğneme kuvvetlerine dayanıklılığı nedeniyle monolitik zirkonyum en güvenli tercihtir. E-Max porselenler ise ön bölge tek diş estetiğinde doğal ışık geçirgenliği için önerilir."
        ]
      },
      {
        "q": "All-on-6 protezim kırılır veya hasar görürse ne yapmalıyım?",
        "a": [
          "Herhangi bir hasar durumunda doğrudan kliniğimizle iletişime geçmelisiniz. Uzman hekimlerimiz tarafından hızlı onarım veya yenileme garantimiz kapsamında gerçekleştirilir."
        ]
      },
      {
        "q": "All-on-6 protezleri plastik veya akrilikten mi yapılır?",
        "a": [
          "Kalıcı All-on-6 protezlerimiz monolitik zirkonyum veya porselenden üretilir. Akrilik materyaller sadece ilk gün takılan geçici protezlerde kullanılır."
        ]
      },
      {
        "q": "Kliniğinizde sedasyon veya genel anestezi mevcut mu?",
        "a": [
          "Evet. Diş hekimi korkusu veya cerrahi anksiyetesi olan hastalarımız için uzman anestezi hekimlerimiz gözetiminde bilinçli sedasyon ve genel anestezi uygulanmaktadır."
        ]
      },
      {
        "q": "Diş kaybında köprü yerine neden implant tercih edilir?",
        "a": [
          "Köprü tedavisinde boşluğun yanındaki sağlıklı dişlerin kesilmesi gerekir. İmplant ise komşu sağlıklı dişlere dokunmadan doğrudan çene kemiğine yerleşir ve kemik erimesini önler."
        ]
      },
      {
        "q": "HIV, Hepatit gibi kronik enfeksiyonu olan hastalara implant yapılabilir mi?",
        "a": [
          "Evet. Genel sağlık durumu stabil ve hekim kontrolünde olan hastalarımızda steril ameliyathane koşullarında güvenle implant uygulanmaktadır."
        ]
      },
      {
        "q": "Diyabet (şeker) hastaları implant yaptırabilir mi?",
        "a": [
          "Evet. HbA1c değeri kontrol altında ve stabil olan diyabet hastalarında implantlar yüksek başarı oranıyla güvenle kemikle kaynaşır."
        ]
      },
      {
        "q": "Sigara içen bireyler implant yaptırabilir mi?",
        "a": [
          "Sigara içmek implantın kemikle kaynaşma sürecini yavaşlatabilir ancak tedaviye engel değildir. Cerrahi öncesi ve sonrası sigaranın azaltılması tavsiye edilir."
        ]
      },
      {
        "q": "İmplant tutmazsa veya başarısız olursa ne olur?",
        "a": [
          "Kliniğimizde implant başarı oranı %98’in üzerindedir. Nadir bir kayıp durumunda implant ücretsiz olarak çıkarılır, bölge iyileştikten sonra garanti kapsamında yeniden yerleştirilir."
        ]
      },
      {
        "q": "All-on-4 ile All-on-6 arasındaki fark nedir, hangisi bana uygundur?",
        "a": [
          "All-on-4 arka bölgede kemik erimesi olan vakalarda kemik greftine gerek kalmadan 4 açılı implantla uygulanır. All-on-6 ise kemik hacmi yeterli olan ve daha geniş 14 dişlik çiğneme arkı isteyen hastalar için ekstra stabilite sağlar. 3D Tomografi analizi ile sizin için en uygun seçenek belirlenir."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "Pakiety Podniesienia Dna Zatok (Sinus Lift) i Kalkulator Walutowy",
    "packagesSubtitle": "Kompleksowe pakiety zabiegów podniesienia zatoki szczękowej i odbudowy kości z certyfikowanymi systemami Geistlich Bio-Oss (Szwajcaria), Botiss i Straumann.",
    "mostPopularBadge": "Najpopularniejszy Wybór",
    "durationLabel": "Czas Zabiegu:",
    "includedLabel": "Zawartość Pakietu:",
    "priceLabel": "Cena (All-Inclusive):",
    "getQuoteBtn": "Otrzymaj Bezpłatną Wycenę",
    "faqTitle": "Najczęściej Zadawane Pytania o Zabiegu",
    "faqSubtitle": "Przejrzyste odpowiedzi dotyczące czasu trwania leczenia, kosztów, materiałów i rekonwalescencji.",
    "packages": [
      {
        "name": "Zamknięty Sinus Lift (Metoda Wewnętrzna - 1 Strona)",
        "brand": "Geistlich Bio-Oss (Made in Switzerland)",
        "duration": "45 – 60 Minut (1 Wizyta)",
        "img": "/packages/pkg-4.webp",
        "popular": true,
        "included": [
          "Wewnętrzne uniesienie błony śluzowej zatoki metodą osteotomową",
          "1.0 cc Oryginalnego szwajcarskiego biokompatybilnego biomateriału Geistlich Bio-Oss",
          "Pełna tomografia komputerowa 3D CBCT i cyfrowa ocena objętości kości",
          "Sterylna sala zabiegowa, znieczulenie miejscowe i opieka przeciwbólowa",
          "Pozabiegowy zestaw leków: antybiotyk, środki przeciwbólowe i płukanki",
          "Certyfikat dożywotniej stabilności integracji kostnej",
          "Prywatne transfery VIP Mercedes (Lotnisko - Klinika - Hotel) w cenie"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "Otwarty Sinus Lift (Okno Boczne - 1 Strona)",
        "brand": "Geistlich Bio-Oss + Membrana Kolagenowa Bio-Gide",
        "duration": "60 – 90 Minut (1 Wizyta)",
        "img": "/packages/pkg-5.webp",
        "included": [
          "Bezpośrednie uniesienie dna zatoki szczękowej z bocznego okna kostnego",
          "2.0 cc Szwajcarskiego biomateriału Geistlich Bio-Oss dla maksymalnej wysokości pionowej",
          "Resorbowalna szwajcarska naturalna membrana kolagenowa Geistlich Bio-Gide",
          "Wysokiej rozdzielczości skan 3D CT i wirtualne planowanie chirurgiczne",
          "Kompletny sterylny zestaw operacyjny i pakiet recept farmaceutycznych",
          "Dedykowany polskojęzyczny koordynator pacjenta przez cały pobyt",
          "Prywatne transfery VIP Mercedes na każdym etapie leczenia"
        ],
        "price": {
          "USD": "$520",
          "EUR": "€475",
          "GBP": "£410"
        }
      },
      {
        "name": "Obustronny Otwarty Sinus Lift (Bilateralny)",
        "brand": "Geistlich Swiss Bio-Oss + Bio-Gide (Pakiet Podwójny)",
        "duration": "90 – 120 Minut (1 Wizyta)",
        "img": "/packages/pkg-6.webp",
        "included": [
          "Jednoczesna obustronna augmentacja zatok szczękowych (prawa i lewa strona)",
          "4.0 cc Szwajcarskiego materiału Bio-Oss + 2 szt. barierowych membran kolagenowych Bio-Gide",
          "Kompleksowa tomografia twarzoczaszki 3D CBCT i planowanie komputerowe",
          "Opcja sedacji dożylnej (Twilight Sedation) dla maksymalnego komfortu",
          "Kompletny zestaw pozabiegowych leków i regeneracji pozabiegowej",
          "Transfery szoferem VIP Mercedes + Zakwaterowanie w 4-gwiazdkowym hotelu"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£770"
        }
      },
      {
        "name": "Pakiet Sinus Lift + 2 Implanty Straumann",
        "brand": "Straumann SLA + Szwajcarski Geistlich Bio-Oss",
        "duration": "3+5 Dni Roboczych (2 Wizyty)",
        "img": "/packages/pkg-1.webp",
        "included": [
          "1x Sinus Lift (otwarty lub zamknięty) + Szwajcarski przeszczep Bio-Oss",
          "2x Oryginalne tytanowe implanty szwajcarskie Straumann SLA",
          "2x Monolityczne niemieckie korony cyrkonowe lub Ivoclar E-Max",
          "Tomografia 3D CBCT, szablon chirurgiczny i znieczulenie",
          "Dożywotni Międzynarodowy Paszport Gwarancyjny Straumann",
          "Transfery lotniskowe VIP + Hotel w centrum Antalyi"
        ],
        "price": {
          "USD": "$1,950",
          "EUR": "€1,790",
          "GBP": "£1,550"
        }
      },
      {
        "name": "Pakiet Sinus Lift + 4 Implanty Nobel Biocare",
        "brand": "Nobel Biocare CC + Biomateriał Geistlich",
        "duration": "3+5 Dni Roboczych (2 Wizyty)",
        "img": "/packages/pkg-2.webp",
        "included": [
          "Obustronny Sinus Lift + Pełna rekonstrukcja wyrostka zębodołowego",
          "4x Implanty tytanowe klasy 4 NobelParallel CC",
          "Tymczasowy most natychmiastowy + 4 stałe korony cyrkonowe",
          "Planowanie komputerowe 3D i wsparcie sedacji medycznej",
          "Dożywotnia Globalna Gwarancja Nobel Biocare",
          "Prywatny szofer VIP Mercedes + Hotel 5-gwiazdkowy"
        ],
        "price": {
          "USD": "$3,850",
          "EUR": "€3,490",
          "GBP": "£2,990"
        }
      },
      {
        "name": "Pełna Rekonstrukcja Szczęki & 6 Implantów",
        "brand": "Straumann / Nobel + Pełna Augmentacja Kości",
        "duration": "3+5 Dni Roboczych (2 Wizyty)",
        "img": "/packages/pkg-3.webp",
        "included": [
          "Kompleksowy obustronny Sinus Lift i poszerzenie wyrostka zębodołowego",
          "6x Wysokomomentowych implantów tytanowych dla pełnego łuku 14 zębów",
          "Stały most monolityczny 1200+ MPa z niemieckiego cyrkonu (14 punktów)",
          "Diagnostyka 3D CT, cyfrowy wax-up i estetyczne projektowanie uśmiechu",
          "Znieczulenie, sterylny zestaw operacyjny i pełne leki",
          "Dożywotni Paszport Gwarancyjny",
          "VIP Mercedes Transfers + Luksusowe zakwaterowanie 5-gwiazdkowe"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      }
    ],
    "faqs": [
      {
        "q": "Czy plan leczenia lub podana cena zmienią się po moim przyjeździe?",
        "a": [
          "Dobre pytanie. Niestety wielu pacjentów podróżujących za granicę spotyka się w niektórych klinikach z nieetycznymi praktykami i ukrytymi kosztami.",
          "Plan i cena, które Państwu przedstawiamy, są starannie przygotowywane na podstawie przesłanych zdjęć rentgenowskich, tomografii oraz Państwa oczekiwań. Po przyjeździe do kliniki potwierdzamy wszystko podczas bezpośredniego badania klinicznego przed rozpoczęciem jakichkolwiek procedur.",
          "Czasami jednak podczas badania tomograficznego na miejscu ujawniają się detale niewidoczne na zwykłych zdjęciach pantomograficznych, np. konieczność dodatkowej odbudowy kości lub podniesienia dna zatoki. W naszej klinice możliwość wystąpienia takich zabiegów oraz ich dokładne koszty są zawsze w 100% transparentnie przedstawione w planie leczenia przed wylotem.",
          "Jeśli zajdzie taka potrzeba, nasi chirurdzy dokładnie wszystko wyjaśnią, pokażą problem na skanie 3D i omówią opcje. Żaden zabieg nie jest wykonywany bez Państwa pełnej zgody.",
          "Podsumowując: Państwa plan leczenia i cena pozostają niezmienne, chyba że w badaniu klinicznym na miejscu wykryte zostaną nowe okoliczności anatomiczne. Nawet wtedy decyzję podejmujemy wspólnie."
        ]
      },
      {
        "q": "Czy pomagacie w organizacji zakwaterowania?",
        "a": [
          "Tak, oczywiście. Nasi pacjenci regularnie przylatują z Polski i całej Europy, dlatego dbamy o pełen komfort nie tylko podczas wizyt w gabinecie, ale także w trakcie całego pobytu w Antalyi. Polecamy i rezerwujemy sprawdzone, komfortowe hotele 4- i 5-gwiazdkowe położone blisko naszej kliniki.",
          "Naszym celem jest zapewnienie Państwu bezstresowej podróży, aby mogli Państwo skupić się na metamorfozie uśmiechu i cieszyć się urokami Antalyi."
        ]
      },
      {
        "q": "Czy podróż do Turcji na leczenie stomatologiczne jest bezpieczna?",
        "a": [
          "Tak! Turcja jest jednym z najpopularniejszych i najbezpieczniejszych kierunków turystyki medycznej na świecie, goszczącym miliony pacjentów rocznie. Antalya oferuje ultra-nowoczesne kliniki, luksusowe hotele i wysokie standardy medyczne.",
          "Zapewniamy prywatne transfery VIP z lotniska do hotelu i kliniki oraz dedykowaną opiekę koordynatora, co gwarantuje pełne poczucie bezpieczeństwa i komfortu od momentu lądowania."
        ]
      },
      {
        "q": "Jakie materiały są stosowane do koron i protez w Waszej klinice?",
        "a": [
          "Stosujemy wyłącznie certyfikowane, oryginalne materiały stomatologiczne klasy premium.",
          "Do licówek i koron estetycznych wykorzystujemy szwajcarską ceramikę Ivoclar E-Max, natomiast do rekonstrukcji na implantach All-on-4, All-on-6 i mostów pełnołukowych stosujemy monolityczny niemiecki tlenek cyrkonu Amman-Girrbach o wytrzymałości ponad 1200 MPa."
        ]
      },
      {
        "q": "Czy mogę zobaczyć kształt i kolor moich nowych zębów przed ich wykonaniem?",
        "a": [
          "Tak, absolutnie. W ramach cyfrowego projektowania uśmiechu (Digital Smile Design) i procedury \"Mock-up\" prezentujemy Państwu wizualizację i tymczasowy wzorzec zębów bezpośrednio w jamie ustnej.",
          "Dzięki temu mogą Państwo ocenić kształt, długość, linię uśmiechu oraz odcień przed wykonaniem ostatecznych koron z cyrkonu lub porcelany. Dopiero po Państwa pełnej akceptacji laboratorium przystępuje do frezowania ostatecznych prac."
        ]
      },
      {
        "q": "Czy po zabiegu implantacji lub podniesienia zatoki będę odczuwać duży ból?",
        "a": [
          "Sam zabieg jest całkowicie bezbolesny, ponieważ przeprowadzany jest w skutecznym znieczuleniu miejscowym (z opcją sedacji).",
          "W pierwszych 2-3 dniach po zabiegu może wystąpić lekki obrzęk lub tkliwość, porównywalna do stanu po standardowej ekstrakcji zęba. Dolegliwości te są skutecznie kontrolowane za pomocą przepisanych leków przeciwbólowych, przeciwzapalnych oraz chłodzących okładów żelowych, które pacjent otrzymuje od kliniki.",
          "Większość naszych pacjentów wraca do normalnego funkcjonowania już następnego dnia."
        ]
      },
      {
        "q": "Czy akceptujecie płatności online i karty płatnicze?",
        "a": [
          "Tak, w Master Smile Studio akceptujemy różnorodne metody płatności, w tym karty kredytowe i debetowe (Visa, Mastercard), przelewy bankowe oraz płatności gotówkowe w EUR, GBP i USD.",
          "W celu uzyskania szczegółowych informacji prosimy o kontakt z naszym działem obsługi pacjenta."
        ]
      },
      {
        "q": "Czy Wasze pakiety zawierają hotel i transfery VIP?",
        "a": [
          "Tak, nasze pakiety leczenia implantologicznego i pełnej rekonstrukcji obejmują prywatne transfery VIP Mercedes (lotnisko-hotel-klinika) oraz pobyt ze śniadaniem w partnerskich hotelach 4- i 5-gwiazdkowych w centrum Antalyi."
        ]
      },
      {
        "q": "Czy mogę zapłacić za leczenie w ratach?",
        "a": [
          "Oferujemy elastyczne formy płatności etapowych (np. płatność rozłożona pomiędzy pierwszą a drugą wizytą). W celu poznania szczegółów finansowania prosimy o kontakt z koordynatorem."
        ]
      },
      {
        "q": "Czy oferujecie gwarancję lub ubezpieczenie powikłań?",
        "a": [
          "Wszystkie zabiegi implantologiczne objęte są dożywotnią międzynarodową gwarancją producenta (Paszport Implantologiczny Straumann / Nobel Biocare) oraz gwarancją kliniczną Master Smile Studio chroniącą przed ewentualnymi powikłaniami."
        ]
      },
      {
        "q": "Czy mogę bezpiecznie odłożyć leczenie stomatologiczne na później?",
        "a": [
          "Odłożenie leczenia jest możliwe, lecz niezalecane. Problemy stomatologiczne, takie jak ubytki, stany zapalne czy braki zębowe, mają charakter postępujący i prowadzą do zaniku kości wyrostka zębodołowego. Wczesna interwencja jest zawsze prostsza, szybsza i bardziej ekonomiczna."
        ]
      },
      {
        "q": "Która korona na implantach jest lepsza: E-Max czy cyrkonowa?",
        "a": [
          "W przypadku implantów korony z monolitycznego tlenku cyrkonu są zazwyczaj najtrwalszym i najbezpieczniejszym wyborem, szczególnie w strefie bocznej (trzonowce) i przy pełnych łukach ze względu na ogromną wytrzymałość na siły żucia.",
          "Korony E-Max z czystej porcelany oferują najwyższą przezierność i estetykę, dlatego są polecane w odcinku przednim (linia uśmiechu), gdy odbudowujemy pojedyncze zęby.",
          "Nasi specjaliści dobierają optymalny materiał w zależności od pozycji zęba w łuku."
        ]
      },
      {
        "q": "Co powinienem zrobić, jeśli proteza All-on-6 ulegnie uszkodzeniu?",
        "a": [
          "W rzadkim przypadku pęknięcia lub uszkodzenia konstrukcji należy niezwłocznie skontaktować się z naszą kliniką. Nasi specjaliści przeprowadzą bezpłatną naprawę lub wymianę w ramach gwarancji. Prosimy nie naprawiać protezy samodzielnie."
        ]
      },
      {
        "q": "Czy protezy All-on-6 są wykonane z żywicy, akrylu czy plastiku?",
        "a": [
          "Ostateczne mosty All-on-6 są wykonywane z wysoce odpornego monolitycznego tlenku cyrkonu lub ceramiki na podbudowie tytanowej. Tworzywa akrylowe stosowane są wyłącznie w mostach tymczasowych na czas gojenia."
        ]
      },
      {
        "q": "Czy w Waszej klinice dostępna jest sedacja podczas zabiegów? Jakie rodzaje znieczulenia oferujecie?",
        "a": [
          "Tak, komfort pacjenta i bezstresowe leczenie to nasz najwyższy priorytet.",
          "Oferujemy 3 poziomy znieczulenia:",
          "• Skuteczne znieczulenie miejscowe (standard we wszystkich zabiegach).",
          "• Sedacja dożylna (Twilight Sedation) – pacjent jest głęboko zrelaksowany i nie odczuwa stresu ani upływu czasu.",
          "• Znieczulenie ogólne (narkoza) – prowadzone przez lekarza anestezjologa w dedykowanej sali operacyjnej."
        ]
      },
      {
        "q": "Dlaczego w przypadku utraty zęba preferuje się implant zamiast mostu?",
        "a": [
          "Tradycyjny most wymaga trwałego oszlifowania dwóch sąsiednich, często zupełnie zdrowych zębów. Implant zastępuje korzeń utraconego zęba bez naruszania zębów sąsiednich i stymuluje kość, zapobiegając jej zanikowi."
        ]
      },
      {
        "q": "Czy zabieg implantacji może być wykonany u pacjentów z chorobami takimi jak HIV lub WZW (Hepatitis)?",
        "a": [
          "Tak. Jeśli stan ogólny pacjenta jest stabilny i kontrolowany lekarsko, zabiegi chirurgiczne i implantologiczne są przeprowadzane w pełni bezpiecznie przy zachowaniu rygorystycznych procedur sterylizacji."
        ]
      },
      {
        "q": "Czy pacjenci z chorobami przewlekłymi, takimi jak cukrzyca, mogą mieć wszczepione implanty?",
        "a": [
          "Tak. Przy uregulowanym poziomie cukru we krwi (prawidłowy wskaźnik HbA1c) proces osteointegracji implantu z kością przebiega z taką samą wysoką skutecznością jak u osób zdrowych."
        ]
      },
      {
        "q": "Czy mogę poddać się zabiegowi implantacji, jeśli palę papierosy?",
        "a": [
          "Tak, palenie nie wyklucza z leczenia implantologicznego, jednak zwiększa ryzyko powikłań gojenia. Zalecamy ograniczenie lub odstawienie palenia na okres przed i pooperacyjny."
        ]
      },
      {
        "q": "Co się stanie, jeśli implant się nie przyjmie?",
        "a": [
          "Skuteczność implantacji w naszej klinice przekracza 98%. W bardzo rzadkich przypadkach braku integracji implant jest usuwany, a po krótkim okresie regeneracji wszczepiany ponownie bezpłatnie w ramach gwarancji klinicznej."
        ]
      },
      {
        "q": "Jaka jest różnica między zabiegami All-on-4 i All-on-6? Jak decydujecie, który jest dla mnie odpowiedni?",
        "a": [
          "All-on-4 stosuje 4 implanty (w tym 2 pod kątem) i jest idealny przy umiarkowanym zaniku kości w odcinku bocznym bez konieczności przeszczepu. All-on-6 opiera się na 6 implantach, zapewniając maksymalne podparcie dla 14-zębowego łuku. Wybór metody opieramy na analizie tomografii 3D CBCT i anatomii pacjenta."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "Sinuslift & Knochenaufbau Pakete & Währungsrechner",
    "packagesSubtitle": "All-inclusive Sinuslift- und Knochenaufbau-Pakete mit zertifizierten Systemen von Geistlich Bio-Oss (Schweiz), Botiss und Straumann.",
    "mostPopularBadge": "Beliebteste Wahl",
    "durationLabel": "Behandlungsdauer:",
    "includedLabel": "Paket-Leistungen:",
    "priceLabel": "Preis (All-Inclusive):",
    "getQuoteBtn": "Kostenloses Angebot anfordern",
    "faqTitle": "Häufig gestellte Fragen zu dieser Behandlung",
    "faqSubtitle": "Klarheit zu Behandlungsdauer, Kosten, Materialien und Heilung für internationale Patienten.",
    "packages": [
      {
        "name": "Geschlossener interner Sinuslift (1 Seite)",
        "brand": "Geistlich Bio-Oss (Schweizer Qualität)",
        "duration": "45 – 60 Minuten (1 Sitzung)",
        "img": "/packages/pkg-4.webp",
        "popular": true,
        "included": [
          "Interner krestaler Sinuslift mit Osteotom-Präzisionstechnik",
          "1.0 cc Original Schweizer Geistlich Bio-Oss Natur-Knochentransplantat",
          "3D CBCT Volumentomographie & digitale Knochendichtemessung",
          "Steriler Operationssaal, Lokalanästhesie & Schmerztherapie",
          "Postoperatives Medikamentenpaket (Antibiotika, Analgetika, Mundspülung)",
          "Zertifikat für lebenslange Knochenstabilitätsgarantie",
          "VIP Mercedes Flughafen- & Kliniktransfers inklusive"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "Offener Sinuslift (Laterales Fenster - 1 Seite)",
        "brand": "Geistlich Bio-Oss + Bio-Gide Kollagenmembran",
        "duration": "60 – 90 Minuten (1 Sitzung)",
        "img": "/packages/pkg-5.webp",
        "included": [
          "Direkte Anhebung der Sinusmembran über laterales Knochenfenster",
          "2.0 cc Geistlich Bio-Oss Granulat für maximale vertikale Knochenhöhe",
          "Resorbierbare Schweizer Geistlich Bio-Gide Kollagen-Schutzmembran",
          "Hochauflösende 3D CT-Diagnostik & computergestützte OP-Planung",
          "Komplettes OP-Set, Lokalanästhesie & Schmerzmittel",
          "Persönliche deutschsprachige Patientenbetreuung vor Ort",
          "Private VIP-Transfers (Flughafen - Hotel - Klinik)"
        ],
        "price": {
          "USD": "$520",
          "EUR": "€475",
          "GBP": "£410"
        }
      },
      {
        "name": "Beidseitiger offener Sinuslift (Bilateral)",
        "brand": "Geistlich Swiss Bio-Oss + Bio-Gide (Doppelset)",
        "duration": "90 – 120 Minuten (1 Sitzung)",
        "img": "/packages/pkg-6.webp",
        "included": [
          "Gleichzeitiger beidseitiger Sinuslift im rechten und linken Oberkiefer",
          "4.0 cc Schweizer Bio-Oss Knochenmatrix + 2x Bio-Gide Membranen",
          "Umfassende 3D Kraniofaziale CT-Diagnostik",
          "Optionale Dämmerschlaf-Sedierung (IV) für maximalen Komfort",
          "Vollständiges postoperatives Nachsorge- und Medikamentenset",
          "VIP Mercedes Chauffeur-Service + 4-Sterne Hotelaufenthalt"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£770"
        }
      },
      {
        "name": "Sinuslift + 2 Straumann Implantate Paket",
        "brand": "Straumann SLA + Geistlich Bio-Oss",
        "duration": "3+5 Werktage (2 Besuche)",
        "img": "/packages/pkg-1.webp",
        "included": [
          "1x Sinuslift (offen oder geschlossen) + Schweizer Bio-Oss Knochenaufbau",
          "2x Original Straumann SLA Schweizer Titanimplantate",
          "2x Monolithische deutsche Zirkonkronen oder Ivoclar E-Max",
          "3D CBCT Diagnostik, Bohrschablone & Lokalanästhesie",
          "Lebenslanger internationaler Straumann Garantiepass",
          "VIP Flughafentransfers + 4-Sterne Hotel im Stadtzentrum"
        ],
        "price": {
          "USD": "$1,950",
          "EUR": "€1,790",
          "GBP": "£1,550"
        }
      },
      {
        "name": "Sinuslift + 4 Nobel Biocare Oberkiefer",
        "brand": "Nobel Biocare CC + Geistlich Knochentransplantat",
        "duration": "3+5 Werktage (2 Besuche)",
        "img": "/packages/pkg-2.webp",
        "included": [
          "Bilateraler Sinuslift & vollständige Knochenrekonstruktion",
          "4x NobelParallel CC Grad 4 Titanimplantate",
          "Sofortige provisorische Brücke + 4 permanente Zirkonkronen",
          "3D geführte Chirurgie & Anästhesiebetreuung",
          "Lebenslanger Nobel Biocare Garantiepass",
          "VIP Mercedes Transfers + 5-Sterne Hotelübernachtung"
        ],
        "price": {
          "USD": "$3,850",
          "EUR": "€3,490",
          "GBP": "£2,990"
        }
      },
      {
        "name": "Vollständige Oberkiefer-Rekonstruktion & 6 Implantate",
        "brand": "Straumann / Nobel + Kompletter Knochenaufbau",
        "duration": "3+5 Werktage (2 Besuche)",
        "img": "/packages/pkg-3.webp",
        "included": [
          "Umfassender beidseitiger Sinuslift & Kieferkammverbreiterung",
          "6x High-Torque Titanimplantate für vollen 14-Zahn Oberkieferbogen",
          "Festsitzende 1200+ MPa monolithische Zirkonbrücke (14 Einheiten)",
          "3D CT Diagnostik, Digital Wax-Up & Smile Design",
          "Steriler Operationssaal, Anästhesie & Medikamente",
          "Lebenslanger globaler Garantiepass",
          "VIP Mercedes Chauffeur + 5-Sterne Luxus-Hotel"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      }
    ],
    "faqs": [
      {
        "q": "Ändert sich mein Behandlungsplan oder Preis bei meiner Ankunft in der Klinik?",
        "a": [
          "Sehr gute Frage. Leider erleben viele Patienten bei Zahnbehandlungen im Ausland unethische Praktiken mit versteckten Zusatzkosten.",
          "Unser Behandlungs- und Kostenplan wird vorab auf Basis Ihrer Röntgenbilder, Fotos und Wünsche präzise kalkuliert. Bei Ihrer Ankunft wird dieser bei der klinischen Voruntersuchung verbindlich bestätigt.",
          "Sollte sich in seltenen Fällen bei der 3D-CT-Diagnostik vor Ort herausstellen, dass ein zusätzlicher Knochenaufbau oder Sinuslift nötig ist, wird dies transparent und detailliert mit Ihnen besprochen. Ohne Ihre ausdrückliche Zustimmung wird kein Schritt unternommen.",
          "Ihr Behandlungsplan und der Preis bleiben fest und transparent."
        ]
      },
      {
        "q": "Helfen Sie bei der Organisation der Unterkunft in Antalya?",
        "a": [
          "Ja, selbstverständlich. Wir organisieren für unsere internationalen Patienten den Aufenthalt in geprüften 4- und 5-Sterne-Partnerhotels in direkter Nähe unserer Klinik inklusive Frühstück und privatem VIP-Shuttleservice.",
          "Unser Ziel ist ein rundum stressfreier Aufenthalt, damit Sie sich voll auf Ihr neues Lächeln konzentrieren können."
        ]
      },
      {
        "q": "Ist eine Zahnbehandlungsreise in die Türkei sicher?",
        "a": [
          "Ja! Die Türkei ist weltweit eines der führenden Länder im Medizintourismus mit strengen europäischen Hygienestandards. Antalya empfängt jährlich Millionen internationale Gäste sicher und gastfreundlich.",
          "Mit unserem privaten VIP-Fahrservice vom Flughafen zur Klinik und deutschsprachiger Betreuung sind Sie zu jedem Zeitpunkt bestens geschützt und versorgt."
        ]
      },
      {
        "q": "Welche Materialien werden für Kronen und Prothesen verwendet?",
        "a": [
          "Wir setzen ausschließlich auf zertifizierte Originalmaterialien marktführender Hersteller: Schweizer Ivoclar E-Max für Veneers sowie deutsches Amman-Girrbach Zirkonium (1200+ MPa) für langlebige Implantatbrücken."
        ]
      },
      {
        "q": "Kann ich Form und Farbe meiner neuen Zähne vor der Herstellung sehen?",
        "a": [
          "Ja, absolut. Mittels 3D Digital Smile Design und individuellem \"Mock-up\" probieren Sie die Zähne direkt im Mund an, bevor die endgültigen Zirkonkronen im Meisterlabor gefräst werden.",
          "Erst nach Ihrer 100%igen Freigabe beginnt die finale Fertigung."
        ]
      },
      {
        "q": "Habe ich nach dem Sinuslift oder der Implantation starke Schmerzen?",
        "a": [
          "Der Eingriff selbst ist unter hochwirksamer Lokalanästhesie oder Dämmerschlaf vollkommen schmerzfrei.",
          "In den ersten 2-3 Tagen kann ein leichtes Druckgefühl oder Schwellung auftreten, das sich mit den von uns mitgegebenen Medikamenten und Kühlpads optimal kontrollieren lässt."
        ]
      },
      {
        "q": "Akzeptieren Sie Online-Zahlungen und Kreditkarten?",
        "a": [
          "Ja, wir bieten flexible Zahlungswege an: Kreditkarten (Visa, Mastercard), Banküberweisung sowie Barzahlung in EUR, GBP oder USD vor Ort."
        ]
      },
      {
        "q": "Beinhalten Ihre Behandlungspakete Hotelübernachtung und Transfers?",
        "a": [
          "Ja, unsere All-Inclusive-Pakete für Implantate und Sinuslift beinhalten private Mercedes VIP-Transfers und Übernachtungen im zentralen Hotel."
        ]
      },
      {
        "q": "Kann ich die Behandlungskosten in Raten zahlen?",
        "a": [
          "Wir bieten etappenweise Zahlungen an (z. B. aufgeteilt auf die beiden Behandlungstermine). Sprechen Sie unseren Patientenkoordinator gerne darauf an."
        ]
      },
      {
        "q": "Bieten Sie Garantie und Schutz vor Komplikationen?",
        "a": [
          "Ja. Alle Implantate verfügen über einen lebenslangen internationalen Hersteller-Garantiepass (Straumann / Nobel Biocare) sowie unsere klinische Erfolgsgarantie."
        ]
      },
      {
        "q": "Kann ich meine Zahnbehandlung sicher aufschieben?",
        "a": [
          "Ein Aufschieben ist möglich, birgt jedoch Risiken für fortschreitenden Knochenabbau und Folgeentzündungen. Je früher behandelt wird, desto einfacher und kostengünstiger ist der Eingriff."
        ]
      },
      {
        "q": "Welche Krone ist auf Implantaten besser: E-Max oder Zirkon?",
        "a": [
          "Monolithisches Zirkonium ist extrem bruchfest und daher erste Wahl für Seitenzähne und Vollbögen. E-Max bietet maximale Lichtdurchlässigkeit und eignet sich perfekt für Frontzahn-Einzelkronen."
        ]
      },
      {
        "q": "Was mache ich, wenn eine All-on-6 Brücke beschädigt wird?",
        "a": [
          "Kontaktieren Sie direkt unsere Klinik. Im Rahmen der Garantie reparieren oder ersetzen unsere Spezialisten das Element umgehend kostenfrei."
        ]
      },
      {
        "q": "Bestehen All-on-6 Prothesen aus Kunststoff oder Acryl?",
        "a": [
          "Die permanenten Versorgungen bestehen aus 100% massivem Zirkonium oder Keramik. Acryl wird ausschließlich für temporäre Übergangsbrücken während der Einheilphase genutzt."
        ]
      },
      {
        "q": "Bieten Sie Sedierung oder Vollnarkose während der Behandlung an?",
        "a": [
          "Ja. Neben der schmerzfreien Lokalanästhesie bieten wir Dämmerschlaf (IV-Sedierung) und Vollnarkose unter Aufsicht von Fachärzten für Anästhesiologie an."
        ]
      },
      {
        "q": "Warum ist ein Implantat bei Zahnverlust besser als eine Brücke?",
        "a": [
          "Implantate erhalten gesunde Nachbarzähne unbeschliffen, verwachsen fest mit dem Kieferknochen und stoppen den natürlichen Knochenabbau dauerhaft."
        ]
      },
      {
        "q": "Können Patienten mit chronischen Infektionen (HIV, Hepatitis) behandelt werden?",
        "a": [
          "Ja. Bei stabilen Laborwerten und ärztlicher Betreuung führen wir alle chirurgischen Eingriffe unter höchsten Sterilitätsstandards sicher durch."
        ]
      },
      {
        "q": "Können Diabetiker Zahnimplantate und Sinuslift erhalten?",
        "a": [
          "Ja. Bei gut eingestelltem Blutzuckerspiegel (HbA1c-Wert) heilen Implantate mit der gleichen hohen Erfolgsquote wie bei gesunden Patienten ein."
        ]
      },
      {
        "q": "Kann ich als Raucher Implantate und Knochenaufbau bekommen?",
        "a": [
          "Ja, Rauchen schließt die Behandlung nicht aus. Wir empfehlen jedoch, den Konsum vor und nach dem Eingriff zu reduzieren, um die Wundheilung zu fördern."
        ]
      },
      {
        "q": "Was passiert, wenn ein Implantat nicht einheilt?",
        "a": [
          "Unsere Erfolgsquote liegt bei über 98%. Bei seltenen Einheilungsstörungen wird das Implantat kostenfrei entfernt und nach kurzer Regenerationsphase im Rahmen der Garantie neu gesetzt."
        ]
      },
      {
        "q": "Was ist der Unterschied zwischen All-on-4 und All-on-6?",
        "a": [
          "All-on-4 nutzt 4 angewinkelte Implantate und ist ideal bei moderatem Knochenabbau ohne Transplantat. All-on-6 verteilt die Kaukraft auf 6 Pfeiler für maximale Stabilität bei 14 Zähnen."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "Paquetes de Elevación de Seno y Regeneración Ósea",
    "packagesSubtitle": "Soluciones integrales de elevación de seno maxilar e injerto óseo con Geistlich Bio-Oss suizo, Botiss y Straumann.",
    "mostPopularBadge": "Opción Más Popular",
    "durationLabel": "Duración del Tratamiento:",
    "includedLabel": "Incluido en el Paquete:",
    "priceLabel": "Precio (Todo Incluido):",
    "getQuoteBtn": "Obtener Presupuesto Gratis",
    "faqTitle": "Preguntas Frecuentes Sobre Este Tratamiento",
    "faqSubtitle": "Respuestas claras sobre tiempos de tratamiento, costes, materiales y recuperación.",
    "packages": [
      {
        "name": "Elevación de Seno Cerrada (Técnica Interna - 1 Lado)",
        "brand": "Geistlich Bio-Oss (Fabricación Suiza)",
        "duration": "45 – 60 Minutos (1 Sesión)",
        "img": "/packages/pkg-4.webp",
        "popular": true,
        "included": [
          "Elevación crestal atraumática con instrumental de osteotomo",
          "1.0 cc Injerto óseo natural suizo Geistlich Bio-Oss",
          "Tomografía 3D CBCT y evaluación digital de densidad ósea",
          "Quirófano estéril, anestesia local y control del dolor",
          "Kit de medicación postoperatoria (antibióticos y analgésicos)",
          "Certificado de garantía de estabilidad ósea de por vida",
          "Traslados privados VIP Mercedes (Aeropuerto - Clínica - Hotel)"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "Elevación de Seno Abierta (Ventana Lateral - 1 Lado)",
        "brand": "Geistlich Bio-Oss + Membrana Bio-Gide",
        "duration": "60 – 90 Minutos (1 Sesión)",
        "img": "/packages/pkg-5.webp",
        "included": [
          "Elevación directa de la membrana sinusal mediante ventana lateral",
          "2.0 cc Gránulos suizos Geistlich Bio-Oss para máxima ganancia vertical",
          "Membrana de colágeno reabsorbible suiza Geistlich Bio-Gide",
          "Escaneo 3D CT de alta resolución y planificación guiada",
          "Kit quirúrgico completo, anestesia local y prescripción médica",
          "Coordinador internacional de pacientes en español",
          "Traslados VIP Mercedes incluidos en todo el proceso"
        ],
        "price": {
          "USD": "$520",
          "EUR": "€475",
          "GBP": "£410"
        }
      },
      {
        "name": "Elevación de Seno Bilateral (Ambos Lados)",
        "brand": "Geistlich Swiss Bio-Oss + Bio-Gide (Set Doble)",
        "duration": "90 – 120 Minutos (1 Sesión)",
        "img": "/packages/pkg-6.webp",
        "included": [
          "Regeneración ósea bilateral simultánea en maxilar superior",
          "4.0 cc Matriz ósea suiza Bio-Oss + 2 membranas Bio-Gide",
          "Diagnóstico tomográfico craneofacial 3D completo",
          "Opción de sedación intravenosa para máximo confort",
          "Kit completo de medicación y cuidados postoperatorios",
          "Chófer privado VIP Mercedes + Hotel de 4 estrellas"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£770"
        }
      },
      {
        "name": "Paquete Elevación de Seno + 2 Implantes Straumann",
        "brand": "Straumann SLA + Geistlich Bio-Oss Suizo",
        "duration": "3+5 Días Hábiles (2 Visitas)",
        "img": "/packages/pkg-1.webp",
        "included": [
          "1x Elevación de Seno + Injerto óseo suizo Bio-Oss",
          "2x Implantes de titanio suizo genuinos Straumann SLA",
          "2x Coronas monolíticas alemanas de circonio o Ivoclar E-Max",
          "Tomografía 3D, férula quirúrgica y anestesia local",
          "Pasaporte de garantía internacional de por vida Straumann",
          "Traslados VIP aeropuerto + Hotel céntrico de 4 estrellas"
        ],
        "price": {
          "USD": "$1,950",
          "EUR": "€1,790",
          "GBP": "£1,550"
        }
      },
      {
        "name": "Paquete Elevación de Seno + 4 Implantes Nobel Biocare",
        "brand": "Nobel Biocare CC + Injerto Geistlich",
        "duration": "3+5 Días Hábiles (2 Visitas)",
        "img": "/packages/pkg-2.webp",
        "included": [
          "Elevación bilateral de seno y reconstrucción ósea total",
          "4x Implantes de titanio grado 4 NobelParallel CC",
          "Puente provisional fijo el mismo día + 4 coronas de circonio",
          "Planificación quirúrgica 3D por ordenador y sedación",
          "Garantía global de por vida Nobel Biocare",
          "Traslados VIP Mercedes + Alojamiento en hotel de 5 estrellas"
        ],
        "price": {
          "USD": "$3,850",
          "EUR": "€3,490",
          "GBP": "£2,990"
        }
      },
      {
        "name": "Reconstrucción Maxilar Completa & 6 Implantes",
        "brand": "Straumann / Nobel + Regeneración Ósea Total",
        "duration": "3+5 Días Hábiles (2 Visitas)",
        "img": "/packages/pkg-3.webp",
        "included": [
          "Elevación bilateral integral y ensanchamiento de cresta",
          "6x Implantes de alto torque para arco superior de 14 dientes",
          "Puente fijo monolítico de circonio alemán 1200+ MPa (14 piezas)",
          "Diagnóstico 3D CT, encerado digital y diseño de sonrisa",
          "Quirófano estéril, anestesia y medicación completa",
          "Pasaporte de garantía de por vida",
          "Chófer VIP Mercedes + Hotel de lujo 5 estrellas"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      }
    ],
    "faqs": [
      {
        "q": "¿Cambiará mi plan de tratamiento o el precio cuando llegue a la clínica?",
        "a": [
          "Excelente pregunta. En Master Smile Studio garantizamos transparencia absoluta sin costes ocultos ni sorpresas de última hora.",
          "El presupuesto y plan que enviamos se basan minuciosamente en sus radiografías y fotografías. Al llegar a la clínica en Antalya, se confirma mediante una tomografía 3D antes de iniciar el procedimiento.",
          "Si excepcionalmente se detecta una necesidad anatómica no visible previamente (como elevación de seno o injerto), se le explica en detalle y nada se realiza sin su total consentimiento."
        ]
      },
      {
        "q": "¿Nos ayudan con la reserva de hotel y traslados?",
        "a": [
          "Sí, por supuesto. Organizamos su estancia en hoteles concertados de 4 y 5 estrellas cerca de la clínica y ofrecemos chófer privado VIP Mercedes para todos los trayectos (aeropuerto, hotel y clínica)."
        ]
      },
      {
        "q": "¿Es seguro viajar a Turquía para tratamientos dentales?",
        "a": [
          "Sí, totalmente. Antalya es un destino líder a nivel mundial en turismo médico, con estándares hospitalarios de vanguardia y millones de pacientes satisfechos cada año."
        ]
      },
      {
        "q": "¿Qué materiales utilizan para las coronas y prótesis?",
        "a": [
          "Utilizamos cerámica suiza Ivoclar E-Max para carillas y zirconio monolítico alemán Amman-Girrbach (1200+ MPa) de alta resistencia para implantes y puentes completos."
        ]
      },
      {
        "q": "¿Puedo ver la forma y color de mis dientes antes de fabricarlos?",
        "a": [
          "Sí, con nuestro Diseño Digital de Sonrisa (DSD) y la prueba \"Mock-up\" podrá visualizar y probar en su boca la forma, alineación y color exactos antes del fresado definitivo."
        ]
      },
      {
        "q": "¿Tendré mucho dolor después de la cirugía de implantes o elevación de seno?",
        "a": [
          "El procedimiento es totalmente indoloro gracias a la anestesia local avanzada o sedación. En los días posteriores se puede notar una leve molestia fácilmente controlada con los analgésicos que le facilitamos."
        ]
      },
      {
        "q": "¿Aceptan pagos con tarjeta o transferencias?",
        "a": [
          "Sí, aceptamos tarjetas bancarias (Visa, Mastercard), transferencias internacionales y pagos en efectivo en EUR, GBP o USD."
        ]
      },
      {
        "q": "¿Los paquetes incluyen alojamiento y transporte VIP?",
        "a": [
          "Sí, nuestros paquetes integrales de implantes y sinus lift incluyen noches de hotel céntrico y servicio de chófer privado VIP Mercedes."
        ]
      },
      {
        "q": "¿Se puede abonar el tratamiento en diferentes plazos?",
        "a": [
          "Sí, el pago se puede dividir cómodamente entre su primera y segunda visita a la clínica."
        ]
      },
      {
        "q": "¿Ofrecen garantía en los implantes y prótesis?",
        "a": [
          "Todos nuestros implantes cuentan con Pasaporte de Garantía Internacional de por vida (Straumann / Nobel Biocare) y cobertura clínica completa ante complicaciones."
        ]
      },
      {
        "q": "¿Es peligroso posponer los tratamientos dentales?",
        "a": [
          "Posponer el tratamiento puede agravar la pérdida ósea y encarecer futuros procedimientos. Un tratamiento a tiempo preserva el hueso y simplifica la cirugía."
        ]
      },
      {
        "q": "¿Qué corona es mejor sobre implantes: E-Max o Circonio?",
        "a": [
          "El circonio monolítico es insuperable en fuerza para molares y rehabilitaciones completas, mientras que E-Max aporta la máxima estética translúcida en dientes frontales."
        ]
      },
      {
        "q": "¿Qué ocurre si una prótesis All-on-6 sufre algún daño?",
        "a": [
          "Contacte con nosotros inmediatamente. Nuestro laboratorio y equipo clínico repararán o sustituirán la estructura bajo la garantía oficial."
        ]
      },
      {
        "q": "¿Las prótesis All-on-6 definitivas son de plástico o acrílico?",
        "a": [
          "No, las prótesis definitivas son 100% de circonio macizo de alta resistencia. El acrílico solo se utiliza en prótesis provisionales durante la osteointegración."
        ]
      },
      {
        "q": "¿Disponen de sedación o anestesia general?",
        "a": [
          "Sí, disponemos de sedación consciente intravenosa y anestesia general con anestesistas expertos para pacientes con fobia dental o cirugías complejas."
        ]
      },
      {
        "q": "¿Por qué elegir un implante en vez de un puente tradicional?",
        "a": [
          "El implante no daña ni talla los dientes sanos vecinos y estimula el hueso maxilar evitando el envejecimiento facial por pérdida ósea."
        ]
      },
      {
        "q": "¿Pacientes con VIH o Hepatitis pueden colocarse implantes?",
        "a": [
          "Sí. Con un estado de salud controlado y bajo estrictos protocolos de bioseguridad, la cirugía de implantes se efectúa con total seguridad."
        ]
      },
      {
        "q": "¿Las personas con diabetes pueden llevar implantes?",
        "a": [
          "Sí. Manteniendo un nivel glucémico adecuado (HbA1c controlado), la integración del implante en el hueso es excelente."
        ]
      },
      {
        "q": "¿Puedo ponerme implantes si soy fumador?",
        "a": [
          "Sí. Fumar no impide colocarse implantes, aunque aconsejamos reducir el consumo antes y después de la intervención para optimizar la cicatrización."
        ]
      },
      {
        "q": "¿Qué ocurre si un implante no se integra correctamente?",
        "a": [
          "Nuestra tasa de éxito supera el 98%. Si un implante no cicatriza bien, se retira y se vuelve a colocar de forma gratuita bajo nuestra garantía."
        ]
      },
      {
        "q": "¿Cuál es la diferencia entre All-on-4 y All-on-6?",
        "a": [
          "All-on-4 utiliza 4 implantes angulados ideales para casos con menor hueso posterior sin necesidad de injerto. All-on-6 emplea 6 implantes para máxima firmeza en arcos completos."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "Pacotes de Sinus Lift e Enxerto Ósseo com Calculadora",
    "packagesSubtitle": "Pacotes completos de elevação do seio maxilar e enxerto ósseo com sistemas Geistlich Bio-Oss (Suíça), Botiss e Straumann.",
    "mostPopularBadge": "Escolha Mais Popular",
    "durationLabel": "Duração do Procedimento:",
    "includedLabel": "Itens Inclusos:",
    "priceLabel": "Preço (Tudo Incluído):",
    "getQuoteBtn": "Solicitar Orçamento Gratuito",
    "faqTitle": "Perguntas Frequentes Sobre Este Tratamento",
    "faqSubtitle": "Respostas claras sobre prazos, custos, materiais e recuperação para pacientes internacionais.",
    "packages": [
      {
        "name": "Sinus Lift Fechado (Técnica Interna - 1 Lado)",
        "brand": "Geistlich Bio-Oss (Fabricação Suíça)",
        "duration": "45 – 60 Minutos (1 Sessão)",
        "img": "/packages/pkg-4.webp",
        "popular": true,
        "included": [
          "Elevação crestal do seio com técnica atraumática de osteótomo",
          "1.0 cc Enxerto ósseo natural suíço Geistlich Bio-Oss",
          "Tomografia 3D CBCT e avaliação digital de densidade óssea",
          "Bloco cirúrgico estéril, anestesia local e controlo da dor",
          "Kit de medicação pós-operatória (antibióticos e analgésicos)",
          "Certificado de garantia de estabilidade óssea vitalícia",
          "Transfers VIP Mercedes (Aeroporto - Clínica - Hotel) incluídos"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "Sinus Lift Aberto (Janela Lateral - 1 Lado)",
        "brand": "Geistlich Bio-Oss + Membrana de Colagénio Bio-Gide",
        "duration": "60 – 90 Minutos (1 Sessão)",
        "img": "/packages/pkg-5.webp",
        "included": [
          "Elevação direta da membrana sinusal por janela lateral",
          "2.0 cc Grânulos suíços Geistlich Bio-Oss para ganho vertical máximo",
          "Membrana de colagénio reabsorvível suíça Geistlich Bio-Gide",
          "Tomografia 3D CT de alta resolução e planeamento virtual",
          "Kit cirúrgico estéril, anestesia local e medicação completa",
          "Coordenador internacional de pacientes em português",
          "Transfers VIP Mercedes incluídos em todas as deslocações"
        ],
        "price": {
          "USD": "$520",
          "EUR": "€475",
          "GBP": "£410"
        }
      },
      {
        "name": "Sinus Lift Aberto Bilateral (Ambos os Lados)",
        "brand": "Geistlich Swiss Bio-Oss + Bio-Gide (Conjunto Duplo)",
        "duration": "90 – 120 Minutos (1 Sessão)",
        "img": "/packages/pkg-6.webp",
        "included": [
          "Regeneração óssea bilateral simultânea na maxila superior",
          "4.0 cc Matriz óssea suíça Bio-Oss + 2 membranas Bio-Gide",
          "Diagnóstico craniofacial 3D completo por tomografia",
          "Opção de sedação consciente intravenosa para máximo conforto",
          "Kit pós-operatório completo de medicação e recuperação",
          "Motorista privado VIP Mercedes + Hotel de 4 estrelas"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£770"
        }
      },
      {
        "name": "Pacote Sinus Lift + 2 Implantes Straumann",
        "brand": "Straumann SLA + Enxerto Geistlich Bio-Oss",
        "duration": "3+5 Dias Úteis (2 Visitas)",
        "img": "/packages/pkg-1.webp",
        "included": [
          "1x Sinus Lift + Enxerto ósseo suíço Bio-Oss",
          "2x Implantes de titânio suíço genuínos Straumann SLA",
          "2x Coroas monolíticas de zircónia alemã ou Ivoclar E-Max",
          "Tomografia 3D, guia cirúrgico e anestesia local",
          "Passaporte de garantia internacional vitalícia Straumann",
          "Transfers VIP do aeroporto + Hotel de 4 estrelas no centro"
        ],
        "price": {
          "USD": "$1,950",
          "EUR": "€1,790",
          "GBP": "£1,550"
        }
      },
      {
        "name": "Pacote Sinus Lift + 4 Implantes Nobel Biocare",
        "brand": "Nobel Biocare CC + Enxerto Geistlich",
        "duration": "3+5 Dias Úteis (2 Visitas)",
        "img": "/packages/pkg-2.webp",
        "included": [
          "Sinus Lift bilateral e reconstrução óssea total",
          "4x Implantes de titânio grau 4 NobelParallel CC",
          "Ponte provisória fixa no mesmo dia + 4 coroas de zircónia",
          "Planeamento cirúrgico digital 3D e sedação médica",
          "Garantia vitalícia global Nobel Biocare",
          "Transfers VIP Mercedes + Hotel de 5 estrelas"
        ],
        "price": {
          "USD": "$3,850",
          "EUR": "€3,490",
          "GBP": "£2,990"
        }
      },
      {
        "name": "Reconstrução Maxilar Completa & 6 Implantes",
        "brand": "Straumann / Nobel + Regeneração Óssea Total",
        "duration": "3+5 Dias Úteis (2 Visitas)",
        "img": "/packages/pkg-3.webp",
        "included": [
          "Sinus Lift bilateral abrangente e aumento de crista alveolar",
          "6x Implantes de alto torque para arco superior de 14 dentes",
          "Ponte fixa monolítica de zircónia alemã 1200+ MPa (14 elementos)",
          "Diagnóstico 3D CT, enceramento digital e design de sorriso",
          "Bloco cirúrgico estéril, anestesia e medicação completa",
          "Passaporte de garantia vitalícia",
          "Motorista VIP Mercedes + Hotel de luxo de 5 estrelas"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      }
    ],
    "faqs": [
      {
        "q": "O meu plano de tratamento ou o preço apresentado podem mudar à chegada?",
        "a": [
          "Excelente questão. Na Master Smile Studio seguimos uma política de transparência absoluta, sem custos ocultos.",
          "O plano e o valor enviados baseiam-se nas suas radiografias e fotografias. À chegada à nossa clínica em Antalya, confirmamos tudo através de uma tomografia 3D antes de qualquer procedimento.",
          "Caso surja alguma necessidade cirúrgica adicional não visível anteriormente, tudo será detalhadamente explicado e decidido consigo antes de avançar."
        ]
      },
      {
        "q": "Ajudam na reserva de hotel e organização de transfers?",
        "a": [
          "Sim, com certeza. Ajudamos a reservar hotéis de 4 e 5 estrelas parceiros perto da clínica e fornecemos motorista privado VIP Mercedes em todos os trajectos."
        ]
      },
      {
        "q": "É seguro viajar para a Turquia para tratamento dentário?",
        "a": [
          "Sim! A Turquia é um dos destinos mais reputados e seguros do mundo em turismo médico, recebendo anualmente milhões de pacientes internacionais."
        ]
      },
      {
        "q": "Que materiais utilizam para as coroas e próteses?",
        "a": [
          "Trabalhamos com materiais de excelência: cerâmica suíça Ivoclar E-Max para facetas estéticas e zircónia monolítica alemã Amman-Girrbach (1200+ MPa) sobre implantes."
        ]
      },
      {
        "q": "Posso ver a forma e cor dos meus dentes antes de serem fabricados?",
        "a": [
          "Sim! Com o Design Digital de Sorriso e a prova de \"Mock-up\", experimenta no próprio sorriso a forma, tamanho e tonalidade antes da produção definitiva."
        ]
      },
      {
        "q": "Vou sentir dores fortes após o sinus lift ou colocação de implantes?",
        "a": [
          "O procedimento cirúrgico é completamente indolor graças à anestesia local de última geração ou sedação. O pós-operatório é suave e facilmente gerido com os analgésicos prescritos."
        ]
      },
      {
        "q": "Aceitam pagamentos online e cartões de crédito?",
        "a": [
          "Sim, aceitamos cartões Visa e Mastercard, transferências bancárias internacionais e pagamentos em numerário (EUR, GBP, USD)."
        ]
      },
      {
        "q": "Os pacotes incluem hotel e transporte VIP?",
        "a": [
          "Sim, os nossos pacotes de implantes e sinus lift incluem noites de alojamento e transfers com motorista VIP Mercedes."
        ]
      },
      {
        "q": "Posso efetuar o pagamento do tratamento em prestações?",
        "a": [
          "O pagamento pode ser faseado entre a primeira e a segunda visita a Antalya com total flexibilidade."
        ]
      },
      {
        "q": "Oferecem garantia e seguro contra complicações?",
        "a": [
          "Todos os implantes possuem Passaporte de Garantia Internacional Vitalícia (Straumann / Nobel Biocare) e cobertura clínica total."
        ]
      },
      {
        "q": "É seguro adiar o meu tratamento dentário?",
        "a": [
          "Adiar pode acelerar a reabsorção óssea e tornar a reabilitação mais complexa. Um tratamento atempado preserva o osso e simplifica o procedimento."
        ]
      },
      {
        "q": "Que coroa é melhor sobre implantes: E-Max ou Zircónia?",
        "a": [
          "A zircónia monolítica é a opção mais duradoura e resistente para dentes posteriores e arcos completos. O E-Max é indicado para dentes anteriores pela sua translucidez natural."
        ]
      },
      {
        "q": "O que devo fazer se a prótese All-on-6 sofrer algum dano?",
        "a": [
          "Entre em contacto direto connosco. A nossa equipa assegura a reparação ou substituição imediata ao abrigo da garantia."
        ]
      },
      {
        "q": "As próteses All-on-6 definitivas são feitas de plástico ou acrílico?",
        "a": [
          "Não, as próteses definitivas são produzidas em zircónia monolítica pura ou cerâmica sobre titânio. O acrílico é apenas usado em próteses provisórias."
        ]
      },
      {
        "q": "Têm sedação consciente ou anestesia geral disponível?",
        "a": [
          "Sim, disponibilizamos sedação consciente intravenosa e anestesia geral com médicos especialistas em anestesiologia."
        ]
      },
      {
        "q": "Porque se prefere um implante em vez de uma ponte clássica?",
        "a": [
          "O implante preserva os dentes vizinhos intactos (sem desgastes) e impede o recuo do osso maxilar."
        ]
      },
      {
        "q": "Pacientes com VIH ou Hepatite podem colocar implantes?",
        "a": [
          "Sim, sob acompanhamento médico estável e com rigorosos padrões de esterilização hospitalar."
        ]
      },
      {
        "q": "Pacientes com diabetes podem fazer cirurgia de implantes?",
        "a": [
          "Sim. Com a glicemia e o valor de HbA1c controlados, a cicatrização óssea decorre com elevado sucesso."
        ]
      },
      {
        "q": "Posso colocar implantes se for fumador?",
        "a": [
          "Sim, o tabaco não impede o tratamento, embora recomendemos a redução do consumo para facilitar a regeneração dos tecidos."
        ]
      },
      {
        "q": "O que acontece se um implante não integrar?",
        "a": [
          "A nossa taxa de sucesso é superior a 98%. Em caso de insucesso raro, o implante é substituído gratuitamente ao abrigo da nossa garantia."
        ]
      },
      {
        "q": "Qual é a diferença entre All-on-4 e All-on-6?",
        "a": [
          "O All-on-4 usa 4 implantes angulados para maximizar o osso disponível sem enxertos. O All-on-6 usa 6 implantes para máxima rigidez e estabilidade em 14 dentes."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "Пакеты Синус-Лифтинга и Наращивания Кости с Калькулятором",
    "packagesSubtitle": "Комплексные программы синус-лифтинга и костной пластики на основе оригинального Geistlich Bio-Oss (Швейцария), Botiss и Straumann.",
    "mostPopularBadge": "Самый Популярный Выбор",
    "durationLabel": "Время Процедуры:",
    "includedLabel": "В Стоимость Входит:",
    "priceLabel": "Цена (Все Включено):",
    "getQuoteBtn": "Получить Бесплатный Расчет",
    "faqTitle": "Часто Задаваемые Вопросы о Процедуре",
    "faqSubtitle": "Подробные ответы о сроках лечения, ценах, материалах и восстановлении для иностранных пациентов.",
    "packages": [
      {
        "name": "Закрытый синус-лифтинг (Мягкая методика - 1 сторона)",
        "brand": "Geistlich Bio-Oss (Производство Швейцария)",
        "duration": "45 – 60 Минут (1 Визит)",
        "img": "/packages/pkg-4.webp",
        "popular": true,
        "included": [
          "Внутреннее поднятие дна гайморовой пазухи остеотомом",
          "1.0 см³ Натурального швейцарского костного биоматериала Geistlich Bio-Oss",
          "Полная 3D КТ-томография и цифровая оценка плотности кости",
          "Стерильный хирургический блок, местная анестезия и обезболивание",
          "Послеоперационный набор медикаментов (антибиотики, обезболивающие)",
          "Пожизненный сертификат стабильности костной интеграции",
          "Индивидуальный VIP трансфер Mercedes (Аэропорт - Клиника - Отель)"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "Открытый синус-лифтинг (Латеральное окно - 1 сторона)",
        "brand": "Geistlich Bio-Oss + Мембрана Bio-Gide",
        "duration": "60 – 90 Минут (1 Визит)",
        "img": "/packages/pkg-5.webp",
        "included": [
          "Прямой доступ и поднятие мембраны Шнайдера через боковое окно",
          "2.0 см³ Швейцарского костного трансплантата Geistlich Bio-Oss",
          "Рассасывающаяся коллагеновая барьерная мембрана Geistlich Bio-Gide",
          "Высокоточное 3D КТ-сканирование и виртуальное планирование операции",
          "Полный хирургический набор, анестезия и комплексная медикаментозная поддержка",
          "Персональный русскоговорящий медицинский координатор",
          "VIP трансферы Mercedes на протяжении всего лечения"
        ],
        "price": {
          "USD": "$520",
          "EUR": "€475",
          "GBP": "£410"
        }
      },
      {
        "name": "Двусторонний открытый синус-лифтинг (Обе стороны)",
        "brand": "Geistlich Swiss Bio-Oss + Bio-Gide (Двойной набор)",
        "duration": "90 – 120 Минут (1 Визит)",
        "img": "/packages/pkg-6.webp",
        "included": [
          "Одновременная костная пластика пазух с правой и левой стороны",
          "4.0 см³ Швейцарского костного матрикса Bio-Oss + 2 мембраны Bio-Gide",
          "Комплексная челюстно-лицевая 3D КТ диагностика",
          "Опция седации (медикаментозный сон) для максимального комфорта",
          "Полный комплект препаратов для быстрого восстановления",
          "Личный водитель VIP Mercedes + Проживание в отеле 4 звезды"
        ],
        "price": {
          "USD": "$980",
          "EUR": "€890",
          "GBP": "£770"
        }
      },
      {
        "name": "Синус-лифтинг + 2 Импланта Straumann",
        "brand": "Straumann SLA + Швейцарский Geistlich Bio-Oss",
        "duration": "3+5 Рабочих дней (2 Визита)",
        "img": "/packages/pkg-1.webp",
        "included": [
          "1x Синус-лифтинг + Швейцарская костная пластика Bio-Oss",
          "2x Оригинальных швейцарских титановых импланта Straumann SLA",
          "2x Монолитные коронки из немецкого циркония или Ivoclar E-Max",
          "3D КТ, навигационный хирургический шаблон и анестезия",
          "Пожизненный международный гарантийный паспорт Straumann",
          "VIP трансферы из аэропорта + Отель 4 звезды в центре"
        ],
        "price": {
          "USD": "$1,950",
          "EUR": "€1,790",
          "GBP": "£1,550"
        }
      },
      {
        "name": "Синус-лифтинг + 4 Импланта Nobel Biocare",
        "brand": "Nobel Biocare CC + Костный трансплантат Geistlich",
        "duration": "3+5 Рабочих дней (2 Визита)",
        "img": "/packages/pkg-2.webp",
        "included": [
          "Двусторонний синус-лифтинг и полная костная реконструкция",
          "4x Титановых импланта 4 класса NobelParallel CC",
          "Временный несъемный мост в день операции + 4 постоянные циркониевые коронки",
          "3D компьютерное планирование операции и поддержка седации",
          "Пожизненная глобальная гарантия Nobel Biocare",
          "VIP Mercedes трансфер + Проживание в отеле 5 звезд"
        ],
        "price": {
          "USD": "$3,850",
          "EUR": "€3,490",
          "GBP": "£2,990"
        }
      },
      {
        "name": "Полная реконструкция верхней челюсти & 6 имплантов",
        "brand": "Straumann / Nobel + Комплексная костная пластика",
        "duration": "3+5 Рабочих дней (2 Визита)",
        "img": "/packages/pkg-3.webp",
        "included": [
          "Комплексный двусторонний синус-лифтинг и расширение альвеолярного гребня",
          "6x Высокостабильных титановых имплантов для полной дуги из 14 зубов",
          "Постоянный монолитный мост 1200+ МПа из немецкого циркония (14 единиц)",
          "3D КТ диагностика, цифровой восковой макет и дизайн улыбки",
          "Стерильный оперблок, анестезия и полный медикаментозный набор",
          "Пожизненный международный гарантийный паспорт",
          "VIP Mercedes трансфер + 5-звездочный отель люкс"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      }
    ],
    "faqs": [
      {
        "q": "Может ли измениться план лечения или названная стоимость по моему приезду?",
        "a": [
          "Отличный вопрос. Мы гарантируем полную финансовую прозрачность без скрытых платежей и неожиданных доплат.",
          "Ваш план и стоимость формируются на основе КТ-снимков и фотографий. По прибытии в Анталью мы подтверждаем детали на очной 3D-томографии перед началом лечения.",
          "Если выявляются скрытые анатомические особенности (необходимость синус-лифтинга или наращивания кости), мы детально согласовываем все варианты с вами. Никаких действий без вашего согласия не проводится."
        ]
      },
      {
        "q": "Помогаете ли вы с организацией проживания и отелем?",
        "a": [
          "Да, конечно. Мы бронируем комфортабельные 4- и 5-звездочные отели рядом с клиникой и предоставляем персональный VIP трансфер Mercedes на протяжении всей поездки."
        ]
      },
      {
        "q": "Безопасно ли приезжать в Турцию на лечение зубов?",
        "a": [
          "Да, абсолютно! Турция — мировой лидер медицинского туризма с европейскими стандартами стерильности и безопасности, ежегодно принимающий миллионы пациентов."
        ]
      },
      {
        "q": "Какие материалы используются для коронок и мостов?",
        "a": [
          "Мы применяем оригинальную швейцарскую керамику Ivoclar E-Max для виниров и немецкий монолитный цирконий Amman-Girrbach (прочность 1200+ МПа) для имплантатов и мостов All-on-4/6."
        ]
      },
      {
        "q": "Могу ли я увидеть форму и цвет зубов до их изготовления?",
        "a": [
          "Да, благодаря 3D цифровому дизайну улыбки (DSD) и примерке Mock-up модели вы сможете оценить форму, цвет и посадку зубов прямо в полости рта до изготовления постоянных конструкций."
        ]
      },
      {
        "q": "Будет ли больно во время и после операции синус-лифтинга или имплантации?",
        "a": [
          "Операция проходит абсолютно безболезненно благодаря современной анестезии или седации. Небольшой отек в первые дни легко снимается назначенными препаратами и охлаждающими компрессами."
        ]
      },
      {
        "q": "Принимаете ли вы оплату картами или онлайн?",
        "a": [
          "Да, доступны различные способы оплаты: банковские карты, безналичный расчет и наличные (EUR, USD, GBP)."
        ]
      },
      {
        "q": "Включены ли в пакеты трансфер и отель?",
        "a": [
          "Да, комплексные программы имплантации и синус-лифтинга включают проживание в отеле и персональный VIP трансфер Mercedes."
        ]
      },
      {
        "q": "Возможна ли поэтапная оплата лечения?",
        "a": [
          "Да, оплата может быть разделена между первым и вторым этапом лечения."
        ]
      },
      {
        "q": "Предоставляете ли вы официальную гарантию?",
        "a": [
          "Все импланты снабжены международным паспортом с пожизненной гарантией от производителя (Straumann, Nobel Biocare) и клинической защитой от осложнений."
        ]
      },
      {
        "q": "Опасно ли откладывать лечение зубов?",
        "a": [
          "Откладывание приводит к атрофии костной ткани челюсти и усложнению хирургии. Своевременное лечение сохраняет кость и экономит бюджет."
        ]
      },
      {
        "q": "Что лучше на импланты: цирконий или E-Max?",
        "a": [
          "Монолитный диоксид циркония — лучший выбор для жевательных зубов и полных дуг благодаря непревзойденной прочности. E-Max идеален для зоны улыбки за счет естественной светопроницаемости."
        ]
      },
      {
        "q": "Что делать, если конструкция All-on-6 повредится?",
        "a": [
          "Свяжитесь с нами напрямую. Наши специалисты оперативно проведут ремонт или замену по гарантии."
        ]
      },
      {
        "q": "Делаются ли постоянные протезы All-on-6 из акрила или пластмассы?",
        "a": [
          "Нет, постоянные мосты изготавливаются из цельного циркония или керамики на титане. Акрил используется только для временных протезов в период приживления."
        ]
      },
      {
        "q": "Доступна ли седация (медикаментозный сон) при лечении?",
        "a": [
          "Да, мы проводим лечение под внутривенной седацией или общим наркозом с участием опытных врачей-анестезиологов."
        ]
      },
      {
        "q": "Почему имплант лучше традиционного зубного моста?",
        "a": [
          "Имплант не требует обтачивания соседних здоровых зубов и предотвращает рассасывание костной ткани."
        ]
      },
      {
        "q": "Можно ли ставить импланты пациентам с ВИЧ или гепатитом?",
        "a": [
          "Да. При стабильных анализах и врачебном контроле имплантация проводится в абсолютно стерильных хирургических условиях."
        ]
      },
      {
        "q": "Возможна ли имплантация при сахарном диабете?",
        "a": [
          "Да. При компенсированном уровне сахара (контроле HbA1c) остеоинтеграция имплантов происходит так же успешно, как у здоровых людей."
        ]
      },
      {
        "q": "Можно ли ставить импланты курящим пациентам?",
        "a": [
          "Да, курение не является противопоказанием, однако мы рекомендуем снизить количество сигарет до и после операции для лучшего заживления."
        ]
      },
      {
        "q": "Что происходит, если имплант не приживается?",
        "a": [
          "Успешность в нашей клинике превышает 98%. В редких случаях отторжения имплант заменяется бесплатно по гарантии после кратковременного восстановления."
        ]
      },
      {
        "q": "В чем разница между All-on-4 и All-on-6?",
        "a": [
          "All-on-4 устанавливается на 4 имплантах под углом при дефиците кости без наращивания. All-on-6 задействует 6 опор для максимальной устойчивости при полноценном прикусе из 14 зубов."
        ]
      }
    ]
  }
};

export default function SinusLiftingDetailView() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');
  const pkgSliderRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

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
      {/* 1. FIND THE RIGHT TREATMENT FOR YOU ACCORDION (UNDER HERO) */}
      <TreatmentRightTreatmentAccordion />

      {/* 2. YOUR DENTAL JOURNEY MADE SIMPLE (STEP-BY-STEP & CONTACT CHANNELS) */}
      <TreatmentJourneySimpleSection />

      {/* 3. OUR BEST SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 4. REAL PATIENTS. REAL SMILES. (VIDEO REELS) */}
      <TreatmentPatientReelsSection />

      {/* 5. FROM FIRST VISIT TO FINAL SMILE (BEFORE & AFTER GALLERY) */}
      <TreatmentBeforeAfterSliderSection />

      {/* 6. TREATMENT PACKAGES & DYNAMIC CURRENCY SWITCHER (SINGLE-ROW HORIZONTAL SLIDER) */}
      <section aria-labelledby="sinus-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="sinus-packages-heading" className={styles.packagesTitle}>
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

      {/* 8. MASTER 21-QUESTION FAQ SECTION (CLINICAL & HEALTH TOURISM) */}
      <section aria-labelledby="sinus-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="sinus-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`sinus-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`sinus-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Sinus Lifting" />
      </div>
    </div>
  );
}
