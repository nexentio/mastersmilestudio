import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHeroBanner from '@/components/treatment-sections/TreatmentHeroBanner';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import DentalImplantsDetailView from '@/components/DentalImplantsDetailView';
import DentalVeneersDetailView from '@/components/DentalVeneersDetailView';
import DentalCrownsDetailView from '@/components/DentalCrownsDetailView';
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
import DentalBridgeDetailView from '@/components/DentalBridgeDetailView';
import DenturesDetailView from '@/components/DenturesDetailView';
import CompleteDenturesDetailView from '@/components/CompleteDenturesDetailView';
import PartialDenturesDetailView from '@/components/PartialDenturesDetailView';
import ImplantSupportedDenturesDetailView from '@/components/ImplantSupportedDenturesDetailView';
import CosmeticDentistryDetailView from '@/components/CosmeticDentistryDetailView';
import SmileMakeoverDetailView from '@/components/SmileMakeoverDetailView';
import GeneralDentistryDetailView from '@/components/GeneralDentistryDetailView';
import AllOnSixImplantDetailView from '@/components/AllOnSixImplantDetailView';
import DentalCleaningHeroBanner from '@/components/treatment-sections/DentalCleaningHeroBanner';
import GeneralDentistryHeroBanner from '@/components/treatment-sections/GeneralDentistryHeroBanner';
import CosmeticDentistryHeroBanner from '@/components/treatment-sections/CosmeticDentistryHeroBanner';
import DenturesHeroBanner from '@/components/treatment-sections/DenturesHeroBanner';
import DentalBridgesHeroBanner from '@/components/treatment-sections/DentalBridgesHeroBanner';
import DentalVeneersHeroBanner from '@/components/treatment-sections/DentalVeneersHeroBanner';
import DentalCrownsHeroBanner from '@/components/treatment-sections/DentalCrownsHeroBanner';
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

const GENERAL_HERO_I18N: Record<
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
    defaultBadge: 'GENERAL & PREVENTIVE DENTISTRY',
    defaultTitle: 'General Dentistry & Oral Health in Istanbul',
    defaultSubtitle:
      'Pain-free microscopic root canal therapy, ultrasonic Swiss Air-Flow scaling, tooth-colored composite restorations, and wisdom tooth extractions in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free dental consultation and quotation',
    secondaryBtnText: 'Explore Dental Packages',
    secondaryBtnAria: 'Scroll down to explore general dentistry packages and medical details',
  },
  tr: {
    defaultBadge: 'GENEL & KORUYUCU DİŞ HEKİMLİĞİ',
    defaultTitle: 'İstanbul Genel Diş Hekimliği & Tedavileri',
    defaultSubtitle:
      'Ağrısız mikroskobik kanal tedavisi, İsviçre Air-Flow ultrasonik diş temizliği, estetik nanokompozit dolgular ve atravmatik 20’lik diş çekimleri.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz diş muayenesi ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Tedavi Paketlerini İncele',
    secondaryBtnAria: 'Genel diş tedavisi paketlerini ve ayrıntılarını incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'ALLGEMEINE ZAHNMEDIZIN & PROPHYLAXE',
    defaultTitle: 'Zahnerhalt & Prophylaxe in Istanbul',
    defaultSubtitle:
      'Schmerzfreie mikroskopische Wurzelbehandlung, Air-Flow Tiefenreinigung, ästhetische Kompositfüllungen und Weisheitszahn-OPs in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung',
    secondaryBtnText: 'Behandlungs-Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Behandlungspakete zu entdecken',
  },
  pl: {
    defaultBadge: 'STOMATOLOGIA OGÓLNA I ZACHOWAWCZA',
    defaultTitle: 'Stomatologia Ogólna i Profilaktyka w Stambule',
    defaultSubtitle:
      'Bezbólowe leczenie kanałowe pod mikroskopem, higienizacja Air-Flow, wypełnienia nanokompozytowe i bezurazowe usuwanie ósemek w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny leczenia stomatologicznego',
    secondaryBtnText: 'Zobacz Pakiety Lecznicze',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety stomatologii ogólnej',
  },
  pt: {
    defaultBadge: 'CLÍNICA GERAL E ODONTOLOGIA PREVENTIVA',
    defaultTitle: 'Clínica Geral & Saúde Bucal em Istambul',
    defaultSubtitle:
      'Tratamento de canal microscópico indolor, profilaxia Air-Flow, restaurações estéticas em resina e extração de sisos em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação odontológica gratuita',
    secondaryBtnText: 'Ver Pacotes Clínicos',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de clínica geral',
  },
  es: {
    defaultBadge: 'ODONTOLOGÍA GENERAL Y PREVENTIVA',
    defaultTitle: 'Odontología General y Salud Bucal en Estambul',
    defaultSubtitle:
      'Endodoncia microscópica indolora, limpieza Air-Flow suiza, empastes estéticos de composite y extracción de muelas del juicio en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración dental gratuita',
    secondaryBtnText: 'Ver Paquetes Dentales',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de odontología general',
  },
  ru: {
    defaultBadge: 'ТЕРАПЕВТИЧЕСКАЯ СТОМАТОЛОГИЯ И ПРОФИЛАКТИКА',
    defaultTitle: 'Терапевтическая стоматология в Стамбуле',
    defaultSubtitle:
      'Безболезненное лечение каналов под микроскопом, гигиена Swiss Air-Flow, эстетические нанокомпозитные пломбы и удаление зубов мудрости.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по общей стоматологии',
    secondaryBtnText: 'Посмотреть Пакеты Лечения',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты терапевтической стоматологии',
  },
};

const COSMETIC_HERO_I18N: Record<
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
    defaultBadge: 'COSMETIC DENTISTRY & SMILE DESIGN',
    defaultTitle: 'Hollywood Smile & Cosmetic Dentistry in Istanbul',
    defaultSubtitle:
      'Transform your smile with bespoke 3D Digital Smile Design, Swiss Ivoclar E-Max laminates, laser gum contouring, and 5-star VIP care.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free smile makeover consultation and quotation',
    secondaryBtnText: 'Explore Smile Packages',
    secondaryBtnAria: 'Scroll down to explore cosmetic dentistry packages and medical details',
  },
  tr: {
    defaultBadge: 'ESTETİK DİŞ HEKİMLİĞİ & GÜLÜŞ TASARIMI',
    defaultTitle: 'İstanbul Hollywood Smile & Estetik Diş Tedavisi',
    defaultSubtitle:
      'Yüzün altın oranına özel 3D Dijital Gülüş Tasarımı, İsviçre Ivoclar E-Max laminalar, lazerle pembe estetik ve 5 yıldızlı VIP konfor.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz gülüş tasarımı konsültasyonu ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Gülüş Paketlerini İncele',
    secondaryBtnAria: 'Estetik gülüş paketlerini ve ayrıntılarını incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'ÄSTHETISCHE ZAHNMEDIZIN',
    defaultTitle: 'Hollywood Smile & Ästhetik in Istanbul',
    defaultSubtitle:
      '3D Digital Smile Design, Ivoclar E-Max Keramik, Laser-Zahnfleischkorrektur inklusive 5-Sterne-Hotel und VIP-Transfers.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Smile-Design-Beratung',
    secondaryBtnText: 'Smile-Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Smile-Design-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'STOMATOLOGIA ESTETYCZNA',
    defaultTitle: 'Hollywood Smile i Design Uśmiechu w Stambule',
    defaultSubtitle:
      'Metamorfoza uśmiechu z Cyfrowym Projektowaniem 3D DSD, licówkami Ivoclar E-Max i hotelem 5★ w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny Hollywood Smile',
    secondaryBtnText: 'Zobacz Pakiety Uśmiechu',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety stomatologii estetycznej',
  },
  pt: {
    defaultBadge: 'ODONTOLOGIA ESTÉTICA',
    defaultTitle: 'Hollywood Smile & Design do Sorriso em Istambul',
    defaultSubtitle:
      'Transforme seu sorriso com Design Digital 3D, facetas Ivoclar E-Max, plástica gengival e atendimento VIP 5 estrelas em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de Smile Makeover',
    secondaryBtnText: 'Ver Pacotes de Sorriso',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de odontologia estética',
  },
  es: {
    defaultBadge: 'ESTÉTICA DENTAL & DISEÑO DE SONRISA',
    defaultTitle: 'Hollywood Smile y Diseño de Sonrisa en Estambul',
    defaultSubtitle:
      'Consiga una sonrisa perfecta con Diseño Digital 3D, carillas suizas Ivoclar E-Max, gingivoplastia láser y hotel 5 estrellas en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de diseño de sonrisa',
    secondaryBtnText: 'Ver Paquetes de Sonrisa',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de estética dental',
  },
  ru: {
    defaultBadge: 'ЭСТЕТИЧЕСКАЯ СТОМАТОЛОГИЯ',
    defaultTitle: 'Голливудская улыбка (Hollywood Smile) в Стамбуле',
    defaultSubtitle:
      'Цифровой дизайн улыбки 3D DSD, швейцарская керамика Ivoclar E-Max, лазерная коррекция десен и VIP-сервис 5★ в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по дизайну улыбки',
    secondaryBtnText: 'Посмотреть Пакеты Улыбок',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты эстетической стоматологии',
  },
};

const VENEERS_HERO_I18N: Record<
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
    defaultBadge: 'COSMETIC DENTISTRY',
    defaultTitle: 'Dental Veneers & Laminates in Istanbul',
    defaultSubtitle:
      'Transform your smile with Swiss Ivoclar E-Max veneers, Digital Smile Design, and luxury 5-star care in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free veneer consultation and quotation',
    secondaryBtnText: 'Explore Veneer Packages',
    secondaryBtnAria: 'Scroll down to explore veneer packages and medical details',
  },
  tr: {
    defaultBadge: 'ESTETİK DİŞ HEKİMLİĞİ',
    defaultTitle: 'İstanbul Diş Kaplama & Lamina Tedavisi',
    defaultSubtitle:
      'İsviçre menşeli Ivoclar E-Max cam seramik, 3D Dijital Gülüş Tasarımı ve 5 yıldızlı VIP konforla kusursuz bir gülüşe kavuşun.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz konsültasyon ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Lamina paketlerini ve ayrıntılarını incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'ÄSTHETISCHE ZAHNMEDIZIN',
    defaultTitle: 'Veneers & Zahnverblendungen in Istanbul',
    defaultSubtitle:
      'Verwandeln Sie Ihr Lächeln mit original Ivoclar E-Max Keramik, 3D Digital Smile Design und 5-Sterne-VIP-Service in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Veneer-Beratung',
    secondaryBtnText: 'Veneer-Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Veneer-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'STOMATOLOGIA ESTETYCZNA',
    defaultTitle: 'Licówki Porcelanowe i E-Max w Stambule',
    defaultSubtitle:
      'Zmień swój uśmiech dzięki szwajcarskim licówkom Ivoclar E-Max, Cyfrowemu Projektowaniu Uśmiechu i opiece 5★ w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny licówek',
    secondaryBtnText: 'Zobacz Pakiety Licówek',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety licówek',
  },
  pt: {
    defaultBadge: 'ODONTOLOGIA ESTÉTICA',
    defaultTitle: 'Facetas Dentárias & Lentes E-Max em Istambul',
    defaultSubtitle:
      'Transforme seu sorriso com facetas suíças Ivoclar E-Max, Design Digital do Sorriso e atendimento VIP 5 estrelas em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de facetas',
    secondaryBtnText: 'Ver Pacotes de Facetas',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de facetas',
  },
  es: {
    defaultBadge: 'ODONTOLOGÍA ESTÉTICA',
    defaultTitle: 'Carillas Dentales de Porcelana en Estambul',
    defaultSubtitle:
      'Consiga una sonrisa deslumbrante con carillas suizas Ivoclar E-Max, Diseño Digital de Sonrisa y atención 5 estrellas en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de carillas',
    secondaryBtnText: 'Ver Paquetes de Carillas',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de carillas',
  },
  ru: {
    defaultBadge: 'ЭСТЕТИЧЕСКАЯ СТОМАТОЛОГИЯ',
    defaultTitle: 'Керамические виниры Ivoclar E-Max в Стамбуле',
    defaultSubtitle:
      'Преобразите улыбку с помощью швейцарской керамики Ivoclar E-Max, цифрового дизайна улыбки и 5★ сервиса в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по винирам',
    secondaryBtnText: 'Посмотреть Пакеты Виниров',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты виниров',
  },
};

const CROWNS_HERO_I18N: Record<
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
    defaultBadge: 'RESTORATIVE DENTISTRY',
    defaultTitle: 'Dental Crowns & Zirconia in Istanbul',
    defaultSubtitle:
      'Restore damaged teeth with 1200+ MPa German Zirconia & Ivoclar E-Max crowns, 5-star hotel accommodation, and VIP care in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free crown consultation and quotation',
    secondaryBtnText: 'Explore Crown Packages',
    secondaryBtnAria: 'Scroll down to explore dental crown packages and medical details',
  },
  tr: {
    defaultBadge: 'RESTORATİF DİŞ HEKİMLİĞİ',
    defaultTitle: 'İstanbul Zirkonyum & Kron Kaplama Tedavisi',
    defaultSubtitle:
      '1200+ MPa dayanıklılıkta Alman Zirkonyum ve Ivoclar E-Max porselen kalitesiyle eksiksiz ve güçlü bir çiğneme fonksiyonuna kavuşun.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz kron konsültasyonu ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Kron Paketlerini İncele',
    secondaryBtnAria: 'Zirkonyum ve kron paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'RESTAURATIVE ZAHNMEDIZIN',
    defaultTitle: 'Zahnkronen & Zirkon in Istanbul',
    defaultSubtitle:
      'Stellen Sie Ihre Zähne mit deutschem Zirkon & Ivoclar E-Max wieder her – inklusive 5-Sterne-Hotel und VIP-Transfers.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Kronen-Beratung',
    secondaryBtnText: 'Kronen-Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Kronen-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'PROTETYKA STOMATOLOGICZNA',
    defaultTitle: 'Korony Zębowe i Cyrkonowe w Stambule',
    defaultSubtitle:
      'Odbuduj zniszczone zęby dzięki niemieckiemu tlenkowi cyrkonu (1200 MPa) i E-Max z 5★ hotelem w cenie w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny koron',
    secondaryBtnText: 'Zobacz Pakiety Koron',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety koron',
  },
  pt: {
    defaultBadge: 'REABILITAÇÃO ORAL',
    defaultTitle: 'Coroas Dentárias & Zircônia em Istambul',
    defaultSubtitle:
      'Recupere seus dentes com zircônia alemã de alta resistência (1200 MPa) e atendimento VIP 5 estrelas em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de coroas',
    secondaryBtnText: 'Ver Pacotes de Coroas',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de coroas',
  },
  es: {
    defaultBadge: 'ODONTOLOGÍA RESTAURADORA',
    defaultTitle: 'Coronas Dentales de Zirconio en Estambul',
    defaultSubtitle:
      'Restaure sus dientes con zirconio alemán de 1200 MPa y E-Max suizo con hotel 5 estrellas y traslados VIP en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de coronas',
    secondaryBtnText: 'Ver Paquetes de Coronas',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de coronas',
  },
  ru: {
    defaultBadge: 'ОРТОПЕДИЧЕСКАЯ СТОМАТОЛОГИЯ',
    defaultTitle: 'Циркониевые коронки на зубы в Стамбуле',
    defaultSubtitle:
      'Восстановите разрушенные зубы с помощью немецкого циркония 1200 МПа, E-Max и VIP-сервиса 5★ в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по коронкам',
    secondaryBtnText: 'Посмотреть Пакеты Коронок',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты коронок',
  },
};

const ZIRCONIUM_CROWNS_HERO_I18N: Record<
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
    defaultBadge: 'ZIRCONIUM CROWNS',
    defaultTitle: 'Zirconium Crowns in Istanbul, Turkey',
    defaultSubtitle:
      'Restore your smile with 1200+ MPa German Zirconia crowns, lifelike translucency, 5-star hotel accommodation, and VIP transfers.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free zirconium crown consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore zirconium crown packages and medical details',
  },
  tr: {
    defaultBadge: 'ZİRKONYUM KRON KAPLAMA',
    defaultTitle: 'İstanbul Zirkonyum Diş Kaplama & Kron Tedavisi',
    defaultSubtitle:
      '1200+ MPa yüksek dayanımlı Alman Zirkonyum ile doğal diş ışık geçirgenliği ve estetiğinde ömür boyu kalıcı kuron kaplamalar.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz konsültasyon ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Zirkonyum kaplama paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'ZIRKONKRONEN',
    defaultTitle: 'Zirkonkronen in Istanbul, Türkei',
    defaultSubtitle:
      'Perfekte Ästhetik und 1200+ MPa Stabilität mit deutschem Zirkonium, 5-Sterne-Hotel und privatem VIP-Shuttle in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Zirkonkronen-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'KORONY CYRKONOWE',
    defaultTitle: 'Korony Cyrkonowe w Stambule, Turcja',
    defaultSubtitle:
      'Odbuduj uśmiech dzięki koronom z niemieckiego cyrkonu 1200+ MPa, naturalnej przezierności, hotelowi 5★ i transferom VIP.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny koron cyrkonowych',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety koron cyrkonowych',
  },
  pt: {
    defaultBadge: 'COROAS DE ZIRCÓNIA',
    defaultTitle: 'Coroas de Zircónia em Istambul, Turquia',
    defaultSubtitle:
      'Restaure o seu sorriso com coroas de zircónia alemã 1200+ MPa, translucidez natural, hotel 5 estrelas e transfers VIP.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de coroas de zircónia',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de coroas de zircónia',
  },
  es: {
    defaultBadge: 'CORONAS DE CIRCONIO',
    defaultTitle: 'Coronas de Circonio en Estambul, Turquía',
    defaultSubtitle:
      'Recupere su sonrisa con coronas de circonio alemán 1200+ MPa, translucidez natural, hotel de 5 estrellas y traslados VIP.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de coronas de circonio',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de coronas de circonio',
  },
  ru: {
    defaultBadge: 'ЦИРКОНИЕВЫЕ КОРОНКИ',
    defaultTitle: 'Циркониевые коронки в Стамбуле, Турция',
    defaultSubtitle:
      'Идеальная улыбка с немецкими коронками из диоксида циркония 1200+ МПа, естественной прозрачностью, отелем 5★ и VIP-трансфером.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по циркониевым коронкам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты циркониевых коронок',
  },
};

const PFM_CROWNS_HERO_I18N: Record<
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
    defaultBadge: 'METAL PORCELAIN CROWNS (PFM)',
    defaultTitle: 'Metal Porcelain Crowns (PFM) in Istanbul, Turkey',
    defaultSubtitle:
      'Affordable, time-tested, and durable tooth restorations with medical alloy core and high-fused aesthetic dental porcelain in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free metal porcelain crown consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore metal porcelain crown packages and medical details',
  },
  tr: {
    defaultBadge: 'METAL DESTEKLİ PORSELEN KRON (PFM)',
    defaultTitle: 'İstanbul Metal Destekli Porselen Diş Kaplama & Fiyatları',
    defaultSubtitle:
      'Arka çiğneme dişleri için yüksek dayanımlı tıbbi alaşım altyapı ve estetik porselen kaplama ile ekonomik ve uzun ömürlü diş restorasyonu.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz konsültasyon ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Metal porselen kaplama paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'METALLKERAMIKKRONEN (PFM)',
    defaultTitle: 'Metallkeramikkronen (PFM) in Istanbul, Türkei',
    defaultSubtitle:
      'Wirtschaftliche, bewährte und langlebige Zahnrestaurationen mit biokompatiblem Metallkern und hochfester Keramikverblendung in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Metallkeramikkronen-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'KORONY PORCELANOWE NA METALU (PFM)',
    defaultTitle: 'Korony Porcelanowe na Metalu (PFM) w Stambule, Turcja',
    defaultSubtitle:
      'Ekonomiczna, sprawdzona i trwała odbudowa zębów z podbudową ze stopu medycznego i estetyczną porcelaną w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny koron porcelanowych na metalu',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety koron porcelanowych na metalu',
  },
  pt: {
    defaultBadge: 'COROAS METALOCERÂMICAS (PFM)',
    defaultTitle: 'Coroas Metalocerâmicas (PFM) em Istambul, Turquia',
    defaultSubtitle:
      'Restaurações dentárias econômicas, comprovadas e resistentes com núcleo de liga médica e porcelana estética em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de coroas metalocerâmicas',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de coroas metalocerâmicas',
  },
  es: {
    defaultBadge: 'CORONAS METAL-PORCELANA (PFM)',
    defaultTitle: 'Coronas Metal-Porcelana (PFM) en Estambul, Turquía',
    defaultSubtitle:
      'Restauraciones dentales económicas, probadas y duraderas con núcleo de aleación médica y porcelana estética en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de coronas metal-porcelana',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de coronas metal-porcelana',
  },
  ru: {
    defaultBadge: 'МЕТАЛЛОКЕРАМИЧЕСКИЕ КОРОНКИ (PFM)',
    defaultTitle: 'Металлокерамические коронки (PFM) в Стамбуле, Турция',
    defaultSubtitle:
      'Экономичное, надежное и долговечное восстановление зубов с каркасом из медицинского сплава и эстетической керамикой в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по металлокерамическим коронкам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты металлокерамических коронок',
  },
};

const EMAX_CROWNS_HERO_I18N: Record<
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
    defaultBadge: 'E-MAX PORCELAIN CROWNS',
    defaultTitle: 'E-Max Porcelain Dental Crowns in Istanbul, Turkey',
    defaultSubtitle:
      'Premium Swiss Ivoclar IPS e.max lithium disilicate crowns delivering supreme optical translucency and flawless natural tooth aesthetics in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free E-Max crown consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore E-Max crown packages and clinical details',
  },
  tr: {
    defaultBadge: 'E-MAX PORSELEN KRON KAPLAMA',
    defaultTitle: 'İstanbul E-Max Porselen Diş Kaplama & Fiyatları',
    defaultSubtitle:
      'İsviçre Ivoclar IPS e.max lityum disilikat ile ön dişlerde maksimum ışık geçirgenliği ve doğal diş minesine en yakın estetik kaplama.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz konsültasyon ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'E-Max kaplama paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'E-MAX KERAMIKKRONEN',
    defaultTitle: 'E-Max Keramikkronen in Istanbul, Türkei',
    defaultSubtitle:
      'Schweizer Ivoclar IPS e.max Lithium-Disilikat-Kronen für höchste optische Transluzenz und makellose Zahnästhetik in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um E-Max-Kronen-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'KORONY PEŁNOCERAMICZNE E-MAX',
    defaultTitle: 'Korony E-Max w Stambule, Turcja',
    defaultSubtitle:
      'Szwajcarskie korony z dwukrzemianu litu Ivoclar IPS e.max zapewniające najwyższą przezierność i idealną estetykę w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny koron E-Max',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety koron E-Max',
  },
  pt: {
    defaultBadge: 'COROAS DE PORCELANA E-MAX',
    defaultTitle: 'Coroas de Porcelana E-Max em Istambul, Turquia',
    defaultSubtitle:
      'Coroas suíças Ivoclar IPS e.max de dissilicato de lítio com máxima translucidez e estética dental impecável em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de coroas E-Max',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de coroas E-Max',
  },
  es: {
    defaultBadge: 'CORONAS DE PORCELANA E-MAX',
    defaultTitle: 'Coronas de Porcelana E-Max en Estambul, Turquía',
    defaultSubtitle:
      'Coronas suizas Ivoclar IPS e.max de disilicato de litio con máxima translucidez y estética dental impecable en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de coronas E-Max',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de coronas E-Max',
  },
  ru: {
    defaultBadge: 'КОРОНКИ E-MAX ИЗ ДИСИЛИКАТА ЛИТИЯ',
    defaultTitle: 'Коронки E-Max в Стамбуле, Турция',
    defaultSubtitle:
      'Швейцарские коронки Ivoclar IPS e.max из дисиликата лития с непревзойденной прозрачностью и безупречной эстетикой в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по коронкам E-Max',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты коронок E-Max',
  },
};

const FULL_CERAMIC_CROWNS_HERO_I18N: Record<
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
    defaultBadge: 'FULL CERAMIC DENTAL CROWNS',
    defaultTitle: 'Full Ceramic Dental Crowns in Istanbul, Turkey',
    defaultSubtitle:
      '100% metal-free, biocompatible ceramic crowns engineered for superior tissue integration, zero gray gum lines, and natural smile harmony in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free full ceramic crown consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore full ceramic crown packages and medical details',
  },
  tr: {
    defaultBadge: 'TAM SERAMİK KRON DİŞ KAPLAMA',
    defaultTitle: 'İstanbul Tam Seramik Diş Kaplama & Fiyatları',
    defaultSubtitle:
      'Metalsiz biyouyumlu tam seramik altyapı ile diş etinde gri gölge bırakmayan, doğal ve doku dostu estetik kuron restorasyonu.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz konsültasyon ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Tam seramik kaplama paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'VOLLKERAMIKKRONEN',
    defaultTitle: 'Vollkeramikkronen in Istanbul, Türkei',
    defaultSubtitle:
      '100% metallfreie, biokompatible Vollkeramikkronen für hervorragende Gewebeintegration und natürliche Ästhetik ohne dunkle Ränder in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Vollkeramikkronen-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'KORONY PEŁNOCERAMICZNE',
    defaultTitle: 'Korony Pełnoceramiczne w Stambule, Turcja',
    defaultSubtitle:
      'W 100% bezmetalowe, biokompatybilne korony ceramiczne zapewniające doskonałą integrację z dziąsłami bez sinych obwódek w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny koron pełnoceramicznych',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety koron pełnoceramicznych',
  },
  pt: {
    defaultBadge: 'COROAS CERÂMICAS PURAS',
    defaultTitle: 'Coroas Cerâmicas Puras em Istambul, Turquia',
    defaultSubtitle:
      'Coroas 100% cerâmicas livres de metal e biocompatíveis para integração gengival perfeita sem bordas escuras em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de coroas cerâmicas puras',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de coroas cerâmicas puras',
  },
  es: {
    defaultBadge: 'CORONAS TOTALMENTE CERÁMICAS',
    defaultTitle: 'Coronas Totalmente Cerámicas en Estambul, Turquía',
    defaultSubtitle:
      'Coronas 100% cerámicas biocompatibles sin metal para una integración gingival perfecta sin bordes oscuros en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de coronas cerámicas',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de coronas cerámicas',
  },
  ru: {
    defaultBadge: 'ЦЕЛЬНОКЕРАМИЧЕСКИЕ КОРОНКИ',
    defaultTitle: 'Цельнокерамические коронки в Стамбуле, Турция',
    defaultSubtitle:
      '100% безметалловые биосовместимые цельнокерамические коронки без темного ободка у десны и с естественной эстетикой в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по цельнокерамическим коронкам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты цельнокерамических коронок',
  },
};

const BRIDGE_HERO_I18N: Record<
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
    defaultBadge: 'FIXED PROSTHODONTICS',
    defaultTitle: 'Dental Bridges & Zirconia in Istanbul',
    defaultSubtitle:
      'Replace missing teeth permanently with high-strength German Zirconia & Implant-supported bridges, 5-star hotel, and VIP care in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free dental bridge consultation and quotation',
    secondaryBtnText: 'Explore Bridge Packages',
    secondaryBtnAria: 'Scroll down to explore dental bridge packages and medical details',
  },
  tr: {
    defaultBadge: 'SABİT PROTEZ TEDAVİSİ',
    defaultTitle: 'İstanbul Diş Köprüsü & Zirkonyum Tedavisi',
    defaultSubtitle:
      'Eksik dişlerinizi 1200+ MPa Alman Zirkonyum ve implant destekli köprülerle tamamlayın. 5 yıldızlı konfor ve VIP transferle yeni bir gülüş.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz diş köprüsü konsültasyonu ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Köprü Paketlerini İncele',
    secondaryBtnAria: 'Diş köprüsü paketlerini ve ayrıntılarını incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'FESTSITZENDE PROTHETIK',
    defaultTitle: 'Zahnbrücken & Zirkon in Istanbul',
    defaultSubtitle:
      'Schließen Sie Zahnlücken dauerhaft mit deutscher Zirkonqualität und implantatgetragenen Brücken – inklusive 5-Sterne-Hotel und VIP-Transfers.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Zahnbrücken-Beratung',
    secondaryBtnText: 'Brücken-Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Brücken-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'PROTETYKA STOMATOLOGICZNA',
    defaultTitle: 'Mosty Zębowe i Cyrkonowe w Stambule',
    defaultSubtitle:
      'Uzupełnij brakujące zęby trwałymi mostami z niemieckiego tlenku cyrkonu i mostami na implantach z 5★ hotelem w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny mostu zębowego',
    secondaryBtnText: 'Zobacz Pakiety Mostów',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety mostów zębowych',
  },
  pt: {
    defaultBadge: 'PRÓTESE FIXA',
    defaultTitle: 'Pontes Dentárias & Zircônia em Istambul',
    defaultSubtitle:
      'Recupere dentes ausentes com pontes fixas em zircônia alemã e sobre implantes com atendimento VIP 5 estrelas em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de pontes dentárias',
    secondaryBtnText: 'Ver Pacotes de Pontes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de pontes dentárias',
  },
  es: {
    defaultBadge: 'PRÓTESIS FIJA',
    defaultTitle: 'Puentes Dentales de Zirconio en Estambul',
    defaultSubtitle:
      'Recupere sus piezas ausentes con puentes de zirconio alemán y sobre implantes con hotel 5 estrellas y traslados VIP en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de puentes dentales',
    secondaryBtnText: 'Ver Paquetes de Puentes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de puentes dentales',
  },
  ru: {
    defaultBadge: 'НЕСЪЕМНОЕ ПРОТЕЗИРОВАНИЕ',
    defaultTitle: 'Зубные мостовидные протезы в Стамбуле',
    defaultSubtitle:
      'Восстановите отсутствующие зубы надежными циркониевыми мостами и протезами на имплантах с VIP-сервисом 5★ в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по зубным мостам',
    secondaryBtnText: 'Посмотреть Пакеты Мостов',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты мостовидных протезов',
  },
};

const DENTURES_HERO_I18N: Record<
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
    defaultBadge: 'REMOVABLE PROSTHODONTICS',
    defaultTitle: 'Dentures & Snap-On Overdentures in Istanbul',
    defaultSubtitle:
      'Eliminate loose, slipping dentures with rock-solid Snap-On implant overdentures and precision complete dentures, 5-star hotel, and VIP transfers.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact Master Smile Studio for a free denture consultation and quotation',
    secondaryBtnText: 'Explore Denture Packages',
    secondaryBtnAria: 'Scroll down to explore denture packages and medical details',
  },
  tr: {
    defaultBadge: 'PROTEZ DİŞ TEDAVİSİ',
    defaultTitle: 'İstanbul Protez Diş & Çıt Çıtlı Damak Tedavisi',
    defaultSubtitle:
      'Oynayan damak sorununa son veren implant destekli çıtçıtlı overdenture sistemleri ve estetik tam protezlerle güçlü çiğneme konforu.',
    primaryBtnText: 'Teklif Al & Randevu',
    primaryBtnAria: 'Ücretsiz protez konsültasyonu ve fiyat teklifi için iletişime geçin',
    secondaryBtnText: 'Protez Paketlerini İncele',
    secondaryBtnAria: 'Protez ve damak paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'ZAHNPROTHETIK',
    defaultTitle: 'Zahnprothesen & Overdentures in Istanbul',
    defaultSubtitle:
      'Fester Halt auf Implantaten mit Locator-Druckknöpfen und bruchsichere Vollprothesen – inklusive 5-Sterne-Hotel und VIP-Transfers.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Prothesen-Beratung',
    secondaryBtnText: 'Prothesen-Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Prothesen-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'PROTETYKA STOMATOLOGICZNA',
    defaultTitle: 'Protezy Zębowe i na Zatrzaskach w Stambule',
    defaultSubtitle:
      'Koniec z ruszającymi się protezami dzięki zatrzaskom na implantach (Overdentures) i protezom całkowitym z hotelem 5★ w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny protez zębowych',
    secondaryBtnText: 'Zobacz Pakiety Protez',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety protez zębowych',
  },
  pt: {
    defaultBadge: 'PRÓTESE DENTÁRIA',
    defaultTitle: 'Próteses Dentárias & Overdentures em Istambul',
    defaultSubtitle:
      'Estabilidade total com overdentures tipo clique sobre implantes e dentaduras anatômicas completas com atendimento VIP 5 estrelas em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de próteses dentárias',
    secondaryBtnText: 'Ver Pacotes de Próteses',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de próteses dentárias',
  },
  es: {
    defaultBadge: 'PRÓTESIS DENTAL',
    defaultTitle: 'Prótesis Dentales y Sobredentaduras en Estambul',
    defaultSubtitle:
      'Fijación total con sobredentaduras con anclaje sobre implantes y dentaduras completas con hotel 5 estrellas y traslados VIP en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de prótesis dentales',
    secondaryBtnText: 'Ver Paquetes de Prótesis',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de prótesis dentales',
  },
  ru: {
    defaultBadge: 'СЪЕМНОЕ ПРОТЕЗИРОВАНИЕ',
    defaultTitle: 'Зубные протезы и Overdentures в Стамбуле',
    defaultSubtitle:
      'Надежная фиксация на замках Locator без выпадения и эстетичные полные съемные протезы с VIP-сервисом 5★ в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по зубным протезам',
    secondaryBtnText: 'Посмотреть Пакеты Протезов',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты зубных протезов',
  },
};

const PORCELAIN_VENEERS_HERO_I18N: Record<
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
    defaultBadge: 'PORCELAIN LAMINATE VENEERS',
    defaultTitle: 'Porcelain Laminate Veneers in Istanbul, Turkey',
    defaultSubtitle:
      'Ultra-thin, minimally invasive Swiss Ivoclar E-Max porcelain veneers providing natural optical translucency, stain resistance, and Hollywood smile design in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free porcelain veneers consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore porcelain veneer packages',
  },
  tr: {
    defaultBadge: 'PORSELEN LAMİNA DİŞ KAPLAMA',
    defaultTitle: 'İstanbul Porselen Lamina (Yaprak Porselen) & Fiyatları',
    defaultSubtitle:
      'Minimum diş kesimi (0.3–0.5 mm) ve İsviçre Ivoclar E-Max ile doğal diş minesinin ışık geçirgenliğini birebir taklit eden leke tutmaz yaprak porselenler.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Porselen lamina için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Porselen lamina paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'PORZELLAN-VENEERS',
    defaultTitle: 'Porzellan-Veneers in Istanbul, Türkei',
    defaultSubtitle:
      'Minimalinvasive Porzellan-Veneers aus Schweizer Ivoclar E-Max für natürliche Transluzenz, Fleckenbeständigkeit und ein makelloses Lächeln in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Porzellan-Veneers',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Porzellan-Veneer-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'LICÓWKI PORCELANOWE',
    defaultTitle: 'Licówki Porcelanowe w Stambule, Turcja',
    defaultSubtitle:
      'Minimalnie inwazyjne licówki porcelanowe ze szwajcarskiego Ivoclar E-Max zapewniające naturalną przezierność i piękny uśmiech w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny licówek porcelanowych',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety licówek porcelanowych',
  },
  pt: {
    defaultBadge: 'FACETAS DE PORCELANA',
    defaultTitle: 'Facetas de Porcelana em Istambul, Turquia',
    defaultSubtitle:
      'Facetas de porcelana minimamente invasivas da suíça Ivoclar E-Max com translucidez natural, resistência a manchas e sorriso perfeito em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de facetas de porcelana',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de facetas de porcelana',
  },
  es: {
    defaultBadge: 'CARILLAS DE PORCELANA',
    defaultTitle: 'Carillas de Porcelana en Estambul, Turquía',
    defaultSubtitle:
      'Carillas de porcelana mínimamente invasivas de la suiza Ivoclar E-Max con translucidez natural, resistencia a manchas y sonrisa perfecta en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de carillas de porcelana',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de carillas de porcelana',
  },
  ru: {
    defaultBadge: 'КЕРАМИЧЕСКИЕ ВИНИРЫ',
    defaultTitle: 'Керамические виниры в Стамбуле, Турция',
    defaultSubtitle:
      'Минимально инвазивные керамические виниры из швейцарского Ivoclar E-Max с естественной прозрачностью и устойчивостью к окрашиванию в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по керамическим винирам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты керамических виниров',
  },
};

const EMAX_VENEERS_HERO_I18N: Record<
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
    defaultBadge: 'E-MAX PORCELAIN VENEERS',
    defaultTitle: 'E-Max Porcelain Veneers in Istanbul, Turkey',
    defaultSubtitle:
      'Authentic Swiss Ivoclar Vivadent IPS e.max lithium disilicate laminate veneers delivering unmatched natural translucency, ultra-thin 0.3 mm micro-preparation, and lifetime smile beauty in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free E-Max veneers consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore E-Max veneer packages',
  },
  tr: {
    defaultBadge: 'E-MAX LAMİNA DİŞ KAPLAMA',
    defaultTitle: 'İstanbul E-Max Lamina (Yaprak Porselen) & Fiyatları',
    defaultSubtitle:
      'Orijinal İsviçre Ivoclar Vivadent IPS e.max lityum disilikat ile 0.3 mm ultra ince diş kesimi ve doğal gülüş estetiği.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'E-Max lamina için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'E-Max lamina paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'E-MAX VENEERS',
    defaultTitle: 'E-Max Veneers in Istanbul, Türkei',
    defaultSubtitle:
      'Original Schweizer Ivoclar Vivadent IPS e.max Lithium-Disilikat-Veneers für natürliche Transluzenz und schonende 0,3-mm-Präparation in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu E-Max Veneers',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um E-Max-Veneer-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'LICÓWKI E-MAX',
    defaultTitle: 'Licówki E-Max w Stambule, Turcja',
    defaultSubtitle:
      'Oryginalne szwajcarskie licówki Ivoclar Vivadent IPS e.max z dwukrzemianu litu zapewniające naturalną przezierność i minimalną preparację 0,3 mm w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny licówek E-Max',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety licówek E-Max',
  },
  pt: {
    defaultBadge: 'FACETAS E-MAX',
    defaultTitle: 'Facetas E-Max em Istambul, Turquia',
    defaultSubtitle:
      'Facetas originais suíças Ivoclar Vivadent IPS e.max de dissilicato de lítio com translucidez natural e micro-preparação de 0,3 mm em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de facetas E-Max',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de facetas E-Max',
  },
  es: {
    defaultBadge: 'CARILLAS E-MAX',
    defaultTitle: 'Carillas E-Max en Estambul, Turquía',
    defaultSubtitle:
      'Carillas originales suizas Ivoclar Vivadent IPS e.max de disilicato de litio con translucidez natural y micro-preparación de 0,3 mm en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de carillas E-Max',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de carillas E-Max',
  },
  ru: {
    defaultBadge: 'ВИНИРЫ E-MAX',
    defaultTitle: 'Виниры E-Max в Стамбуле, Турция',
    defaultSubtitle:
      'Оригинальные швейцарские виниры Ivoclar Vivadent IPS e.max из дисиликата лития с непревзойденной прозрачностью и микропрепарированием 0,3 мм в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по винирам E-Max',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты виниров E-Max',
  },
};

const ZIRCONIUM_VENEERS_HERO_I18N: Record<
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
    defaultBadge: 'ZIRCONIUM LAMINATE VENEERS',
    defaultTitle: 'Zirconium Laminate Veneers in Istanbul, Turkey',
    defaultSubtitle:
      'High-strength German zirconia laminate veneers engineered for maximum durability, stain resistance, and radiant Hollywood smile transformation in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free zirconium veneers consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore zirconium veneer packages',
  },
  tr: {
    defaultBadge: 'ZİRKONYUM LAMİNA DİŞ KAPLAMA',
    defaultTitle: 'İstanbul Zirkonyum Lamina (Yaprak Porselen) & Fiyatları',
    defaultSubtitle:
      'Yüksek dayanımlı çok katmanlı Alman zirkonyum altyapı ile kırılmaya dirençli, leke tutmaz ve doğal gülüş estetiği.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Zirkonyum lamina için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Zirkonyum lamina paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'ZIRKONIUM-VENEERS',
    defaultTitle: 'Zirkonium-Veneers in Istanbul, Türkei',
    defaultSubtitle:
      'Hochfeste mehrschichtige deutsche Zirkonium-Veneers für maximale Bruchfestigkeit, Fleckenbeständigkeit und natürliche Ästhetik in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Zirkonium-Veneers',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Zirkonium-Veneer-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'LICÓWKI CYRKONOWE',
    defaultTitle: 'Licówki Cyrkonowe w Stambule, Turcja',
    defaultSubtitle:
      'Wielowarstwowe licówki z niemieckiego cyrkonu o wysokiej wytrzymałości, odporne na pęknięcia i przebarwienia w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny licówek cyrkonowych',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety licówek cyrkonowych',
  },
  pt: {
    defaultBadge: 'FACETAS DE ZIRCÓNIA',
    defaultTitle: 'Facetas de Zircónia em Istambul, Turquia',
    defaultSubtitle:
      'Facetas de zircónia alemã multicamadas de alta resistência a fraturas e manchas para um sorriso deslumbrante em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de facetas de zircónia',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de facetas de zircónia',
  },
  es: {
    defaultBadge: 'CARILLAS DE CIRCONIO',
    defaultTitle: 'Carillas de Circonio en Estambul, Turquía',
    defaultSubtitle:
      'Carillas de circonio alemán multicapa de alta resistencia a fracturas y manchas para una sonrisa radiante en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de carillas de circonio',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de carillas de circonio',
  },
  ru: {
    defaultBadge: 'ЦИРКОНИЕВЫЕ ВИНИРЫ',
    defaultTitle: 'Циркониевые виниры в Стамбуле, Турция',
    defaultSubtitle:
      'Высокопрочные многослойные немецкие циркониевые виниры с максимальной устойчивостью к сколам и естественной эстетикой в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по циркониевым винирам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты циркониевых виниров',
  },
};

const COMPOSITE_VENEERS_HERO_I18N: Record<
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
    defaultBadge: 'COMPOSITE VENEERS & BONDING',
    defaultTitle: 'Composite Veneers & Direct Bonding in Istanbul, Turkey',
    defaultSubtitle:
      'Same-day direct composite bonding & resin laminate veneers sculpted chairside with premium German nanofilled ceramics in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free composite veneers consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore composite veneer packages',
  },
  tr: {
    defaultBadge: 'KOMPOZİT LAMİNA & BONDİNG',
    defaultTitle: 'İstanbul Kompozit Lamina (Bonding) & Fiyatları',
    defaultSubtitle:
      'Alman nano-hibrit rezin ile tek seansta diş kesimsiz estetik gülüş tasarımı, kırık diş onarımı ve aralık kapatma.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Kompozit lamina için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Kompozit lamina paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'KOMPOSIT-VENEERS',
    defaultTitle: 'Komposit-Veneers in Istanbul, Türkei',
    defaultSubtitle:
      'Minimalinvasive direkte Komposit-Veneers aus deutschem Nano-Hybrid-Komposit für sofortige Zahnkorrekturen und Lückenschluss in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Komposit-Veneers',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Komposit-Veneer-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'LICÓWKI KOMPOZYTOWE',
    defaultTitle: 'Licówki Kompozytowe w Stambule, Turcja',
    defaultSubtitle:
      'Bezpośrednie licówki kompozytowe z niemieckiego nanokompozytu umożliwiające natychmiastową metamorfozę uśmiechu w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny licówek kompozytowych',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety licówek kompozytowych',
  },
  pt: {
    defaultBadge: 'FACETAS DE RESINA',
    defaultTitle: 'Facetas de Resina Composta em Istambul, Turquia',
    defaultSubtitle:
      'Facetas diretas de resina composta nano-híbrida alemã para transformação estética imediata do sorriso em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de facetas de resina',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de facetas de resina',
  },
  es: {
    defaultBadge: 'CARILLAS DE COMPOSITE',
    defaultTitle: 'Carillas de Composite en Estambul, Turquía',
    defaultSubtitle:
      'Carillas directas de composite nano-híbrido alemán para transformación estética inmediata de la sonrisa en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de carillas de composite',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de carillas de composite',
  },
  ru: {
    defaultBadge: 'КОМПОЗИТНЫЕ ВИНИРЫ',
    defaultTitle: 'Композитные виниры в Стамбуле, Турция',
    defaultSubtitle:
      'Прямые композитные виниры из немецкого наногибридного композита без обточки зубов за один визит в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по композитным винирам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты композитных виниров',
  },
};

const LUMINEERS_HERO_I18N: Record<
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
    defaultBadge: 'NO-PREP LUMINEERS',
    defaultTitle: 'No-Prep Lumineers in Istanbul, Turkey',
    defaultSubtitle:
      'Ultra-thin 0.2 mm contact lens porcelain veneers placed with zero tooth drilling, no anesthesia, and zero enamel loss at Master Smile Studio Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free Lumineers consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore Lumineers packages',
  },
  tr: {
    defaultBadge: 'KESİMSİZ LUMINEERS LAMİNA',
    defaultTitle: 'İstanbul Kesimsiz Lumineers (No-Prep Lamina) & Fiyatları',
    defaultSubtitle:
      '0.2 mm kontakt lens inceliğinde, doğal diş minesine zarar vermeden anestezi ve kesimsiz uygulanan lüks yaprak porselenler.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Lumineers için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Lumineers paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'NO-PREP LUMINEERS',
    defaultTitle: 'No-Prep Lumineers in Istanbul, Türkei',
    defaultSubtitle:
      'Hauchdünne 0,2-mm-Lumineers für ein perfektes Lächeln ganz ohne Beschleifen der Zähne und ohne Anästhesie in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Lumineers',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Lumineers-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'LICÓWKI LUMINEERS',
    defaultTitle: 'Licówki Lumineers bez szlifowania w Stambule, Turcja',
    defaultSubtitle:
      'Ultra-cienkie licówki Lumineers 0,2 mm bez szlifowania szkliwa i bez znieczulenia w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny licówek Lumineers',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety licówek Lumineers',
  },
  pt: {
    defaultBadge: 'LUMINEERS SEM DESGASTE',
    defaultTitle: 'Lumineers sem Desgaste em Istambul, Turquia',
    defaultSubtitle:
      'Lumineers ultrafinas de 0,2 mm aplicadas sem desgaste do esmalte dental e sem anestesia em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de Lumineers',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de Lumineers',
  },
  es: {
    defaultBadge: 'LUMINEERS SIN TALLADO',
    defaultTitle: 'Lumineers sin Tallado en Estambul, Turquía',
    defaultSubtitle:
      'Lumineers ultrafinas de 0,2 mm colocadas sin desgaste dental ni anestesia en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de Lumineers',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de Lumineers',
  },
  ru: {
    defaultBadge: 'ВИНИРЫ LUMINEERS',
    defaultTitle: 'Люминиры Lumineers без обточки в Стамбуле, Турция',
    defaultSubtitle:
      'Ультратонкие люминиры Lumineers 0,2 мм без препарирования эмали и без анестезии в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по люминирам Lumineers',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты люминиров Lumineers',
  },
};

const EMPRESS_VENEERS_HERO_I18N: Record<
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
    defaultBadge: 'IPS EMPRESS PORCELAIN VENEERS',
    defaultTitle: 'IPS Empress Porcelain Veneers in Istanbul, Turkey',
    defaultSubtitle:
      'High-leucite glass-ceramic veneers crafted by master ceramists for unmatched light dispersion, lifelike natural depth, and radiant smile elegance in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free IPS Empress veneers consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore IPS Empress veneer packages',
  },
  tr: {
    defaultBadge: 'IPS EMPRESS PORSELEN LAMİNA',
    defaultTitle: 'İstanbul IPS Empress Porselen Lamina & Fiyatları',
    defaultSubtitle:
      'İsviçre Ivoclar IPS Empress lösit cam seramik ile doğal diş minesinin ışık derinliğini ve kameleon etkisini birebir yakalayan üstün estetik.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'IPS Empress için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'IPS Empress paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'IPS EMPRESS VENEERS',
    defaultTitle: 'IPS Empress Veneers in Istanbul, Türkei',
    defaultSubtitle:
      'Leuzitverstärkte Glaskeramik-Veneers von Ivoclar IPS Empress für unübertroffene Lichtstreuung und natürliche Chamäleon-Ästhetik in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu IPS Empress Veneers',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um IPS Empress-Veneer-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'LICÓWKI IPS EMPRESS',
    defaultTitle: 'Licówki IPS Empress w Stambule, Turcja',
    defaultSubtitle:
      'Licówki z ceramiki szklanej Ivoclar IPS Empress zapewniające niezrównaną głębię optyczną i efekt kameleona w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny licówek IPS Empress',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety licówek IPS Empress',
  },
  pt: {
    defaultBadge: 'FACETAS IPS EMPRESS',
    defaultTitle: 'Facetas IPS Empress em Istambul, Turquia',
    defaultSubtitle:
      'Facetas de vitrocerâmica Ivoclar IPS Empress com dispersão de luz incomparável e efeito camaleão em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de facetas IPS Empress',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de facetas IPS Empress',
  },
  es: {
    defaultBadge: 'CARILLAS IPS EMPRESS',
    defaultTitle: 'Carillas IPS Empress en Estambul, Turquía',
    defaultSubtitle:
      'Carillas de vitrocerámica Ivoclar IPS Empress con dispersión de luz incomparable y efecto camaleón en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de carillas IPS Empress',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de carillas IPS Empress',
  },
  ru: {
    defaultBadge: 'ВИНИРЫ IPS EMPRESS',
    defaultTitle: 'Виниры IPS Empress в Стамбуле, Турция',
    defaultSubtitle:
      'Виниры из лейцитной стеклокерамики Ivoclar IPS Empress с непревзойденной глубиной света и эффектом хамелеона в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по винирам IPS Empress',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты виниров IPS Empress',
  },
};

const TRADITIONAL_BRIDGES_HERO_I18N: Record<
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
    defaultBadge: 'TRADITIONAL FIXED DENTAL BRIDGES',
    defaultTitle: 'Traditional Dental Bridges in Istanbul, Turkey',
    defaultSubtitle:
      'Precision-milled German zirconia and porcelain-fused-to-metal fixed dental bridges to seamlessly replace missing teeth in 5-7 days in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free traditional dental bridges consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore traditional bridge packages',
  },
  tr: {
    defaultBadge: 'GELENEKSEL SABİT DİŞ KÖPRÜSÜ',
    defaultTitle: 'İstanbul Geleneksel Sabit Diş Köprüsü & Fiyatları',
    defaultSubtitle:
      'Yüksek dayanımlı Alman Zirkonyum ve porselen ile eksik dişlerinizi komşu dişlerden destek alarak 5-7 günde kalıcı olarak tamamlayın.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Geleneksel diş köprüsü için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Diş köprüsü paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'TRADITIONELLE ZAHNBRÜCKEN',
    defaultTitle: 'Traditionelle Zahnbrücken in Istanbul, Türkei',
    defaultSubtitle:
      'Festsitzende traditionelle Zahnbrücken aus hochfestem deutschem Zirkonium oder Metallkeramik für lückenlose Ästhetik in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Zahnbrücken',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Zahnbrücken-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'TRADYCYJNE MOSTY PROTETYCZNE',
    defaultTitle: 'Tradycyjne Mosty Protetyczne w Stambule, Turcja',
    defaultSubtitle:
      'Precyzyjnie wykonane tradycyjne mosty protetyczne z niemieckiego cyrkonu lub porcelany na metalu w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny mostów protetycznych',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety mostów protetycznych',
  },
  pt: {
    defaultBadge: 'PONTES DENTÁRIAS TRADICIONAIS',
    defaultTitle: 'Pontes Dentárias Tradicionais em Istambul, Turquia',
    defaultSubtitle:
      'Pontes dentárias fixas tradicionais em zircónia alemã de alta resistência ou metalo-cerâmica em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de pontes dentárias',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de pontes dentárias',
  },
  es: {
    defaultBadge: 'PUENTES DENTALES TRADICIONALES',
    defaultTitle: 'Puentes Dentales Tradicionales en Estambul, Turquía',
    defaultSubtitle:
      'Puentes dentales fijos tradicionales de circonio alemán de alta resistencia o metal-porcelana en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de puentes dentales',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de puentes dentales',
  },
  ru: {
    defaultBadge: 'ТРАДИЦИОННЫЕ ЗУБНЫЕ МОСТЫ',
    defaultTitle: 'Традиционные зубные мосты в Стамбуле, Турция',
    defaultSubtitle:
      'Традиционные несъемные зубные мосты из немецкого диоксида циркония и металлокерамики за 5-7 дней в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по зубным мостам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты зубных мостов',
  },
};

const MARYLAND_BRIDGES_HERO_I18N: Record<
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
    defaultBadge: 'MARYLAND RESIN-BONDED BRIDGES',
    defaultTitle: 'Maryland Dental Bridges in Istanbul, Turkey',
    defaultSubtitle:
      'Conservative, minimal-prep fixed dental bridges with discreet ceramic or zirconia wings bonded to the backside of adjacent teeth for single missing front teeth in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free Maryland bridges consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore Maryland bridge packages',
  },
  tr: {
    defaultBadge: 'MARYLAND KANATLI DİŞ KÖPRÜSÜ',
    defaultTitle: 'İstanbul Maryland Kanatlı Diş Köprüsü & Fiyatları',
    defaultSubtitle:
      'Komşu dişleri kesmeden, arka yüzeylere adeziv kanatlarla yapıştırılan minimal preparasyonlu estetik ön diş köprüleri.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Maryland kanatlı köprü için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Maryland köprü paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'MARYLAND-BRÜCKEN',
    defaultTitle: 'Maryland-Zahnbrücken in Istanbul, Türkei',
    defaultSubtitle:
      'Minimalinvasive adhäsive Maryland-Brücken mit hauchdünnen Keramik- oder Zirkonflügeln ohne Beschleifen gesunder Zähne in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Maryland-Brücken',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Maryland-Brücken-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'MOSTY MARYLAND',
    defaultTitle: 'Mosty Protetyczne Maryland w Stambule, Turcja',
    defaultSubtitle:
      'Minimalnie inwazyjne mosty adhezyjne Maryland ze skrzydełkami z cyrkonu lub ceramiki bez szlifowania zębów w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny mostów Maryland',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety mostów Maryland',
  },
  pt: {
    defaultBadge: 'PONTES MARYLAND',
    defaultTitle: 'Pontes Dentárias Maryland em Istambul, Turquia',
    defaultSubtitle:
      'Pontes adesivas Maryland minimamente invasivas com aletas cerâmicas ou de zircónia sem desgaste dental em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de pontes Maryland',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de pontes Maryland',
  },
  es: {
    defaultBadge: 'PUENTES MARYLAND',
    defaultTitle: 'Puentes Dentales Maryland en Estambul, Turquía',
    defaultSubtitle:
      'Puentes adhesivos Maryland mínimamente invasivos con aletas de cerámica o circonio sin tallado dental en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de puentes Maryland',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de puentes Maryland',
  },
  ru: {
    defaultBadge: 'МОСТЫ МЭРИЛЕНД',
    defaultTitle: 'Зубные мосты Мэриленд в Стамбуле, Турция',
    defaultSubtitle:
      'Минимально инвазивные адгезивные мосты Мэриленд с крыльями из циркония или керамики без обточки зубов в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по мостам Мэриленд',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты мостов Мэриленд',
  },
};

const CANTILEVER_BRIDGES_HERO_I18N: Record<
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
    defaultBadge: 'CANTILEVER FIXED DENTAL BRIDGES',
    defaultTitle: 'Cantilever Dental Bridges in Istanbul, Turkey',
    defaultSubtitle:
      'Precision-engineered single-sided anchor dental bridges designed to replace missing teeth when only one adjacent anchor tooth is available in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free cantilever dental bridges consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore cantilever bridge packages',
  },
  tr: {
    defaultBadge: 'CANTILEVER (BALKON) ASMA KÖPRÜ',
    defaultTitle: 'İstanbul Cantilever (Asma) Diş Köprüsü & Fiyatları',
    defaultSubtitle:
      'Boşluğun tek tarafındaki sağlam dişten destek alan, yüksek dayanımlı Alman Zirkonyum asma köprü restorasyonları.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Cantilever asma köprü için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Cantilever köprü paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'CANTILEVER-ZAHNBRÜCKEN',
    defaultTitle: 'Cantilever-Zahnbrücken in Istanbul, Türkei',
    defaultSubtitle:
      'Präzisionsgefertigte Cantilever-Brücken aus deutschem Zirkonium zur einseitigen Verankerung bei fehlenden Zähnen in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Cantilever-Brücken',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Cantilever-Brücken-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'MOSTY WSPORNIKOWE CANTILEVER',
    defaultTitle: 'Mosty Wspornikowe Cantilever w Stambule, Turcja',
    defaultSubtitle:
      'Precyzyjnie wykonane mosty wspornikowe z niemieckiego cyrkonu oparte na pojedynczym filarze w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny mostów Cantilever',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety mostów Cantilever',
  },
  pt: {
    defaultBadge: 'PONTES CANTILEVER',
    defaultTitle: 'Pontes Dentárias Cantilever em Istambul, Turquia',
    defaultSubtitle:
      'Pontes cantilever de alta precisão em zircónia alemã para ancoragem unilateral de dentes perdidos em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de pontes cantilever',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de pontes cantilever',
  },
  es: {
    defaultBadge: 'PUENTES CANTILEVER',
    defaultTitle: 'Puentes Dentales Cantilever en Estambul, Turquía',
    defaultSubtitle:
      'Puentes cantilever de alta precisión en circonio alemán para anclaje unilateral de piezas ausentes en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de puentes cantilever',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de puentes cantilever',
  },
  ru: {
    defaultBadge: 'КОНСОЛЬНЫЕ ЗУБНЫЕ МОСТЫ',
    defaultTitle: 'Консольные зубные мосты в Стамбуле, Турция',
    defaultSubtitle:
      'Высокоточные консольные зубные мосты из немецкого диоксида циркония с односторонней фиксацией в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по консольным мостам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты консольных мостов',
  },
};

const COMPLETE_DENTURES_HERO_I18N: Record<
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
    defaultBadge: 'COMPLETE FULL DENTURES',
    defaultTitle: 'Complete Dentures in Istanbul, Turkey',
    defaultSubtitle:
      'Precision-crafted high-impact acrylic and BPS biofunctional full dentures for superior suction, comfort, and natural aesthetics in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free complete dentures consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore complete denture packages',
  },
  tr: {
    defaultBadge: 'TAM DİŞ PROTEZİ (TOTAL)',
    defaultTitle: 'İstanbul Tam Damak Diş Protezi & Fiyatları',
    defaultSubtitle:
      'Yüksek darbe dirençli akrilik ve BPS biyofonksiyonel tam çene protezleri ile güçlü vakum tutuculuğu ve doğal estetik.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Tam protez için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Tam protez paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'VOLLPROTHESEN',
    defaultTitle: 'Vollprothesen in Istanbul, Türkei',
    defaultSubtitle:
      'Hochwertige Acryl- und BPS-biofunktionelle Vollprothesen für optimalen Saugeffekt, hohen Tragekomfort und natürliche Ästhetik in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Vollprothesen',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Vollprothesen-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'PROTEZY CAŁKOWITE',
    defaultTitle: 'Protezy Całkowite w Stambule, Turcja',
    defaultSubtitle:
      'Wysokoudarzeniowy akryl i biofunkcjonalne protezy całkowite BPS zapewniające doskonałe przyssanie i naturalny uśmiech w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny protez całkowitych',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety protez całkowitych',
  },
  pt: {
    defaultBadge: 'PRÓTESES TOTAIS',
    defaultTitle: 'Próteses Dentárias Totais em Istambul, Turquia',
    defaultSubtitle:
      'Próteses totais em acrílico de alto impacto e sistema biofuncional BPS para máxima sucção e sorriso natural em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de próteses totais',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de próteses totais',
  },
  es: {
    defaultBadge: 'PRÓTESIS COMPLETAS',
    defaultTitle: 'Prótesis Dentales Completas en Estambul, Turquía',
    defaultSubtitle:
      'Prótesis completas en acrílico de alto impacto y sistema biofuncional BPS para máxima succión y sonrisa natural en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de prótesis completas',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de prótesis completas',
  },
  ru: {
    defaultBadge: 'ПОЛНЫЕ СЪЕМНЫЕ ПРОТЕЗЫ',
    defaultTitle: 'Полные съемные зубные протезы в Стамбуле, Турция',
    defaultSubtitle:
      'Высокопрочные полные съемные акриловые и биофункциональные протезы BPS с надежной фиксацией и естественной эстетикой в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по полным протезам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты полных протезов',
  },
};

const PARTIAL_DENTURES_HERO_I18N: Record<
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
    defaultBadge: 'PARTIAL REMOVABLE DENTURES',
    defaultTitle: 'Partial Dentures in Istanbul, Turkey',
    defaultSubtitle:
      'Cast metal framework, flexible Valplast nylon, and precision attachment partial dentures engineered for seamless blend with remaining natural teeth in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free partial dentures consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore partial denture packages',
  },
  tr: {
    defaultBadge: 'BÖLÜMLÜ (PARSİYEL) DİŞ PROTEZİ',
    defaultTitle: 'İstanbul Bölümlü (Parsiyel) Diş Protezi & Fiyatları',
    defaultSubtitle:
      'Döküm metal iskeletli, Valplast esnek naylon ve hassas tutuculu bölümlü protezler ile mevcut dişlerle kusursuz uyum.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Bölümlü protez için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Bölümlü protez paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'TEILPROTHESEN',
    defaultTitle: 'Teilprothesen in Istanbul, Türkei',
    defaultSubtitle:
      'Modellguss-, flexible Valplast-Nylon- und Geschiebeprothesen für perfekte Passform und harmonische Integration in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Teilprothesen',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Teilprothesen-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'PROTEZY CZĘŚCIOWE',
    defaultTitle: 'Protezy Częściowe w Stambule, Turcja',
    defaultSubtitle:
      'Protezy szkieletowe, elastyczne Valplast oraz protezy na zatrzaski precyzyjne zapewniające doskonały wygląd i stabilność w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny protez częściowych',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety protez częściowych',
  },
  pt: {
    defaultBadge: 'PRÓTESES PARCIAIS',
    defaultTitle: 'Próteses Dentárias Parciais em Istambul, Turquia',
    defaultSubtitle:
      'Próteses esqueléticas metálicas, nylon flexível Valplast e próteses com encaixes de precisão para máxima discrição em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de próteses parciais',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de próteses parciais',
  },
  es: {
    defaultBadge: 'PRÓTESIS PARCIALES',
    defaultTitle: 'Prótesis Dentales Parciales en Estambul, Turquía',
    defaultSubtitle:
      'Prótesis esqueléticas de cromo-cobalto, nylon flexible Valplast y ataches de precisión para un ajuste perfecto en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de prótesis parciales',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de prótesis parciales',
  },
  ru: {
    defaultBadge: 'ЧАСТИЧНЫЕ СЪЕМНЫЕ ПРОТЕЗЫ',
    defaultTitle: 'Частичные съемные зубные протезы в Стамбуле, Турция',
    defaultSubtitle:
      'Бюгельные протезы, гибкий нейлон Valplast и протезы на замковых креплениях для надежной фиксации и эстетики в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по частичным протезам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты частичных протезов',
  },
};

const OVERDENTURES_HERO_I18N: Record<
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
    defaultBadge: 'IMPLANT SUPPORTED OVERDENTURES',
    defaultTitle: 'Implant Supported Dentures (Overdentures) in Istanbul, Turkey',
    defaultSubtitle:
      'High-stability snap-on locator and CAD/CAM titanium bar overdentures anchored securely to dental implants in Istanbul.',
    primaryBtnText: 'Get Free Quote & Book',
    primaryBtnAria: 'Contact us for a free overdentures consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore overdenture packages',
  },
  tr: {
    defaultBadge: 'İMPLANT DESTEKLİ OVERDENTURE PROTEZ',
    defaultTitle: 'İstanbul İmplant Üstü Çıtçıtlı Protez (Overdenture) & Fiyatları',
    defaultSubtitle:
      'Çene kemiğine yerleştirilen titanyum implantlardan destek alan çıtçıtlı ve barlı overdenture protezlerle kaymayan güçlü çiğneme.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Overdenture protez için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Overdenture protez paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'IMPLANTATGETRAGENE DECKPROTHESEN',
    defaultTitle: 'Implantatgetragene Deckprothesen (Overdentures) in Istanbul, Türkei',
    defaultSubtitle:
      'Festsitzende Locator- und Steg-Deckprothesen auf Titanimplantaten für maximalen Halt und unbeschwerten Genuss in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Deckprothesen',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Deckprothesen-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'PROTEZY NA IMPLANTACH (OVERDENTURE)',
    defaultTitle: 'Protezy na Implantach (Overdenture) w Stambule, Turcja',
    defaultSubtitle:
      'Stabilne protezy zatrzaskowe i belkowe oparte na implantach tytanowych przywracające pełną siłę żucia w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny protez na implantach',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety protez na implantach',
  },
  pt: {
    defaultBadge: 'SOBREDENTADURAS SOBRE IMPLANTES',
    defaultTitle: 'Sobredentaduras sobre Implantes em Istambul, Turquia',
    defaultSubtitle:
      'Sobredentaduras com sistema locator ou barra sobre implantes de titânio para máxima retenção e segurança ao mastigar em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de sobredentaduras',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de sobredentaduras',
  },
  es: {
    defaultBadge: 'SOBREDENTADURAS SOBRE IMPLANTES',
    defaultTitle: 'Sobredentaduras sobre Implantes en Estambul, Turquía',
    defaultSubtitle:
      'Sobredentaduras con sistema locator o barra sobre implantes de titanio para máxima retención y seguridad al masticar en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de sobredentaduras',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de sobredentaduras',
  },
  ru: {
    defaultBadge: 'ПОКРЫВНЫЕ ПРОТЕЗЫ НА ИМПЛАНТАХ',
    defaultTitle: 'Покрывные протезы на имплантах (Overdenture) в Стамбуле, Турция',
    defaultSubtitle:
      'Высокостабильные кнопочные (Locator) и балочные покрывные протезы на титановых имплантах для уверенной фиксации в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по покрывным протезам',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты покрывных протезов',
  },
};


const SMILE_MAKEOVER_HERO_I18N: Record<
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
    defaultBadge: '3D DIGITAL SMILE DESIGN & MAKEOVER',
    defaultTitle: 'Smile Makeover & Digital Smile Design in Istanbul, Turkey',
    defaultSubtitle:
      'AI-guided 3D Digital Smile Design with customized facial golden ratio analysis and live in-mouth physical mock-up try-in in Istanbul.',
    primaryBtnText: 'Get Free Smile Design Quote',
    primaryBtnAria: 'Contact us for a free smile makeover consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore smile makeover packages',
  },
  tr: {
    defaultBadge: '3D DİJİTAL GÜLÜŞ TASARIMI',
    defaultTitle: 'İstanbul Smile Makeover & Dijital Gülüş Tasarımı',
    defaultSubtitle:
      'Yüzün altın oranına ve dudak dinamiklerine özel 3D dijital analiz, yapay zeka destekli planlama ve diş kesimi öncesi canlı mock-up provası.',
    primaryBtnText: 'Ücretsiz Tasarım Teklifi Al',
    primaryBtnAria: 'Smile makeover için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Gülüş tasarımı paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: '3D DIGITAL SMILE DESIGN',
    defaultTitle: 'Smile Makeover & Digital Smile Design in Istanbul, Türkei',
    defaultSubtitle:
      'Individuelle 3D-Smile-Design-Analyse, KI-gestützte Behandlungsplanung und Live-Mock-up-Anprobe vor Behandlungsbeginn in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Smile Makeover',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Smile Makeover Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'CYFROWE PROJEKTOWANIE UŚMIECHU 3D',
    defaultTitle: 'Smile Makeover w Stambule, Turcja',
    defaultSubtitle:
      'Indywidualna analiza estetyczna 3D, cyfrowe planowanie uśmiechu AI i przymiarka mock-up przed rozpoczęciem zabiegu w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny metamorfozy uśmiechu',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety smile makeover',
  },
  pt: {
    defaultBadge: 'DESIGN DIGITAL DO SORRISO 3D',
    defaultTitle: 'Smile Makeover e Design Digital do Sorriso em Istambul, Turquia',
    defaultSubtitle:
      'Análise estética 3D personalizada, planeamento digital com IA e prova de mock-up ao vivo antes de qualquer desgaste em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de transformação do sorriso',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de smile makeover',
  },
  es: {
    defaultBadge: 'DISEÑO DIGITAL DE SONRISA 3D',
    defaultTitle: 'Smile Makeover y Diseño Digital de Sonrisa en Estambul, Turquía',
    defaultSubtitle:
      'Análisis estético 3D personalizado, planificación digital con IA y prueba de mock-up en vivo antes del tratamiento en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de diseño de sonrisa',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de smile makeover',
  },
  ru: {
    defaultBadge: '3D ЦИФРОВОЙ ДИЗАЙН УЛЫБКИ',
    defaultTitle: 'Smile Makeover и цифровой дизайн улыбки в Стамбуле, Турция',
    defaultSubtitle:
      'Персонализированный 3D-анализ улыбки, цифровое планирование с ИИ и живая примерка mock-up до начала препарирования в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по дизайну улыбки',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты smile makeover',
  },
};

const HOLLYWOOD_SMILE_HERO_I18N: Record<
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
    defaultBadge: 'HOLLYWOOD SMILE MAKEOVER',
    defaultTitle: 'Hollywood Smile in Istanbul, Turkey (Full Smile Makeover)',
    defaultSubtitle:
      'Complete aesthetic transformation with 16 to 20 Swiss Ivoclar E-Max veneers or German Zirconia crowns crafted to your facial Golden Ratio in Istanbul.',
    primaryBtnText: 'Get Hollywood Smile Quote',
    primaryBtnAria: 'Contact us for a free Hollywood Smile consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore Hollywood smile packages',
  },
  tr: {
    defaultBadge: 'HOLLYWOOD SMİLE GÜLÜŞ TASARIMI',
    defaultTitle: 'İstanbul Hollywood Smile Fiyatları & Gülüş Tasarımı',
    defaultSubtitle:
      '16-20 adet İsviçre Ivoclar E-Max veya Alman Zirkonyum kaplama ile 4-6 günde kusursuz beyaz simetri ve büyüleyici Hollywood gülüşü.',
    primaryBtnText: 'Hollywood Smile Teklifi Al',
    primaryBtnAria: 'Hollywood smile için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Hollywood smile paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'HOLLYWOOD SMILE',
    defaultTitle: 'Hollywood Smile in Istanbul, Türkei (Komplettes Makeover)',
    defaultSubtitle:
      '16 bis 20 Schweizer Ivoclar E-Max oder deutsche Zirkonkronen für perfekte weiße Symmetrie und ein strahlendes Hollywood-Lächeln in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Hollywood Smile',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Hollywood Smile Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'HOLLYWOODZKI UŚMIECH',
    defaultTitle: 'Hollywood Smile w Stambule, Turcja',
    defaultSubtitle:
      '16–20 szwajcarskich licówek Ivoclar E-Max lub koron cyrkonowych zapewniających idealną symetrię i hollywoodzki uśmiech w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny hollywoodzkiego uśmiechu',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety hollywood smile',
  },
  pt: {
    defaultBadge: 'SORRISO HOLLYWOOD',
    defaultTitle: 'Sorriso Hollywood em Istambul, Turquia',
    defaultSubtitle:
      '16 a 20 facetas suíças Ivoclar E-Max ou coroas de zircónia para simetria perfeita e sorriso Hollywood deslumbrante em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de Sorriso Hollywood',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de sorriso hollywood',
  },
  es: {
    defaultBadge: 'SONRISA HOLLYWOOD',
    defaultTitle: 'Sonrisa Hollywood en Estambul, Turquía',
    defaultSubtitle:
      '16 a 20 carillas suizas Ivoclar E-Max o coronas de circonio para una simetría blanca perfecta y sonrisa Hollywood en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de sonrisa Hollywood',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de sonrisa Hollywood',
  },
  ru: {
    defaultBadge: 'ГОЛЛИВУДСКАЯ УЛЫБКА',
    defaultTitle: 'Голливудская улыбка в Стамбуле, Турция',
    defaultSubtitle:
      '16–20 швейцарских виниров Ivoclar E-Max или циркониевых коронок для безупречной белизны и голливудской улыбки в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по голливудской улыбке',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты голливудской улыбки',
  },
};

const GUMMY_SMILE_HERO_I18N: Record<
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
    defaultBadge: 'GUMMY SMILE TREATMENT & GUM CONTOURING',
    defaultTitle: 'Gummy Smile Treatment & Laser Gum Contouring in Istanbul, Turkey',
    defaultSubtitle:
      'Painless diode laser gingivectomy and aesthetic gum contouring to balance excessive gum display and enhance smile symmetry in Istanbul.',
    primaryBtnText: 'Get Gummy Smile Quote',
    primaryBtnAria: 'Contact us for a free Gummy Smile consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore gummy smile packages',
  },
  tr: {
    defaultBadge: 'PEMBE ESTETİK & GUMMY SMILE',
    defaultTitle: 'İstanbul Gummy Smile & Diş Eti Estetiği Tedavisi',
    defaultSubtitle:
      'Ağrısız ve dikişsiz diyot lazer teknolojisi ile diş eti seviyeleme, pembe estetik ve gülüş simetrisi optimizasyonu.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Gummy smile için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Gummy smile paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'GUMMY-SMILE-BEHANDLUNG & ZAHNFLEISCHKORREKTUR',
    defaultTitle: 'Gummy-Smile-Behandlung & Zahnfleischästhetik in Istanbul, Türkei',
    defaultSubtitle:
      'Schmerzfreie Diodenlaser-Gingivektomie zur Harmonisierung der Zahnfleischlinie und Beseitigung des Gummy Smile in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Gummy Smile',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Gummy Smile Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'KOREKTA UŚMIECHU DZIĄSŁOWEGO (GUMMY SMILE)',
    defaultTitle: 'Leczenie Uśmiechu Dziąsłowego (Gummy Smile) w Stambule, Turcja',
    defaultSubtitle:
      'Bezbolesna korekta linii dziąseł laserem diodowym zapewniająca idealną różową estetykę i harmonijny uśmiech w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny leczenia gummy smile',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety gummy smile',
  },
  pt: {
    defaultBadge: 'TRATAMENTO DE SORRISO GENGIVAL',
    defaultTitle: 'Tratamento de Sorriso Gengival em Istambul, Turquia',
    defaultSubtitle:
      'Gengivoplastia indolor com laser de díodo para alinhar a margem gengival e eliminar o sorriso gengival em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de sorriso gengival',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de sorriso gengival',
  },
  es: {
    defaultBadge: 'TRATAMIENTO DE SONRISA GINGIVAL',
    defaultTitle: 'Tratamiento de Sonrisa Gingival en Estambul, Turquía',
    defaultSubtitle:
      'Gingivoplastia indolora con láser de diodo para nivelar el margen gingival y corregir la sonrisa gingival en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de sonrisa gingival',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de sonrisa gingival',
  },
  ru: {
    defaultBadge: 'ЛЕЧЕНИЕ ДЕСНЕВОЙ УЛЫБКИ (GUMMY SMILE)',
    defaultTitle: 'Лечение десневой улыбки (Gummy Smile) в Стамбуле, Турция',
    defaultSubtitle:
      'Безболезненная коррекция десневого контура диодным лазером для устранения десневой улыбки и розовой эстетики в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по десневой улыбке',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты десневой улыбки',
  },
};

const TEETH_WHITENING_HERO_I18N: Record<
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
    defaultBadge: 'LASER TEETH WHITENING',
    defaultTitle: 'Laser Teeth Whitening in Istanbul, Turkey (Philips Zoom)',
    defaultSubtitle:
      'In-clinic professional light-activated Philips Zoom Blue LED whitening lightening enamel by 6 to 8 shades safely in 45 minutes in Istanbul.',
    primaryBtnText: 'Get Whitening Quote',
    primaryBtnAria: 'Contact us for a free teeth whitening consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore whitening packages',
  },
  tr: {
    defaultBadge: 'LAZERLE DİŞ BEYAZLATMA',
    defaultTitle: 'İstanbul Lazerle Diş Beyazlatma & Philips Zoom',
    defaultSubtitle:
      'Klinik ortamında Philips Zoom Blue LED ışık aktivasyonu ile tek seansta 6-8 tona kadar güvenli ve kalıcı beyazlatma.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Diş beyazlatma için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Beyazlatma paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'LASER-ZAHNAUFHELLUNG (BLEACHING)',
    defaultTitle: 'Laser-Zahnaufhellung (Bleaching) in Istanbul, Türkei',
    defaultSubtitle:
      'Professionelles klinisches Bleaching mit Philips Zoom LED-Licht für 6 bis 8 Nuancen hellere Zähne in nur einer Sitzung in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zum Bleaching',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Bleaching-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'LASEROWE WYBIELANIE ZĘBÓW',
    defaultTitle: 'Laserowe Wybielanie Zębów w Stambule, Turcja (Philips Zoom)',
    defaultSubtitle:
      'Profesjonalne wybielanie gabinetowe lampą Philips Zoom rozjaśniające zęby o 6-8 odcieni podczas jednej wizyty w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny wybielania zębów',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety wybielania zębów',
  },
  pt: {
    defaultBadge: 'BRANQUEAMENTO DENTÁRIO A LASER',
    defaultTitle: 'Branqueamento Dentário a Laser em Istambul, Turquia',
    defaultSubtitle:
      'Branqueamento profissional com lâmpada Philips Zoom para dentes até 8 tons mais claros em apenas uma sessão em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de branqueamento dentário',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de branqueamento',
  },
  es: {
    defaultBadge: 'BLANQUEAMIENTO DENTAL LÁSER',
    defaultTitle: 'Blanqueamiento Dental Láser en Estambul, Turquía',
    defaultSubtitle:
      'Blanqueamiento dental clínico con lámpara Philips Zoom para aclarar de 6 a 8 tonos en una sola sesión en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de blanqueamiento dental',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de blanqueamiento dental',
  },
  ru: {
    defaultBadge: 'ЛАЗЕРНОЕ ОТБЕЛИВАНИЕ ЗУБОВ',
    defaultTitle: 'Лазерное отбеливание зубов в Стамбуле, Турция (Philips Zoom)',
    defaultSubtitle:
      'Профессиональное клиническое отбеливание лампой Philips Zoom на 6-8 тонов светлее всего за один сеанс в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по отбеливанию зубов',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты отбеливания зубов',
  },
};

const TOOTH_CONTOURING_HERO_I18N: Record<
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
    defaultBadge: 'TOOTH CONTOURING & ENAMEL RESHAPING',
    defaultTitle: 'Tooth Contouring & Shaping in Istanbul, Turkey',
    defaultSubtitle:
      'Subtle enamel recontouring and odontoplasty smoothing minor chips, overlaps, and irregular edges painlessly in a single visit in Istanbul.',
    primaryBtnText: 'Get Contouring Quote',
    primaryBtnAria: 'Contact us for a free tooth contouring consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore contouring packages',
  },
  tr: {
    defaultBadge: 'DİŞ ŞEKİLLENDİRME (ODONTOPLASTİ)',
    defaultTitle: 'İstanbul Diş Şekillendirme ve Konturlama Tedavisi',
    defaultSubtitle:
      'Hafif diş eğriliklerini, sivrilikleri ve asimetrileri anestezi gerektirmeden düzelten mikroskobik mine şekillendirme ve polisaj.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Diş şekillendirme için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Şekillendirme paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'ZAHNUMFORMUNG & KONTURIERUNG',
    defaultTitle: 'Zahnumformung & Konturierung in Istanbul, Türkei',
    defaultSubtitle:
      'Minimalinvasive Schmelzkonturierung zur Glättung kleiner Kanten und Asymmetrien ganz ohne Betäubung in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zur Zahnumformung',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Konturierungs-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'KONTUROWANIE I KSZTAŁTOWANIE ZĘBÓW',
    defaultTitle: 'Konturowanie i Modelowanie Zębów w Stambule, Turcja',
    defaultSubtitle:
      'Minimalnie inwazyjne konturowanie szkliwa korygujące drobne nierówności i asymetrie bez znieczulenia w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny konturowania zębów',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety konturowania zębów',
  },
  pt: {
    defaultBadge: 'CONTORNO E REMODELAÇÃO DENTÁRIA',
    defaultTitle: 'Contorno e Remodelação Dentária em Istambul, Turquia',
    defaultSubtitle:
      'Remodelação minimamente invasiva do esmalte para corrigir pequenas irregularidades e assimetrias sem anestesia em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de contorno dentário',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de contorno dentário',
  },
  es: {
    defaultBadge: 'CONTORNEADO Y REMODELADO DENTAL',
    defaultTitle: 'Contorneado y Modelado Dental en Estambul, Turquía',
    defaultSubtitle:
      'Contorneado de esmalte mínimamente invasivo para corregir pequeñas irregularidades y asimetrías sin anestesia en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de contorneado dental',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de contorneado dental',
  },
  ru: {
    defaultBadge: 'КОНТУРИРОВАНИЕ И РЕМАСШТАБИРОВАНИЕ ЗУБОВ',
    defaultTitle: 'Контурирование и моделирование зубов в Стамбуле, Турция',
    defaultSubtitle:
      'Минимально инвазивное контурирование эмали для устранения неровностей и асимметрии зубов без анестезии в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по контурированию зубов',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты контурирования зубов',
  },
};

const DIASTEMA_CLOSURE_HERO_I18N: Record<
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
    defaultBadge: 'DIASTEMA CLOSURE & GAP REPAIR',
    defaultTitle: 'Diastema Closure in Istanbul, Turkey (Gap Closure)',
    defaultSubtitle:
      'Non-invasive diastema closure closing spaces between front teeth using direct resin bonding or ultra-thin E-Max porcelain veneers in Istanbul.',
    primaryBtnText: 'Get Diastema Quote',
    primaryBtnAria: 'Contact us for a free diastema closure consultation',
    secondaryBtnText: 'Explore Packages',
    secondaryBtnAria: 'Scroll down to explore diastema closure packages',
  },
  tr: {
    defaultBadge: 'AYRIK DİŞ (DİASTEMA) KAPATMA',
    defaultTitle: 'İstanbul Ayrık Diş (Diastema) Kapatma Tedavisi',
    defaultSubtitle:
      'Ön dişler arasındaki boşlukları diş kesimi olmadan nano-kompozit bonding veya ultra ince E-Max yaprak porselen ile tek seansta kapatma.',
    primaryBtnText: 'Ücretsiz Teklif Al & Randevu',
    primaryBtnAria: 'Diastema kapatma için ücretsiz danışma talebinde bulunun',
    secondaryBtnText: 'Paketleri İncele',
    secondaryBtnAria: 'Diastema paketlerini incelemek için aşağı kaydırın',
  },
  de: {
    defaultBadge: 'DIASTEMA-SCHLIESSUNG (ZAHNLÜCKEN-KORREKTUR)',
    defaultTitle: 'Diastema-Schließung in Istanbul, Türkei (Zahnlücken-Korrektur)',
    defaultSubtitle:
      'Lückenschluss zwischen den Frontzähnen ohne Beschleifen durch direktes Komposit-Bonding oder hauchdünne E-Max-Veneers in Istanbul.',
    primaryBtnText: 'Angebot anfordern & Buchen',
    primaryBtnAria: 'Kontaktieren Sie uns für eine kostenlose Beratung zur Diastema-Schließung',
    secondaryBtnText: 'Pakete ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Diastema-Pakete zu entdecken',
  },
  pl: {
    defaultBadge: 'ZAMYKANIE DIASTEMY (LUK MIĘDZY ZĘBAMI)',
    defaultTitle: 'Zamykanie Diastemy w Stambule, Turcja',
    defaultSubtitle:
      'Zamykanie przerw między zębami bez szlifowania za pomocą bondingu kompozytowego lub ultra-cienkich licówek E-Max w Stambule.',
    primaryBtnText: 'Darmowa Wycena i Rezerwacja',
    primaryBtnAria: 'Skontaktuj się z nami w celu bezpłatnej wyceny zamykania diastemy',
    secondaryBtnText: 'Zobacz Pakiety',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety zamykania diastemy',
  },
  pt: {
    defaultBadge: 'FECHAMENTO DE DIASTEMA',
    defaultTitle: 'Fechamento de Diastema em Istambul, Turquia',
    defaultSubtitle:
      'Fechamento de espaços entre os dentes sem desgaste dental com resina composta ou facetas ultrafinas E-Max em Istambul.',
    primaryBtnText: 'Solicitar Orçamento Grátis',
    primaryBtnAria: 'Entre em contato para avaliação gratuita de fechamento de diastema',
    secondaryBtnText: 'Ver Pacotes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de fechamento de diastema',
  },
  es: {
    defaultBadge: 'CIERRE DE DIASTEMA',
    defaultTitle: 'Cierre de Diastema en Estambul, Turquía',
    defaultSubtitle:
      'Cierre de espacios interdentales sin tallado mediante composite o carillas ultrafinas E-Max en Estambul.',
    primaryBtnText: 'Pedir Presupuesto Gratis',
    primaryBtnAria: 'Póngase en contacto para una valoración gratuita de cierre de diastema',
    secondaryBtnText: 'Ver Paquetes',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de cierre de diastema',
  },
  ru: {
    defaultBadge: 'ЗАКРЫТИЕ ДИАСТЕМЫ (ЩЕЛИ МЕЖДУ ЗУБАМИ)',
    defaultTitle: 'Закрытие диастемы в Стамбуле, Турция',
    defaultSubtitle:
      'Закрытие межзубных промежутков без обточки с помощью композитного бондинга или ультратонких виниров E-Max в Стамбуле.',
    primaryBtnText: 'Бесплатный расчет стоимости',
    primaryBtnAria: 'Свяжитесь с нами для бесплатной консультации по закрытию диастемы',
    secondaryBtnText: 'Посмотреть Пакеты',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты закрытия диастемы',
  },
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = await getTreatmentContent(locale, slug);

  const isGeneral =
    slug === 'general-dentistry' ||
    slug === 'root-canal-treatment' ||
    slug === 'teeth-cleaning-scaling' ||
    slug === 'dental-fillings' ||
    slug === 'tooth-extractions' ||
    slug === 'periodontology' ||
    slug === 'general-dentistry-istanbul';

  const isSmileMakeover =
    slug === 'smile-makeover' ||
    slug === 'digital-smile-design' ||
    slug === 'gulus-tasarimi';

  const isHollywoodSmile =
    slug === 'hollywood-smile' ||
    slug === 'hollywood-smile-istanbul' ||
    slug === 'hollywood-gulusu';

  const isGummySmile =
    slug === 'gummy-smile' ||
    slug === 'gummy-smile-treatment' ||
    slug === 'gum-contouring' ||
    slug === 'pembe-estetik' ||
    slug === 'gingivoplasti';

  const isTeethWhitening =
    slug === 'teeth-whitening' ||
    slug === 'laser-teeth-whitening' ||
    slug === 'whitening' ||
    slug === 'dis-beyazlatma' ||
    slug === 'bleaching';

  const isToothContouring =
    slug === 'tooth-contouring' ||
    slug === 'tooth-contouring-shaping' ||
    slug === 'tooth-shaping' ||
    slug === 'enameloplasty' ||
    slug === 'dis-sekillendirme';

  const isDiastemaClosure =
    slug === 'diastema-closure' ||
    slug === 'diestema-closure' ||
    slug === 'diastema' ||
    slug === 'gap-closure' ||
    slug === 'ayrik-dis-tedavisi';

  const isCosmeticCategory =
    !isSmileMakeover &&
    !isHollywoodSmile &&
    !isGummySmile &&
    !isTeethWhitening &&
    !isToothContouring &&
    !isDiastemaClosure &&
    (slug === 'cosmetic-dentistry' ||
    slug === 'cosmetic-dentistry-istanbul' ||
    slug === 'estetik-dis-hekimligi');

  const isCosmetic =
    isCosmeticCategory ||
    isSmileMakeover ||
    isHollywoodSmile ||
    isGummySmile ||
    isTeethWhitening ||
    isToothContouring ||
    isDiastemaClosure;

  const isCompleteDentures =
    slug === 'complete-dentures' ||
    slug === 'complete-denture' ||
    slug === 'tam-protez' ||
    slug === 'total-protez' ||
    slug === 'full-dentures' ||
    slug === 'full-denture';

  const isPartialDentures =
    slug === 'partial-dentures' ||
    slug === 'partial-denture' ||
    slug === 'bolumlu-protez' ||
    slug === 'parsiyel-protez' ||
    slug === 'kancali-protez' ||
    slug === 'valplast' ||
    slug === 'precision-attachment';

  const isOverdentures =
    slug === 'overdentures' ||
    slug === 'overdenture' ||
    slug === 'snap-on-dentures' ||
    slug === 'snap-on-denture' ||
    slug === 'implant-supported-dentures' ||
    slug === 'implant-supported-dentures-istanbul-turkey' ||
    slug === 'implant-supported-overdentures' ||
    slug === 'implant-destekli-protezler-istanbul' ||
    slug === 'citcitli-protez' ||
    slug === 'implant-ustu-protez';

  const isDentures =
    !isCompleteDentures &&
    !isPartialDentures &&
    !isOverdentures &&
    (slug === 'dentures' ||
    slug === 'dentures-istanbul' ||
    slug === 'protez-dis');

  const isMarylandBridges =
    slug === 'maryland-bridges' ||
    slug === 'maryland-bridge' ||
    slug === 'maryland-kopru' ||
    slug === 'resin-bonded-bridge' ||
    slug === 'resin-bonded-bridges';

  const isCantileverBridges =
    slug === 'cantilever-bridges' ||
    slug === 'cantilever-bridge' ||
    slug === 'cantilever-kopru' ||
    slug === 'balkon-kopru';

  const isTraditionalBridges =
    !isMarylandBridges &&
    !isCantileverBridges &&
    (slug === 'traditional-bridges' ||
    slug === 'traditional-bridge' ||
    slug === 'geleneksel-kopru' ||
    slug === 'fixed-bridges' ||
    slug === 'fixed-bridge');

  const isBridges =
    !isTraditionalBridges &&
    !isMarylandBridges &&
    !isCantileverBridges &&
    (slug === 'dental-bridge' ||
    slug === 'dental-bridges' ||
    slug === 'bridges' ||
    slug === 'dental-bridge-istanbul');

  const isCompositeVeneers =
    slug === 'composite-veneers' ||
    slug === 'composite-veneer' ||
    slug === 'composite-bonding' ||
    slug === 'kompozit-lamina' ||
    slug === 'kompozit-bonding';

  const isLumineers =
    slug === 'lumineers' ||
    slug === 'lumineer' ||
    slug === 'no-prep-veneers' ||
    slug === 'no-prep-veneer';

  const isEmpressVeneers =
    slug === 'empress-veneers' ||
    slug === 'empress-veneer' ||
    slug === 'ips-empress' ||
    slug === 'empress-lamina';

  const isZirconiumVeneers =
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (slug === 'zirconium-veneers' ||
    slug === 'zirconia-veneers' ||
    slug === 'zirconium-veneer' ||
    slug === 'zirconia-veneer' ||
    slug === 'zirkonyum-lamina');

  const isEmaxVeneers =
    !isZirconiumVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (slug === 'emax-veneers' ||
    slug === 'e-max-veneers' ||
    slug === 'emax-veneer' ||
    slug === 'e-max-veneer' ||
    slug === 'emax-lamina');

  const isPorcelainVeneers =
    !isZirconiumVeneers &&
    !isEmaxVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (slug === 'porcelain-veneers' ||
    slug === 'porcelain-veneer' ||
    slug === 'porselen-lamina' ||
    slug === 'porcelain-laminate-veneers');

  const isVeneers =
    !isPorcelainVeneers &&
    !isEmaxVeneers &&
    !isZirconiumVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (slug === 'dental-veneers' ||
    slug === 'dental-veneers-istanbul');

  const isCrowns =
    slug === 'dental-crowns' ||
    slug === 'zirconium-crowns' ||
    slug === 'crowns' ||
    slug === 'dental-crowns-istanbul' ||
    slug === 'emax-crowns' ||
    slug === 'pfm-crowns';

  const fallbackMeta = isGeneral
    ? GENERAL_HERO_I18N[locale] || GENERAL_HERO_I18N.en
    : isSmileMakeover
    ? SMILE_MAKEOVER_HERO_I18N[locale] || SMILE_MAKEOVER_HERO_I18N.en
    : isHollywoodSmile
    ? HOLLYWOOD_SMILE_HERO_I18N[locale] || HOLLYWOOD_SMILE_HERO_I18N.en
    : isGummySmile
    ? GUMMY_SMILE_HERO_I18N[locale] || GUMMY_SMILE_HERO_I18N.en
    : isTeethWhitening
    ? TEETH_WHITENING_HERO_I18N[locale] || TEETH_WHITENING_HERO_I18N.en
    : isToothContouring
    ? TOOTH_CONTOURING_HERO_I18N[locale] || TOOTH_CONTOURING_HERO_I18N.en
    : isDiastemaClosure
    ? DIASTEMA_CLOSURE_HERO_I18N[locale] || DIASTEMA_CLOSURE_HERO_I18N.en
    : isCosmetic
    ? COSMETIC_HERO_I18N[locale] || COSMETIC_HERO_I18N.en
    : isCompleteDentures
    ? COMPLETE_DENTURES_HERO_I18N[locale] || COMPLETE_DENTURES_HERO_I18N.en
    : isPartialDentures
    ? PARTIAL_DENTURES_HERO_I18N[locale] || PARTIAL_DENTURES_HERO_I18N.en
    : isOverdentures
    ? OVERDENTURES_HERO_I18N[locale] || OVERDENTURES_HERO_I18N.en
    : isDentures
    ? DENTURES_HERO_I18N[locale] || DENTURES_HERO_I18N.en
    : isMarylandBridges
    ? MARYLAND_BRIDGES_HERO_I18N[locale] || MARYLAND_BRIDGES_HERO_I18N.en
    : isCantileverBridges
    ? CANTILEVER_BRIDGES_HERO_I18N[locale] || CANTILEVER_BRIDGES_HERO_I18N.en
    : isTraditionalBridges
    ? TRADITIONAL_BRIDGES_HERO_I18N[locale] || TRADITIONAL_BRIDGES_HERO_I18N.en
    : isBridges
    ? BRIDGE_HERO_I18N[locale] || BRIDGE_HERO_I18N.en
    : isCompositeVeneers
    ? COMPOSITE_VENEERS_HERO_I18N[locale] || COMPOSITE_VENEERS_HERO_I18N.en
    : isLumineers
    ? LUMINEERS_HERO_I18N[locale] || LUMINEERS_HERO_I18N.en
    : isEmpressVeneers
    ? EMPRESS_VENEERS_HERO_I18N[locale] || EMPRESS_VENEERS_HERO_I18N.en
    : isZirconiumVeneers
    ? ZIRCONIUM_VENEERS_HERO_I18N[locale] || ZIRCONIUM_VENEERS_HERO_I18N.en
    : isEmaxVeneers
    ? EMAX_VENEERS_HERO_I18N[locale] || EMAX_VENEERS_HERO_I18N.en
    : isPorcelainVeneers
    ? PORCELAIN_VENEERS_HERO_I18N[locale] || PORCELAIN_VENEERS_HERO_I18N.en
    : isCrowns
    ? CROWNS_HERO_I18N[locale] || CROWNS_HERO_I18N.en
    : isVeneers
    ? VENEERS_HERO_I18N[locale] || VENEERS_HERO_I18N.en
    : HERO_I18N[locale] || HERO_I18N.en;

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

  const isDentalImplants = slug === 'dental-implants';
  const isAllOnSix = slug === 'all-on-6-implants';

  const isCompleteDentures =
    slug === 'complete-dentures' ||
    slug === 'complete-denture' ||
    slug === 'tam-protez' ||
    slug === 'total-protez' ||
    slug === 'full-dentures' ||
    slug === 'full-denture';

  const isPartialDentures =
    slug === 'partial-dentures' ||
    slug === 'partial-denture' ||
    slug === 'bolumlu-protez' ||
    slug === 'parsiyel-protez' ||
    slug === 'kancali-protez' ||
    slug === 'valplast' ||
    slug === 'precision-attachment';

  const isOverdentures =
    slug === 'overdentures' ||
    slug === 'overdenture' ||
    slug === 'snap-on-dentures' ||
    slug === 'snap-on-denture' ||
    slug === 'implant-supported-dentures' ||
    slug === 'implant-supported-dentures-istanbul-turkey' ||
    slug === 'implant-supported-overdentures' ||
    slug === 'implant-destekli-protezler-istanbul' ||
    slug === 'citcitli-protez' ||
    slug === 'implant-ustu-protez';

  const isDentures =
    !isCompleteDentures &&
    !isPartialDentures &&
    !isOverdentures &&
    (slug === 'dentures' ||
    slug === 'dentures-istanbul' ||
    slug === 'protez-dis');

  const isMarylandBridges =
    slug === 'maryland-bridges' ||
    slug === 'maryland-bridge' ||
    slug === 'maryland-kopru' ||
    slug === 'resin-bonded-bridge' ||
    slug === 'resin-bonded-bridges';

  const isCantileverBridges =
    slug === 'cantilever-bridges' ||
    slug === 'cantilever-bridge' ||
    slug === 'cantilever-kopru' ||
    slug === 'balkon-kopru';

  const isTraditionalBridges =
    !isMarylandBridges &&
    !isCantileverBridges &&
    (slug === 'traditional-bridges' ||
    slug === 'traditional-bridge' ||
    slug === 'geleneksel-kopru' ||
    slug === 'fixed-bridges' ||
    slug === 'fixed-bridge');

  const isCompositeVeneers =
    slug === 'composite-veneers' ||
    slug === 'composite-veneer' ||
    slug === 'composite-bonding' ||
    slug === 'kompozit-lamina' ||
    slug === 'kompozit-bonding';

  const isLumineers =
    slug === 'lumineers' ||
    slug === 'lumineer' ||
    slug === 'no-prep-veneers' ||
    slug === 'no-prep-veneer';

  const isEmpressVeneers =
    slug === 'empress-veneers' ||
    slug === 'empress-veneer' ||
    slug === 'ips-empress' ||
    slug === 'empress-lamina';

  const isZirconiumVeneers =
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (slug === 'zirconium-veneers' ||
    slug === 'zirconia-veneers' ||
    slug === 'zirconium-veneer' ||
    slug === 'zirconia-veneer' ||
    slug === 'zirkonyum-lamina');

  const isEmaxVeneers =
    !isZirconiumVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (slug === 'emax-veneers' ||
    slug === 'e-max-veneers' ||
    slug === 'emax-veneer' ||
    slug === 'e-max-veneer' ||
    slug === 'emax-lamina');

  const isPorcelainVeneers =
    !isZirconiumVeneers &&
    !isEmaxVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (slug === 'porcelain-veneers' ||
    slug === 'porcelain-veneer' ||
    slug === 'porselen-lamina' ||
    slug === 'porcelain-laminate-veneers');

  const isDentalVeneers =
    !isPorcelainVeneers &&
    !isEmaxVeneers &&
    !isZirconiumVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (slug === 'dental-veneers' ||
    slug === 'dental-veneers-istanbul');

  const isZirconiumCrowns =
    slug === 'zirconium-crowns' ||
    slug === 'zirconia-crowns' ||
    slug === 'zirkonyum-kaplama' ||
    slug === 'zirconium-crown';

  const isPfmCrowns =
    slug === 'pfm-crowns' ||
    slug === 'metal-porcelain-crowns' ||
    slug === 'metal-porcelain-crown' ||
    slug === 'pfm-crown';

  const isEmaxCrowns =
    slug === 'emax-crowns' ||
    slug === 'e-max-crowns' ||
    slug === 'emax-crown' ||
    slug === 'e-max-crown' ||
    slug === 'emax-kaplama';

  const isFullCeramicCrowns =
    slug === 'full-ceramic' ||
    slug === 'full-ceramic-crowns' ||
    slug === 'full-ceramic-crown' ||
    slug === 'tam-seramik-kron' ||
    slug === 'tam-seramik-kaplama';

  const isDentalCrowns =
    !isZirconiumCrowns &&
    !isPfmCrowns &&
    !isEmaxCrowns &&
    !isFullCeramicCrowns &&
    (slug === 'dental-crowns' ||
    slug === 'crowns' ||
    slug === 'dental-crowns-istanbul');

  const isDentalBridges =
    !isTraditionalBridges &&
    !isMarylandBridges &&
    !isCantileverBridges &&
    (slug === 'dental-bridge' ||
    slug === 'dental-bridges' ||
    slug === 'bridges' ||
    slug === 'dental-bridge-istanbul');

  const isSmileMakeover =
    slug === 'smile-makeover' ||
    slug === 'digital-smile-design' ||
    slug === 'gulus-tasarimi';

  const isHollywoodSmile =
    slug === 'hollywood-smile' ||
    slug === 'hollywood-smile-istanbul' ||
    slug === 'hollywood-gulusu';

  const isGummySmile =
    slug === 'gummy-smile' ||
    slug === 'gummy-smile-treatment' ||
    slug === 'gum-contouring' ||
    slug === 'pembe-estetik' ||
    slug === 'gingivoplasti';

  const isTeethWhitening =
    slug === 'teeth-whitening' ||
    slug === 'laser-teeth-whitening' ||
    slug === 'whitening' ||
    slug === 'dis-beyazlatma' ||
    slug === 'bleaching';

  const isToothContouring =
    slug === 'tooth-contouring' ||
    slug === 'tooth-contouring-shaping' ||
    slug === 'tooth-shaping' ||
    slug === 'enameloplasty' ||
    slug === 'dis-sekillendirme';

  const isDiastemaClosure =
    slug === 'diastema-closure' ||
    slug === 'diestema-closure' ||
    slug === 'diastema' ||
    slug === 'gap-closure' ||
    slug === 'ayrik-dis-tedavisi';

  const isCosmeticCategory =
    !isSmileMakeover &&
    !isHollywoodSmile &&
    !isGummySmile &&
    !isTeethWhitening &&
    !isToothContouring &&
    !isDiastemaClosure &&
    (slug === 'cosmetic-dentistry' ||
    slug === 'cosmetic-dentistry-istanbul' ||
    slug === 'estetik-dis-hekimligi');

  const isCosmetic =
    isCosmeticCategory ||
    isSmileMakeover ||
    isHollywoodSmile ||
    isGummySmile ||
    isTeethWhitening ||
    isToothContouring ||
    isDiastemaClosure;

  const isGeneralMain = slug === 'general-dentistry';
  const isGeneralSub = [
    'dental-cleaning',
    'tooth-fillings',
    'root-canal',
    'tooth-extraction',
    'inlay-onlay',
    'dental-sealants',
    'fluoride-treatment',
    'bruxism-treatment',
    'root-canal-treatment',
    'teeth-cleaning-scaling',
    'dental-fillings',
    'tooth-extractions',
    'periodontology',
  ].includes(slug);
  const isGeneral = isGeneralMain || isGeneralSub;
  const isDentalCleaning = slug === 'dental-cleaning' || slug === 'teeth-cleaning-scaling';

  const heroFallback = isGeneral
    ? GENERAL_HERO_I18N[locale] || GENERAL_HERO_I18N.en
    : isSmileMakeover
    ? SMILE_MAKEOVER_HERO_I18N[locale] || SMILE_MAKEOVER_HERO_I18N.en
    : isHollywoodSmile
    ? HOLLYWOOD_SMILE_HERO_I18N[locale] || HOLLYWOOD_SMILE_HERO_I18N.en
    : isGummySmile
    ? GUMMY_SMILE_HERO_I18N[locale] || GUMMY_SMILE_HERO_I18N.en
    : isTeethWhitening
    ? TEETH_WHITENING_HERO_I18N[locale] || TEETH_WHITENING_HERO_I18N.en
    : isToothContouring
    ? TOOTH_CONTOURING_HERO_I18N[locale] || TOOTH_CONTOURING_HERO_I18N.en
    : isDiastemaClosure
    ? DIASTEMA_CLOSURE_HERO_I18N[locale] || DIASTEMA_CLOSURE_HERO_I18N.en
    : isCosmetic
    ? COSMETIC_HERO_I18N[locale] || COSMETIC_HERO_I18N.en
    : isCompleteDentures
    ? COMPLETE_DENTURES_HERO_I18N[locale] || COMPLETE_DENTURES_HERO_I18N.en
    : isPartialDentures
    ? PARTIAL_DENTURES_HERO_I18N[locale] || PARTIAL_DENTURES_HERO_I18N.en
    : isOverdentures
    ? OVERDENTURES_HERO_I18N[locale] || OVERDENTURES_HERO_I18N.en
    : isDentures
    ? DENTURES_HERO_I18N[locale] || DENTURES_HERO_I18N.en
    : isMarylandBridges
    ? MARYLAND_BRIDGES_HERO_I18N[locale] || MARYLAND_BRIDGES_HERO_I18N.en
    : isCantileverBridges
    ? CANTILEVER_BRIDGES_HERO_I18N[locale] || CANTILEVER_BRIDGES_HERO_I18N.en
    : isTraditionalBridges
    ? TRADITIONAL_BRIDGES_HERO_I18N[locale] || TRADITIONAL_BRIDGES_HERO_I18N.en
    : isDentalBridges
    ? BRIDGE_HERO_I18N[locale] || BRIDGE_HERO_I18N.en
    : isCompositeVeneers
    ? COMPOSITE_VENEERS_HERO_I18N[locale] || COMPOSITE_VENEERS_HERO_I18N.en
    : isLumineers
    ? LUMINEERS_HERO_I18N[locale] || LUMINEERS_HERO_I18N.en
    : isEmpressVeneers
    ? EMPRESS_VENEERS_HERO_I18N[locale] || EMPRESS_VENEERS_HERO_I18N.en
    : isZirconiumVeneers
    ? ZIRCONIUM_VENEERS_HERO_I18N[locale] || ZIRCONIUM_VENEERS_HERO_I18N.en
    : isEmaxVeneers
    ? EMAX_VENEERS_HERO_I18N[locale] || EMAX_VENEERS_HERO_I18N.en
    : isPorcelainVeneers
    ? PORCELAIN_VENEERS_HERO_I18N[locale] || PORCELAIN_VENEERS_HERO_I18N.en
    : isPfmCrowns
    ? PFM_CROWNS_HERO_I18N[locale] || PFM_CROWNS_HERO_I18N.en
    : isEmaxCrowns
    ? EMAX_CROWNS_HERO_I18N[locale] || EMAX_CROWNS_HERO_I18N.en
    : isFullCeramicCrowns
    ? FULL_CERAMIC_CROWNS_HERO_I18N[locale] || FULL_CERAMIC_CROWNS_HERO_I18N.en
    : isZirconiumCrowns
    ? ZIRCONIUM_CROWNS_HERO_I18N[locale] || ZIRCONIUM_CROWNS_HERO_I18N.en
    : isDentalCrowns
    ? CROWNS_HERO_I18N[locale] || CROWNS_HERO_I18N.en
    : isDentalVeneers
    ? VENEERS_HERO_I18N[locale] || VENEERS_HERO_I18N.en
    : HERO_I18N[locale] || HERO_I18N.en;

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
      ) : isDentalCleaning ? (
        <DentalCleaningHeroBanner />
      ) : (
        <TreatmentHeroBanner
          tag={heroBadge}
          title={heroTitle}
          subtitle={heroSubtitle}
          imageSrc={
            isSmileMakeover
              ? 'https://sohodent.com/doc/data1/diestema-closure.webp?v=1'
              : isHollywoodSmile
              ? 'https://sohodent.com/doc/data1/hoolywood-smile.webp?v=1'
              : isGummySmile
              ? 'https://sohodent.com/doc/data1/gummy-smile-treatment.webp?v=1'
              : isTeethWhitening
              ? 'https://sohodent.com/doc/data1/teeth-whitening.webp?v=1'
              : isToothContouring
              ? 'https://sohodent.com/doc/data1/tooth-contouring-shaping.webp?v=1'
              : isDiastemaClosure
              ? 'https://sohodent.com/doc/data1/diestema-closure.webp?v=1'
              : isCompleteDentures
              ? 'https://sohodent.com/doc/data1/complete-dentures.webp?v=1'
              : isPartialDentures
              ? 'https://sohodent.com/doc/data1/partial-dentures.webp?v=1'
              : isOverdentures
              ? 'https://sohodent.com/doc/data1/overdenture.webp?v=1'
              : isMarylandBridges
              ? 'https://sohodent.com/doc/data1/maryland-bridge.webp.avif?v=1'
              : isCantileverBridges
              ? 'https://sohodent.com/doc/data1/cantilever-bridge.webp?v=1'
              : isTraditionalBridges
              ? 'https://sohodent.com/doc/data1/traditional-bridge.webp?v=1'
              : isCompositeVeneers
              ? 'https://sohodent.com/doc/data1/composite-veneer.webp.avif?v=1'
              : isLumineers
              ? 'https://sohodent.com/doc/data1/lumineer.webp?v=1'
              : isEmpressVeneers
              ? 'https://sohodent.com/doc/data1/empress-veneer.webp?v=1'
              : isZirconiumVeneers
              ? 'https://sohodent.com/doc/data1/zirconium-veneers.webp?v=1'
              : isEmaxVeneers
              ? 'https://sohodent.com/doc/data1/e-max-veneer.webp?v=1'
              : isPorcelainVeneers
              ? 'https://sohodent.com/doc/data1/porcelain-veneers.webp?v=1'
              : isEmaxCrowns
              ? 'https://sohodent.com/doc/data1/e-max-crown.webp?v=1'
              : isFullCeramicCrowns
              ? 'https://sohodent.com/doc/data1/full-ceramic-crown.webp?v=1'
              : isPfmCrowns
              ? 'https://sohodent.com/doc/data1/metal-porcelain-crown.webp?v=1'
              : isZirconiumCrowns
              ? 'https://sohodent.com/doc/data1/zirconium-crowns.webp?v=1'
              : isDentalImplants
              ? 'https://sohodent.com/doc/data1/zirconium-implant.webp?v=1'
              : undefined
          }
          imageAlt={
            isSmileMakeover
              ? 'Smile Makeover in Istanbul, Turkey'
              : isHollywoodSmile
              ? 'Hollywood Smile in Istanbul, Turkey'
              : isGummySmile
              ? 'Gummy Smile Treatment in Istanbul, Turkey'
              : isTeethWhitening
              ? 'Teeth Whitening in Istanbul, Turkey'
              : isToothContouring
              ? 'Tooth Contouring & Shaping in Istanbul, Turkey'
              : isDiastemaClosure
              ? 'Diastema Closure in Istanbul, Turkey'
              : isCompleteDentures
              ? 'Complete Dentures in Istanbul, Turkey'
              : isPartialDentures
              ? 'Partial Dentures in Istanbul, Turkey'
              : isOverdentures
              ? 'Implant Supported Dentures (Overdentures) in Istanbul, Turkey'
              : isMarylandBridges
              ? 'Maryland Dental Bridges in Istanbul, Turkey'
              : isCantileverBridges
              ? 'Cantilever Dental Bridges in Istanbul, Turkey'
              : isTraditionalBridges
              ? 'Traditional Dental Bridges in Istanbul, Turkey'
              : isCompositeVeneers
              ? 'Composite Veneers'
              : isLumineers
              ? 'Lumineers Dental Veneers in Istanbul, Turkey'
              : isEmpressVeneers
              ? 'Empress Veneers in Istanbul, Turkey'
              : isZirconiumVeneers
              ? 'Zirconium Veneers'
              : isEmaxVeneers
              ? 'E-max Veneers'
              : isPorcelainVeneers
              ? 'Porcelain Laminate Veneers in Istanbul, Turkey'
              : isEmaxCrowns
              ? 'E-Max Crowns in Istanbul, Turkey'
              : isFullCeramicCrowns
              ? 'Full Ceramic Crowns in Istanbul, Turkey'
              : isPfmCrowns
              ? 'Metal Porcelain Crowns (PFM) in Istanbul, Turkey'
              : isZirconiumCrowns
              ? 'Zirconium Crowns in Istanbul, Turkey'
              : isDentalImplants
              ? 'Zirconium Implants'
              : undefined
          }
          primaryBtnText={primaryBtnText}
          primaryBtnHref="/contact"
          primaryBtnAriaLabel={heroFallback.primaryBtnAria}
          secondaryBtnText={secondaryBtnText}
          secondaryBtnHref="#main-content"
          secondaryBtnAriaLabel={heroFallback.secondaryBtnAria}
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
        ) : isGeneralSub ? (
          <div style={{ minHeight: '120px' }} />
        ) : isDentalImplants ? (
          <DentalImplantsDetailView />
        ) : isCompleteDentures ? (
          <CompleteDenturesDetailView />
        ) : isPartialDentures ? (
          <PartialDenturesDetailView />
        ) : isOverdentures ? (
          <ImplantSupportedDenturesDetailView />
        ) : isMarylandBridges ? (
          <MarylandBridgesDetailView />
        ) : isCantileverBridges ? (
          <CantileverBridgesDetailView />
        ) : isTraditionalBridges ? (
          <TraditionalBridgesDetailView />
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
        ) : isPfmCrowns ? (
          <PfmCrownsDetailView />
        ) : isEmaxCrowns ? (
          <EmaxCrownsDetailView />
        ) : isFullCeramicCrowns ? (
          <FullCeramicCrownsDetailView />
        ) : isZirconiumCrowns ? (
          <ZirconiumCrownsDetailView />
        ) : isDentalCrowns ? (
          <DentalCrownsDetailView />
        ) : isDentalBridges ? (
          <DentalBridgeDetailView />
        ) : isDentures ? (
          <DenturesDetailView />
        ) : isSmileMakeover ? (
          <SmileMakeoverDetailView />
        ) : isCosmetic ? (
          <CosmeticDentistryDetailView />
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
