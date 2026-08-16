'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import styles from './TreatmentPatientReelsSection.module.css';

export default function TreatmentPatientReelsSection() {
  const locale = useLocale();
  const [startIndex, setStartIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const reels = [
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355633_1_11258.webp',
      alt: 'dental clinics istanbul',
      text: 'dental clinics istanbul',
      videoUrl: 'https://www.youtube.com/embed/ZYMbU63b_PY',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355648_1_11259.webp',
      alt: 'best dental clinic istanbul',
      text: 'best dental clinic istanbul',
      videoUrl: 'https://www.youtube.com/embed/Be2UTTeW5JI',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355673_1_11261.webp',
      alt: 'dentist turkey',
      text: 'dentist turkey',
      videoUrl: 'https://www.youtube.com/embed/F_ULWgBZhjY',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355661_1_11260.webp',
      alt: 'hollywood smile istanbul',
      text: 'hollywood smile istanbul',
      videoUrl: 'https://www.youtube.com/embed/smhwCD78Vbo',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355685_1_11262.webp',
      alt: 'implant turkey',
      text: 'implant turkey',
      videoUrl: 'https://www.youtube.com/embed/LR_r40rBzb4',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355700_1_11263.webp',
      alt: 'dental implants turkey',
      text: 'dental implants turkey',
      videoUrl: 'https://www.youtube.com/embed/ZYMbU63b_PY',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355712_1_11264.webp',
      alt: 'teeth implants turkey',
      text: 'teeth implants turkey',
      videoUrl: 'https://www.youtube.com/embed/Be2UTTeW5JI',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355724_1_11265.webp',
      alt: 'veneers in turkey',
      text: 'veneers in turkey',
      videoUrl: 'https://www.youtube.com/embed/F_ULWgBZhjY',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355737_1_11266.webp',
      alt: 'dentist in turkey',
      text: 'dentist in turkey',
      videoUrl: 'https://www.youtube.com/embed/smhwCD78Vbo',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355749_1_11267.webp',
      alt: 'dental clinic in istanbul',
      text: 'dental clinic in istanbul',
      videoUrl: 'https://www.youtube.com/embed/LR_r40rBzb4',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355762_1_11268.webp',
      alt: 'turkey dental clinic',
      text: 'turkey dental clinic',
      videoUrl: 'https://www.youtube.com/embed/ZYMbU63b_PY',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355776_1_11269.webp',
      alt: 'teeth clinic turkey',
      text: 'teeth clinic turkey',
      videoUrl: 'https://www.youtube.com/embed/Be2UTTeW5JI',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355787_1_11270.webp',
      alt: 'dental implant clinic istanbul',
      text: 'dental implant clinic istanbul',
      videoUrl: 'https://www.youtube.com/embed/F_ULWgBZhjY',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355799_1_11271.webp',
      alt: 'smile makeover istanbul',
      text: 'smile makeover istanbul',
      videoUrl: 'https://www.youtube.com/embed/smhwCD78Vbo',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355811_1_11272.webp',
      alt: 'best dentist in turkey',
      text: 'best dentist in turkey',
      videoUrl: 'https://www.youtube.com/embed/LR_r40rBzb4',
    },
  ];

  const visibleCount = 5;
  const maxStart = reels.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  return (
    <section aria-labelledby="reels-section-heading" className={styles.wrapper}>
      <div className="treatment-container">
        {/* Head */}
        <div className="head mb-12">
          <div className="grid1 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="s s1">
              <h2 id="reels-section-heading" className="treatment-heading-title m-0">
                {locale === 'tr' ? 'Gerçek Hastalar. Gerçek Gülüşler.' : 'Real Patients. Real Smiles.'}
              </h2>
            </div>
            <div className="s s2 flex justify-between items-center gap-4">
              <p className="treatment-text-p m-0 text-slate-500">
                {locale === 'tr'
                  ? 'Master Smile Studio kliniğimizdeki uluslararası hastalarımızın dönüşüm yolculuklarına ve anlarına göz atın.'
                  : 'Explore the journey of our international patients through authentic visuals, elegant transformations, and moments captured inside Master Smile Studio. Let their stories inspire your own.'}
              </p>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="treatment-nav-circle-btn"
                  aria-label="Previous reels"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="treatment-nav-circle-btn"
                  aria-label="Next reels"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reels Grid */}
        <div className={styles.grid}>
          {reels.slice(startIndex, startIndex + visibleCount).map((reel, idx) => (
            <div
              key={idx}
              onClick={() => setActiveVideo(reel.videoUrl)}
              className={styles.card}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveVideo(reel.videoUrl);
              }}
              aria-label={`Play patient story video: ${reel.text}`}
            >
              <img
                src={reel.img}
                alt={reel.alt}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <div className={styles.playBadge}>
                  <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                  </svg>
                </div>
                <div className={styles.textBadge}>
                  {reel.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className={styles.modal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles.modalInner}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center font-bold text-lg hover:bg-black"
              aria-label="Close video modal"
            >
              ✕
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="Patient Transformation Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
