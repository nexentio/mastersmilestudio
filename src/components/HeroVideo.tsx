'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroVideo.module.css';

export default function HeroVideo() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [desktopReady, setDesktopReady] = useState(false);
  const [mobileReady, setMobileReady] = useState(false);

  useEffect(() => {
    const desktopVideo = desktopVideoRef.current;
    const mobileVideo = mobileVideoRef.current;

    // Enforce DOM muted properties for strict browser autoplay policies
    if (desktopVideo) {
      desktopVideo.muted = true;
      desktopVideo.defaultMuted = true;
      desktopVideo.volume = 0;
    }
    if (mobileVideo) {
      mobileVideo.muted = true;
      mobileVideo.defaultMuted = true;
      mobileVideo.volume = 0;
    }

    const tryPlayAll = () => {
      if (desktopVideo && desktopVideo.paused) {
        desktopVideo
          .play()
          .then(() => setDesktopReady(true))
          .catch(() => {});
      }
      if (mobileVideo && mobileVideo.paused) {
        mobileVideo
          .play()
          .then(() => setMobileReady(true))
          .catch(() => {});
      }
    };

    tryPlayAll();

    const handleDesktopLoaded = () => {
      setDesktopReady(true);
      tryPlayAll();
    };
    const handleMobileLoaded = () => {
      setMobileReady(true);
      tryPlayAll();
    };

    desktopVideo?.addEventListener('loadeddata', handleDesktopLoaded);
    desktopVideo?.addEventListener('canplay', handleDesktopLoaded);
    desktopVideo?.addEventListener('playing', () => setDesktopReady(true));

    mobileVideo?.addEventListener('loadeddata', handleMobileLoaded);
    mobileVideo?.addEventListener('canplay', handleMobileLoaded);
    mobileVideo?.addEventListener('playing', () => setMobileReady(true));

    // Fallback user interaction handlers
    const handleUserInteraction = () => {
      tryPlayAll();
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };

    window.addEventListener('touchstart', handleUserInteraction, { passive: true, once: true });
    window.addEventListener('click', handleUserInteraction, { passive: true, once: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true, once: true });

    // Handle tab visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        tryPlayAll();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      desktopVideo?.removeEventListener('loadeddata', handleDesktopLoaded);
      desktopVideo?.removeEventListener('canplay', handleDesktopLoaded);
      mobileVideo?.removeEventListener('loadeddata', handleMobileLoaded);
      mobileVideo?.removeEventListener('canplay', handleMobileLoaded);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      {/* Desktop Fallback Poster (Instant display, no grey flicker) */}
      <img
        src="/hero-video-poster.webp"
        alt="Master Smile Studio Clinic"
        fetchPriority="high"
        decoding="async"
        className={styles.posterDesktop}
      />

      {/* Mobile Fallback Poster (Instant display, no grey flicker) */}
      <img
        src="/hero-video-poster-mobile.webp"
        alt="Master Smile Studio Clinic Mobile"
        fetchPriority="high"
        decoding="async"
        className={styles.posterMobile}
      />

      {/* Desktop Video Loop (FastStart H.264 / VP9 without audio track) */}
      <video
        ref={desktopVideoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        poster="/hero-video-poster.webp"
        className={styles.videoDesktop}
        aria-hidden="true"
        style={{ opacity: desktopReady ? 1 : 0.95 }}
      >
        <source src="/mss-klinik-hero.mp4" type="video/mp4" />
        <source src="/mss-klinik-hero.webm" type="video/webm" />
      </video>

      {/* Mobile Video Loop (Vertical 9:16 optimized for instant mobile buffer) */}
      <video
        ref={mobileVideoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        poster="/hero-video-poster-mobile.webp"
        className={styles.videoMobile}
        aria-hidden="true"
        style={{ opacity: mobileReady ? 1 : 0.95 }}
      >
        <source src="/mastersmilestudio-clinic-hero-video.mp4" type="video/mp4" />
      </video>

      {/* Luxury Dark Gradient Overlay for Maximum Text Contrast */}
      <div className={styles.overlayLayer} />
    </div>
  );
}
