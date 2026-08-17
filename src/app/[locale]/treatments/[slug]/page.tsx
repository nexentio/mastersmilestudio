import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHeroBanner from '@/components/treatment-sections/TreatmentHeroBanner';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import DentalImplantsDetailView from '@/components/DentalImplantsDetailView';
import DentalVeneersDetailView from '@/components/DentalVeneersDetailView';
import DentalCrownsDetailView from '@/components/DentalCrownsDetailView';
import DentalBridgeDetailView from '@/components/DentalBridgeDetailView';
import DenturesDetailView from '@/components/DenturesDetailView';
import CosmeticDentistryDetailView from '@/components/CosmeticDentistryDetailView';
import GeneralDentistryDetailView from '@/components/GeneralDentistryDetailView';
import AllOnSixImplantDetailView from '@/components/AllOnSixImplantDetailView';
import DentalCleaningHeroBanner from '@/components/treatment-sections/DentalCleaningHeroBanner';
import GeneralDentistryHeroBanner from '@/components/treatment-sections/GeneralDentistryHeroBanner';
import GeneralDentistryIntroSection from '@/components/treatment-sections/GeneralDentistryIntroSection';
import GeneralDentistryAccordionSection from '@/components/treatment-sections/GeneralDentistryAccordionSection';
import GeneralDentistryJourneySection from '@/components/treatment-sections/GeneralDentistryJourneySection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
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

  const isCosmetic =
    slug === 'cosmetic-dentistry' ||
    slug === 'smile-makeover' ||
    slug === 'hollywood-smile' ||
    slug === 'teeth-whitening' ||
    slug === 'diastema-closure' ||
    slug === 'gum-contouring' ||
    slug === 'cosmetic-dentistry-istanbul';

  const isDentures =
    slug === 'dentures' ||
    slug === 'complete-dentures' ||
    slug === 'partial-dentures' ||
    slug === 'overdentures' ||
    slug === 'snap-on-dentures' ||
    slug === 'dentures-istanbul';

  const isBridges =
    slug === 'dental-bridge' ||
    slug === 'dental-bridges' ||
    slug === 'bridges' ||
    slug === 'dental-bridge-istanbul';

  const isVeneers =
    slug === 'dental-veneers' ||
    slug === 'porcelain-veneers' ||
    slug === 'dental-veneers-istanbul';

  const isCrowns =
    slug === 'dental-crowns' ||
    slug === 'zirconium-crowns' ||
    slug === 'crowns' ||
    slug === 'dental-crowns-istanbul' ||
    slug === 'emax-crowns' ||
    slug === 'pfm-crowns';

  const fallbackMeta = isGeneral
    ? GENERAL_HERO_I18N[locale] || GENERAL_HERO_I18N.en
    : isCosmetic
    ? COSMETIC_HERO_I18N[locale] || COSMETIC_HERO_I18N.en
    : isDentures
    ? DENTURES_HERO_I18N[locale] || DENTURES_HERO_I18N.en
    : isBridges
    ? BRIDGE_HERO_I18N[locale] || BRIDGE_HERO_I18N.en
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
  const isDentalVeneers =
    slug === 'dental-veneers' ||
    slug === 'porcelain-veneers' ||
    slug === 'dental-veneers-istanbul';

  const isDentalCrowns =
    slug === 'dental-crowns' ||
    slug === 'zirconium-crowns' ||
    slug === 'crowns' ||
    slug === 'dental-crowns-istanbul' ||
    slug === 'emax-crowns' ||
    slug === 'pfm-crowns';

  const isDentalBridges =
    slug === 'dental-bridge' ||
    slug === 'dental-bridges' ||
    slug === 'bridges' ||
    slug === 'dental-bridge-istanbul';

  const isDentures =
    slug === 'dentures' ||
    slug === 'complete-dentures' ||
    slug === 'partial-dentures' ||
    slug === 'overdentures' ||
    slug === 'snap-on-dentures' ||
    slug === 'dentures-istanbul';

  const isCosmetic =
    slug === 'cosmetic-dentistry' ||
    slug === 'smile-makeover' ||
    slug === 'hollywood-smile' ||
    slug === 'teeth-whitening' ||
    slug === 'diastema-closure' ||
    slug === 'gum-contouring' ||
    slug === 'cosmetic-dentistry-istanbul';

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
    : isCosmetic
    ? COSMETIC_HERO_I18N[locale] || COSMETIC_HERO_I18N.en
    : isDentures
    ? DENTURES_HERO_I18N[locale] || DENTURES_HERO_I18N.en
    : isDentalBridges
    ? BRIDGE_HERO_I18N[locale] || BRIDGE_HERO_I18N.en
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
      ) : isDentalCleaning ? (
        <DentalCleaningHeroBanner />
      ) : (
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
      )}

      {/* Main Content Area Landmark */}
      <main id="main-content" className="treatment-main-content">
        {isGeneralMain ? (
          <>
            <GeneralDentistryIntroSection />
            <GeneralDentistryAccordionSection />
            <GeneralDentistryJourneySection />
            <TreatmentServicesIncludedSection />
            <TreatmentPatientReelsSection />
            <TreatmentReviewsSection />
          </>
        ) : isGeneralSub ? (
          <div style={{ minHeight: '120px' }} />
        ) : isDentalImplants ? (
          <DentalImplantsDetailView />
        ) : isDentalVeneers ? (
          <DentalVeneersDetailView />
        ) : isDentalCrowns ? (
          <DentalCrownsDetailView />
        ) : isDentalBridges ? (
          <DentalBridgeDetailView />
        ) : isDentures ? (
          <DenturesDetailView />
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
