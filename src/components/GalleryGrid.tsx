'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { getWhatsAppLink } from '@/config/site';

interface GalleryItem {
  id: string;
  category: string;
  name: string;
  shade: string;
  hasQuote?: boolean;
  icons?: string[];
  beforeImage: string;
  afterImage: string;
  portraitImage: string;
}

const rawGalleryData: GalleryItem[] = [
  {
    id: 'case1',
    category: 'zirconium',
    name: 'Deniz Kaya',
    shade: 'OM1',
    icons: ['Crowns', 'Implants', 'Whitening', 'Veneers'],
    beforeImage: '/transformations/t1.jpg',
    afterImage: '/transformations/t1.jpg',
    portraitImage: '/patients/patient-2.jpeg',
  },
  {
    id: 'case2',
    category: 'emax',
    name: 'Kerem Öztürk',
    shade: 'OM1',
    hasQuote: true,
    beforeImage: '/transformations/t2.jpg',
    afterImage: '/transformations/t2.jpg',
    portraitImage: '/patients/patient-4.jpeg',
  },
  {
    id: 'case3',
    category: 'implant',
    name: 'Deniz Kaya',
    shade: 'OM1',
    hasQuote: true,
    beforeImage: '/transformations/t3.jpg',
    afterImage: '/transformations/t3.jpg',
    portraitImage: '/patients/patient-1.jpeg',
  },
  {
    id: 'case4',
    category: 'zirconium',
    name: 'Deniz Kaya',
    shade: 'OM1',
    icons: ['Crowns', 'Implants', 'Whitening', 'Veneers'],
    beforeImage: '/transformations/t4.jpg',
    afterImage: '/transformations/t4.jpg',
    portraitImage: '/patients/patient-3.jpeg',
  },
  {
    id: 'case5',
    category: 'makeover',
    name: 'Elif Aydın',
    shade: 'OM1',
    icons: ['Crowns', 'Implants', 'Whitening', 'Veneers'],
    beforeImage: '/transformations/t5.jpg',
    afterImage: '/transformations/t5.jpg',
    portraitImage: '/patients/patient-5.jpeg',
  },
  {
    id: 'case6',
    category: 'whitening',
    name: 'Elif Aydın',
    shade: 'OM1',
    icons: ['Crowns', 'Implants', 'Whitening'],
    beforeImage: '/transformations/t6.jpg',
    afterImage: '/transformations/t6.jpg',
    portraitImage: '/patients/patient-6.jpeg',
  },
];

export default function GalleryGrid({ locale: propsLocale }: { locale?: string }) {
  const t = useTranslations('gallery');
  const contextLocale = useLocale();
  const locale = propsLocale || contextLocale || 'tr';

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState<{
    id: string;
    name: string;
    treatment: string;
    shade: string;
    beforeImage: string;
    portraitImage: string;
  } | null>(null);

  const categories = [
    { id: 'all', label: t('categories.all') },
    { id: 'makeover', label: t('categories.makeover') },
    { id: 'implant', label: t('categories.implant') },
    { id: 'emax', label: t('categories.emax') },
    { id: 'zirconium', label: t('categories.zirconium') },
    { id: 'whitening', label: t('categories.whitening') },
  ];

  const filteredItems = activeCategory === 'all'
    ? rawGalleryData
    : rawGalleryData.filter((item) => item.category === activeCategory);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 6rem 1.5rem' }}>
      {/* Category Filter Tabs (Pill Bars) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.65rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem',
        }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                backgroundColor: isActive ? '#0f172a' : '#ffffff',
                color: isActive ? '#ffffff' : '#475569',
                border: isActive ? '1px solid #0f172a' : '1px solid #e2e8f0',
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none',
              }}
              className="gallery-tab-btn"
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Featured / Spotlight Hero Transformation Card */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          alignItems: 'center',
          marginBottom: '4rem',
        }}
      >
        {/* Left Half: Dark Media Box */}
        <div
          style={{
            backgroundColor: '#121215',
            padding: '1.75rem',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.3fr',
            gap: '1.25rem',
            alignItems: 'center',
            minHeight: '380px',
          }}
        >
          {/* OM1 Badge Top Right */}
          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              backgroundColor: '#d97706',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '0.25rem 0.65rem',
              borderRadius: '6px',
              zIndex: 3,
              letterSpacing: '0.04em',
            }}
          >
            OM1
          </div>

          {/* Stacked 2 Teeth Closeups */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* Top: Before */}
            <div
              style={{
                position: 'relative',
                height: '140px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <Image
                src="/transformations/t1.jpg"
                alt={t('before')}
                fill
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '0.5rem',
                  left: '0.5rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                {t('before')}
              </span>
            </div>

            {/* Down Arrow in Between */}
            <div style={{ textAlign: 'center', color: '#fbbf24', fontSize: '0.9rem', lineHeight: 1 }}>
              ↓
            </div>

            {/* Bottom: After */}
            <div
              style={{
                position: 'relative',
                height: '140px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <Image
                src="/transformations/t1.jpg"
                alt={t('after')}
                fill
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '0.5rem',
                  left: '0.5rem',
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                {t('after')}
              </span>
            </div>
          </div>

          {/* Right: Smiling Patient Portrait */}
          <div
            style={{
              position: 'relative',
              height: '320px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <Image
              src="/patients/patient-1.jpeg"
              alt={`${t('spotlightPatient')} - ${t('spotlightTreatment')}`}
              fill
              priority
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
        </div>

        {/* Right Half: Story & Details */}
        <div style={{ padding: '3rem 2.5rem' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: 300,
              color: '#0f172a',
              margin: '0 0 0.5rem 0',
              letterSpacing: '-0.02em',
            }}
          >
            {t('spotlightPatient')}
          </h3>
          <div
            style={{
              fontSize: '1.1rem',
              fontWeight: 400,
              color: '#475569',
              marginBottom: '1rem',
            }}
          >
            {t('spotlightTreatment')}
          </div>
          <blockquote
            style={{
              fontSize: '1.05rem',
              color: '#64748b',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            &ldquo;{t('spotlightQuote')}&rdquo;
          </blockquote>

          <div style={{ marginTop: '2rem' }}>
            <a
              href={getWhatsAppLink(locale, t('spotlightWhatsapp'))}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#0f172a',
                color: '#ffffff',
                padding: '0.8rem 1.75rem',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: 400,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              className="gallery-cta-btn"
            >
              <span>{t('spotlightBtn')}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3-Column Patient Cases Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}
      >
        {filteredItems.map((item) => {
          const treatmentText = t(`items.${item.id}.treatment` as any);
          const quoteText = item.hasQuote ? t(`items.${item.id}.quote` as any) : '';

          return (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              className="gallery-case-card"
            >
              {/* Top Media Split */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.05fr 1.3fr',
                  backgroundColor: '#09090b',
                  minHeight: '280px',
                }}
              >
                {/* Left Column: 2 Closeups */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Top Closeup (Before) */}
                  <div style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
                    <Image
                      src={item.beforeImage}
                      alt={`${item.name} ${t('before')}`}
                      fill
                      unoptimized
                      style={{ objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0.4rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: '#ffffff',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      {t('before')}
                    </span>
                  </div>

                  {/* Bottom Closeup (Detail) */}
                  <div style={{ position: 'relative', height: '140px', overflow: 'hidden', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <Image
                      src={item.afterImage}
                      alt={`${item.name} ${t('after')}`}
                      fill
                      unoptimized
                      style={{ objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0.4rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: '#ffffff',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      {t('before')}
                    </span>
                  </div>
                </div>

                {/* Right Column: Full Smiling Portrait (After) */}
                <div style={{ position: 'relative', height: '280px' }}>
                  <Image
                    src={item.portraitImage}
                    alt={`${item.name} ${t('after')}`}
                    fill
                    unoptimized
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0.5rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      padding: '0.2rem 0.75rem',
                      borderRadius: '4px',
                    }}
                  >
                    {t('after')}
                  </span>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Header: Name + Shade Badge */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 400, color: '#0f172a', margin: '0 0 0.15rem 0' }}>
                      {item.name}
                    </h4>
                    <div style={{ fontSize: '0.9rem', fontWeight: 300, color: '#64748b' }}>
                      {treatmentText}
                    </div>
                  </div>

                  <span
                    style={{
                      backgroundColor: '#d97706',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '5px',
                    }}
                  >
                    {item.shade}
                  </span>
                </div>

                {/* Middle Feature: Quote or Tooth Icons */}
                <div style={{ minHeight: '40px', display: 'flex', alignItems: 'center', margin: '0.75rem 0 1.25rem 0' }}>
                  {quoteText ? (
                    <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0, fontStyle: 'italic', fontWeight: 300 }}>
                      &ldquo;{quoteText}&rdquo;
                    </p>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                      {item.icons?.map((icon) => {
                        const iconLabel = t(`icons.${icon}` as any);
                        return (
                          <div key={icon} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#64748b', fontWeight: 300 }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2 9 .3 2.1 1.5 3 4 3s3.7-.9 4-3c.5-3.5 2-6 2-9 0-3.5-2.5-6-6-6z" />
                            </svg>
                            <span>{iconLabel || icon}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div style={{ marginTop: 'auto' }}>
                  <button
                    onClick={() => setSelectedCase({
                      id: item.id,
                      name: item.name,
                      treatment: treatmentText,
                      shade: item.shade,
                      beforeImage: item.beforeImage,
                      portraitImage: item.portraitImage,
                    })}
                    style={{
                      width: '100%',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '0.8rem',
                      fontSize: '0.9rem',
                      fontWeight: 400,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s ease',
                    }}
                    className="gallery-cta-btn"
                  >
                    <span>{t('examineBtn')}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Modal */}
      {selectedCase && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedCase(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              maxWidth: '720px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              padding: '2rem',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                backgroundColor: '#f1f5f9',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
              }}
            >
              ✕
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, color: '#0f172a', margin: 0 }}>
                  {selectedCase.name}
                </h3>
                <span style={{ backgroundColor: '#d97706', color: '#fff', fontSize: '0.75rem', fontWeight: 500, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  {selectedCase.shade}
                </span>
              </div>
              <p style={{ fontSize: '1rem', color: '#64748b', margin: 0, fontWeight: 300 }}>
                {selectedCase.treatment}
              </p>
            </div>

            {/* Comparison Images */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* Before */}
              <div style={{ position: 'relative', height: '240px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#09090b' }}>
                <Image
                  src={selectedCase.beforeImage}
                  alt={t('modalBefore')}
                  fill
                  unoptimized
                  style={{ objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 400 }}>
                  {t('modalBefore')}
                </span>
              </div>

              {/* After */}
              <div style={{ position: 'relative', height: '240px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#09090b' }}>
                <Image
                  src={selectedCase.portraitImage}
                  alt={t('modalAfter')}
                  fill
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <span style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', backgroundColor: '#d97706', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 500 }}>
                  {t('modalAfter')}
                </span>
              </div>
            </div>

            {/* WhatsApp Consultation Button */}
            <a
              href={getWhatsAppLink(locale, t('modalWhatsappMsg', { name: selectedCase.name, treatment: selectedCase.treatment }))}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                backgroundColor: '#25d366',
                color: '#ffffff',
                padding: '0.95rem',
                borderRadius: '12px',
                fontWeight: 500,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              <span>{t('modalWhatsappBtn')}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
