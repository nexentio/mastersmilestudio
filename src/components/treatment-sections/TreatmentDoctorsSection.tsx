'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentDoctorsSection.module.css';

interface DoctorData {
  title: string;
  name: string;
  role: string;
  img: string;
  href: string;
}

interface DoctorsSectionI18n {
  heading: string;
  doctors: DoctorData[];
}

const DOCTORS_I18N: Record<string, DoctorsSectionI18n> = {
  en: {
    heading: 'OUR DENTISTS',
    doctors: [
      {
        title: 'Dt.',
        name: 'Fırat İskender',
        role: 'Oral & Maxillofacial Surgeon',
        img: '/team/firat-iskender.webp',
        href: '/about',
      },
      {
        title: 'Dr.',
        name: 'Ozan Öztürk',
        role: 'Prosthodontist & Aesthetic Dentist',
        img: '/team/ozan-ozturk.webp',
        href: '/about',
      },
    ],
  },
  tr: {
    heading: 'UZMAN DOKTORLARIMIZ',
    doctors: [
      {
        title: 'Dt.',
        name: 'Fırat İskender',
        role: 'Çene Cerrahisi Uzmanı',
        img: '/team/firat-iskender.webp',
        href: '/about',
      },
      {
        title: 'Dr.',
        name: 'Ozan Öztürk',
        role: 'Protez Diş Uzmanı',
        img: '/team/ozan-ozturk.webp',
        href: '/about',
      },
    ],
  },
  de: {
    heading: 'UNSERE ZAHNÄRZTE',
    doctors: [
      {
        title: 'Dt.',
        name: 'Fırat İskender',
        role: 'Mund-, Kiefer- und Gesichtschirurg',
        img: '/team/firat-iskender.webp',
        href: '/about',
      },
      {
        title: 'Dr.',
        name: 'Ozan Öztürk',
        role: 'Spezialist für Prothetik und Ästhetische Zahnmedizin',
        img: '/team/ozan-ozturk.webp',
        href: '/about',
      },
    ],
  },
  pl: {
    heading: 'NASI LEKARZE',
    doctors: [
      {
        title: 'Lek. stom.',
        name: 'Fırat İskender',
        role: 'Chirurg Szczękowo-Twarzowy',
        img: '/team/firat-iskender.webp',
        href: '/about',
      },
      {
        title: 'Dr n. med.',
        name: 'Ozan Öztürk',
        role: 'Protetyk i Lekarz Stomatologii Estetycznej',
        img: '/team/ozan-ozturk.webp',
        href: '/about',
      },
    ],
  },
  pt: {
    heading: 'NOSSOS DENTISTAS',
    doctors: [
      {
        title: 'Dt.',
        name: 'Fırat İskender',
        role: 'Cirurgião Oral e Maxilofacial',
        img: '/team/firat-iskender.webp',
        href: '/about',
      },
      {
        title: 'Dr.',
        name: 'Ozan Öztürk',
        role: 'Especialista em Prótese e Estética Dentária',
        img: '/team/ozan-ozturk.webp',
        href: '/about',
      },
    ],
  },
  es: {
    heading: 'NUESTROS DENTISTAS',
    doctors: [
      {
        title: 'Dt.',
        name: 'Fırat İskender',
        role: 'Cirujano Maxilofacial',
        img: '/team/firat-iskender.webp',
        href: '/about',
      },
      {
        title: 'Dr.',
        name: 'Ozan Öztürk',
        role: 'Especialista en Prótesis y Estética Dental',
        img: '/team/ozan-ozturk.webp',
        href: '/about',
      },
    ],
  },
  ru: {
    heading: 'НАШИ ВРАЧИ',
    doctors: [
      {
        title: 'Врач',
        name: 'Fırat İskender',
        role: 'Челюстно-лицевой хирург и имплантолог',
        img: '/team/firat-iskender.webp',
        href: '/about',
      },
      {
        title: 'Д-р',
        name: 'Ozan Öztürk',
        role: 'Врач-ортопед и эстетический стоматолог',
        img: '/team/ozan-ozturk.webp',
        href: '/about',
      },
    ],
  },
};

export default function TreatmentDoctorsSection() {
  const locale = useLocale();
  const current = DOCTORS_I18N[locale] || DOCTORS_I18N.en;
  const [activeDoctorIdx, setActiveDoctorIdx] = useState(0);

  const handlePrev = () => {
    setActiveDoctorIdx((prev) => (prev > 0 ? prev - 1 : current.doctors.length - 1));
  };

  const handleNext = () => {
    setActiveDoctorIdx((prev) => (prev < current.doctors.length - 1 ? prev + 1 : 0));
  };

  return (
    <section aria-labelledby="section-doctors-title" className={styles.wrapper}>
      <div className={styles.container}>
        <h2 id="section-doctors-title" className={styles.heading}>
          {current.heading}
        </h2>

        {/* Desktop 2-Card Grid */}
        <div className={styles.desktopGrid}>
          {current.doctors.map((doc, idx) => (
            <Link key={idx} href={doc.href} className={styles.linkWrapper}>
              <div className={styles.card}>
                <div className={styles.imgWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doc.img}
                    alt={`${doc.title} ${doc.name}`}
                    loading="lazy"
                  />
                </div>
                <div className={styles.info}>
                  <span className={styles.badge}>{doc.title}</span>
                  <strong className={styles.name}>{doc.name}</strong>
                  <span className={styles.specialty}>{doc.role}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Single Slide Carousel */}
        <div className={styles.mobileSlider}>
          <div className={styles.carouselTrack}>
            {(() => {
              const doc = current.doctors[activeDoctorIdx];
              if (!doc) return null;
              return (
                <Link href={doc.href} className={styles.linkWrapper}>
                  <div className={styles.card}>
                    <div className={styles.imgWrap}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={doc.img}
                        alt={`${doc.title} ${doc.name}`}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.info}>
                      <span className={styles.badge}>{doc.title}</span>
                      <strong className={styles.name}>{doc.name}</strong>
                      <span className={styles.specialty}>{doc.role}</span>
                    </div>
                  </div>
                </Link>
              );
            })()}
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.navBtn}
              aria-label="Previous Doctor"
            >
              ‹
            </button>
            <div className={styles.dots}>
              {current.doctors.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveDoctorIdx(dotIdx)}
                  className={`${styles.dot} ${activeDoctorIdx === dotIdx ? styles.dotActive : ''}`}
                  aria-label={`Go to doctor ${dotIdx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className={styles.navBtn}
              aria-label="Next Doctor"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
