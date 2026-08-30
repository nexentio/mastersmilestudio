import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeforeAfterHeroBanner from '@/components/before-after-sections/BeforeAfterHeroBanner';
import BeforeAfterMainSection from '@/components/before-after-sections/BeforeAfterMainSection';

import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

const META_TITLES: Record<string, string> = {
  tr: 'Antalya Diş Tedavisi Öncesi ve Sonrası | Master Smile Studio',
  en: 'Before & After Smile Transformations in Antalya | Master Smile Studio',
  de: 'Vorher-Nachher Zahnbehandlungen in Antalya | Master Smile Studio',
  pl: 'Przed i Po: Metamorfozy Uśmiechu w Antalyi | Master Smile Studio',
  pt: 'Antes e Depois de Tratamentos Dentários em Antália | Master Smile Studio',
  es: 'Antes y Después de Tratamientos Dentales en Antalya | Master Smile Studio',
  ru: 'До и После: Преображение Улыбки в Анталье | Master Smile Studio',
};

const META_DESCS: Record<string, string> = {
  tr: 'Master Smile Studio implant, zirkonyum kaplama ve lamine diş öncesi & sonrası gerçek hasta dönüşümleri ve vaka fotoğrafları.',
  en: 'Explore verified before and after smile transformations, dental implants, veneers and crowns at Master Smile Studio Antalya.',
  de: 'Entdecken Sie echte Vorher-Nachher-Ergebnisse für Zahnimplantate, Veneers und Kronen bei Master Smile Studio in Antalya.',
  pl: 'Zobacz spektakularne metamorfozy uśmiechu przed i po zabiegach implantów, koron i licówek w Master Smile Studio w Antalyi.',
  pt: 'Veja fotos reais de antes e depois de implantes, facetas e coroas dentárias na Master Smile Studio em Antália.',
  es: 'Descubra transformaciones de sonrisa reales antes y después de implantes, carillas y coronas en Master Smile Studio Antalya.',
  ru: 'Посмотрите реальные результаты до и после имплантации, циркониевых коронок и виниров в Master Smile Studio в Анталье.',
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: META_TITLES[locale] || META_TITLES.en,
    description: META_DESCS[locale] || META_DESCS.en,
    alternates: getI18nAlternates('/before-after', locale),
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
