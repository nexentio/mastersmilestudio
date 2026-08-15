'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
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

export default function AllOnSixImplantDetailView() {
  const locale = useLocale();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');

  const allOn6Packages = [
    {
      name: 'ALL-ON-6 – NUCLEOSS',
      brand: 'NucleOSS (Turkish Quality)',
      duration: '3+7 Working Days (2 Visits)',
      img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
      included: [
        '6x NucleOSS Implants per Arch',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Permanent Zirconia Teeth',
        '3D CBCT Surgical Guide Planning',
        'Local Anesthesia & Post-op Meds',
        'VIP Airport & Hotel Transfers',
        'Hotel Stay with Bed & Breakfast',
      ],
      price: { USD: '$6,400', EUR: '€5,500', GBP: '£4,700' },
    },
    {
      name: 'ALL-ON-6 – DXL GERMAN',
      brand: 'DXL (German Engineering)',
      duration: '3+7 Working Days (2 Visits)',
      img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
      included: [
        '6x DXL German Titanium Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Permanent Zirconia Teeth',
        '3D CBCT Surgical Planning',
        'VIP Transfers + Hotel Stay',
        'Full Laboratory & Milling Work',
      ],
      price: { USD: '$7,500', EUR: '€6,500', GBP: '£5,600' },
    },
    {
      name: 'ALL-ON-6 – STRAUMANN',
      brand: 'Straumann (Swiss Premium)',
      duration: '3+7 Working Days (2 Visits)',
      img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
      included: [
        '6x Straumann Swiss Titanium Implants',
        '12-14x Fixed High-Grade Temporary Teeth',
        '12-14x Final Monolithic Zirconia Teeth',
        'Lifetime International Guarantee',
        'Luxury 5-Star Hotel Stay Included',
        'VIP Chauffeur & Personal Host',
      ],
      price: { USD: '$11,600', EUR: '€10,000', GBP: '£8,600' },
      popular: true,
    },
    {
      name: 'ALL-ON-6 – MEGAGEN',
      brand: 'Megagen AnyRidge (Korean Technology)',
      duration: '3+7 Working Days (2 Visits)',
      img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
      included: [
        '6x Megagen AnyRidge Dental Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Zirconia Teeth',
        'Surgical planning (with CBCT)',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
      ],
      price: { USD: '$8,000', EUR: '€7,000', GBP: '£6,000' },
    },
    {
      name: 'ALL-ON-6 – NEODENT',
      brand: 'Neodent (Straumann Group)',
      duration: '3+7 Working Days (2 Visits)',
      img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
      included: [
        '6x Neodent Implants per Arch',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Zirconia Teeth',
        'Surgical planning (with CBCT)',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
      ],
      price: { USD: '$8,000', EUR: '€7,000', GBP: '£6,000' },
    },
    {
      name: 'ALL-ON-6 – HIOSSEN',
      brand: 'Hiossen (American Brand)',
      duration: '3+7 Working Days (2 Visits)',
      img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
      included: [
        '6x Hiossen American Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Zirconia Teeth',
        'Surgical planning (with CBCT)',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
      ],
      price: { USD: '$7,700', EUR: '€6,750', GBP: '£5,780' },
    },
  ];

  const faqs = [
    {
      q: locale === 'tr' ? 'All-on-6 ile All-on-4 arasındaki fark nedir?' : 'What is the main difference between All-on-6 and All-on-4?',
      a: locale === 'tr'
        ? 'All-on-6 tedavisinde çene kemiğine 6 adet implant yerleştirilir. Ekstra 2 implant, çiğneme kuvvetini daha geniş bir alana yayarak arka dişlerde maksimum stabilite ve 14 dişe kadar daha uzun zirkonyum köprü desteği sağlar.'
        : 'All-on-6 uses 6 implants instead of 4, providing higher bite force distribution and allowing a 14-tooth dental arch for enhanced chewing performance and maximum structural longevity.',
    },
    {
      q: locale === 'tr' ? 'All-on-6 için kemik hacmi yeterli olmalı mı?' : 'Does All-on-6 require more jawbone density than All-on-4?',
      a: locale === 'tr'
        ? 'Evet, 6 implantın yerleştirilebilmesi için arka azı bölgelerinde yeterli kemik hacmi bulunmalı veya sinüs lifting / kemik grefti takviyesi uygulanmalıdır.'
        : 'Yes, All-on-6 requires sufficient bone volume in the posterior molar regions, or minor bone augmentation / sinus lifting to support the additional posterior implants.',
    },
    {
      q: locale === 'tr' ? 'All-on-6 tedavisinde ne tür kalıcı dişler kullanılır?' : 'What type of permanent teeth are used in All-on-6?',
      a: locale === 'tr'
        ? 'Kliniğimizde en yüksek kalitede, bilgisayarlı CAD/CAM teknolojisiyle özel olarak işlenmiş yekpare monolitik zirkonyum porselen köprüler kullanılmaktadır.'
        : 'We custom-mill high-translucency monolithic zirconia full-arch bridges using cutting-edge CAD/CAM technology for maximum lifelike beauty and extreme durability.',
    },
    {
      q: locale === 'tr' ? 'All-on-6 tedavisi acı verir mi?' : 'Is the All-on-6 implant surgical procedure painful?',
      a: locale === 'tr'
        ? 'Hayır, işlem ileri lokal anestezi veya talep doğrultusunda sedasyon altında yapılır. Cerrahi sırasında hiçbir acı veya ağrı hissedilmez.'
        : 'No, the entire procedure is performed under advanced local anesthesia or conscious sedation, ensuring a completely painless and relaxing treatment experience.',
    },
  ];

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. INTRO */}
      <section style={{ padding: '4.5rem 1.5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#D58936', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.6rem' }}>
                {locale === 'tr' ? 'MAKSİMUM STABİLİTE VE ÇİĞNEME GÜCÜ' : 'STRONGEST FULL ARCH SOLUTION'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                {locale === 'tr' ? 'All-on-6 Diş İmplantı Tedavisi İstanbul' : 'All-on-6 Dental Implants in Istanbul, Turkey'}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {locale === 'tr'
                  ? 'All-on-6 implant tekniği; tek bir çeneye yerleştirilen 6 güçlü titanyum implant üzerine 14 dişe kadar sabit zirkonyum köprü taşır. Doğal dişlerinizden ayırt edilemeyecek güç ve estetik sunar.'
                  : 'The All-on-6 technique anchors a complete 14-tooth permanent zirconia bridge onto six strategically placed implants, delivering the highest stability, bite force, and lifelike aesthetics.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { title: locale === 'tr' ? '6 İmplantlı Maksimum Tutuculuk' : '6 Implants per Arch', desc: locale === 'tr' ? 'Çiğneme baskısını çene boyunca eşit şekilde dağıtır.' : 'Spreads occlusal bite forces evenly across the entire dental arch.' },
                  { title: locale === 'tr' ? '14 Diş Sabit Zirkonyum Köprü' : 'Full 14-Tooth Restoration', desc: locale === 'tr' ? 'Arka azı dişlerine kadar tam fonksiyonel çiğneme alanı sağlar.' : 'Supports full-size posterior molar crowns for unrestricted eating.' },
                  { title: locale === 'tr' ? 'Ömür Boyu Garanti Pasaportu' : 'Lifetime Guarantee', desc: locale === 'tr' ? 'İsviçre ve Alman menşeili implantlarda uluslararası ömür boyu garanti.' : 'Global warranty certificate valid with Straumann & German implant systems.' },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#D58936', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
                      ✓
                    </div>
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.94rem' }}>{item.title}: </strong>
                      <span style={{ color: '#64748b', fontSize: '0.88rem' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <img
                src="https://sohodent.com/doc/data1/all-on-six-copy.webp"
                alt="All-on-6 Dental Implants Istanbul"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <TreatmentDivider />

      {/* 2. PRICING PACKAGES */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#D58936', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
              {locale === 'tr' ? 'ŞEFFAF HER ŞEY DAHİL PAKETLER' : 'ALL-ON-6 PACKAGES'}
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              {locale === 'tr' ? 'All-on-6 İmplant Tedavi Paketleri' : 'All-on-6 Dental Implant Packages & Pricing'}
            </h2>

            <div style={{ display: 'inline-flex', padding: '0.35rem', backgroundColor: '#e2e8f0', borderRadius: '9999px', gap: '0.35rem' }}>
              {(['USD', 'EUR', 'GBP'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  style={{
                    border: 'none',
                    backgroundColor: currency === c ? '#0f172a' : 'transparent',
                    color: currency === c ? '#ffffff' : '#64748b',
                    padding: '0.45rem 1.25rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {c === 'USD' ? '$ USD' : c === 'EUR' ? '€ EUR' : '£ GBP'}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {allOn6Packages.map((pkg, pIdx) => (
              <div
                key={pIdx}
                style={{
                  border: pkg.popular ? '2px solid #D58936' : '1px solid #e2e8f0',
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: pkg.popular ? '0 12px 35px rgba(213, 137, 54, 0.18)' : '0 4px 20px rgba(0, 0, 0, 0.04)',
                }}
              >
                {pkg.popular && (
                  <span style={{ position: 'absolute', top: '-13px', right: '20px', backgroundColor: '#D58936', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.85rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {locale === 'tr' ? 'EN ÇOK TERCİH EDİLEN' : 'MOST POPULAR'}
                  </span>
                )}

                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                    {pkg.name}
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'block', marginBottom: '1rem' }}>
                    {pkg.brand}
                  </span>

                  <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.25rem', height: '180px' }}>
                    <img
                      src={pkg.img}
                      alt={pkg.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.65rem 0.85rem', backgroundColor: '#f8fafc', borderRadius: '10px', fontSize: '0.84rem', color: '#334155', marginBottom: '1rem', fontWeight: 600 }}>
                    <span>{locale === 'tr' ? 'Tedavi Süresi:' : 'Treatment Duration:'}</span>
                    <span>{pkg.duration}</span>
                  </div>

                  <strong style={{ fontSize: '0.88rem', color: '#0f172a', display: 'block', marginBottom: '0.65rem' }}>
                    {locale === 'tr' ? 'Neler Dahil?' : "What's Included?"}
                  </strong>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {pkg.included.map((inc, iIdx) => (
                      <li key={iIdx} style={{ fontSize: '0.86rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase' }}>
                      {locale === 'tr' ? 'Çene Başına Fiyat' : 'Price per arch'}
                    </span>
                    <strong style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0f172a' }}>
                      {pkg.price[currency]}
                    </strong>
                  </div>

                  <Link
                    href="/contact"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      backgroundColor: pkg.popular ? '#D58936' : '#0f172a',
                      color: '#ffffff',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{locale === 'tr' ? 'Ücretsiz Fiyat Teklifi Al' : 'Get Free Personalized Quote'}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REUSABLE: SERVICES INCLUDED (sectinfo1) */}
      <TreatmentServicesIncludedSection />

      {/* 4. REUSABLE: CLINIC TOUR (sectyt1) */}
      <TreatmentClinicTourSection placeholderNum="A6-TOUR" />

      {/* 5. REUSABLE: DOCTORS SECTION (sectdoc) */}
      <TreatmentDoctorsSection />

      {/* 6. BEFORE & AFTER TRANSFORMATIONS GALLERY (sectba) */}
      <TreatmentBeforeAfterSliderSection />

      {/* 7. REVIEWS & TRUSTPILOT / GOOGLE 5-STAR (sectyorum) */}
      <TreatmentReviewsSection />

      {/* 8. REUSABLE: PARALLAX BANNER (tedavisectparallax) */}
      <TreatmentParallaxBanner />

      {/* 9. REUSABLE: PATIENT VIDEO REELS (sectinsta) */}
      <TreatmentPatientReelsSection />

      {/* 10. REUSABLE: SIMPLE JOURNEY ACCORDION (sectacc) */}
      <TreatmentJourneySimpleSection
        stayDuration="3+7 Working Days (2 Visits)"
        visitCount="2 Visits (3 Days + 7 Days)"
        recoveryTime="3 months"
        priceEstimate="Starting from €5,500 / £4,700 per arch"
      />

      {/* 11. REUSABLE: INTERACTIVE LEAD & QUOTE FORM (sectformtedavi) */}
      <TreatmentInteractiveQuoteForm defaultTreatment="All-on-6" />

      {/* 12. REUSABLE: RIGHT TREATMENT FINDER (sect77) */}
      <TreatmentRightTreatmentAccordion />

      {/* 13. FAQ SECTION */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#D58936', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
              {locale === 'tr' ? 'SIKÇA SORULAN SORULAR' : 'FREQUENTLY ASKED QUESTIONS'}
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#0f172a' }}>
              {locale === 'tr' ? 'All-on-6 Hakkında Merak Edilenler' : 'Frequently Asked Questions About All-on-6'}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div key={fIdx} style={{ backgroundColor: '#ffffff', borderRadius: '14px', border: isOpen ? '1.5px solid #D58936' : '1px solid #e2e8f0', overflow: 'hidden' }}>
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem 1.5rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0f172a',
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: '#D58936', fontSize: '1.35rem', fontWeight: 800, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s ease' }}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#475569', fontSize: '0.94rem', lineHeight: 1.7, borderTop: '1px solid #f8fafc' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. WHATSAPP & QUOTE CTA BANNER */}
      <section style={{ padding: '4.5rem 1.5rem', backgroundColor: '#09090b', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            {locale === 'tr' ? 'All-on-6 İçin Ücretsiz Cerrahi Planlama Alın' : 'Get a Free Surgical Evaluation for All-on-6 Implants'}
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {locale === 'tr'
              ? 'Röntgeninizi WhatsApp ile iletin, uzman cerrahlarımız çene kemiğinizi değerlendirerek size özel tedavi planınızı hazırlasın.'
              : 'Send your panoramic X-ray via WhatsApp to receive a direct evaluation from our implant surgeons with full package pricing.'}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: '#25D366',
                color: '#ffffff',
                padding: '0.95rem 2rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.35)',
              }}
            >
              <span>WhatsApp 7/24 Direct Consultation</span>
              <span>→</span>
            </a>

            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: '#D58936',
                color: '#ffffff',
                padding: '0.95rem 2rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(213, 137, 54, 0.35)',
              }}
            >
              <span>{locale === 'tr' ? 'Online Fiyat Formu' : 'Get Online Free Quote Form'}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
