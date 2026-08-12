import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import HeroForm from '@/components/HeroForm';
import ServicesGrid from '@/components/ServicesGrid';
import PatientsSection from '@/components/PatientsSection';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const home = await getTranslations('home');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#09090b' }}>
      {/* Full-bleed Top Wrapper: Video background spans behind Top Header, Header & Hero */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Background Video (Extends to top of viewport) */}
        <HeroVideo />

        {/* Floating / Sticky Header over Video */}
        <Header />

        {/* Hero 2-Column Content Container */}
        <section
          style={{
            position: 'relative',
            zIndex: 2,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 1.5rem 5rem 1.5rem',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '3.5rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Left Column: Title & Description */}
            <div
              style={{
                flex: '1 1 480px',
                maxWidth: '650px',
                textAlign: 'left',
                color: '#ffffff',
              }}
            >
              {/* 2-Word H1 Headline */}
              <h1
                style={{
                  fontSize: '3.75rem',
                  fontWeight: 850,
                  lineHeight: 1.08,
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.035em',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                }}
              >
                {home('welcome')}
              </h1>

              {/* 2-Line Description Subtitle */}
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#e2e8f0',
                  lineHeight: 1.6,
                  marginBottom: '2.25rem',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  fontWeight: 400,
                }}
              >
                {home('description')}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {/* Ücretsiz Konsültasyon */}
                <a
                  href="#contact"
                  className="hero-btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    padding: '0.85rem 1.85rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <span>{home('ctaConsultation')}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="btn-arrow-icon"
                    style={{ transition: 'transform 0.3s ease' }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Tedaviler */}
                <a
                  href="#treatments"
                  className="hero-btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: '0.85rem 1.75rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  <span>{home('ctaTreatments')}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Floating Consultation Form */}
            <div style={{ flex: '0 0 auto' }}>
              <HeroForm />
            </div>
          </div>
        </section>
      </div>

      {/* Treatment Services Square Cards Section */}
      <ServicesGrid />

      {/* Hastalarimiz Patient Stories Section */}
      <PatientsSection />
    </div>
  );
}
