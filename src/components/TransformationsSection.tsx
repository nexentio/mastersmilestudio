'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function TransformationsSection() {
  const t = useTranslations('home');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = [
    { id: 1, src: '/transformations/t1.jpg', alt: 'Transformation 1' },
    { id: 2, src: '/transformations/t2.jpg', alt: 'Transformation 2' },
    { id: 3, src: '/transformations/t3.jpg', alt: 'Transformation 3' },
    { id: 4, src: '/transformations/t4.jpg', alt: 'Transformation 4' },
    { id: 5, src: '/transformations/t5.jpg', alt: 'Transformation 5' },
    { id: 6, src: '/transformations/t6.jpg', alt: 'Transformation 6' },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Scroll width per step
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getSafeText = (key: string, fallback: string) => {
    return t.has(key as any) ? t(key as any) : fallback;
  };

  return (
    <section
      id="transformations"
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        paddingLeft: '0px',
        paddingRight: '0px',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: '#f1f5f9',
      }}
    >
      {/* Title Container: Same 1280px Max-Width & Padding as Previous Sections */}
      <div
        style={{
          maxWidth: '1280px',
          marginTop: '0px',
          marginRight: 'auto',
          marginBottom: '4.5rem',
          marginLeft: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '0px',
          paddingBottom: '0px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Title & Subtitle */}
          <div style={{ maxWidth: '820px' }}>
            <h2
              style={{
                fontSize: '3.25rem',
                fontWeight: 400,
                color: '#0f172a',
                letterSpacing: '-0.035em',
                lineHeight: 1.12,
                marginTop: '0px',
                marginRight: '0px',
                marginBottom: '1.25rem',
                marginLeft: '0px',
              }}
            >
              {getSafeText('transformations.title', 'From First Visit to Final Smile.')}
            </h2>
            <p
              style={{
                fontSize: '1.08rem',
                color: '#475569',
                lineHeight: 1.65,
                marginTop: '0px',
                marginRight: '0px',
                marginBottom: '0px',
                marginLeft: '0px',
                fontWeight: 300,
              }}
            >
              {getSafeText(
                'transformations.subtitle',
                'Explore real patient stories captured in every transformation. These are more than smiles — they are renewed confidence, achieved with care and precision at Master Smile Studio.'
              )}
            </p>
          </div>

          {/* Circular Navigation Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            {/* Left Button */}
            <button
              onClick={() => handleScroll('left')}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderWidth: '1.5px',
                borderStyle: 'solid',
                borderColor: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.25s ease',
              }}
              className="trans-nav-btn"
              aria-label="Scroll Left"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Button */}
            <button
              onClick={() => handleScroll('right')}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderWidth: '1.5px',
                borderStyle: 'solid',
                borderColor: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.25s ease',
              }}
              className="trans-nav-btn"
              aria-label="Scroll Right"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Slider with Left Alignment Padding matching Title Container */}
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          gap: '2rem',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingBottom: '1.5rem',
          width: '100%',
        }}
        className="hide-scrollbar trans-slider-wrapper"
      >
        {images.map((img) => (
          <div
            key={img.id}
            style={{
              flex: '0 0 auto',
              width: '380px',
              height: '480px',
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              scrollSnapAlign: 'start',
              borderWidth: '1.5px',
              borderStyle: 'solid',
              borderColor: '#e2e8f0',
              transition: 'border-color 0.25s ease',
              backgroundColor: '#f8fafc',
              cursor: 'pointer',
            }}
            className="transformation-card"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 380px"
            />
          </div>
        ))}
      </div>

      {/* Responsive Styles & Grid Alignment */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .trans-slider-wrapper {
          padding-left: max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem));
          padding-right: max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem));
        }
        @media (max-width: 768px) {
          .trans-slider-wrapper {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .transformation-card {
            width: 300px !important;
            height: 400px !important;
          }
        }
        .trans-nav-btn:hover {
          border-color: #64748b !important;
          background-color: #f8fafc !important;
        }
        .transformation-card:hover {
          border-color: #64748b !important;
        }
      `}</style>
    </section>
  );
}
