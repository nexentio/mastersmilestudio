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

const TREATMENTS_META_TITLES: Record<string, string> = {
  en: 'Dental Treatments & Procedures in Antalya | Master Smile Studio',
  tr: 'Kapsamlı Diş Tedavileri ve Prosedürleri Antalya | Master Smile Studio',
  de: 'Umfassende Zahnbehandlungen in Antalya | Master Smile Studio',
  pl: 'Kompleksowe Leczenie Stomatologiczne w Antalyi | Master Smile Studio',
  pt: 'Tratamentos Dentários Completos em Antália | Master Smile Studio',
  es: 'Tratamientos Dentales Integrales en Antalya | Master Smile Studio',
  ru: 'Комплексное Лечение Зубов в Анталье | Master Smile Studio',
};

const TREATMENTS_META_DESCS: Record<string, string> = {
  en: 'Explore 16+ advanced dental treatment disciplines delivered by specialist surgeons in Antalya, Turkey.',
  tr: 'Antalya’da uzman hekimlerimizle sunulan 16+ ileri diş tedavi branşı, dijital gülüş tasarımı ve implant tedavileri.',
  de: 'Entdecken Sie über 16 fortschrittliche Zahnbehandlungen mit modernster Technologie und Fachärzten in Antalya.',
  pl: 'Poznaj ponad 16 zaawansowanych dziedzin leczenia stomatologicznego w Antalyi z zespołem lekarzy specjalistów.',
  pt: 'Descubra mais de 16 especialidades odontológicas avançadas com tecnologia de ponta e equipa médica em Antália.',
  es: 'Más de 16 ramas odontológicas avanzadas con tecnología de vanguardia y especialistas experimentados en Antalya.',
  ru: 'Более 16 направлений стоматологического лечения с применением передовых технологий и опытных врачей в Анталье.',
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: t('metaTitle') || TREATMENTS_META_TITLES[locale] || TREATMENTS_META_TITLES.en,
    description:
      t('metaDescription') ||
      TREATMENTS_META_DESCS[locale] ||
      TREATMENTS_META_DESCS.en,
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
