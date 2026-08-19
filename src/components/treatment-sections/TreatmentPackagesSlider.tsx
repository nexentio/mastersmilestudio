'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentPackagesSlider.module.css';

interface PackageItem {
  title: string;
  img: string;
  alt: string;
  duration: string;
  priceUSD: string;
  priceEUR: string;
  priceGBP: string;
  included: string[];
}

interface SliderTranslations {
  heading: string;
  subText: string;
  durationLabel: string;
  includedLabel: string;
  priceLabel: string;
  quoteBtn: string;
  packages: PackageItem[];
}

const PACKAGES_DATA: Record<string, SliderTranslations> = {
  en: {
    heading: 'Popular Implant Packages',
    subText: 'All-inclusive premium packages tailored for international patients',
    durationLabel: 'Duration:',
    includedLabel: 'Included in this package:',
    priceLabel: 'Package Price',
    quoteBtn: 'Get a Free Quote',
    packages: [
      {
        title: 'Full Jaw All on 4 Implant Package (Nucleoss)',
        img: '/packages/pkg-4.webp',
        alt: 'All on 4 Dental Implant Package Nucleoss Antalya Turkey',
        duration: '4-5 Days',
        priceUSD: '$4,900',
        priceEUR: '€4,500',
        priceGBP: '£3,850',
        included: [
          '4 Nucleoss Dental Implants',
          'Fixed Temporary Teeth (Same Day)',
          'Final Hybrid/Zirconia Bridge',
          '5-Star Luxury Hotel (4 Nights)',
          'VIP Airport & Clinic Transfers',
          'Free Panoramic X-Ray & 3D CT Scan',
        ],
      },
      {
        title: 'Full Jaw All on 4 Implant Package (DXL)',
        img: '/packages/pkg-5.webp',
        alt: 'All on 4 Dental Implant Package DXL German Brand',
        duration: '4-5 Days',
        priceUSD: '$5,800',
        priceEUR: '€5,350',
        priceGBP: '£4,550',
        included: [
          '4 German DXL Titanium Implants',
          'Fixed Temporary Teeth',
          'Final High-Grade Zirconia Arch',
          '5-Star Luxury Hotel (4 Nights)',
          'VIP Airport & Clinic Transfers',
          'Free 3D Tomography & Consultation',
        ],
      },
      {
        title: 'Full Jaw All on 4 Implant Package (Straumann)',
        img: '/packages/pkg-6.webp',
        alt: 'All on 4 Dental Implant Package Straumann Swiss Brand',
        duration: '4-5 Days',
        priceUSD: '$7,600',
        priceEUR: '€7,000',
        priceGBP: '£5,950',
        included: [
          '4 Premium Swiss Straumann Implants',
          'Lifetime International Guarantee',
          'Fixed Temporary Prosthesis',
          'Final Custom Zirconia Bridge',
          '5-Star Luxury Hotel (4 Nights)',
          'VIP Airport & Clinic Chauffeur',
        ],
      },
      {
        title: 'Full Jaw All on 6 Implant Package (Nucleoss)',
        img: '/packages/pkg-1.webp',
        alt: 'All on 6 Dental Implant Package Nucleoss',
        duration: '5-6 Days',
        priceUSD: '$5,900',
        priceEUR: '€5,450',
        priceGBP: '£4,650',
        included: [
          '6 Nucleoss Dental Implants',
          'Maximum Stability 6-Point Support',
          'Fixed Temporary Teeth in 24h',
          'Final 12-14 Unit Zirconia Arch',
          '5-Star Luxury Hotel (5 Nights)',
          'VIP Chauffeur & Personal Host',
        ],
      },
      {
        title: 'Full Jaw All on 6 Implant Package (DXL)',
        img: '/packages/pkg-2.webp',
        alt: 'All on 6 Dental Implant Package DXL German Brand',
        duration: '5-6 Days',
        priceUSD: '$6,900',
        priceEUR: '€6,350',
        priceGBP: '£5,400',
        included: [
          '6 German DXL Titanium Implants',
          'Heavy Chewing Force Distribution',
          'Fixed Temporary & Final Zirconia Arch',
          '5-Star Luxury Hotel (5 Nights)',
          'VIP Airport & Clinic Transfers',
          'Lifetime Implant Guarantee',
        ],
      },
      {
        title: 'Full Jaw All on 6 Implant Package (Straumann)',
        img: '/packages/pkg-3.webp',
        alt: 'All on 6 Dental Implant Package Straumann Swiss Brand',
        duration: '5-6 Days',
        priceUSD: '$8,900',
        priceEUR: '€8,200',
        priceGBP: '£6,980',
        included: [
          '6 Swiss Straumann Roxolid Implants',
          'Official Swiss Straumann Passport',
          'Immediate Fixed Temporary Bridge',
          'Final Multi-Layered Zirconia Arch',
          '5-Star Luxury Hotel Suite (5 Nights)',
          'VIP Private Chauffeur Transfers',
        ],
      },
    ],
  },
  tr: {
    heading: 'Popüler İmplant Paketlerimiz',
    subText: 'Uluslararası hastalarımız için her şey dahil komple implant paketleri',
    durationLabel: 'Süre:',
    includedLabel: 'Bu pakete dahil olanlar:',
    priceLabel: 'Paket Fiyatı',
    quoteBtn: 'Ücretsiz Teklif Alın',
    packages: [
      {
        title: 'Tam Çene All on 4 İmplant Paketi (Nucleoss)',
        img: '/packages/pkg-4.webp',
        alt: 'All on 4 Diş İmplantı Paketi Nucleoss Antalya Türkiye',
        duration: '4-5 Gün',
        priceUSD: '$4,900',
        priceEUR: '€4,500',
        priceGBP: '£3,850',
        included: [
          '4 Adet Nucleoss Dental İmplant',
          'Sabit Geçici Dişler (Aynı Gün)',
          'Kalıcı Hibrit / Zirkonyum Köprü',
          '5 Yıldızlı Lüks Otel (4 Gece)',
          'VIP Havalimanı & Klinik Transferleri',
          'Ücretsiz Panoramik Röntgen & 3D Tomografi',
        ],
      },
      {
        title: 'Tam Çene All on 4 İmplant Paketi (DXL)',
        img: '/packages/pkg-5.webp',
        alt: 'All on 4 Diş İmplant Paketi DXL Alman Markası',
        duration: '4-5 Gün',
        priceUSD: '$5,800',
        priceEUR: '€5,350',
        priceGBP: '£4,550',
        included: [
          '4 Adet Alman DXL Titanyum İmplant',
          'Sabit Geçici Dişler',
          'Kalıcı Yüksek Dereceli Zirkonyum Ark',
          '5 Yıldızlı Lüks Otel (4 Gece)',
          'VIP Havalimanı & Klinik Transferleri',
          'Ücretsiz 3D Tomografi & Konsültasyon',
        ],
      },
      {
        title: 'Tam Çene All on 4 İmplant Paketi (Straumann)',
        img: '/packages/pkg-6.webp',
        alt: 'All on 4 Diş İmplant Paketi Straumann İsviçre Markası',
        duration: '4-5 Gün',
        priceUSD: '$7,600',
        priceEUR: '€7,000',
        priceGBP: '£5,950',
        included: [
          '4 Adet Premium İsviçre Straumann İmplant',
          'Ömür Boyu Uluslararası Garanti',
          'Sabit Geçici Protez',
          'Kalıcı Özel Zirkonyum Köprü',
          '5 Yıldızlı Lüks Otel (4 Gece)',
          'VIP Özel Şoförlü Transferler',
        ],
      },
      {
        title: 'Tam Çene All on 6 İmplant Paketi (Nucleoss)',
        img: '/packages/pkg-1.webp',
        alt: 'All on 6 Diş İmplant Paketi Nucleoss',
        duration: '5-6 Gün',
        priceUSD: '$5,900',
        priceEUR: '€5,450',
        priceGBP: '£4,650',
        included: [
          '6 Adet Nucleoss Dental İmplant',
          'Maksimum Stabilite 6 Noktalı Destek',
          '24 Saatte Sabit Geçici Dişler',
          'Kalıcı 12-14 Üye Zirkonyum Ark',
          '5 Yıldızlı Lüks Otel (5 Gece)',
          'VIP Şoförlü Transfer & Özel Danışman',
        ],
      },
      {
        title: 'Tam Çene All on 6 İmplant Paketi (DXL)',
        img: '/packages/pkg-2.webp',
        alt: 'All on 6 Diş İmplant Paketi DXL Alman Markası',
        duration: '5-6 Gün',
        priceUSD: '$6,900',
        priceEUR: '€6,350',
        priceGBP: '£5,400',
        included: [
          '6 Adet Alman DXL Titanyum İmplant',
          'Güçlü Çiğneme Kuvveti Dağılımı',
          'Geçici ve Kalıcı Zirkonyum Ark',
          '5 Yıldızlı Lüks Otel (5 Gece)',
          'VIP Havalimanı & Klinik Transferleri',
          'Ömür Boyu İmplant Garantisi',
        ],
      },
      {
        title: 'Tam Çene All on 6 İmplant Paketi (Straumann)',
        img: '/packages/pkg-3.webp',
        alt: 'All on 6 Diş İmplant Paketi Straumann İsviçre Markası',
        duration: '5-6 Gün',
        priceUSD: '$8,900',
        priceEUR: '€8,200',
        priceGBP: '£6,980',
        included: [
          '6 Adet İsviçre Straumann Roxolid İmplant',
          'Resmi İsviçre Straumann Pasaportu',
          'Anında Sabit Geçici Köprü',
          'Kalıcı Çok Katmanlı Zirkonyum Ark',
          '5 Yıldızlı Lüks Otel Suiti (5 Gece)',
          'VIP Özel Şoförlü Transferler',
        ],
      },
    ],
  },
  de: {
    heading: 'Beliebte Implantat-Pakete',
    subText: 'All-Inclusive-Premiumpakete, maßgeschneidert für internationale Patienten',
    durationLabel: 'Dauer:',
    includedLabel: 'In diesem Paket enthalten:',
    priceLabel: 'Paketpreis',
    quoteBtn: 'Kostenloses Angebot anfordern',
    packages: [
      {
        title: 'Ganzkiefer All on 4 Implantat-Paket (Nucleoss)',
        img: '/packages/pkg-4.webp',
        alt: 'All on 4 Zahnimplantat Paket Nucleoss Antalya Türkei',
        duration: '4-5 Tage',
        priceUSD: '$4,900',
        priceEUR: '€4,500',
        priceGBP: '£3,850',
        included: [
          '4 Nucleoss Zahnimplantate',
          'Feste provisorische Zähne (am selben Tag)',
          'Permanente Hybrid-/Zirkonbrücke',
          '5-Sterne-Luxushotel (4 Nächte)',
          'VIP-Flughafen- & Kliniktransfers',
          'Kostenloses Panoramaröntgen & 3D-DVT-Scan',
        ],
      },
      {
        title: 'Ganzkiefer All on 4 Implantat-Paket (DXL)',
        img: '/packages/pkg-5.webp',
        alt: 'All on 4 Zahnimplantat Paket DXL Deutsche Marke',
        duration: '4-5 Tage',
        priceUSD: '$5,800',
        priceEUR: '€5,350',
        priceGBP: '£4,550',
        included: [
          '4 deutsche DXL Titanimplantate',
          'Feste provisorische Zähne',
          'Permanenter hochfester Zirkonbogen',
          '5-Sterne-Luxushotel (4 Nächte)',
          'VIP-Flughafen- & Kliniktransfers',
          'Kostenlose 3D-Tomographie & Beratung',
        ],
      },
      {
        title: 'Ganzkiefer All on 4 Implantat-Paket (Straumann)',
        img: '/packages/pkg-6.webp',
        alt: 'All on 4 Zahnimplantat Paket Straumann Schweizer Marke',
        duration: '4-5 Tage',
        priceUSD: '$7,600',
        priceEUR: '€7,000',
        priceGBP: '£5,950',
        included: [
          '4 Schweizer Straumann Premium-Implantate',
          'Lebenslange weltweite Garantie',
          'Feste provisorische Prothese',
          'Permanente maßgefertigte Zirkonbrücke',
          '5-Sterne-Luxushotel (4 Nächte)',
          'VIP-Privatchauffeur-Transfers',
        ],
      },
      {
        title: 'Ganzkiefer All on 6 Implantat-Paket (Nucleoss)',
        img: '/packages/pkg-1.webp',
        alt: 'All on 6 Zahnimplantat Paket Nucleoss',
        duration: '5-6 Tage',
        priceUSD: '$5,900',
        priceEUR: '€5,450',
        priceGBP: '£4,650',
        included: [
          '6 Nucleoss Zahnimplantate',
          'Maximale Stabilität durch 6-Punkt-Abstützung',
          'Feste provisorische Zähne in 24 Std.',
          'Permanenter Zirkonbogen (12-14 Kronen)',
          '5-Sterne-Luxushotel (5 Nächte)',
          'VIP-Chauffeur & persönlicher Betreuer',
        ],
      },
      {
        title: 'Ganzkiefer All on 6 Implantat-Paket (DXL)',
        img: '/packages/pkg-2.webp',
        alt: 'All on 6 Zahnimplantat Paket DXL Deutsche Marke',
        duration: '5-6 Tage',
        priceUSD: '$6,900',
        priceEUR: '€6,350',
        priceGBP: '£5,400',
        included: [
          '6 deutsche DXL Titanimplantate',
          'Optimale Kaukraftverteilung',
          'Provisorischer und permanenter Zirkonbogen',
          '5-Sterne-Luxushotel (5 Nächte)',
          'VIP-Flughafen- & Kliniktransfers',
          'Lebenslange Implantatgarantie',
        ],
      },
      {
        title: 'Ganzkiefer All on 6 Implantat-Paket (Straumann)',
        img: '/packages/pkg-3.webp',
        alt: 'All on 6 Zahnimplantat Paket Straumann Schweizer Marke',
        duration: '5-6 Tage',
        priceUSD: '$8,900',
        priceEUR: '€8,200',
        priceGBP: '£6,980',
        included: [
          '6 Schweizer Straumann Roxolid-Implantate',
          'Offizieller Schweizer Straumann-Pass',
          'Sofortige feste provisorische Brücke',
          'Permanenter mehrschichtiger Zirkonbogen',
          '5-Sterne-Luxushotel-Suite (5 Nächte)',
          'VIP-Privatchauffeur-Transfers',
        ],
      },
    ],
  },
  pl: {
    heading: 'Popularne Pakiety Implantów',
    subText: 'Pakiety all-inclusive klasy premium przygotowane dla pacjentów z zagranicy',
    durationLabel: 'Czas trwania:',
    includedLabel: 'W tym pakiecie zawarte:',
    priceLabel: 'Cena Pakietu',
    quoteBtn: 'Odbierz Darmową Wycenę',
    packages: [
      {
        title: 'Pakiet All on 4 na Całą Szczękę (Nucleoss)',
        img: '/packages/pkg-4.webp',
        alt: 'Pakiet implantów All on 4 Nucleoss Antalya Turcja',
        duration: '4-5 Dni',
        priceUSD: '$4,900',
        priceEUR: '€4,500',
        priceGBP: '£3,850',
        included: [
          '4 implanty stomatologiczne Nucleoss',
          'Stałe zęby tymczasowe (w tym samym dniu)',
          'Ostateczny most hybrydowy / cyrkonowy',
          '5-gwiazdkowy luksusowy hotel (4 noce)',
          'Transfery VIP z lotniska i do kliniki',
          'Bezpłatne zdjęcie panoramiczne RTG i tomografia 3D',
        ],
      },
      {
        title: 'Pakiet All on 4 na Całą Szczękę (DXL)',
        img: '/packages/pkg-5.webp',
        alt: 'Pakiet implantów All on 4 DXL niemiecka marka',
        duration: '4-5 Dni',
        priceUSD: '$5,800',
        priceEUR: '€5,350',
        priceGBP: '£4,550',
        included: [
          '4 niemieckie implanty tytanowe DXL',
          'Stałe zęby tymczasowe',
          'Ostateczny łuk z wysokiej jakości cyrkonu',
          '5-gwiazdkowy luksusowy hotel (4 noce)',
          'Transfery VIP z lotniska i do kliniki',
          'Bezpłatna tomografia 3D i konsultacja',
        ],
      },
      {
        title: 'Pakiet All on 4 na Całą Szczękę (Straumann)',
        img: '/packages/pkg-6.webp',
        alt: 'Pakiet implantów All on 4 Straumann szwajcarska marka',
        duration: '4-5 Dni',
        priceUSD: '$7,600',
        priceEUR: '€7,000',
        priceGBP: '£5,950',
        included: [
          '4 szwajcarskie implanty Straumann Premium',
          'Dożywotnia międzynarodowa gwarancja',
          'Stała proteza tymczasowa',
          'Ostateczny indywidualny most cyrkonowy',
          '5-gwiazdkowy luksusowy hotel (4 noce)',
          'Prywatny szofer VIP (lotnisko i klinika)',
        ],
      },
      {
        title: 'Pakiet All on 6 na Całą Szczękę (Nucleoss)',
        img: '/packages/pkg-1.webp',
        alt: 'Pakiet implantów All on 6 Nucleoss',
        duration: '5-6 Dni',
        priceUSD: '$5,900',
        priceEUR: '€5,450',
        priceGBP: '£4,650',
        included: [
          '6 implantów stomatologicznych Nucleoss',
          'Maksymalna stabilność dzięki 6 punktom podparcia',
          'Stałe zęby tymczasowe w 24 godziny',
          'Ostateczny łuk cyrkonowy (12-14 koron)',
          '5-gwiazdkowy luksusowy hotel (5 nocy)',
          'Prywatny szofer VIP i polskojęzyczny koordynator',
        ],
      },
      {
        title: 'Pakiet All on 6 na Całą Szczękę (DXL)',
        img: '/packages/pkg-2.webp',
        alt: 'Pakiet implantów All on 6 DXL niemiecka marka',
        duration: '5-6 Dni',
        priceUSD: '$6,900',
        priceEUR: '€6,350',
        priceGBP: '£5,400',
        included: [
          '6 niemieckich implantów tytanowych DXL',
          'Optymalny rozkład dużych sił żucia',
          'Tymczasowy i ostateczny łuk cyrkonowy',
          '5-gwiazdkowy luksusowy hotel (5 nocy)',
          'Transfery VIP z lotniska i do kliniki',
          'Dożywotnia gwarancja na implanty',
        ],
      },
      {
        title: 'Pakiet All on 6 na Całą Szczękę (Straumann)',
        img: '/packages/pkg-3.webp',
        alt: 'Pakiet implantów All on 6 Straumann szwajcarska marka',
        duration: '5-6 Dni',
        priceUSD: '$8,900',
        priceEUR: '€8,200',
        priceGBP: '£6,980',
        included: [
          '6 szwajcarskich implantów Straumann Roxolid',
          'Oficjalny szwajcarski paszport Straumann',
          'Natychmiastowy stały most tymczasowy',
          'Ostateczny wielowarstwowy łuk cyrkonowy',
          'Apartament w 5-gwiazdkowym hotelu (5 nocy)',
          'Prywatne transfery VIP z kierowcą',
        ],
      },
    ],
  },
  pt: {
    heading: 'Pacotes Populares de Implantes',
    subText: 'Pacotes premium com tudo incluído para pacientes internacionais',
    durationLabel: 'Duração:',
    includedLabel: 'Incluído neste pacote:',
    priceLabel: 'Preço do Pacote',
    quoteBtn: 'Receber Orçamento Gratuito',
    packages: [
      {
        title: 'Pacote All on 4 de Boca Completa (Nucleoss)',
        img: '/packages/pkg-4.webp',
        alt: 'Pacote de Implantes All on 4 Nucleoss Antalya Turquia',
        duration: '4-5 Dias',
        priceUSD: '$4,900',
        priceEUR: '€4,500',
        priceGBP: '£3,850',
        included: [
          '4 Implantes Dentários Nucleoss',
          'Dentes Provisórios Fixos (Mesmo Dia)',
          'Ponte Definitiva Híbrida / Zircônia',
          'Hotel 5 Estrelas de Luxo (4 Noites)',
          'Traslados VIP Aeroporto e Clínica',
          'Raio-X Panorâmico e Tomografia 3D Gratuitos',
        ],
      },
      {
        title: 'Pacote All on 4 de Boca Completa (DXL)',
        img: '/packages/pkg-5.webp',
        alt: 'Pacote de Implantes All on 4 DXL Marca Alemã',
        duration: '4-5 Dias',
        priceUSD: '$5,800',
        priceEUR: '€5,350',
        priceGBP: '£4,550',
        included: [
          '4 Implantes de Titânio DXL Alemães',
          'Dentes Provisórios Fixos',
          'Arco Definitivo de Zircônia de Alto Padrão',
          'Hotel 5 Estrelas de Luxo (4 Noites)',
          'Traslados VIP Aeroporto e Clínica',
          'Tomografia 3D e Consulta Gratuitas',
        ],
      },
      {
        title: 'Pacote All on 4 de Boca Completa (Straumann)',
        img: '/packages/pkg-6.webp',
        alt: 'Pacote de Implantes All on 4 Straumann Marca Suíça',
        duration: '4-5 Dias',
        priceUSD: '$7,600',
        priceEUR: '€7,000',
        priceGBP: '£5,950',
        included: [
          '4 Implantes Suíços Straumann Premium',
          'Garantia Internacional Vitalícia',
          'Prótese Provisória Fixa',
          'Ponte Personalizada em Zircônia',
          'Hotel 5 Estrelas de Luxo (4 Noites)',
          'Motorista Privativo VIP Aeroporto e Clínica',
        ],
      },
      {
        title: 'Pacote All on 6 de Boca Completa (Nucleoss)',
        img: '/packages/pkg-1.webp',
        alt: 'Pacote de Implantes All on 6 Nucleoss',
        duration: '5-6 Dias',
        priceUSD: '$5,900',
        priceEUR: '€5,450',
        priceGBP: '£4,650',
        included: [
          '6 Implantes Dentários Nucleoss',
          'Estabilidade Máxima com 6 Pontos de Apoio',
          'Dentes Provisórios Fixos em 24h',
          'Arco Definitivo de Zircônia de 12-14 Unidades',
          'Hotel 5 Estrelas de Luxo (5 Noites)',
          'Motorista VIP e Concierge Personalizado',
        ],
      },
      {
        title: 'Pacote All on 6 de Boca Completa (DXL)',
        img: '/packages/pkg-2.webp',
        alt: 'Pacote de Implantes All on 6 DXL Marca Alemã',
        duration: '5-6 Dias',
        priceUSD: '$6,900',
        priceEUR: '€6,350',
        priceGBP: '£5,400',
        included: [
          '6 Implantes de Titânio DXL Alemães',
          'Excelente Distribuição de Força Mastigatória',
          'Arco Provisório e Definitivo de Zircônia',
          'Hotel 5 Estrelas de Luxo (5 Noites)',
          'Traslados VIP Aeroporto e Clínica',
          'Garantia Vitalícia nos Implantes',
        ],
      },
      {
        title: 'Pacote All on 6 de Boca Completa (Straumann)',
        img: '/packages/pkg-3.webp',
        alt: 'Pacote de Implantes All on 6 Straumann Marca Suíça',
        duration: '5-6 Dias',
        priceUSD: '$8,900',
        priceEUR: '€8,200',
        priceGBP: '£6,980',
        included: [
          '6 Implantes Suíços Straumann Roxolid',
          'Passaporte Oficial Straumann Suíço',
          'Ponte Provisória Fixa Imediata',
          'Arco Definitivo em Zircônia Multicamadas',
          'Suíte em Hotel 5 Estrelas (5 Noites)',
          'Traslados Privativos VIP com Chauffeur',
        ],
      },
    ],
  },
  es: {
    heading: 'Paquetes Populares de Implantes',
    subText: 'Paquetes prémium todo incluido adaptados para pacientes internacionales',
    durationLabel: 'Duración:',
    includedLabel: 'Incluido en este paquete:',
    priceLabel: 'Precio del Paquete',
    quoteBtn: 'Obtener Presupuesto Gratis',
    packages: [
      {
        title: 'Paquete All on 4 Arcada Completa (Nucleoss)',
        img: '/packages/pkg-4.webp',
        alt: 'Paquete de Implantes All on 4 Nucleoss Antalya Turquía',
        duration: '4-5 Días',
        priceUSD: '$4,900',
        priceEUR: '€4,500',
        priceGBP: '£3,850',
        included: [
          '4 Implantes Dentales Nucleoss',
          'Dientes Provisionales Fijos (Mismo Día)',
          'Puente Definitivo Híbrido / Circonio',
          'Hotel 5 Estrellas de Lujo (4 Noches)',
          'Traslados VIP Aeropuerto y Clínica',
          'Radiografía Panorámica y TAC 3D Gratuitos',
        ],
      },
      {
        title: 'Paquete All on 4 Arcada Completa (DXL)',
        img: '/packages/pkg-5.webp',
        alt: 'Paquete de Implantes All on 4 DXL Marca Alemana',
        duration: '4-5 Días',
        priceUSD: '$5,800',
        priceEUR: '€5,350',
        priceGBP: '£4,550',
        included: [
          '4 Implantes Alemanes de Titanio DXL',
          'Dientes Provisionales Fijos',
          'Arco Definitivo de Circonio de Alto Grado',
          'Hotel 5 Estrellas de Lujo (4 Noches)',
          'Traslados VIP Aeropuerto y Clínica',
          'Tomografía 3D y Consulta Gratuitas',
        ],
      },
      {
        title: 'Paquete All on 4 Arcada Completa (Straumann)',
        img: '/packages/pkg-6.webp',
        alt: 'Paquete de Implantes All on 4 Straumann Marca Suiza',
        duration: '4-5 Días',
        priceUSD: '$7,600',
        priceEUR: '€7,000',
        priceGBP: '£5,950',
        included: [
          '4 Implantes Suizos Straumann Premium',
          'Garantía Internacional de por Vida',
          'Prótesis Provisional Fija',
          'Puente de Circonio Personalizado',
          'Hotel 5 Estrellas de Lujo (4 Noches)',
          'Chófer Privado VIP (Aeropuerto y Clínica)',
        ],
      },
      {
        title: 'Paquete All on 6 Arcada Completa (Nucleoss)',
        img: '/packages/pkg-1.webp',
        alt: 'Paquete de Implantes All on 6 Nucleoss',
        duration: '5-6 Días',
        priceUSD: '$5,900',
        priceEUR: '€5,450',
        priceGBP: '£4,650',
        included: [
          '6 Implantes Dentales Nucleoss',
          'Máxima Estabilidad con 6 Puntos de Apoyo',
          'Dientes Provisionales Fijos en 24h',
          'Arco Definitivo de Circonio (12-14 piezas)',
          'Hotel 5 Estrellas de Lujo (5 Noches)',
          'Chófer VIP y Asistente Personal',
        ],
      },
      {
        title: 'Paquete All on 6 Arcada Completa (DXL)',
        img: '/packages/pkg-2.webp',
        alt: 'Paquete de Implantes All on 6 DXL Marca Alemana',
        duration: '5-6 Días',
        priceUSD: '$6,900',
        priceEUR: '€6,350',
        priceGBP: '£5,400',
        included: [
          '6 Implantes Alemanes de Titanio DXL',
          'Óptima Distribución de Fuerzas Masticatorias',
          'Arco Provisional y Definitivo de Circonio',
          'Hotel 5 Estrellas de Lujo (5 Noches)',
          'Traslados VIP Aeropuerto y Clínica',
          'Garantía de por Vida en Implantes',
        ],
      },
      {
        title: 'Paquete All on 6 Arcada Completa (Straumann)',
        img: '/packages/pkg-3.webp',
        alt: 'Paquete de Implantes All on 6 Straumann Marca Suiza',
        duration: '5-6 Días',
        priceUSD: '$8,900',
        priceEUR: '€8,200',
        priceGBP: '£6,980',
        included: [
          '6 Implantes Suizos Straumann Roxolid',
          'Pasaporte Oficial Straumann Suiza',
          'Puente Fijo Provisional Inmediato',
          'Arco Definitivo de Circonio Multicapa',
          'Suite en Hotel 5 Estrellas (5 Noches)',
          'Traslados Privados VIP con Chófer',
        ],
      },
    ],
  },
  ru: {
    heading: 'Популярные Пакеты Имплантации',
    subText: 'Премиальные пакеты «всё включено», созданные для иностранных пациентов',
    durationLabel: 'Длительность:',
    includedLabel: 'В этот пакет включено:',
    priceLabel: 'Стоимость Пакета',
    quoteBtn: 'Получить Бесплатный Расчёт',
    packages: [
      {
        title: 'Пакет All-on-4 на Всю Челюсть (Nucleoss)',
        img: '/packages/pkg-4.webp',
        alt: 'Пакет имплантации All on 4 Nucleoss Анталья Турция',
        duration: '4-5 Дней',
        priceUSD: '$4,900',
        priceEUR: '€4,500',
        priceGBP: '£3,850',
        included: [
          '4 дентальных имплантата Nucleoss',
          'Несъемные временные зубы (в тот же день)',
          'Постоянный гибридный / циркониевый мост',
          '5-звездочный отель люкс (4 ночи)',
          'VIP-трансфер из аэропорта и клиники',
          'Бесплатный панорамный снимок и КТ 3D',
        ],
      },
      {
        title: 'Пакет All-on-4 на Всю Челюсть (DXL)',
        img: '/packages/pkg-5.webp',
        alt: 'Пакет имплантации All on 4 DXL немецкий бренд',
        duration: '4-5 Дней',
        priceUSD: '$5,800',
        priceEUR: '€5,350',
        priceGBP: '£4,550',
        included: [
          '4 немецких титановых имплантата DXL',
          'Несъемные временные зубы',
          'Постоянная дуга из высокопрочного циркония',
          '5-звездочный отель люкс (4 ночи)',
          'VIP-трансфер из аэропорта и клиники',
          'Бесплатная 3D томография и консультация',
        ],
      },
      {
        title: 'Пакет All-on-4 на Всю Челюсть (Straumann)',
        img: '/packages/pkg-6.webp',
        alt: 'Пакет имплантации All on 4 Straumann швейцарский бренд',
        duration: '4-5 Дней',
        priceUSD: '$7,600',
        priceEUR: '€7,000',
        priceGBP: '£5,950',
        included: [
          '4 премиальных швейцарских имплантата Straumann',
          'Пожизненная международная гарантия',
          'Несъемный временный протез',
          'Постоянный индивидуальный мост из циркония',
          '5-звездочный отель люкс (4 ночи)',
          'Личный VIP-водитель (аэропорт и клиника)',
        ],
      },
      {
        title: 'Пакет All-on-6 на Всю Челюсть (Nucleoss)',
        img: '/packages/pkg-1.webp',
        alt: 'Пакет имплантации All on 6 Nucleoss',
        duration: '5-6 Дней',
        priceUSD: '$5,900',
        priceEUR: '€5,450',
        priceGBP: '£4,650',
        included: [
          '6 дентальных имплантатов Nucleoss',
          'Максимальная стабильность (6 опорных точек)',
          'Несъемные временные зубы за 24 часа',
          'Постоянная циркониевая дуга (12-14 единиц)',
          '5-звездочный отель люкс (5 ночей)',
          'VIP-трансфер и персональный координатор',
        ],
      },
      {
        title: 'Пакет All-on-6 на Всю Челюсть (DXL)',
        img: '/packages/pkg-2.webp',
        alt: 'Пакет имплантации All on 6 DXL немецкий бренд',
        duration: '5-6 Дней',
        priceUSD: '$6,900',
        priceEUR: '€6,350',
        priceGBP: '£5,400',
        included: [
          '6 немецких титановых имплантатов DXL',
          'Оптимальное распределение жевательной нагрузки',
          'Временная и постоянная циркониевая дуга',
          '5-звездочный отель люкс (5 ночей)',
          'VIP-трансфер из аэропорта и клиники',
          'Пожизненная гарантия на имплантаты',
        ],
      },
      {
        title: 'Пакет All-on-6 на Всю Челюсть (Straumann)',
        img: '/packages/pkg-3.webp',
        alt: 'Пакет имплантации All on 6 Straumann швейцарский бренд',
        duration: '5-6 Дней',
        priceUSD: '$8,900',
        priceEUR: '€8,200',
        priceGBP: '£6,980',
        included: [
          '6 швейцарских имплантатов Straumann Roxolid',
          'Официальный швейцарский паспорт Straumann',
          'Немедленный несъемный временный мост',
          'Постоянная многослойная циркониевая дуга',
          'Люкс в 5-звездочном отеле (5 ночей)',
          'Индивидуальный VIP-трансфер с шофёром',
        ],
      },
    ],
  },
};

export default function TreatmentPackagesSlider() {
  const locale = useLocale();
  const currentData = PACKAGES_DATA[locale] || PACKAGES_DATA.en;
  const [startIndex, setStartIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const visibleCount = 3;
  const maxStart = Math.max(0, currentData.packages.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : currentData.packages.length - 1));
  };

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev < currentData.packages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section aria-labelledby="packages-slider-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header with Side-by-Side Nav Buttons (Desktop) */}
        <div className={styles.carouselHeader}>
          <div className={styles.titleGroup}>
            <h2 id="packages-slider-heading" className={styles.heading}>
              {currentData.heading}
            </h2>
            <p className={styles.subText}>
              {currentData.subText}
            </p>
          </div>

          <div className={styles.navBtnGroup}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.navCircleBtn}
              aria-label="Previous packages"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className={styles.navCircleBtn}
              aria-label="Next packages"
            >
              ›
            </button>
          </div>
        </div>

        {/* Desktop Carousel Grid */}
        <div className={styles.grid}>
          {currentData.packages.slice(startIndex, startIndex + visibleCount).map((pkg, idx) => (
            <article key={`${startIndex}-${idx}`} className={`${styles.card} ${styles.fadeSlide}`}>
              <div>
                <h3 className={styles.header}>{pkg.title}</h3>

                <div className={styles.imgWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img key={pkg.img} src={pkg.img} alt={pkg.alt} loading="lazy" className={styles.packageImg} />
                </div>

                <div className={styles.duration}>
                  <span className="text-slate-500 font-medium">{currentData.durationLabel}</span>
                  <span className="text-slate-900 font-bold">{pkg.duration}</span>
                </div>

                <div className={styles.featuresTitle}>{currentData.includedLabel}</div>
                <ul className={styles.featuresList}>
                  {pkg.included.map((inc, i) => (
                    <li key={i}>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className={styles.priceBox}>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    {currentData.priceLabel}
                  </div>
                  <div className="text-2xl font-extrabold text-amber-400">{pkg.priceUSD}</div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    ({pkg.priceEUR} / {pkg.priceGBP})
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={styles.btn}
                  aria-label={`${currentData.quoteBtn} - ${pkg.title}`}
                >
                  {currentData.quoteBtn}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile 1-Card Carousel with Side Arrow Buttons */}
        <div className={styles.mobileContainer}>
          <div className={styles.mobileCardWrapper}>
            <button
              type="button"
              onClick={handleMobilePrev}
              className={`${styles.sideArrowBtn} ${styles.sideArrowLeft}`}
              aria-label="Previous package"
            >
              ‹
            </button>

            <div className={styles.mobileCardInner}>
              {(() => {
                const pkg = currentData.packages[mobileIndex];
                return (
                  <article key={mobileIndex} className={`${styles.card} ${styles.fadeSlide}`}>
                    <div>
                      <h3 className={styles.header}>{pkg.title}</h3>

                      <div className={styles.imgWrap}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          key={pkg.img}
                          src={pkg.img}
                          alt={pkg.alt}
                          loading="lazy"
                          className={styles.packageImg}
                        />
                      </div>

                      <div className={styles.duration}>
                        <span className="text-slate-500 font-medium">{currentData.durationLabel}</span>
                        <span className="text-slate-900 font-bold">{pkg.duration}</span>
                      </div>

                      <div className={styles.featuresTitle}>{currentData.includedLabel}</div>
                      <ul className={styles.featuresList}>
                        {pkg.included.map((inc, i) => (
                          <li key={i}>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className={styles.priceBox}>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                          {currentData.priceLabel}
                        </div>
                        <div className="text-2xl font-extrabold text-amber-400">{pkg.priceUSD}</div>
                        <div className="text-xs text-slate-300 mt-0.5">
                          ({pkg.priceEUR} / {pkg.priceGBP})
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className={styles.btn}
                        aria-label={`${currentData.quoteBtn} - ${pkg.title}`}
                      >
                        {currentData.quoteBtn}
                      </Link>
                    </div>
                  </article>
                );
              })()}
            </div>

            <button
              type="button"
              onClick={handleMobileNext}
              className={`${styles.sideArrowBtn} ${styles.sideArrowRight}`}
              aria-label="Next package"
            >
              ›
            </button>
          </div>

          {/* Mobile Dots */}
          <div className={styles.mobileDots}>
            {currentData.packages.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setMobileIndex(dotIdx)}
                aria-label={`Go to package ${dotIdx + 1}`}
                className={`${styles.dot} ${mobileIndex === dotIdx ? styles.dotActive : styles.dotInactive}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
