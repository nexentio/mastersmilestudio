'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { getWhatsAppLink } from '@/config/site';
import { TREATMENT_KEYS, TREATMENT_CASE_STUDIES, TREATMENT_DOCTORS } from '@/data/treatments';

export default function TreatmentsSectionView({ locale: propsLocale }: { locale?: string }) {
  const t = useTranslations('services');
  const contextLocale = useLocale();
  const locale = propsLocale || contextLocale || 'tr';
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/* 1. Main Unified 12 Treatment Cards Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 1.5rem 4.5rem 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem',
          }}
        >
          {TREATMENT_KEYS.map((item) => {
            const title = t(`items.${item.key}.title` as any);
            const description = t(`items.${item.key}.description` as any);
            const whatsappMsg = t('whatsappInquiry', { treatment: title });

            return (
              <div
                key={item.key}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                className="treatment-showcase-card"
              >
                {/* Upper Image Box */}
                <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                  <Image
                    src={item.image}
                    alt={title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="treatment-card-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFA552',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.03em',
                    }}
                  >
                    Master Smile
                  </div>
                </div>

                {/* Lower Content Box */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 400,
                      color: '#0f172a',
                      marginBottom: '0.75rem',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#64748b',
                      lineHeight: 1.6,
                      fontWeight: 300,
                      margin: '0 0 1.5rem 0',
                    }}
                  >
                    {description}
                  </p>

                  <div style={{ marginTop: 'auto' }}>
                    <a
                      href={getWhatsAppLink(locale, whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        width: '100%',
                        backgroundColor: '#0f172a',
                        color: '#ffffff',
                        padding: '0.85rem',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: 400,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      className="treatment-inquire-btn"
                    >
                      <span>{t('inquireBtn')}</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Before & After Case Studies Carousel Section */}
      <div
        style={{
          backgroundColor: '#09090b',
          color: '#ffffff',
          padding: '6rem 1.5rem',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section Header with Carousel Navigation Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#FFA552',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Master Smile Studio
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 300,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                {t('casesHeading')}
              </h2>
            </div>

            {/* Arrows */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => handleScroll('left')}
                aria-label="Scroll Carousel Left"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                ←
              </button>
              <button
                onClick={() => handleScroll('right')}
                aria-label="Scroll Carousel Right"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#FFA552',
                  border: 'none',
                  color: '#0f172a',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              paddingBottom: '1rem',
            }}
          >
            {TREATMENT_CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                style={{
                  flex: '0 0 360px',
                  height: '440px',
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  scrollSnapAlign: 'start',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                <Image
                  src={study.src}
                  alt={study.alt}
                  fill
                  unoptimized
                  sizes="360px"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.1) 60%, transparent 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: '#d97706',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      display: 'inline-block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Clinical Case
                  </span>
                  <div style={{ fontSize: '1rem', fontWeight: 300, color: '#f1f5f9' }}>
                    Master Smile Studio Result
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Expert Doctors Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 1.5rem 4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 300,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              margin: '0 0 0.75rem 0',
            }}
          >
            {t('doctorsHeading')}
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#64748b',
              margin: 0,
              fontWeight: 300,
            }}
          >
            {t('doctorsSubtitle')}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {TREATMENT_DOCTORS.map((doc, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '1.25rem',
                  border: '3px solid #ffedd5',
                }}
              >
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  unoptimized
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 400, color: '#0f172a', margin: '0 0 0.35rem 0' }}>
                {doc.name}
              </h3>
              <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 300 }}>
                {t(doc.titleKey as any)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
