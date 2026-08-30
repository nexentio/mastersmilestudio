import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHeroBanner from '@/components/blog-sections/BlogHeroBanner';
import BlogMainSection from '@/components/blog-sections/BlogMainSection';

import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

const META_TITLES: Record<string, string> = {
  tr: 'Blog & Rehber | Master Smile Studio Antalya',
  en: 'Dental Blog & Guides | Master Smile Studio Antalya',
  de: 'Zahnmedizinischer Blog & Ratgeber | Master Smile Studio',
  pl: 'Blog i Przewodniki Stomatologiczne | Master Smile Studio',
  pt: 'Blog e Guias de Saúde Dentária | Master Smile Studio',
  es: 'Blog y Guías de Salud Dental | Master Smile Studio',
  ru: 'Стоматологический Блог и Статьи | Master Smile Studio',
};

const META_DESCS: Record<string, string> = {
  tr: 'Diş sağlığı, implant, estetik kaplamalar, ünlülerin dişleri ve Türkiye diş turizmi hakkında uzman rehberler ve makaleler.',
  en: 'Expert clinical guides and articles on dental implants, veneers, crowns, celebrity smile makeovers and dental tourism in Antalya, Turkey.',
  de: 'Expertenratgeber zu Zahnimplantaten, Veneers, Kronen und Zahntourismus in Antalya bei Master Smile Studio.',
  pl: 'Profesjonalne artykuły i przewodniki na temat implantów, licówek, koron i turystyki stomatologicznej w Antalyi w Master Smile Studio.',
  pt: 'Artigos e guias especializados sobre implantes, facetas, coroas e turismo dentário em Antália na Master Smile Studio.',
  es: 'Guías y artículos especializados sobre implantes, carillas, coronas y turismo dental en Antalya con Master Smile Studio.',
  ru: 'Экспертные статьи и руководства по зубным имплантам, коронкам, винирам и стоматологическому туризму в Анталье.',
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: META_TITLES[locale] || META_TITLES.en,
    description: META_DESCS[locale] || META_DESCS.en,
    alternates: getI18nAlternates('/blog', locale),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      {/* 1:1 Modular Blog Hero Banner */}
      <BlogHeroBanner />

      <main id="main-content" style={{ flex: 1 }}>
        {/* 1:1 Modular Blog 3-Column Listing & Sidebar */}
        <BlogMainSection />
      </main>

      <Footer />
    </div>
  );
}
