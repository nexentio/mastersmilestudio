'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function TreatmentBeforeAfterSliderSection() {
  const locale = useLocale();
  const [activePage, setActivePage] = useState<number>(0);

  const cases = [
    {
      img: 'https://sohodent.com/doc/data1/all-on-six-istanbul-turkey26.webp',
      alt: 'All on 6 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-six-istanbul-turkey25.webp',
      alt: 'All on 6 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-4-istanbul-turkey-24.webp',
      alt: 'All on 4 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-4-istanbul-turkey22.webp',
      alt: 'All on 4 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-6-istanbul-turkey23.webp',
      alt: 'All on 6 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-4-istanbul-turkey21.webp',
      alt: 'All on 4 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-four-istanbul-turkey-27.webp',
      alt: 'All on 4 transformation Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/All-on-4-istanbul-turkey-20.webp',
      alt: 'All on 4 dental smile makeover',
    },
  ];

  const totalPages = Math.ceil(cases.length / 4);
  const visibleCases = cases.slice(activePage * 4, activePage * 4 + 4);

  const handlePrev = () => {
    if (activePage > 0) setActivePage(activePage - 1);
  };

  const handleNext = () => {
    if (activePage < totalPages - 1) setActivePage(activePage + 1);
  };

  return (
    <div className="treatment-transformation-wrapper">
      <div className="treatment-container relative">
        {/* Head */}
        <div className="treatment-transformation-head">
          <div>
            <h2 className="treatment-heading-navy">
              {locale === 'tr' ? (
                <>
                  İlk Ziyaretten<br />Son Gülüşe.
                </>
              ) : (
                <>
                  From First Visit to Final<br />Smile.
                </>
              )}
            </h2>
          </div>
          <div>
            <p className="treatment-text-p m-0">
              {locale === 'tr'
                ? 'Her dönüşümde yakalanan gerçek hasta hikayelerini keşfedin. Bunlar sadece gülüş değil — Master Smile Studio’da özen ve hassasiyetle kazanılan yepyeni bir özgüvendir.'
                : 'Explore real patient stories captured in every transformation. These are more than smiles — they are renewed confidence, achieved with care and precision at Master Smile Studio.'}
            </p>
          </div>
        </div>

        {/* Carousel Container with Left & Right Arrows */}
        <div className="relative mb-7">
          {/* Left Arrow (Only visible when activePage > 0) */}
          {activePage > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous cases"
              className="treatment-transformation-nav-btn prev"
            >
              ‹
            </button>
          )}

          {/* 4 Cards Grid Row */}
          <div className="treatment-transformation-grid">
            {visibleCases.map((c, idx) => (
              <div key={idx} className="treatment-transformation-card">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow (Visible when activePage < totalPages - 1) */}
          {activePage < totalPages - 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next cases"
              className="treatment-transformation-nav-btn next"
            >
              ›
            </button>
          )}
        </div>

        {/* Pagination Dots (Centered) */}
        <div className="treatment-transformation-dots">
          {Array.from({ length: totalPages }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setActivePage(dotIdx)}
              aria-label={`Slide page ${dotIdx + 1}`}
              className={`treatment-transformation-dot ${activePage === dotIdx ? 'active' : 'inactive'}`}
            />
          ))}
        </div>

        {/* View Gallery Button */}
        <div className="flex justify-end">
          <Link
            href="/gallery"
            className="treatment-btn-taupe"
          >
            {locale === 'tr' ? 'Galeriyi İncele' : 'View Gallery'}
          </Link>
        </div>
      </div>
    </div>
  );
}
