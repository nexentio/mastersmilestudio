'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getWhatsAppLink } from '@/config/site';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentRightTreatmentAccordion from '@/components/treatment-sections/TreatmentRightTreatmentAccordion';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentClinicTourSection from '@/components/treatment-sections/TreatmentClinicTourSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentPackagesSlider from '@/components/treatment-sections/TreatmentPackagesSlider';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentParallaxBanner from '@/components/treatment-sections/TreatmentParallaxBanner';
import TreatmentFAQSection from '@/components/treatment-sections/TreatmentFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './DentalImplantsDetailView.module.css';

export default function DentalImplantsDetailView() {
  const locale = useLocale();
  const t = useTranslations('services');

  return (
    <div className={styles.pageWrapper}>
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
        </div>
      </section>

      {/* 2. FIND THE RIGHT TREATMENT FOR YOU ACCORDION */}
      <TreatmentRightTreatmentAccordion />

      {/* 3. WHY CHOOSE DENTAL IMPLANTS IN ISTANBUL */}
      <section aria-labelledby="why-choose-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="why-choose-heading" className={styles.sectionTitle}>
            {locale === 'tr'
              ? 'Neden İstanbul’da Diş İmplantı Yaptırmalısınız?'
              : 'Why Choose Dental Implants in Istanbul?'}
          </h2>

          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                İstanbul, dünya standartlarında sağlık altyapısı, yüksek nitelikli cerrahları ve{' '}
                <Link href="/treatments/dental-implants" className={styles.linkGold}>
                  uygun fiyatları
                </Link>{' '}
                sayesinde diş implantı tedavisinde küresel bir lider haline gelmiştir. Hastaların Master Smile Studio Türkiye’yi tercih etmelerinin başlıca nedenleri:
              </>
            ) : (
              <>
                Istanbul has become a top destination for dental implants due to its world-class healthcare system, highly skilled dental professionals, and{' '}
                <Link href="/treatments/dental-implants" className={styles.linkGold}>
                  affordable prices.
                </Link>{' '}
                Here’s why choosing dental implants in Istanbul is a great option:
              </>
            )}
          </p>

          {/* 1. Expert Dental Implant Surgeons */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>1.</span>{' '}
            {locale === 'tr' ? 'Uzman Diş İmplantı Cerrahları' : 'Expert Dental Implant Surgeons'}
          </h3>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                Master Smile Studio&apos;da tüm hekimlerimiz alanında üst düzey eğitim almış uzmanlar olup kliniğimizin kurucu ortaklarıdır. Hekimlerimizin her biri Türkiye&apos;nin en prestijli üniversitelerinden mezun olmuş, güçlü bir akademik altyapı ve derin klinik uzmanlık kazanmıştır.
              </>
            ) : (
              <>
                At Master Smile Studio, all of our dentists are not only highly trained professionals but also the founders of the clinic. Each doctor has received advanced education from some of the most prestigious universities in Turkey, ensuring a strong academic background and deep clinical expertise.
              </>
            )}
          </p>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                Diş implantları, tam çene restorasyonları, kemik greftleme ve karmaşık cerrahiler dahil tüm operasyonlar asistanlar veya stajyerler tarafından değil, doğrudan deneyimli cerrahi ekibimiz tarafından bizzat gerçekleştirilir. Bu sayede her hastamız güvenilir uzmanlarımızdan en yüksek kalitede tedavi alır.
              </>
            ) : (
              <>
                All surgical procedures — including dental implants, full-arch restorations, bone grafting, and complex oral surgeries — are performed directly by our experienced oral surgery team, not by assistants or visiting dentists. This means every patient receives consistent, high-quality treatment from trusted specialists.
              </>
            )}
          </p>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                Marka kalitesi ve hasta güvenliğine odaklanan Master Smile Studio, ileri ve zorlu dental vakalardaki tecrübesiyle tanınmaktadır. Uzman cerrahlarımız, ihtiyaçlarınıza özel uzun ömürlü ve doğal görünümlü implant sonuçları sunmak için modern teknikler ve hassas dijital planlama kullanır.
              </>
            ) : (
              <>
                With a strong focus on brand quality and patient safety, Master Smile Studio is recognized for its experience in advanced and challenging dental cases. Our expert surgeons use modern techniques and precise planning to provide long-lasting, natural-looking implant results tailored to your needs.
              </>
            )}
          </p>

          {/* INSERT: OUR DENTISTS */}
          <div className="my-8">
            <TreatmentDoctorsSection />
          </div>

          {/* Mini Journey Banner */}
          <div className={styles.miniJourneyBanner}>
            <h4 className={styles.miniJourneyTitle}>
              {locale === 'tr' ? 'Kusursuz Tasarlanmış Tedavi Yolculuğunuz' : 'Your Journey, Seamlessly Designed'}
            </h4>
            <p className={styles.miniJourneyText}>
              {locale === 'tr'
                ? 'İlk mesajınızdan son gülüşünüze kadar — kişiselleştirilmiş bakım, şeffaf iletişim ve dünya standartlarında uzmanlıkla her adımda yanınızdayız.'
                : 'From your first message to your final smile — we guide you through every step with personalized care, clear communication, and world-class expertise.'}
            </p>
          </div>

          {/* 2. Dental Implant Cost in Istanbul */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>2.</span>{' '}
            {locale === 'tr'
              ? 'İstanbul’da Diş İmplantı Maliyeti – Master Smile Studio'
              : 'Dental Implant Cost in Istanbul - Master Smile Studio'}
          </h3>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                Birçok ülkeyle karşılaştırıldığında, İstanbul&apos;da diş implantı maliyetleri önemli ölçüde daha düşüktür; bu da bütçenizi sarsmadan birinci sınıf lüks tedavi almanızı sağlar.
              </>
            ) : (
              <>
                Compared to many other countries, dental implant costs in Istanbul are significantly lower, allowing you to receive high-end care without breaking the bank.
              </>
            )}
          </p>
          <div className={styles.btnWrap}>
            <Link href="/treatments" className={styles.btnPrimary}>
              {locale === 'tr' ? 'Tüm Paketleri İncele →' : 'View All Packages →'}
            </Link>
          </div>

          {/* 3. Advanced Technology */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>3.</span>{' '}
            {locale === 'tr' ? 'İleri Teknoloji ve Dijital Planlama' : 'Advanced Technology'}
          </h3>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                İmplantolojide en son dijital teknolojileri kullanarak daha hızlı iyileşme süreleri ve milimetrik hassasiyette sonuçlar elde ediyoruz. Master Smile Studio kliniğimiz, tedavinizi mümkün olduğunca konforlu ve etkili kılmak için son teknoloji 3D tomografi ve dijital tarayıcılarla donatılmıştır.
              </>
            ) : (
              <>
                We use the latest technology in implantology, ensuring faster healing times and more accurate results. Istanbul’s dental clinics, like Master Smile Studio, are equipped with state-of-the-art facilities to make your treatment as comfortable and effective as possible.
              </>
            )}
          </p>

          {/* 4. Before - After Dental Implant at Master Smile Studio */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>4.</span>{' '}
            {locale === 'tr'
              ? 'Master Smile Studio İstanbul’da Öncesi & Sonrası Sonuçlar'
              : 'Before - After Dental Implant at Master Smile Studio in Istanbul'}
          </h3>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                İstanbul&apos;da diş implantları sadece işlevsel değil; aynı zamanda doğal dişlerinizle kusursuz bir uyum yakalayacak şekilde estetik olarak tasarlanır. Uzman ekibimiz yeni gülüşünüzün hem son derece doğal hem de büyüleyici görünmesini sağlar.
              </>
            ) : (
              <>
                Dental implants in Istanbul are not just about function; they are designed to blend seamlessly with your natural teeth. Our expert team works to ensure your new smile looks natural and beautiful.
              </>
            )}
          </p>

          {/* INSERT: BEFORE - AFTER SLIDER */}
          <div className="my-8">
            <TreatmentBeforeAfterSliderSection />
          </div>

          {/* 5. Travel and Treatment in One */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>5.</span>{' '}
            {locale === 'tr' ? 'Seyahat ve Tedavi Bir Arada' : 'Travel and Treatment in One'}
          </h3>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                İstanbul kültür, tarih ve modern konforun kusursuz bir karışımını sunan büyüleyici bir şehirdir. En üst düzey dental tedaviyi alırken aynı zamanda unutulmaz bir tatil deneyimi yaşayabilirsiniz. İstanbul&apos;da diş implantı yaptırmayı düşünüyorsanız, Master Smile Studio Avrupa fiyatlarının çok altında uzman bakım sunmaktadır.{' '}
                <Link href="/contact" className={styles.linkGold}>
                  Detaylı bilgi için bugün bizimle iletişime geçin!
                </Link>
              </>
            ) : (
              <>
                Istanbul is a vibrant city, offering the perfect mix of culture, history, and modern amenities. You can enjoy a relaxing holiday while receiving top-tier dental treatment. If you’re considering dental implants in Istanbul, Master Smile Studio offers expert care at a fraction of the cost.{' '}
                <Link href="/contact" className={styles.linkGold}>
                  Contact us today to learn more!
                </Link>
              </>
            )}
          </p>
        </div>
      </section>

      {/* 4. YOUR DENTAL JOURNEY MADE SIMPLE (4-Step Timeline / Accordion) */}
      <TreatmentJourneySimpleSection />

      {/* 5. TYPES OF DENTAL IMPLANTS (Single, Multiple, All-on-4, All-on-6) */}
      <section aria-labelledby="types-implants-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="types-implants-heading" className={styles.sectionTitle}>
            {locale === 'tr'
              ? 'İstanbul’da Uygulanan Diş İmplantı Türleri (Tek, Çoklu, All-on-4, All-on-6)'
              : 'Types of Dental Implants (Single, Multiple, All-on-4, All-on-6) in Istanbul'}
          </h2>

          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                Diş implantları kaç dişinizin eksik olduğuna ve çene kemiğinizin durumuna göre farklı türlerde uygulanır. Master Smile Studio&apos;da ağız cerrahisi uzmanlarımız ihtiyaçlarınıza en uygun seçeneği belirlemenize yardımcı olur:
              </>
            ) : (
              <>
                Dental implants come in different types depending on how many teeth are missing and the condition of your jawbone. At Master Smile Studio in Istanbul, our oral surgery specialists help you choose the best option for your needs. Here are the most common types:
              </>
            )}
          </p>

          {/* Single Dental Implant */}
          <h3 className={styles.sectionSubTitle}>
            {locale === 'tr' ? 'İstanbul’da Tek Diş İmplantı' : 'Single Dental Implant in Istanbul'}
          </h3>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                Tek bir eksik dişin yerine uygulanır. Bir titanyum vida, bir abutment ve bir kron içerir. Sağlıklı bir çene kemiğine ve yalnızca bir diş boşluğuna sahipseniz bu seçenek idealdir.
              </>
            ) : (
              <>
                A single implant replaces one missing tooth. It includes one titanium screw, one abutment, and one crown. This option is ideal if you have a healthy jawbone and only one tooth gap.
              </>
            )}
          </p>
          <p className={styles.textItalic}>
            {locale === 'tr' ? (
              <>
                Tek bir eksik dişi yenilemek hakkında daha fazla bilgi edinmek için{' '}
                <Link href="/treatments/dental-implants" className={styles.linkGold}>
                  Tek Diş İmplant rehberimizi
                </Link>{' '}
                inceleyebilirsiniz.
              </>
            ) : (
              <>
                If you want to learn more about replacing a single missing tooth, you can read our{' '}
                <Link href="/treatments/dental-implants" className={styles.linkGold}>
                  full Single Dental Implant guide.
                </Link>
              </>
            )}
          </p>

          {/* Multiple Dental Implants */}
          <h3 className={styles.sectionSubTitle}>
            {locale === 'tr' ? 'İstanbul’da Çoklu Diş İmplantı' : 'Multiple Dental Implants in Istanbul'}
          </h3>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                Farklı bölgelerde birden fazla dişiniz eksikse, çoklu implant uygulanabilir. Her eksik diş tek tek bir implantla değiştirilebilir veya iki ya da daha fazla implant tarafından desteklenen bir köprü yerleştirilebilir. Bu seçenek güçlü çiğneme kabiliyeti ve doğal bir görünüm sağlar.
              </>
            ) : (
              <>
                If you are missing several teeth in different areas, multiple implants can be placed. Each missing tooth can be replaced with an individual implant, or a bridge can be supported by two or more implants. This option provides strong chewing ability and a natural look.
              </>
            )}
          </p>
          <p className={styles.textItalic}>
            {locale === 'tr' ? (
              <>
                Birden fazla eksik dişi tamamlamakla ilgileniyorsanız, detaylı{' '}
                <Link href="/treatments/dental-implants/full-mouth-implants" className={styles.linkGold}>
                  Çoklu Diş İmplantı sayfamızı
                </Link>{' '}
                keşfedebilirsiniz.
              </>
            ) : (
              <>
                If you are interested in restoring several missing teeth, you can explore our detailed{' '}
                <Link href="/treatments/dental-implants/full-mouth-implants" className={styles.linkGold}>
                  Multiple Dental Implants page.
                </Link>
              </>
            )}
          </p>

          {/* INSERT: CLINIC TOUR */}
          <div className="my-8">
            <TreatmentClinicTourSection />
          </div>

          {/* All-on-4 Dental Implants */}
          <h3 className={styles.sectionSubTitle}>
            {locale === 'tr' ? 'İstanbul’da All-on-4 Diş İmplantı' : 'All-on-4 Dental Implants in Istanbul'}
          </h3>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                All-on-4, dişlerinin çoğunu veya tamamını kaybetmiş hastalar için tam çene sabit protez çözümüdür. Çeneye özel açılarla yalnızca dört implant yerleştirilir ve üzerine sabit bir diş arkı monte edilir. Bu yöntem hızlı sonuçlar, yüksek stabilite sağlar ve genellikle düşük kemik yoğunluğuna sahip hastalar için de uygundur.
              </>
            ) : (
              <>
                All-on-4 is a full-arch solution for patients who have lost most or all of their teeth. Four implants are placed in the jaw, and a fixed full-arch prosthesis is attached. This method offers fast results, strong stability, and is often suitable even for patients with lower bone density.
              </>
            )}
          </p>
          <p className={styles.textItalic}>
            {locale === 'tr' ? (
              <>
                Hızlı ve sabit bir tam çene çözümü için{' '}
                <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.linkGold}>
                  All-on-4 Diş İmplantı sayfamızı
                </Link>{' '}
                okumaya devam edebilirsiniz.
              </>
            ) : (
              <>
                For a fast and stable full-arch solution, you can continue reading on our{' '}
                <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.linkGold}>
                  All-on-4 Dental Implants page.
                </Link>
              </>
            )}
          </p>

          {/* All-on-6 Dental Implants */}
          <h3 className={styles.sectionSubTitle}>
            {locale === 'tr' ? 'İstanbul’da All-on-6 Diş İmplantı' : 'All-on-6 Dental Implants in Istanbul'}
          </h3>
          <p className={styles.textP}>
            {locale === 'tr' ? (
              <>
                All-on-6 sistemi All-on-4&apos;e benzer ancak ekstra destek ve çiğneme kuvveti dağılımı için altı implant kullanır. Doğal dişlere en yakın deneyimi ve maksimum dayanıklılığı arayan hastalar için idealdir.
              </>
            ) : (
              <>
                All-on-6 is similar to All-on-4 but uses six implants for extra support. It provides more strength and durability, especially for patients who want the closest experience to natural teeth. This option is ideal for long-term stability and higher chewing comfort.
              </>
            )}
          </p>
          <p className={styles.textItalic}>
            {locale === 'tr' ? (
              <>
                Maksimum çiğneme gücü ve stabilite için{' '}
                <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.linkGold}>
                  All-on-6 Diş İmplantı sayfamızı
                </Link>{' '}
                ziyaret edebilirsiniz.
              </>
            ) : (
              <>
                If you prefer maximum stability for full-arch restoration, you can visit our{' '}
                <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.linkGold}>
                  All-on-6 Dental Implants page for more information.
                </Link>
              </>
            )}
          </p>
        </div>
      </section>

      {/* 6. OUR BEST SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 7. REAL PATIENTS. REAL SMILES. (Patient Reels) */}
      <TreatmentPatientReelsSection />

      {/* 8. DENTAL IMPLANT COSTS IN ISTANBUL (Video & Brand Prices) */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 9. POPULAR ALL-ON-4 / ALL-ON-6 PACKAGES SLIDER */}
      <TreatmentPackagesSlider />

      {/* 10. REVIEWS SECTION (Google & Trustpilot Reviews) */}
      <TreatmentReviewsSection />

      {/* 11. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 12. FREQUENTLY ASKED QUESTIONS (26 FAQs) */}
      <TreatmentFAQSection />

      {/* 13. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Implants" />

      {/* 14. BOTTOM CTA BANNER */}
      <section aria-labelledby="bottom-cta-heading" className={styles.ctaBanner}>
        <div className={styles.ctaContainer}>
          <h2 id="bottom-cta-heading" className={styles.ctaTitle}>
            {locale === 'tr' ? 'Hayalinizdeki Gülüşe Bugün Kavuşun' : 'Ready to Start Your Smile Transformation?'}
          </h2>
          <p className={styles.ctaDesc}>
            {locale === 'tr'
              ? 'Uzman hekimlerimizle ücretsiz online konsültasyon yapın, tedavi planınızı ve her şey dahil fiyat teklifinizi hemen alın.'
              : 'Get your free, no-obligation treatment plan and price quote today. Our team in Istanbul is ready to guide you every step of the way.'}
          </p>
          <div className={styles.ctaBtnRow}>
            <Link
              href="/contact"
              className={styles.ctaBtnGold}
              aria-label={locale === 'tr' ? 'Ücretsiz teklif formuna gidin' : 'Get a free personalized quote'}
            >
              <span>{locale === 'tr' ? 'Ücretsiz Teklif Alın' : 'Get a Free Quote'}</span>
              <span>→</span>
            </Link>
            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnWhatsapp}
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
