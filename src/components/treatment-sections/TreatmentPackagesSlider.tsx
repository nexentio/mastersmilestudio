'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function TreatmentPackagesSlider() {
  const locale = useLocale();
  const [startIndex, setStartIndex] = useState(0);

  const packages = [
    {
      title: 'ALL-ON-4 IMPLANT PACKAGE – NUCLEOSS',
      img: 'https://sohodent.com/doc/static/paketler/1.jpg.webp',
      alt: 'All-on-4 Dental Implant Package – Nucleoss Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x NucleOSS (Turkish Brand) Dental Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$5,700',
      priceEUR: '€4,900',
      priceGBP: '£4,200',
    },
    {
      title: 'ALL-ON-4 IMPLANT PACKAGE – DXL GERMAN',
      img: 'https://sohodent.com/doc/static/paketler/2.jpg.webp',
      alt: 'All-on-4 Dental Implant Package – DXL German Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x DXL (German Brand) Dental Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$6,400',
      priceEUR: '€5,500',
      priceGBP: '£4,750',
    },
    {
      title: 'ALL-ON-4 IMPLANT PACKAGE – STRAUMANN',
      img: 'https://sohodent.com/doc/static/paketler/3.jpg.webp',
      alt: 'All-on-4 Dental Implant Package – Straumann Swiss Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x Straumann (Swiss Brand) Dental Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$9,300',
      priceEUR: '€8,000',
      priceGBP: '£6,900',
    },
    {
      title: 'ALL-ON-4 IMPLANT PACKAGE – MEGAGEN',
      img: 'https://sohodent.com/doc/data1/soho-paket-01-178350143919239.jpg.avif',
      alt: 'All-on-4 Dental Implant Package – Megagen Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x Megagen (Korean Brand) Dental Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$6,900',
      priceEUR: '€6,000',
      priceGBP: '£5,100',
    },
    {
      title: 'ALL-ON-4 IMPLANT PACKAGE – NEODENT',
      img: 'https://sohodent.com/doc/data1/soho-paket-03-178350147064002.jpg.webp',
      alt: 'All-on-4 Dental Implant Package – Neodent Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x Neodent (Brazilian Brand) Dental Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$8,400',
      priceEUR: '€7,300',
      priceGBP: '£6,300',
    },
    {
      title: 'ALL-ON-4 IMPLANT PACKAGE – HIOSSEN',
      img: 'https://sohodent.com/doc/data1/soho-paket-02-178350145524674.jpg.avif',
      alt: 'All-on-4 Dental Implant Package – Hiossen Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '4x Hiossen (USA Brand) Dental Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$7,900',
      priceEUR: '€6,800',
      priceGBP: '£5,850',
    },
    {
      title: 'ALL-ON-6 IMPLANT PACKAGE – NUCLEOSS',
      img: 'https://sohodent.com/doc/static/paketler/4.jpg.webp',
      alt: 'All-on-6 Dental Implant Package – Nucleoss Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x NucleOSS (Turkish Brand) Dental Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$6,900',
      priceEUR: '€6,000',
      priceGBP: '£5,150',
    },
    {
      title: 'ALL-ON-6 IMPLANT PACKAGE – DXL GERMAN',
      img: 'https://sohodent.com/doc/static/paketler/5.jpg.webp',
      alt: 'All-on-6 Dental Implant Package – DXL German Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x DXL (German Brand) Dental Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$7,800',
      priceEUR: '€6,750',
      priceGBP: '£5,800',
    },
    {
      title: 'ALL-ON-6 IMPLANT PACKAGE – STRAUMANN',
      img: 'https://sohodent.com/doc/static/paketler/6.jpg.webp',
      alt: 'All-on-6 Dental Implant Package – Straumann Swiss Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x Straumann (Swiss Brand) Dental Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$11,500',
      priceEUR: '€10,000',
      priceGBP: '£8,600',
    },
    {
      title: 'ALL-ON-6 IMPLANT PACKAGE – MEGAGEN',
      img: 'https://sohodent.com/doc/data1/soho-paket-01-178350143919239.jpg.avif',
      alt: 'All-on-6 Dental Implant Package – Megagen Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x Megagen (Korean Brand) Dental Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$8,400',
      priceEUR: '€7,300',
      priceGBP: '£6,300',
    },
    {
      title: 'ALL-ON-6 IMPLANT PACKAGE – NEODENT',
      img: 'https://sohodent.com/doc/data1/soho-paket-03-178350147064002.jpg.webp',
      alt: 'All-on-6 Dental Implant Package – Neodent Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x Neodent (Brazilian Brand) Dental Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$10,200',
      priceEUR: '€8,900',
      priceGBP: '£7,650',
    },
    {
      title: 'ALL-ON-6 IMPLANT PACKAGE – HIOSSEN',
      img: 'https://sohodent.com/doc/data1/soho-paket-02-178350145524674.jpg.avif',
      alt: 'All-on-6 Dental Implant Package – Hiossen Implants',
      duration: '3+7 Working Days (2 Visits)',
      included: [
        '6x Hiossen (USA Brand) Dental Implants',
        '12-14x Fixed Temporary Teeth',
        '12-14x Final Permanent Teeth',
        'Surgical planning (with CBCT)',
        'Local anesthesia',
        'Follow-up checks during stay',
        'Airport-hotel transfers',
        'Hotel Stay with Bed & Breakfast',
        'Laboratory Work',
      ],
      priceUSD: '$9,800',
      priceEUR: '€8,500',
      priceGBP: '£7,300',
    },
  ];

  const visibleCount = 3;
  const maxStart = packages.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  return (
    <div className="treatment-packages-slider-wrapper">
      <div className="treatment-container">
        {/* Header with Nav Buttons */}
        <div className="treatment-packages-carousel-header">
          <div>
            <h3 className="treatment-heading-title m-0">
              {locale === 'tr' ? 'Popüler İmplant Paketlerimiz' : 'Popular Implant Packages'}
            </h3>
            <p className="treatment-text-p mt-2 text-slate-500">
              {locale === 'tr'
                ? 'Her şey dahil her bütçeye uygun komple implant paketleri'
                : 'All-inclusive premium packages tailored for international patients'}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="treatment-nav-circle-btn"
              aria-label="Previous packages"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="treatment-nav-circle-btn"
              aria-label="Next packages"
            >
              ›
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="treatment-packages-grid">
          {packages.slice(startIndex, startIndex + visibleCount).map((pkg, idx) => (
            <div key={idx} className="treatment-package-item-card">
              <div>
                <h4 className="treatment-package-item-header">
                  {pkg.title}
                </h4>

                <div className="treatment-package-item-img-wrap">
                  <img
                    src={pkg.img}
                    alt={pkg.alt}
                    loading="lazy"
                  />
                </div>

                <div className="treatment-package-item-duration">
                  <span className="text-slate-500 font-medium">Duration:</span>
                  <span className="text-slate-900 font-bold">{pkg.duration}</span>
                </div>

                <div className="treatment-package-item-features-title">
                  Included in this package:
                </div>
                <ul className="treatment-package-item-features-list">
                  {pkg.included.map((inc, i) => (
                    <li key={i}>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="treatment-package-item-price-box">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    Package Price
                  </div>
                  <div className="text-2xl font-extrabold text-amber-400">
                    {pkg.priceUSD}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    ({pkg.priceEUR} / {pkg.priceGBP})
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="treatment-package-item-btn"
                >
                  {locale === 'tr' ? 'Fiyat Teklifi Al' : 'Get a Free Quote'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
