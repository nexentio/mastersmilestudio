'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PatientsSection() {
  const t = useTranslations('home');
  const [startIndex, setStartIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState<(typeof reviews)[0] | null>(null);

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
        background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 22%, #ff9e4d 50%, #ff9e4d 100%)',
        color: '#0f172a',
        padding: 'clamp(4rem, 6vw, 6rem) 1.5rem 2.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
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
          <div style={{ flex: '1 1 320px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#fff7ed',
                border: '1.5px solid #fed7aa',
                borderRadius: '9999px',
                padding: '0.35rem 0.85rem',
                marginBottom: '0.85rem',
              }}
            >
              <span style={{ color: '#ea580c', fontSize: '0.78rem' }}>★</span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#c2410c', letterSpacing: '0.02em' }}>
                Happy Patient Experiences
              </span>
            </div>

            {/* Section Title */}
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
              {getSafeText('patients.title', 'Our Patients & Smile Stories')}
            </h2>
          </div>

          <div style={{ flex: '1 1 360px', maxWidth: '520px' }}>
            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem 0',
                fontWeight: 450,
              }}
            >
              {getSafeText('patients.subtitle', 'Real transformation experiences from our patients arriving from all across the globe.')}
            </p>

            {/* Google & Trustpilot Verified Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              {/* Google Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #FCDE9C',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Image src="/reviews/google.webp" alt="Google" width={18} height={18} style={{ objectFit: 'contain' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 750, color: '#0f172a' }}>4.9/5</span>
                <span style={{ color: '#f59e0b', fontSize: '0.78rem' }}>★★★★★</span>
              </div>

              {/* Trustpilot Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #FCDE9C',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Image src="/reviews/trustpilot.webp" alt="Trustpilot" width={68} height={16} style={{ objectFit: 'contain' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 750, color: '#0f172a' }}>4.8/5</span>
                <span style={{ color: '#00b67a', fontSize: '0.78rem' }}>★ TrustScore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Patients Review Cards Grid */}
        <div className="patients-grid">
          {visibleReviews.map((card, idx) => {
            const name = getSafeText(`patients.${card.id}.name`, card.fallbackName);
            const country = getSafeText(`patients.${card.id}.country`, card.fallbackCountry);
            const treatment = getSafeText(`patients.${card.id}.treatment`, card.fallbackTreatment);
            const quote = getSafeText(`patients.${card.id}.quote`, card.fallbackQuote);
            const isTrustpilot = idx % 2 === 0;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedReview(card)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '2px solid #FCDE9C',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
                className="patient-card-white"
              >
                <div>
                  {/* Top Header: 5 Rating Stars on Left & Verified Review Platform Logo on Right */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      {[1, 2, 3, 4, 5].map((starIdx) => (
                        <Image
                          key={starIdx}
                          src="/star.png"
                          alt="★"
                          width={18}
                          height={18}
                          style={{ objectFit: 'contain' }}
                        />
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}>
                      {isTrustpilot ? (
                        <Image src="/reviews/trustpilot.webp" alt="Trustpilot" width={68} height={16} style={{ objectFit: 'contain' }} />
                      ) : (
                        <Image src="/reviews/google.webp" alt="Google" width={20} height={20} style={{ objectFit: 'contain' }} />
                      )}
                    </div>
                  </div>

                  {/* Patient Quote */}
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: '#334155',
                      lineHeight: 1.65,
                      margin: '0 0 1.5rem 0',
                      fontWeight: 450,
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>

                {/* Card Footer: Treatment Badge + Patient Name & Country */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.15rem' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#FCDE9C',
                      color: '#1c1917',
                      fontSize: '0.78rem',
                      fontWeight: 750,
                      padding: '0.35rem 0.8rem',
                      borderRadius: '8px',
                      marginBottom: '0.85rem',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    {treatment}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <span
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 750,
                        color: '#0f172a',
                      }}
                    >
                      {name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.84rem',
                        color: '#64748b',
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

        {/* Carousel Bottom Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.4)',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Left: Indicator Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                style={{
                  height: '8px',
                  width: startIndex === i ? '28px' : '8px',
                  borderRadius: '9999px',
                  backgroundColor: startIndex === i ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Right: Round Arrow Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={handlePrev}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease',
              }}
              className="patients-nav-btn"
              aria-label="Previous reviews"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease',
              }}
              className="patients-nav-btn"
              aria-label="Next reviews"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Lightbox Review Popup */}
      {selectedReview && (
        <div
          onClick={() => setSelectedReview(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '560px',
              backgroundColor: '#ffffff',
              borderRadius: '28px',
              border: '2px solid #FCDE9C',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
              position: 'relative',
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#f1f5f9',
                color: '#0f172a',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 700,
                transition: 'all 0.2s ease',
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Modal Top Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#FCDE9C',
                  color: '#1c1917',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(252, 222, 156, 0.4)',
                }}
              >
                {getSafeText(`patients.${selectedReview.id}.name`, selectedReview.fallbackName).charAt(0)}
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 750, color: '#0f172a', margin: '0 0 0.2rem 0', lineHeight: 1.2 }}>
                  {getSafeText(`patients.${selectedReview.id}.name`, selectedReview.fallbackName)}
                </h3>
                <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>
                  {getSafeText(`patients.${selectedReview.id}.country`, selectedReview.fallbackCountry)}
                </span>
              </div>
            </div>

            {/* Ratings & Treatment Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.15rem',
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {[1, 2, 3, 4, 5].map((starIdx) => (
                  <Image key={starIdx} src="/star.png" alt="★" width={18} height={18} style={{ objectFit: 'contain' }} />
                ))}
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginLeft: '0.35rem' }}>5.0</span>
              </div>

              <span
                style={{
                  backgroundColor: '#FCDE9C',
                  color: '#1c1917',
                  fontSize: '0.8rem',
                  fontWeight: 750,
                  padding: '0.35rem 0.85rem',
                  borderRadius: '8px',
                }}
              >
                {getSafeText(`patients.${selectedReview.id}.treatment`, selectedReview.fallbackTreatment)}
              </span>
            </div>

            {/* Full Patient Review Text */}
            <div style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, fontStyle: 'italic', fontWeight: 450, margin: '0 0 1.75rem 0' }}>
              &ldquo;{getSafeText(`patients.${selectedReview.id}.quote`, selectedReview.fallbackQuote)}&rdquo;
            </div>

            {/* Verified Clinic Guarantee Footer */}
            <div
              style={{
                borderTop: '1px solid #f1f5f9',
                paddingTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                color: '#15803d',
                fontWeight: 600,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ fontSize: '1.1rem' }}>✓</span>
                <span>Verified Patient Review</span>
              </div>

              <div style={{ opacity: 0.85 }}>
                {selectedReview.id === 'card1' || selectedReview.id === 'card3' || selectedReview.id === 'card5' ? (
                  <Image src="/reviews/google.webp" alt="Google" width={22} height={22} style={{ objectFit: 'contain' }} />
                ) : (
                  <Image src="/reviews/trustpilot.webp" alt="Trustpilot" width={75} height={18} style={{ objectFit: 'contain' }} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Grid & Hover Animations */}
      <style jsx global>{`
        .patients-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 1200px) {
          .patients-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 900px) {
          .patients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .patients-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .patient-card-white {
            padding: 1.5rem 1.25rem !important;
            min-height: auto !important;
            border-radius: 20px !important;
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
