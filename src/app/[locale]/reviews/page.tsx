import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewsHeroBanner from '@/components/reviews-sections/ReviewsHeroBanner';
import ReviewsMainSection from '@/components/reviews-sections/ReviewsMainSection';

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
        ? 'Hasta Yorumları | Master Smile Studio Antalya'
        : 'Master Smile Studio Reviews in Turkey, Antalya',
    description:
      locale === 'tr'
        ? 'Master Smile Studio doğrulanmış Google ve Trustpilot hasta yorumları ve deneyimleri.'
        : 'Read verified patient reviews on Google & Trustpilot for dental treatments at Master Smile Studio in Antalya.',
  };
}

export default async function ReviewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      {/* 1:1 Modular Reviews Hero Banner */}
      <ReviewsHeroBanner />

      <main id="main-content" style={{ flex: 1 }}>
        {/* 1:1 Modular Reviews List Grid & Sticky Sidebar */}
        <ReviewsMainSection />
      </main>

      <Footer />
    </div>
  );
}
