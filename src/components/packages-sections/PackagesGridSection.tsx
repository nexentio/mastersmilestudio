'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PACKAGES_DATA, PACKAGES_ADDITIONAL_INFO } from '@/data/packages-page-data';
import styles from './PackagesGridSection.module.css';

export default function PackagesGridSection() {
  const locale = useLocale();

  const getLocalized = (obj: Record<string, string> | undefined) => {
    if (!obj) return '';
    return obj[locale] || obj.en || obj.tr || '';
  };

  const infoText = {
    en: 'Reach Out to Us - Quickly and Easily',
    tr: 'Bize Ulaşın - Hızlı ve Kolay',
    de: 'Kontaktieren Sie uns - Schnell und einfach',
    pl: 'Skontaktuj się z nami - Szybko i wygodnie',
    pt: 'Contacte-nos - Rápido e fácil',
    es: 'Contáctenos - Rápido y fácil',
    ru: 'Свяжитесь с нами - Быстро и удобно',
  };

  return (
    <section className={styles.standardCenter4} aria-label="Turkey Teeth Dental Packages">
      <div className={styles.sect30}>
        {PACKAGES_DATA.map((group) => (
          <div key={group.id} className={styles.cat}>
            <h2 className={styles.cattitle}>
              <span className={styles.catIcon}>➤</span>
              <span>{getLocalized(group.categoryTitle)}</span>
            </h2>

            <div className={styles.grid}>
              {group.packages.map((pkg) => (
                <div key={pkg.id} className={styles.s}>
                  <div>
                    {/* Package Head Title */}
                    <h3 className={styles.head}>{getLocalized(pkg.head)}</h3>

                    {/* Image Cover */}
                    <div className={styles.cover}>
                      <Image
                        src={pkg.imageSrc}
                        alt={pkg.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                        className={styles.coverImg}
                      />
                    </div>

                    {/* Treatment Duration */}
                    <div className={styles.text1}>
                      <span className={styles.text1x1}>{getLocalized(pkg.durationLabel)}</span>
                      <span className={styles.text1x2}>{getLocalized(pkg.durationValue)}</span>
                    </div>

                    {/* Inclusions Title */}
                    <div className={styles.baslik1}>{getLocalized(pkg.includedTitle)}</div>

                    {/* Inclusions List */}
                    <div className={styles.text2}>
                      <ul>
                        {pkg.inclusions.map((item, idx) => (
                          <li key={idx}>{getLocalized(item)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {/* Bottom Clinical Note */}
                    <div className={styles.text3}>{getLocalized(pkg.note)}</div>

                    {/* Prices Grid */}
                    <div className={styles.fiyatlar}>
                      <div className={styles.fiyatgrid}>
                        <div>{pkg.usd}</div>
                        <div>{pkg.eur}</div>
                        <div>{pkg.gbp}</div>
                      </div>
                      <div className={styles.fiyatinfo}>{infoText[locale as keyof typeof infoText] || infoText.en}</div>
                    </div>

                    {/* Action Button */}
                    <div className={styles.buton}>
                      <Link href="#js_target1" className={styles.ctaLink}>
                        <span>{getLocalized(pkg.ctaText)}</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 1:1 Packages Additional Information / Terms List */}
        <ul className={styles.paketlerEkbilgi} aria-label="Package Terms and Clinical Information">
          {PACKAGES_ADDITIONAL_INFO.map((item, idx) => (
            <li key={idx}>{getLocalized(item)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
