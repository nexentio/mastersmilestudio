'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from '@/data/gallery-page-data';
import styles from './GalleryMainSection.module.css';

export default function GalleryMainSection() {
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<'general' | 'clinic'>('general');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => item.category === selectedCategory
  );

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

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === 0
          ? filteredItems.length - 1
          : activeLightboxIndex - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === filteredItems.length - 1
          ? 0
          : activeLightboxIndex + 1
      );
    }
  };

  const activeItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section className={styles.standardCenter3} aria-label="Gallery Section">
      <div className={styles.pagegrid}>
        {/* Left Column: Gallery Main */}
        <div className={styles.s1}>
          {/* Category Filter Pills */}
          <div className={styles.kategoriler1}>
            {GALLERY_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id as 'general' | 'clinic')}
                  className={`${styles.tabBtn} ${isSelected ? styles.selected : ''}`}
                >
                  <span className={styles.circleIcon}>{isSelected ? '●' : '○'}</span>
                  <span>{getLocalized(cat.label)}</span>
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div className={styles.list}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={styles.item}
                onClick={() => handleOpenLightbox(index)}
              >
                <div className={styles.img}>
                  <Image
                    src={item.src}
                    alt={getLocalized(item.alt)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                    className={styles.imgItem}
                  />
                  <div className={styles.overlayZoom}>
                    <span className={styles.zoomIcon}>🔍</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Sidebar */}
        <aside className={styles.s2}>
          {/* Consultation Minikart */}
          <div className={styles.minikart}>
            <div className={styles.ad}>Master Smile Studio</div>
            <div className={styles.im}>
              <Link href="/contact" aria-label="Free consultation" className={styles.imLink}>
                <Image
                  src="/mss-patients-montage.png"
                  alt="Master Smile Studio VIP Consultation"
                  fill
                  sizes="320px"
                  className={styles.imImg}
                />
              </Link>
            </div>
            <div className={styles.info}>
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
                          src="/dental-implant-mss.jpeg"
                          alt={getLocalized(item.title)}
                          fill
                          sizes="300px"
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
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
        </aside>
      </div>

      {/* Interactive Fullscreen Lightbox Modal */}
      {activeItem && (
        <div className={styles.modalBackdrop} onClick={handleCloseLightbox}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={handleCloseLightbox}
              aria-label="Close image"
            >
              ✕
            </button>

            <button
              type="button"
              className={`${styles.modalNavBtn} ${styles.modalPrevBtn}`}
              onClick={handlePrevImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className={styles.modalImageWrapper}>
              <Image
                src={activeItem.src}
                alt={getLocalized(activeItem.alt)}
                fill
                sizes="(max-width: 1024px) 100vw, 1050px"
                className={styles.modalImg}
                priority
              />
            </div>

            <button
              type="button"
              className={`${styles.modalNavBtn} ${styles.modalNextBtn}`}
              onClick={handleNextImage}
              aria-label="Next image"
            >
              ›
            </button>

            <div className={styles.modalCaption}>
              {getLocalized(activeItem.alt)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
