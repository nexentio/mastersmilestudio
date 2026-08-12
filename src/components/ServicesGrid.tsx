'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ServicesGrid() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'smileDesign',
    },
    {
      key: 'implant',
      image: '/dental-implant-mss.jpeg',
    },
    {
      key: 'emax',
      image: '/e-max-lamine-treatment-mss.jpeg',
    },
    {
      key: 'zirconia',
    },
    {
      key: 'whitening',
    },
    {
      key: 'rootCanal',
    },
    {
      key: 'dentures',
    },
    {
      key: 'bonding',
    },
    {
      key: 'orthodontics',
    },
  ];

  return (
    <section
      id="treatments"
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: '6rem 1.5rem',
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
        {/* Section Header (Asymmetric Left-Right Layout) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2.5rem',
            marginBottom: '4.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 300px' }}>
            <h2
              style={{
                fontSize: '3.25rem',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {t('title')}
            </h2>
          </div>

          <div style={{ flex: '1 1 360px', maxWidth: '520px' }}>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 450,
              }}
            >
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* 9 Square Minimalist Cards Grid */}
        <div
          className="services-3-col-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}
        >
          {services.map((item) => {
            const title = t(`${item.key}.title`);
            const description = t(`${item.key}.description`);
            const hasBgImage = Boolean(item.image);

            return (
              <div
                key={item.key}
                style={{
                  aspectRatio: '1 / 1',
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: hasBgImage ? 'none' : '1px solid #e2e8f0',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                }}
                className="service-square-card-light"
              >
                {/* Full Card Background Image */}
                {item.image && (
                  <>
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      className="card-bg-img"
                      style={{ objectFit: 'cover', zIndex: 0, transition: 'transform 0.4s ease' }}
                    />
                    {/* Dark Overlay Filter (Fades out on Hover for full image clarity) */}
                    <div
                      className="card-dark-overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.15) 0%, rgba(15, 23, 42, 0.85) 100%)',
                        zIndex: 1,
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                  </>
                )}

                {/* Bottom Content: Title + Description */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: hasBgImage ? '#ffffff' : '#0f172a',
                      marginBottom: '0.6rem',
                      lineHeight: 1.3,
                      textShadow: hasBgImage ? '0 2px 8px rgba(0,0,0,0.5)' : 'none',
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: hasBgImage ? '#f1f5f9' : '#475569',
                      lineHeight: 1.55,
                      margin: 0,
                      textShadow: hasBgImage ? '0 1px 4px rgba(0,0,0,0.5)' : 'none',
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive Grid & Hover Animations */}
      <style jsx global>{`
        .services-3-col-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 992px) {
          .services-3-col-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-3-col-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .service-square-card-light:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 35px -10px rgba(15, 23, 42, 0.15) !important;
        }
        .service-square-card-light:hover .card-bg-img {
          transform: scale(1.06);
        }
        .service-square-card-light:hover .card-dark-overlay {
          opacity: 0.2 !important;
        }
      `}</style>
    </section>
  );
}
