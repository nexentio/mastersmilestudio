'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PatientsSection() {
  const t = useTranslations('home');
  const [startIndex, setStartIndex] = useState(0);

  const reviews = [
    {
      id: 'card1',
      fallbackName: 'Sarah Jenkins',
      fallbackCountry: '🇬🇧 United Kingdom',
      fallbackTreatment: 'Full Hollywood Smile',
      fallbackQuote: 'The Master Smile Studio team gave me a smile far more natural and stunning than I ever imagined.',
    },
    {
      id: 'card2',
      fallbackName: 'Markus Weber',
      fallbackCountry: '🇩🇪 Germany',
      fallbackTreatment: 'Zirconia Crowns',
      fallbackQuote: 'World-class dental treatment in 5-star hotel luxury at a fraction of German costs.',
    },
    {
      id: 'card3',
      fallbackName: 'Elena Rostova',
      fallbackCountry: '🇷🇺 Russia',
      fallbackTreatment: 'E-max Porcelain Veneers',
      fallbackQuote: 'From day one, the care, hospitality, and digital smile preview were absolutely flawless.',
    },
    {
      id: 'card4',
      fallbackName: 'Sophie Martin',
      fallbackCountry: '🇫🇷 France',
      fallbackTreatment: 'Implants & Whitening',
      fallbackQuote: 'Painless, fast, and remarkably aesthetic results. My new smile restored my self-confidence completely.',
    },
    {
      id: 'card5',
      fallbackName: 'David Miller',
      fallbackCountry: '🇺🇸 USA',
      fallbackTreatment: 'Zirconium Smile Makeover',
      fallbackQuote: 'I experienced high-end technology and luxury dental tourism comfort in Antalya that I could not find back home.',
    },
    {
      id: 'card6',
      fallbackName: 'Anna Kowalska',
      fallbackCountry: '🇵🇱 Poland',
      fallbackTreatment: 'All-on-4 Dental Implants',
      fallbackQuote: 'The entire process was managed professionally from start to finish. Now I can smile with full confidence.',
    },
  ];

  const visibleCardsCount = 4;
  const maxIndex = Math.max(0, reviews.length - visibleCardsCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCardsCount);

  const getSafeText = (key: string, fallback: string) => {
    return t.has(key as any) ? t(key as any) : fallback;
  };

  return (
    <section
      id="patients"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 22%, #FFA552 50%, #FFA552 100%)',
        color: '#0f172a',
        padding: '6rem 1.5rem 7rem 1.5rem',
        position: 'relative',
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
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2.5rem',
            marginBottom: '4.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 320px' }}>
            {/* Top Badge: #FCDE9C Champagne Gold Accent */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#FCDE9C',
                color: '#1c1917',
                fontSize: '0.85rem',
                fontWeight: 750,
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                marginBottom: '1.25rem',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
              }}
            >
              <span style={{ color: '#d97706', fontSize: '1rem' }}>★</span>
              <span>{getSafeText('patients.badge', 'Happy Patient Experiences')}</span>
            </div>

            {/* Section Title */}
            <h2
              style={{
                fontSize: '3.25rem',
                fontWeight: 400,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {getSafeText('patients.title', 'Our Patients & Smile Stories')}
            </h2>
          </div>

          <div style={{ flex: '1 1 360px', maxWidth: '520px' }}>
            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 450,
              }}
            >
              {getSafeText('patients.subtitle', 'Real transformation experiences from our patients arriving from all across the globe.')}
            </p>
          </div>
        </div>

        {/* Patients Review Cards Grid */}
        <div
          className="patients-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.75rem',
          }}
        >
          {visibleReviews.map((card) => {
            const name = getSafeText(`patients.${card.id}.name`, card.fallbackName);
            const country = getSafeText(`patients.${card.id}.country`, card.fallbackCountry);
            const treatment = getSafeText(`patients.${card.id}.treatment`, card.fallbackTreatment);
            const quote = getSafeText(`patients.${card.id}.quote`, card.fallbackQuote);

            return (
              <div
                key={card.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '2px solid #FCDE9C',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.1)',
                }}
                className="patient-card-white"
              >
                <div>
                  {/* Rating Stars using /star.png */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((starIdx) => (
                      <Image
                        key={starIdx}
                        src="/star.png"
                        alt="Rating Star"
                        width={20}
                        height={20}
                        style={{ objectFit: 'contain' }}
                      />
                    ))}
                  </div>

                  {/* Patient Quote */}
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: '#292524',
                      lineHeight: 1.65,
                      marginBottom: '1.75rem',
                      fontWeight: 450,
                    }}
                  >
                    &quot;{quote}&quot;
                  </p>
                </div>

                {/* Card Footer: Patient Info & Treatment Badge */}
                <div>
                  {/* #FCDE9C Accent Treatment Pill */}
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#FCDE9C',
                      color: '#1c1917',
                      fontSize: '0.78rem',
                      fontWeight: 750,
                      padding: '0.35rem 0.8rem',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {treatment}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <span
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 750,
                        color: '#1c1917',
                      }}
                    >
                      {name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        color: '#78716c',
                        fontWeight: 500,
                      }}
                    >
                      {country}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Controls: Pagination Indicators + Circular Nav Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '3.5rem',
          }}
        >
          {/* Progress Dots */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                style={{
                  width: idx === startIndex ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '9999px',
                  backgroundColor: idx === startIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Circular Left & Right Nav Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Left Button */}
            <button
              onClick={handlePrev}
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: '2px solid #FCDE9C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className="patient-nav-btn"
              aria-label="Previous Review"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: '2px solid #FCDE9C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className="patient-nav-btn"
              aria-label="Next Review"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Grid & Hover Animations */}
      <style jsx global>{`
        .patients-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 1024px) {
          .patients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .patients-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .patient-card-white:hover {
          transform: translateY(-6px);
          border-color: #FFA552 !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18) !important;
        }
        .patient-nav-btn:hover {
          transform: scale(1.08);
          background-color: #FCDE9C !important;
          border-color: #ffffff !important;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
