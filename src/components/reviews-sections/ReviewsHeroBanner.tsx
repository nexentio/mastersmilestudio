'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './ReviewsHeroBanner.module.css';

interface ReviewsHeroBannerProps {
  customTitle?: string;
  customSubtitle?: string;
  imageSrc?: string;
}

const REVIEWS_HERO_DATA: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'Master Smile Studio Reviews in Turkey, Istanbul',
    subtitle: 'Verified Patient Reviews on Google & Trustpilot for Implants, Veneers, Crowns, and Dentures',
  },
  tr: {
    title: 'Master Smile Studio Hasta Yorumları | İstanbul, Türkiye',
    subtitle: 'İmplant, Zirkonyum Kaplama, Lamine ve Protez Tedavileri İçin Doğrulanmış Google & Trustpilot Yorumları',
  },
  de: {
    title: 'Master Smile Studio Bewertungen in der Türkei, Istanbul',
    subtitle: 'Verifizierte Patientenbewertungen auf Google & Trustpilot für Implantate, Veneers, Kronen und Zahnersatz',
  },
  pl: {
    title: 'Opinie o Master Smile Studio w Turcji, Stambuł',
    subtitle: 'Zweryfikowane opinie pacjentów na Google i Trustpilot dotyczące implantów, licówek, koron i protez',
  },
  pt: {
    title: 'Avaliações do Master Smile Studio na Turquia, Istambul',
    subtitle: 'Avaliações verificadas de pacientes no Google e Trustpilot para implantes, facetas, coroas e próteses',
  },
  es: {
    title: 'Opiniones de Master Smile Studio en Turquía, Estambul',
    subtitle: 'Opiniones verificadas de pacientes en Google y Trustpilot para implantes, carillas, coronas y dentaduras',
  },
  ru: {
    title: 'Отзывы о Master Smile Studio в Турции, Стамбул',
    subtitle: 'Проверенные отзывы пациентов на Google и Trustpilot об имплантах, винирах, коронках и протезах',
  },
};

export default function ReviewsHeroBanner({
  customTitle,
  customSubtitle,
  imageSrc = '/reviews/reviews-hero-bg.webp',
}: ReviewsHeroBannerProps) {
  const locale = useLocale();
  const data = REVIEWS_HERO_DATA[locale] || REVIEWS_HERO_DATA.en;

  const title = customTitle || data.title;
  const subtitle = customSubtitle || data.subtitle;

  return (
    <section className={styles.sect20} aria-label="Patient Reviews Hero Banner">
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        sizes="100vw"
        className={styles.back1}
      />
      <div className={styles.content}>
        <h1 className={styles.text1}>{title}</h1>
        <p className={styles.text2}>{subtitle}</p>
      </div>
    </section>
  );
}
