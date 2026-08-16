'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentPackagesSlider.module.css';

export default function TreatmentPackagesSlider() {
  const locale = useLocale();
  const [startIndex, setStartIndex] = useState(0);

  const packages = [
    {
      title: 'Full Jaw All on 4 Implant Package (Nucleoss)',
      img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
      alt: 'All on 4 Dental Implant Package Nucleoss Istanbul Turkey',
      duration: '4-5 Days',
      priceUSD: '$4,900',
      priceEUR: '€4,500',
      priceGBP: '£3,850',
      included: [
        '4 Nucleoss Dental Implants',
        'Fixed Temporary Teeth (Same Day)',
        'Final Hybrid/Zirconia Bridge',
        '5-Star Luxury Hotel (4 Nights)',
        'VIP Airport & Clinic Transfers',
        'Free Panoramic X-Ray & 3D CT Scan',
      ],
    },
    {
      title: 'Full Jaw All on 4 Implant Package (DXL)',
      img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
      alt: 'All on 4 Dental Implant Package DXL German Brand',
      duration: '4-5 Days',
      priceUSD: '$5,800',
      priceEUR: '€5,350',
      priceGBP: '£4,550',
      included: [
        '4 German DXL Titanium Implants',
        'Fixed Temporary Teeth',
        'Final High-Grade Zirconia Arch',
        '5-Star Luxury Hotel (4 Nights)',
        'VIP Airport & Clinic Transfers',
        'Free 3D Tomography & Consultation',
      ],
    },
    {
      title: 'Full Jaw All on 4 Implant Package (Straumann)',
      img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
      alt: 'All on 4 Dental Implant Package Straumann Swiss Brand',
      duration: '4-5 Days',
      priceUSD: '$7,600',
      priceEUR: '€7,000',
      priceGBP: '£5,950',
      included: [
        '4 Premium Swiss Straumann Implants',
        'Lifetime International Guarantee',
        'Fixed Temporary Prosthesis',
        'Final Custom Zirconia Bridge',
        '5-Star Luxury Hotel (4 Nights)',
        'VIP Airport & Clinic Chauffeur',
      ],
    },
    {
      title: 'Full Jaw All on 6 Implant Package (Nucleoss)',
      img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
      alt: 'All on 6 Dental Implant Package Nucleoss',
      duration: '5-6 Days',
      priceUSD: '$5,900',
      priceEUR: '€5,450',
      priceGBP: '£4,650',
      included: [
        '6 Nucleoss Dental Implants',
        'Maximum Stability 6-Point Support',
        'Fixed Temporary Teeth in 24h',
        'Final 12-14 Unit Zirconia Arch',
        '5-Star Luxury Hotel (5 Nights)',
        'VIP Chauffeur & Personal Host',
      ],
    },
    {
      title: 'Full Jaw All on 6 Implant Package (DXL)',
      img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
      alt: 'All on 6 Dental Implant Package DXL German Brand',
      duration: '5-6 Days',
      priceUSD: '$6,900',
      priceEUR: '€6,350',
      priceGBP: '£5,400',
      included: [
        '6 German DXL Titanium Implants',
        'Heavy Chewing Force Distribution',
        'Fixed Temporary & Final Zirconia Arch',
        '5-Star Luxury Hotel (5 Nights)',
        'VIP Airport & Clinic Transfers',
        'Lifetime Implant Guarantee',
      ],
    },
    {
      title: 'Full Jaw All on 6 Implant Package (Straumann)',
      img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
      alt: 'All on 6 Dental Implant Package Straumann Swiss Brand',
      duration: '5-6 Days',
      priceUSD: '$8,900',
      priceEUR: '€8,200',
      priceGBP: '£6,980',
      included: [
        '6 Swiss Straumann Roxolid Implants',
        'Official Swiss Straumann Passport',
        'Immediate Fixed Temporary Bridge',
        'Final Multi-Layered Zirconia Arch',
        '5-Star Luxury Hotel Suite (5 Nights)',
        'VIP Private Chauffeur Transfers',
      ],
    },
  ];

  const visibleCount = 3;
  const maxStart = Math.max(0, packages.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  return (
    <section aria-labelledby="packages-slider-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header with Side-by-Side Nav Buttons */}
        <div className={styles.carouselHeader}>
          <div className={styles.titleGroup}>
            <h2 id="packages-slider-heading" className={styles.heading}>
              {locale === 'tr' ? 'Popüler İmplant Paketlerimiz' : 'Popular Implant Packages'}
            </h2>
            <p className={styles.subText}>
              {locale === 'tr'
                ? 'Her şey dahil her bütçeye uygun komple implant paketleri'
                : 'All-inclusive premium packages tailored for international patients'}
            </p>
          </div>

          <div className={styles.navBtnGroup}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.navCircleBtn}
              aria-label="Previous packages"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className={styles.navCircleBtn}
              aria-label="Next packages"
            >
              ›
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className={styles.grid}>
          {packages.slice(startIndex, startIndex + visibleCount).map((pkg, idx) => (
            <article key={idx} className={styles.card}>
              <div>
                <h3 className={styles.header}>{pkg.title}</h3>

                <div className={styles.imgWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pkg.img} alt={pkg.alt} loading="lazy" />
                </div>

                <div className={styles.duration}>
                  <span className="text-slate-500 font-medium">Duration:</span>
                  <span className="text-slate-900 font-bold">{pkg.duration}</span>
                </div>

                <div className={styles.featuresTitle}>Included in this package:</div>
                <ul className={styles.featuresList}>
                  {pkg.included.map((inc, i) => (
                    <li key={i}>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className={styles.priceBox}>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    Package Price
                  </div>
                  <div className="text-2xl font-extrabold text-amber-400">{pkg.priceUSD}</div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    ({pkg.priceEUR} / {pkg.priceGBP})
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={styles.btn}
                  aria-label={`Get a free quote for ${pkg.title}`}
                >
                  {locale === 'tr' ? 'Fiyat Teklifi Al' : 'Get a Free Quote'}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
