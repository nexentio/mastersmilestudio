import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function TreatmentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fcfcfd', color: '#0f172a' }}>
      {/* Global Navigation Header */}
      <Header />

      {/* Exact 1:1 SohoDent Treatment Hero Section */}
      <div className="sect20">
        <Image
          src="/treatment-hero-bg.webp"
          alt={t('pageTitle')}
          fill
          priority
          sizes="100vw"
          className="back1"
        />
        <div className="content">
          <div className="text1">
            {locale === 'tr' ? 'TEDAVİLERİMİZ' : 'TREATMENTS'}
          </div>
          <h1 className="text2">
            {t('pageTitle')}
          </h1>
          <h4 className="text3">
            {t('pageSubtitle')}
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link
              href="/contact"
              className="hero-btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                padding: '0.85rem 1.85rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <span>{t('inquireBtn') || (locale === 'tr' ? 'Randevu & Bilgi Al' : 'Contact & Appointment')}</span>
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
            </Link>

            <a
              href="#treatments-content"
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
                fontWeight: 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <span>{t('exploreCasesBtn') || (locale === 'tr' ? 'Tedavileri İncele' : 'Explore Treatments')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Replicated Full Mouth Implant Section Layout with Numbered Placeholders */}
      <main id="treatments-content" style={{ flex: 1 }}>
        <TreatmentDetailView />
      </main>

      {/* Luxury Studio Footer */}
      <Footer />
    </div>
  );
}
