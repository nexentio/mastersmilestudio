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

export default function ImplantSupportedDenturesDetailView() {
  const locale = useLocale();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: locale === 'tr' ? 'İmplant destekli çıtçıtlı protez (Overdenture) nedir?' : 'What are Implant-Supported Overdentures?',
      a: locale === 'tr'
        ? 'Çene kemiğine yerleştirilen 2 veya 4 adet implant üzerine çıtçıtlı (locator) tutucular takılarak protezin kilitlendiği sistemdir. Klasik damak gibi ağızda asla oynamaz, vurma yapmaz ve yemek yerken çıkmaz.'
        : 'Implant-supported overdentures are removable prostheses that snap securely onto 2 to 4 implants using precision attachments (locators or ball anchors), eliminating slippage and loose dentures.',
    },
    {
      q: locale === 'tr' ? 'Klasik damak protezinden farkı nedir?' : 'How do overdentures compare to traditional removable dentures?',
      a: locale === 'tr'
        ? 'Damak yapıştırıcısına gerek kalmaz, çiğneme kuvveti 3-4 kat artar, damak kubbesi açık kaldığı için tat alma duyusu etkilenmez ve hasta güvenle gülebilir.'
        : 'They eliminate the need for messy denture adhesives, provide 3-4x stronger biting force, enhance taste sensation, and will never slip out when talking or laughing.',
    },
    {
      q: locale === 'tr' ? 'Çıtçıtlı protezler geceleri çıkarılmalı mıdır?' : 'Do I need to take off snap-on dentures at night?',
      a: locale === 'tr'
        ? 'Çıtçıtlı protezler kolayca takılıp çıkarılabilir. Ağız hijyeni ve diş eti dinlenmesi için geceleri çıkarılıp temizlenmesi önerilir.'
        : 'Yes, overdentures can be snapped on and off easily. Cleaning them thoroughly and removing them before sleep is recommended for optimal gum tissue health.',
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
                {locale === 'tr' ? 'KAYMAYAN ÇITÇITLI SİSTEM' : 'SNAP-ON OVERDENTURES'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                {locale === 'tr' ? 'İmplant Destekli Protez (Çıt Çıtlı Damak) İstanbul' : 'Implant Supported Dentures (Overdentures) in Istanbul'}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {locale === 'tr'
                  ? 'Gevşek, oynayan ve yemek yerken çıkan klasik damak protezlerine son verin. Çıtçıtlı kilit mekanizmasıyla implantlara sımsıkı tutunan konforlu protezler.'
                  : 'Say goodbye to loose, slipping dentures. Implant-supported overdentures lock securely onto dental implants, providing superior retention and comfort.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { title: locale === 'tr' ? 'Asla Oynamaz ve Çıkmaz' : 'Zero Slipping or Wobbling', desc: locale === 'tr' ? 'Çıtçıt kilitleri sayesinde yemek yerken ve konuşurken yerinden oynamaz.' : 'Locks securely in place without messy adhesive creams.' },
                  { title: locale === 'tr' ? 'Damak Kubbesi Serbesttir' : 'Palate-Free Comfort', desc: locale === 'tr' ? 'Üst damak kapalı olmadığı için yiyeceklerin tadını tam alırsınız.' : 'Minimal palate coverage preserves natural taste sensation and speech.' },
                  { title: locale === 'tr' ? 'Ekonomik İmplant Çözümü' : 'Cost-Effective Stability', desc: locale === 'tr' ? 'Sadece 2-4 implantla tüm çeneye maksimum tutuculuk sağlar.' : 'Provides solid full-arch retention using only 2 to 4 implants.' },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#eab308', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
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
                src="https://sohodent.com/doc/data1/implant-supported-dentures-copy.webp"
                alt="Implant Supported Dentures Istanbul"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <TreatmentDivider />

      {/* 2. REUSABLE: SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 3. REUSABLE: CLINIC TOUR */}
      <TreatmentClinicTourSection placeholderNum="DEN-TOUR" />

      {/* 4. REUSABLE: DOCTORS SECTION */}
      <TreatmentDoctorsSection />

      {/* 5. BEFORE & AFTER TRANSFORMATIONS GALLERY */}
      <TreatmentBeforeAfterSliderSection />

      {/* 6. REVIEWS & TRUSTPILOT / GOOGLE 5-STAR */}
      <TreatmentReviewsSection />

      {/* 7. REUSABLE: PARALLAX BANNER */}
      <TreatmentParallaxBanner />

      {/* 8. REUSABLE: PATIENT VIDEO REELS */}
      <TreatmentPatientReelsSection />

      {/* 9. REUSABLE: SIMPLE JOURNEY ACCORDION */}
      <TreatmentJourneySimpleSection
        stayDuration="5-7 Working Days"
        visitCount="2 Visits"
        recoveryTime="2-3 months"
        priceEstimate="Starting from €2,200 / £1,900 per arch"
      />

      {/* 10. REUSABLE: INTERACTIVE LEAD & QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Dentures" />

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
            {locale === 'tr' ? 'Çıt Çıtlı Protez Uygunluğunuzu Öğrenin' : 'Find Out If Overdentures Are Right for You'}
          </h2>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
            {locale === 'tr'
              ? 'Mevcut damak protezinizden memnun değilseniz, WhatsApp ile bize ulaşarak implant destekli seçeneklerimizi öğrenin.'
              : 'If you are tired of loose dentures, message our dental team on WhatsApp to explore your snap-on implant options.'}
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
