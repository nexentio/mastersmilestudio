import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeforeAfterHeroBanner from '@/components/before-after-sections/BeforeAfterHeroBanner';
import BeforeAfterMainSection from '@/components/before-after-sections/BeforeAfterMainSection';

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
        ? 'Antalya Diş Tedavisi Öncesi ve Sonrası | Master Smile Studio'
        : 'Turkey Teeth in Antalya: Before and After Dental Implants, Veneers | Master Smile Studio',
    description:
      locale === 'tr'
        ? 'Master Smile Studio implant, zirkonyum kaplama ve lamine diş öncesi & sonrası gerçek hasta dönüşümleri.'
        : 'Explore verified before and after smile transformations, dental implants, veneers and crowns at Master Smile Studio Antalya.',
  };
}

export default async function BeforeAfterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      {/* 1:1 Modular Before & After Hero Banner */}
      <BeforeAfterHeroBanner />

      <main id="main-content" style={{ flex: 1 }}>
        {/* 1:1 Modular Before & After Categories & Lightbox */}
        <BeforeAfterMainSection />
      </main>

      <Footer />
    </div>
  );
}
