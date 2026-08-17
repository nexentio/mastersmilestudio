'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './CosmeticPackagesSliderSection.module.css';

interface PackageDictionary {
  headTitle: string;
  headSub: string;
}

const PKG_I18N: Record<string, PackageDictionary> = {
  en: {
    headTitle: 'Treatment Packages',
    headSub:
      'Master Smile Studio in Istanbul offers premium packages with dental treatments for your perfect smile',
  },
  tr: {
    headTitle: 'Tedavi Paketleri',
    headSub:
      'İstanbul Master Smile Studio, kusursuz gülüşünüz için her şey dahil ayrıcalıklı estetik tedavi paketleri sunar',
  },
  de: {
    headTitle: 'Behandlungspakete',
    headSub:
      'Master Smile Studio in Istanbul bietet erstklassige Komplettpakete für Ihr perfektes Lächeln',
  },
  pl: {
    headTitle: 'Pakiety Zabiegowe',
    headSub:
      'Master Smile Studio w Stambule oferuje ekskluzywne pakiety stomatologiczne dla Twojego idealnego uśmiechu',
  },
  pt: {
    headTitle: 'Pacotes de Tratamento',
    headSub:
      'O Master Smile Studio em Istambul oferece pacotes premium com tratamentos dentários para o seu sorriso perfeito',
  },
  es: {
    headTitle: 'Paquetes de Tratamiento',
    headSub:
      'Master Smile Studio en Estambul ofrece paquetes exclusivos con tratamientos dentales para su sonrisa ideal',
  },
  ru: {
    headTitle: 'Пакеты Лечения',
    headSub:
      'Master Smile Studio в Стамбуле предлагает премиальные пакеты стоматологического лечения «Все включено»',
  },
};

const PACKAGE_CARDS = [
  {
    src: '/images/packages/Zirconium-Crown-Package-2.jpg',
    alt: '24 Zirconium Crowns Package',
    href: '/packages',
  },
  {
    src: '/images/packages/E-Max-Veneer-package-2.jpg.webp',
    alt: '12 E-Max Veneers Package',
    href: '/packages',
  },
  {
    src: '/images/packages/Zirconium-Crown-Package-3.jpg',
    alt: '28 Zirconium Crowns Package',
    href: '/packages',
  },
  {
    src: '/images/packages/Zirconium-Crown-Package-1.jpg',
    alt: '20 Zirconium Crowns Package',
    href: '/packages',
  },
  {
    src: '/images/packages/Porcelain-Crown-Package-3.jpg',
    alt: 'Porcelain Crown Package 3',
    href: '/packages',
  },
  {
    src: '/images/packages/Porcelain-Crown-Package-2.jpg',
    alt: 'Porcelain Crown Package 2',
    href: '/packages',
  },
  {
    src: '/images/packages/Porcelain-Crown-Package-1.jpg',
    alt: 'Porcelain Crown Package 1',
    href: '/packages',
  },
  {
    src: '/images/packages/E-Max-Veneer-package-4.jpg.webp',
    alt: '24 E-Max Veneers Package',
    href: '/packages',
  },
  {
    src: '/images/packages/E-Max-Veneer-package-3.jpg.webp',
    alt: '20 E-Max Veneers Package',
    href: '/packages',
  },
  {
    src: '/images/packages/E-Max-Veneer-package-1.jpg.webp',
    alt: '16 E-Max Veneers Package',
    href: '/packages',
  },
];

export default function CosmeticPackagesSliderSection() {
  const locale = useLocale();
  const d = PKG_I18N[locale] || PKG_I18N.en;
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.firstElementChild?.clientWidth || 320;
    const offset = direction === 'left' ? -cardWidth - 16 : cardWidth + 16;
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className={styles.sectpaket1} aria-label={d.headTitle}>
      <div className={styles.standard_center4}>
        <div className={styles.head}>
          <div className={styles.grid1}>
            <div className={styles.headS1}>{d.headTitle}</div>
            <div className={styles.headS2}>{d.headSub}</div>
          </div>
        </div>

        <div className={styles.sliderContainer}>
          <div ref={trackRef} className={styles.sliderTrack}>
            {PACKAGE_CARDS.map((pkg, idx) => (
              <Link key={idx} href={pkg.href} className={styles.packageCard}>
                <div className={styles.imageWrap}>
                  <Image
                    src={pkg.src}
                    alt={pkg.alt}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 992px) 48vw, 380px"
                    className={styles.packageImg}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.navControls}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scroll('left')}
              aria-label="Previous package"
            >
              ◀
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scroll('right')}
              aria-label="Next package"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
