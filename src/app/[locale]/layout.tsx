import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import { getI18nAlternates } from '@/lib/i18n-seo';
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const seoConfig: Record<string, { title: string; description: string; keywords: string[] }> = {
  tr: {
    title: 'Master Smile Studio | Estetik Diş Hekimliği & Dijital Gülüş Tasarımı Antalya',
    description: 'Antalya Konyaaltı’nda dünya standartlarında estetik diş hekimliği, Hollywood Smile, Zirkonyum kaplama ve dikişsiz implant tedavileri.',
    keywords: ['Master Smile Studio', 'Antalya Diş Kliniği', 'Konyaaltı Diş Hekimi', 'Estetik Diş Hekimliği Antalya', 'Dijital Gülüş Tasarımı', 'Hollywood Smile Antalya', 'Zirkonyum Kaplama', 'İmplant Tedavisi Antalya', 'E-max Lamina'],
  },
  en: {
    title: 'Master Smile Studio | Aesthetic Dentistry & Digital Smile Design Antalya Turkey',
    description: 'World-class aesthetic dentistry, Hollywood smile design, zirconium crowns, and premium dental implants in Antalya, Turkey.',
    keywords: ['Master Smile Studio', 'Dental Clinic Antalya', 'Dentist Antalya Turkey', 'Hollywood Smile Turkey', 'Dental Implants Antalya', 'Zirconium Crowns', 'Porcelain Veneers Turkey', 'Cosmetic Dentist Antalya'],
  },
  de: {
    title: 'Master Smile Studio | Ästhetische Zahnheilkunde & Smile Design Antalya Türkei',
    description: 'Erstklassige ästhetische Zahnheilkunde, Hollywood Smile, Zirkonkronen und schmerzfreie Zahnimplantate in Antalya, Türkei.',
    keywords: ['Master Smile Studio', 'Zahnklinik Antalya', 'Zahnarzt Türkei', 'Hollywood Smile Antalya', 'Zahnimplantate Türkei', 'Zirkonkronen Antalya', 'Veneers Türkei'],
  },
  ru: {
    title: 'Master Smile Studio | Эстетическая Стоматология и Дизайн Улыбки в Анталии',
    description: 'Стоматология мирового уровня в Анталии: голливудская улыбка, циркониевые коронки, виниры E-max и премиальная имплантация зубов.',
    keywords: ['Master Smile Studio', 'Стоматология Анталия', 'Стоматологическая клиника Турция', 'Голливудская улыбка Анталия', 'Виниры Турция', 'Имплантация зубов Анталия', 'Циркониевые коронки'],
  },
  pt: {
    title: 'Master Smile Studio | Odontologia Estética e Design de Sorriso Antalya',
    description: 'Odontologia estética de classe mundial, Hollywood Smile, coroas de zircônio e implantes dentários em Antalya, Turquia.',
    keywords: ['Master Smile Studio', 'Clínica Dentária Antalya', 'Dentista Turquia', 'Hollywood Smile Antalya', 'Implantes Dentários Turquia', 'Coroas de Zircônio', 'Lentes de Contato Dental'],
  },
  es: {
    title: 'Master Smile Studio | Odontología Estética y Diseño de Sonrisa Antalya',
    description: 'Odontología estética de clase mundial, diseño de sonrisa Hollywood, coronas de circonio e implantes dentales en Antalya, Turquía.',
    keywords: ['Master Smile Studio', 'Clínica Dental Antalya', 'Dentista Turquía', 'Hollywood Smile Antalya', 'Implantes Dentales Turquía', 'Coronas de Circonio', 'Carillas de Porcelana'],
  },
  pl: {
    title: 'Master Smile Studio | Stomatologia Estetyczna i Projektowanie Uśmiechu Antalya',
    description: 'Światowej klasy stomatologia estetyczna, uśmiech Hollywood, korony cyrkonowe i implanty zębowe w Antalyi, Turcja.',
    keywords: ['Master Smile Studio', 'Klinika Stomatologiczna Antalya', 'Dentysta Turcja', 'Hollywood Smile Antalya', 'Implanty Zębowe Turcja', 'Korony Cyrkonowe', 'Licówki E-max'],
  },
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = seoConfig[locale] || seoConfig.tr;

  const alternates = getI18nAlternates('', locale);

  return {
    metadataBase: new URL(siteConfig.domain),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates,
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: siteConfig.name,
      locale: locale,
      url: `${siteConfig.domain}/${locale}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': siteConfig.geo.region,
      'geo.placename': siteConfig.geo.placename,
      'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      'ICBM': `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  // Comprehensive MedicalClinic & Dentist JSON-LD for Google SGE, Perplexity & GEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalClinic', 'LocalBusiness'],
    '@id': `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.domain}/${locale}`,
    logo: `${siteConfig.domain}/logo.png`,
    image: `${siteConfig.domain}/og-image.jpg`,
    description: seoConfig[locale]?.description || seoConfig.tr.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: siteConfig.currenciesAccepted,
    paymentAccepted: siteConfig.paymentAccepted,
    knowsLanguage: siteConfig.languagesSpoken,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: Number(siteConfig.geo.latitude),
      longitude: Number(siteConfig.geo.longitude),
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
      siteConfig.socials.googleMaps,
    ],
    medicalSpecialty: [
      'https://schema.org/Dentistry',
      'CosmeticDentistry',
      'DentalImplantology',
      'Periodontics',
      'Orthodontics',
      'Prosthodontics',
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Hollywood Smile & Digital Smile Design',
        description: 'Personalized aesthetic dental design with porcelain and E-Max laminate veneers.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'All-on-4 & All-on-6 Dental Implants',
        description: 'Advanced 3D guided surgical dental implant solutions for missing teeth.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Zirconium Crowns & Bridges',
        description: 'High-translucency biocompatible aesthetic monolithic zirconium tooth restorations.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Professional Teeth Whitening',
        description: 'In-office laser dental bleaching and stain removal.',
      },
    ],
    employee: [
      {
        '@type': 'Physician',
        name: 'Dr. Fırat İskender',
        jobTitle: 'Estetik Diş Hekimi & Kurucu Ortak',
      },
      {
        '@type': 'Physician',
        name: 'Dr. Ali Kemal Demir',
        jobTitle: 'Çene Cerrahisi & İmplantoloji Uzmanı',
      },
      {
        '@type': 'Physician',
        name: 'Dr. Ozan Öztürk',
        jobTitle: 'Dijital Gülüş Tasarımı Uzmanı',
      },
      {
        '@type': 'Physician',
        name: 'Dr. Tülay Kaya',
        jobTitle: 'Protez & Estetik Diş Hekimi',
      },
      {
        '@type': 'Physician',
        name: 'Dr. Julia Rostova',
        jobTitle: 'Uluslararası Hasta Koordinatörü & Hekim',
      },
      {
        '@type': 'Physician',
        name: 'Dr. Abdullah Yılmaz',
        jobTitle: 'Periodontoloji (Diş Eti) Uzmanı',
      },
      {
        '@type': 'Physician',
        name: 'Dr. Sude Arslan',
        jobTitle: 'Pedodonti & Koruyucu Diş Hekimi',
      },
    ],
  };

  return (
    <html lang={locale} className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
