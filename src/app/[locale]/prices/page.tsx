import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricesHeroBanner from '@/components/prices-sections/PricesHeroBanner';
import PriceListTableSection from '@/components/prices-sections/PriceListTableSection';
import ContactSection from '@/components/ContactSection';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: locale === 'tr' ? 'Antalya Diş Tedavisi ve İmplant Fiyatları | Master Smile Studio' : 'Affordable Turkey Teeth Prices in Antalya | Master Smile Studio',
    description: locale === 'tr' ? 'Master Smile Studio şeffaf diş tedavi ve implant fiyatları.' : 'Affordable Turkey teeth prices in Antalya at Master Smile Studio.',
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
