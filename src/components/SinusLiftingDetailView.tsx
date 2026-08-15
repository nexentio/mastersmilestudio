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

export default function SinusLiftingDetailView() {
  const locale = useLocale();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: locale === 'tr' ? 'Sinüs lifting (Sinüs Yükseltme) ameliyatı nedir?' : 'What is Sinus Lifting & Bone Augmentation?',
      a: locale === 'tr'
        ? 'Üst çene arka azı dişler bölgesinde sarkan sinüs tabanının özel cerrahi aletlerle yukarı kaldırılması ve oluşan boşluğa kemik tozu (greft) eklenerek implant için gerekli kemik yüksekliğinin oluşturulması işlemidir.'
        : 'Sinus lifting is a surgical procedure that gently lifts the maxillary sinus membrane and places natural bone graft material beneath it, creating sufficient bone height to securely anchor dental implants in the upper jaw.',
    },
    {
      q: locale === 'tr' ? 'Sinüs lifting ile aynı seansta implant takılabilir mi?' : 'Can implants be placed during the same sinus lift surgery?',
      a: locale === 'tr'
        ? 'Eğer hastada en az 4-5 mm mevcut kemik yüksekliği varsa kapalı sinüs lifting yöntemiyle implant aynı seansta yerleştirilebilir. Kemik çok ince ise açık sinüs lifting yapılarak 4-6 ay kemikleşme beklenir.'
        : 'If there is at least 4-5mm of existing bone, implants can often be placed simultaneously (internal sinus lift). If bone is very thin (<3mm), bone graft is placed first and allowed to mature before implant placement.',
    },
    {
      q: locale === 'tr' ? 'Sinüs lifting ameliyatı sonrası iyileşme ne kadar sürer?' : 'How long does recovery take after sinus lift surgery?',
      a: locale === 'tr'
        ? 'İlk birkaç gün hafif ödem görülebilir ve reçete edilen ilaçlarla kolayca kontrol altına alınır. Kemik tozunun canlı kemiğe dönüşmesi ortalama 4 ila 6 ay sürer.'
        : 'Mild swelling is normal for the first 2-3 days and managed with prescribed medications. The bone graft fully integrates into solid living bone over 4 to 6 months.',
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
                {locale === 'tr' ? 'KEMİK OLUŞTURMA & CERRAHİ' : 'BONE AUGMENTATION SURGERY'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                {locale === 'tr' ? 'Sinüs Lifting & Kemik Grefti İstanbul' : 'Sinus Lifting & Bone Grafting in Istanbul, Turkey'}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {locale === 'tr'
                  ? 'Üst çene arka bölgede kemik erimesi veya sinüs sarkması nedeniyle implant yapılamayan durumlarda, sinüs lifting ile güçlü ve kalıcı kemik temeli oluşturuyoruz.'
                  : 'Sinus lifting creates adequate vertical bone volume in the upper posterior jaw, preparing a solid bone foundation for lifetime dental implants.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { title: locale === 'tr' ? 'Açık & Kapalı Sinüs Cerrahisi' : 'Open & Closed Sinus Techniques', desc: locale === 'tr' ? 'Kemik durumuna göre en minimal invaziv cerrahi yaklaşım seçilir.' : 'Customized minimally invasive sinus elevation tailored to bone height.' },
                  { title: locale === 'tr' ? 'Birinci Sınıf Kemik Tozu' : 'Premium Bone Grafting Materials', desc: locale === 'tr' ? 'Biyouyumlu sertifikalı greft materyalleri kullanılır.' : 'Certified bio-compatible bone granules ensuring dense bone regeneration.' },
                  { title: locale === 'tr' ? 'Ağrısız & Konforlu' : 'Painless Local Anesthesia', desc: locale === 'tr' ? 'İleri anestezi protokolleriyle tamamen konforlu bir cerrahi süreç sunulur.' : 'Performed comfortably under advanced local anesthesia or light sedation.' },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#f97316', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
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
                src="https://sohodent.com/doc/data1/sinus-lifting-copy.webp"
                alt="Sinus Lifting Istanbul"
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
      <TreatmentClinicTourSection placeholderNum="SIN-TOUR" />

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
        stayDuration="3-5 Working Days"
        visitCount="1-2 Visits"
        recoveryTime="4-6 months bone integration"
        priceEstimate="Starting from €250 / £210 per sinus area"
      />

      {/* 10. REUSABLE: INTERACTIVE LEAD & QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Dental Implants" />

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
            {locale === 'tr' ? 'Kemik Hacmi ve Sinüs Değerlendirmesi Alın' : 'Get a Free Bone Volume Evaluation'}
          </h2>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
            {locale === 'tr'
              ? 'Röntgeninizi WhatsApp ile ileterek çene cerrahlarımızdan sinüs lifting gerekliliği hakkında anında bilgi alın.'
              : 'Send your panoramic X-ray via WhatsApp to find out if sinus lifting is required for your implants.'}
          </p>
          <a
            href={getWhatsAppLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', padding: '0.95rem 2rem', backgroundColor: '#25D366', color: '#ffffff', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none' }}
          >
            WhatsApp Sinus Consultation →
          </a>
        </div>
      </section>
    </div>
  );
}
