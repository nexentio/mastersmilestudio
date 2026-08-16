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
    subtitle: 'Master Smile Studio in Istanbul offers premium Turkey teeth packages and dental treatments for your perfect smile',
  },
  tr: {
    title: 'Türkiye Diş Tedavi Paketleri | İstanbul VIP Diş Paketleri',
    subtitle: 'Master Smile Studio ile kusursuz bir gülüş için her şey dahil VIP diş turizmi ve tedavi paketleri',
  },
  de: {
    title: 'Zahnbehandlungspakete in der Türkei | Zahn-Pakete in Istanbul',
    subtitle: 'Master Smile Studio in Istanbul bietet erstklassige All-Inclusive-Zahnpakete für Ihr perfektes Lächeln',
  },
  pl: {
    title: 'Pakiety Stomatologiczne w Turcji | Pakiety Dentystyczne w Stambule',
    subtitle: 'Master Smile Studio w Stambule oferuje pakiety stomatologiczne premium dla Twojego idealnego uśmiechu',
  },
  pt: {
    title: 'Pacotes Dentários na Turquia | Pacotes de Tratamento em Istambul',
    subtitle: 'O Master Smile Studio em Istambul oferece pacotes dentários premium para o seu sorriso perfeito',
  },
  es: {
    title: 'Paquetes Dentales en Turquía | Paquetes de Tratamientos en Estambul',
    subtitle: 'Master Smile Studio en Estambul ofrece paquetes dentales premium para su sonrisa perfecta',
  },
  ru: {
    title: 'Пакеты стоматологического лечения в Турции | VIP пакеты в Стамбуле',
    subtitle: 'Master Smile Studio в Стамбуле предлагает премиальные пакеты стоматологического лечения «все включено»',
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
