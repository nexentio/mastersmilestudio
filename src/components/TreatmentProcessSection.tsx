'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PROCESS_STEPS } from '@/data/process';

export default function TreatmentProcessSection() {
  const t = useTranslations('process');

  const [activeStep, setActiveStep] = useState<number>(1);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

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

            {/* Video Thumbnail Card with Play Button Overlay */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              style={{
                position: 'relative',
                width: '100%',
                height: '240px',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              }}
              className="video-thumb-card"
            >
              <Image
                src="/dental-implant-mss.jpeg"
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

      {/* Video Lightbox Modal */}
      {isVideoModalOpen && (
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
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '16/9',
              backgroundColor: '#000000',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                border: 'none',
                color: '#ffffff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                zIndex: 10,
              }}
            >
              ✕
            </button>

            {/* Video Player */}
            <video
              src="/dental-implant-treatment.mp4"
              controls
              autoPlay
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .video-thumb-card:hover .play-icon-bubble {
          transform: scale(1.12);
        }
      `}</style>
    </section>
  );
}
