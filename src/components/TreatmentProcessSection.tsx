'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PROCESS_STEPS } from '@/data/process';

export default function TreatmentProcessSection() {
  const t = useTranslations('process');

  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentStepConfig = PROCESS_STEPS.find((s) => s.id === activeStep) || PROCESS_STEPS[0];
  const currentStepDesc = t(`${currentStepConfig.key}.content` as any);

  return (
    <section
      id="treatment-process"
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
        {/* Top Row: Left Main Heading & Step List | Right Dynamic Text, Link & Video Thumbnail */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
            marginBottom: '4.5rem',
          }}
        >
          {/* Left Column: Heading, Subtitle & 1 / 2 / 3 / 4 Step Stack */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 600,
                color: '#0f172a',
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                marginBottom: '1rem',
                textTransform: 'uppercase',
              }}
            >
              {t('heading')}
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
                fontWeight: 400,
                maxWidth: '560px',
              }}
            >
              {t('subtitle')}
            </p>

            {/* 4 Interactive Step Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROCESS_STEPS.map((step) => {
                const isActive = activeStep === step.id;
                const stepTitle = t(`${step.key}.title` as any);

                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      cursor: 'pointer',
                      padding: '0.25rem 0',
                      backgroundColor: 'transparent',
                      borderLeft: 'none',
                      opacity: isActive ? 1 : 0.55,
                      transition: 'opacity 0.25s ease',
                    }}
                  >
                    <span style={{ fontSize: '1.75rem', fontWeight: 500, color: '#0f172a', lineHeight: 1 }}>
                      {step.num}
                    </span>
                    <span style={{ fontSize: '1.25rem', fontWeight: 300, color: '#cbd5e1', lineHeight: 1 }}>/</span>
                    <span style={{ fontSize: '1.125rem', fontWeight: 500, color: '#0f172a', lineHeight: 1.2 }}>
                      {stepTitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Step Description, Link & Video Thumbnail */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '1.05rem',
                color: '#334155',
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 400,
                minHeight: '80px',
              }}
            >
              {currentStepDesc}
            </p>

            <a
              href="#contact"
              style={{
                display: 'inline-block',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '0.04em',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                marginBottom: '0.5rem',
              }}
            >
              {t('contactLink')}
            </a>

            {/* In-Place Video Player / Thumbnail Card */}
            {isPlaying ? (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '260px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#000000',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
                }}
              >
                <iframe
                  src="https://www.youtube-nocookie.com/embed/eiTTit9PLrQ?autoplay=1&playsinline=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0"
                  title="Master Smile Studio Clinic Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{
                    position: 'absolute',
                    top: '-65px',
                    left: 0,
                    width: '100%',
                    height: 'calc(100% + 95px)',
                    border: 'none',
                    display: 'block',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 20,
                    fontSize: '14px',
                    lineHeight: 1,
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                  }}
                  aria-label="Close video"
                >
                  ✕
                </button>
              </div>
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '260px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                }}
                className="video-thumb-card"
              >
                <Image
                  src="/patients/yt-eiTTit9PLrQ.webp"
                  alt="Master Smile Studio Clinic Tour"
                  fill
                  unoptimized
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />

                {/* Play Button Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'backgroundColor 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                      transition: 'transform 0.25s ease',
                    }}
                    className="play-icon-bubble"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0f172a" style={{ marginLeft: '3px' }}>
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Feature Cards Grid (4 Clean Process Pillars) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            borderTop: '1px solid #f1f5f9',
            paddingTop: '3.5rem',
          }}
        >
          {/* Pillar 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#d97706', letterSpacing: '0.04em' }}>
              01. {t('step1.subtitle')}
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>
              {t('step1.title')}
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              {t('step1.content')}
            </p>
          </div>

          {/* Pillar 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#d97706', letterSpacing: '0.04em' }}>
              02. {t('step2.subtitle')}
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>
              {t('step2.title')}
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              {t('step2.content')}
            </p>
          </div>

          {/* Pillar 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#d97706', letterSpacing: '0.04em' }}>
              03. {t('step3.subtitle')}
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>
              {t('step3.title')}
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              {t('step3.content')}
            </p>
          </div>

          {/* Pillar 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#d97706', letterSpacing: '0.04em' }}>
              04. {t('step4.subtitle')}
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>
              {t('step4.title')}
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              {t('step4.content')}
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .video-thumb-card:hover .play-icon-bubble {
          transform: scale(1.12);
        }
      `}</style>
    </section>
  );
}
