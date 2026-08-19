'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './PackagesHeroBanner.module.css';

interface PackagesHeroBannerProps {
  customTitle?: string;
  customSubtitle?: string;
  imageSrc?: string;
}

const PACKAGES_HERO_DATA: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'Turkey Teeth Packages | Dental Packages in Turkey',
    subtitle: 'Master Smile Studio in Antalya offers premium Turkey teeth packages and dental treatments for your perfect smile',
  },
  tr: {
    title: 'Türkiye Diş Tedavi Paketleri | Antalya VIP Diş Paketleri',
    subtitle: 'Master Smile Studio ile kusursuz bir gülüş için her şey dahil VIP diş turizmi ve tedavi paketleri',
  },
  de: {
    title: 'Zahnbehandlungspakete in der Türkei | Zahn-Pakete in Antalya',
    subtitle: 'Master Smile Studio in Antalya bietet erstklassige All-Inclusive-Zahnpakete für Ihr perfektes Lächeln',
  },
  pl: {
    title: 'Pakiety Stomatologiczne w Turcji | Pakiety Dentystyczne w Antalyi',
    subtitle: 'Master Smile Studio w Antalyi oferuje pakiety stomatologiczne premium dla Twojego idealnego uśmiechu',
  },
  pt: {
    title: 'Pacotes Dentários na Turquia | Pacotes de Tratamento em Antalya',
    subtitle: 'O Master Smile Studio em Antalya oferece pacotes dentários premium para o seu sorriso perfeito',
  },
  es: {
    title: 'Paquetes Dentales en Turquía | Paquetes de Tratamientos en Antalya',
    subtitle: 'Master Smile Studio en Antalya ofrece paquetes dentales premium para su sonrisa perfecta',
  },
  ru: {
    title: 'Пакеты стоматологического лечения в Турции | VIP пакеты в Анталье',
    subtitle: 'Master Smile Studio в Анталье предлагает премиальные пакеты стоматологического лечения «все включено»',
  },
};

export default function PackagesHeroBanner({
  customTitle,
  customSubtitle,
  imageSrc = '/prices-hero-bg.webp',
}: PackagesHeroBannerProps) {
  const locale = useLocale();
  const data = PACKAGES_HERO_DATA[locale] || PACKAGES_HERO_DATA.en;

  const title = customTitle || data.title;
  const subtitle = customSubtitle || data.subtitle;

  return (
    <section className={styles.sect20} aria-label="Turkey Teeth Packages Hero Banner">
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
