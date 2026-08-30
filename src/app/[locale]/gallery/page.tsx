import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryHeroBanner from '@/components/gallery-sections/GalleryHeroBanner';
import GalleryMainSection from '@/components/gallery-sections/GalleryMainSection';

import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

const META_TITLES: Record<string, string> = {
  tr: 'Klinik Genel Galerisi | Master Smile Studio Antalya',
  en: 'Clinic & Treatment Gallery | Master Smile Studio Antalya',
  de: 'Klinikgalerie & Behandlungsräume | Master Smile Studio',
  pl: 'Galeria Kliniki i Gabinetów Stomatologicznych | Master Smile Studio',
  pt: 'Galeria da Clínica e Instalações | Master Smile Studio',
  es: 'Galería de la Clínica e Instalaciones | Master Smile Studio',
  ru: 'Фотогалерея Клиники и Оборудования | Master Smile Studio',
};

const META_DESCS: Record<string, string> = {
  tr: 'Master Smile Studio son teknoloji klinik alanları, VIP odalar ve tedavi üniteleri genel galerisi.',
  en: 'Explore Master Smile Studio modern dental clinic, luxury VIP suites and cutting-edge facilities in Antalya Turkey.',
  de: 'Entdecken Sie die modernen Behandlungsräume, VIP-Suiten und modernste Technologie bei Master Smile Studio in Antalya.',
  pl: 'Zobacz nowoczesne gabinety stomatologiczne, strefy VIP i zaawansowany sprzęt kliniki Master Smile Studio w Antalyi.',
  pt: 'Conheça a moderna clínica dentária da Master Smile Studio, suítes VIP e instalações de última geração em Antália.',
  es: 'Explore la moderna clínica dental de Master Smile Studio, salas VIP e instalaciones de vanguardia en Antalya.',
  ru: 'Ознакомьтесь с современными кабинетами, VIP-зонами и передовым оборудованием клиники Master Smile Studio в Анталье.',
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: META_TITLES[locale] || META_TITLES.en,
    description: META_DESCS[locale] || META_DESCS.en,
    alternates: getI18nAlternates('/gallery', locale),
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
