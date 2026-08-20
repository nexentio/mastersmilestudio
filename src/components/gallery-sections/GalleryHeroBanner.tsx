'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './GalleryHeroBanner.module.css';

interface GalleryHeroBannerProps {
  customTitle?: string;
  customSubtitle?: string;
  imageSrc?: string;
}

const GALLERY_HERO_DATA: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'General Clinic Gallery',
    subtitle: 'Explore our state-of-the-art dental clinic, luxury treatment suites, and modern technology in Antalya',
  },
  tr: {
    title: 'Klinik Genel Galerisi',
    subtitle: "Antalya'daki son teknoloji VIP diş kliniğimiz, dinlenme alanlarımız ve modern tedavi ünitelerimiz",
  },
  de: {
    title: 'Allgemeine Klinikgalerie',
    subtitle: 'Entdecken Sie unsere hochmoderne Zahnklinik, luxuriösen Behandlungsräume und innovative Technologie in Antalya',
  },
  pl: {
    title: 'Ogólna Galeria Kliniki',
    subtitle: 'Zobacz naszą ultranowoczesną klinikę stomatologiczną, luksusowe gabinety i zaawansowaną technologię w Antalyi',
  },
  pt: {
    title: 'Galeria Geral da Clínica',
    subtitle: 'Explore a nossa clínica dentária de última geração, suites de tratamento VIP e tecnologia avançada em Antalya',
  },
  es: {
    title: 'Galería General de la Clínica',
    subtitle: 'Explore nuestra clínica dental de última generación, salas de tratamiento VIP y tecnología moderna en Antalya',
  },
  ru: {
    title: 'Общая галерея клиники',
    subtitle: 'Познакомьтесь с нашей ультрасовременной стоматологической клиникой, VIP-кабинетами и передовым оборудованием в Анталье',
  },
};

export default function GalleryHeroBanner({
  customTitle,
  customSubtitle,
  imageSrc = '/master-smile-studio-interior.webp',
}: GalleryHeroBannerProps) {
  const locale = useLocale();
  const data = GALLERY_HERO_DATA[locale] || GALLERY_HERO_DATA.en;

  const title = customTitle || data.title;
  const subtitle = customSubtitle !== undefined ? customSubtitle : data.subtitle;

  return (
    <section className={styles.sect20} aria-label="Clinic General Gallery Hero Banner">
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
        {subtitle && <p className={styles.text2}>{subtitle}</p>}
      </div>
    </section>
  );
}
