'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentsHubDisciplineShowcase.module.css';

interface SubLink {
  label: string;
  href: string;
}

interface DisciplineItem {
  tag: string;
  duration: string;
  title: string;
  desc: string;
  img: string;
  href: string;
  btnText: string;
  popularTechniquesLabel: string;
  sublinks: SubLink[];
}

interface HubShowcaseDictionary {
  badge: string;
  heading: string;
  subText: string;
  items: DisciplineItem[];
}

const SHOWCASE_DATA: Record<string, HubShowcaseDictionary> = {
  en: {
    badge: 'COMPREHENSIVE DENTAL DISCIPLINES',
    heading: 'Explore Our World-Class Dental Treatments in Istanbul',
    subText:
      'From full-arch titanium dental implants and Swiss Ivoclar E-Max veneers to microscopic endodontics, discover our 7 core medical specialties designed for international patients.',
    items: [
      {
        tag: 'SURGICAL IMPLANTOLOGY',
        duration: '1–2 Visits (3–5 Days)',
        title: 'Dental Implants & Full-Arch Restorations',
        desc: 'Permanent titanium tooth replacement for single, multiple, or totally missing teeth with lifetime international warranties and Swiss Straumann technology.',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        href: '/treatments/dental-implants',
        btnText: 'Explore Dental Implants →',
        popularTechniquesLabel: 'Popular Techniques & Subpages:',
        sublinks: [
          { label: 'All-on-4 Implants', href: '/treatments/dental-implants/all-on-4-implants' },
          { label: 'All-on-6 Implants', href: '/treatments/dental-implants/all-on-6-implants' },
          { label: 'Same-Day Implants', href: '/treatments/dental-implants/immediate-implants' },
          { label: 'Zygomatic Implants', href: '/treatments/dental-implants/zygomatic-implants' },
          { label: 'Sinus Lifting', href: '/treatments/dental-implants/sinus-lifting' },
        ],
      },
      {
        tag: 'COSMETIC SMILE DESIGN',
        duration: '4–6 Days (1 Visit)',
        title: 'Dental Veneers & Porcelain Laminates',
        desc: 'Transform discolored, chipped, or misaligned front teeth with ultra-thin Swiss Ivoclar E-Max glass ceramics and 3D Digital Smile Design (DSD).',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-veneers',
        btnText: 'Explore Dental Veneers →',
        popularTechniquesLabel: 'Popular Techniques & Subpages:',
        sublinks: [
          { label: 'E-Max Veneers', href: '/treatments/dental-veneers/emax-veneers' },
          { label: 'Porcelain Laminates', href: '/treatments/dental-veneers/porcelain-veneers' },
          { label: 'No-Prep Lumineers', href: '/treatments/dental-veneers/lumineers' },
          { label: 'Composite Bonding', href: '/treatments/dental-veneers/composite-veneers' },
        ],
      },
      {
        tag: 'RESTORATIVE PROSTHODONTICS',
        duration: '4–6 Days (1 Visit)',
        title: 'Dental Crowns & German Zirconia',
        desc: 'Reinforce heavily decayed, cracked, or root-canal treated teeth with high-strength 1200+ MPa German monolithic zirconia and E-Max full ceramic caps.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns',
        btnText: 'Explore Dental Crowns →',
        popularTechniquesLabel: 'Popular Techniques & Subpages:',
        sublinks: [
          { label: 'Zirconium Crowns', href: '/treatments/dental-crowns/zirconium-crowns' },
          { label: 'E-Max Full Ceramic', href: '/treatments/dental-crowns/emax-crowns' },
          { label: 'Metal-Porcelain (PFM)', href: '/treatments/dental-crowns/pfm-crowns' },
          { label: 'Full Ceramic Crowns', href: '/treatments/dental-crowns/full-ceramic' },
        ],
      },
      {
        tag: 'FIXED BRIDGEWORK',
        duration: '4–6 Days (1 Visit)',
        title: 'Dental Bridges & Gap Restoration',
        desc: 'Close gaps permanently without removable dentures using high-strength zirconia fixed bridges and multi-unit implant-supported bridges.',
        img: 'https://sohodent.com/doc/data1/cantilever-bridge-copy.webp',
        href: '/treatments/dental-bridge',
        btnText: 'Explore Dental Bridges →',
        popularTechniquesLabel: 'Popular Techniques & Subpages:',
        sublinks: [
          { label: 'Traditional Bridges', href: '/treatments/dental-bridge/traditional-bridges' },
          { label: 'Maryland Winged Bridge', href: '/treatments/dental-bridge/maryland-bridges' },
          { label: 'Cantilever Bridges', href: '/treatments/dental-bridge/cantilever-bridges' },
        ],
      },
      {
        tag: 'REMOVABLE PROSTHETICS',
        duration: '4–6 Days / 2 Visits',
        title: 'Dentures & Snap-On Overdentures',
        desc: 'End loose, clicking dentures with rock-solid Snap-On implant overdentures with palate-free upper comfort and high-impact Lucitone acrylics.',
        img: 'https://sohodent.com/doc/data1/overdenture-copy.webp',
        href: '/treatments/dentures',
        btnText: 'Explore Dentures & Overdentures →',
        popularTechniquesLabel: 'Popular Techniques & Subpages:',
        sublinks: [
          { label: 'Snap-On Overdentures', href: '/treatments/dentures/overdentures' },
          { label: 'Complete Dentures', href: '/treatments/dentures/complete-dentures' },
          { label: 'Partial Dentures', href: '/treatments/dentures/partial-dentures' },
        ],
      },
      {
        tag: 'AESTHETIC MAKEOVER',
        duration: '4–6 Days (1 Visit)',
        title: 'Cosmetic Dentistry & Hollywood Smile',
        desc: 'Comprehensive smile makeovers engineered according to golden facial proportions, Philips Zoom laser whitening, and diode laser gummy smile sculpting.',
        img: 'https://sohodent.com/doc/data1/hollywood-smile-copy.webp',
        href: '/treatments/cosmetic-dentistry',
        btnText: 'Explore Cosmetic Dentistry →',
        popularTechniquesLabel: 'Popular Techniques & Subpages:',
        sublinks: [
          { label: 'Hollywood Smile Makeover', href: '/treatments/cosmetic-dentistry/hollywood-smile' },
          { label: '3D Digital Smile Design', href: '/treatments/cosmetic-dentistry/smile-makeover' },
          { label: 'Philips Zoom Whitening', href: '/treatments/cosmetic-dentistry/teeth-whitening' },
          { label: 'Gummy Smile Laser', href: '/treatments/cosmetic-dentistry/gummy-smile' },
          { label: 'Diastema Gap Closure', href: '/treatments/cosmetic-dentistry/diastema-closure' },
        ],
      },
      {
        tag: 'PREVENTIVE & THERAPEUTIC',
        duration: '1–3 Days (1 Visit)',
        title: 'General Dentistry & Tooth Preservation',
        desc: 'Pain-free microscopic root canal therapy under Carl Zeiss magnification, Swiss Air-Flow tartar removal, and biocompatible nanohybrid fillings.',
        img: 'https://sohodent.com/doc/data1/root-canal-copy.webp',
        href: '/treatments/general-dentistry',
        btnText: 'Explore General Dentistry →',
        popularTechniquesLabel: 'Popular Techniques & Subpages:',
        sublinks: [
          { label: 'Microscopic Root Canal', href: '/treatments/general-dentistry/root-canal' },
          { label: 'Air-Flow Teeth Cleaning', href: '/treatments/general-dentistry/dental-cleaning' },
          { label: 'Composite Tooth Fillings', href: '/treatments/general-dentistry/tooth-fillings' },
          { label: '3D Wisdom Tooth Extraction', href: '/treatments/general-dentistry/tooth-extraction' },
          { label: 'Bruxism Night Guards', href: '/treatments/general-dentistry/bruxism-treatment' },
        ],
      },
    ],
  },
  tr: {
    badge: 'KAPSAMLI DİŞ HEKİMLİĞİ DİSİPLİNLERİ',
    heading: 'İstanbul’da Dünya Standartlarında Diş Tedavilerimizi Keşfedin',
    subText:
      'Tam çene titanyum implantlardan İsviçre Ivoclar E-Max laminalara, mikroskobik kanal tedavisinden Hollywood Smile gülüş tasarımına kadar tüm uzmanlık alanlarımız.',
    items: [
      {
        tag: 'CERRAHİ İMPLANTOLOJİ',
        duration: '1–2 Ziyaret (3–5 Gün)',
        title: 'Diş İmplantı & Tam Çene Tedavileri',
        desc: 'Tek diş, çoklu diş veya tam dişsizlik durumlarında ömür boyu garantili İsviçre Straumann ve Alman titanyum implantlarla doğal çiğneme gücü.',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        href: '/treatments/dental-implants',
        btnText: 'İmplant Tedavilerini İncele →',
        popularTechniquesLabel: 'Popüler Teknikler & Alt Sayfalar:',
        sublinks: [
          { label: 'All-on-4 İmplant', href: '/treatments/dental-implants/all-on-4-implants' },
          { label: 'All-on-6 İmplant', href: '/treatments/dental-implants/all-on-6-implants' },
          { label: 'Aynı Gün İmplant', href: '/treatments/dental-implants/immediate-implants' },
          { label: 'Zigomatik İmplant', href: '/treatments/dental-implants/zygomatic-implants' },
          { label: 'Sinüs Lifting & Kemik Grefti', href: '/treatments/dental-implants/sinus-lifting' },
        ],
      },
      {
        tag: 'ESTETİK GÜLÜŞ TASARIMI',
        duration: '4–6 Gün (Tek Ziyaret)',
        title: 'Lamine Veneer (Yaprak Porselen)',
        desc: 'Renk bozukluğu, kırık veya çapraşıklık olan ön dişlerde doğal ışık geçirgenliğine sahip İsviçre Ivoclar E-Max seramiklerle kusursuz estetik.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-veneers',
        btnText: 'Lamina Tedavilerini İncele →',
        popularTechniquesLabel: 'Popüler Teknikler & Alt Sayfalar:',
        sublinks: [
          { label: 'E-Max Lamina', href: '/treatments/dental-veneers/emax-veneers' },
          { label: 'Porselen Lamine', href: '/treatments/dental-veneers/porcelain-veneers' },
          { label: 'No-Prep Lumineers (Sıfır Kesim)', href: '/treatments/dental-veneers/lumineers' },
          { label: 'Kompozit Bonding', href: '/treatments/dental-veneers/composite-veneers' },
        ],
      },
      {
        tag: 'RESTORATİF PROTETİK',
        duration: '4–6 Gün (Tek Ziyaret)',
        title: 'Zirkonyum & Kron Kaplama',
        desc: 'İleri derece çürük, kırık veya kanal tedavili dişleri 1200+ MPa dayanıklılıkta Alman Zirkonyumu ile 360 derece sararak koruyan estetik kaplamalar.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns',
        btnText: 'Kron Kaplamaları İncele →',
        popularTechniquesLabel: 'Popüler Teknikler & Alt Sayfalar:',
        sublinks: [
          { label: 'Zirkonyum Kron', href: '/treatments/dental-crowns/zirconium-crowns' },
          { label: 'E-Max Full Seramik', href: '/treatments/dental-crowns/emax-crowns' },
          { label: 'Metal Porselen (PFM)', href: '/treatments/dental-crowns/pfm-crowns' },
          { label: 'Tam Seramik Kaplama', href: '/treatments/dental-crowns/full-ceramic' },
        ],
      },
      {
        tag: 'SABİT DİŞ KÖPRÜLERİ',
        duration: '4–6 Gün (Tek Ziyaret)',
        title: 'Diş Köprüsü & Boşluk Tamamlama',
        desc: 'Eksik diş boşluklarını takıp çıkarmalı protez kullanmadan, komşu dişlere veya implantlara bağlanan estetik zirkonyum köprülerle kalıcı kapatma.',
        img: 'https://sohodent.com/doc/data1/cantilever-bridge-copy.webp',
        href: '/treatments/dental-bridge',
        btnText: 'Diş Köprüsü Tedavilerini İncele →',
        popularTechniquesLabel: 'Popüler Teknikler & Alt Sayfalar:',
        sublinks: [
          { label: 'Geleneksel Köprü', href: '/treatments/dental-bridge/traditional-bridges' },
          { label: 'Maryland Kanatlı Köprü', href: '/treatments/dental-bridge/maryland-bridges' },
          { label: 'Balkon (Asma) Köprü', href: '/treatments/dental-bridge/cantilever-bridges' },
        ],
      },
      {
        tag: 'HAREKETLİ PROTEZLER',
        duration: '4–6 Gün / 2 Ziyaret',
        title: 'Protez Diş & Çıt Çıtlı Damak',
        desc: 'Oynayan ve fırlayan damaklara son veren, implant destekli çıtçıtlı overdenture sistemleri ve üst çenede damağı kapatmayan konforlu protezler.',
        img: 'https://sohodent.com/doc/data1/overdenture-copy.webp',
        href: '/treatments/dentures',
        btnText: 'Protez ve Damak Tedavilerini İncele →',
        popularTechniquesLabel: 'Popüler Teknikler & Alt Sayfalar:',
        sublinks: [
          { label: 'Çıt Çıtlı Overdenture', href: '/treatments/dentures/overdentures' },
          { label: 'Tam (Total) Protez', href: '/treatments/dentures/complete-dentures' },
          { label: 'Bölümlü (Parsiyel) Protez', href: '/treatments/dentures/partial-dentures' },
        ],
      },
      {
        tag: 'ESTETİK DÖNÜŞÜM',
        duration: '4–6 Gün (Tek Ziyaret)',
        title: 'Hollywood Smile & Estetik Diş',
        desc: 'Yüzün altın oranına göre tasarlanan 3D Dijital Gülüş Tasarımı, lazerle diş eti seviyeleme (Gummy Smile) ve Philips Zoom klinik diş beyazlatma.',
        img: 'https://sohodent.com/doc/data1/hollywood-smile-copy.webp',
        href: '/treatments/cosmetic-dentistry',
        btnText: 'Gülüş Tasarımını İncele →',
        popularTechniquesLabel: 'Popüler Teknikler & Alt Sayfalar:',
        sublinks: [
          { label: 'Hollywood Smile Dönüşümü', href: '/treatments/cosmetic-dentistry/hollywood-smile' },
          { label: '3D Dijital Gülüş Tasarımı', href: '/treatments/cosmetic-dentistry/smile-makeover' },
          { label: 'Philips Zoom Beyazlatma', href: '/treatments/cosmetic-dentistry/teeth-whitening' },
          { label: 'Lazer Pembe Estetik', href: '/treatments/cosmetic-dentistry/gummy-smile' },
          { label: 'Ayrık Diş (Diastema) Kapatma', href: '/treatments/cosmetic-dentistry/diastema-closure' },
        ],
      },
      {
        tag: 'KORUYUCU & TEDAVİ EDİCİ',
        duration: '1–3 Gün (Tek Ziyaret)',
        title: 'Genel Diş Hekimliği & Diş Kurtarma',
        desc: 'Carl Zeiss dental mikroskop altında ağrısız kök kanal tedavisi, İsviçre Air-Flow lekesiz derin diş temizliği ve estetik nanokompozit dolgular.',
        img: 'https://sohodent.com/doc/data1/root-canal-copy.webp',
        href: '/treatments/general-dentistry',
        btnText: 'Genel Diş Tedavilerini İncele →',
        popularTechniquesLabel: 'Popüler Teknikler & Alt Sayfalar:',
        sublinks: [
          { label: 'Mikroskobik Kanal Tedavisi', href: '/treatments/general-dentistry/root-canal' },
          { label: 'Air-Flow Diş Temizliği', href: '/treatments/general-dentistry/dental-cleaning' },
          { label: 'Kompozit Diş Dolgusu', href: '/treatments/general-dentistry/tooth-fillings' },
          { label: '3D 20’lik Diş Çekimi', href: '/treatments/general-dentistry/tooth-extraction' },
          { label: 'Bruksizm Gece Plağı', href: '/treatments/general-dentistry/bruxism-treatment' },
        ],
      },
    ],
  },
  de: {
    badge: 'UMFASSENDE ZAHNMEDIZINISCHE DISZIPLINEN',
    heading: 'Entdecken Sie unsere erstklassigen Zahnbehandlungen in Istanbul',
    subText:
      'Von Zahnimplantaten aus Titan und Schweizer E-Max Veneers bis hin zu mikroskopischer Endodontie und Hollywood Smile Makeover.',
    items: [
      {
        tag: 'IMPLANTOLOGIE & CHIRURGIE',
        duration: '1–2 Reisen (3–5 Tage)',
        title: 'Zahnimplantate & Feste Zähne',
        desc: 'Dauerhafter Zahnersatz mit lebenslanger Garantie auf Schweizer Straumann und deutsche Titanimplantate für höchste Kaufunktion.',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        href: '/treatments/dental-implants',
        btnText: 'Zahnimplantate entdecken →',
        popularTechniquesLabel: 'Beliebte Verfahren & Unterseiten:',
        sublinks: [
          { label: 'All-on-4 Implantate', href: '/treatments/dental-implants/all-on-4-implants' },
          { label: 'All-on-6 Implantate', href: '/treatments/dental-implants/all-on-6-implants' },
          { label: 'Sofortimplantate', href: '/treatments/dental-implants/immediate-implants' },
          { label: 'Zygoma-Implantate', href: '/treatments/dental-implants/zygomatic-implants' },
          { label: 'Sinuslift & Knochenaufbau', href: '/treatments/dental-implants/sinus-lifting' },
        ],
      },
      {
        tag: 'ÄSTHETISCHES SMILE DESIGN',
        duration: '4–6 Tage (1 Reise)',
        title: 'Veneers & Porzellan-Laminate',
        desc: 'Hauchdünne Schweizer Ivoclar E-Max Glaskeramik für perfekt weiße und ebenmäßige Zähne mit 3D Digital Smile Design.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-veneers',
        btnText: 'Veneers entdecken →',
        popularTechniquesLabel: 'Beliebte Verfahren & Unterseiten:',
        sublinks: [
          { label: 'E-Max Veneers', href: '/treatments/dental-veneers/emax-veneers' },
          { label: 'Porzellan-Veneers', href: '/treatments/dental-veneers/porcelain-veneers' },
          { label: 'No-Prep Lumineers', href: '/treatments/dental-veneers/lumineers' },
          { label: 'Komposit-Bonding', href: '/treatments/dental-veneers/composite-veneers' },
        ],
      },
      {
        tag: 'RESTAURATIVE PROTHETIK',
        duration: '4–6 Tage (1 Reise)',
        title: 'Zahnkronen & Deutsches Zirkon',
        desc: '360°-Schutz für geschädigte Zähne mit bruchfestem deutschem Zirkon (1200+ MPa) und vollkeramischen E-Max Kronen.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns',
        btnText: 'Zahnkronen entdecken →',
        popularTechniquesLabel: 'Beliebte Verfahren & Unterseiten:',
        sublinks: [
          { label: 'Zirkonkronen', href: '/treatments/dental-crowns/zirconium-crowns' },
          { label: 'E-Max Vollkeramik', href: '/treatments/dental-crowns/emax-crowns' },
          { label: 'Metallkeramik (PFM)', href: '/treatments/dental-crowns/pfm-crowns' },
          { label: 'Vollkeramikkronen', href: '/treatments/dental-crowns/full-ceramic' },
        ],
      },
      {
        tag: 'FESTSITZENDE BRÜCKEN',
        duration: '4–6 Tage (1 Reise)',
        title: 'Zahnbrücken & Lückenschluss',
        desc: 'Festsitzender Zahnersatz ohne herausnehmbare Prothesen mit hochstabilen Zirkon- und Implantatbrücken.',
        img: 'https://sohodent.com/doc/data1/cantilever-bridge-copy.webp',
        href: '/treatments/dental-bridge',
        btnText: 'Zahnbrücken entdecken →',
        popularTechniquesLabel: 'Beliebte Verfahren & Unterseiten:',
        sublinks: [
          { label: 'Traditionelle Brücken', href: '/treatments/dental-bridge/traditional-bridges' },
          { label: 'Maryland Klebebrücken', href: '/treatments/dental-bridge/maryland-bridges' },
          { label: 'Freiendbrücken', href: '/treatments/dental-bridge/cantilever-bridges' },
        ],
      },
      {
        tag: 'HERAUSNEHMBARER ZAHNERSATZ',
        duration: '4–6 Tage / 2 Reisen',
        title: 'Zahnprothesen & Overdentures',
        desc: 'Fester Halt auf Implantaten mit Klick-Verschluss (Locator), gaumenfreier Tragekomfort und bruchsicheres Acryl.',
        img: 'https://sohodent.com/doc/data1/overdenture-copy.webp',
        href: '/treatments/dentures',
        btnText: 'Prothesen entdecken →',
        popularTechniquesLabel: 'Beliebte Verfahren & Unterseiten:',
        sublinks: [
          { label: 'Snap-On Klickprothesen', href: '/treatments/dentures/overdentures' },
          { label: 'Vollprothesen', href: '/treatments/dentures/complete-dentures' },
          { label: 'Teilprothesen', href: '/treatments/dentures/partial-dentures' },
        ],
      },
      {
        tag: 'ÄSTHETISCHES MAKEOVER',
        duration: '4–6 Tage (1 Reise)',
        title: 'Cosmetic Dentistry & Hollywood Smile',
        desc: 'Ganzheitliche Lächeln-Transformation nach dem goldenen Schnitt, Laser-Gingivoplastik und Philips Zoom Bleaching.',
        img: 'https://sohodent.com/doc/data1/hollywood-smile-copy.webp',
        href: '/treatments/cosmetic-dentistry',
        btnText: 'Hollywood Smile entdecken →',
        popularTechniquesLabel: 'Beliebte Verfahren & Unterseiten:',
        sublinks: [
          { label: 'Hollywood Smile Makeover', href: '/treatments/cosmetic-dentistry/hollywood-smile' },
          { label: '3D Digital Smile Design', href: '/treatments/cosmetic-dentistry/smile-makeover' },
          { label: 'Philips Zoom Bleaching', href: '/treatments/cosmetic-dentistry/teeth-whitening' },
          { label: 'Laser-Zahnfleischkorrektur', href: '/treatments/cosmetic-dentistry/gummy-smile' },
          { label: 'Diastema-Schluss', href: '/treatments/cosmetic-dentistry/diastema-closure' },
        ],
      },
      {
        tag: 'PROPHYLAXE & ERHALT',
        duration: '1–3 Tage (1 Reise)',
        title: 'Allgemeine Zahnheilkunde & Zahnerhalt',
        desc: 'Schmerzfreie Wurzelbehandlung unter dem Carl Zeiss Dentalmikroskop, Schweizer Air-Flow Zahnreinigung und Füllungen.',
        img: 'https://sohodent.com/doc/data1/root-canal-copy.webp',
        href: '/treatments/general-dentistry',
        btnText: 'Zahnheilkunde entdecken →',
        popularTechniquesLabel: 'Beliebte Verfahren & Unterseiten:',
        sublinks: [
          { label: 'Mikroskopische Wurzelbehandlung', href: '/treatments/general-dentistry/root-canal' },
          { label: 'Air-Flow Zahnreinigung', href: '/treatments/general-dentistry/dental-cleaning' },
          { label: 'Kompositfüllungen', href: '/treatments/general-dentistry/tooth-fillings' },
          { label: 'Weisheitszahnentfernung', href: '/treatments/general-dentistry/tooth-extraction' },
          { label: 'Aufbissschiene (Bruxismus)', href: '/treatments/general-dentistry/bruxism-treatment' },
        ],
      },
    ],
  },
  pl: {
    badge: 'KOMPLEKSOWE DZIEDZINY STOMATOLOGII',
    heading: 'Odkryj Nasze Zabiegi Stomatologiczne w Stambule',
    subText:
      'Od implantów tytanowych i szwajcarskich licówek E-Max po mikroskopową endodoncję i metamorfozę Hollywood Smile.',
    items: [
      {
        tag: 'CHIRURGIA I IMPLANTOLOGIA',
        duration: '1–2 Wizyty (3–5 Dni)',
        title: 'Implanty Zębowe i Odbudowy Całych Łuków',
        desc: 'Trwałe uzupełnienie braków zębowych z dożywotnią gwarancją na szwajcarskie implanty Straumann i niemiecką inżynierię.',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        href: '/treatments/dental-implants',
        btnText: 'Poznaj Implanty Zębowe →',
        popularTechniquesLabel: 'Popularne Techniki i Podstrony:',
        sublinks: [
          { label: 'Implanty All-on-4', href: '/treatments/dental-implants/all-on-4-implants' },
          { label: 'Implanty All-on-6', href: '/treatments/dental-implants/all-on-6-implants' },
          { label: 'Implanty Jednodniowe', href: '/treatments/dental-implants/immediate-implants' },
          { label: 'Implanty Zygomatyczne', href: '/treatments/dental-implants/zygomatic-implants' },
          { label: 'Podniesienie Dna Zatoki', href: '/treatments/dental-implants/sinus-lifting' },
        ],
      },
      {
        tag: 'PROJEKTOWANIE UŚMIECHU',
        duration: '4–6 Dni (1 Wizyta)',
        title: 'Licówki Porcelanowe i E-Max',
        desc: 'Metamorfoza zębów przednich dzięki ultracienkim licówkom Ivoclar E-Max i Cyfrowemu Projektowaniu Uśmiechu 3D DSD.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-veneers',
        btnText: 'Poznaj Licówki →',
        popularTechniquesLabel: 'Popularne Techniki i Podstrony:',
        sublinks: [
          { label: 'Licówki E-Max', href: '/treatments/dental-veneers/emax-veneers' },
          { label: 'Licówki Porcelanowe', href: '/treatments/dental-veneers/porcelain-veneers' },
          { label: 'Licówki Bez Szlifowania Lumineers', href: '/treatments/dental-veneers/lumineers' },
          { label: 'Bonding Kompozytowy', href: '/treatments/dental-veneers/composite-veneers' },
        ],
      },
      {
        tag: 'PROTETYKA ZACHOWAWCZA',
        duration: '4–6 Dni (1 Wizyta)',
        title: 'Korony Zębowe i Niemiecki Cyrkon',
        desc: 'Ochrona zniszczonych i leczonych kanałowo zębów trwałym tlenkiem cyrkonu (1200+ MPa) i koronami pełnoceramicznymi.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns',
        btnText: 'Poznaj Korony Zębowe →',
        popularTechniquesLabel: 'Popularne Techniki i Podstrony:',
        sublinks: [
          { label: 'Korony Cyrkonowe', href: '/treatments/dental-crowns/zirconium-crowns' },
          { label: 'Korony E-Max Pełnoceramiczne', href: '/treatments/dental-crowns/emax-crowns' },
          { label: 'Korony Metalowo-Porcelanowe', href: '/treatments/dental-crowns/pfm-crowns' },
          { label: 'Korony Pełnoceramiczne', href: '/treatments/dental-crowns/full-ceramic' },
        ],
      },
      {
        tag: 'MOSTY STAŁE',
        duration: '4–6 Dni (1 Wizyta)',
        title: 'Mosty Zębowe i Odbudowa Luk',
        desc: 'Trwałe uzupełnienie braków bez wyjmowanych protez za pomocą mostów cyrkonowych i mostów na implantach.',
        img: 'https://sohodent.com/doc/data1/cantilever-bridge-copy.webp',
        href: '/treatments/dental-bridge',
        btnText: 'Poznaj Mosty Zębowe →',
        popularTechniquesLabel: 'Popularne Techniki i Podstrony:',
        sublinks: [
          { label: 'Mosty Tradycyjne', href: '/treatments/dental-bridge/traditional-bridges' },
          { label: 'Mosty Adhezyjne Maryland', href: '/treatments/dental-bridge/maryland-bridges' },
          { label: 'Mosty Wspornikowe', href: '/treatments/dental-bridge/cantilever-bridges' },
        ],
      },
      {
        tag: 'PROTEZY RUCHOME',
        duration: '4–6 Dni / 2 Wizyty',
        title: 'Protezy Zębowe i Overdentures na Zatrzaskach',
        desc: 'Stabilne protezy na implantach bez ruszania się i wypadania, z opcją bez podniebienia w górnej szczęce.',
        img: 'https://sohodent.com/doc/data1/overdenture-copy.webp',
        href: '/treatments/dentures',
        btnText: 'Poznaj Protezy Zębowe →',
        popularTechniquesLabel: 'Popularne Techniki i Podstrony:',
        sublinks: [
          { label: 'Protezy na Zatrzaskach Overdenture', href: '/treatments/dentures/overdentures' },
          { label: 'Protezy Całkowite', href: '/treatments/dentures/complete-dentures' },
          { label: 'Protezy Częściowe', href: '/treatments/dentures/partial-dentures' },
        ],
      },
      {
        tag: 'METAMORFOZA ESTETYCZNA',
        duration: '4–6 Dni (1 Wizyta)',
        title: 'Hollywood Smile i Stomatologia Estetyczna',
        desc: 'Kompleksowa metamorfoza według złotego podziału, laserowa korekta dziąseł Gummy Smile i wybielanie Philips Zoom.',
        img: 'https://sohodent.com/doc/data1/hollywood-smile-copy.webp',
        href: '/treatments/cosmetic-dentistry',
        btnText: 'Poznaj Hollywood Smile →',
        popularTechniquesLabel: 'Popularne Techniki i Podstrony:',
        sublinks: [
          { label: 'Metamorfoza Hollywood Smile', href: '/treatments/cosmetic-dentistry/hollywood-smile' },
          { label: 'Cyfrowe Projektowanie 3D DSD', href: '/treatments/cosmetic-dentistry/smile-makeover' },
          { label: 'Wybielanie Philips Zoom', href: '/treatments/cosmetic-dentistry/teeth-whitening' },
          { label: 'Laserowa Plastyka Dziąseł', href: '/treatments/cosmetic-dentistry/gummy-smile' },
          { label: 'Zamykanie Diastemy', href: '/treatments/cosmetic-dentistry/diastema-closure' },
        ],
      },
      {
        tag: 'PROFILAKTYKA I LECZENIE',
        duration: '1–3 Dni (1 Wizyta)',
        title: 'Stomatologia Ogólna i Zachowawcza',
        desc: 'Bezbólowe leczenie kanałowe pod mikroskopem Carl Zeiss, piaskowanie Air-Flow i biozgodne wypełnienia nanokompozytowe.',
        img: 'https://sohodent.com/doc/data1/root-canal-copy.webp',
        href: '/treatments/general-dentistry',
        btnText: 'Poznaj Stomatologię Ogólną →',
        popularTechniquesLabel: 'Popularne Techniki i Podstrony:',
        sublinks: [
          { label: 'Leczenie Kanałowe pod Mikroskopem', href: '/treatments/general-dentistry/root-canal' },
          { label: 'Higienizacja Air-Flow', href: '/treatments/general-dentistry/dental-cleaning' },
          { label: 'Wypełnienia Kompozytowe', href: '/treatments/general-dentistry/tooth-fillings' },
          { label: 'Ekstrakcja Ósemek 3D', href: '/treatments/general-dentistry/tooth-extraction' },
          { label: 'Szyny na Bruksizm', href: '/treatments/general-dentistry/bruxism-treatment' },
        ],
      },
    ],
  },
  pt: {
    badge: 'DISCIPLINAS ODONTOLÓGICAS COMPLETAS',
    heading: 'Explore Nossos Tratamentos Odontológicos em Istambul',
    subText:
      'De implantes em titânio e facetas suíças E-Max a endodontia microscópica e transformações Hollywood Smile.',
    items: [
      {
        tag: 'IMPLANTODONTIA & CIRURGIA',
        duration: '1–2 Viagens (3–5 Dias)',
        title: 'Implantes Dentários & Reabilitação Total',
        desc: 'Substituição definitiva de dentes com garantia vitalícia em implantes suíços Straumann e titânio de alta precisão.',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        href: '/treatments/dental-implants',
        btnText: 'Ver Implantes Dentários →',
        popularTechniquesLabel: 'Técnicas e Subpáginas Populares:',
        sublinks: [
          { label: 'Implantes All-on-4', href: '/treatments/dental-implants/all-on-4-implants' },
          { label: 'Implantes All-on-6', href: '/treatments/dental-implants/all-on-6-implants' },
          { label: 'Implantes Imediatos', href: '/treatments/dental-implants/immediate-implants' },
          { label: 'Implantes Zigomáticos', href: '/treatments/dental-implants/zygomatic-implants' },
          { label: 'Levantamento de Seio Maxilar', href: '/treatments/dental-implants/sinus-lifting' },
        ],
      },
      {
        tag: 'DESIGN DO SORRISO',
        duration: '4–6 Dias (1 Viagem)',
        title: 'Facetas Dentárias & Lentes de Contato E-Max',
        desc: 'Transformação estética dos dentes anteriores com cerâmica vítrea Ivoclar E-Max e Design Digital do Sorriso 3D.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-veneers',
        btnText: 'Ver Facetas Dentárias →',
        popularTechniquesLabel: 'Técnicas e Subpáginas Populares:',
        sublinks: [
          { label: 'Facetas E-Max', href: '/treatments/dental-veneers/emax-veneers' },
          { label: 'Facetas de Porcelana', href: '/treatments/dental-veneers/porcelain-veneers' },
          { label: 'Lentes Lumineers Sem Desgaste', href: '/treatments/dental-veneers/lumineers' },
          { label: 'Bonding em Resina', href: '/treatments/dental-veneers/composite-veneers' },
        ],
      },
      {
        tag: 'PRÓTESE & REABILITAÇÃO',
        duration: '4–6 Dias (1 Viagem)',
        title: 'Coroas Dentárias & Zircônia Alemã',
        desc: 'Proteção 360° para dentes fraturados ou desvitalizados com zircônia alemã (1200+ MPa) e cerâmica pura.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns',
        btnText: 'Ver Coroas Dentárias →',
        popularTechniquesLabel: 'Técnicas e Subpáginas Populares:',
        sublinks: [
          { label: 'Coroas de Zircônia', href: '/treatments/dental-crowns/zirconium-crowns' },
          { label: 'Coroas E-Max Puras', href: '/treatments/dental-crowns/emax-crowns' },
          { label: 'Metalocerâmica (PFM)', href: '/treatments/dental-crowns/pfm-crowns' },
          { label: 'Coroas Cerâmicas Totais', href: '/treatments/dental-crowns/full-ceramic' },
        ],
      },
      {
        tag: 'PRÓTESE FIXA',
        duration: '4–6 Dias (1 Viagem)',
        title: 'Pontes Dentárias & Reposição de Dentes',
        desc: 'Reposição fixa e definitiva de dentes ausentes com pontes em zircônia e pontes sobre implantes.',
        img: 'https://sohodent.com/doc/data1/cantilever-bridge-copy.webp',
        href: '/treatments/dental-bridge',
        btnText: 'Ver Pontes Dentárias →',
        popularTechniquesLabel: 'Técnicas e Subpáginas Populares:',
        sublinks: [
          { label: 'Pontes Tradicionais', href: '/treatments/dental-bridge/traditional-bridges' },
          { label: 'Pontes Adesivas Maryland', href: '/treatments/dental-bridge/maryland-bridges' },
          { label: 'Pontes Cantilever', href: '/treatments/dental-bridge/cantilever-bridges' },
        ],
      },
      {
        tag: 'PRÓTESE REMOVÍVEL',
        duration: '4–6 Dias / 2 Viagens',
        title: 'Próteses Dentárias & Overdentures de Clique',
        desc: 'Fim das dentaduras frouxas com overdentures fixadas por encaixes Locator e opção sem céu da boca.',
        img: 'https://sohodent.com/doc/data1/overdenture-copy.webp',
        href: '/treatments/dentures',
        btnText: 'Ver Próteses Dentárias →',
        popularTechniquesLabel: 'Técnicas e Subpáginas Populares:',
        sublinks: [
          { label: 'Overdentures de Clique', href: '/treatments/dentures/overdentures' },
          { label: 'Próteses Totais', href: '/treatments/dentures/complete-dentures' },
          { label: 'Próteses Parciais', href: '/treatments/dentures/partial-dentures' },
        ],
      },
      {
        tag: 'TRANSFORMAÇÃO ESTÉTICA',
        duration: '4–6 Dias (1 Viagem)',
        title: 'Hollywood Smile & Odontologia Estética',
        desc: 'Design do sorriso personalizado pela proporção áurea, plástica gengival a laser e clareamento Philips Zoom.',
        img: 'https://sohodent.com/doc/data1/hollywood-smile-copy.webp',
        href: '/treatments/cosmetic-dentistry',
        btnText: 'Ver Hollywood Smile →',
        popularTechniquesLabel: 'Técnicas e Subpáginas Populares:',
        sublinks: [
          { label: 'Transformação Hollywood Smile', href: '/treatments/cosmetic-dentistry/hollywood-smile' },
          { label: 'Design Digital 3D DSD', href: '/treatments/cosmetic-dentistry/smile-makeover' },
          { label: 'Clareamento Philips Zoom', href: '/treatments/cosmetic-dentistry/teeth-whitening' },
          { label: 'Gengivoplastia a Laser', href: '/treatments/cosmetic-dentistry/gummy-smile' },
          { label: 'Fechamento de Diastemas', href: '/treatments/cosmetic-dentistry/diastema-closure' },
        ],
      },
      {
        tag: 'PREVENÇÃO & PRESERVAÇÃO',
        duration: '1–3 Dias (1 Viagem)',
        title: 'Clínica Geral & Preservação Dental',
        desc: 'Tratamento de canal microscópico Carl Zeiss sem dor, profilaxia Air-Flow e restaurações estéticas em nanoresina.',
        img: 'https://sohodent.com/doc/data1/root-canal-copy.webp',
        href: '/treatments/general-dentistry',
        btnText: 'Ver Clínica Geral →',
        popularTechniquesLabel: 'Técnicas e Subpáginas Populares:',
        sublinks: [
          { label: 'Canal sob Microscópio', href: '/treatments/general-dentistry/root-canal' },
          { label: 'Profilaxia Air-Flow', href: '/treatments/general-dentistry/dental-cleaning' },
          { label: 'Restaurações Estéticas', href: '/treatments/general-dentistry/tooth-fillings' },
          { label: 'Extração de Sisos 3D', href: '/treatments/general-dentistry/tooth-extraction' },
          { label: 'Goteiras para Bruxismo', href: '/treatments/general-dentistry/bruxism-treatment' },
        ],
      },
    ],
  },
  es: {
    badge: 'DISCIPLINAS ODONTOLÓGICAS COMPLETAS',
    heading: 'Descubra Nuestros Tratamientos Dentales en Estambul',
    subText:
      'Desde implantes de titanio y carillas suizas E-Max hasta endodoncia microscópica y transformaciones Hollywood Smile.',
    items: [
      {
        tag: 'IMPLANTOLOGÍA Y CIRUGÍA',
        duration: '1–2 Viajes (3–5 Días)',
        title: 'Implantes Dentales y Dientes Fijos',
        desc: 'Reposición permanente de piezas ausentes con garantía de por vida en implantes suizos Straumann y titanio de máxima pureza.',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        href: '/treatments/dental-implants',
        btnText: 'Ver Implantes Dentales →',
        popularTechniquesLabel: 'Técnicas y Subpáginas Populares:',
        sublinks: [
          { label: 'Implantes All-on-4', href: '/treatments/dental-implants/all-on-4-implants' },
          { label: 'Implantes All-on-6', href: '/treatments/dental-implants/all-on-6-implants' },
          { label: 'Implantes Inmediatos', href: '/treatments/dental-implants/immediate-implants' },
          { label: 'Implantes Cigomáticos', href: '/treatments/dental-implants/zygomatic-implants' },
          { label: 'Elevación de Seno Maxilar', href: '/treatments/dental-implants/sinus-lifting' },
        ],
      },
      {
        tag: 'DISEÑO DE SONRISA',
        duration: '4–6 Días (1 Viaje)',
        title: 'Carillas Dentales de Porcelana y E-Max',
        desc: 'Perfeccione el color, alineación y forma de sus dientes frontales con carillas Ivoclar E-Max y Diseño Digital 3D (DSD).',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-veneers',
        btnText: 'Ver Carillas Dentales →',
        popularTechniquesLabel: 'Técnicas y Subpáginas Populares:',
        sublinks: [
          { label: 'Carillas E-Max', href: '/treatments/dental-veneers/emax-veneers' },
          { label: 'Carillas de Porcelana', href: '/treatments/dental-veneers/porcelain-veneers' },
          { label: 'Microcarillas Lumineers', href: '/treatments/dental-veneers/lumineers' },
          { label: 'Bonding de Composite', href: '/treatments/dental-veneers/composite-veneers' },
        ],
      },
      {
        tag: 'PRÓTESIS Y REHABILITACIÓN',
        duration: '4–6 Días (1 Viaje)',
        title: 'Coronas Dentales y Zirconio Alemán',
        desc: 'Protección 360° para dientes destruidos o endodonciados con zirconio alemán (1200+ MPa) y cerámica E-Max pura.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns',
        btnText: 'Ver Coronas Dentales →',
        popularTechniquesLabel: 'Técnicas y Subpáginas Populares:',
        sublinks: [
          { label: 'Coronas de Zirconio', href: '/treatments/dental-crowns/zirconium-crowns' },
          { label: 'Coronas E-Max Totales', href: '/treatments/dental-crowns/emax-crowns' },
          { label: 'Metal-Porcelana (PFM)', href: '/treatments/dental-crowns/pfm-crowns' },
          { label: 'Coronas Completamente Cerámicas', href: '/treatments/dental-crowns/full-ceramic' },
        ],
      },
      {
        tag: 'PRÓTESIS FIJA',
        duration: '4–6 Días (1 Viaje)',
        title: 'Puentes Dentales y Cierre de Espacios',
        desc: 'Sustitución fija sin prótesis de quitar y poner mediante puentes de zirconio de alta resistencia y puentes sobre implantes.',
        img: 'https://sohodent.com/doc/data1/cantilever-bridge-copy.webp',
        href: '/treatments/dental-bridge',
        btnText: 'Ver Puentes Dentales →',
        popularTechniquesLabel: 'Técnicas y Subpáginas Populares:',
        sublinks: [
          { label: 'Puentes Tradicionales', href: '/treatments/dental-bridge/traditional-bridges' },
          { label: 'Puentes Adhesivos Maryland', href: '/treatments/dental-bridge/maryland-bridges' },
          { label: 'Puentes Cantilever', href: '/treatments/dental-bridge/cantilever-bridges' },
        ],
      },
      {
        tag: 'PRÓTESIS REMOVIBLE',
        duration: '4–6 Días / 2 Viajes',
        title: 'Prótesis Dentales y Sobredentaduras',
        desc: 'Fijación total sobre implantes con anclaje Locator («clic»), diseño sin paladar superior y acrílicos de alta resistencia.',
        img: 'https://sohodent.com/doc/data1/overdenture-copy.webp',
        href: '/treatments/dentures',
        btnText: 'Ver Prótesis Dentales →',
        popularTechniquesLabel: 'Técnicas y Subpáginas Populares:',
        sublinks: [
          { label: 'Sobredentaduras con Anclaje', href: '/treatments/dentures/overdentures' },
          { label: 'Prótesis Completas', href: '/treatments/dentures/complete-dentures' },
          { label: 'Prótesis Parciales', href: '/treatments/dentures/partial-dentures' },
        ],
      },
      {
        tag: 'ESTÉTICA INTEGRAL',
        duration: '4–6 Días (1 Viaje)',
        title: 'Hollywood Smile y Estética Dental',
        desc: 'Diseño de sonrisa armónico según la proporción áurea, gingivoplastia láser para sonrisa gingival y blanqueamiento Philips Zoom.',
        img: 'https://sohodent.com/doc/data1/hollywood-smile-copy.webp',
        href: '/treatments/cosmetic-dentistry',
        btnText: 'Ver Hollywood Smile →',
        popularTechniquesLabel: 'Técnicas y Subpáginas Populares:',
        sublinks: [
          { label: 'Sonrisa Hollywood Makeover', href: '/treatments/cosmetic-dentistry/hollywood-smile' },
          { label: 'Diseño Digital 3D DSD', href: '/treatments/cosmetic-dentistry/smile-makeover' },
          { label: 'Blanqueamiento Philips Zoom', href: '/treatments/cosmetic-dentistry/teeth-whitening' },
          { label: 'Gingivoplastia Láser', href: '/treatments/cosmetic-dentistry/gummy-smile' },
          { label: 'Cierre de Diastemas', href: '/treatments/cosmetic-dentistry/diastema-closure' },
        ],
      },
      {
        tag: 'PREVENCIÓN Y TRATAMIENTO',
        duration: '1–3 Días (1 Viaje)',
        title: 'Odontología General y Conservadora',
        desc: 'Endodoncia indolora bajo microscopio Carl Zeiss, limpieza profunda Air-Flow y empastes estéticos de nanocomposite.',
        img: 'https://sohodent.com/doc/data1/root-canal-copy.webp',
        href: '/treatments/general-dentistry',
        btnText: 'Ver Odontología General →',
        popularTechniquesLabel: 'Técnicas y Subpáginas Populares:',
        sublinks: [
          { label: 'Endodoncia Microscópica', href: '/treatments/general-dentistry/root-canal' },
          { label: 'Limpieza y Pulido Air-Flow', href: '/treatments/general-dentistry/dental-cleaning' },
          { label: 'Empastes de Composite', href: '/treatments/general-dentistry/tooth-fillings' },
          { label: 'Extracción de Muelas del Juicio', href: '/treatments/general-dentistry/tooth-extraction' },
          { label: 'Férulas de Bruxismo', href: '/treatments/general-dentistry/bruxism-treatment' },
        ],
      },
    ],
  },
  ru: {
    badge: 'ПОЛНЫЙ СПЕКТР СТОМАТОЛОГИЧЕСКИХ УСЛУГ',
    heading: 'Исследуйте наши передовые стоматологические процедуры в Стамбуле',
    subText:
      'От титановых имплантов и швейцарских виниров E-Max до лечения каналов под микроскопом и Голливудской улыбки.',
    items: [
      {
        tag: 'ХИРУРГИЯ И ИМПЛАНТАЦИЯ',
        duration: '1–2 Визита (3–5 Дней)',
        title: 'Имплантация зубов и восстановление челюсти',
        desc: 'Пожизненная гарантия на швейцарские импланты Straumann и титановые системы при частичном и полном отсутствии зубов.',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        href: '/treatments/dental-implants',
        btnText: 'Изучить Имплантацию →',
        popularTechniquesLabel: 'Популярные методики и страницы:',
        sublinks: [
          { label: 'Имплантация All-on-4', href: '/treatments/dental-implants/all-on-4-implants' },
          { label: 'Имплантация All-on-6', href: '/treatments/dental-implants/all-on-6-implants' },
          { label: 'Одномоментная имплантация', href: '/treatments/dental-implants/immediate-implants' },
          { label: 'Скуловые импланты Zygoma', href: '/treatments/dental-implants/zygomatic-implants' },
          { label: 'Синус-лифтинг', href: '/treatments/dental-implants/sinus-lifting' },
        ],
      },
      {
        tag: 'ДИЗАЙН УЛЫБКИ',
        duration: '4–6 Дней (1 Визит)',
        title: 'Керамические виниры и люминиры E-Max',
        desc: 'Преображение зоны улыбки швейцарской стеклокерамикой Ivoclar E-Max и цифровым 3D дизайном улыбки (DSD).',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-veneers',
        btnText: 'Изучить Виниры →',
        popularTechniquesLabel: 'Популярные методики и страницы:',
        sublinks: [
          { label: 'Виниры E-Max', href: '/treatments/dental-veneers/emax-veneers' },
          { label: 'Фарфоровые виниры', href: '/treatments/dental-veneers/porcelain-veneers' },
          { label: 'Люминиры без обточки', href: '/treatments/dental-veneers/lumineers' },
          { label: 'Композитный бондинг', href: '/treatments/dental-veneers/composite-veneers' },
        ],
      },
      {
        tag: 'ОРТОПЕДИЯ И ПРОТЕЗИРОВАНИЕ',
        duration: '4–6 Дней (1 Визит)',
        title: 'Зубные коронки и немецкий цирконий',
        desc: 'Защита разрушенных и депульпированных зубов сверхпрочным диоксидом циркония (1200+ МПа) и цельной керамикой.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns',
        btnText: 'Изучить Коронки →',
        popularTechniquesLabel: 'Популярные методики и страницы:',
        sublinks: [
          { label: 'Циркониевые коронки', href: '/treatments/dental-crowns/zirconium-crowns' },
          { label: 'Коронки E-Max', href: '/treatments/dental-crowns/emax-crowns' },
          { label: 'Металлокерамика (PFM)', href: '/treatments/dental-crowns/pfm-crowns' },
          { label: 'Цельнокерамические коронки', href: '/treatments/dental-crowns/full-ceramic' },
        ],
      },
      {
        tag: 'НЕСЪЕМНЫЕ МОСТЫ',
        duration: '4–6 Дней (1 Визит)',
        title: 'Зубные мостовидные протезы',
        desc: 'Надежное замещение отсутствующих зубов прочными циркониевыми мостами и мостами на имплантах.',
        img: 'https://sohodent.com/doc/data1/cantilever-bridge-copy.webp',
        href: '/treatments/dental-bridge',
        btnText: 'Изучить Зубные Мосты →',
        popularTechniquesLabel: 'Популярные методики и страницы:',
        sublinks: [
          { label: 'Традиционные мосты', href: '/treatments/dental-bridge/traditional-bridges' },
          { label: 'Мэрилендские мосты', href: '/treatments/dental-bridge/maryland-bridges' },
          { label: 'Консольные мосты', href: '/treatments/dental-bridge/cantilever-bridges' },
        ],
      },
      {
        tag: 'СЪЕМНОЕ ПРОТЕЗИРОВАНИЕ',
        duration: '4–6 Дней / 2 Визита',
        title: 'Зубные протезы и замковые Overdentures',
        desc: 'Фиксация съемных протезов на замках Locator без выпадения, с комфортной конструкцией без неба.',
        img: 'https://sohodent.com/doc/data1/overdenture-copy.webp',
        href: '/treatments/dentures',
        btnText: 'Изучить Протезы →',
        popularTechniquesLabel: 'Популярные методики и страницы:',
        sublinks: [
          { label: 'Покрывные протезы Overdenture', href: '/treatments/dentures/overdentures' },
          { label: 'Полные съемные протезы', href: '/treatments/dentures/complete-dentures' },
          { label: 'Частичные протезы', href: '/treatments/dentures/partial-dentures' },
        ],
      },
      {
        tag: 'ЭСТЕТИКА И ПРЕОБРАЖЕНИЕ',
        duration: '4–6 Дней (1 Визит)',
        title: 'Голливудская улыбка (Hollywood Smile)',
        desc: 'Комплексный дизайн улыбки по золотому сечению, лазерная пластика десен и отбеливание Philips Zoom.',
        img: 'https://sohodent.com/doc/data1/hollywood-smile-copy.webp',
        href: '/treatments/cosmetic-dentistry',
        btnText: 'Изучить Hollywood Smile →',
        popularTechniquesLabel: 'Популярные методики и страницы:',
        sublinks: [
          { label: 'Голливудская улыбка Makeover', href: '/treatments/cosmetic-dentistry/hollywood-smile' },
          { label: 'Цифровой 3D дизайн DSD', href: '/treatments/cosmetic-dentistry/smile-makeover' },
          { label: 'Отбеливание Philips Zoom', href: '/treatments/cosmetic-dentistry/teeth-whitening' },
          { label: 'Лазерная коррекция десен', href: '/treatments/cosmetic-dentistry/gummy-smile' },
          { label: 'Закрытие диастемы', href: '/treatments/cosmetic-dentistry/diastema-closure' },
        ],
      },
      {
        tag: 'ТЕРАПИЯ И ПРОФИЛАКТИКА',
        duration: '1–3 Дня (1 Визит)',
        title: 'Терапевтическая стоматология и лечение',
        desc: 'Безболезненное лечение каналов под микроскопом Carl Zeiss, профессиональная гигиена Swiss Air-Flow и пломбы.',
        img: 'https://sohodent.com/doc/data1/root-canal-copy.webp',
        href: '/treatments/general-dentistry',
        btnText: 'Изучить Терапию →',
        popularTechniquesLabel: 'Популярные методики и страницы:',
        sublinks: [
          { label: 'Лечение каналов под микроскопом', href: '/treatments/general-dentistry/root-canal' },
          { label: 'Чистка зубов Swiss Air-Flow', href: '/treatments/general-dentistry/dental-cleaning' },
          { label: 'Композитные реставрации', href: '/treatments/general-dentistry/tooth-fillings' },
          { label: 'Удаление зубов мудрости', href: '/treatments/general-dentistry/tooth-extraction' },
          { label: 'Капы от бруксизма', href: '/treatments/general-dentistry/bruxism-treatment' },
        ],
      },
    ],
  },
};

export default function TreatmentsHubDisciplineShowcase() {
  const locale = useLocale();
  const data = SHOWCASE_DATA[locale] || SHOWCASE_DATA.en;

  return (
    <section aria-labelledby="hub-disciplines-heading" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <span className={styles.badge}>{data.badge}</span>
          <h2 id="hub-disciplines-heading" className={styles.mainHeading}>
            {data.heading}
          </h2>
          <p className={styles.subText}>{data.subText}</p>
        </div>

        <div className={styles.grid}>
          {data.items.map((item, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.imageWrap}>
                <span className={styles.tagBadge}>{item.tag}</span>
                <span className={styles.durationBadge}>{item.duration}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>

                <div className={styles.subLinksTitle}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                  <span>{item.popularTechniquesLabel}</span>
                </div>

                <ul className={styles.subLinksList}>
                  {item.sublinks.map((sub, sIdx) => (
                    <li key={sIdx} className={styles.subLinkItem}>
                      <Link href={sub.href}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>

                <div className={styles.actionRow}>
                  <Link href={item.href} className={styles.primaryBtn}>
                    <span>{item.btnText}</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
