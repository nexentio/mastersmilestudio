import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricesHeroBanner from '@/components/prices-sections/PricesHeroBanner';
import PriceListTableSection from '@/components/prices-sections/PriceListTableSection';
import ContactSection from '@/components/ContactSection';

import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

const META_TITLES: Record<string, string> = {
  tr: 'Antalya Diş Tedavisi ve İmplant Fiyatları | Master Smile Studio',
  en: 'Affordable Turkey Teeth Prices in Antalya | Master Smile Studio',
  de: 'Zahnbehandlungspreise & Kosten in Antalya | Master Smile Studio',
  pl: 'Cennik Leczenia Stomatologicznego w Antalyi | Master Smile Studio',
  pt: 'Preços de Tratamentos Dentários em Antália | Master Smile Studio',
  es: 'Precios de Tratamientos Dentales en Antalya | Master Smile Studio',
  ru: 'Цены на Стоматологическое Лечение в Анталье | Master Smile Studio',
};

const META_DESCS: Record<string, string> = {
  tr: 'Master Smile Studio şeffaf diş tedavi ve implant fiyatları. Zirkonyum, E-Max ve All-on-4 fiyat listesi.',
  en: 'Affordable Turkey teeth prices in Antalya at Master Smile Studio. Transparent pricing for implants, veneers and crowns.',
  de: 'Transparente Zahnarzt- und Implantatpreise in Antalya bei Master Smile Studio. Sparen Sie bis zu 70%.',
  pl: 'Przejrzysty cennik leczenia stomatologicznego i implantów w Antalyi w Master Smile Studio.',
  pt: 'Preços transparentes de tratamentos e implantes dentários em Antália na Master Smile Studio.',
  es: 'Precios transparentes de tratamientos dentales e implantes en Antalya con Master Smile Studio.',
  ru: 'Прозрачные цены на импланты, коронки и виниры в Анталье в клинике Master Smile Studio.',
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: META_TITLES[locale] || META_TITLES.en,
    description: META_DESCS[locale] || META_DESCS.en,
    alternates: getI18nAlternates('/prices', locale),
  };
}

export default async function PricesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />
      
      {/* 1:1 Modular Prices Hero Section */}
      <PricesHeroBanner />

      <main id="main-content" style={{ flex: 1 }}>
        {/* 1:1 Modular Price Tables Grid & Sidebar Section */}
        <PriceListTableSection />

        {/* Studio VIP Consultation & Contact Form Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
