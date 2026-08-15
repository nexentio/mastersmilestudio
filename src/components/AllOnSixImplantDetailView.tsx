'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getWhatsAppLink } from '@/config/site';
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

interface MediaPlaceholderProps {
  num: number | string;
  label: string;
  type: 'video' | 'image';
  color: string;
  aspectRatio?: string;
  height?: string;
}

function MediaPlaceholder({
  num,
  label,
  type,
  color,
  aspectRatio = '16/9',
  height,
}: MediaPlaceholderProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: height || 'auto',
        aspectRatio: height ? undefined : aspectRatio,
        backgroundColor: '#18181b',
        borderRadius: '16px',
        border: `2px dashed ${color}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '1.5rem',
        overflow: 'hidden',
        boxShadow: `0 8px 30px ${color}20`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: color,
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '0.85rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '9999px',
          boxShadow: `0 4px 14px ${color}60`,
          zIndex: 5,
        }}
      >
        <span>#{num}</span>
      </div>

      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: `${color}25`,
          border: `1.5px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
        }}
      >
        {type === 'video' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
      </div>

      <div style={{ textAlign: 'center', maxWidth: '85%' }}>
        <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', display: 'block', marginBottom: '0.2rem' }}>
          {label}
        </span>
        <span style={{ color: color, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
          {type.toUpperCase()} PLACEHOLDER
        </span>
      </div>
    </div>
  );
}

export default function AllOnSixImplantDetailView() {
  const locale = useLocale();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');

  const allOn6Packages = [
    {
      name: 'ALL-ON-6 – NUCLEOSS',
      brand: 'NucleOSS (Turkish Quality)',
      duration: '3+7 Working Days (2 Visits)',
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
      color: '#3b82f6',
      placeholderNum: 1,
    },
    {
      name: 'ALL-ON-6 – DXL GERMAN',
      brand: 'DXL (German Engineering)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x DXL German Titanium Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Permanent Zirconia Teeth',
        '3D CBCT Surgical Planning',
        'VIP Transfers + Hotel Stay',
        'Full Laboratory & Milling Work',
      ],
      price: { USD: '$7,500', EUR: '€6,500', GBP: '£5,600' },
      color: '#10b981',
      placeholderNum: 2,
    },
    {
      name: 'ALL-ON-6 – STRAUMANN',
      brand: 'Straumann (Swiss Premium)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x Straumann Swiss Titanium Implants',
        '12-14x Fixed High-Grade Temporary Teeth',
        '12-14x Final Monolithic Zirconia Teeth',
        'Lifetime International Guarantee',
        'Luxury 5-Star Hotel Stay Included',
        'VIP Chauffeur & Personal Host',
      ],
      price: { USD: '$11,600', EUR: '€10,000', GBP: '£8,600' },
      color: '#D58936',
      popular: true,
      placeholderNum: 3,
    },
    {
      name: 'ALL-ON-6 – MEGAGEN',
      brand: 'Megagen AnyRidge (Korean Technology)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x Megagen AnyRidge Dental Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Zirconia Teeth',
        'Surgical planning (with CBCT)',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
      ],
      price: { USD: '$8,000', EUR: '€7,000', GBP: '£6,000' },
      color: '#8b5cf6',
      placeholderNum: 4,
    },
    {
      name: 'ALL-ON-6 – NEODENT',
      brand: 'Neodent (Straumann Group)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x Neodent Implants per Arch',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Zirconia Teeth',
        'Surgical planning (with CBCT)',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
      ],
      price: { USD: '$8,000', EUR: '€7,000', GBP: '£6,000' },
      color: '#06b6d4',
      placeholderNum: 5,
    },
    {
      name: 'ALL-ON-6 – HIOSSEN',
      brand: 'Hiossen (American Brand)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x Hiossen American Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Zirconia Teeth',
        'Surgical planning (with CBCT)',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
      ],
      price: { USD: '$7,700', EUR: '€6,750', GBP: '£5,780' },
      color: '#ec4899',
      placeholderNum: 6,
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
  ];

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. INTRO */}
      <section style={{ padding: '4.5rem 1.5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#D58936', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.6rem' }}>
                {locale === 'tr' ? 'MAKSİMUM ÇİĞNEME GÜCÜ' : 'MAXIMUM STABILITY & BITE POWER'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                {locale === 'tr' ? 'All-on-6 Diş İmplantı Tedavisi İstanbul' : 'All-on-6 Dental Implants in Istanbul, Turkey'}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {locale === 'tr'
                  ? 'All-on-6 sistemi, her çeneye yerleştirilen 6 güçlü titanyum implant üzerine tam ark zirkonyum köprü sabitlenerek en yüksek çiğneme performansını ve ömür boyu dayanıklılığı sunar.'
                  : 'The All-on-6 system anchors a full-arch permanent zirconia bridge across 6 implants per jaw, providing exceptional stability and superior long-term comfort.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { title: locale === 'tr' ? '6 İmplant ile Eşit Yük Dağılımı' : 'Even Load Distribution', desc: locale === 'tr' ? 'Çiğneme baskısı 6 desteğe yayılarak kemik erimesi önlenir.' : 'Chewing forces are evenly spread across 6 solid implant anchors.' },
                  { title: locale === 'tr' ? '14 Dişe Kadar Tam Restorasyon' : 'Up to 14 Teeth per Arch', desc: locale === 'tr' ? 'Arka azı dişlerini de içeren eksiksiz diş dizilimi sağlar.' : 'Allows extended full dental arches including posterior chewing molars.' },
                  { title: locale === 'tr' ? 'Ömür Boyu Dayanıklılık' : 'Lifetime Durability', desc: locale === 'tr' ? 'Yüksek stabilite sayesinde en uzun ömürlü tam ağız çözümüdür.' : 'Maximum structural longevity with monolithic multilayer zirconia.' },
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

            <div>
              <MediaPlaceholder
                num={7}
                label={locale === 'tr' ? 'All-on-6 İmplant Yerleşim Anatomisi (3D Video)' : 'All-on-6 Clinical Video & Biomechanical Analysis'}
                type="video"
                color="#D58936"
                aspectRatio="16/10"
              />
            </div>
          </div>
        </div>
      </section>

      <TreatmentDivider />

      {/* 2. PACKAGES */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#D58936', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
              {locale === 'tr' ? 'HER ŞEY DAHİL PAKETLER' : 'ALL-ON-6 PACKAGES'}
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              {locale === 'tr' ? 'All-on-6 İmplant Fiyatları ve Paketleri' : 'All-on-6 Dental Implant Packages & Pricing'}
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
                  boxShadow: pkg.popular ? '0 12px 35px rgba(213, 137, 54, 0.18)' : '0 4px 20px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                    {pkg.name}
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'block', marginBottom: '1rem' }}>
                    {pkg.brand}
                  </span>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <MediaPlaceholder num={pkg.placeholderNum} label={`${pkg.name} Specimen`} type="image" color={pkg.color} aspectRatio="16/9" />
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

      {/* 3. REUSABLE: SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 4. REUSABLE: CLINIC TOUR */}
      <TreatmentClinicTourSection placeholderNum="A6-TOUR" />

      {/* 5. REUSABLE: DOCTORS SECTION */}
      <TreatmentDoctorsSection />

      {/* 6. BEFORE & AFTER TRANSFORMATIONS GALLERY (sectba) */}
      <TreatmentBeforeAfterSliderSection />

      {/* 7. REVIEWS & TRUSTPILOT / GOOGLE 5-STAR (sectyorum) */}
      <TreatmentReviewsSection />

      {/* 8. REUSABLE: PARALLAX BANNER */}
      <TreatmentParallaxBanner />

      {/* 9. REUSABLE: PATIENT VIDEO REELS */}
      <TreatmentPatientReelsSection />

      {/* 10. REUSABLE: SIMPLE JOURNEY ACCORDION */}
      <TreatmentJourneySimpleSection
        stayDuration="3+7 Working Days (2 Visits)"
        visitCount="2 Visits (3 Days + 7 Days)"
        recoveryTime="3 months"
        priceEstimate="Starting from €5,500 / £4,700 per arch"
      />

      {/* 11. REUSABLE: INTERACTIVE LEAD & QUOTE FORM (sectformtedavi) */}
      <TreatmentInteractiveQuoteForm defaultTreatment="All-on-4 / All-on-6" />

      {/* 12. REUSABLE: RIGHT TREATMENT FINDER */}
      <TreatmentRightTreatmentAccordion />

      {/* 13. FAQ SECTION */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>
              {locale === 'tr' ? 'All-on-6 Hakkında Sıkça Sorulanlar' : 'Frequently Asked Questions About All-on-6'}
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, fIdx) => (
              <div key={fIdx} style={{ backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === fIdx ? null : fIdx)}
                  style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontWeight: 700, color: '#0f172a' }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: '#D58936', fontSize: '1.35rem' }}>{activeFaq === fIdx ? '−' : '+'}</span>
                </button>
                {activeFaq === fIdx && (
                  <div style={{ padding: '0 1.5rem 1.25rem', color: '#475569', fontSize: '0.94rem', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CTA */}
      <section style={{ padding: '4.5rem 1.5rem', backgroundColor: '#09090b', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>
            {locale === 'tr' ? 'All-on-6 İçin Ücretsiz Cerrahi Değerlendirme Alın' : 'Get a Free Surgical Evaluation for All-on-6 Implants'}
          </h2>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
            {locale === 'tr'
              ? 'Röntgeninizi WhatsApp ile iletin, cerrahlarımız kemik durumunuzu incelesin.'
              : 'Send your X-ray via WhatsApp to receive a free surgical consultation within 2 hours.'}
          </p>
          <a
            href={getWhatsAppLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', padding: '0.95rem 2rem', backgroundColor: '#25D366', color: '#ffffff', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none' }}
          >
            WhatsApp Consultation →
          </a>
        </div>
      </section>
    </div>
  );
}
