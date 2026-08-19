'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './BrandsSection.module.css';

interface BrandLogo {
  id: string;
  name: string;
  png: string;
  width: number;
  height: number;
}

const BRANDS: BrandLogo[] = [
  {
    id: 'straumann',
    name: 'Straumann',
    png: '/brands/straumann.png',
    width: 3001,
    height: 676,
  },
  {
    id: 'nobel-biocare',
    name: 'Nobel Biocare',
    png: '/brands/nobel-biocare.png',
    width: 2989,
    height: 1297,
  },
  {
    id: 'zimmer-biomet',
    name: 'Zimmer Biomet',
    png: '/brands/zimmer-biomet.png',
    width: 3011,
    height: 562,
  },
  {
    id: 'dentsply-sirona',
    name: 'Dentsply Sirona',
    png: '/brands/dentsply-sirona.png',
    width: 1261,
    height: 554,
  },
  {
    id: 'biohorizons',
    name: 'BioHorizons',
    png: '/brands/biohorizons.png',
    width: 660,
    height: 178,
  },
  {
    id: 'mis-implants',
    name: 'MIS Implants',
    png: '/brands/mis-implants.png',
    width: 564,
    height: 319,
  },
  {
    id: 'astra-tech',
    name: 'Astra Tech',
    png: '/brands/astra-tech.png',
    width: 332,
    height: 345,
  },
  {
    id: 'neodent',
    name: 'Neodent',
    png: '/brands/neodent.png',
    width: 678,
    height: 204,
  },
  {
    id: 'osstem',
    name: 'Osstem Implant',
    png: '/brands/osstem.png',
    width: 810,
    height: 298,
  },
  {
    id: 'bicon',
    name: 'Bicon Dental',
    png: '/brands/bicon.png',
    width: 1723,
    height: 690,
  },
];

export default function BrandsSection() {
  const t = useTranslations('brands');

  const getSafeText = (key: string, fallback: string) => {
    try {
      return t.has(key as any) ? t(key as any) : fallback;
    } catch {
      return fallback;
    }
  };

  // Tripled array for seamless infinite marquee loop
  const marqueeItems = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section
      id="brands"
      className={styles.section}
      aria-label={getSafeText('title', 'World-Class Dental Implant & Material Partners')}
    >
      {/* Warm Ambient Glow Orb at Center */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* Header Container */}
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>
          {getSafeText('title', 'Dünya Standartlarında Dental İmplant & Materyal Ortakları')}
        </h2>

        <p className={styles.subtitle}>
          {getSafeText(
            'subtitle',
            'Polikliniğimizde kullanılan tüm implant ve kaplama sistemleri ömür boyu orijinal garanti sertifikalıdır.'
          )}
        </p>
      </div>

      {/* Pure Floating PNG Logos Marquee (No cards, no boxes, no text below) */}
      <div className={styles.marqueeWrapper} role="region" aria-label="Dental Implant Brands">
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className={styles.logoItem}
              title={brand.name}
            >
              <Image
                src={brand.png}
                alt={`${brand.name} Logo`}
                width={brand.width}
                height={brand.height}
                className={styles.logoImage}
                loading={idx < 10 ? 'eager' : 'lazy'}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


