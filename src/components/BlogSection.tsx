'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function BlogSection() {
  const t = useTranslations('blog');

  const blogCards = [
    {
      id: 'post1',
      title: t('card1Title'),
      description: t('card1Desc'),
      image: '/e-max-lamine-treatment-mss.jpeg',
      imageHeight: '520px', // Tallest left card
    },
    {
      id: 'post2',
      title: t('card2Title'),
      description: t('card2Desc'),
      image: '/dental-implant-mss.jpeg',
      imageHeight: '340px', // Shorter middle card
    },
    {
      id: 'post3',
      title: t('card3Title'),
      description: t('card3Desc'),
      image: '/smile-makeover.jpg',
      imageHeight: '440px', // Medium right card
    },
  ];

  return (
    <section
      id="blog"
      style={{
        backgroundColor: '#f8f9fa',
        color: '#0f172a',
        padding: '6rem 1.5rem',
        position: 'relative',
        borderTop: 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Top Header: Left 2-Line Paragraph | Right Main Title, Italic Insights & Subtitle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '4rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Side: Short 2-Line Paragraph Shifted Down */}
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 400,
              maxWidth: '360px',
              flex: '1 1 300px',
              paddingBottom: '0.5rem',
            }}
          >
            {t('leftDesc')}
          </p>

          {/* Right Header Text Stack */}
          <div style={{ textAlign: 'left', maxWidth: '620px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#0f172a',
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {t('headingMain')} <br />
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#64748b',
                }}
              >
                {t('headingItalic')}
              </span>
            </h2>

            <p
              style={{
                fontSize: '0.95rem',
                color: '#475569',
                lineHeight: 1.5,
                marginTop: '1rem',
                marginBottom: 0,
                fontWeight: 400,
              }}
            >
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* 3-Column Asymmetric Staggered Blog Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'flex-start',
          }}
        >
          {blogCards.map((card) => (
            <div
              key={card.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              className="blog-asymmetric-card"
            >
              {/* Rounded Image Container with Staggered Height */}
              <div
                style={{
                  width: '100%',
                  height: card.imageHeight,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
                className="blog-img-frame"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  unoptimized
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.5s ease',
                  }}
                  className="blog-card-img"
                />
              </div>

              {/* Text Portion directly below the image */}
              <div style={{ marginTop: '1.25rem', paddingRight: '0.5rem' }}>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    margin: '0 0 0.35rem 0',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .blog-asymmetric-card:hover .blog-img-frame {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
        }
        .blog-asymmetric-card:hover .blog-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
