'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
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

interface MediaPlaceholderProps {
  num: number | string;
  label: string;
  type: 'video' | 'image' | 'carousel' | 'slider';
  color: string;
  aspectRatio?: string;
  height?: string;
  style?: React.CSSProperties;
}

function MediaPlaceholder({
  num,
  label,
  type,
  color,
  aspectRatio = '16/9',
  height,
  style,
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
        ...style,
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
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          letterSpacing: '0.02em',
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

export default function AllOnFourImplantDetailView() {
  const t = useTranslations('common');
  const locale = useLocale();

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');

  const allOn4Packages = [
    {
      name: 'ALL-ON-4 – NUCLEOSS',
      brand: 'NucleOSS (Turkish Premium Quality)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x NucleOSS Dental Implants per Arch',
        '12x Fixed Temporary Teeth (Same Visit)',
        '12x Final Permanent Zirconia Teeth',
        '3D CBCT Surgical Planning Guide',
        'Local Anesthesia & Post-op Medication Pack',
        'Airport-Hotel VIP Transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work Included',
      ],
      price: { USD: '$5,700', EUR: '€4,900', GBP: '£4,200' },
      color: '#3b82f6',
      placeholderNum: 1,
    },
    {
      name: 'ALL-ON-4 – DXL GERMAN',
      brand: 'DXL (German Engineering)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x DXL German Titanium Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Zirconia Teeth',
        '3D CBCT Surgical Planning',
        'Local Anesthesia & Follow-up Care',
        'Airport-Hotel VIP Transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work Included',
      ],
      price: { USD: '$6,400', EUR: '€5,500', GBP: '£4,750' },
      color: '#10b981',
      placeholderNum: 2,
    },
    {
      name: 'ALL-ON-4 – STRAUMANN',
      brand: 'Straumann (Swiss Gold Standard)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x Straumann Swiss Dental Implants',
        '12x Fixed High-Grade Temporary Teeth',
        '12x Final Monolithic Multilayer Zirconia Teeth',
        'Lifetime International Guarantee Passport',
        'VIP Airport-Clinic Transfers',
        'Luxury 5-Star Hotel Stay Included',
        'Dedicated Personal Patient Host',
      ],
      price: { USD: '$9,300', EUR: '€8,000', GBP: '£6,900' },
      color: '#D58936',
      popular: true,
      placeholderNum: 3,
    },
    {
      name: 'ALL-ON-4 – MEGAGEN',
      brand: 'Megagen (AnyRidge Korean Technology)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x Megagen AnyRidge Dental Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Zirconia Teeth',
        'Surgical planning (with CBCT)',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work Included',
      ],
      price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      color: '#8b5cf6',
      placeholderNum: 4,
    },
    {
      name: 'ALL-ON-4 – NEODENT',
      brand: 'Neodent (by Straumann Group)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x Neodent Implants (Straumann Family)',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Zirconia Teeth',
        'Surgical planning (with CBCT)',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work Included',
      ],
      price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      color: '#06b6d4',
      placeholderNum: 5,
    },
    {
      name: 'ALL-ON-4 – HIOSSEN',
      brand: 'Hiossen (American Premium Quality)',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x Hiossen American Dental Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Zirconia Teeth',
        'Surgical planning (with CBCT)',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work Included',
      ],
      price: { USD: '$6,600', EUR: '€5,750', GBP: '£4,900' },
      color: '#ec4899',
      placeholderNum: 6,
    },
  ];

  const faqs = [
    {
      q: locale === 'tr' ? 'All-on-4 implant nedir ve kimler için uygundur?' : 'What is the All-on-4 dental implant technique and who is it for?',
      a: locale === 'tr'
        ? 'All-on-4, tam dişsizlik yaşayan veya dişlerinin tamamının çekilmesi gereken hastalara, çene kemiğine yerleştirilen özel açılı 4 implant üzerine tam çene sabit protez vidalanması tekniğidir. Özellikle kemik erimesi olan ve ileri kemik grefti yaptırmak istemeyen hastalar için en hızlı ve konforlu çözümdür.'
        : 'All-on-4 is a full-arch restoration procedure where a full set of fixed permanent teeth is secured onto just four strategically placed titanium implants per jaw. It is specially designed for patients with moderate bone loss who want to avoid extensive bone grafting.',
    },
    {
      q: locale === 'tr' ? 'All-on-4 tedavisinde geçici diş ne zaman takılır?' : 'When are temporary teeth fitted in All-on-4 treatment?',
      a: locale === 'tr'
        ? 'İmplant cerrahisi ile aynı gün veya en geç 24 saat içinde geçici sabit dişleriniz takılır. Tedavi süresince asla dişsiz kalmazsınız.'
        : 'Fixed temporary teeth are securely placed on the same day or within 24 hours of surgery. You will never spend a single day without teeth.',
    },
    {
      q: locale === 'tr' ? 'İstanbul’da All-on-4 için kaç ziyaret gerekir?' : 'How many visits to Istanbul are required for All-on-4?',
      a: locale === 'tr'
        ? 'Toplam 2 ziyaret gerekir: 1. Ziyaret (3 gün): İmplantların yerleşimi ve geçici sabit dişlerin takılması. 3 aylık kemikleşme süresi sonrası 2. Ziyaret (7 gün): Kalıcı estetik zirkonyum köprünün takılması.'
        : 'A total of 2 visits are required: Visit 1 (3 days): Implant surgery and temporary fixed teeth fitting. Osseointegration healing period (3 months). Visit 2 (7 days): Permanent aesthetic monolithic zirconia teeth design and fitting.',
    },
    {
      q: locale === 'tr' ? 'All-on-4 paketime otel ve transferler dahil mi?' : 'Are hotel accommodation and VIP transfers included in the package?',
      a: locale === 'tr'
        ? 'Evet! Paketlerimize 4/5 yıldızlı anlaşmalı otel konaklaması, havalimanı ve klinik arasındaki özel VIP şoför transferleri, tüm röntgenler ve cerrahi ücretler dahildir.'
        : 'Yes! All packages include 4/5-star hotel accommodation with breakfast, private VIP airport & clinic transfers, 3D CBCT imaging, and post-op care medications.',
    },
  ];

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. INTRO SECTION */}
      <section style={{ padding: '4.5rem 1.5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#D58936', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.6rem' }}>
                {locale === 'tr' ? 'HIZLI VE KALICI SABİT DİŞ' : 'FULL ARCH ALL-ON-4'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                {locale === 'tr' ? 'All-on-4 Diş İmplantı Tedavisi İstanbul' : 'All-on-4 Dental Implants in Istanbul, Turkey'}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {locale === 'tr'
                  ? 'All-on-4 implant tekniği; arka bölgelere açılı yerleştirilen 2 implant ve ön bölgedeki 2 düz implant sayesinde, ileri kemik erimesi olan hastalarda bile kemik tozu gerekmeden aynı gün sabit diş konforu sunar.'
                  : 'The All-on-4 technique uses two straight anterior implants and two angled posterior implants to maximize bone contact, providing immediate fixed teeth even in cases of reduced jawbone volume without bone grafting.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { title: locale === 'tr' ? 'Kemik Grefti İhtiyacını Azaltır' : 'Avoids Bone Grafting', desc: locale === 'tr' ? 'Açılı implantlar sayesinde sinüs boşluklarına girmeden mevcut kemikten maksimum yararlanılır.' : 'Angled posterior implants utilize available dense bone, bypassing sinus cavities.' },
                  { title: locale === 'tr' ? 'Aynı Gün Sabit Diş' : 'Same-Day Fixed Teeth', desc: locale === 'tr' ? 'Ameliyat günü geçici sabit protez vidalanarak hemen normal hayata dönülür.' : 'Fixed provisional bridge attached on surgery day for immediate confidence.' },
                  { title: locale === 'tr' ? 'Ekonomik & Hızlı' : 'Cost-Effective & Fast', desc: locale === 'tr' ? 'Daha az implant sayısı ve daha kısa iyileşme süresiyle bütçe dostu tam ark çözümüdür.' : 'Fewer implants and shorter treatment timeline make it highly cost-effective.' },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#10b981', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
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
                label={locale === 'tr' ? 'All-on-4 Tedavi Aşamaları (3D Cerrahi Animasyon)' : 'All-on-4 Procedure Step-by-Step (3D Animation)'}
                type="video"
                color="#10b981"
                aspectRatio="16/10"
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
              {locale === 'tr' ? 'HER ŞEY DAHİL FİYATLAR' : 'ALL-ON-4 PACKAGES'}
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              {locale === 'tr' ? 'All-on-4 İmplant Tedavi Paketleri' : 'All-on-4 Dental Implant Packages & Pricing'}
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
            {allOn4Packages.map((pkg, pIdx) => (
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

      {/* 3. REUSABLE: SERVICES INCLUDED (sectinfo1) */}
      <TreatmentServicesIncludedSection />

      {/* 4. REUSABLE: CLINIC TOUR (sectyt1) */}
      <TreatmentClinicTourSection placeholderNum="A4-TOUR" />

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
        priceEstimate="Starting from €4,900 / £4,200 per arch"
      />

      {/* 11. REUSABLE: INTERACTIVE LEAD & QUOTE FORM (sectformtedavi) */}
      <TreatmentInteractiveQuoteForm defaultTreatment="All-on-4 / All-on-6" />

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
              {locale === 'tr' ? 'All-on-4 Hakkında Merak Edilenler' : 'Frequently Asked Questions About All-on-4'}
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
            {locale === 'tr' ? 'All-on-4 İçin Ücretsiz Cerrahi Değerlendirme Alın' : 'Get a Free Surgical Evaluation for All-on-4 Implants'}
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
