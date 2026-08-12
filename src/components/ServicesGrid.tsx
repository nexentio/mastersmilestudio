'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ServicesGrid() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'smileDesign',
      image: '/smile-makeover.jpg',
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
      image: '/mastersmilestudio_1784465233_3944702579575983298_70887948899.jpg',
    },
    {
      key: 'whitening',
      image: '/teeth-whiting-treatment.jpeg',
    },
    {
      key: 'rootCanal',
      image: '/mastersmilestudio_1784098986_3941630290953391467_70887948899.jpg',
    },
    {
      key: 'dentures',
      image: '/mastersmilestudio_1783158972_3933743875695538963_70887948899.jpg',
    },
    {
      key: 'bonding',
      image: '/mastersmilestudio_1781430682_3919246906335743176_70887948899.jpg',
    },
    {
      key: 'orthodontics',
      image: '/smile-makeover.jpg',
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

            return (
              <div
                key={item.key}
                style={{
                  aspectRatio: '1 / 1',
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: 'none',
                  padding: 0,
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
                {/* 100% Bright Background Image */}
                {item.image && (
                  <Image
                    src={item.image}
                    alt={title}
                    fill
                    className="card-bg-img"
                    style={{ objectFit: 'cover', zIndex: 0, transition: 'transform 0.4s ease' }}
                  />
                )}

                {/* Full-width Plain Black Box (60% opacity) for Text */}
                <span className="text">
                  <span className="text1">{title}</span>
                  <span className="text2">{description}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive Grid & Text Container Styles */}
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
        .service-square-card-light .text {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          position: relative;
          z-index: 2;
          background-color: rgba(0, 0, 0, 0.6);
          width: 100%;
          padding: 1.25rem 1.5rem;
          border-radius: 0 0 24px 24px;
          box-sizing: border-box;
          margin-top: auto;
        }
        .service-square-card-light .text1 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          display: block;
        }
        .service-square-card-light .text2 {
          font-size: 0.85rem;
          font-weight: 400;
          color: #f1f5f9;
          line-height: 1.5;
          display: block;
        }
      `}</style>
    </section>
  );
}
