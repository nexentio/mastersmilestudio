import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentsSectionView from '@/components/TreatmentsSectionView';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: 'Kapsamlı Diş Tedavileri | Master Smile Studio',
    description: 'Ağız ve diş sağlığınız için en son teknolojiler ve uzman ekiplerimizle sunulan 16+ ileri diş tedavi branşı.',
  };
}

export default async function TreatmentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fcfcfd', color: '#0f172a' }}>
      {/* Global Navigation Header */}
      <Header />

      {/* Main Treatments Page Hero Header */}
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
                fontWeight: 500,
                color: '#64748b',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Anasayfa</span>
              <span style={{ color: '#cbd5e1' }}>›</span>
              <span style={{ color: '#0f172a', fontWeight: 600 }}>Tedavilerimiz</span>
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
                Tedavilerimiz
              </h1>
            </div>

            <div style={{ maxWidth: '420px', textAlign: 'right' }}>
              <p
                style={{
                  fontSize: '0.925rem',
                  color: '#64748b',
                  margin: 0,
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                Klinik deneyimimiz ve en ileri dijital teknolojilerimizle uygulanan estetik ve klinik diş tedavilerimizin detaylarını inceleyin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Treatments Cards, Clinical Guides & FAQ */}
      <main style={{ flex: 1 }}>
        <TreatmentsSectionView locale={locale} />
      </main>

      {/* Luxury Studio Footer */}
      <Footer />
    </div>
  );
}
