import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackagesHeroBanner from '@/components/packages-sections/PackagesHeroBanner';
import PackagesGridSection from '@/components/packages-sections/PackagesGridSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title:
      locale === 'tr'
        ? 'Türkiye Diş Tedavi Paketleri | Master Smile Studio'
        : 'Turkey Teeth Packages | Dental Packages in Turkey | Master Smile Studio',
    description:
      locale === 'tr'
        ? 'Master Smile Studio VIP diş turizmi, otel konaklama ve transfer dahil diş paketleri.'
        : 'Premium Turkey teeth packages, all-inclusive dental treatments, hotel and VIP transfers at Master Smile Studio.',
  };
}

export default async function PackagesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      {/* 1:1 Modular Turkey Teeth Packages Hero Banner */}
      <PackagesHeroBanner />

      <main id="main-content" style={{ flex: 1 }}>
        {/* 1:1 Modular VIP Package Cards Grid with Terms Info */}
        <PackagesGridSection />

        {/* 1:1 Multi-Step Interactive Quote & Free Consultation Wizard */}
        <div id="contact">
          <TreatmentInteractiveQuoteForm defaultTreatment="All-on-4 / Packages" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
