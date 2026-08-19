import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryHeroBanner from '@/components/gallery-sections/GalleryHeroBanner';
import GalleryMainSection from '@/components/gallery-sections/GalleryMainSection';

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
        ? 'Klinik Genel Galerisi | Master Smile Studio Antalya'
        : 'Clinic Gallery | Master Smile Studio Antalya',
    description:
      locale === 'tr'
        ? 'Master Smile Studio son teknoloji klinik alanları, VIP odalar ve tedavi üniteleri genel galerisi.'
        : 'Explore Master Smile Studio modern dental clinic, luxury VIP suites and cutting-edge facilities in Antalya.',
  };
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      {/* 1:1 Modular Clinic Gallery Hero Banner */}
      <GalleryHeroBanner />

      <main id="main-content" style={{ flex: 1 }}>
        {/* 1:1 Modular Interactive Gallery Grid & Sticky Sidebar */}
        <GalleryMainSection />
      </main>

      <Footer />
    </div>
  );
}
