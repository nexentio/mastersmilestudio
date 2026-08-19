import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHeroBanner from '@/components/treatment-sections/TreatmentHeroBanner';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import { getI18nAlternates, TREATMENT_LOCALES } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: t('metaTitle') || 'Dental Treatments in Antalya | Master Smile Studio',
    description:
      t('metaDescription') ||
      'Explore world-class dental treatments, digital smile design, and implants in Antalya, Turkey.',
    alternates: getI18nAlternates('/treatments', locale, TREATMENT_LOCALES),
  };
}

export default async function TreatmentsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  return (
    <div className="treatment-layout-root">
      {/* Global Navigation Header */}
      <Header />

      {/* 1:1 Modular Treatment Hero Section */}
      <TreatmentHeroBanner
        tag={
          locale === 'tr'
            ? 'TEDAVİLERİMİZ'
            : locale === 'de'
            ? 'BEHANDLUNGEN'
            : locale === 'pl'
            ? 'ZABIEGI'
            : locale === 'pt'
            ? 'TRATAMENTOS'
            : locale === 'es'
            ? 'TRATAMIENTOS'
            : locale === 'ru'
            ? 'ПРОЦЕДУРЫ'
            : 'TREATMENTS'
        }
        title={t('pageTitle')}
        subtitle={t('pageSubtitle')}
        primaryBtnText={
          locale === 'tr'
            ? 'Randevu & Bilgi Al'
            : locale === 'de'
            ? 'Kontakt & Termin'
            : locale === 'pl'
            ? 'Kontakt i Rezerwacja'
            : locale === 'pt'
            ? 'Contato e Agendamento'
            : locale === 'es'
            ? 'Contacto y Cita'
            : locale === 'ru'
            ? 'Консультация и Запись'
            : 'Contact & Appointment'
        }
        primaryBtnHref="/contact"
        secondaryBtnText={
          locale === 'tr'
            ? 'Detayları İncele'
            : locale === 'de'
            ? 'Details ansehen'
            : locale === 'pl'
            ? 'Zobacz Szczegóły'
            : locale === 'pt'
            ? 'Ver Detalhes'
            : locale === 'es'
            ? 'Ver Detalles'
            : locale === 'ru'
            ? 'Посмотреть Детали'
            : 'View Details'
        }
        secondaryBtnHref="#treatment-detail-view"
      />

      <div id="treatment-detail-view">
        <TreatmentDetailView />
      </div>

      {/* Studio Luxury Footer */}
      <Footer />
    </div>
  );
}
