'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';

interface LocalizedString {
  tr: string;
  en: string;
  de?: string;
  ru?: string;
  es?: string;
  pt?: string;
  pl?: string;
}

interface SubItem {
  title: LocalizedString;
  href: string;
}

interface TreatmentCategory {
  id: string;
  title: LocalizedString;
  href: string;
  subitems: SubItem[];
}

interface DropdownItem {
  title: LocalizedString;
  href: string;
}

const TREATMENTS_NAV_TREE: TreatmentCategory[] = [
  {
    id: 'implants',
    title: { tr: 'Dental İmplant', en: 'Dental Implants', de: 'Zahnimplantate', ru: 'Имплантация зубов', es: 'Implantes Dentales', pt: 'Implantes Dentários', pl: 'Implanty Zębowe' },
    href: '/treatments/dental-implants',
    subitems: [
      { title: { tr: 'Tüm Ağız İmplant (Full Mouth)', en: 'Full Mouth Implants', de: 'Vollmund-Implantate', ru: 'Имплантация всей челюсти', es: 'Implantes de Boca Completa', pt: 'Implantes de Boca Completa', pl: 'Implanty Całej Szczęki' }, href: '/treatments/dental-implants/full-mouth-implants' },
      { title: { tr: 'All-on-4 İmplant Tedavisi', en: 'All-on-4 Implants', de: 'All-on-4 Implantate', ru: 'Имплантация All-on-4', es: 'Implantes All-on-4', pt: 'Implantes All-on-4', pl: 'Implanty All-on-4' }, href: '/treatments/dental-implants/all-on-4-implants' },
      { title: { tr: 'All-on-6 İmplant Tedavisi', en: 'All-on-6 Implants', de: 'All-on-6 Implantate', ru: 'Имплантация All-on-6', es: 'Implantes All-on-6', pt: 'Implantes All-on-6', pl: 'Implanty All-on-6' }, href: '/treatments/dental-implants/all-on-6-implants' },
      { title: { tr: 'Aynı Gün İmplant (Immediate)', en: 'Immediate Implant Treatment', de: 'Sofortimplantate', ru: 'Одномоментная имплантация', es: 'Implantes Inmediatos', pt: 'Implantes Imediatos', pl: 'Implanty Natychmiastowe' }, href: '/treatments/dental-implants/immediate-implant-treatment' },
      { title: { tr: 'Zigoma & Pterigoid İmplant', en: 'Zygomatic and Pterygoid Implants', de: 'Jochbein- & Pterygoidimplantate', ru: 'Зигоматические импланты', es: 'Implantes Cigomáticos', pt: 'Implantes Zigomáticos', pl: 'Implanty Jarzmowe' }, href: '/treatments/dental-implants/zygomatic-implants' },
      { title: { tr: 'Zirkonyum İmplant', en: 'Zirconium Implants', de: 'Zirkonimplantate', ru: 'Циркониевые импланты', es: 'Implantes de Circonio', pt: 'Implantes de Zircónia', pl: 'Implanty Cyrkonowe' }, href: '/treatments/dental-implants/zirconium-implants' },
      { title: { tr: 'İmplant Destekli Protez', en: 'Implant Supported Dentures', de: 'Implantatgetragene Prothesen', ru: 'Протезы на имплантах', es: 'Prótesis sobre Implantes', pt: 'Próteses sobre Implantes', pl: 'Protezy na Implantach' }, href: '/treatments/dental-implants/implant-supported-dentures' },
      { title: { tr: 'Sinüs Lift & Kemik Grefti', en: 'Sinus Lifting', de: 'Sinuslift & Knochenaufbau', ru: 'Синус-лифтинг и костная пластика', es: 'Elevación de Seno Maxilar', pt: 'Elevação de Seio Maxilar', pl: 'Podniesienie Dna Zatoki' }, href: '/treatments/dental-implants/sinus-lifting' },
    ],
  },
  {
    id: 'crowns',
    title: { tr: 'Zirkonyum & Kron Kaplama', en: 'Dental Crowns', de: 'Zahnkronen', ru: 'Зубные коронки', es: 'Coronas Dentales', pt: 'Coroas Dentárias', pl: 'Korony Zębowe' },
    href: '/treatments/dental-crowns',
    subitems: [
      { title: { tr: 'Zirkonyum Kron Kaplama', en: 'Zirconium Crowns', de: 'Zirkonkronen', ru: 'Циркониевые коронки', es: 'Coronas de Circonio', pt: 'Coroas de Zircónia', pl: 'Korony Cyrkonowe' }, href: '/treatments/dental-crowns/zirconium-crowns' },
      { title: { tr: 'Metal Porselen Kaplama (PFM)', en: 'Metal Porcelain Crowns (PFM)', de: 'Metallkeramikkronen', ru: 'Металлокерамические коронки', es: 'Coronas de Metal-Porcelana', pt: 'Coroas de Metal-Porcelana', pl: 'Korony Metalowo-Porcelanowe' }, href: '/treatments/dental-crowns/pfm-crowns' },
      { title: { tr: 'E-max Full Seramik Kaplama', en: 'E-max Crowns', de: 'E-max Vollkeramikkronen', ru: 'Коронки E-max', es: 'Coronas E-max', pt: 'Coroas E-max', pl: 'Korony E-max' }, href: '/treatments/dental-crowns/emax-crowns' },
      { title: { tr: 'Tam Seramik Kron', en: 'Full Ceramic Crowns', de: 'Vollkeramikkronen', ru: 'Цельнокерамические коронки', es: 'Coronas Completamente Cerámicas', pt: 'Coroas Cerâmicas Puras', pl: 'Korony Pełnoceramiczne' }, href: '/treatments/dental-crowns/full-ceramic' },
    ],
  },
  {
    id: 'veneers',
    title: { tr: 'Lamine Veneer (Kaplama)', en: 'Dental Veneers', de: 'Veneers', ru: 'Виниры', es: 'Carillas Dentales', pt: 'Facetas Dentárias', pl: 'Licówki Dentystyczne' },
    href: '/treatments/dental-veneers',
    subitems: [
      { title: { tr: 'Porselen Lamine Veneer', en: 'Porcelain Veneers', de: 'Porzellan-Veneers', ru: 'Фарфоровые виниры', es: 'Carillas de Porcelana', pt: 'Facetas de Porcelana', pl: 'Licówki Porcelanowe' }, href: '/treatments/dental-veneers/porcelain-veneers' },
      { title: { tr: 'E-max Lamine Veneer', en: 'E-max Veneers', de: 'E-max Veneers', ru: 'Виниры E-max', es: 'Carillas E-max', pt: 'Facetas E-max', pl: 'Licówki E-max' }, href: '/treatments/dental-veneers/emax-veneers' },
      { title: { tr: 'Zirkonyum Lamine', en: 'Zirconium Veneers', de: 'Zirkon-Veneers', ru: 'Циркониевые виниры', es: 'Carillas de Circonio', pt: 'Facetas de Zircónia', pl: 'Licówki Cyrkonowe' }, href: '/treatments/dental-veneers/zirconium-veneers' },
      { title: { tr: 'Kompozit Lamine (Bonding)', en: 'Composite Veneers', de: 'Komposit-Veneers', ru: 'Композитные виниры', es: 'Carillas de Composite', pt: 'Facetas de Compósito', pl: 'Licówki Kompozytowe' }, href: '/treatments/dental-veneers/composite-veneers' },
      { title: { tr: 'Lumineers İnce Lamine', en: 'Lumineers', de: 'Lumineers', ru: 'Люминиры', es: 'Lumineers', pt: 'Lumineers', pl: 'Lumineers' }, href: '/treatments/dental-veneers/lumineers' },
      { title: { tr: 'Empress Estetik Lamine', en: 'Empress Veneers', de: 'Empress-Veneers', ru: 'Виниры Empress', es: 'Carillas Empress', pt: 'Facetas Empress', pl: 'Licówki Empress' }, href: '/treatments/dental-veneers/empress-veneers' },
    ],
  },
  {
    id: 'bridge',
    title: { tr: 'Diş Köprüsü', en: 'Dental Bridge', de: 'Zahnbrücke', ru: 'Зубные мосты', es: 'Puentes Dentales', pt: 'Pontes Dentárias', pl: 'Mosty Protetyczne' },
    href: '/treatments/dental-bridge',
    subitems: [
      { title: { tr: 'Geleneksel Diş Köprüsü', en: 'Traditional Bridges', de: 'Traditionelle Brücken', ru: 'Традиционные мосты', es: 'Puentes Tradicionales', pt: 'Pontes Tradicionais', pl: 'Tradycyjne Mosty' }, href: '/treatments/dental-bridge/traditional-bridges' },
      { title: { tr: 'Maryland Kanatlı Köprü', en: 'Maryland Bridges', de: 'Maryland-Brücken', ru: 'Мэрилендские мосты', es: 'Puentes Maryland', pt: 'Pontes Maryland', pl: 'Mosty Maryland' }, href: '/treatments/dental-bridge/maryland-bridges' },
      { title: { tr: 'Balkon (Asma) Diş Köprüsü', en: 'Cantilever Bridges', de: 'Freiendbrücken', ru: 'Консольные мосты', es: 'Puentes Cantilever', pt: 'Pontes Cantilever', pl: 'Mosty Wspornikowe' }, href: '/treatments/dental-bridge/cantilever-bridges' },
    ],
  },
  {
    id: 'dentures',
    title: { tr: 'Protez Diş', en: 'Dentures', de: 'Zahnersatz', ru: 'Зубные протезы', es: 'Prótesis Dentales', pt: 'Próteses Dentárias', pl: 'Protezy Zębowe' },
    href: '/treatments/dentures',
    subitems: [
      { title: { tr: 'Tam (Total) Protez', en: 'Complete Dentures', de: 'Vollprothesen', ru: 'Полные съемные протезы', es: 'Prótesis Completas', pt: 'Próteses Totais', pl: 'Protezy Całkowite' }, href: '/treatments/dentures/complete-dentures' },
      { title: { tr: 'Bölümlü (Parsiyel) Protez', en: 'Partial Dentures', de: 'Teilprothesen', ru: 'Частичные съемные протезы', es: 'Prótesis Parciales', pt: 'Próteses Parciais', pl: 'Protezy Częściowe' }, href: '/treatments/dentures/partial-dentures' },
      { title: { tr: 'İmplant Üstü Çıt Çıtlı Protez', en: 'Implant Supported Dentures / Overdentures', de: 'Deckprothesen / Overdentures', ru: 'Покрывные протезы на имплантах', es: 'Sobredentaduras sobre Implantes', pt: 'Sobredentaduras sobre Implantes', pl: 'Protezy Nakładkowe Overdenture' }, href: '/treatments/dentures/overdentures' },
    ],
  },
  {
    id: 'cosmetic',
    title: { tr: 'Estetik Diş Hekimliği', en: 'Cosmetic Dentistry', de: 'Ästhetische Zahnheilkunde', ru: 'Эстетическая стоматология', es: 'Odontología Estética', pt: 'Dentistería Estética', pl: 'Stomatologia Estetyczna' },
    href: '/treatments/cosmetic-dentistry',
    subitems: [
      { title: { tr: 'Gülüş Tasarımı (Smile Makeover)', en: 'Smile Makeover', de: 'Smile Makeover', ru: 'Преображение улыбки', es: 'Diseño de Sonrisa', pt: 'Transformação do Sorriso', pl: 'Metamorfoza Uśmiechu' }, href: '/treatments/cosmetic-dentistry/smile-makeover' },
      { title: { tr: 'Hollywood Smile', en: 'Hollywood Smile', de: 'Hollywood Smile', ru: 'Голливудская улыбка', es: 'Hollywood Smile', pt: 'Hollywood Smile', pl: 'Hollywood Smile' }, href: '/treatments/cosmetic-dentistry/hollywood-smile' },
      { title: { tr: 'Diş Eti Estetiği (Gummy Smile)', en: 'Gummy Smile Treatment', de: 'Gummy Smile Behandlung', ru: 'Коррекция десневой улыбки', es: 'Tratamiento de Sonrisa Gingival', pt: 'Tratamento de Sorriso Gengival', pl: 'Leczenie Uśmiechu Dziąsłowego' }, href: '/treatments/cosmetic-dentistry/gummy-smile' },
      { title: { tr: 'Lazerle Diş Beyazlatma', en: 'Teeth Whitening', de: 'Zahnaufhellung', ru: 'Отбеливание зубов', es: 'Blanqueamiento Dental', pt: 'Branqueamento Dentário', pl: 'Wybielanie Zębów' }, href: '/treatments/cosmetic-dentistry/teeth-whitening' },
      { title: { tr: 'Diş Şekillendirme & Kontür', en: 'Tooth Contouring & Shaping', de: 'Zahnkonturierung', ru: 'Контурирование зубов', es: 'Contorneado Dental', pt: 'Contorno Dentário', pl: 'Konturowanie Zębów' }, href: '/treatments/cosmetic-dentistry/tooth-contouring' },
      { title: { tr: 'Ayrık Diş Kapatma (Diastema)', en: 'Diastema Closure', de: 'Diastema-Schluss', ru: 'Закрытие диастемы', es: 'Cierre de Diastemas', pt: 'Fecho de Diastemas', pl: 'Zamykanie Diastemy' }, href: '/treatments/cosmetic-dentistry/diastema-closure' },
    ],
  },
  {
    id: 'general',
    title: { tr: 'Genel Diş Hekimliği', en: 'General Dentistry', de: 'Allgemeine Zahnheilkunde', ru: 'Общая стоматология', es: 'Odontología General', pt: 'Medicina Dentária Geral', pl: 'Stomatologia Ogólna' },
    href: '/treatments/general-dentistry',
    subitems: [
      { title: { tr: 'Diş Taşı Temizliği & Polisaj', en: 'Dental Cleaning (Scaling & Polishing)', de: 'Professionelle Zahnreinigung', ru: 'Профессиональная чистка зубов', es: 'Limpieza Dental y Pulido', pt: 'Destartarização e Polimento', pl: 'Higienizacja i Skaling' }, href: '/treatments/general-dentistry/dental-cleaning' },
      { title: { tr: 'Estetik Kompozit Dolgu', en: 'Tooth Fillings (Amalgam/Composite)', de: 'Zahnfüllungen', ru: 'Эстетические пломбы', es: 'Empastes Dentales', pt: 'Restaurações Dentárias', pl: 'Wypełnienia Zębowe' }, href: '/treatments/general-dentistry/tooth-fillings' },
      { title: { tr: 'Kanal Tedavisi (Endodonti)', en: 'Root Canal Treatment', de: 'Wurzelkanalbehandlung', ru: 'Лечение каналов', es: 'Endodoncia', pt: 'Desvitalização Dentária', pl: 'Leczenie Kanałowe' }, href: '/treatments/general-dentistry/root-canal' },
      { title: { tr: '20\'lik ve Normal Diş Çekimi', en: 'Tooth Extraction', de: 'Zahnextraktion', ru: 'Удаление зубов', es: 'Extracción Dental', pt: 'Extração Dentária', pl: 'Ekstrakcja Zęba' }, href: '/treatments/general-dentistry/tooth-extraction' },
      { title: { tr: 'İnley & Onley Porselen Dolgu', en: 'Inlay & Onlay', de: 'Inlays & Onlays', ru: 'Вкладки Inlay & Onlay', es: 'Incrustaciones Inlay & Onlay', pt: 'Inlays & Onlays', pl: 'Wkłady i Nakłady Inlay/Onlay' }, href: '/treatments/general-dentistry/inlay-onlay' },
      { title: { tr: 'Fissür Örtücü (Sealants)', en: 'Dental Sealants', de: 'Fissurenversiegelung', ru: 'Герметизация фиссур', es: 'Selladores Dentales', pt: 'Selantes Dentários', pl: 'Lakowanie Zębów' }, href: '/treatments/general-dentistry/dental-sealants' },
      { title: { tr: 'Florür Uygulaması', en: 'Fluoride Treatment', de: 'Fluoridierung', ru: 'Фторирование зубов', es: 'Tratamiento con Flúor', pt: 'Tratamento com Flúor', pl: 'Fluoryzacja' }, href: '/treatments/general-dentistry/fluoride-treatment' },
      { title: { tr: 'Gece Plağı (Bruksizm Tedavisi)', en: 'Bruxism Treatment (Night Guard)', de: 'Aufbissschiene (Bruxismus)', ru: 'Лечение бруксизма (ночные капы)', es: 'Tratamiento de Bruxismo (Férula)', pt: 'Tratamento de Bruxismo (Goteira)', pl: 'Leczenie Bruksizmu (Szyna Nocna)' }, href: '/treatments/general-dentistry/bruxism-treatment' },
    ],
  },
];

const EXPLORE_NAV_TREE: TreatmentCategory[] = [
  {
    id: 'prices',
    title: {
      tr: 'Fiyatlar & Paketler',
      en: 'Prices',
      de: 'Preise',
      ru: 'Цены',
      es: 'Precios',
      pt: 'Preços',
      pl: 'Ceny',
    },
    href: '/prices',
    subitems: [
      {
        title: {
          tr: 'Fiyat Listesi',
          en: 'Price List',
          de: 'Preisliste',
          ru: 'Прайс-лист',
          es: 'Lista de Precios',
          pt: 'Lista de Preços',
          pl: 'Cennik',
        },
        href: '/prices',
      },
      {
        title: {
          tr: 'Paketler',
          en: 'Packages',
          de: 'Pakete',
          ru: 'Пакеты',
          es: 'Paquetes',
          pt: 'Pacotes',
          pl: 'Pakiety',
        },
        href: '/packages',
      },
    ],
  },
  {
    id: 'gallery',
    title: {
      tr: 'Galeri',
      en: 'Gallery',
      de: 'Galerie',
      ru: 'Галерея',
      es: 'Galería',
      pt: 'Galeria',
      pl: 'Galeria',
    },
    href: '/gallery',
    subitems: [],
  },
  {
    id: 'blog',
    title: {
      tr: 'Blog',
      en: 'Blog',
      de: 'Blog',
      ru: 'Блог',
      es: 'Blog',
      pt: 'Blog',
      pl: 'Blog',
    },
    href: '/blog',
    subitems: [],
  },
  {
    id: 'reviews',
    title: {
      tr: 'Hasta Yorumları',
      en: 'Reviews',
      de: 'Bewertungen',
      ru: 'Отзывы',
      es: 'Reseñas',
      pt: 'Avaliações',
      pl: 'Opinie',
    },
    href: '/reviews',
    subitems: [],
  },
  {
    id: 'before-after',
    title: {
      tr: 'Öncesi / Sonrası',
      en: 'Before/After',
      de: 'Vorher / Nachher',
      ru: 'До / После',
      es: 'Antes / Después',
      pt: 'Antes / Depois',
      pl: 'Przed / Po',
    },
    href: '/before-after',
    subitems: [],
  },
  {
    id: 'faq',
    title: {
      tr: 'Sıkça Sorulan Sorular (FAQ)',
      en: 'Frequently Asked Questions (FAQ)',
      de: 'Häufig gestellte Fragen (FAQ)',
      ru: 'Часто задаваемые вопросы (FAQ)',
      es: 'Preguntas Frecuentes (FAQ)',
      pt: 'Perguntas Frequentes (FAQ)',
      pl: 'Często Zadawane Pytania (FAQ)',
    },
    href: '/faq',
    subitems: [],
  },
];

const PHONE_CONFIG: Record<string, { display: string; raw: string }> = {
  tr: { display: '+90 534 696 31 63', raw: '+905346963163' },
  en: { display: '+90 537 305 99 47', raw: '+905373059947' },
  de: { display: '+90 537 305 99 41', raw: '+905373059941' },
  ru: { display: '+90 534 696 31 89', raw: '+905346963189' },
  pl: { display: '+90 533 197 39 07', raw: '+905331973907' },
  es: { display: '+90 537 305 99 47', raw: '+905373059947' },
  pt: { display: '+90 537 305 99 47', raw: '+905373059947' },
};

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'main' | 'treatments' | 'explore' | 'treatment-category' | 'explore-category'>('main');
  const [selectedCategory, setSelectedCategory] = useState<typeof TREATMENTS_NAV_TREE[0] | null>(null);
  const [selectedExploreCategory, setSelectedExploreCategory] = useState<typeof EXPLORE_NAV_TREE[0] | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'treatments' | 'explore' | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredExploreCategory, setHoveredExploreCategory] = useState<string | null>('prices');

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      setMobileView('main');
      setSelectedCategory(null);
      setSelectedExploreCategory(null);
    }, 250);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Hysteresis threshold to permanently prevent scroll oscillation / jitter loop
          if (currentScrollY > 75) {
            setIsScrolled(true);
          } else if (currentScrollY < 15) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t('navigation.treatments'), href: '/treatments', menuType: 'treatments' as const },
    { label: t('navigation.explore'), href: '/gallery', menuType: 'explore' as const },
    { label: t('navigation.about'), href: '/about' },
    { label: t('navigation.contact'), href: '/contact' },
  ];

  const getLocalized = (locObj: LocalizedString) => {
    return (locObj as any)[locale] || locObj.en || locObj.tr;
  };

  return (
    <>
      {/* Unified Global Navigation & Top Banner Header */}
      <header
        className="global-header-wrapper"
        style={{
          position: mobileMenuOpen ? 'fixed' : 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000000,
          width: '100%',
          backgroundColor: mobileMenuOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
          borderBottom: isScrolled || mobileMenuOpen ? '1px solid rgba(226, 232, 240, 0.85)' : '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: isScrolled && !mobileMenuOpen ? '0 4px 16px -2px rgba(0, 0, 0, 0.07)' : 'none',
          transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease',
        }}
      >
        {/* Top Banner Bar - Seamlessly integrated within header */}
        <div
          className="top-bar-wrapper"
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            position: 'relative',
            zIndex: 49,
            transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
            maxHeight: isScrolled ? '0px' : '45px',
            opacity: isScrolled ? 0 : 1,
            overflow: 'hidden',
          }}
        >
          <div className="top-bar-inner">
            {/* Left: Social Media Icons (Custom WebP Icons) */}
            <span className="icons top-bar-socials" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <a
                aria-label="Instagram"
                className="metaapi_socialbuton1"
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
              >
                <img loading="lazy" width={22} height={22} decoding="async" src="/images/social/insta.png.webp" alt="Instagram" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} suppressHydrationWarning />
              </a>
              <a
                aria-label="YouTube"
                className="metaapi_socialbuton1"
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
              >
                <img loading="lazy" width={22} height={22} decoding="async" src="/images/social/yt.png.webp" alt="YouTube" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} suppressHydrationWarning />
              </a>
              <a
                aria-label="Facebook"
                className="metaapi_socialbuton1"
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
              >
                <img loading="lazy" width={22} height={22} decoding="async" src="/images/social/face.png.webp" alt="Facebook" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} suppressHydrationWarning />
              </a>
              <a
                aria-label="WhatsApp"
                className="metaapi_whatsappbuton1"
                href={getWhatsAppLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
              >
                <img loading="lazy" width={22} height={22} decoding="async" src="/images/social/wa.png.webp" alt="WhatsApp" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} suppressHydrationWarning />
              </a>
              <a
                aria-label="Email"
                className="metaapi_socialbuton1"
                href="mailto:info@mastersmilestudio.com"
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
              >
                <img loading="lazy" width={22} height={22} decoding="async" src="/images/social/mail.png.webp" alt="Email" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} suppressHydrationWarning />
              </a>
            </span>

            {/* Center/Right: Localized Contact Info (Email & Dynamic Locale Phone) */}
            <div className="top-bar-contact-links-wrap" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'nowrap' }}>
              <a
                href="mailto:info@mastersmilestudio.com"
                className="top-bar-contact-link"
                suppressHydrationWarning
              >
                info@mastersmilestudio.com
              </a>
              <a
                href={`tel:${(PHONE_CONFIG[locale] || PHONE_CONFIG.en).raw}`}
                className="top-bar-contact-link"
                suppressHydrationWarning
              >
                {(PHONE_CONFIG[locale] || PHONE_CONFIG.en).display}
              </a>
            </div>
          </div>
        </div>

        {/* Main Global Navigation Bar */}
        <div
          className="header-main-nav"
          style={{
            width: '94%',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: isScrolled ? '0.25rem 1rem' : '0.65rem 1rem',
            minHeight: isScrolled ? '46px' : '62px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            transition: 'padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), min-height 0.3s ease',
          }}
        >
          {/* Logo Section (Responsive: Compact on Mobile, Full on Desktop) */}
          <Link
            href="/"
            onClick={handleCloseMobileMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
            className="header-logo-link"
          >
            <div
              className="header-logo-container"
              style={{
                width: isScrolled ? '145px' : undefined,
                height: isScrolled ? '34px' : undefined,
              }}
            >
              <Image
                src="/logo-mastersmilestudio-no-bg.webp"
                alt="Master Smile Studio Logo"
                fill
                priority
                sizes="(max-width: 768px) 130px, 200px"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  filter: 'brightness(0)',
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (UNCHANGED) */}
          <nav
            style={{
              alignItems: 'center',
              gap: isScrolled ? '0.45rem' : '0.75rem',
              transition: 'gap 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link, idx) => {
              const isTreatments = link.menuType === 'treatments';
              const isExplore = link.menuType === 'explore';

              if (isTreatments) {
                const isOpen = activeDropdown === 'treatments';
                return (
                  <div
                    key={idx}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setActiveDropdown('treatments')}
                    onMouseLeave={() => {
                      setActiveDropdown(null);
                      setHoveredCategory(null);
                    }}
                  >
                    <Link
                      href={link.href}
                      className="nav-link-item"
                      style={{
                        fontSize: isScrolled ? '0.86rem' : '0.95rem',
                        padding: isScrolled ? '0.28rem 0.65rem' : undefined,
                        fontWeight: 600,
                        color: isOpen ? '#0f172a' : '#334155',
                        backgroundColor: isOpen ? '#f1f5f9' : 'transparent',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <span>{link.label}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>

                    {/* Level 1 Treatments Dropdown Menu with 2nd Level Flyout */}
                    {isOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          paddingTop: '0.65rem',
                          zIndex: 100,
                        }}
                      >
                        <div className="dropdown-menu-card">
                          {TREATMENTS_NAV_TREE.map((cat) => {
                            const isCatHovered = hoveredCategory === cat.id;
                            const hasSubitems = cat.subitems && cat.subitems.length > 0;

                            return (
                              <div
                                key={cat.id}
                                style={{ position: 'relative' }}
                                onMouseEnter={() => setHoveredCategory(cat.id)}
                              >
                                <Link
                                  href={cat.href}
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setHoveredCategory(null);
                                  }}
                                  className={`dropdown-item-link ${isCatHovered ? 'active-flyout' : ''}`}
                                >
                                  <span>{getLocalized(cat.title)}</span>
                                  {hasSubitems && (
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2.5"
                                      style={{
                                        opacity: isCatHovered ? 1 : 0.45,
                                        stroke: isCatHovered ? '#D58936' : 'currentColor',
                                        transition: 'all 0.2s ease',
                                      }}
                                    >
                                      <path d="M9 18l6-6-6-6" />
                                    </svg>
                                  )}
                                </Link>

                                {/* Level 2 Flyout Submenu */}
                                {isCatHovered && hasSubitems && (
                                  <div className="dropdown-subcard">
                                    {cat.subitems.map((sub, sIdx) => (
                                      <Link
                                        key={sIdx}
                                        href={sub.href}
                                        onClick={() => {
                                          setActiveDropdown(null);
                                          setHoveredCategory(null);
                                        }}
                                        className="dropdown-item-link"
                                        style={{ justifyContent: 'flex-start' }}
                                      >
                                        <span>{getLocalized(sub.title)}</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (isExplore) {
                const isOpen = activeDropdown === 'explore';
                return (
                  <div
                    key={idx}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => {
                      setActiveDropdown('explore');
                      setHoveredCategory(null);
                      setHoveredExploreCategory('prices');
                    }}
                    onMouseLeave={() => {
                      setActiveDropdown(null);
                      setHoveredExploreCategory(null);
                    }}
                  >
                    <Link
                      href={link.href}
                      className="nav-link-item"
                      style={{
                        fontSize: isScrolled ? '0.86rem' : '0.95rem',
                        padding: isScrolled ? '0.28rem 0.65rem' : undefined,
                        fontWeight: 600,
                        color: isOpen ? '#0f172a' : '#334155',
                        backgroundColor: isOpen ? '#f1f5f9' : 'transparent',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <span>{link.label}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>

                    {/* Level 1 Explore Dropdown Menu with 2nd Level Flyout */}
                    {isOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          paddingTop: '0.65rem',
                          zIndex: 100,
                        }}
                      >
                        <div className="dropdown-menu-card">
                          {EXPLORE_NAV_TREE.map((cat) => {
                            const isCatHovered = (hoveredExploreCategory || 'prices') === cat.id;
                            const hasSubitems = cat.subitems && cat.subitems.length > 0;

                            return (
                              <div
                                key={cat.id}
                                style={{ position: 'relative' }}
                                onMouseEnter={() => setHoveredExploreCategory(cat.id)}
                              >
                                {hasSubitems ? (
                                  <div
                                    className={`dropdown-item-link ${isCatHovered ? 'active-flyout' : ''}`}
                                    style={{ cursor: 'default' }}
                                  >
                                    <span>{getLocalized(cat.title)}</span>
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2.5"
                                      style={{
                                        opacity: isCatHovered ? 1 : 0.45,
                                        stroke: isCatHovered ? '#D58936' : 'currentColor',
                                        transition: 'all 0.2s ease',
                                      }}
                                    >
                                      <path d="M9 18l6-6-6-6" />
                                    </svg>
                                  </div>
                                ) : (
                                  <Link
                                    href={cat.href}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setHoveredExploreCategory(null);
                                    }}
                                    className={`dropdown-item-link ${isCatHovered ? 'active-flyout' : ''}`}
                                  >
                                    <span>{getLocalized(cat.title)}</span>
                                  </Link>
                                )}

                                {/* Level 2 Flyout Submenu */}
                                {isCatHovered && hasSubitems && (
                                  <div className="dropdown-subcard">
                                    {cat.subitems.map((sub, sIdx) => (
                                      <Link
                                        key={sIdx}
                                        href={sub.href}
                                        onClick={() => {
                                          setActiveDropdown(null);
                                          setHoveredExploreCategory(null);
                                        }}
                                        className="dropdown-item-link"
                                        style={{ justifyContent: 'flex-start' }}
                                      >
                                        <span>{getLocalized(sub.title)}</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={link.href}
                  className="nav-link-item"
                  style={{
                    fontSize: isScrolled ? '0.86rem' : '0.95rem',
                    padding: isScrolled ? '0.28rem 0.65rem' : undefined,
                    fontWeight: 600,
                    color: '#334155',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Language Switcher + Quick Actions + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <LanguageSwitcher />

            {/* Desktop Get Quote CTA Button (Visible on Desktop only) */}
            <a
              href="#contact"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #D58936 0%, #BA7324 100%)',
                color: '#ffffff',
                padding: isScrolled ? '0.38rem 1.05rem' : '0.52rem 1.35rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: isScrolled ? '0.86rem' : '0.94rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                boxShadow: isScrolled ? '0 2px 10px rgba(213, 137, 54, 0.25)' : '0 4px 16px rgba(213, 137, 54, 0.35)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                whiteSpace: 'nowrap',
              }}
              className="customer-service-btn"
            >
              {{
                en: 'Get Quote',
                tr: 'Teklif Al',
                de: 'Angebot Einholen',
                pl: 'Otrzymaj Wycenę',
                pt: 'Obter Orçamento',
                es: 'Pedir Presupuesto',
                ru: 'Получить расчет',
              }[locale] || 'Get Quote'}
            </a>

            {/* Mobile Hamburger / Morphing Close (X) Button (Clean & Seamless) */}
            <button
              type="button"
              onClick={() => {
                if (mobileMenuOpen) {
                  handleCloseMobileMenu();
                } else {
                  setMobileMenuOpen(true);
                }
              }}
              style={{
                backgroundColor: 'transparent',
                color: '#0f172a',
                border: 'none',
                cursor: 'pointer',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                transition: 'all 0.2s ease',
              }}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Drawer (Full Viewport Behind Permanent Header, Zero-Shift, Zero-Repaint) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100dvh',
            maxHeight: '100dvh',
            zIndex: 999998,
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            paddingTop: '52px',
            boxSizing: 'border-box',
          }}
          className="mobile-menu-drawer"
        >
          {/* Zero-Scroll Middle Body Container */}
          <div
            style={{
              flex: 1,
              overflow: 'hidden',
              padding: '0.65rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* VIEW 1: Main Menu Root (Huge Typography, Perfectly Fitted) */}
            {mobileView === 'main' && (
              <div
                className="mobile-drilldown-view"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0.5rem 0',
                }}
              >
                {/* 1. Treatments Drill-Down Trigger */}
                <button
                  type="button"
                  onClick={() => setMobileView('treatments')}
                  className="mobile-main-hero-link"
                >
                  <span>{t('navigation.treatments')}</span>
                  <span style={{ color: '#D58936', fontSize: '1.6rem', fontWeight: 300 }}>›</span>
                </button>

                {/* 2. Explore Drill-Down Trigger */}
                <button
                  type="button"
                  onClick={() => setMobileView('explore')}
                  className="mobile-main-hero-link"
                >
                  <span>{t('navigation.explore')}</span>
                  <span style={{ color: '#D58936', fontSize: '1.6rem', fontWeight: 300 }}>›</span>
                </button>

                {/* 3. About Link */}
                <Link
                  href="/about"
                  onClick={handleCloseMobileMenu}
                  className="mobile-main-hero-link"
                >
                  <span>{t('navigation.about')}</span>
                </Link>

                {/* 4. Contact Link */}
                <Link
                  href="/contact"
                  onClick={handleCloseMobileMenu}
                  className="mobile-main-hero-link"
                >
                  <span>{t('navigation.contact')}</span>
                </Link>
              </div>
            )}

            {/* VIEW 2: Treatments Level 1 (With Treatments Anchor Item, Centered, Large Font, Borderless) */}
            {mobileView === 'treatments' && (() => {
              return (
                <div className="mobile-drilldown-view" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {/* Header Back Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.4rem', borderBottom: '1px solid #f1f5f9' }}>
                    <button
                      type="button"
                      onClick={() => setMobileView('main')}
                      className="mobile-back-btn"
                    >
                      <span style={{ fontSize: '1.15rem', lineHeight: 1, fontWeight: 400 }}>‹</span>
                      <span>{locale === 'tr' ? 'Ana Menü' : 'Main Menu'}</span>
                    </button>
                    <span style={{ fontSize: '0.8rem', fontWeight: 750, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {t('navigation.treatments')}
                    </span>
                  </div>

                  {/* 8 Treatment Items (Treatments Anchor + 7 Categories) */}
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '0.35rem 0',
                    }}
                  >
                    {/* Anchor: All Treatments Overview Direct Link */}
                    <Link
                      href="/treatments"
                      onClick={handleCloseMobileMenu}
                      className="mobile-drilldown-text-link"
                      style={{ fontSize: 'clamp(1.05rem, 2.5vh, 1.25rem)' }}
                    >
                      <span>{t('navigation.treatments')}</span>
                      <span style={{ color: '#D58936', fontSize: '1.25rem', fontWeight: 300 }}>›</span>
                    </Link>

                    {/* 7 Category Sub-menus */}
                    {TREATMENTS_NAV_TREE.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setMobileView('treatment-category');
                        }}
                        className="mobile-drilldown-text-link"
                        style={{ fontSize: 'clamp(1.05rem, 2.5vh, 1.25rem)' }}
                      >
                        <span>{getLocalized(cat.title)}</span>
                        <span style={{ color: '#D58936', fontSize: '1.25rem', fontWeight: 300 }}>›</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* VIEW 3: Specific Treatment Category Subitems (With Parent Anchor Item, Proportionally Scaled, Centered, Borderless) */}
            {mobileView === 'treatment-category' && selectedCategory && (() => {
              const allCategoryItems = [
                { title: selectedCategory.title, href: selectedCategory.href, isParent: true },
                ...selectedCategory.subitems,
              ];
              const count = allCategoryItems.length;
              const dynamicFontSize = count <= 4
                ? 'clamp(1.45rem, 4.2vh, 1.95rem)'
                : count <= 6
                ? 'clamp(1.26rem, 3.3vh, 1.55rem)'
                : count <= 7
                ? 'clamp(1.12rem, 2.8vh, 1.35rem)'
                : 'clamp(0.94rem, 2.25vh, 1.15rem)';
              const dynamicFontWeight = count <= 4 ? 750 : count <= 6 ? 700 : 650;

              return (
                <div className="mobile-drilldown-view" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {/* Header Back Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.4rem', borderBottom: '1px solid #f1f5f9' }}>
                    <button
                      type="button"
                      onClick={() => setMobileView('treatments')}
                      className="mobile-back-btn"
                    >
                      <span style={{ fontSize: '1.15rem', lineHeight: 1, fontWeight: 400 }}>‹</span>
                      <span>{locale === 'tr' ? 'Tedaviler' : 'All Treatments'}</span>
                    </button>
                    <span style={{ fontSize: '0.8rem', fontWeight: 750, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {getLocalized(selectedCategory.title)}
                    </span>
                  </div>

                  {/* Complete List (Parent Category Anchor + All Sub-treatments) */}
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '0.35rem 0',
                    }}
                  >
                    {allCategoryItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={handleCloseMobileMenu}
                        className="mobile-subitem-text-link"
                        style={{
                          fontSize: dynamicFontSize,
                          fontWeight: 700,
                          color: '#0f172a',
                        }}
                      >
                        <span>{getLocalized(item.title)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* VIEW 4: Explore Level 1 (With Explore Anchor Item, Centered, Large Font, Borderless) */}
            {mobileView === 'explore' && (() => {
              return (
                <div className="mobile-drilldown-view" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {/* Header Back Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.4rem', borderBottom: '1px solid #f1f5f9' }}>
                    <button
                      type="button"
                      onClick={() => setMobileView('main')}
                      className="mobile-back-btn"
                    >
                      <span style={{ fontSize: '1.15rem', lineHeight: 1, fontWeight: 400 }}>‹</span>
                      <span>{locale === 'tr' ? 'Ana Menü' : 'Main Menu'}</span>
                    </button>
                    <span style={{ fontSize: '0.8rem', fontWeight: 750, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {t('navigation.explore')}
                    </span>
                  </div>

                  {/* 6 Explore Categories */}
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '0.35rem 0',
                    }}
                  >
                    {EXPLORE_NAV_TREE.map((cat) => {
                      const hasSub = cat.subitems && cat.subitems.length > 0;
                      if (hasSub) {
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              setSelectedExploreCategory(cat);
                              setMobileView('explore-category');
                            }}
                            className="mobile-drilldown-text-link"
                            style={{ fontSize: 'clamp(1.05rem, 2.5vh, 1.25rem)' }}
                          >
                            <span>{getLocalized(cat.title)}</span>
                            <span style={{ color: '#D58936', fontSize: '1.25rem', fontWeight: 300 }}>›</span>
                          </button>
                        );
                      }
                      return (
                        <Link
                          key={cat.id}
                          href={cat.href}
                          onClick={handleCloseMobileMenu}
                          className="mobile-drilldown-text-link"
                          style={{ fontSize: 'clamp(1.05rem, 2.5vh, 1.25rem)' }}
                        >
                          <span>{getLocalized(cat.title)}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* VIEW 5: Specific Explore Category Subitems */}
            {mobileView === 'explore-category' && selectedExploreCategory && (() => {
              const exploreSubitems = selectedExploreCategory.subitems;
              const count = exploreSubitems.length;
              const dynamicFontSize = count <= 3
                ? 'clamp(1.35rem, 4vh, 1.85rem)'
                : count <= 5
                ? 'clamp(1.15rem, 3vh, 1.45rem)'
                : 'clamp(0.95rem, 2.3vh, 1.2rem)';

              return (
                <div className="mobile-drilldown-view" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {/* Header Back Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.4rem', borderBottom: '1px solid #f1f5f9' }}>
                    <button
                      type="button"
                      onClick={() => setMobileView('explore')}
                      className="mobile-back-btn"
                    >
                      <span style={{ fontSize: '1.15rem', lineHeight: 1, fontWeight: 400 }}>‹</span>
                      <span>{locale === 'tr' ? 'Keşfet' : 'Explore'}</span>
                    </button>
                    <span style={{ fontSize: '0.8rem', fontWeight: 750, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {getLocalized(selectedExploreCategory.title)}
                    </span>
                  </div>

                  {/* Complete Subitem List */}
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '0.35rem 0',
                    }}
                  >
                    {exploreSubitems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={handleCloseMobileMenu}
                        className="mobile-subitem-text-link"
                        style={{
                          fontSize: dynamicFontSize,
                          fontWeight: 700,
                          color: '#0f172a',
                        }}
                      >
                        <span>{getLocalized(item.title)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Pinned Bottom Action Hub (WP & Journey Buttons Always at Bottom) */}
            <div
              style={{
                width: '100%',
                maxWidth: '360px',
                margin: 'auto auto 0 auto',
                paddingTop: '0.5rem',
                paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
                flexShrink: 0,
              }}
            >
              <Link
                href="/contact"
                onClick={handleCloseMobileMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#D58936',
                  color: '#ffffff',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.96rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 18px rgba(213, 137, 54, 0.35)',
                }}
              >
                <span>{locale === 'tr' ? 'Gülüş Yolculuğunu Başlat' : 'Start My Smile Journey'}</span>
                <span>→</span>
              </Link>

              <a
                href={getWhatsAppLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#22c55e',
                  color: '#ffffff',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(34, 197, 94, 0.25)',
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.764.814 2.8.814 3.18 0 5.766-2.587 5.766-5.766 0-3.18-2.586-5.766-5.77-5.766zm0 10.355c-.933 0-1.636-.263-2.383-.717l-.17-.104-1.77.464.473-1.727-.113-.18c-.49-.785-.778-1.579-.778-2.325 0-2.531 2.059-4.59 4.592-4.59 2.532 0 4.591 2.059 4.591 4.59 0 2.531-2.059 4.589-4.591 4.589z" />
                </svg>
                <span>WhatsApp 7/24 Support</span>
              </a>

              <div style={{ textAlign: 'center', fontSize: '0.76rem', color: '#64748b' }}>
                <span style={{ color: '#f59e0b', fontWeight: 700 }}>★★★★★</span> 4.9/5 Google Reviews • Antalya, Turkey
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pinned Side Tab Badge: Start My Journey! */}
      <a
        href="#contact"
        className="start-journey-side-tab"
      >
        <span>{locale === 'tr' ? 'GÜLÜŞ YOLCULUĞUMU BAŞLAT!' : 'START MY JOURNEY!'}</span>
      </a>
    </>
  );
}
