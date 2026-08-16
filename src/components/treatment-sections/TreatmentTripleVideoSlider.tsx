'use client';

import React, { useState } from 'react';
import styles from './TreatmentTripleVideoSlider.module.css';

interface VideoItem {
  id: string;
  title?: string;
}

interface Props {
  videos?: VideoItem[];
}

export default function TreatmentTripleVideoSlider({
  videos = [
    { id: 'ZYMbU63b_PY', title: 'Dental Trauma Correction in Istanbul' },
    { id: 'Be2UTTeW5JI', title: 'Full-Mouth Extractions & Dental Implants' },
    { id: 'F_ULWgBZhjY', title: 'Full-Mouth All-on-6 After Extractions' },
  ],
}: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPlayingVideoId(null);
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPlayingVideoId(null);
    setCurrentIdx((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
  };

  const handleDotClick = (dotIdx: number) => {
    setPlayingVideoId(null);
    setCurrentIdx(dotIdx);
  };

  return (
    <div className={styles.wrapper}>
      {/* Desktop 3-Card Grid */}
      <div className={styles.desktopGrid}>
        {videos.map((vid, idx) => {
          const isPlaying = playingVideoId === vid.id;
          return (
            <div key={vid.id || idx} className={styles.card}>
              {isPlaying ? (
                <div className={styles.playerContainer}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${vid.id}?autoplay=1&playsinline=1&controls=1&rel=0&modestbranding=1`}
                    title={vid.title || `Dental Patient Reel ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.iframe}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setPlayingVideoId(null);
                    }}
                    className={styles.stopBtn}
                    aria-label="Stop video"
                    title="Stop and close video"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div
                  className={styles.thumbnailWrapper}
                  onClick={() => setPlayingVideoId(vid.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play ${vid.title || 'video'}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setPlayingVideoId(vid.id);
                    }
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                    alt={vid.title || 'Video Thumbnail'}
                    className={styles.thumbnailImg}
                    loading="lazy"
                  />
                  <div className={styles.playBadge}>
                    <svg viewBox="0 0 68 48" width="56" height="40">
                      <path
                        d="M66.52 7.74c-.78-2.93-3.09-5.24-6.02-6.02C55.23 0 34 0 34 0S12.77 0 7.5 1.72c-2.93.78-5.24 3.09-6.02 6.02C0 13.01 0 24 0 24s0 10.99 1.48 16.26c.78 2.93 3.09 5.24 6.02 6.02C12.77 48 34 48 34 48s21.23 0 26.5-1.72c2.93-.78 5.24-3.09 6.02-6.02C68 34.99 68 24 68 24s0-10.99-1.48-16.26z"
                        fill="#FF0000"
                      />
                      <polygon points="27,34 45,24 27,14" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Single Card Slider */}
      <div className={styles.mobileSlider}>
        <div className={styles.mobileCardWrapper}>
          {(() => {
            const currentVid = videos[currentIdx];
            const isPlaying = playingVideoId === currentVid.id;

            return (
              <div className={styles.card}>
                {isPlaying ? (
                  <div className={styles.playerContainer}>
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${currentVid.id}?autoplay=1&playsinline=1&controls=1&rel=0&modestbranding=1`}
                      title={currentVid.title || `Dental Patient Reel ${currentIdx + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.iframe}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setPlayingVideoId(null);
                      }}
                      className={styles.stopBtn}
                      aria-label="Stop video"
                      title="Stop and close video"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div
                    className={styles.thumbnailWrapper}
                    onClick={() => setPlayingVideoId(currentVid.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play ${currentVid.title || 'video'}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setPlayingVideoId(currentVid.id);
                      }
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${currentVid.id}/hqdefault.jpg`}
                      alt={currentVid.title || 'Video Thumbnail'}
                      className={styles.thumbnailImg}
                      loading="lazy"
                    />
                    <div className={styles.playBadge}>
                      <svg viewBox="0 0 68 48" width="56" height="40">
                        <path
                          d="M66.52 7.74c-.78-2.93-3.09-5.24-6.02-6.02C55.23 0 34 0 34 0S12.77 0 7.5 1.72c-2.93.78-5.24 3.09-6.02 6.02C0 13.01 0 24 0 24s0 10.99 1.48 16.26c.78 2.93 3.09 5.24 6.02 6.02C12.77 48 34 48 34 48s21.23 0 26.5-1.72c2.93-.78 5.24-3.09 6.02-6.02C68 34.99 68 24 68 24s0-10.99-1.48-16.26z"
                          fill="#FF0000"
                        />
                        <polygon points="27,34 45,24 27,14" fill="#FFFFFF" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        {/* Clean, Non-overlapping Mobile Controls Bar */}
        <div className={styles.mobileNavRow}>
          <button
            type="button"
            onClick={handlePrev}
            className={styles.arrowBtn}
            aria-label="Previous video"
          >
            ‹
          </button>

          {/* Dots */}
          <div className={styles.mobileDots}>
            {videos.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => handleDotClick(dotIdx)}
                aria-label={`Go to video ${dotIdx + 1}`}
                className={`${styles.dot} ${currentIdx === dotIdx ? styles.dotActive : styles.dotInactive}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className={`${styles.arrowBtn} ${styles.arrowBtnNext}`}
            aria-label="Next video"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
