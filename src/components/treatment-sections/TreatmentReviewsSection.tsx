'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import styles from './TreatmentReviewsSection.module.css';

export default function TreatmentReviewsSection() {
  const locale = useLocale();
  const [startIndex, setStartIndex] = useState(0);

  const reviews = [
    {
      author: 'Marcus Vance',
      country: 'United Kingdom',
      treatment: 'Full Mouth Implants',
      rating: 5,
      date: 'January 2025',
      comment:
        'Coming to Master Smile Studio from London was the best decision I ever made. Dr. Tülay and the entire surgical team were phenomenal. Zero pain, same-day fixed teeth, and I saved over £14,000.',
    },
    {
      author: 'Elena Schmidt',
      country: 'Germany',
      treatment: 'All-on-6 Implants',
      rating: 5,
      date: 'December 2024',
      comment:
        'Unglaubliche Erfahrung! Die Klinik ist moderner als alles in Frankfurt. Das 5-Sterne-Hotel und der VIP-Chauffeur machten die gesamte Reise so einfach. Meine neuen Zähne fühlen sich absolut natürlich an.',
    },
    {
      author: 'David O’Connor',
      country: 'Ireland',
      treatment: 'All-on-4 Implants',
      rating: 5,
      date: 'January 2025',
      comment:
        'I had severe bone loss in my upper jaw. Other clinics turned me away, but Master Smile Studio performed sinus lifting and All-on-4 with Swiss Straumann implants effortlessly. Life-changing!',
    },
    {
      author: 'Sarah Jenkins',
      country: 'United States',
      treatment: 'Smile Makeover & Implants',
      rating: 5,
      date: 'November 2024',
      comment:
        'Traveling from New York was seamless. The precision of the 3D digital smile design blew me away. I can finally chew steaks and smile in photos again without hesitation. Thank you!',
    },
    {
      author: 'Jean-Luc Moreau',
      country: 'France',
      treatment: 'Single Implants & Crowns',
      rating: 5,
      date: 'October 2024',
      comment:
        'Une équipe médicale d’un professionnalisme rare. De l’arrivée à l’aéroport jusqu’à la pose finale de mes couronnes en zircone, tout était impeccable. Merci pour votre bienveillance.',
    },
    {
      author: 'Katarzyna Kowalska',
      country: 'Poland',
      treatment: 'All-on-6 Implants',
      rating: 5,
      date: 'January 2025',
      comment:
        'Wspaniała klinika i wspaniali lekarze. Bałam się zabiegu, ale znieczulenie i opieka były na najwyższym światowym poziomie. Polecam każdemu z całego serca!',
    },
  ];

  const visibleCount = 3;
  const maxStart = Math.max(0, reviews.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  return (
    <section aria-labelledby="reviews-section-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div>
            <h2 id="reviews-section-heading" className={styles.heading}>
              {locale === 'tr' ? 'Her Gülüşün Bir Hikayesi Var' : 'Every Smile Has a Story'}
            </h2>
          </div>
          <div className={styles.subRow}>
            <p className={styles.subText}>
              {locale === 'tr'
                ? 'Kliniğimizde tedavi olan mutlu hastalarımızın gerçek Google ve Trustpilot deneyimleri.'
                : 'Real stories from real patients. Discover how our dedicated care and expert dentistry transformed smiles and lives.'}
            </p>
            <div className={styles.navBtnGroup}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.navCircleBtn}
                aria-label="Previous reviews"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                className={styles.navCircleBtn}
                aria-label="Next reviews"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.grid}>
          {reviews.slice(startIndex, startIndex + visibleCount).map((rev, idx) => (
            <article key={idx} className={styles.card} itemScope itemType="https://schema.org/Review">
              <div>
                <div className={styles.author} itemProp="author">
                  {rev.author}
                </div>
                <div className={styles.rating} aria-label={`${rev.rating} out of 5 stars`}>
                  ★★★★★
                </div>
                <p className={styles.comment} itemProp="reviewBody">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className={styles.footer}>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                  {rev.treatment}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {rev.country}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
