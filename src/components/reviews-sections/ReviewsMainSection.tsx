'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';
import { REVIEWS_PAGE_DATA, ReviewItemData } from '@/data/reviews-page-data';
import styles from './ReviewsMainSection.module.css';

export default function ReviewsMainSection() {
  const locale = useLocale();
  const [activeReview, setActiveReview] = useState<ReviewItemData | null>(null);

  const getLocalized = (obj: Record<string, string> | undefined) => {
    if (!obj) return '';
    return obj[locale] || obj.en || obj.tr || '';
  };

  const UI_TEXT = {
    consultationTitle: {
      en: 'Contact Us For Free Consultation',
      tr: 'Ücretsiz Konsültasyon İçin Ulaşın',
      de: 'Kontaktieren Sie uns für eine kostenlose Beratung',
      pl: 'Skontaktuj się w celu bezpłatnej konsultacji',
      pt: 'Contacte-nos para uma Consulta Gratuita',
      es: 'Contáctenos para una Consulta Gratuita',
      ru: 'Свяжитесь с нами для бесплатной консультации',
    },
    getQuote: {
      en: 'GET QUOTE',
      tr: 'TEKLİF AL',
      de: 'ANGEBOT',
      pl: 'WYCENA',
      pt: 'ORÇAMENTO',
      es: 'PRESUPUESTO',
      ru: 'РАСЧЕТ',
    },
    treatmentsTitle: {
      en: 'Treatments',
      tr: 'Tedaviler',
      de: 'Behandlungen',
      pl: 'Zabiegi',
      pt: 'Tratamentos',
      es: 'Tratamientos',
      ru: 'Лечение',
    },
  };

  const SIDEBAR_TREATMENTS = [
    {
      title: {
        en: 'Dental Implants',
        tr: 'Diş İmplantları',
        de: 'Zahnimplantate',
        pl: 'Implanty Zębowe',
        pt: 'Implantes Dentários',
        es: 'Implantes Dentales',
        ru: 'Зубные импланты',
      },
      href: '/treatments/dental-implants',
      hasImage: true,
    },
    {
      title: {
        en: 'Dental Crowns',
        tr: 'Diş Kaplamaları (Kron)',
        de: 'Zahnkronen',
        pl: 'Korony Zębowe',
        pt: 'Coroas Dentárias',
        es: 'Coronas Dentales',
        ru: 'Зубные коронки',
      },
      href: '/treatments/zirconium-crowns',
      hasImage: false,
    },
    {
      title: {
        en: 'Dental Veneers',
        tr: 'Lamine Diş (Veneer)',
        de: 'Veneers',
        pl: 'Licówki Zębowe',
        pt: 'Facetas Dentárias',
        es: 'Carillas Dentales',
        ru: 'Виниры для зубов',
      },
      href: '/treatments/porcelain-laminate-veneers',
      hasImage: false,
    },
    {
      title: {
        en: 'Dental Bridge',
        tr: 'Diş Köprüsü',
        de: 'Zahnbrücke',
        pl: 'Mosty Protetyczne',
        pt: 'Ponte Dentária',
        es: 'Puente Dental',
        ru: 'Зубной мост',
      },
      href: '/treatments/dental-bridges',
      hasImage: false,
    },
    {
      title: {
        en: 'Dentures',
        tr: 'İmplant Üstü Protezler',
        de: 'Zahnersatz / Prothesen',
        pl: 'Protezy Zębowe',
        pt: 'Próteses Dentárias',
        es: 'Dentaduras Postizas',
        ru: 'Зубные протезы',
      },
      href: '/treatments/implant-supported-dentures',
      hasImage: false,
    },
    {
      title: {
        en: 'Cosmetic Dentistry',
        tr: 'Estetik Diş Hekimliği',
        de: 'Ästhetische Zahnmedizin',
        pl: 'Stomatologia Estetyczna',
        pt: 'Dentisteria Estética',
        es: 'Odontología Estética',
        ru: 'Эстетическая стоматология',
      },
      href: '/treatments/smile-makeover',
      hasImage: false,
    },
    {
      title: {
        en: 'General Dentistry',
        tr: 'Genel Diş Tedavileri',
        de: 'Allgemeine Zahnheilkunde',
        pl: 'Stomatologia Ogólna',
        pt: 'Dentisteria Geral',
        es: 'Odontología General',
        ru: 'Общая стоматология',
      },
      href: '/treatments/root-canal-treatment',
      hasImage: false,
    },
  ];

  return (
    <section className={styles.standardCenter3} aria-label="Patient Reviews Section">
      <div className={styles.pagegrid}>
        {/* Left Column: Reviews Categories */}
        <div className={styles.s1}>
          <div className={styles.list}>
            {REVIEWS_PAGE_DATA.map((group) => (
              <div key={group.id} className={styles.catgrup}>
                <h2>{getLocalized(group.title)}</h2>

                <div className={styles.grid}>
                  {group.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className={styles.s}
                      onClick={() => setActiveReview(rev)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveReview(rev);
                        }
                      }}
                      aria-label={`Read full review by ${rev.author}`}
                    >
                      {/* Top: User Icon + Author Name */}
                      <div className={styles.ad}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className={styles.userIcon}
                        >
                          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                        <span>{rev.author}</span>
                      </div>

                      {/* Middle: Review text */}
                      <div className={styles.yorum}>
                        {getLocalized(rev.text)}
                      </div>

                      {/* Bottom: Platform Logo + 5 Stars */}
                      <div className={styles.cardFooter}>
                        <div className={styles.platform}>
                          <Image
                            src={rev.platformImg}
                            alt={rev.author}
                            fill
                            sizes="120px"
                            className={styles.platformImg}
                          />
                        </div>
                        <div className={styles.stars}>
                          <Image
                            src="/reviews/5star.webp"
                            alt="5 Stars"
                            fill
                            sizes="100px"
                            className={styles.starsImg}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Sidebar in Dark Teal (#517A7D) */}
        <aside className={styles.s2}>
          <div className={styles.sticky}>
            {/* Consultation Minikart */}
            <div className={styles.minikart}>
              <div className={styles.adSide}>Master Smile Studio</div>
              <div className={styles.imSide}>
                <Link href="/contact" aria-label="Free consultation" className={styles.imLink}>
                  <Image
                    src="/mss-afterpics-patients.png"
                    alt="Master Smile Studio VIP Consultation"
                    fill
                    sizes="160px"
                    className={styles.imImgSide}
                  />
                </Link>
              </div>
              <div className={styles.infoSide}>
                {getLocalized(UI_TEXT.consultationTitle)}
              </div>
              <div className={styles.butonlarwrap}>
                <div className={styles.butonlar}>
                  <div>
                    <Link href="/contact" className={styles.tip1}>
                      {getLocalized(UI_TEXT.getQuote)}
                    </Link>
                  </div>
                  <div>
                    <a
                      aria-label="WhatsApp"
                      className={`${styles.tip2} ${styles.whatsappBtn}`}
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      aria-label="Phone"
                      className={`${styles.tip2} ${styles.phoneBtn}`}
                      href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatments Miniblog Widget */}
            <div className={styles.miniblog1}>
              <div className={styles.xtitle}>{getLocalized(UI_TEXT.treatmentsTitle)}</div>
              <div className={styles.treatmentList}>
                {SIDEBAR_TREATMENTS.map((item, idx) => (
                  <div key={idx} className={styles.treatmentItem}>
                    {item.hasImage && (
                      <div className={styles.treatmentThumb}>
                        <Link href={item.href} aria-label={getLocalized(item.title)} className={styles.treatmentThumbLink}>
                          <Image
                            src="/prices-treatment-thumb.webp"
                            alt={getLocalized(item.title)}
                            fill
                            sizes="300px"
                            style={{ objectFit: 'cover' }}
                          />
                        </Link>
                      </div>
                    )}
                    <Link href={item.href} className={styles.treatmentLink}>
                      <span className={styles.arrowIcon}>→</span>
                      <span>{getLocalized(item.title)}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Lightbox / Modal Full Review View */}
      {activeReview && (
        <div className={styles.modalBackdrop} onClick={() => setActiveReview(null)}>
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setActiveReview(null)}
              aria-label="Close review"
            >
              ✕
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalAuthor}>
                <div className={styles.modalAvatar}>
                  {activeReview.author.charAt(0)}
                </div>
                <h3 className={styles.modalAuthorName}>{activeReview.author}</h3>
              </div>

              <div className={styles.modalRatingRow}>
                <div className={styles.platform}>
                  <Image
                    src={activeReview.platformImg}
                    alt={activeReview.platform}
                    fill
                    sizes="110px"
                    className={styles.platformImg}
                  />
                </div>
                <div className={styles.stars}>
                  <Image
                    src="/reviews/5star.webp"
                    alt="5 Stars Rating"
                    fill
                    sizes="95px"
                    className={styles.starsImg}
                  />
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              {getLocalized(activeReview.text)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
