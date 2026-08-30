import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqHeroBanner from '@/components/faq-sections/FaqHeroBanner';
import FaqMainSection from '@/components/faq-sections/FaqMainSection';

import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

const META_TITLES: Record<string, string> = {
  tr: 'Diş İmplantı ve Tedaviler (SSS) | Master Smile Studio Antalya',
  en: 'Dental Implant & Treatment FAQ | Master Smile Studio Antalya',
  de: 'Häufig gestellte Fragen (FAQ) zu Zahnimplantaten | Master Smile Studio',
  pl: 'Często Zadawane Pytania (FAQ) o Implanty i Zęby | Master Smile Studio',
  pt: 'Perguntas Frequentes (FAQ) sobre Implantes e Tratamentos | Master Smile Studio',
  es: 'Preguntas Frecuentes (FAQ) sobre Implantes Dentales | Master Smile Studio',
  ru: 'Часто Задаваемые Вопросы (FAQ) по Стоматологии | Master Smile Studio',
};

const META_DESCS: Record<string, string> = {
  tr: 'Diş implantı, zirkonyum kaplama, lamine ve Türkiye diş tedavisi hakkında en çok merak edilen sıkça sorulan sorular.',
  en: 'Frequently asked questions about dental implants, zirconium crowns, veneers, costs and dental travel in Antalya Turkey at Master Smile Studio.',
  de: 'Häufig gestellte Fragen zu Zahnimplantaten, Zirkonkronen, Veneers, Kosten und Ihrer Zahnreise nach Antalya bei Master Smile Studio.',
  pl: 'Najczęściej zadawane pytania dotyczące implantów, koron cyrkonowych, licówek i leczenia zębów w Antalyi w Master Smile Studio.',
  pt: 'Perguntas frequentes sobre implantes dentários, coroas de zircônio, facetas e turismo dentário em Antália na Master Smile Studio.',
  es: 'Preguntas frecuentes sobre implantes dentales, coronas de circonio, carillas y turismo dental en Antalya con Master Smile Studio.',
  ru: 'Ответы на частые вопросы об имплантации зубов, циркониевых коронках, винирах и поездке в Анталью в Master Smile Studio.',
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: META_TITLES[locale] || META_TITLES.en,
    description: META_DESCS[locale] || META_DESCS.en,
    alternates: getI18nAlternates('/faq', locale),
  };
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      {/* 1:1 Modular FAQ Hero Banner */}
      <FaqHeroBanner />

      <main id="main-content" style={{ flex: 1 }}>
        {/* 1:1 Modular FAQ Categories & Accordion Questions */}
        <FaqMainSection />
      </main>

      <Footer />
    </div>
  );
}
