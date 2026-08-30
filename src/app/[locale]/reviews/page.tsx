import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewsHeroBanner from '@/components/reviews-sections/ReviewsHeroBanner';
import ReviewsMainSection from '@/components/reviews-sections/ReviewsMainSection';

import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

const META_TITLES: Record<string, string> = {
  tr: 'Hasta Yorumları | Master Smile Studio Antalya',
  en: 'Patient Reviews & Testimonials in Antalya | Master Smile Studio',
  de: 'Patientenerfahrungen & Bewertungen Antalya | Master Smile Studio',
  pl: 'Opinie Pacjentów o Klinice w Antalyi | Master Smile Studio',
  pt: 'Avaliações e Opiniões de Pacientes em Antália | Master Smile Studio',
  es: 'Opiniones y Testimonios de Pacientes en Antalya | Master Smile Studio',
  ru: 'Отзывы Пациентов о Клинике в Анталье | Master Smile Studio',
};

const META_DESCS: Record<string, string> = {
  tr: 'Master Smile Studio doğrulanmış Google ve Trustpilot hasta yorumları, puanları ve gerçek tedavi deneyimleri.',
  en: 'Read verified patient reviews on Google & Trustpilot for dental treatments at Master Smile Studio in Antalya.',
  de: 'Lesen Sie verifizierte Google- & Trustpilot-Bewertungen internationaler Patienten bei Master Smile Studio.',
  pl: 'Przeczytaj zweryfikowane opinie pacjentów na Google i Trustpilot o zabiegach w Master Smile Studio w Antalyi.',
  pt: 'Leia avaliações verificadas de pacientes no Google e Trustpilot para tratamentos dentários na Master Smile Studio.',
  es: 'Lea reseñas verificadas de pacientes en Google y Trustpilot sobre tratamientos dentales en Master Smile Studio.',
  ru: 'Читайте проверенные отзывы пациентов на Google и Trustpilot о стоматологическом лечении в Master Smile Studio.',
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: META_TITLES[locale] || META_TITLES.en,
    description: META_DESCS[locale] || META_DESCS.en,
    alternates: getI18nAlternates('/reviews', locale),
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
