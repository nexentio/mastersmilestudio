'use client';

export default function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
      }}
    >
      <source src="/mss-klinik-hero.webm" type="video/webm" />
      <source src="/mss-klinik-hero.mp4" type="video/mp4" />
    </video>
  );
}
