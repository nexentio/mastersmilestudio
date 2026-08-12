import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const seoConfig: Record<string, { title: string; description: string; keywords: string[] }> = {
  tr: {
    title: 'Master Smile Studio | Estetik Diş Hekimliği & Dijital Gülüş Tasarımı',
    description: 'Dünya standartlarında estetik diş hekimliği ve kişiye özel dijital gülüş tasarımı deneyimi.',
    keywords: ['Master Smile Studio', 'Estetik Diş Hekimliği', 'Dijital Gülüş Tasarımı', 'Hollywood Smile', 'Zirkonyum Kaplama', 'İmplant Tedavisi', 'E-max Lamina'],
  },
  en: {
    title: 'Master Smile Studio | World-Class Aesthetic Dentistry & Smile Design',
    description: 'World-class aesthetic dentistry and personalized Hollywood smile design experience.',
    keywords: ['Master Smile Studio', 'Aesthetic Dentistry', 'Smile Design', 'Hollywood Smile', 'Dental Implants', 'Zirconium Crowns', 'Porcelain Veneers'],
  },
  de: {
    title: 'Master Smile Studio | Erstklassige Ästhetische Zahnheilkunde & Smile Design',
    description: 'Erstklassige ästhetische Zahnheilkunde und individuelles Hollywood-Lächeln-Design.',
    keywords: ['Master Smile Studio', 'Ästhetische Zahnmedizin', 'Smile Design', 'Hollywood Smile', 'Zahnimplantate', 'Zirkonkronen', 'Veneers'],
  },
  ru: {
    title: 'Master Smile Studio | Эстетическая Стоматология и Дизайн Улыбки',
    description: 'Эстетическая стоматология мирового уровня и персональный дизайн Голливудской улыбки.',
    keywords: ['Master Smile Studio', 'Эстетическая стоматология', 'Дизайн улыбки', 'Голливудская улыбка', 'Виниры', 'Имплантация зубов', 'Циркониевые коронки'],
  },
  pt: {
    title: 'Master Smile Studio | Odontologia Estética e Design de Sorriso',
    description: 'Odontologia estética de classe mundial e experiência personalizada em design de sorriso.',
    keywords: ['Master Smile Studio', 'Odontologia Estética', 'Design de Sorriso', 'Hollywood Smile', 'Implantes Dentários', 'Coroas de Zircônio', 'Lentes de Contato Dental'],
  },
  es: {
    title: 'Master Smile Studio | Odontología Estética y Diseño de Sonrisa',
    description: 'Odontología estética de clase mundial y experiencia personalizada en diseño de sonrisa.',
    keywords: ['Master Smile Studio', 'Odontología Estética', 'Diseño de Sonrisa', 'Hollywood Smile', 'Implantes Dentales', 'Coronas de Circonio', 'Carillas de Porcelana'],
  },
  pl: {
    title: 'Master Smile Studio | Stomatologia Estetyczna i Projektowanie Uśmiechu',
    description: 'Światowej klasy stomatologia estetyczna i indywidualne projektowanie uśmiechu Hollywood.',
    keywords: ['Master Smile Studio', 'Stomatologia Estetyczna', 'Projektowanie Uśmiechu', 'Hollywood Smile', 'Implanty Zębowe', 'Korony Cyrkonowe', 'Licówki'],
  },
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = seoConfig[locale] || seoConfig.tr;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: 'Master Smile Studio',
      locale: locale,
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

  return (
    <html lang={locale} className={outfit.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
