import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHeroBanner from '@/components/treatment-sections/TreatmentHeroBanner';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import DentalImplantsDetailView from '@/components/DentalImplantsDetailView';
import DentalVeneersDetailView from '@/components/DentalVeneersDetailView';
import DentalCrownsDetailView from '@/components/DentalCrownsDetailView';
import DentalBridgeDetailView from '@/components/DentalBridgeDetailView';
import DenturesDetailView from '@/components/DenturesDetailView';
import CompleteDenturesDetailView from '@/components/CompleteDenturesDetailView';
import PartialDenturesDetailView from '@/components/PartialDenturesDetailView';
import CosmeticDentistryDetailView from '@/components/CosmeticDentistryDetailView';
import SmileMakeoverDetailView from '@/components/SmileMakeoverDetailView';
import GeneralDentistryDetailView from '@/components/GeneralDentistryDetailView';
import DentalCleaningDetailView from '@/components/DentalCleaningDetailView';
import AllOnSixImplantDetailView from '@/components/AllOnSixImplantDetailView';
import AllOnFourImplantDetailView from '@/components/AllOnFourImplantDetailView';
import ImmediateImplantDetailView from '@/components/ImmediateImplantDetailView';
import ZygomaticImplantDetailView from '@/components/ZygomaticImplantDetailView';
import ZirconiumImplantDetailView from '@/components/ZirconiumImplantDetailView';
import ImplantSupportedDenturesDetailView from '@/components/ImplantSupportedDenturesDetailView';
import SinusLiftingDetailView from '@/components/SinusLiftingDetailView';
import ZirconiumCrownsDetailView from '@/components/ZirconiumCrownsDetailView';
import PfmCrownsDetailView from '@/components/PfmCrownsDetailView';
import EmaxCrownsDetailView from '@/components/EmaxCrownsDetailView';
import FullCeramicCrownsDetailView from '@/components/FullCeramicCrownsDetailView';
import PorcelainVeneersDetailView from '@/components/PorcelainVeneersDetailView';
import EmaxVeneersDetailView from '@/components/EmaxVeneersDetailView';
import ZirconiumVeneersDetailView from '@/components/ZirconiumVeneersDetailView';
import CompositeVeneersDetailView from '@/components/CompositeVeneersDetailView';
import LumineersDetailView from '@/components/LumineersDetailView';
import EmpressVeneersDetailView from '@/components/EmpressVeneersDetailView';
import TraditionalBridgesDetailView from '@/components/TraditionalBridgesDetailView';
import MarylandBridgesDetailView from '@/components/MarylandBridgesDetailView';
import CantileverBridgesDetailView from '@/components/CantileverBridgesDetailView';
import DentalCleaningHeroBanner from '@/components/treatment-sections/DentalCleaningHeroBanner';
import GeneralDentistryHeroBanner from '@/components/treatment-sections/GeneralDentistryHeroBanner';
import CosmeticDentistryHeroBanner from '@/components/treatment-sections/CosmeticDentistryHeroBanner';
import DenturesHeroBanner from '@/components/treatment-sections/DenturesHeroBanner';
import DentalBridgesHeroBanner from '@/components/treatment-sections/DentalBridgesHeroBanner';
import DentalVeneersHeroBanner from '@/components/treatment-sections/DentalVeneersHeroBanner';
import DentalCrownsHeroBanner from '@/components/treatment-sections/DentalCrownsHeroBanner';
import DentalImplantsHeroBanner from '@/components/treatment-sections/DentalImplantsHeroBanner';
import {
  DENTAL_IMPLANTS_HERO_I18N,
  FULL_MOUTH_IMPLANTS_HERO_I18N,
  ALL_ON_4_HERO_I18N,
  ALL_ON_6_HERO_I18N,
  IMMEDIATE_IMPLANT_HERO_I18N,
  SINUS_LIFTING_HERO_I18N,
  ZYGOMATIC_IMPLANTS_HERO_I18N,
  ZIRCONIUM_IMPLANTS_HERO_I18N,
  IMPLANT_SUPPORTED_DENTURES_HERO_I18N,
} from '@/data/implant-heroes-i18n';
import {
  DENTAL_CLEANING_SUB_HERO_I18N,
  TOOTH_FILLINGS_SUB_HERO_I18N,
  ROOT_CANAL_SUB_HERO_I18N,
  TOOTH_EXTRACTION_SUB_HERO_I18N,
  INLAY_ONLAY_SUB_HERO_I18N,
  DENTAL_SEALANTS_SUB_HERO_I18N,
  FLUORIDE_SUB_HERO_I18N,
  BRUXISM_SUB_HERO_I18N,
} from '@/data/general-sub-heroes-i18n';
import GeneralDentistryIntroSection from '@/components/treatment-sections/GeneralDentistryIntroSection';
import GeneralDentistryAccordionSection from '@/components/treatment-sections/GeneralDentistryAccordionSection';
import GeneralDentistryJourneySection from '@/components/treatment-sections/GeneralDentistryJourneySection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import RealPatientsSection from '@/components/RealPatientsSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import GeneralDentistryFaqSection from '@/components/treatment-sections/GeneralDentistryFaqSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import { generateTreatmentJsonLd } from '@/lib/treatment-schema';
import { getI18nAlternates, TREATMENT_LOCALES } from '@/lib/i18n-seo';
import { getTreatmentContent } from '@/lib/treatment-content';

const TREATMENT_NESTED_SLUGS = [
  [
    "dental-implants",
    "full-mouth-implants"
  ],
  [
    "dental-implants",
    "full-mouth-dental-implants"
  ],
  [
    "dental-implants",
    "all-on-4-implants"
  ],
  [
    "dental-implants",
    "all-on-4-dental-implants"
  ],
  [
    "dental-implants",
    "all-on-6-implants"
  ],
  [
    "dental-implants",
    "all-on-6-dental-implants"
  ],
  [
    "dental-implants",
    "immediate-implant-treatment"
  ],
  [
    "dental-implants",
    "immediate-implants"
  ],
  [
    "dental-implants",
    "immediate-dental-implants"
  ],
  [
    "dental-implants",
    "zygomatic-implants"
  ],
  [
    "dental-implants",
    "zirconium-implants"
  ],
  [
    "dental-implants",
    "implant-supported-dentures"
  ],
  [
    "dental-implants",
    "sinus-lifting"
  ],
  [
    "dental-crowns",
    "zirconium-crowns"
  ],
  [
    "dental-crowns",
    "zirconia-crowns"
  ],
  [
    "dental-crowns",
    "pfm-crowns"
  ],
  [
    "dental-crowns",
    "metal-porcelain-crowns"
  ],
  [
    "dental-crowns",
    "emax-crowns"
  ],
  [
    "dental-crowns",
    "e-max-crowns"
  ],
  [
    "dental-crowns",
    "full-ceramic"
  ],
  [
    "dental-crowns",
    "full-ceramic-crowns"
  ],
  [
    "dental-veneers",
    "porcelain-veneers"
  ],
  [
    "dental-veneers",
    "porcelain-laminate-veneers"
  ],
  [
    "dental-veneers",
    "emax-veneers"
  ],
  [
    "dental-veneers",
    "e-max-veneers"
  ],
  [
    "dental-veneers",
    "zirconium-veneers"
  ],
  [
    "dental-veneers",
    "composite-veneers"
  ],
  [
    "dental-veneers",
    "lumineers"
  ],
  [
    "dental-veneers",
    "empress-veneers"
  ],
  [
    "dental-bridge",
    "traditional-bridges"
  ],
  [
    "dental-bridge",
    "maryland-bridges"
  ],
  [
    "dental-bridge",
    "cantilever-bridges"
  ],
  [
    "dental-bridges",
    "traditional-bridges"
  ],
  [
    "dental-bridges",
    "maryland-bridges"
  ],
  [
    "dental-bridges",
    "cantilever-bridges"
  ],
  [
    "dental-bridges",
    "implant-supported-bridges"
  ],
  [
    "dentures",
    "complete-dentures"
  ],
  [
    "dentures",
    "partial-dentures"
  ],
  [
    "dentures",
    "overdentures"
  ],
  [
    "dentures",
    "implant-supported-dentures"
  ],
  [
    "cosmetic-dentistry",
    "smile-makeover"
  ],
  [
    "cosmetic-dentistry",
    "hollywood-smile"
  ],
  [
    "cosmetic-dentistry",
    "gummy-smile"
  ],
  [
    "cosmetic-dentistry",
    "gummy-smile-treatment"
  ],
  [
    "cosmetic-dentistry",
    "teeth-whitening"
  ],
  [
    "cosmetic-dentistry",
    "tooth-contouring"
  ],
  [
    "cosmetic-dentistry",
    "tooth-contouring-shaping"
  ],
  [
    "cosmetic-dentistry",
    "tooth-contouring-and-shaping"
  ],
  [
    "cosmetic-dentistry",
    "diastema-closure"
  ],
  [
    "general-dentistry",
    "dental-cleaning"
  ],
  [
    "general-dentistry",
    "teeth-cleaning-scaling"
  ],
  [
    "general-dentistry",
    "tooth-fillings"
  ],
  [
    "general-dentistry",
    "composite-fillings-inlays"
  ],
  [
    "general-dentistry",
    "root-canal"
  ],
  [
    "general-dentistry",
    "root-canal-treatment"
  ],
  [
    "general-dentistry",
    "tooth-extraction"
  ],
  [
    "general-dentistry",
    "tooth-extractions-wisdom-teeth"
  ],
  [
    "general-dentistry",
    "inlay-onlay"
  ],
  [
    "general-dentistry",
    "dental-sealants"
  ],
  [
    "general-dentistry",
    "fluoride-treatment"
  ],
  [
    "general-dentistry",
    "bruxism-treatment"
  ]
];

export function generateStaticParams() {
  const locales = ['en', 'tr', 'de', 'pl', 'pt', 'es', 'ru'];
  const params: { locale: string; slug: string[] }[] = [];
  locales.forEach((locale) => {
    TREATMENT_NESTED_SLUGS.forEach((slug) => {
      params.push({ locale, slug });
    });
  });
  return params;
}

interface PageProps {
  params: Promise<{ locale: string; slug: string[] }>;
}

interface TreatmentMetaCategory {
  title: Record<string, string>;
  description: Record<string, string>;
}

const TREATMENT_CATEGORY_METAS: Record<string, TreatmentMetaCategory> = {
  default: {
    title: {
      en: 'Dental Treatments in Antalya, Turkey | Master Smile Studio',
      tr: 'Antalya Diş Tedavisi ve Fiyatları | Master Smile Studio',
      de: 'Zahnbehandlungen in Antalya Türkei | Master Smile Studio',
      pl: 'Leczenie Stomatologiczne w Antalyi w Turcji | Master Smile Studio',
      pt: 'Tratamentos Dentários em Antália, Turquia | Master Smile Studio',
      es: 'Tratamientos Dentales en Antalya, Turquía | Master Smile Studio',
      ru: 'Лечение Зубов в Анталье, Турция | Master Smile Studio',
    },
    description: {
      en: 'World-class dental treatments in Antalya, Turkey with expert dentists, 5-star hotel and VIP transfers.',
      tr: 'Antalya’da uzman diş hekimleri ve cerrahlarımızla dünya standartlarında dental tedaviler, 5 yıldızlı otel ve VIP transfer.',
      de: 'Erstklassige Zahnbehandlungen in Antalya, Türkei mit erfahrenen Zahnärzten, 5-Sterne-Hotel und VIP-Transfers.',
      pl: 'Światowej klasy leczenie stomatologiczne w Antalyi w Turcji z zespołem ekspertów, hotelem 5-gwiazdkowym i transferem VIP.',
      pt: 'Tratamentos dentários de classe mundial em Antália, Turquia, com médicos especialistas, hotel 5 estrelas e transfers VIP.',
      es: 'Tratamientos dentales de primer nivel en Antalya, Turquía, con odontólogos expertos, hotel de 5 estrellas y traslados VIP.',
      ru: 'Стоматологическое лечение мирового уровня в Анталье, Турция, с опытными врачами, 5* отелем и VIP-трансфером.',
    },
  },
  general: {
    title: {
      en: 'General & Preventive Dentistry in Antalya, Turkey | Master Smile Studio',
      tr: 'Antalya Genel Diş Hekimliği & Tedavi Fiyatları | Master Smile Studio',
      de: 'Allgemeine & Präventive Zahnheilkunde in Antalya | Master Smile Studio',
      pl: 'Stomatologia Ogólna i Profilaktyka w Antalyi | Master Smile Studio',
      pt: 'Medicina Dentária Geral e Preventiva em Antália | Master Smile Studio',
      es: 'Odontología General y Preventiva en Antalya | Master Smile Studio',
      ru: 'Общая и Профилактическая Стоматология в Анталье | Master Smile Studio',
    },
    description: {
      en: 'Microscopic root canal therapy, ultrasonic Swiss Air-Flow scaling, composite fillings, and wisdom tooth extractions in Antalya.',
      tr: 'Ağrısız mikroskobik kanal tedavisi, Air-Flow diş temizliği, estetik nanokompozit dolgular ve 20’lik diş çekimleri.',
      de: 'Mikroskopische Wurzelkanalbehandlung, Air-Flow Zahnreinigung, Nanokomposit-Füllungen und Weisheitszahn-Extraktionen in Antalya.',
      pl: 'Mikroskopowe leczenie kanałowe, czyszczenie Air-Flow, wypełnienia kompozytowe i ekstrakcje ósemek w Antalyi.',
      pt: 'Endodontia microscópica, destartarização Air-Flow, restaurações em compósito e extração de sisos em Antália.',
      es: 'Endodoncia microscópica, limpieza Air-Flow, empastes de composite estético y extracción de muelas del juicio en Antalya.',
      ru: 'Микроскопическое лечение каналов, чистка Air-Flow, композитные пломбы и удаление зубов мудрости в Анталье.',
    },
  },
  smileMakeover: {
    title: {
      en: 'Smile Makeover & 3D Digital Smile Design in Antalya, Turkey | Master Smile Studio',
      tr: 'Antalya Smile Makeover & 3D Dijital Gülüş Tasarımı | Master Smile Studio',
      de: 'Smile Makeover & 3D Digital Smile Design in Antalya | Master Smile Studio',
      pl: 'Metamorfoza Uśmiechu & Cyfrowe Projektowanie 3D w Antalyi | Master Smile Studio',
      pt: 'Transformação do Sorriso & Design Digital 3D em Antália | Master Smile Studio',
      es: 'Diseño Digital de Sonrisa 3D y Smile Makeover en Antalya | Master Smile Studio',
      ru: 'Преображение Улыбки и 3D Цифровой Дизайн в Анталье | Master Smile Studio',
    },
    description: {
      en: 'AI-guided 3D Digital Smile Design with customized facial golden ratio analysis and live in-mouth physical mock-up try-in in Antalya.',
      tr: 'Yüzün altın oranına özel 3D dijital analiz, yapay zeka destekli planlama ve diş kesimi öncesi canlı mock-up provası.',
      de: 'KI-gestütztes 3D Digital Smile Design mit Goldener-Schnitt-Gesichtsanalyse und Live-Mock-up-Anprobe vor dem Beschleifen.',
      pl: 'Projektowanie uśmiechu 3D oparte na złotej proporcji twarzy i przymiarka mock-up na żywo przed szlifowaniem zębów.',
      pt: 'Design de Sorriso Digital 3D com análise da proporção áurea facial e prova mock-up física ao vivo em Antália.',
      es: 'Diseño de Sonrisa Digital 3D guiado por IA con análisis de proporción áurea y prueba física mock-up en boca en Antalya.',
      ru: '3D цифровой дизайн улыбки по золотому сечению лица и примерка мокапа до препарирования зубов в Анталье.',
    },
  },
  hollywoodSmile: {
    title: {
      en: 'Hollywood Smile in Antalya, Turkey (Full Smile Makeover) | Master Smile Studio',
      tr: 'Antalya Hollywood Smile Fiyatları & Gülüş Tasarımı | Master Smile Studio',
      de: 'Hollywood Smile in Antalya Türkei (Komplettes Lächeln) | Master Smile Studio',
      pl: 'Hollywood Smile w Antalyi w Turcji (Pełna Metamorfoza) | Master Smile Studio',
      pt: 'Hollywood Smile em Antália, Turquia (Sorriso Completo) | Master Smile Studio',
      es: 'Sonrisa Hollywood en Antalya, Turquía (Transformación Total) | Master Smile Studio',
      ru: 'Голливудская Улыбка в Анталье, Турция (Полное Преображение) | Master Smile Studio',
    },
    description: {
      en: 'Complete aesthetic transformation with 16 to 20 Swiss Ivoclar E-Max veneers or German Zirconia crowns crafted to your facial Golden Ratio.',
      tr: '16-20 adet İsviçre Ivoclar E-Max veya Alman Zirkonyum kaplama ile 4-6 günde kusursuz beyaz simetri ve büyüleyici Hollywood gülüşü.',
      de: 'Komplette Ästhetik-Transformation mit 16-20 Ivoclar E-Max Veneers oder Zirkonkronen nach dem Goldenen Schnitt in 4-6 Tagen.',
      pl: 'Kompletna metamorfoza z 16-20 licówkami Ivoclar E-Max lub koronami cyrkonowymi w 4-6 dni w Master Smile Studio.',
      pt: 'Transformação estética total com 16 a 20 facetas E-Max ou coroas de zircônio em 4-6 dias em Antália.',
      es: 'Transformación estética completa con 16 a 20 carillas E-Max o coronas de circonio en 4-6 días en Antalya.',
      ru: 'Полное эстетическое преображение с 16-20 винирами E-Max или циркониевыми коронками за 4-6 дней в Анталье.',
    },
  },
  gummySmile: {
    title: {
      en: 'Gummy Smile Treatment & Laser Gum Contouring in Antalya, Turkey | Master Smile Studio',
      tr: 'Antalya Gummy Smile & Diş Eti Estetiği Tedavisi | Master Smile Studio',
      de: 'Gummy Smile Behandlung & Laser-Zahnfleischkorrektur in Antalya | Master Smile Studio',
      pl: 'Leczenie Uśmiechu Dziąsłowego (Gummy Smile) w Antalyi | Master Smile Studio',
      pt: 'Tratamento de Sorriso Gengival a Laser em Antália | Master Smile Studio',
      es: 'Tratamiento de Sonrisa Gingival con Láser en Antalya | Master Smile Studio',
      ru: 'Лечение Десневой Улыбки (Gummy Smile) Лазером в Анталье | Master Smile Studio',
    },
    description: {
      en: 'Painless diode laser gingivectomy and aesthetic gum contouring to balance excessive gum display and enhance smile symmetry in Antalya.',
      tr: 'Ağrısız ve dikişsiz diyot lazer teknolojisi ile diş eti seviyeleme, pembe estetik ve gülüş simetrisi optimizasyonu.',
      de: 'Schmerzfreie Diodenlaser-Gingivektomie zur Harmonisierung von zu viel sichtbarem Zahnfleisch in Antalya.',
      pl: 'Bezbolesna gingiwektomia laserowa korygująca nadmierną ekspozycję dziąseł w Antalyi.',
      pt: 'Gengivectomia indolor a laser de díodo para harmonização estética do sorriso gengival em Antália.',
      es: 'Gingivectomía indolora con láser de diodo para equilibrar la exposición excesiva de encías en Antalya.',
      ru: 'Безболезненная лазерная пластика десны для идеальной симметрии улыбки в Анталье.',
    },
  },
  whitening: {
    title: {
      en: 'Laser Teeth Whitening in Antalya, Turkey (Philips Zoom) | Master Smile Studio',
      tr: 'Antalya Lazerle Diş Beyazlatma & Philips Zoom Fiyatları | Master Smile Studio',
      de: 'Laser-Zahnaufhellung in Antalya Türkei (Philips Zoom) | Master Smile Studio',
      pl: 'Wybielanie Zębów Lampą Philips Zoom w Antalyi w Turcji | Master Smile Studio',
      pt: 'Branqueamento Dentário a Laser em Antália (Philips Zoom) | Master Smile Studio',
      es: 'Blanqueamiento Dental Láser en Antalya, Turquía (Philips Zoom) | Master Smile Studio',
      ru: 'Лазерное Отбеливание Зубов в Анталье (Philips Zoom) | Master Smile Studio',
    },
    description: {
      en: 'In-clinic professional light-activated Philips Zoom Blue LED whitening lightening enamel by 6 to 8 shades safely in 45 minutes in Antalya.',
      tr: 'Klinik ortamında Philips Zoom Blue LED ışık aktivasyonu ile tek seansta 6-8 tona kadar güvenli ve kalıcı beyazlatma.',
      de: 'Professionelles Philips Zoom LED Bleaching für bis zu 8 Nuancen hellere Zähne in 45 Minuten.',
      pl: 'Profesjonalne wybielanie Philips Zoom rozjaśniające zęby o 6-8 odcieni w 45 minut.',
      pt: 'Branqueamento profissional Philips Zoom com clareamento de 6 a 8 tons em 45 minutos em Antália.',
      es: 'Blanqueamiento profesional Philips Zoom aclarando de 6 a 8 tonos de forma segura en 45 minutos en Antalya.',
      ru: 'Профессиональное отбеливание Philips Zoom на 6-8 тонов за 45 минут в Анталье.',
    },
  },
  implants: {
    title: {
      en: 'Dental Implants Cost in Antalya, Turkey | Master Smile Studio',
      tr: 'Antalya Diş İmplantı Tedavisi ve Fiyatları | Master Smile Studio',
      de: 'Zahnimplantate Kosten & Behandlung in Antalya Türkei | Master Smile Studio',
      pl: 'Implanty Zębowe w Antalyi w Turcji (Cennik i Zabiegi) | Master Smile Studio',
      pt: 'Implantes Dentários em Antália, Turquia (Preços e Tratamento) | Master Smile Studio',
      es: 'Implantes Dentales en Antalya, Turquía (Precios y Tratamiento) | Master Smile Studio',
      ru: 'Имплантация Зубов в Анталье, Турция (Цены и Лечение) | Master Smile Studio',
    },
    description: {
      en: 'Dental implants in Antalya, Turkey. Highest quality Swiss & German titanium implants with lifetime guarantee.',
      tr: 'Antalya’da uzman çene cerrahları ile dünya markası titanyum implant tedavisi. Şeffaf her şey dahil paket fiyatları ve ömür boyu garanti.',
      de: 'Zahnimplantate in Antalya mit Schweizer & Deutschen Premium-Titanimplantaten und lebenslanger Garantie.',
      pl: 'Implanty zębowe w Antalyi. Szwajcarskie i niemieckie implanty tytanowe z dożywotnią gwarancją i pakietami all-inclusive.',
      pt: 'Implantes dentários em Antália com titânio premium suíço e alemão e garantia vitalícia.',
      es: 'Implantes dentales en Antalya con titanio suizo y alemán de primera calidad y garantía de por vida.',
      ru: 'Зубные импланты в Анталье: премиальные швейцарские и немецкие титановые импланты с пожизненной гарантией.',
    },
  },
  veneers: {
    title: {
      en: 'Dental Veneers in Antalya, Turkey (E-Max Laminates) | Master Smile Studio',
      tr: 'Antalya Diş Kaplama & Lamina Fiyatları | Master Smile Studio',
      de: 'Veneers & E-Max Laminate in Antalya Türkei | Master Smile Studio',
      pl: 'Licówki Porcelanowe i E-Max w Antalyi w Turcji | Master Smile Studio',
      pt: 'Facetas Dentárias e Lentes E-Max em Antália | Master Smile Studio',
      es: 'Carillas Dentales y E-Max en Antalya, Turquía | Master Smile Studio',
      ru: 'Виниры и Люминиры E-Max в Анталье, Турция | Master Smile Studio',
    },
    description: {
      en: 'Swiss Ivoclar E-Max porcelain veneers and laminates in Antalya. Natural, stain-resistant smile transformations in 4-6 days.',
      tr: 'İsviçre menşeli Ivoclar E-Max porselen laminalarla 4-6 günde leke tutmayan, doğal ve kusursuz Hollywood gülüşü.',
      de: 'Schweizer Ivoclar E-Max Keramikveneers in Antalya. Natürlich schöne, verfärbungssichere Zähne in 4-6 Tagen.',
      pl: 'Licówki porcelanowe Ivoclar E-Max w Antalyi. Naturalna biel odporna na przebarwienia w 4-6 dni.',
      pt: 'Facetas de porcelana Ivoclar E-Max em Antália. Sorriso natural e resistente a manchas em 4-6 dias.',
      es: 'Carillas de porcelana Ivoclar E-Max en Antalya. Sonrisa natural y resistente a manchas en 4-6 días.',
      ru: 'Фарфоровые виниры Ivoclar E-Max в Анталье. Естественная белизна и защита от окрашивания за 4-6 дней.',
    },
  },
  crowns: {
    title: {
      en: 'Dental Crowns Cost in Antalya, Turkey (Zirconia & E-Max) | Master Smile Studio',
      tr: 'Antalya Zirkonyum & Kron Diş Kaplama Fiyatları | Master Smile Studio',
      de: 'Zahnkronen & Zirkonkronen in Antalya Türkei | Master Smile Studio',
      pl: 'Korony Cyrkonowe i E-Max w Antalyi w Turcji | Master Smile Studio',
      pt: 'Coroas Dentárias de Zircônio e E-Max em Antália | Master Smile Studio',
      es: 'Coronas Dentales de Circonio y E-Max en Antalya | Master Smile Studio',
      ru: 'Циркониевые Коронки и E-Max в Анталье, Турция | Master Smile Studio',
    },
    description: {
      en: 'Premium German Zirconia & E-Max dental crowns in Antalya. High fracture resistance, natural translucency, and 5-year warranty.',
      tr: '1200+ MPa Alman Zirkonyum ve Ivoclar E-Max kron kaplamalarla kırık ve kanal tedavili dişlerinizi kurtarın. 5 yıl tam garanti.',
      de: 'Premium Zirkonkronen & E-Max Kronen in Antalya. Hohe Bruchfestigkeit, natürliche Transluzenz und 5 Jahre Garantie.',
      pl: 'Niemieckie korony cyrkonowe i E-Max w Antalyi. Wyjątkowa trwałość, naturalna przezierność i 5 lat gwarancji.',
      pt: 'Coroas de zircônio alemão e E-Max em Antália. Alta resistência, translucidez natural e 5 anos de garantia.',
      es: 'Coronas dentales de circonio alemán y E-Max en Antalya. Alta resistencia, traslucidez natural y 5 años de garantía.',
      ru: 'Немецкие циркониевые коронки и E-Max в Анталье. Высокая прочность, натуральная прозрачность и гарантия 5 лет.',
    },
  },
  dentures: {
    title: {
      en: 'Dentures Cost in Antalya, Turkey (Snap-On Overdentures) | Master Smile Studio',
      tr: 'Antalya Protez Diş & Çıt Çıtlı Damak Fiyatları | Master Smile Studio',
      de: 'Zahnprothesen in Antalya Türkei (Druckknopfprothesen) | Master Smile Studio',
      pl: 'Protezy Zębowe w Antalyi w Turcji (Zatrzaskowe) | Master Smile Studio',
      pt: 'Próteses Dentárias em Antália, Turquia | Master Smile Studio',
      es: 'Prótesis Dentales en Antalya, Turquía (Sobredentaduras) | Master Smile Studio',
      ru: 'Зубные Протезы в Анталье, Турция (Съемные и Бюгельные) | Master Smile Studio',
    },
    description: {
      en: 'Snap-On implant overdentures and precision complete dentures in Antalya. Rock-solid retention with zero slipping.',
      tr: 'Oynayan damaklara son veren implant destekli çıtçıtlı protezler ve kırılmaya dayanıklı tam damak protezleri.',
      de: 'Implantatgetragene Druckknopfprothesen und Vollprothesen in Antalya mit sicherem Halt ohne Verrutschen.',
      pl: 'Protezy na zatrzaskach i stabilne protezy całkowite w Antalyi bez kleju i przesuwania.',
      pt: 'Sobredentaduras sobre implantes e próteses totais de alta precisão em Antália com fixação firme.',
      es: 'Sobredentaduras sobre implantes y prótesis completas de precisión en Antalya con fijación total.',
      ru: 'Протезы на имплантах с кнопочной фиксацией и полные съемные протезы в Анталье.',
    },
  },
  bridges: {
    title: {
      en: 'Dental Bridges in Antalya, Turkey (Zirconia & Implant Bridges) | Master Smile Studio',
      tr: 'Antalya Diş Köprüsü Fiyatları ve Tedavisi | Master Smile Studio',
      de: 'Zahnbrücken in Antalya Türkei (Zirkon & Implantatbrücken) | Master Smile Studio',
      pl: 'Mosty Protetyczne w Antalyi w Turcji (Cyrkonowe) | Master Smile Studio',
      pt: 'Pontes Dentárias em Antália, Turquia (Zircônia) | Master Smile Studio',
      es: 'Puentes Dentales en Antalya, Turquía (Circonio) | Master Smile Studio',
      ru: 'Зубные Мосты в Анталье, Турция (Циркониевые и на Имплантах) | Master Smile Studio',
    },
    description: {
      en: 'High-strength Zirconia and Implant-supported dental bridges in Antalya, Turkey. Restore missing teeth in 4-6 days with 5-star VIP care.',
      tr: 'Eksik dişleriniz için Alman Zirkonyum ve implant destekli sabit köprü tedavisi. 4-6 günde 5 yıldızlı otel konforuyla yeni bir gülüş.',
      de: 'Hochfeste Zirkon- und implantatgetragene Zahnbrücken in Antalya zur Wiederherstellung fehlender Zähne in 4-6 Tagen.',
      pl: 'Mosty cyrkonowe i mosty na implantach w Antalyi. Odbudowa braków zębowych w 4-6 dni z obsługą VIP.',
      pt: 'Pontes dentárias em zircônia e sobre implantes em Antália. Recuperação de dentes perdidos em 4-6 dias.',
      es: 'Puentes dentales de circonio y sobre implantes en Antalya para restaurar piezas dentales en 4-6 días.',
      ru: 'Циркониевые мостовидные протезы и мосты на имплантах за 4-6 дней в Анталье.',
    },
  },
};

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const slugList = Array.isArray(slug) ? slug : [slug];
  const lastSlug = slugList[slugList.length - 1];
  const slugPath = slugList.join('/');

  const content = await getTreatmentContent(locale, lastSlug);

  // Determine category
  let catKey = 'default';
  if (
    lastSlug.includes('general') ||
    lastSlug.includes('root-canal') ||
    lastSlug.includes('cleaning') ||
    lastSlug.includes('filling') ||
    lastSlug.includes('extraction') ||
    lastSlug.includes('periodont') ||
    lastSlug.includes('inlay-onlay') ||
    lastSlug.includes('sealant') ||
    lastSlug.includes('fluoride') ||
    lastSlug.includes('bruxism')
  ) {
    catKey = 'general';
  } else if (lastSlug === 'smile-makeover' || lastSlug === 'digital-smile-design' || lastSlug === 'gulus-tasarimi') {
    catKey = 'smileMakeover';
  } else if (lastSlug === 'hollywood-smile' || lastSlug === 'hollywood-smile-antalya' || lastSlug === 'hollywood-gulusu') {
    catKey = 'hollywoodSmile';
  } else if (lastSlug.includes('gummy-smile') || lastSlug.includes('gum-contouring') || lastSlug.includes('pembe-estetik')) {
    catKey = 'gummySmile';
  } else if (lastSlug.includes('whitening') || lastSlug.includes('beyazlatma')) {
    catKey = 'whitening';
  } else if (lastSlug.includes('veneer') || lastSlug.includes('lumineer') || lastSlug.includes('lamine')) {
    catKey = 'veneers';
  } else if (lastSlug.includes('crown') || lastSlug.includes('kron')) {
    catKey = 'crowns';
  } else if (lastSlug.includes('denture') || lastSlug.includes('protez') || lastSlug.includes('overdenture')) {
    catKey = 'dentures';
  } else if (lastSlug.includes('bridge') || lastSlug.includes('kopru')) {
    catKey = 'bridges';
  } else if (lastSlug.includes('implant')) {
    catKey = 'implants';
  }

  const categoryMeta = TREATMENT_CATEGORY_METAS[catKey] || TREATMENT_CATEGORY_METAS.default;

  const title =
    content?.seo?.title ||
    categoryMeta.title[locale] ||
    categoryMeta.title.en;

  const description =
    content?.seo?.description ||
    categoryMeta.description[locale] ||
    categoryMeta.description.en;

  return {
    title,
    description,
    alternates: getI18nAlternates(`/treatments/${slugPath}`, locale, TREATMENT_LOCALES),
  };
}

export default async function HierarchicalTreatmentPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  const slugList = Array.isArray(slug) ? slug : [slug];
  const lastSlug = slugList[slugList.length - 1];
  const isCategoryOnly = slugList.length === 1;
  const slugPath = slugList.join('/');

  const content = await getTreatmentContent(locale, lastSlug);

  // Route matching
  const isDentalImplantsCategory =
    lastSlug === 'dental-implants' ||
    lastSlug === 'dental-implant-antalya-turkey' ||
    lastSlug === 'implants' ||
    lastSlug.includes('implant') ||
    lastSlug.includes('full-mouth') ||
    lastSlug.includes('bone-graft') ||
    slugList.includes('dental-implants');

  const isGeneralMain = lastSlug === 'general-dentistry';
  const isGeneralSub =
    (slugList.includes('general-dentistry') && lastSlug !== 'general-dentistry') ||
    [
      'dental-cleaning',
      'tooth-fillings',
      'root-canal',
      'tooth-extraction',
      'inlay-onlay',
      'dental-sealants',
      'fluoride-treatment',
      'bruxism-treatment',
    ].includes(lastSlug);
  const isGeneral = isGeneralMain || isGeneralSub;

  const isSmileMakeover =
    lastSlug === 'smile-makeover' ||
    lastSlug === 'digital-smile-design' ||
    lastSlug === 'gulus-tasarimi';

  const isHollywoodSmile =
    lastSlug === 'hollywood-smile' ||
    lastSlug === 'hollywood-smile-antalya' ||
    lastSlug === 'hollywood-gulusu';

  const isGummySmile =
    lastSlug === 'gummy-smile' ||
    lastSlug === 'gummy-smile-treatment' ||
    lastSlug === 'gum-contouring' ||
    lastSlug === 'pembe-estetik' ||
    lastSlug === 'gingivoplasti';

  const isTeethWhitening =
    lastSlug === 'teeth-whitening' ||
    lastSlug === 'laser-teeth-whitening' ||
    lastSlug === 'whitening' ||
    lastSlug === 'dis-beyazlatma' ||
    lastSlug === 'bleaching';

  const isToothContouring =
    lastSlug === 'tooth-contouring' ||
    lastSlug === 'tooth-contouring-shaping' ||
    lastSlug === 'tooth-shaping' ||
    lastSlug === 'enameloplasty' ||
    lastSlug === 'dis-sekillendirme';

  const isDiastemaClosure =
    lastSlug === 'diastema-closure' ||
    lastSlug === 'diestema-closure' ||
    lastSlug === 'diastema' ||
    lastSlug === 'gap-closure' ||
    lastSlug === 'ayrik-dis-tedavisi';

  const isCosmeticCategory =
    !isSmileMakeover &&
    !isHollywoodSmile &&
    !isGummySmile &&
    !isTeethWhitening &&
    !isToothContouring &&
    !isDiastemaClosure &&
    (lastSlug === 'cosmetic-dentistry' ||
    lastSlug === 'cosmetic-dentistry-antalya' ||
    lastSlug === 'estetik-dis-hekimligi');

  const isCosmetic =
    isCosmeticCategory ||
    isSmileMakeover ||
    isHollywoodSmile ||
    isGummySmile ||
    isTeethWhitening ||
    isToothContouring ||
    isDiastemaClosure;

  const isCompositeVeneers =
    lastSlug === 'composite-veneers' ||
    lastSlug === 'composite-veneer' ||
    lastSlug === 'composite-bonding' ||
    lastSlug === 'kompozit-lamina' ||
    lastSlug === 'kompozit-bonding';

  const isLumineers =
    lastSlug === 'lumineers' ||
    lastSlug === 'lumineer' ||
    lastSlug === 'no-prep-veneers' ||
    lastSlug === 'no-prep-veneer';

  const isEmpressVeneers =
    lastSlug === 'empress-veneers' ||
    lastSlug === 'empress-veneer' ||
    lastSlug === 'ips-empress' ||
    lastSlug === 'empress-lamina';

  const isZirconiumVeneers =
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (lastSlug === 'zirconium-veneers' ||
    lastSlug === 'zirconia-veneers' ||
    lastSlug === 'zirconium-veneer' ||
    lastSlug === 'zirconia-veneer' ||
    lastSlug === 'zirkonyum-lamina');

  const isEmaxVeneers =
    !isZirconiumVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (lastSlug === 'emax-veneers' ||
    lastSlug === 'e-max-veneers' ||
    lastSlug === 'emax-veneer' ||
    lastSlug === 'e-max-veneer' ||
    lastSlug === 'emax-lamina');

  const isPorcelainVeneers =
    !isZirconiumVeneers &&
    !isEmaxVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (lastSlug === 'porcelain-veneers' ||
    lastSlug === 'porcelain-veneer' ||
    lastSlug === 'porselen-lamina' ||
    lastSlug === 'porcelain-laminate-veneers');

  const isDentalVeneers =
    !isPorcelainVeneers &&
    !isEmaxVeneers &&
    !isZirconiumVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (lastSlug.includes('veneer') ||
    lastSlug.includes('lumineer') ||
    lastSlug.includes('lamine') ||
    lastSlug === 'dental-veneers');

  const isZirconiumCrowns =
    lastSlug === 'zirconium-crowns' ||
    lastSlug === 'zirconium-crown' ||
    lastSlug === 'zirconia-crowns' ||
    lastSlug === 'zirkonyum-kaplama' ||
    lastSlug === 'zirconium-dental-crowns';

  const isPfmCrowns =
    lastSlug === 'pfm-crowns' ||
    lastSlug === 'metal-porcelain-crowns' ||
    lastSlug === 'metal-porcelain-crown' ||
    lastSlug === 'pfm-crown';

  const isEmaxCrowns =
    lastSlug === 'emax-crowns' ||
    lastSlug === 'e-max-crowns' ||
    lastSlug === 'emax-crown' ||
    lastSlug === 'e-max-crown' ||
    lastSlug === 'emax-kaplama';

  const isFullCeramicCrowns =
    lastSlug === 'full-ceramic' ||
    lastSlug === 'full-ceramic-crowns' ||
    lastSlug === 'full-ceramic-crown' ||
    lastSlug === 'tam-seramik-kron' ||
    lastSlug === 'tam-seramik-kaplama';

  const isDentalCrowns =
    !isZirconiumCrowns &&
    !isPfmCrowns &&
    !isEmaxCrowns &&
    !isFullCeramicCrowns &&
    (lastSlug.includes('crown') ||
    lastSlug.includes('kron') ||
    lastSlug === 'dental-crowns');

  const isMarylandBridges =
    lastSlug === 'maryland-bridges' ||
    lastSlug === 'maryland-bridge' ||
    lastSlug === 'maryland-kopru' ||
    lastSlug === 'resin-bonded-bridge' ||
    lastSlug === 'resin-bonded-bridges';

  const isCantileverBridges =
    lastSlug === 'cantilever-bridges' ||
    lastSlug === 'cantilever-bridge' ||
    lastSlug === 'cantilever-kopru' ||
    lastSlug === 'balkon-kopru';

  const isTraditionalBridges =
    !isMarylandBridges &&
    !isCantileverBridges &&
    (lastSlug === 'traditional-bridges' ||
    lastSlug === 'traditional-bridge' ||
    lastSlug === 'geleneksel-kopru' ||
    lastSlug === 'fixed-bridges' ||
    lastSlug === 'fixed-bridge');
  const isDentalBridges =
    !isTraditionalBridges &&
    !isMarylandBridges &&
    !isCantileverBridges &&
    (lastSlug.includes('bridge') ||
    lastSlug.includes('kopru') ||
    lastSlug === 'dental-bridge');

  const isCompleteDentures =
    lastSlug === 'complete-dentures' ||
    lastSlug === 'complete-denture' ||
    lastSlug === 'tam-protez' ||
    lastSlug === 'total-protez' ||
    lastSlug === 'full-dentures' ||
    lastSlug === 'full-denture';

  const isPartialDentures =
    lastSlug === 'partial-dentures' ||
    lastSlug === 'partial-denture' ||
    lastSlug === 'bolumlu-protez' ||
    lastSlug === 'parsiyel-protez' ||
    lastSlug === 'kancali-protez' ||
    lastSlug === 'valplast' ||
    lastSlug === 'precision-attachment';

  const isOverdentures =
    lastSlug === 'overdentures' ||
    lastSlug === 'overdenture' ||
    lastSlug === 'snap-on-dentures' ||
    lastSlug === 'snap-on-denture' ||
    lastSlug === 'implant-supported-dentures' ||
    lastSlug === 'implant-supported-dentures-antalya-turkey' ||
    lastSlug === 'implant-supported-overdentures' ||
    lastSlug === 'implant-destekli-protezler-antalya' ||
    lastSlug === 'citcitli-protez' ||
    lastSlug === 'implant-ustu-protez';

  const isImplantSupportedDentures = isOverdentures;

  const isDenturesCategory =
    !isCompleteDentures &&
    !isPartialDentures &&
    !isOverdentures &&
    (lastSlug.includes('denture') ||
    lastSlug.includes('protez') ||
    lastSlug === 'dentures');

  const isDentures = isDenturesCategory;

  const isFullMouth =
    lastSlug === 'full-mouth-implants' ||
    lastSlug === 'full-mouth-dental-implants' ||
    lastSlug === 'full-mouth-implants-antalya-turkey';

  const isAllOnFour =
    lastSlug === 'all-on-4-implants' ||
    lastSlug === 'all-on-four-implant-antalya-turkey' ||
    lastSlug === 'all-on-4' ||
    lastSlug === 'all-on-4-dental-implants';
  const isAllOnSix =
    lastSlug === 'all-on-6-implants' ||
    lastSlug === 'all-on-six-dental-implant-antalya-turkey' ||
    lastSlug === 'all-on-6' ||
    lastSlug === 'all-on-6-dental-implants';
  const isImmediate =
    lastSlug === 'immediate-implant-treatment' ||
    lastSlug === 'immediate-implants' ||
    lastSlug === 'immediate-dental-implants' ||
    lastSlug === 'immediate';
  const isZygomatic =
    lastSlug === 'zygomatic-implants' ||
    lastSlug === 'zygomatic-implants-antalya-turkey' ||
    lastSlug === 'zygomatic';
  const isZirconium =
    lastSlug === 'zirconium-implants' ||
    lastSlug === 'zirconium-implants-antalya-turkey';
  const isSinusLift =
    lastSlug === 'sinus-lifting' ||
    lastSlug === 'sinus-lift';
  const isDentalCleaning =
    lastSlug === 'dental-cleaning' ||
    lastSlug === 'dental-cleaning-in-antalya-turkey' ||
    lastSlug === 'scaling-polishing';
  const isToothFillings =
    lastSlug === 'tooth-fillings' ||
    lastSlug === 'dental-fillings' ||
    lastSlug === 'composite-fillings' ||
    lastSlug === 'amalgam-fillings';
  const isRootCanal =
    lastSlug === 'root-canal' ||
    lastSlug === 'root-canal-treatment' ||
    lastSlug === 'endodontics' ||
    lastSlug === 'kanal-tedavisi';
  const isToothExtraction =
    lastSlug === 'tooth-extraction' ||
    lastSlug === 'tooth-extractions' ||
    lastSlug === 'wisdom-teeth' ||
    lastSlug === 'wisdom-tooth' ||
    lastSlug === 'dis-cekimi';
  const isInlayOnlay =
    lastSlug === 'inlay-onlay' ||
    lastSlug === 'inlays-onlays' ||
    lastSlug === 'inlay-onlay-dental-restorations' ||
    lastSlug === 'inley-onley';
  const isDentalSealants =
    lastSlug === 'dental-sealants' ||
    lastSlug === 'dental-sealant' ||
    lastSlug === 'fissure-sealants' ||
    lastSlug === 'fissur-ortucu';
  const isFluoride =
    lastSlug === 'fluoride-treatment' ||
    lastSlug === 'fluoride' ||
    lastSlug === 'florur-tedavisi';
  const isBruxism =
    lastSlug === 'bruxism-treatment' ||
    lastSlug === 'bruxism' ||
    lastSlug === 'night-guard' ||
    lastSlug === 'gece-plagi';

  let heroBadge = content?.hero?.badge || (locale === 'tr' ? 'TEDAVİLERİMİZ' : locale === 'de' ? 'BEHANDLUNGEN' : locale === 'pl' ? 'ZABIEGI' : locale === 'pt' ? 'TRATAMENTOS' : locale === 'es' ? 'TRATAMIENTOS' : locale === 'ru' ? 'ЛЕЧЕНИЕ' : 'TREATMENTS');
  let heroTitle = content?.hero?.title || t('pageTitle');
  let heroSubtitle = content?.hero?.subtitle || t('pageSubtitle');
  let heroPrimaryBtnText: string | undefined = content?.hero?.primaryBtn;
  let heroSecondaryBtnText: string | undefined = content?.hero?.secondaryBtn;
  let heroPrimaryBtnAria: string | undefined = undefined;
  let heroSecondaryBtnAria: string | undefined = undefined;

  if (isGeneralSub) {
    if (lastSlug === 'dental-cleaning' || lastSlug === 'scaling-polishing') {
      const d = DENTAL_CLEANING_SUB_HERO_I18N[locale] || DENTAL_CLEANING_SUB_HERO_I18N.en;
      heroBadge = d.badge;
      heroTitle = d.title;
      heroSubtitle = d.subtitle;
      heroPrimaryBtnText = d.primaryBtnText;
      heroSecondaryBtnText = d.secondaryBtnText;
    } else if (lastSlug === 'tooth-fillings' || lastSlug === 'dental-fillings' || lastSlug === 'composite-fillings' || lastSlug === 'amalgam-fillings') {
      const d = TOOTH_FILLINGS_SUB_HERO_I18N[locale] || TOOTH_FILLINGS_SUB_HERO_I18N.en;
      heroBadge = d.badge;
      heroTitle = d.title;
      heroSubtitle = d.subtitle;
      heroPrimaryBtnText = d.primaryBtnText;
      heroSecondaryBtnText = d.secondaryBtnText;
    } else if (lastSlug === 'root-canal' || lastSlug === 'root-canal-treatment' || lastSlug === 'endodontics' || lastSlug === 'kanal-tedavisi') {
      const d = ROOT_CANAL_SUB_HERO_I18N[locale] || ROOT_CANAL_SUB_HERO_I18N.en;
      heroBadge = d.badge;
      heroTitle = d.title;
      heroSubtitle = d.subtitle;
      heroPrimaryBtnText = d.primaryBtnText;
      heroSecondaryBtnText = d.secondaryBtnText;
    } else if (lastSlug === 'tooth-extraction' || lastSlug === 'tooth-extractions' || lastSlug === 'wisdom-teeth' || lastSlug === 'wisdom-tooth' || lastSlug === 'dis-cekimi') {
      const d = TOOTH_EXTRACTION_SUB_HERO_I18N[locale] || TOOTH_EXTRACTION_SUB_HERO_I18N.en;
      heroBadge = d.badge;
      heroTitle = d.title;
      heroSubtitle = d.subtitle;
      heroPrimaryBtnText = d.primaryBtnText;
      heroSecondaryBtnText = d.secondaryBtnText;
    } else if (lastSlug === 'inlay-onlay' || lastSlug === 'inlays-onlays' || lastSlug === 'inlay-onlay-dental-restorations' || lastSlug === 'inley-onley') {
      const d = INLAY_ONLAY_SUB_HERO_I18N[locale] || INLAY_ONLAY_SUB_HERO_I18N.en;
      heroBadge = d.badge;
      heroTitle = d.title;
      heroSubtitle = d.subtitle;
      heroPrimaryBtnText = d.primaryBtnText;
      heroSecondaryBtnText = d.secondaryBtnText;
    } else if (lastSlug === 'dental-sealants' || lastSlug === 'dental-sealant' || lastSlug === 'fissure-sealants' || lastSlug === 'fissur-ortucu') {
      const d = DENTAL_SEALANTS_SUB_HERO_I18N[locale] || DENTAL_SEALANTS_SUB_HERO_I18N.en;
      heroBadge = d.badge;
      heroTitle = d.title;
      heroSubtitle = d.subtitle;
      heroPrimaryBtnText = d.primaryBtnText;
      heroSecondaryBtnText = d.secondaryBtnText;
    } else if (lastSlug === 'fluoride-treatment' || lastSlug === 'fluoride' || lastSlug === 'florur-tedavisi') {
      const d = FLUORIDE_SUB_HERO_I18N[locale] || FLUORIDE_SUB_HERO_I18N.en;
      heroBadge = d.badge;
      heroTitle = d.title;
      heroSubtitle = d.subtitle;
      heroPrimaryBtnText = d.primaryBtnText;
      heroSecondaryBtnText = d.secondaryBtnText;
    } else if (lastSlug === 'bruxism-treatment' || lastSlug === 'bruxism' || lastSlug === 'night-guard' || lastSlug === 'gece-plagi') {
      const d = BRUXISM_SUB_HERO_I18N[locale] || BRUXISM_SUB_HERO_I18N.en;
      heroBadge = d.badge;
      heroTitle = d.title;
      heroSubtitle = d.subtitle;
      heroPrimaryBtnText = d.primaryBtnText;
      heroSecondaryBtnText = d.secondaryBtnText;
    }
  } else if (isFullMouth) {
    const d = FULL_MOUTH_IMPLANTS_HERO_I18N[locale] || FULL_MOUTH_IMPLANTS_HERO_I18N.en;
    heroBadge = d.badge;
    heroTitle = d.title;
    heroSubtitle = d.subtitle;
    heroPrimaryBtnText = d.primaryBtnText;
    heroSecondaryBtnText = d.secondaryBtnText;
  } else if (isAllOnFour) {
    const d = ALL_ON_4_HERO_I18N[locale] || ALL_ON_4_HERO_I18N.en;
    heroBadge = d.badge;
    heroTitle = d.title;
    heroSubtitle = d.subtitle;
    heroPrimaryBtnText = d.primaryBtnText;
    heroSecondaryBtnText = d.secondaryBtnText;
  } else if (isAllOnSix) {
    const d = ALL_ON_6_HERO_I18N[locale] || ALL_ON_6_HERO_I18N.en;
    heroBadge = d.badge;
    heroTitle = d.title;
    heroSubtitle = d.subtitle;
    heroPrimaryBtnText = d.primaryBtnText;
    heroSecondaryBtnText = d.secondaryBtnText;
  } else if (isImmediate) {
    const d = IMMEDIATE_IMPLANT_HERO_I18N[locale] || IMMEDIATE_IMPLANT_HERO_I18N.en;
    heroBadge = d.badge;
    heroTitle = d.title;
    heroSubtitle = d.subtitle;
    heroPrimaryBtnText = d.primaryBtnText;
    heroSecondaryBtnText = d.secondaryBtnText;
  } else if (isZygomatic) {
    const d = ZYGOMATIC_IMPLANTS_HERO_I18N[locale] || ZYGOMATIC_IMPLANTS_HERO_I18N.en;
    heroBadge = d.badge;
    heroTitle = d.title;
    heroSubtitle = d.subtitle;
    heroPrimaryBtnText = d.primaryBtnText;
    heroSecondaryBtnText = d.secondaryBtnText;
  } else if (isZirconium) {
    const d = ZIRCONIUM_IMPLANTS_HERO_I18N[locale] || ZIRCONIUM_IMPLANTS_HERO_I18N.en;
    heroBadge = d.badge;
    heroTitle = d.title;
    heroSubtitle = d.subtitle;
    heroPrimaryBtnText = d.primaryBtnText;
    heroSecondaryBtnText = d.secondaryBtnText;
  } else if (isSinusLift) {
    const d = SINUS_LIFTING_HERO_I18N[locale] || SINUS_LIFTING_HERO_I18N.en;
    heroBadge = d.badge;
    heroTitle = d.title;
    heroSubtitle = d.subtitle;
    heroPrimaryBtnText = d.primaryBtnText;
    heroSecondaryBtnText = d.secondaryBtnText;
  } else if (isImplantSupportedDentures) {
    const d = IMPLANT_SUPPORTED_DENTURES_HERO_I18N[locale] || IMPLANT_SUPPORTED_DENTURES_HERO_I18N.en;
    heroBadge = d.badge;
    heroTitle = d.title;
    heroSubtitle = d.subtitle;
    heroPrimaryBtnText = d.primaryBtnText;
    heroSecondaryBtnText = d.secondaryBtnText;
  } else if (isZirconiumCrowns) {
    heroBadge =
      locale === 'tr' ? 'ZİRKONYUM KRON KAPLAMA' :
      locale === 'de' ? 'ZIRKONKRONEN' :
      locale === 'pl' ? 'KORONY CYRKONOWE' :
      locale === 'pt' ? 'COROAS DE ZIRCÓNIA' :
      locale === 'es' ? 'CORONAS DE CIRCONIO' :
      locale === 'ru' ? 'ЦИРКОНИЕВЫЕ КОРОНКИ' :
      'ZIRCONIUM CROWNS';
    heroTitle =
      locale === 'tr' ? 'Antalya Zirkonyum Diş Kaplama & Kron Tedavisi' :
      locale === 'de' ? 'Zirkonkronen in Antalya, Türkei' :
      locale === 'pl' ? 'Korony Cyrkonowe w Antalyi, Turcja' :
      locale === 'pt' ? 'Coroas de Zircónia em Antalya, Turquia' :
      locale === 'es' ? 'Coronas de Circonio en Antalya, Turquía' :
      locale === 'ru' ? 'Циркониевые коронки в Анталье, Турция' :
      'Zirconium Crowns in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? '1200+ MPa yüksek dayanımlı Alman Zirkonyum ile doğal diş ışık geçirgenliği ve estetiğinde ömür boyu kalıcı kuron kaplamalar.' :
      locale === 'de' ? 'Perfekte Ästhetik und 1200+ MPa Stabilität mit deutschem Zirkonium, 5-Sterne-Hotel und privatem VIP-Shuttle in Antalya.' :
      locale === 'pl' ? 'Odbuduj uśmiech dzięki koronom z niemieckiego cyrkonu 1200+ MPa, naturalnej przezierności, hotelowi 5★ i transferom VIP.' :
      locale === 'pt' ? 'Restaure o seu sorriso com coroas de zircónia alemã 1200+ MPa, translucidez natural, hotel 5 estrelas e transfers VIP.' :
      locale === 'es' ? 'Recupere su sonrisa con coronas de circonio alemán 1200+ MPa, translucidez natural, hotel de 5 estrellas y traslados VIP.' :
      locale === 'ru' ? 'Идеальная улыбка с немецкими коронками из диоксида циркония 1200+ МПа, естественной прозрачностью, отелем 5★ и VIP-трансфером.' :
      'Restore your smile with 1200+ MPa German Zirconia crowns, lifelike translucency, 5-star hotel accommodation, and VIP transfers.';
  } else if (isPfmCrowns) {
    heroBadge =
      locale === 'tr' ? 'METAL DESTEKLİ PORSELEN KRON (PFM)' :
      locale === 'de' ? 'METALLKERAMIKKRONEN (PFM)' :
      locale === 'pl' ? 'KORONY PORCELANOWE NA METALU (PFM)' :
      locale === 'pt' ? 'COROAS METALOCERÂMICAS (PFM)' :
      locale === 'es' ? 'CORONAS METAL-PORCELANA (PFM)' :
      locale === 'ru' ? 'МЕТАЛЛОКЕРАМИЧЕСКИЕ КОРОНКИ (PFM)' :
      'METAL PORCELAIN CROWNS (PFM)';
    heroTitle =
      locale === 'tr' ? 'Antalya Metal Destekli Porselen Diş Kaplama & Fiyatları' :
      locale === 'de' ? 'Metallkeramikkronen (PFM) in Antalya, Türkei' :
      locale === 'pl' ? 'Korony Porcelanowe na Metalu (PFM) w Antalyi, Turcja' :
      locale === 'pt' ? 'Coroas Metalocerâmicas (PFM) em Antalya, Turquia' :
      locale === 'es' ? 'Coronas Metal-Porcelana (PFM) en Antalya, Turquía' :
      locale === 'ru' ? 'Металлокерамические коронки (PFM) в Анталье, Турция' :
      'Metal Porcelain Crowns (PFM) in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Arka çiğneme dişleri için yüksek dayanımlı tıbbi alaşım altyapı ve estetik porselen kaplama ile ekonomik ve uzun ömürlü diş restorasyonu.' :
      locale === 'de' ? 'Wirtschaftliche, bewährte und langlebige Zahnrestaurationen mit biokompatiblem Metallkern und hochfester Keramikverblendung in Antalya.' :
      locale === 'pl' ? 'Ekonomiczna, sprawdzona i trwała odbudowa zębów z podbudową ze stopu medycznego i estetyczną porcelaną w Antalyi.' :
      locale === 'pt' ? 'Restaurações dentárias econômicas, comprovadas e resistentes com núcleo de liga médica e porcelana estética em Antalya.' :
      locale === 'es' ? 'Restauraciones dentales económicas, probadas y duraderas con núcleo de aleación médica y porcelana estética en Antalya.' :
      locale === 'ru' ? 'Экономичное, надежное и долговечное восстановление зубов с каркасом из медицинского сплава и эстетической керамикой в Анталье.' :
      'Affordable, time-tested, and durable tooth restorations with medical alloy core and high-fused aesthetic dental porcelain in Antalya.';
  } else if (isEmaxCrowns) {
    heroBadge =
      locale === 'tr' ? 'E-MAX PORSELEN KRON KAPLAMA' :
      locale === 'de' ? 'E-MAX KERAMIKKRONEN' :
      locale === 'pl' ? 'KORONY PEŁNOCERAMICZNE E-MAX' :
      locale === 'pt' ? 'COROAS DE PORCELANA E-MAX' :
      locale === 'es' ? 'CORONAS DE PORCELANA E-MAX' :
      locale === 'ru' ? 'КОРОНКИ E-MAX ИЗ ДИСИЛИКАТА ЛИТИЯ' :
      'E-MAX PORCELAIN CROWNS';
    heroTitle =
      locale === 'tr' ? 'Antalya E-Max Porselen Diş Kaplama & Fiyatları' :
      locale === 'de' ? 'E-Max Keramikkronen in Antalya, Türkei' :
      locale === 'pl' ? 'Korony E-Max w Antalyi, Turcja' :
      locale === 'pt' ? 'Coroas de Porcelana E-Max em Antalya, Turquia' :
      locale === 'es' ? 'Coronas de Porcelana E-Max en Antalya, Turquía' :
      locale === 'ru' ? 'Коронки E-Max в Анталье, Турция' :
      'E-Max Porcelain Dental Crowns in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'İsviçre Ivoclar IPS e.max lityum disilikat ile ön dişlerde maksimum ışık geçirgenliği ve doğal diş minesine en yakın estetik kaplama.' :
      locale === 'de' ? 'Schweizer Ivoclar IPS e.max Lithium-Disilikat-Kronen für höchste optische Transluzenz und makellose Zahnästhetik in Antalya.' :
      locale === 'pl' ? 'Szwajcarskie korony z dwukrzemianu litu Ivoclar IPS e.max zapewniające najwyższą przezierność i idealną estetykę w Antalyi.' :
      locale === 'pt' ? 'Coroas suíças Ivoclar IPS e.max de dissilicato de lítio com máxima translucidez e estética dental impecável em Antalya.' :
      locale === 'es' ? 'Coronas suizas Ivoclar IPS e.max de disilicato de litio con máxima translucidez y estética dental impecable en Antalya.' :
      locale === 'ru' ? 'Швейцарские коронки Ivoclar IPS e.max из дисиликата лития с непревзойденной прозрачностью и безупречной эстетикой в Анталье.' :
      'Premium Swiss Ivoclar IPS e.max lithium disilicate crowns delivering supreme optical translucency and flawless natural tooth aesthetics in Antalya.';
  } else if (isFullCeramicCrowns) {
    heroBadge =
      locale === 'tr' ? 'TAM SERAMİK KRON DİŞ KAPLAMA' :
      locale === 'de' ? 'VOLLKERAMIKKRONEN' :
      locale === 'pl' ? 'KORONY PEŁNOCERAMICZNE' :
      locale === 'pt' ? 'COROAS CERÂMICAS PURAS' :
      locale === 'es' ? 'CORONAS TOTALMENTE CERÁMICAS' :
      locale === 'ru' ? 'ЦЕЛЬНОКЕРАМИЧЕСКИЕ КОРОНКИ' :
      'FULL CERAMIC DENTAL CROWNS';
    heroTitle =
      locale === 'tr' ? 'Antalya Tam Seramik Diş Kaplama & Fiyatları' :
      locale === 'de' ? 'Vollkeramikkronen in Antalya, Türkei' :
      locale === 'pl' ? 'Korony Pełnoceramiczne w Antalyi, Turcja' :
      locale === 'pt' ? 'Coroas Cerâmicas Puras em Antalya, Turquia' :
      locale === 'es' ? 'Coronas Totalmente Cerámicas en Antalya, Turquía' :
      locale === 'ru' ? 'Цельнокерамические коронки в Анталье, Турция' :
      'Full Ceramic Dental Crowns in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Metalsiz biyouyumlu tam seramik altyapı ile diş etinde gri gölge bırakmayan, doğal ve doku dostu estetik kuron restorasyonu.' :
      locale === 'de' ? '100% metallfreie, biokompatible Vollkeramikkronen für hervorragende Gewebeintegration und natürliche Ästhetik ohne dunkle Ränder in Antalya.' :
      locale === 'pl' ? 'W 100% bezmetalowe, biokompatybilne korony ceramiczne zapewniające doskonałą integrację z dziąsłami bez sinych obwódek w Antalyi.' :
      locale === 'pt' ? 'Coroas 100% cerâmicas livres de metal e biocompatíveis para integração gengival perfeita sem bordas escuras em Antalya.' :
      locale === 'es' ? 'Coronas 100% cerámicas biocompatibles sin metal para una integración gingival perfecta sin bordes oscuros en Antalya.' :
      locale === 'ru' ? '100% безметалловые биосовместимые цельнокерамические коронки без темного ободка у десны и с естественной эстетикой в Анталье.' :
      '100% metal-free, biocompatible ceramic crowns engineered for superior tissue integration, zero gray gum lines, and natural smile harmony in Antalya.';
  } else if (isMarylandBridges) {
    heroBadge =
      locale === 'tr' ? 'MARYLAND KANATLI DİŞ KÖPRÜSÜ' :
      locale === 'de' ? 'MARYLAND-BRÜCKEN' :
      locale === 'pl' ? 'MOSTY MARYLAND' :
      locale === 'pt' ? 'PONTES MARYLAND' :
      locale === 'es' ? 'PUENTES MARYLAND' :
      locale === 'ru' ? 'МОСТЫ МЭРИЛЕНД' :
      'MARYLAND RESIN-BONDED BRIDGES';
    heroTitle =
      locale === 'tr' ? 'Antalya Maryland Kanatlı Diş Köprüsü & Fiyatları' :
      locale === 'de' ? 'Maryland-Zahnbrücken in Antalya, Türkei' :
      locale === 'pl' ? 'Mosty Protetyczne Maryland w Antalyi, Turcja' :
      locale === 'pt' ? 'Pontes Dentárias Maryland em Antalya, Turquia' :
      locale === 'es' ? 'Puentes Dentales Maryland en Antalya, Turquía' :
      locale === 'ru' ? 'Зубные мосты Мэриленд в Анталье, Турция' :
      'Maryland Dental Bridges in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Komşu dişleri kesmeden, arka yüzeylere adeziv kanatlarla yapıştırılan minimal preparasyonlu estetik ön diş köprüleri.' :
      locale === 'de' ? 'Minimalinvasive adhäsive Maryland-Brücken mit hauchdünnen Keramik- oder Zirkonflügeln ohne Beschleifen gesunder Zähne in Antalya.' :
      locale === 'pl' ? 'Minimalnie inwazyjne mosty adhezyjne Maryland ze skrzydełkami z cyrkonu lub ceramiki bez szlifowania zębów w Antalyi.' :
      locale === 'pt' ? 'Pontes adesivas Maryland minimamente invasivas com aletas cerâmicas ou de zircónia sem desgaste dental em Antalya.' :
      locale === 'es' ? 'Puentes adhesivos Maryland mínimamente invasivos con aletas de cerámica o circonio sin tallado dental en Antalya.' :
      locale === 'ru' ? 'Минимально инвазивные адгезивные мосты Мэриленд с крыльями из циркония или керамики без обточки зубов в Анталье.' :
      'Conservative, minimal-prep fixed dental bridges with discreet ceramic or zirconia wings bonded to the backside of adjacent teeth for single missing front teeth in Antalya.';
  } else if (isCantileverBridges) {
    heroBadge =
      locale === 'tr' ? 'CANTILEVER (BALKON) ASMA KÖPRÜ' :
      locale === 'de' ? 'CANTILEVER-ZAHNBRÜCKEN' :
      locale === 'pl' ? 'MOSTY WSPORNIKOWE CANTILEVER' :
      locale === 'pt' ? 'PONTES CANTILEVER' :
      locale === 'es' ? 'PUENTES CANTILEVER' :
      locale === 'ru' ? 'КОНСОЛЬНЫЕ ЗУБНЫЕ МОСТЫ' :
      'CANTILEVER FIXED DENTAL BRIDGES';
    heroTitle =
      locale === 'tr' ? 'Antalya Cantilever (Asma) Diş Köprüsü & Fiyatları' :
      locale === 'de' ? 'Cantilever-Zahnbrücken in Antalya, Türkei' :
      locale === 'pl' ? 'Mosty Wspornikowe Cantilever w Antalyi, Turcja' :
      locale === 'pt' ? 'Pontes Dentárias Cantilever em Antalya, Turquia' :
      locale === 'es' ? 'Puentes Dentales Cantilever en Antalya, Turquía' :
      locale === 'ru' ? 'Консольные зубные мосты в Анталье, Турция' :
      'Cantilever Dental Bridges in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Boşluğun tek tarafındaki sağlam dişten destek alan, yüksek dayanımlı Alman Zirkonyum asma köprü restorasyonları.' :
      locale === 'de' ? 'Präzisionsgefertigte Cantilever-Brücken aus deutschem Zirkonium zur einseitigen Verankerung bei fehlenden Zähnen in Antalya.' :
      locale === 'pl' ? 'Precyzyjnie wykonane mosty wspornikowe z niemieckiego cyrkonu oparte na pojedynczym filarze w Antalyi.' :
      locale === 'pt' ? 'Pontes cantilever de alta precisão em zircónia alemã para ancoragem unilateral de dentes perdidos em Antalya.' :
      locale === 'es' ? 'Puentes cantilever de alta precisión en circonio alemán para anclaje unilateral de piezas ausentes en Antalya.' :
      locale === 'ru' ? 'Высокоточные консольные зубные мосты из немецкого диоксида циркония с односторонней фиксацией в Анталье.' :
      'Precision-engineered single-sided anchor dental bridges designed to replace missing teeth when only one adjacent anchor tooth is available in Antalya.';
  } else if (isTraditionalBridges) {
    heroBadge =
      locale === 'tr' ? 'GELENEKSEL SABİT DİŞ KÖPRÜSÜ' :
      locale === 'de' ? 'TRADITIONELLE ZAHNBRÜCKEN' :
      locale === 'pl' ? 'TRADYCYJNE MOSTY PROTETYCZNE' :
      locale === 'pt' ? 'PONTES DENTÁRIAS TRADICIONAIS' :
      locale === 'es' ? 'PUENTES DENTALES TRADICIONALES' :
      locale === 'ru' ? 'ТРАДИЦИОННЫЕ ЗУБНЫЕ МОСТЫ' :
      'TRADITIONAL FIXED DENTAL BRIDGES';
    heroTitle =
      locale === 'tr' ? 'Antalya Geleneksel Sabit Diş Köprüsü & Fiyatları' :
      locale === 'de' ? 'Traditionelle Zahnbrücken in Antalya, Türkei' :
      locale === 'pl' ? 'Tradycyjne Mosty Protetyczne w Antalyi, Turcja' :
      locale === 'pt' ? 'Pontes Dentárias Tradicionais em Antalya, Turquia' :
      locale === 'es' ? 'Puentes Dentales Tradicionales en Antalya, Turquía' :
      locale === 'ru' ? 'Традиционные зубные мосты в Анталье, Турция' :
      'Traditional Dental Bridges in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Yüksek dayanımlı Alman Zirkonyum ve porselen ile eksik dişlerinizi komşu dişlerden destek alarak 5-7 günde kalıcı olarak tamamlayın.' :
      locale === 'de' ? 'Festsitzende traditionelle Zahnbrücken aus hochfestem deutschem Zirkonium oder Metallkeramik für lückenlose Ästhetik in Antalya.' :
      locale === 'pl' ? 'Precyzyjnie wykonane tradycyjne mosty protetyczne z niemieckiego cyrkonu lub porcelany na metalu w Antalyi.' :
      locale === 'pt' ? 'Pontes dentárias fixas tradicionais em zircónia alemã de alta resistência ou metalo-cerâmica em Antalya.' :
      locale === 'es' ? 'Puentes dentales fijos tradicionales de circonio alemán de alta resistencia o metal-porcelana en Antalya.' :
      locale === 'ru' ? 'Традиционные несъемные зубные мосты из немецкого диоксида циркония и металлокерамики за 5-7 дней в Анталье.' :
      'Precision-milled German zirconia and porcelain-fused-to-metal fixed dental bridges to seamlessly replace missing teeth in 5-7 days in Antalya.';
  } else if (isEmpressVeneers) {
    heroBadge =
      locale === 'tr' ? 'IPS EMPRESS PORSELEN LAMİNA' :
      locale === 'de' ? 'IPS EMPRESS VENEERS' :
      locale === 'pl' ? 'LICÓWKI IPS EMPRESS' :
      locale === 'pt' ? 'FACETAS IPS EMPRESS' :
      locale === 'es' ? 'CARILLAS IPS EMPRESS' :
      locale === 'ru' ? 'ВИНИРЫ IPS EMPRESS' :
      'IPS EMPRESS PORCELAIN VENEERS';
    heroTitle =
      locale === 'tr' ? 'Antalya IPS Empress Porselen Lamina & Fiyatları' :
      locale === 'de' ? 'IPS Empress Veneers in Antalya, Türkei' :
      locale === 'pl' ? 'Licówki IPS Empress w Antalyi, Turcja' :
      locale === 'pt' ? 'Facetas IPS Empress em Antalya, Turquia' :
      locale === 'es' ? 'Carillas IPS Empress en Antalya, Turquía' :
      locale === 'ru' ? 'Виниры IPS Empress в Анталье, Турция' :
      'IPS Empress Porcelain Veneers in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'İsviçre Ivoclar IPS Empress lösit cam seramik ile doğal diş minesinin ışık derinliğini ve kameleon etkisini birebir yakalayan üstün estetik.' :
      locale === 'de' ? 'Leuzitverstärkte Glaskeramik-Veneers von Ivoclar IPS Empress für unübertroffene Lichtstreuung und natürliche Chamäleon-Ästhetik in Antalya.' :
      locale === 'pl' ? 'Licówki z ceramiki szklanej Ivoclar IPS Empress zapewniające niezrównaną głębię optyczną i efekt kameleona w Antalyi.' :
      locale === 'pt' ? 'Facetas de vitrocerâmica Ivoclar IPS Empress com dispersão de luz incomparável e efeito camaleão em Antalya.' :
      locale === 'es' ? 'Carillas de vitrocerámica Ivoclar IPS Empress con dispersión de luz incomparable y efecto camaleón en Antalya.' :
      locale === 'ru' ? 'Виниры из лейцитной стеклокерамики Ivoclar IPS Empress с непревзойденной глубиной света и эффектом хамелеона в Анталье.' :
      'High-leucite glass-ceramic veneers crafted by master ceramists for unmatched light dispersion, lifelike natural depth, and radiant smile elegance in Antalya.';
  } else if (isLumineers) {
    heroBadge =
      locale === 'tr' ? 'KESİMSİZ LUMINEERS LAMİNA' :
      locale === 'de' ? 'NO-PREP LUMINEERS' :
      locale === 'pl' ? 'LICÓWKI LUMINEERS' :
      locale === 'pt' ? 'LUMINEERS SEM DESGASTE' :
      locale === 'es' ? 'LUMINEERS SIN TALLADO' :
      locale === 'ru' ? 'ВИНИРЫ LUMINEERS' :
      'NO-PREP LUMINEERS';
    heroTitle =
      locale === 'tr' ? 'Antalya Kesimsiz Lumineers (No-Prep Lamina) & Fiyatları' :
      locale === 'de' ? 'No-Prep Lumineers in Antalya, Türkei' :
      locale === 'pl' ? 'Licówki Lumineers bez szlifowania w Antalyi, Turcja' :
      locale === 'pt' ? 'Lumineers sem Desgaste em Antalya, Turquia' :
      locale === 'es' ? 'Lumineers sin Tallado en Antalya, Turquía' :
      locale === 'ru' ? 'Люминиры Lumineers без обточки в Анталье, Турция' :
      'No-Prep Lumineers in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? '0.2 mm kontakt lens inceliğinde, doğal diş minesine zarar vermeden anestezi ve kesimsiz uygulanan lüks yaprak porselenler.' :
      locale === 'de' ? 'Hauchdünne 0,2-mm-Lumineers für ein perfektes Lächeln ganz ohne Beschleifen der Zähne und ohne Anästhesie in Antalya.' :
      locale === 'pl' ? 'Ultra-cienkie licówki Lumineers 0,2 mm bez szlifowania szkliwa i bez znieczulenia w Antalyi.' :
      locale === 'pt' ? 'Lumineers ultrafinas de 0,2 mm aplicadas sem desgaste do esmalte dental e sem anestesia em Antalya.' :
      locale === 'es' ? 'Lumineers ultrafinas de 0,2 mm colocadas sin desgaste dental ni anestesia en Antalya.' :
      locale === 'ru' ? 'Ультратонкие люминиры Lumineers 0,2 мм без препарирования эмали и без анестезии в Анталье.' :
      'Ultra-thin 0.2 mm contact lens porcelain veneers placed with zero tooth drilling, no anesthesia, and zero enamel loss at Master Smile Studio Antalya.';
  } else if (isCompositeVeneers) {
    heroBadge =
      locale === 'tr' ? 'KOMPOZİT LAMİNA & BONDİNG' :
      locale === 'de' ? 'KOMPOSIT-VENEERS' :
      locale === 'pl' ? 'LICÓWKI KOMPOZYTOWE' :
      locale === 'pt' ? 'FACETAS DE RESINA' :
      locale === 'es' ? 'CARILLAS DE COMPOSITE' :
      locale === 'ru' ? 'КОМПОЗИТНЫЕ ВИНИРЫ' :
      'COMPOSITE VENEERS & BONDING';
    heroTitle =
      locale === 'tr' ? 'Antalya Kompozit Lamina (Bonding) & Fiyatları' :
      locale === 'de' ? 'Komposit-Veneers in Antalya, Türkei' :
      locale === 'pl' ? 'Licówki Kompozytowe w Antalyi, Turcja' :
      locale === 'pt' ? 'Facetas de Resina Composta em Antalya, Turquia' :
      locale === 'es' ? 'Carillas de Composite en Antalya, Turquía' :
      locale === 'ru' ? 'Композитные виниры в Анталье, Турция' :
      'Composite Veneers & Direct Bonding in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Alman nano-hibrit rezin ile tek seansta diş kesimsiz estetik gülüş tasarımı, kırık diş onarımı ve aralık kapatma.' :
      locale === 'de' ? 'Minimalinvasive direkte Komposit-Veneers aus deutschem Nano-Hybrid-Komposit für sofortige Zahnkorrekturen und Lückenschluss in Antalya.' :
      locale === 'pl' ? 'Bezpośrednie licówki kompozytowe z niemieckiego nanokompozytu umożliwiające natychmiastową metamorfozę uśmiechu w Antalyi.' :
      locale === 'pt' ? 'Facetas diretas de resina composta nano-híbrida alemã para transformação estética imediata do sorriso em Antalya.' :
      locale === 'es' ? 'Carillas directas de composite nano-híbrido alemán para transformación estética inmediata de la sonrisa en Antalya.' :
      locale === 'ru' ? 'Прямые композитные виниры из немецкого наногибридного композита без обточки зубов за один визит в Анталье.' :
      'Same-day direct composite bonding & resin laminate veneers sculpted chairside with premium German nanofilled ceramics in Antalya.';
  } else if (isZirconiumVeneers) {
    heroBadge =
      locale === 'tr' ? 'ZİRKONYUM LAMİNA DİŞ KAPLAMA' :
      locale === 'de' ? 'ZIRKONIUM-VENEERS' :
      locale === 'pl' ? 'LICÓWKI CYRKONOWE' :
      locale === 'pt' ? 'FACETAS DE ZIRCÓNIA' :
      locale === 'es' ? 'CARILLAS DE CIRCONIO' :
      locale === 'ru' ? 'ЦИРКОНИЕВЫЕ ВИНИРЫ' :
      'ZIRCONIUM LAMINATE VENEERS';
    heroTitle =
      locale === 'tr' ? 'Antalya Zirkonyum Lamina (Yaprak Porselen) & Fiyatları' :
      locale === 'de' ? 'Zirkonium-Veneers in Antalya, Türkei' :
      locale === 'pl' ? 'Licówki Cyrkonowe w Antalyi, Turcja' :
      locale === 'pt' ? 'Facetas de Zircónia em Antalya, Turquia' :
      locale === 'es' ? 'Carillas de Circonio en Antalya, Turquía' :
      locale === 'ru' ? 'Циркониевые виниры в Анталье, Турция' :
      'Zirconium Laminate Veneers in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Yüksek dayanımlı çok katmanlı Alman zirkonyum altyapı ile kırılmaya dirençli, leke tutmaz ve doğal gülüş estetiği.' :
      locale === 'de' ? 'Hochfeste mehrschichtige deutsche Zirkonium-Veneers für maximale Bruchfestigkeit, Fleckenbeständigkeit und natürliche Ästhetik in Antalya.' :
      locale === 'pl' ? 'Wielowarstwowe licówki z niemieckiego cyrkonu o wysokiej wytrzymałości, odporne na pęknięcia i przebarwienia w Antalyi.' :
      locale === 'pt' ? 'Facetas de zircónia alemã multicamadas de alta resistência a fraturas e manchas para um sorriso deslumbrante em Antalya.' :
      locale === 'es' ? 'Carillas de circonio alemán multicapa de alta resistencia a fracturas y manchas para una sonrisa radiante en Antalya.' :
      locale === 'ru' ? 'Высокопрочные многослойные немецкие циркониевые виниры с максимальной устойчивостью к сколам и естественной эстетикой в Анталье.' :
      'High-strength German zirconia laminate veneers engineered for maximum durability, stain resistance, and radiant Hollywood smile transformation in Antalya.';
  } else if (isEmaxVeneers) {
    heroBadge =
      locale === 'tr' ? 'E-MAX LAMİNA DİŞ KAPLAMA' :
      locale === 'de' ? 'E-MAX VENEERS' :
      locale === 'pl' ? 'LICÓWKI E-MAX' :
      locale === 'pt' ? 'FACETAS E-MAX' :
      locale === 'es' ? 'CARILLAS E-MAX' :
      locale === 'ru' ? 'ВИНИРЫ E-MAX' :
      'E-MAX PORCELAIN VENEERS';
    heroTitle =
      locale === 'tr' ? 'Antalya E-Max Lamina (Yaprak Porselen) & Fiyatları' :
      locale === 'de' ? 'E-Max Veneers in Antalya, Türkei' :
      locale === 'pl' ? 'Licówki E-Max w Antalyi, Turcja' :
      locale === 'pt' ? 'Facetas E-Max em Antalya, Turquia' :
      locale === 'es' ? 'Carillas E-Max en Antalya, Turquía' :
      locale === 'ru' ? 'Виниры E-Max в Анталье, Турция' :
      'E-Max Porcelain Veneers in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Orijinal İsviçre Ivoclar Vivadent IPS e.max lityum disilikat ile 0.3 mm ultra ince diş kesimi ve doğal gülüş estetiği.' :
      locale === 'de' ? 'Original Schweizer Ivoclar Vivadent IPS e.max Lithium-Disilikat-Veneers für natürliche Transluzenz und schonende 0,3-mm-Präparation in Antalya.' :
      locale === 'pl' ? 'Oryginalne szwajcarskie licówki Ivoclar Vivadent IPS e.max z dwukrzemianu litu zapewniające naturalną przezierność i minimalną preparację 0,3 mm w Antalyi.' :
      locale === 'pt' ? 'Facetas originais suíças Ivoclar Vivadent IPS e.max de dissilicato de lítio com translucidez natural e micro-preparação de 0,3 mm em Antalya.' :
      locale === 'es' ? 'Carillas originales suizas Ivoclar Vivadent IPS e.max de disilicato de litio con translucidez natural y micro-preparación de 0,3 mm en Antalya.' :
      locale === 'ru' ? 'Оригинальные швейцарские виниры Ivoclar Vivadent IPS e.max из дисиликата лития с непревзойденной прозрачностью и микропрепарированием 0,3 мм в Анталье.' :
      'Authentic Swiss Ivoclar Vivadent IPS e.max lithium disilicate laminate veneers delivering unmatched natural translucency, ultra-thin 0.3 mm micro-preparation, and lifetime smile beauty in Antalya.';
  } else if (isPorcelainVeneers) {
    heroBadge =
      locale === 'tr' ? 'PORSELEN LAMİNA DİŞ KAPLAMA' :
      locale === 'de' ? 'PORZELLAN-VENEERS' :
      locale === 'pl' ? 'LICÓWKI PORCELANOWE' :
      locale === 'pt' ? 'FACETAS DE PORCELANA' :
      locale === 'es' ? 'CARILLAS DE PORCELANA' :
      locale === 'ru' ? 'КЕРАМИЧЕСКИЕ ВИНИРЫ' :
      'PORCELAIN LAMINATE VENEERS';
    heroTitle =
      locale === 'tr' ? 'Antalya Porselen Lamina (Yaprak Porselen) & Fiyatları' :
      locale === 'de' ? 'Porzellan-Veneers in Antalya, Türkei' :
      locale === 'pl' ? 'Licówki Porcelanowe w Antalyi, Turcja' :
      locale === 'pt' ? 'Facetas de Porcelana em Antalya, Turquia' :
      locale === 'es' ? 'Carillas de Porcelana en Antalya, Turquía' :
      locale === 'ru' ? 'Керамические виниры в Анталье, Турция' :
      'Porcelain Laminate Veneers in Antalya, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Minimum diş kesimi (0.3–0.5 mm) ve İsviçre Ivoclar E-Max ile doğal diş minesinin ışık geçirgenliğini birebir taklit eden leke tutmaz yaprak porselenler.' :
      locale === 'de' ? 'Minimalinvasive Porzellan-Veneers aus Schweizer Ivoclar E-Max für natürliche Transluzenz, Fleckenbeständigkeit und ein makelloses Lächeln in Antalya.' :
      locale === 'pl' ? 'Minimalnie inwazyjne licówki porcelanowe ze szwajcarskiego Ivoclar E-Max zapewniające naturalną przezierność i wielowymiarowy uśmiech w Antalyi.' :
      locale === 'pt' ? 'Facetas de porcelana minimamente invasivas da suíça Ivoclar E-Max com translucidez natural, resistência a manchas e sorriso perfeito em Antalya.' :
      locale === 'es' ? 'Carillas de porcelana mínimamente invasivas de la suiza Ivoclar E-Max con translucidez natural, resistencia a manchas y sonrisa perfecta en Antalya.' :
      locale === 'ru' ? 'Минимально инвазивные керамические виниры из швейцарского Ivoclar E-Max с естественной прозрачностью и устойчивостью к окрашиванию в Анталье.' :
      'Ultra-thin, minimally invasive Swiss Ivoclar E-Max porcelain veneers providing natural optical translucency, stain resistance, and Hollywood smile design in Antalya.';
  } else if (isDentalImplantsCategory && !isFullMouth && !isAllOnFour && !isAllOnSix && !isImmediate && !isZygomatic && !isZirconium && !isSinusLift) {
    const d = DENTAL_IMPLANTS_HERO_I18N[locale] || DENTAL_IMPLANTS_HERO_I18N.en;
    heroBadge = d.tag;
    heroTitle = d.title;
    heroSubtitle = d.subtitle;
    heroPrimaryBtnText = d.primaryBtnText;
    heroSecondaryBtnText = d.secondaryBtnText;
  }

  const canonicalUrl = `https://mastersmilestudio.com/${locale}/treatments/${slugPath}/`;
  const jsonLd = generateTreatmentJsonLd({
    locale,
    slug: lastSlug,
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

      <Header />

      {isGeneralMain ? (
        <GeneralDentistryHeroBanner />
      ) : isCosmeticCategory ? (
        <CosmeticDentistryHeroBanner />
      ) : isDentures ? (
        <DenturesHeroBanner />
      ) : isDentalBridges ? (
        <DentalBridgesHeroBanner />
      ) : isDentalVeneers ? (
        <DentalVeneersHeroBanner />
      ) : isDentalCrowns ? (
        <DentalCrownsHeroBanner />
      ) : (isDentalImplantsCategory && !isFullMouth && !isAllOnFour && !isAllOnSix && !isImmediate && !isZygomatic && !isZirconium && !isSinusLift) ? (
        <DentalImplantsHeroBanner />
      ) : (
        <TreatmentHeroBanner
          tag={heroBadge}
          title={heroTitle}
          subtitle={heroSubtitle}
          primaryBtnText={heroPrimaryBtnText}
          secondaryBtnText={heroSecondaryBtnText}
          primaryBtnAriaLabel={heroPrimaryBtnAria}
          secondaryBtnAriaLabel={heroSecondaryBtnAria}
          imageSrc={
            isSmileMakeover
              ? '/treatments/accordion/smile-makeover.webp'
              : isHollywoodSmile
              ? '/treatments/accordion/hollywood-smile.webp'
              : isDentalCleaning
              ? '/treatments/scaling-polishing.webp'
              : isToothFillings
              ? '/treatments/tooth-fillings-amalgam-composite.jpg'
              : isRootCanal
              ? '/treatments/root-canal-treatment-endodontics.jpg'
              : isToothExtraction
              ? '/treatments/tooth-extraction-surgical.jpg'
              : isInlayOnlay
              ? '/treatments/inlay-onlay-comparison.jpg'
              : isDentalSealants
              ? '/treatments/dental-sealants-fissure.jpg'
              : isFluoride
              ? '/treatments/accordion/fluoride-treatment.webp'
              : isBruxism
              ? '/treatments/accordion/bruxism.webp'
              : isGummySmile
              ? '/treatments/accordion/gummy-smile-treatment.webp'
              : isTeethWhitening
              ? '/treatments/accordion/teeth-whitening.webp'
              : isToothContouring
              ? '/treatments/accordion/tooth-contouring-shaping.webp'
              : isDiastemaClosure
              ? '/treatments/accordion/diastema-closure.webp'
              : isCompleteDentures
              ? '/treatments/accordion/complete-dentures.webp'
              : isPartialDentures
              ? '/treatments/accordion/partial-dentures.webp'
              : isOverdentures
              ? '/treatments/accordion/overdenture.webp'
              : isMarylandBridges
              ? '/treatments/accordion/maryland-bridge.webp'
              : isCantileverBridges
              ? '/treatments/accordion/cantilever-bridge.webp'
              : isTraditionalBridges
              ? '/treatments/accordion/traditional-bridge.webp'
              : isCompositeVeneers
              ? '/treatments/accordion/composite-laminate.webp'
              : isLumineers
              ? '/treatments/accordion/lumineers.webp'
              : isEmpressVeneers
              ? '/treatments/accordion/empress-veneers.webp'
              : isZirconiumVeneers
              ? '/treatments/accordion/zirconium-laminate.webp'
              : isEmaxVeneers
              ? '/treatments/accordion/e-max-laminate.webp'
              : isPorcelainVeneers
              ? '/treatments/accordion/porcelain-laminate.webp'
              : isEmaxCrowns
              ? '/treatments/accordion/e-max-crown.webp'
              : isFullCeramicCrowns
              ? '/treatments/accordion/full-ceramic-crown.webp'
              : isPfmCrowns
              ? '/treatments/accordion/metal-porcelain-crown.webp'
              : isZirconiumCrowns
              ? '/treatments/accordion/zirconium-crowns.webp'
              : isSinusLift
              ? '/treatments/accordion/sinus-lifting.webp'
              : isFullMouth
              ? '/treatments/accordion/full-mouth-implant.webp'
              : isAllOnFour
              ? '/treatments/accordion/all-on-4.webp'
              : isAllOnSix
              ? '/treatments/accordion/all-on-6.webp'
              : isImmediate
              ? '/treatments/accordion/immediate-implant.webp'
              : isZygomatic
              ? '/treatments/accordion/zygomatic-implant.webp'
              : isZirconium
              ? '/treatments/accordion/zirconium-implant.webp'
              : isDentalImplantsCategory
              ? '/treatments/accordion/zirconium-implant.webp'
              : undefined
          }
          imageAlt={heroTitle}
          primaryBtnHref="/contact"
          secondaryBtnHref="#main-content"
        />
      )}

      {/* Main Content Area Landmark */}
      <main id="main-content" className="treatment-main-content">
        {isGeneralMain ? (
          <>
            <GeneralDentistryIntroSection />
            <GeneralDentistryAccordionSection />
            <GeneralDentistryJourneySection />
            <TreatmentServicesIncludedSection />
            <RealPatientsSection />
            <TreatmentReviewsSection />
            <GeneralDentistryFaqSection />
            <div id="contact">
              <TreatmentInteractiveQuoteForm defaultTreatment="General Dentistry" />
            </div>
          </>
        ) : isDentalCleaning || isGeneralSub ? (
          <DentalCleaningDetailView />
        ) : isSmileMakeover ? (
          <SmileMakeoverDetailView />
        ) : isCosmetic ? (
          <CosmeticDentistryDetailView />
        ) : isCompleteDentures ? (
          <CompleteDenturesDetailView />
        ) : isPartialDentures ? (
          <PartialDenturesDetailView />
        ) : isOverdentures ? (
          <ImplantSupportedDenturesDetailView />
        ) : isDentures ? (
          <DenturesDetailView />
        ) : isMarylandBridges ? (
          <MarylandBridgesDetailView />
        ) : isCantileverBridges ? (
          <CantileverBridgesDetailView />
        ) : isTraditionalBridges ? (
          <TraditionalBridgesDetailView />
        ) : isDentalBridges ? (
          <DentalBridgeDetailView />
        ) : isZirconiumCrowns ? (
          <ZirconiumCrownsDetailView />
        ) : isPfmCrowns ? (
          <PfmCrownsDetailView />
        ) : isEmaxCrowns ? (
          <EmaxCrownsDetailView />
        ) : isFullCeramicCrowns ? (
          <FullCeramicCrownsDetailView />
        ) : isDentalCrowns ? (
          <DentalCrownsDetailView />
        ) : isCompositeVeneers ? (
          <CompositeVeneersDetailView />
        ) : isLumineers ? (
          <LumineersDetailView />
        ) : isEmpressVeneers ? (
          <EmpressVeneersDetailView />
        ) : isZirconiumVeneers ? (
          <ZirconiumVeneersDetailView />
        ) : isEmaxVeneers ? (
          <EmaxVeneersDetailView />
        ) : isPorcelainVeneers ? (
          <PorcelainVeneersDetailView />
        ) : isDentalVeneers ? (
          <DentalVeneersDetailView />
        ) : isAllOnFour ? (
          <AllOnFourImplantDetailView />
        ) : isAllOnSix ? (
          <AllOnSixImplantDetailView />
        ) : isImmediate ? (
          <ImmediateImplantDetailView />
        ) : isZygomatic ? (
          <ZygomaticImplantDetailView />
        ) : isZirconium ? (
          <ZirconiumImplantDetailView />
        ) : isSinusLift ? (
          <SinusLiftingDetailView />
        ) : isDentalImplantsCategory ? (
          <DentalImplantsDetailView />
        ) : (
          <TreatmentDetailView />
        )}
      </main>

      <Footer />
    </div>
  );
}
