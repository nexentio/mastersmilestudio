'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function ServicesGrid() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'smileDesign',
      image: '/smile-makeover.jpg',
      href: '/treatments/cosmetic-dentistry/smile-makeover',
    },
    {
      key: 'implant',
      image: '/dental-implant-mss.jpeg',
      href: '/treatments/dental-implants',
    },
    {
      key: 'emax',
      image: '/e-max-lamine-treatment-mss.jpeg',
      href: '/treatments/dental-veneers/emax-veneers',
    },
    {
      key: 'zirconia',
      image: '/mastersmilestudio_1784465233_3944702579575983298_70887948899.jpg',
      href: '/treatments/dental-crowns/zirconium-crowns',
    },
    {
      key: 'whitening',
      image: '/teeth-whiting-treatment.jpeg',
      href: '/treatments/cosmetic-dentistry/teeth-whitening',
    },
    {
      key: 'rootCanal',
      image: '/mastersmilestudio_1784098986_3941630290953391467_70887948899.jpg',
      href: '/treatments/general-dentistry/root-canal',
    },
    {
      key: 'dentures',
      image: '/mastersmilestudio_1783158972_3933743875695538963_70887948899.jpg',
      href: '/treatments/dentures',
    },
    {
      key: 'bonding',
      image: '/mastersmilestudio_1781430682_3919246906335743176_70887948899.jpg',
      href: '/treatments/dental-veneers/composite-veneers',
    },
  ];

  return (
    <section
      id="treatments"
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: 'clamp(4rem, 6vw, 6rem) 1.5rem',
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
            gap: '2rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 300px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.85rem, 4.5vw, 3.25rem)',
                fontWeight: 400,
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
                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
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

        {/* Square Minimalist Cards Grid (Bottom 2 Cards Centered) */}
        <div className="services-3-col-grid">
          {services.map((item) => {
            const title = t(`${item.key}.title`);
            const description = t(`${item.key}.description`);

            return (
              <Link
                key={item.key}
                href={item.href}
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
                  textDecoration: 'none',
                }}
                className="service-square-card-light"
              >
                {/* 100% Bright Background Image */}
                {item.image && (
                  <Image
                    src={item.image}
                    alt={title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="card-bg-img"
                    style={{ objectFit: 'cover', zIndex: 0, transition: 'transform 0.4s ease' }}
                  />
                )}

                {/* Full-width Plain Black Box (60% opacity) for Text */}
                <span className="text">
                  <span className="text1">{title}</span>
                  <span className="text2">{description}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Responsive Grid & Text Container Styles */}
      <style jsx global>{`
        .services-3-col-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.75rem;
          width: 100%;
        }
        .services-3-col-grid .service-square-card-light {
          width: calc((100% - 3.5rem) / 3);
          flex: 0 0 calc((100% - 3.5rem) / 3);
          max-width: calc((100% - 3.5rem) / 3);
        }
        @media (max-width: 992px) {
          .services-3-col-grid {
            gap: 1.25rem !important;
          }
          .services-3-col-grid .service-square-card-light {
            width: calc((100% - 1.25rem) / 2) !important;
            flex: 0 0 calc((100% - 1.25rem) / 2) !important;
            max-width: calc((100% - 1.25rem) / 2) !important;
          }
        }
        @media (max-width: 768px) {
          .services-3-col-grid {
            display: flex !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 1rem !important;
            padding: 0.5rem 0.25rem 1.25rem 0.25rem !important;
            justify-content: flex-start !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          .services-3-col-grid::-webkit-scrollbar {
            display: none !important;
          }
          .services-3-col-grid .service-square-card-light {
            width: 82vw !important;
            max-width: 310px !important;
            flex: 0 0 82vw !important;
            aspect-ratio: 4 / 5 !important;
            scroll-snap-align: start !important;
            border-radius: 20px !important;
          }
          .service-square-card-light {
            border-radius: 20px !important;
          }
          .service-square-card-light .text {
            padding: 1rem 1.15rem !important;
            border-radius: 0 0 20px 20px !important;
          }
          .service-square-card-light .text1 {
            font-size: 1.15rem !important;
          }
          .service-square-card-light .text2 {
            font-size: 0.82rem !important;
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
