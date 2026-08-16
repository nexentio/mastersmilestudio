'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentDenturesRightTreatmentAccordion from '@/components/treatment-sections/TreatmentDenturesRightTreatmentAccordion';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentDenturesBeforeAfterSliderSection from './treatment-sections/TreatmentDenturesBeforeAfterSliderSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentDenturesPackagesSlider from './treatment-sections/TreatmentDenturesPackagesSlider';
import TreatmentReviewsSection from './treatment-sections/TreatmentReviewsSection';
import TreatmentParallaxBanner from './treatment-sections/TreatmentParallaxBanner';
import TreatmentDenturesFAQSection from './treatment-sections/TreatmentDenturesFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './DentalImplantsDetailView.module.css';

interface DenturesI18n {
  introHeading: string;
  introP1: string;
  partsTitle: string;
  part1Label: string;
  part1Desc: string;
  part2Label: string;
  part2Desc: string;
  part3Label: string;
  part3Desc: string;
  healingP: string;
  solutionP: string;
  whyChooseHeading: string;
  whyChooseIntroLead: string;
  whyChooseIntroLink: string;
  whyChooseIntroTail: string;
  reason1Title: string;
  reason1P1: string;
  reason1P2: string;
  reason1P3: string;
  reason2Title: string;
  reason2P: string;
  viewAllPackagesBtn: string;
  reason3Title: string;
  reason3P: string;
  reason4Title: string;
  reason4P: string;
  reason5Title: string;
  reason5PText: string;
  reason5PLink: string;
  typesHeading: string;
  typesIntro: string;
  singleTitle: string;
  singleP: string;
  singleLinkLead: string;
  singleLinkText: string;
  multipleTitle: string;
  multipleP: string;
  multipleLinkLead: string;
  multipleLinkText: string;
  allOn4Title: string;
  allOn4P: string;
  allOn4LinkLead: string;
  allOn4LinkText: string;
  allOn6Title: string;
  allOn6P: string;
  allOn6LinkLead: string;
  allOn6LinkText: string;
}

const DENTURES_DATA: Record<string, DenturesI18n> = {
  en: {
    introHeading: 'Dentures & Snap-On Implant Overdentures in Istanbul, Turkey',
    introP1:
      'Dentures and implant-supported overdentures are state-of-the-art prosthetic restorations designed to replace multiple missing teeth or full dental arches. Whether you require rock-solid Snap-On implant overdentures with zero palate covering or custom-sculpted complete dentures, our prosthodontists restore 100% of your chewing stability and facial aesthetics in just 4 to 6 days in Istanbul.',
    partsTitle: 'The 3-Part Anatomical Engineering of a Premium Denture Restoration:',
    part1Label: '1. High-Impact Biocompatible Base Framework',
    part1Desc:
      'Custom-milled cross-linked acrylic or titanium framework contoured to replicate natural gingival anatomy, root contours, and micro-vasculature.',
    part2Label: '2. Multi-Layered Aesthetic Nanocomposite Teeth',
    part2Desc:
      'High-wear-resistance composite teeth featuring natural translucency, anatomical cusps, and customized shade gradients (BL1–BL4, A1, B1).',
    part3Label: '3. Locator Retention Snap-Mechanism or Precision Clasps',
    part3Desc:
      'German Locator attachments locking the overdenture firmly onto 2–4 dental implants for 100% stable retention with zero slipping and no adhesive pastes.',
    healingP:
      'Modern implant overdentures eliminate speech lisping, sore gum friction, and the anxiety of dentures shifting while eating. With same-day temporary dentures, you never experience toothless downtime.',
    solutionP:
      'Whether replacing loose traditional bottom dentures, upgrading to an open-palate upper denture, or restoring partial gaps with flexible Valplast, Master Smile Studio Istanbul provides world-class prosthodontics with up to 70% savings.',
    whyChooseHeading: 'Why Choose Dentures at Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'For patients seeking secure, comfortable tooth replacement, ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail:
      ' is the premier center for modern removable and implant-retained prosthetics. Here is why patients trust us:',
    reason1Title: 'Specialist Prosthodontists & Master Dental Technicians',
    reason1P1:
      'Our prosthodontists have decades of combined expertise in anatomical bite reconstruction, vertical dimension restoration, and implant overdenture mechanics.',
    reason1P2:
      'Every denture is custom-fabricated in our accredited in-house laboratory using genuine German acrylics and Swiss Locator attachments.',
    reason1P3:
      'Direct, continuous care by our senior restorative team from initial 3D digital impressions to final delivery and bite calibration.',
    reason2Title: 'All-Inclusive Denture Packages & Up to 70% Cost Savings',
    reason2P:
      'In the UK and Europe, implant-supported overdentures cost upwards of £6,000 to £12,000. At Master Smile Studio, our all-inclusive packages include 5-star hotel accommodation and VIP chauffeur transfers at up to 70% lower prices.',
    viewAllPackagesBtn: 'View All Denture Packages & Prices →',
    reason3Title: '3D CBCT Tomography & Digital Occlusal Mapping',
    reason3P:
      'We use high-definition 3D tomography to locate dense cortical bone even in cases of severe jawbone loss, ensuring safe, minimally invasive implant placement.',
    reason4Title: 'Documented Before & After Patient Transformations',
    reason4P:
      'Browse our portfolio of documented full arch restorations showing collapsed facial profiles and loose dentures transformed into secure, radiant smiles.',
    reason5Title: 'Luxury 5-Star Hotel & VIP Mercedes Chauffeur in Istanbul',
    reason5PText:
      'Enjoy an effortless dental holiday with 5-star luxury hotel accommodation in central Istanbul, VIP airport and clinic transfers, and dedicated personal translation coordinators. ',
    reason5PLink: 'Contact our team for a free personalized denture consultation.',
    typesHeading: 'Types of Dentures at Master Smile Studio Istanbul',
    typesIntro:
      'We offer an extensive range of advanced removable and implant-retained denture options tailored to your jaw anatomy and aesthetic preferences:',
    singleTitle: '1. Snap-On Implant Overdentures (2 to 4 Implants)',
    singleP:
      'Mechanical locator snap-locking overdentures delivering rock-solid chewing retention with zero slipping and no messy adhesive pastes.',
    singleLinkLead: 'Learn more about ',
    singleLinkText: 'Snap-On Implant Dentures →',
    multipleTitle: '2. Palateless Horseshoe Upper Overdentures',
    multipleP:
      'Supported by 4 dental implants with an open palate, restoring 100% of your taste sensation and temperature perception.',
    multipleLinkLead: 'Explore ',
    multipleLinkText: 'Palateless Overdentures →',
    allOn4Title: '3. Complete Full Arch High-Impact Acrylic Dentures',
    allOn4P:
      'Durable, anatomically contoured full dentures for edentulous patients seeking dependable and economical full mouth rehabilitation.',
    allOn4LinkLead: 'Discover ',
    allOn4LinkText: 'Complete Full Dentures →',
    allOn6Title: '4. Valplast Flexible & Precision Partial Dentures',
    allOn6P:
      'Metal-free tissue-colored flexible nylon partials and hidden precision attachment dentures for discreet tooth replacement.',
    allOn6LinkLead: 'Read about ',
    allOn6LinkText: 'Partial & Flexible Dentures →',
  },
  tr: {
    introHeading: 'İstanbul Protez Diş & Çıt Çıtlı Damak Tedavisi',
    introP1:
      'Protez dişler ve implant destekli çıtçıtlı overdenture damaklar, çoklu veya tam diş eksikliklerinde çiğneme fonksiyonunu, dudak desteğini ve estetik gülüşü yeniden kazandıran modern protetik diş hekimliği uygulamalarıdır. Oynayan damak sorununa son veren 2-4 implantlı kilitli sistemlerimiz veya damağı kapatmayan açık tasarımlarımızla sadece 4 ila 6 günde kalıcı konfora kavuşun.',
    partsTitle: 'Premium Bir Protez Restorasyonunun 3 Temel Anatomisi:',
    part1Label: '1. Yüksek Mukavemetli Biyouyumlu Kaide Gövdesi',
    part1Desc:
      'Diş eti rengini, damarlı dokusunu ve kret anatomisini birebir taklit eden kırılmaya dayanıklı çapraz bağlı akrilik veya titanyum iskelet.',
    part2Label: '2. Çok Katmanlı Estetik Nanokompozit Dişler',
    part2Desc:
      'Aşınmaya karşı ultra dirençli, doğal mine saydamlığına ve kişiselleştirilmiş renk geçişlerine sahip estetik yapay dişler.',
    part3Label: '3. Locator Kilitli Çıtçıt Mekanizması',
    part3Desc:
      'Protezi implantlara sıfır boşlukla kilitleyen, çiğnerken oynamasını önleyen ve yapıştırıcı krem ihtiyacını sıfırlayan hassas tutucu.',
    healingP:
      'İmplant destekli çıtçıtlı damaklar, protezin damağa vurmasını, kaymasını ve konuşurken fırlama korkusunu tamamen ortadan kaldırır. İlk seansta takılan geçici protezler sayesinde hiçbir zaman dişsiz kalmazsınız.',
    solutionP:
      'İster sürekli oynayan alt damaklarınızdan kurtulmak, ister üst çenede damağı kapatmayan tat almayı engellemeyen çıtçıtlı protez yaptırmak, ister metalsiz esnek Valplast protez tercih etmek isteyin; Master Smile Studio İstanbul %70’e varan fiyat avantajıyla en yüksek kaliteyi sunar.',
    whyChooseHeading: 'Neden Master Smile Studio İstanbul’da Protez Tedavisi?',
    whyChooseIntroLead: 'Oynamayan, sağlam ve estetik protez diş arayan uluslararası hastalar için ',
    whyChooseIntroLink: 'Master Smile Studio İstanbul',
    whyChooseIntroTail:
      ', protetik diş hekimliğinde öncü kliniktir. Bizi tercih etmeniz için başlıca nedenler:',
    reason1Title: 'Uzman Protetik Diş Hekimleri & Usta Teknisyenler',
    reason1P1:
      'Hekimlerimiz anatomik dikey boyut yükseltme, oklüzyon planlaması ve implant üstü overdenture mekaniğinde uzmanlaşmıştır.',
    reason1P2:
      'Tüm protezlerimiz kendi sertifikalı laboratuvarımızda orijinal Alman akrilikleri ve İsviçre Locator parçaları kullanılarak üretilir.',
    reason1P3:
      'İlk dijital ağız içi taramanızdan teslim seansına kadar doğrudan kurucu uzman hekimlerimiz tarafından tedavi edilirsiniz.',
    reason2Title: 'Her Şey Dahil Paketler & %70’e Varan Fiyat Tasarrufu',
    reason2P:
      'Avrupa ve İngiltere’de implant destekli protezler £6,000 - £12,000 arasında iken, kliniğimizde 5 yıldızlı otel ve VIP transfer dahil paketlerle %70 daha uygundur.',
    viewAllPackagesBtn: 'Tüm Protez Paketleri ve Fiyatları İncele →',
    reason3Title: '3D Tomografi & Kemik Yoğunluğu Analizi',
    reason3P:
      'Aşırı kemik erimesi olan çenelerde bile 3D CBCT tomografi ile en sağlam kemik noktaları milimetrik olarak belirlenir ve güvenle implant uygulanır.',
    reason4Title: 'Kayıtlı Öncesi & Sonrası Gerçek Vaka Dönüşümleri',
    reason4P:
      'Yüzdeki çökmelerin giderildiği, güçlü çiğnemenin geri kazanıldığı ve hastalarımızın güvenle gülümsediği gerçek klinik dönüşümleri inceleyin.',
    reason5Title: '5 Yıldızlı Otel Konaklaması & VIP Mercedes Transfer',
    reason5PText:
      'İstanbul’un kalbinde 5 yıldızlı otel konaklaması, havalimanı ve klinik arası özel VIP Mercedes şoförlü transferler ve kendi dilinizde hasta danışmanlığı. ',
    reason5PLink: 'Kişiye özel protez fiyat teklifiniz için hemen iletişime geçin.',
    typesHeading: 'Master Smile Studio’da Uygulanan Protez Diş Türleri',
    typesIntro:
      'Çene kemiği yapınıza, diş eksikliği durumunuza ve bütçenize uygun protez seçenekleri:',
    singleTitle: '1. İmplant Destekli Çıt Çıtlı Protezler (2 - 4 İmplant)',
    singleP:
      'Locator tutucularla implanta kilitlenen, çiğnerken ve konuşurken oynamayan, yapıştırıcı krem gerektirmeyen sağlam protez.',
    singleLinkLead: 'Detaylı bilgi için: ',
    singleLinkText: 'Çıt Çıtlı Protezler →',
    multipleTitle: '2. Damaksız Üst Çene Çıt Çıtlı Protez (Açık Palat)',
    multipleP:
      '4 implant üzerine yerleştirilen nal tipi açık tasarım sayesinde damağı kapatmaz; yemeklerin tadı ve sıcaklığı tam hissedilir.',
    multipleLinkLead: 'İnceleyin: ',
    multipleLinkText: 'Damaksız Protezler →',
    allOn4Title: '3. Tam Damak Protezleri (Klasik Total Protez)',
    allOn4P:
      'Tüm dişlerini kaybetmiş hastalar için yüksek kırılma dirençli akrilikten üretilen klasik ve ekonomik tam çene protezi.',
    allOn4LinkLead: 'Keşfedin: ',
    allOn4LinkText: 'Tam Damak Protezleri →',
    allOn6Title: '4. Valplast Esnek & Hassas Tutuculu Bölümlü Protezler',
    allOn6P:
      'Metalsiz, diş eti renginde esnek kancalı Valplast veya kaplamaların içine gizlenen kilitli hassas tutuculu estetik protezler.',
    allOn6LinkLead: 'Bilgi alın: ',
    allOn6LinkText: 'Bölümlü Protez Seçenekleri →',
  },
  de: {
    introHeading: 'Zahnprothesen & Druckknopf-Overdentures in Istanbul',
    introP1:
      'Zahnprothesen und implantatgetragene Overdentures stellen festsitzenden Halt, Kaukraft und natürliche Gesichtsästhetik in 4 bis 6 Tagen wieder her.',
    partsTitle: 'Die 3-Komponenten-Konstruktion einer modernen Prothese:',
    part1Label: '1. Hochfeste Prothesenbasis',
    part1Desc: 'Naturgetreue Zahnfleischnachbildung aus bruchsicherem Kunststoff.',
    part2Label: '2. Mehrschichtige ästhetische Kompositzähne',
    part2Desc: 'Abriebfeste Zähne mit natürlicher Lichtbrechung.',
    part3Label: '3. Locator-Klicksystem oder Präzisionsgeschiebe',
    part3Desc: 'Feste Verankerung auf 2–4 Implantaten ohne Haftcreme.',
    healingP: 'Kein Wackeln, keine Druckstellen und sicheres Sprechen ab dem 1. Tag.',
    solutionP: 'Sparen Sie bis zu 70% bei Prothesen und Implantaten in Istanbul.',
    whyChooseHeading: 'Warum Zahnprothesen bei Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'Für Patienten aus ganz Europa ist ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail: ' die führende Klinik für Prothetik:',
    reason1Title: 'Erfahrene Prothetiker & Meisterlabor',
    reason1P1: 'Präzise Wiederherstellung der physiologischen Bisshöhe.',
    reason1P2: 'Original deutsche Kunststoffe und Schweizer Locator-Systeme.',
    reason1P3: 'Direkte Betreuung durch unsere Chefärzte.',
    reason2Title: 'All-Inclusive-Pakete mit bis zu 70% Ersparnis',
    reason2P: 'Inklusive 5-Sterne-Hotel und VIP-Transfers zum Festpreis.',
    viewAllPackagesBtn: 'Alle Prothesen-Pakete & Preise ansehen →',
    reason3Title: '3D CBCT Tomographie & Bissanalyse',
    reason3P: 'Sichere Implantatpositionierung auch bei starkem Knochenschwund.',
    reason4Title: 'Dokumentierte Vorher & Nachher Patientenfälle',
    reason4P: 'Echte Verwandlungen zu festem Halt und sicherem Lächeln.',
    reason5Title: '5-Sterne-Hotel & VIP-Chauffeur in Istanbul',
    reason5PText: 'Rundum-sorglos-Reiseorganisation mit persönlicher Betreuung. ',
    reason5PLink: 'Kontaktieren Sie uns für Ihr persönliches Angebot.',
    typesHeading: 'Prothesen-Arten bei Master Smile Studio',
    typesIntro: 'Moderne festsitzende und herausnehmbare Lösungen:',
    singleTitle: '1. Druckknopf-Prothesen auf Implantaten (Locator)',
    singleP: 'Fester Halt auf 2 bis 4 Implantaten ohne Haftcreme.',
    singleLinkLead: 'Mehr über ',
    singleLinkText: 'Druckknopf-Prothesen →',
    multipleTitle: '2. Gaumenfreie Oberkieferprothesen',
    multipleP: '4 Implantate für vollen Geschmack ohne Gaumenplatte.',
    multipleLinkLead: 'Entdecken Sie ',
    multipleLinkText: 'Gaumenfreie Prothesen →',
    allOn4Title: '3. Klassische Vollprothesen (Totalprothesen)',
    allOn4P: 'Wirtschaftlicher Gesamtersatz aus hochfestem Kunststoff.',
    allOn4LinkLead: 'Details zu ',
    allOn4LinkText: 'Vollprothesen →',
    allOn6Title: '4. Valplast flexible Teilprothesen',
    allOn6P: 'Bruchfeste, metallfreie Prothesen mit zahnfleischfarbenen Klammern.',
    allOn6LinkLead: 'Informationen zu ',
    allOn6LinkText: 'Teilprothesen →',
  },
  pl: {
    introHeading: 'Protezy Zębowe i Protezy na Zatrzaskach w Stambule, Turcja',
    introP1:
      'Protezy całkowite i protezy na zatrzaskach Locator (Overdentures) trwale przywracają pełną siłę żucia, podparcie warg i pewność siebie w 4–6 dni.',
    partsTitle: '3-Częściowa Budowa Nowoczesnej Protezy Zębowej:',
    part1Label: '1. Płyta Protezy o Wysokiej Odporności',
    part1Desc: 'Płyta akrylowa lub szkielet tytanowy idealnie imitujący naturalne dziąsło.',
    part2Label: '2. Wielowarstwowe Zęby Nanokompozytowe',
    part2Desc: 'Zęby o wysokiej odporności na ścieranie i naturalnym odcieniu.',
    part3Label: '3. Mechanizm Zatrzaskowy Locator',
    part3Desc: 'Zamki blokujące protezę na 2–4 implantach bez użycia kleju.',
    healingP: 'Koniec z wypadającą protezą, odparzeniami i obawą podczas jedzenia.',
    solutionP: 'Oszczędność do 70% na protezach i implantach w Stambule.',
    whyChooseHeading: 'Dlaczego Protezy w Master Smile Studio w Stambule?',
    whyChooseIntroLead: 'Dla pacjentów z całej Europy ',
    whyChooseIntroLink: 'Master Smile Studio Stambuł',
    whyChooseIntroTail: ' to wiodący ośrodek nowoczesnej protetyki stomatologicznej:',
    reason1Title: 'Doświadczeni Protetycy i Mistrzowie Techniki Dentystycznej',
    reason1P1: 'Odbudowa prawidłowej wysokości zwarcia i podparcia twarzy.',
    reason1P2: 'Oryginalne niemieckie akryle i szwajcarskie zatrzaski Locator.',
    reason1P3: 'Bezpośrednia opieka lekarzy prowadzących.',
    reason2Title: 'Pakiety All-Inclusive & Oszczędność do 70%',
    reason2P: '5-gwiazdkowy hotel i transfery VIP w cenie.',
    viewAllPackagesBtn: 'Zobacz Pakiety Protez i Ceny →',
    reason3Title: 'Tomografia 3D CBCT i Analiza Wyrostka',
    reason3P: 'Bezpieczne planowanie implantów nawet przy znacznym zaniku kości.',
    reason4Title: 'Metamorfozy Pacjentów Przed i Po',
    reason4P: 'Zobacz efekty stabilizacji protez i odmłodzenia rysów twarzy.',
    reason5Title: 'Hotel 5★ i Prywatny Kierowca w Stambule',
    reason5PText: 'Prywatny transfer Mercedesem i polskojęzyczny koordynator na miejscu. ',
    reason5PLink: 'Skontaktuj się po bezpłatną wycenę.',
    typesHeading: 'Rodzaje Protez w Master Smile Studio',
    typesIntro: 'Nowoczesne rozwiązania protetyczne dopasowane do Twoich potrzeb:',
    singleTitle: '1. Protezy na Zatrzaskach Locator (2–4 Implanty)',
    singleP: 'Maksymalna stabilność bez ruszania się protezy i bez kleju.',
    singleLinkLead: 'Więcej o ',
    singleLinkText: 'Protezach na Zatrzaskach →',
    multipleTitle: '2. Protezy Bezpodniebienne (Otwarte Podniebienie)',
    multipleP: '4 implanty i brak płyty podniebiennej dla pełnego smaku potraw.',
    multipleLinkLead: 'Poznaj ',
    multipleLinkText: 'Protezy Bezpodniebienne →',
    allOn4Title: '3. Wysokoudarzeniowe Protezy Całkowite',
    allOn4P: 'Trwałe i estetyczne protezy całkowite dla bezzębnych szczęk.',
    allOn4LinkLead: 'Sprawdź ',
    allOn4LinkText: 'Protezy Całkowite →',
    allOn6Title: '4. Elastyczne Protezy Valplast i na Zatrzaskach',
    allOn6P: 'Bezmetalowe, elastyczne protezy z klamrami w kolorze dziąsła.',
    allOn6LinkLead: 'Czytaj o ',
    allOn6LinkText: 'Protezach Częściowych →',
  },
  pt: {
    introHeading: 'Próteses Dentárias e Overdentures em Istambul, Turquia',
    introP1:
      'As próteses dentárias totais e overdentures sobre implantes devolvem a estabilidade mastigatória, suporte facial e sorriso confiável em 4 a 6 dias.',
    partsTitle: 'A Estrutura em 3 Partes de uma Prótese de Alta Precisão:',
    part1Label: '1. Base Acrílica de Alto Impacto',
    part1Desc: 'Acrílico denso e anatômico com tonalidade idêntica à gengiva natural.',
    part2Label: '2. Dentes Estéticos Nanocompósitos',
    part2Desc: 'Dentes resistentes com translucidez natural e alta durabilidade.',
    part3Label: '3. Mecanismo de Encaixe Locator (Clique)',
    part3Desc: 'Fixação firme sobre 2 a 4 implantes sem pastas adesivas.',
    healingP: 'Zero deslocamentos, zero machucados e segurança total ao mastigar.',
    solutionP: 'Economize até 70% com qualidade internacional em Istambul.',
    whyChooseHeading: 'Por Que Fazer Próteses na Master Smile Studio Istambul?',
    whyChooseIntroLead: 'Para pacientes de todo o mundo, ',
    whyChooseIntroLink: 'Master Smile Studio Istambul',
    whyChooseIntroTail: ' é a clínica referência em reabilitação protética:',
    reason1Title: 'Especialistas em Prótese & Técnicos Ceramistas',
    reason1P1: 'Restauração da dimensão vertical e suporte dos lábios.',
    reason1P2: 'Acrílicos alemães e sistemas de encaixe suíços certificados.',
    reason1P3: 'Atendimento direto pelos cirurgiões fundadores.',
    reason2Title: 'Pacotes All-Inclusive com 70% de Economia',
    reason2P: 'Hotel 5 estrelas e transfers VIP Mercedes inclusos.',
    viewAllPackagesBtn: 'Ver Pacotes de Próteses e Preços →',
    reason3Title: 'Tomografia 3D CBCT e Planejamento Digital',
    reason3P: 'Análise milimétrica do osso mesmo em casos de atrofia severa.',
    reason4Title: 'Casos Reais de Antes e Depois',
    reason4P: 'Veja transformações de pacientes com próteses fixas e firmes.',
    reason5Title: 'Hotel 5★ e Transfers VIP Mercedes',
    reason5PText: 'Atendimento exclusivo em português durante toda a viagem. ',
    reason5PLink: 'Solicite seu orçamento gratuito.',
    typesHeading: 'Tipos de Próteses na Master Smile Studio',
    typesIntro: 'Opções completas para reabilitação oral:',
    singleTitle: '1. Overdentures com Encaixe Locator (2 a 4 Implantes)',
    singleP: 'Fixação por clique de alta retenção sem cola fixadora.',
    singleLinkLead: 'Saiba mais: ',
    singleLinkText: 'Overdentures →',
    multipleTitle: '2. Overdenture Superior Sem Céu da Boca',
    multipleP: '4 implantes sem cobrir o palato para sentir todo o sabor.',
    multipleLinkLead: 'Conheça: ',
    multipleLinkText: 'Próteses Sem Palato →',
    allOn4Title: '3. Próteses Totais Convencionais',
    allOn4P: 'Dentaduras anatômicas completas de alto impacto.',
    allOn4LinkLead: 'Descubra: ',
    allOn4LinkText: 'Próteses Totais →',
    allOn6Title: '4. Próteses Flexíveis Valplast e de Precisão',
    allOn6P: 'Próteses parciais sem metal com grampos da cor da gengiva.',
    allOn6LinkLead: 'Leia sobre: ',
    allOn6LinkText: 'Próteses Parciais →',
  },
  es: {
    introHeading: 'Prótesis Dentales y Sobredentaduras en Estambul, Turquía',
    introP1:
      'Las prótesis dentales y sobredentaduras sobre implantes devuelven la firmeza al masticar, el soporte facial y una sonrisa segura en solo 4 a 6 días.',
    partsTitle: 'La Estructura en 3 Partes de una Prótesis Dental de Precisión:',
    part1Label: '1. Base Protética de Alto Impacto',
    part1Desc: 'Acrílico reforzado que imita a la perfección el tejido gingival natural.',
    part2Label: '2. Dientes Estéticos Nanocompuestos',
    part2Desc: 'Dientes resistentes al desgaste con brillo y forma anatómica natural.',
    part3Label: '3. Mecanismo de Sujeción Locator (Clic)',
    part3Desc: 'Anclaje firme sobre 2 a 4 implantes sin geles adhesivos.',
    healingP: 'Fin a las llagas, a los movimientos molestos y a la inseguridad al hablar.',
    solutionP: 'Ahorro de hasta el 70% con tecnología suiza y alemana en Estambul.',
    whyChooseHeading: '¿Por Qué Elegir Prótesis en Master Smile Studio Estambul?',
    whyChooseIntroLead: 'Para pacientes de todo el mundo, ',
    whyChooseIntroLink: 'Master Smile Studio Estambul',
    whyChooseIntroTail: ' es el centro de referencia en prótesis dental avanzada:',
    reason1Title: 'Especialistas en Prótesis y Técnicos de Laboratorio',
    reason1P1: 'Restablecimiento de la dimensión vertical y del soporte labial.',
    reason1P2: 'Acrílicos alemanes y anclajes Locator suizos originales.',
    reason1P3: 'Atención directa por los directores médicos de la clínica.',
    reason2Title: 'Paquetes Todo Incluido con 70% de Ahorro',
    reason2P: 'Hotel 5 estrellas y chófer privado Mercedes incluidos.',
    viewAllPackagesBtn: 'Ver Paquetes de Prótesis y Precios →',
    reason3Title: 'Tomografía 3D CBCT y Estudio de Hueso',
    reason3P: 'Colocación segura de implantes incluso con poca base ósea.',
    reason4Title: 'Casos Reales de Antes y Después',
    reason4P: 'Vea resultados de pacientes que recuperaron su dentadura firme.',
    reason5Title: 'Hotel 5★ y Traslados VIP en Mercedes',
    reason5PText: 'Atención en español durante toda su estancia. ',
    reason5PLink: 'Pida su presupuesto personalizado.',
    typesHeading: 'Tipos de Prótesis en Master Smile Studio',
    typesIntro: 'Las mejores opciones en sobredentaduras y prótesis completas:',
    singleTitle: '1. Sobredentaduras con Anclaje Locator (2 a 4 Implantes)',
    singleP: 'Fijación de clic firme sin desplazamientos ni pastas adhesivas.',
    singleLinkLead: 'Más información: ',
    singleLinkText: 'Sobredentaduras →',
    multipleTitle: '2. Sobredentadura Superior sin Paladar',
    multipleP: '4 implantes con paladar abierto para saborear toda la comida.',
    multipleLinkLead: 'Descubra: ',
    multipleLinkText: 'Prótesis sin Paladar →',
    allOn4Title: '3. Dentaduras Completas Totales de Alto Impacto',
    allOn4P: 'Prótesis completas fiables y económicas para desdentados totales.',
    allOn4LinkLead: 'Ver detalles: ',
    allOn4LinkText: 'Dentaduras Completas →',
    allOn6Title: '4. Prótesis Flexibles Valplast y de Precisión',
    allOn6P: 'Prótesis parciales sin metal con ganchos del color de la encía.',
    allOn6LinkLead: 'Detalles sobre: ',
    allOn6LinkText: 'Prótesis Parciales →',
  },
  ru: {
    introHeading: 'Зубные протезы и покрывные протезы на имплантах в Стамбуле',
    introP1:
      'Полные съемные протезы и покрывные протезы на замках Locator восстанавливают жевательную функцию, поддержку губ и красивую улыбку за 4–6 дней.',
    partsTitle: '3 составляющие точного съемного зубного протеза:',
    part1Label: '1. Ударопрочный акриловый базис',
    part1Desc: 'Немецкий гипоаллергенный акрил с естественной текстурой и капиллярами десны.',
    part2Label: '2. Многослойные эстетичные композитные зубы',
    part2Desc: 'Высокопрочные зубы с естественной прозрачностью и анатомическими бугорками.',
    part3Label: '3. Кнопочные замковые крепления Locator',
    part3Desc: 'Жесткая фиксация на 2–4 имплантатах без использования фиксирующего клея.',
    healingP: 'Никакого смещения протеза, натертостей десны и проблем с дикцией.',
    solutionP: 'Немецкое качество с экономией до 70% по сравнению с клиниками Европы.',
    whyChooseHeading: 'Почему зубные протезы в Master Smile Studio Стамбул?',
    whyChooseIntroLead: 'Для пациентов со всего мира ',
    whyChooseIntroLink: 'Master Smile Studio Стамбул',
    whyChooseIntroTail: ' — ведущая клиника съемного и покрывного протезирования:',
    reason1Title: 'Опытные врачи-ортопеды и зубные техники',
    reason1P1: 'Восстановление правильной высоты прикуса и овала лица.',
    reason1P2: 'Немецкие сертифицированные материалы и швейцарские замки Locator.',
    reason1P3: 'Постоянный контроль ведущих специалистов клиники.',
    reason2Title: 'Пакеты «Все включено» и экономия до 70%',
    reason2P: '5-звездочный отель и VIP-трансфер включены в стоимость.',
    viewAllPackagesBtn: 'Все пакеты протезов и цены →',
    reason3Title: '3D-томография CBCT и анализ кости',
    reason3P: 'Точная установка имплантатов даже при сильной атрофии костной ткани.',
    reason4Title: 'Реальные результаты До и После',
    reason4P: 'Фотографии пациентов с надежными и эстетичными протезами.',
    reason5Title: 'Отель 5★ и трансфер на Mercedes в Стамбуле',
    reason5PText: 'Личный водитель и русскоязычный координатор. ',
    reason5PLink: 'Получите бесплатный расчет стоимости.',
    typesHeading: 'Виды зубных протезов в Master Smile Studio',
    typesIntro: 'Передовые варианты съемного и замкового протезирования:',
    singleTitle: '1. Покрывные протезы на замках Locator (2–4 импланта)',
    singleP: 'Жесткая кнопочная фиксация без выпадения протеза и клея.',
    singleLinkLead: 'Подробнее: ',
    singleLinkText: 'Протезы на замках →',
    multipleTitle: '2. Верхние протезы без нёба на 4 имплантатах',
    multipleP: 'Свободное нёбо и 100% сохранение вкусовых ощущений.',
    multipleLinkLead: 'Узнать больше: ',
    multipleLinkText: 'Протезы без нёба →',
    allOn4Title: '3. Полные съемные акриловые протезы',
    allOn4P: 'Надежное и экономичное восстановление при полном отсутствии зубов.',
    allOn4LinkLead: 'Ознакомьтесь: ',
    allOn4LinkText: 'Полные съемные протезы →',
    allOn6Title: '4. Нейлоновые гибкие протезы Valplast и бюгели',
    allOn6P: 'Безметалловые эластичные протезы с кламмерами цвета десны.',
    allOn6LinkLead: 'Читать о: ',
    allOn6LinkText: 'Частичных протезах →',
  },
};

export default function DenturesDetailView() {
  const locale = useLocale();
  const d = DENTURES_DATA[locale] || DENTURES_DATA.en;

  return (
    <div className={styles.pageWrapper}>
      {/* 1. INTRO EDITORIAL CLINICAL SECTION */}
      <section aria-labelledby="denture-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h1 id="denture-intro-heading" className={styles.mainHeading}>
            {d.introHeading}
          </h1>
          <p className={styles.textP}>{d.introP1}</p>

          {/* 3-Part Breakdown */}
          <h2 className={styles.subHeading}>{d.partsTitle}</h2>
          <ul className={styles.bulletList}>
            <li>
              <strong>{d.part1Label}</strong> – {d.part1Desc}
            </li>
            <li>
              <strong>{d.part2Label}</strong> – {d.part2Desc}
            </li>
            <li>
              <strong>{d.part3Label}</strong> – {d.part3Desc}
            </li>
          </ul>

          <p className={styles.textP}>{d.healingP}</p>
          <p className={styles.textP}>{d.solutionP}</p>

          {/* Fullwidth Horizontal Video Embed */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/R081L98DAls?t=21"
              title="Dentures and Overdentures in Istanbul Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className={styles.dividerWrap}>
            <TreatmentDivider />
          </div>

          {/* TRIPLE VIDEO SHORTS SLIDER */}
          <TreatmentTripleVideoSlider />
        </div>
      </section>

      {/* 2. FIND THE RIGHT DENTURE TREATMENT ACCORDION */}
      <TreatmentDenturesRightTreatmentAccordion />

      {/* 3. WHY CHOOSE DENTURES IN ISTANBUL */}
      <section aria-labelledby="why-choose-heading" className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.dividerWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="1240"
              height="49"
              src="https://sohodent.com/doc/static/cizgi.webp"
              alt=""
              loading="lazy"
              style={{ width: '100%', maxWidth: '1200px', height: 'auto', display: 'block', opacity: 0.85 }}
            />
          </div>

          <h2 id="why-choose-heading" className={styles.sectionTitle}>
            {d.whyChooseHeading}
          </h2>

          <p className={styles.textP}>
            {d.whyChooseIntroLead}
            <Link href="/treatments/dentures" className={styles.linkGold}>
              {d.whyChooseIntroLink}
            </Link>
            {d.whyChooseIntroTail}
          </p>

          {/* 1. Expert Prosthodontists & Technicians */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>1.</span> {d.reason1Title}
          </h3>
          <p className={styles.textP}>{d.reason1P1}</p>
          <p className={styles.textP}>{d.reason1P2}</p>
          <p className={styles.textP}>{d.reason1P3}</p>

          {/* INSERT: OUR DENTISTS */}
          <div className="my-8">
            <TreatmentDoctorsSection />
          </div>

          {/* INSERT: PARALLAX BANNER */}
          <div className="my-8">
            <TreatmentParallaxBanner />
          </div>

          {/* 2. Denture Cost & Packages */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>2.</span> {d.reason2Title}
          </h3>
          <p className={styles.textP}>{d.reason2P}</p>

          {/* INSERT: DENTURES PACKAGES SLIDER */}
          <div className="my-8">
            <TreatmentDenturesPackagesSlider />
          </div>

          <div className={styles.btnWrap}>
            <Link href="/treatments" className={styles.btnPrimary}>
              {d.viewAllPackagesBtn}
            </Link>
          </div>

          {/* 3. 3D CBCT Tomography & Bone Mapping */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>3.</span> {d.reason3Title}
          </h3>
          <p className={styles.textP}>{d.reason3P}</p>

          {/* Full-width Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/K4Xpx7JMyr8"
              title="Advanced Denture Technology Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 4. Before & After Real Transformations */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>4.</span> {d.reason4Title}
          </h3>
          <p className={styles.textP}>{d.reason4P}</p>

          {/* INSERT: DENTURE BEFORE - AFTER SLIDER */}
          <div className="my-8">
            <TreatmentDenturesBeforeAfterSliderSection />
          </div>

          {/* 5. Luxury Travel & VIP Care */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>5.</span> {d.reason5Title}
          </h3>
          <p className={styles.textP}>
            {d.reason5PText}
            <Link href="/contact" className={styles.linkGold}>
              {d.reason5PLink}
            </Link>
          </p>
        </div>
      </section>

      {/* 4. YOUR DENTAL JOURNEY MADE SIMPLE (4-Step Timeline) */}
      <TreatmentJourneySimpleSection />

      {/* 5. TYPES OF DENTURES (Snap-on Overdentures, Palateless, Complete, Valplast) */}
      <section aria-labelledby="types-dentures-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="types-dentures-heading" className={styles.sectionTitle}>
            {d.typesHeading}
          </h2>
          <p className={styles.textP}>{d.typesIntro}</p>

          {/* 1. Snap-On Overdentures */}
          <h3 className={styles.sectionSubTitle}>{d.singleTitle}</h3>
          <p className={styles.textP}>{d.singleP}</p>
          <p className={styles.textItalic}>
            {d.singleLinkLead}
            <Link href="/treatments/dentures" className={styles.linkGold}>
              {d.singleLinkText}
            </Link>
          </p>

          {/* 2. Palateless Overdenture */}
          <h3 className={styles.sectionSubTitle}>{d.multipleTitle}</h3>
          <p className={styles.textP}>{d.multipleP}</p>
          <p className={styles.textItalic}>
            {d.multipleLinkLead}
            <Link href="/treatments/dentures" className={styles.linkGold}>
              {d.multipleLinkText}
            </Link>
          </p>

          {/* Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/smhwCD78Vbo"
              title="Dentures and Overdentures Restoration Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 3. Complete Dentures */}
          <h3 className={styles.sectionSubTitle}>{d.allOn4Title}</h3>
          <p className={styles.textP}>{d.allOn4P}</p>
          <p className={styles.textItalic}>
            {d.allOn4LinkLead}
            <Link href="/treatments/dentures" className={styles.linkGold}>
              {d.allOn4LinkText}
            </Link>
          </p>

          {/* 4. Valplast & Partial Dentures */}
          <h3 className={styles.sectionSubTitle}>{d.allOn6Title}</h3>
          <p className={styles.textP}>{d.allOn6P}</p>
          <p className={styles.textItalic}>
            {d.allOn6LinkLead}
            <Link href="/treatments/dentures" className={styles.linkGold}>
              {d.allOn6LinkText}
            </Link>
          </p>
        </div>
      </section>

      {/* 6. OUR BEST SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 7. PATIENT VIDEO REELS CAROUSEL */}
      <TreatmentPatientReelsSection />

      {/* 8. BEFORE - AFTER SLIDER (Second Placement) */}
      <TreatmentDenturesBeforeAfterSliderSection />

      {/* 9. COST BREAKDOWN & PACKAGE PROMO BANNER */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 10. DENTURES PACKAGES SLIDER */}
      <TreatmentDenturesPackagesSlider />

      {/* 11. REVIEWS SECTION (Google & Trustpilot) */}
      <TreatmentReviewsSection />

      {/* 12. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <TreatmentDenturesFAQSection />

      {/* 14. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Dentures" />
    </div>
  );
}
