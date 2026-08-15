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
    {
      q: locale === 'tr' ? 'Zigomatik implant cerrahisi genel anestezi altında mı yapılır?' : 'Is Zygomatic implant surgery performed under general anesthesia?',
      a: locale === 'tr'
        ? 'Kliniğimizde zigomatik implant cerrahileri, hasta konforu ve maksimum güvenlik için tam donanımlı steril cerrahi ünitemizde sedasyon veya genel anestezi altında uzman çene cerrahlarımızca gerçekleştirilir.'
        : 'Zygomatic implant placements are performed under conscious IV sedation or general anesthesia in our surgical suites, ensuring maximum safety, comfort, and zero stress.',
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

            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <img
                src="https://sohodent.com/doc/data1/zygomatic-implant-copy.webp"
                alt="Zygomatic Dental Implants Istanbul"
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
      <TreatmentClinicTourSection placeholderNum="ZYG-TOUR" />

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
        recoveryTime="3-4 months"
        priceEstimate="Custom quote based on 3D CT Tomography"
      />

      {/* 10. REUSABLE: INTERACTIVE LEAD & QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Zygomatic Implants" />

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
            {locale === 'tr' ? 'Zigomatik İmplant İçin Tomografinizi Gönderin' : 'Send Your 3D CT Scan for Zygomatic Evaluation'}
          </h2>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
            {locale === 'tr'
              ? 'WhatsApp üzerinden 3D tomografinizi veya panoramik röntgeninizi ileterek çene cerrahımızdan doğrudan değerlendirme alın.'
              : 'Send your 3D CBCT scan via WhatsApp for a direct surgical evaluation from our maxillofacial team.'}
          </p>
          <a
            href={getWhatsAppLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', padding: '0.95rem 2rem', backgroundColor: '#25D366', color: '#ffffff', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none' }}
          >
            WhatsApp Maxillofacial Consultation →
          </a>
        </div>
      </section>
    </div>
  );
}
