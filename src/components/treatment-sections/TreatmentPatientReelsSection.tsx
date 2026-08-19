'use client';

import React, { useState } from 'react';
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
    id: 'WCLuaJnzIIE',
    img: '/patients/yt-WCLuaJnzIIE.webp',
    alt: 'Master Smile Studio Real Patient Smile Makeover Story Spain',
    country: 'SPAIN',
    flagCode: 'ES',
    treatmentTag: 'ALL ON 6 IMPLANTS',
    videoUrl: 'https://www.youtube.com/embed/WCLuaJnzIIE',
  },
  {
    id: 'aMvF5sYOat8',
    img: '/patients/yt-aMvF5sYOat8.webp',
    alt: 'Master Smile Studio Real Patient Smile Journey Ukraine',
    country: 'UKRAINE',
    flagCode: 'UA',
    treatmentTag: 'ALL ON 5 IMPLANTS',
    videoUrl: 'https://www.youtube.com/embed/aMvF5sYOat8',
  },
  {
    id: 'DqR0HlO5jXQ',
    img: '/patients/yt-DqR0HlO5jXQ.webp',
    alt: 'Master Smile Studio Hollywood Smile Transformation Poland',
    country: 'POLAND',
    flagCode: 'PL',
    treatmentTag: 'SMILE MAKEOVER',
    videoUrl: 'https://www.youtube.com/embed/DqR0HlO5jXQ',
  },
  {
    id: '4yx0H7YJYPI',
    img: '/patients/yt-4yx0H7YJYPI.webp',
    alt: 'Master Smile Studio Dental Patient Review Germany',
    country: 'GERMANY',
    flagCode: 'DE',
    treatmentTag: 'IMPLANTS & MAKEOVER',
    videoUrl: 'https://www.youtube.com/embed/4yx0H7YJYPI',
  },
  {
    id: 'MH9kGw8FzwA',
    img: '/patients/yt-MH9kGw8FzwA.webp',
    alt: 'Master Smile Studio All on 4 Transformation UK',
    country: 'UNITED KINGDOM',
    flagCode: 'GB',
    treatmentTag: 'ALL ON 4 IMPLANTS',
    videoUrl: 'https://www.youtube.com/embed/MH9kGw8FzwA',
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
    case 'ES':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg} preserveAspectRatio="none">
          <rect width="60" height="7.5" y="0" fill="#aa151b" />
          <rect width="60" height="15" y="7.5" fill="#f1bf00" />
          <rect width="60" height="7.5" y="22.5" fill="#aa151b" />
        </svg>
      );
    case 'UA':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg} preserveAspectRatio="none">
          <rect width="60" height="15" y="0" fill="#0057b7" />
          <rect width="60" height="15" y="15" fill="#ffd700" />
        </svg>
      );
    case 'PL':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg} preserveAspectRatio="none">
          <rect width="60" height="15" y="0" fill="#ffffff" />
          <rect width="60" height="15" y="15" fill="#dc143c" />
        </svg>
      );
    case 'DE':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg} preserveAspectRatio="none">
          <rect width="60" height="10" y="0" fill="#000000" />
          <rect width="60" height="10" y="10" fill="#dd0000" />
          <rect width="60" height="10" y="20" fill="#ffce00" />
        </svg>
      );
    case 'GB':
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg} preserveAspectRatio="none">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="3" />
          <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 V30 M0,15 H60" stroke="#c8102e" strokeWidth="6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 60 30" className={styles.flagSvg} preserveAspectRatio="none">
          <rect width="60" height="30" fill="#0c1b4d" />
        </svg>
      );
  }
}

export default function TreatmentPatientReelsSection() {
  const locale = useLocale();
  const texts = I18N_TEXTS[locale] || I18N_TEXTS.en;
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);

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

        {/* 5-Column Compact Videos Grid (10px Gap) */}
        <div className={styles.grid5}>
          {PATIENT_REELS.map((item, idx) => {
            const ribbonText = `${texts.fromPrefix}${item.country}${texts.toSuffix}`;
            const isPlaying = activePlayingId === item.id;

            return (
              <div
                key={idx}
                className={styles.card}
                onClick={() => {
                  if (!isPlaying) setActivePlayingId(item.id);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Watch patient story from ${item.country}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePlayingId(item.id);
                  }
                }}
              >
                {isPlaying ? (
                  <div className={styles.inlinePlayer}>
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&playsinline=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0`}
                      title={item.treatmentTag}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className={styles.iframe}
                    />
                    <button
                      type="button"
                      className={styles.closePlayerBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePlayingId(null);
                      }}
                      aria-label="Close video player"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Left Vertical Ribbon */}
                    <div className={styles.leftRibbon}>
                      <span className={styles.ribbonText}>{ribbonText}</span>
                    </div>

                    {/* Right Content Area */}
                    <div className={styles.rightContent}>
                      {/* Country Flag (Edge-to-Edge) */}
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
                          <svg viewBox="0 0 68 48" width="42" height="30">
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
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
