'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';

export default function TreatmentPatientReelsSection() {
  const locale = useLocale();
  const [startIndex, setStartIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const reels = [
    {
      img: 'https://sohodent.com/doc/data1/file1_1765355633_1_11258.webp',
      alt: 'dental clinics istanbul',
      text: 'dental clinics istanbul',
      videoUrl: 'https://www.youtube.com/embed/v5XoXnDblWI',
    },
    {
      img: 'https://sohodent.com/doc/data1/pr1_file1_1765355500_1_76928.webp',
      alt: 'dental clinic in istanbul turkey',
      text: 'dental clinic in istanbul turkey',
      videoUrl: 'https://www.youtube.com/embed/F_ULWgBZhjY',
    },
    {
      img: 'https://sohodent.com/doc/data1/pr1_file1_1765355486_1_39145.webp',
      alt: 'dental clinic in turkey',
      text: 'dental clinic in turkey',
      videoUrl: 'https://www.youtube.com/embed/ZYMbU63b_PY',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1759311080_5_60786.webp',
      alt: 'dental turkey clinic',
      text: 'dental turkey clinic',
      videoUrl: 'https://www.youtube.com/embed/z_D8n4-FDSE',
    },
    {
      img: 'https://sohodent.com/doc/data1/pr1_file1_1755081916_1_59314.jpg.webp',
      alt: 'best dental clinic in istanbul',
      text: 'best dental clinic in istanbul',
      videoUrl: 'https://www.youtube.com/embed/GxYMgj02_2E',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1759311507_5_93842.webp',
      alt: 'best dental clinic in istanbul',
      text: 'best dental clinic in istanbul',
      videoUrl: 'https://www.youtube.com/embed/2aW6V37Jw7c',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1755085034_1_64321.jpg.webp',
      alt: 'dental clinic in istanbul turkey',
      text: 'dental clinic in istanbul turkey',
      videoUrl: 'https://www.youtube.com/embed/OsM5_-n4eVk',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1759311575_5_37176.webp',
      alt: 'All on 4 Dental Implants turkey teeth reviews',
      text: 'All on 4 Dental Implants turkey teeth reviews',
      videoUrl: 'https://www.youtube.com/embed/8MwrRzptHmE',
    },
    {
      img: 'https://sohodent.com/doc/data1/pr1_file1_1759311366_5_94704.webp',
      alt: 'dental clinic in istanbul turkey',
      text: 'dental clinic in istanbul turkey',
      videoUrl: 'https://www.youtube.com/embed/Xv8t87S3fYc',
    },
    {
      img: 'https://sohodent.com/doc/data1/file1_1759311305_5_95428.webp',
      alt: 'dental venners in turkey reviews',
      text: 'dental venners in turkey reviews',
      videoUrl: 'https://www.youtube.com/embed/uv-khYYkkZA',
    },
    {
      img: 'https://sohodent.com/doc/data1/pr1_file1_1755588698_5_52166.jpg.webp',
      alt: 'best dental clinic in istanbul turkey',
      text: 'best dental clinic in istanbul turkey',
      videoUrl: 'https://www.youtube.com/embed/bPXzjg-wpKI',
    },
    {
      img: 'https://sohodent.com/doc/data1/pr1_file1_1755081722_1_73994.jpg.webp',
      alt: 'dental implants in turkey reviews',
      text: 'dental implants in turkey reviews',
      videoUrl: 'https://www.youtube.com/embed/tdCKtqvHJ7U',
    },
  ];

  const visibleCount = 4;
  const maxStart = reels.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  return (
    <div className="treatment-reels-wrapper">
      <div className="treatment-container">
        {/* Head */}
        <div className="head mb-12">
          <div className="grid1 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="s s1">
              <h2 className="treatment-heading-title m-0">
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
                  onClick={handlePrev}
                  className="treatment-nav-circle-btn"
                  aria-label="Previous reels"
                >
                  ‹
                </button>
                <button
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
        <div className="treatment-reels-grid">
          {reels.slice(startIndex, startIndex + visibleCount).map((reel, idx) => (
            <div
              key={idx}
              onClick={() => setActiveVideo(reel.videoUrl)}
              className="treatment-reels-card"
            >
              <img
                src={reel.img}
                alt={reel.alt}
                loading="lazy"
              />
              <div className="treatment-reels-overlay">
                <div className="treatment-reels-play-badge">
                  <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                  </svg>
                </div>
                <div className="treatment-reels-text-badge">
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
          className="treatment-reels-modal"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="treatment-reels-modal-inner"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center font-bold text-lg hover:bg-black"
            >
              ✕
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="Patient Transformation Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
