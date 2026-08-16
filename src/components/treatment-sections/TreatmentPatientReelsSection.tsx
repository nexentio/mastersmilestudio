'use client';

import React, { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import styles from './TreatmentPatientReelsSection.module.css';

interface PatientReel {
  id: string;
  img: string;
  alt: string;
  country: string;
  flagCode: string;
  treatmentTag: string;
  videoUrl: string;
}

const PATIENT_REELS: PatientReel[] = [
  {
    id: 'v5XoXnDblWI',
    img: 'https://sohodent.com/doc/data1/file1_1765355633_1_11258.webp',
    alt: 'dental clinics istanbul',
    country: 'AUSTRALIA',
    flagCode: 'AU',
    treatmentTag: 'LAMINE',
    videoUrl: 'https://www.youtube.com/embed/v5XoXnDblWI',
  },
  {
    id: 'F_ULWgBZhjY',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1765355500_1_76928.webp',
    alt: 'dental clinic in istanbul turkey',
    country: 'USA',
    flagCode: 'US',
    treatmentTag: 'ALL ON X',
    videoUrl: 'https://www.youtube.com/embed/F_ULWgBZhjY',
  },
  {
    id: 'ZYMbU63b_PY',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1765355486_1_39145.webp',
    alt: 'dental clinic in turkey',
    country: 'GERMANY',
    flagCode: 'DE',
    treatmentTag: 'IMPLANT',
    videoUrl: 'https://www.youtube.com/embed/ZYMbU63b_PY',
  },
  {
    id: 'z_D8n4-FDSE',
    img: 'https://sohodent.com/doc/data1/file1_1759311080_5_60786.webp',
    alt: 'dental turkey clinic',
    country: 'USA',
    flagCode: 'US',
    treatmentTag: 'ALL ON SIX',
    videoUrl: 'https://www.youtube.com/embed/z_D8n4-FDSE',
  },
  {
    id: 'GxYMgj02_2E',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755081916_1_59314.jpg.webp',
    alt: 'best dental clinic in istanbul',
    country: 'FRANCE',
    flagCode: 'FR',
    treatmentTag: 'ALL ON SIX',
    videoUrl: 'https://www.youtube.com/embed/GxYMgj02_2E',
  },
  {
    id: '2aW6V37Jw7c',
    img: 'https://sohodent.com/doc/data1/file1_1759311507_5_93842.webp',
    alt: 'best dental clinic in istanbul',
    country: 'UK',
    flagCode: 'GB',
    treatmentTag: 'IMPLANTS',
    videoUrl: 'https://www.youtube.com/embed/2aW6V37Jw7c',
  },
  {
    id: 'OsM5_-n4eVk',
    img: 'https://sohodent.com/doc/data1/file1_1755085034_1_64321.jpg.webp',
    alt: 'dental clinic in istanbul turkey',
    country: 'CANADA',
    flagCode: 'CA',
    treatmentTag: 'ALL ON 4',
    videoUrl: 'https://www.youtube.com/embed/OsM5_-n4eVk',
  },
  {
    id: '8MwrRzptHmE',
    img: 'https://sohodent.com/doc/data1/file1_1759311575_5_37176.webp',
    alt: 'All on 4 Dental Implants turkey teeth reviews',
    country: 'IRELAND',
    flagCode: 'IE',
    treatmentTag: 'ALL ON 4',
    videoUrl: 'https://www.youtube.com/embed/8MwrRzptHmE',
  },
  {
    id: 'Xv8t87S3fYc',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1759311366_5_94704.webp',
    alt: 'dental clinic in istanbul turkey',
    country: 'GERMANY',
    flagCode: 'DE',
    treatmentTag: 'VENEERS',
    videoUrl: 'https://www.youtube.com/embed/Xv8t87S3fYc',
  },
  {
    id: 'uv-khYYkkZA',
    img: 'https://sohodent.com/doc/data1/file1_1759311305_5_95428.webp',
    alt: 'dental venners in turkey reviews',
    country: 'UK',
    flagCode: 'GB',
    treatmentTag: 'VENEERS',
    videoUrl: 'https://www.youtube.com/embed/uv-khYYkkZA',
  },
  {
    id: 'bPXzjg-wpKI',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755588698_5_52166.jpg.webp',
    alt: 'best dental clinic in istanbul turkey',
    country: 'USA',
    flagCode: 'US',
    treatmentTag: 'SMILE DESIGN',
    videoUrl: 'https://www.youtube.com/embed/bPXzjg-wpKI',
  },
  {
    id: 'tdCKtqvHJ7U',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755081722_1_73994.jpg.webp',
    alt: 'dental implants in turkey reviews',
    country: 'AUSTRALIA',
    flagCode: 'AU',
    treatmentTag: 'IMPLANTS',
    videoUrl: 'https://www.youtube.com/embed/tdCKtqvHJ7U',
  },
  {
    id: 'b0YHZLx7ECs',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755588902_5_40011.jpg.webp',
    alt: 'best dental clinic in istanbul turkey',
    country: 'NETHERLANDS',
    flagCode: 'NL',
    treatmentTag: 'ALL ON 6',
    videoUrl: 'https://www.youtube.com/embed/b0YHZLx7ECs',
  },
  {
    id: 'eXtvLUH6AqY',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755081789_1_32522.jpg.webp',
    alt: 'best dental clinic in istanbul turkey',
    country: 'SWITZERLAND',
    flagCode: 'CH',
    treatmentTag: 'IMPLANTS',
    videoUrl: 'https://www.youtube.com/embed/eXtvLUH6AqY',
  },
  {
    id: 'qBKcNXTbGes',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755081831_1_18363.jpg.webp',
    alt: 'sisli dental clinic',
    country: 'BELGIUM',
    flagCode: 'BE',
    treatmentTag: 'HOLLYWOOD SMILE',
    videoUrl: 'https://www.youtube.com/embed/qBKcNXTbGes',
  },
  {
    id: 'd3_F0CHENkE',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755588818_5_55069.jpg.webp',
    alt: 'implant dental clinic in istanbul',
    country: 'NORWAY',
    flagCode: 'NO',
    treatmentTag: 'IMPLANTS',
    videoUrl: 'https://www.youtube.com/embed/d3_F0CHENkE',
  },
  {
    id: 'MDWycyZKHvM',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755081938_1_22370.jpg.webp',
    alt: 'turkish teeth',
    country: 'SWEDEN',
    flagCode: 'SE',
    treatmentTag: 'ZIRCONIA',
    videoUrl: 'https://www.youtube.com/embed/MDWycyZKHvM',
  },
  {
    id: 'cICmXcEKLYQ',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755081957_1_84184.jpg.webp',
    alt: 'best dental clinics in turkey',
    country: 'UK',
    flagCode: 'GB',
    treatmentTag: 'ALL ON 4',
    videoUrl: 'https://www.youtube.com/embed/cICmXcEKLYQ',
  },
  {
    id: 'qQCyVll-CKw',
    img: 'https://sohodent.com/doc/data1/pr1_file1_1755081988_1_32009.jpg.webp',
    alt: 'dental implant clinics in istanbul',
    country: 'USA',
    flagCode: 'US',
    treatmentTag: 'FULL MOUTH',
    videoUrl: 'https://www.youtube.com/embed/qQCyVll-CKw',
  },
];

const I18N_TEXTS: Record<
  string,
  {
    heading: string;
    subtitle: string;
    happyPatient: string;
    fromPrefix: string;
    toSuffix: string;
  }
> = {
  tr: {
    heading: 'Gerçek Hastalar. Gerçek Gülüşler.',
    subtitle:
      'Uluslararası hastalarımızın samimi dönüşüm yolculuklarını, zarif gülüş tasarımlarını ve Master Smile Studio anlarını keşfedin. Onların hikayeleri sizinkine ilham olsun.',
    happyPatient: 'MUTLU HASTA',
    fromPrefix: '',
    toSuffix: "'DEN MASTER SMILE'A",
  },
  en: {
    heading: 'Real Patients. Real Smiles.',
    subtitle:
      'Explore the journey of our international patients through authentic visuals, elegant transformations, and moments captured inside Master Smile Studio. Let their stories inspire your own.',
    happyPatient: 'HAPPY PATIENT',
    fromPrefix: 'FROM ',
    toSuffix: ' TO STUDIO',
  },
  de: {
    heading: 'Echte Patienten. Echtes Lächeln.',
    subtitle:
      'Entdecken Sie die Reise unserer internationalen Patienten durch authentische Aufnahmen, elegante Verwandlungen und Momente im Master Smile Studio.',
    happyPatient: 'GLÜCKLICHER PATIENT',
    fromPrefix: 'AUS ',
    toSuffix: ' ZU MASTER SMILE',
  },
  pl: {
    heading: 'Prawdziwi Pacjenci. Prawdziwe Uśmiechy.',
    subtitle:
      'Poznaj historie naszych międzynarodowych pacjentów, spektakularne metamorfozy i chwile uwiecznione w Master Smile Studio.',
    happyPatient: 'ZADOWOLONY PACJENT',
    fromPrefix: 'Z ',
    toSuffix: ' DO MASTER SMILE',
  },
  pt: {
    heading: 'Pacientes Reais. Sorrisos Reais.',
    subtitle:
      'Descubra a jornada dos nossos pacientes internacionais através de transformações autênticas e momentos capturados na Master Smile Studio.',
    happyPatient: 'PACIENTE FELIZ',
    fromPrefix: 'DE ',
    toSuffix: ' PARA O STUDIO',
  },
  es: {
    heading: 'Pacientes Reales. Sonrisas Reales.',
    subtitle:
      'Explore el viaje de nuestros pacientes internacionales a través de imágenes auténticas y transformaciones logradas en Master Smile Studio.',
    happyPatient: 'PACIENTE FELIZ',
    fromPrefix: 'DE ',
    toSuffix: ' AL STUDIO',
  },
  ru: {
    heading: 'Реальные Пациенты. Реальные Улыбки.',
    subtitle:
      'Познакомьтесь с историями наших зарубежных пациентов, элегантными преображениями и моментами в Master Smile Studio.',
    happyPatient: 'СЧАСТЛИВЫЙ ПАЦИЕНТ',
    fromPrefix: 'ИЗ ',
    toSuffix: ' В MASTER SMILE',
  },
};

function renderCountryFlag(flagCode: string) {
  switch (flagCode) {
    case 'AU':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="60" height="30" fill="#00008b" />
          <path d="M0,0 L24,12 M24,0 L0,12" stroke="#fff" strokeWidth="2.5" />
          <path d="M0,0 L24,12 M24,0 L0,12" stroke="#cc0000" strokeWidth="1.5" />
          <path d="M12,0 V12 M0,6 H24" stroke="#fff" strokeWidth="4" />
          <path d="M12,0 V12 M0,6 H24" stroke="#cc0000" strokeWidth="2" />
          <circle cx="45" cy="8" r="1.5" fill="#fff" />
          <circle cx="50" cy="12" r="1.5" fill="#fff" />
          <circle cx="45" cy="18" r="1.5" fill="#fff" />
          <circle cx="40" cy="13" r="1.5" fill="#fff" />
          <circle cx="46.5" cy="14.5" r="0.8" fill="#fff" />
          <circle cx="12" cy="22" r="3" fill="#fff" />
        </svg>
      );
    case 'US':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="60" height="30" fill="#bf0a30" />
          <path d="M0,2.3 H60 M0,6.9 H60 M0,11.5 H60 M0,16.1 H60 M0,20.7 H60 M0,25.3 H60" stroke="#fff" strokeWidth="2.3" />
          <rect width="24" height="16.1" fill="#002868" />
          <circle cx="6" cy="4" r="1.2" fill="#fff" />
          <circle cx="12" cy="4" r="1.2" fill="#fff" />
          <circle cx="18" cy="4" r="1.2" fill="#fff" />
          <circle cx="9" cy="8" r="1.2" fill="#fff" />
          <circle cx="15" cy="8" r="1.2" fill="#fff" />
          <circle cx="6" cy="12" r="1.2" fill="#fff" />
          <circle cx="12" cy="12" r="1.2" fill="#fff" />
          <circle cx="18" cy="12" r="1.2" fill="#fff" />
        </svg>
      );
    case 'DE':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="60" height="10" y="0" fill="#000000" />
          <rect width="60" height="10" y="10" fill="#dd0000" />
          <rect width="60" height="10" y="20" fill="#ffce00" />
        </svg>
      );
    case 'FR':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="20" height="30" x="0" fill="#002654" />
          <rect width="20" height="30" x="20" fill="#ffffff" />
          <rect width="20" height="30" x="40" fill="#ce1126" />
        </svg>
      );
    case 'GB':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="3" />
          <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 V30 M0,15 H60" stroke="#c8102e" strokeWidth="6" />
        </svg>
      );
    case 'CA':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="15" height="30" x="0" fill="#ff0000" />
          <rect width="30" height="30" x="15" fill="#ffffff" />
          <rect width="15" height="30" x="45" fill="#ff0000" />
          <polygon points="30,7 32,13 36,12 33,16 35,21 30,19 25,21 27,16 24,12 28,13" fill="#ff0000" />
        </svg>
      );
    case 'IE':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="20" height="30" x="0" fill="#169b62" />
          <rect width="20" height="30" x="20" fill="#ffffff" />
          <rect width="20" height="30" x="40" fill="#ff883e" />
        </svg>
      );
    case 'NL':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="60" height="10" y="0" fill="#ae1c28" />
          <rect width="60" height="10" y="10" fill="#ffffff" />
          <rect width="60" height="10" y="20" fill="#21468b" />
        </svg>
      );
    case 'CH':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="60" height="30" fill="#d52b1e" />
          <rect width="7" height="18" x="26.5" y="6" fill="#ffffff" />
          <rect width="18" height="7" x="21" y="11.5" fill="#ffffff" />
        </svg>
      );
    case 'BE':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="20" height="30" x="0" fill="#000000" />
          <rect width="20" height="30" x="20" fill="#ffd90c" />
          <rect width="20" height="30" x="40" fill="#ed2939" />
        </svg>
      );
    case 'NO':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="60" height="30" fill="#ba0c2f" />
          <path d="M20,0 V30 M0,15 H60" stroke="#ffffff" strokeWidth="6" />
          <path d="M20,0 V30 M0,15 H60" stroke="#00205b" strokeWidth="3" />
        </svg>
      );
    case 'SE':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="60" height="30" fill="#006aa7" />
          <path d="M20,0 V30 M0,15 H60" stroke="#fecc00" strokeWidth="5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
          <rect width="60" height="30" fill="#0c1b4d" />
        </svg>
      );
  }
}

export default function TreatmentPatientReelsSection() {
  const locale = useLocale();
  const texts = I18N_TEXTS[locale] || I18N_TEXTS.en;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -480 : 480;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section aria-labelledby="patient-reels-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header 2-Column Row */}
        <div className={styles.head}>
          <div>
            <h2 id="patient-reels-heading" className={styles.heading}>
              {texts.heading}
            </h2>
          </div>
          <div>
            <p className={styles.subtitle}>{texts.subtitle}</p>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className={styles.sliderOuter}>
          <div ref={sliderRef} className={styles.sliderTrack}>
            {PATIENT_REELS.map((item, idx) => {
              const ribbonText = `${texts.fromPrefix}${item.country}${texts.toSuffix}`;
              return (
                <div
                  key={idx}
                  className={styles.card}
                  onClick={() => setActiveVideo(item.videoUrl)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Watch patient story from ${item.country}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveVideo(item.videoUrl);
                    }
                  }}
                >
                  {/* Left Vertical Ribbon */}
                  <div className={styles.leftRibbon}>
                    <span className={styles.ribbonText}>{ribbonText}</span>
                  </div>

                  {/* Right Content Area */}
                  <div className={styles.rightContent}>
                    {/* Country Flag */}
                    <div className={styles.flagWrap}>{renderCountryFlag(item.flagCode)}</div>

                    {/* Happy Patient Label */}
                    <p className={styles.happyPatientText}>{texts.happyPatient}</p>

                    {/* Photo Frame */}
                    <div className={styles.photoFrame}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        className={styles.patientImg}
                      />

                      {/* YouTube Play Icon Badge */}
                      <div className={styles.playBadge}>
                        <svg viewBox="0 0 68 48" width="48" height="34">
                          <path
                            d="M66.52 7.74c-.78-2.93-3.09-5.24-6.02-6.02C55.23 0 34 0 34 0S12.77 0 7.5 1.72c-2.93.78-5.24 3.09-6.02 6.02C0 13.01 0 24 0 24s0 10.99 1.48 16.26c.78 2.93 3.09 5.24 6.02 6.02C12.77 48 34 48 34 48s21.23 0 26.5-1.72c2.93-.78 5.24-3.09 6.02-6.02C68 34.99 68 24 68 24s0-10.99-1.48-16.26z"
                            fill="#FF0000"
                          />
                          <polygon points="27,34 45,24 27,14" fill="#FFFFFF" />
                        </svg>
                      </div>
                    </div>

                    {/* Treatment Tag */}
                    <div className={styles.treatmentTagWrap}>
                      <span className={styles.treatmentTag}>{item.treatmentTag}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons Row */}
        <div className={styles.navRow}>
          <button
            type="button"
            onClick={() => scrollSlider('left')}
            className={styles.navBtn}
            aria-label="Previous patient reels"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollSlider('right')}
            className={styles.navBtn}
            aria-label="Next patient reels"
          >
            ›
          </button>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setActiveVideo(null)}
              aria-label="Close video player"
            >
              ✕
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="Patient Transformation Video"
              className={styles.modalIframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
