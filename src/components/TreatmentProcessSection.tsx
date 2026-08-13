'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function TreatmentProcessSection() {
  const t = useTranslations('process');

  const [activeStep, setActiveStep] = useState<number>(1);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  const stepDetails = [
    {
      id: 1,
      num: '1',
      title: t('step1.title'),
      sub: t('step1.subtitle'),
      desc: t('step1.content'),
    },
    {
      id: 2,
      num: '2',
      title: t('step2.title'),
      sub: t('step2.subtitle'),
      desc: t('step2.content'),
    },
    {
      id: 3,
      num: '3',
      title: t('step3.title'),
      sub: t('step3.subtitle'),
      desc: t('step3.content'),
    },
    {
      id: 4,
      num: '4',
      title: t('step4.title'),
      sub: t('step4.subtitle'),
      desc: t('step4.content'),
    },
  ];

  const currentStep = stepDetails.find((s) => s.id === activeStep) || stepDetails[0];

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

            {/* Step Selection List */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
              }}
            >
              {stepDetails.map((step) => {
                const isActive = activeStep === step.id;

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
                      {step.title}
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
              {currentStep.desc}
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
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease',
                  }}
                  className="play-icon-badge"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 2 Feature Cards (Left Emoji Orange Card | Right Light Off-White Card with Photo) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Lighter Emoji Orange Pastel Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, #FFF2E5 0%, #FFE5CA 50%, #FFD8AF 100%)',
              borderRadius: '24px',
              padding: '2.5rem',
              color: '#0f172a',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px',
              boxShadow: '0 10px 30px rgba(255, 165, 82, 0.12)',
              border: '1.5px solid #ffedd5',
              position: 'relative',
            }}
          >
            {/* Top Area: Vertical Badge & Title Vertically Centered */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.15)',
                    color: '#0f172a',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    padding: '0.75rem 0.45rem',
                    borderRadius: '9999px',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    textTransform: 'uppercase',
                    flexShrink: 0,
                  }}
                >
                  {t('card1Badge')}
                </div>

                <h3
                  style={{
                    fontSize: '1.65rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  {t('card1Title')}
                </h3>
              </div>

              {/* Text Paragraph */}
              <p
                style={{
                  fontSize: '1rem',
                  color: '#1e293b',
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                {t('card1Desc')}
              </p>
            </div>

            {/* Action CTA Button */}
            <div style={{ marginTop: '2rem' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  padding: '0.9rem 1.75rem',
                  borderRadius: '14px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.2)',
                  transition: 'all 0.25s ease',
                }}
                className="process-card-btn"
              >
                <span>{t('card1Btn')}</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Light Off-White Card with Right Side Doctor Photo */}
          <div
            style={{
              backgroundColor: '#fffdfa',
              border: '1.5px solid #ffedd5',
              borderRadius: '24px',
              padding: '2.5rem',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.75rem',
              minHeight: '380px',
              boxShadow: '0 8px 30px rgba(255, 165, 82, 0.08)',
              position: 'relative',
              flexWrap: 'wrap',
            }}
          >
            {/* Left Content Area inside Card 2 */}
            <div
              style={{
                flex: '1 1 240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      backgroundColor: '#FFA552',
                      color: '#0f172a',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      padding: '0.75rem 0.45rem',
                      borderRadius: '9999px',
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      textTransform: 'uppercase',
                      flexShrink: 0,
                    }}
                  >
                    {t('card2Badge')}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.65rem',
                      fontWeight: 600,
                      color: '#0f172a',
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                      margin: 0,
                      textTransform: 'uppercase',
                    }}
                  >
                    {t('card2Title')}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '1rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {t('card2Desc')}
                </p>
              </div>

              {/* Action CTA Button */}
              <div style={{ marginTop: '2rem' }}>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#FFA552',
                    color: '#0f172a',
                    padding: '0.9rem 1.75rem',
                    borderRadius: '14px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(255, 165, 82, 0.25)',
                    transition: 'all 0.25s ease',
                  }}
                  className="process-card-btn"
                >
                  <span>{t('card2Btn')}</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Side Doctor Portrait Photo Frame */}
            <div
              style={{
                flex: '0 0 220px',
                height: '300px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Image
                src="/team/dr-ozan-ozturk.jpg"
                alt="Master Smile Studio Specialist"
                fill
                unoptimized
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Tour Modal */}
      {isVideoModalOpen && (
        <div
          onClick={() => setIsVideoModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '16/9',
              backgroundColor: '#000000',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Master Smile Studio Tour"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .video-thumb-card:hover .play-icon-badge {
          transform: scale(1.15);
          background-color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
