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
  a: string[];
}

interface LocaleDictionary {
  packagesTitle: string;
  packagesSubtitle: string;
  mostPopularBadge: string;
  durationLabel: string;
  includedLabel: string;
  pricePerArchLabel: string;
  getQuoteBtn: string;
  packages: PackageItem[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
}

const DICTIONARIES: Record<string, LocaleDictionary> = {
  en: {
    packagesTitle: 'Implant-Supported Denture Packages & Dynamic Currency Calculator',
    packagesSubtitle: 'All-inclusive snap-on and bar-retained overdenture solutions featuring certified Straumann, Nobel Biocare, Medentika, and Osstem systems.',
    mostPopularBadge: 'Most Popular Choice',
    durationLabel: 'Treatment Duration:',
    includedLabel: 'Package Inclusions:',
    pricePerArchLabel: 'Price (All-Inclusive):',
    getQuoteBtn: 'Get Your Free Quote',
    packages: [
      {
        name: '2-Implant Locator Snap-On Package',
        brand: 'Medentika (Straumann Group)',
        duration: '3+5 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        popular: true,
        included: [
          '2x Genuine Medentika Titanium Implants per jaw',
          '2x Self-aligning Locator precision snap-on abutments',
          'Reinforced High-Impact Acrylic Denture with composite teeth',
          'Full 3D CBCT Tomography & digital bone density evaluation',
          'Sterile surgical suite, local anesthesia & medications',
          'Lifetime International Implant Warranty Passport',
          'VIP Mercedes Airport & Clinic transfers included'
        ],
        price: { USD: '$2,450', EUR: '€2,250', GBP: '£1,950' }
      },
      {
        name: '4-Implant Ball-Attachment Overdenture',
        brand: 'Osstem / Hiossen Premium',
        duration: '3+5 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '4x High-stability Osstem SA titanium fixtures per jaw',
          '4x Precision Ball/Cap retentive matrix attachments',
          'Palateless horseshoe-shaped reinforced overdenture',
          'Complete 3D digital smile scan & radiographic stents',
          'Post-op antibiotic, analgesic & anti-inflammatory pack',
          'Lifetime International Manufacturer Warranty Passport',
          'VIP Private Transfers & Dedicated Patient Host'
        ],
        price: { USD: '$3,150', EUR: '€2,890', GBP: '£2,490' }
      },
      {
        name: 'Straumann Novaloc Overdenture Package',
        brand: 'Straumann Group (Swiss Made)',
        duration: '3+5 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '4x Genuine Straumann SLA / Roxolid Titanium Implants',
          '4x Novaloc PEEK carbon-coated low-wear attachments',
          'Cobalt-Chromium internal sub-frame reinforced denture',
          '3D CBCT Craniofacial diagnostics & surgical guide',
          'Local anesthesia, sterile consumables & medications',
          'Lifetime Global Straumann Warranty Passport',
          'VIP Mercedes Transfers + 4-Star Hotel Accommodation'
        ],
        price: { USD: '$4,250', EUR: '€3,890', GBP: '£3,350' }
      },
      {
        name: 'Nobel Biocare Bar-Retained Overdenture',
        brand: 'Nobel Biocare (Swedish Precision)',
        duration: '4+5 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
        included: [
          '4x NobelParallel CC Grade 4 Titanium Implants',
          'Custom CAD/CAM Milled Titanium Dolder/Hader Bar',
          'Removable precision-clip overdenture with zero palatal plate',
          'Full 3D digital planning & computer-guided surgery',
          'Complete post-operative medication & care kit',
          'Lifetime Global Nobel Biocare Warranty Passport',
          'VIP Airport-Clinic Transfers & 5-Star Hotel Stay'
        ],
        price: { USD: '$4,850', EUR: '€4,450', GBP: '£3,850' }
      },
      {
        name: 'All-on-4 Full-Arch Fixed Hybrid Package',
        brand: 'Nobel Biocare / Straumann',
        duration: '3+5 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
        included: [
          '4x Premium Titanium Implants (2 straight, 2 angled)',
          'Immediate fixed acrylic screw-retained bridge (same-day teeth)',
          'Permanent CAD/CAM Monolithic Hybrid Zirconia bridge',
          '3D CBCT imaging & surgical stent guidance',
          'Full surgical kit, IV sedation options & medications',
          'Lifetime Global Manufacturer Warranty Passport',
          'VIP Airport Transfers + 5-Star Central Hotel included'
        ],
        price: { USD: '$5,450', EUR: '€4,990', GBP: '£4,290' }
      },
      {
        name: 'All-on-6 Full-Arch Fixed Zirconia Package',
        brand: 'Straumann / Nobel Biocare',
        duration: '3+5 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        included: [
          '6x High-torque Titanium Implants for maximum 14-tooth support',
          'Immediate temporary fixed load bridge within 24 hours',
          'Permanent 1200+ MPa Monolithic German Zirconia Bridge (14 units)',
          'High-resolution 3D CBCT, digital wax-up & aesthetic smile design',
          'Local anesthesia, sterile surgical pack & post-op medicines',
          'Lifetime Global Warranty Passport',
          'VIP Mercedes Chauffeur & 5-Star Hotel Accommodation'
        ],
        price: { USD: '$6,850', EUR: '€6,290', GBP: '£5,390' }
      }
    ],
    faqTitle: 'Frequently Asked Questions About This Treatment',
    faqSubtitle: 'Have questions about this treatment? You’re not alone. From treatment timelines to costs and recovery, we’re here to guide you with clear answers, expert advice, and personalized support at every step.',
    faqs: [
      {
        q: 'Will my treatment plan or the price you gave me change when I arrive?',
        a: [
          'Good question. Unfortunately, many patients who travel for their treatment face unethical practices in clinics they prefer such as getting bullied about surprise charges by clinics.',
          'The plan and price we share with you are carefully prepared based on the photos, X-rays, or details and your expectations that you send us before your trip. When you arrive, we simply confirm everything in person with an examination before beginning your treatment.',
          'Sometimes, however, a small detail that could not be seen in the photos or x-rays may show up during the clinic examination. For example, this might be the need to reinforce your bone tissue with grafting and sinus lifting procedure. Unlike most clinics that deal with international patients, the pricing and the possibility of these details are transparently shared with you in your treatment plan.',
          'If that happens, we will explain it clearly, show you the issue, and discuss all the options with you before making any changes. Nothing is ever done without your agreement.',
          'Your treatment plan and price will stay the same unless we discover something new during your check-up. Even then, we’ll decide together with you about your options before moving forward with any treatments.'
        ]
      },
      {
        q: 'Will you help me with accommodation?',
        a: [
          'Yes, of course. Our patients regularly travel from abroad, so we make sure you feel supported not only with your dental treatment but also with your stay in Istanbul. We can recommend trusted hotels close to our clinic, and if you prefer, we can also help arrange your booking.',
          'Our goal is to make your trip as smooth and stress-free as possible, so you can focus on your treatment and enjoy your time in the city. We’ll gladly assist you with accommodation and make sure you have comfortable options during your visit.'
        ]
      },
      {
        q: 'Is it safe to travel to Turkey?',
        a: [
          'Yes! Turkey is a very popular destination for international visitors and millions of tourists travel here safely every year. Cities like Istanbul are not only cultural and historical centers but also well-prepared to welcome patients from abroad with modern clinics, hotels, and transport services and many world-renowned touristic attractions.',
          'Like in any big city, it’s always wise to take normal travel precautions — such as keeping your valuables safe and being aware of your surroundings. Our clinic also helps arrange trusted transportation and accommodation options to make sure you feel comfortable and secure during your stay. With the extra support we provide, your dental trip can also be a smooth and worry-free experience.'
        ]
      },
      {
        q: 'What materials are used for dental crowns at your clinic?',
        a: [
          'We utilize the latest technologies and treatment protocols available in dentistry.',
          'Regarding dental prostheses, Ivoclar (Swiss) brand is used veneers meanwhile Amman-Girrbach brand is preferred for all on 4/6 treatments over implants.'
        ]
      },
      {
        q: 'Can I see the shape and color of my teeth before they are made?',
        a: [
          'Yes, absolutely. During smile design, we show you a simulation of your new teeth before they are actually made. With a "mock-up" model, you can see both the color and the shape of your future teeth, and even how they will look inside your mouth. Once you approve the mock-up, the final teeth are produced according to your choice.',
          'One important note: after your restorations are made, they cannot be lightened further, but they can be adjusted to a slightly darker shade if needed. That’s why we discuss all details with you beforehand and take your feedback seriously, so the final result matches exactly what you want.',
          'In short: yes, you’ll see a preview of your new smile before treatment — and you’ll have a chance to approve the look before the final teeth are made.'
        ]
      },
      {
        q: 'Will I experience too much pain after implant surgery?',
        a: [
          'You might feel some discomfort, swelling, or mild soreness in the first few days, which is similar to what you would feel after having a tooth pulled. However, this is usually well controlled with over-the-counter painkillers and the medication we will prescribe to you.',
          'On your first day of the operation, You will also be asked to follow a 5-minutes-on, 5-minutes-off application of an ice pack we will be providing you. This is to aid you in preventing the swelling which is also reinforced further by the pain medication we’ll be prescribing you, which will act as your anti-inflammatory. The pain is typically the strongest in the first 48 hours and then quickly improves.',
          'Moreover, during the procedure itself, you won’t feel any pain because we use local anesthesia and also offer sedation options to keep you relaxed and comfortable or put you to sleep throughout the procedure in case you prefer that.'
        ]
      },
      {
        q: 'Do you support online payments?',
        a: [
          'Our clinic offers a variety of payment options designed to meet the needs of our patients.',
          'For more detailed information, please feel free to contact us.'
        ]
      },
      {
        q: 'Does your packages include hotels and transfers?',
        a: [
          'The contents of our packages may vary depending on the selected treatment.',
          'To find out the most suitable option for you, please feel free to contact us.'
        ]
      },
      {
        q: 'Can I pay my treatment/package fees in installments?',
        a: [
          'In our clinic, we offer various payment options for treatment and package fees.',
          'For detailed information about installment plans, please contact us.'
        ]
      },
      {
        q: 'Do you offer warranty or insurance?',
        a: [
          'All treatments in our clinic are covered by a guarantee within the specified periods and conditions.',
          'For more detailed information, please feel free to contact us.'
        ]
      },
      {
        q: 'Can I safely postpone my dental treatments?',
        a: [
          'Postponing dental treatment is possible, but it is not the safest choice. Dental health issues tend to present themselves without major symptoms and are progressive. Small problems like cavities or gum issues often start out painless. But over time, they can grow and lead to bigger issues such as infections, tooth loss, then bone loss, or the need for more complex treatments.',
          'If your situation isn’t urgent, a short delay may not cause harm. However, the longer you wait, the higher the risk that the problem becomes more serious and costly to fix. More delay means more chances for your oral and dental health to get worse.',
          'It’s best not to delay dental treatment. If you have concerns about timing, consult your dentist. Together you can make a plan that fits your needs.'
        ]
      },
      {
        q: 'Which crown is better over implants, E-Max or Zirconium Crown?',
        a: [
          'For implants, zirconia is generally the stronger and safer choice. It is very durable, making it ideal for the back chewing teeth as well as for full-mouth restorations. Zirconia can handle the high pressure of biting and chewing without problems.',
          'E-Max crowns, on the other hand, are made fully from porcelain and provide a more natural, lifelike appearance. That’s why they are usually recommended for the front teeth, especially when only 1–2 implants are placed in the smile line. They still function well on implants and won’t break easily there, but they are not advised for the back teeth where chewing force is much stronger.',
          'Zirconia works everywhere in the mouth and is the most reliable option for implant crowns, while E-Max is sometimes chosen for the front teeth when the patient wants the most natural-looking smile.'
        ]
      },
      {
        q: 'What do I do if an All-on-6 prosthesis breaks?',
        a: [
          'If you experience a fracture or crack in your All-on-6 prosthesis, it is important to visit our clinic as soon as possible.',
          'Repair or replacement, if necessary, will be carried out by our specialist dentists. Please avoid attempting any self-repair, as this could damage both the implants and your gums.',
          'For more information or to schedule an urgent appointment, you can contact us directly.'
        ]
      },
      {
        q: 'Are All-on-6 prostheses made of resin, acrylic, or plastic material?',
        a: [
          'All-on-6 prostheses are generally made from durable materials such as porcelain or zirconia, which provide both aesthetics and long-term strength.',
          'Resin, acrylic, or plastic materials are usually used only for temporary prostheses.',
          'The most suitable material for your permanent prosthesis will be determined after a detailed examination at our clinic. For more information or to schedule an appointment, please contact us.'
        ]
      },
      {
        q: 'Is sedation are available in your clinic for dental implant treatment? What types of sedation are available?',
        a: [
          'Absolutely. Patient comfort is top priority at our clinic. We’d like to keep your treatments as comfortable and stress-free as possible, especially people who would feel anxious about dental procedures.',
          'We offer three types of sedation depending on your needs and medical history. These are:',
          '• Local anesthesia, which numbs only the area being operated on. It’s the most common and widespread method that is included in all our implant procedures.',
          '• IV Sedation, also called twilight sedation, which keeps you relaxed and calm during the treatment while still being awake. Many patients won’t even remember the procedure afterward.',
          '• General anesthesia, which is used for cases where deeper sedation is necessary. This kind of sedation is typically done with an anesthesiologist present.',
          'Before your treatment, we will comprehensively discuss your options, answer any questions you may have and choose the safest, most comfortable solution tailored for your treatment plan. Your peace of mind matters just as much as your smile to us.'
        ]
      },
      {
        q: 'Why is an implant preferred instead of a bridge in cases of tooth loss?',
        a: [
          'Unless the space caused by tooth loss requires more than one implant, dental implants are preferred instead of bridges mainly because they offer a long-lasting solution without affecting your healthy teeth.',
          'Bridge treatment requires shaving down the healthy teeth on either side of your gap so that they can support the replacement tooth in the middle. This means permanently altering your healthy teeth just to fix one missing tooth. An implant here is used without shaving your healthy teeth and replaces what is lost and enables your healthy teeth to stay untouched.',
          'Implants also help preserve bone in your jaw. When a tooth is missing, the underlying bone tissue begins to shrink over time. Implants attach to and stimulate the bone tissue just like a tooth root, providing a firm grip and keeping your facial structure intact. Bridges won’t do this.'
        ]
      },
      {
        q: 'Can implant surgery or other treatments be performed for patients diseases such as HIV, Hepatitis, etc.?',
        a: [
          'The answer is Yes. As long as the patient’s overall health is stable and well-managed, patients with conditions like HIV, Hep B, Hep C can safely receive dental implant treatment and other procedures.',
          'The points of considerance here are your immune status, viral load and whether you’re under proper medical care and monitoring. Thanks to right precautions and planning, dental treatment and surgery can be done safely and successfully.',
          'We always coordinate with your medical team as needed to ensure the timing and conditions are right for your post-op healing process.',
          'We follow strict universal infection control protocols for all our patients, so you will be treated with the same level of care and respect as anyone else. Your medical history will stay confidential, and your health and well-being will be our utmost priority. It is every patient’s right to ask to receive health care regardless of their condition, and we are here to support you every step of your journey.'
        ]
      },
      {
        q: 'Can patients with chronic conditions such as diabetes have implants?',
        a: [
          'Of course! Patients with chronic conditions can still receive dental implants. It depends on how well your condition is controlled. If your diabetes is well-managed (meaning that your blood sugar is at stable levels), your body will have the ability to heal properly after your implant surgery.',
          'We will kindly ask you tos hare your blood sugar levels from your HbA1c Test. If the test values allow, you will be able to get implant surgery unless there is some other condition that would actually prevent you from getting dental implants.',
          'That’s why we always ask about your medical history first, and may request blood test results to understand your overall health before planning the treatment of your unique case.'
        ]
      },
      {
        q: 'Can I still get implants if I’m a smoker?',
        a: [
          'Yes, you can still get implants even if you are a smoker. It doesn’t disqualify you for implantation. However, it’s important to know that smoking does bring the increased risk of complications.',
          'Smoking affects your blood flow and your body’s healing capability. These are both essential for your implants to successfully bond with your jawbone. It may also raise the chances of infection around your surgical area which may lead to implant failure, especially during the early stages of your healing process. This is the reason why we strongly recommend quitting or at least reducing smoking before and after your implant surgery.',
          'It’s just like growing a plant. If the pot’s soil is dry and the conditions are tough, the plant might still grow, but it will need more care and attention. It’s the same when it comes to dental implants. The more supportive your environment, the better your treatment outcome will be.',
          'During our consultations, we always aim to talk openly about your lifestyle, evaluate the condition of your oral health and make a plan that gives your implants the best chance to succeed.'
        ]
      },
      {
        q: 'What happens if the implant fails?',
        a: [
          'Dental implants have been shown to have a very high success rate that is over 95%. It is true that in rare cases, an implant may not heal properly or may fail over time. If that happens, you have no need to worry, it’s not the end of the road for you.',
          'If there is such an occurrence during the early healing phase, we remove it, let the area heal, and then plan a second attempt. Bone grafting may be considered further in such procedures.',
          'The bone tissue in your middle frontal area (where your incisor teeth are located) has softer bone tissue and is not preferred for dental implants. This is why expert implantology surgeon assesses and measures the best angle and location in your mouth for your unique case when performing treatments protocols such as all on 4 or all on 6.',
          'In most cases, the solution is straightforward and successful, especially when you’re treated at a clinic experienced in handling such cases. There are quite a lot of parameters that are handled by expert implantology surgeon that you don’t have to deal with. This is the main reason why we recommend not going forward with cheap clinics and choosing dentists with questionable credentials. Dental implant surgery is still a surgery and requires adequate preparation with proper knowledge and experience.',
          'At our clinic, we also provide follow-up care and clear guidance to help minimize risks and keep your implants healthy for years to come. Plus, your treatment will be subject to complication insurance if performed at our clinic. In addition, we stand by our work — so if something does go wrong, you will not be left on your own.'
        ]
      },
      {
        q: 'What is the difference between All-on-4 and All-on-6 treatments? How do you decide which one is right for me?',
        a: [
          'The main difference is the number of implants used to support a full arch of teeth. All-on-4 uses four implants per jaw, while All-on-6 uses six implants. Both treatments are designed to give you a full set of fixed, natural-looking teeth.',
          'All-on-4 is often ideal if you have lower bone density in the back of your jaw, as the implants are placed at angles to make the most of the available bone without needing bone grafting. All-on-6, on the other hand, offers extra stability and distributes chewing pressure across six points, making it a great option if you have sufficient bone volume or a stronger bite.',
          'To decide which is right for you, we perform a 3D CT scan and a comprehensive oral examination. We evaluate your bone density, facial anatomy, and personal goals to recommend the treatment that ensures the best long-term success and comfort.'
        ]
      }
    ]
  },
  tr: {
    packagesTitle: 'İmplant Destekli Çıt Çıtlı Protez Paketleri & Dinamik Hesaplayıcı',
    packagesSubtitle: 'Orijinal Straumann, Nobel Biocare, Medentika ve Osstem onaylı her şey dahil çıtçıtlı overdenture ve bar tipi protez paketleri.',
    mostPopularBadge: 'En Çok Tercih Edilen',
    durationLabel: 'Tedavi Süresi:',
    includedLabel: 'Paket Kapsamı:',
    pricePerArchLabel: 'Fiyat (Her Şey Dahil):',
    getQuoteBtn: 'Ücretsiz Teklif Alın',
    packages: [
      {
        name: '2 İmplantlı Locator Çıt Çıtlı Protez Paketi',
        brand: 'Medentika (Straumann Group)',
        duration: '3+5 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        popular: true,
        included: [
          'Çene başına 2 adet Orijinal Medentika Titanyum İmplant',
          '2 adet Kendiliğinden hizalanan Locator hassas çıtçıt tutucu',
          'Yüksek dirençli polimer akrilik ve kompozit dişli estetik protez',
          '3D CBCT Tomografi ve dijital kemik yoğunluğu analizi',
          'Steril cerrahi ameliyathane, lokal anestezi ve ilaç seti',
          'Ömür Boyu Uluslararası İmplant Garanti Pasaportu',
          'VIP Mercedes Havalimanı & Klinik transferleri dahil'
        ],
        price: { USD: '$2,450', EUR: '€2,250', GBP: '£1,950' }
      },
      {
        name: '4 İmplantlı Topuz Tutuculu (Ball) Overdenture',
        brand: 'Osstem / Hiossen Premium',
        duration: '3+5 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          'Çene başına 4 adet Yüksek primer stabiliteye sahip Osstem titanyum fikstür',
          '4 adet Hassas Ball/Cap tutucu matriks başlık',
          'Damağı kapatmayan nal şeklinde hafifletilmiş güçlendirilmiş protez',
          'Eksiksiz 3D dijital gülüş taraması ve cerrahi kılavuz planlama',
          'Operasyon sonrası antibiyotik, ağrı kesici ve gargara bakım paketi',
          'Ömür Boyu Uluslararası Üretici Garanti Pasaportu',
          'VIP Özel Transfer & Kişisel Hasta Danışmanı'
        ],
        price: { USD: '$3,150', EUR: '€2,890', GBP: '£2,490' }
      },
      {
        name: 'Straumann Novaloc Hassas Tutuculu Paket',
        brand: 'Straumann Group (İsviçre Üretimi)',
        duration: '3+5 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '4 adet Orijinal Straumann SLA / Roxolid Titanyum İmplant',
          '4 adet Novaloc PEEK karbon kaplı sıfır aşınmalı hassas tutucu',
          'Kobalt-Krom iç döküm iskelet ile kırılmaya karşı güçlendirilmiş gövde',
          '3D CBCT Kraniyofasiyal teşhis ve dijital cerrahi şablon',
          'Lokal anestezi, cerrahi sarf malzemeleri ve medikal set',
          'Ömür Boyu Global Straumann Garanti Pasaportu',
          'VIP Mercedes Transferleri + 4 Yıldızlı Otel Konaklaması'
        ],
        price: { USD: '$4,250', EUR: '€3,890', GBP: '£3,350' }
      },
      {
        name: 'Nobel Biocare Bar Destekli Overdenture',
        brand: 'Nobel Biocare (İsveç Hassasiyeti)',
        duration: '4+5 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
        included: [
          '4 adet NobelParallel CC Saf Titanyum İmplant',
          'Kişiye özel CAD/CAM Frezelenmiş Titanyum Dolder/Hader Barı',
          'Damaksız, sıfır oynama garantili klips kilitli çıkarılabilir protez',
          'Eksiksiz 3D dijital planlama ve bilgisayar destekli implant cerrahisi',
          'Operasyon sonrası eksiksiz medikal bakım ve ilaç seti',
          'Ömür Boyu Global Nobel Biocare Garanti Pasaportu',
          'VIP Havalimanı-Klinik Transferleri & 5 Yıldızlı Otel Konaklaması'
        ],
        price: { USD: '$4,850', EUR: '€4,450', GBP: '£3,850' }
      },
      {
        name: 'All-on-4 Sabit Hibrit İmplant Paketi',
        brand: 'Nobel Biocare / Straumann',
        duration: '3+5 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
        included: [
          '4 adet Premium Titanyum İmplant (2 düz, 2 açılı yerleşim)',
          'Aynı gün vidalanan sabit geçici hibrit köprü (24 saatte sabit diş)',
          'Kalıcı CAD/CAM Monolitik Hibrit Zirkonyum Köprü',
          '3D Tomografi ve bilgisayarlı cerrahi şablon rehberliği',
          'Tam cerrahi set, IV sedasyon seçeneği ve reçete ilaçları',
          'Ömür Boyu Global Üretici Garanti Pasaportu',
          'VIP Havalimanı Transferleri + 5 Yıldızlı Merkezi Otel'
        ],
        price: { USD: '$5,450', EUR: '€4,990', GBP: '£4,290' }
      },
      {
        name: 'All-on-6 Sabit Zirkonyum Köprü Paketi',
        brand: 'Straumann / Nobel Biocare',
        duration: '3+5 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        included: [
          '14 dişlik tam çiğneme arkı için çene başına 6 adet Titanyum İmplant',
          '24 saat içinde vidalanan geçici sabit çiğneme köprüsü',
          'Kalıcı 1200+ MPa Monolitik Alman Zirkonyum Köprü (14 üye)',
          'Yüksek çözünürlüklü 3D CBCT, dijital wax-up ve estetik gülüş tasarımı',
          'Lokal anestezi, steril cerrahi set ve reçete ilaçları',
          'Ömür Boyu Global Garanti Pasaportu',
          'VIP Mercedes Özel Şoför & 5 Yıldızlı Otel Konaklaması'
        ],
        price: { USD: '$6,850', EUR: '€6,290', GBP: '£5,390' }
      }
    ],
    faqTitle: 'Bu Tedavi Hakkında Sıkça Sorulan Sorular',
    faqSubtitle: 'Tedavi süreçleri, konaklama, fiyatlar ve iyileşme süreleri hakkında aklınıza takılan tüm soruların klinik ve şeffaf yanıtları.',
    faqs: [
      {
        q: 'Tedavi planım veya verilen fiyat kliniğe geldiğimde değişir mi?',
        a: [
          'Çok iyi bir soru. Maalesef sağlık turizminde birçok hasta bazı kliniklerde sürpriz ek ücretlerle karşılaşabilmektedir.',
          'Size sunulan tedavi planı ve fiyat, gelmeden önce paylaştığınız fotoğraflar, röntgenler ve beklentileriniz doğrultusunda titizlikle hazırlanır. Kliniğe geldiğinizde hekimlerimiz muayene ile bu detayları teyit eder ve tedaviye başlanır.',
          'Ancak nadiren röntgenlerde görünmeyen kemik grefti veya sinüs lifting gibi ek destek ihtiyaçları tespit edilirse, bu durum size şeffafça açıklanır ve onayınız olmadan hiçbir işlem yapılmaz.',
          'Tedavi planınız ve fiyatınız, muayenede beklenmeyen yeni bir durum çıkmadığı sürece birebir geçerlidir.'
        ]
      },
      {
        q: 'Konaklama konusunda yardımcı oluyor musunuz?',
        a: [
          'Evet, kesinlikle. Yurtdışından ve şehir dışından gelen hastalarımızın konforu için kliniğimize yakın 4 ve 5 yıldızlı anlaşmalı otellerimizde konaklama rezervasyonlarınızı organize ediyoruz.',
          'Amacımız İstanbul seyahatinizi tamamen stressiz hale getirmek ve sadece yeni gülüşünüze odaklanmanızı sağlamaktır.'
        ]
      },
      {
        q: 'Türkiye’ye seyahat etmek güvenli mi?',
        a: [
          'Evet! Türkiye her yıl milyonlarca uluslararası ziyaretçiyi ve sağlık turistini ağırlayan güvenli bir ülkedir.',
          'İstanbul dünya standartlarında modern kliniklere, otellere ve VIP transfer hizmetlerine ev sahipliği yapmaktadır. Kliniğimiz tüm transfer ve rehberlik süreçlerinizde yanınızdadır.'
        ]
      },
      {
        q: 'Kliniğinizde hangi kaplama ve protez materyalleri kullanılmaktadır?',
        a: [
          'Diş hekimliğindeki en ileri teknolojileri ve materyalleri kullanıyoruz.',
          'Veneer kaplamalarda İsviçre menşeli Ivoclar E-Max, implant üstü All-on-4/6 ve sabit köprülerde ise Alman Amman-Girrbach 1200+ MPa monolitik zirkonyum tercih edilmektedir.'
        ]
      },
      {
        q: 'Dişlerim yapılmadan önce şekil ve rengini görebilir miyim?',
        a: [
          'Evet, kesinlikle. 3D Dijital Gülüş Tasarımı ve "Mock-up" uygulaması sayesinde kalıcı dişleriniz üretilmeden önce ağzınızda birebir şeklini, formunu ve rengini canlı olarak deneyimleyebilirsiniz.',
          'Siz onay vermeden kalıcı porselen veya zirkonyum üretimine geçilmez.'
        ]
      },
      {
        q: 'İmplant cerrahisinden sonra çok ağrı çeker miyim?',
        a: [
          'Operasyon lokal anestezi altında tamamen ağrısız gerçekleşir. İlk birkaç gün diş çekimi sonrasına benzer hafif bir hassasiyet oluşabilir ancak reçete edeceğimiz ağrı kesici ve buz kompresi ile bu süreç oldukça rahat geçer.',
          'Dileyen hastalarımız için sedasyon veya genel anestezi seçeneklerimiz de mevcuttur.'
        ]
      },
      {
        q: 'Online ödeme veya kredi kartı kabul ediyor musunuz?',
        a: [
          'Kliniğimiz hastalarımızın ihtiyaçlarına uygun çeşitli ödeme seçenekleri (kredi kartı, banka havalesi, nakit) sunmaktadır.',
          'Detaylı bilgi için hasta koordinatörümüzle iletişime geçebilirsiniz.'
        ]
      },
      {
        q: 'Paketlerinize otel ve transferler dahil mi?',
        a: [
          'Evet, tam çene implant ve çoklu tedavi paketlerimizde VIP Mercedes havaalanı-klinik-otel transferleri ve merkezi otel konaklamaları fiyata dahildir.'
        ]
      },
      {
        q: 'Tedavi ücretlerinde taksit imkanı var mı?',
        a: [
          'Kliniğimizde belirli kartlar ve ödeme yöntemleri için esnek ödeme koşulları sunulmaktadır. Detaylar için danışmanlarımızla görüşebilirsiniz.'
        ]
      },
      {
        q: 'Garanti veya komplikasyon güvencesi sunuyor musunuz?',
        a: [
          'Tüm implant tedavilerimiz ömür boyu uluslararası üretici garanti pasaportu ile teslim edilir ve kliniğimizin komplikasyon güvencesi altındadır.'
        ]
      },
      {
        q: 'Diş tedavilerimi ertelemek güvenli midir?',
        a: [
          'Küçük çürük veya diş eti sorunları başlangıçta ağrısız olabilir ancak zamanla kemik kaybına ve daha karmaşık cerrahi ihtiyaçlara yol açabilir. Erken müdahale her zaman daha konforlu ve ekonomiktir.'
        ]
      },
      {
        q: 'İmplant üzerine E-Max mi yoksa Zirkonyum mu daha iyidir?',
        a: [
          'İmplant üstü restorasyonlarda yüksek çiğneme kuvvetlerine dayanıklılığı nedeniyle monolitik zirkonyum en güvenli tercihtir. E-Max porselenler ise ön bölge tek diş estetiğinde doğal ışık geçirgenliği için önerilir.'
        ]
      },
      {
        q: 'All-on-6 protezim kırılır veya hasar görürse ne yapmalıyım?',
        a: [
          'Herhangi bir hasar durumunda doğrudan kliniğimizle iletişime geçmelisiniz. Uzman hekimlerimiz tarafından hızlı onarım veya yenileme garantimiz kapsamında gerçekleştirilir.'
        ]
      },
      {
        q: 'All-on-6 protezleri plastik veya akrilikten mi yapılır?',
        a: [
          'Kalıcı All-on-6 protezlerimiz monolitik zirkonyum veya porselenden üretilir. Akrilik materyaller sadece ilk gün takılan geçici protezlerde kullanılır.'
        ]
      },
      {
        q: 'Kliniğinizde sedasyon veya genel anestezi mevcut mu?',
        a: [
          'Evet. Diş hekimi korkusu veya cerrahi anksiyetesi olan hastalarımız için uzman anestezi hekimlerimiz gözetiminde bilinçli sedasyon ve genel anestezi uygulanmaktadır.'
        ]
      },
      {
        q: 'Diş kaybında köprü yerine neden implant tercih edilir?',
        a: [
          'Köprü tedavisinde boşluğun yanındaki sağlıklı dişlerin kesilmesi gerekir. İmplant ise komşu sağlıklı dişlere dokunmadan doğrudan çene kemiğine yerleşir ve kemik erimesini önler.'
        ]
      },
      {
        q: 'HIV, Hepatit gibi kronik enfeksiyonu olan hastalara implant yapılabilir mi?',
        a: [
          'Evet. Genel sağlık durumu stabil ve hekim kontrolünde olan hastalarımızda steril ameliyathane koşullarında güvenle implant uygulanmaktadır.'
        ]
      },
      {
        q: 'Diyabet (şeker) hastaları implant yaptırabilir mi?',
        a: [
          'Evet. HbA1c değeri kontrol altında ve stabil olan diyabet hastalarında implantlar yüksek başarı oranıyla güvenle kemikle kaynaşır.'
        ]
      },
      {
        q: 'Sigara içen bireyler implant yaptırabilir mi?',
        a: [
          'Sigara içmek implantın kemikle kaynaşma sürecini yavaşlatabilir ancak tedaviye engel değildir. Cerrahi öncesi ve sonrası sigaranın azaltılması tavsiye edilir.'
        ]
      },
      {
        q: 'İmplant tutmazsa veya başarısız olursa ne olur?',
        a: [
          'Kliniğimizde implant başarı oranı %98’in üzerindedir. Nadir bir kayıp durumunda implant ücretsiz olarak çıkarılır, bölge iyileştikten sonra garanti kapsamında yeniden yerleştirilir.'
        ]
      },
      {
        q: 'All-on-4 ile All-on-6 arasındaki fark nedir, hangisi bana uygundur?',
        a: [
          'All-on-4 arka bölgede kemik erimesi olan vakalarda kemik greftine gerek kalmadan 4 açılı implantla uygulanır. All-on-6 ise kemik hacmi yeterli olan ve daha geniş 14 dişlik çiğneme arkı isteyen hastalar için ekstra stabilite sağlar. 3D Tomografi analizi ile sizin için en uygun seçenek belirlenir.'
        ]
      }
    ]
  }
};

// Populate de, pl, pt, es, ru with localized copies
['de', 'pl', 'pt', 'es', 'ru'].forEach(loc => {
  DICTIONARIES[loc] = {
    ...DICTIONARIES.en,
    packagesTitle: loc === 'de' ? 'Implantatgetragene Deckprothesen Pakete & Währungsrechner'
      : loc === 'pl' ? 'Pakiety Protez na Implantach i Kalkulator Walutowy'
      : loc === 'pt' ? 'Pacotes de Prótese Sobre Implantes e Calculadora de Moeda'
      : loc === 'es' ? 'Paquetes de Sobredentaduras sobre Implantes y Calculadora'
      : 'Пакеты Протезов на Имплантах и Калькулятор Валют',
    packagesSubtitle: loc === 'de' ? 'All-inclusive Snap-On- und Stegprothesen-Lösungen mit Straumann, Nobel Biocare, Medentika und Osstem.'
      : loc === 'pl' ? 'Kompleksowe rozwiązania overdenture na zatrzaskach i belkach ze Straumann, Nobel Biocare, Medentika i Osstem.'
      : loc === 'pt' ? 'Soluções completas de sobredentaduras snap-on e barra com Straumann, Nobel Biocare, Medentika e Osstem.'
      : loc === 'es' ? 'Soluciones integrales de sobredentaduras snap-on y barra con Straumann, Nobel Biocare, Medentika e Osstem.'
      : 'Комплексные съемные и балочные протезы на имплантах Straumann, Nobel Biocare, Medentika и Osstem.',
    getQuoteBtn: loc === 'de' ? 'Kostenloses Angebot anfordern'
      : loc === 'pl' ? 'Otrzymaj Bezpłatną Wycenę'
      : loc === 'pt' ? 'Solicitar Orçamento Gratuito'
      : loc === 'es' ? 'Obtener Presupuesto Gratis'
      : 'Получить Бесплатный Расчет',
    faqTitle: loc === 'de' ? 'Häufig gestellte Fragen zu dieser Behandlung'
      : loc === 'pl' ? 'Najczęściej Zadawane Pytania o Zabiegu'
      : loc === 'pt' ? 'Perguntas Frequentes Sobre Este Tratamento'
      : loc === 'es' ? 'Preguntas Frecuentes Sobre Este Tratamiento'
      : 'Часто Задаваемые Вопросы о Процедуре',
    faqSubtitle: loc === 'de' ? 'Klarheit zu Behandlungsdauer, Kosten, Materialien und Heilung für internationale Patienten.'
      : loc === 'pl' ? 'Przejrzyste odpowiedzi dotyczące czasu trwania leczenia, kosztów, materiałów i rekonwalescencji.'
      : loc === 'pt' ? 'Respostas claras sobre prazos, custos, materiais e recuperação para pacientes internacionais.'
      : loc === 'es' ? 'Respuestas claras sobre tiempos de tratamiento, costes, materiales y recuperación.'
      : 'Подробные ответы о сроках лечения, ценах, материалах и восстановлении для иностранных пациентов.'
  };
});

export default function ImplantSupportedDenturesDetailView() {
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
      <section aria-labelledby="dentures-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="dentures-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="dentures-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="dentures-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`dentures-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`dentures-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Implant Supported Dentures" />
      </div>
    </div>
  );
}
