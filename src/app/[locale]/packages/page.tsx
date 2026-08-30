import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackagesHeroBanner from '@/components/packages-sections/PackagesHeroBanner';
import PackagesGridSection from '@/components/packages-sections/PackagesGridSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';

import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

const META_TITLES: Record<string, string> = {
  tr: 'Türkiye Diş Tedavi Paketleri | Master Smile Studio',
  en: 'Turkey Teeth Packages | All-Inclusive Dental Packages | Master Smile Studio',
  de: 'Zahnbehandlungspakete Türkei Antalya | Master Smile Studio',
  pl: 'Pakiety Stomatologiczne w Turcji | Master Smile Studio',
  pt: 'Pacotes de Tratamento Dentário na Turquia | Master Smile Studio',
  es: 'Paquetes de Tratamiento Dental en Turquía | Master Smile Studio',
  ru: 'Стоматологические Пакеты Лечения в Турции | Master Smile Studio',
};

const META_DESCS: Record<string, string> = {
  tr: 'Master Smile Studio VIP diş turizmi, 5 yıldızlı otel konaklama ve transfer dahil her şey dahil diş paketleri.',
  en: 'Premium Turkey teeth packages, all-inclusive dental treatments, 5-star hotel and VIP airport transfers at Master Smile Studio.',
  de: 'All-inclusive Zahnbehandlungspakete in Antalya inklusive 5-Sterne-Hotel und VIP-Transfer bei Master Smile Studio.',
  pl: 'Pakiety stomatologiczne all-inclusive w Antalyi z hotelem 5-gwiazdkowym i transferami VIP w Master Smile Studio.',
  pt: 'Pacotes dentários tudo incluído na Turquia com hotel 5 estrelas e transfers VIP na Master Smile Studio.',
  es: 'Paquetes dentales todo incluido en Turquía con hotel 5 estrellas y traslados VIP en Master Smile Studio.',
  ru: 'Пакеты лечения зубов все включено в Турции с 5* отелем и VIP-трансфером в Master Smile Studio.',
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: META_TITLES[locale] || META_TITLES.en,
    description: META_DESCS[locale] || META_DESCS.en,
    alternates: getI18nAlternates('/packages', locale),
  };
}

export default async function PackagesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      {/* 1:1 Modular Turkey Teeth Packages Hero Banner */}
      <PackagesHeroBanner />

      <main id="main-content" style={{ flex: 1 }}>
        {/* 1:1 Modular VIP Package Cards Grid with Terms Info */}
        <PackagesGridSection />

        {/* 1:1 Multi-Step Interactive Quote & Free Consultation Wizard */}
        <div id="contact">
          <TreatmentInteractiveQuoteForm defaultTreatment="All-on-4 / Packages" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
