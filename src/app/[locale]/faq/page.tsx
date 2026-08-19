import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqHeroBanner from '@/components/faq-sections/FaqHeroBanner';
import FaqMainSection from '@/components/faq-sections/FaqMainSection';

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
        ? 'Diş İmplantı ve Tedaviler (SSS) | Master Smile Studio Antalya'
        : 'Dental Implant FAQ | Master Smile Studio Antalya',
    description:
      locale === 'tr'
        ? 'Diş implantı, zirkonyum kaplama, lamine ve Türkiye diş tedavisi hakkında en çok merak edilen sıkça sorulan sorular.'
        : 'Frequently asked questions about dental implants, zirconium crowns, veneers, costs and travel in Antalya Turkey at Master Smile Studio.',
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
