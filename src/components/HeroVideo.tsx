'use client';

import { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay catch handler for strict browser policies
      });
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          backgroundColor: '#09090b',
        }}
      >
        <source src="/mss-klinik-hero.webm" type="video/webm" />
        <source src="/mss-klinik-hero.mp4" type="video/mp4" />
      </video>

      {/* Distinct Dark Overlay Layer for Premium Contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.42) 50%, rgba(0, 0, 0, 0.55) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
