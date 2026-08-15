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

function MediaPlaceholder({ num, label, type, color, aspectRatio = '16/9', height }: MediaPlaceholderProps) {
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

export default function ZirconiumImplantDetailView() {
  const locale = useLocale();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: locale === 'tr' ? 'Zirkonyum implant nedir?' : 'What are 100% Metal-Free Zirconium Dental Implants?',
      a: locale === 'tr'
        ? 'Zirkonyum implantlar, geleneksel titanyum implantlara alternatif olarak geliştirilen, biyouyumlu beyaz seramikten üretilen metalsiz implant türüdür. Doğal diş kökü renginde olup diş etinde gri yansıma yapmaz.'
        : 'Zirconium (ceramic) implants are 100% metal-free, white dental implants made from biocompatible zirconia ceramic, offering superior gum aesthetics without gray metal shadowing.',
    },
    {
      q: locale === 'tr' ? 'Zirkonyum implantın titanyumdan farkı nedir?' : 'How do Zirconium implants compare to Titanium implants?',
      a: locale === 'tr'
        ? 'Metalsiz yapısı sayesinde metal alerjisi olan hastalar için idealdir. Beyaz rengiyle ince diş etlerinde mükemmel estetik sağlar ve plak tutulumu titanyuma göre daha düşüktür.'
        : 'They are hypoallergenic (zero metal), aesthetically invisible under thin gingival tissue, and show lower bacterial plaque adhesion for optimal gum health.',
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
                {locale === 'tr' ? '%100 METAL-FREE ESTETİK' : '100% METAL-FREE CERAMIC'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                {locale === 'tr' ? 'Zirkonyum (Seramik) Diş İmplantı İstanbul' : 'Zirconium Ceramic Dental Implants in Istanbul'}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {locale === 'tr'
                  ? 'Biyouyumlu beyaz zirkonyum seramikten üretilen metalsiz implantlar, diş etinde gri yansıma yapmayan en doğal ve doku dostu gülüş çözümüdür.'
                  : 'Crafted from biocompatible white zirconia ceramic, these metal-free implants eliminate dark shadows beneath the gums for the most natural, holistic smile.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { title: locale === 'tr' ? '%100 Metalsiz ve Alerjisiz' : '100% Metal-Free & Hypoallergenic', desc: locale === 'tr' ? 'Metal hassasiyeti olanlar için en güvenli seçimdir.' : 'Ideal for patients with metal allergies or chemical sensitivities.' },
                  { title: locale === 'tr' ? 'Mükemmel Diş Eti Uyumu' : 'Superior Gingival Aesthetics', desc: locale === 'tr' ? 'Beyaz rengi sayesinde ince diş etlerinde bile grileşme yapmaz.' : 'White color ensures zero dark shadows along the gumline.' },
                  { title: locale === 'tr' ? 'Düşük Plak Tutulumu' : 'Low Bacterial Plaque Adhesion', desc: locale === 'tr' ? 'Diş eti sağlığını ve kemik entegrasyonunu destekler.' : 'Naturally resistant to plaque and peri-implantitis inflammation.' },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#06b6d4', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
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
                num={1}
                label={locale === 'tr' ? 'Zirkonyum İmplant Nasıl Uygulanır? (3D Video)' : 'Zirconium Ceramic Implant Technology (3D Explainer)'}
                type="video"
                color="#06b6d4"
                aspectRatio="16/10"
              />
            </div>
          </div>
        </div>
      </section>

      <TreatmentDivider />

      {/* 2. REUSABLE: SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 3. REUSABLE: CLINIC TOUR */}
      <TreatmentClinicTourSection placeholderNum="ZIRC-TOUR" />

      {/* 4. REUSABLE: DOCTORS SECTION */}
      <TreatmentDoctorsSection />

      {/* 5. BEFORE & AFTER TRANSFORMATIONS GALLERY (sectba) */}
      <TreatmentBeforeAfterSliderSection />

      {/* 6. REVIEWS & TRUSTPILOT / GOOGLE 5-STAR (sectyorum) */}
      <TreatmentReviewsSection />

      {/* 7. REUSABLE: PARALLAX BANNER */}
      <TreatmentParallaxBanner />

      {/* 8. REUSABLE: PATIENT VIDEO REELS */}
      <TreatmentPatientReelsSection />

      {/* 9. REUSABLE: SIMPLE JOURNEY ACCORDION */}
      <TreatmentJourneySimpleSection
        stayDuration="3-7 Working Days (2 Visits)"
        visitCount="2 Visits (3 Days + 7 Days)"
        recoveryTime="3 months"
        priceEstimate="Starting from €650 / £550 per ceramic implant"
      />

      {/* 10. REUSABLE: INTERACTIVE LEAD & QUOTE FORM (sectformtedavi) */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Zirconia Crowns / Veneers" />

      {/* 11. REUSABLE: RIGHT TREATMENT FINDER */}
      <TreatmentRightTreatmentAccordion />

      {/* 12. FAQS */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>
              {locale === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, fIdx) => (
              <div key={fIdx} style={{ backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === fIdx ? null : fIdx)}
                  style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontWeight: 700, color: '#0f172a' }}
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

      {/* 13. CTA */}
      <section style={{ padding: '4.5rem 1.5rem', backgroundColor: '#09090b', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>
            {locale === 'tr' ? 'Zirkonyum İmplant Fiyat Teklifi Alın' : 'Get a Free Quote for Zirconium Ceramic Implants'}
          </h2>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
            {locale === 'tr'
              ? 'Metalsiz estetik implant çözümleri hakkında detaylı bilgi ve fiyat teklifi için bize ulaşın.'
              : 'Contact our specialists for personalized information and all-inclusive packages for ceramic implants.'}
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
