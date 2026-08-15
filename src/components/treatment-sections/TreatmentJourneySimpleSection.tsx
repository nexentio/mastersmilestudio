'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getWhatsAppLink } from '@/config/site';
import styles from './TreatmentJourneySimpleSection.module.css';

interface Props {
  stayDuration?: string;
  visitCount?: string;
  recoveryTime?: string;
  priceEstimate?: string;
}

export default function TreatmentJourneySimpleSection({
  stayDuration,
  visitCount,
  recoveryTime,
  priceEstimate,
}: Props) {
  const locale = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const items = [
    {
      title: locale === 'tr' ? '1. Online Konsültasyon ve Fiyat Teklifi' : '1. Online Consultation and Quote',
      iconSvg: (
        <svg width="22" height="22" viewBox="0 0 512 512" fill="#ffffff">
          <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281.4l51.6-51.6 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0l116.6-116.6c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.2 6.2 6.2 16.4 0 22.6L249 344.2c-6.2 6.2-16.4 6.2-22.6 0l-76.7-76.7c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0z" />
        </svg>
      ),
      content: locale === 'tr' ? (
        <div>
          <p>
            Her şey evinizin konforunda başlar. Mevcut diş fotoğraflarınızı, varsa panoramik röntgeninizi ve beklentilerinizi bize ilettiğinizde, uzman cerrahlarımız durumunuzu titizlikle inceler.
          </p>
          <ul className="treatment-bullet-list mt-3">
            <li>Kişiselleştirilmiş tedavi planı ve net fiyat dökümü hazırlanır.</li>
            <li>Gerekli ziyaret sayısı ve İstanbul’da kalış süresi belirlenir.</li>
            <li>Hiçbir gizli maliyet olmadan tüm detaylar şeffafça paylaşılır.</li>
          </ul>
        </div>
      ) : (
        <div>
          <p>
            Your journey begins comfortably from home. By sending us your dental photos, recent X-rays (if available), and your personal expectations, our senior dental surgeons will conduct a comprehensive evaluation.
          </p>
          <ul className="treatment-bullet-list mt-3">
            <li>We prepare a personalized treatment plan and transparent price quote.</li>
            <li>We estimate the required duration of stay and number of visits needed.</li>
            <li>Everything is 100% transparent with zero hidden fees.</li>
          </ul>
        </div>
      ),
    },
    {
      title: locale === 'tr' ? '2. İstanbul Seyahati ve VIP Karşılama' : '2. Travel to Istanbul & VIP Reception',
      iconSvg: (
        <svg width="22" height="22" viewBox="0 0 576 512" fill="#ffffff">
          <path d="M482.3 192c34.2 0 93.7 29 93.7 64 0 36-59.5 64-93.7 64l-116.6 0L266 495.6c-4.6 8.5-13.5 13.8-23.2 13.8l-40.4 0c-17.7 0-30.7-16.6-26.4-33.8L211 320 86.8 320l-35.6 47.5c-4.4 5.8-11.2 9.2-18.5 9.2L8 376.7c-6.2 0-10.7-6.2-8.7-12.1L24 256 -.7 147.4C-2.7 141.5 1.8 135.3 8 135.3l24.7 0c7.3 0 14.1 3.4 18.5 9.2L86.8 192l124.2 0L171 36.4C166.7 19.2 179.7 2.6 197.4 2.6l40.4 0c9.7 0 18.6 5.3 23.2 13.8L365.7 192l116.6 0z" />
        </svg>
      ),
      content: locale === 'tr' ? (
        <div>
          <p>
            Tarihlerinizi netleştirdiğinizde geriye sadece uçak biletinizi almak kalır. İstanbul Havalimanı’na indiğiniz andan itibaren özel VIP şoförümüz sizi karşılar ve anlaşmalı lüks 5 yıldızlı otelinize transferinizi sağlar.
          </p>
          <ul className="treatment-bullet-list mt-3">
            <li>Havalimanı - Otel - Klinik arasındaki tüm transferler kliniğimizce organize edilir.</li>
            <li>Kişisel hasta asistanınız seyahatiniz boyunca her an yanınızdadır.</li>
          </ul>
        </div>
      ) : (
        <div>
          <p>
            Once you book your flight tickets, our dedicated international team takes over the logistics. The moment you land at Istanbul Airport, our private VIP chauffeur will welcome you and escort you to your 5-star hotel.
          </p>
          <ul className="treatment-bullet-list mt-3">
            <li>All VIP transfers between Airport, Hotel, and Clinic are smoothly coordinated.</li>
            <li>Your personal multilingual patient host will assist you throughout your stay.</li>
          </ul>
        </div>
      ),
    },
    {
      title: locale === 'tr' ? '3. Tedavi, İyileşme ve Yeni Gülüşünüz' : '3. Treatment, Recovery & Your New Smile',
      iconSvg: (
        <svg width="22" height="22" viewBox="0 0 512 512" fill="#ffffff">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg>
      ),
      content: locale === 'tr' ? (
        <div>
          <p>
            Kliniğimizdeki ilk gününüzde 3D CBCT tomografi ve detaylı yüz yüze planlama yapılır. İmplant yerleşimi ağrısız ve konforlu bir şekilde tamamlanır.
          </p>
          <ul className="treatment-bullet-list mt-3">
            <li>İlk seansta geçici sabit dişleriniz takılarak estetik ve çiğneme fonksiyonunuz korunur.</li>
            <li>İyileşme sürecinin ardından kalıcı, doğal görünümlü zirkonyum dişleriniz hazırlanır ve takılır.</li>
            <li>Uluslararası ömür boyu garanti sertifikası ile ülkenize güvenle dönersiniz.</li>
          </ul>
        </div>
      ) : (
        <div>
          <p>
            On your first clinic day, 3D CBCT imaging and precise guided planning are conducted. The implant procedure is performed painlessly under advanced local anesthesia.
          </p>
          <ul className="treatment-bullet-list mt-3">
            <li>Fixed temporary teeth are placed on the first visit so you never leave without teeth.</li>
            <li>After healing, permanent high-strength zirconia teeth are precision-crafted and fitted.</li>
            <li>You return home with a radiant smile backed by international lifetime warranty certificates.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section aria-labelledby="journey-simple-heading" className={styles.section}>
      <div className="treatment-container">
        {/* Head */}
        <div className={styles.head}>
          <div>
            <h2 id="journey-simple-heading" className="treatment-heading-navy">
              {locale === 'tr' ? 'Kolaylaştırılmış Tedavi Yolculuğunuz' : 'Your Dental Journey Made Simple'}
            </h2>
          </div>
          <div>
            <p className="treatment-text-p m-0">
              {locale === 'tr'
                ? 'İlk başvurunuzdan nihai sonuçlara kadar İstanbul’da sorunsuz ve şeffaf bir tedavi süreci sağlıyoruz. Ne kadar kalacağınızı, kaç ziyaret gerekeceğini, iyileşme sürenizi ve tahmini fiyatları öğrenin — hepsi uluslararası hastalar düşünülerek tasarlandı. Ayrıntıları bize bırakın, siz sadece gülüşünüze odaklanın.'
                : 'From your very first inquiry to the final results, we ensure a smooth and transparent treatment journey in Istanbul. Learn about how long you’ll stay, how many visits you’ll need, your recovery time, and estimated pricing — all designed with international patients in mind. Let us take care of the details, so you can focus on your smile.'}
            </p>
          </div>
        </div>

        {/* Center Box */}
        <div className={styles.box}>
          {/* Accordion List */}
          <div className="accordion flex flex-col">
            {items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className={styles.item}>
                  <div
                    className={styles.titleRow}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <div className="flex items-center gap-5">
                      {/* Sage/Teal Circular Icon Badge */}
                      <span className={styles.iconBadge}>
                        {item.iconSvg}
                      </span>

                      <span className="text">
                        <span className="text-lg font-extrabold text-slate-900 leading-tight">
                          {item.title}
                        </span>
                      </span>
                    </div>

                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                      >
                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>
                    </span>
                  </div>

                  {isOpen && (
                    <div className={styles.content}>
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Grid2: Reach Out to Us */}
          <div className="mt-10 text-center">
            <div className="text-base font-extrabold text-slate-900 mb-5">
              {locale === 'tr' ? 'Bize Ulaşın - Hızlı ve Kolayca' : 'Reach Out to Us - Quickly and Easily'}
            </div>

            <div className="flex items-center justify-center gap-3.5 flex-wrap">
              {/* WhatsApp Button */}
              <a
                href={getWhatsAppLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactPill}
              >
                <img
                  loading="lazy"
                  width="20"
                  height="20"
                  src="https://sohodent.com/doc/static/a1/contact-icon-10.png.webp"
                  alt="WhatsApp"
                  className={styles.contactIcon}
                />
                <span className={styles.contactText}>WhatsApp</span>
              </a>

              {/* Phone Call Button */}
              <a
                href="tel:+905434568080"
                className={styles.contactPill}
              >
                <img
                  loading="lazy"
                  width="20"
                  height="20"
                  src="https://sohodent.com/doc/static/a1/contact-icon-11.png.webp"
                  alt="Phone Call"
                  className={styles.contactIcon}
                />
                <span className={styles.contactText}>Phone Call</span>
              </a>

              {/* Quick Form Button */}
              <Link
                href="/contact"
                className={styles.contactPill}
              >
                <img
                  loading="lazy"
                  width="20"
                  height="20"
                  src="https://sohodent.com/doc/static/a1/contact-icon-12.png.webp"
                  alt="Quick Form"
                  className={styles.contactIcon}
                />
                <span className={styles.contactText}>Quick Form</span>
              </Link>

              {/* E-mail Button */}
              <a
                href="mailto:info@mastersmilestudio.com"
                className={styles.contactPill}
              >
                <img
                  loading="lazy"
                  width="20"
                  height="20"
                  src="https://sohodent.com/doc/static/a1/contact-icon-13.png.webp"
                  alt="E-mail"
                  className={styles.contactIcon}
                />
                <span className={styles.contactText}>E-mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
