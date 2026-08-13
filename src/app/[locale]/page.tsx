import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import HeroForm from '@/components/HeroForm';
import ServicesGrid from '@/components/ServicesGrid';
import PatientsSection from '@/components/PatientsSection';
import TransformationsSection from '@/components/TransformationsSection';
import TreatmentProcessSection from '@/components/TreatmentProcessSection';
import TeamSection from '@/components/TeamSection';
import BrandsSection from '@/components/BrandsSection';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const home = await getTranslations('home');

  return (
    <main id="main-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#09090b' }}>
      {/* Global Navigation Header - Sticky across whole page */}
      <Header />

      {/* Hero Section with Video Background */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'calc(100vh - 110px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1.5rem 5rem 1.5rem',
        }}
      >
        {/* Background Video */}
        <HeroVideo />

        {/* Hero 2-Column Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
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
                fontWeight: 400,
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
                  fontWeight: 500,
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
                  fontWeight: 400,
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

      {/* Treatment Services Square Cards Section */}
      <ServicesGrid />

      {/* Hastalarimiz Patient Stories Section */}
      <PatientsSection />

      {/* From First Visit to Final Smile Transformations Carousel */}
      <TransformationsSection />

      {/* Interactive Treatment Process & Quick Contact Section */}
      <TreatmentProcessSection />

      {/* Uzman Kadromuz 3D Perspective Team Carousel */}
      <TeamSection />

      {/* Brands Infinite Marquee Banner Section */}
      <BrandsSection />

      {/* Blog & Dental Health Articles Section */}
      <BlogSection />

      {/* SEO-Rich FAQ & Clinical Guide Section */}
      <FaqSection />

      {/* Contact & Free Consultation Form Section */}
      <ContactSection />

      {/* Luxury Studio Footer */}
      <Footer />
    </main>
  );
}
