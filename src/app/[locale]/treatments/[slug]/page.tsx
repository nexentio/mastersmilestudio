import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHeroBanner from '@/components/treatment-sections/TreatmentHeroBanner';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import DentalImplantsDetailView from '@/components/DentalImplantsDetailView';
import AllOnSixImplantDetailView from '@/components/AllOnSixImplantDetailView';
import { generateTreatmentJsonLd } from '@/lib/treatment-schema';
import { getI18nAlternates, TREATMENT_LOCALES } from '@/lib/i18n-seo';
import { getTreatmentContent } from '@/lib/treatment-content';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

const HERO_I18N: Record<
  string,
  {
    defaultBadge: string;
    defaultTitle: string;
    defaultSubtitle: string;
    primaryBtnText: string;
    primaryBtnAria: string;
    secondaryBtnText: string;
    secondaryBtnAria: string;
  }
> = {
  en: {
    defaultBadge: 'TREATMENTS',
    defaultTitle: 'Dental Implants in Istanbul',
    defaultSubtitle:
      'Restore your smile with confidence, lifelong guarantees, and expert oral surgeons in Istanbul.',
    primaryBtnText: 'Contact & Appointment',
    primaryBtnAria: 'Contact Master Smile Studio for appointment and consultation',
    secondaryBtnText: 'View Packages & Details',
    secondaryBtnAria: 'Scroll down to explore treatment packages and medical details',
  },
  tr: {
    defaultBadge: 'TEDAVİLERİMİZ',
    defaultTitle: 'İstanbul Diş İmplantı Tedavisi',
    defaultSubtitle:
      'İstanbul’daki kliniğimizde ömür boyu garantili premium implant markaları ve uzman cerrahlarımızla eksiksiz bir gülüşe kavuşun.',
    primaryBtnText: 'Randevu & Bilgi Al',
    primaryBtnAria: 'Randevu ve bilgi almak için iletişim sayfasına gidin',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Tedavi paketlerini ve ayrıntılarını incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'BEHANDLUNGEN',
    defaultTitle: 'Zahnimplantate in Istanbul',
    defaultSubtitle:
      'Stellen Sie Ihr Lächeln wieder her mit lebenslanger Garantie auf Premium-Implantate und erfahrenen Chirurgen in Istanbul.',
    primaryBtnText: 'Kontakt & Termin',
    primaryBtnAria: 'Kontaktieren Sie Master Smile Studio für Beratung und Termin',
    secondaryBtnText: 'Pakete & Details ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Behandlungspakete zu entdecken',
  },
  pl: {
    defaultBadge: 'ZABIEGI',
    defaultTitle: 'Implanty zębowe w Stambule',
    defaultSubtitle:
      'Odzyskaj piękny uśmiech dzięki dożywotniej gwarancji na implanty premium i doświadczonym chirurgom w Stambule.',
    primaryBtnText: 'Kontakt i Rezerwacja',
    primaryBtnAria:
      'Skontaktuj się z Master Smile Studio w celu rezerwacji wizyty i konsultacji',
    secondaryBtnText: 'Zobacz Pakiety i Szczegóły',
    secondaryBtnAria:
      'Przewiń w dół, aby sprawdzić pakiety leczenia i szczegóły medyczne',
  },
  pt: {
    defaultBadge: 'TRATAMENTOS',
    defaultTitle: 'Implantes Dentários em Istambul',
    defaultSubtitle:
      'Recupere seu sorriso com garantia vitalícia em implantes premium e cirurgiões especialistas em Istambul.',
    primaryBtnText: 'Contato e Agendamento',
    primaryBtnAria:
      'Entre em contato com a Master Smile Studio para agendamento e consulta',
    secondaryBtnText: 'Ver Pacotes e Detalhes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de tratamento e detalhes',
  },
  es: {
    defaultBadge: 'TRATAMIENTOS',
    defaultTitle: 'Implantes Dentales en Estambul',
    defaultSubtitle:
      'Recupere su sonrisa con garantía de por vida en implantes prémium y cirujanos expertos en Estambul.',
    primaryBtnText: 'Contacto y Cita',
    primaryBtnAria: 'Póngase en contacto con Master Smile Studio para consultas y citas',
    secondaryBtnText: 'Ver Paquetes y Detalles',
    secondaryBtnAria:
      'Desplácese hacia abajo para ver los paquetes de tratamiento y detalles',
  },
  ru: {
    defaultBadge: 'ПРОЦЕДУРЫ',
    defaultTitle: 'Имплантация зубов в Стамбуле',
    defaultSubtitle:
      'Верните красивую улыбку с пожизненной гарантией на премиальные имплантаты и опытными хирургами в Стамбуле.',
    primaryBtnText: 'Консультация и Запись',
    primaryBtnAria:
      'Свяжитесь с Master Smile Studio для консультации и записи на прием',
    secondaryBtnText: 'Посмотреть Пакеты и Детали',
    secondaryBtnAria:
      'Прокрутите вниз, чтобы изучить пакеты лечения и медицинские детали',
  },
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = await getTreatmentContent(locale, slug);
  const fallbackMeta = HERO_I18N[locale] || HERO_I18N.en;

  const title =
    content?.seo?.title ||
    `${fallbackMeta.defaultTitle} | Master Smile Studio`;

  const description =
    content?.seo?.description || fallbackMeta.defaultSubtitle;

  return {
    title,
    description,
    alternates: getI18nAlternates(`/treatments/${slug}`, locale, TREATMENT_LOCALES),
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = await getTreatmentContent(locale, slug);
  const heroFallback = HERO_I18N[locale] || HERO_I18N.en;

  const isDentalImplants = slug === 'dental-implants';
  const isAllOnSix = slug === 'all-on-6-implants';

  const heroBadge = content?.hero?.badge || heroFallback.defaultBadge;
  const heroTitle = content?.hero?.title || heroFallback.defaultTitle;
  const heroSubtitle = content?.hero?.subtitle || heroFallback.defaultSubtitle;

  const primaryBtnText = content?.hero?.primaryBtn || heroFallback.primaryBtnText;
  const secondaryBtnText = content?.hero?.secondaryBtn || heroFallback.secondaryBtnText;

  const canonicalUrl = `https://mastersmilestudio.com/${locale}/treatments/${slug}`;
  const jsonLd = generateTreatmentJsonLd({
    locale,
    slug,
    title: heroTitle,
    description: heroSubtitle,
    canonicalUrl,
  });

  return (
    <div className="treatment-layout-root">
      {/* Schema.org Advanced JSON-LD @graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Navigation Header */}
      <Header />

      {/* 1:1 Modular Treatment Hero Section with 7-Language i18n */}
      <TreatmentHeroBanner
        tag={heroBadge}
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryBtnText={primaryBtnText}
        primaryBtnHref="/contact"
        primaryBtnAriaLabel={heroFallback.primaryBtnAria}
        secondaryBtnText={secondaryBtnText}
        secondaryBtnHref="#main-content"
        secondaryBtnAriaLabel={heroFallback.secondaryBtnAria}
      />

      {/* Main Content Area Landmark */}
      <main id="main-content" className="treatment-main-content">
        {isDentalImplants ? (
          <DentalImplantsDetailView />
        ) : isAllOnSix ? (
          <AllOnSixImplantDetailView />
        ) : (
          <TreatmentDetailView />
        )}
      </main>

      {/* Studio Luxury Footer */}
      <Footer />
    </div>
  );
}
