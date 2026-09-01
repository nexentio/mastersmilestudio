'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './DentalImplantsHeroBanner.module.css';

import { DENTAL_IMPLANTS_HERO_I18N, DentalImplantsHeroData } from '@/data/implant-heroes-i18n';
export { DENTAL_IMPLANTS_HERO_I18N };
export type { DentalImplantsHeroData };

export default function DentalImplantsHeroBanner() {
  const locale = useLocale();
  const d = DENTAL_IMPLANTS_HERO_I18N[locale] || DENTAL_IMPLANTS_HERO_I18N.en;

  return (
    <div className={styles.sect20}>
      <Image
        src="/treatment-hero-bg.webp"
        alt={d.imageAlt}
        fill
        priority
        sizes="100vw"
        className={styles.back1}
      />
      <div className={styles.content}>
        <div className={styles.text1}>{d.tag}</div>
        <h1 className={styles.text2}>{d.title}</h1>
        {d.subtitle && <h4 className={styles.text3}>{d.subtitle}</h4>}

        {d.features && d.features.length > 0 && (
          <ul className={styles.featuresList}>
            {d.features.map((feature, idx) => (
              <li key={idx} className={styles.featureItem}>
                <svg
                  className={styles.featureIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.buton}>
          <Link
            href="#contact"
            className={styles.gototedaviform}
            aria-label={d.primaryBtnAria}
          >
            <span className={styles.xgrid}>
              <span className={`${styles.xgrids} ${styles.s1}`}>{d.primaryBtnText}</span>
              <span className={`${styles.xgrids} ${styles.s2}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </span>
          </Link>

          <a
            href="#packages"
            className={styles.secondaryBtn}
            aria-label={d.secondaryBtnAria}
          >
            <span>{d.secondaryBtnText}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
