'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { BLOG_CARDS } from '@/data/blog';

export default function BlogSection() {
  const t = useTranslations('blog');

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
                  fontFamily: 'serif',
                  fontWeight: 400,
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.25rem)',
                  color: '#0f172a',
                }}
              >
                {t('headingItalic')}
              </span>{' '}
              {t('headingSub')}
            </h2>
          </div>
        </div>

        {/* 3 Asymmetric Vertical Image Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'start', // Allows differing heights to sit naturally
          }}
        >
          {BLOG_CARDS.map((card) => {
            const title = t(card.titleKey as any);
            const description = t(card.descKey as any);

            return (
              <article
                key={card.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
                className="blog-article-card"
              >
                {/* Image Container with Dynamic Height */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: card.imageHeight,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    backgroundColor: '#e2e8f0',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <Image
                    src={card.image}
                    alt={title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    className="blog-card-img"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#0f172a',
                      margin: '0 0 0.5rem 0',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: '#475569',
                      lineHeight: 1.55,
                      margin: '0 0 1rem 0',
                      fontWeight: 400,
                    }}
                  >
                    {description}
                  </p>

                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#d97706',
                      textDecoration: 'none',
                      transition: 'gap 0.2s ease',
                    }}
                    className="blog-read-link"
                  >
                    <span>{t('readMore')}</span>
                    <span>→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .blog-article-card:hover .blog-card-img {
          transform: scale(1.04);
        }
        .blog-article-card:hover .blog-read-link {
          gap: 0.6rem !important;
          color: '#b45309' !important;
        }
      `}</style>
    </section>
  );
}
