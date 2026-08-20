'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroVideo.module.css';

export default function HeroVideo() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.play().catch(() => {
        // Autoplay catch handler for strict browser policies
      });
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(() => {
        // Autoplay catch handler for strict browser policies
      });
    }
  }, []);

  return (
    <div className={styles.videoContainer}>
      {/* Desktop Video (Untouched) */}
      <video
        ref={desktopVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.videoDesktop}
        aria-hidden="true"
      >
        <source src="/mss-klinik-hero.webm" type="video/webm" />
        <source src="/mss-klinik-hero.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        ref={mobileVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.videoMobile}
        aria-hidden="true"
      >
        <source src="/mastersmilestudio-clinic-hero-video.mp4" type="video/mp4" />
      </video>

      {/* Distinct Dark Overlay Layer for Premium Contrast */}
      <div className={styles.overlayLayer} />
    </div>
  );
}
