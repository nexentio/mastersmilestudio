'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { getWhatsAppLink } from '@/config/site';

export default function AboutStudioSection() {
  const t = useTranslations('faq');
  const locale = useLocale();
  const whatsappUrl = getWhatsAppLink(locale);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section
      id="about-studio"
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
        {/* Top Row: Left Main Heading & Step List | Right Article Text, Link & Video Thumbnail */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
            marginBottom: '4.5rem',
          }}
        >
          {/* Left Column: Heading & 1 / 2 / 3 Numbered Steps */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 600,
                color: '#0f172a',
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                marginBottom: '3rem',
                textTransform: 'uppercase',
              }}
            >
              Master Smile Studio <br />
              Ağız ve Diş Sağlığı Polikliniği
            </h2>

            {/* Numbered Step Stack */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a' }}>1</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 300, color: '#94a3b8' }}>/</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#1e293b' }}>
                  Ücretsiz Dijital Panoramik Röntgen & Teşhis
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a' }}>2</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 300, color: '#94a3b8' }}>/</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#1e293b' }}>
                  Yazılı Şeffaf Tedavi Planı & Fiyat Dökümü
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a' }}>3</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 300, color: '#94a3b8' }}>/</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#1e293b' }}>
                  Konforlu, Sırasız & Hızlı Tedavi Süreci
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Paragraph, Action Link & Video Thumbnail */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '1.025rem',
                color: '#334155',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 400,
              }}
            >
              Master Smile Studio, uluslararası standartlarda 16 farklı diş sağlığı ve estetik branşını tek çatı altında sunan tam donanımlı bir diş polikliniğidir. Beş ayrı tedavi ünitesi ile hastalarımıza beklemeden, yüksek konforda ve kişiselleştirilmiş hizmet sağlıyoruz.
            </p>

            <a
              href="#contact"
              style={{
                display: 'inline-block',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#1d4ed8',
                letterSpacing: '0.04em',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                marginBottom: '1rem',
              }}
            >
              BİZİMLE İLETİŞİME GEÇİN
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

        {/* Bottom Row: 2 Feature Cards (Left Royal Blue Card | Right Light Off-White Card with Photo) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Royal Blue Card */}
          <div
            style={{
              backgroundColor: '#1d4ed8', // Royal Blue
              borderRadius: '24px',
              padding: '2.5rem',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px',
              boxShadow: '0 15px 35px rgba(29, 78, 216, 0.2)',
              position: 'relative',
            }}
          >
            {/* Top Area: Vertical Badge & Title */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  padding: '0.6rem 0.45rem',
                  borderRadius: '9999px',
                  writingMode: 'vertical-rl',
                  textTransform: 'uppercase',
                  marginBottom: '1.75rem',
                }}
              >
                100% SERBEST
              </div>

              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                UZMAN HEKİMLERİMİZLE İLETİŞİME GEÇİN
              </h3>
            </div>

            {/* Bottom Text */}
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400,
              }}
            >
              Ağız ve diş sağlığınız için uzman hekimlerimizle doğrudan görüşün, şeffaf fiyatlandırma ve kişiye özel tedavi planınızı ücretsiz oluşturun.
            </p>
          </div>

          {/* Card 2: Light Off-White Card with Right Side Doctor Photo */}
          <div
            style={{
              backgroundColor: '#f3f4f6', // Soft Light Off-White
              borderRadius: '24px',
              padding: '2.5rem',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.75rem',
              minHeight: '380px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
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
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: '#1d4ed8',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    padding: '0.6rem 0.45rem',
                    borderRadius: '9999px',
                    writingMode: 'vertical-rl',
                    textTransform: 'uppercase',
                    marginBottom: '1.75rem',
                  }}
                >
                  RANDEVU
                </div>

                <h3
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  RANDEVUNUZU HEMEN PLANLAYIN
                </h3>
              </div>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: '1.5rem 0 0 0',
                  fontWeight: 400,
                }}
              >
                WhatsApp, telefon veya web formumuz üzerinden istediğiniz tarih ve saatte beklemeden randevunuzu saniyeler içinde oluşturun.
              </p>
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
              src="https://www.youtube-nocookie.com/embed/eiTTit9PLrQ?autoplay=1"
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
