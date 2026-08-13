'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { getWhatsAppLink } from '@/config/site';

const treatmentKeys = [
  { key: 'smileDesign', image: '/smile-makeover.jpg' },
  { key: 'implant', image: '/dental-implant-mss.jpeg' },
  { key: 'emax', image: '/e-max-lamine-treatment-mss.jpeg' },
  { key: 'zirconia', image: '/transformations/t1.jpg' },
  { key: 'whitening', image: '/teeth-whiting-treatment.jpeg' },
  { key: 'rootCanal', image: '/transformations/t4.jpg' },
  { key: 'dentures', image: '/transformations/t3.jpg' },
  { key: 'bonding', image: '/transformations/t5.jpg' },
  { key: 'bridge', image: '/transformations/t6.jpg' },
  { key: 'periodontology', image: '/transformations/t2.jpg' },
  { key: 'allOnX', image: '/dental-implant-mss.jpeg' },
  { key: 'surgery', image: '/smile-between-section.png' },
] as const;

const caseStudies = [
  {
    id: 'case-img-1',
    src: '/mastersmilestudio_1781430682_3919246906335743176_70887948899.jpg',
    alt: 'Master Smile Studio Full Mouth Case 1',
  },
  {
    id: 'case-img-2',
    src: '/mastersmilestudio_1783158972_3933743875695538963_70887948899.jpg',
    alt: 'Master Smile Studio Zirconia Case 2',
  },
  {
    id: 'case-img-3',
    src: '/mastersmilestudio_1784098986_3941630290953391467_70887948899.jpg',
    alt: 'Master Smile Studio Hollywood Smile Case 3',
  },
  {
    id: 'case-img-4',
    src: '/mastersmilestudio_1784465233_3944702579575983298_70887948899.jpg',
    alt: 'Master Smile Studio E-Max Veneers Case 4',
  },
  {
    id: 'case-img-5',
    src: '/smile-makeover.jpg',
    alt: 'Master Smile Studio Smile Makeover Case 5',
  },
  {
    id: 'case-img-6',
    src: '/e-max-lamine-treatment-mss.jpeg',
    alt: 'Master Smile Studio E-Max Laminates Case 6',
  },
  {
    id: 'case-img-7',
    src: '/dental-implant-mss.jpeg',
    alt: 'Master Smile Studio Dental Implant Case 7',
  },
  {
    id: 'case-img-8',
    src: '/teeth-whiting-treatment.jpeg',
    alt: 'Master Smile Studio Teeth Whitening Case 8',
  },
  {
    id: 'case-img-9',
    src: '/smile-between-section.png',
    alt: 'Master Smile Studio Aesthetic Smile Case 9',
  },
];

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

  const doctors = [
    {
      name: 'Dr. Tülay Kaya',
      title: t('doctorTulayTitle'),
      image: '/team/tulay.webp',
    },
    {
      name: 'Dr. Ali Kemal Demir',
      title: t('doctorAliKemalTitle'),
      image: '/team/ali-kemal.webp',
    },
    {
      name: 'Dr. Abdullah Yılmaz',
      title: t('doctorAbdullahTitle'),
      image: '/team/abdullah.webp',
    },
  ];

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
          {treatmentKeys.map((item) => {
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
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>

                {/* Lower Info Text */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h4
                      style={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: '#0f172a',
                        letterSpacing: '0.03em',
                        margin: '0 0 0.5rem 0',
                        textTransform: 'uppercase',
                      }}
                    >
                      {title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55, margin: 0, fontWeight: 300 }}>
                      {description}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.25rem' }}>
                    <a
                      href={getWhatsAppLink(locale, whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.85rem',
                        fontWeight: 400,
                        color: '#d97706',
                        textDecoration: 'none',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <span>{t('getAppointmentBtn')}</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Action Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#cases"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#ffffff',
              border: '1.5px solid #e2e8f0',
              color: '#0f172a',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 400,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.2s ease',
            }}
          >
            <span>{t('exploreCasesBtn')}</span>
            <span>↓</span>
          </a>
        </div>
      </div>

      {/* 2. Middle Section: KLİNİK VAKA İNCELEMELERİ (True 100% Full-Bleed Container) */}
      <section
        id="cases"
        style={{
          width: '100%',
          backgroundColor: '#f8fafc',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
          padding: '4.5rem 0 5.5rem 0',
          marginBottom: '5rem',
          position: 'relative',
        }}
      >
        {/* Section Header Row */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto 2.5rem auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                fontWeight: 300,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                margin: '0 0 0.25rem 0',
              }}
            >
              {t('casesTitle')}
            </h3>
          </div>

          <div style={{ maxWidth: '440px', textAlign: 'right' }}>
            <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
              {t('casesSubtitle')}
            </p>
          </div>
        </div>

        {/* 100% Full-Bleed Edge-to-Edge Carousel Track Container */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              color: '#ffffff',
              border: '1.5px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s ease',
            }}
            aria-label={t('prevCase')}
          >
            ‹
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              color: '#ffffff',
              border: '1.5px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s ease',
            }}
            aria-label={t('nextCase')}
          >
            ›
          </button>

          {/* 100% Width Scrollable Track with Edge-to-Edge Fluid Padding */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              gap: '1.75rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              padding: '0.5rem 2rem 1.5rem 2rem',
              scrollbarWidth: 'none',
              width: '100%',
            }}
          >
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                style={{
                  flex: '0 0 360px',
                  height: '360px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  scrollSnapAlign: 'start',
                  backgroundColor: '#121215',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.16)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease',
                }}
                className="case-study-card"
              >
                <Image
                  src={cs.src}
                  alt={cs.alt}
                  fill
                  unoptimized
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom Section: Doctors (Constrained to 1280px) */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', padding: '0 1.5rem 6rem 1.5rem' }}>
        <h3
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
            fontWeight: 300,
            color: '#0f172a',
            letterSpacing: '-0.03em',
            marginBottom: '3rem',
          }}
        >
          {t('doctorsTitle')}
        </h3>

        {/* 3 Doctor Pill Cards Grid */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {doctors.map((doc) => (
            <div
              key={doc.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                backgroundColor: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '9999px',
                padding: '0.75rem 1.75rem 0.75rem 0.75rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                textAlign: 'left',
              }}
            >
              {/* Doctor Avatar */}
              <div
                style={{
                  position: 'relative',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#09090b',
                  flexShrink: 0,
                  border: '2px solid #FFA552',
                }}
              >
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>

              {/* Doctor Info */}
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 400, color: '#0f172a', margin: '0 0 0.15rem 0' }}>
                  {doc.name}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, fontWeight: 300 }}>
                  {doc.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
