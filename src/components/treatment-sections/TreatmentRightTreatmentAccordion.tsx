'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentRightTreatmentAccordion.module.css';

export default function TreatmentRightTreatmentAccordion() {
  const t = useTranslations('services');
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const treatments = [
    {
      title: t('rightTreatment.items.fullMouth.title'),
      target: t('rightTreatment.items.fullMouth.target'),
      desc: t('rightTreatment.items.fullMouth.desc'),
      img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
      href: '/treatments/dental-implants/full-mouth-implants',
    },
    {
      title: t('rightTreatment.items.allOn4.title'),
      target: t('rightTreatment.items.allOn4.target'),
      desc: t('rightTreatment.items.allOn4.desc'),
      img: 'https://sohodent.com/doc/data1/all-on-4-copy.webp',
      href: '/treatments/dental-implants/all-on-4-implants',
    },
    {
      title: t('rightTreatment.items.allOn6.title'),
      target: t('rightTreatment.items.allOn6.target'),
      desc: t('rightTreatment.items.allOn6.desc'),
      img: 'https://sohodent.com/doc/data1/all-on-six-copy.webp',
      href: '/treatments/dental-implants/all-on-6-implants',
    },
    {
      title: t('rightTreatment.items.immediate.title'),
      target: t('rightTreatment.items.immediate.target'),
      desc: t('rightTreatment.items.immediate.desc'),
      img: 'https://sohodent.com/doc/data1/immediate-copy.webp',
      href: '/treatments/dental-implants/immediate-implant-treatment',
    },
    {
      title: t('rightTreatment.items.zygomatic.title'),
      target: t('rightTreatment.items.zygomatic.target'),
      desc: t('rightTreatment.items.zygomatic.desc'),
      img: 'https://sohodent.com/doc/data1/zygomatic-implant-copy.webp',
      href: '/treatments/dental-implants/zygomatic-implants',
    },
    {
      title: t('rightTreatment.items.zirconium.title'),
      target: t('rightTreatment.items.zirconium.target'),
      desc: t('rightTreatment.items.zirconium.desc'),
      img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
      href: '/treatments/dental-implants/zirconium-implants',
    },
    {
      title: t('rightTreatment.items.dentures.title'),
      target: t('rightTreatment.items.dentures.target'),
      desc: t('rightTreatment.items.dentures.desc'),
      img: 'https://sohodent.com/doc/data1/implant-supported-dentures-copy.webp',
      href: '/treatments/dental-implants/implant-supported-dentures',
    },
    {
      title: t('rightTreatment.items.sinusLifting.title'),
      target: t('rightTreatment.items.sinusLifting.target'),
      desc: t('rightTreatment.items.sinusLifting.desc'),
      img: 'https://sohodent.com/doc/data1/sinus-lifting-copy.webp',
      href: '/treatments/dental-implants/sinus-lifting',
    },
  ];

  return (
    <section aria-labelledby="right-treatment-heading" className={styles.section}>
      <div className={styles.container}>
        {/* Head 2-Column Row */}
        <div className={styles.headerRow}>
          <div>
            <h2 id="right-treatment-heading" className={styles.heading}>
              {t('rightTreatment.heading')}
            </h2>
          </div>
          <div>
            <p className={styles.subText}>
              {t('rightTreatment.subtitle')}
            </p>
          </div>
        </div>

        {/* Center Rounded Surface Card */}
        <div className={styles.surfaceCard}>
          <div className={styles.grid}>
            {/* Left Column: Accordion List */}
            <div className={styles.accordionList}>
              {treatments.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                  >
                    {/* Title Bar */}
                    <div
                      className={styles.titleRow}
                      onClick={() => setActiveIdx(isActive ? -1 : idx)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveIdx(isActive ? -1 : idx);
                        }
                      }}
                    >
                      <div className={styles.textGroup}>
                        <span className={styles.titleText}>{item.title}</span>
                        <span className={styles.targetText}>{item.target}</span>
                      </div>

                      {/* Chevron Icon */}
                      <span className={`${styles.chevron} ${isActive ? styles.chevronActive : ''}`}>
                        <svg width="15" height="15" viewBox="0 0 448 512" fill="currentColor">
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                        </svg>
                      </span>
                    </div>

                    {/* Expanded Content */}
                    {isActive && (
                      <div className={styles.contentBox}>
                        <p className={styles.descText}>{item.desc}</p>

                        {/* Mobile Image (shown on small screens) */}
                        <div className={styles.mobileImgWrap}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            width="600"
                            height="369"
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                          />
                        </div>

                        {/* Read More Button */}
                        <div className={styles.btnWrap}>
                          <Link
                            className={styles.btn}
                            href={item.href}
                            aria-label={`Read more about ${item.title}`}
                          >
                            {t('rightTreatment.readMore')}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Preview Image (Desktop) */}
            <div className={styles.stickyPreview}>
              {activeIdx >= 0 && treatments[activeIdx] && (
                <Link
                  href={treatments[activeIdx].href}
                  className={styles.previewCard}
                  aria-label={`Explore ${treatments[activeIdx].title}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width="600"
                    height="369"
                    src={treatments[activeIdx].img}
                    alt={treatments[activeIdx].title}
                    loading="lazy"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
