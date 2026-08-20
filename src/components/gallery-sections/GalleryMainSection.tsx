'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';
import { GALLERY_VIDEO_STORIES, GALLERY_CATEGORIES, GalleryVideoStory } from '@/data/gallery-page-data';
import styles from './GalleryMainSection.module.css';

export default function GalleryMainSection() {
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'implants' | 'makeover' | 'clinic'>('all');
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [selectedModalVideo, setSelectedModalVideo] = useState<GalleryVideoStory | null>(null);

  const filteredItems = GALLERY_VIDEO_STORIES.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getLocalized = (obj: Record<string, string> | undefined) => {
    if (!obj) return '';
    return obj[locale] || obj.en || obj.tr || '';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedModalVideo(null);
        setActivePlayingId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const UI_TEXT = {
    sectionTitle: {
      en: 'Real Patients. Real Smiles.',
      tr: 'Gerçek Hastalar. Gerçek Gülüşler.',
      de: 'Echte Patienten. Echtes Lächeln.',
      pl: 'Prawdziwi Pacjenci. Prawdziwe Uśmiechy.',
      pt: 'Pacientes Reais. Sorrisos Reais.',
      es: 'Pacientes Reales. Sonrisas Reales.',
      ru: 'Реальные пациенты. Реальные улыбки.',
    },
    sectionSubtitle: {
      en: 'Explore the journey of our international patients through authentic visuals, elegant transformations, and moments captured inside Master Smile Studio. Let their stories inspire your own.',
      tr: 'Master Smile Studio bünyesinde tedavi gören uluslararası hastalarımızın gerçek video hikayelerini, gülüş dönüşümlerini ve deneyimlerini keşfedin.',
      de: 'Entdecken Sie die Reise unserer internationalen Patienten anhand authentischer Aufnahmen, eleganter Verwandlungen und exklusiver Einblicke im Master Smile Studio.',
      pl: 'Poznaj historie naszych międzynarodowych pacjentów dzięki autentycznym materiałom wideo i spektakularnym metamorfozom uśmiechu w Master Smile Studio.',
      pt: 'Explore a jornada dos nossos pacientes internacionais através de vídeos autênticos, transformações elegantes e momentos captados no Master Smile Studio.',
      es: 'Explore el viaje de nuestros pacientes internacionales a través de imágenes auténticas, elegantes transformaciones y momentos capturados en Master Smile Studio.',
      ru: 'Познакомьтесь с историями наших международных пациентов через подлинные видео, потрясающие преображения улыбок в Master Smile Studio.',
    },
    happyPatient: {
      en: 'HAPPY PATIENT',
      tr: 'MUTLU HASTA',
      de: 'GLÜCKLICHER PATIENT',
      pl: 'ZADOWOLONY PACJENT',
      pt: 'PACIENTE FELIZ',
      es: 'PACIENTE FELIZ',
      ru: 'СЧАСТЛИВЫЙ ПАЦИЕНТ',
    },
    fromText: {
      en: 'FROM',
      tr: 'GELİŞ:',
      de: 'AUS',
      pl: 'Z',
      pt: 'DE',
      es: 'DE',
      ru: 'ИЗ',
    },
    toMasterSmile: {
      en: 'TO MASTER SMILE',
      tr: "MASTER SMILE'A",
      de: 'ZU MASTER SMILE',
      pl: 'DO MASTER SMILE',
      pt: 'PARA MASTER SMILE',
      es: 'A MASTER SMILE',
      ru: 'В MASTER SMILE',
    },
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
    <section className={styles.standardCenter3} aria-label="Real Patients Real Smiles Video Gallery">
      {/* Header Section */}
      <div className={styles.sectionHeader}>
        <div className={styles.headerLeft}>
          <h2 className={styles.sectionTitle}>
            {getLocalized(UI_TEXT.sectionTitle)}
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.sectionSubtitle}>
            {getLocalized(UI_TEXT.sectionSubtitle)}
          </p>
        </div>
      </div>

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
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`${styles.tabBtn} ${isSelected ? styles.selected : ''}`}
                >
                  <span className={styles.circleIcon}>{isSelected ? '●' : '○'}</span>
                  <span>{getLocalized(cat.label)}</span>
                </button>
              );
            })}
          </div>

          {/* 4-Column Video Grid */}
          <div className={styles.list}>
            {filteredItems.map((story) => {
              const isPlaying = activePlayingId === story.id;
              return (
                <div
                  key={story.id}
                  onClick={() => {
                    if (!isPlaying) setActivePlayingId(story.id);
                  }}
                  className={styles.realPatientCard}
                >
                  {isPlaying ? (
                    <div className={styles.inlineVideoContainer}>
                      <iframe
                        src={`${story.videoUrl}&playsinline=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0`}
                        title={getLocalized(story.treatment)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className={styles.inlineIframe}
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePlayingId(null);
                        }}
                        className={styles.closeInlineBtn}
                        aria-label="Close video"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Left Vertical Ribbon */}
                      <div className={styles.leftRibbon}>
                        <span className={styles.leftRibbonText}>
                          FROM {story.country} TO MASTER SMILE
                        </span>
                      </div>

                      {/* Right Main Content */}
                      <div className={styles.rightContent}>
                        {/* Top Country Flag Banner */}
                        <div className={styles.flagBanner}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={story.flagSvg}
                            alt={story.country}
                            className={styles.flagImg}
                          />
                        </div>

                        {/* Happy Patient Heading */}
                        <div className={styles.happyPatientLabel}>
                          {getLocalized(UI_TEXT.happyPatient)}
                        </div>

                        {/* Center Image Thumbnail with YouTube Play Button */}
                        <div className={styles.thumbContainer}>
                          <div className={styles.thumbBox}>
                            <Image
                              src={story.image}
                              alt={getLocalized(story.treatment)}
                              fill
                              unoptimized
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 250px"
                              className={styles.patientImg}
                            />
                            <div className={styles.playOverlay}>
                              <Image
                                src="/yticon.webp"
                                alt="Play Icon"
                                width={50}
                                height={50}
                                className={styles.playBtn}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Bottom Treatment Label */}
                        <div className={styles.bottomBadgeWrap}>
                          <span className={styles.bottomBadge}>
                            {getLocalized(story.treatment)}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
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

      {/* Full Lightbox Video Modal */}
      {selectedModalVideo && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedModalVideo(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setSelectedModalVideo(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className={styles.modalVideoWrap}>
              <iframe
                src={`${selectedModalVideo.videoUrl}&playsinline=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0`}
                title={getLocalized(selectedModalVideo.treatment)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className={styles.modalIframe}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
