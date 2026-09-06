import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import { getI18nAlternates } from '@/lib/i18n-seo';
import WhatsAppPopup from '@/components/whatsapp/WhatsAppPopup';
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const seoConfig: Record<string, { title: string; description: string; keywords: string[] }> = {
  tr: {
    title: 'Master Smile Studio | Estetik Diş Hekimliği & Dijital Gülüş Tasarımı Antalya',
    description: 'Antalya Muratpaşa (Güzeloba)’da dünya standartlarında estetik diş hekimliği, Hollywood Smile, Zirkonyum kaplama ve dikişsiz implant tedavileri.',
    keywords: ['Master Smile Studio', 'Antalya Diş Kliniği', 'Muratpaşa Diş Hekimi', 'Güzeloba Diş Kliniği', 'Estetik Diş Hekimliği Antalya', 'Dijital Gülüş Tasarımı', 'Hollywood Smile Antalya', 'Zirkonyum Kaplama', 'İmplant Tedavisi Antalya', 'E-max Lamina'],
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
      url: `${siteConfig.domain}/${locale}/`,
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
    icons: {
      icon: [
        { url: '/icon0.svg', type: 'image/svg+xml' },
        { url: '/icon1.png', type: 'image/png' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
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
    '@type': ['Dentist', 'MedicalClinic', 'MedicalBusiness'],
    '@id': `${siteConfig.domain}/#clinic`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.domain}/${locale}/`,
    logo: `${siteConfig.domain}/mastersmilestudio-logo.png`,
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
    hasMap: siteConfig.socials.googleMaps,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
      siteConfig.socials.googleMaps,
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'International Health Tourism Authorization Certificate',
      credentialCategory: 'Government Health Tourism License',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Republic of Turkey Ministry of Health',
        sameAs: 'https://www.wikidata.org/wiki/Q6085521',
      },
      url: `${siteConfig.domain}/mastersmilestudio_international-health-tourism-authorization-certification.jpg`,
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Turkish Dental Association (TDB)',
        sameAs: 'https://www.wikidata.org/wiki/Q6044738',
      },
      {
        '@type': 'Organization',
        name: 'International Team for Implantology (ITI)',
        sameAs: 'https://www.wikidata.org/wiki/Q6053896',
      },
    ],
    knowsAbout: [
      { '@type': 'Thing', name: 'Dental implant', sameAs: 'https://www.wikidata.org/wiki/Q1413157' },
      { '@type': 'Thing', name: 'All-on-4', sameAs: 'https://www.wikidata.org/wiki/Q4727773' },
      { '@type': 'Thing', name: 'Veneer (dentistry)', sameAs: 'https://www.wikidata.org/wiki/Q1431414' },
      { '@type': 'Thing', name: 'Zirconium dioxide', sameAs: 'https://www.wikidata.org/wiki/Q410058' },
      { '@type': 'Thing', name: 'Dental tourism', sameAs: 'https://www.wikidata.org/wiki/Q5251147' },
      { '@type': 'Place', name: 'Antalya', sameAs: 'https://www.wikidata.org/wiki/Q406' },
    ],
    medicalSpecialty: [
      'https://schema.org/Dentistry',
      'CosmeticDentistry',
      'DentalImplantology',
      'Periodontics',
      'Orthodontics',
      'Prosthodontics',
      'OralSurgery',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.96',
      reviewCount: '348',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Malcolm Mallia' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Master Smile Studio is not just a clinic but it is filled with a relaxing atmosphere. The preciseness and skill of the surgeon were mind boggling. I highly recommend Master Smile Studio!',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Rafael Rodriguez' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'I came to Antalya to assist my father in law to do an all on 6 upper jaw. The clinic is modern, well equipped and beautiful. Much better than my own doctor in Canada.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sophie Laurent' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Incredible dental journey with Master Smile Studio Antalya. The E-Max veneers look so natural and the VIP transfer and 5-star hotel service made it feel like a luxury holiday.',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'Country', name: 'Russia' },
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'Turkey' },
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dental Treatment Services & VIP Packages',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Dental Implants (All-on-4, All-on-6, Full Mouth)',
          url: `${siteConfig.domain}/${locale}/treatments/dental-implants/`,
        },
        {
          '@type': 'OfferCatalog',
          name: 'Dental Veneers (E-Max, Porcelain Laminate)',
          url: `${siteConfig.domain}/${locale}/treatments/dental-veneers/`,
        },
        {
          '@type': 'OfferCatalog',
          name: 'Dental Crowns (Zirconium, E-Max)',
          url: `${siteConfig.domain}/${locale}/treatments/dental-crowns/`,
        },
        {
          '@type': 'OfferCatalog',
          name: 'Cosmetic Dentistry & Hollywood Smile',
          url: `${siteConfig.domain}/${locale}/treatments/cosmetic-dentistry/`,
        },
      ],
    },
    employee: [
      {
        '@type': 'Physician',
        '@id': `${siteConfig.domain}/#physician-ozan-ozturk`,
        name: 'Dr. Ozan Öztürk',
        jobTitle: 'CEO & Founder | Prosthodontist & Aesthetic Dentist',
        medicalSpecialty: 'CosmeticDentistry',
      },
      {
        '@type': 'Physician',
        '@id': `${siteConfig.domain}/#physician-firat-iskender`,
        name: 'Dt. Fırat İskender',
        jobTitle: 'Oral & Maxillofacial Surgeon | Specialist Dentist',
        medicalSpecialty: 'OralSurgery',
      },
      {
        '@type': 'Person',
        name: 'Tülay Kaya',
        jobTitle: 'International Patient Coordinator',
      },
      {
        '@type': 'Person',
        name: 'Julia Rostova',
        jobTitle: 'International Patient Coordinator (Polish & Russian)',
      },
      {
        '@type': 'Person',
        name: 'Ali Kemal Demir',
        jobTitle: 'Clinical Operations Manager',
      },
      {
        '@type': 'Person',
        name: 'Abdullah Yılmaz',
        jobTitle: 'Patient Relations Specialist',
      },
      {
        '@type': 'Person',
        name: 'Sude Arslan',
        jobTitle: 'Patient Care Coordinator',
      },
    ],
  };

  return (
    <html lang={locale} className={outfit.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://c.clarity.ms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Analytics 4 & Google Ads */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-S7QS0HS2W7"
        />
        <Script
          id="google-analytics-and-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-S7QS0HS2W7');
              gtag('config', 'AW-17551178761');

              // Conversion Trackers
              window.trackPhoneCall = function (phoneNumber) {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                    send_to: 'AW-17551178761/V0FZCLT-n5kbEIn4hrFB',
                  });
                }
                if (typeof clarity !== 'undefined') {
                  clarity('event', 'phoneCall');
                }
              };

              window.trackWhatsAppClick = function (serviceType) {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                    send_to: 'AW-17551178761/V0FZCLT-n5kbEIn4hrFB',
                  });
                }
                if (typeof clarity !== 'undefined') {
                  clarity('event', 'whatsAppClick');
                }
              };

              window.trackConsultationRequest = function (contactMethod) {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                    send_to: 'AW-17551178761/V0FZCLT-n5kbEIn4hrFB',
                  });
                }
                if (typeof clarity !== 'undefined') {
                  clarity('event', 'consultationRequest');
                  clarity('upgrade', 'conversion');
                }
              };
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vgnpq383cw");
            `,
          }}
        />

        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppPopup />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
