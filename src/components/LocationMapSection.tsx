'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function LocationMapSection() {
  const t = useTranslations('home');

  const getSafeText = (key: string, fallback: string) => {
    return t.has(key as any) ? t(key as any) : fallback;
  };

  return (
    <section
      id="location-map"
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: 'clamp(3rem, 5vw, 4.5rem) 1.5rem',
        position: 'relative',
        borderTop: '1px solid #f1f5f9',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 320px' }}>
            {(() => {
              const fullTitle = getSafeText('map.title', 'Master Smile Studio — Closer Than You Think');
              const parts = fullTitle.split('—');
              return (
                <h2
                  style={{
                    fontSize: 'clamp(1.85rem, 4vw, 3.25rem)',
                    color: '#0f172a',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.12,
                    margin: 0,
                    fontFamily: 'inherit',
                  }}
                >
                  {parts.length > 1 ? (
                    <>
                      <span style={{ fontWeight: 800 }}>{parts[0]}— </span>
                      <span style={{ fontWeight: 300, color: '#334155' }}>{parts[1]}</span>
                    </>
                  ) : (
                    <span style={{ fontWeight: 700 }}>{fullTitle}</span>
                  )}
                </h2>
              );
            })()}
          </div>

          <div style={{ flex: '1 1 340px', maxWidth: '540px' }}>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                color: '#475569',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400,
                fontFamily: 'inherit',
              }}
            >
              {getSafeText(
                'map.subtitle',
                'Easily locate us on the map and take the first step toward world-class dental treatment in Antalya.'
              )}
            </p>
          </div>
        </div>

        {/* 2-Column Equal Grid Container (Patient Smiles Image + Interactive Google Map) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
          className="location-map-grid"
        >
          {/* Left Column: Patient Smiles Image */}
          <div
            style={{
              height: 'clamp(280px, 38vw, 450px)',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
              backgroundColor: '#09090b',
              border: '1px solid #e2e8f0',
            }}
          >
            <Image
              src="/mss-afterpics-patients.webp"
              alt="Master Smile Studio Patient Smiles"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              style={{ objectFit: 'cover' }}
              priority={false}
            />
          </div>

          {/* Right Column: Google Maps Embed Iframe */}
          <div
            style={{
              height: 'clamp(280px, 38vw, 450px)',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
              border: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25538.80833696955!2d30.73566964606144!3d36.85801542272848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39b68ac254dc9%3A0x2a34fa4a30ea77b2!2sMaster%20Smile%20Studio!5e0!3m2!1str!2str!4v1786796149799!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Master Smile Studio Google Maps Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
