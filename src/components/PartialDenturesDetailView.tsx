'use client';

import React, { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import TreatmentDenturesRightTreatmentAccordion from '@/components/treatment-sections/TreatmentDenturesRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './PartialDenturesDetailView.module.css';

interface PackageItem {
  name: string;
  brand: string;
  duration: string;
  img: string;
  included: string[];
  price: { USD: string; EUR: string; GBP: string };
  popular?: boolean;
}

interface FaqItem {
  q: string;
  a: string[];
}

interface LocaleDictionary {
  packagesTitle: string;
  packagesSubtitle: string;
  mostPopularBadge: string;
  durationLabel: string;
  includedLabel: string;
  priceLabel: string;
  getQuoteBtn: string;
  packages: PackageItem[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
}

const DICTIONARIES: Record<string, LocaleDictionary> = {
  en: {
    packagesTitle: 'Partial Dentures Packages & Currency Calculator',
    packagesSubtitle: 'Cast metal framework, flexible Valplast nylon, and precision attachment partial dentures engineered for seamless blend with remaining natural teeth in Istanbul.',
    mostPopularBadge: 'Most Popular Choice',
    durationLabel: 'Procedure Time:',
    includedLabel: 'Package Inclusions:',
    priceLabel: 'Price (Per Arch):',
    getQuoteBtn: 'Get Your Free Quote',
    faqTitle: 'Frequently Asked Questions About Partial Dentures',
    faqSubtitle: 'Everything you need to know about partial dentures in Istanbul — from clasp invisibility and flexible comfort to chewing strength, speech adaptation, and hygiene.',
    packages: [
      {
        name: 'Cast Metal Framework (Chrome-Cobalt) Partial Denture',
        brand: 'Bego Wironit / Heraeus Kulzer Chrome Framework',
        duration: '4-5 Working Days (3 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        popular: true,
        included: [
          'Ultra-thin high-strength medical Chrome-Cobalt cast metal framework',
          'Precision cast clasps customized for non-visible anchor placement',
          'High wear-resistant composite teeth matched to existing tooth shade',
          'Master anatomical elastomer impression & surveyor design analysis',
          'Occlusal rest preparation for zero gum sinking & full bite support',
          'VIP Airport & Clinic Transfer included'
        ],
        price: { USD: '$590', EUR: '€540', GBP: '£470' }
      },
      {
        name: 'Valplast Flexible Nylon Invisible Clasp Partial Denture',
        brand: 'Valplast USA / Deflex Flexible Resin',
        duration: '4 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '100% metal-free, unbreakable thermoplastic nylon base',
          'Translucent gum-colored tissue-matched flexible retention clasps',
          'Hypoallergenic & biocompatible — ideal for metal-sensitive patients',
          'Ultra-lightweight featherweight fit with zero bulkiness',
          'Precision digital shade match to surrounding natural dentition',
          'VIP Airport & Clinic Transfer included'
        ],
        price: { USD: '$690', EUR: '€630', GBP: '£550' }
      },
      {
        name: 'Precision Attachment (Snap-Lock) Hidden Partial Denture',
        brand: 'Bredent Vario-Snap / Ceka Precision Attachment',
        duration: '5-6 Working Days (4 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          'Completely invisible connection — zero metal clasps visible when smiling',
          'Male/female precision friction locks hidden inside supporting crowns',
          'Includes 2x supporting aesthetic Zirconium / E-Max anchoring crowns',
          'Maximum chewing stability with rigid axial load distribution',
          'Easily removable for effortless daily cleaning and hygiene',
          '5-Year Quality Warranty & VIP Concierge support'
        ],
        price: { USD: '$1,150', EUR: '€1,050', GBP: '£920' }
      }
    ],
    faqs: [
      {
        q: 'What is a partial denture and when is it recommended?',
        a: [
          'A partial denture is a removable dental prosthesis designed to replace one or multiple missing teeth while preserving and utilizing your remaining healthy natural teeth as anchors.',
          'It prevents remaining teeth from shifting or drifting out of position, restores balanced chewing forces, and enhances smile aesthetics without requiring extensive invasive surgery.'
        ]
      },
      {
        q: 'What is the difference between Cast Metal, Flexible Valplast, and Precision Attachment partial dentures?',
        a: [
          'Cast Metal (Chrome-Cobalt) dentures offer the highest bite rigidity and longevity, resting on teeth via precision rests.',
          'Valplast Flexible dentures are lightweight, metal-free, and virtually invisible with pink gum-matched clasps.',
          'Precision Attachment dentures use micro-locks hidden inside crowns, eliminating all visible metal clasps completely for supreme cosmetic results.'
        ]
      },
      {
        q: 'How long does it take to make partial dentures in Istanbul?',
        a: [
          'Custom partial dentures are completed in 4 to 6 working days across 2 to 4 clinic appointments, including surveyor analysis, framework try-in, and final bite adjustment.'
        ]
      }
    ]
  },
  tr: {
    packagesTitle: 'Bölümlü (Parsiyel) Diş Protezi Paketleri & Para Birimi Hesaplayıcı',
    packagesSubtitle: 'Döküm metal iskeletli, Valplast esnek naylon ve hassas tutuculu (çıtçıtlı) bölümlü protezler ile İstanbul’da mevcut dişlerle kusursuz uyum ve estetik.',
    mostPopularBadge: 'En Çok Tercih Edilen',
    durationLabel: 'Tedavi Süresi:',
    includedLabel: 'Paket Kapsamı:',
    priceLabel: 'Fiyat (Çene Başına):',
    getQuoteBtn: 'Ücretsiz Teklif Alın',
    faqTitle: 'Bölümlü (Parsiyel) Protezler Hakkında Sıkça Sorulan Sorular',
    faqSubtitle: 'İstanbul’da bölümlü kancalı ve çıtçıtlı protezler hakkında bilmeniz gerekenler: kancasız estetik, Valplast esneklik, çiğneme dengesi ve bakım.',
    packages: [
      {
        name: 'Döküm Metal İskeletli (Krom-Kobalt) Bölümlü Protez',
        brand: 'Bego Wironit / Heraeus Kulzer Krom İskelet',
        duration: '4-5 İş Günü (3 Randevu)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        popular: true,
        included: [
          'İnce, kırılmaz medikal Krom-Kobalt döküm metal ana iskelet',
          'Mevcut dişleri saran ve görünmeyen bölgelere gizlenen kroşeler (kancalar)',
          'Kendi doğal diş renginizle birebir eşleşen kompozit dişler',
          'Master elastomerik ölçü ve paralelometre analizli tasarım',
          'Diş etine baskıyı engelleyen tırnak (rest) destek sistemi',
          'VIP Havalimanı ve Klinik Transferleri dahil'
        ],
        price: { USD: '$590', EUR: '€540', GBP: '£470' }
      },
      {
        name: 'Valplast Esnek Naylon (Kancasız/Görünmez) Bölümlü Protez',
        brand: 'Valplast USA / Deflex Esnek Termoplastik',
        duration: '4 İş Günü (2 Randevu)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '%100 metalsiz, kırılmaya dayanıklı esnek termoplastik gövde',
          'Diş eti renginde pembe doku uyumlu esnek tutucu tırnaklar',
          'Alerji yapmayan biyouyumlu yapı (Metal alerjisi olanlara ideal)',
          'Ağızda ağırlık hissettirmeyen ultra hafif ve konforlu kullanım',
          'Kendi dişlerinizle kusursuz renk ve estetik geçiş',
          'VIP Havalimanı ve Klinik Transferleri dahil'
        ],
        price: { USD: '$690', EUR: '€630', GBP: '£550' }
      },
      {
        name: 'Hassas Tutuculu (Çıtçıtlı / Gizli Kilitli) Bölümlü Protez',
        brand: 'Bredent Vario-Snap / Ceka Hassas Tutucu',
        duration: '5-6 İş Günü (4 Randevu)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          'Gülüş anında hiçbir metal kanca görünmeyen %100 gizli bağlantı',
          'Destek kronların içine gömülü erkek/dişi kilit mekanizması',
          '2 adet estetik Zirkonyum / E-Max destek kron pakete dahil',
          'Kuvvetli çiğneme stabilitesi ve oynamayan rijit tutuculuk',
          'Temizlik için kolayca takılıp çıkarılabilen konforlu tasarım',
          '5 Yıl Kalite Garantisi ve VIP Konsiyerj hizmeti'
        ],
        price: { USD: '$1,150', EUR: '€1,050', GBP: '£920' }
      }
    ],
    faqs: [
      {
        q: 'Bölümlü (parsiyel) protez nedir ve ne zaman uygulanır?',
        a: [
          'Bölümlü protez, ağızda henüz sağlam doğal dişler varken birden fazla eksik dişi tamamlamak için yapılan hareketli protezdir.',
          'Mevcut dişlerin boşluğa devrilmesini önler, çiğnemeyi dengeler ve estetik bir gülüş sağlar.'
        ]
      },
      {
        q: 'Döküm iskeletli, Valplast ve Çıtçıtlı protez arasındaki fark nedir?',
        a: [
          'Döküm metal protezler çiğneme kuvvetine en dayanıklı olanlardır ve metal kancalarla tutunur.',
          'Valplast protezler metalsiz, esnek ve diş eti renginde kancalara sahiptir.',
          'Çıtçıtlı (hassas tutuculu) protezlerde ise kanca tamamen kaldırılıp porselen kaplamaların içine gizlenmiş kilitler kullanılır; dışarıdan asla protez olduğu anlaşılmaz.'
        ]
      }
    ]
  },
  de: {
    packagesTitle: 'Teilprothesen-Pakete & Währungsrechner',
    packagesSubtitle: 'Modellgussprothesen, flexible Valplast-Nylonprothesen und Geschiebeprothesen für perfekten Halt und Ästhetik in Istanbul.',
    mostPopularBadge: 'Beliebteste Wahl',
    durationLabel: 'Behandlungsdauer:',
    includedLabel: 'Paketleistungen:',
    priceLabel: 'Preis (Pro Kiefer):',
    getQuoteBtn: 'Kostenloses Angebot anfordern',
    faqTitle: 'Häufig gestellte Fragen zu Teilprothesen',
    faqSubtitle: 'Alles Wissenswerte über Teilprothesen in Istanbul – von unsichtbaren Halteelementen bis hin zu Valplast-Flexibilität und Kaukraft.',
    packages: [
      {
        name: 'Modellguss-Teilprothese (Chrom-Cobalt-Gerüst)',
        brand: 'Bego Wironit / Heraeus Kulzer',
        duration: '4-5 Werktage (3 Sitzungen)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        popular: true,
        included: [
          'Ultradünnes bruchfestes Chrom-Cobalt-Metallgerüst',
          'Individuell angepasste Halte- und Stützelemente (Klammern)',
          'Hochwertige Abrasionsresistente Zähne im Farbton der Nachbarzähne',
          'Präzise Funktionsabformung und Vermessung im Parallelometer',
          'Auflagen zur parodontalen Krafteinleitung ohne Zahnfleischreizung',
          'Inklusive VIP-Transfer Flughafen und Klinik'
        ],
        price: { USD: '$590', EUR: '€540', GBP: '£470' }
      },
      {
        name: 'Valplast Flexible Nylon-Teilprothese (Klammerfrei/Unsichtbar)',
        brand: 'Valplast USA / Deflex',
        duration: '4 Werktage (2 Sitzungen)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '100% metallfreie, unzerbrechliche thermoplastische Basis',
          'Zahnfleischfarbene flexible Halteelemente ohne sichtbares Metall',
          'Biokompatibel & hypoallergen für Patienten mit Metallallergie',
          'Federleichtes Tragegefühl ohne Druckstellen',
          'Natürliche Transluzenz und harmonischer Übergang zu Restzähnen',
          'Inklusive VIP-Transfer Flughafen und Klinik'
        ],
        price: { USD: '$690', EUR: '€630', GBP: '£550' }
      },
      {
        name: 'Geschiebeprothese (Unsichtbare Riegelverankerung)',
        brand: 'Bredent Vario-Snap / Ceka Präzisionsgeschiebe',
        duration: '5-6 Werktage (4 Sitzungen)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '100% unsichtbare Verankerung ohne sichtbare Klammern beim Lächeln',
          'Präzisionsgeschiebe in Ankerkronen integriert',
          'Inklusive 2x hochästhetische Zirkon-/E-Max-Ankerkronen',
          'Hervorragende Stabilität und fester Halt beim Kauen',
          'Einfach herausnehmbar für die tägliche Mundhygiene',
          '5 Jahre Qualitätsgarantie und VIP-Service'
        ],
        price: { USD: '$1,150', EUR: '€1,050', GBP: '£920' }
      }
    ],
    faqs: [
      {
        q: 'Was ist eine Teilprothese und wann wird sie eingesetzt?',
        a: [
          'Eine Teilprothese schließt Lücken im Gebiss, wenn noch gesunde eigene Zähne als Pfeiler vorhanden sind.',
          'Sie verhindert Zahnwanderungen und stellt Kaukraft und Ästhetik zuverlässig wieder her.'
        ]
      }
    ]
  },
  pl: {
    packagesTitle: 'Pakiety Protez Częściowych i Przelicznik Walut',
    packagesSubtitle: 'Protezy szkieletowe, elastyczne Valplast oraz protezy na zatrzaski precyzyjne zapewniające doskonały wygląd i stabilność w Stambule.',
    mostPopularBadge: 'Najpopularniejszy Wybór',
    durationLabel: 'Czas Zabiegu:',
    includedLabel: 'Zawartość Pakietu:',
    priceLabel: 'Cena (Za Łuk):',
    getQuoteBtn: 'Uzyskaj Bezpłatną Wycenę',
    faqTitle: 'Często Zadawane Pytania o Protezy Częściowe',
    faqSubtitle: 'Wszystko o protezach częściowych w Stambule: klamry estetyczne, elastyczność Valplast i zamki precyzyjne.',
    packages: [
      {
        name: 'Proteza Szkieletowa Metalowa (Chrom-Kobalt)',
        brand: 'Bego Wironit / Heraeus Kulzer',
        duration: '4-5 Dni Roboczych (3 Wizyty)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        popular: true,
        included: [
          'Cienki, niełamliwy szkielet z medycznego stopu chromo-kobaltu',
          'Precyzyjnie dogięte klamry ukryte w strefach bocznych',
          'Zęby kompozytowe dobrane do koloru zębów naturalnych',
          'Wycisk elastomerowy i analiza w paralelometrze',
          'Wypustki okluzyjne chroniące dziąsła przed uciskiem',
          'Transfery VIP Lotnisko i Klinika w cenie'
        ],
        price: { USD: '$590', EUR: '€540', GBP: '£470' }
      },
      {
        name: 'Elastyczna Proteza Nylonowa Valplast (Bezklamrowa)',
        brand: 'Valplast USA / Deflex',
        duration: '4 Dni Roboczych (2 Wizyty)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '100% bezmetalowa, niełamliwa baza termoplastyczna',
          'Różowe klamry w kolorze dziąsła niewidoczne podczas uśmiechu',
          'Hipoalergiczny materiał idealny dla alergików',
          'Ultralekka i komfortowa w codziennym użytkowaniu',
          'Idealne dopasowanie koloru do własnego uzębienia',
          'Transfery VIP Lotnisko i Klinika w cenie'
        ],
        price: { USD: '$690', EUR: '€630', GBP: '£550' }
      },
      {
        name: 'Proteza Bezklamrowa na Zatrzaskach Precyzyjnych',
        brand: 'Bredent Vario-Snap / Ceka',
        duration: '5-6 Dni Roboczych (4 Wizyty)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          'Całkowicie niewidoczne połączenie bez metalowych klamer',
          'Mikrozamki precyzyjne ukryte wewnątrz koron filarowych',
          'Pakiet zawiera 2x korony z cyrkonu lub E-Max podtrzymujące zatrzaski',
          'Maksymalna stabilność podczas gryzienia twardych pokarmów',
          'Łatwe wyjmowanie do codziennej higieny',
          '5 Lat Gwarancji Jakości i wsparcie VIP Concierge'
        ],
        price: { USD: '$1,150', EUR: '€1,050', GBP: '£920' }
      }
    ],
    faqs: [
      {
        q: 'Czym jest proteza częściowa i kiedy jest zalecana?',
        a: [
          'Proteza częściowa uzupełnia brak kilku zębów, wykorzystując pozostałe zdrowe zęby jako filary podtrzymujące.',
          'Zapobiega przechylaniu się zębów sąsiednich i przywraca naturalny uśmiech.'
        ]
      }
    ]
  },
  pt: {
    packagesTitle: 'Pacotes de Próteses Parciais & Calculadora de Moeda',
    packagesSubtitle: 'Próteses esqueléticas metálicas, nylon flexível Valplast e próteses com encaixes de precisão em Istambul.',
    mostPopularBadge: 'Mais Popular',
    durationLabel: 'Tempo de Procedimento:',
    includedLabel: 'Inclusões do Pacote:',
    priceLabel: 'Preço (Por Arcada):',
    getQuoteBtn: 'Pedir Orçamento Grátis',
    faqTitle: 'Perguntas Frequentes sobre Próteses Parciais',
    faqSubtitle: 'Tudo sobre próteses parciais em Istambul: grampos estéticos, flexibilidade Valplast e encaixes invisíveis.',
    packages: [
      {
        name: 'Prótese Parcial Esquelética (Cromo-Cobalto)',
        brand: 'Bego Wironit / Heraeus Kulzer',
        duration: '4-5 Dias Úteis (3 Consultas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        popular: true,
        included: [
          'Estrutura metálica ultrafina em Cromo-Cobalto de alta resistência',
          'Grampos fundidos desenhados para máxima discrição estética',
          'Dentes compostos de alta resistência adaptados à cor natural',
          'Moldagem de precisão com análise em paralelómetro',
          'Apoios oclusais para transmissão ideal das forças mastigatórias',
          'Transfers VIP Aeroporto e Clínica incluídos'
        ],
        price: { USD: '$590', EUR: '€540', GBP: '£470' }
      },
      {
        name: 'Prótese Parcial Flexível Valplast (Invisível)',
        brand: 'Valplast USA / Deflex',
        duration: '4 Dias Úteis (2 Consultas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          'Base termoplástica 100% sem metal e inquebrável',
          'Grampos flexíveis na cor da gengiva completamente invisíveis',
          'Hipoalergénica e biocompatível',
          'Ajuste ultraleve sem sensação de peso',
          'Excelente integração estética com a dentição natural',
          'Transfers VIP Aeroporto e Clínica incluídos'
        ],
        price: { USD: '$690', EUR: '€630', GBP: '£550' }
      },
      {
        name: 'Prótese com Encaixes de Precisão (Sem Grampos)',
        brand: 'Bredent Vario-Snap / Ceka',
        duration: '5-6 Dias Úteis (4 Consultas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          'Fixação 100% invisível sem qualquer grampo visível ao sorrir',
          'Encaixes de precisão ocultos no interior de coroas dentárias',
          'Inclui 2x coroas de Zircónia/E-Max para suporte dos encaixes',
          'Máxima estabilidade e conforto ao mastigar',
          'Fácil remoção para limpeza diária',
          '5 Anos de Garantia Clínica e Assistência VIP'
        ],
        price: { USD: '$1,150', EUR: '€1,050', GBP: '£920' }
      }
    ],
    faqs: [
      {
        q: 'O que é uma prótese parcial e quando é indicada?',
        a: [
          'Substitui dentes perdidos quando ainda existem dentes naturais saudáveis para retenção e apoio.',
          'Impede a migração dos dentes vizinhos e restabelece a função mastigatória.'
        ]
      }
    ]
  },
  es: {
    packagesTitle: 'Paquetes de Prótesis Parciales y Conversor de Divisas',
    packagesSubtitle: 'Prótesis esqueléticas de cromo-cobalto, nylon flexible Valplast y prótesis con ataches de precisión en Estambul.',
    mostPopularBadge: 'Opción Más Popular',
    durationLabel: 'Tiempo de Tratamiento:',
    includedLabel: 'Incluido en el Paquete:',
    priceLabel: 'Precio (Por Arcada):',
    getQuoteBtn: 'Solicitar Presupuesto Gratis',
    faqTitle: 'Preguntas Frecuentes sobre Prótesis Parciales',
    faqSubtitle: 'Todo lo que necesita saber sobre prótesis parciales en Estambul: ganchos invisibles, flexibilidad Valplast y ataches.',
    packages: [
      {
        name: 'Prótesis Parcial Esquelética Metálica (Cromo-Cobalto)',
        brand: 'Bego Wironit / Heraeus Kulzer',
        duration: '4-5 Días Laborables (3 Citas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        popular: true,
        included: [
          'Estructura metálica ultrafina en Cromo-Cobalto de máxima resistencia',
          'Retenedores colados diseñados para mínima visibilidad',
          'Dientes estéticos adaptados al tono de sus dientes naturales',
          'Impresión de precisión con análisis en paralelómetro',
          'Apoyos oclusales para distribuir la fuerza masticatoria',
          'Traslados VIP Aeropuerto y Clínica incluidos'
        ],
        price: { USD: '$590', EUR: '€540', GBP: '£470' }
      },
      {
        name: 'Prótesis Parcial Flexible Valplast (Ganchos Invisibles)',
        brand: 'Valplast USA / Deflex',
        duration: '4 Días Laborables (2 Citas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          'Base termoplástica 100% libre de metal e irrompible',
          'Ganchos flexibles en color encía totalmente disimulados',
          'Hipoalergénica y biocompatible',
          'Ajuste ultraligero y gran comodidad de uso',
          'Integración natural con las piezas dentales restantes',
          'Traslados VIP Aeropuerto y Clínica incluidos'
        ],
        price: { USD: '$690', EUR: '€630', GBP: '£550' }
      },
      {
        name: 'Prótesis Parcial con Ataches de Precisión (Sin Ganchos)',
        brand: 'Bredent Vario-Snap / Ceka',
        duration: '5-6 Días Laborables (4 Citas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          'Fijación 100% invisible sin ganchos metálicos al sonreír',
          'Microanclajes de fricción ocultos en coronas de soporte',
          'Incluye 2x coronas de Circonio/E-Max de anclaje',
          'Excelente estabilidad y firmeza al masticar',
          'Fácilmente removible para una higiene óptima',
          '5 Años de Garantía Clínica y Asistencia VIP'
        ],
        price: { USD: '$1,150', EUR: '€1,050', GBP: '£920' }
      }
    ],
    faqs: [
      {
        q: '¿Qué es una prótesis dental parcial y cuándo se recomienda?',
        a: [
          'Restaura piezas dentales ausentes apoyándose en los dientes naturales sanos restantes.',
          'Evita que los dientes vecinos se desplacen y devuelve una masticación equilibrada.'
        ]
      }
    ]
  },
  ru: {
    packagesTitle: 'Пакеты частичных съемных протезов и конвертер валют',
    packagesSubtitle: 'Бюгельные протезы, гибкий нейлон Valplast и протезы на замковых креплениях (аттачменах) в Стамбуле.',
    mostPopularBadge: 'Самый популярный выбор',
    durationLabel: 'Срок изготовления:',
    includedLabel: 'Что входит в пакет:',
    priceLabel: 'Цена (за челюсть):',
    getQuoteBtn: 'Получить бесплатный расчет',
    faqTitle: 'Часто задаваемые вопросы о частичных протезах',
    faqSubtitle: 'Все о частичных съемных протезах в Стамбуле: невидимые кламмеры, нейлон Valplast и замковые крепления.',
    packages: [
      {
        name: 'Бюгельный протез на металлическом каркасе (хром-кобальт)',
        brand: 'Bego Wironit / Heraeus Kulzer',
        duration: '4-5 рабочих дней (3 визита)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        popular: true,
        included: [
          'Ультратонкий литой дуговой каркас из медицинского хром-кобальта',
          'Анатомические литые кламмеры, скрытые в боковых зонах',
          'Высокопрочные композитные зубы в тон натуральных зубов',
          'Прецизионный оттиск и параллелометрический анализ',
          'Окклюзионные накладки для разгрузки десны',
          'VIP-трансфер из аэропорта и клиники включен'
        ],
        price: { USD: '$590', EUR: '€540', GBP: '£470' }
      },
      {
        name: 'Гибкий нейлоновый протез Valplast (без видимых кламмеров)',
        brand: 'Valplast USA / Deflex',
        duration: '4 рабочих дня (2 визита)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '100% безметалловый небьющийся термопластичный базис',
          'Кламмеры цвета десны, абсолютно незаметные при улыбке',
          'Гипоаллергенный биосовместимый состав',
          'Легкий и мягкий материал без ощущения тяжести',
          'Естественная прозрачность и слияние со своими зубами',
          'VIP-трансфер из аэропорта и клиники включен'
        ],
        price: { USD: '$690', EUR: '€630', GBP: '£550' }
      },
      {
        name: 'Протез на замковых креплениях (аттачменах / без кламмеров)',
        brand: 'Bredent Vario-Snap / Ceka',
        duration: '5-6 рабочих дней (4 визита)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '100% скрытая фиксация без металлических крючков',
          'Микрозамки, спрятанные внутри опорных коронок',
          'Включает 2 опорные коронки из циркония или E-Max',
          'Максимальная устойчивость и комфорт при жевании',
          'Легко снимается для ежедневной гигиены',
          '5 лет гарантии качества и VIP-сопровождение'
        ],
        price: { USD: '$1,150', EUR: '€1,050', GBP: '£920' }
      }
    ],
    faqs: [
      {
        q: 'Что такое частичный съемный протез и когда он показан?',
        a: [
          'Частичный съемный протез восполняет утрату нескольких зубов, опираясь на сохранившиеся здоровые зубы.',
          'Он предотвращает смещение зубного ряда и восстанавливает эстетичную улыбку.'
        ]
      }
    ]
  }
};

export default function PartialDenturesDetailView() {
  const locale = useLocale();
  const dict = DICTIONARIES[locale] || DICTIONARIES.en;

  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [mobileIndex, setMobileIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? dict.packages.length - 1 : prev - 1));
  };

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev === dict.packages.length - 1 ? 0 : prev + 1));
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <TreatmentDenturesRightTreatmentAccordion />
      <TreatmentJourneySimpleSection />
      <TreatmentServicesIncludedSection />
      <TreatmentPatientReelsSection />
      <TreatmentBeforeAfterSliderSection />

      {/* Packages Section */}
      <section aria-labelledby="packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="packages-heading" className={styles.packagesTitle}>
              {dict.packagesTitle}
            </h2>
            <p className={styles.packagesSubtitle}>{dict.packagesSubtitle}</p>

            <div className={styles.currencyToggle}>
              {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  className={`${styles.currBtn} ${currency === curr ? styles.currBtnActive : ''}`}
                >
                  {curr === 'USD' ? '$ USD' : curr === 'EUR' ? '€ EUR' : '£ GBP'}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Slider */}
          <div className={styles.sliderOuter}>
            <button
              type="button"
              onClick={handlePrev}
              className={`${styles.arrowBtn} ${styles.arrowLeft}`}
              aria-label="Previous packages"
            >
              ‹
            </button>

            <div ref={sliderRef} className={styles.packagesGrid}>
              {dict.packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`${styles.packageCard} ${pkg.popular ? styles.popularCard : ''}`}
                >
                  {pkg.popular && (
                    <div className={styles.badge}>{dict.mostPopularBadge}</div>
                  )}

                  <div className={styles.cardHeader}>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <p className={styles.packageBrand}>{pkg.brand}</p>
                  </div>

                  <div className={styles.durationRow}>
                    <span className={styles.durationLabel}>{dict.durationLabel}</span>
                    <span className={styles.durationValue}>{pkg.duration}</span>
                  </div>

                  <div className={styles.inclusionsBox}>
                    <p className={styles.inclusionsTitle}>{dict.includedLabel}</p>
                    <ul className={styles.inclusionsList}>
                      {pkg.included.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.priceRow}>
                    <div>
                      <span className={styles.priceLabel}>{dict.priceLabel}</span>
                      <p className={styles.priceValue}>{pkg.price[currency]}</p>
                    </div>
                    <a href="#contact" className={styles.quoteBtn}>
                      {dict.getQuoteBtn}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className={`${styles.arrowBtn} ${styles.arrowRight}`}
              aria-label="Next packages"
            >
              ›
            </button>
          </div>

          {/* Mobile Carousel */}
          <div className={styles.mobileCarousel}>
            <div className={styles.mobileCardWrapper}>
              {(() => {
                const pkg = dict.packages[mobileIndex];
                return (
                  <div
                    className={`${styles.packageCard} ${pkg.popular ? styles.popularCard : ''}`}
                  >
                    {pkg.popular && (
                      <div className={styles.badge}>{dict.mostPopularBadge}</div>
                    )}

                    <div className={styles.cardHeader}>
                      <h3 className={styles.packageName}>{pkg.name}</h3>
                      <p className={styles.packageBrand}>{pkg.brand}</p>
                    </div>

                    <div className={styles.durationRow}>
                      <span className={styles.durationLabel}>{dict.durationLabel}</span>
                      <span className={styles.durationValue}>{pkg.duration}</span>
                    </div>

                    <div className={styles.inclusionsBox}>
                      <p className={styles.inclusionsTitle}>{dict.includedLabel}</p>
                      <ul className={styles.inclusionsList}>
                        {pkg.included.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.priceRow}>
                      <div>
                        <span className={styles.priceLabel}>{dict.priceLabel}</span>
                        <p className={styles.priceValue}>{pkg.price[currency]}</p>
                      </div>
                      <a href="#contact" className={styles.quoteBtn}>
                        {dict.getQuoteBtn}
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className={styles.mobileControls}>
              <button
                type="button"
                onClick={handleMobilePrev}
                className={styles.mobileArrow}
                aria-label="Previous package"
              >
                ‹
              </button>
              <span className={styles.mobilePageIndicator}>
                {mobileIndex + 1} / {dict.packages.length}
              </span>
              <button
                type="button"
                onClick={handleMobileNext}
                className={styles.mobileArrow}
                aria-label="Next package"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <TreatmentReviewsSection />

      {/* FAQs Section */}
      <section aria-labelledby="faq-heading" className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <h2 id="faq-heading" className={styles.faqTitle}>
              {dict.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{dict.faqSubtitle}</p>
          </div>

          <div className={styles.faqList}>
            {dict.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className={styles.faqQuestion}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      {faq.a.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="Partial Dentures" />
      </div>
    </>
  );
}
