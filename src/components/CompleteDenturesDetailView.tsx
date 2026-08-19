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
import styles from './CompleteDenturesDetailView.module.css';

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
    packagesTitle: 'Complete Dentures Packages & Currency Calculator',
    packagesSubtitle: 'High-impact acrylic, Ivoclar Vivodent aesthetic, and BPS biofunctional full arch dentures crafted for superior suction, comfort, and natural aesthetics in Antalya.',
    mostPopularBadge: 'Most Popular Choice',
    durationLabel: 'Procedure Time:',
    includedLabel: 'Package Inclusions:',
    priceLabel: 'Price (Per Jaw):',
    getQuoteBtn: 'Get Your Free Quote',
    faqTitle: 'Frequently Asked Questions About Complete Dentures',
    faqSubtitle: 'Everything you need to know about full dentures in Antalya — from custom suction fitting and bite registration to speech adaptation, maintenance, and eating comfort.',
    packages: [
      {
        name: 'Premium High-Impact Acrylic Complete Denture',
        brand: 'Lucitone 199 / Candulor High-Density Base',
        duration: '4-5 Working Days (3 Visits)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          'Full arch custom high-impact acrylic base with natural gum tinting',
          'Triple-layer high wear-resistant multilayer synthetic teeth (14 teeth)',
          'Precision anatomical border molding & secondary master impression',
          'Wax rim bite registration and personalized aesthetic tooth try-in',
          'Soft relining adjustment & initial occlusion balancing visit',
          'VIP Airport & Clinic Transfer included'
        ],
        price: { USD: '$650', EUR: '€590', GBP: '£520' }
      },
      {
        name: 'Dual Arch Complete Smile Rehabilitation Set',
        brand: 'Ivoclar Vivodent S PE / Lucitone Dual Arch',
        duration: '5-6 Working Days (4 Visits)',
        img: '/packages/pkg-5.webp',
        included: [
          'Complete Upper & Lower full dentures for synchronized bite alignment',
          'Ivoclar Vivodent S PE pearlized life-like aesthetic teeth (28 teeth)',
          'Digital facial harmony mapping & phonetic smile analysis',
          'Custom lingualized occlusion scheme for maximum chewing stability',
          'Comprehensive post-insertion bite calibration & pressure spot relief',
          'VIP Airport Transfer + 4-Star Hotel package option'
        ],
        price: { USD: '$1,190', EUR: '€1,090', GBP: '£950' }
      },
      {
        name: 'BPS Biofunctional 3D CAD/CAM Milled Full Denture',
        brand: 'Ivoclar BPS (Biofunctional Prosthetic System)',
        duration: '5 Working Days (3 Visits)',
        img: '/packages/pkg-6.webp',
        included: [
          'Computer-milled monolithic high-density resin base (Zero shrinkage)',
          'Gnathometer M intraoral Gothic arch tracer for exact TMJ registration',
          'Ultra-high suction border seal engineered for flat mandibular ridges',
          'Stain-resistant nano-hybrid composite teeth with natural luminescence',
          'Digital backup scan stored for lifetime 24-hour exact re-milling',
          '5-Year Clinic Quality Warranty & VIP Concierge support'
        ],
        price: { USD: '$890', EUR: '€820', GBP: '£720' }
      }
    ],
    faqs: [
      {
        q: 'What are complete dentures and who are they suitable for?',
        a: [
          'Complete dentures (also known as full dentures) are removable prosthetic appliances designed to replace all natural teeth in an entire dental arch (upper jaw, lower jaw, or both).',
          'They are recommended for fully edentulous patients who have lost all teeth due to severe periodontal disease, extensive decay, or age-related trauma, restoring full facial support, lip fullness, speech clarity, and chewing ability.'
        ]
      },
      {
        q: 'How do complete dentures stay in place without implants?',
        a: [
          'Upper complete dentures rely primarily on atmospheric suction and the natural thin layer of saliva between the acrylic base and the hard palate.',
          'Lower dentures rest on the mandibular residual alveolar ridge, guided by tongue and cheek musculature. Precision anatomical border molding during our clinic impressions creates an airtight peripheral seal that maximizes natural suction and stability.'
        ]
      },
      {
        q: 'How long does it take to make complete dentures in Antalya?',
        a: [
          'At Master Smile Studio, custom complete dentures are completed in 4 to 6 working days across 3 to 4 clinical stages: primary impressions, wax rim bite registration and shade matching, aesthetic wax try-in, and final insertion with occlusion fine-tuning.'
        ]
      },
      {
        q: 'Will complete dentures look natural?',
        a: [
          'Yes. We use premium multi-layered aesthetic teeth (such as Ivoclar Vivodent) and micro-characterized gingival acrylic that matches natural blood vessel striations, translucency, and individual lip lines. No "piano key" artificial looks.'
        ]
      },
      {
        q: 'Can I eat normally with full complete dentures?',
        a: [
          'During the initial 1 to 2 weeks, we advise soft foods (eggs, pasta, steamed vegetables) while chewing on both sides simultaneously to distribute bite pressure evenly. As facial muscles adapt, patients comfortably transition to firmer everyday meals.'
        ]
      },
      {
        q: 'How should I clean and care for my complete dentures at night?',
        a: [
          'Dentures should be cleaned daily using a soft denture brush and specialized non-abrasive denture cleanser (never standard abrasive toothpaste). At night, remove them and soak in clean water or mild antiseptic solution to give gum tissues time to breathe.'
        ]
      }
    ]
  },
  tr: {
    packagesTitle: 'Tam Protez (Total Diş) Paketleri & Para Birimi Hesaplayıcı',
    packagesSubtitle: 'Yüksek darbe dirençli akrilik, Ivoclar Vivodent estetiği ve BPS biyofonksiyonel tam çene protezleri ile Antalya’da güçlü vakum tutuculuğu ve doğal gülüş estetiği.',
    mostPopularBadge: 'En Çok Tercih Edilen',
    durationLabel: 'Tedavi Süresi:',
    includedLabel: 'Paket Kapsamı:',
    priceLabel: 'Fiyat (Çene Başına):',
    getQuoteBtn: 'Ücretsiz Teklif Alın',
    faqTitle: 'Tam Diş Protezleri Hakkında Sıkça Sorulan Sorular',
    faqSubtitle: 'Antalya’da tam damak protezleri hakkında merak edilen her şey: vakum tutuculuğu, ısırma kaydı, konuşma adaptasyonu, gece bakımı ve beslenme konforu.',
    packages: [
      {
        name: 'Premium Yüksek Dirençli Akrilik Tam Protez',
        brand: 'Lucitone 199 / Candulor Yüksek Yoğunluklu Kaide',
        duration: '4-5 İş Günü (3 Randevu)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          'Kişiye özel damar efektli ve doğal diş eti pembelemeli akrilik kaide',
          '3 katmanlı aşınmaya dayanıklı çok tonlu estetik dişler (14 diş)',
          'Hassas anatomik sınır şekillendirme ve master ölçü aşaması',
          'Mum şablon ile dikey boyut tespiti ve prova seansı',
          'Yumuşak astar uyumlama ve ilk kapanış dengeleme randevusu',
          'VIP Havalimanı ve Klinik Transferleri dahil'
        ],
        price: { USD: '$650', EUR: '€590', GBP: '£520' }
      },
      {
        name: 'Çift Çene Tam Gülüş Rehabilitasyon Seti',
        brand: 'Ivoclar Vivodent S PE / Lucitone Çift Çene',
        duration: '5-6 İş Günü (4 Randevu)',
        img: '/packages/pkg-5.webp',
        included: [
          'Kusursuz kapanış uyumu için eş zamanlı Üst & Alt tam protez seti',
          'Ivoclar Vivodent S PE sedefli yüksek estetik dişler (28 diş)',
          'Dijital yüz uyum haritalaması ve fonetik gülüş analizi',
          'Çiğneme stabilitesini artıran lingualize oklüzyon dizilimi',
          'Detaylı teslim sonrası vuruk alma ve çiğneme optimizasyonu',
          'VIP Transfer + 4 Yıldızlı Otel konaklama opsiyonu'
        ],
        price: { USD: '$1,190', EUR: '€1,090', GBP: '£950' }
      },
      {
        name: 'BPS Biyofonksiyonel 3D CAD/CAM Freze Tam Protez',
        brand: 'Ivoclar BPS (Biyofonksiyonel Protez Sistemi)',
        duration: '5 İş Günü (3 Randevu)',
        img: '/packages/pkg-6.webp',
        included: [
          'Bilgisayarlı bloktan sıfır çekme payı ile frezelenen monolitik gövde',
          'Gnathometer M ağız içi Gotik Ark çene eklemi hareket kaydı',
          'Düz alt çene kemiklerinde dahi maksimum vakum tutuculuğu',
          'Leke tutmayan nano-hibrit kompozit doğal lüminesans dişler',
          'Ömür boyu 24 saatte yeniden üretilebilen dijital arşiv kaydı',
          '5 Yıl Klinik Kalite Garantisi ve VIP Konsiyerj hizmeti'
        ],
        price: { USD: '$890', EUR: '€820', GBP: '£720' }
      }
    ],
    faqs: [
      {
        q: 'Tam protez nedir ve kimler için uygundur?',
        a: [
          'Tam protez (halk arasında total protez veya tam damak), bir çenedeki tüm doğal dişlerini kaybetmiş hastalar için üretilen hareketli protez aygıtıdır.',
          'Tüm dişlerin çekilmek zorunda kalındığı durumlarda dudak ve yanak dolgunluğunu geri kazandırır, konuşmayı düzeltir ve çiğneme fonksiyonunu yeniden sağlar.'
        ]
      },
      {
        q: 'Tam protezler implantsız ağızda nasıl durur ve tutunur?',
        a: [
          'Üst tam protezler damak dokusu ile protez kaidesi arasındaki hava sızdırmazlığı ve tükürük tabakasının oluşturduğu negatif vakum basıncı sayesinde tutunur.',
          'Alt protezler ise çene kretine oturur ve dudak-dil kaslarının dengesiyle yerinde kalır. Kliniğimizde yapılan anatomik kenar şekillendirmesi vakum kuvvetini en üst düzeye çıkarır.'
        ]
      },
      {
        q: 'Antalya’da tam protez yapımı kaç gün sürer?',
        a: [
          'Master Smile Studio’da tam protez tedavisi ortalama 4 ila 6 iş günü içerisinde tamamlanır. Bu süreçte anatomik ölçü, dikey boyut kaydı, mumlu diş provası ve son teslim aşamaları titizlikle gerçekleştirilir.'
        ]
      },
      {
        q: 'Tam protez yapay görünür mü?',
        a: [
          'Hayır. Kliniğimizde Ivoclar gibi premium çok katmanlı, ışık geçirgenliğine sahip doğal dişler ve damar efektli pembe akrilik kaideler kullanılır. Bembeyaz tek düze yapay bir görüntü kesinlikle oluşmaz.'
        ]
      },
      {
        q: 'Tam protezle yemek yemek zor mudur?',
        a: [
          'İlk 1-2 haftalık alışma evresinde yumuşak gıdalarla başlanması ve her iki tarafla dengeli çiğneme yapılması önerilir. Ağız kasları protezi kontrol etmeyi öğrendikçe normal beslenmeye rahatça geçilir.'
        ]
      },
      {
        q: 'Tam protezlerin gece bakımı ve temizliği nasıl olmalıdır?',
        a: [
          'Protezler her gün özel protez fırçası ve aşındırıcı olmayan temizleyicilerle yıkanmalıdır. Gece yatarken çıkarılarak temiz suda veya protez tabletli solüsyonda bekletilmeli, böylece diş eti dokuları dinlendirilmelidir.'
        ]
      }
    ]
  },
  de: {
    packagesTitle: 'Vollprothesen-Pakete & Währungsrechner',
    packagesSubtitle: 'Hochschlagfeste Acrylprothesen, Ivoclar Vivodent Ästhetik und BPS biofunktionelle Totalprothesen für optimale Saugkraft und natürliche Ästhetik in Antalya.',
    mostPopularBadge: 'Beliebteste Wahl',
    durationLabel: 'Behandlungsdauer:',
    includedLabel: 'Paketleistungen:',
    priceLabel: 'Preis (Pro Kiefer):',
    getQuoteBtn: 'Kostenloses Angebot anfordern',
    faqTitle: 'Häufig gestellte Fragen zu Vollprothesen',
    faqSubtitle: 'Alles Wissenswerte über Totalprothesen in Antalya – von Saugpassung und Bissregistrierung bis hin zu Pflege und Esskomfort.',
    packages: [
      {
        name: 'Premium Hochschlagfeste Acryl-Totalprothese',
        brand: 'Lucitone 199 / Candulor Hochdichte Basis',
        duration: '4-5 Werktage (3 Sitzungen)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          'Individuelle hochschlagfeste Acrylbasis mit natürlicher Zahnfleischtextur',
          '3-schichtige hochabriebfeste Mehrschichtzähne (14 Zähne)',
          'Präzise anatomische Funktionsabformung für optimalen Saugeffekt',
          'Wachseinprobe zur Abstimmung von Zahnfarbe und Phonetik',
          'Weichbleibende Unterfütterung und Okklusionsfeineinstellung',
          'Inklusive VIP-Transfer Flughafen und Klinik'
        ],
        price: { USD: '$650', EUR: '€590', GBP: '£520' }
      },
      {
        name: 'Komplettes Lächeln-Rehabilitationsset (Beide Kiefer)',
        brand: 'Ivoclar Vivodent S PE / Lucitone Doppelkiefer',
        duration: '5-6 Werktage (4 Sitzungen)',
        img: '/packages/pkg-5.webp',
        included: [
          'Synchronisierte Ober- und Unterkiefer-Totalprothesen',
          'Ivoclar Vivodent S PE hochästhetische Zähne (28 Zähne)',
          'Digitale Gesichts- und Phonetik-Lächelanalyse',
          'Lingualisierte Okklusion für maximale Kaustabilität',
          'Druckstellenentlastung und Bissanpassung nach Eingliederung',
          'VIP-Transfer + Option auf 4-Sterne-Zentralhotel'
        ],
        price: { USD: '$1,190', EUR: '€1,090', GBP: '£950' }
      },
      {
        name: 'BPS Biofunktionelle 3D CAD/CAM Totalprothese',
        brand: 'Ivoclar BPS (Biofunktionales Prothetik System)',
        duration: '5 Werktage (3 Sitzungen)',
        img: '/packages/pkg-6.webp',
        included: [
          'Computergefräste monolitische Harzbasis ohne Schrumpfung',
          'Gnathometer M intraorale Pfeilwinkelregistrierung des Kiefergelenks',
          'Hervorragender Saugrandschluss auch bei flachen Kieferkämmen',
          'Verfärbungsresistente Nanohybrid-Zähne mit natürlicher Transluzenz',
          'Digitale Sicherung für lebenslange 24-Stunden-Nachfertigung',
          '5 Jahre Klinik-Garantie & VIP-Concierge-Betreuung'
        ],
        price: { USD: '$890', EUR: '€820', GBP: '£720' }
      }
    ],
    faqs: [
      {
        q: 'Was ist eine Vollprothese und für wen ist sie geeignet?',
        a: [
          'Eine Vollprothese (Totalprothese) ist ein herausnehmbarer Zahnersatz für Patienten, die alle Zähne im Ober- oder Unterkiefer verloren haben.',
          'Sie stellt die Gesichtsharmonie, Lippenfülle, Sprachfunktion und Kaufunktion vollständig wieder her.'
        ]
      },
      {
        q: 'Wie halten Vollprothesen ohne Zahnimplantate im Mund?',
        a: [
          'Im Oberkiefer entsteht durch den Speichelfilm und die exakte Anpassung an den Gaumen ein natürlicher Saugeffekt (Unterdruck).',
          'Im Unterkiefer liegt die Prothese auf dem Alveolarkamm auf und wird durch die Lippen- und Zungenmuskulatur stabilisiert.'
        ]
      },
      {
        q: 'Wie lange dauert die Anfertigung einer Vollprothese in Antalya?',
        a: [
          'In unserer Klinik in Antalya dauert die Anfertigung 4 bis 6 Werktage über 3 bis 4 Behandlungsschritte: Funktionsabformung, Bissnahme, Wachseinprobe und finale Eingliederung.'
        ]
      }
    ]
  },
  pl: {
    packagesTitle: 'Pakiety Protez Całkowitych i Przelicznik Walut',
    packagesSubtitle: 'Wysokoudarzeniowy akryl, estetyka Ivoclar Vivodent i biofunkcjonalne protezy BPS zapewniające doskonałe przyssanie i naturalny uśmiech w Antalyi.',
    mostPopularBadge: 'Najpopularniejszy Wybór',
    durationLabel: 'Czas Zabiegu:',
    includedLabel: 'Zawartość Pakietu:',
    priceLabel: 'Cena (Za Łuk):',
    getQuoteBtn: 'Uzyskaj Bezpłatną Wycenę',
    faqTitle: 'Często Zadawane Pytania o Protezy Całkowite',
    faqSubtitle: 'Wszystko o protezach całkowitych w Antalyi – od dopasowania i siły przyssania po adaptację mowy i komfort jedzenia.',
    packages: [
      {
        name: 'Wysokoudarzeniowa Proteza Całkowita Premium',
        brand: 'Lucitone 199 / Baza Candulor',
        duration: '4-5 Dni Roboczych (3 Wizyty)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          'Indywidualna baza akrylowa z żyłkowaniem i naturalną barwą dziąseł',
          '3-warstwowe zęby kompozytowe o wysokiej odporności na ścieranie (14 zębów)',
          'Precyzyjny wycisk czynnościowy gwarantujący szczelność brzeżną',
          'Rejestracja zwarcia i przymiarka próbna w wosku',
          'Dopasowanie elastycznego podścielenia i kalibracja zgryzu',
          'Transfery VIP Lotnisko i Klinika w cenie'
        ],
        price: { USD: '$650', EUR: '€590', GBP: '£520' }
      },
      {
        name: 'Kompletny Zestaw Rehabilitacji Obu Łuków Zębowych',
        brand: 'Ivoclar Vivodent S PE / Lucitone Dual Arch',
        duration: '5-6 Dni Roboczych (4 Wizyty)',
        img: '/packages/pkg-5.webp',
        included: [
          'Zsynchronizowane protezy całkowite na górę i dół dla idealnego zwarcia',
          'Wysoce estetyczne zęby Ivoclar Vivodent S PE (28 zębów)',
          'Cyfrowe mapowanie harmonii twarzy i analiza fonetyczna',
          'Zgryz zlingualizowany dla maksymalnej stabilności podczas żucia',
          'Korekta miejsc uciskowych po oddaniu protez',
          'Transfery VIP + Opcja 4-gwiazdkowego hotelu'
        ],
        price: { USD: '$1,190', EUR: '€1,090', GBP: '£950' }
      },
      {
        name: 'Biofunkcjonalna Proteza 3D CAD/CAM BPS Ivoclar',
        brand: 'Ivoclar BPS (Biofunctional Prosthetic System)',
        duration: '5 Dni Roboczych (3 Wizyty)',
        img: '/packages/pkg-6.webp',
        included: [
          'Frezowana komputerowo monoblokowa baza o zerowym skurczu',
          'Gnathometer M do precyzyjnej wewnątrzustnej rejestracji stawów skroniowo-żuchwowych',
          'Doskonałe przyssanie nawet przy zaniku wyrostka zębodołowego',
          'Odporne na przebarwienia zęby nanohybrydowe o naturalnej przezierności',
          'Cyfrowa kopia zapasowa do odtworzenia w 24 godziny',
          '5 Lat Gwarancji Jakości i wsparcie VIP Concierge'
        ],
        price: { USD: '$890', EUR: '€820', GBP: '£720' }
      }
    ],
    faqs: [
      {
        q: 'Czym jest proteza całkowita i dla kogo jest przeznaczona?',
        a: [
          'Proteza całkowita to ruchome uzupełnienie protetyczne zastępujące wszystkie zęby w górnym lub dolnym łuku.',
          'Przywraca pełne podparcie warg i policzków, poprawia wymowę oraz umożliwia sprawne gryzienie.'
        ]
      },
      {
        q: 'Jak proteza całkowita trzyma się w jamie ustnej bez implantów?',
        a: [
          'W szczęce górnej kluczem jest wytworzenie podciśnienia (przyssania) między płytą protezy a podniebieniem przy udziale śliny.',
          'W żuchwie proteza spoczywa na wyrostku i jest stabilizowana przez mięśnie języka i policzków.'
        ]
      },
      {
        q: 'Ile trwa wykonanie protez całkowitych w Antalyi?',
        a: [
          'Proces trwa od 4 do 6 dni roboczych i obejmuje pobranie wycisków, rejestrację zwarcia, przymiarkę w wosku oraz oddanie gotowych protez.'
        ]
      }
    ]
  },
  pt: {
    packagesTitle: 'Pacotes de Próteses Totais & Calculadora de Moeda',
    packagesSubtitle: 'Acrílico de alto impacto, estética Ivoclar Vivodent e próteses biofuncionais BPS para máxima sucção e sorriso natural em Antalya.',
    mostPopularBadge: 'Mais Popular',
    durationLabel: 'Tempo de Procedimento:',
    includedLabel: 'Inclusões do Pacote:',
    priceLabel: 'Preço (Por Arcada):',
    getQuoteBtn: 'Pedir Orçamento Grátis',
    faqTitle: 'Perguntas Frequentes sobre Próteses Totais',
    faqSubtitle: 'Tudo o que precisa saber sobre dentaduras completas em Antalya: adaptação por sucção, mastigação e manutenção.',
    packages: [
      {
        name: 'Prótese Total em Acrílico de Alto Impacto',
        brand: 'Lucitone 199 / Candulor',
        duration: '4-5 Dias Úteis (3 Consultas)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          'Base acrílica personalizada com pigmentação gengival realista',
          'Dentes multicamadas de alta resistência ao desgaste (14 dentes)',
          'Moldagem anatómica de precisão para selamento periférico',
          'Registo de mordida em cera e prova estética personalizada',
          'Reembasamento macio e balanceamento oclusal',
          'Transfers VIP Aeroporto e Clínica incluídos'
        ],
        price: { USD: '$650', EUR: '€590', GBP: '£520' }
      },
      {
        name: 'Conjunto de Reabilitação Total (Ambas as Arcadas)',
        brand: 'Ivoclar Vivodent S PE / Lucitone Dual Arch',
        duration: '5-6 Dias Úteis (4 Consultas)',
        img: '/packages/pkg-5.webp',
        included: [
          'Próteses Superior e Inferior sincronizadas para oclusão perfeita',
          'Dentes estéticos Ivoclar Vivodent S PE (28 dentes)',
          'Mapeamento digital da harmonia facial e análise fonética',
          'Oclusão lingualizada para máxima estabilidade mastigatória',
          'Ajuste pós-colocação e alívio de pontos de pressão',
          'Transfer VIP + Opção de Hotel 4 Estrelas'
        ],
        price: { USD: '$1,190', EUR: '€1,090', GBP: '£950' }
      },
      {
        name: 'Prótese Total 3D CAD/CAM Biofuncional BPS',
        brand: 'Ivoclar BPS (Biofunctional Prosthetic System)',
        duration: '5 Dias Úteis (3 Consultas)',
        img: '/packages/pkg-6.webp',
        included: [
          'Base monolítica fresada por computador com contração zero',
          'Registo intraoral de arco gótico Gnathometer M',
          'Excelente sucção mesmo em rebordos mandibulares reabsorvidos',
          'Dentes nanohíbridos resistentes a manchas com translucidez natural',
          'Arquivo digital para reprodução exata em 24 horas',
          '5 Anos de Garantia Clínica e Assistência VIP'
        ],
        price: { USD: '$890', EUR: '€820', GBP: '£720' }
      }
    ],
    faqs: [
      {
        q: 'O que é uma prótese total e para quem é indicada?',
        a: [
          'A prótese total (dentadura completa) é um dispositivo removível que substitui todos os dentes naturais de uma arcada.',
          'Restaura a sustentação labial, mastigação e dicção de forma rápida e segura.'
        ]
      },
      {
        q: 'Como a prótese total se fixa na boca sem implantes?',
        a: [
          'Na arcada superior, a fixação ocorre pelo efeito de vácuo (sucção) entre a base acrílica e o palato.',
          'Na arcada inferior, repousa sobre o osso alveolar e estabiliza-se pela musculatura bucal.'
        ]
      }
    ]
  },
  es: {
    packagesTitle: 'Paquetes de Prótesis Completas y Conversor de Divisas',
    packagesSubtitle: 'Acrílico de alto impacto, estética Ivoclar Vivodent y prótesis biofuncionales BPS para máxima succión y sonrisa natural en Antalya.',
    mostPopularBadge: 'Opción Más Popular',
    durationLabel: 'Tiempo de Tratamiento:',
    includedLabel: 'Incluido en el Paquete:',
    priceLabel: 'Precio (Por Arcada):',
    getQuoteBtn: 'Solicitar Presupuesto Gratis',
    faqTitle: 'Preguntas Frecuentes sobre Dentaduras Completas',
    faqSubtitle: 'Todo lo que necesita saber sobre prótesis dentales completas en Antalya: ajuste por succión, masticación y mantenimiento.',
    packages: [
      {
        name: 'Prótesis Completa en Acrílico de Alto Impacto',
        brand: 'Lucitone 199 / Base Candulor',
        duration: '4-5 Días Laborables (3 Citas)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          'Base acrílica personalizada con caracterización gingival realista',
          'Dientes multicapa de alta resistencia al desgaste (14 dientes)',
          'Impresión anatómica funcional para un sellado periférico óptimo',
          'Registro de mordida en cera y prueba estética personalizada',
          'Rebase blando y equilibrado de la oclusión inicial',
          'Traslados VIP Aeropuerto y Clínica incluidos'
        ],
        price: { USD: '$650', EUR: '€590', GBP: '£520' }
      },
      {
        name: 'Set de Rehabilitación Completa (Ambas Arcadas)',
        brand: 'Ivoclar Vivodent S PE / Lucitone Dual Arch',
        duration: '5-6 Días Laborables (4 Citas)',
        img: '/packages/pkg-5.webp',
        included: [
          'Prótesis Superior e Inferior sincronizadas para mordida perfecta',
          'Dientes de alta gama Ivoclar Vivodent S PE (28 dientes)',
          'Mapeo digital de armonía facial y análisis fonético',
          'Oclusión lingualizada para máxima estabilidad al masticar',
          'Alivio de zonas de presión y calibración de mordida',
          'Traslados VIP + Opción de Hotel 4 Estrellas'
        ],
        price: { USD: '$1,190', EUR: '€1,090', GBP: '£950' }
      },
      {
        name: 'Prótesis Completa 3D CAD/CAM Biofuncional BPS',
        brand: 'Ivoclar BPS (Biofunctional Prosthetic System)',
        duration: '5 Días Laborables (3 Citas)',
        img: '/packages/pkg-6.webp',
        included: [
          'Base monolítica fresada por ordenador con cero contracción',
          'Gnathometer M para registro intraoral de arco gótico de la ATM',
          'Excelente efecto de succión en crestas mandibulares planas',
          'Dientes nanohíbridos resistentes a manchas con brillo natural',
          'Respaldo digital para reposición en 24 horas',
          '5 Años de Garantía Clínica y Asistencia VIP'
        ],
        price: { USD: '$890', EUR: '€820', GBP: '£720' }
      }
    ],
    faqs: [
      {
        q: '¿Qué es una prótesis dental completa y para quién está indicada?',
        a: [
          'Es un dispositivo protésico removible diseñado para reemplazar todos los dientes ausentes de una arcada (superior, inferior o ambas).',
          'Restaura el volumen facial, la pronunciación y la función masticatoria con gran confort.'
        ]
      },
      {
        q: '¿Cómo se sujeta la prótesis completa sin implantes?',
        a: [
          'En el maxilar superior se sujeta por efecto vacío (succión) sobre el paladar.',
          'En la mandíbula se apoya en el reborde óseo y se estabiliza con los músculos de labios y lengua.'
        ]
      }
    ]
  },
  ru: {
    packagesTitle: 'Пакеты полных съемных протезов и конвертер валют',
    packagesSubtitle: 'Высокопрочный акрил, эстетика Ivoclar Vivodent и биофункциональные протезы BPS для идеальной фиксации и естественной улыбки в Анталье.',
    mostPopularBadge: 'Самый популярный выбор',
    durationLabel: 'Срок изготовления:',
    includedLabel: 'Что входит в пакет:',
    priceLabel: 'Цена (за челюсть):',
    getQuoteBtn: 'Получить бесплатный расчет',
    faqTitle: 'Часто задаваемые вопросы о полных протезах',
    faqSubtitle: 'Все о полных съемных протезах в Анталье: фиксация на присоске, привыкание к речи, уход и комфорт при жевании.',
    packages: [
      {
        name: 'Премиум полный съемный протез из ударопрочного акрила',
        brand: 'Lucitone 199 / Candulor',
        duration: '4-5 рабочих дней (3 визита)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          'Индивидуальный базис с имитацией капиллярного рисунка десны',
          '3-слойные высокоизносостойкие зубы естественной формы (14 зубов)',
          'Анатомический функциональный слепок для эффекта присасывания',
          'Регистрация прикуса на восковых валиках и эстетическая примерка',
          'Мягкая перебазировка и первоначальная коррекция окклюзии',
          'VIP-трансфер из аэропорта и клиники включен'
        ],
        price: { USD: '$650', EUR: '€590', GBP: '£520' }
      },
      {
        name: 'Полный комплекс реабилитации улыбки (на обе челюсти)',
        brand: 'Ivoclar Vivodent S PE / Lucitone Dual Arch',
        duration: '5-6 рабочих дней (4 визита)',
        img: '/packages/pkg-5.webp',
        included: [
          'Синхронизированные протезы на верхнюю и нижнюю челюсти',
          'Высокоэстетичные зубы Ivoclar Vivodent S PE (28 зубов)',
          'Цифровой анализ лицевых пропорций и фонетики',
          'Лингвализированная окклюзия для устойчивости при жевании',
          'Коррекция точек давления после установки',
          'VIP-трансфер + опция отеля 4 звезды'
        ],
        price: { USD: '$1,190', EUR: '€1,090', GBP: '£950' }
      },
      {
        name: 'Биофункциональный 3D CAD/CAM протез BPS Ivoclar',
        brand: 'Ivoclar BPS (Biofunctional Prosthetic System)',
        duration: '5 рабочих дней (3 визита)',
        img: '/packages/pkg-6.webp',
        included: [
          'Монолитный фрезерованный базис без усадки материала',
          'Гнатометр M для регистрации движений височно-нижнечелюстного сустава',
          'Отличная фиксация даже при выраженной атрофии кости',
          'Наногибридные композитные зубы с естественным блеском',
          'Цифровой архив для повторного изготовления за 24 часа',
          '5 лет гарантии качества и VIP-сопровождение'
        ],
        price: { USD: '$890', EUR: '€820', GBP: '£720' }
      }
    ],
    faqs: [
      {
        q: 'Что такое полный съемный протез и кому он показан?',
        a: [
          'Полный съемный пластиночный протез предназначен для восстановления зубов при их полном отсутствии на одной или обеих челюстях.',
          'Он восстанавливает овал лица, правильное произношение и жевательную функцию.'
        ]
      },
      {
        q: 'За счет чего держится полный протез без имплантов?',
        a: [
          'На верхней челюсти протез держится благодаря эффекту клапана (присоски) за счет тонкого слоя слюны и точного прилегания к нёбу.',
          'На нижней челюсти фиксация обеспечивается анатомическим рельефом и балансом мышц губ и языка.'
        ]
      }
    ]
  }
};

export default function CompleteDenturesDetailView() {
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Complete Dentures" />
      </div>
    </>
  );
}
