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

const DEFAULT_TRIPLE_VIDEOS: VideoItem[] = [
  { id: 'WCLuaJnzIIE', title: 'Real Patient Smile Transformation' },
  { id: 'aMvF5sYOat8', title: 'VIP Patient Journey at Master Smile Studio' },
  { id: 'MH9kGw8FzwA', title: 'All-on-4 Dental Implants Patient Story' },
];

export default function TreatmentTripleVideoSlider({
  videos = DEFAULT_TRIPLE_VIDEOS,
}: Props) {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Strictly take 3 videos side-by-side
  const displayVideos = (videos && videos.length > 0 ? videos : DEFAULT_TRIPLE_VIDEOS).slice(0, 3);

  return (
    <div className={styles.wrapper}>
      {/* 3-Card Grid */}
      <div className={styles.desktopGrid}>
        {displayVideos.map((vid, idx) => {
          const isPlaying = playingVideoId === vid.id;
          return (
            <div key={vid.id || idx} className={styles.card}>
              {isPlaying ? (
                <div className={styles.playerContainer}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${vid.id}?autoplay=1&playsinline=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0`}
                    title={vid.title || `Dental Patient Reel ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                    src={`https://i.ytimg.com/vi/${vid.id}/maxresdefault.jpg`}
                    alt={vid.title || 'Video Thumbnail'}
                    className={styles.thumbnailImg}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to hqdefault if maxres is unavailable
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('hqdefault.jpg')) {
                        target.src = `https://i.ytimg.com/vi/${vid.id}/hqdefault.jpg`;
                      }
                    }}
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
    </div>
  );
}
