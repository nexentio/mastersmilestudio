'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './ContactHeroBanner.module.css';

interface ContactHeroBannerProps {
  customTitle?: string;
  customSubtitle?: string;
  imageSrc?: string;
}

const HERO_DATA: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'It is very easy to contact us',
    subtitle: 'Bright Smiles @ Master Smile Studio - Antalya, Turkey',
  },
  tr: {
    title: 'Bizimle İletişime Geçmek Çok Kolay',
    subtitle: 'Işıltılı Gülüşler @ Master Smile Studio - Antalya, Türkiye',
  },
  de: {
    title: 'Es ist sehr einfach, uns zu kontaktieren',
    subtitle: 'Strahlendes Lächeln @ Master Smile Studio - Antalya, Türkei',
  },
  pl: {
    title: 'Bardzo łatwo się z nami skontaktować',
    subtitle: 'Promienny Uśmiech @ Master Smile Studio - Antalya, Turcja',
  },
  pt: {
    title: 'É muito fácil contactar-nos',
    subtitle: 'Sorrisos Brilhantes @ Master Smile Studio - Antalya, Turquia',
  },
  es: {
    title: 'Es muy fácil contactarnos',
    subtitle: 'Sonrisas Brillantes @ Master Smile Studio - Antalya, Turquía',
  },
  ru: {
    title: 'С нами очень легко связаться',
    subtitle: 'Сияющие Улыбки @ Master Smile Studio - Анталья, Турция',
  },
};

export default function ContactHeroBanner({
  customTitle,
  customSubtitle,
  imageSrc = '/contact-hero.jpeg',
}: ContactHeroBannerProps) {
  const locale = useLocale();
  const data = HERO_DATA[locale] || HERO_DATA.en;

  const title = customTitle || data.title;
  const subtitle = customSubtitle || data.subtitle;

  return (
    <section className={styles.sect20} aria-label="Contact Hero Banner">
      <Image
        src={imageSrc}
        alt={title}
        width={1600}
        height={615}
        priority
        className={styles.back1}
      />
      <div className={styles.content}>
        <h1 className={styles.text1}>{title}</h1>
        <div className={styles.text2}>{subtitle}</div>
      </div>
    </section>
  );
}
