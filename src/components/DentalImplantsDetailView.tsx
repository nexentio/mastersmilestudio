'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
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
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentPackagesSlider from '@/components/treatment-sections/TreatmentPackagesSlider';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentFAQSection from '@/components/treatment-sections/TreatmentFAQSection';
import styles from './DentalImplantsDetailView.module.css';

export default function DentalImplantsDetailView() {
  const locale = useLocale();
  const t = useTranslations('services');

  return (
    <div className="treatment-page-wrapper">
      {/* 1. INTRO & WHAT ARE DENTAL IMPLANTS */}
      <section aria-labelledby="intro-implants-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="intro-implants-heading" className={styles.mainHeading}>
            {t('dentalImplantsIntro.title')}
          </h2>

          <h3 className={styles.subHeading}>
            {t('dentalImplantsIntro.whatIsTitle')}
          </h3>

          <p className={styles.textP}>
            {t('dentalImplantsIntro.whatIsP1')}
          </p>

          <ul className={styles.bulletList}>
            <li>
              <strong>{t('dentalImplantsIntro.part1Label')}</strong> – {t('dentalImplantsIntro.part1Desc')}
            </li>
            <li>
              <strong>{t('dentalImplantsIntro.part2Label')}</strong> – {t('dentalImplantsIntro.part2Desc')}
            </li>
            <li>
              <strong>{t('dentalImplantsIntro.part3Label')}</strong> – {t('dentalImplantsIntro.part3Desc')}
            </li>
          </ul>

          <p className={styles.textP}>
            {t('dentalImplantsIntro.healingP')}
          </p>

          <p className={styles.textP}>
            {t('dentalImplantsIntro.solutionP')}
          </p>

          {/* Fullwidth Horizontal Video Embed (YouTube R081L98DAls) */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/R081L98DAls?t=21"
              title="Dental Implants in Istanbul Procedure Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className={styles.dividerWrap}>
            <TreatmentDivider />
          </div>

          {/* TRIPLE VIDEO SHORTS SLIDER */}
          <TreatmentTripleVideoSlider />

          {/* DENTAL IMPLANTS COST HEADING */}
          <h2 id="cost-heading-center" className={styles.costHeading}>
            <span>{t('dentalImplantsIntro.costHeading')}</span>
          </h2>

          {/* WHY CHOOSE DENTAL IMPLANTS IN ISTANBUL */}
          <h2 id="why-choose-implants-heading" className={styles.sectionTitle}>
            <span>{locale === 'tr' ? 'Neden İstanbul’da Diş İmplantı Yaptırmalısınız?' : 'Why Choose Dental Implants in Istanbul?'}</span>
          </h2>

          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                İstanbul, yüksek kaliteli ve uygun fiyatlı diş tedavisi arayan uluslararası hastalar için dünyanın en popüler destinasyonlarından biri haline gelmiştir. Hastaların diş implantları için <strong>Master Smile Studio Türkiye</strong>&apos;yi tercih etmelerinin başlıca nedenleri:
              </>
            ) : (
              <>
                Istanbul has become one of the top destinations worldwide for patients looking for high-quality, affordable dental care. Here is why so many international patients choose <strong>Master Smile Studio Turkey</strong> for their dental implants:
              </>
            )}
          </p>

          <ul className="treatment-bullet-list">
            <li>
              <strong>{locale === 'tr' ? 'Uygun Fiyatlar:' : 'Affordable Costs:'}</strong>{' '}
              {locale === 'tr'
                ? 'İngiltere, Avrupa veya ABD’ye kıyasla %70’e varan tasarruf sağlarken birinci sınıf kalite korunur.'
                : 'Save up to 70% compared to prices in the UK, Europe, or the US, without compromising on quality.'}
            </li>
            <li>
              <strong>{locale === 'tr' ? 'Deneyimli ve Uzman Cerrahlar:' : 'Experienced Specialists:'}</strong>{' '}
              {locale === 'tr'
                ? 'Cerrahlarımız binlerce başarılı implant ameliyatı gerçekleştirmiş olup uluslararası sertifikalara sahiptir.'
                : 'Our dentists have placed thousands of implants with high success rates and extensive training.'}
            </li>
            <li>
              <strong>{locale === 'tr' ? 'Premium İmplant Markaları:' : 'High-Quality Brands:'}</strong>{' '}
              {locale === 'tr'
                ? 'Yalnızca Straumann, DXL ve Nucleoss gibi ömür boyu garantili lider markaları kullanıyoruz.'
                : 'We use globally recognized implant brands such as Straumann, DXL, and NucleOSS that come with international certifications and lifetime warranties.'}
            </li>
            <li>
              <strong>{locale === 'tr' ? 'Gelişmiş Teknoloji:' : 'Modern Clinics:'}</strong>{' '}
              {locale === 'tr'
                ? '3D CBCT tomografi ve dijital tarayıcılar ile milimetrik cerrahi planlama yapıyoruz.'
                : 'From 3D CT scans to digital guided surgery, we use cutting-edge technology for precise and comfortable treatment.'}
            </li>
            <li>
              <strong>{locale === 'tr' ? 'Her Şey Dahil Paketler:' : 'All-Inclusive Packages:'}</strong>{' '}
              {locale === 'tr'
                ? 'Otel konaklaması, VIP transferler ve kişisel hasta danışmanı ile sorunsuz bir deneyim.'
                : 'Many clinics, including ours, offer packages that include 5-star accommodation, VIP airport transfers, and translation services to make your visit effortless.'}
            </li>
          </ul>

          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                Diş implantı için İstanbul’u seçerek sadece sağlıklı ve özgüvenli bir gülümsemeye kavuşmakla kalmaz, aynı zamanda tarihi ve büyüleyici bir şehirde unutulmaz bir tatil deneyimi yaşarsınız.
              </>
            ) : (
              <>
                Choosing Istanbul for your dental implants means you can restore your smile with confidence while exploring one of the most vibrant and historical cities in the world.
              </>
            )}
          </p>

          <TreatmentDivider />

          {/* ADVANTAGES OF DENTAL IMPLANTS */}
          <h3 className="treatment-heading-h3-alt mt-0">
            <strong>{locale === 'tr' ? 'Diş İmplantının Avantajları Nelerdir?' : 'What Are the Advantages of Dental Implants?'}</strong>
          </h3>

          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                Diş implantları hem sağlık hem de estetik açısından sayısız fayda sunar:
              </>
            ) : (
              <>
                Dental implants offer many benefits for both your oral health and daily life:
              </>
            )}
          </p>

          <TreatmentDivider />

          {/* WHO IS A SUITABLE CANDIDATE */}
          <h3 className="treatment-heading-h3-alt mt-0">
            <strong>{locale === 'tr' ? 'Kimler Diş İmplantı İçin Uygundur?' : 'Who Is a Suitable Candidate for Dental Implants?'}</strong>
          </h3>

          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                Genel sağlık durumu iyi olan çoğu yetişkin diş implantı yaptırabilir. İdeal bir adayda aranan özellikler:
              </>
            ) : (
              <>
                Most adults in good general health are candidates for dental implants. You may be an ideal candidate if you:
              </>
            )}
          </p>

          <ul className="treatment-bullet-list">
            <li>
              {locale === 'tr'
                ? 'Bir veya birden fazla eksik dişi olan veya çekilmesi gereken dişi bulunanlar'
                : 'Have one or more missing teeth'}
            </li>
            <li>
              {locale === 'tr'
                ? 'İmplantı destekleyecek yeterli çene kemiğine sahip olanlar (veya kemik grefti için uygun olanlar)'
                : 'Have sufficient jawbone density (or are suitable for bone grafting / sinus lifting)'}
            </li>
            <li>
              {locale === 'tr'
                ? 'Sağlıklı diş etlerine sahip ve ağız hijyenine özen gösterenler'
                : 'Have healthy gums and practice good oral hygiene'}
            </li>
            <li>
              {locale === 'tr'
                ? 'Hareketli protezler yerine kalıcı ve sabit bir çözüm isteyenler'
                : 'Do not want removable dentures and prefer a fixed, permanent option'}
            </li>
            <li>
              {locale === 'tr'
                ? 'Kemik gelişimini tamamlamış bireyler (genellikle 18 yaş ve üzeri)'
                : 'Have completed jaw growth (typically over 18 years old)'}
            </li>
          </ul>

          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                Kemik kaybınız olsa bile, <strong>sinüs lifting</strong> veya <strong>kemik tozu (greftleme)</strong> gibi ileri cerrahi tekniklerle implant tedavisine hazır hale gelebilirsiniz. Uzman cerrahlarımızla{' '}
                <Link href="/contact" className="treatment-link-gold" aria-label={locale === 'tr' ? 'Ücretsiz değerlendirme için iletişim sayfasına gidin' : 'Contact team for free personalized evaluation'}>
                  iletişime geçerek
                </Link>{' '}
                uygunluğunuzu ücretsiz olarak öğrenebilirsiniz.
              </>
            ) : (
              <>
                Even if you have experienced bone loss, procedures like <strong>bone grafting</strong> or <strong>sinus lifting</strong> can help build a strong foundation for implants. You can{' '}
                <Link href="/contact" className="treatment-link-gold" aria-label="Contact Master Smile Studio team for personalized evaluation">
                  contact our team
                </Link>{' '}
                to get a personalized evaluation.
              </>
            )}
          </p>

          <TreatmentDivider />

          {/* DENTAL IMPLANT TYPES SECTION */}
          <h2 id="types-implants-heading" className="treatment-heading-title mt-10">
            <strong>{locale === 'tr' ? 'İstanbul’da Uygulanan Diş İmplantı Türleri' : 'Types of Dental Implants Available in Istanbul'}</strong>
          </h2>

          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                <strong>Master Smile Studio</strong>&apos;da her hastanın ihtiyacına, kemik yapısına ve estetik beklentisine uygun farklı implant seçenekleri sunuyoruz:
              </>
            ) : (
              <>
                At <strong>Master Smile Studio</strong>, we offer different types of dental implant solutions depending on your needs, bone structure, and smile goals:
              </>
            )}
          </p>

          {/* 1. Single Tooth */}
          <h3 className="treatment-heading-h3">
            <strong>{locale === 'tr' ? '1. Tek Diş İmplantı' : '1. Single Tooth Dental Implant'}</strong>
          </h3>
          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                Tek bir eksik dişin yerine komşu dişlere dokunmadan (kesilmeden) uygulanan en ideal çözümdür. Doğal diş gibi görünür ve hissedilir.
              </>
            ) : (
              <>
                Ideal if you are missing just one tooth. An implant and crown replace the missing tooth without affecting the neighboring healthy teeth.
              </>
            )}
          </p>
          <p className="treatment-text-italic">
            {locale === 'tr' ? (
              <>
                Detaylı bilgi için{' '}
                <Link href="/treatments/dental-implants" className="treatment-link-gold" aria-label="Tek Diş İmplant sayfasını inceleyin">
                  Tek Diş İmplant sayfamızı
                </Link>{' '}
                inceleyin.
              </>
            ) : (
              <>
                Learn more about{' '}
                <Link href="/treatments/dental-implants" className="treatment-link-gold" aria-label="Learn more about single tooth implants">
                  Single Tooth Implants in Istanbul
                </Link>.
              </>
            )}
          </p>

          {/* 2. Multiple Teeth */}
          <h3 className="treatment-heading-h3">
            <strong>{locale === 'tr' ? '2. Çoklu Diş İmplantı (İmplant Destekli Köprü)' : '2. Multiple Teeth Implants (Implant-Supported Bridge)'}</strong>
          </h3>
          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                Yan yana birkaç diş eksik olduğunda, her diş için ayrı implant yapmak yerine 2 veya 3 implant üzerine bir köprü yerleştirilir. Bu hem maliyeti düşürür hem de mükemmel stabilite sağlar.
              </>
            ) : (
              <>
                If you have several missing teeth in a row, an implant-supported bridge uses two or more implants to support multiple connected crowns.
              </>
            )}
          </p>

          {/* 3. Full Mouth */}
          <h3 className="treatment-heading-h3">
            <strong>{locale === 'tr' ? '3. Tam Ağız Diş İmplantı (Full Mouth Implants)' : '3. Full Mouth Dental Implants'}</strong>
          </h3>
          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                Tüm dişlerini kaybetmiş veya mevcut dişlerinin çekilmesi gereken hastalar için komple bir çene restorasyonudur. Genellikle çene başına 6 ila 8 implant yerleştirilerek sabit porselen/zirkonyum protezler takılır.
              </>
            ) : (
              <>
                For patients who have lost most or all of their teeth, full mouth dental implants replace an entire arch (upper, lower, or both) with a permanent, secure set of teeth.
              </>
            )}
          </p>
          <p className="treatment-text-italic">
            {locale === 'tr' ? (
              <>
                Detaylı bilgi için{' '}
                <Link href="/treatments/dental-implants/full-mouth-implants" className="treatment-link-gold" aria-label="Tam Ağız İmplant sayfasını inceleyin">
                  Tam Ağız İmplant sayfamızı
                </Link>{' '}
                inceleyin.
              </>
            ) : (
              <>
                Learn more about{' '}
                <Link href="/treatments/dental-implants/full-mouth-implants" className="treatment-link-gold" aria-label="Learn more about full mouth implants in Istanbul">
                  Full Mouth Implants in Istanbul
                </Link>.
              </>
            )}
          </p>

          {/* 4. All-on-4 */}
          <h3 className="treatment-heading-h3">
            <strong>{locale === 'tr' ? '4. All-on-4 Diş İmplantı' : '4. All-on-4 Dental Implants'}</strong>
          </h3>
          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                Özel açılarla yerleştirilen yalnızca 4 implant üzerine tam bir sabit diş arkı monte edilir. Kemik grefti ihtiyacını en aza indirir ve aynı gün geçici sabit diş takılmasına olanak tanır.
              </>
            ) : (
              <>
                This popular technique uses just four strategically placed implants to support a full arch of fixed teeth. It is often recommended for patients with reduced bone density and allows for same-day temporary teeth.
              </>
            )}
          </p>
          <p className="treatment-text-italic">
            {locale === 'tr' ? (
              <>
                Detaylı bilgi için{' '}
                <Link href="/treatments/dental-implants/all-on-4-implants" className="treatment-link-gold" aria-label="All-on-4 İmplant sayfasını inceleyin">
                  All-on-4 İmplant sayfamızı
                </Link>{' '}
                inceleyin.
              </>
            ) : (
              <>
                Learn more about{' '}
                <Link href="/treatments/dental-implants/all-on-4-implants" className="treatment-link-gold" aria-label="Learn more about All-on-4 implants in Istanbul">
                  All-on-4 Implants in Istanbul
                </Link>.
              </>
            )}
          </p>

          {/* 5. All-on-6 */}
          <h3 className="treatment-heading-h3">
            <strong>{locale === 'tr' ? '5. All-on-6 Diş İmplantı' : '5. All-on-6 Dental Implants'}</strong>
          </h3>
          <p className="treatment-text-p">
            {locale === 'tr' ? (
              <>
                All-on-4 sistemine benzer şekilde çalışır ancak çene kemiğine 6 implant yerleştirilerek çiğneme kuvvetlerine karşı ekstra güç ve dayanıklılık sağlanır.
              </>
            ) : (
              <>
                Similar to All-on-4, but uses six implants per arch for added stability and strength, making it an excellent long-term option for patients with sufficient bone volume.
              </>
            )}
          </p>
          <p className="treatment-text-italic">
            {locale === 'tr' ? (
              <>
                Detaylı bilgi için{' '}
                <Link href="/treatments/dental-implants/all-on-6-implants" className="treatment-link-gold" aria-label="All-on-6 İmplant sayfasını inceleyin">
                  All-on-6 İmplant sayfamızı
                </Link>{' '}
                inceleyin.
              </>
            ) : (
              <>
                Learn more about{' '}
                <Link href="/treatments/dental-implants/all-on-6-implants" className="treatment-link-gold" aria-label="Learn more about All-on-6 implants in Istanbul">
                  All-on-6 Implants in Istanbul
                </Link>.
              </>
            )}
          </p>
        </div>
      </section>

      {/* 2. FIND THE RIGHT TREATMENT ACCORDION (sect77) */}
      <TreatmentRightTreatmentAccordion />

      {/* 3. REAL PATIENTS. REAL SMILES. (sectinsta REELS) */}
      <TreatmentPatientReelsSection />

      {/* 4. FROM FIRST VISIT TO FINAL SMILE (sectba BEFORE/AFTER SLIDER) */}
      <TreatmentBeforeAfterSliderSection />

      {/* 5. DENTAL IMPLANT COSTS IN ISTANBUL & PACKAGES (LR_r40rBzb4 + Price Cards + Carousel) */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 6. POPULAR ALL-ON-4 / ALL-ON-6 PACKAGES SLIDER (12 Cards with Nucleoss, DXL, Straumann, Megagen, Neodent, Hiossen) */}
      <TreatmentPackagesSlider />

      {/* 7. OUR BEST SERVICES INCLUDED (8 Included VIP Services) */}
      <TreatmentServicesIncludedSection />

      {/* 8. OUR DOCTORS SECTION (4 Specialists) */}
      <TreatmentDoctorsSection />

      {/* 9. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 10. CLINIC VIRTUAL TOUR (YouTube smhwCD78Vbo) */}
      <TreatmentClinicTourSection />

      {/* 11. 3-STEP TREATMENT JOURNEY ACCORDION (sectacc) */}
      <TreatmentJourneySimpleSection />

      {/* 12. GOOGLE & TRUSTPILOT REVIEWS CAROUSEL (sectyorum) */}
      <TreatmentReviewsSection />

      {/* 13. FREQUENTLY ASKED QUESTIONS (26 Dental Implant FAQs) */}
      <TreatmentFAQSection />

      {/* 14. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Implants" />

      {/* 15. BOTTOM CTA BANNER */}
      <section aria-labelledby="bottom-cta-heading" className="treatment-cta-banner">
        <div className="treatment-container-narrow">
          <h2 id="bottom-cta-heading" className="treatment-heading-title text-white">
            {locale === 'tr' ? 'Hayalinizdeki Gülüşe Bugün Kavuşun' : 'Ready to Start Your Smile Transformation?'}
          </h2>
          <p className="treatment-cta-desc">
            {locale === 'tr'
              ? 'Uzman hekimlerimizle ücretsiz online konsültasyon yapın, tedavi planınızı ve her şey dahil fiyat teklifinizi hemen alın.'
              : 'Get your free, no-obligation treatment plan and price quote today. Our team in Istanbul is ready to guide you every step of the way.'}
          </p>
          <div className="treatment-cta-btn-row">
            <Link
              href="/contact"
              className="treatment-btn-gold"
              aria-label={locale === 'tr' ? 'Ücretsiz teklif formuna gidin' : 'Get a free personalized quote'}
            >
              <span>{locale === 'tr' ? 'Ücretsiz Teklif Alın' : 'Get a Free Quote'}</span>
              <span>→</span>
            </Link>
            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="treatment-btn-whatsapp"
              aria-label="Direct WhatsApp consultation with our dental team"
            >
              <span>💬 WhatsApp Live Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
