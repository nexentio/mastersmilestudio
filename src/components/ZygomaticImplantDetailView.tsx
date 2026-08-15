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

export default function ZygomaticImplantDetailView() {
  const locale = useLocale();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: locale === 'tr' ? 'Zigomatik implant nedir ve nasıl uygulanır?' : 'What are Zygomatic Dental Implants and how do they work?',
      a: locale === 'tr'
        ? 'Üst çenesinde ileri derecede kemik erimesi olan ve standart implant tutturulamayan hastalarda, implant vidalarının elmacık kemiğine (zigoma kemiğine) sabitlenmesi tekniğidir. 30 ila 55 mm uzunluğundaki özel titanyum implantlar kullanılır.'
        : 'Zygomatic implants are extended titanium implants (30-55mm) anchored into the strong, dense cheekbone (zygoma) when upper jawbone is severely resorbed, providing a solid anchor for fixed teeth without bone grafting.',
    },
    {
      q: locale === 'tr' ? 'Zigomatik implant kimlere uygulanır?' : 'Who needs Zygomatic Implants?',
      a: locale === 'tr'
        ? 'Uzun süreli dişsizlik, protez kullanımı veya tümör cerrahisi sonucu üst çene kemiği tamamen erimiş ve sinüs lifting / kemik tozu tutma şansı kalmamış hastalar için tek cerrahi kurtarıcı yöntemdir.'
        : 'Patients with severe upper jawbone deficiency who have been told they are not candidates for regular implants and cannot undergo extensive sinus grafting.',
    },
    {
      q: locale === 'tr' ? 'Kemik tozu (greft) gerekmeden sabit diş takılabilir mi?' : 'Can I get fixed teeth without bone grafting?',
      a: locale === 'tr'
        ? 'Evet! Zigoma kemiği vücudun en sert kemiklerinden biridir. Aylar süren kemik tozu iyileşmesi beklenmeden aynı seansta sabit geçici dişler vidalanabilir.'
        : 'Yes! The cheekbone provides exceptionally high stability, eliminating the need for months of bone graft healing and enabling immediate fixed provisional teeth.',
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
                {locale === 'tr' ? 'İLERİ CERRAHİ ÇÖZÜMLER' : 'ADVANCED SURGICAL SOLUTIONS'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                {locale === 'tr' ? 'Zigoma (Elmacık Kemiği) İmplantı İstanbul' : 'Zygomatic Dental Implants in Istanbul, Turkey'}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {locale === 'tr'
                  ? 'Üst çenede aşırı kemik erimesi olan hastalarda elmacık kemiğinden destek alan zigomatik implantlar sayesinde kemik nakli ve greft ameliyatlarına gerek kalmadan sabit dişlere kavuşun.'
                  : 'Zygomatic implants are anchored into the dense zygoma (cheekbone), providing a strong and secure foundation for full-arch fixed prosthetics even in the most severe bone loss cases.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { title: locale === 'tr' ? 'Kemik Greftine Gerek Yok' : 'No Bone Grafting Needed', desc: locale === 'tr' ? 'Aylar süren kemik tozu bekleme sürecini ortadan kaldırır.' : 'Avoids complex bone augmentation and extensive sinus lift procedures.' },
                  { title: locale === 'tr' ? 'Elmacık Kemiği Güvencesi' : 'Cheekbone Anchoring', desc: locale === 'tr' ? 'Yaşlanmayla erimeyen en sert kemik dokusuna tutunur.' : 'Anchors into dense zygomatic bone that never resorbs over time.' },
                  { title: locale === 'tr' ? 'Uzman Çene Cerrahisi' : 'Specialist Maxillofacial Surgery', desc: locale === 'tr' ? 'Deneyimli kurucu cerrahlarımız tarafından 3D kılavuzlu planlanır.' : 'Performed directly by our specialist maxillofacial implant surgeons.' },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#ec4899', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
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
                label={locale === 'tr' ? 'Zigoma İmplant Cerrahisi (3D Tomografi & Yerleşim)' : 'Zygomatic Implant 3D Anatomy & Placement Video'}
                type="video"
                color="#ec4899"
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
              {locale === 'tr' ? 'VAKALAR' : 'COMPLEX CASES'}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.4rem' }}>
              {locale === 'tr' ? 'Zigoma İmplant Dönüşümleri' : 'Zygomatic Implant Results'}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <MediaPlaceholder num={2} label="Severe Upper Jaw Bone Loss Zygoma Case #1" type="image" color="#ec4899" aspectRatio="1/1" />
            <MediaPlaceholder num={3} label="Quad Zygoma Full Arch Rehabilitation #2" type="image" color="#3b82f6" aspectRatio="1/1" />
            <MediaPlaceholder num={4} label="Fixed Teeth Transformation via Zygoma #3" type="image" color="#10b981" aspectRatio="1/1" />
          </div>
        </div>
      </section>

      {/* 3. REUSABLE: SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 4. REUSABLE: CLINIC TOUR */}
      <TreatmentClinicTourSection placeholderNum="ZYG-TOUR" />

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
        recoveryTime="3 to 4 months"
        priceEstimate="Custom surgical quote based on 3D CBCT"
      />

      {/* 11. REUSABLE: INTERACTIVE LEAD & QUOTE FORM (sectformtedavi) */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Sinus Lift / Other Surgery" />

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
            {locale === 'tr' ? 'Kemik Erimesi Olan Çeneniz İçin Çözüm Var' : 'You Are Not Out of Options – Get a Zygomatic Consultation'}
          </h2>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
            {locale === 'tr'
              ? 'Daha önce "implant yapılamaz" dendiyse 3D tomografinizi uzman çene cerrahlarımıza gönderin.'
              : 'If you were told regular implants are not possible, send your 3D CBCT scan to our maxillofacial team for a free expert second opinion.'}
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
