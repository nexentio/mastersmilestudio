import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import TeamSection from '@/components/TeamSection';
import BrandsSection from '@/components/BrandsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

import { getI18nAlternates } from '@/lib/i18n-seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: getI18nAlternates('/about', locale),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fcfcfd', color: '#0f172a' }}>
      {/* Global Navigation Header */}
      <Header />

      {/* Main About Page Hero Header */}
      <section
        style={{
          padding: '3.5rem 1.5rem 2rem 1.5rem',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Breadcrumb Pill Badge */}
          <div style={{ marginBottom: '2.5rem' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '9999px',
                padding: '0.45rem 1.15rem',
                fontSize: '0.85rem',
                fontWeight: 400,
                color: '#64748b',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>{t('breadcrumbHome')}</span>
              <span style={{ color: '#cbd5e1' }}>›</span>
              <span style={{ color: '#0f172a', fontWeight: 500 }}>{t('breadcrumbAbout')}</span>
            </Link>
          </div>

          {/* Split Header: Left Title | Right Subtitle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
              borderBottom: '1px solid #f1f5f9',
              paddingBottom: '2.5rem',
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  fontWeight: 300,
                  color: '#0f172a',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                {t('pageTitle')}
              </h1>
            </div>

            <div style={{ maxWidth: '440px', textAlign: 'right' }}>
              <p
                style={{
                  fontSize: '0.925rem',
                  color: '#64748b',
                  margin: 0,
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {t('pageSubtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column Philosophy & 3-Card Showcase Section */}
      <section
        style={{
          backgroundColor: '#ffffff',
          color: '#0f172a',
          padding: '6rem 1.5rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {/* Top Header: Left '/ Our Vision' | Right Large Title & Paragraph */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
              alignItems: 'start',
            }}
          >
            <div style={{ fontSize: '0.95rem', fontWeight: 400, color: '#64748b' }}>
              {t('visionLabel')}
            </div>

            <div style={{ maxWidth: '850px' }}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 300,
                  color: '#0f172a',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.15,
                  margin: '0 0 1.25rem 0',
                }}
              >
                {t('visionHeading')}
              </h2>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 300,
                  maxWidth: '720px',
                }}
              >
                {t('visionParagraph')}
              </p>
            </div>
          </div>

          {/* Bottom 3 Equal-Width Image & Action Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* Card 1: Rose Glow Image Card */}
            <div
              style={{
                position: 'relative',
                height: '460px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              }}
            >
              <Image
                src="/e-max-lamine-treatment-mss.jpeg"
                alt={t('roseGlowTitle')}
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.25) 100%)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontSize: '1.35rem', fontWeight: 400 }}>{t('roseGlowTitle')}</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5, fontWeight: 300 }}>
                  {t('roseGlowDesc')}
                </div>
              </div>
            </div>

            {/* Card 2: Indigo Insight Image Card */}
            <div
              style={{
                position: 'relative',
                height: '460px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              }}
            >
              <Image
                src="/dental-implant-mss.jpeg"
                alt={t('indigoInsightTitle')}
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.25) 100%)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontSize: '1.35rem', fontWeight: 400 }}>{t('indigoInsightTitle')}</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5, fontWeight: 300 }}>
                  {t('indigoInsightDesc')}
                </div>
              </div>
            </div>

            {/* Card 3: Pure Solid Black Action Banner */}
            <div
              style={{
                backgroundColor: '#000000',
                height: '460px',
                borderRadius: '8px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 300,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {t('ctaCardTitle')}
              </h3>

              <a
                href="#contact"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '9999px',
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  width: 'fit-content',
                }}
              >
                {t('ctaCardBtn')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Progress Statistics Bar Section */}
      <section
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
          {/* Top Part: 3 Staggered Percentage Progress Bars */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginBottom: '5rem',
            }}
          >
            {/* Bar 1: 98% */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFF5EA',
                borderRadius: '24px',
                overflow: 'hidden',
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '98%',
                  background: 'radial-gradient(circle at 90% 10%, #FFA552 0%, #D97706 45%, #92400E 100%)',
                  borderRadius: '24px',
                  padding: '2rem 2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '2rem',
                  color: '#ffffff',
                  boxShadow: '0 12px 30px rgba(217, 119, 6, 0.25)',
                }}
              >
                <p
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: '640px',
                    color: '#ffffff',
                  }}
                >
                  {t('stat1Desc')}
                </p>
                <span
                  style={{
                    fontSize: '4.25rem',
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#ffffff',
                  }}
                >
                  {t('stat1Value')}
                </span>
              </div>
            </div>

            {/* Bar 2: 88% */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFF5EA',
                borderRadius: '24px',
                overflow: 'hidden',
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '88%',
                  background: 'radial-gradient(circle at 90% 10%, #FFA552 0%, #D97706 45%, #92400E 100%)',
                  borderRadius: '24px',
                  padding: '2rem 2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '2rem',
                  color: '#ffffff',
                  boxShadow: '0 12px 30px rgba(217, 119, 6, 0.25)',
                }}
              >
                <p
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: '640px',
                    color: '#ffffff',
                  }}
                >
                  {t('stat2Desc')}
                </p>
                <span
                  style={{
                    fontSize: '4.25rem',
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#ffffff',
                  }}
                >
                  {t('stat2Value')}
                </span>
              </div>
            </div>

            {/* Bar 3: 71% */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFF5EA',
                borderRadius: '24px',
                overflow: 'hidden',
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '71%',
                  background: 'radial-gradient(circle at 90% 10%, #FFA552 0%, #D97706 45%, #92400E 100%)',
                  borderRadius: '24px',
                  padding: '2rem 2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '2rem',
                  color: '#ffffff',
                  boxShadow: '0 12px 30px rgba(217, 119, 6, 0.25)',
                }}
              >
                <p
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: '640px',
                    color: '#ffffff',
                  }}
                >
                  {t('stat3Desc')}
                </p>
                <span
                  style={{
                    fontSize: '4.25rem',
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#ffffff',
                  }}
                >
                  {t('stat3Value')}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Part: 2-Column Headline & Description Stack */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Headline & Pill CTA */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 300,
                  color: '#0f172a',
                  lineHeight: 1.25,
                  letterSpacing: '-0.025em',
                  marginBottom: '2rem',
                }}
              >
                {t('satisfactionHeading')}
              </h2>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#fffdfa',
                  border: '1.5px solid #ffedd5',
                  color: '#d97706',
                  padding: '0.65rem 1.35rem',
                  borderRadius: '9999px',
                  fontWeight: 400,
                  fontSize: '0.85rem',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(255, 165, 82, 0.12)',
                }}
              >
                <span>{t('satisfactionBtn')}</span>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#FFA552',
                    color: '#0f172a',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                  }}
                >
                  ↗
                </span>
              </a>
            </div>

            {/* Right Column: Paragraph Text */}
            <div style={{ paddingTop: '0.5rem' }}>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.7,
                  margin: 0,
                  fontWeight: 300,
                  maxWidth: '520px',
                }}
              >
                {t('satisfactionParagraph')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uzman Kadromuz */}
      <TeamSection />

      {/* Brands Infinite Marquee Banner Section */}
      <BrandsSection />

      {/* Contact & Free Consultation Form Section */}
      <ContactSection />

      {/* Luxury Studio Footer */}
      <Footer />
    </div>
  );
}
