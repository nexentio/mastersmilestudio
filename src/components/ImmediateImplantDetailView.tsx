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

export default function ImmediateImplantDetailView() {
  const locale = useLocale();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: locale === 'tr' ? 'Aynı gün implant (Immediate Implant) nedir?' : 'What is Immediate Dental Implant Placement?',
      a: locale === 'tr'
        ? 'Diş çekimi ile aynı seansta, çekim boşluğuna doğrudan implant yerleştirilmesi ve geçici kuronun takılması işlemidir. Aylar süren çekim boşluğu iyileşme süresini ortadan kaldırır.'
        : 'Immediate implant placement is the surgical technique where a dental implant is placed into the fresh extraction socket immediately after tooth extraction during the same single appointment.',
    },
    {
      q: locale === 'tr' ? 'Aynı gün implant herkese uygulanabilir mi?' : 'Is everyone suitable for same-day immediate implants?',
      a: locale === 'tr'
        ? 'Çekim yapılacak bölgede aktif akut enfeksiyon yoksa ve çene kemiğinin primer stabilitesi (tutuculuğu) yeterliyse bu yöntem güvenle uygulanır.'
        : 'Patients with good jawbone density, healthy gums, and no active severe bone infection at the extraction site are ideal candidates.',
    },
    {
      q: locale === 'tr' ? 'Avantajları nelerdir?' : 'What are the main advantages of immediate implants?',
      a: locale === 'tr'
        ? 'Cerrahi seans sayısını azaltır, diş eti formunu ve çene kemiğini korur, tedavi süresini 3-4 ay kısaltır ve hastanın asla dişsiz kalmamasını sağlar.'
        : 'It reduces overall treatment time by 3-4 months, preserves natural gum contours and alveolar bone, and requires only one surgical appointment.',
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
                {locale === 'tr' ? 'TEK SEANSTA ÇEKİM VE İMPLANT' : 'SAME-DAY IMPLANT RESTORATION'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                {locale === 'tr' ? 'Aynı Gün İmplant Tedavisi İstanbul' : 'Immediate Implant Treatment in Istanbul, Turkey'}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {locale === 'tr'
                  ? 'Zaman kaybetmeden, diş çekimi yapıldığı an aynı yuvaya titanyum implant yerleştirilir ve geçici dişiniz takılarak kliniğimizden yeni gülüşünüzle ayrılırsınız.'
                  : 'Immediate Implant Treatment allows for the placement of dental implants on the same day as tooth extraction, providing patients with immediate function and aesthetic comfort.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { title: locale === 'tr' ? 'Aylarca Beklemeye Son' : 'Zero Waiting Period', desc: locale === 'tr' ? 'Çekim sonrası kemiğin iyileşmesi için 3 ay beklemek gerekmez.' : 'No need to wait 3 months for the extraction socket to heal before placing the implant.' },
                  { title: locale === 'tr' ? 'Diş Eti Estetiğini Korur' : 'Preserves Natural Gum Profile', desc: locale === 'tr' ? 'Doğal diş eti papilleri ve kemik hacmi erimeden korunur.' : 'Maintains natural gum contour and prevents bone resorption at the extraction site.' },
                  { title: locale === 'tr' ? 'Tek Seans Cerrahi' : 'Single Surgical Step', desc: locale === 'tr' ? 'Tek anestezi altında hem çekim hem implant tamamlanır.' : 'Tooth extraction and implant insertion are combined under a single comfortable anesthesia session.' },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#f59e0b', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
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
                label={locale === 'tr' ? 'Aynı Gün İmplant Uygulaması (3D Animasyon)' : 'Immediate Implant Surgery Workflow (3D Video)'}
                type="video"
                color="#f59e0b"
                aspectRatio="16/10"
              />
            </div>
          </div>
        </div>
      </section>

      <TreatmentDivider />

      {/* 2. MEDIA & CASES */}
      <section style={{ padding: '4.5rem 1.5rem', backgroundColor: '#09090b', color: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#D58936', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {locale === 'tr' ? 'VAKALAR' : 'CLINICAL CASES'}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.4rem' }}>
              {locale === 'tr' ? 'Aynı Gün İmplant Dönüşümleri' : 'Immediate Implant Transformations'}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <MediaPlaceholder num={2} label="Single Front Tooth Immediate Implant Case #1" type="image" color="#f59e0b" aspectRatio="1/1" />
            <MediaPlaceholder num={3} label="Immediate Loading Molar Replacement Case #2" type="image" color="#3b82f6" aspectRatio="1/1" />
            <MediaPlaceholder num={4} label="Immediate Aesthetic Smile Result Case #3" type="image" color="#10b981" aspectRatio="1/1" />
          </div>
        </div>
      </section>

      {/* 3. REUSABLE: SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 4. REUSABLE: CLINIC TOUR */}
      <TreatmentClinicTourSection placeholderNum="IMM-TOUR" />

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
        stayDuration="3-5 Working Days"
        visitCount="1 Visit for Immediate Crown + 1 Follow-up"
        recoveryTime="Immediate Function"
        priceEstimate="Starting from €450 / £380 per single tooth"
      />

      {/* 11. REUSABLE: INTERACTIVE LEAD & QUOTE FORM (sectformtedavi) */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Dental Implants" />

      {/* 12. REUSABLE: RIGHT TREATMENT FINDER */}
      <TreatmentRightTreatmentAccordion />

      {/* 13. FAQS */}
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

      {/* 14. CTA */}
      <section style={{ padding: '4.5rem 1.5rem', backgroundColor: '#09090b', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>
            {locale === 'tr' ? 'Aynı Gün İmplant Uygunluğunuzu Öğrenin' : 'Check If You Are Eligible for Same-Day Implants'}
          </h2>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
            {locale === 'tr'
              ? 'Röntgeninizi WhatsApp ile iletin, cerrahlarımız kemik yapınızı incelesin.'
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
